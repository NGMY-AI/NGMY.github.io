((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Aa,A2,A3,I,P,A4,Ab,A5,A6,G,Ac,Ad,A7,Ae,Y,Af,Ag,N,Q,Ah,Ai,Z,O,V,Aj,Ak,R,M,Al,W,K,S,Am,E,F,L,B={
byB(d){return B.hOS(d)},
hOS(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byB=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qM(C.n3(""),d,A.hp,null).cO(0,A.XQ),$async$byB)
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
return C.i($async$byB,v)},
i_s(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PQ[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hu(D.PQ,new B.fuD())
if(w==null)w=A.d.gJ(D.PQ)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qc().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gJ(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajs(w.a,w.b,m,w,s,!1)},
hUa(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.L(D.Qe,new B.fl8(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i7j(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cK(b2,"{")
v=A.a.oD(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aH(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.qc().ai(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dfV[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.e7([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
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
while(a0.C()){a2=a0.gR(a0)
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
return new B.ajs(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hZ2(d){var w,v,u=B.h42()
d.B(u)
for(w=0;w<60;++w)u.v2(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.frB(u))&&!A.d.d7(v,new B.frC())},
hZ1(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qc().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dem,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hNn(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i_r(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qc().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qe[u]
if(A.d.b4(w,new B.fuA(s)))if(!C.cX(r,s.b.toLowerCase(),0))v=C.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a0(w,new B.fuB(e),C.U(w).k("a0<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cJ(w,0,new B.fuC())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gJ(w)
w=$.qc().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajs:function ajs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuD:function fuD(){},
fl8:function fl8(){},
frB:function frB(d){this.a=d},
frC:function frC(){},
fuA:function fuA(d){this.a=d},
fuB:function fuB(d){this.a=d},
fuC:function fuC(){},
V4:function V4(d,e){this.c=d
this.a=e},
bjg:function bjg(d,e,f,g,h){var _=this
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
e62:function e62(d){this.a=d},
e63:function e63(d,e,f){this.a=d
this.b=e
this.c=f},
e64:function e64(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e69:function e69(d,e){this.a=d
this.b=e},
e6a:function e6a(d,e,f){this.a=d
this.b=e
this.c=f},
e6c:function e6c(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e67:function e67(d){this.a=d},
e68:function e68(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6d:function e6d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e66:function e66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6e:function e6e(d,e){this.a=d
this.b=e},
e65:function e65(d,e){this.a=d
this.b=e},
e6j:function e6j(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6k:function e6k(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6o:function e6o(d,e){this.a=d
this.b=e},
byX(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPo,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hhv(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bW(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VW,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FS:function FS(d,e,f,g){var _=this
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
aDG:function aDG(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fp$=h
_.l0$=i
_.fS$=j
_.fq$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
em8:function em8(){},
ems:function ems(d){this.a=d},
emr:function emr(d,e){this.a=d
this.b=e},
emt:function emt(){},
emu:function emu(){},
ema:function ema(d,e,f){this.a=d
this.b=e
this.c=f},
em9:function em9(d,e){this.a=d
this.b=e},
em_:function em_(d){this.a=d},
em0:function em0(d){this.a=d},
em1:function em1(d){this.a=d},
em2:function em2(d){this.a=d},
em3:function em3(d){this.a=d},
em4:function em4(d){this.a=d},
em5:function em5(d){this.a=d},
em6:function em6(d){this.a=d},
em7:function em7(d){this.a=d},
elY:function elY(d){this.a=d},
elZ:function elZ(d){this.a=d},
elX:function elX(d){this.a=d},
eml:function eml(d,e){this.a=d
this.b=e},
emg:function emg(d){this.a=d},
emh:function emh(d){this.a=d},
emd:function emd(d){this.a=d},
emi:function emi(d){this.a=d},
emc:function emc(d){this.a=d},
emj:function emj(d){this.a=d},
emk:function emk(d){this.a=d},
emb:function emb(d){this.a=d},
emm:function emm(d,e){this.a=d
this.b=e},
emf:function emf(d,e){this.a=d
this.b=e},
emn:function emn(d){this.a=d},
emo:function emo(d){this.a=d},
emp:function emp(d){this.a=d},
emq:function emq(d){this.a=d},
eme:function eme(d){this.a=d},
bgf:function bgf(d,e){this.b=d
this.a=e},
aLx:function aLx(){},
bwz:function bwz(){},
cEy(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEy=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qP().jz(0,"assets/data/body3d.bin"),$async$cEy)
case 3:d=a1
$.hcR=J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)
t=C.aRC(d)
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
e=D.d3K[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2G(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aXm))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9m(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEy,v)},
aRp:function aRp(d,e,f){this.a=d
this.b=e
this.c=f},
a2G:function a2G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9m:function b9m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TX:function TX(d){this.a=d},
aC5:function aC5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fp$=s
_.l0$=t
_.fS$=u
_.fq$=v
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
aKz:function aKz(){},
aKA:function aKA(){},
c_S:function c_S(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_T:function c_T(d,e){this.a=d
this.b=e},
c_U:function c_U(d){this.a=d},
axA(d,e,f,g,h){return new B.ba4(d,e,f,g,h)},
fVT(d,e,f,g,h,i){return $.hKL.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cLk(d,e,f,i,g,h))},
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
nk:function nk(d,e,f){this.a=d
this.b=e
this.c=f},
ba4:function ba4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffa:function ffa(){},
ffb:function ffb(){},
ffc:function ffc(){},
ffj:function ffj(){},
ffk:function ffk(){},
ffl:function ffl(){},
U1:function U1(d){this.a=d},
aC8:function aC8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fp$=m
_.l0$=n
_.fS$=o
_.fq$=p
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
ban:function ban(d,e){this.b=d
this.a=e},
cLk:function cLk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKF:function aKF(){},
bwi:function bwi(){},
hBA(){return new B.N5(null)},
ox(d,e,f,g,h){return new B.brU(d,e,f,g,h)},
bqk(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fWo(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
N5:function N5(d){this.a=d},
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
aCp:function aCp(d){var _=this
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
brU:function brU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffB:function ffB(){},
ffC:function ffC(){},
ffD:function ffD(){},
ffO:function ffO(){},
ffQ:function ffQ(){},
ffR:function ffR(){},
ffS:function ffS(){},
ffT:function ffT(){},
ffU:function ffU(){},
ffV:function ffV(){},
ffW:function ffW(){},
ffE:function ffE(){},
ffF:function ffF(){},
ffG:function ffG(){},
ffH:function ffH(){},
ffI:function ffI(){},
ffJ:function ffJ(){},
ffK:function ffK(){},
ffL:function ffL(){},
ffM:function ffM(){},
ffN:function ffN(){},
ffP:function ffP(){},
bql:function bql(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWP:function eWP(d){this.a=d},
eWO:function eWO(d,e){this.a=d
this.b=e},
eWM:function eWM(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWN:function eWN(d,e){this.a=d
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
brj:function brj(d,e){this.b=d
this.a=e},
bqP:function bqP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b93:function b93(d,e){this.b=d
this.a=e},
aGF:function aGF(d,e){this.c=d
this.a=e},
aGG:function aGG(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cQ$=e
_.b2$=f
_.c=_.a=null},
eWv:function eWv(d){this.a=d},
eWu:function eWu(d){this.a=d},
eWt:function eWt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWs:function eWs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWq:function eWq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWp:function eWp(d,e,f){this.a=d
this.b=e
this.c=f},
eWr:function eWr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eWo:function eWo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWD:function eWD(d){this.a=d},
eWC:function eWC(d){this.a=d},
eWE:function eWE(d,e){this.a=d
this.b=e},
eWF:function eWF(d,e){this.a=d
this.b=e},
eWG:function eWG(d,e){this.a=d
this.b=e},
eWB:function eWB(d,e,f){this.a=d
this.b=e
this.c=f},
eWH:function eWH(d,e,f){this.a=d
this.b=e
this.c=f},
eWA:function eWA(d){this.a=d},
eWw:function eWw(d){this.a=d},
eWI:function eWI(d){this.a=d},
eWJ:function eWJ(d){this.a=d},
eWz:function eWz(d,e){this.a=d
this.b=e},
eWK:function eWK(d,e){this.a=d
this.b=e},
eWy:function eWy(d,e){this.a=d
this.b=e},
eWL:function eWL(d,e){this.a=d
this.b=e},
eWx:function eWx(d,e){this.a=d
this.b=e},
eWm:function eWm(){},
eWn:function eWn(){},
bpY:function bpY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpp:function bpp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9J:function b9J(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpr:function bpr(d,e,f){this.b=d
this.c=e
this.a=f},
bto:function bto(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMo:function aMo(){},
hiV(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bge(d,e,f,g,h,i){return $.hLl.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dgi(d,e,f,i,g,h))},
a_V:function a_V(d,e){this.a=d
this.b=e},
q0:function q0(d,e,f,g,h){var _=this
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
a07:function a07(d,e,f,g,h,i){var _=this
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
bgc:function bgc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bM$=0},
dgm:function dgm(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgj:function dgj(d,e){this.a=d
this.b=e},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
FE:function FE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vv:function Vv(d){this.a=d},
aDF:function aDF(d,e,f,g,h,i,j){var _=this
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
elt:function elt(d){this.a=d},
eli:function eli(d){this.a=d},
elk:function elk(){},
ell:function ell(){},
elo:function elo(){},
elp:function elp(d,e,f){this.a=d
this.b=e
this.c=f},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
elm:function elm(){},
eln:function eln(d){this.a=d},
elT:function elT(d){this.a=d},
els:function els(){},
ele:function ele(d){this.a=d},
elv:function elv(d){this.a=d},
elu:function elu(d){this.a=d},
elx:function elx(){},
elw:function elw(d,e){this.a=d
this.b=e},
elh:function elh(){},
elf:function elf(d){this.a=d},
elg:function elg(d){this.a=d},
elR:function elR(d){this.a=d},
elQ:function elQ(d){this.a=d},
elS:function elS(d){this.a=d},
elH:function elH(d,e){this.a=d
this.b=e},
elP:function elP(d){this.a=d},
elN:function elN(d){this.a=d},
elO:function elO(d){this.a=d},
elM:function elM(d){this.a=d},
elL:function elL(d){this.a=d},
elI:function elI(d){this.a=d},
elJ:function elJ(d){this.a=d},
elK:function elK(d){this.a=d},
elj:function elj(){},
elD:function elD(d){this.a=d},
elE:function elE(d){this.a=d},
elC:function elC(d){this.a=d},
elF:function elF(d){this.a=d},
elB:function elB(d){this.a=d},
elG:function elG(d){this.a=d},
elA:function elA(d){this.a=d},
elz:function elz(d){this.a=d},
ely:function ely(d,e){this.a=d
this.b=e},
bgd:function bgd(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgi:function dgi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLv:function aLv(){},
bkN:function bkN(d,e,f,g,h){var _=this
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
bjR:function bjR(d,e,f,g,h,i,j,k){var _=this
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
exy:function exy(d){this.a=d},
exw:function exw(d){this.a=d},
exx:function exx(){},
ex9:function ex9(){},
ex8:function ex8(){},
exi:function exi(d,e){this.a=d
this.b=e},
exk:function exk(d){this.a=d},
exo:function exo(d){this.a=d},
exj:function exj(d){this.a=d},
exp:function exp(d){this.a=d},
exq:function exq(d){this.a=d},
exr:function exr(d,e){this.a=d
this.b=e},
exh:function exh(d,e){this.a=d
this.b=e},
exs:function exs(d){this.a=d},
exg:function exg(d){this.a=d},
ext:function ext(d,e){this.a=d
this.b=e},
exf:function exf(d,e){this.a=d
this.b=e},
exu:function exu(d){this.a=d},
exe:function exe(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exd:function exd(d){this.a=d},
exl:function exl(d){this.a=d},
exc:function exc(d){this.a=d},
exm:function exm(d){this.a=d},
exb:function exb(d){this.a=d},
exn:function exn(d,e){this.a=d
this.b=e},
exa:function exa(d,e){this.a=d
this.b=e},
bre:function bre(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VW:function VW(d){this.a=d},
aDV:function aDV(d,e,f,g){var _=this
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
eE7:function eE7(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e,f){this.a=d
this.b=e
this.c=f},
eE9:function eE9(d){this.a=d},
eE6:function eE6(){},
eEa:function eEa(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eEc:function eEc(d){this.a=d},
eE3:function eE3(d){this.a=d},
eEd:function eEd(d,e){this.a=d
this.b=e},
eE2:function eE2(d,e){this.a=d
this.b=e},
eEe:function eEe(d){this.a=d},
eEf:function eEf(d){this.a=d},
eE1:function eE1(d,e){this.a=d
this.b=e},
aLE:function aLE(){},
aLK:function aLK(){},
a_p:function a_p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vs:function Vs(d){this.a=d},
aDx:function aDx(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fp$=h
_.l0$=i
_.fS$=j
_.fq$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d,e){this.a=d
this.b=e},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehP:function ehP(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehN:function ehN(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehS:function ehS(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehT:function ehT(d){this.a=d},
ehI:function ehI(d,e){this.a=d
this.b=e},
ehU:function ehU(d){this.a=d},
ehH:function ehH(d){this.a=d},
ehV:function ehV(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehW:function ehW(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehX:function ehX(d){this.a=d},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ehE:function ehE(d){this.a=d},
ehR:function ehR(d){this.a=d},
bkA:function bkA(d,e,f,g,h,i,j){var _=this
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
bjW:function bjW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fp$=i
_.l0$=j
_.fS$=k
_.fq$=l
_.bs$=m
_.a8$=n
_.c=_.a=null},
eDz:function eDz(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDs:function eDs(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDv:function eDv(d){this.a=d},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDw:function eDw(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eDx:function eDx(d){this.a=d},
eDa:function eDa(d,e){this.a=d
this.b=e},
bs5:function bs5(d,e,f,g,h,i,j){var _=this
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
aC7:function aC7(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fp$=h
_.l0$=i
_.fS$=j
_.fq$=k
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
ba3:function ba3(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKS:function cKS(d){this.a=d},
aKD:function aKD(){},
bwh:function bwh(){},
aLs:function aLs(){},
bwy:function bwy(){},
aLH:function aLH(){},
bwG:function bwG(){},
FA:function FA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acB:function acB(d,e,f){this.a=d
this.b=e
this.c=f},
Vm:function Vm(d){this.a=d},
bjv:function bjv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fp$=i
_.l0$=j
_.fS$=k
_.fq$=l
_.bs$=m
_.a8$=n
_.c=_.a=null},
edt:function edt(d,e){this.a=d
this.b=e},
edS:function edS(d){this.a=d},
edH:function edH(d){this.a=d},
edy:function edy(d){this.a=d},
edI:function edI(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edx:function edx(d){this.a=d},
edF:function edF(d){this.a=d},
edG:function edG(d){this.a=d},
edE:function edE(d){this.a=d},
edK:function edK(d,e){this.a=d
this.b=e},
edD:function edD(d,e){this.a=d
this.b=e},
edL:function edL(d,e){this.a=d
this.b=e},
edC:function edC(d,e){this.a=d
this.b=e},
edM:function edM(d,e){this.a=d
this.b=e},
edB:function edB(d,e){this.a=d
this.b=e},
edN:function edN(d){this.a=d},
edA:function edA(d,e){this.a=d
this.b=e},
edO:function edO(d){this.a=d},
edz:function edz(d){this.a=d},
edP:function edP(d){this.a=d},
edw:function edw(d){this.a=d},
edQ:function edQ(d){this.a=d},
edv:function edv(d){this.a=d},
edR:function edR(d){this.a=d},
edu:function edu(d){this.a=d},
bh7:function bh7(d,e,f,g,h,i){var _=this
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
aDw:function aDw(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fp$=h
_.l0$=i
_.fS$=j
_.fq$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
ehn:function ehn(d,e){this.a=d
this.b=e},
eho:function eho(d,e,f){this.a=d
this.b=e
this.c=f},
ehv:function ehv(d){this.a=d},
ehu:function ehu(d){this.a=d},
ehw:function ehw(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
eht:function eht(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehs:function ehs(d,e){this.a=d
this.b=e},
ehz:function ehz(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehq:function ehq(d,e){this.a=d
this.b=e},
ehB:function ehB(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehp:function ehp(d){this.a=d},
ehD:function ehD(d){this.a=d},
bkB:function bkB(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLq:function aLq(){},
bww:function bww(){},
aLr:function aLr(){},
bwx:function bwx(){},
fbq(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7Z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ie,w,w,1/0)},
i_R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gaf(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bJ(0,new B.fuU(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w1.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fYW(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cK(w,v[0])*16+A.a.cK(w,v[1])*4+A.a.cK(w,v[2])]},
tb:function tb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8X:function b8X(d,e){this.a=d
this.b=e},
fuU:function fuU(d,e){this.a=d
this.b=e},
Vp:function Vp(d){this.a=d},
aDu:function aDu(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
egS:function egS(d){this.a=d},
egR:function egR(d,e){this.a=d
this.b=e},
egE:function egE(d,e){this.a=d
this.b=e},
egy:function egy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egz:function egz(d){this.a=d},
egD:function egD(d,e){this.a=d
this.b=e},
egC:function egC(d,e){this.a=d
this.b=e},
egA:function egA(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
egM:function egM(){},
egN:function egN(d){this.a=d},
egL:function egL(d){this.a=d},
egO:function egO(d){this.a=d},
egK:function egK(d){this.a=d},
egI:function egI(d){this.a=d},
egJ:function egJ(d,e){this.a=d
this.b=e},
egF:function egF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egH:function egH(d){this.a=d},
egP:function egP(d,e){this.a=d
this.b=e},
egG:function egG(d,e){this.a=d
this.b=e},
egQ:function egQ(d,e){this.a=d
this.b=e},
bhP:function bhP(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dos:function dos(d,e){this.a=d
this.b=e},
Un:function Un(d){this.a=d},
biL:function biL(d,e){var _=this
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
aCB:function aCB(d,e,f,g,h){var _=this
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
bd8:function bd8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3A:function d3A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3C:function d3C(d,e,f){this.a=d
this.b=e
this.c=f},
d3B:function d3B(d,e){this.a=d
this.b=e},
aKR:function aKR(){},
bzs(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7Z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ie,w,w,1/0)},
foA(d,e,f,g,h){var w,v,u=null,t=C.hr(u,u,u,u,C.de(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.ca,u,A.e0,A.c8)
t.ey()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbd(w)/2))
t.a4(d,w)},
hXW(){var w,v,u,t,s,r,q,p,o=new C.eM()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.z(p,1+o.aB(2+A.o.an(t,3))))}A.d.b1(q,new B.fpA())
w.push(new B.aRf(q))}return w},
a1k(d,e){var w,v,u,t
for(w=new C.WY(d),v="";w.C();){u=C.jJ(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jJ(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i9E(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WY(d),v=0,u="";w.C();){t=C.jJ(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jJ(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRf:function aRf(d){this.a=d},
bFt:function bFt(){},
fpA:function fpA(){},
TS:function TS(d){this.a=d},
bip:function bip(d,e,f,g,h,i){var _=this
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
b98:function b98(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDp:function cDp(d,e){this.a=d
this.b=e},
UR:function UR(d){this.a=d},
biX:function biX(d,e,f,g,h){var _=this
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
beC:function beC(d,e,f){this.b=d
this.c=e
this.a=f},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbB:function dbB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U0:function U0(d){this.a=d},
biC:function biC(d,e,f){var _=this
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
aKv:function aKv(){},
aKZ:function aKZ(){},
hnY(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h42(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a41(w,v,u,A.cH,C.T(x.N,x.y))},
hvt(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h43(d),d.d*f.b)},
h43(d){return 42+(D.lY.ai(0,d.b)?(d.ch-1)*38:0)},
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
bLx:function bLx(){},
bLI:function bLI(d){this.a=d},
bLD:function bLD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLJ:function bLJ(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLN:function bLN(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLO:function bLO(d,e,f){this.a=d
this.b=e
this.c=f},
bLP:function bLP(d){this.a=d},
bLz:function bLz(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLB:function bLB(d,e,f){this.a=d
this.b=e
this.c=f},
bLC:function bLC(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLQ:function bLQ(d,e){this.a=d
this.b=e},
bLE:function bLE(d,e){this.a=d
this.b=e},
bLH:function bLH(d){this.a=d},
bLG:function bLG(d){this.a=d},
bLF:function bLF(d){this.a=d},
aig:function aig(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGF:function bGF(){},
bGG:function bGG(){},
my:function my(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckb:function ckb(d){this.a=d},
i7f(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fGj(),c9=new B.fGl(),d0=new B.fGm(),d1=new B.fGk(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bK,A.bJ))
d3.bE(D.e5E,D.e3r,c9.$2(A.dB,1.4))
d3.bE(D.e3h,D.e3g,c9.$2(A.bv,2.4))
d3.bE(D.e3i,Y.aGo,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.f6.j(0.5))
d2.z=A.QZ
d3.ae(D.e31,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aMa,A.aQ,A.cr))
d3.ae(A.cJ,16,c8.$1(A.bv))
d3.ae(A.cJ,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j2(0,d4.y*0.6)
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
r.delete()}}d3.ae(D.e5A,2.4,c8.$1(c7?A.bk:A.ak))
d3.ae(D.e6h,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.eb))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bF())
d3.aP(q,c8.$1(A.f6.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.ay.j(0.7)))}d3.aP(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j2(0,d4.y)
d3.bE(D.a58,D.aGE,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f4).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ae(A.ik,3,c8.$1(c7?A.bk:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2U[m]
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
case"drill":w=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
w.F(new C.b5(-24,-12))
w.F(new C.ap(10,-12))
w.F(new C.ap(10,2))
w.F(new C.ap(-2,2))
w.F(new C.ap(-6,22))
w.F(new C.ap(-16,22))
w.F(new C.ap(-14,2))
w.F(new C.ap(-24,2))
w.F(new C.bF())
d3.aP(w,d1.$3(D.eJO,A.aM,A.d5))
d3.aY(D.eJd,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j2(0,d4.y*2)
d3.bE(A.J,D.e3l,c9.$2(A.bO,2.4))
d3.bE(A.a57,D.e3k,c9.$2(A.hJ,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eJU,A.bl,A.cC))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bF())
d3.aP(k,c8.$1(A.eb))
d3.ae(D.e3p,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.mh))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bv(d5*17),3)!==0
else j=!1
i=j?A.bW:D.bh6
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bW.j(0.35))
t.z=A.lt
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e5K,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eK_,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j2(0,d4.y*0.5)
d3.hR(C.cl(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.mh))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.E(A.k.bv(d5),60)),2,"0"),D.e3q,A.b2,6.5)
d3.ae(D.e3C,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.RN,10,c8.$1(c7?A.c4:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j2(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e6j,A.c,16)
d2.restore()
d3.ae(A.k6,6,c8.$1(A.d3))
d3.ae(A.k6,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RN,14+v*6+A.k.E(t,6))
r=c9.$2(A.c4.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.e5J,D.e6f,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.j2(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eJP,A.bO,A.ak))
d3.ae(D.aGq,8,c8.$1(A.az))
d3.ae(D.aGq,4.5,c8.$1(c7?A.aR:A.cC))
d3.ae(D.e5H,2.2,c8.$1(c7&&A.o.E(A.k.bv(d5*1.6),2)===0?A.ay:A.kk))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e5S,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eJX,A.iS,A.fa))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bW))}d3.ae(D.e5D,4,c8.$1(A.aX))
d3.ae(D.e3m,2.4,c8.$1(A.ay))
d3.ae(D.e3z,2.4,c8.$1(A.bk))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
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
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aP(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e3n,A.h1,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e5W,A.h1.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.e5M,3,c8.$1(c7?A.bk:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eJR,c8.$1(F.tc))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.ta(0,-1,1)
d3.hR(C.cl(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.cg))
d3.ae(D.e43,1.2,c8.$1(A.w))
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
e.F(new C.bF())
d3.aP(e,d1.$3(D.eKk,A.c,A.bA))
d3.aY(D.eKj,c8.$1(c7?A.dP:A.bv))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bF())
d3.aP(s,c8.$1(A.eq))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.QZ
d3.ae(D.e32,14,d2)}return!0
case"discoball":d3.bE(D.e37,K.aGm,c9.$2(A.dA,1.4))
d3.ae(A.J,16,d1.$3(D.eJC,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dp,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dp,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d4H[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eJA,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eJt,A.aL,A.bJ))
d3.bE(D.e36,D.e38,c9.$2(A.bv,1.6))
d3.ae(D.e39,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2W[m]
if(c7)t=a1?A.b8:A.f7
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j2(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a54,c9.$2(A.bJ,4))
d2.restore()
d3.bE(D.e5w,D.e5Q,c9.$2(A.bJ,4))
d3.aY(D.eKi,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axm[m]+1,d2,10,14,2)
p=C.aq(A.bL,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eJQ,A.bO,A.bl))
for(m=0;m<2;++m){l=D.axm[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fk:A.az).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mD
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bE(D.e3G,D.e3X,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mO(1,a3,0.8,1).iB():A.eb
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mD
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eJF,A.cA,A.KR))
d3.ae(D.e5X,8,c8.$1(A.qM))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j2(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f6,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aP(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fT).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.e4v,3.2,c8.$1(A.fT.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j2(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eJS,A.j9,A.tf))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eb))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mD
d3.ae(D.e3B,8,d2)}return!0
case"headphones":d3.f6(C.cl(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.axo[m]
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
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eJy,A.dA,A.eb))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dl(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(a4)),2,"0"),D.e3d,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.E7,A.h1,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bv(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.mh))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.ps(),!0)
d2.translate(-27,-19)
E.KZ(d3,D.ePG,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vc))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dN,A.di))
d3.aD(a6,c9.$2(A.b3,1.2))
d3.ae(D.aGL,9,c8.$1(A.az))
d3.ae(D.aGL,6,c9.$2(A.d5,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e4z,s,8.2)
d3.ae(D.e3s,2.4,c8.$1(c7?A.bk:A.aK))
d6.$5(d3,"IN",D.e5R,A.ad,6)
d6.$5(d3,"OUT",D.e4n,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(D.e33,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eJu,A.eb,A.hG))
d6.$5(d3,"7805",D.a58,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.daq[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e6i,A.bi,9)
return!0
case"diode":d3.bE(D.aGP,D.aGz,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.aY(D.eJj,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.jo
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e5F,A.aA,8)
return!0
case"ldr":d3.bE(D.aGP,D.a58,c9.$2(A.e2,2.4))
d3.bE(D.aGE,D.aGz,c9.$2(A.e2,2.4))
d3.ae(A.J,12,c8.$1(A.d5))
d3.ae(A.J,12,c9.$2(A.to,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bB(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aP(a8,c9.$2(A.bL,1.4))
d2=C.aq(A.bv,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e5x,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qH
break A}if("appletv"===d2){t=A.e2
break A}t=F.E9
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
p.clipRRect(C.er(a5),$.ps(),!0)
p.translate(t,s)
E.h0g(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e3Y,1.6,c8.$1(A.b2))}else{d3.aD(a5,c8.$1(D.vc))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bF())
d3.aP(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.o9[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dA).H()
p=s.gbL().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e5a,A.bO,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WJ))
d6.$5(d3,"Apple TV",D.e4A,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bfD))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dp,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e6e,F.tc,5)}return!0
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
t.clipRRect(C.er(a5),$.ps(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KZ(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vc))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eb))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.e6l,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aGk,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eK0,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.ps(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vc))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WJ))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eK4,A.bK,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.ps(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vc))
d3.ae(D.aGf,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WJ))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.ps(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vc))
d3.aY(D.eKa,c8.$1(A.bl))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.ps(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eJT,A.iO,A.dA))
d3.ae(D.aGp,7,c8.$1(A.az))
d3.ae(D.aGp,4,c8.$1(c7?A.dP:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dp,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.mh))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cU(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aP(c3,c9.$2(A.aR,2.2))
d2=A.k.E(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bv(d5*2),5)),D.e4w,A.c,10)
d6.$5(d3,"km/h",D.e4t,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.eb))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.ps(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bt.j(0.2))
d2.z=A.lt
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bE(D.e60,D.e65,c9.$2(A.bl,4))
d3.bE(D.e3Z,D.e46,c9.$2(A.bl,4))
return!0}return!1},
fGj:function fGj(){},
fGl:function fGl(){},
fGm:function fGm(){},
fGk:function fGk(){},
h2V(d,e,f,g){return new B.aie(d,g,f,e)},
Fo(d,e,f){return new B.ba5(d,e,f)},
aie:function aie(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aif:function aif(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fp$=h
_.l0$=i
_.fS$=j
_.fq$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGk:function bGk(d){this.a=d},
bGi:function bGi(d){this.a=d},
bGl:function bGl(){},
bGm:function bGm(d){this.a=d},
bGn:function bGn(d,e,f){this.a=d
this.b=e
this.c=f},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGf:function bGf(d,e){this.a=d
this.b=e},
bGg:function bGg(d,e,f){this.a=d
this.b=e
this.c=f},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGa:function bGa(){},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e){this.a=d
this.b=e},
bGd:function bGd(d){this.a=d},
bGe:function bGe(d){this.a=d},
bGC:function bGC(d){this.a=d},
bGD:function bGD(){},
bFN:function bFN(){},
bGE:function bGE(d,e){this.a=d
this.b=e},
bGB:function bGB(d,e,f){this.a=d
this.b=e
this.c=f},
bGw:function bGw(d){this.a=d},
bGt:function bGt(d,e,f){this.a=d
this.b=e
this.c=f},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGx:function bGx(d){this.a=d},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGs:function bGs(d,e){this.a=d
this.b=e},
bGv:function bGv(d){this.a=d},
bGy:function bGy(d){this.a=d},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGz:function bGz(d){this.a=d},
bGo:function bGo(d){this.a=d},
bGA:function bGA(d){this.a=d},
bFO:function bFO(d,e){this.a=d
this.b=e},
bG6:function bG6(d,e){this.a=d
this.b=e},
bG8:function bG8(d,e){this.a=d
this.b=e},
bG7:function bG7(d,e){this.a=d
this.b=e},
bFU:function bFU(d,e){this.a=d
this.b=e},
bFV:function bFV(d){this.a=d},
bFT:function bFT(d){this.a=d},
bFW:function bFW(d,e,f){this.a=d
this.b=e
this.c=f},
bFS:function bFS(d,e){this.a=d
this.b=e},
bFZ:function bFZ(d,e){this.a=d
this.b=e},
bG_:function bG_(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e){this.a=d
this.b=e},
bG1:function bG1(d,e,f){this.a=d
this.b=e
this.c=f},
bFR:function bFR(d,e){this.a=d
this.b=e},
bG2:function bG2(d,e,f){this.a=d
this.b=e
this.c=f},
bFQ:function bFQ(d,e){this.a=d
this.b=e},
bG3:function bG3(d,e,f){this.a=d
this.b=e
this.c=f},
bFP:function bFP(d,e){this.a=d
this.b=e},
bG4:function bG4(d){this.a=d},
bG5:function bG5(d){this.a=d},
bFX:function bFX(d){this.a=d},
bFY:function bFY(d){this.a=d},
ba5:function ba5(d,e,f){this.a=d
this.b=e
this.c=f},
ffm:function ffm(){},
ffn:function ffn(){},
ffo:function ffo(){},
ff9:function ff9(){},
ffp:function ffp(){},
ff8:function ff8(){},
ffq:function ffq(){},
ffd:function ffd(){},
ff7:function ff7(){},
ffe:function ffe(){},
ff6:function ff6(){},
fff:function fff(){},
ff5:function ff5(){},
ffg:function ffg(){},
ff3:function ff3(){},
ff4:function ff4(){},
ffh:function ffh(){},
ff1:function ff1(){},
ff2:function ff2(){},
ffi:function ffi(){},
ff0:function ff0(){},
UE:function UE(d){this.a=d},
aCC:function aCC(d,e,f){var _=this
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
awJ:function awJ(d,e){this.c=d
this.a=e},
b8h:function b8h(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
cAX:function cAX(d){this.a=d},
b8g:function b8g(d,e){this.b=d
this.a=e},
cAW:function cAW(d){this.a=d},
ax1:function ax1(){},
ax2:function ax2(){},
aJ1:function aJ1(){},
bwk:function bwk(){},
i7g(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.w7,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.ae(A.w7,25,b8)
b8=C.N()
b8.saq(D.eek.av(0,v))
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
r.r=A.bA.gp(0)
r.c=2
r.d=A.bP
b9.bE(A.w7,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bi.gp(0)
b9.ae(A.w7,3,r)
c2.$5(b9,w?"V":"A",D.e68,A.bi,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e5C,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eJq,A.hD)
$.W()
s=C.N()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aY(D.eKb,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.w8,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cl(A.aGj,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fT.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bo.gp(0)
b9.ae(D.w8,4,b8)
b8=C.N()
b8.b=A.af
b8.c=2
b8.r=A.cr.gp(0)
b9.ae(D.w8,22,b8)
b8=C.N()
b8.b=A.af
b8.c=0.8
b8.r=A.jd.gp(0)
b9.ae(D.w8,14,b8)
return!0
case"speaker":l=C.bx(D.aMa,A.ux)
$.W()
b8=C.N()
b8.saq(D.aod.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eeH.av(0,C.bU(A.cy,15)))
b9.ae(A.cy,14+k,b8)
b8=C.N()
b8.r=A.dA.gp(0)
b9.ae(A.cy,5,b8)
b8=C.N()
b8.r=A.bl.gp(0)
b9.ae(D.aGl,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e3F,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.bW.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eK3,A.ux)
$.W()
b8=C.N()
b8.saq(D.bVF.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.aMc,A.im)
s=C.N()
s.r=A.hG.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BL(i)<500?":":" "
g=A.a.aT(A.o.u(C.dl(i)),2,"0")
f=A.a.aT(A.o.u(C.fZ(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.aY(D.aMc,b8)
c2.$5(b9,g+h+f,D.e5U,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e5T,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e3J,2.4,b8)
return!0
case"calculator":j=C.bx(D.eJK,A.hd)
$.W()
b8=C.N()
b8.saq(D.bVp.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.eJE,A.hc)
s=C.N()
s.r=(b7?A.WV:D.bhE).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e5B,A.VO,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Si)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cg:A.bO).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eJB,A.hd)
$.W()
b8=C.N()
b8.r=L.mh.gp(0)
b9.aD(j,b8)
b8=C.N()
b8.b=A.af
b8.c=1.9
b8.r=D.afI.gp(0)
b9.aD(j,b8)
a0=C.bx(D.eJs,A.hD)
if(b7){b8=C.N()
b8.saq(D.bWZ.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.ps(),!0)
b8.translate(-12,-25)
E.KZ(b9,D.ePh,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eJp,A.hc)
s=C.N()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.aY(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e4T,A.c,6)}else{b8=C.N()
b8.r=D.vc.gp(0)
b9.aD(a0,b8)}b8=C.bx(D.eKl,D.eeQ)
s=C.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bx(D.eK2,A.rA)
$.W()
b8=C.N()
b8.saq(D.bVX.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.axo[a2]
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
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.w8,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.hw.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eJJ,A.hD)
s=$.W()
r=C.N()
r.r=A.eb.gp(0)
b9.aD(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yY
b9.ae(A.w7,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cU(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bF())
b8=C.N()
b8.r=C.aq(A.eq,D.ba3,a5).gp(0)
b9.aP(a6,b8)
b8=C.N()
b8.b=A.af
b8.c=1.4
b8.r=A.c1.gp(0)
b9.aP(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j2(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aGl,s)
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
j.F(new C.bF())
q=C.N()
q.saq(D.bU0.av(0,D.eJW))
b9.aP(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bF())
p=C.N()
p.r=A.f6.gp(0)
b9.aP(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bF())
s=C.N()
s.r=A.f6.gp(0)
b9.aP(r,s)
for(a2=0;a2<2;++a2){a3=D.dab[a2]
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
j=new C.aO(b8,A.ao,b6,b6,C.a([],s))
j.F(new C.b5(-18,20))
j.F(new C.ap(-14,-12))
j.F(new C.cU(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bF())
r=C.N()
r.saq(D.bV5.av(0,D.eJI))
b9.aP(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bF())
q=C.N()
q.r=A.e2.gp(0)
b9.aP(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cU(-34,-6,-18,12))
b8=C.N()
b8.b=A.af
b8.c=5
b8.r=A.az.gp(0)
b9.aP(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.tm,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eb
b8.r=s.gp(0)
b9.aY(D.eJH,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lt
b9.ae(A.aGh,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.ae(D.e30,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ao,b6,b6,C.a([],x.v))
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
s.z=Z.Hp
b9.ae(D.e5Y,24,s)}b8=C.bx(D.eKh,A.hD)
s=$.W()
r=C.N()
r.r=A.eb.gp(0)
b9.aD(b8,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bE(D.e3e,D.aGr,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bE(D.aGr,D.e5Z,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bF())
s=C.N()
s.r=(b7?A.aM:A.jU).gp(0)
b9.aP(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bl).gp(0)
b9.ae(D.e6_,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cU(0,22,34,-6))
r=C.N()
r.b=A.af
r.c=2
r.r=A.hk.gp(0)
b9.aP(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1Y[u].j(0.6).gp(0)
b3.z=A.QZ
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cU(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1Y[u]
else{o=C.aq(D.a1Y[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.i7f(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZo(d){var w=D.lY.h(0,d)
return(w==null?null:w.b)===D.zn},
i8o(d,e,f){return C.a5(d,!1).cl(C.uC(null,!1,!0,!0,new B.fKZ(e,f),A.eJ,null,A.pK,new B.fL_(),x.H))},
J5:function J5(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKZ:function fKZ(d,e){this.a=d
this.b=e},
fL_:function fL_(){},
Ul:function Ul(d,e,f){this.c=d
this.d=e
this.a=f},
biJ:function biJ(d,e){var _=this
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
bup:function bup(d,e,f){this.b=d
this.c=e
this.a=f},
aec:function aec(d,e,f){this.b=d
this.c=e
this.a=f},
aKO:function aKO(){},
fjQ(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bW(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VW,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
fZu(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eM()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mG
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
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.an(b5,8),2,4)
a9=C.et([A.d.gal(g)],u)
A.d.fm(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
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
return new B.aVR(b0,a9,C.T(u,t),q,N.mG,w+v)}return new B.aVR(C.aX(u),C.et([25],u),C.T(u,t),21,N.mG,1)},
hnP(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnF(p,o)},
hja(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVR:function aVR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
V9:function V9(d){this.a=d},
bji:function bji(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fp$=g
_.l0$=h
_.fS$=i
_.fq$=j
_.bs$=k
_.a8$=l
_.c=_.a=null},
e92:function e92(d){this.a=d},
e91:function e91(d,e){this.a=d
this.b=e},
e93:function e93(){},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8U:function e8U(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e8X:function e8X(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e8W:function e8W(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e8Z:function e8Z(d){this.a=d},
e9_:function e9_(d){this.a=d},
e90:function e90(d,e){this.a=d
this.b=e},
bgi:function bgi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgF:function dgF(d,e,f){this.a=d
this.b=e
this.c=f},
dgI:function dgI(d,e,f){this.a=d
this.b=e
this.c=f},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d){this.a=d},
Vb:function Vb(d){this.a=d},
aDg:function aDg(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fp$=g
_.l0$=h
_.fS$=i
_.fq$=j
_.bs$=k
_.a8$=l
_.c=_.a=null},
e9l:function e9l(d){this.a=d},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9m:function e9m(){},
e96:function e96(){},
e9f:function e9f(d,e){this.a=d
this.b=e},
e9c:function e9c(d){this.a=d},
e98:function e98(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e97:function e97(d){this.a=d},
e9g:function e9g(d){this.a=d},
e9b:function e9b(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e99:function e99(d,e){this.a=d
this.b=e},
e9j:function e9j(d){this.a=d},
bgx:function bgx(d,e){this.b=d
this.a=e},
aLf:function aLf(){},
bwp:function bwp(){},
aLg:function aLg(){},
bwq:function bwq(){},
a0q(d,e,f,g,h,i){return new B.bte(d,e,f,g,h,i)},
bte:function bte(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fg3:function fg3(){},
fg4:function fg4(){},
fg5:function fg5(){},
fg6:function fg6(){},
fg7:function fg7(){},
fg8:function fg8(){},
fg9:function fg9(){},
fga:function fga(){},
a7S:function a7S(d){this.a=d},
ceP:function ceP(d){this.a=d},
ceQ:function ceQ(){},
ceO:function ceO(d,e){this.a=d
this.b=e},
ceN:function ceN(d){this.a=d},
W1:function W1(d){this.a=d},
aE7:function aE7(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fp$=f
_.l0$=g
_.fS$=h
_.fq$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
eIA:function eIA(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIy:function eIy(d,e){this.a=d
this.b=e},
eIx:function eIx(d,e){this.a=d
this.b=e},
eIz:function eIz(d){this.a=d},
buB:function buB(d,e,f){this.b=d
this.c=e
this.a=f},
UL:function UL(d){this.a=d},
biS:function biS(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fp$=d
_.l0$=e
_.fS$=f
_.fq$=g
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
bpq:function bpq(d,e,f){this.b=d
this.c=e
this.a=f},
TY:function TY(d){this.a=d},
biu:function biu(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fp$=d
_.l0$=e
_.fS$=f
_.fq$=g
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
aHw:function aHw(d,e,f){this.a=d
this.b=e
this.c=f},
UC:function UC(d){this.a=d},
biM:function biM(d,e,f,g){var _=this
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
bkO:function bkO(d,e,f){this.b=d
this.c=e
this.a=f},
Vn:function Vn(d){this.a=d},
aDq:function aDq(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e,f){this.a=d
this.b=e
this.c=f},
eeH:function eeH(d,e,f){this.a=d
this.b=e
this.c=f},
eeK:function eeK(d){this.a=d},
eeG:function eeG(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeM:function eeM(d,e){this.a=d
this.b=e},
eeP:function eeP(d,e){this.a=d
this.b=e},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d){this.a=d},
VA:function VA(d){this.a=d},
aDM:function aDM(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
epA:function epA(d){this.a=d},
epB:function epB(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
epz:function epz(d){this.a=d},
epx:function epx(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d,e){this.a=d
this.b=e},
VV:function VV(d){this.a=d},
bk_:function bk_(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eDS:function eDS(){},
eE0:function eE0(){},
eDX:function eDX(d){this.a=d},
eDW:function eDW(){},
eDY:function eDY(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d){this.a=d},
eDU:function eDU(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eDT:function eDT(d){this.a=d},
Vl:function Vl(d){this.a=d},
bjt:function bjt(d,e,f,g,h,i,j,k){var _=this
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
_.fp$=f
_.l0$=g
_.fS$=h
_.fq$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
edn:function edn(){},
edo:function edo(){},
edg:function edg(d){this.a=d},
edf:function edf(d){this.a=d},
edh:function edh(d){this.a=d},
ede:function ede(d){this.a=d},
edi:function edi(d){this.a=d},
edd:function edd(d){this.a=d},
edj:function edj(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
edb:function edb(d,e){this.a=d
this.b=e},
edl:function edl(d){this.a=d},
eda:function eda(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
ed9:function ed9(d,e){this.a=d
this.b=e},
bcu:function bcu(d,e,f){this.c=d
this.d=e
this.a=f},
aKB:function aKB(){},
bwg:function bwg(){},
aKU:function aKU(){},
bwl:function bwl(){},
aLo:function aLo(){},
bwv:function bwv(){},
aLS:function aLS(){},
bwH:function bwH(){},
jK(d,e,f,g,h,i){return new B.b64(h,d,f,g,i,e,null)},
hnF(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fOO(g,e,f),d,w,!0,!0,x.H)},
hB(d,e,f,g,h,i,j){return new B.av9(f,j,i,h,g,d,e,null)},
qO(d,e,f){return B.i9d(d,e,f)},
i9d(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
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
return C.b(B.cpK(C.a([B.hcC(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qO)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.U(D.aOd)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qO,v)},
lg(d,e,f,g){var w,v=$.ari
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vV(v,e,f,g)},
vV(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
By(d,e,f,g){var w,v,u,t,s,r,q,p=$.ari
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.lg(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bS(p,p.gM(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lg(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.ceL(d,s,f,g),u)}},
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
zm(d){return B.hED(d)},
hED(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
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
vS(d,e){return B.hEE(d,e)},
hEE(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vS=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vS)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vS)
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
return C.i($async$vS,v)},
b64:function b64(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crJ:function crJ(d){this.a=d},
crK:function crK(d,e){this.a=d
this.b=e},
fOO:function fOO(d,e,f){this.a=d
this.b=e
this.c=f},
fON:function fON(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crF:function crF(d){this.a=d},
eQ:function eQ(d,e,f){this.c=d
this.d=e
this.a=f},
av9:function av9(d,e,f,g,h,i,j,k){var _=this
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
crE:function crE(d){this.a=d},
F3:function F3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crL:function crL(d){this.a=d},
mB:function mB(){},
crG:function crG(d,e,f){this.a=d
this.b=e
this.c=f},
crI:function crI(d){this.a=d},
crH:function crH(){},
ceL:function ceL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuk(){var w=0,v=C.j(x.cL),u,t
var $async$cuk=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qP().bf5("assets/data/world110.json"),$async$cuk)
case 3:u=t.hJc(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cuk,v)},
hJc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aH(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a6(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cP(p.h(r,"n"))
m=C.cP(p.h(r,"a"))
l=C.cP(p.h(r,"ct"))
j=C.cP(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cP(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPL(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaE(o,m,l,j,i,h,g,f,p,q)
e.bxo(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaF(a1)},
fst(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
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
hL5(d,e,f){return $.hL6.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dcp(d,e,f))},
US:function US(d){this.a=d},
aCN:function aCN(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fp$=j
_.l0$=k
_.fS$=l
_.fq$=m
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
beJ:function beJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dcp:function dcp(d,e,f){this.a=d
this.b=e
this.c=f},
dcq:function dcq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL_:function aL_(){},
aL0:function aL0(){},
aeK(d,e,f,g,h){return new B.bt9(d,e,f,g,h)},
bt9:function bt9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffX:function ffX(){},
ffY:function ffY(){},
ffZ:function ffZ(){},
fg_:function fg_(){},
fg0:function fg0(){},
fg1:function fg1(){},
fg2:function fg2(){},
VY:function VY(d){this.a=d},
bk3:function bk3(){this.d=$
this.c=this.a=null},
eEL:function eEL(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEN:function eEN(){},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEI:function eEI(d){this.a=d},
hLx(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjQ(new C.cs(null,x.A),new B.OS(A.cH),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hLz(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hLy(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hdO(d,e,f){return $.hM9.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eZ7(d,e,f))},
VJ:function VJ(d){this.a=d},
bjQ:function bjQ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fp$=j
_.l0$=k
_.fS$=l
_.fq$=m
_.bs$=n
_.a8$=o
_.c=_.a=null},
ewO:function ewO(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
ex_:function ex_(d,e){this.a=d
this.b=e},
ewW:function ewW(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ex0:function ex0(d){this.a=d},
ewV:function ewV(d){this.a=d},
ex1:function ex1(d,e){this.a=d
this.b=e},
ex2:function ex2(d){this.a=d},
ewU:function ewU(d,e){this.a=d
this.b=e},
ex3:function ex3(d){this.a=d},
ewT:function ewT(d,e){this.a=d
this.b=e},
ex4:function ex4(d){this.a=d},
ewS:function ewS(d){this.a=d},
ex5:function ex5(d){this.a=d},
ewR:function ewR(d){this.a=d},
ex6:function ex6(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ex7:function ex7(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewN:function ewN(){},
ewM:function ewM(){},
ewL:function ewL(d){this.a=d},
ewK:function ewK(d){this.a=d},
brc:function brc(d,e){this.b=d
this.a=e},
eZ7:function eZ7(d,e,f){this.a=d
this.b=e
this.c=f},
eZ8:function eZ8(){},
eZ9:function eZ9(){},
UT:function UT(d){this.a=d},
aCO:function aCO(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fp$=k
_.l0$=l
_.fS$=m
_.fq$=n
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
b9V:function b9V(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VB:function VB(d){this.a=d},
bjN:function bjN(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fp$=e
_.l0$=f
_.fS$=g
_.fq$=h
_.bs$=i
_.a8$=j
_.c=_.a=null},
epI:function epI(d,e){this.a=d
this.b=e},
epJ:function epJ(d,e){this.a=d
this.b=e},
epH:function epH(d,e){this.a=d
this.b=e},
epK:function epK(d,e){this.a=d
this.b=e},
epG:function epG(d,e){this.a=d
this.b=e},
bqL:function bqL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eXh:function eXh(d){this.a=d},
aL1:function aL1(){},
bwn:function bwn(){},
aLA:function aLA(){},
bwB:function bwB(){},
aLD:function aLD(){},
bwD:function bwD(){},
hLv(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eM()
v.dB(w)
v=v.aj()
u=new C.eM()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bit(new C.cs(null,x.A),new B.OS(A.cH),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pn:function Pn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TW:function TW(d){this.a=d},
bit:function bit(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fp$=i
_.l0$=j
_.fS$=k
_.fq$=l
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
b9j:function b9j(d,e){this.b=d
this.a=e},
aeo:function aeo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UP:function UP(d){this.a=d},
biV:function biV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fp$=p
_.l0$=q
_.fS$=r
_.fq$=s
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
bez:function bez(d,e){this.b=d
this.a=e},
d9x:function d9x(d){this.a=d},
Vx:function Vx(d){this.a=d},
bjM:function bjM(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fp$=f
_.l0$=g
_.fS$=h
_.fq$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoY:function eoY(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
eoV:function eoV(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoU:function eoU(d){this.a=d},
ep0:function ep0(d){this.a=d},
eoT:function eoT(d){this.a=d},
ep1:function ep1(d){this.a=d},
eoS:function eoS(d,e){this.a=d
this.b=e},
ep2:function ep2(d){this.a=d},
eoR:function eoR(d,e){this.a=d
this.b=e},
ep3:function ep3(d){this.a=d},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
eoP:function eoP(d,e){this.a=d
this.b=e},
bq0:function bq0(d,e){this.b=d
this.a=e},
aKy:function aKy(){},
bwf:function bwf(){},
aKX:function aKX(){},
bwm:function bwm(){},
aLz:function aLz(){},
bwA:function bwA(){},
hcC(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lj(e,f,$,null)
v=w.bHw(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hZa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nW(A.k.aa(p.c,4)),"y",C.nW(A.k.aa(p.d,4)),"v",p.e,"l",C.nW(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nW(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nW(A.k.aa(p.z,3)),"s",C.nW(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fn(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i7B(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
while(f.C()){u=f.gR(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qc().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.to(a2,d,a0,a1)
a3.app(a2,d,a0,a1)
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
while(i.C()){q=i.gR(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ak_(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gR(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bnG(i,k)}catch(a4){return a5}},
fuf(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fuf=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$fuf)
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
return C.i($async$fuf,v)},
bD2(d){return B.i99(d)},
i99(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bD2=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bD2)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bD2)
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
return C.i($async$bD2,v)},
cpK(d,e){var w=0,v=C.j(x.g7),u
var $async$cpK=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h17().x6(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpK,v)}},D,T,H,U,A_,A8,A9,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[135]
A1=c[144]
Aa=c[143]
A2=c[136]
A3=c[132]
I=c[124]
P=c[118]
A4=c[120]
Ab=c[138]
A5=c[109]
A6=c[100]
G=c[127]
Ac=c[122]
Ad=c[137]
A7=c[141]
Ae=c[67]
Y=c[76]
Af=c[84]
Ag=c[80]
N=c[113]
Q=c[88]
Ah=c[145]
Ai=c[115]
Z=c[123]
O=c[125]
V=c[142]
Aj=c[71]
Ak=c[140]
R=c[131]
M=c[139]
Al=c[94]
W=c[114]
K=c[130]
S=c[95]
Am=c[24]
E=c[26]
F=c[92]
L=c[102]
B=a.updateHolder(c[17],B)
D=c[121]
T=c[134]
H=c[41]
U=c[128]
A_=c[104]
A8=c[133]
A9=c[126]
An=c[129]
X=c[97]
B.ajs.prototype={}
B.V4.prototype={
S(){return new B.bjg(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mz(0,null,null))}}
B.bjg.prototype={
gVM(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nc(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nc=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jF()
p.bO(0,A.c6)
t.m(new B.e62(t))
t.a.toString
p=t.gVM()
w=3
return C.b(B.byB(B.hNn(q,B.hZ1(p),o,t.ay)),$async$Nc)
case 3:s=e
r=s==null?null:J.iW(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i_r(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e63(t,o,r))
$.aW.x1$.push(new B.e64(t))
case 1:return C.h(u,v)}})
return C.i($async$Nc,v)},
XL(d){return this.bYs(d)},
aUR(){return this.XL(null)},
bYs(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XL=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jF()
t.f.saV(0,o)
t.m(new B.e6f(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byB(B.hUa(o)),$async$XL)
case 3:r=n.a=m.i7j(f)
p.b=""
if(r!=null&&!B.hZ2(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i_s(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajs(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e6g(p,t))
t.c2N(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XL,v)},
c2N(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVM()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e6b(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e69(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e6c(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e6d(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e6e(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=C.m(16),f=C.I(A.bt.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eQK,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.Tc,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.ffe
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ac.TD,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f0p,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vk,C.d(u,l,l,l,l,l,l,D.f31,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dk,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f5q,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i_,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.LT,new C.cm(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.m5,l,l,l,l,l,l,l,l,l),A.bp,new C.bC(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a7m,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bt.j(0.3),l,l,new C.bq(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.faG,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bq(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.e7h)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahJ(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bqE,A.ej,l,l,1/0),A.bc,A.ic),C.E(B.h2V(m.gVM(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e6j(m),l,A.bt,l),new B.dA("Invent something new",!i,new B.e6k(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dcv[p]
i.push(new B.dA(n,!1,new B.e6l(m,n),l,A.bt,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cXl[p]
i.push(new B.dA(r,!1,new B.e6m(m,r),l,A.bt,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eQ,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kG,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e6n(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dm,!0,A.a4,l,A.an,l,A.aOW,l,l),1)
h=m.at
v=h&&j?D.bER:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e6o(m,k),A.bt,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jK(A.bt,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FS.prototype={}
B.uK.prototype={}
B.Vw.prototype={
S(){return new B.aDG(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDG.prototype={
gaW4(){var w,v,u,t=this,s=D.GS[t.cx],r=D.Qr[t.cy],q=D.C5[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avK[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.em8())},
ga1Z(){return D.GS[this.cx].d/this.gaW4()},
gaNq(){return 0.1*(D.GS[this.cx].d/0.9)/D.Qr[this.cy].d},
a_(){this.a1()
this.le()
B.zm("rocket_lander").bz(new B.ems(this),x.P)},
c2W(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cH.aj()*0.6
w.f=new C.u(0.15+A.cH.aj()*0.7,0.08)
w.r=new C.u((A.cH.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lx(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.emt())
return}w=D.ri[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1Z()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNq())}if(m.dy){t=m.r
v=v.aC(0,t.aG(0,t.gcm()*6*D.axC[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
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
p=D.C5[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vS("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1Z()/(D.ri[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1Z()/(D.ri[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bv(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.emu())},
af8(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f2x,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.ema(this,g,w),v,h,v))
return new C.D(A.eK,C.v(C.a([u,A.cV,C.bW(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCL(d){var w,v,u,t,s=this,r=null,q=s.ga1Z()/(D.ri[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNq()),o=D.axC[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Tx,r,r,r),A.S,s.af8("ENGINE: "+D.GS[s.cx].b,D.GS,new B.em_(s),new B.em0(s),A.cs),s.af8("FUEL TANK: "+D.Qr[s.cy].b,D.Qr,new B.em1(s),new B.em2(s),A.b2),s.af8("LANDING GEAR: "+D.C5[s.db].b,D.C5,new B.em3(s),new B.em4(s),A.aR),s.af8("EXTRAS (tap to add)",D.avK,new B.em5(s),new B.em6(s),A.bt)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fxb)
o=(q?A.b2:A.cb).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaW4(),2)
u=A.k.aa(s.ga1Z()/(D.ri[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C5[s.db].d*100)+".",r,r,r,r,r,r,D.f39,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i_,A.bT,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fi(A.nj,"Launch",new B.em7(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bU,r,r,A.ah),A.f,r,A.lC,new C.o(D.bhe,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aXc(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b3,A.q,1)
return C.ob(A.jC,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.elX(e),new B.elY(e),w,w,w,w,new B.elZ(e))},
aXb(d,e,f){return this.aXc(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.eml(s,D.ri[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.ri[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.emm(s,w),r,D.ri[w].c,r))}v=C.a([s.aXb(F.alx,new B.emn(s),s.y),A.bd,s.aXc(A.vH,new B.emo(s),s.Q,130),A.bd,s.aXb(A.NC,new B.emp(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aD(r,C.p(r,D.bJ5,A.f,r,r,new C.o(u,r,C.I(A.b3,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.emq(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jK(A.cs,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bgf.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.ri[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bjW,a0,0.25)
a1.toString
d.saq(new C.a8(A.b_,A.b4,A.x,C.a([F.ad7,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
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
r=new C.aO(e.r,A.ao,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.eM()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bB(a1)
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
a0=C.bx(o.cC(2),A.rA)
d=C.N()
d.b=A.af
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j2(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.Hp
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ao,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bF())
k=C.N()
k.r=A.aM.gp(0)
a2.aP(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bF())
k=C.N()
k.r=A.c.gp(0)
a2.aP(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cU(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cU(-14,-10,0,-26))
m.F(new C.bF())
i=C.N()
i.saq(D.bVy.av(0,D.eJz))
a2.aP(m,i)
i=C.N()
i.r=A.aR.gp(0)
a2.ae(D.w8,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bF())
h=C.N()
h.r=A.ay.gp(0)
a2.aP(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bF())
k=C.N()
k.r=A.ay.gp(0)
a2.aP(f,k)
g.restore()},
au(d){return!0}}
B.aLx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwz.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buU()}}
B.aRp.prototype={}
B.a2G.prototype={}
B.b9m.prototype={}
B.TX.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aC5(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.K2,D.K2,A.au,A.cH,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC5.prototype={
a_(){var w=this
w.a1()
w.le()
w.as=new B.c_S(w.gcbg())
new B.dEt(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.btV()},
cbh(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eV(0,C.F(["t","init","data",$.hcR],x.N,x.z))
v.at=!0
v.ax=""
v.axV()
break
case"pick":v.m(new B.dE5(v,d))
break
case"shot":v.ah0(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axV(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atG[q.CW]
v=new B.dE6()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fn(u)
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
ah0(d){return this.cs3(d)},
cs3(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ah0=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b3(d,A.a.cK(d,",")+1))
w=6
return C.b(B.cpK(C.a([B.hcC(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ah0)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.U(D.aOd)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ah0,v)},
axm(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lx(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bv(w)!==A.k.bv(v.ok)){B.a7R("kick",0.4)
v.a4A(170,new B.dEu())}v.ok=w
return},
agQ(d){var w,v,u,t,s=this
s.m(new B.dE7(s,d))
if(d==null){s.fx=D.K2
s.dy=1
w=s.as
if(w!=null)w.eV(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a0<1>")
u=C.C(new C.a0(w,new B.dE8(d),v),v.k("J.E"))
t=A.d.gJ(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.axV()
w=s.as
if(w!=null)w.eV(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cuw(t,d)
return},
cuw(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7R("kick",0.8)
this.a4A(260,new B.dE9())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4A(w*70,new B.dEa(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vV("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7R("kick",0.3)
break
default:B.vV("organic",2+A.o.E(e.length,6),200,0.4)}},
cyZ(d){this.m(new B.dEc(this,d))},
aXu(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axm(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bU3(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dE2(u,w,d))
v=x.t
B.By("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4A(1100,new B.dE3(u))
return}if(d==null){if(u.cx!=null)u.agQ(null)
return}u.agQ(d)},
bXM(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bW.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eZX,u,u,u)}else if(d==null||e==null)w=D.fcM
else{w=x.p
w=C.B(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hT,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.Dk,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bLv,u,u,u,new B.dE4(v),u,u,u,u,"Back to the whole body",A.cd)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VU,u,s,t,u,u,A.n),u,u,u,u,I.ahc,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dn1.h(0,g)
i.axV()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d5B
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axm(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mA,h,h,h,new B.dEj(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DH(h,A.qd,q)}else q=A.kC
q=C.v(C.a([C.E(q,1),new C.D(F.Yc,i.bXM(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cYN[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEk(i,o),o.c,A.bW,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dEl(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hB(A.cb,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dEm(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F3(D.atG[j],i.CW===j,new B.dEn(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEo(i),D.akm,A.aR,h),new B.fi(A.k0,"Reset view",new B.dEp(i),A.c,h),new B.dA(l,m,new B.dEq(i),A.G8,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEr(i),A.o3,A.cb,h))
p.push(new B.eQ(v,h,h))
return B.jK(A.bW,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aKz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aKA.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.btU()}}
B.c_S.prototype={
kB(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hiU
$.hiU=v+1
u="ngmy-body-viewer-"+v
$.yu()
$.qb().pU(u,new B.c_T(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_U(t),!1,x.gA)
t.b=u},
eV(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byy(w.contentWindow)
if(w!=null)J.fQu(w,e,"*")}}catch(v){}}}
B.xX.prototype={}
B.C7.prototype={}
B.nk.prototype={}
B.ba4.prototype={}
B.U1.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.aC8(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC8.prototype={
a_(){var w=this
w.a1()
w.le()
w.abS()
$.aW.x1$.push(new B.dGE(w))},
abS(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abS=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abS)
case 6:q=e.t7("ngmy_circuit_passed_v1")
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
return C.i($async$abS,v)},
acb(d){return this.c0x(d)},
c0x(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acb=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.aA(),$async$acb)
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
return C.i($async$acb,v)},
aw4(d,e,f,g){var w="c"+this.y++,v=new B.C7(w,e,f,g)
this.d.n(0,w,v)
return v},
my(d,e,f){return this.aw4(0,e,f,0)},
abc(d,e){var w
if(D.yW.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tA(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRr(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fS$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e4(m,D.cJ1[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tA(p,0)&&n.tA(p,1)
break
case"or":p=q.a
o=n.tA(p,0)||n.tA(p,1)
break
case"xor":p=q.a
o=n.tA(p,0)!==n.tA(p,1)
break
case"nand":p=q.a
o=!(n.tA(p,0)&&n.tA(p,1))
break
case"nor":p=q.a
o=!(n.tA(p,0)||n.tA(p,1))
break
case"not":o=!n.tA(q.a,0)
break
default:o=n.tA(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMM(){return this.aRr(null)},
lx(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMM()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gaf(0),v=new C.f7(w,new B.dGF()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fS$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fS$)
o=s+1
E.dF(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
aw5(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m0(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
asn(d){var w=this
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dGg(w,d))
return}w.m(new B.dGh(w,d))},
cuO(d){this.m(new B.dGm(this,d,$.bDo()[d]))},
c58(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDo()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a0<J.E>")
s=t.k("J.E")
r=C.C(new C.a0(new C.bc(v,u),new B.dGb(),t),s)
A.d.b1(r,new B.dGc())
q=C.C(new C.a0(new C.bc(v,u),new B.dGd(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGe(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRr(0)
h=m.h(0,A.d.gJ(q).a)
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
awT(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
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
cdE(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
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
bXF(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yW.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abc(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bLH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abc(p,o)
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
c5a(d){var w,v,u,t=this,s=t.awT(d)
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
return}u=t.bLH(d)
if(u!=null)t.m(new B.dGo(t,u))
else t.m(new B.dGp(t))},
auV(d){return this.c_y(d)},
c_y(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auV=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awT(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dGk(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auV,v)},
byE(d){if(this.x.A(0,A.au))return
this.m(new B.dGa(this,d,A.cH))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDo()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o3:O.re,A.ad,h,h,h,21),h,h,h,new B.dGy(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.co.j(0.14)
r=C.I(A.co.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eZ7,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f6l,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.mo,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f4,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fnK,i.gc57(),C.bm(A.co,h,h,h,h,h,h,h,h,h,h,A.cd))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.M1,D.brg,h,h,1/0))}u.push(C.E(C.cq(new B.dGz(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yW.h(0,r).a+": "+D.yW.h(0,r).e,h,h,h,h,h,h,A.rN,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A9.agV,A.bT,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yW.gdK(D.yW),s=s.gaf(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aD(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.x(p.a,h,D.aQ2,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bq(q,q,q,q),h,h,A.n),h,h,h,A.fz,Al.LY,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGA(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d9I[l]
s.push(new B.fi(A.ND,k.b,new B.dGB(i,k),A.co,h))}s.push(new B.fi(D.y4,"Clear",new B.dGC(i),A.cb,h))
r=C.a([],g)
for(j=0;q=$.bDo(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eg:A.ll
o=i.ay
n=i.cx.t(0,j)?A.b2:A.c4
r.push(new B.dA(q.a,o===j,new B.dGD(i,j),p,n,h))}return B.jK(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.ban.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.abJ.gp(0)
a7.aY(new C.a9(0,0,0+a5,0+a6),w)
v=C.N()
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
g=a5.abc(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pA(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.af
l.c=9
l.r=A.c4.j(0.28).gp(0)
l.z=G.mD
s=l.H()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.af
l.c=3.2
l.d=A.bP
l.r=(f?A.dP:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HW)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pA(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.af
r.c=3
r.r=A.ad.gp(0)
a7.aP(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c59(a7,a5.d)},
c59(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yW.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cl(a0.c,64,64)
s=C.bx(t,A.l5)
r=w.cy===v
q=s.eQ(A.cy)
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
q.saq(new C.a8(A.b_,A.b4,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.N()
q.b=A.af
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.NJ:D.bFm}else l=e.b
k=B.fVT(C.jJ(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aC(0,new C.u(p/2,q.gbd(q)/2)))
j=B.fVT(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fVT(f,9,u?A.dP:A.c1,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aY1(d,w.abc(a0,h),o)
this.aY1(d,a0.c.ad(0,D.HW),o)},
aY1(d,e,f){var w
$.W()
w=C.N()
w.r=D.abJ.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.b=A.af
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
au(d){return!0}}
B.aKF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwi.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bu_()}}
B.N5.prototype={
S(){return new B.aCp(C.mz(0,null,null))}}
B.K9.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ao.prototype={}
B.aCp.prototype={
c5e(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMt(w,e))},
bZr(){var w=this
w.e.q()
w.e=C.mz(w.f,null,null)
w.m(new B.dMs(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oj(t,C.c7(v,A.bY,t?new B.bql(w.e,w.gc5d(w),new B.dMu(d),v):new B.aGF(u,new C.cy(u.b,x.gj)),v,!1,!1,v,!1),new B.dMv(w,u),x.C)}}
B.brU.prototype={}
B.bql.prototype={
aY2(d,e){var w=null
return new C.D(I.YD,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eZH,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nk,v,v,v,w.e,v,v,v,v,v,v),A.rH,D.bx5],u),A.m,v,A.e,A.j,0,v,v),s=w.aY2("STUDIOS","Play, make things, and keep what you make")
$.bDp()
return C.bl(!0,C.v(C.a([new C.D(D.bw8,t,v),C.E(C.vt(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m7(s,v),new C.nO(A.hM,C.OF(new C.om(new B.eWP(d),22,!0,!0,!0,0,C.rS(),v),D.aO2),v),new C.m7(w.aY2("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nO(D.brn,C.OF(new C.om(new B.eWQ(w),6,!0,!0,!0,0,C.rS(),v),D.aO2),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)}}
B.aet.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n3,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aet],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eE(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fq,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adl.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n3,A.d.gJ(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aet],w)
v=C.I(A.d.gJ(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cy,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gJ(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGK,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bq(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gJ(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BK,A.d.gJ(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fq,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RL,26),new C.ac(-6,A.G,A.d.gJ(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gJ(i),A.c,0.14)
p.toString
o=A.d.gJ(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.deM,j),A.n),A.be),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brj(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f0h,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.SY)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fJ,C.B(C.a([s,A.er,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c0(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
B.brj.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j2(0,0.35)
t=C.cl(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aY(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.bqP.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bfn,D.adE],x.O),t=this.e,s=C.I(A.d.gJ(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k6,24)],x.V),q=C.m(22),p=A.d.gJ(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.jl,A.d.gJ(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b93(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.be),w)}}
B.b93.prototype={
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
q.delete()}u=e.e9(A.J)
$.W()
t=C.N()
t.b=A.af
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
au(d){return!1}}
B.aGF.prototype={
S(){return new B.aGG(new C.cs(null,x.A),null,null)}}
B.aGG.prototype={
gtX(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.boM,null,1,null,v)
w.cI(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZ3(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fd(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gaw6(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc5b(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUA(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVg(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb5H(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtX()
w.da()
w.dS$.K(0,this.gcux())},
cuy(){var w,v,u,t,s,r,q,p=this,o=p.gtX().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaw6().a){case 0:w=D.nn
break
case 1:w=D.ub
break
case 2:w=D.a21
break
case 3:w=D.nn
break
case 4:w=D.d2E
break
case 5:w=D.ub
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9s)r=0.09
else r=s===D.a9t?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bY5[v]
B.lg("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.By("bell",D.c5P,1400,0.35)}}p.ax=o},
q(){this.gtX().q()
this.gZ3().q()
this.bvS()},
afz(){var w=this
w.gtX().cTB(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eWv(w))},
cfG(){this.gtX().bY(0)
this.m(new B.eWu(this))},
ad9(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ad9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaVg(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5H(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aN),$.aw()))}o=C.C(u.gaUA(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bQ(F.n3,null,new B.eWt(u,l,m,o),t,!0,!0,!0,A.lv,!1,!1,x.H),$async$ad9)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$ad9,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaw6(),f=i.a.c,e=f.b,d=i.gc5b(),a0=new B.Ao(g,e,f.c,d,i.gaUA(),i.gaVg(),i.gb5H())
f=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o3:O.re,A.ad,h,h,h,21),h,h,h,new B.eWD(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bOW,h,h,h,i.gc5c(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mA,h,h,h,new B.eWE(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZ3(),new B.eWF(i,a0),h),C.cq(new B.eWG(i,a0))],g)
u=i.as
t=u?i.gcfF():i.gchY()
u=u?D.bEC:A.tZ
s=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cd),C.E(C.c6(i.gtX(),new B.eWH(i,a1,a0),h),1),C.aH(h,h,h,h,D.bLl,h,h,h,new B.eWI(i),h,h,h,h,"Replay",A.cd)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
r.toString
s=B.hB(r,u+"x","Speed",2.5,0.4,new B.eWJ(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dc7[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eWK(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bYq[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gJ(o).A(0,A.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gJ(o).A(0,A.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gJ(o).A(0,A.d.gJ(n))?A.c:A.b3
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gJ(o).A(0,A.d.gJ(n))?2.5:1,A.q,-1)
d.push(C.aD(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agF,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eWL(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jK(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b0,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxQ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
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
n.k_(p)
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
e.push(new C.cL(0,r*118,0,f,f,f,new C.kF(q,new C.iH(n,f,A.b_,!0,f,new B.PN(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nn[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gJ(w)
v=D.nn[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mi(new B.bpY(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bOd(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.ub[r]
p=A.pH.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.ub[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.ub[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jJ(n,n,n,1)
m.fB(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PN(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fB(3.141592653589793)
k=new C.iH(k,f,A.A,!0,f,new B.bqP(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kF(q,new C.iH(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
czu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a21[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.bto(d.d,l,D.avn,m,B.bqk(e,0.4,0.62),f,B.bqk(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fWo(g,w)
q=D.avn[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fWo(g,w)
r=D.a21[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kF(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.TH,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bDZ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqk(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bpp(A.d.gJ(a1),B.bqk(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e2T),f,f,f),0,0,0))
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
l.jJ(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kF(k*(0.45+0.55*o),C.dU(new C.iH(l,f,A.A,!0,f,new B.PN(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b1(w,new B.eWm())
A.d.v(a0,new C.L(w,new B.eWn(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bDb(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.ub[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mP.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.ub[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axl[q]
k=C.dp()
k.mL(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jJ(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.ub[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kF(m,C.dU(new C.iH(k,e,A.A,!0,e,new B.PN(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.ub[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dU(new C.mi(new B.b9J(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.axl[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAL(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e2X],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nn[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.axs[r]
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
f.mL(l*h+D.d6v[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jJ(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kF(g,C.dU(new C.iH(f,a3,A.A,!0,a3,new B.PN(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nn[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axs[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dU(new C.mi(new B.bpr(A.d.gJ(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bpY.prototype={
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
t.z=G.mD
d.aD(q,t)
t=C.bx(u,A.hc)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bpp.prototype={
a4(d,e){var w,v,u=this.c,t=C.cl(e.e9(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.af
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.Hp
d.hR(t,u)
u=C.N()
u.b=A.af
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hR(t,u)
u=t.cC(-14)
v=C.N()
v.b=A.af
v.c=1
v.r=w.j(0.3).gp(0)
d.hR(u,v)},
au(d){return!0}}
B.b9J.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.e9(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.N()
w.b=A.af
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gJ(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.eM()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gJ(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
au(d){return!0}}
B.bpr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.e9(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cl(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.af
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.bto.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b_,A.b4,A.x,C.a([A.d.gJ(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aY(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fWo(c5,f)
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
a7=C.aq(A.d.gJ(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b_,A.b4,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
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
a6.push(new C.bF())
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gJ(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
a4.delete()
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.af
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c_(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cE(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbL().a.snapshot()):a2).a,a4)
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
a1.saq(new C.a8(A.b_,A.b4,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMo.prototype={
aS(){this.b0()
this.aX()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdC())
w.b2$=null
w.a2()}}
B.a_V.prototype={
a5(){return"_Role."+this.b}}
B.q0.prototype={}
B.qG.prototype={}
B.Cb.prototype={}
B.YS.prototype={}
B.aej.prototype={}
B.a07.prototype={
gZ(d){return this.d}}
B.Cl.prototype={}
B.abc.prototype={}
B.abt.prototype={}
B.adp.prototype={}
B.bgc.prototype={
a27(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6I(d,e,f){return this.a27(d,e,f,0,0.55)},
aAF(d,e,f,g){return this.a27(d,e,f,0,g)},
b6J(d,e,f,g){return this.a27(d,e,f,g,0.55)},
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
aje(d,e,f,g){var w="n"+this.ay++,v=new B.qG(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
AZ(d,e,f){return this.aje(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bp(w.b,new B.dgm(e))
A.d.bp(w.c,new B.dgn(e))
w.aW()},
bav(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mC.h(0,v.b).c===D.wG)return!1
w=this.b
if(A.d.b4(w,new B.dgj(d,e)))return!1
w.push(new B.Cb(d,e))
this.aW()
return!0},
bYp(d){var w
if(d.b==="beat")return D.c5Y[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aE7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.axH[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cl(u,t,j.ax,90))
w.push(new B.Cl(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a07(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6I(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a07(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.Cl(u,t,j.ax,120))
j.aAF(120,200,"noise",0.5)
j.b6I(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cl(u,t,j.ax,230))
w.push(new B.Cl(u,t,j.ax+160,160))
w.push(new B.Cl(u,t,j.ax+320,100))
j.b6J(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abc(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6J(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abt(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aG(0,260+w.aj()*200)),t,j.ax))
j.a27(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a27(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adp(u,D.ax8[v],t,j.ax))
j.aAF(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAF(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c24[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cpF(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.f7(w,new B.dgk(d));v.C();)j.azb(w.gR(0),j.ax+D.cem[A.o.E(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cvg[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.f7(w,new B.dgl(d));v.C();)j.azb(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.z9(w,0,v-700)},
cpF(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YS(e,"~"+d))},
azb(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aej(d.a,v,e,w))
u.push(new B.YS(w,v))},
aHu(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.C(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aE7(r)
u.n(0,r,o.ax+o.bYp(s))}}w=o.c
v=C.U(w).k("a0<1>")
q=C.C(new C.a0(w,new B.dgo(o),v),v.k("J.E"))
if(q.length!==0){A.d.bp(w,new B.dgp(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b3(u,1)
for(u=A.d.gaf(v),r=new C.f7(u,new B.dgq(p));r.C();)o.azb(u.gR(0),o.ax)}else o.aE7(u)}}A.d.bp(o.d,new B.dgr(o))
A.d.bp(o.e,new B.dgs(o))
A.d.bp(o.f,new B.dgt(o))
A.d.bp(o.w,new B.dgu(o))
A.d.bp(o.x,new B.dgv(o))
A.d.bp(o.r,new B.dgw(o))
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
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cLj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aH(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.t(J.q(v,"k"))
if(!D.mC.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qG(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cb(q,p))}k.aW()
return!0}catch(l){return!1}},
cOl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.bav(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
B.FE.prototype={}
B.Vv.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDF(new B.bgc(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cH,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDF.prototype={
abK(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abK=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$abK)
case 6:q=n.jL(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.elt(s))
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
return C.i($async$abK,v)},
a8I(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8I=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eli(s))
u=3
w=6
return C.b(C.aA(),$async$a8I)
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
return C.i($async$a8I,v)},
bJX(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.elk())+"|"+A.d.cJ(o,0,new B.ell())
if(v===p.ch)return p.CW
u=new B.elo()
t=x.s
s=C.a([],t)
r=new B.elp(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.f7(n,new B.elm());w.C();){q=n.gR(0)
if(!A.d.b4(o,new B.eln(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abK()
v.d.db=v.ay
w=v.qy(new B.elT(v))
w.iT(0)
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
w.buS()},
abg(d){return this.bXS(d)},
bXS(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abg=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$abg)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cLj(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVJ(A.d.gJ(D.awC))
if(s.c!=null)s.m(new B.els())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abg,v)},
aVJ(d){this.d.cOl(0,d.c,d.d)
this.E3()},
E3(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lM,new B.ele(this))},
aw7(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
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
cdF(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
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
bXG(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mC.h(0,r.b).c===D.wG)continue
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
c5h(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hiV(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cxf(d){var w,v,u,t,s,r,q=this,p=q.aw7(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aE7(p)
return}if(q.r)return
t=D.mC.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qv)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aW()
q.E3()
return}if(q.r)return
r=q.c5h(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aW()
q.E3()}},
ceY(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cdF(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aw7(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
ceZ(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_J(){var w,v,u=this
if(u.z!=null){w=u.bXG(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bav(v,w)}else v=!1
if(v){C.jR()
u.E3()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.E3()
u.x=null}},
abY(d){return this.c_z(d)},
c_z(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abY=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aw7(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bQ(F.n3,null,new B.elv(q),p,!0,!0,!1,A.lv,!1,!1,x.y),$async$abY)
case 3:if(f===!0){r.W(0,s)
t.E3()}case 1:return C.h(u,v)}})
return C.i($async$abY,v)},
c5f(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AZ(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.E3()},
afH(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bQ(F.n3,null,new B.elx(),s,!0,!0,!0,A.lv,!1,!1,x.es),$async$afH)
case 2:t=e
if(t!=null)u.aVJ(t)
return C.h(null,v)}})
return C.i($async$afH,v)},
ada(d){var w=0,v=C.j(x.H),u=this,t
var $async$ada=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.elh(),t,null,!0,!0,x.y),$async$ada)
case 2:if(f===!0){u.d.a9(0)
u.E3()}return C.h(null,v)}})
return C.i($async$ada,v)},
B(d){var w=this,v=null,u=C.a([C.ahJ(w.r?new C.bI(A.a3,v,v,new C.D(A.Fr,C.hg(D.bJl,D.fgK,new B.elR(w),v),v),v):w.c5i(),A.bc,A.iy),C.E(C.cq(new B.elS(w)),1)],x.p)
if(!w.r)u.push(w.cs6())
return C.c7(v,A.bY,C.bl(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)},
bFF(){var w=null,v=new B.elj(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bu.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.cd(C.v(C.a([D.frG,A.at,D.fz4,A.aB,v.$4(A.oQ,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BI,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lk,A.bW,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akz,A.c4,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fyo,new C.bI(A.a7,w,w,C.bK(!1,D.foV,w,w,!0,w,w,this.gbFy(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.Vf,new C.o(F.n3,w,s,t,w,w,A.n),w,w,w,A.fA,A9.ahV,w,w,w),w,w,w),u,!0),0,0,0)},
c5i(){var w=this,v=null,u=C.aH(v,v,v,v,S.nk,v,v,v,new B.elD(w),v,v,v,v,v,v),t=w.a8a(A.Ns,"How it works",new B.elE(w),!0),s=w.ay?A.o3:O.re
return new C.D(D.bvo,C.B(C.a([u,D.bwS,t,w.a8a(s,"Sound",new B.elF(w),!0),w.a8a(A.dW,"Ideas",w.gciG(),!0),w.a8a(D.y4,"Clear",w.gc5g(w),!0),w.aMJ(A.iC,"Show",new B.elG(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMJ(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ae.vu,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hs(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a8a(d,e,f,g){return this.aMJ(d,e,f,g,!1)},
cs6(){var w=null,v=new B.elz(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wG),v.$2("CHANGE",D.DF),v.$2("REACT",D.qv)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.Ax,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bqG,w,w,w)},
cs7(d){var w,v,u,t,s=null,r=D.mC.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fz,C.aD(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aQ2,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hL,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ely(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bgd.prototype={
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
b8.aY(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d.push(new C.pA(h+a1,i,f-a1,g,f,g))
a2=D.mC.h(0,k.b).d
a3=D.mC.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.af
e.c=3
e.d=A.bP
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rs(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hiV(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mD
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HW)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pA(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.af
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aP(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.b=A.af
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
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
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
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
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bge(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cew(b8,b5.d,b6)
b7.restore()},
cew(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mC.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cl(e.c,64,64)
t=C.bx(u,A.jK)
s=t.eQ(A.cy)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lt
d.aD(s,r)
if(v>0){s=t.cC(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yY
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
r.saq(new C.a8(A.b_,A.b4,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.N()
r.b=A.af
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bge(C.jJ(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aC(0,new C.u(s/2,r.gbd(r)/2)))
n=B.bge(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.ax8[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qv){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axH[A.o.E(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bge(m,9.5,A.aA,j,j,A.N)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bge(m,9.5,A.aA,j,j,A.N)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wG)k.b0y(d,e.c.aC(0,D.HW),q)
k.b0y(d,e.c.ad(0,D.HW),q)},
b0y(d,e,f){var w
$.W()
w=C.N()
w.r=A.bY.gp(0)
d.ae(e,9,w)
w=C.N()
w.b=A.af
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
au(d){return!0}}
B.aLv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bkN.prototype={}
B.PE.prototype={
gZ(d){return this.d}}
B.VK.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjR(new C.cs(null,x.A),w,v,A.cH,A.bx,D.EE,null,null)}}
B.bjR.prototype={
aZh(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bv((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aw1[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lg("synth",u,420,0.3)
break
case"rainbow":B.lg("bell",u,700,0.35)
break
case"stars":B.lg("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c8h(d){return this.aZh(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qy(new B.exy(v))
w.iT(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bv0()},
gb02(){var w=this.Q
return w<0?new H.mO(1,A.k.E(this.y*0.18,360),0.85,1).iB():D.Qt[w]},
aR5(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb02(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.c4,A.ay,v.aj())
m.toString
j.push(new B.PE(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PE(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PE(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aY4(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb02()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkN(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aR5(e)
r.aZh(e,!0)
r.m(new B.ex9())},
aY3(){this.ax=null
this.m(new B.ex8())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mA,n,n,n,new B.exi(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bre(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b4E)
k=C.aD(A.c5,new C.an(A.W,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.exj(o),new B.exk(o),new B.exo(o),n,n,n,n,n,n,n,n,n,new B.exp(o),new B.exq(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cTe[w]
j.push(new B.dA(v.b,o.z===v.a,new B.exr(o,v),v.c,A.bW,n))}u=C.a([new B.F3(A.c,o.Q<0,new B.exs(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F3(D.Qt[t],o.Q===t,new B.ext(o,t),!1,n))
s=o.as
s=B.hB(A.bW,A.o.u(A.k.V(s)),"Size",36,4,new B.exu(o),s)
r=o.ch
q=r?A.o3:O.re
q=C.a([new B.dA("Sound",r,new B.exv(o),q,A.bW,n),new B.fi(A.rd,"Undo",new B.exl(o),A.c,n),new B.fi(D.y4,"Clear",new B.exm(o),A.cb,n)],m)
for(w=0;w<4;++w){p=D.d83[w]
q.push(new B.F3(p,o.at.A(0,p),new B.exn(o,p),!1,n))}return B.jK(A.bW,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bre.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.aY(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gJ(q).a,A.d.gJ(q).b))
for(p=C.U(q),m=p.k("nj<1>"),l=new C.nj(q,1,a5,m),l.zF(q,1,a5,p.c),l=new C.bS(l,l.gM(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bB(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gJ(q)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bP
q.e=A.fB
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hw(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bP
q.e=A.fB
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bP
q.e=A.fB
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
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
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gJ(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mO(1,A.o.E(a3*23,360),0.7,1).iB():l
a4.c5j(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.QX
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c5j(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bB(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bB(q)
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
S(){return new B.aDV(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aN),$.aw()),null,null)}}
B.aDV.prototype={
gID(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tA,null,1,null,v)
w.cI(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gID()
w.da()
w.dS$.K(0,this.gbWN())},
bWO(){var w,v,u,t,s,r,q,p=this,o=p.gID().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m1:new C.m8(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lg(s,D.auZ[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gID().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bv6()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m8(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.Qt[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mA,j,j,j,new B.eE7(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.ax9[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gID(),new B.eE8(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Dj,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eE9(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hs,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cv2[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eEa(k,q),j,A.c4,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F3(D.Qt[o],k.w===o,new B.eEb(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o3:O.re
l=C.a([new B.dA(m,n,new B.eEc(k),l,A.c4,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F3(D.ax9[o][0],k.y===o,new B.eEd(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mw,"Replay",new B.eEe(k),A.c,j))
m=k.x
return B.jK(A.c4,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bD,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.O,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hB(A.c4,A.o.u(A.k.V(m)),"Size",96,28,new B.eEf(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZB(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
else w=u?A.bW:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mP.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mO(1,A.k.E(g*360+e*40,360),0.75,1).iB()
A.d.a9(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dU(C.ed(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLE.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aLK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.a_p.prototype={}
B.Vs.prototype={
S(){var w=C.a([],x.aS)
return new B.aDx(new C.cs(null,x.A),w,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDx.prototype={
gadb(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b1i(){return new H.mO(1,this.f.aj()*360,0.6,1).iB()},
aqG(d,e,f,g){var w=this,v=w.gadb().ad(0,new C.u(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_p(v,new C.u(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b1i(),C.a([],x.g)))},
bF_(d,e,f){return this.aqG(d,e,f,!1)},
bEZ(d,e){return this.aqG(d,e,1,!1)},
cus(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bEZ(40+w*u/5,v.aj()*3.141592653589793*2)},
bFU(){var w=this.r
this.bF_(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.le()},
lx(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fS$<300)return
u=a2.gadb()
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
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
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
B.lg("bell",D.auZ[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a0(w,new B.ei_(u),C.U(w).k("a0<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bp(w,new B.ei0(a2,u))},
ciz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadb()
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
gaVl(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mA,r,r,r,new B.ehO(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.ehP(s)),n=s.w
n=B.hB(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.ehQ(s),n)
w=s.x
w=B.hB(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.ehS(s),w)
v=s.Q
v=B.hB(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ehT(s),v)
u=s.ax
t=u?A.o3:O.re
return B.jK(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.ehU(s),t,A.cs,r),new B.dA("Trails",s.z,new B.ehV(s),A.NI,A.cs,r),new B.dA("Planets pull each other",s.y,new B.ehW(s),A.ys,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fi(A.mv,"Solar system",new B.ehX(s),A.cs,r),new B.fi(A.nj,"Comet",new B.ehY(s),A.c,r),new B.fi(A.ms,"Cluster",new B.ehZ(s),A.c,r),new B.fi(D.y4,"Clear",new B.ehR(s),A.cb,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bkA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.Wy.gp(0)
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
t.saq(D.eeE.av(0,C.bU(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
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
q.z=G.mD
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
d.bE(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abj.prototype={}
B.VR.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjW(new C.cs(null,x.A),w,v,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjW.prototype={
a_(){this.a1()
this.le()},
c5k(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
lx(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c5k()
w=a2.f
A.d.bp(w,new B.eDz(a2))
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
A.d.bp(w,new B.eDA(a2))
if(w.length<a1&&a2.ch)B.lg("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fS$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fS$
B.lg("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mA,l,l,l,new B.eDo(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eDp(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cUR[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eDq(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cEY[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eDr(m,t),l,A.b2,l))}s=m.ch
r=s?A.o3:O.re
r=C.a([new B.dA("Sound",s,new B.eDs(m),r,A.b2,l)],k)
s=m.x
s=B.hB(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eDt(m),s)
q=B.hB(A.b2,l,"Together",2.5,0,new B.eDu(m),m.y)
p=B.hB(A.b2,l,"Apart",2.5,0,new B.eDv(m),m.z)
o=B.hB(A.b2,l,"Same way",2.5,0,new B.eDw(m),m.Q)
n=m.as
return B.jK(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hB(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eDx(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bs5.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adt,D.bkl],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,U.Lj],v):C.a([D.bhi,D.b8A],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b_,A.b4,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aY(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c4.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c4.j(0.25).gp(0)
n.z=G.mD
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
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
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bF())
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbL().a.snapshot()
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
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cU(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cU(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cA,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eJv))
o=j.H()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cb
else a1=v==="scare"?A.c4:A.b2
v=u?12:22
u=C.N()
u.b=A.af
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
au(d){return!0}}
B.abM.prototype={}
B.U_.prototype={
S(){var w=C.a([],x.bi)
return new B.aC7(w,A.cH,A.au,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC7.prototype={
gI0(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gace(){return 54-8*(this.r/100)},
a_(){this.a1()
this.le()
B.zm("chain_burst").bz(new B.dFN(this),x.P)},
aY6(){return B.vS("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azf(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
Z4(d){var w,v=this
if(d==null)return 0
w=(v.fS$-d)/1000
if(w<0.4)return v.gace()*A.dU.aw(0,w/0.4)
if(w<1.1)return v.gace()
if(w<1.5)return v.gace()*(1-(w-1.1)/0.4)
return 0},
lx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.azf()
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
if(v!=null)n.push(new C.z(v,j.Z4(j.ax)))
for(v=A.d.gaf(w),s=new C.f7(v,new B.dFO());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Z4(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fS$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eU()
break}}}if(!(j.at!=null&&j.Z4(j.ax)>0||A.d.b4(w,new B.dFP(j)))&&j.fS$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gI0()){if(j.as>=j.gI0()*1.5)k=3
else k=j.as>=j.gI0()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aY6()}else E.dF(120,"",300,0,0.3,"saw")}}},
aY5(d){this.m(new B.dFD(this,d))
this.aY6()},
adc(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adc=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dFG(u),s,null,!0,!0,x.S),$async$adc)
case 2:t=e
if(t!=null)u.aY5(t)
return C.h(null,v)}})
return C.i($async$adc,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gI0(),t=w.x.h(0,""+w.r)
return B.jK(A.bW,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dFK(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.r9,"Levels",w.gc5l(),A.bW,v),new B.fi(A.k0,"New board",new B.dFL(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
aua(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPo,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bXi(d,e){return this.aua(d,e,A.c)}}
B.ba3.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EE.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKS(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mD
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
B.aKD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwh.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.btY()}}
B.aLs.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buP()}}
B.aLH.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwG.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bv3()}}
B.FA.prototype={
gcNB(){return this.a.aC(0,this.b).gcm()>4}}
B.acB.prototype={}
B.Vm.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjv(new C.cs(null,x.A),w,v,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjv.prototype={
aOJ(d){return new H.mO(1,A.o.E(d*29,360),0.6,1).iB()},
ZP(d){var w,v=D.Ch.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bv(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e4(w,u)},
aRm(d){A.d.bp(this.e,new B.edt(this,d))},
cqx(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ad(0,w.aG(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
axL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.ZP(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.FA(p,r,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZP(h)
f.push(new B.FA(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZP(h)
f.push(new B.FA(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}}},
a_(){this.a1()
this.le()},
c5n(d,e){var w,v=this.fS$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lg(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lx(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acB(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mO(1,v.aj()*360,0.5,1).iB()))}if(u>3)a2.as=0
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
if(a1<0){a2.c5n(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bp(w,new B.edS(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o3:O.re,A.ad,p,p,p,21),p,p,p,new B.edH(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mA,p,p,p,new B.edI(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.edJ(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cYe[w]
l.push(new B.dA(v.b,q.x===v.a,new B.edK(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Ch.geb(D.Ch));t.C();){s=t.gR(t)
u.push(new B.dA(s,q.y===s,new B.edL(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ay3[w]
t.push(new B.dA(r.b,q.z===r.a,new B.edM(q,r),p,A.b8,p))}s=q.Q
return B.jK(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hB(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.edN(q),s),new B.eQ(C.a([new B.fi(D.bFb,"Stairs",new B.edO(q),A.b8,p),new B.fi(An.Nr,"Pinball",new B.edP(q),A.c,p),new B.fi(A.ms,"Random",new B.edQ(q),A.c,p),new B.fi(D.y4,"Clear",new B.edR(q),A.cb,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh7.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bW9.av(0,new C.a9(0,0,a0,a1)))
a2.aY(new C.a9(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bP
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jo
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
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
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.ro
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
S(){var w=C.a([],x.gB)
return new B.aDw(new C.cs(null,x.A),w,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDw.prototype={
gaY7(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axY(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
aza(d){var w=D.Ch.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e4(v,u)},
a_(){this.a1()
this.le()},
aQ5(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.ad6(w,A.k.E(t/v+u,1)))}},
lx(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fS$
if(p.Q){r=p.z
s=p.aza(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lg(r,s+12,q,0.55)}}}},
c5o(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaY7()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axY(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.U(s))
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
m=h.axY(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ehn(h,n).$0()
h.c.ec()
return}}h.m(new B.eho(g,h,t))
if(h.Q)B.lg(h.z,h.aza(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o3:O.re,A.ad,q,q,q,21),q,q,q,new B.ehv(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mA,q,q,q,new B.ehw(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ehx(r)),m=r.x
m=B.hB(A.bt,""+A.k.V(m),"Tempo",180,40,new B.ehy(r),m)
w=C.a([],p)
for(v=J.aV(D.Ch.geb(D.Ch));v.C();){u=v.gR(v)
w.push(new B.dA(u,r.y===u,new B.ehz(r,u),q,A.bt,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ay3[t]
v.push(new B.dA(s.b,r.z===s.a,new B.ehA(r,s),q,A.bt,q))}return B.jK(A.bt,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fi(A.dW,"Demo",new B.ehB(r),A.bt,q),new B.fi(A.ms,"Random",new B.ehC(r),A.c,q),new B.fi(D.y4,"Clear",new B.ehD(r),A.cb,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bkB.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.Wy.gp(0)
a5.aY(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.u(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a8(A.b4,A.b_,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mO(1,A.k.E(s.$1(l)*23,360),0.55,1).iB()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.af
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.deG[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.eq(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.ca,new C.ju(1),a4,a4,a4,a4,A.c8,a4)
i.ey()
o=i.b.c
m=J.fQb(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.saq(D.eeg.av(0,C.bU(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mO(1,A.k.E(s.$1(a0)*23,360),0.55,1).iB()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fQb(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.af
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
B.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bww.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buN()}}
B.aLr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwx.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buO()}}
B.tb.prototype={}
B.b8X.prototype={}
B.Vp.prototype={
S(){var w=x.S
return new B.aDu(C.a([],x.aq),C.T(w,w),C.aX(w),D.ePm)}}
B.aDu.prototype={
a_(){this.a1()
B.zm("molecule_maker").bz(new B.egS(this),x.P)},
aiN(d){var w={}
w.a=0
this.f.bJ(0,new B.egE(w,d))
return w.a},
gaYd(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i_R(t,this.f,D.a2x[this.d])},
c5F(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eM()
w.dB(t*7+3)
t=v.y
v.m(new B.egy(v,e,t.a,w,t.b))
B.vV("pop",u.length,90,0.35)},
awb(d){return this.m(new B.egz(this))},
aYe(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c5L(d){this.m(new B.egD(this,this.aYe(d)))},
cn1(){var w=this.r
if(w==null)return
this.m(new B.egC(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2x[k.d],h=k.gaYd()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w1.h(0,w[u].a).a-k.aiN(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.egM(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hw
r=x.p
s=C.v(C.a([new C.D(A.fI,B.fbq(w,s,h&&k.d<12?new B.fi(A.iW,"Next",new B.egN(k),A.b2,j):j),j),C.E(C.cq(new B.egO(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2x[u].b,k.d===u,new B.egP(k,u),j,A.hw,j))}q=C.a([],r)
for(p=D.w1.gdK(D.w1),p=p.gaf(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.egQ(k,o),j,l,j))}return B.jK(A.hw,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcn0(),A.e6,A.cb,j),new B.dA("Clear all",!1,k.gc5G(k),A.k0,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhP.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hw.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bJ(0,new B.dos(a2,a4))
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
h.saq(new C.bT(A.JL,0.5,A.x,a3,0,C.a([f,g,e],r),I.awa,a3).av(0,i))
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
d.a4(a4,new C.u(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.bk:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nw),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
a1.ey()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.hr(a3,a3,a3,a3,D.eY1,A.a4,A.ca,a3,A.e0,A.c8)
d.ey()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.Un.prototype={
S(){var w=x.s
return new B.biL(C.a([],w),C.a([],w))}}
B.biL.prototype={
a_(){this.a1()
this.avv()
B.zm("dna_lab").bz(new B.dOx(this),x.P)},
gb2x(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3C.h(0,w[u])
t.toString
s.push(t)}return A.d.fZ(s)},
ga8J(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2x(),w,v))}return u},
avv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eM()
k.dB(l.e*31+l.d*7+C.BL(new C.S(Date.now(),0,!1)))
w=new B.dOm(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mF(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3C.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fZ(r))}if(!A.d.b4(t,new B.dOl()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b0f()},
b0f(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fYW(s.ga8J()[r])
v=J.dH(D.Ci.geb(D.Ci),new B.dOn(w)).dH(0)
u=new C.eM()
u.dB(r+s.e)
A.d.fm(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eM()
t.dB(s.e*3+r)
A.d.fm(u,t)
s.z=u},
aYc(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dkG.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3C.h(0,w.f[v])
u.toString
break A}u=B.fYW(w.ga8J()[v])
break A}w.m(new B.dOk(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOv(),e=new B.dOq(),d=h.d===2?h.gb2x():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mL,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bW.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bW:A.bG,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8J()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cm(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,D.bpN,A.ek,g,g,g))}v.push(C.bW(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bW(A.bz,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Aj.Ny,j<t.length?A.aA:A.bG,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.LX,C.bW(A.bz,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mL,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dq
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b2:A.b3,1,A.q,-1)
if(o){o=D.Ci.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bW(A.bz,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bW(A.bz,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fbq(u,t>=(h.d===2?3:9)?A.b2:A.bW,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fbq(u,A.bW,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.TA,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bD,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d2S[j],h.d===j,new B.dOr(h,j),g,A.bW,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.k0,"New strand",new B.dOs(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.Ci.h(0,i)
q.toString
a0.push(new B.fi(D.a_t,q,new B.dOt(h,i),A.bW,g))}u.push(C.bW(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.av3:D.cN7
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aD(g,C.p(A.A,new C.x(k,g,D.eYg,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bq(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOu(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.B(a0,A.m,g,A.q4,A.j,0,g,g))}return B.jK(A.bW,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.UD.prototype={
S(){return new B.aCB(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCB.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(v.gc5H())
w.iT(0)
v.d!==$&&C.aP()
v.d=w
B.zm("ecosystem").bz(new B.dRm(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.buc()},
gaM3(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c5I(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaM3()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bv(w),5)===0)B.vS("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
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
a9V(d){this.m(new B.dR8(this,d))
B.vV("pop",3,120,0.4)},
c5K(){return this.m(new B.dRa(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.D(D.Yb,B.fbq(r,t.gaM3()?A.b2:A.cb,s),s),C.E(new C.D(D.bqj,C.bw(C.m(18),C.b3(s,s,s,new B.bd8(t.f,t.r,t.w,s),A.f1),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f4i,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hB(A.b2,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dRe(t),w)
v=t.y
v=B.hB(A.bO,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRf(t),v)
u=t.z
return B.jK(A.b2,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hB(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRg(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dRh(t),A.yq,A.aM,s),new B.dA("Disease",!1,new B.dRi(t),D.bF3,A.bt,s),new B.dA("+ Foxes",!1,new B.dRj(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRk(t),s,A.bO,s),new B.dA("Reset",!1,t.gc5J(),A.k0,A.aR,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bd8.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bU9.av(0,new C.a9(0,0,d,a0)))
a1.aY(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v3,A.bk,A.k.D(w[0]/100,0,1))
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
l.delete()}k=new B.d3A(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bd9.gp(0)
a1.aY(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dq.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3C(h,j,a1)
g.$3(0,100,A.bk)
g.$3(1,120,A.bO)
g.$3(2,24,A.cs)
g=new B.d3B(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bk,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bO,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aKR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aRf.prototype={
guV(){return A.d.cJ(this.a,0,new B.bFt())}}
B.TS.prototype={
S(){var w=x.S
return new B.bip(B.hXW(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bip.prototype={
gvS(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dBY())},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dCa(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("balance_lab").bz(new B.dCb(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btQ()},
cxs(d){var w,v=this
v.m(new B.dBZ(v,d))
B.vV("click",v.f[d],60,0.4)
if(v.gvS()===v.d[v.e].guV()&&v.r.K(0,v.e)){B.vV("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vS("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.L(k,new B.dC3(),C.U(k).k("L<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvS()===m[o.e].guV())s="\u2696\ufe0f Balanced! "+m[o.e].guV()+" = "+o.gvS()+". The torques are equal, so the seesaw stays level."
else s=o.gvS()>m[o.e].guV()?"The right side is too strong ("+o.gvS()+" vs "+m[o.e].guV()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guV()+" vs "+o.gvS()+"). Add weight to the right, or place it further from the middle."
k=o.gvS()===m[o.e].guV()?A.b2:A.aM
k=B.bzs(s,k,o.gvS()===m[o.e].guV()&&o.e<m.length-1?new B.fi(A.iW,"Next",new B.dC4(o),A.b2,n):n)
w=C.E(C.cq(new B.dC5(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guV(),n,n,n,n,n,n,D.aQA,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.D(D.Yb,k,n),w,new C.D(D.ah6,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvS(),n,n,n,n,n,n,D.aQA,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dC6(o,v),n,A.aM,n))}return B.jK(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dC7(o),A.k0,A.cb,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b98.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
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
d.j2(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hd)
w=C.N()
w.saq(D.bWR.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hJ.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.foA(d,""+Math.abs(s),new C.u(w,22),A.c1,10)}q=new B.cDp(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aR)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bW)
if(w[s]===0){l=C.bx(C.cl(new C.u(m,-22),22,v),A.hd)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.af
k.c=1.4
k.r=A.b3.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.foA(d,"+",new C.u(m,-22),A.c1,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.ae(new C.u(h,f),7,i)},
au(d){return!0},
gji(){return this.e}}
B.UR.prototype={
S(){return new B.biX(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.biX.prototype={
ga0h(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadm(){var w=this.ga0h(),v=this.r,u=D.axM[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dVp(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("gear_lab").bz(new B.dVq(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buk()},
c5M(d,e){var w,v=this
v.m(new B.dVf(v,d,e))
if(v.gadm()&&v.w.K(0,v.r)){B.vV("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vS("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0h(),n=r.ga0h(),m=D.axM[r.r].a
m=r.gadm()?"\u2705 Done! Ratio "+A.k.aa(r.ga0h(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadm()?A.b2:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.D(D.Yb,B.bzs(m,w,r.gadm()&&r.r<7?new B.fi(A.iW,"Next",new B.dVj(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.beC(v,r.f,q),A.f1),1),new C.D(D.ah6,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga0h(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,R.a7i,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVk(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hB(A.aR,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVl(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.av9("Gear "+s+" teeth",p,new B.dVm(r,t),8,40,D.dci[t],""+p,q))}return B.jK(A.cs,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.beC.prototype={
bPb(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.efv,D.ekC,D.eAx,D.erG],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bB(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bB(m)
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
h=new B.dbA(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mW)
h.$5(new C.u(t,0),g[1],w[1],i,A.fk)
s.restore()
s=new B.dbB(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aR)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.U0.prototype={
S(){var w=$.aw()
return new B.biC(new C.as(new C.bb("Meet me at noon",A.b5,A.aN),w),new C.as(new C.bb("LEMON",A.b5,A.aN),w),C.aX(x.S))}}
B.biC.prototype={
a_(){this.a1()
this.aWW()
B.zm("cipher_lab").bz(new B.dG9(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aWW(){this.y=1+A.cH.aB(25)
this.z=0},
ga9c(){var w=this
return B.a1k(B.a1k(D.GR[w.x],w.y),-w.z)===D.GR[w.x]},
gax9(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1k(u,v.w)
break A}if(1===t){w=new C.L(C.a(B.a1k(u,0).split(""),x.s),new B.dFS(),x.dv).fZ(0)
break A}w=B.i9E(u,v.e.a.a)
break A}return w},
aSf(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bS(w,w.gM(0),v.k("bS<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fb(q,A.A6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bC(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aR,r,r,new C.bq(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mg,r,r,r,r),new C.x(C.jJ(65+s),r,D.f66,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lX,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG0(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f0n,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG1(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iI,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fwF)
w.push(A.at)
v=A.aR.j(0.12)
u=C.m(14)
t=C.I(A.aR.j(0.4),A.q,1)
w.push(C.p(o,C.zG(p.gax9().length===0?"\u2026":p.gax9(),D.f55,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bD,o,o,o))
w.push(A.ac)
w.push(B.bzs(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aR,o))
w.push(A.ac)
w.push(D.fdc)
w.push(A.at)
w.push(p.aSf(p.gax9()))
w.push(A.at)
w.push(D.ffC)
s=C.cw(w,o,A.bD,o,o,A.ah,!1)}else{w=B.bzs("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1k(D.GR[p.x],p.y),o,o,o,o,o,o,D.f5G,o,o,o)
u=(p.ga9c()?A.b2:A.aR).j(0.14)
t=C.m(14)
r=C.I((p.ga9c()?A.b2:A.aR).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fql,v,A.S,D.fkJ,C.p(o,C.d(B.a1k(B.a1k(D.GR[p.x],p.y),-p.z),o,o,o,o,o,o,D.f78,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bD,o,o,o),A.ac,p.aSf(B.a1k(D.GR[p.x],p.y)),A.O],x.p)
if(p.ga9c())t.push(B.bzs("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fi(A.k0,"Next",new B.dG2(p),A.b2,o)))
s=C.cw(t,o,A.bD,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dG3(p),A.jl,A.aR,o),new B.dA("Crack a code",w===1,new B.dG4(p),A.pW,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dG5(p,q),o,A.aR,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hB(A.aR,""+u,"Shift",25,1,new B.dG6(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hB(A.aM,""+v,"Shift back",25,0,new B.dG7(p),v))}return B.jK(A.aR,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aKv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aKZ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.eb.prototype={}
B.to.prototype={
app(d,e,f,g){var w=this
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
bcl(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9S(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c1F(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bp(w,new B.bLx())},
aje(d,e,f,g){var w="p"+this.c++,v=new B.to(w,e,f,g)
v.app(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bp(this.b,new B.bLI(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cFr(d,e,f,g,h){return A.d.b4(this.b,new B.bLD(e,f,g,h))},
ak_(d,e,f,g){var w
if(d===f||this.cFr(0,d,e,f,g))return null
w=new B.aaZ(d,e,f,g)
this.b.push(w)
return w},
azJ(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zB(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amz(d){return this.Lq(d)&&!d.x&&d.cx>this.zB(d)},
b4X(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lq(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5N(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yX.h(0,v)
if(w!=null)return w.a
return 100},
v2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c1F(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a0<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a0(v,new B.bLJ(a2),t).cJ(0,0,new B.bLK(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLM(o)
m=C.a([],x.t)
l=new B.bLL(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLO(g,l,n)
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
a2.b4T(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zB(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4T(e,d,w,!0)
a2.bM7(a4)},
b4T(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLz(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLy(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLB(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
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
if(h)C.b9(C.dI(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4X(t)*(1+t.CW))
a4=b2.azJ(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c5N(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bPa(e,a0,b8)
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
bPa(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c2(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bM7(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azJ(o)/a1.b4X(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zB(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bEh(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bcl(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tI(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tI(o,"The "+$.qc().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tI(o,"More than 1.5 amps went through the "+$.qc().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tI(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tI(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yX.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qc().h(0,n).b
l=f.b
l=l===A.k.k0(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.k0(g)?""+A.k.V(g):C.t(g)
a1.tI(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eNi.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tI(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tI(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tI(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tI(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tI(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tI(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bEh(d){return A.d.b4(this.a,new B.bLw(d))},
tI(d,e){var w
d.x=!0
d.ay=e
this.bcl(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bh_(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFP(d){var w=d.b
return D.aN3.t(0,w)||D.yX.ai(0,w)||w==="buck"||w==="regulator"},
bdM(d){var w,v=!0
if(!this.Lq(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yX.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Ul(d,e){var w=this.b
return new C.a0(w,new B.bLQ(d,e),C.U(w).k("a0<1>")).gM(0)},
Cp(d){var w,v
if(d.x)return!1
w=d.b
if(D.yX.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qc().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFP(d)||i.Cp(d))return null
w=i.Ul(d,0)
v=i.Ul(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a0<1>")
s=C.C(new C.a0(u,i.gcNV(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.k0(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yX.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFU("battery"),o=J.aV(t.a),t=new C.f7(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Ul(n,0)+i.Ul(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFU("switch"),o=J.aV(t.a),t=new C.f7(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qc().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zB(k))return"The "+$.qc().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zB(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bLE(i,d))
h=q.b
h=h===A.k.k0(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFU(d){var w=this.a
return new C.a0(w,new B.bLH(d),C.U(w).k("a0<1>"))},
aFs(d){return this.aFU(d).b4(0,new B.bLG(0.35))},
pL(d,e){return A.d.b4(this.a,new B.bLF(e))}}
B.aig.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.KZ.gp(0)
c0.aY(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lY.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lY.ai(0,h.b)?(h.ch-1)*38:0
b4.cCo(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hvt(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bP
c0.bE(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.ad2.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yY
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mP.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cfu(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zB(a0)){g=j+0
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
a3.push(new C.bF())
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbL().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.af
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbL().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.kh(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ey()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aN3.t(0,h)||D.yX.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cp(a0)&&r.Ul(a0,0)+r.Ul(a0,1)>0
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
j.r=F.KZ.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2.4
j.r=(i&&r.bdM(a0)?A.cb:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdM(a0)){a9=new C.kh(new C.eq("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cb,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ey()
a9.a4(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Xd,F.Xk,b2)
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
i.z=A.QY
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bGF())){b3=A.d.cJ(q,0,new B.bGG())
$.W()
b7=C.N()
b7.r=D.b8k.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.a9(0,0,b8,b9),b7)
a9=C.hr(b5,b5,b5,b5,D.eXV,A.a4,A.ca,b5,A.e0,A.c8)
a9.wC(b6-24)
a9.a4(c0,new C.u(12,10))}},
qk(d,e,f,g,h){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.ca,w,A.e0,A.c8)
v.ey()
v.a4(d,f)},
cCo(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hnY(a1,a2,a3)
d.F(new C.cU(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.ad2,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aR,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=C.N()
u.b=A.af
u.c=a4?7:5
u.d=A.bP
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aP(d,u)
u=C.N()
u.b=A.af
u.c=2.4
u.d=A.bP
u.r=(a4?A.c:o).gp(0)
a0.aP(d,u)
if(q){n=new C.Sg(new C.vw(C.x2(d),!1,C.a([],x.f5))).gJ(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jr()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jr()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jr()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jr()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jr()
i=t[u].Mw(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OI(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b_:A.a3
u=g?A.b4:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GT,null).av(0,d))
return w},
avl(d,e,f){return this.OI(d,e,f,!0)},
c1g(d,e){return this.OI(d,A.bl,A.iO,e)},
agN(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLG.av(0,C.bU(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.e4D)
v=e.ad(0,D.e4M)
u=C.N()
u.r=A.eb.gp(0)
u.c=1.2
d.bE(w,v,u)},
cfu(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bTP.av(0,D.eKe))
c0.c=3.4
c0.d=A.bP
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mD
c1.hR(D.eK6,w)
if(c3){w=C.bx(D.eKd,A.kz)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h43(c2)
c1.bE(new C.u(-u,0),D.e5V,c0)
c1.bE(D.e3L,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lY.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bBa(c1,c2)
break
case"solar":r=C.bx(D.eK9,A.im)
c1.aD(r,b3.OI(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bO,!1))
b9=C.N()
w=C.aq(D.bbE,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bjt,A.mi,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a6_))
c1.aY(D.a6_,b9)
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
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aP(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dP.j(0.9).gp(0)
c1.ae(D.e3R,4+4*w,b9)
break
case"crank":n=C.bx(D.eJV,A.he)
c1.aD(n,b3.avl(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.N()
b9.saq(D.aLH.av(0,C.bU(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bP
c1.bE(A.J,m,b9)
b9=C.N()
b9.saq(D.eez.av(0,C.bU(m,7)))
c1.ae(m,7,b9)
b3.agN(c1,D.e5O)
b3.agN(c1,D.e3E)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ao,b4,b4,C.a([],w))
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
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cU(6,-14,2,-30))
l.push(new C.cU(-2,-14,0,-2))
l.push(new C.bF())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbL().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.eef.av(0,C.bU(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eK1,A.rA)
b9=C.N()
b9.saq(D.aod.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agN(c1,D.RQ)
b3.agN(c1,D.aGw)
i=c2.w?D.aGw:D.e3o
b9=C.N()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bP
c1.bE(D.RQ,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bO).gp(0)
b9.c=4
b9.d=A.bP
c1.bE(D.RQ,i,b9)
b9=C.lh(D.RQ,i,0.85)
b9.toString
w=C.N()
w.r=A.ay.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.bx(D.aMb,D.aLL)
b9=C.N()
b9.r=A.f6.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.N()
b9.b=A.af
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aD(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bO,A.cs,c2.fx).gp(0)
c1.bE(D.aGN,D.aGv,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bE(D.aGN,D.e6b,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bE(D.e4h,D.aGv,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cl(new C.u(F.o9[g]*22,0),20,9)
w=C.bx(f,A.hD)
o=b3.OI(f,A.d5,A.ow,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.eer.av(0,C.bU(A.J,21)))
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
b9.saq(D.eed.av(0,C.bU(A.J,13)))
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
c1.bE(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aMb,D.aLL)
b9=C.N()
b9.saq(D.bX8.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
c1.aY(D.eKn,b9)
b9=c2.r
b3.qk(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e5t,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.yY
c1.ae(D.w8,34,v)}n=C.cl(D.e2U,12,18)
c1.aD(C.bx(n,A.hD),b3.OI(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dp.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.W1
else{v=C.aq(A.e2,A.hX,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Ey
else{l=C.aq(A.dA,A.dP,c2.fx)
l.toString}w.saq(new C.bT(A.rW,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rx,17)))
c1.ae(A.rx,17,w)
w=C.N()
w.b=A.af
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rx,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cU(-12,-4,-9,0))
v=C.N()
v.b=A.af
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aP(l,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bE(D.e67,D.e69,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bE(D.e4a,D.e4d,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bB(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.af
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dA,D.bcr,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aP(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dn3
c1.ae(A.rx,30,v)}w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bE(D.e6d,D.e6c,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bE(D.e4j,D.e4i,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cU(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bF())
v=C.N()
if(t)l=A.n5
else{l=C.aq(A.eq,D.adO,c2.fx)
l.toString}if(t)j=A.ko
else{j=C.aq(A.kk,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eJr))
c1.aP(a6,v)
v=C.N()
v.b=A.af
v.c=1.2
v.r=A.jd.gp(0)
c1.aP(a6,v)
v=C.N()
v.r=A.eP.gp(0)
c1.aY(D.eJx,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cU(-6,-12,0,-15))
b9=C.N()
b9.b=A.af
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aP(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bx(a7,A.hd),b3.avl(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cC.gp(0)
c1.aY(D.eJe,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.aY(D.eJf,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cl(D.e3b,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qk(c1,"M",D.e5N,A.az,14)
break
case"buzzer":a8=C.cl(A.J,42,42)
b9=C.N()
b9.saq(D.eev.av(0,a8))
c1.hR(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.N()
b9.b=A.af
b9.c=1.4
b9.r=A.b3.gp(0)
c1.ae(A.J,6,b9)
b3.qk(c1,"+",D.e5G,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2
j.r=A.bW.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eJY,A.hd)
w=C.N()
w.saq(D.bUN.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cU(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bB(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.af
w.c=10
w.r=D.bd2.j(0.5*b9).gp(0)
w.z=A.jo
c1.aP(a9,w)}$.W()
b9=C.N()
b9.b=A.af
b9.c=3.2
b9.d=A.bP
b9.r=C.aq(A.lI,A4.X2,c2.fx).gp(0)
c1.aP(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hd)
w=C.N()
w.saq(D.bTH.av(0,a7))
c1.aD(b9,w)
w=C.N()
w.r=A.bO.gp(0)
c1.aY(D.eJD,w)
for(p=0;p<4;++p){b0=new C.kh(new C.eq("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.ca,new C.ju(1),b4,b4,b4,b4,A.c8,b4)
b0.ey()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bx(b1,A.hD),b3.c1g(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.aY(new C.a9(-3,w,11,w+b9),v)
b3.qk(c1,"1F",D.w8,A.c,11)
break
case"radio":a1=C.bx(D.a6_,A.he)
b9=C.N()
b9.saq(D.bXo.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.N()
b9.b=A.af
b9.c=1.4
b9.r=A.ow.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bx(D.eJZ,A.im)
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
w.r=(c2.fx>0?A.h3:A.nL).gp(0)
c1.aY(D.eJh,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bA.gp(0)
v.c=1.6
c1.bE(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLH.av(0,C.bU(D.a54,6)))
c1.ae(D.a54,6,w)
w=C.N()
w.r=A.ow.gp(0)
c1.ae(D.e3K,4,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=1.8
c1.bE(D.e3I,D.aGA,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGA,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.4
l.r=A.nQ.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eK8,A.hd)
v=C.N()
v.r=L.mh.gp(0)
c1.aD(w,v)
b2=C.bx(D.eK5,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.ps(),!0)
b9.translate(-33,-21)
E.h0g(c1,D.ePN,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.ae(D.e3W,1.6,b9)}else{w=C.N()
w.r=D.vc.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aP(b9,w)}b9=C.N()
b9.r=A.bv.gp(0)
c1.aY(D.eJw,b9)
break}B.i7g(c1,c2,b3.b.d,b3.gc5O())
if(t)b3.qk(c1,"\u2716",D.e6g,A.ay,14)
if(s)c1.a.restore()},
bBa(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bx(w,A.rA),m.avl(w,A.dA,A.iR))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.ao6.av(0,v))
d.aY(v,u)
u=C.N()
u.r=A.dT.gp(0)
d.aY(D.eJM,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bx(t,A.hc),m.OI(t,A.dA,A.iO,!0))
m.qk(d,"+",D.e3t,A.aM,11)
m.qk(d,"\u2212",D.e5P,A.ad,11)
m.qk(d,C.t(l===A.k.k0(l)?A.k.V(l):l)+"V",D.e5z,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bG.gp(0)
d.aY(D.eJL,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b2,u).gp(0)
d.aY(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qk(d,"FLAT",D.e5s,A.cb,9)}if(l>2){u=C.N()
u.r=A.b3.gp(0)
u.c=1
d.bE(D.e3_,D.aGf,u)
m.qk(d,l>3?"3 cells":"2 cells",D.e5y,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.rA)
$.W()
s=C.N()
s.saq(D.bWW.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aY(D.eJN,s)
for(u=d.a,q=0;q<2;++q){p=F.axr[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLG.av(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qk(d,"9V",D.e5u,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.im)
$.W()
s=C.N()
s.saq(D.ao6.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.c4.gp(0)
d.aY(D.eK7,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cl(new C.u(F.a2U[q],-20),8,10),A.hc)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qk(d,"+",D.e3A,A.ay,10)
m.qk(d,"12V",D.e5v,A.az,15)}},
au(d){return!0}}
B.my.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.to(o,r,q,p)
n.app(o,r,q,p)
k.push(n)
J.iq(s[4],new B.ckb(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ak_(m,u[1],l,u[3])}}}
B.aie.prototype={
S(){var w=x.N
return new B.aif(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aif.prototype={
adp(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGj(w,d))
w.as=C.cM(A.lh,new B.bGk(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.br2()},
a_o(d,e){return this.cdr(d,e)},
b_c(d){return this.a_o(d,!1)},
cdr(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_o=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qZ:A.xt
p=d.b
w=3
return C.b(E.h0y(s,r,p,d.ax<3.2,q,$.qc().h(0,p).b),$async$a_o)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_o,v)},
cq0(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGl()),t=J.cG(u)
t.K(u,v)
t.bp(u,new B.bGm(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0J(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kp,new B.bGn(w,u,d))}},
a_4(d){return this.cbP(d)},
cbP(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_4=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i8o(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_4)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_4,v)},
a0J(d){return this.cnF(d)},
cnF(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0J=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kP,null,new B.bGh(u,d),t,!0,!0,!1,A.kA,!1,!1,x.H),$async$a0J)
case 2:return C.h(null,v)}})
return C.i($async$a0J,v)},
a_(){this.a1()
this.bdX()
this.le()},
bdX(){this.a.c.e=new B.bGC(this)},
lx(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v2(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.lY.h(0,s.b)
if((r==null?null:r.b)!==D.zn)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.a_o(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cH.aj()<0.5
else u=!1
if(u)E.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dF(900+A.cH.aB(800),"",90,0,0.1,o)
if(A.cH.aj()<0.35)E.dF(300+A.cH.aB(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cH.aj()<0.4
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
case"kettle":if(s.fx>0)u=A.cH.aj()<0.5
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
q.m(new B.bGD())},
b6c(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lY.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b_T(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bS(w,w.gM(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lY.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cCp(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
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
h=B.hnY(new C.u(k,n),new C.u(i,l),p)
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
adn(){this.a.toString
this.m(new B.bFN())},
bnP(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cY1[v]
if(!A.d.b4(p.a.c.a,new B.bGE(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.HY:o
s=s?K.HY:o
q=t.aje(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.adn()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qe[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fM(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_I(s,!0))
n.a.toString
if(t)w.push(n.b_I(r,!0))
w.push(C.E(C.cq(new B.bGB(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_I(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qc()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aD(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zB,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nt,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bq(r,r,r,r),p,p,A.n),p,p,p,F.tC,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFO(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cw(m,p,A.h6,p,p,A.aO,!1),A.f,p,p,new C.o(F.Ax,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aYh(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.abN,w,C.I(A.bG,A.q,1),v,w,w,A.n),w,w,w,w,F.ah7,w,w,w)},
cfv(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qc().h(0,o),m=d.dy,l=d.fr,k=new B.bG6(q,n),j=C.d(n.c,p,p,p,p,p,p,A.J_,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bL6,p,p,p,new B.bFU(q,d),p,p,p,p,"Remove part",A.cd),C.aH(p,p,p,p,A.Gm,p,p,p,new B.bFV(q),p,p,p,p,p,A.cd)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dk,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f5v,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cb:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbS(d)
if(v!=null){l=(d.x?A.ay:A.aF).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i_,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fbS,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.fZo(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFW(q,d,u),p,h,p))}l=C.bW(A.bz,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Cp(d)?"Showing: "+F.PR[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Cp(d))l.push(new B.fi(A.FW,"Open big screen",new B.bFZ(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o)&&!B.fZo(o)){l=C.a([A.am,C.d(q.a.c.Cp(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Cp(d))l.push(new B.fi(A.Nz,"Open the "+$.qc().h(0,o).b,new B.bG_(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BD,"Make it bigger (or tap it 4 times)",new B.bG0(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Cp(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f6k,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.ddt[s]
j=r===A.k.k0(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bG1(q,d,r),p,h,p))}i.push(new C.D(A.mo,C.bW(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.ftT)
A.d.v(m,i)}if(q.a.c.Lq(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zB(d),2)
i=q.a.c
w=i.amz(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amz(d)?A.cb:A.eu,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zB(d),0,1)
i=q.a.c.amz(d)?A.ay:A.b2
m.push(new C.D(A.i_,C.v(C.a([l,A.cV,C.bw(j,C.m1(A.bG,p,p,5,p,w,new C.lV(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i_,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f0k,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d3x[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG2(q,d,r),p,h,p))}m.push(C.bW(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cVu[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG3(q,d,r),p,h,p))}m.push(C.bW(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG4(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bG5(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFX(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFY(d)))
if(o==="crank")m.push(D.fpu)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hf,p,p,p))
return q.aYh(new C.cS(D.aZm,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.ba5.prototype={}
B.UE.prototype={
S(){return new B.aCC(B.h42(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCC.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.ado()},
ado(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ado=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fuf(),$async$ado)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i7B(t.d,r)
if(s!=null){t.m(new B.dRu(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ado,v)},
EP(){var w,v=this
if(!v.as)return
w=B.hZa(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD2(w)},
iZ(d){if(d!==A.fv)this.EP()},
q(){$.aW.hH(this)
this.EP()
this.a2()},
c5Q(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a0<1>")
t=new C.a0(v,new B.dRD(q),u).gM(0)
s=new C.a0(v,new B.dRE(),u).gM(0)
r=new C.a0(v,w.gcRp(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRF(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EP()
if(A.o.E(q.w,10)===0){w=q.f
$.ahr()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahr()[q.f].c.$1(q.d)){w.K(0,q.f)
B.By("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRG())
q.EP()
w=q.c
w.toString
w=C.X_(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahr()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mk,p,p,p,p,p,p,p,p,p,p))}},
ag3(){var w=0,v=C.j(x.H),u=this,t
var $async$ag3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dRt(u),t,null,!0,!0,x.H),$async$ag3)
case 2:return C.h(null,v)}})
return C.i($async$ag3,v)},
aYg(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aD(w,C.hs(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aYf(d,e,f,g){return this.aYg(d,e,f,g,null)},
aq3(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aD(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ed,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
aem(){var w=0,v=C.j(x.H),u=this,t
var $async$aem=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).cl(C.e8(new B.dRp(u),!1,null,x.H)),$async$aem)
case 2:t=u.e.gbi()
if(t!=null)t.bdX()
if(u.c!=null)u.m(new B.dRq())
u.EP()
return C.h(null,v)}})
return C.i($async$aem,v)},
bEa(){var w,v,u,t,s=null,r=this.f
$.ahr()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bk:A.ay
u=C.m(9)
t=C.I(F.Ax,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wn,s,s,s),s,s,s),A.f,s,D.aZt,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eR,s,s,s)},
ah9(){var w=0,v=C.j(x.H),u=this,t
var $async$ah9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kP,null,new B.dRC(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$ah9)
case 2:return C.h(null,v)}})
return C.i($async$ah9,v)},
c5R(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aD(r,C.p(r,D.bMk,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRI(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b46,A.f,r,r,new C.o(A.bo,r,C.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.frZ,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f4:A.fT,r,r,r,r,r,r,r,r,11.5,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awJ(s.gcbw(),r),A.rH,s.aYf(A.y3,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRJ(s,d)),s.aYg(A.ll,"Challenges",A.aM,s.gcsA(),s.bEa()),s.aYf(A.Ns,"How to play",A.aR,new B.dRK(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aq3(A.o1,"Circuits",A.bt,s.gclt()),A.bp,s.aq3(A.oM,"Repair",A.aM,new B.dRL(s)),A.bp,s.aq3(D.y4,"Clear",A.cb,new B.dRM(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.Ax,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bw9,r,r,r)},
B(d){var w=this,v=null
$.ari="tech"
return C.c7(v,A.bY,C.bl(!0,C.v(C.a([w.c5R(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h2V(w.d,w.e,w.gc5P(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)}}
B.awJ.prototype={
S(){return new B.b8h(null,null)}}
B.b8h.prototype={
gawc(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cI(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawc().q()
this.bsi()},
B(d){var w=null,v=this.a.c
return C.aD(w,C.hs(new C.a7(42,42,C.c6(this.gawc(),new B.cAX(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b8g.prototype={
a4(d,e){var w,v,u,t=null,s=e.e9(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mD
d.ae(s,r+2+o*2,w)
w=C.N()
w.saq(D.eeq.av(0,C.bU(s,r)))
d.ae(s,r,w)
v=C.N()
v.b=A.af
v.c=2.2
v.saq(new C.fT(A.A,0,6.283185307179586,A.x,D.cN6,t,new C.mm(p)).av(0,C.bU(s,r)))
d.ae(s,r,v)
p=new B.cAW(d)
p.$3(s.ad(0,A.rx),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e4u),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e6k),2.6,0.5+0.5*Math.cos(q))
u=C.hr(t,t,t,t,D.eY0,A.a4,A.ca,t,A.e0,A.c8)
u.ey()
u.a4(d,s.ad(0,new C.u(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.ax1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.ax2.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.br1()}}
B.aJ1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwk.prototype={}
B.fK.prototype={}
B.J5.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m5.prototype={}
B.Ul.prototype={
S(){return new B.biJ(null,null)}}
B.biJ.prototype={
ga8G(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nX,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8G().q()
this.bu8()},
gRs(){var w=this.ga8G().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lY.h(0,this.a.c)
if(v==null)v=D.aMs
return C.c7(w,U.Lj,C.bl(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zo?this.bGl(v):this.cif(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mz,w,w,w,new B.dNq(d),w,w,w,C.ny(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eZC,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)},
c5S(d){var w
A:{if(D.Im===d){w=0.46153846153846156
break A}if(D.uB===d){w=0.45
break A}if(D.we===d){w=0.9259259259259258
break A}if(D.Ss===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cif(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Im
A:{if(D.Im===p){w=44
break A}if(D.uB===p){w=30
break A}if(D.we===p){w=22
break A}if(D.Ss===p){w=26
break A}w=14
break A}v=C.c6(this.ga8G(),new B.dNp(this,w,d,o),q)
if(p===D.a67)v=new C.Dd(D.bwM,v,q)
p=this.c5S(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Ft,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bqw,new C.Q(u,u,u,u),q,q,q),q)},
b5p(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bv(this.gRs()*0.4),0,100),q=d.b===D.Im,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dl(s)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(s)),2,"0"),t,t,t,t,t,t,A.rO,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bq(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bwu,t,t,t,3))}n.push(A.db)
n.push(D.fkV)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.DF(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.Ft,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qh)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fcb,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auc(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d8Y,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f34,v,v,v)],w))
return C.aD(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNl(this,d),v,v,v,v,v,v,!1,A.a8)},
bXo(d,e){return this.auc(d,e,!0)},
bX5(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Ss||n===D.we,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.ki,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b5p(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b3,A.q,1)
w=C.aD(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aec(0,p.gRs(),o),A.f1),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hM,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNj(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k3[s]
t.push(new C.cp(A.A,o,o,p.bXo(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.lZ(0.92,t,v,8,12,A8.vq,o,!1),1)],u)
if(n!==D.a67){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k3,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bS(v,v.gM(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auc(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.q4,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.brl,T.aiA,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzO(d,e){var w=null
return C.p(w,C.v(C.a([this.b5p(d),C.E(C.b3(w,w,w,new B.aec(e,this.gRs(),w),A.f1),1),C.aD(w,C.p(w,C.av(C.d(F.k3[e].a,w,w,w,w,w,w,A0.IQ,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNe(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bGl(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8G(),new B.dNh(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bw4,new C.Q(8,8,8,s),t,t,t),t)}}
B.bup.prototype={
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
r.z=D.dn8
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aec.prototype={
a4(d,e){return E.ah4(d,e,this.b,this.c)},
au(d){return!0}}
B.aKO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aVR.prototype={}
B.V9.prototype={
S(){return new B.bji(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bji.prototype={
gvq(){var w=this.f
return w===$?this.f=B.fZu(0):w},
a_(){this.a1()
this.le()
B.zm("laser_maze").bz(new B.e92(this),x.P)},
lx(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e93())},
adt(d){var w=this
w.m(new B.e8T(w,d))
B.vS("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c67(d){var w,v,u,t,s,r,q,p,o=this
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
o.m(new B.e8U(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.e8X(t,B.hnP(t.gvq(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e8Y(t),A.k0,A.aM,s),new B.dA("Skip",!1,new B.e8Z(t),D.bF4,A.aR,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e9_(t),D.bF5,A.aR,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e90(t,v),s,A.ay,s))}return B.jK(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bgi.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdO()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgF(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kz)
v=$.W()
u=C.N()
u.r=L.mh.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dq.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dq.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.cl(p,u,u),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bXu.av(0,C.cl(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gJ(a8)).a,a7.$1(A.d.gJ(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bS(a8,a8.gM(0),v.k("bS<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bB(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.af
a8.c=14
a8.e=A.fB
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lt
a9.aP(n,a8)
a8=C.N()
a8.b=A.af
a8.c=4
a8.e=A.fB
a8.r=D.adO.gp(0)
a9.aP(n,a8)
a8=C.N()
a8.b=A.af
a8.c=1.6
a8.e=A.fB
a8.r=A.c.gp(0)
a9.aP(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Ck
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
i.a4(a9,new C.u(m-h/2,k-j.gbd(j)/2))}g=new B.dgI(a7,a3,a9)
a1.c.bJ(0,new B.dgG(g))
a4.d.bJ(0,new B.dgH(g))
f=a7.$1(a4.e)
a4=C.bx(C.cl(f,o,a3*0.8),A.he)
a8=C.N()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.af
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
au(d){return!0}}
B.Vb.prototype={
S(){var w=x.n
return new B.aDg(A.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDg.prototype={
a_(){this.a1()
this.le()
B.zm("light_mixer").bz(new B.e9l(this),x.P)},
lx(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aYl()
w.m(new B.e9m())},
awg(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.d7(t,new B.e96()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aYl(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hja(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vV(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vS("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcxv(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cP4[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.e9f(v,B.hja(v.e,t))),r=t[0]
r=B.hB(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e9g(v),r)
w=t[1]
w=B.hB(A.bk,""+A.k.V(w*100)+"%","Green",1,0,new B.e9h(v),w)
t=t[2]
return B.jK(A.b8,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hB(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.e9i(v),t),new C.bI(A.a7,u,u,new B.fi(A.hA,"Lock it in",new B.e9j(v),A.b2,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bgx.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qe)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bx(new C.a9(0,0,n,m),A.qe)),$.ps(),!0)
v=e.gdO()*0.3
u=e.e9(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.Ef,I.acR,I.adf]
d.lc(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nC
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qe)
m=C.N()
m.b=A.af
m.c=2
m.r=A.b3.gp(0)
d.aD(n,m)},
au(d){return!0}}
B.aLf.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwp.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buC()}}
B.aLg.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwq.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buD()}}
B.bte.prototype={}
B.a7S.prototype={
B(d){var w=null
return C.c7(C.eC(w,w,w,!0,!0,D.ae0,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.an4,w,w,w,new B.ceP(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAp,w,w,w,1,w,!0),D.ae0,C.cw(C.a([D.e7B,C.cq(new B.ceQ())],x.p),w,D.bsl,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.W1.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aE7(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE7.prototype={
a_(){this.a1()
this.le()},
b3o(d){var w=this.d.length
return A.o.E(A.k.bv(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lx(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3o(v.f)
if(w!==v.x){v.x=w
B.lg("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eIA(v))
B.By("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c74(){if(this.d.length<2)return
this.m(new B.eIw(this))},
aYH(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eIv(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc73(),p=s.d,o=C.E(C.aD(r,C.b3(r,r,r,new B.buB(p,s.f,r),A.f1),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fam,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awJ[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aD(r,C.p(r,new C.x(p[v],r,D.f9D,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bq(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eIy(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jK(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kG,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eIz(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dm,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hz,"Add",s.gc71(s),A.c,r),A.bp,new B.fi(A.ms,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.buB.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.b9K.gp(0)
a1.ae(d,f,w)
w=C.N()
w.b=A.af
w.c=3
w.r=A.aM.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bU(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.awJ[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.af
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
k=new C.kh(new C.eq(o,i,i,A.cO,i,i,i,i,i,i,D.eYP),A.a4,A.ca,new C.ju(1),i,i,i,i,A.c8,i)
k.ey()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.u(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.adE.gp(0)
a1.ae(d,20,f)
f=C.N()
f.b=A.af
f.c=3
f.r=A.aM.gp(0)
a1.ae(d,20,f)
j=new C.aO(h.r,A.ao,i,i,C.a([],x.v))
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
e.b=A.af
e.c=2
e.r=A.aX.gp(0)
a1.aP(j,e)},
au(d){return!0}}
B.UL.prototype={
S(){return new B.biS($,A.bx,0,C.a([],x.X),null,null)}}
B.biS.prototype={
a_(){this.a1()
this.le()},
lx(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.By("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4A(900,new B.dTI())}w.m(new B.dTJ())},
aYJ(d){return this.m(new B.dTD(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.E(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpq(l,A.cb,n),A.aNH)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f22,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.f17,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.zA,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d6b[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTF(o,q),n,A.cb,n))}m=o.f
p=m?A2.yc:A.iC
m=m?"Pause":"Start"
return B.jK(A.cb,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fi(p,m,new B.dTG(o),A.b2,n),new B.fi(A.k0,"Reset",new B.dTH(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bpq.prototype={
a4(d,e){var w,v,u,t,s=e.e9(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.af
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bU(s,r)
v=C.N()
v.b=A.af
v.c=16
v.d=A.bP
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fT(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.f6(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.TY.prototype={
S(){return new B.biu($,A.bx,0,C.a([],x.X),null,null)}}
B.biu.prototype={
a_(){this.a1()
this.le()},
lx(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.QS.h(0,p.d)
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
B.lg("flute",D.bY6[t]+5,1400,0.35)}p.m(new B.dEB())},
gc77(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JX("Press Start",0.5)
w=D.QS.h(0,this.d)
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
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc77(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hw.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hw.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zD,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kG,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QS.geb(D.QS));w.C();){v=w.gR(w)
o.push(new B.dA(v,r.d===v,new B.dEy(r,v),q,A.hw,q))}w=r.e
v=w?A.a0c:A.iC
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEz(r),A.b2,q))
return B.jK(A.hw,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHw.prototype={}
B.UC.prototype={
S(){return new B.biM(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biM.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mA,s,s,s,new B.dQZ(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aD(s,C.b3(s,s,s,new B.bkO(t.e,t.x,s),A.f1),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dR_(t),new B.dR0(t),s,s,s,s,s,s,s,s,s,new B.dR1(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cOr[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F3(v,u,new B.dR2(t,v),!1,s))}u=t.r
return B.jK(A.bB,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bT,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hB(A.bB,""+A.k.V(u),"Brush",30,2,new B.dR3(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dR4(t),A.FO,A.bB,s),new B.fi(A.rd,"Undo",new B.dR5(t),A.c,s),new B.fi(A.e6,"Clear",new B.dR6(t),A.c,s),new B.fi(A.No,"Paper",new B.dR7(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bkO.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bP
p.e=A.fB
p.b=A.af
m=r.c
if(m.length===1){q=A.d.gJ(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ao,null,null,o)
o.push(new C.b5(A.d.gJ(m).a,A.d.gJ(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cU(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bB(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bB(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.Vn.prototype={
S(){var w=x.S
return new B.aDq(C.aX(w),C.aX(w))}}
B.aDq.prototype={
a_(){this.a1()
this.ary()},
ary(){var w,v,u=this,t=x.N,s=C.bn(D.daM,!0,t)
A.d.CI(s)
w=x.S
v=C.U(s).c
t=C.C(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.CI(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c72(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lg("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.eeI(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gJ(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n8,new B.eeJ(s,v,u),t)
else{s.x=!0
C.bN(Ad.F5,new B.eeK(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Ts,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.D(A.xE,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hC,A.j,0,q,q),q),C.E(C.ig(!0,q,q,A.y,new C.hM(v,8,8,1,q),new B.eeO(r),r.e.length,A.bm,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cPU[t]
o.push(new B.dA(s.b,r.d===s.a,new B.eeP(r,s),q,A.aR,q))}o.push(new B.fi(D.bF2,"New game",new B.eeQ(r),A.b2,q))
return B.jK(A.aR,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.VA.prototype={
S(){return new B.aDM(C.a([],x.t))}}
B.aDM.prototype={
c76(d){A.d.a9(this.d)
this.w=!0
this.aYI()},
aYI(){this.d.push(A.cH.aB(4))
this.e=0
this.Zu()},
Zu(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.epA(t))
s=x.H
w=3
return C.b(C.bN(A.lM,null,s),$async$Zu)
case 3:r=t.d,q=C.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aS_(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$Zu)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.epB(t))
case 1:return C.h(u,v)}})
return C.i($async$Zu,v)},
aS_(d){this.m(new B.epy(this,d))
B.lg("marimba",D.aoH[d]+5,450,0.55)
C.bN(A.F3,new B.epz(this),x.H)},
c78(d){var w,v,u=this
if(!u.w||u.r)return
u.aS_(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.epC(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.epD(u))
C.bN(A.id,new B.epE(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.TA,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.faJ,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avC[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avC[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aD(p,C.df(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bq(t,t,t,t),s,p,A.n),A.jf,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.epF(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.D(A.a9,C.v(C.a([o,A.am,n,A.d7,new C.fG(1,C.lZ(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jK(A.c4,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fi(A.iC,n,q.gc75(q),A.b2,p)],m),p,p))}}
B.VV.prototype={
S(){return new B.bk_(new C.as(A.as,$.aw()))}}
B.bk_.prototype={
av1(d){return C.oD(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eDS(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eE0()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ab.wM),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aXU),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kF,"Bill amount",!0,!0,!1,m,m,m,m,D.f8j,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eDX(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aP9,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.av1(w)),t.$2("Total","$"+n.av1(v)),X.AO,t.$3$big("Each of "+n.f+" pays","$"+n.av1(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bU,m,m,m)],q),m,A.fA,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cAL[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eDY(n,o),m,A.b2,m))}l=n.f
return B.jK(A.b2,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hB(A.aR,""+l,"People",20,1,new B.eDZ(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eE_(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Vl.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bjt(w,A.cH,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjt.prototype={
a_(){this.a1()
this.le()},
lx(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bv(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7R("snare",0.5)}u.m(new B.edn())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
B.lg("bell",24,400,0.5)}u.m(new B.edo())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcu(v,o.r>0,n))}u=C.aD(n,C.av(C.bW(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edg(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aD(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f7y,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eeu,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edh(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aD(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eYi,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kG,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edi(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d3H[r]
v.push(new B.dA(q.b,o.d===q.a,new B.edj(o,q),q.c,A.bt,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hB(A.bt,""+s,"Dice",4,1,new B.edk(o),s))}if(o.d==="num"){s=o.z
s=B.hB(A.bt,""+s,"From",100,1,new B.edl(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hB(A.bt,""+p,"To",1000,2,new B.edm(o),p)],m))}return B.jK(A.bt,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bcu.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cH.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=C.a([],x.p)
for(s=D.dlT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaN,p,18,p,p,p,p,p,18),p))
return C.eG(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bD,p,p,100),p)}}
B.aKB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwg.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.btW()}}
B.aKU.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwl.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buf()}}
B.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwv.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buL()}}
B.aLS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwH.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bve()}}
B.b64.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDw.h(0,t)
$.ari=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nk,u,u,u,new B.crJ(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Ns,s,u,u,u,22),u,u,u,new B.crK(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bvm,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.Ax,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.F7,u,u,1/0))
return C.c7(u,A.bY,C.bl(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ed],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tC,C.aD(s,C.df(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eG,s,s,s,A.h7,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crF(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cx,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.av9.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auJ(d).cI4(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9E(C.kZ(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.IQ,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tC,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Ak.agT,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ed,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crE(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.F3.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eWC:u
w=t?A.c:A.b3
w=C.I(w,A.q,t?2.5:1)
return C.aD(u,C.df(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hx,u,r,D.agF,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crL(v),u,u,u,u,u,u,!1,A.a8)}}
B.mB.prototype={
a4A(d,e){var w=C.dk()
w.seF(C.cM(C.dC(0,0,0,d,0,0),new B.crG(this,w,e)))
this.fq$.push(w.bg())},
le(){var w=this,v=w.qy(new B.crI(w))
v.iT(0)
w.fp$!==$&&C.aP()
w.fp$=v}}
B.aaE.prototype={
bxo(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gR(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bAB()
g.ay!==$&&C.aP()
g.ay=w},
bAB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaF.prototype={
cDY(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.Fv(0,w,e)){if(t!=null){q=r.ax
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
v=D.aoC[w.aB(7)]
w=w.hc()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lg(u,v+w-12,2200,0.1)}}
B.US.prototype={
S(){var w=$.aw()
return new B.aCN(new C.cs(null,x.A),new C.as(A.as,w),new B.OS(A.cH),D.d5E,A.au,D.a2G,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCN.prototype={
a_(){var w,v=this
v.a1()
v.le()
v.a.toString
w=$.hcb
if(w==null)w=$.hcb=B.cuk()
w.bz(new B.dWq(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.bun()},
crK(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dVT(p[n]).$0())
w.push(q)}this.w=w},
gVJ(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asI(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awK(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asI(d.x,d.w,105/Math.max(w,3))
C.eU()
B.lg("bell",(A.d.cK(D.a2h,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lx(d){var w,v,u,t,s,r,q,p=this
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
c7N(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVJ()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVJ()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cDY((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c7M(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVR(w))
return}w.m(new B.dVS(w,v,A.a.i(d).toLowerCase()))},
bNm(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dVP(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bHJ,n,n,n,o.gbNl(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mA,n,n,n,new B.dWb(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dWc(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Dj,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bPP,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc7L(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iI,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWd(o,s),A.mu,A.aR,n))}i.push(new C.D(A.i_,new C.a7(n,38,C.cw(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWh(o),A.hn,A.aR,n)],l)
for(v=D.aDv.gdK(D.aDv),v=v.gaf(v);v.C();){u=v.gR(v)
w.push(new B.dA(u.a,!1,new B.dWi(o,u),n,A.aR,n))}w.push(new B.dA("Random",!1,new B.dWj(o),A.ms,A.aR,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hB(A.aR,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dWk(o),w))
w=o.dy
i.push(B.hB(A.c4,A.a.aT(A.o.u(A.k.bv(w)),2,"0")+":00","Time",24,0,new B.dWl(o),w))
w=o.fr
i.push(B.hB(A.b2,o.cqu(),"Season",365,0,new B.dWm(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lR:D.G5
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dWn(o),D.bCT,A.aR,n),new B.dA("Night",v,new B.dWo(o),A.vz,A.aR,n),new B.dA("Borders",u,new B.dWe(o),D.bCX,A.aR,n),new B.dA("Names",r,new B.dWf(o),X.G0,A.aR,n),new B.dA("Music",q,new B.dWg(o),p,A.aR,n)],l),n,n))
return B.jK(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cqu(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awh[u])v=u
return A.ih[v]+" "+(A.k.bv(w-D.awh[v])+1)},
c7K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mO(1,A.o.E((A.d.cK(D.a2h,t)+1)*47,360),0.55,1).iB()
r=new B.dVN()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dr,j,j,j),1),C.aH(j,j,j,j,A.Gm,j,j,j,new B.dVM(this),j,j,j,j,j,A.cd)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hf,j,j,j)
m=D.dky.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fst(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GC(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.GC(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fst(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VU,j,p,q,j,j,A.n),j,j,j,j,D.ahd,j,j,j)}}
B.beJ.prototype={
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aR.j(0.35),A.K],t),D.cRq,d3).av(0,C.bU(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.eey.av(0,n))
d8.ae(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k1(n))
d8.qv(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.N()
g.b=A.af
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.dcq(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bB(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bB(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cK(D.a2h,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mO(1,a9,a3,a8?1:0.62).iB().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.af
b1.c=a8?2.2:m
b1.e=A.fB
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
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
if(c8!=null)b6.bB(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bB(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bB(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.af
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.ro
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
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
c9=B.hL5(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a4(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b7y.j(0.78)],t),D.d60,d3).av(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.di7,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.af
d7.c=1.4
d7.r=A.fT.j(0.5).gp(0)
d8.ae(p,o,d7)},
au(d){return!0}}
B.aL_.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.aL0.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bum()}}
B.bt9.prototype={}
B.VY.prototype={
S(){return new B.bk3()}}
B.bk3.prototype={
gaRz(){var w=this.d
if(w===$)w=this.d=A.cH.aB(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.As,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.an4,w,w,w,new B.eEL(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fub,w,w,w,1,w,!0),u=C.m(18),t=A.aR.j(0.1),s=C.I(A.aR.j(0.35),A.q,1),r=x.p
return C.c7(v,D.As,C.cw(C.a([C.p(w,C.B(C.a([D.bGr,A.av,C.E(C.d(D.cVf[this.gaRz()],w,w,w,w,w,w,D.a7Z,w,w,w),1),C.aH(w,w,w,w,D.bQP,w,w,w,new B.eEM(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bD,w,w,w),A.aB,C.cq(new B.eEN())],r),w,A.Yo,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VJ.prototype={
S(){return B.hLx()}}
B.bjQ.prototype={
cig(d){var w=d.c,v=B.hLz(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.le()},
lx(d){var w,v,u,t=this
t.e.fk(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cig(w)
u=new C.u(-v.a,-v.b).aG(0,t.w)
v=C.lh(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc7O(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c7S(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cb[s]
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
aZ3(d){this.m(new B.ewO(this,d))
C.eU()
B.lg("bell",D.dii[A.o.E(A.d.cK(D.Cb,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mA,m,m,m,new B.ewZ(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.ex_(n,l)),h=C.a([new B.dA("All",!1,new B.ex0(n),A.a0m,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cb[w]
h.push(new B.dA(v.a,n.z===v,new B.ex1(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hB(A.aM,s,"Time",1,0,new B.ex2(n),u/t)
u=n.w
u=B.hB(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ex3(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lR:D.G5
return B.jK(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.ex4(n),m,A.aM,m),new B.dA("Names",r,new B.ex5(n),m,A.aM,m),new B.dA("Asteroids",q,new B.ex6(n),m,A.aM,m),new B.dA("Music",p,new B.ex7(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c7P(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.ewM(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.jr,r,r,r),1),C.aH(r,r,r,r,A.Gm,r,r,r,new B.ewL(this),r,r,r,r,r,A.cd)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dk,r,r,r)
v=n.$2("WIDTH",B.GC(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.GC(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.ewN().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VU,r,l,m,r,r,A.n),r,r,r,r,D.ahd,r,r,r)}}
B.brc.prototype={
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
o=a5.gc7O()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.Cb),t=new C.f7(a6,new B.eZ8()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.af
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
p.delete()}i=B.hLy(A.d.gJ(D.Cb))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.ae(o,a6,t)
t=C.N()
t.saq(D.ees.av(0,C.bU(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hdO("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.Cb),t=new C.f7(a6,new B.eZ9()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a1.b=A.af
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.ro
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pk,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1U,a4).av(0,C.bU(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.af
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d_q[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hdO(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.UT.prototype={
S(){var w=x.i
return new B.aCO(new B.OS(A.cH),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCO.prototype={
cv_(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c7R(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e3a
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
this.le()},
lx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fk(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yJ[r]
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
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcm()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bLC()
else n=n==="weight"?p.cCe():p.bDN()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dfo[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWJ(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWK(p),Ai.G_,A.cs,o),new B.dA("Feather",s,new B.dWL(p),X.N6,A.cs,o),new B.dA(q,r,new B.dWP(p),A.FP,A.aR,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hB(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWQ(p),q),new B.eQ(C.a([new B.fi(A.tQ,"Drop!",new B.dWR(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hB(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWS(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hB(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWT(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hB(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dWU(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hB(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dWV(p),r),new B.eQ(C.a([new B.fi(A.nj,"Fire!",p.gc7Q(),A.b2,o),new B.fi(A.tQ,"Falls",new B.dWW(p),A.c,o),new B.fi(A.r5,"Orbit 7.7",new B.dWM(p),A.c,o),new B.fi(D.bFR,"Oval 9",new B.dWN(p),A.c,o),new B.fi(A.BD,"Escape",new B.dWO(p),A.c,o)],w),o,o)],w))}return B.jK(A.cs,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bLC(){return new C.D(D.bqo,C.cq(new B.dWt(this)),null)},
cCe(){var w,v,u,t=null,s=[D.eDh,D.eEK,D.eES,D.eFa,D.eEQ,D.eFg,D.eDR,D.eFD,D.eEu],r=x.p,q=C.a([D.fic,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cx,new C.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bC(1,A.bh,new C.Be(new B.dWv(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fkt)
return C.cw(q,t,A.ie,t,t,A.ah,!1)},
bDN(){return C.cq(new B.dWr(this))}}
B.b9V.prototype={
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aR.j(0.35),A.K],x.O),D.d6T,i).av(0,C.bU(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.N()
e.saq(D.eem.av(0,C.bU(g,p)))
d.ae(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ao,i,i,C.a([],e))
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
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gJ(u).a*h,t+A.d.gJ(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bS(u,u.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bB(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.af
f.c=2.4
f.d=A.bP
f.r=A.cs.j(0.9).gp(0)
d.aP(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mD
d.ae(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
au(d){return!0}}
B.VB.prototype={
S(){return new B.bjN(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjN.prototype={
a_(){this.a1()
this.le()},
lx(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PN[l.e],i=D.PN[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mA,k,k,k,new B.epI(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqL(f,g,v,k),A.f1),1)
r=g.a
q=v<10?A.k.aa(v,1):B.GC(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hT,A.L,k,k)
o=B.GC(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IT,A.L,k,k),A.bC,C.d(p+": "+B.GC(w*2)+" km wide. "+r+": "+B.GC(h*2)+" km wide.",k,k,k,k,k,k,A6.Df,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bsv,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PN[m]
r.push(new B.dA(w.a,l.e===m,new B.epJ(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PN[m]
w.push(new B.dA(s.a,l.f===m,new B.epK(l,m),k,C.b0(s.c),k))}return B.jK(A.bW,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bqL.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.Wy.gp(0)
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
w=new B.eXh(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.af
w.c=1.4
w.r=A.ad.gp(0)
d.ae(l,n+3,w)
k=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f3Q,s.a),A.a4,A.ca,i,A.e0,A.c8)
k.ey()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f79,t.a),A.a4,A.ca,i,A.e0,A.c8)
j.ey()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.u(-h/2,-t.gbd(t)/2)))},
au(d){return!0}}
B.aL1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwn.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buo()}}
B.aLA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwB.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buX()}}
B.aLD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwD.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bv_()}}
B.Pn.prototype={}
B.TW.prototype={
S(){return B.hLv()}}
B.bit.prototype={
a_(){this.a1()
this.le()},
lx(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fk(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bp(w,new B.dE1())},
aZ4(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb70()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pn(t,u,1.2,new C.vB(1,30+A.cH.aj()*40,0.9,0.7).iB()))
B.lg("bell",60+A.k.V(12-u)*2,400,0.35)},
gb70(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.L(m,new B.dDQ(),C.U(m).k("L<1,M>")).fb(0,A.v_),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mA,n,n,n,new B.dDR(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dDS(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fst(s)+" Suns"
t=B.hB(A.bt,s,"Mass",1,0,new B.dDU(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDV(o),n,A.bt,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDW(o),n,A.bt,n),new B.dA("Milky Way core (4 million)",!1,new B.dDX(o),n,A.bt,n),new B.dA("M87 (6.5 billion)",!1,new B.dDY(o),n,A.bt,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lR:D.G5
return B.jK(A.bt,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dDZ(o),n,A.bt,n),new B.dA("Bent light",r,new B.dE_(o),n,A.bt,n),new B.dA("Music",q,new B.dE0(o),p,A.bt,n),new B.fi(A.k0,"Clear",new B.dDT(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
ae9(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.f_N,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zy,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9j.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bfu.gp(0)
b2.aY(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb70()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
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
b0.b=A.af
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.QX
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.v7,A.fk,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cMz,null).av(0,C.bU(u,b0)))
b2.ae(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.N()
b1.b=A.af
b1.c=1
b1.r=A.bt.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
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
o.z=G.mD
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeo.prototype={}
B.UP.prototype={
S(){var w=x.r,v=x.g
return new B.biV(new C.cs(null,x.A),new B.OS(A.cH),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.biV.prototype={
a_(){this.a1()
this.ZH()
this.le()},
ZH(){var w,v,u,t,s,r,q,p,o=this,n=new C.eM()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeo(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hc()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeo(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cuR(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e4E
k.cx=D.e4H
w=new C.eM()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeo(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
lx(d){var w,v,u,t,s,r,q,p=this
p.e.fk(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.ez(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aC(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dV1(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mA,r,r,r,new B.dUS(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bez(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bG,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Af.a7d,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d2w[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUT(s,u),r,A.h2,r))}l.push(new B.dA("Collide",s.ch,new B.dUU(s),A.y1,A.bW,r))
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
t=w?A.lR:D.G5
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dUZ(s),r,A.bt,r),new B.dA("You are here",l,new B.dV_(s),r,A.aM,r),new B.dA("Music",w,new B.dV0(s),t,A.h2,r)],q),r,r))
return B.jK(A.h2,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b0,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bez.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bhx.gp(0)
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
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cad,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)}m=new B.d9x(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.h3.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
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
a2.b=A.af
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ae(g,9,a2)
f=C.hr(a0,a0,a0,a0,D.eXR,A.a4,A.ca,a0,A.e0,A.c8)
f.ey()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.biK.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bdD.j(0.6).gp(0)
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
S(){return new B.bjM(new C.cs(null,x.A),new B.OS(A.cH),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjM.prototype={
a_(){this.a1()
this.le()},
lx(d){var w,v,u,t=this
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
gcqt(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcgT(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mA,q,q,q,new B.eoX(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bq0(r,q),A.f1),r.d),1)
if(r.f==="seasons")w=r.gcqt()
else{w=r.gcgT()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tq,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahn,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.yc:A.iC
t=r.Q
s=t?A.lR:D.G5
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.eoY(r),A.yq,A.bu,q),new B.dA("Moon phases",n==="moon",new B.eoZ(r),A.vz,A.bu,q),new B.dA(u,!1,new B.ep_(r),v,A.bu,q),new B.dA("Music",t,new B.ep0(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hB(A.bu,D.d1R[A.o.E(A.k.bv(n*12),12)],"Month",1,0,new B.ep1(r),n)
v=r.z
A.d.v(s,C.a([n,B.hB(A.bu,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ep2(r),v)],p))}else{p=r.w
s.push(B.hB(A.bu,""+(A.k.bv(p*29.5)+1),"Day of month",1,0,new B.ep3(r),p))}p=r.y
s.push(B.hB(A.bu,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ep4(r),p))
return B.jK(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bq0.prototype={
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
t.b=A.af
t.c=1
t.r=A.b3.gp(0)
b9.hR(u,t)
t=C.N()
t.saq(D.eeo.av(0,C.bU(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).ez(0,p.aC(0,l).gcm())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bfq.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qv(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.eex.av(0,C.bU(A.J,s)))
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
t.r=A.cb.gp(0)
b9.bE(b7,b5,t)
t=h.aG(0,k).aG(0,1.7)
b5=C.N()
b5.r=A.cb.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.hr(b4,b4,b4,b4,C.de(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQD,b5),A.a4,A.ca,b4,A.e0,A.c8)
f.ey()
f.a4(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.af
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
r.saq(new C.bT(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.bbb,D.afh],x.O),D.cUe,b4).av(0,C.bU(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b8v.gp(0)
b9.ae(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k1(C.bU(a1,a2)))
b9.qv(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bO.gp(0)
b9.aY(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).ez(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asn[a5]
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
b6.r=D.b8q.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k1(C.bU(a8,a9)))
b9.qv(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aBY(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBY(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bO.gp(0)
b9.aP(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.af
b8.c=1
b8.r=A.b3.gp(0)
b9.ae(a8,a9,b8)
b3=C.hr(b4,b4,b4,b4,D.eXS,A.a4,A.ca,b4,A.e0,A.c8)
b3.ey()
b3.a4(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwf.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.btT()}}
B.aKX.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwm.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.bui()}}
B.aLz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.b0()
this.aX()
this.by()}}
B.bwA.prototype={
q(){var w,v,u
for(w=this.fq$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fp$
w===$&&C.c()
w.q()
this.buW()}}
var z=a.updateTypes(["~()","R(to)","R(a41)","az<~>()","R(Cb)","H(to,H)","M(M,to)","R(C7)","R(YS)","R(aaZ)","R(uY)","R(a2G)","R(nk)","R(a_p)","R(abM)","H(H)","U1()","UD()","TS()","UR()","V9()","Vb()","U0()","Vv()","VK()","Vw()","Vs()","VR()","U_()","VW()","R(my)","Vm()","Vr()","aet(Y,H)","adl(Y,H)","~(a4<@,@>)","H(C7,C7)","n(eb)","R(aej)","R(a07)","R(Cl)","R(abt)","R(adp)","R(abc)","H(H,qG)","H(H,Cb)","n(qG)","~(qG,ai<n>,H)","qG?(Cb)","R(qG)","r(n,a_V)","R(PE)","~(Ao)","R(abj)","M(H?)","VY()","R(FA)","R(acB)","M(H)","UE()","M(Pn)","R(a9S)","TX()","a7S()","~(AW,n,u,w,M)","~(n,to)","Vp()","V4(Y)","N4(Y)","Ul(Y,br<M>,br<M>)","W1()","UL()","TY()","UC()","Vn()","VA()","VV()","Vl()","~(n)","cr(aaF)","R(aaE)","US()","VJ()","UT()","TW()","UP()","VB()","Vx()","Un()","R(Pn)","~(ba)"])
B.fuD.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fl8.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gJ(d.e.split(". "))+"."},
$S:z+37}
B.frB.prototype={
$1(d){var w
if(!this.a.Lq(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.frC.prototype={
$1(d){return d.x},
$S:z+1}
B.fuA.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fuB.prototype={
$1(d){var w
if(!this.a.Lq(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fuC.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e62.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e63.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e64.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.ma(v,A.dU,A.ic)}},
$S:8}
B.e6f.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e6g.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e6b.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e69.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e6a(w,this.b,e)))},
$S:1835}
B.e6a.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e6c.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVM().aje(0,u[1],u[2],u[3])
u[4].bJ(0,new B.e67(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e68(w.a,v,w.f,w.r))},
$S:0}
B.e67.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:191}
B.e68.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e6d.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVM().ak_(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e66(w.a,v,w.e,w.f))},
$S:0}
B.e66.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e6e.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e65(w,this.b))},
$S:0}
B.e65.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e6j.prototype={
$0(){var w=this.a
return w.m(new B.e6i(w))},
$S:0}
B.e6i.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e6k.prototype={
$0(){var w=this.a
return w.m(new B.e6h(w))},
$S:0}
B.e6h.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e6l.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.Nc()},
$S:0}
B.e6m.prototype={
$0(){return this.a.XL(this.b)},
$S:0}
B.e6n.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nc():w.aUR()},
$S:2}
B.e6o.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nc():w.aUR()},
$S:0}
B.em8.prototype={
$2(d,e){return d+e},
$S:1836}
B.ems.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.emr(w,d))},
$S:132}
B.emr.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.emt.prototype={
$0(){},
$S:0}
B.emu.prototype={
$0(){},
$S:0}
B.ema.prototype={
$0(){return this.a.m(new B.em9(this.b,this.c))},
$S:0}
B.em9.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.em_.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.em0.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.em1.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.em2.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.em3.prototype={
$1(d){return this.a.db===d},
$S:32}
B.em4.prototype={
$1(d){return this.a.db=d},
$S:29}
B.em5.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.em6.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:29}
B.em7.prototype={
$0(){var w=this.a
return w.m(w.gavE())},
$S:0}
B.elY.prototype={
$1(d){return this.a.$1(!0)},
$S:79}
B.elZ.prototype={
$1(d){return this.a.$1(!1)},
$S:133}
B.elX.prototype={
$1(d){return this.a.$1(!1)},
$S:194}
B.eml.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgf(o,p),n)
w=this.b
v=B.byX("WORLD",w.a,w.c)
u=B.byX("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cb:A.b2
t=B.byX("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.C5[o.db].d?A.cb:A.c
q=x.p
s=C.a([v,u,t,B.byX("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byX("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hC,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bCL(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.ri[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mw,"Again",new B.emg(o),A.c,p),new B.fi(A.oM,"Rebuild",new B.emh(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.iW,"Next world",new B.emi(o),A.b2,p))
n.push(B.hhv("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hhv("Crash!",o.at,A.cb,C.a([new B.fi(A.mw,"Try again",new B.emj(o),A.b2,p),new B.fi(A.oM,"Rebuild",new B.emk(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b0,A.r,n,p)},
$S:64}
B.emg.prototype={
$0(){var w=this.a
return w.m(w.gavE())},
$S:0}
B.emh.prototype={
$0(){var w=this.a
return w.m(new B.emd(w))},
$S:0}
B.emd.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.emi.prototype={
$0(){var w=this.a
return w.m(new B.emc(w))},
$S:0}
B.emc.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.emj.prototype={
$0(){var w=this.a
return w.m(w.gavE())},
$S:0}
B.emk.prototype={
$0(){var w=this.a
return w.m(new B.emb(w))},
$S:0}
B.emb.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.emm.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.emf(v,w))},
$S:0}
B.emf.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.emn.prototype={
$1(d){return this.a.y=d},
$S:9}
B.emo.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.emp.prototype={
$1(d){return this.a.z=d},
$S:9}
B.emq.prototype={
$0(){var w=this.a
return w.m(new B.eme(w))},
$S:0}
B.eme.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEt.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hcQ
if(q==null)q=$.hcQ=B.cEy()
w=3
return C.b(C.iN(C.a([q,$.qP().bf5("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kB(0,C.cP(J.q(s,1)))
q.m(new B.dEs(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:49}
B.dEs.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dE5.prototype={
$0(){return this.a.bU3(C.aU(J.q(this.b,"group")))},
$S:0}
B.dE6.prototype={
$1(d){return A.a.aT(A.o.fT(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:304}
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
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
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
return d.a===w.cx&&w.axm(d)},
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
return w.m(w.gc3r())},
$S:0}
B.dE4.prototype={
$0(){return this.a.agQ(null)},
$S:0}
B.dEj.prototype={
$0(){var w=this.a.as
return w==null?null:w.eV(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEk.prototype={
$0(){return this.a.cyZ(this.b.a)},
$S:0}
B.dEl.prototype={
$0(){return this.a.agQ(this.b)},
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
w.fx=D.K2},
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
if(v)w.aXu()
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
B.c_T.prototype={
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
$S:289}
B.c_U.prototype={
$1(d){var w=new C.rH([],[]).pB(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:602}
B.ffa.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:216}
B.ffb.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:216}
B.ffc.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:216}
B.ffj.prototype={
$1(d){return!J.q(d,0)},
$S:216}
B.ffk.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:216}
B.ffl.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:216}
B.dGE.prototype={
$1(d){return this.a.asn(0)},
$S:8}
B.dGi.prototype={
$0(){var w=this.b
return this.a.cx=new C.L(w,C.hYG(),C.U(w).k("L<1,H>")).fL(0)},
$S:0}
B.dGl.prototype={
$1(d){return""+d},
$S:81}
B.dGF.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGg.prototype={
$1(d){return this.a.asn(this.b)},
$S:8}
B.dGh.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aw5(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.my(0,d,a1.m0(0.15,0.3))
u=a1.my(0,d,a1.m0(0.15,0.62))
t=a1.my(0,"and",a1.m0(0.48,0.46))
s=a1.my(0,a0,a1.m0(0.82,0.46))
a1=t.a
w.push(new B.nk(v.a,a1,0))
w.push(new B.nk(u.a,a1,1))
w.push(new B.nk(a1,s.a,0))
break
case 1:v=a1.my(0,d,a1.m0(0.12,0.25))
u=a1.my(0,d,a1.m0(0.12,0.65))
r=a1.my(0,"xor",a1.m0(0.46,0.25))
q=a1.my(0,"and",a1.m0(0.46,0.65))
p=a1.aw4(0,a0,a1.m0(0.82,0.25),0)
o=a1.aw4(0,a0,a1.m0(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nk(a1,n,0))
m=u.a
w.push(new B.nk(m,n,1))
l=q.a
w.push(new B.nk(a1,l,0))
w.push(new B.nk(m,l,1))
w.push(new B.nk(n,p.a,0))
w.push(new B.nk(l,o.a,0))
break
case 2:k=a1.my(0,"clock",a1.m0(0.15,0.4))
j=a1.my(0,"not",a1.m0(0.45,0.65))
s=a1.my(0,a0,a1.m0(0.82,0.3))
i=a1.my(0,"buzzer",a1.m0(0.82,0.65))
a1=k.a
w.push(new B.nk(a1,s.a,0))
n=j.a
w.push(new B.nk(a1,n,0))
w.push(new B.nk(n,i.a,0))
break
default:h=a1.my(0,d,a1.m0(0.12,0.25))
g=a1.my(0,d,a1.m0(0.12,0.7))
f=a1.my(0,"nor",a1.m0(0.5,0.25))
e=a1.my(0,"nor",a1.m0(0.5,0.7))
s=a1.my(0,a0,a1.m0(0.86,0.25))
a1=f.a
w.push(new B.nk(g.a,a1,0))
n=e.a
w.push(new B.nk(n,a1,1))
w.push(new B.nk(h.a,n,0))
w.push(new B.nk(a1,n,1))
w.push(new B.nk(a1,s.a,0))}},
$S:0}
B.dGm.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aw5(0)
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
v.acb(this.c)
if(v.ax)B.By("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gJ(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dGn.prototype={
$0(){},
$S:0}
B.dGo.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dGp.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGk.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bp(w.e,new B.dGj(v))
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
return C.aD(A.c5,C.jz(C.b3(w,w,w,new B.ban(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGs(v),w,w,w,new B.dGt(v),new B.dGu(v),new B.dGv(v),w,w,w,w,w,w,w,w,w,w,new B.dGw(v),w,w,w,!1,A.a8)},
$S:35}
B.dGw.prototype={
$1(d){return this.a.c5a(d.b)},
$S:51}
B.dGu.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cdE(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awT(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
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
if(t.as!=null){w=t.bXF(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bp(v,new B.dGq(w))
u=t.as
u.toString
v.push(new B.nk(u,w.a,w.b))
C.jR()}}t.z=t.as=null},
$S:37}
B.dGq.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGs.prototype={
$1(d){return this.a.auV(d.b)},
$S:329}
B.dGA.prototype={
$0(){return this.a.byE(this.b.a)},
$S:0}
B.dGB.prototype={
$0(){return this.a.asn(this.b.a)},
$S:0}
B.dGC.prototype={
$0(){var w=this.a
return w.m(new B.dGr(w))},
$S:0}
B.dGr.prototype={
$0(){var w=this.a
w.aw5(0)
w.ay=null},
$S:0}
B.dGD.prototype={
$0(){return this.a.cuO(this.b)},
$S:0}
B.cLk.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e0,A.c8)
u.ey()
return u},
$S:326}
B.dMt.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMs.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMv.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bZr()},
$S:120}
B.dMu.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.ffB.prototype={
$0(){return D.dZ4},
$S:z+55}
B.ffC.prototype={
$0(){return D.dxc},
$S:z+59}
B.ffD.prototype={
$0(){return D.du4},
$S:z+62}
B.ffO.prototype={
$0(){return D.dYu},
$S:z+63}
B.ffQ.prototype={
$0(){return D.dDB},
$S:z+66}
B.ffR.prototype={
$0(){return D.dx7},
$S:z+88}
B.ffS.prototype={
$0(){return D.dxa},
$S:z+17}
B.ffT.prototype={
$0(){return D.dqf},
$S:z+18}
B.ffU.prototype={
$0(){return D.dzG},
$S:z+19}
B.ffV.prototype={
$0(){return D.dBj},
$S:z+20}
B.ffW.prototype={
$0(){return D.dBl},
$S:z+21}
B.ffE.prototype={
$0(){return D.dwj},
$S:z+22}
B.ffF.prototype={
$0(){return D.dGk},
$S:z+23}
B.ffG.prototype={
$0(){return D.dYb},
$S:z+24}
B.ffH.prototype={
$0(){return D.dWd},
$S:z+25}
B.ffI.prototype={
$0(){return D.dF_},
$S:z+26}
B.ffJ.prototype={
$0(){return D.dYj},
$S:z+27}
B.ffK.prototype={
$0(){return D.dwi},
$S:z+28}
B.ffL.prototype={
$0(){return D.dYt},
$S:z+29}
B.ffM.prototype={
$0(){return D.dwk},
$S:z+16}
B.ffN.prototype={
$0(){return D.dBB},
$S:z+31}
B.ffP.prototype={
$0(){return D.dEZ},
$S:z+32}
B.eWP.prototype={
$2(d,e){return new B.aet($.bDp()[e],new B.eWO(e,this.a),null)},
$S:z+33}
B.eWO.prototype={
$0(){var w=this.a,v=F.aDw.h(0,$.bDp()[w].a)
$.ari=v==null?"music":v
C.a5(this.b,!1).cl(C.e8(new B.eWM(w),!1,null,x.H))},
$S:0}
B.eWM.prototype={
$1(d){return $.bDp()[this.a].e.$0()},
$S:41}
B.eWQ.prototype={
$2(d,e){return new B.adl(D.awi[e],new B.eWN(this.a,e),null)},
$S:z+34}
B.eWN.prototype={
$0(){return this.a.d.$1(D.awi[this.b])},
$S:0}
B.eWv.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eWu.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eWt.prototype={
$1(d){var w=this
return new C.e0(new B.eWs(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eWs.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fhW,A.at,D.fop,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bC(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Dj,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iI,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bC(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Dj,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iI,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dhe[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gJ(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gJ(i)}else g=A.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aD(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bq(j,j,j,j),d,d,A.n),d,d,d,A.fz,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eWq(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f7P,d,d,d,d,d,d,d,d,d),A.am,new C.cm(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zF,new B.eWr(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bl(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A5.tH,d,d,A.ah,!0),d),!0,!1,A.ae,!0,!0),d)},
$S:106}
B.eWq.prototype={
$0(){var w=this
return w.a.$1(new B.eWp(w.b,w.c,w.d))},
$S:0}
B.eWp.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eWr.prototype={
$0(){var w=this,v=w.a
v.m(new B.eWo(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eWo.prototype={
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
B.eWD.prototype={
$0(){var w=this.a
return w.m(new B.eWC(w))},
$S:0}
B.eWC.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eWE.prototype={
$0(){return B.qO(this.b,this.a.f,"scene")},
$S:0}
B.eWF.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gJ(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZ3().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aWi,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bY],x.O),v,v),A.n),A.be)},
$S:292}
B.eWG.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f5(A.A,C.c6(new C.h6(C.a([u.gtX(),u.gZ3()],x.dS)),new B.eWB(u,this.b,v),w),A.f,A.ei),w,w,w)},
$S:263}
B.eWB.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtX().x
r===$&&C.c()
w=r<0.9?1:1-B.bqk(r,0.9,0.98)
v=s.gZ3().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gaw6().a){case 0:s=s.bxQ(t.b,r,u,t.c)
break
case 1:s=s.bOd(t.b,r,u,t.c)
break
case 2:s=s.czu(t.b,r,u,t.c)
break
case 3:s=s.bAL(t.b,r,u,t.c)
break
case 4:s=s.bDZ(t.b,r,u,t.c)
break
case 5:s=s.bDb(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:236}
B.eWH.prototype={
$2(d,e){var w=C.auJ(this.b),v=this.c.d,u=C.aq(A.d.gJ(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gJ(v),A.d.gal(v),0.4)
v.toString
v=w.cHZ(u,A.bG,v,3.5)
u=this.a
w=u.gtX().x
w===$&&C.c()
return C.a9E(C.kZ(null,null,null,1,0,new B.eWA(u),A.k.D(w,0,1)),v)},
$S:1840}
B.eWA.prototype={
$1(d){var w=this.a
w.gtX().sp(0,d)
if(w.as)w.m(new B.eWw(w))},
$S:6}
B.eWw.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eWI.prototype={
$0(){var w=this.a
w.gtX().sp(0,0)
w.afz()},
$S:0}
B.eWJ.prototype={
$1(d){var w=this.a
w.m(new B.eWz(w,d))
if(w.as)w.afz()},
$S:6}
B.eWz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eWK.prototype={
$0(){var w=this.a
w.m(new B.eWy(w,this.b))
w.gtX().sp(0,0)
if(w.as)w.afz()},
$S:0}
B.eWy.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eWL.prototype={
$0(){var w=this.a
return w.m(new B.eWx(w,this.b))},
$S:0}
B.eWx.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eWm.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1841}
B.eWn.prototype={
$1(d){return d.b},
$S:1842}
B.dgm.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgn.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgj.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgl.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgo.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgp.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgr.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgs.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgt.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgu.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgv.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgw.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.elt.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eli.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.elk.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.ell.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.elo.prototype={
$1(d){var w=D.mC.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.elp.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cQ(new C.a0(q,new B.elq(d),p.k("a0<1>")),new B.elr(r),p.k("cQ<1,qG?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.elq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.elr.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.elm.prototype={
$1(d){return D.mC.h(0,d.b).c===D.wG},
$S:z+49}
B.eln.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.elT.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v2(0,u)
w.aHu(A.o.an(v,1000))},
$S:8}
B.els.prototype={
$0(){},
$S:0}
B.ele.prototype={
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
B.elv.prototype={
$1(d){var w=null,v=this.a.b
return C.bl(!0,C.v(C.a([A.O,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mC.h(0,v).b,D.mC.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fzr,w,C.d(D.mC.h(0,v).a,w,w,w,w,w,w,A.hs,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,V.an8,w,w,w,w,new B.elu(d),!1,w,w,w,w,w,w,w,D.fr9,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:24}
B.elu.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.elx.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e7r],x.p)
for(w=0;w<6;++w){v=D.awC[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bQu,u,u,u,u,new B.elw(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kF,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hs,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bvY,u,u,A.ah,!0),u),!0,!1,A.ae,!0,!0)},
$S:24}
B.elw.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.elh.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.elf(d),w,w),C.bK(!1,A.Do,w,w,!0,w,w,new B.elg(d),w,w)],x.p),w,w,F.n3,D.foB,w,w,w,w,D.frr,w)},
$S:20}
B.elf.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.elg.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.elR.prototype={
$0(){var w=this.a
return w.m(new B.elQ(w))},
$S:0}
B.elQ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.elS.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mf(new B.elH(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b4X:t
v=C.a([C.b3(u,t,t,new B.bgd(w,v,new B.elI(r),new B.elJ(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.elK(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFF())
return C.aD(A.c5,C.jz(new C.an(A.W,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.elL(r),t,r.gceX(),t,new B.elM(r),new B.elN(r),new B.elO(r),t,t,t,t,t,t,t,t,t,t,new B.elP(r),t,t,t,!1,A.a8)},
$S:35}
B.elH.prototype={
$0(){return this.a.abg(this.b)},
$S:0}
B.elP.prototype={
$1(d){return this.a.cxf(d.b)},
$S:51}
B.elN.prototype={
$1(d){return this.a.ceY(d.b)},
$S:42}
B.elO.prototype={
$1(d){return this.a.ceZ(d.b)},
$S:18}
B.elM.prototype={
$1(d){return this.a.b_J()},
$S:37}
B.elL.prototype={
$1(d){return this.a.abY(d.b)},
$S:329}
B.elI.prototype={
$0(){return this.a.z},
$S:691}
B.elJ.prototype={
$0(){return this.a.Q},
$S:737}
B.elK.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJX()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=C.a([D.fm2,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.f6A,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h7,q,q,q)},
$S:59}
B.elj.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tq,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.Tx,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1844}
B.elD.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lv()},
$S:0}
B.elE.prototype={
$0(){var w=this.a
return w.m(new B.elC(w))},
$S:0}
B.elC.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.elF.prototype={
$0(){var w=this.a
return w.m(new B.elB(w))},
$S:0}
B.elB.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.elG.prototype={
$0(){var w=this.a
return w.m(new B.elA(w))},
$S:0}
B.elA.prototype={
$0(){return this.a.r=!0},
$S:0}
B.elz.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mC.gdK(D.mC),w=w.gaf(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.cs7(p[r]))
return new C.D(I.agC,C.v(C.a([new C.D(R.aii,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ely.prototype={
$0(){return this.a.c5f(this.b)},
$S:0}
B.dgi.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e0,A.c8)
u.ey()
return u},
$S:326}
B.exy.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bp(o,new B.exw(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.exx())},
$S:8}
B.exw.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.exx.prototype={
$0(){},
$S:0}
B.ex9.prototype={
$0(){},
$S:0}
B.ex8.prototype={
$0(){},
$S:0}
B.exi.prototype={
$0(){return B.qO(this.b,this.a.d,"spark-painter")},
$S:0}
B.exk.prototype={
$1(d){return this.a.aY4(0,d.b)},
$S:42}
B.exo.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aR5(u)
v.c8h(u)
return null},
$S:18}
B.exj.prototype={
$1(d){return this.a.aY3()},
$S:37}
B.exp.prototype={
$1(d){return this.a.aY4(0,d.b)},
$S:22}
B.exq.prototype={
$1(d){return this.a.aY3()},
$S:51}
B.exr.prototype={
$0(){var w=this.a
return w.m(new B.exh(w,this.b))},
$S:0}
B.exh.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.exs.prototype={
$0(){var w=this.a
return w.m(new B.exg(w))},
$S:0}
B.exg.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ext.prototype={
$0(){var w=this.a
return w.m(new B.exf(w,this.b))},
$S:0}
B.exf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.exu.prototype={
$1(d){var w=this.a
return w.m(new B.exe(w,d))},
$S:6}
B.exe.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.exv.prototype={
$0(){var w=this.a
return w.m(new B.exd(w))},
$S:0}
B.exd.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.exl.prototype={
$0(){var w=this.a
return w.m(new B.exc(w))},
$S:0}
B.exc.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.exm.prototype={
$0(){var w=this.a
return w.m(new B.exb(w))},
$S:0}
B.exb.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.exn.prototype={
$0(){var w=this.a
return w.m(new B.exa(w,this.b))},
$S:0}
B.exa.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eE7.prototype={
$0(){return B.qO(this.b,this.a.d,"title")},
$S:0}
B.eE8.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gID().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZB(v[t],t,s,q,u))
return new C.D(A.fA,C.bW(A.fQ,w,A.rT,0,0),null)},
$S:712}
B.eE9.prototype={
$1(d){return this.a.m(new B.eE6())},
$S:2}
B.eE6.prototype={
$0(){},
$S:0}
B.eEa.prototype={
$0(){var w=this.a
w.m(new B.eE5(w,this.b))
w=w.gID()
w.iz(0,0)
w.cI(0)},
$S:0}
B.eE5.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eEb.prototype={
$0(){var w=this.a
return w.m(new B.eE4(w,this.b))},
$S:0}
B.eE4.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eEc.prototype={
$0(){var w=this.a
return w.m(new B.eE3(w))},
$S:0}
B.eE3.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eEd.prototype={
$0(){var w=this.a
return w.m(new B.eE2(w,this.b))},
$S:0}
B.eE2.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eEe.prototype={
$0(){var w=this.a.gID()
w.iz(0,0)
w.cI(0)},
$S:0}
B.eEf.prototype={
$1(d){var w=this.a
return w.m(new B.eE1(w,d))},
$S:6}
B.eE1.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ei_.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.ei0.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.galZ()*2.2},
$S:z+13}
B.ehO.prototype={
$0(){return B.qO(this.b,this.a.d,"orbits")},
$S:0}
B.ehP.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadb()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2A:q.ciz(u,q.gaVl())
return new C.ev(C.aD(A.c5,C.b3(r,r,r,new B.bkA(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ehL(q),new B.ehM(q),new B.ehN(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:186}
B.ehM.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.ehN.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ehL.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_p(u,v.gaVl(),v.Q,v.b1i(),C.a([],x.g)))
C.jR()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.ehQ.prototype={
$1(d){var w=this.a
return w.m(new B.ehK(w,d))},
$S:6}
B.ehK.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ehS.prototype={
$1(d){var w=this.a
return w.m(new B.ehJ(w,d))},
$S:6}
B.ehJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehT.prototype={
$1(d){var w=this.a
return w.m(new B.ehI(w,d))},
$S:6}
B.ehI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ehU.prototype={
$0(){var w=this.a
return w.m(new B.ehH(w))},
$S:0}
B.ehH.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ehV.prototype={
$0(){var w=this.a
return w.m(new B.ehG(w))},
$S:0}
B.ehG.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ehW.prototype={
$0(){var w=this.a
return w.m(new B.ehF(w))},
$S:0}
B.ehF.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ehX.prototype={
$0(){var w=this.a
return w.m(w.gcur())},
$S:0}
B.ehY.prototype={
$0(){var w=this.a
return w.m(w.gbFT())},
$S:0}
B.ehZ.prototype={
$0(){var w=this.a
return w.m(new B.ehE(w))},
$S:0}
B.ehE.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqG(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hc())}},
$S:0}
B.ehR.prototype={
$0(){var w=this.a
return w.m(A.d.grA(w.e))},
$S:0}
B.eDz.prototype={
$1(d){return this.a.fS$-d.b>6000},
$S:738}
B.eDA.prototype={
$1(d){var w=this.a.e
return new C.a0(w,new B.eDy(d),C.U(w).k("a0<1>")).gM(0)>=3},
$S:738}
B.eDy.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eDo.prototype={
$0(){return B.qO(this.b,this.a.d,"swarm")},
$S:0}
B.eDp.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aD(A.c5,C.b3(w,w,w,new B.bs5(v.e,v.f,v.ax,v.at,v.ay,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eDl(v),new B.eDm(v),new B.eDn(v),w,w,w,w,w,w,w,w,new B.eDd(v),new B.eDe(v),new B.eDf(v),w,w,w,!1,A.a8),v.d)},
$S:186}
B.eDm.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.eDn.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eDl.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eDe.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fS$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lg("flute",7,500,0.3)},
$S:22}
B.eDf.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eDd.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eDq.prototype={
$0(){var w=this.a
return w.m(new B.eDk(w,this.b))},
$S:0}
B.eDk.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eDr.prototype={
$0(){var w=this.a
return w.m(new B.eDj(w,this.b))},
$S:0}
B.eDj.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eDs.prototype={
$0(){var w=this.a
return w.m(new B.eDi(w))},
$S:0}
B.eDi.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eDt.prototype={
$1(d){var w=this.a
return w.m(new B.eDh(w,d))},
$S:6}
B.eDh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eDu.prototype={
$1(d){var w=this.a
return w.m(new B.eDg(w,d))},
$S:6}
B.eDg.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eDv.prototype={
$1(d){var w=this.a
return w.m(new B.eDc(w,d))},
$S:6}
B.eDc.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eDw.prototype={
$1(d){var w=this.a
return w.m(new B.eDb(w,d))},
$S:6}
B.eDb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eDx.prototype={
$1(d){var w=this.a
return w.m(new B.eDa(w,d))},
$S:6}
B.eDa.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFN.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFM(w,d))},
$S:132}
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
v=J.jy(v==null?A.rn:v)
v=v.gaf(v)
while(v.C()){u=v.gR(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFO.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFP.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Z4(w)>0},
$S:z+14}
B.dFD.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azf()},
$S:0}
B.dFG.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eJ(w,F.kP,new C.D(A.bD,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hT,w,w,w),A.S,C.E(C.ig(!0,w,w,A.y,T.aO1,new B.dFF(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:48}
B.dFF.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFE(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bW:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b3:A.dq,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jd
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.faf,s,s,s))
return C.aD(s,C.p(s,C.v(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
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
p.gace()
o=C.b3(q,q,q,new B.ba3(p.d,w,v,p.gc5m(),q),o)
v=p.bXi("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gI0()
t=p.as>=p.gI0()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.aua("GOAL",""+w+" / "+u,t),p.aua("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hC,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lF)
if(p.Q&&!p.y)s.push(D.aW0)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.cb).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.cb,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gI0()+".",q,q,q,q,q,q,A.hE,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f0O,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mw,"Try again",new B.dFH(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.iW,"Next level",new B.dFI(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.VW,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aD(A.c5,new C.an(A.W,q,A.b0,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFJ(p),q,q,q,q,!1,A.a8)},
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
return w.m(w.gb3Y())},
$S:0}
B.dFI.prototype={
$0(){var w=this.a
return w.aY5(w.r+1)},
$S:0}
B.dFL.prototype={
$0(){var w=this.a
return w.m(w.gb3Y())},
$S:0}
B.cKS.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.N()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=C.N()
v.b=A.af
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=C.N()
v.r=f.j(0.25).gp(0)
v.z=A.lt
w.ae(d,e*0.5,v)},
$S:739}
B.edt.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcNB()?this.a.cqx(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.edS.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.edH.prototype={
$0(){var w=this.a
return w.m(new B.edy(w))},
$S:0}
B.edy.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.edI.prototype={
$0(){return B.qO(this.b,this.a.d,"marble-music")},
$S:0}
B.edJ.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aD(A.c5,C.b3(w,w,w,new B.bh7(v.e,v.f,v.at,v.ax,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edE(v),new B.edF(v),new B.edG(v),w,w,w,w,w,w,w,w,w,w,new B.edx(v),w,w,w,!1,A.a8),v.d)},
$S:186}
B.edx.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZP(w)
u.e.push(new B.FA(w,w,v,u.aOJ(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRm(d.b)},
$S:51}
B.edF.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.edG.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRm(d.b)},
$S:18}
B.edE.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZP(t.ad(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FA(w,t,v,u.aOJ(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.edK.prototype={
$0(){var w=this.a
return w.m(new B.edD(w,this.b))},
$S:0}
B.edD.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.edL.prototype={
$0(){var w=this.a
return w.m(new B.edC(w,this.b))},
$S:0}
B.edC.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.edM.prototype={
$0(){var w=this.a
return w.m(new B.edB(w,this.b))},
$S:0}
B.edB.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.edN.prototype={
$1(d){var w=this.a
return w.m(new B.edA(w,d))},
$S:6}
B.edA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.edO.prototype={
$0(){var w=this.a
return w.m(new B.edz(w))},
$S:0}
B.edz.prototype={
$0(){return this.a.axL("stairs")},
$S:0}
B.edP.prototype={
$0(){var w=this.a
return w.m(new B.edw(w))},
$S:0}
B.edw.prototype={
$0(){return this.a.axL("pinball")},
$S:0}
B.edQ.prototype={
$0(){var w=this.a
return w.m(new B.edv(w))},
$S:0}
B.edv.prototype={
$0(){return this.a.axL("random")},
$S:0}
B.edR.prototype={
$0(){var w=this.a
return w.m(new B.edu(w))},
$S:0}
B.edu.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ehn.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eho.prototype={
$0(){var w=this.b,v=new B.ad6(this.a.a,this.c)
v.c=w.fS$
return w.e.push(v)},
$S:0}
B.ehv.prototype={
$0(){var w=this.a
return w.m(new B.ehu(w))},
$S:0}
B.ehu.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ehw.prototype={
$0(){return B.qO(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ehx.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQ5()}w=u.w
return new C.ev(C.aD(A.c5,C.b3(v,v,v,new B.bkB(u.e,u.gaY7(),6,u.gckF(),u.gcr_(),u.fS$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eht(u),v,v,v,!1,A.a8),u.d)},
$S:186}
B.eht.prototype={
$1(d){return this.a.c5o(d.b)},
$S:51}
B.ehy.prototype={
$1(d){var w=this.a
return w.m(new B.ehs(w,d))},
$S:6}
B.ehs.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehz.prototype={
$0(){var w=this.a
return w.m(new B.ehr(w,this.b))},
$S:0}
B.ehr.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ehA.prototype={
$0(){var w=this.a
return w.m(new B.ehq(w,this.b))},
$S:0}
B.ehq.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ehB.prototype={
$0(){var w=this.a
return w.m(w.gbJT())},
$S:0}
B.ehC.prototype={
$0(){var w=this.a
return w.m(new B.ehp(w))},
$S:0}
B.ehp.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad6(v.aB(6),v.aj()))},
$S:0}
B.ehD.prototype={
$0(){var w=this.a
return w.m(A.d.grA(w.e))},
$S:0}
B.fuU.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:128}
B.egS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.egR(w,d))},
$S:132}
B.egR.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.egE.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:128}
B.egy.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8X(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.egz.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.egD.prototype={
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
o=w.aiN(u)
v=D.w1.h(0,v[t].a).a
n=w.aiN(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vV("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaYd()&&w.x.K(0,w.d)){B.vV("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vS("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.egC.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a0<J.E>"),p=C.C(new C.a0(new C.cu(t,s),new B.egA(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bJ(0,new B.egB(r,v))
t.a9(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.egA.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:32}
B.egB.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:128}
B.egM.prototype={
$1(d){return""+d.b+" "+D.w1.h(0,d.a).c.toLowerCase()},
$S:403}
B.egN.prototype={
$0(){var w=this.a
return w.m(new B.egL(w))},
$S:0}
B.egL.prototype={
$0(){var w=this.a;++w.d
w.awb(0)},
$S:0}
B.egO.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aD(A.c5,C.b3(w,w,w,new B.bhP(v.e,v.f,v.r,v.gcBA(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egH(v),new B.egI(v),new B.egJ(v,e),w,w,w,w,w,w,w,w,w,w,new B.egK(v),w,w,w,!1,A.a8)},
$S:35}
B.egK.prototype={
$1(d){return this.a.c5L(d.b)},
$S:51}
B.egI.prototype={
$1(d){var w=this.a
return w.w=w.aYe(d.b)},
$S:42}
B.egJ.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.egF(w,v,d,this.b))},
$S:18}
B.egF.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.egH.prototype={
$1(d){return this.a.w=null},
$S:37}
B.egP.prototype={
$0(){var w=this.a
return w.m(new B.egG(w,this.b))},
$S:0}
B.egG.prototype={
$0(){var w=this.a
w.d=this.b
w.awb(0)},
$S:0}
B.egQ.prototype={
$0(){return this.a.c5F(0,this.b.a)},
$S:0}
B.dos.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).ez(0,Math.max(h.gcm(),1))
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
$S:128}
B.dOx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOw(w,d))},
$S:132}
B.dOw.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOm.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.av3[w.aB(4)]
return A.d.fZ(u)},
$S:23}
B.dOl.prototype={
$1(d){return B.fYW(d)==="*"},
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
B.vS("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vV("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8J()[r]+" codes for "+C.t(D.Ci.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b0f()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.Ci.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vV("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOv.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dq:e,u=C.m(8),t=f?C.I(A.b3,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b3:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.nd,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1848}
B.dOq.prototype={
$1(d){var w=D.dkW.h(0,d)
return w==null?A.c:w},
$S:740}
B.dOr.prototype={
$0(){var w=this.a
return w.m(new B.dOp(w,this.b))},
$S:0}
B.dOp.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avv()},
$S:0}
B.dOs.prototype={
$0(){var w=this.a
return w.m(new B.dOo(w))},
$S:0}
B.dOo.prototype={
$0(){var w=this.a;++w.e
w.avv()},
$S:0}
B.dOt.prototype={
$0(){return this.a.aYc(this.b)},
$S:0}
B.dOu.prototype={
$0(){return this.a.aYc(this.b)},
$S:0}
B.dRm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRl(w,d))},
$S:132}
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
$0(){return this.a.a9V("drought")},
$S:0}
B.dRi.prototype={
$0(){return this.a.a9V("disease")},
$S:0}
B.dRj.prototype={
$0(){return this.a.a9V("foxes")},
$S:0}
B.dRk.prototype={
$0(){return this.a.a9V("rabbits")},
$S:0}
B.d3A.prototype={
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
B.d3C.prototype={
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
if(m!=null)n.bB(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bB(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.af
l.c=2.6
l.r=f.gp(0)
l.e=A.fB
this.c.aP(u,l)},
$S:1851}
B.d3B.prototype={
$3(d,e,f){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.ca,w,A.e0,A.c8)
v.ey()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1852}
B.bFt.prototype={
$2(d,e){return d+e.a*e.b},
$S:1853}
B.fpA.prototype={
$2(d,e){return e.a-d.a},
$S:1854}
B.dBY.prototype={
$2(d,e){return d+e},
$S:73}
B.dCa.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dC9(v,A.k.D((v.gvS()-w[v.e].guV())/Math.max(w[v.e].guV(),8),-1,1)*0.32,u))},
$S:8}
B.dC9.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dCb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dC8(w,d))},
$S:132}
B.dC8.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
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
return C.aD(A.c5,C.b3(w,w,w,new B.b98(v.w,this.b.a,v.f,v.gvS()===v.d[v.e].guV(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dC1(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dC1.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cxs(v-1)},
$S:51}
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
B.cDp.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cl(new C.u(d,s),20,w),A.rA)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
B.foA(v,"1",new C.u(d,s),A.bi,11)}},
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
$S:132}
B.dVn.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
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
$1(d){return this.a.c5M(this.b,d)},
$S:6}
B.dbA.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bPb(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
m.aP(n,w)
w=C.N()
w.b=A.af
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
p.r=A.hJ.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1857}
B.dbB.prototype={
$3(d,e,f){var w=this,v=w.b
return B.foA(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1858}
B.dG9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dG8(w,d))},
$S:132}
B.dG8.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
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
w.aWW()},
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
if(w.ga9c()&&w.Q.K(0,w.x)){B.vV("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vS("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFT.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLx.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLI.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLD.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLJ.prototype={
$1(d){return this.a.Lq(d)&&!d.x},
$S:z+1}
B.bLK.prototype={
$2(d,e){return Math.max(d,this.a.azJ(e))},
$S:z+6}
B.bLM.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLN(w))},
$S:z+5}
B.bLN.prototype={
$0(){return this.a.a},
$S:109}
B.bLL.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLO.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLP(w))},
$S:z+5}
B.bLP.prototype={
$0(){return this.a.a},
$S:109}
B.bLz.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLA(w))},
$S:z+5}
B.bLA.prototype={
$0(){return this.a.a},
$S:109}
B.bLy.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLB.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLC(w))},
$S:z+5}
B.bLC.prototype={
$0(){return this.a.a},
$S:109}
B.bLw.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLQ.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLE.prototype={
$1(d){return d!==this.b&&this.a.aFP(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLH.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLG.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLF.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGF.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGG.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ckb.prototype={
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
$S:191}
B.fGj.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1859}
B.fGl.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.af
w.c=e
w.r=d.gp(0)
w.d=A.bP
return w},
$S:1860}
B.fGm.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1861}
B.fGk.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b4,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1862}
B.bGj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGi(w))},
$S:0}
B.bGi.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGl.prototype={
$0(){return C.a([],x.ey)},
$S:1863}
B.bGm.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:430}
B.bGn.prototype={
$0(){var w,v,u
J.bDx(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cp(v))if(B.fZo(v.b))w.b_c(v)
else w.a_4(v)
else{u=w.a.c.bbS(v)
w.adp(u==null?"The "+$.qc().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGh.prototype={
$1(d){return new C.e0(new B.bGf(this.a,this.b),null)},
$S:21}
B.bGf.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGg(this.a,v,e),t=$.qc(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.jr,w,w,w),q=C.aH(w,w,w,w,D.bHb,w,w,w,new B.bGb(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bl(!0,new C.D(A.xG,C.v(C.a([r,A.at,D.fAn,A.S,C.B(C.a([q,C.E(C.kZ(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bNN,w,w,w,new B.bGc(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bK(!1,D.fek,w,w,!0,w,w,new B.bGd(u),w,w),C.bK(!1,A.zF,w,w,!0,w,w,new B.bGe(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:87}
B.bGg.prototype={
$1(d){var w=this.a
w.m(new B.bG9(this.b,d))
this.c.$1(new B.bGa())
w.a.toString},
$S:6}
B.bG9.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGa.prototype={
$0(){},
$S:0}
B.bGb.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGc.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGd.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGe.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bGC.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adp("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adp("\u26a0 Overloaded! The "+$.qc().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zB(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adp("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGD.prototype={
$0(){},
$S:0}
B.bFN.prototype={
$0(){},
$S:0}
B.bGE.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aD(A.c5,C.b3(p,p,p,new B.aig(w,v,u,t,s,r==null?A.iZ:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGv(o),new B.bGw(o),new B.bGx(o),p,p,p,p,p,p,p,p,p,p,new B.bGy(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b4f)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aD(p,C.p(p,C.B(C.a([D.fcA,C.E(C.d(w,p,p,p,p,p,p,D.f4Q,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b9F,p,u,v,p,p,A.n),p,p,p,p,A.nY,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGz(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aYh(C.B(C.a([D.by0,new B.fi(A.FQ,"Cut wire",new B.bGA(o),A.cb,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cfv(w),p,p,10,10,p,p))}return C.jz(new C.an(A.W,p,A.b0,A.r,n,p),A.r,p)},
$S:345}
B.bGw.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6c(s)
if(r!=null){t.m(new B.bGt(t,r,d))
return}w=t.b_T(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bGu(t,w))}},
$S:42}
B.bGt.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGu.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGx.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGr(w,d))
else if(w.w!=null)w.m(new B.bGs(w,d.b.ad(0,w.x)))},
$S:18}
B.bGr.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGs.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGv.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6c(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ak_(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adn()},
$S:37}
B.bGy.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_T(v)
if(u!=null){w.m(new B.bGp(w,u))
if(D.lY.ai(0,u.b))w.cq0(u)
w.a.toString
return}w.m(new B.bGq(w,w.cCp(v)))},
$S:51}
B.bGp.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGq.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGz.prototype={
$0(){var w=this.a
return w.m(new B.bGo(w))},
$S:0}
B.bGo.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGA.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.adn()},
$S:0}
B.bFO.prototype={
$0(){return this.a.bnP(this.b)},
$S:0}
B.bG6.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f_q,w,w,w),C.E(C.kZ(this.b.d,w,w,g,h,new B.bG8(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1864}
B.bG8.prototype={
$1(d){var w=this.a
w.m(new B.bG7(this.b,d))
w.a.toString},
$S:6}
B.bG7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFU.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.adn()},
$S:0}
B.bFV.prototype={
$0(){var w=this.a
return w.m(new B.bFT(w))},
$S:0}
B.bFT.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFW.prototype={
$0(){this.a.m(new B.bFS(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bFS.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bFZ.prototype={
$0(){return this.a.b_c(this.b)},
$S:0}
B.bG_.prototype={
$0(){return this.a.a_4(this.b)},
$S:0}
B.bG0.prototype={
$0(){return this.a.a0J(this.b)},
$S:0}
B.bG1.prototype={
$0(){var w=this.a
w.m(new B.bFR(this.b,this.c))
w.a.toString},
$S:0}
B.bFR.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bG2.prototype={
$0(){var w=this.a
w.m(new B.bFQ(this.b,this.c))
w.a.toString},
$S:0}
B.bFQ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bG3.prototype={
$0(){var w=this.a
w.m(new B.bFP(this.b,this.c))
w.a.toString},
$S:0}
B.bFP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bG4.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG5.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFX.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFY.prototype={
$1(d){return this.a.f=d},
$S:6}
B.ffm.prototype={
$1(d){return d.aFs("bulb")},
$S:z+2}
B.ffn.prototype={
$1(d){return d.pL(0,"switch")&&d.aFs("bulb")},
$S:z+2}
B.ffo.prototype={
$1(d){return A.d.b4(d.a,new B.ff9())},
$S:z+2}
B.ff9.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.ffp.prototype={
$1(d){return d.pL(0,"resistor")&&A.d.b4(d.a,new B.ff8())},
$S:z+2}
B.ff8.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.ffq.prototype={
$1(d){return!d.pL(0,"battery")&&d.aFs("bulb")},
$S:z+2}
B.ffd.prototype={
$1(d){return A.d.b4(d.a,new B.ff7())},
$S:z+2}
B.ff7.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.ffe.prototype={
$1(d){return A.d.b4(d.a,new B.ff6())},
$S:z+2}
B.ff6.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fff.prototype={
$1(d){return A.d.b4(d.a,new B.ff5())},
$S:z+2}
B.ff5.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.ffg.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.ff3())&&A.d.b4(w,new B.ff4())&&d.pL(0,"buck")},
$S:z+2}
B.ff3.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.ff4.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.ffh.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.ff1())&&A.d.b4(w,new B.ff2())},
$S:z+2}
B.ff1.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.ff2.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.ffi.prototype={
$1(d){return A.d.b4(d.a,new B.ff0())},
$S:z+2}
B.ff0.prototype={
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
return w.aFP(d)&&w.Cp(d)},
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
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fti,A.at,D.feg,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PQ[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bG,1,A.q,-1)
n.push(C.aD(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.k9,q,q,q,q,q,q,q,q,q),A.bC,new C.x(u.b,q,D.f5A,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bq(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRs(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eJ(q,F.kP,new C.D(A.bU,new C.a7(340,q,C.cw(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:48}
B.dRs.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dRr(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRr.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bh_()},
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
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahr(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aR
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fqF,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.m(4),C.m1(A.bG,m,m,5,m,w.a/11,new C.lV(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fhj)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.To,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dk,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRz(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dq,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aD(m,C.p(m,new C.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7I,m,m,m,m,m,m,m,m,m),A.av,new C.bC(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bq(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nY,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRA(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A5.tH,m,m,A.ah,!0),m),!0,!1,A.ae,!0,!0)},
$S:87}
B.dRz.prototype={
$0(){var w=this.a
w.m(new B.dRx(w))
this.b.$1(new B.dRy())
w.EP()},
$S:0}
B.dRx.prototype={
$0(){var w=this.a
$.ahr()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRy.prototype={
$0(){},
$S:0}
B.dRA.prototype={
$0(){var w=this.a
w.m(new B.dRv(w,this.b))
this.c.$1(new B.dRw())
w.EP()},
$S:0}
B.dRv.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRw.prototype={
$0(){},
$S:0}
B.dRI.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.dRJ.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mc("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).cl(C.e8(new B.dRH(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRH.prototype={
$1(d){C.ln("construction")
return Am.hBz()},
$S:z+68}
B.dRK.prototype={
$0(){return B.hnF(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
B.dRL.prototype={
$0(){var w=this.a
return w.m(w.d.gcTA())},
$S:0}
B.dRM.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grA(v))
w.EP()},
$S:0}
B.cAX.prototype={
$2(d,e){var w=null,v=this.a.gawc().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8g(v,w),A.au)},
$S:70}
B.cAW.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
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
B.fKZ.prototype={
$3(d,e,f){return new B.Ul(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fL_.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,g,null,new C.bf(C.cI(A.ct,e,null),new C.bp(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNq.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.dNp.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bX5(o):q.bzO(o,p),m=x.p
p=C.a([C.qf(new C.nd(n,new C.cy(p,x.aC)),A.pK,C.rN(),A.bc,A.bc,new B.dNn())],m)
n=t.d
if(n){w=A.k.E(q.gRs(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bxN)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.n8,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uB)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.K8,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.we)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.K8,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aD(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNo(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b0,A.r,p,s),A.aq)},
$S:310}
B.dNn.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,d,null,new C.bf(e,new C.bp(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:388}
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
$0(){return this.a.e=A.d.cK(F.k3,this.b)},
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
m=C.p(p,C.B(C.a([D.fyR,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eD,p,p,p,D.fbt,p,p,p),1),C.d(A.a.aT(A.o.u(C.dl(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fZ(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qo,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kT,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bup(w.gRs(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b3,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aD(p,C.p(p,p,A.f,p,p,A.K7,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNg(w),p,p,p,p,p,p,!1,A.a8),A.ed,C.p(p,p,A.f,p,p,A.aaM,p,12,p,p,p,p,p,12),A.ed,C.p(p,p,A.f,p,p,F.Vi,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k3[o].a,p,1,A.a2,p,p,p,A.a7A,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.buz,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.aec(r,w.gRs(),p),A.f1),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.ddV,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b3,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.ji,w.auc(F.k3[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lj,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.Lj,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:310}
B.dNg.prototype={
$0(){var w=this.a
return w.m(new B.dNf(w))},
$S:0}
B.dNf.prototype={
$0(){return this.a.e=null},
$S:0}
B.e92.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e91(w,d))},
$S:132}
B.e91.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fZu(v)},
$S:0}
B.e93.prototype={
$0(){},
$S:0}
B.e8T.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fZu(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e8U.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvq().r){C.jR()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vV("click",s.c+s.d,60,0.4)
if(B.hnP(r.gvq(),q).b.a===r.gvq().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vS("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.By("bell",D.aoH,700,0.45)
for(q=r.gvq().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e8X.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aD(A.c5,C.b3(s,s,s,new B.bgi(r.gvq(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e8V(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPz,s,s,s),C.d(""+u.a+"/"+r.gvq().c.a+" \u2605   mirrors "+w.a+"/"+r.gvq().r,s,s,s,s,s,s,R.a7g,s,s,s)],t),A.m,s,A.hC,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fjQ("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fi(A.iW,"Next level",new B.e8W(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b0,A.r,w,s)},
$S:64}
B.e8V.prototype={
$1(d){return this.a.c67(d.b)},
$S:51}
B.e8W.prototype={
$0(){var w=this.a
return w.adt(w.d+1)},
$S:0}
B.e8Y.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grA(v))},
$S:0}
B.e8Z.prototype={
$0(){var w=this.a
return w.adt(w.d+1)},
$S:0}
B.e9_.prototype={
$0(){var w=this.a
return w.adt(w.d-1)},
$S:0}
B.e90.prototype={
$0(){return this.a.adt(this.b)},
$S:0}
B.dgF.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:741}
B.dgI.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fT:A.aL).gp(0)
u.c=7
u.d=A.bP
r.bE(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bP
r.bE(w,v,u)},
$S:1866}
B.dgG.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:459}
B.dgH.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:459}
B.e9l.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e9k(w,d))},
$S:132}
B.e9k.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e9m.prototype={
$0(){},
$S:0}
B.e96.prototype={
$1(d){return d===0},
$S:123}
B.e9f.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7r,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cb:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a7g,s,s,s)],v),A.m,s,A.hC,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dq:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b3,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.D(D.brU,w,s),C.E(C.B(C.a([C.E(new C.D(A.bT,C.v(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcxv(),s,s,s,s,s,s,D.aQo,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bT,C.v(C.a([C.E(C.b3(s,s,s,new B.bgx(r.f,s),A.f1),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQo,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fjQ("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fi(A.iC,"Start",new B.e9c(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fjQ(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.iW,"Next colour",new B.e9d(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fjQ("Finished! "+q,u,A.b2,C.a([new B.fi(A.mw,"Play again",new B.e9e(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.e9c.prototype={
$0(){var w=this.a
return w.m(new B.e98(w))},
$S:0}
B.e98.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awg()},
$S:0}
B.e9d.prototype={
$0(){var w=this.a
return w.m(w.gc65())},
$S:0}
B.e9e.prototype={
$0(){var w=this.a
return w.m(new B.e97(w))},
$S:0}
B.e97.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awg()},
$S:0}
B.e9g.prototype={
$1(d){var w=this.a
return w.m(new B.e9b(w,d))},
$S:6}
B.e9b.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e9h.prototype={
$1(d){var w=this.a
return w.m(new B.e9a(w,d))},
$S:6}
B.e9a.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e9i.prototype={
$1(d){var w=this.a
return w.m(new B.e99(w,d))},
$S:6}
B.e99.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e9j.prototype={
$0(){var w=this.a
return w.m(w.gc66())},
$S:0}
B.fg3.prototype={
$0(){return D.e_x},
$S:z+70}
B.fg4.prototype={
$0(){return D.dxK},
$S:z+71}
B.fg5.prototype={
$0(){return D.duh},
$S:z+72}
B.fg6.prototype={
$0(){return D.dx9},
$S:z+73}
B.fg7.prototype={
$0(){return D.dC6},
$S:z+74}
B.fg8.prototype={
$0(){return D.dWg},
$S:z+75}
B.fg9.prototype={
$0(){return D.dYs},
$S:z+76}
B.fga.prototype={
$0(){return D.dBq},
$S:z+77}
B.ceP.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.ceQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hrh(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dl,16)],t)
n=A.c.j(0.85)
j.push(C.aD(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Tn,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lA,m,m,C.v(C.a([new C.x(r.a,m,D.fa5,m,m,m,m,m,m,m,m,m),A.cV,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bq(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bD,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ceO(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bW(A.bz,j,A.bq,14,14)},
$S:167}
B.ceO.prototype={
$0(){return C.a5(this.a,!1).cl(C.e8(new B.ceN(this.b),!1,null,x.H))},
$S:0}
B.ceN.prototype={
$1(d){return this.a.f.$0()},
$S:41}
B.eIA.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3o(w.f)]},
$S:0}
B.eIw.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cH.aj()*7},
$S:0}
B.eIv.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c6)
w.w=""},
$S:0}
B.eIy.prototype={
$0(){var w=this.a
return w.m(new B.eIx(w,this.b))},
$S:0}
B.eIx.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eIz.prototype={
$1(d){return this.a.aYH(0)},
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
$0(){return this.a.aYJ(this.b)},
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
return w.aYJ(w.d)},
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
$S:42}
B.dQY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHw(u,v,t))},
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
return w.e.push(new B.aHw(u,v,t))},
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
return w.m(A.d.grA(w.e))},
$S:0}
B.dR7.prototype={
$0(){var w=this.a
return w.m(new B.dQR(w))},
$S:0}
B.dQR.prototype={
$0(){var w=this.a
w.x=D.avy[A.o.E(A.d.cK(D.avy,w.x)+1,4)]},
$S:0}
B.eeI.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.eeJ.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.By("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.eeH(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.By("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.eeH.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.eeK.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.eeG(w))},
$S:11}
B.eeG.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.eeO.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aD(w,C.mC(new B.eeM(v,e),w,A.bc,A.pK,w,w,new C.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eeN(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:77}
B.eeN.prototype={
$0(){return this.a.c72(this.b)},
$S:0}
B.eeM.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bWK
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b3,A.q,1)
if(o){r=C.dp()
r.fB(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f7t,p,p,p),p,r,!0)
u=r}else u=D.fs1
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:131}
B.eeP.prototype={
$0(){var w=this.a
return w.m(new B.eeL(w,this.b))},
$S:0}
B.eeL.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ary()},
$S:0}
B.eeQ.prototype={
$0(){var w=this.a
return w.m(w.gbIq())},
$S:0}
B.epA.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.epB.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.epy.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.epz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.epx(w))},
$S:11}
B.epx.prototype={
$0(){return this.a.f=-1},
$S:0}
B.epC.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.epD.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.epE.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYI()},
$S:11}
B.epF.prototype={
$0(){return this.a.c78(this.b)},
$S:0}
B.eDS.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.eE0.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kS,C.B(C.a([v,A.ab,new C.dq(1,A.cn,C.f5(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ei),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1868}
B.eDX.prototype={
$1(d){return this.a.m(new B.eDW())},
$S:2}
B.eDW.prototype={
$0(){},
$S:0}
B.eDY.prototype={
$0(){var w=this.a
return w.m(new B.eDV(w,this.b))},
$S:0}
B.eDV.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eDZ.prototype={
$1(d){var w=this.a
return w.m(new B.eDU(w,d))},
$S:6}
B.eDU.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eE_.prototype={
$0(){var w=this.a
return w.m(new B.eDT(w))},
$S:0}
B.eDT.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.edn.prototype={
$0(){},
$S:0}
B.edo.prototype={
$0(){},
$S:0}
B.edg.prototype={
$0(){var w=this.a
return w.m(new B.edf(w))},
$S:0}
B.edf.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7R("hat",0.6)},
$S:0}
B.edh.prototype={
$0(){var w=this.a
return w.m(new B.ede(w))},
$S:0}
B.ede.prototype={
$0(){this.a.y=1.1
B.lg("bell",36,200,0.4)},
$S:0}
B.edi.prototype={
$0(){var w=this.a
return w.m(new B.edd(w))},
$S:0}
B.edd.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.lg("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.edj.prototype={
$0(){var w=this.a
return w.m(new B.edc(w,this.b))},
$S:0}
B.edc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.edk.prototype={
$1(d){var w=this.a
return w.m(new B.edb(w,d))},
$S:6}
B.edb.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.edl.prototype={
$1(d){var w=this.a
return w.m(new B.eda(w,d))},
$S:6}
B.eda.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.edm.prototype={
$1(d){var w=this.a
return w.m(new B.ed9(w,d))},
$S:6}
B.ed9.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crJ.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.crK.prototype={
$0(){var w=this.a
return B.hnF(this.b,w.c,w.e,w.d)},
$S:0}
B.fOO.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f_X,v,v,v)
return C.ek(C.a([C.bK(!1,D.fho,v,v,!0,v,v,new B.fON(d),v,v)],x.p),v,v,F.n3,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:20}
B.fON.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.crF.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crE.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crL.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crG.prototype={
$0(){var w=this.a
A.d.W(w.fq$,this.b.bg())
if(w.c!=null)this.c.$0()},
$S:0}
B.crI.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l0$.a)/1e6,0,0.04)
w.l0$=d
w.fS$=A.o.an(v,1000)
w.lx(u)
if(w.c!=null)w.m(new B.crH())},
$S:8}
B.crH.prototype={
$0(){},
$S:0}
B.ceL.prototype={
$0(){var w=this
return B.lg(w.a,w.b,w.c,w.d)},
$S:1}
B.dWq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWp(w,d))},
$S:z+79}
B.dWp.prototype={
$0(){return this.a.crK(this.b)},
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
$0(){return this.a.id=D.a2G},
$S:0}
B.dVS.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a0<1>")
v=C.pc(new C.a0(w,new B.dVQ(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVQ.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVP.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ek(C.a([C.bK(!1,A.pe,w,w,!0,w,w,new B.dVO(d),w,w)],x.p),w,w,F.n3,v,w,w,w,w,D.fs5,w)},
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
s=p.gVJ()
r=p.z
o=C.a([C.aD(A.c5,C.b3(q,q,q,new B.beJ(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dW_(p),new B.dW0(p),new B.dW1(p),q,q,q,q,q,q,q,new B.dW2(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Aa.abo)
w=this.b
if(w!=null)o.push(C.ao(8,p.c7K(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b0,A.r,o,q),p.d)},
$S:186}
B.dW0.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:243}
B.dW1.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVJ()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:223}
B.dW_.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVJ()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dW2.prototype={
$1(d){var w=this.a,v=w.c7N(d.b)
if(v!=null)w.m(new B.dVU(w,v))
else w.m(new B.dVV(w))},
$S:51}
B.dVU.prototype={
$0(){return this.a.awK(this.b)},
$S:0}
B.dVV.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWd.prototype={
$0(){var w=this.a
w.e.bO(0,A.c6)
w.m(new B.dVZ(w,this.b))},
$S:0}
B.dVZ.prototype={
$0(){var w=this.a
w.id=D.a2G
w.awK(this.b)},
$S:0}
B.dWh.prototype={
$0(){var w=this.a
return w.m(new B.dWa(w))},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
w.fx=null
w.asI(15,w.y,1)},
$S:0}
B.dWi.prototype={
$0(){var w=this.a
return w.m(new B.dW9(w,this.b))},
$S:0}
B.dW9.prototype={
$0(){var w=this.b.b
return this.a.asI(w.a,w.b,w.c)},
$S:0}
B.dWj.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dW8(w,v))},
$S:0}
B.dW8.prototype={
$0(){var w=this.b.a
return this.a.awK(w[A.cH.aB(w.length)])},
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
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP1,w,w,w),A.uE,C.d(e,w,2,A.a2,w,w,w,A.TG,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.dVM.prototype={
$0(){var w=this.a
return w.m(new B.dVL(w))},
$S:0}
B.dVL.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcp.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cYp,w,w),this.a),A.a4,A.ca,w,A.e0,A.c8)
v.ey()
return v},
$S:326}
B.dcq.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1869}
B.ffX.prototype={
$0(){return D.dzH},
$S:z+81}
B.ffY.prototype={
$0(){return D.dYa},
$S:z+82}
B.ffZ.prototype={
$0(){return D.dzJ},
$S:z+83}
B.fg_.prototype={
$0(){return D.du3},
$S:z+84}
B.fg0.prototype={
$0(){return D.dzF},
$S:z+85}
B.fg1.prototype={
$0(){return D.dWh},
$S:z+86}
B.fg2.prototype={
$0(){return D.dWf},
$S:z+87}
B.eEL.prototype={
$0(){return C.a5(this.a,!1).lv()},
$S:0}
B.eEM.prototype={
$0(){var w=this.a
return w.m(new B.eEK(w))},
$S:0}
B.eEK.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRz()+1,16)},
$S:0}
B.eEN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hrg(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bht],u)
k.push(C.aD(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.x(s.a,n,D.f4q,n,A.L,n,n,n,n,2,n,n),A.cV,new C.x(s.b,n,D.f9u,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bq(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eEJ(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bW(A.fQ,k,A.bq,10,10)},
$S:167}
B.eEJ.prototype={
$0(){return C.a5(this.a,!1).cl(C.e8(new B.eEI(this.b),!1,null,x.H))},
$S:0}
B.eEI.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.ewO.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ewZ.prototype={
$0(){return B.qO(this.b,this.a.d,"solar-system")},
$S:0}
B.ex_.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aD(A.c5,C.b3(v,v,v,new B.brc(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ewW(u),new B.ewX(u),v,v,v,v,v,v,v,new B.ewY(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c7P(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b0,A.r,t,v),u.d)},
$S:186}
B.ewW.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:243}
B.ewX.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:223}
B.ewY.prototype={
$1(d){var w=this.a,v=w.c7S(d.b)
if(v!=null)w.aZ3(v)},
$S:51}
B.ex0.prototype={
$0(){var w=this.a
return w.m(new B.ewV(w))},
$S:0}
B.ewV.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ex1.prototype={
$0(){return this.a.aZ3(this.b)},
$S:0}
B.ex2.prototype={
$1(d){var w=this.a
return w.m(new B.ewU(w,d))},
$S:6}
B.ewU.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ex3.prototype={
$1(d){var w=this.a
return w.m(new B.ewT(w,d))},
$S:6}
B.ewT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ex4.prototype={
$0(){var w=this.a
return w.m(new B.ewS(w))},
$S:0}
B.ewS.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ex5.prototype={
$0(){var w=this.a
return w.m(new B.ewR(w))},
$S:0}
B.ewR.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ex6.prototype={
$0(){var w=this.a
return w.m(new B.ewQ(w))},
$S:0}
B.ewQ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ex7.prototype={
$0(){var w=this.a
return w.m(new B.ewP(w))},
$S:0}
B.ewP.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ewN.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:304}
B.ewM.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP1,w,w,w),A.uE,C.d(e,w,2,A.a2,w,w,w,A.TG,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.ewL.prototype={
$0(){var w=this.a
return w.m(new B.ewK(w))},
$S:0}
B.ewK.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eZ7.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PY,w,w),this.a),A.a4,A.ca,w,A.e0,A.c8)
v.ey()
return v},
$S:326}
B.eZ8.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eZ9.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWu.prototype={
$0(){},
$S:0}
B.dWX.prototype={
$1(d){return d!=null},
$S:435}
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
return w.m(w.gcuZ())},
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
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bg_,g,g,C.m(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yJ[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yJ[q].b)+" m/s\xb2",g,D.f8R,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dq,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.N6,C.b0(D.yJ[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yJ[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yJ[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yJ[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rO,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.f18,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWs()))a1.push(D.b4A)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dWs.prototype={
$1(d){return d==null},
$S:435}
B.dWv.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ic,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.GC(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f7e,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dWr.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9V(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
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
r=r.CW?"  Height now: "+B.GC(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b0,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQF,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.epI.prototype={
$0(){return B.qO(this.b,this.a.d,"size-compare")},
$S:0}
B.epJ.prototype={
$0(){var w=this.a
return w.m(new B.epH(w,this.b))},
$S:0}
B.epH.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.epK.prototype={
$0(){var w=this.a
return w.m(new B.epG(w,this.b))},
$S:0}
B.epG.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eXh.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hw(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pk,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1U,null).av(0,C.bU(d,e)))
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
o=C.aD(A.c5,C.b3(q,q,q,new B.b9j(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDO(p),q,q,q,q,q,q,q,q,q,new B.dDP(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fst(t)+" Suns"
t=p.ae9("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.ae9("EDGE WIDTH",(s<100?A.k.aa(s,1):B.GC(s))+" km"),p.ae9("TIME",A.k.aa(this.b*100,0)+"%"),p.ae9("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.edv)
return new C.ev(new C.an(A.W,q,A.b0,A.r,r,q),p.d)},
$S:186}
B.dDP.prototype={
$1(d){return this.a.aZ4(d.b)},
$S:22}
B.dDO.prototype={
$1(d){if(A.cH.aj()<0.12)this.a.aZ4(d.b)},
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
v.ZH()},
$S:0}
B.dUU.prototype={
$0(){var w=this.a
return w.m(new B.dUQ(w))},
$S:0}
B.dUQ.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZH()}w.cuR()},
$S:0}
B.dUV.prototype={
$1(d){var w=this.a
return w.m(new B.dUP(w,d))},
$S:6}
B.dUP.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZH()},
$S:0}
B.dUW.prototype={
$1(d){var w=this.a
return w.m(new B.dUO(w,d))},
$S:6}
B.dUO.prototype={
$0(){var w=this.a
w.r=this.b
w.ZH()},
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
B.d9x.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1871}
B.eoX.prototype={
$0(){return B.qO(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eoY.prototype={
$0(){var w=this.a
return w.m(new B.eoW(w))},
$S:0}
B.eoW.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eoZ.prototype={
$0(){var w=this.a
return w.m(new B.eoV(w))},
$S:0}
B.eoV.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.ep_.prototype={
$0(){var w=this.a
return w.m(new B.eoU(w))},
$S:0}
B.eoU.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ep0.prototype={
$0(){var w=this.a
return w.m(new B.eoT(w))},
$S:0}
B.eoT.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ep1.prototype={
$1(d){var w=this.a
return w.m(new B.eoS(w,d))},
$S:6}
B.eoS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ep2.prototype={
$1(d){var w=this.a
return w.m(new B.eoR(w,d))},
$S:6}
B.eoR.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ep3.prototype={
$1(d){var w=this.a
return w.m(new B.eoQ(w,d))},
$S:6}
B.eoQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ep4.prototype={
$1(d){var w=this.a
return w.m(new B.eoP(w,d))},
$S:6}
B.eoP.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLx.prototype
w.buU=w.q
w=B.aKz.prototype
w.btU=w.q
w=B.aKA.prototype
w.btV=w.q
w=B.aKF.prototype
w.bu_=w.q
w=B.aMo.prototype
w.bvS=w.q
w=B.aLv.prototype
w.buS=w.q
w=B.aLE.prototype
w.bv0=w.q
w=B.aLK.prototype
w.bv6=w.q
w=B.aKD.prototype
w.btY=w.q
w=B.aLs.prototype
w.buP=w.q
w=B.aLH.prototype
w.bv3=w.q
w=B.aLq.prototype
w.buN=w.q
w=B.aLr.prototype
w.buO=w.q
w=B.aKR.prototype
w.buc=w.q
w=B.aKv.prototype
w.btQ=w.q
w=B.aKZ.prototype
w.buk=w.q
w=B.ax1.prototype
w.br1=w.q
w=B.ax2.prototype
w.br2=w.q
w=B.aJ1.prototype
w.bsi=w.q
w=B.aKO.prototype
w.bu8=w.q
w=B.aLf.prototype
w.buC=w.q
w=B.aLg.prototype
w.buD=w.q
w=B.aKB.prototype
w.btW=w.q
w=B.aKU.prototype
w.buf=w.q
w=B.aLo.prototype
w.buL=w.q
w=B.aLS.prototype
w.bve=w.q
w=B.aL_.prototype
w.bum=w.q
w=B.aL0.prototype
w.bun=w.q
w=B.aL1.prototype
w.buo=w.q
w=B.aLA.prototype
w.buX=w.q
w=B.aLD.prototype
w.bv_=w.q
w=B.aKy.prototype
w.btT=w.q
w=B.aKX.prototype
w.bui=w.q
w=B.aLz.prototype
w.buW=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDG.prototype,"gavE","c2W",0)
var r
v(r=B.aC5.prototype,"gcbg","cbh",35)
w(r,"gc3r","aXu",0)
w(B.aC8.prototype,"gc57","c58",0)
u(B.aCp.prototype,"gc5d","c5e",52)
w(r=B.aGG.prototype,"gcux","cuy",0)
w(r,"gchY","afz",0)
w(r,"gcfF","cfG",0)
w(r,"gc5c","ad9",3)
w(r=B.aDF.prototype,"gbFy","a8I",3)
w(r,"gceX","b_J",0)
w(r,"gciG","afH",3)
t(r,"gc5g","ada",3)
w(B.aDV.prototype,"gbWN","bWO",0)
w(r=B.aDx.prototype,"gcur","cus",0)
w(r,"gbFT","bFU",0)
w(r=B.aC7.prototype,"gb3Y","azf",0)
v(r,"gc5m","Z4",54)
w(r,"gc5l","adc",3)
v(r=B.aDw.prototype,"gckF","axY",58)
v(r,"gcr_","aza",15)
w(r,"gbJT","aQ5",0)
v(r=B.aDu.prototype,"gcBA","aiN",15)
t(r,"gc5G","awb",0)
w(r,"gcn0","cn1",0)
v(r=B.aCB.prototype,"gc5H","c5I",90)
w(r,"gc5J","c5K",0)
t(r=B.a41.prototype,"grA","a9",0)
v(r,"gcRp","amz",1)
v(r,"gcNV","Lq",1)
w(r,"gcTA","bh_",0)
s(B.aig.prototype,"gc5O",0,5,null,["$5"],["qk"],64,0,0)
w(r=B.aCC.prototype,"gc5P","c5Q",0)
w(r,"gclt","ag3",3)
w(r,"gcbw","aem",3)
w(r,"gcsA","ah9",3)
w(r=B.aDg.prototype,"gc65","awg",0)
w(r,"gc66","aYl",0)
w(r=B.aE7.prototype,"gc73","c74",0)
t(r,"gc71","aYH",0)
w(B.aDq.prototype,"gbIq","ary",0)
t(B.aDM.prototype,"gc75","c76",0)
v(r=B.aCN.prototype,"gc7L","c7M",78)
w(r,"gbNl","bNm",0)
w(r=B.aCO.prototype,"gcuZ","cv_",0)
w(r,"gc7Q","c7R",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajs,B.FS,B.uK,B.aRp,B.a2G,B.b9m,B.c_S,B.xX,B.C7,B.nk,B.ba4,B.Ao,B.brU,B.q0,B.qG,B.Cb,B.YS,B.aej,B.a07,B.Cl,B.abc,B.abt,B.adp,B.FE,B.bkN,B.PE,B.a_p,B.abj,B.abM,B.FA,B.acB,B.ad6,B.tb,B.b8X,B.aRf,B.eb,B.to,B.a9S,B.aaZ,B.a41,B.my,B.ba5,B.fK,B.m5,B.aVR,B.bte,B.aHw,B.mB,B.aaE,B.aaF,B.uY,B.OT,B.xV,B.OS,B.bt9,B.Pn,B.aeo])
u(C.hV,[B.fuD,B.fl8,B.frB,B.frC,B.fuA,B.fuB,B.e64,B.e6n,B.ems,B.em_,B.em0,B.em1,B.em2,B.em3,B.em4,B.em5,B.em6,B.elY,B.elZ,B.elX,B.emn,B.emo,B.emp,B.dE6,B.dE8,B.dEb,B.dEm,B.c_T,B.c_U,B.ffa,B.ffb,B.ffc,B.ffj,B.ffk,B.ffl,B.dGE,B.dGl,B.dGF,B.dGg,B.dGb,B.dGd,B.dGj,B.dGw,B.dGu,B.dGv,B.dGt,B.dGq,B.dGs,B.eWM,B.eWt,B.eWA,B.eWJ,B.eWn,B.dgm,B.dgn,B.dgj,B.dgk,B.dgl,B.dgo,B.dgp,B.dgq,B.dgr,B.dgs,B.dgt,B.dgu,B.dgv,B.dgw,B.elo,B.elp,B.elq,B.elr,B.elm,B.eln,B.elT,B.elv,B.elx,B.elh,B.elP,B.elN,B.elO,B.elM,B.elL,B.elj,B.exy,B.exw,B.exk,B.exo,B.exj,B.exp,B.exq,B.exu,B.eE9,B.eEf,B.ei_,B.ei0,B.ehM,B.ehN,B.ehL,B.ehQ,B.ehS,B.ehT,B.eDz,B.eDA,B.eDy,B.eDm,B.eDn,B.eDl,B.eDe,B.eDf,B.eDt,B.eDu,B.eDv,B.eDw,B.eDx,B.dFN,B.dFO,B.dFP,B.dFG,B.dFJ,B.cKS,B.edt,B.edS,B.edx,B.edF,B.edG,B.edE,B.edN,B.eht,B.ehy,B.egS,B.egA,B.egM,B.egK,B.egI,B.egJ,B.egH,B.dOx,B.dOl,B.dOn,B.dOv,B.dOq,B.dRm,B.dRe,B.dRf,B.dRg,B.d3A,B.d3C,B.d3B,B.dCa,B.dCb,B.dC3,B.dC1,B.cDp,B.dVp,B.dVq,B.dVl,B.dVm,B.dbA,B.dbB,B.dG9,B.dFS,B.dG0,B.dG1,B.dG6,B.dG7,B.bLx,B.bLI,B.bLD,B.bLJ,B.bLL,B.bLy,B.bLw,B.bLQ,B.bLE,B.bLH,B.bLG,B.bLF,B.bGF,B.fGj,B.fGm,B.fGk,B.bGm,B.bGh,B.bGg,B.bGE,B.bGw,B.bGx,B.bGv,B.bGy,B.bG6,B.bG8,B.bG4,B.bG5,B.bFX,B.bFY,B.ffm,B.ffn,B.ffo,B.ff9,B.ffp,B.ff8,B.ffq,B.ffd,B.ff7,B.ffe,B.ff6,B.fff,B.ff5,B.ffg,B.ff3,B.ff4,B.ffh,B.ff1,B.ff2,B.ffi,B.ff0,B.dRD,B.dRE,B.dRt,B.dRp,B.dRC,B.dRH,B.cAW,B.fKZ,B.fL_,B.e92,B.e8V,B.dgF,B.dgI,B.e9l,B.e96,B.e9g,B.e9h,B.e9i,B.ceN,B.eIz,B.dR_,B.dR0,B.dR1,B.dR3,B.eeM,B.eDS,B.eE0,B.eDX,B.eDZ,B.edk,B.edl,B.edm,B.fOO,B.crI,B.dWq,B.dVQ,B.dVP,B.dW0,B.dW1,B.dW_,B.dW2,B.dWk,B.dWl,B.dWm,B.eEI,B.ewW,B.ewX,B.ewY,B.ex2,B.ex3,B.ewN,B.eZ8,B.eZ9,B.dWX,B.dWQ,B.dWS,B.dWT,B.dWU,B.dWV,B.dWs,B.eXh,B.dE1,B.dDQ,B.dDP,B.dDO,B.dDU,B.dV1,B.dUV,B.dUW,B.dUX,B.dUY,B.d9x,B.ep1,B.ep2,B.ep3,B.ep4])
u(C.kk,[B.fuC,B.e69,B.e67,B.em8,B.eml,B.dGc,B.dGz,B.dMv,B.eWP,B.eWQ,B.eWs,B.eWF,B.eWG,B.eWB,B.eWH,B.eWm,B.elk,B.ell,B.elS,B.elK,B.elz,B.eE8,B.ehP,B.eDp,B.dFF,B.dFK,B.edJ,B.ehx,B.fuU,B.egE,B.egB,B.egO,B.dos,B.bFt,B.fpA,B.dBY,B.dC5,B.bLK,B.bLM,B.bLO,B.bLz,B.bLB,B.bGG,B.ckb,B.fGl,B.bGf,B.bGC,B.bGB,B.dRB,B.cAX,B.dNp,B.dNn,B.dNh,B.e8X,B.dgG,B.dgH,B.e9f,B.ceQ,B.dEA,B.dEv,B.eeO,B.dWc,B.dVN,B.dcq,B.eEN,B.ex_,B.ewM,B.dWt,B.dWv,B.dWr,B.dDS])
u(C.ag,[B.V4,B.Vw,B.TX,B.U1,B.N5,B.aGF,B.Vv,B.VK,B.VW,B.Vs,B.VR,B.U_,B.Vm,B.Vr,B.Vp,B.Un,B.UD,B.TS,B.UR,B.U0,B.aie,B.UE,B.awJ,B.Ul,B.V9,B.Vb,B.W1,B.UL,B.TY,B.UC,B.Vn,B.VA,B.VV,B.Vl,B.US,B.VY,B.VJ,B.UT,B.VB,B.TW,B.UP,B.Vx])
u(C.ah,[B.bjg,B.aLx,B.aKz,B.aKF,B.aCp,B.aMo,B.aLv,B.aLE,B.aLK,B.aLs,B.aLH,B.aKD,B.aLq,B.aLr,B.aDu,B.biL,B.aKR,B.aKv,B.aKZ,B.biC,B.ax1,B.bwk,B.aJ1,B.aKO,B.aLf,B.aLg,B.aLS,B.aKU,B.aKB,B.biM,B.aDq,B.aDM,B.bk_,B.aLo,B.aL_,B.bk3,B.aLD,B.aL1,B.aLA,B.aKy,B.aKX,B.aLz])
u(C.j9,[B.e62,B.e63,B.e6f,B.e6g,B.e6b,B.e6a,B.e6c,B.e68,B.e6d,B.e66,B.e6e,B.e65,B.e6j,B.e6i,B.e6k,B.e6h,B.e6l,B.e6m,B.e6o,B.emr,B.emt,B.emu,B.ema,B.em9,B.em7,B.emg,B.emh,B.emd,B.emi,B.emc,B.emj,B.emk,B.emb,B.emm,B.emf,B.emq,B.eme,B.dEt,B.dEs,B.dE5,B.dEu,B.dE7,B.dE9,B.dEa,B.dEc,B.dE2,B.dE3,B.dE4,B.dEj,B.dEk,B.dEl,B.dEi,B.dEn,B.dEh,B.dEo,B.dEg,B.dEp,B.dEf,B.dEq,B.dEe,B.dEr,B.dEd,B.dGi,B.dGh,B.dGm,B.dGe,B.dGf,B.dGn,B.dGo,B.dGp,B.dGk,B.dGa,B.dGy,B.dGx,B.dGA,B.dGB,B.dGC,B.dGr,B.dGD,B.cLk,B.dMt,B.dMs,B.dMu,B.ffB,B.ffC,B.ffD,B.ffO,B.ffQ,B.ffR,B.ffS,B.ffT,B.ffU,B.ffV,B.ffW,B.ffE,B.ffF,B.ffG,B.ffH,B.ffI,B.ffJ,B.ffK,B.ffL,B.ffM,B.ffN,B.ffP,B.eWO,B.eWN,B.eWv,B.eWu,B.eWq,B.eWp,B.eWr,B.eWo,B.eWD,B.eWC,B.eWE,B.eWw,B.eWI,B.eWz,B.eWK,B.eWy,B.eWL,B.eWx,B.elt,B.eli,B.els,B.ele,B.elu,B.elw,B.elf,B.elg,B.elR,B.elQ,B.elH,B.elI,B.elJ,B.elD,B.elE,B.elC,B.elF,B.elB,B.elG,B.elA,B.ely,B.dgi,B.exx,B.ex9,B.ex8,B.exi,B.exr,B.exh,B.exs,B.exg,B.ext,B.exf,B.exe,B.exv,B.exd,B.exl,B.exc,B.exm,B.exb,B.exn,B.exa,B.eE7,B.eE6,B.eEa,B.eE5,B.eEb,B.eE4,B.eEc,B.eE3,B.eEd,B.eE2,B.eEe,B.eE1,B.ehO,B.ehK,B.ehJ,B.ehI,B.ehU,B.ehH,B.ehV,B.ehG,B.ehW,B.ehF,B.ehX,B.ehY,B.ehZ,B.ehE,B.ehR,B.eDo,B.eDd,B.eDq,B.eDk,B.eDr,B.eDj,B.eDs,B.eDi,B.eDh,B.eDg,B.eDc,B.eDb,B.eDa,B.dFM,B.dFD,B.dFE,B.dFH,B.dFI,B.dFL,B.edH,B.edy,B.edI,B.edK,B.edD,B.edL,B.edC,B.edM,B.edB,B.edA,B.edO,B.edz,B.edP,B.edw,B.edQ,B.edv,B.edR,B.edu,B.ehn,B.eho,B.ehv,B.ehu,B.ehw,B.ehs,B.ehz,B.ehr,B.ehA,B.ehq,B.ehB,B.ehC,B.ehp,B.ehD,B.egR,B.egy,B.egz,B.egD,B.egC,B.egN,B.egL,B.egF,B.egP,B.egG,B.egQ,B.dOw,B.dOm,B.dOk,B.dOr,B.dOp,B.dOs,B.dOo,B.dOt,B.dOu,B.dRl,B.dR9,B.dR8,B.dRa,B.dRd,B.dRc,B.dRb,B.dRh,B.dRi,B.dRj,B.dRk,B.dC9,B.dC8,B.dBZ,B.dC4,B.dC2,B.dC6,B.dC0,B.dC7,B.dC_,B.dVo,B.dVn,B.dVf,B.dVj,B.dVi,B.dVk,B.dVh,B.dVg,B.dG8,B.dG_,B.dFZ,B.dG2,B.dFY,B.dG3,B.dFX,B.dG4,B.dFW,B.dG5,B.dFV,B.dFU,B.dFT,B.bLN,B.bLP,B.bLA,B.bLC,B.bGj,B.bGk,B.bGi,B.bGl,B.bGn,B.bG9,B.bGa,B.bGb,B.bGc,B.bGd,B.bGe,B.bGD,B.bFN,B.bGt,B.bGu,B.bGr,B.bGs,B.bGp,B.bGq,B.bGz,B.bGo,B.bGA,B.bFO,B.bG7,B.bFU,B.bFV,B.bFT,B.bFW,B.bFS,B.bFZ,B.bG_,B.bG0,B.bG1,B.bFR,B.bG2,B.bFQ,B.bG3,B.bFP,B.dRu,B.dRF,B.dRG,B.dRs,B.dRr,B.dRq,B.dRz,B.dRx,B.dRy,B.dRA,B.dRv,B.dRw,B.dRI,B.dRJ,B.dRK,B.dRL,B.dRM,B.dNq,B.dNo,B.dNm,B.dNl,B.dNk,B.dNj,B.dNi,B.dNe,B.dNd,B.dNg,B.dNf,B.e91,B.e93,B.e8T,B.e8U,B.e8W,B.e8Y,B.e8Z,B.e9_,B.e90,B.e9k,B.e9m,B.e9c,B.e98,B.e9d,B.e9e,B.e97,B.e9b,B.e9a,B.e99,B.e9j,B.fg3,B.fg4,B.fg5,B.fg6,B.fg7,B.fg8,B.fg9,B.fga,B.ceP,B.ceO,B.eIA,B.eIw,B.eIv,B.eIy,B.eIx,B.dTI,B.dTJ,B.dTD,B.dTF,B.dTG,B.dTE,B.dTH,B.dEB,B.dEy,B.dEx,B.dEz,B.dEw,B.dQZ,B.dQY,B.dQX,B.dQW,B.dR2,B.dQV,B.dQU,B.dR4,B.dQT,B.dR5,B.dQS,B.dR6,B.dR7,B.dQR,B.eeI,B.eeJ,B.eeH,B.eeK,B.eeG,B.eeN,B.eeP,B.eeL,B.eeQ,B.epA,B.epB,B.epy,B.epz,B.epx,B.epC,B.epD,B.epE,B.epF,B.eDW,B.eDY,B.eDV,B.eDU,B.eE_,B.eDT,B.edn,B.edo,B.edg,B.edf,B.edh,B.ede,B.edi,B.edd,B.edj,B.edc,B.edb,B.eda,B.ed9,B.crJ,B.crK,B.fON,B.crF,B.crE,B.crL,B.crG,B.crH,B.ceL,B.dWp,B.dVT,B.dVR,B.dVS,B.dVO,B.dWb,B.dVU,B.dVV,B.dWd,B.dVZ,B.dWh,B.dWa,B.dWi,B.dW9,B.dWj,B.dW8,B.dW7,B.dW6,B.dW5,B.dWn,B.dW4,B.dWo,B.dW3,B.dWe,B.dVY,B.dWf,B.dVX,B.dWg,B.dVW,B.dVM,B.dVL,B.dcp,B.ffX,B.ffY,B.ffZ,B.fg_,B.fg0,B.fg1,B.fg2,B.eEL,B.eEM,B.eEK,B.eEJ,B.ewO,B.ewZ,B.ex0,B.ewV,B.ex1,B.ewU,B.ewT,B.ex4,B.ewS,B.ex5,B.ewR,B.ex6,B.ewQ,B.ex7,B.ewP,B.ewL,B.ewK,B.eZ7,B.dWu,B.dWJ,B.dWA,B.dWK,B.dWz,B.dWL,B.dWI,B.dWP,B.dWH,B.dWG,B.dWR,B.dWF,B.dWE,B.dWD,B.dWC,B.dWW,B.dWB,B.dWM,B.dWy,B.dWN,B.dWx,B.dWO,B.dWw,B.epI,B.epJ,B.epH,B.epK,B.epG,B.dDR,B.dDN,B.dDV,B.dDM,B.dDW,B.dDL,B.dDX,B.dDK,B.dDY,B.dDJ,B.dDZ,B.dDI,B.dE_,B.dDH,B.dE0,B.dDG,B.dDT,B.dDF,B.dUS,B.dUT,B.dUR,B.dUU,B.dUQ,B.dUP,B.dUO,B.dUN,B.dUM,B.dUZ,B.dUL,B.dV_,B.dUK,B.dV0,B.dUJ,B.eoX,B.eoY,B.eoW,B.eoZ,B.eoV,B.ep_,B.eoU,B.ep0,B.eoT,B.eoS,B.eoR,B.eoQ,B.eoP])
t(B.bwz,B.aLx)
t(B.aDG,B.bwz)
u(C.mL,[B.bgf,B.ban,B.brj,B.b93,B.bpY,B.bpp,B.b9J,B.bpr,B.bto,B.bgd,B.bre,B.bkA,B.bs5,B.ba3,B.bh7,B.bkB,B.bhP,B.bd8,B.b98,B.beC,B.aig,B.b8g,B.bup,B.aec,B.bgi,B.bgx,B.buB,B.bpq,B.bkO,B.beJ,B.brc,B.b9V,B.bqL,B.b9j,B.bez,B.bq0])
t(B.aKA,B.aKz)
t(B.aC5,B.aKA)
t(B.bwi,B.aKF)
t(B.aC8,B.bwi)
u(C.m9,[B.K9,B.a_V,B.J5])
u(C.au,[B.bql,B.aet,B.adl,B.PN,B.bqP,B.a7S,B.bcu,B.b64,B.dA,B.eQ,B.av9,B.fi,B.F3])
t(B.aGG,B.aMo)
t(B.bgc,C.oK)
t(B.aDF,B.aLv)
t(B.bjR,B.aLE)
t(B.aDV,B.aLK)
t(B.bwy,B.aLs)
t(B.aDx,B.bwy)
t(B.bwG,B.aLH)
t(B.bjW,B.bwG)
t(B.bwh,B.aKD)
t(B.aC7,B.bwh)
t(B.bww,B.aLq)
t(B.bjv,B.bww)
t(B.bwx,B.aLr)
t(B.aDw,B.bwx)
t(B.aCB,B.aKR)
t(B.bip,B.aKv)
t(B.biX,B.aKZ)
t(B.ax2,B.ax1)
t(B.aif,B.ax2)
t(B.aCC,B.bwk)
t(B.b8h,B.aJ1)
t(B.biJ,B.aKO)
t(B.bwp,B.aLf)
t(B.bji,B.bwp)
t(B.bwq,B.aLg)
t(B.aDg,B.bwq)
t(B.bwH,B.aLS)
t(B.aE7,B.bwH)
t(B.bwl,B.aKU)
t(B.biS,B.bwl)
t(B.bwg,B.aKB)
t(B.biu,B.bwg)
t(B.bwv,B.aLo)
t(B.bjt,B.bwv)
t(B.aL0,B.aL_)
t(B.aCN,B.aL0)
t(B.bwD,B.aLD)
t(B.bjQ,B.bwD)
t(B.bwn,B.aL1)
t(B.aCO,B.bwn)
t(B.bwB,B.aLA)
t(B.bjN,B.bwB)
t(B.bwf,B.aKy)
t(B.bit,B.bwf)
t(B.bwm,B.aKX)
t(B.biV,B.bwm)
t(B.bwA,B.aLz)
t(B.bjM,B.bwA)
w(B.aLx,C.c9)
w(B.bwz,B.mB)
w(B.aKz,C.c9)
w(B.aKA,B.mB)
w(B.aKF,C.c9)
w(B.bwi,B.mB)
w(B.aMo,C.eR)
w(B.aLv,C.c9)
w(B.aLE,C.c9)
w(B.aLK,C.c9)
w(B.aKD,C.c9)
w(B.bwh,B.mB)
w(B.aLs,C.c9)
w(B.bwy,B.mB)
w(B.aLH,C.c9)
w(B.bwG,B.mB)
w(B.aLq,C.c9)
w(B.bww,B.mB)
w(B.aLr,C.c9)
w(B.bwx,B.mB)
w(B.aKR,C.c9)
w(B.aKv,C.c9)
w(B.aKZ,C.c9)
w(B.ax1,C.c9)
w(B.ax2,B.mB)
w(B.aJ1,C.c9)
v(B.bwk,C.ey)
w(B.aKO,C.c9)
w(B.aLf,C.c9)
w(B.bwp,B.mB)
w(B.aLg,C.c9)
w(B.bwq,B.mB)
w(B.aKB,C.c9)
w(B.bwg,B.mB)
w(B.aKU,C.c9)
w(B.bwl,B.mB)
w(B.aLo,C.c9)
w(B.bwv,B.mB)
w(B.aLS,C.c9)
w(B.bwH,B.mB)
w(B.aL_,C.c9)
w(B.aL0,B.mB)
w(B.aL1,C.c9)
w(B.bwn,B.mB)
w(B.aLA,C.c9)
w(B.bwB,B.mB)
w(B.aLD,C.c9)
w(B.bwD,B.mB)
w(B.aKy,C.c9)
w(B.bwf,B.mB)
w(B.aKX,C.c9)
w(B.bwm,B.mB)
w(B.aLz,C.c9)
w(B.bwA,B.mB)})()
C.jY(b.typeUniverse,JSON.parse('{"V4":{"ag":[],"r":[]},"bjg":{"ah":["V4"]},"Vw":{"ag":[],"r":[]},"aDG":{"ah":["Vw"]},"bgf":{"aB":[]},"TX":{"ag":[],"r":[]},"aC5":{"ah":["TX"]},"U1":{"ag":[],"r":[]},"aC8":{"ah":["U1"]},"ban":{"aB":[]},"aet":{"au":[],"r":[]},"adl":{"au":[],"r":[]},"aGF":{"ag":[],"r":[]},"N5":{"ag":[],"r":[]},"aCp":{"ah":["N5"]},"bql":{"au":[],"r":[]},"PN":{"au":[],"r":[]},"brj":{"aB":[]},"bqP":{"au":[],"r":[]},"b93":{"aB":[]},"aGG":{"ah":["aGF"]},"bpY":{"aB":[]},"bpp":{"aB":[]},"b9J":{"aB":[]},"bpr":{"aB":[]},"bto":{"aB":[]},"Vv":{"ag":[],"r":[]},"bgc":{"aB":[]},"aDF":{"ah":["Vv"]},"bgd":{"aB":[]},"VK":{"ag":[],"r":[]},"VW":{"ag":[],"r":[]},"bjR":{"ah":["VK"]},"bre":{"aB":[]},"aDV":{"ah":["VW"]},"Vs":{"ag":[],"r":[]},"VR":{"ag":[],"r":[]},"U_":{"ag":[],"r":[]},"aDx":{"ah":["Vs"]},"bkA":{"aB":[]},"bjW":{"ah":["VR"]},"bs5":{"aB":[]},"aC7":{"ah":["U_"]},"ba3":{"aB":[]},"Vm":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"bjv":{"ah":["Vm"]},"bh7":{"aB":[]},"aDw":{"ah":["Vr"]},"bkB":{"aB":[]},"Vp":{"ag":[],"r":[]},"Un":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"aDu":{"ah":["Vp"]},"bhP":{"aB":[]},"biL":{"ah":["Un"]},"aCB":{"ah":["UD"]},"bd8":{"aB":[]},"TS":{"ag":[],"r":[]},"UR":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"bip":{"ah":["TS"]},"b98":{"aB":[]},"biX":{"ah":["UR"]},"beC":{"aB":[]},"biC":{"ah":["U0"]},"aig":{"aB":[]},"aie":{"ag":[],"r":[]},"aif":{"ah":["aie"]},"UE":{"ag":[],"r":[]},"awJ":{"ag":[],"r":[]},"aCC":{"ah":["UE"],"ey":[]},"b8h":{"ah":["awJ"]},"b8g":{"aB":[]},"Ul":{"ag":[],"r":[]},"biJ":{"ah":["Ul"]},"bup":{"aB":[]},"aec":{"aB":[]},"V9":{"ag":[],"r":[]},"Vb":{"ag":[],"r":[]},"bji":{"ah":["V9"]},"bgi":{"aB":[]},"aDg":{"ah":["Vb"]},"bgx":{"aB":[]},"a7S":{"au":[],"r":[]},"W1":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"TY":{"ag":[],"r":[]},"UC":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"VA":{"ag":[],"r":[]},"VV":{"ag":[],"r":[]},"Vl":{"ag":[],"r":[]},"aE7":{"ah":["W1"]},"buB":{"aB":[]},"biS":{"ah":["UL"]},"bpq":{"aB":[]},"biu":{"ah":["TY"]},"biM":{"ah":["UC"]},"bkO":{"aB":[]},"aDq":{"ah":["Vn"]},"aDM":{"ah":["VA"]},"bk_":{"ah":["VV"]},"bjt":{"ah":["Vl"]},"bcu":{"au":[],"r":[]},"b64":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"av9":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"F3":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"aCN":{"ah":["US"]},"beJ":{"aB":[]},"VY":{"ag":[],"r":[]},"bk3":{"ah":["VY"]},"VJ":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"VB":{"ag":[],"r":[]},"bjQ":{"ah":["VJ"]},"brc":{"aB":[]},"aCO":{"ah":["UT"]},"b9V":{"aB":[]},"bjN":{"ah":["VB"]},"bqL":{"aB":[]},"TW":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"Vx":{"ag":[],"r":[]},"bit":{"ah":["TW"]},"b9j":{"aB":[]},"biV":{"ah":["UP"]},"bez":{"aB":[]},"bjM":{"ah":["Vx"]},"bq0":{"aB":[]}}'))
C.Ka(b.typeUniverse,JSON.parse('{"mB":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lV<w?>"),e8:w("d4"),G:w("w"),l:w("bk<n,n>"),J:w("bk<n,M>"),I:w("bk<n,H>"),R:w("eI<n>"),Z:w("a_"),M:w("O<da>"),f5:w("O<a2C>"),gh:w("O<aRf>"),h:w("O<a2G>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hp>"),aJ:w("O<az<aC>>"),w:w("O<a_>"),Q:w("O<ai<w>>"),B:w("O<ai<Hp>>"),gO:w("O<ai<ai<M>>>"),bj:w("O<ai<n>>"),b:w("O<ai<M>>"),fA:w("O<ai<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<to>"),ds:w("O<a8e>"),v:w("O<hp>"),U:w("O<+(u,M)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(M,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,M,M,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,M,M,a4<n,M>)>"),_:w("O<uK>"),q:w("O<cR>"),fQ:w("O<a9S>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wa>"),F:w("O<aaE>"),p:w("O<r>"),bL:w("O<aaZ>"),fH:w("O<lj>"),aq:w("O<b8X>"),a_:w("O<abc>"),cS:w("O<abj>"),cB:w("O<nk>"),ba:w("O<abt>"),d9:w("O<Pn>"),bi:w("O<abM>"),eW:w("O<Cb>"),fY:w("O<YS>"),aX:w("O<FA>"),ea:w("O<acB>"),gB:w("O<ad6>"),ed:w("O<PE>"),g4:w("O<bkN>"),aS:w("O<a_p>"),ac:w("O<adp>"),cd:w("O<Cl>"),fr:w("O<aej>"),e4:w("O<a07>"),r:w("O<aeo>"),au:w("O<aHw>"),f7:w("O<R>"),n:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<to?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<aif>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("L<eb,n>"),dv:w("L<n,n>"),fR:w("L<+(M,r),r>"),m:w("iB"),gA:w("z2"),gD:w("vK"),P:w("cr"),C:w("aC"),W:w("to"),dV:w("eb"),g7:w("BU"),N:w("n"),bO:w("as"),k:w("kh"),Y:w("bp<M>"),cL:w("aaF"),gj:w("cy<n>"),aC:w("cy<H?>"),dg:w("e9<qG>"),e3:w("b9m"),a2:w("C7"),f3:w("qG"),es:w("FE"),gV:w("mZ"),y:w("R"),i:w("M"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pU?"),T:w("n?"),cD:w("M?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWs=new C.da(0,0.85)
D.fxQ=new C.x("Tap once to start the chain",null,K.TA,null,null,null,null,null,null,null,null,null)
D.aW0=new C.bI(D.aWs,null,null,D.fxQ,null)
D.aWi=new C.da(0,0.1)
D.aXm=new B.aRp(0,0,0)
D.K2=new B.aRp(0,0.5,0)
D.aXU=new C.ay(A.b2,1,A.q,-1)
D.aZm=new C.aY(0,1/0,0,290)
D.aZt=new C.aY(16,1/0,16,1/0)
D.f_0=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAc=new C.x("\u26a1",null,D.f_0,null,null,null,null,null,null,null,null,null)
D.b46=new C.cp(A.A,null,null,D.fAc,null)
D.aPY=new C.G(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPY,null,A.L,null,null,null,null,null,null,null)
D.e7a=new C.D(A.nZ,D.fqc,null)
D.b4f=new C.cp(A.A,null,null,D.e7a,null)
D.ftU=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kG,null,A.L,null,null,null,null,null,null,null)
D.e7e=new C.D(A.nZ,D.ftU,null)
D.b4A=new C.cp(A.A,null,null,D.e7e,null)
D.f9P=new C.G(!0,A.jd,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyC=new C.x("Draw anywhere",null,D.f9P,null,null,null,null,null,null,null,null,null)
D.b4E=new C.cp(A.A,null,null,D.fyC,null)
D.fgt=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPY,null,A.L,null,null,null,null,null,null,null)
D.e7W=new C.D(A.Fk,D.fgt,null)
D.b4X=new C.cp(A.A,null,null,D.e7W,null)
D.abJ=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b7y=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b8k=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VU=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b8q=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b8v=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b8A=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.VW=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b9F=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b9K=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.ba3=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bbb=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ad2=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bbE=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.As=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bcr=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adt=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bd2=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bd9=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.adE=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Wy=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bdD=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adO=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.ae0=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WJ=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bfn=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bfq=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bfu=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bfD=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aet=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bg_=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EE=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bh6=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bhe=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bhi=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bht=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bhx=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bhE=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vc=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afh=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.biK=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bjt=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bjW=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bkl=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afI=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.boM=new C.ba(11e6)
D.bpN=new C.Q(0,0,8,6)
D.agF=new C.Q(0,0,9,0)
D.bqj=new C.Q(10,0,10,4)
D.bqo=new C.Q(10,10,10,6)
D.bqw=new C.Q(10,34,10,26)
D.bqE=new C.Q(10,6,10,2)
D.Yb=new C.Q(10,6,10,4)
D.bqG=new C.Q(10,8,0,10)
D.brg=new C.Q(12,8,8,8)
D.brl=new C.Q(14,0,14,22)
D.brn=new C.Q(14,0,14,30)
D.ah6=new C.Q(14,0,14,6)
D.ahd=new C.Q(14,10,8,12)
D.brU=new C.Q(14,8,14,6)
D.bsl=new C.Q(16,4,16,28)
D.bsv=new C.Q(16,8,16,12)
D.buz=new C.Q(26,12,26,58)
D.bvm=new C.Q(4,4,6,2)
D.bvo=new C.Q(4,4,8,2)
D.bvY=new C.Q(8,14,8,12)
D.bw4=new C.Q(8,40,8,30)
D.bw8=new C.Q(8,6,16,0)
D.bw9=new C.Q(8,6,8,8)
D.bwu=new C.Q(0,0,1.5,0)
D.aX8=new C.GP(26,"saturation")
D.bwM=new C.yJ(A.cU,D.aX8,null,A.abH)
D.ffz=new C.x("REACTION LAB",null,Y.aQz,null,null,null,null,A.a2,null,1,null,null)
D.bwS=new C.bC(1,A.bh,D.ffz,null)
D.f6J=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiH=new C.x("CORE PROTOCOL",null,D.f6J,null,null,null,null,null,null,null,null,null)
D.bx5=new C.bC(1,A.bh,D.fiH,null)
D.fjo=new C.x("\ud83d\udce2 NGMY Ads",null,A.qo,null,null,null,null,A.eD,null,1,null,null)
D.bxN=new C.bC(1,A.bh,D.fjo,null)
D.feh=new C.x("Wire selected",null,A.hs,null,null,null,null,null,null,null,null,null)
D.by0=new C.bC(1,A.bh,D.feh,null)
D.akm=new C.a_(62712,"MaterialIcons",!1)
D.bCT=new C.a_(62878,"MaterialIcons",!1)
D.a_t=new C.a_(62908,"MaterialIcons",!1)
D.bCW=new C.a_(62918,"MaterialIcons",!1)
D.bCX=new C.a_(62931,"MaterialIcons",!1)
D.bD_=new C.a_(62951,"MaterialIcons",!1)
D.bDg=new C.a_(63064,"MaterialIcons",!1)
D.bDi=new C.a_(63070,"MaterialIcons",!1)
D.y4=new C.a_(63128,"MaterialIcons",!1)
D.G5=new C.a_(63726,"MaterialIcons",!1)
D.bEC=new C.a_(983122,"MaterialIcons",!1)
D.bER=new C.a_(983247,"MaterialIcons",!1)
D.bF2=new C.a_(983415,"MaterialIcons",!1)
D.bF3=new C.a_(983417,"MaterialIcons",!1)
D.bF4=new C.a_(983442,"MaterialIcons",!1)
D.bF5=new C.a_(983443,"MaterialIcons",!1)
D.alG=new C.a_(983467,"MaterialIcons",!1)
D.bFb=new C.a_(983501,"MaterialIcons",!1)
D.bFm=new C.a_(983616,"MaterialIcons",!1)
D.bFn=new C.a_(983624,"MaterialIcons",!1)
D.bFA=new C.a_(983776,"MaterialIcons",!1)
D.bFR=new C.a_(984561,"MaterialIcons",!1)
D.bGr=new C.ae(A.ra,24,A.aM,null,null,null)
D.bHb=new C.ae(A.NB,null,A.ad,null,null,null)
D.bHJ=new C.ae(A.mv,21,A.ad,null,null,null)
D.bEB=new C.a_(983117,"MaterialIcons",!1)
D.bJ5=new C.ae(D.bEB,28,A.c,null,null,null)
D.bJl=new C.ae(A.jk,18,null,null,null,null)
D.bL6=new C.ae(A.e6,21,A.cb,null,null,null)
D.bLl=new C.ae(A.mw,null,A.ad,null,null,null)
D.bLv=new C.ae(A.a0m,21,A.ad,null,null,null)
D.bMk=new C.ae(A.eC,17,A.ad,null,null,null)
D.an4=new C.ae(A.eC,19,null,null,null,null)
D.mA=new C.ae(A.vG,21,A.ad,null,null,null)
D.bNN=new C.ae(A.N3,null,A.ad,null,null,null)
D.bOW=new C.ae(A.jk,21,A.ad,null,null,null)
D.bPP=new C.ae(A.fe,20,A.aA,null,null,null)
D.bQu=new C.ae(A.dW,null,A.aM,null,null,null)
D.bQP=new C.ae(A.k0,null,A.aA,null,null,null)
D.dbX=w([A.di,A.d3,A.di],x.O)
D.bTH=new C.a8(A.a3,A.a7,A.x,D.dbX,null,null)
D.cR_=w([A.bO,A.bl],x.O)
D.bTP=new C.a8(A.b_,A.b4,A.x,D.cR_,null,null)
D.bU0=new C.a8(A.b_,A.b4,A.x,A.axg,null,null)
D.cRl=w([A.fT,A.f6],x.O)
D.bU9=new C.a8(A.b_,A.b4,A.x,D.cRl,null,null)
D.ao6=new C.a8(A.b_,A.b4,A.x,M.a23,null,null)
D.cON=w([A.ou,A.i8],x.O)
D.bUN=new C.a8(A.b_,A.b4,A.x,D.cON,null,null)
D.cQI=w([A.eb,A.az],x.O)
D.aod=new C.a8(A.b_,A.b4,A.x,D.cQI,null,null)
D.d6m=w([A.dA,A.iR,A.bl],x.O)
D.bV5=new C.a8(A.a3,A.a7,A.x,D.d6m,null,null)
D.d6s=w([A.je,A.cC],x.O)
D.bVp=new C.a8(A.b_,A.b4,A.x,D.d6s,null,null)
D.cnA=w([A.bO,A.dA],x.O)
D.bVy=new C.a8(A.a3,A.a7,A.x,D.cnA,null,null)
D.axW=w([A.eb,L.mh],x.O)
D.bVF=new C.a8(A.b_,A.b4,A.x,D.axW,null,null)
D.bVX=new C.a8(A.b_,A.b4,A.x,I.aoA,null,null)
D.bdK=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b6X=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cMa=w([D.bdK,D.b6X],x.O)
D.bW9=new C.a8(A.b_,A.b4,A.x,D.cMa,null,null)
D.bWK=new C.a8(A.ax,A.aC,A.x,A.a20,null,null)
D.bib=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dhl=w([D.bib,A.KA],x.O)
D.bWR=new C.a8(A.b_,A.b4,A.x,D.dhl,null,null)
D.cZJ=w([A.az,A.w],x.O)
D.bWW=new C.a8(A.b_,A.b4,A.x,D.cZJ,null,null)
D.bWZ=new C.a8(A.b_,A.b4,A.x,T.axk,null,null)
D.bhB=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bik=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cAf=w([A.Lm,D.bhB,D.bik],x.O)
D.bX8=new C.a8(A.b_,A.b4,A.x,D.cAf,null,null)
D.cnU=w([A.d5,A.fy],x.O)
D.bXo=new C.a8(A.b_,A.b4,A.x,D.cnU,null,null)
D.bXu=new C.a8(A.ax,A.aC,A.x,A.a2O,null,null)
D.aoC=w([0,2,4,6,7,9,11],x.t)
D.bY5=w([0,4,7],x.t)
D.aoH=w([0,4,7,12],x.t)
D.bY6=w([0,4,7,4],x.t)
D.ax1=w([A.h2,A.pE],x.O)
D.awy=w([A.hw,A.cY],x.O)
D.auY=w([A.bt,A.dQ],x.O)
D.cIL=w([A.aM,A.d5],x.O)
D.cP8=w([A.cb,A.eP],x.O)
D.d7z=w([A.bW,A.lG],x.O)
D.auq=w([A.cs,A.jU],x.O)
D.cNJ=w([A.bJ,A.aK],x.O)
D.bYq=w([D.ax1,D.awy,A.a28,D.auY,D.cIL,D.cP8,A.aw5,D.d7z,D.auq,D.cNJ],x.Q)
D.c24=w([120,220,380],x.t)
D.c5P=w([12,16,19,24],x.t)
D.c5Y=w([1400,800,450,2400],x.t)
D.cad=w([0,0.6,1],x.n)
D.cem=w([250,450,900,1500],x.t)
D.b7L=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bhX=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bg1=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bl7=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bfd=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atG=w([D.b7L,D.bhX,D.bg1,D.bl7,D.bfd],x.O)
D.eAP=new C.z("type","Typewriter")
D.etG=new C.z("bounce","Bounce")
D.eBC=new C.z("wave","Wave")
D.eCH=new C.z("zoom","Zoom")
D.cv2=w([D.eAP,D.etG,D.eBC,A.a5W,I.aLV,D.eCH,I.aLX],x.K)
D.cvg=w([50,25,75],x.t)
D.cAL=w([0,5,10,15,18,20,25],x.t)
D.evj=new C.z("fish","Fish")
D.evl=new C.z("fly","Fireflies")
D.etE=new C.z("bird","Birds")
D.cEY=w([D.evj,D.evl,D.etE],x.K)
D.cJ1=w([900,500,250,1600],x.t)
D.cMz=w([0.78,1],x.n)
D.auZ=w([0,2,4,7,9,12,14,16],x.t)
D.cN6=w([A.bt,A.bB,A.b8,A.bt],x.O)
D.av3=w(["A","T","C","G"],x.s)
D.cN7=w(["A","U","C","G"],x.s)
D.a1Y=w([A.ay,A.c4,A.bk,A.aR,A.nQ],x.O)
D.cOr=w([A.az,A.ay,A.cs,A.c4,A.bk,A.cA,A.cf,A.bB,A.KA],x.O)
D.a21=w([0.04,0.17,0.3],x.n)
D.cP4=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GR=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eKK=new B.uK("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eKQ=new B.uK("Medium engine","A good all-rounder.",0.3,0.9)
D.eKP=new B.uK("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GS=w([D.eKK,D.eKQ,D.eKP],x._)
D.ejB=new C.z(6,"Easy")
D.ekf=new C.z(8,"Medium")
D.efK=new C.z(10,"Hard")
D.cPU=w([D.ejB,D.ekf,D.efK],x.E)
D.avn=w([0.55,0.78,1],x.n)
D.cRq=w([0.93,0.975,1],x.n)
D.avy=w([A.c,A.h3,A.ov,A.az],x.O)
D.fDa=new B.xV("Moon",1737,4291941851)
D.fD7=new B.xV("Earth",6371,4281908728)
D.fDb=new B.xV("Neptune",24622,4284524026)
D.fDc=new B.xV("Saturn",58232,4294829706)
D.fD8=new B.xV("Jupiter",69911,4294677052)
D.fDd=new B.xV("Sun",696340,4294688548)
D.fDe=new B.xV("Sirius A",119e4,4290763774)
D.fD5=new B.xV("Arcturus",179e5,4294818420)
D.fD6=new B.xV("Betelgeuse",531e6,4294472049)
D.fD9=new B.xV("UY Scuti",667e6,4293870660)
D.PN=w([D.fDa,D.fD7,D.fDb,D.fDc,D.fD8,D.fDd,D.fDe,D.fD5,D.fD6,D.fD9],C.ax("O<xV>"))
D.eGg=new C.bo("glow","Glow",A.a_v)
D.eDQ=new C.bo("rainbow","Rainbow",A.nh)
D.eEc=new C.bo("stars","Stars",A.i2)
D.eDA=new C.bo("sparks","Sparks",A.dW)
D.eFx=new C.bo("fire","Fire",A.vH)
D.cTe=w([D.eGg,D.eDQ,D.eEc,D.eDA,D.eFx],x.c)
D.avC=w([A.bk,A.ay,A.c4,A.d3],x.O)
D.cUe=w([0.2,1],x.n)
D.eKH=new B.uK("Radar","Shows your height above the ground.",0.1,0)
D.eKI=new B.uK("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eKF=new B.uK("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avK=w([D.eKH,D.eKI,D.eKF],x._)
D.eEN=new C.bo("attract","Attract",A.yl)
D.eEz=new C.bo("scare","Scare",A.r8)
D.eDJ=new C.bo("food","Food",A.u1)
D.bEH=new C.a_(983158,"MaterialIcons",!1)
D.eF5=new C.bo("hunt","Hunt",D.bEH)
D.cUR=w([D.eEN,D.eEz,D.eDJ,D.eF5],x.c)
D.cVf=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cVu=w([47,100,220,470,1000],x.n)
D.aw1=w([0,2,4,7,9],x.t)
D.HV={volts:0}
D.a3L=new C.bk(D.HV,[3],x.J)
D.Ih=new C.e7(["b","battery",0.2,0.3,D.a3L])
D.e2w={on:0}
D.dm1=new C.bk(D.e2w,[1],x.J)
D.D0=new C.e7(["s","switch",0.5,0.3,D.dm1])
D.eIQ=new C.e7(["l","bulb",0.8,0.3,A.iZ])
D.cR6=w([D.Ih,D.D0,D.eIQ],x.d)
D.D_=new C.cC(["b",0,"s",0])
D.eHR=new C.cC(["s",1,"l",0])
D.aM0=new C.cC(["l",1,"b",1])
D.d6x=w([D.D_,D.eHR,D.aM0],x.o)
D.cQA=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ef3=new B.my("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cR6,D.d6x,D.cQA)
D.aG9={ohms:0}
D.aDJ=new C.bk(D.aG9,[220],x.J)
D.eIj=new C.e7(["r","resistor",0.5,0.3,D.aDJ])
D.eJ4=new C.e7(["d","led",0.8,0.3,A.iZ])
D.d9w=w([D.Ih,D.eIj,D.eJ4],x.d)
D.eHc=new C.cC(["b",0,"r",0])
D.eHL=new C.cC(["r",1,"d",0])
D.eHi=new C.cC(["d",1,"b",1])
D.dhP=w([D.eHc,D.eHL,D.eHi],x.o)
D.d9W=w(["led","diode","indicator"],x.s)
D.efa=new B.my("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d9w,D.dhP,D.d9W)
D.a51={level:0}
D.dlo=new C.bk(D.a51,[0.2],x.J)
D.eIp=new C.e7(["p","pot",0.5,0.3,D.dlo])
D.eIr=new C.e7(["m","motor",0.8,0.3,A.iZ])
D.cRo=w([D.Ih,D.eIp,D.eIr],x.d)
D.eHb=new C.cC(["b",0,"p",0])
D.eHH=new C.cC(["p",1,"m",0])
D.eHD=new C.cC(["m",1,"b",1])
D.ddR=w([D.eHb,D.eHH,D.eHD],x.o)
D.d6g=w(["fan","motor","spin","dimmer"],x.s)
D.ef1=new B.my("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cRo,D.ddR,D.d6g)
D.a3I=new C.bk(D.a51,[0.9],x.J)
D.aM7=new C.e7(["s","solar",0.25,0.3,D.a3I])
D.aM6=new C.e7(["l","bulb",0.75,0.3,A.iZ])
D.cTW=w([D.aM7,D.aM6],x.d)
D.eHO=new C.cC(["s",0,"l",0])
D.eHC=new C.cC(["l",1,"s",1])
D.cS8=w([D.eHO,D.eHC],x.o)
D.dep=w(["solar","sun","without battery","no battery","free"],x.s)
D.ef4=new B.my("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cTW,D.cS8,D.dep)
D.eJ7=new C.e7(["c","crank",0.25,0.3,D.a3I])
D.d4F=w([D.eJ7,D.aM6],x.d)
D.eHf=new C.cC(["c",0,"l",0])
D.eHB=new C.cC(["l",1,"c",1])
D.d5c=w([D.eHf,D.eHB],x.o)
D.d4O=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ef0=new B.my("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d4F,D.d5c,D.d4O)
D.dln=new C.bk(D.a51,[0.7],x.J)
D.eIu=new C.e7(["t","turbine",0.25,0.3,D.dln])
D.eIh=new C.e7(["m","motor",0.75,0.3,A.iZ])
D.d_l=w([D.eIu,D.eIh],x.d)
D.eHZ=new C.cC(["t",0,"m",0])
D.eHE=new C.cC(["m",1,"t",1])
D.cZn=w([D.eHZ,D.eHE],x.o)
D.d3y=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eeY=new B.my("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d_l,D.cZn,D.d3y)
D.aDG=new C.bk(D.HV,[9],x.J)
D.a5Z=new C.e7(["b","battery",0.2,0.3,D.aDG])
D.aM5=new C.e7(["r","radio",0.8,0.3,A.iZ])
D.deY=w([D.a5Z,D.D0,D.aM5],x.d)
D.eHT=new C.cC(["s",1,"r",0])
D.aM1=new C.cC(["r",1,"b",1])
D.bXO=w([D.D_,D.eHT,D.aM1],x.o)
D.ddD=w(["radio","music","listen"],x.s)
D.ef9=new B.my("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.deY,D.bXO,D.ddD)
D.dmt=new C.bk(D.HV,[12],x.J)
D.aM4=new C.e7(["b","battery",0.2,0.3,D.dmt])
D.eIR=new C.e7(["t","tv",0.8,0.3,A.iZ])
D.cR7=w([D.aM4,D.D0,D.eIR],x.d)
D.eHU=new C.cC(["s",1,"t",0])
D.aM2=new C.cC(["t",1,"b",1])
D.d7C=w([D.D_,D.eHU,D.aM2],x.o)
D.deW=w(["tv","television","screen","watch"],x.s)
D.eeV=new B.my("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cR7,D.d7C,D.deW)
D.eIH=new C.e7(["z","buzzer",0.8,0.3,A.iZ])
D.cxA=w([D.Ih,D.D0,D.eIH],x.d)
D.eHV=new C.cC(["s",1,"z",0])
D.eIc=new C.cC(["z",1,"b",1])
D.cMl=w([D.D_,D.eHV,D.eIc],x.o)
D.dc1=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ef6=new B.my("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cxA,D.cMl,D.dc1)
D.eIq=new C.e7(["h","heater",0.8,0.3,A.iZ])
D.d2g=w([D.a5Z,D.D0,D.eIq],x.d)
D.eHQ=new C.cC(["s",1,"h",0])
D.eHq=new C.cC(["h",1,"b",1])
D.cN2=w([D.D_,D.eHQ,D.eHq],x.o)
D.chD=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eeW=new B.my("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d2g,D.cN2,D.chD)
D.eIT=new C.e7(["s","solar",0.2,0.25,D.a3I])
D.dmy=new C.bk(D.aG9,[100],x.J)
D.eIW=new C.e7(["r","resistor",0.55,0.25,D.dmy])
D.eJ2=new C.e7(["c","capacitor",0.85,0.25,A.iZ])
D.eIm=new C.e7(["q","resistor",0.55,0.6,D.aDJ])
D.eIU=new C.e7(["d","led",0.85,0.6,A.iZ])
D.d7d=w([D.eIT,D.eIW,D.eJ2,D.eIm,D.eIU],x.d)
D.eHP=new C.cC(["s",0,"r",0])
D.eHK=new C.cC(["r",1,"c",0])
D.eHh=new C.cC(["c",1,"s",1])
D.eHg=new C.cC(["c",0,"q",0])
D.eHJ=new C.cC(["q",1,"d",0])
D.eHj=new C.cC(["d",1,"c",1])
D.cXn=w([D.eHP,D.eHK,D.eHh,D.eHg,D.eHJ,D.eHj],x.o)
D.d42=w(["capacitor","store","charge","flash"],x.s)
D.ef8=new B.my("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d7d,D.cXn,D.d42)
D.eIx=new C.e7(["b","battery",0.15,0.3,D.a3L])
D.eJ8=new C.e7(["l1","bulb",0.5,0.3,A.iZ])
D.eIE=new C.e7(["l2","bulb",0.85,0.3,A.iZ])
D.cPm=w([D.eIx,D.eJ8,D.eIE],x.d)
D.eHa=new C.cC(["b",0,"l1",0])
D.eHy=new C.cC(["l1",1,"l2",0])
D.eHz=new C.cC(["l2",1,"b",1])
D.d00=w([D.eHa,D.eHy,D.eHz],x.o)
D.deI=w(["series","two bulbs","dim"],x.s)
D.eeZ=new B.my("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cPm,D.d00,D.deI)
D.e2K={volts:0,charge:1}
D.dmD=new C.bk(D.e2K,[1.5,0],x.J)
D.eJ0=new C.e7(["b","battery",0.75,0.3,D.dmD])
D.cOO=w([D.aM7,D.eJ0],x.d)
D.eHN=new C.cC(["s",0,"b",0])
D.eHe=new C.cC(["b",1,"s",1])
D.cXE=w([D.eHN,D.eHe],x.o)
D.d4a=w(["charge","rechargeable","flat","recharge"],x.s)
D.eeX=new B.my("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cOO,D.cXE,D.d4a)
D.dms=new C.bk(D.HV,[4.5],x.J)
D.eIs=new C.e7(["b","battery",0.2,0.3,D.dms])
D.aM3=new C.e7(["p","phone",0.8,0.3,A.iZ])
D.d_b=w([D.eIs,D.D0,D.aM3],x.d)
D.eHS=new C.cC(["s",1,"p",0])
D.a5Y=new C.cC(["p",1,"b",1])
D.db1=w([D.D_,D.eHS,D.a5Y],x.o)
D.dcq=w(["phone","charger","usb","mobile"],x.s)
D.ef2=new B.my("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d_b,D.db1,D.dcq)
D.eIe=new C.e7(["f","fan",0.8,0.3,A.iZ])
D.c9N=w([D.Ih,D.eIe],x.d)
D.eH9=new C.cC(["b",0,"f",0])
D.eHo=new C.cC(["f",1,"b",1])
D.cNx=w([D.eH9,D.eHo],x.o)
D.d6f=w(["fan","cool","air","wind"],x.s)
D.efb=new B.my("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c9N,D.cNx,D.d6f)
D.eIL=new C.e7(["b","battery",0.15,0.2,D.a3L])
D.eIf=new C.e7(["a","ammeter",0.5,0.2,A.iZ])
D.eId=new C.e7(["l","bulb",0.85,0.2,A.iZ])
D.eIN=new C.e7(["v","voltmeter",0.5,0.6,A.iZ])
D.d4t=w([D.eIL,D.eIf,D.eId,D.eIN],x.d)
D.eH7=new C.cC(["b",0,"a",0])
D.eH6=new C.cC(["a",1,"l",0])
D.eI0=new C.cC(["v",0,"l",0])
D.eI1=new C.cC(["v",1,"l",1])
D.cXv=w([D.eH7,D.eH6,D.aM0,D.eI0,D.eI1],x.o)
D.dhO=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ef7=new B.my("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d4t,D.cXv,D.dhO)
D.eJb=new C.e7(["b","battery",0.15,0.2,D.aDG])
D.eIw=new C.e7(["t","tv",0.55,0.2,A.iZ])
D.aDH=new C.bk(D.HV,[5],x.J)
D.eIk=new C.e7(["c","buck",0.4,0.5,D.aDH])
D.eIy=new C.e7(["p","phone",0.8,0.5,A.iZ])
D.cVh=w([D.eJb,D.eIw,D.eIk,D.eIy],x.d)
D.eHd=new C.cC(["b",0,"t",0])
D.aLZ=new C.cC(["b",0,"c",0])
D.aM_=new C.cC(["c",1,"p",0])
D.d_8=w([D.eHd,D.aM2,D.aLZ,D.aM_,D.a5Y],x.o)
D.cTv=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ef_=new B.my("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cVh,D.d_8,D.cTv)
D.eIl=new C.e7(["c","buck",0.5,0.3,D.aDH])
D.cMU=w([D.aM4,D.eIl,D.aM3],x.d)
D.cRx=w([D.aLZ,D.aM_,D.a5Y],x.o)
D.cl1=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eeU=new B.my("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cMU,D.cRx,D.cl1)
D.eIC=new C.e7(["d","diode",0.5,0.3,A.iZ])
D.d0d=w([D.a5Z,D.eIC,D.aM5],x.d)
D.eH8=new C.cC(["b",0,"d",0])
D.eHk=new C.cC(["d",1,"r",0])
D.cA5=w([D.eH8,D.eHk,D.aM1],x.o)
D.cTb=w(["diode","protect","backwards","one way"],x.s)
D.ef5=new B.my("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d0d,D.cA5,D.cTb)
D.PQ=w([D.ef3,D.efa,D.ef1,D.ef4,D.ef0,D.eeY,D.ef9,D.eeV,D.ef6,D.eeW,D.ef8,D.eeZ,D.eeX,D.ef2,D.efb,D.ef7,D.ef_,D.eeU,D.ef5],C.ax("O<my>"))
D.h0q=new B.FS("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h0o=new B.FS("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.h0r=new B.FS("Mercury",3.7,A.jT,"Mercury is small, so its gravity is like Mars.")
D.h0l=new B.FS("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h0n=new B.FS("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.h0p=new B.FS("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.h0m=new B.FS("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.ri=w([D.h0q,D.h0o,D.h0r,D.h0l,D.h0n,D.h0p,D.h0m],C.ax("O<FS>"))
D.cXl=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2h=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cY1=w([0.2,0.5,0.8],x.n)
D.bDb=new C.a_(63040,"MaterialIcons",!1)
D.eED=new C.bo("peg","Peg",D.bDb)
D.eDN=new C.bo("bar","Bar",R.BG)
D.eEf=new C.bo("erase","Erase",A.N7)
D.cYe=w([D.eED,D.eDN,D.eEf],x.c)
D.eNC=new C.cR(A.bi,A.J,4)
D.cYp=w([D.eNC],x.q)
D.awh=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aV7=new B.K9(0,"accordion")
D.cNP=w([A.jm,A.BH,A.Bv],x.w)
D.cUJ=w(["Mail","SMS","Ad"],x.s)
D.cOj=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fZD=new B.Ao(D.aV7,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ax1,D.cNP,D.cUJ,D.cOj)
D.a9s=new B.K9(1,"flip")
D.d3X=w([A.pW,A1.Gg,A.u2],x.w)
D.cZS=w(["Unlock","Verify","Secure"],x.s)
D.cMQ=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fZC=new B.Ao(D.a9s,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awy,D.d3X,D.cZS,D.cMQ)
D.aV8=new B.K9(2,"towers")
D.cYH=w([A.yh,A.q_,A.hN],x.w)
D.cYk=w(["Save","Grow","Earn"],x.s)
D.cAU=w(["","",""],x.s)
D.fZE=new B.Ao(D.aV8,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a28,D.cYH,D.cYk,D.cAU)
D.a9t=new B.K9(3,"assemble")
D.d4R=w([A.nj,A.h8,A.dW],x.w)
D.cU7=w(["Launch","Charge","Shine"],x.s)
D.d1s=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fZG=new B.Ao(D.a9t,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auY,D.d4R,D.cU7,D.d1s)
D.aV9=new B.K9(4,"carousel")
D.d4G=w([A.b8,A.f7],x.O)
D.cUT=w([A.mv,A.akT,A.a0e],x.w)
D.cPK=w(["Explore","Discover","Learn"],x.s)
D.d_g=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fZB=new B.Ao(D.aV9,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d4G,D.cUT,D.cPK,D.d_g)
D.aVa=new B.K9(5,"burst")
D.cYg=w([A.j9,A.tf],x.O)
D.cOe=w([A.lk,A.mt,A.i1],x.w)
D.cOA=w(["Cheer","Win","Love"],x.s)
D.cQG=w(["Make some noise","First place","Share the joy"],x.s)
D.fZF=new B.Ao(D.aVa,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cYg,D.cOe,D.cOA,D.cQG)
D.awi=w([D.fZD,D.fZC,D.fZE,D.fZG,D.fZB,D.fZF],C.ax("O<Ao>"))
D.eEF=new C.bo("skin","Skin",A.akU)
D.eG2=new C.bo("muscle","Muscles",A.Nj)
D.eFL=new C.bo("organ","Organs",A.i1)
D.bCC=new C.a_(62747,"MaterialIcons",!1)
D.eFR=new C.bo("bone","Skeleton",D.bCC)
D.eG8=new C.bo("vessel","Blood vessels",A.q1)
D.cYN=w([D.eEF,D.eG2,D.eFL,D.eFR,D.eG8],x.c)
D.eKJ=new B.uK("Simple legs","Light. Land gently.",0.15,0.2)
D.eKL=new B.uK("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eKO=new B.uK("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C5=w([D.eKJ,D.eKL,D.eKO],x._)
D.d_q=w([1.77,3.55,7.15,16.7],x.n)
D.d1R=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eAi=new C.z("spiral","Spiral")
D.ejy=new C.z("barred","Barred spiral")
D.euP=new C.z("elliptical","Elliptical")
D.d2w=w([D.eAi,D.ejy,D.euP],x.K)
D.eGP=new C.cC(["beat",0.18,0.28,0])
D.eHW=new C.cC(["burst",0.7,0.2,0])
D.eI6=new C.cC(["delay",0.45,0.5,1])
D.eHG=new C.cC(["ripple",0.75,0.6,3])
D.cTR=w([D.eGP,D.eHW,D.eI6,D.eHG],x.e)
D.d3m=w([N.l6,M.Ig,F.Sj],x.u)
D.fYS=new B.FE("First spark","A clock lights a burst and a ripple",D.cTR,D.d3m)
D.eHn=new C.cC(["beat",0.15,0.3,1])
D.eGt=new C.cC(["ripple",0.62,0.15,0])
D.eI2=new C.cC(["delay",0.4,0.45,0])
D.eH3=new C.cC(["ripple",0.7,0.45,0])
D.eGL=new C.cC(["delay",0.4,0.7,1])
D.eHI=new C.cC(["shake",0.75,0.75,0])
D.dfH=w([D.eHn,D.eGt,D.eI2,D.eH3,D.eGL,D.eHI],x.e)
D.egH=new C.z(2,4)
D.aLP=new C.z(4,5)
D.cXc=w([N.l6,M.Ig,F.Sj,D.egH,D.aLP],x.u)
D.fYU=new B.FE("Heartbeat","Two thumps, then a shake",D.dfH,D.cXc)
D.eGU=new C.cC(["dice",0.15,0.7,1])
D.eI8=new C.cC(["echo",0.4,0.7,0])
D.eH1=new C.cC(["comet",0.7,0.5,4])
D.eHX=new C.cC(["burst",0.72,0.2,1])
D.eHl=new C.cC(["burst",0.3,0.25,0])
D.eGV=new C.cC(["pop",0.55,0.85,0])
D.chc=w([D.eGU,D.eI8,D.eH1,D.eHX,D.eHl,D.eGV],x.e)
D.eg6=new C.z(1,3)
D.eg7=new C.z(1,4)
D.aLN=new C.z(0,5)
D.d4B=w([N.l6,W.uy,D.eg6,D.eg7,D.aLN],x.u)
D.fYT=new B.FE("Fireworks","Dice launch comets that burst in colour",D.chc,D.d4B)
D.eGZ=new C.cC(["beat",0.15,0.2,2])
D.eHv=new C.cC(["chance",0.4,0.2,0])
D.eGR=new C.cC(["ball",0.7,0.12,3])
D.eGE=new C.cC(["chance",0.4,0.5,1])
D.eI7=new C.cC(["ball",0.3,0.08,1])
D.eGx=new C.cC(["ripple",0.7,0.55,3])
D.cae=w([D.eGZ,D.eHv,D.eGR,D.eGE,D.eI7,D.eGx],x.e)
D.egI=new C.z(2,5)
D.cxk=w([N.l6,W.uy,M.a5S,F.Sk,D.egI],x.u)
D.fYR=new B.FE("Rain","Balls fall at random and splash",D.cae,D.cxk)
D.eHw=new C.cC(["beat",0.12,0.45,2])
D.eHY=new C.cC(["toggle",0.38,0.2,0])
D.eI4=new C.cC(["wash",0.7,0.15,4])
D.eGT=new C.cC(["count3",0.38,0.45,0])
D.eI_=new C.cC(["burst",0.72,0.4,0])
D.eHm=new C.cC(["light",0.55,0.7,1])
D.eGF=new C.cC(["pop",0.8,0.8,4])
D.d7b=w([D.eHw,D.eHY,D.eI4,D.eGT,D.eI_,D.eHm,D.eGF],x.e)
D.eha=new C.z(3,6)
D.cdm=w([N.l6,W.uy,M.a5S,F.Sk,D.aLN,D.eha],x.u)
D.fYP=new B.FE("Disco","A beat drives lights, washes and bursts",D.d7b,D.cdm)
D.eIb=new C.cC(["button",0.12,0.2,0])
D.eGz=new C.cC(["delay",0.34,0.2,1])
D.eIa=new C.cC(["light",0.56,0.2,1])
D.eI3=new C.cC(["delay",0.56,0.45,1])
D.eHx=new C.cC(["ball",0.34,0.6,0])
D.eGD=new C.cC(["delay",0.34,0.8,1])
D.eGs=new C.cC(["burst",0.7,0.8,5])
D.bYt=w([D.eIb,D.eGz,D.eIa,D.eI3,D.eHx,D.eGD,D.eGs],x.e)
D.ejd=new C.z(5,6)
D.dca=w([N.l6,W.uy,F.Sj,F.Sk,D.aLP,D.ejd],x.u)
D.fYQ=new B.FE("Domino","Tap the button and watch it run down the line",D.bYt,D.dca)
D.awC=w([D.fYS,D.fYU,D.fYT,D.fYR,D.fYP,D.fYQ],C.ax("O<FE>"))
D.d2E=w([0.05,0.15,0.25],x.n)
D.d2S=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d3x=w([1.5,3,4.5,9,12],x.n)
D.eDj=new C.bo("dice","Dice",A.ms)
D.eEm=new C.bo("coin","Coin",K.ya)
D.eG3=new C.bo("num","Number",A.yj)
D.d3H=w([D.eDj,D.eEm,D.eG3],x.c)
D.d3K=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fDf=new B.OT("Moon",1.62,0,4291941851)
D.fDg=new B.OT("Mars",3.71,0.01,4294472049)
D.fDh=new B.OT("Earth",9.81,1,4281908728)
D.fDj=new B.OT("Jupiter",24.79,1.4,4294677052)
D.fDi=new B.OT("Sun",274,2,4294688548)
D.yJ=w([D.fDf,D.fDg,D.fDh,D.fDj,D.fDi],C.ax("O<OT>"))
D.awJ=w([A.cb,A.aM,A.b2,A.aR,A.bt,A.bW,A.cs,A.hw],x.O)
D.e15={H:0}
D.dm2=new C.bk(D.e15,[2],x.I)
D.dnB=new B.tb("Hydrogen","H\u2082",D.dm2,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e16={H:0,Cl:1}
D.dmf=new C.bk(D.e16,[1,1],x.I)
D.dnD=new B.tb("Hydrogen chloride","HCl",D.dmf,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e17={H:0,O:1}
D.dlL=new C.bk(D.e17,[2,1],x.I)
D.dnE=new B.tb("Water","H\u2082O",D.dlL,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e1k={N:0,H:1}
D.dmC=new C.bk(D.e1k,[1,3],x.I)
D.dnM=new B.tb("Ammonia","NH\u2083",D.dmC,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a50={C:0,H:1}
D.dmw=new C.bk(D.a50,[1,4],x.I)
D.dnF=new B.tb("Methane","CH\u2084",D.dmw,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e18={H:0,S:1}
D.dkT=new C.bk(D.e18,[2,1],x.I)
D.dnL=new B.tb("Hydrogen sulfide","H\u2082S",D.dkT,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e1p={O:0}
D.dmA=new C.bk(D.e1p,[2],x.I)
D.dnN=new B.tb("Oxygen","O\u2082",D.dmA,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e1j={N:0}
D.dm3=new C.bk(D.e1j,[2],x.I)
D.dnC=new B.tb("Nitrogen","N\u2082",D.dm3,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e0U={C:0,O:1}
D.dmI=new C.bk(D.e0U,[1,2],x.I)
D.dnJ=new B.tb("Carbon dioxide","CO\u2082",D.dmI,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aG6={C:0,H:1,O:2}
D.dkE=new C.bk(D.aG6,[1,2,1],x.I)
D.dnK=new B.tb("Formaldehyde","CH\u2082O",D.dkE,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dmv=new C.bk(D.a50,[2,4],x.I)
D.dnH=new B.tb("Ethene","C\u2082H\u2084",D.dmv,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dmu=new C.bk(D.a50,[2,6],x.I)
D.dnG=new B.tb("Ethane","C\u2082H\u2086",D.dmu,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dkF=new C.bk(D.aG6,[1,4,1],x.I)
D.dnI=new B.tb("Methanol","CH\u2083OH",D.dkF,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2x=w([D.dnB,D.dnD,D.dnE,D.dnM,D.dnF,D.dnL,D.dnN,D.dnC,D.dnJ,D.dnK,D.dnH,D.dnG,D.dnI],C.ax("O<tb>"))
D.d4H=w([A.bW,A.aR,A.dP,A.b2],x.O)
D.d5B=w([],x.h)
D.d5E=w([],x.B)
D.a2G=w([],x.F)
D.e8F=new B.eb("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e8L=new B.eb("solar","Solar panel","\u2600\ufe0f",A.c4,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e9p=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e91=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e8x=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hw,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e9_=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e9u=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e9b=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e8Q=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e9r=new B.eb("fuse","Fuse","\ud83e\uddef",A.cb,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e8p=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hw,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e9c=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e9e=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e8N=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e8R=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e98=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bW,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e8G=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e93=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e8W=new B.eb("radio","Radio","\ud83d\udcfb",A.nQ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e8T=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e8w=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e8D=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e8J=new B.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e9w=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bW,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e9l=new B.eb("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e8Z=new B.eb("calculator","Calculator","\ud83e\uddee",A.Kt,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e8C=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e9v=new B.eb("router","WiFi router","\ud83d\udcf6",A.hw,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e9y=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e8s=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e9z=new B.eb("kettle","Kettle","\ud83e\uded6",A.mg,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e8A=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e8M=new B.eb("lights","Party lights","\ud83c\udf84",A.nQ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e8X=new B.eb("fridge","Fridge","\ud83e\uddca",A.fT,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e8u=new B.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e9m=new B.eb("blender","Blender","\ud83e\udd64",A.cb,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e8U=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e8z=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e8Y=new B.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e9j=new B.eb("neon","Neon sign","\ud83e\udea7",A.bW,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e8v=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e9d=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.c4,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e8I=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e97=new B.eb("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e9o=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h1,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e8t=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e92=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e9a=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nQ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e9t=new B.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e8r=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e9x=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bW,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e9i=new B.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e94=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.j9,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e9g=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e8B=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e9s=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e8o=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h1,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e8V=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e8O=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e99=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tc,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e8q=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e8E=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e9q=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e95=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e90=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cg,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e9h=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e8P=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e96=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e9f=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e9k=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e8n=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e8S=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e8K=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e8y=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e8H=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e9n=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qe=w([D.e8F,D.e8L,D.e9p,D.e91,D.e8x,D.e9_,D.e9u,D.e9b,D.e8Q,D.e9r,D.e8p,D.e9c,D.e9e,D.e8N,D.e8R,D.e98,D.e8G,D.e93,D.e8W,D.e8T,D.e8w,D.e8D,D.e8J,D.e9w,D.e9l,D.e8Z,D.e8C,D.e9v,D.e9y,D.e8s,D.e9z,D.e8A,D.e8M,D.e8X,D.e8u,D.e9m,D.e8U,D.e8z,D.e8Y,D.e9j,D.e8v,D.e9d,D.e8I,D.e97,D.e9o,D.e8t,D.e92,D.e9a,D.e9t,D.e8r,D.e9x,D.e9i,D.e94,D.e9g,D.e8B,D.e9s,D.e8o,D.e8V,D.e8O,D.e99,D.e8q,D.e8E,D.e9q,D.e95,D.e90,D.e9h,D.e8P,D.e96,D.e9f,D.e9k,D.e8n,D.e8S,D.e8K,D.e8y,D.e8H,D.e9n],C.ax("O<eb>"))
D.d60=w([0,0.46,0.82],x.n)
D.d6b=w([5,10,15,25,45,60],x.t)
D.d6v=w([-0.045,0.03,-0.015],x.n)
D.d6T=w([0.9,0.97,1],x.n)
D.ax8=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.ub=w([0.05,0.2,0.35],x.n)
D.cOE=w([D.EE,D.EE],x.O)
D.cTN=w([A.EO,A.M],x.O)
D.cSQ=w([A.fk,A.hl],x.O)
D.cMN=w([A.f7,A.nP],x.O)
D.c9L=w([A.lG,A.dx],x.O)
D.ax9=w([D.cOE,D.cTN,D.cSQ,D.cMN,D.c9L],x.Q)
D.fD3=new B.uY("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fD4=new B.uY("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fCW=new B.uY("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fD2=new B.uY("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fD0=new B.uY("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fCX=new B.uY("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fD1=new B.uY("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fCY=new B.uY("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fD_=new B.uY("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fCZ=new B.uY("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cb=w([D.fD3,D.fD4,D.fCW,D.fD2,D.fD0,D.fCX,D.fD1,D.fCY,D.fD_,D.fCZ],C.ax("O<uY>"))
D.beV=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d83=w([D.EE,D.beV,D.adt,A.ad_],x.O)
D.b0V=new C.ac(0,A.G,A.hJ,A.dE,6)
D.d8Y=w([D.b0V],x.V)
D.efs=new C.z(0,"AND")
D.eg8=new C.z(1,"Adder")
D.egJ=new C.z(2,"Blinker")
D.ehb=new C.z(3,"Memory")
D.d9I=w([D.efs,D.eg8,D.egJ,D.ehb],x.E)
D.axl=w([-104,0,104],x.n)
D.axm=w([-14,3],x.n)
D.dab=w([-16,16],x.n)
D.axo=w([-22,22],x.n)
D.daq=w([-8,0,8],x.n)
D.axs=w([-92,0,92],x.n)
D.daM=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eKG=new B.uK("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eKN=new B.uK("Medium tank","Balanced.",0.35,1)
D.eKM=new B.uK("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qr=w([D.eKG,D.eKN,D.eKM],x._)
D.nn=w([0.04,0.2,0.36],x.n)
D.axC=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eFK=new C.bo(D.aV7,"Fold",K.alQ)
D.eEU=new C.bo(D.a9s,"Flip",A.FU)
D.bCV=new C.a_(62889,"MaterialIcons",!1)
D.eG1=new C.bo(D.aV8,"Rise",D.bCV)
D.am3=new C.a_(983870,"MaterialIcons",!1)
D.eCS=new C.bo(D.a9t,"Assemble",D.am3)
D.eD0=new C.bo(D.aV9,"Spin",D.akm)
D.eCY=new C.bo(D.aVa,"Pop",A.lk)
D.dc7=w([D.eFK,D.eEU,D.eG1,D.eCS,D.eD0,D.eCY],C.ax("O<+(K9,n,a_)>"))
D.axH=w([A.bW,A.dP,A.bu,A.aR,A.bt,A.cb],x.O)
D.dci=w([A.aR,A.cs,A.cs,A.b2],x.O)
D.dcv=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eBN=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.emL=new C.z("Make the output turn TWICE as fast.",2)
D.egi=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eAs=new C.z("Make the output turn 4 times faster.",4)
D.esm=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.evp=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.etV=new C.z("Make the output turn 3 times faster.",3)
D.euG=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.axM=w([D.eBN,D.emL,D.egi,D.eAs,D.esm,D.evp,D.etV,D.euG],C.ax("O<+(n,M)>"))
D.ddt=w([3,4.5,5,6,9],x.n)
D.b1s=new C.ac(0,A.G,A.aX,A.J,16)
D.ddV=w([D.b1s],x.V)
D.Qt=w([A.bW,A.c4,A.b2,A.aR,A.bt,A.cb,A.c,A.cs],x.O)
D.dem=w(["solar","turbine","crank","pot"],x.s)
D.deG=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.deM=w([0,0.35,0.75,1],x.n)
D.eDd=new C.bo("drop","Drop",D.alG)
D.eDf=new C.bo("weight","Weight",U.am7)
D.eFX=new C.bo("cannon","Newton's cannon",A.al5)
D.dfo=w([D.eDd,D.eDf,D.eFX],x.c)
D.ez6=new C.z("piano","Piano")
D.eyN=new C.z("organ","Organ")
D.etC=new C.z("bell","Bell")
D.ez8=new C.z("pluck","Pluck")
D.eAr=new C.z("synth","Synth")
D.evk=new C.z("flute","Flute")
D.ay3=w([D.ez6,D.eyN,D.etC,D.ez8,D.eAr,D.evk],x.K)
D.dfV=w(["volts","level","ohms","on"],x.s)
D.dhe=w([A.jm,A.BH,A.Bv,A.pW,A1.Gg,A.u2,A.yh,A.q_,A.hN,A.nj,A.h8,A.dW,A.i1,A.i2,A.mt,A.lQ,A.vN,A.rf,A.lR,A.FM,A.u1,A.Nl,A.Bx,A.alB,A.Nb,A.yd,A.Nj,A.alf,T.am_,A.lk],x.w)
D.di7=w([0.72,1],x.n)
D.dii=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e2C={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dky=new C.bk(D.e2C,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aG8={A:0,T:1,C:2,G:3}
D.a3C=new C.bk(D.aG8,["U","A","G","C"],x.l)
D.dkG=new C.bk(D.aG8,["T","A","G","C"],x.l)
D.e1g={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d4L=w([0,2,4,5,7,9,11],x.t)
D.cNV=w([0,2,3,5,7,8,10],x.t)
D.d9U=w([0,3,5,6,7,10],x.t)
D.Ch=new C.bk(D.e1g,[D.aw1,D.d4L,D.cNV,D.d9U,D.aoC],C.ax("bk<n,ai<H>>"))
D.e2p={A:0,T:1,U:2,C:3,G:4}
D.dkW=new C.bk(D.e2p,[A.cb,A.co,A.co,A.aM,A.b2],C.ax("bk<n,w>"))
D.e0E={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fSz=new B.xX("Switch",F.NJ,A.c4,0,"Tap it to turn it ON or OFF.")
D.fSv=new B.xX("Blinker",A.oQ,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fSw=new B.xX("AND",D.am3,A.co,2,"ON only when BOTH inputs are ON.")
D.bEp=new C.a_(63671,"MaterialIcons",!1)
D.fSu=new B.xX("OR",D.bEp,A.bt,2,"ON when EITHER input is ON.")
D.fSx=new B.xX("XOR",G.a_A,A.bW,2,"ON when the inputs are DIFFERENT.")
D.fSr=new B.xX("NAND",A.tR,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bDv=new C.a_(63176,"MaterialIcons",!1)
D.fSs=new B.xX("NOR",D.bDv,A.hw,2,"ON only when BOTH inputs are OFF.")
D.fSt=new B.xX("NOT",A_.BI,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fSy=new B.xX("Light",A.ra,A.dP,1,"Glows when its input is ON.")
D.fSA=new B.xX("Buzzer",A.o3,A.cb,1,"Beeps while its input is ON.")
D.yW=new C.bk(D.e0E,[D.fSz,D.fSv,D.fSw,D.fSu,D.fSx,D.fSr,D.fSs,D.fSt,D.fSy,D.fSA],C.ax("bk<n,xX>"))
D.e2m={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eDE=new C.bo(3,20,1.9)
D.eD8=new C.bo(33,90,1.6)
D.eGl=new C.bo(52,15,3.2)
D.eGj=new C.bo(45,-100,1.8)
D.eEO=new C.bo(-15,-60,1.9)
D.eEh=new C.bo(-25,140,2.4)
D.eE8=new C.bo(-82,0,2.2)
D.aDv=new C.bk(D.e2m,[D.eDE,D.eD8,D.eGl,D.eGj,D.eEO,D.eEh,D.eE8],C.ax("bk<n,+(M,M,M)>"))
D.cNk=w([A.A],x.M)
D.cND=w([A.ax,A.aC],x.M)
D.cWi=w([A.ax,A.A,A.aC],x.M)
D.cXK=w([A.ax,A.la,A.A,A.lA,A.aC],x.M)
D.d9E=w([A.ax,A.la,A.a3,A.a7,A.lA,A.aC],x.M)
D.dlT=new C.dS([1,D.cNk,2,D.cND,3,D.cWi,4,A.ay8,5,D.cXK,6,D.d9E],C.ax("dS<H,ai<da>>"))
D.e1h={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eF_=new C.bo(1,A.bO,"Hydrogen")
D.eDT=new C.bo(4,A.bl,"Carbon")
D.eCT=new C.bo(3,A.d3,"Nitrogen")
D.eFj=new C.bo(2,A.ay,"Oxygen")
D.eEH=new C.bo(2,A.c4,"Sulfur")
D.eFU=new C.bo(1,A.bk,"Chlorine")
D.w1=new C.bk(D.e1h,[D.eF_,D.eDT,D.eCT,D.eFj,D.eEH,D.eFU],C.ax("bk<n,+(H,w,n)>"))
D.e2I={Calm:0,Box:1,Sleep:2}
D.cuO=w([4,2,6,0],x.n)
D.cuV=w([4,4,4,4],x.n)
D.cuW=w([4,7,8,0],x.n)
D.QS=new C.bk(D.e2I,[D.cuO,D.cuV,D.cuW],C.ax("bk<n,ai<M>>"))
D.e0N={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wG=new B.a_V(0,"source")
D.cXf=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fXv=new B.q0("Clock",A.oQ,D.wG,A.bu,D.cXf)
D.fXr=new B.q0("Button",A.yl,D.wG,A.aM,A.T)
D.ddF=w(["random","quick","slow"],x.s)
D.fXC=new B.q0("Dice",A.ms,D.wG,A.bW,D.ddF)
D.bE3=new C.a_(63484,"MaterialIcons",!1)
D.DF=new B.a_V(1,"logic")
D.di2=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fXy=new B.q0("Delay",D.bE3,D.DF,A.co,D.di2)
D.d6i=w(["fast","mid","slow"],x.s)
D.fXD=new B.q0("Echo",A.alv,D.DF,A.bt,D.d6i)
D.fXA=new B.q0("Every 2nd",A_.BI,D.DF,A.hw,A.T)
D.bDJ=new C.a_(63309,"MaterialIcons",!1)
D.fXx=new B.q0("Every 3rd",D.bDJ,D.DF,A.aR,A.T)
D.bFI=new C.a_(983902,"MaterialIcons",!1)
D.bXT=w(["50%","25%","75%"],x.s)
D.fXF=new B.q0("Chance",D.bFI,D.DF,A.cs,D.bXT)
D.qv=new B.a_V(2,"out")
D.fXt=new B.q0("Light",A.ra,D.qv,A.dP,A.T)
D.fXu=new B.q0("Burst",A.lk,D.qv,A.bW,A.T)
D.fXs=new B.q0("Ripple",A.yp,D.qv,A.b8,A.T)
D.fXB=new B.q0("Ball",A.alI,D.qv,A.cs,A.T)
D.fXz=new B.q0("Comet",A.nj,D.qv,A.bt,A.T)
D.bFs=new C.a_(983669,"MaterialIcons",!1)
D.fXE=new B.q0("Shake",D.bFs,D.qv,A.cb,A.T)
D.fXG=new B.q0("Pop",A.FN,D.qv,A.b2,A.T)
D.fXw=new B.q0("Wash",A.No,D.qv,A.pt,A.T)
D.mC=new C.bk(D.e0N,[D.fXv,D.fXr,D.fXC,D.fXy,D.fXD,D.fXA,D.fXx,D.fXF,D.fXt,D.fXu,D.fXs,D.fXB,D.fXz,D.fXE,D.fXG,D.fXw],C.ax("bk<n,q0>"))
D.e2q={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Ci=new C.bk(D.e2q,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e1_={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zn=new B.J5(0,"tv")
D.eMd=new B.m5("Samsung Neo QLED 8K",D.zn,F.Er,A.aR)
D.eM4=new B.m5("LG OLED evo G5",D.zn,A.ea,A.h1)
D.eLW=new B.m5("Sony Bravia 9",D.zn,A.qH,A.br)
D.eM_=new B.m5("Apple TV 4K",D.zn,A.e2,A.bO)
D.eLX=new B.m5("Bang and Olufsen Beovision",D.zn,F.E9,F.tc)
D.Im=new B.J5(1,"iphone")
D.aMs=new B.m5("iPhone 18 Pro Max",D.Im,D.afI,A.cf)
D.we=new B.J5(3,"fold")
D.bkS=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eM9=new B.m5("iPhone Fold",D.we,D.bkS,A.b7)
D.uB=new B.J5(2,"android")
D.eMa=new B.m5("Samsung Galaxy S26 Ultra",D.uB,F.abT,A.d3)
D.bes=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eM2=new B.m5("Samsung Galaxy Z Fold7",D.we,D.bes,A.cA)
D.eLZ=new B.m5("Google Pixel 10 Pro XL",D.uB,A.dA,A.bk)
D.eM6=new B.m5("Xiaomi 16 Ultra",D.uB,A.lK,A.cg)
D.eM1=new B.m5("Huawei Mate 80 Pro Max",D.uB,A.eP,A.ay)
D.eLY=new B.m5("OPPO Find X9 Ultra",D.uB,A.dY,A.b2)
D.eMf=new B.m5("Honor Magic V5",D.we,A.di,A.co)
D.eM3=new B.m5("vivo X300 Pro",D.uB,A.hl,A.cs)
D.Ss=new B.J5(4,"tablet")
D.eM8=new B.m5("iPad Pro M5",D.Ss,A.dA,A.aR)
D.a67=new B.J5(5,"reader")
D.eMg=new B.m5("Kindle Scribe",D.a67,A.eb,A.br)
D.zo=new B.J5(6,"computer")
D.eM7=new B.m5("MacBook Pro M5 Max",D.zo,A.dA,A.cf)
D.eMc=new B.m5("iMac 32 inch",D.zo,A.bO,A.cA)
D.eM5=new B.m5("Pro Display XDR 8K",D.zo,A.lK,A.b8)
D.eM0=new B.m5("Sony Laser Projector",D.zo,A.cC,A.dP)
D.eMb=new B.m5("Luxury car touchscreen",D.zo,L.mh,A.ay)
D.eMe=new B.m5("Apple Vision Pro",D.zo,A.je,A.bt)
D.lY=new C.bk(D.e1_,[D.eMd,D.eM4,D.eLW,D.eM_,D.eLX,D.aMs,D.eM9,D.eMa,D.eM2,D.eLZ,D.eM6,D.eM1,D.eLY,D.eMf,D.eM3,D.eM8,D.eMg,D.eM7,D.eMc,D.eM5,D.eM0,D.eMb,D.eMe],C.ax("bk<n,m5>"))
D.e1b={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bnq=new B.fK(20,4,13,!1)
D.bnR=new B.fK(14,5,13.5,!1)
D.bnI=new B.fK(9,2.4,10,!1)
D.bnW=new B.fK(7,5,12.5,!1)
D.bnL=new B.fK(8,3.5,12,!1)
D.bnm=new B.fK(15,2,6,!1)
D.bnU=new B.fK(45,6,13.5,!0)
D.bnC=new B.fK(10,8,13.5,!1)
D.bnu=new B.fK(25,3,12,!0)
D.bnA=new B.fK(35,4,12,!0)
D.bnB=new B.fK(40,4.5,9.5,!0)
D.bnD=new B.fK(55,3,9,!0)
D.bnn=new B.fK(18,3,9,!1)
D.bnT=new B.fK(22,4,13.5,!1)
D.bnM=new B.fK(16,5,13.5,!1)
D.bny=new B.fK(30,4,9,!0)
D.bo4=new B.fK(5,3.5,13,!1)
D.bnG=new B.fK(25,3,13.5,!0)
D.bnP=new B.fK(14,2.5,9,!1)
D.bnF=new B.fK(6,6,13,!1)
D.bnX=new B.fK(30,1.2,5,!0)
D.bo3=new B.fK(35,3,4.5,!0)
D.bo_=new B.fK(20,4.5,7.5,!0)
D.bnE=new B.fK(55,5.5,13.5,!0)
D.bnl=new B.fK(45,5.5,13.5,!0)
D.bnQ=new B.fK(40,5.5,13.5,!0)
D.bo2=new B.fK(60,6,13.5,!0)
D.ag9=new B.fK(28,4,7,!0)
D.F0=new B.fK(25,4,7,!0)
D.bnx=new B.fK(30,4,7,!0)
D.bns=new B.fK(22,4,7,!0)
D.bnt=new B.fK(24,4,7,!0)
D.bnH=new B.fK(60,3,5.5,!0)
D.bno=new B.fK(18,9,14,!0)
D.bnv=new B.fK(25,9,14,!0)
D.aga=new B.fK(30,8,14,!0)
D.bnr=new B.fK(20,8,14,!0)
D.bnz=new B.fK(30,9,14,!0)
D.bnY=new B.fK(22,5,9.5,!0)
D.bnp=new B.fK(30,2.5,10.5,!0)
D.bnN=new B.fK(50,5.5,13.5,!0)
D.bo1=new B.fK(12,2,9.5,!1)
D.bnK=new B.fK(16,1.3,9.5,!0)
D.bnV=new B.fK(40,2.5,7,!0)
D.bo0=new B.fK(60,1.2,4.8,!0)
D.bnZ=new B.fK(18,5,13.5,!0)
D.bnS=new B.fK(8,2,9.5,!1)
D.bnJ=new B.fK(12,2.5,8,!1)
D.bnw=new B.fK(20,3.5,13.5,!0)
D.bnO=new B.fK(3.5,3,13,!1)
D.yX=new C.bk(D.e1b,[D.bnq,D.bnR,D.bnI,D.bnW,D.bnL,D.bnm,D.bnU,D.bnC,D.bnu,D.bnA,D.bnB,D.bnD,D.bnn,D.bnT,D.bnM,D.bny,D.bo4,D.bnG,D.bnP,D.bnF,D.bnX,D.bo3,D.bo_,D.bnE,D.bnl,D.bnQ,D.bo2,D.ag9,D.F0,D.bnx,D.F0,D.bns,D.F0,D.bnt,D.ag9,D.F0,D.bnH,D.bno,D.bnv,D.aga,D.bnr,D.bnz,D.bnY,D.bnp,D.bnN,D.bo1,D.bnK,D.bnV,D.bo0,D.F0,D.aga,D.bnZ,D.bnS,D.bnJ,D.bnw,D.bnO],C.ax("bk<n,fK>"))
D.e0M={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eCm=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eja=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ej5=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.euF=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.evB=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.euB=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ehg=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.esC=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eCv=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.evW=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ema=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.egZ=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.elf=new C.z("Movement","They pull your legs together and help you balance.")
D.en4=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ejj=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eA2=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eB5=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.esn=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eAQ=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.er5=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ew3=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eh5=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.enr=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.evL=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.erp=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eAY=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eu6=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ehe=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ewC=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ezG=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.exX=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.efB=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.etP=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.etT=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eo6=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eju=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.emU=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.esM=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eyG=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eCs=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ew0=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.efo=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.esX=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eg1=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eyW=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ezZ=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.etm=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eza=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eh7=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eAu=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ekF=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eyl=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.enO=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.erk=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ewk=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eAF=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eAw=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eAB=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.erO=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ex8=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.exU=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eAj=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.etl=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.epJ=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eox=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.etK=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ewd=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eqe=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eqU=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.el0=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ezV=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.elN=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.efZ=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eo5=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.efU=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ejR=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eoa=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.elW=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ewy=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.en7=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eC9=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eoG=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.erI=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eue=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.em2=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.elP=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dn1=new C.bk(D.e0M,[D.eCm,D.eja,D.ej5,D.euF,D.evB,D.euB,D.ehg,D.esC,D.eCv,D.evW,D.ema,D.egZ,D.elf,D.en4,D.ejj,D.eA2,D.eB5,D.esn,D.eAQ,D.er5,D.ew3,D.eh5,D.enr,D.evL,D.erp,D.eAY,D.eu6,D.ehe,D.ewC,D.ezG,D.exX,D.efB,D.etP,D.etT,D.eo6,D.eju,D.emU,D.esM,D.eyG,D.eCs,D.ew0,D.efo,D.esX,D.eg1,D.eyW,D.ezZ,D.etm,D.eza,D.eh7,D.eAu,D.ekF,D.eyl,D.enO,D.erk,D.ewk,D.eAF,D.eAw,D.eAB,D.erO,D.ex8,D.exU,D.eAj,D.etl,D.epJ,D.eox,D.etK,D.ewd,D.eqe,D.eqU,D.el0,D.ezV,D.elN,D.efZ,D.eo5,D.efU,D.ejR,D.eoa,D.elW,D.ewy,D.en7,D.eC9,D.eoG,D.erI,D.eue,D.em2,D.elP],C.ax("bk<n,+(n,n)>"))
D.dn3=new C.hw(A.G,11)
D.dn8=new C.hw(A.G,30)
D.dqf=new B.TS(null)
D.du3=new B.TW(null)
D.du4=new B.TX(null)
D.duh=new B.TY(null)
D.dwi=new B.U_(null)
D.dwj=new B.U0(null)
D.dwk=new B.U1(null)
D.dx7=new B.Un(null)
D.dx9=new B.UC(null)
D.dxa=new B.UD(null)
D.dxc=new B.UE(null)
D.dxK=new B.UL(null)
D.dzF=new B.UP(null)
D.dzG=new B.UR(null)
D.dzH=new B.US(null)
D.dzJ=new B.UT(null)
D.dBj=new B.V9(null)
D.dBl=new B.Vb(null)
D.dBq=new B.Vl(null)
D.dBB=new B.Vm(null)
D.dC6=new B.Vn(null)
D.dDB=new B.Vp(null)
D.dEZ=new B.Vr(null)
D.dF_=new B.Vs(null)
D.dGk=new B.Vv(null)
D.dWd=new B.Vw(null)
D.dWf=new B.Vx(null)
D.dWg=new B.VA(null)
D.dWh=new B.VB(null)
D.dYa=new B.VJ(null)
D.dYb=new B.VK(null)
D.dYj=new B.VR(null)
D.dYs=new B.VV(null)
D.dYt=new B.VW(null)
D.dYu=new B.a7S(null)
D.dZ4=new B.VY(null)
D.e_x=new B.W1(null)
D.e2T=new C.u(0,118)
D.aGf=new C.u(0,13)
D.e2U=new C.u(0,17)
D.e2X=new C.u(0,330)
D.e3_=new C.u(0,-13)
D.aGl=new C.u(0,-14)
D.e30=new C.u(0,-17)
D.e31=new C.u(0,-18)
D.e32=new C.u(0,-19)
D.e33=new C.u(0,-20)
D.e36=new C.u(0,-26)
D.e37=new C.u(0,-28)
D.e38=new C.u(0,-31)
D.e39=new C.u(0,-32)
D.w8=new C.u(0,-6)
D.e3a=new C.u(0,-6771)
D.e3b=new C.u(0,-9)
D.e3d=new C.u(-9.5,-11)
D.e3e=new C.u(10,20)
D.e3g=new C.u(10,-13)
D.e3h=new C.u(10,-22)
D.e3i=new C.u(10,-4)
D.a54=new C.u(11,8)
D.e3k=new C.u(12,2)
D.e3l=new C.u(14,0)
D.e3m=new C.u(14,12)
D.aGp=new C.u(14,8)
D.e3n=new C.u(14,-17)
D.e3o=new C.u(14,-18)
D.aGq=new C.u(14,-3)
D.aGr=new C.u(14,-4)
D.e3p=new C.u(15,0)
D.e3q=new C.u(15,-12)
D.e3r=new C.u(16,-8)
D.e3s=new C.u(18,14)
D.e3t=new C.u(18,-12)
D.aGv=new C.u(20,0)
D.e3z=new C.u(20,15)
D.e3A=new C.u(20,-17)
D.e3B=new C.u(20,-3)
D.e3C=new C.u(21,8)
D.e3E=new C.u(22,10)
D.aGw=new C.u(22,8)
D.e3F=new C.u(24,0)
D.e3G=new C.u(24,2)
D.e3I=new C.u(24,-18)
D.e3J=new C.u(24,-22)
D.e3K=new C.u(25,8)
D.e3L=new C.u(26,0)
D.e3R=new C.u(28,-30)
D.e3W=new C.u(30,18)
D.e3X=new C.u(30,2)
D.e3Y=new C.u(31,19)
D.e3Z=new C.u(32,0)
D.aGz=new C.u(34,0)
D.aGA=new C.u(34,-32)
D.HW=new C.u(36,0)
D.e43=new C.u(3,-1)
D.e46=new C.u(40,3)
D.e4a=new C.u(4,11)
D.e4d=new C.u(4,-2)
D.e4h=new C.u(5,0)
D.e4i=new C.u(5,17)
D.e4j=new C.u(5,6)
D.e4n=new C.u(6,11)
D.e4t=new C.u(8,7)
D.e4u=new C.u(8,-10)
D.e4v=new C.u(8,-14)
D.e4w=new C.u(8,-3)
D.aGE=new C.u(9,0)
D.e4z=new C.u(-20.5,-17.6)
D.e4A=new C.u(-9,18.5)
D.e4D=new C.u(-2.6,-1)
D.e4E=new C.u(1.9,-0.8)
D.e4H=new C.u(-0.22,0.09)
D.e4M=new C.u(2.6,1)
D.e4T=new C.u(-9,12.2)
D.e5a=new C.u(-9,20.5)
D.e5s=new C.u(-10,0)
D.e5t=new C.u(-10,12)
D.aGL=new C.u(-10,4)
D.e5u=new C.u(-11,-2)
D.e5v=new C.u(-13,-5)
D.e5w=new C.u(-14,0)
D.e5x=new C.u(-14,13)
D.e5y=new C.u(-14,2)
D.e5z=new C.u(-14,-12)
D.e5A=new C.u(-14,-19)
D.e5B=new C.u(-14,-23)
D.e5C=new C.u(-15,6)
D.e5D=new C.u(-16,14)
D.e5E=new C.u(-16,-8)
D.e5F=new C.u(-17,10)
D.e5G=new C.u(-17,-18)
D.e5H=new C.u(-17,-8)
D.e5J=new C.u(-18,20)
D.e5K=new C.u(-18,-9)
D.aGN=new C.u(-20,0)
D.e5M=new C.u(-20,16)
D.e5N=new C.u(-20,-9)
D.RQ=new C.u(-22,8)
D.e5O=new C.u(-22,-10)
D.e5P=new C.u(-22,-11)
D.e5Q=new C.u(-24,10)
D.e5R=new C.u(-24,11)
D.e5S=new C.u(-24,14)
D.e5T=new C.u(-24,-22)
D.e5U=new C.u(-25,-11)
D.e5V=new C.u(-26,0)
D.e5W=new C.u(-26,-18)
D.e5X=new C.u(-2,9)
D.e5Y=new C.u(-2,-10)
D.e5Z=new C.u(-2,-20)
D.e6_=new C.u(-2,-9)
D.e60=new C.u(-32,0)
D.aGP=new C.u(-34,0)
D.e65=new C.u(-40,3)
D.e67=new C.u(-4,11)
D.e68=new C.u(-4,-17)
D.e69=new C.u(-4,-2)
D.e6b=new C.u(-5,0)
D.e6c=new C.u(-5,20)
D.e6d=new C.u(-5,6)
D.e6e=new C.u(-6,26)
D.e6f=new C.u(-6,6)
D.e6g=new C.u(-6,-42)
D.e6h=new C.u(-7,-19)
D.e6i=new C.u(-7,-24)
D.e6j=new C.u(-8,-9)
D.a58=new C.u(-9,0)
D.e6k=new C.u(-9,1)
D.e6l=new C.u(-9,-23)
D.fgd=new C.x("Thinking\u2026",null,A.hf,null,null,null,null,null,null,null,null,null)
D.e7h=new C.D(A.kq,D.fgd,null)
D.fw6=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e7r=new C.D(A8.vq,D.fw6,null)
D.bva=new C.Q(4,0,4,14)
D.fbD=new C.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new C.x("Games and little helpers for a spare minute.",null,D.fbD,null,null,null,null,null,null,null,null,null)
D.e7B=new C.D(D.bva,D.fh7,null)
D.fsX=new C.x("Tap to throw in a star",null,A.kG,null,null,null,null,null,null,null,null,null)
D.b4C=new C.cp(A.A,null,null,D.fsX,null)
D.edv=new C.cL(0,null,0,14,null,null,D.b4C,null)
D.d6R=w([A.iO,A.bl],x.O)
D.aLG=new C.bT(A.A,0.5,A.x,null,0,D.d6R,null,null)
D.eed=new C.bT(A.A,0.5,A.x,null,0,D.axW,null,null)
D.cZt=w([A.c,A.bJ],x.O)
D.eef=new C.bT(A.A,0.5,A.x,null,0,D.cZt,null,null)
D.eeg=new C.bT(A.A,0.5,A.x,null,0,M.ax0,null,null)
D.dey=w([A.bO,A.je],x.O)
D.aLH=new C.bT(A.A,0.5,A.x,null,0,D.dey,null,null)
D.cEx=w([A.c,A.bO],x.O)
D.eek=new C.bT(A.rW,0.5,A.x,null,0,D.cEx,null,null)
D.bbV=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bhb=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cYw=w([D.bbV,D.afh,D.bhb],x.O)
D.d4V=w([0,0.7,1],x.n)
D.eem=new C.bT(A.rW,0.5,A.x,null,0,D.cYw,D.d4V,null)
D.cv1=w([A.oD,A.aF,A.K],x.O)
D.dbq=w([0.3,0.7,1],x.n)
D.eeo=new C.bT(A.A,0.5,A.x,null,0,D.cv1,D.dbq,null)
D.bkW=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dcN=w([A.fa,D.bkW],x.O)
D.eeq=new C.bT(A.rW,0.5,A.x,null,0,D.dcN,null,null)
D.cxP=w([A.dA,A.cC],x.O)
D.eer=new C.bT(A.A,0.5,A.x,null,0,D.cxP,null,null)
D.cTX=w([A.oD,A.aF,A.fk],x.O)
D.ees=new C.bT(A.A,0.5,A.x,null,0,D.cTX,null,null)
D.cMj=w([A.h3,A.aM,A.d5],x.O)
D.eeu=new C.bT(A.rW,0.5,A.x,null,0,D.cMj,null,null)
D.d7o=w([A.je,L.mh],x.O)
D.eev=new C.bT(A.rW,0.5,A.x,null,0,D.d7o,null,null)
D.bc8=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.ba9=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cWa=w([D.bc8,D.ba9],x.O)
D.eex=new C.bT(A.A,0.5,A.x,null,0,D.cWa,null,null)
D.bgB=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.beA=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.beE=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dgO=w([D.bgB,D.beA,D.beE],x.O)
D.cSK=w([0,0.65,1],x.n)
D.eey=new C.bT(M.a9D,0.5,A.x,null,0,D.dgO,D.cSK,null)
D.eez=new C.bT(A.A,0.5,A.x,null,0,D.auq,null,null)
D.ddN=w([A.lH,A.aF,A.fk],x.O)
D.eeE=new C.bT(A.A,0.5,A.x,null,0,D.ddN,null,null)
D.dfj=w([A.je,A.hG],x.O)
D.eeH=new C.bT(A.A,0.5,A.x,null,0,D.dfj,null,null)
D.aLL=new C.aT(9,9)
D.eeQ=new C.aT(1.4,1.4)
D.efv=new C.z(0,-4)
D.ekC=new C.z(0.22,4)
D.erG=new C.z(0.8,-4)
D.eAx=new C.z(0.58,4)
D.eDh=new C.bo("Moon",1.62,4291941851)
D.eDR=new C.bo("Neptune",11.15,4284524026)
D.eEu=new C.bo("Sun",274,4294688548)
D.eEK=new C.bo("Mercury",3.7,4288455599)
D.eEQ=new C.bo("Earth",9.81,4281908728)
D.eES=new C.bo("Mars",3.71,4294472049)
D.eFa=new C.bo("Venus",8.87,4294759245)
D.eFg=new C.bo("Saturn",10.44,4294829706)
D.eFD=new C.bo("Jupiter",24.79,4294677052)
D.eJd=new C.a9(10,-8,18,-2)
D.eJe=new C.a9(14,-14,20,14)
D.eJf=new C.a9(20,-2,30,2)
D.eJh=new C.a9(4,-13,30,-3)
D.eJj=new C.a9(8,-7,12,7)
D.eJp=new C.a9(-12,12,12,19)
D.eJq=new C.a9(-12,14,12,22)
D.eJr=new C.a9(-12,-22,12,8)
D.eJs=new C.a9(-12,-25,12,19)
D.eJt=new C.a9(-12,-26,12,-6)
D.eJu=new C.a9(-12,-4,12,14)
D.eJv=new C.a9(-12,-6,10,6)
D.eJw=new C.a9(-14,20,14,24)
D.eJx=new C.a9(-14,6,14,10)
D.eJy=new C.a9(-14,-17,14,15)
D.eJz=new C.a9(-14,-26,14,18)
D.eJA=new C.a9(-14,-4,14,20)
D.eJB=new C.a9(-15,-29,15,25)
D.eJC=new C.a9(-16,-16,16,16)
D.eJD=new C.a9(-16,-22,-9,18)
D.eJE=new C.a9(-16,-24,16,-10)
D.eJF=new C.a9(-16,-2,16,20)
D.eJH=new C.a9(-18,20,18,24)
D.eJI=new C.a9(-18,-18,18,20)
D.eJJ=new C.a9(-20,12,20,22)
D.eJK=new C.a9(-20,-28,20,26)
D.eJL=new C.a9(-22,14,22,18)
D.aMa=new C.a9(-22,-26,22,24)
D.eJM=new C.a9(-22,-3,22,3)
D.eJN=new C.a9(-22,-4,22,12)
D.eJO=new C.a9(-24,-12,10,22)
D.eJP=new C.a9(-24,-14,22,8)
D.eJQ=new C.a9(-24,-6,24,20)
D.aMb=new C.a9(-24,-9,24,9)
D.eJR=new C.a9(-25,14,25,19)
D.eJS=new C.a9(-26,-14,14,8)
D.eJT=new C.a9(-26,-4,26,20)
D.eJU=new C.a9(-26,-6,4,6)
D.aMc=new C.a9(-28,-13,28,13)
D.eJV=new C.a9(-28,-16,28,16)
D.eJW=new C.a9(-28,-16,28,8)
D.eJX=new C.a9(-28,-22,28,22)
D.eJY=new C.a9(-30,-12,30,14)
D.eJZ=new C.a9(-30,-14,0,14)
D.eK_=new C.a9(-30,-18,30,20)
D.eK0=new C.a9(-30,-28,30,14)
D.eK1=new C.a9(-30,-2,30,18)
D.eK2=new C.a9(-30,-4,30,18)
D.eK3=new C.a9(-32,-17,32,17)
D.eK4=new C.a9(-32,-28,32,18)
D.eK5=new C.a9(-33,-21,33,17)
D.eK6=new C.a9(-34,14,34,26)
D.a6_=new C.a9(-34,-18,34,18)
D.eK7=new C.a9(-34,-4,34,7)
D.eK8=new C.a9(-36,-24,36,20)
D.eK9=new C.a9(-38,-22,38,22)
D.eKa=new C.a9(-3,12,3,22)
D.eKb=new C.a9(-3,5,3,15)
D.eKd=new C.a9(-46,-34,46,28)
D.eKe=new C.a9(-48,-3,48,3)
D.eKh=new C.a9(-6,18,24,24)
D.eKi=new C.a9(-6,5,6,12)
D.eKj=new C.a9(-6,-22,6,-15)
D.eKk=new C.a9(-9,-16,9,22)
D.eKl=new C.a9(-4.5,-24,4.5,-21.2)
D.eKn=new C.a9(14,-9,17.5,9)
D.e2j={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aN3=new C.eI(D.e2j,5,x.R)
D.e1W={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eNi=new C.eI(D.e1W,10,x.R)
D.ePh=new C.ar(24,44)
D.ePm=new C.ar(300,300)
D.ePG=new C.ar(54,38)
D.ePN=new C.ar(66,38)
D.b5V=new C.fj(2,null,null,null,null,A.bt,null,null,null,null)
D.eQK=new C.a7(16,16,D.b5V,null)
D.aO2=new C.hM(3,12,12,0.82,null)
D.fxM=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOd=new C.b1(D.fxM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d7r=w([A.cb,A.c4,A.b2,A.aR,A.pt,A.cb],x.O)
D.eWC=new C.fT(A.A,0,6.283185307179586,A.x,D.d7r,null,null)
D.f4B=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PY,null,null,null)
D.eXR=new C.eq("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f4B)
D.aQD=new C.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new C.eq("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQD)
D.f2_=new C.G(!0,A4.Ky,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXV=new C.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f2_)
D.f6P=new C.G(!0,A.kf,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new C.eq("AI",null,null,A.cO,null,null,null,null,null,null,D.f6P)
D.f1L=new C.G(!0,A.c1,null,null,null,null,15,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY1=new C.eq("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f1L)
D.aP1=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYi=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYP=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new C.G(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new C.G(!0,A.c1,null,null,null,null,11,A.N,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZX=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new C.G(!0,A.aS,null,null,null,null,12,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new C.cR(A.hJ,A.dE,6)
D.d1c=w([D.eNP],x.q)
D.f0h=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d1c,null,null,null)
D.f0k=new C.G(!0,A.eu,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0n=new C.G(!0,A.c,null,null,null,null,17,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0p=new C.G(!0,A.c1,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f17=new C.G(!0,A.aA,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f18=new C.G(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f22=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2x=new C.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f31=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNS=new C.cR(A.aX,A.J,3)
D.ayb=w([D.eNS],x.q)
D.f34=new C.G(!0,A.c,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayb,null,null,null)
D.f39=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3Q=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PY,null,null,null)
D.f4i=new C.G(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4Q=new C.G(!0,A.tm,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new C.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new C.G(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5A=new C.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5G=new C.G(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f66=new C.G(!0,A.c1,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6k=new C.G(!0,A.n2,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6l=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6A=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ2=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNG=new C.cR(A.w,A.J,5)
D.cQo=w([D.eNG],x.q)
D.f79=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cQo,null,null,null)
D.f7e=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayb,null,null,null)
D.f7t=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new C.G(!0,A.fy,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7P=new C.G(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8j=new C.G(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new C.G(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9u=new C.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9D=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQo=new C.G(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa5=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faf=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fam=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faG=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQA=new C.G(!0,A.ad,null,null,null,null,12,A.N,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faJ=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbt=new C.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7Z=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbS=new C.G(!0,A.tm,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new C.G(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0s=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcA=new C.x("\u26a0\ufe0f ",null,D.f0s,null,null,null,null,null,null,null,null,null)
D.fcM=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wm,null,null,null,null,null,null,null,null,null)
D.fdc=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mL,null,null,null,null,null,null,null,null,null)
D.feg=new C.x("Pick one, then change it and see what happens.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.fek=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f1w=new C.G(!0,A.ad,null,null,null,null,null,A.N,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffe=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.f1w,null,null,null,null,null,null,null,null,null)
D.ffC=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7e,null,null,null,null,null,null,null,null,null)
D.fgK=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fhj=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fho=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new C.x("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.fic=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7l,null,null,null,null,null,null,null,null,null)
D.f5L=new C.G(!0,A.jd,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f5L,null,null,null,null,null,null,null,null,null)
D.fkJ=new C.x("YOUR DECODING",null,Q.mL,null,null,null,null,null,null,null,null,null)
D.fkV=new C.x("5G",null,U.aPr,null,null,null,null,null,null,null,null,null)
D.f84=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm2=new C.x("WHAT HAPPENS",null,D.f84,null,null,null,null,null,null,null,null,null)
D.fnK=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fop=new C.x("Change the words and pictures on the three slabs.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.foB=new C.x("All the parts and wires will be removed.",null,A.hE,null,null,null,null,null,null,null,null,null)
D.foV=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fql=new C.x("INTERCEPTED",null,Q.mL,null,null,null,null,null,null,null,null,null)
D.fqF=new C.x("\ud83c\udfaf Challenges",null,A.dr,null,null,null,null,null,null,null,null,null)
D.fr9=new C.x("Remove this part",null,V.aP4,null,null,null,null,null,null,null,null,null)
D.frr=new C.x("Clear the board?",null,A.dm,null,null,null,null,null,null,null,null,null)
D.f7z=new C.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frG=new C.x("How the Lab works",null,D.f7z,null,null,null,null,null,null,null,null,null)
D.f_8=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new C.x("Electronics Lab",null,D.f_8,null,null,null,null,A.a2,null,1,null,null)
D.fs1=new C.x("?",null,M.aQx,null,null,null,null,null,null,null,null,null)
D.f5F=new C.G(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs5=new C.x("Planet Earth",null,D.f5F,null,null,null,null,null,null,null,null,null)
D.fti=new C.x("Ready-made circuits",null,A.dr,null,null,null,null,null,null,null,null,null)
D.ftT=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fub=new C.x("UNIVERSE EXPLORER",null,I.a7k,null,null,null,null,null,null,null,null,null)
D.fwF=new C.x("SECRET VERSION",null,Q.mL,null,null,null,null,null,null,null,null,null)
D.fap=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.fap,null,null,null,null,null,null,null,null,null)
D.fyo=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7e,null,null,null,null,null,null,null,null,null)
D.fyR=new C.x("NGMY",null,A.uJ,null,null,null,null,null,null,null,null,null)
D.fz4=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Tz,null,null,null,null,null,null,null,null,null)
D.fzr=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kF,null,null,null,null,null,null,null,null,null)
D.fAn=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.fAp=new C.x("TOOLBOX",null,I.a7k,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hcR=null
$.hcQ=null
$.hiU=0
$.hKL=C.T(x.N,x.k)
$.hLl=C.T(x.N,x.k)
$.hcb=null
$.hL6=C.T(x.N,x.k)
$.hM9=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"igD","bDo",()=>{var v="led"
return C.a([B.axA("Both together","Make the light glow only when BOTH switches are ON.",2,new B.ffa(),v),B.axA("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.ffb(),v),B.axA("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.ffc(),v),B.axA("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.ffj(),v),B.axA("Not both","Make the light go OFF only when both switches are ON.",2,new B.ffk(),v),B.axA("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.ffl(),"buzzer")],C.ax("O<ba4>"))})
w($,"ih4","bDp",()=>C.a([B.ox("UNIVERSE","Earth, space and gravity",A.a0e,A.aR,new B.ffB()),B.ox("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.a_C,A.aR,new B.ffC()),B.ox("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_t,A.b2,new B.ffD()),B.ox("TOOLBOX","Converter, clock, games",T.aky,A.cs,new B.ffO()),B.ox("MOLECULE MAKER","Join atoms into real molecules",A.Na,A.hw,new B.ffQ()),B.ox("DNA LAB","Copy DNA, build a protein",D.a_t,A.bW,new B.ffR()),B.ox("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yd,A.b2,new B.ffS()),B.ox("BALANCE LAB","Levers, weight and torque",D.bFA,A.aM,new B.ffT()),B.ox("GEAR LAB","Teeth, speed and force",A.BF,A.cs,new B.ffU()),B.ox("LASER MAZE","Bend the beam with mirrors",I.akX,A.ay,new B.ffV()),B.ox("LIGHT MIXER","Match colours with light",D.bDg,A.b8,new B.ffW()),B.ox("CIPHER LAB","Make and crack secret codes",A.yo,A.aR,new B.ffE()),B.ox("REACTION LAB","Wire parts together",A.ys,A.bu,new B.ffF()),B.ox("SPARK PAINTER","Paint with light",A.a_v,A.bW,new B.ffG()),B.ox("ROCKET LANDER","Land softly on the pad",A.nj,A.aR,new B.ffH()),B.ox("ORBIT STUDIO","Slingshot planets",A.mv,A.cs,new B.ffI()),B.ox("SWARM STUDIO","A living school of fish",A.Na,A.b2,new B.ffJ()),B.ox("CHAIN BURST","One tap, a whole chain",A.h8,A.bW,new B.ffK()),B.ox("TITLE ANIMATOR","Make a moving title",A.yk,A.c4,new B.ffL()),B.ox("CIRCUIT LAB","Connect logic, learn it",A.a_W,A.co,new B.ffM()),B.ox("MARBLE MUSIC","Marbles ring the notes",D.bCW,A.b8,new B.ffN()),B.ox("ORBIT SEQUENCER","Planets play the tune",D.bFn,A.bt,new B.ffP())],C.ax("O<brU>")))
w($,"iiz","qc",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qe[v]
t.n(0,u.a,u)}return t})
w($,"igE","ahr",()=>C.a([B.Fo("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.ffm()),B.Fo("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.ffn()),B.Fo("Spin the motor","A battery and a motor in a loop will make it spin.",new B.ffo()),B.Fo("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.ffp()),B.Fo("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.ffq()),B.Fo("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.ffd()),B.Fo("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.ffe()),B.Fo("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fff()),B.Fo("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.ffg()),B.Fo("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.ffh()),B.Fo("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.ffi())],C.ax("O<ba5>")))
w($,"ih6","hrh",()=>C.a([B.a0q("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cg,new B.fg3()),B.a0q("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cb,A.bA,new B.fg4()),B.a0q("Breathe","Calm down in a minute","\ud83e\udee7",A.hw,A.cA,new B.fg5()),B.a0q("Draw Pad","Sketch and share","\ud83c\udfa8",A.bB,A.b7,new B.fg6()),B.a0q("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.cf,new B.fg7()),B.a0q("Simon Sounds","Copy the tune","\ud83c\udfb5",A.c4,A.bk,new B.fg8()),B.a0q("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.fg9()),B.a0q("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new B.fga())],C.ax("O<bte>")))
w($,"ih5","hrg",()=>C.a([B.aeK("EARTH GLOBE","Turn it, tap a country",A.mv,A.aR,new B.ffX()),B.aeK("SOLAR SYSTEM","The Sun and its worlds",D.bD_,A.aM,new B.ffY()),B.aeK("GRAVITY LAB","Drop, weigh, orbit",D.alG,A.cs,new B.ffZ()),B.aeK("BLACK HOLE","Throw in a star",A.FC,A.bt,new B.fg_()),B.aeK("GALAXY","Build, tilt, collide",A.y1,A.h2,new B.fg0()),B.aeK("SIZE COMPARE","Earth next to a star",D.bDi,A.bW,new B.fg1()),B.aeK("SEASONS & MOON","Why it is summer",A.vz,A.bu,new B.fg2())],C.ax("O<bt9>")))})()};
(a=>{a["XGGqGtXcbEYuR5EKvYyreKrgsVY="]=a.current})($__dart_deferred_initializers__);