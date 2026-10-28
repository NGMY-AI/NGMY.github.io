((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,A9,A0,A1,I,P,A2,Aa,A3,A4,N,G,Ab,Ac,A5,Ad,W,Ae,Af,Q,Ag,Ah,X,O,V,Ai,Aj,S,K,Ak,L,T,Al,E,F,M,B={
bxk(d){return B.hHX(d)},
hHX(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bxk=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qC(C.mY(""),d,A.hj,null).cM(0,A.X3),$async$bxk)
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
return C.i($async$bxk,v)},
hTu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Pb[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dr(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.ix(D.Pb,new B.foB())
if(w==null)w=A.d.gL(D.Pb)
s=C.V(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q1().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiC(w.a,w.b,m,w,s,!1)},
hNe(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.PA,new B.ffq(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i0g(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.on(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aG(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aW(a5)
r=0
for(a6=x.j,a7=J.aX(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gU(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q1().ag(0,p)||J.eY(s,o)||J.ac(t)>=8)continue
J.cf(s,o)
n=C.V(a5,a8)
for(a9=0;a9<4;++a9){m=D.da0[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.f8(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.f8(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cf(t,new C.eN([o,p,k,j,n]));++r}if(J.ac(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aX(a6.a(J.q(u,"wires")));a5.C();){h=a5.gU(a5)
g=a6.a(h)
if(J.ac(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.O(C.f8(J.q(g,1))),0,1)
a0=A.o.D(A.k.O(C.f8(J.q(g,3))),0,1)
if(J.eY(s,f)&&J.eY(s,e)&&!J.y(f,e))J.cf(i,new C.cL([f,d,e,a0]))}if(J.ac(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aX(a0==null?A.cH:a0)
while(a0.C()){a2=a0.gU(a0)
J.cf(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mp(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ac(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aiC(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hS4(d){var w,v,u=B.fYt()
d.B(u)
for(w=0;w<60;++w)u.uO(0,0.03333333333333333)
v=u.a
return A.d.b8(v,new B.flI(u))&&!A.d.d9(v,new B.flJ())},
hS3(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.V(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q1().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.d8t,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hGu(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hTt(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q1().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.PA[u]
if(A.d.b8(w,new B.foy(s)))if(!C.dr(r,s.b.toLowerCase(),0))v=C.dr(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.foz(e),C.T(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.foA())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q1().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiC:function aiC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foB:function foB(){},
ffq:function ffq(){},
flI:function flI(d){this.a=d},
flJ:function flJ(){},
foy:function foy(d){this.a=d},
foz:function foz(d){this.a=d},
foA:function foA(){},
Uw:function Uw(d,e){this.c=d
this.a=e},
bi6:function bi6(d,e,f,g,h){var _=this
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
e1p:function e1p(d){this.a=d},
e1q:function e1q(d,e,f){this.a=d
this.b=e
this.c=f},
e1r:function e1r(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1y:function e1y(d){this.a=d},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1x:function e1x(d,e,f){this.a=d
this.b=e
this.c=f},
e1z:function e1z(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e1u:function e1u(d){this.a=d},
e1v:function e1v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1A:function e1A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e1t:function e1t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e){this.a=d
this.b=e},
bxG(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aND,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
haR(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.zd,A.L,w,w),A.az,C.c_(A.fM,g,A.bt,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.V7,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Fs:function Fs(d,e,f,g){var _=this
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
aCN:function aCN(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fi$=h
_.kQ$=i
_.fN$=j
_.fj$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eho:function eho(){},
ehI:function ehI(d){this.a=d},
ehH:function ehH(d,e){this.a=d
this.b=e},
ehJ:function ehJ(){},
ehK:function ehK(){},
ehq:function ehq(d,e,f){this.a=d
this.b=e
this.c=f},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehf:function ehf(d){this.a=d},
ehg:function ehg(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehk:function ehk(d){this.a=d},
ehl:function ehl(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehn:function ehn(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d){this.a=d},
eht:function eht(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehs:function ehs(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehD:function ehD(d){this.a=d},
ehE:function ehE(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehu:function ehu(d){this.a=d},
bf6:function bf6(d,e){this.b=d
this.a=e},
aKC:function aKC(){},
bvi:function bvi(){},
cCs(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cCs=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tP().kb(0,"assets/data/body3d.bin"),$async$cCs)
case 3:d=a1
$.h6e=J.eW(A.dG.gaP(d),d.byteOffset,d.byteLength)
t=C.bFJ(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jk(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cZk[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a27(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aV1))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b8i(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cCs,v)},
aQu:function aQu(d,e,f){this.a=d
this.b=e
this.c=f},
a27:function a27(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b8i:function b8i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
To:function To(d){this.a=d},
aBc:function aBc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fi$=s
_.kQ$=t
_.fN$=u
_.fj$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dBS:function dBS(d){this.a=d},
dBR:function dBR(d,e){this.a=d
this.b=e},
dBu:function dBu(d,e){this.a=d
this.b=e},
dBv:function dBv(){},
dBT:function dBT(){},
dBw:function dBw(d,e){this.a=d
this.b=e},
dBx:function dBx(d){this.a=d},
dBy:function dBy(){},
dBz:function dBz(d){this.a=d},
dBB:function dBB(d,e){this.a=d
this.b=e},
dBA:function dBA(d){this.a=d},
dBr:function dBr(d,e,f){this.a=d
this.b=e
this.c=f},
dBs:function dBs(d){this.a=d},
dBt:function dBt(d){this.a=d},
dBI:function dBI(d){this.a=d},
dBJ:function dBJ(d,e){this.a=d
this.b=e},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBL:function dBL(d){this.a=d},
dBH:function dBH(d,e){this.a=d
this.b=e},
dBM:function dBM(d,e){this.a=d
this.b=e},
dBG:function dBG(d,e){this.a=d
this.b=e},
dBN:function dBN(d){this.a=d},
dBF:function dBF(d){this.a=d},
dBO:function dBO(d){this.a=d},
dBE:function dBE(d){this.a=d},
dBP:function dBP(d){this.a=d},
dBD:function dBD(d){this.a=d},
dBQ:function dBQ(d){this.a=d},
dBC:function dBC(d){this.a=d},
aJE:function aJE(){},
aJF:function aJF(){},
bZ1:function bZ1(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bZ2:function bZ2(d,e){this.a=d
this.b=e},
bZ3:function bZ3(d){this.a=d},
awH(d,e,f,g,h){return new B.b90(d,e,f,g,h)},
fPu(d,e,f,g,h,i){return $.hDU.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cJe(d,e,f,i,g,h))},
xG:function xG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BN:function BN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nc:function nc(d,e,f){this.a=d
this.b=e
this.c=f},
b90:function b90(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9J:function f9J(){},
f9K:function f9K(){},
f9L:function f9L(){},
f9S:function f9S(){},
f9T:function f9T(){},
f9U:function f9U(){},
Tt:function Tt(d){this.a=d},
aBf:function aBf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fi$=m
_.kQ$=n
_.fN$=o
_.fj$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dE2:function dE2(d){this.a=d},
dDH:function dDH(d,e){this.a=d
this.b=e},
dDK:function dDK(){},
dE3:function dE3(){},
dDF:function dDF(d,e){this.a=d
this.b=e},
dDG:function dDG(d,e){this.a=d
this.b=e},
dDL:function dDL(d,e,f){this.a=d
this.b=e
this.c=f},
dDA:function dDA(){},
dDB:function dDB(){},
dDC:function dDC(d){this.a=d},
dDD:function dDD(d,e){this.a=d
this.b=e},
dDE:function dDE(d,e,f){this.a=d
this.b=e
this.c=f},
dDM:function dDM(){},
dDN:function dDN(d,e){this.a=d
this.b=e},
dDO:function dDO(d){this.a=d},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
dDI:function dDI(d){this.a=d},
dDz:function dDz(d,e,f){this.a=d
this.b=e
this.c=f},
dDX:function dDX(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDT:function dDT(d){this.a=d},
dDU:function dDU(d){this.a=d},
dDS:function dDS(d){this.a=d},
dDP:function dDP(d){this.a=d},
dDR:function dDR(d){this.a=d},
dDZ:function dDZ(d,e){this.a=d
this.b=e},
dE_:function dE_(d,e){this.a=d
this.b=e},
dE0:function dE0(d){this.a=d},
dDQ:function dDQ(d){this.a=d},
dE1:function dE1(d,e){this.a=d
this.b=e},
b9i:function b9i(d,e){this.b=d
this.a=e},
cJe:function cJe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJK:function aJK(){},
bv1:function bv1(){},
huM(){return new B.MC(null)},
op(d,e,f,g,h){return new B.bqE(d,e,f,g,h)},
bp5(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fQ_(d,e){var w=d*0.23
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
aBw:function aBw(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJt:function dJt(d){this.a=d},
dJw:function dJw(d,e){this.a=d
this.b=e},
dJv:function dJv(d){this.a=d},
bqE:function bqE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fa9:function fa9(){},
faa:function faa(){},
fab:function fab(){},
fam:function fam(){},
fao:function fao(){},
fap:function fap(){},
faq:function faq(){},
far:function far(){},
fas:function fas(){},
fat:function fat(){},
fau:function fau(){},
fac:function fac(){},
fad:function fad(){},
fae:function fae(){},
faf:function faf(){},
fag:function fag(){},
fah:function fah(){},
fai:function fai(){},
faj:function faj(){},
fak:function fak(){},
fal:function fal(){},
fan:function fan(){},
bp6:function bp6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eRD:function eRD(d){this.a=d},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRA:function eRA(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRB:function eRB(d,e){this.a=d
this.b=e},
adI:function adI(d,e,f){this.c=d
this.d=e
this.a=f},
acC:function acC(d,e,f){this.c=d
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
bq4:function bq4(d,e){this.b=d
this.a=e},
bpA:function bpA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8_:function b8_(d,e){this.b=d
this.a=e},
aFL:function aFL(d,e){this.c=d
this.a=e},
aFM:function aFM(d,e,f){var _=this
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
eRj:function eRj(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRh:function eRh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRg:function eRg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRe:function eRe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRd:function eRd(d,e,f){this.a=d
this.b=e
this.c=f},
eRf:function eRf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eRc:function eRc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRr:function eRr(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRs:function eRs(d,e){this.a=d
this.b=e},
eRt:function eRt(d,e){this.a=d
this.b=e},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRp:function eRp(d,e,f){this.a=d
this.b=e
this.c=f},
eRv:function eRv(d,e,f){this.a=d
this.b=e
this.c=f},
eRo:function eRo(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRx:function eRx(d){this.a=d},
eRn:function eRn(d,e){this.a=d
this.b=e},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRm:function eRm(d,e){this.a=d
this.b=e},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRl:function eRl(d,e){this.a=d
this.b=e},
eRa:function eRa(){},
eRb:function eRb(){},
boJ:function boJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boa:function boa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8F:function b8F(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boc:function boc(d,e,f){this.b=d
this.c=e
this.a=f},
bs7:function bs7(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLr:function aLr(){},
hce(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ae(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aK(0,t*t*t).ae(0,v.aK(0,s*t*f)).ae(0,u.aK(0,s*f*f)).ae(0,e.aK(0,f*f*f))},
bf5(d,e,f,g,h,i){return $.hEu.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.ddJ(d,e,f,i,g,h))},
a_l:function a_l(d,e){this.a=d
this.b=e},
pQ:function pQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qx:function qx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BR:function BR(d,e){this.a=d
this.b=e},
Yl:function Yl(d,e){this.a=d
this.b=e},
ady:function ady(d,e,f,g){var _=this
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
C1:function C1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aav:function aav(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaM:function aaM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acG:function acG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bf3:function bf3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
ddN:function ddN(d){this.a=d},
ddO:function ddO(d){this.a=d},
ddK:function ddK(d,e){this.a=d
this.b=e},
ddL:function ddL(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddP:function ddP(d){this.a=d},
ddQ:function ddQ(d){this.a=d},
ddR:function ddR(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddU:function ddU(d){this.a=d},
ddV:function ddV(d){this.a=d},
ddW:function ddW(d){this.a=d},
ddX:function ddX(d){this.a=d},
Ff:function Ff(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UX:function UX(d){this.a=d},
aCM:function aCM(d,e,f,g,h,i,j){var _=this
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
egJ:function egJ(d){this.a=d},
egy:function egy(d){this.a=d},
egA:function egA(){},
egB:function egB(){},
egE:function egE(){},
egF:function egF(d,e,f){this.a=d
this.b=e
this.c=f},
egG:function egG(d){this.a=d},
egH:function egH(d){this.a=d},
egC:function egC(){},
egD:function egD(d){this.a=d},
eh8:function eh8(d){this.a=d},
egI:function egI(){},
egu:function egu(d){this.a=d},
egL:function egL(d){this.a=d},
egK:function egK(d){this.a=d},
egN:function egN(){},
egM:function egM(d,e){this.a=d
this.b=e},
egx:function egx(){},
egv:function egv(d){this.a=d},
egw:function egw(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh5:function eh5(d){this.a=d},
eh7:function eh7(d){this.a=d},
egX:function egX(d,e){this.a=d
this.b=e},
eh4:function eh4(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh0:function eh0(d){this.a=d},
egY:function egY(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh_:function eh_(d){this.a=d},
egz:function egz(){},
egT:function egT(d){this.a=d},
egU:function egU(d){this.a=d},
egS:function egS(d){this.a=d},
egV:function egV(d){this.a=d},
egR:function egR(d){this.a=d},
egW:function egW(d){this.a=d},
egQ:function egQ(d){this.a=d},
egP:function egP(d){this.a=d},
egO:function egO(d,e){this.a=d
this.b=e},
bf4:function bf4(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ddJ:function ddJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKA:function aKA(){},
bjD:function bjD(d,e,f,g,h){var _=this
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
biH:function biH(d,e,f,g,h,i,j,k){var _=this
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
esz:function esz(d){this.a=d},
esx:function esx(d){this.a=d},
esy:function esy(){},
esa:function esa(){},
es9:function es9(){},
esj:function esj(d,e){this.a=d
this.b=e},
esl:function esl(d){this.a=d},
esp:function esp(d){this.a=d},
esk:function esk(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
ess:function ess(d,e){this.a=d
this.b=e},
esi:function esi(d,e){this.a=d
this.b=e},
est:function est(d){this.a=d},
esh:function esh(d){this.a=d},
esu:function esu(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esv:function esv(d){this.a=d},
esf:function esf(d,e){this.a=d
this.b=e},
esw:function esw(d){this.a=d},
ese:function ese(d){this.a=d},
esm:function esm(d){this.a=d},
esd:function esd(d){this.a=d},
esn:function esn(d){this.a=d},
esc:function esc(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
bq_:function bq_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vo:function Vo(d){this.a=d},
aD1:function aD1(d,e,f,g){var _=this
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
ez8:function ez8(d,e){this.a=d
this.b=e},
ez9:function ez9(d,e,f){this.a=d
this.b=e
this.c=f},
eza:function eza(d){this.a=d},
ez7:function ez7(){},
ezb:function ezb(d,e){this.a=d
this.b=e},
ez6:function ez6(d,e){this.a=d
this.b=e},
ezc:function ezc(d,e){this.a=d
this.b=e},
ez5:function ez5(d,e){this.a=d
this.b=e},
ezd:function ezd(d){this.a=d},
ez4:function ez4(d){this.a=d},
eze:function eze(d,e){this.a=d
this.b=e},
ez3:function ez3(d,e){this.a=d
this.b=e},
ezf:function ezf(d){this.a=d},
ezg:function ezg(d){this.a=d},
ez2:function ez2(d,e){this.a=d
this.b=e},
aKJ:function aKJ(){},
aKP:function aKP(){},
ZS:function ZS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
UU:function UU(d){this.a=d},
aCE:function aCE(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fi$=h
_.kQ$=i
_.fN$=j
_.fj$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
edm:function edm(d){this.a=d},
edn:function edn(d,e){this.a=d
this.b=e},
eda:function eda(d,e){this.a=d
this.b=e},
edb:function edb(d){this.a=d},
ed8:function ed8(d){this.a=d},
ed9:function ed9(d){this.a=d},
ed7:function ed7(d){this.a=d},
edc:function edc(d){this.a=d},
ed6:function ed6(d,e){this.a=d
this.b=e},
ede:function ede(d){this.a=d},
ed5:function ed5(d,e){this.a=d
this.b=e},
edf:function edf(d){this.a=d},
ed4:function ed4(d,e){this.a=d
this.b=e},
edg:function edg(d){this.a=d},
ed3:function ed3(d){this.a=d},
edh:function edh(d){this.a=d},
ed2:function ed2(d){this.a=d},
edi:function edi(d){this.a=d},
ed1:function ed1(d){this.a=d},
edj:function edj(d){this.a=d},
edk:function edk(d){this.a=d},
edl:function edl(d){this.a=d},
ed0:function ed0(d){this.a=d},
edd:function edd(d){this.a=d},
bjq:function bjq(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaC:function aaC(d,e,f){this.a=d
this.b=e
this.c=f},
Vj:function Vj(d){this.a=d},
biM:function biM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fi$=i
_.kQ$=j
_.fN$=k
_.fj$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyq:function eyq(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eym:function eym(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eye:function eye(d){this.a=d},
eyr:function eyr(d,e){this.a=d
this.b=e},
eyl:function eyl(d,e){this.a=d
this.b=e},
eys:function eys(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e){this.a=d
this.b=e},
eyt:function eyt(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyi:function eyi(d,e){this.a=d
this.b=e},
eyv:function eyv(d){this.a=d},
eyh:function eyh(d,e){this.a=d
this.b=e},
eyw:function eyw(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eyc:function eyc(d,e){this.a=d
this.b=e},
eyy:function eyy(d){this.a=d},
eyb:function eyb(d,e){this.a=d
this.b=e},
bqQ:function bqQ(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ab4:function ab4(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Tr:function Tr(d){this.a=d},
aBe:function aBe(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fi$=h
_.kQ$=i
_.fN$=j
_.fj$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dDb:function dDb(d){this.a=d},
dDa:function dDa(d,e){this.a=d
this.b=e},
dDc:function dDc(){},
dDd:function dDd(d){this.a=d},
dD1:function dD1(d,e){this.a=d
this.b=e},
dD4:function dD4(d){this.a=d},
dD3:function dD3(d,e){this.a=d
this.b=e},
dD2:function dD2(d,e){this.a=d
this.b=e},
dD8:function dD8(d,e,f){this.a=d
this.b=e
this.c=f},
dD7:function dD7(d){this.a=d},
dD5:function dD5(d){this.a=d},
dD6:function dD6(d){this.a=d},
dD9:function dD9(d){this.a=d},
b9_:function b9_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cIM:function cIM(d){this.a=d},
aJI:function aJI(){},
bv0:function bv0(){},
aKx:function aKx(){},
bvh:function bvh(){},
aKM:function aKM(){},
bvp:function bvp(){},
Fb:function Fb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
abT:function abT(d,e,f){this.a=d
this.b=e
this.c=f},
UO:function UO(d){this.a=d},
bil:function bil(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fi$=i
_.kQ$=j
_.fN$=k
_.fj$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e9e:function e9e(d){this.a=d},
e93:function e93(d){this.a=d},
e8V:function e8V(d){this.a=d},
e94:function e94(d,e){this.a=d
this.b=e},
e95:function e95(d){this.a=d},
e8U:function e8U(d){this.a=d},
e91:function e91(d){this.a=d},
e92:function e92(d){this.a=d},
e90:function e90(d){this.a=d},
e96:function e96(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e97:function e97(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
e98:function e98(d,e){this.a=d
this.b=e},
e8Y:function e8Y(d,e){this.a=d
this.b=e},
e99:function e99(d){this.a=d},
e8X:function e8X(d,e){this.a=d
this.b=e},
e9a:function e9a(d){this.a=d},
e8W:function e8W(d){this.a=d},
e9b:function e9b(d){this.a=d},
e8T:function e8T(d){this.a=d},
e9c:function e9c(d){this.a=d},
e8S:function e8S(d){this.a=d},
e9d:function e9d(d){this.a=d},
e8R:function e8R(d){this.a=d},
bfZ:function bfZ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
acn:function acn(d,e){this.a=d
this.b=e
this.c=-1000},
UT:function UT(d){this.a=d},
aCD:function aCD(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fi$=h
_.kQ$=i
_.fN$=j
_.fj$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e,f){this.a=d
this.b=e
this.c=f},
ecS:function ecS(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecU:function ecU(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ecM:function ecM(d){this.a=d},
ed_:function ed_(d){this.a=d},
bjr:function bjr(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKv:function aKv(){},
bvf:function bvf(){},
aKw:function aKw(){},
bvg:function bvg(){},
f60(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a72,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iN,w,w,1/0)},
hTT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.V(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gah(j);j.C();){s=j.gU(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e1(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bH(0,new B.foS(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vB.h(0,d[n]).a)return!1
m=C.eu([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fSu(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
rY:function rY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7T:function b7T(d,e){this.a=d
this.b=e},
foS:function foS(d,e){this.a=d
this.b=e},
UR:function UR(d){this.a=d},
aCB:function aCB(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ece:function ece(d){this.a=d},
ecd:function ecd(d,e){this.a=d
this.b=e},
ec0:function ec0(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebW:function ebW(d){this.a=d},
ec_:function ec_(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebX:function ebX(d){this.a=d},
ebY:function ebY(d,e){this.a=d
this.b=e},
ec8:function ec8(){},
ec9:function ec9(d){this.a=d},
ec7:function ec7(d){this.a=d},
eca:function eca(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec5:function ec5(d,e){this.a=d
this.b=e},
ec1:function ec1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec3:function ec3(d){this.a=d},
ecb:function ecb(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ecc:function ecc(d,e){this.a=d
this.b=e},
bgG:function bgG(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dlR:function dlR(d,e){this.a=d
this.b=e},
TP:function TP(d){this.a=d},
bhB:function bhB(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dLy:function dLy(d){this.a=d},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLn:function dLn(d){this.a=d},
dLm:function dLm(){},
dLo:function dLo(d){this.a=d},
dLl:function dLl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLw:function dLw(){},
dLr:function dLr(){},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLt:function dLt(d){this.a=d},
dLp:function dLp(d){this.a=d},
dLu:function dLu(d,e){this.a=d
this.b=e},
dLv:function dLv(d,e){this.a=d
this.b=e},
U4:function U4(d){this.a=d},
aBI:function aBI(d,e,f,g,h){var _=this
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
dOn:function dOn(d){this.a=d},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOa:function dOa(){},
dO9:function dO9(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dOf:function dOf(d){this.a=d},
dOe:function dOe(d,e){this.a=d
this.b=e},
dOg:function dOg(d){this.a=d},
dOd:function dOd(d,e){this.a=d
this.b=e},
dOh:function dOh(d){this.a=d},
dOc:function dOc(d,e){this.a=d
this.b=e},
dOi:function dOi(d){this.a=d},
dOj:function dOj(d){this.a=d},
dOk:function dOk(d){this.a=d},
dOl:function dOl(d){this.a=d},
bc1:function bc1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d1g:function d1g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d1i:function d1i(d,e,f){this.a=d
this.b=e
this.c=f},
d1h:function d1h(d,e){this.a=d
this.b=e},
aJW:function aJW(){},
byb(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a72,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iN,w,w,1/0)},
fiQ(d,e,f,g,h){var w,v,u=null,t=C.ih(u,u,u,u,C.dq(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ch,u,A.er,A.cd)
t.eO()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbb(w)/2))
t.a6(d,w)},
hQY(){var w,v,u,t,s,r,q,p,o=new C.eT()
o.dI(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aW(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.J(0,p))q.push(new C.z(p,1+o.aB(2+A.o.an(t,3))))}A.d.b1(q,new B.fjP())
w.push(new B.aQk(q))}return w},
a0K(d,e){var w,v,u,t
for(w=new C.Wp(d),v="";w.C();){u=C.jC(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jC(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i2z(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Wp(d),v=0,u="";w.C();){t=C.jC(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=C.jC(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQk:function aQk(d){this.a=d},
bEc:function bEc(){},
fjP:function fjP(){},
Tj:function Tj(d){this.a=d},
bhg:function bhg(d,e,f,g,h,i){var _=this
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
dzm:function dzm(){},
dzz:function dzz(d){this.a=d},
dzy:function dzy(d,e,f){this.a=d
this.b=e
this.c=f},
dzA:function dzA(d){this.a=d},
dzx:function dzx(d,e){this.a=d
this.b=e},
dzn:function dzn(d,e){this.a=d
this.b=e},
dzs:function dzs(){},
dzt:function dzt(d){this.a=d},
dzr:function dzr(d){this.a=d},
dzu:function dzu(d,e){this.a=d
this.b=e},
dzq:function dzq(d,e){this.a=d
this.b=e},
dzv:function dzv(d,e){this.a=d
this.b=e},
dzp:function dzp(d,e){this.a=d
this.b=e},
dzw:function dzw(d){this.a=d},
dzo:function dzo(d){this.a=d},
b84:function b84(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cBj:function cBj(d,e){this.a=d
this.b=e},
Ui:function Ui(d){this.a=d},
bhN:function bhN(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dSq:function dSq(d){this.a=d},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSr:function dSr(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSg:function dSg(d,e,f){this.a=d
this.b=e
this.c=f},
dSk:function dSk(d){this.a=d},
dSj:function dSj(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSn:function dSn(d,e){this.a=d
this.b=e},
bdu:function bdu(d,e,f){this.b=d
this.c=e
this.a=f},
d91:function d91(d,e){this.a=d
this.b=e},
d92:function d92(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ts:function Ts(d){this.a=d},
bht:function bht(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dDy:function dDy(d){this.a=d},
dDx:function dDx(d,e){this.a=d
this.b=e},
dDg:function dDg(){},
dDp:function dDp(d){this.a=d},
dDo:function dDo(){},
dDq:function dDq(d){this.a=d},
dDn:function dDn(){},
dDr:function dDr(d){this.a=d},
dDm:function dDm(d){this.a=d},
dDs:function dDs(d){this.a=d},
dDl:function dDl(d){this.a=d},
dDt:function dDt(d){this.a=d},
dDk:function dDk(d){this.a=d},
dDu:function dDu(d,e){this.a=d
this.b=e},
dDj:function dDj(d,e){this.a=d
this.b=e},
dDv:function dDv(d){this.a=d},
dDi:function dDi(d,e){this.a=d
this.b=e},
dDw:function dDw(d){this.a=d},
dDh:function dDh(d,e){this.a=d
this.b=e},
aJA:function aJA(){},
aK3:function aK3(){},
hhc(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fYt(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3p(w,v,u,A.cI,C.V(x.N,x.y))},
hoH(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.fYu(d),d.d*f.b)},
fYu(d){return 42+(D.lL.ag(0,d.b)?(d.ch-1)*38:0)},
e7:function e7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ta:function ta(d,e,f,g){var _=this
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
a9d:function a9d(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aah:function aah(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3p:function a3p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bJX:function bJX(){},
bK7:function bK7(d){this.a=d},
bK2:function bK2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bK8:function bK8(d){this.a=d},
bK9:function bK9(d){this.a=d},
bKb:function bKb(d){this.a=d},
bKc:function bKc(d){this.a=d},
bKa:function bKa(d){this.a=d},
bKd:function bKd(d,e,f){this.a=d
this.b=e
this.c=f},
bKe:function bKe(d){this.a=d},
bJZ:function bJZ(d){this.a=d},
bK_:function bK_(d){this.a=d},
bJY:function bJY(d){this.a=d},
bK0:function bK0(d,e,f){this.a=d
this.b=e
this.c=f},
bK1:function bK1(d){this.a=d},
bJW:function bJW(d){this.a=d},
bKf:function bKf(d,e){this.a=d
this.b=e},
bK3:function bK3(d,e){this.a=d
this.b=e},
bK6:function bK6(d){this.a=d},
bK5:function bK5(d){this.a=d},
bK4:function bK4(d){this.a=d},
ahq:function ahq(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFo:function bFo(){},
bFp:function bFp(){},
mp:function mp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cij:function cij(d){this.a=d},
i0e(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fAg(),c9=new B.fAi(),d0=new B.fAj(),d1=new B.fAh(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.aa(w.a,w.b,w.c,w.d),A.bN,A.bI))
d3.bA(D.e_6,D.dXV,c9.$2(A.dz,1.4))
d3.bA(D.dXL,D.dXK,c9.$2(A.bw,2.4))
d3.bA(D.dXM,W.aEF,c9.$2(A.bw,2.4))
if(c7){d2=c8.$1(A.fg.j(0.5))
d2.z=A.Qk
d3.ai(D.dXv,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aKr,A.aP,A.cn))
d3.ai(A.cJ,16,c8.$1(A.bw))
d3.ai(A.cJ,13,c8.$1(c7?A.aW.j(0.85):A.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.j7(0,d4.y*0.6)
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
r.delete()}}d3.ai(D.e_2,2.4,c8.$1(c7?A.bn:A.ak))
d3.ai(D.e_K,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.et))
d2=$.X().r
t=x.v
q=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bF())
d3.aO(q,c8.$1(A.fg.j(0.35)))
if(c7){d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.aB.j(0.7)))}d3.aO(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.j7(0,d4.y)
d3.bA(D.a4c,D.aEV,c9.$2(A.bW,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f9).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ai(A.ic,3,c8.$1(c7?A.bn:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=D.avO[m]
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
w.E(new C.bF())
d3.aO(w,d1.$3(D.eBj,A.aM,A.dj))
d3.aY(D.eAJ,c8.$1(A.dL))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.j7(0,d4.y*2)
d3.bA(A.J,D.dXP,c9.$2(A.bW,2.4))
d3.bA(A.a4b,D.dXO,c9.$2(A.hE,1))
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
d3.aO(d2,c8.$1(A.bJ.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eBp,A.bo,A.cC))
k=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aO(k,c8.$1(A.et))
d3.ai(D.dXT,7,c8.$1(c7?A.c:A.dL))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(M.mL))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bw(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.bei
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lg
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e_c,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eBv,A.bW,A.bo))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bJ.j(0.75):A.aA))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.j7(0,d4.y*0.5)
d3.i_(C.cu(A.J,7,22),c8.$1(A.dj))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(M.mL))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.F(A.k.bw(d5),60)),2,"0"),D.dXU,A.bc,6.5)
d3.ai(D.dY5,4,c8.$1(A.dL))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ai(A.R8,10,c8.$1(c7?A.cp:A.bw))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.j7(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e_M,A.c,16)
d2.restore()
d3.ai(A.jX,6,c8.$1(A.d7))
d3.ai(A.jX,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.R8,14+v*6+A.k.F(t,6))
r=c9.$2(A.cp.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c4(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e_b,D.e_I,c9.$2(A.bw,4))
d2=d3.a
J.bA(d2.save())
d3.j7(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eBk,A.bW,A.ak))
d3.ai(D.aEH,8,c8.$1(A.aA))
d3.ai(D.aEH,4.5,c8.$1(c7?A.aW:A.cC))
d3.ai(D.e_9,2.2,c8.$1(c7&&A.o.F(A.k.bw(d5*1.6),2)===0?A.aB:A.k8))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e_k,A.aB,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eBs,A.j2,A.f5))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dJ))
if(c7){d2=d5*2.3
d3.ai(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.aa(-18,t,-15.6,t+8),c8.$1(A.bc))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.aa(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ai(D.e_5,4,c8.$1(A.aX))
d3.ai(D.dXQ,2.4,c8.$1(A.aB))
d3.ai(D.dY2,2.4,c8.$1(A.bn))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aA))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dJ))
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
h.e=null}}d3.aO(h,c9.$2(A.bc,1.8))
d6.$5(d3,"72",D.dXR,A.fX,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e_o,A.fX.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ai(D.e_e,3,c8.$1(c7?A.bn:A.bw))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cv.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eBm,c8.$1(F.rQ))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rT(0,-1,1)
d3.i_(C.cu(A.J,8,14),c8.$1(A.cw))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.cb))
d3.ai(D.dYx,1.2,c8.$1(A.w))
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
d3.aO(e,d1.$3(D.eBQ,A.c,A.bL))
d3.aY(D.eBP,c8.$1(c7?A.dN:A.bw))
s=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aO(s,c8.$1(A.ex))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.Qk
d3.ai(D.dXw,14,d2)}return!0
case"discoball":d3.bA(D.dXB,L.aED,c9.$2(A.dL,1.4))
d3.ai(A.J,16,d1.$3(D.eB7,A.aP,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dm,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dm,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d_g[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eB5,A.cn,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eAZ,A.aL,A.bI))
d3.bA(D.dXA,D.dXC,c9.$2(A.bw,1.6))
d3.ai(D.dXD,2.2,c8.$1(c7?A.aB:A.bw))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.avQ[m]
if(c7)t=a1?A.b7:A.fh
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.j7(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a48,c9.$2(A.bI,4))
d2.restore()
d3.bA(D.dZZ,D.e_i,c9.$2(A.bI,4))
d3.aY(D.eBO,c8.$1(c7?A.b7.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.avM[m]+1,d2,10,14,2)
p=C.aq(A.bJ,A.dj,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.ep(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eBl,A.bW,A.bo))
for(m=0;m<2;++m){l=D.avM[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fC:A.aA).H()
t.drawRRect(C.ep(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cw.j(0.5))
s.z=G.mn
r=s.H()
t.drawRRect(C.ep(d2),r)
r.delete()}}d3.bA(D.dY9,D.dYq,c9.$2(A.aA,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.mI(1,a3,0.8,1).iB():A.et
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mn
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dL))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eBa,A.cv,A.Ki))
d3.ai(D.e_p,8,c8.$1(A.qu))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.j7(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fg,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aO(t,c9.$2(A.bI,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.he).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ai(D.dYY,3.2,c8.$1(A.he.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.j7(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eBn,A.iZ,A.rT))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.et))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cw.j(0.4))
d2.z=G.mn
d3.ai(D.dY4,8,d2)}return!0
case"headphones":d3.fg(C.cu(A.dB,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bw,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.avN[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.aa(s,0,s+14,20),A.by,A.pb).H()
d2.drawRRect(C.ep(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ez.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c4(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.F(d5*14,8)),A.k5,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eB3,A.dL,A.et))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dJ))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dh(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.dXH,A.bc,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DG,A.fX,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bw(d5*2),6)),A.dB,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(M.mL))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bI,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(a5),$.pi(),!0)
d2.translate(-27,-19)
E.Kw(d3,D.eGZ,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uL))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.aa(a6.a,a6.b,a6.c,a6.d),A.dS,A.dp))
d3.aD(a6,c9.$2(A.b5,1.2))
d3.ai(D.aF1,9,c8.$1(A.aA))
d3.ai(D.aF1,6,c9.$2(A.dj,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aA))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dJ))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.bc:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.dZ1,s,8.2)
d3.ai(D.dXW,2.4,c8.$1(c7?A.bn:A.aK))
d6.$5(d3,"IN",D.e_j,A.ad,6)
d6.$5(d3,"OUT",D.dYQ,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bI,A.aB,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ai(D.dXx,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eB_,A.et,A.hB))
d6.$5(d3,"7805",D.a4c,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d4D[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c4(new C.aa(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e_L,A.bh,9)
return!0
case"diode":d3.bA(D.aF5,D.aEQ,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aJ.j(0.85)))
d3.aY(D.eAP,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.jd
d3.aD(d2,t)}d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e_7,A.ay,8)
return!0
case"ldr":d3.bA(D.aF5,D.a4c,c9.$2(A.e2,2.4))
d3.bA(D.aEV,D.aEQ,c9.$2(A.e2,2.4))
d3.ai(A.J,12,c8.$1(A.dj))
d3.ai(A.J,12,c9.$2(A.t2,1.6))
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
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e__,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e8
break A}if("sonytv"===d2){t=A.qn
break A}if("appletv"===d2){t=A.e2
break A}t=F.DI
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
E.fUM(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ai(D.dYr,1.6,c8.$1(A.bc))}else{d3.aD(a5,c8.$1(D.uL))
p=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aO(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dL))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oG[m]
s=$.X()
p=C.a([],t)
s=new C.aQ(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dL).H()
p=s.gbI().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.dZD,A.bW,5.5)
break
case"appletv":d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.VX))
d6.$5(d3,"Apple TV",D.dZ2,A.bw,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bcV))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e_H,F.rQ,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lL.h(0,d2)
b1=b0.b===D.vR
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
t.restore()}else d3.aD(a5,c8.$1(D.uL))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ai(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.et))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bW))
if(c7){d6.$5(d3,"NGMY",D.e_O,A.aA,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bo).H()
d2.drawRect(C.c4(new C.aa(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ai(A.aEB,1.6,c8.$1(A.aA))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eBw,A.cn,A.bo))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b8),$.pi(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Kw(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uL))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.VX))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bo))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eBA,A.bN,A.cn))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b9),$.pi(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Kw(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uL))
d3.ai(D.aEw,2,c8.$1(A.bI))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.VX))
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
d2.restore()}else d3.aD(c0,c8.$1(D.uL))
d3.aY(D.eBG,c8.$1(A.bo))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dL))
return!0
case"projector":if(c7){d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c1),$.pi(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Kw(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eBo,A.iH,A.dL))
d3.ai(D.aEG,7,c8.$1(A.aA))
d3.ai(D.aEG,4,c8.$1(c7?A.dN:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aA))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(M.mL))
d3.aD(c2,c9.$2(A.bw,1.2))
if(c7){c3=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aO(c3,c9.$2(A.aW,2.2))
d2=A.k.F(d5*6,48)
d3.ai(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.bc))
d6.$5(d3,""+(88+A.o.F(A.k.bw(d5*2),5)),D.dYZ,A.c,10)
d6.$5(d3,"km/h",D.dYW,A.ay,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.aa(c4.a,c4.b,c4.c,c4.d),A.dL,A.et))
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
d3.bA(D.e_t,D.e_y,c9.$2(A.bo,4))
d3.bA(D.dYs,D.dYA,c9.$2(A.bo,4))
return!0}return!1},
fAg:function fAg(){},
fAi:function fAi(){},
fAj:function fAj(){},
fAh:function fAh(){},
fXo(d,e,f,g){return new B.aho(d,g,f,e)},
F_(d,e,f){return new B.b91(d,e,f)},
aho:function aho(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahp:function ahp(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fi$=h
_.kQ$=i
_.fN$=j
_.fj$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bF2:function bF2(d,e){this.a=d
this.b=e},
bF3:function bF3(d){this.a=d},
bF1:function bF1(d){this.a=d},
bF4:function bF4(){},
bF5:function bF5(d){this.a=d},
bF6:function bF6(d,e,f){this.a=d
this.b=e
this.c=f},
bF0:function bF0(d,e){this.a=d
this.b=e},
bEZ:function bEZ(d,e){this.a=d
this.b=e},
bF_:function bF_(d,e,f){this.a=d
this.b=e
this.c=f},
bET:function bET(d,e){this.a=d
this.b=e},
bEU:function bEU(){},
bEV:function bEV(d,e){this.a=d
this.b=e},
bEW:function bEW(d,e){this.a=d
this.b=e},
bEX:function bEX(d){this.a=d},
bEY:function bEY(d){this.a=d},
bFl:function bFl(d){this.a=d},
bFm:function bFm(){},
bEw:function bEw(){},
bFn:function bFn(d,e){this.a=d
this.b=e},
bFk:function bFk(d,e,f){this.a=d
this.b=e
this.c=f},
bFf:function bFf(d){this.a=d},
bFc:function bFc(d,e,f){this.a=d
this.b=e
this.c=f},
bFd:function bFd(d,e){this.a=d
this.b=e},
bFg:function bFg(d){this.a=d},
bFa:function bFa(d,e){this.a=d
this.b=e},
bFb:function bFb(d,e){this.a=d
this.b=e},
bFe:function bFe(d){this.a=d},
bFh:function bFh(d){this.a=d},
bF8:function bF8(d,e){this.a=d
this.b=e},
bF9:function bF9(d,e){this.a=d
this.b=e},
bFi:function bFi(d){this.a=d},
bF7:function bF7(d){this.a=d},
bFj:function bFj(d){this.a=d},
bEx:function bEx(d,e){this.a=d
this.b=e},
bEQ:function bEQ(d,e){this.a=d
this.b=e},
bES:function bES(d,e){this.a=d
this.b=e},
bER:function bER(d,e){this.a=d
this.b=e},
bED:function bED(d,e){this.a=d
this.b=e},
bEE:function bEE(d){this.a=d},
bEC:function bEC(d){this.a=d},
bEF:function bEF(d,e,f){this.a=d
this.b=e
this.c=f},
bEB:function bEB(d,e){this.a=d
this.b=e},
bEI:function bEI(d,e){this.a=d
this.b=e},
bEJ:function bEJ(d,e){this.a=d
this.b=e},
bEK:function bEK(d,e){this.a=d
this.b=e},
bEL:function bEL(d,e,f){this.a=d
this.b=e
this.c=f},
bEA:function bEA(d,e){this.a=d
this.b=e},
bEM:function bEM(d,e,f){this.a=d
this.b=e
this.c=f},
bEz:function bEz(d,e){this.a=d
this.b=e},
bEN:function bEN(d,e,f){this.a=d
this.b=e
this.c=f},
bEy:function bEy(d,e){this.a=d
this.b=e},
bEO:function bEO(d){this.a=d},
bEP:function bEP(d){this.a=d},
bEG:function bEG(d){this.a=d},
bEH:function bEH(d){this.a=d},
b91:function b91(d,e,f){this.a=d
this.b=e
this.c=f},
f9V:function f9V(){},
f9W:function f9W(){},
f9X:function f9X(){},
f9I:function f9I(){},
f9Y:function f9Y(){},
f9H:function f9H(){},
f9Z:function f9Z(){},
f9M:function f9M(){},
f9G:function f9G(){},
f9N:function f9N(){},
f9F:function f9F(){},
f9O:function f9O(){},
f9E:function f9E(){},
f9P:function f9P(){},
f9C:function f9C(){},
f9D:function f9D(){},
f9Q:function f9Q(){},
f9A:function f9A(){},
f9B:function f9B(){},
f9R:function f9R(){},
f9z:function f9z(){},
U5:function U5(d){this.a=d},
aBJ:function aBJ(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOF:function dOF(){},
dOG:function dOG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOH:function dOH(){},
dOu:function dOu(d){this.a=d},
dOt:function dOt(d,e,f){this.a=d
this.b=e
this.c=f},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOq:function dOq(d){this.a=d},
dOr:function dOr(){},
dOD:function dOD(d){this.a=d},
dOC:function dOC(d){this.a=d},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOz:function dOz(){},
dOB:function dOB(d,e,f){this.a=d
this.b=e
this.c=f},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOx:function dOx(){},
dOJ:function dOJ(d){this.a=d},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOI:function dOI(){},
dOL:function dOL(d,e){this.a=d
this.b=e},
dOM:function dOM(d){this.a=d},
dON:function dON(d){this.a=d},
avQ:function avQ(d,e){this.c=d
this.a=e},
b7d:function b7d(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
cyR:function cyR(d){this.a=d},
b7c:function b7c(d,e){this.b=d
this.a=e},
cyQ:function cyQ(d){this.a=d},
aw8:function aw8(){},
aw9:function aw9(){},
aI6:function aI6(){},
bv3:function bv3(){},
i0f(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.vJ,23)
$.X()
b8=C.M()
b8.r=A.aA.gp(0)
b9.ai(A.vJ,25,b8)
b8=C.M()
b8.sau(D.e7x.aw(0,v))
b9.ai(A.vJ,23,b8)
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
r.r=A.bL.gp(0)
r.c=2
r.d=A.bO
b9.bA(A.vJ,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bh.gp(0)
b9.ai(A.vJ,3,r)
c2.$5(b9,w?"V":"A",D.e_B,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e_4,A.aA,9.5)
return!0
case"fan":b8=C.bz(D.eAW,A.hy)
$.X()
s=C.M()
s.r=A.bw.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aY(D.eBH,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.ai(D.vK,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cu(A.aEA,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.he.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c4(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bm.gp(0)
b9.ai(D.vK,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cn.gp(0)
b9.ai(D.vK,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.j3.gp(0)
b9.ai(D.vK,14,b8)
return!0
case"speaker":l=C.bz(D.aKr,A.ua)
$.X()
b8=C.M()
b8.sau(D.amN.aw(0,new C.aa(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.sau(D.e7T.aw(0,C.bU(A.cy,15)))
b9.ai(A.cy,14+k,b8)
b8=C.M()
b8.r=A.dL.gp(0)
b9.ai(A.cy,5,b8)
b8=C.M()
b8.r=A.bo.gp(0)
b9.ai(D.aEC,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.dY8,6+u*6+A.k.F(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c4(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bz(D.eBz,A.ua)
$.X()
b8=C.M()
b8.sau(D.bRb.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.aKt,A.ie)
s=C.M()
s.r=A.hB.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bn(i)<500?":":" "
g=A.a.aT(A.o.u(C.dh(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.bc.j(0.12).gp(0)
b9.aY(D.aKt,b8)
c2.$5(b9,g+h+f,D.e_m,A.bc,21)}b8=C.M()
b8.r=A.cn.gp(0)
b9.ai(D.e_l,2.4,b8)
b8=C.M()
b8.r=A.cn.gp(0)
b9.ai(D.dYc,2.4,b8)
return!0
case"calculator":j=C.bz(D.eBf,A.h9)
$.X()
b8=C.M()
b8.sau(D.bQW.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.eB9,A.h8)
s=C.M()
s.r=(b7?A.W8:D.beN).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e_3,A.V_,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bz(new C.aa(q,s,q+6,r),A.RB)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cb:A.bW).gp(0)
n=p.H()
b8.drawRRect(C.ep(q),n)
n.delete()}return!0
case"phone":j=C.bz(D.eB6,A.h9)
$.X()
b8=C.M()
b8.r=M.mL.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.aem.gp(0)
b9.aD(j,b8)
a0=C.bz(D.eAY,A.hy)
if(b7){b8=C.M()
b8.sau(D.bSu.aw(0,new C.aa(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.ep(a0),$.pi(),!0)
b8.translate(-12,-25)
E.Kw(b9,D.eGA,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=C.bz(D.eAV,A.h8)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.bc.gp(0)
b9.aY(new C.aa(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.dZl,A.c,6)}else{b8=C.M()
b8.r=D.uL.gp(0)
b9.aD(a0,b8)}b8=C.bz(D.eBR,D.e81)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bz(D.eBy,A.rd)
$.X()
b8=C.M()
b8.sau(D.bRr.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.avN[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bw(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bn:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.vK,8+u*6+A.k.F(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.ht.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c4(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bz(D.eBe,A.hy)
s=$.X()
r=C.M()
r.r=A.et.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.aB.j(0.5*a5).gp(0)
b8.z=A.yA
b9.ai(A.vJ,34,b8)}a6=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.M()
b8.r=C.aq(A.ex,D.b7t,a5).gp(0)
b9.aO(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.j7(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aEC,s)
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
j.E(new C.bF())
q=C.M()
q.sau(D.bPA.aw(0,D.eBr))
b9.aO(j,q)
q=new C.aQ(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.M()
p.r=A.fg.gp(0)
b9.aO(q,p)
r=new C.aQ(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.M()
s.r=A.fg.gp(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.d4x[a2]
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
q.r=A.bW.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.ay.gp(0)
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
r.sau(D.bQC.aw(0,D.eBd))
b9.aO(j,r)
r=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
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
if(b7){s=C.aq(A.cw,A.uK,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.et
b8.r=s.gp(0)
b9.aY(D.eBc,b8)
if(b7){b8=C.M()
b8.r=A.cw.j(0.3).gp(0)
b8.z=A.lg
b9.ai(A.aEy,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aA.gp(0)
b9.ai(D.dXu,3,b8)
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
s.z=X.H0
b9.ai(D.e_q,24,s)}b8=C.bz(D.eBN,A.hy)
s=$.X()
r=C.M()
r.r=A.et.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.dXI,D.aEI,r)
r=C.M()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aEI,D.e_r,r)
a9=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.M()
s.r=(b7?A.aM:A.jK).gp(0)
b9.aO(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bo).gp(0)
b9.ai(D.e_s,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.hd.gp(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a18[u].j(0.6).gp(0)
b3.z=A.Qk
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
if(b2)o=D.a18[u]
else{o=C.aq(D.a18[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i0e(b9,c0,c1,c2)},
fJ:function fJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSU(d){var w=D.lL.h(0,d)
return(w==null?null:w.b)===D.yZ},
i1l(d,e,f){return C.a5(d,!1).ce(C.ut(null,!1,!0,!0,new B.fEQ(e,f),A.eN,null,A.po,new B.fER(),x.H))},
ID:function ID(d,e){this.a=d
this.b=e},
lX:function lX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEQ:function fEQ(d,e){this.a=d
this.b=e},
fER:function fER(){},
TN:function TN(d,e,f){this.c=d
this.d=e
this.a=f},
bhz:function bhz(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dKr:function dKr(d){this.a=d},
dKq:function dKq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKo:function dKo(){},
dKp:function dKp(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKk:function dKk(d){this.a=d},
dKj:function dKj(d){this.a=d},
dKf:function dKf(d){this.a=d},
dKe:function dKe(d){this.a=d},
dKi:function dKi(d,e,f){this.a=d
this.b=e
this.c=f},
dKh:function dKh(d){this.a=d},
dKg:function dKg(d){this.a=d},
bt8:function bt8(d,e,f){this.b=d
this.c=e
this.a=f},
adr:function adr(d,e,f){this.b=d
this.c=e
this.a=f},
aJT:function aJT(){},
fe7(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.zd,A.L,w,w),A.az,C.c_(A.fM,g,A.bt,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.V7,w,u,v,w,w,A.n),w,w,w,A.eA,A.a9,w,w,w),w,w,w)},
fT_(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eT()
b4.dI(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.V(u,t)
m=w
l=0
k=N.pV
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
a2=b4.hf()?new C.z(f,-g):new C.z(-f,g)
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
A.d.fo(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.J(0,a7)}b0=C.aW(u)
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
b0.J(0,a7)}}v=b5>=10?1:0
return new B.aUR(b0,a9,C.V(u,t),q,N.pV,w+v)}return new B.aUR(C.aW(u),C.eu([25],u),C.V(u,t),21,N.pV,1)},
hh5(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aW(x.S),n=d.e,m=A.o.F(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bmq(p,o)},
hcu(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aUR:function aUR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UB:function UB(d){this.a=d},
bi8:function bi8(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fi$=g
_.kQ$=h
_.fN$=i
_.fj$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e4p:function e4p(d){this.a=d},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4q:function e4q(){},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4h:function e4h(d){this.a=d},
e4i:function e4i(d){this.a=d},
e4k:function e4k(d){this.a=d},
e4l:function e4l(d){this.a=d},
e4m:function e4m(d){this.a=d},
e4n:function e4n(d,e){this.a=d
this.b=e},
bf9:function bf9(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
de5:function de5(d,e,f){this.a=d
this.b=e
this.c=f},
de8:function de8(d,e,f){this.a=d
this.b=e
this.c=f},
de6:function de6(d){this.a=d},
de7:function de7(d){this.a=d},
UD:function UD(d){this.a=d},
aCn:function aCn(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fi$=g
_.kQ$=h
_.fN$=i
_.fj$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e4I:function e4I(d){this.a=d},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4J:function e4J(){},
e4t:function e4t(){},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4A:function e4A(d){this.a=d},
e4B:function e4B(d){this.a=d},
e4u:function e4u(d){this.a=d},
e4D:function e4D(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4E:function e4E(d){this.a=d},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4F:function e4F(d){this.a=d},
e4w:function e4w(d,e){this.a=d
this.b=e},
e4G:function e4G(d){this.a=d},
bfo:function bfo(d,e){this.b=d
this.a=e},
aKk:function aKk(){},
bv8:function bv8(){},
aKl:function aKl(){},
bv9:function bv9(){},
a_Q(d,e,f,g,h,i){return new B.brY(d,e,f,g,h,i)},
brY:function brY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faC:function faC(){},
faD:function faD(){},
faE:function faE(){},
faF:function faF(){},
faG:function faG(){},
faH:function faH(){},
faI:function faI(){},
faJ:function faJ(){},
a7h:function a7h(d){this.a=d},
ccX:function ccX(d){this.a=d},
ccY:function ccY(){},
ccW:function ccW(d,e){this.a=d
this.b=e},
ccV:function ccV(d){this.a=d},
Vu:function Vu(d){this.a=d},
aDe:function aDe(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fi$=f
_.kQ$=g
_.fN$=h
_.fj$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eDB:function eDB(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDA:function eDA(d){this.a=d},
btk:function btk(d,e,f){this.b=d
this.c=e
this.a=f},
Uc:function Uc(d){this.a=d},
bhI:function bhI(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fi$=d
_.kQ$=e
_.fN$=f
_.fj$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dQJ:function dQJ(){},
dQK:function dQK(){},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQH:function dQH(d){this.a=d},
dQF:function dQF(d){this.a=d},
dQI:function dQI(d){this.a=d},
bob:function bob(d,e,f){this.b=d
this.c=e
this.a=f},
Tp:function Tp(d){this.a=d},
bhl:function bhl(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fi$=d
_.kQ$=e
_.fN$=f
_.fj$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dBZ:function dBZ(){},
dC_:function dC_(){},
dBU:function dBU(){},
dBX:function dBX(d,e){this.a=d
this.b=e},
dBW:function dBW(d,e){this.a=d
this.b=e},
dBY:function dBY(d){this.a=d},
dBV:function dBV(d){this.a=d},
aGB:function aGB(d,e,f){this.a=d
this.b=e
this.c=f},
U3:function U3(d){this.a=d},
bhC:function bhC(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dO_:function dO_(d,e){this.a=d
this.b=e},
dO0:function dO0(d){this.a=d},
dNZ:function dNZ(d,e){this.a=d
this.b=e},
dO1:function dO1(d){this.a=d},
dNY:function dNY(d,e){this.a=d
this.b=e},
dO2:function dO2(d){this.a=d},
dNX:function dNX(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
dNW:function dNW(d,e){this.a=d
this.b=e},
dO4:function dO4(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dO5:function dO5(d){this.a=d},
dNU:function dNU(d){this.a=d},
dO6:function dO6(d){this.a=d},
dNT:function dNT(d){this.a=d},
dO7:function dO7(d){this.a=d},
dO8:function dO8(d){this.a=d},
dNS:function dNS(d){this.a=d},
bjE:function bjE(d,e,f){this.b=d
this.c=e
this.a=f},
UP:function UP(d){this.a=d},
aCx:function aCx(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea5:function ea5(d,e,f){this.a=d
this.b=e
this.c=f},
ea3:function ea3(d,e,f){this.a=d
this.b=e
this.c=f},
ea6:function ea6(d){this.a=d},
ea2:function ea2(d){this.a=d},
eaa:function eaa(d){this.a=d},
ea9:function ea9(d,e){this.a=d
this.b=e},
ea8:function ea8(d,e){this.a=d
this.b=e},
eab:function eab(d,e){this.a=d
this.b=e},
ea7:function ea7(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
V2:function V2(d){this.a=d},
aCT:function aCT(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekA:function ekA(d){this.a=d},
eky:function eky(d){this.a=d},
ekD:function ekD(d){this.a=d},
ekE:function ekE(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekG:function ekG(d,e){this.a=d
this.b=e},
Vn:function Vn(d){this.a=d},
biQ:function biQ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eyT:function eyT(){},
ez1:function ez1(){},
eyY:function eyY(d){this.a=d},
eyX:function eyX(){},
eyZ:function eyZ(d,e){this.a=d
this.b=e},
eyW:function eyW(d,e){this.a=d
this.b=e},
ez_:function ez_(d){this.a=d},
eyV:function eyV(d,e){this.a=d
this.b=e},
ez0:function ez0(d){this.a=d},
eyU:function eyU(d){this.a=d},
UN:function UN(d){this.a=d},
bij:function bij(d,e,f,g,h,i,j,k){var _=this
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
_.fi$=f
_.kQ$=g
_.fN$=h
_.fj$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
e8K:function e8K(){},
e8L:function e8L(){},
e8D:function e8D(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8E:function e8E(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8F:function e8F(d){this.a=d},
e8A:function e8A(d){this.a=d},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8z:function e8z(d,e){this.a=d
this.b=e},
e8H:function e8H(d){this.a=d},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8I:function e8I(d){this.a=d},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8J:function e8J(d){this.a=d},
e8w:function e8w(d,e){this.a=d
this.b=e},
bbn:function bbn(d,e,f){this.c=d
this.d=e
this.a=f},
aJG:function aJG(){},
bv_:function bv_(){},
aJZ:function aJZ(){},
bv4:function bv4(){},
aKt:function aKt(){},
bve:function bve(){},
aKX:function aKX(){},
bvq:function bvq(){},
jD(d,e,f,g,h,i){return new B.b52(h,d,f,g,i,e,null)},
hgX(d,e,f,g){var w=null
return C.c9(w,w,!0,w,new B.fIG(g,e,f),d,w,!0,!0,x.H)},
hx(d,e,f,g,h,i,j){return new B.auf(f,j,i,h,g,d,e,null)},
qE(d,e,f){return B.i2a(d,e,f)},
i2a(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qE=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lL(2),$async$qE)
case 7:q=h
w=8
return C.b(q.hm(A.fS),$async$qE)
case 8:p=h
if(p==null){w=1
break}o=J.fa(A.dG.gaP(p))
w=9
return C.b(B.cnN(C.a([B.h6_(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qE)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aMt)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qE,v)},
la(d,e,f,g){var w,v=$.aqp
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vF(v,e,f,g)},
vF(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
Ba(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqp
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.la(d,e[w],f,g)
return}for(p=C.dc(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bV(p,p.gM(0),v.k("bV<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.la(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.ccT(d,s,f,g),u)}},
a7g(d,e){var w="sine",v="noise"
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
z3(d){return B.hxO(d)},
hxO(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$z3=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$z3)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.V(x.N,x.z)
w=1
break}p=A.R.aG(0,q,null)
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
vC(d,e){return B.hxP(d,e)},
hxP(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
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
b52:function b52(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cpK:function cpK(d){this.a=d},
cpL:function cpL(d,e){this.a=d
this.b=e},
fIG:function fIG(d,e,f){this.a=d
this.b=e
this.c=f},
fIF:function fIF(d){this.a=d},
dz:function dz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cpG:function cpG(d){this.a=d},
eK:function eK(d,e,f){this.c=d
this.d=e
this.a=f},
auf:function auf(d,e,f,g,h,i,j,k){var _=this
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
cpF:function cpF(d){this.a=d},
EI:function EI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpM:function cpM(d){this.a=d},
ms:function ms(){},
cpH:function cpH(d,e,f){this.a=d
this.b=e
this.c=f},
cpJ:function cpJ(d){this.a=d},
cpI:function cpI(){},
ccT:function ccT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csg(){var w=0,v=C.j(x.cL),u,t
var $async$csg=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tP().bdv("assets/data/world110.json"),$async$csg)
case 3:u=t.hCl(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$csg,v)},
hCl(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
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
g=C.aOP(g,f,"",0)
f=C.f8(J.q(p.h(r,"c"),0))
p=C.f8(J.q(p.h(r,"c"),1))
e=new B.a9Y(o,m,l,j,i,h,g,f,p,q)
e.bvB(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.a9Z(a1)},
fmt(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gc(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a9Y:function a9Y(d,e,f,g,h,i,j,k,l,m){var _=this
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
a9Z:function a9Z(d){this.a=d},
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
hEe(d,e,f){return $.hEf.ci(0,d+"|"+C.t(e)+"|"+f.l(),new B.d9Q(d,e,f))},
Uj:function Uj(d){this.a=d},
aBU:function aBU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fi$=j
_.kQ$=k
_.fN$=l
_.fj$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dTr:function dTr(d){this.a=d},
dTq:function dTq(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d,e,f){this.a=d
this.b=e
this.c=f},
dSR:function dSR(d){this.a=d},
dSQ:function dSQ(){},
dSP:function dSP(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTd:function dTd(d,e){this.a=d
this.b=e},
dT1:function dT1(d){this.a=d},
dT2:function dT2(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT3:function dT3(d){this.a=d},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
dTi:function dTi(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTl:function dTl(d){this.a=d},
dT8:function dT8(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dT7:function dT7(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dTo:function dTo(d){this.a=d},
dT5:function dT5(d){this.a=d},
dTp:function dTp(d){this.a=d},
dT4:function dT4(d){this.a=d},
dTf:function dTf(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dTg:function dTg(d){this.a=d},
dSY:function dSY(d){this.a=d},
dTh:function dTh(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSO:function dSO(){},
dSN:function dSN(d){this.a=d},
dSM:function dSM(d){this.a=d},
bdB:function bdB(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d9Q:function d9Q(d,e,f){this.a=d
this.b=e
this.c=f},
d9R:function d9R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aK4:function aK4(){},
aK5:function aK5(){},
adZ(d,e,f,g,h){return new B.brT(d,e,f,g,h)},
brT:function brT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fav:function fav(){},
faw:function faw(){},
fax:function fax(){},
fay:function fay(){},
faz:function faz(){},
faA:function faA(){},
faB:function faB(){},
Vq:function Vq(d){this.a=d},
biU:function biU(){this.d=$
this.c=this.a=null},
ezM:function ezM(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezO:function ezO(){},
ezK:function ezK(d,e){this.a=d
this.b=e},
ezJ:function ezJ(d){this.a=d},
hEG(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w+900)
u.push(2.2+v.aj())}return new B.biG(new C.cp(null,x.A),new B.On(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hEI(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hEH(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h7b(d,e,f){return $.hFh.ci(0,d+"|"+C.t(e)+"|"+f.l(),new B.eTW(d,e,f))},
Vb:function Vb(d){this.a=d},
biG:function biG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fi$=j
_.kQ$=k
_.fN$=l
_.fj$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
erP:function erP(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
es0:function es0(d,e){this.a=d
this.b=e},
erX:function erX(d){this.a=d},
erY:function erY(d){this.a=d},
erZ:function erZ(d){this.a=d},
es1:function es1(d){this.a=d},
erW:function erW(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
es3:function es3(d){this.a=d},
erV:function erV(d,e){this.a=d
this.b=e},
es4:function es4(d){this.a=d},
erU:function erU(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
erT:function erT(d){this.a=d},
es6:function es6(d){this.a=d},
erS:function erS(d){this.a=d},
es7:function es7(d){this.a=d},
erR:function erR(d){this.a=d},
es8:function es8(d){this.a=d},
erQ:function erQ(d){this.a=d},
erO:function erO(){},
erN:function erN(){},
erM:function erM(d){this.a=d},
erL:function erL(d){this.a=d},
bpY:function bpY(d,e){this.b=d
this.a=e},
eTW:function eTW(d,e,f){this.a=d
this.b=e
this.c=f},
eTX:function eTX(){},
eTY:function eTY(){},
Uk:function Uk(d){this.a=d},
aBV:function aBV(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fi$=k
_.kQ$=l
_.fN$=m
_.fj$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dTv:function dTv(){},
dTY:function dTY(){},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTL:function dTL(d){this.a=d},
dTA:function dTA(d){this.a=d},
dTM:function dTM(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTR:function dTR(d){this.a=d},
dTH:function dTH(d,e){this.a=d
this.b=e},
dTS:function dTS(d){this.a=d},
dTT:function dTT(d){this.a=d},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTV:function dTV(d){this.a=d},
dTE:function dTE(d,e){this.a=d
this.b=e},
dTW:function dTW(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTX:function dTX(d){this.a=d},
dTC:function dTC(d){this.a=d},
dTN:function dTN(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTO:function dTO(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTP:function dTP(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTu:function dTu(d){this.a=d},
dTt:function dTt(){},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTs:function dTs(d){this.a=d},
b8R:function b8R(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
V3:function V3(d){this.a=d},
biD:function biD(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fi$=e
_.kQ$=f
_.fN$=g
_.fj$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
ekK:function ekK(d,e){this.a=d
this.b=e},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekH:function ekH(d,e){this.a=d
this.b=e},
bpw:function bpw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eS5:function eS5(d){this.a=d},
aK6:function aK6(){},
bv6:function bv6(){},
aKF:function aKF(){},
bvk:function bvk(){},
aKI:function aKI(){},
bvm:function bvm(){},
hEE(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eT()
v.dI(w)
v=v.aj()
u=new C.eT()
u.dI(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhk(new C.cp(null,x.A),new B.On(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
OQ:function OQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Tn:function Tn(d){this.a=d},
bhk:function bhk(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fi$=i
_.kQ$=j
_.fN$=k
_.fj$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dBq:function dBq(){},
dBe:function dBe(){},
dBf:function dBf(d,e){this.a=d
this.b=e},
dBg:function dBg(d,e){this.a=d
this.b=e},
dBd:function dBd(d){this.a=d},
dBc:function dBc(d){this.a=d},
dBi:function dBi(d){this.a=d},
dBb:function dBb(d,e){this.a=d
this.b=e},
dBj:function dBj(d){this.a=d},
dBa:function dBa(d){this.a=d},
dBk:function dBk(d){this.a=d},
dB9:function dB9(d){this.a=d},
dBl:function dBl(d){this.a=d},
dB8:function dB8(d){this.a=d},
dBm:function dBm(d){this.a=d},
dB7:function dB7(d){this.a=d},
dBn:function dBn(d){this.a=d},
dB6:function dB6(d){this.a=d},
dBo:function dBo(d){this.a=d},
dB5:function dB5(d){this.a=d},
dBp:function dBp(d){this.a=d},
dB4:function dB4(d){this.a=d},
dBh:function dBh(d){this.a=d},
dB3:function dB3(d){this.a=d},
b8f:function b8f(d,e){this.b=d
this.a=e},
adD:function adD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ug:function Ug(d){this.a=d},
bhL:function bhL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fi$=p
_.kQ$=q
_.fN$=r
_.fj$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dS2:function dS2(d){this.a=d},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRW:function dRW(d){this.a=d},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dRP:function dRP(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
dRN:function dRN(d,e){this.a=d
this.b=e},
dS_:function dS_(d){this.a=d},
dRM:function dRM(d){this.a=d},
dS0:function dS0(d){this.a=d},
dRL:function dRL(d){this.a=d},
dS1:function dS1(d){this.a=d},
dRK:function dRK(d){this.a=d},
bdr:function bdr(d,e){this.b=d
this.a=e},
d6Z:function d6Z(d){this.a=d},
V_:function V_(d){this.a=d},
biC:function biC(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fi$=f
_.kQ$=g
_.fN$=h
_.fj$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
ejY:function ejY(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d){this.a=d},
ejX:function ejX(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejW:function ejW(d){this.a=d},
ek0:function ek0(d){this.a=d},
ejV:function ejV(d){this.a=d},
ek1:function ek1(d){this.a=d},
ejU:function ejU(d){this.a=d},
ek2:function ek2(d){this.a=d},
ejT:function ejT(d,e){this.a=d
this.b=e},
ek3:function ek3(d){this.a=d},
ejS:function ejS(d,e){this.a=d
this.b=e},
ek4:function ek4(d){this.a=d},
ejR:function ejR(d,e){this.a=d
this.b=e},
ek5:function ek5(d){this.a=d},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
boM:function boM(d,e){this.b=d
this.a=e},
aJD:function aJD(){},
buZ:function buZ(){},
aK1:function aK1(){},
bv5:function bv5(){},
aKE:function aKE(){},
bvj:function bvj(){},
h6_(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.ld(e,f,$,null)
v=w.bFG(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hSc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.V(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.E(["k",p.b,"x",C.nO(A.k.aa(p.c,4)),"y",C.nO(A.k.aa(p.d,4)),"v",p.e,"l",C.nO(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nO(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nO(A.k.aa(p.z,3)),"s",C.nO(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a3(f).k("cl.E"))
A.d.ff(l)
return A.R.ao(C.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i0y(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aG(0,a7,a5)
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
if(!$.q1().ag(0,s)){J.cf(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ta(a2,d,a0,a1)
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
d=C.ka(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.ka(J.q(t,"b"))
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
if(o==null||n==null||o<0||n<0||o>=J.ac(v)||n>=J.ac(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ajc(m,A.k.O(C.f8(J.q(p,1))),l,A.k.O(C.f8(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=C.aW(x.S)
h=g.a(J.q(w,"done"))
h=J.aX(h==null?A.cH:h)
while(h.C()){j=h.gU(h)
J.cf(k,A.k.O(C.f8(j)))}return new C.bmr(i,k)}catch(a4){return a5}},
foc(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$foc=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$foc)
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
return C.i($async$foc,v)},
bBM(d){return B.i26(d)},
i26(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bBM=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bBM)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bBM)
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
return C.i($async$bBM,v)},
cnN(d,e){var w=0,v=C.j(x.g7),u
var $async$cnN=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fVC().wO(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cnN,v)}},D,U,H,R,Y,A6,A7,Am,Z,A8
J=c[1]
C=c[0]
A=c[2]
A_=c[137]
A9=c[136]
A0=c[130]
A1=c[126]
I=c[116]
P=c[121]
A2=c[112]
Aa=c[132]
A3=c[134]
A4=c[109]
N=c[138]
G=c[119]
Ab=c[114]
Ac=c[131]
A5=c[93]
Ad=c[67]
W=c[76]
Ae=c[83]
Af=c[80]
Q=c[87]
Ag=c[139]
Ah=c[105]
X=c[115]
O=c[117]
V=c[135]
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
B.aiC.prototype={}
B.Uw.prototype={
T(){return new B.bi6(C.V(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mq(0,null,null))}}
B.bi6.prototype={
gVg(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
this.ch.q()
this.a2()},
MN(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$MN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.js()
p.bM(0,A.c3)
t.m(new B.e1p(t))
t.a.toString
p=t.gVg()
w=3
return C.b(B.bxk(B.hGu(q,B.hS3(p),o,t.ay)),$async$MN)
case 3:s=e
r=s==null?null:J.iR(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hTt(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e1q(t,o,r))
$.aT.x1$.push(new B.e1r(t))
case 1:return C.h(u,v)}})
return C.i($async$MN,v)},
Xf(d){return this.bWf(d)},
aTI(){return this.Xf(null)},
bWf(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Xf=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.js()
t.f.saV(0,o)
t.m(new B.e1C(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bxk(B.hNe(o)),$async$Xf)
case 3:r=n.a=m.i0g(f)
p.b=""
if(r!=null&&!B.hS4(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hTu(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiC(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e1D(p,t))
t.c0r(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Xf,v)},
c0r(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
A.d.a8(w)
w=++m.as
v=m.gVg()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e1y(m))
t=d.d
s=C.V(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e1w(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e1z(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e1A(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e1B(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.r,1)
if(m.x)j=C.A(C.a([D.eI1,A.bf,C.D(C.d(m.Q,l,l,l,l,l,l,A.Sr,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.f67
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Ab.SS,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eSs,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.uV,C.d(u,l,l,l,l,l,l,D.eV2,l,l,l),l))
w.push(A.d0)
w.push(C.d(k.b,l,l,l,l,l,l,D.IC,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eXp,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i7,A.cj,l,l,l))}w.push(A.ao)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.ay
w.push(new C.C(A.Lg,new C.co(A.aQ,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mw,l,l,l,l,l,l,l,l,l),A.bp,new C.bE(1,A.bi,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aV(12,12)
s=new C.aV(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6t,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fG,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f1F,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.e0K)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.agT(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bni,A.eh,l,l,1/0),A.bb,A.i5),C.D(B.fXo(m.gVg(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dz("Ask about it",i,new B.e1G(m),l,A.by,l),new B.dz("Invent something new",!i,new B.e1H(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d6E[p]
i.push(new B.dz(n,!1,new B.e1I(m,n),l,A.by,l))}f.push(new B.eK(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cSa[p]
i.push(new B.dz(r,!1,new B.e1J(m,r),l,A.by,l))}f.push(new B.eK(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aL(l,A.T,!1,l,!0,A.q,l,C.aM(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kt,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e1K(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.am,l,A.aNa,l,l),1)
h=m.at
v=h&&j?D.bAK:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e1L(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jD(A.by,A.h6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.Fs.prototype={}
B.uA.prototype={}
B.UY.prototype={
T(){return new B.aCN(A.J,A.J,A.au,C.aW(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCN.prototype={
gaUS(){var w,v,u,t=this,s=D.Gu[t.cx],r=D.PN[t.cy],q=D.BE[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.auf[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.eho())},
ga1p(){return D.Gu[this.cx].d/this.gaUS()},
gaMq(){return 0.1*(D.Gu[this.cx].d/0.9)/D.PN[this.cy].d},
a_(){this.a1()
this.l2()
B.z3("rocket_lander").bz(new B.ehI(this),x.P)},
c0A(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lj(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.ehJ())
return}w=D.qX[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1p()
v=v.ae(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaMq())}if(m.dy){t=m.r
v=v.aC(0,t.aK(0,t.gcm()*6*D.aw0[m.d]))}t=m.r=m.r.ae(0,v.aK(0,d))
s=m.f=m.f.ae(0,t.aK(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.BE[r].d
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
B.Ba("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1p()/(D.qX[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1p()/(D.qX[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fK()}}if(m.Q&&m.x>0&&A.o.F(A.k.bw(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.ehK())},
aeo(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eUz,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dz(e[w].a,f.$1(w),new B.ehq(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.d0,C.c_(A.bD,s,A.bt,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bAY(d){var w,v,u,t,s=this,r=null,q=s.ga1p()/(D.qX[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaMq()),o=D.aw0[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.SM,r,r,r),A.S,s.aeo("ENGINE: "+D.Gu[s.cx].b,D.Gu,new B.ehf(s),new B.ehg(s),A.cw),s.aeo("FUEL TANK: "+D.PN[s.cy].b,D.PN,new B.ehh(s),new B.ehi(s),A.bc),s.aeo("LANDING GEAR: "+D.BE[s.db].b,D.BE,new B.ehj(s),new B.ehk(s),A.aW),s.aeo("EXTRAS (tap to add)",D.auf,new B.ehl(s),new B.ehm(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fnA)
o=(q?A.bc:A.cr).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaUS(),2)
u=A.k.aa(s.ga1p()/(D.qX[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.BE[s.db].d*100)+".",r,r,r,r,r,r,D.eVa,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i7,A.bR,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fg(A.n2,"Launch",new B.ehn(s),A.bc,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.y,r,A.bU,r,r,A.ah),A.f,r,A.lq,new C.o(D.beq,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aW_(d,e,f,g){var w=null,v=f?A.cw:A.c.j(0.1),u=C.m(18),t=C.I(A.b5,A.r,1)
return C.oL(A.js,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.ehc(e),new B.ehd(e),w,w,w,w,new B.ehe(e))},
aVZ(d,e,f){return this.aW_(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cm(new B.ehB(s,D.qX[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qX[w].a:"\ud83d\udd12"
o.push(new B.dz(v,s.d===w,new B.ehC(s,w),r,D.qX[w].c,r))}v=C.a([s.aVZ(F.ak6,new B.ehD(s),s.y),A.bf,s.aW_(A.vg,new B.ehE(s),s.Q,130),A.bf,s.aVZ(A.N_,new B.ehF(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aW:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bEW,A.f,r,r,new C.o(u,r,C.I(A.b5,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ehG(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jD(A.cw,A.h6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eK(o,"WORLD",r),C.A(v,A.m,r,A.ba,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bf6.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qX[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=C.M(),a0=j.c,a1=C.aq(D.bgW,a0,0.25)
a1.toString
d.sau(new C.a7(A.b1,A.b6,A.x,C.a([D.b92,a1],x.O),l,l).aw(0,new C.aa(0,0,g,f)))
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
r.E(new C.bF())
e=$.X()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aO(r,d)
o=C.cu(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bz(o,A.ie)
a0=C.M()
a0.r=A.bn.gp(0)
a2.aD(d,a0)
a0=C.bz(o.cF(2),A.rd)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.j7(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.cw.j(0.6).gp(0)
k.z=X.H0
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
i.sau(D.bR4.aw(0,D.eB4))
a2.aO(m,i)
i=C.M()
i.r=A.aW.gp(0)
a2.ai(D.vK,5,i)
i=new C.aQ(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.M()
h.r=A.aB.gp(0)
a2.aO(i,h)
f=new C.aQ(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.M()
k.r=A.aB.gp(0)
a2.aO(f,k)
g.restore()},
aq(d){return!0}}
B.aKC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvi.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bta()}}
B.aQu.prototype={}
B.a27.prototype={}
B.b8i.prototype={}
B.To.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eu(["skin"],x.N),o=new Float32Array(0)
return new B.aBc(w,v,u,t,s,r,q,new C.cp(null,x.A),p,D.Jw,D.Jw,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBc.prototype={
a_(){var w=this
w.a1()
w.l2()
w.as=new B.bZ1(w.gc8F())
new B.dBS(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bsb()},
c8G(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eS(0,C.E(["t","init","data",$.h6e],x.N,x.z))
v.at=!0
v.ax=""
v.ax7()
break
case"pick":v.m(new B.dBu(v,d))
break
case"shot":v.agf(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
ax7(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.asd[q.CW]
v=new B.dBv()
u=q.ay
u=C.B(u,C.a3(u).k("cl.E"))
A.d.ff(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.V(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eS(0,u)}},
agf(d){return this.cpc(d)},
cpc(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agf=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cB.aI(A.a.b_(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cnN(C.a([B.h6_(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agf)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aMt)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agf,v)},
awA(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lj(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bw(w)!==A.k.bw(v.ok)){B.a7g("kick",0.4)
v.a3Z(170,new B.dBT())}v.ok=w
return},
ag4(d){var w,v,u,t,s=this
s.m(new B.dBw(s,d))
if(d==null){s.fx=D.Jw
s.dy=1
w=s.as
if(w!=null)w.eS(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dBx(d),v),v.k("H.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.ax7()
w=s.as
if(w!=null)w.eS(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.crz(t,d)
return},
crz(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7g("kick",0.8)
this.a3Z(260,new B.dBy())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a3Z(w*70,new B.dBz(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vF("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7g("kick",0.3)
break
default:B.vF("organic",2+A.o.F(e.length,6),200,0.4)}},
cw1(d){this.m(new B.dBB(this,d))},
aWh(){var w,v,u,t,s,r,q,p=this,o=C.aW(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.awA(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bRU(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dBr(u,w,d))
v=x.t
B.Ba("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a3Z(1100,new B.dBs(u))
return}if(d==null){if(u.cx!=null)u.ag4(null)
return}u.ag4(d)},
bVz(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eR3,u,u,u)}else if(d==null||e==null)w=D.f3H
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.jg,u,u,u),A.d0,C.d(e.b,u,u,u,u,u,u,D.IC,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bHk,u,u,u,new B.dBt(v),u,u,u,u,"Back to the whole body",A.c7)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.V5,u,s,t,u,u,A.n),u,u,u,u,I.afN,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dh0.h(0,g)
i.ax7()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d0a
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.awA(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mk,h,h,h,new B.dBI(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Dm(h,A.pT,q)}else q=A.kp
q=C.v(C.a([C.D(q,1),new C.C(F.Xo,i.bVz(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cTw[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dz(l,n,new B.dBJ(i,o),o.c,A.bZ,h))}p=C.a([new B.eK(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dz(k,k===i.cx,new B.dBK(i,k),h,A.aM,h))}p.push(new B.eK(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hx(A.cr,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dBL(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EI(D.asd[j],i.CW===j,new B.dBM(i,j),!1,h))
p.push(new B.eK(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dz("Spin",n,new B.dBN(i),D.aiV,A.aW,h),new B.fg(A.jS,"Reset view",new B.dBO(i),A.c,h),new B.dz(l,m,new B.dBP(i),A.FK,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dz("Heartbeat sound",i.k4,new B.dBQ(i),A.nM,A.cr,h))
p.push(new B.eK(v,h,h))
return B.jD(A.bZ,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJE.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aJF.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsa()}}
B.bZ1.prototype={
km(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.hcd
$.hcd=v+1
u="ngmy-body-viewer-"+v
$.ye()
$.q0().pz(u,new B.bZ2(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fH(v,"message",new B.bZ3(t),!1,x.gA)
t.b=u},
eS(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bxh(w.contentWindow)
if(w!=null)J.fKa(w,e,"*")}}catch(v){}}}
B.xG.prototype={}
B.BN.prototype={}
B.nc.prototype={}
B.b90.prototype={}
B.Tt.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aBf(C.V(w,x.a2),C.a([],x.cB),C.V(w,v),C.V(w,v),C.V(w,u),A.au,A.J,A.J,C.aW(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBf.prototype={
a_(){var w=this
w.a1()
w.l2()
w.ab9()
$.aT.x1$.push(new B.dE2(w))},
ab9(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ab9=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$ab9)
case 6:q=e.rR("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dDH(s,r))
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
return C.i($async$ab9,v)},
abt(d){return this.bZe(d)},
bZe(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abt=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.aA(),$async$abt)
case 6:r=f
q=s.cx
p=C.a3(q).k("jI<cl.E,n>")
q=C.B(new C.jI(q,new B.dDK(),p),p.k("H.E"))
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
return C.i($async$abt,v)},
avi(d,e,f,g){var w="c"+this.y++,v=new B.BN(w,e,f,g)
this.d.n(0,w,v)
return v},
ml(d,e,f){return this.avi(0,e,f,0)},
aaw(d,e){var w
if(D.yy.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ae(0,new C.u(-36,w))},
tg(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQk(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fN$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e3(m,D.cEc[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tg(p,0)&&n.tg(p,1)
break
case"or":p=q.a
o=n.tg(p,0)||n.tg(p,1)
break
case"xor":p=q.a
o=n.tg(p,0)!==n.tg(p,1)
break
case"nand":p=q.a
o=!(n.tg(p,0)&&n.tg(p,1))
break
case"nor":p=q.a
o=!(n.tg(p,0)||n.tg(p,1))
break
case"not":o=!n.tg(q.a,0)
break
default:o=n.tg(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bKO(){return this.aQk(null)},
lj(d){var w,v,u,t,s,r,q,p,o,n=this
n.bKO()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gah(0),v=new C.fG(w,new B.dE3()),u=n.f,t=n.w,s=0;v.C();){r=w.gU(0).a
if(u.h(0,r)===!0){q=n.fN$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fN$)
o=s+1
E.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
avj(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lN(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
arz(d){var w=this
if(w.x.A(0,A.au)){$.aT.x1$.push(new B.dDF(w,d))
return}w.m(new B.dDG(w,d))},
crR(d){this.m(new B.dDL(this,d,$.bC7()[d]))},
c2A(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bC7()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a2<H.E>")
s=t.k("H.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dDA(),t),s)
A.d.b1(r,new B.dDB())
q=C.B(new C.a2(new C.bc(v,u),new B.dDC(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dDD(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fW(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQk(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jC(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dDE(d,o,a0))},
aw6(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
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
cb2(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
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
bVs(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yy.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aaw(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bJL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aaw(p,o)
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
c2C(d){var w,v,u,t=this,s=t.aw6(d)
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
t.m(new B.dDM())
return}u=t.bJL(d)
if(u!=null)t.m(new B.dDN(t,u))
else t.m(new B.dDO(t))},
au7(d){return this.bYj(d)},
bYj(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$au7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.aw6(d)
if(s==null){w=1
break}C.jd()
t.m(new B.dDJ(t,s))
case 1:return C.h(u,v)}})
return C.i($async$au7,v)},
bwR(d){if(this.x.A(0,A.au))return
this.m(new B.dDz(this,d,A.cI))
C.eP()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bC7()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.W(i.ax?A.nM:O.qT,A.ad,h,h,h,21),h,h,h,new B.dDX(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.ct.j(0.14)
r=C.I(A.ct.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eQd,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eYk,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.m9,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bc:A.f9,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.fen,i.gc2z(),C.bk(A.ct,h,h,h,h,h,h,h,h,h,h,A.c7))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,W.Lp,D.bnX,h,h,1/0))}u.push(C.D(C.cm(new B.dDY(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yy.h(0,r).a+": "+D.yy.h(0,r).e,h,h,h,h,h,h,A.w_,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A7.afv,A.bR,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yy.gdL(D.yy),s=s.gah(s);s.C();){r=s.gU(s)
q=new C.aV(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.r,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bz,new C.x(p.a,h,D.aOi,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fx,Ak.Ll,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dDZ(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d45[l]
s.push(new B.fg(A.N0,k.b,new B.dE_(i,k),A.ct,h))}s.push(new B.fg(D.xG,"Clear",new B.dE0(i),A.cr,h))
r=C.a([],g)
for(j=0;q=$.bC7(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.l8
o=i.ay
n=i.cx.t(0,j)?A.bc:A.cp
r.push(new B.dz(q.a,o===j,new B.dE1(i,j),p,n,h))}return B.jD(A.ct,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eK(t,"PARTS",h),new B.eK(s,"TRY",h),new B.eK(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b9i.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.aaG.gp(0)
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
g=a5.aaw(j,m.c)
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
l.z=G.mn
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
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ae(0,D.Hx)
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
a7.aO(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c2B(a7,a5.d)},
c2B(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yy.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cu(a0.c,64,64)
s=C.bz(t,A.kT)
r=w.cy===v
q=s.eL(A.cy)
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
d.ai(q,52,p)}q=s.eL(A.cJ)
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
q.sau(new C.a7(A.b1,A.b6,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aD(s,q)
q=C.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.N5:D.bBf}else l=e.b
k=B.fPu(C.jC(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aC(0,new C.u(p/2,q.gbb(q)/2)))
j=B.fPu(e.a,10.5,A.c,g,g,A.I)
j.a6(d,a0.c.ae(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fPu(f,9,u?A.dN:A.c_,g,g,A.u)
i.a6(d,a0.c.ae(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aWL(d,w.aaw(a0,h),o)
this.aWL(d,a0.c.ae(0,D.Hx),o)},
aWL(d,e,f){var w
$.X()
w=C.M()
w.r=D.aaG.gp(0)
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
B.aJK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv1.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsg()}}
B.MC.prototype={
T(){return new B.aBw(C.mq(0,null,null))}}
B.JI.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A1.prototype={}
B.aBw.prototype={
c2G(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.m(new B.dJu(w,e))},
bXe(){var w=this
w.e.q()
w.e=C.mq(w.f,null,null)
w.m(new B.dJt(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.ob(t,C.cb(v,A.bX,t?new B.bp6(w.e,w.gc2F(w),new B.dJv(d),v):new B.aFL(u,new C.cw(u.b,x.gj)),v,!1,!1,v,!1),new B.dJw(w,u),x.C)}}
B.bqE.prototype={}
B.bp6.prototype={
aWM(d,e){var w=null
return new C.C(I.XQ,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eQO,w,w,w),A.bz,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,T.nO,v,v,v,w.e,v,v,v,v,v,v),A.rj,D.btJ],u),A.m,v,A.e,A.j,0,v,v),s=w.aWM("STUDIOS","Play, make things, and keep what you make")
$.bC8()
return C.bn(!0,C.v(C.a([new C.C(D.bsQ,t,v),C.D(C.ve(0,v,A.q,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.lZ(s,v),new C.nG(A.hH,C.O9(new C.oe(new B.eRD(d),22,!0,!0,!0,0,C.rF(),v),D.aMi),v),new C.lZ(w.aWM("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nG(D.bo3,C.O9(new C.oe(new B.eRE(w),6,!0,!0,!0,0,C.rF(),v),D.aMi),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)}}
B.adI.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mO,p,0.3)
m.toString
w=x.O
m=C.a([m,D.ada],w)
v=C.I(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.ad(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ad(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aK(!1,o,!0,C.ex(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a7(A.ax,A.aD,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d0,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.ba,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a7(A.ax,A.aD,A.x,m,r,r),A.n),r,A.F2,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
B.acC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mO,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.ada],w)
v=C.I(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.ad(0,A.G,A.w.j(0.4),A.cy,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aV(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ad(0,A.G,A.w.j(0.45),I.aF0,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a7(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aK(!1,h,!0,C.ex(C.v(C.a([new C.a6(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.W(A.Bj,A.d.gL(i),k,k,k,18)],s),A.m,k,A.ba,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a7(A.ax,A.aD,A.x,f,k,k),A.n),k,A.F2,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af)}}
B.Pf.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.bZ(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ad(0,A.G,A.w.j(0.55),A.R6,26),new C.ad(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bY(0,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,C.a([p,o,n,i],m),D.d8T,j),A.n),A.bd),0,0,0),C.ao(j,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.b1,A.b6,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bY(0,C.b3(j,j,j,new B.bq4(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.r,1.4)
s=C.a([new C.ad(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eSk,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Sc)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fH,C.A(C.a([s,A.ev,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bY(0,C.e_(C.ei(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bY(0,C.e_(C.bZ(j,new C.o(j,j,C.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a6(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bY(0,C.bZ(C.bv(q,new C.an(A.W,j,A.aa,A.q,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bq4.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.aa(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j7(0,0.35)
t=C.cu(A.J,(w- -10)*1.6,s-r)
$.X()
s=C.M()
s.sau(new C.a7(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.aY(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.bpA.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bcG,D.acs],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.r,1.2),r=C.a([new C.ad(0,A.G,A.w.j(0.5),A.jX,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a6(this.c,this.d,C.bZ(C.bv(q,C.b3(C.av(C.W(A.ja,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b8_(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a7(A.ax,A.aD,A.x,u,w,w),A.n),A.bd),w)}}
B.b8_.prototype={
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
B.aFL.prototype={
T(){return new B.aFM(new C.cp(null,x.A),null,null)}}
B.aFM.prototype={
gtD(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.blq,null,1,null,v)
w.cG(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYw(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fP,null,1,null,v)
w.f7(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gavk(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc2D(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaTr(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaU5(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb4d(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtD()
w.d8()
w.dR$.J(0,this.gcrA())},
crB(){var w,v,u,t,s,r,q,p=this,o=p.gtD().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavk().a){case 0:w=D.n5
break
case 1:w=D.tO
break
case 2:w=D.a1c
break
case 3:w=D.n5
break
case 4:w=D.cYf
break
case 5:w=D.tO
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8r)r=0.09
else r=s===D.a8s?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bTy[v]
B.la("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Ba("bell",D.c1h,1400,0.35)}}p.ax=o},
q(){this.gtD().q()
this.gYw().q()
this.bu5()},
aeP(){var w=this
w.gtD().cQg(0,C.dB(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eRj(w))},
cd2(){this.gtD().bX(0)
this.m(new B.eRi(this))},
acp(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acp=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaU5(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b2,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb4d(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b2,A.aN),$.aw()))}o=C.B(u.gaTr(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bW(F.mO,null,new B.eRh(u,l,m,o),t,!0,!0,!0,A.li,!1,!1,x.H),$async$acp)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acp,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavk(),f=i.a.c,e=f.b,d=i.gc2D(),a0=new B.A1(g,e,f.c,d,i.gaTr(),i.gaU5(),i.gb4d())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.W(i.at?A.nM:O.qT,A.ad,h,h,h,21),h,h,h,new B.eRr(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bKL,h,h,h,i.gc2E(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mk,h,h,h,new B.eRs(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYw(),new B.eRt(i,a0),h),C.cm(new B.eRu(i,a0))],g)
u=i.as
t=u?i.gcd1():i.gcfk()
u=u?D.bAw:A.tC
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c7),C.D(C.c6(i.gtD(),new B.eRv(i,a1,a0),h),1),C.aH(h,h,h,h,D.bHa,h,h,h,new B.eRw(i),h,h,h,h,"Replay",A.c7)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hx(r,u+"x","Speed",2.5,0.4,new B.eRx(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d6h[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dz(p.b,o===p.a,new B.eRy(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bTT[q]
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
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a7(A.ax,A.aD,A.x,n,h,h),A.a6),h,l,h,D.afi,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eRz(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jD(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.es(new C.an(A.W,h,A.b_,A.q,v,h),i.f),e,C.v(C.a([t,s,new B.eK(u,"STYLE",h),new B.eK(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bw2(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.n5[r]
p=A.k.D((1-A.eu.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.n5[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.n5[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dl()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jL(p)
l=v[r]
k=u[r]
j=t[r]
i=D.n5[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.n5[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.n5[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cK(0,r*118,0,f,f,f,new C.kO(q,new C.iD(n,f,A.b1,!0,f,new B.Pf(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.n5[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.n5[r]
t=v+0.12
e.push(new C.cK(0,r*118-3-2,0,f,f,4,new C.m8(new B.boJ(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a6(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bMc(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tO[r]
p=A.pl.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tO[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tO[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dl()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jv(n,n,n,1)
m.fu(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Pf(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dl()
k.fu(3.141592653589793)
k=new C.iD(k,f,A.A,!0,f,new B.bpA(a2,108,w,f),f)}e.push(new C.cK(0,r*130,0,f,f,f,new C.kO(q,new C.iD(m,f,A.A,!0,f,k,f),f),f))}return new C.a6(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cwx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1c[w]
l.push(A.cq.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bY(0,C.b3(n,n,n,new B.bs7(d.d,l,D.atT,m,B.bp5(e,0.4,0.62),f,B.bp5(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fQ_(g,w)
q=D.atT[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cK(r,s-q*m*p+12,n,n,t,n,new C.kO(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fQ_(g,w)
r=D.a1c[w]
q=r+0.15
v.push(new C.cK(s,l,n,n,t,n,new C.kO(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a6W,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a6(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bCa(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cq.av(0,B.bp5(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bY(0,C.av(C.dU(C.b3(f,f,f,new B.boa(A.d.gL(a1),B.bp5(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.dXm),f,f,f),0,0,0))
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
l.fu(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jv(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new C.z(o,new C.cK(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kO(k*(0.45+0.55*o),C.dU(new C.iD(l,f,A.A,!0,f,new B.Pf(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b1(w,new B.eRa())
A.d.v(a0,new C.J(w,new B.eRb(),x.fR))
return new C.a6(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bBo(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tO[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mA.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tO[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.avL[q]
k=C.dl()
k.mz(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jv(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tO[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cK(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kO(m,C.dU(new C.iD(k,e,A.A,!0,e,new B.Pf(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tO[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cK(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dU(new C.m8(new B.b8F(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.avL[q])),e),e))}return new C.a6(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
byZ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dXq],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.n5[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cq.av(0,p)
q=D.avR[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.n5[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.n5[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dl()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mz(l*h+D.d12[r]*o)
f.fu(l*0.9)
h=0.55+0.45*o
f.jv(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kO(g,C.dU(new C.iD(f,a3,A.A,!0,a3,new B.Pf(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.n5[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.avR[r]
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dU(new C.m8(new B.boc(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a6(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.boJ.prototype={
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
t.z=G.mn
d.aD(q,t)
t=C.bz(u,A.h8)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.boa.prototype={
a6(d,e){var w,v,u=this.c,t=C.cu(e.ef(A.J),e.b*u,e.a*u)
$.X()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.H0
d.i_(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.i_(t,u)
u=t.cF(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.i_(u,v)},
aq(d){return!0}}
B.b8F.prototype={
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
B.boc.prototype={
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
B.bs7.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.aa(0,d0,0+c5,d0+60)
$.X()
d0=C.M()
w=c1.b
v=x.O
d0.sau(new C.a7(A.b1,A.b6,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.aY(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fQ_(c5,f)
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
a6.sau(new C.a7(A.b1,A.b6,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
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
a6=a8.gbI().a.snapshot()
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
t.clipRect(C.c4(a5),$.qF()[1],!0)
$.X()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new C.a7(A.b1,A.b6,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c4(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aLr.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
B.a_l.prototype={
a4(){return"_Role."+this.b}}
B.pQ.prototype={}
B.qx.prototype={}
B.BR.prototype={}
B.Yl.prototype={}
B.ady.prototype={}
B.a_y.prototype={
gY(d){return this.d}}
B.C1.prototype={}
B.aav.prototype={}
B.aaM.prototype={}
B.acG.prototype={}
B.bf3.prototype={
a1y(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b5c(d,e,f){return this.a1y(d,e,f,0,0.55)},
azN(d,e,f,g){return this.a1y(d,e,f,0,g)},
b5d(d,e,f,g){return this.a1y(d,e,f,g,0.55)},
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
air(d,e,f,g){var w="n"+this.ay++,v=new B.qx(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AH(d,e,f){return this.air(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.ddN(e))
A.d.bn(w.c,new B.ddO(e))
w.aZ()},
b8Z(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mm.h(0,v.b).c===D.wi)return!1
w=this.b
if(A.d.b8(w,new B.ddK(d,e)))return!1
w.push(new B.BR(d,e))
this.aZ()
return!0},
bWc(d){var w
if(d.b==="beat")return D.c1q[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aDd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aw5[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C1(u,t,j.ax,90))
w.push(new B.C1(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_y(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b5c(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_y(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.C1(u,t,j.ax,120))
j.azN(120,200,"noise",0.5)
j.b5c(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C1(u,t,j.ax,230))
w.push(new B.C1(u,t,j.ax+160,160))
w.push(new B.C1(u,t,j.ax+320,100))
j.b5d(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aav(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b5d(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.aaM(u,u.ae(0,new C.u(Math.cos(q),Math.sin(q)).aK(0,260+w.aj()*200)),t,j.ax))
j.a1y(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fK()
j.a1y(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acG(u,D.avy[v],t,j.ax))
j.azN(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.azN(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bYx[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cmS(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gah(j.b),v=new C.fG(w,new B.ddL(d));v.C();)j.ayl(w.gU(0),j.ax+D.c9K[A.o.F(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cqv[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gah(j.b),v=new C.fG(w,new B.ddM(d));v.C();)j.ayl(w.gU(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yT(w,0,v-700)},
cmS(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yl(e,"~"+d))},
ayl(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.ady(d.a,v,e,w))
u.push(new B.Yl(w,v))},
aGx(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aDd(r)
u.n(0,r,o.ax+o.bWc(s))}}w=o.c
v=C.T(w).k("a2<1>")
q=C.B(new C.a2(w,new B.ddP(o),v),v.k("H.E"))
if(q.length!==0){A.d.bn(w,new B.ddQ(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b_(u,1)
for(u=A.d.gah(v),r=new C.fG(u,new B.ddR(p));r.C();)o.ayl(u.gU(0),o.ax)}else o.aDd(u)}}A.d.bn(o.d,new B.ddS(o))
A.d.bn(o.e,new B.ddT(o))
A.d.bn(o.f,new B.ddU(o))
A.d.bn(o.w,new B.ddV(o))
A.d.bn(o.x,new B.ddW(o))
A.d.bn(o.r,new B.ddX(o))
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
ad(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
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
cI3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a8(0)
for(o=x.j,n=J.aX(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gU(n)
u=C.t(J.q(v,"k"))
if(!D.mm.ag(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qx(t,u,new C.u(C.f8(J.q(v,"x"))*k.cy.a,C.f8(J.q(v,"y"))*k.cy.b),A.k.O(C.f8(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aX(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gU(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ag(0,q)&&m.ag(0,p))n.push(new B.BR(q,p))}k.aZ()
return!0}catch(l){return!1}},
cL2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qx(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b8Z(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Ff.prototype={}
B.UX.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aCM(new B.bf3(C.V(w,x.f3),v,u,t,s,r,q,p,o,C.V(w,n),C.V(w,n),C.V(w,n),C.V(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aCM.prototype={
ab2(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ab2=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$ab2)
case 6:q=n.ka(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.egJ(s))
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
return C.i($async$ab2,v)},
a84(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a84=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.egy(s))
u=3
w=6
return C.b(C.aA(),$async$a84)
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
return C.i($async$a84,v)},
bI4(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.egA())+"|"+A.d.cI(o,0,new B.egB())
if(v===p.ch)return p.CW
u=new B.egE()
t=x.s
s=C.a([],t)
r=new B.egF(p,s,u)
for(n=new C.bc(n,w).gah(0),w=new C.fG(n,new B.egC());w.C();){q=n.gU(0)
if(!A.d.b8(o,new B.egD(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dc(s,0,C.dJ(5,"count",x.S),x.N).dF(0)},
a_(){var w,v=this
v.a1()
v.ab2()
v.d.db=v.ay
w=v.qe(new B.eh8(v))
w.iX(0)
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
w.bt8()},
aaA(d){return this.bVF(d)},
bVF(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aaA=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$aaA)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cI3(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aUx(A.d.gL(D.av5))
if(s.c!=null)s.m(new B.egI())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aaA,v)},
aUx(d){this.d.cL2(0,d.c,d.d)
this.DH()},
DH(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cM(A.lz,new B.egu(this))},
avl(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
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
cb3(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
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
bVt(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mm.h(0,r.b).c===D.wi)continue
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
c2J(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hce(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cuj(d){var w,v,u,t,s,r,q=this,p=q.avl(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eP()
u=v.b
if(u==="button"){w.aDd(p)
return}if(q.r)return
t=D.mm.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qb)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aZ()
q.DH()
return}if(q.r)return
r=q.c2J(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aZ()
q.DH()}},
cck(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cb3(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avl(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
ccl(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
aZs(){var w,v,u=this
if(u.z!=null){w=u.bVt(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b8Z(v,w)}else v=!1
if(v){C.jK()
u.DH()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DH()
u.x=null}},
abf(d){return this.bYk(d)},
bYk(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abf=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avl(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jd()
p=t.c
p.toString
w=3
return C.b(C.bW(F.mO,null,new B.egL(q),p,!0,!0,!1,A.li,!1,!1,x.y),$async$abf)
case 3:if(f===!0){r.W(0,s)
t.DH()}case 1:return C.h(u,v)}})
return C.i($async$abf,v)},
c2H(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AH(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eP()
this.DH()},
aeX(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aeX=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bW(F.mO,null,new B.egN(),s,!0,!0,!0,A.li,!1,!1,x.es),$async$aeX)
case 2:t=e
if(t!=null)u.aUx(t)
return C.h(null,v)}})
return C.i($async$aeX,v)},
acq(d){var w=0,v=C.j(x.H),u=this,t
var $async$acq=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.egx(),t,null,!0,!0,x.y),$async$acq)
case 2:if(f===!0){u.d.a8(0)
u.DH()}return C.h(null,v)}})
return C.i($async$acq,v)},
B(d){var w=this,v=null,u=C.a([C.agT(w.r?new C.bI(A.a3,v,v,new C.C(A.F3,C.hc(D.bFb,D.f7B,new B.eh6(w),v),v),v):w.c2K(),A.bb,A.is),C.D(C.cm(new B.eh7(w)),1)],x.p)
if(!w.r)u.push(w.cpf())
return C.cb(v,A.bX,C.bn(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bDP(){var w=null,v=new B.egz(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bs.j(0.5),A.r,1)
return C.bY(0,C.ei(C.av(C.p(w,C.cd(C.v(C.a([D.fih,A.at,D.fpq,A.az,v.$4(A.ow,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.FP,A.ct,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l7,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.aj7,A.cp,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.foM,new C.bI(A.a7,w,w,C.bK(!1,D.ffx,w,w,!0,w,w,this.gbDI(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ah),A.f,w,A.Ut,new C.o(F.mO,w,s,t,w,w,A.n),w,w,w,A.fy,A7.agw,w,w,w),w,w,w),u,!0),0,0,0)},
c2K(){var w=this,v=null,u=C.aH(v,v,v,v,T.nO,v,v,v,new B.egT(w),v,v,v,v,v,v),t=w.a7x(A.MQ,"How it works",new B.egU(w),!0),s=w.ay?A.nM:O.qT
return new C.C(D.bs4,C.A(C.a([u,D.btx,t,w.a7x(s,"Sound",new B.egV(w),!0),w.a7x(A.dW,"Ideas",w.gcg2(),!0),w.a7x(D.xG,"Clear",w.gc2I(w),!0),w.aLJ(A.iO,"Show",new B.egW(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aLJ(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Ad.v3,C.aF(!1,A.a1,!0,u,C.aK(!1,t,!0,C.ho(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.af),w)},
a7x(d,e,f,g){return this.aLJ(d,e,f,g,!1)},
cpf(){var w=null,v=new B.egP(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wi),v.$2("CHANGE",D.Dc),v.$2("REACT",D.qb)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),A.f,w,w,new C.o(D.E4,w,new C.bP(new C.az(u,1,A.r,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bnk,w,w,w)},
cpg(d){var w,v,u,t,s=null,r=D.mm.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.r,1)
return new C.C(A.fx,C.aE(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.d0,C.d(r.a,s,1,A.a2,s,s,s,D.aOi,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a7(A.b1,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hG,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.egO(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bf4.prototype={
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
a2=D.mm.h(0,k.b).d
a3=D.mm.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rg(new C.u(h,i),new C.u(f,g))
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
a6=B.hce(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mn
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ae(0,D.Hx)
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
h=C.lb(o,i,A.dV.av(0,v))
h.toString
i=C.lb(o,i,A.dV.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rg(i,h)
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
i.z=A.jd
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
i.z=A.jd
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(new C.bR(P.qc,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bf5(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cbU(b8,b5.d,b6)
b7.restore()},
cbU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mm.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cu(e.c,64,64)
t=C.bz(u,A.jZ)
s=t.eL(A.cy)
$.X()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.lg
d.aD(s,r)
if(v>0){s=t.cF(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yA
d.aD(s,r)}s=t.eL(A.cJ)
r=C.M()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.M()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.sau(new C.a7(A.b1,A.b6,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aD(t,r)
r=C.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bf5(C.jC(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aC(0,new C.u(s/2,r.gbb(r)/2)))
n=B.bf5(h.a,11,A.c,j,j,A.I)
n.a6(d,e.c.ae(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.avy[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qb){s=e.c.ae(0,new C.u(0,62))
r=C.M()
r.r=D.aw5[A.o.F(e.d,6)].gp(0)
d.ai(s,5,r)}else if(m!=null){l=B.bf5(m,9.5,A.ay,j,j,A.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bf5(m,9.5,A.ay,j,j,A.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wi)k.b_h(d,e.c.aC(0,D.Hx),q)
k.b_h(d,e.c.ae(0,D.Hx),q)},
b_h(d,e,f){var w
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
B.aKA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bjD.prototype={}
B.P6.prototype={
gY(d){return this.d}}
B.Vc.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.biH(new C.cp(null,x.A),w,v,A.cI,A.bx,D.Ed,null,null)}}
B.biH.prototype={
aY0(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bw((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aux[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.la("synth",u,420,0.3)
break
case"rainbow":B.la("bell",u,700,0.35)
break
case"stars":B.la("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c5I(d){return this.aY0(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qe(new B.esz(v))
w.iX(0)
v.w!==$&&C.aO()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bth()},
gaZM(){var w=this.Q
return w<0?new H.mI(1,A.k.F(this.y*0.18,360),0.85,1).iB():D.PP[w]},
aQ_(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaZM(),j=l.z
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
aWO(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaZM()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bjD(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQ_(e)
r.aY0(e,!0)
r.m(new B.esa())},
aWN(){this.ax=null
this.m(new B.es9())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mk,n,n,n,new B.esj(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bq_(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b2h)
k=C.aE(A.c5,new C.an(A.W,n,A.b_,A.q,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,new B.esk(o),new B.esl(o),new B.esp(o),n,n,n,n,n,n,n,n,n,new B.esq(o),new B.esr(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cOb[w]
j.push(new B.dz(v.b,o.z===v.a,new B.ess(o,v),v.c,A.bZ,n))}u=C.a([new B.EI(A.c,o.Q<0,new B.est(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EI(D.PP[t],o.Q===t,new B.esu(o,t),!1,n))
s=o.as
s=B.hx(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.esv(o),s)
r=o.ch
q=r?A.nM:O.qT
q=C.a([new B.dz("Sound",r,new B.esw(o),q,A.bZ,n),new B.fg(A.qS,"Undo",new B.esm(o),A.c,n),new B.fg(D.xG,"Clear",new B.esn(o),A.cr,n)],m)
for(w=0;w<4;++w){p=D.d2v[w]
q.push(new B.EI(p,o.at.A(0,p),new B.eso(o,p),!1,n))}return B.jD(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.es(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eK(j,"BRUSH",n),new B.eK(u,"COLOUR",n),s,new B.eK(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bq_.prototype={
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
for(p=C.T(q),m=p.k("pM<1>"),l=new C.pM(q,1,a5,m),l.GI(q,1,a5,p.c),l=new C.bV(l,l.gM(0),m.k("bV<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
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
q.z=new C.hs(A.G,p)
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
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mI(1,A.o.F(i*5,360),0.85,1).iB()
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
a1=k?new H.mI(1,A.o.F(a3*23,360),0.7,1).iB():l
a4.c2L(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=T.Qi
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c2L(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=C.a([],x.v),n=new C.aQ(p.r,A.ap,null,null,o)
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
p.z=A.jd
d.aO(n,p)
p=C.M()
p.r=h.gp(0)
d.aO(n,p)},
aq(d){return!0}}
B.Vo.prototype={
T(){return new B.aD1(new C.cp(null,x.A),new C.ar(new C.bb("NGMY",A.b2,A.aN),$.aw()),null,null)}}
B.aD1.prototype={
gIg(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tf,null,1,null,v)
w.cG(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIg()
w.d8()
w.dR$.J(0,this.gbUD())},
bUE(){var w,v,u,t,s,r,q,p=this,o=p.gIg().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lQ:new C.m_(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.la(s,D.atu[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIg().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.btn()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m_(h)
w=C.B(h,C.a3(h).k("H.E"))}v=D.PP[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mk,j,j,j,new B.ez8(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.avz[k.y]
s=C.bv(t,C.bZ(C.av(C.c6(k.gIg(),new B.ez9(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aL(j,A.T,!1,j,!0,A.q,j,C.aM(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.CS,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eza(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hm,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cqj[r]
i.push(new B.dz(q.b,k.r===q.a,new B.ezb(k,q),j,A.cp,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EI(D.PP[o],k.w===o,new B.ezc(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nM:O.qT
l=C.a([new B.dz(m,n,new B.ezd(k),l,A.cp,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EI(D.avz[o][0],k.y===o,new B.eze(k,o),!1,j))
n.push(A.bp)
n.push(new B.fg(A.mg,"Replay",new B.ezf(k),A.c,j))
m=k.x
return B.jD(A.cp,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bB,new C.es(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eK(i,"MOVE",j),new B.eK(p,"COLOUR",j),new B.eK(l,"SOUND",j),new B.eK(n,"BACK",j),B.hx(A.cp,A.o.u(A.k.V(m)),"Size",96,28,new B.ezg(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bXo(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
A.d.a8(p)
p.push(new C.cP(h,A.J,30*v))
p.push(new C.cP(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bw(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b7
else w=u?A.bZ:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mA.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.mI(1,A.k.F(g*360+e*40,360),0.75,1).iB()
A.d.a8(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.db(C.dU(C.e9(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aKJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aKP.prototype={
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
return new B.aCE(new C.cp(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCE.prototype={
gacr(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b_X(){return new H.mI(1,this.f.aj()*360,0.6,1).iB()},
apS(d,e,f,g){var w=this,v=w.gacr().ae(0,new C.u(Math.cos(e),Math.sin(e)).aK(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.ZS(v,new C.u(-t,s).aK(0,r).aK(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b_X(),C.a([],x.g)))},
bDb(d,e,f){return this.apS(d,e,f,!1)},
bDa(d,e){return this.apS(d,e,1,!1)},
crv(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bDa(40+w*u/5,v.aj()*3.141592653589793*2)},
bE3(){var w=this.r
this.bDb(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.l2()},
lj(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fN$<300)return
u=a2.gacr()
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
if(o.length>260)A.d.cz(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lN(v.a-s)!==J.lN(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fN$-n.r>250){n.r=a2.fN$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.la("bell",D.atu[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.edm(u),C.T(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.edn(a2,u))},
cfW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gacr()
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
gaUa(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aK(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mk,r,r,r,new B.eda(s,d),r,r,r,r,"Share",r)],q),o=C.cm(new B.edb(s)),n=s.w
n=B.hx(A.cw,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.edc(s),n)
w=s.x
w=B.hx(A.cw,A.k.aa(w,1)+"x","Time",3,0.2,new B.ede(s),w)
v=s.Q
v=B.hx(A.cw,A.o.u(A.k.V(v)),"Planet size",16,3,new B.edf(s),v)
u=s.ax
t=u?A.nM:O.qT
return B.jD(A.cw,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eK(C.a([new B.dz("Sound",u,new B.edg(s),t,A.cw,r),new B.dz("Trails",s.z,new B.edh(s),A.N4,A.cw,r),new B.dz("Planets pull each other",s.y,new B.edi(s),A.y5,A.cw,r)],q),r,r),new B.eK(C.a([new B.fg(A.mf,"Solar system",new B.edj(s),A.cw,r),new B.fg(A.n2,"Comet",new B.edk(s),A.c,r),new B.fg(A.md,"Cluster",new B.edl(s),A.c,r),new B.fg(D.xG,"Clear",new B.edd(s),A.cr,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjq.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.X()
w=C.M()
w.r=D.VL.gp(0)
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
t.sau(new C.bR(A.A,0.5,A.x,h,0,C.a([A.cw.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.ai(g,f,t)
t=C.M()
t.sau(D.e7Q.aw(0,C.bU(g,o)))
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
q.z=G.mn
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sau(new C.bR(P.qc,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.j3.gp(0)
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
B.aaC.prototype={}
B.Vj.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.biM(new C.cp(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.biM.prototype={
a_(){this.a1()
this.l2()},
c2M(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.aaC(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lj(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c2M()
w=a2.f
A.d.bn(w,new B.eyA(a2))
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
A.d.bn(w,new B.eyB(a2))
if(w.length<a1&&a2.ch)B.la("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fN$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fN$
B.la("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mk,l,l,l,new B.eyp(m,d),l,l,l,l,"Share",l)],k),i=C.cm(new B.eyq(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cPM[w]
h.push(new B.dz(v.b,m.at===v.a,new B.eyr(m,v),v.c,A.bc,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cA8[w]
u.push(new B.dz(t.b,m.ax===t.a,new B.eys(m,t),l,A.bc,l))}s=m.ch
r=s?A.nM:O.qT
r=C.a([new B.dz("Sound",s,new B.eyt(m),r,A.bc,l)],k)
s=m.x
s=B.hx(A.bc,A.o.u(A.k.V(s)),"How many",150,15,new B.eyu(m),s)
q=B.hx(A.bc,l,"Together",2.5,0,new B.eyv(m),m.y)
p=B.hx(A.bc,l,"Apart",2.5,0,new B.eyw(m),m.z)
o=B.hx(A.bc,l,"Same way",2.5,0,new B.eyx(m),m.Q)
n=m.as
return B.jD(A.bc,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eK(h,"TOUCH",l),new B.eK(u,"LOOK",l),new B.eK(r,l,l),s,q,p,o,B.hx(A.bc,A.o.u(A.k.V(n)),"Speed",280,50,new B.eyy(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bqQ.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.ach,D.bhi],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,R.KF],v):C.a([D.bet,D.b66],v)}v=0+a6.a
u=0+a6.b
t=$.X()
s=C.M()
s.sau(new C.a7(A.b1,A.b6,A.x,w,a3,a3).aw(0,new C.aa(0,0,v,u)))
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
n.z=G.mn
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mI(1,j,0.7,1).iB()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jd
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
j.push(new C.bF())
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
f=C.aq(h,A.cv,0.6)
f.toString
j.sau(new C.a7(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).aw(0,D.eB0))
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
B.ab4.prototype={}
B.Tr.prototype={
T(){var w=C.a([],x.bi)
return new B.aBe(w,A.cI,A.au,C.V(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBe.prototype={
gHF(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gabw(){return 54-8*(this.r/100)},
a_(){this.a1()
this.l2()
B.z3("chain_burst").bz(new B.dDb(this),x.P)},
aWQ(){return B.vC("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ayo(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.ab4(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mI(1,u.aj()*360,0.6,1).iB()))}},
Yx(d){var w,v=this
if(d==null)return 0
w=(v.fN$-d)/1000
if(w<0.4)return v.gabw()*A.dV.av(0,w/0.4)
if(w<1.1)return v.gabw()
if(w<1.5)return v.gabw()*(1-(w-1.1)/0.4)
return 0},
lj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.ayo()
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
if(v!=null)n.push(new C.z(v,j.Yx(j.ax)))
for(v=A.d.gah(w),s=new C.fG(v,new B.dDc());s.C();){r=v.gU(0)
n.push(new C.z(r.a,j.Yx(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fN$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eP()
break}}}if(!(j.at!=null&&j.Yx(j.ax)>0||A.d.b8(w,new B.dDd(j)))&&j.fN$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHF()){if(j.as>=j.gHF()*1.5)k=3
else k=j.as>=j.gHF()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Ba("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aWQ()}else E.dF(120,"",300,0,0.3,"saw")}}},
aWP(d){this.m(new B.dD1(this,d))
this.aWQ()},
acs(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acs=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dD4(u),s,null,!0,!0,x.S),$async$acs)
case 2:t=e
if(t!=null)u.aWP(t)
return C.h(null,v)}})
return C.i($async$acs,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHF(),t=w.x.h(0,""+w.r)
return B.jD(A.bZ,A.h6,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cm(new B.dD8(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.qO,"Levels",w.gc2N(),A.bZ,v),new B.fg(A.jS,"New board",new B.dD9(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
atm(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aND,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bV5(d,e){return this.atm(d,e,A.c)}}
B.b9_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.X()
w=C.M()
w.r=D.Ed.gp(0)
d.aY(new C.aa(0,0,0+e.a,0+e.b),w)
v=new B.cIM(d)
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
p.z=G.mn
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
B.aJI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv0.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bse()}}
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
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bt5()}}
B.aKM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvp.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.btk()}}
B.Fb.prototype={
gcKj(){return this.a.aC(0,this.b).gcm()>4}}
B.abT.prototype={}
B.UO.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bil(new C.cp(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bil.prototype={
aNJ(d){return new H.mI(1,A.o.F(d*29,360),0.6,1).iB()},
Zg(d){var w,v=D.BQ.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bw(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.e3(w,u)},
aQf(d){A.d.bn(this.e,new B.e8Q(this,d))},
cnJ(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ae(0,w.aK(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
awY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Zg(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fb(p,r,k,new H.mI(1,A.o.F(k*29,360),0.6,1).iB()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Zg(h)
f.push(new B.Fb(h,h,k,new H.mI(1,A.o.F(k*29,360),0.6,1).iB()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Zg(h)
f.push(new B.Fb(h,h,k,new H.mI(1,A.o.F(k*29,360),0.6,1).iB()))}}},
a_(){this.a1()
this.l2()},
c2P(d,e){var w,v=this.fN$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.la(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lj(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.abT(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mI(1,v.aj()*360,0.5,1).iB()))}if(u>3)a2.as=0
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
if(a1<0){a2.c2P(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.e9e(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.W(q.ay?A.nM:O.qT,A.ad,p,p,p,21),p,p,p,new B.e93(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mk,p,p,p,new B.e94(q,d),p,p,p,p,"Share",p)],o),m=C.cm(new B.e95(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cSZ[w]
l.push(new B.dz(v.b,q.x===v.a,new B.e96(q,v),v.c,A.b7,p))}u=C.a([],o)
for(t=J.aX(D.BQ.geh(D.BQ));t.C();){s=t.gU(t)
u.push(new B.dz(s,q.y===s,new B.e97(q,s),p,A.b7,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.awr[w]
t.push(new B.dz(r.b,q.z===r.a,new B.e98(q,r),p,A.b7,p))}s=q.Q
return B.jD(A.b7,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eK(l,"TOOL",p),new B.eK(u,"SCALE",p),new B.eK(t,"SOUND",p),B.hx(A.b7,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.e99(q),s),new B.eK(C.a([new B.fg(D.bB4,"Stairs",new B.e9a(q),A.b7,p),new B.fg(Am.MP,"Pinball",new B.e9b(q),A.c,p),new B.fg(A.md,"Random",new B.e9c(q),A.c,p),new B.fg(D.xG,"Clear",new B.e9d(q),A.cr,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bfZ.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.X()
w=C.M()
w.sau(D.bRE.aw(0,new C.aa(0,0,a0,a1)))
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
q.z=A.jd
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
p.z=A.jd
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sau(new C.bR(P.qc,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.M()
u.c=5
u.d=A.bO
u.r=A.ay.gp(0)
a2.bA(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.r1
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new C.bR(P.qc,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.acn.prototype={}
B.UT.prototype={
T(){var w=C.a([],x.gB)
return new B.aCD(new C.cp(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCD.prototype={
gaWR(){var w=this.w
return new C.u(w.a/2,w.b/2)},
ax8(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ayk(d){var w=D.BQ.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.e3(v,u)},
a_(){this.a1()
this.l2()},
aP4(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.acn(w,A.k.F(t/v+u,1)))}},
lj(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fN$
if(p.Q){r=p.z
s=p.ayk(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.la(r,s+12,q,0.55)}}}},
c2Q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaWR()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ax8(v)-e)
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
m=h.ax8(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ecK(h,n).$0()
h.c.e8()
return}}h.m(new B.ecL(g,h,t))
if(h.Q)B.la(h.z,h.ayk(g.a)+12,700,0.5)
C.eP()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.W(r.Q?A.nM:O.qT,A.ad,q,q,q,21),q,q,q,new B.ecS(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mk,q,q,q,new B.ecT(r,d),q,q,q,q,"Share",q)],p),n=C.cm(new B.ecU(r)),m=r.x
m=B.hx(A.by,""+A.k.V(m),"Tempo",180,40,new B.ecV(r),m)
w=C.a([],p)
for(v=J.aX(D.BQ.geh(D.BQ));v.C();){u=v.gU(v)
w.push(new B.dz(u,r.y===u,new B.ecW(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.awr[t]
v.push(new B.dz(s.b,r.z===s.a,new B.ecX(r,s),q,A.by,q))}return B.jD(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eK(w,"SCALE",q),new B.eK(v,"SOUND",q),new B.eK(C.a([new B.fg(A.dW,"Demo",new B.ecY(r),A.by,q),new B.fg(A.md,"Random",new B.ecZ(r),A.c,q),new B.fg(D.xG,"Clear",new B.ed_(r),A.cr,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bjr.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.X()
w=C.M()
w.r=D.VL.gp(0)
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
r.sau(new C.a7(A.b6,A.b1,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.aa(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mI(1,A.k.F(s.$1(l)*23,360),0.55,1).iB()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d8N[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.km(new C.eo(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ch,new C.jm(1),a4,a4,a4,a4,A.cd,a4)
i.eO()
o=i.b.c
m=J.fJS(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.u(p+-o/2,n+(m-h.gbb(h)-2)))}w=C.M()
w.sau(D.e7t.aw(0,C.bU(t,16)))
a5.ai(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mI(1,A.k.F(s.$1(a0)*23,360),0.55,1).iB()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fJS(v.$1(a0))
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jd
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.sau(new C.bR(P.qc,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aKv.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvf.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bt3()}}
B.aKw.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvg.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bt4()}}
B.rY.prototype={}
B.b7T.prototype={}
B.UR.prototype={
T(){var w=x.S
return new B.aCB(C.a([],x.aq),C.V(w,w),C.aW(w),D.eGF)}}
B.aCB.prototype={
a_(){this.a1()
B.z3("molecule_maker").bz(new B.ece(this),x.P)},
ahZ(d){var w={}
w.a=0
this.f.bH(0,new B.ec0(w,d))
return w.a},
gaWX(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hTT(t,this.f,D.a1H[this.d])},
c36(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eT()
w.dI(t*7+3)
t=v.y
v.m(new B.ebV(v,e,t.a,w,t.b))
B.vF("pop",u.length,90,0.35)},
avp(d){return this.m(new B.ebW(this))},
aWY(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c3c(d){this.m(new B.ec_(this,this.aWY(d)))},
ckf(){var w=this.r
if(w==null)return
this.m(new B.ebZ(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a1H[k.d],h=k.gaWX()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vB.h(0,w[u].a).a-k.ahZ(u)
w=i.c
w=w.gdL(w)
t=w.dt(w,new B.ec8(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bc:A.ht
r=x.p
s=C.v(C.a([new C.C(A.fG,B.f60(w,s,h&&k.d<12?new B.fg(A.j8,"Next",new B.ec9(k),A.bc,j):j),j),C.D(C.cm(new B.eca(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dz(p+D.a1H[u].b,k.d===u,new B.ecb(k,u),j,A.ht,j))}q=C.a([],r)
for(p=D.vB.gdL(D.vB),p=p.gah(p);p.C();){o=p.gU(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dL:m.b
q.push(new B.dz(n+" \xb7 "+m.a,!1,new B.ecc(k,o),j,l,j))}return B.jD(A.ht,A.h6,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eK(w,"GOAL",j),new B.eK(q,"ADD",j),new B.eK(C.a([new B.dz("Remove selected atom",!1,k.gcke(),A.e4,A.cr,j),new B.dz("Clear all",!1,k.gc37(k),A.jS,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bgG.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.ht.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bH(0,new B.dlR(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vB.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jd
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
h.sau(new C.bR(A.Je,0.5,A.x,a3,0,C.a([f,g,e],r),I.auF,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aA:A.c
d=new C.km(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.ch,new C.jm(1),a3,a3,a3,a3,A.cd,a3)
d.eO()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.u(n.a-h/2,n.b-j.gbb(j)/2))
n=k===0
a0=n?A.bn:A.aJ
j=m.b
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.km(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.ne),A.a5,A.ch,new C.jm(1),a3,a3,a3,a3,A.cd,a3)
a1.eO()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbb(j)/2)))}if(n===0){d=C.ih(a3,a3,a3,a3,D.eP8,A.a5,A.ch,a3,A.er,A.cd)
d.eO()
d.a6(a4,new C.u((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.TP.prototype={
T(){var w=x.s
return new B.bhB(C.a([],w),C.a([],w))}}
B.bhB.prototype={
a_(){this.a1()
this.auH()
B.z3("dna_lab").bz(new B.dLy(this),x.P)},
gb19(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a2H.h(0,w[u])
t.toString
s.push(t)}return A.d.fU(s)},
ga85(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb19(),w,v))}return u},
auH(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eT()
k.dI(l.e*31+l.d*7+C.Bn(new C.S(Date.now(),0,!1)))
w=new B.dLn(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mx(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a2H.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fU(r))}if(!A.d.b8(t,new B.dLm()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aZZ()},
aZZ(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fSu(s.ga85()[r])
v=J.dH(D.BR.geh(D.BR),new B.dLo(w)).dF(0)
u=new C.eT()
u.dI(r+s.e)
A.d.fo(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dc(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.eT()
t.dI(s.e*3+r)
A.d.fo(u,t)
s.z=u},
aWW(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.deJ.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a2H.h(0,w.f[v])
u.toString
break A}u=B.fSu(w.ga85()[v])
break A}w.m(new B.dLl(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dLw(),e=new B.dLr(),d=h.d===2?h.gb19():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mv,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bZ.j(0.18):A.K
q=new C.aV(10,10)
p=new C.az(t.length===s?A.bZ:A.bF,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga85()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.co(A.aQ,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bmr,A.en,g,g,g))}v.push(C.c_(A.bD,u,A.bt,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c_(A.bD,u,A.bt,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a6(34,g,new C.cr(A.A,g,g,C.W(Ai.MW,j<t.length?A.ay:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lk,C.c_(A.bD,u,A.bt,0,0),g)],a0))}v.push(A.ao)
v.push(C.d(w,g,g,g,g,g,g,Q.mv,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bc.j(0.25):A.dq
q=new C.aV(12,12)
o=j<t.length
p=new C.az(o?A.bc:A.b5,1,A.r,-1)
if(o){o=D.BR.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.eh,g,g,g))}v.push(C.c_(A.bD,u,A.bt,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c_(A.bD,u,A.bt,0,0))}v.push(A.az)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f60(u,t>=(h.d===2?3:9)?A.bc:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f60(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,L.SP,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.y,g,A.bB,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dz(D.cYt[j],h.d===j,new B.dLs(h,j),g,A.bZ,g))
u=C.a([new B.eK(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fg(A.jS,"New strand",new B.dLt(h),A.bc,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.BR.h(0,i)
q.toString
a0.push(new B.fg(D.ZG,q,new B.dLu(h,i),A.bZ,g))}u.push(C.c_(A.bD,a0,A.bt,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.atz:D.cIi
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aV(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.ePn,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dLv(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.pK,A.j,0,g,g))}return B.jD(A.bZ,A.h6,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.U4.prototype={
T(){return new B.aBI(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aBI.prototype={
a_(){var w,v=this
v.a1()
w=v.qe(v.gc38())
w.iX(0)
v.d!==$&&C.aO()
v.d=w
B.z3("ecosystem").bz(new B.dOn(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bst()},
gaL3(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c39(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cz(v,0)}if(m.gaL3()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.bw(w),5)===0)B.vC("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dOa())},
a9h(d){this.m(new B.dO9(this,d))
B.vF("pop",3,120,0.4)},
c3b(){return this.m(new B.dOb(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.Xn,B.f60(r,t.gaL3()?A.bc:A.cr,s),s),C.D(new C.C(D.bmZ,C.bv(C.m(18),C.b3(s,s,s,new B.bc1(t.f,t.r,t.w,s),A.f_),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.eWj,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hx(A.bc,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dOf(t),w)
v=t.y
v=B.hx(A.bW,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dOg(t),v)
u=t.z
return B.jD(A.bc,A.h6,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hx(A.cw,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dOh(t),u),new B.eK(C.a([new B.dz("Drought",!1,new B.dOi(t),A.y3,A.aM,s),new B.dz("Disease",!1,new B.dOj(t),D.bAX,A.by,s),new B.dz("+ Foxes",!1,new B.dOk(t),s,A.cw,s),new B.dz("+ Rabbits",!1,new B.dOl(t),s,A.bW,s),new B.dz("Reset",!1,t.gc3a(),A.jS,A.aW,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bc1.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.X()
w=C.M()
w.sau(D.bPJ.aw(0,new C.aa(0,0,d,a0)))
a1.aY(new C.aa(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uB,A.bn,A.k.D(w[0]/100,0,1))
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
m.r=A.hd.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d1g(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.aa(10,a0,e,u)
t=C.M()
t.r=D.bap.gp(0)
a1.aY(new C.aa(0,f,d,f+g),t)
i=C.M()
i.r=A.dq.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d1i(h,j,a1)
g.$3(0,100,A.bn)
g.$3(1,120,A.bW)
g.$3(2,24,A.cw)
g=new B.d1h(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bn,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bW,102)
g.$3("Foxes "+A.k.V(w[2]),A.cw,200)},
aq(d){return!0}}
B.aJW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aQk.prototype={
guG(){return A.d.cI(this.a,0,new B.bEc())}}
B.Tj.prototype={
T(){var w=x.S
return new B.bhg(B.hQY(),C.c2(5,0,!1,w),C.aW(w),A.bx,null,null)}}
B.bhg.prototype={
gvC(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dzm())},
a_(){var w,v=this
v.a1()
w=v.qe(new B.dzz(v))
w.iX(0)
v.x!==$&&C.aO()
v.x=w
B.z3("balance_lab").bz(new B.dzA(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bs6()},
cuw(d){var w,v=this
v.m(new B.dzn(v,d))
B.vF("click",v.f[d],60,0.4)
if(v.gvC()===v.d[v.e].guG()&&v.r.J(0,v.e)){B.vF("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new B.dzs(),C.T(k).k("J<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvC()===m[o.e].guG())s="\u2696\ufe0f Balanced! "+m[o.e].guG()+" = "+o.gvC()+". The torques are equal, so the seesaw stays level."
else s=o.gvC()>m[o.e].guG()?"The right side is too strong ("+o.gvC()+" vs "+m[o.e].guG()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guG()+" vs "+o.gvC()+"). Add weight to the right, or place it further from the middle."
k=o.gvC()===m[o.e].guG()?A.bc:A.aM
k=B.byb(s,k,o.gvC()===m[o.e].guG()&&o.e<m.length-1?new B.fg(A.j8,"Next",new B.dzt(o),A.bc,n):n)
w=C.D(C.cm(new B.dzu(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guG(),n,n,n,n,n,n,D.aOP,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.Xn,k,n),w,new C.C(D.afH,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvC(),n,n,n,n,n,n,D.aOP,A.dK,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dz(w+p,o.e===v,new B.dzv(o,v),n,A.aM,n))}return B.jD(A.aM,A.h6,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eK(u,"LEVEL",n),new B.eK(C.a([new B.dz("Clear right side",!1,new B.dzw(o),A.jS,A.cr,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b84.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
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
J.bA(i.save())
i.translate(h,f)
d.j7(0,j.b)
u=g*5.8
t=C.bz(new C.aa(-u,-9,u,9),A.h9)
w=C.M()
w.sau(D.bSm.aw(0,new C.aa(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hE.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fiQ(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cBj(g,d)
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
B.fiQ(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.X()
i=C.M()
i.r=(j.e?A.bc:A.aL).gp(0)
d.ai(new C.u(h,f),7,i)},
aq(d){return!0},
gj6(){return this.e}}
B.Ui.prototype={
T(){return new B.bhN(C.a([16,32,12,24],x.t),C.aW(x.S),A.bx,null,null)}}
B.bhN.prototype={
ga_J(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gacB(){var w=this.ga_J(),v=this.r,u=D.awa[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d9(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qe(new B.dSq(v))
w.iX(0)
v.x!==$&&C.aO()
v.x=w
B.z3("gear_lab").bz(new B.dSr(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsB()},
c3d(d,e){var w,v=this
v.m(new B.dSg(v,d,e))
if(v.gacB()&&v.w.J(0,v.r)){B.vF("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_J(),n=r.ga_J(),m=D.awa[r.r].a
m=r.gacB()?"\u2705 Done! Ratio "+A.k.aa(r.ga_J(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gacB()?A.bc:A.cw
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.Xn,B.byb(m,w,r.gacB()&&r.r<7?new B.fg(A.j8,"Next",new B.dSk(r),A.bc,q):q),q),C.D(C.b3(q,q,q,new B.bdu(v,r.f,q),A.f_),1),new C.C(D.afH,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga_J(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,S.a6o,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dz(m+s,r.r===t,new B.dSl(r,t),q,A.cw,q))}p=r.e
u=C.a([new B.eK(o,"GOAL",q),B.hx(A.aW,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dSm(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.auf("Gear "+s+" teeth",p,new B.dSn(r,t),8,40,D.d6s[t],""+p,q))}return B.jD(A.cw,A.h6,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdu.prototype={
bN8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.X(),j=C.a([],x.v),i=new C.aQ(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.e8H,D.edo,D.esC,D.ekf],s=v===0,r=0;r<4;++r){q=t[r]
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
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fD(g,A.qg)
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
h=new B.d91(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.dj,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mG)
h.$5(new C.u(t,0),g[1],w[1],i,A.fC)
s.restore()
s=new B.d92(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aW)
s.$3("2+3 \xb7 shared axle",t,A.cw)
s.$3("4 \xb7 output",q,A.bc)},
aq(d){return!0}}
B.Ts.prototype={
T(){var w=$.aw()
return new B.bht(new C.ar(new C.bb("Meet me at noon",A.b2,A.aN),w),new C.ar(new C.bb("LEMON",A.b2,A.aN),w),C.aW(x.S))}}
B.bht.prototype={
a_(){this.a1()
this.aVJ()
B.z3("cipher_lab").bz(new B.dDy(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aVJ(){this.y=1+A.cI.aB(25)
this.z=0},
ga8z(){var w=this
return B.a0K(B.a0K(D.Gt[w.x],w.y),-w.z)===D.Gt[w.x]},
gawn(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0K(u,v.w)
break A}if(1===t){w=new C.J(C.a(B.a0K(u,0).split(""),x.s),new B.dDg(),x.dv).fU(0)
break A}w=B.i2z(u,v.e.a.a)
break A}return w},
aR8(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d2(d.toUpperCase()),v=x.e8,w=new C.bV(w,w.gM(0),v.k("bV<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fD(q,A.zH))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aV(2,2)
v.push(new C.bE(1,A.bi,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aW,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.LD,r,r,r,r),new C.x(C.jC(65+s),r,D.eY6,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lK,A.j,0,A.p),r))}return new C.a6(r,70,C.A(v,A.dE,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lk,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDp(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eSq,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lk,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDq(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iC,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.az)
w.push(D.fn3)
w.push(A.at)
v=A.aW.j(0.12)
u=C.m(14)
t=C.I(A.aW.j(0.4),A.r,1)
w.push(C.p(o,C.zm(p.gawn().length===0?"\u2026":p.gawn(),D.eX6,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.byb(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aW,o))
w.push(A.ac)
w.push(D.f47)
w.push(A.at)
w.push(p.aR8(p.gawn()))
w.push(A.at)
w.push(D.f6u)
s=C.cB(w,o,A.bB,o,o,A.ah,!1)}else{w=B.byb("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0K(D.Gt[p.x],p.y),o,o,o,o,o,o,D.eXF,o,o,o)
u=(p.ga8z()?A.bc:A.aW).j(0.14)
t=C.m(14)
r=C.I((p.ga8z()?A.bc:A.aW).j(0.5),A.r,1)
t=C.a([w,A.ac,D.fgX,v,A.S,D.fbr,C.p(o,C.d(B.a0K(B.a0K(D.Gt[p.x],p.y),-p.z),o,o,o,o,o,o,D.eZ7,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aR8(B.a0K(D.Gt[p.x],p.y)),A.P],x.p)
if(p.ga8z())t.push(B.byb("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bc,new B.fg(A.jS,"Next",new B.dDr(p),A.bc,o)))
s=C.cB(t,o,A.bB,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eK(C.a([new B.dz("Make a secret",w===0,new B.dDs(p),A.ja,A.aW,o),new B.dz("Crack a code",w===1,new B.dDt(p),A.pA,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dz(n[q],p.r===q,new B.dDu(p,q),o,A.aW,o))
v=C.a([new B.eK(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hx(A.aW,""+u,"Shift",25,1,new B.dDv(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hx(A.aM,""+v,"Shift back",25,0,new B.dDw(p),v))}return B.jD(A.aW,A.h6,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aK3.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.e7.prototype={}
B.ta.prototype={
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
B.a9d.prototype={}
B.aah.prototype={}
B.a3p.prototype={
baO(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hf()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9d(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c_m(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bJX())},
air(d,e,f,g){var w="p"+this.c++,v=new B.ta(w,e,f,g)
v.aoC(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bK7(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cCi(d,e,f,g,h){return A.d.b8(this.b,new B.bK2(e,f,g,h))},
ajc(d,e,f,g){var w
if(d===f||this.cCi(0,d,e,f,g))return null
w=new B.aah(d,e,f,g)
this.b.push(w)
return w},
ayS(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zl(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
alN(d){return this.L2(d)&&!d.x&&d.cx>this.zl(d)},
b3y(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
L2(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c3e(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yz.h(0,v)
if(w!=null)return w.a
return 100},
uO(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c_m(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bK8(a2),t).cI(0,0,new B.bK9(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.V(x.N,u)
n=new B.bKb(o)
m=C.a([],x.t)
l=new B.bKa(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.V(u,u)
f=new B.bKd(g,l,n)
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
a2.b3u(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zl(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b3u(e,d,w,!0)
a2.bKb(a4)},
b3u(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.V(x.N,b3),b5=new B.bJZ(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bJY(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bK0(C.V(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b3y(t)*(1+t.CW))
a4=b2.ayS(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c3e(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bN7(e,a0,b8)
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
bN7(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bKb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ayS(o)/a1.b3y(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zl(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bCt(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.baO(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tn(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tn(o,"The "+$.q1().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tn(o,"More than 1.5 amps went through the "+$.q1().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tn(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tn(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yz.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q1().h(0,n).b
l=f.b
l=l===A.k.jM(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jM(g)?""+A.k.V(g):C.t(g)
a1.tn(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eED.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tn(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tn(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tn(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tn(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tn(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tn(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bCt(d){return A.d.b8(this.a,new B.bJW(d))},
tn(d,e){var w
d.x=!0
d.ay=e
this.baO(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bfp(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aES(d){var w=d.b
return D.aLj.t(0,w)||D.yz.ag(0,w)||w==="buck"||w==="regulator"},
bcb(d){var w,v=!0
if(!this.L2(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yz.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
TR(d,e){var w=this.b
return new C.a2(w,new B.bKf(d,e),C.T(w).k("a2<1>")).gM(0)},
C5(d){var w,v
if(d.x)return!1
w=d.b
if(D.yz.ag(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bak(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q1().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aES(d)||i.C5(d))return null
w=i.TR(d,0)
v=i.TR(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcKB(),t),t.k("H.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jM(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yz.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aEX("battery"),o=J.aX(t.a),t=new C.fG(o,t.b);t.C();){n=o.gU(o)
if(n.e===1.5&&n.as<=0.02&&i.TR(n,0)+i.TR(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aEX("switch"),o=J.aX(t.a),t=new C.fG(o,t.b);t.C();)if(!o.gU(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q1().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zl(k))return"The "+$.q1().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zl(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b8(u,new B.bK3(i,d))
h=q.b
h=h===A.k.jM(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aEX(d){var w=this.a
return new C.a2(w,new B.bK6(d),C.T(w).k("a2<1>"))},
aEw(d){return this.aEX(d).b8(0,new B.bK5(0.35))},
pr(d,e){return A.d.b8(this.a,new B.bK4(e))}}
B.ahq.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=C.M()
w.r=F.VW.gp(0)
c0.aY(new C.aa(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lL.ag(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lL.ag(0,h.b)?(h.ch-1)*38:0
b4.czn(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hoH(q.a,q.b,c1)
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
g.r=D.abV.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yA
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=A.k.D(A.mA.av(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ccR(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zl(a0)){g=j+0
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
e.push(new C.bF())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbI().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.km(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jm(1),b5,b5,b5,b5,A.cd,b5)
a9.eO()
a9.a6(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aLj.t(0,h)||D.yz.ag(0,h)||h==="buck"||h==="regulator")&&!r.C5(a0)&&r.TR(a0,0)+r.TR(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aJ.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.km(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jm(1),b5,b5,b5,b5,A.cd,b5)
a9.eO()
a9.a6(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lL.ag(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.VW.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bcb(a0)?A.cr:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bcb(a0)){a9=new C.km(new C.eo("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.cr,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jm(1),b5,b5,b5,b5,A.cd,b5)
a9.eO()
a9.a6(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Wt,F.Wy,b2)
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
i.z=A.Qj
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b8(q,new B.bFo())){b3=A.d.cI(q,0,new B.bFp())
$.X()
b7=C.M()
b7.r=D.b5S.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.aa(0,0,b8,b9),b7)
a9=C.ih(b5,b5,b5,b5,D.eP1,A.a5,A.ch,b5,A.er,A.cd)
a9.Bu(b6-24)
a9.a6(c0,new C.u(12,10))}},
q0(d,e,f,g,h){var w=null,v=C.ih(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ch,w,A.er,A.cd)
v.eO()
v.a6(d,f)},
czn(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hhc(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.abV,A.k.D(p/1.2,0,1))
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
for(;;){v.jg()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jg()
h=t[u].b
h===$&&C.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jg()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jg()
g=t[u].b
g===$&&C.c()
f=A.k.F(h+i,g.a.length())
v.jg()
i=t[u].M7(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Oi(d,e,f,g){var w,v,u,t
$.X()
w=C.M()
v=g?A.b1:A.a3
u=g?A.b6:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.sau(new C.a7(v,u,A.x,C.a([e,f,e,t],x.O),A.Gv,null).aw(0,d))
return w},
aux(d,e,f){return this.Oi(d,e,f,!0)},
bZY(d,e){return this.Oi(d,A.bo,A.iH,e)},
ag1(d,e){var w,v,u
$.X()
w=C.M()
w.sau(D.aJX.aw(0,C.bU(e,4.2)))
d.ai(e,4.2,w)
w=e.ae(0,D.dZ5)
v=e.ae(0,D.dZe)
u=C.M()
u.r=A.et.gp(0)
u.c=1.2
d.bA(w,v,u)},
ccR(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=C.M()
c0.sau(D.bPp.aw(0,D.eBK))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mn
c1.i_(D.eBC,w)
if(c3){w=C.bz(D.eBJ,A.kn)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.fYu(c2)
c1.bA(new C.u(-u,0),D.e_n,c0)
c1.bA(D.dYe,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lL.ag(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bzp(c1,c2)
break
case"solar":r=C.bz(D.eBF,A.ie)
c1.aD(r,b3.Oi(new C.aa(r.a,r.b,r.c,r.d),A.dL,A.bW,!1))
b9=C.M()
w=C.aq(D.b8X,A.d7,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bgu,A.m4,0.3+0.4*c2.f)
v.toString
b9.sau(new C.a7(A.ax,A.aD,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a55))
c1.aY(D.a55,b9)
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
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aO(b9,w)
w=c2.f
b9=C.M()
b9.r=A.dN.j(0.9).gp(0)
c1.ai(D.dYk,4+4*w,b9)
break
case"crank":n=C.bz(D.eBq,A.ha)
c1.aD(n,b3.aux(new C.aa(n.a,n.b,n.c,n.d),A.bw,A.bI))
b9=C.M()
b9.sau(D.aJY.aw(0,C.bU(A.J,12)))
c1.ai(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cn.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.sau(D.e7M.aw(0,C.bU(m,7)))
c1.ai(m,7,b9)
b3.ag1(c1,D.e_g)
b3.ag1(c1,D.dY7)
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
l.r=A.bW.gp(0)
c1.aO(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bA(v.save())
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
l=j.gbI().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.sau(D.e7s.aw(0,C.bU(A.J,4.5)))
c1.ai(A.J,4.5,b9)
break
case"switch":n=C.bz(D.eBx,A.rd)
b9=C.M()
b9.sau(D.amN.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ag1(c1,D.Rb)
b3.ag1(c1,D.aEN)
i=c2.w?D.aEN:D.dXS
b9=C.M()
b9.r=A.aA.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.Rb,i,b9)
b9=C.M()
b9.r=(c2.w?A.bc:A.bW).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.Rb,i,b9)
b9=C.lb(D.Rb,i,0.85)
b9.toString
w=C.M()
w.r=A.aB.gp(0)
c1.ai(b9,5,w)
break
case"fuse":h=C.bz(D.aKs,D.aK2)
b9=C.M()
b9.r=A.fg.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.ay.gp(0)
c1.aD(h,b9)
if(!t){b9=C.M()
b9.c=1.6
b9.r=C.aq(A.bW,A.cw,c2.fx).gp(0)
c1.bA(D.aF3,D.aEM,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aF3,D.e_E,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.dYL,D.aEM,b9)
b9=C.M()
b9.r=A.dz.gp(0)
c1.ai(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cu(new C.u(F.oG[g]*22,0),20,9)
w=C.bz(f,A.hy)
o=b3.Oi(f,A.dj,A.ob,!0).H()
b9.drawRRect(C.ep(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.sau(D.e7E.aw(0,C.bU(A.J,21)))
c1.ai(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.ay.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.M()
b9.sau(D.e7q.aw(0,C.bU(A.J,13)))
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
case"resistor":a1=C.bz(D.aKs,D.aK2)
b9=C.M()
b9.sau(D.bSD.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
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
c1.aY(D.eBT,b9)
b9=c2.r
b3.q0(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.dZW,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yA
c1.ai(D.vK,34,v)}n=C.cu(D.dXn,12,18)
c1.aD(C.bz(n,A.hy),b3.Oi(n,A.bo,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dm.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.Vd
else{v=C.aq(A.e2,A.hS,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.E7
else{l=C.aq(A.dL,A.dN,c2.fx)
l.toString}w.sau(new C.bR(A.rx,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.ra,17)))
c1.ai(A.ra,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ai(A.ra,17,w)
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
c1.bA(D.e_A,D.e_C,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.dYE,D.dYH,v)
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
else{w=C.aq(A.dL,D.b9H,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aO(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.aB.j(0.6*w).gp(0)
v.z=D.dh2
c1.ai(A.ra,30,v)}w=C.M()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.e_G,D.e_F,w)
w=C.M()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.dYN,D.dYM,w)
b9=b9.r
w=x.v
a6=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.M()
if(t)l=A.t7
else{l=C.aq(A.ex,D.acz,c2.fx)
l.toString}if(t)j=A.kc
else{j=C.aq(A.k8,A.aB,c2.fx)
j.toString}v.sau(new C.a7(A.ax,A.aD,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eAX))
c1.aO(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.j3.gp(0)
c1.aO(a6,v)
v=C.M()
v.r=A.eM.gp(0)
c1.aY(D.eB2,v)
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
c1.aD(C.bz(a7,A.h9),b3.aux(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cC.gp(0)
c1.aY(D.eAK,b9)
b9=C.M()
b9.r=A.cn.gp(0)
c1.aY(D.eAL,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cu(D.dXF,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cw.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c4(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aA.gp(0)
c1.ai(A.J,3,w)
b9.restore()
b3.q0(c1,"M",D.e_f,A.aA,14)
break
case"buzzer":a8=C.cu(A.J,42,42)
b9=C.M()
b9.sau(D.e7I.aw(0,a8))
c1.i_(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.ai(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b5.gp(0)
c1.ai(A.J,6,b9)
b3.q0(c1,"+",D.e_8,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bZ.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c4(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bz(D.eBt,A.h9)
w=C.M()
w.sau(D.bQm.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
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
w.r=D.bai.j(0.5*b9).gp(0)
w.z=A.jd
c1.aO(a9,w)}$.X()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lv,A2.Wg,c2.fx).gp(0)
c1.aO(a9,b9)
break
case"capacitor":a7=new C.aa(-16,-22,16,18)
b9=C.bz(a7,A.h9)
w=C.M()
w.sau(D.bPh.aw(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bW.gp(0)
c1.aY(D.eB8,w)
for(p=0;p<4;++p){b0=new C.km(new C.eo("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.F(!0,A.aA,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ch,new C.jm(1),b4,b4,b4,b4,A.cd,b4)
b0.eO()
b0.a6(c1,new C.u(-14,-18+p*9))}b1=new C.aa(-16,-24,16,-17)
c1.aD(C.bz(b1,A.hy),b3.bZY(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=C.M()
v.r=A.bc.j(0.5).gp(0)
c1.aY(new C.aa(-3,w,11,w+b9),v)
b3.q0(c1,"1F",D.vK,A.c,11)
break
case"radio":a1=C.bz(D.a55,A.ha)
b9=C.M()
b9.sau(D.bSS.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.ob.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bz(D.eBu,A.ie)
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
w.r=(c2.fx>0?A.fZ:A.ns).gp(0)
c1.aY(D.eAN,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=C.M()
v.r=A.bL.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.sau(D.aJY.aw(0,C.bU(D.a48,6)))
c1.ai(D.a48,6,w)
w=C.M()
w.r=A.ob.gp(0)
c1.ai(D.dYd,4,w)
w=C.M()
w.r=A.e2.gp(0)
w.c=1.8
c1.bA(D.dYb,D.aER,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aER,4+k*5+A.k.F(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nx.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c4(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bz(D.eBE,A.h9)
v=C.M()
v.r=M.mL.gp(0)
c1.aD(w,v)
b2=C.bz(D.eBB,A.hy)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.ep(b2),$.pi(),!0)
b9.translate(-33,-21)
E.fUM(c1,D.eH5,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.bc.gp(0)
c1.ai(D.dYp,1.6,b9)}else{w=C.M()
w.r=D.uL.gp(0)
c1.aD(b2,w)
b9=new C.aQ(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aO(b9,w)}b9=C.M()
b9.r=A.bw.gp(0)
c1.aY(D.eB1,b9)
break}B.i0f(c1,c2,b3.b.d,b3.gc3f())
if(t)b3.q0(c1,"\u2716",D.e_J,A.aB,14)
if(s)c1.a.restore()},
bzp(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.aa(-28,-13,28,13)
d.aD(C.bz(w,A.rd),m.aux(w,A.dL,A.iK))
v=new C.aa(-22,-13,22,13)
$.X()
u=C.M()
u.sau(D.amG.aw(0,v))
d.aY(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aY(D.eBh,u)
t=new C.aa(28,-5,34,5)
d.aD(C.bz(t,A.h8),m.Oi(t,A.dL,A.iH,!0))
m.q0(d,"+",D.dXX,A.aM,11)
m.q0(d,"\u2212",D.e_h,A.ad,11)
m.q0(d,C.t(l===A.k.jM(l)?A.k.V(l):l)+"V",D.e_1,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aY(D.eBg,u)
u=e.as
s=C.M()
s.r=C.aq(A.aB,A.bc,u).gp(0)
d.aY(new C.aa(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.q0(d,"FLAT",D.dZV,A.cr,9)}if(l>2){u=C.M()
u.r=A.b5.gp(0)
u.c=1
d.bA(D.dXt,D.aEw,u)
m.q0(d,l>3?"3 cells":"2 cells",D.e_0,A.ay,8)}}else if(l<=9){r=new C.aa(-22,-17,22,17)
u=C.bz(r,A.rd)
$.X()
s=C.M()
s.sau(D.bSr.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cZ.gp(0)
d.aY(D.eBi,s)
for(u=d.a,q=0;q<2;++q){p=D.d4E[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.aJX.aw(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.q0(d,"9V",D.dZX,A.c,16)}else{r=new C.aa(-34,-16,34,16)
u=C.bz(r,A.ie)
$.X()
s=C.M()
s.sau(D.amG.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cp.gp(0)
d.aY(D.eBD,s)
for(u=d.a,q=0;q<2;++q){s=C.bz(C.cu(new C.u(D.avO[q],-20),8,10),A.h8)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cn.gp(0)
n=o.H()
u.drawRRect(C.ep(s),n)
n.delete()}m.q0(d,"+",D.dY3,A.aB,10)
m.q0(d,"12V",D.dZY,A.aA,15)}},
aq(d){return!0}}
B.mp.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.V(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ta(o,r,q,p)
n.aoC(o,r,q,p)
k.push(n)
J.il(s[4],new B.cij(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajc(m,u[1],l,u[3])}}}
B.aho.prototype={
T(){var w=x.N
return new B.ahp(A.J,A.au,C.V(w,x.gl),C.aW(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.ahp.prototype={
acE(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new B.bF2(w,d))
w.as=C.cM(A.l3,new B.bF3(w))},
q(){var w=this.as
if(w!=null)w.a9(0)
w=this.ch
if(w!=null)w.a9(0)
this.bpj()},
ZQ(d,e){return this.caQ(d,e)},
aYW(d){return this.ZQ(d,!1)},
caQ(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$ZQ=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qD:A.uQ
p=d.b
w=3
return C.b(E.fIe(s,r,p,d.ax<3.2,q,$.q1().h(0,p).b),$async$ZQ)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$ZQ,v)},
cnc(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.ci(0,d.a,new B.bF4()),t=J.cE(u)
t.J(u,v)
t.bn(u,new B.bF5(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a9(0)
w.a0a(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a9(0)
w.ch=C.cM(A.kd,new B.bF6(w,u,d))}},
Zw(d){return this.c9d(d)},
c9d(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Zw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i1l(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$Zw)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$Zw,v)},
a0a(d){return this.ckS(d)},
ckS(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0a=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bW(F.ny,null,new B.bF0(u,d),t,!0,!0,!1,A.lO,!1,!1,x.H),$async$a0a)
case 2:return C.h(null,v)}})
return C.i($async$a0a,v)},
a_(){this.a1()
this.bcl()
this.l2()},
bcl(){this.a.c.e=new B.bFl(this)},
lj(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uO(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lL.h(0,s.b)
if((r==null?null:r.b)!==D.yZ)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.J(0,s.a)
q.ZQ(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
q.m(new B.bFm())},
b4I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lL.ag(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
aZC(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dw<1>"),w=new C.dw(w,v),w=new C.bV(w,w.gM(0),v.k("bV<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lL.ag(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
czo(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lL.ag(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lL.ag(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hhc(new C.u(k,n),new C.u(i,l),p)
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
acC(){this.a.toString
this.m(new B.bEw())},
bm7(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cSO[v]
if(!A.d.b8(p.a.c.a,new B.bFn(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.Hz:o
s=s?L.Hz:o
q=t.air(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.acC()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.PA[v].a)
u=w.length
t=u>8
s=t?A.d.dn(w,0,A.o.an(u+1,2)):w
r=t?A.d.fH(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cz<1>")
w=C.B(new C.cz(q,w),w.k("H.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aZr(s,!0))
n.a.toString
if(t)w.push(n.aZr(r,!0))
w.push(C.D(C.cm(new B.bFk(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aZr(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q1()
s=t.h(0,u).d.j(0.14)
r=new C.aV(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zc,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nc,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.ba,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.th,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEx(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cB(m,p,A.h1,p,p,A.aQ,!1),A.f,p,p,new C.o(D.E4,p,new C.bP(A.Y,A.Y,new C.az(o,1,A.r,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aX0(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.aaJ,w,C.I(A.bF,A.r,1),v,w,w,A.n),w,w,w,w,F.afI,w,w,w)},
ccS(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q1().h(0,o),m=d.dy,l=d.fr,k=new B.bEQ(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Iv,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bGW,p,p,p,new B.bED(q,d),p,p,p,p,"Remove part",A.c7),C.aH(p,p,p,p,A.FZ,p,p,p,new B.bEE(q),p,p,p,p,p,A.c7)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.IC,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eXu,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.ao,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cr:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bak(d)
if(v!=null){l=(d.x?A.aB:A.aJ).j(0.14)
j=C.m(10)
i=C.I((d.x?A.aB:A.aJ).j(0.5),A.r,1)
m.push(new C.C(A.i7,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f2Q,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cj,p,p,p),p))}if(B.fSU(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dz("CH "+t,d.at===u,new B.bEF(q,d,u),p,h,p))}l=C.c_(A.bD,l,A.bt,4,6)
l=C.a([A.ao,l,A.at,C.d(q.a.c.C5(d)?"Showing: "+F.Pc[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.C5(d))l.push(new B.fg(A.Fy,"Open big screen",new B.bEI(q,d),h,p))
A.d.v(m,l)}if(D.lL.ag(0,o)&&!B.fSU(o)){l=C.a([A.ao,C.d(q.a.c.C5(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.C5(d))l.push(new B.fg(A.MX,"Open the "+$.q1().h(0,o).b,new B.bEJ(q,d),h,p))
A.d.v(m,l)}if(D.lL.ag(0,o))A.d.v(m,C.a([A.ao,new B.fg(A.Bd,"Make it bigger (or tap it 4 times)",new B.bEK(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C5(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.ao,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.eYj,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d7C[s]
j=r===A.k.jM(r)?A.k.V(r):r
l.push(new B.dz(C.t(j)+" V out",d.e===r,new B.bEL(q,d,r),p,h,p))}i.push(new C.C(A.m9,C.c_(A.bD,l,A.bt,0,6),p))}if(o==="regulator")i.push(D.fkm)
A.d.v(m,i)}if(q.a.c.L2(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zl(d),2)
i=q.a.c
w=i.alN(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.alN(d)?A.cr:A.ey,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zl(d),0,1)
i=q.a.c.alN(d)?A.aB:A.bc
m.push(new C.C(A.i7,C.v(C.a([l,A.d0,C.bv(j,C.mf(A.bF,p,p,5,p,w,new C.mA(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.i7,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eSn,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cZ7[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dz(j,d.e===r,new B.bEM(q,d,r),p,h,p))}m.push(C.c_(A.bD,l,A.bt,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cQp[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dz(j,d.r===r,new B.bEN(q,d,r),p,h,p))}m.push(C.c_(A.bD,l,A.bt,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bEO(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bEP(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bEG(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bEH(d)))
if(o==="crank")m.push(D.fg6)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hn,p,p,p))
return q.aX0(new C.cU(D.aX1,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.y,p,p,p,p,A.ah),p))}}
B.b91.prototype={}
B.U5.prototype={
T(){return new B.aBJ(B.fYt(),new C.cp(null,x.gJ),C.aW(x.S))}}
B.aBJ.prototype={
a_(){this.a1()
$.aT.c1$.push(this)
this.acD()},
acD(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$acD=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.foc(),$async$acD)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i0y(t.d,r)
if(s!=null){t.m(new B.dOv(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$acD,v)},
Es(){var w,v=this
if(!v.as)return
w=B.hSc(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bBM(w)},
iO(d){if(d!==A.fs)this.Es()},
q(){$.aT.hB(this)
this.Es()
this.a2()},
c3h(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a2<1>")
t=new C.a2(v,new B.dOE(q),u).gM(0)
s=new C.a2(v,new B.dOF(),u).gM(0)
r=new C.a2(v,w.gcO6(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dOG(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Es()
if(A.o.F(q.w,10)===0){w=q.f
$.agC()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agC()[q.f].c.$1(q.d)){w.J(0,q.f)
B.Ba("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dOH())
q.Es()
w=q.c
w.toString
w=C.Wr(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.q,p,C.d("\u2705 Challenge done: "+$.agC()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m6,p,p,p,p,p,p,p,p,p,p))}},
afi(){var w=0,v=C.j(x.H),u=this,t
var $async$afi=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dOu(u),t,null,!0,!0,x.H),$async$afi)
case 2:return C.h(null,v)}})
return C.i($async$afi,v)},
aX_(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.r,1)
u=C.a([C.ao(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.ho(new C.a6(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aWZ(d,e,f,g){return this.aX_(d,e,f,g,null)},
apg(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.r,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.ea,new C.dm(1,A.ci,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.ba,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
adC(){var w=0,v=C.j(x.H),u=this,t
var $async$adC=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).ce(C.ej(new B.dOq(u),!1,null,x.H)),$async$adC)
case 2:t=u.e.gbe()
if(t!=null)t.bcl()
if(u.c!=null)u.m(new B.dOr())
u.Es()
return C.h(null,v)}})
return C.i($async$adC,v)},
bCm(){var w,v,u,t,s=null,r=this.f
$.agC()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bn:A.aB
u=C.m(9)
t=C.I(D.E4,A.r,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.w0,s,s,s),s,s,s),A.f,s,D.aX8,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
ago(){var w=0,v=C.j(x.H),u=this,t
var $async$ago=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bW(F.ny,null,new B.dOD(u),t,!0,!0,!0,A.lO,!1,!1,x.H),$async$ago)
case 2:return C.h(null,v)}})
return C.i($async$ago,v)},
c3i(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bI9,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dOJ(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b1L,A.f,r,r,new C.o(A.bm,r,C.I(A.aW.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.fiy,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f9:A.he,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.avQ(s.gc8V(),r),A.rj,s.aWZ(A.xF,"Construction Lab: real 3D wiring, plumbing and a house",A.cw,new B.dOK(s,d)),s.aX_(A.l8,"Challenges",A.aM,s.gcpH(),s.bCm()),s.aWZ(A.MQ,"How to play",A.aW,new B.dOL(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.ao,C.A(C.a([s.apg(A.pB,"Circuits",A.by,s.gciJ()),A.bp,s.apg(A.qK,"Repair",A.aM,new B.dOM(s)),A.bp,s.apg(D.xG,"Clear",A.cr,new B.dON(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.E4,r,new C.bP(A.Y,A.Y,new C.az(q,1,A.r,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bsR,r,r,r)},
B(d){var w=this,v=null
$.aqp="tech"
return C.cb(v,A.bX,C.bn(!0,C.v(C.a([w.c3i(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fXo(w.d,w.e,w.gc3g(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.avQ.prototype={
T(){return new B.b7d(null,null)}}
B.b7d.prototype={
gavq(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cG(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavq().q()
this.bqz()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.ho(new C.a6(42,42,C.c6(this.gavq(),new B.cyR(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b7c.prototype={
a6(d,e){var w,v,u,t=null,s=e.ef(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=C.M()
w.r=A.b4.j(0.25+0.15*o).gp(0)
w.z=G.mn
d.ai(s,r+2+o*2,w)
w=C.M()
w.sau(D.e7D.aw(0,C.bU(s,r)))
d.ai(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.sau(new C.fS(A.A,0,6.283185307179586,A.x,D.cIh,t,new C.mc(p)).aw(0,C.bU(s,r)))
d.ai(s,r,v)
p=new B.cyQ(d)
p.$3(s.ae(0,A.ra),8+o*1.5,1)
q*=4
p.$3(s.ae(0,D.dYX),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ae(0,D.e_N),2.6,0.5+0.5*Math.cos(q))
u=C.ih(t,t,t,t,D.eP7,A.a5,A.ch,t,A.er,A.cd)
u.eO()
u.a6(d,s.ae(0,new C.u(-u.b.c/2,5)))},
aq(d){return d.b!==this.b}}
B.aw8.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aw9.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bpi()}}
B.aI6.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv3.prototype={}
B.fJ.prototype={}
B.ID.prototype={
a4(){return"ScreenStyle."+this.b}}
B.lX.prototype={}
B.TN.prototype={
T(){return new B.bhz(null,null)}}
B.bhz.prototype={
ga82(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nG,null,1,null,v)
w.cp(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga82().q()
this.bsp()},
gR0(){var w=this.ga82().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lL.h(0,this.a.c)
if(v==null)v=D.aKJ
return C.cb(w,R.KF,C.bn(!0,new C.an(A.W,w,A.aa,A.q,C.a([C.av(v.b===D.z_?this.bEv(v):this.cfC(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mj,w,w,w,new B.dKr(d),w,w,w,C.np(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eQJ,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
c3j(d){var w
A:{if(D.HW===d){w=0.46153846153846156
break A}if(D.uc===d){w=0.45
break A}if(D.vR===d){w=0.9259259259259258
break A}if(D.RH===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cfC(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.HW
A:{if(D.HW===p){w=44
break A}if(D.uc===p){w=30
break A}if(D.vR===p){w=22
break A}if(D.RH===p){w=26
break A}w=14
break A}v=C.c6(this.ga82(),new B.dKq(this,w,d,o),q)
if(p===D.a5d)v=new C.CU(D.btr,v,q)
p=this.c3j(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ad(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fF(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A1.F5,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a7(A.ax,A.aD,A.x,r,q,q),A.n),q,q,q,D.bna,new C.Q(u,u,u,u),q,q,q),q)},
b3X(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bw(this.gR0()*0.4),0,100),q=d.b===D.HW,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dh(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rp,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new C.aV(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bt9,t,t,t,3))}n.push(A.d8)
n.push(D.fbD)
n.push(A.bp)
v=C.I(A.ad,A.r,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Dl(A.A,C.p(t,t,A.f,t,t,new C.o(A.bc,t,t,C.m(2),t,t,A.n),t,t,t,A1.F5,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.pY)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f38,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
ato(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d3m,new C.a7(A.ax,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.eV5,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dKm(this,d),v,v,v,v,v,v,!1,A.a8)},
bVb(d,e){return this.ato(d,e,!0)},
bUW(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.RH||n===D.vR,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kC,0.5)
l.toString
l=C.a([k,A.dv,l],x.O)
k=p.b3X(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b5,A.r,1)
w=C.aE(o,C.p(o,C.bv(C.m(23),C.b3(o,o,o,new B.adr(0,p.gR0(),o),A.f_),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hH,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dKk(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.jU[s]
t.push(new C.cr(A.A,o,o,p.bVb(r,m?58:54),o))}k=C.a([k,A.ao,w,A.ac,C.D(C.lS(0.92,t,v,8,12,A6.v0,o,!1),1)],u)
if(n!==D.a5d){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dc(F.jU,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bV(v,v.gM(0),t.k("bV<ai.E>")),t=t.k("ai.E");v.C();){q=v.d
u.push(p.ato(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pK,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bo1,U.ah8,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a7(A.ax,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
by1(d,e){var w=null
return C.p(w,C.v(C.a([this.b3X(d),C.D(C.b3(w,w,w,new B.adr(e,this.gR0(),w),A.f_),1),C.aE(w,C.p(w,C.av(C.d(F.jU[e].a,w,w,w,w,w,w,A8.Il,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dKf(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bEv(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ad(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fF(1.5384615384615383,C.p(t,C.c6(this.ga82(),new B.dKi(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a7(A.ax,A.aD,A.x,w,t,t),A.n),t,t,t,D.bsL,new C.Q(8,8,8,s),t,t,t),t)}}
B.bt8.prototype={
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
r.z=D.dh7
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aq(d){return!0}}
B.adr.prototype={
a6(d,e){return E.aOB(d,e,this.b,this.c)},
aq(d){return!0}}
B.aJT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aUR.prototype={}
B.UB.prototype={
T(){return new B.bi8(C.V(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bi8.prototype={
gvb(){var w=this.f
return w===$?this.f=B.fT_(0):w},
a_(){this.a1()
this.l2()
B.z3("laser_maze").bz(new B.e4p(this),x.P)},
lj(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cz(w,v)}this.m(new B.e4q())},
acI(d){var w=this
w.m(new B.e4f(w,d))
B.vC("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c3z(d){var w,v,u,t,s,r,q,p,o=this
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
if(o.gvb().b.t(0,p)||p===o.gvb().e||o.gvb().d.ag(0,p))return
o.m(new B.e4g(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cm(new B.e4j(t,B.hh5(t.gvb(),t.r))),q=x.p,p=C.a([new B.dz("Clear mirrors",!1,new B.e4k(t),A.jS,A.aM,s),new B.dz("Skip",!1,new B.e4l(t),D.bAY,A.aW,s)],q)
if(t.d>0)p.push(new B.dz("Back",!1,new B.e4m(t),D.bAZ,A.aW,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dz(""+u,v===t.d,new B.e4n(t,v),s,A.aB,s))}return B.jD(A.aB,A.h6,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eK(p,s,s),new B.eK(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bf9.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gee()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.de5(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bz(new C.aa(a5,a6,a8,a4),A.kn)
v=$.X()
u=C.M()
u.r=M.mL.gp(0)
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
o.sau(D.bSY.aw(0,C.cu(p,a3,a3)))
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
a8.r=D.acz.gp(0)
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
m.z=A.BT
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bw).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.ay
i=new C.km(new C.eo("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.ch,new C.jm(1),a2,a2,a2,a2,A.cd,a2)
i.eO()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.u(m-h/2,k-j.gbb(j)/2))}g=new B.de8(a7,a3,a9)
a1.c.bH(0,new B.de6(g))
a4.d.bH(0,new B.de7(g))
f=a7.$1(a4.e)
a4=C.bz(C.cu(f,o,a3*0.8),A.ha)
a8=C.M()
a8.r=A.aB.gp(0)
a9.aD(a4,a8)
v=f.ae(0,new C.u(v,0))
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
return new B.aCn(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCn.prototype={
a_(){this.a1()
this.l2()
B.z3("light_mixer").bz(new B.e4I(this),x.P)},
lj(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aX4()
w.m(new B.e4J())},
avu(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.d9(t,new B.e4t()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aX4(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hcu(u.e,u.f)*2,0,1)*100)
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
gcuz(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cKa[A.o.F(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cm(new B.e4C(v,B.hcu(v.e,t))),r=t[0]
r=B.hx(A.aB,""+A.k.V(r*100)+"%","Red",1,0,new B.e4D(v),r)
w=t[1]
w=B.hx(A.bn,""+A.k.V(w*100)+"%","Green",1,0,new B.e4E(v),w)
t=t[2]
return B.jD(A.b7,A.h6,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hx(A.d7,""+A.k.V(t*100)+"%","Blue",1,0,new B.e4F(v),t),new C.bI(A.a7,u,u,new B.fg(A.hw,"Lock it in",new B.e4G(v),A.bc,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bfo.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bz(new C.aa(0,0,n,m),A.pU)
$.X()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.ep(C.bz(new C.aa(0,0,n,m),A.pU)),$.pi(),!0)
v=e.gee()*0.3
u=e.ef(A.J)
l=-v*0.55
t=v*0.45
s=[u.ae(0,new C.u(0,l)),u.ae(0,new C.u(l,t)),u.ae(0,new C.u(v*0.55,t))]
r=[A.DN,I.abK,I.ac5]
d.l0(new C.aa(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nk
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bz(new C.aa(0,0,n,m),A.pU)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b5.gp(0)
d.aD(n,m)},
aq(d){return!0}}
B.aKk.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv8.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsT()}}
B.aKl.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv9.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsU()}}
B.brY.prototype={}
B.a7h.prototype={
B(d){var w=null
return C.cb(C.eD(w,w,w,!0,!0,D.acJ,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alF,w,w,w,new B.ccX(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fqL,w,w,w,1,w,!0),D.acJ,C.cB(C.a([D.e11,C.cm(new B.ccY())],x.p),w,D.bp1,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vu.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDe(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDe.prototype={
a_(){this.a1()
this.l2()},
b20(d){var w=this.d.length
return A.o.F(A.k.bw(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lj(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b20(v.f)
if(w!==v.x){v.x=w
B.la("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eDB(v))
B.Ba("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c4v(){if(this.d.length<2)return
this.m(new B.eDx(this))},
aXq(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eDw(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc4u(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new B.btk(p,s.f,r),A.f_),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a6(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f1k,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.avb[A.o.F(v,8)].j(0.9)
t=new C.aV(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f0C,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.h3,r,r,r),A.y,!1,r,r,r,r,r,r,r,new B.eDz(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jD(A.aM,A.h6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eK(o,r,r),C.A(C.a([C.D(C.aL(r,A.T,!1,r,!0,A.q,r,C.aM(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kt,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eDA(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hv,"Add",s.gc4s(s),A.c,r),A.bp,new B.fg(A.md,"Spin",q,A.bc,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.btk.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=C.M()
w.r=D.b7c.gp(0)
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
n.r=D.avb[A.o.F(q,8)].gp(0)
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
k=new C.km(new C.eo(o,i,i,A.cO,i,i,i,i,i,i,D.ePV),A.a5,A.ch,new C.jm(1),i,i,i,i,A.cd,i)
k.eO()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.u(a0-n-16,-o.gbb(o)/2))
f.restore()}f=C.M()
f.r=D.acs.gp(0)
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
B.Uc.prototype={
T(){return new B.bhI($,A.bx,0,C.a([],x.X),null,null)}}
B.bhI.prototype={
a_(){this.a1()
this.l2()},
lj(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Ba("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a3Z(900,new B.dQJ())}w.m(new B.dQK())},
aXs(d){return this.m(new B.dQE(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.F(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bob(l,A.cr,n),A.aLX)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eU4,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a6(280,280,new C.an(A.A,n,A.aa,A.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eTa,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CK,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d0J[r]
u.push(new B.dz(""+q+" min",o.d===q,new B.dQG(o,q),n,A.cr,n))}m=o.f
p=m?A0.xP:A.iO
m=m?"Pause":"Start"
return B.jD(A.cr,A.h6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eK(u,n,n),new B.eK(C.a([new B.fg(p,m,new B.dQH(o),A.bc,n),new B.fg(A.jS,"Reset",new B.dQI(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bob.prototype={
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
d.fg(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.Tp.prototype={
T(){return new B.bhl($,A.bx,0,C.a([],x.X),null,null)}}
B.bhl.prototype={
a_(){this.a1()
this.l2()},
lj(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Qd.h(0,p.d)
w.toString
v=A.d.fD(w,new B.dBZ())
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
B.la("flute",D.bTz[t]+5,1400,0.35)}p.m(new B.dC_())},
gc4y(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Jv("Press Start",0.5)
w=D.Qd.h(0,this.d)
w.toString
v=A.d.fD(w,new B.dBU())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Jv("Breathe in",0.5+0.5*A.dA.av(0,p))
case 1:return new C.Jv("Hold",1)
case 2:return new C.Jv("Breathe out",1-0.5*A.dA.av(0,p))
default:return new C.Jv("Hold",0.5)}}}return new C.Jv("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc4y(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.ht.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ad(0,A.G,A.ht.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.CU,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kt,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a6(300,340,new C.an(A.A,q,A.aa,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aX(D.Qd.geh(D.Qd));w.C();){v=w.gU(w)
o.push(new B.dz(v,r.d===v,new B.dBX(r,v),q,A.ht,q))}w=r.e
v=w?A.a_p:A.iO
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dBY(r),A.bc,q))
return B.jD(A.ht,A.h6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eK(o,q,q))}}
B.aGB.prototype={}
B.U3.prototype={
T(){return new B.bhC(new C.cp(null,x.A),C.a([],x.au),A.aA,A.c)}}
B.bhC.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mk,s,s,s,new B.dO_(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.m(18),new C.es(C.aE(s,C.b3(s,s,s,new B.bjE(t.e,t.x,s),A.f_),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dO0(t),new B.dO1(t),s,s,s,s,s,s,s,s,s,new B.dO2(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cJz[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EI(v,u,new B.dO3(t,v),!1,s))}u=t.r
return B.jD(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bR,p,s),"DRAW PAD",C.v(C.a([new B.eK(o,s,s),B.hx(A.bA,""+A.k.V(u),"Brush",30,2,new B.dO4(t),u),new B.eK(C.a([new B.dz("Eraser",t.w,new B.dO5(t),A.Fq,A.bA,s),new B.fg(A.qS,"Undo",new B.dO6(t),A.c,s),new B.fg(A.e4,"Clear",new B.dO7(t),A.c,s),new B.fg(A.MM,"Paper",new B.dO8(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bjE.prototype={
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
return new B.aCx(C.aW(w),C.aW(w))}}
B.aCx.prototype={
a_(){this.a1()
this.aqJ()},
aqJ(){var w,v,u=this,t=x.N,s=C.bl(D.d4Z,!0,t)
A.d.Cn(s)
w=x.S
v=C.T(s).c
t=C.B(C.dc(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dc(s,0,C.dJ(u.d,"count",w),v))
A.d.Cn(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c4t(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.la("bell",12+A.o.F(d,9),150,0.35)
s.m(new B.ea4(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.mS,new B.ea5(s,v,u),t)
else{s.x=!0
C.bN(Ac.EH,new B.ea6(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a6K,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xe,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hK,A.j,0,q,q),q),C.D(C.ib(!0,q,q,A.y,new C.hH(v,8,8,1,q),new B.eaa(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cKZ[t]
o.push(new B.dz(s.b,r.d===s.a,new B.eab(r,s),q,A.aW,q))}o.push(new B.fg(D.bAW,"New game",new B.eac(r),A.bc,q))
return B.jD(A.aW,A.h6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eK(o,q,q))}}
B.V2.prototype={
T(){return new B.aCT(C.a([],x.t))}}
B.aCT.prototype={
c4x(d){A.d.a8(this.d)
this.w=!0
this.aXr()},
aXr(){this.d.push(A.cI.aB(4))
this.e=0
this.YW()},
YW(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YW=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.ekB(t))
s=x.H
w=3
return C.b(C.bN(A.lz,null,s),$async$YW)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aQT(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$YW)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.ekC(t))
case 1:return C.h(u,v)}})
return C.i($async$YW,v)},
aQT(d){this.m(new B.ekz(this,d))
B.la("marimba",D.ane[d]+5,450,0.55)
C.bN(A.EF,new B.ekA(this),x.H)},
c4z(d){var w,v,u=this
if(!u.w||u.r)return
u.aQT(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.ekD(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.ekE(u))
C.bN(A.i6,new B.ekF(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,L.SP,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f1I,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.au7[v]
u=u.j(q.f===v?1:0.35)
t=new C.aV(28,28)
s=q.f===v?C.a([new C.ad(0,A.G,D.au7[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aE(p,C.dg(p,p,p,p,A.bb,new C.o(u,p,new C.bP(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.j4,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.ekG(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.ao,n,A.d5,new C.fF(1,C.lS(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.ba,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jD(A.cp,A.h6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eK(C.a([new B.fg(A.iO,n,q.gc4w(q),A.bc,p)],m),p,p))}}
B.Vn.prototype={
T(){return new B.biQ(new C.ar(A.as,$.aw()))}}
B.biQ.prototype={
aue(d){return C.ov(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eyT(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d3(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.ez1()
l=C.aL(m,A.T,!1,m,!0,A.q,m,C.aM(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Aa.wo),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aVy),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lk,"Bill amount",!0,!0,!1,m,m,m,m,D.f_i,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.eyY(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aNp,!0,A.a5,m,A.am,m,m,m,m)
k=A.bc.j(0.1)
s=C.m(20)
r=C.I(A.bc.j(0.35),A.r,1)
q=x.p
s=C.cB(C.a([l,A.bv,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.aue(w)),t.$2("Total","$"+n.aue(v)),R.WZ,t.$3$big("Each of "+n.f+" pays","$"+n.aue(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bU,m,m,m)],q),m,A.fy,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cw_[p]
r.push(new B.dz(""+o+"%",A.k.V(n.e)===o,new B.eyZ(n,o),m,A.bc,m))}l=n.f
return B.jD(A.bc,A.h6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eK(r,"TIP",m),B.hx(A.aW,""+l,"People",20,1,new B.ez_(n),l),new B.eK(C.a([new B.dz("Round up",n.r,new B.ez0(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.UN.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bij(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bij.prototype={
a_(){this.a1()
this.l2()},
lj(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7g("snare",0.5)}u.m(new B.e8K())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hf()
u.w=t
u.x=t?0:3.141592653589793
B.la("bell",24,400,0.5)}u.m(new B.e8L())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbn(v,o.r>0,n))}u=C.aE(n,C.av(C.c_(A.fM,m,A.bt,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8D(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.dj,A.r,6)
s=C.a([new C.ad(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.e9(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eZx,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.e7H,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8E(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.ePp,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kt,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8F(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cZh[r]
v.push(new B.dz(q.b,o.d===q.a,new B.e8G(o,q),q.c,A.by,n))}v=C.a([new B.eK(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hx(A.by,""+s,"Dice",4,1,new B.e8H(o),s))}if(o.d==="num"){s=o.z
s=B.hx(A.by,""+s,"From",100,1,new B.e8I(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hx(A.by,""+p,"To",1000,2,new B.e8J(o),p)],m))}return B.jD(A.by,A.h6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbn.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ad(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=C.a([],x.p)
for(s=D.dfT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,K.a9M,p,18,p,p,p,p,p,18),p))
return C.eA(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.q,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aJG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv_.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsc()}}
B.aJZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv4.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsw()}}
B.aKt.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bve.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bt1()}}
B.aKX.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvq.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.btv()}}
B.b52.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aBT.h(0,t)
$.aqp=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,T.nO,u,u,u,new B.cpK(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.W(A.MQ,s,u,u,u,22),u,u,u,new B.cpL(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bs2,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.E4,u,new C.bP(new C.az(A.c.j(0.08),1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EK,u,u,1/0))
return C.cb(u,A.bX,C.bn(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),u,!1,!1,u,u)}}
B.dz.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aR,s,s,s,16),A.ea],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.th,C.aE(s,C.dg(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h3,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cpG(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eK.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a6(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),1))
return new C.C(A.cG,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.auf.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.atP(d).cES(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a9_(C.kS(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a6(s,34,C.A(C.a([new C.a6(78,s,r,s),q,new C.a6(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A8.Il,A.dK,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.th,C.aF(!1,A.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Aj.Xq,C.A(C.a([C.W(w.c,u,v,v,v,17),A.ea,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cpF(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.af),v)}}
B.EI.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eNU:u
w=t?A.c:A.b5
w=C.I(w,A.r,t?2.5:1)
return C.aE(u,C.dg(u,u,u,u,A.bb,new C.o(p,u,w,u,t?C.a([new C.ad(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hV,u,r,D.afi,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cpM(v),u,u,u,u,u,u,!1,A.a8)}}
B.ms.prototype={
a3Z(d,e){var w=C.df()
w.seB(C.cM(C.dB(0,0,0,d,0,0),new B.cpH(this,w,e)))
this.fj$.push(w.bd())},
l2(){var w=this,v=w.qe(new B.cpJ(w))
v.iX(0)
w.fi$!==$&&C.aO()
w.fi$=v}}
B.a9Y.prototype={
bvB(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gah(w[q]);p.C();){o=p.gU(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gah(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gU(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.byP()
g.ay!==$&&C.aO()
g.ay=w},
byP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
F5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.a9Z.prototype={
cAV(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.F5(0,w,e)){if(t!=null){q=r.ax
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
fe(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ana[w.aB(7)]
w=w.hf()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
B.la(u,v+w-12,2200,0.1)}}
B.Uj.prototype={
T(){var w=$.aw()
return new B.aBU(new C.cp(null,x.A),new C.ar(A.as,w),new B.On(A.cI),D.d0c,A.au,D.a1Q,$,A.bx,0,C.a([],x.X),null,null)}}
B.aBU.prototype={
a_(){var w,v=this
v.a1()
v.l2()
v.a.toString
w=$.h5A
if(w==null)w=$.h5A=B.csg()
w.bz(new B.dTr(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bsE()},
coT(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dSU(p[n]).$0())
w.push(q)}this.w=w},
gVd(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
arU(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
avY(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.arU(d.x,d.w,105/Math.max(w,3))
C.eP()
B.la("bell",(A.d.cJ(D.a1r,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lj(d){var w,v,u,t,s,r,q,p=this
p.f.fe(0,d,p.db)
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
c5d(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVd()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVd()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cAV((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c5c(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dSS(w))
return}w.m(new B.dST(w,v,A.a.i(d).toLowerCase()))},
bLn(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new B.dSQ(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bDB,n,n,n,o.gbLm(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mk,n,n,n,new B.dTc(o,d),n,n,n,n,"Share",n)],l),j=C.cm(new B.dTd(o,m)),i=A.c.j(0.06)
i=C.a([C.aL(n,A.T,!1,n,!0,A.q,n,C.aM(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.CS,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bLB,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc5b(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iC,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dz(s.a,!1,new B.dTe(o,s),A.n1,A.aW,n))}i.push(new C.C(A.i7,new C.a6(n,38,C.cB(w,n,n,n,n,A.aQ,!1),n),n))}i.push(A.ao)
w=C.a([new B.dz("Whole Earth",!1,new B.dTi(o),A.hh,A.aW,n)],l)
for(v=D.aBS.gdL(D.aBS),v=v.gah(v);v.C();){u=v.gU(v)
w.push(new B.dz(u.a,!1,new B.dTj(o,u),n,A.aW,n))}w.push(new B.dz("Random",!1,new B.dTk(o),A.md,A.aW,n))
i.push(new B.eK(w,"GO TO",n))
w=o.z
i.push(B.hx(A.aW,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dTl(o),w))
w=o.dy
i.push(B.hx(A.cp,A.a.aT(A.o.u(A.k.bw(w)),2,"0")+":00","Time",24,0,new B.dTm(o),w))
w=o.fr
i.push(B.hx(A.bc,o.cnG(),"Season",365,0,new B.dTn(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lE:D.FH
i.push(new B.eK(C.a([new B.dz("Spin",w,new B.dTo(o),D.byP,A.aW,n),new B.dz("Night",v,new B.dTp(o),A.v8,A.aW,n),new B.dz("Borders",u,new B.dTf(o),D.byT,A.aW,n),new B.dz("Names",r,new B.dTg(o),Z.MU,A.aW,n),new B.dz("Music",q,new B.dTh(o),p,A.aW,n)],l),n,n))
return B.jD(A.aW,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cnG(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.auM[u])v=u
return A.i8[v]+" "+(A.k.bw(w-D.auM[v])+1)},
c5a(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mI(1,A.o.F((A.d.cJ(D.a1r,t)+1)*47,360),0.55,1).iB()
r=new B.dSO()
q=C.m(20)
p=C.I(s.j(0.6),A.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.du,j,j,j),1),C.aH(j,j,j,j,A.FZ,j,j,j,new B.dSN(this),j,j,j,j,j,A.c7)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hn,j,j,j)
m=D.deB.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fmt(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gc(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gc(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fmt(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.V5,j,p,q,j,j,A.n),j,j,j,j,D.afO,j,j,j)}}
B.bdB.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=C.M()
d7.r=D.A3.gp(0)
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
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.aW.j(0.35),A.K],t),D.cMu,d3).aw(0,C.bU(p,o*1.1)))
d8.ai(p,o*1.05,u)
n=C.bU(p,o)
u=C.M()
u.sau(D.e7L.aw(0,n))
d8.ai(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aQ(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kE(n))
d8.tQ(0,d6)
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
f=new B.d9R(l,k,j,p,o)
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
a9=A.o.F((A.d.cJ(D.a1r,a7.c)+1)*47,360)
$.X()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mI(1,a9,a3,a8?1:0.62).iB().gp(0)
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
s.z=A.r1
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
c9=B.hEe(a7.a,a3,b2)
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
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b53.j(0.78)],t),D.d0y,d3).aw(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ai(p,o,u)}$.X()
d4=C.M()
d4.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dc9,d3).aw(0,n))
d8.ai(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.he.j(0.5).gp(0)
d8.ai(p,o,d7)},
aq(d){return!0}}
B.aK4.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aK5.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsD()}}
B.brT.prototype={}
B.Vq.prototype={
T(){return new B.biU()}}
B.biU.prototype={
gaQs(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eD(w,w,w,!0,!0,D.A3,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alF,w,w,w,new B.ezM(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fkF,w,w,w,1,w,!0),u=C.m(18),t=A.aW.j(0.1),s=C.I(A.aW.j(0.35),A.r,1),r=x.p
return C.cb(v,D.A3,C.cB(C.a([C.p(w,C.A(C.a([D.bCj,A.aw,C.D(C.d(D.cQa[this.gaQs()],w,w,w,w,w,w,D.a72,w,w,w),1),C.aH(w,w,w,w,D.bMB,w,w,w,new B.ezN(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.az,C.cm(new B.ezO())],r),w,A.XB,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vb.prototype={
T(){return B.hEG()}}
B.biG.prototype={
cfD(d){var w=d.c,v=B.hEI(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.l2()},
lj(d){var w,v,u,t=this
t.e.fe(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cfD(w)
u=new C.u(-v.a,-v.b).aK(0,t.w)
v=C.lb(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc5e(){var w=this.ch
return new C.u(w.a/2,w.b/2).ae(0,this.x)},
c5i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BK[s]
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
aXN(d){this.m(new B.erP(this,d))
C.eP()
B.la("bell",D.dck[A.o.F(A.d.cJ(D.BK,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mk,m,m,m,new B.es_(n,d),m,m,m,m,"Share",m)],k),i=C.cm(new B.es0(n,l)),h=C.a([new B.dz("All",!1,new B.es1(n),A.a_y,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BK[w]
h.push(new B.dz(v.a,n.z===v,new B.es2(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hx(A.aM,s,"Time",1,0,new B.es3(n),u/t)
u=n.w
u=B.hx(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.es4(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lE:D.FH
return B.jD(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eK(h,"GO TO",m),t,u,new B.eK(C.a([new B.dz("Orbits",s,new B.es5(n),m,A.aM,m),new B.dz("Names",r,new B.es6(n),m,A.aM,m),new B.dz("Asteroids",q,new B.es7(n),m,A.aM,m),new B.dz("Music",p,new B.es8(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c5f(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.erN(),m=C.m(20),l=C.I(q.j(0.6),A.r,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kU,r,r,r),1),C.aH(r,r,r,r,A.FZ,r,r,r,new B.erM(this),r,r,r,r,r,A.c7)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.IC,r,r,r)
v=n.$2("WIDTH",B.Gc(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gc(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.erO().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.P,p,A.P,v,A.P,s,A.P,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.V5,r,l,m,r,r,A.n),r,r,r,r,D.afO,r,r,r)}}
B.bpY.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.A3.gp(0)
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
o=a5.gc5e()
n=a5.w
if(a5.as)for(a6=A.d.gah(D.BK),t=new C.fG(a6,new B.eTX()),s=o.a,r=o.b;t.C();){q=a6.gU(0).c
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
p.delete()}i=B.hEH(A.d.gL(D.BK))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.sau(new C.bR(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.ai(o,a6,t)
t=C.M()
t.sau(D.e7F.aw(0,C.bU(o,i)))
a7.ai(o,i,t)
if(a5.at){h=B.h7b("Sun",10.5,A.ad)
h.a6(a7,o.ae(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gah(D.BK),t=new C.fG(a6,new B.eTY()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gU(0)
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
a0.z=A.r1
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sau(new C.bR(P.qc,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a14,a4).aw(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cV5[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h7b(d,10.5,A.ad)
h.a6(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.Uk.prototype={
T(){var w=x.i
return new B.aBV(new B.On(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBV.prototype={
cs2(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c5h(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dXE
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
s.m(new B.dTv())},
a_(){this.a1()
this.l2()},
lj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fe(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.ym[r]
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
break}}}if(A.d.d9(s,new B.dTY()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length>700)A.d.cz(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bJG()
else n=n==="weight"?p.czd():p.bBZ()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.d9v[u]
v.push(new B.dz(t.b,p.d===t.a,new B.dTK(p,t),t.c,A.cw,o))}v=C.a([new B.eK(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dz("Hammer",!s,new B.dTL(p),Ah.FC,A.cw,o),new B.dz("Feather",s,new B.dTM(p),Z.Mu,A.cw,o),new B.dz(q,r,new B.dTQ(p),A.Fr,A.aW,o)],w)
q=p.w
A.d.v(v,C.a([new B.eK(r,o,o),B.hx(A.cw,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dTR(p),q),new B.eK(C.a([new B.fg(A.tu,"Drop!",new B.dTS(p),A.bc,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hx(A.cw,""+A.k.V(s)+" kg","Your weight",120,20,new B.dTT(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hx(A.cw,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dTU(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hx(A.cw,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dTV(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hx(A.cw,A.k.aa(r,1)+"x out","View",8,0.5,new B.dTW(p),r),new B.eK(C.a([new B.fg(A.n2,"Fire!",p.gc5g(),A.bc,o),new B.fg(A.tu,"Falls",new B.dTX(p),A.c,o),new B.fg(A.qJ,"Orbit 7.7",new B.dTN(p),A.c,o),new B.fg(D.bBJ,"Oval 9",new B.dTO(p),A.c,o),new B.fg(A.Bd,"Escape",new B.dTP(p),A.c,o)],w),o,o)],w))}return B.jD(A.cw,A.h6,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bJG(){return new C.C(D.bn3,C.cm(new B.dTu(this)),null)},
czd(){var w,v,u,t=null,s=[D.evc,D.ewy,D.ewG,D.ewZ,D.ewE,D.ex3,D.evK,D.exn,D.ewj],r=x.p,q=C.a([D.f91,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cG,new C.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a6(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bE(1,A.bi,new C.AQ(new B.dTw(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fbc)
return C.cB(q,t,A.iN,t,t,A.ah,!1)},
bBZ(){return C.cm(new B.dTs(this))}}
B.b8R.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=C.M()
e.r=D.A3.gp(0)
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
e.sau(new C.bR(A.A,0.5,A.x,i,0,C.a([A.K,A.aW.j(0.35),A.K],x.O),D.d1q,i).aw(0,C.bU(g,p*1.1)))
d.ai(g,p*1.06,e)
e=C.M()
e.sau(D.e7z.aw(0,C.bU(g,p)))
d.ai(g,p,e)
o=g.ae(0,new C.u(0,-p))
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
s=o.ae(0,new C.u(0,-400*h-6))
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
f.r=A.cw.j(0.9).gp(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ae(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.cw.j(0.4).gp(0)
h.z=G.mn
d.ai(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.ai(k,4,h)}},
aq(d){return!0}}
B.V3.prototype={
T(){return new B.biD(new C.cp(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.biD.prototype={
a_(){this.a1()
this.l2()},
lj(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.P8[l.e],i=D.P8[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mk,k,k,k,new B.ekJ(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.bpw(f,g,v,k),A.f_),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gc(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.jg,A.L,k,k)
o=B.Gc(v*v*v)
n=A.a.c9(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A4.Sy,A.L,k,k),A.bz,C.d(p+": "+B.Gc(w*2)+" km wide. "+r+": "+B.Gc(h*2)+" km wide.",k,k,k,k,k,k,A4.SG,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bpb,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.P8[m]
r.push(new B.dz(w.a,l.e===m,new B.ekK(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.P8[m]
w.push(new B.dz(s.a,l.f===m,new B.ekL(l,m),k,C.b0(s.c),k))}return B.jD(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.es(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eK(r,"FIRST",k),new B.eK(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bpw.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=C.M()
w.r=D.VL.gp(0)
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
w=new B.eS5(d)
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
k=C.ih(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eVR,s.a),A.a5,A.ch,i,A.er,A.cd)
k.eO()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a6(d,l.ae(0,new C.u(-w/2,h)))
j=C.ih(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eZ8,t.a),A.a5,A.ch,i,A.er,A.cd)
j.eO()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ae(0,new C.u(-h/2,-t.gbb(t)/2)))},
aq(d){return!0}}
B.aK6.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv6.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsF()}}
B.aKF.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvk.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.btd()}}
B.aKI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvm.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.btg()}}
B.OQ.prototype={}
B.Tn.prototype={
T(){return B.hEE()}}
B.bhk.prototype={
a_(){this.a1()
this.l2()},
lj(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fe(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dBq())},
aXO(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb5v()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.OQ(t,u,1.2,new C.wQ(1,30+A.cI.aj()*40,0.9,0.7).iB()))
B.la("bell",60+A.k.V(12-u)*2,400,0.35)},
gb5v(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.J(m,new B.dBe(),C.T(m).k("J<1,O>")).fD(0,A.wu),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mk,n,n,n,new B.dBf(o,d),n,n,n,n,"Share",n)],m)
v=C.cm(new B.dBg(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fmt(s)+" Suns"
t=B.hx(A.by,s,"Mass",1,0,new B.dBi(o),u/t)
u=C.a([new B.dz("Star (10)",!1,new B.dBj(o),n,A.by,n),new B.dz("Cygnus X-1 (21)",!1,new B.dBk(o),n,A.by,n),new B.dz("Milky Way core (4 million)",!1,new B.dBl(o),n,A.by,n),new B.dz("M87 (6.5 billion)",!1,new B.dBm(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lE:D.FH
return B.jD(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eK(u,"LIKE",n),new B.eK(C.a([new B.dz("Glowing ring",s,new B.dBn(o),n,A.by,n),new B.dz("Bent light",r,new B.dBo(o),n,A.by,n),new B.dz("Music",q,new B.dBp(o),p,A.by,n),new B.fg(A.jS,"Clear",new B.dBh(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adp(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eRS,w,w,w),A.bz,C.d(e,w,2,w,w,w,w,M.za,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b8f.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=C.M()
w.r=D.bcM.gp(0)
b2.aY(new C.aa(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb5v()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=T.Qi
b2.ai(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wL,A.fC,d)
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
b1.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cHK,null).aw(0,C.bU(u,b0)))
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
o.z=G.mn
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.adD.prototype={}
B.Ug.prototype={
T(){var w=x.r,v=x.g
return new B.bhL(new C.cp(null,x.A),new B.On(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bhL.prototype={
a_(){this.a1()
this.Z8()
this.l2()},
Z8(){var w,v,u,t,s,r,q,p,o=this,n=new C.eT()
n.dI(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adD(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hf()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adD(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
crU(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dZ6
k.cx=D.dZ9
w=new C.eT()
w.dI(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adD(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
lj(d){var w,v,u,t,s,r,q,p=this
p.e.fe(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.eD(0,s).aK(0,0.9/(s*s))
w=p.fy.ae(0,r.aK(0,u))
p.fy=w
v=p.cx.aC(0,r.aK(0,u))
p.cx=v
w=p.fx.ae(0,w.aK(0,u))
p.fx=w
v=p.CW.ae(0,v.aK(0,u))
p.CW=v
q=new B.dS2(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mk,r,r,r,new B.dRT(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdr(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ae.a6j,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cY7[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dz(u.b,o,new B.dRU(s,u),r,A.fY,r))}l.push(new B.dz("Collide",s.ch,new B.dRV(s),A.xD,A.bZ,r))
o=C.a([new B.eK(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hx(A.fY,""+n,"Arms",6,2,new B.dRW(s),n)
l=s.r
A.d.v(o,C.a([n,B.hx(A.fY,A.k.aa(l,1),"Winding",6,0.8,new B.dRX(s),l)],q))}n=s.as
o.push(B.hx(A.fY,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dRY(s),n))
n=s.ax
o.push(B.hx(A.fY,A.k.aa(n,1)+"x","Speed",4,0,new B.dRZ(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lE:D.FH
o.push(new B.eK(C.a([new B.dz("Dark matter",n,new B.dS_(s),r,A.by,r),new B.dz("You are here",l,new B.dS0(s),r,A.aM,r),new B.dz("Music",w,new B.dS1(s),t,A.fY,r)],q),r,r))
return B.jD(A.fY,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.es(new C.an(A.W,r,A.b_,A.q,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdr.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=C.M()
w.r=D.beG.gp(0)
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
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c5C,a0).aw(0,C.bU(o,a2)))
a3.ai(o,a2,t)}m=new B.d6Z(a1.as)
a2=n*0.3
t=C.M()
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.fZ.j(0.85),A.aJ.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
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
l.r=new H.mI(1,r,q>200?0.45:0.55,1).iB().j(0.35+(1-s)*0.5).gp(0)
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
f=C.ih(a0,a0,a0,a0,D.eOY,A.a5,A.ch,a0,A.er,A.cd)
f.eO()
f.a6(a3,g.ae(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bfM.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.baU.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=C.M()
w.r=A.fZ.gp(0)
a3.ai(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.ik.gp(0)
a3.ai(a1,5,w)}},
aq(d){return!0}}
B.V_.prototype={
T(){return new B.biC(new C.cp(null,x.A),new B.On(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.biC.prototype={
a_(){this.a1()
this.l2()},
lj(d){var w,v,u,t=this
t.e.fe(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bw(w*4)
if(u!==A.k.bw(t.as))B.la("bell",60+u*4,500,0.35)
t.as=u}},
gcnF(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcef(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mk,q,q,q,new B.ejY(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.es(C.b3(q,q,q,new B.boM(r,q),A.f_),r.d),1)
if(r.f==="seasons")w=r.gcnF()
else{w=r.gcef()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A5.Iq,A.L,q,q),A.f,q,q,q,q,q,q,q,L.afY,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.xP:A.iO
t=r.Q
s=t?A.lE:D.FH
s=C.a([new B.eK(C.a([new B.dz("Seasons",n==="seasons",new B.ejZ(r),A.y3,A.bs,q),new B.dz("Moon phases",n==="moon",new B.ek_(r),A.v8,A.bs,q),new B.dz(u,!1,new B.ek0(r),v,A.bs,q),new B.dz("Music",t,new B.ek1(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hx(A.bs,D.cXt[A.o.F(A.k.bw(n*12),12)],"Month",1,0,new B.ek2(r),n)
v=r.z
A.d.v(s,C.a([n,B.hx(A.bs,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ek3(r),v)],p))}else{p=r.w
s.push(B.hx(A.bs,""+(A.k.bw(p*29.5)+1),"Day of month",1,0,new B.ek4(r),p))}p=r.y
s.push(B.hx(A.bs,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ek5(r),p))
return B.jD(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.boM.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=C.M()
b8.r=D.A3.gp(0)
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
b9.i_(u,t)
t=C.M()
t.sau(D.e7B.aw(0,C.bU(p,34)))
b9.ai(p,22,t)
m=s.r*2*3.141592653589793
l=p.ae(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eD(0,p.aC(0,l).gcm())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.bcI.gp(0)
b9.ai(A.J,k,s)
J.bA(b8.save())
b7=new C.aQ(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kE(C.bU(A.J,k)))
b9.tQ(0,b7)
b7=i.aK(0,k).aK(0,0.35)
s=k*1.1
b6=C.M()
b6.sau(D.e7K.aw(0,C.bU(A.J,s)))
b9.ai(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aK(0,k).aK(0,1.7)
b5=h.aK(0,k).aK(0,1.7)
t=C.M()
t.c=2
t.r=A.cr.gp(0)
b9.bA(b7,b5,t)
t=h.aK(0,k).aK(0,1.7)
b5=C.M()
b5.r=A.cr.gp(0)
b9.ai(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ih(b4,b4,b4,b4,C.dq(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aOS,b5),A.a5,A.ch,b4,A.er,A.cd)
f.eO()
f.a6(b9,l.ae(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
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
r.sau(new C.bR(new C.d8(-0.5,0),1.1,A.x,b4,0,C.a([D.b8v,D.adY],x.O),D.cPa,b4).aw(0,C.bU(p,k)))
b9.ai(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ae(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b61.gp(0)
b9.ai(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kE(C.bU(a1,a2)))
b9.tQ(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bW.gp(0)
b9.aY(new C.aa(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eD(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.aqV[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aW.j(0.45).gp(0)
a7.z=A.jd
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b5X.gp(0)
b9.ai(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kE(C.bU(a8,a9)))
b9.tQ(0,b6)
s=s.w
b1=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aB2(new C.u(u,t+a9),b6,new C.aV(a9,a9))
if(b0<0.5)b6=b2<0
b1.aB2(new C.u(u,b5),b6,new C.aV(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bW.gp(0)
b9.aO(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b5.gp(0)
b9.ai(a8,a9,b8)
b3=C.ih(b4,b4,b4,b4,D.eOZ,A.a5,A.ch,b4,A.er,A.cd)
b3.eO()
b3.a6(b9,a8.ae(0,new C.u(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aJD.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.buZ.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bs9()}}
B.aK1.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv5.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.bsz()}}
B.aKE.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvj.prototype={
q(){var w,v,u
for(w=this.fj$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fi$
w===$&&C.c()
w.q()
this.btc()}}
var z=a.updateTypes(["~()","R(ta)","R(a3p)","ay<~>()","R(BR)","G(ta,G)","O(O,ta)","R(BN)","R(Yl)","R(aah)","R(uN)","R(a27)","R(nc)","R(ZS)","R(ab4)","G(G)","Tt()","U4()","Tj()","Ui()","UB()","UD()","Ts()","UX()","Vc()","UY()","UU()","Vj()","Tr()","Vo()","R(mp)","UO()","UT()","adI(Y,G)","acC(Y,G)","~(a4<@,@>)","G(BN,BN)","n(e7)","R(ady)","R(a_y)","R(C1)","R(aaM)","R(acG)","R(aav)","G(G,qx)","G(G,BR)","n(qx)","~(qx,ak<n>,G)","qx?(BR)","R(qx)","r(n,a_l)","R(P6)","~(A1)","R(aaC)","O(G?)","Vq()","R(Fb)","R(abT)","O(G)","U5()","O(OQ)","R(a9d)","To()","a7h()","~(Gt,n,u,w,O)","~(n,ta)","UR()","Uw(Y)","MB(Y)","TN(Y,bo<O>,bo<O>)","Vu()","Uc()","Tp()","U3()","UP()","V2()","Vn()","UN()","~(n)","cn(a9Z)","R(a9Y)","Uj()","Vb()","Uk()","Tn()","Ug()","V3()","V_()","TP()","R(OQ)","~(b9)"])
B.foB.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.ffq.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.flI.prototype={
$1(d){var w
if(!this.a.L2(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.flJ.prototype={
$1(d){return d.x},
$S:z+1}
B.foy.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.foz.prototype={
$1(d){var w
if(!this.a.L2(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.foA.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e1p.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e1q.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e1r.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.lX(v,A.dV,A.i5)}},
$S:8}
B.e1C.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e1D.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e1y.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e1w.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dB(0,0,0,d,0,0),new B.e1x(w,this.b,e)))},
$S:1816}
B.e1x.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e1z.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVg().air(0,u[1],u[2],u[3])
u[4].bH(0,new B.e1u(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e1v(w.a,v,w.f,w.r))},
$S:0}
B.e1u.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:197}
B.e1v.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e1A.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVg().ajc(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e1t(w.a,v,w.e,w.f))},
$S:0}
B.e1t.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e1B.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e1s(w,this.b))},
$S:0}
B.e1s.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e1G.prototype={
$0(){var w=this.a
return w.m(new B.e1F(w))},
$S:0}
B.e1F.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e1H.prototype={
$0(){var w=this.a
return w.m(new B.e1E(w))},
$S:0}
B.e1E.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e1I.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.MN()},
$S:0}
B.e1J.prototype={
$0(){return this.a.Xf(this.b)},
$S:0}
B.e1K.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.MN():w.aTI()},
$S:2}
B.e1L.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.MN():w.aTI()},
$S:0}
B.eho.prototype={
$2(d,e){return d+e},
$S:1817}
B.ehI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ehH(w,d))},
$S:128}
B.ehH.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.ehJ.prototype={
$0(){},
$S:0}
B.ehK.prototype={
$0(){},
$S:0}
B.ehq.prototype={
$0(){return this.a.m(new B.ehp(this.b,this.c))},
$S:0}
B.ehp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ehf.prototype={
$1(d){return this.a.cx===d},
$S:34}
B.ehg.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.ehh.prototype={
$1(d){return this.a.cy===d},
$S:34}
B.ehi.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.ehj.prototype={
$1(d){return this.a.db===d},
$S:34}
B.ehk.prototype={
$1(d){return this.a.db=d},
$S:28}
B.ehl.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
B.ehm.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:28}
B.ehn.prototype={
$0(){var w=this.a
return w.m(w.gauQ())},
$S:0}
B.ehd.prototype={
$1(d){return this.a.$1(!0)},
$S:83}
B.ehe.prototype={
$1(d){return this.a.$1(!1)},
$S:153}
B.ehc.prototype={
$1(d){return this.a.$1(!1)},
$S:214}
B.ehB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bf6(o,p),n)
w=this.b
v=B.bxG("WORLD",w.a,w.c)
u=B.bxG("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cr:A.bc
t=B.bxG("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.BE[o.db].d?A.cr:A.c
q=x.p
s=C.a([v,u,t,B.bxG("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bxG("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hK,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bAY(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qX[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mg,"Again",new B.ehw(o),A.c,p),new B.fg(A.qK,"Rebuild",new B.ehx(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.j8,"Next world",new B.ehy(o),A.bc,p))
n.push(B.haR("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(B.haR("Crash!",o.at,A.cr,C.a([new B.fg(A.mg,"Try again",new B.ehz(o),A.bc,p),new B.fg(A.qK,"Rebuild",new B.ehA(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.q,n,p)},
$S:62}
B.ehw.prototype={
$0(){var w=this.a
return w.m(w.gauQ())},
$S:0}
B.ehx.prototype={
$0(){var w=this.a
return w.m(new B.eht(w))},
$S:0}
B.eht.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ehy.prototype={
$0(){var w=this.a
return w.m(new B.ehs(w))},
$S:0}
B.ehs.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.ehz.prototype={
$0(){var w=this.a
return w.m(w.gauQ())},
$S:0}
B.ehA.prototype={
$0(){var w=this.a
return w.m(new B.ehr(w))},
$S:0}
B.ehr.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ehC.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.ehv(v,w))},
$S:0}
B.ehv.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.ehD.prototype={
$1(d){return this.a.y=d},
$S:9}
B.ehE.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.ehF.prototype={
$1(d){return this.a.z=d},
$S:9}
B.ehG.prototype={
$0(){var w=this.a
return w.m(new B.ehu(w))},
$S:0}
B.ehu.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dBS.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h6d
if(q==null)q=$.h6d=B.cCs()
w=3
return C.b(C.iI(C.a([q,$.tP().bdv("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.km(0,C.cO(J.q(s,1)))
q.m(new B.dBR(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:51}
B.dBR.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dBu.prototype={
$0(){return this.a.bRU(C.aU(J.q(this.b,"group")))},
$S:0}
B.dBv.prototype={
$1(d){return A.a.aT(A.o.fO(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:283}
B.dBT.prototype={
$0(){return B.a7g("kick",0.25)},
$S:0}
B.dBw.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dBx.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dBy.prototype={
$0(){return B.a7g("kick",0.5)},
$S:0}
B.dBz.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dBB.prototype={
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
u=w}if(u.cx!=null&&!A.d.b8(u.d.e,new B.dBA(u)))u.cx=null
u.go=0},
$S:0}
B.dBA.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.awA(d)},
$S:z+11}
B.dBr.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dBs.prototype={
$0(){var w=this.a
return w.m(w.gc15())},
$S:0}
B.dBt.prototype={
$0(){return this.a.ag4(null)},
$S:0}
B.dBI.prototype={
$0(){var w=this.a.as
return w==null?null:w.eS(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dBJ.prototype={
$0(){return this.a.cw1(this.b.a)},
$S:0}
B.dBK.prototype={
$0(){return this.a.ag4(this.b)},
$S:0}
B.dBL.prototype={
$1(d){var w=this.a
return w.m(new B.dBH(w,d))},
$S:6}
B.dBH.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dBM.prototype={
$0(){var w=this.a
return w.m(new B.dBG(w,this.b))},
$S:0}
B.dBG.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dBN.prototype={
$0(){var w=this.a
return w.m(new B.dBF(w))},
$S:0}
B.dBF.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dBO.prototype={
$0(){var w=this.a
return w.m(new B.dBE(w))},
$S:0}
B.dBE.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eS(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Jw},
$S:0}
B.dBP.prototype={
$0(){var w=this.a
return w.m(new B.dBD(w))},
$S:0}
B.dBD.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aWh()
else w.p2=null},
$S:0}
B.dBQ.prototype={
$0(){var w=this.a
return w.m(new B.dBC(w))},
$S:0}
B.dBC.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bZ2.prototype={
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
$S:307}
B.bZ3.prototype={
$1(d){var w=new C.ru([],[]).pl(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
B.f9J.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:211}
B.f9K.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:211}
B.f9L.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:211}
B.f9S.prototype={
$1(d){return!J.q(d,0)},
$S:211}
B.f9T.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:211}
B.f9U.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:211}
B.dE2.prototype={
$1(d){return this.a.arz(0)},
$S:8}
B.dDH.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hRI(),C.T(w).k("J<1,G>")).fG(0)},
$S:0}
B.dDK.prototype={
$1(d){return""+d},
$S:76}
B.dE3.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dDF.prototype={
$1(d){return this.a.arz(this.b)},
$S:8}
B.dDG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avj(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.ml(0,d,a1.lN(0.15,0.3))
u=a1.ml(0,d,a1.lN(0.15,0.62))
t=a1.ml(0,"and",a1.lN(0.48,0.46))
s=a1.ml(0,a0,a1.lN(0.82,0.46))
a1=t.a
w.push(new B.nc(v.a,a1,0))
w.push(new B.nc(u.a,a1,1))
w.push(new B.nc(a1,s.a,0))
break
case 1:v=a1.ml(0,d,a1.lN(0.12,0.25))
u=a1.ml(0,d,a1.lN(0.12,0.65))
r=a1.ml(0,"xor",a1.lN(0.46,0.25))
q=a1.ml(0,"and",a1.lN(0.46,0.65))
p=a1.avi(0,a0,a1.lN(0.82,0.25),0)
o=a1.avi(0,a0,a1.lN(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nc(a1,n,0))
m=u.a
w.push(new B.nc(m,n,1))
l=q.a
w.push(new B.nc(a1,l,0))
w.push(new B.nc(m,l,1))
w.push(new B.nc(n,p.a,0))
w.push(new B.nc(l,o.a,0))
break
case 2:k=a1.ml(0,"clock",a1.lN(0.15,0.4))
j=a1.ml(0,"not",a1.lN(0.45,0.65))
s=a1.ml(0,a0,a1.lN(0.82,0.3))
i=a1.ml(0,"buzzer",a1.lN(0.82,0.65))
a1=k.a
w.push(new B.nc(a1,s.a,0))
n=j.a
w.push(new B.nc(a1,n,0))
w.push(new B.nc(n,i.a,0))
break
default:h=a1.ml(0,d,a1.lN(0.12,0.25))
g=a1.ml(0,d,a1.lN(0.12,0.7))
f=a1.ml(0,"nor",a1.lN(0.5,0.25))
e=a1.ml(0,"nor",a1.lN(0.5,0.7))
s=a1.ml(0,a0,a1.lN(0.86,0.25))
a1=f.a
w.push(new B.nc(g.a,a1,0))
n=e.a
w.push(new B.nc(n,a1,1))
w.push(new B.nc(h.a,n,0))
w.push(new B.nc(a1,n,1))
w.push(new B.nc(a1,s.a,0))}},
$S:0}
B.dDL.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avj(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BN(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.ml(0,w.e,o.lN(0.86,0.5))},
$S:0}
B.dDA.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dDB.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dDC.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dDD.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dDE.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abt(this.c)
if(v.ax)B.Ba("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dDM.prototype={
$0(){},
$S:0}
B.dDN.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
B.dDO.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dDJ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dDI(v))
w.cy=null},
$S:0}
B.dDI.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dDz.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.ml(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dDX.prototype={
$0(){var w=this.a
return w.m(new B.dDW(w))},
$S:0}
B.dDW.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dDY.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c5,C.jr(C.b3(w,w,w,new B.b9i(v,w),u),A.q,w),A.y,!1,w,w,w,w,w,w,w,w,new B.dDR(v),w,w,w,new B.dDS(v),new B.dDT(v),new B.dDU(v),w,w,w,w,w,w,w,w,w,w,new B.dDV(v),w,w,w,!1,A.a8)},
$S:35}
B.dDV.prototype={
$1(d){return this.a.c2C(d.b)},
$S:50}
B.dDT.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cb2(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aw6(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:43}
B.dDU.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dDS.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bVs(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dDP(w))
u=t.as
u.toString
v.push(new B.nc(u,w.a,w.b))
C.jK()}}t.z=t.as=null},
$S:37}
B.dDP.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dDR.prototype={
$1(d){return this.a.au7(d.b)},
$S:291}
B.dDZ.prototype={
$0(){return this.a.bwR(this.b.a)},
$S:0}
B.dE_.prototype={
$0(){return this.a.arz(this.b.a)},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(new B.dDQ(w))},
$S:0}
B.dDQ.prototype={
$0(){var w=this.a
w.avj(0)
w.ay=null},
$S:0}
B.dE1.prototype={
$0(){return this.a.crR(this.b)},
$S:0}
B.cJe.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.er,A.cd)
u.eO()
return u},
$S:336}
B.dJu.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dJt.prototype={
$0(){return this.a.d=null},
$S:0}
B.dJw.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bXe()},
$S:118}
B.dJv.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.fa9.prototype={
$0(){return D.dSH},
$S:z+55}
B.faa.prototype={
$0(){return D.dqR},
$S:z+59}
B.fab.prototype={
$0(){return D.dnK},
$S:z+62}
B.fam.prototype={
$0(){return D.dS6},
$S:z+63}
B.fao.prototype={
$0(){return D.dxe},
$S:z+66}
B.fap.prototype={
$0(){return D.dqN},
$S:z+88}
B.faq.prototype={
$0(){return D.dqQ},
$S:z+17}
B.far.prototype={
$0(){return D.djV},
$S:z+18}
B.fas.prototype={
$0(){return D.dtk},
$S:z+19}
B.fat.prototype={
$0(){return D.duX},
$S:z+20}
B.fau.prototype={
$0(){return D.duZ},
$S:z+21}
B.fac.prototype={
$0(){return D.dpZ},
$S:z+22}
B.fad.prototype={
$0(){return D.dzY},
$S:z+23}
B.fae.prototype={
$0(){return D.dRO},
$S:z+24}
B.faf.prototype={
$0(){return D.dPR},
$S:z+25}
B.fag.prototype={
$0(){return D.dyD},
$S:z+26}
B.fah.prototype={
$0(){return D.dRW},
$S:z+27}
B.fai.prototype={
$0(){return D.dpY},
$S:z+28}
B.faj.prototype={
$0(){return D.dS5},
$S:z+29}
B.fak.prototype={
$0(){return D.dq_},
$S:z+16}
B.fal.prototype={
$0(){return D.dve},
$S:z+31}
B.fan.prototype={
$0(){return D.dyC},
$S:z+32}
B.eRD.prototype={
$2(d,e){return new B.adI($.bC8()[e],new B.eRC(e,this.a),null)},
$S:z+33}
B.eRC.prototype={
$0(){var w=this.a,v=F.aBT.h(0,$.bC8()[w].a)
$.aqp=v==null?"music":v
C.a5(this.b,!1).ce(C.ej(new B.eRA(w),!1,null,x.H))},
$S:0}
B.eRA.prototype={
$1(d){return $.bC8()[this.a].e.$0()},
$S:41}
B.eRE.prototype={
$2(d,e){return new B.acC(D.auN[e],new B.eRB(this.a,e),null)},
$S:z+34}
B.eRB.prototype={
$0(){return this.a.d.$1(D.auN[this.b])},
$S:0}
B.eRj.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eRi.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eRh.prototype={
$1(d){var w=this
return new C.e2(new B.eRg(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eRg.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.f8N,A.at,D.ff2,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aV(12,12)
m=new C.aV(12,12)
m=C.a([new C.bE(1,A.bi,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),r[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Title",d,G.CS,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d),A.ab,new C.bE(2,A.bi,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),q[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.CS,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dbg[l]
j=new C.aV(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.az(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aE(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eRe(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.eZO,d,d,d,d,d,d,d,d,d),A.ao,new C.co(A.aQ,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a6(d,44,C.cB(n,d,d,d,d,A.aQ,!1),d),A.az],w))}v.push(C.bJ(A.zf,new B.eRf(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bn(!0,new C.cU(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A3.AE,d,d,A.ah,!0),d),!0,!1,A.ag,!0,!0),d)},
$S:107}
B.eRe.prototype={
$0(){var w=this
return w.a.$1(new B.eRd(w.b,w.c,w.d))},
$S:0}
B.eRd.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eRf.prototype={
$0(){var w=this,v=w.a
v.m(new B.eRc(v,w.b,w.c,w.d))
C.a5(w.e,!1).N(null)},
$S:0}
B.eRc.prototype={
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
B.eRr.prototype={
$0(){var w=this.a
return w.m(new B.eRq(w))},
$S:0}
B.eRq.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eRs.prototype={
$0(){return B.qE(this.b,this.a.f,"scene")},
$S:0}
B.eRt.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYw().x
w===$&&C.c()
return C.bZ(v,new C.o(v,v,v,v,v,new C.bR(D.aTY,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:316}
B.eRu.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f1(A.A,C.c6(new C.h3(C.a([u.gtD(),u.gYw()],x.dS)),new B.eRp(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:247}
B.eRp.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtD().x
r===$&&C.c()
w=r<0.9?1:1-B.bp5(r,0.9,0.98)
v=s.gYw().x
v===$&&C.c()
u=A.dA.av(0,v)
switch(s.gavk().a){case 0:s=s.bw2(t.b,r,u,t.c)
break
case 1:s=s.bMc(t.b,r,u,t.c)
break
case 2:s=s.cwx(t.b,r,u,t.c)
break
case 3:s=s.byZ(t.b,r,u,t.c)
break
case 4:s=s.bCa(t.b,r,u,t.c)
break
case 5:s=s.bBo(t.b,r,u,t.c)
break
default:s=null}return C.db(s,w)},
$S:201}
B.eRv.prototype={
$2(d,e){var w=C.atP(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cEM(u,A.bF,v,3.5)
u=this.a
w=u.gtD().x
w===$&&C.c()
return C.a9_(C.kS(null,null,null,1,0,new B.eRo(u),A.k.D(w,0,1)),v)},
$S:1821}
B.eRo.prototype={
$1(d){var w=this.a
w.gtD().sp(0,d)
if(w.as)w.m(new B.eRk(w))},
$S:6}
B.eRk.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eRw.prototype={
$0(){var w=this.a
w.gtD().sp(0,0)
w.aeP()},
$S:0}
B.eRx.prototype={
$1(d){var w=this.a
w.m(new B.eRn(w,d))
if(w.as)w.aeP()},
$S:6}
B.eRn.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eRy.prototype={
$0(){var w=this.a
w.m(new B.eRm(w,this.b))
w.gtD().sp(0,0)
if(w.as)w.aeP()},
$S:0}
B.eRm.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eRz.prototype={
$0(){var w=this.a
return w.m(new B.eRl(w,this.b))},
$S:0}
B.eRl.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eRa.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1822}
B.eRb.prototype={
$1(d){return d.b},
$S:1823}
B.ddN.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.ddO.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.ddK.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.ddL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddP.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.ddQ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.ddR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddS.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.ddT.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.ddU.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.ddV.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.ddW.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.ddX.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.egJ.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.egy.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.egA.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+44}
B.egB.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+45}
B.egE.prototype={
$1(d){var w=D.mm.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
B.egF.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.B(new C.e6(new C.cQ(new C.a2(q,new B.egG(d),p.k("a2<1>")),new B.egH(r),p.k("cQ<1,qx?>")),o),o.k("H.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.egG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.egH.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.egC.prototype={
$1(d){return D.mm.h(0,d.b).c===D.wi},
$S:z+49}
B.egD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eh8.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uO(0,u)
w.aGx(A.o.an(v,1000))},
$S:8}
B.egI.prototype={
$0(){},
$S:0}
B.egu.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ad())
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
B.egL.prototype={
$1(d){var w=null,v=this.a.b
return C.bn(!0,C.v(C.a([A.P,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.mm.h(0,v).b,D.mm.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fpN,w,C.d(D.mm.h(0,v).a,w,w,w,w,w,w,A.hm,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.alJ,w,w,w,w,new B.egK(d),!1,w,w,w,w,w,w,w,D.fhL,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
B.egK.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.egN.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e0U],x.p)
for(w=0;w<6;++w){v=D.av5[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bMg,u,u,u,u,new B.egM(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.lk,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hm,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.bsE,u,u,A.ah,!0),u),!0,!1,A.ag,!0,!0)},
$S:29}
B.egM.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.egx.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,A.dd,w,w,!0,w,w,new B.egv(d),w,w),C.bK(!1,A.CW,w,w,!0,w,w,new B.egw(d),w,w)],x.p),w,w,F.mO,D.ffd,w,w,w,w,D.fi2,w)},
$S:19}
B.egv.prototype={
$0(){C.a5(this.a,!1).N(!1)
return null},
$S:0}
B.egw.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
return w.m(new B.eh5(w))},
$S:0}
B.eh5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eh7.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.m6(new B.egX(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b2A:t
v=C.a([C.b3(u,t,t,new B.bf4(w,v,new B.egY(r),new B.egZ(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e_(C.c6(w,new B.eh_(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bDP())
return C.aE(A.c5,C.jr(new C.an(A.W,t,A.b_,A.q,v,t),A.q,t),A.y,!1,t,t,t,t,t,t,t,t,new B.eh0(r),t,r.gccj(),t,new B.eh1(r),new B.eh2(r),new B.eh3(r),t,t,t,t,t,t,t,t,t,t,new B.eh4(r),t,t,t,!1,A.a8)},
$S:35}
B.egX.prototype={
$0(){return this.a.aaA(this.b)},
$S:0}
B.eh4.prototype={
$1(d){return this.a.cuj(d.b)},
$S:50}
B.eh2.prototype={
$1(d){return this.a.cck(d.b)},
$S:43}
B.eh3.prototype={
$1(d){return this.a.ccl(d.b)},
$S:18}
B.eh1.prototype={
$1(d){return this.a.aZs()},
$S:37}
B.eh0.prototype={
$1(d){return this.a.abf(d.b)},
$S:291}
B.egY.prototype={
$0(){return this.a.z},
$S:647}
B.egZ.prototype={
$0(){return this.a.Q},
$S:715}
B.eh_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bI4()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=C.a([D.fcK,A.d0],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.eYz,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h3,q,q,q)},
$S:58}
B.egz.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A5.Iq,w,w,w),A.bz,C.d(g,w,w,w,w,w,w,F.SM,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1825}
B.egT.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).m3()},
$S:0}
B.egU.prototype={
$0(){var w=this.a
return w.m(new B.egS(w))},
$S:0}
B.egS.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.egV.prototype={
$0(){var w=this.a
return w.m(new B.egR(w))},
$S:0}
B.egR.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.egW.prototype={
$0(){var w=this.a
return w.m(new B.egQ(w))},
$S:0}
B.egQ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.egP.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mm.gdL(D.mm),w=w.gah(w);w.C();){v=w.gU(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.cpg(p[r]))
return new C.C(I.aff,C.v(C.a([new C.C(S.agS,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.egO.prototype={
$0(){return this.a.c2H(this.b)},
$S:0}
B.ddJ.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.er,A.cd)
u.eO()
return u},
$S:336}
B.esz.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.esx(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.esy())},
$S:8}
B.esx.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.esy.prototype={
$0(){},
$S:0}
B.esa.prototype={
$0(){},
$S:0}
B.es9.prototype={
$0(){},
$S:0}
B.esj.prototype={
$0(){return B.qE(this.b,this.a.d,"spark-painter")},
$S:0}
B.esl.prototype={
$1(d){return this.a.aWO(0,d.b)},
$S:43}
B.esp.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aQ_(u)
v.c5I(u)
return null},
$S:18}
B.esk.prototype={
$1(d){return this.a.aWN()},
$S:37}
B.esq.prototype={
$1(d){return this.a.aWO(0,d.b)},
$S:22}
B.esr.prototype={
$1(d){return this.a.aWN()},
$S:50}
B.ess.prototype={
$0(){var w=this.a
return w.m(new B.esi(w,this.b))},
$S:0}
B.esi.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.est.prototype={
$0(){var w=this.a
return w.m(new B.esh(w))},
$S:0}
B.esh.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.esu.prototype={
$0(){var w=this.a
return w.m(new B.esg(w,this.b))},
$S:0}
B.esg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.esv.prototype={
$1(d){var w=this.a
return w.m(new B.esf(w,d))},
$S:6}
B.esf.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.esw.prototype={
$0(){var w=this.a
return w.m(new B.ese(w))},
$S:0}
B.ese.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.esm.prototype={
$0(){var w=this.a
return w.m(new B.esd(w))},
$S:0}
B.esd.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.esn.prototype={
$0(){var w=this.a
return w.m(new B.esc(w))},
$S:0}
B.esc.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eso.prototype={
$0(){var w=this.a
return w.m(new B.esb(w,this.b))},
$S:0}
B.esb.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.ez8.prototype={
$0(){return B.qE(this.b,this.a.d,"title")},
$S:0}
B.ez9.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIg().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bXo(v[t],t,s,q,u))
return new C.C(A.fy,C.c_(A.fM,w,A.ru,0,0),null)},
$S:685}
B.eza.prototype={
$1(d){return this.a.m(new B.ez7())},
$S:2}
B.ez7.prototype={
$0(){},
$S:0}
B.ezb.prototype={
$0(){var w=this.a
w.m(new B.ez6(w,this.b))
w=w.gIg()
w.im(0,0)
w.cG(0)},
$S:0}
B.ez6.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.ezc.prototype={
$0(){var w=this.a
return w.m(new B.ez5(w,this.b))},
$S:0}
B.ez5.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ezd.prototype={
$0(){var w=this.a
return w.m(new B.ez4(w))},
$S:0}
B.ez4.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eze.prototype={
$0(){var w=this.a
return w.m(new B.ez3(w,this.b))},
$S:0}
B.ez3.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ezf.prototype={
$0(){var w=this.a.gIg()
w.im(0,0)
w.cG(0)},
$S:0}
B.ezg.prototype={
$1(d){var w=this.a
return w.m(new B.ez2(w,d))},
$S:6}
B.ez2.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.edm.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.edn.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.gala()*2.2},
$S:z+13}
B.eda.prototype={
$0(){return B.qE(this.b,this.a.d,"orbits")},
$S:0}
B.edb.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gacr()
v=q.w
u=q.as
t=q.at
s=u==null?A.a1K:q.cfW(u,q.gaUa())
return new C.es(C.aE(A.c5,C.b3(r,r,r,new B.bjq(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,new B.ed7(q),new B.ed8(q),new B.ed9(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:185}
B.ed8.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:43}
B.ed9.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ed7.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.ZS(u,v.gaUa(),v.Q,v.b_X(),C.a([],x.g)))
C.jK()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.edc.prototype={
$1(d){var w=this.a
return w.m(new B.ed6(w,d))},
$S:6}
B.ed6.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ede.prototype={
$1(d){var w=this.a
return w.m(new B.ed5(w,d))},
$S:6}
B.ed5.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.edf.prototype={
$1(d){var w=this.a
return w.m(new B.ed4(w,d))},
$S:6}
B.ed4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.edg.prototype={
$0(){var w=this.a
return w.m(new B.ed3(w))},
$S:0}
B.ed3.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.edh.prototype={
$0(){var w=this.a
return w.m(new B.ed2(w))},
$S:0}
B.ed2.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.edi.prototype={
$0(){var w=this.a
return w.m(new B.ed1(w))},
$S:0}
B.ed1.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.edj.prototype={
$0(){var w=this.a
return w.m(w.gcru())},
$S:0}
B.edk.prototype={
$0(){var w=this.a
return w.m(w.gbE2())},
$S:0}
B.edl.prototype={
$0(){var w=this.a
return w.m(new B.ed0(w))},
$S:0}
B.ed0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.apS(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hf())}},
$S:0}
B.edd.prototype={
$0(){var w=this.a
return w.m(A.d.grg(w.e))},
$S:0}
B.eyA.prototype={
$1(d){return this.a.fN$-d.b>6000},
$S:717}
B.eyB.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.eyz(d),C.T(w).k("a2<1>")).gM(0)>=3},
$S:717}
B.eyz.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eyp.prototype={
$0(){return B.qE(this.b,this.a.d,"swarm")},
$S:0}
B.eyq.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.bqQ(v.e,v.f,v.ax,v.at,v.ay,v.fN$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.eym(v),new B.eyn(v),new B.eyo(v),w,w,w,w,w,w,w,w,new B.eye(v),new B.eyf(v),new B.eyg(v),w,w,w,!1,A.a8),v.d)},
$S:185}
B.eyn.prototype={
$1(d){return this.a.ay=d.b},
$S:43}
B.eyo.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eym.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eyf.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fN$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.la("flute",7,500,0.3)},
$S:22}
B.eyg.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eye.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eyr.prototype={
$0(){var w=this.a
return w.m(new B.eyl(w,this.b))},
$S:0}
B.eyl.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eys.prototype={
$0(){var w=this.a
return w.m(new B.eyk(w,this.b))},
$S:0}
B.eyk.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eyt.prototype={
$0(){var w=this.a
return w.m(new B.eyj(w))},
$S:0}
B.eyj.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eyu.prototype={
$1(d){var w=this.a
return w.m(new B.eyi(w,d))},
$S:6}
B.eyi.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eyv.prototype={
$1(d){var w=this.a
return w.m(new B.eyh(w,d))},
$S:6}
B.eyh.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eyw.prototype={
$1(d){var w=this.a
return w.m(new B.eyd(w,d))},
$S:6}
B.eyd.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eyx.prototype={
$1(d){var w=this.a
return w.m(new B.eyc(w,d))},
$S:6}
B.eyc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eyy.prototype={
$1(d){var w=this.a
return w.m(new B.eyb(w,d))},
$S:6}
B.eyb.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dDb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dDa(w,d))},
$S:128}
B.dDa.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.O(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:A.k.O(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.V(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jq(v==null?A.vC:v)
v=v.gah(v)
while(v.C()){u=v.gU(v)
t.n(0,C.t(u.a),A.k.O(C.f8(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dDc.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dDd.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Yx(w)>0},
$S:z+14}
B.dD1.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ayo()},
$S:0}
B.dD4.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eE(w,F.ny,new C.C(A.bB,new C.a6(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.jg,w,w,w),A.S,C.D(C.ib(!0,w,w,A.y,U.aMh,new B.dD3(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d_,w,new C.b7(v,A.Y),w)},
$S:47}
B.dD3.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dD2(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b5:A.dq,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j3
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aK("\u2605",n)+A.a.aK("\u2606",3-n),s,s,s,s,s,s,D.f1d,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.ba,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:73}
B.dD2.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.dD8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gabw()
o=C.b3(q,q,q,new B.b9_(p.d,w,v,p.gc2O(),q),o)
v=p.bV5("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHF()
t=p.as>=p.gHF()?A.bc:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.atm("GOAL",""+w+" / "+u,t),p.atm("STARS",A.a.aK("\u2605",s)+A.a.aK("\u2606",3-s),A.aM)],r),A.m,q,A.hK,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lZ)
if(p.Q&&!p.y)s.push(D.aTG)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.bc:A.cr).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bc:A.cr,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ao,C.d("You blasted "+p.as+" dots. The goal was "+p.gHF()+".",q,q,q,q,q,q,A.hz,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aK("\u2605",t==null?1:t),q,q,q,q,q,q,D.eSR,q,q,q))}u.push(A.az)
t=C.a([new B.fg(A.mg,"Try again",new B.dD5(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.j8,"Next level",new B.dD6(p),A.bc,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.V7,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c5,new C.an(A.W,q,A.b_,A.q,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dD7(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dD7.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fN$
E.dF(180,"",200,1,0.4,"sine")
C.jd()},
$S:22}
B.dD5.prototype={
$0(){var w=this.a
return w.m(w.gb2A())},
$S:0}
B.dD6.prototype={
$0(){var w=this.a
return w.aWP(w.r+1)},
$S:0}
B.dD9.prototype={
$0(){var w=this.a
return w.m(w.gb2A())},
$S:0}
B.cIM.prototype={
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
$S:718}
B.e8Q.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcKj()?this.a.cnJ(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.e9e.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.e93.prototype={
$0(){var w=this.a
return w.m(new B.e8V(w))},
$S:0}
B.e8V.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e94.prototype={
$0(){return B.qE(this.b,this.a.d,"marble-music")},
$S:0}
B.e95.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.bfZ(v.e,v.f,v.at,v.ax,v.fN$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e90(v),new B.e91(v),new B.e92(v),w,w,w,w,w,w,w,w,w,w,new B.e8U(v),w,w,w,!1,A.a8),v.d)},
$S:185}
B.e8U.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Zg(w)
u.e.push(new B.Fb(w,w,v,u.aNJ(v)))
if(u.ay)B.la(u.z,v+12,700,0.5)}if(u.x==="erase")u.aQf(d.b)},
$S:50}
B.e91.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:43}
B.e92.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aQf(d.b)},
$S:18}
B.e90.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Zg(t.ae(0,w).eD(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fb(w,t,v,u.aNJ(v)))
if(u.ay)B.la(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.e96.prototype={
$0(){var w=this.a
return w.m(new B.e9_(w,this.b))},
$S:0}
B.e9_.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e97.prototype={
$0(){var w=this.a
return w.m(new B.e8Z(w,this.b))},
$S:0}
B.e8Z.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e98.prototype={
$0(){var w=this.a
return w.m(new B.e8Y(w,this.b))},
$S:0}
B.e8Y.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e99.prototype={
$1(d){var w=this.a
return w.m(new B.e8X(w,d))},
$S:6}
B.e8X.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e9a.prototype={
$0(){var w=this.a
return w.m(new B.e8W(w))},
$S:0}
B.e8W.prototype={
$0(){return this.a.awY("stairs")},
$S:0}
B.e9b.prototype={
$0(){var w=this.a
return w.m(new B.e8T(w))},
$S:0}
B.e8T.prototype={
$0(){return this.a.awY("pinball")},
$S:0}
B.e9c.prototype={
$0(){var w=this.a
return w.m(new B.e8S(w))},
$S:0}
B.e8S.prototype={
$0(){return this.a.awY("random")},
$S:0}
B.e9d.prototype={
$0(){var w=this.a
return w.m(new B.e8R(w))},
$S:0}
B.e8R.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ecK.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ecL.prototype={
$0(){var w=this.b,v=new B.acn(this.a.a,this.c)
v.c=w.fN$
return w.e.push(v)},
$S:0}
B.ecS.prototype={
$0(){var w=this.a
return w.m(new B.ecR(w))},
$S:0}
B.ecR.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ecT.prototype={
$0(){return B.qE(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ecU.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aP4()}w=u.w
return new C.es(C.aE(A.c5,C.b3(v,v,v,new B.bjr(u.e,u.gaWR(),6,u.gchY(),u.gco9(),u.fN$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ecQ(u),v,v,v,!1,A.a8),u.d)},
$S:185}
B.ecQ.prototype={
$1(d){return this.a.c2Q(d.b)},
$S:50}
B.ecV.prototype={
$1(d){var w=this.a
return w.m(new B.ecP(w,d))},
$S:6}
B.ecP.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ecW.prototype={
$0(){var w=this.a
return w.m(new B.ecO(w,this.b))},
$S:0}
B.ecO.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ecX.prototype={
$0(){var w=this.a
return w.m(new B.ecN(w,this.b))},
$S:0}
B.ecN.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ecY.prototype={
$0(){var w=this.a
return w.m(w.gbI0())},
$S:0}
B.ecZ.prototype={
$0(){var w=this.a
return w.m(new B.ecM(w))},
$S:0}
B.ecM.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.acn(v.aB(6),v.aj()))},
$S:0}
B.ed_.prototype={
$0(){var w=this.a
return w.m(A.d.grg(w.e))},
$S:0}
B.foS.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:133}
B.ece.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ecd(w,d))},
$S:128}
B.ecd.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.x.v(0,w)},
$S:0}
B.ec0.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:133}
B.ebV.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b7T(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ebW.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ec_.prototype={
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
p=D.vB.h(0,v[u].a).a
o=w.ahZ(u)
v=D.vB.h(0,v[t].a).a
n=w.ahZ(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vF("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaWX()&&w.x.J(0,w.d)){B.vF("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a3(m).k("cl.E"))
B.vC("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.ebZ.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cz<1>"),r=this.b,q=s.k("a2<H.E>"),p=C.B(new C.a2(new C.cz(t,s),new B.ebX(r),q),q.k("H.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.V(s,s)
t.bH(0,new B.ebY(r,v))
t.a8(0)
t.v(0,v)
A.d.cz(u.e,r)
u.r=null},
$S:0}
B.ebX.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.F(d,100)===w},
$S:34}
B.ebY.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:133}
B.ec8.prototype={
$1(d){return""+d.b+" "+D.vB.h(0,d.a).c.toLowerCase()},
$S:406}
B.ec9.prototype={
$0(){var w=this.a
return w.m(new B.ec7(w))},
$S:0}
B.ec7.prototype={
$0(){var w=this.a;++w.d
w.avp(0)},
$S:0}
B.eca.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c5,C.b3(w,w,w,new B.bgG(v.e,v.f,v.r,v.gcyB(),w),A.f_),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.ec3(v),new B.ec4(v),new B.ec5(v,e),w,w,w,w,w,w,w,w,w,w,new B.ec6(v),w,w,w,!1,A.a8)},
$S:35}
B.ec6.prototype={
$1(d){return this.a.c3c(d.b)},
$S:50}
B.ec4.prototype={
$1(d){var w=this.a
return w.w=w.aWY(d.b)},
$S:43}
B.ec5.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ec1(w,v,d,this.b))},
$S:18}
B.ec1.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ec3.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ecb.prototype={
$0(){var w=this.a
return w.m(new B.ec2(w,this.b))},
$S:0}
B.ec2.prototype={
$0(){var w=this.a
w.d=this.b
w.avp(0)},
$S:0}
B.ecc.prototype={
$0(){return this.a.c36(0,this.b.a)},
$S:0}
B.dlR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eD(0,Math.max(h.gcm(),1))
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
$S:133}
B.dLy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dLx(w,d))},
$S:128}
B.dLx.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dLn.prototype={
$0(){var w,v,u=J.e1(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.atz[w.aB(4)]
return A.d.fU(u)},
$S:23}
B.dLm.prototype={
$1(d){return B.fSu(d)==="*"},
$S:3}
B.dLo.prototype={
$1(d){return d!==this.a},
$S:3}
B.dLl.prototype={
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
break A}r=p.ga85()[r]+" codes for "+C.t(D.BR.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aZZ()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.BR.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vF("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dLw.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dq:e,u=C.m(8),t=f?C.I(A.b5,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b5:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mW,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1829}
B.dLr.prototype={
$1(d){var w=D.deY.h(0,d)
return w==null?A.c:w},
$S:719}
B.dLs.prototype={
$0(){var w=this.a
return w.m(new B.dLq(w,this.b))},
$S:0}
B.dLq.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.auH()},
$S:0}
B.dLt.prototype={
$0(){var w=this.a
return w.m(new B.dLp(w))},
$S:0}
B.dLp.prototype={
$0(){var w=this.a;++w.e
w.auH()},
$S:0}
B.dLu.prototype={
$0(){return this.a.aWW(this.b)},
$S:0}
B.dLv.prototype={
$0(){return this.a.aWW(this.b)},
$S:0}
B.dOn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOm(w,d))},
$S:128}
B.dOm.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dOa.prototype={
$0(){},
$S:0}
B.dO9.prototype={
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
B.dOb.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dOf.prototype={
$1(d){var w=this.a
return w.m(new B.dOe(w,d))},
$S:6}
B.dOe.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dOg.prototype={
$1(d){var w=this.a
return w.m(new B.dOd(w,d))},
$S:6}
B.dOd.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dOh.prototype={
$1(d){var w=this.a
return w.m(new B.dOc(w,d))},
$S:6}
B.dOc.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dOi.prototype={
$0(){return this.a.a9h("drought")},
$S:0}
B.dOj.prototype={
$0(){return this.a.a9h("disease")},
$S:0}
B.dOk.prototype={
$0(){return this.a.a9h("foxes")},
$S:0}
B.dOl.prototype={
$0(){return this.a.a9h("rabbits")},
$S:0}
B.d1g.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eT()
k.dI(A.o.O(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.km(new C.eo(e,l,l,A.cO,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ch,new C.jm(1),l,l,l,l,A.cd,l)
n.eO()
n.a6(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1831}
B.d1i.prototype={
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
$S:1832}
B.d1h.prototype={
$3(d,e,f){var w=null,v=C.ih(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ch,w,A.er,A.cd)
v.eO()
v.a6(this.a,new C.u(f,this.b.b+2))},
$S:1833}
B.bEc.prototype={
$2(d,e){return d+e.a*e.b},
$S:1834}
B.fjP.prototype={
$2(d,e){return e.a-d.a},
$S:1835}
B.dzm.prototype={
$2(d,e){return d+e},
$S:77}
B.dzz.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dzy(v,A.k.D((v.gvC()-w[v.e].guG())/Math.max(w[v.e].guG(),8),-1,1)*0.32,u))},
$S:8}
B.dzy.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dzA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dzx(w,d))},
$S:128}
B.dzx.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.r.v(0,w)},
$S:0}
B.dzn.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dzs.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1836}
B.dzt.prototype={
$0(){var w=this.a
return w.m(new B.dzr(w))},
$S:0}
B.dzr.prototype={
$0(){var w=this.a;++w.e
A.d.hb(w.f,0,5,0)},
$S:0}
B.dzu.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c5,C.b3(w,w,w,new B.b84(v.w,this.b.a,v.f,v.gvC()===v.d[v.e].guG(),w),A.f_),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dzq(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dzq.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cuw(v-1)},
$S:50}
B.dzv.prototype={
$0(){var w=this.a
return w.m(new B.dzp(w,this.b))},
$S:0}
B.dzp.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hb(w.f,0,5,0)},
$S:0}
B.dzw.prototype={
$0(){var w=this.a
return w.m(new B.dzo(w))},
$S:0}
B.dzo.prototype={
$0(){return A.d.hb(this.a.f,0,5,0)},
$S:0}
B.cBj.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bz(C.cu(new C.u(d,s),20,w),A.rd)
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
B.fiQ(v,"1",new C.u(d,s),A.bh,11)}},
$S:1837}
B.dSq.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dSp(w,v))},
$S:8}
B.dSp.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dSr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dSo(w,d))},
$S:128}
B.dSo.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.w.v(0,w)},
$S:0}
B.dSg.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dSk.prototype={
$0(){var w=this.a
return w.m(new B.dSj(w))},
$S:0}
B.dSj.prototype={
$0(){return this.a.r++},
$S:0}
B.dSl.prototype={
$0(){var w=this.a
return w.m(new B.dSi(w,this.b))},
$S:0}
B.dSi.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSm.prototype={
$1(d){var w=this.a
return w.m(new B.dSh(w,d))},
$S:6}
B.dSh.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dSn.prototype={
$1(d){return this.a.c3d(this.b,d)},
$S:6}
B.d91.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bN8(d,e,f,g),m=this.b
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
p.r=A.hE.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.ai(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1838}
B.d92.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fiQ(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1839}
B.dDy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dDx(w,d))},
$S:128}
B.dDx.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dDg.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jC(90-(w-65)):d},
$S:13}
B.dDp.prototype={
$1(d){return this.a.m(new B.dDo())},
$S:2}
B.dDo.prototype={
$0(){},
$S:0}
B.dDq.prototype={
$1(d){return this.a.m(new B.dDn())},
$S:2}
B.dDn.prototype={
$0(){},
$S:0}
B.dDr.prototype={
$0(){var w=this.a
return w.m(new B.dDm(w))},
$S:0}
B.dDm.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aVJ()},
$S:0}
B.dDs.prototype={
$0(){var w=this.a
return w.m(new B.dDl(w))},
$S:0}
B.dDl.prototype={
$0(){return this.a.f=0},
$S:0}
B.dDt.prototype={
$0(){var w=this.a
return w.m(new B.dDk(w))},
$S:0}
B.dDk.prototype={
$0(){return this.a.f=1},
$S:0}
B.dDu.prototype={
$0(){var w=this.a
return w.m(new B.dDj(w,this.b))},
$S:0}
B.dDj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dDv.prototype={
$1(d){var w=this.a
return w.m(new B.dDi(w,d))},
$S:6}
B.dDi.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dDw.prototype={
$1(d){var w=this.a
w.m(new B.dDh(w,d))
if(w.ga8z()&&w.Q.J(0,w.x)){B.vF("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dDh.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bJX.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bK7.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bK2.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bK8.prototype={
$1(d){return this.a.L2(d)&&!d.x},
$S:z+1}
B.bK9.prototype={
$2(d,e){return Math.max(d,this.a.ayS(e))},
$S:z+6}
B.bKb.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new B.bKc(w))},
$S:z+5}
B.bKc.prototype={
$0(){return this.a.a},
$S:114}
B.bKa.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bKd.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new B.bKe(w))},
$S:z+5}
B.bKe.prototype={
$0(){return this.a.a},
$S:114}
B.bJZ.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new B.bK_(w))},
$S:z+5}
B.bK_.prototype={
$0(){return this.a.a},
$S:114}
B.bJY.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bK0.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new B.bK1(w))},
$S:z+5}
B.bK1.prototype={
$0(){return this.a.a},
$S:114}
B.bJW.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bKf.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bK3.prototype={
$1(d){return d!==this.b&&this.a.aES(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bK6.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bK5.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bK4.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFo.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFp.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cij.prototype={
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
$S:197}
B.fAg.prototype={
$1(d){var w
$.X()
w=C.M()
w.r=d.gp(0)
return w},
$S:1840}
B.fAi.prototype={
$2(d,e){var w
$.X()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1841}
B.fAj.prototype={
$5(d,e,f,g,h){return C.bz(new C.aa(d,e,d+f,e+g),new C.aV(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1842}
B.fAh.prototype={
$3(d,e,f){var w
$.X()
w=C.M()
w.sau(new C.a7(A.b1,A.b6,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1843}
B.bF2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bF3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bF1(w))},
$S:0}
B.bF1.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bF4.prototype={
$0(){return C.a([],x.ey)},
$S:1844}
B.bF5.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:367}
B.bF6.prototype={
$0(){var w,v,u
J.bCg(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C5(v))if(B.fSU(v.b))w.aYW(v)
else w.Zw(v)
else{u=w.a.c.bak(v)
w.acE(u==null?"The "+$.q1().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bF0.prototype={
$1(d){return new C.e2(new B.bEZ(this.a,this.b),null)},
$S:20}
B.bEZ.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bF_(this.a,v,e),t=$.q1(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kU,w,w,w),q=C.aH(w,w,w,w,D.bD3,w,w,w,new B.bEV(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bn(!0,new C.C(A.xg,C.v(C.a([r,A.at,D.fqJ,A.S,C.A(C.a([q,C.D(C.kS(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bJC,w,w,w,new B.bEW(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b3,C.bK(!1,D.f5c,w,w,!0,w,w,new B.bEX(u),w,w),C.bK(!1,A.zf,w,w,!0,w,w,new B.bEY(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:89}
B.bF_.prototype={
$1(d){var w=this.a
w.m(new B.bET(this.b,d))
this.c.$1(new B.bEU())
w.a.toString},
$S:6}
B.bET.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bEU.prototype={
$0(){},
$S:0}
B.bEV.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bEW.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bEX.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bEY.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.bFl.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fK()
w=this.a
if(w.c!=null)w.acE("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.acE("\u26a0 Overloaded! The "+$.q1().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zl(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.acE("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFm.prototype={
$0(){},
$S:0}
B.bEw.prototype={
$0(){},
$S:0}
B.bFn.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bFk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c5,C.b3(p,p,p,new B.ahq(w,v,u,t,s,r==null?A.iR:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFe(o),new B.bFf(o),new B.bFg(o),p,p,p,p,p,p,p,p,p,p,new B.bFh(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b1U)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cw,A.r,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f3w,C.D(C.d(w,p,p,p,p,p,p,D.eWR,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b77,p,u,v,p,p,A.n),p,p,p,p,A.oo,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFi(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aX0(C.A(C.a([D.buB,new B.fg(A.Fs,"Cut wire",new B.bFj(o),A.cr,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.ccS(w),p,p,10,10,p,p))}return C.jr(new C.an(A.W,p,A.b_,A.q,n,p),A.q,p)},
$S:430}
B.bFf.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b4I(s)
if(r!=null){t.m(new B.bFc(t,r,d))
return}w=t.aZC(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bFd(t,w))}},
$S:43}
B.bFc.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bFd.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bFg.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bFa(w,d))
else if(w.w!=null)w.m(new B.bFb(w,d.b.ae(0,w.x)))},
$S:18}
B.bFa.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bFb.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bFe.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b4I(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajc(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.acC()},
$S:37}
B.bFh.prototype={
$1(d){var w=this.a,v=d.b,u=w.aZC(v)
if(u!=null){w.m(new B.bF8(w,u))
if(D.lL.ag(0,u.b))w.cnc(u)
w.a.toString
return}w.m(new B.bF9(w,w.czo(v)))},
$S:50}
B.bF8.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bF9.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bFi.prototype={
$0(){var w=this.a
return w.m(new B.bF7(w))},
$S:0}
B.bF7.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFj.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.acC()},
$S:0}
B.bEx.prototype={
$0(){return this.a.bm7(this.b)},
$S:0}
B.bEQ.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eRw,w,w,w),C.D(C.kS(this.b.d,w,w,g,h,new B.bES(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1845}
B.bES.prototype={
$1(d){var w=this.a
w.m(new B.bER(this.b,d))
w.a.toString},
$S:6}
B.bER.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bED.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.acC()},
$S:0}
B.bEE.prototype={
$0(){var w=this.a
return w.m(new B.bEC(w))},
$S:0}
B.bEC.prototype={
$0(){return this.a.d=null},
$S:0}
B.bEF.prototype={
$0(){this.a.m(new B.bEB(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bEB.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bEI.prototype={
$0(){return this.a.aYW(this.b)},
$S:0}
B.bEJ.prototype={
$0(){return this.a.Zw(this.b)},
$S:0}
B.bEK.prototype={
$0(){return this.a.a0a(this.b)},
$S:0}
B.bEL.prototype={
$0(){var w=this.a
w.m(new B.bEA(this.b,this.c))
w.a.toString},
$S:0}
B.bEA.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bEM.prototype={
$0(){var w=this.a
w.m(new B.bEz(this.b,this.c))
w.a.toString},
$S:0}
B.bEz.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bEN.prototype={
$0(){var w=this.a
w.m(new B.bEy(this.b,this.c))
w.a.toString},
$S:0}
B.bEy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bEO.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEP.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEG.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEH.prototype={
$1(d){return this.a.f=d},
$S:6}
B.f9V.prototype={
$1(d){return d.aEw("bulb")},
$S:z+2}
B.f9W.prototype={
$1(d){return d.pr(0,"switch")&&d.aEw("bulb")},
$S:z+2}
B.f9X.prototype={
$1(d){return A.d.b8(d.a,new B.f9I())},
$S:z+2}
B.f9I.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.f9Y.prototype={
$1(d){return d.pr(0,"resistor")&&A.d.b8(d.a,new B.f9H())},
$S:z+2}
B.f9H.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.f9Z.prototype={
$1(d){return!d.pr(0,"battery")&&d.aEw("bulb")},
$S:z+2}
B.f9M.prototype={
$1(d){return A.d.b8(d.a,new B.f9G())},
$S:z+2}
B.f9G.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f9N.prototype={
$1(d){return A.d.b8(d.a,new B.f9F())},
$S:z+2}
B.f9F.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f9O.prototype={
$1(d){return A.d.b8(d.a,new B.f9E())},
$S:z+2}
B.f9E.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.f9P.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f9C())&&A.d.b8(w,new B.f9D())&&d.pr(0,"buck")},
$S:z+2}
B.f9C.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f9D.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.f9Q.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f9A())&&A.d.b8(w,new B.f9B())},
$S:z+2}
B.f9A.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.f9B.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f9R.prototype={
$1(d){return A.d.b8(d.a,new B.f9z())},
$S:z+2}
B.f9z.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dOv.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dOE.prototype={
$1(d){var w=this.a.d
return w.aES(d)&&w.C5(d)},
$S:z+1}
B.dOF.prototype={
$1(d){return d.x},
$S:z+1}
B.dOG.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dOH.prototype={
$0(){},
$S:0}
B.dOu.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fjN,A.at,D.f58,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Pb[v]
t=A.c.j(0.06)
s=new C.aV(14,14)
r=new C.az(A.bF,1,A.r,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.ks,q,q,q,q,q,q,q,q,q),A.bz,new C.x(u.b,q,D.eXz,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cG,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dOt(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eE(q,F.ny,new C.C(A.bU,new C.a6(340,q,C.cB(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d_,q,new C.b7(p,A.Y),q)},
$S:47}
B.dOt.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new B.dOs(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dOs.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bfp()},
$S:0}
B.dOq.prototype={
$1(d){return new B.Uw(this.a.d,null)},
$S:z+67}
B.dOr.prototype={
$0(){},
$S:0}
B.dOD.prototype={
$1(d){return new C.e2(new B.dOC(this.a),null)},
$S:20}
B.dOC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agC(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bc:A.aW
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fhg,A.b3,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.bv(C.m(4),C.mf(A.bF,m,m,5,m,w.a/11,new C.mA(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.f8a)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.SD,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.IC,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dOA(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aV(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.ay:A.c
u.push(C.aE(m,C.p(m,new C.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a6N,m,m,m,m,m,m,m,m,m),A.aw,new C.bE(1,A.bi,new C.x(r.a,m,new C.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.oo,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dOB(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A3.AE,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:89}
B.dOA.prototype={
$0(){var w=this.a
w.m(new B.dOy(w))
this.b.$1(new B.dOz())
w.Es()},
$S:0}
B.dOy.prototype={
$0(){var w=this.a
$.agC()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dOz.prototype={
$0(){},
$S:0}
B.dOB.prototype={
$0(){var w=this.a
w.m(new B.dOw(w,this.b))
this.c.$1(new B.dOx())
w.Es()},
$S:0}
B.dOw.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dOx.prototype={
$0(){},
$S:0}
B.dOJ.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.dOK.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m3("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).ce(C.ej(new B.dOI(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dOI.prototype={
$1(d){C.lg("construction")
return Al.huL()},
$S:z+68}
B.dOL.prototype={
$0(){return B.hgX(this.a,"ELECTRONICS LAB",this.b,A.aW)},
$S:0}
B.dOM.prototype={
$0(){var w=this.a
return w.m(w.d.gcQf())},
$S:0}
B.dON.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grg(v))
w.Es()},
$S:0}
B.cyR.prototype={
$2(d,e){var w=null,v=this.a.gavq().x
v===$&&C.c()
return C.b3(w,w,w,new B.b7c(v,w),A.au)},
$S:67}
B.cyQ.prototype={
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
B.fEQ.prototype={
$3(d,e,f){return new B.TN(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fER.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ig(A.A,g,null,new C.bf(C.cI(A.cq,e,null),new C.bm(0.85,1,w),w.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.dKr.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.dKq.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bUW(o):q.by1(o,p),m=x.p
p=C.a([C.q4(new C.n6(n,new C.cw(p,x.aC)),A.po,C.rA(),A.bb,A.bb,new B.dKo())],m)
n=t.d
if(n){w=A.k.F(q.gR0(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.aw],m)
if(w)m.push(D.bun)
else m.push(A.b3)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.bc:A.aA,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.aw)
p.push(C.ao(s,C.av(C.dg(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.eu,new C.o(A.w,s,s,u,s,s,A.n),A.mS,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uc)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JB,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vR)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JB,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dKp(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bv(r,new C.an(A.W,s,A.b_,A.q,p,s),A.aq)},
$S:293}
B.dKo.prototype={
$2(d,e){var w=x.Y
return new C.cX(e,!1,C.ig(A.A,d,null,new C.bf(e,new C.bm(0.92,1,w),w.k("bf<bH.T>"))),null)},
$S:377}
B.dKp.prototype={
$0(){var w=this.a
return w.m(new B.dKn(w))},
$S:0}
B.dKn.prototype={
$0(){return this.a.e=null},
$S:0}
B.dKm.prototype={
$0(){var w=this.a
return w.m(new B.dKl(w,this.b))},
$S:0}
B.dKl.prototype={
$0(){return this.a.e=A.d.cJ(F.jU,this.b)},
$S:0}
B.dKk.prototype={
$0(){var w=this.a
return w.m(new B.dKj(w))},
$S:0}
B.dKj.prototype={
$0(){return this.a.e=0},
$S:0}
B.dKf.prototype={
$0(){var w=this.a
return w.m(new B.dKe(w))},
$S:0}
B.dKe.prototype={
$0(){return this.a.e=null},
$S:0}
B.dKi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fpe,A.aw,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f2r,p,p,p),1),C.d(A.a.aT(A.o.u(C.dh(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.q3,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l4,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bt8(w.gR0(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b5,A.r,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9F,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dKh(w),p,p,p,p,p,p,!1,A.a8),A.ea,C.p(p,p,A.f,p,p,A.a9L,p,12,p,p,p,p,p,12),A.ea,C.p(p,p,A.f,p,p,D.aYl,p,12,p,p,p,p,p,12),A.aw,C.D(C.d(F.jU[o].a,p,1,A.a2,p,p,p,A.a6E,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bY(0,new C.C(D.brg,C.p(p,C.bv(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.adr(r,w.gR0(),p),A.f_),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.d82,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b5,A.r,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.jr,w.ato(F.jU[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.l6,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bv(n,C.p(p,C.v(C.a([m,C.D(new C.an(A.W,p,A.b_,A.q,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KF,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:293}
B.dKh.prototype={
$0(){var w=this.a
return w.m(new B.dKg(w))},
$S:0}
B.dKg.prototype={
$0(){return this.a.e=null},
$S:0}
B.e4p.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e4o(w,d))},
$S:128}
B.e4o.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"best"))
t=t==null?null:A.k.O(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:A.k.O(v)
if(v==null)v=0
w.d=v
w.f=B.fT_(v)},
$S:0}
B.e4q.prototype={
$0(){},
$S:0}
B.e4f.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fT_(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.e4g.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvb().r){C.jK()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vF("click",s.c+s.d,60,0.4)
if(B.hh5(r.gvb(),q).b.a===r.gvb().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vC("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Ba("bell",D.ane,700,0.45)
for(q=r.gvb().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.F(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e4j.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c5,C.b3(s,s,s,new B.bf9(r.gvb(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e4h(r),s,s,s,!1,A.a8),C.ao(s,C.e_(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,L.aNQ,s,s,s),C.d(""+u.a+"/"+r.gvb().c.a+" \u2605   mirrors "+w.a+"/"+r.gvb().r,s,s,s,s,s,s,S.a6m,s,s,s)],t),A.m,s,A.hK,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fe7("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bc,C.a([new B.fg(A.j8,"Next level",new B.e4i(r),A.bc,s)],t)))
return new C.an(A.W,s,A.b_,A.q,w,s)},
$S:62}
B.e4h.prototype={
$1(d){return this.a.c3z(d.b)},
$S:50}
B.e4i.prototype={
$0(){var w=this.a
return w.acI(w.d+1)},
$S:0}
B.e4k.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grg(v))},
$S:0}
B.e4l.prototype={
$0(){var w=this.a
return w.acI(w.d+1)},
$S:0}
B.e4m.prototype={
$0(){var w=this.a
return w.acI(w.d-1)},
$S:0}
B.e4n.prototype={
$0(){return this.a.acI(this.b)},
$S:0}
B.de5.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:720}
B.de8.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ae(0,q)
v=t.ae(0,p)
$.X()
u=C.M()
u.r=(f?A.he:A.aL).gp(0)
u.c=7
u.d=A.bO
r.bA(w,v,u)
w=t.ae(0,q)
v=t.ae(0,p)
u=C.M()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bA(w,v,u)},
$S:1847}
B.de6.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:416}
B.de7.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:416}
B.e4I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e4H(w,d))},
$S:128}
B.e4H.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e4J.prototype={
$0(){},
$S:0}
B.e4t.prototype={
$1(d){return d===0},
$S:121}
B.e4C.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,L.a6y,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cr:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,S.a6m,s,s,s)],v),A.m,s,A.hK,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dq:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b5,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.boA,w,s),C.D(C.A(C.a([C.D(new C.C(A.bR,C.v(C.a([t,A.ao,C.d(q?"TARGET":"TARGET: "+r.gcuz(),s,s,s,s,s,s,D.aOD,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bR,C.v(C.a([C.D(C.b3(s,s,s,new B.bfo(r.f,s),A.f_),1),A.ao,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aOD,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fe7("Light Mixer","Match each colour with red, green and blue light."+q,A.b7,C.a([new B.fg(A.iO,"Start",new B.e4z(r),A.bc,s)],v)))}if(r.z==="result")w.push(B.fe7(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.j8,"Next colour",new B.e4A(r),A.bc,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fe7("Finished! "+q,u,A.bc,C.a([new B.fg(A.mg,"Play again",new B.e4B(r),A.bc,s)],v)))}return new C.an(A.W,s,A.aa,A.q,w,s)},
$S:62}
B.e4z.prototype={
$0(){var w=this.a
return w.m(new B.e4v(w))},
$S:0}
B.e4v.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avu()},
$S:0}
B.e4A.prototype={
$0(){var w=this.a
return w.m(w.gc3x())},
$S:0}
B.e4B.prototype={
$0(){var w=this.a
return w.m(new B.e4u(w))},
$S:0}
B.e4u.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avu()},
$S:0}
B.e4D.prototype={
$1(d){var w=this.a
return w.m(new B.e4y(w,d))},
$S:6}
B.e4y.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e4E.prototype={
$1(d){var w=this.a
return w.m(new B.e4x(w,d))},
$S:6}
B.e4x.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e4F.prototype={
$1(d){var w=this.a
return w.m(new B.e4w(w,d))},
$S:6}
B.e4w.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e4G.prototype={
$0(){var w=this.a
return w.m(w.gc3y())},
$S:0}
B.faC.prototype={
$0(){return D.dU9},
$S:z+70}
B.faD.prototype={
$0(){return D.dro},
$S:z+71}
B.faE.prototype={
$0(){return D.dnX},
$S:z+72}
B.faF.prototype={
$0(){return D.dqP},
$S:z+73}
B.faG.prototype={
$0(){return D.dvK},
$S:z+74}
B.faH.prototype={
$0(){return D.dPT},
$S:z+75}
B.faI.prototype={
$0(){return D.dS4},
$S:z+76}
B.faJ.prototype={
$0(){return D.dv3},
$S:z+77}
B.ccX.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.ccY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hkw(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aV(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ad(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.q,C.a([new C.cK(m,-6,-6,m,m,m,new C.x(r.c,m,K.SC,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lo,m,m,C.v(C.a([new C.x(r.a,m,D.f14,m,m,m,m,m,m,m,m,m),A.d0,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a7(A.ax,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ccW(d,r),m,m,m,m,m,m,!1,A.a8))}return C.c_(A.bD,j,A.bt,14,14)},
$S:161}
B.ccW.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new B.ccV(this.b),!1,null,x.H))},
$S:0}
B.ccV.prototype={
$1(d){return this.a.f.$0()},
$S:41}
B.eDB.prototype={
$0(){var w=this.a
return w.w=w.d[w.b20(w.f)]},
$S:0}
B.eDx.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eDw.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.c3)
w.w=""},
$S:0}
B.eDz.prototype={
$0(){var w=this.a
return w.m(new B.eDy(w,this.b))},
$S:0}
B.eDy.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
B.eDA.prototype={
$1(d){return this.a.aXq(0)},
$S:2}
B.dQJ.prototype={
$0(){return B.Ba("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dQK.prototype={
$0(){},
$S:0}
B.dQE.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dQG.prototype={
$0(){return this.a.aXs(this.b)},
$S:0}
B.dQH.prototype={
$0(){var w=this.a
return w.m(new B.dQF(w))},
$S:0}
B.dQF.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dQI.prototype={
$0(){var w=this.a
return w.aXs(w.d)},
$S:0}
B.dBZ.prototype={
$2(d,e){return d+e},
$S:85}
B.dC_.prototype={
$0(){},
$S:0}
B.dBU.prototype={
$2(d,e){return d+e},
$S:85}
B.dBX.prototype={
$0(){var w=this.a
return w.m(new B.dBW(w,this.b))},
$S:0}
B.dBW.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dBY.prototype={
$0(){var w=this.a
return w.m(new B.dBV(w))},
$S:0}
B.dBV.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dO_.prototype={
$0(){return B.qE(this.b,this.a.d,"drawing")},
$S:0}
B.dO0.prototype={
$1(d){var w=this.a
return w.m(new B.dNZ(w,d))},
$S:43}
B.dNZ.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGB(u,v,t))},
$S:0}
B.dO1.prototype={
$1(d){var w=this.a
return w.m(new B.dNY(w,d))},
$S:18}
B.dNY.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dO2.prototype={
$1(d){var w=this.a
return w.m(new B.dNX(w,d))},
$S:22}
B.dNX.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGB(u,v,t))},
$S:0}
B.dO3.prototype={
$0(){var w=this.a
return w.m(new B.dNW(w,this.b))},
$S:0}
B.dNW.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dO4.prototype={
$1(d){var w=this.a
return w.m(new B.dNV(w,d))},
$S:6}
B.dNV.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dO5.prototype={
$0(){var w=this.a
return w.m(new B.dNU(w))},
$S:0}
B.dNU.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dO6.prototype={
$0(){var w=this.a
return w.m(new B.dNT(w))},
$S:0}
B.dNT.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dO7.prototype={
$0(){var w=this.a
return w.m(A.d.grg(w.e))},
$S:0}
B.dO8.prototype={
$0(){var w=this.a
return w.m(new B.dNS(w))},
$S:0}
B.dNS.prototype={
$0(){var w=this.a
w.x=D.au3[A.o.F(A.d.cJ(D.au3,w.x)+1,4)]},
$S:0}
B.ea4.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
B.ea5.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Ba("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ea3(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Ba("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ea3.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.ea6.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ea2(w))},
$S:11}
B.ea2.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.eaa.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mt(new B.ea8(v,e),w,A.bb,A.po,w,w,new C.bm(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ea9(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:73}
B.ea9.prototype={
$0(){return this.a.c4t(this.b)},
$S:0}
B.ea8.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dl(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fu(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bSf
if(o)v=q.a.r.t(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.bc:A.b5,A.r,1)
if(o){r=C.dl()
r.fu(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fr(A.A,C.d(u[t],p,p,p,p,p,p,D.eZs,p,p,p),p,r,!0)
u=r}else u=D.fiA
return C.fr(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:139}
B.eab.prototype={
$0(){var w=this.a
return w.m(new B.ea7(w,this.b))},
$S:0}
B.ea7.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aqJ()},
$S:0}
B.eac.prototype={
$0(){var w=this.a
return w.m(w.gbGA())},
$S:0}
B.ekB.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.ekC.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ekz.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ekA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.eky(w))},
$S:11}
B.eky.prototype={
$0(){return this.a.f=-1},
$S:0}
B.ekD.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.ekE.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.ekF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aXr()},
$S:11}
B.ekG.prototype={
$0(){return this.a.c4z(this.b)},
$S:0}
B.eyT.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.ez1.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kF,C.A(C.a([v,A.ab,new C.dm(1,A.ci,C.f1(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1849}
B.eyY.prototype={
$1(d){return this.a.m(new B.eyX())},
$S:2}
B.eyX.prototype={
$0(){},
$S:0}
B.eyZ.prototype={
$0(){var w=this.a
return w.m(new B.eyW(w,this.b))},
$S:0}
B.eyW.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ez_.prototype={
$1(d){var w=this.a
return w.m(new B.eyV(w,d))},
$S:6}
B.eyV.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.ez0.prototype={
$0(){var w=this.a
return w.m(new B.eyU(w))},
$S:0}
B.eyU.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e8K.prototype={
$0(){},
$S:0}
B.e8L.prototype={
$0(){},
$S:0}
B.e8D.prototype={
$0(){var w=this.a
return w.m(new B.e8C(w))},
$S:0}
B.e8C.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7g("hat",0.6)},
$S:0}
B.e8E.prototype={
$0(){var w=this.a
return w.m(new B.e8B(w))},
$S:0}
B.e8B.prototype={
$0(){this.a.y=1.1
B.la("bell",36,200,0.4)},
$S:0}
B.e8F.prototype={
$0(){var w=this.a
return w.m(new B.e8A(w))},
$S:0}
B.e8A.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.la("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
B.e8G.prototype={
$0(){var w=this.a
return w.m(new B.e8z(w,this.b))},
$S:0}
B.e8z.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e8H.prototype={
$1(d){var w=this.a
return w.m(new B.e8y(w,d))},
$S:6}
B.e8y.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e1(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e8I.prototype={
$1(d){var w=this.a
return w.m(new B.e8x(w,d))},
$S:6}
B.e8x.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.e8J.prototype={
$1(d){var w=this.a
return w.m(new B.e8w(w,d))},
$S:6}
B.e8w.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cpK.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.cpL.prototype={
$0(){var w=this.a
return B.hgX(this.b,w.c,w.e,w.d)},
$S:0}
B.fIG.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eS1,v,v,v)
return C.eh(C.a([C.bK(!1,D.f8f,v,v,!0,v,v,new B.fIF(d),v,v)],x.p),v,v,F.mO,w,v,v,v,new C.b7(u,new C.az(s,1,A.r,-1)),t,v)},
$S:19}
B.fIF.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.cpG.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpF.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpM.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpH.prototype={
$0(){var w=this.a
A.d.W(w.fj$,this.b.bd())
if(w.c!=null)this.c.$0()},
$S:0}
B.cpJ.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kQ$.a)/1e6,0,0.04)
w.kQ$=d
w.fN$=A.o.an(v,1000)
w.lj(u)
if(w.c!=null)w.m(new B.cpI())},
$S:8}
B.cpI.prototype={
$0(){},
$S:0}
B.ccT.prototype={
$0(){var w=this
return B.la(w.a,w.b,w.c,w.d)},
$S:1}
B.dTr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTq(w,d))},
$S:z+79}
B.dTq.prototype={
$0(){return this.a.coT(this.b)},
$S:0}
B.dSU.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1850}
B.dSS.prototype={
$0(){return this.a.id=D.a1Q},
$S:0}
B.dST.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a2<1>")
v=C.p3(new C.a2(w,new B.dSR(this.c),v),6,v.k("H.E"))
w=C.B(v,C.a3(v).k("H.E"))
return this.a.id=w},
$S:0}
B.dSR.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dSQ.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.y,w,w,w,w,A.ah)
return C.eh(C.a([C.bK(!1,A.q4,w,w,!0,w,w,new B.dSP(d),w,w)],x.p),w,w,F.mO,v,w,w,w,w,D.fiE,w)},
$S:19}
B.dSP.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.dTc.prototype={
$0(){return B.qE(this.b,this.a.d,"earth")},
$S:0}
B.dTd.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVd()
r=p.z
o=C.a([C.aE(A.c5,C.b3(q,q,q,new B.bdB(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dT0(p),new B.dT1(p),new B.dT2(p),q,q,q,q,q,q,q,new B.dT3(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(A9.aan)
w=this.b
if(w!=null)o.push(C.ao(8,p.c5a(w),q,q,10,10,q,q))
return new C.es(new C.an(A.W,q,A.b_,A.q,o,q),p.d)},
$S:185}
B.dT1.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:261}
B.dT2.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVd()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:212}
B.dT0.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVd()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:641}
B.dT3.prototype={
$1(d){var w=this.a,v=w.c5d(d.b)
if(v!=null)w.m(new B.dSV(w,v))
else w.m(new B.dSW(w))},
$S:50}
B.dSV.prototype={
$0(){return this.a.avY(this.b)},
$S:0}
B.dSW.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dTe.prototype={
$0(){var w=this.a
w.e.bM(0,A.c3)
w.m(new B.dT_(w,this.b))},
$S:0}
B.dT_.prototype={
$0(){var w=this.a
w.id=D.a1Q
w.avY(this.b)},
$S:0}
B.dTi.prototype={
$0(){var w=this.a
return w.m(new B.dTb(w))},
$S:0}
B.dTb.prototype={
$0(){var w=this.a
w.fx=null
w.arU(15,w.y,1)},
$S:0}
B.dTj.prototype={
$0(){var w=this.a
return w.m(new B.dTa(w,this.b))},
$S:0}
B.dTa.prototype={
$0(){var w=this.b.b
return this.a.arU(w.a,w.b,w.c)},
$S:0}
B.dTk.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dT9(w,v))},
$S:0}
B.dT9.prototype={
$0(){var w=this.b.a
return this.a.avY(w[A.cI.aB(w.length)])},
$S:0}
B.dTl.prototype={
$1(d){var w=this.a
return w.m(new B.dT8(w,d))},
$S:6}
B.dT8.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dTm.prototype={
$1(d){var w=this.a
return w.m(new B.dT7(w,d))},
$S:6}
B.dT7.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dTn.prototype={
$1(d){var w=this.a
return w.m(new B.dT6(w,d))},
$S:6}
B.dT6.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dTo.prototype={
$0(){var w=this.a
return w.m(new B.dT5(w))},
$S:0}
B.dT5.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dTp.prototype={
$0(){var w=this.a
return w.m(new B.dT4(w))},
$S:0}
B.dT4.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dTf.prototype={
$0(){var w=this.a
return w.m(new B.dSZ(w))},
$S:0}
B.dSZ.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dTg.prototype={
$0(){var w=this.a
return w.m(new B.dSY(w))},
$S:0}
B.dSY.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dTh.prototype={
$0(){var w=this.a
return w.m(new B.dSX(w))},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dSO.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNg,w,w,w),A.uf,C.d(e,w,2,A.a2,w,w,w,A.SW,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dSN.prototype={
$0(){var w=this.a
return w.m(new B.dSM(w))},
$S:0}
B.dSM.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d9Q.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cT8,w,w),this.a),A.a5,A.ch,w,A.er,A.cd)
v.eO()
return v},
$S:336}
B.d9R.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1851}
B.fav.prototype={
$0(){return D.dtl},
$S:z+81}
B.faw.prototype={
$0(){return D.dRN},
$S:z+82}
B.fax.prototype={
$0(){return D.dtn},
$S:z+83}
B.fay.prototype={
$0(){return D.dnJ},
$S:z+84}
B.faz.prototype={
$0(){return D.dtj},
$S:z+85}
B.faA.prototype={
$0(){return D.dPU},
$S:z+86}
B.faB.prototype={
$0(){return D.dPS},
$S:z+87}
B.ezM.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
B.ezN.prototype={
$0(){var w=this.a
return w.m(new B.ezL(w))},
$S:0}
B.ezL.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaQs()+1,16)},
$S:0}
B.ezO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hkv(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aV(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.beD],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eWr,n,A.L,n,n,n,n,2,n,n),A.d0,new C.x(s.b,n,D.f0s,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.ba,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bp(r,r,r,r),n,new C.a7(A.ax,A.aD,A.x,o,n,n),A.n),n,v,n,n,A.cj,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ezK(d,s),n,n,n,n,n,n,!1,A.a8))}return C.c_(A.fM,k,A.bt,10,10)},
$S:161}
B.ezK.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new B.ezJ(this.b),!1,null,x.H))},
$S:0}
B.ezJ.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.erP.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.es_.prototype={
$0(){return B.qE(this.b,this.a.d,"solar-system")},
$S:0}
B.es0.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c5,C.b3(v,v,v,new B.bpY(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.erX(u),new B.erY(u),v,v,v,v,v,v,v,new B.erZ(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c5f(w),v,v,10,10,v,v))
return new C.es(new C.an(A.W,v,A.b_,A.q,t,v),u.d)},
$S:185}
B.erX.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:261}
B.erY.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ae(0,d.a)},
$S:212}
B.erZ.prototype={
$1(d){var w=this.a,v=w.c5i(d.b)
if(v!=null)w.aXN(v)},
$S:50}
B.es1.prototype={
$0(){var w=this.a
return w.m(new B.erW(w))},
$S:0}
B.erW.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.es2.prototype={
$0(){return this.a.aXN(this.b)},
$S:0}
B.es3.prototype={
$1(d){var w=this.a
return w.m(new B.erV(w,d))},
$S:6}
B.erV.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.es4.prototype={
$1(d){var w=this.a
return w.m(new B.erU(w,d))},
$S:6}
B.erU.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.es5.prototype={
$0(){var w=this.a
return w.m(new B.erT(w))},
$S:0}
B.erT.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.es6.prototype={
$0(){var w=this.a
return w.m(new B.erS(w))},
$S:0}
B.erS.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.es7.prototype={
$0(){var w=this.a
return w.m(new B.erR(w))},
$S:0}
B.erR.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.es8.prototype={
$0(){var w=this.a
return w.m(new B.erQ(w))},
$S:0}
B.erQ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.erO.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:283}
B.erN.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNg,w,w,w),A.uf,C.d(e,w,2,A.a2,w,w,w,A.SW,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.erM.prototype={
$0(){var w=this.a
return w.m(new B.erL(w))},
$S:0}
B.erL.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eTW.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,L.Pj,w,w),this.a),A.a5,A.ch,w,A.er,A.cd)
v.eO()
return v},
$S:336}
B.eTX.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eTY.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dTv.prototype={
$0(){},
$S:0}
B.dTY.prototype={
$1(d){return d!=null},
$S:357}
B.dTK.prototype={
$0(){var w=this.a
return w.m(new B.dTB(w,this.b))},
$S:0}
B.dTB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dTL.prototype={
$0(){var w=this.a
return w.m(new B.dTA(w))},
$S:0}
B.dTA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTM.prototype={
$0(){var w=this.a
return w.m(new B.dTJ(w))},
$S:0}
B.dTJ.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dTQ.prototype={
$0(){var w=this.a
return w.m(new B.dTI(w))},
$S:0}
B.dTI.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dTR.prototype={
$1(d){var w=this.a
return w.m(new B.dTH(w,d))},
$S:6}
B.dTH.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dTS.prototype={
$0(){var w=this.a
return w.m(w.gcs1())},
$S:0}
B.dTT.prototype={
$1(d){var w=this.a
return w.m(new B.dTG(w,d))},
$S:6}
B.dTG.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dTU.prototype={
$1(d){var w=this.a
return w.m(new B.dTF(w,d))},
$S:6}
B.dTF.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dTV.prototype={
$1(d){var w=this.a
return w.m(new B.dTE(w,d))},
$S:6}
B.dTE.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dTW.prototype={
$1(d){var w=this.a
return w.m(new B.dTD(w,d))},
$S:6}
B.dTD.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dTX.prototype={
$0(){var w=this.a
return w.m(new B.dTC(w))},
$S:0}
B.dTC.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dTN.prototype={
$0(){var w=this.a
return w.m(new B.dTz(w))},
$S:0}
B.dTz.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dTO.prototype={
$0(){var w=this.a
return w.m(new B.dTy(w))},
$S:0}
B.dTy.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dTP.prototype={
$0(){var w=this.a
return w.m(new B.dTx(w))},
$S:0}
B.dTx.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dTu.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bY(0,C.bZ(g,new C.o(D.bdg,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.ym[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.ym[q].b)+" m/s\xb2",g,D.f_P,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dq,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(Z.Mu,C.b0(D.ym[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.ym[q].d),g,g,g,C.a([new C.ad(0,A.G,C.b0(D.ym[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.ym[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cK(p,8,g,g,f,g,o,g),new C.cK(n-0.5,54,g,e,g,g,m,g),new C.cK(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cK(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rp,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eTb,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d9(v,new B.dTt()))a1.push(D.b2d)
return new C.an(A.W,g,A.aa,A.q,a1,g)},
$S:62}
B.dTt.prototype={
$1(d){return d==null},
$S:357}
B.dTw.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,A.bb,new C.o(v,v,v,C.m(8),v,new C.a7(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i5,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gc(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.q,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eZd,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:62}
B.dTs.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b8R(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
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
r=r.CW?"  Height now: "+B.Gc(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.q,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bz,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aOT,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:62}
B.ekJ.prototype={
$0(){return B.qE(this.b,this.a.d,"size-compare")},
$S:0}
B.ekK.prototype={
$0(){var w=this.a
return w.m(new B.ekI(w,this.b))},
$S:0}
B.ekI.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ekL.prototype={
$0(){var w=this.a
return w.m(new B.ekH(w,this.b))},
$S:0}
B.ekH.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eS5.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.hs(A.G,Math.max(2,e*0.18))
u.ai(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.sau(new C.bR(P.qc,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a14,null).aw(0,C.bU(d,e)))
u.ai(d,e,w)},
$S:718}
B.dBq.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dBe.prototype={
$1(d){return d.b},
$S:z+60}
B.dBf.prototype={
$0(){return B.qE(this.b,this.a.d,"black-hole")},
$S:0}
B.dBg.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c5,C.b3(q,q,q,new B.b8f(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dBc(p),q,q,q,q,q,q,q,q,q,new B.dBd(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fmt(t)+" Suns"
t=p.adp("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adp("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gc(s))+" km"),p.adp("TIME",A.k.aa(this.b*100,0)+"%"),p.adp("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e6I)
return new C.es(new C.an(A.W,q,A.b_,A.q,r,q),p.d)},
$S:185}
B.dBd.prototype={
$1(d){return this.a.aXO(d.b)},
$S:22}
B.dBc.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aXO(d.b)},
$S:18}
B.dBi.prototype={
$1(d){var w=this.a
return w.m(new B.dBb(w,d))},
$S:6}
B.dBb.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dBj.prototype={
$0(){var w=this.a
return w.m(new B.dBa(w))},
$S:0}
B.dBa.prototype={
$0(){return this.a.r=10},
$S:0}
B.dBk.prototype={
$0(){var w=this.a
return w.m(new B.dB9(w))},
$S:0}
B.dB9.prototype={
$0(){return this.a.r=21},
$S:0}
B.dBl.prototype={
$0(){var w=this.a
return w.m(new B.dB8(w))},
$S:0}
B.dB8.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dBm.prototype={
$0(){var w=this.a
return w.m(new B.dB7(w))},
$S:0}
B.dB7.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dBn.prototype={
$0(){var w=this.a
return w.m(new B.dB6(w))},
$S:0}
B.dB6.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dBo.prototype={
$0(){var w=this.a
return w.m(new B.dB5(w))},
$S:0}
B.dB5.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dBp.prototype={
$0(){var w=this.a
return w.m(new B.dB4(w))},
$S:0}
B.dB4.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dBh.prototype={
$0(){var w=this.a
return w.m(new B.dB3(w))},
$S:0}
B.dB3.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dS2.prototype={
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
$S:1852}
B.dRT.prototype={
$0(){return B.qE(this.b,this.a.d,"galaxy")},
$S:0}
B.dRU.prototype={
$0(){var w=this.a
return w.m(new B.dRS(w,this.b))},
$S:0}
B.dRS.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Z8()},
$S:0}
B.dRV.prototype={
$0(){var w=this.a
return w.m(new B.dRR(w))},
$S:0}
B.dRR.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Z8()}w.crU()},
$S:0}
B.dRW.prototype={
$1(d){var w=this.a
return w.m(new B.dRQ(w,d))},
$S:6}
B.dRQ.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Z8()},
$S:0}
B.dRX.prototype={
$1(d){var w=this.a
return w.m(new B.dRP(w,d))},
$S:6}
B.dRP.prototype={
$0(){var w=this.a
w.r=this.b
w.Z8()},
$S:0}
B.dRY.prototype={
$1(d){var w=this.a
return w.m(new B.dRO(w,d))},
$S:6}
B.dRO.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dRZ.prototype={
$1(d){var w=this.a
return w.m(new B.dRN(w,d))},
$S:6}
B.dRN.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dS_.prototype={
$0(){var w=this.a
return w.m(new B.dRM(w))},
$S:0}
B.dRM.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dS0.prototype={
$0(){var w=this.a
return w.m(new B.dRL(w))},
$S:0}
B.dRL.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dS1.prototype={
$0(){var w=this.a
return w.m(new B.dRK(w))},
$S:0}
B.dRK.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d6Z.prototype={
$6(d,e,f,g,h,i){return g.ae(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1853}
B.ejY.prototype={
$0(){return B.qE(this.b,this.a.d,"seasons-moon")},
$S:0}
B.ejZ.prototype={
$0(){var w=this.a
return w.m(new B.ejX(w))},
$S:0}
B.ejX.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.ek_.prototype={
$0(){var w=this.a
return w.m(new B.ejW(w))},
$S:0}
B.ejW.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.ek0.prototype={
$0(){var w=this.a
return w.m(new B.ejV(w))},
$S:0}
B.ejV.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ek1.prototype={
$0(){var w=this.a
return w.m(new B.ejU(w))},
$S:0}
B.ejU.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ek2.prototype={
$1(d){var w=this.a
return w.m(new B.ejT(w,d))},
$S:6}
B.ejT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ek3.prototype={
$1(d){var w=this.a
return w.m(new B.ejS(w,d))},
$S:6}
B.ejS.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ek4.prototype={
$1(d){var w=this.a
return w.m(new B.ejR(w,d))},
$S:6}
B.ejR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ek5.prototype={
$1(d){var w=this.a
return w.m(new B.ejQ(w,d))},
$S:6}
B.ejQ.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKC.prototype
w.bta=w.q
w=B.aJE.prototype
w.bsa=w.q
w=B.aJF.prototype
w.bsb=w.q
w=B.aJK.prototype
w.bsg=w.q
w=B.aLr.prototype
w.bu5=w.q
w=B.aKA.prototype
w.bt8=w.q
w=B.aKJ.prototype
w.bth=w.q
w=B.aKP.prototype
w.btn=w.q
w=B.aJI.prototype
w.bse=w.q
w=B.aKx.prototype
w.bt5=w.q
w=B.aKM.prototype
w.btk=w.q
w=B.aKv.prototype
w.bt3=w.q
w=B.aKw.prototype
w.bt4=w.q
w=B.aJW.prototype
w.bst=w.q
w=B.aJA.prototype
w.bs6=w.q
w=B.aK3.prototype
w.bsB=w.q
w=B.aw8.prototype
w.bpi=w.q
w=B.aw9.prototype
w.bpj=w.q
w=B.aI6.prototype
w.bqz=w.q
w=B.aJT.prototype
w.bsp=w.q
w=B.aKk.prototype
w.bsT=w.q
w=B.aKl.prototype
w.bsU=w.q
w=B.aJG.prototype
w.bsc=w.q
w=B.aJZ.prototype
w.bsw=w.q
w=B.aKt.prototype
w.bt1=w.q
w=B.aKX.prototype
w.btv=w.q
w=B.aK4.prototype
w.bsD=w.q
w=B.aK5.prototype
w.bsE=w.q
w=B.aK6.prototype
w.bsF=w.q
w=B.aKF.prototype
w.btd=w.q
w=B.aKI.prototype
w.btg=w.q
w=B.aJD.prototype
w.bs9=w.q
w=B.aK1.prototype
w.bsz=w.q
w=B.aKE.prototype
w.btc=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aCN.prototype,"gauQ","c0A",0)
var r
v(r=B.aBc.prototype,"gc8F","c8G",35)
w(r,"gc15","aWh",0)
w(B.aBf.prototype,"gc2z","c2A",0)
u(B.aBw.prototype,"gc2F","c2G",52)
w(r=B.aFM.prototype,"gcrA","crB",0)
w(r,"gcfk","aeP",0)
w(r,"gcd1","cd2",0)
w(r,"gc2E","acp",3)
w(r=B.aCM.prototype,"gbDI","a84",3)
w(r,"gccj","aZs",0)
w(r,"gcg2","aeX",3)
t(r,"gc2I","acq",3)
w(B.aD1.prototype,"gbUD","bUE",0)
w(r=B.aCE.prototype,"gcru","crv",0)
w(r,"gbE2","bE3",0)
w(r=B.aBe.prototype,"gb2A","ayo",0)
v(r,"gc2O","Yx",54)
w(r,"gc2N","acs",3)
v(r=B.aCD.prototype,"gchY","ax8",58)
v(r,"gco9","ayk",15)
w(r,"gbI0","aP4",0)
v(r=B.aCB.prototype,"gcyB","ahZ",15)
t(r,"gc37","avp",0)
w(r,"gcke","ckf",0)
v(r=B.aBI.prototype,"gc38","c39",90)
w(r,"gc3a","c3b",0)
t(r=B.a3p.prototype,"grg","a8",0)
v(r,"gcO6","alN",1)
v(r,"gcKB","L2",1)
w(r,"gcQf","bfp",0)
s(B.ahq.prototype,"gc3f",0,5,null,["$5"],["q0"],64,0,0)
w(r=B.aBJ.prototype,"gc3g","c3h",0)
w(r,"gciJ","afi",3)
w(r,"gc8V","adC",3)
w(r,"gcpH","ago",3)
w(r=B.aCn.prototype,"gc3x","avu",0)
w(r,"gc3y","aX4",0)
w(r=B.aDe.prototype,"gc4u","c4v",0)
t(r,"gc4s","aXq",0)
w(B.aCx.prototype,"gbGA","aqJ",0)
t(B.aCT.prototype,"gc4w","c4x",0)
v(r=B.aBU.prototype,"gc5b","c5c",78)
w(r,"gbLm","bLn",0)
w(r=B.aBV.prototype,"gcs1","cs2",0)
w(r,"gc5g","c5h",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiC,B.Fs,B.uA,B.aQu,B.a27,B.b8i,B.bZ1,B.xG,B.BN,B.nc,B.b90,B.A1,B.bqE,B.pQ,B.qx,B.BR,B.Yl,B.ady,B.a_y,B.C1,B.aav,B.aaM,B.acG,B.Ff,B.bjD,B.P6,B.ZS,B.aaC,B.ab4,B.Fb,B.abT,B.acn,B.rY,B.b7T,B.aQk,B.e7,B.ta,B.a9d,B.aah,B.a3p,B.mp,B.b91,B.fJ,B.lX,B.aUR,B.brY,B.aGB,B.ms,B.a9Y,B.a9Z,B.uN,B.Oo,B.xE,B.On,B.brT,B.OQ,B.adD])
u(C.hS,[B.foB,B.ffq,B.flI,B.flJ,B.foy,B.foz,B.e1r,B.e1K,B.ehI,B.ehf,B.ehg,B.ehh,B.ehi,B.ehj,B.ehk,B.ehl,B.ehm,B.ehd,B.ehe,B.ehc,B.ehD,B.ehE,B.ehF,B.dBv,B.dBx,B.dBA,B.dBL,B.bZ2,B.bZ3,B.f9J,B.f9K,B.f9L,B.f9S,B.f9T,B.f9U,B.dE2,B.dDK,B.dE3,B.dDF,B.dDA,B.dDC,B.dDI,B.dDV,B.dDT,B.dDU,B.dDS,B.dDP,B.dDR,B.eRA,B.eRh,B.eRo,B.eRx,B.eRb,B.ddN,B.ddO,B.ddK,B.ddL,B.ddM,B.ddP,B.ddQ,B.ddR,B.ddS,B.ddT,B.ddU,B.ddV,B.ddW,B.ddX,B.egE,B.egF,B.egG,B.egH,B.egC,B.egD,B.eh8,B.egL,B.egN,B.egx,B.eh4,B.eh2,B.eh3,B.eh1,B.eh0,B.egz,B.esz,B.esx,B.esl,B.esp,B.esk,B.esq,B.esr,B.esv,B.eza,B.ezg,B.edm,B.edn,B.ed8,B.ed9,B.ed7,B.edc,B.ede,B.edf,B.eyA,B.eyB,B.eyz,B.eyn,B.eyo,B.eym,B.eyf,B.eyg,B.eyu,B.eyv,B.eyw,B.eyx,B.eyy,B.dDb,B.dDc,B.dDd,B.dD4,B.dD7,B.cIM,B.e8Q,B.e9e,B.e8U,B.e91,B.e92,B.e90,B.e99,B.ecQ,B.ecV,B.ece,B.ebX,B.ec8,B.ec6,B.ec4,B.ec5,B.ec3,B.dLy,B.dLm,B.dLo,B.dLw,B.dLr,B.dOn,B.dOf,B.dOg,B.dOh,B.d1g,B.d1i,B.d1h,B.dzz,B.dzA,B.dzs,B.dzq,B.cBj,B.dSq,B.dSr,B.dSm,B.dSn,B.d91,B.d92,B.dDy,B.dDg,B.dDp,B.dDq,B.dDv,B.dDw,B.bJX,B.bK7,B.bK2,B.bK8,B.bKa,B.bJY,B.bJW,B.bKf,B.bK3,B.bK6,B.bK5,B.bK4,B.bFo,B.fAg,B.fAj,B.fAh,B.bF5,B.bF0,B.bF_,B.bFn,B.bFf,B.bFg,B.bFe,B.bFh,B.bEQ,B.bES,B.bEO,B.bEP,B.bEG,B.bEH,B.f9V,B.f9W,B.f9X,B.f9I,B.f9Y,B.f9H,B.f9Z,B.f9M,B.f9G,B.f9N,B.f9F,B.f9O,B.f9E,B.f9P,B.f9C,B.f9D,B.f9Q,B.f9A,B.f9B,B.f9R,B.f9z,B.dOE,B.dOF,B.dOu,B.dOq,B.dOD,B.dOI,B.cyQ,B.fEQ,B.fER,B.e4p,B.e4h,B.de5,B.de8,B.e4I,B.e4t,B.e4D,B.e4E,B.e4F,B.ccV,B.eDA,B.dO0,B.dO1,B.dO2,B.dO4,B.ea8,B.eyT,B.ez1,B.eyY,B.ez_,B.e8H,B.e8I,B.e8J,B.fIG,B.cpJ,B.dTr,B.dSR,B.dSQ,B.dT1,B.dT2,B.dT0,B.dT3,B.dTl,B.dTm,B.dTn,B.ezJ,B.erX,B.erY,B.erZ,B.es3,B.es4,B.erO,B.eTX,B.eTY,B.dTY,B.dTR,B.dTT,B.dTU,B.dTV,B.dTW,B.dTt,B.eS5,B.dBq,B.dBe,B.dBd,B.dBc,B.dBi,B.dS2,B.dRW,B.dRX,B.dRY,B.dRZ,B.d6Z,B.ek2,B.ek3,B.ek4,B.ek5])
u(C.kc,[B.foA,B.e1w,B.e1u,B.eho,B.ehB,B.dDB,B.dDY,B.dJw,B.eRD,B.eRE,B.eRg,B.eRt,B.eRu,B.eRp,B.eRv,B.eRa,B.egA,B.egB,B.eh7,B.eh_,B.egP,B.ez9,B.edb,B.eyq,B.dD3,B.dD8,B.e95,B.ecU,B.foS,B.ec0,B.ebY,B.eca,B.dlR,B.bEc,B.fjP,B.dzm,B.dzu,B.bK9,B.bKb,B.bKd,B.bJZ,B.bK0,B.bFp,B.cij,B.fAi,B.bEZ,B.bFl,B.bFk,B.dOC,B.cyR,B.dKq,B.dKo,B.dKi,B.e4j,B.de6,B.de7,B.e4C,B.ccY,B.dBZ,B.dBU,B.eaa,B.dTd,B.dSO,B.d9R,B.ezO,B.es0,B.erN,B.dTu,B.dTw,B.dTs,B.dBg])
u(C.ag,[B.Uw,B.UY,B.To,B.Tt,B.MC,B.aFL,B.UX,B.Vc,B.Vo,B.UU,B.Vj,B.Tr,B.UO,B.UT,B.UR,B.TP,B.U4,B.Tj,B.Ui,B.Ts,B.aho,B.U5,B.avQ,B.TN,B.UB,B.UD,B.Vu,B.Uc,B.Tp,B.U3,B.UP,B.V2,B.Vn,B.UN,B.Uj,B.Vq,B.Vb,B.Uk,B.V3,B.Tn,B.Ug,B.V_])
u(C.ah,[B.bi6,B.aKC,B.aJE,B.aJK,B.aBw,B.aLr,B.aKA,B.aKJ,B.aKP,B.aKx,B.aKM,B.aJI,B.aKv,B.aKw,B.aCB,B.bhB,B.aJW,B.aJA,B.aK3,B.bht,B.aw8,B.bv3,B.aI6,B.aJT,B.aKk,B.aKl,B.aKX,B.aJZ,B.aJG,B.bhC,B.aCx,B.aCT,B.biQ,B.aKt,B.aK4,B.biU,B.aKI,B.aK6,B.aKF,B.aJD,B.aK1,B.aKE])
u(C.j2,[B.e1p,B.e1q,B.e1C,B.e1D,B.e1y,B.e1x,B.e1z,B.e1v,B.e1A,B.e1t,B.e1B,B.e1s,B.e1G,B.e1F,B.e1H,B.e1E,B.e1I,B.e1J,B.e1L,B.ehH,B.ehJ,B.ehK,B.ehq,B.ehp,B.ehn,B.ehw,B.ehx,B.eht,B.ehy,B.ehs,B.ehz,B.ehA,B.ehr,B.ehC,B.ehv,B.ehG,B.ehu,B.dBS,B.dBR,B.dBu,B.dBT,B.dBw,B.dBy,B.dBz,B.dBB,B.dBr,B.dBs,B.dBt,B.dBI,B.dBJ,B.dBK,B.dBH,B.dBM,B.dBG,B.dBN,B.dBF,B.dBO,B.dBE,B.dBP,B.dBD,B.dBQ,B.dBC,B.dDH,B.dDG,B.dDL,B.dDD,B.dDE,B.dDM,B.dDN,B.dDO,B.dDJ,B.dDz,B.dDX,B.dDW,B.dDZ,B.dE_,B.dE0,B.dDQ,B.dE1,B.cJe,B.dJu,B.dJt,B.dJv,B.fa9,B.faa,B.fab,B.fam,B.fao,B.fap,B.faq,B.far,B.fas,B.fat,B.fau,B.fac,B.fad,B.fae,B.faf,B.fag,B.fah,B.fai,B.faj,B.fak,B.fal,B.fan,B.eRC,B.eRB,B.eRj,B.eRi,B.eRe,B.eRd,B.eRf,B.eRc,B.eRr,B.eRq,B.eRs,B.eRk,B.eRw,B.eRn,B.eRy,B.eRm,B.eRz,B.eRl,B.egJ,B.egy,B.egI,B.egu,B.egK,B.egM,B.egv,B.egw,B.eh6,B.eh5,B.egX,B.egY,B.egZ,B.egT,B.egU,B.egS,B.egV,B.egR,B.egW,B.egQ,B.egO,B.ddJ,B.esy,B.esa,B.es9,B.esj,B.ess,B.esi,B.est,B.esh,B.esu,B.esg,B.esf,B.esw,B.ese,B.esm,B.esd,B.esn,B.esc,B.eso,B.esb,B.ez8,B.ez7,B.ezb,B.ez6,B.ezc,B.ez5,B.ezd,B.ez4,B.eze,B.ez3,B.ezf,B.ez2,B.eda,B.ed6,B.ed5,B.ed4,B.edg,B.ed3,B.edh,B.ed2,B.edi,B.ed1,B.edj,B.edk,B.edl,B.ed0,B.edd,B.eyp,B.eye,B.eyr,B.eyl,B.eys,B.eyk,B.eyt,B.eyj,B.eyi,B.eyh,B.eyd,B.eyc,B.eyb,B.dDa,B.dD1,B.dD2,B.dD5,B.dD6,B.dD9,B.e93,B.e8V,B.e94,B.e96,B.e9_,B.e97,B.e8Z,B.e98,B.e8Y,B.e8X,B.e9a,B.e8W,B.e9b,B.e8T,B.e9c,B.e8S,B.e9d,B.e8R,B.ecK,B.ecL,B.ecS,B.ecR,B.ecT,B.ecP,B.ecW,B.ecO,B.ecX,B.ecN,B.ecY,B.ecZ,B.ecM,B.ed_,B.ecd,B.ebV,B.ebW,B.ec_,B.ebZ,B.ec9,B.ec7,B.ec1,B.ecb,B.ec2,B.ecc,B.dLx,B.dLn,B.dLl,B.dLs,B.dLq,B.dLt,B.dLp,B.dLu,B.dLv,B.dOm,B.dOa,B.dO9,B.dOb,B.dOe,B.dOd,B.dOc,B.dOi,B.dOj,B.dOk,B.dOl,B.dzy,B.dzx,B.dzn,B.dzt,B.dzr,B.dzv,B.dzp,B.dzw,B.dzo,B.dSp,B.dSo,B.dSg,B.dSk,B.dSj,B.dSl,B.dSi,B.dSh,B.dDx,B.dDo,B.dDn,B.dDr,B.dDm,B.dDs,B.dDl,B.dDt,B.dDk,B.dDu,B.dDj,B.dDi,B.dDh,B.bKc,B.bKe,B.bK_,B.bK1,B.bF2,B.bF3,B.bF1,B.bF4,B.bF6,B.bET,B.bEU,B.bEV,B.bEW,B.bEX,B.bEY,B.bFm,B.bEw,B.bFc,B.bFd,B.bFa,B.bFb,B.bF8,B.bF9,B.bFi,B.bF7,B.bFj,B.bEx,B.bER,B.bED,B.bEE,B.bEC,B.bEF,B.bEB,B.bEI,B.bEJ,B.bEK,B.bEL,B.bEA,B.bEM,B.bEz,B.bEN,B.bEy,B.dOv,B.dOG,B.dOH,B.dOt,B.dOs,B.dOr,B.dOA,B.dOy,B.dOz,B.dOB,B.dOw,B.dOx,B.dOJ,B.dOK,B.dOL,B.dOM,B.dON,B.dKr,B.dKp,B.dKn,B.dKm,B.dKl,B.dKk,B.dKj,B.dKf,B.dKe,B.dKh,B.dKg,B.e4o,B.e4q,B.e4f,B.e4g,B.e4i,B.e4k,B.e4l,B.e4m,B.e4n,B.e4H,B.e4J,B.e4z,B.e4v,B.e4A,B.e4B,B.e4u,B.e4y,B.e4x,B.e4w,B.e4G,B.faC,B.faD,B.faE,B.faF,B.faG,B.faH,B.faI,B.faJ,B.ccX,B.ccW,B.eDB,B.eDx,B.eDw,B.eDz,B.eDy,B.dQJ,B.dQK,B.dQE,B.dQG,B.dQH,B.dQF,B.dQI,B.dC_,B.dBX,B.dBW,B.dBY,B.dBV,B.dO_,B.dNZ,B.dNY,B.dNX,B.dO3,B.dNW,B.dNV,B.dO5,B.dNU,B.dO6,B.dNT,B.dO7,B.dO8,B.dNS,B.ea4,B.ea5,B.ea3,B.ea6,B.ea2,B.ea9,B.eab,B.ea7,B.eac,B.ekB,B.ekC,B.ekz,B.ekA,B.eky,B.ekD,B.ekE,B.ekF,B.ekG,B.eyX,B.eyZ,B.eyW,B.eyV,B.ez0,B.eyU,B.e8K,B.e8L,B.e8D,B.e8C,B.e8E,B.e8B,B.e8F,B.e8A,B.e8G,B.e8z,B.e8y,B.e8x,B.e8w,B.cpK,B.cpL,B.fIF,B.cpG,B.cpF,B.cpM,B.cpH,B.cpI,B.ccT,B.dTq,B.dSU,B.dSS,B.dST,B.dSP,B.dTc,B.dSV,B.dSW,B.dTe,B.dT_,B.dTi,B.dTb,B.dTj,B.dTa,B.dTk,B.dT9,B.dT8,B.dT7,B.dT6,B.dTo,B.dT5,B.dTp,B.dT4,B.dTf,B.dSZ,B.dTg,B.dSY,B.dTh,B.dSX,B.dSN,B.dSM,B.d9Q,B.fav,B.faw,B.fax,B.fay,B.faz,B.faA,B.faB,B.ezM,B.ezN,B.ezL,B.ezK,B.erP,B.es_,B.es1,B.erW,B.es2,B.erV,B.erU,B.es5,B.erT,B.es6,B.erS,B.es7,B.erR,B.es8,B.erQ,B.erM,B.erL,B.eTW,B.dTv,B.dTK,B.dTB,B.dTL,B.dTA,B.dTM,B.dTJ,B.dTQ,B.dTI,B.dTH,B.dTS,B.dTG,B.dTF,B.dTE,B.dTD,B.dTX,B.dTC,B.dTN,B.dTz,B.dTO,B.dTy,B.dTP,B.dTx,B.ekJ,B.ekK,B.ekI,B.ekL,B.ekH,B.dBf,B.dBb,B.dBj,B.dBa,B.dBk,B.dB9,B.dBl,B.dB8,B.dBm,B.dB7,B.dBn,B.dB6,B.dBo,B.dB5,B.dBp,B.dB4,B.dBh,B.dB3,B.dRT,B.dRU,B.dRS,B.dRV,B.dRR,B.dRQ,B.dRP,B.dRO,B.dRN,B.dS_,B.dRM,B.dS0,B.dRL,B.dS1,B.dRK,B.ejY,B.ejZ,B.ejX,B.ek_,B.ejW,B.ek0,B.ejV,B.ek1,B.ejU,B.ejT,B.ejS,B.ejR,B.ejQ])
t(B.bvi,B.aKC)
t(B.aCN,B.bvi)
u(C.mF,[B.bf6,B.b9i,B.bq4,B.b8_,B.boJ,B.boa,B.b8F,B.boc,B.bs7,B.bf4,B.bq_,B.bjq,B.bqQ,B.b9_,B.bfZ,B.bjr,B.bgG,B.bc1,B.b84,B.bdu,B.ahq,B.b7c,B.bt8,B.adr,B.bf9,B.bfo,B.btk,B.bob,B.bjE,B.bdB,B.bpY,B.b8R,B.bpw,B.b8f,B.bdr,B.boM])
t(B.aJF,B.aJE)
t(B.aBc,B.aJF)
t(B.bv1,B.aJK)
t(B.aBf,B.bv1)
u(C.m0,[B.JI,B.a_l,B.ID])
u(C.au,[B.bp6,B.adI,B.acC,B.Pf,B.bpA,B.a7h,B.bbn,B.b52,B.dz,B.eK,B.auf,B.fg,B.EI])
t(B.aFM,B.aLr)
t(B.bf3,C.oB)
t(B.aCM,B.aKA)
t(B.biH,B.aKJ)
t(B.aD1,B.aKP)
t(B.bvh,B.aKx)
t(B.aCE,B.bvh)
t(B.bvp,B.aKM)
t(B.biM,B.bvp)
t(B.bv0,B.aJI)
t(B.aBe,B.bv0)
t(B.bvf,B.aKv)
t(B.bil,B.bvf)
t(B.bvg,B.aKw)
t(B.aCD,B.bvg)
t(B.aBI,B.aJW)
t(B.bhg,B.aJA)
t(B.bhN,B.aK3)
t(B.aw9,B.aw8)
t(B.ahp,B.aw9)
t(B.aBJ,B.bv3)
t(B.b7d,B.aI6)
t(B.bhz,B.aJT)
t(B.bv8,B.aKk)
t(B.bi8,B.bv8)
t(B.bv9,B.aKl)
t(B.aCn,B.bv9)
t(B.bvq,B.aKX)
t(B.aDe,B.bvq)
t(B.bv4,B.aJZ)
t(B.bhI,B.bv4)
t(B.bv_,B.aJG)
t(B.bhl,B.bv_)
t(B.bve,B.aKt)
t(B.bij,B.bve)
t(B.aK5,B.aK4)
t(B.aBU,B.aK5)
t(B.bvm,B.aKI)
t(B.biG,B.bvm)
t(B.bv6,B.aK6)
t(B.aBV,B.bv6)
t(B.bvk,B.aKF)
t(B.biD,B.bvk)
t(B.buZ,B.aJD)
t(B.bhk,B.buZ)
t(B.bv5,B.aK1)
t(B.bhL,B.bv5)
t(B.bvj,B.aKE)
t(B.biC,B.bvj)
w(B.aKC,C.c8)
w(B.bvi,B.ms)
w(B.aJE,C.c8)
w(B.aJF,B.ms)
w(B.aJK,C.c8)
w(B.bv1,B.ms)
w(B.aLr,C.eR)
w(B.aKA,C.c8)
w(B.aKJ,C.c8)
w(B.aKP,C.c8)
w(B.aJI,C.c8)
w(B.bv0,B.ms)
w(B.aKx,C.c8)
w(B.bvh,B.ms)
w(B.aKM,C.c8)
w(B.bvp,B.ms)
w(B.aKv,C.c8)
w(B.bvf,B.ms)
w(B.aKw,C.c8)
w(B.bvg,B.ms)
w(B.aJW,C.c8)
w(B.aJA,C.c8)
w(B.aK3,C.c8)
w(B.aw8,C.c8)
w(B.aw9,B.ms)
w(B.aI6,C.c8)
v(B.bv3,C.ev)
w(B.aJT,C.c8)
w(B.aKk,C.c8)
w(B.bv8,B.ms)
w(B.aKl,C.c8)
w(B.bv9,B.ms)
w(B.aJG,C.c8)
w(B.bv_,B.ms)
w(B.aJZ,C.c8)
w(B.bv4,B.ms)
w(B.aKt,C.c8)
w(B.bve,B.ms)
w(B.aKX,C.c8)
w(B.bvq,B.ms)
w(B.aK4,C.c8)
w(B.aK5,B.ms)
w(B.aK6,C.c8)
w(B.bv6,B.ms)
w(B.aKF,C.c8)
w(B.bvk,B.ms)
w(B.aKI,C.c8)
w(B.bvm,B.ms)
w(B.aJD,C.c8)
w(B.buZ,B.ms)
w(B.aK1,C.c8)
w(B.bv5,B.ms)
w(B.aKE,C.c8)
w(B.bvj,B.ms)})()
C.jR(b.typeUniverse,JSON.parse('{"Uw":{"ag":[],"r":[]},"bi6":{"ah":["Uw"]},"UY":{"ag":[],"r":[]},"aCN":{"ah":["UY"]},"bf6":{"aB":[]},"To":{"ag":[],"r":[]},"aBc":{"ah":["To"]},"Tt":{"ag":[],"r":[]},"aBf":{"ah":["Tt"]},"b9i":{"aB":[]},"adI":{"au":[],"r":[]},"acC":{"au":[],"r":[]},"aFL":{"ag":[],"r":[]},"MC":{"ag":[],"r":[]},"aBw":{"ah":["MC"]},"bp6":{"au":[],"r":[]},"Pf":{"au":[],"r":[]},"bq4":{"aB":[]},"bpA":{"au":[],"r":[]},"b8_":{"aB":[]},"aFM":{"ah":["aFL"]},"boJ":{"aB":[]},"boa":{"aB":[]},"b8F":{"aB":[]},"boc":{"aB":[]},"bs7":{"aB":[]},"UX":{"ag":[],"r":[]},"bf3":{"aB":[]},"aCM":{"ah":["UX"]},"bf4":{"aB":[]},"Vc":{"ag":[],"r":[]},"Vo":{"ag":[],"r":[]},"biH":{"ah":["Vc"]},"bq_":{"aB":[]},"aD1":{"ah":["Vo"]},"UU":{"ag":[],"r":[]},"Vj":{"ag":[],"r":[]},"Tr":{"ag":[],"r":[]},"aCE":{"ah":["UU"]},"bjq":{"aB":[]},"biM":{"ah":["Vj"]},"bqQ":{"aB":[]},"aBe":{"ah":["Tr"]},"b9_":{"aB":[]},"UO":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"bil":{"ah":["UO"]},"bfZ":{"aB":[]},"aCD":{"ah":["UT"]},"bjr":{"aB":[]},"UR":{"ag":[],"r":[]},"TP":{"ag":[],"r":[]},"U4":{"ag":[],"r":[]},"aCB":{"ah":["UR"]},"bgG":{"aB":[]},"bhB":{"ah":["TP"]},"aBI":{"ah":["U4"]},"bc1":{"aB":[]},"Tj":{"ag":[],"r":[]},"Ui":{"ag":[],"r":[]},"Ts":{"ag":[],"r":[]},"bhg":{"ah":["Tj"]},"b84":{"aB":[]},"bhN":{"ah":["Ui"]},"bdu":{"aB":[]},"bht":{"ah":["Ts"]},"ahq":{"aB":[]},"aho":{"ag":[],"r":[]},"ahp":{"ah":["aho"]},"U5":{"ag":[],"r":[]},"avQ":{"ag":[],"r":[]},"aBJ":{"ah":["U5"],"ev":[]},"b7d":{"ah":["avQ"]},"b7c":{"aB":[]},"TN":{"ag":[],"r":[]},"bhz":{"ah":["TN"]},"bt8":{"aB":[]},"adr":{"aB":[]},"UB":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"bi8":{"ah":["UB"]},"bf9":{"aB":[]},"aCn":{"ah":["UD"]},"bfo":{"aB":[]},"a7h":{"au":[],"r":[]},"Vu":{"ag":[],"r":[]},"Uc":{"ag":[],"r":[]},"Tp":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"V2":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"UN":{"ag":[],"r":[]},"aDe":{"ah":["Vu"]},"btk":{"aB":[]},"bhI":{"ah":["Uc"]},"bob":{"aB":[]},"bhl":{"ah":["Tp"]},"bhC":{"ah":["U3"]},"bjE":{"aB":[]},"aCx":{"ah":["UP"]},"aCT":{"ah":["V2"]},"biQ":{"ah":["Vn"]},"bij":{"ah":["UN"]},"bbn":{"au":[],"r":[]},"b52":{"au":[],"r":[]},"dz":{"au":[],"r":[]},"eK":{"au":[],"r":[]},"auf":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"EI":{"au":[],"r":[]},"Uj":{"ag":[],"r":[]},"aBU":{"ah":["Uj"]},"bdB":{"aB":[]},"Vq":{"ag":[],"r":[]},"biU":{"ah":["Vq"]},"Vb":{"ag":[],"r":[]},"Uk":{"ag":[],"r":[]},"V3":{"ag":[],"r":[]},"biG":{"ah":["Vb"]},"bpY":{"aB":[]},"aBV":{"ah":["Uk"]},"b8R":{"aB":[]},"biD":{"ah":["V3"]},"bpw":{"aB":[]},"Tn":{"ag":[],"r":[]},"Ug":{"ag":[],"r":[]},"V_":{"ag":[],"r":[]},"bhk":{"ah":["Tn"]},"b8f":{"aB":[]},"bhL":{"ah":["Ug"]},"bdr":{"aB":[]},"biC":{"ah":["V_"]},"boM":{"aB":[]}}'))
C.Pn(b.typeUniverse,JSON.parse('{"ms":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("mA<w?>"),e8:w("d2"),G:w("w"),l:w("bq<n,n>"),J:w("bq<n,O>"),I:w("bq<n,G>"),R:w("eV<n>"),Z:w("a0"),M:w("P<d8>"),f5:w("P<a23>"),gh:w("P<aQk>"),h:w("P<a27>"),V:w("P<ad>"),O:w("P<w>"),ey:w("P<S>"),dh:w("P<RX>"),aJ:w("P<ay<aC>>"),w:w("P<a0>"),Q:w("P<ak<w>>"),B:w("P<ak<RX>>"),gO:w("P<ak<ak<O>>>"),bj:w("P<ak<n>>"),b:w("P<ak<O>>"),fA:w("P<ak<G?>>"),D:w("P<a4<n,aC>>"),g:w("P<u>"),bz:w("P<ta>"),ds:w("P<a7E>"),v:w("P<hm>"),U:w("P<+(u,O)>"),ev:w("P<+(u,G)>"),K:w("P<+(n,n)>"),fT:w("P<+(O,r)>"),E:w("P<+(G,n)>"),u:w("P<+(G,G)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,O,O,G)>"),o:w("P<+(n,G,n,G)>"),d:w("P<+(n,n,O,O,a4<n,O>)>"),_:w("P<uA>"),q:w("P<cP>"),fQ:w("P<a9d>"),s:w("P<n>"),cF:w("P<ar>"),X:w("P<vU>"),F:w("P<a9Y>"),p:w("P<r>"),bL:w("P<aah>"),fH:w("P<ld>"),aq:w("P<b7T>"),a_:w("P<aav>"),cS:w("P<aaC>"),cB:w("P<nc>"),ba:w("P<aaM>"),d9:w("P<OQ>"),bi:w("P<ab4>"),eW:w("P<BR>"),fY:w("P<Yl>"),aX:w("P<Fb>"),ea:w("P<abT>"),gB:w("P<acn>"),ed:w("P<P6>"),g4:w("P<bjD>"),aS:w("P<ZS>"),ac:w("P<acG>"),cd:w("P<C1>"),fr:w("P<ady>"),e4:w("P<a_y>"),r:w("P<adD>"),au:w("P<aGB>"),f7:w("P<R>"),n:w("P<O>"),t:w("P<G>"),dS:w("P<aB?>"),fs:w("P<ta?>"),d4:w("P<n?>"),bN:w("P<G?>"),gJ:w("cp<ahp>"),A:w("cp<ah<ag>>"),bF:w("ak<w>"),gl:w("ak<S>"),ew:w("ak<aC>"),j:w("ak<@>"),bW:w("ak<G>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("J<e7,n>"),dv:w("J<n,n>"),fR:w("J<+(O,r),r>"),m:w("iy"),gA:w("yK"),gD:w("vu"),P:w("cn"),C:w("aC"),W:w("ta"),dV:w("e7"),g7:w("Bx"),N:w("n"),bO:w("ar"),k:w("km"),Y:w("bm<O>"),cL:w("a9Z"),gj:w("cw<n>"),aC:w("cw<G?>"),dg:w("e6<qx>"),e3:w("b8i"),a2:w("BN"),f3:w("qx"),es:w("Ff"),gV:w("mT"),y:w("R"),i:w("O"),z:w("@"),S:w("G"),L:w("ak<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pJ?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aU7=new C.d8(0,0.85)
D.foe=new C.x("Tap once to start the chain",null,L.SP,null,null,null,null,null,null,null,null,null)
D.aTG=new C.bI(D.aU7,null,null,D.foe,null)
D.aTY=new C.d8(0,0.1)
D.aV1=new B.aQu(0,0,0)
D.Jw=new B.aQu(0,0.5,0)
D.aVy=new C.az(A.bc,1,A.r,-1)
D.aX1=new C.aY(0,1/0,0,290)
D.aX8=new C.aY(16,1/0,16,1/0)
D.aYl=new C.o(A.bn,null,null,null,null,null,A.a6)
D.eR7=new C.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqy=new C.x("\u26a1",null,D.eR7,null,null,null,null,null,null,null,null,null)
D.b1L=new C.cr(A.A,null,null,D.fqy,null)
D.aOd=new C.F(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgO=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aOd,null,A.L,null,null,null,null,null,null,null)
D.e0D=new C.C(A.nI,D.fgO,null)
D.b1U=new C.cr(A.A,null,null,D.e0D,null)
D.fkn=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kt,null,A.L,null,null,null,null,null,null,null)
D.e0H=new C.C(A.nI,D.fkn,null)
D.b2d=new C.cr(A.A,null,null,D.e0H,null)
D.f0O=new C.F(!0,A.j3,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp_=new C.x("Draw anywhere",null,D.f0O,null,null,null,null,null,null,null,null,null)
D.b2h=new C.cr(A.A,null,null,D.fp_,null)
D.f7k=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aOd,null,A.L,null,null,null,null,null,null,null)
D.e1m=new C.C(A.EY,D.f7k,null)
D.b2A=new C.cr(A.A,null,null,D.e1m,null)
D.aaG=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b53=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b5S=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.V5=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b5X=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b61=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b66=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.V7=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b77=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b7c=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b7t=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b8v=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.abV=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b8X=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b92=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.A3=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b9H=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.ach=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bai=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bap=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.acs=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.VL=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.baU=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.acz=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.E4=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.acJ=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.VX=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bcG=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bcI=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bcM=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bcV=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.ada=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bdg=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Ed=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bei=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.beq=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bet=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.beD=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.beG=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.beN=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uL=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.adY=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bfM=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bgu=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bgW=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bhi=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.aem=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.blq=new C.b9(11e6)
D.bmr=new C.Q(0,0,8,6)
D.afi=new C.Q(0,0,9,0)
D.bmZ=new C.Q(10,0,10,4)
D.bn3=new C.Q(10,10,10,6)
D.bna=new C.Q(10,34,10,26)
D.bni=new C.Q(10,6,10,2)
D.Xn=new C.Q(10,6,10,4)
D.bnk=new C.Q(10,8,0,10)
D.bnX=new C.Q(12,8,8,8)
D.bo1=new C.Q(14,0,14,22)
D.bo3=new C.Q(14,0,14,30)
D.afH=new C.Q(14,0,14,6)
D.afO=new C.Q(14,10,8,12)
D.boA=new C.Q(14,8,14,6)
D.bp1=new C.Q(16,4,16,28)
D.bpb=new C.Q(16,8,16,12)
D.brg=new C.Q(26,12,26,58)
D.bs2=new C.Q(4,4,6,2)
D.bs4=new C.Q(4,4,8,2)
D.bsE=new C.Q(8,14,8,12)
D.bsL=new C.Q(8,40,8,30)
D.bsQ=new C.Q(8,6,16,0)
D.bsR=new C.Q(8,6,8,8)
D.bt9=new C.Q(0,0,1.5,0)
D.aUO=new C.Go(26,"saturation")
D.btr=new C.ys(A.cU,D.aUO,null,A.aaE)
D.f6r=new C.x("REACTION LAB",null,W.aOO,null,null,null,null,A.a2,null,1,null,null)
D.btx=new C.bE(1,A.bi,D.f6r,null)
D.eYI=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9t=new C.x("CORE PROTOCOL",null,D.eYI,null,null,null,null,null,null,null,null,null)
D.btJ=new C.bE(1,A.bi,D.f9t,null)
D.faa=new C.x("\ud83d\udce2 NGMY Ads",null,A.q3,null,null,null,null,A.eC,null,1,null,null)
D.bun=new C.bE(1,A.bi,D.faa,null)
D.f59=new C.x("Wire selected",null,A.hm,null,null,null,null,null,null,null,null,null)
D.buB=new C.bE(1,A.bi,D.f59,null)
D.aiV=new C.a0(62712,"MaterialIcons",!1)
D.byP=new C.a0(62878,"MaterialIcons",!1)
D.ZG=new C.a0(62908,"MaterialIcons",!1)
D.byS=new C.a0(62918,"MaterialIcons",!1)
D.byT=new C.a0(62931,"MaterialIcons",!1)
D.byW=new C.a0(62951,"MaterialIcons",!1)
D.bzb=new C.a0(63064,"MaterialIcons",!1)
D.bzd=new C.a0(63070,"MaterialIcons",!1)
D.xG=new C.a0(63128,"MaterialIcons",!1)
D.FH=new C.a0(63726,"MaterialIcons",!1)
D.bAw=new C.a0(983122,"MaterialIcons",!1)
D.bAK=new C.a0(983247,"MaterialIcons",!1)
D.bAW=new C.a0(983415,"MaterialIcons",!1)
D.bAX=new C.a0(983417,"MaterialIcons",!1)
D.bAY=new C.a0(983442,"MaterialIcons",!1)
D.bAZ=new C.a0(983443,"MaterialIcons",!1)
D.akg=new C.a0(983467,"MaterialIcons",!1)
D.bB4=new C.a0(983501,"MaterialIcons",!1)
D.bBf=new C.a0(983616,"MaterialIcons",!1)
D.bBg=new C.a0(983624,"MaterialIcons",!1)
D.bBs=new C.a0(983776,"MaterialIcons",!1)
D.bBJ=new C.a0(984561,"MaterialIcons",!1)
D.bCj=new C.ae(A.qP,24,A.aM,null,null,null)
D.bD3=new C.ae(A.MZ,null,A.ad,null,null,null)
D.bDB=new C.ae(A.mf,21,A.ad,null,null,null)
D.bAv=new C.a0(983117,"MaterialIcons",!1)
D.bEW=new C.ae(D.bAv,28,A.c,null,null,null)
D.bFb=new C.ae(A.j9,18,null,null,null,null)
D.bGW=new C.ae(A.e4,21,A.cr,null,null,null)
D.bHa=new C.ae(A.mg,null,A.ad,null,null,null)
D.bHk=new C.ae(A.a_y,21,A.ad,null,null,null)
D.bI9=new C.ae(A.eB,17,A.ad,null,null,null)
D.alF=new C.ae(A.eB,19,null,null,null,null)
D.mk=new C.ae(A.vf,21,A.ad,null,null,null)
D.bJC=new C.ae(A.Mr,null,A.ad,null,null,null)
D.bKL=new C.ae(A.j9,21,A.ad,null,null,null)
D.bLB=new C.ae(A.fa,20,A.ay,null,null,null)
D.bMg=new C.ae(A.dW,null,A.aM,null,null,null)
D.bMB=new C.ae(A.jS,null,A.ay,null,null,null)
D.d66=w([A.dp,A.d7,A.dp],x.O)
D.bPh=new C.a7(A.a3,A.a7,A.x,D.d66,null,null)
D.cM3=w([A.bW,A.bo],x.O)
D.bPp=new C.a7(A.b1,A.b6,A.x,D.cM3,null,null)
D.bPA=new C.a7(A.b1,A.b6,A.x,A.avG,null,null)
D.cMp=w([A.he,A.fg],x.O)
D.bPJ=new C.a7(A.b1,A.b6,A.x,D.cMp,null,null)
D.amG=new C.a7(A.b1,A.b6,A.x,K.a1e,null,null)
D.cJT=w([A.o9,A.i2],x.O)
D.bQm=new C.a7(A.b1,A.b6,A.x,D.cJT,null,null)
D.cLM=w([A.et,A.aA],x.O)
D.amN=new C.a7(A.b1,A.b6,A.x,D.cLM,null,null)
D.d0U=w([A.dL,A.iK,A.bo],x.O)
D.bQC=new C.a7(A.a3,A.a7,A.x,D.d0U,null,null)
D.d1_=w([A.ka,A.cC],x.O)
D.bQW=new C.a7(A.b1,A.b6,A.x,D.d1_,null,null)
D.ciV=w([A.bW,A.dL],x.O)
D.bR4=new C.a7(A.a3,A.a7,A.x,D.ciV,null,null)
D.awj=w([A.et,M.mL],x.O)
D.bRb=new C.a7(A.b1,A.b6,A.x,D.awj,null,null)
D.bRr=new C.a7(A.b1,A.b6,A.x,I.an8,null,null)
D.bb_=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b4r=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cHl=w([D.bb_,D.b4r],x.O)
D.bRE=new C.a7(A.b1,A.b6,A.x,D.cHl,null,null)
D.bSf=new C.a7(A.ax,A.aD,A.x,A.a1b,null,null)
D.bfh=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dbn=w([D.bfh,A.K2],x.O)
D.bSm=new C.a7(A.b1,A.b6,A.x,D.dbn,null,null)
D.cUq=w([A.aA,A.w],x.O)
D.bSr=new C.a7(A.b1,A.b6,A.x,D.cUq,null,null)
D.bSu=new C.a7(A.b1,A.b6,A.x,U.avK,null,null)
D.beK=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bfq=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cvu=w([A.KI,D.beK,D.bfq],x.O)
D.bSD=new C.a7(A.b1,A.b6,A.x,D.cvu,null,null)
D.cje=w([A.dj,A.fv],x.O)
D.bSS=new C.a7(A.b1,A.b6,A.x,D.cje,null,null)
D.bSY=new C.a7(A.ax,A.aD,A.x,A.a1Y,null,null)
D.ana=w([0,2,4,6,7,9,11],x.t)
D.bTy=w([0,4,7],x.t)
D.ane=w([0,4,7,12],x.t)
D.bTz=w([0,4,7,4],x.t)
D.avr=w([A.fY,A.pi],x.O)
D.av1=w([A.ht,A.cY],x.O)
D.att=w([A.by,A.dO],x.O)
D.cDX=w([A.aM,A.dj],x.O)
D.cKe=w([A.cr,A.eM],x.O)
D.d23=w([A.bZ,A.lt],x.O)
D.asY=w([A.cw,A.jK],x.O)
D.cIS=w([A.bI,A.aK],x.O)
D.bTT=w([D.avr,D.av1,A.a1i,D.att,D.cDX,D.cKe,A.auA,D.d23,D.asY,D.cIS],x.Q)
D.bYx=w([120,220,380],x.t)
D.c1h=w([12,16,19,24],x.t)
D.c1q=w([1400,800,450,2400],x.t)
D.c5C=w([0,0.6,1],x.n)
D.c9K=w([250,450,900,1500],x.t)
D.b5g=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bf2=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bdi=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bi2=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bcw=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.asd=w([D.b5g,D.bf2,D.bdi,D.bi2,D.bcw],x.O)
D.esU=new C.z("type","Typewriter")
D.emc=new C.z("bounce","Bounce")
D.etE=new C.z("wave","Wave")
D.euH=new C.z("zoom","Zoom")
D.cqj=w([D.esU,D.emc,D.etE,A.a51,I.aKb,D.euH,I.aKd],x.K)
D.cqv=w([50,25,75],x.t)
D.cw_=w([0,5,10,15,18,20,25],x.t)
D.enP=new C.z("fish","Fish")
D.enR=new C.z("fly","Fireflies")
D.ema=new C.z("bird","Birds")
D.cA8=w([D.enP,D.enR,D.ema],x.K)
D.cEc=w([900,500,250,1600],x.t)
D.cHK=w([0.78,1],x.n)
D.atu=w([0,2,4,7,9,12,14,16],x.t)
D.cIh=w([A.by,A.bA,A.b7,A.by],x.O)
D.atz=w(["A","T","C","G"],x.s)
D.cIi=w(["A","U","C","G"],x.s)
D.a18=w([A.aB,A.cp,A.bn,A.aW,A.nx],x.O)
D.cJz=w([A.aA,A.aB,A.cw,A.cp,A.bn,A.cv,A.c8,A.bA,A.K2],x.O)
D.a1c=w([0.04,0.17,0.3],x.n)
D.cKa=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Gt=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eC8=new B.uA("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eCe=new B.uA("Medium engine","A good all-rounder.",0.3,0.9)
D.eCd=new B.uA("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Gu=w([D.eC8,D.eCe,D.eCd],x._)
D.ecs=new C.z(6,"Easy")
D.ed1=new C.z(8,"Medium")
D.e8W=new C.z(10,"Hard")
D.cKZ=w([D.ecs,D.ed1,D.e8W],x.E)
D.atT=w([0.55,0.78,1],x.n)
D.cMu=w([0.93,0.975,1],x.n)
D.au3=w([A.c,A.fZ,A.p6,A.aA],x.O)
D.ftv=new B.xE("Moon",1737,4291941851)
D.fts=new B.xE("Earth",6371,4281908728)
D.ftw=new B.xE("Neptune",24622,4284524026)
D.ftx=new B.xE("Saturn",58232,4294829706)
D.ftt=new B.xE("Jupiter",69911,4294677052)
D.fty=new B.xE("Sun",696340,4294688548)
D.ftz=new B.xE("Sirius A",119e4,4290763774)
D.ftq=new B.xE("Arcturus",179e5,4294818420)
D.ftr=new B.xE("Betelgeuse",531e6,4294472049)
D.ftu=new B.xE("UY Scuti",667e6,4293870660)
D.P8=w([D.ftv,D.fts,D.ftw,D.ftx,D.ftt,D.fty,D.ftz,D.ftq,D.ftr,D.ftu],C.ax("P<xE>"))
D.exX=new C.bx("glow","Glow",A.ZI)
D.evJ=new C.bx("rainbow","Rainbow",A.n_)
D.ew3=new C.bx("stars","Stars",A.hY)
D.evt=new C.bx("sparks","Sparks",A.dW)
D.exh=new C.bx("fire","Fire",A.vg)
D.cOb=w([D.exX,D.evJ,D.ew3,D.evt,D.exh],x.c)
D.au7=w([A.bn,A.aB,A.cp,A.d7],x.O)
D.cPa=w([0.2,1],x.n)
D.eC5=new B.uA("Radar","Shows your height above the ground.",0.1,0)
D.eC6=new B.uA("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eC3=new B.uA("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.auf=w([D.eC5,D.eC6,D.eC3],x._)
D.ewB=new C.bx("attract","Attract",A.xZ)
D.ewo=new C.bx("scare","Scare",A.qN)
D.evC=new C.bx("food","Food",A.tF)
D.bAB=new C.a0(983158,"MaterialIcons",!1)
D.ewU=new C.bx("hunt","Hunt",D.bAB)
D.cPM=w([D.ewB,D.ewo,D.evC,D.ewU],x.c)
D.cQa=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cQp=w([47,100,220,470,1000],x.n)
D.aux=w([0,2,4,7,9],x.t)
D.Hw={volts:0}
D.a2P=new C.bq(D.Hw,[3],x.J)
D.HS=new C.eN(["b","battery",0.2,0.3,D.a2P])
D.dX1={on:0}
D.dg1=new C.bq(D.dX1,[1],x.J)
D.CA=new C.eN(["s","switch",0.5,0.3,D.dg1])
D.eAn=new C.eN(["l","bulb",0.8,0.3,A.iR])
D.cMa=w([D.HS,D.CA,D.eAn],x.d)
D.Cz=new C.cL(["b",0,"s",0])
D.ezr=new C.cL(["s",1,"l",0])
D.aKh=new C.cL(["l",1,"b",1])
D.d14=w([D.Cz,D.ezr,D.aKh],x.o)
D.cLE=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.e8f=new B.mp("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cMa,D.d14,D.cLE)
D.aEr={ohms:0}
D.aC3=new C.bq(D.aEr,[220],x.J)
D.ezT=new C.eN(["r","resistor",0.5,0.3,D.aC3])
D.eAA=new C.eN(["d","led",0.8,0.3,A.iR])
D.d3V=w([D.HS,D.ezT,D.eAA],x.d)
D.eyP=new C.cL(["b",0,"r",0])
D.ezl=new C.cL(["r",1,"d",0])
D.eyV=new C.cL(["d",1,"b",1])
D.dbR=w([D.eyP,D.ezl,D.eyV],x.o)
D.d4j=w(["led","diode","indicator"],x.s)
D.e8m=new B.mp("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d3V,D.dbR,D.d4j)
D.a45={level:0}
D.dfq=new C.bq(D.a45,[0.2],x.J)
D.ezZ=new C.eN(["p","pot",0.5,0.3,D.dfq])
D.eA0=new C.eN(["m","motor",0.8,0.3,A.iR])
D.cMs=w([D.HS,D.ezZ,D.eA0],x.d)
D.eyO=new C.cL(["b",0,"p",0])
D.ezh=new C.cL(["p",1,"m",0])
D.eze=new C.cL(["m",1,"b",1])
D.d7Z=w([D.eyO,D.ezh,D.eze],x.o)
D.d0O=w(["fan","motor","spin","dimmer"],x.s)
D.e8d=new B.mp("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cMs,D.d7Z,D.d0O)
D.a2M=new C.bq(D.a45,[0.9],x.J)
D.aKo=new C.eN(["s","solar",0.25,0.3,D.a2M])
D.aKn=new C.eN(["l","bulb",0.75,0.3,A.iR])
D.cOR=w([D.aKo,D.aKn],x.d)
D.ezo=new C.cL(["s",0,"l",0])
D.ezd=new C.cL(["l",1,"s",1])
D.cN9=w([D.ezo,D.ezd],x.o)
D.d8w=w(["solar","sun","without battery","no battery","free"],x.s)
D.e8g=new B.mp("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cOR,D.cN9,D.d8w)
D.eAD=new C.eN(["c","crank",0.25,0.3,D.a2M])
D.d_e=w([D.eAD,D.aKn],x.d)
D.eyS=new C.cL(["c",0,"l",0])
D.ezc=new C.cL(["l",1,"c",1])
D.d_M=w([D.eyS,D.ezc],x.o)
D.d_n=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.e8c=new B.mp("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d_e,D.d_M,D.d_n)
D.dfp=new C.bq(D.a45,[0.7],x.J)
D.eA3=new C.eN(["t","turbine",0.25,0.3,D.dfp])
D.ezS=new C.eN(["m","motor",0.75,0.3,A.iR])
D.cV2=w([D.eA3,D.ezS],x.d)
D.ezz=new C.cL(["t",0,"m",0])
D.ezf=new C.cL(["m",1,"t",1])
D.cU5=w([D.ezz,D.ezf],x.o)
D.cZ8=w(["wind","turbine","windmill","water","hydro"],x.s)
D.e89=new B.mp("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cV2,D.cU5,D.cZ8)
D.aC0=new C.bq(D.Hw,[9],x.J)
D.a54=new C.eN(["b","battery",0.2,0.3,D.aC0])
D.aKm=new C.eN(["r","radio",0.8,0.3,A.iR])
D.d94=w([D.a54,D.CA,D.aKm],x.d)
D.ezt=new C.cL(["s",1,"r",0])
D.aKi=new C.cL(["r",1,"b",1])
D.bTh=w([D.Cz,D.ezt,D.aKi],x.o)
D.d7M=w(["radio","music","listen"],x.s)
D.e8l=new B.mp("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.d94,D.bTh,D.d7M)
D.dgt=new C.bq(D.Hw,[12],x.J)
D.aKl=new C.eN(["b","battery",0.2,0.3,D.dgt])
D.eAo=new C.eN(["t","tv",0.8,0.3,A.iR])
D.cMb=w([D.aKl,D.CA,D.eAo],x.d)
D.ezu=new C.cL(["s",1,"t",0])
D.aKj=new C.cL(["t",1,"b",1])
D.d26=w([D.Cz,D.ezu,D.aKj],x.o)
D.d92=w(["tv","television","screen","watch"],x.s)
D.e86=new B.mp("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cMb,D.d26,D.d92)
D.eAe=new C.eN(["z","buzzer",0.8,0.3,A.iR])
D.csO=w([D.HS,D.CA,D.eAe],x.d)
D.ezv=new C.cL(["s",1,"z",0])
D.ezN=new C.cL(["z",1,"b",1])
D.cHw=w([D.Cz,D.ezv,D.ezN],x.o)
D.d6b=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.e8i=new B.mp("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.csO,D.cHw,D.d6b)
D.eA_=new C.eN(["h","heater",0.8,0.3,A.iR])
D.cXS=w([D.a54,D.CA,D.eA_],x.d)
D.ezq=new C.cL(["s",1,"h",0])
D.ez2=new C.cL(["h",1,"b",1])
D.cId=w([D.Cz,D.ezq,D.ez2],x.o)
D.cd0=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.e87=new B.mp("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cXS,D.cId,D.cd0)
D.eAq=new C.eN(["s","solar",0.2,0.25,D.a2M])
D.dgy=new C.bq(D.aEr,[100],x.J)
D.eAt=new C.eN(["r","resistor",0.55,0.25,D.dgy])
D.eAz=new C.eN(["c","capacitor",0.85,0.25,A.iR])
D.ezW=new C.eN(["q","resistor",0.55,0.6,D.aC3])
D.eAr=new C.eN(["d","led",0.85,0.6,A.iR])
D.d1K=w([D.eAq,D.eAt,D.eAz,D.ezW,D.eAr],x.d)
D.ezp=new C.cL(["s",0,"r",0])
D.ezk=new C.cL(["r",1,"c",0])
D.eyU=new C.cL(["c",1,"s",1])
D.eyT=new C.cL(["c",0,"q",0])
D.ezj=new C.cL(["q",1,"d",0])
D.eyW=new C.cL(["d",1,"c",1])
D.cSb=w([D.ezp,D.ezk,D.eyU,D.eyT,D.ezj,D.eyW],x.o)
D.cZC=w(["capacitor","store","charge","flash"],x.s)
D.e8k=new B.mp("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d1K,D.cSb,D.cZC)
D.eA6=new C.eN(["b","battery",0.15,0.3,D.a2P])
D.eAE=new C.eN(["l1","bulb",0.5,0.3,A.iR])
D.eAc=new C.eN(["l2","bulb",0.85,0.3,A.iR])
D.cKs=w([D.eA6,D.eAE,D.eAc],x.d)
D.eyN=new C.cL(["b",0,"l1",0])
D.ez9=new C.cL(["l1",1,"l2",0])
D.eza=new C.cL(["l2",1,"b",1])
D.cVG=w([D.eyN,D.ez9,D.eza],x.o)
D.d8P=w(["series","two bulbs","dim"],x.s)
D.e8a=new B.mp("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cKs,D.cVG,D.d8P)
D.dXd={volts:0,charge:1}
D.dgD=new C.bq(D.dXd,[1.5,0],x.J)
D.eAx=new C.eN(["b","battery",0.75,0.3,D.dgD])
D.cJU=w([D.aKo,D.eAx],x.d)
D.ezn=new C.cL(["s",0,"b",0])
D.eyR=new C.cL(["b",1,"s",1])
D.cSr=w([D.ezn,D.eyR],x.o)
D.cZJ=w(["charge","rechargeable","flat","recharge"],x.s)
D.e88=new B.mp("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cJU,D.cSr,D.cZJ)
D.dgs=new C.bq(D.Hw,[4.5],x.J)
D.eA1=new C.eN(["b","battery",0.2,0.3,D.dgs])
D.aKk=new C.eN(["p","phone",0.8,0.3,A.iR])
D.cUT=w([D.eA1,D.CA,D.aKk],x.d)
D.ezs=new C.cL(["s",1,"p",0])
D.a53=new C.cL(["p",1,"b",1])
D.d5e=w([D.Cz,D.ezs,D.a53],x.o)
D.d6z=w(["phone","charger","usb","mobile"],x.s)
D.e8e=new B.mp("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cUT,D.d5e,D.d6z)
D.ezP=new C.eN(["f","fan",0.8,0.3,A.iR])
D.c5d=w([D.HS,D.ezP],x.d)
D.eyM=new C.cL(["b",0,"f",0])
D.ez0=new C.cL(["f",1,"b",1])
D.cIG=w([D.eyM,D.ez0],x.o)
D.d0N=w(["fan","cool","air","wind"],x.s)
D.e8n=new B.mp("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c5d,D.cIG,D.d0N)
D.eAi=new C.eN(["b","battery",0.15,0.2,D.a2P])
D.ezQ=new C.eN(["a","ammeter",0.5,0.2,A.iR])
D.ezO=new C.eN(["l","bulb",0.85,0.2,A.iR])
D.eAk=new C.eN(["v","voltmeter",0.5,0.6,A.iR])
D.d_1=w([D.eAi,D.ezQ,D.ezO,D.eAk],x.d)
D.eyK=new C.cL(["b",0,"a",0])
D.eyJ=new C.cL(["a",1,"l",0])
D.ezB=new C.cL(["v",0,"l",0])
D.ezC=new C.cL(["v",1,"l",1])
D.cSi=w([D.eyK,D.eyJ,D.aKh,D.ezB,D.ezC],x.o)
D.dbQ=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.e8j=new B.mp("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d_1,D.cSi,D.dbQ)
D.eAH=new C.eN(["b","battery",0.15,0.2,D.aC0])
D.eA5=new C.eN(["t","tv",0.55,0.2,A.iR])
D.aC1=new C.bq(D.Hw,[5],x.J)
D.ezU=new C.eN(["c","buck",0.4,0.5,D.aC1])
D.eA7=new C.eN(["p","phone",0.8,0.5,A.iR])
D.cQc=w([D.eAH,D.eA5,D.ezU,D.eA7],x.d)
D.eyQ=new C.cL(["b",0,"t",0])
D.aKf=new C.cL(["b",0,"c",0])
D.aKg=new C.cL(["c",1,"p",0])
D.cUQ=w([D.eyQ,D.aKj,D.aKf,D.aKg,D.a53],x.o)
D.cOr=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.e8b=new B.mp("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cQc,D.cUQ,D.cOr)
D.ezV=new C.eN(["c","buck",0.5,0.3,D.aC1])
D.cI4=w([D.aKl,D.ezV,D.aKk],x.d)
D.cMA=w([D.aKf,D.aKg,D.a53],x.o)
D.cgo=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.e85=new B.mp("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cI4,D.cMA,D.cgo)
D.eAa=new C.eN(["d","diode",0.5,0.3,A.iR])
D.cVT=w([D.a54,D.eAa,D.aKm],x.d)
D.eyL=new C.cL(["b",0,"d",0])
D.eyX=new C.cL(["d",1,"r",0])
D.cvi=w([D.eyL,D.eyX,D.aKi],x.o)
D.cO8=w(["diode","protect","backwards","one way"],x.s)
D.e8h=new B.mp("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cVT,D.cvi,D.cO8)
D.Pb=w([D.e8f,D.e8m,D.e8d,D.e8g,D.e8c,D.e89,D.e8l,D.e86,D.e8i,D.e87,D.e8k,D.e8a,D.e88,D.e8e,D.e8n,D.e8j,D.e8b,D.e85,D.e8h],C.ax("P<mp>"))
D.fNo=new B.Fs("Moon",1.62,A.dL,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fNm=new B.Fs("Mars",3.71,A.aB,"Mars has about 38 percent of Earth's gravity.")
D.fNp=new B.Fs("Mercury",3.7,A.jJ,"Mercury is small, so its gravity is like Mars.")
D.fNj=new B.Fs("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fNl=new B.Fs("Earth",9.81,A.aW,"On Earth gravity is strong, and the air also slows you down.")
D.fNn=new B.Fs("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.fNk=new B.Fs("Jupiter",24.79,A.cw,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qX=w([D.fNo,D.fNm,D.fNp,D.fNj,D.fNl,D.fNn,D.fNk],C.ax("P<Fs>"))
D.cSa=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1r=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cSO=w([0.2,0.5,0.8],x.n)
D.bz6=new C.a0(63040,"MaterialIcons",!1)
D.ews=new C.bx("peg","Peg",D.bz6)
D.evG=new C.bx("bar","Bar",S.Bg)
D.ew6=new C.bx("erase","Erase",A.Mv)
D.cSZ=w([D.ews,D.evG,D.ew6],x.c)
D.eEW=new C.cP(A.bh,A.J,4)
D.cT8=w([D.eEW],x.q)
D.auM=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aSO=new B.JI(0,"accordion")
D.cIY=w([A.jb,A.Bh,A.B5],x.w)
D.cPE=w(["Mail","SMS","Ad"],x.s)
D.cJr=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fLB=new B.A1(D.aSO,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.avr,D.cIY,D.cPE,D.cJr)
D.a8r=new B.JI(1,"flip")
D.cZw=w([A.pA,A_.FT,A.tG],x.w)
D.cUz=w(["Unlock","Verify","Secure"],x.s)
D.cI0=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fLA=new B.A1(D.a8r,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.av1,D.cZw,D.cUz,D.cI0)
D.aSP=new B.JI(2,"towers")
D.cTq=w([A.xU,A.pF,A.hI],x.w)
D.cT4=w(["Save","Grow","Earn"],x.s)
D.cw8=w(["","",""],x.s)
D.fLC=new B.A1(D.aSP,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1i,D.cTq,D.cT4,D.cw8)
D.a8s=new B.JI(3,"assemble")
D.d_q=w([A.n2,A.h4,A.dW],x.w)
D.cP1=w(["Launch","Charge","Shine"],x.s)
D.cX4=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fLE=new B.A1(D.a8s,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.att,D.d_q,D.cP1,D.cX4)
D.aSQ=new B.JI(4,"carousel")
D.d_f=w([A.b7,A.fh],x.O)
D.cPO=w([A.mf,A.ajq,A.a_r],x.w)
D.cKP=w(["Explore","Discover","Learn"],x.s)
D.cUY=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fLz=new B.A1(D.aSQ,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d_f,D.cPO,D.cKP,D.cUY)
D.aSR=new B.JI(5,"burst")
D.cT0=w([A.iZ,A.rT],x.O)
D.cJm=w([A.l7,A.me,A.hX],x.w)
D.cJH=w(["Cheer","Win","Love"],x.s)
D.cLK=w(["Make some noise","First place","Share the joy"],x.s)
D.fLD=new B.A1(D.aSR,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cT0,D.cJm,D.cJH,D.cLK)
D.auN=w([D.fLB,D.fLA,D.fLC,D.fLE,D.fLz,D.fLD],C.ax("P<A1>"))
D.ewu=new C.bx("skin","Skin",A.ajr)
D.exK=new C.bx("muscle","Muscles",A.MH)
D.exv=new C.bx("organ","Organs",A.hX)
D.byy=new C.a0(62747,"MaterialIcons",!1)
D.exy=new C.bx("bone","Skeleton",D.byy)
D.exQ=new C.bx("vessel","Blood vessels",A.pH)
D.cTw=w([D.ewu,D.exK,D.exv,D.exy,D.exQ],x.c)
D.eC7=new B.uA("Simple legs","Light. Land gently.",0.15,0.2)
D.eC9=new B.uA("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eCc=new B.uA("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.BE=w([D.eC7,D.eC9,D.eCc],x._)
D.cV5=w([1.77,3.55,7.15,16.7],x.n)
D.cXt=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.esn=new C.z("spiral","Spiral")
D.ecq=new C.z("barred","Barred spiral")
D.enk=new C.z("elliptical","Elliptical")
D.cY7=w([D.esn,D.ecq,D.enk],x.K)
D.eys=new C.cL(["beat",0.18,0.28,0])
D.ezw=new C.cL(["burst",0.7,0.2,0])
D.ezH=new C.cL(["delay",0.45,0.5,1])
D.ezg=new C.cL(["ripple",0.75,0.6,3])
D.cOM=w([D.eys,D.ezw,D.ezH,D.ezg],x.e)
D.a4X=new C.z(2,3)
D.cYX=w([N.n9,K.HR,D.a4X],x.u)
D.fKR=new B.Ff("First spark","A clock lights a burst and a ripple",D.cOM,D.cYX)
D.ez_=new C.cL(["beat",0.15,0.3,1])
D.ey7=new C.cL(["ripple",0.62,0.15,0])
D.ezD=new C.cL(["delay",0.4,0.45,0])
D.eyG=new C.cL(["ripple",0.7,0.45,0])
D.eyo=new C.cL(["delay",0.4,0.7,1])
D.ezi=new C.cL(["shake",0.75,0.75,0])
D.d9N=w([D.ez_,D.ey7,D.ezD,D.eyG,D.eyo,D.ezi],x.e)
D.e9Q=new C.z(2,4)
D.aK5=new C.z(4,5)
D.cS1=w([N.n9,K.HR,D.a4X,D.e9Q,D.aK5],x.u)
D.fKT=new B.Ff("Heartbeat","Two thumps, then a shake",D.d9N,D.cS1)
D.eyx=new C.cL(["dice",0.15,0.7,1])
D.ezJ=new C.cL(["echo",0.4,0.7,0])
D.eyE=new C.cL(["comet",0.7,0.5,4])
D.ezx=new C.cL(["burst",0.72,0.2,1])
D.eyY=new C.cL(["burst",0.3,0.25,0])
D.eyy=new C.cL(["pop",0.55,0.85,0])
D.ccA=w([D.eyx,D.ezJ,D.eyE,D.ezx,D.eyY,D.eyy],x.e)
D.e9f=new C.z(1,3)
D.e9g=new C.z(1,4)
D.aK4=new C.z(0,5)
D.d_a=w([N.n9,K.vO,D.e9f,D.e9g,D.aK4],x.u)
D.fKS=new B.Ff("Fireworks","Dice launch comets that burst in colour",D.ccA,D.d_a)
D.eyB=new C.cL(["beat",0.15,0.2,2])
D.ez6=new C.cL(["chance",0.4,0.2,0])
D.eyu=new C.cL(["ball",0.7,0.12,3])
D.eyh=new C.cL(["chance",0.4,0.5,1])
D.ezI=new C.cL(["ball",0.3,0.08,1])
D.eya=new C.cL(["ripple",0.7,0.55,3])
D.c5D=w([D.eyB,D.ez6,D.eyu,D.eyh,D.ezI,D.eya],x.e)
D.a4Y=new C.z(3,4)
D.e9R=new C.z(2,5)
D.csy=w([N.n9,K.vO,K.a4W,D.a4Y,D.e9R],x.u)
D.fKQ=new B.Ff("Rain","Balls fall at random and splash",D.c5D,D.csy)
D.ez7=new C.cL(["beat",0.12,0.45,2])
D.ezy=new C.cL(["toggle",0.38,0.2,0])
D.ezF=new C.cL(["wash",0.7,0.15,4])
D.eyw=new C.cL(["count3",0.38,0.45,0])
D.ezA=new C.cL(["burst",0.72,0.4,0])
D.eyZ=new C.cL(["light",0.55,0.7,1])
D.eyi=new C.cL(["pop",0.8,0.8,4])
D.d1I=w([D.ez7,D.ezy,D.ezF,D.eyw,D.ezA,D.eyZ,D.eyi],x.e)
D.eae=new C.z(3,6)
D.c8K=w([N.n9,K.vO,K.a4W,D.a4Y,D.aK4,D.eae],x.u)
D.fKO=new B.Ff("Disco","A beat drives lights, washes and bursts",D.d1I,D.c8K)
D.ezM=new C.cL(["button",0.12,0.2,0])
D.eyc=new C.cL(["delay",0.34,0.2,1])
D.ezL=new C.cL(["light",0.56,0.2,1])
D.ezE=new C.cL(["delay",0.56,0.45,1])
D.ez8=new C.cL(["ball",0.34,0.6,0])
D.eyg=new C.cL(["delay",0.34,0.8,1])
D.ey6=new C.cL(["burst",0.7,0.8,5])
D.bTW=w([D.ezM,D.eyc,D.ezL,D.ezE,D.ez8,D.eyg,D.ey6],x.e)
D.ecb=new C.z(5,6)
D.d6k=w([N.n9,K.vO,D.a4X,D.a4Y,D.aK5,D.ecb],x.u)
D.fKP=new B.Ff("Domino","Tap the button and watch it run down the line",D.bTW,D.d6k)
D.av5=w([D.fKR,D.fKT,D.fKS,D.fKQ,D.fKO,D.fKP],C.ax("P<Ff>"))
D.cYf=w([0.05,0.15,0.25],x.n)
D.cYt=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cZ7=w([1.5,3,4.5,9,12],x.n)
D.eve=new C.bx("dice","Dice",A.md)
D.ewc=new C.bx("coin","Coin",L.xN)
D.exL=new C.bx("num","Number",A.xX)
D.cZh=w([D.eve,D.ewc,D.exL],x.c)
D.cZk=w(["skin","muscle","organ","bone","vessel"],x.s)
D.ftA=new B.Oo("Moon",1.62,0,4291941851)
D.ftB=new B.Oo("Mars",3.71,0.01,4294472049)
D.ftC=new B.Oo("Earth",9.81,1,4281908728)
D.ftE=new B.Oo("Jupiter",24.79,1.4,4294677052)
D.ftD=new B.Oo("Sun",274,2,4294688548)
D.ym=w([D.ftA,D.ftB,D.ftC,D.ftE,D.ftD],C.ax("P<Oo>"))
D.avb=w([A.cr,A.aM,A.bc,A.aW,A.by,A.bZ,A.cw,A.ht],x.O)
D.dVG={H:0}
D.dg2=new C.bq(D.dVG,[2],x.I)
D.dhA=new B.rY("Hydrogen","H\u2082",D.dg2,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dVH={H:0,Cl:1}
D.dge=new C.bq(D.dVH,[1,1],x.I)
D.dhC=new B.rY("Hydrogen chloride","HCl",D.dge,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dVI={H:0,O:1}
D.dfM=new C.bq(D.dVI,[2,1],x.I)
D.dhD=new B.rY("Water","H\u2082O",D.dfM,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dVV={N:0,H:1}
D.dgC=new C.bq(D.dVV,[1,3],x.I)
D.dhL=new B.rY("Ammonia","NH\u2083",D.dgC,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a44={C:0,H:1}
D.dgw=new C.bq(D.a44,[1,4],x.I)
D.dhE=new B.rY("Methane","CH\u2084",D.dgw,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dVJ={H:0,S:1}
D.deV=new C.bq(D.dVJ,[2,1],x.I)
D.dhK=new B.rY("Hydrogen sulfide","H\u2082S",D.deV,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dW_={O:0}
D.dgA=new C.bq(D.dW_,[2],x.I)
D.dhM=new B.rY("Oxygen","O\u2082",D.dgA,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dVU={N:0}
D.dg3=new C.bq(D.dVU,[2],x.I)
D.dhB=new B.rY("Nitrogen","N\u2082",D.dg3,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dVu={C:0,O:1}
D.dgI=new C.bq(D.dVu,[1,2],x.I)
D.dhI=new B.rY("Carbon dioxide","CO\u2082",D.dgI,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aEo={C:0,H:1,O:2}
D.deH=new C.bq(D.aEo,[1,2,1],x.I)
D.dhJ=new B.rY("Formaldehyde","CH\u2082O",D.deH,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dgv=new C.bq(D.a44,[2,4],x.I)
D.dhG=new B.rY("Ethene","C\u2082H\u2084",D.dgv,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dgu=new C.bq(D.a44,[2,6],x.I)
D.dhF=new B.rY("Ethane","C\u2082H\u2086",D.dgu,"Two carbons joined by a single bond, each holding three hydrogens.")
D.deI=new C.bq(D.aEo,[1,4,1],x.I)
D.dhH=new B.rY("Methanol","CH\u2083OH",D.deI,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a1H=w([D.dhA,D.dhC,D.dhD,D.dhL,D.dhE,D.dhK,D.dhM,D.dhB,D.dhI,D.dhJ,D.dhG,D.dhF,D.dhH],C.ax("P<rY>"))
D.d_g=w([A.bZ,A.aW,A.dN,A.bc],x.O)
D.d0a=w([],x.h)
D.d0c=w([],x.B)
D.a1Q=w([],x.F)
D.e25=new B.e7("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e2b=new B.e7("solar","Solar panel","\u2600\ufe0f",A.cp,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e2Q=new B.e7("crank","Hand crank","\ud83d\udd04",A.cw,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e2s=new B.e7("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aW,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e1Y=new B.e7("buck","Step-down converter","\ud83d\udd3d",A.ht,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e2q=new B.e7("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e2V=new B.e7("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e2C=new B.e7("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e2g=new B.e7("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e2S=new B.e7("fuse","Fuse","\ud83e\uddef",A.cr,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e1Q=new B.e7("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.ht,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e2D=new B.e7("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e2F=new B.e7("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e2d=new B.e7("led","LED","\ud83d\udd34",A.aB,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e2h=new B.e7("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e2z=new B.e7("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e26=new B.e7("heater","Heater","\ud83d\udd25",A.cw,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e2u=new B.e7("capacitor","Capacitor","\ud83e\udeab",A.ct,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e2m=new B.e7("radio","Radio","\ud83d\udcfb",A.nx,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e2j=new B.e7("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b7,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e1X=new B.e7("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e23=new B.e7("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e29=new B.e7("fan","Fan","\ud83c\udf00",A.aW,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e2X=new B.e7("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e2M=new B.e7("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e2p=new B.e7("calculator","Calculator","\ud83e\uddee",A.JX,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e22=new B.e7("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.ct,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e2W=new B.e7("router","WiFi router","\ud83d\udcf6",A.ht,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e2Z=new B.e7("siren","Siren","\ud83d\udea8",A.aB,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e1T=new B.e7("toycar","Toy car","\ud83d\ude97",A.cw,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e3_=new B.e7("kettle","Kettle","\ud83e\uded6",A.oh,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e20=new B.e7("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e2c=new B.e7("lights","Party lights","\ud83c\udf84",A.nx,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e2n=new B.e7("fridge","Fridge","\ud83e\uddca",A.he,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e1V=new B.e7("washer","Washing machine","\ud83e\udee7",A.ct,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e2N=new B.e7("blender","Blender","\ud83e\udd64",A.cr,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e2k=new B.e7("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e2_=new B.e7("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e2o=new B.e7("torch","Torch","\ud83d\udd26",A.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e2K=new B.e7("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e1W=new B.e7("microwave","Microwave","\ud83c\udf72",A.cw,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e2E=new B.e7("doorbell","Doorbell","\ud83d\udd14",A.cp,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e28=new B.e7("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e2y=new B.e7("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e2P=new B.e7("heartmon","Heart monitor","\ud83e\ude7a",A.fX,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e1U=new B.e7("aquarium","Aquarium","\ud83d\udc20",A.b7,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e2t=new B.e7("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e2B=new B.e7("discoball","Disco ball","\ud83e\udea9",A.nx,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e2U=new B.e7("robot","Robot","\ud83e\udd16",A.aW,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e1S=new B.e7("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e2Y=new B.e7("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e2J=new B.e7("pump","Water pump","\ud83d\udeb0",A.aW,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e2v=new B.e7("hairdryer","Hair dryer","\ud83d\udca8",A.iZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e2H=new B.e7("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e21=new B.e7("smartwatch","Apple Watch Ultra","\u231a",A.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e2T=new B.e7("tablet","iPad Pro M5","\ud83d\udcf2",A.ct,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e1P=new B.e7("lgtv","LG OLED evo G5","\ud83d\udcfa",A.fX,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e2l=new B.e7("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e2e=new B.e7("appletv","Apple TV 4K","\ud83d\udcfa",A.bW,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e2A=new B.e7("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.rQ,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e1R=new B.e7("iphonefold","iPhone Fold","\ud83d\udcf1",A.b4,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e24=new B.e7("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e2R=new B.e7("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cv,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e2w=new B.e7("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bn,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e2r=new B.e7("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e2I=new B.e7("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aB,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e2f=new B.e7("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e2x=new B.e7("honor","Honor Magic V5","\ud83d\udcf1",A.ct,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e2G=new B.e7("vivo","vivo X300 Pro","\ud83d\udcf1",A.cw,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e2L=new B.e7("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e1O=new B.e7("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e2i=new B.e7("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cv,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e2a=new B.e7("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b7,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e1Z=new B.e7("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e27=new B.e7("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aB,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e2O=new B.e7("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.PA=w([D.e25,D.e2b,D.e2Q,D.e2s,D.e1Y,D.e2q,D.e2V,D.e2C,D.e2g,D.e2S,D.e1Q,D.e2D,D.e2F,D.e2d,D.e2h,D.e2z,D.e26,D.e2u,D.e2m,D.e2j,D.e1X,D.e23,D.e29,D.e2X,D.e2M,D.e2p,D.e22,D.e2W,D.e2Z,D.e1T,D.e3_,D.e20,D.e2c,D.e2n,D.e1V,D.e2N,D.e2k,D.e2_,D.e2o,D.e2K,D.e1W,D.e2E,D.e28,D.e2y,D.e2P,D.e1U,D.e2t,D.e2B,D.e2U,D.e1S,D.e2Y,D.e2J,D.e2v,D.e2H,D.e21,D.e2T,D.e1P,D.e2l,D.e2e,D.e2A,D.e1R,D.e24,D.e2R,D.e2w,D.e2r,D.e2I,D.e2f,D.e2x,D.e2G,D.e2L,D.e1O,D.e2i,D.e2a,D.e1Z,D.e27,D.e2O],C.ax("P<e7>"))
D.d0y=w([0,0.46,0.82],x.n)
D.d0J=w([5,10,15,25,45,60],x.t)
D.d12=w([-0.045,0.03,-0.015],x.n)
D.d1q=w([0.9,0.97,1],x.n)
D.avy=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tO=w([0.05,0.2,0.35],x.n)
D.cJL=w([D.Ed,D.Ed],x.O)
D.cOI=w([A.Eo,A.M],x.O)
D.cNN=w([A.fC,A.hs],x.O)
D.cHY=w([A.fh,A.nw],x.O)
D.c5b=w([A.lt,A.dv],x.O)
D.avz=w([D.cJL,D.cOI,D.cNN,D.cHY,D.c5b],x.Q)
D.fto=new B.uN("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.ftp=new B.uN("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.ftg=new B.uN("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.ftn=new B.uN("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.ftl=new B.uN("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fth=new B.uN("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.ftm=new B.uN("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fti=new B.uN("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.ftk=new B.uN("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.ftj=new B.uN("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BK=w([D.fto,D.ftp,D.ftg,D.ftn,D.ftl,D.fth,D.ftm,D.fti,D.ftk,D.ftj],C.ax("P<uN>"))
D.bcb=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d2v=w([D.Ed,D.bcb,D.ach,A.abS],x.O)
D.aZz=new C.ad(0,A.G,A.hE,A.dB,6)
D.d3m=w([D.aZz],x.V)
D.e8D=new C.z(0,"AND")
D.e9h=new C.z(1,"Adder")
D.e9S=new C.z(2,"Blinker")
D.eaf=new C.z(3,"Memory")
D.d45=w([D.e8D,D.e9h,D.e9S,D.eaf],x.E)
D.avL=w([-104,0,104],x.n)
D.avM=w([-14,3],x.n)
D.d4x=w([-16,16],x.n)
D.avN=w([-22,22],x.n)
D.avO=w([-24,24],x.n)
D.d4D=w([-8,0,8],x.n)
D.d4E=w([-8,8],x.n)
D.avR=w([-92,0,92],x.n)
D.d4Z=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eC4=new B.uA("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eCb=new B.uA("Medium tank","Balanced.",0.35,1)
D.eCa=new B.uA("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.PN=w([D.eC4,D.eCb,D.eCa],x._)
D.n5=w([0.04,0.2,0.36],x.n)
D.aw0=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.exu=new C.bx(D.aSO,"Fold",L.akr)
D.ewI=new C.bx(D.a8r,"Flip",A.Fw)
D.byR=new C.a0(62889,"MaterialIcons",!1)
D.exJ=new C.bx(D.aSP,"Rise",D.byR)
D.akF=new C.a0(983870,"MaterialIcons",!1)
D.euP=new C.bx(D.a8s,"Assemble",D.akF)
D.euY=new C.bx(D.aSQ,"Spin",D.aiV)
D.euV=new C.bx(D.aSR,"Pop",A.l7)
D.d6h=w([D.exu,D.ewI,D.exJ,D.euP,D.euY,D.euV],C.ax("P<+(JI,n,a0)>"))
D.aw5=w([A.bZ,A.dN,A.bs,A.aW,A.by,A.cr],x.O)
D.d6s=w([A.aW,A.cw,A.cw,A.bc],x.O)
D.d6E=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.etN=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.eft=new C.z("Make the output turn TWICE as fast.",2)
D.e9r=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.esx=new C.z("Make the output turn 4 times faster.",4)
D.ekV=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.enV=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.emr=new C.z("Make the output turn 3 times faster.",3)
D.enb=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.awa=w([D.etN,D.eft,D.e9r,D.esx,D.ekV,D.enV,D.emr,D.enb],C.ax("P<+(n,O)>"))
D.d7C=w([3,4.5,5,6,9],x.n)
D.b_6=new C.ad(0,A.G,A.aX,A.J,16)
D.d82=w([D.b_6],x.V)
D.PP=w([A.bZ,A.cp,A.bc,A.aW,A.by,A.cr,A.c,A.cw],x.O)
D.d8t=w(["solar","turbine","crank","pot"],x.s)
D.d8N=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d8T=w([0,0.35,0.75,1],x.n)
D.ev9=new C.bx("drop","Drop",D.akg)
D.evb=new C.bx("weight","Weight",R.akJ)
D.exE=new C.bx("cannon","Newton's cannon",A.ajE)
D.d9v=w([D.ev9,D.evb,D.exE],x.c)
D.erb=new C.z("piano","Piano")
D.eqS=new C.z("organ","Organ")
D.em8=new C.z("bell","Bell")
D.erd=new C.z("pluck","Pluck")
D.esw=new C.z("synth","Synth")
D.enQ=new C.z("flute","Flute")
D.awr=w([D.erb,D.eqS,D.em8,D.erd,D.esw,D.enQ],x.K)
D.da0=w(["volts","level","ohms","on"],x.s)
D.dbg=w([A.jb,A.Bh,A.B5,A.pA,A_.FT,A.tG,A.xU,A.pF,A.hI,A.n2,A.h4,A.dW,A.hX,A.hY,A.me,A.lD,A.xV,A.qU,A.lE,A.Fo,A.tF,A.MJ,A.B7,A.akb,A.Mz,A.xQ,A.MH,A.ajO,U.akB,A.l7],x.w)
D.dc9=w([0.72,1],x.n)
D.dck=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dX6={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.deB=new C.bq(D.dX6,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aEq={A:0,T:1,C:2,G:3}
D.a2H=new C.bq(D.aEq,["U","A","G","C"],x.l)
D.deJ=new C.bq(D.aEq,["T","A","G","C"],x.l)
D.dVR={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d_k=w([0,2,4,5,7,9,11],x.t)
D.cJ3=w([0,2,3,5,7,8,10],x.t)
D.d4h=w([0,3,5,6,7,10],x.t)
D.BQ=new C.bq(D.dVR,[D.aux,D.d_k,D.cJ3,D.d4h,D.ana],C.ax("bq<n,ak<G>>"))
D.dWV={A:0,T:1,U:2,C:3,G:4}
D.deY=new C.bq(D.dWV,[A.cr,A.ct,A.ct,A.aM,A.bc],C.ax("bq<n,w>"))
D.dVf={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fEx=new B.xG("Switch",F.N5,A.cp,0,"Tap it to turn it ON or OFF.")
D.fEt=new B.xG("Blinker",A.ow,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fEu=new B.xG("AND",D.akF,A.ct,2,"ON only when BOTH inputs are ON.")
D.bAj=new C.a0(63671,"MaterialIcons",!1)
D.fEs=new B.xG("OR",D.bAj,A.by,2,"ON when EITHER input is ON.")
D.fEv=new B.xG("XOR",G.ZN,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fEp=new B.xG("NAND",A.tv,A.aW,2,"OFF only when BOTH inputs are ON.")
D.bzp=new C.a0(63176,"MaterialIcons",!1)
D.fEq=new B.xG("NOR",D.bzp,A.ht,2,"ON only when BOTH inputs are OFF.")
D.fEr=new B.xG("NOT",Y.FP,A.cw,1,"Flips the signal: ON becomes OFF.")
D.fEw=new B.xG("Light",A.qP,A.dN,1,"Glows when its input is ON.")
D.fEy=new B.xG("Buzzer",A.nM,A.cr,1,"Beeps while its input is ON.")
D.yy=new C.bq(D.dVf,[D.fEx,D.fEt,D.fEu,D.fEs,D.fEv,D.fEp,D.fEq,D.fEr,D.fEw,D.fEy],C.ax("bq<n,xG>"))
D.dWT={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.evx=new C.bx(3,20,1.9)
D.ev5=new C.bx(33,90,1.6)
D.ey1=new C.bx(52,15,3.2)
D.ey_=new C.bx(45,-100,1.8)
D.ewC=new C.bx(-15,-60,1.9)
D.ew8=new C.bx(-25,140,2.4)
D.ew_=new C.bx(-82,0,2.2)
D.aBS=new C.bq(D.dWT,[D.evx,D.ev5,D.ey1,D.ey_,D.ewC,D.ew8,D.ew_],C.ax("bq<n,+(O,O,O)>"))
D.cIu=w([A.A],x.M)
D.cIM=w([A.ax,A.aD],x.M)
D.cRc=w([A.ax,A.A,A.aD],x.M)
D.cSx=w([A.ax,A.kX,A.A,A.lo,A.aD],x.M)
D.d41=w([A.ax,A.kX,A.a3,A.a7,A.lo,A.aD],x.M)
D.dfT=new C.dR([1,D.cIu,2,D.cIM,3,D.cRc,4,A.aww,5,D.cSx,6,D.d41],C.ax("dR<G,ak<d8>>"))
D.dVS={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ewO=new C.bx(1,A.bW,"Hydrogen")
D.evM=new C.bx(4,A.bo,"Carbon")
D.euQ=new C.bx(3,A.d7,"Nitrogen")
D.ex5=new C.bx(2,A.aB,"Oxygen")
D.eww=new C.bx(2,A.cp,"Sulfur")
D.exB=new C.bx(1,A.bn,"Chlorine")
D.vB=new C.bq(D.dVS,[D.ewO,D.evM,D.euQ,D.ex5,D.eww,D.exB],C.ax("bq<n,+(G,w,n)>"))
D.dXb={Calm:0,Box:1,Sleep:2}
D.cq4=w([4,2,6,0],x.n)
D.cqb=w([4,4,4,4],x.n)
D.cqc=w([4,7,8,0],x.n)
D.Qd=new C.bq(D.dXb,[D.cq4,D.cqb,D.cqc],C.ax("bq<n,ak<O>>"))
D.dVo={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wi=new B.a_l(0,"source")
D.cS4=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fJu=new B.pQ("Clock",A.ow,D.wi,A.bs,D.cS4)
D.fJq=new B.pQ("Button",A.xZ,D.wi,A.aM,A.T)
D.d7O=w(["random","quick","slow"],x.s)
D.fJB=new B.pQ("Dice",A.md,D.wi,A.bZ,D.d7O)
D.bzZ=new C.a0(63484,"MaterialIcons",!1)
D.Dc=new B.a_l(1,"logic")
D.dc4=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fJx=new B.pQ("Delay",D.bzZ,D.Dc,A.ct,D.dc4)
D.d0Q=w(["fast","mid","slow"],x.s)
D.fJC=new B.pQ("Echo",A.ak4,D.Dc,A.by,D.d0Q)
D.fJz=new B.pQ("Every 2nd",Y.FP,D.Dc,A.ht,A.T)
D.bzE=new C.a0(63309,"MaterialIcons",!1)
D.fJw=new B.pQ("Every 3rd",D.bzE,D.Dc,A.aW,A.T)
D.bBA=new C.a0(983902,"MaterialIcons",!1)
D.bTm=w(["50%","25%","75%"],x.s)
D.fJE=new B.pQ("Chance",D.bBA,D.Dc,A.cw,D.bTm)
D.qb=new B.a_l(2,"out")
D.fJs=new B.pQ("Light",A.qP,D.qb,A.dN,A.T)
D.fJt=new B.pQ("Burst",A.l7,D.qb,A.bZ,A.T)
D.fJr=new B.pQ("Ripple",A.y2,D.qb,A.b7,A.T)
D.fJA=new B.pQ("Ball",A.aki,D.qb,A.cw,A.T)
D.fJy=new B.pQ("Comet",A.n2,D.qb,A.by,A.T)
D.bBk=new C.a0(983669,"MaterialIcons",!1)
D.fJD=new B.pQ("Shake",D.bBk,D.qb,A.cr,A.T)
D.fJF=new B.pQ("Pop",A.Fp,D.qb,A.bc,A.T)
D.fJv=new B.pQ("Wash",A.MM,D.qb,A.p9,A.T)
D.mm=new C.bq(D.dVo,[D.fJu,D.fJq,D.fJB,D.fJx,D.fJC,D.fJz,D.fJw,D.fJE,D.fJs,D.fJt,D.fJr,D.fJA,D.fJy,D.fJD,D.fJF,D.fJv],C.ax("bq<n,pQ>"))
D.dWW={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.BR=new C.bq(D.dWW,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dVA={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.yZ=new B.ID(0,"tv")
D.eDy=new B.lX("Samsung Neo QLED 8K",D.yZ,F.E_,A.aW)
D.eDp=new B.lX("LG OLED evo G5",D.yZ,A.e8,A.fX)
D.eDg=new B.lX("Sony Bravia 9",D.yZ,A.qn,A.bq)
D.eDk=new B.lX("Apple TV 4K",D.yZ,A.e2,A.bW)
D.eDh=new B.lX("Bang and Olufsen Beovision",D.yZ,F.DI,F.rQ)
D.HW=new B.ID(1,"iphone")
D.aKJ=new B.lX("iPhone 18 Pro Max",D.HW,D.aem,A.c8)
D.vR=new B.ID(3,"fold")
D.bhO=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eDu=new B.lX("iPhone Fold",D.vR,D.bhO,A.b4)
D.uc=new B.ID(2,"android")
D.b4G=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.eDv=new B.lX("Samsung Galaxy S26 Ultra",D.uc,D.b4G,A.d7)
D.bbL=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eDn=new B.lX("Samsung Galaxy Z Fold7",D.vR,D.bbL,A.cv)
D.eDj=new B.lX("Google Pixel 10 Pro XL",D.uc,A.dL,A.bn)
D.eDr=new B.lX("Xiaomi 16 Ultra",D.uc,A.lx,A.cb)
D.eDm=new B.lX("Huawei Mate 80 Pro Max",D.uc,A.eM,A.aB)
D.eDi=new B.lX("OPPO Find X9 Ultra",D.uc,A.ec,A.bc)
D.eDA=new B.lX("Honor Magic V5",D.vR,A.dp,A.ct)
D.eDo=new B.lX("vivo X300 Pro",D.uc,A.hs,A.cw)
D.RH=new B.ID(4,"tablet")
D.eDt=new B.lX("iPad Pro M5",D.RH,A.dL,A.aW)
D.a5d=new B.ID(5,"reader")
D.eDB=new B.lX("Kindle Scribe",D.a5d,A.et,A.bq)
D.z_=new B.ID(6,"computer")
D.eDs=new B.lX("MacBook Pro M5 Max",D.z_,A.dL,A.c8)
D.eDx=new B.lX("iMac 32 inch",D.z_,A.bW,A.cv)
D.eDq=new B.lX("Pro Display XDR 8K",D.z_,A.lx,A.b7)
D.eDl=new B.lX("Sony Laser Projector",D.z_,A.cC,A.dN)
D.eDw=new B.lX("Luxury car touchscreen",D.z_,M.mL,A.aB)
D.eDz=new B.lX("Apple Vision Pro",D.z_,A.ka,A.by)
D.lL=new C.bq(D.dVA,[D.eDy,D.eDp,D.eDg,D.eDk,D.eDh,D.aKJ,D.eDu,D.eDv,D.eDn,D.eDj,D.eDr,D.eDm,D.eDi,D.eDA,D.eDo,D.eDt,D.eDB,D.eDs,D.eDx,D.eDq,D.eDl,D.eDw,D.eDz],C.ax("bq<n,lX>"))
D.dVM={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bk6=new B.fJ(20,4,13,!1)
D.bkx=new B.fJ(14,5,13.5,!1)
D.bko=new B.fJ(9,2.4,10,!1)
D.bkC=new B.fJ(7,5,12.5,!1)
D.bkr=new B.fJ(8,3.5,12,!1)
D.bk2=new B.fJ(15,2,6,!1)
D.bkA=new B.fJ(45,6,13.5,!0)
D.bki=new B.fJ(10,8,13.5,!1)
D.bka=new B.fJ(25,3,12,!0)
D.bkg=new B.fJ(35,4,12,!0)
D.bkh=new B.fJ(40,4.5,9.5,!0)
D.bkj=new B.fJ(55,3,9,!0)
D.bk3=new B.fJ(18,3,9,!1)
D.bkz=new B.fJ(22,4,13.5,!1)
D.bks=new B.fJ(16,5,13.5,!1)
D.bke=new B.fJ(30,4,9,!0)
D.bkL=new B.fJ(5,3.5,13,!1)
D.bkm=new B.fJ(25,3,13.5,!0)
D.bkv=new B.fJ(14,2.5,9,!1)
D.bkl=new B.fJ(6,6,13,!1)
D.bkD=new B.fJ(30,1.2,5,!0)
D.bkK=new B.fJ(35,3,4.5,!0)
D.bkG=new B.fJ(20,4.5,7.5,!0)
D.bkk=new B.fJ(55,5.5,13.5,!0)
D.bk1=new B.fJ(45,5.5,13.5,!0)
D.bkw=new B.fJ(40,5.5,13.5,!0)
D.bkJ=new B.fJ(60,6,13.5,!0)
D.aeL=new B.fJ(28,4,7,!0)
D.EC=new B.fJ(25,4,7,!0)
D.bkd=new B.fJ(30,4,7,!0)
D.bk8=new B.fJ(22,4,7,!0)
D.bk9=new B.fJ(24,4,7,!0)
D.bkn=new B.fJ(60,3,5.5,!0)
D.bk4=new B.fJ(18,9,14,!0)
D.bkb=new B.fJ(25,9,14,!0)
D.aeM=new B.fJ(30,8,14,!0)
D.bk7=new B.fJ(20,8,14,!0)
D.bkf=new B.fJ(30,9,14,!0)
D.bkE=new B.fJ(22,5,9.5,!0)
D.bk5=new B.fJ(30,2.5,10.5,!0)
D.bkt=new B.fJ(50,5.5,13.5,!0)
D.bkI=new B.fJ(12,2,9.5,!1)
D.bkq=new B.fJ(16,1.3,9.5,!0)
D.bkB=new B.fJ(40,2.5,7,!0)
D.bkH=new B.fJ(60,1.2,4.8,!0)
D.bkF=new B.fJ(18,5,13.5,!0)
D.bky=new B.fJ(8,2,9.5,!1)
D.bkp=new B.fJ(12,2.5,8,!1)
D.bkc=new B.fJ(20,3.5,13.5,!0)
D.bku=new B.fJ(3.5,3,13,!1)
D.yz=new C.bq(D.dVM,[D.bk6,D.bkx,D.bko,D.bkC,D.bkr,D.bk2,D.bkA,D.bki,D.bka,D.bkg,D.bkh,D.bkj,D.bk3,D.bkz,D.bks,D.bke,D.bkL,D.bkm,D.bkv,D.bkl,D.bkD,D.bkK,D.bkG,D.bkk,D.bk1,D.bkw,D.bkJ,D.aeL,D.EC,D.bkd,D.EC,D.bk8,D.EC,D.bk9,D.aeL,D.EC,D.bkn,D.bk4,D.bkb,D.aeM,D.bk7,D.bkf,D.bkE,D.bk5,D.bkt,D.bkI,D.bkq,D.bkB,D.bkH,D.EC,D.aeM,D.bkF,D.bky,D.bkp,D.bkc,D.bku],C.ax("bq<n,fJ>"))
D.dVn={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eum=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ec8=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ec3=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ena=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eo6=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.en6=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eak=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ela=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.euv=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eor=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eeV=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ea2=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ee_=new C.z("Movement","They pull your legs together and help you balance.")
D.efM=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ecg=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.es7=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eta=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ekW=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.esV=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ejG=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eoz=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ea9=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eg8=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eog=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ejZ=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.et2=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.emD=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eai=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ep6=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.erL=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eq3=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.e8N=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eml=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.emp=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.egM=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ecm=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.efB=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.elj=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eqL=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eus=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eow=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.e8z=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.elu=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.e9a=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.er0=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.es3=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.elU=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.erf=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eab=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.esz=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.edr=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eqs=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.egu=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ejV=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eoQ=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.esK=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.esB=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.esG=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ekn=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.epD=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eq0=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eso=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.elT=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eil=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ehc=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.emg=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eoJ=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eiQ=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eju=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.edL=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.es_=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eex=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.e97=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.egL=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.e92=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ecG=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.egQ=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eeG=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ep2=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.efP=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eu9=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ehl=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ekh=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.emK=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eeN=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eez=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dh0=new C.bq(D.dVn,[D.eum,D.ec8,D.ec3,D.ena,D.eo6,D.en6,D.eak,D.ela,D.euv,D.eor,D.eeV,D.ea2,D.ee_,D.efM,D.ecg,D.es7,D.eta,D.ekW,D.esV,D.ejG,D.eoz,D.ea9,D.eg8,D.eog,D.ejZ,D.et2,D.emD,D.eai,D.ep6,D.erL,D.eq3,D.e8N,D.eml,D.emp,D.egM,D.ecm,D.efB,D.elj,D.eqL,D.eus,D.eow,D.e8z,D.elu,D.e9a,D.er0,D.es3,D.elU,D.erf,D.eab,D.esz,D.edr,D.eqs,D.egu,D.ejV,D.eoQ,D.esK,D.esB,D.esG,D.ekn,D.epD,D.eq0,D.eso,D.elT,D.eil,D.ehc,D.emg,D.eoJ,D.eiQ,D.eju,D.edL,D.es_,D.eex,D.e97,D.egL,D.e92,D.ecG,D.egQ,D.eeG,D.ep2,D.efP,D.eu9,D.ehl,D.ekh,D.emK,D.eeN,D.eez],C.ax("bq<n,+(n,n)>"))
D.dh2=new C.hs(A.G,11)
D.dh7=new C.hs(A.G,30)
D.djV=new B.Tj(null)
D.dnJ=new B.Tn(null)
D.dnK=new B.To(null)
D.dnX=new B.Tp(null)
D.dpY=new B.Tr(null)
D.dpZ=new B.Ts(null)
D.dq_=new B.Tt(null)
D.dqN=new B.TP(null)
D.dqP=new B.U3(null)
D.dqQ=new B.U4(null)
D.dqR=new B.U5(null)
D.dro=new B.Uc(null)
D.dtj=new B.Ug(null)
D.dtk=new B.Ui(null)
D.dtl=new B.Uj(null)
D.dtn=new B.Uk(null)
D.duX=new B.UB(null)
D.duZ=new B.UD(null)
D.dv3=new B.UN(null)
D.dve=new B.UO(null)
D.dvK=new B.UP(null)
D.dxe=new B.UR(null)
D.dyC=new B.UT(null)
D.dyD=new B.UU(null)
D.dzY=new B.UX(null)
D.dPR=new B.UY(null)
D.dPS=new B.V_(null)
D.dPT=new B.V2(null)
D.dPU=new B.V3(null)
D.dRN=new B.Vb(null)
D.dRO=new B.Vc(null)
D.dRW=new B.Vj(null)
D.dS4=new B.Vn(null)
D.dS5=new B.Vo(null)
D.dS6=new B.a7h(null)
D.dSH=new B.Vq(null)
D.dU9=new B.Vu(null)
D.dXm=new C.u(0,118)
D.aEw=new C.u(0,13)
D.dXn=new C.u(0,17)
D.dXq=new C.u(0,330)
D.dXt=new C.u(0,-13)
D.aEC=new C.u(0,-14)
D.dXu=new C.u(0,-17)
D.dXv=new C.u(0,-18)
D.dXw=new C.u(0,-19)
D.dXx=new C.u(0,-20)
D.dXA=new C.u(0,-26)
D.dXB=new C.u(0,-28)
D.dXC=new C.u(0,-31)
D.dXD=new C.u(0,-32)
D.vK=new C.u(0,-6)
D.dXE=new C.u(0,-6771)
D.dXF=new C.u(0,-9)
D.dXH=new C.u(-9.5,-11)
D.dXI=new C.u(10,20)
D.dXK=new C.u(10,-13)
D.dXL=new C.u(10,-22)
D.dXM=new C.u(10,-4)
D.a48=new C.u(11,8)
D.dXO=new C.u(12,2)
D.dXP=new C.u(14,0)
D.dXQ=new C.u(14,12)
D.aEG=new C.u(14,8)
D.dXR=new C.u(14,-17)
D.dXS=new C.u(14,-18)
D.aEH=new C.u(14,-3)
D.aEI=new C.u(14,-4)
D.dXT=new C.u(15,0)
D.dXU=new C.u(15,-12)
D.dXV=new C.u(16,-8)
D.dXW=new C.u(18,14)
D.dXX=new C.u(18,-12)
D.aEM=new C.u(20,0)
D.dY2=new C.u(20,15)
D.dY3=new C.u(20,-17)
D.dY4=new C.u(20,-3)
D.dY5=new C.u(21,8)
D.dY7=new C.u(22,10)
D.aEN=new C.u(22,8)
D.dY8=new C.u(24,0)
D.dY9=new C.u(24,2)
D.dYb=new C.u(24,-18)
D.dYc=new C.u(24,-22)
D.dYd=new C.u(25,8)
D.dYe=new C.u(26,0)
D.dYk=new C.u(28,-30)
D.dYp=new C.u(30,18)
D.dYq=new C.u(30,2)
D.dYr=new C.u(31,19)
D.dYs=new C.u(32,0)
D.aEQ=new C.u(34,0)
D.aER=new C.u(34,-32)
D.Hx=new C.u(36,0)
D.dYx=new C.u(3,-1)
D.dYA=new C.u(40,3)
D.dYE=new C.u(4,11)
D.dYH=new C.u(4,-2)
D.dYL=new C.u(5,0)
D.dYM=new C.u(5,17)
D.dYN=new C.u(5,6)
D.dYQ=new C.u(6,11)
D.dYW=new C.u(8,7)
D.dYX=new C.u(8,-10)
D.dYY=new C.u(8,-14)
D.dYZ=new C.u(8,-3)
D.aEV=new C.u(9,0)
D.dZ1=new C.u(-20.5,-17.6)
D.dZ2=new C.u(-9,18.5)
D.dZ5=new C.u(-2.6,-1)
D.dZ6=new C.u(1.9,-0.8)
D.dZ9=new C.u(-0.22,0.09)
D.dZe=new C.u(2.6,1)
D.dZl=new C.u(-9,12.2)
D.dZD=new C.u(-9,20.5)
D.dZV=new C.u(-10,0)
D.dZW=new C.u(-10,12)
D.aF1=new C.u(-10,4)
D.dZX=new C.u(-11,-2)
D.dZY=new C.u(-13,-5)
D.dZZ=new C.u(-14,0)
D.e__=new C.u(-14,13)
D.e_0=new C.u(-14,2)
D.e_1=new C.u(-14,-12)
D.e_2=new C.u(-14,-19)
D.e_3=new C.u(-14,-23)
D.e_4=new C.u(-15,6)
D.e_5=new C.u(-16,14)
D.e_6=new C.u(-16,-8)
D.e_7=new C.u(-17,10)
D.e_8=new C.u(-17,-18)
D.e_9=new C.u(-17,-8)
D.e_b=new C.u(-18,20)
D.e_c=new C.u(-18,-9)
D.aF3=new C.u(-20,0)
D.e_e=new C.u(-20,16)
D.e_f=new C.u(-20,-9)
D.Rb=new C.u(-22,8)
D.e_g=new C.u(-22,-10)
D.e_h=new C.u(-22,-11)
D.e_i=new C.u(-24,10)
D.e_j=new C.u(-24,11)
D.e_k=new C.u(-24,14)
D.e_l=new C.u(-24,-22)
D.e_m=new C.u(-25,-11)
D.e_n=new C.u(-26,0)
D.e_o=new C.u(-26,-18)
D.e_p=new C.u(-2,9)
D.e_q=new C.u(-2,-10)
D.e_r=new C.u(-2,-20)
D.e_s=new C.u(-2,-9)
D.e_t=new C.u(-32,0)
D.aF5=new C.u(-34,0)
D.e_y=new C.u(-40,3)
D.e_A=new C.u(-4,11)
D.e_B=new C.u(-4,-17)
D.e_C=new C.u(-4,-2)
D.e_E=new C.u(-5,0)
D.e_F=new C.u(-5,20)
D.e_G=new C.u(-5,6)
D.e_H=new C.u(-6,26)
D.e_I=new C.u(-6,6)
D.e_J=new C.u(-6,-42)
D.e_K=new C.u(-7,-19)
D.e_L=new C.u(-7,-24)
D.e_M=new C.u(-8,-9)
D.a4c=new C.u(-9,0)
D.e_N=new C.u(-9,1)
D.e_O=new C.u(-9,-23)
D.f73=new C.x("Thinking\u2026",null,A.hn,null,null,null,null,null,null,null,null,null)
D.e0K=new C.C(A.ke,D.f73,null)
D.fmw=new C.x("Start from a ready-made board",null,A.fW,null,null,null,null,null,null,null,null,null)
D.e0U=new C.C(A6.v0,D.fmw,null)
D.brS=new C.Q(4,0,4,14)
D.f2B=new C.F(!0,A.ay,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Z=new C.x("Games and little helpers for a spare minute.",null,D.f2B,null,null,null,null,null,null,null,null,null)
D.e11=new C.C(D.brS,D.f7Z,null)
D.fjt=new C.x("Tap to throw in a star",null,A.kt,null,null,null,null,null,null,null,null,null)
D.b2f=new C.cr(A.A,null,null,D.fjt,null)
D.e6I=new C.cK(0,null,0,14,null,null,D.b2f,null)
D.d1o=w([A.iH,A.bo],x.O)
D.aJX=new C.bR(A.A,0.5,A.x,null,0,D.d1o,null,null)
D.e7q=new C.bR(A.A,0.5,A.x,null,0,D.awj,null,null)
D.cUb=w([A.c,A.bI],x.O)
D.e7s=new C.bR(A.A,0.5,A.x,null,0,D.cUb,null,null)
D.e7t=new C.bR(A.A,0.5,A.x,null,0,K.avq,null,null)
D.d8F=w([A.bW,A.ka],x.O)
D.aJY=new C.bR(A.A,0.5,A.x,null,0,D.d8F,null,null)
D.czL=w([A.c,A.bW],x.O)
D.e7x=new C.bR(A.rx,0.5,A.x,null,0,D.czL,null,null)
D.b9c=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.ben=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cTf=w([D.b9c,D.adY,D.ben],x.O)
D.d_u=w([0,0.7,1],x.n)
D.e7z=new C.bR(A.rx,0.5,A.x,null,0,D.cTf,D.d_u,null)
D.cqi=w([A.oj,A.aJ,A.K],x.O)
D.d5C=w([0.3,0.7,1],x.n)
D.e7B=new C.bR(A.A,0.5,A.x,null,0,D.cqi,D.d5C,null)
D.bhR=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d6W=w([A.f5,D.bhR],x.O)
D.e7D=new C.bR(A.rx,0.5,A.x,null,0,D.d6W,null,null)
D.ct2=w([A.dL,A.cC],x.O)
D.e7E=new C.bR(A.A,0.5,A.x,null,0,D.ct2,null,null)
D.cOS=w([A.oj,A.aJ,A.fC],x.O)
D.e7F=new C.bR(A.A,0.5,A.x,null,0,D.cOS,null,null)
D.cHu=w([A.fZ,A.aM,A.dj],x.O)
D.e7H=new C.bR(A.rx,0.5,A.x,null,0,D.cHu,null,null)
D.d1U=w([A.ka,M.mL],x.O)
D.e7I=new C.bR(A.rx,0.5,A.x,null,0,D.d1U,null,null)
D.b9p=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b7z=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cR5=w([D.b9p,D.b7z],x.O)
D.e7K=new C.bR(A.A,0.5,A.x,null,0,D.cR5,null,null)
D.bdQ=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bbS=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bbW=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.daS=w([D.bdQ,D.bbS,D.bbW],x.O)
D.cNH=w([0,0.65,1],x.n)
D.e7L=new C.bR(K.a8C,0.5,A.x,null,0,D.daS,D.cNH,null)
D.e7M=new C.bR(A.A,0.5,A.x,null,0,D.asY,null,null)
D.d7V=w([A.lu,A.aJ,A.fC],x.O)
D.e7Q=new C.bR(A.A,0.5,A.x,null,0,D.d7V,null,null)
D.d9q=w([A.ka,A.hB],x.O)
D.e7T=new C.bR(A.A,0.5,A.x,null,0,D.d9q,null,null)
D.aK2=new C.aV(9,9)
D.e81=new C.aV(1.4,1.4)
D.e8H=new C.z(0,-4)
D.edo=new C.z(0.22,4)
D.ekf=new C.z(0.8,-4)
D.esC=new C.z(0.58,4)
D.evc=new C.bx("Moon",1.62,4291941851)
D.evK=new C.bx("Neptune",11.15,4284524026)
D.ewj=new C.bx("Sun",274,4294688548)
D.ewy=new C.bx("Mercury",3.7,4288455599)
D.ewE=new C.bx("Earth",9.81,4281908728)
D.ewG=new C.bx("Mars",3.71,4294472049)
D.ewZ=new C.bx("Venus",8.87,4294759245)
D.ex3=new C.bx("Saturn",10.44,4294829706)
D.exn=new C.bx("Jupiter",24.79,4294677052)
D.eAJ=new C.aa(10,-8,18,-2)
D.eAK=new C.aa(14,-14,20,14)
D.eAL=new C.aa(20,-2,30,2)
D.eAN=new C.aa(4,-13,30,-3)
D.eAP=new C.aa(8,-7,12,7)
D.eAV=new C.aa(-12,12,12,19)
D.eAW=new C.aa(-12,14,12,22)
D.eAX=new C.aa(-12,-22,12,8)
D.eAY=new C.aa(-12,-25,12,19)
D.eAZ=new C.aa(-12,-26,12,-6)
D.eB_=new C.aa(-12,-4,12,14)
D.eB0=new C.aa(-12,-6,10,6)
D.eB1=new C.aa(-14,20,14,24)
D.eB2=new C.aa(-14,6,14,10)
D.eB3=new C.aa(-14,-17,14,15)
D.eB4=new C.aa(-14,-26,14,18)
D.eB5=new C.aa(-14,-4,14,20)
D.eB6=new C.aa(-15,-29,15,25)
D.eB7=new C.aa(-16,-16,16,16)
D.eB8=new C.aa(-16,-22,-9,18)
D.eB9=new C.aa(-16,-24,16,-10)
D.eBa=new C.aa(-16,-2,16,20)
D.eBc=new C.aa(-18,20,18,24)
D.eBd=new C.aa(-18,-18,18,20)
D.eBe=new C.aa(-20,12,20,22)
D.eBf=new C.aa(-20,-28,20,26)
D.eBg=new C.aa(-22,14,22,18)
D.aKr=new C.aa(-22,-26,22,24)
D.eBh=new C.aa(-22,-3,22,3)
D.eBi=new C.aa(-22,-4,22,12)
D.eBj=new C.aa(-24,-12,10,22)
D.eBk=new C.aa(-24,-14,22,8)
D.eBl=new C.aa(-24,-6,24,20)
D.aKs=new C.aa(-24,-9,24,9)
D.eBm=new C.aa(-25,14,25,19)
D.eBn=new C.aa(-26,-14,14,8)
D.eBo=new C.aa(-26,-4,26,20)
D.eBp=new C.aa(-26,-6,4,6)
D.aKt=new C.aa(-28,-13,28,13)
D.eBq=new C.aa(-28,-16,28,16)
D.eBr=new C.aa(-28,-16,28,8)
D.eBs=new C.aa(-28,-22,28,22)
D.eBt=new C.aa(-30,-12,30,14)
D.eBu=new C.aa(-30,-14,0,14)
D.eBv=new C.aa(-30,-18,30,20)
D.eBw=new C.aa(-30,-28,30,14)
D.eBx=new C.aa(-30,-2,30,18)
D.eBy=new C.aa(-30,-4,30,18)
D.eBz=new C.aa(-32,-17,32,17)
D.eBA=new C.aa(-32,-28,32,18)
D.eBB=new C.aa(-33,-21,33,17)
D.eBC=new C.aa(-34,14,34,26)
D.a55=new C.aa(-34,-18,34,18)
D.eBD=new C.aa(-34,-4,34,7)
D.eBE=new C.aa(-36,-24,36,20)
D.eBF=new C.aa(-38,-22,38,22)
D.eBG=new C.aa(-3,12,3,22)
D.eBH=new C.aa(-3,5,3,15)
D.eBJ=new C.aa(-46,-34,46,28)
D.eBK=new C.aa(-48,-3,48,3)
D.eBN=new C.aa(-6,18,24,24)
D.eBO=new C.aa(-6,5,6,12)
D.eBP=new C.aa(-6,-22,6,-15)
D.eBQ=new C.aa(-9,-16,9,22)
D.eBR=new C.aa(-4.5,-24,4.5,-21.2)
D.eBT=new C.aa(14,-9,17.5,9)
D.dWQ={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aLj=new C.eV(D.dWQ,5,x.R)
D.dWv={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eED=new C.eV(D.dWv,10,x.R)
D.eGA=new C.at(24,44)
D.eGF=new C.at(300,300)
D.eGZ=new C.at(54,38)
D.eH5=new C.at(66,38)
D.b3t=new C.fh(2,null,null,null,null,A.by,null,null,null,null)
D.eI1=new C.a6(16,16,D.b3t,null)
D.aMi=new C.hH(3,12,12,0.82,null)
D.foa=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aMt=new C.b1(D.foa,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.d1X=w([A.cr,A.cp,A.bc,A.aW,A.p9,A.cr],x.O)
D.eNU=new C.fS(A.A,0,6.283185307179586,A.x,D.d1X,null,null)
D.eWC=new C.F(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pj,null,null,null)
D.eOY=new C.eo("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.eWC)
D.aOS=new C.F(!0,A.ay,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOZ=new C.eo("What we see",null,null,A.cO,null,null,null,null,null,null,D.aOS)
D.eU1=new C.F(!0,A2.V8,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP1=new C.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eU1)
D.eYO=new C.F(!0,A.k5,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP7=new C.eo("AI",null,null,A.cO,null,null,null,null,null,null,D.eYO)
D.eTN=new C.F(!0,A.c_,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP8=new C.eo("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eTN)
D.aNg=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePn=new C.F(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePV=new C.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new C.F(!0,A.ct,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQJ=new C.F(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQO=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR3=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRw=new C.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRS=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS1=new C.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF8=new C.cP(A.hE,A.dB,6)
D.cWP=w([D.eF8],x.q)
D.eSk=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cWP,null,null,null)
D.eSn=new C.F(!0,A.ey,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSq=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSs=new C.F(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSR=new C.F(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aND=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTa=new C.F(!0,A.ay,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTb=new C.F(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU4=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new C.F(!0,A.ay,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV2=new C.F(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFb=new C.cP(A.aX,A.J,3)
D.awz=w([D.eFb],x.q)
D.eV5=new C.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awz,null,null,null)
D.eVa=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVR=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pj,null,null,null)
D.eWj=new C.F(!0,A.ay,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWr=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWR=new C.F(!0,A.uK,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXp=new C.F(!0,A.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXu=new C.F(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXz=new C.F(!0,A.ay,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXF=new C.F(!0,A.ay,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY6=new C.F(!0,A.c_,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new C.F(!0,A.mN,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYk=new C.F(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYz=new C.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOi=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF_=new C.cP(A.w,A.J,5)
D.cLs=w([D.eF_],x.q)
D.eZ8=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cLs,null,null,null)
D.eZd=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awz,null,null,null)
D.eZs=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new C.F(!0,A.fv,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZO=new C.F(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new C.F(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new C.F(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0s=new C.F(!0,A.ay,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new C.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOD=new C.F(!0,A.ay,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f14=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1d=new C.F(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1k=new C.F(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IC=new C.F(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOP=new C.F(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new C.F(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2r=new C.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a72=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new C.F(!0,A.uK,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f38=new C.F(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSv=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new C.x("\u26a0\ufe0f ",null,D.eSv,null,null,null,null,null,null,null,null,null)
D.f3H=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.IB,null,null,null,null,null,null,null,null,null)
D.f47=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mv,null,null,null,null,null,null,null,null,null)
D.f58=new C.x("Pick one, then change it and see what happens.",null,A.IB,null,null,null,null,null,null,null,null,null)
D.f5c=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eTz=new C.F(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eTz,null,null,null,null,null,null,null,null,null)
D.f6u=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a6k,null,null,null,null,null,null,null,null,null)
D.f7B=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.f8a=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f8f=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.f8N=new C.x("Make it yours",null,A.kU,null,null,null,null,null,null,null,null,null)
D.f91=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6s,null,null,null,null,null,null,null,null,null)
D.eXK=new C.F(!0,A.j3,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbc=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eXK,null,null,null,null,null,null,null,null,null)
D.fbr=new C.x("YOUR DECODING",null,Q.mv,null,null,null,null,null,null,null,null,null)
D.fbD=new C.x("5G",null,R.aNG,null,null,null,null,null,null,null,null,null)
D.f_3=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcK=new C.x("WHAT HAPPENS",null,D.f_3,null,null,null,null,null,null,null,null,null)
D.fen=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new C.x("Change the words and pictures on the three slabs.",null,A.IB,null,null,null,null,null,null,null,null,null)
D.ffd=new C.x("All the parts and wires will be removed.",null,A.hz,null,null,null,null,null,null,null,null,null)
D.ffx=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fg6=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fgX=new C.x("INTERCEPTED",null,Q.mv,null,null,null,null,null,null,null,null,null)
D.fhg=new C.x("\ud83c\udfaf Challenges",null,A.du,null,null,null,null,null,null,null,null,null)
D.fhL=new C.x("Remove this part",null,V.aNj,null,null,null,null,null,null,null,null,null)
D.fi2=new C.x("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.eZy=new C.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fih=new C.x("How the Lab works",null,D.eZy,null,null,null,null,null,null,null,null,null)
D.eRg=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new C.x("Electronics Lab",null,D.eRg,null,null,null,null,A.a2,null,1,null,null)
D.fiA=new C.x("?",null,K.aOM,null,null,null,null,null,null,null,null,null)
D.eXE=new C.F(!0,A.aW,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new C.x("Planet Earth",null,D.eXE,null,null,null,null,null,null,null,null,null)
D.fjN=new C.x("Ready-made circuits",null,A.du,null,null,null,null,null,null,null,null,null)
D.fkm=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fkF=new C.x("UNIVERSE EXPLORER",null,I.a6r,null,null,null,null,null,null,null,null,null)
D.fn3=new C.x("SECRET VERSION",null,Q.mv,null,null,null,null,null,null,null,null,null)
D.f1o=new C.F(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnA=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f1o,null,null,null,null,null,null,null,null,null)
D.foM=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a6k,null,null,null,null,null,null,null,null,null)
D.fpe=new C.x("NGMY",null,A.uk,null,null,null,null,null,null,null,null,null)
D.fpq=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.SO,null,null,null,null,null,null,null,null,null)
D.fpN=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.lk,null,null,null,null,null,null,null,null,null)
D.fqJ=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.IB,null,null,null,null,null,null,null,null,null)
D.fqL=new C.x("TOOLBOX",null,I.a6r,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h6e=null
$.h6d=null
$.hcd=0
$.hDU=C.V(x.N,x.k)
$.hEu=C.V(x.N,x.k)
$.h5A=null
$.hEf=C.V(x.N,x.k)
$.hFh=C.V(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9y","bC7",()=>{var v="led"
return C.a([B.awH("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f9J(),v),B.awH("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f9K(),v),B.awH("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f9L(),v),B.awH("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.f9S(),v),B.awH("Not both","Make the light go OFF only when both switches are ON.",2,new B.f9T(),v),B.awH("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.f9U(),"buzzer")],C.ax("P<b90>"))})
w($,"i9Z","bC8",()=>C.a([B.op("UNIVERSE","Earth, space and gravity",A.a_r,A.aW,new B.fa9()),B.op("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.ZP,A.aW,new B.faa()),B.op("DISCOVERY LAB","Body Explorer: a real 3D human",D.ZG,A.bc,new B.fab()),B.op("TOOLBOX","Converter, clock, games",U.aj6,A.cw,new B.fam()),B.op("MOLECULE MAKER","Join atoms into real molecules",A.My,A.ht,new B.fao()),B.op("DNA LAB","Copy DNA, build a protein",D.ZG,A.bZ,new B.fap()),B.op("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xQ,A.bc,new B.faq()),B.op("BALANCE LAB","Levers, weight and torque",D.bBs,A.aM,new B.far()),B.op("GEAR LAB","Teeth, speed and force",A.Bf,A.cw,new B.fas()),B.op("LASER MAZE","Bend the beam with mirrors",I.aju,A.aB,new B.fat()),B.op("LIGHT MIXER","Match colours with light",D.bzb,A.b7,new B.fau()),B.op("CIPHER LAB","Make and crack secret codes",A.y1,A.aW,new B.fac()),B.op("REACTION LAB","Wire parts together",A.y5,A.bs,new B.fad()),B.op("SPARK PAINTER","Paint with light",A.ZI,A.bZ,new B.fae()),B.op("ROCKET LANDER","Land softly on the pad",A.n2,A.aW,new B.faf()),B.op("ORBIT STUDIO","Slingshot planets",A.mf,A.cw,new B.fag()),B.op("SWARM STUDIO","A living school of fish",A.My,A.bc,new B.fah()),B.op("CHAIN BURST","One tap, a whole chain",A.h4,A.bZ,new B.fai()),B.op("TITLE ANIMATOR","Make a moving title",A.xY,A.cp,new B.faj()),B.op("CIRCUIT LAB","Connect logic, learn it",A.a_8,A.ct,new B.fak()),B.op("MARBLE MUSIC","Marbles ring the notes",D.byS,A.b7,new B.fal()),B.op("ORBIT SEQUENCER","Planets play the tune",D.bBg,A.by,new B.fan())],C.ax("P<bqE>")))
w($,"ibt","q1",()=>{var v,u,t=C.V(x.N,x.dV)
for(v=0;v<76;++v){u=D.PA[v]
t.n(0,u.a,u)}return t})
w($,"i9z","agC",()=>C.a([B.F_("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.f9V()),B.F_("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.f9W()),B.F_("Spin the motor","A battery and a motor in a loop will make it spin.",new B.f9X()),B.F_("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.f9Y()),B.F_("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.f9Z()),B.F_("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.f9M()),B.F_("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.f9N()),B.F_("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.f9O()),B.F_("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.f9P()),B.F_("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.f9Q()),B.F_("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.f9R())],C.ax("P<b91>")))
w($,"ia0","hkw",()=>C.a([B.a_Q("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cb,new B.faC()),B.a_Q("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cr,A.bL,new B.faD()),B.a_Q("Breathe","Calm down in a minute","\ud83e\udee7",A.ht,A.cv,new B.faE()),B.a_Q("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b4,new B.faF()),B.a_Q("Memory Match","Find the pairs","\ud83c\udccf",A.aW,A.c8,new B.faG()),B.a_Q("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cp,A.bn,new B.faH()),B.a_Q("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.aZ,new B.faI()),B.a_Q("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.faJ())],C.ax("P<brY>")))
w($,"ia_","hkv",()=>C.a([B.adZ("EARTH GLOBE","Turn it, tap a country",A.mf,A.aW,new B.fav()),B.adZ("SOLAR SYSTEM","The Sun and its worlds",D.byW,A.aM,new B.faw()),B.adZ("GRAVITY LAB","Drop, weigh, orbit",D.akg,A.cw,new B.fax()),B.adZ("BLACK HOLE","Throw in a star",A.Fe,A.by,new B.fay()),B.adZ("GALAXY","Build, tilt, collide",A.xD,A.fY,new B.faz()),B.adZ("SIZE COMPARE","Earth next to a star",D.bzd,A.bZ,new B.faA()),B.adZ("SEASONS & MOON","Why it is summer",A.v8,A.bs,new B.faB())],C.ax("P<brT>")))})()};
(a=>{a["va9eh0xCsw2Qk3MjcRwmIHXeYdA="]=a.current})($__dart_deferred_initializers__);