((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,Z,A7,A_,A0,I,P,A1,A8,A9,A2,Aa,N,G,Ab,Ac,A3,Ad,V,Ae,Af,Q,Ag,Ah,W,O,U,Ai,Aj,S,L,Ak,M,T,Al,E,F,Am,B={
bx9(d){return B.hGz(d)},
hGz(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bx9=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qC(C.mV(""),d,A.hj,null).cN(0,A.WS),$async$bx9)
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
return C.i($async$bx9,v)},
hS3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.P6[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.ds(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.ix(D.P6,new B.fnb())
if(w==null)w=A.d.gL(D.P6)
s=C.V(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.q_().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiv(w.a,w.b,m,w,s,!1)},
hLP(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.Pv,new B.fe8(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hZP(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.of(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aG(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gU(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q_().ag(0,p)||J.eY(s,o)||J.ac(t)>=8)continue
J.cf(s,o)
n=C.V(a5,a8)
for(a9=0;a9<4;++a9){m=D.d9I[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.f8(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.f8(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cf(t,new C.eW([o,p,k,j,n]));++r}if(J.ac(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gU(a5)
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
a0=J.aW(a0==null?A.cH:a0)
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
return new B.aiv(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hQE(d){var w,v,u=B.fX6()
d.B(u)
for(w=0;w<60;++w)u.uG(0,0.03333333333333333)
v=u.a
return A.d.b8(v,new B.fkk(u))&&!A.d.de(v,new B.fkl())},
hQD(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.V(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.q_().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.d8b,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hF6(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hS2(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q_().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Pv[u]
if(A.d.b8(w,new B.fn8(s)))if(!C.ds(r,s.b.toLowerCase(),0))v=C.ds(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.fn9(e),C.T(w).k("a2<1>")).gal(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fna())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q_().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiv:function aiv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnb:function fnb(){},
fe8:function fe8(){},
fkk:function fkk(d){this.a=d},
fkl:function fkl(){},
fn8:function fn8(d){this.a=d},
fn9:function fn9(d){this.a=d},
fna:function fna(){},
Uq:function Uq(d,e){this.c=d
this.a=e},
bhY:function bhY(d,e,f,g,h){var _=this
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
e0m:function e0m(d){this.a=d},
e0n:function e0n(d,e,f){this.a=d
this.b=e
this.c=f},
e0o:function e0o(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0v:function e0v(d){this.a=d},
e0t:function e0t(d,e){this.a=d
this.b=e},
e0u:function e0u(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e0r:function e0r(d){this.a=d},
e0s:function e0s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0x:function e0x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e0q:function e0q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0I:function e0I(d,e){this.a=d
this.b=e},
bxv(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNt,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
h9t(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.za,A.L,w,w),A.az,C.c3(A.fM,g,A.bw,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.V0,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
Fp:function Fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uz:function uz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
US:function US(d){this.a=d},
aCI:function aCI(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fh$=h
_.kN$=i
_.fM$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
egl:function egl(){},
egF:function egF(d){this.a=d},
egE:function egE(d,e){this.a=d
this.b=e},
egG:function egG(){},
egH:function egH(){},
egn:function egn(d,e,f){this.a=d
this.b=e
this.c=f},
egm:function egm(d,e){this.a=d
this.b=e},
egc:function egc(d){this.a=d},
egd:function egd(d){this.a=d},
ege:function ege(d){this.a=d},
egf:function egf(d){this.a=d},
egg:function egg(d){this.a=d},
egh:function egh(d){this.a=d},
egi:function egi(d){this.a=d},
egj:function egj(d){this.a=d},
egk:function egk(d){this.a=d},
ega:function ega(d){this.a=d},
egb:function egb(d){this.a=d},
eg9:function eg9(d){this.a=d},
egy:function egy(d,e){this.a=d
this.b=e},
egt:function egt(d){this.a=d},
egu:function egu(d){this.a=d},
egq:function egq(d){this.a=d},
egv:function egv(d){this.a=d},
egp:function egp(d){this.a=d},
egw:function egw(d){this.a=d},
egx:function egx(d){this.a=d},
ego:function ego(d){this.a=d},
egz:function egz(d,e){this.a=d
this.b=e},
egs:function egs(d,e){this.a=d
this.b=e},
egA:function egA(d){this.a=d},
egB:function egB(d){this.a=d},
egC:function egC(d){this.a=d},
egD:function egD(d){this.a=d},
egr:function egr(d){this.a=d},
beY:function beY(d,e){this.b=d
this.a=e},
aKy:function aKy(){},
bv7:function bv7(){},
cCa(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cCa=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tP().k9(0,"assets/data/body3d.bin"),$async$cCa)
case 3:d=a1
$.h4S=J.eV(A.dF.gaP(d),d.byteOffset,d.byteLength)
t=C.bFy(d)
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
e=D.cZ5[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a20(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aUT))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b89(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cCa,v)},
aQp:function aQp(d,e,f){this.a=d
this.b=e
this.c=f},
a20:function a20(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b89:function b89(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ti:function Ti(d){this.a=d},
aB7:function aB7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fh$=s
_.kN$=t
_.fM$=u
_.fi$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dBz:function dBz(d){this.a=d},
dBy:function dBy(d,e){this.a=d
this.b=e},
dBb:function dBb(d,e){this.a=d
this.b=e},
dBc:function dBc(){},
dBA:function dBA(){},
dBd:function dBd(d,e){this.a=d
this.b=e},
dBe:function dBe(d){this.a=d},
dBf:function dBf(){},
dBg:function dBg(d){this.a=d},
dBi:function dBi(d,e){this.a=d
this.b=e},
dBh:function dBh(d){this.a=d},
dB8:function dB8(d,e,f){this.a=d
this.b=e
this.c=f},
dB9:function dB9(d){this.a=d},
dBa:function dBa(d){this.a=d},
dBp:function dBp(d){this.a=d},
dBq:function dBq(d,e){this.a=d
this.b=e},
dBr:function dBr(d,e){this.a=d
this.b=e},
dBs:function dBs(d){this.a=d},
dBo:function dBo(d,e){this.a=d
this.b=e},
dBt:function dBt(d,e){this.a=d
this.b=e},
dBn:function dBn(d,e){this.a=d
this.b=e},
dBu:function dBu(d){this.a=d},
dBm:function dBm(d){this.a=d},
dBv:function dBv(d){this.a=d},
dBl:function dBl(d){this.a=d},
dBw:function dBw(d){this.a=d},
dBk:function dBk(d){this.a=d},
dBx:function dBx(d){this.a=d},
dBj:function dBj(d){this.a=d},
aJA:function aJA(){},
aJB:function aJB(){},
bYO:function bYO(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bYP:function bYP(d,e){this.a=d
this.b=e},
bYQ:function bYQ(d){this.a=d},
awB(d,e,f,g,h){return new B.b8S(d,e,f,g,h)},
fO4(d,e,f,g,h,i){return $.hCw.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cIX(d,e,f,i,g,h))},
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
n9:function n9(d,e,f){this.a=d
this.b=e
this.c=f},
b8S:function b8S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8G:function f8G(){},
f8H:function f8H(){},
f8I:function f8I(){},
f8P:function f8P(){},
f8Q:function f8Q(){},
f8R:function f8R(){},
Tn:function Tn(d){this.a=d},
aBa:function aBa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fh$=m
_.kN$=n
_.fM$=o
_.fi$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dDK:function dDK(d){this.a=d},
dDo:function dDo(d,e){this.a=d
this.b=e},
dDr:function dDr(){},
dDL:function dDL(){},
dDm:function dDm(d,e){this.a=d
this.b=e},
dDn:function dDn(d,e){this.a=d
this.b=e},
dDs:function dDs(d,e,f){this.a=d
this.b=e
this.c=f},
dDh:function dDh(){},
dDi:function dDi(){},
dDj:function dDj(d){this.a=d},
dDk:function dDk(d,e){this.a=d
this.b=e},
dDl:function dDl(d,e,f){this.a=d
this.b=e
this.c=f},
dDt:function dDt(){},
dDu:function dDu(d,e){this.a=d
this.b=e},
dDv:function dDv(d){this.a=d},
dDq:function dDq(d,e){this.a=d
this.b=e},
dDp:function dDp(d){this.a=d},
dDg:function dDg(d,e,f){this.a=d
this.b=e
this.c=f},
dDE:function dDE(d){this.a=d},
dDD:function dDD(d){this.a=d},
dDF:function dDF(d){this.a=d},
dDC:function dDC(d){this.a=d},
dDA:function dDA(d){this.a=d},
dDB:function dDB(d){this.a=d},
dDz:function dDz(d){this.a=d},
dDw:function dDw(d){this.a=d},
dDy:function dDy(d){this.a=d},
dDG:function dDG(d,e){this.a=d
this.b=e},
dDH:function dDH(d,e){this.a=d
this.b=e},
dDI:function dDI(d){this.a=d},
dDx:function dDx(d){this.a=d},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
b99:function b99(d,e){this.b=d
this.a=e},
cIX:function cIX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJG:function aJG(){},
buR:function buR(){},
hto(){return new B.Mv(null)},
oo(d,e,f,g,h){return new B.bqt(d,e,f,g,h)},
boV(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fOA(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Mv:function Mv(d){this.a=d},
JB:function JB(d,e){this.a=d
this.b=e},
A0:function A0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBr:function aBr(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dJb:function dJb(d,e){this.a=d
this.b=e},
dJa:function dJa(d){this.a=d},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJc:function dJc(d){this.a=d},
bqt:function bqt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f96:function f96(){},
f97:function f97(){},
f98:function f98(){},
f9j:function f9j(){},
f9l:function f9l(){},
f9m:function f9m(){},
f9n:function f9n(){},
f9o:function f9o(){},
f9p:function f9p(){},
f9q:function f9q(){},
f9r:function f9r(){},
f99:function f99(){},
f9a:function f9a(){},
f9b:function f9b(){},
f9c:function f9c(){},
f9d:function f9d(){},
f9e:function f9e(){},
f9f:function f9f(){},
f9g:function f9g(){},
f9h:function f9h(){},
f9i:function f9i(){},
f9k:function f9k(){},
boW:function boW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQA:function eQA(d){this.a=d},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQx:function eQx(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQy:function eQy(d,e){this.a=d
this.b=e},
adB:function adB(d,e,f){this.c=d
this.d=e
this.a=f},
acv:function acv(d,e,f){this.c=d
this.d=e
this.a=f},
P9:function P9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpU:function bpU(d,e){this.b=d
this.a=e},
bpp:function bpp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7R:function b7R(d,e){this.b=d
this.a=e},
aFH:function aFH(d,e){this.c=d
this.a=e},
aFI:function aFI(d,e,f){var _=this
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
eQg:function eQg(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQe:function eQe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQd:function eQd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQb:function eQb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQa:function eQa(d,e,f){this.a=d
this.b=e
this.c=f},
eQc:function eQc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eQ9:function eQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQo:function eQo(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQm:function eQm(d,e,f){this.a=d
this.b=e
this.c=f},
eQs:function eQs(d,e,f){this.a=d
this.b=e
this.c=f},
eQl:function eQl(d){this.a=d},
eQh:function eQh(d){this.a=d},
eQt:function eQt(d){this.a=d},
eQu:function eQu(d){this.a=d},
eQk:function eQk(d,e){this.a=d
this.b=e},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQ7:function eQ7(){},
eQ8:function eQ8(){},
boA:function boA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bo1:function bo1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8w:function b8w(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bo3:function bo3(d,e,f){this.b=d
this.c=e
this.a=f},
brX:function brX(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLn:function aLn(){},
haR(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ae(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aK(0,t*t*t).ae(0,v.aK(0,s*t*f)).ae(0,u.aK(0,s*f*f)).ae(0,e.aK(0,f*f*f))},
beX(d,e,f,g,h,i){return $.hD6.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.ddq(d,e,f,i,g,h))},
a_d:function a_d(d,e){this.a=d
this.b=e},
pO:function pO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qw:function qw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BS:function BS(d,e){this.a=d
this.b=e},
Yd:function Yd(d,e){this.a=d
this.b=e},
adr:function adr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_q:function a_q(d,e,f,g,h,i){var _=this
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
aan:function aan(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaE:function aaE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acz:function acz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beV:function beV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
ddu:function ddu(d){this.a=d},
ddv:function ddv(d){this.a=d},
ddr:function ddr(d,e){this.a=d
this.b=e},
dds:function dds(d){this.a=d},
ddt:function ddt(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddx:function ddx(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddA:function ddA(d){this.a=d},
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddD:function ddD(d){this.a=d},
ddE:function ddE(d){this.a=d},
Fc:function Fc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UR:function UR(d){this.a=d},
aCH:function aCH(d,e,f,g,h,i,j){var _=this
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
efG:function efG(d){this.a=d},
efv:function efv(d){this.a=d},
efx:function efx(){},
efy:function efy(){},
efB:function efB(){},
efC:function efC(d,e,f){this.a=d
this.b=e
this.c=f},
efD:function efD(d){this.a=d},
efE:function efE(d){this.a=d},
efz:function efz(){},
efA:function efA(d){this.a=d},
eg5:function eg5(d){this.a=d},
efF:function efF(){},
efr:function efr(d){this.a=d},
efI:function efI(d){this.a=d},
efH:function efH(d){this.a=d},
efK:function efK(){},
efJ:function efJ(d,e){this.a=d
this.b=e},
efu:function efu(){},
efs:function efs(d){this.a=d},
eft:function eft(d){this.a=d},
eg3:function eg3(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg4:function eg4(d){this.a=d},
efU:function efU(d,e){this.a=d
this.b=e},
eg1:function eg1(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d){this.a=d},
efZ:function efZ(d){this.a=d},
efY:function efY(d){this.a=d},
efV:function efV(d){this.a=d},
efW:function efW(d){this.a=d},
efX:function efX(d){this.a=d},
efw:function efw(){},
efQ:function efQ(d){this.a=d},
efR:function efR(d){this.a=d},
efP:function efP(d){this.a=d},
efS:function efS(d){this.a=d},
efO:function efO(d){this.a=d},
efT:function efT(d){this.a=d},
efN:function efN(d){this.a=d},
efM:function efM(d){this.a=d},
efL:function efL(d,e){this.a=d
this.b=e},
beW:function beW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ddq:function ddq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKw:function aKw(){},
bju:function bju(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
P0:function P0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
V6:function V6(d){this.a=d},
biy:function biy(d,e,f,g,h,i,j,k){var _=this
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
erw:function erw(d){this.a=d},
eru:function eru(d){this.a=d},
erv:function erv(){},
er7:function er7(){},
er6:function er6(){},
erg:function erg(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erm:function erm(d){this.a=d},
erh:function erh(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
erq:function erq(d){this.a=d},
ere:function ere(d){this.a=d},
err:function err(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
ers:function ers(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
ert:function ert(d){this.a=d},
erb:function erb(d){this.a=d},
erj:function erj(d){this.a=d},
era:function era(d){this.a=d},
erk:function erk(d){this.a=d},
er9:function er9(d){this.a=d},
erl:function erl(d,e){this.a=d
this.b=e},
er8:function er8(d,e){this.a=d
this.b=e},
bpP:function bpP(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vi:function Vi(d){this.a=d},
aCX:function aCX(d,e,f,g){var _=this
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
ey5:function ey5(d,e){this.a=d
this.b=e},
ey6:function ey6(d,e,f){this.a=d
this.b=e
this.c=f},
ey7:function ey7(d){this.a=d},
ey4:function ey4(){},
ey8:function ey8(d,e){this.a=d
this.b=e},
ey3:function ey3(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e){this.a=d
this.b=e},
ey2:function ey2(d,e){this.a=d
this.b=e},
eya:function eya(d){this.a=d},
ey1:function ey1(d){this.a=d},
eyb:function eyb(d,e){this.a=d
this.b=e},
ey0:function ey0(d,e){this.a=d
this.b=e},
eyc:function eyc(d){this.a=d},
eyd:function eyd(d){this.a=d},
ey_:function ey_(d,e){this.a=d
this.b=e},
aKF:function aKF(){},
aKL:function aKL(){},
ZK:function ZK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
UO:function UO(d){this.a=d},
aCz:function aCz(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fh$=h
_.kN$=i
_.fM$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ecj:function ecj(d){this.a=d},
eck:function eck(d,e){this.a=d
this.b=e},
ec7:function ec7(d,e){this.a=d
this.b=e},
ec8:function ec8(d){this.a=d},
ec5:function ec5(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec9:function ec9(d){this.a=d},
ec3:function ec3(d,e){this.a=d
this.b=e},
ecb:function ecb(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ec1:function ec1(d,e){this.a=d
this.b=e},
ecd:function ecd(d){this.a=d},
ec0:function ec0(d){this.a=d},
ece:function ece(d){this.a=d},
ec_:function ec_(d){this.a=d},
ecf:function ecf(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ebY:function ebY(d){this.a=d},
eca:function eca(d){this.a=d},
bjh:function bjh(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aau:function aau(d,e,f){this.a=d
this.b=e
this.c=f},
Vd:function Vd(d){this.a=d},
biD:function biD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fh$=i
_.kN$=j
_.fM$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
exx:function exx(d){this.a=d},
exy:function exy(d){this.a=d},
exw:function exw(d){this.a=d},
exm:function exm(d,e){this.a=d
this.b=e},
exn:function exn(d){this.a=d},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exj:function exj(d){this.a=d},
exc:function exc(d){this.a=d},
exd:function exd(d){this.a=d},
exb:function exb(d){this.a=d},
exo:function exo(d,e){this.a=d
this.b=e},
exi:function exi(d,e){this.a=d
this.b=e},
exp:function exp(d,e){this.a=d
this.b=e},
exh:function exh(d,e){this.a=d
this.b=e},
exq:function exq(d){this.a=d},
exg:function exg(d){this.a=d},
exr:function exr(d){this.a=d},
exf:function exf(d,e){this.a=d
this.b=e},
exs:function exs(d){this.a=d},
exe:function exe(d,e){this.a=d
this.b=e},
ext:function ext(d){this.a=d},
exa:function exa(d,e){this.a=d
this.b=e},
exu:function exu(d){this.a=d},
ex9:function ex9(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
ex8:function ex8(d,e){this.a=d
this.b=e},
bqF:function bqF(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaX:function aaX(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Tl:function Tl(d){this.a=d},
aB9:function aB9(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fh$=h
_.kN$=i
_.fM$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dCT:function dCT(d){this.a=d},
dCS:function dCS(d,e){this.a=d
this.b=e},
dCU:function dCU(){},
dCV:function dCV(d){this.a=d},
dCJ:function dCJ(d,e){this.a=d
this.b=e},
dCM:function dCM(d){this.a=d},
dCL:function dCL(d,e){this.a=d
this.b=e},
dCK:function dCK(d,e){this.a=d
this.b=e},
dCQ:function dCQ(d,e,f){this.a=d
this.b=e
this.c=f},
dCP:function dCP(d){this.a=d},
dCN:function dCN(d){this.a=d},
dCO:function dCO(d){this.a=d},
dCR:function dCR(d){this.a=d},
b8R:function b8R(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cIu:function cIu(d){this.a=d},
aJE:function aJE(){},
buQ:function buQ(){},
aKt:function aKt(){},
bv6:function bv6(){},
aKI:function aKI(){},
bve:function bve(){},
F8:function F8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
abM:function abM(d,e,f){this.a=d
this.b=e
this.c=f},
UI:function UI(d){this.a=d},
bic:function bic(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fh$=i
_.kN$=j
_.fM$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
e7N:function e7N(d,e){this.a=d
this.b=e},
e8b:function e8b(d){this.a=d},
e80:function e80(d){this.a=d},
e7S:function e7S(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e82:function e82(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e8_:function e8_(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e83:function e83(d,e){this.a=d
this.b=e},
e7X:function e7X(d,e){this.a=d
this.b=e},
e84:function e84(d,e){this.a=d
this.b=e},
e7W:function e7W(d,e){this.a=d
this.b=e},
e85:function e85(d,e){this.a=d
this.b=e},
e7V:function e7V(d,e){this.a=d
this.b=e},
e86:function e86(d){this.a=d},
e7U:function e7U(d,e){this.a=d
this.b=e},
e87:function e87(d){this.a=d},
e7T:function e7T(d){this.a=d},
e88:function e88(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e89:function e89(d){this.a=d},
e7P:function e7P(d){this.a=d},
e8a:function e8a(d){this.a=d},
e7O:function e7O(d){this.a=d},
bfQ:function bfQ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
acg:function acg(d,e){this.a=d
this.b=e
this.c=-1000},
UN:function UN(d){this.a=d},
aCy:function aCy(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fh$=h
_.kN$=i
_.fM$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebI:function ebI(d,e,f){this.a=d
this.b=e
this.c=f},
ebP:function ebP(d){this.a=d},
ebO:function ebO(d){this.a=d},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebR:function ebR(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebS:function ebS(d){this.a=d},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebX:function ebX(d){this.a=d},
bji:function bji(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKr:function aKr(){},
bv4:function bv4(){},
aKs:function aKs(){},
bv5:function bv5(){},
f4Y(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a6S,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.j5,w,w,1/0)},
hSs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.V(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gai(j);j.C();){s=j.gU(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c1(d.length,0,!1,w)
q=d.length
p=J.e0(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bH(0,new B.fns(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vy.h(0,d[n]).a)return!1
m=C.ew([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fR4(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
rX:function rX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7K:function b7K(d,e){this.a=d
this.b=e},
fns:function fns(d,e){this.a=d
this.b=e},
UL:function UL(d){this.a=d},
aCw:function aCw(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ebb:function ebb(d){this.a=d},
eba:function eba(d,e){this.a=d
this.b=e},
eaY:function eaY(d,e){this.a=d
this.b=e},
eaS:function eaS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eaT:function eaT(d){this.a=d},
eaX:function eaX(d,e){this.a=d
this.b=e},
eaW:function eaW(d,e){this.a=d
this.b=e},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d,e){this.a=d
this.b=e},
eb5:function eb5(){},
eb6:function eb6(d){this.a=d},
eb4:function eb4(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb2:function eb2(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eb0:function eb0(d){this.a=d},
eb8:function eb8(d,e){this.a=d
this.b=e},
eb_:function eb_(d,e){this.a=d
this.b=e},
eb9:function eb9(d,e){this.a=d
this.b=e},
bgx:function bgx(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dly:function dly(d,e){this.a=d
this.b=e},
TJ:function TJ(d){this.a=d},
bhs:function bhs(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dLf:function dLf(d){this.a=d},
dLe:function dLe(d,e){this.a=d
this.b=e},
dL4:function dL4(d){this.a=d},
dL3:function dL3(){},
dL5:function dL5(d){this.a=d},
dL2:function dL2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLd:function dLd(){},
dL8:function dL8(){},
dL9:function dL9(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dLa:function dLa(d){this.a=d},
dL6:function dL6(d){this.a=d},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLc:function dLc(d,e){this.a=d
this.b=e},
TZ:function TZ(d){this.a=d},
aBD:function aBD(d,e,f,g,h){var _=this
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
dO4:function dO4(d){this.a=d},
dO3:function dO3(d,e){this.a=d
this.b=e},
dNS:function dNS(){},
dNR:function dNR(d,e){this.a=d
this.b=e},
dNT:function dNT(d){this.a=d},
dNX:function dNX(d){this.a=d},
dNW:function dNW(d,e){this.a=d
this.b=e},
dNY:function dNY(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d){this.a=d},
dNU:function dNU(d,e){this.a=d
this.b=e},
dO_:function dO_(d){this.a=d},
dO0:function dO0(d){this.a=d},
dO1:function dO1(d){this.a=d},
dO2:function dO2(d){this.a=d},
bbT:function bbT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d0Z:function d0Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d10:function d10(d,e,f){this.a=d
this.b=e
this.c=f},
d1_:function d1_(d,e){this.a=d
this.b=e},
aJS:function aJS(){},
by0(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a6S,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.j5,w,w,1/0)},
fhy(d,e,f,g,h){var w,v,u=null,t=C.ih(u,u,u,u,C.dp(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ch,u,A.er,A.cd)
t.eO()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbb(w)/2))
t.a6(d,w)},
hPx(){var w,v,u,t,s,r,q,p,o=new C.eS()
o.dH(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.J(0,p))q.push(new C.z(p,1+o.aB(2+A.o.an(t,3))))}A.d.b1(q,new B.fiw())
w.push(new B.aQf(q))}return w},
a0C(d,e){var w,v,u,t
for(w=new C.Wj(d),v="";w.C();){u=C.jC(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jC(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i17(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Wj(d),v=0,u="";w.C();){t=C.jC(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=C.jC(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQf:function aQf(d){this.a=d},
bE1:function bE1(){},
fiw:function fiw(){},
Td:function Td(d){this.a=d},
bh7:function bh7(d,e,f,g,h,i){var _=this
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
dz3:function dz3(){},
dzg:function dzg(d){this.a=d},
dzf:function dzf(d,e,f){this.a=d
this.b=e
this.c=f},
dzh:function dzh(d){this.a=d},
dze:function dze(d,e){this.a=d
this.b=e},
dz4:function dz4(d,e){this.a=d
this.b=e},
dz9:function dz9(){},
dza:function dza(d){this.a=d},
dz8:function dz8(d){this.a=d},
dzb:function dzb(d,e){this.a=d
this.b=e},
dz7:function dz7(d,e){this.a=d
this.b=e},
dzc:function dzc(d,e){this.a=d
this.b=e},
dz6:function dz6(d,e){this.a=d
this.b=e},
dzd:function dzd(d){this.a=d},
dz5:function dz5(d){this.a=d},
b7W:function b7W(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cB1:function cB1(d,e){this.a=d
this.b=e},
Uc:function Uc(d){this.a=d},
bhE:function bhE(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dS7:function dS7(d){this.a=d},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS8:function dS8(d){this.a=d},
dS5:function dS5(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e,f){this.a=d
this.b=e
this.c=f},
dS1:function dS1(d){this.a=d},
dS0:function dS0(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS4:function dS4(d,e){this.a=d
this.b=e},
bdl:function bdl(d,e,f){this.b=d
this.c=e
this.a=f},
d8J:function d8J(d,e){this.a=d
this.b=e},
d8K:function d8K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tm:function Tm(d){this.a=d},
bhk:function bhk(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dDf:function dDf(d){this.a=d},
dDe:function dDe(d,e){this.a=d
this.b=e},
dCY:function dCY(){},
dD6:function dD6(d){this.a=d},
dD5:function dD5(){},
dD7:function dD7(d){this.a=d},
dD4:function dD4(){},
dD8:function dD8(d){this.a=d},
dD3:function dD3(d){this.a=d},
dD9:function dD9(d){this.a=d},
dD2:function dD2(d){this.a=d},
dDa:function dDa(d){this.a=d},
dD1:function dD1(d){this.a=d},
dDb:function dDb(d,e){this.a=d
this.b=e},
dD0:function dD0(d,e){this.a=d
this.b=e},
dDc:function dDc(d){this.a=d},
dD_:function dD_(d,e){this.a=d
this.b=e},
dDd:function dDd(d){this.a=d},
dCZ:function dCZ(d,e){this.a=d
this.b=e},
aJw:function aJw(){},
aK_:function aK_(){},
hfQ(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fX6(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3i(w,v,u,A.cI,C.V(x.N,x.y))},
hnk(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.fX7(d),d.d*f.b)},
fX7(d){return 42+(D.lK.ag(0,d.b)?(d.ch-1)*38:0)},
e7:function e7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
t9:function t9(d,e,f,g){var _=this
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
a95:function a95(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aa9:function aa9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3i:function a3i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bJM:function bJM(){},
bJX:function bJX(d){this.a=d},
bJS:function bJS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJY:function bJY(d){this.a=d},
bJZ:function bJZ(d){this.a=d},
bK0:function bK0(d){this.a=d},
bK1:function bK1(d){this.a=d},
bK_:function bK_(d){this.a=d},
bK2:function bK2(d,e,f){this.a=d
this.b=e
this.c=f},
bK3:function bK3(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJP:function bJP(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJQ:function bJQ(d,e,f){this.a=d
this.b=e
this.c=f},
bJR:function bJR(d){this.a=d},
bJL:function bJL(d){this.a=d},
bK4:function bK4(d,e){this.a=d
this.b=e},
bJT:function bJT(d,e){this.a=d
this.b=e},
bJW:function bJW(d){this.a=d},
bJV:function bJV(d){this.a=d},
bJU:function bJU(d){this.a=d},
ahi:function ahi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFd:function bFd(){},
bFe:function bFe(){},
mp:function mp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ci5:function ci5(d){this.a=d},
hZN(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fyS(),c9=new B.fyU(),d0=new B.fyV(),d1=new B.fyT(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.aa(w.a,w.b,w.c,w.d),A.bN,A.bI))
d3.bA(D.dZM,D.dXA,c9.$2(A.dy,1.4))
d3.bA(D.dXq,D.dXp,c9.$2(A.bv,2.4))
d3.bA(D.dXr,V.aEv,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.Qf
d3.ah(D.dXa,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aKh,A.aP,A.cm))
d3.ah(A.cJ,16,c8.$1(A.bv))
d3.ah(A.cJ,13,c8.$1(c7?A.aX.j(0.85):A.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.j5(0,d4.y*0.6)
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
r.delete()}}d3.ah(D.dZI,2.4,c8.$1(c7?A.bk:A.ak))
d3.ah(D.e_p,2.4,c8.$1(A.ak))
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
d3.aN(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aN(d2,c8.$1(A.aC.j(0.7)))}d3.aN(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.j5(0,d4.y)
d3.bA(D.a4_,D.aEL,c9.$2(A.bW,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f9).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ah(A.ic,3,c8.$1(c7?A.bk:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=D.avE[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bA(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.ct(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c5(p),r)
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
d3.aN(w,d1.$3(D.eAL,A.aM,A.dj))
d3.aX(D.eAa,c8.$1(A.dL))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.j5(0,d4.y*2)
d3.bA(A.J,D.dXu,c9.$2(A.bW,2.4))
d3.bA(A.a3Z,D.dXt,c9.$2(A.hE,1))
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
d3.aN(d2,c8.$1(A.bJ.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eAR,A.bp,A.cC))
k=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aN(k,c8.$1(A.eu))
d3.ah(D.dXy,7,c8.$1(c7?A.c:A.dL))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(K.of))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bw(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.be3
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lf
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.dZS,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eAX,A.bW,A.bp))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bJ.j(0.75):A.aA))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.j5(0,d4.y*0.5)
d3.hZ(C.ct(A.J,7,22),c8.$1(A.dj))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(K.of))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.F(A.k.bw(d5),60)),2,"0"),D.dXz,A.bc,6.5)
d3.ah(D.dXL,4,c8.$1(A.dL))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ah(A.R3,10,c8.$1(c7?A.cq:A.bv))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.j5(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e_r,A.c,16)
d2.restore()
d3.ah(A.jV,6,c8.$1(A.d4))
d3.ah(A.jV,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.R3,14+v*6+A.k.F(t,6))
r=c9.$2(A.cq.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c5(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.dZR,D.e_n,c9.$2(A.bv,4))
d2=d3.a
J.bA(d2.save())
d3.j5(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eAM,A.bW,A.ak))
d3.ah(D.aEx,8,c8.$1(A.aA))
d3.ah(D.aEx,4.5,c8.$1(c7?A.aX:A.cC))
d3.ah(D.dZP,2.2,c8.$1(c7&&A.o.F(A.k.bw(d5*1.6),2)===0?A.aC:A.k6))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e__,A.aC,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eAU,A.j1,A.f5))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dJ))
if(c7){d2=d5*2.3
d3.ah(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new C.aa(-18,t,-15.6,t+8),c8.$1(A.bc))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new C.aa(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ah(D.dZL,4,c8.$1(A.aW))
d3.ah(D.dXv,2.4,c8.$1(A.aC))
d3.ah(D.dXI,2.4,c8.$1(A.bk))
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
h.e=null}}d3.aN(h,c9.$2(A.bc,1.8))
d6.$5(d3,"72",D.dXw,A.fX,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e_3,A.fX.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ah(D.dZU,3,c8.$1(c7?A.bk:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cv.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aX(D.eAO,c8.$1(F.rO))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rM(0,-1,1)
d3.hZ(C.ct(A.J,8,14),c8.$1(A.cy))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aN(d2,c8.$1(A.cb))
d3.ah(D.dYc,1.2,c8.$1(A.w))
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
d3.aN(e,d1.$3(D.eBh,A.c,A.bL))
d3.aX(D.eBg,c8.$1(c7?A.dN:A.bv))
s=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aN(s,c8.$1(A.eD))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aN(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.Qf
d3.ah(D.dXb,14,d2)}return!0
case"discoball":d3.bA(D.dXg,M.aEt,c9.$2(A.dL,1.4))
d3.ah(A.J,16,d1.$3(D.eAz,A.aP,A.ak))
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
r=c8.$1(D.d_0[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eAx,A.cm,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eAq,A.aL,A.bI))
d3.bA(D.dXf,D.dXh,c9.$2(A.bv,1.6))
d3.ah(D.dXi,2.2,c8.$1(c7?A.aC:A.bv))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.avG[m]
if(c7)t=a1?A.b9:A.fD
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.j5(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a3W,c9.$2(A.bI,4))
d2.restore()
d3.bA(D.dZE,D.dZY,c9.$2(A.bI,4))
d3.aX(D.eBf,c8.$1(c7?A.b9.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.avC[m]+1,d2,10,14,2)
p=C.aq(A.bJ,A.dj,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.ep(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eAN,A.bW,A.bp))
for(m=0;m<2;++m){l=D.avC[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fB:A.aA).H()
t.drawRRect(C.ep(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cy.j(0.5))
s.z=G.mm
r=s.H()
t.drawRRect(C.ep(d2),r)
r.delete()}}d3.bA(D.dXP,D.dY5,c9.$2(A.aA,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.lS(1,a3,0.8,1).i7():A.eu
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mm
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dL))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eAC,A.cv,A.Kd))
d3.ah(D.e_4,8,c8.$1(A.qr))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.j5(0,d4.y)
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
d3.aN(t,c9.$2(A.bI,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.h1).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ah(D.dYD,3.2,c8.$1(A.h1.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.j5(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eAP,A.iY,A.rR))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eu))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cy.j(0.4))
d2.z=G.mm
d3.ah(D.dXK,8,d2)}return!0
case"headphones":d3.ff(C.ct(A.dz,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.avD[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.aa(s,0,s+14,20),A.by,A.p7).H()
d2.drawRRect(C.ep(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ey.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c5(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.F(d5*14,8)),A.k3,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eAv,A.dL,A.eu))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dJ))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dh(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fX(a4)),2,"0"),D.dXm,A.bc,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DD,A.fX,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bw(d5*2),6)),A.dz,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(K.of))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bI,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(a5),$.pg(),!0)
d2.translate(-27,-19)
E.Kp(d3,D.eGq,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uK))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.aa(a6.a,a6.b,a6.c,a6.d),A.dS,A.dp))
d3.aD(a6,c9.$2(A.b5,1.2))
d3.ah(D.aES,9,c8.$1(A.aA))
d3.ah(D.aES,6,c9.$2(A.dj,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aA))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dJ))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.bc:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.dYH,s,8.2)
d3.ah(D.dXB,2.4,c8.$1(c7?A.bk:A.aK))
d6.$5(d3,"IN",D.dZZ,A.ad,6)
d6.$5(d3,"OUT",D.dYv,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bI,A.aC,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ah(D.dXc,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eAr,A.eu,A.hB))
d6.$5(d3,"7805",D.a4_,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d4l[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c5(new C.aa(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e_q,A.bh,9)
return!0
case"diode":d3.bA(D.aEW,D.aEG,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aJ.j(0.85)))
d3.aX(D.eAg,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.jc
d3.aD(d2,t)}d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aN(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.dZN,A.ay,8)
return!0
case"ldr":d3.bA(D.aEW,D.a4_,c9.$2(A.e2,2.4))
d3.bA(D.aEL,D.aEG,c9.$2(A.e2,2.4))
d3.ah(A.J,12,c8.$1(A.dj))
d3.ah(A.J,12,c9.$2(A.t0,1.6))
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
a8.e=null}d3.aN(a8,c9.$2(A.bJ,1.4))
d2=C.aq(A.bv,A.dN,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.dZF,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e8
break A}if("sonytv"===d2){t=A.qk
break A}if("appletv"===d2){t=A.e2
break A}t=F.DF
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
p.clipRRect(C.ep(a5),$.pg(),!0)
p.translate(t,s)
E.fTo(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ah(D.dY6,1.6,c8.$1(A.bc))}else{d3.aD(a5,c8.$1(D.uK))
p=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aN(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dL))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.tM[m]
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
r.delete()}d6.$5(d3,"SONY",D.dZi,A.bW,5.5)
break
case"appletv":d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aN(d2,c8.$1(D.VN))
d6.$5(d3,"Apple TV",D.dYI,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bcG))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e_m,F.rO,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lK.h(0,d2)
b1=b0.b===D.vN
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
t.clipRRect(C.ep(a5),$.pg(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Kp(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.uK))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ah(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eu))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bW))
if(c7){d6.$5(d3,"NGMY",D.e_t,A.aA,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bp).H()
d2.drawRect(C.c5(new C.aa(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ah(A.aEr,1.6,c8.$1(A.aA))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eAY,A.cm,A.bp))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b8),$.pg(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Kp(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uK))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aN(d2,c8.$1(D.VN))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bp))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eB1,A.bN,A.cm))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b9),$.pg(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Kp(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uK))
d3.ah(D.aEm,2,c8.$1(A.bI))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aN(d2,c8.$1(D.VN))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e8))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c0),$.pg(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Kp(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.uK))
d3.aX(D.eB7,c8.$1(A.bp))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dL))
return!0
case"projector":if(c7){d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aN(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c1),$.pg(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Kp(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eAQ,A.iH,A.dL))
d3.ah(D.aEw,7,c8.$1(A.aA))
d3.ah(D.aEw,4,c8.$1(c7?A.dN:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aA))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(K.of))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aN(c3,c9.$2(A.aX,2.2))
d2=A.k.F(d5*6,48)
d3.ah(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.bc))
d6.$5(d3,""+(88+A.o.F(A.k.bw(d5*2),5)),D.dYE,A.c,10)
d6.$5(d3,"km/h",D.dYB,A.ay,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.aa(c4.a,c4.b,c4.c,c4.d),A.dL,A.eu))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c5),$.pg(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Kp(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.lf
d3.ah(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e_8,D.e_d,c9.$2(A.bp,4))
d3.bA(D.dY7,D.dYf,c9.$2(A.bp,4))
return!0}return!1},
fyS:function fyS(){},
fyU:function fyU(){},
fyV:function fyV(){},
fyT:function fyT(){},
fW1(d,e,f,g){return new B.ahg(d,g,f,e)},
EY(d,e,f){return new B.b8T(d,e,f)},
ahg:function ahg(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahh:function ahh(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fh$=h
_.kN$=i
_.fM$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bES:function bES(d,e){this.a=d
this.b=e},
bET:function bET(d){this.a=d},
bER:function bER(d){this.a=d},
bEU:function bEU(){},
bEV:function bEV(d){this.a=d},
bEW:function bEW(d,e,f){this.a=d
this.b=e
this.c=f},
bEQ:function bEQ(d,e){this.a=d
this.b=e},
bEO:function bEO(d,e){this.a=d
this.b=e},
bEP:function bEP(d,e,f){this.a=d
this.b=e
this.c=f},
bEI:function bEI(d,e){this.a=d
this.b=e},
bEJ:function bEJ(){},
bEK:function bEK(d,e){this.a=d
this.b=e},
bEL:function bEL(d,e){this.a=d
this.b=e},
bEM:function bEM(d){this.a=d},
bEN:function bEN(d){this.a=d},
bFa:function bFa(d){this.a=d},
bFb:function bFb(){},
bEl:function bEl(){},
bFc:function bFc(d,e){this.a=d
this.b=e},
bF9:function bF9(d,e,f){this.a=d
this.b=e
this.c=f},
bF4:function bF4(d){this.a=d},
bF1:function bF1(d,e,f){this.a=d
this.b=e
this.c=f},
bF2:function bF2(d,e){this.a=d
this.b=e},
bF5:function bF5(d){this.a=d},
bF_:function bF_(d,e){this.a=d
this.b=e},
bF0:function bF0(d,e){this.a=d
this.b=e},
bF3:function bF3(d){this.a=d},
bF6:function bF6(d){this.a=d},
bEY:function bEY(d,e){this.a=d
this.b=e},
bEZ:function bEZ(d,e){this.a=d
this.b=e},
bF7:function bF7(d){this.a=d},
bEX:function bEX(d){this.a=d},
bF8:function bF8(d){this.a=d},
bEm:function bEm(d,e){this.a=d
this.b=e},
bEF:function bEF(d,e){this.a=d
this.b=e},
bEH:function bEH(d,e){this.a=d
this.b=e},
bEG:function bEG(d,e){this.a=d
this.b=e},
bEs:function bEs(d,e){this.a=d
this.b=e},
bEt:function bEt(d){this.a=d},
bEr:function bEr(d){this.a=d},
bEu:function bEu(d,e,f){this.a=d
this.b=e
this.c=f},
bEq:function bEq(d,e){this.a=d
this.b=e},
bEx:function bEx(d,e){this.a=d
this.b=e},
bEy:function bEy(d,e){this.a=d
this.b=e},
bEz:function bEz(d,e){this.a=d
this.b=e},
bEA:function bEA(d,e,f){this.a=d
this.b=e
this.c=f},
bEp:function bEp(d,e){this.a=d
this.b=e},
bEB:function bEB(d,e,f){this.a=d
this.b=e
this.c=f},
bEo:function bEo(d,e){this.a=d
this.b=e},
bEC:function bEC(d,e,f){this.a=d
this.b=e
this.c=f},
bEn:function bEn(d,e){this.a=d
this.b=e},
bED:function bED(d){this.a=d},
bEE:function bEE(d){this.a=d},
bEv:function bEv(d){this.a=d},
bEw:function bEw(d){this.a=d},
b8T:function b8T(d,e,f){this.a=d
this.b=e
this.c=f},
f8S:function f8S(){},
f8T:function f8T(){},
f8U:function f8U(){},
f8F:function f8F(){},
f8V:function f8V(){},
f8E:function f8E(){},
f8W:function f8W(){},
f8J:function f8J(){},
f8D:function f8D(){},
f8K:function f8K(){},
f8C:function f8C(){},
f8L:function f8L(){},
f8B:function f8B(){},
f8M:function f8M(){},
f8z:function f8z(){},
f8A:function f8A(){},
f8N:function f8N(){},
f8x:function f8x(){},
f8y:function f8y(){},
f8O:function f8O(){},
f8w:function f8w(){},
U_:function U_(d){this.a=d},
aBE:function aBE(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dOc:function dOc(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
dOm:function dOm(){},
dOn:function dOn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOo:function dOo(){},
dOb:function dOb(d){this.a=d},
dOa:function dOa(d,e,f){this.a=d
this.b=e
this.c=f},
dO9:function dO9(d,e){this.a=d
this.b=e},
dO7:function dO7(d){this.a=d},
dO8:function dO8(){},
dOk:function dOk(d){this.a=d},
dOj:function dOj(d){this.a=d},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOf:function dOf(d){this.a=d},
dOg:function dOg(){},
dOi:function dOi(d,e,f){this.a=d
this.b=e
this.c=f},
dOd:function dOd(d,e){this.a=d
this.b=e},
dOe:function dOe(){},
dOq:function dOq(d){this.a=d},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOp:function dOp(){},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d){this.a=d},
avK:function avK(d,e){this.c=d
this.a=e},
b74:function b74(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
cyz:function cyz(d){this.a=d},
b73:function b73(d,e){this.b=d
this.a=e},
cyy:function cyy(d){this.a=d},
aw2:function aw2(){},
aw3:function aw3(){},
aI2:function aI2(){},
buT:function buT(){},
hZO(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.vF,23)
$.X()
b8=C.L()
b8.r=A.aA.gp(0)
b9.ah(A.vF,25,b8)
b8=C.L()
b8.sau(D.e7b.aw(0,v))
b9.ah(A.vF,23,b8)
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
r=C.L()
r.r=A.bL.gp(0)
r.c=2
r.d=A.bO
b9.bA(A.vF,new C.u(b8*18,s*18-2),r)
r=C.L()
r.r=A.bh.gp(0)
b9.ah(A.vF,3,r)
c2.$5(b9,w?"V":"A",D.e_g,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.dZK,A.aA,9.5)
return!0
case"fan":b8=C.by(D.eAn,A.hy)
$.X()
s=C.L()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.L()
s.r=A.ak.gp(0)
b9.aX(D.eB8,s)
s=C.L()
s.r=A.M.j(0.6).gp(0)
b9.ah(D.vG,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.ct(A.aEq,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.h1.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c5(s),n)
n.delete()
b8.restore()}b8=C.L()
b8.r=A.bn.gp(0)
b9.ah(D.vG,4,b8)
b8=C.L()
b8.b=A.ae
b8.c=2
b8.r=A.cm.gp(0)
b9.ah(D.vG,22,b8)
b8=C.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.j2.gp(0)
b9.ah(D.vG,14,b8)
return!0
case"speaker":l=C.by(D.aKh,A.u8)
$.X()
b8=C.L()
b8.sau(D.amC.aw(0,new C.aa(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.L()
b8.sau(D.e7x.aw(0,C.bU(A.cx,15)))
b9.ah(A.cx,14+k,b8)
b8=C.L()
b8.r=A.dL.gp(0)
b9.ah(A.cx,5,b8)
b8=C.L()
b8.r=A.bp.gp(0)
b9.ah(D.aEs,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.dXO,6+u*6+A.k.F(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c5(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.by(D.eB0,A.u8)
$.X()
b8=C.L()
b8.sau(D.bQX.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.by(D.aKj,A.hO)
s=C.L()
s.r=A.hB.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bo(i)<500?":":" "
g=A.a.aT(A.o.u(C.dh(i)),2,"0")
f=A.a.aT(A.o.u(C.fX(i)),2,"0")
b8=C.L()
b8.r=A.bc.j(0.12).gp(0)
b9.aX(D.aKj,b8)
c2.$5(b9,g+h+f,D.e_1,A.bc,21)}b8=C.L()
b8.r=A.cm.gp(0)
b9.ah(D.e_0,2.4,b8)
b8=C.L()
b8.r=A.cm.gp(0)
b9.ah(D.dXS,2.4,b8)
return!0
case"calculator":j=C.by(D.eAH,A.hb)
$.X()
b8=C.L()
b8.sau(D.bQH.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.by(D.eAB,A.ha)
s=C.L()
s.r=(b7?A.VY:D.bey).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dZJ,A.UT,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.by(new C.aa(q,s,q+6,r),A.Rw)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cb:A.bW).gp(0)
n=p.H()
b8.drawRRect(C.ep(q),n)
n.delete()}return!0
case"phone":j=C.by(D.eAy,A.hb)
$.X()
b8=C.L()
b8.r=K.of.gp(0)
b9.aD(j,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.aec.gp(0)
b9.aD(j,b8)
a0=C.by(D.eAp,A.hy)
if(b7){b8=C.L()
b8.sau(D.bSf.aw(0,new C.aa(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.ep(a0),$.pg(),!0)
b8.translate(-12,-25)
E.Kp(b9,D.eG1,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=C.by(D.eAm,A.ha)
s=C.L()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=C.L()
s.r=A.bc.gp(0)
b9.aX(new C.aa(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.dZ0,A.c,6)}else{b8=C.L()
b8.r=D.uK.gp(0)
b9.aD(a0,b8)}b8=C.by(D.eBi,D.e7G)
s=C.L()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.by(D.eB_,A.rc)
$.X()
b8=C.L()
b8.sau(D.bRc.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.avD[a2]
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
s.r=(a4?A.bk:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.vG,8+u*6+A.k.F(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.ht.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c5(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.by(D.eAG,A.hy)
s=$.X()
r=C.L()
r.r=A.eu.gp(0)
b9.aD(b8,r)
if(b7){b8=C.L()
b8.r=A.aC.j(0.5*a5).gp(0)
b8.z=A.yy
b9.ah(A.vF,34,b8)}a6=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.L()
b8.r=C.aq(A.eD,D.b7g,a5).gp(0)
b9.aN(a6,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aN(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.j5(0,c1*7)
s=C.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aEs,s)
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
q=C.L()
q.sau(D.bPl.aw(0,D.eAT))
b9.aN(j,q)
q=new C.aQ(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.L()
p.r=A.fh.gp(0)
b9.aN(q,p)
r=new C.aQ(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.L()
s.r=A.fh.gp(0)
b9.aN(r,s)
for(a2=0;a2<2;++a2){a3=D.d4f[a2]
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
r=C.L()
r.sau(D.bQn.aw(0,D.eAF))
b9.aN(j,r)
r=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
q=C.L()
q.r=A.e2.gp(0)
b9.aN(r,q)
s=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cS(-34,-6,-18,12))
b8=C.L()
b8.b=A.ae
b8.c=5
b8.r=A.aA.gp(0)
b9.aN(s,b8)
b8=C.L()
if(b7){s=C.aq(A.cy,A.uJ,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eu
b8.r=s.gp(0)
b9.aX(D.eAE,b8)
if(b7){b8=C.L()
b8.r=A.cy.j(0.3).gp(0)
b8.z=A.lf
b9.ah(A.aEo,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.L()
b8.r=A.aA.gp(0)
b9.ah(D.dX9,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aQ($.X().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bF())
s=C.L()
s.r=A.dN.j(0.28*u).gp(0)
b9.aN(b8,s)
s=C.L()
s.r=A.dN.j(0.5*u).gp(0)
s.z=W.GX
b9.ah(D.e_5,24,s)}b8=C.by(D.eBe,A.hy)
s=$.X()
r=C.L()
r.r=A.eu.gp(0)
b9.aD(b8,r)
r=C.L()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.dXn,D.aEy,r)
r=C.L()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aEy,D.e_6,r)
a9=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.L()
s.r=(b7?A.aM:A.jJ).gp(0)
b9.aN(a9,s)
b8=C.L()
b8.r=(b7?A.c:A.bp).gp(0)
b9.ah(D.e_7,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.L()
r.b=A.ae
r.c=2
r.r=A.h_.gp(0)
b9.aN(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a0W[u].j(0.6).gp(0)
b3.z=A.Qf
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
if(b2)o=D.a0W[u]
else{o=C.aq(D.a0W[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.hZN(b9,c0,c1,c2)},
fI:function fI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRw(d){var w=D.lK.h(0,d)
return(w==null?null:w.b)===D.yX},
i_U(d,e,f){return C.a5(d,!1).ci(C.us(null,!1,!0,!0,new B.fDr(e,f),A.eN,null,A.pk,new B.fDs(),x.H))},
Iw:function Iw(d,e){this.a=d
this.b=e},
lX:function lX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDr:function fDr(d,e){this.a=d
this.b=e},
fDs:function fDs(){},
TH:function TH(d,e,f){this.c=d
this.d=e
this.a=f},
bhq:function bhq(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dK8:function dK8(d){this.a=d},
dK7:function dK7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK5:function dK5(){},
dK6:function dK6(d){this.a=d},
dK4:function dK4(d){this.a=d},
dK3:function dK3(d,e){this.a=d
this.b=e},
dK2:function dK2(d,e){this.a=d
this.b=e},
dK1:function dK1(d){this.a=d},
dK0:function dK0(d){this.a=d},
dJX:function dJX(d){this.a=d},
dJW:function dJW(d){this.a=d},
dK_:function dK_(d,e,f){this.a=d
this.b=e
this.c=f},
dJZ:function dJZ(d){this.a=d},
dJY:function dJY(d){this.a=d},
bsY:function bsY(d,e,f){this.b=d
this.c=e
this.a=f},
adk:function adk(d,e,f){this.b=d
this.c=e
this.a=f},
aJP:function aJP(){},
fd4(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.za,A.L,w,w),A.az,C.c3(A.fM,g,A.bw,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.V0,w,u,v,w,w,A.n),w,w,w,A.ez,A.a8,w,w,w),w,w,w)},
fRC(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eS()
b4.dH(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.V(u,t)
m=w
l=0
k=N.pS
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
a2=b4.he()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gam(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.an(b5,8),2,4)
a9=C.ew([A.d.gam(g)],u)
A.d.fn(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.J(0,a7)}b0=C.aX(u)
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
return new B.aUK(b0,a9,C.V(u,t),q,N.pS,w+v)}return new B.aUK(C.aX(u),C.ew([25],u),C.V(u,t),21,N.pS,1)},
hfJ(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.F(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bmh(p,o)},
hb6(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aUK:function aUK(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Uv:function Uv(d){this.a=d},
bi_:function bi_(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fh$=g
_.kN$=h
_.fM$=i
_.fi$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e3m:function e3m(d){this.a=d},
e3l:function e3l(d,e){this.a=d
this.b=e},
e3n:function e3n(){},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3d:function e3d(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3e:function e3e(d){this.a=d},
e3f:function e3f(d){this.a=d},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d){this.a=d},
e3j:function e3j(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
bf0:function bf0(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ddN:function ddN(d,e,f){this.a=d
this.b=e
this.c=f},
ddQ:function ddQ(d,e,f){this.a=d
this.b=e
this.c=f},
ddO:function ddO(d){this.a=d},
ddP:function ddP(d){this.a=d},
Ux:function Ux(d){this.a=d},
aCi:function aCi(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fh$=g
_.kN$=h
_.fM$=i
_.fi$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e3F:function e3F(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3G:function e3G(){},
e3q:function e3q(){},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3w:function e3w(d){this.a=d},
e3s:function e3s(d){this.a=d},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d){this.a=d},
e3r:function e3r(d){this.a=d},
e3A:function e3A(d){this.a=d},
e3v:function e3v(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3C:function e3C(d){this.a=d},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3D:function e3D(d){this.a=d},
bff:function bff(d,e){this.b=d
this.a=e},
aKg:function aKg(){},
buY:function buY(){},
aKh:function aKh(){},
buZ:function buZ(){},
a_I(d,e,f,g,h,i){return new B.brN(d,e,f,g,h,i)},
brN:function brN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9z:function f9z(){},
f9A:function f9A(){},
f9B:function f9B(){},
f9C:function f9C(){},
f9D:function f9D(){},
f9E:function f9E(){},
f9F:function f9F(){},
f9G:function f9G(){},
a7a:function a7a(d){this.a=d},
ccK:function ccK(d){this.a=d},
ccL:function ccL(){},
ccJ:function ccJ(d,e){this.a=d
this.b=e},
ccI:function ccI(d){this.a=d},
Vo:function Vo(d){this.a=d},
aD9:function aD9(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fh$=f
_.kN$=g
_.fM$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eCy:function eCy(d){this.a=d},
eCu:function eCu(d){this.a=d},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
bt9:function bt9(d,e,f){this.b=d
this.c=e
this.a=f},
U6:function U6(d){this.a=d},
bhz:function bhz(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fh$=d
_.kN$=e
_.fM$=f
_.fi$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dQq:function dQq(){},
dQr:function dQr(){},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQp:function dQp(d){this.a=d},
bo2:function bo2(d,e,f){this.b=d
this.c=e
this.a=f},
Tj:function Tj(d){this.a=d},
bhc:function bhc(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fh$=d
_.kN$=e
_.fM$=f
_.fi$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dBG:function dBG(){},
dBH:function dBH(){},
dBB:function dBB(){},
dBE:function dBE(d,e){this.a=d
this.b=e},
dBD:function dBD(d,e){this.a=d
this.b=e},
dBF:function dBF(d){this.a=d},
dBC:function dBC(d){this.a=d},
aGx:function aGx(d,e,f){this.a=d
this.b=e
this.c=f},
TY:function TY(d){this.a=d},
bht:function bht(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNG:function dNG(d,e){this.a=d
this.b=e},
dNJ:function dNJ(d){this.a=d},
dNF:function dNF(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dNE:function dNE(d,e){this.a=d
this.b=e},
dNL:function dNL(d,e){this.a=d
this.b=e},
dND:function dND(d,e){this.a=d
this.b=e},
dNM:function dNM(d){this.a=d},
dNC:function dNC(d,e){this.a=d
this.b=e},
dNN:function dNN(d){this.a=d},
dNB:function dNB(d){this.a=d},
dNO:function dNO(d){this.a=d},
dNA:function dNA(d){this.a=d},
dNP:function dNP(d){this.a=d},
dNQ:function dNQ(d){this.a=d},
dNz:function dNz(d){this.a=d},
bjv:function bjv(d,e,f){this.b=d
this.c=e
this.a=f},
UJ:function UJ(d){this.a=d},
aCs:function aCs(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e91:function e91(d,e){this.a=d
this.b=e},
e92:function e92(d,e,f){this.a=d
this.b=e
this.c=f},
e90:function e90(d,e,f){this.a=d
this.b=e
this.c=f},
e93:function e93(d){this.a=d},
e9_:function e9_(d){this.a=d},
e97:function e97(d){this.a=d},
e96:function e96(d,e){this.a=d
this.b=e},
e95:function e95(d,e){this.a=d
this.b=e},
e98:function e98(d,e){this.a=d
this.b=e},
e94:function e94(d,e){this.a=d
this.b=e},
e99:function e99(d){this.a=d},
UX:function UX(d){this.a=d},
aCO:function aCO(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d){this.a=d},
ejw:function ejw(d,e){this.a=d
this.b=e},
ejx:function ejx(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejA:function ejA(d){this.a=d},
ejB:function ejB(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejD:function ejD(d,e){this.a=d
this.b=e},
Vh:function Vh(d){this.a=d},
biH:function biH(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
exQ:function exQ(){},
exZ:function exZ(){},
exV:function exV(d){this.a=d},
exU:function exU(){},
exW:function exW(d,e){this.a=d
this.b=e},
exT:function exT(d,e){this.a=d
this.b=e},
exX:function exX(d){this.a=d},
exS:function exS(d,e){this.a=d
this.b=e},
exY:function exY(d){this.a=d},
exR:function exR(d){this.a=d},
UH:function UH(d){this.a=d},
bia:function bia(d,e,f,g,h,i,j,k){var _=this
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
_.fh$=f
_.kN$=g
_.fM$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
e7H:function e7H(){},
e7I:function e7I(){},
e7A:function e7A(d){this.a=d},
e7z:function e7z(d){this.a=d},
e7B:function e7B(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7C:function e7C(d){this.a=d},
e7x:function e7x(d){this.a=d},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7w:function e7w(d,e){this.a=d
this.b=e},
e7E:function e7E(d){this.a=d},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7F:function e7F(d){this.a=d},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7G:function e7G(d){this.a=d},
e7t:function e7t(d,e){this.a=d
this.b=e},
bbe:function bbe(d,e,f){this.c=d
this.d=e
this.a=f},
aJC:function aJC(){},
buP:function buP(){},
aJV:function aJV(){},
buU:function buU(){},
aKp:function aKp(){},
bv3:function bv3(){},
aKT:function aKT(){},
bvf:function bvf(){},
jD(d,e,f,g,h,i){return new B.b4U(h,d,f,g,i,e,null)},
hfA(d,e,f,g){var w=null
return C.c9(w,w,!0,w,new B.fHg(g,e,f),d,w,!0,!0,x.H)},
hx(d,e,f,g,h,i,j){return new B.au8(f,j,i,h,g,d,e,null)},
qE(d,e,f){return B.i0J(d,e,f)},
i0J(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qE=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m2(2),$async$qE)
case 7:q=h
w=8
return C.b(q.hl(A.fS),$async$qE)
case 8:p=h
if(p==null){w=1
break}o=J.fa(A.dF.gaP(p))
w=9
return C.b(B.cnv(C.a([B.h4D(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qE)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aMj)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qE,v)},
l9(d,e,f,g){var w,v=$.aqi
if(v==="music")return E.dE(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dE(261.63*v,w,f,0,g,"sine")}return B.vF(v,e,f,g)},
vF(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dE(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dE(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dE(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dE(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dE(t,"",160,-0.7,g*0.4,w)
return E.dE(900,"",90,0,g*0.45,u)
case"zap":return E.dE(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dE(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dE(320,"",220,-0.7,g*0.35,v)
return E.dE(1500,"",200,0,g*0.22,u)
case"organic":return E.dE(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dE(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dE(t,"",s,0,g*0.5,w)}},
Bb(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqi
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.l9(d,e[w],f,g)
return}for(p=C.da(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bW(p,p.gM(0),v.k("bW<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.l9(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.ccG(d,s,f,g),u)}},
a79(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dE(95,"",200,1.8,e,w)
break
case"snare":E.dE(220,"",140,0,e*0.65,v)
break
case"hat":E.dE(5000,"",50,0,e*0.35,v)
break
case"open":E.dE(5200,"",220,0,e*0.35,v)
break
case"clap":E.dE(1100,"",100,0,e*0.5,v)
break
case"tom":E.dE(150,"",230,1,e,w)
break
case"low":E.dE(100,"",260,0.9,e,w)
break
case"rim":E.dE(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dE(820,"",240,0,e*0.3,"square")
break
case"crash":E.dE(3200,"",650,0,e*0.4,v)
break
case"shake":E.dE(7000,"",90,0,e*0.3,v)
break
default:E.dE(60,"",300,0,e,w)}},
z2(d){return B.hwq(d)},
hwq(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$z2=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$z2)
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
return C.i($async$z2,v)},
vC(d,e){return B.hwr(d,e)},
hwr(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vC=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vC)
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
b4U:function b4U(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cps:function cps(d){this.a=d},
cpt:function cpt(d,e){this.a=d
this.b=e},
fHg:function fHg(d,e,f){this.a=d
this.b=e
this.c=f},
fHf:function fHf(d){this.a=d},
dy:function dy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cpo:function cpo(d){this.a=d},
eK:function eK(d,e,f){this.c=d
this.d=e
this.a=f},
au8:function au8(d,e,f,g,h,i,j,k){var _=this
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
cpn:function cpn(d){this.a=d},
EG:function EG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpu:function cpu(d){this.a=d},
ms:function ms(){},
cpp:function cpp(d,e,f){this.a=d
this.b=e
this.c=f},
cpr:function cpr(d){this.a=d},
cpq:function cpq(){},
ccG:function ccG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crZ(){var w=0,v=C.j(x.cL),u,t
var $async$crZ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tP().bd7("assets/data/world110.json"),$async$crZ)
case 3:u=t.hAY(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$crZ,v)},
hAY(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gU(w))
q=C.a([],s)
for(p=J.a8(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gU(o)
m=C.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gU(l)
j=J.a8(k)
m.push(C.a([C.f8(j.h(k,0)),C.f8(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.f8(p.h(r,"pop"))
h=C.f8(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aOK(g,f,"",0)
f=C.f8(J.q(p.h(r,"c"),0))
p=C.f8(J.q(p.h(r,"c"),1))
e=new B.a9Q(o,m,l,j,i,h,g,f,p,q)
e.bvc(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.a9R(a1)},
fl4(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
G7(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a9Q:function a9Q(d,e,f,g,h,i,j,k,l,m){var _=this
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
a9R:function a9R(d){this.a=d},
uM:function uM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Oh:function Oh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xE:function xE(d,e,f){this.a=d
this.b=e
this.c=f},
Og:function Og(d){this.a=0
this.b=d
this.c=0},
hCR(d,e,f){return $.hCS.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.d9x(d,e,f))},
Ud:function Ud(d){this.a=d},
aBP:function aBP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fh$=j
_.kN$=k
_.fM$=l
_.fi$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dT8:function dT8(d){this.a=d},
dT7:function dT7(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d,e,f){this.a=d
this.b=e
this.c=f},
dSy:function dSy(d){this.a=d},
dSx:function dSx(){},
dSw:function dSw(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSL:function dSL(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSD:function dSD(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dST:function dST(d){this.a=d},
dT0:function dT0(d,e){this.a=d
this.b=e},
dSS:function dSS(d,e){this.a=d
this.b=e},
dT1:function dT1(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dT2:function dT2(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dSP:function dSP(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dSN:function dSN(d){this.a=d},
dT6:function dT6(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSF:function dSF(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dSE:function dSE(d){this.a=d},
dSv:function dSv(){},
dSu:function dSu(d){this.a=d},
dSt:function dSt(d){this.a=d},
bds:function bds(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d9x:function d9x(d,e,f){this.a=d
this.b=e
this.c=f},
d9y:function d9y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aK0:function aK0(){},
aK1:function aK1(){},
adS(d,e,f,g,h){return new B.brI(d,e,f,g,h)},
brI:function brI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9s:function f9s(){},
f9t:function f9t(){},
f9u:function f9u(){},
f9v:function f9v(){},
f9w:function f9w(){},
f9x:function f9x(){},
f9y:function f9y(){},
Vk:function Vk(d){this.a=d},
biL:function biL(){this.d=$
this.c=this.a=null},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyL:function eyL(){},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyG:function eyG(d){this.a=d},
hDi(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eS()
v.dH(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eS()
v.dH(w+900)
u.push(2.2+v.aj())}return new B.bix(new C.cs(null,x.A),new B.Og(A.cI),A.J,A.at,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hDk(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hDj(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h5P(d,e,f){return $.hDU.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eST(d,e,f))},
V5:function V5(d){this.a=d},
bix:function bix(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fh$=j
_.kN$=k
_.fM$=l
_.fi$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqX:function eqX(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqU:function eqU(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
eqT:function eqT(d){this.a=d},
er_:function er_(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
eqS:function eqS(d,e){this.a=d
this.b=e},
er1:function er1(d){this.a=d},
eqR:function eqR(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
er3:function er3(d){this.a=d},
eqP:function eqP(d){this.a=d},
er4:function er4(d){this.a=d},
eqO:function eqO(d){this.a=d},
er5:function er5(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqL:function eqL(){},
eqK:function eqK(){},
eqJ:function eqJ(d){this.a=d},
eqI:function eqI(d){this.a=d},
bpN:function bpN(d,e){this.b=d
this.a=e},
eST:function eST(d,e,f){this.a=d
this.b=e
this.c=f},
eSU:function eSU(){},
eSV:function eSV(){},
Ue:function Ue(d){this.a=d},
aBQ:function aBQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fh$=k
_.kN$=l
_.fM$=m
_.fi$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dTc:function dTc(){},
dTF:function dTF(){},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTs:function dTs(d){this.a=d},
dTh:function dTh(d){this.a=d},
dTt:function dTt(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTz:function dTz(d){this.a=d},
dTA:function dTA(d){this.a=d},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTC:function dTC(d){this.a=d},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTD:function dTD(d){this.a=d},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTE:function dTE(d){this.a=d},
dTj:function dTj(d){this.a=d},
dTu:function dTu(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTw:function dTw(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTa:function dTa(){},
dTd:function dTd(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
b8I:function b8I(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
UY:function UY(d){this.a=d},
biu:function biu(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fh$=e
_.kN$=f
_.fM$=g
_.fi$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
ejG:function ejG(d,e){this.a=d
this.b=e},
ejH:function ejH(d,e){this.a=d
this.b=e},
ejF:function ejF(d,e){this.a=d
this.b=e},
ejI:function ejI(d,e){this.a=d
this.b=e},
ejE:function ejE(d,e){this.a=d
this.b=e},
bpl:function bpl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eR2:function eR2(d){this.a=d},
aK2:function aK2(){},
buW:function buW(){},
aKB:function aKB(){},
bv9:function bv9(){},
aKE:function aKE(){},
bvb:function bvb(){},
hDg(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eS()
v.dH(w)
v=v.aj()
u=new C.eS()
u.dH(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhb(new C.cs(null,x.A),new B.Og(A.cI),t,A.at,s,$,A.bx,0,C.a([],x.X),null,null)},
OJ:function OJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Th:function Th(d){this.a=d},
bhb:function bhb(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fh$=i
_.kN$=j
_.fM$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dB7:function dB7(){},
dAW:function dAW(){},
dAX:function dAX(d,e){this.a=d
this.b=e},
dAY:function dAY(d,e){this.a=d
this.b=e},
dAV:function dAV(d){this.a=d},
dAU:function dAU(d){this.a=d},
dB_:function dB_(d){this.a=d},
dAT:function dAT(d,e){this.a=d
this.b=e},
dB0:function dB0(d){this.a=d},
dAS:function dAS(d){this.a=d},
dB1:function dB1(d){this.a=d},
dAR:function dAR(d){this.a=d},
dB2:function dB2(d){this.a=d},
dAQ:function dAQ(d){this.a=d},
dB3:function dB3(d){this.a=d},
dAP:function dAP(d){this.a=d},
dB4:function dB4(d){this.a=d},
dAO:function dAO(d){this.a=d},
dB5:function dB5(d){this.a=d},
dAN:function dAN(d){this.a=d},
dB6:function dB6(d){this.a=d},
dAM:function dAM(d){this.a=d},
dAZ:function dAZ(d){this.a=d},
dAL:function dAL(d){this.a=d},
b86:function b86(d,e){this.b=d
this.a=e},
adw:function adw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ua:function Ua(d){this.a=d},
bhC:function bhC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fh$=p
_.kN$=q
_.fM$=r
_.fi$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dRK:function dRK(d){this.a=d},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRC:function dRC(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRF:function dRF(d){this.a=d},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRH:function dRH(d){this.a=d},
dRt:function dRt(d){this.a=d},
dRI:function dRI(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRJ:function dRJ(d){this.a=d},
dRr:function dRr(d){this.a=d},
bdi:function bdi(d,e){this.b=d
this.a=e},
d6G:function d6G(d){this.a=d},
UU:function UU(d){this.a=d},
bit:function bit(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fh$=f
_.kN$=g
_.fM$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eiV:function eiV(d,e){this.a=d
this.b=e},
eiW:function eiW(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiX:function eiX(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
eiR:function eiR(d){this.a=d},
ej_:function ej_(d){this.a=d},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
ej0:function ej0(d){this.a=d},
eiP:function eiP(d,e){this.a=d
this.b=e},
ej1:function ej1(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
ej2:function ej2(d){this.a=d},
eiN:function eiN(d,e){this.a=d
this.b=e},
boD:function boD(d,e){this.b=d
this.a=e},
aJz:function aJz(){},
buO:function buO(){},
aJY:function aJY(){},
buV:function buV(){},
aKA:function aKA(){},
bv8:function bv8(){},
h4D(d,e,f){var w,v
C.fP(0,0,!1)
w=new C.lc(e,f,$,null)
v=w.bFc(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hQM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.V(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.E(["k",p.b,"x",C.nN(A.k.aa(p.c,4)),"y",C.nN(A.k.aa(p.d,4)),"v",p.e,"l",C.nN(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nN(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nN(A.k.aa(p.z,3)),"s",C.nN(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a3(f).k("cl.E"))
A.d.fe(l)
return A.R.ao(C.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i_6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aG(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aW(f==null?A.cH:f)
while(f.C()){u=f.gU(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.q_().ag(0,s)){J.cf(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.t9(a2,d,a0,a1)
a3.aoq(a2,d,a0,a1)
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
i=J.aW(i==null?A.cH:i)
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
if(m!=null&&l!=null)a6.aiZ(m,A.k.O(C.f8(J.q(p,1))),l,A.k.O(C.f8(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aW(h==null?A.cH:h)
while(h.C()){j=h.gU(h)
J.cf(k,A.k.O(C.f8(j)))}return new C.bmi(i,k)}catch(a4){return a5}},
fmO(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fmO=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fmO)
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
return C.i($async$fmO,v)},
bBB(d){return B.i0F(d)},
i0F(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bBB=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bBB)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bBB)
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
return C.i($async$bBB,v)},
cnv(d,e){var w=0,v=C.j(x.g7),u
var $async$cnv=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fUf().wI(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cnv,v)}},D,K,R,X,A4,A5,An,H,Y,A6
J=c[1]
C=c[0]
A=c[2]
Z=c[136]
A7=c[135]
A_=c[128]
A0=c[125]
I=c[114]
P=c[119]
A1=c[110]
A8=c[130]
A9=c[132]
A2=c[133]
Aa=c[107]
N=c[137]
G=c[117]
Ab=c[112]
Ac=c[129]
A3=c[93]
Ad=c[67]
V=c[76]
Ae=c[83]
Af=c[80]
Q=c[87]
Ag=c[138]
Ah=c[103]
W=c[113]
O=c[115]
U=c[134]
Ai=c[71]
Aj=c[90]
S=c[123]
L=c[131]
Ak=c[98]
M=c[122]
T=c[92]
Al=c[24]
E=c[26]
F=c[89]
Am=c[101]
B=a.updateHolder(c[17],B)
D=c[111]
K=c[124]
R=c[120]
X=c[118]
A4=c[126]
A5=c[116]
An=c[121]
H=c[51]
Y=c[95]
A6=c[127]
B.aiv.prototype={}
B.Uq.prototype={
T(){return new B.bhY(C.V(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mq(0,null,null))}}
B.bhY.prototype={
gV8(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.q()
this.a2()},
MK(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$MK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.jq()
p.bM(0,A.c3)
t.m(new B.e0m(t))
t.a.toString
p=t.gV8()
w=3
return C.b(B.bx9(B.hF6(q,B.hQD(p),o,t.ay)),$async$MK)
case 3:s=e
r=s==null?null:J.iR(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hS2(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e0n(t,o,r))
$.aT.x1$.push(new B.e0o(t))
case 1:return C.h(u,v)}})
return C.i($async$MK,v)},
X7(d){return this.bVK(d)},
aTo(){return this.X7(null)},
bVK(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$X7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.jq()
t.f.saV(0,o)
t.m(new B.e0z(t))
E.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bx9(B.hLP(o)),$async$X7)
case 3:r=n.a=m.hZP(f)
p.b=""
if(r!=null&&!B.hQE(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hS3(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiv(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e0A(p,t))
t.c_W(p.a)
case 1:return C.h(u,v)}})
return C.i($async$X7,v)},
c_W(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
A.d.a8(w)
w=++m.as
v=m.gV8()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e0v(m))
t=d.d
s=C.V(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e0t(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e0w(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e0x(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e0y(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.r,1)
if(m.x)j=C.A(C.a([D.eHt,A.bf,C.D(C.d(m.Q,l,l,l,l,l,l,A.Sm,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.f5y
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Ab.SL,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eRU,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.uT,C.d(u,l,l,l,l,l,l,D.eUu,l,l,l),l))
w.push(A.d0)
w.push(C.d(k.b,l,l,l,l,l,l,D.Iy,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eWQ,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i7,A.cj,l,l,l))}w.push(A.ao)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.ay
w.push(new C.C(A.Lb,new C.co(A.aQ,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mv,l,l,l,l,l,l,l,l,l),A.bo,new C.bE(1,A.bi,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aV(12,12)
s=new C.aV(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6g,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bs(t,t,t,t),l,l,A.n),l,l,l,l,A.fG,l,l,l),l),A.au,C.p(l,new C.x(o.b,l,D.f15,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bs(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.e0p)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.agL(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bn3,A.eh,l,l,1/0),A.bb,A.i6),C.D(B.fW1(m.gV8(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dy("Ask about it",i,new B.e0D(m),l,A.by,l),new B.dy("Invent something new",!i,new B.e0E(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d6n[p]
i.push(new B.dy(n,!1,new B.e0F(m,n),l,A.by,l))}f.push(new B.eK(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cRV[p]
i.push(new B.dy(r,!1,new B.e0G(m,r),l,A.by,l))}f.push(new B.eK(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aL(l,A.T,!1,l,!0,A.q,l,C.aM(),m.f,l,l,l,l,l,2,C.bq(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kq,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e0H(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.am,l,A.aN0,l,l),1)
h=m.at
v=h&&j?D.bAu:A.dV
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e0I(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jD(A.by,A.h8,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.Fp.prototype={}
B.uz.prototype={}
B.US.prototype={
T(){return new B.aCI(A.J,A.J,A.at,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCI.prototype={
gaUw(){var w,v,u,t=this,s=D.Gq[t.cx],r=D.PI[t.cy],q=D.Bz[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.au5[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.egl())},
ga1f(){return D.Gq[this.cx].d/this.gaUw()},
gaM8(){return 0.1*(D.Gq[this.cx].d/0.9)/D.PI[this.cy].d},
a_(){this.a1()
this.l_()
B.z2("rocket_lander").bz(new B.egF(this),x.P)},
c04(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lh(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.egG())
return}w=D.qW[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1f()
v=v.ae(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaM8())}if(m.dy){t=m.r
v=v.aC(0,t.aK(0,t.gcm()*6*D.avR[m.d]))}t=m.r=m.r.ae(0,v.aK(0,d))
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
p=D.Bz[r].d
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
else if(s>=p)if(m.ga1f()/(D.qW[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1f()/(D.qW[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dE(80,"",500,0,0.6,"noise")
C.fJ()}}if(m.Q&&m.x>0&&A.o.F(A.k.bw(m.CW*20),2)===0)E.dE(90,"",70,0,0.12,"noise")
m.m(new B.egH())},
aee(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eU0,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dy(e[w].a,f.$1(w),new B.egn(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.d0,C.c3(A.bE,s,A.bw,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bAu(d){var w,v,u,t,s=this,r=null,q=s.ga1f()/(D.qW[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaM8()),o=D.avR[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.SG,r,r,r),A.S,s.aee("ENGINE: "+D.Gq[s.cx].b,D.Gq,new B.egc(s),new B.egd(s),A.cy),s.aee("FUEL TANK: "+D.PI[s.cy].b,D.PI,new B.ege(s),new B.egf(s),A.bc),s.aee("LANDING GEAR: "+D.Bz[s.db].b,D.Bz,new B.egg(s),new B.egh(s),A.aX),s.aee("EXTRAS (tap to add)",D.au5,new B.egi(s),new B.egj(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fmY)
o=(q?A.bc:A.cr).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaUw(),2)
u=A.k.aa(s.ga1f()/(D.qW[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Bz[s.db].d*100)+".",r,r,r,r,r,r,D.eUC,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i7,A.bR,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fg(A.n_,"Launch",new B.egk(s),A.bc,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.y,r,A.bY,r,r,A.ah),A.f,r,A.lp,new C.o(D.beb,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aVE(d,e,f,g){var w=null,v=f?A.cy:A.c.j(0.1),u=C.m(18),t=C.I(A.b5,A.r,1)
return C.oJ(A.jr,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eg9(e),new B.ega(e),w,w,w,w,new B.egb(e))},
aVD(d,e,f){return this.aVE(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cm(new B.egy(s,D.qW[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qW[w].a:"\ud83d\udd12"
o.push(new B.dy(v,s.d===w,new B.egz(s,w),r,D.qW[w].c,r))}v=C.a([s.aVD(F.ajX,new B.egA(s),s.y),A.bf,s.aVE(A.ve,new B.egB(s),s.Q,130),A.bf,s.aVD(A.MV,new B.egC(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aX:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bEH,A.f,r,r,new C.o(u,r,C.I(A.b5,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.egD(s),r,r,r,r,r,r,!1,A.a9)],p))}return B.jD(A.cy,A.h8,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eK(o,"WORLD",r),C.A(v,A.m,r,A.ba,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.beY.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qW[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=C.L(),a0=j.c,a1=C.aq(D.bgI,a0,0.25)
a1.toString
d.sau(new C.a7(A.b0,A.b6,A.x,C.a([D.b8Q,a1],x.O),l,l).aw(0,new C.aa(0,0,g,f)))
a2.aX(new C.aa(0,0,g,f),d)
w=new C.eS()
w.dH(5)
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
q=new C.eS()
q.dH(2)
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
d=C.L()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aN(r,d)
o=C.ct(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.by(o,A.hO)
a0=C.L()
a0.r=A.bk.gp(0)
a2.aD(d,a0)
a0=C.by(o.cF(2),A.rc)
d=C.L()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.j5(0,k.w)
i=k.as
if(i==="crashed"){k=C.L()
k.r=A.cy.j(0.6).gp(0)
k.z=W.GX
a2.ah(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aQ(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bF())
k=C.L()
k.r=A.aM.gp(0)
a2.aN(n,k)
i=new C.aQ(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bF())
k=C.L()
k.r=A.c.gp(0)
a2.aN(i,k)}k=e.r
m=new C.aQ(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cS(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cS(-14,-10,0,-26))
m.E(new C.bF())
i=C.L()
i.sau(D.bQQ.aw(0,D.eAw))
a2.aN(m,i)
i=C.L()
i.r=A.aX.gp(0)
a2.ah(D.vG,5,i)
i=new C.aQ(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.L()
h.r=A.aC.gp(0)
a2.aN(i,h)
f=new C.aQ(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.L()
k.r=A.aC.gp(0)
a2.aN(f,k)
g.restore()},
aq(d){return!0}}
B.aKy.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv7.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsN()}}
B.aQp.prototype={}
B.a20.prototype={}
B.b89.prototype={}
B.Ti.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ew(["skin"],x.N),o=new Float32Array(0)
return new B.aB7(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Js,D.Js,A.at,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aB7.prototype={
a_(){var w=this
w.a1()
w.l_()
w.as=new B.bYO(w.gc84())
new B.dBz(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.brO()},
c85(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eR(0,C.E(["t","init","data",$.h4S],x.N,x.z))
v.at=!0
v.ax=""
v.awT()
break
case"pick":v.m(new B.dBb(v,d))
break
case"shot":v.ag5(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
awT(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.as2[q.CW]
v=new B.dBc()
u=q.ay
u=C.B(u,C.a3(u).k("cl.E"))
A.d.fe(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.V(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eR(0,u)}},
ag5(d){return this.coB(d)},
coB(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ag5=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cB.aI(A.a.b_(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cnv(C.a([B.h4D(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ag5)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aMj)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ag5,v)},
awm(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lh(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bw(w)!==A.k.bw(v.ok)){B.a79("kick",0.4)
v.a3P(170,new B.dBA())}v.ok=w
return},
afV(d){var w,v,u,t,s=this
s.m(new B.dBd(s,d))
if(d==null){s.fx=D.Js
s.dy=1
w=s.as
if(w!=null)w.eR(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dBe(d),v),v.k("H.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.awT()
w=s.as
if(w!=null)w.eR(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cqZ(t,d)
return},
cqZ(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a79("kick",0.8)
this.a3P(260,new B.dBf())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a3P(w*70,new B.dBg(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dE(110,"",360,0.7,0.3,"saw")
else B.vF("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dE(210+e.length*4,"",80,0.6,0.55,"tri")
E.dE(2400,"",20,0,0.3,v)
break
case"muscle":E.dE(70,"",150,1,0.6,"sine")
break
case"vessel":E.dE(300,"",380,0.4,0.22,v)
B.a79("kick",0.3)
break
default:B.vF("organic",2+A.o.F(e.length,6),200,0.4)}},
cvq(d){this.m(new B.dBi(this,d))},
aVW(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.awm(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bRo(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dB8(u,w,d))
v=x.t
B.Bb("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a3P(1100,new B.dB9(u))
return}if(d==null){if(u.cx!=null)u.afV(null)
return}u.afV(d)},
bV3(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eQv,u,u,u)}else if(d==null||e==null)w=D.f37
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.jf,u,u,u),A.d0,C.d(e.b,u,u,u,u,u,u,D.Iy,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bH5,u,u,u,new B.dBa(v),u,u,u,u,"Back to the whole body",A.c7)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.UZ,u,s,t,u,u,A.n),u,u,u,u,I.afD,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dgH.h(0,g)
i.awT()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d_V
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.awm(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mj,h,h,h,new B.dBp(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Dk(h,A.pQ,q)}else q=A.km
q=C.v(C.a([C.D(q,1),new C.C(F.Xc,i.bV3(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cTg[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dy(l,n,new B.dBq(i,o),o.c,A.bZ,h))}p=C.a([new B.eK(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dy(k,k===i.cx,new B.dBr(i,k),h,A.aM,h))}p.push(new B.eK(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hx(A.cr,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dBs(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EG(D.as2[j],i.CW===j,new B.dBt(i,j),!1,h))
p.push(new B.eK(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dy("Spin",n,new B.dBu(i),D.aiL,A.aX,h),new B.fg(A.jR,"Reset view",new B.dBv(i),A.c,h),new B.dy(l,m,new B.dBw(i),A.FG,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dy("Heartbeat sound",i.k4,new B.dBx(i),A.nI,A.cr,h))
p.push(new B.eK(v,h,h))
return B.jD(A.bZ,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aJB.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brN()}}
B.bYO.prototype={
kk(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.haQ
$.haQ=v+1
u="ngmy-body-viewer-"+v
$.ye()
$.pZ().ps(u,new B.bYP(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fG(v,"message",new B.bYQ(t),!1,x.gA)
t.b=u},
eR(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bx6(w.contentWindow)
if(w!=null)J.fIL(w,e,"*")}}catch(v){}}}
B.xG.prototype={}
B.BO.prototype={}
B.n9.prototype={}
B.b8S.prototype={}
B.Tn.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aBa(C.V(w,x.a2),C.a([],x.cB),C.V(w,v),C.V(w,v),C.V(w,u),A.at,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBa.prototype={
a_(){var w=this
w.a1()
w.l_()
w.aaZ()
$.aT.x1$.push(new B.dDK(w))},
aaZ(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aaZ=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aaZ)
case 6:q=e.rK("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dDo(s,r))
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
return C.i($async$aaZ,v)},
abi(d){return this.bYJ(d)},
bYJ(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abi=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.az(),$async$abi)
case 6:r=f
q=s.cx
p=C.a3(q).k("jI<cl.E,n>")
q=C.B(new C.jI(q,new B.dDr(),p),p.k("H.E"))
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
return C.i($async$abi,v)},
av3(d,e,f,g){var w="c"+this.y++,v=new B.BO(w,e,f,g)
this.d.n(0,w,v)
return v},
mf(d,e,f){return this.av3(0,e,f,0)},
aal(d,e){var w
if(D.yv.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ae(0,new C.u(-36,w))},
t9(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQ2(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fM$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ei(m,D.cDX[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.t9(p,0)&&n.t9(p,1)
break
case"or":p=q.a
o=n.t9(p,0)||n.t9(p,1)
break
case"xor":p=q.a
o=n.t9(p,0)!==n.t9(p,1)
break
case"nand":p=q.a
o=!(n.t9(p,0)&&n.t9(p,1))
break
case"nor":p=q.a
o=!(n.t9(p,0)||n.t9(p,1))
break
case"not":o=!n.t9(q.a,0)
break
default:o=n.t9(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bKi(){return this.aQ2(null)},
lh(d){var w,v,u,t,s,r,q,p,o,n=this
n.bKi()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gai(0),v=new C.h2(w,new B.dDL()),u=n.f,t=n.w,s=0;v.C();){r=w.gU(0).a
if(u.h(0,r)===!0){q=n.fM$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fM$)
o=s+1
E.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
av4(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lI(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
arn(d){var w=this
if(w.x.A(0,A.at)){$.aT.x1$.push(new B.dDm(w,d))
return}w.m(new B.dDn(w,d))},
crh(d){this.m(new B.dDs(this,d,$.bBX()[d]))},
c2_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bBX()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a2<H.E>")
s=t.k("H.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dDh(),t),s)
A.d.b1(r,new B.dDi())
q=C.B(new C.a2(new C.bc(v,u),new B.dDj(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dDk(d,w))
return}u=d.r
p=C.dV(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fV(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQ2(0)
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
d.m(new B.dDl(d,o,a0))},
avT(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("H.E"))
r=C.T(s).k("dA<1>")
s=new C.dA(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cas(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("H.E"))
q=C.T(r).k("dA<1>")
r=new C.dA(r,q)
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
bUX(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yv.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aal(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bJf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aal(p,o)
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
c21(d){var w,v,u,t=this,s=t.avT(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eO()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dDt())
return}u=t.bJf(d)
if(u!=null)t.m(new B.dDu(t,u))
else t.m(new B.dDv(t))},
atU(d){return this.bXO(d)},
bXO(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$atU=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.avT(d)
if(s==null){w=1
break}C.jd()
t.m(new B.dDq(t,s))
case 1:return C.h(u,v)}})
return C.i($async$atU,v)},
bwq(d){if(this.x.A(0,A.at))return
this.m(new B.dDg(this,d,A.cI))
C.eO()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bBX()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.W(i.ax?A.nI:O.qS,A.ad,h,h,h,21),h,h,h,new B.dDE(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cu.j(0.14)
r=C.I(A.cu.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.ePF,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eXL,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.m8,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bc:A.f9,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.fdM,i.gc1Z(),C.bk(A.cu,h,h,h,h,h,h,h,h,h,h,A.c7))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,V.Lk,D.bnI,h,h,1/0))}u.push(C.D(C.cm(new B.dDF(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yv.h(0,r).a+": "+D.yv.h(0,r).e,h,h,h,h,h,h,A.vW,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A5.afl,A.bR,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yv.gdL(D.yv),s=s.gai(s);s.C();){r=s.gU(s)
q=new C.aV(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.aA(o.j(0.5),1,A.r,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bz,new C.x(p.a,h,D.aO8,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bs(q,q,q,q),h,h,A.n),h,h,h,A.fw,Ak.Lg,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dDG(i,r),h,h,h,h,h,h,!1,A.a9))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d3O[l]
s.push(new B.fg(A.MW,k.b,new B.dDH(i,k),A.cu,h))}s.push(new B.fg(D.xD,"Clear",new B.dDI(i),A.cr,h))
r=C.a([],g)
for(j=0;q=$.bBX(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.l6
o=i.ay
n=i.cx.t(0,j)?A.bc:A.cq
r.push(new B.dy(q.a,o===j,new B.dDJ(i,j),p,n,h))}return B.jD(A.cu,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eK(t,"PARTS",h),new B.eK(s,"TRY",h),new B.eK(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b99.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.L()
w.r=D.aav.gp(0)
a7.aX(new C.aa(0,0,0+a5,0+a6),w)
v=C.L()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.aal(j,m.c)
f=q.h(0,l)===!0
l=$.X()
e=C.a([],p)
d=new C.aQ(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.po(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cq.j(0.28).gp(0)
l.z=G.mm
s=l.H()
l=d.gbI().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dN:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbI().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ae(0,D.Ht)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aQ($.X().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.po(a6+a0,w,a5-a0,r,a5,r))
r=C.L()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aN(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c20(a7,a5.d)},
c20(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yv.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.ct(a0.c,64,64)
s=C.by(t,A.kR)
r=w.cy===v
q=s.eL(A.cx)
$.X()
p=C.L()
p.r=A.w.j(0.55).gp(0)
p.z=A.lf
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.L()
p.sau(new C.bR(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bU(a0.c,52)))
d.ah(q,52,p)}q=s.eL(A.cJ)
p=C.L()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.L()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.sau(new C.a7(A.b0,A.b6,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aD(s,q)
q=C.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.N0:D.bB_}else l=e.b
k=B.fO4(C.jC(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aC(0,new C.u(p/2,q.gbb(q)/2)))
j=B.fO4(e.a,10.5,A.c,g,g,A.I)
j.a6(d,a0.c.ae(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fO4(f,9,u?A.dN:A.c_,g,g,A.u)
i.a6(d,a0.c.ae(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aWr(d,w.aal(a0,h),o)
this.aWr(d,a0.c.ae(0,D.Ht),o)},
aWr(d,e,f){var w
$.X()
w=C.L()
w.r=D.aav.gp(0)
d.ah(e,8.5,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ah(e,8.5,w)
w=C.L()
w.r=A.c.gp(0)
d.ah(e,3.2,w)},
aq(d){return!0}}
B.aJG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buR.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brT()}}
B.Mv.prototype={
T(){return new B.aBr(C.mq(0,null,null))}}
B.JB.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A0.prototype={}
B.aBr.prototype={
c25(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.m(new B.dJb(w,e))},
bWJ(){var w=this
w.e.q()
w.e=C.mq(w.f,null,null)
w.m(new B.dJa(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oa(t,C.cb(v,A.bV,t?new B.boW(w.e,w.gc24(w),new B.dJc(d),v):new B.aFH(u,new C.cz(u.b,x.gj)),v,!1,!1,v,!1),new B.dJd(w,u),x.C)}}
B.bqt.prototype={}
B.boW.prototype={
aWs(d,e){var w=null
return new C.C(I.XF,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eQf,w,w,w),A.bz,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,T.nK,v,v,v,w.e,v,v,v,v,v,v),A.ri,D.btu],u),A.m,v,A.e,A.j,0,v,v),s=w.aWs("STUDIOS","Play, make things, and keep what you make")
$.bBY()
return C.bo(!0,C.v(C.a([new C.C(D.bsB,t,v),C.D(C.ve(0,v,A.q,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.lZ(s,v),new C.nE(A.hH,C.O2(new C.od(new B.eQA(d),22,!0,!0,!0,0,C.rD(),v),D.aM8),v),new C.lZ(w.aWs("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nE(D.bnP,C.O2(new C.od(new B.eQB(w),6,!0,!0,!0,0,C.rD(),v),D.aM8),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)}}
B.adB.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mL,p,0.3)
m.toString
w=x.O
m=C.a([m,D.ad0],w)
v=C.I(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.ad(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ad(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aK(!1,o,!0,C.ex(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a7(A.ax,A.aD,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d0,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.ba,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a7(A.ax,A.aD,A.x,m,r,r),A.n),r,A.EZ,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
B.acv.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mL,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.ad0],w)
v=C.I(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.ad(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aV(6,6)
m=C.a([A.d.gL(i),A.d.gam(i)],w)
l=C.a([new C.ad(0,A.G,A.w.j(0.45),I.aER,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bs(n,n,n,n),l,new C.a7(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gam(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aK(!1,h,!0,C.ex(C.v(C.a([new C.a6(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.W(A.Be,A.d.gL(i),k,k,k,18)],s),A.m,k,A.ba,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a7(A.ax,A.aD,A.x,f,k,k),A.n),k,A.EZ,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af)}}
B.P9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gam(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.bX(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ad(0,A.G,A.w.j(0.55),A.R1,26),new C.ad(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gam(i)
i=C.aq(A.d.gam(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.bX(j,new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,C.a([p,o,n,i],m),D.d8B,j),A.n),A.bd),0,0,0),C.ao(j,C.bX(j,new C.o(j,j,j,j,j,new C.a7(A.b0,A.b6,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bpU(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.r,1.4)
s=C.a([new C.ad(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eRM,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.S7)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fH,C.A(C.a([s,A.ew,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e2(C.ei(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e2(C.bX(j,new C.o(j,j,C.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a6(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.bX(C.bv(q,new C.an(A.W,j,A.aa,A.q,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bpU.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.aa(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j5(0,0.35)
t=C.ct(A.J,(w- -10)*1.6,s-r)
$.X()
s=C.L()
s.sau(new C.a7(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.aX(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.bpp.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bcr,D.aci],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.r,1.2),r=C.a([new C.ad(0,A.G,A.w.j(0.5),A.jV,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a6(this.c,this.d,C.bX(C.bv(q,C.b3(C.av(C.W(A.j9,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b7R(p,w),A.at),A.aq),new C.o(w,w,s,v,r,new C.a7(A.ax,A.aD,A.x,u,w,w),A.n),A.bd),w)}}
B.b7R.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.X()
w=C.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ee(A.J)
$.X()
t=C.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ah(u,30,t)},
aq(d){return!1}}
B.aFH.prototype={
T(){return new B.aFI(new C.cs(null,x.A),null,null)}}
B.aFI.prototype={
gtv(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.blb,null,1,null,v)
w.cG(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYo(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fP,null,1,null,v)
w.f6(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gav5(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc22(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaT7(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaTM(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb3U(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtv()
w.d8()
w.dR$.J(0,this.gcr_())},
cr0(){var w,v,u,t,s,r,q,p=this,o=p.gtv().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gav5().a){case 0:w=D.n2
break
case 1:w=D.tL
break
case 2:w=D.a1_
break
case 3:w=D.n2
break
case 4:w=D.cY0
break
case 5:w=D.tL
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8g)r=0.09
else r=s===D.a8h?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.bTj[v]
B.l9("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bb("bell",D.c12,1400,0.35)}}p.ax=o},
q(){this.gtv().q()
this.gYo().q()
this.btI()},
aeF(){var w=this
w.gtv().cPy(0,C.dB(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eQg(w))},
ccs(){this.gtv().bX(0)
this.m(new B.eQf(this))},
acf(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acf=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaTM(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b1,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb3U(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b1,A.aN),$.aw()))}o=C.B(u.gaT7(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bY(F.mL,null,new B.eQe(u,l,m,o),t,!0,!0,!0,A.lh,!1,!1,x.H),$async$acf)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acf,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gav5(),f=i.a.c,e=f.b,d=i.gc22(),a0=new B.A0(g,e,f.c,d,i.gaT7(),i.gaTM(),i.gb3U())
f=C.aq(A.d.gL(d),A.d.gam(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.W(i.at?A.nI:O.qS,A.ad,h,h,h,21),h,h,h,new B.eQo(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bKw,h,h,h,i.gc23(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mj,h,h,h,new B.eQp(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYo(),new B.eQq(i,a0),h),C.cm(new B.eQr(i,a0))],g)
u=i.as
t=u?i.gccr():i.gceK()
u=u?D.bAg:A.tz
s=C.aq(A.d.gL(d),A.d.gam(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c7),C.D(C.c6(i.gtv(),new B.eQs(i,a1,a0),h),1),C.aH(h,h,h,h,D.bGW,h,h,h,new B.eQt(i),h,h,h,h,"Replay",A.c7)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gam(d),0.4)
r.toString
s=B.hx(r,u+"x","Speed",2.5,0.4,new B.eQu(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d60[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gam(d),0.4)
r.toString
u.push(new B.dy(p.b,o===p.a,new B.eQv(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bTE[q]
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
i.w=o}j=new C.aA(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.r,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a7(A.ax,A.aD,A.x,n,h,h),A.a6),h,l,h,D.af8,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eQw(i,n),h,h,h,h,h,h,!1,A.a9))}return B.jD(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.et(new C.an(A.W,h,A.b_,A.q,v,h),i.f),e,C.v(C.a([t,s,new B.eK(u,"STYLE",h),new B.eK(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bvD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.n2[r]
p=A.k.D((1-A.ev.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.n2[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.n2[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dl()
l=n.a
l.$flags&2&&C.ai(l)
l[11]=0.0013
n.jJ(p)
l=v[r]
k=u[r]
j=t[r]
i=D.n2[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.n2[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.n2[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cK(0,r*118,0,f,f,f,new C.kN(q,new C.iD(n,f,A.b0,!0,f,new B.P9(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.n2[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.n2[r]
t=v+0.12
e.push(new C.cK(0,r*118-3-2,0,f,f,4,new C.m8(new B.boA(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new C.a6(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bLH(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tL[r]
p=A.ph.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tL[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tL[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dl()
k=m.a
k.$flags&2&&C.ai(k)
k[11]=0.0011
m.jt(n,n,n,1)
m.ft(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.P9(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dl()
k.ft(3.141592653589793)
k=new C.iD(k,f,A.A,!0,f,new B.bpp(a2,108,w,f),f)}e.push(new C.cK(0,r*130,0,f,f,f,new C.kN(q,new C.iD(m,f,A.A,!0,f,k,f),f),f))}return new C.a6(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cvT(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1_[w]
l.push(A.cp.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.brX(d.d,l,D.atJ,m,B.boV(e,0.4,0.62),f,B.boV(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fOA(g,w)
q=D.atJ[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cK(r,s-q*m*p+12,n,n,t,n,new C.kN(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fOA(g,w)
r=D.a1_[w]
q=r+0.15
v.push(new C.cK(s,l,n,n,t,n,new C.kN(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a6L,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a6(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bBH(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cp.av(0,B.boV(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dT(C.b3(f,f,f,new B.bo1(A.d.gL(a1),B.boV(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.dX1),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dI.av(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dl()
m=l.a
m.$flags&2&&C.ai(m)
m[11]=0.001
l.ft(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jt(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new C.z(o,new C.cK(0,0,0,0,f,f,new C.cq(A.A,f,f,new C.kN(k*(0.45+0.55*o),C.dT(new C.iD(l,f,A.A,!0,f,new B.P9(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b1(w,new B.eQ7())
A.d.v(a0,new C.J(w,new B.eQ8(),x.fR))
return new C.a6(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bAV(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tL[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lV.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tL[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.avB[q]
k=C.dl()
k.ms(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jt(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tL[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cK(0,0,0,0,e,e,new C.cq(A.A,e,e,new C.kN(m,C.dT(new C.iD(k,e,A.A,!0,e,new B.P9(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tL[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cK(0,0,0,0,e,e,new C.cq(A.A,e,e,C.dT(new C.m8(new B.b8w(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.avB[q])),e),e))}return new C.a6(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
byw(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dX5],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.n2[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cp.av(0,p)
q=D.avH[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.n2[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.n2[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dl()
d=f.a
d.$flags&2&&C.ai(d)
d[11]=0.001
f.ms(l*h+D.d0M[r]*o)
f.ft(l*0.9)
h=0.55+0.45*o
f.jt(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cq(A.A,a3,a3,new C.kN(g,C.dT(new C.iD(f,a3,A.A,!0,a3,new B.P9(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.n2[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.avH[r]
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cq(A.A,a3,a3,C.dT(new C.m8(new B.bo3(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a6(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.boA.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.aa(w-v,0,w+v,e.b)
q=C.by(u,A.ha)
$.X()
t=C.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mm
d.aD(q,t)
t=C.by(u,A.ha)
q=C.L()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.bo1.prototype={
a6(d,e){var w,v,u=this.c,t=C.ct(e.ee(A.J),e.b*u,e.a*u)
$.X()
u=C.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=W.GX
d.hZ(t,u)
u=C.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hZ(t,u)
u=t.cF(-14)
v=C.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hZ(u,v)},
aq(d){return!0}}
B.b8w.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ee(A.J),f=this.c,e=A.cp.av(0,f)
$.X()
w=C.L()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ah(g,40+e*a0.a*0.42,w)
t=new C.eS()
t.dH(this.d*17+3)
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
B.bo3.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ee(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.ct(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c5(p),n)
n.delete()}},
aq(d){return d.c!==this.c}}
B.brX.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.aa(0,d0,0+c5,d0+60)
$.X()
d0=C.L()
w=c1.b
v=x.O
d0.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.aX(d1,d0)
d0=C.L()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fOA(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.X()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lf
a4=a3.H()
t.drawOval(C.c5(new C.aa(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.aa(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.sau(new C.a7(A.b0,A.b6,A.x,C.a([a7,A.d.gam(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c5(a5),a4)
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
a6.r=C.aq(A.d.gam(w),A.w,0.5).gp(0)
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
t.drawRect(C.c5(a5),a4)
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
b8=C.by(new C.aa(b7,a7,b7+r,b5),A.ha)
$.X()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.ep(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.aa(d,a1,a3,a1+28)
J.bA(t.save())
t.clipRect(C.c5(a5),$.rF()[1],!0)
$.X()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c5(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aLn.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
B.a_d.prototype={
a4(){return"_Role."+this.b}}
B.pO.prototype={}
B.qw.prototype={}
B.BS.prototype={}
B.Yd.prototype={}
B.adr.prototype={}
B.a_q.prototype={
gY(d){return this.d}}
B.C1.prototype={}
B.aan.prototype={}
B.aaE.prototype={}
B.acz.prototype={}
B.beV.prototype={
a1o(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dE(d,"",e,g,h,f)},
b4S(d,e,f){return this.a1o(d,e,f,0,0.55)},
azy(d,e,f,g){return this.a1o(d,e,f,0,g)},
b4T(d,e,f,g){return this.a1o(d,e,f,g,0.55)},
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
aid(d,e,f,g){var w="n"+this.ay++,v=new B.qw(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AA(d,e,f){return this.aid(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.ddu(e))
A.d.bn(w.c,new B.ddv(e))
w.aZ()},
b8D(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.ml.h(0,v.b).c===D.wf)return!1
w=this.b
if(A.d.b8(w,new B.ddr(d,e)))return!1
w.push(new B.BS(d,e))
this.aZ()
return!0},
bVH(d){var w
if(d.b==="beat")return D.c1b[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aCY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.avW[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C1(u,t,j.ax,90))
w.push(new B.C1(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_q(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b4S(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_q(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.C1(u,t,j.ax,120))
j.azy(120,200,"noise",0.5)
j.b4S(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C1(u,t,j.ax,230))
w.push(new B.C1(u,t,j.ax+160,160))
w.push(new B.C1(u,t,j.ax+320,100))
j.b4T(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aan(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b4T(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.aaE(u,u.ae(0,new C.u(Math.cos(q),Math.sin(q)).aK(0,260+w.aj()*200)),t,j.ax))
j.a1o(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fJ()
j.a1o(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acz(u,D.avo[v],t,j.ax))
j.azy(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.azy(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bYi[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cmf(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gai(j.b),v=new C.h2(w,new B.dds(d));v.C();)j.ay6(w.gU(0),j.ax+D.c9v[A.o.F(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cqg[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gai(j.b),v=new C.h2(w,new B.ddt(d));v.C();)j.ay6(w.gU(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yM(w,0,v-700)},
cmf(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yd(e,"~"+d))},
ay6(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.adr(d.a,v,e,w))
u.push(new B.Yd(w,v))},
aGg(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.B(new C.bc(w,v),v.k("H.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aCY(r)
u.n(0,r,o.ax+o.bVH(s))}}w=o.c
v=C.T(w).k("a2<1>")
q=C.B(new C.a2(w,new B.ddw(o),v),v.k("H.E"))
if(q.length!==0){A.d.bn(w,new B.ddx(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b_(u,1)
for(u=A.d.gai(v),r=new C.h2(u,new B.ddy(p));r.C();)o.ay6(u.gU(0),o.ax)}else o.aCY(u)}}A.d.bn(o.d,new B.ddz(o))
A.d.bn(o.e,new B.ddA(o))
A.d.bn(o.f,new B.ddB(o))
A.d.bn(o.w,new B.ddC(o))
A.d.bn(o.x,new B.ddD(o))
A.d.bn(o.r,new B.ddE(o))
o.aZ()},
uG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cHm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a8(0)
for(o=x.j,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gU(n)
u=C.t(J.q(v,"k"))
if(!D.ml.ag(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qw(t,u,new C.u(C.f8(J.q(v,"x"))*k.cy.a,C.f8(J.q(v,"y"))*k.cy.b),A.k.O(C.f8(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gU(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ag(0,q)&&m.ag(0,p))n.push(new B.BS(q,p))}k.aZ()
return!0}catch(l){return!1}},
cKl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qw(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b8D(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fc.prototype={}
B.UR.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aCH(new B.beV(C.V(w,x.f3),v,u,t,s,r,q,p,o,C.V(w,n),C.V(w,n),C.V(w,n),C.V(w,n),A.cI,A.K,A.at,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aCH.prototype={
aaS(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aaS=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$aaS)
case 6:q=n.ka(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.efG(s))
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
return C.i($async$aaS,v)},
a7U(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a7U=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.efv(s))
u=3
w=6
return C.b(C.az(),$async$a7U)
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
return C.i($async$a7U,v)},
bHB(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.efx())+"|"+A.d.cI(o,0,new B.efy())
if(v===p.ch)return p.CW
u=new B.efB()
t=x.s
s=C.a([],t)
r=new B.efC(p,s,u)
for(n=new C.bc(n,w).gai(0),w=new C.h2(n,new B.efz());w.C();){q=n.gU(0)
if(!A.d.b8(o,new B.efA(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.da(s,0,C.dJ(5,"count",x.S),x.N).dE(0)},
a_(){var w,v=this
v.a1()
v.aaS()
v.d.db=v.ay
w=v.q6(new B.eg5(v))
w.iT(0)
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
w.bsL()},
aap(d){return this.bV9(d)},
bV9(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aap=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$aap)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cHm(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aUb(A.d.gL(D.auW))
if(s.c!=null)s.m(new B.efF())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aap,v)},
aUb(d){this.d.cKl(0,d.c,d.d)
this.DB()},
DB(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cM(A.ly,new B.efr(this))},
av6(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("H.E"))
r=C.T(s).k("dA<1>")
s=new C.dA(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cat(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("H.E"))
q=C.T(r).k("dA<1>")
r=new C.dA(r,q)
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
bUY(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.ml.h(0,r.b).c===D.wf)continue
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
c28(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.haR(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
ctI(d){var w,v,u,t,s,r,q=this,p=q.av6(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eO()
u=v.b
if(u==="button"){w.aCY(p)
return}if(q.r)return
t=D.ml.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.q8)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aZ()
q.DB()
return}if(q.r)return
r=q.c28(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aZ()
q.DB()}},
cbK(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cat(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.av6(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cbL(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
aZ8(){var w,v,u=this
if(u.z!=null){w=u.bUY(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b8D(v,w)}else v=!1
if(v){C.jK()
u.DB()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DB()
u.x=null}},
ab4(d){return this.bXP(d)},
bXP(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ab4=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.av6(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jd()
p=t.c
p.toString
w=3
return C.b(C.bY(F.mL,null,new B.efI(q),p,!0,!0,!1,A.lh,!1,!1,x.y),$async$ab4)
case 3:if(f===!0){r.W(0,s)
t.DB()}case 1:return C.h(u,v)}})
return C.i($async$ab4,v)},
c26(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AA(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eO()
this.DB()},
aeN(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aeN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bY(F.mL,null,new B.efK(),s,!0,!0,!0,A.lh,!1,!1,x.es),$async$aeN)
case 2:t=e
if(t!=null)u.aUb(t)
return C.h(null,v)}})
return C.i($async$aeN,v)},
acg(d){var w=0,v=C.j(x.H),u=this,t
var $async$acg=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.efu(),t,null,!0,!0,x.y),$async$acg)
case 2:if(f===!0){u.d.a8(0)
u.DB()}return C.h(null,v)}})
return C.i($async$acg,v)},
B(d){var w=this,v=null,u=C.a([C.agL(w.r?new C.bI(A.a3,v,v,new C.C(A.F_,C.hc(D.bEX,D.f70,new B.eg3(w),v),v),v):w.c29(),A.bb,A.ir),C.D(C.cm(new B.eg4(w)),1)],x.p)
if(!w.r)u.push(w.coE())
return C.cb(v,A.bV,C.bo(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bDl(){var w=null,v=new B.efw(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bs.j(0.5),A.r,1)
return C.bZ(0,C.ei(C.av(C.p(w,C.cd(C.v(C.a([D.fhG,A.au,D.foN,A.az,v.$4(A.ou,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.FL,A.cu,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l5,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.aiY,A.cq,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fo7,new C.bI(A.a7,w,w,C.bK(!1,D.feW,w,w,!0,w,w,this.gbDe(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ah),A.f,w,A.Um,new C.o(F.mL,w,s,t,w,w,A.n),w,w,w,A.fx,A5.agm,w,w,w),w,w,w),u,!0),0,0,0)},
c29(){var w=this,v=null,u=C.aH(v,v,v,v,T.nK,v,v,v,new B.efQ(w),v,v,v,v,v,v),t=w.a7m(A.ML,"How it works",new B.efR(w),!0),s=w.ay?A.nI:O.qS
return new C.C(D.brQ,C.A(C.a([u,D.bti,t,w.a7m(s,"Sound",new B.efS(w),!0),w.a7m(A.dV,"Ideas",w.gcfr(),!0),w.a7m(D.xD,"Clear",w.gc27(w),!0),w.aLr(A.iN,"Show",new B.efT(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aLr(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Ad.v1,C.aF(!1,A.a1,!0,u,C.aK(!1,t,!0,C.ho(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.af),w)},
a7m(d,e,f,g){return this.aLr(d,e,f,g,!1)},
coE(){var w=null,v=new B.efM(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wf),v.$2("CHANGE",D.D8),v.$2("REACT",D.q8)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),A.f,w,w,new C.o(D.E1,w,new C.bP(new C.aA(u,1,A.r,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bn5,w,w,w)},
coF(d){var w,v,u,t,s=null,r=D.ml.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.r,1)
return new C.C(A.fw,C.aE(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.d0,C.d(r.a,s,1,A.a2,s,s,s,D.aO8,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a7(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hG,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.efL(this,d),s,s,s,s,s,s,!1,A.a9),s)}}
B.beW.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bA(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.X()
u=C.L()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.X()
o=C.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aX(new C.aa(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d.push(new C.po(h+a1,i,f-a1,g,f,g))
a2=D.ml.h(0,k.b).d
a3=D.ml.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rf(new C.u(h,i),new C.u(f,g))
e.sau(new C.a7(A.a3,A.a7,A.x,d,b4,b4).aw(0,new C.aa(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbI().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.haR(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mm
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ae(0,D.Ht)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aQ($.X().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.po(t+a1,o,w-a1,i,w,i))
i=C.L()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aN(a0,i)
i=C.L()
i.r=A.c.gp(0)
b8.ah(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dX.av(0,v)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.la(o,i,A.dX.av(0,v))
h.toString
i=C.la(o,i,A.dX.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rf(i,h)
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
i.z=A.jc
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jc
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(new C.bR(P.q9,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.beX(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cbj(b8,b5.d,b6)
b7.restore()},
cbj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.ml.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.ct(e.c,64,64)
t=C.by(u,A.jX)
s=t.eL(A.cx)
$.X()
r=C.L()
r.r=A.w.j(0.55).gp(0)
r.z=A.lf
d.aD(s,r)
if(v>0){s=t.cF(6)
r=C.L()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yy
d.aD(s,r)}s=t.eL(A.cJ)
r=C.L()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.L()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.sau(new C.a7(A.b0,A.b6,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aD(t,r)
r=C.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.beX(C.jC(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aC(0,new C.u(s/2,r.gbb(r)/2)))
n=B.beX(h.a,11,A.c,j,j,A.I)
n.a6(d,e.c.ae(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.avo[A.o.F(e.d,6)]:j
h=h.c
if(h===D.q8){s=e.c.ae(0,new C.u(0,62))
r=C.L()
r.r=D.avW[A.o.F(e.d,6)].gp(0)
d.ah(s,5,r)}else if(m!=null){l=B.beX(m,9.5,A.ay,j,j,A.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.beX(m,9.5,A.ay,j,j,A.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wf)k.aZZ(d,e.c.aC(0,D.Ht),q)
k.aZZ(d,e.c.ae(0,D.Ht),q)},
aZZ(d,e,f){var w
$.X()
w=C.L()
w.r=A.bV.gp(0)
d.ah(e,9,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ah(e,9,w)
w=C.L()
w.r=A.c.gp(0)
d.ah(e,3.5,w)},
aq(d){return!0}}
B.aKw.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bju.prototype={}
B.P0.prototype={
gY(d){return this.d}}
B.V6.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.biy(new C.cs(null,x.A),w,v,A.cI,A.bx,D.Ea,null,null)}}
B.biy.prototype={
aXH(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bw((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aun[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.l9("synth",u,420,0.3)
break
case"rainbow":B.l9("bell",u,700,0.35)
break
case"stars":B.l9("pluck",u+12,400,0.4)
break
case"sparks":E.dE(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dE(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c57(d){return this.aXH(d,!1)},
a_(){var w,v=this
v.a1()
w=v.q6(new B.erw(v))
w.iT(0)
v.w!==$&&C.aO()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bsU()},
gaZs(){var w=this.Q
return w<0?new H.lS(1,A.k.F(this.y*0.18,360),0.85,1).i7():D.PK[w]},
aPI(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaZs(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cq,A.aC,v.aj())
m.toString
j.push(new B.P0(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.P0(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.P0(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aWu(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaZs()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bju(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aPI(e)
r.aXH(e,!0)
r.m(new B.er7())},
aWt(){this.ax=null
this.m(new B.er6())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mj,n,n,n,new B.erg(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bpP(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.b28)
k=C.aE(A.c5,new C.an(A.W,n,A.b_,A.q,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,new B.erh(o),new B.eri(o),new B.erm(o),n,n,n,n,n,n,n,n,n,new B.ern(o),new B.ero(o),n,n,n,!1,A.a9)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cNX[w]
j.push(new B.dy(v.b,o.z===v.a,new B.erp(o,v),v.c,A.bZ,n))}u=C.a([new B.EG(A.c,o.Q<0,new B.erq(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EG(D.PK[t],o.Q===t,new B.err(o,t),!1,n))
s=o.as
s=B.hx(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.ers(o),s)
r=o.ch
q=r?A.nI:O.qS
q=C.a([new B.dy("Sound",r,new B.ert(o),q,A.bZ,n),new B.fg(A.qR,"Undo",new B.erj(o),A.c,n),new B.fg(D.xD,"Clear",new B.erk(o),A.cr,n)],m)
for(w=0;w<4;++w){p=D.d2e[w]
q.push(new B.EG(p,o.at.A(0,p),new B.erl(o,p),!1,n))}return B.jD(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.et(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eK(j,"BRUSH",n),new B.eK(u,"COLOUR",n),s,new B.eK(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bpP.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.X()
w=C.L()
v=a4.e
w.r=v.gp(v)
a6.aX(new C.aa(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.X()
o=C.a([],t)
n=new C.aQ(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.T(q),m=p.k("pK<1>"),l=new C.pK(q,1,a5,m),l.GE(q,1,a5,p.c),l=new C.bW(l,l.gM(0),m.k("bW<aj.E>")),m=m.k("aj.E");l.C();){p=l.d
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
q.e=A.fy
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
q.e=A.fy
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fy
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.lS(1,A.o.F(i*5,360),0.85,1).i7()
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
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.lS(1,A.o.F(a3*23,360),0.7,1).i7():l
a4.c2a(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=T.Qd
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c2a(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=C.a([],x.v),n=new C.aQ(p.r,A.ap,null,null,o)
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
p=C.L()
p.r=h.j(0.4).gp(0)
p.z=A.jc
d.aN(n,p)
p=C.L()
p.r=h.gp(0)
d.aN(n,p)},
aq(d){return!0}}
B.Vi.prototype={
T(){return new B.aCX(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b1,A.aN),$.aw()),null,null)}}
B.aCX.prototype={
gIc(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tc,null,1,null,v)
w.cG(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIc()
w.d8()
w.dR$.J(0,this.gbU7())},
bU8(){var w,v,u,t,s,r,q,p=this,o=p.gIc().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lO:new C.m_(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dE(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dE(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.l9(s,D.atk[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIc().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bt_()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m_(h)
w=C.B(h,C.a3(h).k("H.E"))}v=D.PK[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mj,j,j,j,new B.ey5(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.avp[k.y]
s=C.bv(t,C.bX(C.av(C.c6(k.gIc(),new B.ey6(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aL(j,A.T,!1,j,!0,A.q,j,C.aM(),i,j,j,j,j,j,2,C.bq(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.CO,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.ey7(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hm,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cq4[r]
i.push(new B.dy(q.b,k.r===q.a,new B.ey8(k,q),j,A.cq,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EG(D.PK[o],k.w===o,new B.ey9(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nI:O.qS
l=C.a([new B.dy(m,n,new B.eya(k),l,A.cq,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EG(D.avp[o][0],k.y===o,new B.eyb(k,o),!1,j))
n.push(A.bo)
n.push(new B.fg(A.mf,"Replay",new B.eyc(k),A.c,j))
m=k.x
return B.jD(A.cq,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bB,new C.et(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eK(i,"MOVE",j),new B.eK(p,"COLOUR",j),new B.eK(l,"SOUND",j),new B.eK(n,"BACK",j),B.hx(A.cq,A.o.u(A.k.V(m)),"Size",96,28,new B.eyd(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bWT(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
if(u&&(e&1)===0)w=A.b9
else w=u?A.bZ:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lV.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.lS(1,A.k.F(g*360+e*40,360),0.75,1).i7()
A.d.a8(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dT(C.e9(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aKF.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aKL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.ZK.prototype={}
B.UO.prototype={
T(){var w=C.a([],x.aS)
return new B.aCz(new C.cs(null,x.A),w,A.cI,A.at,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCz.prototype={
gach(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b_E(){return new H.lS(1,this.f.aj()*360,0.6,1).i7()},
apG(d,e,f,g){var w=this,v=w.gach().ae(0,new C.u(Math.cos(e),Math.sin(e)).aK(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.ZK(v,new C.u(-t,s).aK(0,r).aK(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b_E(),C.a([],x.g)))},
bCI(d,e,f){return this.apG(d,e,f,!1)},
bCH(d,e){return this.apG(d,e,1,!1)},
cqV(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bCH(40+w*u/5,v.aj()*3.141592653589793*2)},
bDA(){var w=this.r
this.bCI(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.l_()},
lh(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
w=a2.e
v=w.length
if(v===0&&a2.fM$<300)return
u=a2.gach()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.u(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.K)(w),++h){g=w[h]
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
n.a=new C.u(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gam(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cz(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lM(v.a-s)!==J.lM(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fM$-n.r>250){n.r=a2.fM$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.l9("bell",D.atk[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.ecj(u),C.T(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dE(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.eck(a2,u))},
cfk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gach()
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
gaTR(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aK(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mj,r,r,r,new B.ec7(s,d),r,r,r,r,"Share",r)],q),o=C.cm(new B.ec8(s)),n=s.w
n=B.hx(A.cy,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.ec9(s),n)
w=s.x
w=B.hx(A.cy,A.k.aa(w,1)+"x","Time",3,0.2,new B.ecb(s),w)
v=s.Q
v=B.hx(A.cy,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ecc(s),v)
u=s.ax
t=u?A.nI:O.qS
return B.jD(A.cy,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eK(C.a([new B.dy("Sound",u,new B.ecd(s),t,A.cy,r),new B.dy("Trails",s.z,new B.ece(s),A.N_,A.cy,r),new B.dy("Planets pull each other",s.y,new B.ecf(s),A.y2,A.cy,r)],q),r,r),new B.eK(C.a([new B.fg(A.me,"Solar system",new B.ecg(s),A.cy,r),new B.fg(A.n_,"Comet",new B.ech(s),A.c,r),new B.fg(A.mc,"Cluster",new B.eci(s),A.c,r),new B.fg(D.xD,"Clear",new B.eca(s),A.cr,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjh.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.X()
w=C.L()
w.r=D.VB.gp(0)
d.aX(new C.aa(0,0,0+g,0+f),w)
v=new C.eS()
v.dH(5)
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
t=C.L()
s=x.O
t.sau(new C.bR(A.A,0.5,A.x,h,0,C.a([A.cy.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.ah(g,f,t)
t=C.L()
t.sau(D.e7u.aw(0,C.bU(g,o)))
d.ah(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
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
q.z=G.mm
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sau(new C.bR(P.q9,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.L()
t.c=2
t.r=A.j2.gp(0)
d.bA(g,f,t)
t=C.L()
t.r=A.c.gp(0)
d.ah(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
aq(d){return!0}}
B.aau.prototype={}
B.Vd.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.biD(new C.cs(null,x.A),w,v,A.cI,A.at,$,A.bx,0,C.a([],x.X),null,null)}}
B.biD.prototype={
a_(){this.a1()
this.l_()},
c2b(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.aau(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lh(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.c2b()
w=a2.f
A.d.bn(w,new B.exx(a2))
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
f=new C.u(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.K)(w),++d){k=w[d].a
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
A.d.bn(w,new B.exy(a2))
if(w.length<a1&&a2.ch)B.l9("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fM$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fM$
B.l9("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mj,l,l,l,new B.exm(m,d),l,l,l,l,"Share",l)],k),i=C.cm(new B.exn(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cPw[w]
h.push(new B.dy(v.b,m.at===v.a,new B.exo(m,v),v.c,A.bc,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.czT[w]
u.push(new B.dy(t.b,m.ax===t.a,new B.exp(m,t),l,A.bc,l))}s=m.ch
r=s?A.nI:O.qS
r=C.a([new B.dy("Sound",s,new B.exq(m),r,A.bc,l)],k)
s=m.x
s=B.hx(A.bc,A.o.u(A.k.V(s)),"How many",150,15,new B.exr(m),s)
q=B.hx(A.bc,l,"Together",2.5,0,new B.exs(m),m.y)
p=B.hx(A.bc,l,"Apart",2.5,0,new B.ext(m),m.z)
o=B.hx(A.bc,l,"Same way",2.5,0,new B.exu(m),m.Q)
n=m.as
return B.jD(A.bc,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eK(h,"TOUCH",l),new B.eK(u,"LOOK",l),new B.eK(r,l,l),s,q,p,o,B.hx(A.bc,A.o.u(A.k.V(n)),"Speed",280,50,new B.exv(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bqF.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.ac6,D.bh4],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,R.KA],v):C.a([D.bee,D.b5V],v)}v=0+a6.a
u=0+a6.b
t=$.X()
s=C.L()
s.sau(new C.a7(A.b0,A.b6,A.x,w,a3,a3).aw(0,new C.aa(0,0,v,u)))
a5.aX(new C.aa(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cq.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cq.j(0.25).gp(0)
n.z=G.mm
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.lS(1,j,0.7,1).i7()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jc
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
j.sau(new C.a7(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).aw(0,D.eAs))
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cr
else a1=v==="scare"?A.cq:A.bc
v=u?12:22
u=C.L()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ah(a4,v,u)}},
aq(d){return!0}}
B.aaX.prototype={}
B.Tl.prototype={
T(){var w=C.a([],x.bi)
return new B.aB9(w,A.cI,A.at,C.V(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aB9.prototype={
gHB(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gabl(){return 54-8*(this.r/100)},
a_(){this.a1()
this.l_()
B.z2("chain_burst").bz(new B.dCT(this),x.P)},
aWw(){return B.vC("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ay9(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.aaX(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.lS(1,u.aj()*360,0.6,1).i7()))}},
Yp(d){var w,v=this
if(d==null)return 0
w=(v.fM$-d)/1000
if(w<0.4)return v.gabl()*A.dX.av(0,w/0.4)
if(w<1.1)return v.gabl()
if(w<1.5)return v.gabl()*(1-(w-1.1)/0.4)
return 0},
lh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.ay9()
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
if(v!=null)n.push(new C.z(v,j.Yp(j.ax)))
for(v=A.d.gai(w),s=new C.h2(v,new B.dCU());s.C();){r=v.gU(0)
n.push(new C.z(r.a,j.Yp(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fM$
E.dE(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eO()
break}}}if(!(j.at!=null&&j.Yp(j.ax)>0||A.d.b8(w,new B.dCV(j)))&&j.fM$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHB()){if(j.as>=j.gHB()*1.5)k=3
else k=j.as>=j.gHB()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bb("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aWw()}else E.dE(120,"",300,0,0.3,"saw")}}},
aWv(d){this.m(new B.dCJ(this,d))
this.aWw()},
aci(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aci=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dCM(u),s,null,!0,!0,x.S),$async$aci)
case 2:t=e
if(t!=null)u.aWv(t)
return C.h(null,v)}})
return C.i($async$aci,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHB(),t=w.x.h(0,""+w.r)
return B.jD(A.bZ,A.h8,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cm(new B.dCQ(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.qN,"Levels",w.gc2c(),A.bZ,v),new B.fg(A.jR,"New board",new B.dCR(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
at9(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNt,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bUA(d,e){return this.at9(d,e,A.c)}}
B.b8R.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.X()
w=C.L()
w.r=D.Ea.gp(0)
d.aX(new C.aa(0,0,0+e.a,0+e.b),w)
v=new B.cIu(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mm
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
B.aJE.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buQ.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brR()}}
B.aKt.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv6.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsI()}}
B.aKI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bve.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsX()}}
B.F8.prototype={
gcJC(){return this.a.aC(0,this.b).gcm()>4}}
B.abM.prototype={}
B.UI.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bic(new C.cs(null,x.A),w,v,A.cI,A.at,$,A.bx,0,C.a([],x.X),null,null)}}
B.bic.prototype={
aNr(d){return new H.lS(1,A.o.F(d*29,360),0.6,1).i7()},
Z8(d){var w,v=D.BL.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bw(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.ei(w,u)},
aPY(d){A.d.bn(this.e,new B.e7N(this,d))},
cn7(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ae(0,w.aK(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
awJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Z8(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.F8(p,r,k,new H.lS(1,A.o.F(k*29,360),0.6,1).i7()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Z8(h)
f.push(new B.F8(h,h,k,new H.lS(1,A.o.F(k*29,360),0.6,1).i7()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Z8(h)
f.push(new B.F8(h,h,k,new H.lS(1,A.o.F(k*29,360),0.6,1).i7()))}}},
a_(){this.a1()
this.l_()},
c2e(d,e){var w,v=this.fM$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.l9(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lh(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.abM(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.lS(1,v.aj()*360,0.5,1).i7()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.K)(w),++r){q=w[r]
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
q.b=new C.u(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.K)(u),++i){h=u[i]
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
if(a1<0){a2.c2e(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.e8b(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.W(q.ay?A.nI:O.qS,A.ad,p,p,p,21),p,p,p,new B.e80(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mj,p,p,p,new B.e81(q,d),p,p,p,p,"Share",p)],o),m=C.cm(new B.e82(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cSJ[w]
l.push(new B.dy(v.b,q.x===v.a,new B.e83(q,v),v.c,A.b9,p))}u=C.a([],o)
for(t=J.aW(D.BL.geg(D.BL));t.C();){s=t.gU(t)
u.push(new B.dy(s,q.y===s,new B.e84(q,s),p,A.b9,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.awh[w]
t.push(new B.dy(r.b,q.z===r.a,new B.e85(q,r),p,A.b9,p))}s=q.Q
return B.jD(A.b9,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eK(l,"TOOL",p),new B.eK(u,"SCALE",p),new B.eK(t,"SOUND",p),B.hx(A.b9,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.e86(q),s),new B.eK(C.a([new B.fg(D.bAP,"Stairs",new B.e87(q),A.b9,p),new B.fg(An.MK,"Pinball",new B.e88(q),A.c,p),new B.fg(A.mc,"Random",new B.e89(q),A.c,p),new B.fg(D.xD,"Clear",new B.e8a(q),A.cr,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bfQ.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.X()
w=C.L()
w.sau(D.bRp.aw(0,new C.aa(0,0,a0,a1)))
a2.aX(new C.aa(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){s=a0[t]
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
q.z=A.jc
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
p.z=A.jc
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sau(new C.bR(P.q9,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.L()
u.c=5
u.d=A.bO
u.r=A.ay.gp(0)
a2.bA(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.r0
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new C.bR(P.q9,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.acg.prototype={}
B.UN.prototype={
T(){var w=C.a([],x.gB)
return new B.aCy(new C.cs(null,x.A),w,A.cI,A.at,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCy.prototype={
gaWx(){var w=this.w
return new C.u(w.a/2,w.b/2)},
awU(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ay5(d){var w=D.BL.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.ei(v,u)},
a_(){this.a1()
this.l_()},
aON(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.acg(w,A.k.F(t/v+u,1)))}},
lh(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fM$
if(p.Q){r=p.z
s=p.ay5(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.l9(r,s+12,q,0.55)}}}},
c2f(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaWx()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.awU(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.T(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.K)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.awU(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ebH(h,n).$0()
h.c.e6()
return}}h.m(new B.ebI(g,h,t))
if(h.Q)B.l9(h.z,h.ay5(g.a)+12,700,0.5)
C.eO()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.W(r.Q?A.nI:O.qS,A.ad,q,q,q,21),q,q,q,new B.ebP(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mj,q,q,q,new B.ebQ(r,d),q,q,q,q,"Share",q)],p),n=C.cm(new B.ebR(r)),m=r.x
m=B.hx(A.by,""+A.k.V(m),"Tempo",180,40,new B.ebS(r),m)
w=C.a([],p)
for(v=J.aW(D.BL.geg(D.BL));v.C();){u=v.gU(v)
w.push(new B.dy(u,r.y===u,new B.ebT(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.awh[t]
v.push(new B.dy(s.b,r.z===s.a,new B.ebU(r,s),q,A.by,q))}return B.jD(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eK(w,"SCALE",q),new B.eK(v,"SOUND",q),new B.eK(C.a([new B.fg(A.dV,"Demo",new B.ebV(r),A.by,q),new B.fg(A.mc,"Random",new B.ebW(r),A.c,q),new B.fg(D.xD,"Clear",new B.ebX(r),A.cr,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bji.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.X()
w=C.L()
w.r=D.VB.gp(0)
a5.aX(new C.aa(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.u(0,u))
r=C.L()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sau(new C.a7(A.b6,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.aa(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.lS(1,A.k.F(s.$1(l)*23,360),0.55,1).i7()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d8v[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.km(new C.eo(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ch,new C.jm(1),a4,a4,a4,a4,A.cd,a4)
i.eO()
o=i.b.c
m=J.fIs(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.u(p+-o/2,n+(m-h.gbb(h)-2)))}w=C.L()
w.sau(D.e77.aw(0,C.bU(t,16)))
a5.ah(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.lS(1,A.k.F(s.$1(a0)*23,360),0.55,1).i7()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fIs(v.$1(a0))
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jc
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.sau(new C.bR(P.q9,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aKr.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv4.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsG()}}
B.aKs.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv5.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsH()}}
B.rX.prototype={}
B.b7K.prototype={}
B.UL.prototype={
T(){var w=x.S
return new B.aCw(C.a([],x.aq),C.V(w,w),C.aX(w),D.eG6)}}
B.aCw.prototype={
a_(){this.a1()
B.z2("molecule_maker").bz(new B.ebb(this),x.P)},
ahN(d){var w={}
w.a=0
this.f.bH(0,new B.eaY(w,d))
return w.a},
gaWD(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.hSs(t,this.f,D.a1u[this.d])},
c2w(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eS()
w.dH(t*7+3)
t=v.y
v.m(new B.eaS(v,e,t.a,w,t.b))
B.vF("pop",u.length,90,0.35)},
ava(d){return this.m(new B.eaT(this))},
aWE(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c2C(d){this.m(new B.eaX(this,this.aWE(d)))},
cjE(){var w=this.r
if(w==null)return
this.m(new B.eaW(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a1u[k.d],h=k.gaWD()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vy.h(0,w[u].a).a-k.ahN(u)
w=i.c
w=w.gdL(w)
t=w.dt(w,new B.eb5(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bc:A.ht
r=x.p
s=C.v(C.a([new C.C(A.fG,B.f4Y(w,s,h&&k.d<12?new B.fg(A.j7,"Next",new B.eb6(k),A.bc,j):j),j),C.D(C.cm(new B.eb7(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dy(p+D.a1u[u].b,k.d===u,new B.eb8(k,u),j,A.ht,j))}q=C.a([],r)
for(p=D.vy.gdL(D.vy),p=p.gai(p);p.C();){o=p.gU(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dL:m.b
q.push(new B.dy(n+" \xb7 "+m.a,!1,new B.eb9(k,o),j,l,j))}return B.jD(A.ht,A.h8,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eK(w,"GOAL",j),new B.eK(q,"ADD",j),new B.eK(C.a([new B.dy("Remove selected atom",!1,k.gcjD(),A.e4,A.cr,j),new B.dy("Clear all",!1,k.gc2x(k),A.jR,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bgx.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.ht.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bH(0,new B.dly(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vy.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jc
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
h.sau(new C.bR(A.Ja,0.5,A.x,a3,0,C.a([f,g,e],r),I.auv,a3).aw(0,i))
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
a0=n?A.bk:A.aJ
j=m.b
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.km(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nb),A.a5,A.ch,new C.jm(1),a3,a3,a3,a3,A.cd,a3)
a1.eO()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbb(j)/2)))}if(n===0){d=C.ih(a3,a3,a3,a3,D.eOA,A.a5,A.ch,a3,A.er,A.cd)
d.eO()
d.a6(a4,new C.u((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.TJ.prototype={
T(){var w=x.s
return new B.bhs(C.a([],w),C.a([],w))}}
B.bhs.prototype={
a_(){this.a1()
this.auu()
B.z2("dna_lab").bz(new B.dLf(this),x.P)},
gb0R(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a2u.h(0,w[u])
t.toString
s.push(t)}return A.d.fT(s)},
ga7V(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb0R(),w,v))}return u},
auu(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eS()
k.dH(l.e*31+l.d*7+C.Bo(new C.S(Date.now(),0,!1)))
w=new B.dL4(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mv(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a2u.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fT(r))}if(!A.d.b8(t,new B.dL3()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aZF()},
aZF(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fR4(s.ga7V()[r])
v=J.dH(D.BM.geg(D.BM),new B.dL5(w)).dE(0)
u=new C.eS()
u.dH(r+s.e)
A.d.fn(v,u)
u=C.a([w],x.s)
A.d.v(u,C.da(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.eS()
t.dH(s.e*3+r)
A.d.fn(u,t)
s.z=u},
aWC(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dep.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a2u.h(0,w.f[v])
u.toString
break A}u=B.fR4(w.ga7V()[v])
break A}w.m(new B.dL2(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dLd(),e=new B.dL8(),d=h.d===2?h.gb0R():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mu,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bZ.j(0.18):A.K
q=new C.aV(10,10)
p=new C.aA(t.length===s?A.bZ:A.bF,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga7V()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.co(A.aQ,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bs(q,q,q,q),g,g,A.n),g,g,g,D.bmc,A.en,g,g,g))}v.push(C.c3(A.bE,u,A.bw,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c3(A.bE,u,A.bw,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a6(34,g,new C.cq(A.A,g,g,C.W(Ai.MR,j<t.length?A.ay:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lf,C.c3(A.bE,u,A.bw,0,0),g)],a0))}v.push(A.ao)
v.push(C.d(w,g,g,g,g,g,g,Q.mu,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bc.j(0.25):A.dq
q=new C.aV(12,12)
o=j<t.length
p=new C.aA(o?A.bc:A.b5,1,A.r,-1)
if(o){o=D.BM.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bs(q,q,q,q),g,g,A.n),g,g,g,g,A.eh,g,g,g))}v.push(C.c3(A.bE,u,A.bw,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c3(A.bE,u,A.bw,0,0))}v.push(A.az)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f4Y(u,t>=(h.d===2?3:9)?A.bc:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f4Y(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,M.SI,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.y,g,A.bB,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dy(D.cYe[j],h.d===j,new B.dL9(h,j),g,A.bZ,g))
u=C.a([new B.eK(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fg(A.jR,"New strand",new B.dLa(h),A.bc,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.BM.h(0,i)
q.toString
a0.push(new B.fg(D.Zu,q,new B.dLb(h,i),A.bZ,g))}u.push(C.c3(A.bE,a0,A.bw,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.atp:D.cI2
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aV(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eOP,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bs(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dLc(h,k),g,g,g,g,g,g,!1,A.a9))}u.push(C.A(a0,A.m,g,A.pH,A.j,0,g,g))}return B.jD(A.bZ,A.h8,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.TZ.prototype={
T(){return new B.aBD(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aBD.prototype={
a_(){var w,v=this
v.a1()
w=v.q6(v.gc2y())
w.iT(0)
v.d!==$&&C.aO()
v.d=w
B.z2("ecosystem").bz(new B.dO4(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bs5()},
gaKM(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c2z(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gam(v)[3]>0.25){w=C.B(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cz(v,0)}if(m.gaKM()){w=m.Q+=l
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
m.m(new B.dNS())},
a96(d){this.m(new B.dNR(this,d))
B.vF("pop",3,120,0.4)},
c2B(){return this.m(new B.dNT(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.Xb,B.f4Y(r,t.gaKM()?A.bc:A.cr,s),s),C.D(new C.C(D.bmK,C.bv(C.m(18),C.b3(s,s,s,new B.bbT(t.f,t.r,t.w,s),A.f_),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.eVK,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hx(A.bc,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dNX(t),w)
v=t.y
v=B.hx(A.bW,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dNY(t),v)
u=t.z
return B.jD(A.bc,A.h8,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hx(A.cy,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dNZ(t),u),new B.eK(C.a([new B.dy("Drought",!1,new B.dO_(t),A.y0,A.aM,s),new B.dy("Disease",!1,new B.dO0(t),D.bAH,A.by,s),new B.dy("+ Foxes",!1,new B.dO1(t),s,A.cy,s),new B.dy("+ Rabbits",!1,new B.dO2(t),s,A.bW,s),new B.dy("Reset",!1,t.gc2A(),A.jR,A.aX,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bbT.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.X()
w=C.L()
w.sau(D.bPu.aw(0,new C.aa(0,0,d,a0)))
a1.aX(new C.aa(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uA,A.bk,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.L()
t.r=a0.gp(0)
a1.aX(new C.aa(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eS()
r.dH(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.h_.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d0Z(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.aa(10,a0,e,u)
t=C.L()
t.r=D.bac.gp(0)
a1.aX(new C.aa(0,f,d,f+g),t)
i=C.L()
i.r=A.dq.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d10(h,j,a1)
g.$3(0,100,A.bk)
g.$3(1,120,A.bW)
g.$3(2,24,A.cy)
g=new B.d1_(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bk,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bW,102)
g.$3("Foxes "+A.k.V(w[2]),A.cy,200)},
aq(d){return!0}}
B.aJS.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aQf.prototype={
guy(){return A.d.cI(this.a,0,new B.bE1())}}
B.Td.prototype={
T(){var w=x.S
return new B.bh7(B.hPx(),C.c1(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bh7.prototype={
gvv(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dz3())},
a_(){var w,v=this
v.a1()
w=v.q6(new B.dzg(v))
w.iT(0)
v.x!==$&&C.aO()
v.x=w
B.z2("balance_lab").bz(new B.dzh(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.brJ()},
ctV(d){var w,v=this
v.m(new B.dz4(v,d))
B.vF("click",v.f[d],60,0.4)
if(v.gvv()===v.d[v.e].guy()&&v.r.J(0,v.e)){B.vF("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new B.dz9(),C.T(k).k("J<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvv()===m[o.e].guy())s="\u2696\ufe0f Balanced! "+m[o.e].guy()+" = "+o.gvv()+". The torques are equal, so the seesaw stays level."
else s=o.gvv()>m[o.e].guy()?"The right side is too strong ("+o.gvv()+" vs "+m[o.e].guy()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guy()+" vs "+o.gvv()+"). Add weight to the right, or place it further from the middle."
k=o.gvv()===m[o.e].guy()?A.bc:A.aM
k=B.by0(s,k,o.gvv()===m[o.e].guy()&&o.e<m.length-1?new B.fg(A.j7,"Next",new B.dza(o),A.bc,n):n)
w=C.D(C.cm(new B.dzb(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guy(),n,n,n,n,n,n,D.aOF,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.Xb,k,n),w,new C.C(D.afx,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvv(),n,n,n,n,n,n,D.aOF,A.dK,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dy(w+p,o.e===v,new B.dzc(o,v),n,A.aM,n))}return B.jD(A.aM,A.h8,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eK(u,"LEVEL",n),new B.eK(C.a([new B.dy("Clear right side",!1,new B.dzd(o),A.jR,A.cr,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b7W.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bF())
v=C.L()
v.r=A.ak.gp(0)
d.aN(i,v)
v=h-120
i=C.L()
i.r=A.aK.gp(0)
d.aX(new C.aa(v,w,v+240,w+8),i)
i=d.a
J.bA(i.save())
i.translate(h,f)
d.j5(0,j.b)
u=g*5.8
t=C.by(new C.aa(-u,-9,u,9),A.hb)
w=C.L()
w.sau(D.bS7.aw(0,new C.aa(t.a,t.b,t.c,t.d)))
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
B.fhy(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cB1(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aX)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bZ)
if(w[s]===0){l=C.by(C.ct(new C.u(m,-22),22,v),A.hb)
$.X()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b5.gp(0)
r=k.H()
i.drawRRect(C.ep(l),r)
r.delete()
B.fhy(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.X()
i=C.L()
i.r=(j.e?A.bc:A.aL).gp(0)
d.ah(new C.u(h,f),7,i)},
aq(d){return!0},
gj4(){return this.e}}
B.Uc.prototype={
T(){return new B.bhE(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bhE.prototype={
ga_A(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gacr(){var w=this.ga_A(),v=this.r,u=D.aw0[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d9(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.q6(new B.dS7(v))
w.iT(0)
v.x!==$&&C.aO()
v.x=w
B.z2("gear_lab").bz(new B.dS8(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsd()},
c2D(d,e){var w,v=this
v.m(new B.dRY(v,d,e))
if(v.gacr()&&v.w.J(0,v.r)){B.vF("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_A(),n=r.ga_A(),m=D.aw0[r.r].a
m=r.gacr()?"\u2705 Done! Ratio "+A.k.aa(r.ga_A(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gacr()?A.bc:A.cy
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.Xb,B.by0(m,w,r.gacr()&&r.r<7?new B.fg(A.j7,"Next",new B.dS1(r),A.bc,q):q),q),C.D(C.b3(q,q,q,new B.bdl(v,r.f,q),A.f_),1),new C.C(D.afx,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga_A(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,S.a6b,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dy(m+s,r.r===t,new B.dS2(r,t),q,A.cy,q))}p=r.e
u=C.a([new B.eK(o,"GOAL",q),B.hx(A.aX,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dS3(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.au8("Gear "+s+" teeth",p,new B.dS4(r,t),8,40,D.d6b[t],""+p,q))}return B.jD(A.cy,A.h8,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdl.prototype={
bME(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.X(),j=C.a([],x.v),i=new C.aQ(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.e8j,D.ecY,D.es5,D.ejM],s=v===0,r=0;r<4;++r){q=t[r]
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
n=A.d.fC(g,A.qd)
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
h=new B.d8J(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.dj,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mE)
h.$5(new C.u(t,0),g[1],w[1],i,A.fB)
s.restore()
s=new B.d8K(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aX)
s.$3("2+3 \xb7 shared axle",t,A.cy)
s.$3("4 \xb7 output",q,A.bc)},
aq(d){return!0}}
B.Tm.prototype={
T(){var w=$.aw()
return new B.bhk(new C.ar(new C.bb("Meet me at noon",A.b1,A.aN),w),new C.ar(new C.bb("LEMON",A.b1,A.aN),w),C.aX(x.S))}}
B.bhk.prototype={
a_(){this.a1()
this.aVn()
B.z2("cipher_lab").bz(new B.dDf(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aVn(){this.y=1+A.cI.aB(25)
this.z=0},
ga8o(){var w=this
return B.a0C(B.a0C(D.Gp[w.x],w.y),-w.z)===D.Gp[w.x]},
gaw9(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0C(u,v.w)
break A}if(1===t){w=new C.J(C.a(B.a0C(u,0).split(""),x.s),new B.dCY(),x.dv).fT(0)
break A}w=B.i17(u,v.e.a.a)
break A}return w},
aQQ(d){var w,v,u,t,s,r=null,q=C.c1(26,0,!1,x.S)
for(w=new C.d2(d.toUpperCase()),v=x.e8,w=new C.bW(w,w.gM(0),v.k("bW<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fC(q,A.zE))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aV(2,2)
v.push(new C.bE(1,A.bi,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aX,r,r,new C.bs(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Ly,r,r,r,r),new C.x(C.jC(65+s),r,D.eXx,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lJ,A.j,0,A.p),r))}return new C.a6(r,70,C.A(v,A.dD,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.d,o,o,o,o,o,2,C.bq(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lj,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dD6(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eRS,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.e,o,o,o,o,o,2,C.bq(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lj,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dD7(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.iC,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.az)
w.push(D.fmr)
w.push(A.au)
v=A.aX.j(0.12)
u=C.m(14)
t=C.I(A.aX.j(0.4),A.r,1)
w.push(C.p(o,C.zl(p.gaw9().length===0?"\u2026":p.gaw9(),D.eWx,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.by0(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aX,o))
w.push(A.ac)
w.push(D.f3y)
w.push(A.au)
w.push(p.aQQ(p.gaw9()))
w.push(A.au)
w.push(D.f5V)
s=C.cB(w,o,A.bB,o,o,A.ah,!1)}else{w=B.by0("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0C(D.Gp[p.x],p.y),o,o,o,o,o,o,D.eX5,o,o,o)
u=(p.ga8o()?A.bc:A.aX).j(0.14)
t=C.m(14)
r=C.I((p.ga8o()?A.bc:A.aX).j(0.5),A.r,1)
t=C.a([w,A.ac,D.fgl,v,A.S,D.faQ,C.p(o,C.d(B.a0C(B.a0C(D.Gp[p.x],p.y),-p.z),o,o,o,o,o,o,D.eYy,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aQQ(B.a0C(D.Gp[p.x],p.y)),A.P],x.p)
if(p.ga8o())t.push(B.by0("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bc,new B.fg(A.jR,"Next",new B.dD8(p),A.bc,o)))
s=C.cB(t,o,A.bB,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eK(C.a([new B.dy("Make a secret",w===0,new B.dD9(p),A.j9,A.aX,o),new B.dy("Crack a code",w===1,new B.dDa(p),A.pw,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dy(n[q],p.r===q,new B.dDb(p,q),o,A.aX,o))
v=C.a([new B.eK(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hx(A.aX,""+u,"Shift",25,1,new B.dDc(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hx(A.aM,""+v,"Shift back",25,0,new B.dDd(p),v))}return B.jD(A.aX,A.h8,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJw.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aK_.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.e7.prototype={}
B.t9.prototype={
aoq(d,e,f,g){var w=this
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
B.a95.prototype={}
B.aa9.prototype={}
B.a3i.prototype={
baq(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a95(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
bZR(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bJM())},
aid(d,e,f,g){var w="p"+this.c++,v=new B.t9(w,e,f,g)
v.aoq(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bJX(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cBA(d,e,f,g,h){return A.d.b8(this.b,new B.bJS(e,f,g,h))},
aiZ(d,e,f,g){var w
if(d===f||this.cBA(0,d,e,f,g))return null
w=new B.aa9(d,e,f,g)
this.b.push(w)
return w},
ayD(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
ze(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
alB(d){return this.L_(d)&&!d.x&&d.cx>this.ze(d)},
b3f(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
L_(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c2E(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yx.h(0,v)
if(w!=null)return w.a
return 100},
uG(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.bZR(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bJY(a2),t).cI(0,0,new B.bJZ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.V(x.N,u)
n=new B.bK0(o)
m=C.a([],x.t)
l=new B.bK_(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.V(u,u)
f=new B.bK2(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b3b(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.ze(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b3b(e,d,w,!0)
a2.bJG(a4)},
b3b(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.V(x.N,b3),b5=new B.bJO(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bJN(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bJQ(C.V(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c1(b7,0,!1,b3)
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
for(d=0;d<b7;++d)e[d]=C.c1(b7,0,!1,b3)
a0=C.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b3f(t)*(1+t.CW))
a4=b2.ayD(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c2E(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bMD(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
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
bMD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c1(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.K)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.K)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=C.c1(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bJG(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ayD(o)/a1.b3f(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.ze(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bC_(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.baq(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tf(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tf(o,"The "+$.q_().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tf(o,"More than 1.5 amps went through the "+$.q_().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tf(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tf(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yx.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q_().h(0,n).b
l=f.b
l=l===A.k.jK(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jK(g)?""+A.k.V(g):C.t(g)
a1.tf(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eE4.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tf(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tf(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tf(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tf(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tf(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tf(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bC_(d){return A.d.b8(this.a,new B.bJL(d))},
tf(d,e){var w
d.x=!0
d.ay=e
this.baq(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bf1(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aEC(d){var w=d.b
return D.aL9.t(0,w)||D.yx.ag(0,w)||w==="buck"||w==="regulator"},
bbO(d){var w,v=!0
if(!this.L_(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yx.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
TK(d,e){var w=this.b
return new C.a2(w,new B.bK4(d,e),C.T(w).k("a2<1>")).gM(0)},
C0(d){var w,v
if(d.x)return!1
w=d.b
if(D.yx.ag(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
b9X(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q_().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aEC(d)||i.C0(d))return null
w=i.TK(d,0)
v=i.TK(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcJU(),t),t.k("H.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jK(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yx.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aEH("battery"),o=J.aW(t.a),t=new C.h2(o,t.b);t.C();){n=o.gU(o)
if(n.e===1.5&&n.as<=0.02&&i.TK(n,0)+i.TK(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aEH("switch"),o=J.aW(t.a),t=new C.h2(o,t.b);t.C();)if(!o.gU(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q_().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.ze(k))return"The "+$.q_().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.ze(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b8(u,new B.bJT(i,d))
h=q.b
h=h===A.k.jK(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aEH(d){var w=this.a
return new C.a2(w,new B.bJW(d),C.T(w).k("a2<1>"))},
aEg(d){return this.aEH(d).b8(0,new B.bJV(0.35))},
pk(d,e){return A.d.b8(this.a,new B.bJU(e))}}
B.ahi.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=C.L()
w.r=F.VM.gp(0)
c0.aX(new C.aa(0,0,b8,b9),w)
v=C.L()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lK.ag(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lK.ag(0,h.b)?(h.ch-1)*38:0
b4.cyH(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hnk(q.a,q.b,c1)
q=b4.e
q.toString
$.X()
p=C.L()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.abK.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yy
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=A.k.D(A.lV.av(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ccg(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.ze(a0)){g=j+0
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
a3.r=A.aC.j(0.65+0.35*e).gp(0)
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
a9.a6(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aL9.t(0,h)||D.yx.ag(0,h)||h==="buck"||h==="regulator")&&!r.C0(a0)&&r.TK(a0,0)+r.TK(a0,1)>0
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
f=D.lK.ag(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.VM.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bbO(a0)?A.cr:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bbO(a0)){a9=new C.km(new C.eo("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.cr,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jm(1),b5,b5,b5,b5,A.cd,b5)
a9.eO()
a9.a6(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Wh,F.Wm,b2)
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
i.z=A.Qe
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b8(q,new B.bFd())){b3=A.d.cI(q,0,new B.bFe())
$.X()
b7=C.L()
b7.r=D.b5H.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new C.aa(0,0,b8,b9),b7)
a9=C.ih(b5,b5,b5,b5,D.eOt,A.a5,A.ch,b5,A.er,A.cd)
a9.Bo(b6-24)
a9.a6(c0,new C.u(12,10))}},
pT(d,e,f,g,h){var w=null,v=C.ih(w,w,w,w,C.dp(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ch,w,A.er,A.cd)
v.eO()
v.a6(d,f)},
cyH(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hfQ(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.abK,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aX,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bp
u=C.L()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aN(d,u)
u=C.L()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aN(d,u)
if(q){n=new C.RD(new C.vh(C.wK(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.je()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.je()
h=t[u].b
h===$&&C.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.je()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.je()
g=t[u].b
g===$&&C.c()
f=A.k.F(h+i,g.a.length())
v.je()
i=t[u].M4(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Of(d,e,f,g){var w,v,u,t
$.X()
w=C.L()
v=g?A.b0:A.a3
u=g?A.b6:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.sau(new C.a7(v,u,A.x,C.a([e,f,e,t],x.O),A.Gr,null).aw(0,d))
return w},
auj(d,e,f){return this.Of(d,e,f,!0)},
bZs(d,e){return this.Of(d,A.bp,A.iH,e)},
afS(d,e){var w,v,u
$.X()
w=C.L()
w.sau(D.aJN.aw(0,C.bU(e,4.2)))
d.ah(e,4.2,w)
w=e.ae(0,D.dYL)
v=e.ae(0,D.dYU)
u=C.L()
u.r=A.eu.gp(0)
u.c=1.2
d.bA(w,v,u)},
ccg(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=C.L()
c0.sau(D.bPa.aw(0,D.eBb))
c0.c=3.4
c0.d=A.bO
w=C.L()
w.r=A.w.j(0.45).gp(0)
w.z=G.mm
c1.hZ(D.eB3,w)
if(c3){w=C.by(D.eBa,A.kk)
v=C.L()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.fX7(c2)
c1.bA(new C.u(-u,0),D.e_2,c0)
c1.bA(D.dXU,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lK.ag(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.byX(c1,c2)
break
case"solar":r=C.by(D.eB6,A.hO)
c1.aD(r,b3.Of(new C.aa(r.a,r.b,r.c,r.d),A.dL,A.bW,!1))
b9=C.L()
w=C.aq(D.b8K,A.d4,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bgg,A.m3,0.3+0.4*c2.f)
v.toString
b9.sau(new C.a7(A.ax,A.aD,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a4T))
c1.aX(D.a4T,b9)
q=C.L()
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
v.r=A.cm.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aQ($.X().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bF())
w=C.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aN(b9,w)
w=c2.f
b9=C.L()
b9.r=A.dN.j(0.9).gp(0)
c1.ah(D.dY_,4+4*w,b9)
break
case"crank":n=C.by(D.eAS,A.hc)
c1.aD(n,b3.auj(new C.aa(n.a,n.b,n.c,n.d),A.bv,A.bI))
b9=C.L()
b9.sau(D.aJO.aw(0,C.bU(A.J,12)))
c1.ah(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.L()
b9.r=A.cm.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.L()
b9.sau(D.e7q.aw(0,C.bU(m,7)))
c1.ah(m,7,b9)
b3.afS(c1,D.dZW)
b3.afS(c1,D.dXN)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bF())
l=C.L()
l.r=A.bW.gp(0)
c1.aN(v,l)
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
v.restore()}b9=C.L()
b9.sau(D.e76.aw(0,C.bU(A.J,4.5)))
c1.ah(A.J,4.5,b9)
break
case"switch":n=C.by(D.eAZ,A.rc)
b9=C.L()
b9.sau(D.amC.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.afS(c1,D.R6)
b3.afS(c1,D.aED)
i=c2.w?D.aED:D.dXx
b9=C.L()
b9.r=A.aA.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.R6,i,b9)
b9=C.L()
b9.r=(c2.w?A.bc:A.bW).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.R6,i,b9)
b9=C.la(D.R6,i,0.85)
b9.toString
w=C.L()
w.r=A.aC.gp(0)
c1.ah(b9,5,w)
break
case"fuse":h=C.by(D.aKi,D.aJT)
b9=C.L()
b9.r=A.fh.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.ay.gp(0)
c1.aD(h,b9)
if(!t){b9=C.L()
b9.c=1.6
b9.r=C.aq(A.bW,A.cy,c2.fx).gp(0)
c1.bA(D.aEU,D.aEC,b9)}else{b9=C.L()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aEU,D.e_j,b9)
b9=C.L()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.dYq,D.aEC,b9)
b9=C.L()
b9.r=A.dy.gp(0)
c1.ah(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.ct(new C.u(F.tM[g]*22,0),20,9)
w=C.by(f,A.hy)
o=b3.Of(f,A.dj,A.o8,!0).H()
b9.drawRRect(C.ep(w),o)
o.delete()}break
case"pot":b9=C.L()
b9.sau(D.e7i.aw(0,C.bU(A.J,21)))
c1.ah(A.J,21,b9)
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
o.delete()}b9=C.L()
b9.sau(D.e74.aw(0,C.bU(A.J,13)))
c1.ah(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.L()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bO
c1.bA(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.by(D.aKi,D.aJT)
b9=C.L()
b9.sau(D.bSo.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c5(new C.aa(w,-9,w+4.5,9)),o)
o.delete()}b9=C.L()
b9.r=A.aM.gp(0)
c1.aX(D.eBk,b9)
b9=c2.r
b3.pT(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.dZB,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.L()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yy
c1.ah(D.vG,34,v)}n=C.ct(D.dX2,12,18)
c1.aD(C.by(n,A.hy),b3.Of(n,A.bp,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dm.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.L()
if(t)v=A.V6
else{v=C.aq(A.e2,A.hT,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.E4
else{l=C.aq(A.dL,A.dN,c2.fx)
l.toString}w.sau(new C.bR(A.rv,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.r9,17)))
c1.ah(A.r9,17,w)
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ah(A.r9,17,w)
b9=b9.r
w=x.v
l=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cS(-12,-4,-9,0))
v=C.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aN(l,v)
v=C.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e_f,D.e_h,v)
v=C.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.dYj,D.dYm,v)
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
b9=C.L()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dL,D.b9u,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aN(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.L()
v.r=A.aC.j(0.6*w).gp(0)
v.z=D.dgJ
c1.ah(A.r9,30,v)}w=C.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.e_l,D.e_k,w)
w=C.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.dYs,D.dYr,w)
b9=b9.r
w=x.v
a6=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.L()
if(t)l=A.t4
else{l=C.aq(A.eD,D.acp,c2.fx)
l.toString}if(t)j=A.ka
else{j=C.aq(A.k6,A.aC,c2.fx)
j.toString}v.sau(new C.a7(A.ax,A.aD,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eAo))
c1.aN(a6,v)
v=C.L()
v.b=A.ae
v.c=1.2
v.r=A.j2.gp(0)
c1.aN(a6,v)
v=C.L()
v.r=A.eM.gp(0)
c1.aX(D.eAu,v)
w=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cS(-6,-12,0,-15))
b9=C.L()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aN(w,b9)
break
case"motor":a7=new C.aa(-28,-14,20,14)
c1.aD(C.by(a7,A.hb),b3.auj(a7,A.ak,A.aL))
b9=C.L()
b9.r=A.cC.gp(0)
c1.aX(D.eAb,b9)
b9=C.L()
b9.r=A.cm.gp(0)
c1.aX(D.eAc,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.ct(D.dXk,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cy.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c5(w),o)
o.delete()
b9.restore()}w=C.L()
w.r=A.aA.gp(0)
c1.ah(A.J,3,w)
b9.restore()
b3.pT(c1,"M",D.dZV,A.aA,14)
break
case"buzzer":a8=C.ct(A.J,42,42)
b9=C.L()
b9.sau(D.e7m.aw(0,a8))
c1.hZ(a8,b9)
b9=C.L()
b9.r=A.w.gp(0)
c1.ah(A.J,6,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.b5.gp(0)
c1.ah(A.J,6,b9)
b3.pT(c1,"+",D.dZO,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bZ.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c5(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.by(D.eAV,A.hb)
w=C.L()
w.sau(D.bQ7.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
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
w=C.L()
w.b=A.ae
w.c=10
w.r=D.ba5.j(0.5*b9).gp(0)
w.z=A.jc
c1.aN(a9,w)}$.X()
b9=C.L()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lu,A1.W5,c2.fx).gp(0)
c1.aN(a9,b9)
break
case"capacitor":a7=new C.aa(-16,-22,16,18)
b9=C.by(a7,A.hb)
w=C.L()
w.sau(D.bP2.aw(0,a7))
c1.aD(b9,w)
w=C.L()
w.r=A.bW.gp(0)
c1.aX(D.eAA,w)
for(p=0;p<4;++p){b0=new C.km(new C.eo("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.F(!0,A.aA,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ch,new C.jm(1),b4,b4,b4,b4,A.cd,b4)
b0.eO()
b0.a6(c1,new C.u(-14,-18+p*9))}b1=new C.aa(-16,-24,16,-17)
c1.aD(C.by(b1,A.hy),b3.bZs(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=C.L()
v.r=A.bc.j(0.5).gp(0)
c1.aX(new C.aa(-3,w,11,w+b9),v)
b3.pT(c1,"1F",D.vG,A.c,11)
break
case"radio":a1=C.by(D.a4T,A.hc)
b9=C.L()
b9.sau(D.bSD.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.o8.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.by(D.eAW,A.hO)
w=C.L()
w.r=A.dC.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lu.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.L()
w.r=(c2.fx>0?A.fZ:A.np).gp(0)
c1.aX(D.eAe,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=C.L()
v.r=A.bL.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.L()
w.sau(D.aJO.aw(0,C.bU(D.a3W,6)))
c1.ah(D.a3W,6,w)
w=C.L()
w.r=A.o8.gp(0)
c1.ah(D.dXT,4,w)
w=C.L()
w.r=A.e2.gp(0)
w.c=1.8
c1.bA(D.dXR,D.aEH,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aEH,4+k*5+A.k.F(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nu.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c5(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.by(D.eB5,A.hb)
v=C.L()
v.r=K.of.gp(0)
c1.aD(w,v)
b2=C.by(D.eB2,A.hy)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.ep(b2),$.pg(),!0)
b9.translate(-33,-21)
E.fTo(c1,D.eGx,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.L()
b9.r=A.bc.gp(0)
c1.ah(D.dY4,1.6,b9)}else{w=C.L()
w.r=D.uK.gp(0)
c1.aD(b2,w)
b9=new C.aQ(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.L()
w.r=A.c.j(0.05).gp(0)
c1.aN(b9,w)}b9=C.L()
b9.r=A.bv.gp(0)
c1.aX(D.eAt,b9)
break}B.hZO(c1,c2,b3.b.d,b3.gc2F())
if(t)b3.pT(c1,"\u2716",D.e_o,A.aC,14)
if(s)c1.a.restore()},
byX(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.aa(-28,-13,28,13)
d.aD(C.by(w,A.rc),m.auj(w,A.dL,A.iK))
v=new C.aa(-22,-13,22,13)
$.X()
u=C.L()
u.sau(D.amv.aw(0,v))
d.aX(v,u)
u=C.L()
u.r=A.dT.gp(0)
d.aX(D.eAJ,u)
t=new C.aa(28,-5,34,5)
d.aD(C.by(t,A.ha),m.Of(t,A.dL,A.iH,!0))
m.pT(d,"+",D.dXC,A.aM,11)
m.pT(d,"\u2212",D.dZX,A.ad,11)
m.pT(d,C.t(l===A.k.jK(l)?A.k.V(l):l)+"V",D.dZH,A.aM,13)
if(l===1.5){u=C.L()
u.r=A.bF.gp(0)
d.aX(D.eAI,u)
u=e.as
s=C.L()
s.r=C.aq(A.aC,A.bc,u).gp(0)
d.aX(new C.aa(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pT(d,"FLAT",D.dZA,A.cr,9)}if(l>2){u=C.L()
u.r=A.b5.gp(0)
u.c=1
d.bA(D.dX8,D.aEm,u)
m.pT(d,l>3?"3 cells":"2 cells",D.dZG,A.ay,8)}}else if(l<=9){r=new C.aa(-22,-17,22,17)
u=C.by(r,A.rc)
$.X()
s=C.L()
s.sau(D.bSc.aw(0,r))
d.aD(u,s)
s=C.L()
s.r=A.cZ.gp(0)
d.aX(D.eAK,s)
for(u=d.a,q=0;q<2;++q){p=D.d4m[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.aJN.aw(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.pT(d,"9V",D.dZC,A.c,16)}else{r=new C.aa(-34,-16,34,16)
u=C.by(r,A.hO)
$.X()
s=C.L()
s.sau(D.amv.aw(0,r))
d.aD(u,s)
s=C.L()
s.r=A.cq.gp(0)
d.aX(D.eB4,s)
for(u=d.a,q=0;q<2;++q){s=C.by(C.ct(new C.u(D.avE[q],-20),8,10),A.ha)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cm.gp(0)
n=o.H()
u.drawRRect(C.ep(s),n)
n.delete()}m.pT(d,"+",D.dXJ,A.aC,10)
m.pT(d,"12V",D.dZD,A.aA,15)}},
aq(d){return!0}}
B.mp.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.V(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.t9(o,r,q,p)
n.aoq(o,r,q,p)
k.push(n)
J.il(s[4],new B.ci5(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aiZ(m,u[1],l,u[3])}}}
B.ahg.prototype={
T(){var w=x.N
return new B.ahh(A.J,A.at,C.V(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.ahh.prototype={
acu(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new B.bES(w,d))
w.as=C.cM(A.l1,new B.bET(w))},
q(){var w=this.as
if(w!=null)w.a9(0)
w=this.ch
if(w!=null)w.a9(0)
this.boW()},
ZI(d,e){return this.caf(d,e)},
aYC(d){return this.ZI(d,!1)},
caf(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$ZI=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qC:A.x1
p=d.b
w=3
return C.b(E.fTG(s,r,p,d.ax<3.2,q,$.q_().h(0,p).b),$async$ZI)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$ZI,v)},
cmB(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bEU()),t=J.cE(u)
t.J(u,v)
t.bn(u,new B.bEV(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a9(0)
w.a01(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a9(0)
w.ch=C.cM(A.kB,new B.bEW(w,u,d))}},
Zo(d){return this.c8D(d)},
c8D(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Zo=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i_U(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$Zo)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$Zo,v)},
a01(d){return this.ckg(d)},
ckg(d){var w=0,v=C.j(x.H),u=this,t
var $async$a01=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bY(F.qv,null,new B.bEQ(u,d),t,!0,!0,!1,A.nV,!1,!1,x.H),$async$a01)
case 2:return C.h(null,v)}})
return C.i($async$a01,v)},
a_(){this.a1()
this.bbY()
this.l_()},
bbY(){this.a.c.e=new B.bFa(this)},
lh(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uG(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.lK.h(0,s.b)
if((r==null?null:r.b)!==D.yX)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.J(0,s.a)
q.ZI(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cI.aj()<0.5
else u=!1
if(u)E.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dE(900+A.cI.aB(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dE(300+A.cI.aB(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dE(330+A.o.F(110*A.k.bw(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dE((A.k.bw(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cI.aj()<0.5
else u=!1
if(u)E.dE(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dE(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dE(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bFb())},
b4o(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lK.ag(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
aZi(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dA<1>"),w=new C.dA(w,v),w=new C.bW(w,w.gM(0),v.k("bW<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lK.ag(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cyI(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lK.ag(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lK.ag(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hfQ(new C.u(k,n),new C.u(i,l),p)
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
acs(){this.a.toString
this.m(new B.bEl())},
blK(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cSy[v]
if(!A.d.b8(p.a.c.a,new B.bFc(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?M.Hv:o
s=s?M.Hv:o
q=t.aid(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dE(1200,"",50,0,0.3,"tri")
p.acs()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Pv[v].a)
u=w.length
t=u>8
s=t?A.d.dn(w,0,A.o.an(u+1,2)):w
r=t?A.d.fG(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cy<1>")
w=C.B(new C.cy(q,w),w.k("H.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aZ7(s,!0))
n.a.toString
if(t)w.push(n.aZ7(r,!0))
w.push(C.D(C.cm(new B.bF9(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aZ7(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.q_()
s=t.h(0,u).d.j(0.14)
r=new C.aV(14,14)
q=new C.aA(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.z9,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.n9,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.ba,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bs(r,r,r,r),p,p,A.n),p,p,p,F.te,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEm(this,u),p,p,p,p,p,p,!1,A.a9))}return C.p(p,C.cB(m,p,A.h3,p,p,A.aQ,!1),A.f,p,p,new C.o(D.E1,p,new C.bP(A.Y,A.Y,new C.aA(o,1,A.r,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aWH(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.aay,w,C.I(A.bF,A.r,1),v,w,w,A.n),w,w,w,w,F.afy,w,w,w)},
cch(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q_().h(0,o),m=d.dy,l=d.fr,k=new B.bEF(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Ir,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bGH,p,p,p,new B.bEs(q,d),p,p,p,p,"Remove part",A.c7),C.aH(p,p,p,p,A.FV,p,p,p,new B.bEt(q),p,p,p,p,p,A.c7)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.Iy,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eWV,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.ao,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cr:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b9X(d)
if(v!=null){l=(d.x?A.aC:A.aJ).j(0.14)
j=C.m(10)
i=C.I((d.x?A.aC:A.aJ).j(0.5),A.r,1)
m.push(new C.C(A.i7,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f2g,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cj,p,p,p),p))}if(B.fRw(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dy("CH "+t,d.at===u,new B.bEu(q,d,u),p,h,p))}l=C.c3(A.bE,l,A.bw,4,6)
l=C.a([A.ao,l,A.au,C.d(q.a.c.C0(d)?"Showing: "+F.P7[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.C0(d))l.push(new B.fg(A.Fu,"Open big screen",new B.bEx(q,d),h,p))
A.d.v(m,l)}if(D.lK.ag(0,o)&&!B.fRw(o)){l=C.a([A.ao,C.d(q.a.c.C0(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.C0(d))l.push(new B.fg(A.MS,"Open the "+$.q_().h(0,o).b,new B.bEy(q,d),h,p))
A.d.v(m,l)}if(D.lK.ag(0,o))A.d.v(m,C.a([A.ao,new B.fg(A.B8,"Make it bigger (or tap it 4 times)",new B.bEz(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C0(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.ao,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.eXK,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d7l[s]
j=r===A.k.jK(r)?A.k.V(r):r
l.push(new B.dy(C.t(j)+" V out",d.e===r,new B.bEA(q,d,r),p,h,p))}i.push(new C.C(A.m8,C.c3(A.bE,l,A.bw,0,6),p))}if(o==="regulator")i.push(D.fjL)
A.d.v(m,i)}if(q.a.c.L_(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.ze(d),2)
i=q.a.c
w=i.alB(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.alB(d)?A.cr:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.ze(d),0,1)
i=q.a.c.alB(d)?A.aC:A.bc
m.push(new C.C(A.i7,C.v(C.a([l,A.d0,C.bv(j,C.mf(A.bF,p,p,5,p,w,new C.my(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.i7,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eRP,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYT[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dy(j,d.e===r,new B.bEB(q,d,r),p,h,p))}m.push(C.c3(A.bE,l,A.bw,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cQ9[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dy(j,d.r===r,new B.bEC(q,d,r),p,h,p))}m.push(C.c3(A.bE,l,A.bw,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bED(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bEE(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bEv(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bEw(d)))
if(o==="crank")m.push(D.ffv)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hn,p,p,p))
return q.aWH(new C.cU(D.aWT,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.y,p,p,p,p,A.ah),p))}}
B.b8T.prototype={}
B.U_.prototype={
T(){return new B.aBE(B.fX6(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aBE.prototype={
a_(){this.a1()
$.aT.c1$.push(this)
this.act()},
act(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$act=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fmO(),$async$act)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i_6(t.d,r)
if(s!=null){t.m(new B.dOc(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$act,v)},
Em(){var w,v=this
if(!v.as)return
w=B.hQM(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bBB(w)},
iK(d){if(d!==A.fs)this.Em()},
q(){$.aT.hA(this)
this.Em()
this.a2()},
c2H(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a2<1>")
t=new C.a2(v,new B.dOl(q),u).gM(0)
s=new C.a2(v,new B.dOm(),u).gM(0)
r=new C.a2(v,w.gcNo(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dOn(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Em()
if(A.o.F(q.w,10)===0){w=q.f
$.agu()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agu()[q.f].c.$1(q.d)){w.J(0,q.f)
B.Bb("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dOo())
q.Em()
w=q.c
w.toString
w=C.Wl(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.q,p,C.d("\u2705 Challenge done: "+$.agu()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m5,p,p,p,p,p,p,p,p,p,p))}},
af8(){var w=0,v=C.j(x.H),u=this,t
var $async$af8=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dOb(u),t,null,!0,!0,x.H),$async$af8)
case 2:return C.h(null,v)}})
return C.i($async$af8,v)},
aWG(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.r,1)
u=C.a([C.ao(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.ho(new C.a6(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a9)},
aWF(d,e,f,g){return this.aWG(d,e,f,g,null)},
ap4(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.r,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.eb,new C.dm(1,A.ci,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.ba,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a9),1)},
ads(){var w=0,v=C.j(x.H),u=this,t
var $async$ads=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).ci(C.em(new B.dO7(u),!1,null,x.H)),$async$ads)
case 2:t=u.e.gbd()
if(t!=null)t.bbY()
if(u.c!=null)u.m(new B.dO8())
u.Em()
return C.h(null,v)}})
return C.i($async$ads,v)},
bBT(){var w,v,u,t,s=null,r=this.f
$.agu()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bk:A.aC
u=C.m(9)
t=C.I(D.E1,A.r,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.vX,s,s,s),s,s,s),A.f,s,D.aX_,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
age(){var w=0,v=C.j(x.H),u=this,t
var $async$age=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bY(F.qv,null,new B.dOk(u),t,!0,!0,!0,A.nV,!1,!1,x.H),$async$age)
case 2:return C.h(null,v)}})
return C.i($async$age,v)},
c2I(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bHV,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dOq(d),r,r,r,r,r,r,!1,A.a9),o=C.m(11)
o=C.p(r,D.b1C,A.f,r,r,new C.o(A.bn,r,C.I(A.aX.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.fhX,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f9:A.h1,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.avK(s.gc8k(),r),A.ri,s.aWF(A.xC,"Construction Lab: real 3D wiring, plumbing and a house",A.cy,new B.dOr(s,d)),s.aWG(A.l6,"Challenges",A.aM,s.gcp6(),s.bBT()),s.aWF(A.ML,"How to play",A.aX,new B.dOs(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.ao,C.A(C.a([s.ap4(A.px,"Circuits",A.by,s.gci7()),A.bo,s.ap4(A.qJ,"Repair",A.aM,new B.dOt(s)),A.bo,s.ap4(D.xD,"Clear",A.cr,new B.dOu(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.E1,r,new C.bP(A.Y,A.Y,new C.aA(q,1,A.r,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bsC,r,r,r)},
B(d){var w=this,v=null
$.aqi="tech"
return C.cb(v,A.bV,C.bo(!0,C.v(C.a([w.c2I(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fW1(w.d,w.e,w.gc2G(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.avK.prototype={
T(){return new B.b74(null,null)}}
B.b74.prototype={
gavb(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cG(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavb().q()
this.bqb()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.ho(new C.a6(42,42,C.c6(this.gavb(),new B.cyz(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a9)}}
B.b73.prototype={
a6(d,e){var w,v,u,t=null,s=e.ee(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=C.L()
w.r=A.b4.j(0.25+0.15*o).gp(0)
w.z=G.mm
d.ah(s,r+2+o*2,w)
w=C.L()
w.sau(D.e7h.aw(0,C.bU(s,r)))
d.ah(s,r,w)
v=C.L()
v.b=A.ae
v.c=2.2
v.sau(new C.fR(A.A,0,6.283185307179586,A.x,D.cI1,t,new C.mc(p)).aw(0,C.bU(s,r)))
d.ah(s,r,v)
p=new B.cyy(d)
p.$3(s.ae(0,A.r9),8+o*1.5,1)
q*=4
p.$3(s.ae(0,D.dYC),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ae(0,D.e_s),2.6,0.5+0.5*Math.cos(q))
u=C.ih(t,t,t,t,D.eOz,A.a5,A.ch,t,A.er,A.cd)
u.eO()
u.a6(d,s.ae(0,new C.u(-u.b.c/2,5)))},
aq(d){return d.b!==this.b}}
B.aw2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aw3.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.boV()}}
B.aI2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buT.prototype={}
B.fI.prototype={}
B.Iw.prototype={
a4(){return"ScreenStyle."+this.b}}
B.lX.prototype={}
B.TH.prototype={
T(){return new B.bhq(null,null)}}
B.bhq.prototype={
ga7S(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nC,null,1,null,v)
w.cp(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga7S().q()
this.bs1()},
gQW(){var w=this.ga7S().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lK.h(0,this.a.c)
if(v==null)v=D.aKz
return C.cb(w,R.KA,C.bo(!0,new C.an(A.W,w,A.aa,A.q,C.a([C.av(v.b===D.yY?this.bE1(v):this.cf1(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mi,w,w,w,new B.dK8(d),w,w,w,C.nn(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eQa,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
c2J(d){var w
A:{if(D.HS===d){w=0.46153846153846156
break A}if(D.ua===d){w=0.45
break A}if(D.vN===d){w=0.9259259259259258
break A}if(D.RC===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cf1(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.HS
A:{if(D.HS===p){w=44
break A}if(D.ua===p){w=30
break A}if(D.vN===p){w=22
break A}if(D.RC===p){w=26
break A}w=14
break A}v=C.c6(this.ga7S(),new B.dK7(this,w,d,o),q)
if(p===D.a50)v=new C.CS(D.btc,v,q)
p=this.c2J(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ad(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fF(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A0.F1,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a7(A.ax,A.aD,A.x,r,q,q),A.n),q,q,q,D.bmW,new C.Q(u,u,u,u),q,q,q),q)},
b3D(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bw(this.gQW()*0.4),0,100),q=d.b===D.HS,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dh(s)),2,"0")+":"+A.a.aT(A.o.u(C.fX(s)),2,"0"),t,t,t,t,t,t,A.uj,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new C.aV(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bs(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bsV,t,t,t,3))}n.push(A.d8)
n.push(D.fb1)
n.push(A.bo)
v=C.I(A.ad,A.r,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Dj(A.A,C.p(t,t,A.f,t,t,new C.o(A.bc,t,t,C.m(2),t,t,A.n),t,t,t,A0.F1,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.pV)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f2z,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
atb(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d35,new C.a7(A.ax,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.eUx,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dK3(this,d),v,v,v,v,v,v,!1,A.a9)},
bUG(d,e){return this.atb(d,e,!0)},
bUq(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.RC||n===D.vN,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kz,0.5)
l.toString
l=C.a([k,A.du,l],x.O)
k=p.b3D(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b5,A.r,1)
w=C.aE(o,C.p(o,C.bv(C.m(23),C.b3(o,o,o,new B.adk(0,p.gQW(),o),A.f_),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hH,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dK1(p),o,o,o,o,o,o,!1,A.a9)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<9;++s){r=F.ld[s]
t.push(new C.cq(A.A,o,o,p.bUG(r,m?58:54),o))}k=C.a([k,A.ao,w,A.ac,C.D(C.lR(0.92,t,v,8,12,A4.uZ,o,!1),1)],u)
if(n!==D.a50){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.da(F.ld,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bW(v,v.gM(0),t.k("bW<aj.E>")),t=t.k("aj.E");v.C();){q=v.d
u.push(p.atb(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pH,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bnN,K.agZ,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a7(A.ax,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bxz(d,e){var w=null
return C.p(w,C.v(C.a([this.b3D(d),C.D(C.b3(w,w,w,new B.adk(e,this.gQW(),w),A.f_),1),C.aE(w,C.p(w,C.av(C.d(F.ld[e].a,w,w,w,w,w,w,A6.Ih,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dJX(this),w,w,w,w,w,w,!1,A.a9)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bE1(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ad(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fF(1.5384615384615383,C.p(t,C.c6(this.ga7S(),new B.dK_(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a7(A.ax,A.aD,A.x,w,t,t),A.n),t,t,t,D.bsw,new C.Q(8,8,8,s),t,t,t),t)}}
B.bsY.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.X()
w=C.L()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kz,0.4)
t.toString
w.sau(new C.a7(A.ax,A.aD,A.x,C.a([u,A.du,t],x.O),null,null).aw(0,new C.aa(0,0,n,m)))
d.aX(new C.aa(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dgO
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aq(d){return!0}}
B.adk.prototype={
a6(d,e){return E.heU(d,e,this.b,this.c)},
aq(d){return!0}}
B.aJP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aUK.prototype={}
B.Uv.prototype={
T(){return new B.bi_(C.V(x.S,x.N),A.at,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bi_.prototype={
gv3(){var w=this.f
return w===$?this.f=B.fRC(0):w},
a_(){this.a1()
this.l_()
B.z2("laser_maze").bz(new B.e3m(this),x.P)},
lh(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cz(w,v)}this.m(new B.e3n())},
acy(d){var w=this
w.m(new B.e3c(w,d))
B.vC("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c2Z(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ged()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bw((d.a-t)/v)
q=A.k.bw((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gv3().b.t(0,p)||p===o.gv3().e||o.gv3().d.ag(0,p))return
o.m(new B.e3d(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cm(new B.e3g(t,B.hfJ(t.gv3(),t.r))),q=x.p,p=C.a([new B.dy("Clear mirrors",!1,new B.e3h(t),A.jR,A.aM,s),new B.dy("Skip",!1,new B.e3i(t),D.bAI,A.aX,s)],q)
if(t.d>0)p.push(new B.dy("Back",!1,new B.e3j(t),D.bAJ,A.aX,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dy(""+u,v===t.d,new B.e3k(t,v),s,A.aC,s))}return B.jD(A.aC,A.h8,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eK(p,s,s),new B.eK(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bf0.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ged()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.ddN(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.by(new C.aa(a5,a6,a8,a4),A.kk)
v=$.X()
u=C.L()
u.r=K.of.gp(0)
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
r=C.by(C.ct(p,u,u),A.hc)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.bSJ.aw(0,C.ct(p,a3,a3)))
q=o.H()
w.drawRRect(C.ep(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aQ(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.da(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bW(a8,a8.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.X()
a8=C.L()
a8.b=A.ae
a8.c=14
a8.e=A.fy
a8.r=A.aC.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lf
a9.aN(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=4
a8.e=A.fy
a8.r=D.acp.gp(0)
a9.aN(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=1.6
a8.e=A.fy
a8.r=A.c.gp(0)
a9.aN(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.BO
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bv).gp(0)
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
i.a6(a9,new C.u(m-h/2,k-j.gbb(j)/2))}g=new B.ddQ(a7,a3,a9)
a1.c.bH(0,new B.ddO(g))
a4.d.bH(0,new B.ddP(g))
f=a7.$1(a4.e)
a4=C.by(C.ct(f,o,a3*0.8),A.hc)
a8=C.L()
a8.r=A.aC.gp(0)
a9.aD(a4,a8)
v=f.ae(0,new C.u(v,0))
a8=C.L()
a8.r=A.c.gp(0)
a9.ah(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
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
B.Ux.prototype={
T(){var w=x.n
return new B.aCi(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCi.prototype={
a_(){this.a1()
this.l_()
B.z2("light_mixer").bz(new B.e3F(this),x.P)},
lh(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aWL()
w.m(new B.e3G())},
avg(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.de(t,new B.e3q()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aWL(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hb6(u.e,u.f)*2,0,1)*100)
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
gctY(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cJU[A.o.F(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cm(new B.e3z(v,B.hb6(v.e,t))),r=t[0]
r=B.hx(A.aC,""+A.k.V(r*100)+"%","Red",1,0,new B.e3A(v),r)
w=t[1]
w=B.hx(A.bk,""+A.k.V(w*100)+"%","Green",1,0,new B.e3B(v),w)
t=t[2]
return B.jD(A.b9,A.h8,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hx(A.d4,""+A.k.V(t*100)+"%","Blue",1,0,new B.e3C(v),t),new C.bI(A.a7,u,u,new B.fg(A.hw,"Lock it in",new B.e3D(v),A.bc,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bff.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.by(new C.aa(0,0,n,m),A.pR)
$.X()
w=C.L()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.ep(C.by(new C.aa(0,0,n,m),A.pR)),$.pg(),!0)
v=e.ged()*0.3
u=e.ee(A.J)
l=-v*0.55
t=v*0.45
s=[u.ae(0,new C.u(0,l)),u.ae(0,new C.u(l,t)),u.ae(0,new C.u(v*0.55,t))]
r=[A.DK,I.abz,I.abV]
d.kY(new C.aa(0,0,n,m),C.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nh
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.by(new C.aa(0,0,n,m),A.pR)
m=C.L()
m.b=A.ae
m.c=2
m.r=A.b5.gp(0)
d.aD(n,m)},
aq(d){return!0}}
B.aKg.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buY.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsv()}}
B.aKh.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buZ.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsw()}}
B.brN.prototype={}
B.a7a.prototype={
B(d){var w=null
return C.cb(C.eD(w,w,w,!0,!0,D.acz,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alu,w,w,w,new B.ccK(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fq6,w,w,w,1,w,!0),D.acz,C.cB(C.a([D.e0H,C.cm(new B.ccL())],x.p),w,D.boN,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vo.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aD9(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aD9.prototype={
a_(){this.a1()
this.l_()},
b1I(d){var w=this.d.length
return A.o.F(A.k.bw(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lh(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b1I(v.f)
if(w!==v.x){v.x=w
B.l9("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eCy(v))
B.Bb("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c3V(){if(this.d.length<2)return
this.m(new B.eCu(this))},
aX6(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eCt(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc3U(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new B.bt9(p,s.f,r),A.f_),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a9),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a6(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f0L,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.av1[A.o.F(v,8)].j(0.9)
t=new C.aV(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f02,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bs(t,t,t,t),r,r,A.n),r,r,r,A.fw,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,new B.eCw(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a9))}p=A.c.j(0.07)
return B.jD(A.aM,A.h8,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eK(o,r,r),C.A(C.a([C.D(C.aL(r,A.T,!1,r,!0,A.q,r,C.aM(),s.e,r,r,r,r,r,2,C.bq(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kq,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eCx(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hv,"Add",s.gc3S(s),A.c,r),A.bo,new B.fg(A.mc,"Spin",q,A.bc,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.bt9.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=C.L()
w.r=D.b70.gp(0)
a1.ah(d,f,w)
w=C.L()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ah(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bU(d,a0)
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.av1[A.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c5(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c5(o),n,s,!0,m])
m.delete()
J.bA(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.km(new C.eo(o,i,i,A.cO,i,i,i,i,i,i,D.ePm),A.a5,A.ch,new C.jm(1),i,i,i,i,A.cd,i)
k.eO()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.u(a0-n-16,-o.gbb(o)/2))
f.restore()}f=C.L()
f.r=D.aci.gp(0)
a1.ah(d,20,f)
f=C.L()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ah(d,20,f)
j=new C.aQ(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ap(g-14,e))
j.E(new C.ap(g+14,e))
j.E(new C.bF())
e=C.L()
e.r=A.c.gp(0)
a1.aN(j,e)
e=C.L()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aN(j,e)},
aq(d){return!0}}
B.U6.prototype={
T(){return new B.bhz($,A.bx,0,C.a([],x.X),null,null)}}
B.bhz.prototype={
a_(){this.a1()
this.l_()},
lh(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bb("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a3P(900,new B.dQq())}w.m(new B.dQr())},
aX8(d){return this.m(new B.dQl(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.F(A.k.dJ(m),60)),2,"0")
m=C.b3(n,n,n,new B.bo2(l,A.cr,n),A.aLN)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eTw,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a6(280,280,new C.an(A.A,n,A.aa,A.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eSC,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CG,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d0s[r]
u.push(new B.dy(""+q+" min",o.d===q,new B.dQn(o,q),n,A.cr,n))}m=o.f
p=m?A_.xM:A.iN
m=m?"Pause":"Start"
return B.jD(A.cr,A.h8,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eK(u,n,n),new B.eK(C.a([new B.fg(p,m,new B.dQo(o),A.bc,n),new B.fg(A.jR,"Reset",new B.dQp(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bo2.prototype={
a6(d,e){var w,v,u,t,s=e.ee(A.J),r=e.a/2-14
$.X()
w=C.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ah(s,r,w)
w=C.bU(s,r)
v=C.L()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sau(new C.fR(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bU(s,r)))
d.ff(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.Tj.prototype={
T(){return new B.bhc($,A.bx,0,C.a([],x.X),null,null)}}
B.bhc.prototype={
a_(){this.a1()
this.l_()},
lh(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Q8.h(0,p.d)
w.toString
v=A.d.fC(w,new B.dBG())
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
B.l9("flute",D.bTk[t]+5,1400,0.35)}p.m(new B.dBH())},
gc3Y(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Jo("Press Start",0.5)
w=D.Q8.h(0,this.d)
w.toString
v=A.d.fC(w,new B.dBB())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Jo("Breathe in",0.5+0.5*A.dI.av(0,p))
case 1:return new C.Jo("Hold",1)
case 2:return new C.Jo("Breathe out",1-0.5*A.dI.av(0,p))
default:return new C.Jo("Hold",0.5)}}}return new C.Jo("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc3Y(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.ht.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ad(0,A.G,A.ht.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.CQ,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kq,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a6(300,340,new C.an(A.A,q,A.aa,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aW(D.Q8.geg(D.Q8));w.C();){v=w.gU(w)
o.push(new B.dy(v,r.d===v,new B.dBE(r,v),q,A.ht,q))}w=r.e
v=w?A.a_d:A.iN
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dBF(r),A.bc,q))
return B.jD(A.ht,A.h8,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eK(o,q,q))}}
B.aGx.prototype={}
B.TY.prototype={
T(){return new B.bht(new C.cs(null,x.A),C.a([],x.au),A.aA,A.c)}}
B.bht.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mj,s,s,s,new B.dNH(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.m(18),new C.et(C.aE(s,C.b3(s,s,s,new B.bjv(t.e,t.x,s),A.f_),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNI(t),new B.dNJ(t),s,s,s,s,s,s,s,s,s,new B.dNK(t),s,s,s,s,!1,A.a9),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cJj[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EG(v,u,new B.dNL(t,v),!1,s))}u=t.r
return B.jD(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bR,p,s),"DRAW PAD",C.v(C.a([new B.eK(o,s,s),B.hx(A.bA,""+A.k.V(u),"Brush",30,2,new B.dNM(t),u),new B.eK(C.a([new B.dy("Eraser",t.w,new B.dNN(t),A.Fm,A.bA,s),new B.fg(A.qR,"Undo",new B.dNO(t),A.c,s),new B.fg(A.e4,"Clear",new B.dNP(t),A.c,s),new B.fg(A.MH,"Paper",new B.dNQ(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bjv.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.X()
w=C.L()
w.r=this.c.gp(0)
d.aX(new C.aa(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fy
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
k.e=null}q=new C.ap(A.d.gam(m).a,A.d.gam(m).b)
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
B.UJ.prototype={
T(){var w=x.S
return new B.aCs(C.aX(w),C.aX(w))}}
B.aCs.prototype={
a_(){this.a1()
this.aqx()},
aqx(){var w,v,u=this,t=x.N,s=C.bl(D.d4H,!0,t)
A.d.Ci(s)
w=x.S
v=C.T(s).c
t=C.B(C.da(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.da(s,0,C.dJ(u.d,"count",w),v))
A.d.Ci(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c3T(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.l9("bell",12+A.o.F(d,9),150,0.35)
s.m(new B.e91(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gam(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.mP,new B.e92(s,v,u),t)
else{s.x=!0
C.bN(Ac.EE,new B.e93(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a6y,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xb,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hK,A.j,0,q,q),q),C.D(C.ib(!0,q,q,A.y,new C.hH(v,8,8,1,q),new B.e97(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cKI[t]
o.push(new B.dy(s.b,r.d===s.a,new B.e98(r,s),q,A.aX,q))}o.push(new B.fg(D.bAG,"New game",new B.e99(r),A.bc,q))
return B.jD(A.aX,A.h8,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eK(o,q,q))}}
B.UX.prototype={
T(){return new B.aCO(C.a([],x.t))}}
B.aCO.prototype={
c3X(d){A.d.a8(this.d)
this.w=!0
this.aX7()},
aX7(){this.d.push(A.cI.aB(4))
this.e=0
this.YO()},
YO(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.ejy(t))
s=x.H
w=3
return C.b(C.bN(A.ly,null,s),$async$YO)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aQA(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$YO)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.ejz(t))
case 1:return C.h(u,v)}})
return C.i($async$YO,v)},
aQA(d){this.m(new B.ejw(this,d))
B.l9("marimba",D.an3[d]+5,450,0.55)
C.bN(A.EC,new B.ejx(this),x.H)},
c3Z(d){var w,v,u=this
if(!u.w||u.r)return
u.aQA(d)
w=u.d
v=u.e
if(w[v]!==d){E.dE(90,"",600,0,0.5,"saw")
u.m(new B.ejA(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.ejB(u))
C.bN(A.it,new B.ejC(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,M.SI,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f18,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.atY[v]
u=u.j(q.f===v?1:0.35)
t=new C.aV(28,28)
s=q.f===v?C.a([new C.ad(0,A.G,D.atY[v].j(0.8),A.J,30)],w):p
r=new C.aA(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aE(p,C.dg(p,p,p,p,A.bb,new C.o(u,p,new C.bP(r,r,r,r),new C.bs(t,t,t,t),s,p,A.n),A.jn,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.ejD(q,v),p,p,p,p,p,p,!1,A.a9))}o=C.av(new C.C(A.a8,C.v(C.a([o,A.ao,n,A.d6,new C.fF(1,C.lR(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.ba,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jD(A.cq,A.h8,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eK(C.a([new B.fg(A.iN,n,q.gc3W(q),A.bc,p)],m),p,p))}}
B.Vh.prototype={
T(){return new B.biH(new C.ar(A.as,$.aw()))}}
B.biH.prototype={
au0(d){return C.ou(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.exQ(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d3(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.exZ()
l=C.aL(m,A.T,!1,m,!0,A.q,m,C.aM(),l,m,m,m,m,m,2,C.bq(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),A8.wl),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aVp),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lj,"Bill amount",!0,!0,!1,m,m,m,m,D.eZJ,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.exV(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aNf,!0,A.a5,m,A.am,m,m,m,m)
k=A.bc.j(0.1)
s=C.m(20)
r=C.I(A.bc.j(0.35),A.r,1)
q=x.p
s=C.cB(C.a([l,A.bu,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.au0(w)),t.$2("Total","$"+n.au0(v)),R.WN,t.$3$big("Each of "+n.f+" pays","$"+n.au0(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bY,m,m,m)],q),m,A.fx,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cvK[p]
r.push(new B.dy(""+o+"%",A.k.V(n.e)===o,new B.exW(n,o),m,A.bc,m))}l=n.f
return B.jD(A.bc,A.h8,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eK(r,"TIP",m),B.hx(A.aX,""+l,"People",20,1,new B.exX(n),l),new B.eK(C.a([new B.dy("Round up",n.r,new B.exY(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.UH.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bia(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bia.prototype={
a_(){this.a1()
this.l_()},
lh(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a79("snare",0.5)}u.m(new B.e7H())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
B.l9("bell",24,400,0.5)}u.m(new B.e7I())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbe(v,o.r>0,n))}u=C.aE(n,C.av(C.c3(A.fM,m,A.bw,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e7A(o),n,n,n,n,n,n,!1,A.a9)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.dj,A.r,6)
s=C.a([new C.ad(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.e9(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eYY,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.e7l,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e7B(o),n,n,n,n,n,n,!1,A.a9)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eOR,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kq,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e7C(o),n,n,n,n,n,n,!1,A.a9)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cZ2[r]
v.push(new B.dy(q.b,o.d===q.a,new B.e7D(o,q),q.c,A.by,n))}v=C.a([new B.eK(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hx(A.by,""+s,"Dice",4,1,new B.e7E(o),s))}if(o.d==="num"){s=o.z
s=B.hx(A.by,""+s,"From",100,1,new B.e7F(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hx(A.by,""+p,"To",1000,2,new B.e7G(o),p)],m))}return B.jD(A.by,A.h8,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbe.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ad(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=C.a([],x.p)
for(s=D.dfz.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,L.a9B,p,18,p,p,p,p,p,18),p))
return C.eA(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.q,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aJC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buP.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brP()}}
B.aJV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buU.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bs8()}}
B.aKp.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv3.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsE()}}
B.aKT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bvf.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bt7()}}
B.b4U.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aBJ.h(0,t)
$.aqi=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,T.nK,u,u,u,new B.cps(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.W(A.ML,s,u,u,u,22),u,u,u,new B.cpt(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.brO,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.E1,u,new C.bP(new C.aA(A.c.j(0.08),1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EH,u,u,1/0))
return C.cb(u,A.bV,C.bo(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),u,!1,!1,u,u)}}
B.dy.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aR,s,s,s,16),A.eb],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.te,C.aE(s,C.dg(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h5,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cpo(t),s,s,s,s,s,s,!1,A.a9),s)}}
B.eK.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a6(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),1))
return new C.C(A.cG,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.au8.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.atI(d).cE9(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a8S(C.kR(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a6(s,34,C.A(C.a([new C.a6(78,s,r,s),q,new C.a6(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A6.Ih,A.dK,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.te,C.aF(!1,A.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Aj.Xe,C.A(C.a([C.W(w.c,u,v,v,v,17),A.eb,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cpn(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.af),v)}}
B.EG.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eNl:u
w=t?A.c:A.b5
w=C.I(w,A.r,t?2.5:1)
return C.aE(u,C.dg(u,u,u,u,A.bb,new C.o(p,u,w,u,t?C.a([new C.ad(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hW,u,r,D.af8,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cpu(v),u,u,u,u,u,u,!1,A.a9)}}
B.ms.prototype={
a3P(d,e){var w=C.df()
w.seB(C.cM(C.dB(0,0,0,d,0,0),new B.cpp(this,w,e)))
this.fi$.push(w.bc())},
l_(){var w=this,v=w.q6(new B.cpr(w))
v.iT(0)
w.fh$!==$&&C.aO()
w.fh$=v}}
B.a9Q.prototype={
bvc(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gai(w[q]);p.C();){o=p.gU(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gai(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gU(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bym()
g.ay!==$&&C.aO()
g.ay=w},
bym(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
F0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.K)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
B.a9R.prototype={
cAc(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.F0(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uM.prototype={}
B.Oh.prototype={}
B.xE.prototype={}
B.Og.prototype={
fd(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.an_[w.aB(7)]
w=w.he()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
B.l9(u,v+w-12,2200,0.1)}}
B.Ud.prototype={
T(){var w=$.aw()
return new B.aBP(new C.cs(null,x.A),new C.ar(A.as,w),new B.Og(A.cI),D.d_W,A.at,D.a1D,$,A.bx,0,C.a([],x.X),null,null)}}
B.aBP.prototype={
a_(){var w,v=this
v.a1()
v.l_()
v.a.toString
w=$.h4d
if(w==null)w=$.h4d=B.crZ()
w.bz(new B.dT8(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bsg()},
coh(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dSB(p[n]).$0())
w.push(q)}this.w=w},
gV6(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
arI(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
avK(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.arI(d.x,d.w,105/Math.max(w,3))
C.eO()
B.l9("bell",(A.d.cJ(D.a1e,d.c)+1)*3+12,900,0.45)
E.dE(300,"",280,1.4,0.15,"tri")},
lh(d){var w,v,u,t,s,r,q,p=this
p.f.fd(0,d,p.db)
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
c4D(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.at))return null
w=n.fy
v=n.gV6()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gV6()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cAc((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c4C(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dSz(w))
return}w.m(new B.dSA(w,v,A.a.i(d).toLowerCase()))},
bKS(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new B.dSx(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bDm,n,n,n,o.gbKR(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mj,n,n,n,new B.dSU(o,d),n,n,n,n,"Share",n)],l),j=C.cm(new B.dSV(o,m)),i=A.c.j(0.06)
i=C.a([C.aL(n,A.T,!1,n,!0,A.q,n,C.aM(),o.e,n,n,n,n,n,2,C.bq(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.CO,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bLm,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc4B(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.iC,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dy(s.a,!1,new B.dSW(o,s),A.mZ,A.aX,n))}i.push(new C.C(A.i7,new C.a6(n,38,C.cB(w,n,n,n,n,A.aQ,!1),n),n))}i.push(A.ao)
w=C.a([new B.dy("Whole Earth",!1,new B.dT_(o),A.hh,A.aX,n)],l)
for(v=D.aBI.gdL(D.aBI),v=v.gai(v);v.C();){u=v.gU(v)
w.push(new B.dy(u.a,!1,new B.dT0(o,u),n,A.aX,n))}w.push(new B.dy("Random",!1,new B.dT1(o),A.mc,A.aX,n))
i.push(new B.eK(w,"GO TO",n))
w=o.z
i.push(B.hx(A.aX,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dT2(o),w))
w=o.dy
i.push(B.hx(A.cq,A.a.aT(A.o.u(A.k.bw(w)),2,"0")+":00","Time",24,0,new B.dT3(o),w))
w=o.fr
i.push(B.hx(A.bc,o.cn4(),"Season",365,0,new B.dT4(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lD:D.FD
i.push(new B.eK(C.a([new B.dy("Spin",w,new B.dT5(o),D.byz,A.aX,n),new B.dy("Night",v,new B.dT6(o),A.v6,A.aX,n),new B.dy("Borders",u,new B.dSX(o),D.byD,A.aX,n),new B.dy("Names",r,new B.dSY(o),Y.MP,A.aX,n),new B.dy("Music",q,new B.dSZ(o),p,A.aX,n)],l),n,n))
return B.jD(A.aX,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cn4(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.auC[u])v=u
return A.i8[v]+" "+(A.k.bw(w-D.auC[v])+1)},
c4A(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.lS(1,A.o.F((A.d.cJ(D.a1e,t)+1)*47,360),0.55,1).i7()
r=new B.dSv()
q=C.m(20)
p=C.I(s.j(0.6),A.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.dB,j,j,j),1),C.aH(j,j,j,j,A.FV,j,j,j,new B.dSu(this),j,j,j,j,j,A.c7)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hn,j,j,j)
m=D.deh.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fl4(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.G7(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.G7(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fl4(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.UZ,j,p,q,j,j,A.n),j,j,j,j,D.afE,j,j,j)}}
B.bds.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=C.L()
d7.r=D.A_.gp(0)
d8.aX(new C.aa(0,0,0+d4,0+d5),d7)
w=new C.eS()
w.dH(4)
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
u=C.L()
t=x.O
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.aX.j(0.35),A.K],t),D.cMd,d3).aw(0,C.bU(p,o*1.1)))
d8.ah(p,o*1.05,u)
n=C.bU(p,o)
u=C.L()
u.sau(D.e7p.aw(0,n))
d8.ah(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aQ(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kE(n))
d8.tI(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.L()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.d9y(l,k,j,p,o)
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
a9=A.o.F((A.d.cJ(D.a1e,a7.c)+1)*47,360)
$.X()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.lS(1,a9,a3,a8?1:0.62).i7().gp(0)
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fy
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
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
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.X()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.r0
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.K)(d6),++b3){a7=d6[b3]
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
c9=B.hCR(a7.a,a3,b2)
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
u=C.L()
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b4U.j(0.78)],t),D.d0h,d3).aw(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ah(p,o,u)}$.X()
d4=C.L()
d4.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dbQ,d3).aw(0,n))
d8.ah(p,o,d4)
d7.restore()
d7=C.L()
d7.b=A.ae
d7.c=1.4
d7.r=A.h1.j(0.5).gp(0)
d8.ah(p,o,d7)},
aq(d){return!0}}
B.aK0.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.aK1.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsf()}}
B.brI.prototype={}
B.Vk.prototype={
T(){return new B.biL()}}
B.biL.prototype={
gaQa(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eD(w,w,w,!0,!0,D.A_,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alu,w,w,w,new B.eyJ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fk3,w,w,w,1,w,!0),u=C.m(18),t=A.aX.j(0.1),s=C.I(A.aX.j(0.35),A.r,1),r=x.p
return C.cb(v,D.A_,C.cB(C.a([C.p(w,C.A(C.a([D.bC3,A.aw,C.D(C.d(D.cPV[this.gaQa()],w,w,w,w,w,w,D.a6S,w,w,w),1),C.aH(w,w,w,w,D.bMm,w,w,w,new B.eyK(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.az,C.cm(new B.eyL())],r),w,A.Xq,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.V5.prototype={
T(){return B.hDi()}}
B.bix.prototype={
cf2(d){var w=d.c,v=B.hDk(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.l_()},
lh(d){var w,v,u,t=this
t.e.fd(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cf2(w)
u=new C.u(-v.a,-v.b).aK(0,t.w)
v=C.la(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc4E(){var w=this.ch
return new C.u(w.a/2,w.b/2).ae(0,this.x)},
c4I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BF[s]
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
aXt(d){this.m(new B.eqM(this,d))
C.eO()
B.l9("bell",D.dc0[A.o.F(A.d.cJ(D.BF,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mj,m,m,m,new B.eqX(n,d),m,m,m,m,"Share",m)],k),i=C.cm(new B.eqY(n,l)),h=C.a([new B.dy("All",!1,new B.eqZ(n),A.a_m,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BF[w]
h.push(new B.dy(v.a,n.z===v,new B.er_(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hx(A.aM,s,"Time",1,0,new B.er0(n),u/t)
u=n.w
u=B.hx(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.er1(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lD:D.FD
return B.jD(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eK(h,"GO TO",m),t,u,new B.eK(C.a([new B.dy("Orbits",s,new B.er2(n),m,A.aM,m),new B.dy("Names",r,new B.er3(n),m,A.aM,m),new B.dy("Asteroids",q,new B.er4(n),m,A.aM,m),new B.dy("Music",p,new B.er5(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c4F(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eqK(),m=C.m(20),l=C.I(q.j(0.6),A.r,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kS,r,r,r),1),C.aH(r,r,r,r,A.FV,r,r,r,new B.eqJ(this),r,r,r,r,r,A.c7)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.Iy,r,r,r)
v=n.$2("WIDTH",B.G7(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.G7(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eqL().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.au,k,A.P,p,A.P,v,A.P,s,A.P,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.UZ,r,l,m,r,r,A.n),r,r,r,r,D.afE,r,r,r)}}
B.bpN.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.L()
w.r=D.A_.gp(0)
a7.aX(new C.aa(0,0,0+a5,0+a6),w)
v=new C.eS()
v.dH(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc4E()
n=a5.w
if(a5.as)for(a6=A.d.gai(D.BF),t=new C.h2(a6,new B.eSU()),s=o.a,r=o.b;t.C();){q=a6.gU(0).c
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
p.delete()}i=B.hDj(A.d.gL(D.BF))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.L()
s=x.O
t.sau(new C.bR(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.ah(o,a6,t)
t=C.L()
t.sau(D.e7j.aw(0,C.bU(o,i)))
a7.ah(o,i,t)
if(a5.at){h=B.h5P("Sun",10.5,A.ad)
h.a6(a7,o.ae(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gai(D.BF),t=new C.h2(a6,new B.eSV()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gU(0)
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
a0=C.ct(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bJ.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c5(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.r0
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sau(new C.bR(P.q9,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a0S,a4).aw(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cUQ[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h5P(d,10.5,A.ad)
h.a6(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.Ue.prototype={
T(){var w=x.i
return new B.aBQ(new B.Og(A.cI),C.c1(5,0,!1,w),C.c1(5,0,!1,w),C.c1(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBQ.prototype={
crt(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c4H(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dXj
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
E.dE(150,"",400,0,0.5,"noise")
E.dE(90,"",300,1.5,0.6,"sine")
s.m(new B.dTc())},
a_(){this.a1()
this.l_()},
lh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fd(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yj[r]
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
if(q.a!=="Sun")E.dE(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.de(s,new B.dTF()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dE(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gam(v).aC(0,i.cx).gcm()>120)v.push(i.cx)
if(v.length>700)A.d.cz(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bJa()
else n=n==="weight"?p.cyx():p.bBv()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.d9d[u]
v.push(new B.dy(t.b,p.d===t.a,new B.dTr(p,t),t.c,A.cy,o))}v=C.a([new B.eK(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dy("Hammer",!s,new B.dTs(p),Ah.Fy,A.cy,o),new B.dy("Feather",s,new B.dTt(p),Y.Mp,A.cy,o),new B.dy(q,r,new B.dTx(p),A.Fn,A.aX,o)],w)
q=p.w
A.d.v(v,C.a([new B.eK(r,o,o),B.hx(A.cy,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dTy(p),q),new B.eK(C.a([new B.fg(A.tr,"Drop!",new B.dTz(p),A.bc,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hx(A.cy,""+A.k.V(s)+" kg","Your weight",120,20,new B.dTA(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hx(A.cy,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dTB(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hx(A.cy,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dTC(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hx(A.cy,A.k.aa(r,1)+"x out","View",8,0.5,new B.dTD(p),r),new B.eK(C.a([new B.fg(A.n_,"Fire!",p.gc4G(),A.bc,o),new B.fg(A.tr,"Falls",new B.dTE(p),A.c,o),new B.fg(A.qI,"Orbit 7.7",new B.dTu(p),A.c,o),new B.fg(D.bBt,"Oval 9",new B.dTv(p),A.c,o),new B.fg(A.B8,"Escape",new B.dTw(p),A.c,o)],w),o,o)],w))}return B.jD(A.cy,A.h8,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bJa(){return new C.C(D.bmP,C.cm(new B.dTb(this)),null)},
cyx(){var w,v,u,t=null,s=[D.euE,D.ew_,D.ew7,D.ewq,D.ew5,D.ewv,D.evb,D.ewP,D.evL],r=x.p,q=C.a([D.f8r,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cG,new C.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a6(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bE(1,A.bi,new C.AR(new B.dTd(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.faB)
return C.cB(q,t,A.j5,t,t,A.ah,!1)},
bBv(){return C.cm(new B.dT9(this))}}
B.b8I.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=C.L()
e.r=D.A_.gp(0)
d.aX(new C.aa(0,0,0+h,0+g),e)
w=new C.eS()
w.dH(2)
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
e=C.L()
e.sau(new C.bR(A.A,0.5,A.x,i,0,C.a([A.K,A.aX.j(0.35),A.K],x.O),D.d19,i).aw(0,C.bU(g,p*1.1)))
d.ah(g,p*1.06,e)
e=C.L()
e.sau(D.e7d.aw(0,C.bU(g,p)))
d.ah(g,p,e)
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
s=C.L()
s.r=A.ak.gp(0)
d.aN(n,s)
s=o.ae(0,new C.u(0,-400*h-6))
u=C.L()
u.r=A.c.gp(0)
d.ah(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aQ(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.da(u,1,i,C.T(u).c),s=u.$ti,u=new C.bW(u,u.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.X()
f=C.L()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cy.j(0.9).gp(0)
d.aN(m,f)}if(j.f){f=j.d
k=g.ae(0,new C.u(f.a*h,f.b*h))
h=C.L()
h.r=A.cy.j(0.4).gp(0)
h.z=G.mm
d.ah(k,7,h)
h=C.L()
h.r=A.c.gp(0)
d.ah(k,4,h)}},
aq(d){return!0}}
B.UY.prototype={
T(){return new B.biu(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.biu.prototype={
a_(){this.a1()
this.l_()},
lh(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.P3[l.e],i=D.P3[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mj,k,k,k,new B.ejG(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.bpl(f,g,v,k),A.f_),1)
r=g.a
q=v<10?A.k.aa(v,1):B.G7(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.jf,A.L,k,k)
o=B.G7(v*v*v)
n=A.a.c9(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A9.a6i,A.L,k,k),A.bz,C.d(p+": "+B.G7(w*2)+" km wide. "+r+": "+B.G7(h*2)+" km wide.",k,k,k,k,k,k,Aa.SA,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.boX,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.P3[m]
r.push(new B.dy(w.a,l.e===m,new B.ejH(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.P3[m]
w.push(new B.dy(s.a,l.f===m,new B.ejI(l,m),k,C.b0(s.c),k))}return B.jD(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.et(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eK(r,"FIRST",k),new B.eK(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bpl.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=C.L()
w.r=D.VB.gp(0)
d.aX(new C.aa(0,0,0+h,0+g),w)
v=new C.eS()
v.dH(6)
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
w=new B.eR2(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.ah(l,n+3,w)
k=C.ih(i,i,i,i,C.dp(i,i,i,i,i,i,i,i,i,D.eVi,s.a),A.a5,A.ch,i,A.er,A.cd)
k.eO()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a6(d,l.ae(0,new C.u(-w/2,h)))
j=C.ih(i,i,i,i,C.dp(i,i,i,i,i,i,i,i,i,D.eYz,t.a),A.a5,A.ch,i,A.er,A.cd)
j.eO()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ae(0,new C.u(-h/2,-t.gbb(t)/2)))},
aq(d){return!0}}
B.aK2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buW.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsh()}}
B.aKB.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv9.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsQ()}}
B.aKE.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bvb.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsT()}}
B.OJ.prototype={}
B.Th.prototype={
T(){return B.hDg()}}
B.bhb.prototype={
a_(){this.a1()
this.l_()},
lh(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fd(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dE(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dB7())},
aXu(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb5a()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.OJ(t,u,1.2,new C.wP(1,30+A.cI.aj()*40,0.9,0.7).i7()))
B.l9("bell",60+A.k.V(12-u)*2,400,0.35)},
gb5a(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.J(m,new B.dAW(),C.T(m).k("J<1,P>")).fC(0,A.wq),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mj,n,n,n,new B.dAX(o,d),n,n,n,n,"Share",n)],m)
v=C.cm(new B.dAY(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fl4(s)+" Suns"
t=B.hx(A.by,s,"Mass",1,0,new B.dB_(o),u/t)
u=C.a([new B.dy("Star (10)",!1,new B.dB0(o),n,A.by,n),new B.dy("Cygnus X-1 (21)",!1,new B.dB1(o),n,A.by,n),new B.dy("Milky Way core (4 million)",!1,new B.dB2(o),n,A.by,n),new B.dy("M87 (6.5 billion)",!1,new B.dB3(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lD:D.FD
return B.jD(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eK(u,"LIKE",n),new B.eK(C.a([new B.dy("Glowing ring",s,new B.dB4(o),n,A.by,n),new B.dy("Bent light",r,new B.dB5(o),n,A.by,n),new B.dy("Music",q,new B.dB6(o),p,A.by,n),new B.fg(A.jR,"Clear",new B.dAZ(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adf(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eRj,w,w,w),A.bz,C.d(e,w,2,w,w,w,w,Am.CF,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b86.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=C.L()
w.r=D.bcx.gp(0)
b2.aX(new C.aa(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb5a()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
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
f.delete()}if(t.x){b0=C.L()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=T.Qd
b2.ah(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wH,A.fB,d)
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
b1=C.L()
b1.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cHu,null).aw(0,C.bU(u,b0)))
b2.ah(u,b0,b1)
b1=C.L()
b1.r=A.w.gp(0)
b2.ah(u,s,b1)
b1=C.L()
b1.b=A.ae
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.ah(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
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
o.z=G.mm
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.adw.prototype={}
B.Ua.prototype={
T(){var w=x.r,v=x.g
return new B.bhC(new C.cs(null,x.A),new B.Og(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bhC.prototype={
a_(){this.a1()
this.Z0()
this.l_()},
Z0(){var w,v,u,t,s,r,q,p,o=this,n=new C.eS()
n.dH(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adw(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adw(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
crk(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dYM
k.cx=D.dYP
w=new C.eS()
w.dH(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adw(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.u(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.u(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.da(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bW(s,s.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.da(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bW(u,u.gM(0),r.k("bW<aj.E>")),r=r.k("aj.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dE(110,"",900,0.5,0.45,"sine")},
lh(d){var w,v,u,t,s,r,q,p=this
p.e.fd(0,d,p.y)
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
q=new B.dRK(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mj,r,r,r,new B.dRA(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdi(s,r),A.at),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ae.a66,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cXT[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dy(u.b,o,new B.dRB(s,u),r,A.fY,r))}l.push(new B.dy("Collide",s.ch,new B.dRC(s),A.xA,A.bZ,r))
o=C.a([new B.eK(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hx(A.fY,""+n,"Arms",6,2,new B.dRD(s),n)
l=s.r
A.d.v(o,C.a([n,B.hx(A.fY,A.k.aa(l,1),"Winding",6,0.8,new B.dRE(s),l)],q))}n=s.as
o.push(B.hx(A.fY,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dRF(s),n))
n=s.ax
o.push(B.hx(A.fY,A.k.aa(n,1)+"x","Speed",4,0,new B.dRG(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lD:D.FD
o.push(new B.eK(C.a([new B.dy("Dark matter",n,new B.dRH(s),r,A.by,r),new B.dy("You are here",l,new B.dRI(s),r,A.aM,r),new B.dy("Music",w,new B.dRJ(s),t,A.fY,r)],q),r,r))
return B.jD(A.fY,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.et(new C.an(A.W,r,A.b_,A.q,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdi.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=C.L()
w.r=D.ber.gp(0)
a3.aX(new C.aa(0,0,0+a1,0+a2),w)
v=new C.eS()
v.dH(3)
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
t=C.L()
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c5n,a0).aw(0,C.bU(o,a2)))
a3.ah(o,a2,t)}m=new B.d6G(a1.as)
a2=n*0.3
t=C.L()
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.fZ.j(0.85),A.aJ.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
a3.ah(o,a2,t)
if(!a1.ch){l=C.L()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new H.lS(1,r,q>200?0.45:0.55,1).i7().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.X()
a2=C.L()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ah(g,9,a2)
f=C.ih(a0,a0,a0,a0,D.eOp,A.a5,A.ch,a0,A.er,A.cd)
f.eO()
f.a6(a3,g.ae(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bfy.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.baH.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=C.L()
w.r=A.fZ.gp(0)
a3.ah(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.L()
w.r=A.ij.gp(0)
a3.ah(a1,5,w)}},
aq(d){return!0}}
B.UU.prototype={
T(){return new B.bit(new C.cs(null,x.A),new B.Og(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.bit.prototype={
a_(){this.a1()
this.l_()},
lh(d){var w,v,u,t=this
t.e.fd(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bw(w*4)
if(u!==A.k.bw(t.as))B.l9("bell",60+u*4,500,0.35)
t.as=u}},
gcn3(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcdF(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mj,q,q,q,new B.eiV(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.et(C.b3(q,q,q,new B.boD(r,q),A.f_),r.d),1)
if(r.f==="seasons")w=r.gcn3()
else{w=r.gcdF()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A3.Im,A.L,q,q),A.f,q,q,q,q,q,q,q,M.afO,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A_.xM:A.iN
t=r.Q
s=t?A.lD:D.FD
s=C.a([new B.eK(C.a([new B.dy("Seasons",n==="seasons",new B.eiW(r),A.y0,A.bs,q),new B.dy("Moon phases",n==="moon",new B.eiX(r),A.v6,A.bs,q),new B.dy(u,!1,new B.eiY(r),v,A.bs,q),new B.dy("Music",t,new B.eiZ(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hx(A.bs,D.cXf[A.o.F(A.k.bw(n*12),12)],"Month",1,0,new B.ej_(r),n)
v=r.z
A.d.v(s,C.a([n,B.hx(A.bs,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ej0(r),v)],p))}else{p=r.w
s.push(B.hx(A.bs,""+(A.k.bw(p*29.5)+1),"Day of month",1,0,new B.ej1(r),p))}p=r.y
s.push(B.hx(A.bs,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ej2(r),p))
return B.jD(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.boD.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=C.L()
b8.r=D.A_.gp(0)
b9.aX(new C.aa(0,0,0+b5,0+b6),b8)
w=new C.eS()
w.dH(4)
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
u=C.ct(p,n*2,o*2)
t=C.L()
t.b=A.ae
t.c=1
t.r=A.b5.gp(0)
b9.hZ(u,t)
t=C.L()
t.sau(D.e7f.aw(0,C.bU(p,34)))
b9.ah(p,22,t)
m=s.r*2*3.141592653589793
l=p.ae(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eD(0,p.aC(0,l).gcm())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.L()
s.r=D.bct.gp(0)
b9.ah(A.J,k,s)
J.bA(b8.save())
b7=new C.aQ(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kE(C.bU(A.J,k)))
b9.tI(0,b7)
b7=i.aK(0,k).aK(0,0.35)
s=k*1.1
b6=C.L()
b6.sau(D.e7o.aw(0,C.bU(A.J,s)))
b9.ah(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aK(0,k).aK(0,1.7)
b5=h.aK(0,k).aK(0,1.7)
t=C.L()
t.c=2
t.r=A.cr.gp(0)
b9.bA(b7,b5,t)
t=h.aK(0,k).aK(0,1.7)
b5=C.L()
b5.r=A.cr.gp(0)
b9.ah(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ih(b4,b4,b4,b4,C.dp(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aOI,b5),A.a5,A.ch,b4,A.er,A.cd)
f.eO()
f.a6(b9,l.ae(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.L()
r.b=A.ae
r.c=1
r.r=A.b5.gp(0)
b9.ah(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.L()
r.sau(new C.bR(new C.d8(-0.5,0),1.1,A.x,b4,0,C.a([D.b8i,D.adP],x.O),D.cOV,b4).aw(0,C.bU(p,k)))
b9.ah(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ae(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.L()
r.r=D.b5Q.gp(0)
b9.ah(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kE(C.bU(a1,a2)))
b9.tI(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.L()
a3.r=A.bW.gp(0)
b9.aX(new C.aa(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eD(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.aqK[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aX.j(0.45).gp(0)
a7.z=A.jc
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.L()
b6.r=D.b5M.gp(0)
b9.ah(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kE(C.bU(a8,a9)))
b9.tI(0,b6)
s=s.w
b1=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aAO(new C.u(u,t+a9),b6,new C.aV(a9,a9))
if(b0<0.5)b6=b2<0
b1.aAO(new C.u(u,b5),b6,new C.aV(a9*Math.abs(1-2*b0),a9))
b6=C.L()
b6.r=A.bW.gp(0)
b9.aN(b1,b6)
b8.restore()
b8=C.L()
b8.b=A.ae
b8.c=1
b8.r=A.b5.gp(0)
b9.ah(a8,a9,b8)
b3=C.ih(b4,b4,b4,b4,D.eOq,A.a5,A.ch,b4,A.er,A.cd)
b3.eO()
b3.a6(b9,a8.ae(0,new C.u(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aJz.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buO.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brM()}}
B.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.buV.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsb()}}
B.aKA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
B.bv8.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsP()}}
var z=a.updateTypes(["~()","R(t9)","R(a3i)","ay<~>()","R(BS)","G(t9,G)","P(P,t9)","R(BO)","R(Yd)","R(aa9)","R(uM)","R(a20)","R(n9)","R(ZK)","R(aaX)","G(G)","Tn()","TZ()","Td()","Uc()","Uv()","Ux()","Tm()","UR()","V6()","US()","UO()","Vd()","Tl()","Vi()","R(mp)","UI()","UN()","adB(Y,G)","acv(Y,G)","~(a4<@,@>)","G(BO,BO)","n(e7)","R(adr)","R(a_q)","R(C1)","R(aaE)","R(acz)","R(aan)","G(G,qw)","G(G,BS)","n(qw)","~(qw,ak<n>,G)","qw?(BS)","R(qw)","r(n,a_d)","R(P0)","~(A0)","R(aau)","P(G?)","Vk()","R(F8)","R(abM)","P(G)","U_()","P(OJ)","R(a95)","Ti()","a7a()","~(ahv,n,u,w,P)","~(n,t9)","UL()","Uq(Y)","Mu(Y)","TH(Y,bn<P>,bn<P>)","Vo()","U6()","Tj()","TY()","UJ()","UX()","Vh()","UH()","~(n)","cn(a9R)","R(a9Q)","Ud()","V5()","Ue()","Th()","Ua()","UY()","UU()","TJ()","R(OJ)","~(b9)"])
B.fnb.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fe8.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.fkk.prototype={
$1(d){var w
if(!this.a.L_(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fkl.prototype={
$1(d){return d.x},
$S:z+1}
B.fn8.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fn9.prototype={
$1(d){var w
if(!this.a.L_(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fna.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e0m.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e0n.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e0o.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.lR(v,A.dX,A.i6)}},
$S:8}
B.e0z.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e0A.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e0v.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e0t.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dB(0,0,0,d,0,0),new B.e0u(w,this.b,e)))},
$S:1811}
B.e0u.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e0w.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gV8().aid(0,u[1],u[2],u[3])
u[4].bH(0,new B.e0r(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e0s(w.a,v,w.f,w.r))},
$S:0}
B.e0r.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:193}
B.e0s.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e0x.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gV8().aiZ(t,u[1],s,u[3])
E.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e0q(w.a,v,w.e,w.f))},
$S:0}
B.e0q.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e0y.prototype={
$0(){E.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e0p(w,this.b))},
$S:0}
B.e0p.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e0D.prototype={
$0(){var w=this.a
return w.m(new B.e0C(w))},
$S:0}
B.e0C.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e0E.prototype={
$0(){var w=this.a
return w.m(new B.e0B(w))},
$S:0}
B.e0B.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e0F.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.MK()},
$S:0}
B.e0G.prototype={
$0(){return this.a.X7(this.b)},
$S:0}
B.e0H.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.MK():w.aTo()},
$S:2}
B.e0I.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.MK():w.aTo()},
$S:0}
B.egl.prototype={
$2(d,e){return d+e},
$S:1812}
B.egF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.egE(w,d))},
$S:127}
B.egE.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.egG.prototype={
$0(){},
$S:0}
B.egH.prototype={
$0(){},
$S:0}
B.egn.prototype={
$0(){return this.a.m(new B.egm(this.b,this.c))},
$S:0}
B.egm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.egc.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.egd.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.ege.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.egf.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.egg.prototype={
$1(d){return this.a.db===d},
$S:32}
B.egh.prototype={
$1(d){return this.a.db=d},
$S:28}
B.egi.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.egj.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:28}
B.egk.prototype={
$0(){var w=this.a
return w.m(w.gauD())},
$S:0}
B.ega.prototype={
$1(d){return this.a.$1(!0)},
$S:83}
B.egb.prototype={
$1(d){return this.a.$1(!1)},
$S:147}
B.eg9.prototype={
$1(d){return this.a.$1(!1)},
$S:216}
B.egy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.beY(o,p),n)
w=this.b
v=B.bxv("WORLD",w.a,w.c)
u=B.bxv("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cr:A.bc
t=B.bxv("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Bz[o.db].d?A.cr:A.c
q=x.p
s=C.a([v,u,t,B.bxv("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bxv("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hK,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bAu(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qW[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mf,"Again",new B.egt(o),A.c,p),new B.fg(A.qJ,"Rebuild",new B.egu(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.j7,"Next world",new B.egv(o),A.bc,p))
n.push(B.h9t("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(B.h9t("Crash!",o.at,A.cr,C.a([new B.fg(A.mf,"Try again",new B.egw(o),A.bc,p),new B.fg(A.qJ,"Rebuild",new B.egx(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.q,n,p)},
$S:62}
B.egt.prototype={
$0(){var w=this.a
return w.m(w.gauD())},
$S:0}
B.egu.prototype={
$0(){var w=this.a
return w.m(new B.egq(w))},
$S:0}
B.egq.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.egv.prototype={
$0(){var w=this.a
return w.m(new B.egp(w))},
$S:0}
B.egp.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.egw.prototype={
$0(){var w=this.a
return w.m(w.gauD())},
$S:0}
B.egx.prototype={
$0(){var w=this.a
return w.m(new B.ego(w))},
$S:0}
B.ego.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.egz.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.egs(v,w))},
$S:0}
B.egs.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.egA.prototype={
$1(d){return this.a.y=d},
$S:9}
B.egB.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.egC.prototype={
$1(d){return this.a.z=d},
$S:9}
B.egD.prototype={
$0(){var w=this.a
return w.m(new B.egr(w))},
$S:0}
B.egr.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dBz.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h4R
if(q==null)q=$.h4R=B.cCa()
w=3
return C.b(C.iI(C.a([q,$.tP().bd7("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kk(0,C.cO(J.q(s,1)))
q.m(new B.dBy(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:54}
B.dBy.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dBb.prototype={
$0(){return this.a.bRo(C.aU(J.q(this.b,"group")))},
$S:0}
B.dBc.prototype={
$1(d){return A.a.aT(A.o.fN(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:291}
B.dBA.prototype={
$0(){return B.a79("kick",0.25)},
$S:0}
B.dBd.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dBe.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dBf.prototype={
$0(){return B.a79("kick",0.5)},
$S:0}
B.dBg.prototype={
$0(){return E.dE(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dBi.prototype={
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
u=w}if(u.cx!=null&&!A.d.b8(u.d.e,new B.dBh(u)))u.cx=null
u.go=0},
$S:0}
B.dBh.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.awm(d)},
$S:z+11}
B.dB8.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dB9.prototype={
$0(){var w=this.a
return w.m(w.gc0A())},
$S:0}
B.dBa.prototype={
$0(){return this.a.afV(null)},
$S:0}
B.dBp.prototype={
$0(){var w=this.a.as
return w==null?null:w.eR(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dBq.prototype={
$0(){return this.a.cvq(this.b.a)},
$S:0}
B.dBr.prototype={
$0(){return this.a.afV(this.b)},
$S:0}
B.dBs.prototype={
$1(d){var w=this.a
return w.m(new B.dBo(w,d))},
$S:6}
B.dBo.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dBt.prototype={
$0(){var w=this.a
return w.m(new B.dBn(w,this.b))},
$S:0}
B.dBn.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dBu.prototype={
$0(){var w=this.a
return w.m(new B.dBm(w))},
$S:0}
B.dBm.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dBv.prototype={
$0(){var w=this.a
return w.m(new B.dBl(w))},
$S:0}
B.dBl.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eR(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Js},
$S:0}
B.dBw.prototype={
$0(){var w=this.a
return w.m(new B.dBk(w))},
$S:0}
B.dBk.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aVW()
else w.p2=null},
$S:0}
B.dBx.prototype={
$0(){var w=this.a
return w.m(new B.dBj(w))},
$S:0}
B.dBj.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bYP.prototype={
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
$S:313}
B.bYQ.prototype={
$1(d){var w=new C.rt([],[]).pd(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:513}
B.f8G.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:233}
B.f8H.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:233}
B.f8I.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:233}
B.f8P.prototype={
$1(d){return!J.q(d,0)},
$S:233}
B.f8Q.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:233}
B.f8R.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:233}
B.dDK.prototype={
$1(d){return this.a.arn(0)},
$S:8}
B.dDo.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hQh(),C.T(w).k("J<1,G>")).fF(0)},
$S:0}
B.dDr.prototype={
$1(d){return""+d},
$S:73}
B.dDL.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dDm.prototype={
$1(d){return this.a.arn(this.b)},
$S:8}
B.dDn.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.av4(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mf(0,d,a1.lI(0.15,0.3))
u=a1.mf(0,d,a1.lI(0.15,0.62))
t=a1.mf(0,"and",a1.lI(0.48,0.46))
s=a1.mf(0,a0,a1.lI(0.82,0.46))
a1=t.a
w.push(new B.n9(v.a,a1,0))
w.push(new B.n9(u.a,a1,1))
w.push(new B.n9(a1,s.a,0))
break
case 1:v=a1.mf(0,d,a1.lI(0.12,0.25))
u=a1.mf(0,d,a1.lI(0.12,0.65))
r=a1.mf(0,"xor",a1.lI(0.46,0.25))
q=a1.mf(0,"and",a1.lI(0.46,0.65))
p=a1.av3(0,a0,a1.lI(0.82,0.25),0)
o=a1.av3(0,a0,a1.lI(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.n9(a1,n,0))
m=u.a
w.push(new B.n9(m,n,1))
l=q.a
w.push(new B.n9(a1,l,0))
w.push(new B.n9(m,l,1))
w.push(new B.n9(n,p.a,0))
w.push(new B.n9(l,o.a,0))
break
case 2:k=a1.mf(0,"clock",a1.lI(0.15,0.4))
j=a1.mf(0,"not",a1.lI(0.45,0.65))
s=a1.mf(0,a0,a1.lI(0.82,0.3))
i=a1.mf(0,"buzzer",a1.lI(0.82,0.65))
a1=k.a
w.push(new B.n9(a1,s.a,0))
n=j.a
w.push(new B.n9(a1,n,0))
w.push(new B.n9(n,i.a,0))
break
default:h=a1.mf(0,d,a1.lI(0.12,0.25))
g=a1.mf(0,d,a1.lI(0.12,0.7))
f=a1.mf(0,"nor",a1.lI(0.5,0.25))
e=a1.mf(0,"nor",a1.lI(0.5,0.7))
s=a1.mf(0,a0,a1.lI(0.86,0.25))
a1=f.a
w.push(new B.n9(g.a,a1,0))
n=e.a
w.push(new B.n9(n,a1,1))
w.push(new B.n9(h.a,n,0))
w.push(new B.n9(a1,n,1))
w.push(new B.n9(a1,s.a,0))}},
$S:0}
B.dDs.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.av4(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BO(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mf(0,w.e,o.lI(0.86,0.5))},
$S:0}
B.dDh.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dDi.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dDj.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dDk.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dDl.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abi(this.c)
if(v.ax)B.Bb("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dE(140,"",250,0,0.3,"square")}},
$S:0}
B.dDt.prototype={
$0(){},
$S:0}
B.dDu.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
B.dDv.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dDq.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dDp(v))
w.cy=null},
$S:0}
B.dDp.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dDg.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mf(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dDE.prototype={
$0(){var w=this.a
return w.m(new B.dDD(w))},
$S:0}
B.dDD.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dDF.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c5,C.jr(C.b3(w,w,w,new B.b99(v,w),u),A.q,w),A.y,!1,w,w,w,w,w,w,w,w,new B.dDy(v),w,w,w,new B.dDz(v),new B.dDA(v),new B.dDB(v),w,w,w,w,w,w,w,w,w,w,new B.dDC(v),w,w,w,!1,A.a9)},
$S:35}
B.dDC.prototype={
$1(d){return this.a.c21(d.b)},
$S:49}
B.dDA.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cas(u)
if(t!=null){v.as=t
v.at=u
return}w=v.avT(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dDB.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dDz.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bUX(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dDw(w))
u=t.as
u.toString
v.push(new B.n9(u,w.a,w.b))
C.jK()}}t.z=t.as=null},
$S:37}
B.dDw.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dDy.prototype={
$1(d){return this.a.atU(d.b)},
$S:300}
B.dDG.prototype={
$0(){return this.a.bwq(this.b.a)},
$S:0}
B.dDH.prototype={
$0(){return this.a.arn(this.b.a)},
$S:0}
B.dDI.prototype={
$0(){var w=this.a
return w.m(new B.dDx(w))},
$S:0}
B.dDx.prototype={
$0(){var w=this.a
w.av4(0)
w.ay=null},
$S:0}
B.dDJ.prototype={
$0(){return this.a.crh(this.b)},
$S:0}
B.cIX.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dp(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.er,A.cd)
u.eO()
return u},
$S:328}
B.dJb.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dJa.prototype={
$0(){return this.a.d=null},
$S:0}
B.dJd.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bWJ()},
$S:116}
B.dJc.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.f96.prototype={
$0(){return D.dSm},
$S:z+55}
B.f97.prototype={
$0(){return D.dqw},
$S:z+59}
B.f98.prototype={
$0(){return D.dnp},
$S:z+62}
B.f9j.prototype={
$0(){return D.dRM},
$S:z+63}
B.f9l.prototype={
$0(){return D.dwU},
$S:z+66}
B.f9m.prototype={
$0(){return D.dqs},
$S:z+88}
B.f9n.prototype={
$0(){return D.dqv},
$S:z+17}
B.f9o.prototype={
$0(){return D.djA},
$S:z+18}
B.f9p.prototype={
$0(){return D.dt_},
$S:z+19}
B.f9q.prototype={
$0(){return D.duC},
$S:z+20}
B.f9r.prototype={
$0(){return D.duE},
$S:z+21}
B.f99.prototype={
$0(){return D.dpE},
$S:z+22}
B.f9a.prototype={
$0(){return D.dzD},
$S:z+23}
B.f9b.prototype={
$0(){return D.dRt},
$S:z+24}
B.f9c.prototype={
$0(){return D.dPw},
$S:z+25}
B.f9d.prototype={
$0(){return D.dyi},
$S:z+26}
B.f9e.prototype={
$0(){return D.dRB},
$S:z+27}
B.f9f.prototype={
$0(){return D.dpD},
$S:z+28}
B.f9g.prototype={
$0(){return D.dRL},
$S:z+29}
B.f9h.prototype={
$0(){return D.dpF},
$S:z+16}
B.f9i.prototype={
$0(){return D.duU},
$S:z+31}
B.f9k.prototype={
$0(){return D.dyh},
$S:z+32}
B.eQA.prototype={
$2(d,e){return new B.adB($.bBY()[e],new B.eQz(e,this.a),null)},
$S:z+33}
B.eQz.prototype={
$0(){var w=this.a,v=F.aBJ.h(0,$.bBY()[w].a)
$.aqi=v==null?"music":v
C.a5(this.b,!1).ci(C.em(new B.eQx(w),!1,null,x.H))},
$S:0}
B.eQx.prototype={
$1(d){return $.bBY()[this.a].e.$0()},
$S:40}
B.eQB.prototype={
$2(d,e){return new B.acv(D.auD[e],new B.eQy(this.a,e),null)},
$S:z+34}
B.eQy.prototype={
$0(){return this.a.d.$1(D.auD[this.b])},
$S:0}
B.eQg.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eQf.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eQe.prototype={
$1(d){var w=this
return new C.e5(new B.eQd(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eQd.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.f8c,A.au,D.fer,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aV(12,12)
m=new C.aV(12,12)
m=C.a([new C.bE(1,A.bi,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),r[p],d,d,d,d,d,2,new C.e_(d,d,d,d,d,d,d,d,d,d,"Title",d,G.CO,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bs(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d),A.ab,new C.bE(2,A.bi,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),q[p],d,d,d,d,d,2,new C.e_(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.CO,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bs(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.daX[l]
j=new C.aV(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.aA(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aE(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bs(j,j,j,j),d,d,A.n),d,d,d,A.fw,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eQb(a3,p,u,k),d,d,d,d,d,d,!1,A.a9))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.eZe,d,d,d,d,d,d,d,d,d),A.ao,new C.co(A.aQ,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a6(d,44,C.cB(n,d,d,d,d,A.aQ,!1),d),A.az],w))}v.push(C.bJ(A.zc,new B.eQc(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bo(!0,new C.cU(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A2.Az,d,d,A.ah,!0),d),!0,!1,A.ag,!0,!0),d)},
$S:108}
B.eQb.prototype={
$0(){var w=this
return w.a.$1(new B.eQa(w.b,w.c,w.d))},
$S:0}
B.eQa.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eQc.prototype={
$0(){var w=this,v=w.a
v.m(new B.eQ9(v,w.b,w.c,w.d))
C.a5(w.e,!1).N(null)},
$S:0}
B.eQ9.prototype={
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
B.eQo.prototype={
$0(){var w=this.a
return w.m(new B.eQn(w))},
$S:0}
B.eQn.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eQp.prototype={
$0(){return B.qE(this.b,this.a.f,"scene")},
$S:0}
B.eQq.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gam(u),0.4)
u.toString
w=this.a.gYo().x
w===$&&C.c()
return C.bX(v,new C.o(v,v,v,v,v,new C.bR(D.aTP,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bV],x.O),v,v),A.n),A.bd)},
$S:278}
B.eQr.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(A.A,C.c6(new C.h3(C.a([u.gtv(),u.gYo()],x.dS)),new B.eQm(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:235}
B.eQm.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtv().x
r===$&&C.c()
w=r<0.9?1:1-B.boV(r,0.9,0.98)
v=s.gYo().x
v===$&&C.c()
u=A.dI.av(0,v)
switch(s.gav5().a){case 0:s=s.bvD(t.b,r,u,t.c)
break
case 1:s=s.bLH(t.b,r,u,t.c)
break
case 2:s=s.cvT(t.b,r,u,t.c)
break
case 3:s=s.byw(t.b,r,u,t.c)
break
case 4:s=s.bBH(t.b,r,u,t.c)
break
case 5:s=s.bAV(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:215}
B.eQs.prototype={
$2(d,e){var w=C.atI(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gam(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gam(v),0.4)
v.toString
v=w.cE3(u,A.bF,v,3.5)
u=this.a
w=u.gtv().x
w===$&&C.c()
return C.a8S(C.kR(null,null,null,1,0,new B.eQl(u),A.k.D(w,0,1)),v)},
$S:1816}
B.eQl.prototype={
$1(d){var w=this.a
w.gtv().sp(0,d)
if(w.as)w.m(new B.eQh(w))},
$S:6}
B.eQh.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eQt.prototype={
$0(){var w=this.a
w.gtv().sp(0,0)
w.aeF()},
$S:0}
B.eQu.prototype={
$1(d){var w=this.a
w.m(new B.eQk(w,d))
if(w.as)w.aeF()},
$S:6}
B.eQk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eQv.prototype={
$0(){var w=this.a
w.m(new B.eQj(w,this.b))
w.gtv().sp(0,0)
if(w.as)w.aeF()},
$S:0}
B.eQj.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eQw.prototype={
$0(){var w=this.a
return w.m(new B.eQi(w,this.b))},
$S:0}
B.eQi.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eQ7.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1817}
B.eQ8.prototype={
$1(d){return d.b},
$S:1818}
B.ddu.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.ddv.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.ddr.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dds.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddw.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.ddx.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.ddy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddz.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.ddA.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.ddB.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.ddC.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.ddD.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.ddE.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.efG.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.efv.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.efx.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+44}
B.efy.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+45}
B.efB.prototype={
$1(d){var w=D.ml.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
B.efC.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.B(new C.e6(new C.cQ(new C.a2(q,new B.efD(d),p.k("a2<1>")),new B.efE(r),p.k("cQ<1,qw?>")),o),o.k("H.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.efD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.efE.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.efz.prototype={
$1(d){return D.ml.h(0,d.b).c===D.wf},
$S:z+49}
B.efA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eg5.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uG(0,u)
w.aGg(A.o.an(v,1000))},
$S:8}
B.efF.prototype={
$0(){},
$S:0}
B.efr.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
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
B.efI.prototype={
$1(d){var w=null,v=this.a.b
return C.bo(!0,C.v(C.a([A.P,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.ml.h(0,v).b,D.ml.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fp9,w,C.d(D.ml.h(0,v).a,w,w,w,w,w,w,A.hm,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,U.aly,w,w,w,w,new B.efH(d),!1,w,w,w,w,w,w,w,D.fh9,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
B.efH.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.efK.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e0z],x.p)
for(w=0;w<6;++w){v=D.auW[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bM1,u,u,u,u,new B.efJ(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.lj,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hm,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bo(!0,new C.cU(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.bsp,u,u,A.ah,!0),u),!0,!1,A.ag,!0,!0)},
$S:29}
B.efJ.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.efu.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,A.dd,w,w,!0,w,w,new B.efs(d),w,w),C.bK(!1,A.CS,w,w,!0,w,w,new B.eft(d),w,w)],x.p),w,w,F.mL,D.feC,w,w,w,w,D.fhr,w)},
$S:19}
B.efs.prototype={
$0(){C.a5(this.a,!1).N(!1)
return null},
$S:0}
B.eft.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.eg3.prototype={
$0(){var w=this.a
return w.m(new B.eg2(w))},
$S:0}
B.eg2.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eg4.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.m6(new B.efU(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b2r:t
v=C.a([C.b3(u,t,t,new B.beW(w,v,new B.efV(r),new B.efW(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e2(C.c6(w,new B.efX(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bDl())
return C.aE(A.c5,C.jr(new C.an(A.W,t,A.b_,A.q,v,t),A.q,t),A.y,!1,t,t,t,t,t,t,t,t,new B.efY(r),t,r.gcbJ(),t,new B.efZ(r),new B.eg_(r),new B.eg0(r),t,t,t,t,t,t,t,t,t,t,new B.eg1(r),t,t,t,!1,A.a9)},
$S:35}
B.efU.prototype={
$0(){return this.a.aap(this.b)},
$S:0}
B.eg1.prototype={
$1(d){return this.a.ctI(d.b)},
$S:49}
B.eg_.prototype={
$1(d){return this.a.cbK(d.b)},
$S:42}
B.eg0.prototype={
$1(d){return this.a.cbL(d.b)},
$S:18}
B.efZ.prototype={
$1(d){return this.a.aZ8()},
$S:37}
B.efY.prototype={
$1(d){return this.a.ab4(d.b)},
$S:300}
B.efV.prototype={
$0(){return this.a.z},
$S:540}
B.efW.prototype={
$0(){return this.a.Q},
$S:515}
B.efX.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bHB()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=C.a([D.fc8,A.d0],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.eY_,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h5,q,q,q)},
$S:59}
B.efw.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A3.Im,w,w,w),A.bz,C.d(g,w,w,w,w,w,w,F.SG,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1820}
B.efQ.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lY()},
$S:0}
B.efR.prototype={
$0(){var w=this.a
return w.m(new B.efP(w))},
$S:0}
B.efP.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.efS.prototype={
$0(){var w=this.a
return w.m(new B.efO(w))},
$S:0}
B.efO.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.efT.prototype={
$0(){var w=this.a
return w.m(new B.efN(w))},
$S:0}
B.efN.prototype={
$0(){return this.a.r=!0},
$S:0}
B.efM.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.ml.gdL(D.ml),w=w.gai(w);w.C();){v=w.gU(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.coF(p[r]))
return new C.C(I.af5,C.v(C.a([new C.C(S.agI,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.efL.prototype={
$0(){return this.a.c26(this.b)},
$S:0}
B.ddq.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dp(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.er,A.cd)
u.eO()
return u},
$S:328}
B.erw.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.eru(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.erv())},
$S:8}
B.eru.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.erv.prototype={
$0(){},
$S:0}
B.er7.prototype={
$0(){},
$S:0}
B.er6.prototype={
$0(){},
$S:0}
B.erg.prototype={
$0(){return B.qE(this.b,this.a.d,"spark-painter")},
$S:0}
B.eri.prototype={
$1(d){return this.a.aWu(0,d.b)},
$S:42}
B.erm.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gam(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aPI(u)
v.c57(u)
return null},
$S:18}
B.erh.prototype={
$1(d){return this.a.aWt()},
$S:37}
B.ern.prototype={
$1(d){return this.a.aWu(0,d.b)},
$S:23}
B.ero.prototype={
$1(d){return this.a.aWt()},
$S:49}
B.erp.prototype={
$0(){var w=this.a
return w.m(new B.erf(w,this.b))},
$S:0}
B.erf.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.erq.prototype={
$0(){var w=this.a
return w.m(new B.ere(w))},
$S:0}
B.ere.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.err.prototype={
$0(){var w=this.a
return w.m(new B.erd(w,this.b))},
$S:0}
B.erd.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ers.prototype={
$1(d){var w=this.a
return w.m(new B.erc(w,d))},
$S:6}
B.erc.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ert.prototype={
$0(){var w=this.a
return w.m(new B.erb(w))},
$S:0}
B.erb.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.erj.prototype={
$0(){var w=this.a
return w.m(new B.era(w))},
$S:0}
B.era.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.erk.prototype={
$0(){var w=this.a
return w.m(new B.er9(w))},
$S:0}
B.er9.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.erl.prototype={
$0(){var w=this.a
return w.m(new B.er8(w,this.b))},
$S:0}
B.er8.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.ey5.prototype={
$0(){return B.qE(this.b,this.a.d,"title")},
$S:0}
B.ey6.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIc().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bWT(v[t],t,s,q,u))
return new C.C(A.fx,C.c3(A.fM,w,A.rs,0,0),null)},
$S:745}
B.ey7.prototype={
$1(d){return this.a.m(new B.ey4())},
$S:2}
B.ey4.prototype={
$0(){},
$S:0}
B.ey8.prototype={
$0(){var w=this.a
w.m(new B.ey3(w,this.b))
w=w.gIc()
w.im(0,0)
w.cG(0)},
$S:0}
B.ey3.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.ey9.prototype={
$0(){var w=this.a
return w.m(new B.ey2(w,this.b))},
$S:0}
B.ey2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eya.prototype={
$0(){var w=this.a
return w.m(new B.ey1(w))},
$S:0}
B.ey1.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eyb.prototype={
$0(){var w=this.a
return w.m(new B.ey0(w,this.b))},
$S:0}
B.ey0.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eyc.prototype={
$0(){var w=this.a.gIc()
w.im(0,0)
w.cG(0)},
$S:0}
B.eyd.prototype={
$1(d){var w=this.a
return w.m(new B.ey_(w,d))},
$S:6}
B.ey_.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ecj.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.eck.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.gakZ()*2.2},
$S:z+13}
B.ec7.prototype={
$0(){return B.qE(this.b,this.a.d,"orbits")},
$S:0}
B.ec8.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gach()
v=q.w
u=q.as
t=q.at
s=u==null?A.a1x:q.cfk(u,q.gaTR())
return new C.et(C.aE(A.c5,C.b3(r,r,r,new B.bjh(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,new B.ec4(q),new B.ec5(q),new B.ec6(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a9),q.d)},
$S:176}
B.ec5.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.ec6.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ec4.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.ZK(u,v.gaTR(),v.Q,v.b_E(),C.a([],x.g)))
C.jK()
if(v.ax)E.dE(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.ec9.prototype={
$1(d){var w=this.a
return w.m(new B.ec3(w,d))},
$S:6}
B.ec3.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ecb.prototype={
$1(d){var w=this.a
return w.m(new B.ec2(w,d))},
$S:6}
B.ec2.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ecc.prototype={
$1(d){var w=this.a
return w.m(new B.ec1(w,d))},
$S:6}
B.ec1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ecd.prototype={
$0(){var w=this.a
return w.m(new B.ec0(w))},
$S:0}
B.ec0.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ece.prototype={
$0(){var w=this.a
return w.m(new B.ec_(w))},
$S:0}
B.ec_.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ecf.prototype={
$0(){var w=this.a
return w.m(new B.ebZ(w))},
$S:0}
B.ebZ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ecg.prototype={
$0(){var w=this.a
return w.m(w.gcqU())},
$S:0}
B.ech.prototype={
$0(){var w=this.a
return w.m(w.gbDz())},
$S:0}
B.eci.prototype={
$0(){var w=this.a
return w.m(new B.ebY(w))},
$S:0}
B.ebY.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.apG(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.he())}},
$S:0}
B.eca.prototype={
$0(){var w=this.a
return w.m(A.d.gr8(w.e))},
$S:0}
B.exx.prototype={
$1(d){return this.a.fM$-d.b>6000},
$S:548}
B.exy.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.exw(d),C.T(w).k("a2<1>")).gM(0)>=3},
$S:548}
B.exw.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.exm.prototype={
$0(){return B.qE(this.b,this.a.d,"swarm")},
$S:0}
B.exn.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.et(C.aE(A.c5,C.b3(w,w,w,new B.bqF(v.e,v.f,v.ax,v.at,v.ay,v.fM$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.exj(v),new B.exk(v),new B.exl(v),w,w,w,w,w,w,w,w,new B.exb(v),new B.exc(v),new B.exd(v),w,w,w,!1,A.a9),v.d)},
$S:176}
B.exk.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.exl.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.exj.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.exc.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fM$))
if(w.ch)E.dE(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.l9("flute",7,500,0.3)},
$S:23}
B.exd.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.exb.prototype={
$0(){return this.a.ay=null},
$S:0}
B.exo.prototype={
$0(){var w=this.a
return w.m(new B.exi(w,this.b))},
$S:0}
B.exi.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.exp.prototype={
$0(){var w=this.a
return w.m(new B.exh(w,this.b))},
$S:0}
B.exh.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.exq.prototype={
$0(){var w=this.a
return w.m(new B.exg(w))},
$S:0}
B.exg.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.exr.prototype={
$1(d){var w=this.a
return w.m(new B.exf(w,d))},
$S:6}
B.exf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.exs.prototype={
$1(d){var w=this.a
return w.m(new B.exe(w,d))},
$S:6}
B.exe.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ext.prototype={
$1(d){var w=this.a
return w.m(new B.exa(w,d))},
$S:6}
B.exa.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.exu.prototype={
$1(d){var w=this.a
return w.m(new B.ex9(w,d))},
$S:6}
B.ex9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.exv.prototype={
$1(d){var w=this.a
return w.m(new B.ex8(w,d))},
$S:6}
B.ex8.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dCT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dCS(w,d))},
$S:127}
B.dCS.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.O(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:A.k.O(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.V(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jq(v==null?A.vz:v)
v=v.gai(v)
while(v.C()){u=v.gU(v)
t.n(0,C.t(u.a),A.k.O(C.f8(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dCU.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dCV.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Yp(w)>0},
$S:z+14}
B.dCJ.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ay9()},
$S:0}
B.dCM.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eE(w,F.qv,new C.C(A.bB,new C.a6(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.jf,w,w,w),A.S,C.D(C.ib(!0,w,w,A.y,K.aM7,new B.dCL(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d_,w,new C.b7(v,A.Y),w)},
$S:46}
B.dCL.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dCK(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b5:A.dq,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j2
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aK("\u2605",n)+A.a.aK("\u2606",3-n),s,s,s,s,s,s,D.f0E,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.ba,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a9)},
$S:75}
B.dCK.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.dCQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gabl()
o=C.b3(q,q,q,new B.b8R(p.d,w,v,p.gc2d(),q),o)
v=p.bUA("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHB()
t=p.as>=p.gHB()?A.bc:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.at9("GOAL",""+w+" / "+u,t),p.at9("STARS",A.a.aK("\u2605",s)+A.a.aK("\u2606",3-s),A.aM)],r),A.m,q,A.hK,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lY)
if(p.Q&&!p.y)s.push(D.aTx)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.bc:A.cr).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bc:A.cr,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ao,C.d("You blasted "+p.as+" dots. The goal was "+p.gHB()+".",q,q,q,q,q,q,A.hz,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aK("\u2605",t==null?1:t),q,q,q,q,q,q,D.eSi,q,q,q))}u.push(A.az)
t=C.a([new B.fg(A.mf,"Try again",new B.dCN(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.j7,"Next level",new B.dCO(p),A.bc,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.V0,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return C.aE(A.c5,new C.an(A.W,q,A.b_,A.q,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dCP(p),q,q,q,q,!1,A.a9)},
$S:35}
B.dCP.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fM$
E.dE(180,"",200,1,0.4,"sine")
C.jd()},
$S:23}
B.dCN.prototype={
$0(){var w=this.a
return w.m(w.gb2h())},
$S:0}
B.dCO.prototype={
$0(){var w=this.a
return w.aWv(w.r+1)},
$S:0}
B.dCR.prototype={
$0(){var w=this.a
return w.m(w.gb2h())},
$S:0}
B.cIu.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.X()
v=C.L()
v.r=f.j(0.18).gp(0)
w.ah(d,e,v)
v=C.L()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ah(d,e,v)
v=C.L()
v.r=f.j(0.25).gp(0)
v.z=A.lf
w.ah(d,e*0.5,v)},
$S:554}
B.e7N.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcJC()?this.a.cn7(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.e8b.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.e80.prototype={
$0(){var w=this.a
return w.m(new B.e7S(w))},
$S:0}
B.e7S.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e81.prototype={
$0(){return B.qE(this.b,this.a.d,"marble-music")},
$S:0}
B.e82.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.et(C.aE(A.c5,C.b3(w,w,w,new B.bfQ(v.e,v.f,v.at,v.ax,v.fM$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e7Y(v),new B.e7Z(v),new B.e8_(v),w,w,w,w,w,w,w,w,w,w,new B.e7R(v),w,w,w,!1,A.a9),v.d)},
$S:176}
B.e7R.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Z8(w)
u.e.push(new B.F8(w,w,v,u.aNr(v)))
if(u.ay)B.l9(u.z,v+12,700,0.5)}if(u.x==="erase")u.aPY(d.b)},
$S:49}
B.e7Z.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.e8_.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aPY(d.b)},
$S:18}
B.e7Y.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Z8(t.ae(0,w).eD(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.F8(w,t,v,u.aNr(v)))
if(u.ay)B.l9(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.e83.prototype={
$0(){var w=this.a
return w.m(new B.e7X(w,this.b))},
$S:0}
B.e7X.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e84.prototype={
$0(){var w=this.a
return w.m(new B.e7W(w,this.b))},
$S:0}
B.e7W.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e85.prototype={
$0(){var w=this.a
return w.m(new B.e7V(w,this.b))},
$S:0}
B.e7V.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e86.prototype={
$1(d){var w=this.a
return w.m(new B.e7U(w,d))},
$S:6}
B.e7U.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e87.prototype={
$0(){var w=this.a
return w.m(new B.e7T(w))},
$S:0}
B.e7T.prototype={
$0(){return this.a.awJ("stairs")},
$S:0}
B.e88.prototype={
$0(){var w=this.a
return w.m(new B.e7Q(w))},
$S:0}
B.e7Q.prototype={
$0(){return this.a.awJ("pinball")},
$S:0}
B.e89.prototype={
$0(){var w=this.a
return w.m(new B.e7P(w))},
$S:0}
B.e7P.prototype={
$0(){return this.a.awJ("random")},
$S:0}
B.e8a.prototype={
$0(){var w=this.a
return w.m(new B.e7O(w))},
$S:0}
B.e7O.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ebH.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ebI.prototype={
$0(){var w=this.b,v=new B.acg(this.a.a,this.c)
v.c=w.fM$
return w.e.push(v)},
$S:0}
B.ebP.prototype={
$0(){var w=this.a
return w.m(new B.ebO(w))},
$S:0}
B.ebO.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ebQ.prototype={
$0(){return B.qE(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ebR.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aON()}w=u.w
return new C.et(C.aE(A.c5,C.b3(v,v,v,new B.bji(u.e,u.gaWx(),6,u.gchm(),u.gcny(),u.fM$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ebN(u),v,v,v,!1,A.a9),u.d)},
$S:176}
B.ebN.prototype={
$1(d){return this.a.c2f(d.b)},
$S:49}
B.ebS.prototype={
$1(d){var w=this.a
return w.m(new B.ebM(w,d))},
$S:6}
B.ebM.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ebT.prototype={
$0(){var w=this.a
return w.m(new B.ebL(w,this.b))},
$S:0}
B.ebL.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ebU.prototype={
$0(){var w=this.a
return w.m(new B.ebK(w,this.b))},
$S:0}
B.ebK.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ebV.prototype={
$0(){var w=this.a
return w.m(w.gbHx())},
$S:0}
B.ebW.prototype={
$0(){var w=this.a
return w.m(new B.ebJ(w))},
$S:0}
B.ebJ.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.acg(v.aB(6),v.aj()))},
$S:0}
B.ebX.prototype={
$0(){var w=this.a
return w.m(A.d.gr8(w.e))},
$S:0}
B.fns.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:137}
B.ebb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eba(w,d))},
$S:127}
B.eba.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.x.v(0,w)},
$S:0}
B.eaY.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:137}
B.eaS.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b7K(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.eaT.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.eaX.prototype={
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
p=D.vy.h(0,v[u].a).a
o=w.ahN(u)
v=D.vy.h(0,v[t].a).a
n=w.ahN(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vF("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaWD()&&w.x.J(0,w.d)){B.vF("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a3(m).k("cl.E"))
B.vC("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.eaW.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cy<1>"),r=this.b,q=s.k("a2<H.E>"),p=C.B(new C.a2(new C.cy(t,s),new B.eaU(r),q),q.k("H.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.V(s,s)
t.bH(0,new B.eaV(r,v))
t.a8(0)
t.v(0,v)
A.d.cz(u.e,r)
u.r=null},
$S:0}
B.eaU.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.F(d,100)===w},
$S:32}
B.eaV.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:137}
B.eb5.prototype={
$1(d){return""+d.b+" "+D.vy.h(0,d.a).c.toLowerCase()},
$S:410}
B.eb6.prototype={
$0(){var w=this.a
return w.m(new B.eb4(w))},
$S:0}
B.eb4.prototype={
$0(){var w=this.a;++w.d
w.ava(0)},
$S:0}
B.eb7.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c5,C.b3(w,w,w,new B.bgx(v.e,v.f,v.r,v.gcxV(),w),A.f_),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.eb0(v),new B.eb1(v),new B.eb2(v,e),w,w,w,w,w,w,w,w,w,w,new B.eb3(v),w,w,w,!1,A.a9)},
$S:35}
B.eb3.prototype={
$1(d){return this.a.c2C(d.b)},
$S:49}
B.eb1.prototype={
$1(d){var w=this.a
return w.w=w.aWE(d.b)},
$S:42}
B.eb2.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.eaZ(w,v,d,this.b))},
$S:18}
B.eaZ.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.eb0.prototype={
$1(d){return this.a.w=null},
$S:37}
B.eb8.prototype={
$0(){var w=this.a
return w.m(new B.eb_(w,this.b))},
$S:0}
B.eb_.prototype={
$0(){var w=this.a
w.d=this.b
w.ava(0)},
$S:0}
B.eb9.prototype={
$0(){return this.a.c2w(0,this.b.a)},
$S:0}
B.dly.prototype={
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
$S:137}
B.dLf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dLe(w,d))},
$S:127}
B.dLe.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dL4.prototype={
$0(){var w,v,u=J.e0(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.atp[w.aB(4)]
return A.d.fT(u)},
$S:22}
B.dL3.prototype={
$1(d){return B.fR4(d)==="*"},
$S:3}
B.dL5.prototype={
$1(d){return d!==this.a},
$S:3}
B.dL2.prototype={
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
break A}r=p.ga7V()[r]+" codes for "+C.t(D.BM.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aZF()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.BM.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vF("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dLd.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dq:e,u=C.m(8),t=f?C.I(A.b5,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b5:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mT,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1824}
B.dL8.prototype={
$1(d){var w=D.deE.h(0,d)
return w==null?A.c:w},
$S:557}
B.dL9.prototype={
$0(){var w=this.a
return w.m(new B.dL7(w,this.b))},
$S:0}
B.dL7.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.auu()},
$S:0}
B.dLa.prototype={
$0(){var w=this.a
return w.m(new B.dL6(w))},
$S:0}
B.dL6.prototype={
$0(){var w=this.a;++w.e
w.auu()},
$S:0}
B.dLb.prototype={
$0(){return this.a.aWC(this.b)},
$S:0}
B.dLc.prototype={
$0(){return this.a.aWC(this.b)},
$S:0}
B.dO4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dO3(w,d))},
$S:127}
B.dO3.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dNS.prototype={
$0(){},
$S:0}
B.dNR.prototype={
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
B.dNT.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dNX.prototype={
$1(d){var w=this.a
return w.m(new B.dNW(w,d))},
$S:6}
B.dNW.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dNY.prototype={
$1(d){var w=this.a
return w.m(new B.dNV(w,d))},
$S:6}
B.dNV.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dNZ.prototype={
$1(d){var w=this.a
return w.m(new B.dNU(w,d))},
$S:6}
B.dNU.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dO_.prototype={
$0(){return this.a.a96("drought")},
$S:0}
B.dO0.prototype={
$0(){return this.a.a96("disease")},
$S:0}
B.dO1.prototype={
$0(){return this.a.a96("foxes")},
$S:0}
B.dO2.prototype={
$0(){return this.a.a96("rabbits")},
$S:0}
B.d0Z.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eS()
k.dH(A.o.O(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.km(new C.eo(e,l,l,A.cO,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ch,new C.jm(1),l,l,l,l,A.cd,l)
n.eO()
n.a6(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1826}
B.d10.prototype={
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
l=C.L()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fy
this.c.aN(u,l)},
$S:1827}
B.d1_.prototype={
$3(d,e,f){var w=null,v=C.ih(w,w,w,w,C.dp(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ch,w,A.er,A.cd)
v.eO()
v.a6(this.a,new C.u(f,this.b.b+2))},
$S:1828}
B.bE1.prototype={
$2(d,e){return d+e.a*e.b},
$S:1829}
B.fiw.prototype={
$2(d,e){return e.a-d.a},
$S:1830}
B.dz3.prototype={
$2(d,e){return d+e},
$S:74}
B.dzg.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dzf(v,A.k.D((v.gvv()-w[v.e].guy())/Math.max(w[v.e].guy(),8),-1,1)*0.32,u))},
$S:8}
B.dzf.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dzh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dze(w,d))},
$S:127}
B.dze.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.r.v(0,w)},
$S:0}
B.dz4.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dz9.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1831}
B.dza.prototype={
$0(){var w=this.a
return w.m(new B.dz8(w))},
$S:0}
B.dz8.prototype={
$0(){var w=this.a;++w.e
A.d.ha(w.f,0,5,0)},
$S:0}
B.dzb.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c5,C.b3(w,w,w,new B.b7W(v.w,this.b.a,v.f,v.gvv()===v.d[v.e].guy(),w),A.f_),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dz7(v,e),w,w,w,!1,A.a9)},
$S:35}
B.dz7.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.ctV(v-1)},
$S:49}
B.dzc.prototype={
$0(){var w=this.a
return w.m(new B.dz6(w,this.b))},
$S:0}
B.dz6.prototype={
$0(){var w=this.a
w.e=this.b
A.d.ha(w.f,0,5,0)},
$S:0}
B.dzd.prototype={
$0(){var w=this.a
return w.m(new B.dz5(w))},
$S:0}
B.dz5.prototype={
$0(){return A.d.ha(this.a.f,0,5,0)},
$S:0}
B.cB1.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.by(C.ct(new C.u(d,s),20,w),A.rc)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dy.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
B.fhy(v,"1",new C.u(d,s),A.bh,11)}},
$S:1832}
B.dS7.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dS6(w,v))},
$S:8}
B.dS6.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dS8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dS5(w,d))},
$S:127}
B.dS5.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.w.v(0,w)},
$S:0}
B.dRY.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dS1.prototype={
$0(){var w=this.a
return w.m(new B.dS0(w))},
$S:0}
B.dS0.prototype={
$0(){return this.a.r++},
$S:0}
B.dS2.prototype={
$0(){var w=this.a
return w.m(new B.dS_(w,this.b))},
$S:0}
B.dS_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dS3.prototype={
$1(d){var w=this.a
return w.m(new B.dRZ(w,d))},
$S:6}
B.dRZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dS4.prototype={
$1(d){return this.a.c2D(this.b,d)},
$S:6}
B.d8J.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bME(d,e,f,g),m=this.b
$.X()
w=C.L()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bU(d,e+6)))
m.aN(n,w)
w=C.L()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aN(n,w)
w=C.L()
w.r=A.w.j(0.28).gp(0)
m.ah(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hE.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.L()
w.r=A.aL.gp(0)
m.ah(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1833}
B.d8K.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fhy(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1834}
B.dDf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dDe(w,d))},
$S:127}
B.dDe.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dCY.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jC(90-(w-65)):d},
$S:13}
B.dD6.prototype={
$1(d){return this.a.m(new B.dD5())},
$S:2}
B.dD5.prototype={
$0(){},
$S:0}
B.dD7.prototype={
$1(d){return this.a.m(new B.dD4())},
$S:2}
B.dD4.prototype={
$0(){},
$S:0}
B.dD8.prototype={
$0(){var w=this.a
return w.m(new B.dD3(w))},
$S:0}
B.dD3.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aVn()},
$S:0}
B.dD9.prototype={
$0(){var w=this.a
return w.m(new B.dD2(w))},
$S:0}
B.dD2.prototype={
$0(){return this.a.f=0},
$S:0}
B.dDa.prototype={
$0(){var w=this.a
return w.m(new B.dD1(w))},
$S:0}
B.dD1.prototype={
$0(){return this.a.f=1},
$S:0}
B.dDb.prototype={
$0(){var w=this.a
return w.m(new B.dD0(w,this.b))},
$S:0}
B.dD0.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dDc.prototype={
$1(d){var w=this.a
return w.m(new B.dD_(w,d))},
$S:6}
B.dD_.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dDd.prototype={
$1(d){var w=this.a
w.m(new B.dCZ(w,d))
if(w.ga8o()&&w.Q.J(0,w.x)){B.vF("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dCZ.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bJM.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bJX.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bJS.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bJY.prototype={
$1(d){return this.a.L_(d)&&!d.x},
$S:z+1}
B.bJZ.prototype={
$2(d,e){return Math.max(d,this.a.ayD(e))},
$S:z+6}
B.bK0.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bK1(w))},
$S:z+5}
B.bK1.prototype={
$0(){return this.a.a},
$S:114}
B.bK_.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
B.bK2.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bK3(w))},
$S:z+5}
B.bK3.prototype={
$0(){return this.a.a},
$S:114}
B.bJO.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bJP(w))},
$S:z+5}
B.bJP.prototype={
$0(){return this.a.a},
$S:114}
B.bJN.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
B.bJQ.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bJR(w))},
$S:z+5}
B.bJR.prototype={
$0(){return this.a.a},
$S:114}
B.bJL.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bK4.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bJT.prototype={
$1(d){return d!==this.b&&this.a.aEC(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bJW.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bJV.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bJU.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFd.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFe.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ci5.prototype={
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
$S:193}
B.fyS.prototype={
$1(d){var w
$.X()
w=C.L()
w.r=d.gp(0)
return w},
$S:1835}
B.fyU.prototype={
$2(d,e){var w
$.X()
w=C.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1836}
B.fyV.prototype={
$5(d,e,f,g,h){return C.by(new C.aa(d,e,d+f,e+g),new C.aV(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1837}
B.fyT.prototype={
$3(d,e,f){var w
$.X()
w=C.L()
w.sau(new C.a7(A.b0,A.b6,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1838}
B.bES.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bET.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bER(w))},
$S:0}
B.bER.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bEU.prototype={
$0(){return C.a([],x.ey)},
$S:1839}
B.bEV.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:421}
B.bEW.prototype={
$0(){var w,v,u
J.bC5(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C0(v))if(B.fRw(v.b))w.aYC(v)
else w.Zo(v)
else{u=w.a.c.b9X(v)
w.acu(u==null?"The "+$.q_().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bEQ.prototype={
$1(d){return new C.e5(new B.bEO(this.a,this.b),null)},
$S:20}
B.bEO.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bEP(this.a,v,e),t=$.q_(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kS,w,w,w),q=C.aH(w,w,w,w,D.bCP,w,w,w,new B.bEK(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bo(!0,new C.C(A.xd,C.v(C.a([r,A.au,D.fq4,A.S,C.A(C.a([q,C.D(C.kR(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bJn,w,w,w,new B.bEL(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b3,C.bK(!1,D.f4D,w,w,!0,w,w,new B.bEM(u),w,w),C.bK(!1,A.zc,w,w,!0,w,w,new B.bEN(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:96}
B.bEP.prototype={
$1(d){var w=this.a
w.m(new B.bEI(this.b,d))
this.c.$1(new B.bEJ())
w.a.toString},
$S:6}
B.bEI.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bEJ.prototype={
$0(){},
$S:0}
B.bEK.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bEL.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bEM.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bEN.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.bFa.prototype={
$2(d,e){var w
if(d==="short"){E.dE(1800,"",120,0,0.55,"noise")
E.dE(200,"",160,2.2,0.4,"saw")
C.fJ()
w=this.a
if(w.c!=null)w.acu("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.acu("\u26a0 Overloaded! The "+$.q_().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.ze(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.acu("Burnt out! "+e.ay)
E.dE(140,"",320,0,0.6,"noise")
E.dE(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFb.prototype={
$0(){},
$S:0}
B.bEl.prototype={
$0(){},
$S:0}
B.bFc.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bF9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c5,C.b3(p,p,p,new B.ahi(w,v,u,t,s,r==null?A.iQ:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,new B.bF3(o),new B.bF4(o),new B.bF5(o),p,p,p,p,p,p,p,p,p,p,new B.bF6(o),p,p,p,!1,A.a9)],q)
if(o.a.c.a.length===0)n.push(D.b1L)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cy,A.r,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f2X,C.D(C.d(w,p,p,p,p,p,p,D.eWh,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b6W,p,u,v,p,p,A.n),p,p,p,p,A.om,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bF7(o),p,p,p,p,p,p,!1,A.a9),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aWH(C.A(C.a([D.bum,new B.fg(A.Fo,"Cut wire",new B.bF8(o),A.cr,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cch(w),p,p,10,10,p,p))}return C.jr(new C.an(A.W,p,A.b_,A.q,n,p),A.q,p)},
$S:426}
B.bF4.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b4o(s)
if(r!=null){t.m(new B.bF1(t,r,d))
return}w=t.aZi(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bF2(t,w))}},
$S:42}
B.bF1.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bF2.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bF5.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bF_(w,d))
else if(w.w!=null)w.m(new B.bF0(w,d.b.ae(0,w.x)))},
$S:18}
B.bF_.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bF0.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bF3.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b4o(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aiZ(u.a,u.b,v.a,v.b)!=null)E.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.acs()},
$S:37}
B.bF6.prototype={
$1(d){var w=this.a,v=d.b,u=w.aZi(v)
if(u!=null){w.m(new B.bEY(w,u))
if(D.lK.ag(0,u.b))w.cmB(u)
w.a.toString
return}w.m(new B.bEZ(w,w.cyI(v)))},
$S:49}
B.bEY.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dE(200,"",70,0,0.2,"saw")}},
$S:0}
B.bEZ.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bF7.prototype={
$0(){var w=this.a
return w.m(new B.bEX(w))},
$S:0}
B.bEX.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bF8.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dE(300,"",50,0,0.35,"noise")
w.acs()},
$S:0}
B.bEm.prototype={
$0(){return this.a.blK(this.b)},
$S:0}
B.bEF.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eQY,w,w,w),C.D(C.kR(this.b.d,w,w,g,h,new B.bEH(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1840}
B.bEH.prototype={
$1(d){var w=this.a
w.m(new B.bEG(this.b,d))
w.a.toString},
$S:6}
B.bEG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bEs.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dE(260,"",70,0,0.35,"noise")
w.acs()},
$S:0}
B.bEt.prototype={
$0(){var w=this.a
return w.m(new B.bEr(w))},
$S:0}
B.bEr.prototype={
$0(){return this.a.d=null},
$S:0}
B.bEu.prototype={
$0(){this.a.m(new B.bEq(this.b,this.c))
E.dE(900,"",40,0,0.3,"noise")},
$S:0}
B.bEq.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bEx.prototype={
$0(){return this.a.aYC(this.b)},
$S:0}
B.bEy.prototype={
$0(){return this.a.Zo(this.b)},
$S:0}
B.bEz.prototype={
$0(){return this.a.a01(this.b)},
$S:0}
B.bEA.prototype={
$0(){var w=this.a
w.m(new B.bEp(this.b,this.c))
w.a.toString},
$S:0}
B.bEp.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bEB.prototype={
$0(){var w=this.a
w.m(new B.bEo(this.b,this.c))
w.a.toString},
$S:0}
B.bEo.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bEC.prototype={
$0(){var w=this.a
w.m(new B.bEn(this.b,this.c))
w.a.toString},
$S:0}
B.bEn.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bED.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEE.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEv.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEw.prototype={
$1(d){return this.a.f=d},
$S:6}
B.f8S.prototype={
$1(d){return d.aEg("bulb")},
$S:z+2}
B.f8T.prototype={
$1(d){return d.pk(0,"switch")&&d.aEg("bulb")},
$S:z+2}
B.f8U.prototype={
$1(d){return A.d.b8(d.a,new B.f8F())},
$S:z+2}
B.f8F.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.f8V.prototype={
$1(d){return d.pk(0,"resistor")&&A.d.b8(d.a,new B.f8E())},
$S:z+2}
B.f8E.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.f8W.prototype={
$1(d){return!d.pk(0,"battery")&&d.aEg("bulb")},
$S:z+2}
B.f8J.prototype={
$1(d){return A.d.b8(d.a,new B.f8D())},
$S:z+2}
B.f8D.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f8K.prototype={
$1(d){return A.d.b8(d.a,new B.f8C())},
$S:z+2}
B.f8C.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f8L.prototype={
$1(d){return A.d.b8(d.a,new B.f8B())},
$S:z+2}
B.f8B.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.f8M.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f8z())&&A.d.b8(w,new B.f8A())&&d.pk(0,"buck")},
$S:z+2}
B.f8z.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f8A.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.f8N.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f8x())&&A.d.b8(w,new B.f8y())},
$S:z+2}
B.f8x.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.f8y.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f8O.prototype={
$1(d){return A.d.b8(d.a,new B.f8w())},
$S:z+2}
B.f8w.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dOc.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dOl.prototype={
$1(d){var w=this.a.d
return w.aEC(d)&&w.C0(d)},
$S:z+1}
B.dOm.prototype={
$1(d){return d.x},
$S:z+1}
B.dOn.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dOo.prototype={
$0(){},
$S:0}
B.dOb.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fjb,A.au,D.f4z,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.P6[v]
t=A.c.j(0.06)
s=new C.aV(14,14)
r=new C.aA(A.bF,1,A.r,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kp,q,q,q,q,q,q,q,q,q),A.bz,new C.x(u.b,q,D.eX_,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bs(s,s,s,s),q,q,A.n),q,q,q,A.cG,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dOa(w,d,u),q,q,q,q,q,q,!1,A.a9))}return C.eE(q,F.qv,new C.C(A.bY,new C.a6(340,q,C.cB(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d_,q,new C.b7(p,A.Y),q)},
$S:46}
B.dOa.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new B.dO9(w,this.c))
E.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dO9.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bf1()},
$S:0}
B.dO7.prototype={
$1(d){return new B.Uq(this.a.d,null)},
$S:z+67}
B.dO8.prototype={
$0(){},
$S:0}
B.dOk.prototype={
$1(d){return new C.e5(new B.dOj(this.a),null)},
$S:20}
B.dOj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agu(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bc:A.aX
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fgF,A.b3,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.bv(C.m(4),C.mf(A.bF,m,m,5,m,w.a/11,new C.my(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.f7A)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.Sx,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.Iy,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.au,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dOh(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aV(12,12)
n=new C.aA(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.ay:A.c
u.push(C.aE(m,C.p(m,new C.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a6B,m,m,m,m,m,m,m,m,m),A.aw,new C.bE(1,A.bi,new C.x(r.a,m,new C.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bs(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.om,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dOi(l,o,e),m,m,m,m,m,m,!1,A.a9))}return C.bo(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A2.Az,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:96}
B.dOh.prototype={
$0(){var w=this.a
w.m(new B.dOf(w))
this.b.$1(new B.dOg())
w.Em()},
$S:0}
B.dOf.prototype={
$0(){var w=this.a
$.agu()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dOg.prototype={
$0(){},
$S:0}
B.dOi.prototype={
$0(){var w=this.a
w.m(new B.dOd(w,this.b))
this.c.$1(new B.dOe())
w.Em()},
$S:0}
B.dOd.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dOe.prototype={
$0(){},
$S:0}
B.dOq.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.dOr.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m3("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).ci(C.em(new B.dOp(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dOp.prototype={
$1(d){C.lf("construction")
return Al.htn()},
$S:z+68}
B.dOs.prototype={
$0(){return B.hfA(this.a,"ELECTRONICS LAB",this.b,A.aX)},
$S:0}
B.dOt.prototype={
$0(){var w=this.a
return w.m(w.d.gcPx())},
$S:0}
B.dOu.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gr8(v))
w.Em()},
$S:0}
B.cyz.prototype={
$2(d,e){var w=null,v=this.a.gavb().x
v===$&&C.c()
return C.b3(w,w,w,new B.b73(v,w),A.at)},
$S:67}
B.cyy.prototype={
$3(d,e,f){var w=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cS(v,u,v+e,u))
w.E(new C.cS(v,u,v,u+e))
w.E(new C.cS(v,u,v-e,u))
w.E(new C.cS(v,u,v,t))
w.E(new C.bF())
t=C.L()
t.r=A.c.j(f).gp(0)
this.a.aN(w,t)},
$S:632}
B.fDr.prototype={
$3(d,e,f){return new B.TH(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fDs.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ig(A.A,g,null,new C.bf(C.cI(A.cp,e,null),new C.bm(0.85,1,w),w.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.dK8.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.dK7.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bUq(o):q.bxz(o,p),m=x.p
p=C.a([C.q2(new C.n3(n,new C.cz(p,x.aC)),A.pk,C.ry(),A.bb,A.bb,new B.dK5())],m)
n=t.d
if(n){w=A.k.F(q.gQW(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.aw],m)
if(w)m.push(D.bu8)
else m.push(A.b3)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.bc:A.aA,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.aw)
p.push(C.ao(s,C.av(C.dg(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.mP,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.ua)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.Jx,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vN)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.Jx,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dK6(q),s,s,s,s,s,s,!1,A.a9),s,s,0,0,s,s))
return C.bv(r,new C.an(A.W,s,A.b_,A.q,p,s),A.aq)},
$S:280}
B.dK5.prototype={
$2(d,e){var w=x.Y
return new C.cX(e,!1,C.ig(A.A,d,null,new C.bf(e,new C.bm(0.92,1,w),w.k("bf<bH.T>"))),null)},
$S:452}
B.dK6.prototype={
$0(){var w=this.a
return w.m(new B.dK4(w))},
$S:0}
B.dK4.prototype={
$0(){return this.a.e=null},
$S:0}
B.dK3.prototype={
$0(){var w=this.a
return w.m(new B.dK2(w,this.b))},
$S:0}
B.dK2.prototype={
$0(){return this.a.e=A.d.cJ(F.ld,this.b)},
$S:0}
B.dK1.prototype={
$0(){var w=this.a
return w.m(new B.dK0(w))},
$S:0}
B.dK0.prototype={
$0(){return this.a.e=0},
$S:0}
B.dJX.prototype={
$0(){var w=this.a
return w.m(new B.dJW(w))},
$S:0}
B.dJW.prototype={
$0(){return this.a.e=null},
$S:0}
B.dK_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.foB,A.aw,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eB,p,p,p,D.f1S,p,p,p),1),C.d(A.a.aT(A.o.u(C.dh(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fX(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.q0,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l2,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bsY(w.gQW(),this.c.d,p),A.at)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b5,A.r,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9u,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dJZ(w),p,p,p,p,p,p,!1,A.a9),A.eb,C.p(p,p,A.f,p,p,A.a9A,p,12,p,p,p,p,p,12),A.eb,C.p(p,p,A.f,p,p,D.aYc,p,12,p,p,p,p,p,12),A.aw,C.D(C.d(F.ld[o].a,p,1,A.a2,p,p,p,A.a6s,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.C(D.br1,C.p(p,C.bv(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.adk(r,w.gQW(),p),A.f_),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.d7M,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b5,A.r,1)
s=C.a([],l)
for(q=0;q<9;++q)s.push(new C.C(A.jq,w.atb(F.ld[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.l4,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bv(n,C.p(p,C.v(C.a([m,C.D(new C.an(A.W,p,A.b_,A.q,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KA,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:280}
B.dJZ.prototype={
$0(){var w=this.a
return w.m(new B.dJY(w))},
$S:0}
B.dJY.prototype={
$0(){return this.a.e=null},
$S:0}
B.e3m.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e3l(w,d))},
$S:127}
B.e3l.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"best"))
t=t==null?null:A.k.O(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:A.k.O(v)
if(v==null)v=0
w.d=v
w.f=B.fRC(v)},
$S:0}
B.e3n.prototype={
$0(){},
$S:0}
B.e3c.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fRC(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.e3d.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gv3().r){C.jK()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vF("click",s.c+s.d,60,0.4)
if(B.hfJ(r.gv3(),q).b.a===r.gv3().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vC("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bb("bell",D.an3,700,0.45)
for(q=r.gv3().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.F(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e3g.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c5,C.b3(s,s,s,new B.bf0(r.gv3(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e3e(r),s,s,s,!1,A.a9),C.ao(s,C.e2(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,M.aNG,s,s,s),C.d(""+u.a+"/"+r.gv3().c.a+" \u2605   mirrors "+w.a+"/"+r.gv3().r,s,s,s,s,s,s,S.a69,s,s,s)],t),A.m,s,A.hK,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fd4("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bc,C.a([new B.fg(A.j7,"Next level",new B.e3f(r),A.bc,s)],t)))
return new C.an(A.W,s,A.b_,A.q,w,s)},
$S:62}
B.e3e.prototype={
$1(d){return this.a.c2Z(d.b)},
$S:49}
B.e3f.prototype={
$0(){var w=this.a
return w.acy(w.d+1)},
$S:0}
B.e3h.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.gr8(v))},
$S:0}
B.e3i.prototype={
$0(){var w=this.a
return w.acy(w.d+1)},
$S:0}
B.e3j.prototype={
$0(){var w=this.a
return w.acy(w.d-1)},
$S:0}
B.e3k.prototype={
$0(){return this.a.acy(this.b)},
$S:0}
B.ddN.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:560}
B.ddQ.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ae(0,q)
v=t.ae(0,p)
$.X()
u=C.L()
u.r=(f?A.h1:A.aL).gp(0)
u.c=7
u.d=A.bO
r.bA(w,v,u)
w=t.ae(0,q)
v=t.ae(0,p)
u=C.L()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bA(w,v,u)},
$S:1842}
B.ddO.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:371}
B.ddP.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:371}
B.e3F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e3E(w,d))},
$S:127}
B.e3E.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e3G.prototype={
$0(){},
$S:0}
B.e3q.prototype={
$1(d){return d===0},
$S:136}
B.e3z.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,M.a6m,s,s,s)
w=r.z==="play"?A.k.dJ(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cr:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,S.a69,s,s,s)],v),A.m,s,A.hK,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dq:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b5,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bol,w,s),C.D(C.A(C.a([C.D(new C.C(A.bR,C.v(C.a([t,A.ao,C.d(q?"TARGET":"TARGET: "+r.gctY(),s,s,s,s,s,s,D.aOt,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bR,C.v(C.a([C.D(C.b3(s,s,s,new B.bff(r.f,s),A.f_),1),A.ao,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aOt,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fd4("Light Mixer","Match each colour with red, green and blue light."+q,A.b9,C.a([new B.fg(A.iN,"Start",new B.e3w(r),A.bc,s)],v)))}if(r.z==="result")w.push(B.fd4(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.j7,"Next colour",new B.e3x(r),A.bc,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fd4("Finished! "+q,u,A.bc,C.a([new B.fg(A.mf,"Play again",new B.e3y(r),A.bc,s)],v)))}return new C.an(A.W,s,A.aa,A.q,w,s)},
$S:62}
B.e3w.prototype={
$0(){var w=this.a
return w.m(new B.e3s(w))},
$S:0}
B.e3s.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avg()},
$S:0}
B.e3x.prototype={
$0(){var w=this.a
return w.m(w.gc2X())},
$S:0}
B.e3y.prototype={
$0(){var w=this.a
return w.m(new B.e3r(w))},
$S:0}
B.e3r.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avg()},
$S:0}
B.e3A.prototype={
$1(d){var w=this.a
return w.m(new B.e3v(w,d))},
$S:6}
B.e3v.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e3B.prototype={
$1(d){var w=this.a
return w.m(new B.e3u(w,d))},
$S:6}
B.e3u.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e3C.prototype={
$1(d){var w=this.a
return w.m(new B.e3t(w,d))},
$S:6}
B.e3t.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e3D.prototype={
$0(){var w=this.a
return w.m(w.gc2Y())},
$S:0}
B.f9z.prototype={
$0(){return D.dTP},
$S:z+70}
B.f9A.prototype={
$0(){return D.dr3},
$S:z+71}
B.f9B.prototype={
$0(){return D.dnC},
$S:z+72}
B.f9C.prototype={
$0(){return D.dqu},
$S:z+73}
B.f9D.prototype={
$0(){return D.dvp},
$S:z+74}
B.f9E.prototype={
$0(){return D.dPy},
$S:z+75}
B.f9F.prototype={
$0(){return D.dRK},
$S:z+76}
B.f9G.prototype={
$0(){return D.duJ},
$S:z+77}
B.ccK.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.ccL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hj9(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aV(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ad(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.q,C.a([new C.cK(m,-6,-6,m,m,m,new C.x(r.c,m,L.Sw,m,m,m,m,m,m,m,m,m),m),new C.bI(A.ln,m,m,C.v(C.a([new C.x(r.a,m,D.f0v,m,m,m,m,m,m,m,m,m),A.d0,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bs(q,q,q,q),p,new C.a7(A.ax,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ccJ(d,r),m,m,m,m,m,m,!1,A.a9))}return C.c3(A.bE,j,A.bw,14,14)},
$S:169}
B.ccJ.prototype={
$0(){return C.a5(this.a,!1).ci(C.em(new B.ccI(this.b),!1,null,x.H))},
$S:0}
B.ccI.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eCy.prototype={
$0(){var w=this.a
return w.w=w.d[w.b1I(w.f)]},
$S:0}
B.eCu.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eCt.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.c3)
w.w=""},
$S:0}
B.eCw.prototype={
$0(){var w=this.a
return w.m(new B.eCv(w,this.b))},
$S:0}
B.eCv.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
B.eCx.prototype={
$1(d){return this.a.aX6(0)},
$S:2}
B.dQq.prototype={
$0(){return B.Bb("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dQr.prototype={
$0(){},
$S:0}
B.dQl.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dQn.prototype={
$0(){return this.a.aX8(this.b)},
$S:0}
B.dQo.prototype={
$0(){var w=this.a
return w.m(new B.dQm(w))},
$S:0}
B.dQm.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dQp.prototype={
$0(){var w=this.a
return w.aX8(w.d)},
$S:0}
B.dBG.prototype={
$2(d,e){return d+e},
$S:86}
B.dBH.prototype={
$0(){},
$S:0}
B.dBB.prototype={
$2(d,e){return d+e},
$S:86}
B.dBE.prototype={
$0(){var w=this.a
return w.m(new B.dBD(w,this.b))},
$S:0}
B.dBD.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dBF.prototype={
$0(){var w=this.a
return w.m(new B.dBC(w))},
$S:0}
B.dBC.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dNH.prototype={
$0(){return B.qE(this.b,this.a.d,"drawing")},
$S:0}
B.dNI.prototype={
$1(d){var w=this.a
return w.m(new B.dNG(w,d))},
$S:42}
B.dNG.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGx(u,v,t))},
$S:0}
B.dNJ.prototype={
$1(d){var w=this.a
return w.m(new B.dNF(w,d))},
$S:18}
B.dNF.prototype={
$0(){return A.d.gam(this.a.e).c.push(this.b.b)},
$S:0}
B.dNK.prototype={
$1(d){var w=this.a
return w.m(new B.dNE(w,d))},
$S:23}
B.dNE.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGx(u,v,t))},
$S:0}
B.dNL.prototype={
$0(){var w=this.a
return w.m(new B.dND(w,this.b))},
$S:0}
B.dND.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dNM.prototype={
$1(d){var w=this.a
return w.m(new B.dNC(w,d))},
$S:6}
B.dNC.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNN.prototype={
$0(){var w=this.a
return w.m(new B.dNB(w))},
$S:0}
B.dNB.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dNO.prototype={
$0(){var w=this.a
return w.m(new B.dNA(w))},
$S:0}
B.dNA.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dNP.prototype={
$0(){var w=this.a
return w.m(A.d.gr8(w.e))},
$S:0}
B.dNQ.prototype={
$0(){var w=this.a
return w.m(new B.dNz(w))},
$S:0}
B.dNz.prototype={
$0(){var w=this.a
w.x=D.atU[A.o.F(A.d.cJ(D.atU,w.x)+1,4)]},
$S:0}
B.e91.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
B.e92.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bb("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.e90(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bb("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.e90.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.e93.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.e9_(w))},
$S:11}
B.e9_.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.e97.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mO(new B.e95(v,e),w,A.bb,A.pk,w,new C.bm(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e96(v,e),w,w,w,w,w,w,!1,A.a9)},
$S:75}
B.e96.prototype={
$0(){return this.a.c3T(this.b)},
$S:0}
B.e95.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dl(),m=n.a
m.$flags&2&&C.ai(m)
m[11]=0.001
n.ft(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bS0
if(o)v=q.a.r.t(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.bc:A.b5,A.r,1)
if(o){r=C.dl()
r.ft(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fr(A.A,C.d(u[t],p,p,p,p,p,p,D.eYT,p,p,p),p,r,!0)
u=r}else u=D.fhZ
return C.fr(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:135}
B.e98.prototype={
$0(){var w=this.a
return w.m(new B.e94(w,this.b))},
$S:0}
B.e94.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aqx()},
$S:0}
B.e99.prototype={
$0(){var w=this.a
return w.m(w.gbG6())},
$S:0}
B.ejy.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.ejz.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ejw.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ejx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.ejv(w))},
$S:11}
B.ejv.prototype={
$0(){return this.a.f=-1},
$S:0}
B.ejA.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.ejB.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.ejC.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aX7()},
$S:11}
B.ejD.prototype={
$0(){return this.a.c3Z(this.b)},
$S:0}
B.exQ.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:68}
B.exZ.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kD,C.A(C.a([v,A.ab,new C.dm(1,A.ci,C.f4(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1844}
B.exV.prototype={
$1(d){return this.a.m(new B.exU())},
$S:2}
B.exU.prototype={
$0(){},
$S:0}
B.exW.prototype={
$0(){var w=this.a
return w.m(new B.exT(w,this.b))},
$S:0}
B.exT.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.exX.prototype={
$1(d){var w=this.a
return w.m(new B.exS(w,d))},
$S:6}
B.exS.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.exY.prototype={
$0(){var w=this.a
return w.m(new B.exR(w))},
$S:0}
B.exR.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e7H.prototype={
$0(){},
$S:0}
B.e7I.prototype={
$0(){},
$S:0}
B.e7A.prototype={
$0(){var w=this.a
return w.m(new B.e7z(w))},
$S:0}
B.e7z.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c1(u,1,!1,x.S)
w.r=0.9
B.a79("hat",0.6)},
$S:0}
B.e7B.prototype={
$0(){var w=this.a
return w.m(new B.e7y(w))},
$S:0}
B.e7y.prototype={
$0(){this.a.y=1.1
B.l9("bell",36,200,0.4)},
$S:0}
B.e7C.prototype={
$0(){var w=this.a
return w.m(new B.e7x(w))},
$S:0}
B.e7x.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.l9("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
B.e7D.prototype={
$0(){var w=this.a
return w.m(new B.e7w(w,this.b))},
$S:0}
B.e7w.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e7E.prototype={
$1(d){var w=this.a
return w.m(new B.e7v(w,d))},
$S:6}
B.e7v.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e0(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e7F.prototype={
$1(d){var w=this.a
return w.m(new B.e7u(w,d))},
$S:6}
B.e7u.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.e7G.prototype={
$1(d){var w=this.a
return w.m(new B.e7t(w,d))},
$S:6}
B.e7t.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cps.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.cpt.prototype={
$0(){var w=this.a
return B.hfA(this.b,w.c,w.e,w.d)},
$S:0}
B.fHg.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eRt,v,v,v)
return C.eh(C.a([C.bK(!1,D.f7F,v,v,!0,v,v,new B.fHf(d),v,v)],x.p),v,v,F.mL,w,v,v,v,new C.b7(u,new C.aA(s,1,A.r,-1)),t,v)},
$S:19}
B.fHf.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.cpo.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
B.cpn.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
B.cpu.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
B.cpp.prototype={
$0(){var w=this.a
A.d.W(w.fi$,this.b.bc())
if(w.c!=null)this.c.$0()},
$S:0}
B.cpr.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kN$.a)/1e6,0,0.04)
w.kN$=d
w.fM$=A.o.an(v,1000)
w.lh(u)
if(w.c!=null)w.m(new B.cpq())},
$S:8}
B.cpq.prototype={
$0(){},
$S:0}
B.ccG.prototype={
$0(){var w=this
return B.l9(w.a,w.b,w.c,w.d)},
$S:1}
B.dT8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dT7(w,d))},
$S:z+79}
B.dT7.prototype={
$0(){return this.a.coh(this.b)},
$S:0}
B.dSB.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1845}
B.dSz.prototype={
$0(){return this.a.id=D.a1D},
$S:0}
B.dSA.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a2<1>")
v=C.p1(new C.a2(w,new B.dSy(this.c),v),6,v.k("H.E"))
w=C.B(v,C.a3(v).k("H.E"))
return this.a.id=w},
$S:0}
B.dSy.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dSx.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.y,w,w,w,w,A.ah)
return C.eh(C.a([C.bK(!1,A.q1,w,w,!0,w,w,new B.dSw(d),w,w)],x.p),w,w,F.mL,v,w,w,w,w,D.fi2,w)},
$S:19}
B.dSw.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.dSU.prototype={
$0(){return B.qE(this.b,this.a.d,"earth")},
$S:0}
B.dSV.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gV6()
r=p.z
o=C.a([C.aE(A.c5,C.b3(q,q,q,new B.bds(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dSI(p),new B.dSJ(p),new B.dSK(p),q,q,q,q,q,q,q,new B.dSL(p),q,q,q,!1,A.a9)],x.p)
if(p.r==null)o.push(A7.aac)
w=this.b
if(w!=null)o.push(C.ao(8,p.c4A(w),q,q,10,10,q,q))
return new C.et(new C.an(A.W,q,A.b_,A.q,o,q),p.d)},
$S:176}
B.dSJ.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:241}
B.dSK.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gV6()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:217}
B.dSI.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gV6()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:616}
B.dSL.prototype={
$1(d){var w=this.a,v=w.c4D(d.b)
if(v!=null)w.m(new B.dSC(w,v))
else w.m(new B.dSD(w))},
$S:49}
B.dSC.prototype={
$0(){return this.a.avK(this.b)},
$S:0}
B.dSD.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dSW.prototype={
$0(){var w=this.a
w.e.bM(0,A.c3)
w.m(new B.dSH(w,this.b))},
$S:0}
B.dSH.prototype={
$0(){var w=this.a
w.id=D.a1D
w.avK(this.b)},
$S:0}
B.dT_.prototype={
$0(){var w=this.a
return w.m(new B.dST(w))},
$S:0}
B.dST.prototype={
$0(){var w=this.a
w.fx=null
w.arI(15,w.y,1)},
$S:0}
B.dT0.prototype={
$0(){var w=this.a
return w.m(new B.dSS(w,this.b))},
$S:0}
B.dSS.prototype={
$0(){var w=this.b.b
return this.a.arI(w.a,w.b,w.c)},
$S:0}
B.dT1.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dSR(w,v))},
$S:0}
B.dSR.prototype={
$0(){var w=this.b.a
return this.a.avK(w[A.cI.aB(w.length)])},
$S:0}
B.dT2.prototype={
$1(d){var w=this.a
return w.m(new B.dSQ(w,d))},
$S:6}
B.dSQ.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dT3.prototype={
$1(d){var w=this.a
return w.m(new B.dSP(w,d))},
$S:6}
B.dSP.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dT4.prototype={
$1(d){var w=this.a
return w.m(new B.dSO(w,d))},
$S:6}
B.dSO.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dT5.prototype={
$0(){var w=this.a
return w.m(new B.dSN(w))},
$S:0}
B.dSN.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dT6.prototype={
$0(){var w=this.a
return w.m(new B.dSM(w))},
$S:0}
B.dSM.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
return w.m(new B.dSG(w))},
$S:0}
B.dSG.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dSY.prototype={
$0(){var w=this.a
return w.m(new B.dSF(w))},
$S:0}
B.dSF.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dSZ.prototype={
$0(){var w=this.a
return w.m(new B.dSE(w))},
$S:0}
B.dSE.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dSv.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aN6,w,w,w),A.ud,C.d(e,w,2,A.a2,w,w,w,A.SP,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:139}
B.dSu.prototype={
$0(){var w=this.a
return w.m(new B.dSt(w))},
$S:0}
B.dSt.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d9x.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dp(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cST,w,w),this.a),A.a5,A.ch,w,A.er,A.cd)
v.eO()
return v},
$S:328}
B.d9y.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1846}
B.f9s.prototype={
$0(){return D.dt0},
$S:z+81}
B.f9t.prototype={
$0(){return D.dRs},
$S:z+82}
B.f9u.prototype={
$0(){return D.dt2},
$S:z+83}
B.f9v.prototype={
$0(){return D.dno},
$S:z+84}
B.f9w.prototype={
$0(){return D.dsZ},
$S:z+85}
B.f9x.prototype={
$0(){return D.dPz},
$S:z+86}
B.f9y.prototype={
$0(){return D.dPx},
$S:z+87}
B.eyJ.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
B.eyK.prototype={
$0(){var w=this.a
return w.m(new B.eyI(w))},
$S:0}
B.eyI.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaQa()+1,16)},
$S:0}
B.eyL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hj8(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aV(18,18)
q=s.d
p=new C.aA(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.beo],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eVS,n,A.L,n,n,n,n,2,n,n),A.d0,new C.x(s.b,n,D.f_T,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.ba,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bs(r,r,r,r),n,new C.a7(A.ax,A.aD,A.x,o,n,n),A.n),n,v,n,n,A.cj,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eyH(d,s),n,n,n,n,n,n,!1,A.a9))}return C.c3(A.fM,k,A.bw,10,10)},
$S:169}
B.eyH.prototype={
$0(){return C.a5(this.a,!1).ci(C.em(new B.eyG(this.b),!1,null,x.H))},
$S:0}
B.eyG.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.eqM.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eqX.prototype={
$0(){return B.qE(this.b,this.a.d,"solar-system")},
$S:0}
B.eqY.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c5,C.b3(v,v,v,new B.bpN(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eqU(u),new B.eqV(u),v,v,v,v,v,v,v,new B.eqW(u),v,v,v,!1,A.a9)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c4F(w),v,v,10,10,v,v))
return new C.et(new C.an(A.W,v,A.b_,A.q,t,v),u.d)},
$S:176}
B.eqU.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:241}
B.eqV.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ae(0,d.a)},
$S:217}
B.eqW.prototype={
$1(d){var w=this.a,v=w.c4I(d.b)
if(v!=null)w.aXt(v)},
$S:49}
B.eqZ.prototype={
$0(){var w=this.a
return w.m(new B.eqT(w))},
$S:0}
B.eqT.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.er_.prototype={
$0(){return this.a.aXt(this.b)},
$S:0}
B.er0.prototype={
$1(d){var w=this.a
return w.m(new B.eqS(w,d))},
$S:6}
B.eqS.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.er1.prototype={
$1(d){var w=this.a
return w.m(new B.eqR(w,d))},
$S:6}
B.eqR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.er2.prototype={
$0(){var w=this.a
return w.m(new B.eqQ(w))},
$S:0}
B.eqQ.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.er3.prototype={
$0(){var w=this.a
return w.m(new B.eqP(w))},
$S:0}
B.eqP.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.er4.prototype={
$0(){var w=this.a
return w.m(new B.eqO(w))},
$S:0}
B.eqO.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.er5.prototype={
$0(){var w=this.a
return w.m(new B.eqN(w))},
$S:0}
B.eqN.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eqL.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:291}
B.eqK.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aN6,w,w,w),A.ud,C.d(e,w,2,A.a2,w,w,w,A.SP,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:139}
B.eqJ.prototype={
$0(){var w=this.a
return w.m(new B.eqI(w))},
$S:0}
B.eqI.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eST.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dp(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,M.Pe,w,w),this.a),A.a5,A.ch,w,A.er,A.cd)
v.eO()
return v},
$S:328}
B.eSU.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eSV.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dTc.prototype={
$0(){},
$S:0}
B.dTF.prototype={
$1(d){return d!=null},
$S:388}
B.dTr.prototype={
$0(){var w=this.a
return w.m(new B.dTi(w,this.b))},
$S:0}
B.dTi.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dTs.prototype={
$0(){var w=this.a
return w.m(new B.dTh(w))},
$S:0}
B.dTh.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTt.prototype={
$0(){var w=this.a
return w.m(new B.dTq(w))},
$S:0}
B.dTq.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dTx.prototype={
$0(){var w=this.a
return w.m(new B.dTp(w))},
$S:0}
B.dTp.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dTy.prototype={
$1(d){var w=this.a
return w.m(new B.dTo(w,d))},
$S:6}
B.dTo.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dTz.prototype={
$0(){var w=this.a
return w.m(w.gcrs())},
$S:0}
B.dTA.prototype={
$1(d){var w=this.a
return w.m(new B.dTn(w,d))},
$S:6}
B.dTn.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dTB.prototype={
$1(d){var w=this.a
return w.m(new B.dTm(w,d))},
$S:6}
B.dTm.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dTC.prototype={
$1(d){var w=this.a
return w.m(new B.dTl(w,d))},
$S:6}
B.dTl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dTD.prototype={
$1(d){var w=this.a
return w.m(new B.dTk(w,d))},
$S:6}
B.dTk.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dTE.prototype={
$0(){var w=this.a
return w.m(new B.dTj(w))},
$S:0}
B.dTj.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dTu.prototype={
$0(){var w=this.a
return w.m(new B.dTg(w))},
$S:0}
B.dTg.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dTv.prototype={
$0(){var w=this.a
return w.m(new B.dTf(w))},
$S:0}
B.dTf.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dTw.prototype={
$0(){var w=this.a
return w.m(new B.dTe(w))},
$S:0}
B.dTe.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dTb.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.bX(g,new C.o(D.bd1,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yj[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yj[q].b)+" m/s\xb2",g,D.f_f,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dq,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(Y.Mp,C.b0(D.yj[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yj[q].d),g,g,g,C.a([new C.ad(0,A.G,C.b0(D.yj[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yj[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cK(p,8,g,g,f,g,o,g),new C.cK(n-0.5,54,g,e,g,g,m,g),new C.cK(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cK(p,g,g,8,f,g,C.v(C.a([j,A.au,new C.x(i,g,A.uj,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eSD,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.de(v,new B.dTa()))a1.push(D.b24)
return new C.an(A.W,g,A.aa,A.q,a1,g)},
$S:62}
B.dTa.prototype={
$1(d){return d==null},
$S:388}
B.dTd.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,A.bb,new C.o(v,v,v,C.m(8),v,new C.a7(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i6,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.G7(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.q,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eYE,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:62}
B.dT9.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b8I(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bc
else u=A.a.t(u,"escapes")?A.aX:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.G7(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.q,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bz,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aOJ,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:62}
B.ejG.prototype={
$0(){return B.qE(this.b,this.a.d,"size-compare")},
$S:0}
B.ejH.prototype={
$0(){var w=this.a
return w.m(new B.ejF(w,this.b))},
$S:0}
B.ejF.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ejI.prototype={
$0(){var w=this.a
return w.m(new B.ejE(w,this.b))},
$S:0}
B.ejE.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eR2.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=C.L()
w.r=f.j(0.2).gp(0)
w.z=new C.hs(A.G,Math.max(2,e*0.18))
u.ah(d,e*1.12,w)
w=C.L()
v=C.aq(f,A.w,0.6)
v.toString
w.sau(new C.bR(P.q9,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a0S,null).aw(0,C.bU(d,e)))
u.ah(d,e,w)},
$S:554}
B.dB7.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dAW.prototype={
$1(d){return d.b},
$S:z+60}
B.dAX.prototype={
$0(){return B.qE(this.b,this.a.d,"black-hole")},
$S:0}
B.dAY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c5,C.b3(q,q,q,new B.b86(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dAU(p),q,q,q,q,q,q,q,q,q,new B.dAV(p),q,q,q,q,!1,A.a9)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fl4(t)+" Suns"
t=p.adf("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adf("EDGE WIDTH",(s<100?A.k.aa(s,1):B.G7(s))+" km"),p.adf("TIME",A.k.aa(this.b*100,0)+"%"),p.adf("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e6n)
return new C.et(new C.an(A.W,q,A.b_,A.q,r,q),p.d)},
$S:176}
B.dAV.prototype={
$1(d){return this.a.aXu(d.b)},
$S:23}
B.dAU.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aXu(d.b)},
$S:18}
B.dB_.prototype={
$1(d){var w=this.a
return w.m(new B.dAT(w,d))},
$S:6}
B.dAT.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dB0.prototype={
$0(){var w=this.a
return w.m(new B.dAS(w))},
$S:0}
B.dAS.prototype={
$0(){return this.a.r=10},
$S:0}
B.dB1.prototype={
$0(){var w=this.a
return w.m(new B.dAR(w))},
$S:0}
B.dAR.prototype={
$0(){return this.a.r=21},
$S:0}
B.dB2.prototype={
$0(){var w=this.a
return w.m(new B.dAQ(w))},
$S:0}
B.dAQ.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dB3.prototype={
$0(){var w=this.a
return w.m(new B.dAP(w))},
$S:0}
B.dAP.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dB4.prototype={
$0(){var w=this.a
return w.m(new B.dAO(w))},
$S:0}
B.dAO.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dB5.prototype={
$0(){var w=this.a
return w.m(new B.dAN(w))},
$S:0}
B.dAN.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dB6.prototype={
$0(){var w=this.a
return w.m(new B.dAM(w))},
$S:0}
B.dAM.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dAZ.prototype={
$0(){var w=this.a
return w.m(new B.dAL(w))},
$S:0}
B.dAL.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dRK.prototype={
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
$S:1847}
B.dRA.prototype={
$0(){return B.qE(this.b,this.a.d,"galaxy")},
$S:0}
B.dRB.prototype={
$0(){var w=this.a
return w.m(new B.dRz(w,this.b))},
$S:0}
B.dRz.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Z0()},
$S:0}
B.dRC.prototype={
$0(){var w=this.a
return w.m(new B.dRy(w))},
$S:0}
B.dRy.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Z0()}w.crk()},
$S:0}
B.dRD.prototype={
$1(d){var w=this.a
return w.m(new B.dRx(w,d))},
$S:6}
B.dRx.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Z0()},
$S:0}
B.dRE.prototype={
$1(d){var w=this.a
return w.m(new B.dRw(w,d))},
$S:6}
B.dRw.prototype={
$0(){var w=this.a
w.r=this.b
w.Z0()},
$S:0}
B.dRF.prototype={
$1(d){var w=this.a
return w.m(new B.dRv(w,d))},
$S:6}
B.dRv.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dRG.prototype={
$1(d){var w=this.a
return w.m(new B.dRu(w,d))},
$S:6}
B.dRu.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dRH.prototype={
$0(){var w=this.a
return w.m(new B.dRt(w))},
$S:0}
B.dRt.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dRI.prototype={
$0(){var w=this.a
return w.m(new B.dRs(w))},
$S:0}
B.dRs.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dRJ.prototype={
$0(){var w=this.a
return w.m(new B.dRr(w))},
$S:0}
B.dRr.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d6G.prototype={
$6(d,e,f,g,h,i){return g.ae(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1848}
B.eiV.prototype={
$0(){return B.qE(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eiW.prototype={
$0(){var w=this.a
return w.m(new B.eiU(w))},
$S:0}
B.eiU.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eiX.prototype={
$0(){var w=this.a
return w.m(new B.eiT(w))},
$S:0}
B.eiT.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eiY.prototype={
$0(){var w=this.a
return w.m(new B.eiS(w))},
$S:0}
B.eiS.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eiZ.prototype={
$0(){var w=this.a
return w.m(new B.eiR(w))},
$S:0}
B.eiR.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ej_.prototype={
$1(d){var w=this.a
return w.m(new B.eiQ(w,d))},
$S:6}
B.eiQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ej0.prototype={
$1(d){var w=this.a
return w.m(new B.eiP(w,d))},
$S:6}
B.eiP.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ej1.prototype={
$1(d){var w=this.a
return w.m(new B.eiO(w,d))},
$S:6}
B.eiO.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ej2.prototype={
$1(d){var w=this.a
return w.m(new B.eiN(w,d))},
$S:6}
B.eiN.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKy.prototype
w.bsN=w.q
w=B.aJA.prototype
w.brN=w.q
w=B.aJB.prototype
w.brO=w.q
w=B.aJG.prototype
w.brT=w.q
w=B.aLn.prototype
w.btI=w.q
w=B.aKw.prototype
w.bsL=w.q
w=B.aKF.prototype
w.bsU=w.q
w=B.aKL.prototype
w.bt_=w.q
w=B.aJE.prototype
w.brR=w.q
w=B.aKt.prototype
w.bsI=w.q
w=B.aKI.prototype
w.bsX=w.q
w=B.aKr.prototype
w.bsG=w.q
w=B.aKs.prototype
w.bsH=w.q
w=B.aJS.prototype
w.bs5=w.q
w=B.aJw.prototype
w.brJ=w.q
w=B.aK_.prototype
w.bsd=w.q
w=B.aw2.prototype
w.boV=w.q
w=B.aw3.prototype
w.boW=w.q
w=B.aI2.prototype
w.bqb=w.q
w=B.aJP.prototype
w.bs1=w.q
w=B.aKg.prototype
w.bsv=w.q
w=B.aKh.prototype
w.bsw=w.q
w=B.aJC.prototype
w.brP=w.q
w=B.aJV.prototype
w.bs8=w.q
w=B.aKp.prototype
w.bsE=w.q
w=B.aKT.prototype
w.bt7=w.q
w=B.aK0.prototype
w.bsf=w.q
w=B.aK1.prototype
w.bsg=w.q
w=B.aK2.prototype
w.bsh=w.q
w=B.aKB.prototype
w.bsQ=w.q
w=B.aKE.prototype
w.bsT=w.q
w=B.aJz.prototype
w.brM=w.q
w=B.aJY.prototype
w.bsb=w.q
w=B.aKA.prototype
w.bsP=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aCI.prototype,"gauD","c04",0)
var r
v(r=B.aB7.prototype,"gc84","c85",35)
w(r,"gc0A","aVW",0)
w(B.aBa.prototype,"gc1Z","c2_",0)
u(B.aBr.prototype,"gc24","c25",52)
w(r=B.aFI.prototype,"gcr_","cr0",0)
w(r,"gceK","aeF",0)
w(r,"gccr","ccs",0)
w(r,"gc23","acf",3)
w(r=B.aCH.prototype,"gbDe","a7U",3)
w(r,"gcbJ","aZ8",0)
w(r,"gcfr","aeN",3)
t(r,"gc27","acg",3)
w(B.aCX.prototype,"gbU7","bU8",0)
w(r=B.aCz.prototype,"gcqU","cqV",0)
w(r,"gbDz","bDA",0)
w(r=B.aB9.prototype,"gb2h","ay9",0)
v(r,"gc2d","Yp",54)
w(r,"gc2c","aci",3)
v(r=B.aCy.prototype,"gchm","awU",58)
v(r,"gcny","ay5",15)
w(r,"gbHx","aON",0)
v(r=B.aCw.prototype,"gcxV","ahN",15)
t(r,"gc2x","ava",0)
w(r,"gcjD","cjE",0)
v(r=B.aBD.prototype,"gc2y","c2z",90)
w(r,"gc2A","c2B",0)
t(r=B.a3i.prototype,"gr8","a8",0)
v(r,"gcNo","alB",1)
v(r,"gcJU","L_",1)
w(r,"gcPx","bf1",0)
s(B.ahi.prototype,"gc2F",0,5,null,["$5"],["pT"],64,0,0)
w(r=B.aBE.prototype,"gc2G","c2H",0)
w(r,"gci7","af8",3)
w(r,"gc8k","ads",3)
w(r,"gcp6","age",3)
w(r=B.aCi.prototype,"gc2X","avg",0)
w(r,"gc2Y","aWL",0)
w(r=B.aD9.prototype,"gc3U","c3V",0)
t(r,"gc3S","aX6",0)
w(B.aCs.prototype,"gbG6","aqx",0)
t(B.aCO.prototype,"gc3W","c3X",0)
v(r=B.aBP.prototype,"gc4B","c4C",78)
w(r,"gbKR","bKS",0)
w(r=B.aBQ.prototype,"gcrs","crt",0)
w(r,"gc4G","c4H",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiv,B.Fp,B.uz,B.aQp,B.a20,B.b89,B.bYO,B.xG,B.BO,B.n9,B.b8S,B.A0,B.bqt,B.pO,B.qw,B.BS,B.Yd,B.adr,B.a_q,B.C1,B.aan,B.aaE,B.acz,B.Fc,B.bju,B.P0,B.ZK,B.aau,B.aaX,B.F8,B.abM,B.acg,B.rX,B.b7K,B.aQf,B.e7,B.t9,B.a95,B.aa9,B.a3i,B.mp,B.b8T,B.fI,B.lX,B.aUK,B.brN,B.aGx,B.ms,B.a9Q,B.a9R,B.uM,B.Oh,B.xE,B.Og,B.brI,B.OJ,B.adw])
u(C.hS,[B.fnb,B.fe8,B.fkk,B.fkl,B.fn8,B.fn9,B.e0o,B.e0H,B.egF,B.egc,B.egd,B.ege,B.egf,B.egg,B.egh,B.egi,B.egj,B.ega,B.egb,B.eg9,B.egA,B.egB,B.egC,B.dBc,B.dBe,B.dBh,B.dBs,B.bYP,B.bYQ,B.f8G,B.f8H,B.f8I,B.f8P,B.f8Q,B.f8R,B.dDK,B.dDr,B.dDL,B.dDm,B.dDh,B.dDj,B.dDp,B.dDC,B.dDA,B.dDB,B.dDz,B.dDw,B.dDy,B.eQx,B.eQe,B.eQl,B.eQu,B.eQ8,B.ddu,B.ddv,B.ddr,B.dds,B.ddt,B.ddw,B.ddx,B.ddy,B.ddz,B.ddA,B.ddB,B.ddC,B.ddD,B.ddE,B.efB,B.efC,B.efD,B.efE,B.efz,B.efA,B.eg5,B.efI,B.efK,B.efu,B.eg1,B.eg_,B.eg0,B.efZ,B.efY,B.efw,B.erw,B.eru,B.eri,B.erm,B.erh,B.ern,B.ero,B.ers,B.ey7,B.eyd,B.ecj,B.eck,B.ec5,B.ec6,B.ec4,B.ec9,B.ecb,B.ecc,B.exx,B.exy,B.exw,B.exk,B.exl,B.exj,B.exc,B.exd,B.exr,B.exs,B.ext,B.exu,B.exv,B.dCT,B.dCU,B.dCV,B.dCM,B.dCP,B.cIu,B.e7N,B.e8b,B.e7R,B.e7Z,B.e8_,B.e7Y,B.e86,B.ebN,B.ebS,B.ebb,B.eaU,B.eb5,B.eb3,B.eb1,B.eb2,B.eb0,B.dLf,B.dL3,B.dL5,B.dLd,B.dL8,B.dO4,B.dNX,B.dNY,B.dNZ,B.d0Z,B.d10,B.d1_,B.dzg,B.dzh,B.dz9,B.dz7,B.cB1,B.dS7,B.dS8,B.dS3,B.dS4,B.d8J,B.d8K,B.dDf,B.dCY,B.dD6,B.dD7,B.dDc,B.dDd,B.bJM,B.bJX,B.bJS,B.bJY,B.bK_,B.bJN,B.bJL,B.bK4,B.bJT,B.bJW,B.bJV,B.bJU,B.bFd,B.fyS,B.fyV,B.fyT,B.bEV,B.bEQ,B.bEP,B.bFc,B.bF4,B.bF5,B.bF3,B.bF6,B.bEF,B.bEH,B.bED,B.bEE,B.bEv,B.bEw,B.f8S,B.f8T,B.f8U,B.f8F,B.f8V,B.f8E,B.f8W,B.f8J,B.f8D,B.f8K,B.f8C,B.f8L,B.f8B,B.f8M,B.f8z,B.f8A,B.f8N,B.f8x,B.f8y,B.f8O,B.f8w,B.dOl,B.dOm,B.dOb,B.dO7,B.dOk,B.dOp,B.cyy,B.fDr,B.fDs,B.e3m,B.e3e,B.ddN,B.ddQ,B.e3F,B.e3q,B.e3A,B.e3B,B.e3C,B.ccI,B.eCx,B.dNI,B.dNJ,B.dNK,B.dNM,B.e95,B.exQ,B.exZ,B.exV,B.exX,B.e7E,B.e7F,B.e7G,B.fHg,B.cpr,B.dT8,B.dSy,B.dSx,B.dSJ,B.dSK,B.dSI,B.dSL,B.dT2,B.dT3,B.dT4,B.eyG,B.eqU,B.eqV,B.eqW,B.er0,B.er1,B.eqL,B.eSU,B.eSV,B.dTF,B.dTy,B.dTA,B.dTB,B.dTC,B.dTD,B.dTa,B.eR2,B.dB7,B.dAW,B.dAV,B.dAU,B.dB_,B.dRK,B.dRD,B.dRE,B.dRF,B.dRG,B.d6G,B.ej_,B.ej0,B.ej1,B.ej2])
u(C.kc,[B.fna,B.e0t,B.e0r,B.egl,B.egy,B.dDi,B.dDF,B.dJd,B.eQA,B.eQB,B.eQd,B.eQq,B.eQr,B.eQm,B.eQs,B.eQ7,B.efx,B.efy,B.eg4,B.efX,B.efM,B.ey6,B.ec8,B.exn,B.dCL,B.dCQ,B.e82,B.ebR,B.fns,B.eaY,B.eaV,B.eb7,B.dly,B.bE1,B.fiw,B.dz3,B.dzb,B.bJZ,B.bK0,B.bK2,B.bJO,B.bJQ,B.bFe,B.ci5,B.fyU,B.bEO,B.bFa,B.bF9,B.dOj,B.cyz,B.dK7,B.dK5,B.dK_,B.e3g,B.ddO,B.ddP,B.e3z,B.ccL,B.dBG,B.dBB,B.e97,B.dSV,B.dSv,B.d9y,B.eyL,B.eqY,B.eqK,B.dTb,B.dTd,B.dT9,B.dAY])
u(C.ag,[B.Uq,B.US,B.Ti,B.Tn,B.Mv,B.aFH,B.UR,B.V6,B.Vi,B.UO,B.Vd,B.Tl,B.UI,B.UN,B.UL,B.TJ,B.TZ,B.Td,B.Uc,B.Tm,B.ahg,B.U_,B.avK,B.TH,B.Uv,B.Ux,B.Vo,B.U6,B.Tj,B.TY,B.UJ,B.UX,B.Vh,B.UH,B.Ud,B.Vk,B.V5,B.Ue,B.UY,B.Th,B.Ua,B.UU])
u(C.ah,[B.bhY,B.aKy,B.aJA,B.aJG,B.aBr,B.aLn,B.aKw,B.aKF,B.aKL,B.aKt,B.aKI,B.aJE,B.aKr,B.aKs,B.aCw,B.bhs,B.aJS,B.aJw,B.aK_,B.bhk,B.aw2,B.buT,B.aI2,B.aJP,B.aKg,B.aKh,B.aKT,B.aJV,B.aJC,B.bht,B.aCs,B.aCO,B.biH,B.aKp,B.aK0,B.biL,B.aKE,B.aK2,B.aKB,B.aJz,B.aJY,B.aKA])
u(C.j2,[B.e0m,B.e0n,B.e0z,B.e0A,B.e0v,B.e0u,B.e0w,B.e0s,B.e0x,B.e0q,B.e0y,B.e0p,B.e0D,B.e0C,B.e0E,B.e0B,B.e0F,B.e0G,B.e0I,B.egE,B.egG,B.egH,B.egn,B.egm,B.egk,B.egt,B.egu,B.egq,B.egv,B.egp,B.egw,B.egx,B.ego,B.egz,B.egs,B.egD,B.egr,B.dBz,B.dBy,B.dBb,B.dBA,B.dBd,B.dBf,B.dBg,B.dBi,B.dB8,B.dB9,B.dBa,B.dBp,B.dBq,B.dBr,B.dBo,B.dBt,B.dBn,B.dBu,B.dBm,B.dBv,B.dBl,B.dBw,B.dBk,B.dBx,B.dBj,B.dDo,B.dDn,B.dDs,B.dDk,B.dDl,B.dDt,B.dDu,B.dDv,B.dDq,B.dDg,B.dDE,B.dDD,B.dDG,B.dDH,B.dDI,B.dDx,B.dDJ,B.cIX,B.dJb,B.dJa,B.dJc,B.f96,B.f97,B.f98,B.f9j,B.f9l,B.f9m,B.f9n,B.f9o,B.f9p,B.f9q,B.f9r,B.f99,B.f9a,B.f9b,B.f9c,B.f9d,B.f9e,B.f9f,B.f9g,B.f9h,B.f9i,B.f9k,B.eQz,B.eQy,B.eQg,B.eQf,B.eQb,B.eQa,B.eQc,B.eQ9,B.eQo,B.eQn,B.eQp,B.eQh,B.eQt,B.eQk,B.eQv,B.eQj,B.eQw,B.eQi,B.efG,B.efv,B.efF,B.efr,B.efH,B.efJ,B.efs,B.eft,B.eg3,B.eg2,B.efU,B.efV,B.efW,B.efQ,B.efR,B.efP,B.efS,B.efO,B.efT,B.efN,B.efL,B.ddq,B.erv,B.er7,B.er6,B.erg,B.erp,B.erf,B.erq,B.ere,B.err,B.erd,B.erc,B.ert,B.erb,B.erj,B.era,B.erk,B.er9,B.erl,B.er8,B.ey5,B.ey4,B.ey8,B.ey3,B.ey9,B.ey2,B.eya,B.ey1,B.eyb,B.ey0,B.eyc,B.ey_,B.ec7,B.ec3,B.ec2,B.ec1,B.ecd,B.ec0,B.ece,B.ec_,B.ecf,B.ebZ,B.ecg,B.ech,B.eci,B.ebY,B.eca,B.exm,B.exb,B.exo,B.exi,B.exp,B.exh,B.exq,B.exg,B.exf,B.exe,B.exa,B.ex9,B.ex8,B.dCS,B.dCJ,B.dCK,B.dCN,B.dCO,B.dCR,B.e80,B.e7S,B.e81,B.e83,B.e7X,B.e84,B.e7W,B.e85,B.e7V,B.e7U,B.e87,B.e7T,B.e88,B.e7Q,B.e89,B.e7P,B.e8a,B.e7O,B.ebH,B.ebI,B.ebP,B.ebO,B.ebQ,B.ebM,B.ebT,B.ebL,B.ebU,B.ebK,B.ebV,B.ebW,B.ebJ,B.ebX,B.eba,B.eaS,B.eaT,B.eaX,B.eaW,B.eb6,B.eb4,B.eaZ,B.eb8,B.eb_,B.eb9,B.dLe,B.dL4,B.dL2,B.dL9,B.dL7,B.dLa,B.dL6,B.dLb,B.dLc,B.dO3,B.dNS,B.dNR,B.dNT,B.dNW,B.dNV,B.dNU,B.dO_,B.dO0,B.dO1,B.dO2,B.dzf,B.dze,B.dz4,B.dza,B.dz8,B.dzc,B.dz6,B.dzd,B.dz5,B.dS6,B.dS5,B.dRY,B.dS1,B.dS0,B.dS2,B.dS_,B.dRZ,B.dDe,B.dD5,B.dD4,B.dD8,B.dD3,B.dD9,B.dD2,B.dDa,B.dD1,B.dDb,B.dD0,B.dD_,B.dCZ,B.bK1,B.bK3,B.bJP,B.bJR,B.bES,B.bET,B.bER,B.bEU,B.bEW,B.bEI,B.bEJ,B.bEK,B.bEL,B.bEM,B.bEN,B.bFb,B.bEl,B.bF1,B.bF2,B.bF_,B.bF0,B.bEY,B.bEZ,B.bF7,B.bEX,B.bF8,B.bEm,B.bEG,B.bEs,B.bEt,B.bEr,B.bEu,B.bEq,B.bEx,B.bEy,B.bEz,B.bEA,B.bEp,B.bEB,B.bEo,B.bEC,B.bEn,B.dOc,B.dOn,B.dOo,B.dOa,B.dO9,B.dO8,B.dOh,B.dOf,B.dOg,B.dOi,B.dOd,B.dOe,B.dOq,B.dOr,B.dOs,B.dOt,B.dOu,B.dK8,B.dK6,B.dK4,B.dK3,B.dK2,B.dK1,B.dK0,B.dJX,B.dJW,B.dJZ,B.dJY,B.e3l,B.e3n,B.e3c,B.e3d,B.e3f,B.e3h,B.e3i,B.e3j,B.e3k,B.e3E,B.e3G,B.e3w,B.e3s,B.e3x,B.e3y,B.e3r,B.e3v,B.e3u,B.e3t,B.e3D,B.f9z,B.f9A,B.f9B,B.f9C,B.f9D,B.f9E,B.f9F,B.f9G,B.ccK,B.ccJ,B.eCy,B.eCu,B.eCt,B.eCw,B.eCv,B.dQq,B.dQr,B.dQl,B.dQn,B.dQo,B.dQm,B.dQp,B.dBH,B.dBE,B.dBD,B.dBF,B.dBC,B.dNH,B.dNG,B.dNF,B.dNE,B.dNL,B.dND,B.dNC,B.dNN,B.dNB,B.dNO,B.dNA,B.dNP,B.dNQ,B.dNz,B.e91,B.e92,B.e90,B.e93,B.e9_,B.e96,B.e98,B.e94,B.e99,B.ejy,B.ejz,B.ejw,B.ejx,B.ejv,B.ejA,B.ejB,B.ejC,B.ejD,B.exU,B.exW,B.exT,B.exS,B.exY,B.exR,B.e7H,B.e7I,B.e7A,B.e7z,B.e7B,B.e7y,B.e7C,B.e7x,B.e7D,B.e7w,B.e7v,B.e7u,B.e7t,B.cps,B.cpt,B.fHf,B.cpo,B.cpn,B.cpu,B.cpp,B.cpq,B.ccG,B.dT7,B.dSB,B.dSz,B.dSA,B.dSw,B.dSU,B.dSC,B.dSD,B.dSW,B.dSH,B.dT_,B.dST,B.dT0,B.dSS,B.dT1,B.dSR,B.dSQ,B.dSP,B.dSO,B.dT5,B.dSN,B.dT6,B.dSM,B.dSX,B.dSG,B.dSY,B.dSF,B.dSZ,B.dSE,B.dSu,B.dSt,B.d9x,B.f9s,B.f9t,B.f9u,B.f9v,B.f9w,B.f9x,B.f9y,B.eyJ,B.eyK,B.eyI,B.eyH,B.eqM,B.eqX,B.eqZ,B.eqT,B.er_,B.eqS,B.eqR,B.er2,B.eqQ,B.er3,B.eqP,B.er4,B.eqO,B.er5,B.eqN,B.eqJ,B.eqI,B.eST,B.dTc,B.dTr,B.dTi,B.dTs,B.dTh,B.dTt,B.dTq,B.dTx,B.dTp,B.dTo,B.dTz,B.dTn,B.dTm,B.dTl,B.dTk,B.dTE,B.dTj,B.dTu,B.dTg,B.dTv,B.dTf,B.dTw,B.dTe,B.ejG,B.ejH,B.ejF,B.ejI,B.ejE,B.dAX,B.dAT,B.dB0,B.dAS,B.dB1,B.dAR,B.dB2,B.dAQ,B.dB3,B.dAP,B.dB4,B.dAO,B.dB5,B.dAN,B.dB6,B.dAM,B.dAZ,B.dAL,B.dRA,B.dRB,B.dRz,B.dRC,B.dRy,B.dRx,B.dRw,B.dRv,B.dRu,B.dRH,B.dRt,B.dRI,B.dRs,B.dRJ,B.dRr,B.eiV,B.eiW,B.eiU,B.eiX,B.eiT,B.eiY,B.eiS,B.eiZ,B.eiR,B.eiQ,B.eiP,B.eiO,B.eiN])
t(B.bv7,B.aKy)
t(B.aCI,B.bv7)
u(C.mD,[B.beY,B.b99,B.bpU,B.b7R,B.boA,B.bo1,B.b8w,B.bo3,B.brX,B.beW,B.bpP,B.bjh,B.bqF,B.b8R,B.bfQ,B.bji,B.bgx,B.bbT,B.b7W,B.bdl,B.ahi,B.b73,B.bsY,B.adk,B.bf0,B.bff,B.bt9,B.bo2,B.bjv,B.bds,B.bpN,B.b8I,B.bpl,B.b86,B.bdi,B.boD])
t(B.aJB,B.aJA)
t(B.aB7,B.aJB)
t(B.buR,B.aJG)
t(B.aBa,B.buR)
u(C.m0,[B.JB,B.a_d,B.Iw])
u(C.au,[B.boW,B.adB,B.acv,B.P9,B.bpp,B.a7a,B.bbe,B.b4U,B.dy,B.eK,B.au8,B.fg,B.EG])
t(B.aFI,B.aLn)
t(B.beV,C.oA)
t(B.aCH,B.aKw)
t(B.biy,B.aKF)
t(B.aCX,B.aKL)
t(B.bv6,B.aKt)
t(B.aCz,B.bv6)
t(B.bve,B.aKI)
t(B.biD,B.bve)
t(B.buQ,B.aJE)
t(B.aB9,B.buQ)
t(B.bv4,B.aKr)
t(B.bic,B.bv4)
t(B.bv5,B.aKs)
t(B.aCy,B.bv5)
t(B.aBD,B.aJS)
t(B.bh7,B.aJw)
t(B.bhE,B.aK_)
t(B.aw3,B.aw2)
t(B.ahh,B.aw3)
t(B.aBE,B.buT)
t(B.b74,B.aI2)
t(B.bhq,B.aJP)
t(B.buY,B.aKg)
t(B.bi_,B.buY)
t(B.buZ,B.aKh)
t(B.aCi,B.buZ)
t(B.bvf,B.aKT)
t(B.aD9,B.bvf)
t(B.buU,B.aJV)
t(B.bhz,B.buU)
t(B.buP,B.aJC)
t(B.bhc,B.buP)
t(B.bv3,B.aKp)
t(B.bia,B.bv3)
t(B.aK1,B.aK0)
t(B.aBP,B.aK1)
t(B.bvb,B.aKE)
t(B.bix,B.bvb)
t(B.buW,B.aK2)
t(B.aBQ,B.buW)
t(B.bv9,B.aKB)
t(B.biu,B.bv9)
t(B.buO,B.aJz)
t(B.bhb,B.buO)
t(B.buV,B.aJY)
t(B.bhC,B.buV)
t(B.bv8,B.aKA)
t(B.bit,B.bv8)
w(B.aKy,C.c8)
w(B.bv7,B.ms)
w(B.aJA,C.c8)
w(B.aJB,B.ms)
w(B.aJG,C.c8)
w(B.buR,B.ms)
w(B.aLn,C.eQ)
w(B.aKw,C.c8)
w(B.aKF,C.c8)
w(B.aKL,C.c8)
w(B.aJE,C.c8)
w(B.buQ,B.ms)
w(B.aKt,C.c8)
w(B.bv6,B.ms)
w(B.aKI,C.c8)
w(B.bve,B.ms)
w(B.aKr,C.c8)
w(B.bv4,B.ms)
w(B.aKs,C.c8)
w(B.bv5,B.ms)
w(B.aJS,C.c8)
w(B.aJw,C.c8)
w(B.aK_,C.c8)
w(B.aw2,C.c8)
w(B.aw3,B.ms)
w(B.aI2,C.c8)
v(B.buT,C.eu)
w(B.aJP,C.c8)
w(B.aKg,C.c8)
w(B.buY,B.ms)
w(B.aKh,C.c8)
w(B.buZ,B.ms)
w(B.aJC,C.c8)
w(B.buP,B.ms)
w(B.aJV,C.c8)
w(B.buU,B.ms)
w(B.aKp,C.c8)
w(B.bv3,B.ms)
w(B.aKT,C.c8)
w(B.bvf,B.ms)
w(B.aK0,C.c8)
w(B.aK1,B.ms)
w(B.aK2,C.c8)
w(B.buW,B.ms)
w(B.aKB,C.c8)
w(B.bv9,B.ms)
w(B.aKE,C.c8)
w(B.bvb,B.ms)
w(B.aJz,C.c8)
w(B.buO,B.ms)
w(B.aJY,C.c8)
w(B.buV,B.ms)
w(B.aKA,C.c8)
w(B.bv8,B.ms)})()
C.jR(b.typeUniverse,JSON.parse('{"Uq":{"ag":[],"r":[]},"bhY":{"ah":["Uq"]},"US":{"ag":[],"r":[]},"aCI":{"ah":["US"]},"beY":{"aB":[]},"Ti":{"ag":[],"r":[]},"aB7":{"ah":["Ti"]},"Tn":{"ag":[],"r":[]},"aBa":{"ah":["Tn"]},"b99":{"aB":[]},"adB":{"au":[],"r":[]},"acv":{"au":[],"r":[]},"aFH":{"ag":[],"r":[]},"Mv":{"ag":[],"r":[]},"aBr":{"ah":["Mv"]},"boW":{"au":[],"r":[]},"P9":{"au":[],"r":[]},"bpU":{"aB":[]},"bpp":{"au":[],"r":[]},"b7R":{"aB":[]},"aFI":{"ah":["aFH"]},"boA":{"aB":[]},"bo1":{"aB":[]},"b8w":{"aB":[]},"bo3":{"aB":[]},"brX":{"aB":[]},"UR":{"ag":[],"r":[]},"beV":{"aB":[]},"aCH":{"ah":["UR"]},"beW":{"aB":[]},"V6":{"ag":[],"r":[]},"Vi":{"ag":[],"r":[]},"biy":{"ah":["V6"]},"bpP":{"aB":[]},"aCX":{"ah":["Vi"]},"UO":{"ag":[],"r":[]},"Vd":{"ag":[],"r":[]},"Tl":{"ag":[],"r":[]},"aCz":{"ah":["UO"]},"bjh":{"aB":[]},"biD":{"ah":["Vd"]},"bqF":{"aB":[]},"aB9":{"ah":["Tl"]},"b8R":{"aB":[]},"UI":{"ag":[],"r":[]},"UN":{"ag":[],"r":[]},"bic":{"ah":["UI"]},"bfQ":{"aB":[]},"aCy":{"ah":["UN"]},"bji":{"aB":[]},"UL":{"ag":[],"r":[]},"TJ":{"ag":[],"r":[]},"TZ":{"ag":[],"r":[]},"aCw":{"ah":["UL"]},"bgx":{"aB":[]},"bhs":{"ah":["TJ"]},"aBD":{"ah":["TZ"]},"bbT":{"aB":[]},"Td":{"ag":[],"r":[]},"Uc":{"ag":[],"r":[]},"Tm":{"ag":[],"r":[]},"bh7":{"ah":["Td"]},"b7W":{"aB":[]},"bhE":{"ah":["Uc"]},"bdl":{"aB":[]},"bhk":{"ah":["Tm"]},"ahi":{"aB":[]},"ahg":{"ag":[],"r":[]},"ahh":{"ah":["ahg"]},"U_":{"ag":[],"r":[]},"avK":{"ag":[],"r":[]},"aBE":{"ah":["U_"],"eu":[]},"b74":{"ah":["avK"]},"b73":{"aB":[]},"TH":{"ag":[],"r":[]},"bhq":{"ah":["TH"]},"bsY":{"aB":[]},"adk":{"aB":[]},"Uv":{"ag":[],"r":[]},"Ux":{"ag":[],"r":[]},"bi_":{"ah":["Uv"]},"bf0":{"aB":[]},"aCi":{"ah":["Ux"]},"bff":{"aB":[]},"a7a":{"au":[],"r":[]},"Vo":{"ag":[],"r":[]},"U6":{"ag":[],"r":[]},"Tj":{"ag":[],"r":[]},"TY":{"ag":[],"r":[]},"UJ":{"ag":[],"r":[]},"UX":{"ag":[],"r":[]},"Vh":{"ag":[],"r":[]},"UH":{"ag":[],"r":[]},"aD9":{"ah":["Vo"]},"bt9":{"aB":[]},"bhz":{"ah":["U6"]},"bo2":{"aB":[]},"bhc":{"ah":["Tj"]},"bht":{"ah":["TY"]},"bjv":{"aB":[]},"aCs":{"ah":["UJ"]},"aCO":{"ah":["UX"]},"biH":{"ah":["Vh"]},"bia":{"ah":["UH"]},"bbe":{"au":[],"r":[]},"b4U":{"au":[],"r":[]},"dy":{"au":[],"r":[]},"eK":{"au":[],"r":[]},"au8":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"EG":{"au":[],"r":[]},"Ud":{"ag":[],"r":[]},"aBP":{"ah":["Ud"]},"bds":{"aB":[]},"Vk":{"ag":[],"r":[]},"biL":{"ah":["Vk"]},"V5":{"ag":[],"r":[]},"Ue":{"ag":[],"r":[]},"UY":{"ag":[],"r":[]},"bix":{"ah":["V5"]},"bpN":{"aB":[]},"aBQ":{"ah":["Ue"]},"b8I":{"aB":[]},"biu":{"ah":["UY"]},"bpl":{"aB":[]},"Th":{"ag":[],"r":[]},"Ua":{"ag":[],"r":[]},"UU":{"ag":[],"r":[]},"bhb":{"ah":["Th"]},"b86":{"aB":[]},"bhC":{"ah":["Ua"]},"bdi":{"aB":[]},"bit":{"ah":["UU"]},"boD":{"aB":[]}}'))
C.Ph(b.typeUniverse,JSON.parse('{"ms":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("my<w?>"),e8:w("d2"),G:w("w"),l:w("bp<n,n>"),J:w("bp<n,P>"),I:w("bp<n,G>"),R:w("eU<n>"),Z:w("a0"),M:w("O<d8>"),f5:w("O<a1X>"),gh:w("O<aQf>"),h:w("O<a20>"),V:w("O<ad>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<RR>"),aJ:w("O<ay<aC>>"),w:w("O<a0>"),Q:w("O<ak<w>>"),B:w("O<ak<RR>>"),gO:w("O<ak<ak<P>>>"),bj:w("O<ak<n>>"),b:w("O<ak<P>>"),fA:w("O<ak<G?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<t9>"),ds:w("O<a7x>"),v:w("O<hm>"),U:w("O<+(u,P)>"),ev:w("O<+(u,G)>"),K:w("O<+(n,n)>"),fT:w("O<+(P,r)>"),E:w("O<+(G,n)>"),u:w("O<+(G,G)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,P,P,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,P,P,a4<n,P>)>"),_:w("O<uz>"),q:w("O<cP>"),fQ:w("O<a95>"),s:w("O<n>"),cF:w("O<ar>"),X:w("O<vU>"),F:w("O<a9Q>"),p:w("O<r>"),bL:w("O<aa9>"),fH:w("O<lc>"),aq:w("O<b7K>"),a_:w("O<aan>"),cS:w("O<aau>"),cB:w("O<n9>"),ba:w("O<aaE>"),d9:w("O<OJ>"),bi:w("O<aaX>"),eW:w("O<BS>"),fY:w("O<Yd>"),aX:w("O<F8>"),ea:w("O<abM>"),gB:w("O<acg>"),ed:w("O<P0>"),g4:w("O<bju>"),aS:w("O<ZK>"),ac:w("O<acz>"),cd:w("O<C1>"),fr:w("O<adr>"),e4:w("O<a_q>"),r:w("O<adw>"),au:w("O<aGx>"),f7:w("O<R>"),n:w("O<P>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<t9?>"),d4:w("O<n?>"),bN:w("O<G?>"),gJ:w("cs<ahh>"),A:w("cs<ah<ag>>"),bF:w("ak<w>"),gl:w("ak<S>"),ew:w("ak<aC>"),j:w("ak<@>"),bW:w("ak<G>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("J<e7,n>"),dv:w("J<n,n>"),fR:w("J<+(P,r),r>"),m:w("iy"),gA:w("yJ"),gD:w("x3"),P:w("cn"),C:w("aC"),W:w("t9"),dV:w("e7"),g7:w("By"),N:w("n"),bO:w("ar"),k:w("km"),Y:w("bm<P>"),cL:w("a9R"),gj:w("cz<n>"),aC:w("cz<G?>"),dg:w("e6<qw>"),e3:w("b89"),a2:w("BO"),f3:w("qw"),es:w("Fc"),gV:w("mQ"),y:w("R"),i:w("P"),z:w("@"),S:w("G"),L:w("ak<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("ql?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aTZ=new C.d8(0,0.85)
D.fnB=new C.x("Tap once to start the chain",null,M.SI,null,null,null,null,null,null,null,null,null)
D.aTx=new C.bI(D.aTZ,null,null,D.fnB,null)
D.aTP=new C.d8(0,0.1)
D.aUT=new B.aQp(0,0,0)
D.Js=new B.aQp(0,0.5,0)
D.aVp=new C.aA(A.bc,1,A.r,-1)
D.aWT=new C.aY(0,1/0,0,290)
D.aX_=new C.aY(16,1/0,16,1/0)
D.aYc=new C.o(A.bk,null,null,null,null,null,A.a6)
D.eQz=new C.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new C.x("\u26a1",null,D.eQz,null,null,null,null,null,null,null,null,null)
D.b1C=new C.cq(A.A,null,null,D.fpU,null)
D.aO3=new C.F(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aO3,null,A.L,null,null,null,null,null,null,null)
D.e0i=new C.C(A.nE,D.fgc,null)
D.b1L=new C.cq(A.A,null,null,D.e0i,null)
D.fjM=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kq,null,A.L,null,null,null,null,null,null,null)
D.e0m=new C.C(A.nE,D.fjM,null)
D.b24=new C.cq(A.A,null,null,D.e0m,null)
D.f0e=new C.F(!0,A.j2,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fol=new C.x("Draw anywhere",null,D.f0e,null,null,null,null,null,null,null,null,null)
D.b28=new C.cq(A.A,null,null,D.fol,null)
D.f6K=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aO3,null,A.L,null,null,null,null,null,null,null)
D.e11=new C.C(A.EU,D.f6K,null)
D.b2r=new C.cq(A.A,null,null,D.e11,null)
D.aav=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b4U=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b5H=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.UZ=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b5M=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b5Q=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b5V=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.V0=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b6W=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b70=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b7g=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b8i=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.abK=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b8K=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b8Q=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.A_=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b9u=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.ac6=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.ba5=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bac=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aci=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.VB=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.baH=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.acp=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.E1=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.acz=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.VN=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bcr=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bct=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bcx=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bcG=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.ad0=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bd1=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Ea=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.be3=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.beb=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bee=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.beo=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.ber=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bey=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uK=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.adP=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bfy=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bgg=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bgI=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bh4=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.aec=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.blb=new C.b9(11e6)
D.bmc=new C.Q(0,0,8,6)
D.af8=new C.Q(0,0,9,0)
D.bmK=new C.Q(10,0,10,4)
D.bmP=new C.Q(10,10,10,6)
D.bmW=new C.Q(10,34,10,26)
D.bn3=new C.Q(10,6,10,2)
D.Xb=new C.Q(10,6,10,4)
D.bn5=new C.Q(10,8,0,10)
D.bnI=new C.Q(12,8,8,8)
D.bnN=new C.Q(14,0,14,22)
D.bnP=new C.Q(14,0,14,30)
D.afx=new C.Q(14,0,14,6)
D.afE=new C.Q(14,10,8,12)
D.bol=new C.Q(14,8,14,6)
D.boN=new C.Q(16,4,16,28)
D.boX=new C.Q(16,8,16,12)
D.br1=new C.Q(26,12,26,58)
D.brO=new C.Q(4,4,6,2)
D.brQ=new C.Q(4,4,8,2)
D.bsp=new C.Q(8,14,8,12)
D.bsw=new C.Q(8,40,8,30)
D.bsB=new C.Q(8,6,16,0)
D.bsC=new C.Q(8,6,8,8)
D.bsV=new C.Q(0,0,1.5,0)
D.aUF=new C.Gk(26,"saturation")
D.btc=new C.ys(A.cU,D.aUF,null,A.aat)
D.f5S=new C.x("REACTION LAB",null,V.aOE,null,null,null,null,A.a2,null,1,null,null)
D.bti=new C.bE(1,A.bi,D.f5S,null)
D.eY8=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new C.x("CORE PROTOCOL",null,D.eY8,null,null,null,null,null,null,null,null,null)
D.btu=new C.bE(1,A.bi,D.f8T,null)
D.f9z=new C.x("\ud83d\udce2 NGMY Ads",null,A.q0,null,null,null,null,A.eB,null,1,null,null)
D.bu8=new C.bE(1,A.bi,D.f9z,null)
D.f4A=new C.x("Wire selected",null,A.hm,null,null,null,null,null,null,null,null,null)
D.bum=new C.bE(1,A.bi,D.f4A,null)
D.aiL=new C.a0(62712,"MaterialIcons",!1)
D.byz=new C.a0(62878,"MaterialIcons",!1)
D.Zu=new C.a0(62908,"MaterialIcons",!1)
D.byC=new C.a0(62918,"MaterialIcons",!1)
D.byD=new C.a0(62931,"MaterialIcons",!1)
D.byG=new C.a0(62951,"MaterialIcons",!1)
D.byW=new C.a0(63064,"MaterialIcons",!1)
D.byY=new C.a0(63070,"MaterialIcons",!1)
D.xD=new C.a0(63128,"MaterialIcons",!1)
D.FD=new C.a0(63726,"MaterialIcons",!1)
D.bAg=new C.a0(983122,"MaterialIcons",!1)
D.bAu=new C.a0(983247,"MaterialIcons",!1)
D.bAG=new C.a0(983415,"MaterialIcons",!1)
D.bAH=new C.a0(983417,"MaterialIcons",!1)
D.bAI=new C.a0(983442,"MaterialIcons",!1)
D.bAJ=new C.a0(983443,"MaterialIcons",!1)
D.ak6=new C.a0(983467,"MaterialIcons",!1)
D.bAP=new C.a0(983501,"MaterialIcons",!1)
D.bB_=new C.a0(983616,"MaterialIcons",!1)
D.bB0=new C.a0(983624,"MaterialIcons",!1)
D.bBc=new C.a0(983776,"MaterialIcons",!1)
D.bBt=new C.a0(984561,"MaterialIcons",!1)
D.bC3=new C.ae(A.qO,24,A.aM,null,null,null)
D.bCP=new C.ae(A.MU,null,A.ad,null,null,null)
D.bDm=new C.ae(A.me,21,A.ad,null,null,null)
D.bAf=new C.a0(983117,"MaterialIcons",!1)
D.bEH=new C.ae(D.bAf,28,A.c,null,null,null)
D.bEX=new C.ae(A.j8,18,null,null,null,null)
D.bGH=new C.ae(A.e4,21,A.cr,null,null,null)
D.bGW=new C.ae(A.mf,null,A.ad,null,null,null)
D.bH5=new C.ae(A.a_m,21,A.ad,null,null,null)
D.bHV=new C.ae(A.eA,17,A.ad,null,null,null)
D.alu=new C.ae(A.eA,19,null,null,null,null)
D.mj=new C.ae(A.vd,21,A.ad,null,null,null)
D.bJn=new C.ae(A.Mm,null,A.ad,null,null,null)
D.bKw=new C.ae(A.j8,21,A.ad,null,null,null)
D.bLm=new C.ae(A.fa,20,A.ay,null,null,null)
D.bM1=new C.ae(A.dV,null,A.aM,null,null,null)
D.bMm=new C.ae(A.jR,null,A.ay,null,null,null)
D.d5Q=w([A.dp,A.d4,A.dp],x.O)
D.bP2=new C.a7(A.a3,A.a7,A.x,D.d5Q,null,null)
D.cLN=w([A.bW,A.bp],x.O)
D.bPa=new C.a7(A.b0,A.b6,A.x,D.cLN,null,null)
D.bPl=new C.a7(A.b0,A.b6,A.x,A.avw,null,null)
D.cM8=w([A.h1,A.fh],x.O)
D.bPu=new C.a7(A.b0,A.b6,A.x,D.cM8,null,null)
D.amv=new C.a7(A.b0,A.b6,A.x,L.a11,null,null)
D.cJC=w([A.o6,A.i3],x.O)
D.bQ7=new C.a7(A.b0,A.b6,A.x,D.cJC,null,null)
D.cLv=w([A.eu,A.aA],x.O)
D.amC=new C.a7(A.b0,A.b6,A.x,D.cLv,null,null)
D.d0D=w([A.dL,A.iK,A.bp],x.O)
D.bQn=new C.a7(A.a3,A.a7,A.x,D.d0D,null,null)
D.d0J=w([A.k8,A.cC],x.O)
D.bQH=new C.a7(A.b0,A.b6,A.x,D.d0J,null,null)
D.ciG=w([A.bW,A.dL],x.O)
D.bQQ=new C.a7(A.a3,A.a7,A.x,D.ciG,null,null)
D.aw9=w([A.eu,K.of],x.O)
D.bQX=new C.a7(A.b0,A.b6,A.x,D.aw9,null,null)
D.bRc=new C.a7(A.b0,A.b6,A.x,I.amY,null,null)
D.baN=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b4h=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cH5=w([D.baN,D.b4h],x.O)
D.bRp=new C.a7(A.b0,A.b6,A.x,D.cH5,null,null)
D.bS0=new C.a7(A.ax,A.aD,A.x,A.a0Z,null,null)
D.bf3=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.db3=w([D.bf3,A.JY],x.O)
D.bS7=new C.a7(A.b0,A.b6,A.x,D.db3,null,null)
D.cUa=w([A.aA,A.w],x.O)
D.bSc=new C.a7(A.b0,A.b6,A.x,D.cUa,null,null)
D.bSf=new C.a7(A.b0,A.b6,A.x,K.avA,null,null)
D.bev=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bfc=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cve=w([A.KD,D.bev,D.bfc],x.O)
D.bSo=new C.a7(A.b0,A.b6,A.x,D.cve,null,null)
D.cj_=w([A.dj,A.fn],x.O)
D.bSD=new C.a7(A.b0,A.b6,A.x,D.cj_,null,null)
D.bSJ=new C.a7(A.ax,A.aD,A.x,A.a1L,null,null)
D.an_=w([0,2,4,6,7,9,11],x.t)
D.bTj=w([0,4,7],x.t)
D.an3=w([0,4,7,12],x.t)
D.bTk=w([0,4,7,4],x.t)
D.avh=w([A.fY,A.pe],x.O)
D.auS=w([A.ht,A.cY],x.O)
D.atj=w([A.by,A.dO],x.O)
D.cDH=w([A.aM,A.dj],x.O)
D.cJY=w([A.cr,A.eM],x.O)
D.d1N=w([A.bZ,A.ls],x.O)
D.asO=w([A.cy,A.jJ],x.O)
D.cIC=w([A.bI,A.aK],x.O)
D.bTE=w([D.avh,D.auS,A.a15,D.atj,D.cDH,D.cJY,A.auq,D.d1N,D.asO,D.cIC],x.Q)
D.bYi=w([120,220,380],x.t)
D.c12=w([12,16,19,24],x.t)
D.c1b=w([1400,800,450,2400],x.t)
D.c5n=w([0,0.6,1],x.n)
D.c9v=w([250,450,900,1500],x.t)
D.b56=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.beP=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bd3=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bhO=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bch=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.as2=w([D.b56,D.beP,D.bd3,D.bhO,D.bch],x.O)
D.esm=new C.z("type","Typewriter")
D.elJ=new C.z("bounce","Bounce")
D.et5=new C.z("wave","Wave")
D.eu8=new C.z("zoom","Zoom")
D.cq4=w([D.esm,D.elJ,D.et5,A.a4P,I.aK1,D.eu8,I.aK3],x.K)
D.cqg=w([50,25,75],x.t)
D.cvK=w([0,5,10,15,18,20,25],x.t)
D.enk=new C.z("fish","Fish")
D.enm=new C.z("fly","Fireflies")
D.elH=new C.z("bird","Birds")
D.czT=w([D.enk,D.enm,D.elH],x.K)
D.cDX=w([900,500,250,1600],x.t)
D.cHu=w([0.78,1],x.n)
D.atk=w([0,2,4,7,9,12,14,16],x.t)
D.cI1=w([A.by,A.bA,A.b9,A.by],x.O)
D.atp=w(["A","T","C","G"],x.s)
D.cI2=w(["A","U","C","G"],x.s)
D.a0W=w([A.aC,A.cq,A.bk,A.aX,A.nu],x.O)
D.cJj=w([A.aA,A.aC,A.cy,A.cq,A.bk,A.cv,A.c8,A.bA,A.JY],x.O)
D.a1_=w([0.04,0.17,0.3],x.n)
D.cJU=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Gp=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eBA=new B.uz("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eBG=new B.uz("Medium engine","A good all-rounder.",0.3,0.9)
D.eBF=new B.uz("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Gq=w([D.eBA,D.eBG,D.eBF],x._)
D.ec1=new C.z(6,"Easy")
D.ecB=new C.z(8,"Medium")
D.e8y=new C.z(10,"Hard")
D.cKI=w([D.ec1,D.ecB,D.e8y],x.E)
D.atJ=w([0.55,0.78,1],x.n)
D.cMd=w([0.93,0.975,1],x.n)
D.atU=w([A.c,A.fZ,A.p2,A.aA],x.O)
D.fsR=new B.xE("Moon",1737,4291941851)
D.fsO=new B.xE("Earth",6371,4281908728)
D.fsS=new B.xE("Neptune",24622,4284524026)
D.fsT=new B.xE("Saturn",58232,4294829706)
D.fsP=new B.xE("Jupiter",69911,4294677052)
D.fsU=new B.xE("Sun",696340,4294688548)
D.fsV=new B.xE("Sirius A",119e4,4290763774)
D.fsM=new B.xE("Arcturus",179e5,4294818420)
D.fsN=new B.xE("Betelgeuse",531e6,4294472049)
D.fsQ=new B.xE("UY Scuti",667e6,4293870660)
D.P3=w([D.fsR,D.fsO,D.fsS,D.fsT,D.fsP,D.fsU,D.fsV,D.fsM,D.fsN,D.fsQ],C.ax("O<xE>"))
D.exo=new C.bz("glow","Glow",A.Zw)
D.eva=new C.bz("rainbow","Rainbow",A.mX)
D.evv=new C.bz("stars","Stars",A.hZ)
D.euV=new C.bz("sparks","Sparks",A.dV)
D.ewJ=new C.bz("fire","Fire",A.ve)
D.cNX=w([D.exo,D.eva,D.evv,D.euV,D.ewJ],x.c)
D.atY=w([A.bk,A.aC,A.cq,A.d4],x.O)
D.cOV=w([0.2,1],x.n)
D.eBx=new B.uz("Radar","Shows your height above the ground.",0.1,0)
D.eBy=new B.uz("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eBv=new B.uz("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.au5=w([D.eBx,D.eBy,D.eBv],x._)
D.ew2=new C.bz("attract","Attract",A.xW)
D.evQ=new C.bz("scare","Scare",A.qM)
D.ev3=new C.bz("food","Food",A.tC)
D.bAl=new C.a0(983158,"MaterialIcons",!1)
D.ewl=new C.bz("hunt","Hunt",D.bAl)
D.cPw=w([D.ew2,D.evQ,D.ev3,D.ewl],x.c)
D.cPV=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cQ9=w([47,100,220,470,1000],x.n)
D.aun=w([0,2,4,7,9],x.t)
D.Hs={volts:0}
D.a2C=new C.bp(D.Hs,[3],x.J)
D.HO=new C.eW(["b","battery",0.2,0.3,D.a2C])
D.dWH={on:0}
D.dfI=new C.bp(D.dWH,[1],x.J)
D.Cv=new C.eW(["s","switch",0.5,0.3,D.dfI])
D.ezP=new C.eW(["l","bulb",0.8,0.3,A.iQ])
D.cLU=w([D.HO,D.Cv,D.ezP],x.d)
D.Cu=new C.cL(["b",0,"s",0])
D.eyT=new C.cL(["s",1,"l",0])
D.aK7=new C.cL(["l",1,"b",1])
D.d0O=w([D.Cu,D.eyT,D.aK7],x.o)
D.cLn=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.e7U=new B.mp("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cLU,D.d0O,D.cLn)
D.aEh={ohms:0}
D.aBU=new C.bp(D.aEh,[220],x.J)
D.ezk=new C.eW(["r","resistor",0.5,0.3,D.aBU])
D.eA1=new C.eW(["d","led",0.8,0.3,A.iQ])
D.d3D=w([D.HO,D.ezk,D.eA1],x.d)
D.eyg=new C.cL(["b",0,"r",0])
D.eyN=new C.cL(["r",1,"d",0])
D.eym=new C.cL(["d",1,"b",1])
D.dbx=w([D.eyg,D.eyN,D.eym],x.o)
D.d41=w(["led","diode","indicator"],x.s)
D.e80=new B.mp("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d3D,D.dbx,D.d41)
D.a3T={level:0}
D.df6=new C.bp(D.a3T,[0.2],x.J)
D.ezq=new C.eW(["p","pot",0.5,0.3,D.df6])
D.ezs=new C.eW(["m","motor",0.8,0.3,A.iQ])
D.cMb=w([D.HO,D.ezq,D.ezs],x.d)
D.eyf=new C.cL(["b",0,"p",0])
D.eyJ=new C.cL(["p",1,"m",0])
D.eyG=new C.cL(["m",1,"b",1])
D.d7I=w([D.eyf,D.eyJ,D.eyG],x.o)
D.d0x=w(["fan","motor","spin","dimmer"],x.s)
D.e7S=new B.mp("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cMb,D.d7I,D.d0x)
D.a2z=new C.bp(D.a3T,[0.9],x.J)
D.aKe=new C.eW(["s","solar",0.25,0.3,D.a2z])
D.aKd=new C.eW(["l","bulb",0.75,0.3,A.iQ])
D.cOB=w([D.aKe,D.aKd],x.d)
D.eyQ=new C.cL(["s",0,"l",0])
D.eyF=new C.cL(["l",1,"s",1])
D.cMT=w([D.eyQ,D.eyF],x.o)
D.d8e=w(["solar","sun","without battery","no battery","free"],x.s)
D.e7V=new B.mp("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cOB,D.cMT,D.d8e)
D.eA4=new C.eW(["c","crank",0.25,0.3,D.a2z])
D.cZZ=w([D.eA4,D.aKd],x.d)
D.eyj=new C.cL(["c",0,"l",0])
D.eyE=new C.cL(["l",1,"c",1])
D.d_w=w([D.eyj,D.eyE],x.o)
D.d_7=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.e7R=new B.mp("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cZZ,D.d_w,D.d_7)
D.df5=new C.bp(D.a3T,[0.7],x.J)
D.ezv=new C.eW(["t","turbine",0.25,0.3,D.df5])
D.ezj=new C.eW(["m","motor",0.75,0.3,A.iQ])
D.cUN=w([D.ezv,D.ezj],x.d)
D.ez0=new C.cL(["t",0,"m",0])
D.eyH=new C.cL(["m",1,"t",1])
D.cTQ=w([D.ez0,D.eyH],x.o)
D.cYU=w(["wind","turbine","windmill","water","hydro"],x.s)
D.e7O=new B.mp("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cUN,D.cTQ,D.cYU)
D.aBR=new C.bp(D.Hs,[9],x.J)
D.a4S=new C.eW(["b","battery",0.2,0.3,D.aBR])
D.aKc=new C.eW(["r","radio",0.8,0.3,A.iQ])
D.d8N=w([D.a4S,D.Cv,D.aKc],x.d)
D.eyV=new C.cL(["s",1,"r",0])
D.aK8=new C.cL(["r",1,"b",1])
D.bT2=w([D.Cu,D.eyV,D.aK8],x.o)
D.d7v=w(["radio","music","listen"],x.s)
D.e8_=new B.mp("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.d8N,D.bT2,D.d7v)
D.dg9=new C.bp(D.Hs,[12],x.J)
D.aKb=new C.eW(["b","battery",0.2,0.3,D.dg9])
D.ezQ=new C.eW(["t","tv",0.8,0.3,A.iQ])
D.cLV=w([D.aKb,D.Cv,D.ezQ],x.d)
D.eyW=new C.cL(["s",1,"t",0])
D.aK9=new C.cL(["t",1,"b",1])
D.d1Q=w([D.Cu,D.eyW,D.aK9],x.o)
D.d8L=w(["tv","television","screen","watch"],x.s)
D.e7L=new B.mp("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cLV,D.d1Q,D.d8L)
D.ezG=new C.eW(["z","buzzer",0.8,0.3,A.iQ])
D.csz=w([D.HO,D.Cv,D.ezG],x.d)
D.eyX=new C.cL(["s",1,"z",0])
D.eze=new C.cL(["z",1,"b",1])
D.cHg=w([D.Cu,D.eyX,D.eze],x.o)
D.d5V=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.e7X=new B.mp("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.csz,D.cHg,D.d5V)
D.ezr=new C.eW(["h","heater",0.8,0.3,A.iQ])
D.cXD=w([D.a4S,D.Cv,D.ezr],x.d)
D.eyS=new C.cL(["s",1,"h",0])
D.eyu=new C.cL(["h",1,"b",1])
D.cHY=w([D.Cu,D.eyS,D.eyu],x.o)
D.ccM=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.e7M=new B.mp("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cXD,D.cHY,D.ccM)
D.ezS=new C.eW(["s","solar",0.2,0.25,D.a2z])
D.dge=new C.bp(D.aEh,[100],x.J)
D.ezV=new C.eW(["r","resistor",0.55,0.25,D.dge])
D.eA0=new C.eW(["c","capacitor",0.85,0.25,A.iQ])
D.ezn=new C.eW(["q","resistor",0.55,0.6,D.aBU])
D.ezT=new C.eW(["d","led",0.85,0.6,A.iQ])
D.d1t=w([D.ezS,D.ezV,D.eA0,D.ezn,D.ezT],x.d)
D.eyR=new C.cL(["s",0,"r",0])
D.eyM=new C.cL(["r",1,"c",0])
D.eyl=new C.cL(["c",1,"s",1])
D.eyk=new C.cL(["c",0,"q",0])
D.eyL=new C.cL(["q",1,"d",0])
D.eyn=new C.cL(["d",1,"c",1])
D.cRW=w([D.eyR,D.eyM,D.eyl,D.eyk,D.eyL,D.eyn],x.o)
D.cZn=w(["capacitor","store","charge","flash"],x.s)
D.e7Z=new B.mp("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d1t,D.cRW,D.cZn)
D.ezy=new C.eW(["b","battery",0.15,0.3,D.a2C])
D.eA5=new C.eW(["l1","bulb",0.5,0.3,A.iQ])
D.ezE=new C.eW(["l2","bulb",0.85,0.3,A.iQ])
D.cKb=w([D.ezy,D.eA5,D.ezE],x.d)
D.eye=new C.cL(["b",0,"l1",0])
D.eyB=new C.cL(["l1",1,"l2",0])
D.eyC=new C.cL(["l2",1,"b",1])
D.cVr=w([D.eye,D.eyB,D.eyC],x.o)
D.d8x=w(["series","two bulbs","dim"],x.s)
D.e7P=new B.mp("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cKb,D.cVr,D.d8x)
D.dWT={volts:0,charge:1}
D.dgj=new C.bp(D.dWT,[1.5,0],x.J)
D.ezZ=new C.eW(["b","battery",0.75,0.3,D.dgj])
D.cJD=w([D.aKe,D.ezZ],x.d)
D.eyP=new C.cL(["s",0,"b",0])
D.eyi=new C.cL(["b",1,"s",1])
D.cSb=w([D.eyP,D.eyi],x.o)
D.cZu=w(["charge","rechargeable","flat","recharge"],x.s)
D.e7N=new B.mp("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cJD,D.cSb,D.cZu)
D.dg8=new C.bp(D.Hs,[4.5],x.J)
D.ezt=new C.eW(["b","battery",0.2,0.3,D.dg8])
D.aKa=new C.eW(["p","phone",0.8,0.3,A.iQ])
D.cUD=w([D.ezt,D.Cv,D.aKa],x.d)
D.eyU=new C.cL(["s",1,"p",0])
D.a4R=new C.cL(["p",1,"b",1])
D.d4X=w([D.Cu,D.eyU,D.a4R],x.o)
D.d6i=w(["phone","charger","usb","mobile"],x.s)
D.e7T=new B.mp("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cUD,D.d4X,D.d6i)
D.ezg=new C.eW(["f","fan",0.8,0.3,A.iQ])
D.c4Z=w([D.HO,D.ezg],x.d)
D.eyd=new C.cL(["b",0,"f",0])
D.eys=new C.cL(["f",1,"b",1])
D.cIq=w([D.eyd,D.eys],x.o)
D.d0w=w(["fan","cool","air","wind"],x.s)
D.e81=new B.mp("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c4Z,D.cIq,D.d0w)
D.ezK=new C.eW(["b","battery",0.15,0.2,D.a2C])
D.ezh=new C.eW(["a","ammeter",0.5,0.2,A.iQ])
D.ezf=new C.eW(["l","bulb",0.85,0.2,A.iQ])
D.ezM=new C.eW(["v","voltmeter",0.5,0.6,A.iQ])
D.cZN=w([D.ezK,D.ezh,D.ezf,D.ezM],x.d)
D.eyb=new C.cL(["b",0,"a",0])
D.eya=new C.cL(["a",1,"l",0])
D.ez2=new C.cL(["v",0,"l",0])
D.ez3=new C.cL(["v",1,"l",1])
D.cS2=w([D.eyb,D.eya,D.aK7,D.ez2,D.ez3],x.o)
D.dbw=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.e7Y=new B.mp("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cZN,D.cS2,D.dbw)
D.eA8=new C.eW(["b","battery",0.15,0.2,D.aBR])
D.ezx=new C.eW(["t","tv",0.55,0.2,A.iQ])
D.aBS=new C.bp(D.Hs,[5],x.J)
D.ezl=new C.eW(["c","buck",0.4,0.5,D.aBS])
D.ezz=new C.eW(["p","phone",0.8,0.5,A.iQ])
D.cPX=w([D.eA8,D.ezx,D.ezl,D.ezz],x.d)
D.eyh=new C.cL(["b",0,"t",0])
D.aK5=new C.cL(["b",0,"c",0])
D.aK6=new C.cL(["c",1,"p",0])
D.cUA=w([D.eyh,D.aK9,D.aK5,D.aK6,D.a4R],x.o)
D.cOc=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.e7Q=new B.mp("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cPX,D.cUA,D.cOc)
D.ezm=new C.eW(["c","buck",0.5,0.3,D.aBS])
D.cHP=w([D.aKb,D.ezm,D.aKa],x.d)
D.cMj=w([D.aK5,D.aK6,D.a4R],x.o)
D.cg9=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.e7K=new B.mp("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cHP,D.cMj,D.cg9)
D.ezC=new C.eW(["d","diode",0.5,0.3,A.iQ])
D.cVF=w([D.a4S,D.ezC,D.aKc],x.d)
D.eyc=new C.cL(["b",0,"d",0])
D.eyo=new C.cL(["d",1,"r",0])
D.cv3=w([D.eyc,D.eyo,D.aK8],x.o)
D.cNU=w(["diode","protect","backwards","one way"],x.s)
D.e7W=new B.mp("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cVF,D.cv3,D.cNU)
D.P6=w([D.e7U,D.e80,D.e7S,D.e7V,D.e7R,D.e7O,D.e8_,D.e7L,D.e7X,D.e7M,D.e7Z,D.e7P,D.e7N,D.e7T,D.e81,D.e7Y,D.e7Q,D.e7K,D.e7W],C.ax("O<mp>"))
D.fMj=new B.Fp("Moon",1.62,A.dL,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fMh=new B.Fp("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.fMk=new B.Fp("Mercury",3.7,A.jI,"Mercury is small, so its gravity is like Mars.")
D.fMe=new B.Fp("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fMg=new B.Fp("Earth",9.81,A.aX,"On Earth gravity is strong, and the air also slows you down.")
D.fMi=new B.Fp("Neptune",11.15,A.d4,"Neptune pulls a little harder than Earth.")
D.fMf=new B.Fp("Jupiter",24.79,A.cy,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qW=w([D.fMj,D.fMh,D.fMk,D.fMe,D.fMg,D.fMi,D.fMf],C.ax("O<Fp>"))
D.cRV=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1e=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cSy=w([0.2,0.5,0.8],x.n)
D.byR=new C.a0(63040,"MaterialIcons",!1)
D.evU=new C.bz("peg","Peg",D.byR)
D.ev7=new C.bz("bar","Bar",S.Bb)
D.evy=new C.bz("erase","Erase",A.Mq)
D.cSJ=w([D.evU,D.ev7,D.evy],x.c)
D.eEn=new C.cP(A.bh,A.J,4)
D.cST=w([D.eEn],x.q)
D.auC=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aSF=new B.JB(0,"accordion")
D.cII=w([A.ja,A.Bc,A.B0],x.w)
D.cPo=w(["Mail","SMS","Ad"],x.s)
D.cJb=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fKw=new B.A0(D.aSF,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.avh,D.cII,D.cPo,D.cJb)
D.a8g=new B.JB(1,"flip")
D.cZh=w([A.pw,Z.FP,A.tD],x.w)
D.cUj=w(["Unlock","Verify","Secure"],x.s)
D.cHL=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fKv=new B.A0(D.a8g,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.auS,D.cZh,D.cUj,D.cHL)
D.aSG=new B.JB(2,"towers")
D.cTa=w([A.xR,A.pB,A.hI],x.w)
D.cSP=w(["Save","Grow","Earn"],x.s)
D.cvT=w(["","",""],x.s)
D.fKx=new B.A0(D.aSG,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a15,D.cTa,D.cSP,D.cvT)
D.a8h=new B.JB(3,"assemble")
D.d_a=w([A.n_,A.h6,A.dV],x.w)
D.cOM=w(["Launch","Charge","Shine"],x.s)
D.cWR=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fKz=new B.A0(D.a8h,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.atj,D.d_a,D.cOM,D.cWR)
D.aSH=new B.JB(4,"carousel")
D.d__=w([A.b9,A.fD],x.O)
D.cPy=w([A.me,A.ajg,A.a_f],x.w)
D.cKy=w(["Explore","Discover","Learn"],x.s)
D.cUI=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fKu=new B.A0(D.aSH,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d__,D.cPy,D.cKy,D.cUI)
D.aSI=new B.JB(5,"burst")
D.cSL=w([A.iY,A.rR],x.O)
D.cJ6=w([A.l5,A.md,A.hY],x.w)
D.cJr=w(["Cheer","Win","Love"],x.s)
D.cLt=w(["Make some noise","First place","Share the joy"],x.s)
D.fKy=new B.A0(D.aSI,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cSL,D.cJ6,D.cJr,D.cLt)
D.auD=w([D.fKw,D.fKv,D.fKx,D.fKz,D.fKu,D.fKy],C.ax("O<A0>"))
D.evW=new C.bz("skin","Skin",A.ajh)
D.exb=new C.bz("muscle","Muscles",A.MC)
D.ewX=new C.bz("organ","Organs",A.hY)
D.byi=new C.a0(62747,"MaterialIcons",!1)
D.ex_=new C.bz("bone","Skeleton",D.byi)
D.exh=new C.bz("vessel","Blood vessels",A.pD)
D.cTg=w([D.evW,D.exb,D.ewX,D.ex_,D.exh],x.c)
D.eBz=new B.uz("Simple legs","Light. Land gently.",0.15,0.2)
D.eBB=new B.uz("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eBE=new B.uz("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Bz=w([D.eBz,D.eBB,D.eBE],x._)
D.cUQ=w([1.77,3.55,7.15,16.7],x.n)
D.cXf=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.erR=new C.z("spiral","Spiral")
D.ec_=new C.z("barred","Barred spiral")
D.emQ=new C.z("elliptical","Elliptical")
D.cXT=w([D.erR,D.ec_,D.emQ],x.K)
D.exU=new C.cL(["beat",0.18,0.28,0])
D.eyY=new C.cL(["burst",0.7,0.2,0])
D.ez8=new C.cL(["delay",0.45,0.5,1])
D.eyI=new C.cL(["ripple",0.75,0.6,3])
D.cOw=w([D.exU,D.eyY,D.ez8,D.eyI],x.e)
D.a4K=new C.z(2,3)
D.cYI=w([N.n6,L.HN,D.a4K],x.u)
D.fJM=new B.Fc("First spark","A clock lights a burst and a ripple",D.cOw,D.cYI)
D.eyr=new C.cL(["beat",0.15,0.3,1])
D.exz=new C.cL(["ripple",0.62,0.15,0])
D.ez4=new C.cL(["delay",0.4,0.45,0])
D.ey7=new C.cL(["ripple",0.7,0.45,0])
D.exQ=new C.cL(["delay",0.4,0.7,1])
D.eyK=new C.cL(["shake",0.75,0.75,0])
D.d9u=w([D.eyr,D.exz,D.ez4,D.ey7,D.exQ,D.eyK],x.e)
D.e9r=new C.z(2,4)
D.aJW=new C.z(4,5)
D.cRM=w([N.n6,L.HN,D.a4K,D.e9r,D.aJW],x.u)
D.fJO=new B.Fc("Heartbeat","Two thumps, then a shake",D.d9u,D.cRM)
D.exZ=new C.cL(["dice",0.15,0.7,1])
D.eza=new C.cL(["echo",0.4,0.7,0])
D.ey5=new C.cL(["comet",0.7,0.5,4])
D.eyZ=new C.cL(["burst",0.72,0.2,1])
D.eyp=new C.cL(["burst",0.3,0.25,0])
D.ey_=new C.cL(["pop",0.55,0.85,0])
D.ccl=w([D.exZ,D.eza,D.ey5,D.eyZ,D.eyp,D.ey_],x.e)
D.e8S=new C.z(1,3)
D.e8T=new C.z(1,4)
D.aJV=new C.z(0,5)
D.cZV=w([N.n6,L.vK,D.e8S,D.e8T,D.aJV],x.u)
D.fJN=new B.Fc("Fireworks","Dice launch comets that burst in colour",D.ccl,D.cZV)
D.ey2=new C.cL(["beat",0.15,0.2,2])
D.eyy=new C.cL(["chance",0.4,0.2,0])
D.exW=new C.cL(["ball",0.7,0.12,3])
D.exJ=new C.cL(["chance",0.4,0.5,1])
D.ez9=new C.cL(["ball",0.3,0.08,1])
D.exC=new C.cL(["ripple",0.7,0.55,3])
D.c5o=w([D.ey2,D.eyy,D.exW,D.exJ,D.ez9,D.exC],x.e)
D.a4L=new C.z(3,4)
D.e9s=new C.z(2,5)
D.csj=w([N.n6,L.vK,L.a4J,D.a4L,D.e9s],x.u)
D.fJL=new B.Fc("Rain","Balls fall at random and splash",D.c5o,D.csj)
D.eyz=new C.cL(["beat",0.12,0.45,2])
D.ez_=new C.cL(["toggle",0.38,0.2,0])
D.ez6=new C.cL(["wash",0.7,0.15,4])
D.exY=new C.cL(["count3",0.38,0.45,0])
D.ez1=new C.cL(["burst",0.72,0.4,0])
D.eyq=new C.cL(["light",0.55,0.7,1])
D.exK=new C.cL(["pop",0.8,0.8,4])
D.d1r=w([D.eyz,D.ez_,D.ez6,D.exY,D.ez1,D.eyq,D.exK],x.e)
D.e9O=new C.z(3,6)
D.c8v=w([N.n6,L.vK,L.a4J,D.a4L,D.aJV,D.e9O],x.u)
D.fJJ=new B.Fc("Disco","A beat drives lights, washes and bursts",D.d1r,D.c8v)
D.ezd=new C.cL(["button",0.12,0.2,0])
D.exE=new C.cL(["delay",0.34,0.2,1])
D.ezc=new C.cL(["light",0.56,0.2,1])
D.ez5=new C.cL(["delay",0.56,0.45,1])
D.eyA=new C.cL(["ball",0.34,0.6,0])
D.exI=new C.cL(["delay",0.34,0.8,1])
D.exy=new C.cL(["burst",0.7,0.8,5])
D.bTH=w([D.ezd,D.exE,D.ezc,D.ez5,D.eyA,D.exI,D.exy],x.e)
D.ebL=new C.z(5,6)
D.d63=w([N.n6,L.vK,D.a4K,D.a4L,D.aJW,D.ebL],x.u)
D.fJK=new B.Fc("Domino","Tap the button and watch it run down the line",D.bTH,D.d63)
D.auW=w([D.fJM,D.fJO,D.fJN,D.fJL,D.fJJ,D.fJK],C.ax("O<Fc>"))
D.cY0=w([0.05,0.15,0.25],x.n)
D.cYe=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cYT=w([1.5,3,4.5,9,12],x.n)
D.euG=new C.bz("dice","Dice",A.mc)
D.evE=new C.bz("coin","Coin",M.xK)
D.exc=new C.bz("num","Number",A.xU)
D.cZ2=w([D.euG,D.evE,D.exc],x.c)
D.cZ5=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fsW=new B.Oh("Moon",1.62,0,4291941851)
D.fsX=new B.Oh("Mars",3.71,0.01,4294472049)
D.fsY=new B.Oh("Earth",9.81,1,4281908728)
D.ft_=new B.Oh("Jupiter",24.79,1.4,4294677052)
D.fsZ=new B.Oh("Sun",274,2,4294688548)
D.yj=w([D.fsW,D.fsX,D.fsY,D.ft_,D.fsZ],C.ax("O<Oh>"))
D.av1=w([A.cr,A.aM,A.bc,A.aX,A.by,A.bZ,A.cy,A.ht],x.O)
D.dVl={H:0}
D.dfJ=new C.bp(D.dVl,[2],x.I)
D.dhg=new B.rX("Hydrogen","H\u2082",D.dfJ,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dVm={H:0,Cl:1}
D.dfV=new C.bp(D.dVm,[1,1],x.I)
D.dhi=new B.rX("Hydrogen chloride","HCl",D.dfV,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dVn={H:0,O:1}
D.dfs=new C.bp(D.dVn,[2,1],x.I)
D.dhj=new B.rX("Water","H\u2082O",D.dfs,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dVA={N:0,H:1}
D.dgi=new C.bp(D.dVA,[1,3],x.I)
D.dhr=new B.rX("Ammonia","NH\u2083",D.dgi,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a3S={C:0,H:1}
D.dgc=new C.bp(D.a3S,[1,4],x.I)
D.dhk=new B.rX("Methane","CH\u2084",D.dgc,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dVo={H:0,S:1}
D.deB=new C.bp(D.dVo,[2,1],x.I)
D.dhq=new B.rX("Hydrogen sulfide","H\u2082S",D.deB,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dVF={O:0}
D.dgg=new C.bp(D.dVF,[2],x.I)
D.dhs=new B.rX("Oxygen","O\u2082",D.dgg,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dVz={N:0}
D.dfK=new C.bp(D.dVz,[2],x.I)
D.dhh=new B.rX("Nitrogen","N\u2082",D.dfK,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dV9={C:0,O:1}
D.dgo=new C.bp(D.dV9,[1,2],x.I)
D.dho=new B.rX("Carbon dioxide","CO\u2082",D.dgo,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aEe={C:0,H:1,O:2}
D.den=new C.bp(D.aEe,[1,2,1],x.I)
D.dhp=new B.rX("Formaldehyde","CH\u2082O",D.den,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dgb=new C.bp(D.a3S,[2,4],x.I)
D.dhm=new B.rX("Ethene","C\u2082H\u2084",D.dgb,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dga=new C.bp(D.a3S,[2,6],x.I)
D.dhl=new B.rX("Ethane","C\u2082H\u2086",D.dga,"Two carbons joined by a single bond, each holding three hydrogens.")
D.deo=new C.bp(D.aEe,[1,4,1],x.I)
D.dhn=new B.rX("Methanol","CH\u2083OH",D.deo,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a1u=w([D.dhg,D.dhi,D.dhj,D.dhr,D.dhk,D.dhq,D.dhs,D.dhh,D.dho,D.dhp,D.dhm,D.dhl,D.dhn],C.ax("O<rX>"))
D.d_0=w([A.bZ,A.aX,A.dN,A.bc],x.O)
D.d_V=w([],x.h)
D.d_W=w([],x.B)
D.a1D=w([],x.F)
D.e1L=new B.e7("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e1R=new B.e7("solar","Solar panel","\u2600\ufe0f",A.cq,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e2v=new B.e7("crank","Hand crank","\ud83d\udd04",A.cy,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e27=new B.e7("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aX,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e1D=new B.e7("buck","Step-down converter","\ud83d\udd3d",A.ht,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e25=new B.e7("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e2A=new B.e7("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e2h=new B.e7("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e1W=new B.e7("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e2x=new B.e7("fuse","Fuse","\ud83e\uddef",A.cr,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e1v=new B.e7("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.ht,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e2i=new B.e7("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e2k=new B.e7("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e1T=new B.e7("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e1X=new B.e7("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e2e=new B.e7("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e1M=new B.e7("heater","Heater","\ud83d\udd25",A.cy,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e29=new B.e7("capacitor","Capacitor","\ud83e\udeab",A.cu,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e21=new B.e7("radio","Radio","\ud83d\udcfb",A.nu,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e1Z=new B.e7("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e1C=new B.e7("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e1J=new B.e7("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e1P=new B.e7("fan","Fan","\ud83c\udf00",A.aX,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e2C=new B.e7("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e2r=new B.e7("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e24=new B.e7("calculator","Calculator","\ud83e\uddee",A.JS,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e1I=new B.e7("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cu,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e2B=new B.e7("router","WiFi router","\ud83d\udcf6",A.ht,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e2E=new B.e7("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e1y=new B.e7("toycar","Toy car","\ud83d\ude97",A.cy,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e2F=new B.e7("kettle","Kettle","\ud83e\uded6",A.oe,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e1G=new B.e7("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e1S=new B.e7("lights","Party lights","\ud83c\udf84",A.nu,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e22=new B.e7("fridge","Fridge","\ud83e\uddca",A.h1,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e1A=new B.e7("washer","Washing machine","\ud83e\udee7",A.cu,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e2s=new B.e7("blender","Blender","\ud83e\udd64",A.cr,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e2_=new B.e7("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e1F=new B.e7("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e23=new B.e7("torch","Torch","\ud83d\udd26",A.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e2p=new B.e7("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e1B=new B.e7("microwave","Microwave","\ud83c\udf72",A.cy,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e2j=new B.e7("doorbell","Doorbell","\ud83d\udd14",A.cq,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e1O=new B.e7("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e2d=new B.e7("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e2u=new B.e7("heartmon","Heart monitor","\ud83e\ude7a",A.fX,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e1z=new B.e7("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e28=new B.e7("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e2g=new B.e7("discoball","Disco ball","\ud83e\udea9",A.nu,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e2z=new B.e7("robot","Robot","\ud83e\udd16",A.aX,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e1x=new B.e7("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e2D=new B.e7("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e2o=new B.e7("pump","Water pump","\ud83d\udeb0",A.aX,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e2a=new B.e7("hairdryer","Hair dryer","\ud83d\udca8",A.iY,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e2m=new B.e7("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e1H=new B.e7("smartwatch","Apple Watch Ultra","\u231a",A.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e2y=new B.e7("tablet","iPad Pro M5","\ud83d\udcf2",A.cu,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e1u=new B.e7("lgtv","LG OLED evo G5","\ud83d\udcfa",A.fX,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e20=new B.e7("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e1U=new B.e7("appletv","Apple TV 4K","\ud83d\udcfa",A.bW,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e2f=new B.e7("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.rO,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e1w=new B.e7("iphonefold","iPhone Fold","\ud83d\udcf1",A.b4,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e1K=new B.e7("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d4,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e2w=new B.e7("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cv,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e2b=new B.e7("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e26=new B.e7("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e2n=new B.e7("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e1V=new B.e7("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e2c=new B.e7("honor","Honor Magic V5","\ud83d\udcf1",A.cu,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e2l=new B.e7("vivo","vivo X300 Pro","\ud83d\udcf1",A.cy,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e2q=new B.e7("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e1t=new B.e7("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e1Y=new B.e7("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cv,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e1Q=new B.e7("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e1E=new B.e7("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e1N=new B.e7("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e2t=new B.e7("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Pv=w([D.e1L,D.e1R,D.e2v,D.e27,D.e1D,D.e25,D.e2A,D.e2h,D.e1W,D.e2x,D.e1v,D.e2i,D.e2k,D.e1T,D.e1X,D.e2e,D.e1M,D.e29,D.e21,D.e1Z,D.e1C,D.e1J,D.e1P,D.e2C,D.e2r,D.e24,D.e1I,D.e2B,D.e2E,D.e1y,D.e2F,D.e1G,D.e1S,D.e22,D.e1A,D.e2s,D.e2_,D.e1F,D.e23,D.e2p,D.e1B,D.e2j,D.e1O,D.e2d,D.e2u,D.e1z,D.e28,D.e2g,D.e2z,D.e1x,D.e2D,D.e2o,D.e2a,D.e2m,D.e1H,D.e2y,D.e1u,D.e20,D.e1U,D.e2f,D.e1w,D.e1K,D.e2w,D.e2b,D.e26,D.e2n,D.e1V,D.e2c,D.e2l,D.e2q,D.e1t,D.e1Y,D.e1Q,D.e1E,D.e1N,D.e2t],C.ax("O<e7>"))
D.d0h=w([0,0.46,0.82],x.n)
D.d0s=w([5,10,15,25,45,60],x.t)
D.d0M=w([-0.045,0.03,-0.015],x.n)
D.d19=w([0.9,0.97,1],x.n)
D.avo=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tL=w([0.05,0.2,0.35],x.n)
D.cJv=w([D.Ea,D.Ea],x.O)
D.cOs=w([A.El,A.M],x.O)
D.cNw=w([A.fB,A.hs],x.O)
D.cHI=w([A.fD,A.nt],x.O)
D.c4X=w([A.ls,A.du],x.O)
D.avp=w([D.cJv,D.cOs,D.cNw,D.cHI,D.c4X],x.Q)
D.fsK=new B.uM("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fsL=new B.uM("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fsC=new B.uM("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fsJ=new B.uM("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fsH=new B.uM("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fsD=new B.uM("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fsI=new B.uM("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fsE=new B.uM("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fsG=new B.uM("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fsF=new B.uM("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BF=w([D.fsK,D.fsL,D.fsC,D.fsJ,D.fsH,D.fsD,D.fsI,D.fsE,D.fsG,D.fsF],C.ax("O<uM>"))
D.bbY=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d2e=w([D.Ea,D.bbY,D.ac6,A.abH],x.O)
D.aZq=new C.ad(0,A.G,A.hE,A.dz,6)
D.d35=w([D.aZq],x.V)
D.e8f=new C.z(0,"AND")
D.e8U=new C.z(1,"Adder")
D.e9t=new C.z(2,"Blinker")
D.e9P=new C.z(3,"Memory")
D.d3O=w([D.e8f,D.e8U,D.e9t,D.e9P],x.E)
D.avB=w([-104,0,104],x.n)
D.avC=w([-14,3],x.n)
D.d4f=w([-16,16],x.n)
D.avD=w([-22,22],x.n)
D.avE=w([-24,24],x.n)
D.d4l=w([-8,0,8],x.n)
D.d4m=w([-8,8],x.n)
D.avH=w([-92,0,92],x.n)
D.d4H=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eBw=new B.uz("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eBD=new B.uz("Medium tank","Balanced.",0.35,1)
D.eBC=new B.uz("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.PI=w([D.eBw,D.eBD,D.eBC],x._)
D.n2=w([0.04,0.2,0.36],x.n)
D.avR=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ewW=new C.bz(D.aSF,"Fold",M.akh)
D.ew9=new C.bz(D.a8g,"Flip",A.Fs)
D.byB=new C.a0(62889,"MaterialIcons",!1)
D.exa=new C.bz(D.aSG,"Rise",D.byB)
D.akv=new C.a0(983870,"MaterialIcons",!1)
D.eug=new C.bz(D.a8h,"Assemble",D.akv)
D.eup=new C.bz(D.aSH,"Spin",D.aiL)
D.eum=new C.bz(D.aSI,"Pop",A.l5)
D.d60=w([D.ewW,D.ew9,D.exa,D.eug,D.eup,D.eum],C.ax("O<+(JB,n,a0)>"))
D.avW=w([A.bZ,A.dN,A.bs,A.aX,A.by,A.cr],x.O)
D.d6b=w([A.aX,A.cy,A.cy,A.bc],x.O)
D.d6n=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ete=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.ef1=new C.z("Make the output turn TWICE as fast.",2)
D.e93=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.es0=new C.z("Make the output turn 4 times faster.",4)
D.ekr=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.enq=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.elY=new C.z("Make the output turn 3 times faster.",3)
D.emH=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.aw0=w([D.ete,D.ef1,D.e93,D.es0,D.ekr,D.enq,D.elY,D.emH],C.ax("O<+(n,P)>"))
D.d7l=w([3,4.5,5,6,9],x.n)
D.aZY=new C.ad(0,A.G,A.aW,A.J,16)
D.d7M=w([D.aZY],x.V)
D.PK=w([A.bZ,A.cq,A.bc,A.aX,A.by,A.cr,A.c,A.cy],x.O)
D.d8b=w(["solar","turbine","crank","pot"],x.s)
D.d8v=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d8B=w([0,0.35,0.75,1],x.n)
D.euB=new C.bz("drop","Drop",D.ak6)
D.euD=new C.bz("weight","Weight",R.akz)
D.ex5=new C.bz("cannon","Newton's cannon",A.aju)
D.d9d=w([D.euB,D.euD,D.ex5],x.c)
D.eqF=new C.z("piano","Piano")
D.eql=new C.z("organ","Organ")
D.elF=new C.z("bell","Bell")
D.eqH=new C.z("pluck","Pluck")
D.es_=new C.z("synth","Synth")
D.enl=new C.z("flute","Flute")
D.awh=w([D.eqF,D.eql,D.elF,D.eqH,D.es_,D.enl],x.K)
D.d9I=w(["volts","level","ohms","on"],x.s)
D.daX=w([A.ja,A.Bc,A.B0,A.pw,Z.FP,A.tD,A.xR,A.pB,A.hI,A.n_,A.h6,A.dV,A.hY,A.hZ,A.md,A.lC,A.xS,A.qT,A.lD,A.Fk,A.tC,A.ME,A.B2,A.ak1,A.Mu,A.xN,A.MC,A.ajE,K.akr,A.l5],x.w)
D.dbQ=w([0.72,1],x.n)
D.dc0=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dWM={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.deh=new C.bp(D.dWM,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aEg={A:0,T:1,C:2,G:3}
D.a2u=new C.bp(D.aEg,["U","A","G","C"],x.l)
D.dep=new C.bp(D.aEg,["T","A","G","C"],x.l)
D.dVw={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d_4=w([0,2,4,5,7,9,11],x.t)
D.cIO=w([0,2,3,5,7,8,10],x.t)
D.d4_=w([0,3,5,6,7,10],x.t)
D.BL=new C.bp(D.dVw,[D.aun,D.d_4,D.cIO,D.d4_,D.an_],C.ax("bp<n,ak<G>>"))
D.dWA={A:0,T:1,U:2,C:3,G:4}
D.deE=new C.bp(D.dWA,[A.cr,A.cu,A.cu,A.aM,A.bc],C.ax("bp<n,w>"))
D.dUV={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fDw=new B.xG("Switch",F.N0,A.cq,0,"Tap it to turn it ON or OFF.")
D.fDs=new B.xG("Blinker",A.ou,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fDt=new B.xG("AND",D.akv,A.cu,2,"ON only when BOTH inputs are ON.")
D.bA3=new C.a0(63671,"MaterialIcons",!1)
D.fDr=new B.xG("OR",D.bA3,A.by,2,"ON when EITHER input is ON.")
D.fDu=new B.xG("XOR",G.ZB,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fDo=new B.xG("NAND",A.ts,A.aX,2,"OFF only when BOTH inputs are ON.")
D.bz9=new C.a0(63176,"MaterialIcons",!1)
D.fDp=new B.xG("NOR",D.bz9,A.ht,2,"ON only when BOTH inputs are OFF.")
D.fDq=new B.xG("NOT",X.FL,A.cy,1,"Flips the signal: ON becomes OFF.")
D.fDv=new B.xG("Light",A.qO,A.dN,1,"Glows when its input is ON.")
D.fDx=new B.xG("Buzzer",A.nI,A.cr,1,"Beeps while its input is ON.")
D.yv=new C.bp(D.dUV,[D.fDw,D.fDs,D.fDt,D.fDr,D.fDu,D.fDo,D.fDp,D.fDq,D.fDv,D.fDx],C.ax("bp<n,xG>"))
D.dWy={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.euZ=new C.bz(3,20,1.9)
D.eux=new C.bz(33,90,1.6)
D.ext=new C.bz(52,15,3.2)
D.exr=new C.bz(45,-100,1.8)
D.ew3=new C.bz(-15,-60,1.9)
D.evA=new C.bz(-25,140,2.4)
D.evr=new C.bz(-82,0,2.2)
D.aBI=new C.bp(D.dWy,[D.euZ,D.eux,D.ext,D.exr,D.ew3,D.evA,D.evr],C.ax("bp<n,+(P,P,P)>"))
D.cIe=w([A.A],x.M)
D.cIw=w([A.ax,A.aD],x.M)
D.cQX=w([A.ax,A.A,A.aD],x.M)
D.cSh=w([A.ax,A.kV,A.A,A.ln,A.aD],x.M)
D.d3K=w([A.ax,A.kV,A.a3,A.a7,A.ln,A.aD],x.M)
D.dfz=new C.dQ([1,D.cIe,2,D.cIw,3,D.cQX,4,A.awm,5,D.cSh,6,D.d3K],C.ax("dQ<G,ak<d8>>"))
D.dVx={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ewf=new C.bz(1,A.bW,"Hydrogen")
D.evd=new C.bz(4,A.bp,"Carbon")
D.euh=new C.bz(3,A.d4,"Nitrogen")
D.ewx=new C.bz(2,A.aC,"Oxygen")
D.evY=new C.bz(2,A.cq,"Sulfur")
D.ex2=new C.bz(1,A.bk,"Chlorine")
D.vy=new C.bp(D.dVx,[D.ewf,D.evd,D.euh,D.ewx,D.evY,D.ex2],C.ax("bp<n,+(G,w,n)>"))
D.dWR={Calm:0,Box:1,Sleep:2}
D.cpQ=w([4,2,6,0],x.n)
D.cpX=w([4,4,4,4],x.n)
D.cpY=w([4,7,8,0],x.n)
D.Q8=new C.bp(D.dWR,[D.cpQ,D.cpX,D.cpY],C.ax("bp<n,ak<P>>"))
D.dV3={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wf=new B.a_d(0,"source")
D.cRP=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fIp=new B.pO("Clock",A.ou,D.wf,A.bs,D.cRP)
D.fIl=new B.pO("Button",A.xW,D.wf,A.aM,A.T)
D.d7x=w(["random","quick","slow"],x.s)
D.fIw=new B.pO("Dice",A.mc,D.wf,A.bZ,D.d7x)
D.bzJ=new C.a0(63484,"MaterialIcons",!1)
D.D8=new B.a_d(1,"logic")
D.dbL=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fIs=new B.pO("Delay",D.bzJ,D.D8,A.cu,D.dbL)
D.d0z=w(["fast","mid","slow"],x.s)
D.fIx=new B.pO("Echo",A.ajV,D.D8,A.by,D.d0z)
D.fIu=new B.pO("Every 2nd",X.FL,D.D8,A.ht,A.T)
D.bzo=new C.a0(63309,"MaterialIcons",!1)
D.fIr=new B.pO("Every 3rd",D.bzo,D.D8,A.aX,A.T)
D.bBk=new C.a0(983902,"MaterialIcons",!1)
D.bT7=w(["50%","25%","75%"],x.s)
D.fIz=new B.pO("Chance",D.bBk,D.D8,A.cy,D.bT7)
D.q8=new B.a_d(2,"out")
D.fIn=new B.pO("Light",A.qO,D.q8,A.dN,A.T)
D.fIo=new B.pO("Burst",A.l5,D.q8,A.bZ,A.T)
D.fIm=new B.pO("Ripple",A.y_,D.q8,A.b9,A.T)
D.fIv=new B.pO("Ball",A.ak8,D.q8,A.cy,A.T)
D.fIt=new B.pO("Comet",A.n_,D.q8,A.by,A.T)
D.bB4=new C.a0(983669,"MaterialIcons",!1)
D.fIy=new B.pO("Shake",D.bB4,D.q8,A.cr,A.T)
D.fIA=new B.pO("Pop",A.Fl,D.q8,A.bc,A.T)
D.fIq=new B.pO("Wash",A.MH,D.q8,A.p5,A.T)
D.ml=new C.bp(D.dV3,[D.fIp,D.fIl,D.fIw,D.fIs,D.fIx,D.fIu,D.fIr,D.fIz,D.fIn,D.fIo,D.fIm,D.fIv,D.fIt,D.fIy,D.fIA,D.fIq],C.ax("bp<n,pO>"))
D.dWB={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.BM=new C.bp(D.dWB,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dVf={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.yX=new B.Iw(0,"tv")
D.eD_=new B.lX("Samsung Neo QLED 8K",D.yX,F.DX,A.aX)
D.eCR=new B.lX("LG OLED evo G5",D.yX,A.e8,A.fX)
D.eCI=new B.lX("Sony Bravia 9",D.yX,A.qk,A.bq)
D.eCM=new B.lX("Apple TV 4K",D.yX,A.e2,A.bW)
D.eCJ=new B.lX("Bang and Olufsen Beovision",D.yX,F.DF,F.rO)
D.HS=new B.Iw(1,"iphone")
D.aKz=new B.lX("iPhone 18 Pro Max",D.HS,D.aec,A.c8)
D.vN=new B.Iw(3,"fold")
D.bhz=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eCW=new B.lX("iPhone Fold",D.vN,D.bhz,A.b4)
D.ua=new B.Iw(2,"android")
D.b4w=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.eCX=new B.lX("Samsung Galaxy S26 Ultra",D.ua,D.b4w,A.d4)
D.bby=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eCP=new B.lX("Samsung Galaxy Z Fold7",D.vN,D.bby,A.cv)
D.eCL=new B.lX("Google Pixel 10 Pro XL",D.ua,A.dL,A.bk)
D.eCT=new B.lX("Xiaomi 16 Ultra",D.ua,A.lw,A.cb)
D.eCO=new B.lX("Huawei Mate 80 Pro Max",D.ua,A.eM,A.aC)
D.eCK=new B.lX("OPPO Find X9 Ultra",D.ua,A.e9,A.bc)
D.eD1=new B.lX("Honor Magic V5",D.vN,A.dp,A.cu)
D.eCQ=new B.lX("vivo X300 Pro",D.ua,A.hs,A.cy)
D.RC=new B.Iw(4,"tablet")
D.eCV=new B.lX("iPad Pro M5",D.RC,A.dL,A.aX)
D.a50=new B.Iw(5,"reader")
D.eD2=new B.lX("Kindle Scribe",D.a50,A.eu,A.bq)
D.yY=new B.Iw(6,"computer")
D.eCU=new B.lX("MacBook Pro M5 Max",D.yY,A.dL,A.c8)
D.eCZ=new B.lX("iMac 32 inch",D.yY,A.bW,A.cv)
D.eCS=new B.lX("Pro Display XDR 8K",D.yY,A.lw,A.b9)
D.eCN=new B.lX("Sony Laser Projector",D.yY,A.cC,A.dN)
D.eCY=new B.lX("Luxury car touchscreen",D.yY,K.of,A.aC)
D.eD0=new B.lX("Apple Vision Pro",D.yY,A.k8,A.by)
D.lK=new C.bp(D.dVf,[D.eD_,D.eCR,D.eCI,D.eCM,D.eCJ,D.aKz,D.eCW,D.eCX,D.eCP,D.eCL,D.eCT,D.eCO,D.eCK,D.eD1,D.eCQ,D.eCV,D.eD2,D.eCU,D.eCZ,D.eCS,D.eCN,D.eCY,D.eD0],C.ax("bp<n,lX>"))
D.dVr={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bjS=new B.fI(20,4,13,!1)
D.bki=new B.fI(14,5,13.5,!1)
D.bk9=new B.fI(9,2.4,10,!1)
D.bkn=new B.fI(7,5,12.5,!1)
D.bkc=new B.fI(8,3.5,12,!1)
D.bjO=new B.fI(15,2,6,!1)
D.bkl=new B.fI(45,6,13.5,!0)
D.bk3=new B.fI(10,8,13.5,!1)
D.bjW=new B.fI(25,3,12,!0)
D.bk1=new B.fI(35,4,12,!0)
D.bk2=new B.fI(40,4.5,9.5,!0)
D.bk4=new B.fI(55,3,9,!0)
D.bjP=new B.fI(18,3,9,!1)
D.bkk=new B.fI(22,4,13.5,!1)
D.bkd=new B.fI(16,5,13.5,!1)
D.bk_=new B.fI(30,4,9,!0)
D.bkw=new B.fI(5,3.5,13,!1)
D.bk7=new B.fI(25,3,13.5,!0)
D.bkg=new B.fI(14,2.5,9,!1)
D.bk6=new B.fI(6,6,13,!1)
D.bko=new B.fI(30,1.2,5,!0)
D.bkv=new B.fI(35,3,4.5,!0)
D.bkr=new B.fI(20,4.5,7.5,!0)
D.bk5=new B.fI(55,5.5,13.5,!0)
D.bjN=new B.fI(45,5.5,13.5,!0)
D.bkh=new B.fI(40,5.5,13.5,!0)
D.bku=new B.fI(60,6,13.5,!0)
D.aeB=new B.fI(28,4,7,!0)
D.Ez=new B.fI(25,4,7,!0)
D.bjZ=new B.fI(30,4,7,!0)
D.bjU=new B.fI(22,4,7,!0)
D.bjV=new B.fI(24,4,7,!0)
D.bk8=new B.fI(60,3,5.5,!0)
D.bjQ=new B.fI(18,9,14,!0)
D.bjX=new B.fI(25,9,14,!0)
D.aeC=new B.fI(30,8,14,!0)
D.bjT=new B.fI(20,8,14,!0)
D.bk0=new B.fI(30,9,14,!0)
D.bkp=new B.fI(22,5,9.5,!0)
D.bjR=new B.fI(30,2.5,10.5,!0)
D.bke=new B.fI(50,5.5,13.5,!0)
D.bkt=new B.fI(12,2,9.5,!1)
D.bkb=new B.fI(16,1.3,9.5,!0)
D.bkm=new B.fI(40,2.5,7,!0)
D.bks=new B.fI(60,1.2,4.8,!0)
D.bkq=new B.fI(18,5,13.5,!0)
D.bkj=new B.fI(8,2,9.5,!1)
D.bka=new B.fI(12,2.5,8,!1)
D.bjY=new B.fI(20,3.5,13.5,!0)
D.bkf=new B.fI(3.5,3,13,!1)
D.yx=new C.bp(D.dVr,[D.bjS,D.bki,D.bk9,D.bkn,D.bkc,D.bjO,D.bkl,D.bk3,D.bjW,D.bk1,D.bk2,D.bk4,D.bjP,D.bkk,D.bkd,D.bk_,D.bkw,D.bk7,D.bkg,D.bk6,D.bko,D.bkv,D.bkr,D.bk5,D.bjN,D.bkh,D.bku,D.aeB,D.Ez,D.bjZ,D.Ez,D.bjU,D.Ez,D.bjV,D.aeB,D.Ez,D.bk8,D.bjQ,D.bjX,D.aeC,D.bjT,D.bk0,D.bkp,D.bjR,D.bke,D.bkt,D.bkb,D.bkm,D.bks,D.Ez,D.aeC,D.bkq,D.bkj,D.bka,D.bjY,D.bkf],C.ax("bp<n,fI>"))
D.dV2={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.etO=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ebI=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ebD=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.emG=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.enC=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.emC=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.e9U=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ekH=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.etX=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.enX=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eet=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.e9E=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.edy=new C.z("Movement","They pull your legs together and help you balance.")
D.efk=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ebQ=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.erB=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.esD=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eks=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.esn=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ejd=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eo4=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.e9J=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.efH=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.enM=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ejv=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.esv=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.em9=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.e9S=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eoB=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ere=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.epy=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.e8p=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.elS=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.elW=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.egk=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ebW=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ef9=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ekQ=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eqe=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.etU=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eo1=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.e8c=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.el0=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.e8N=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.equ=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.erx=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.elq=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eqJ=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.e9L=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.es2=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ed0=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.epX=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eg2=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ejr=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eok=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.esc=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.es4=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.es8=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ejU=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ep7=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.epv=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.erS=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.elp=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ehT=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.egL=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.elN=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eod=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ein=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ej1=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.edk=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ert=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ee5=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.e8K=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.egj=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.e8F=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ecf=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ego=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eee=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eox=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.efn=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.etB=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.egU=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ejO=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.emg=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eel=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ee7=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dgH=new C.bp(D.dV2,[D.etO,D.ebI,D.ebD,D.emG,D.enC,D.emC,D.e9U,D.ekH,D.etX,D.enX,D.eet,D.e9E,D.edy,D.efk,D.ebQ,D.erB,D.esD,D.eks,D.esn,D.ejd,D.eo4,D.e9J,D.efH,D.enM,D.ejv,D.esv,D.em9,D.e9S,D.eoB,D.ere,D.epy,D.e8p,D.elS,D.elW,D.egk,D.ebW,D.ef9,D.ekQ,D.eqe,D.etU,D.eo1,D.e8c,D.el0,D.e8N,D.equ,D.erx,D.elq,D.eqJ,D.e9L,D.es2,D.ed0,D.epX,D.eg2,D.ejr,D.eok,D.esc,D.es4,D.es8,D.ejU,D.ep7,D.epv,D.erS,D.elp,D.ehT,D.egL,D.elN,D.eod,D.ein,D.ej1,D.edk,D.ert,D.ee5,D.e8K,D.egj,D.e8F,D.ecf,D.ego,D.eee,D.eox,D.efn,D.etB,D.egU,D.ejO,D.emg,D.eel,D.ee7],C.ax("bp<n,+(n,n)>"))
D.dgJ=new C.hs(A.G,11)
D.dgO=new C.hs(A.G,30)
D.djA=new B.Td(null)
D.dno=new B.Th(null)
D.dnp=new B.Ti(null)
D.dnC=new B.Tj(null)
D.dpD=new B.Tl(null)
D.dpE=new B.Tm(null)
D.dpF=new B.Tn(null)
D.dqs=new B.TJ(null)
D.dqu=new B.TY(null)
D.dqv=new B.TZ(null)
D.dqw=new B.U_(null)
D.dr3=new B.U6(null)
D.dsZ=new B.Ua(null)
D.dt_=new B.Uc(null)
D.dt0=new B.Ud(null)
D.dt2=new B.Ue(null)
D.duC=new B.Uv(null)
D.duE=new B.Ux(null)
D.duJ=new B.UH(null)
D.duU=new B.UI(null)
D.dvp=new B.UJ(null)
D.dwU=new B.UL(null)
D.dyh=new B.UN(null)
D.dyi=new B.UO(null)
D.dzD=new B.UR(null)
D.dPw=new B.US(null)
D.dPx=new B.UU(null)
D.dPy=new B.UX(null)
D.dPz=new B.UY(null)
D.dRs=new B.V5(null)
D.dRt=new B.V6(null)
D.dRB=new B.Vd(null)
D.dRK=new B.Vh(null)
D.dRL=new B.Vi(null)
D.dRM=new B.a7a(null)
D.dSm=new B.Vk(null)
D.dTP=new B.Vo(null)
D.dX1=new C.u(0,118)
D.aEm=new C.u(0,13)
D.dX2=new C.u(0,17)
D.dX5=new C.u(0,330)
D.dX8=new C.u(0,-13)
D.aEs=new C.u(0,-14)
D.dX9=new C.u(0,-17)
D.dXa=new C.u(0,-18)
D.dXb=new C.u(0,-19)
D.dXc=new C.u(0,-20)
D.dXf=new C.u(0,-26)
D.dXg=new C.u(0,-28)
D.dXh=new C.u(0,-31)
D.dXi=new C.u(0,-32)
D.vG=new C.u(0,-6)
D.dXj=new C.u(0,-6771)
D.dXk=new C.u(0,-9)
D.dXm=new C.u(-9.5,-11)
D.dXn=new C.u(10,20)
D.dXp=new C.u(10,-13)
D.dXq=new C.u(10,-22)
D.dXr=new C.u(10,-4)
D.a3W=new C.u(11,8)
D.dXt=new C.u(12,2)
D.dXu=new C.u(14,0)
D.dXv=new C.u(14,12)
D.aEw=new C.u(14,8)
D.dXw=new C.u(14,-17)
D.dXx=new C.u(14,-18)
D.aEx=new C.u(14,-3)
D.aEy=new C.u(14,-4)
D.dXy=new C.u(15,0)
D.dXz=new C.u(15,-12)
D.dXA=new C.u(16,-8)
D.dXB=new C.u(18,14)
D.dXC=new C.u(18,-12)
D.aEC=new C.u(20,0)
D.dXI=new C.u(20,15)
D.dXJ=new C.u(20,-17)
D.dXK=new C.u(20,-3)
D.dXL=new C.u(21,8)
D.dXN=new C.u(22,10)
D.aED=new C.u(22,8)
D.dXO=new C.u(24,0)
D.dXP=new C.u(24,2)
D.dXR=new C.u(24,-18)
D.dXS=new C.u(24,-22)
D.dXT=new C.u(25,8)
D.dXU=new C.u(26,0)
D.dY_=new C.u(28,-30)
D.dY4=new C.u(30,18)
D.dY5=new C.u(30,2)
D.dY6=new C.u(31,19)
D.dY7=new C.u(32,0)
D.aEG=new C.u(34,0)
D.aEH=new C.u(34,-32)
D.Ht=new C.u(36,0)
D.dYc=new C.u(3,-1)
D.dYf=new C.u(40,3)
D.dYj=new C.u(4,11)
D.dYm=new C.u(4,-2)
D.dYq=new C.u(5,0)
D.dYr=new C.u(5,17)
D.dYs=new C.u(5,6)
D.dYv=new C.u(6,11)
D.dYB=new C.u(8,7)
D.dYC=new C.u(8,-10)
D.dYD=new C.u(8,-14)
D.dYE=new C.u(8,-3)
D.aEL=new C.u(9,0)
D.dYH=new C.u(-20.5,-17.6)
D.dYI=new C.u(-9,18.5)
D.dYL=new C.u(-2.6,-1)
D.dYM=new C.u(1.9,-0.8)
D.dYP=new C.u(-0.22,0.09)
D.dYU=new C.u(2.6,1)
D.dZ0=new C.u(-9,12.2)
D.dZi=new C.u(-9,20.5)
D.dZA=new C.u(-10,0)
D.dZB=new C.u(-10,12)
D.aES=new C.u(-10,4)
D.dZC=new C.u(-11,-2)
D.dZD=new C.u(-13,-5)
D.dZE=new C.u(-14,0)
D.dZF=new C.u(-14,13)
D.dZG=new C.u(-14,2)
D.dZH=new C.u(-14,-12)
D.dZI=new C.u(-14,-19)
D.dZJ=new C.u(-14,-23)
D.dZK=new C.u(-15,6)
D.dZL=new C.u(-16,14)
D.dZM=new C.u(-16,-8)
D.dZN=new C.u(-17,10)
D.dZO=new C.u(-17,-18)
D.dZP=new C.u(-17,-8)
D.dZR=new C.u(-18,20)
D.dZS=new C.u(-18,-9)
D.aEU=new C.u(-20,0)
D.dZU=new C.u(-20,16)
D.dZV=new C.u(-20,-9)
D.R6=new C.u(-22,8)
D.dZW=new C.u(-22,-10)
D.dZX=new C.u(-22,-11)
D.dZY=new C.u(-24,10)
D.dZZ=new C.u(-24,11)
D.e__=new C.u(-24,14)
D.e_0=new C.u(-24,-22)
D.e_1=new C.u(-25,-11)
D.e_2=new C.u(-26,0)
D.e_3=new C.u(-26,-18)
D.e_4=new C.u(-2,9)
D.e_5=new C.u(-2,-10)
D.e_6=new C.u(-2,-20)
D.e_7=new C.u(-2,-9)
D.e_8=new C.u(-32,0)
D.aEW=new C.u(-34,0)
D.e_d=new C.u(-40,3)
D.e_f=new C.u(-4,11)
D.e_g=new C.u(-4,-17)
D.e_h=new C.u(-4,-2)
D.e_j=new C.u(-5,0)
D.e_k=new C.u(-5,20)
D.e_l=new C.u(-5,6)
D.e_m=new C.u(-6,26)
D.e_n=new C.u(-6,6)
D.e_o=new C.u(-6,-42)
D.e_p=new C.u(-7,-19)
D.e_q=new C.u(-7,-24)
D.e_r=new C.u(-8,-9)
D.a4_=new C.u(-9,0)
D.e_s=new C.u(-9,1)
D.e_t=new C.u(-9,-23)
D.f6t=new C.x("Thinking\u2026",null,A.hn,null,null,null,null,null,null,null,null,null)
D.e0p=new C.C(A.kb,D.f6t,null)
D.flU=new C.x("Start from a ready-made board",null,A.fW,null,null,null,null,null,null,null,null,null)
D.e0z=new C.C(A4.uZ,D.flU,null)
D.brD=new C.Q(4,0,4,14)
D.f21=new C.F(!0,A.ay,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new C.x("Games and little helpers for a spare minute.",null,D.f21,null,null,null,null,null,null,null,null,null)
D.e0H=new C.C(D.brD,D.f7o,null)
D.fiS=new C.x("Tap to throw in a star",null,A.kq,null,null,null,null,null,null,null,null,null)
D.b26=new C.cq(A.A,null,null,D.fiS,null)
D.e6n=new C.cK(0,null,0,14,null,null,D.b26,null)
D.d17=w([A.iH,A.bp],x.O)
D.aJN=new C.bR(A.A,0.5,A.x,null,0,D.d17,null,null)
D.e74=new C.bR(A.A,0.5,A.x,null,0,D.aw9,null,null)
D.cTW=w([A.c,A.bI],x.O)
D.e76=new C.bR(A.A,0.5,A.x,null,0,D.cTW,null,null)
D.e77=new C.bR(A.A,0.5,A.x,null,0,L.avg,null,null)
D.d8n=w([A.bW,A.k8],x.O)
D.aJO=new C.bR(A.A,0.5,A.x,null,0,D.d8n,null,null)
D.czv=w([A.c,A.bW],x.O)
D.e7b=new C.bR(A.rv,0.5,A.x,null,0,D.czv,null,null)
D.b9_=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.be8=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cT_=w([D.b9_,D.adP,D.be8],x.O)
D.d_e=w([0,0.7,1],x.n)
D.e7d=new C.bR(A.rv,0.5,A.x,null,0,D.cT_,D.d_e,null)
D.cq3=w([A.oh,A.aJ,A.K],x.O)
D.d5k=w([0.3,0.7,1],x.n)
D.e7f=new C.bR(A.A,0.5,A.x,null,0,D.cq3,D.d5k,null)
D.bhC=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d6F=w([A.f5,D.bhC],x.O)
D.e7h=new C.bR(A.rv,0.5,A.x,null,0,D.d6F,null,null)
D.csO=w([A.dL,A.cC],x.O)
D.e7i=new C.bR(A.A,0.5,A.x,null,0,D.csO,null,null)
D.cOC=w([A.oh,A.aJ,A.fB],x.O)
D.e7j=new C.bR(A.A,0.5,A.x,null,0,D.cOC,null,null)
D.cHe=w([A.fZ,A.aM,A.dj],x.O)
D.e7l=new C.bR(A.rv,0.5,A.x,null,0,D.cHe,null,null)
D.d1D=w([A.k8,K.of],x.O)
D.e7m=new C.bR(A.rv,0.5,A.x,null,0,D.d1D,null,null)
D.b9c=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b7m=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cQQ=w([D.b9c,D.b7m],x.O)
D.e7o=new C.bR(A.A,0.5,A.x,null,0,D.cQQ,null,null)
D.bdB=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bbF=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bbJ=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.daz=w([D.bdB,D.bbF,D.bbJ],x.O)
D.cNq=w([0,0.65,1],x.n)
D.e7p=new C.bR(L.a8r,0.5,A.x,null,0,D.daz,D.cNq,null)
D.e7q=new C.bR(A.A,0.5,A.x,null,0,D.asO,null,null)
D.d7E=w([A.lt,A.aJ,A.fB],x.O)
D.e7u=new C.bR(A.A,0.5,A.x,null,0,D.d7E,null,null)
D.d98=w([A.k8,A.hB],x.O)
D.e7x=new C.bR(A.A,0.5,A.x,null,0,D.d98,null,null)
D.aJT=new C.aV(9,9)
D.e7G=new C.aV(1.4,1.4)
D.e8j=new C.z(0,-4)
D.ecY=new C.z(0.22,4)
D.ejM=new C.z(0.8,-4)
D.es5=new C.z(0.58,4)
D.euE=new C.bz("Moon",1.62,4291941851)
D.evb=new C.bz("Neptune",11.15,4284524026)
D.evL=new C.bz("Sun",274,4294688548)
D.ew_=new C.bz("Mercury",3.7,4288455599)
D.ew5=new C.bz("Earth",9.81,4281908728)
D.ew7=new C.bz("Mars",3.71,4294472049)
D.ewq=new C.bz("Venus",8.87,4294759245)
D.ewv=new C.bz("Saturn",10.44,4294829706)
D.ewP=new C.bz("Jupiter",24.79,4294677052)
D.eAa=new C.aa(10,-8,18,-2)
D.eAb=new C.aa(14,-14,20,14)
D.eAc=new C.aa(20,-2,30,2)
D.eAe=new C.aa(4,-13,30,-3)
D.eAg=new C.aa(8,-7,12,7)
D.eAm=new C.aa(-12,12,12,19)
D.eAn=new C.aa(-12,14,12,22)
D.eAo=new C.aa(-12,-22,12,8)
D.eAp=new C.aa(-12,-25,12,19)
D.eAq=new C.aa(-12,-26,12,-6)
D.eAr=new C.aa(-12,-4,12,14)
D.eAs=new C.aa(-12,-6,10,6)
D.eAt=new C.aa(-14,20,14,24)
D.eAu=new C.aa(-14,6,14,10)
D.eAv=new C.aa(-14,-17,14,15)
D.eAw=new C.aa(-14,-26,14,18)
D.eAx=new C.aa(-14,-4,14,20)
D.eAy=new C.aa(-15,-29,15,25)
D.eAz=new C.aa(-16,-16,16,16)
D.eAA=new C.aa(-16,-22,-9,18)
D.eAB=new C.aa(-16,-24,16,-10)
D.eAC=new C.aa(-16,-2,16,20)
D.eAE=new C.aa(-18,20,18,24)
D.eAF=new C.aa(-18,-18,18,20)
D.eAG=new C.aa(-20,12,20,22)
D.eAH=new C.aa(-20,-28,20,26)
D.eAI=new C.aa(-22,14,22,18)
D.aKh=new C.aa(-22,-26,22,24)
D.eAJ=new C.aa(-22,-3,22,3)
D.eAK=new C.aa(-22,-4,22,12)
D.eAL=new C.aa(-24,-12,10,22)
D.eAM=new C.aa(-24,-14,22,8)
D.eAN=new C.aa(-24,-6,24,20)
D.aKi=new C.aa(-24,-9,24,9)
D.eAO=new C.aa(-25,14,25,19)
D.eAP=new C.aa(-26,-14,14,8)
D.eAQ=new C.aa(-26,-4,26,20)
D.eAR=new C.aa(-26,-6,4,6)
D.aKj=new C.aa(-28,-13,28,13)
D.eAS=new C.aa(-28,-16,28,16)
D.eAT=new C.aa(-28,-16,28,8)
D.eAU=new C.aa(-28,-22,28,22)
D.eAV=new C.aa(-30,-12,30,14)
D.eAW=new C.aa(-30,-14,0,14)
D.eAX=new C.aa(-30,-18,30,20)
D.eAY=new C.aa(-30,-28,30,14)
D.eAZ=new C.aa(-30,-2,30,18)
D.eB_=new C.aa(-30,-4,30,18)
D.eB0=new C.aa(-32,-17,32,17)
D.eB1=new C.aa(-32,-28,32,18)
D.eB2=new C.aa(-33,-21,33,17)
D.eB3=new C.aa(-34,14,34,26)
D.a4T=new C.aa(-34,-18,34,18)
D.eB4=new C.aa(-34,-4,34,7)
D.eB5=new C.aa(-36,-24,36,20)
D.eB6=new C.aa(-38,-22,38,22)
D.eB7=new C.aa(-3,12,3,22)
D.eB8=new C.aa(-3,5,3,15)
D.eBa=new C.aa(-46,-34,46,28)
D.eBb=new C.aa(-48,-3,48,3)
D.eBe=new C.aa(-6,18,24,24)
D.eBf=new C.aa(-6,5,6,12)
D.eBg=new C.aa(-6,-22,6,-15)
D.eBh=new C.aa(-9,-16,9,22)
D.eBi=new C.aa(-4.5,-24,4.5,-21.2)
D.eBk=new C.aa(14,-9,17.5,9)
D.dWv={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aL9=new C.eU(D.dWv,5,x.R)
D.dWa={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eE4=new C.eU(D.dWa,10,x.R)
D.eG1=new C.at(24,44)
D.eG6=new C.at(300,300)
D.eGq=new C.at(54,38)
D.eGx=new C.at(66,38)
D.b3k=new C.fh(2,null,null,null,null,A.by,null,null,null,null)
D.eHt=new C.a6(16,16,D.b3k,null)
D.aM8=new C.hH(3,12,12,0.82,null)
D.fnx=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aMj=new C.b1(D.fnx,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.d1G=w([A.cr,A.cq,A.bc,A.aX,A.p5,A.cr],x.O)
D.eNl=new C.fR(A.A,0,6.283185307179586,A.x,D.d1G,null,null)
D.eW2=new C.F(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.Pe,null,null,null)
D.eOp=new C.eo("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.eW2)
D.aOI=new C.F(!0,A.ay,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOq=new C.eo("What we see",null,null,A.cO,null,null,null,null,null,null,D.aOI)
D.eTt=new C.F(!0,A1.V1,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOt=new C.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eTt)
D.eYe=new C.F(!0,A.k3,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOz=new C.eo("AI",null,null,A.cO,null,null,null,null,null,null,D.eYe)
D.eTe=new C.F(!0,A.c_,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOA=new C.eo("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eTe)
D.aN6=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOP=new C.F(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOR=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePm=new C.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePF=new C.F(!0,A.cu,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQa=new C.F(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQf=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQv=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQY=new C.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRj=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRt=new C.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEA=new C.cP(A.hE,A.dz,6)
D.cWB=w([D.eEA],x.q)
D.eRM=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cWB,null,null,null)
D.eRP=new C.F(!0,A.es,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRS=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRU=new C.F(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSi=new C.F(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNt=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSC=new C.F(!0,A.ay,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new C.F(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTw=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU0=new C.F(!0,A.ay,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUu=new C.F(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eED=new C.cP(A.aW,A.J,3)
D.awp=w([D.eED],x.q)
D.eUx=new C.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awp,null,null,null)
D.eUC=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVi=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.Pe,null,null,null)
D.eVK=new C.F(!0,A.ay,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVS=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWh=new C.F(!0,A.uJ,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWx=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWQ=new C.F(!0,A.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWV=new C.F(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX_=new C.F(!0,A.ay,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new C.F(!0,A.ay,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXx=new C.F(!0,A.c_,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXK=new C.F(!0,A.mK,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new C.F(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new C.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO8=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEr=new C.cP(A.w,A.J,5)
D.cLb=w([D.eEr],x.q)
D.eYz=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cLb,null,null,null)
D.eYE=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awp,null,null,null)
D.eYT=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYY=new C.F(!0,A.fn,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZe=new C.F(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZJ=new C.F(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_f=new C.F(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_T=new C.F(!0,A.ay,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f02=new C.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOt=new C.F(!0,A.ay,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0E=new C.F(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0L=new C.F(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Iy=new C.F(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f15=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOF=new C.F(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f18=new C.F(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1S=new C.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6S=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new C.F(!0,A.uJ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2z=new C.F(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRX=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2X=new C.x("\u26a0\ufe0f ",null,D.eRX,null,null,null,null,null,null,null,null,null)
D.f37=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.Ix,null,null,null,null,null,null,null,null,null)
D.f3y=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mu,null,null,null,null,null,null,null,null,null)
D.f4z=new C.x("Pick one, then change it and see what happens.",null,A.Ix,null,null,null,null,null,null,null,null,null)
D.f4D=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eT0=new C.F(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eT0,null,null,null,null,null,null,null,null,null)
D.f5V=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a67,null,null,null,null,null,null,null,null,null)
D.f70=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.f7A=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f7F=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.f8c=new C.x("Make it yours",null,A.kS,null,null,null,null,null,null,null,null,null)
D.f8r=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6f,null,null,null,null,null,null,null,null,null)
D.eXa=new C.F(!0,A.j2,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faB=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eXa,null,null,null,null,null,null,null,null,null)
D.faQ=new C.x("YOUR DECODING",null,Q.mu,null,null,null,null,null,null,null,null,null)
D.fb1=new C.x("5G",null,R.aNw,null,null,null,null,null,null,null,null,null)
D.eZu=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new C.x("WHAT HAPPENS",null,D.eZu,null,null,null,null,null,null,null,null,null)
D.fdM=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fer=new C.x("Change the words and pictures on the three slabs.",null,A.Ix,null,null,null,null,null,null,null,null,null)
D.feC=new C.x("All the parts and wires will be removed.",null,A.hz,null,null,null,null,null,null,null,null,null)
D.feW=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fgl=new C.x("INTERCEPTED",null,Q.mu,null,null,null,null,null,null,null,null,null)
D.fgF=new C.x("\ud83c\udfaf Challenges",null,A.dB,null,null,null,null,null,null,null,null,null)
D.fh9=new C.x("Remove this part",null,U.aN9,null,null,null,null,null,null,null,null,null)
D.fhr=new C.x("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.eYZ=new C.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new C.x("How the Lab works",null,D.eYZ,null,null,null,null,null,null,null,null,null)
D.eQI=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new C.x("Electronics Lab",null,D.eQI,null,null,null,null,A.a2,null,1,null,null)
D.fhZ=new C.x("?",null,L.aOC,null,null,null,null,null,null,null,null,null)
D.eX4=new C.F(!0,A.aX,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new C.x("Planet Earth",null,D.eX4,null,null,null,null,null,null,null,null,null)
D.fjb=new C.x("Ready-made circuits",null,A.dB,null,null,null,null,null,null,null,null,null)
D.fjL=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fk3=new C.x("UNIVERSE EXPLORER",null,I.a6e,null,null,null,null,null,null,null,null,null)
D.fmr=new C.x("SECRET VERSION",null,Q.mu,null,null,null,null,null,null,null,null,null)
D.f0P=new C.F(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f0P,null,null,null,null,null,null,null,null,null)
D.fo7=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a67,null,null,null,null,null,null,null,null,null)
D.foB=new C.x("NGMY",null,A.ui,null,null,null,null,null,null,null,null,null)
D.foN=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a6E,null,null,null,null,null,null,null,null,null)
D.fp9=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.lj,null,null,null,null,null,null,null,null,null)
D.fq4=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.Ix,null,null,null,null,null,null,null,null,null)
D.fq6=new C.x("TOOLBOX",null,I.a6e,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h4S=null
$.h4R=null
$.haQ=0
$.hCw=C.V(x.N,x.k)
$.hD6=C.V(x.N,x.k)
$.h4d=null
$.hCS=C.V(x.N,x.k)
$.hDU=C.V(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i86","bBX",()=>{var v="led"
return C.a([B.awB("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f8G(),v),B.awB("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f8H(),v),B.awB("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f8I(),v),B.awB("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.f8P(),v),B.awB("Not both","Make the light go OFF only when both switches are ON.",2,new B.f8Q(),v),B.awB("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.f8R(),"buzzer")],C.ax("O<b8S>"))})
w($,"i8x","bBY",()=>C.a([B.oo("UNIVERSE","Earth, space and gravity",A.a_f,A.aX,new B.f96()),B.oo("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.ZD,A.aX,new B.f97()),B.oo("DISCOVERY LAB","Body Explorer: a real 3D human",D.Zu,A.bc,new B.f98()),B.oo("TOOLBOX","Converter, clock, games",K.aiX,A.cy,new B.f9j()),B.oo("MOLECULE MAKER","Join atoms into real molecules",A.Mt,A.ht,new B.f9l()),B.oo("DNA LAB","Copy DNA, build a protein",D.Zu,A.bZ,new B.f9m()),B.oo("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xN,A.bc,new B.f9n()),B.oo("BALANCE LAB","Levers, weight and torque",D.bBc,A.aM,new B.f9o()),B.oo("GEAR LAB","Teeth, speed and force",A.Ba,A.cy,new B.f9p()),B.oo("LASER MAZE","Bend the beam with mirrors",I.ajk,A.aC,new B.f9q()),B.oo("LIGHT MIXER","Match colours with light",D.byW,A.b9,new B.f9r()),B.oo("CIPHER LAB","Make and crack secret codes",A.xZ,A.aX,new B.f99()),B.oo("REACTION LAB","Wire parts together",A.y2,A.bs,new B.f9a()),B.oo("SPARK PAINTER","Paint with light",A.Zw,A.bZ,new B.f9b()),B.oo("ROCKET LANDER","Land softly on the pad",A.n_,A.aX,new B.f9c()),B.oo("ORBIT STUDIO","Slingshot planets",A.me,A.cy,new B.f9d()),B.oo("SWARM STUDIO","A living school of fish",A.Mt,A.bc,new B.f9e()),B.oo("CHAIN BURST","One tap, a whole chain",A.h6,A.bZ,new B.f9f()),B.oo("TITLE ANIMATOR","Make a moving title",A.xV,A.cq,new B.f9g()),B.oo("CIRCUIT LAB","Connect logic, learn it",A.ZX,A.cu,new B.f9h()),B.oo("MARBLE MUSIC","Marbles ring the notes",D.byC,A.b9,new B.f9i()),B.oo("ORBIT SEQUENCER","Planets play the tune",D.bB0,A.by,new B.f9k())],C.ax("O<bqt>")))
w($,"ia1","q_",()=>{var v,u,t=C.V(x.N,x.dV)
for(v=0;v<76;++v){u=D.Pv[v]
t.n(0,u.a,u)}return t})
w($,"i87","agu",()=>C.a([B.EY("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.f8S()),B.EY("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.f8T()),B.EY("Spin the motor","A battery and a motor in a loop will make it spin.",new B.f8U()),B.EY("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.f8V()),B.EY("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.f8W()),B.EY("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.f8J()),B.EY("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.f8K()),B.EY("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.f8L()),B.EY("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.f8M()),B.EY("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.f8N()),B.EY("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.f8O())],C.ax("O<b8T>")))
w($,"i8z","hj9",()=>C.a([B.a_I("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cb,new B.f9z()),B.a_I("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cr,A.bL,new B.f9A()),B.a_I("Breathe","Calm down in a minute","\ud83e\udee7",A.ht,A.cv,new B.f9B()),B.a_I("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b4,new B.f9C()),B.a_I("Memory Match","Find the pairs","\ud83c\udccf",A.aX,A.c8,new B.f9D()),B.a_I("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cq,A.bk,new B.f9E()),B.a_I("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.aZ,new B.f9F()),B.a_I("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.f9G())],C.ax("O<brN>")))
w($,"i8y","hj8",()=>C.a([B.adS("EARTH GLOBE","Turn it, tap a country",A.me,A.aX,new B.f9s()),B.adS("SOLAR SYSTEM","The Sun and its worlds",D.byG,A.aM,new B.f9t()),B.adS("GRAVITY LAB","Drop, weigh, orbit",D.ak6,A.cy,new B.f9u()),B.adS("BLACK HOLE","Throw in a star",A.Fa,A.by,new B.f9v()),B.adS("GALAXY","Build, tilt, collide",A.xA,A.fY,new B.f9w()),B.adS("SIZE COMPARE","Earth next to a star",D.byY,A.bZ,new B.f9x()),B.adS("SEASONS & MOON","Why it is summer",A.v6,A.bs,new B.f9y())],C.ax("O<brI>")))})()};
(a=>{a["1yz5rcho7Xa0xLhJGeoByGjus2I="]=a.current})($__dart_deferred_initializers__);