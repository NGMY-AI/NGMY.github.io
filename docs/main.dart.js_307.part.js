((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,A0,A9,A1,A2,I,P,A3,Aa,A4,A5,G,Ab,Ac,A6,Ad,W,Ae,Af,Q,N,Ag,Ah,X,O,V,Ai,Aj,S,K,Ak,L,T,Al,E,F,M,B={
bxy(d){return B.hJy(d)},
hJy(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bxy=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qF(C.mZ(""),d,A.hl,null).cM(0,A.Xe),$async$bxy)
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
return C.i($async$bxy,v)},
hV3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Pm[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dr(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.iC(D.Pm,new B.fpY())
if(w==null)w=A.d.gK(D.Pm)
s=C.V(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q3().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gK(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiP(w.a,w.b,m,w,s,!1)},
hOO(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.PL,new B.fgJ(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i1Q(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.oo(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aH(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gU(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q3().ah(0,p)||J.eZ(s,o)||J.ad(t)>=8)continue
J.cf(s,o)
n=C.V(a5,a8)
for(a9=0;a9<4;++a9){m=D.dbU[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.ex(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.ex(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cf(t,new C.eu([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gU(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.O(C.ex(J.q(g,1))),0,1)
a0=A.o.D(A.k.O(C.ex(J.q(g,3))),0,1)
if(J.eZ(s,f)&&J.eZ(s,e)&&!J.z(f,e))J.cf(i,new C.cL([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aW(a0==null?A.cz:a0)
while(a0.C()){a2=a0.gU(a0)
J.cf(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.ms(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aiP(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hTE(d){var w,v,u=B.fZY()
d.B(u)
for(w=0;w<60;++w)u.uP(0,0.03333333333333333)
v=u.a
return A.d.b8(v,new B.fn2(u))&&!A.d.d9(v,new B.fn3())},
hTD(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.V(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q3().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dam,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hI4(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hV2(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q3().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.PL[u]
if(A.d.b8(w,new B.fpV(s)))if(!C.dr(r,s.b.toLowerCase(),0))v=C.dr(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.fpW(e),C.T(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fpX())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gK(w)
w=$.q3().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiP:function aiP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpY:function fpY(){},
fgJ:function fgJ(){},
fn2:function fn2(d){this.a=d},
fn3:function fn3(){},
fpV:function fpV(d){this.a=d},
fpW:function fpW(d){this.a=d},
fpX:function fpX(){},
UE:function UE(d,e){this.c=d
this.a=e},
bik:function bik(d,e,f,g,h){var _=this
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
e2C:function e2C(d){this.a=d},
e2D:function e2D(d,e,f){this.a=d
this.b=e
this.c=f},
e2E:function e2E(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2L:function e2L(d){this.a=d},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e2H:function e2H(d){this.a=d},
e2I:function e2I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2N:function e2N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e2G:function e2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2T:function e2T(d){this.a=d},
e2S:function e2S(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2R:function e2R(d){this.a=d},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2W:function e2W(d,e){this.a=d
this.b=e},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
bxU(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOc,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hcn(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zl,A.L,w,w),A.aA,C.c_(A.fQ,g,A.bs,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vl,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Fy:function Fy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uC:function uC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V5:function V5(d){this.a=d},
aD_:function aD_(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kW$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eiB:function eiB(){},
eiV:function eiV(d){this.a=d},
eiU:function eiU(d,e){this.a=d
this.b=e},
eiW:function eiW(){},
eiX:function eiX(){},
eiD:function eiD(d,e,f){this.a=d
this.b=e
this.c=f},
eiC:function eiC(d,e){this.a=d
this.b=e},
eis:function eis(d){this.a=d},
eit:function eit(d){this.a=d},
eiu:function eiu(d){this.a=d},
eiv:function eiv(d){this.a=d},
eiw:function eiw(d){this.a=d},
eix:function eix(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiq:function eiq(d){this.a=d},
eir:function eir(d){this.a=d},
eip:function eip(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiG:function eiG(d){this.a=d},
eiL:function eiL(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiE:function eiE(d){this.a=d},
eiP:function eiP(d,e){this.a=d
this.b=e},
eiI:function eiI(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiR:function eiR(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiH:function eiH(d){this.a=d},
bfj:function bfj(d,e){this.b=d
this.a=e},
aKP:function aKP(){},
bvw:function bvw(){},
cCV(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cCV=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tT().ki(0,"assets/data/body3d.bin"),$async$cCV)
case 3:d=a1
$.h7J=J.eX(A.dH.gaP(d),d.byteOffset,d.byteLength)
t=C.bFY(d)
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
e=D.d0_[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2f(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aVT))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b8u(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cCV,v)},
aQH:function aQH(d,e,f){this.a=d
this.b=e
this.c=f},
a2f:function a2f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b8u:function b8u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tv:function Tv(d){this.a=d},
aBp:function aBp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.kW$=t
_.fP$=u
_.fk$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dCk:function dCk(d){this.a=d},
dCj:function dCj(d,e){this.a=d
this.b=e},
dBX:function dBX(d,e){this.a=d
this.b=e},
dBY:function dBY(){},
dCl:function dCl(){},
dBZ:function dBZ(d,e){this.a=d
this.b=e},
dC_:function dC_(d){this.a=d},
dC0:function dC0(){},
dC1:function dC1(d){this.a=d},
dC3:function dC3(d,e){this.a=d
this.b=e},
dC2:function dC2(d){this.a=d},
dBU:function dBU(d,e,f){this.a=d
this.b=e
this.c=f},
dBV:function dBV(d){this.a=d},
dBW:function dBW(d){this.a=d},
dCa:function dCa(d){this.a=d},
dCb:function dCb(d,e){this.a=d
this.b=e},
dCc:function dCc(d,e){this.a=d
this.b=e},
dCd:function dCd(d){this.a=d},
dC9:function dC9(d,e){this.a=d
this.b=e},
dCe:function dCe(d,e){this.a=d
this.b=e},
dC8:function dC8(d,e){this.a=d
this.b=e},
dCf:function dCf(d){this.a=d},
dC7:function dC7(d){this.a=d},
dCg:function dCg(d){this.a=d},
dC6:function dC6(d){this.a=d},
dCh:function dCh(d){this.a=d},
dC5:function dC5(d){this.a=d},
dCi:function dCi(d){this.a=d},
dC4:function dC4(d){this.a=d},
aJR:function aJR(){},
aJS:function aJS(){},
bZt:function bZt(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bZu:function bZu(d,e){this.a=d
this.b=e},
bZv:function bZv(d){this.a=d},
awU(d,e,f,g,h){return new B.b9c(d,e,f,g,h)},
fQW(d,e,f,g,h,i){return $.hFu.ck(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cJH(d,e,f,i,g,h))},
xI:function xI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BR:function BR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nd:function nd(d,e,f){this.a=d
this.b=e
this.c=f},
b9c:function b9c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
faZ:function faZ(){},
fb_:function fb_(){},
fb0:function fb0(){},
fb7:function fb7(){},
fb8:function fb8(){},
fb9:function fb9(){},
TA:function TA(d){this.a=d},
aBs:function aBs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.kW$=n
_.fP$=o
_.fk$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dEv:function dEv(d){this.a=d},
dE9:function dE9(d,e){this.a=d
this.b=e},
dEc:function dEc(){},
dEw:function dEw(){},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE8:function dE8(d,e){this.a=d
this.b=e},
dEd:function dEd(d,e,f){this.a=d
this.b=e
this.c=f},
dE2:function dE2(){},
dE3:function dE3(){},
dE4:function dE4(d){this.a=d},
dE5:function dE5(d,e){this.a=d
this.b=e},
dE6:function dE6(d,e,f){this.a=d
this.b=e
this.c=f},
dEe:function dEe(){},
dEf:function dEf(d,e){this.a=d
this.b=e},
dEg:function dEg(d){this.a=d},
dEb:function dEb(d,e){this.a=d
this.b=e},
dEa:function dEa(d){this.a=d},
dE1:function dE1(d,e,f){this.a=d
this.b=e
this.c=f},
dEp:function dEp(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEq:function dEq(d){this.a=d},
dEn:function dEn(d){this.a=d},
dEl:function dEl(d){this.a=d},
dEm:function dEm(d){this.a=d},
dEk:function dEk(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEj:function dEj(d){this.a=d},
dEr:function dEr(d,e){this.a=d
this.b=e},
dEs:function dEs(d,e){this.a=d
this.b=e},
dEt:function dEt(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEu:function dEu(d,e){this.a=d
this.b=e},
b9u:function b9u(d,e){this.b=d
this.a=e},
cJH:function cJH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJX:function aJX(){},
bvf:function bvf(){},
hwm(){return new B.MI(null)},
os(d,e,f,g,h){return new B.bqS(d,e,f,g,h)},
bpj(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fRr(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
MI:function MI(d){this.a=d},
JN:function JN(d,e){this.a=d
this.b=e},
A3:function A3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBJ:function aBJ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKl:function dKl(d){this.a=d},
dKo:function dKo(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
bqS:function bqS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbp:function fbp(){},
fbq:function fbq(){},
fbr:function fbr(){},
fbC:function fbC(){},
fbE:function fbE(){},
fbF:function fbF(){},
fbG:function fbG(){},
fbH:function fbH(){},
fbI:function fbI(){},
fbJ:function fbJ(){},
fbK:function fbK(){},
fbs:function fbs(){},
fbt:function fbt(){},
fbu:function fbu(){},
fbv:function fbv(){},
fbw:function fbw(){},
fbx:function fbx(){},
fby:function fby(){},
fbz:function fbz(){},
fbA:function fbA(){},
fbB:function fbB(){},
fbD:function fbD(){},
bpk:function bpk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eSS:function eSS(d){this.a=d},
eSR:function eSR(d,e){this.a=d
this.b=e},
eSP:function eSP(d){this.a=d},
eST:function eST(d){this.a=d},
eSQ:function eSQ(d,e){this.a=d
this.b=e},
adV:function adV(d,e,f){this.c=d
this.d=e
this.a=f},
acP:function acP(d,e,f){this.c=d
this.d=e
this.a=f},
Pm:function Pm(d,e,f,g,h,i,j,k,l,m){var _=this
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
bqi:function bqi(d,e){this.b=d
this.a=e},
bpO:function bpO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8b:function b8b(d,e){this.b=d
this.a=e},
aFY:function aFY(d,e){this.c=d
this.a=e},
aFZ:function aFZ(d,e,f){var _=this
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
eSy:function eSy(d){this.a=d},
eSx:function eSx(d){this.a=d},
eSw:function eSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSv:function eSv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSt:function eSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSs:function eSs(d,e,f){this.a=d
this.b=e
this.c=f},
eSu:function eSu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eSr:function eSr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSG:function eSG(d){this.a=d},
eSF:function eSF(d){this.a=d},
eSH:function eSH(d,e){this.a=d
this.b=e},
eSI:function eSI(d,e){this.a=d
this.b=e},
eSJ:function eSJ(d,e){this.a=d
this.b=e},
eSE:function eSE(d,e,f){this.a=d
this.b=e
this.c=f},
eSK:function eSK(d,e,f){this.a=d
this.b=e
this.c=f},
eSD:function eSD(d){this.a=d},
eSz:function eSz(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSM:function eSM(d){this.a=d},
eSC:function eSC(d,e){this.a=d
this.b=e},
eSN:function eSN(d,e){this.a=d
this.b=e},
eSB:function eSB(d,e){this.a=d
this.b=e},
eSO:function eSO(d,e){this.a=d
this.b=e},
eSA:function eSA(d,e){this.a=d
this.b=e},
eSp:function eSp(){},
eSq:function eSq(){},
boX:function boX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boo:function boo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8R:function b8R(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boq:function boq(d,e,f){this.b=d
this.c=e
this.a=f},
bsl:function bsl(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLE:function aLE(){},
hdM(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bfi(d,e,f,g,h,i){return $.hG4.ck(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.deb(d,e,f,i,g,h))},
a_t:function a_t(d,e){this.a=d
this.b=e},
pS:function pS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qz:function qz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BV:function BV(d,e){this.a=d
this.b=e},
Yt:function Yt(d,e){this.a=d
this.b=e},
adL:function adL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_G:function a_G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
C5:function C5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaH:function aaH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaY:function aaY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acT:function acT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfg:function bfg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bM$=0},
def:function def(d){this.a=d},
deg:function deg(d){this.a=d},
dec:function dec(d,e){this.a=d
this.b=e},
ded:function ded(d){this.a=d},
dee:function dee(d){this.a=d},
deh:function deh(d){this.a=d},
dei:function dei(d){this.a=d},
dej:function dej(d){this.a=d},
dek:function dek(d){this.a=d},
del:function del(d){this.a=d},
dem:function dem(d){this.a=d},
den:function den(d){this.a=d},
deo:function deo(d){this.a=d},
dep:function dep(d){this.a=d},
Fl:function Fl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V4:function V4(d){this.a=d},
aCZ:function aCZ(d,e,f,g,h,i,j){var _=this
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
ehW:function ehW(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehN:function ehN(){},
ehO:function ehO(){},
ehR:function ehR(){},
ehS:function ehS(d,e,f){this.a=d
this.b=e
this.c=f},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehP:function ehP(){},
ehQ:function ehQ(d){this.a=d},
eil:function eil(d){this.a=d},
ehV:function ehV(){},
ehH:function ehH(d){this.a=d},
ehY:function ehY(d){this.a=d},
ehX:function ehX(d){this.a=d},
ei_:function ei_(){},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
ehK:function ehK(){},
ehI:function ehI(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
eij:function eij(d){this.a=d},
eii:function eii(d){this.a=d},
eik:function eik(d){this.a=d},
ei9:function ei9(d,e){this.a=d
this.b=e},
eih:function eih(d){this.a=d},
eif:function eif(d){this.a=d},
eig:function eig(d){this.a=d},
eie:function eie(d){this.a=d},
eid:function eid(d){this.a=d},
eia:function eia(d){this.a=d},
eib:function eib(d){this.a=d},
eic:function eic(d){this.a=d},
ehM:function ehM(){},
ei5:function ei5(d){this.a=d},
ei6:function ei6(d){this.a=d},
ei4:function ei4(d){this.a=d},
ei7:function ei7(d){this.a=d},
ei3:function ei3(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei1:function ei1(d){this.a=d},
ei0:function ei0(d,e){this.a=d
this.b=e},
bfh:function bfh(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
deb:function deb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKN:function aKN(){},
bjR:function bjR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Pd:function Pd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Vk:function Vk(d){this.a=d},
biV:function biV(d,e,f,g,h,i,j,k){var _=this
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
etM:function etM(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(){},
etn:function etn(){},
etm:function etm(){},
etw:function etw(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etC:function etC(d){this.a=d},
etx:function etx(d){this.a=d},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
etG:function etG(d){this.a=d},
etu:function etu(d){this.a=d},
etH:function etH(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
etJ:function etJ(d){this.a=d},
etr:function etr(d){this.a=d},
etz:function etz(d){this.a=d},
etq:function etq(d){this.a=d},
etA:function etA(d){this.a=d},
etp:function etp(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
bqd:function bqd(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vw:function Vw(d){this.a=d},
aDe:function aDe(d,e,f,g){var _=this
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
eAl:function eAl(d,e){this.a=d
this.b=e},
eAm:function eAm(d,e,f){this.a=d
this.b=e
this.c=f},
eAn:function eAn(d){this.a=d},
eAk:function eAk(){},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAj:function eAj(d,e){this.a=d
this.b=e},
eAp:function eAp(d,e){this.a=d
this.b=e},
eAi:function eAi(d,e){this.a=d
this.b=e},
eAq:function eAq(d){this.a=d},
eAh:function eAh(d){this.a=d},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAg:function eAg(d,e){this.a=d
this.b=e},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAf:function eAf(d,e){this.a=d
this.b=e},
aKW:function aKW(){},
aL1:function aL1(){},
a__:function a__(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
V1:function V1(d){this.a=d},
aCR:function aCR(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kW$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eez:function eez(d){this.a=d},
eeA:function eeA(d,e){this.a=d
this.b=e},
een:function een(d,e){this.a=d
this.b=e},
eeo:function eeo(d){this.a=d},
eel:function eel(d){this.a=d},
eem:function eem(d){this.a=d},
eek:function eek(d){this.a=d},
eep:function eep(d){this.a=d},
eej:function eej(d,e){this.a=d
this.b=e},
eer:function eer(d){this.a=d},
eei:function eei(d,e){this.a=d
this.b=e},
ees:function ees(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
eeg:function eeg(d){this.a=d},
eeu:function eeu(d){this.a=d},
eef:function eef(d){this.a=d},
eev:function eev(d){this.a=d},
eee:function eee(d){this.a=d},
eew:function eew(d){this.a=d},
eex:function eex(d){this.a=d},
eey:function eey(d){this.a=d},
eed:function eed(d){this.a=d},
eeq:function eeq(d){this.a=d},
bjE:function bjE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaO:function aaO(d,e,f){this.a=d
this.b=e
this.c=f},
Vr:function Vr(d){this.a=d},
bj_:function bj_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kW$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
ezN:function ezN(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezM:function ezM(d){this.a=d},
ezC:function ezC(d,e){this.a=d
this.b=e},
ezD:function ezD(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezE:function ezE(d,e){this.a=d
this.b=e},
ezy:function ezy(d,e){this.a=d
this.b=e},
ezF:function ezF(d,e){this.a=d
this.b=e},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezG:function ezG(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezv:function ezv(d,e){this.a=d
this.b=e},
ezI:function ezI(d){this.a=d},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezJ:function ezJ(d){this.a=d},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezK:function ezK(d){this.a=d},
ezp:function ezp(d,e){this.a=d
this.b=e},
ezL:function ezL(d){this.a=d},
ezo:function ezo(d,e){this.a=d
this.b=e},
br3:function br3(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abg:function abg(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Ty:function Ty(d){this.a=d},
aBr:function aBr(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kW$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dDE:function dDE(d){this.a=d},
dDD:function dDD(d,e){this.a=d
this.b=e},
dDF:function dDF(){},
dDG:function dDG(d){this.a=d},
dDu:function dDu(d,e){this.a=d
this.b=e},
dDx:function dDx(d){this.a=d},
dDw:function dDw(d,e){this.a=d
this.b=e},
dDv:function dDv(d,e){this.a=d
this.b=e},
dDB:function dDB(d,e,f){this.a=d
this.b=e
this.c=f},
dDA:function dDA(d){this.a=d},
dDy:function dDy(d){this.a=d},
dDz:function dDz(d){this.a=d},
dDC:function dDC(d){this.a=d},
b9b:function b9b(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cJe:function cJe(d){this.a=d},
aJV:function aJV(){},
bve:function bve(){},
aKK:function aKK(){},
bvv:function bvv(){},
aKZ:function aKZ(){},
bvD:function bvD(){},
Fh:function Fh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
ac5:function ac5(d,e,f){this.a=d
this.b=e
this.c=f},
UW:function UW(d){this.a=d},
biz:function biz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kW$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
ea2:function ea2(d,e){this.a=d
this.b=e},
ear:function ear(d){this.a=d},
eag:function eag(d){this.a=d},
ea7:function ea7(d){this.a=d},
eah:function eah(d,e){this.a=d
this.b=e},
eai:function eai(d){this.a=d},
ea6:function ea6(d){this.a=d},
eae:function eae(d){this.a=d},
eaf:function eaf(d){this.a=d},
ead:function ead(d){this.a=d},
eaj:function eaj(d,e){this.a=d
this.b=e},
eac:function eac(d,e){this.a=d
this.b=e},
eak:function eak(d,e){this.a=d
this.b=e},
eab:function eab(d,e){this.a=d
this.b=e},
eal:function eal(d,e){this.a=d
this.b=e},
eaa:function eaa(d,e){this.a=d
this.b=e},
eam:function eam(d){this.a=d},
ea9:function ea9(d,e){this.a=d
this.b=e},
ean:function ean(d){this.a=d},
ea8:function ea8(d){this.a=d},
eao:function eao(d){this.a=d},
ea5:function ea5(d){this.a=d},
eap:function eap(d){this.a=d},
ea4:function ea4(d){this.a=d},
eaq:function eaq(d){this.a=d},
ea3:function ea3(d){this.a=d},
bgb:function bgb(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
acA:function acA(d,e){this.a=d
this.b=e
this.c=-1000},
V0:function V0(d){this.a=d},
aCQ:function aCQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kW$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
edX:function edX(d,e){this.a=d
this.b=e},
edY:function edY(d,e,f){this.a=d
this.b=e
this.c=f},
ee4:function ee4(d){this.a=d},
ee3:function ee3(d){this.a=d},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
ee2:function ee2(d){this.a=d},
ee7:function ee7(d){this.a=d},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
eea:function eea(d){this.a=d},
eeb:function eeb(d){this.a=d},
edZ:function edZ(d){this.a=d},
eec:function eec(d){this.a=d},
bjF:function bjF(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKI:function aKI(){},
bvt:function bvt(){},
aKJ:function aKJ(){},
bvu:function bvu(){},
f7g(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a7g,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iR,w,w,1/0)},
hVs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.V(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gaf(j);j.C();){s=j.gU(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e2(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bI(0,new B.fqe(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vM.h(0,d[n]).a)return!1
m=C.ev([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
fTX(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
t1:function t1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b84:function b84(d,e){this.a=d
this.b=e},
fqe:function fqe(d,e){this.a=d
this.b=e},
UZ:function UZ(d){this.a=d},
aCO:function aCO(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
edr:function edr(d){this.a=d},
edq:function edq(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ed8:function ed8(d){this.a=d},
edc:function edc(d,e){this.a=d
this.b=e},
edb:function edb(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
eda:function eda(d,e){this.a=d
this.b=e},
edl:function edl(){},
edm:function edm(d){this.a=d},
edk:function edk(d){this.a=d},
edn:function edn(d){this.a=d},
edj:function edj(d){this.a=d},
edh:function edh(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
ede:function ede(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edg:function edg(d){this.a=d},
edo:function edo(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
edp:function edp(d,e){this.a=d
this.b=e},
bgT:function bgT(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dmj:function dmj(d,e){this.a=d
this.b=e},
TX:function TX(d){this.a=d},
bhP:function bhP(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dMq:function dMq(d){this.a=d},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMf:function dMf(d){this.a=d},
dMe:function dMe(){},
dMg:function dMg(d){this.a=d},
dMd:function dMd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMo:function dMo(){},
dMj:function dMj(){},
dMk:function dMk(d,e){this.a=d
this.b=e},
dMi:function dMi(d,e){this.a=d
this.b=e},
dMl:function dMl(d){this.a=d},
dMh:function dMh(d){this.a=d},
dMm:function dMm(d,e){this.a=d
this.b=e},
dMn:function dMn(d,e){this.a=d
this.b=e},
Uc:function Uc(d){this.a=d},
aBV:function aBV(d,e,f,g,h){var _=this
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
dPf:function dPf(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dP2:function dP2(){},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP3:function dP3(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP6:function dP6(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP9:function dP9(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPa:function dPa(d){this.a=d},
dPb:function dPb(d){this.a=d},
dPc:function dPc(d){this.a=d},
dPd:function dPd(d){this.a=d},
bcd:function bcd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d1J:function d1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d1L:function d1L(d,e,f){this.a=d
this.b=e
this.c=f},
d1K:function d1K(d,e){this.a=d
this.b=e},
aK8:function aK8(){},
byp(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a7g,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iR,w,w,1/0)},
fk8(d,e,f,g,h){var w,v,u=null,t=C.ii(u,u,u,u,C.dq(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ch,u,A.eq,A.cd)
t.eP()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbc(w)/2))
t.a5(d,w)},
hSx(){var w,v,u,t,s,r,q,p,o=new C.eP()
o.dG(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aA(5)
if(r.L(0,p))q.push(new C.y(p,1+o.aA(2+A.o.an(t,3))))}A.d.b_(q,new B.fl7())
w.push(new B.aQx(q))}return w},
a0S(d,e){var w,v,u,t
for(w=new C.Wx(d),v="";w.C();){u=C.jE(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jE(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i48(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Wx(d),v=0,u="";w.C();){t=C.jE(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=C.jE(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQx:function aQx(d){this.a=d},
bEr:function bEr(){},
fl7:function fl7(){},
Tq:function Tq(d){this.a=d},
bht:function bht(d,e,f,g,h,i){var _=this
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
dzP:function dzP(){},
dA1:function dA1(d){this.a=d},
dA0:function dA0(d,e,f){this.a=d
this.b=e
this.c=f},
dA2:function dA2(d){this.a=d},
dA_:function dA_(d,e){this.a=d
this.b=e},
dzQ:function dzQ(d,e){this.a=d
this.b=e},
dzV:function dzV(){},
dzW:function dzW(d){this.a=d},
dzU:function dzU(d){this.a=d},
dzX:function dzX(d,e){this.a=d
this.b=e},
dzT:function dzT(d,e){this.a=d
this.b=e},
dzY:function dzY(d,e){this.a=d
this.b=e},
dzS:function dzS(d,e){this.a=d
this.b=e},
dzZ:function dzZ(d){this.a=d},
dzR:function dzR(d){this.a=d},
b8g:function b8g(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cBM:function cBM(d,e){this.a=d
this.b=e},
Uq:function Uq(d){this.a=d},
bi0:function bi0(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dTi:function dTi(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTg:function dTg(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e,f){this.a=d
this.b=e
this.c=f},
dTc:function dTc(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTf:function dTf(d,e){this.a=d
this.b=e},
bdH:function bdH(d,e,f){this.b=d
this.c=e
this.a=f},
d9u:function d9u(d,e){this.a=d
this.b=e},
d9v:function d9v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tz:function Tz(d){this.a=d},
bhG:function bhG(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dE0:function dE0(d){this.a=d},
dE_:function dE_(d,e){this.a=d
this.b=e},
dDJ:function dDJ(){},
dDS:function dDS(d){this.a=d},
dDR:function dDR(){},
dDT:function dDT(d){this.a=d},
dDQ:function dDQ(){},
dDU:function dDU(d){this.a=d},
dDP:function dDP(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDN:function dDN(d){this.a=d},
dDX:function dDX(d,e){this.a=d
this.b=e},
dDM:function dDM(d,e){this.a=d
this.b=e},
dDY:function dDY(d){this.a=d},
dDL:function dDL(d,e){this.a=d
this.b=e},
dDZ:function dDZ(d){this.a=d},
dDK:function dDK(d,e){this.a=d
this.b=e},
aJN:function aJN(){},
aKg:function aKg(){},
hiL(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gco()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fZY(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3x(w,v,u,A.cI,C.V(x.N,x.y))},
hqh(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.fZZ(d),d.d*f.b)},
fZZ(d){return 42+(D.lS.ah(0,d.b)?(d.ch-1)*38:0)},
e8:function e8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
te:function te(d,e,f,g){var _=this
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
a9p:function a9p(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aat:function aat(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3x:function a3x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bKm:function bKm(){},
bKx:function bKx(d){this.a=d},
bKs:function bKs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKy:function bKy(d){this.a=d},
bKz:function bKz(d){this.a=d},
bKB:function bKB(d){this.a=d},
bKC:function bKC(d){this.a=d},
bKA:function bKA(d){this.a=d},
bKD:function bKD(d,e,f){this.a=d
this.b=e
this.c=f},
bKE:function bKE(d){this.a=d},
bKo:function bKo(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKn:function bKn(d){this.a=d},
bKq:function bKq(d,e,f){this.a=d
this.b=e
this.c=f},
bKr:function bKr(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKw:function bKw(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKu:function bKu(d){this.a=d},
ahD:function ahD(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFD:function bFD(){},
bFE:function bFE(){},
ms:function ms(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciL:function ciL(d){this.a=d},
i1O(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fBD(),c9=new B.fBF(),d0=new B.fBG(),d1=new B.fBE(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.aa(w.a,w.b,w.c,w.d),A.bM,A.bJ))
d3.bA(D.e11,D.dZQ,c9.$2(A.dA,1.4))
d3.bA(D.dZG,D.dZF,c9.$2(A.bv,2.4))
d3.bA(D.dZH,W.aFc,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.Qw
d3.ai(D.dZq,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aL0,A.aQ,A.cp))
d3.ai(A.cJ,16,c8.$1(A.bv))
d3.ai(A.cJ,13,c8.$1(c7?A.aV.j(0.85):A.M))
if(c7){d2=d3.a
J.bz(d2.save())
d2.translate(0,4)
d3.ja(0,d4.y*0.6)
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
r.delete()}}d3.ai(D.e0Y,2.4,c8.$1(c7?A.bo:A.ak))
d3.ai(D.e1F,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.eu))
d2=$.X().r
t=x.v
q=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bF())
d3.aO(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.ay.j(0.7)))}d3.aO(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bz(d2.save())
d2.translate(0,10)
d3.ja(0,d4.y)
d3.bA(D.a4q,D.aFs,c9.$2(A.bR,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ai(A.ig,3,c8.$1(c7?A.bo:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2e[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bz(d2.save())
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
w.E(new C.bF())
d3.aO(w,d1.$3(D.eDS,A.aM,A.d9))
d3.aY(D.eDh,c8.$1(A.dz))
d2=d3.a
J.bz(d2.save())
d2.translate(18,-5)
d3.ja(0,d4.y*2)
d3.bA(A.J,D.dZK,c9.$2(A.bR,2.4))
d3.bA(A.a4p,D.dZJ,c9.$2(A.hG,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
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
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.bK.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eDY,A.bn,A.cE))
k=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aO(k,c8.$1(A.eu))
d3.ai(D.dZO,7,c8.$1(c7?A.c:A.dz))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(M.mU))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bw(d5*17),3)!==0
else j=!1
i=j?A.bV:D.bfd
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bV.j(0.35))
t.z=A.lj
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e17,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eE3,A.bR,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bK.j(0.75):A.aB))
if(c7){d2=d3.a
J.bz(d2.save())
d2.translate(-7,8)
d3.ja(0,d4.y*0.5)
d3.hM(C.cu(A.J,7,22),c8.$1(A.d9))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(M.mU))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.F(A.k.bw(d5),60)),2,"0"),D.dZP,A.b8,6.5)
d3.ai(D.e_0,4,c8.$1(A.dz))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ai(A.Rk,10,c8.$1(c7?A.cn:A.bv))
d2=d3.a
J.bz(d2.save())
d2.translate(0,-8)
d3.ja(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e1H,A.c,16)
d2.restore()
d3.ai(A.k0,6,c8.$1(A.d6))
d3.ai(A.k0,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.Rk,14+v*6+A.k.F(t,6))
r=c9.$2(A.cn.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c4(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e16,D.e1D,c9.$2(A.bv,4))
d2=d3.a
J.bz(d2.save())
d3.ja(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eDT,A.bR,A.ak))
d3.ai(D.aFe,8,c8.$1(A.aB))
d3.ai(D.aFe,4.5,c8.$1(c7?A.aV:A.cE))
d3.ai(D.e14,2.2,c8.$1(c7&&A.o.F(A.k.bw(d5*1.6),2)===0?A.ay:A.kc))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e1f,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eE0,A.j8,A.f6))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dK))
if(c7){d2=d5*2.3
d3.ai(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.aa(-18,t,-15.6,t+8),c8.$1(A.b8))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.aa(15.6,d2,18,d2+8),c8.$1(A.bV))}d3.ai(D.e10,4,c8.$1(A.aX))
d3.ai(D.dZL,2.4,c8.$1(A.ay))
d3.ai(D.dZY,2.4,c8.$1(A.bo))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aB))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dK))
if(c7){d2=$.X()
t=C.a([],x.v)
h=new C.aQ(d2.r,A.ap,c6,c6,t)
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
h.e=null}}d3.aO(h,c9.$2(A.b8,1.8))
d6.$5(d3,"72",D.dZM,A.h_,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e1j,A.h_.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ai(D.e19,3,c8.$1(c7?A.bo:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cx.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eDV,c8.$1(F.t_))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bz(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rW(0,-1,1)
d3.hM(C.cu(A.J,8,14),c8.$1(A.ct))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.cb))
d3.ai(D.e_s,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
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
e.E(new C.bF())
d3.aO(e,d1.$3(D.eEo,A.c,A.bI))
d3.aY(D.eEn,c8.$1(c7?A.dN:A.bv))
s=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aO(s,c8.$1(A.er))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.Qw
d3.ai(D.dZr,14,d2)}return!0
case"discoball":d3.bA(D.dZw,L.aFa,c9.$2(A.dz,1.4))
d3.ai(A.J,16,d1.$3(D.eDG,A.aQ,A.ak))
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
r=c8.$1(D.d0X[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eDE,A.cp,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eDx,A.aL,A.bJ))
d3.bA(D.dZv,D.dZx,c9.$2(A.bv,1.6))
d3.ai(D.dZy,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2f[m]
if(c7)t=a1?A.b7:A.fi
else t=A.cE
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bz(d2.save())
d2.translate(14,0)
d3.ja(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a4m,c9.$2(A.bJ,4))
d2.restore()
d3.bA(D.e0U,D.e1d,c9.$2(A.bJ,4))
d3.aY(D.eEm,c8.$1(c7?A.b7.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.awh[m]+1,d2,10,14,2)
p=C.aq(A.bK,A.d9,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.ep(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eDU,A.bR,A.bn))
for(m=0;m<2;++m){l=D.awh[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fC:A.aB).H()
t.drawRRect(C.ep(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mt
r=s.H()
t.drawRRect(C.ep(d2),r)
r.delete()}}d3.bA(D.e_4,D.e_l,c9.$2(A.aB,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cE))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.mJ(1,a3,0.8,1).iG():A.eu
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mt
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dz))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eDJ,A.cx,A.Kr))
d3.ai(D.e1k,8,c8.$1(A.qD))
d2=d3.a
J.bz(d2.save())
d2.translate(-2,9)
d3.ja(0,d4.y)
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
d3.aO(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hi).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ai(D.e_T,3.2,c8.$1(A.hi.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bz(d2.save())
d3.ja(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eDW,A.j4,A.t2))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eu))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mt
d3.ai(D.e__,8,d2)}return!0
case"headphones":d3.f4(C.cu(A.dC,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.awi[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.aa(s,0,s+14,20),A.by,A.pi).H()
d2.drawRRect(C.ep(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ez.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c4(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.F(d5*14,8)),A.k9,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eDC,A.dz,A.eu))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dK))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dh(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.dZC,A.b8,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DU,A.h_,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bw(d5*2),6)),A.dC,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(M.mU))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(a5),$.pj(),!0)
d2.translate(-27,-19)
E.KB(d3,D.eJE,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uX))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.aa(a6.a,a6.b,a6.c,a6.d),A.dS,A.dq))
d3.aD(a6,c9.$2(A.b2,1.2))
d3.ai(D.aFz,9,c8.$1(A.aB))
d3.ai(D.aFz,6,c9.$2(A.d9,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aB))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dK))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b8:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e_X,s,8.2)
d3.ai(D.dZR,2.4,c8.$1(c7?A.bo:A.aK))
d6.$5(d3,"IN",D.e1e,A.ad,6)
d6.$5(d3,"OUT",D.e_L,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ai(D.dZs,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eDy,A.eu,A.hD))
d6.$5(d3,"7805",D.a4q,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d6u[m]-1
r=c8.$1(A.e_).H()
d2.drawRect(C.c4(new C.aa(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e1G,A.bh,9)
return!0
case"diode":d3.bA(D.aFD,D.aFn,c9.$2(A.e_,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aH.j(0.85)))
d3.aY(D.eDn,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.jk
d3.aD(d2,t)}d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e12,A.az,8)
return!0
case"ldr":d3.bA(D.aFD,D.a4q,c9.$2(A.e_,2.4))
d3.bA(D.aFs,D.aFn,c9.$2(A.e_,2.4))
d3.ai(A.J,12,c8.$1(A.d9))
d3.ai(A.J,12,c9.$2(A.tc,1.6))
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
a8.e=null}d3.aO(a8,c9.$2(A.bK,1.4))
d2=C.aq(A.bv,A.dN,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e0V,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e8
break A}if("sonytv"===d2){t=A.qw
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
J.bz(p.save())
p.clipRRect(C.ep(a5),$.pj(),!0)
p.translate(t,s)
E.fWf(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ai(D.e_m,1.6,c8.$1(A.b8))}else{d3.aD(a5,c8.$1(D.uX))
p=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aO(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dz))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oN[m]
s=$.X()
p=C.a([],t)
s=new C.aQ(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dz).H()
p=s.gbJ().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e0y,A.bR,5.5)
break
case"appletv":d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.W8))
d6.$5(d3,"Apple TV",D.e_Y,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bdN))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dn,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e1C,F.t_,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lS.h(0,d2)
b1=b0.b===D.w_
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
J.bz(t.save())
t.clipRRect(C.ep(a5),$.pj(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KB(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.uX))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ai(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eu))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bR))
if(c7){d6.$5(d3,"NGMY",D.e1J,A.aB,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c4(new C.aa(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ai(A.aF8,1.6,c8.$1(A.aB))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eE4,A.cp,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(b8),$.pj(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KB(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uX))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.W8))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eE8,A.bM,A.cp))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(b9),$.pj(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KB(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uX))
d3.ai(D.aF3,2,c8.$1(A.bJ))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.W8))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e8))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(c0),$.pj(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KB(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.uX))
d3.aY(D.eEe,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dz))
return!0
case"projector":if(c7){d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(c1),$.pj(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KB(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eDX,A.iL,A.dz))
d3.ai(D.aFd,7,c8.$1(A.aB))
d3.ai(D.aFd,4,c8.$1(c7?A.dN:A.cE))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dn,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aB))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(M.mU))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aO(c3,c9.$2(A.aV,2.2))
d2=A.k.F(d5*6,48)
d3.ai(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b8))
d6.$5(d3,""+(88+A.o.F(A.k.bw(d5*2),5)),D.e_U,A.c,10)
d6.$5(d3,"km/h",D.e_R,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.aa(c4.a,c4.b,c4.c,c4.d),A.dz,A.eu))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bz(d2.save())
d2.clipRRect(C.ep(c5),$.pj(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KB(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.lj
d3.ai(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e1o,D.e1t,c9.$2(A.bn,4))
d3.bA(D.e_n,D.e_v,c9.$2(A.bn,4))
return!0}return!1},
fBD:function fBD(){},
fBF:function fBF(){},
fBG:function fBG(){},
fBE:function fBE(){},
fYS(d,e,f,g){return new B.ahB(d,g,f,e)},
F5(d,e,f){return new B.b9d(d,e,f)},
ahB:function ahB(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahC:function ahC(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kW$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bFh:function bFh(d,e){this.a=d
this.b=e},
bFi:function bFi(d){this.a=d},
bFg:function bFg(d){this.a=d},
bFj:function bFj(){},
bFk:function bFk(d){this.a=d},
bFl:function bFl(d,e,f){this.a=d
this.b=e
this.c=f},
bFf:function bFf(d,e){this.a=d
this.b=e},
bFd:function bFd(d,e){this.a=d
this.b=e},
bFe:function bFe(d,e,f){this.a=d
this.b=e
this.c=f},
bF7:function bF7(d,e){this.a=d
this.b=e},
bF8:function bF8(){},
bF9:function bF9(d,e){this.a=d
this.b=e},
bFa:function bFa(d,e){this.a=d
this.b=e},
bFb:function bFb(d){this.a=d},
bFc:function bFc(d){this.a=d},
bFA:function bFA(d){this.a=d},
bFB:function bFB(){},
bEL:function bEL(){},
bFC:function bFC(d,e){this.a=d
this.b=e},
bFz:function bFz(d,e,f){this.a=d
this.b=e
this.c=f},
bFu:function bFu(d){this.a=d},
bFr:function bFr(d,e,f){this.a=d
this.b=e
this.c=f},
bFs:function bFs(d,e){this.a=d
this.b=e},
bFv:function bFv(d){this.a=d},
bFp:function bFp(d,e){this.a=d
this.b=e},
bFq:function bFq(d,e){this.a=d
this.b=e},
bFt:function bFt(d){this.a=d},
bFw:function bFw(d){this.a=d},
bFn:function bFn(d,e){this.a=d
this.b=e},
bFo:function bFo(d,e){this.a=d
this.b=e},
bFx:function bFx(d){this.a=d},
bFm:function bFm(d){this.a=d},
bFy:function bFy(d){this.a=d},
bEM:function bEM(d,e){this.a=d
this.b=e},
bF4:function bF4(d,e){this.a=d
this.b=e},
bF6:function bF6(d,e){this.a=d
this.b=e},
bF5:function bF5(d,e){this.a=d
this.b=e},
bES:function bES(d,e){this.a=d
this.b=e},
bET:function bET(d){this.a=d},
bER:function bER(d){this.a=d},
bEU:function bEU(d,e,f){this.a=d
this.b=e
this.c=f},
bEQ:function bEQ(d,e){this.a=d
this.b=e},
bEX:function bEX(d,e){this.a=d
this.b=e},
bEY:function bEY(d,e){this.a=d
this.b=e},
bEZ:function bEZ(d,e){this.a=d
this.b=e},
bF_:function bF_(d,e,f){this.a=d
this.b=e
this.c=f},
bEP:function bEP(d,e){this.a=d
this.b=e},
bF0:function bF0(d,e,f){this.a=d
this.b=e
this.c=f},
bEO:function bEO(d,e){this.a=d
this.b=e},
bF1:function bF1(d,e,f){this.a=d
this.b=e
this.c=f},
bEN:function bEN(d,e){this.a=d
this.b=e},
bF2:function bF2(d){this.a=d},
bF3:function bF3(d){this.a=d},
bEV:function bEV(d){this.a=d},
bEW:function bEW(d){this.a=d},
b9d:function b9d(d,e,f){this.a=d
this.b=e
this.c=f},
fba:function fba(){},
fbb:function fbb(){},
fbc:function fbc(){},
faY:function faY(){},
fbd:function fbd(){},
faX:function faX(){},
fbe:function fbe(){},
fb1:function fb1(){},
faW:function faW(){},
fb2:function fb2(){},
faV:function faV(){},
fb3:function fb3(){},
faU:function faU(){},
fb4:function fb4(){},
faS:function faS(){},
faT:function faT(){},
fb5:function fb5(){},
faQ:function faQ(){},
faR:function faR(){},
fb6:function fb6(){},
faP:function faP(){},
Ud:function Ud(d){this.a=d},
aBW:function aBW(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPx:function dPx(){},
dPy:function dPy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPz:function dPz(){},
dPm:function dPm(d){this.a=d},
dPl:function dPl(d,e,f){this.a=d
this.b=e
this.c=f},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPj:function dPj(){},
dPv:function dPv(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPq:function dPq(d){this.a=d},
dPr:function dPr(){},
dPt:function dPt(d,e,f){this.a=d
this.b=e
this.c=f},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(){},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPA:function dPA(){},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPF:function dPF(d){this.a=d},
aw2:function aw2(d,e){this.c=d
this.a=e},
b7p:function b7p(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
czj:function czj(d){this.a=d},
b7o:function b7o(d,e){this.b=d
this.a=e},
czi:function czi(d){this.a=d},
awl:function awl(){},
awm:function awm(){},
aIj:function aIj(){},
bvh:function bvh(){},
i1P(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.vS,23)
$.X()
b8=C.M()
b8.r=A.aB.gp(0)
b9.ai(A.vS,25,b8)
b8=C.M()
b8.sau(D.e9A.aw(0,v))
b9.ai(A.vS,23,b8)
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
b9.bA(A.vS,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bh.gp(0)
b9.ai(A.vS,3,r)
c2.$5(b9,w?"V":"A",D.e1w,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e1_,A.aB,9.5)
return!0
case"fan":b8=C.bA(D.eDu,A.hA)
$.X()
s=C.M()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aY(D.eEf,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.ai(D.vT,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bz(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cu(A.aF7,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.hi.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c4(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bm.gp(0)
b9.ai(D.vT,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cp.gp(0)
b9.ai(D.vT,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.j9.gp(0)
b9.ai(D.vT,14,b8)
return!0
case"speaker":l=C.bA(D.aL0,A.ul)
$.X()
b8=C.M()
b8.sau(D.ang.aw(0,new C.aa(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.sau(D.e9W.aw(0,C.bU(A.cv,15)))
b9.ai(A.cv,14+k,b8)
b8=C.M()
b8.r=A.dz.gp(0)
b9.ai(A.cv,5,b8)
b8=C.M()
b8.r=A.bn.gp(0)
b9.ai(D.aF9,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e_3,6+u*6+A.k.F(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bV.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c4(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bA(D.eE7,A.ul)
$.X()
b8=C.M()
b8.sau(D.bSM.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.aL2,A.ii)
s=C.M()
s.r=A.hD.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bq(i)<500?":":" "
g=A.a.aT(A.o.u(C.dh(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.b8.j(0.12).gp(0)
b9.aY(D.aL2,b8)
c2.$5(b9,g+h+f,D.e1h,A.b8,21)}b8=C.M()
b8.r=A.cp.gp(0)
b9.ai(D.e1g,2.4,b8)
b8=C.M()
b8.r=A.cp.gp(0)
b9.ai(D.e_7,2.4,b8)
return!0
case"calculator":j=C.bA(D.eDO,A.hd)
$.X()
b8=C.M()
b8.sau(D.bSv.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.eDI,A.hc)
s=C.M()
s.r=(b7?A.Wm:D.bfI).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e0Z,A.Vd,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bA(new C.aa(q,s,q+6,r),A.RN)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cb:A.bR).gp(0)
n=p.H()
b8.drawRRect(C.ep(q),n)
n.delete()}return!0
case"phone":j=C.bA(D.eDF,A.hd)
$.X()
b8=C.M()
b8.r=M.mU.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.aeO.gp(0)
b9.aD(j,b8)
a0=C.bA(D.eDw,A.hA)
if(b7){b8=C.M()
b8.sau(D.bU3.aw(0,new C.aa(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bz(b8.save())
b8.clipRRect(C.ep(a0),$.pj(),!0)
b8.translate(-12,-25)
E.KB(b9,D.eJf,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=C.bA(D.eDt,A.hc)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.b8.gp(0)
b9.aY(new C.aa(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e0g,A.c,6)}else{b8=C.M()
b8.r=D.uX.gp(0)
b9.aD(a0,b8)}b8=C.bA(D.eEp,D.ea4)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bA(D.eE6,A.rn)
$.X()
b8=C.M()
b8.sau(D.bT1.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.awi[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cE.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bw(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bo:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.vT,8+u*6+A.k.F(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hv.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c4(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bA(D.eDN,A.hA)
s=$.X()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yI
b9.ai(A.vS,34,b8)}a6=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.M()
b8.r=C.aq(A.er,D.b8l,a5).gp(0)
b9.aO(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.bz(b8.save())
b8.translate(0,-2)
b9.ja(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aF9,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bz(b8.save())
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
j.E(new C.bF())
q=C.M()
q.sau(D.bR8.aw(0,D.eE_))
b9.aO(j,q)
q=new C.aQ(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.M()
p.r=A.fh.gp(0)
b9.aO(q,p)
r=new C.aQ(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.M()
s.r=A.fh.gp(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.d6m[a2]
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bz(b8.save())
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
case"kettle":b8=$.X().r
s=x.v
j=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cS(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bF())
r=C.M()
r.sau(D.bSb.aw(0,D.eDM))
b9.aO(j,r)
r=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
q=C.M()
q.r=A.e_.gp(0)
b9.aO(r,q)
s=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cS(-34,-6,-18,12))
b8=C.M()
b8.b=A.ae
b8.c=5
b8.r=A.aB.gp(0)
b9.aO(s,b8)
b8=C.M()
if(b7){s=C.aq(A.ct,A.uW,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eu
b8.r=s.gp(0)
b9.aY(D.eDL,b8)
if(b7){b8=C.M()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.lj
b9.ai(A.aF5,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aB.gp(0)
b9.ai(D.dZp,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aQ($.X().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bF())
s=C.M()
s.r=A.dN.j(0.28*u).gp(0)
b9.aO(b8,s)
s=C.M()
s.r=A.dN.j(0.5*u).gp(0)
s.z=X.Hc
b9.ai(D.e1l,24,s)}b8=C.bA(D.eEl,A.hA)
s=$.X()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dz.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.dZD,D.aFf,r)
r=C.M()
r.r=A.dz.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aFf,D.e1m,r)
a9=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.M()
s.r=(b7?A.aM:A.jO).gp(0)
b9.aO(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ai(D.e1n,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.hh.gp(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1j[u].j(0.6).gp(0)
b3.z=A.Qw
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aQ(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cS(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1j[u]
else{o=C.aq(D.a1j[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbJ().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i1O(b9,c0,c1,c2)},
fJ:function fJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUm(d){var w=D.lS.h(0,d)
return(w==null?null:w.b)===D.z6},
i2V(d,e,f){return C.a5(d,!1).c6(C.uv(null,!1,!0,!0,new B.fGc(e,f),A.eN,null,A.py,new B.fGd(),x.H))},
IJ:function IJ(d,e){this.a=d
this.b=e},
m_:function m_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGc:function fGc(d,e){this.a=d
this.b=e},
fGd:function fGd(){},
TV:function TV(d,e,f){this.c=d
this.d=e
this.a=f},
bhN:function bhN(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dLj:function dLj(d){this.a=d},
dLi:function dLi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLg:function dLg(){},
dLh:function dLh(d){this.a=d},
dLf:function dLf(d){this.a=d},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLd:function dLd(d,e){this.a=d
this.b=e},
dLc:function dLc(d){this.a=d},
dLb:function dLb(d){this.a=d},
dL7:function dL7(d){this.a=d},
dL6:function dL6(d){this.a=d},
dLa:function dLa(d,e,f){this.a=d
this.b=e
this.c=f},
dL9:function dL9(d){this.a=d},
dL8:function dL8(d){this.a=d},
btm:function btm(d,e,f){this.b=d
this.c=e
this.a=f},
adE:function adE(d,e,f){this.b=d
this.c=e
this.a=f},
aK5:function aK5(){},
ffq(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zl,A.L,w,w),A.aA,C.c_(A.fQ,g,A.bs,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vl,w,u,v,w,w,A.n),w,w,w,A.ew,A.a9,w,w,w),w,w,w)},
fUs(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eP()
b4.dG(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aA(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.V(u,t)
m=w
l=0
k=N.mw
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aA(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.h8()?new C.y(f,-g):new C.y(-f,g)
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
a9=C.ev([A.d.gal(g)],u)
A.d.fq(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aA(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aV2(b0,a9,C.V(u,t),q,N.mw,w+v)}return new B.aV2(C.aX(u),C.ev([25],u),C.V(u,t),21,N.mw,1)},
hiD(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.F(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="/")k=new C.y(-s,-t)
if(q==="\\")k=new C.y(k.b,k.a)}return new C.bmE(p,o)},
he1(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aV2:function aV2(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UJ:function UJ(d){this.a=d},
bim:function bim(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fj$=g
_.kW$=h
_.fP$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e5C:function e5C(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5D:function e5D(){},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5t:function e5t(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5y:function e5y(d){this.a=d},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
bfm:function bfm(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dey:function dey(d,e,f){this.a=d
this.b=e
this.c=f},
deB:function deB(d,e,f){this.a=d
this.b=e
this.c=f},
dez:function dez(d){this.a=d},
deA:function deA(d){this.a=d},
UL:function UL(d){this.a=d},
aCA:function aCA(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fj$=g
_.kW$=h
_.fP$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e5V:function e5V(d){this.a=d},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5W:function e5W(){},
e5G:function e5G(){},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5M:function e5M(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5Q:function e5Q(d){this.a=d},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5R:function e5R(d){this.a=d},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
bfB:function bfB(d,e){this.b=d
this.a=e},
aKx:function aKx(){},
bvm:function bvm(){},
aKy:function aKy(){},
bvn:function bvn(){},
a_Y(d,e,f,g,h,i){return new B.bsb(d,e,f,g,h,i)},
bsb:function bsb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbS:function fbS(){},
fbT:function fbT(){},
fbU:function fbU(){},
fbV:function fbV(){},
fbW:function fbW(){},
fbX:function fbX(){},
fbY:function fbY(){},
fbZ:function fbZ(){},
a7q:function a7q(d){this.a=d},
cdo:function cdo(d){this.a=d},
cdp:function cdp(){},
cdn:function cdn(d,e){this.a=d
this.b=e},
cdm:function cdm(d){this.a=d},
VC:function VC(d){this.a=d},
aDr:function aDr(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fj$=f
_.kW$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eEO:function eEO(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEN:function eEN(d){this.a=d},
bty:function bty(d,e,f){this.b=d
this.c=e
this.a=f},
Uk:function Uk(d){this.a=d},
bhW:function bhW(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fj$=d
_.kW$=e
_.fP$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dRB:function dRB(){},
dRC:function dRC(){},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRz:function dRz(d){this.a=d},
dRx:function dRx(d){this.a=d},
dRA:function dRA(d){this.a=d},
bop:function bop(d,e,f){this.b=d
this.c=e
this.a=f},
Tw:function Tw(d){this.a=d},
bhy:function bhy(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fj$=d
_.kW$=e
_.fP$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dCr:function dCr(){},
dCs:function dCs(){},
dCm:function dCm(){},
dCp:function dCp(d,e){this.a=d
this.b=e},
dCo:function dCo(d,e){this.a=d
this.b=e},
dCq:function dCq(d){this.a=d},
dCn:function dCn(d){this.a=d},
aGO:function aGO(d,e,f){this.a=d
this.b=e
this.c=f},
Ub:function Ub(d){this.a=d},
bhQ:function bhQ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOU:function dOU(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOP:function dOP(d,e){this.a=d
this.b=e},
dOW:function dOW(d,e){this.a=d
this.b=e},
dOO:function dOO(d,e){this.a=d
this.b=e},
dOX:function dOX(d){this.a=d},
dON:function dON(d,e){this.a=d
this.b=e},
dOY:function dOY(d){this.a=d},
dOM:function dOM(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOL:function dOL(d){this.a=d},
dP_:function dP_(d){this.a=d},
dP0:function dP0(d){this.a=d},
dOK:function dOK(d){this.a=d},
bjS:function bjS(d,e,f){this.b=d
this.c=e
this.a=f},
UX:function UX(d){this.a=d},
aCK:function aCK(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebi:function ebi(d,e,f){this.a=d
this.b=e
this.c=f},
ebg:function ebg(d,e,f){this.a=d
this.b=e
this.c=f},
ebj:function ebj(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebm:function ebm(d,e){this.a=d
this.b=e},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebk:function ebk(d,e){this.a=d
this.b=e},
ebp:function ebp(d){this.a=d},
Va:function Va(d){this.a=d},
aD5:function aD5(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
elO:function elO(d){this.a=d},
elP:function elP(d){this.a=d},
elM:function elM(d,e){this.a=d
this.b=e},
elN:function elN(d){this.a=d},
elL:function elL(d){this.a=d},
elQ:function elQ(d){this.a=d},
elR:function elR(d){this.a=d},
elS:function elS(d){this.a=d},
elT:function elT(d,e){this.a=d
this.b=e},
Vv:function Vv(d){this.a=d},
bj3:function bj3(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eA5:function eA5(){},
eAe:function eAe(){},
eAa:function eAa(d){this.a=d},
eA9:function eA9(){},
eAb:function eAb(d,e){this.a=d
this.b=e},
eA8:function eA8(d,e){this.a=d
this.b=e},
eAc:function eAc(d){this.a=d},
eA7:function eA7(d,e){this.a=d
this.b=e},
eAd:function eAd(d){this.a=d},
eA6:function eA6(d){this.a=d},
UV:function UV(d){this.a=d},
bix:function bix(d,e,f,g,h,i,j,k){var _=this
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
_.kW$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
e9X:function e9X(){},
e9Y:function e9Y(){},
e9Q:function e9Q(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9S:function e9S(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9T:function e9T(d,e){this.a=d
this.b=e},
e9M:function e9M(d,e){this.a=d
this.b=e},
e9U:function e9U(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9V:function e9V(d){this.a=d},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9W:function e9W(d){this.a=d},
e9J:function e9J(d,e){this.a=d
this.b=e},
bbz:function bbz(d,e,f){this.c=d
this.d=e
this.a=f},
aJT:function aJT(){},
bvd:function bvd(){},
aKb:function aKb(){},
bvi:function bvi(){},
aKG:function aKG(){},
bvs:function bvs(){},
aL9:function aL9(){},
bvE:function bvE(){},
jF(d,e,f,g,h,i){return new B.b5d(h,d,f,g,i,e,null)},
hiu(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fK2(g,e,f),d,w,!0,!0,x.H)},
hy(d,e,f,g,h,i,j){return new B.aus(f,j,i,h,g,d,e,null)},
qH(d,e,f){return B.i3K(d,e,f)},
i3K(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qH=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lR(2),$async$qH)
case 7:q=h
w=8
return C.b(q.hp(A.fW),$async$qH)
case 8:p=h
if(p==null){w=1
break}o=J.fa(A.dH.gaP(p))
w=9
return C.b(B.coe(C.a([B.h7u(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qH)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aN2)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qH,v)},
lb(d,e,f,g){var w,v=$.aqC
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vH(v,e,f,g)},
vH(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
Bd(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqC
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lb(d,e[w],f,g)
return}for(p=C.dc(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bW(p,p.gM(0),v.k("bW<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lb(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.cdk(d,s,f,g),u)}},
a7p(d,e){var w="sine",v="noise"
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
z5(d){return B.hzo(d)},
hzo(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$z5=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$z5)
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
return C.i($async$z5,v)},
vE(d,e){return B.hzp(d,e)},
hzp(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vE=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vE)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vE)
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
return C.i($async$vE,v)},
b5d:function b5d(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cqb:function cqb(d){this.a=d},
cqc:function cqc(d,e){this.a=d
this.b=e},
fK2:function fK2(d,e,f){this.a=d
this.b=e
this.c=f},
fK1:function fK1(d){this.a=d},
dz:function dz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cq7:function cq7(d){this.a=d},
eM:function eM(d,e,f){this.c=d
this.d=e
this.a=f},
aus:function aus(d,e,f,g,h,i,j,k){var _=this
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
cq6:function cq6(d){this.a=d},
EO:function EO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cqd:function cqd(d){this.a=d},
mv:function mv(){},
cq8:function cq8(d,e,f){this.a=d
this.b=e
this.c=f},
cqa:function cqa(d){this.a=d},
cq9:function cq9(){},
cdk:function cdk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csI(){var w=0,v=C.j(x.cL),u,t
var $async$csI=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tT().be3("assets/data/world110.json"),$async$csI)
case 3:u=t.hDW(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$csI,v)},
hDW(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aH(0,a2,null)),a1=C.a([],x.F)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gU(w))
q=C.a([],s)
for(p=J.a8(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gU(o)
m=C.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gU(l)
j=J.a8(k)
m.push(C.a([C.ex(j.h(k,0)),C.ex(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.ex(p.h(r,"pop"))
h=C.ex(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aP1(g,f,"",0)
f=C.ex(J.q(p.h(r,"c"),0))
p=C.ex(J.q(p.h(r,"c"),1))
e=new B.aa9(o,m,l,j,i,h,g,f,p,q)
e.bwb(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaa(a1)},
fnO(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gh(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aa9:function aa9(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaa:function aaa(d){this.a=d},
uP:function uP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ov:function Ov(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xG:function xG(d,e,f){this.a=d
this.b=e
this.c=f},
Ou:function Ou(d){this.a=0
this.b=d
this.c=0},
hFP(d,e,f){return $.hFQ.ck(0,d+"|"+C.t(e)+"|"+f.l(),new B.dai(d,e,f))},
Ur:function Ur(d){this.a=d},
aC6:function aC6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kW$=k
_.fP$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dUj:function dUj(d){this.a=d},
dUi:function dUi(d,e){this.a=d
this.b=e},
dTM:function dTM(d){this.a=d},
dTK:function dTK(d){this.a=d},
dTL:function dTL(d,e,f){this.a=d
this.b=e
this.c=f},
dTJ:function dTJ(d){this.a=d},
dTI:function dTI(){},
dTH:function dTH(d){this.a=d},
dU4:function dU4(d,e){this.a=d
this.b=e},
dU5:function dU5(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTV:function dTV(d){this.a=d},
dTT:function dTT(d){this.a=d},
dTW:function dTW(d){this.a=d},
dTN:function dTN(d,e){this.a=d
this.b=e},
dTO:function dTO(d){this.a=d},
dU6:function dU6(d,e){this.a=d
this.b=e},
dTS:function dTS(d,e){this.a=d
this.b=e},
dUa:function dUa(d){this.a=d},
dU3:function dU3(d){this.a=d},
dUb:function dUb(d,e){this.a=d
this.b=e},
dU2:function dU2(d,e){this.a=d
this.b=e},
dUc:function dUc(d){this.a=d},
dU1:function dU1(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dU0:function dU0(d,e){this.a=d
this.b=e},
dUe:function dUe(d){this.a=d},
dU_:function dU_(d,e){this.a=d
this.b=e},
dUf:function dUf(d){this.a=d},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dUg:function dUg(d){this.a=d},
dTY:function dTY(d){this.a=d},
dUh:function dUh(d){this.a=d},
dTX:function dTX(d){this.a=d},
dU7:function dU7(d){this.a=d},
dTR:function dTR(d){this.a=d},
dU8:function dU8(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dU9:function dU9(d){this.a=d},
dTP:function dTP(d){this.a=d},
dTG:function dTG(){},
dTF:function dTF(d){this.a=d},
dTE:function dTE(d){this.a=d},
bdO:function bdO(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dai:function dai(d,e,f){this.a=d
this.b=e
this.c=f},
daj:function daj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKh:function aKh(){},
aKi:function aKi(){},
aeb(d,e,f,g,h){return new B.bs6(d,e,f,g,h)},
bs6:function bs6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbL:function fbL(){},
fbM:function fbM(){},
fbN:function fbN(){},
fbO:function fbO(){},
fbP:function fbP(){},
fbQ:function fbQ(){},
fbR:function fbR(){},
Vy:function Vy(d){this.a=d},
bj7:function bj7(){this.d=$
this.c=this.a=null},
eAZ:function eAZ(d){this.a=d},
eB_:function eB_(d){this.a=d},
eAY:function eAY(d){this.a=d},
eB0:function eB0(){},
eAX:function eAX(d,e){this.a=d
this.b=e},
eAW:function eAW(d){this.a=d},
hGg(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eP()
v.dG(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eP()
v.dG(w+900)
u.push(2.2+v.aj())}return new B.biU(new C.cq(null,x.A),new B.Ou(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hGi(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hGh(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h8G(d,e,f){return $.hGS.ck(0,d+"|"+C.t(e)+"|"+f.l(),new B.eVa(d,e,f))},
Vj:function Vj(d){this.a=d},
biU:function biU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kW$=k
_.fP$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
et1:function et1(d,e){this.a=d
this.b=e},
etc:function etc(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
et9:function et9(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d){this.a=d},
ete:function ete(d){this.a=d},
et8:function et8(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
et7:function et7(d,e){this.a=d
this.b=e},
eth:function eth(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
et5:function et5(d){this.a=d},
etj:function etj(d){this.a=d},
et4:function et4(d){this.a=d},
etk:function etk(d){this.a=d},
et3:function et3(d){this.a=d},
etl:function etl(d){this.a=d},
et2:function et2(d){this.a=d},
et0:function et0(){},
et_:function et_(){},
esZ:function esZ(d){this.a=d},
esY:function esY(d){this.a=d},
bqb:function bqb(d,e){this.b=d
this.a=e},
eVa:function eVa(d,e,f){this.a=d
this.b=e
this.c=f},
eVb:function eVb(){},
eVc:function eVc(){},
Us:function Us(d){this.a=d},
aC7:function aC7(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.kW$=l
_.fP$=m
_.fk$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dUn:function dUn(){},
dUQ:function dUQ(){},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUE:function dUE(d){this.a=d},
dUB:function dUB(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUL:function dUL(d){this.a=d},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUM:function dUM(d){this.a=d},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUN:function dUN(d){this.a=d},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUO:function dUO(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUu:function dUu(d){this.a=d},
dUF:function dUF(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUG:function dUG(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUH:function dUH(d){this.a=d},
dUp:function dUp(d){this.a=d},
dUm:function dUm(d){this.a=d},
dUl:function dUl(){},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
b92:function b92(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Vb:function Vb(d){this.a=d},
biR:function biR(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fj$=e
_.kW$=f
_.fP$=g
_.fk$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
elW:function elW(d,e){this.a=d
this.b=e},
elX:function elX(d,e){this.a=d
this.b=e},
elV:function elV(d,e){this.a=d
this.b=e},
elY:function elY(d,e){this.a=d
this.b=e},
elU:function elU(d,e){this.a=d
this.b=e},
bpK:function bpK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTk:function eTk(d){this.a=d},
aKj:function aKj(){},
bvk:function bvk(){},
aKS:function aKS(){},
bvy:function bvy(){},
aKV:function aKV(){},
bvA:function bvA(){},
hGe(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eP()
v.dG(w)
v=v.aj()
u=new C.eP()
u.dG(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhx(new C.cq(null,x.A),new B.Ou(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
OX:function OX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Tu:function Tu(d){this.a=d},
bhx:function bhx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kW$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dBT:function dBT(){},
dBH:function dBH(){},
dBI:function dBI(d,e){this.a=d
this.b=e},
dBJ:function dBJ(d,e){this.a=d
this.b=e},
dBG:function dBG(d){this.a=d},
dBF:function dBF(d){this.a=d},
dBL:function dBL(d){this.a=d},
dBE:function dBE(d,e){this.a=d
this.b=e},
dBM:function dBM(d){this.a=d},
dBD:function dBD(d){this.a=d},
dBN:function dBN(d){this.a=d},
dBC:function dBC(d){this.a=d},
dBO:function dBO(d){this.a=d},
dBB:function dBB(d){this.a=d},
dBP:function dBP(d){this.a=d},
dBA:function dBA(d){this.a=d},
dBQ:function dBQ(d){this.a=d},
dBz:function dBz(d){this.a=d},
dBR:function dBR(d){this.a=d},
dBy:function dBy(d){this.a=d},
dBS:function dBS(d){this.a=d},
dBx:function dBx(d){this.a=d},
dBK:function dBK(d){this.a=d},
dBw:function dBw(d){this.a=d},
b8r:function b8r(d,e){this.b=d
this.a=e},
adQ:function adQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Uo:function Uo(d){this.a=d},
bhZ:function bhZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.kW$=q
_.fP$=r
_.fk$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dSV:function dSV(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSN:function dSN(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSP:function dSP(d){this.a=d},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSS:function dSS(d){this.a=d},
dSE:function dSE(d){this.a=d},
dST:function dST(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSU:function dSU(d){this.a=d},
dSC:function dSC(d){this.a=d},
bdE:function bdE(d,e){this.b=d
this.a=e},
d7r:function d7r(d){this.a=d},
V7:function V7(d){this.a=d},
biQ:function biQ(d,e,f,g,h,i,j,k){var _=this
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
_.kW$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
ela:function ela(d,e){this.a=d
this.b=e},
elb:function elb(d){this.a=d},
el9:function el9(d){this.a=d},
elc:function elc(d){this.a=d},
el8:function el8(d){this.a=d},
eld:function eld(d){this.a=d},
el7:function el7(d){this.a=d},
ele:function ele(d){this.a=d},
el6:function el6(d){this.a=d},
elf:function elf(d){this.a=d},
el5:function el5(d,e){this.a=d
this.b=e},
elg:function elg(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
elh:function elh(d){this.a=d},
el3:function el3(d,e){this.a=d
this.b=e},
eli:function eli(d){this.a=d},
el2:function el2(d,e){this.a=d
this.b=e},
bp_:function bp_(d,e){this.b=d
this.a=e},
aJQ:function aJQ(){},
bvc:function bvc(){},
aKe:function aKe(){},
bvj:function bvj(){},
aKR:function aKR(){},
bvx:function bvx(){},
h7u(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.le(e,f,$,null)
v=w.bGg(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hTM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.V(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nQ(A.k.aa(p.c,4)),"y",C.nQ(A.k.aa(p.d,4)),"v",p.e,"l",C.nQ(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nQ(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nQ(A.k.aa(p.z,3)),"s",C.nQ(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a4(f).k("cm.E"))
A.d.fh(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i27(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aH(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aW(f==null?A.cz:f)
while(f.C()){u=f.gU(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.q3().ah(0,s)){J.cf(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.te(a2,d,a0,a1)
a3.aoT(a2,d,a0,a1)
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
d=C.kc(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kc(J.q(t,"b"))
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
i=J.aW(i==null?A.cz:i)
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
if(m!=null&&l!=null)a6.aju(m,A.k.O(C.ex(J.q(p,1))),l,A.k.O(C.ex(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aW(h==null?A.cz:h)
while(h.C()){j=h.gU(h)
J.cf(k,A.k.O(C.ex(j)))}return new C.bmF(i,k)}catch(a4){return a5}},
fpA(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fpA=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fpA)
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
return C.i($async$fpA,v)},
bC0(d){return B.i3G(d)},
i3G(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bC0=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bC0)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bC0)
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
return C.i($async$bC0,v)},
coe(d,e){var w=0,v=C.j(x.g7),u
var $async$coe=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fX5().wO(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coe,v)}},D,U,H,R,Y,A7,A8,Am,Z
J=c[1]
C=c[0]
A=c[2]
A_=c[131]
A0=c[140]
A9=c[139]
A1=c[132]
A2=c[128]
I=c[118]
P=c[123]
A3=c[114]
Aa=c[134]
A4=c[137]
A5=c[111]
G=c[121]
Ab=c[116]
Ac=c[133]
A6=c[136]
Ad=c[67]
W=c[76]
Ae=c[83]
Af=c[80]
Q=c[87]
N=c[106]
Ag=c[141]
Ah=c[107]
X=c[117]
O=c[119]
V=c[138]
Ai=c[71]
Aj=c[94]
S=c[127]
K=c[135]
Ak=c[90]
L=c[126]
T=c[91]
Al=c[24]
E=c[26]
F=c[93]
M=c[103]
B=a.updateHolder(c[17],B)
D=c[115]
U=c[130]
H=c[41]
R=c[124]
Y=c[122]
A7=c[129]
A8=c[120]
Am=c[125]
Z=c[98]
B.aiP.prototype={}
B.UE.prototype={
T(){return new B.bik(C.V(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mt(0,null,null))}}
B.bik.prototype={
gVr(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
this.ch.q()
this.a2()},
MT(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$MT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.jw()
p.bN(0,A.c3)
t.m(new B.e2C(t))
t.a.toString
p=t.gVr()
w=3
return C.b(B.bxy(B.hI4(q,B.hTD(p),o,t.ay)),$async$MT)
case 3:s=e
r=s==null?null:J.iS(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hV2(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e2D(t,o,r))
$.aT.x1$.push(new B.e2E(t))
case 1:return C.h(u,v)}})
return C.i($async$MT,v)},
Xq(d){return this.bWU(d)},
aU8(){return this.Xq(null)},
bWU(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Xq=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.jw()
t.f.saV(0,o)
t.m(new B.e2P(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bxy(B.hOO(o)),$async$Xq)
case 3:r=n.a=m.i1Q(f)
p.b=""
if(r!=null&&!B.hTE(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hV3(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiP(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e2Q(p,t))
t.c16(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Xq,v)},
c16(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
A.d.a9(w)
w=++m.as
v=m.gVr()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e2L(m))
t=d.d
s=C.V(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e2J(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e2M(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e2N(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e2O(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.q,1)
if(m.x)j=C.A(C.a([D.eKI,A.bf,C.D(C.d(m.Q,l,l,l,l,l,l,A.SE,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.f8T
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Ab.T7,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eVa,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.v5,C.d(u,l,l,l,l,l,l,D.eXL,l,l,l),l))
w.push(A.cX)
w.push(C.d(k.b,l,l,l,l,l,l,F.D3,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f_8,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.ia,A.ck,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.C(A.Lp,new C.cl(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mD,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bi,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aV(12,12)
s=new C.aV(12,12)
A.d.v(w,C.a([A.P,new C.bH(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6F,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fH,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f4o,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.e2F)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ah5(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bom,A.eh,l,l,1/0),A.bc,A.i8),C.D(B.fYS(m.gVr(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dz("Ask about it",i,new B.e2T(m),l,A.by,l),new B.dz("Invent something new",!i,new B.e2U(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d8w[p]
i.push(new B.dz(n,!1,new B.e2V(m,n),l,A.by,l))}f.push(new B.eM(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cTP[p]
i.push(new B.dz(r,!1,new B.e2W(m,r),l,A.by,l))}f.push(new B.eM(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aL(l,A.T,!1,l,!0,A.r,l,C.aM(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kw,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e2X(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dl,!0,A.a5,l,A.am,l,A.aNK,l,l),1)
h=m.at
v=h&&j?D.bCj:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e2Y(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jF(A.by,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.Fy.prototype={}
B.uC.prototype={}
B.V5.prototype={
T(){return new B.aD_(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aD_.prototype={
gaVi(){var w,v,u,t=this,s=D.GG[t.cx],r=D.PZ[t.cy],q=D.BO[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.eb(w,w.r,C.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.auJ[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.eiB())},
ga1D(){return D.GG[this.cx].d/this.gaVi()},
gaMQ(){return 0.1*(D.GG[this.cx].d/0.9)/D.PZ[this.cy].d},
a_(){this.a1()
this.l9()
B.z5("rocket_lander").bz(new B.eiV(this),x.P)},
c1f(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lq(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.eiW())
return}w=D.r5[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1D()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaMQ())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gco()*6*D.awv[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
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
p=D.BO[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vE("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.Bd("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1D()/(D.r5[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1D()/(D.r5[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fK()}}if(m.Q&&m.x>0&&A.o.F(A.k.bw(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.eiX())},
aeF(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eXi,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dz(e[w].a,f.$1(w),new B.eiD(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.cX,C.c_(A.bB,s,A.bs,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bBx(d){var w,v,u,t,s=this,r=null,q=s.ga1D()/(D.r5[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaMQ()),o=D.awv[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.T2,r,r,r),A.S,s.aeF("ENGINE: "+D.GG[s.cx].b,D.GG,new B.eis(s),new B.eit(s),A.ct),s.aeF("FUEL TANK: "+D.PZ[s.cy].b,D.PZ,new B.eiu(s),new B.eiv(s),A.b8),s.aeF("LANDING GEAR: "+D.BO[s.db].b,D.BO,new B.eiw(s),new B.eix(s),A.aV),s.aeF("EXTRAS (tap to add)",D.auJ,new B.eiy(s),new B.eiz(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fqy)
o=(q?A.b8:A.cj).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVi(),2)
u=A.k.aa(s.ga1D()/(D.r5[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.BO[s.db].d*100)+".",r,r,r,r,r,r,D.eXT,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.ia,A.bS,r,r,r))
m.push(A.S)
m.push(new C.bH(A.A,r,r,new B.fg(A.nc,"Launch",new B.eiA(s),A.b8,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bW,r,r,A.ah),A.f,r,A.lw,new C.o(D.bfl,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aWq(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.m(18),t=C.I(A.b2,A.q,1)
return C.o6(A.jf,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eip(e),new B.eiq(e),w,w,w,w,new B.eir(e))},
aWp(d,e,f){return this.aWq(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cn(new B.eiO(s,D.r5[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.r5[w].a:"\ud83d\udd12"
o.push(new B.dz(v,s.d===w,new B.eiP(s,w),r,D.r5[w].c,r))}v=C.a([s.aWp(F.akA,new B.eiQ(s),s.y),A.bf,s.aWq(A.vr,new B.eiR(s),s.Q,130),A.bf,s.aWp(A.Na,new B.eiS(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aV:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bGu,A.f,r,r,new C.o(u,r,C.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eiT(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jF(A.ct,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eM(o,"WORLD",r),C.A(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bfj.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.r5[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=C.M(),a0=j.c,a1=C.aq(D.bhX,a0,0.25)
a1.toString
d.sau(new C.a7(A.b0,A.b6,A.x,C.a([D.b9W,a1],x.O),l,l).aw(0,new C.aa(0,0,g,f)))
a2.aY(new C.aa(0,0,g,f),d)
w=new C.eP()
w.dG(5)
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
q=new C.eP()
q.dG(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bF())
e=$.X()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aO(r,d)
o=C.cu(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bA(o,A.ii)
a0=C.M()
a0.r=A.bo.gp(0)
a2.aD(d,a0)
a0=C.bA(o.cG(2),A.rn)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bz(g.save())
g.translate(d.a*i,d.b*h)
a2.ja(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.ct.j(0.6).gp(0)
k.z=X.Hc
a2.ai(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aQ(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bF())
k=C.M()
k.r=A.aM.gp(0)
a2.aO(n,k)
i=new C.aQ(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bF())
k=C.M()
k.r=A.c.gp(0)
a2.aO(i,k)}k=e.r
m=new C.aQ(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cS(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cS(-14,-10,0,-26))
m.E(new C.bF())
i=C.M()
i.sau(D.bSE.aw(0,D.eDD))
a2.aO(m,i)
i=C.M()
i.r=A.aV.gp(0)
a2.ai(D.vT,5,i)
i=new C.aQ(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.M()
h.r=A.ay.gp(0)
a2.aO(i,h)
f=new C.aQ(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.M()
k.r=A.ay.gp(0)
a2.aO(f,k)
g.restore()},
aq(d){return!0}}
B.aKP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvw.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btK()}}
B.aQH.prototype={}
B.a2f.prototype={}
B.b8u.prototype={}
B.Tv.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ev(["skin"],x.N),o=new Float32Array(0)
return new B.aBp(w,v,u,t,s,r,q,new C.cq(null,x.A),p,D.JG,D.JG,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBp.prototype={
a_(){var w=this
w.a1()
w.l9()
w.as=new B.bZt(w.gc9o())
new B.dCk(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a8(0)
v.d=null}this.bsL()},
c9p(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.F(["t","init","data",$.h7J],x.N,x.z))
v.at=!0
v.ax=""
v.axq()
break
case"pick":v.m(new B.dBX(v,d))
break
case"shot":v.agw(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axq(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.asH[q.CW]
v=new B.dBY()
u=q.ay
u=C.B(u,C.a4(u).k("cm.E"))
A.d.fh(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.V(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eT(0,u)}},
agw(d){return this.cpY(d)},
cpY(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agw=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cD.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.coe(C.a([B.h7u(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agw)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aN2)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agw,v)},
awT(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lq(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bw(w)!==A.k.bw(v.ok)){B.a7p("kick",0.4)
v.a4c(170,new B.dCl())}v.ok=w
return},
agl(d){var w,v,u,t,s=this
s.m(new B.dBZ(s,d))
if(d==null){s.fx=D.JG
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dC_(d),v),v.k("J.E"))
t=A.d.gK(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.axq()
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.csl(t,d)
return},
csl(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7p("kick",0.8)
this.a4c(260,new B.dC0())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4c(w*70,new B.dC1(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vH("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7p("kick",0.3)
break
default:B.vH("organic",2+A.o.F(e.length,6),200,0.4)}},
cwR(d){this.m(new B.dC3(this,d))},
aWI(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.awT(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.B(o,o.$ti.k("cm.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aA(w)]
p.p4=""},
bSx(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dBU(u,w,d))
v=x.t
B.Bd("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4c(1100,new B.dBV(u))
return}if(d==null){if(u.cx!=null)u.agl(null)
return}u.agl(d)},
bWd(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bV.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eTK,u,u,u)}else if(d==null||e==null)w=D.f6r
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i3,u,u,u),A.cX,C.d(e.b,u,u,u,u,u,u,F.D3,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bIT,u,u,u,new B.dBW(v),u,u,u,u,"Back to the whole body",A.c7)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Vj,u,s,t,u,u,A.n),u,u,u,u,I.agf,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.diU.h(0,g)
i.axq()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d1R
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.awT(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mq,h,h,h,new B.dCa(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Dq(h,A.q2,q)}else q=A.ks
q=C.v(C.a([C.D(q,1),new C.C(F.XA,i.bWd(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cVa[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dz(l,n,new B.dCb(i,o),o.c,A.bV,h))}p=C.a([new B.eM(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dz(k,k===i.cx,new B.dCc(i,k),h,A.aM,h))}p.push(new B.eM(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hy(A.cj,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dCd(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EO(D.asH[j],i.CW===j,new B.dCe(i,j),!1,h))
p.push(new B.eM(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dz("Spin",n,new B.dCf(i),D.ajo,A.aV,h),new B.fg(A.jW,"Reset view",new B.dCg(i),A.c,h),new B.dz(l,m,new B.dCh(i),A.FW,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dz("Heartbeat sound",i.k4,new B.dCi(i),A.nV,A.cj,h))
p.push(new B.eM(v,h,h))
return B.jF(A.bV,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aJS.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsK()}}
B.bZt.prototype={
kt(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.hdL
$.hdL=v+1
u="ngmy-body-viewer-"+v
$.yg()
$.q2().pz(u,new B.bZu(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fH(v,"message",new B.bZv(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bxv(w.contentWindow)
if(w!=null)J.fLB(w,e,"*")}}catch(v){}}}
B.xI.prototype={}
B.BR.prototype={}
B.nd.prototype={}
B.b9c.prototype={}
B.TA.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aBs(C.V(w,x.a2),C.a([],x.cB),C.V(w,v),C.V(w,v),C.V(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBs.prototype={
a_(){var w=this
w.a1()
w.l9()
w.abp()
$.aT.x1$.push(new B.dEv(w))},
abp(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abp=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$abp)
case 6:q=e.rU("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dE9(s,r))
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
abJ(d){return this.bZU(d)},
bZU(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abJ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.az(),$async$abJ)
case 6:r=f
q=s.cx
p=C.a4(q).k("jK<cm.E,n>")
q=C.B(new C.jK(q,new B.dEc(),p),p.k("J.E"))
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
return C.i($async$abJ,v)},
avB(d,e,f,g){var w="c"+this.y++,v=new B.BR(w,e,f,g)
this.d.n(0,w,v)
return v},
mp(d,e,f){return this.avB(0,e,f,0)},
aaM(d,e){var w
if(D.yG.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tj(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQL(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fP$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e3(m,D.cFN[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tj(p,0)&&n.tj(p,1)
break
case"or":p=q.a
o=n.tj(p,0)||n.tj(p,1)
break
case"xor":p=q.a
o=n.tj(p,0)!==n.tj(p,1)
break
case"nand":p=q.a
o=!(n.tj(p,0)&&n.tj(p,1))
break
case"nor":p=q.a
o=!(n.tj(p,0)||n.tj(p,1))
break
case"not":o=!n.tj(q.a,0)
break
default:o=n.tj(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bLq(){return this.aQL(null)},
lq(d){var w,v,u,t,s,r,q,p,o,n=this
n.bLq()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a4(w).k("bc<2>")).gaf(0),v=new C.fm(w,new B.dEw()),u=n.f,t=n.w,s=0;v.C();){r=w.gU(0).a
if(u.h(0,r)===!0){q=n.fP$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fP$)
o=s+1
E.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
avC(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
lU(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
arQ(d){var w=this
if(w.x.A(0,A.au)){$.aT.x1$.push(new B.dE7(w,d))
return}w.m(new B.dE8(w,d))},
csE(d){this.m(new B.dEd(this,d,$.bCm()[d]))},
c3i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bCm()[a0]
v=d.d
u=C.a4(v).k("bc<2>")
t=u.k("a2<J.E>")
s=t.k("J.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dE2(),t),s)
A.d.b_(r,new B.dE3())
q=C.B(new C.a2(new C.bc(v,u),new B.dE4(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dE5(d,w))
return}u=d.r
p=C.dT(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fY(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQL(0)
h=m.h(0,A.d.gK(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jE(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dE6(d,o,a0))},
awp(d){var w,v,u,t,s=this.d,r=C.a4(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.T(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cbM(d){var w,v,u,t,s,r=this.d,q=C.a4(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.T(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bW(r,r.gM(0),q.k("bW<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bW6(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yG.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aaM(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.y(p,o)
s=l}}}return t},
bKn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aaM(p,o)
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
c3k(d){var w,v,u,t=this,s=t.awp(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eR()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dEe())
return}u=t.bKn(d)
if(u!=null)t.m(new B.dEf(t,u))
else t.m(new B.dEg(t))},
aup(d){return this.bYZ(d)},
bYZ(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aup=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awp(d)
if(s==null){w=1
break}C.je()
t.m(new B.dEb(t,s))
case 1:return C.h(u,v)}})
return C.i($async$aup,v)},
bxr(d){if(this.x.A(0,A.au))return
this.m(new B.dE1(this,d,A.cI))
C.eR()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bCm()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.W(i.ax?A.nV:O.r1,A.ad,h,h,h,21),h,h,h,new B.dEp(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cs.j(0.14)
r=C.I(A.cs.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eSV,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f03,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.mf,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b8:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.fhd,i.gc3h(),C.bk(A.cs,h,h,h,h,h,h,h,h,h,h,A.c7))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,W.Lz,D.boZ,h,h,1/0))}u.push(C.D(C.cn(new B.dEq(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yG.h(0,r).a+": "+D.yG.h(0,r).e,h,h,h,h,h,h,A.w6,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.afY,A.bS,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yG.gdL(D.yG),s=s.gaf(s);s.C();){r=s.gU(s)
q=new C.aV(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.aA(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bA,new C.x(p.a,h,D.aOS,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fx,Ak.Lu,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dEr(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d5U[l]
s.push(new B.fg(A.Nb,k.b,new B.dEs(i,k),A.cs,h))}s.push(new B.fg(D.xO,"Clear",new B.dEt(i),A.cj,h))
r=C.a([],g)
for(j=0;q=$.bCm(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.lb
o=i.ay
n=i.cx.t(0,j)?A.b8:A.cn
r.push(new B.dz(q.a,o===j,new B.dEu(i,j),p,n,h))}return B.jF(A.cs,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eM(t,"PARTS",h),new B.eM(s,"TRY",h),new B.eM(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b9u.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.aaU.gp(0)
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
g=a5.aaM(j,m.c)
f=q.h(0,l)===!0
l=$.X()
e=C.a([],p)
d=new C.aQ(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pr(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cn.j(0.28).gp(0)
l.z=G.mt
s=l.H()
l=d.gbJ().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dN:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbJ().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HJ)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aQ($.X().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pr(a6+a0,w,a5-a0,r,a5,r))
r=C.M()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aO(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c3j(a7,a5.d)},
c3j(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yG.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cu(a0.c,64,64)
s=C.bA(t,A.kW)
r=w.cy===v
q=s.eM(A.cv)
$.X()
p=C.M()
p.r=A.w.j(0.55).gp(0)
p.z=A.lj
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
l=v===!0?F.Ng:D.bCP}else l=e.b
k=B.fQW(C.jE(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aC(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fQW(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fQW(f,9,u?A.dN:A.c_,g,g,A.u)
i.a5(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXd(d,w.aaM(a0,h),o)
this.aXd(d,a0.c.ad(0,D.HJ),o)},
aXd(d,e,f){var w
$.X()
w=C.M()
w.r=D.aaU.gp(0)
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
B.aJX.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvf.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsQ()}}
B.MI.prototype={
T(){return new B.aBJ(C.mt(0,null,null))}}
B.JN.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A3.prototype={}
B.aBJ.prototype={
c3o(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.m(new B.dKm(w,e))},
bXT(){var w=this
w.e.q()
w.e=C.mt(w.f,null,null)
w.m(new B.dKl(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oe(t,C.c8(v,A.bX,t?new B.bpk(w.e,w.gc3n(w),new B.dKn(d),v):new B.aFY(u,new C.cw(u.b,x.gj)),v,!1,!1,v,!1),new B.dKo(w,u),x.C)}}
B.bqS.prototype={}
B.bpk.prototype={
aXe(d,e){var w=null
return new C.C(I.Y_,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eTu,w,w,w),A.bA,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,T.nd,v,v,v,w.e,v,v,v,v,v,v),A.rt,D.buN],u),A.m,v,A.e,A.j,0,v,v),s=w.aXe("STUDIOS","Play, make things, and keep what you make")
$.bCn()
return C.bm(!0,C.v(C.a([new C.C(D.btS,t,v),C.D(C.vg(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m1(s,v),new C.nI(A.hJ,C.Og(new C.oh(new B.eSS(d),22,!0,!0,!0,0,C.rI(),v),D.aMS),v),new C.m1(w.aXe("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nI(D.bp5,C.Og(new C.oh(new B.eST(w),6,!0,!0,!0,0,C.rI(),v),D.aMS),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.adV.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mX,p,0.3)
m.toString
w=x.O
m=C.a([m,D.ady],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aK(!1,o,!0,C.ez(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a7(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cX,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a7(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fe,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.acP.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mX,A.d.gK(i),0.24)
f.toString
w=x.O
f=C.a([f,D.ady],w)
v=C.I(A.d.gK(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cv,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aV(6,6)
m=C.a([A.d.gK(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aFy,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a7(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gK(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aK(!1,h,!0,C.ez(C.v(C.a([new C.a6(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.W(A.Bt,A.d.gK(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a7(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fe,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.Pm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.bZ(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Ri,26),new C.ac(-6,A.G,A.d.gK(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gK(i),A.c,0.14)
p.toString
o=A.d.gK(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bY(0,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.daM,j),A.n),A.bd),0,0,0),C.ao(j,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.b0,A.b6,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bY(0,C.b3(j,j,j,new B.bqi(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eV2,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Sp)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fI,C.A(C.a([s,A.eB,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bY(0,C.e0(C.ej(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bY(0,C.e0(C.bZ(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a6(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bY(0,C.bZ(C.bv(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bqi.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.aa(r,-10,s,w)
u=d.a
J.bz(u.save())
u.translate(v.gbR().a,v.gbR().b)
d.ja(0,0.35)
t=C.cu(A.J,(w- -10)*1.6,s-r)
$.X()
s=C.M()
s.sau(new C.a7(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.aY(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.bpO.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bdy,D.acM],x.O),t=this.e,s=C.I(A.d.gK(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k0,24)],x.V),q=C.m(22),p=A.d.gK(t)
return new C.a6(this.c,this.d,C.bZ(C.bv(q,C.b3(C.av(C.W(A.jh,A.d.gK(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b8b(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a7(A.ax,A.aC,A.x,u,w,w),A.n),A.bd),w)}}
B.b8b.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
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
B.aFY.prototype={
T(){return new B.aFZ(new C.cq(null,x.A),null,null)}}
B.aFZ.prototype={
gtF(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bmt,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYI(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fG,null,1,null,v)
w.f9(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gavD(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc3l(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaTS(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaUw(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb4H(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtF()
w.d8()
w.dR$.L(0,this.gcsm())},
csn(){var w,v,u,t,s,r,q,p=this,o=p.gtF().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavD().a){case 0:w=D.ng
break
case 1:w=D.tZ
break
case 2:w=D.a1n
break
case 3:w=D.ng
break
case 4:w=D.cZV
break
case 5:w=D.tZ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8F)r=0.09
else r=s===D.a8G?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bV7[v]
B.lb("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bd("bell",D.c2S,1400,0.35)}}p.ax=o},
q(){this.gtF().q()
this.gYI().q()
this.buF()},
af5(){var w=this
w.gtF().cRc(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eSy(w))},
cdN(){this.gtF().bY(0)
this.m(new B.eSx(this))},
acG(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaUw(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b3,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb4H(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b3,A.aN),$.aw()))}o=C.B(u.gaTS(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bV(F.mX,null,new B.eSw(u,l,m,o),t,!0,!0,!0,A.ln,!1,!1,x.H),$async$acG)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acG,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavD(),f=i.a.c,e=f.b,d=i.gc3l(),a0=new B.A3(g,e,f.c,d,i.gaTS(),i.gaUw(),i.gb4H())
f=C.aq(A.d.gK(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.W(i.at?A.nV:O.r1,A.ad,h,h,h,21),h,h,h,new B.eSG(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bMj,h,h,h,i.gc3m(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mq,h,h,h,new B.eSH(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYI(),new B.eSI(i,a0),h),C.cn(new B.eSJ(i,a0))],g)
u=i.as
t=u?i.gcdM():i.gcg4()
u=u?D.bC5:A.tN
s=C.aq(A.d.gK(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c7),C.D(C.c6(i.gtF(),new B.eSK(i,a1,a0),h),1),C.aH(h,h,h,h,D.bIJ,h,h,h,new B.eSL(i),h,h,h,h,"Replay",A.c7)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gK(d),A.d.gal(d),0.4)
r.toString
s=B.hy(r,u+"x","Speed",2.5,0.4,new B.eSM(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d89[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gK(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dz(p.b,o===p.a,new B.eSN(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bVt[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gK(o).A(0,A.d.gK(n))?A.c:A.b2
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.aA(k,A.d.gK(o).A(0,A.d.gK(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a7(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.afJ,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eSO(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jF(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.es(new C.an(A.W,h,A.b_,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eM(u,"STYLE",h),new B.eM(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bwD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.ng[r]
p=A.k.D((1-A.ev.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.ng[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.ng[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dl()
l=n.a
l.$flags&2&&C.ak(l)
l[11]=0.0013
n.jQ(p)
l=v[r]
k=u[r]
j=t[r]
i=D.ng[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.ng[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.ng[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cK(0,r*118,0,f,f,f,new C.kz(q,new C.iE(n,f,A.b0,!0,f,new B.Pm(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.ng[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gK(w)
v=D.ng[r]
t=v+0.12
e.push(new C.cK(0,r*118-3-2,0,f,f,4,new C.mc(new B.boX(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a6(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bMP(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tZ[r]
p=A.pv.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tZ[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tZ[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dl()
k=m.a
k.$flags&2&&C.ak(k)
k[11]=0.0011
m.jA(n,n,n,1)
m.fv(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Pm(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dl()
k.fv(3.141592653589793)
k=new C.iE(k,f,A.A,!0,f,new B.bpO(a2,108,w,f),f)}e.push(new C.cK(0,r*130,0,f,f,f,new C.kz(q,new C.iE(m,f,A.A,!0,f,k,f),f),f))}return new C.a6(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cxm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1n[w]
l.push(A.cr.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bY(0,C.b3(n,n,n,new B.bsl(d.d,l,D.aum,m,B.bpj(e,0.4,0.62),f,B.bpj(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fRr(g,w)
q=D.aum[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cK(r,s-q*m*p+12,n,n,t,n,new C.kz(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fRr(g,w)
r=D.a1n[w]
q=r+0.15
v.push(new C.cK(s,l,n,n,t,n,new C.kz(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a79,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a6(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bCL(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cr.av(0,B.bpj(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bY(0,C.av(C.dV(C.b3(f,f,f,new B.boo(A.d.gK(a1),B.bpj(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.dZh),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dB.av(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dl()
m=l.a
m.$flags&2&&C.ak(m)
m[11]=0.001
l.fv(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jA(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new C.y(o,new C.cK(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kz(k*(0.45+0.55*o),C.dV(new C.iE(l,f,A.A,!0,f,new B.Pm(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new B.eSp())
A.d.v(a0,new C.K(w,new B.eSq(),x.fR))
return new C.a6(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bBY(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tZ[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mH.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tZ[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.awg[q]
k=C.dl()
k.mC(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jA(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tZ[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cK(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kz(m,C.dV(new C.iE(k,e,A.A,!0,e,new B.Pm(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tZ[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cK(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dV(new C.mc(new B.b8R(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.awg[q])),e),e))}return new C.a6(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bzz(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dZl],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.ng[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cr.av(0,p)
q=D.awl[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.ng[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.ng[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dl()
d=f.a
d.$flags&2&&C.ak(d)
d[11]=0.001
f.mC(l*h+D.d2L[r]*o)
f.fv(l*0.9)
h=0.55+0.45*o
f.jA(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kz(g,C.dV(new C.iE(f,a3,A.A,!0,a3,new B.Pm(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.ng[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.awl[r]
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dV(new C.mc(new B.boq(A.d.gK(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a6(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.boX.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.aa(w-v,0,w+v,e.b)
q=C.bA(u,A.hc)
$.X()
t=C.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mt
d.aD(q,t)
t=C.bA(u,A.hc)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.boo.prototype={
a5(d,e){var w,v,u=this.c,t=C.cu(e.ef(A.J),e.b*u,e.a*u)
$.X()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.Hc
d.hM(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hM(t,u)
u=t.cG(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hM(u,v)},
aq(d){return!0}}
B.b8R.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(A.J),f=this.c,e=A.cr.av(0,f)
$.X()
w=C.M()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gK(u).j(0.6*v).gp(0)
d.ai(g,40+e*a0.a*0.42,w)
t=new C.eP()
t.dG(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gK(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aq(d){return!0}}
B.boq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(A.J)
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
B.bsl.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.aa(0,d0,0+c5,d0+60)
$.X()
d0=C.M()
w=c1.b
v=x.O
d0.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.d.gK(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.aY(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fRr(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.X()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lj
a4=a3.H()
t.drawOval(C.c4(new C.aa(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.aa(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gK(w),A.c,0.1)
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
a6.push(new C.bF())
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbJ().a.snapshot()
t.drawPath((a8.e=new C.cF(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aQ(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gK(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbJ().a.snapshot()
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
t.drawPath((a2==null?a8.e=new C.cF(a8.gbJ().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cF(b0.gbJ().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bw(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bA(new C.aa(b7,a7,b7+r,b5),A.hc)
$.X()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.ep(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.aa(d,a1,a3,a1+28)
J.bz(t.save())
t.clipRect(C.c4(a5),$.qI()[1],!0)
$.X()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c4(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aLE.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
B.a_t.prototype={
a4(){return"_Role."+this.b}}
B.pS.prototype={}
B.qz.prototype={}
B.BV.prototype={}
B.Yt.prototype={}
B.adL.prototype={}
B.a_G.prototype={
gY(d){return this.d}}
B.C5.prototype={}
B.aaH.prototype={}
B.aaY.prototype={}
B.acT.prototype={}
B.bfg.prototype={
a1M(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b5G(d,e,f){return this.a1M(d,e,f,0,0.55)},
aA6(d,e,f,g){return this.a1M(d,e,f,0,g)},
b5H(d,e,f,g){return this.a1M(d,e,f,g,0.55)},
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
aiI(d,e,f,g){var w="n"+this.ay++,v=new B.qz(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AJ(d,e,f){return this.aiI(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new B.def(e))
A.d.bm(w.c,new B.deg(e))
w.aZ()},
b9v(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.ms.h(0,v.b).c===D.wp)return!1
w=this.b
if(A.d.b8(w,new B.dec(d,e)))return!1
w.push(new B.BV(d,e))
this.aZ()
return!0},
bWR(d){var w
if(d.b==="beat")return D.c30[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aA(500)
case 2:return 1400+w.aA(2200)
default:return 450+w.aA(2000)}},
aDz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.awA[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C5(u,t,j.ax,90))
w.push(new B.C5(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_G(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b5G(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_G(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aA(700),j.ax))}j.f.push(new B.C5(u,t,j.ax,120))
j.aA6(120,200,"noise",0.5)
j.b5G(261.63*Math.pow(2,([7,12,16,19][w.aA(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C5(u,t,j.ax,230))
w.push(new B.C5(u,t,j.ax+160,160))
w.push(new B.C5(u,t,j.ax+320,100))
j.b5H(180+j.at.aA(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aaH(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b5H(300+w.aA(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.aaY(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a1M(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fK()
j.a1M(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acT(u,D.aw3[v],t,j.ax))
j.aA6(261.63*Math.pow(2,([0,5,9,12][j.at.aA(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aA6(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c_7[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cnD(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.fm(w,new B.ded(d));v.C();)j.ayE(w.gU(0),j.ax+D.cbl[A.o.F(g.d,4)])
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
case"chance":s=j.at.aA(100)<D.cs6[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.fm(w,new B.dee(d));v.C();)j.ayE(w.gU(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yU(w,0,v-700)},
cnD(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yt(e,"~"+d))},
ayE(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.adL(d.a,v,e,w))
u.push(new B.Yt(w,v))},
aGU(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a4(w).k("bc<2>")
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
else if(o.ax>=q){o.aDz(r)
u.n(0,r,o.ax+o.bWR(s))}}w=o.c
v=C.T(w).k("a2<1>")
q=C.B(new C.a2(w,new B.deh(o),v),v.k("J.E"))
if(q.length!==0){A.d.bm(w,new B.dei(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b0(u,1)
for(u=A.d.gaf(v),r=new C.fm(u,new B.dej(p));r.C();)o.ayE(u.gU(0),o.ax)}else o.aDz(u)}}A.d.bm(o.d,new B.dek(o))
A.d.bm(o.e,new B.del(o))
A.d.bm(o.f,new B.dem(o))
A.d.bm(o.w,new B.den(o))
A.d.bm(o.x,new B.deo(o))
A.d.bm(o.r,new B.dep(o))
o.aZ()},
uP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cIZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aH(0,d,null))
k.a9(0)
for(o=x.j,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gU(n)
u=C.t(J.q(v,"k"))
if(!D.ms.ah(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qz(t,u,new C.u(C.ex(J.q(v,"x"))*k.cy.a,C.ex(J.q(v,"y"))*k.cy.b),A.k.O(C.ex(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gU(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ah(0,q)&&m.ah(0,p))n.push(new B.BV(q,p))}k.aZ()
return!0}catch(l){return!1}},
cLY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qz(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b9v(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fl.prototype={}
B.V4.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aCZ(new B.bfg(C.V(w,x.f3),v,u,t,s,r,q,p,o,C.V(w,n),C.V(w,n),C.V(w,n),C.V(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aCZ.prototype={
abi(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abi=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$abi)
case 6:q=n.kc(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ehW(s))
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
return C.i($async$abi,v)},
a8j(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8j=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.ehL(s))
u=3
w=6
return C.b(C.az(),$async$a8j)
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
return C.i($async$a8j,v)},
bIF(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a4(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.ehN())+"|"+A.d.cI(o,0,new B.ehO())
if(v===p.ch)return p.CW
u=new B.ehR()
t=x.s
s=C.a([],t)
r=new B.ehS(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.fm(n,new B.ehP());w.C();){q=n.gU(0)
if(!A.d.b8(o,new B.ehQ(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dc(s,0,C.dJ(5,"count",x.S),x.N).dF(0)},
a_(){var w,v=this
v.a1()
v.abi()
v.d.db=v.ay
w=v.qf(new B.eil(v))
w.j0(0)
v.e!==$&&C.aO()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a8(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.btI()},
aaQ(d){return this.bWj(d)},
bWj(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aaQ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$aaQ)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cIZ(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aUY(A.d.gK(D.avz))
if(s.c!=null)s.m(new B.ehV())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aaQ,v)},
aUY(d){this.d.cLY(0,d.c,d.d)
this.DJ()},
DJ(){var w=this.as
if(w!=null)w.a8(0)
this.as=C.cM(A.lG,new B.ehH(this))},
avE(d){var w,v,u,t,s=this.d.a,r=C.a4(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.T(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cbN(d){var w,v,u,t,s,r=this.d.a,q=C.a4(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.T(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bW(r,r.gM(0),q.k("bW<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bW7(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.ms.h(0,r.b).c===D.wp)continue
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
c3r(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hdM(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cv8(d){var w,v,u,t,s,r,q=this,p=q.avE(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eR()
u=v.b
if(u==="button"){w.aDz(p)
return}if(q.r)return
t=D.ms.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qk)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aZ()
q.DJ()
return}if(q.r)return
r=q.c3r(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aZ()
q.DJ()}},
cd4(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cbN(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avE(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cd5(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
aZV(){var w,v,u=this
if(u.z!=null){w=u.bW7(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b9v(v,w)}else v=!1
if(v){C.jM()
u.DJ()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DJ()
u.x=null}},
abv(d){return this.bZ_(d)},
bZ_(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abv=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avE(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.je()
p=t.c
p.toString
w=3
return C.b(C.bV(F.mX,null,new B.ehY(q),p,!0,!0,!1,A.ln,!1,!1,x.y),$async$abv)
case 3:if(f===!0){r.W(0,s)
t.DJ()}case 1:return C.h(u,v)}})
return C.i($async$abv,v)},
c3p(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AJ(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eR()
this.DJ()},
afd(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afd=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bV(F.mX,null,new B.ei_(),s,!0,!0,!0,A.ln,!1,!1,x.es),$async$afd)
case 2:t=e
if(t!=null)u.aUY(t)
return C.h(null,v)}})
return C.i($async$afd,v)},
acH(d){var w=0,v=C.j(x.H),u=this,t
var $async$acH=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.ehK(),t,null,!0,!0,x.y),$async$acH)
case 2:if(f===!0){u.d.a9(0)
u.DJ()}return C.h(null,v)}})
return C.i($async$acH,v)},
B(d){var w=this,v=null,u=C.a([C.ah5(w.r?new C.bH(A.a3,v,v,new C.C(A.Ff,C.hc(D.bGK,D.fam,new B.eij(w),v),v),v):w.c3s(),A.bc,A.iv),C.D(C.cn(new B.eik(w)),1)],x.p)
if(!w.r)u.push(w.cq0())
return C.c8(v,A.bX,C.bm(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bEp(){var w=null,v=new B.ehM(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bt.j(0.5),A.q,1)
return C.bY(0,C.ej(C.av(C.p(w,C.cd(C.v(C.a([D.fl7,A.at,D.fsn,A.aA,v.$4(A.oD,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.G0,A.cs,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.la,A.bV,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ajB,A.cn,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.frJ,new C.bH(A.a7,w,w,C.bK(!1,D.fim,w,w,!0,w,w,this.gbEi(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.UG,new C.o(F.mX,w,s,t,w,w,A.n),w,w,w,A.fy,A8.agZ,w,w,w),w,w,w),u,!0),0,0,0)},
c3s(){var w=this,v=null,u=C.aH(v,v,v,v,T.nd,v,v,v,new B.ei5(w),v,v,v,v,v,v),t=w.a7M(A.N0,"How it works",new B.ei6(w),!0),s=w.ay?A.nV:O.r1
return new C.C(D.bt6,C.A(C.a([u,D.buA,t,w.a7M(s,"Sound",new B.ei7(w),!0),w.a7M(A.dW,"Ideas",w.gcgN(),!0),w.a7M(D.xO,"Clear",w.gc3q(w),!0),w.aM8(A.iT,"Show",new B.ei8(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aM8(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Ad.vf,C.aF(!1,A.a1,!0,u,C.aK(!1,t,!0,C.hp(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a7M(d,e,f,g){return this.aM8(d,e,f,g,!1)},
cq0(){var w=null,v=new B.ei1(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wp),v.$2("CHANGE",D.Dq),v.$2("REACT",D.qk)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(D.Ei,w,new C.bP(new C.aA(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.boo,w,w,w)},
cq1(d){var w,v,u,t,s=null,r=D.ms.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.C(A.fx,C.aE(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.cX,C.d(r.a,s,1,A.a2,s,s,s,D.aOS,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a7(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hI,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ei0(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bfh.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bz(b7.save())
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
d.push(new C.pr(h+a1,i,f-a1,g,f,g))
a2=D.ms.h(0,k.b).d
a3=D.ms.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rj(new C.u(h,i),new C.u(f,g))
e.sau(new C.a7(A.a3,A.a7,A.x,d,b4,b4).aw(0,new C.aa(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbJ().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hdM(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mt
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HJ)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aQ($.X().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pr(t+a1,o,w-a1,i,w,i))
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
e=C.rj(i,h)
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
i.z=A.jk
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
i.z=A.jk
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(new C.bR(P.ql,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bfi(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.ccE(b8,b5.d,b6)
b7.restore()},
ccE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.ms.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cu(e.c,64,64)
t=C.bA(u,A.k2)
s=t.eM(A.cv)
$.X()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.lj
d.aD(s,r)
if(v>0){s=t.cG(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yI
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
o=B.bfi(C.jE(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aC(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bfi(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aw3[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qk){s=e.c.ad(0,new C.u(0,62))
r=C.M()
r.r=D.awA[A.o.F(e.d,6)].gp(0)
d.ai(s,5,r)}else if(m!=null){l=B.bfi(m,9.5,A.az,j,j,A.O)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bfi(m,9.5,A.az,j,j,A.O)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wp)k.b_K(d,e.c.aC(0,D.HJ),q)
k.b_K(d,e.c.ad(0,D.HJ),q)},
b_K(d,e,f){var w
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
B.aKN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bjR.prototype={}
B.Pd.prototype={
gY(d){return this.d}}
B.Vk.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.biV(new C.cq(null,x.A),w,v,A.cI,A.bx,D.Es,null,null)}}
B.biV.prototype={
aYt(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bw((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.av0[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lb("synth",u,420,0.3)
break
case"rainbow":B.lb("bell",u,700,0.35)
break
case"stars":B.lb("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aA(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aA(60),"",140,0,0.22,"noise")}},
c6r(d){return this.aYt(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qf(new B.etM(v))
w.j0(0)
v.w!==$&&C.aO()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.btR()},
gb_e(){var w=this.Q
return w<0?new H.mJ(1,A.k.F(this.y*0.18,360),0.85,1).iG():D.Q0[w]},
aQq(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_e(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cn,A.ay,v.aj())
m.toString
j.push(new B.Pd(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aA(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.Pd(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aA(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.Pd(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXg(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_e()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bjR(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQq(e)
r.aYt(e,!0)
r.m(new B.etn())},
aXf(){this.ax=null
this.m(new B.etm())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mq,n,n,n,new B.etw(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bqd(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b39)
k=C.aE(A.c5,new C.an(A.W,n,A.b_,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.etx(o),new B.ety(o),new B.etC(o),n,n,n,n,n,n,n,n,n,new B.etD(o),new B.etE(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cPO[w]
j.push(new B.dz(v.b,o.z===v.a,new B.etF(o,v),v.c,A.bV,n))}u=C.a([new B.EO(A.c,o.Q<0,new B.etG(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EO(D.Q0[t],o.Q===t,new B.etH(o,t),!1,n))
s=o.as
s=B.hy(A.bV,A.o.u(A.k.V(s)),"Size",36,4,new B.etI(o),s)
r=o.ch
q=r?A.nV:O.r1
q=C.a([new B.dz("Sound",r,new B.etJ(o),q,A.bV,n),new B.fg(A.r0,"Undo",new B.etz(o),A.c,n),new B.fg(D.xO,"Clear",new B.etA(o),A.cj,n)],m)
for(w=0;w<4;++w){p=D.d4h[w]
q.push(new B.EO(p,o.at.A(0,p),new B.etB(o,p),!1,n))}return B.jF(A.bV,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.es(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eM(j,"BRUSH",n),new B.eM(u,"COLOUR",n),s,new B.eM(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bqd.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
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
o.push(new C.b5(A.d.gK(q).a,A.d.gK(q).b))
for(p=C.T(q),m=p.k("pO<1>"),l=new C.pO(q,1,a5,m),l.GL(q,1,a5,p.c),l=new C.bW(l,l.gM(0),m.k("bW<aj.E>")),m=m.k("aj.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gK(q)
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
u.drawPath((q==null?n.e=new C.cF(n.gbJ().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbJ().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbJ().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mJ(1,A.o.F(i*5,360),0.85,1).iG()
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
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gK(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mJ(1,A.o.F(a3*23,360),0.7,1).iG():l
a4.c3t(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=T.Qu
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c3t(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=C.a([],x.v),n=new C.aQ(p.r,A.ap,null,null,o)
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
$.X()
p=C.M()
p.r=h.j(0.4).gp(0)
p.z=A.jk
d.aO(n,p)
p=C.M()
p.r=h.gp(0)
d.aO(n,p)},
aq(d){return!0}}
B.Vw.prototype={
T(){return new B.aDe(new C.cq(null,x.A),new C.ar(new C.bb("NGMY",A.b3,A.aN),$.aw()),null,null)}}
B.aDe.prototype={
gIl(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tp,null,1,null,v)
w.cH(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIl()
w.d8()
w.dR$.L(0,this.gbVg())},
bVh(){var w,v,u,t,s,r,q,p=this,o=p.gIl().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lW:new C.m2(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lb(s,D.atY[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIl().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.btX()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m2(h)
w=C.B(h,C.a4(h).k("J.E"))}v=D.Q0[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mq,j,j,j,new B.eAl(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.aw4[k.y]
s=C.bv(t,C.bZ(C.av(C.c6(k.gIl(),new B.eAm(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(A.ax,A.aC,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aL(j,A.T,!1,j,!0,A.r,j,C.aM(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.D1,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eAn(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ho,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.crV[r]
i.push(new B.dz(q.b,k.r===q.a,new B.eAo(k,q),j,A.cn,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EO(D.Q0[o],k.w===o,new B.eAp(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nV:O.r1
l=C.a([new B.dz(m,n,new B.eAq(k),l,A.cn,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EO(D.aw4[o][0],k.y===o,new B.eAr(k,o),!1,j))
n.push(A.bp)
n.push(new B.fg(A.mm,"Replay",new B.eAs(k),A.c,j))
m=k.x
return B.jF(A.cn,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bC,new C.es(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eM(i,"MOVE",j),new B.eM(p,"COLOUR",j),new B.eM(l,"SOUND",j),new B.eM(n,"BACK",j),B.hy(A.cn,A.o.u(A.k.V(m)),"Size",96,28,new B.eAt(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bY2(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bw(g*1.6*f)?1:0
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
case"glitch":u=A.o.F(A.k.bw(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b7
else w=u?A.bV:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mH.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.mJ(1,A.k.F(g*360+e*40,360),0.75,1).iG()
A.d.a9(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.db(C.dV(C.ea(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aKW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aL1.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.a__.prototype={}
B.V1.prototype={
T(){var w=C.a([],x.aS)
return new B.aCR(new C.cq(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCR.prototype={
gacI(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b0p(){return new H.mJ(1,this.f.aj()*360,0.6,1).iG()},
aq8(d,e,f,g){var w=this,v=w.gacI().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a__(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b0p(),C.a([],x.g)))},
bDM(d,e,f){return this.aq8(d,e,f,!1)},
bDL(d,e){return this.aq8(d,e,1,!1)},
csh(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bDL(40+w*u/5,v.aj()*3.141592653589793*2)},
bEE(){var w=this.r
this.bDM(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.l9()},
lq(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fP$<300)return
u=a2.gacI()
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
if(v.b<r)if(J.lO(v.a-s)!==J.lO(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fP$-n.r>250){n.r=a2.fP$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lb("bell",D.atY[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.eez(u),C.T(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new B.eeA(a2,u))},
cgG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gacI()
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
gaUB(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mq,r,r,r,new B.een(s,d),r,r,r,r,"Share",r)],q),o=C.cn(new B.eeo(s)),n=s.w
n=B.hy(A.ct,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.eep(s),n)
w=s.x
w=B.hy(A.ct,A.k.aa(w,1)+"x","Time",3,0.2,new B.eer(s),w)
v=s.Q
v=B.hy(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ees(s),v)
u=s.ax
t=u?A.nV:O.r1
return B.jF(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eM(C.a([new B.dz("Sound",u,new B.eet(s),t,A.ct,r),new B.dz("Trails",s.z,new B.eeu(s),A.Nf,A.ct,r),new B.dz("Planets pull each other",s.y,new B.eev(s),A.yd,A.ct,r)],q),r,r),new B.eM(C.a([new B.fg(A.ml,"Solar system",new B.eew(s),A.ct,r),new B.fg(A.nc,"Comet",new B.eex(s),A.c,r),new B.fg(A.mj,"Cluster",new B.eey(s),A.c,r),new B.fg(D.xO,"Clear",new B.eeq(s),A.cj,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjE.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.X()
w=C.M()
w.r=D.VY.gp(0)
d.aY(new C.aa(0,0,0+g,0+f),w)
v=new C.eP()
v.dG(5)
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
t.sau(new C.bR(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.ai(g,f,t)
t=C.M()
t.sau(D.e9T.aw(0,C.bU(g,o)))
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
q.z=G.mt
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sau(new C.bR(P.ql,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.j9.gp(0)
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
B.aaO.prototype={}
B.Vr.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bj_(new C.cq(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bj_.prototype={
a_(){this.a1()
this.l9()},
c3u(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.aaO(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lq(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c3u()
w=a2.f
A.d.bm(w,new B.ezN(a2))
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
A.d.bm(w,new B.ezO(a2))
if(w.length<a1&&a2.ch)B.lb("bell",12+a2.r.aA(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fP$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fP$
B.lb("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mq,l,l,l,new B.ezC(m,d),l,l,l,l,"Share",l)],k),i=C.cn(new B.ezD(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cRp[w]
h.push(new B.dz(v.b,m.at===v.a,new B.ezE(m,v),v.c,A.b8,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cBJ[w]
u.push(new B.dz(t.b,m.ax===t.a,new B.ezF(m,t),l,A.b8,l))}s=m.ch
r=s?A.nV:O.r1
r=C.a([new B.dz("Sound",s,new B.ezG(m),r,A.b8,l)],k)
s=m.x
s=B.hy(A.b8,A.o.u(A.k.V(s)),"How many",150,15,new B.ezH(m),s)
q=B.hy(A.b8,l,"Together",2.5,0,new B.ezI(m),m.y)
p=B.hy(A.b8,l,"Apart",2.5,0,new B.ezJ(m),m.z)
o=B.hy(A.b8,l,"Same way",2.5,0,new B.ezK(m),m.Q)
n=m.as
return B.jF(A.b8,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eM(h,"TOUCH",l),new B.eM(u,"LOOK",l),new B.eM(r,l,l),s,q,p,o,B.hy(A.b8,A.o.u(A.k.V(n)),"Speed",280,50,new B.ezL(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.br3.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.acB,D.bil],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,R.KP],v):C.a([D.bfo,D.b6Y],v)}v=0+a6.a
u=0+a6.b
t=$.X()
s=C.M()
s.sau(new C.a7(A.b0,A.b6,A.x,w,a3,a3).aw(0,new C.aa(0,0,v,u)))
a5.aY(new C.aa(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cn.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cn.j(0.25).gp(0)
n.z=G.mt
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mJ(1,j,0.7,1).iG()
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
case"bird":J.bz(s.save())
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
j.push(new C.bF())
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbJ().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()
break
default:J.bz(s.save())
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
f=C.aq(h,A.cx,0.6)
f.toString
j.sau(new C.a7(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).aw(0,D.eDz))
o=j.H()
j=d.gbJ().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cj
else a1=v==="scare"?A.cn:A.b8
v=u?12:22
u=C.M()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ai(a4,v,u)}},
aq(d){return!0}}
B.abg.prototype={}
B.Ty.prototype={
T(){var w=C.a([],x.bi)
return new B.aBr(w,A.cI,A.au,C.V(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBr.prototype={
gHI(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gabM(){return 54-8*(this.r/100)},
a_(){this.a1()
this.l9()
B.z5("chain_burst").bz(new B.dDE(this),x.P)},
aXi(){return B.vE("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ayH(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abg(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mJ(1,u.aj()*360,0.6,1).iG()))}},
YJ(d){var w,v=this
if(d==null)return 0
w=(v.fP$-d)/1000
if(w<0.4)return v.gabM()*A.dV.av(0,w/0.4)
if(w<1.1)return v.gabM()
if(w<1.5)return v.gabM()*(1-(w-1.1)/0.4)
return 0},
lq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.ayH()
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
if(v!=null)n.push(new C.y(v,j.YJ(j.ax)))
for(v=A.d.gaf(w),s=new C.fm(v,new B.dDF());s.C();){r=v.gU(0)
n.push(new C.y(r.a,j.YJ(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fP$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eR()
break}}}if(!(j.at!=null&&j.YJ(j.ax)>0||A.d.b8(w,new B.dDG(j)))&&j.fP$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHI()){if(j.as>=j.gHI()*1.5)k=3
else k=j.as>=j.gHI()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bd("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXi()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXh(d){this.m(new B.dDu(this,d))
this.aXi()},
acJ(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dDx(u),s,null,!0,!0,x.S),$async$acJ)
case 2:t=e
if(t!=null)u.aXh(t)
return C.h(null,v)}})
return C.i($async$acJ,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHI(),t=w.x.h(0,""+w.r)
return B.jF(A.bV,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cn(new B.dDB(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.qX,"Levels",w.gc3v(),A.bV,v),new B.fg(A.jW,"New board",new B.dDC(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
atE(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOc,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bVK(d,e){return this.atE(d,e,A.c)}}
B.b9b.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.X()
w=C.M()
w.r=D.Es.gp(0)
d.aY(new C.aa(0,0,0+e.a,0+e.b),w)
v=new B.cJe(d)
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
p.z=G.mt
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
B.aJV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bve.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsO()}}
B.aKK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvv.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btF()}}
B.aKZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvD.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btU()}}
B.Fh.prototype={
gcLe(){return this.a.aC(0,this.b).gco()>4}}
B.ac5.prototype={}
B.UW.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.biz(new C.cq(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.biz.prototype={
aO8(d){return new H.mJ(1,A.o.F(d*29,360),0.6,1).iG()},
Zt(d){var w,v=D.C_.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bw(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.e3(w,u)},
aQG(d){A.d.bm(this.e,new B.ea2(this,d))},
cou(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gco()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gco()},
axg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Zt(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fh(p,r,k,new H.mJ(1,A.o.F(k*29,360),0.6,1).iG()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Zt(h)
f.push(new B.Fh(h,h,k,new H.mJ(1,A.o.F(k*29,360),0.6,1).iG()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Zt(h)
f.push(new B.Fh(h,h,k,new H.mJ(1,A.o.F(k*29,360),0.6,1).iG()))}}},
a_(){this.a1()
this.l9()},
c3x(d,e){var w,v=this.fP$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lb(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lq(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.ac5(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mJ(1,v.aj()*360,0.5,1).iG()))}if(u>3)a2.as=0
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
if(a1<0){a2.c3x(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new B.ear(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.W(q.ay?A.nV:O.r1,A.ad,p,p,p,21),p,p,p,new B.eag(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mq,p,p,p,new B.eah(q,d),p,p,p,p,"Share",p)],o),m=C.cn(new B.eai(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cUE[w]
l.push(new B.dz(v.b,q.x===v.a,new B.eaj(q,v),v.c,A.b7,p))}u=C.a([],o)
for(t=J.aW(D.C_.geh(D.C_));t.C();){s=t.gU(t)
u.push(new B.dz(s,q.y===s,new B.eak(q,s),p,A.b7,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.awX[w]
t.push(new B.dz(r.b,q.z===r.a,new B.eal(q,r),p,A.b7,p))}s=q.Q
return B.jF(A.b7,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eM(l,"TOOL",p),new B.eM(u,"SCALE",p),new B.eM(t,"SOUND",p),B.hy(A.b7,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.eam(q),s),new B.eM(C.a([new B.fg(D.bCE,"Stairs",new B.ean(q),A.b7,p),new B.fg(Am.N_,"Pinball",new B.eao(q),A.c,p),new B.fg(A.mj,"Random",new B.eap(q),A.c,p),new B.fg(D.xO,"Clear",new B.eaq(q),A.cj,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bgb.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.X()
w=C.M()
w.sau(D.bTe.aw(0,new C.aa(0,0,a0,a1)))
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
j.sau(new C.bR(P.ql,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
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
q.z=A.rb
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new C.bR(P.ql,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.acA.prototype={}
B.V0.prototype={
T(){var w=C.a([],x.gB)
return new B.aCQ(new C.cq(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCQ.prototype={
gaXj(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axr(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ayD(d){var w=D.C_.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.e3(v,u)},
a_(){this.a1()
this.l9()},
aPu(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.acA(w,A.k.F(t/v+u,1)))}},
lq(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fP$
if(p.Q){r=p.z
s=p.ayD(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lb(r,s+12,q,0.55)}}}},
c3y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaXj()),e=f.gco()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axr(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.axr(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.edX(h,n).$0()
h.c.e8()
return}}h.m(new B.edY(g,h,t))
if(h.Q)B.lb(h.z,h.ayD(g.a)+12,700,0.5)
C.eR()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.W(r.Q?A.nV:O.r1,A.ad,q,q,q,21),q,q,q,new B.ee4(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mq,q,q,q,new B.ee5(r,d),q,q,q,q,"Share",q)],p),n=C.cn(new B.ee6(r)),m=r.x
m=B.hy(A.by,""+A.k.V(m),"Tempo",180,40,new B.ee7(r),m)
w=C.a([],p)
for(v=J.aW(D.C_.geh(D.C_));v.C();){u=v.gU(v)
w.push(new B.dz(u,r.y===u,new B.ee8(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.awX[t]
v.push(new B.dz(s.b,r.z===s.a,new B.ee9(r,s),q,A.by,q))}return B.jF(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eM(w,"SCALE",q),new B.eM(v,"SOUND",q),new B.eM(C.a([new B.fg(A.dW,"Demo",new B.eea(r),A.by,q),new B.fg(A.mj,"Random",new B.eeb(r),A.c,q),new B.fg(D.xO,"Clear",new B.eec(r),A.cj,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bjF.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.X()
w=C.M()
w.r=D.VY.gp(0)
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
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mJ(1,A.k.F(s.$1(l)*23,360),0.55,1).iG()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.daG[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.ko(new C.eo(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ch,new C.jo(1),a4,a4,a4,a4,A.cd,a4)
i.eP()
o=i.b.c
m=J.fLi(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.M()
w.sau(D.e9w.aw(0,C.bU(t,16)))
a5.ai(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mJ(1,A.k.F(s.$1(a0)*23,360),0.55,1).iG()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fLi(v.$1(a0))
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
d.sau(new C.bR(P.ql,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aKI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvt.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btD()}}
B.aKJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvu.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btE()}}
B.t1.prototype={}
B.b84.prototype={}
B.UZ.prototype={
T(){var w=x.S
return new B.aCO(C.a([],x.aq),C.V(w,w),C.aX(w),D.eJk)}}
B.aCO.prototype={
a_(){this.a1()
B.z5("molecule_maker").bz(new B.edr(this),x.P)},
aie(d){var w={}
w.a=0
this.f.bI(0,new B.edd(w,d))
return w.a},
gaXp(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hVs(t,this.f,D.a1T[this.d])},
c3P(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eP()
w.dG(t*7+3)
t=v.y
v.m(new B.ed7(v,e,t.a,w,t.b))
B.vH("pop",u.length,90,0.35)},
avI(d){return this.m(new B.ed8(this))},
aXq(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c3V(d){this.m(new B.edc(this,this.aXq(d)))},
cl_(){var w=this.r
if(w==null)return
this.m(new B.edb(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a1T[k.d],h=k.gaXp()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vM.h(0,w[u].a).a-k.aie(u)
w=i.c
w=w.gdL(w)
t=w.dt(w,new B.edl(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b8:A.hv
r=x.p
s=C.v(C.a([new C.C(A.fH,B.f7g(w,s,h&&k.d<12?new B.fg(A.iS,"Next",new B.edm(k),A.b8,j):j),j),C.D(C.cn(new B.edn(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dz(p+D.a1T[u].b,k.d===u,new B.edo(k,u),j,A.hv,j))}q=C.a([],r)
for(p=D.vM.gdL(D.vM),p=p.gaf(p);p.C();){o=p.gU(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dz:m.b
q.push(new B.dz(n+" \xb7 "+m.a,!1,new B.edp(k,o),j,l,j))}return B.jF(A.hv,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eM(w,"GOAL",j),new B.eM(q,"ADD",j),new B.eM(C.a([new B.dz("Remove selected atom",!1,k.gckZ(),A.e4,A.cj,j),new B.dz("Clear all",!1,k.gc3Q(k),A.jW,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bgT.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hv.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bI(0,new B.dmj(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vM.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jk
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
h.sau(new C.bR(A.Jo,0.5,A.x,a3,0,C.a([f,g,e],r),I.av8,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aB:A.c
d=new C.ko(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.ch,new C.jo(1),a3,a3,a3,a3,A.cd,a3)
d.eP()
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
a1=new C.ko(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.no),A.a5,A.ch,new C.jo(1),a3,a3,a3,a3,A.cd,a3)
a1.eP()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.ii(a3,a3,a3,a3,D.eRP,A.a5,A.ch,a3,A.eq,A.cd)
d.eP()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.TX.prototype={
T(){var w=x.s
return new B.bhP(C.a([],w),C.a([],w))}}
B.bhP.prototype={
a_(){this.a1()
this.auZ()
B.z5("dna_lab").bz(new B.dMq(this),x.P)},
gb1D(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a2V.h(0,w[u])
t.toString
s.push(t)}return A.d.fW(s)},
ga8k(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb1D(),w,v))}return u},
auZ(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eP()
k.dG(l.e*31+l.d*7+C.Bq(new C.S(Date.now(),0,!1)))
w=new B.dMf(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mz(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a2V.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fW(r))}if(!A.d.b8(t,new B.dMe()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b_r()},
b_r(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fTX(s.ga8k()[r])
v=J.dH(D.C0.geh(D.C0),new B.dMg(w)).dF(0)
u=new C.eP()
u.dG(r+s.e)
A.d.fq(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dc(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.eP()
t.dG(s.e*3+r)
A.d.fq(u,t)
s.z=u},
aXo(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dgC.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a2V.h(0,w.f[v])
u.toString
break A}u=B.fTX(w.ga8k()[v])
break A}w.m(new B.dMd(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dMo(),e=new B.dMj(),d=h.d===2?h.gb1D():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mC,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bV.j(0.18):A.K
q=new C.aV(10,10)
p=new C.aA(t.length===s?A.bV:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8k()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cl(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bnu,A.en,g,g,g))}v.push(C.c_(A.bB,u,A.bs,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c_(A.bB,u,A.bs,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a6(34,g,new C.cp(A.A,g,g,C.W(Ai.N6,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lt,C.c_(A.bB,u,A.bs,0,0),g)],a0))}v.push(A.an)
v.push(C.d(w,g,g,g,g,g,g,Q.mC,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b8.j(0.25):A.dp
q=new C.aV(12,12)
o=j<t.length
p=new C.aA(o?A.b8:A.b2,1,A.q,-1)
if(o){o=D.C0.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.eh,g,g,g))}v.push(C.c_(A.bB,u,A.bs,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c_(A.bB,u,A.bs,0,0))}v.push(A.aA)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f7g(u,t>=(h.d===2?3:9)?A.b8:A.bV,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f7g(u,A.bV,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,L.T4,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bC,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dz(D.d_8[j],h.d===j,new B.dMk(h,j),g,A.bV,g))
u=C.a([new B.eM(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bH(A.a3,g,g,new B.fg(A.jW,"New strand",new B.dMl(h),A.b8,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.C0.h(0,i)
q.toString
a0.push(new B.fg(D.ZQ,q,new B.dMm(h,i),A.bV,g))}u.push(C.c_(A.bB,a0,A.bs,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.au2:D.cJT
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aV(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eS3,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dMn(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.pT,A.j,0,g,g))}return B.jF(A.bV,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Uc.prototype={
T(){return new B.aBV(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aBV.prototype={
a_(){var w,v=this
v.a1()
w=v.qf(v.gc3R())
w.j0(0)
v.d!==$&&C.aO()
v.d=w
B.z5("ecosystem").bz(new B.dPf(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bt2()},
gaLt(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c3S(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaLt()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.bw(w),5)===0)B.vE("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dP2())},
a9w(d){this.m(new B.dP1(this,d))
B.vH("pop",3,120,0.4)},
c3U(){return this.m(new B.dP3(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.Xz,B.f7g(r,t.gaLt()?A.b8:A.cj,s),s),C.D(new C.C(D.bo1,C.bv(C.m(18),C.b3(s,s,s,new B.bcd(t.f,t.r,t.w,s),A.f0),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.eZ1,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hy(A.b8,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dP7(t),w)
v=t.y
v=B.hy(A.bR,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dP8(t),v)
u=t.z
return B.jF(A.b8,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hy(A.ct,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dP9(t),u),new B.eM(C.a([new B.dz("Drought",!1,new B.dPa(t),A.yb,A.aM,s),new B.dz("Disease",!1,new B.dPb(t),D.bCw,A.by,s),new B.dz("+ Foxes",!1,new B.dPc(t),s,A.ct,s),new B.dz("+ Rabbits",!1,new B.dPd(t),s,A.bR,s),new B.dz("Reset",!1,t.gc3T(),A.jW,A.aV,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bcd.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.X()
w=C.M()
w.sau(D.bRh.aw(0,new C.aa(0,0,d,a0)))
a1.aY(new C.aa(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uN,A.bo,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.M()
t.r=a0.gp(0)
a1.aY(new C.aa(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eP()
r.dG(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hh.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d1J(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.aa(10,a0,e,u)
t=C.M()
t.r=D.bbj.gp(0)
a1.aY(new C.aa(0,f,d,f+g),t)
i=C.M()
i.r=A.dp.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d1L(h,j,a1)
g.$3(0,100,A.bo)
g.$3(1,120,A.bR)
g.$3(2,24,A.ct)
g=new B.d1K(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bo,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bR,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
aq(d){return!0}}
B.aK8.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aQx.prototype={
guH(){return A.d.cI(this.a,0,new B.bEr())}}
B.Tq.prototype={
T(){var w=x.S
return new B.bht(B.hSx(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bht.prototype={
gvD(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dzP())},
a_(){var w,v=this
v.a1()
w=v.qf(new B.dA1(v))
w.j0(0)
v.x!==$&&C.aO()
v.x=w
B.z5("balance_lab").bz(new B.dA2(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsG()},
cvl(d){var w,v=this
v.m(new B.dzQ(v,d))
B.vH("click",v.f[d],60,0.4)
if(v.gvD()===v.d[v.e].guH()&&v.r.L(0,v.e)){B.vH("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a4(w).k("cm.E"))
B.vE("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dzV(),C.T(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvD()===m[o.e].guH())s="\u2696\ufe0f Balanced! "+m[o.e].guH()+" = "+o.gvD()+". The torques are equal, so the seesaw stays level."
else s=o.gvD()>m[o.e].guH()?"The right side is too strong ("+o.gvD()+" vs "+m[o.e].guH()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guH()+" vs "+o.gvD()+"). Add weight to the right, or place it further from the middle."
k=o.gvD()===m[o.e].guH()?A.b8:A.aM
k=B.byp(s,k,o.gvD()===m[o.e].guH()&&o.e<m.length-1?new B.fg(A.iS,"Next",new B.dzW(o),A.b8,n):n)
w=C.D(C.cn(new B.dzX(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guH(),n,n,n,n,n,n,D.aPp,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.Xz,k,n),w,new C.C(D.ag9,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvD(),n,n,n,n,n,n,D.aPp,A.dL,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dz(w+p,o.e===v,new B.dzY(o,v),n,A.aM,n))}return B.jF(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eM(u,"LEVEL",n),new B.eM(C.a([new B.dz("Clear right side",!1,new B.dzZ(o),A.jW,A.cj,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b8g.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bF())
v=C.M()
v.r=A.ak.gp(0)
d.aO(i,v)
v=h-120
i=C.M()
i.r=A.aK.gp(0)
d.aY(new C.aa(v,w,v+240,w+8),i)
i=d.a
J.bz(i.save())
i.translate(h,f)
d.ja(0,j.b)
u=g*5.8
t=C.bA(new C.aa(-u,-9,u,9),A.hd)
w=C.M()
w.sau(D.bTW.aw(0,new C.aa(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hG.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fk8(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cBM(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aV)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bV)
if(w[s]===0){l=C.bA(C.cu(new C.u(m,-22),22,v),A.hd)
$.X()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b2.gp(0)
r=k.H()
i.drawRRect(C.ep(l),r)
r.delete()
B.fk8(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.X()
i=C.M()
i.r=(j.e?A.b8:A.aL).gp(0)
d.ai(new C.u(h,f),7,i)},
aq(d){return!0},
gj9(){return this.e}}
B.Uq.prototype={
T(){return new B.bi0(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bi0.prototype={
ga_W(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gacS(){var w=this.ga_W(),v=this.r,u=D.awF[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.da(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qf(new B.dTi(v))
w.j0(0)
v.x!==$&&C.aO()
v.x=w
B.z5("gear_lab").bz(new B.dTj(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bta()},
c3W(d,e){var w,v=this
v.m(new B.dT8(v,d,e))
if(v.gacS()&&v.w.L(0,v.r)){B.vH("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a4(w).k("cm.E"))
B.vE("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_W(),n=r.ga_W(),m=D.awF[r.r].a
m=r.gacS()?"\u2705 Done! Ratio "+A.k.aa(r.ga_W(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gacS()?A.b8:A.ct
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.Xz,B.byp(m,w,r.gacS()&&r.r<7?new B.fg(A.iS,"Next",new B.dTc(r),A.b8,q):q),q),C.D(C.b3(q,q,q,new B.bdH(v,r.f,q),A.f0),1),new C.C(D.ag9,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga_W(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,S.a6C,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dz(m+s,r.r===t,new B.dTd(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eM(o,"GOAL",q),B.hy(A.aV,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dTe(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.aus("Gear "+s+" teeth",p,new B.dTf(r,t),8,40,D.d8k[t],""+p,q))}return B.jF(A.ct,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdH.prototype={
bNL(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.X(),j=C.a([],x.v),i=new C.aQ(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.eaJ,D.efs,D.euY,D.emu],s=v===0,r=0;r<4;++r){q=t[r]
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
n=A.d.fF(g,A.qp)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bz(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bX(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d9u(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d9,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.d_)
h.$5(new C.u(0,0),g[0],w[0],j,A.mO)
h.$5(new C.u(t,0),g[1],w[1],i,A.fC)
s.restore()
s=new B.d9v(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aV)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.b8)},
aq(d){return!0}}
B.Tz.prototype={
T(){var w=$.aw()
return new B.bhG(new C.ar(new C.bb("Meet me at noon",A.b3,A.aN),w),new C.ar(new C.bb("LEMON",A.b3,A.aN),w),C.aX(x.S))}}
B.bhG.prototype={
a_(){this.a1()
this.aW9()
B.z5("cipher_lab").bz(new B.dE0(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aW9(){this.y=1+A.cI.aA(25)
this.z=0},
ga8O(){var w=this
return B.a0S(B.a0S(D.GF[w.x],w.y),-w.z)===D.GF[w.x]},
gawG(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0S(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a0S(u,0).split(""),x.s),new B.dDJ(),x.dv).fW(0)
break A}w=B.i48(u,v.e.a.a)
break A}return w},
aRz(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d3(d.toUpperCase()),v=x.e8,w=new C.bW(w,w.gM(0),v.k("bW<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fF(q,A.zR))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aV(2,2)
v.push(new C.bD(1,A.bi,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aV,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.LO,r,r,r,r),new C.x(C.jE(65+s),r,D.f_Q,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lR,A.j,0,A.p),r))}return new C.a6(r,70,C.A(v,A.dF,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aL(o,A.T,!1,o,!0,A.r,o,C.aM(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lp,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDS(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eV8,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aL(o,A.T,!1,o,!0,A.r,o,C.aM(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lp,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDT(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iF,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.aA)
w.push(D.fq1)
w.push(A.at)
v=A.aV.j(0.12)
u=C.m(14)
t=C.I(A.aV.j(0.4),A.q,1)
w.push(C.p(o,C.zo(p.gawG().length===0?"\u2026":p.gawG(),D.eZP,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(B.byp(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aV,o))
w.push(A.ac)
w.push(D.f6T)
w.push(A.at)
w.push(p.aRz(p.gawG()))
w.push(A.at)
w.push(D.f9f)
s=C.cB(w,o,A.bC,o,o,A.ah,!1)}else{w=B.byp("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0S(D.GF[p.x],p.y),o,o,o,o,o,o,D.f_o,o,o,o)
u=(p.ga8O()?A.b8:A.aV).j(0.14)
t=C.m(14)
r=C.I((p.ga8O()?A.b8:A.aV).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fjN,v,A.S,D.fee,C.p(o,C.d(B.a0S(B.a0S(D.GF[p.x],p.y),-p.z),o,o,o,o,o,o,D.f0R,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aRz(B.a0S(D.GF[p.x],p.y)),A.P],x.p)
if(p.ga8O())t.push(B.byp("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b8,new B.fg(A.jW,"Next",new B.dDU(p),A.b8,o)))
s=C.cB(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eM(C.a([new B.dz("Make a secret",w===0,new B.dDV(p),A.jh,A.aV,o),new B.dz("Crack a code",w===1,new B.dDW(p),A.pJ,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dz(n[q],p.r===q,new B.dDX(p,q),o,A.aV,o))
v=C.a([new B.eM(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hy(A.aV,""+u,"Shift",25,1,new B.dDY(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hy(A.aM,""+v,"Shift back",25,0,new B.dDZ(p),v))}return B.jF(A.aV,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aKg.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.e8.prototype={}
B.te.prototype={
aoT(d,e,f,g){var w=this
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
B.a9p.prototype={}
B.aat.prototype={}
B.a3x.prototype={
bbk(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9p(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c01(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new B.bKm())},
aiI(d,e,f,g){var w="p"+this.c++,v=new B.te(w,e,f,g)
v.aoT(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new B.bKx(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cDb(d,e,f,g,h){return A.d.b8(this.b,new B.bKs(e,f,g,h))},
aju(d,e,f,g){var w
if(d===f||this.cDb(0,d,e,f,g))return null
w=new B.aat(d,e,f,g)
this.b.push(w)
return w},
aza(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zn(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
am5(d){return this.L7(d)&&!d.x&&d.cx>this.zn(d)},
b41(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
L7(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c3X(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yH.h(0,v)
if(w!=null)return w.a
return 100},
uP(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c01(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bKy(a2),t).cI(0,0,new B.bKz(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.V(x.N,u)
n=new B.bKB(o)
m=C.a([],x.t)
l=new B.bKA(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.V(u,u)
f=new B.bKD(g,l,n)
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
a2.b3Y(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zn(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b3Y(e,d,w,!0)
a2.bKO(a4)},
b3Y(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.V(x.N,b3),b5=new B.bKo(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bKn(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bKq(C.V(b3,b3),r,b5)
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
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b41(t)*(1+t.CW))
a4=b2.aza(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c3X(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bNK(e,a0,b8)
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
bNK(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bKO(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aza(o)/a1.b41(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zn(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bD3(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bbk(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tq(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tq(o,"The "+$.q3().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tq(o,"More than 1.5 amps went through the "+$.q3().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tq(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tq(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yH.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q3().h(0,n).b
l=f.b
l=l===A.k.jR(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jR(g)?""+A.k.V(g):C.t(g)
a1.tq(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eHi.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tq(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tq(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tq(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tq(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tq(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tq(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bD3(d){return A.d.b8(this.a,new B.bKl(d))},
tq(d,e){var w
d.x=!0
d.ay=e
this.bbk(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bfZ(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFd(d){var w=d.b
return D.aLT.t(0,w)||D.yH.ah(0,w)||w==="buck"||w==="regulator"},
bcJ(d){var w,v=!0
if(!this.L7(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yH.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
U_(d,e){var w=this.b
return new C.a2(w,new B.bKF(d,e),C.T(w).k("a2<1>")).gM(0)},
C7(d){var w,v
if(d.x)return!1
w=d.b
if(D.yH.ah(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
baR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q3().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFd(d)||i.C7(d))return null
w=i.U_(d,0)
v=i.U_(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcLw(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jR(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yH.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFi("battery"),o=J.aW(t.a),t=new C.fm(o,t.b);t.C();){n=o.gU(o)
if(n.e===1.5&&n.as<=0.02&&i.U_(n,0)+i.U_(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFi("switch"),o=J.aW(t.a),t=new C.fm(o,t.b);t.C();)if(!o.gU(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q3().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zn(k))return"The "+$.q3().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zn(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b8(u,new B.bKt(i,d))
h=q.b
h=h===A.k.jR(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFi(d){var w=this.a
return new C.a2(w,new B.bKw(d),C.T(w).k("a2<1>"))},
aES(d){return this.aFi(d).b8(0,new B.bKv(0.35))},
pr(d,e){return A.d.b8(this.a,new B.bKu(e))}}
B.ahD.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=C.M()
w.r=F.W7.gp(0)
c0.aY(new C.aa(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lS.ah(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lS.ah(0,h.b)?(h.ch-1)*38:0
b4.cAe(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hqh(q.a,q.b,c1)
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
g.r=D.acd.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yI
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bz(w.save())
w.translate(j,i)
h=A.k.D(A.mH.av(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cdB(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zn(a0)){g=j+0
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
a3.push(new C.bF())
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbJ().a.snapshot()
w.drawPath((a4.e=new C.cF(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aQ(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbJ().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.ko(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jo(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a5(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aLT.t(0,h)||D.yH.ah(0,h)||h==="buck"||h==="regulator")&&!r.C7(a0)&&r.U_(a0,0)+r.U_(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aH.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.ko(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jo(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a5(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lS.ah(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.W7.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bcJ(a0)?A.cj:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bcJ(a0)){a9=new C.ko(new C.eo("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cj,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jo(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a5(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.WF,F.WK,b2)
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
i.z=A.Qv
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b8(q,new B.bFD())){b3=A.d.cI(q,0,new B.bFE())
$.X()
b7=C.M()
b7.r=D.b6J.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.aa(0,0,b8,b9),b7)
a9=C.ii(b5,b5,b5,b5,D.eRI,A.a5,A.ch,b5,A.eq,A.cd)
a9.Bw(b6-24)
a9.a5(c0,new C.u(12,10))}},
q1(d,e,f,g,h){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
v.a5(d,f)},
cAe(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hiL(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.acd,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aV,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
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
if(q){n=new C.RQ(new C.vj(C.wN(d),!1,C.a([],x.f5))).gK(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jj()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jj()
h=t[u].b
h===$&&C.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jj()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jj()
g=t[u].b
g===$&&C.c()
f=A.k.F(h+i,g.a.length())
v.jj()
i=t[u].Md(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Oo(d,e,f,g){var w,v,u,t
$.X()
w=C.M()
v=g?A.b0:A.a3
u=g?A.b6:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.sau(new C.a7(v,u,A.x,C.a([e,f,e,t],x.O),A.GH,null).aw(0,d))
return w},
auP(d,e,f){return this.Oo(d,e,f,!0)},
c_D(d,e){return this.Oo(d,A.bn,A.iL,e)},
agi(d,e){var w,v,u
$.X()
w=C.M()
w.sau(D.aKv.aw(0,C.bU(e,4.2)))
d.ai(e,4.2,w)
w=e.ad(0,D.e00)
v=e.ad(0,D.e09)
u=C.M()
u.r=A.eu.gp(0)
u.c=1.2
d.bA(w,v,u)},
cdB(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=C.M()
c0.sau(D.bQY.aw(0,D.eEi))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mt
c1.hM(D.eEa,w)
if(c3){w=C.bA(D.eEh,A.kq)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.fZZ(c2)
c1.bA(new C.u(-u,0),D.e1i,c0)
c1.bA(D.e_9,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lS.ah(0,w)&&c2.ch!==1
if(s){J.bz(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bzZ(c1,c2)
break
case"solar":r=C.bA(D.eEd,A.ii)
c1.aD(r,b3.Oo(new C.aa(r.a,r.b,r.c,r.d),A.dz,A.bR,!1))
b9=C.M()
w=C.aq(D.b9Q,A.d6,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bhu,A.ma,0.3+0.4*c2.f)
v.toString
b9.sau(new C.a7(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a5j))
c1.aY(D.a5j,b9)
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
v.r=A.cp.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aQ($.X().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aO(b9,w)
w=c2.f
b9=C.M()
b9.r=A.dN.j(0.9).gp(0)
c1.ai(D.e_f,4+4*w,b9)
break
case"crank":n=C.bA(D.eDZ,A.he)
c1.aD(n,b3.auP(new C.aa(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.M()
b9.sau(D.aKw.aw(0,C.bU(A.J,12)))
c1.ai(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cp.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.sau(D.e9P.aw(0,C.bU(m,7)))
c1.ai(m,7,b9)
b3.agi(c1,D.e1b)
b3.agi(c1,D.e_2)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bF())
l=C.M()
l.r=A.bR.gp(0)
c1.aO(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bz(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aQ(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cS(6,-14,2,-30))
l.push(new C.cS(-2,-14,0,-2))
l.push(new C.bF())
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbJ().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.sau(D.e9v.aw(0,C.bU(A.J,4.5)))
c1.ai(A.J,4.5,b9)
break
case"switch":n=C.bA(D.eE5,A.rn)
b9=C.M()
b9.sau(D.ang.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agi(c1,D.Rn)
b3.agi(c1,D.aFk)
i=c2.w?D.aFk:D.dZN
b9=C.M()
b9.r=A.aB.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.Rn,i,b9)
b9=C.M()
b9.r=(c2.w?A.b8:A.bR).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.Rn,i,b9)
b9=C.lc(D.Rn,i,0.85)
b9.toString
w=C.M()
w.r=A.ay.gp(0)
c1.ai(b9,5,w)
break
case"fuse":h=C.bA(D.aL1,D.aKB)
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
b9.r=C.aq(A.bR,A.ct,c2.fx).gp(0)
c1.bA(D.aFB,D.aFj,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aFB,D.e1z,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.e_G,D.aFj,b9)
b9=C.M()
b9.r=A.dA.gp(0)
c1.ai(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cu(new C.u(F.oN[g]*22,0),20,9)
w=C.bA(f,A.hA)
o=b3.Oo(f,A.d9,A.oi,!0).H()
b9.drawRRect(C.ep(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.sau(D.e9H.aw(0,C.bU(A.J,21)))
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
b9.sau(D.e9t.aw(0,C.bU(A.J,13)))
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
case"resistor":a1=C.bA(D.aL1,D.aKB)
b9=C.M()
b9.sau(D.bUc.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c4(new C.aa(w,-9,w+4.5,9)),o)
o.delete()}b9=C.M()
b9.r=A.aM.gp(0)
c1.aY(D.eEr,b9)
b9=c2.r
b3.q1(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e0R,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yI
c1.ai(D.vT,34,v)}n=C.cu(D.dZi,12,18)
c1.aD(C.bA(n,A.hA),b3.Oo(n,A.bn,A.e_,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dn.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.Vq
else{v=C.aq(A.e_,A.hU,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Em
else{l=C.aq(A.dz,A.dN,c2.fx)
l.toString}w.sau(new C.bR(A.rI,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.rk,17)))
c1.ai(A.rk,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ai(A.rk,17,w)
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
c1.bA(D.e1v,D.e1x,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e_z,D.e_C,v)
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
else{w=C.aq(A.dz,D.baC,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aO(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.diW
c1.ai(A.rk,30,v)}w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e1B,D.e1A,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e_I,D.e_H,w)
b9=b9.r
w=x.v
a6=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.M()
if(t)l=A.th
else{l=C.aq(A.er,D.acV,c2.fx)
l.toString}if(t)j=A.kf
else{j=C.aq(A.kc,A.ay,c2.fx)
j.toString}v.sau(new C.a7(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eDv))
c1.aO(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.j9.gp(0)
c1.aO(a6,v)
v=C.M()
v.r=A.eM.gp(0)
c1.aY(D.eDB,v)
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
c1.aD(C.bA(a7,A.hd),b3.auP(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cE.gp(0)
c1.aY(D.eDi,b9)
b9=C.M()
b9.r=A.cp.gp(0)
c1.aY(D.eDj,b9)
b9=c1.a
J.bz(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bz(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cu(D.dZA,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c4(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aB.gp(0)
c1.ai(A.J,3,w)
b9.restore()
b3.q1(c1,"M",D.e1a,A.aB,14)
break
case"buzzer":a8=C.cu(A.J,42,42)
b9=C.M()
b9.sau(D.e9L.aw(0,a8))
c1.hM(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.ai(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b2.gp(0)
c1.ai(A.J,6,b9)
b3.q1(c1,"+",D.e13,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bV.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c4(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bA(D.eE1,A.hd)
w=C.M()
w.sau(D.bRV.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
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
w.r=D.bbc.j(0.5*b9).gp(0)
w.z=A.jk
c1.aO(a9,w)}$.X()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lC,A3.Wu,c2.fx).gp(0)
c1.aO(a9,b9)
break
case"capacitor":a7=new C.aa(-16,-22,16,18)
b9=C.bA(a7,A.hd)
w=C.M()
w.sau(D.bQQ.aw(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bR.gp(0)
c1.aY(D.eDH,w)
for(p=0;p<4;++p){b0=new C.ko(new C.eo("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.aB,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ch,new C.jo(1),b4,b4,b4,b4,A.cd,b4)
b0.eP()
b0.a5(c1,new C.u(-14,-18+p*9))}b1=new C.aa(-16,-24,16,-17)
c1.aD(C.bA(b1,A.hA),b3.c_D(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=C.M()
v.r=A.b8.j(0.5).gp(0)
c1.aY(new C.aa(-3,w,11,w+b9),v)
b3.q1(c1,"1F",D.vT,A.c,11)
break
case"radio":a1=C.bA(D.a5j,A.he)
b9=C.M()
b9.sau(D.bUr.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.oi.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bA(D.eE2,A.ii)
w=C.M()
w.r=A.dE.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lC.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.M()
w.r=(c2.fx>0?A.h1:A.nC).gp(0)
c1.aY(D.eDl,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=C.M()
v.r=A.bI.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.sau(D.aKw.aw(0,C.bU(D.a4m,6)))
c1.ai(D.a4m,6,w)
w=C.M()
w.r=A.oi.gp(0)
c1.ai(D.e_8,4,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=1.8
c1.bA(D.e_6,D.aFo,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aFo,4+k*5+A.k.F(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nH.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c4(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bA(D.eEc,A.hd)
v=C.M()
v.r=M.mU.gp(0)
c1.aD(w,v)
b2=C.bA(D.eE9,A.hA)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bz(b9.save())
b9.clipRRect(C.ep(b2),$.pj(),!0)
b9.translate(-33,-21)
E.fWf(c1,D.eJL,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.b8.gp(0)
c1.ai(D.e_k,1.6,b9)}else{w=C.M()
w.r=D.uX.gp(0)
c1.aD(b2,w)
b9=new C.aQ(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aO(b9,w)}b9=C.M()
b9.r=A.bv.gp(0)
c1.aY(D.eDA,b9)
break}B.i1P(c1,c2,b3.b.d,b3.gc3Y())
if(t)b3.q1(c1,"\u2716",D.e1E,A.ay,14)
if(s)c1.a.restore()},
bzZ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.aa(-28,-13,28,13)
d.aD(C.bA(w,A.rn),m.auP(w,A.dz,A.iO))
v=new C.aa(-22,-13,22,13)
$.X()
u=C.M()
u.sau(D.an9.aw(0,v))
d.aY(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aY(D.eDQ,u)
t=new C.aa(28,-5,34,5)
d.aD(C.bA(t,A.hc),m.Oo(t,A.dz,A.iL,!0))
m.q1(d,"+",D.dZS,A.aM,11)
m.q1(d,"\u2212",D.e1c,A.ad,11)
m.q1(d,C.t(l===A.k.jR(l)?A.k.V(l):l)+"V",D.e0X,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aY(D.eDP,u)
u=e.as
s=C.M()
s.r=C.aq(A.ay,A.b8,u).gp(0)
d.aY(new C.aa(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.q1(d,"FLAT",D.e0Q,A.cj,9)}if(l>2){u=C.M()
u.r=A.b2.gp(0)
u.c=1
d.bA(D.dZo,D.aF3,u)
m.q1(d,l>3?"3 cells":"2 cells",D.e0W,A.az,8)}}else if(l<=9){r=new C.aa(-22,-17,22,17)
u=C.bA(r,A.rn)
$.X()
s=C.M()
s.sau(D.bU0.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.d_.gp(0)
d.aY(D.eDR,s)
for(u=d.a,q=0;q<2;++q){p=D.d6v[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.aKv.aw(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.q1(d,"9V",D.e0S,A.c,16)}else{r=new C.aa(-34,-16,34,16)
u=C.bA(r,A.ii)
$.X()
s=C.M()
s.sau(D.an9.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cn.gp(0)
d.aY(D.eEb,s)
for(u=d.a,q=0;q<2;++q){s=C.bA(C.cu(new C.u(F.a2e[q],-20),8,10),A.hc)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cp.gp(0)
n=o.H()
u.drawRRect(C.ep(s),n)
n.delete()}m.q1(d,"+",D.dZZ,A.ay,10)
m.q1(d,"12V",D.e0T,A.aB,15)}},
aq(d){return!0}}
B.ms.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.V(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.te(o,r,q,p)
n.aoT(o,r,q,p)
k.push(n)
J.im(s[4],new B.ciL(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aju(m,u[1],l,u[3])}}}
B.ahB.prototype={
T(){var w=x.N
return new B.ahC(A.J,A.au,C.V(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.ahC.prototype={
acV(d){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new B.bFh(w,d))
w.as=C.cM(A.l6,new B.bFi(w))},
q(){var w=this.as
if(w!=null)w.a8(0)
w=this.ch
if(w!=null)w.a8(0)
this.bpT()},
a_2(d,e){return this.cbz(d,e)},
aZo(d){return this.a_2(d,!1)},
cbz(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_2=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qL:A.v1
p=d.b
w=3
return C.b(E.fJB(s,r,p,d.ax<3.2,q,$.q3().h(0,p).b),$async$a_2)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_2,v)},
cnY(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.ck(0,d.a,new B.bFj()),t=J.cE(u)
t.L(u,v)
t.bm(u,new B.bFk(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a8(0)
w.a0n(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a8(0)
w.ch=C.cM(A.kg,new B.bFl(w,u,d))}},
ZJ(d){return this.c9X(d)},
c9X(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ZJ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i2V(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$ZJ)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$ZJ,v)},
a0n(d){return this.clD(d)},
clD(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0n=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.mT,null,new B.bFf(u,d),t,!0,!0,!1,A.lm,!1,!1,x.H),$async$a0n)
case 2:return C.h(null,v)}})
return C.i($async$a0n,v)},
a_(){this.a1()
this.bcU()
this.l9()},
bcU(){this.a.c.e=new B.bFA(this)},
lq(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uP(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lS.h(0,s.b)
if((r==null?null:r.b)!==D.z6)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_2(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"radio":if(s.fx>0){E.dF(900+A.cI.aA(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dF(300+A.cI.aA(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dF(330+A.o.F(110*A.k.bw(q.a.c.d*3),4),"",140,0,0.14,p)
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
q.m(new B.bFB())},
b5b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lS.ah(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.y(p,n)
r=i}}}return s},
b_4(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dw<1>"),w=new C.dw(w,v),w=new C.bW(w,w.gM(0),v.k("bW<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lS.ah(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cAf(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lS.ah(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lS.ah(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hiL(new C.u(k,n),new C.u(i,l),p)
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
acT(){this.a.toString
this.m(new B.bEL())},
bmH(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cUt[v]
if(!A.d.b8(p.a.c.a,new B.bFC(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.HL:o
s=s?L.HL:o
q=t.aiI(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.acT()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.PL[v].a)
u=w.length
t=u>8
s=t?A.d.dn(w,0,A.o.an(u+1,2)):w
r=t?A.d.fJ(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a4(q).k("cz<1>")
w=C.B(new C.cz(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aZU(s,!0))
n.a.toString
if(t)w.push(n.aZU(r,!0))
w.push(C.D(C.cn(new B.bFz(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aZU(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q3()
s=t.h(0,u).d.j(0.14)
r=new C.aV(14,14)
q=new C.aA(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zk,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nm,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.ts,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEM(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cB(m,p,A.h5,p,p,A.aO,!1),A.f,p,p,new C.o(D.Ei,p,new C.bP(A.Y,A.Y,new C.aA(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aXt(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.aaY,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.aga,w,w,w)},
cdC(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q3().h(0,o),m=d.dy,l=d.fr,k=new B.bF4(q,n),j=C.d(n.c,p,p,p,p,p,p,A.SY,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bIu,p,p,p,new B.bES(q,d),p,p,p,p,"Remove part",A.c7),C.aH(p,p,p,p,A.Ga,p,p,p,new B.bET(q),p,p,p,p,p,A.c7)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.D3,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f_d,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.an,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cj:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.baR(d)
if(v!=null){l=(d.x?A.ay:A.aH).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aH).j(0.5),A.q,1)
m.push(new C.C(A.ia,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f5A,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(B.fUm(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dz("CH "+t,d.at===u,new B.bEU(q,d,u),p,h,p))}l=C.c_(A.bB,l,A.bs,4,6)
l=C.a([A.an,l,A.at,C.d(q.a.c.C7(d)?"Showing: "+F.Pn[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C7(d))l.push(new B.fg(A.FK,"Open big screen",new B.bEX(q,d),h,p))
A.d.v(m,l)}if(D.lS.ah(0,o)&&!B.fUm(o)){l=C.a([A.an,C.d(q.a.c.C7(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C7(d))l.push(new B.fg(A.N7,"Open the "+$.q3().h(0,o).b,new B.bEY(q,d),h,p))
A.d.v(m,l)}if(D.lS.ah(0,o))A.d.v(m,C.a([A.an,new B.fg(A.Bn,"Make it bigger (or tap it 4 times)",new B.bEZ(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C7(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.an,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f02,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d9u[s]
j=r===A.k.jR(r)?A.k.V(r):r
l.push(new B.dz(C.t(j)+" V out",d.e===r,new B.bF_(q,d,r),p,h,p))}i.push(new C.C(A.mf,C.c_(A.bB,l,A.bs,0,6),p))}if(o==="regulator")i.push(D.fng)
A.d.v(m,i)}if(q.a.c.L7(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zn(d),2)
i=q.a.c
w=i.am5(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.am5(d)?A.cj:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zn(d),0,1)
i=q.a.c.am5(d)?A.ay:A.b8
m.push(new C.C(A.ia,C.v(C.a([l,A.cX,C.bv(j,C.lX(A.bF,p,p,5,p,w,new C.lQ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.ia,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eV5,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d_N[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dz(j,d.e===r,new B.bF0(q,d,r),p,h,p))}m.push(C.c_(A.bB,l,A.bs,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cS2[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dz(j,d.r===r,new B.bF1(q,d,r),p,h,p))}m.push(C.c_(A.bB,l,A.bs,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bF2(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bF3(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bEV(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bEW(d)))
if(o==="crank")m.push(D.fiW)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.aXt(new C.cU(D.aXT,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.b9d.prototype={}
B.Ud.prototype={
T(){return new B.aBW(B.fZY(),new C.cq(null,x.gJ),C.aX(x.S))}}
B.aBW.prototype={
a_(){this.a1()
$.aT.c2$.push(this)
this.acU()},
acU(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$acU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fpA(),$async$acU)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i27(t.d,r)
if(s!=null){t.m(new B.dPn(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$acU,v)},
Eu(){var w,v=this
if(!v.as)return
w=B.hTM(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bC0(w)},
iS(d){if(d!==A.fs)this.Eu()},
q(){$.aT.hE(this)
this.Eu()
this.a2()},
c4_(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a2<1>")
t=new C.a2(v,new B.dPw(q),u).gM(0)
s=new C.a2(v,new B.dPx(),u).gM(0)
r=new C.a2(v,w.gcP1(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dPy(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Eu()
if(A.o.F(q.w,10)===0){w=q.f
$.agP()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agP()[q.f].c.$1(q.d)){w.L(0,q.f)
B.Bd("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dPz())
q.Eu()
w=q.c
w.toString
w=C.Wz(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.agP()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mc,p,p,p,p,p,p,p,p,p,p))}},
afz(){var w=0,v=C.j(x.H),u=this,t
var $async$afz=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dPm(u),t,null,!0,!0,x.H),$async$afz)
case 2:return C.h(null,v)}})
return C.i($async$afz,v)},
aXs(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hp(new C.a6(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aXr(d,e,f,g){return this.aXs(d,e,f,g,null)},
apx(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.eb,new C.dm(1,A.ci,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
adT(){var w=0,v=C.j(x.H),u=this,t
var $async$adT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).c6(C.e6(new B.dPi(u),!1,null,x.H)),$async$adT)
case 2:t=u.e.gbe()
if(t!=null)t.bcU()
if(u.c!=null)u.m(new B.dPj())
u.Eu()
return C.h(null,v)}})
return C.i($async$adT,v)},
bCX(){var w,v,u,t,s=null,r=this.f
$.agP()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bo:A.ay
u=C.m(9)
t=C.I(D.Ei,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.w7,s,s,s),s,s,s),A.f,s,D.aY_,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
agF(){var w=0,v=C.j(x.H),u=this,t
var $async$agF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.mT,null,new B.dPv(u),t,!0,!0,!0,A.lm,!1,!1,x.H),$async$agF)
case 2:return C.h(null,v)}})
return C.i($async$agF,v)},
c40(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bJI,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dPB(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b2C,A.f,r,r,new C.o(A.bm,r,C.I(A.aV.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.flp,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.hi,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.aw2(s.gc9E(),r),A.rt,s.aXr(A.xN,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dPC(s,d)),s.aXs(A.lb,"Challenges",A.aM,s.gcqt(),s.bCX()),s.aXr(A.N0,"How to play",A.aV,new B.dPD(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.an,C.A(C.a([s.apx(A.pK,"Circuits",A.by,s.gcjt()),A.bp,s.apx(A.qT,"Repair",A.aM,new B.dPE(s)),A.bp,s.apx(D.xO,"Clear",A.cj,new B.dPF(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Ei,r,new C.bP(A.Y,A.Y,new C.aA(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.btT,r,r,r)},
B(d){var w=this,v=null
$.aqC="tech"
return C.c8(v,A.bX,C.bm(!0,C.v(C.a([w.c40(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fYS(w.d,w.e,w.gc3Z(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.aw2.prototype={
T(){return new B.b7p(null,null)}}
B.b7p.prototype={
gavJ(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavJ().q()
this.br8()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hp(new C.a6(42,42,C.c6(this.gavJ(),new B.czj(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b7o.prototype={
a5(d,e){var w,v,u,t=null,s=e.ef(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=C.M()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=G.mt
d.ai(s,r+2+o*2,w)
w=C.M()
w.sau(D.e9G.aw(0,C.bU(s,r)))
d.ai(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.sau(new C.fS(A.A,0,6.283185307179586,A.x,D.cJS,t,new C.mg(p)).aw(0,C.bU(s,r)))
d.ai(s,r,v)
p=new B.czi(d)
p.$3(s.ad(0,A.rk),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e_S),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e1I),2.6,0.5+0.5*Math.cos(q))
u=C.ii(t,t,t,t,D.eRO,A.a5,A.ch,t,A.eq,A.cd)
u.eP()
u.a5(d,s.ad(0,new C.u(-u.b.c/2,5)))},
aq(d){return d.b!==this.b}}
B.awl.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.awm.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bpS()}}
B.aIj.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvh.prototype={}
B.fJ.prototype={}
B.IJ.prototype={
a4(){return"ScreenStyle."+this.b}}
B.m_.prototype={}
B.TV.prototype={
T(){return new B.bhN(null,null)}}
B.bhN.prototype={
ga8h(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nP,null,1,null,v)
w.cq(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga8h().q()
this.bsZ()},
gR9(){var w=this.ga8h().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lS.h(0,this.a.c)
if(v==null)v=D.aLi
return C.c8(w,R.KP,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.z7?this.bF5(v):this.cgm(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mp,w,w,w,new B.dLj(d),w,w,w,C.nr(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eTp,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c41(d){var w
A:{if(D.I7===d){w=0.46153846153846156
break A}if(D.un===d){w=0.45
break A}if(D.w_===d){w=0.9259259259259258
break A}if(D.RU===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cgm(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.I7
A:{if(D.I7===p){w=44
break A}if(D.un===p){w=30
break A}if(D.w_===p){w=22
break A}if(D.RU===p){w=26
break A}w=14
break A}v=C.c6(this.ga8h(),new B.dLi(this,w,d,o),q)
if(p===D.a5r)v=new C.CY(D.buu,v,q)
p=this.c41(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A2.Fh,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a7(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.boe,new C.Q(u,u,u,u),q,q,q),q)},
b4q(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bw(this.gR9()*0.4),0,100),q=d.b===D.I7,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dh(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rA,t,t,t),A.b4],x.p)
for(w=0;w<4;++w){v=new C.aV(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.buc,t,t,t,3))}n.push(A.d8)
n.push(D.feq)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bH(A.a3,t,t,C.Dp(A.A,C.p(t,t,A.f,t,t,new C.o(A.b8,t,t,C.m(2),t,t,A.n),t,t,t,A2.Fh,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.q6)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f5T,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
atG(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d59,new C.a7(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.eXO,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dLe(this,d),v,v,v,v,v,v,!1,A.a8)},
bVQ(d,e){return this.atG(d,e,!0)},
bVz(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.RU||n===D.w_,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kF,0.5)
l.toString
l=C.a([k,A.dv,l],x.O)
k=p.b4q(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b2,A.q,1)
w=C.aE(o,C.p(o,C.bv(C.m(23),C.b3(o,o,o,new B.adE(0,p.gR9(),o),A.f0),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hJ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dLc(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.jY[s]
t.push(new C.cp(A.A,o,o,p.bVQ(r,m?58:54),o))}k=C.a([k,A.an,w,A.ac,C.D(C.lU(0.92,t,v,8,12,A7.vb,o,!1),1)],u)
if(n!==D.a5r){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dc(F.jY,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bW(v,v.gM(0),t.k("bW<aj.E>")),t=t.k("aj.E");v.C();){q=v.d
u.push(p.atG(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pT,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bp3,U.ahC,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a7(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
byC(d,e){var w=null
return C.p(w,C.v(C.a([this.b4q(d),C.D(C.b3(w,w,w,new B.adE(e,this.gR9(),w),A.f0),1),C.aE(w,C.p(w,C.av(C.d(F.jY[e].a,w,w,w,w,w,w,A_.Ix,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dL7(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bF5(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8h(),new B.dLa(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a7(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.btO,new C.Q(8,8,8,s),t,t,t),t)}}
B.btm.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.X()
w=C.M()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kF,0.4)
t.toString
w.sau(new C.a7(A.ax,A.aC,A.x,C.a([u,A.dv,t],x.O),null,null).aw(0,new C.aa(0,0,n,m)))
d.aY(new C.aa(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dj0
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aq(d){return!0}}
B.adE.prototype={
a5(d,e){return E.aOO(d,e,this.b,this.c)},
aq(d){return!0}}
B.aK5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aV2.prototype={}
B.UJ.prototype={
T(){return new B.bim(C.V(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bim.prototype={
gvc(){var w=this.f
return w===$?this.f=B.fUs(0):w},
a_(){this.a1()
this.l9()
B.z5("laser_maze").bz(new B.e5C(this),x.P)},
lq(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.y(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e5D())},
acZ(d){var w=this
w.m(new B.e5s(w,d))
B.vE("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c4h(d){var w,v,u,t,s,r,q,p,o=this
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
if(o.gvc().b.t(0,p)||p===o.gvc().e||o.gvc().d.ah(0,p))return
o.m(new B.e5t(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cn(new B.e5w(t,B.hiD(t.gvc(),t.r))),q=x.p,p=C.a([new B.dz("Clear mirrors",!1,new B.e5x(t),A.jW,A.aM,s),new B.dz("Skip",!1,new B.e5y(t),D.bCx,A.aV,s)],q)
if(t.d>0)p.push(new B.dz("Back",!1,new B.e5z(t),D.bCy,A.aV,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dz(""+u,v===t.d,new B.e5A(t,v),s,A.ay,s))}return B.jF(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eM(p,s,s),new B.eM(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bfm.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gee()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dey(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bA(new C.aa(a5,a6,a8,a4),A.kq)
v=$.X()
u=C.M()
u.r=M.mU.gp(0)
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
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.eb(a8,a8.r,C.a4(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bA(C.cu(p,u,u),A.he)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.bUx.aw(0,C.cu(p,a3,a3)))
q=o.H()
w.drawRRect(C.ep(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aQ(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gK(a8)).a,a7.$1(A.d.gK(a8)).b))
for(a8=C.dc(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bW(a8,a8.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E");a8.C();){s=a8.d
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
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lj
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=4
a8.e=A.fz
a8.r=D.acV.gp(0)
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=1.6
a8.e=A.fz
a8.r=A.c.gp(0)
a9.aO(n,a8)}for(a8=a4.c,a8=C.eb(a8,a8.r,C.a4(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.C2
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new C.ko(new C.eo("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.ch,new C.jo(1),a2,a2,a2,a2,A.cd,a2)
i.eP()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.deB(a7,a3,a9)
a1.c.bI(0,new B.dez(g))
a4.d.bI(0,new B.deA(g))
f=a7.$1(a4.e)
a4=C.bA(C.cu(f,o,a3*0.8),A.he)
a8=C.M()
a8.r=A.ay.gp(0)
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
B.UL.prototype={
T(){var w=x.n
return new B.aCA(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCA.prototype={
a_(){this.a1()
this.l9()
B.z5("light_mixer").bz(new B.e5V(this),x.P)},
lq(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aXx()
w.m(new B.e5W())},
avN(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aA(5)/4)
u.e=t
if(A.d.d9(t,new B.e5G()))u.e[w.aA(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aXx(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.he1(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vH(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vE("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcvo(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cLL[A.o.F(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cn(new B.e5P(v,B.he1(v.e,t))),r=t[0]
r=B.hy(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e5Q(v),r)
w=t[1]
w=B.hy(A.bo,""+A.k.V(w*100)+"%","Green",1,0,new B.e5R(v),w)
t=t[2]
return B.jF(A.b7,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hy(A.d6,""+A.k.V(t*100)+"%","Blue",1,0,new B.e5S(v),t),new C.bH(A.a7,u,u,new B.fg(A.hy,"Lock it in",new B.e5T(v),A.b8,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bfB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bA(new C.aa(0,0,n,m),A.q3)
$.X()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.bz(w.save())
w.clipRRect(C.ep(C.bA(new C.aa(0,0,n,m),A.q3)),$.pj(),!0)
v=e.gee()*0.3
u=e.ef(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.E0,I.ac1,I.aco]
d.l7(new C.aa(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nu
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bA(new C.aa(0,0,n,m),A.q3)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b2.gp(0)
d.aD(n,m)},
aq(d){return!0}}
B.aKx.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvm.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bts()}}
B.aKy.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvn.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btt()}}
B.bsb.prototype={}
B.a7q.prototype={
B(d){var w=null
return C.c8(C.eF(w,w,w,!0,!0,D.ad7,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.am8,w,w,w,new B.cdo(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.ftJ,w,w,w,1,w,!0),D.ad7,C.cB(C.a([D.e2Y,C.cn(new B.cdp())],x.p),w,D.bq3,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VC.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDr(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDr.prototype={
a_(){this.a1()
this.l9()},
b2u(d){var w=this.d.length
return A.o.F(A.k.bw(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lq(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b2u(v.f)
if(w!==v.x){v.x=w
B.lb("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eEO(v))
B.Bd("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c5e(){if(this.d.length<2)return
this.m(new B.eEK(this))},
aXT(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eEJ(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc5d(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new B.bty(p,s.f,r),A.f0),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a6(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f43,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.avF[A.o.F(v,8)].j(0.9)
t=new C.aV(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f3k,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eEM(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jF(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eM(o,r,r),C.A(C.a([C.D(C.aL(r,A.T,!1,r,!0,A.r,r,C.aM(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kw,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eEN(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dl,!0,A.a5,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hx,"Add",s.gc5b(s),A.c,r),A.bp,new B.fg(A.mj,"Spin",q,A.b8,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.bty.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=C.M()
w.r=D.b84.gp(0)
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
n.r=D.avF[A.o.F(q,8)].gp(0)
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
J.bz(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.ko(new C.eo(o,i,i,A.cO,i,i,i,i,i,i,D.eSB),A.a5,A.ch,new C.jo(1),i,i,i,i,A.cd,i)
k.eP()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.M()
f.r=D.acM.gp(0)
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
j.E(new C.bF())
e=C.M()
e.r=A.c.gp(0)
a1.aO(j,e)
e=C.M()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aO(j,e)},
aq(d){return!0}}
B.Uk.prototype={
T(){return new B.bhW($,A.bx,0,C.a([],x.X),null,null)}}
B.bhW.prototype={
a_(){this.a1()
this.l9()},
lq(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bd("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4c(900,new B.dRB())}w.m(new B.dRC())},
aXV(d){return this.m(new B.dRw(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.F(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bop(l,A.cj,n),A.aMw)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eWO,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a6(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eVT,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CU,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d2r[r]
u.push(new B.dz(""+q+" min",o.d===q,new B.dRy(o,q),n,A.cj,n))}m=o.f
p=m?A1.xX:A.iT
m=m?"Pause":"Start"
return B.jF(A.cj,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eM(u,n,n),new B.eM(C.a([new B.fg(p,m,new B.dRz(o),A.b8,n),new B.fg(A.jW,"Reset",new B.dRA(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bop.prototype={
a5(d,e){var w,v,u,t,s=e.ef(A.J),r=e.a/2-14
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
d.f4(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.Tw.prototype={
T(){return new B.bhy($,A.bx,0,C.a([],x.X),null,null)}}
B.bhy.prototype={
a_(){this.a1()
this.l9()},
lq(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Qp.h(0,p.d)
w.toString
v=A.d.fF(w,new B.dCr())
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
B.lb("flute",D.bV8[t]+5,1400,0.35)}p.m(new B.dCs())},
gc5h(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JA("Press Start",0.5)
w=D.Qp.h(0,this.d)
w.toString
v=A.d.fF(w,new B.dCm())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JA("Breathe in",0.5+0.5*A.dB.av(0,p))
case 1:return new C.JA("Hold",1)
case 2:return new C.JA("Breathe out",1-0.5*A.dB.av(0,p))
default:return new C.JA("Hold",0.5)}}}return new C.JA("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc5h(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.D6,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kw,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a6(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aW(D.Qp.geh(D.Qp));w.C();){v=w.gU(w)
o.push(new B.dz(v,r.d===v,new B.dCp(r,v),q,A.hv,q))}w=r.e
v=w?A.a_z:A.iT
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dCq(r),A.b8,q))
return B.jF(A.hv,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eM(o,q,q))}}
B.aGO.prototype={}
B.Ub.prototype={
T(){return new B.bhQ(new C.cq(null,x.A),C.a([],x.au),A.aB,A.c)}}
B.bhQ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mq,s,s,s,new B.dOS(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.m(18),new C.es(C.aE(s,C.b3(s,s,s,new B.bjS(t.e,t.x,s),A.f0),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dOT(t),new B.dOU(t),s,s,s,s,s,s,s,s,s,new B.dOV(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cL9[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EO(v,u,new B.dOW(t,v),!1,s))}u=t.r
return B.jF(A.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bS,p,s),"DRAW PAD",C.v(C.a([new B.eM(o,s,s),B.hy(A.bz,""+A.k.V(u),"Brush",30,2,new B.dOX(t),u),new B.eM(C.a([new B.dz("Eraser",t.w,new B.dOY(t),A.FC,A.bz,s),new B.fg(A.r0,"Undo",new B.dOZ(t),A.c,s),new B.fg(A.e4,"Clear",new B.dP_(t),A.c,s),new B.fg(A.MX,"Paper",new B.dP0(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bjS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
if(m.length===1){q=A.d.gK(m)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aQ(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gK(m).a,A.d.gK(m).b))
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
u.drawPath((q==null?k.e=new C.cF(k.gbJ().a.snapshot()):q).a,l)
l.delete()}}},
aq(d){return!0}}
B.UX.prototype={
T(){var w=x.S
return new B.aCK(C.aX(w),C.aX(w))}}
B.aCK.prototype={
a_(){this.a1()
this.ar_()},
ar_(){var w,v,u=this,t=x.N,s=C.bl(D.d6Q,!0,t)
A.d.Cp(s)
w=x.S
v=C.T(s).c
t=C.B(C.dc(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dc(s,0,C.dJ(u.d,"count",w),v))
A.d.Cp(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c5c(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lb("bell",12+A.o.F(d,9),150,0.35)
s.m(new B.ebh(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gK(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n0,new B.ebi(s,v,u),t)
else{s.x=!0
C.bN(Ac.EV,new B.ebj(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a6X,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xn,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hM,A.j,0,q,q),q),C.D(C.ic(!0,q,q,A.y,new C.hJ(v,8,8,1,q),new B.ebn(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cMz[t]
o.push(new B.dz(s.b,r.d===s.a,new B.ebo(r,s),q,A.aV,q))}o.push(new B.fg(D.bCv,"New game",new B.ebp(r),A.b8,q))
return B.jF(A.aV,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eM(o,q,q))}}
B.Va.prototype={
T(){return new B.aD5(C.a([],x.t))}}
B.aD5.prototype={
c5g(d){A.d.a9(this.d)
this.w=!0
this.aXU()},
aXU(){this.d.push(A.cI.aA(4))
this.e=0
this.Z8()},
Z8(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z8=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.elO(t))
s=x.H
w=3
return C.b(C.bN(A.lG,null,s),$async$Z8)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRj(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Z8)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.elP(t))
case 1:return C.h(u,v)}})
return C.i($async$Z8,v)},
aRj(d){this.m(new B.elM(this,d))
B.lb("marimba",D.anI[d]+5,450,0.55)
C.bN(A.ET,new B.elN(this),x.H)},
c5i(d){var w,v,u=this
if(!u.w||u.r)return
u.aRj(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.elQ(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.elR(u))
C.bN(A.i9,new B.elS(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,L.T4,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f4r,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.auB[v]
u=u.j(q.f===v?1:0.35)
t=new C.aV(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.auB[v].j(0.8),A.J,30)],w):p
r=new C.aA(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dg(p,p,p,p,A.bc,new C.o(u,p,new C.bP(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.ja,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.elT(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.an,n,A.d5,new C.fG(1,C.lU(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jF(A.cn,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eM(C.a([new B.fg(A.iT,n,q.gc5f(q),A.b8,p)],m),p,p))}}
B.Vv.prototype={
T(){return new B.bj3(new C.ar(A.as,$.aw()))}}
B.bj3.prototype={
auw(d){return C.oy(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eA5(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d4(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eAe()
l=C.aL(m,A.T,!1,m,!0,A.r,m,C.aM(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Aa.wv),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aWp),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lp,"Bill amount",!0,!0,!1,m,m,m,m,D.f20,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.eAa(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aNY,!0,A.a5,m,A.am,m,m,m,m)
k=A.b8.j(0.1)
s=C.m(20)
r=C.I(A.b8.j(0.35),A.q,1)
q=x.p
s=C.cB(C.a([l,A.bw,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auw(w)),t.$2("Total","$"+n.auw(v)),R.X9,t.$3$big("Each of "+n.f+" pays","$"+n.auw(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bW,m,m,m)],q),m,A.fy,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cxz[p]
r.push(new B.dz(""+o+"%",A.k.V(n.e)===o,new B.eAb(n,o),m,A.b8,m))}l=n.f
return B.jF(A.b8,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eM(r,"TIP",m),B.hy(A.aV,""+l,"People",20,1,new B.eAc(n),l),new B.eM(C.a([new B.dz("Round up",n.r,new B.eAd(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.UV.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bix(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bix.prototype={
a_(){this.a1()
this.l9()},
lq(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t
B.a7p("snare",0.5)}u.m(new B.e9X())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
B.lb("bell",24,400,0.5)}u.m(new B.e9Y())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbz(v,o.r>0,n))}u=C.aE(n,C.av(C.c_(A.fQ,m,A.bs,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e9Q(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d9,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.ea(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f1g,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.e9K,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e9R(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eS5,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kw,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e9S(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d_X[r]
v.push(new B.dz(q.b,o.d===q.a,new B.e9T(o,q),q.c,A.by,n))}v=C.a([new B.eM(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hy(A.by,""+s,"Dice",4,1,new B.e9U(o),s))}if(o.d==="num"){s=o.z
s=B.hy(A.by,""+s,"From",100,1,new B.e9V(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hy(A.by,""+p,"To",1000,2,new B.e9W(o),p)],m))}return B.jF(A.by,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbz.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cv,14)],x.V)
t=C.a([],x.p)
for(s=D.dhM.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bH(s[q],p,p,C.p(p,p,A.f,p,p,K.aa_,p,18,p,p,p,p,p,18),p))
return C.eC(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
B.aJT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvd.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsM()}}
B.aKb.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvi.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt5()}}
B.aKG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvs.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btB()}}
B.aL9.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvE.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bu4()}}
B.b5d.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aCo.h(0,t)
$.aqC=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,T.nd,u,u,u,new B.cqb(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.W(A.N0,s,u,u,u,22),u,u,u,new B.cqc(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bt4,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.Ei,u,new C.bP(new C.aA(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EX,u,u,1/0))
return C.c8(u,A.bX,C.bm(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dz.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aR,s,s,s,16),A.eb],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.ts,C.aE(s,C.dg(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cq7(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eM.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a6(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.C(A.cH,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.aus.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.au1(d).cFL(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a9b(C.kT(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a6(s,34,C.A(C.a([new C.a6(78,s,r,s),q,new C.a6(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A_.Ix,A.dL,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.ts,C.aF(!1,A.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Aj.XC,C.A(C.a([C.W(w.c,u,v,v,v,17),A.eb,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cq6(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.EO.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eQA:u
w=t?A.c:A.b2
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dg(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hX,u,r,D.afJ,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cqd(v),u,u,u,u,u,u,!1,A.a8)}}
B.mv.prototype={
a4c(d,e){var w=C.df()
w.seC(C.cM(C.dC(0,0,0,d,0,0),new B.cq8(this,w,e)))
this.fk$.push(w.bd())},
l9(){var w=this,v=w.qf(new B.cqa(w))
v.j0(0)
w.fj$!==$&&C.aO()
w.fj$=v}}
B.aa9.prototype={
bwb(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gU(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gU(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bzp()
g.ay!==$&&C.aO()
g.ay=w},
bzp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
F7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaa.prototype={
cBN(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.F7(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uP.prototype={}
B.Ov.prototype={}
B.xG.prototype={}
B.Ou.prototype={
fg(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.anE[w.aA(7)]
w=w.h8()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
B.lb(u,v+w-12,2200,0.1)}}
B.Ur.prototype={
T(){var w=$.aw()
return new B.aC6(new C.cq(null,x.A),new C.ar(A.as,w),new B.Ou(A.cI),D.d1U,A.au,D.a21,$,A.bx,0,C.a([],x.X),null,null)}}
B.aC6.prototype={
a_(){var w,v=this
v.a1()
v.l9()
v.a.toString
w=$.h73
if(w==null)w=$.h73=B.csI()
w.bz(new B.dUj(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.btd()},
cpE(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dTM(p[n]).$0())
w.push(q)}this.w=w},
gVo(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asa(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awg(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asa(d.x,d.w,105/Math.max(w,3))
C.eR()
B.lb("bell",(A.d.cJ(D.a1D,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lq(d){var w,v,u,t,s,r,q,p=this
p.f.fg(0,d,p.db)
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
c5X(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVo()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVo()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cBN((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c5W(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dTK(w))
return}w.m(new B.dTL(w,v,A.a.i(d).toLowerCase()))},
bM_(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dTI(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bF9,n,n,n,o.gbLZ(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mq,n,n,n,new B.dU4(o,d),n,n,n,n,"Share",n)],l),j=C.cn(new B.dU5(o,m)),i=A.c.j(0.06)
i=C.a([C.aL(n,A.T,!1,n,!0,A.r,n,C.aM(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.D1,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bN9,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc5V(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iF,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dz(s.a,!1,new B.dU6(o,s),A.nb,A.aV,n))}i.push(new C.C(A.ia,new C.a6(n,38,C.cB(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.an)
w=C.a([new B.dz("Whole Earth",!1,new B.dUa(o),A.hj,A.aV,n)],l)
for(v=D.aCn.gdL(D.aCn),v=v.gaf(v);v.C();){u=v.gU(v)
w.push(new B.dz(u.a,!1,new B.dUb(o,u),n,A.aV,n))}w.push(new B.dz("Random",!1,new B.dUc(o),A.mj,A.aV,n))
i.push(new B.eM(w,"GO TO",n))
w=o.z
i.push(B.hy(A.aV,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dUd(o),w))
w=o.dy
i.push(B.hy(A.cn,A.a.aT(A.o.u(A.k.bw(w)),2,"0")+":00","Time",24,0,new B.dUe(o),w))
w=o.fr
i.push(B.hy(A.b8,o.cor(),"Season",365,0,new B.dUf(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lL:D.FT
i.push(new B.eM(C.a([new B.dz("Spin",w,new B.dUg(o),D.bAo,A.aV,n),new B.dz("Night",v,new B.dUh(o),A.vk,A.aV,n),new B.dz("Borders",u,new B.dU7(o),D.bAs,A.aV,n),new B.dz("Names",r,new B.dU8(o),Z.N4,A.aV,n),new B.dz("Music",q,new B.dU9(o),p,A.aV,n)],l),n,n))
return B.jF(A.aV,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cor(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.avf[u])v=u
return A.ib[v]+" "+(A.k.bw(w-D.avf[v])+1)},
c5U(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mJ(1,A.o.F((A.d.cJ(D.a1D,t)+1)*47,360),0.55,1).iG()
r=new B.dTG()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.du,j,j,j),1),C.aH(j,j,j,j,A.Ga,j,j,j,new B.dTF(this),j,j,j,j,j,A.c7)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hp,j,j,j)
m=D.dgu.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fnO(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gh(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gh(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fnO(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.Vj,j,p,q,j,j,A.n),j,j,j,j,D.agg,j,j,j)}}
B.bdO.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=C.M()
d7.r=D.Ac.gp(0)
d8.aY(new C.aa(0,0,0+d4,0+d5),d7)
w=new C.eP()
w.dG(4)
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
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.aV.j(0.35),A.K],t),D.cO4,d3).aw(0,C.bU(p,o*1.1)))
d8.ai(p,o*1.05,u)
n=C.bU(p,o)
u=C.M()
u.sau(D.e9O.aw(0,n))
d8.ai(p,o,u)
J.bz(d7.save())
u=x.v
d6=new C.aQ(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kt(n))
d8.rj(0,d6)
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
f=new B.daj(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbJ().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cF(d.gbJ().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbJ().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cF(d.gbJ().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cJ(D.a1D,a7.c)+1)*47,360)
$.X()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mJ(1,a9,a3,a8?1:0.62).iG().gp(0)
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
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbJ().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbJ().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.X()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rb
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbJ().a.snapshot()):s).a,q)
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
c9=B.hFP(a7.a,a3,b2)
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
$.X()
u=C.M()
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b5W.j(0.78)],t),D.d2g,d3).aw(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ai(p,o,u)}$.X()
d4=C.M()
d4.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.de2,d3).aw(0,n))
d8.ai(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.hi.j(0.5).gp(0)
d8.ai(p,o,d7)},
aq(d){return!0}}
B.aKh.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aKi.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btc()}}
B.bs6.prototype={}
B.Vy.prototype={
T(){return new B.bj7()}}
B.bj7.prototype={
gaQT(){var w=this.d
if(w===$)w=this.d=A.cI.aA(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.Ac,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.am8,w,w,w,new B.eAZ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fnz,w,w,w,1,w,!0),u=C.m(18),t=A.aV.j(0.1),s=C.I(A.aV.j(0.35),A.q,1),r=x.p
return C.c8(v,D.Ac,C.cB(C.a([C.p(w,C.A(C.a([D.bDT,A.av,C.D(C.d(D.cRO[this.gaQT()],w,w,w,w,w,w,D.a7g,w,w,w),1),C.aH(w,w,w,w,D.bO9,w,w,w,new B.eB_(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,C.cn(new B.eB0())],r),w,A.XM,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vj.prototype={
T(){return B.hGg()}}
B.biU.prototype={
cgn(d){var w=d.c,v=B.hGi(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.l9()},
lq(d){var w,v,u,t=this
t.e.fg(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cgn(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lc(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc5Y(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c61(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BU[s]
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
aYf(d){this.m(new B.et1(this,d))
C.eR()
B.lb("bell",D.ded[A.o.F(A.d.cJ(D.BU,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mq,m,m,m,new B.etc(n,d),m,m,m,m,"Share",m)],k),i=C.cn(new B.etd(n,l)),h=C.a([new B.dz("All",!1,new B.ete(n),A.a_I,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BU[w]
h.push(new B.dz(v.a,n.z===v,new B.etf(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hy(A.aM,s,"Time",1,0,new B.etg(n),u/t)
u=n.w
u=B.hy(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.eth(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lL:D.FT
return B.jF(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eM(h,"GO TO",m),t,u,new B.eM(C.a([new B.dz("Orbits",s,new B.eti(n),m,A.aM,m),new B.dz("Names",r,new B.etj(n),m,A.aM,m),new B.dz("Asteroids",q,new B.etk(n),m,A.aM,m),new B.dz("Music",p,new B.etl(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c5Z(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.et_(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kX,r,r,r),1),C.aH(r,r,r,r,A.Ga,r,r,r,new B.esZ(this),r,r,r,r,r,A.c7)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.D3,r,r,r)
v=n.$2("WIDTH",B.Gh(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gh(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.et0().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.P,p,A.P,v,A.P,s,A.P,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Vj,r,l,m,r,r,A.n),r,r,r,r,D.agg,r,r,r)}}
B.bqb.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.Ac.gp(0)
a7.aY(new C.aa(0,0,0+a5,0+a6),w)
v=new C.eP()
v.dG(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc5Y()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.BU),t=new C.fm(a6,new B.eVb()),s=o.a,r=o.b;t.C();){q=a6.gU(0).c
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
p.delete()}i=B.hGh(A.d.gK(D.BU))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.sau(new C.bR(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.ai(o,a6,t)
t=C.M()
t.sau(D.e9I.aw(0,C.bU(o,i)))
a7.ai(o,i,t)
if(a5.at){h=B.h8G("Sun",10.5,A.ad)
h.a5(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.BU),t=new C.fm(a6,new B.eVc()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gU(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.bz(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cu(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bK.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c4(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rb
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sau(new C.bR(P.ql,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1f,a4).aw(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cWL[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h8G(d,10.5,A.ad)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.Us.prototype={
T(){var w=x.i
return new B.aC7(new B.Ou(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC7.prototype={
csQ(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c60(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dZz
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
s.m(new B.dUn())},
a_(){this.a1()
this.l9()},
lq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fg(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yu[r]
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
break}}}if(A.d.d9(s,new B.dUQ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gal(v).aC(0,i.cx).gco()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gco()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bKi()
else n=n==="weight"?p.cA4():p.bCz()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dbo[u]
v.push(new B.dz(t.b,p.d===t.a,new B.dUC(p,t),t.c,A.ct,o))}v=C.a([new B.eM(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dz("Hammer",!s,new B.dUD(p),Ah.FO,A.ct,o),new B.dz("Feather",s,new B.dUE(p),Z.MF,A.ct,o),new B.dz(q,r,new B.dUI(p),A.FD,A.aV,o)],w)
q=p.w
A.d.v(v,C.a([new B.eM(r,o,o),B.hy(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dUJ(p),q),new B.eM(C.a([new B.fg(A.qS,"Drop!",new B.dUK(p),A.b8,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hy(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dUL(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hy(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dUM(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hy(A.ct,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dUN(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hy(A.ct,A.k.aa(r,1)+"x out","View",8,0.5,new B.dUO(p),r),new B.eM(C.a([new B.fg(A.nc,"Fire!",p.gc6_(),A.b8,o),new B.fg(A.qS,"Falls",new B.dUP(p),A.c,o),new B.fg(A.qR,"Orbit 7.7",new B.dUF(p),A.c,o),new B.fg(D.bDi,"Oval 9",new B.dUG(p),A.c,o),new B.fg(A.Bn,"Escape",new B.dUH(p),A.c,o)],w),o,o)],w))}return B.jF(A.ct,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bKi(){return new C.C(D.bo6,C.cn(new B.dUm(this)),null)},
cA4(){var w,v,u,t=null,s=[D.exC,D.eyZ,D.ez6,D.ezp,D.ez4,D.ezu,D.ey9,D.ezQ,D.eyK],r=x.p,q=C.a([D.fbN,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cH,new C.cl(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a6(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bi,new C.AS(new B.dUo(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fe_)
return C.cB(q,t,A.iR,t,t,A.ah,!1)},
bCz(){return C.cn(new B.dUk(this))}}
B.b92.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=C.M()
e.r=D.Ac.gp(0)
d.aY(new C.aa(0,0,0+h,0+g),e)
w=new C.eP()
w.dG(2)
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
e.sau(new C.bR(A.A,0.5,A.x,i,0,C.a([A.K,A.aV.j(0.35),A.K],x.O),D.d38,i).aw(0,C.bU(g,p*1.1)))
d.ai(g,p*1.06,e)
e=C.M()
e.sau(D.e9C.aw(0,C.bU(g,p)))
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
n.E(new C.bF())
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
m.E(new C.b5(f+A.d.gK(u).a*h,t+A.d.gK(u).b*h))
for(u=C.dc(u,1,i,C.T(u).c),s=u.$ti,u=new C.bW(u,u.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");u.C();){r=u.d
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
f.r=A.ct.j(0.9).gp(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mt
d.ai(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.ai(k,4,h)}},
aq(d){return!0}}
B.Vb.prototype={
T(){return new B.biR(new C.cq(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.biR.prototype={
a_(){this.a1()
this.l9()},
lq(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Pj[l.e],i=D.Pj[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mq,k,k,k,new B.elW(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.bpK(f,g,v,k),A.f0),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gh(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i3,A.L,k,k)
o=B.Gh(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.SN,A.L,k,k),A.bA,C.d(p+": "+B.Gh(w*2)+" km wide. "+r+": "+B.Gh(h*2)+" km wide.",k,k,k,k,k,k,A5.SW,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bqd,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Pj[m]
r.push(new B.dz(w.a,l.e===m,new B.elX(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Pj[m]
w.push(new B.dz(s.a,l.f===m,new B.elY(l,m),k,C.b0(s.c),k))}return B.jF(A.bV,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.es(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eM(r,"FIRST",k),new B.eM(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bpK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=C.M()
w.r=D.VY.gp(0)
d.aY(new C.aa(0,0,0+h,0+g),w)
v=new C.eP()
v.dG(6)
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
w=new B.eTk(d)
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
k=C.ii(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eYz,s.a),A.a5,A.ch,i,A.eq,A.cd)
k.eP()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a5(d,l.ad(0,new C.u(-w/2,h)))
j=C.ii(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.f0S,t.a),A.a5,A.ch,i,A.eq,A.cd)
j.eP()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
aq(d){return!0}}
B.aKj.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvk.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bte()}}
B.aKS.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvy.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btN()}}
B.aKV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvA.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btQ()}}
B.OX.prototype={}
B.Tu.prototype={
T(){return B.hGe()}}
B.bhx.prototype={
a_(){this.a1()
this.l9()},
lq(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fg(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new B.dBT())},
aYg(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb5Z()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gco()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.OX(t,u,1.2,new C.wS(1,30+A.cI.aj()*40,0.9,0.7).iG()))
B.lb("bell",60+A.k.V(12-u)*2,400,0.35)},
gb5Z(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dBH(),C.T(m).k("K<1,N>")).fF(0,A.wB),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mq,n,n,n,new B.dBI(o,d),n,n,n,n,"Share",n)],m)
v=C.cn(new B.dBJ(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fnO(s)+" Suns"
t=B.hy(A.by,s,"Mass",1,0,new B.dBL(o),u/t)
u=C.a([new B.dz("Star (10)",!1,new B.dBM(o),n,A.by,n),new B.dz("Cygnus X-1 (21)",!1,new B.dBN(o),n,A.by,n),new B.dz("Milky Way core (4 million)",!1,new B.dBO(o),n,A.by,n),new B.dz("M87 (6.5 billion)",!1,new B.dBP(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lL:D.FT
return B.jF(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eM(u,"LIKE",n),new B.eM(C.a([new B.dz("Glowing ring",s,new B.dBQ(o),n,A.by,n),new B.dz("Bent light",r,new B.dBR(o),n,A.by,n),new B.dz("Music",q,new B.dBS(o),p,A.by,n),new B.fg(A.jW,"Clear",new B.dBK(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adG(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eUz,w,w,w),A.bA,C.d(e,w,2,w,w,w,w,M.zi,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b8r.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=C.M()
w.r=D.bdE.gp(0)
b2.aY(new C.aa(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb5Z()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=T.Qu
b2.ai(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wT,A.fC,d)
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
b1.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cJk,null).aw(0,C.bU(u,b0)))
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
o.z=G.mt
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.adQ.prototype={}
B.Uo.prototype={
T(){var w=x.r,v=x.g
return new B.bhZ(new C.cq(null,x.A),new B.Ou(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bhZ.prototype={
a_(){this.a1()
this.Zl()
this.l9()},
Zl(){var w,v,u,t,s,r,q,p,o=this,n=new C.eP()
n.dG(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adQ(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aA(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.h8()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adQ(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
csH(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e01
k.cx=D.e04
w=new C.eP()
w.dG(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adQ(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.dc(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bW(s,s.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dc(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bW(u,u.gM(0),r.k("bW<aj.E>")),r=r.k("aj.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lq(d){var w,v,u,t,s,r,q,p=this
p.e.fg(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gco())
r=t.eE(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dSV(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mq,r,r,r,new B.dSL(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdE(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ae.a6x,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cZN[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dz(u.b,o,new B.dSM(s,u),r,A.h0,r))}l.push(new B.dz("Collide",s.ch,new B.dSN(s),A.xL,A.bV,r))
o=C.a([new B.eM(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hy(A.h0,""+n,"Arms",6,2,new B.dSO(s),n)
l=s.r
A.d.v(o,C.a([n,B.hy(A.h0,A.k.aa(l,1),"Winding",6,0.8,new B.dSP(s),l)],q))}n=s.as
o.push(B.hy(A.h0,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dSQ(s),n))
n=s.ax
o.push(B.hy(A.h0,A.k.aa(n,1)+"x","Speed",4,0,new B.dSR(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lL:D.FT
o.push(new B.eM(C.a([new B.dz("Dark matter",n,new B.dSS(s),r,A.by,r),new B.dz("You are here",l,new B.dST(s),r,A.aM,r),new B.dz("Music",w,new B.dSU(s),t,A.h0,r)],q),r,r))
return B.jF(A.h0,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.es(new C.an(A.W,r,A.b_,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdE.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=C.M()
w.r=D.bfB.gp(0)
a3.aY(new C.aa(0,0,0+a1,0+a2),w)
v=new C.eP()
v.dG(3)
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
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c7d,a0).aw(0,C.bU(o,a2)))
a3.ai(o,a2,t)}m=new B.d7r(a1.as)
a2=n*0.3
t=C.M()
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.h1.j(0.85),A.aH.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
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
r=A.k.F(q,360)
l.r=new H.mJ(1,r,q>200?0.45:0.55,1).iG().j(0.35+(1-s)*0.5).gp(0)
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
f=C.ii(a0,a0,a0,a0,D.eRE,A.a5,A.ch,a0,A.eq,A.cd)
f.eP()
f.a5(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bgL.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bbO.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=C.M()
w.r=A.h1.gp(0)
a3.ai(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.io.gp(0)
a3.ai(a1,5,w)}},
aq(d){return!0}}
B.V7.prototype={
T(){return new B.biQ(new C.cq(null,x.A),new B.Ou(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.biQ.prototype={
a_(){this.a1()
this.l9()},
lq(d){var w,v,u,t=this
t.e.fg(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bw(w*4)
if(u!==A.k.bw(t.as))B.lb("bell",60+u*4,500,0.35)
t.as=u}},
gcoq(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcf_(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mq,q,q,q,new B.ela(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.es(C.b3(q,q,q,new B.bp_(r,q),A.f0),r.d),1)
if(r.f==="seasons")w=r.gcoq()
else{w=r.gcf_()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.SV,A.L,q,q),A.f,q,q,q,q,q,q,q,L.agq,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.xX:A.iT
t=r.Q
s=t?A.lL:D.FT
s=C.a([new B.eM(C.a([new B.dz("Seasons",n==="seasons",new B.elb(r),A.yb,A.bt,q),new B.dz("Moon phases",n==="moon",new B.elc(r),A.vk,A.bt,q),new B.dz(u,!1,new B.eld(r),v,A.bt,q),new B.dz("Music",t,new B.ele(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hy(A.bt,D.cZ8[A.o.F(A.k.bw(n*12),12)],"Month",1,0,new B.elf(r),n)
v=r.z
A.d.v(s,C.a([n,B.hy(A.bt,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.elg(r),v)],p))}else{p=r.w
s.push(B.hy(A.bt,""+(A.k.bw(p*29.5)+1),"Day of month",1,0,new B.elh(r),p))}p=r.y
s.push(B.hy(A.bt,A.k.aa(p,1)+"x","Speed",4,0.2,new B.eli(r),p))
return B.jF(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bp_.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=C.M()
b8.r=D.Ac.gp(0)
b9.aY(new C.aa(0,0,0+b5,0+b6),b8)
w=new C.eP()
w.dG(4)
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
t.r=A.b2.gp(0)
b9.hM(u,t)
t=C.M()
t.sau(D.e9E.aw(0,C.bU(p,34)))
b9.ai(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eE(0,p.aC(0,l).gco())
J.bz(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.bdA.gp(0)
b9.ai(A.J,k,s)
J.bz(b8.save())
b7=new C.aQ(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kt(C.bU(A.J,k)))
b9.rj(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.M()
b6.sau(D.e9N.aw(0,C.bU(A.J,s)))
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
t.r=A.cj.gp(0)
b9.bA(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.M()
b5.r=A.cj.gp(0)
b9.ai(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ii(b4,b4,b4,b4,C.dq(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aPs,b5),A.a5,A.ch,b4,A.eq,A.cd)
f.eP()
f.a5(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.M()
r.b=A.ae
r.c=1
r.r=A.b2.gp(0)
b9.ai(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.M()
r.sau(new C.bR(new C.d9(-0.5,0),1.1,A.x,b4,0,C.a([D.b9o,D.aen],x.O),D.cQN,b4).aw(0,C.bU(p,k)))
b9.ai(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b6T.gp(0)
b9.ai(a1,a2,r)
J.bz(b8.save())
b7=b7.r
r=x.v
d=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kt(C.bU(a1,a2)))
b9.rj(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bR.gp(0)
b9.aY(new C.aa(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eE(0,a1.aC(0,p).gco())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.aro[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aV.j(0.45).gp(0)
a7.z=A.jk
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b6O.gp(0)
b9.ai(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bz(b8.save())
b6=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kt(C.bU(a8,a9)))
b9.rj(0,b6)
s=s.w
b1=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aBm(new C.u(u,t+a9),b6,new C.aV(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBm(new C.u(u,b5),b6,new C.aV(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bR.gp(0)
b9.aO(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b2.gp(0)
b9.ai(a8,a9,b8)
b3=C.ii(b4,b4,b4,b4,D.eRF,A.a5,A.ch,b4,A.eq,A.cd)
b3.eP()
b3.a5(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aJQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvc.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsJ()}}
B.aKe.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvj.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt8()}}
B.aKR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvx.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btM()}}
var z=a.updateTypes(["~()","R(te)","R(a3x)","ay<~>()","R(BV)","H(te,H)","N(N,te)","R(BR)","R(Yt)","R(aat)","R(uP)","R(a2f)","R(nd)","R(a__)","R(abg)","H(H)","TA()","Uc()","Tq()","Uq()","UJ()","UL()","Tz()","V4()","Vk()","V5()","V1()","Vr()","Ty()","Vw()","R(ms)","UW()","V0()","adV(Y,H)","acP(Y,H)","~(a3<@,@>)","H(BR,BR)","n(e8)","R(adL)","R(a_G)","R(C5)","R(aaY)","R(acT)","R(aaH)","H(H,qz)","H(H,BV)","n(qz)","~(qz,ai<n>,H)","qz?(BV)","R(qz)","r(n,a_t)","R(Pd)","~(A3)","R(aaO)","N(H?)","Vy()","R(Fh)","R(ac5)","N(H)","Ud()","N(OX)","R(a9p)","Tv()","a7q()","~(Gy,n,u,w,N)","~(n,te)","UZ()","UE(Y)","MH(Y)","TV(Y,bo<N>,bo<N>)","VC()","Uk()","Tw()","Ub()","UX()","Va()","Vv()","UV()","~(n)","co(aaa)","R(aa9)","Ur()","Vj()","Us()","Tu()","Uo()","Vb()","V7()","TX()","R(OX)","~(b9)"])
B.fpY.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fgJ.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gK(d.e.split(". "))+"."},
$S:z+37}
B.fn2.prototype={
$1(d){var w
if(!this.a.L7(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fn3.prototype={
$1(d){return d.x},
$S:z+1}
B.fpV.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fpW.prototype={
$1(d){var w
if(!this.a.L7(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fpX.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e2C.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e2D.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.y(this.b,this.c))},
$S:0}
B.e2E.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.m2(v,A.dV,A.i8)}},
$S:8}
B.e2P.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e2Q.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e2L.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e2J.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e2K(w,this.b,e)))},
$S:1822}
B.e2K.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e2M.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVr().aiI(0,u[1],u[2],u[3])
u[4].bI(0,new B.e2H(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e2I(w.a,v,w.f,w.r))},
$S:0}
B.e2H.prototype={
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
B.e2I.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e2N.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVr().aju(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e2G(w.a,v,w.e,w.f))},
$S:0}
B.e2G.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e2O.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e2F(w,this.b))},
$S:0}
B.e2F.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e2T.prototype={
$0(){var w=this.a
return w.m(new B.e2S(w))},
$S:0}
B.e2S.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e2U.prototype={
$0(){var w=this.a
return w.m(new B.e2R(w))},
$S:0}
B.e2R.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e2V.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.MT()},
$S:0}
B.e2W.prototype={
$0(){return this.a.Xq(this.b)},
$S:0}
B.e2X.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.MT():w.aU8()},
$S:2}
B.e2Y.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.MT():w.aU8()},
$S:0}
B.eiB.prototype={
$2(d,e){return d+e},
$S:1823}
B.eiV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eiU(w,d))},
$S:138}
B.eiU.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eiW.prototype={
$0(){},
$S:0}
B.eiX.prototype={
$0(){},
$S:0}
B.eiD.prototype={
$0(){return this.a.m(new B.eiC(this.b,this.c))},
$S:0}
B.eiC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.eis.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.eit.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.eiu.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.eiv.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.eiw.prototype={
$1(d){return this.a.db===d},
$S:32}
B.eix.prototype={
$1(d){return this.a.db=d},
$S:29}
B.eiy.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.eiz.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:29}
B.eiA.prototype={
$0(){var w=this.a
return w.m(w.gav7())},
$S:0}
B.eiq.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
B.eir.prototype={
$1(d){return this.a.$1(!1)},
$S:135}
B.eip.prototype={
$1(d){return this.a.$1(!1)},
$S:199}
B.eiO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bfj(o,p),n)
w=this.b
v=B.bxU("WORLD",w.a,w.c)
u=B.bxU("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cj:A.b8
t=B.bxU("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.BO[o.db].d?A.cj:A.c
q=x.p
s=C.a([v,u,t,B.bxU("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bxU("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hM,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bBx(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.r5[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mm,"Again",new B.eiJ(o),A.c,p),new B.fg(A.qT,"Rebuild",new B.eiK(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.iS,"Next world",new B.eiL(o),A.b8,p))
n.push(B.hcn("Perfect landing!",w,A.b8,v))}if(o.as==="crashed")n.push(B.hcn("Crash!",o.at,A.cj,C.a([new B.fg(A.mm,"Try again",new B.eiM(o),A.b8,p),new B.fg(A.qT,"Rebuild",new B.eiN(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.r,n,p)},
$S:62}
B.eiJ.prototype={
$0(){var w=this.a
return w.m(w.gav7())},
$S:0}
B.eiK.prototype={
$0(){var w=this.a
return w.m(new B.eiG(w))},
$S:0}
B.eiG.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eiL.prototype={
$0(){var w=this.a
return w.m(new B.eiF(w))},
$S:0}
B.eiF.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eiM.prototype={
$0(){var w=this.a
return w.m(w.gav7())},
$S:0}
B.eiN.prototype={
$0(){var w=this.a
return w.m(new B.eiE(w))},
$S:0}
B.eiE.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eiP.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.eiI(v,w))},
$S:0}
B.eiI.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.eiQ.prototype={
$1(d){return this.a.y=d},
$S:9}
B.eiR.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.eiS.prototype={
$1(d){return this.a.z=d},
$S:9}
B.eiT.prototype={
$0(){var w=this.a
return w.m(new B.eiH(w))},
$S:0}
B.eiH.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dCk.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h7I
if(q==null)q=$.h7I=B.cCV()
w=3
return C.b(C.iJ(C.a([q,$.tT().be3("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kt(0,C.cO(J.q(s,1)))
q.m(new B.dCj(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:51}
B.dCj.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dBX.prototype={
$0(){return this.a.bSx(C.aU(J.q(this.b,"group")))},
$S:0}
B.dBY.prototype={
$1(d){return A.a.aT(A.o.fQ(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:320}
B.dCl.prototype={
$0(){return B.a7p("kick",0.25)},
$S:0}
B.dBZ.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dC_.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dC0.prototype={
$0(){return B.a7p("kick",0.5)},
$S:0}
B.dC1.prototype={
$0(){return E.dF(1300+this.a.R8.aA(900),"",40,0,0.2,"square")},
$S:0}
B.dC3.prototype={
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
u=w}if(u.cx!=null&&!A.d.b8(u.d.e,new B.dC2(u)))u.cx=null
u.go=0},
$S:0}
B.dC2.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.awT(d)},
$S:z+11}
B.dBU.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dBV.prototype={
$0(){var w=this.a
return w.m(w.gc1L())},
$S:0}
B.dBW.prototype={
$0(){return this.a.agl(null)},
$S:0}
B.dCa.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dCb.prototype={
$0(){return this.a.cwR(this.b.a)},
$S:0}
B.dCc.prototype={
$0(){return this.a.agl(this.b)},
$S:0}
B.dCd.prototype={
$1(d){var w=this.a
return w.m(new B.dC9(w,d))},
$S:6}
B.dC9.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dCe.prototype={
$0(){var w=this.a
return w.m(new B.dC8(w,this.b))},
$S:0}
B.dC8.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dCf.prototype={
$0(){var w=this.a
return w.m(new B.dC7(w))},
$S:0}
B.dC7.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dCg.prototype={
$0(){var w=this.a
return w.m(new B.dC6(w))},
$S:0}
B.dC6.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.JG},
$S:0}
B.dCh.prototype={
$0(){var w=this.a
return w.m(new B.dC5(w))},
$S:0}
B.dC5.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aWI()
else w.p2=null},
$S:0}
B.dCi.prototype={
$0(){var w=this.a
return w.m(new B.dC4(w))},
$S:0}
B.dC4.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bZu.prototype={
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
B.bZv.prototype={
$1(d){var w=new C.rx([],[]).pl(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
B.faZ.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:218}
B.fb_.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:218}
B.fb0.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:218}
B.fb7.prototype={
$1(d){return!J.q(d,0)},
$S:218}
B.fb8.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:218}
B.fb9.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:218}
B.dEv.prototype={
$1(d){return this.a.arQ(0)},
$S:8}
B.dE9.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hTh(),C.T(w).k("K<1,H>")).fI(0)},
$S:0}
B.dEc.prototype={
$1(d){return""+d},
$S:74}
B.dEw.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dE7.prototype={
$1(d){return this.a.arQ(this.b)},
$S:8}
B.dE8.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avC(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mp(0,d,a1.lU(0.15,0.3))
u=a1.mp(0,d,a1.lU(0.15,0.62))
t=a1.mp(0,"and",a1.lU(0.48,0.46))
s=a1.mp(0,a0,a1.lU(0.82,0.46))
a1=t.a
w.push(new B.nd(v.a,a1,0))
w.push(new B.nd(u.a,a1,1))
w.push(new B.nd(a1,s.a,0))
break
case 1:v=a1.mp(0,d,a1.lU(0.12,0.25))
u=a1.mp(0,d,a1.lU(0.12,0.65))
r=a1.mp(0,"xor",a1.lU(0.46,0.25))
q=a1.mp(0,"and",a1.lU(0.46,0.65))
p=a1.avB(0,a0,a1.lU(0.82,0.25),0)
o=a1.avB(0,a0,a1.lU(0.82,0.65),0)
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
case 2:k=a1.mp(0,"clock",a1.lU(0.15,0.4))
j=a1.mp(0,"not",a1.lU(0.45,0.65))
s=a1.mp(0,a0,a1.lU(0.82,0.3))
i=a1.mp(0,"buzzer",a1.lU(0.82,0.65))
a1=k.a
w.push(new B.nd(a1,s.a,0))
n=j.a
w.push(new B.nd(a1,n,0))
w.push(new B.nd(n,i.a,0))
break
default:h=a1.mp(0,d,a1.lU(0.12,0.25))
g=a1.mp(0,d,a1.lU(0.12,0.7))
f=a1.mp(0,"nor",a1.lU(0.5,0.25))
e=a1.mp(0,"nor",a1.lU(0.5,0.7))
s=a1.mp(0,a0,a1.lU(0.86,0.25))
a1=f.a
w.push(new B.nd(g.a,a1,0))
n=e.a
w.push(new B.nd(n,a1,1))
w.push(new B.nd(h.a,n,0))
w.push(new B.nd(a1,n,1))
w.push(new B.nd(a1,s.a,0))}},
$S:0}
B.dEd.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avC(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BR(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mp(0,w.e,o.lU(0.86,0.5))},
$S:0}
B.dE2.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dE3.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dE4.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dE5.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dE6.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abJ(this.c)
if(v.ax)B.Bd("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gK(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dEe.prototype={
$0(){},
$S:0}
B.dEf.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dEg.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dEb.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new B.dEa(v))
w.cy=null},
$S:0}
B.dEa.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dE1.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mp(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dEp.prototype={
$0(){var w=this.a
return w.m(new B.dEo(w))},
$S:0}
B.dEo.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dEq.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c5,C.jt(C.b3(w,w,w,new B.b9u(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dEj(v),w,w,w,new B.dEk(v),new B.dEl(v),new B.dEm(v),w,w,w,w,w,w,w,w,w,w,new B.dEn(v),w,w,w,!1,A.a8)},
$S:35}
B.dEn.prototype={
$1(d){return this.a.c3k(d.b)},
$S:49}
B.dEl.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cbM(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awp(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dEm.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dEk.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bW6(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new B.dEh(w))
u=t.as
u.toString
v.push(new B.nd(u,w.a,w.b))
C.jM()}}t.z=t.as=null},
$S:37}
B.dEh.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dEj.prototype={
$1(d){return this.a.aup(d.b)},
$S:274}
B.dEr.prototype={
$0(){return this.a.bxr(this.b.a)},
$S:0}
B.dEs.prototype={
$0(){return this.a.arQ(this.b.a)},
$S:0}
B.dEt.prototype={
$0(){var w=this.a
return w.m(new B.dEi(w))},
$S:0}
B.dEi.prototype={
$0(){var w=this.a
w.avC(0)
w.ay=null},
$S:0}
B.dEu.prototype={
$0(){return this.a.csE(this.b)},
$S:0}
B.cJH.prototype={
$0(){var w=this,v=null,u=C.ii(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.eq,A.cd)
u.eP()
return u},
$S:332}
B.dKm.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dKl.prototype={
$0(){return this.a.d=null},
$S:0}
B.dKo.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bXT()},
$S:122}
B.dKn.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.fbp.prototype={
$0(){return D.dUB},
$S:z+55}
B.fbq.prototype={
$0(){return D.dsL},
$S:z+59}
B.fbr.prototype={
$0(){return D.dpE},
$S:z+62}
B.fbC.prototype={
$0(){return D.dU0},
$S:z+63}
B.fbE.prototype={
$0(){return D.dz8},
$S:z+66}
B.fbF.prototype={
$0(){return D.dsH},
$S:z+88}
B.fbG.prototype={
$0(){return D.dsK},
$S:z+17}
B.fbH.prototype={
$0(){return D.dlP},
$S:z+18}
B.fbI.prototype={
$0(){return D.dve},
$S:z+19}
B.fbJ.prototype={
$0(){return D.dwR},
$S:z+20}
B.fbK.prototype={
$0(){return D.dwT},
$S:z+21}
B.fbs.prototype={
$0(){return D.drT},
$S:z+22}
B.fbt.prototype={
$0(){return D.dBS},
$S:z+23}
B.fbu.prototype={
$0(){return D.dTI},
$S:z+24}
B.fbv.prototype={
$0(){return D.dRL},
$S:z+25}
B.fbw.prototype={
$0(){return D.dAx},
$S:z+26}
B.fbx.prototype={
$0(){return D.dTQ},
$S:z+27}
B.fby.prototype={
$0(){return D.drS},
$S:z+28}
B.fbz.prototype={
$0(){return D.dU_},
$S:z+29}
B.fbA.prototype={
$0(){return D.drU},
$S:z+16}
B.fbB.prototype={
$0(){return D.dx8},
$S:z+31}
B.fbD.prototype={
$0(){return D.dAw},
$S:z+32}
B.eSS.prototype={
$2(d,e){return new B.adV($.bCn()[e],new B.eSR(e,this.a),null)},
$S:z+33}
B.eSR.prototype={
$0(){var w=this.a,v=F.aCo.h(0,$.bCn()[w].a)
$.aqC=v==null?"music":v
C.a5(this.b,!1).c6(C.e6(new B.eSP(w),!1,null,x.H))},
$S:0}
B.eSP.prototype={
$1(d){return $.bCn()[this.a].e.$0()},
$S:39}
B.eST.prototype={
$2(d,e){return new B.acP(D.avg[e],new B.eSQ(this.a,e),null)},
$S:z+34}
B.eSQ.prototype={
$0(){return this.a.d.$1(D.avg[this.b])},
$S:0}
B.eSy.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eSx.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eSw.prototype={
$1(d){var w=this
return new C.e_(new B.eSv(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eSv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fby,A.at,D.fhS,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aV(12,12)
m=new C.aV(12,12)
m=C.a([new C.bD(1,A.bi,C.aL(d,A.T,!1,d,!0,A.r,d,C.aM(),r[p],d,d,d,d,d,2,new C.e1(d,d,d,d,d,d,d,d,d,d,"Title",d,G.D1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iF,!0,A.a5,d,A.am,d,d,d,d),d),A.ab,new C.bD(2,A.bi,C.aL(d,A.T,!1,d,!0,A.r,d,C.aM(),q[p],d,d,d,d,d,2,new C.e1(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.D1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iF,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dd9[l]
j=new C.aV(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gK(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gK(i)}else g=A.bF
f=new C.aA(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eSt(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f1x,d,d,d,d,d,d,d,d,d),A.an,new C.cl(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a6(d,44,C.cB(n,d,d,d,d,A.aO,!1),d),A.aA],w))}v.push(C.bJ(A.zn,new B.eSu(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cU(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A4.AO,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
B.eSt.prototype={
$0(){var w=this
return w.a.$1(new B.eSs(w.b,w.c,w.d))},
$S:0}
B.eSs.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eSu.prototype={
$0(){var w=this,v=w.a
v.m(new B.eSr(v,w.b,w.c,w.d))
C.a5(w.e,!1).N(null)},
$S:0}
B.eSr.prototype={
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
B.eSG.prototype={
$0(){var w=this.a
return w.m(new B.eSF(w))},
$S:0}
B.eSF.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eSH.prototype={
$0(){return B.qH(this.b,this.a.f,"scene")},
$S:0}
B.eSI.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gK(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYI().x
w===$&&C.c()
return C.bZ(v,new C.o(v,v,v,v,v,new C.bR(D.aUP,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:305}
B.eSJ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f2(A.A,C.c6(new C.h3(C.a([u.gtF(),u.gYI()],x.dS)),new B.eSE(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:248}
B.eSE.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtF().x
r===$&&C.c()
w=r<0.9?1:1-B.bpj(r,0.9,0.98)
v=s.gYI().x
v===$&&C.c()
u=A.dB.av(0,v)
switch(s.gavD().a){case 0:s=s.bwD(t.b,r,u,t.c)
break
case 1:s=s.bMP(t.b,r,u,t.c)
break
case 2:s=s.cxm(t.b,r,u,t.c)
break
case 3:s=s.bzz(t.b,r,u,t.c)
break
case 4:s=s.bCL(t.b,r,u,t.c)
break
case 5:s=s.bBY(t.b,r,u,t.c)
break
default:s=null}return C.db(s,w)},
$S:222}
B.eSK.prototype={
$2(d,e){var w=C.au1(this.b),v=this.c.d,u=C.aq(A.d.gK(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gK(v),A.d.gal(v),0.4)
v.toString
v=w.cFF(u,A.bF,v,3.5)
u=this.a
w=u.gtF().x
w===$&&C.c()
return C.a9b(C.kT(null,null,null,1,0,new B.eSD(u),A.k.D(w,0,1)),v)},
$S:1827}
B.eSD.prototype={
$1(d){var w=this.a
w.gtF().sp(0,d)
if(w.as)w.m(new B.eSz(w))},
$S:6}
B.eSz.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eSL.prototype={
$0(){var w=this.a
w.gtF().sp(0,0)
w.af5()},
$S:0}
B.eSM.prototype={
$1(d){var w=this.a
w.m(new B.eSC(w,d))
if(w.as)w.af5()},
$S:6}
B.eSC.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eSN.prototype={
$0(){var w=this.a
w.m(new B.eSB(w,this.b))
w.gtF().sp(0,0)
if(w.as)w.af5()},
$S:0}
B.eSB.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eSO.prototype={
$0(){var w=this.a
return w.m(new B.eSA(w,this.b))},
$S:0}
B.eSA.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eSp.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1828}
B.eSq.prototype={
$1(d){return d.b},
$S:1829}
B.def.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.deg.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dec.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.ded.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dee.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dei.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dej.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dek.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.del.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dem.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.den.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.deo.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dep.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.ehW.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ehL.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ehN.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+44}
B.ehO.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+45}
B.ehR.prototype={
$1(d){var w=D.ms.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
B.ehS.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.B(new C.e7(new C.cQ(new C.a2(q,new B.ehT(d),p.k("a2<1>")),new B.ehU(r),p.k("cQ<1,qz?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.ehT.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ehU.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.ehP.prototype={
$1(d){return D.ms.h(0,d.b).c===D.wp},
$S:z+49}
B.ehQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eil.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uP(0,u)
w.aGU(A.o.an(v,1000))},
$S:8}
B.ehV.prototype={
$0(){},
$S:0}
B.ehH.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
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
B.ehY.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.v(C.a([A.P,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.ms.h(0,v).b,D.ms.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fsK,w,C.d(D.ms.h(0,v).a,w,w,w,w,w,w,A.ho,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.amc,w,w,w,w,new B.ehX(d),!1,w,w,w,w,w,w,w,D.fkB,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
B.ehX.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.ei_.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e2P],x.p)
for(w=0;w<6;++w){v=D.avz[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bNP,u,u,u,u,new B.ehZ(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.lp,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.ho,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cU(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.btH,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:28}
B.ehZ.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.ehK.prototype={
$1(d){var w=null
return C.ei(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.ehI(d),w,w),C.bK(!1,A.D8,w,w,!0,w,w,new B.ehJ(d),w,w)],x.p),w,w,F.mX,D.fi2,w,w,w,w,D.fkT,w)},
$S:19}
B.ehI.prototype={
$0(){C.a5(this.a,!1).N(!1)
return null},
$S:0}
B.ehJ.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.eij.prototype={
$0(){var w=this.a
return w.m(new B.eii(w))},
$S:0}
B.eii.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eik.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.ma(new B.ei9(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b3s:t
v=C.a([C.b3(u,t,t,new B.bfh(w,v,new B.eia(r),new B.eib(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e0(C.c6(w,new B.eic(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bEp())
return C.aE(A.c5,C.jt(new C.an(A.W,t,A.b_,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.eid(r),t,r.gcd3(),t,new B.eie(r),new B.eif(r),new B.eig(r),t,t,t,t,t,t,t,t,t,t,new B.eih(r),t,t,t,!1,A.a8)},
$S:35}
B.ei9.prototype={
$0(){return this.a.aaQ(this.b)},
$S:0}
B.eih.prototype={
$1(d){return this.a.cv8(d.b)},
$S:49}
B.eif.prototype={
$1(d){return this.a.cd4(d.b)},
$S:42}
B.eig.prototype={
$1(d){return this.a.cd5(d.b)},
$S:18}
B.eie.prototype={
$1(d){return this.a.aZV()},
$S:37}
B.eid.prototype={
$1(d){return this.a.abv(d.b)},
$S:274}
B.eia.prototype={
$0(){return this.a.z},
$S:647}
B.eib.prototype={
$0(){return this.a.Q},
$S:717}
B.eic.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bIF()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.ffx,A.cX],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f0i,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:58}
B.ehM.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A6.SV,w,w,w),A.bA,C.d(g,w,w,w,w,w,w,F.T2,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1831}
B.ei5.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lL()},
$S:0}
B.ei6.prototype={
$0(){var w=this.a
return w.m(new B.ei4(w))},
$S:0}
B.ei4.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ei7.prototype={
$0(){var w=this.a
return w.m(new B.ei3(w))},
$S:0}
B.ei3.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ei8.prototype={
$0(){var w=this.a
return w.m(new B.ei2(w))},
$S:0}
B.ei2.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ei1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.ms.gdL(D.ms),w=w.gaf(w);w.C();){v=w.gU(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.cq1(p[r]))
return new C.C(I.afG,C.v(C.a([new C.C(S.ahl,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ei0.prototype={
$0(){return this.a.c3p(this.b)},
$S:0}
B.deb.prototype={
$0(){var w=this,v=null,u=C.ii(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.eq,A.cd)
u.eP()
return u},
$S:332}
B.etM.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bm(o,new B.etK(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.etL())},
$S:8}
B.etK.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.etL.prototype={
$0(){},
$S:0}
B.etn.prototype={
$0(){},
$S:0}
B.etm.prototype={
$0(){},
$S:0}
B.etw.prototype={
$0(){return B.qH(this.b,this.a.d,"spark-painter")},
$S:0}
B.ety.prototype={
$1(d){return this.a.aXg(0,d.b)},
$S:42}
B.etC.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gco()>2.5}else w=!1
if(w)t.a.push(u)
v.aQq(u)
v.c6r(u)
return null},
$S:18}
B.etx.prototype={
$1(d){return this.a.aXf()},
$S:37}
B.etD.prototype={
$1(d){return this.a.aXg(0,d.b)},
$S:23}
B.etE.prototype={
$1(d){return this.a.aXf()},
$S:49}
B.etF.prototype={
$0(){var w=this.a
return w.m(new B.etv(w,this.b))},
$S:0}
B.etv.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.etG.prototype={
$0(){var w=this.a
return w.m(new B.etu(w))},
$S:0}
B.etu.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.etH.prototype={
$0(){var w=this.a
return w.m(new B.ett(w,this.b))},
$S:0}
B.ett.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.etI.prototype={
$1(d){var w=this.a
return w.m(new B.ets(w,d))},
$S:6}
B.ets.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.etJ.prototype={
$0(){var w=this.a
return w.m(new B.etr(w))},
$S:0}
B.etr.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.etz.prototype={
$0(){var w=this.a
return w.m(new B.etq(w))},
$S:0}
B.etq.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.etA.prototype={
$0(){var w=this.a
return w.m(new B.etp(w))},
$S:0}
B.etp.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.etB.prototype={
$0(){var w=this.a
return w.m(new B.eto(w,this.b))},
$S:0}
B.eto.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eAl.prototype={
$0(){return B.qH(this.b,this.a.d,"title")},
$S:0}
B.eAm.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIl().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bY2(v[t],t,s,q,u))
return new C.C(A.fy,C.c_(A.fQ,w,A.rF,0,0),null)},
$S:685}
B.eAn.prototype={
$1(d){return this.a.m(new B.eAk())},
$S:2}
B.eAk.prototype={
$0(){},
$S:0}
B.eAo.prototype={
$0(){var w=this.a
w.m(new B.eAj(w,this.b))
w=w.gIl()
w.ir(0,0)
w.cH(0)},
$S:0}
B.eAj.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eAp.prototype={
$0(){var w=this.a
return w.m(new B.eAi(w,this.b))},
$S:0}
B.eAi.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eAq.prototype={
$0(){var w=this.a
return w.m(new B.eAh(w))},
$S:0}
B.eAh.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eAr.prototype={
$0(){var w=this.a
return w.m(new B.eAg(w,this.b))},
$S:0}
B.eAg.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eAs.prototype={
$0(){var w=this.a.gIl()
w.ir(0,0)
w.cH(0)},
$S:0}
B.eAt.prototype={
$1(d){var w=this.a
return w.m(new B.eAf(w,d))},
$S:6}
B.eAf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eez.prototype={
$1(d){return d.a.aC(0,this.a).gco()<16},
$S:z+13}
B.eeA.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gco()<16||d.a.aC(0,w).gco()>this.a.r.galv()*2.2},
$S:z+13}
B.een.prototype={
$0(){return B.qH(this.b,this.a.d,"orbits")},
$S:0}
B.eeo.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gacI()
v=q.w
u=q.as
t=q.at
s=u==null?A.a1W:q.cgG(u,q.gaUB())
return new C.es(C.aE(A.c5,C.b3(r,r,r,new B.bjE(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eek(q),new B.eel(q),new B.eem(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:191}
B.eel.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.eem.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eek.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gco()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a__(u,v.gaUB(),v.Q,v.b0p(),C.a([],x.g)))
C.jM()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.eep.prototype={
$1(d){var w=this.a
return w.m(new B.eej(w,d))},
$S:6}
B.eej.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eer.prototype={
$1(d){var w=this.a
return w.m(new B.eei(w,d))},
$S:6}
B.eei.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ees.prototype={
$1(d){var w=this.a
return w.m(new B.eeh(w,d))},
$S:6}
B.eeh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eet.prototype={
$0(){var w=this.a
return w.m(new B.eeg(w))},
$S:0}
B.eeg.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eeu.prototype={
$0(){var w=this.a
return w.m(new B.eef(w))},
$S:0}
B.eef.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eev.prototype={
$0(){var w=this.a
return w.m(new B.eee(w))},
$S:0}
B.eee.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.eew.prototype={
$0(){var w=this.a
return w.m(w.gcsg())},
$S:0}
B.eex.prototype={
$0(){var w=this.a
return w.m(w.gbED())},
$S:0}
B.eey.prototype={
$0(){var w=this.a
return w.m(new B.eed(w))},
$S:0}
B.eed.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aq8(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.h8())}},
$S:0}
B.eeq.prototype={
$0(){var w=this.a
return w.m(A.d.gri(w.e))},
$S:0}
B.ezN.prototype={
$1(d){return this.a.fP$-d.b>6000},
$S:719}
B.ezO.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.ezM(d),C.T(w).k("a2<1>")).gM(0)>=3},
$S:719}
B.ezM.prototype={
$1(d){return d.a.aC(0,this.a.a).gco()<14},
$S:z+53}
B.ezC.prototype={
$0(){return B.qH(this.b,this.a.d,"swarm")},
$S:0}
B.ezD.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.br3(v.e,v.f,v.ax,v.at,v.ay,v.fP$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ezz(v),new B.ezA(v),new B.ezB(v),w,w,w,w,w,w,w,w,new B.ezr(v),new B.ezs(v),new B.ezt(v),w,w,w,!1,A.a8),v.d)},
$S:191}
B.ezA.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.ezB.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.ezz.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.ezs.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.y(v,w.fP$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lb("flute",7,500,0.3)},
$S:23}
B.ezt.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.ezr.prototype={
$0(){return this.a.ay=null},
$S:0}
B.ezE.prototype={
$0(){var w=this.a
return w.m(new B.ezy(w,this.b))},
$S:0}
B.ezy.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.ezF.prototype={
$0(){var w=this.a
return w.m(new B.ezx(w,this.b))},
$S:0}
B.ezx.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.ezG.prototype={
$0(){var w=this.a
return w.m(new B.ezw(w))},
$S:0}
B.ezw.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ezH.prototype={
$1(d){var w=this.a
return w.m(new B.ezv(w,d))},
$S:6}
B.ezv.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ezI.prototype={
$1(d){var w=this.a
return w.m(new B.ezu(w,d))},
$S:6}
B.ezu.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ezJ.prototype={
$1(d){var w=this.a
return w.m(new B.ezq(w,d))},
$S:6}
B.ezq.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ezK.prototype={
$1(d){var w=this.a
return w.m(new B.ezp(w,d))},
$S:6}
B.ezp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ezL.prototype={
$1(d){var w=this.a
return w.m(new B.ezo(w,d))},
$S:6}
B.ezo.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dDE.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dDD(w,d))},
$S:138}
B.dDD.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.O(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:A.k.O(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.V(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.js(v==null?A.ra:v)
v=v.gaf(v)
while(v.C()){u=v.gU(v)
t.n(0,C.t(u.a),A.k.O(C.ex(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dDF.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dDG.prototype={
$1(d){var w=d.d
return w!=null&&this.a.YJ(w)>0},
$S:z+14}
B.dDu.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ayH()},
$S:0}
B.dDx.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eG(w,F.mT,new C.C(A.bC,new C.a6(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i3,w,w,w),A.S,C.D(C.ic(!0,w,w,A.y,U.aMR,new B.dDw(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:46}
B.dDw.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dDv(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bV:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b2:A.dp,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j9
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f3X,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:77}
B.dDv.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.dDB.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gabM()
o=C.b3(q,q,q,new B.b9b(p.d,w,v,p.gc3w(),q),o)
v=p.bVK("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHI()
t=p.as>=p.gHI()?A.b8:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.atE("GOAL",""+w+" / "+u,t),p.atE("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hM,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lz)
if(p.Q&&!p.y)s.push(D.aUx)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b8:A.cj).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b8:A.cj,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.an,C.d("You blasted "+p.as+" dots. The goal was "+p.gHI()+".",q,q,q,q,q,q,A.hB,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eVz,q,q,q))}u.push(A.aA)
t=C.a([new B.fg(A.mm,"Try again",new B.dDy(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.iS,"Next level",new B.dDz(p),A.b8,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.Vl,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c5,new C.an(A.W,q,A.b_,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDA(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dDA.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fP$
E.dF(180,"",200,1,0.4,"sine")
C.je()},
$S:23}
B.dDy.prototype={
$0(){var w=this.a
return w.m(w.gb33())},
$S:0}
B.dDz.prototype={
$0(){var w=this.a
return w.aXh(w.r+1)},
$S:0}
B.dDC.prototype={
$0(){var w=this.a
return w.m(w.gb33())},
$S:0}
B.cJe.prototype={
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
v.z=A.lj
w.ai(d,e*0.5,v)},
$S:720}
B.ea2.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcLe()?this.a.cou(w,v,d.b):w.aC(0,v).gco())<24},
$S:z+56}
B.ear.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eag.prototype={
$0(){var w=this.a
return w.m(new B.ea7(w))},
$S:0}
B.ea7.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eah.prototype={
$0(){return B.qH(this.b,this.a.d,"marble-music")},
$S:0}
B.eai.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.bgb(v.e,v.f,v.at,v.ax,v.fP$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ead(v),new B.eae(v),new B.eaf(v),w,w,w,w,w,w,w,w,w,w,new B.ea6(v),w,w,w,!1,A.a8),v.d)},
$S:191}
B.ea6.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Zt(w)
u.e.push(new B.Fh(w,w,v,u.aO8(v)))
if(u.ay)B.lb(u.z,v+12,700,0.5)}if(u.x==="erase")u.aQG(d.b)},
$S:49}
B.eae.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.eaf.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aQG(d.b)},
$S:18}
B.ead.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gco()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Zt(t.ad(0,w).eE(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fh(w,t,v,u.aO8(v)))
if(u.ay)B.lb(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.eaj.prototype={
$0(){var w=this.a
return w.m(new B.eac(w,this.b))},
$S:0}
B.eac.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.eak.prototype={
$0(){var w=this.a
return w.m(new B.eab(w,this.b))},
$S:0}
B.eab.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eal.prototype={
$0(){var w=this.a
return w.m(new B.eaa(w,this.b))},
$S:0}
B.eaa.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eam.prototype={
$1(d){var w=this.a
return w.m(new B.ea9(w,d))},
$S:6}
B.ea9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ean.prototype={
$0(){var w=this.a
return w.m(new B.ea8(w))},
$S:0}
B.ea8.prototype={
$0(){return this.a.axg("stairs")},
$S:0}
B.eao.prototype={
$0(){var w=this.a
return w.m(new B.ea5(w))},
$S:0}
B.ea5.prototype={
$0(){return this.a.axg("pinball")},
$S:0}
B.eap.prototype={
$0(){var w=this.a
return w.m(new B.ea4(w))},
$S:0}
B.ea4.prototype={
$0(){return this.a.axg("random")},
$S:0}
B.eaq.prototype={
$0(){var w=this.a
return w.m(new B.ea3(w))},
$S:0}
B.ea3.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.edX.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.edY.prototype={
$0(){var w=this.b,v=new B.acA(this.a.a,this.c)
v.c=w.fP$
return w.e.push(v)},
$S:0}
B.ee4.prototype={
$0(){var w=this.a
return w.m(new B.ee3(w))},
$S:0}
B.ee3.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ee5.prototype={
$0(){return B.qH(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ee6.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aPu()}w=u.w
return new C.es(C.aE(A.c5,C.b3(v,v,v,new B.bjF(u.e,u.gaXj(),6,u.gciI(),u.gcoV(),u.fP$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ee2(u),v,v,v,!1,A.a8),u.d)},
$S:191}
B.ee2.prototype={
$1(d){return this.a.c3y(d.b)},
$S:49}
B.ee7.prototype={
$1(d){var w=this.a
return w.m(new B.ee1(w,d))},
$S:6}
B.ee1.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ee8.prototype={
$0(){var w=this.a
return w.m(new B.ee0(w,this.b))},
$S:0}
B.ee0.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ee9.prototype={
$0(){var w=this.a
return w.m(new B.ee_(w,this.b))},
$S:0}
B.ee_.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eea.prototype={
$0(){var w=this.a
return w.m(w.gbIB())},
$S:0}
B.eeb.prototype={
$0(){var w=this.a
return w.m(new B.edZ(w))},
$S:0}
B.edZ.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.acA(v.aA(6),v.aj()))},
$S:0}
B.eec.prototype={
$0(){var w=this.a
return w.m(A.d.gri(w.e))},
$S:0}
B.fqe.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:127}
B.edr.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.edq(w,d))},
$S:138}
B.edq.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cz:v)
while(v.C())w.push(A.k.O(C.ex(v.gU(v))))
return this.a.x.v(0,w)},
$S:0}
B.edd.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:127}
B.ed7.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b84(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ed8.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.edc.prototype={
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
p=D.vM.h(0,v[u].a).a
o=w.aie(u)
v=D.vM.h(0,v[t].a).a
n=w.aie(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vH("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaXp()&&w.x.L(0,w.d)){B.vH("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a4(m).k("cm.E"))
B.vE("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.edb.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a4(t).k("cz<1>"),r=this.b,q=s.k("a2<J.E>"),p=C.B(new C.a2(new C.cz(t,s),new B.ed9(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.V(s,s)
t.bI(0,new B.eda(r,v))
t.a9(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ed9.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.F(d,100)===w},
$S:32}
B.eda.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:127}
B.edl.prototype={
$1(d){return""+d.b+" "+D.vM.h(0,d.a).c.toLowerCase()},
$S:408}
B.edm.prototype={
$0(){var w=this.a
return w.m(new B.edk(w))},
$S:0}
B.edk.prototype={
$0(){var w=this.a;++w.d
w.avI(0)},
$S:0}
B.edn.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c5,C.b3(w,w,w,new B.bgT(v.e,v.f,v.r,v.gczq(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edg(v),new B.edh(v),new B.edi(v,e),w,w,w,w,w,w,w,w,w,w,new B.edj(v),w,w,w,!1,A.a8)},
$S:35}
B.edj.prototype={
$1(d){return this.a.c3V(d.b)},
$S:49}
B.edh.prototype={
$1(d){var w=this.a
return w.w=w.aXq(d.b)},
$S:42}
B.edi.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ede(w,v,d,this.b))},
$S:18}
B.ede.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.edg.prototype={
$1(d){return this.a.w=null},
$S:37}
B.edo.prototype={
$0(){var w=this.a
return w.m(new B.edf(w,this.b))},
$S:0}
B.edf.prototype={
$0(){var w=this.a
w.d=this.b
w.avI(0)},
$S:0}
B.edp.prototype={
$0(){return this.a.c3P(0,this.b.a)},
$S:0}
B.dmj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eE(0,Math.max(h.gco(),1))
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
$S:127}
B.dMq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dMp(w,d))},
$S:138}
B.dMp.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dMf.prototype={
$0(){var w,v,u=J.e2(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.au2[w.aA(4)]
return A.d.fW(u)},
$S:22}
B.dMe.prototype={
$1(d){return B.fTX(d)==="*"},
$S:3}
B.dMg.prototype={
$1(d){return d!==this.a},
$S:3}
B.dMd.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vE("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vH("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8k()[r]+" codes for "+C.t(D.C0.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b_r()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.C0.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vH("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dMo.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dp:e,u=C.m(8),t=f?C.I(A.b2,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b2:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.n5,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1835}
B.dMj.prototype={
$1(d){var w=D.dgR.h(0,d)
return w==null?A.c:w},
$S:721}
B.dMk.prototype={
$0(){var w=this.a
return w.m(new B.dMi(w,this.b))},
$S:0}
B.dMi.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.auZ()},
$S:0}
B.dMl.prototype={
$0(){var w=this.a
return w.m(new B.dMh(w))},
$S:0}
B.dMh.prototype={
$0(){var w=this.a;++w.e
w.auZ()},
$S:0}
B.dMm.prototype={
$0(){return this.a.aXo(this.b)},
$S:0}
B.dMn.prototype={
$0(){return this.a.aXo(this.b)},
$S:0}
B.dPf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dPe(w,d))},
$S:138}
B.dPe.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dP2.prototype={
$0(){},
$S:0}
B.dP1.prototype={
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
B.dP3.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dP7.prototype={
$1(d){var w=this.a
return w.m(new B.dP6(w,d))},
$S:6}
B.dP6.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dP8.prototype={
$1(d){var w=this.a
return w.m(new B.dP5(w,d))},
$S:6}
B.dP5.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dP9.prototype={
$1(d){var w=this.a
return w.m(new B.dP4(w,d))},
$S:6}
B.dP4.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dPa.prototype={
$0(){return this.a.a9w("drought")},
$S:0}
B.dPb.prototype={
$0(){return this.a.a9w("disease")},
$S:0}
B.dPc.prototype={
$0(){return this.a.a9w("foxes")},
$S:0}
B.dPd.prototype={
$0(){return this.a.a9w("rabbits")},
$S:0}
B.d1J.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eP()
k.dG(A.o.O(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.ko(new C.eo(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ch,new C.jo(1),l,l,l,l,A.cd,l)
n.eP()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1837}
B.d1L.prototype={
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
$S:1838}
B.d1K.prototype={
$3(d,e,f){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1839}
B.bEr.prototype={
$2(d,e){return d+e.a*e.b},
$S:1840}
B.fl7.prototype={
$2(d,e){return e.a-d.a},
$S:1841}
B.dzP.prototype={
$2(d,e){return d+e},
$S:75}
B.dA1.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dA0(v,A.k.D((v.gvD()-w[v.e].guH())/Math.max(w[v.e].guH(),8),-1,1)*0.32,u))},
$S:8}
B.dA0.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dA2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dA_(w,d))},
$S:138}
B.dA_.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cz:v)
while(v.C())w.push(A.k.O(C.ex(v.gU(v))))
return this.a.r.v(0,w)},
$S:0}
B.dzQ.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dzV.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1842}
B.dzW.prototype={
$0(){var w=this.a
return w.m(new B.dzU(w))},
$S:0}
B.dzU.prototype={
$0(){var w=this.a;++w.e
A.d.he(w.f,0,5,0)},
$S:0}
B.dzX.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c5,C.b3(w,w,w,new B.b8g(v.w,this.b.a,v.f,v.gvD()===v.d[v.e].guH(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dzT(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dzT.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cvl(v-1)},
$S:49}
B.dzY.prototype={
$0(){var w=this.a
return w.m(new B.dzS(w,this.b))},
$S:0}
B.dzS.prototype={
$0(){var w=this.a
w.e=this.b
A.d.he(w.f,0,5,0)},
$S:0}
B.dzZ.prototype={
$0(){var w=this.a
return w.m(new B.dzR(w))},
$S:0}
B.dzR.prototype={
$0(){return A.d.he(this.a.f,0,5,0)},
$S:0}
B.cBM.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bA(C.cu(new C.u(d,s),20,w),A.rn)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dA.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
B.fk8(v,"1",new C.u(d,s),A.bh,11)}},
$S:1843}
B.dTi.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dTh(w,v))},
$S:8}
B.dTh.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dTj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTg(w,d))},
$S:138}
B.dTg.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cz:v)
while(v.C())w.push(A.k.O(C.ex(v.gU(v))))
return this.a.w.v(0,w)},
$S:0}
B.dT8.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dTc.prototype={
$0(){var w=this.a
return w.m(new B.dTb(w))},
$S:0}
B.dTb.prototype={
$0(){return this.a.r++},
$S:0}
B.dTd.prototype={
$0(){var w=this.a
return w.m(new B.dTa(w,this.b))},
$S:0}
B.dTa.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTe.prototype={
$1(d){var w=this.a
return w.m(new B.dT9(w,d))},
$S:6}
B.dT9.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dTf.prototype={
$1(d){return this.a.c3W(this.b,d)},
$S:6}
B.d9u.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bNL(d,e,f,g),m=this.b
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
p.r=A.hG.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.ai(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1844}
B.d9v.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fk8(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1845}
B.dE0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dE_(w,d))},
$S:138}
B.dE_.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cz:v)
while(v.C())w.push(A.k.O(C.ex(v.gU(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dDJ.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jE(90-(w-65)):d},
$S:14}
B.dDS.prototype={
$1(d){return this.a.m(new B.dDR())},
$S:2}
B.dDR.prototype={
$0(){},
$S:0}
B.dDT.prototype={
$1(d){return this.a.m(new B.dDQ())},
$S:2}
B.dDQ.prototype={
$0(){},
$S:0}
B.dDU.prototype={
$0(){var w=this.a
return w.m(new B.dDP(w))},
$S:0}
B.dDP.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aW9()},
$S:0}
B.dDV.prototype={
$0(){var w=this.a
return w.m(new B.dDO(w))},
$S:0}
B.dDO.prototype={
$0(){return this.a.f=0},
$S:0}
B.dDW.prototype={
$0(){var w=this.a
return w.m(new B.dDN(w))},
$S:0}
B.dDN.prototype={
$0(){return this.a.f=1},
$S:0}
B.dDX.prototype={
$0(){var w=this.a
return w.m(new B.dDM(w,this.b))},
$S:0}
B.dDM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dDY.prototype={
$1(d){var w=this.a
return w.m(new B.dDL(w,d))},
$S:6}
B.dDL.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dDZ.prototype={
$1(d){var w=this.a
w.m(new B.dDK(w,d))
if(w.ga8O()&&w.Q.L(0,w.x)){B.vH("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a4(w).k("cm.E"))
B.vE("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dDK.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bKm.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bKx.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bKs.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bKy.prototype={
$1(d){return this.a.L7(d)&&!d.x},
$S:z+1}
B.bKz.prototype={
$2(d,e){return Math.max(d,this.a.aza(e))},
$S:z+6}
B.bKB.prototype={
$2(d,e){var w=this.a
return w.ck(0,d.a+"."+e,new B.bKC(w))},
$S:z+5}
B.bKC.prototype={
$0(){return this.a.a},
$S:115}
B.bKA.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKD.prototype={
$2(d,e){var w=this.a
return w.ck(0,this.b.$1(this.c.$2(d,e)),new B.bKE(w))},
$S:z+5}
B.bKE.prototype={
$0(){return this.a.a},
$S:115}
B.bKo.prototype={
$2(d,e){var w=this.a
return w.ck(0,d.a+"."+e,new B.bKp(w))},
$S:z+5}
B.bKp.prototype={
$0(){return this.a.a},
$S:115}
B.bKn.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKq.prototype={
$2(d,e){var w=this.a
return w.ck(0,this.b.$1(this.c.$2(d,e)),new B.bKr(w))},
$S:z+5}
B.bKr.prototype={
$0(){return this.a.a},
$S:115}
B.bKl.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bKF.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bKt.prototype={
$1(d){return d!==this.b&&this.a.aFd(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bKw.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bKv.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bKu.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFD.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFE.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ciL.prototype={
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
B.fBD.prototype={
$1(d){var w
$.X()
w=C.M()
w.r=d.gp(0)
return w},
$S:1846}
B.fBF.prototype={
$2(d,e){var w
$.X()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1847}
B.fBG.prototype={
$5(d,e,f,g,h){return C.bA(new C.aa(d,e,d+f,e+g),new C.aV(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1848}
B.fBE.prototype={
$3(d,e,f){var w
$.X()
w=C.M()
w.sau(new C.a7(A.b0,A.b6,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1849}
B.bFh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bFi.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bFg(w))},
$S:0}
B.bFg.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFj.prototype={
$0(){return C.a([],x.ey)},
$S:1850}
B.bFk.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:370}
B.bFl.prototype={
$0(){var w,v,u
J.bCv(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C7(v))if(B.fUm(v.b))w.aZo(v)
else w.ZJ(v)
else{u=w.a.c.baR(v)
w.acV(u==null?"The "+$.q3().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bFf.prototype={
$1(d){return new C.e_(new B.bFd(this.a,this.b),null)},
$S:20}
B.bFd.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bFe(this.a,v,e),t=$.q3(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kX,w,w,w),q=C.aH(w,w,w,w,D.bEC,w,w,w,new B.bF9(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.C(A.xp,C.v(C.a([r,A.at,D.ftH,A.S,C.A(C.a([q,C.D(C.kT(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bLa,w,w,w,new B.bFa(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b4,C.bK(!1,D.f7Z,w,w,!0,w,w,new B.bFb(u),w,w),C.bK(!1,A.zn,w,w,!0,w,w,new B.bFc(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:83}
B.bFe.prototype={
$1(d){var w=this.a
w.m(new B.bF7(this.b,d))
this.c.$1(new B.bF8())
w.a.toString},
$S:6}
B.bF7.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bF8.prototype={
$0(){},
$S:0}
B.bF9.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bFa.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bFb.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bFc.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.bFA.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fK()
w=this.a
if(w.c!=null)w.acV("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.acV("\u26a0 Overloaded! The "+$.q3().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zn(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.acV("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFB.prototype={
$0(){},
$S:0}
B.bEL.prototype={
$0(){},
$S:0}
B.bFC.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bFz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c5,C.b3(p,p,p,new B.ahD(w,v,u,t,s,r==null?A.iW:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFt(o),new B.bFu(o),new B.bFv(o),p,p,p,p,p,p,p,p,p,p,new B.bFw(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b2L)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f6g,C.D(C.d(w,p,p,p,p,p,p,D.eZz,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b8_,p,u,v,p,p,A.n),p,p,p,p,A.nQ,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFx(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aXt(C.A(C.a([D.bvG,new B.fg(A.FE,"Cut wire",new B.bFy(o),A.cj,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cdC(w),p,p,10,10,p,p))}return C.jt(new C.an(A.W,p,A.b_,A.r,n,p),A.r,p)},
$S:466}
B.bFu.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b5b(s)
if(r!=null){t.m(new B.bFr(t,r,d))
return}w=t.b_4(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bFs(t,w))}},
$S:42}
B.bFr.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bFs.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bFv.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bFp(w,d))
else if(w.w!=null)w.m(new B.bFq(w,d.b.ad(0,w.x)))},
$S:18}
B.bFp.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bFq.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bFt.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b5b(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aju(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.acT()},
$S:37}
B.bFw.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_4(v)
if(u!=null){w.m(new B.bFn(w,u))
if(D.lS.ah(0,u.b))w.cnY(u)
w.a.toString
return}w.m(new B.bFo(w,w.cAf(v)))},
$S:49}
B.bFn.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bFo.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bFx.prototype={
$0(){var w=this.a
return w.m(new B.bFm(w))},
$S:0}
B.bFm.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFy.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.acT()},
$S:0}
B.bEM.prototype={
$0(){return this.a.bmH(this.b)},
$S:0}
B.bF4.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eUc,w,w,w),C.D(C.kT(this.b.d,w,w,g,h,new B.bF6(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1851}
B.bF6.prototype={
$1(d){var w=this.a
w.m(new B.bF5(this.b,d))
w.a.toString},
$S:6}
B.bF5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bES.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.acT()},
$S:0}
B.bET.prototype={
$0(){var w=this.a
return w.m(new B.bER(w))},
$S:0}
B.bER.prototype={
$0(){return this.a.d=null},
$S:0}
B.bEU.prototype={
$0(){this.a.m(new B.bEQ(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bEQ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bEX.prototype={
$0(){return this.a.aZo(this.b)},
$S:0}
B.bEY.prototype={
$0(){return this.a.ZJ(this.b)},
$S:0}
B.bEZ.prototype={
$0(){return this.a.a0n(this.b)},
$S:0}
B.bF_.prototype={
$0(){var w=this.a
w.m(new B.bEP(this.b,this.c))
w.a.toString},
$S:0}
B.bEP.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bF0.prototype={
$0(){var w=this.a
w.m(new B.bEO(this.b,this.c))
w.a.toString},
$S:0}
B.bEO.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bF1.prototype={
$0(){var w=this.a
w.m(new B.bEN(this.b,this.c))
w.a.toString},
$S:0}
B.bEN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bF2.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bF3.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEV.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEW.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fba.prototype={
$1(d){return d.aES("bulb")},
$S:z+2}
B.fbb.prototype={
$1(d){return d.pr(0,"switch")&&d.aES("bulb")},
$S:z+2}
B.fbc.prototype={
$1(d){return A.d.b8(d.a,new B.faY())},
$S:z+2}
B.faY.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fbd.prototype={
$1(d){return d.pr(0,"resistor")&&A.d.b8(d.a,new B.faX())},
$S:z+2}
B.faX.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fbe.prototype={
$1(d){return!d.pr(0,"battery")&&d.aES("bulb")},
$S:z+2}
B.fb1.prototype={
$1(d){return A.d.b8(d.a,new B.faW())},
$S:z+2}
B.faW.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fb2.prototype={
$1(d){return A.d.b8(d.a,new B.faV())},
$S:z+2}
B.faV.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fb3.prototype={
$1(d){return A.d.b8(d.a,new B.faU())},
$S:z+2}
B.faU.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fb4.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.faS())&&A.d.b8(w,new B.faT())&&d.pr(0,"buck")},
$S:z+2}
B.faS.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.faT.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fb5.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.faQ())&&A.d.b8(w,new B.faR())},
$S:z+2}
B.faQ.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.faR.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fb6.prototype={
$1(d){return A.d.b8(d.a,new B.faP())},
$S:z+2}
B.faP.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dPn.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dPw.prototype={
$1(d){var w=this.a.d
return w.aFd(d)&&w.C7(d)},
$S:z+1}
B.dPx.prototype={
$1(d){return d.x},
$S:z+1}
B.dPy.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dPz.prototype={
$0(){},
$S:0}
B.dPm.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fmG,A.at,D.f7V,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Pm[v]
t=A.c.j(0.06)
s=new C.aV(14,14)
r=new C.aA(A.bF,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kv,q,q,q,q,q,q,q,q,q),A.bA,new C.x(u.b,q,D.f_i,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cH,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dPl(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eG(q,F.mT,new C.C(A.bW,new C.a6(340,q,C.cB(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:46}
B.dPl.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new B.dPk(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dPk.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bfZ()},
$S:0}
B.dPi.prototype={
$1(d){return new B.UE(this.a.d,null)},
$S:z+67}
B.dPj.prototype={
$0(){},
$S:0}
B.dPv.prototype={
$1(d){return new C.e_(new B.dPu(this.a),null)},
$S:20}
B.dPu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agP(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b8:A.aV
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fk6,A.b4,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.bv(C.m(4),C.lX(A.bF,m,m,5,m,w.a/11,new C.lQ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.faW)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.SS,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.D3,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bH(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dPs(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aV(12,12)
n=new C.aA(o===l.f?f.j(0.6):A.dp,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.cl(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7_,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bi,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nQ,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dPt(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bm(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A4.AO,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:83}
B.dPs.prototype={
$0(){var w=this.a
w.m(new B.dPq(w))
this.b.$1(new B.dPr())
w.Eu()},
$S:0}
B.dPq.prototype={
$0(){var w=this.a
$.agP()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dPr.prototype={
$0(){},
$S:0}
B.dPt.prototype={
$0(){var w=this.a
w.m(new B.dPo(w,this.b))
this.c.$1(new B.dPp())
w.Eu()},
$S:0}
B.dPo.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dPp.prototype={
$0(){},
$S:0}
B.dPB.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.dPC.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m7("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).c6(C.e6(new B.dPA(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dPA.prototype={
$1(d){C.lh("construction")
return Al.hwl()},
$S:z+68}
B.dPD.prototype={
$0(){return B.hiu(this.a,"ELECTRONICS LAB",this.b,A.aV)},
$S:0}
B.dPE.prototype={
$0(){var w=this.a
return w.m(w.d.gcRb())},
$S:0}
B.dPF.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gri(v))
w.Eu()},
$S:0}
B.czj.prototype={
$2(d,e){var w=null,v=this.a.gavJ().x
v===$&&C.c()
return C.b3(w,w,w,new B.b7o(v,w),A.au)},
$S:70}
B.czi.prototype={
$3(d,e,f){var w=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cS(v,u,v+e,u))
w.E(new C.cS(v,u,v,u+e))
w.E(new C.cS(v,u,v-e,u))
w.E(new C.cS(v,u,v,t))
w.E(new C.bF())
t=C.M()
t.r=A.c.j(f).gp(0)
this.a.aO(w,t)},
$S:668}
B.fGc.prototype={
$3(d,e,f){return new B.TV(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fGd.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ih(A.A,g,null,new C.bf(C.cI(A.cr,e,null),new C.bn(0.85,1,w),w.k("bf<bI.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dLj.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.dLi.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bVz(o):q.byC(o,p),m=x.p
p=C.a([C.q6(new C.n7(n,new C.cw(p,x.aC)),A.py,C.rD(),A.bc,A.bc,new B.dLg())],m)
n=t.d
if(n){w=A.k.F(q.gR9(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bvs)
else m.push(A.b4)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b8:A.aB,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dg(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.n0,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.un)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JL,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.w_)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JL,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dLh(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bv(r,new C.an(A.W,s,A.b_,A.r,p,s),A.aq)},
$S:296}
B.dLg.prototype={
$2(d,e){var w=x.Y
return new C.cX(e,!1,C.ih(A.A,d,null,new C.bf(e,new C.bn(0.92,1,w),w.k("bf<bI.T>"))),null)},
$S:382}
B.dLh.prototype={
$0(){var w=this.a
return w.m(new B.dLf(w))},
$S:0}
B.dLf.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLe.prototype={
$0(){var w=this.a
return w.m(new B.dLd(w,this.b))},
$S:0}
B.dLd.prototype={
$0(){return this.a.e=A.d.cJ(F.jY,this.b)},
$S:0}
B.dLc.prototype={
$0(){var w=this.a
return w.m(new B.dLb(w))},
$S:0}
B.dLb.prototype={
$0(){return this.a.e=0},
$S:0}
B.dL7.prototype={
$0(){var w=this.a
return w.m(new B.dL6(w))},
$S:0}
B.dL6.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fsb,A.av,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f5b,p,p,p),1),C.d(A.a.aT(A.o.u(C.dh(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qc,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l7,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.btm(w.gR9(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b2,A.q,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9T,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dL9(w),p,p,p,p,p,p,!1,A.a8),A.eb,C.p(p,p,A.f,p,p,A.a9Z,p,12,p,p,p,p,p,12),A.eb,C.p(p,p,A.f,p,p,D.aZc,p,12,p,p,p,p,p,12),A.av,C.D(C.d(F.jY[o].a,p,1,A.a2,p,p,p,A.a6Q,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cE,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bY(0,new C.C(D.bsh,C.p(p,C.bv(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.adE(r,w.gR9(),p),A.f0),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.d9V,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b2,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.je,w.atG(F.jY[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.l9,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bv(n,C.p(p,C.v(C.a([m,C.D(new C.an(A.W,p,A.b_,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KP,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:296}
B.dL9.prototype={
$0(){var w=this.a
return w.m(new B.dL8(w))},
$S:0}
B.dL8.prototype={
$0(){return this.a.e=null},
$S:0}
B.e5C.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e5B(w,d))},
$S:138}
B.e5B.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"best"))
t=t==null?null:A.k.O(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:A.k.O(v)
if(v==null)v=0
w.d=v
w.f=B.fUs(v)},
$S:0}
B.e5D.prototype={
$0(){},
$S:0}
B.e5s.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fUs(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e5t.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvc().r){C.jM()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vH("click",s.c+s.d,60,0.4)
if(B.hiD(r.gvc(),q).b.a===r.gvc().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vE("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bd("bell",D.anI,700,0.45)
for(q=r.gvc().c,q=C.eb(q,q.r,C.a4(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.y(new C.u((A.o.F(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e5w.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c5,C.b3(s,s,s,new B.bfm(r.gvc(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e5u(r),s,s,s,!1,A.a8),C.ao(s,C.e0(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,L.aOp,s,s,s),C.d(""+u.a+"/"+r.gvc().c.a+" \u2605   mirrors "+w.a+"/"+r.gvc().r,s,s,s,s,s,s,S.a6A,s,s,s)],t),A.m,s,A.hM,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.ffq("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b8,C.a([new B.fg(A.iS,"Next level",new B.e5v(r),A.b8,s)],t)))
return new C.an(A.W,s,A.b_,A.r,w,s)},
$S:62}
B.e5u.prototype={
$1(d){return this.a.c4h(d.b)},
$S:49}
B.e5v.prototype={
$0(){var w=this.a
return w.acZ(w.d+1)},
$S:0}
B.e5x.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.gri(v))},
$S:0}
B.e5y.prototype={
$0(){var w=this.a
return w.acZ(w.d+1)},
$S:0}
B.e5z.prototype={
$0(){var w=this.a
return w.acZ(w.d-1)},
$S:0}
B.e5A.prototype={
$0(){return this.a.acZ(this.b)},
$S:0}
B.dey.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:722}
B.deB.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.X()
u=C.M()
u.r=(f?A.hi:A.aL).gp(0)
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
$S:1853}
B.dez.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:387}
B.deA.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:387}
B.e5V.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e5U(w,d))},
$S:138}
B.e5U.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e5W.prototype={
$0(){},
$S:0}
B.e5G.prototype={
$1(d){return d===0},
$S:117}
B.e5P.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,L.a6K,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cj:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,S.a6A,s,s,s)],v),A.m,s,A.hM,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dp:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b2,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bpC,w,s),C.D(C.A(C.a([C.D(new C.C(A.bS,C.v(C.a([t,A.an,C.d(q?"TARGET":"TARGET: "+r.gcvo(),s,s,s,s,s,s,D.aPd,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bS,C.v(C.a([C.D(C.b3(s,s,s,new B.bfB(r.f,s),A.f0),1),A.an,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aPd,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.ffq("Light Mixer","Match each colour with red, green and blue light."+q,A.b7,C.a([new B.fg(A.iT,"Start",new B.e5M(r),A.b8,s)],v)))}if(r.z==="result")w.push(B.ffq(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.iS,"Next colour",new B.e5N(r),A.b8,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.ffq("Finished! "+q,u,A.b8,C.a([new B.fg(A.mm,"Play again",new B.e5O(r),A.b8,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:62}
B.e5M.prototype={
$0(){var w=this.a
return w.m(new B.e5I(w))},
$S:0}
B.e5I.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avN()},
$S:0}
B.e5N.prototype={
$0(){var w=this.a
return w.m(w.gc4f())},
$S:0}
B.e5O.prototype={
$0(){var w=this.a
return w.m(new B.e5H(w))},
$S:0}
B.e5H.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avN()},
$S:0}
B.e5Q.prototype={
$1(d){var w=this.a
return w.m(new B.e5L(w,d))},
$S:6}
B.e5L.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e5R.prototype={
$1(d){var w=this.a
return w.m(new B.e5K(w,d))},
$S:6}
B.e5K.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e5S.prototype={
$1(d){var w=this.a
return w.m(new B.e5J(w,d))},
$S:6}
B.e5J.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e5T.prototype={
$0(){var w=this.a
return w.m(w.gc4g())},
$S:0}
B.fbS.prototype={
$0(){return D.dW3},
$S:z+70}
B.fbT.prototype={
$0(){return D.dti},
$S:z+71}
B.fbU.prototype={
$0(){return D.dpR},
$S:z+72}
B.fbV.prototype={
$0(){return D.dsJ},
$S:z+73}
B.fbW.prototype={
$0(){return D.dxE},
$S:z+74}
B.fbX.prototype={
$0(){return D.dRN},
$S:z+75}
B.fbY.prototype={
$0(){return D.dTZ},
$S:z+76}
B.fbZ.prototype={
$0(){return D.dwY},
$S:z+77}
B.cdo.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.cdp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hm4(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aV(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dk,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cK(m,-6,-6,m,m,m,new C.x(r.c,m,K.SR,m,m,m,m,m,m,m,m,m),m),new C.bH(A.lu,m,m,C.v(C.a([new C.x(r.a,m,D.f3N,m,m,m,m,m,m,m,m,m),A.cX,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a7(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cdn(d,r),m,m,m,m,m,m,!1,A.a8))}return C.c_(A.bB,j,A.bs,14,14)},
$S:159}
B.cdn.prototype={
$0(){return C.a5(this.a,!1).c6(C.e6(new B.cdm(this.b),!1,null,x.H))},
$S:0}
B.cdm.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eEO.prototype={
$0(){var w=this.a
return w.w=w.d[w.b2u(w.f)]},
$S:0}
B.eEK.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eEJ.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.c3)
w.w=""},
$S:0}
B.eEM.prototype={
$0(){var w=this.a
return w.m(new B.eEL(w,this.b))},
$S:0}
B.eEL.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eEN.prototype={
$1(d){return this.a.aXT(0)},
$S:2}
B.dRB.prototype={
$0(){return B.Bd("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dRC.prototype={
$0(){},
$S:0}
B.dRw.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dRy.prototype={
$0(){return this.a.aXV(this.b)},
$S:0}
B.dRz.prototype={
$0(){var w=this.a
return w.m(new B.dRx(w))},
$S:0}
B.dRx.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dRA.prototype={
$0(){var w=this.a
return w.aXV(w.d)},
$S:0}
B.dCr.prototype={
$2(d,e){return d+e},
$S:89}
B.dCs.prototype={
$0(){},
$S:0}
B.dCm.prototype={
$2(d,e){return d+e},
$S:89}
B.dCp.prototype={
$0(){var w=this.a
return w.m(new B.dCo(w,this.b))},
$S:0}
B.dCo.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dCq.prototype={
$0(){var w=this.a
return w.m(new B.dCn(w))},
$S:0}
B.dCn.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dOS.prototype={
$0(){return B.qH(this.b,this.a.d,"drawing")},
$S:0}
B.dOT.prototype={
$1(d){var w=this.a
return w.m(new B.dOR(w,d))},
$S:42}
B.dOR.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGO(u,v,t))},
$S:0}
B.dOU.prototype={
$1(d){var w=this.a
return w.m(new B.dOQ(w,d))},
$S:18}
B.dOQ.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dOV.prototype={
$1(d){var w=this.a
return w.m(new B.dOP(w,d))},
$S:23}
B.dOP.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGO(u,v,t))},
$S:0}
B.dOW.prototype={
$0(){var w=this.a
return w.m(new B.dOO(w,this.b))},
$S:0}
B.dOO.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dOX.prototype={
$1(d){var w=this.a
return w.m(new B.dON(w,d))},
$S:6}
B.dON.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dOY.prototype={
$0(){var w=this.a
return w.m(new B.dOM(w))},
$S:0}
B.dOM.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dOZ.prototype={
$0(){var w=this.a
return w.m(new B.dOL(w))},
$S:0}
B.dOL.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dP_.prototype={
$0(){var w=this.a
return w.m(A.d.gri(w.e))},
$S:0}
B.dP0.prototype={
$0(){var w=this.a
return w.m(new B.dOK(w))},
$S:0}
B.dOK.prototype={
$0(){var w=this.a
w.x=D.aux[A.o.F(A.d.cJ(D.aux,w.x)+1,4)]},
$S:0}
B.ebh.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.ebi.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bd("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ebg(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bd("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ebg.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.ebj.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ebf(w))},
$S:11}
B.ebf.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.ebn.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mw(new B.ebl(v,e),w,A.bc,A.py,w,w,new C.bn(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ebm(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:77}
B.ebm.prototype={
$0(){return this.a.c5c(this.b)},
$S:0}
B.ebl.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dl(),m=n.a
m.$flags&2&&C.ak(m)
m[11]=0.001
n.fv(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bTP
if(o)v=q.a.r.t(0,q.b)?A.b8.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b8:A.b2,A.q,1)
if(o){r=C.dl()
r.fv(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f1b,p,p,p),p,r,!0)
u=r}else u=D.fls
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.ebo.prototype={
$0(){var w=this.a
return w.m(new B.ebk(w,this.b))},
$S:0}
B.ebk.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ar_()},
$S:0}
B.ebp.prototype={
$0(){var w=this.a
return w.m(w.gbHa())},
$S:0}
B.elO.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.elP.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.elM.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.elN.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.elL(w))},
$S:11}
B.elL.prototype={
$0(){return this.a.f=-1},
$S:0}
B.elQ.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.elR.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.elS.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aXU()},
$S:11}
B.elT.prototype={
$0(){return this.a.c5i(this.b)},
$S:0}
B.eA5.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.eAe.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kI,C.A(C.a([v,A.ab,new C.dm(1,A.ci,C.f2(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1855}
B.eAa.prototype={
$1(d){return this.a.m(new B.eA9())},
$S:2}
B.eA9.prototype={
$0(){},
$S:0}
B.eAb.prototype={
$0(){var w=this.a
return w.m(new B.eA8(w,this.b))},
$S:0}
B.eA8.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eAc.prototype={
$1(d){var w=this.a
return w.m(new B.eA7(w,d))},
$S:6}
B.eA7.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eAd.prototype={
$0(){var w=this.a
return w.m(new B.eA6(w))},
$S:0}
B.eA6.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e9X.prototype={
$0(){},
$S:0}
B.e9Y.prototype={
$0(){},
$S:0}
B.e9Q.prototype={
$0(){var w=this.a
return w.m(new B.e9P(w))},
$S:0}
B.e9P.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7p("hat",0.6)},
$S:0}
B.e9R.prototype={
$0(){var w=this.a
return w.m(new B.e9O(w))},
$S:0}
B.e9O.prototype={
$0(){this.a.y=1.1
B.lb("bell",36,200,0.4)},
$S:0}
B.e9S.prototype={
$0(){var w=this.a
return w.m(new B.e9N(w))},
$S:0}
B.e9N.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aA(Math.max(v,u)-t+1)
w.as=u
B.lb("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
B.e9T.prototype={
$0(){var w=this.a
return w.m(new B.e9M(w,this.b))},
$S:0}
B.e9M.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e9U.prototype={
$1(d){var w=this.a
return w.m(new B.e9L(w,d))},
$S:6}
B.e9L.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e9V.prototype={
$1(d){var w=this.a
return w.m(new B.e9K(w,d))},
$S:6}
B.e9K.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.e9W.prototype={
$1(d){var w=this.a
return w.m(new B.e9J(w,d))},
$S:6}
B.e9J.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cqb.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.cqc.prototype={
$0(){var w=this.a
return B.hiu(this.b,w.c,w.e,w.d)},
$S:0}
B.fK2.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eUJ,v,v,v)
return C.ei(C.a([C.bK(!1,D.fb0,v,v,!0,v,v,new B.fK1(d),v,v)],x.p),v,v,F.mX,w,v,v,v,new C.b7(u,new C.aA(s,1,A.q,-1)),t,v)},
$S:19}
B.fK1.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.cq7.prototype={
$0(){C.eR()
this.a.e.$0()},
$S:0}
B.cq6.prototype={
$0(){C.eR()
this.a.e.$0()},
$S:0}
B.cqd.prototype={
$0(){C.eR()
this.a.e.$0()},
$S:0}
B.cq8.prototype={
$0(){var w=this.a
A.d.W(w.fk$,this.b.bd())
if(w.c!=null)this.c.$0()},
$S:0}
B.cqa.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kW$.a)/1e6,0,0.04)
w.kW$=d
w.fP$=A.o.an(v,1000)
w.lq(u)
if(w.c!=null)w.m(new B.cq9())},
$S:8}
B.cq9.prototype={
$0(){},
$S:0}
B.cdk.prototype={
$0(){var w=this
return B.lb(w.a,w.b,w.c,w.d)},
$S:1}
B.dUj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dUi(w,d))},
$S:z+79}
B.dUi.prototype={
$0(){return this.a.cpE(this.b)},
$S:0}
B.dTM.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1856}
B.dTK.prototype={
$0(){return this.a.id=D.a21},
$S:0}
B.dTL.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a2<1>")
v=C.p4(new C.a2(w,new B.dTJ(this.c),v),6,v.k("J.E"))
w=C.B(v,C.a4(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dTJ.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dTI.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ei(C.a([C.bK(!1,A.qd,w,w,!0,w,w,new B.dTH(d),w,w)],x.p),w,w,F.mX,v,w,w,w,w,D.flw,w)},
$S:19}
B.dTH.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.dU4.prototype={
$0(){return B.qH(this.b,this.a.d,"earth")},
$S:0}
B.dU5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVo()
r=p.z
o=C.a([C.aE(A.c5,C.b3(q,q,q,new B.bdO(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dTT(p),new B.dTU(p),new B.dTV(p),q,q,q,q,q,q,q,new B.dTW(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(A9.aaB)
w=this.b
if(w!=null)o.push(C.ao(8,p.c5U(w),q,q,10,10,q,q))
return new C.es(new C.an(A.W,q,A.b_,A.r,o,q),p.d)},
$S:191}
B.dTU.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:264}
B.dTV.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVo()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:212}
B.dTT.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVo()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:525}
B.dTW.prototype={
$1(d){var w=this.a,v=w.c5X(d.b)
if(v!=null)w.m(new B.dTN(w,v))
else w.m(new B.dTO(w))},
$S:49}
B.dTN.prototype={
$0(){return this.a.awg(this.b)},
$S:0}
B.dTO.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dU6.prototype={
$0(){var w=this.a
w.e.bN(0,A.c3)
w.m(new B.dTS(w,this.b))},
$S:0}
B.dTS.prototype={
$0(){var w=this.a
w.id=D.a21
w.awg(this.b)},
$S:0}
B.dUa.prototype={
$0(){var w=this.a
return w.m(new B.dU3(w))},
$S:0}
B.dU3.prototype={
$0(){var w=this.a
w.fx=null
w.asa(15,w.y,1)},
$S:0}
B.dUb.prototype={
$0(){var w=this.a
return w.m(new B.dU2(w,this.b))},
$S:0}
B.dU2.prototype={
$0(){var w=this.b.b
return this.a.asa(w.a,w.b,w.c)},
$S:0}
B.dUc.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dU1(w,v))},
$S:0}
B.dU1.prototype={
$0(){var w=this.b.a
return this.a.awg(w[A.cI.aA(w.length)])},
$S:0}
B.dUd.prototype={
$1(d){var w=this.a
return w.m(new B.dU0(w,d))},
$S:6}
B.dU0.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dUe.prototype={
$1(d){var w=this.a
return w.m(new B.dU_(w,d))},
$S:6}
B.dU_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dUf.prototype={
$1(d){var w=this.a
return w.m(new B.dTZ(w,d))},
$S:6}
B.dTZ.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dUg.prototype={
$0(){var w=this.a
return w.m(new B.dTY(w))},
$S:0}
B.dTY.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dUh.prototype={
$0(){var w=this.a
return w.m(new B.dTX(w))},
$S:0}
B.dTX.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dU7.prototype={
$0(){var w=this.a
return w.m(new B.dTR(w))},
$S:0}
B.dTR.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dU8.prototype={
$0(){var w=this.a
return w.m(new B.dTQ(w))},
$S:0}
B.dTQ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dU9.prototype={
$0(){var w=this.a
return w.m(new B.dTP(w))},
$S:0}
B.dTP.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dTG.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNQ,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Tb,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:133}
B.dTF.prototype={
$0(){var w=this.a
return w.m(new B.dTE(w))},
$S:0}
B.dTE.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dai.prototype={
$0(){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cUO,w,w),this.a),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
return v},
$S:332}
B.daj.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1857}
B.fbL.prototype={
$0(){return D.dvf},
$S:z+81}
B.fbM.prototype={
$0(){return D.dTH},
$S:z+82}
B.fbN.prototype={
$0(){return D.dvh},
$S:z+83}
B.fbO.prototype={
$0(){return D.dpD},
$S:z+84}
B.fbP.prototype={
$0(){return D.dvd},
$S:z+85}
B.fbQ.prototype={
$0(){return D.dRO},
$S:z+86}
B.fbR.prototype={
$0(){return D.dRM},
$S:z+87}
B.eAZ.prototype={
$0(){return C.a5(this.a,!1).lL()},
$S:0}
B.eB_.prototype={
$0(){var w=this.a
return w.m(new B.eAY(w))},
$S:0}
B.eAY.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaQT()+1,16)},
$S:0}
B.eB0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hm3(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aV(18,18)
q=s.d
p=new C.aA(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bfy],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eZ9,n,A.L,n,n,n,n,2,n,n),A.cX,new C.x(s.b,n,D.f3b,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bp(r,r,r,r),n,new C.a7(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.ck,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eAX(d,s),n,n,n,n,n,n,!1,A.a8))}return C.c_(A.fQ,k,A.bs,10,10)},
$S:159}
B.eAX.prototype={
$0(){return C.a5(this.a,!1).c6(C.e6(new B.eAW(this.b),!1,null,x.H))},
$S:0}
B.eAW.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.et1.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.etc.prototype={
$0(){return B.qH(this.b,this.a.d,"solar-system")},
$S:0}
B.etd.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c5,C.b3(v,v,v,new B.bqb(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.et9(u),new B.eta(u),v,v,v,v,v,v,v,new B.etb(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c5Z(w),v,v,10,10,v,v))
return new C.es(new C.an(A.W,v,A.b_,A.r,t,v),u.d)},
$S:191}
B.et9.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:264}
B.eta.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:212}
B.etb.prototype={
$1(d){var w=this.a,v=w.c61(d.b)
if(v!=null)w.aYf(v)},
$S:49}
B.ete.prototype={
$0(){var w=this.a
return w.m(new B.et8(w))},
$S:0}
B.et8.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.etf.prototype={
$0(){return this.a.aYf(this.b)},
$S:0}
B.etg.prototype={
$1(d){var w=this.a
return w.m(new B.et7(w,d))},
$S:6}
B.et7.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eth.prototype={
$1(d){var w=this.a
return w.m(new B.et6(w,d))},
$S:6}
B.et6.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eti.prototype={
$0(){var w=this.a
return w.m(new B.et5(w))},
$S:0}
B.et5.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.etj.prototype={
$0(){var w=this.a
return w.m(new B.et4(w))},
$S:0}
B.et4.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.etk.prototype={
$0(){var w=this.a
return w.m(new B.et3(w))},
$S:0}
B.et3.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.etl.prototype={
$0(){var w=this.a
return w.m(new B.et2(w))},
$S:0}
B.et2.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.et0.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:320}
B.et_.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNQ,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Tb,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:133}
B.esZ.prototype={
$0(){var w=this.a
return w.m(new B.esY(w))},
$S:0}
B.esY.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eVa.prototype={
$0(){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,L.Pu,w,w),this.a),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
return v},
$S:332}
B.eVb.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eVc.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dUn.prototype={
$0(){},
$S:0}
B.dUQ.prototype={
$1(d){return d!=null},
$S:360}
B.dUC.prototype={
$0(){var w=this.a
return w.m(new B.dUt(w,this.b))},
$S:0}
B.dUt.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dUD.prototype={
$0(){var w=this.a
return w.m(new B.dUs(w))},
$S:0}
B.dUs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dUE.prototype={
$0(){var w=this.a
return w.m(new B.dUB(w))},
$S:0}
B.dUB.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dUI.prototype={
$0(){var w=this.a
return w.m(new B.dUA(w))},
$S:0}
B.dUA.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dUJ.prototype={
$1(d){var w=this.a
return w.m(new B.dUz(w,d))},
$S:6}
B.dUz.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dUK.prototype={
$0(){var w=this.a
return w.m(w.gcsP())},
$S:0}
B.dUL.prototype={
$1(d){var w=this.a
return w.m(new B.dUy(w,d))},
$S:6}
B.dUy.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dUM.prototype={
$1(d){var w=this.a
return w.m(new B.dUx(w,d))},
$S:6}
B.dUx.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dUN.prototype={
$1(d){var w=this.a
return w.m(new B.dUw(w,d))},
$S:6}
B.dUw.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dUO.prototype={
$1(d){var w=this.a
return w.m(new B.dUv(w,d))},
$S:6}
B.dUv.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dUP.prototype={
$0(){var w=this.a
return w.m(new B.dUu(w))},
$S:0}
B.dUu.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
return w.m(new B.dUr(w))},
$S:0}
B.dUr.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dUG.prototype={
$0(){var w=this.a
return w.m(new B.dUq(w))},
$S:0}
B.dUq.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dUH.prototype={
$0(){var w=this.a
return w.m(new B.dUp(w))},
$S:0}
B.dUp.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dUm.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bY(0,C.bZ(g,new C.o(D.be8,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yu[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yu[q].b)+" m/s\xb2",g,D.f2y,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dp,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(Z.MF,C.b0(D.yu[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yu[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yu[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yu[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cK(p,8,g,g,f,g,o,g),new C.cK(n-0.5,54,g,e,g,g,m,g),new C.cK(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cK(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rA,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eVU,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d9(v,new B.dUl()))a1.push(D.b35)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:62}
B.dUl.prototype={
$1(d){return d==null},
$S:360}
B.dUo.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a7(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i8,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gh(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f0X,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:62}
B.dUk.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b92(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b8
else u=A.a.t(u,"escapes")?A.aV:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Gh(A.k.D(r.cx.gco()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bA,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aPt,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:62}
B.elW.prototype={
$0(){return B.qH(this.b,this.a.d,"size-compare")},
$S:0}
B.elX.prototype={
$0(){var w=this.a
return w.m(new B.elV(w,this.b))},
$S:0}
B.elV.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.elY.prototype={
$0(){var w=this.a
return w.m(new B.elU(w,this.b))},
$S:0}
B.elU.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eTk.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.ht(A.G,Math.max(2,e*0.18))
u.ai(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.sau(new C.bR(P.ql,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1f,null).aw(0,C.bU(d,e)))
u.ai(d,e,w)},
$S:720}
B.dBT.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dBH.prototype={
$1(d){return d.b},
$S:z+60}
B.dBI.prototype={
$0(){return B.qH(this.b,this.a.d,"black-hole")},
$S:0}
B.dBJ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c5,C.b3(q,q,q,new B.b8r(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dBF(p),q,q,q,q,q,q,q,q,q,new B.dBG(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fnO(t)+" Suns"
t=p.adG("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adG("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gh(s))+" km"),p.adG("TIME",A.k.aa(this.b*100,0)+"%"),p.adG("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e8L)
return new C.es(new C.an(A.W,q,A.b_,A.r,r,q),p.d)},
$S:191}
B.dBG.prototype={
$1(d){return this.a.aYg(d.b)},
$S:23}
B.dBF.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYg(d.b)},
$S:18}
B.dBL.prototype={
$1(d){var w=this.a
return w.m(new B.dBE(w,d))},
$S:6}
B.dBE.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dBM.prototype={
$0(){var w=this.a
return w.m(new B.dBD(w))},
$S:0}
B.dBD.prototype={
$0(){return this.a.r=10},
$S:0}
B.dBN.prototype={
$0(){var w=this.a
return w.m(new B.dBC(w))},
$S:0}
B.dBC.prototype={
$0(){return this.a.r=21},
$S:0}
B.dBO.prototype={
$0(){var w=this.a
return w.m(new B.dBB(w))},
$S:0}
B.dBB.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dBP.prototype={
$0(){var w=this.a
return w.m(new B.dBA(w))},
$S:0}
B.dBA.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dBQ.prototype={
$0(){var w=this.a
return w.m(new B.dBz(w))},
$S:0}
B.dBz.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dBR.prototype={
$0(){var w=this.a
return w.m(new B.dBy(w))},
$S:0}
B.dBy.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dBS.prototype={
$0(){var w=this.a
return w.m(new B.dBx(w))},
$S:0}
B.dBx.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dBK.prototype={
$0(){var w=this.a
return w.m(new B.dBw(w))},
$S:0}
B.dBw.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dSV.prototype={
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
$S:1858}
B.dSL.prototype={
$0(){return B.qH(this.b,this.a.d,"galaxy")},
$S:0}
B.dSM.prototype={
$0(){var w=this.a
return w.m(new B.dSK(w,this.b))},
$S:0}
B.dSK.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Zl()},
$S:0}
B.dSN.prototype={
$0(){var w=this.a
return w.m(new B.dSJ(w))},
$S:0}
B.dSJ.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Zl()}w.csH()},
$S:0}
B.dSO.prototype={
$1(d){var w=this.a
return w.m(new B.dSI(w,d))},
$S:6}
B.dSI.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Zl()},
$S:0}
B.dSP.prototype={
$1(d){var w=this.a
return w.m(new B.dSH(w,d))},
$S:6}
B.dSH.prototype={
$0(){var w=this.a
w.r=this.b
w.Zl()},
$S:0}
B.dSQ.prototype={
$1(d){var w=this.a
return w.m(new B.dSG(w,d))},
$S:6}
B.dSG.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dSR.prototype={
$1(d){var w=this.a
return w.m(new B.dSF(w,d))},
$S:6}
B.dSF.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dSS.prototype={
$0(){var w=this.a
return w.m(new B.dSE(w))},
$S:0}
B.dSE.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dST.prototype={
$0(){var w=this.a
return w.m(new B.dSD(w))},
$S:0}
B.dSD.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dSU.prototype={
$0(){var w=this.a
return w.m(new B.dSC(w))},
$S:0}
B.dSC.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d7r.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1859}
B.ela.prototype={
$0(){return B.qH(this.b,this.a.d,"seasons-moon")},
$S:0}
B.elb.prototype={
$0(){var w=this.a
return w.m(new B.el9(w))},
$S:0}
B.el9.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.elc.prototype={
$0(){var w=this.a
return w.m(new B.el8(w))},
$S:0}
B.el8.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eld.prototype={
$0(){var w=this.a
return w.m(new B.el7(w))},
$S:0}
B.el7.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ele.prototype={
$0(){var w=this.a
return w.m(new B.el6(w))},
$S:0}
B.el6.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.elf.prototype={
$1(d){var w=this.a
return w.m(new B.el5(w,d))},
$S:6}
B.el5.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.elg.prototype={
$1(d){var w=this.a
return w.m(new B.el4(w,d))},
$S:6}
B.el4.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.elh.prototype={
$1(d){var w=this.a
return w.m(new B.el3(w,d))},
$S:6}
B.el3.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eli.prototype={
$1(d){var w=this.a
return w.m(new B.el2(w,d))},
$S:6}
B.el2.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKP.prototype
w.btK=w.q
w=B.aJR.prototype
w.bsK=w.q
w=B.aJS.prototype
w.bsL=w.q
w=B.aJX.prototype
w.bsQ=w.q
w=B.aLE.prototype
w.buF=w.q
w=B.aKN.prototype
w.btI=w.q
w=B.aKW.prototype
w.btR=w.q
w=B.aL1.prototype
w.btX=w.q
w=B.aJV.prototype
w.bsO=w.q
w=B.aKK.prototype
w.btF=w.q
w=B.aKZ.prototype
w.btU=w.q
w=B.aKI.prototype
w.btD=w.q
w=B.aKJ.prototype
w.btE=w.q
w=B.aK8.prototype
w.bt2=w.q
w=B.aJN.prototype
w.bsG=w.q
w=B.aKg.prototype
w.bta=w.q
w=B.awl.prototype
w.bpS=w.q
w=B.awm.prototype
w.bpT=w.q
w=B.aIj.prototype
w.br8=w.q
w=B.aK5.prototype
w.bsZ=w.q
w=B.aKx.prototype
w.bts=w.q
w=B.aKy.prototype
w.btt=w.q
w=B.aJT.prototype
w.bsM=w.q
w=B.aKb.prototype
w.bt5=w.q
w=B.aKG.prototype
w.btB=w.q
w=B.aL9.prototype
w.bu4=w.q
w=B.aKh.prototype
w.btc=w.q
w=B.aKi.prototype
w.btd=w.q
w=B.aKj.prototype
w.bte=w.q
w=B.aKS.prototype
w.btN=w.q
w=B.aKV.prototype
w.btQ=w.q
w=B.aJQ.prototype
w.bsJ=w.q
w=B.aKe.prototype
w.bt8=w.q
w=B.aKR.prototype
w.btM=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aD_.prototype,"gav7","c1f",0)
var r
v(r=B.aBp.prototype,"gc9o","c9p",35)
w(r,"gc1L","aWI",0)
w(B.aBs.prototype,"gc3h","c3i",0)
u(B.aBJ.prototype,"gc3n","c3o",52)
w(r=B.aFZ.prototype,"gcsm","csn",0)
w(r,"gcg4","af5",0)
w(r,"gcdM","cdN",0)
w(r,"gc3m","acG",3)
w(r=B.aCZ.prototype,"gbEi","a8j",3)
w(r,"gcd3","aZV",0)
w(r,"gcgN","afd",3)
t(r,"gc3q","acH",3)
w(B.aDe.prototype,"gbVg","bVh",0)
w(r=B.aCR.prototype,"gcsg","csh",0)
w(r,"gbED","bEE",0)
w(r=B.aBr.prototype,"gb33","ayH",0)
v(r,"gc3w","YJ",54)
w(r,"gc3v","acJ",3)
v(r=B.aCQ.prototype,"gciI","axr",58)
v(r,"gcoV","ayD",15)
w(r,"gbIB","aPu",0)
v(r=B.aCO.prototype,"gczq","aie",15)
t(r,"gc3Q","avI",0)
w(r,"gckZ","cl_",0)
v(r=B.aBV.prototype,"gc3R","c3S",90)
w(r,"gc3T","c3U",0)
t(r=B.a3x.prototype,"gri","a9",0)
v(r,"gcP1","am5",1)
v(r,"gcLw","L7",1)
w(r,"gcRb","bfZ",0)
s(B.ahD.prototype,"gc3Y",0,5,null,["$5"],["q1"],64,0,0)
w(r=B.aBW.prototype,"gc3Z","c4_",0)
w(r,"gcjt","afz",3)
w(r,"gc9E","adT",3)
w(r,"gcqt","agF",3)
w(r=B.aCA.prototype,"gc4f","avN",0)
w(r,"gc4g","aXx",0)
w(r=B.aDr.prototype,"gc5d","c5e",0)
t(r,"gc5b","aXT",0)
w(B.aCK.prototype,"gbHa","ar_",0)
t(B.aD5.prototype,"gc5f","c5g",0)
v(r=B.aC6.prototype,"gc5V","c5W",78)
w(r,"gbLZ","bM_",0)
w(r=B.aC7.prototype,"gcsP","csQ",0)
w(r,"gc6_","c60",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiP,B.Fy,B.uC,B.aQH,B.a2f,B.b8u,B.bZt,B.xI,B.BR,B.nd,B.b9c,B.A3,B.bqS,B.pS,B.qz,B.BV,B.Yt,B.adL,B.a_G,B.C5,B.aaH,B.aaY,B.acT,B.Fl,B.bjR,B.Pd,B.a__,B.aaO,B.abg,B.Fh,B.ac5,B.acA,B.t1,B.b84,B.aQx,B.e8,B.te,B.a9p,B.aat,B.a3x,B.ms,B.b9d,B.fJ,B.m_,B.aV2,B.bsb,B.aGO,B.mv,B.aa9,B.aaa,B.uP,B.Ov,B.xG,B.Ou,B.bs6,B.OX,B.adQ])
u(C.hT,[B.fpY,B.fgJ,B.fn2,B.fn3,B.fpV,B.fpW,B.e2E,B.e2X,B.eiV,B.eis,B.eit,B.eiu,B.eiv,B.eiw,B.eix,B.eiy,B.eiz,B.eiq,B.eir,B.eip,B.eiQ,B.eiR,B.eiS,B.dBY,B.dC_,B.dC2,B.dCd,B.bZu,B.bZv,B.faZ,B.fb_,B.fb0,B.fb7,B.fb8,B.fb9,B.dEv,B.dEc,B.dEw,B.dE7,B.dE2,B.dE4,B.dEa,B.dEn,B.dEl,B.dEm,B.dEk,B.dEh,B.dEj,B.eSP,B.eSw,B.eSD,B.eSM,B.eSq,B.def,B.deg,B.dec,B.ded,B.dee,B.deh,B.dei,B.dej,B.dek,B.del,B.dem,B.den,B.deo,B.dep,B.ehR,B.ehS,B.ehT,B.ehU,B.ehP,B.ehQ,B.eil,B.ehY,B.ei_,B.ehK,B.eih,B.eif,B.eig,B.eie,B.eid,B.ehM,B.etM,B.etK,B.ety,B.etC,B.etx,B.etD,B.etE,B.etI,B.eAn,B.eAt,B.eez,B.eeA,B.eel,B.eem,B.eek,B.eep,B.eer,B.ees,B.ezN,B.ezO,B.ezM,B.ezA,B.ezB,B.ezz,B.ezs,B.ezt,B.ezH,B.ezI,B.ezJ,B.ezK,B.ezL,B.dDE,B.dDF,B.dDG,B.dDx,B.dDA,B.cJe,B.ea2,B.ear,B.ea6,B.eae,B.eaf,B.ead,B.eam,B.ee2,B.ee7,B.edr,B.ed9,B.edl,B.edj,B.edh,B.edi,B.edg,B.dMq,B.dMe,B.dMg,B.dMo,B.dMj,B.dPf,B.dP7,B.dP8,B.dP9,B.d1J,B.d1L,B.d1K,B.dA1,B.dA2,B.dzV,B.dzT,B.cBM,B.dTi,B.dTj,B.dTe,B.dTf,B.d9u,B.d9v,B.dE0,B.dDJ,B.dDS,B.dDT,B.dDY,B.dDZ,B.bKm,B.bKx,B.bKs,B.bKy,B.bKA,B.bKn,B.bKl,B.bKF,B.bKt,B.bKw,B.bKv,B.bKu,B.bFD,B.fBD,B.fBG,B.fBE,B.bFk,B.bFf,B.bFe,B.bFC,B.bFu,B.bFv,B.bFt,B.bFw,B.bF4,B.bF6,B.bF2,B.bF3,B.bEV,B.bEW,B.fba,B.fbb,B.fbc,B.faY,B.fbd,B.faX,B.fbe,B.fb1,B.faW,B.fb2,B.faV,B.fb3,B.faU,B.fb4,B.faS,B.faT,B.fb5,B.faQ,B.faR,B.fb6,B.faP,B.dPw,B.dPx,B.dPm,B.dPi,B.dPv,B.dPA,B.czi,B.fGc,B.fGd,B.e5C,B.e5u,B.dey,B.deB,B.e5V,B.e5G,B.e5Q,B.e5R,B.e5S,B.cdm,B.eEN,B.dOT,B.dOU,B.dOV,B.dOX,B.ebl,B.eA5,B.eAe,B.eAa,B.eAc,B.e9U,B.e9V,B.e9W,B.fK2,B.cqa,B.dUj,B.dTJ,B.dTI,B.dTU,B.dTV,B.dTT,B.dTW,B.dUd,B.dUe,B.dUf,B.eAW,B.et9,B.eta,B.etb,B.etg,B.eth,B.et0,B.eVb,B.eVc,B.dUQ,B.dUJ,B.dUL,B.dUM,B.dUN,B.dUO,B.dUl,B.eTk,B.dBT,B.dBH,B.dBG,B.dBF,B.dBL,B.dSV,B.dSO,B.dSP,B.dSQ,B.dSR,B.d7r,B.elf,B.elg,B.elh,B.eli])
u(C.ke,[B.fpX,B.e2J,B.e2H,B.eiB,B.eiO,B.dE3,B.dEq,B.dKo,B.eSS,B.eST,B.eSv,B.eSI,B.eSJ,B.eSE,B.eSK,B.eSp,B.ehN,B.ehO,B.eik,B.eic,B.ei1,B.eAm,B.eeo,B.ezD,B.dDw,B.dDB,B.eai,B.ee6,B.fqe,B.edd,B.eda,B.edn,B.dmj,B.bEr,B.fl7,B.dzP,B.dzX,B.bKz,B.bKB,B.bKD,B.bKo,B.bKq,B.bFE,B.ciL,B.fBF,B.bFd,B.bFA,B.bFz,B.dPu,B.czj,B.dLi,B.dLg,B.dLa,B.e5w,B.dez,B.deA,B.e5P,B.cdp,B.dCr,B.dCm,B.ebn,B.dU5,B.dTG,B.daj,B.eB0,B.etd,B.et_,B.dUm,B.dUo,B.dUk,B.dBJ])
u(C.ag,[B.UE,B.V5,B.Tv,B.TA,B.MI,B.aFY,B.V4,B.Vk,B.Vw,B.V1,B.Vr,B.Ty,B.UW,B.V0,B.UZ,B.TX,B.Uc,B.Tq,B.Uq,B.Tz,B.ahB,B.Ud,B.aw2,B.TV,B.UJ,B.UL,B.VC,B.Uk,B.Tw,B.Ub,B.UX,B.Va,B.Vv,B.UV,B.Ur,B.Vy,B.Vj,B.Us,B.Vb,B.Tu,B.Uo,B.V7])
u(C.ah,[B.bik,B.aKP,B.aJR,B.aJX,B.aBJ,B.aLE,B.aKN,B.aKW,B.aL1,B.aKK,B.aKZ,B.aJV,B.aKI,B.aKJ,B.aCO,B.bhP,B.aK8,B.aJN,B.aKg,B.bhG,B.awl,B.bvh,B.aIj,B.aK5,B.aKx,B.aKy,B.aL9,B.aKb,B.aJT,B.bhQ,B.aCK,B.aD5,B.bj3,B.aKG,B.aKh,B.bj7,B.aKV,B.aKj,B.aKS,B.aJQ,B.aKe,B.aKR])
u(C.j3,[B.e2C,B.e2D,B.e2P,B.e2Q,B.e2L,B.e2K,B.e2M,B.e2I,B.e2N,B.e2G,B.e2O,B.e2F,B.e2T,B.e2S,B.e2U,B.e2R,B.e2V,B.e2W,B.e2Y,B.eiU,B.eiW,B.eiX,B.eiD,B.eiC,B.eiA,B.eiJ,B.eiK,B.eiG,B.eiL,B.eiF,B.eiM,B.eiN,B.eiE,B.eiP,B.eiI,B.eiT,B.eiH,B.dCk,B.dCj,B.dBX,B.dCl,B.dBZ,B.dC0,B.dC1,B.dC3,B.dBU,B.dBV,B.dBW,B.dCa,B.dCb,B.dCc,B.dC9,B.dCe,B.dC8,B.dCf,B.dC7,B.dCg,B.dC6,B.dCh,B.dC5,B.dCi,B.dC4,B.dE9,B.dE8,B.dEd,B.dE5,B.dE6,B.dEe,B.dEf,B.dEg,B.dEb,B.dE1,B.dEp,B.dEo,B.dEr,B.dEs,B.dEt,B.dEi,B.dEu,B.cJH,B.dKm,B.dKl,B.dKn,B.fbp,B.fbq,B.fbr,B.fbC,B.fbE,B.fbF,B.fbG,B.fbH,B.fbI,B.fbJ,B.fbK,B.fbs,B.fbt,B.fbu,B.fbv,B.fbw,B.fbx,B.fby,B.fbz,B.fbA,B.fbB,B.fbD,B.eSR,B.eSQ,B.eSy,B.eSx,B.eSt,B.eSs,B.eSu,B.eSr,B.eSG,B.eSF,B.eSH,B.eSz,B.eSL,B.eSC,B.eSN,B.eSB,B.eSO,B.eSA,B.ehW,B.ehL,B.ehV,B.ehH,B.ehX,B.ehZ,B.ehI,B.ehJ,B.eij,B.eii,B.ei9,B.eia,B.eib,B.ei5,B.ei6,B.ei4,B.ei7,B.ei3,B.ei8,B.ei2,B.ei0,B.deb,B.etL,B.etn,B.etm,B.etw,B.etF,B.etv,B.etG,B.etu,B.etH,B.ett,B.ets,B.etJ,B.etr,B.etz,B.etq,B.etA,B.etp,B.etB,B.eto,B.eAl,B.eAk,B.eAo,B.eAj,B.eAp,B.eAi,B.eAq,B.eAh,B.eAr,B.eAg,B.eAs,B.eAf,B.een,B.eej,B.eei,B.eeh,B.eet,B.eeg,B.eeu,B.eef,B.eev,B.eee,B.eew,B.eex,B.eey,B.eed,B.eeq,B.ezC,B.ezr,B.ezE,B.ezy,B.ezF,B.ezx,B.ezG,B.ezw,B.ezv,B.ezu,B.ezq,B.ezp,B.ezo,B.dDD,B.dDu,B.dDv,B.dDy,B.dDz,B.dDC,B.eag,B.ea7,B.eah,B.eaj,B.eac,B.eak,B.eab,B.eal,B.eaa,B.ea9,B.ean,B.ea8,B.eao,B.ea5,B.eap,B.ea4,B.eaq,B.ea3,B.edX,B.edY,B.ee4,B.ee3,B.ee5,B.ee1,B.ee8,B.ee0,B.ee9,B.ee_,B.eea,B.eeb,B.edZ,B.eec,B.edq,B.ed7,B.ed8,B.edc,B.edb,B.edm,B.edk,B.ede,B.edo,B.edf,B.edp,B.dMp,B.dMf,B.dMd,B.dMk,B.dMi,B.dMl,B.dMh,B.dMm,B.dMn,B.dPe,B.dP2,B.dP1,B.dP3,B.dP6,B.dP5,B.dP4,B.dPa,B.dPb,B.dPc,B.dPd,B.dA0,B.dA_,B.dzQ,B.dzW,B.dzU,B.dzY,B.dzS,B.dzZ,B.dzR,B.dTh,B.dTg,B.dT8,B.dTc,B.dTb,B.dTd,B.dTa,B.dT9,B.dE_,B.dDR,B.dDQ,B.dDU,B.dDP,B.dDV,B.dDO,B.dDW,B.dDN,B.dDX,B.dDM,B.dDL,B.dDK,B.bKC,B.bKE,B.bKp,B.bKr,B.bFh,B.bFi,B.bFg,B.bFj,B.bFl,B.bF7,B.bF8,B.bF9,B.bFa,B.bFb,B.bFc,B.bFB,B.bEL,B.bFr,B.bFs,B.bFp,B.bFq,B.bFn,B.bFo,B.bFx,B.bFm,B.bFy,B.bEM,B.bF5,B.bES,B.bET,B.bER,B.bEU,B.bEQ,B.bEX,B.bEY,B.bEZ,B.bF_,B.bEP,B.bF0,B.bEO,B.bF1,B.bEN,B.dPn,B.dPy,B.dPz,B.dPl,B.dPk,B.dPj,B.dPs,B.dPq,B.dPr,B.dPt,B.dPo,B.dPp,B.dPB,B.dPC,B.dPD,B.dPE,B.dPF,B.dLj,B.dLh,B.dLf,B.dLe,B.dLd,B.dLc,B.dLb,B.dL7,B.dL6,B.dL9,B.dL8,B.e5B,B.e5D,B.e5s,B.e5t,B.e5v,B.e5x,B.e5y,B.e5z,B.e5A,B.e5U,B.e5W,B.e5M,B.e5I,B.e5N,B.e5O,B.e5H,B.e5L,B.e5K,B.e5J,B.e5T,B.fbS,B.fbT,B.fbU,B.fbV,B.fbW,B.fbX,B.fbY,B.fbZ,B.cdo,B.cdn,B.eEO,B.eEK,B.eEJ,B.eEM,B.eEL,B.dRB,B.dRC,B.dRw,B.dRy,B.dRz,B.dRx,B.dRA,B.dCs,B.dCp,B.dCo,B.dCq,B.dCn,B.dOS,B.dOR,B.dOQ,B.dOP,B.dOW,B.dOO,B.dON,B.dOY,B.dOM,B.dOZ,B.dOL,B.dP_,B.dP0,B.dOK,B.ebh,B.ebi,B.ebg,B.ebj,B.ebf,B.ebm,B.ebo,B.ebk,B.ebp,B.elO,B.elP,B.elM,B.elN,B.elL,B.elQ,B.elR,B.elS,B.elT,B.eA9,B.eAb,B.eA8,B.eA7,B.eAd,B.eA6,B.e9X,B.e9Y,B.e9Q,B.e9P,B.e9R,B.e9O,B.e9S,B.e9N,B.e9T,B.e9M,B.e9L,B.e9K,B.e9J,B.cqb,B.cqc,B.fK1,B.cq7,B.cq6,B.cqd,B.cq8,B.cq9,B.cdk,B.dUi,B.dTM,B.dTK,B.dTL,B.dTH,B.dU4,B.dTN,B.dTO,B.dU6,B.dTS,B.dUa,B.dU3,B.dUb,B.dU2,B.dUc,B.dU1,B.dU0,B.dU_,B.dTZ,B.dUg,B.dTY,B.dUh,B.dTX,B.dU7,B.dTR,B.dU8,B.dTQ,B.dU9,B.dTP,B.dTF,B.dTE,B.dai,B.fbL,B.fbM,B.fbN,B.fbO,B.fbP,B.fbQ,B.fbR,B.eAZ,B.eB_,B.eAY,B.eAX,B.et1,B.etc,B.ete,B.et8,B.etf,B.et7,B.et6,B.eti,B.et5,B.etj,B.et4,B.etk,B.et3,B.etl,B.et2,B.esZ,B.esY,B.eVa,B.dUn,B.dUC,B.dUt,B.dUD,B.dUs,B.dUE,B.dUB,B.dUI,B.dUA,B.dUz,B.dUK,B.dUy,B.dUx,B.dUw,B.dUv,B.dUP,B.dUu,B.dUF,B.dUr,B.dUG,B.dUq,B.dUH,B.dUp,B.elW,B.elX,B.elV,B.elY,B.elU,B.dBI,B.dBE,B.dBM,B.dBD,B.dBN,B.dBC,B.dBO,B.dBB,B.dBP,B.dBA,B.dBQ,B.dBz,B.dBR,B.dBy,B.dBS,B.dBx,B.dBK,B.dBw,B.dSL,B.dSM,B.dSK,B.dSN,B.dSJ,B.dSI,B.dSH,B.dSG,B.dSF,B.dSS,B.dSE,B.dST,B.dSD,B.dSU,B.dSC,B.ela,B.elb,B.el9,B.elc,B.el8,B.eld,B.el7,B.ele,B.el6,B.el5,B.el4,B.el3,B.el2])
t(B.bvw,B.aKP)
t(B.aD_,B.bvw)
u(C.mG,[B.bfj,B.b9u,B.bqi,B.b8b,B.boX,B.boo,B.b8R,B.boq,B.bsl,B.bfh,B.bqd,B.bjE,B.br3,B.b9b,B.bgb,B.bjF,B.bgT,B.bcd,B.b8g,B.bdH,B.ahD,B.b7o,B.btm,B.adE,B.bfm,B.bfB,B.bty,B.bop,B.bjS,B.bdO,B.bqb,B.b92,B.bpK,B.b8r,B.bdE,B.bp_])
t(B.aJS,B.aJR)
t(B.aBp,B.aJS)
t(B.bvf,B.aJX)
t(B.aBs,B.bvf)
u(C.m3,[B.JN,B.a_t,B.IJ])
u(C.au,[B.bpk,B.adV,B.acP,B.Pm,B.bpO,B.a7q,B.bbz,B.b5d,B.dz,B.eM,B.aus,B.fg,B.EO])
t(B.aFZ,B.aLE)
t(B.bfg,C.oE)
t(B.aCZ,B.aKN)
t(B.biV,B.aKW)
t(B.aDe,B.aL1)
t(B.bvv,B.aKK)
t(B.aCR,B.bvv)
t(B.bvD,B.aKZ)
t(B.bj_,B.bvD)
t(B.bve,B.aJV)
t(B.aBr,B.bve)
t(B.bvt,B.aKI)
t(B.biz,B.bvt)
t(B.bvu,B.aKJ)
t(B.aCQ,B.bvu)
t(B.aBV,B.aK8)
t(B.bht,B.aJN)
t(B.bi0,B.aKg)
t(B.awm,B.awl)
t(B.ahC,B.awm)
t(B.aBW,B.bvh)
t(B.b7p,B.aIj)
t(B.bhN,B.aK5)
t(B.bvm,B.aKx)
t(B.bim,B.bvm)
t(B.bvn,B.aKy)
t(B.aCA,B.bvn)
t(B.bvE,B.aL9)
t(B.aDr,B.bvE)
t(B.bvi,B.aKb)
t(B.bhW,B.bvi)
t(B.bvd,B.aJT)
t(B.bhy,B.bvd)
t(B.bvs,B.aKG)
t(B.bix,B.bvs)
t(B.aKi,B.aKh)
t(B.aC6,B.aKi)
t(B.bvA,B.aKV)
t(B.biU,B.bvA)
t(B.bvk,B.aKj)
t(B.aC7,B.bvk)
t(B.bvy,B.aKS)
t(B.biR,B.bvy)
t(B.bvc,B.aJQ)
t(B.bhx,B.bvc)
t(B.bvj,B.aKe)
t(B.bhZ,B.bvj)
t(B.bvx,B.aKR)
t(B.biQ,B.bvx)
w(B.aKP,C.c9)
w(B.bvw,B.mv)
w(B.aJR,C.c9)
w(B.aJS,B.mv)
w(B.aJX,C.c9)
w(B.bvf,B.mv)
w(B.aLE,C.eT)
w(B.aKN,C.c9)
w(B.aKW,C.c9)
w(B.aL1,C.c9)
w(B.aJV,C.c9)
w(B.bve,B.mv)
w(B.aKK,C.c9)
w(B.bvv,B.mv)
w(B.aKZ,C.c9)
w(B.bvD,B.mv)
w(B.aKI,C.c9)
w(B.bvt,B.mv)
w(B.aKJ,C.c9)
w(B.bvu,B.mv)
w(B.aK8,C.c9)
w(B.aJN,C.c9)
w(B.aKg,C.c9)
w(B.awl,C.c9)
w(B.awm,B.mv)
w(B.aIj,C.c9)
v(B.bvh,C.ew)
w(B.aK5,C.c9)
w(B.aKx,C.c9)
w(B.bvm,B.mv)
w(B.aKy,C.c9)
w(B.bvn,B.mv)
w(B.aJT,C.c9)
w(B.bvd,B.mv)
w(B.aKb,C.c9)
w(B.bvi,B.mv)
w(B.aKG,C.c9)
w(B.bvs,B.mv)
w(B.aL9,C.c9)
w(B.bvE,B.mv)
w(B.aKh,C.c9)
w(B.aKi,B.mv)
w(B.aKj,C.c9)
w(B.bvk,B.mv)
w(B.aKS,C.c9)
w(B.bvy,B.mv)
w(B.aKV,C.c9)
w(B.bvA,B.mv)
w(B.aJQ,C.c9)
w(B.bvc,B.mv)
w(B.aKe,C.c9)
w(B.bvj,B.mv)
w(B.aKR,C.c9)
w(B.bvx,B.mv)})()
C.jT(b.typeUniverse,JSON.parse('{"UE":{"ag":[],"r":[]},"bik":{"ah":["UE"]},"V5":{"ag":[],"r":[]},"aD_":{"ah":["V5"]},"bfj":{"aB":[]},"Tv":{"ag":[],"r":[]},"aBp":{"ah":["Tv"]},"TA":{"ag":[],"r":[]},"aBs":{"ah":["TA"]},"b9u":{"aB":[]},"adV":{"au":[],"r":[]},"acP":{"au":[],"r":[]},"aFY":{"ag":[],"r":[]},"MI":{"ag":[],"r":[]},"aBJ":{"ah":["MI"]},"bpk":{"au":[],"r":[]},"Pm":{"au":[],"r":[]},"bqi":{"aB":[]},"bpO":{"au":[],"r":[]},"b8b":{"aB":[]},"aFZ":{"ah":["aFY"]},"boX":{"aB":[]},"boo":{"aB":[]},"b8R":{"aB":[]},"boq":{"aB":[]},"bsl":{"aB":[]},"V4":{"ag":[],"r":[]},"bfg":{"aB":[]},"aCZ":{"ah":["V4"]},"bfh":{"aB":[]},"Vk":{"ag":[],"r":[]},"Vw":{"ag":[],"r":[]},"biV":{"ah":["Vk"]},"bqd":{"aB":[]},"aDe":{"ah":["Vw"]},"V1":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"Ty":{"ag":[],"r":[]},"aCR":{"ah":["V1"]},"bjE":{"aB":[]},"bj_":{"ah":["Vr"]},"br3":{"aB":[]},"aBr":{"ah":["Ty"]},"b9b":{"aB":[]},"UW":{"ag":[],"r":[]},"V0":{"ag":[],"r":[]},"biz":{"ah":["UW"]},"bgb":{"aB":[]},"aCQ":{"ah":["V0"]},"bjF":{"aB":[]},"UZ":{"ag":[],"r":[]},"TX":{"ag":[],"r":[]},"Uc":{"ag":[],"r":[]},"aCO":{"ah":["UZ"]},"bgT":{"aB":[]},"bhP":{"ah":["TX"]},"aBV":{"ah":["Uc"]},"bcd":{"aB":[]},"Tq":{"ag":[],"r":[]},"Uq":{"ag":[],"r":[]},"Tz":{"ag":[],"r":[]},"bht":{"ah":["Tq"]},"b8g":{"aB":[]},"bi0":{"ah":["Uq"]},"bdH":{"aB":[]},"bhG":{"ah":["Tz"]},"ahD":{"aB":[]},"ahB":{"ag":[],"r":[]},"ahC":{"ah":["ahB"]},"Ud":{"ag":[],"r":[]},"aw2":{"ag":[],"r":[]},"aBW":{"ah":["Ud"],"ew":[]},"b7p":{"ah":["aw2"]},"b7o":{"aB":[]},"TV":{"ag":[],"r":[]},"bhN":{"ah":["TV"]},"btm":{"aB":[]},"adE":{"aB":[]},"UJ":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"bim":{"ah":["UJ"]},"bfm":{"aB":[]},"aCA":{"ah":["UL"]},"bfB":{"aB":[]},"a7q":{"au":[],"r":[]},"VC":{"ag":[],"r":[]},"Uk":{"ag":[],"r":[]},"Tw":{"ag":[],"r":[]},"Ub":{"ag":[],"r":[]},"UX":{"ag":[],"r":[]},"Va":{"ag":[],"r":[]},"Vv":{"ag":[],"r":[]},"UV":{"ag":[],"r":[]},"aDr":{"ah":["VC"]},"bty":{"aB":[]},"bhW":{"ah":["Uk"]},"bop":{"aB":[]},"bhy":{"ah":["Tw"]},"bhQ":{"ah":["Ub"]},"bjS":{"aB":[]},"aCK":{"ah":["UX"]},"aD5":{"ah":["Va"]},"bj3":{"ah":["Vv"]},"bix":{"ah":["UV"]},"bbz":{"au":[],"r":[]},"b5d":{"au":[],"r":[]},"dz":{"au":[],"r":[]},"eM":{"au":[],"r":[]},"aus":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"EO":{"au":[],"r":[]},"Ur":{"ag":[],"r":[]},"aC6":{"ah":["Ur"]},"bdO":{"aB":[]},"Vy":{"ag":[],"r":[]},"bj7":{"ah":["Vy"]},"Vj":{"ag":[],"r":[]},"Us":{"ag":[],"r":[]},"Vb":{"ag":[],"r":[]},"biU":{"ah":["Vj"]},"bqb":{"aB":[]},"aC7":{"ah":["Us"]},"b92":{"aB":[]},"biR":{"ah":["Vb"]},"bpK":{"aB":[]},"Tu":{"ag":[],"r":[]},"Uo":{"ag":[],"r":[]},"V7":{"ag":[],"r":[]},"bhx":{"ah":["Tu"]},"b8r":{"aB":[]},"bhZ":{"ah":["Uo"]},"bdE":{"aB":[]},"biQ":{"ah":["V7"]},"bp_":{"aB":[]}}'))
C.Pu(b.typeUniverse,JSON.parse('{"mv":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lQ<w?>"),e8:w("d3"),G:w("w"),l:w("bq<n,n>"),J:w("bq<n,N>"),I:w("bq<n,H>"),R:w("eW<n>"),Z:w("a0"),M:w("P<d9>"),f5:w("P<a2b>"),gh:w("P<aQx>"),h:w("P<a2f>"),V:w("P<ac>"),O:w("P<w>"),ey:w("P<S>"),dh:w("P<S3>"),aJ:w("P<ay<aC>>"),w:w("P<a0>"),Q:w("P<ai<w>>"),B:w("P<ai<S3>>"),gO:w("P<ai<ai<N>>>"),bj:w("P<ai<n>>"),b:w("P<ai<N>>"),fA:w("P<ai<H?>>"),D:w("P<a3<n,aC>>"),g:w("P<u>"),bz:w("P<te>"),ds:w("P<a7N>"),v:w("P<hn>"),U:w("P<+(u,N)>"),ev:w("P<+(u,H)>"),K:w("P<+(n,n)>"),fT:w("P<+(N,r)>"),E:w("P<+(H,n)>"),u:w("P<+(H,H)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,N,N,H)>"),o:w("P<+(n,H,n,H)>"),d:w("P<+(n,n,N,N,a3<n,N>)>"),_:w("P<uC>"),q:w("P<cP>"),fQ:w("P<a9p>"),s:w("P<n>"),cF:w("P<ar>"),X:w("P<vW>"),F:w("P<aa9>"),p:w("P<r>"),bL:w("P<aat>"),fH:w("P<le>"),aq:w("P<b84>"),a_:w("P<aaH>"),cS:w("P<aaO>"),cB:w("P<nd>"),ba:w("P<aaY>"),d9:w("P<OX>"),bi:w("P<abg>"),eW:w("P<BV>"),fY:w("P<Yt>"),aX:w("P<Fh>"),ea:w("P<ac5>"),gB:w("P<acA>"),ed:w("P<Pd>"),g4:w("P<bjR>"),aS:w("P<a__>"),ac:w("P<acT>"),cd:w("P<C5>"),fr:w("P<adL>"),e4:w("P<a_G>"),r:w("P<adQ>"),au:w("P<aGO>"),f7:w("P<R>"),n:w("P<N>"),t:w("P<H>"),dS:w("P<aB?>"),fs:w("P<te?>"),d4:w("P<n?>"),bN:w("P<H?>"),gJ:w("cq<ahC>"),A:w("cq<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a3<n,@>"),f:w("a3<@,@>"),bd:w("K<e8,n>"),dv:w("K<n,n>"),fR:w("K<+(N,r),r>"),m:w("iz"),gA:w("yM"),gD:w("vw"),P:w("co"),C:w("aC"),W:w("te"),dV:w("e8"),g7:w("BA"),N:w("n"),bO:w("ar"),k:w("ko"),Y:w("bn<N>"),cL:w("aaa"),gj:w("cw<n>"),aC:w("cw<H?>"),dg:w("e7<qz>"),e3:w("b8u"),a2:w("BR"),f3:w("qz"),es:w("Fl"),gV:w("mU"),y:w("R"),i:w("N"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a3<@,@>?"),cK:w("aC?"),az:w("pL?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUZ=new C.d9(0,0.85)
D.frc=new C.x("Tap once to start the chain",null,L.T4,null,null,null,null,null,null,null,null,null)
D.aUx=new C.bH(D.aUZ,null,null,D.frc,null)
D.aUP=new C.d9(0,0.1)
D.aVT=new B.aQH(0,0,0)
D.JG=new B.aQH(0,0.5,0)
D.aWp=new C.aA(A.b8,1,A.q,-1)
D.aXT=new C.aY(0,1/0,0,290)
D.aY_=new C.aY(16,1/0,16,1/0)
D.aZc=new C.o(A.bo,null,null,null,null,null,A.a6)
D.eTO=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new C.x("\u26a1",null,D.eTO,null,null,null,null,null,null,null,null,null)
D.b2C=new C.cp(A.A,null,null,D.ftw,null)
D.aON=new C.G(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aON,null,A.L,null,null,null,null,null,null,null)
D.e2y=new C.C(A.nR,D.fjE,null)
D.b2L=new C.cp(A.A,null,null,D.e2y,null)
D.fnh=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kw,null,A.L,null,null,null,null,null,null,null)
D.e2C=new C.C(A.nR,D.fnh,null)
D.b35=new C.cp(A.A,null,null,D.e2C,null)
D.f3w=new C.G(!0,A.j9,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frX=new C.x("Draw anywhere",null,D.f3w,null,null,null,null,null,null,null,null,null)
D.b39=new C.cp(A.A,null,null,D.frX,null)
D.fa5=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aON,null,A.L,null,null,null,null,null,null,null)
D.e3i=new C.C(A.F9,D.fa5,null)
D.b3s=new C.cp(A.A,null,null,D.e3i,null)
D.aaU=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b5W=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b6J=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Vj=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b6O=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b6T=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b6Y=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Vl=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b8_=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b84=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b8l=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b9o=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acd=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b9Q=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b9W=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.Ac=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.baC=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.acB=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bbc=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bbj=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.acM=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.VY=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bbO=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.acV=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.Ei=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.ad7=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.W8=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bdy=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bdA=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bdE=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bdN=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.ady=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.be8=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Es=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bfd=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bfl=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bfo=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bfy=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bfB=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bfI=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uX=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.aen=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bgL=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bhu=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bhX=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bil=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.aeO=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bmt=new C.b9(11e6)
D.bnu=new C.Q(0,0,8,6)
D.afJ=new C.Q(0,0,9,0)
D.bo1=new C.Q(10,0,10,4)
D.bo6=new C.Q(10,10,10,6)
D.boe=new C.Q(10,34,10,26)
D.bom=new C.Q(10,6,10,2)
D.Xz=new C.Q(10,6,10,4)
D.boo=new C.Q(10,8,0,10)
D.boZ=new C.Q(12,8,8,8)
D.bp3=new C.Q(14,0,14,22)
D.bp5=new C.Q(14,0,14,30)
D.ag9=new C.Q(14,0,14,6)
D.agg=new C.Q(14,10,8,12)
D.bpC=new C.Q(14,8,14,6)
D.bq3=new C.Q(16,4,16,28)
D.bqd=new C.Q(16,8,16,12)
D.bsh=new C.Q(26,12,26,58)
D.bt4=new C.Q(4,4,6,2)
D.bt6=new C.Q(4,4,8,2)
D.btH=new C.Q(8,14,8,12)
D.btO=new C.Q(8,40,8,30)
D.btS=new C.Q(8,6,16,0)
D.btT=new C.Q(8,6,8,8)
D.buc=new C.Q(0,0,1.5,0)
D.aVF=new C.Gt(26,"saturation")
D.buu=new C.yu(A.cU,D.aVF,null,A.aaS)
D.f9c=new C.x("REACTION LAB",null,W.aPo,null,null,null,null,A.a2,null,1,null,null)
D.buA=new C.bD(1,A.bi,D.f9c,null)
D.f0r=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new C.x("CORE PROTOCOL",null,D.f0r,null,null,null,null,null,null,null,null,null)
D.buN=new C.bD(1,A.bi,D.fcf,null)
D.fcX=new C.x("\ud83d\udce2 NGMY Ads",null,A.qc,null,null,null,null,A.eC,null,1,null,null)
D.bvs=new C.bD(1,A.bi,D.fcX,null)
D.f7W=new C.x("Wire selected",null,A.ho,null,null,null,null,null,null,null,null,null)
D.bvG=new C.bD(1,A.bi,D.f7W,null)
D.ajo=new C.a0(62712,"MaterialIcons",!1)
D.bAo=new C.a0(62878,"MaterialIcons",!1)
D.ZQ=new C.a0(62908,"MaterialIcons",!1)
D.bAr=new C.a0(62918,"MaterialIcons",!1)
D.bAs=new C.a0(62931,"MaterialIcons",!1)
D.bAv=new C.a0(62951,"MaterialIcons",!1)
D.bAL=new C.a0(63064,"MaterialIcons",!1)
D.bAN=new C.a0(63070,"MaterialIcons",!1)
D.xO=new C.a0(63128,"MaterialIcons",!1)
D.FT=new C.a0(63726,"MaterialIcons",!1)
D.bC5=new C.a0(983122,"MaterialIcons",!1)
D.bCj=new C.a0(983247,"MaterialIcons",!1)
D.bCv=new C.a0(983415,"MaterialIcons",!1)
D.bCw=new C.a0(983417,"MaterialIcons",!1)
D.bCx=new C.a0(983442,"MaterialIcons",!1)
D.bCy=new C.a0(983443,"MaterialIcons",!1)
D.akK=new C.a0(983467,"MaterialIcons",!1)
D.bCE=new C.a0(983501,"MaterialIcons",!1)
D.bCP=new C.a0(983616,"MaterialIcons",!1)
D.bCQ=new C.a0(983624,"MaterialIcons",!1)
D.bD1=new C.a0(983776,"MaterialIcons",!1)
D.bDi=new C.a0(984561,"MaterialIcons",!1)
D.bDT=new C.ae(A.qY,24,A.aM,null,null,null)
D.bEC=new C.ae(A.N9,null,A.ad,null,null,null)
D.bF9=new C.ae(A.ml,21,A.ad,null,null,null)
D.bC4=new C.a0(983117,"MaterialIcons",!1)
D.bGu=new C.ae(D.bC4,28,A.c,null,null,null)
D.bGK=new C.ae(A.jg,18,null,null,null,null)
D.bIu=new C.ae(A.e4,21,A.cj,null,null,null)
D.bIJ=new C.ae(A.mm,null,A.ad,null,null,null)
D.bIT=new C.ae(A.a_I,21,A.ad,null,null,null)
D.bJI=new C.ae(A.eA,17,A.ad,null,null,null)
D.am8=new C.ae(A.eA,19,null,null,null,null)
D.mq=new C.ae(A.vq,21,A.ad,null,null,null)
D.bLa=new C.ae(A.MC,null,A.ad,null,null,null)
D.bMj=new C.ae(A.jg,21,A.ad,null,null,null)
D.bN9=new C.ae(A.fa,20,A.az,null,null,null)
D.bNP=new C.ae(A.dW,null,A.aM,null,null,null)
D.bO9=new C.ae(A.jW,null,A.az,null,null,null)
D.d7Z=w([A.dq,A.d6,A.dq],x.O)
D.bQQ=new C.a7(A.a3,A.a7,A.x,D.d7Z,null,null)
D.cNE=w([A.bR,A.bn],x.O)
D.bQY=new C.a7(A.b0,A.b6,A.x,D.cNE,null,null)
D.bR8=new C.a7(A.b0,A.b6,A.x,A.awb,null,null)
D.cO_=w([A.hi,A.fh],x.O)
D.bRh=new C.a7(A.b0,A.b6,A.x,D.cO_,null,null)
D.an9=new C.a7(A.b0,A.b6,A.x,K.a1p,null,null)
D.cLt=w([A.oh,A.i5],x.O)
D.bRV=new C.a7(A.b0,A.b6,A.x,D.cLt,null,null)
D.cNm=w([A.eu,A.aB],x.O)
D.ang=new C.a7(A.b0,A.b6,A.x,D.cNm,null,null)
D.d2C=w([A.dz,A.iO,A.bn],x.O)
D.bSb=new C.a7(A.a3,A.a7,A.x,D.d2C,null,null)
D.d2I=w([A.ju,A.cE],x.O)
D.bSv=new C.a7(A.b0,A.b6,A.x,D.d2I,null,null)
D.ckw=w([A.bR,A.dz],x.O)
D.bSE=new C.a7(A.a3,A.a7,A.x,D.ckw,null,null)
D.awP=w([A.eu,M.mU],x.O)
D.bSM=new C.a7(A.b0,A.b6,A.x,D.awP,null,null)
D.bT1=new C.a7(A.b0,A.b6,A.x,I.anC,null,null)
D.bbV=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b5j=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cIW=w([D.bbV,D.b5j],x.O)
D.bTe=new C.a7(A.b0,A.b6,A.x,D.cIW,null,null)
D.bTP=new C.a7(A.ax,A.aC,A.x,A.a1m,null,null)
D.bge=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.ddg=w([D.bge,A.Ka],x.O)
D.bTW=new C.a7(A.b0,A.b6,A.x,D.ddg,null,null)
D.cW5=w([A.aB,A.w],x.O)
D.bU0=new C.a7(A.b0,A.b6,A.x,D.cW5,null,null)
D.bU3=new C.a7(A.b0,A.b6,A.x,U.awf,null,null)
D.bfF=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bgn=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cx3=w([A.KS,D.bfF,D.bgn],x.O)
D.bUc=new C.a7(A.b0,A.b6,A.x,D.cx3,null,null)
D.ckQ=w([A.d9,A.fv],x.O)
D.bUr=new C.a7(A.b0,A.b6,A.x,D.ckQ,null,null)
D.bUx=new C.a7(A.ax,A.aC,A.x,A.a29,null,null)
D.anE=w([0,2,4,6,7,9,11],x.t)
D.bV7=w([0,4,7],x.t)
D.anI=w([0,4,7,12],x.t)
D.bV8=w([0,4,7,4],x.t)
D.avW=w([A.h0,A.pq],x.O)
D.avv=w([A.hv,A.cZ],x.O)
D.atX=w([A.by,A.dO],x.O)
D.cFx=w([A.aM,A.d9],x.O)
D.cLP=w([A.cj,A.eM],x.O)
D.d3O=w([A.bV,A.lA],x.O)
D.atr=w([A.ct,A.jO],x.O)
D.cKs=w([A.bJ,A.aK],x.O)
D.bVt=w([D.avW,D.avv,A.a1t,D.atX,D.cFx,D.cLP,A.av3,D.d3O,D.atr,D.cKs],x.Q)
D.c_7=w([120,220,380],x.t)
D.c2S=w([12,16,19,24],x.t)
D.c30=w([1400,800,450,2400],x.t)
D.c7d=w([0,0.6,1],x.n)
D.cbl=w([250,450,900,1500],x.t)
D.b68=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bg_=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bea=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bj6=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bdo=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.asH=w([D.b68,D.bg_,D.bea,D.bj6,D.bdo],x.O)
D.evf=new C.y("type","Typewriter")
D.eot=new C.y("bounce","Bounce")
D.ew1=new C.y("wave","Wave")
D.ex5=new C.y("zoom","Zoom")
D.crV=w([D.evf,D.eot,D.ew1,A.a5f,I.aKL,D.ex5,I.aKN],x.K)
D.cs6=w([50,25,75],x.t)
D.cxz=w([0,5,10,15,18,20,25],x.t)
D.eq5=new C.y("fish","Fish")
D.eq7=new C.y("fly","Fireflies")
D.eor=new C.y("bird","Birds")
D.cBJ=w([D.eq5,D.eq7,D.eor],x.K)
D.cFN=w([900,500,250,1600],x.t)
D.cJk=w([0.78,1],x.n)
D.atY=w([0,2,4,7,9,12,14,16],x.t)
D.cJS=w([A.by,A.bz,A.b7,A.by],x.O)
D.au2=w(["A","T","C","G"],x.s)
D.cJT=w(["A","U","C","G"],x.s)
D.a1j=w([A.ay,A.cn,A.bo,A.aV,A.nH],x.O)
D.cL9=w([A.aB,A.ay,A.ct,A.cn,A.bo,A.cx,A.c8,A.bz,A.Ka],x.O)
D.a1n=w([0.04,0.17,0.3],x.n)
D.cLL=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GF=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eEO=new B.uC("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eEU=new B.uC("Medium engine","A good all-rounder.",0.3,0.9)
D.eET=new B.uC("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GG=w([D.eEO,D.eEU,D.eET],x._)
D.eew=new C.y(6,"Easy")
D.ef5=new C.y(8,"Medium")
D.eaY=new C.y(10,"Hard")
D.cMz=w([D.eew,D.ef5,D.eaY],x.E)
D.aum=w([0.55,0.78,1],x.n)
D.cO4=w([0.93,0.975,1],x.n)
D.aux=w([A.c,A.h1,A.pd,A.aB],x.O)
D.fwu=new B.xG("Moon",1737,4291941851)
D.fwr=new B.xG("Earth",6371,4281908728)
D.fwv=new B.xG("Neptune",24622,4284524026)
D.fww=new B.xG("Saturn",58232,4294829706)
D.fws=new B.xG("Jupiter",69911,4294677052)
D.fwx=new B.xG("Sun",696340,4294688548)
D.fwy=new B.xG("Sirius A",119e4,4290763774)
D.fwp=new B.xG("Arcturus",179e5,4294818420)
D.fwq=new B.xG("Betelgeuse",531e6,4294472049)
D.fwt=new B.xG("UY Scuti",667e6,4293870660)
D.Pj=w([D.fwu,D.fwr,D.fwv,D.fww,D.fws,D.fwx,D.fwy,D.fwp,D.fwq,D.fwt],C.ax("P<xG>"))
D.eAq=new C.bw("glow","Glow",A.ZS)
D.ey8=new C.bw("rainbow","Rainbow",A.n9)
D.eyu=new C.bw("stars","Stars",A.i_)
D.exT=new C.bw("sparks","Sparks",A.dW)
D.ezK=new C.bw("fire","Fire",A.vr)
D.cPO=w([D.eAq,D.ey8,D.eyu,D.exT,D.ezK],x.c)
D.auB=w([A.bo,A.ay,A.cn,A.d6],x.O)
D.cQN=w([0.2,1],x.n)
D.eEL=new B.uC("Radar","Shows your height above the ground.",0.1,0)
D.eEM=new B.uC("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eEJ=new B.uC("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.auJ=w([D.eEL,D.eEM,D.eEJ],x._)
D.ez1=new C.bw("attract","Attract",A.y6)
D.eyP=new C.bw("scare","Scare",A.qW)
D.ey1=new C.bw("food","Food",A.tQ)
D.bCa=new C.a0(983158,"MaterialIcons",!1)
D.ezk=new C.bw("hunt","Hunt",D.bCa)
D.cRp=w([D.ez1,D.eyP,D.ey1,D.ezk],x.c)
D.cRO=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cS2=w([47,100,220,470,1000],x.n)
D.av0=w([0,2,4,7,9],x.t)
D.HI={volts:0}
D.a32=new C.bq(D.HI,[3],x.J)
D.I3=new C.eu(["b","battery",0.2,0.3,D.a32])
D.dYX={on:0}
D.dhV=new C.bq(D.dYX,[1],x.J)
D.CK=new C.eu(["s","switch",0.5,0.3,D.dhV])
D.eCU=new C.eu(["l","bulb",0.8,0.3,A.iW])
D.cNL=w([D.I3,D.CK,D.eCU],x.d)
D.CJ=new C.cL(["b",0,"s",0])
D.eBV=new C.cL(["s",1,"l",0])
D.aKR=new C.cL(["l",1,"b",1])
D.d2N=w([D.CJ,D.eBV,D.aKR],x.o)
D.cNe=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eai=new B.ms("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cNL,D.d2N,D.cNe)
D.aEZ={ohms:0}
D.aCz=new C.bq(D.aEZ,[220],x.J)
D.eCn=new C.eu(["r","resistor",0.5,0.3,D.aCz])
D.eD8=new C.eu(["d","led",0.8,0.3,A.iW])
D.d5J=w([D.I3,D.eCn,D.eD8],x.d)
D.eBi=new C.cL(["b",0,"r",0])
D.eBP=new C.cL(["r",1,"d",0])
D.eBo=new C.cL(["d",1,"b",1])
D.ddK=w([D.eBi,D.eBP,D.eBo],x.o)
D.d67=w(["led","diode","indicator"],x.s)
D.eap=new B.ms("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d5J,D.ddK,D.d67)
D.a4j={level:0}
D.dhj=new C.bq(D.a4j,[0.2],x.J)
D.eCt=new C.eu(["p","pot",0.5,0.3,D.dhj])
D.eCv=new C.eu(["m","motor",0.8,0.3,A.iW])
D.cO2=w([D.I3,D.eCt,D.eCv],x.d)
D.eBh=new C.cL(["b",0,"p",0])
D.eBL=new C.cL(["p",1,"m",0])
D.eBI=new C.cL(["m",1,"b",1])
D.d9R=w([D.eBh,D.eBL,D.eBI],x.o)
D.d2w=w(["fan","motor","spin","dimmer"],x.s)
D.eag=new B.ms("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cO2,D.d9R,D.d2w)
D.a3_=new C.bq(D.a4j,[0.9],x.J)
D.aKY=new C.eu(["s","solar",0.25,0.3,D.a3_])
D.aKX=new C.eu(["l","bulb",0.75,0.3,A.iW])
D.cQv=w([D.aKY,D.aKX],x.d)
D.eBS=new C.cL(["s",0,"l",0])
D.eBH=new C.cL(["l",1,"s",1])
D.cOL=w([D.eBS,D.eBH],x.o)
D.dap=w(["solar","sun","without battery","no battery","free"],x.s)
D.eaj=new B.ms("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cQv,D.cOL,D.dap)
D.eDb=new C.eu(["c","crank",0.25,0.3,D.a3_])
D.d0V=w([D.eDb,D.aKX],x.d)
D.eBl=new C.cL(["c",0,"l",0])
D.eBG=new C.cL(["l",1,"c",1])
D.d1s=w([D.eBl,D.eBG],x.o)
D.d13=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eaf=new B.ms("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d0V,D.d1s,D.d13)
D.dhi=new C.bq(D.a4j,[0.7],x.J)
D.eCy=new C.eu(["t","turbine",0.25,0.3,D.dhi])
D.eCl=new C.eu(["m","motor",0.75,0.3,A.iW])
D.cWI=w([D.eCy,D.eCl],x.d)
D.eC2=new C.cL(["t",0,"m",0])
D.eBJ=new C.cL(["m",1,"t",1])
D.cVK=w([D.eC2,D.eBJ],x.o)
D.d_O=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eac=new B.ms("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cWI,D.cVK,D.d_O)
D.aCw=new C.bq(D.HI,[9],x.J)
D.a5i=new C.eu(["b","battery",0.2,0.3,D.aCw])
D.aKW=new C.eu(["r","radio",0.8,0.3,A.iW])
D.daY=w([D.a5i,D.CK,D.aKW],x.d)
D.eBX=new C.cL(["s",1,"r",0])
D.aKS=new C.cL(["r",1,"b",1])
D.bUR=w([D.CJ,D.eBX,D.aKS],x.o)
D.d9E=w(["radio","music","listen"],x.s)
D.eao=new B.ms("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.daY,D.bUR,D.d9E)
D.dim=new C.bq(D.HI,[12],x.J)
D.aKV=new C.eu(["b","battery",0.2,0.3,D.dim])
D.eCV=new C.eu(["t","tv",0.8,0.3,A.iW])
D.cNM=w([D.aKV,D.CK,D.eCV],x.d)
D.eBY=new C.cL(["s",1,"t",0])
D.aKT=new C.cL(["t",1,"b",1])
D.d3R=w([D.CJ,D.eBY,D.aKT],x.o)
D.daW=w(["tv","television","screen","watch"],x.s)
D.ea9=new B.ms("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cNM,D.d3R,D.daW)
D.eCL=new C.eu(["z","buzzer",0.8,0.3,A.iW])
D.cup=w([D.I3,D.CK,D.eCL],x.d)
D.eBZ=new C.cL(["s",1,"z",0])
D.eCg=new C.cL(["z",1,"b",1])
D.cJ6=w([D.CJ,D.eBZ,D.eCg],x.o)
D.d83=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eal=new B.ms("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cup,D.cJ6,D.d83)
D.eCu=new C.eu(["h","heater",0.8,0.3,A.iW])
D.cZx=w([D.a5i,D.CK,D.eCu],x.d)
D.eBU=new C.cL(["s",1,"h",0])
D.eBw=new C.cL(["h",1,"b",1])
D.cJO=w([D.CJ,D.eBU,D.eBw],x.o)
D.ceC=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eaa=new B.ms("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cZx,D.cJO,D.ceC)
D.eCX=new C.eu(["s","solar",0.2,0.25,D.a3_])
D.dir=new C.bq(D.aEZ,[100],x.J)
D.eD_=new C.eu(["r","resistor",0.55,0.25,D.dir])
D.eD6=new C.eu(["c","capacitor",0.85,0.25,A.iW])
D.eCq=new C.eu(["q","resistor",0.55,0.6,D.aCz])
D.eCY=new C.eu(["d","led",0.85,0.6,A.iW])
D.d3t=w([D.eCX,D.eD_,D.eD6,D.eCq,D.eCY],x.d)
D.eBT=new C.cL(["s",0,"r",0])
D.eBO=new C.cL(["r",1,"c",0])
D.eBn=new C.cL(["c",1,"s",1])
D.eBm=new C.cL(["c",0,"q",0])
D.eBN=new C.cL(["q",1,"d",0])
D.eBp=new C.cL(["d",1,"c",1])
D.cTR=w([D.eBT,D.eBO,D.eBn,D.eBm,D.eBN,D.eBp],x.o)
D.d0h=w(["capacitor","store","charge","flash"],x.s)
D.ean=new B.ms("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d3t,D.cTR,D.d0h)
D.eCB=new C.eu(["b","battery",0.15,0.3,D.a32])
D.eDc=new C.eu(["l1","bulb",0.5,0.3,A.iW])
D.eCI=new C.eu(["l2","bulb",0.85,0.3,A.iW])
D.cM2=w([D.eCB,D.eDc,D.eCI],x.d)
D.eBg=new C.cL(["b",0,"l1",0])
D.eBD=new C.cL(["l1",1,"l2",0])
D.eBE=new C.cL(["l2",1,"b",1])
D.cXl=w([D.eBg,D.eBD,D.eBE],x.o)
D.daI=w(["series","two bulbs","dim"],x.s)
D.ead=new B.ms("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cM2,D.cXl,D.daI)
D.dZ8={volts:0,charge:1}
D.diw=new C.bq(D.dZ8,[1.5,0],x.J)
D.eD4=new C.eu(["b","battery",0.75,0.3,D.diw])
D.cLu=w([D.aKY,D.eD4],x.d)
D.eBR=new C.cL(["s",0,"b",0])
D.eBk=new C.cL(["b",1,"s",1])
D.cU6=w([D.eBR,D.eBk],x.o)
D.d0o=w(["charge","rechargeable","flat","recharge"],x.s)
D.eab=new B.ms("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cLu,D.cU6,D.d0o)
D.dil=new C.bq(D.HI,[4.5],x.J)
D.eCw=new C.eu(["b","battery",0.2,0.3,D.dil])
D.aKU=new C.eu(["p","phone",0.8,0.3,A.iW])
D.cWy=w([D.eCw,D.CK,D.aKU],x.d)
D.eBW=new C.cL(["s",1,"p",0])
D.a5h=new C.cL(["p",1,"b",1])
D.d75=w([D.CJ,D.eBW,D.a5h],x.o)
D.d8r=w(["phone","charger","usb","mobile"],x.s)
D.eah=new B.ms("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cWy,D.d75,D.d8r)
D.eCi=new C.eu(["f","fan",0.8,0.3,A.iW])
D.c6P=w([D.I3,D.eCi],x.d)
D.eBf=new C.cL(["b",0,"f",0])
D.eBu=new C.cL(["f",1,"b",1])
D.cKg=w([D.eBf,D.eBu],x.o)
D.d2v=w(["fan","cool","air","wind"],x.s)
D.eaq=new B.ms("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c6P,D.cKg,D.d2v)
D.eCP=new C.eu(["b","battery",0.15,0.2,D.a32])
D.eCj=new C.eu(["a","ammeter",0.5,0.2,A.iW])
D.eCh=new C.eu(["l","bulb",0.85,0.2,A.iW])
D.eCR=new C.eu(["v","voltmeter",0.5,0.6,A.iW])
D.d0H=w([D.eCP,D.eCj,D.eCh,D.eCR],x.d)
D.eBd=new C.cL(["b",0,"a",0])
D.eBc=new C.cL(["a",1,"l",0])
D.eC4=new C.cL(["v",0,"l",0])
D.eC5=new C.cL(["v",1,"l",1])
D.cTY=w([D.eBd,D.eBc,D.aKR,D.eC4,D.eC5],x.o)
D.ddJ=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eam=new B.ms("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d0H,D.cTY,D.ddJ)
D.eDf=new C.eu(["b","battery",0.15,0.2,D.aCw])
D.eCA=new C.eu(["t","tv",0.55,0.2,A.iW])
D.aCx=new C.bq(D.HI,[5],x.J)
D.eCo=new C.eu(["c","buck",0.4,0.5,D.aCx])
D.eCC=new C.eu(["p","phone",0.8,0.5,A.iW])
D.cRQ=w([D.eDf,D.eCA,D.eCo,D.eCC],x.d)
D.eBj=new C.cL(["b",0,"t",0])
D.aKP=new C.cL(["b",0,"c",0])
D.aKQ=new C.cL(["c",1,"p",0])
D.cWv=w([D.eBj,D.aKT,D.aKP,D.aKQ,D.a5h],x.o)
D.cQ4=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eae=new B.ms("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cRQ,D.cWv,D.cQ4)
D.eCp=new C.eu(["c","buck",0.5,0.3,D.aCx])
D.cJF=w([D.aKV,D.eCp,D.aKU],x.d)
D.cOb=w([D.aKP,D.aKQ,D.a5h],x.o)
D.ci_=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ea8=new B.ms("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cJF,D.cOb,D.ci_)
D.eCG=new C.eu(["d","diode",0.5,0.3,A.iW])
D.cXy=w([D.a5i,D.eCG,D.aKW],x.d)
D.eBe=new C.cL(["b",0,"d",0])
D.eBq=new C.cL(["d",1,"r",0])
D.cwU=w([D.eBe,D.eBq,D.aKS],x.o)
D.cPL=w(["diode","protect","backwards","one way"],x.s)
D.eak=new B.ms("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cXy,D.cwU,D.cPL)
D.Pm=w([D.eai,D.eap,D.eag,D.eaj,D.eaf,D.eac,D.eao,D.ea9,D.eal,D.eaa,D.ean,D.ead,D.eab,D.eah,D.eaq,D.eam,D.eae,D.ea8,D.eak],C.ax("P<ms>"))
D.fRW=new B.Fy("Moon",1.62,A.dz,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fRU=new B.Fy("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.fRX=new B.Fy("Mercury",3.7,A.jN,"Mercury is small, so its gravity is like Mars.")
D.fRR=new B.Fy("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fRT=new B.Fy("Earth",9.81,A.aV,"On Earth gravity is strong, and the air also slows you down.")
D.fRV=new B.Fy("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fRS=new B.Fy("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.r5=w([D.fRW,D.fRU,D.fRX,D.fRR,D.fRT,D.fRV,D.fRS],C.ax("P<Fy>"))
D.cTP=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1D=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cUt=w([0.2,0.5,0.8],x.n)
D.bAG=new C.a0(63040,"MaterialIcons",!1)
D.eyT=new C.bw("peg","Peg",D.bAG)
D.ey5=new C.bw("bar","Bar",S.Bq)
D.eyx=new C.bw("erase","Erase",A.MG)
D.cUE=w([D.eyT,D.ey5,D.eyx],x.c)
D.eHB=new C.cP(A.bh,A.J,4)
D.cUO=w([D.eHB],x.q)
D.avf=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aTF=new B.JN(0,"accordion")
D.cKy=w([A.ji,A.Br,A.Bf],x.w)
D.cRh=w(["Mail","SMS","Ad"],x.s)
D.cL1=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fQ8=new B.A3(D.aTF,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.avW,D.cKy,D.cRh,D.cL1)
D.a8F=new B.JN(1,"flip")
D.d0b=w([A.pJ,A0.G4,A.tR],x.w)
D.cWe=w(["Unlock","Verify","Secure"],x.s)
D.cJB=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fQ7=new B.A3(D.a8F,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.avv,D.d0b,D.cWe,D.cJB)
D.aTG=new B.JN(2,"towers")
D.cV5=w([A.y1,A.pO,A.hK],x.w)
D.cUK=w(["Save","Grow","Earn"],x.s)
D.cxI=w(["","",""],x.s)
D.fQ9=new B.A3(D.aTG,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1t,D.cV5,D.cUK,D.cxI)
D.a8G=new B.JN(3,"assemble")
D.d16=w([A.nc,A.h8,A.dW],x.w)
D.cQG=w(["Launch","Charge","Shine"],x.s)
D.cYK=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fQb=new B.A3(D.a8G,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.atX,D.d16,D.cQG,D.cYK)
D.aTH=new B.JN(4,"carousel")
D.d0W=w([A.b7,A.fi],x.O)
D.cRr=w([A.ml,A.ajU,A.a_B],x.w)
D.cMp=w(["Explore","Discover","Learn"],x.s)
D.cWD=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fQ6=new B.A3(D.aTH,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d0W,D.cRr,D.cMp,D.cWD)
D.aTI=new B.JN(5,"burst")
D.cUG=w([A.j4,A.t2],x.O)
D.cKX=w([A.la,A.mk,A.hZ],x.w)
D.cLh=w(["Cheer","Win","Love"],x.s)
D.cNk=w(["Make some noise","First place","Share the joy"],x.s)
D.fQa=new B.A3(D.aTI,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cUG,D.cKX,D.cLh,D.cNk)
D.avg=w([D.fQ8,D.fQ7,D.fQ9,D.fQb,D.fQ6,D.fQa],C.ax("P<A3>"))
D.eyV=new C.bw("skin","Skin",A.ajV)
D.eAd=new C.bw("muscle","Muscles",A.MS)
D.ezY=new C.bw("organ","Organs",A.hZ)
D.bA7=new C.a0(62747,"MaterialIcons",!1)
D.eA1=new C.bw("bone","Skeleton",D.bA7)
D.eAj=new C.bw("vessel","Blood vessels",A.pQ)
D.cVa=w([D.eyV,D.eAd,D.ezY,D.eA1,D.eAj],x.c)
D.eEN=new B.uC("Simple legs","Light. Land gently.",0.15,0.2)
D.eEP=new B.uC("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eES=new B.uC("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.BO=w([D.eEN,D.eEP,D.eES],x._)
D.cWL=w([1.77,3.55,7.15,16.7],x.n)
D.cZ8=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.euJ=new C.y("spiral","Spiral")
D.eeu=new C.y("barred","Barred spiral")
D.epB=new C.y("elliptical","Elliptical")
D.cZN=w([D.euJ,D.eeu,D.epB],x.K)
D.eAW=new C.cL(["beat",0.18,0.28,0])
D.eC_=new C.cL(["burst",0.7,0.2,0])
D.eCa=new C.cL(["delay",0.45,0.5,1])
D.eBK=new C.cL(["ripple",0.75,0.6,3])
D.cQq=w([D.eAW,D.eC_,D.eCa,D.eBK],x.e)
D.a5a=new C.y(2,3)
D.d_C=w([N.ll,K.I2,D.a5a],x.u)
D.fPo=new B.Fl("First spark","A clock lights a burst and a ripple",D.cQq,D.d_C)
D.eBt=new C.cL(["beat",0.15,0.3,1])
D.eAB=new C.cL(["ripple",0.62,0.15,0])
D.eC6=new C.cL(["delay",0.4,0.45,0])
D.eB9=new C.cL(["ripple",0.7,0.45,0])
D.eAS=new C.cL(["delay",0.4,0.7,1])
D.eBM=new C.cL(["shake",0.75,0.75,0])
D.dbG=w([D.eBt,D.eAB,D.eC6,D.eB9,D.eAS,D.eBM],x.e)
D.ebR=new C.y(2,4)
D.aKF=new C.y(4,5)
D.cTG=w([N.ll,K.I2,D.a5a,D.ebR,D.aKF],x.u)
D.fPq=new B.Fl("Heartbeat","Two thumps, then a shake",D.dbG,D.cTG)
D.eB0=new C.cL(["dice",0.15,0.7,1])
D.eCc=new C.cL(["echo",0.4,0.7,0])
D.eB7=new C.cL(["comet",0.7,0.5,4])
D.eC0=new C.cL(["burst",0.72,0.2,1])
D.eBr=new C.cL(["burst",0.3,0.25,0])
D.eB1=new C.cL(["pop",0.55,0.85,0])
D.ceb=w([D.eB0,D.eCc,D.eB7,D.eC0,D.eBr,D.eB1],x.e)
D.ebh=new C.y(1,3)
D.ebi=new C.y(1,4)
D.aKD=new C.y(0,5)
D.d0R=w([N.ll,K.vX,D.ebh,D.ebi,D.aKD],x.u)
D.fPp=new B.Fl("Fireworks","Dice launch comets that burst in colour",D.ceb,D.d0R)
D.eB4=new C.cL(["beat",0.15,0.2,2])
D.eBA=new C.cL(["chance",0.4,0.2,0])
D.eAY=new C.cL(["ball",0.7,0.12,3])
D.eAL=new C.cL(["chance",0.4,0.5,1])
D.eCb=new C.cL(["ball",0.3,0.08,1])
D.eAE=new C.cL(["ripple",0.7,0.55,3])
D.c7e=w([D.eB4,D.eBA,D.eAY,D.eAL,D.eCb,D.eAE],x.e)
D.a5b=new C.y(3,4)
D.ebS=new C.y(2,5)
D.cu9=w([N.ll,K.vX,K.a59,D.a5b,D.ebS],x.u)
D.fPn=new B.Fl("Rain","Balls fall at random and splash",D.c7e,D.cu9)
D.eBB=new C.cL(["beat",0.12,0.45,2])
D.eC1=new C.cL(["toggle",0.38,0.2,0])
D.eC8=new C.cL(["wash",0.7,0.15,4])
D.eB_=new C.cL(["count3",0.38,0.45,0])
D.eC3=new C.cL(["burst",0.72,0.4,0])
D.eBs=new C.cL(["light",0.55,0.7,1])
D.eAM=new C.cL(["pop",0.8,0.8,4])
D.d3r=w([D.eBB,D.eC1,D.eC8,D.eB_,D.eC3,D.eBs,D.eAM],x.e)
D.ecg=new C.y(3,6)
D.cal=w([N.ll,K.vX,K.a59,D.a5b,D.aKD,D.ecg],x.u)
D.fPl=new B.Fl("Disco","A beat drives lights, washes and bursts",D.d3r,D.cal)
D.eCf=new C.cL(["button",0.12,0.2,0])
D.eAG=new C.cL(["delay",0.34,0.2,1])
D.eCe=new C.cL(["light",0.56,0.2,1])
D.eC7=new C.cL(["delay",0.56,0.45,1])
D.eBC=new C.cL(["ball",0.34,0.6,0])
D.eAK=new C.cL(["delay",0.34,0.8,1])
D.eAA=new C.cL(["burst",0.7,0.8,5])
D.bVw=w([D.eCf,D.eAG,D.eCe,D.eC7,D.eBC,D.eAK,D.eAA],x.e)
D.eee=new C.y(5,6)
D.d8c=w([N.ll,K.vX,D.a5a,D.a5b,D.aKF,D.eee],x.u)
D.fPm=new B.Fl("Domino","Tap the button and watch it run down the line",D.bVw,D.d8c)
D.avz=w([D.fPo,D.fPq,D.fPp,D.fPn,D.fPl,D.fPm],C.ax("P<Fl>"))
D.cZV=w([0.05,0.15,0.25],x.n)
D.d_8=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d_N=w([1.5,3,4.5,9,12],x.n)
D.exE=new C.bw("dice","Dice",A.mj)
D.eyD=new C.bw("coin","Coin",L.xV)
D.eAe=new C.bw("num","Number",A.y4)
D.d_X=w([D.exE,D.eyD,D.eAe],x.c)
D.d0_=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fwz=new B.Ov("Moon",1.62,0,4291941851)
D.fwA=new B.Ov("Mars",3.71,0.01,4294472049)
D.fwB=new B.Ov("Earth",9.81,1,4281908728)
D.fwD=new B.Ov("Jupiter",24.79,1.4,4294677052)
D.fwC=new B.Ov("Sun",274,2,4294688548)
D.yu=w([D.fwz,D.fwA,D.fwB,D.fwD,D.fwC],C.ax("P<Ov>"))
D.avF=w([A.cj,A.aM,A.b8,A.aV,A.by,A.bV,A.ct,A.hv],x.O)
D.dXC={H:0}
D.dhW=new C.bq(D.dXC,[2],x.I)
D.djt=new B.t1("Hydrogen","H\u2082",D.dhW,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dXD={H:0,Cl:1}
D.di7=new C.bq(D.dXD,[1,1],x.I)
D.djv=new B.t1("Hydrogen chloride","HCl",D.di7,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dXE={H:0,O:1}
D.dhF=new C.bq(D.dXE,[2,1],x.I)
D.djw=new B.t1("Water","H\u2082O",D.dhF,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dXR={N:0,H:1}
D.div=new C.bq(D.dXR,[1,3],x.I)
D.djE=new B.t1("Ammonia","NH\u2083",D.div,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4i={C:0,H:1}
D.dip=new C.bq(D.a4i,[1,4],x.I)
D.djx=new B.t1("Methane","CH\u2084",D.dip,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dXF={H:0,S:1}
D.dgO=new C.bq(D.dXF,[2,1],x.I)
D.djD=new B.t1("Hydrogen sulfide","H\u2082S",D.dgO,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dXW={O:0}
D.dit=new C.bq(D.dXW,[2],x.I)
D.djF=new B.t1("Oxygen","O\u2082",D.dit,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dXQ={N:0}
D.dhX=new C.bq(D.dXQ,[2],x.I)
D.dju=new B.t1("Nitrogen","N\u2082",D.dhX,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dXq={C:0,O:1}
D.diB=new C.bq(D.dXq,[1,2],x.I)
D.djB=new B.t1("Carbon dioxide","CO\u2082",D.diB,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aEW={C:0,H:1,O:2}
D.dgA=new C.bq(D.aEW,[1,2,1],x.I)
D.djC=new B.t1("Formaldehyde","CH\u2082O",D.dgA,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dio=new C.bq(D.a4i,[2,4],x.I)
D.djz=new B.t1("Ethene","C\u2082H\u2084",D.dio,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.din=new C.bq(D.a4i,[2,6],x.I)
D.djy=new B.t1("Ethane","C\u2082H\u2086",D.din,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dgB=new C.bq(D.aEW,[1,4,1],x.I)
D.djA=new B.t1("Methanol","CH\u2083OH",D.dgB,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a1T=w([D.djt,D.djv,D.djw,D.djE,D.djx,D.djD,D.djF,D.dju,D.djB,D.djC,D.djz,D.djy,D.djA],C.ax("P<t1>"))
D.d0X=w([A.bV,A.aV,A.dN,A.b8],x.O)
D.d1R=w([],x.h)
D.d1U=w([],x.B)
D.a21=w([],x.F)
D.e41=new B.e8("battery","Battery","\ud83d\udd0b",A.b8,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e47=new B.e8("solar","Solar panel","\u2600\ufe0f",A.cn,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e4M=new B.e8("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e4o=new B.e8("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aV,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e3U=new B.e8("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e4m=new B.e8("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e4R=new B.e8("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e4y=new B.e8("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e4c=new B.e8("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e4O=new B.e8("fuse","Fuse","\ud83e\uddef",A.cj,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e3M=new B.e8("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e4z=new B.e8("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e4B=new B.e8("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e49=new B.e8("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e4d=new B.e8("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e4v=new B.e8("buzzer","Buzzer","\ud83d\udd14",A.bV,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e42=new B.e8("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e4q=new B.e8("capacitor","Capacitor","\ud83e\udeab",A.cs,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e4i=new B.e8("radio","Radio","\ud83d\udcfb",A.nH,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e4f=new B.e8("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b7,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e3T=new B.e8("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e4_=new B.e8("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e45=new B.e8("fan","Fan","\ud83c\udf00",A.aV,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e4T=new B.e8("speaker","Speaker","\ud83d\udd0a",A.bV,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e4I=new B.e8("clock","Digital clock","\u23f0",A.b8,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e4l=new B.e8("calculator","Calculator","\ud83e\uddee",A.K4,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e3Z=new B.e8("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cs,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e4S=new B.e8("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e4V=new B.e8("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e3P=new B.e8("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e4W=new B.e8("kettle","Kettle","\ud83e\uded6",A.oo,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e3X=new B.e8("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e48=new B.e8("lights","Party lights","\ud83c\udf84",A.nH,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e4j=new B.e8("fridge","Fridge","\ud83e\uddca",A.hi,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e3R=new B.e8("washer","Washing machine","\ud83e\udee7",A.cs,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e4J=new B.e8("blender","Blender","\ud83e\udd64",A.cj,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e4g=new B.e8("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e3W=new B.e8("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e4k=new B.e8("torch","Torch","\ud83d\udd26",A.bK,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e4G=new B.e8("neon","Neon sign","\ud83e\udea7",A.bV,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e3S=new B.e8("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e4A=new B.e8("doorbell","Doorbell","\ud83d\udd14",A.cn,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e44=new B.e8("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e4u=new B.e8("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e4L=new B.e8("heartmon","Heart monitor","\ud83e\ude7a",A.h_,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e3Q=new B.e8("aquarium","Aquarium","\ud83d\udc20",A.b7,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e4p=new B.e8("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e4x=new B.e8("discoball","Disco ball","\ud83e\udea9",A.nH,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e4Q=new B.e8("robot","Robot","\ud83e\udd16",A.aV,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e3O=new B.e8("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e4U=new B.e8("ledstrip","LED strip","\ud83c\udf08",A.bV,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e4F=new B.e8("pump","Water pump","\ud83d\udeb0",A.aV,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e4r=new B.e8("hairdryer","Hair dryer","\ud83d\udca8",A.j4,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e4D=new B.e8("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e3Y=new B.e8("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e4P=new B.e8("tablet","iPad Pro M5","\ud83d\udcf2",A.cs,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e3L=new B.e8("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h_,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e4h=new B.e8("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e4a=new B.e8("appletv","Apple TV 4K","\ud83d\udcfa",A.bR,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e4w=new B.e8("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t_,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e3N=new B.e8("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e40=new B.e8("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e4N=new B.e8("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cx,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e4s=new B.e8("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bo,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e4n=new B.e8("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e4E=new B.e8("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e4b=new B.e8("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b8,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e4t=new B.e8("honor","Honor Magic V5","\ud83d\udcf1",A.cs,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e4C=new B.e8("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e4H=new B.e8("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e3K=new B.e8("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e4e=new B.e8("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cx,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e46=new B.e8("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b7,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e3V=new B.e8("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e43=new B.e8("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e4K=new B.e8("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.PL=w([D.e41,D.e47,D.e4M,D.e4o,D.e3U,D.e4m,D.e4R,D.e4y,D.e4c,D.e4O,D.e3M,D.e4z,D.e4B,D.e49,D.e4d,D.e4v,D.e42,D.e4q,D.e4i,D.e4f,D.e3T,D.e4_,D.e45,D.e4T,D.e4I,D.e4l,D.e3Z,D.e4S,D.e4V,D.e3P,D.e4W,D.e3X,D.e48,D.e4j,D.e3R,D.e4J,D.e4g,D.e3W,D.e4k,D.e4G,D.e3S,D.e4A,D.e44,D.e4u,D.e4L,D.e3Q,D.e4p,D.e4x,D.e4Q,D.e3O,D.e4U,D.e4F,D.e4r,D.e4D,D.e3Y,D.e4P,D.e3L,D.e4h,D.e4a,D.e4w,D.e3N,D.e40,D.e4N,D.e4s,D.e4n,D.e4E,D.e4b,D.e4t,D.e4C,D.e4H,D.e3K,D.e4e,D.e46,D.e3V,D.e43,D.e4K],C.ax("P<e8>"))
D.d2g=w([0,0.46,0.82],x.n)
D.d2r=w([5,10,15,25,45,60],x.t)
D.d2L=w([-0.045,0.03,-0.015],x.n)
D.d38=w([0.9,0.97,1],x.n)
D.aw3=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tZ=w([0.05,0.2,0.35],x.n)
D.cLl=w([D.Es,D.Es],x.O)
D.cQm=w([A.ED,A.M],x.O)
D.cPp=w([A.fC,A.hu],x.O)
D.cJy=w([A.fi,A.nG],x.O)
D.c6N=w([A.lA,A.dv],x.O)
D.aw4=w([D.cLl,D.cQm,D.cPp,D.cJy,D.c6N],x.Q)
D.fwn=new B.uP("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fwo=new B.uP("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fwf=new B.uP("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fwm=new B.uP("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fwk=new B.uP("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fwg=new B.uP("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fwl=new B.uP("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fwh=new B.uP("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fwj=new B.uP("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fwi=new B.uP("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BU=w([D.fwn,D.fwo,D.fwf,D.fwm,D.fwk,D.fwg,D.fwl,D.fwh,D.fwj,D.fwi],C.ax("P<uP>"))
D.bd3=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d4h=w([D.Es,D.bd3,D.acB,A.aca],x.O)
D.b_q=new C.ac(0,A.G,A.hG,A.dC,6)
D.d59=w([D.b_q],x.V)
D.eaG=new C.y(0,"AND")
D.ebj=new C.y(1,"Adder")
D.ebT=new C.y(2,"Blinker")
D.ech=new C.y(3,"Memory")
D.d5U=w([D.eaG,D.ebj,D.ebT,D.ech],x.E)
D.awg=w([-104,0,104],x.n)
D.awh=w([-14,3],x.n)
D.d6m=w([-16,16],x.n)
D.awi=w([-22,22],x.n)
D.d6u=w([-8,0,8],x.n)
D.d6v=w([-8,8],x.n)
D.awl=w([-92,0,92],x.n)
D.d6Q=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eEK=new B.uC("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eER=new B.uC("Medium tank","Balanced.",0.35,1)
D.eEQ=new B.uC("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.PZ=w([D.eEK,D.eER,D.eEQ],x._)
D.ng=w([0.04,0.2,0.36],x.n)
D.awv=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ezX=new C.bw(D.aTF,"Fold",L.akV)
D.ez8=new C.bw(D.a8F,"Flip",A.FI)
D.bAq=new C.a0(62889,"MaterialIcons",!1)
D.eAc=new C.bw(D.aTG,"Rise",D.bAq)
D.al8=new C.a0(983870,"MaterialIcons",!1)
D.exd=new C.bw(D.a8G,"Assemble",D.al8)
D.exm=new C.bw(D.aTH,"Spin",D.ajo)
D.exj=new C.bw(D.aTI,"Pop",A.la)
D.d89=w([D.ezX,D.ez8,D.eAc,D.exd,D.exm,D.exj],C.ax("P<+(JN,n,a0)>"))
D.awA=w([A.bV,A.dN,A.bt,A.aV,A.by,A.cj],x.O)
D.d8k=w([A.aV,A.ct,A.ct,A.b8],x.O)
D.d8w=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ewb=new C.y("Make the output turn HALF as fast as the input.",0.5)
D.ehB=new C.y("Make the output turn TWICE as fast.",2)
D.ebt=new C.y("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.euT=new C.y("Make the output turn 4 times faster.",4)
D.en9=new C.y("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eqb=new C.y("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eoI=new C.y("Make the output turn 3 times faster.",3)
D.eps=new C.y("Make the output spin at the same speed as the input, using four different gears.",1)
D.awF=w([D.ewb,D.ehB,D.ebt,D.euT,D.en9,D.eqb,D.eoI,D.eps],C.ax("P<+(n,N)>"))
D.d9u=w([3,4.5,5,6,9],x.n)
D.b_Y=new C.ac(0,A.G,A.aX,A.J,16)
D.d9V=w([D.b_Y],x.V)
D.Q0=w([A.bV,A.cn,A.b8,A.aV,A.by,A.cj,A.c,A.ct],x.O)
D.dam=w(["solar","turbine","crank","pot"],x.s)
D.daG=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.daM=w([0,0.35,0.75,1],x.n)
D.exz=new C.bw("drop","Drop",D.akK)
D.exB=new C.bw("weight","Weight",R.alc)
D.eA7=new C.bw("cannon","Newton's cannon",A.ak7)
D.dbo=w([D.exz,D.exB,D.eA7],x.c)
D.etx=new C.y("piano","Piano")
D.etd=new C.y("organ","Organ")
D.eop=new C.y("bell","Bell")
D.etz=new C.y("pluck","Pluck")
D.euS=new C.y("synth","Synth")
D.eq6=new C.y("flute","Flute")
D.awX=w([D.etx,D.etd,D.eop,D.etz,D.euS,D.eq6],x.K)
D.dbU=w(["volts","level","ohms","on"],x.s)
D.dd9=w([A.ji,A.Br,A.Bf,A.pJ,A0.G4,A.tR,A.y1,A.pO,A.hK,A.nc,A.h8,A.dW,A.hZ,A.i_,A.mk,A.lK,A.y2,A.r2,A.lL,A.FA,A.tQ,A.MU,A.Bh,A.akF,A.MK,A.xY,A.MS,A.akh,U.al4,A.la],x.w)
D.de2=w([0.72,1],x.n)
D.ded=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dZ1={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dgu=new C.bq(D.dZ1,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aEY={A:0,T:1,C:2,G:3}
D.a2V=new C.bq(D.aEY,["U","A","G","C"],x.l)
D.dgC=new C.bq(D.aEY,["T","A","G","C"],x.l)
D.dXN={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d10=w([0,2,4,5,7,9,11],x.t)
D.cKE=w([0,2,3,5,7,8,10],x.t)
D.d65=w([0,3,5,6,7,10],x.t)
D.C_=new C.bq(D.dXN,[D.av0,D.d10,D.cKE,D.d65,D.anE],C.ax("bq<n,ai<H>>"))
D.dYQ={A:0,T:1,U:2,C:3,G:4}
D.dgR=new C.bq(D.dYQ,[A.cj,A.cs,A.cs,A.aM,A.b8],C.ax("bq<n,w>"))
D.dXa={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fJ4=new B.xI("Switch",F.Ng,A.cn,0,"Tap it to turn it ON or OFF.")
D.fJ0=new B.xI("Blinker",A.oD,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fJ1=new B.xI("AND",D.al8,A.cs,2,"ON only when BOTH inputs are ON.")
D.bBT=new C.a0(63671,"MaterialIcons",!1)
D.fJ_=new B.xI("OR",D.bBT,A.by,2,"ON when EITHER input is ON.")
D.fJ2=new B.xI("XOR",G.ZX,A.bV,2,"ON when the inputs are DIFFERENT.")
D.fIX=new B.xI("NAND",A.tG,A.aV,2,"OFF only when BOTH inputs are ON.")
D.bAZ=new C.a0(63176,"MaterialIcons",!1)
D.fIY=new B.xI("NOR",D.bAZ,A.hv,2,"ON only when BOTH inputs are OFF.")
D.fIZ=new B.xI("NOT",Y.G0,A.ct,1,"Flips the signal: ON becomes OFF.")
D.fJ3=new B.xI("Light",A.qY,A.dN,1,"Glows when its input is ON.")
D.fJ5=new B.xI("Buzzer",A.nV,A.cj,1,"Beeps while its input is ON.")
D.yG=new C.bq(D.dXa,[D.fJ4,D.fJ0,D.fJ1,D.fJ_,D.fJ2,D.fIX,D.fIY,D.fIZ,D.fJ3,D.fJ5],C.ax("bq<n,xI>"))
D.dYO={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.exX=new C.bw(3,20,1.9)
D.exu=new C.bw(33,90,1.6)
D.eAv=new C.bw(52,15,3.2)
D.eAt=new C.bw(45,-100,1.8)
D.ez2=new C.bw(-15,-60,1.9)
D.eyz=new C.bw(-25,140,2.4)
D.eyq=new C.bw(-82,0,2.2)
D.aCn=new C.bq(D.dYO,[D.exX,D.exu,D.eAv,D.eAt,D.ez2,D.eyz,D.eyq],C.ax("bq<n,+(N,N,N)>"))
D.cK4=w([A.A],x.M)
D.cKm=w([A.ax,A.aC],x.M)
D.cSR=w([A.ax,A.A,A.aC],x.M)
D.cUc=w([A.ax,A.l_,A.A,A.lu,A.aC],x.M)
D.d5Q=w([A.ax,A.l_,A.a3,A.a7,A.lu,A.aC],x.M)
D.dhM=new C.dR([1,D.cK4,2,D.cKm,3,D.cSR,4,A.ax1,5,D.cUc,6,D.d5Q],C.ax("dR<H,ai<d9>>"))
D.dXO={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eze=new C.bw(1,A.bR,"Hydrogen")
D.eyb=new C.bw(4,A.bn,"Carbon")
D.exe=new C.bw(3,A.d6,"Nitrogen")
D.ezx=new C.bw(2,A.ay,"Oxygen")
D.eyX=new C.bw(2,A.cn,"Sulfur")
D.eA4=new C.bw(1,A.bo,"Chlorine")
D.vM=new C.bq(D.dXO,[D.eze,D.eyb,D.exe,D.ezx,D.eyX,D.eA4],C.ax("bq<n,+(H,w,n)>"))
D.dZ6={Calm:0,Box:1,Sleep:2}
D.crG=w([4,2,6,0],x.n)
D.crN=w([4,4,4,4],x.n)
D.crO=w([4,7,8,0],x.n)
D.Qp=new C.bq(D.dZ6,[D.crG,D.crN,D.crO],C.ax("bq<n,ai<N>>"))
D.dXj={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wp=new B.a_t(0,"source")
D.cTJ=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fO1=new B.pS("Clock",A.oD,D.wp,A.bt,D.cTJ)
D.fNY=new B.pS("Button",A.y6,D.wp,A.aM,A.T)
D.d9G=w(["random","quick","slow"],x.s)
D.fO8=new B.pS("Dice",A.mj,D.wp,A.bV,D.d9G)
D.bBy=new C.a0(63484,"MaterialIcons",!1)
D.Dq=new B.a_t(1,"logic")
D.ddY=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fO4=new B.pS("Delay",D.bBy,D.Dq,A.cs,D.ddY)
D.d2y=w(["fast","mid","slow"],x.s)
D.fO9=new B.pS("Echo",A.aky,D.Dq,A.by,D.d2y)
D.fO6=new B.pS("Every 2nd",Y.G0,D.Dq,A.hv,A.T)
D.bBd=new C.a0(63309,"MaterialIcons",!1)
D.fO3=new B.pS("Every 3rd",D.bBd,D.Dq,A.aV,A.T)
D.bD9=new C.a0(983902,"MaterialIcons",!1)
D.bUW=w(["50%","25%","75%"],x.s)
D.fOb=new B.pS("Chance",D.bD9,D.Dq,A.ct,D.bUW)
D.qk=new B.a_t(2,"out")
D.fO_=new B.pS("Light",A.qY,D.qk,A.dN,A.T)
D.fO0=new B.pS("Burst",A.la,D.qk,A.bV,A.T)
D.fNZ=new B.pS("Ripple",A.ya,D.qk,A.b7,A.T)
D.fO7=new B.pS("Ball",A.akM,D.qk,A.ct,A.T)
D.fO5=new B.pS("Comet",A.nc,D.qk,A.by,A.T)
D.bCU=new C.a0(983669,"MaterialIcons",!1)
D.fOa=new B.pS("Shake",D.bCU,D.qk,A.cj,A.T)
D.fOc=new B.pS("Pop",A.FB,D.qk,A.b8,A.T)
D.fO2=new B.pS("Wash",A.MX,D.qk,A.pg,A.T)
D.ms=new C.bq(D.dXj,[D.fO1,D.fNY,D.fO8,D.fO4,D.fO9,D.fO6,D.fO3,D.fOb,D.fO_,D.fO0,D.fNZ,D.fO7,D.fO5,D.fOa,D.fOc,D.fO2],C.ax("bq<n,pS>"))
D.dYR={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.C0=new C.bq(D.dYR,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dXw={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.z6=new B.IJ(0,"tv")
D.eGd=new B.m_("Samsung Neo QLED 8K",D.z6,F.Ed,A.aV)
D.eG4=new B.m_("LG OLED evo G5",D.z6,A.e8,A.h_)
D.eFW=new B.m_("Sony Bravia 9",D.z6,A.qw,A.bq)
D.eG_=new B.m_("Apple TV 4K",D.z6,A.e_,A.bR)
D.eFX=new B.m_("Bang and Olufsen Beovision",D.z6,F.DW,F.t_)
D.I7=new B.IJ(1,"iphone")
D.aLi=new B.m_("iPhone 18 Pro Max",D.I7,D.aeO,A.c8)
D.w_=new B.IJ(3,"fold")
D.biR=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eG9=new B.m_("iPhone Fold",D.w_,D.biR,A.b5)
D.un=new B.IJ(2,"android")
D.b5y=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.eGa=new B.m_("Samsung Galaxy S26 Ultra",D.un,D.b5y,A.d6)
D.bcC=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eG2=new B.m_("Samsung Galaxy Z Fold7",D.w_,D.bcC,A.cx)
D.eFZ=new B.m_("Google Pixel 10 Pro XL",D.un,A.dz,A.bo)
D.eG6=new B.m_("Xiaomi 16 Ultra",D.un,A.lE,A.cb)
D.eG1=new B.m_("Huawei Mate 80 Pro Max",D.un,A.eM,A.ay)
D.eFY=new B.m_("OPPO Find X9 Ultra",D.un,A.e9,A.b8)
D.eGf=new B.m_("Honor Magic V5",D.w_,A.dq,A.cs)
D.eG3=new B.m_("vivo X300 Pro",D.un,A.hu,A.ct)
D.RU=new B.IJ(4,"tablet")
D.eG8=new B.m_("iPad Pro M5",D.RU,A.dz,A.aV)
D.a5r=new B.IJ(5,"reader")
D.eGg=new B.m_("Kindle Scribe",D.a5r,A.eu,A.bq)
D.z7=new B.IJ(6,"computer")
D.eG7=new B.m_("MacBook Pro M5 Max",D.z7,A.dz,A.c8)
D.eGc=new B.m_("iMac 32 inch",D.z7,A.bR,A.cx)
D.eG5=new B.m_("Pro Display XDR 8K",D.z7,A.lE,A.b7)
D.eG0=new B.m_("Sony Laser Projector",D.z7,A.cE,A.dN)
D.eGb=new B.m_("Luxury car touchscreen",D.z7,M.mU,A.ay)
D.eGe=new B.m_("Apple Vision Pro",D.z7,A.ju,A.by)
D.lS=new C.bq(D.dXw,[D.eGd,D.eG4,D.eFW,D.eG_,D.eFX,D.aLi,D.eG9,D.eGa,D.eG2,D.eFZ,D.eG6,D.eG1,D.eFY,D.eGf,D.eG3,D.eG8,D.eGg,D.eG7,D.eGc,D.eG5,D.eG0,D.eGb,D.eGe],C.ax("bq<n,m_>"))
D.dXI={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bl9=new B.fJ(20,4,13,!1)
D.blA=new B.fJ(14,5,13.5,!1)
D.blr=new B.fJ(9,2.4,10,!1)
D.blF=new B.fJ(7,5,12.5,!1)
D.blu=new B.fJ(8,3.5,12,!1)
D.bl5=new B.fJ(15,2,6,!1)
D.blD=new B.fJ(45,6,13.5,!0)
D.bll=new B.fJ(10,8,13.5,!1)
D.bld=new B.fJ(25,3,12,!0)
D.blj=new B.fJ(35,4,12,!0)
D.blk=new B.fJ(40,4.5,9.5,!0)
D.blm=new B.fJ(55,3,9,!0)
D.bl6=new B.fJ(18,3,9,!1)
D.blC=new B.fJ(22,4,13.5,!1)
D.blv=new B.fJ(16,5,13.5,!1)
D.blh=new B.fJ(30,4,9,!0)
D.blO=new B.fJ(5,3.5,13,!1)
D.blp=new B.fJ(25,3,13.5,!0)
D.bly=new B.fJ(14,2.5,9,!1)
D.blo=new B.fJ(6,6,13,!1)
D.blG=new B.fJ(30,1.2,5,!0)
D.blN=new B.fJ(35,3,4.5,!0)
D.blJ=new B.fJ(20,4.5,7.5,!0)
D.bln=new B.fJ(55,5.5,13.5,!0)
D.bl4=new B.fJ(45,5.5,13.5,!0)
D.blz=new B.fJ(40,5.5,13.5,!0)
D.blM=new B.fJ(60,6,13.5,!0)
D.afc=new B.fJ(28,4,7,!0)
D.EQ=new B.fJ(25,4,7,!0)
D.blg=new B.fJ(30,4,7,!0)
D.blb=new B.fJ(22,4,7,!0)
D.blc=new B.fJ(24,4,7,!0)
D.blq=new B.fJ(60,3,5.5,!0)
D.bl7=new B.fJ(18,9,14,!0)
D.ble=new B.fJ(25,9,14,!0)
D.afd=new B.fJ(30,8,14,!0)
D.bla=new B.fJ(20,8,14,!0)
D.bli=new B.fJ(30,9,14,!0)
D.blH=new B.fJ(22,5,9.5,!0)
D.bl8=new B.fJ(30,2.5,10.5,!0)
D.blw=new B.fJ(50,5.5,13.5,!0)
D.blL=new B.fJ(12,2,9.5,!1)
D.blt=new B.fJ(16,1.3,9.5,!0)
D.blE=new B.fJ(40,2.5,7,!0)
D.blK=new B.fJ(60,1.2,4.8,!0)
D.blI=new B.fJ(18,5,13.5,!0)
D.blB=new B.fJ(8,2,9.5,!1)
D.bls=new B.fJ(12,2.5,8,!1)
D.blf=new B.fJ(20,3.5,13.5,!0)
D.blx=new B.fJ(3.5,3,13,!1)
D.yH=new C.bq(D.dXI,[D.bl9,D.blA,D.blr,D.blF,D.blu,D.bl5,D.blD,D.bll,D.bld,D.blj,D.blk,D.blm,D.bl6,D.blC,D.blv,D.blh,D.blO,D.blp,D.bly,D.blo,D.blG,D.blN,D.blJ,D.bln,D.bl4,D.blz,D.blM,D.afc,D.EQ,D.blg,D.EQ,D.blb,D.EQ,D.blc,D.afc,D.EQ,D.blq,D.bl7,D.ble,D.afd,D.bla,D.bli,D.blH,D.bl8,D.blw,D.blL,D.blt,D.blE,D.blK,D.EQ,D.afd,D.blI,D.blB,D.bls,D.blf,D.blx],C.ax("bq<n,fJ>"))
D.dXi={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ewL=new C.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eeb=new C.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ee6=new C.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.epr=new C.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eqn=new C.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.epn=new C.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ecm=new C.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.enp=new C.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ewU=new C.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eqI=new C.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eh0=new C.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ec4=new C.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eg5=new C.y("Movement","They pull your legs together and help you balance.")
D.ehV=new C.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eej=new C.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eut=new C.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.evw=new C.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ena=new C.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.evg=new C.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.elU=new C.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eqQ=new C.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ecb=new C.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eih=new C.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eqx=new C.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.emd=new C.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.evo=new C.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eoU=new C.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eck=new C.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ero=new C.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eu6=new C.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.esn=new C.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eaP=new C.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eoC=new C.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eoG=new C.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eiX=new C.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eeq=new C.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ehK=new C.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.enz=new C.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.et6=new C.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ewR=new C.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eqN=new C.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eaD=new C.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.enK=new C.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ebc=new C.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.etm=new C.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eup=new C.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eo9=new C.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.etB=new C.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.ecd=new C.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.euV=new C.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.efv=new C.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.esM=new C.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eiE=new C.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.em8=new C.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.er6=new C.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ev5=new C.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.euX=new C.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ev1=new C.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.emC=new C.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.erV=new C.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.esk=new C.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.euK=new C.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eo8=new C.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eky=new C.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ejn=new C.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eox=new C.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.er_=new C.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.el3=new C.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.elI=new C.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.efR=new C.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eul=new C.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.egD=new C.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eb9=new C.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eiW=new C.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eb4=new C.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eeK=new C.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ej0=new C.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.egM=new C.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.erk=new C.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ehY=new C.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ewy=new C.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ejw=new C.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.emw=new C.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ep0=new C.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.egT=new C.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.egF=new C.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.diU=new C.bq(D.dXi,[D.ewL,D.eeb,D.ee6,D.epr,D.eqn,D.epn,D.ecm,D.enp,D.ewU,D.eqI,D.eh0,D.ec4,D.eg5,D.ehV,D.eej,D.eut,D.evw,D.ena,D.evg,D.elU,D.eqQ,D.ecb,D.eih,D.eqx,D.emd,D.evo,D.eoU,D.eck,D.ero,D.eu6,D.esn,D.eaP,D.eoC,D.eoG,D.eiX,D.eeq,D.ehK,D.enz,D.et6,D.ewR,D.eqN,D.eaD,D.enK,D.ebc,D.etm,D.eup,D.eo9,D.etB,D.ecd,D.euV,D.efv,D.esM,D.eiE,D.em8,D.er6,D.ev5,D.euX,D.ev1,D.emC,D.erV,D.esk,D.euK,D.eo8,D.eky,D.ejn,D.eox,D.er_,D.el3,D.elI,D.efR,D.eul,D.egD,D.eb9,D.eiW,D.eb4,D.eeK,D.ej0,D.egM,D.erk,D.ehY,D.ewy,D.ejw,D.emw,D.ep0,D.egT,D.egF],C.ax("bq<n,+(n,n)>"))
D.diW=new C.ht(A.G,11)
D.dj0=new C.ht(A.G,30)
D.dlP=new B.Tq(null)
D.dpD=new B.Tu(null)
D.dpE=new B.Tv(null)
D.dpR=new B.Tw(null)
D.drS=new B.Ty(null)
D.drT=new B.Tz(null)
D.drU=new B.TA(null)
D.dsH=new B.TX(null)
D.dsJ=new B.Ub(null)
D.dsK=new B.Uc(null)
D.dsL=new B.Ud(null)
D.dti=new B.Uk(null)
D.dvd=new B.Uo(null)
D.dve=new B.Uq(null)
D.dvf=new B.Ur(null)
D.dvh=new B.Us(null)
D.dwR=new B.UJ(null)
D.dwT=new B.UL(null)
D.dwY=new B.UV(null)
D.dx8=new B.UW(null)
D.dxE=new B.UX(null)
D.dz8=new B.UZ(null)
D.dAw=new B.V0(null)
D.dAx=new B.V1(null)
D.dBS=new B.V4(null)
D.dRL=new B.V5(null)
D.dRM=new B.V7(null)
D.dRN=new B.Va(null)
D.dRO=new B.Vb(null)
D.dTH=new B.Vj(null)
D.dTI=new B.Vk(null)
D.dTQ=new B.Vr(null)
D.dTZ=new B.Vv(null)
D.dU_=new B.Vw(null)
D.dU0=new B.a7q(null)
D.dUB=new B.Vy(null)
D.dW3=new B.VC(null)
D.dZh=new C.u(0,118)
D.aF3=new C.u(0,13)
D.dZi=new C.u(0,17)
D.dZl=new C.u(0,330)
D.dZo=new C.u(0,-13)
D.aF9=new C.u(0,-14)
D.dZp=new C.u(0,-17)
D.dZq=new C.u(0,-18)
D.dZr=new C.u(0,-19)
D.dZs=new C.u(0,-20)
D.dZv=new C.u(0,-26)
D.dZw=new C.u(0,-28)
D.dZx=new C.u(0,-31)
D.dZy=new C.u(0,-32)
D.vT=new C.u(0,-6)
D.dZz=new C.u(0,-6771)
D.dZA=new C.u(0,-9)
D.dZC=new C.u(-9.5,-11)
D.dZD=new C.u(10,20)
D.dZF=new C.u(10,-13)
D.dZG=new C.u(10,-22)
D.dZH=new C.u(10,-4)
D.a4m=new C.u(11,8)
D.dZJ=new C.u(12,2)
D.dZK=new C.u(14,0)
D.dZL=new C.u(14,12)
D.aFd=new C.u(14,8)
D.dZM=new C.u(14,-17)
D.dZN=new C.u(14,-18)
D.aFe=new C.u(14,-3)
D.aFf=new C.u(14,-4)
D.dZO=new C.u(15,0)
D.dZP=new C.u(15,-12)
D.dZQ=new C.u(16,-8)
D.dZR=new C.u(18,14)
D.dZS=new C.u(18,-12)
D.aFj=new C.u(20,0)
D.dZY=new C.u(20,15)
D.dZZ=new C.u(20,-17)
D.e__=new C.u(20,-3)
D.e_0=new C.u(21,8)
D.e_2=new C.u(22,10)
D.aFk=new C.u(22,8)
D.e_3=new C.u(24,0)
D.e_4=new C.u(24,2)
D.e_6=new C.u(24,-18)
D.e_7=new C.u(24,-22)
D.e_8=new C.u(25,8)
D.e_9=new C.u(26,0)
D.e_f=new C.u(28,-30)
D.e_k=new C.u(30,18)
D.e_l=new C.u(30,2)
D.e_m=new C.u(31,19)
D.e_n=new C.u(32,0)
D.aFn=new C.u(34,0)
D.aFo=new C.u(34,-32)
D.HJ=new C.u(36,0)
D.e_s=new C.u(3,-1)
D.e_v=new C.u(40,3)
D.e_z=new C.u(4,11)
D.e_C=new C.u(4,-2)
D.e_G=new C.u(5,0)
D.e_H=new C.u(5,17)
D.e_I=new C.u(5,6)
D.e_L=new C.u(6,11)
D.e_R=new C.u(8,7)
D.e_S=new C.u(8,-10)
D.e_T=new C.u(8,-14)
D.e_U=new C.u(8,-3)
D.aFs=new C.u(9,0)
D.e_X=new C.u(-20.5,-17.6)
D.e_Y=new C.u(-9,18.5)
D.e00=new C.u(-2.6,-1)
D.e01=new C.u(1.9,-0.8)
D.e04=new C.u(-0.22,0.09)
D.e09=new C.u(2.6,1)
D.e0g=new C.u(-9,12.2)
D.e0y=new C.u(-9,20.5)
D.e0Q=new C.u(-10,0)
D.e0R=new C.u(-10,12)
D.aFz=new C.u(-10,4)
D.e0S=new C.u(-11,-2)
D.e0T=new C.u(-13,-5)
D.e0U=new C.u(-14,0)
D.e0V=new C.u(-14,13)
D.e0W=new C.u(-14,2)
D.e0X=new C.u(-14,-12)
D.e0Y=new C.u(-14,-19)
D.e0Z=new C.u(-14,-23)
D.e1_=new C.u(-15,6)
D.e10=new C.u(-16,14)
D.e11=new C.u(-16,-8)
D.e12=new C.u(-17,10)
D.e13=new C.u(-17,-18)
D.e14=new C.u(-17,-8)
D.e16=new C.u(-18,20)
D.e17=new C.u(-18,-9)
D.aFB=new C.u(-20,0)
D.e19=new C.u(-20,16)
D.e1a=new C.u(-20,-9)
D.Rn=new C.u(-22,8)
D.e1b=new C.u(-22,-10)
D.e1c=new C.u(-22,-11)
D.e1d=new C.u(-24,10)
D.e1e=new C.u(-24,11)
D.e1f=new C.u(-24,14)
D.e1g=new C.u(-24,-22)
D.e1h=new C.u(-25,-11)
D.e1i=new C.u(-26,0)
D.e1j=new C.u(-26,-18)
D.e1k=new C.u(-2,9)
D.e1l=new C.u(-2,-10)
D.e1m=new C.u(-2,-20)
D.e1n=new C.u(-2,-9)
D.e1o=new C.u(-32,0)
D.aFD=new C.u(-34,0)
D.e1t=new C.u(-40,3)
D.e1v=new C.u(-4,11)
D.e1w=new C.u(-4,-17)
D.e1x=new C.u(-4,-2)
D.e1z=new C.u(-5,0)
D.e1A=new C.u(-5,20)
D.e1B=new C.u(-5,6)
D.e1C=new C.u(-6,26)
D.e1D=new C.u(-6,6)
D.e1E=new C.u(-6,-42)
D.e1F=new C.u(-7,-19)
D.e1G=new C.u(-7,-24)
D.e1H=new C.u(-8,-9)
D.a4q=new C.u(-9,0)
D.e1I=new C.u(-9,1)
D.e1J=new C.u(-9,-23)
D.f9Q=new C.x("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.e2F=new C.C(A.kh,D.f9Q,null)
D.fpu=new C.x("Start from a ready-made board",null,A.fN,null,null,null,null,null,null,null,null,null)
D.e2P=new C.C(A7.vb,D.fpu,null)
D.bsT=new C.Q(4,0,4,14)
D.f5l=new C.G(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faK=new C.x("Games and little helpers for a spare minute.",null,D.f5l,null,null,null,null,null,null,null,null,null)
D.e2Y=new C.C(D.bsT,D.faK,null)
D.fmm=new C.x("Tap to throw in a star",null,A.kw,null,null,null,null,null,null,null,null,null)
D.b37=new C.cp(A.A,null,null,D.fmm,null)
D.e8L=new C.cK(0,null,0,14,null,null,D.b37,null)
D.d36=w([A.iL,A.bn],x.O)
D.aKv=new C.bR(A.A,0.5,A.x,null,0,D.d36,null,null)
D.e9t=new C.bR(A.A,0.5,A.x,null,0,D.awP,null,null)
D.cVQ=w([A.c,A.bJ],x.O)
D.e9v=new C.bR(A.A,0.5,A.x,null,0,D.cVQ,null,null)
D.e9w=new C.bR(A.A,0.5,A.x,null,0,K.avV,null,null)
D.day=w([A.bR,A.ju],x.O)
D.aKw=new C.bR(A.A,0.5,A.x,null,0,D.day,null,null)
D.cBk=w([A.c,A.bR],x.O)
D.e9A=new C.bR(A.rI,0.5,A.x,null,0,D.cBk,null,null)
D.ba6=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bfi=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cUV=w([D.ba6,D.aen,D.bfi],x.O)
D.d1a=w([0,0.7,1],x.n)
D.e9C=new C.bR(A.rI,0.5,A.x,null,0,D.cUV,D.d1a,null)
D.crU=w([A.oq,A.aH,A.K],x.O)
D.d7t=w([0.3,0.7,1],x.n)
D.e9E=new C.bR(A.A,0.5,A.x,null,0,D.crU,D.d7t,null)
D.biU=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d8O=w([A.f6,D.biU],x.O)
D.e9G=new C.bR(A.rI,0.5,A.x,null,0,D.d8O,null,null)
D.cuE=w([A.dz,A.cE],x.O)
D.e9H=new C.bR(A.A,0.5,A.x,null,0,D.cuE,null,null)
D.cQw=w([A.oq,A.aH,A.fC],x.O)
D.e9I=new C.bR(A.A,0.5,A.x,null,0,D.cQw,null,null)
D.cJ4=w([A.h1,A.aM,A.d9],x.O)
D.e9K=new C.bR(A.rI,0.5,A.x,null,0,D.cJ4,null,null)
D.d3D=w([A.ju,M.mU],x.O)
D.e9L=new C.bR(A.rI,0.5,A.x,null,0,D.d3D,null,null)
D.bak=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b8r=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cSJ=w([D.bak,D.b8r],x.O)
D.e9N=new C.bR(A.A,0.5,A.x,null,0,D.cSJ,null,null)
D.beI=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bcJ=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bcN=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dcL=w([D.beI,D.bcJ,D.bcN],x.O)
D.cPj=w([0,0.65,1],x.n)
D.e9O=new C.bR(K.a8Q,0.5,A.x,null,0,D.dcL,D.cPj,null)
D.e9P=new C.bR(A.A,0.5,A.x,null,0,D.atr,null,null)
D.d9N=w([A.lB,A.aH,A.fC],x.O)
D.e9T=new C.bR(A.A,0.5,A.x,null,0,D.d9N,null,null)
D.dbj=w([A.ju,A.hD],x.O)
D.e9W=new C.bR(A.A,0.5,A.x,null,0,D.dbj,null,null)
D.aKB=new C.aV(9,9)
D.ea4=new C.aV(1.4,1.4)
D.eaJ=new C.y(0,-4)
D.efs=new C.y(0.22,4)
D.emu=new C.y(0.8,-4)
D.euY=new C.y(0.58,4)
D.exC=new C.bw("Moon",1.62,4291941851)
D.ey9=new C.bw("Neptune",11.15,4284524026)
D.eyK=new C.bw("Sun",274,4294688548)
D.eyZ=new C.bw("Mercury",3.7,4288455599)
D.ez4=new C.bw("Earth",9.81,4281908728)
D.ez6=new C.bw("Mars",3.71,4294472049)
D.ezp=new C.bw("Venus",8.87,4294759245)
D.ezu=new C.bw("Saturn",10.44,4294829706)
D.ezQ=new C.bw("Jupiter",24.79,4294677052)
D.eDh=new C.aa(10,-8,18,-2)
D.eDi=new C.aa(14,-14,20,14)
D.eDj=new C.aa(20,-2,30,2)
D.eDl=new C.aa(4,-13,30,-3)
D.eDn=new C.aa(8,-7,12,7)
D.eDt=new C.aa(-12,12,12,19)
D.eDu=new C.aa(-12,14,12,22)
D.eDv=new C.aa(-12,-22,12,8)
D.eDw=new C.aa(-12,-25,12,19)
D.eDx=new C.aa(-12,-26,12,-6)
D.eDy=new C.aa(-12,-4,12,14)
D.eDz=new C.aa(-12,-6,10,6)
D.eDA=new C.aa(-14,20,14,24)
D.eDB=new C.aa(-14,6,14,10)
D.eDC=new C.aa(-14,-17,14,15)
D.eDD=new C.aa(-14,-26,14,18)
D.eDE=new C.aa(-14,-4,14,20)
D.eDF=new C.aa(-15,-29,15,25)
D.eDG=new C.aa(-16,-16,16,16)
D.eDH=new C.aa(-16,-22,-9,18)
D.eDI=new C.aa(-16,-24,16,-10)
D.eDJ=new C.aa(-16,-2,16,20)
D.eDL=new C.aa(-18,20,18,24)
D.eDM=new C.aa(-18,-18,18,20)
D.eDN=new C.aa(-20,12,20,22)
D.eDO=new C.aa(-20,-28,20,26)
D.eDP=new C.aa(-22,14,22,18)
D.aL0=new C.aa(-22,-26,22,24)
D.eDQ=new C.aa(-22,-3,22,3)
D.eDR=new C.aa(-22,-4,22,12)
D.eDS=new C.aa(-24,-12,10,22)
D.eDT=new C.aa(-24,-14,22,8)
D.eDU=new C.aa(-24,-6,24,20)
D.aL1=new C.aa(-24,-9,24,9)
D.eDV=new C.aa(-25,14,25,19)
D.eDW=new C.aa(-26,-14,14,8)
D.eDX=new C.aa(-26,-4,26,20)
D.eDY=new C.aa(-26,-6,4,6)
D.aL2=new C.aa(-28,-13,28,13)
D.eDZ=new C.aa(-28,-16,28,16)
D.eE_=new C.aa(-28,-16,28,8)
D.eE0=new C.aa(-28,-22,28,22)
D.eE1=new C.aa(-30,-12,30,14)
D.eE2=new C.aa(-30,-14,0,14)
D.eE3=new C.aa(-30,-18,30,20)
D.eE4=new C.aa(-30,-28,30,14)
D.eE5=new C.aa(-30,-2,30,18)
D.eE6=new C.aa(-30,-4,30,18)
D.eE7=new C.aa(-32,-17,32,17)
D.eE8=new C.aa(-32,-28,32,18)
D.eE9=new C.aa(-33,-21,33,17)
D.eEa=new C.aa(-34,14,34,26)
D.a5j=new C.aa(-34,-18,34,18)
D.eEb=new C.aa(-34,-4,34,7)
D.eEc=new C.aa(-36,-24,36,20)
D.eEd=new C.aa(-38,-22,38,22)
D.eEe=new C.aa(-3,12,3,22)
D.eEf=new C.aa(-3,5,3,15)
D.eEh=new C.aa(-46,-34,46,28)
D.eEi=new C.aa(-48,-3,48,3)
D.eEl=new C.aa(-6,18,24,24)
D.eEm=new C.aa(-6,5,6,12)
D.eEn=new C.aa(-6,-22,6,-15)
D.eEo=new C.aa(-9,-16,9,22)
D.eEp=new C.aa(-4.5,-24,4.5,-21.2)
D.eEr=new C.aa(14,-9,17.5,9)
D.dYL={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aLT=new C.eW(D.dYL,5,x.R)
D.dYq={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eHi=new C.eW(D.dYq,10,x.R)
D.eJf=new C.at(24,44)
D.eJk=new C.at(300,300)
D.eJE=new C.at(54,38)
D.eJL=new C.at(66,38)
D.b4m=new C.fi(2,null,null,null,null,A.by,null,null,null,null)
D.eKI=new C.a6(16,16,D.b4m,null)
D.aMS=new C.hJ(3,12,12,0.82,null)
D.fr8=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aN2=new C.b1(D.fr8,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d3G=w([A.cj,A.cn,A.b8,A.aV,A.pg,A.cj],x.O)
D.eQA=new C.fS(A.A,0,6.283185307179586,A.x,D.d3G,null,null)
D.eZk=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pu,null,null,null)
D.eRE=new C.eo("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.eZk)
D.aPs=new C.G(!0,A.az,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRF=new C.eo("What we see",null,null,A.cO,null,null,null,null,null,null,D.aPs)
D.eWL=new C.G(!0,A3.Vm,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRI=new C.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eWL)
D.f0x=new C.G(!0,A.k9,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRO=new C.eo("AI",null,null,A.cO,null,null,null,null,null,null,D.f0x)
D.eWw=new C.G(!0,A.c_,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRP=new C.eo("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eWw)
D.aNQ=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS3=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS5=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSB=new C.G(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSV=new C.G(!0,A.cs,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTp=new C.G(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTu=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTK=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUc=new C.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUJ=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHO=new C.cP(A.hG,A.dC,6)
D.cYu=w([D.eHO],x.q)
D.eV2=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cYu,null,null,null)
D.eV5=new C.G(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV8=new C.G(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new C.G(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVz=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOc=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVT=new C.G(!0,A.az,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVU=new C.G(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWO=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXi=new C.G(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHR=new C.cP(A.aX,A.J,3)
D.ax4=w([D.eHR],x.q)
D.eXO=new C.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ax4,null,null,null)
D.eXT=new C.G(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYz=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pu,null,null,null)
D.eZ1=new C.G(!0,A.az,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ9=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZz=new C.G(!0,A.uW,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_8=new C.G(!0,A.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_d=new C.G(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new C.G(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new C.G(!0,A.az,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Q=new C.G(!0,A.c_,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f02=new C.G(!0,A.mW,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f03=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0i=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOS=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHF=new C.cP(A.w,A.J,5)
D.cN2=w([D.eHF],x.q)
D.f0S=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cN2,null,null,null)
D.f0X=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ax4,null,null,null)
D.f1b=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1g=new C.G(!0,A.fv,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1x=new C.G(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f20=new C.G(!0,A.b8,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2y=new C.G(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3b=new C.G(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3k=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPd=new C.G(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3N=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3X=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f43=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4o=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPp=new C.G(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new C.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7g=new C.G(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5A=new C.G(!0,A.uW,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5T=new C.G(!0,A.b8,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVd=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6g=new C.x("\u26a0\ufe0f ",null,D.eVd,null,null,null,null,null,null,null,null,null)
D.f6r=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.D2,null,null,null,null,null,null,null,null,null)
D.f6T=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mC,null,null,null,null,null,null,null,null,null)
D.f7V=new C.x("Pick one, then change it and see what happens.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.f7Z=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eWh=new C.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eWh,null,null,null,null,null,null,null,null,null)
D.f9f=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a6y,null,null,null,null,null,null,null,null,null)
D.fam=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.faW=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fb0=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fby=new C.x("Make it yours",null,A.kX,null,null,null,null,null,null,null,null,null)
D.fbN=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6E,null,null,null,null,null,null,null,null,null)
D.f_t=new C.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe_=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f_t,null,null,null,null,null,null,null,null,null)
D.fee=new C.x("YOUR DECODING",null,Q.mC,null,null,null,null,null,null,null,null,null)
D.feq=new C.x("5G",null,R.aOf,null,null,null,null,null,null,null,null,null)
D.f1N=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffx=new C.x("WHAT HAPPENS",null,D.f1N,null,null,null,null,null,null,null,null,null)
D.fhd=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new C.x("Change the words and pictures on the three slabs.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.fi2=new C.x("All the parts and wires will be removed.",null,A.hB,null,null,null,null,null,null,null,null,null)
D.fim=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fiW=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fjN=new C.x("INTERCEPTED",null,Q.mC,null,null,null,null,null,null,null,null,null)
D.fk6=new C.x("\ud83c\udfaf Challenges",null,A.du,null,null,null,null,null,null,null,null,null)
D.fkB=new C.x("Remove this part",null,V.aNT,null,null,null,null,null,null,null,null,null)
D.fkT=new C.x("Clear the board?",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f1h=new C.G(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl7=new C.x("How the Lab works",null,D.f1h,null,null,null,null,null,null,null,null,null)
D.eTW=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flp=new C.x("Electronics Lab",null,D.eTW,null,null,null,null,A.a2,null,1,null,null)
D.fls=new C.x("?",null,K.aPm,null,null,null,null,null,null,null,null,null)
D.f_n=new C.G(!0,A.aV,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flw=new C.x("Planet Earth",null,D.f_n,null,null,null,null,null,null,null,null,null)
D.fmG=new C.x("Ready-made circuits",null,A.du,null,null,null,null,null,null,null,null,null)
D.fng=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fnz=new C.x("UNIVERSE EXPLORER",null,I.a6D,null,null,null,null,null,null,null,null,null)
D.fq1=new C.x("SECRET VERSION",null,Q.mC,null,null,null,null,null,null,null,null,null)
D.f47=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqy=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f47,null,null,null,null,null,null,null,null,null)
D.frJ=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a6y,null,null,null,null,null,null,null,null,null)
D.fsb=new C.x("NGMY",null,A.uw,null,null,null,null,null,null,null,null,null)
D.fsn=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IH,null,null,null,null,null,null,null,null,null)
D.fsK=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.lp,null,null,null,null,null,null,null,null,null)
D.ftH=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.ftJ=new C.x("TOOLBOX",null,I.a6D,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h7J=null
$.h7I=null
$.hdL=0
$.hFu=C.V(x.N,x.k)
$.hG4=C.V(x.N,x.k)
$.h73=null
$.hFQ=C.V(x.N,x.k)
$.hGS=C.V(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ib7","bCm",()=>{var v="led"
return C.a([B.awU("Both together","Make the light glow only when BOTH switches are ON.",2,new B.faZ(),v),B.awU("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fb_(),v),B.awU("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fb0(),v),B.awU("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fb7(),v),B.awU("Not both","Make the light go OFF only when both switches are ON.",2,new B.fb8(),v),B.awU("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fb9(),"buzzer")],C.ax("P<b9c>"))})
w($,"iby","bCn",()=>C.a([B.os("UNIVERSE","Earth, space and gravity",A.a_B,A.aV,new B.fbp()),B.os("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.ZZ,A.aV,new B.fbq()),B.os("DISCOVERY LAB","Body Explorer: a real 3D human",D.ZQ,A.b8,new B.fbr()),B.os("TOOLBOX","Converter, clock, games",U.ajA,A.ct,new B.fbC()),B.os("MOLECULE MAKER","Join atoms into real molecules",A.MJ,A.hv,new B.fbE()),B.os("DNA LAB","Copy DNA, build a protein",D.ZQ,A.bV,new B.fbF()),B.os("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xY,A.b8,new B.fbG()),B.os("BALANCE LAB","Levers, weight and torque",D.bD1,A.aM,new B.fbH()),B.os("GEAR LAB","Teeth, speed and force",A.Bp,A.ct,new B.fbI()),B.os("LASER MAZE","Bend the beam with mirrors",I.ajY,A.ay,new B.fbJ()),B.os("LIGHT MIXER","Match colours with light",D.bAL,A.b7,new B.fbK()),B.os("CIPHER LAB","Make and crack secret codes",A.y9,A.aV,new B.fbs()),B.os("REACTION LAB","Wire parts together",A.yd,A.bt,new B.fbt()),B.os("SPARK PAINTER","Paint with light",A.ZS,A.bV,new B.fbu()),B.os("ROCKET LANDER","Land softly on the pad",A.nc,A.aV,new B.fbv()),B.os("ORBIT STUDIO","Slingshot planets",A.ml,A.ct,new B.fbw()),B.os("SWARM STUDIO","A living school of fish",A.MJ,A.b8,new B.fbx()),B.os("CHAIN BURST","One tap, a whole chain",A.h8,A.bV,new B.fby()),B.os("TITLE ANIMATOR","Make a moving title",A.y5,A.cn,new B.fbz()),B.os("CIRCUIT LAB","Connect logic, learn it",A.a_i,A.cs,new B.fbA()),B.os("MARBLE MUSIC","Marbles ring the notes",D.bAr,A.b7,new B.fbB()),B.os("ORBIT SEQUENCER","Planets play the tune",D.bCQ,A.by,new B.fbD())],C.ax("P<bqS>")))
w($,"id2","q3",()=>{var v,u,t=C.V(x.N,x.dV)
for(v=0;v<76;++v){u=D.PL[v]
t.n(0,u.a,u)}return t})
w($,"ib8","agP",()=>C.a([B.F5("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fba()),B.F5("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fbb()),B.F5("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fbc()),B.F5("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fbd()),B.F5("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fbe()),B.F5("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fb1()),B.F5("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fb2()),B.F5("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fb3()),B.F5("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fb4()),B.F5("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fb5()),B.F5("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fb6())],C.ax("P<b9d>")))
w($,"ibA","hm4",()=>C.a([B.a_Y("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cb,new B.fbS()),B.a_Y("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cj,A.bI,new B.fbT()),B.a_Y("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cx,new B.fbU()),B.a_Y("Draw Pad","Sketch and share","\ud83c\udfa8",A.bz,A.b5,new B.fbV()),B.a_Y("Memory Match","Find the pairs","\ud83c\udccf",A.aV,A.c8,new B.fbW()),B.a_Y("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cn,A.bo,new B.fbX()),B.a_Y("Tip & Split","Share the bill","\ud83e\uddfe",A.b8,A.aZ,new B.fbY()),B.a_Y("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.fbZ())],C.ax("P<bsb>")))
w($,"ibz","hm3",()=>C.a([B.aeb("EARTH GLOBE","Turn it, tap a country",A.ml,A.aV,new B.fbL()),B.aeb("SOLAR SYSTEM","The Sun and its worlds",D.bAv,A.aM,new B.fbM()),B.aeb("GRAVITY LAB","Drop, weigh, orbit",D.akK,A.ct,new B.fbN()),B.aeb("BLACK HOLE","Throw in a star",A.Fq,A.by,new B.fbO()),B.aeb("GALAXY","Build, tilt, collide",A.xL,A.h0,new B.fbP()),B.aeb("SIZE COMPARE","Earth next to a star",D.bAN,A.bV,new B.fbQ()),B.aeb("SEASONS & MOON","Why it is summer",A.vk,A.bt,new B.fbR())],C.ax("P<bs6>")))})()};
(a=>{a["hhM0O4R+/aMoRzJZqHuy4Gguyos="]=a.current})($__dart_deferred_initializers__);