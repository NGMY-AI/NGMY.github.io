((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Aa,A2,A3,I,P,A4,Ab,A5,A6,G,Ac,Ad,A7,Ae,Y,Af,Ag,N,Q,Ah,Ai,Z,O,V,Aj,Ak,R,M,Al,W,K,S,Am,E,F,L,B={
byD(d){return B.hPk(d)},
hPk(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byD=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qM(C.n3(""),d,A.hq,null).cO(0,A.XV),$async$byD)
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
return C.i($async$byD,v)},
i_V(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PV[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hr(D.PV,new B.fv4())
if(w==null)w=A.d.gI(D.PV)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qc().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajt(w.a,w.b,m,w,s,!1)},
hUD(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.L(D.Qj,new B.flz(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i7M(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cL(b2,"{")
v=A.a.oD(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aI(0,A.a.ap(b2,w,v+1),b1))
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
for(a9=0;a9<4;++a9){m=D.dg6[a9]
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
return new B.ajt(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hZv(d){var w,v,u=B.h4w()
d.B(u)
for(w=0;w<60;++w)u.v1(0,0.03333333333333333)
v=u.a
return A.d.b5(v,new B.fs2(u))&&!A.d.d7(v,new B.fs3())},
hZu(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qc().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dew,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hNQ(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i_U(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qc().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qj[u]
if(A.d.b5(w,new B.fv1(s)))if(!C.cS(r,s.b.toLowerCase(),0))v=C.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fv2(e),C.U(w).k("a_<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cK(w,0,new B.fv3())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qc().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajt:function ajt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fv4:function fv4(){},
flz:function flz(){},
fs2:function fs2(d){this.a=d},
fs3:function fs3(){},
fv1:function fv1(d){this.a=d},
fv2:function fv2(d){this.a=d},
fv3:function fv3(){},
V5:function V5(d,e){this.c=d
this.a=e},
bji:function bji(d,e,f,g,h){var _=this
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
e6t:function e6t(d){this.a=d},
e6u:function e6u(d,e,f){this.a=d
this.b=e
this.c=f},
e6v:function e6v(d){this.a=d},
e6G:function e6G(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6C:function e6C(d){this.a=d},
e6A:function e6A(d,e){this.a=d
this.b=e},
e6B:function e6B(d,e,f){this.a=d
this.b=e
this.c=f},
e6D:function e6D(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e6y:function e6y(d){this.a=d},
e6z:function e6z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6E:function e6E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e6x:function e6x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6w:function e6w(d,e){this.a=d
this.b=e},
e6K:function e6K(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6L:function e6L(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6M:function e6M(d,e){this.a=d
this.b=e},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6P:function e6P(d,e){this.a=d
this.b=e},
byZ(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPq,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hhZ(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bY(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.W0,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FS:function FS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uM:function uM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vx:function Vx(d){this.a=d},
aDH:function aDH(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fq$=h
_.l_$=i
_.fS$=j
_.fs$=k
_.bt$=l
_.a8$=m
_.c=_.a=null},
emz:function emz(){},
emT:function emT(d){this.a=d},
emS:function emS(d,e){this.a=d
this.b=e},
emU:function emU(){},
emV:function emV(){},
emB:function emB(d,e,f){this.a=d
this.b=e
this.c=f},
emA:function emA(d,e){this.a=d
this.b=e},
emq:function emq(d){this.a=d},
emr:function emr(d){this.a=d},
ems:function ems(d){this.a=d},
emt:function emt(d){this.a=d},
emu:function emu(d){this.a=d},
emv:function emv(d){this.a=d},
emw:function emw(d){this.a=d},
emx:function emx(d){this.a=d},
emy:function emy(d){this.a=d},
emo:function emo(d){this.a=d},
emp:function emp(d){this.a=d},
emn:function emn(d){this.a=d},
emM:function emM(d,e){this.a=d
this.b=e},
emH:function emH(d){this.a=d},
emI:function emI(d){this.a=d},
emE:function emE(d){this.a=d},
emJ:function emJ(d){this.a=d},
emD:function emD(d){this.a=d},
emK:function emK(d){this.a=d},
emL:function emL(d){this.a=d},
emC:function emC(d){this.a=d},
emN:function emN(d,e){this.a=d
this.b=e},
emG:function emG(d,e){this.a=d
this.b=e},
emO:function emO(d){this.a=d},
emP:function emP(d){this.a=d},
emQ:function emQ(d){this.a=d},
emR:function emR(d){this.a=d},
emF:function emF(d){this.a=d},
bgh:function bgh(d,e){this.b=d
this.a=e},
aLz:function aLz(){},
bwB:function bwB(){},
cEA(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEA=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qP().jz(0,"assets/data/body3d.bin"),$async$cEA)
case 3:d=a1
$.hdk=J.eZ(A.dD.gaN(d),d.byteOffset,d.byteLength)
t=C.aRE(d)
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
e=D.d3R[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2H(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aXo))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9o(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEA,v)},
aRr:function aRr(d,e,f){this.a=d
this.b=e
this.c=f},
a2H:function a2H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9o:function b9o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TY:function TY(d){this.a=d},
aC6:function aC6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fq$=s
_.l_$=t
_.fS$=u
_.fs$=v
_.bt$=w
_.a8$=a0
_.c=_.a=null},
dEv:function dEv(d){this.a=d},
dEu:function dEu(d,e){this.a=d
this.b=e},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE8:function dE8(){},
dEw:function dEw(){},
dE9:function dE9(d,e){this.a=d
this.b=e},
dEa:function dEa(d){this.a=d},
dEb:function dEb(){},
dEc:function dEc(d){this.a=d},
dEe:function dEe(d,e){this.a=d
this.b=e},
dEd:function dEd(d){this.a=d},
dE4:function dE4(d,e,f){this.a=d
this.b=e
this.c=f},
dE5:function dE5(d){this.a=d},
dE6:function dE6(d){this.a=d},
dEl:function dEl(d){this.a=d},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEo:function dEo(d){this.a=d},
dEk:function dEk(d,e){this.a=d
this.b=e},
dEp:function dEp(d,e){this.a=d
this.b=e},
dEj:function dEj(d,e){this.a=d
this.b=e},
dEq:function dEq(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEr:function dEr(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEs:function dEs(d){this.a=d},
dEg:function dEg(d){this.a=d},
dEt:function dEt(d){this.a=d},
dEf:function dEf(d){this.a=d},
aKB:function aKB(){},
aKC:function aKC(){},
c_U:function c_U(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_V:function c_V(d,e){this.a=d
this.b=e},
c_W:function c_W(d){this.a=d},
axB(d,e,f,g,h){return new B.ba6(d,e,f,g,h)},
fWk(d,e,f,g,h,i){return $.hLd.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cLm(d,e,f,i,g,h))},
xY:function xY(d,e,f,g,h){var _=this
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
ba6:function ba6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffB:function ffB(){},
ffC:function ffC(){},
ffD:function ffD(){},
ffK:function ffK(){},
ffL:function ffL(){},
ffM:function ffM(){},
U2:function U2(d){this.a=d},
aC9:function aC9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fq$=m
_.l_$=n
_.fS$=o
_.fs$=p
_.bt$=q
_.a8$=r
_.c=_.a=null},
dGG:function dGG(d){this.a=d},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGn:function dGn(){},
dGH:function dGH(){},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGo:function dGo(d,e,f){this.a=d
this.b=e
this.c=f},
dGd:function dGd(){},
dGe:function dGe(){},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e,f){this.a=d
this.b=e
this.c=f},
dGp:function dGp(){},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGr:function dGr(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGl:function dGl(d){this.a=d},
dGc:function dGc(d,e,f){this.a=d
this.b=e
this.c=f},
dGA:function dGA(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGB:function dGB(d){this.a=d},
dGy:function dGy(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGD:function dGD(d,e){this.a=d
this.b=e},
dGE:function dGE(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGF:function dGF(d,e){this.a=d
this.b=e},
bap:function bap(d,e){this.b=d
this.a=e},
cLm:function cLm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKH:function aKH(){},
bwk:function bwk(){},
hC2(){return new B.N5(null)},
ox(d,e,f,g,h){return new B.brW(d,e,f,g,h)},
bqm(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fWQ(d,e){var w=d*0.23
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
aCq:function aCq(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMu:function dMu(d){this.a=d},
dMx:function dMx(d,e){this.a=d
this.b=e},
dMw:function dMw(d){this.a=d},
brW:function brW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fg1:function fg1(){},
fg2:function fg2(){},
fg3:function fg3(){},
fge:function fge(){},
fgg:function fgg(){},
fgh:function fgh(){},
fgi:function fgi(){},
fgj:function fgj(){},
fgk:function fgk(){},
fgl:function fgl(){},
fgm:function fgm(){},
fg4:function fg4(){},
fg5:function fg5(){},
fg6:function fg6(){},
fg7:function fg7(){},
fg8:function fg8(){},
fg9:function fg9(){},
fga:function fga(){},
fgb:function fgb(){},
fgc:function fgc(){},
fgd:function fgd(){},
fgf:function fgf(){},
bqn:function bqn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXf:function eXf(d){this.a=d},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXc:function eXc(d){this.a=d},
eXg:function eXg(d){this.a=d},
eXd:function eXd(d,e){this.a=d
this.b=e},
aeu:function aeu(d,e,f){this.c=d
this.d=e
this.a=f},
adm:function adm(d,e,f){this.c=d
this.d=e
this.a=f},
PO:function PO(d,e,f,g,h,i,j,k,l,m){var _=this
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
brl:function brl(d,e){this.b=d
this.a=e},
bqR:function bqR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b95:function b95(d,e){this.b=d
this.a=e},
aGH:function aGH(d,e){this.c=d
this.a=e},
aGI:function aGI(d,e,f){var _=this
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
eWW:function eWW(d){this.a=d},
eWV:function eWV(d){this.a=d},
eWU:function eWU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWT:function eWT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWR:function eWR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWQ:function eWQ(d,e,f){this.a=d
this.b=e
this.c=f},
eWS:function eWS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eWP:function eWP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eX3:function eX3(d){this.a=d},
eX2:function eX2(d){this.a=d},
eX4:function eX4(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX6:function eX6(d,e){this.a=d
this.b=e},
eX1:function eX1(d,e,f){this.a=d
this.b=e
this.c=f},
eX7:function eX7(d,e,f){this.a=d
this.b=e
this.c=f},
eX0:function eX0(d){this.a=d},
eWX:function eWX(d){this.a=d},
eX8:function eX8(d){this.a=d},
eX9:function eX9(d){this.a=d},
eX_:function eX_(d,e){this.a=d
this.b=e},
eXa:function eXa(d,e){this.a=d
this.b=e},
eWZ:function eWZ(d,e){this.a=d
this.b=e},
eXb:function eXb(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eWN:function eWN(){},
eWO:function eWO(){},
bq_:function bq_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpr:function bpr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9L:function b9L(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpt:function bpt(d,e,f){this.b=d
this.c=e
this.a=f},
btq:function btq(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMq:function aMq(){},
hjo(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bgg(d,e,f,g,h,i){return $.hLO.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dgk(d,e,f,i,g,h))},
a_W:function a_W(d,e){this.a=d
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
YT:function YT(d,e){this.a=d
this.b=e},
aek:function aek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a08:function a08(d,e,f,g,h,i){var _=this
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
abd:function abd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abu:function abu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adq:function adq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bge:function bge(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bs$=_.bH$=0},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgm:function dgm(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgy:function dgy(d){this.a=d},
FE:function FE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vw:function Vw(d){this.a=d},
aDG:function aDG(d,e,f,g,h,i,j){var _=this
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
_.a8$=j
_.c=_.a=null},
elU:function elU(d){this.a=d},
elJ:function elJ(d){this.a=d},
elL:function elL(){},
elM:function elM(){},
elP:function elP(){},
elQ:function elQ(d,e,f){this.a=d
this.b=e
this.c=f},
elR:function elR(d){this.a=d},
elS:function elS(d){this.a=d},
elN:function elN(){},
elO:function elO(d){this.a=d},
emj:function emj(d){this.a=d},
elT:function elT(){},
elF:function elF(d){this.a=d},
elW:function elW(d){this.a=d},
elV:function elV(d){this.a=d},
elY:function elY(){},
elX:function elX(d,e){this.a=d
this.b=e},
elI:function elI(){},
elG:function elG(d){this.a=d},
elH:function elH(d){this.a=d},
emh:function emh(d){this.a=d},
emg:function emg(d){this.a=d},
emi:function emi(d){this.a=d},
em7:function em7(d,e){this.a=d
this.b=e},
emf:function emf(d){this.a=d},
emd:function emd(d){this.a=d},
eme:function eme(d){this.a=d},
emc:function emc(d){this.a=d},
emb:function emb(d){this.a=d},
em8:function em8(d){this.a=d},
em9:function em9(d){this.a=d},
ema:function ema(d){this.a=d},
elK:function elK(){},
em3:function em3(d){this.a=d},
em4:function em4(d){this.a=d},
em2:function em2(d){this.a=d},
em5:function em5(d){this.a=d},
em1:function em1(d){this.a=d},
em6:function em6(d){this.a=d},
em0:function em0(d){this.a=d},
em_:function em_(d){this.a=d},
elZ:function elZ(d,e){this.a=d
this.b=e},
bgf:function bgf(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgk:function dgk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLx:function aLx(){},
bkP:function bkP(d,e,f,g,h){var _=this
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
VL:function VL(d){this.a=d},
bjT:function bjT(d,e,f,g,h,i,j,k){var _=this
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
_.a8$=k
_.c=_.a=null},
exZ:function exZ(d){this.a=d},
exX:function exX(d){this.a=d},
exY:function exY(){},
exA:function exA(){},
exz:function exz(){},
exJ:function exJ(d,e){this.a=d
this.b=e},
exL:function exL(d){this.a=d},
exP:function exP(d){this.a=d},
exK:function exK(d){this.a=d},
exQ:function exQ(d){this.a=d},
exR:function exR(d){this.a=d},
exS:function exS(d,e){this.a=d
this.b=e},
exI:function exI(d,e){this.a=d
this.b=e},
exT:function exT(d){this.a=d},
exH:function exH(d){this.a=d},
exU:function exU(d,e){this.a=d
this.b=e},
exG:function exG(d,e){this.a=d
this.b=e},
exV:function exV(d){this.a=d},
exF:function exF(d,e){this.a=d
this.b=e},
exW:function exW(d){this.a=d},
exE:function exE(d){this.a=d},
exM:function exM(d){this.a=d},
exD:function exD(d){this.a=d},
exN:function exN(d){this.a=d},
exC:function exC(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exB:function exB(d,e){this.a=d
this.b=e},
brg:function brg(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VX:function VX(d){this.a=d},
aDW:function aDW(d,e,f,g){var _=this
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
_.a8$=g
_.c=_.a=null},
eEy:function eEy(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e,f){this.a=d
this.b=e
this.c=f},
eEA:function eEA(d){this.a=d},
eEx:function eEx(){},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e){this.a=d
this.b=e},
eED:function eED(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEs:function eEs(d,e){this.a=d
this.b=e},
aLG:function aLG(){},
aLM:function aLM(){},
a_q:function a_q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vt:function Vt(d){this.a=d},
aDy:function aDy(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fq$=h
_.l_$=i
_.fS$=j
_.fs$=k
_.bt$=l
_.a8$=m
_.c=_.a=null},
eiq:function eiq(d){this.a=d},
eir:function eir(d,e){this.a=d
this.b=e},
eie:function eie(d,e){this.a=d
this.b=e},
eif:function eif(d){this.a=d},
eic:function eic(d){this.a=d},
eid:function eid(d){this.a=d},
eib:function eib(d){this.a=d},
eig:function eig(d){this.a=d},
eia:function eia(d,e){this.a=d
this.b=e},
eii:function eii(d){this.a=d},
ei9:function ei9(d,e){this.a=d
this.b=e},
eij:function eij(d){this.a=d},
ei8:function ei8(d,e){this.a=d
this.b=e},
eik:function eik(d){this.a=d},
ei7:function ei7(d){this.a=d},
eil:function eil(d){this.a=d},
ei6:function ei6(d){this.a=d},
eim:function eim(d){this.a=d},
ei5:function ei5(d){this.a=d},
ein:function ein(d){this.a=d},
eio:function eio(d){this.a=d},
eip:function eip(d){this.a=d},
ei4:function ei4(d){this.a=d},
eih:function eih(d){this.a=d},
bkC:function bkC(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abk:function abk(d,e,f){this.a=d
this.b=e
this.c=f},
VS:function VS(d){this.a=d},
bjY:function bjY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fq$=i
_.l_$=j
_.fS$=k
_.fs$=l
_.bt$=m
_.a8$=n
_.c=_.a=null},
eE_:function eE_(d){this.a=d},
eE0:function eE0(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d){this.a=d},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d){this.a=d},
eDM:function eDM(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDT:function eDT(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDV:function eDV(d){this.a=d},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDX:function eDX(d){this.a=d},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eDB:function eDB(d,e){this.a=d
this.b=e},
bs7:function bs7(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abN:function abN(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
U0:function U0(d){this.a=d},
aC8:function aC8(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fq$=h
_.l_$=i
_.fS$=j
_.fs$=k
_.bt$=l
_.a8$=m
_.c=_.a=null},
dFP:function dFP(d){this.a=d},
dFO:function dFO(d,e){this.a=d
this.b=e},
dFQ:function dFQ(){},
dFR:function dFR(d){this.a=d},
dFF:function dFF(d,e){this.a=d
this.b=e},
dFI:function dFI(d){this.a=d},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFG:function dFG(d,e){this.a=d
this.b=e},
dFM:function dFM(d,e,f){this.a=d
this.b=e
this.c=f},
dFL:function dFL(d){this.a=d},
dFJ:function dFJ(d){this.a=d},
dFK:function dFK(d){this.a=d},
dFN:function dFN(d){this.a=d},
ba5:function ba5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKU:function cKU(d){this.a=d},
aKF:function aKF(){},
bwj:function bwj(){},
aLu:function aLu(){},
bwA:function bwA(){},
aLJ:function aLJ(){},
bwI:function bwI(){},
FA:function FA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acC:function acC(d,e,f){this.a=d
this.b=e
this.c=f},
Vn:function Vn(d){this.a=d},
bjx:function bjx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fq$=i
_.l_$=j
_.fS$=k
_.fs$=l
_.bt$=m
_.a8$=n
_.c=_.a=null},
edU:function edU(d,e){this.a=d
this.b=e},
eei:function eei(d){this.a=d},
ee7:function ee7(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee9:function ee9(d){this.a=d},
edY:function edY(d){this.a=d},
ee5:function ee5(d){this.a=d},
ee6:function ee6(d){this.a=d},
ee4:function ee4(d){this.a=d},
eea:function eea(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e){this.a=d
this.b=e},
ee2:function ee2(d,e){this.a=d
this.b=e},
eec:function eec(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
eed:function eed(d){this.a=d},
ee0:function ee0(d,e){this.a=d
this.b=e},
eee:function eee(d){this.a=d},
ee_:function ee_(d){this.a=d},
eef:function eef(d){this.a=d},
edX:function edX(d){this.a=d},
eeg:function eeg(d){this.a=d},
edW:function edW(d){this.a=d},
eeh:function eeh(d){this.a=d},
edV:function edV(d){this.a=d},
bh9:function bh9(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ad7:function ad7(d,e){this.a=d
this.b=e
this.c=-1000},
Vs:function Vs(d){this.a=d},
aDx:function aDx(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fq$=h
_.l_$=i
_.fS$=j
_.fs$=k
_.bt$=l
_.a8$=m
_.c=_.a=null},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehP:function ehP(d,e,f){this.a=d
this.b=e
this.c=f},
ehW:function ehW(d){this.a=d},
ehV:function ehV(d){this.a=d},
ehX:function ehX(d,e){this.a=d
this.b=e},
ehY:function ehY(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ehT:function ehT(d,e){this.a=d
this.b=e},
ei_:function ei_(d,e){this.a=d
this.b=e},
ehS:function ehS(d,e){this.a=d
this.b=e},
ei0:function ei0(d,e){this.a=d
this.b=e},
ehR:function ehR(d,e){this.a=d
this.b=e},
ei1:function ei1(d){this.a=d},
ei2:function ei2(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ei3:function ei3(d){this.a=d},
bkD:function bkD(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLs:function aLs(){},
bwy:function bwy(){},
aLt:function aLt(){},
bwz:function bwz(){},
fbR(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7Z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iz,w,w,1/0)},
i0j(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bK(0,new B.fvl(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w0.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fZn(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cL(w,v[0])*16+A.a.cL(w,v[1])*4+A.a.cL(w,v[2])]},
tb:function tb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8Z:function b8Z(d,e){this.a=d
this.b=e},
fvl:function fvl(d,e){this.a=d
this.b=e},
Vq:function Vq(d){this.a=d},
aDv:function aDv(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ehi:function ehi(d){this.a=d},
ehh:function ehh(d,e){this.a=d
this.b=e},
eh4:function eh4(d,e){this.a=d
this.b=e},
egZ:function egZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eh_:function eh_(d){this.a=d},
eh3:function eh3(d,e){this.a=d
this.b=e},
eh2:function eh2(d,e){this.a=d
this.b=e},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d,e){this.a=d
this.b=e},
ehc:function ehc(){},
ehd:function ehd(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehe:function ehe(d){this.a=d},
eha:function eha(d){this.a=d},
eh8:function eh8(d){this.a=d},
eh9:function eh9(d,e){this.a=d
this.b=e},
eh5:function eh5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh7:function eh7(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
eh6:function eh6(d,e){this.a=d
this.b=e},
ehg:function ehg(d,e){this.a=d
this.b=e},
bhR:function bhR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dou:function dou(d,e){this.a=d
this.b=e},
Uo:function Uo(d){this.a=d},
biN:function biN(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dOz:function dOz(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOo:function dOo(d){this.a=d},
dOn:function dOn(){},
dOp:function dOp(d){this.a=d},
dOm:function dOm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOx:function dOx(){},
dOs:function dOs(){},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOu:function dOu(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOw:function dOw(d,e){this.a=d
this.b=e},
UE:function UE(d){this.a=d},
aCC:function aCC(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bt$=g
_.a8$=h
_.c=_.a=null},
dRo:function dRo(d){this.a=d},
dRn:function dRn(d,e){this.a=d
this.b=e},
dRb:function dRb(){},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRc:function dRc(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dRe:function dRe(d,e){this.a=d
this.b=e},
dRi:function dRi(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRk:function dRk(d){this.a=d},
dRl:function dRl(d){this.a=d},
dRm:function dRm(d){this.a=d},
bda:function bda(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3C:function d3C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3E:function d3E(d,e,f){this.a=d
this.b=e
this.c=f},
d3D:function d3D(d,e){this.a=d
this.b=e},
aKT:function aKT(){},
bzu(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7Z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iz,w,w,1/0)},
fp1(d,e,f,g,h){var w,v,u=null,t=C.hr(u,u,u,u,C.de(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.ca,u,A.e0,A.c8)
t.eA()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbd(w)/2))
t.a4(d,w)},
hYo(){var w,v,u,t,s,r,q,p,o=new C.eM()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.z(p,1+o.aB(2+A.o.an(t,3))))}A.d.b0(q,new B.fq1())
w.push(new B.aRh(q))}return w},
a1l(d,e){var w,v,u,t
for(w=new C.WZ(d),v="";w.C();){u=C.jJ(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jJ(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ia6(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WZ(d),v=0,u="";w.C();){t=C.jJ(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jJ(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRh:function aRh(d){this.a=d},
bFv:function bFv(){},
fq1:function fq1(){},
TT:function TT(d){this.a=d},
bir:function bir(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bt$=h
_.a8$=i
_.c=_.a=null},
dC_:function dC_(){},
dCc:function dCc(d){this.a=d},
dCb:function dCb(d,e,f){this.a=d
this.b=e
this.c=f},
dCd:function dCd(d){this.a=d},
dCa:function dCa(d,e){this.a=d
this.b=e},
dC0:function dC0(d,e){this.a=d
this.b=e},
dC5:function dC5(){},
dC6:function dC6(d){this.a=d},
dC4:function dC4(d){this.a=d},
dC7:function dC7(d,e){this.a=d
this.b=e},
dC3:function dC3(d,e){this.a=d
this.b=e},
dC8:function dC8(d,e){this.a=d
this.b=e},
dC2:function dC2(d,e){this.a=d
this.b=e},
dC9:function dC9(d){this.a=d},
dC1:function dC1(d){this.a=d},
b9a:function b9a(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDr:function cDr(d,e){this.a=d
this.b=e},
US:function US(d){this.a=d},
biZ:function biZ(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a8$=h
_.c=_.a=null},
dVr:function dVr(d){this.a=d},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVs:function dVs(d){this.a=d},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVl:function dVl(d){this.a=d},
dVk:function dVk(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVn:function dVn(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVo:function dVo(d,e){this.a=d
this.b=e},
beE:function beE(d,e,f){this.b=d
this.c=e
this.a=f},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbD:function dbD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U1:function U1(d){this.a=d},
biE:function biE(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dGb:function dGb(d){this.a=d},
dGa:function dGa(d,e){this.a=d
this.b=e},
dFU:function dFU(){},
dG2:function dG2(d){this.a=d},
dG1:function dG1(){},
dG3:function dG3(d){this.a=d},
dG0:function dG0(){},
dG4:function dG4(d){this.a=d},
dG_:function dG_(d){this.a=d},
dG5:function dG5(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dG6:function dG6(d){this.a=d},
dFY:function dFY(d){this.a=d},
dG7:function dG7(d,e){this.a=d
this.b=e},
dFX:function dFX(d,e){this.a=d
this.b=e},
dG8:function dG8(d){this.a=d},
dFW:function dFW(d,e){this.a=d
this.b=e},
dG9:function dG9(d){this.a=d},
dFV:function dFV(d,e){this.a=d
this.b=e},
aKx:function aKx(){},
aL0:function aL0(){},
hoq(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h4w(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a42(w,v,u,A.cH,C.T(x.N,x.y))},
hvW(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h4x(d),d.d*f.b)},
h4x(d){return 42+(D.lZ.ai(0,d.b)?(d.ch-1)*38:0)},
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
a9T:function a9T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ab_:function ab_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a42:function a42(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLz:function bLz(){},
bLK:function bLK(d){this.a=d},
bLF:function bLF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLL:function bLL(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLO:function bLO(d){this.a=d},
bLP:function bLP(d){this.a=d},
bLN:function bLN(d){this.a=d},
bLQ:function bLQ(d,e,f){this.a=d
this.b=e
this.c=f},
bLR:function bLR(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLC:function bLC(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLD:function bLD(d,e,f){this.a=d
this.b=e
this.c=f},
bLE:function bLE(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLS:function bLS(d,e){this.a=d
this.b=e},
bLG:function bLG(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLH:function bLH(d){this.a=d},
aih:function aih(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGH:function bGH(){},
bGI:function bGI(){},
my:function my(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckd:function ckd(d){this.a=d},
i7I(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fGL(),c9=new B.fGN(),d0=new B.fGO(),d1=new B.fGM(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bK,A.bJ))
d3.bD(D.e5P,D.e3C,c9.$2(A.dB,1.4))
d3.bD(D.e3s,D.e3r,c9.$2(A.bv,2.4))
d3.bD(D.e3t,Y.aGp,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.f6.j(0.5))
d2.z=A.R3
d3.af(D.e3c,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aMb,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.bv))
d3.af(A.cJ,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j3(0,d4.y*0.6)
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
r.delete()}}d3.af(D.e5L,2.4,c8.$1(c7?A.bk:A.ak))
d3.af(D.e6s,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.ei))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bF())
d3.aQ(q,c8.$1(A.f6.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(A.ay.j(0.7)))}d3.aQ(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j3(0,d4.y)
d3.bD(D.a59,D.aGF,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f4).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.af(A.ij,3,c8.$1(c7?A.bk:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2V[m]
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
d3.aQ(w,d1.$3(D.eK9,A.aM,A.d5))
d3.aY(D.eJz,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j3(0,d4.y*2)
d3.bD(A.J,D.e3w,c9.$2(A.bO,2.4))
d3.bD(A.a58,D.e3v,c9.$2(A.hK,1))
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
d3.aQ(d2,c8.$1(A.bL.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.eKf,A.bl,A.cC))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bF())
d3.aQ(k,c8.$1(A.ei))
d3.af(D.e3A,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.mi))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bv(d5*17),3)!==0
else j=!1
i=j?A.bW:D.bhb
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bW.j(0.35))
t.z=A.lt
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e5V,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.eKl,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bL.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j3(0,d4.y*0.5)
d3.hR(C.cl(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.mi))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.E(A.k.bv(d5),60)),2,"0"),D.e3B,A.b1,6.5)
d3.af(D.e3N,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.RS,10,c8.$1(c7?A.bZ:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j3(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e6u,A.c,16)
d2.restore()
d3.af(A.k7,6,c8.$1(A.d3))
d3.af(A.k7,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RS,14+v*6+A.k.E(t,6))
r=c9.$2(A.bZ.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bD(D.e5U,D.e6q,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.j3(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.eKa,A.bO,A.ak))
d3.af(D.aGr,8,c8.$1(A.az))
d3.af(D.aGr,4.5,c8.$1(c7?A.aR:A.cC))
d3.af(D.e5S,2.2,c8.$1(c7&&A.o.E(A.k.bv(d5*1.6),2)===0?A.ay:A.km))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e62,A.ay,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.eKi,A.iT,A.fa))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.af(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b1))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bW))}d3.af(D.e5O,4,c8.$1(A.aW))
d3.af(D.e3x,2.4,c8.$1(A.ay))
d3.af(D.e3K,2.4,c8.$1(A.bk))
return!0
case"heartmon":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
d3.aE(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
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
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aQ(h,c9.$2(A.b1,1.8))
d6.$5(d3,"72",D.e3y,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e66,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.e5X,3,c8.$1(c7?A.bk:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cz.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eKc,c8.$1(F.td))
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
d3.aQ(d2,c8.$1(A.cg))
d3.af(D.e4e,1.2,c8.$1(A.w))
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
d3.aQ(e,d1.$3(D.eKG,A.c,A.bB))
d3.aY(D.eKF,c8.$1(c7?A.dP:A.bv))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bF())
d3.aQ(s,c8.$1(A.eq))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.R3
d3.af(D.e3d,14,d2)}return!0
case"discoball":d3.bD(D.e3i,K.aGn,c9.$2(A.dA,1.4))
d3.af(A.J,16,d1.$3(D.eJY,A.aQ,A.ak))
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
r=c8.$1(D.d4O[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.eJW,A.cr,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.eJP,A.aL,A.bJ))
d3.bD(D.e3h,D.e3j,c9.$2(A.bv,1.6))
d3.af(D.e3k,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2X[m]
if(c7)t=a1?A.b9:A.f7
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j3(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bD(A.J,D.a55,c9.$2(A.bJ,4))
d2.restore()
d3.bD(D.e5H,D.e60,c9.$2(A.bJ,4))
d3.aY(D.eKE,c8.$1(c7?A.b9.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axn[m]+1,d2,10,14,2)
p=C.aq(A.bL,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.eKb,A.bO,A.bl))
for(m=0;m<2;++m){l=D.axn[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fk:A.az).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mE
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bD(D.e3R,D.e47,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mO(1,a3,0.8,1).iC():A.ei
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mE
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.eK0,A.cz,A.KS))
d3.af(D.e67,8,c8.$1(A.qO))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j3(0,d4.y)
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
d3.aQ(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fT).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e4G,3.2,c8.$1(A.fT.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j3(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.eKd,A.ja,A.tg))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.ei))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mE
d3.af(D.e3M,8,d2)}return!0
case"headphones":d3.f7(C.cl(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.axp[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bt,A.py).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eA.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.E(d5*14,8)),A.kh,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.eJU,A.dA,A.ei))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aT(A.o.u(C.h_(a4)),2,"0"),D.e3o,A.b1,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.E7,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bv(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.mi))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.ps(),!0)
d2.translate(-27,-19)
E.KZ(d3,D.eQ1,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vb))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dN,A.di))
d3.aE(a6,c9.$2(A.b2,1.2))
d3.af(D.aGM,9,c8.$1(A.az))
d3.af(D.aGM,6,c9.$2(A.d5,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b1:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e4K,s,8.2)
d3.af(D.e3D,2.4,c8.$1(c7?A.bk:A.aK))
d6.$5(d3,"IN",D.e61,A.ad,6)
d6.$5(d3,"OUT",D.e4y,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e3e,3,c8.$1(A.aK))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.eJQ,A.ei,A.hH))
d6.$5(d3,"7805",D.a59,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.daz[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e6t,A.bi,9)
return!0
case"diode":d3.bD(D.aGQ,D.aGA,c9.$2(A.e2,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.aY(D.eJF,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.jp
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.e5Q,A.aA,8)
return!0
case"ldr":d3.bD(D.aGQ,D.a59,c9.$2(A.e2,2.4))
d3.bD(D.aGF,D.aGA,c9.$2(A.e2,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.tp,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bA(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aQ(a8,c9.$2(A.bL,1.4))
d2=C.aq(A.bv,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e5I,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qJ
break A}if("appletv"===d2){t=A.e2
break A}t=F.E9
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
p.clipRRect(C.er(a5),$.ps(),!0)
p.translate(t,s)
E.h0I(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e48,1.6,c8.$1(A.b1))}else{d3.aE(a5,c8.$1(D.vb))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bF())
d3.aQ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
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
p=s.gbM().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e5l,A.bO,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(D.WO))
d6.$5(d3,"Apple TV",D.e4L,A.bv,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bfI))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e6p,F.td,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lZ.h(0,d2)
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
d3.aE(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.er(a5),$.ps(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KZ(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vb))
if(b1){t=a5.b
s=a5.d
d3.bD(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.ei))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.e6w,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aGl,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.eKm,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.ps(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vb))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(D.WO))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.eKq,A.bK,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.ps(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vb))
d3.af(D.aGg,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(D.WO))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.ps(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vb))
d3.aY(D.eKw,c8.$1(A.bl))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bF())
d3.aQ(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.ps(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.eKe,A.iP,A.dA))
d3.af(D.aGq,7,c8.$1(A.az))
d3.af(D.aGq,4,c8.$1(c7?A.dP:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.mi))
d3.aE(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cV(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aQ(c3,c9.$2(A.aR,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b1))
d6.$5(d3,""+(88+A.o.E(A.k.bv(d5*2),5)),D.e4H,A.c,10)
d6.$5(d3,"km/h",D.e4E,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.ei))
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
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bD(D.e6b,D.e6g,c9.$2(A.bl,4))
d3.bD(D.e49,D.e4h,c9.$2(A.bl,4))
return!0}return!1},
fGL:function fGL(){},
fGN:function fGN(){},
fGO:function fGO(){},
fGM:function fGM(){},
h3n(d,e,f,g){return new B.aif(d,g,f,e)},
Fo(d,e,f){return new B.ba7(d,e,f)},
aif:function aif(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aig:function aig(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fq$=h
_.l_$=i
_.fS$=j
_.fs$=k
_.bt$=l
_.a8$=m
_.c=_.a=null},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGm:function bGm(d){this.a=d},
bGk:function bGk(d){this.a=d},
bGn:function bGn(){},
bGo:function bGo(d){this.a=d},
bGp:function bGp(d,e,f){this.a=d
this.b=e
this.c=f},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGi:function bGi(d,e,f){this.a=d
this.b=e
this.c=f},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(){},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGf:function bGf(d){this.a=d},
bGg:function bGg(d){this.a=d},
bGE:function bGE(d){this.a=d},
bGF:function bGF(){},
bFP:function bFP(){},
bGG:function bGG(d,e){this.a=d
this.b=e},
bGD:function bGD(d,e,f){this.a=d
this.b=e
this.c=f},
bGy:function bGy(d){this.a=d},
bGv:function bGv(d,e,f){this.a=d
this.b=e
this.c=f},
bGw:function bGw(d,e){this.a=d
this.b=e},
bGz:function bGz(d){this.a=d},
bGt:function bGt(d,e){this.a=d
this.b=e},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGx:function bGx(d){this.a=d},
bGA:function bGA(d){this.a=d},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGs:function bGs(d,e){this.a=d
this.b=e},
bGB:function bGB(d){this.a=d},
bGq:function bGq(d){this.a=d},
bGC:function bGC(d){this.a=d},
bFQ:function bFQ(d,e){this.a=d
this.b=e},
bG8:function bG8(d,e){this.a=d
this.b=e},
bGa:function bGa(d,e){this.a=d
this.b=e},
bG9:function bG9(d,e){this.a=d
this.b=e},
bFW:function bFW(d,e){this.a=d
this.b=e},
bFX:function bFX(d){this.a=d},
bFV:function bFV(d){this.a=d},
bFY:function bFY(d,e,f){this.a=d
this.b=e
this.c=f},
bFU:function bFU(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e){this.a=d
this.b=e},
bG1:function bG1(d,e){this.a=d
this.b=e},
bG2:function bG2(d,e){this.a=d
this.b=e},
bG3:function bG3(d,e,f){this.a=d
this.b=e
this.c=f},
bFT:function bFT(d,e){this.a=d
this.b=e},
bG4:function bG4(d,e,f){this.a=d
this.b=e
this.c=f},
bFS:function bFS(d,e){this.a=d
this.b=e},
bG5:function bG5(d,e,f){this.a=d
this.b=e
this.c=f},
bFR:function bFR(d,e){this.a=d
this.b=e},
bG6:function bG6(d){this.a=d},
bG7:function bG7(d){this.a=d},
bFZ:function bFZ(d){this.a=d},
bG_:function bG_(d){this.a=d},
ba7:function ba7(d,e,f){this.a=d
this.b=e
this.c=f},
ffN:function ffN(){},
ffO:function ffO(){},
ffP:function ffP(){},
ffA:function ffA(){},
ffQ:function ffQ(){},
ffz:function ffz(){},
ffR:function ffR(){},
ffE:function ffE(){},
ffy:function ffy(){},
ffF:function ffF(){},
ffx:function ffx(){},
ffG:function ffG(){},
ffw:function ffw(){},
ffH:function ffH(){},
ffu:function ffu(){},
ffv:function ffv(){},
ffI:function ffI(){},
ffs:function ffs(){},
fft:function fft(){},
ffJ:function ffJ(){},
ffr:function ffr(){},
UF:function UF(d){this.a=d},
aCD:function aCD(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRF:function dRF(d){this.a=d},
dRG:function dRG(){},
dRH:function dRH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRI:function dRI(){},
dRv:function dRv(d){this.a=d},
dRu:function dRu(d,e,f){this.a=d
this.b=e
this.c=f},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRr:function dRr(d){this.a=d},
dRs:function dRs(){},
dRE:function dRE(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRz:function dRz(d){this.a=d},
dRA:function dRA(){},
dRC:function dRC(d,e,f){this.a=d
this.b=e
this.c=f},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRy:function dRy(){},
dRK:function dRK(d){this.a=d},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRJ:function dRJ(){},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d){this.a=d},
awK:function awK(d,e){this.c=d
this.a=e},
b8j:function b8j(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
cAZ:function cAZ(d){this.a=d},
b8i:function b8i(d,e){this.b=d
this.a=e},
cAY:function cAY(d){this.a=d},
ax2:function ax2(){},
ax3:function ax3(){},
aJ3:function aJ3(){},
bwm:function bwm(){},
i7J(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.w6,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.af(A.w6,25,b8)
b8=C.N()
b8.saq(D.eev.av(0,v))
b9.af(A.w6,23,b8)
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
r.r=A.bB.gp(0)
r.c=2
r.d=A.bQ
b9.bD(A.w6,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bi.gp(0)
b9.af(A.w6,3,r)
c2.$5(b9,w?"V":"A",D.e6j,A.bi,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e5N,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eJM,A.hD)
$.W()
s=C.N()
s.r=A.bv.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aY(D.eKx,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.w7,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cl(A.aGk,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fT.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bo.gp(0)
b9.af(D.w7,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.w7,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.je.gp(0)
b9.af(D.w7,14,b8)
return!0
case"speaker":l=C.bx(D.aMb,A.ux)
$.W()
b8=C.N()
b8.saq(D.aof.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eeS.av(0,C.bU(A.cx,15)))
b9.af(A.cx,14+k,b8)
b8=C.N()
b8.r=A.dA.gp(0)
b9.af(A.cx,5,b8)
b8=C.N()
b8.r=A.bl.gp(0)
b9.af(D.aGm,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e3Q,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bW.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eKp,A.ux)
$.W()
b8=C.N()
b8.saq(D.bVM.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.aMd,A.il)
s=C.N()
s.r=A.hH.gp(0)
b9.aE(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BL(i)<500?":":" "
g=A.a.aT(A.o.u(C.dk(i)),2,"0")
f=A.a.aT(A.o.u(C.h_(i)),2,"0")
b8=C.N()
b8.r=A.b1.j(0.12).gp(0)
b9.aY(D.aMd,b8)
c2.$5(b9,g+h+f,D.e64,A.b1,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e63,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e3U,2.4,b8)
return!0
case"calculator":j=C.bx(D.eK5,A.hf)
$.W()
b8=C.N()
b8.saq(D.bVw.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.eK_,A.he)
s=C.N()
s.r=(b7?A.X_:D.bhJ).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e5M,A.VT,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Sn)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cg:A.bO).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eJX,A.hf)
$.W()
b8=C.N()
b8.r=L.mi.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.afL.gp(0)
b9.aE(j,b8)
a0=C.bx(D.eJO,A.hD)
if(b7){b8=C.N()
b8.saq(D.bX5.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.ps(),!0)
b8.translate(-12,-25)
E.KZ(b9,D.ePD,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eJL,A.he)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b1.gp(0)
b9.aY(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e53,A.c,6)}else{b8=C.N()
b8.r=D.vb.gp(0)
b9.aE(a0,b8)}b8=C.bx(D.eKH,D.ef0)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bx(D.eKo,A.qh)
$.W()
b8=C.N()
b8.saq(D.bW3.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.axp[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bQ
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
q.r=A.hx.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eK4,A.hD)
s=$.W()
r=C.N()
r.r=A.ei.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yZ
b9.af(A.w6,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cV(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bF())
b8=C.N()
b8.r=C.aq(A.eq,D.ba8,a5).gp(0)
b9.aQ(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.c2.gp(0)
b9.aQ(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j3(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bD(A.J,D.aGm,s)
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
q.saq(D.bU7.av(0,D.eKh))
b9.aQ(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bF())
p=C.N()
p.r=A.f6.gp(0)
b9.aQ(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bF())
s=C.N()
s.r=A.f6.gp(0)
b9.aQ(r,s)
for(a2=0;a2<2;++a2){a3=D.dak[a2]
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
j.F(new C.cV(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bF())
r=C.N()
r.saq(D.bVc.av(0,D.eK3))
b9.aQ(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bF())
q=C.N()
q.r=A.e2.gp(0)
b9.aQ(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cV(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.az.gp(0)
b9.aQ(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.tn,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ei
b8.r=s.gp(0)
b9.aY(D.eK2,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lt
b9.af(A.aGi,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.af(D.e3b,3,b8)
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
b9.aQ(b8,s)
s=C.N()
s.r=A.dP.j(0.5*u).gp(0)
s.z=Z.Hr
b9.af(D.e68,24,s)}b8=C.bx(D.eKD,A.hD)
s=$.W()
r=C.N()
r.r=A.ei.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bQ
b9.bD(D.e3p,D.aGs,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bQ
b9.bD(D.aGs,D.e69,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bF())
s=C.N()
s.r=(b7?A.aM:A.jW).gp(0)
b9.aQ(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bl).gp(0)
b9.af(D.e6a,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cV(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hk.gp(0)
b9.aQ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1Z[u].j(0.6).gp(0)
b3.z=A.R3
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cV(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1Z[u]
else{o=C.aq(D.a1Z[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbM().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.i7I(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZQ(d){var w=D.lZ.h(0,d)
return(w==null?null:w.b)===D.zo},
i8R(d,e,f){return C.a6(d,!1).cl(C.uE(null,!1,!0,!0,new B.fLq(e,f),A.eJ,null,A.pM,new B.fLr(),x.H))},
J5:function J5(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLq:function fLq(d,e){this.a=d
this.b=e},
fLr:function fLr(){},
Um:function Um(d,e,f){this.c=d
this.d=e
this.a=f},
biL:function biL(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a8$=e
_.c=_.a=null},
dNs:function dNs(d){this.a=d},
dNr:function dNr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNp:function dNp(){},
dNq:function dNq(d){this.a=d},
dNo:function dNo(d){this.a=d},
dNn:function dNn(d,e){this.a=d
this.b=e},
dNm:function dNm(d,e){this.a=d
this.b=e},
dNl:function dNl(d){this.a=d},
dNk:function dNk(d){this.a=d},
dNg:function dNg(d){this.a=d},
dNf:function dNf(d){this.a=d},
dNj:function dNj(d,e,f){this.a=d
this.b=e
this.c=f},
dNi:function dNi(d){this.a=d},
dNh:function dNh(d){this.a=d},
bur:function bur(d,e,f){this.b=d
this.c=e
this.a=f},
aed:function aed(d,e,f){this.b=d
this.c=e
this.a=f},
aKQ:function aKQ(){},
fkg(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bY(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.W0,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
fZW(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eM()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mH
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
a2=b4.hd()?new C.z(f,-g):new C.z(-f,g)
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
A.d.fn(g,b4)
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
return new B.aVT(b0,a9,C.T(u,t),q,N.mH,w+v)}return new B.aVT(C.aX(u),C.et([25],u),C.T(u,t),21,N.mH,1)},
hoi(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnH(p,o)},
hjE(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVT:function aVT(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Va:function Va(d){this.a=d},
bjk:function bjk(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fq$=g
_.l_$=h
_.fS$=i
_.fs$=j
_.bt$=k
_.a8$=l
_.c=_.a=null},
e9t:function e9t(d){this.a=d},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9u:function e9u(){},
e9j:function e9j(d,e){this.a=d
this.b=e},
e9k:function e9k(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9n:function e9n(d,e){this.a=d
this.b=e},
e9l:function e9l(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d,e){this.a=d
this.b=e},
bgk:function bgk(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgH:function dgH(d,e,f){this.a=d
this.b=e
this.c=f},
dgK:function dgK(d,e,f){this.a=d
this.b=e
this.c=f},
dgI:function dgI(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
Vc:function Vc(d){this.a=d},
aDh:function aDh(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fq$=g
_.l_$=h
_.fS$=i
_.fs$=j
_.bt$=k
_.a8$=l
_.c=_.a=null},
e9M:function e9M(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9N:function e9N(){},
e9x:function e9x(){},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9D:function e9D(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9I:function e9I(d){this.a=d},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9A:function e9A(d,e){this.a=d
this.b=e},
e9K:function e9K(d){this.a=d},
bgz:function bgz(d,e){this.b=d
this.a=e},
aLh:function aLh(){},
bwr:function bwr(){},
aLi:function aLi(){},
bws:function bws(){},
a0r(d,e,f,g,h,i){return new B.btg(d,e,f,g,h,i)},
btg:function btg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgu:function fgu(){},
fgv:function fgv(){},
fgw:function fgw(){},
fgx:function fgx(){},
fgy:function fgy(){},
fgz:function fgz(){},
fgA:function fgA(){},
fgB:function fgB(){},
a7T:function a7T(d){this.a=d},
ceR:function ceR(d){this.a=d},
ceS:function ceS(){},
ceQ:function ceQ(d,e){this.a=d
this.b=e},
ceP:function ceP(d){this.a=d},
W2:function W2(d){this.a=d},
aE8:function aE8(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fq$=f
_.l_$=g
_.fS$=h
_.fs$=i
_.bt$=j
_.a8$=k
_.c=_.a=null},
eJ0:function eJ0(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIW:function eIW(d,e){this.a=d
this.b=e},
eIZ:function eIZ(d,e){this.a=d
this.b=e},
eIY:function eIY(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d){this.a=d},
buD:function buD(d,e,f){this.b=d
this.c=e
this.a=f},
UM:function UM(d){this.a=d},
biU:function biU(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fq$=d
_.l_$=e
_.fS$=f
_.fs$=g
_.bt$=h
_.a8$=i
_.c=_.a=null},
dTK:function dTK(){},
dTL:function dTL(){},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTH:function dTH(d,e){this.a=d
this.b=e},
dTI:function dTI(d){this.a=d},
dTG:function dTG(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
bps:function bps(d,e,f){this.b=d
this.c=e
this.a=f},
TZ:function TZ(d){this.a=d},
biw:function biw(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fq$=d
_.l_$=e
_.fS$=f
_.fs$=g
_.bt$=h
_.a8$=i
_.c=_.a=null},
dEC:function dEC(){},
dED:function dED(){},
dEx:function dEx(){},
dEA:function dEA(d,e){this.a=d
this.b=e},
dEz:function dEz(d,e){this.a=d
this.b=e},
dEB:function dEB(d){this.a=d},
dEy:function dEy(d){this.a=d},
aHy:function aHy(d,e,f){this.a=d
this.b=e
this.c=f},
UD:function UD(d){this.a=d},
biO:function biO(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dQY:function dQY(d,e){this.a=d
this.b=e},
dR4:function dR4(d,e){this.a=d
this.b=e},
dQX:function dQX(d,e){this.a=d
this.b=e},
dR5:function dR5(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dR6:function dR6(d){this.a=d},
dQV:function dQV(d){this.a=d},
dR7:function dR7(d){this.a=d},
dQU:function dQU(d){this.a=d},
dR8:function dR8(d){this.a=d},
dR9:function dR9(d){this.a=d},
dQT:function dQT(d){this.a=d},
bkQ:function bkQ(d,e,f){this.b=d
this.c=e
this.a=f},
Vo:function Vo(d){this.a=d},
aDr:function aDr(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ef8:function ef8(d,e){this.a=d
this.b=e},
ef9:function ef9(d,e,f){this.a=d
this.b=e
this.c=f},
ef7:function ef7(d,e,f){this.a=d
this.b=e
this.c=f},
efa:function efa(d){this.a=d},
ef6:function ef6(d){this.a=d},
efe:function efe(d){this.a=d},
efd:function efd(d,e){this.a=d
this.b=e},
efc:function efc(d,e){this.a=d
this.b=e},
eff:function eff(d,e){this.a=d
this.b=e},
efb:function efb(d,e){this.a=d
this.b=e},
efg:function efg(d){this.a=d},
VB:function VB(d){this.a=d},
aDN:function aDN(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eq0:function eq0(d){this.a=d},
eq1:function eq1(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
eq_:function eq_(d){this.a=d},
epY:function epY(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d,e){this.a=d
this.b=e},
VW:function VW(d){this.a=d},
bk1:function bk1(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eEi:function eEi(){},
eEr:function eEr(){},
eEn:function eEn(d){this.a=d},
eEm:function eEm(){},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEp:function eEp(d){this.a=d},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEq:function eEq(d){this.a=d},
eEj:function eEj(d){this.a=d},
Vm:function Vm(d){this.a=d},
bjv:function bjv(d,e,f,g,h,i,j,k){var _=this
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
_.fq$=f
_.l_$=g
_.fS$=h
_.fs$=i
_.bt$=j
_.a8$=k
_.c=_.a=null},
edO:function edO(){},
edP:function edP(){},
edH:function edH(d){this.a=d},
edG:function edG(d){this.a=d},
edI:function edI(d){this.a=d},
edF:function edF(d){this.a=d},
edJ:function edJ(d){this.a=d},
edE:function edE(d){this.a=d},
edK:function edK(d,e){this.a=d
this.b=e},
edD:function edD(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
edC:function edC(d,e){this.a=d
this.b=e},
edM:function edM(d){this.a=d},
edB:function edB(d,e){this.a=d
this.b=e},
edN:function edN(d){this.a=d},
edA:function edA(d,e){this.a=d
this.b=e},
bcw:function bcw(d,e,f){this.c=d
this.d=e
this.a=f},
aKD:function aKD(){},
bwi:function bwi(){},
aKW:function aKW(){},
bwn:function bwn(){},
aLq:function aLq(){},
bwx:function bwx(){},
aLU:function aLU(){},
bwJ:function bwJ(){},
jK(d,e,f,g,h,i){return new B.b66(h,d,f,g,i,e,null)},
ho8(d,e,f,g){var w=null
return C.cb(w,w,!0,w,new B.fPf(g,e,f),d,w,!0,!0,x.H)},
hB(d,e,f,g,h,i,j){return new B.ava(f,j,i,h,g,d,e,null)},
qO(d,e,f){return B.i9G(d,e,f)},
i9G(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qO=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gb8()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m_(2),$async$qO)
case 7:q=h
w=8
return C.b(q.ht(A.fY),$async$qO)
case 8:p=h
if(p==null){w=1
break}o=J.eT(A.dD.gaN(p))
w=9
return C.b(B.cpM(C.a([B.hd5(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qO)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.gV).f.U(D.aOe)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qO,v)},
lg(d,e,f,g){var w,v=$.arj
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vW(v,e,f,g)},
vW(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
By(d,e,f,g){var w,v,u,t,s,r,q,p=$.arj
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.lg(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bS(p,p.gM(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lg(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.ceN(d,s,f,g),u)}},
a7S(d,e){var w="sine",v="noise"
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
zm(d){return B.hF5(d)},
hF5(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zm=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$zm)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aI(0,q,null)
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
vT(d,e){return B.hF6(d,e)},
hF6(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vT=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vT)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vT)
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
return C.i($async$vT,v)},
b66:function b66(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crL:function crL(d){this.a=d},
crM:function crM(d,e){this.a=d
this.b=e},
fPf:function fPf(d,e,f){this.a=d
this.b=e
this.c=f},
fPe:function fPe(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crH:function crH(d){this.a=d},
eQ:function eQ(d,e,f){this.c=d
this.d=e
this.a=f},
ava:function ava(d,e,f,g,h,i,j,k){var _=this
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
crG:function crG(d){this.a=d},
F3:function F3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crN:function crN(d){this.a=d},
mB:function mB(){},
crI:function crI(d,e,f){this.a=d
this.b=e
this.c=f},
crK:function crK(d){this.a=d},
crJ:function crJ(){},
ceN:function ceN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cum(){var w=0,v=C.j(x.cL),u,t
var $async$cum=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qP().bfc("assets/data/world110.json"),$async$cum)
case 3:u=t.hJF(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cum,v)},
hJF(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aI(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a5(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a5(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cP(p.h(r,"n"))
m=C.cP(p.h(r,"a"))
l=C.cP(p.h(r,"ct"))
j=C.cP(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cP(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPN(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaF(o,m,l,j,i,h,g,f,p,q)
e.bxu(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaG(a1)},
fsV(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GC(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaF:function aaF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaG:function aaG(d){this.a=d},
v_:function v_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
xW:function xW(d,e,f){this.a=d
this.b=e
this.c=f},
OS:function OS(d){this.a=0
this.b=d
this.c=0},
hLy(d,e,f){return $.hLz.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dcr(d,e,f))},
UT:function UT(d){this.a=d},
aCO:function aCO(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fq$=j
_.l_$=k
_.fS$=l
_.fs$=m
_.bt$=n
_.a8$=o
_.c=_.a=null},
dWs:function dWs(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dVV:function dVV(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVU:function dVU(d,e,f){this.a=d
this.b=e
this.c=f},
dVS:function dVS(d){this.a=d},
dVR:function dVR(){},
dVQ:function dVQ(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
dW2:function dW2(d){this.a=d},
dW3:function dW3(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW4:function dW4(d){this.a=d},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVX:function dVX(d){this.a=d},
dWf:function dWf(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e){this.a=d
this.b=e},
dWj:function dWj(d){this.a=d},
dWc:function dWc(d){this.a=d},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dWa:function dWa(d,e){this.a=d
this.b=e},
dWm:function dWm(d){this.a=d},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWn:function dWn(d){this.a=d},
dW8:function dW8(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dW7:function dW7(d,e){this.a=d
this.b=e},
dWp:function dWp(d){this.a=d},
dW6:function dW6(d){this.a=d},
dWq:function dWq(d){this.a=d},
dW5:function dW5(d){this.a=d},
dWg:function dWg(d){this.a=d},
dW_:function dW_(d){this.a=d},
dWh:function dWh(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
dWi:function dWi(d){this.a=d},
dVY:function dVY(d){this.a=d},
dVP:function dVP(){},
dVO:function dVO(d){this.a=d},
dVN:function dVN(d){this.a=d},
beL:function beL(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dcr:function dcr(d,e,f){this.a=d
this.b=e
this.c=f},
dcs:function dcs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL1:function aL1(){},
aL2:function aL2(){},
aeL(d,e,f,g,h){return new B.btb(d,e,f,g,h)},
btb:function btb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgn:function fgn(){},
fgo:function fgo(){},
fgp:function fgp(){},
fgq:function fgq(){},
fgr:function fgr(){},
fgs:function fgs(){},
fgt:function fgt(){},
VZ:function VZ(d){this.a=d},
bk5:function bk5(){this.d=$
this.c=this.a=null},
eFb:function eFb(d){this.a=d},
eFc:function eFc(d){this.a=d},
eFa:function eFa(d){this.a=d},
eFd:function eFd(){},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF8:function eF8(d){this.a=d},
hM_(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjS(new C.cs(null,x.A),new B.OS(A.cH),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hM1(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hM0(d){return 1.5+1.6*Math.log(d.d/1000+1)},
heh(d,e,f){return $.hMC.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eZy(d,e,f))},
VK:function VK(d){this.a=d},
bjS:function bjS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fq$=j
_.l_$=k
_.fS$=l
_.fs$=m
_.bt$=n
_.a8$=o
_.c=_.a=null},
exe:function exe(d,e){this.a=d
this.b=e},
exp:function exp(d,e){this.a=d
this.b=e},
exq:function exq(d,e){this.a=d
this.b=e},
exm:function exm(d){this.a=d},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exr:function exr(d){this.a=d},
exl:function exl(d){this.a=d},
exs:function exs(d,e){this.a=d
this.b=e},
ext:function ext(d){this.a=d},
exk:function exk(d,e){this.a=d
this.b=e},
exu:function exu(d){this.a=d},
exj:function exj(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exi:function exi(d){this.a=d},
exw:function exw(d){this.a=d},
exh:function exh(d){this.a=d},
exx:function exx(d){this.a=d},
exg:function exg(d){this.a=d},
exy:function exy(d){this.a=d},
exf:function exf(d){this.a=d},
exd:function exd(){},
exc:function exc(){},
exb:function exb(d){this.a=d},
exa:function exa(d){this.a=d},
bre:function bre(d,e){this.b=d
this.a=e},
eZy:function eZy(d,e,f){this.a=d
this.b=e
this.c=f},
eZz:function eZz(){},
eZA:function eZA(){},
UU:function UU(d){this.a=d},
aCP:function aCP(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fq$=k
_.l_$=l
_.fS$=m
_.fs$=n
_.bt$=o
_.a8$=p
_.c=_.a=null},
dWw:function dWw(){},
dWZ:function dWZ(){},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWM:function dWM(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWR:function dWR(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
dWS:function dWS(d){this.a=d},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWV:function dWV(d){this.a=d},
dWG:function dWG(d,e){this.a=d
this.b=e},
dWW:function dWW(d){this.a=d},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWX:function dWX(d){this.a=d},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWY:function dWY(d){this.a=d},
dWD:function dWD(d){this.a=d},
dWO:function dWO(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWP:function dWP(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWu:function dWu(){},
dWx:function dWx(d,e){this.a=d
this.b=e},
dWt:function dWt(d){this.a=d},
b9X:function b9X(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VC:function VC(d){this.a=d},
bjP:function bjP(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fq$=e
_.l_$=f
_.fS$=g
_.fs$=h
_.bt$=i
_.a8$=j
_.c=_.a=null},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e){this.a=d
this.b=e},
eq7:function eq7(d,e){this.a=d
this.b=e},
eqa:function eqa(d,e){this.a=d
this.b=e},
eq6:function eq6(d,e){this.a=d
this.b=e},
bqN:function bqN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eXI:function eXI(d){this.a=d},
aL3:function aL3(){},
bwp:function bwp(){},
aLC:function aLC(){},
bwD:function bwD(){},
aLF:function aLF(){},
bwF:function bwF(){},
hLY(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eM()
v.dB(w)
v=v.aj()
u=new C.eM()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.biv(new C.cs(null,x.A),new B.OS(A.cH),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pn:function Pn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TX:function TX(d){this.a=d},
biv:function biv(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fq$=i
_.l_$=j
_.fS$=k
_.fs$=l
_.bt$=m
_.a8$=n
_.c=_.a=null},
dE3:function dE3(){},
dDS:function dDS(){},
dDT:function dDT(d,e){this.a=d
this.b=e},
dDU:function dDU(d,e){this.a=d
this.b=e},
dDR:function dDR(d){this.a=d},
dDQ:function dDQ(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDP:function dDP(d,e){this.a=d
this.b=e},
dDX:function dDX(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDN:function dDN(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDM:function dDM(d){this.a=d},
dE_:function dE_(d){this.a=d},
dDL:function dDL(d){this.a=d},
dE0:function dE0(d){this.a=d},
dDK:function dDK(d){this.a=d},
dE1:function dE1(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dE2:function dE2(d){this.a=d},
dDI:function dDI(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDH:function dDH(d){this.a=d},
b9l:function b9l(d,e){this.b=d
this.a=e},
aep:function aep(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UQ:function UQ(d){this.a=d},
biX:function biX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fq$=p
_.l_$=q
_.fS$=r
_.fs$=s
_.bt$=t
_.a8$=u
_.c=_.a=null},
dV3:function dV3(d){this.a=d},
dUU:function dUU(d,e){this.a=d
this.b=e},
dUV:function dUV(d,e){this.a=d
this.b=e},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
dUS:function dUS(d){this.a=d},
dUX:function dUX(d){this.a=d},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUY:function dUY(d){this.a=d},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d){this.a=d},
dUP:function dUP(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dUO:function dUO(d,e){this.a=d
this.b=e},
dV0:function dV0(d){this.a=d},
dUN:function dUN(d){this.a=d},
dV1:function dV1(d){this.a=d},
dUM:function dUM(d){this.a=d},
dV2:function dV2(d){this.a=d},
dUL:function dUL(d){this.a=d},
beB:function beB(d,e){this.b=d
this.a=e},
d9z:function d9z(d){this.a=d},
Vy:function Vy(d){this.a=d},
bjO:function bjO(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fq$=f
_.l_$=g
_.fS$=h
_.fs$=i
_.bt$=j
_.a8$=k
_.c=_.a=null},
epn:function epn(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
epm:function epm(d){this.a=d},
epp:function epp(d){this.a=d},
epl:function epl(d){this.a=d},
epq:function epq(d){this.a=d},
epk:function epk(d){this.a=d},
epr:function epr(d){this.a=d},
epj:function epj(d){this.a=d},
eps:function eps(d){this.a=d},
epi:function epi(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
eph:function eph(d,e){this.a=d
this.b=e},
epu:function epu(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
epv:function epv(d){this.a=d},
epf:function epf(d,e){this.a=d
this.b=e},
bq2:function bq2(d,e){this.b=d
this.a=e},
aKA:function aKA(){},
bwh:function bwh(){},
aKZ:function aKZ(){},
bwo:function bwo(){},
aLB:function aLB(){},
bwC:function bwC(){},
hd5(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lj(e,f,$,null)
v=w.bHD(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hZD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nW(A.k.ab(p.c,4)),"y",C.nW(A.k.ab(p.d,4)),"v",p.e,"l",C.nW(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nW(A.k.ab(p.as,3)),"ch",p.at,"vc",C.nW(A.k.ab(p.z,3)),"s",C.nW(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fo(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i83(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aI(0,a7,a5)
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
a3.apr(a2,d,a0,a1)
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
if(m!=null&&l!=null)a6.ak1(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gR(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bnI(i,k)}catch(a4){return a5}},
fuH(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fuH=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$fuH)
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
return C.i($async$fuH,v)},
bD4(d){return B.i9C(d)},
i9C(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bD4=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bD4)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bD4)
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
return C.i($async$bD4,v)},
cpM(d,e){var w=0,v=C.j(x.g7),u
var $async$cpM=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h1A().x6(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpM,v)}},D,T,H,U,A_,A8,A9,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[137]
A1=c[146]
Aa=c[145]
A2=c[138]
A3=c[134]
I=c[126]
P=c[120]
A4=c[122]
Ab=c[140]
A5=c[111]
A6=c[102]
G=c[129]
Ac=c[124]
Ad=c[139]
A7=c[143]
Ae=c[67]
Y=c[76]
Af=c[84]
Ag=c[80]
N=c[115]
Q=c[88]
Ah=c[147]
Ai=c[117]
Z=c[125]
O=c[127]
V=c[144]
Aj=c[71]
Ak=c[142]
R=c[133]
M=c[141]
Al=c[94]
W=c[116]
K=c[132]
S=c[95]
Am=c[24]
E=c[26]
F=c[92]
L=c[104]
B=a.updateHolder(c[17],B)
D=c[123]
T=c[136]
H=c[41]
U=c[130]
A_=c[106]
A8=c[135]
A9=c[128]
An=c[131]
X=c[97]
B.ajt.prototype={}
B.V5.prototype={
T(){return new B.bji(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mz(0,null,null))}}
B.bji.prototype={
gVP(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
this.ch.q()
this.a2()},
Ne(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Ne=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jF()
p.bO(0,A.c6)
t.m(new B.e6t(t))
t.a.toString
p=t.gVP()
w=3
return C.b(B.byD(B.hNQ(q,B.hZu(p),o,t.ay)),$async$Ne)
case 3:s=e
r=s==null?null:J.iX(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i_U(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e6u(t,o,r))
$.aW.x1$.push(new B.e6v(t))
case 1:return C.h(u,v)}})
return C.i($async$Ne,v)},
XO(d){return this.bYB(d)},
aUX(){return this.XO(null)},
bYB(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XO=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jF()
t.f.saV(0,o)
t.m(new B.e6G(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byD(B.hUD(o)),$async$XO)
case 3:r=n.a=m.i7M(f)
p.b=""
if(r!=null&&!B.hZv(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i_V(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajt(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e6H(p,t))
t.c2X(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XO,v)},
c2X(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
A.d.a9(w)
w=++m.as
v=m.gVP()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e6C(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e6A(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e6D(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e6E(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e6F(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=C.n(16),f=C.I(A.bt.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eR5,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.Th,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.ffz
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ac.TI,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f0K,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vj,C.d(u,l,l,l,l,l,l,D.f3m,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dk,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f5L,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i_,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.LW,new C.cm(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.m6,l,l,l,l,l,l,l,l,l),A.bp,new C.bC(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.x(o.a,l,A.a7o,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bt.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.fb0,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.e7s)
j=C.c9(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.v(C.a([C.ahK(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bqJ,A.ej,l,l,1/0),A.bc,A.ic),C.E(B.h3n(m.gVP(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e6K(m),l,A.bt,l),new B.dA("Invent something new",!i,new B.e6L(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dcF[p]
i.push(new B.dA(n,!1,new B.e6M(m,n),l,A.bt,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cXs[p]
i.push(new B.dA(r,!1,new B.e6N(m,r),l,A.bt,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kG,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e6O(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dn,!0,A.a4,l,A.an,l,A.aOX,l,l),1)
h=m.at
v=h&&j?D.bEX:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e6P(m,k),A.bt,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jK(A.bt,A.hc,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FS.prototype={}
B.uM.prototype={}
B.Vx.prototype={
T(){return new B.aDH(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDH.prototype={
gaWb(){var w,v,u,t=this,s=D.GU[t.cx],r=D.Qw[t.cy],q=D.C5[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avJ[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cK(p,0,new B.emz())},
ga21(){return D.GU[this.cx].d/this.gaWb()},
gaNw(){return 0.1*(D.GU[this.cx].d/0.9)/D.Qw[this.cy].d},
a_(){this.a1()
this.le()
B.zm("rocket_lander").bz(new B.emT(this),x.P)},
c35(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cH.aj()*0.6
w.f=new C.u(0.15+A.cH.aj()*0.7,0.08)
w.r=new C.u((A.cH.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.emU())
return}w=D.rk[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga21()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNw())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gcm()*6*D.axD[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
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
B.vT("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga21()/(D.rk[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga21()/(D.rk[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bv(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.emV())},
afc(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f2S,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.emB(this,g,w),v,h,v))
return new C.D(A.eK,C.v(C.a([u,A.cV,C.bY(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCR(d){var w,v,u,t,s=this,r=null,q=s.ga21()/(D.rk[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNw()),o=D.axD[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.TC,r,r,r),A.S,s.afc("ENGINE: "+D.GU[s.cx].b,D.GU,new B.emq(s),new B.emr(s),A.cs),s.afc("FUEL TANK: "+D.Qw[s.cy].b,D.Qw,new B.ems(s),new B.emt(s),A.b1),s.afc("LANDING GEAR: "+D.C5[s.db].b,D.C5,new B.emu(s),new B.emv(s),A.aR),s.afc("EXTRAS (tap to add)",D.avJ,new B.emw(s),new B.emx(s),A.bt)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fxA)
o=(q?A.b1:A.cb).j(0.14)
w=C.n(12)
v=A.k.ab(s.gaWb(),2)
u=A.k.ab(s.ga21()/(D.rk[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C5[s.db].d*100)+".",r,r,r,r,r,r,D.f3u,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i_,A.bS,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fi(A.nj,"Launch",new B.emy(s),A.b1,r),r))
return C.av(C.p(r,C.c9(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bP,r,r,A.ag),A.f,r,A.lC,new C.o(D.bhj,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aXk(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.n(18),t=C.I(A.b2,A.q,1)
return C.ob(A.jD,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.emn(e),new B.emo(e),w,w,w,w,new B.emp(e))},
aXj(d,e,f){return this.aXk(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.emM(s,D.rk[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rk[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.emN(s,w),r,D.rk[w].c,r))}v=C.a([s.aXj(F.alA,new B.emO(s),s.y),A.bd,s.aXk(A.vG,new B.emP(s),s.Q,130),A.bd,s.aXj(A.NE,new B.emQ(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.bd,C.aD(r,C.p(r,D.bJb,A.f,r,r,new C.o(u,r,C.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.emR(s),r,r,r,r,r,r,!1,A.a7)],p))}return B.jK(A.cs,A.hc,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.B(v,A.m,r,A.b8,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bgh.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rk[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bk0,a0,0.25)
a1.toString
d.saq(new C.a8(A.b_,A.b4,A.x,C.a([F.ada,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
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
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bF())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aQ(r,d)
o=C.cl(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.il)
a0=C.N()
a0.r=A.bk.gp(0)
a2.aE(d,a0)
a0=C.bx(o.cD(2),A.qh)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j3(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.Hr
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ao,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bF())
k=C.N()
k.r=A.aM.gp(0)
a2.aQ(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bF())
k=C.N()
k.r=A.c.gp(0)
a2.aQ(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cV(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cV(-14,-10,0,-26))
m.F(new C.bF())
i=C.N()
i.saq(D.bVF.av(0,D.eJV))
a2.aQ(m,i)
i=C.N()
i.r=A.aR.gp(0)
a2.af(D.w7,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bF())
h=C.N()
h.r=A.ay.gp(0)
a2.aQ(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bF())
k=C.N()
k.r=A.ay.gp(0)
a2.aQ(f,k)
g.restore()},
au(d){return!0}}
B.aLz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwB.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv_()}}
B.aRr.prototype={}
B.a2H.prototype={}
B.b9o.prototype={}
B.TY.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aC6(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.K3,D.K3,A.au,A.cH,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC6.prototype={
a_(){var w=this
w.a1()
w.le()
w.as=new B.c_U(w.gcbq())
new B.dEv(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a6(0)
v.d=null}this.bu0()},
cbr(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eX(0,C.F(["t","init","data",$.hdk],x.N,x.z))
v.at=!0
v.ax=""
v.axZ()
break
case"pick":v.m(new B.dE7(v,d))
break
case"shot":v.ah4(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axZ(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atH[q.CW]
v=new B.dE8()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fo(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eX(0,u)}},
ah4(d){return this.cse(d)},
cse(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ah4=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b4(d,A.a.cL(d,",")+1))
w=6
return C.b(B.cpM(C.a([B.hd5(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ah4)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.gV).f.U(D.aOe)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ah4,v)},
axq(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lz(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bv(w)!==A.k.bv(v.ok)){B.a7S("kick",0.4)
v.a4D(170,new B.dEw())}v.ok=w
return},
agU(d){var w,v,u,t,s=this
s.m(new B.dE9(s,d))
if(d==null){s.fx=D.K3
s.dy=1
w=s.as
if(w!=null)w.eX(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dEa(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.axZ()
w=s.as
if(w!=null)w.eX(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cuH(t,d)
return},
cuH(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7S("kick",0.8)
this.a4D(260,new B.dEb())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4D(w*70,new B.dEc(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vW("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7S("kick",0.3)
break
default:B.vW("organic",2+A.o.E(e.length,6),200,0.4)}},
czb(d){this.m(new B.dEe(this,d))},
aXC(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axq(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bUc(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dE4(u,w,d))
v=x.t
B.By("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4D(1100,new B.dE5(u))
return}if(d==null){if(u.cx!=null)u.agU(null)
return}u.agU(d)},
bXV(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bW.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f_i,u,u,u)}else if(d==null||e==null)w=D.fd6
else{w=x.p
w=C.B(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hF,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.Dk,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bLB,u,u,u,new B.dE6(v),u,u,u,u,"Back to the whole body",A.cd)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VZ,u,s,t,u,u,A.n),u,u,u,u,I.ahf,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dnc.h(0,g)
i.axZ()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d5I
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axq(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mB,h,h,h,new B.dEl(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DH(h,A.qf,q)}else q=A.kC
q=C.v(C.a([C.E(q,1),new C.D(F.Yg,i.bXV(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cYU[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEm(i,o),o.c,A.bW,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dEn(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hB(A.cb,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dEo(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F3(D.atH[j],i.CW===j,new B.dEp(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEq(i),D.akp,A.aR,h),new B.fi(A.k2,"Reset view",new B.dEr(i),A.c,h),new B.dA(l,m,new B.dEs(i),A.Ga,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEt(i),A.o3,A.cb,h))
p.push(new B.eQ(v,h,h))
return B.jK(A.bW,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aKB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aKC.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bu_()}}
B.c_U.prototype={
kA(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hjn
$.hjn=v+1
u="ngmy-body-viewer-"+v
$.yv()
$.qb().pU(u,new B.c_V(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_W(t),!1,x.gA)
t.b=u},
eX(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byA(w.contentWindow)
if(w!=null)J.fQW(w,e,"*")}}catch(v){}}}
B.xY.prototype={}
B.C7.prototype={}
B.nk.prototype={}
B.ba6.prototype={}
B.U2.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aC9(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC9.prototype={
a_(){var w=this
w.a1()
w.le()
w.abW()
$.aW.x1$.push(new B.dGG(w))},
abW(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abW=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abW)
case 6:q=e.t8("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dGk(s,r))
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
return C.i($async$abW,v)},
acf(d){return this.c0H(d)},
c0H(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acf=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.aA(),$async$acf)
case 6:r=f
q=s.cx
p=C.a3(q).k("jP<co.E,m>")
q=C.C(new C.jP(q,new B.dGn(),p),p.k("J.E"))
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
return C.i($async$acf,v)},
aw8(d,e,f,g){var w="c"+this.y++,v=new B.C7(w,e,f,g)
this.d.n(0,w,v)
return v},
my(d,e,f){return this.aw8(0,e,f,0)},
abg(d,e){var w
if(D.yX.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tz(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRx(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fS$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e4(m,D.cJ8[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tz(p,0)&&n.tz(p,1)
break
case"or":p=q.a
o=n.tz(p,0)||n.tz(p,1)
break
case"xor":p=q.a
o=n.tz(p,0)!==n.tz(p,1)
break
case"nand":p=q.a
o=!(n.tz(p,0)&&n.tz(p,1))
break
case"nor":p=q.a
o=!(n.tz(p,0)||n.tz(p,1))
break
case"not":o=!n.tz(q.a,0)
break
default:o=n.tz(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMV(){return this.aRx(null)},
lz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMV()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f7(w,new B.dGH()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fS$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fS$)
o=s+1
E.dF(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
aw9(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m2(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
asp(d){var w=this
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dGi(w,d))
return}w.m(new B.dGj(w,d))},
cuZ(d){this.m(new B.dGo(this,d,$.bDq()[d]))},
c5i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDq()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dGd(),t),s)
A.d.b0(r,new B.dGe())
q=C.C(new C.a_(new C.bc(v,u),new B.dGf(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGg(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h1(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRx(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jJ(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dGh(d,o,a0))},
awX(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
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
cdO(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
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
bXO(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yX.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abg(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bLQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abg(p,o)
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
c5k(d){var w,v,u,t=this,s=t.awX(d)
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
t.m(new B.dGp())
return}u=t.bLQ(d)
if(u!=null)t.m(new B.dGq(t,u))
else t.m(new B.dGr(t))},
auY(d){return this.c_H(d)},
c_H(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auY=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awX(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dGm(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auY,v)},
byK(d){if(this.x.A(0,A.au))return
this.m(new B.dGc(this,d,A.cH))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDq()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o3:O.rg,A.ad,h,h,h,21),h,h,h,new B.dGA(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.co.j(0.14)
r=C.I(A.co.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eZt,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f6G,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lN,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b1:A.f4,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fo4,i.gc5h(),C.bm(A.co,h,h,h,h,h,h,h,h,h,h,A.cd))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.M4,D.brl,h,h,1/0))}u.push(C.E(C.cq(new B.dGB(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yX.h(0,r).a+": "+D.yX.h(0,r).e,h,h,h,h,h,h,A.rO,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A9.agY,A.bS,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yX.gdK(D.yX),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aD(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bD,new C.x(p.a,h,D.aQ5,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fz,Al.M0,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGC(i,r),h,h,h,h,h,h,!1,A.a7))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d9R[l]
s.push(new B.fi(A.NF,k.b,new B.dGD(i,k),A.co,h))}s.push(new B.fi(D.y5,"Clear",new B.dGE(i),A.cb,h))
r=C.a([],g)
for(j=0;q=$.bDq(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ef:A.ll
o=i.ay
n=i.cx.t(0,j)?A.b1:A.bZ
r.push(new B.dA(q.a,o===j,new B.dGF(i,j),p,n,h))}return B.jK(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.bap.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.abM.gp(0)
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
g=a5.abg(j,m.c)
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
l.b=A.ae
l.c=9
l.r=A.bZ.j(0.28).gp(0)
l.z=G.mE
s=l.H()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bQ
l.r=(f?A.dP:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HY)
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
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aQ(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c5j(a7,a5.d)},
c5j(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yX.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cl(a0.c,64,64)
s=C.bx(t,A.l5)
r=w.cy===v
q=s.eS(A.cx)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lt
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bU(a0.c,52)))
d.af(q,52,p)}q=s.eS(A.cJ)
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
q.saq(new C.a8(A.b_,A.b4,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.NM:D.bFs}else l=e.b
k=B.fWk(C.jJ(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aC(0,new C.u(p/2,q.gbd(q)/2)))
j=B.fWk(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fWk(f,9,u?A.dP:A.c2,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aY9(d,w.abg(a0,h),o)
this.aY9(d,a0.c.ad(0,D.HY),o)},
aY9(d,e,f){var w
$.W()
w=C.N()
w.r=D.abM.gp(0)
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
B.aKH.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwk.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bu5()}}
B.N5.prototype={
T(){return new B.aCq(C.mz(0,null,null))}}
B.K9.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ao.prototype={}
B.aCq.prototype={
c5o(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMv(w,e))},
bZA(){var w=this
w.e.q()
w.e=C.mz(w.f,null,null)
w.m(new B.dMu(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oj(t,C.c7(v,A.bY,t?new B.bqn(w.e,w.gc5n(w),new B.dMw(d),v):new B.aGH(u,new C.cy(u.b,x.gj)),v,!1,!1,v,!1),new B.dMx(w,u),x.C)}}
B.brW.prototype={}
B.bqn.prototype={
aYa(d,e){var w=null
return new C.D(I.YH,C.v(C.a([C.d(d,w,w,w,w,w,w,D.f_2,w,w,w),A.bD,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nk,v,v,v,w.e,v,v,v,v,v,v),A.rI,D.bxa],u),A.m,v,A.e,A.j,0,v,v),s=w.aYa("STUDIOS","Play, make things, and keep what you make")
$.bDr()
return C.bl(!0,C.v(C.a([new C.D(D.bwd,t,v),C.E(C.vu(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.m7(s,v),new C.nO(A.hN,C.OF(new C.om(new B.eXf(d),22,!0,!0,!0,0,C.rS(),v),D.aO3),v),new C.m7(w.aYa("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nO(D.brs,C.OF(new C.om(new B.eXg(w),6,!0,!0,!0,0,C.rS(),v),D.aO3),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeu.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.aq(F.n4,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aew],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eE(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b8,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fq,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.adm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.aq(F.n4,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aew],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGL,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BJ,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b8,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fq,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.PO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RQ,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.deY,j),A.n),A.be),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brl(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f0C,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.T2)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fJ,C.B(C.a([s,A.er,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bZ(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c0(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
B.brl.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j3(0,0.35)
t=C.cl(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aY(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.bqR.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bfs,D.adH],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k7,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.jm,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b95(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.be),w)}}
B.b95.prototype={
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
d.af(u,30,t)},
au(d){return!1}}
B.aGH.prototype={
T(){return new B.aGI(new C.cs(null,x.A),null,null)}}
B.aGI.prototype={
gtW(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.boR,null,1,null,v)
w.cJ(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZ6(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fe(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawa(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc5l(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUG(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVn(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb5O(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtW()
w.da()
w.dS$.K(0,this.gcuI())},
cuJ(){var w,v,u,t,s,r,q,p=this,o=p.gtW().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawa().a){case 0:w=D.nn
break
case 1:w=D.ub
break
case 2:w=D.a22
break
case 3:w=D.nn
break
case 4:w=D.d2L
break
case 5:w=D.ub
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9u)r=0.09
else r=s===D.a9v?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bYc[v]
B.lg("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.By("bell",D.c5W,1400,0.35)}}p.ax=o},
q(){this.gtW().q()
this.gZ6().q()
this.bvY()},
afD(){var w=this
w.gtW().cTO(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eWW(w))},
cfQ(){this.gtW().bY(0)
this.m(new B.eWV(this))},
ade(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ade=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaVn(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5O(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aN),$.aw()))}o=C.C(u.gaUG(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bR(F.n4,null,new B.eWU(u,l,m,o),t,!0,!0,!0,A.lv,!1,!1,x.H),$async$ade)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$ade,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawa(),f=i.a.c,e=f.b,d=i.gc5l(),a0=new B.Ao(g,e,f.c,d,i.gaUG(),i.gaVn(),i.gb5O())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o3:O.rg,A.ad,h,h,h,21),h,h,h,new B.eX3(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bP2,h,h,h,i.gc5m(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mB,h,h,h,new B.eX4(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZ6(),new B.eX5(i,a0),h),C.cq(new B.eX6(i,a0))],g)
u=i.as
t=u?i.gcfP():i.gci7()
u=u?D.bEI:A.tZ
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cd),C.E(C.c6(i.gtW(),new B.eX7(i,a1,a0),h),1),C.aH(h,h,h,h,D.bLr,h,h,h,new B.eX8(i),h,h,h,h,"Replay",A.cd)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hB(r,u+"x","Speed",2.5,0.4,new B.eX9(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dch[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eXa(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bYx[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.b2
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aD(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agI,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eXb(i,n),h,h,h,h,h,h,!1,A.a7))}return B.jK(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b0,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxW(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
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
e.push(new C.cL(0,r*118,0,f,f,f,new C.kF(q,new C.iH(n,f,A.b_,!0,f,new B.PO(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nn[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nn[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mi(new B.bq_(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bOm(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.ub[r]
p=A.pJ.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
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
m.jI(n,n,n,1)
m.fB(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PO(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fB(3.141592653589793)
k=new C.iH(k,f,A.A,!0,f,new B.bqR(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kF(q,new C.iH(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
czH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a22[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btq(d.d,l,D.avm,m,B.bqm(e,0.4,0.62),f,B.bqm(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fWQ(g,w)
q=D.avm[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fWQ(g,w)
r=D.a22[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kF(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.TN,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bE5(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqm(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bpr(A.d.gI(a1),B.bqm(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e33),f,f,f),0,0,0))
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
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kF(k*(0.45+0.55*o),C.dU(new C.iH(l,f,A.A,!0,f,new B.PO(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eWN())
A.d.v(a0,new C.L(w,new B.eWO(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bDh(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.ub[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mQ.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.ub[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axm[q]
k=C.dp()
k.mL(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jI(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.ub[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kF(m,C.dU(new C.iH(k,e,A.A,!0,e,new B.PO(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.ub[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dU(new C.mi(new B.b9L(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.axm[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAR(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e37],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nn[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.axt[r]
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
f.mL(l*h+D.d6D[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jI(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kF(g,C.dU(new C.iH(f,a3,A.A,!0,a3,new B.PO(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nn[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axt[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dU(new C.mi(new B.bpt(A.d.gI(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bq_.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.he)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mE
d.aE(q,t)
t=C.bx(u,A.he)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bpr.prototype={
a4(d,e){var w,v,u=this.c,t=C.cl(e.ea(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.Hr
d.hR(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hR(t,u)
u=t.cD(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hR(u,v)},
au(d){return!0}}
B.b9L.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ea(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eM()
t.dB(this.d*17+3)
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
B.bpt.prototype={
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
B.btq.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b_,A.b4,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aY(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bD(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fWQ(c5,f)
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
a7=C.aq(A.d.gI(w),A.c,0.1)
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
a6=a8.gbM().a.snapshot()
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
a2.r=C.aq(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbM().a.snapshot()
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
t.drawPath((a2==null?a8.e=new C.cE(a8.gbM().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbM().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bv(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.he)
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
B.aMq.prototype={
aS(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdC())
w.b2$=null
w.a2()}}
B.a_W.prototype={
a5(){return"_Role."+this.b}}
B.q0.prototype={}
B.qG.prototype={}
B.Cb.prototype={}
B.YT.prototype={}
B.aek.prototype={}
B.a08.prototype={
gZ(d){return this.d}}
B.Cl.prototype={}
B.abd.prototype={}
B.abu.prototype={}
B.adq.prototype={}
B.bge.prototype={
a2a(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6O(d,e,f){return this.a2a(d,e,f,0,0.55)},
aAL(d,e,f,g){return this.a2a(d,e,f,0,g)},
b6P(d,e,f,g){return this.a2a(d,e,f,g,0.55)},
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
ajh(d,e,f,g){var w="n"+this.ay++,v=new B.qG(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
B_(d,e,f){return this.ajh(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bp(w.b,new B.dgo(e))
A.d.bp(w.c,new B.dgp(e))
w.aW()},
baC(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mD.h(0,v.b).c===D.wG)return!1
w=this.b
if(A.d.b5(w,new B.dgl(d,e)))return!1
w.push(new B.Cb(d,e))
this.aW()
return!0},
bYy(d){var w
if(d.b==="beat")return D.c64[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aEd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.axI[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cl(u,t,j.ax,90))
w.push(new B.Cl(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a08(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6O(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a08(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.Cl(u,t,j.ax,120))
j.aAL(120,200,"noise",0.5)
j.b6O(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cl(u,t,j.ax,230))
w.push(new B.Cl(u,t,j.ax+160,160))
w.push(new B.Cl(u,t,j.ax+320,100))
j.b6P(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abd(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6P(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abu(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a2a(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2a(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adq(u,D.ax9[v],t,j.ax))
j.aAL(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAL(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c2b[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cpQ(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f7(w,new B.dgm(d));v.C();)j.azf(w.gR(0),j.ax+D.cet[A.o.E(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cvn[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f7(w,new B.dgn(d));v.C();)j.azf(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.za(w,0,v-700)},
cpQ(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YT(e,"~"+d))},
azf(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aek(d.a,v,e,w))
u.push(new B.YT(w,v))},
aHz(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEd(r)
u.n(0,r,o.ax+o.bYy(s))}}w=o.c
v=C.U(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dgq(o),v),v.k("J.E"))
if(q.length!==0){A.d.bp(w,new B.dgr(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b4(u,1)
for(u=A.d.gae(v),r=new C.f7(u,new B.dgs(p));r.C();)o.azf(u.gR(0),o.ax)}else o.aEd(u)}}A.d.bp(o.d,new B.dgt(o))
A.d.bp(o.e,new B.dgu(o))
A.d.bp(o.f,new B.dgv(o))
A.d.bp(o.w,new B.dgw(o))
A.d.bp(o.x,new B.dgx(o))
A.d.bp(o.r,new B.dgy(o))
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
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cLv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aI(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.t(J.q(v,"k"))
if(!D.mD.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qG(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cb(q,p))}k.aW()
return!0}catch(l){return!1}},
cOx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.baC(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
B.FE.prototype={}
B.Vw.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDG(new B.bge(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cH,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDG.prototype={
abO(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abO=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$abO)
case 6:q=n.jL(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.elU(s))
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
return C.i($async$abO,v)},
a8M(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8M=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.elJ(s))
u=3
w=6
return C.b(C.aA(),$async$a8M)
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
return C.i($async$a8M,v)},
bK3(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cK(0,0,new B.elL())+"|"+A.d.cK(o,0,new B.elM())
if(v===p.ch)return p.CW
u=new B.elP()
t=x.s
s=C.a([],t)
r=new B.elQ(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f7(n,new B.elN());w.C();){q=n.gR(0)
if(!A.d.b5(o,new B.elO(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abO()
v.d.db=v.ay
w=v.qy(new B.emj(v))
w.iW(0)
v.e!==$&&C.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a6(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.buY()},
abk(d){return this.bY0(d)},
bY0(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abk=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$abk)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cLv(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVQ(A.d.gI(D.awC))
if(s.c!=null)s.m(new B.elT())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abk,v)},
aVQ(d){this.d.cOx(0,d.c,d.d)
this.E4()},
E4(){var w=this.as
if(w!=null)w.a6(0)
this.as=C.cM(A.lM,new B.elF(this))},
awb(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
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
cdP(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
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
bXP(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mD.h(0,r.b).c===D.wG)continue
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
c5r(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hjo(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cxs(d){var w,v,u,t,s,r,q=this,p=q.awb(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aEd(p)
return}if(q.r)return
t=D.mD.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qx)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aW()
q.E4()
return}if(q.r)return
r=q.c5r(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aW()
q.E4()}},
cf7(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cdP(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awb(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cf8(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_R(){var w,v,u=this
if(u.z!=null){w=u.bXP(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.baC(v,w)}else v=!1
if(v){C.jR()
u.E4()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.E4()
u.x=null}},
ac1(d){return this.c_I(d)},
c_I(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ac1=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awb(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bR(F.n4,null,new B.elW(q),p,!0,!0,!1,A.lv,!1,!1,x.y),$async$ac1)
case 3:if(f===!0){r.W(0,s)
t.E4()}case 1:return C.h(u,v)}})
return C.i($async$ac1,v)},
c5p(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B_(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.E4()},
afL(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bR(F.n4,null,new B.elY(),s,!0,!0,!0,A.lv,!1,!1,x.es),$async$afL)
case 2:t=e
if(t!=null)u.aVQ(t)
return C.h(null,v)}})
return C.i($async$afL,v)},
adf(d){var w=0,v=C.j(x.H),u=this,t
var $async$adf=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.elI(),t,null,!0,!0,x.y),$async$adf)
case 2:if(f===!0){u.d.a9(0)
u.E4()}return C.h(null,v)}})
return C.i($async$adf,v)},
B(d){var w=this,v=null,u=C.a([C.ahK(w.r?new C.bI(A.a3,v,v,new C.D(A.Fr,C.hg(D.bJr,D.fh3,new B.emh(w),v),v),v):w.c5s(),A.bc,A.ix),C.E(C.cq(new B.emi(w)),1)],x.p)
if(!w.r)u.push(w.csh())
return C.c7(v,A.bY,C.bl(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bFM(){var w=null,v=new B.elK(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bu.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.c9(C.v(C.a([D.fs0,A.at,D.fzr,A.aB,v.$4(A.oQ,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BH,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lk,A.bW,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akC,A.bZ,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fyM,new C.bI(A.a8,w,w,C.bK(!1,D.fpf,w,w,!0,w,w,this.gbFF(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.Vk,new C.o(F.n4,w,s,t,w,w,A.n),w,w,w,A.fA,A9.ahY,w,w,w),w,w,w),u,!0),0,0,0)},
c5s(){var w=this,v=null,u=C.aH(v,v,v,v,S.nk,v,v,v,new B.em3(w),v,v,v,v,v,v),t=w.a8e(A.Nu,"How it works",new B.em4(w),!0),s=w.ay?A.o3:O.rg
return new C.D(D.bvt,C.B(C.a([u,D.bwX,t,w.a8e(s,"Sound",new B.em5(w),!0),w.a8e(A.dW,"Ideas",w.gciQ(),!0),w.a8e(D.y5,"Clear",w.gc5q(w),!0),w.aMP(A.iC,"Show",new B.em6(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMP(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ae.vt,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hs(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8e(d,e,f,g){return this.aMP(d,e,f,g,!1)},
csh(){var w=null,v=new B.em_(this),u=A.c.j(0.08)
return C.p(w,C.c9(C.B(C.a([v.$2("START",D.wG),v.$2("CHANGE",D.DF),v.$2("REACT",D.qx)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.Ax,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bqL,w,w,w)},
csi(d){var w,v,u,t,s=null,r=D.mD.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fz,C.aD(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aQ5,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hM,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.elZ(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
B.bgf.prototype={
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
a2=D.mD.h(0,k.b).d
a3=D.mD.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bQ
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rs(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a8,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hjo(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mE
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HY)
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
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aQ(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
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
o.d=A.bQ
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rs(i,h)
o.saq(new C.a8(A.a3,A.a8,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jp
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
i.z=A.jp
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bT(P.pm,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgg(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.ceG(b8,b5.d,b6)
b7.restore()},
ceG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mD.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cl(e.c,64,64)
t=C.bx(u,A.iH)
s=t.eS(A.cx)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lt
d.aE(s,r)
if(v>0){s=t.cD(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yZ
d.aE(s,r)}s=t.eS(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aE(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b_,A.b4,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgg(C.jJ(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aC(0,new C.u(s/2,r.gbd(r)/2)))
n=B.bgg(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.ax9[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qx){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axI[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgg(m,9.5,A.aA,j,j,A.N)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgg(m,9.5,A.aA,j,j,A.N)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wG)k.b0G(d,e.c.aC(0,D.HY),q)
k.b0G(d,e.c.ad(0,D.HY),q)},
b0G(d,e,f){var w
$.W()
w=C.N()
w.r=A.bY.gp(0)
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
B.aLx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bkP.prototype={}
B.PE.prototype={
gZ(d){return this.d}}
B.VL.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjT(new C.cs(null,x.A),w,v,A.cH,A.bx,D.EE,null,null)}}
B.bjT.prototype={
aZp(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bv((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aw0[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lg("synth",u,420,0.3)
break
case"rainbow":B.lg("bell",u,700,0.35)
break
case"stars":B.lg("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c8r(d){return this.aZp(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qy(new B.exZ(v))
w.iW(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bv6()},
gb0a(){var w=this.Q
return w<0?new H.mO(1,A.k.E(this.y*0.18,360),0.85,1).iC():D.Qy[w]},
aRb(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0a(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bZ,A.ay,v.aj())
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
aYc(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0a()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkP(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRb(e)
r.aZp(e,!0)
r.m(new B.exA())},
aYb(){this.ax=null
this.m(new B.exz())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mB,n,n,n,new B.exJ(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brg(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b4J)
k=C.aD(A.c5,new C.an(A.W,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.exK(o),new B.exL(o),new B.exP(o),n,n,n,n,n,n,n,n,n,new B.exQ(o),new B.exR(o),n,n,n,!1,A.a7)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cTl[w]
j.push(new B.dA(v.b,o.z===v.a,new B.exS(o,v),v.c,A.bW,n))}u=C.a([new B.F3(A.c,o.Q<0,new B.exT(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F3(D.Qy[t],o.Q===t,new B.exU(o,t),!1,n))
s=o.as
s=B.hB(A.bW,A.o.u(A.k.V(s)),"Size",36,4,new B.exV(o),s)
r=o.ch
q=r?A.o3:O.rg
q=C.a([new B.dA("Sound",r,new B.exW(o),q,A.bW,n),new B.fi(A.rf,"Undo",new B.exM(o),A.c,n),new B.fi(D.y5,"Clear",new B.exN(o),A.cb,n)],m)
for(w=0;w<4;++w){p=D.d8c[w]
q.push(new B.F3(p,o.at.A(0,p),new B.exO(o,p),!1,n))}return B.jK(A.bW,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.brg.prototype={
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
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.U(q),m=p.k("nj<1>"),l=new C.nj(q,1,a5,m),l.zG(q,1,a5,p.c),l=new C.bS(l,l.gM(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
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
q.d=A.bQ
q.e=A.fB
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hw(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bQ
q.e=A.fB
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bQ
q.e=A.fB
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mO(1,A.o.E(i*5,360),0.85,1).iC()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bQ
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mO(1,A.o.E(a3*23,360),0.7,1).iC():l
a4.c5t(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.R1
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c5t(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
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
p.z=A.jp
d.aQ(n,p)
p=C.N()
p.r=h.gp(0)
d.aQ(n,p)},
au(d){return!0}}
B.VX.prototype={
T(){return new B.aDW(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aN),$.aw()),null,null)}}
B.aDW.prototype={
gIE(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tB,null,1,null,v)
w.cJ(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIE()
w.da()
w.dS$.K(0,this.gbWW())},
bWX(){var w,v,u,t,s,r,q,p=this,o=p.gIE().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m2:new C.m8(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lg(s,D.auY[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIE().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bvc()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m8(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.Qy[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mB,j,j,j,new B.eEy(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.axa[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gIE(),new B.eEz(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Dj,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eEA(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ht,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cv9[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eEB(k,q),j,A.bZ,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F3(D.Qy[o],k.w===o,new B.eEC(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o3:O.rg
l=C.a([new B.dA(m,n,new B.eED(k),l,A.bZ,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F3(D.axa[o][0],k.y===o,new B.eEE(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mx,"Replay",new B.eEF(k),A.c,j))
m=k.x
return B.jK(A.bZ,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bA,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.O,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hB(A.bZ,A.o.u(A.k.V(m)),"Size",96,28,new B.eEG(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZK(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
if(u&&(e&1)===0)w=A.b9
else w=u?A.bW:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mQ.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mO(1,A.k.E(g*360+e*40,360),0.75,1).iC()
A.d.a9(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dU(C.ed(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLG.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aLM.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.a_q.prototype={}
B.Vt.prototype={
T(){var w=C.a([],x.aS)
return new B.aDy(new C.cs(null,x.A),w,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDy.prototype={
gadg(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b1q(){return new H.mO(1,this.f.aj()*360,0.6,1).iC()},
aqI(d,e,f,g){var w=this,v=w.gadg().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_q(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b1q(),C.a([],x.g)))},
bF6(d,e,f){return this.aqI(d,e,f,!1)},
bF5(d,e){return this.aqI(d,e,1,!1)},
cuD(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bF5(40+w*u/5,v.aj()*3.141592653589793*2)},
bG0(){var w=this.r
this.bF6(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.le()},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fS$<300)return
u=a2.gadg()
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
B.lg("bell",D.auY[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.eiq(u),C.U(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bp(w,new B.eir(a2,u))},
ciJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadg()
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
gaVs(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mB,r,r,r,new B.eie(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.eif(s)),n=s.w
n=B.hB(A.cs,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.eig(s),n)
w=s.x
w=B.hB(A.cs,A.k.ab(w,1)+"x","Time",3,0.2,new B.eii(s),w)
v=s.Q
v=B.hB(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.eij(s),v)
u=s.ax
t=u?A.o3:O.rg
return B.jK(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.eik(s),t,A.cs,r),new B.dA("Trails",s.z,new B.eil(s),A.NL,A.cs,r),new B.dA("Planets pull each other",s.y,new B.eim(s),A.yt,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fi(A.mw,"Solar system",new B.ein(s),A.cs,r),new B.fi(A.nj,"Comet",new B.eio(s),A.c,r),new B.fi(A.mt,"Cluster",new B.eip(s),A.c,r),new B.fi(D.y5,"Clear",new B.eih(s),A.cb,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bkC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.WD.gp(0)
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
d.af(g,f,t)
t=C.N()
t.saq(D.eeP.av(0,C.bU(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bQ
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mE
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bT(P.pm,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.je.gp(0)
d.bD(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abk.prototype={}
B.VS.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjY(new C.cs(null,x.A),w,v,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjY.prototype={
a_(){this.a1()
this.le()},
c5u(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abk(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c5u()
w=a2.f
A.d.bp(w,new B.eE_(a2))
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
A.d.bp(w,new B.eE0(a2))
if(w.length<a1&&a2.ch)B.lg("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fS$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fS$
B.lg("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mB,l,l,l,new B.eDP(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eDQ(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cUY[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eDR(m,v),v.c,A.b1,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cF4[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eDS(m,t),l,A.b1,l))}s=m.ch
r=s?A.o3:O.rg
r=C.a([new B.dA("Sound",s,new B.eDT(m),r,A.b1,l)],k)
s=m.x
s=B.hB(A.b1,A.o.u(A.k.V(s)),"How many",150,15,new B.eDU(m),s)
q=B.hB(A.b1,l,"Together",2.5,0,new B.eDV(m),m.y)
p=B.hB(A.b1,l,"Apart",2.5,0,new B.eDW(m),m.z)
o=B.hB(A.b1,l,"Same way",2.5,0,new B.eDX(m),m.Q)
n=m.as
return B.jK(A.b1,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hB(A.b1,A.o.u(A.k.V(n)),"Speed",280,50,new B.eDY(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bs7.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adw,D.bkq],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,U.Lk],v):C.a([D.bhn,D.b8F],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b_,A.b4,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aY(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bZ.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bZ.j(0.25).gp(0)
n.z=G.mE
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mO(1,j,0.7,1).iC()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jp
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
j=d.gbM().a.snapshot()
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
j.push(new C.cV(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cV(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cz,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).av(0,D.eJR))
o=j.H()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cb
else a1=v==="scare"?A.bZ:A.b1
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.abN.prototype={}
B.U0.prototype={
T(){var w=C.a([],x.bi)
return new B.aC8(w,A.cH,A.au,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC8.prototype={
gI1(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaci(){return 54-8*(this.r/100)},
a_(){this.a1()
this.le()
B.zm("chain_burst").bz(new B.dFP(this),x.P)},
aYe(){return B.vT("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azj(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abN(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mO(1,u.aj()*360,0.6,1).iC()))}},
Z7(d){var w,v=this
if(d==null)return 0
w=(v.fS$-d)/1000
if(w<0.4)return v.gaci()*A.dU.aw(0,w/0.4)
if(w<1.1)return v.gaci()
if(w<1.5)return v.gaci()*(1-(w-1.1)/0.4)
return 0},
lz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.azj()
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
if(v!=null)n.push(new C.z(v,j.Z7(j.ax)))
for(v=A.d.gae(w),s=new C.f7(v,new B.dFQ());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Z7(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
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
break}}}if(!(j.at!=null&&j.Z7(j.ax)>0||A.d.b5(w,new B.dFR(j)))&&j.fS$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gI1()){if(j.as>=j.gI1()*1.5)k=3
else k=j.as>=j.gI1()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aYe()}else E.dF(120,"",300,0,0.3,"saw")}}},
aYd(d){this.m(new B.dFF(this,d))
this.aYe()},
adh(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adh=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dFI(u),s,null,!0,!0,x.S),$async$adh)
case 2:t=e
if(t!=null)u.aYd(t)
return C.h(null,v)}})
return C.i($async$adh,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gI1(),t=w.x.h(0,""+w.r)
return B.jK(A.bW,A.hc,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dFM(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.rb,"Levels",w.gc5v(),A.bW,v),new B.fi(A.k2,"New board",new B.dFN(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auc(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPq,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bXr(d,e){return this.auc(d,e,A.c)}}
B.ba5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EE.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKU(d)
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
p.z=G.mE
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
B.aKF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwj.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bu3()}}
B.aLu.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwA.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buV()}}
B.aLJ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwI.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv9()}}
B.FA.prototype={
gcNN(){return this.a.aC(0,this.b).gcm()>4}}
B.acC.prototype={}
B.Vn.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjx(new C.cs(null,x.A),w,v,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjx.prototype={
aOP(d){return new H.mO(1,A.o.E(d*29,360),0.6,1).iC()},
ZS(d){var w,v=D.Ch.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bv(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e4(w,u)},
aRs(d){A.d.bp(this.e,new B.edU(this,d))},
cqI(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
axP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.ZS(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.FA(p,r,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iC()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZS(h)
f.push(new B.FA(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iC()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZS(h)
f.push(new B.FA(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iC()))}}},
a_(){this.a1()
this.le()},
c5x(d,e){var w,v=this.fS$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lg(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acC(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mO(1,v.aj()*360,0.5,1).iC()))}if(u>3)a2.as=0
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
if(a1<0){a2.c5x(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bp(w,new B.eei(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o3:O.rg,A.ad,p,p,p,21),p,p,p,new B.ee7(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mB,p,p,p,new B.ee8(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.ee9(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cYl[w]
l.push(new B.dA(v.b,q.x===v.a,new B.eea(q,v),v.c,A.b9,p))}u=C.a([],o)
for(t=J.aV(D.Ch.gec(D.Ch));t.C();){s=t.gR(t)
u.push(new B.dA(s,q.y===s,new B.eeb(q,s),p,A.b9,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ay4[w]
t.push(new B.dA(r.b,q.z===r.a,new B.eec(q,r),p,A.b9,p))}s=q.Q
return B.jK(A.b9,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hB(A.b9,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.eed(q),s),new B.eQ(C.a([new B.fi(D.bFh,"Stairs",new B.eee(q),A.b9,p),new B.fi(An.Nt,"Pinball",new B.eef(q),A.c,p),new B.fi(A.mt,"Random",new B.eeg(q),A.c,p),new B.fi(D.y5,"Clear",new B.eeh(q),A.cb,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh9.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bWg.av(0,new C.a9(0,0,a0,a1)))
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
q.b=A.ae
q.d=A.bQ
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jp
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bQ
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jp
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bT(P.pm,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bQ
u.r=A.aA.gp(0)
a2.bD(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rq
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bT(P.pm,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.ad7.prototype={}
B.Vs.prototype={
T(){var w=C.a([],x.gB)
return new B.aDx(new C.cs(null,x.A),w,A.cH,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDx.prototype={
gaYf(){var w=this.w
return new C.u(w.a/2,w.b/2)},
ay1(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
aze(d){var w=D.Ch.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e4(v,u)},
a_(){this.a1()
this.le()},
aQb(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.ad7(w,A.k.E(t/v+u,1)))}},
lz(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fS$
if(p.Q){r=p.z
s=p.aze(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lg(r,s+12,q,0.55)}}}},
c5y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaYf()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ay1(v)-e)
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
m=h.ay1(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ehO(h,n).$0()
h.c.ed()
return}}h.m(new B.ehP(g,h,t))
if(h.Q)B.lg(h.z,h.aze(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o3:O.rg,A.ad,q,q,q,21),q,q,q,new B.ehW(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mB,q,q,q,new B.ehX(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ehY(r)),m=r.x
m=B.hB(A.bt,""+A.k.V(m),"Tempo",180,40,new B.ehZ(r),m)
w=C.a([],p)
for(v=J.aV(D.Ch.gec(D.Ch));v.C();){u=v.gR(v)
w.push(new B.dA(u,r.y===u,new B.ei_(r,u),q,A.bt,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ay4[t]
v.push(new B.dA(s.b,r.z===s.a,new B.ei0(r,s),q,A.bt,q))}return B.jK(A.bt,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fi(A.dW,"Demo",new B.ei1(r),A.bt,q),new B.fi(A.mt,"Random",new B.ei2(r),A.c,q),new B.fi(D.y5,"Clear",new B.ei3(r),A.cb,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bkD.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.WD.gp(0)
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
a5.bD(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mO(1,A.k.E(s.$1(l)*23,360),0.55,1).iC()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.deR[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.eq(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.ca,new C.ju(1),a4,a4,a4,a4,A.c8,a4)
i.eA()
o=i.b.c
m=J.fQD(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.saq(D.eer.av(0,C.bU(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mO(1,A.k.E(s.$1(a0)*23,360),0.55,1).iC()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fQD(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jp
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bT(P.pm,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLs.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buT()}}
B.aLt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwz.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buU()}}
B.tb.prototype={}
B.b8Z.prototype={}
B.Vq.prototype={
T(){var w=x.S
return new B.aDv(C.a([],x.aq),C.T(w,w),C.aX(w),D.ePI)}}
B.aDv.prototype={
a_(){this.a1()
B.zm("molecule_maker").bz(new B.ehi(this),x.P)},
aiQ(d){var w={}
w.a=0
this.f.bK(0,new B.eh4(w,d))
return w.a},
gaYl(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i0j(t,this.f,D.a2y[this.d])},
c5P(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eM()
w.dB(t*7+3)
t=v.y
v.m(new B.egZ(v,e,t.a,w,t.b))
B.vW("pop",u.length,90,0.35)},
awf(d){return this.m(new B.eh_(this))},
aYm(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c5V(d){this.m(new B.eh3(this,this.aYm(d)))},
cnb(){var w=this.r
if(w==null)return
this.m(new B.eh2(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2y[k.d],h=k.gaYl()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w0.h(0,w[u].a).a-k.aiQ(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.ehc(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b1:A.hx
r=x.p
s=C.v(C.a([new C.D(A.fI,B.fbR(w,s,h&&k.d<12?new B.fi(A.iX,"Next",new B.ehd(k),A.b1,j):j),j),C.E(C.cq(new B.ehe(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2y[u].b,k.d===u,new B.ehf(k,u),j,A.hx,j))}q=C.a([],r)
for(p=D.w0.gdK(D.w0),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.ehg(k,o),j,l,j))}return B.jK(A.hx,A.hc,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcna(),A.e6,A.cb,j),new B.dA("Clear all",!1,k.gc5Q(k),A.k2,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhR.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hx.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bK(0,new B.dou(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.w0.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jp
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
h.saq(new C.bT(A.JM,0.5,A.x,a3,0,C.a([f,g,e],r),I.aw9,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
d.eA()
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
a1.eA()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.hr(a3,a3,a3,a3,D.eYn,A.a4,A.ca,a3,A.e0,A.c8)
d.eA()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.Uo.prototype={
T(){var w=x.s
return new B.biN(C.a([],w),C.a([],w))}}
B.biN.prototype={
a_(){this.a1()
this.avz()
B.zm("dna_lab").bz(new B.dOz(this),x.P)},
gb2F(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3D.h(0,w[u])
t.toString
s.push(t)}return A.d.h_(s)},
ga8N(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2F(),w,v))}return u},
avz(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eM()
k.dB(l.e*31+l.d*7+C.BL(new C.S(Date.now(),0,!1)))
w=new B.dOo(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mF(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3D.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h_(r))}if(!A.d.b5(t,new B.dOn()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b0n()},
b0n(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fZn(s.ga8N()[r])
v=J.dH(D.Ci.gec(D.Ci),new B.dOp(w)).dH(0)
u=new C.eM()
u.dB(r+s.e)
A.d.fn(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eM()
t.dB(s.e*3+r)
A.d.fn(u,t)
s.z=u},
aYk(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dkR.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3D.h(0,w.f[v])
u.toString
break A}u=B.fZn(w.ga8N()[v])
break A}w.m(new B.dOm(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOx(),e=new B.dOs(),d=h.d===2?h.gb2F():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mM,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bW.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bW:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8N()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cm(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bpS,A.ek,g,g,g))}v.push(C.bY(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bY(A.bz,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Aj.NA,j<t.length?A.aA:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.M_,C.bY(A.bz,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mM,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b1.j(0.25):A.dr
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b1:A.b2,1,A.q,-1)
if(o){o=D.Ci.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c2
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bY(A.bz,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bY(A.bz,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fbR(u,t>=(h.d===2?3:9)?A.b1:A.bW,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fbR(u,A.bW,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.TF,g,g,g))
v=C.c9(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bA,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d2Z[j],h.d===j,new B.dOt(h,j),g,A.bW,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.k2,"New strand",new B.dOu(h),A.b1,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.Ci.h(0,i)
q.toString
a0.push(new B.fi(D.a_x,q,new B.dOv(h,i),A.bW,g))}u.push(C.bY(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.av2:D.cNe
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aD(g,C.p(A.A,new C.x(k,g,D.eYC,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOw(h,k),g,g,g,g,g,g,!1,A.a7))}u.push(C.B(a0,A.m,g,A.q6,A.j,0,g,g))}return B.jK(A.bW,A.hc,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.UE.prototype={
T(){return new B.aCC(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCC.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(v.gc5R())
w.iW(0)
v.d!==$&&C.aP()
v.d=w
B.zm("ecosystem").bz(new B.dRo(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bui()},
gaM9(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c5S(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaM9()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bv(w),5)===0)B.vT("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dRb())},
a9Z(d){this.m(new B.dRa(this,d))
B.vW("pop",3,120,0.4)},
c5U(){return this.m(new B.dRc(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.D(D.Yf,B.fbR(r,t.gaM9()?A.b1:A.cb,s),s),C.E(new C.D(D.bqo,C.bw(C.n(18),C.b3(s,s,s,new B.bda(t.f,t.r,t.w,s),A.f2),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f4D,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hB(A.b1,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dRg(t),w)
v=t.y
v=B.hB(A.bO,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRh(t),v)
u=t.z
return B.jK(A.b1,A.hc,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hB(A.cs,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRi(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dRj(t),A.yr,A.aM,s),new B.dA("Disease",!1,new B.dRk(t),D.bF9,A.bt,s),new B.dA("+ Foxes",!1,new B.dRl(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRm(t),s,A.bO,s),new B.dA("Reset",!1,t.gc5T(),A.k2,A.aR,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bda.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bUg.av(0,new C.a9(0,0,d,a0)))
a1.aY(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v2,A.bk,A.k.D(w[0]/100,0,1))
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
l.delete()}k=new B.d3C(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bde.gp(0)
a1.aY(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dr.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3E(h,j,a1)
g.$3(0,100,A.bk)
g.$3(1,120,A.bO)
g.$3(2,24,A.cs)
g=new B.d3D(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bk,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bO,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aKT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aRh.prototype={
guU(){return A.d.cK(this.a,0,new B.bFv())}}
B.TT.prototype={
T(){var w=x.S
return new B.bir(B.hYo(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bir.prototype={
gvR(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cK(t,0,new B.dC_())},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dCc(v))
w.iW(0)
v.x!==$&&C.aP()
v.x=w
B.zm("balance_lab").bz(new B.dCd(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btW()},
cxF(d){var w,v=this
v.m(new B.dC0(v,d))
B.vW("click",v.f[d],60,0.4)
if(v.gvR()===v.d[v.e].guU()&&v.r.K(0,v.e)){B.vW("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vT("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.L(k,new B.dC5(),C.U(k).k("L<1,m>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvR()===m[o.e].guU())s="\u2696\ufe0f Balanced! "+m[o.e].guU()+" = "+o.gvR()+". The torques are equal, so the seesaw stays level."
else s=o.gvR()>m[o.e].guU()?"The right side is too strong ("+o.gvR()+" vs "+m[o.e].guU()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guU()+" vs "+o.gvR()+"). Add weight to the right, or place it further from the middle."
k=o.gvR()===m[o.e].guU()?A.b1:A.aM
k=B.bzu(s,k,o.gvR()===m[o.e].guU()&&o.e<m.length-1?new B.fi(A.iX,"Next",new B.dC6(o),A.b1,n):n)
w=C.E(C.cq(new B.dC7(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guU(),n,n,n,n,n,n,D.aQD,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.D(D.Yf,k,n),w,new C.D(D.ah9,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvR(),n,n,n,n,n,n,D.aQD,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dC8(o,v),n,A.aM,n))}return B.jK(A.aM,A.hc,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dC9(o),A.k2,A.cb,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b9a.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bF())
v=C.N()
v.r=A.ak.gp(0)
d.aQ(i,v)
v=h-120
i=C.N()
i.r=A.aK.gp(0)
d.aY(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.j3(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hf)
w=C.N()
w.saq(D.bWY.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hK.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fp1(d,""+Math.abs(s),new C.u(w,22),A.c2,10)}q=new B.cDr(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aR)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bW)
if(w[s]===0){l=C.bx(C.cl(new C.u(m,-22),22,v),A.hf)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b2.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fp1(d,"+",new C.u(m,-22),A.c2,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b1:A.aL).gp(0)
d.af(new C.u(h,f),7,i)},
au(d){return!0},
gji(){return this.e}}
B.US.prototype={
T(){return new B.biZ(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.biZ.prototype={
ga0k(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadq(){var w=this.ga0k(),v=this.r,u=D.axN[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dVr(v))
w.iW(0)
v.x!==$&&C.aP()
v.x=w
B.zm("gear_lab").bz(new B.dVs(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buq()},
c5W(d,e){var w,v=this
v.m(new B.dVh(v,d,e))
if(v.gadq()&&v.w.K(0,v.r)){B.vW("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vT("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0k(),n=r.ga0k(),m=D.axN[r.r].a
m=r.gadq()?"\u2705 Done! Ratio "+A.k.ab(r.ga0k(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadq()?A.b1:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.D(D.Yf,B.bzu(m,w,r.gadq()&&r.r<7?new B.fi(A.iX,"Next",new B.dVl(r),A.b1,q):q),q),C.E(C.b3(q,q,q,new B.beE(v,r.f,q),A.f2),1),new C.D(D.ah9,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0k(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a7k,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVm(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hB(A.aR,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVn(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.ava("Gear "+s+" teeth",p,new B.dVo(r,t),8,40,D.dcs[t],""+p,q))}return B.jK(A.cs,A.hc,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.beE.prototype={
bPk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.efH,D.ekP,D.eAR,D.erV],s=v===0,r=0;r<4;++r){q=t[r]
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
n=A.d.fc(g,A.po)
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
h=new B.dbC(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mX)
h.$5(new C.u(t,0),g[1],w[1],i,A.fk)
s.restore()
s=new B.dbD(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aR)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b1)},
au(d){return!0}}
B.U1.prototype={
T(){var w=$.aw()
return new B.biE(new C.as(new C.bb("Meet me at noon",A.b5,A.aN),w),new C.as(new C.bb("LEMON",A.b5,A.aN),w),C.aX(x.S))}}
B.biE.prototype={
a_(){this.a1()
this.aX2()
B.zm("cipher_lab").bz(new B.dGb(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aX2(){this.y=1+A.cH.aB(25)
this.z=0},
ga9g(){var w=this
return B.a1l(B.a1l(D.GT[w.x],w.y),-w.z)===D.GT[w.x]},
gaxd(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1l(u,v.w)
break A}if(1===t){w=new C.L(C.a(B.a1l(u,0).split(""),x.s),new B.dFU(),x.dv).h_(0)
break A}w=B.ia6(u,v.e.a.a)
break A}return w},
aSl(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bS(w,w.gM(0),v.k("bS<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fc(q,A.A6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bC(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aR,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mj,r,r,r,r),new C.x(C.jJ(65+s),r,D.f6r,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lY,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG2(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f0I,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG3(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iJ,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fx3)
w.push(A.at)
v=A.aR.j(0.12)
u=C.n(14)
t=C.I(A.aR.j(0.4),A.q,1)
w.push(C.p(o,C.zG(p.gaxd().length===0?"\u2026":p.gaxd(),D.f5q,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bA,o,o,o))
w.push(A.ac)
w.push(B.bzu(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aR,o))
w.push(A.ac)
w.push(D.fdx)
w.push(A.at)
w.push(p.aSl(p.gaxd()))
w.push(A.at)
w.push(D.ffW)
s=C.cw(w,o,A.bA,o,o,A.ag,!1)}else{w=B.bzu("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1l(D.GT[p.x],p.y),o,o,o,o,o,o,D.f60,o,o,o)
u=(p.ga9g()?A.b1:A.aR).j(0.14)
t=C.n(14)
r=C.I((p.ga9g()?A.b1:A.aR).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fqG,v,A.S,D.fl4,C.p(o,C.d(B.a1l(B.a1l(D.GT[p.x],p.y),-p.z),o,o,o,o,o,o,D.f7t,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bA,o,o,o),A.ac,p.aSl(B.a1l(D.GT[p.x],p.y)),A.O],x.p)
if(p.ga9g())t.push(B.bzu("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b1,new B.fi(A.k2,"Next",new B.dG4(p),A.b1,o)))
s=C.cw(t,o,A.bA,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dG5(p),A.jm,A.aR,o),new B.dA("Crack a code",w===1,new B.dG6(p),A.pY,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dG7(p,q),o,A.aR,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hB(A.aR,""+u,"Shift",25,1,new B.dG8(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hB(A.aM,""+v,"Shift back",25,0,new B.dG9(p),v))}return B.jK(A.aR,A.hc,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aKx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aL0.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.eb.prototype={}
B.to.prototype={
apr(d,e,f,g){var w=this
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
B.a9T.prototype={}
B.ab_.prototype={}
B.a42.prototype={
bcs(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hd()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9T(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c1P(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bp(w,new B.bLz())},
ajh(d,e,f,g){var w="p"+this.c++,v=new B.to(w,e,f,g)
v.apr(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bp(this.b,new B.bLK(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cFD(d,e,f,g,h){return A.d.b5(this.b,new B.bLF(e,f,g,h))},
ak1(d,e,f,g){var w
if(d===f||this.cFD(0,d,e,f,g))return null
w=new B.ab_(d,e,f,g)
this.b.push(w)
return w},
azN(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zC(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amC(d){return this.Lr(d)&&!d.x&&d.cx>this.zC(d)},
b54(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lr(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5X(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yY.h(0,v)
if(w!=null)return w.a
return 100},
v1(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c1P(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bLL(a2),t).cK(0,0,new B.bLM(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLO(o)
m=C.a([],x.t)
l=new B.bLN(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLQ(g,l,n)
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
a2.b50(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zC(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b50(e,d,w,!0)
a2.bMg(a4)},
b50(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLB(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLA(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLD(C.T(b3,b3),r,b5)
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
if(h)C.b8(C.dI(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b54(t)*(1+t.CW))
a4=b2.azN(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c5X(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bPj(e,a0,b8)
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
bPj(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bMg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azN(o)/a1.b54(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zC(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bEo(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bcs(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tH(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tH(o,"The "+$.qc().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tH(o,"More than 1.5 amps went through the "+$.qc().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tH(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tH(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yY.h(0,n)
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
a1.tH(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eNE.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tH(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tH(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tH(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tH(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tH(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tH(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bEo(d){return A.d.b5(this.a,new B.bLy(d))},
tH(d,e){var w
d.x=!0
d.ay=e
this.bcs(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bh6(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFV(d){var w=d.b
return D.aN4.t(0,w)||D.yY.ai(0,w)||w==="buck"||w==="regulator"},
bdT(d){var w,v=!0
if(!this.Lr(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yY.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uo(d,e){var w=this.b
return new C.a_(w,new B.bLS(d,e),C.U(w).k("a_<1>")).gM(0)},
Cq(d){var w,v
if(d.x)return!1
w=d.b
if(D.yY.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qc().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFV(d)||i.Cq(d))return null
w=i.Uo(d,0)
v=i.Uo(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcO6(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.k0(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yY.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aG_("battery"),o=J.aV(t.a),t=new C.f7(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Uo(n,0)+i.Uo(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aG_("switch"),o=J.aV(t.a),t=new C.f7(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qc().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zC(k))return"The "+$.qc().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zC(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b5(u,new B.bLG(i,d))
h=q.b
h=h===A.k.k0(h)?""+A.k.V(h):C.t(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aG_(d){var w=this.a
return new C.a_(w,new B.bLJ(d),C.U(w).k("a_<1>"))},
aFy(d){return this.aG_(d).b5(0,new B.bLI(0.35))},
pL(d,e){return A.d.b5(this.a,new B.bLH(e))}}
B.aih.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.L_.gp(0)
c0.aY(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lZ.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lZ.ai(0,h.b)?(h.ch-1)*38:0
b4.cCB(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hvW(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bQ
c0.bD(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.ad5.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yZ
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mQ.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cfE(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zC(a0)){g=j+0
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
e=a4.gbM().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbM().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.kh(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.eA()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aN4.t(0,h)||D.yY.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cq(a0)&&r.Uo(a0,0)+r.Uo(a0,1)>0
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
a9.eA()
a9.a4(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lZ.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.L_.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bdT(a0)?A.cb:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdT(a0)){a9=new C.kh(new C.eq("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cb,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.eA()
a9.a4(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Xi,F.Xp,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bQ
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.R2
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b5(q,new B.bGH())){b3=A.d.cK(q,0,new B.bGI())
$.W()
b7=C.N()
b7.r=D.b8p.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.a9(0,0,b8,b9),b7)
a9=C.hr(b5,b5,b5,b5,D.eYg,A.a4,A.ca,b5,A.e0,A.c8)
a9.wB(b6-24)
a9.a4(c0,new C.u(12,10))}},
qk(d,e,f,g,h){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.ca,w,A.e0,A.c8)
v.eA()
v.a4(d,f)},
cCB(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hoq(a1,a2,a3)
d.F(new C.cV(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.ad5,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aR,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bQ
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aQ(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bQ
u.r=(a4?A.c:o).gp(0)
a0.aQ(d,u)
if(q){n=new C.Sh(new C.vx(C.x3(d),!1,C.a([],x.f5))).gI(0)
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
i=t[u].My(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OK(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b_:A.a3
u=g?A.b4:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GV,null).av(0,d))
return w},
avo(d,e,f){return this.OK(d,e,f,!0)},
c1q(d,e){return this.OK(d,A.bl,A.iP,e)},
agR(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLH.av(0,C.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e4O)
v=e.ad(0,D.e4X)
u=C.N()
u.r=A.ei.gp(0)
u.c=1.2
d.bD(w,v,u)},
cfE(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bTW.av(0,D.eKA))
c0.c=3.4
c0.d=A.bQ
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mE
c1.hR(D.eKs,w)
if(c3){w=C.bx(D.eKz,A.kz)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h4x(c2)
c1.bD(new C.u(-u,0),D.e65,c0)
c1.bD(D.e3W,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lZ.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bBg(c1,c2)
break
case"solar":r=C.bx(D.eKv,A.il)
c1.aE(r,b3.OK(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bO,!1))
b9=C.N()
w=C.aq(D.bbJ,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bjy,A.mj,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a60))
c1.aY(D.a60,b9)
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
c1.aQ(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dP.j(0.9).gp(0)
c1.af(D.e41,4+4*w,b9)
break
case"crank":n=C.bx(D.eKg,A.hg)
c1.aE(n,b3.avo(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.N()
b9.saq(D.aLI.av(0,C.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bQ
c1.bD(A.J,m,b9)
b9=C.N()
b9.saq(D.eeK.av(0,C.bU(m,7)))
c1.af(m,7,b9)
b3.agR(c1,D.e5Z)
b3.agR(c1,D.e3P)
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
c1.aQ(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cV(6,-14,2,-30))
l.push(new C.cV(-2,-14,0,-2))
l.push(new C.bF())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbM().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.eeq.av(0,C.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eKn,A.qh)
b9=C.N()
b9.saq(D.aof.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.agR(c1,D.RV)
b3.agR(c1,D.aGx)
i=c2.w?D.aGx:D.e3z
b9=C.N()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bQ
c1.bD(D.RV,i,b9)
b9=C.N()
b9.r=(c2.w?A.b1:A.bO).gp(0)
b9.c=4
b9.d=A.bQ
c1.bD(D.RV,i,b9)
b9=C.lh(D.RV,i,0.85)
b9.toString
w=C.N()
w.r=A.ay.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aMc,D.aLM)
b9=C.N()
b9.r=A.f6.j(0.25).gp(0)
c1.aE(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aE(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bO,A.cs,c2.fx).gp(0)
c1.bD(D.aGO,D.aGw,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c2.gp(0)
c1.bD(D.aGO,D.e6m,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c2.gp(0)
c1.bD(D.e4s,D.aGw,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cl(new C.u(F.o9[g]*22,0),20,9)
w=C.bx(f,A.hD)
o=b3.OK(f,A.d5,A.ow,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.eeC.av(0,C.bU(A.J,21)))
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
b9.saq(D.eeo.av(0,C.bU(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bQ
c1.bD(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aMc,D.aLM)
b9=C.N()
b9.saq(D.bXf.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c_(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.aY(D.eKJ,b9)
b9=c2.r
b3.qk(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e5E,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.yZ
c1.af(D.w7,34,v)}n=C.cl(D.e34,12,18)
c1.aE(C.bx(n,A.hD),b3.OK(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.W6
else{v=C.aq(A.e2,A.hX,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Ey
else{l=C.aq(A.dA,A.dP,c2.fx)
l.toString}w.saq(new C.bT(A.rX,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rz,17)))
c1.af(A.rz,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rz,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cV(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aQ(l,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bD(D.e6i,D.e6k,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bD(D.e4l,D.e4o,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
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
if(t)w=A.aW
else{w=C.aq(A.dA,D.bcw,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aQ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dne
c1.af(A.rz,30,v)}w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bD(D.e6o,D.e6n,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bD(D.e4u,D.e4t,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cV(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bF())
v=C.N()
if(t)l=A.mk
else{l=C.aq(A.eq,D.adR,c2.fx)
l.toString}if(t)j=A.kp
else{j=C.aq(A.km,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eJN))
c1.aQ(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.je.gp(0)
c1.aQ(a6,v)
v=C.N()
v.r=A.eQ.gp(0)
c1.aY(D.eJT,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cV(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aQ(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aE(C.bx(a7,A.hf),b3.avo(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cC.gp(0)
c1.aY(D.eJA,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.aY(D.eJB,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cl(D.e3m,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qk(c1,"M",D.e5Y,A.az,14)
break
case"buzzer":a8=C.cl(A.J,42,42)
b9=C.N()
b9.saq(D.eeG.av(0,a8))
c1.hR(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b2.gp(0)
c1.af(A.J,6,b9)
b3.qk(c1,"+",D.e5R,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bW.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eKj,A.hf)
w=C.N()
w.saq(D.bUU.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cV(-24+k*6+3,b9,-24+a5*6,0)
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
w.r=D.bd7.j(0.5*b9).gp(0)
w.z=A.jp
c1.aQ(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bQ
b9.r=C.aq(A.lI,A4.X7,c2.fx).gp(0)
c1.aQ(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hf)
w=C.N()
w.saq(D.bTO.av(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bO.gp(0)
c1.aY(D.eJZ,w)
for(p=0;p<4;++p){b0=new C.kh(new C.eq("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.ca,new C.ju(1),b4,b4,b4,b4,A.c8,b4)
b0.eA()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aE(C.bx(b1,A.hD),b3.c1q(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b1.j(0.5).gp(0)
c1.aY(new C.a9(-3,w,11,w+b9),v)
b3.qk(c1,"1F",D.w7,A.c,11)
break
case"radio":a1=C.bx(D.a60,A.hg)
b9=C.N()
b9.saq(D.bXv.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.ow.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bx(D.eKk,A.il)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lI.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.h5:A.nL).gp(0)
c1.aY(D.eJD,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bB.gp(0)
v.c=1.6
c1.bD(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLI.av(0,C.bU(D.a55,6)))
c1.af(D.a55,6,w)
w=C.N()
w.r=A.ow.gp(0)
c1.af(D.e3V,4,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=1.8
c1.bD(D.e3T,D.aGB,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGB,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nQ.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eKu,A.hf)
v=C.N()
v.r=L.mi.gp(0)
c1.aE(w,v)
b2=C.bx(D.eKr,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.ps(),!0)
b9.translate(-33,-21)
E.h0I(c1,D.eQ8,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b1.gp(0)
c1.af(D.e46,1.6,b9)}else{w=C.N()
w.r=D.vb.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aQ(b9,w)}b9=C.N()
b9.r=A.bv.gp(0)
c1.aY(D.eJS,b9)
break}B.i7J(c1,c2,b3.b.d,b3.gc5Y())
if(t)b3.qk(c1,"\u2716",D.e6r,A.ay,14)
if(s)c1.a.restore()},
bBg(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aE(C.bx(w,A.qh),m.avo(w,A.dA,A.iS))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.ao8.av(0,v))
d.aY(v,u)
u=C.N()
u.r=A.dT.gp(0)
d.aY(D.eK7,u)
t=new C.a9(28,-5,34,5)
d.aE(C.bx(t,A.he),m.OK(t,A.dA,A.iP,!0))
m.qk(d,"+",D.e3E,A.aM,11)
m.qk(d,"\u2212",D.e6_,A.ad,11)
m.qk(d,C.t(l===A.k.k0(l)?A.k.V(l):l)+"V",D.e5K,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bF.gp(0)
d.aY(D.eK6,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b1,u).gp(0)
d.aY(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qk(d,"FLAT",D.e5D,A.cb,9)}if(l>2){u=C.N()
u.r=A.b2.gp(0)
u.c=1
d.bD(D.e3a,D.aGg,u)
m.qk(d,l>3?"3 cells":"2 cells",D.e5J,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.qh)
$.W()
s=C.N()
s.saq(D.bX2.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aY(D.eK8,s)
for(u=d.a,q=0;q<2;++q){p=F.axs[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLH.av(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qk(d,"9V",D.e5F,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.il)
$.W()
s=C.N()
s.saq(D.ao8.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bZ.gp(0)
d.aY(D.eKt,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cl(new C.u(F.a2V[q],-20),8,10),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qk(d,"+",D.e3L,A.ay,10)
m.qk(d,"12V",D.e5G,A.az,15)}},
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
n.apr(o,r,q,p)
k.push(n)
J.is(s[4],new B.ckd(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ak1(m,u[1],l,u[3])}}}
B.aif.prototype={
T(){var w=x.N
return new B.aig(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aig.prototype={
adt(d){var w=this,v=w.as
if(v!=null)v.a6(0)
w.m(new B.bGl(w,d))
w.as=C.cM(A.lh,new B.bGm(w))},
q(){var w=this.as
if(w!=null)w.a6(0)
w=this.ch
if(w!=null)w.a6(0)
this.br8()},
a_r(d,e){return this.cdB(d,e)},
b_k(d){return this.a_r(d,!1)},
cdB(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_r=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r0:A.xt
p=d.b
w=3
return C.b(E.h1_(s,r,p,d.ax<3.2,q,$.qc().h(0,p).b),$async$a_r)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_r,v)},
cqb(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGn()),t=J.cG(u)
t.K(u,v)
t.bp(u,new B.bGo(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a6(0)
w.a0M(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a6(0)
w.ch=C.cM(A.kq,new B.bGp(w,u,d))}},
a_7(d){return this.cbZ(d)},
cbZ(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i8R(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_7)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_7,v)},
a0M(d){return this.cnP(d)},
cnP(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0M=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kP,null,new B.bGj(u,d),t,!0,!0,!1,A.kA,!1,!1,x.H),$async$a0M)
case 2:return C.h(null,v)}})
return C.i($async$a0M,v)},
a_(){this.a1()
this.be3()
this.le()},
be3(){this.a.c.e=new B.bGE(this)},
lz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v1(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.lZ.h(0,s.b)
if((r==null?null:r.b)!==D.zo)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.a_r(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
q.m(new B.bGF())},
b6i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lZ.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b00(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bS(w,w.gM(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lZ.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cCC(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lZ.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lZ.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hoq(new C.u(k,n),new C.u(i,l),p)
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
adr(){this.a.toString
this.m(new B.bFP())},
bnV(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cY8[v]
if(!A.d.b5(p.a.c.a,new B.bGG(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.I_:o
s=s?K.I_:o
q=t.ajh(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.adr()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qj[v].a)
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
w.push(n.b_Q(s,!0))
n.a.toString
if(t)w.push(n.b_Q(r,!0))
w.push(C.E(C.cq(new B.bGD(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_Q(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qc()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aD(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zB,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nt,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b8,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tD,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFQ(this,u),p,p,p,p,p,p,!1,A.a7))}return C.p(p,C.cw(m,p,A.h8,p,p,A.aO,!1),A.f,p,p,new C.o(F.Ax,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aYp(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.abQ,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.aha,w,w,w)},
cfF(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qc().h(0,o),m=d.dy,l=d.fr,k=new B.bG8(q,n),j=C.d(n.c,p,p,p,p,p,p,A.J0,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bLc,p,p,p,new B.bFW(q,d),p,p,p,p,"Remove part",A.cd),C.aH(p,p,p,p,A.Go,p,p,p,new B.bFX(q),p,p,p,p,p,A.cd)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dk,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f5Q,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cb:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbZ(d)
if(v!=null){l=(d.x?A.ay:A.aF).j(0.14)
j=C.n(10)
i=C.I((d.x?A.ay:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i_,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fcc,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.fZQ(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFY(q,d,u),p,h,p))}l=C.bY(A.bz,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Cq(d)?"Showing: "+F.PW[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.h1,p,p,p)],g)
if(q.a.c.Cq(d))l.push(new B.fi(A.FX,"Open big screen",new B.bG0(q,d),h,p))
A.d.v(m,l)}if(D.lZ.ai(0,o)&&!B.fZQ(o)){l=C.a([A.am,C.d(q.a.c.Cq(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.h1,p,p,p)],g)
if(q.a.c.Cq(d))l.push(new B.fi(A.NB,"Open the "+$.qc().h(0,o).b,new B.bG1(q,d),h,p))
A.d.v(m,l)}if(D.lZ.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BC,"Make it bigger (or tap it 4 times)",new B.bG2(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Cq(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.f6F,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.ddD[s]
j=r===A.k.k0(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bG3(q,d,r),p,h,p))}i.push(new C.D(A.lN,C.bY(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fuf)
A.d.v(m,i)}if(q.a.c.Lr(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zC(d),2)
i=q.a.c
w=i.amC(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amC(d)?A.cb:A.eu,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zC(d),0,1)
i=q.a.c.amC(d)?A.ay:A.b1
m.push(new C.D(A.i_,C.v(C.a([l,A.cV,C.bw(j,C.m1(A.bF,p,p,5,p,w,new C.lV(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i_,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f0F,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d3E[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG4(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cVB[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG5(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG6(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bG7(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFZ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bG_(d)))
if(o==="crank")m.push(D.fpP)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.h1,p,p,p))
return q.aYp(new C.cT(D.aZp,C.c9(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.ba7.prototype={}
B.UF.prototype={
T(){return new B.aCD(B.h4w(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCD.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.ads()},
ads(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ads=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fuH(),$async$ads)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i83(t.d,r)
if(s!=null){t.m(new B.dRw(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ads,v)},
EQ(){var w,v=this
if(!v.as)return
w=B.hZD(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD4(w)},
j_(d){if(d!==A.fv)this.EQ()},
q(){$.aW.hI(this)
this.EQ()
this.a2()},
c6_(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a_<1>")
t=new C.a_(v,new B.dRF(q),u).gM(0)
s=new C.a_(v,new B.dRG(),u).gM(0)
r=new C.a_(v,w.gcRC(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRH(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EQ()
if(A.o.E(q.w,10)===0){w=q.f
$.ahs()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahs()[q.f].c.$1(q.d)){w.K(0,q.f)
B.By("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRI())
q.EQ()
w=q.c
w.toString
w=C.X0(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahs()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mm,p,p,p,p,p,p,p,p,p,p))}},
ag7(){var w=0,v=C.j(x.H),u=this,t
var $async$ag7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dRv(u),t,null,!0,!0,x.H),$async$ag7)
case 2:return C.h(null,v)}})
return C.i($async$ag7,v)},
aYo(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aD(w,C.hs(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aYn(d,e,f,g){return this.aYo(d,e,f,g,null)},
aq5(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aD(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ec,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b8,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeq(){var w=0,v=C.j(x.H),u=this,t
var $async$aeq=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).cl(C.e8(new B.dRr(u),!1,null,x.H)),$async$aeq)
case 2:t=u.e.gbi()
if(t!=null)t.be3()
if(u.c!=null)u.m(new B.dRs())
u.EQ()
return C.h(null,v)}})
return C.i($async$aeq,v)},
bEh(){var w,v,u,t,s=null,r=this.f
$.ahs()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bk:A.ay
u=C.n(9)
t=C.I(F.Ax,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wn,s,s,s),s,s,s),A.f,s,D.aZw,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahd(){var w=0,v=C.j(x.H),u=this,t
var $async$ahd=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kP,null,new B.dRE(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$ahd)
case 2:return C.h(null,v)}})
return C.i($async$ahd,v)},
c60(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aD(r,C.p(r,D.bMq,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRK(d),r,r,r,r,r,r,!1,A.a7),o=C.n(11)
o=C.p(r,D.b4b,A.f,r,r,new C.o(A.bo,r,C.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.fsk,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f4:A.fT,r,r,r,r,r,r,r,r,11.5,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awK(s.gcbG(),r),A.rI,s.aYn(A.y4,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRL(s,d)),s.aYo(A.ll,"Challenges",A.aM,s.gcsL(),s.bEh()),s.aYn(A.Nu,"How to play",A.aR,new B.dRM(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aq5(A.o1,"Circuits",A.bt,s.gclD()),A.bp,s.aq5(A.oM,"Repair",A.aM,new B.dRN(s)),A.bp,s.aq5(D.y5,"Clear",A.cb,new B.dRO(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.Ax,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bwe,r,r,r)},
B(d){var w=this,v=null
$.arj="tech"
return C.c7(v,A.bY,C.bl(!0,C.v(C.a([w.c60(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h3n(w.d,w.e,w.gc5Z(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awK.prototype={
T(){return new B.b8j(null,null)}}
B.b8j.prototype={
gawg(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cJ(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawg().q()
this.bso()},
B(d){var w=null,v=this.a.c
return C.aD(w,C.hs(new C.a7(42,42,C.c6(this.gawg(),new B.cAZ(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
B.b8i.prototype={
a4(d,e){var w,v,u,t=null,s=e.ea(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mE
d.af(s,r+2+o*2,w)
w=C.N()
w.saq(D.eeB.av(0,C.bU(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fT(A.A,0,6.283185307179586,A.x,D.cNd,t,new C.mm(p)).av(0,C.bU(s,r)))
d.af(s,r,v)
p=new B.cAY(d)
p.$3(s.ad(0,A.rz),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e4F),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e6v),2.6,0.5+0.5*Math.cos(q))
u=C.hr(t,t,t,t,D.eYm,A.a4,A.ca,t,A.e0,A.c8)
u.eA()
u.a4(d,s.ad(0,new C.u(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.ax2.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.ax3.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.br7()}}
B.aJ3.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwm.prototype={}
B.fK.prototype={}
B.J5.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m5.prototype={}
B.Um.prototype={
T(){return new B.biL(null,null)}}
B.biL.prototype={
ga8K(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nX,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8K().q()
this.bue()},
gRv(){var w=this.ga8K().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lZ.h(0,this.a.c)
if(v==null)v=D.aMt
return C.c7(w,U.Lk,C.bl(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zp?this.bGs(v):this.cip(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mA,w,w,w,new B.dNs(d),w,w,w,C.ny(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eZY,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c61(d){var w
A:{if(D.In===d){w=0.46153846153846156
break A}if(D.uB===d){w=0.45
break A}if(D.wd===d){w=0.9259259259259258
break A}if(D.Sx===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cip(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.In
A:{if(D.In===p){w=44
break A}if(D.uB===p){w=30
break A}if(D.wd===p){w=22
break A}if(D.Sx===p){w=26
break A}w=14
break A}v=C.c6(this.ga8K(),new B.dNr(this,w,d,o),q)
if(p===D.a69)v=new C.Dd(D.bwR,v,q)
p=this.c61(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A3.Ft,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bqB,new C.Q(u,u,u,u),q,q,q),q)},
b5w(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bv(this.gRv()*0.4),0,100),q=d.b===D.In,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dk(s)),2,"0")+":"+A.a.aT(A.o.u(C.h_(s)),2,"0"),t,t,t,t,t,t,A.rP,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bwz,t,t,t,3))}n.push(A.db)
n.push(D.flg)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.DF(A.A,C.p(t,t,A.f,t,t,new C.o(A.b1,t,t,C.n(2),t,t,A.n),t,t,t,A3.Ft,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qk)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fcw,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
aue(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d96,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f3p,v,v,v)],w))
return C.aD(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNn(this,d),v,v,v,v,v,v,!1,A.a7)},
bXx(d,e){return this.aue(d,e,!0)},
bXe(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Sx||n===D.wd,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kk,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b5w(d)
w=m?190:138
v=C.n(24)
u=C.I(A.b2,A.q,1)
w=C.aD(o,C.p(o,C.bw(C.n(23),C.b3(o,o,o,new B.aed(0,p.gRv(),o),A.f2),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hN,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNl(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k4[s]
t.push(new C.cp(A.A,o,o,p.bXx(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.lZ(0.92,t,v,8,12,A8.vp,o,!1),1)],u)
if(n!==D.a69){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.dd(F.k4,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bS(v,v.gM(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.aue(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.q6,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.brq,T.aiD,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzU(d,e){var w=null
return C.p(w,C.v(C.a([this.b5w(d),C.E(C.b3(w,w,w,new B.aed(e,this.gRv(),w),A.f2),1),C.aD(w,C.p(w,C.av(C.d(F.k4[e].a,w,w,w,w,w,w,A0.IR,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNg(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bGs(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8K(),new B.dNj(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bw9,new C.Q(8,8,8,s),t,t,t),t)}}
B.bur.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kk,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aY(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dnj
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aed.prototype={
a4(d,e){return E.ah5(d,e,this.b,this.c)},
au(d){return!0}}
B.aKQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aVT.prototype={}
B.Va.prototype={
T(){return new B.bjk(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjk.prototype={
gvp(){var w=this.f
return w===$?this.f=B.fZW(0):w},
a_(){this.a1()
this.le()
B.zm("laser_maze").bz(new B.e9t(this),x.P)},
lz(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e9u())},
adx(d){var w=this
w.m(new B.e9j(w,d))
B.vT("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c6h(d){var w,v,u,t,s,r,q,p,o=this
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
o.m(new B.e9k(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.e9n(t,B.hoi(t.gvp(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e9o(t),A.k2,A.aM,s),new B.dA("Skip",!1,new B.e9p(t),D.bFa,A.aR,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e9q(t),D.bFb,A.aR,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e9r(t,v),s,A.ay,s))}return B.jK(A.ay,A.hc,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bgk.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdO()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgH(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kz)
v=$.W()
u=C.N()
u.r=L.mi.gp(0)
a9.aE(w,u)
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
r=C.bx(C.cl(p,u,u),A.hg)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bXB.av(0,C.cl(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
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
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fB
a8.r=D.adR.gp(0)
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fB
a8.r=A.c.gp(0)
a9.aQ(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
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
i.eA()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.u(m-h/2,k-j.gbd(j)/2))}g=new B.dgK(a7,a3,a9)
a1.c.bK(0,new B.dgI(g))
a4.d.bK(0,new B.dgJ(g))
f=a7.$1(a4.e)
a4=C.bx(C.cl(f,o,a3*0.8),A.hg)
a8=C.N()
a8.r=A.ay.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.af(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
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
B.Vc.prototype={
T(){var w=x.n
return new B.aDh(A.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDh.prototype={
a_(){this.a1()
this.le()
B.zm("light_mixer").bz(new B.e9M(this),x.P)},
lz(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aYt()
w.m(new B.e9N())},
awk(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.d7(t,new B.e9x()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aYt(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hjE(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vW(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vT("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcxI(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cPb[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.e9G(v,B.hjE(v.e,t))),r=t[0]
r=B.hB(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e9H(v),r)
w=t[1]
w=B.hB(A.bk,""+A.k.V(w*100)+"%","Green",1,0,new B.e9I(v),w)
t=t[2]
return B.jK(A.b9,A.hc,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hB(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.e9J(v),t),new C.bI(A.a8,u,u,new B.fi(A.hn,"Lock it in",new B.e9K(v),A.b1,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bgz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qg)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bx(new C.a9(0,0,n,m),A.qg)),$.ps(),!0)
v=e.gdO()*0.3
u=e.ea(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.Ef,I.acU,I.adi]
d.lc(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nC
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qg)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b2.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLh.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwr.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buI()}}
B.aLi.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bws.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buJ()}}
B.btg.prototype={}
B.a7T.prototype={
B(d){var w=null
return C.c7(C.eC(w,w,w,!0,!0,D.ae3,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.an6,w,w,w,new B.ceR(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAM,w,w,w,1,w,!0),D.ae3,C.cw(C.a([D.e7M,C.cq(new B.ceS())],x.p),w,D.bsq,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W2.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aE8(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE8.prototype={
a_(){this.a1()
this.le()},
b3w(d){var w=this.d.length
return A.o.E(A.k.bv(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3w(v.f)
if(w!==v.x){v.x=w
B.lg("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eJ0(v))
B.By("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c7e(){if(this.d.length<2)return
this.m(new B.eIX(this))},
aYP(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eIW(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc7d(),p=s.d,o=C.E(C.aD(r,C.b3(r,r,r,new B.buD(p,s.f,r),A.f2),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.faH,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awJ[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aD(r,C.p(r,new C.x(p[v],r,D.f9Y,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eIZ(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return B.jK(A.aM,A.hc,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kG,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eJ_(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dn,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hA,"Add",s.gc7b(s),A.c,r),A.bp,new B.fi(A.mt,"Spin",q,A.b1,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.buD.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.b9P.gp(0)
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
o=C.bU(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.awJ[A.o.E(q,8)].gp(0)
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
k=new C.kh(new C.eq(o,i,i,A.cO,i,i,i,i,i,i,D.eZa),A.a4,A.ca,new C.ju(1),i,i,i,i,A.c8,i)
k.eA()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.u(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.adH.gp(0)
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
j.F(new C.bF())
e=C.N()
e.r=A.c.gp(0)
a1.aQ(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aQ(j,e)},
au(d){return!0}}
B.UM.prototype={
T(){return new B.biU($,A.bx,0,C.a([],x.X),null,null)}}
B.biU.prototype={
a_(){this.a1()
this.le()},
lz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.By("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4D(900,new B.dTK())}w.m(new B.dTL())},
aYR(d){return this.m(new B.dTF(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.E(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bps(l,A.cb,n),A.aNI)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f2n,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.f1s,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wj,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d6j[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTH(o,q),n,A.cb,n))}m=o.f
p=m?A2.yd:A.iC
m=m?"Pause":"Start"
return B.jK(A.cb,A.hc,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fi(p,m,new B.dTI(o),A.b1,n),new B.fi(A.k2,"Reset",new B.dTJ(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bps.prototype={
a4(d,e){var w,v,u,t,s=e.ea(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=C.bU(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bQ
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fT(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.f7(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.TZ.prototype={
T(){return new B.biw($,A.bx,0,C.a([],x.X),null,null)}}
B.biw.prototype={
a_(){this.a1()
this.le()},
lz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.QX.h(0,p.d)
w.toString
v=A.d.fc(w,new B.dEC())
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
B.lg("flute",D.bYd[t]+5,1400,0.35)}p.m(new B.dED())},
gc7h(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JX("Press Start",0.5)
w=D.QX.h(0,this.d)
w.toString
v=A.d.fc(w,new B.dEx())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JX("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JX("Hold",1)
case 2:return new C.JX("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JX("Hold",0.5)}}}return new C.JX("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc7h(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hx.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hx.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zD,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kG,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QX.gec(D.QX));w.C();){v=w.gR(w)
o.push(new B.dA(v,r.d===v,new B.dEA(r,v),q,A.hx,q))}w=r.e
v=w?A.NK:A.iC
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEB(r),A.b1,q))
return B.jK(A.hx,A.hc,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHy.prototype={}
B.UD.prototype={
T(){return new B.biO(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biO.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mB,s,s,s,new B.dR0(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.n(18),new C.ev(C.aD(s,C.b3(s,s,s,new B.bkQ(t.e,t.x,s),A.f2),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dR1(t),new B.dR2(t),s,s,s,s,s,s,s,s,s,new B.dR3(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cOy[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F3(v,u,new B.dR4(t,v),!1,s))}u=t.r
return B.jK(A.bC,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bS,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hB(A.bC,""+A.k.V(u),"Brush",30,2,new B.dR5(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dR6(t),A.FO,A.bC,s),new B.fi(A.rf,"Undo",new B.dR7(t),A.c,s),new B.fi(A.e6,"Clear",new B.dR8(t),A.c,s),new B.fi(A.Nq,"Paper",new B.dR9(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bkQ.prototype={
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
p.d=A.bQ
p.e=A.fB
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
i=new C.cV(n,q,(n+i.a)/2,(q+i.b)/2)
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
u.drawPath((q==null?k.e=new C.cE(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.Vo.prototype={
T(){var w=x.S
return new B.aDr(C.aX(w),C.aX(w))}}
B.aDr.prototype={
a_(){this.a1()
this.arA()},
arA(){var w,v,u=this,t=x.N,s=C.bn(D.daV,!0,t)
A.d.CJ(s)
w=x.S
v=C.U(s).c
t=C.C(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.CJ(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c7c(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lg("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.ef8(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n8,new B.ef9(s,v,u),t)
else{s.x=!0
C.bN(Ad.F5,new B.efa(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Tx,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.D(A.xE,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hC,A.j,0,q,q),q),C.E(C.ig(!0,q,q,A.y,new C.hM(v,8,8,1,q),new B.efe(r),r.e.length,A.bm,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cQ0[t]
o.push(new B.dA(s.b,r.d===s.a,new B.eff(r,s),q,A.aR,q))}o.push(new B.fi(D.bF8,"New game",new B.efg(r),A.b1,q))
return B.jK(A.aR,A.hc,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.VB.prototype={
T(){return new B.aDN(C.a([],x.t))}}
B.aDN.prototype={
c7g(d){A.d.a9(this.d)
this.w=!0
this.aYQ()},
aYQ(){this.d.push(A.cH.aB(4))
this.e=0
this.Zx()},
Zx(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zx=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.eq0(t))
s=x.H
w=3
return C.b(C.bN(A.lM,null,s),$async$Zx)
case 3:r=t.d,q=C.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aS5(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$Zx)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.eq1(t))
case 1:return C.h(u,v)}})
return C.i($async$Zx,v)},
aS5(d){this.m(new B.epZ(this,d))
B.lg("marimba",D.aoI[d]+5,450,0.55)
C.bN(A.F3,new B.eq_(this),x.H)},
c7i(d){var w,v,u=this
if(!u.w||u.r)return
u.aS5(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.eq2(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.eq3(u))
C.bN(A.id,new B.eq4(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.TF,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fb3,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avB[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avB[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aD(p,C.df(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jg,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.eq5(q,v),p,p,p,p,p,p,!1,A.a7))}o=C.av(new C.D(A.a9,C.v(C.a([o,A.am,n,A.d7,new C.fG(1,C.lZ(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.b8,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jK(A.bZ,A.hc,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fi(A.iC,n,q.gc7f(q),A.b1,p)],m),p,p))}}
B.VW.prototype={
T(){return new B.bk1(new C.as(A.as,$.aw()))}}
B.bk1.prototype={
av4(d){return C.oD(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eEi(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eEr()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Ab.wM),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aXX),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kF,"Bill amount",!0,!0,!1,m,m,m,m,D.f8E,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eEn(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aPa,!0,A.a4,m,A.an,m,m,m,m)
k=A.b1.j(0.1)
s=C.n(20)
r=C.I(A.b1.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.av4(w)),t.$2("Total","$"+n.av4(v)),X.LL,t.$3$big("Each of "+n.f+" pays","$"+n.av4(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bP,m,m,m)],q),m,A.fA,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cAS[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eEo(n,o),m,A.b1,m))}l=n.f
return B.jK(A.b1,A.hc,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hB(A.aR,""+l,"People",20,1,new B.eEp(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eEq(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Vm.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bjv(w,A.cH,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjv.prototype={
a_(){this.a1()
this.le()},
lz(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bv(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7S("snare",0.5)}u.m(new B.edO())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hd()
u.w=t
u.x=t?0:3.141592653589793
B.lg("bell",24,400,0.5)}u.m(new B.edP())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcw(v,o.r>0,n))}u=C.aD(n,C.av(C.bY(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edH(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aD(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f7T,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eeF,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edI(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=C.aD(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eYE,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kG,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.edJ(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d3O[r]
v.push(new B.dA(q.b,o.d===q.a,new B.edK(o,q),q.c,A.bt,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hB(A.bt,""+s,"Dice",4,1,new B.edL(o),s))}if(o.d==="num"){s=o.z
s=B.hB(A.bt,""+s,"From",100,1,new B.edM(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hB(A.bt,""+p,"To",1000,2,new B.edN(o),p)],m))}return B.jK(A.bt,A.hc,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bcw.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cH.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=C.a([],x.p)
for(s=D.dm3.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaQ,p,18,p,p,p,p,p,18),p))
return C.eG(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bA,p,p,100),p)}}
B.aKD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwi.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bu1()}}
B.aKW.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwn.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bul()}}
B.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwx.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buR()}}
B.aLU.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwJ.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvk()}}
B.b66.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDx.h(0,t)
$.arj=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nk,u,u,u,new B.crL(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Nu,s,u,u,u,22),u,u,u,new B.crM(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bvr,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.Ax,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.F7,u,u,1/0))
return C.c7(u,A.bY,C.bl(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ec],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tD,C.aD(s,C.df(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eG,s,s,s,A.h9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crH(t),s,s,s,s,s,s,!1,A.a7),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.c9(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cA,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.ava.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auK(d).cIg(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9F(C.kZ(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A0.IR,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tD,C.aG(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ak.agW,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ec,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crG(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.F3.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eWY:u
w=t?A.c:A.b2
w=C.I(w,A.q,t?2.5:1)
return C.aD(u,C.df(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hy,u,r,D.agI,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crN(v),u,u,u,u,u,u,!1,A.a7)}}
B.mB.prototype={
a4D(d,e){var w=C.dj()
w.seI(C.cM(C.dC(0,0,0,d,0,0),new B.crI(this,w,e)))
this.fs$.push(w.bg())},
le(){var w=this,v=w.qy(new B.crK(w))
v.iW(0)
w.fq$!==$&&C.aP()
w.fq$=v}}
B.aaF.prototype={
bxu(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gR(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bAH()
g.ay!==$&&C.aP()
g.ay=w},
bAH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
B.aaG.prototype={
cEa(d,e){var w,v,u,t,s,r,q,p
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
B.v_.prototype={}
B.OT.prototype={}
B.xW.prototype={}
B.OS.prototype={
fm(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aoD[w.aB(7)]
w=w.hd()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lg(u,v+w-12,2200,0.1)}}
B.UT.prototype={
T(){var w=$.aw()
return new B.aCO(new C.cs(null,x.A),new C.as(A.as,w),new B.OS(A.cH),D.d5M,A.au,D.a2H,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCO.prototype={
a_(){var w,v=this
v.a1()
v.le()
v.a.toString
w=$.hcF
if(w==null)w=$.hcF=B.cum()
w.bz(new B.dWs(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.but()},
crV(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dVV(p[n]).$0())
w.push(q)}this.w=w},
gVM(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asK(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awO(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asK(d.x,d.w,105/Math.max(w,3))
C.eU()
B.lg("bell",(A.d.cL(D.a2i,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lz(d){var w,v,u,t,s,r,q,p=this
p.f.fm(0,d,p.db)
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
c7X(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVM()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVM()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cEa((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c7W(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVT(w))
return}w.m(new B.dVU(w,v,A.a.i(d).toLowerCase()))},
bNv(){var w=null,v=this.c
v.toString
C.cb(w,w,!0,w,new B.dVR(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bHP,n,n,n,o.gbNu(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mB,n,n,n,new B.dWd(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dWe(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Dj,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bPV,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc7V(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iJ,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWf(o,s),A.mv,A.aR,n))}i.push(new C.D(A.i_,new C.a7(n,38,C.cw(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWj(o),A.ho,A.aR,n)],l)
for(v=D.aDw.gdK(D.aDw),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dA(u.a,!1,new B.dWk(o,u),n,A.aR,n))}w.push(new B.dA("Random",!1,new B.dWl(o),A.mt,A.aR,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hB(A.aR,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dWm(o),w))
w=o.dy
i.push(B.hB(A.bZ,A.a.aT(A.o.u(A.k.bv(w)),2,"0")+":00","Time",24,0,new B.dWn(o),w))
w=o.fr
i.push(B.hB(A.b1,o.cqF(),"Season",365,0,new B.dWo(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lS:D.G6
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dWp(o),D.bCZ,A.aR,n),new B.dA("Night",v,new B.dWq(o),A.vy,A.aR,n),new B.dA("Borders",u,new B.dWg(o),D.bD2,A.aR,n),new B.dA("Names",r,new B.dWh(o),X.G1,A.aR,n),new B.dA("Music",q,new B.dWi(o),p,A.aR,n)],l),n,n))
return B.jK(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cqF(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awg[u])v=u
return A.ig[v]+" "+(A.k.bv(w-D.awg[v])+1)},
c7U(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mO(1,A.o.E((A.d.cL(D.a2i,t)+1)*47,360),0.55,1).iC()
r=new B.dVP()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dj,j,j,j),1),C.aH(j,j,j,j,A.Go,j,j,j,new B.dVO(this),j,j,j,j,j,A.cd)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.h1,j,j,j)
m=D.dkJ.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fsV(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GC(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GC(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fsV(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VZ,j,p,q,j,j,A.n),j,j,j,j,D.ahg,j,j,j)}}
B.beL.prototype={
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aR.j(0.35),A.K],t),D.cRx,d3).av(0,C.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.eeJ.av(0,n))
d8.af(p,o,u)
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
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.dcs(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cL(D.a2i,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mO(1,a9,a3,a8?1:0.62).iC().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
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
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbM().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbM().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rq
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbM().a.snapshot()):s).a,q)
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
c9=B.hLy(a7.a,a3,b2)
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b7D.j(0.78)],t),D.d68,d3).av(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dii,d3).av(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fT.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aL1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.aL2.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bus()}}
B.btb.prototype={}
B.VZ.prototype={
T(){return new B.bk5()}}
B.bk5.prototype={
gaRF(){var w=this.d
if(w===$)w=this.d=A.cH.aB(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.As,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.an6,w,w,w,new B.eFb(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fuy,w,w,w,1,w,!0),u=C.n(18),t=A.aR.j(0.1),s=C.I(A.aR.j(0.35),A.q,1),r=x.p
return C.c7(v,D.As,C.cw(C.a([C.p(w,C.B(C.a([D.bGx,A.av,C.E(C.d(D.cVm[this.gaRF()],w,w,w,w,w,w,D.a7Z,w,w,w),1),C.aH(w,w,w,w,D.bQV,w,w,w,new B.eFc(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bA,w,w,w),A.aB,C.cq(new B.eFd())],r),w,A.Ys,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.VK.prototype={
T(){return B.hM_()}}
B.bjS.prototype={
ciq(d){var w=d.c,v=B.hM1(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.le()},
lz(d){var w,v,u,t=this
t.e.fm(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ciq(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lh(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc7Y(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c81(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
aZb(d){this.m(new B.exe(this,d))
C.eU()
B.lg("bell",D.dit[A.o.E(A.d.cL(D.Cb,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mB,m,m,m,new B.exp(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.exq(n,l)),h=C.a([new B.dA("All",!1,new B.exr(n),A.a0o,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cb[w]
h.push(new B.dA(v.a,n.z===v,new B.exs(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hB(A.aM,s,"Time",1,0,new B.ext(n),u/t)
u=n.w
u=B.hB(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.exu(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lS:D.G6
return B.jK(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.exv(n),m,A.aM,m),new B.dA("Names",r,new B.exw(n),m,A.aM,m),new B.dA("Asteroids",q,new B.exx(n),m,A.aM,m),new B.dA("Music",p,new B.exy(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c7Z(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.exc(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kb,r,r,r),1),C.aH(r,r,r,r,A.Go,r,r,r,new B.exb(this),r,r,r,r,r,A.cd)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dk,r,r,r)
v=n.$2("WIDTH",B.GC(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.GC(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.exd().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VZ,r,l,m,r,r,A.n),r,r,r,r,D.ahg,r,r,r)}}
B.bre.prototype={
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
o=a5.gc7Y()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cb),t=new C.f7(a6,new B.eZz()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hM0(A.d.gI(D.Cb))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.saq(D.eeD.av(0,C.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.heh("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cb),t=new C.f7(a6,new B.eZA()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0.z=A.rq
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pm,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1V,a4).av(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d_x[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.heh(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.UU.prototype={
T(){var w=x.i
return new B.aCP(new B.OS(A.cH),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCP.prototype={
cvb(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c80(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e3l
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
s.m(new B.dWw())},
a_(){this.a1()
this.le()},
lz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fm(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yK[r]
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
break}}}if(A.d.d7(s,new B.dWZ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(n==="drop")n=p.bLL()
else n=n==="weight"?p.cCr():p.bDT()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dfA[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWL(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWM(p),Ai.G0,A.cs,o),new B.dA("Feather",s,new B.dWN(p),X.N9,A.cs,o),new B.dA(q,r,new B.dWR(p),A.FP,A.aR,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hB(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWS(p),q),new B.eQ(C.a([new B.fi(A.tQ,"Drop!",new B.dWT(p),A.b1,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hB(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWU(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hB(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWV(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hB(A.cs,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dWW(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hB(A.cs,A.k.ab(r,1)+"x out","View",8,0.5,new B.dWX(p),r),new B.eQ(C.a([new B.fi(A.nj,"Fire!",p.gc8_(),A.b1,o),new B.fi(A.tQ,"Falls",new B.dWY(p),A.c,o),new B.fi(A.r7,"Orbit 7.7",new B.dWO(p),A.c,o),new B.fi(D.bFX,"Oval 9",new B.dWP(p),A.c,o),new B.fi(A.BC,"Escape",new B.dWQ(p),A.c,o)],w),o,o)],w))}return B.jK(A.cs,A.hc,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bLL(){return new C.D(D.bqt,C.cq(new B.dWv(this)),null)},
cCr(){var w,v,u,t=null,s=[D.eDC,D.eF4,D.eFc,D.eFv,D.eFa,D.eFB,D.eEb,D.eFY,D.eEP],r=x.p,q=C.a([D.fix,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cA,new C.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bC(1,A.bh,new C.Be(new B.dWx(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fkQ)
return C.cw(q,t,A.iz,t,t,A.ag,!1)},
bDT(){return C.cq(new B.dWt(this))}}
B.b9X.prototype={
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aR.j(0.35),A.K],x.O),D.d70,i).av(0,C.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.saq(D.eex.av(0,C.bU(g,p)))
d.af(g,p,e)
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
d.aQ(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
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
f.d=A.bQ
f.r=A.cs.j(0.9).gp(0)
d.aQ(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mE
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VC.prototype={
T(){return new B.bjP(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjP.prototype={
a_(){this.a1()
this.le()},
lz(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PS[l.e],i=D.PS[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mB,k,k,k,new B.eq8(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqN(f,g,v,k),A.f2),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GC(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hF,A.L,k,k)
o=B.GC(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IU,A.L,k,k),A.bD,C.d(p+": "+B.GC(w*2)+" km wide. "+r+": "+B.GC(h*2)+" km wide.",k,k,k,k,k,k,A6.Df,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bsA,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PS[m]
r.push(new B.dA(w.a,l.e===m,new B.eq9(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PS[m]
w.push(new B.dA(s.a,l.f===m,new B.eqa(l,m),k,C.b0(s.c),k))}return B.jK(A.bW,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bqN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.WD.gp(0)
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
w=new B.eXI(d)
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
d.af(l,n+3,w)
k=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f4a,s.a),A.a4,A.ca,i,A.e0,A.c8)
k.eA()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f7u,t.a),A.a4,A.ca,i,A.e0,A.c8)
j.eA()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.u(-h/2,-t.gbd(t)/2)))},
au(d){return!0}}
B.aL3.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwp.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buu()}}
B.aLC.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwD.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv2()}}
B.aLF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwF.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv5()}}
B.Pn.prototype={}
B.TX.prototype={
T(){return B.hLY()}}
B.biv.prototype={
a_(){this.a1()
this.le()},
lz(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fm(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bp(w,new B.dE3())},
aZc(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb76()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pn(t,u,1.2,new C.vC(1,30+A.cH.aj()*40,0.9,0.7).iC()))
B.lg("bell",60+A.k.V(12-u)*2,400,0.35)},
gb76(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.L(m,new B.dDS(),C.U(m).k("L<1,M>")).fc(0,A.uZ),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mB,n,n,n,new B.dDT(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dDU(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fsV(s)+" Suns"
t=B.hB(A.bt,s,"Mass",1,0,new B.dDW(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDX(o),n,A.bt,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDY(o),n,A.bt,n),new B.dA("Milky Way core (4 million)",!1,new B.dDZ(o),n,A.bt,n),new B.dA("M87 (6.5 billion)",!1,new B.dE_(o),n,A.bt,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lS:D.G6
return B.jK(A.bt,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dE0(o),n,A.bt,n),new B.dA("Bent light",r,new B.dE1(o),n,A.bt,n),new B.dA("Music",q,new B.dE2(o),p,A.bt,n),new B.fi(A.k2,"Clear",new B.dDV(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
aed(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.f08,w,w,w),A.bD,C.d(e,w,2,w,w,w,w,L.zz,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9l.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bfz.gp(0)
b2.aY(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb76()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.R1
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.v6,A.fk,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cMG,null).av(0,C.bU(u,b0)))
b2.af(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bt.j(0.55).gp(0)
b2.af(u,s,b1)
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
n.d=A.bQ
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mE
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aep.prototype={}
B.UQ.prototype={
T(){var w=x.r,v=x.g
return new B.biX(new C.cs(null,x.A),new B.OS(A.cH),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.biX.prototype={
a_(){this.a1()
this.ZK()
this.le()},
ZK(){var w,v,u,t,s,r,q,p,o=this,n=new C.eM()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aep(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hd()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aep(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cv1(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e4P
k.cx=D.e4S
w=new C.eM()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aep(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
lz(d){var w,v,u,t,s,r,q,p=this
p.e.fm(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.eB(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dV3(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mB,r,r,r,new B.dUU(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.beB(s,r),A.au),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Af.a7f,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d2D[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUV(s,u),r,A.h4,r))}l.push(new B.dA("Collide",s.ch,new B.dUW(s),A.y2,A.bW,r))
o=C.a([new B.eQ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hB(A.h4,""+n,"Arms",6,2,new B.dUX(s),n)
l=s.r
A.d.v(o,C.a([n,B.hB(A.h4,A.k.ab(l,1),"Winding",6,0.8,new B.dUY(s),l)],q))}n=s.as
o.push(B.hB(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dUZ(s),n))
n=s.ax
o.push(B.hB(A.h4,A.k.ab(n,1)+"x","Speed",4,0,new B.dV_(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lS:D.G6
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dV0(s),r,A.bt,r),new B.dA("You are here",l,new B.dV1(s),r,A.aM,r),new B.dA("Music",w,new B.dV2(s),t,A.h4,r)],q),r,r))
return B.jK(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b0,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.beB.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bhC.gp(0)
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
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cak,a0).av(0,C.bU(o,a2)))
a3.af(o,a2,t)}m=new B.d9z(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.h5.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
a3.af(o,a2,t)
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
l.r=new H.mO(1,r,q>200?0.45:0.55,1).iC().j(0.35+(1-s)*0.5).gp(0)
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
f=C.hr(a0,a0,a0,a0,D.eYc,A.a4,A.ca,a0,A.e0,A.c8)
f.eA()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.biP.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bdI.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.h5.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.ir.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.Vy.prototype={
T(){return new B.bjO(new C.cs(null,x.A),new B.OS(A.cH),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjO.prototype={
a_(){this.a1()
this.le()},
lz(d){var w,v,u,t=this
t.e.fm(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bv(w*4)
if(u!==A.k.bv(t.as))B.lg("bell",60+u*4,500,0.35)
t.as=u}},
gcqE(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gch2(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mB,q,q,q,new B.epn(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bq2(r,q),A.f2),r.d),1)
if(r.f==="seasons")w=r.gcqE()
else{w=r.gch2()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tv,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahq,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.yd:A.iC
t=r.Q
s=t?A.lS:D.G6
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.epo(r),A.yr,A.bu,q),new B.dA("Moon phases",n==="moon",new B.epp(r),A.vy,A.bu,q),new B.dA(u,!1,new B.epq(r),v,A.bu,q),new B.dA("Music",t,new B.epr(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hB(A.bu,D.d1Y[A.o.E(A.k.bv(n*12),12)],"Month",1,0,new B.eps(r),n)
v=r.z
A.d.v(s,C.a([n,B.hB(A.bu,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.ept(r),v)],p))}else{p=r.w
s.push(B.hB(A.bu,""+(A.k.bv(p*29.5)+1),"Day of month",1,0,new B.epu(r),p))}p=r.y
s.push(B.hB(A.bu,A.k.ab(p,1)+"x","Speed",4,0.2,new B.epv(r),p))
return B.jK(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bq2.prototype={
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
t.r=A.b2.gp(0)
b9.hR(u,t)
t=C.N()
t.saq(D.eez.av(0,C.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eB(0,p.aC(0,l).gcm())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bfv.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qv(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.eeI.av(0,C.bU(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.N()
t.c=2
t.r=A.cb.gp(0)
b9.bD(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.N()
b5.r=A.cb.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.hr(b4,b4,b4,b4,C.de(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQG,b5),A.a4,A.ca,b4,A.e0,A.c8)
f.eA()
f.a4(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b2.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.saq(new C.bT(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.bbg,D.afk],x.O),D.cUl,b4).av(0,C.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b8A.gp(0)
b9.af(a1,a2,r)
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
a4=a1.aC(0,p).eB(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.aso[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.jp
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b8v.gp(0)
b9.af(a8,a9,b6)
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
b1.aC3(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aC3(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bO.gp(0)
b9.aQ(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b2.gp(0)
b9.af(a8,a9,b8)
b3=C.hr(b4,b4,b4,b4,D.eYd,A.a4,A.ca,b4,A.e0,A.c8)
b3.eA()
b3.a4(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwh.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.btZ()}}
B.aKZ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwo.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buo()}}
B.aLB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aS(){this.aZ()
this.aX()
this.by()}}
B.bwC.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv1()}}
var z=a.updateTypes(["~()","R(to)","R(a42)","az<~>()","R(Cb)","H(to,H)","M(M,to)","R(C7)","R(YT)","R(ab_)","R(v_)","R(a2H)","R(nk)","R(a_q)","R(abN)","H(H)","U2()","UE()","TT()","US()","Va()","Vc()","U1()","Vw()","VL()","Vx()","Vt()","VS()","U0()","VX()","R(my)","Vn()","Vs()","aeu(Y,H)","adm(Y,H)","~(a4<@,@>)","H(C7,C7)","m(eb)","R(aek)","R(a08)","R(Cl)","R(abu)","R(adq)","R(abd)","H(H,qG)","H(H,Cb)","m(qG)","~(qG,ai<m>,H)","qG?(Cb)","R(qG)","r(m,a_W)","R(PE)","~(Ao)","R(abk)","M(H?)","VZ()","R(FA)","R(acC)","M(H)","UF()","M(Pn)","R(a9T)","TY()","a7T()","~(AW,m,u,w,M)","~(m,to)","Vq()","V5(Y)","N4(Y)","Um(Y,br<M>,br<M>)","W2()","UM()","TZ()","UD()","Vo()","VB()","VW()","Vm()","~(m)","cr(aaG)","R(aaF)","UT()","VK()","UU()","TX()","UQ()","VC()","Vy()","Uo()","R(Pn)","~(ba)"])
B.fv4.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.flz.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fs2.prototype={
$1(d){var w
if(!this.a.Lr(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fs3.prototype={
$1(d){return d.x},
$S:z+1}
B.fv1.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fv2.prototype={
$1(d){var w
if(!this.a.Lr(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fv3.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e6t.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e6u.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e6v.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.mb(v,A.dU,A.ic)}},
$S:8}
B.e6G.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e6H.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e6C.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e6A.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e6B(w,this.b,e)))},
$S:1837}
B.e6B.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e6D.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVP().ajh(0,u[1],u[2],u[3])
u[4].bK(0,new B.e6y(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e6z(w.a,v,w.f,w.r))},
$S:0}
B.e6y.prototype={
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
B.e6z.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e6E.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVP().ak1(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e6x(w.a,v,w.e,w.f))},
$S:0}
B.e6x.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e6F.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e6w(w,this.b))},
$S:0}
B.e6w.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e6K.prototype={
$0(){var w=this.a
return w.m(new B.e6J(w))},
$S:0}
B.e6J.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e6L.prototype={
$0(){var w=this.a
return w.m(new B.e6I(w))},
$S:0}
B.e6I.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e6M.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.Ne()},
$S:0}
B.e6N.prototype={
$0(){return this.a.XO(this.b)},
$S:0}
B.e6O.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Ne():w.aUX()},
$S:2}
B.e6P.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Ne():w.aUX()},
$S:0}
B.emz.prototype={
$2(d,e){return d+e},
$S:1838}
B.emT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.emS(w,d))},
$S:132}
B.emS.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.emU.prototype={
$0(){},
$S:0}
B.emV.prototype={
$0(){},
$S:0}
B.emB.prototype={
$0(){return this.a.m(new B.emA(this.b,this.c))},
$S:0}
B.emA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.emq.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.emr.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.ems.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.emt.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.emu.prototype={
$1(d){return this.a.db===d},
$S:32}
B.emv.prototype={
$1(d){return this.a.db=d},
$S:29}
B.emw.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.emx.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:29}
B.emy.prototype={
$0(){var w=this.a
return w.m(w.gavI())},
$S:0}
B.emo.prototype={
$1(d){return this.a.$1(!0)},
$S:79}
B.emp.prototype={
$1(d){return this.a.$1(!1)},
$S:133}
B.emn.prototype={
$1(d){return this.a.$1(!1)},
$S:194}
B.emM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgh(o,p),n)
w=this.b
v=B.byZ("WORLD",w.a,w.c)
u=B.byZ("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cb:A.b1
t=B.byZ("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.C5[o.db].d?A.cb:A.c
q=x.p
s=C.a([v,u,t,B.byZ("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byZ("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hC,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bCR(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rk[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mx,"Again",new B.emH(o),A.c,p),new B.fi(A.oM,"Rebuild",new B.emI(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.iX,"Next world",new B.emJ(o),A.b1,p))
n.push(B.hhZ("Perfect landing!",w,A.b1,v))}if(o.as==="crashed")n.push(B.hhZ("Crash!",o.at,A.cb,C.a([new B.fi(A.mx,"Try again",new B.emK(o),A.b1,p),new B.fi(A.oM,"Rebuild",new B.emL(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b0,A.r,n,p)},
$S:64}
B.emH.prototype={
$0(){var w=this.a
return w.m(w.gavI())},
$S:0}
B.emI.prototype={
$0(){var w=this.a
return w.m(new B.emE(w))},
$S:0}
B.emE.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.emJ.prototype={
$0(){var w=this.a
return w.m(new B.emD(w))},
$S:0}
B.emD.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.emK.prototype={
$0(){var w=this.a
return w.m(w.gavI())},
$S:0}
B.emL.prototype={
$0(){var w=this.a
return w.m(new B.emC(w))},
$S:0}
B.emC.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.emN.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.emG(v,w))},
$S:0}
B.emG.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.emO.prototype={
$1(d){return this.a.y=d},
$S:9}
B.emP.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.emQ.prototype={
$1(d){return this.a.z=d},
$S:9}
B.emR.prototype={
$0(){var w=this.a
return w.m(new B.emF(w))},
$S:0}
B.emF.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEv.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hdj
if(q==null)q=$.hdj=B.cEA()
w=3
return C.b(C.iN(C.a([q,$.qP().bfc("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kA(0,C.cP(J.q(s,1)))
q.m(new B.dEu(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:49}
B.dEu.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dE7.prototype={
$0(){return this.a.bUc(C.aU(J.q(this.b,"group")))},
$S:0}
B.dE8.prototype={
$1(d){return A.a.aT(A.o.fT(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:304}
B.dEw.prototype={
$0(){return B.a7S("kick",0.25)},
$S:0}
B.dE9.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dEa.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dEb.prototype={
$0(){return B.a7S("kick",0.5)},
$S:0}
B.dEc.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dEe.prototype={
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
u=w}if(u.cx!=null&&!A.d.b5(u.d.e,new B.dEd(u)))u.cx=null
u.go=0},
$S:0}
B.dEd.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axq(d)},
$S:z+11}
B.dE4.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dE5.prototype={
$0(){var w=this.a
return w.m(w.gc3B())},
$S:0}
B.dE6.prototype={
$0(){return this.a.agU(null)},
$S:0}
B.dEl.prototype={
$0(){var w=this.a.as
return w==null?null:w.eX(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEm.prototype={
$0(){return this.a.czb(this.b.a)},
$S:0}
B.dEn.prototype={
$0(){return this.a.agU(this.b)},
$S:0}
B.dEo.prototype={
$1(d){var w=this.a
return w.m(new B.dEk(w,d))},
$S:6}
B.dEk.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dEp.prototype={
$0(){var w=this.a
return w.m(new B.dEj(w,this.b))},
$S:0}
B.dEj.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEq.prototype={
$0(){var w=this.a
return w.m(new B.dEi(w))},
$S:0}
B.dEi.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dEr.prototype={
$0(){var w=this.a
return w.m(new B.dEh(w))},
$S:0}
B.dEh.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eX(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.K3},
$S:0}
B.dEs.prototype={
$0(){var w=this.a
return w.m(new B.dEg(w))},
$S:0}
B.dEg.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXC()
else w.p2=null},
$S:0}
B.dEt.prototype={
$0(){var w=this.a
return w.m(new B.dEf(w))},
$S:0}
B.dEf.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c_V.prototype={
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
B.c_W.prototype={
$1(d){var w=new C.rH([],[]).pB(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:602}
B.ffB.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:216}
B.ffC.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:216}
B.ffD.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:216}
B.ffK.prototype={
$1(d){return!J.q(d,0)},
$S:216}
B.ffL.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:216}
B.ffM.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:216}
B.dGG.prototype={
$1(d){return this.a.asp(0)},
$S:8}
B.dGk.prototype={
$0(){var w=this.b
return this.a.cx=new C.L(w,C.hZ8(),C.U(w).k("L<1,H>")).fL(0)},
$S:0}
B.dGn.prototype={
$1(d){return""+d},
$S:81}
B.dGH.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGi.prototype={
$1(d){return this.a.asp(this.b)},
$S:8}
B.dGj.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aw9(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.my(0,d,a1.m2(0.15,0.3))
u=a1.my(0,d,a1.m2(0.15,0.62))
t=a1.my(0,"and",a1.m2(0.48,0.46))
s=a1.my(0,a0,a1.m2(0.82,0.46))
a1=t.a
w.push(new B.nk(v.a,a1,0))
w.push(new B.nk(u.a,a1,1))
w.push(new B.nk(a1,s.a,0))
break
case 1:v=a1.my(0,d,a1.m2(0.12,0.25))
u=a1.my(0,d,a1.m2(0.12,0.65))
r=a1.my(0,"xor",a1.m2(0.46,0.25))
q=a1.my(0,"and",a1.m2(0.46,0.65))
p=a1.aw8(0,a0,a1.m2(0.82,0.25),0)
o=a1.aw8(0,a0,a1.m2(0.82,0.65),0)
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
case 2:k=a1.my(0,"clock",a1.m2(0.15,0.4))
j=a1.my(0,"not",a1.m2(0.45,0.65))
s=a1.my(0,a0,a1.m2(0.82,0.3))
i=a1.my(0,"buzzer",a1.m2(0.82,0.65))
a1=k.a
w.push(new B.nk(a1,s.a,0))
n=j.a
w.push(new B.nk(a1,n,0))
w.push(new B.nk(n,i.a,0))
break
default:h=a1.my(0,d,a1.m2(0.12,0.25))
g=a1.my(0,d,a1.m2(0.12,0.7))
f=a1.my(0,"nor",a1.m2(0.5,0.25))
e=a1.my(0,"nor",a1.m2(0.5,0.7))
s=a1.my(0,a0,a1.m2(0.86,0.25))
a1=f.a
w.push(new B.nk(g.a,a1,0))
n=e.a
w.push(new B.nk(n,a1,1))
w.push(new B.nk(h.a,n,0))
w.push(new B.nk(a1,n,1))
w.push(new B.nk(a1,s.a,0))}},
$S:0}
B.dGo.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aw9(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.C7(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.my(0,w.e,o.m2(0.86,0.5))},
$S:0}
B.dGd.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dGe.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dGf.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dGg.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dGh.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acf(this.c)
if(v.ax)B.By("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dGp.prototype={
$0(){},
$S:0}
B.dGq.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dGr.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGm.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bp(w.e,new B.dGl(v))
w.cy=null},
$S:0}
B.dGl.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dGc.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.my(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dGA.prototype={
$0(){var w=this.a
return w.m(new B.dGz(w))},
$S:0}
B.dGz.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGB.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aD(A.c5,C.jz(C.b3(w,w,w,new B.bap(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGu(v),w,w,w,new B.dGv(v),new B.dGw(v),new B.dGx(v),w,w,w,w,w,w,w,w,w,w,new B.dGy(v),w,w,w,!1,A.a7)},
$S:35}
B.dGy.prototype={
$1(d){return this.a.c5k(d.b)},
$S:51}
B.dGw.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cdO(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awX(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dGx.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGv.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bXO(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bp(v,new B.dGs(w))
u=t.as
u.toString
v.push(new B.nk(u,w.a,w.b))
C.jR()}}t.z=t.as=null},
$S:37}
B.dGs.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGu.prototype={
$1(d){return this.a.auY(d.b)},
$S:329}
B.dGC.prototype={
$0(){return this.a.byK(this.b.a)},
$S:0}
B.dGD.prototype={
$0(){return this.a.asp(this.b.a)},
$S:0}
B.dGE.prototype={
$0(){var w=this.a
return w.m(new B.dGt(w))},
$S:0}
B.dGt.prototype={
$0(){var w=this.a
w.aw9(0)
w.ay=null},
$S:0}
B.dGF.prototype={
$0(){return this.a.cuZ(this.b)},
$S:0}
B.cLm.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e0,A.c8)
u.eA()
return u},
$S:326}
B.dMv.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMu.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMx.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bZA()},
$S:120}
B.dMw.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.fg1.prototype={
$0(){return D.dZf},
$S:z+55}
B.fg2.prototype={
$0(){return D.dxn},
$S:z+59}
B.fg3.prototype={
$0(){return D.duf},
$S:z+62}
B.fge.prototype={
$0(){return D.dYF},
$S:z+63}
B.fgg.prototype={
$0(){return D.dDM},
$S:z+66}
B.fgh.prototype={
$0(){return D.dxi},
$S:z+88}
B.fgi.prototype={
$0(){return D.dxl},
$S:z+17}
B.fgj.prototype={
$0(){return D.dqq},
$S:z+18}
B.fgk.prototype={
$0(){return D.dzR},
$S:z+19}
B.fgl.prototype={
$0(){return D.dBu},
$S:z+20}
B.fgm.prototype={
$0(){return D.dBw},
$S:z+21}
B.fg4.prototype={
$0(){return D.dwu},
$S:z+22}
B.fg5.prototype={
$0(){return D.dGv},
$S:z+23}
B.fg6.prototype={
$0(){return D.dYm},
$S:z+24}
B.fg7.prototype={
$0(){return D.dWo},
$S:z+25}
B.fg8.prototype={
$0(){return D.dFa},
$S:z+26}
B.fg9.prototype={
$0(){return D.dYu},
$S:z+27}
B.fga.prototype={
$0(){return D.dwt},
$S:z+28}
B.fgb.prototype={
$0(){return D.dYE},
$S:z+29}
B.fgc.prototype={
$0(){return D.dwv},
$S:z+16}
B.fgd.prototype={
$0(){return D.dBM},
$S:z+31}
B.fgf.prototype={
$0(){return D.dF9},
$S:z+32}
B.eXf.prototype={
$2(d,e){return new B.aeu($.bDr()[e],new B.eXe(e,this.a),null)},
$S:z+33}
B.eXe.prototype={
$0(){var w=this.a,v=F.aDx.h(0,$.bDr()[w].a)
$.arj=v==null?"music":v
C.a6(this.b,!1).cl(C.e8(new B.eXc(w),!1,null,x.H))},
$S:0}
B.eXc.prototype={
$1(d){return $.bDr()[this.a].e.$0()},
$S:41}
B.eXg.prototype={
$2(d,e){return new B.adm(D.awh[e],new B.eXd(this.a,e),null)},
$S:z+34}
B.eXd.prototype={
$0(){return this.a.d.$1(D.awh[this.b])},
$S:0}
B.eWW.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eWV.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eWU.prototype={
$1(d){var w=this
return new C.e0(new B.eWT(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eWT.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fig,A.at,D.foL,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bC(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Dj,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iJ,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bC(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Dj,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iJ,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dhp[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bF
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aD(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fz,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eWR(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f89,d,d,d,d,d,d,d,d,d),A.am,new C.cm(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zF,new B.eWS(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bl(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A5.xF,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:106}
B.eWR.prototype={
$0(){var w=this
return w.a.$1(new B.eWQ(w.b,w.c,w.d))},
$S:0}
B.eWQ.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eWS.prototype={
$0(){var w=this,v=w.a
v.m(new B.eWP(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eWP.prototype={
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
B.eX3.prototype={
$0(){var w=this.a
return w.m(new B.eX2(w))},
$S:0}
B.eX2.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eX4.prototype={
$0(){return B.qO(this.b,this.a.f,"scene")},
$S:0}
B.eX5.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZ6().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aWk,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bY],x.O),v,v),A.n),A.be)},
$S:292}
B.eX6.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f5(A.A,C.c6(new C.h6(C.a([u.gtW(),u.gZ6()],x.dS)),new B.eX1(u,this.b,v),w),A.f,A.eh),w,w,w)},
$S:263}
B.eX1.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtW().x
r===$&&C.c()
w=r<0.9?1:1-B.bqm(r,0.9,0.98)
v=s.gZ6().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gawa().a){case 0:s=s.bxW(t.b,r,u,t.c)
break
case 1:s=s.bOm(t.b,r,u,t.c)
break
case 2:s=s.czH(t.b,r,u,t.c)
break
case 3:s=s.bAR(t.b,r,u,t.c)
break
case 4:s=s.bE5(t.b,r,u,t.c)
break
case 5:s=s.bDh(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:236}
B.eX7.prototype={
$2(d,e){var w=C.auK(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cIa(u,A.bF,v,3.5)
u=this.a
w=u.gtW().x
w===$&&C.c()
return C.a9F(C.kZ(null,null,null,1,0,new B.eX0(u),A.k.D(w,0,1)),v)},
$S:1842}
B.eX0.prototype={
$1(d){var w=this.a
w.gtW().sp(0,d)
if(w.as)w.m(new B.eWX(w))},
$S:6}
B.eWX.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eX8.prototype={
$0(){var w=this.a
w.gtW().sp(0,0)
w.afD()},
$S:0}
B.eX9.prototype={
$1(d){var w=this.a
w.m(new B.eX_(w,d))
if(w.as)w.afD()},
$S:6}
B.eX_.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eXa.prototype={
$0(){var w=this.a
w.m(new B.eWZ(w,this.b))
w.gtW().sp(0,0)
if(w.as)w.afD()},
$S:0}
B.eWZ.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eXb.prototype={
$0(){var w=this.a
return w.m(new B.eWY(w,this.b))},
$S:0}
B.eWY.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eWN.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1843}
B.eWO.prototype={
$1(d){return d.b},
$S:1844}
B.dgo.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgp.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgl.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgm.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgq.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgr.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgs.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgt.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgu.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgv.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgw.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgx.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgy.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.elU.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.elJ.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.elL.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.elM.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.elP.prototype={
$1(d){var w=D.mD.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.elQ.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cQ(new C.a_(q,new B.elR(d),p.k("a_<1>")),new B.elS(r),p.k("cQ<1,qG?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.elR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.elS.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.elN.prototype={
$1(d){return D.mD.h(0,d.b).c===D.wG},
$S:z+49}
B.elO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.emj.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v1(0,u)
w.aHz(A.o.an(v,1000))},
$S:8}
B.elT.prototype={
$0(){},
$S:0}
B.elF.prototype={
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
B.elW.prototype={
$1(d){var w=null,v=this.a.b
return C.bl(!0,C.v(C.a([A.O,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mD.h(0,v).b,D.mD.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fzO,w,C.d(D.mD.h(0,v).a,w,w,w,w,w,w,A.ht,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,V.ana,w,w,w,w,new B.elV(d),!1,w,w,w,w,w,w,w,D.fru,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.elV.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.elY.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e7C],x.p)
for(w=0;w<6;++w){v=D.awC[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bQA,u,u,u,u,new B.elX(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kF,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.ht,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bl(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bw2,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.elX.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.elI.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.elG(d),w,w),C.bK(!1,A.Do,w,w,!0,w,w,new B.elH(d),w,w)],x.p),w,w,F.n4,D.foW,w,w,w,w,D.frM,w)},
$S:20}
B.elG.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.elH.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.emh.prototype={
$0(){var w=this.a
return w.m(new B.emg(w))},
$S:0}
B.emg.prototype={
$0(){return this.a.r=!1},
$S:0}
B.emi.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mf(new B.em7(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b51:t
v=C.a([C.b3(u,t,t,new B.bgf(w,v,new B.em8(r),new B.em9(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.ema(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFM())
return C.aD(A.c5,C.jz(new C.an(A.W,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.emb(r),t,r.gcf6(),t,new B.emc(r),new B.emd(r),new B.eme(r),t,t,t,t,t,t,t,t,t,t,new B.emf(r),t,t,t,!1,A.a7)},
$S:35}
B.em7.prototype={
$0(){return this.a.abk(this.b)},
$S:0}
B.emf.prototype={
$1(d){return this.a.cxs(d.b)},
$S:51}
B.emd.prototype={
$1(d){return this.a.cf7(d.b)},
$S:42}
B.eme.prototype={
$1(d){return this.a.cf8(d.b)},
$S:18}
B.emc.prototype={
$1(d){return this.a.b_R()},
$S:37}
B.emb.prototype={
$1(d){return this.a.ac1(d.b)},
$S:329}
B.em8.prototype={
$0(){return this.a.z},
$S:691}
B.em9.prototype={
$0(){return this.a.Q},
$S:736}
B.ema.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bK3()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.fmo,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.f6V,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h9,q,q,q)},
$S:59}
B.elK.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tv,w,w,w),A.bD,C.d(g,w,w,w,w,w,w,F.TC,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1846}
B.em3.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lx()},
$S:0}
B.em4.prototype={
$0(){var w=this.a
return w.m(new B.em2(w))},
$S:0}
B.em2.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.em5.prototype={
$0(){var w=this.a
return w.m(new B.em1(w))},
$S:0}
B.em1.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.em6.prototype={
$0(){var w=this.a
return w.m(new B.em0(w))},
$S:0}
B.em0.prototype={
$0(){return this.a.r=!0},
$S:0}
B.em_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mD.gdK(D.mD),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.csi(p[r]))
return new C.D(I.agF,C.v(C.a([new C.D(R.ail,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.elZ.prototype={
$0(){return this.a.c5p(this.b)},
$S:0}
B.dgk.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e0,A.c8)
u.eA()
return u},
$S:326}
B.exZ.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bp(o,new B.exX(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.exY())},
$S:8}
B.exX.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.exY.prototype={
$0(){},
$S:0}
B.exA.prototype={
$0(){},
$S:0}
B.exz.prototype={
$0(){},
$S:0}
B.exJ.prototype={
$0(){return B.qO(this.b,this.a.d,"spark-painter")},
$S:0}
B.exL.prototype={
$1(d){return this.a.aYc(0,d.b)},
$S:42}
B.exP.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aRb(u)
v.c8r(u)
return null},
$S:18}
B.exK.prototype={
$1(d){return this.a.aYb()},
$S:37}
B.exQ.prototype={
$1(d){return this.a.aYc(0,d.b)},
$S:22}
B.exR.prototype={
$1(d){return this.a.aYb()},
$S:51}
B.exS.prototype={
$0(){var w=this.a
return w.m(new B.exI(w,this.b))},
$S:0}
B.exI.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.exT.prototype={
$0(){var w=this.a
return w.m(new B.exH(w))},
$S:0}
B.exH.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.exU.prototype={
$0(){var w=this.a
return w.m(new B.exG(w,this.b))},
$S:0}
B.exG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.exV.prototype={
$1(d){var w=this.a
return w.m(new B.exF(w,d))},
$S:6}
B.exF.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.exW.prototype={
$0(){var w=this.a
return w.m(new B.exE(w))},
$S:0}
B.exE.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.exM.prototype={
$0(){var w=this.a
return w.m(new B.exD(w))},
$S:0}
B.exD.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.exN.prototype={
$0(){var w=this.a
return w.m(new B.exC(w))},
$S:0}
B.exC.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.exO.prototype={
$0(){var w=this.a
return w.m(new B.exB(w,this.b))},
$S:0}
B.exB.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eEy.prototype={
$0(){return B.qO(this.b,this.a.d,"title")},
$S:0}
B.eEz.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIE().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZK(v[t],t,s,q,u))
return new C.D(A.fA,C.bY(A.fQ,w,A.rU,0,0),null)},
$S:712}
B.eEA.prototype={
$1(d){return this.a.m(new B.eEx())},
$S:2}
B.eEx.prototype={
$0(){},
$S:0}
B.eEB.prototype={
$0(){var w=this.a
w.m(new B.eEw(w,this.b))
w=w.gIE()
w.iA(0,0)
w.cJ(0)},
$S:0}
B.eEw.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eEC.prototype={
$0(){var w=this.a
return w.m(new B.eEv(w,this.b))},
$S:0}
B.eEv.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eED.prototype={
$0(){var w=this.a
return w.m(new B.eEu(w))},
$S:0}
B.eEu.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eEE.prototype={
$0(){var w=this.a
return w.m(new B.eEt(w,this.b))},
$S:0}
B.eEt.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eEF.prototype={
$0(){var w=this.a.gIE()
w.iA(0,0)
w.cJ(0)},
$S:0}
B.eEG.prototype={
$1(d){var w=this.a
return w.m(new B.eEs(w,d))},
$S:6}
B.eEs.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eiq.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.eir.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.gam0()*2.2},
$S:z+13}
B.eie.prototype={
$0(){return B.qO(this.b,this.a.d,"orbits")},
$S:0}
B.eif.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadg()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2B:q.ciJ(u,q.gaVs())
return new C.ev(C.aD(A.c5,C.b3(r,r,r,new B.bkC(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eib(q),new B.eic(q),new B.eid(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7),q.d)},
$S:186}
B.eic.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.eid.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eib.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_q(u,v.gaVs(),v.Q,v.b1q(),C.a([],x.g)))
C.jR()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.eig.prototype={
$1(d){var w=this.a
return w.m(new B.eia(w,d))},
$S:6}
B.eia.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eii.prototype={
$1(d){var w=this.a
return w.m(new B.ei9(w,d))},
$S:6}
B.ei9.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eij.prototype={
$1(d){var w=this.a
return w.m(new B.ei8(w,d))},
$S:6}
B.ei8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eik.prototype={
$0(){var w=this.a
return w.m(new B.ei7(w))},
$S:0}
B.ei7.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eil.prototype={
$0(){var w=this.a
return w.m(new B.ei6(w))},
$S:0}
B.ei6.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eim.prototype={
$0(){var w=this.a
return w.m(new B.ei5(w))},
$S:0}
B.ei5.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ein.prototype={
$0(){var w=this.a
return w.m(w.gcuC())},
$S:0}
B.eio.prototype={
$0(){var w=this.a
return w.m(w.gbG_())},
$S:0}
B.eip.prototype={
$0(){var w=this.a
return w.m(new B.ei4(w))},
$S:0}
B.ei4.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqI(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hd())}},
$S:0}
B.eih.prototype={
$0(){var w=this.a
return w.m(A.d.grB(w.e))},
$S:0}
B.eE_.prototype={
$1(d){return this.a.fS$-d.b>6000},
$S:737}
B.eE0.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eDZ(d),C.U(w).k("a_<1>")).gM(0)>=3},
$S:737}
B.eDZ.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eDP.prototype={
$0(){return B.qO(this.b,this.a.d,"swarm")},
$S:0}
B.eDQ.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aD(A.c5,C.b3(w,w,w,new B.bs7(v.e,v.f,v.ax,v.at,v.ay,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eDM(v),new B.eDN(v),new B.eDO(v),w,w,w,w,w,w,w,w,new B.eDE(v),new B.eDF(v),new B.eDG(v),w,w,w,!1,A.a7),v.d)},
$S:186}
B.eDN.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.eDO.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eDM.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eDF.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fS$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lg("flute",7,500,0.3)},
$S:22}
B.eDG.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eDE.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eDR.prototype={
$0(){var w=this.a
return w.m(new B.eDL(w,this.b))},
$S:0}
B.eDL.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eDS.prototype={
$0(){var w=this.a
return w.m(new B.eDK(w,this.b))},
$S:0}
B.eDK.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eDT.prototype={
$0(){var w=this.a
return w.m(new B.eDJ(w))},
$S:0}
B.eDJ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eDU.prototype={
$1(d){var w=this.a
return w.m(new B.eDI(w,d))},
$S:6}
B.eDI.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eDV.prototype={
$1(d){var w=this.a
return w.m(new B.eDH(w,d))},
$S:6}
B.eDH.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eDW.prototype={
$1(d){var w=this.a
return w.m(new B.eDD(w,d))},
$S:6}
B.eDD.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eDX.prototype={
$1(d){var w=this.a
return w.m(new B.eDC(w,d))},
$S:6}
B.eDC.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eDY.prototype={
$1(d){var w=this.a
return w.m(new B.eDB(w,d))},
$S:6}
B.eDB.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFP.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFO(w,d))},
$S:132}
B.dFO.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jy(v==null?A.rp:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFQ.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFR.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Z7(w)>0},
$S:z+14}
B.dFF.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azj()},
$S:0}
B.dFI.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eJ(w,F.kP,new C.D(A.bA,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hF,w,w,w),A.S,C.E(C.ig(!0,w,w,A.y,T.aO2,new B.dFH(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:48}
B.dFH.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFG(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bW:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b2:A.dr,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.je
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.faA,s,s,s))
return C.aD(s,C.p(s,C.v(o,A.m,s,A.b8,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a7)},
$S:77}
B.dFG.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dFM.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaci()
o=C.b3(q,q,q,new B.ba5(p.d,w,v,p.gc5w(),q),o)
v=p.bXr("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gI1()
t=p.as>=p.gI1()?A.b1:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auc("GOAL",""+w+" / "+u,t),p.auc("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hC,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lF)
if(p.Q&&!p.y)s.push(D.aW2)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.b1:A.cb).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b1:A.cb,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gI1()+".",q,q,q,q,q,q,A.hE,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.f18,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mx,"Try again",new B.dFJ(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.iX,"Next level",new B.dFK(p),A.b1,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.W0,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aD(A.c5,new C.an(A.W,q,A.b0,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFL(p),q,q,q,q,!1,A.a7)},
$S:35}
B.dFL.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fS$
E.dF(180,"",200,1,0.4,"sine")
C.jl()},
$S:22}
B.dFJ.prototype={
$0(){var w=this.a
return w.m(w.gb45())},
$S:0}
B.dFK.prototype={
$0(){var w=this.a
return w.aYd(w.r+1)},
$S:0}
B.dFN.prototype={
$0(){var w=this.a
return w.m(w.gb45())},
$S:0}
B.cKU.prototype={
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
v.z=A.lt
w.af(d,e*0.5,v)},
$S:738}
B.edU.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcNN()?this.a.cqI(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.eei.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.ee7.prototype={
$0(){var w=this.a
return w.m(new B.edZ(w))},
$S:0}
B.edZ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ee8.prototype={
$0(){return B.qO(this.b,this.a.d,"marble-music")},
$S:0}
B.ee9.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aD(A.c5,C.b3(w,w,w,new B.bh9(v.e,v.f,v.at,v.ax,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ee4(v),new B.ee5(v),new B.ee6(v),w,w,w,w,w,w,w,w,w,w,new B.edY(v),w,w,w,!1,A.a7),v.d)},
$S:186}
B.edY.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZS(w)
u.e.push(new B.FA(w,w,v,u.aOP(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRs(d.b)},
$S:51}
B.ee5.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.ee6.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRs(d.b)},
$S:18}
B.ee4.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZS(t.ad(0,w).eB(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FA(w,t,v,u.aOP(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.eea.prototype={
$0(){var w=this.a
return w.m(new B.ee3(w,this.b))},
$S:0}
B.ee3.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.eeb.prototype={
$0(){var w=this.a
return w.m(new B.ee2(w,this.b))},
$S:0}
B.ee2.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eec.prototype={
$0(){var w=this.a
return w.m(new B.ee1(w,this.b))},
$S:0}
B.ee1.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eed.prototype={
$1(d){var w=this.a
return w.m(new B.ee0(w,d))},
$S:6}
B.ee0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eee.prototype={
$0(){var w=this.a
return w.m(new B.ee_(w))},
$S:0}
B.ee_.prototype={
$0(){return this.a.axP("stairs")},
$S:0}
B.eef.prototype={
$0(){var w=this.a
return w.m(new B.edX(w))},
$S:0}
B.edX.prototype={
$0(){return this.a.axP("pinball")},
$S:0}
B.eeg.prototype={
$0(){var w=this.a
return w.m(new B.edW(w))},
$S:0}
B.edW.prototype={
$0(){return this.a.axP("random")},
$S:0}
B.eeh.prototype={
$0(){var w=this.a
return w.m(new B.edV(w))},
$S:0}
B.edV.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ehO.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ehP.prototype={
$0(){var w=this.b,v=new B.ad7(this.a.a,this.c)
v.c=w.fS$
return w.e.push(v)},
$S:0}
B.ehW.prototype={
$0(){var w=this.a
return w.m(new B.ehV(w))},
$S:0}
B.ehV.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ehX.prototype={
$0(){return B.qO(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ehY.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQb()}w=u.w
return new C.ev(C.aD(A.c5,C.b3(v,v,v,new B.bkD(u.e,u.gaYf(),6,u.gckP(),u.gcra(),u.fS$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ehU(u),v,v,v,!1,A.a7),u.d)},
$S:186}
B.ehU.prototype={
$1(d){return this.a.c5y(d.b)},
$S:51}
B.ehZ.prototype={
$1(d){var w=this.a
return w.m(new B.ehT(w,d))},
$S:6}
B.ehT.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ei_.prototype={
$0(){var w=this.a
return w.m(new B.ehS(w,this.b))},
$S:0}
B.ehS.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ei0.prototype={
$0(){var w=this.a
return w.m(new B.ehR(w,this.b))},
$S:0}
B.ehR.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ei1.prototype={
$0(){var w=this.a
return w.m(w.gbK_())},
$S:0}
B.ei2.prototype={
$0(){var w=this.a
return w.m(new B.ehQ(w))},
$S:0}
B.ehQ.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad7(v.aB(6),v.aj()))},
$S:0}
B.ei3.prototype={
$0(){var w=this.a
return w.m(A.d.grB(w.e))},
$S:0}
B.fvl.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:128}
B.ehi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ehh(w,d))},
$S:132}
B.ehh.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.eh4.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:128}
B.egZ.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8Z(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.eh_.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.eh3.prototype={
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
o=w.aiQ(u)
v=D.w0.h(0,v[t].a).a
n=w.aiQ(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vW("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaYl()&&w.x.K(0,w.d)){B.vW("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vT("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.eh2.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.eh0(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bK(0,new B.eh1(r,v))
t.a9(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.eh0.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:32}
B.eh1.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:128}
B.ehc.prototype={
$1(d){return""+d.b+" "+D.w0.h(0,d.a).c.toLowerCase()},
$S:403}
B.ehd.prototype={
$0(){var w=this.a
return w.m(new B.ehb(w))},
$S:0}
B.ehb.prototype={
$0(){var w=this.a;++w.d
w.awf(0)},
$S:0}
B.ehe.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aD(A.c5,C.b3(w,w,w,new B.bhR(v.e,v.f,v.r,v.gcBN(),w),A.f2),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eh7(v),new B.eh8(v),new B.eh9(v,e),w,w,w,w,w,w,w,w,w,w,new B.eha(v),w,w,w,!1,A.a7)},
$S:35}
B.eha.prototype={
$1(d){return this.a.c5V(d.b)},
$S:51}
B.eh8.prototype={
$1(d){var w=this.a
return w.w=w.aYm(d.b)},
$S:42}
B.eh9.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.eh5(w,v,d,this.b))},
$S:18}
B.eh5.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.eh7.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ehf.prototype={
$0(){var w=this.a
return w.m(new B.eh6(w,this.b))},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
w.d=this.b
w.awf(0)},
$S:0}
B.ehg.prototype={
$0(){return this.a.c5P(0,this.b.a)},
$S:0}
B.dou.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eB(0,Math.max(h.gcm(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bQ
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:128}
B.dOz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOy(w,d))},
$S:132}
B.dOy.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOo.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.av2[w.aB(4)]
return A.d.h_(u)},
$S:23}
B.dOn.prototype={
$1(d){return B.fZn(d)==="*"},
$S:3}
B.dOp.prototype={
$1(d){return d!==this.a},
$S:3}
B.dOm.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vT("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vW("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8N()[r]+" codes for "+C.t(D.Ci.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b0n()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.Ci.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vW("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOx.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dr:e,u=C.n(8),t=f?C.I(A.b2,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b2:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.nd,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1850}
B.dOs.prototype={
$1(d){var w=D.dl6.h(0,d)
return w==null?A.c:w},
$S:739}
B.dOt.prototype={
$0(){var w=this.a
return w.m(new B.dOr(w,this.b))},
$S:0}
B.dOr.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avz()},
$S:0}
B.dOu.prototype={
$0(){var w=this.a
return w.m(new B.dOq(w))},
$S:0}
B.dOq.prototype={
$0(){var w=this.a;++w.e
w.avz()},
$S:0}
B.dOv.prototype={
$0(){return this.a.aYk(this.b)},
$S:0}
B.dOw.prototype={
$0(){return this.a.aYk(this.b)},
$S:0}
B.dRo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRn(w,d))},
$S:132}
B.dRn.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dRb.prototype={
$0(){},
$S:0}
B.dRa.prototype={
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
B.dRc.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dRg.prototype={
$1(d){var w=this.a
return w.m(new B.dRf(w,d))},
$S:6}
B.dRf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dRh.prototype={
$1(d){var w=this.a
return w.m(new B.dRe(w,d))},
$S:6}
B.dRe.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dRi.prototype={
$1(d){var w=this.a
return w.m(new B.dRd(w,d))},
$S:6}
B.dRd.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dRj.prototype={
$0(){return this.a.a9Z("drought")},
$S:0}
B.dRk.prototype={
$0(){return this.a.a9Z("disease")},
$S:0}
B.dRl.prototype={
$0(){return this.a.a9Z("foxes")},
$S:0}
B.dRm.prototype={
$0(){return this.a.a9Z("rabbits")},
$S:0}
B.d3C.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eM()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kh(new C.eq(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.ca,new C.ju(1),l,l,l,l,A.c8,l)
n.eA()
n.a4(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1852}
B.d3E.prototype={
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
this.c.aQ(u,l)},
$S:1853}
B.d3D.prototype={
$3(d,e,f){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.ca,w,A.e0,A.c8)
v.eA()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1854}
B.bFv.prototype={
$2(d,e){return d+e.a*e.b},
$S:1855}
B.fq1.prototype={
$2(d,e){return e.a-d.a},
$S:1856}
B.dC_.prototype={
$2(d,e){return d+e},
$S:73}
B.dCc.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dCb(v,A.k.D((v.gvR()-w[v.e].guU())/Math.max(w[v.e].guU(),8),-1,1)*0.32,u))},
$S:8}
B.dCb.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dCd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dCa(w,d))},
$S:132}
B.dCa.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dC0.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dC5.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1857}
B.dC6.prototype={
$0(){var w=this.a
return w.m(new B.dC4(w))},
$S:0}
B.dC4.prototype={
$0(){var w=this.a;++w.e
A.d.h2(w.f,0,5,0)},
$S:0}
B.dC7.prototype={
$2(d,e){var w=null,v=this.a
return C.aD(A.c5,C.b3(w,w,w,new B.b9a(v.w,this.b.a,v.f,v.gvR()===v.d[v.e].guU(),w),A.f2),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dC3(v,e),w,w,w,!1,A.a7)},
$S:35}
B.dC3.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cxF(v-1)},
$S:51}
B.dC8.prototype={
$0(){var w=this.a
return w.m(new B.dC2(w,this.b))},
$S:0}
B.dC2.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h2(w.f,0,5,0)},
$S:0}
B.dC9.prototype={
$0(){var w=this.a
return w.m(new B.dC1(w))},
$S:0}
B.dC1.prototype={
$0(){return A.d.h2(this.a.f,0,5,0)},
$S:0}
B.cDr.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cl(new C.u(d,s),20,w),A.qh)
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
B.fp1(v,"1",new C.u(d,s),A.bi,11)}},
$S:1858}
B.dVr.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVq(w,v))},
$S:8}
B.dVq.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dVp(w,d))},
$S:132}
B.dVp.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dVh.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dVl.prototype={
$0(){var w=this.a
return w.m(new B.dVk(w))},
$S:0}
B.dVk.prototype={
$0(){return this.a.r++},
$S:0}
B.dVm.prototype={
$0(){var w=this.a
return w.m(new B.dVj(w,this.b))},
$S:0}
B.dVj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVn.prototype={
$1(d){var w=this.a
return w.m(new B.dVi(w,d))},
$S:6}
B.dVi.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dVo.prototype={
$1(d){return this.a.c5W(this.b,d)},
$S:6}
B.dbC.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bPk(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
m.aQ(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aQ(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hK.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1859}
B.dbD.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fp1(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1860}
B.dGb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dGa(w,d))},
$S:132}
B.dGa.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dFU.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jJ(90-(w-65)):d},
$S:14}
B.dG2.prototype={
$1(d){return this.a.m(new B.dG1())},
$S:2}
B.dG1.prototype={
$0(){},
$S:0}
B.dG3.prototype={
$1(d){return this.a.m(new B.dG0())},
$S:2}
B.dG0.prototype={
$0(){},
$S:0}
B.dG4.prototype={
$0(){var w=this.a
return w.m(new B.dG_(w))},
$S:0}
B.dG_.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aX2()},
$S:0}
B.dG5.prototype={
$0(){var w=this.a
return w.m(new B.dFZ(w))},
$S:0}
B.dFZ.prototype={
$0(){return this.a.f=0},
$S:0}
B.dG6.prototype={
$0(){var w=this.a
return w.m(new B.dFY(w))},
$S:0}
B.dFY.prototype={
$0(){return this.a.f=1},
$S:0}
B.dG7.prototype={
$0(){var w=this.a
return w.m(new B.dFX(w,this.b))},
$S:0}
B.dFX.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dG8.prototype={
$1(d){var w=this.a
return w.m(new B.dFW(w,d))},
$S:6}
B.dFW.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dG9.prototype={
$1(d){var w=this.a
w.m(new B.dFV(w,d))
if(w.ga9g()&&w.Q.K(0,w.x)){B.vW("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vT("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFV.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLz.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLK.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLF.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLL.prototype={
$1(d){return this.a.Lr(d)&&!d.x},
$S:z+1}
B.bLM.prototype={
$2(d,e){return Math.max(d,this.a.azN(e))},
$S:z+6}
B.bLO.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLP(w))},
$S:z+5}
B.bLP.prototype={
$0(){return this.a.a},
$S:109}
B.bLN.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLQ.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLR(w))},
$S:z+5}
B.bLR.prototype={
$0(){return this.a.a},
$S:109}
B.bLB.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLC(w))},
$S:z+5}
B.bLC.prototype={
$0(){return this.a.a},
$S:109}
B.bLA.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLD.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLE(w))},
$S:z+5}
B.bLE.prototype={
$0(){return this.a.a},
$S:109}
B.bLy.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLS.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLG.prototype={
$1(d){return d!==this.b&&this.a.aFV(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLJ.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLI.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLH.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGH.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGI.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ckd.prototype={
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
B.fGL.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1861}
B.fGN.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bQ
return w},
$S:1862}
B.fGO.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1863}
B.fGM.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b4,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1864}
B.bGl.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGk(w))},
$S:0}
B.bGk.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGn.prototype={
$0(){return C.a([],x.ey)},
$S:1865}
B.bGo.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:430}
B.bGp.prototype={
$0(){var w,v,u
J.bDz(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cq(v))if(B.fZQ(v.b))w.b_k(v)
else w.a_7(v)
else{u=w.a.c.bbZ(v)
w.adt(u==null?"The "+$.qc().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGj.prototype={
$1(d){return new C.e0(new B.bGh(this.a,this.b),null)},
$S:21}
B.bGh.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGi(this.a,v,e),t=$.qc(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kb,w,w,w),q=C.aH(w,w,w,w,D.bHh,w,w,w,new B.bGd(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bl(!0,new C.D(A.xH,C.v(C.a([r,A.at,D.fAK,A.S,C.B(C.a([q,C.E(C.kZ(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bNU,w,w,w,new B.bGe(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.feF,w,w,!0,w,w,new B.bGf(u),w,w),C.bK(!1,A.zF,w,w,!0,w,w,new B.bGg(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
B.bGi.prototype={
$1(d){var w=this.a
w.m(new B.bGb(this.b,d))
this.c.$1(new B.bGc())
w.a.toString},
$S:6}
B.bGb.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGc.prototype={
$0(){},
$S:0}
B.bGd.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGe.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGf.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGg.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bGE.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adt("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adt("\u26a0 Overloaded! The "+$.qc().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zC(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adt("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGF.prototype={
$0(){},
$S:0}
B.bFP.prototype={
$0(){},
$S:0}
B.bGG.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aD(A.c5,C.b3(p,p,p,new B.aih(w,v,u,t,s,r==null?A.j_:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGx(o),new B.bGy(o),new B.bGz(o),p,p,p,p,p,p,p,p,p,p,new B.bGA(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b4k)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aD(p,C.p(p,C.B(C.a([D.fcV,C.E(C.d(w,p,p,p,p,p,p,D.f5a,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b9K,p,u,v,p,p,A.n),p,p,p,p,A.nY,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGB(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aYp(C.B(C.a([D.by6,new B.fi(A.FQ,"Cut wire",new B.bGC(o),A.cb,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cfF(w),p,p,10,10,p,p))}return C.jz(new C.an(A.W,p,A.b0,A.r,n,p),A.r,p)},
$S:345}
B.bGy.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6i(s)
if(r!=null){t.m(new B.bGv(t,r,d))
return}w=t.b00(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bGw(t,w))}},
$S:42}
B.bGv.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGw.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGz.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGt(w,d))
else if(w.w!=null)w.m(new B.bGu(w,d.b.ad(0,w.x)))},
$S:18}
B.bGt.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGu.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGx.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6i(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ak1(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adr()},
$S:37}
B.bGA.prototype={
$1(d){var w=this.a,v=d.b,u=w.b00(v)
if(u!=null){w.m(new B.bGr(w,u))
if(D.lZ.ai(0,u.b))w.cqb(u)
w.a.toString
return}w.m(new B.bGs(w,w.cCC(v)))},
$S:51}
B.bGr.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGs.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGB.prototype={
$0(){var w=this.a
return w.m(new B.bGq(w))},
$S:0}
B.bGq.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGC.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.adr()},
$S:0}
B.bFQ.prototype={
$0(){return this.a.bnV(this.b)},
$S:0}
B.bG8.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f_M,w,w,w),C.E(C.kZ(this.b.d,w,w,g,h,new B.bGa(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1866}
B.bGa.prototype={
$1(d){var w=this.a
w.m(new B.bG9(this.b,d))
w.a.toString},
$S:6}
B.bG9.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFW.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.adr()},
$S:0}
B.bFX.prototype={
$0(){var w=this.a
return w.m(new B.bFV(w))},
$S:0}
B.bFV.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFY.prototype={
$0(){this.a.m(new B.bFU(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bFU.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bG0.prototype={
$0(){return this.a.b_k(this.b)},
$S:0}
B.bG1.prototype={
$0(){return this.a.a_7(this.b)},
$S:0}
B.bG2.prototype={
$0(){return this.a.a0M(this.b)},
$S:0}
B.bG3.prototype={
$0(){var w=this.a
w.m(new B.bFT(this.b,this.c))
w.a.toString},
$S:0}
B.bFT.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bG4.prototype={
$0(){var w=this.a
w.m(new B.bFS(this.b,this.c))
w.a.toString},
$S:0}
B.bFS.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bG5.prototype={
$0(){var w=this.a
w.m(new B.bFR(this.b,this.c))
w.a.toString},
$S:0}
B.bFR.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bG6.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG7.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFZ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG_.prototype={
$1(d){return this.a.f=d},
$S:6}
B.ffN.prototype={
$1(d){return d.aFy("bulb")},
$S:z+2}
B.ffO.prototype={
$1(d){return d.pL(0,"switch")&&d.aFy("bulb")},
$S:z+2}
B.ffP.prototype={
$1(d){return A.d.b5(d.a,new B.ffA())},
$S:z+2}
B.ffA.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.ffQ.prototype={
$1(d){return d.pL(0,"resistor")&&A.d.b5(d.a,new B.ffz())},
$S:z+2}
B.ffz.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.ffR.prototype={
$1(d){return!d.pL(0,"battery")&&d.aFy("bulb")},
$S:z+2}
B.ffE.prototype={
$1(d){return A.d.b5(d.a,new B.ffy())},
$S:z+2}
B.ffy.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.ffF.prototype={
$1(d){return A.d.b5(d.a,new B.ffx())},
$S:z+2}
B.ffx.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.ffG.prototype={
$1(d){return A.d.b5(d.a,new B.ffw())},
$S:z+2}
B.ffw.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.ffH.prototype={
$1(d){var w=d.a
return A.d.b5(w,new B.ffu())&&A.d.b5(w,new B.ffv())&&d.pL(0,"buck")},
$S:z+2}
B.ffu.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.ffv.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.ffI.prototype={
$1(d){var w=d.a
return A.d.b5(w,new B.ffs())&&A.d.b5(w,new B.fft())},
$S:z+2}
B.ffs.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fft.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.ffJ.prototype={
$1(d){return A.d.b5(d.a,new B.ffr())},
$S:z+2}
B.ffr.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dRw.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dRF.prototype={
$1(d){var w=this.a.d
return w.aFV(d)&&w.Cq(d)},
$S:z+1}
B.dRG.prototype={
$1(d){return d.x},
$S:z+1}
B.dRH.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRI.prototype={
$0(){},
$S:0}
B.dRv.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.ftE,A.at,D.feB,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PV[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bF,1,A.q,-1)
n.push(C.aD(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.ka,q,q,q,q,q,q,q,q,q),A.bD,new C.x(u.b,q,D.f5V,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cA,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRu(w,d,u),q,q,q,q,q,q,!1,A.a7))}return C.eJ(q,F.kP,new C.D(A.bP,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:48}
B.dRu.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dRt(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRt.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bh6()},
$S:0}
B.dRr.prototype={
$1(d){return new B.V5(this.a.d,null)},
$S:z+67}
B.dRs.prototype={
$0(){},
$S:0}
B.dRE.prototype={
$1(d){return new C.e0(new B.dRD(this.a),null)},
$S:21}
B.dRD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahs(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b1:A.aR
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fr_,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.n(4),C.m1(A.bF,m,m,5,m,w.a/11,new C.lV(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fhE)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.Tt,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dk,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRB(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dr,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aD(m,C.p(m,new C.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7J,m,m,m,m,m,m,m,m,m),A.av,new C.bC(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nY,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRC(l,o,e),m,m,m,m,m,m,!1,A.a7))}return C.bl(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A5.xF,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
B.dRB.prototype={
$0(){var w=this.a
w.m(new B.dRz(w))
this.b.$1(new B.dRA())
w.EQ()},
$S:0}
B.dRz.prototype={
$0(){var w=this.a
$.ahs()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRA.prototype={
$0(){},
$S:0}
B.dRC.prototype={
$0(){var w=this.a
w.m(new B.dRx(w,this.b))
this.c.$1(new B.dRy())
w.EQ()},
$S:0}
B.dRx.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRy.prototype={
$0(){},
$S:0}
B.dRK.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.dRL.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mc("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).cl(C.e8(new B.dRJ(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRJ.prototype={
$1(d){C.ln("construction")
return Am.hC1()},
$S:z+68}
B.dRM.prototype={
$0(){return B.ho8(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
B.dRN.prototype={
$0(){var w=this.a
return w.m(w.d.gcTN())},
$S:0}
B.dRO.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grB(v))
w.EQ()},
$S:0}
B.cAZ.prototype={
$2(d,e){var w=null,v=this.a.gawg().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8i(v,w),A.au)},
$S:70}
B.cAY.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cV(v,u,v+e,u))
w.F(new C.cV(v,u,v,u+e))
w.F(new C.cV(v,u,v-e,u))
w.F(new C.cV(v,u,v,t))
w.F(new C.bF())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aQ(w,t)},
$S:704}
B.fLq.prototype={
$3(d,e,f){return new B.Um(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fLr.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.im(A.A,g,null,new C.bf(C.cI(A.ct,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNs.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.dNr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bXe(o):q.bzU(o,p),m=x.p
p=C.a([C.qf(new C.nd(n,new C.cy(p,x.aC)),A.pM,C.rN(),A.bc,A.bc,new B.dNp())],m)
n=t.d
if(n){w=A.k.E(q.gRv(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.av],m)
if(w)m.push(D.bxT)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b1:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.n8,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uB)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.K9,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wd)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.K9,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aD(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNq(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b0,A.r,p,s),A.aq)},
$S:310}
B.dNp.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.im(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:388}
B.dNq.prototype={
$0(){var w=this.a
return w.m(new B.dNo(w))},
$S:0}
B.dNo.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNn.prototype={
$0(){var w=this.a
return w.m(new B.dNm(w,this.b))},
$S:0}
B.dNm.prototype={
$0(){return this.a.e=A.d.cL(F.k4,this.b)},
$S:0}
B.dNl.prototype={
$0(){var w=this.a
return w.m(new B.dNk(w))},
$S:0}
B.dNk.prototype={
$0(){return this.a.e=0},
$S:0}
B.dNg.prototype={
$0(){var w=this.a
return w.m(new B.dNf(w))},
$S:0}
B.dNf.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fze,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eD,p,p,p,D.fbO,p,p,p),1),C.d(A.a.aT(A.o.u(C.dk(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.h_(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qq,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kT,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bur(w.gRv(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.b2,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aD(p,C.p(p,p,A.f,p,p,A.K8,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNi(w),p,p,p,p,p,p,!1,A.a7),A.ec,C.p(p,p,A.f,p,p,A.aaP,p,12,p,p,p,p,p,12),A.ec,C.p(p,p,A.f,p,p,F.Vn,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k4[o].a,p,1,A.a2,p,p,p,A.a7B,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.buE,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.aed(r,w.gRv(),p),A.f2),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.de4,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.b2,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jj,w.aue(F.k4[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lj,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.Lk,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:310}
B.dNi.prototype={
$0(){var w=this.a
return w.m(new B.dNh(w))},
$S:0}
B.dNh.prototype={
$0(){return this.a.e=null},
$S:0}
B.e9t.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e9s(w,d))},
$S:132}
B.e9s.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fZW(v)},
$S:0}
B.e9u.prototype={
$0(){},
$S:0}
B.e9j.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fZW(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e9k.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvp().r){C.jR()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vW("click",s.c+s.d,60,0.4)
if(B.hoi(r.gvp(),q).b.a===r.gvp().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vT("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.By("bell",D.aoI,700,0.45)
for(q=r.gvp().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e9n.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aD(A.c5,C.b3(s,s,s,new B.bgk(r.gvp(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e9l(r),s,s,s,!1,A.a7),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPB,s,s,s),C.d(""+u.a+"/"+r.gvp().c.a+" \u2605   mirrors "+w.a+"/"+r.gvp().r,s,s,s,s,s,s,R.a7i,s,s,s)],t),A.m,s,A.hC,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fkg("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b1,C.a([new B.fi(A.iX,"Next level",new B.e9m(r),A.b1,s)],t)))
return new C.an(A.W,s,A.b0,A.r,w,s)},
$S:64}
B.e9l.prototype={
$1(d){return this.a.c6h(d.b)},
$S:51}
B.e9m.prototype={
$0(){var w=this.a
return w.adx(w.d+1)},
$S:0}
B.e9o.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grB(v))},
$S:0}
B.e9p.prototype={
$0(){var w=this.a
return w.adx(w.d+1)},
$S:0}
B.e9q.prototype={
$0(){var w=this.a
return w.adx(w.d-1)},
$S:0}
B.e9r.prototype={
$0(){return this.a.adx(this.b)},
$S:0}
B.dgH.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:740}
B.dgK.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fT:A.aL).gp(0)
u.c=7
u.d=A.bQ
r.bD(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bQ
r.bD(w,v,u)},
$S:1868}
B.dgI.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:459}
B.dgJ.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:459}
B.e9M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e9L(w,d))},
$S:132}
B.e9L.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e9N.prototype={
$0(){},
$S:0}
B.e9x.prototype={
$1(d){return d===0},
$S:123}
B.e9G.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7t,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cb:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a7i,s,s,s)],v),A.m,s,A.hC,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dr:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b2,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.D(D.brZ,w,s),C.E(C.B(C.a([C.E(new C.D(A.bS,C.v(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcxI(),s,s,s,s,s,s,D.aQr,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bS,C.v(C.a([C.E(C.b3(s,s,s,new B.bgz(r.f,s),A.f2),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQr,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fkg("Light Mixer","Match each colour with red, green and blue light."+q,A.b9,C.a([new B.fi(A.iC,"Start",new B.e9D(r),A.b1,s)],v)))}if(r.z==="result")w.push(B.fkg(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.iX,"Next colour",new B.e9E(r),A.b1,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fkg("Finished! "+q,u,A.b1,C.a([new B.fi(A.mx,"Play again",new B.e9F(r),A.b1,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.e9D.prototype={
$0(){var w=this.a
return w.m(new B.e9z(w))},
$S:0}
B.e9z.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awk()},
$S:0}
B.e9E.prototype={
$0(){var w=this.a
return w.m(w.gc6f())},
$S:0}
B.e9F.prototype={
$0(){var w=this.a
return w.m(new B.e9y(w))},
$S:0}
B.e9y.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awk()},
$S:0}
B.e9H.prototype={
$1(d){var w=this.a
return w.m(new B.e9C(w,d))},
$S:6}
B.e9C.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e9I.prototype={
$1(d){var w=this.a
return w.m(new B.e9B(w,d))},
$S:6}
B.e9B.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e9J.prototype={
$1(d){var w=this.a
return w.m(new B.e9A(w,d))},
$S:6}
B.e9A.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e9K.prototype={
$0(){var w=this.a
return w.m(w.gc6g())},
$S:0}
B.fgu.prototype={
$0(){return D.e_I},
$S:z+70}
B.fgv.prototype={
$0(){return D.dxV},
$S:z+71}
B.fgw.prototype={
$0(){return D.dus},
$S:z+72}
B.fgx.prototype={
$0(){return D.dxk},
$S:z+73}
B.fgy.prototype={
$0(){return D.dCh},
$S:z+74}
B.fgz.prototype={
$0(){return D.dWr},
$S:z+75}
B.fgA.prototype={
$0(){return D.dYD},
$S:z+76}
B.fgB.prototype={
$0(){return D.dBB},
$S:z+77}
B.ceR.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.ceS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hrK(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dm,16)],t)
n=A.c.j(0.85)
j.push(C.aD(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Ts,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lA,m,m,C.v(C.a([new C.x(r.a,m,D.faq,m,m,m,m,m,m,m,m,m),A.cV,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bA,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ceQ(d,r),m,m,m,m,m,m,!1,A.a7))}return C.bY(A.bz,j,A.bq,14,14)},
$S:167}
B.ceQ.prototype={
$0(){return C.a6(this.a,!1).cl(C.e8(new B.ceP(this.b),!1,null,x.H))},
$S:0}
B.ceP.prototype={
$1(d){return this.a.f.$0()},
$S:41}
B.eJ0.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3w(w.f)]},
$S:0}
B.eIX.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cH.aj()*7},
$S:0}
B.eIW.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c6)
w.w=""},
$S:0}
B.eIZ.prototype={
$0(){var w=this.a
return w.m(new B.eIY(w,this.b))},
$S:0}
B.eIY.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eJ_.prototype={
$1(d){return this.a.aYP(0)},
$S:2}
B.dTK.prototype={
$0(){return B.By("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTL.prototype={
$0(){},
$S:0}
B.dTF.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTH.prototype={
$0(){return this.a.aYR(this.b)},
$S:0}
B.dTI.prototype={
$0(){var w=this.a
return w.m(new B.dTG(w))},
$S:0}
B.dTG.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTJ.prototype={
$0(){var w=this.a
return w.aYR(w.d)},
$S:0}
B.dEC.prototype={
$2(d,e){return d+e},
$S:88}
B.dED.prototype={
$0(){},
$S:0}
B.dEx.prototype={
$2(d,e){return d+e},
$S:88}
B.dEA.prototype={
$0(){var w=this.a
return w.m(new B.dEz(w,this.b))},
$S:0}
B.dEz.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEB.prototype={
$0(){var w=this.a
return w.m(new B.dEy(w))},
$S:0}
B.dEy.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dR0.prototype={
$0(){return B.qO(this.b,this.a.d,"drawing")},
$S:0}
B.dR1.prototype={
$1(d){var w=this.a
return w.m(new B.dR_(w,d))},
$S:42}
B.dR_.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHy(u,v,t))},
$S:0}
B.dR2.prototype={
$1(d){var w=this.a
return w.m(new B.dQZ(w,d))},
$S:18}
B.dQZ.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dR3.prototype={
$1(d){var w=this.a
return w.m(new B.dQY(w,d))},
$S:22}
B.dQY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHy(u,v,t))},
$S:0}
B.dR4.prototype={
$0(){var w=this.a
return w.m(new B.dQX(w,this.b))},
$S:0}
B.dQX.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dR5.prototype={
$1(d){var w=this.a
return w.m(new B.dQW(w,d))},
$S:6}
B.dQW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dR6.prototype={
$0(){var w=this.a
return w.m(new B.dQV(w))},
$S:0}
B.dQV.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dR7.prototype={
$0(){var w=this.a
return w.m(new B.dQU(w))},
$S:0}
B.dQU.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dR8.prototype={
$0(){var w=this.a
return w.m(A.d.grB(w.e))},
$S:0}
B.dR9.prototype={
$0(){var w=this.a
return w.m(new B.dQT(w))},
$S:0}
B.dQT.prototype={
$0(){var w=this.a
w.x=D.avx[A.o.E(A.d.cL(D.avx,w.x)+1,4)]},
$S:0}
B.ef8.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.ef9.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.By("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ef7(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.By("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ef7.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.efa.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ef6(w))},
$S:11}
B.ef6.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.efe.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aD(w,C.mC(new B.efc(v,e),w,A.bc,A.pM,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efd(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:77}
B.efd.prototype={
$0(){return this.a.c7c(this.b)},
$S:0}
B.efc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=C.n(16)
w=o?p:D.bWR
if(o)v=q.a.r.t(0,q.b)?A.b1.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b1:A.b2,A.q,1)
if(o){r=C.dp()
r.fB(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.ft(A.A,C.d(u[t],p,p,p,p,p,p,D.f7O,p,p,p),p,r,!0)
u=r}else u=D.fsn
return C.ft(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:131}
B.eff.prototype={
$0(){var w=this.a
return w.m(new B.efb(w,this.b))},
$S:0}
B.efb.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arA()},
$S:0}
B.efg.prototype={
$0(){var w=this.a
return w.m(w.gbIx())},
$S:0}
B.eq0.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eq1.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.epZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eq_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.epY(w))},
$S:11}
B.epY.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eq2.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.eq3.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eq4.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYQ()},
$S:11}
B.eq5.prototype={
$0(){return this.a.c7i(this.b)},
$S:0}
B.eEi.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.eEr.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kS,C.B(C.a([v,A.ab,new C.dq(1,A.cn,C.f5(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eh),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1870}
B.eEn.prototype={
$1(d){return this.a.m(new B.eEm())},
$S:2}
B.eEm.prototype={
$0(){},
$S:0}
B.eEo.prototype={
$0(){var w=this.a
return w.m(new B.eEl(w,this.b))},
$S:0}
B.eEl.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eEp.prototype={
$1(d){var w=this.a
return w.m(new B.eEk(w,d))},
$S:6}
B.eEk.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eEq.prototype={
$0(){var w=this.a
return w.m(new B.eEj(w))},
$S:0}
B.eEj.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.edO.prototype={
$0(){},
$S:0}
B.edP.prototype={
$0(){},
$S:0}
B.edH.prototype={
$0(){var w=this.a
return w.m(new B.edG(w))},
$S:0}
B.edG.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7S("hat",0.6)},
$S:0}
B.edI.prototype={
$0(){var w=this.a
return w.m(new B.edF(w))},
$S:0}
B.edF.prototype={
$0(){this.a.y=1.1
B.lg("bell",36,200,0.4)},
$S:0}
B.edJ.prototype={
$0(){var w=this.a
return w.m(new B.edE(w))},
$S:0}
B.edE.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.lg("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.edK.prototype={
$0(){var w=this.a
return w.m(new B.edD(w,this.b))},
$S:0}
B.edD.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.edL.prototype={
$1(d){var w=this.a
return w.m(new B.edC(w,d))},
$S:6}
B.edC.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.edM.prototype={
$1(d){var w=this.a
return w.m(new B.edB(w,d))},
$S:6}
B.edB.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.edN.prototype={
$1(d){var w=this.a
return w.m(new B.edA(w,d))},
$S:6}
B.edA.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crL.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.crM.prototype={
$0(){var w=this.a
return B.ho8(this.b,w.c,w.e,w.d)},
$S:0}
B.fPf.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f0i,v,v,v)
return C.ek(C.a([C.bK(!1,D.fhJ,v,v,!0,v,v,new B.fPe(d),v,v)],x.p),v,v,F.n4,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:20}
B.fPe.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.crH.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crG.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crN.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crI.prototype={
$0(){var w=this.a
A.d.W(w.fs$,this.b.bg())
if(w.c!=null)this.c.$0()},
$S:0}
B.crK.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l_$.a)/1e6,0,0.04)
w.l_$=d
w.fS$=A.o.an(v,1000)
w.lz(u)
if(w.c!=null)w.m(new B.crJ())},
$S:8}
B.crJ.prototype={
$0(){},
$S:0}
B.ceN.prototype={
$0(){var w=this
return B.lg(w.a,w.b,w.c,w.d)},
$S:1}
B.dWs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWr(w,d))},
$S:z+79}
B.dWr.prototype={
$0(){return this.a.crV(this.b)},
$S:0}
B.dVV.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:719}
B.dVT.prototype={
$0(){return this.a.id=D.a2H},
$S:0}
B.dVU.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a_<1>")
v=C.pc(new C.a_(w,new B.dVS(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVS.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVR.prototype={
$1(d){var w=null,v=C.c9(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.ek(C.a([C.bK(!1,A.pg,w,w,!0,w,w,new B.dVQ(d),w,w)],x.p),w,w,F.n4,v,w,w,w,w,D.fsr,w)},
$S:20}
B.dVQ.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dWd.prototype={
$0(){return B.qO(this.b,this.a.d,"earth")},
$S:0}
B.dWe.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVM()
r=p.z
o=C.a([C.aD(A.c5,C.b3(q,q,q,new B.beL(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dW1(p),new B.dW2(p),new B.dW3(p),q,q,q,q,q,q,q,new B.dW4(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(Aa.abr)
w=this.b
if(w!=null)o.push(C.ao(8,p.c7U(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b0,A.r,o,q),p.d)},
$S:186}
B.dW2.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:243}
B.dW3.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVM()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:223}
B.dW1.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVM()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dW4.prototype={
$1(d){var w=this.a,v=w.c7X(d.b)
if(v!=null)w.m(new B.dVW(w,v))
else w.m(new B.dVX(w))},
$S:51}
B.dVW.prototype={
$0(){return this.a.awO(this.b)},
$S:0}
B.dVX.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWf.prototype={
$0(){var w=this.a
w.e.bO(0,A.c6)
w.m(new B.dW0(w,this.b))},
$S:0}
B.dW0.prototype={
$0(){var w=this.a
w.id=D.a2H
w.awO(this.b)},
$S:0}
B.dWj.prototype={
$0(){var w=this.a
return w.m(new B.dWc(w))},
$S:0}
B.dWc.prototype={
$0(){var w=this.a
w.fx=null
w.asK(15,w.y,1)},
$S:0}
B.dWk.prototype={
$0(){var w=this.a
return w.m(new B.dWb(w,this.b))},
$S:0}
B.dWb.prototype={
$0(){var w=this.b.b
return this.a.asK(w.a,w.b,w.c)},
$S:0}
B.dWl.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dWa(w,v))},
$S:0}
B.dWa.prototype={
$0(){var w=this.b.a
return this.a.awO(w[A.cH.aB(w.length)])},
$S:0}
B.dWm.prototype={
$1(d){var w=this.a
return w.m(new B.dW9(w,d))},
$S:6}
B.dW9.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dWn.prototype={
$1(d){var w=this.a
return w.m(new B.dW8(w,d))},
$S:6}
B.dW8.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dWo.prototype={
$1(d){var w=this.a
return w.m(new B.dW7(w,d))},
$S:6}
B.dW7.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dWp.prototype={
$0(){var w=this.a
return w.m(new B.dW6(w))},
$S:0}
B.dW6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWq.prototype={
$0(){var w=this.a
return w.m(new B.dW5(w))},
$S:0}
B.dW5.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dWg.prototype={
$0(){var w=this.a
return w.m(new B.dW_(w))},
$S:0}
B.dW_.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dWh.prototype={
$0(){var w=this.a
return w.m(new B.dVZ(w))},
$S:0}
B.dVZ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dWi.prototype={
$0(){var w=this.a
return w.m(new B.dVY(w))},
$S:0}
B.dVY.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dVP.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP2,w,w,w),A.uE,C.d(e,w,2,A.a2,w,w,w,A.TM,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.dVO.prototype={
$0(){var w=this.a
return w.m(new B.dVN(w))},
$S:0}
B.dVN.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcr.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cYw,w,w),this.a),A.a4,A.ca,w,A.e0,A.c8)
v.eA()
return v},
$S:326}
B.dcs.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1871}
B.fgn.prototype={
$0(){return D.dzS},
$S:z+81}
B.fgo.prototype={
$0(){return D.dYl},
$S:z+82}
B.fgp.prototype={
$0(){return D.dzU},
$S:z+83}
B.fgq.prototype={
$0(){return D.due},
$S:z+84}
B.fgr.prototype={
$0(){return D.dzQ},
$S:z+85}
B.fgs.prototype={
$0(){return D.dWs},
$S:z+86}
B.fgt.prototype={
$0(){return D.dWq},
$S:z+87}
B.eFb.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.eFc.prototype={
$0(){var w=this.a
return w.m(new B.eFa(w))},
$S:0}
B.eFa.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRF()+1,16)},
$S:0}
B.eFd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hrJ(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bhy],u)
k.push(C.aD(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.x(s.a,n,D.f4L,n,A.L,n,n,n,n,2,n,n),A.cV,new C.x(s.b,n,D.f9P,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b8,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eF9(d,s),n,n,n,n,n,n,!1,A.a7))}return C.bY(A.fQ,k,A.bq,10,10)},
$S:167}
B.eF9.prototype={
$0(){return C.a6(this.a,!1).cl(C.e8(new B.eF8(this.b),!1,null,x.H))},
$S:0}
B.eF8.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.exe.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.exp.prototype={
$0(){return B.qO(this.b,this.a.d,"solar-system")},
$S:0}
B.exq.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aD(A.c5,C.b3(v,v,v,new B.bre(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.exm(u),new B.exn(u),v,v,v,v,v,v,v,new B.exo(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c7Z(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b0,A.r,t,v),u.d)},
$S:186}
B.exm.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:243}
B.exn.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:223}
B.exo.prototype={
$1(d){var w=this.a,v=w.c81(d.b)
if(v!=null)w.aZb(v)},
$S:51}
B.exr.prototype={
$0(){var w=this.a
return w.m(new B.exl(w))},
$S:0}
B.exl.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.exs.prototype={
$0(){return this.a.aZb(this.b)},
$S:0}
B.ext.prototype={
$1(d){var w=this.a
return w.m(new B.exk(w,d))},
$S:6}
B.exk.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.exu.prototype={
$1(d){var w=this.a
return w.m(new B.exj(w,d))},
$S:6}
B.exj.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.exv.prototype={
$0(){var w=this.a
return w.m(new B.exi(w))},
$S:0}
B.exi.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.exw.prototype={
$0(){var w=this.a
return w.m(new B.exh(w))},
$S:0}
B.exh.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.exx.prototype={
$0(){var w=this.a
return w.m(new B.exg(w))},
$S:0}
B.exg.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.exy.prototype={
$0(){var w=this.a
return w.m(new B.exf(w))},
$S:0}
B.exf.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.exd.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:304}
B.exc.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP2,w,w,w),A.uE,C.d(e,w,2,A.a2,w,w,w,A.TM,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.exb.prototype={
$0(){var w=this.a
return w.m(new B.exa(w))},
$S:0}
B.exa.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eZy.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Q2,w,w),this.a),A.a4,A.ca,w,A.e0,A.c8)
v.eA()
return v},
$S:326}
B.eZz.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eZA.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWw.prototype={
$0(){},
$S:0}
B.dWZ.prototype={
$1(d){return d!=null},
$S:435}
B.dWL.prototype={
$0(){var w=this.a
return w.m(new B.dWC(w,this.b))},
$S:0}
B.dWC.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWM.prototype={
$0(){var w=this.a
return w.m(new B.dWB(w))},
$S:0}
B.dWB.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.m(new B.dWK(w))},
$S:0}
B.dWK.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dWR.prototype={
$0(){var w=this.a
return w.m(new B.dWJ(w))},
$S:0}
B.dWJ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dWS.prototype={
$1(d){var w=this.a
return w.m(new B.dWI(w,d))},
$S:6}
B.dWI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dWT.prototype={
$0(){var w=this.a
return w.m(w.gcva())},
$S:0}
B.dWU.prototype={
$1(d){var w=this.a
return w.m(new B.dWH(w,d))},
$S:6}
B.dWH.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dWV.prototype={
$1(d){var w=this.a
return w.m(new B.dWG(w,d))},
$S:6}
B.dWG.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWW.prototype={
$1(d){var w=this.a
return w.m(new B.dWF(w,d))},
$S:6}
B.dWF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dWX.prototype={
$1(d){var w=this.a
return w.m(new B.dWE(w,d))},
$S:6}
B.dWE.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dWY.prototype={
$0(){var w=this.a
return w.m(new B.dWD(w))},
$S:0}
B.dWD.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dWO.prototype={
$0(){var w=this.a
return w.m(new B.dWA(w))},
$S:0}
B.dWA.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dWP.prototype={
$0(){var w=this.a
return w.m(new B.dWz(w))},
$S:0}
B.dWz.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dWQ.prototype={
$0(){var w=this.a
return w.m(new B.dWy(w))},
$S:0}
B.dWy.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bg4,g,g,C.n(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yK[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yK[q].b)+" m/s\xb2",g,D.f9b,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.N9,C.b0(D.yK[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yK[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yK[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yK[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rP,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.f1t,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWu()))a1.push(D.b4F)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dWu.prototype={
$1(d){return d==null},
$S:435}
B.dWx.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bc,new C.o(v,v,v,C.n(8),v,new C.a8(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ic,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GC(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f7z,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dWt.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9X(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b1
else u=A.a.t(u,"escapes")?A.aR:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GC(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b0,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bD,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQI,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.eq8.prototype={
$0(){return B.qO(this.b,this.a.d,"size-compare")},
$S:0}
B.eq9.prototype={
$0(){var w=this.a
return w.m(new B.eq7(w,this.b))},
$S:0}
B.eq7.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eqa.prototype={
$0(){var w=this.a
return w.m(new B.eq6(w,this.b))},
$S:0}
B.eq6.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eXI.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hw(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pm,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1V,null).av(0,C.bU(d,e)))
u.af(d,e,w)},
$S:738}
B.dE3.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dDS.prototype={
$1(d){return d.b},
$S:z+60}
B.dDT.prototype={
$0(){return B.qO(this.b,this.a.d,"black-hole")},
$S:0}
B.dDU.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aD(A.c5,C.b3(q,q,q,new B.b9l(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDQ(p),q,q,q,q,q,q,q,q,q,new B.dDR(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fsV(t)+" Suns"
t=p.aed("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aed("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GC(s))+" km"),p.aed("TIME",A.k.ab(this.b*100,0)+"%"),p.aed("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.edG)
return new C.ev(new C.an(A.W,q,A.b0,A.r,r,q),p.d)},
$S:186}
B.dDR.prototype={
$1(d){return this.a.aZc(d.b)},
$S:22}
B.dDQ.prototype={
$1(d){if(A.cH.aj()<0.12)this.a.aZc(d.b)},
$S:18}
B.dDW.prototype={
$1(d){var w=this.a
return w.m(new B.dDP(w,d))},
$S:6}
B.dDP.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dDX.prototype={
$0(){var w=this.a
return w.m(new B.dDO(w))},
$S:0}
B.dDO.prototype={
$0(){return this.a.r=10},
$S:0}
B.dDY.prototype={
$0(){var w=this.a
return w.m(new B.dDN(w))},
$S:0}
B.dDN.prototype={
$0(){return this.a.r=21},
$S:0}
B.dDZ.prototype={
$0(){var w=this.a
return w.m(new B.dDM(w))},
$S:0}
B.dDM.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dE_.prototype={
$0(){var w=this.a
return w.m(new B.dDL(w))},
$S:0}
B.dDL.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(new B.dDK(w))},
$S:0}
B.dDK.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dE1.prototype={
$0(){var w=this.a
return w.m(new B.dDJ(w))},
$S:0}
B.dDJ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dE2.prototype={
$0(){var w=this.a
return w.m(new B.dDI(w))},
$S:0}
B.dDI.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dDV.prototype={
$0(){var w=this.a
return w.m(new B.dDH(w))},
$S:0}
B.dDH.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dV3.prototype={
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
$S:1872}
B.dUU.prototype={
$0(){return B.qO(this.b,this.a.d,"galaxy")},
$S:0}
B.dUV.prototype={
$0(){var w=this.a
return w.m(new B.dUT(w,this.b))},
$S:0}
B.dUT.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZK()},
$S:0}
B.dUW.prototype={
$0(){var w=this.a
return w.m(new B.dUS(w))},
$S:0}
B.dUS.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZK()}w.cv1()},
$S:0}
B.dUX.prototype={
$1(d){var w=this.a
return w.m(new B.dUR(w,d))},
$S:6}
B.dUR.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZK()},
$S:0}
B.dUY.prototype={
$1(d){var w=this.a
return w.m(new B.dUQ(w,d))},
$S:6}
B.dUQ.prototype={
$0(){var w=this.a
w.r=this.b
w.ZK()},
$S:0}
B.dUZ.prototype={
$1(d){var w=this.a
return w.m(new B.dUP(w,d))},
$S:6}
B.dUP.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dV_.prototype={
$1(d){var w=this.a
return w.m(new B.dUO(w,d))},
$S:6}
B.dUO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dV0.prototype={
$0(){var w=this.a
return w.m(new B.dUN(w))},
$S:0}
B.dUN.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dV1.prototype={
$0(){var w=this.a
return w.m(new B.dUM(w))},
$S:0}
B.dUM.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dV2.prototype={
$0(){var w=this.a
return w.m(new B.dUL(w))},
$S:0}
B.dUL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d9z.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1873}
B.epn.prototype={
$0(){return B.qO(this.b,this.a.d,"seasons-moon")},
$S:0}
B.epo.prototype={
$0(){var w=this.a
return w.m(new B.epm(w))},
$S:0}
B.epm.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.epp.prototype={
$0(){var w=this.a
return w.m(new B.epl(w))},
$S:0}
B.epl.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.epq.prototype={
$0(){var w=this.a
return w.m(new B.epk(w))},
$S:0}
B.epk.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.epr.prototype={
$0(){var w=this.a
return w.m(new B.epj(w))},
$S:0}
B.epj.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eps.prototype={
$1(d){var w=this.a
return w.m(new B.epi(w,d))},
$S:6}
B.epi.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ept.prototype={
$1(d){var w=this.a
return w.m(new B.eph(w,d))},
$S:6}
B.eph.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.epu.prototype={
$1(d){var w=this.a
return w.m(new B.epg(w,d))},
$S:6}
B.epg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.epv.prototype={
$1(d){var w=this.a
return w.m(new B.epf(w,d))},
$S:6}
B.epf.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLz.prototype
w.bv_=w.q
w=B.aKB.prototype
w.bu_=w.q
w=B.aKC.prototype
w.bu0=w.q
w=B.aKH.prototype
w.bu5=w.q
w=B.aMq.prototype
w.bvY=w.q
w=B.aLx.prototype
w.buY=w.q
w=B.aLG.prototype
w.bv6=w.q
w=B.aLM.prototype
w.bvc=w.q
w=B.aKF.prototype
w.bu3=w.q
w=B.aLu.prototype
w.buV=w.q
w=B.aLJ.prototype
w.bv9=w.q
w=B.aLs.prototype
w.buT=w.q
w=B.aLt.prototype
w.buU=w.q
w=B.aKT.prototype
w.bui=w.q
w=B.aKx.prototype
w.btW=w.q
w=B.aL0.prototype
w.buq=w.q
w=B.ax2.prototype
w.br7=w.q
w=B.ax3.prototype
w.br8=w.q
w=B.aJ3.prototype
w.bso=w.q
w=B.aKQ.prototype
w.bue=w.q
w=B.aLh.prototype
w.buI=w.q
w=B.aLi.prototype
w.buJ=w.q
w=B.aKD.prototype
w.bu1=w.q
w=B.aKW.prototype
w.bul=w.q
w=B.aLq.prototype
w.buR=w.q
w=B.aLU.prototype
w.bvk=w.q
w=B.aL1.prototype
w.bus=w.q
w=B.aL2.prototype
w.but=w.q
w=B.aL3.prototype
w.buu=w.q
w=B.aLC.prototype
w.bv2=w.q
w=B.aLF.prototype
w.bv5=w.q
w=B.aKA.prototype
w.btZ=w.q
w=B.aKZ.prototype
w.buo=w.q
w=B.aLB.prototype
w.bv1=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDH.prototype,"gavI","c35",0)
var r
v(r=B.aC6.prototype,"gcbq","cbr",35)
w(r,"gc3B","aXC",0)
w(B.aC9.prototype,"gc5h","c5i",0)
u(B.aCq.prototype,"gc5n","c5o",52)
w(r=B.aGI.prototype,"gcuI","cuJ",0)
w(r,"gci7","afD",0)
w(r,"gcfP","cfQ",0)
w(r,"gc5m","ade",3)
w(r=B.aDG.prototype,"gbFF","a8M",3)
w(r,"gcf6","b_R",0)
w(r,"gciQ","afL",3)
t(r,"gc5q","adf",3)
w(B.aDW.prototype,"gbWW","bWX",0)
w(r=B.aDy.prototype,"gcuC","cuD",0)
w(r,"gbG_","bG0",0)
w(r=B.aC8.prototype,"gb45","azj",0)
v(r,"gc5w","Z7",54)
w(r,"gc5v","adh",3)
v(r=B.aDx.prototype,"gckP","ay1",58)
v(r,"gcra","aze",15)
w(r,"gbK_","aQb",0)
v(r=B.aDv.prototype,"gcBN","aiQ",15)
t(r,"gc5Q","awf",0)
w(r,"gcna","cnb",0)
v(r=B.aCC.prototype,"gc5R","c5S",90)
w(r,"gc5T","c5U",0)
t(r=B.a42.prototype,"grB","a9",0)
v(r,"gcRC","amC",1)
v(r,"gcO6","Lr",1)
w(r,"gcTN","bh6",0)
s(B.aih.prototype,"gc5Y",0,5,null,["$5"],["qk"],64,0,0)
w(r=B.aCD.prototype,"gc5Z","c6_",0)
w(r,"gclD","ag7",3)
w(r,"gcbG","aeq",3)
w(r,"gcsL","ahd",3)
w(r=B.aDh.prototype,"gc6f","awk",0)
w(r,"gc6g","aYt",0)
w(r=B.aE8.prototype,"gc7d","c7e",0)
t(r,"gc7b","aYP",0)
w(B.aDr.prototype,"gbIx","arA",0)
t(B.aDN.prototype,"gc7f","c7g",0)
v(r=B.aCO.prototype,"gc7V","c7W",78)
w(r,"gbNu","bNv",0)
w(r=B.aCP.prototype,"gcva","cvb",0)
w(r,"gc8_","c80",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajt,B.FS,B.uM,B.aRr,B.a2H,B.b9o,B.c_U,B.xY,B.C7,B.nk,B.ba6,B.Ao,B.brW,B.q0,B.qG,B.Cb,B.YT,B.aek,B.a08,B.Cl,B.abd,B.abu,B.adq,B.FE,B.bkP,B.PE,B.a_q,B.abk,B.abN,B.FA,B.acC,B.ad7,B.tb,B.b8Z,B.aRh,B.eb,B.to,B.a9T,B.ab_,B.a42,B.my,B.ba7,B.fK,B.m5,B.aVT,B.btg,B.aHy,B.mB,B.aaF,B.aaG,B.v_,B.OT,B.xW,B.OS,B.btb,B.Pn,B.aep])
u(C.hV,[B.fv4,B.flz,B.fs2,B.fs3,B.fv1,B.fv2,B.e6v,B.e6O,B.emT,B.emq,B.emr,B.ems,B.emt,B.emu,B.emv,B.emw,B.emx,B.emo,B.emp,B.emn,B.emO,B.emP,B.emQ,B.dE8,B.dEa,B.dEd,B.dEo,B.c_V,B.c_W,B.ffB,B.ffC,B.ffD,B.ffK,B.ffL,B.ffM,B.dGG,B.dGn,B.dGH,B.dGi,B.dGd,B.dGf,B.dGl,B.dGy,B.dGw,B.dGx,B.dGv,B.dGs,B.dGu,B.eXc,B.eWU,B.eX0,B.eX9,B.eWO,B.dgo,B.dgp,B.dgl,B.dgm,B.dgn,B.dgq,B.dgr,B.dgs,B.dgt,B.dgu,B.dgv,B.dgw,B.dgx,B.dgy,B.elP,B.elQ,B.elR,B.elS,B.elN,B.elO,B.emj,B.elW,B.elY,B.elI,B.emf,B.emd,B.eme,B.emc,B.emb,B.elK,B.exZ,B.exX,B.exL,B.exP,B.exK,B.exQ,B.exR,B.exV,B.eEA,B.eEG,B.eiq,B.eir,B.eic,B.eid,B.eib,B.eig,B.eii,B.eij,B.eE_,B.eE0,B.eDZ,B.eDN,B.eDO,B.eDM,B.eDF,B.eDG,B.eDU,B.eDV,B.eDW,B.eDX,B.eDY,B.dFP,B.dFQ,B.dFR,B.dFI,B.dFL,B.cKU,B.edU,B.eei,B.edY,B.ee5,B.ee6,B.ee4,B.eed,B.ehU,B.ehZ,B.ehi,B.eh0,B.ehc,B.eha,B.eh8,B.eh9,B.eh7,B.dOz,B.dOn,B.dOp,B.dOx,B.dOs,B.dRo,B.dRg,B.dRh,B.dRi,B.d3C,B.d3E,B.d3D,B.dCc,B.dCd,B.dC5,B.dC3,B.cDr,B.dVr,B.dVs,B.dVn,B.dVo,B.dbC,B.dbD,B.dGb,B.dFU,B.dG2,B.dG3,B.dG8,B.dG9,B.bLz,B.bLK,B.bLF,B.bLL,B.bLN,B.bLA,B.bLy,B.bLS,B.bLG,B.bLJ,B.bLI,B.bLH,B.bGH,B.fGL,B.fGO,B.fGM,B.bGo,B.bGj,B.bGi,B.bGG,B.bGy,B.bGz,B.bGx,B.bGA,B.bG8,B.bGa,B.bG6,B.bG7,B.bFZ,B.bG_,B.ffN,B.ffO,B.ffP,B.ffA,B.ffQ,B.ffz,B.ffR,B.ffE,B.ffy,B.ffF,B.ffx,B.ffG,B.ffw,B.ffH,B.ffu,B.ffv,B.ffI,B.ffs,B.fft,B.ffJ,B.ffr,B.dRF,B.dRG,B.dRv,B.dRr,B.dRE,B.dRJ,B.cAY,B.fLq,B.fLr,B.e9t,B.e9l,B.dgH,B.dgK,B.e9M,B.e9x,B.e9H,B.e9I,B.e9J,B.ceP,B.eJ_,B.dR1,B.dR2,B.dR3,B.dR5,B.efc,B.eEi,B.eEr,B.eEn,B.eEp,B.edL,B.edM,B.edN,B.fPf,B.crK,B.dWs,B.dVS,B.dVR,B.dW2,B.dW3,B.dW1,B.dW4,B.dWm,B.dWn,B.dWo,B.eF8,B.exm,B.exn,B.exo,B.ext,B.exu,B.exd,B.eZz,B.eZA,B.dWZ,B.dWS,B.dWU,B.dWV,B.dWW,B.dWX,B.dWu,B.eXI,B.dE3,B.dDS,B.dDR,B.dDQ,B.dDW,B.dV3,B.dUX,B.dUY,B.dUZ,B.dV_,B.d9z,B.eps,B.ept,B.epu,B.epv])
u(C.kk,[B.fv3,B.e6A,B.e6y,B.emz,B.emM,B.dGe,B.dGB,B.dMx,B.eXf,B.eXg,B.eWT,B.eX5,B.eX6,B.eX1,B.eX7,B.eWN,B.elL,B.elM,B.emi,B.ema,B.em_,B.eEz,B.eif,B.eDQ,B.dFH,B.dFM,B.ee9,B.ehY,B.fvl,B.eh4,B.eh1,B.ehe,B.dou,B.bFv,B.fq1,B.dC_,B.dC7,B.bLM,B.bLO,B.bLQ,B.bLB,B.bLD,B.bGI,B.ckd,B.fGN,B.bGh,B.bGE,B.bGD,B.dRD,B.cAZ,B.dNr,B.dNp,B.dNj,B.e9n,B.dgI,B.dgJ,B.e9G,B.ceS,B.dEC,B.dEx,B.efe,B.dWe,B.dVP,B.dcs,B.eFd,B.exq,B.exc,B.dWv,B.dWx,B.dWt,B.dDU])
u(C.ag,[B.V5,B.Vx,B.TY,B.U2,B.N5,B.aGH,B.Vw,B.VL,B.VX,B.Vt,B.VS,B.U0,B.Vn,B.Vs,B.Vq,B.Uo,B.UE,B.TT,B.US,B.U1,B.aif,B.UF,B.awK,B.Um,B.Va,B.Vc,B.W2,B.UM,B.TZ,B.UD,B.Vo,B.VB,B.VW,B.Vm,B.UT,B.VZ,B.VK,B.UU,B.VC,B.TX,B.UQ,B.Vy])
u(C.ah,[B.bji,B.aLz,B.aKB,B.aKH,B.aCq,B.aMq,B.aLx,B.aLG,B.aLM,B.aLu,B.aLJ,B.aKF,B.aLs,B.aLt,B.aDv,B.biN,B.aKT,B.aKx,B.aL0,B.biE,B.ax2,B.bwm,B.aJ3,B.aKQ,B.aLh,B.aLi,B.aLU,B.aKW,B.aKD,B.biO,B.aDr,B.aDN,B.bk1,B.aLq,B.aL1,B.bk5,B.aLF,B.aL3,B.aLC,B.aKA,B.aKZ,B.aLB])
u(C.j9,[B.e6t,B.e6u,B.e6G,B.e6H,B.e6C,B.e6B,B.e6D,B.e6z,B.e6E,B.e6x,B.e6F,B.e6w,B.e6K,B.e6J,B.e6L,B.e6I,B.e6M,B.e6N,B.e6P,B.emS,B.emU,B.emV,B.emB,B.emA,B.emy,B.emH,B.emI,B.emE,B.emJ,B.emD,B.emK,B.emL,B.emC,B.emN,B.emG,B.emR,B.emF,B.dEv,B.dEu,B.dE7,B.dEw,B.dE9,B.dEb,B.dEc,B.dEe,B.dE4,B.dE5,B.dE6,B.dEl,B.dEm,B.dEn,B.dEk,B.dEp,B.dEj,B.dEq,B.dEi,B.dEr,B.dEh,B.dEs,B.dEg,B.dEt,B.dEf,B.dGk,B.dGj,B.dGo,B.dGg,B.dGh,B.dGp,B.dGq,B.dGr,B.dGm,B.dGc,B.dGA,B.dGz,B.dGC,B.dGD,B.dGE,B.dGt,B.dGF,B.cLm,B.dMv,B.dMu,B.dMw,B.fg1,B.fg2,B.fg3,B.fge,B.fgg,B.fgh,B.fgi,B.fgj,B.fgk,B.fgl,B.fgm,B.fg4,B.fg5,B.fg6,B.fg7,B.fg8,B.fg9,B.fga,B.fgb,B.fgc,B.fgd,B.fgf,B.eXe,B.eXd,B.eWW,B.eWV,B.eWR,B.eWQ,B.eWS,B.eWP,B.eX3,B.eX2,B.eX4,B.eWX,B.eX8,B.eX_,B.eXa,B.eWZ,B.eXb,B.eWY,B.elU,B.elJ,B.elT,B.elF,B.elV,B.elX,B.elG,B.elH,B.emh,B.emg,B.em7,B.em8,B.em9,B.em3,B.em4,B.em2,B.em5,B.em1,B.em6,B.em0,B.elZ,B.dgk,B.exY,B.exA,B.exz,B.exJ,B.exS,B.exI,B.exT,B.exH,B.exU,B.exG,B.exF,B.exW,B.exE,B.exM,B.exD,B.exN,B.exC,B.exO,B.exB,B.eEy,B.eEx,B.eEB,B.eEw,B.eEC,B.eEv,B.eED,B.eEu,B.eEE,B.eEt,B.eEF,B.eEs,B.eie,B.eia,B.ei9,B.ei8,B.eik,B.ei7,B.eil,B.ei6,B.eim,B.ei5,B.ein,B.eio,B.eip,B.ei4,B.eih,B.eDP,B.eDE,B.eDR,B.eDL,B.eDS,B.eDK,B.eDT,B.eDJ,B.eDI,B.eDH,B.eDD,B.eDC,B.eDB,B.dFO,B.dFF,B.dFG,B.dFJ,B.dFK,B.dFN,B.ee7,B.edZ,B.ee8,B.eea,B.ee3,B.eeb,B.ee2,B.eec,B.ee1,B.ee0,B.eee,B.ee_,B.eef,B.edX,B.eeg,B.edW,B.eeh,B.edV,B.ehO,B.ehP,B.ehW,B.ehV,B.ehX,B.ehT,B.ei_,B.ehS,B.ei0,B.ehR,B.ei1,B.ei2,B.ehQ,B.ei3,B.ehh,B.egZ,B.eh_,B.eh3,B.eh2,B.ehd,B.ehb,B.eh5,B.ehf,B.eh6,B.ehg,B.dOy,B.dOo,B.dOm,B.dOt,B.dOr,B.dOu,B.dOq,B.dOv,B.dOw,B.dRn,B.dRb,B.dRa,B.dRc,B.dRf,B.dRe,B.dRd,B.dRj,B.dRk,B.dRl,B.dRm,B.dCb,B.dCa,B.dC0,B.dC6,B.dC4,B.dC8,B.dC2,B.dC9,B.dC1,B.dVq,B.dVp,B.dVh,B.dVl,B.dVk,B.dVm,B.dVj,B.dVi,B.dGa,B.dG1,B.dG0,B.dG4,B.dG_,B.dG5,B.dFZ,B.dG6,B.dFY,B.dG7,B.dFX,B.dFW,B.dFV,B.bLP,B.bLR,B.bLC,B.bLE,B.bGl,B.bGm,B.bGk,B.bGn,B.bGp,B.bGb,B.bGc,B.bGd,B.bGe,B.bGf,B.bGg,B.bGF,B.bFP,B.bGv,B.bGw,B.bGt,B.bGu,B.bGr,B.bGs,B.bGB,B.bGq,B.bGC,B.bFQ,B.bG9,B.bFW,B.bFX,B.bFV,B.bFY,B.bFU,B.bG0,B.bG1,B.bG2,B.bG3,B.bFT,B.bG4,B.bFS,B.bG5,B.bFR,B.dRw,B.dRH,B.dRI,B.dRu,B.dRt,B.dRs,B.dRB,B.dRz,B.dRA,B.dRC,B.dRx,B.dRy,B.dRK,B.dRL,B.dRM,B.dRN,B.dRO,B.dNs,B.dNq,B.dNo,B.dNn,B.dNm,B.dNl,B.dNk,B.dNg,B.dNf,B.dNi,B.dNh,B.e9s,B.e9u,B.e9j,B.e9k,B.e9m,B.e9o,B.e9p,B.e9q,B.e9r,B.e9L,B.e9N,B.e9D,B.e9z,B.e9E,B.e9F,B.e9y,B.e9C,B.e9B,B.e9A,B.e9K,B.fgu,B.fgv,B.fgw,B.fgx,B.fgy,B.fgz,B.fgA,B.fgB,B.ceR,B.ceQ,B.eJ0,B.eIX,B.eIW,B.eIZ,B.eIY,B.dTK,B.dTL,B.dTF,B.dTH,B.dTI,B.dTG,B.dTJ,B.dED,B.dEA,B.dEz,B.dEB,B.dEy,B.dR0,B.dR_,B.dQZ,B.dQY,B.dR4,B.dQX,B.dQW,B.dR6,B.dQV,B.dR7,B.dQU,B.dR8,B.dR9,B.dQT,B.ef8,B.ef9,B.ef7,B.efa,B.ef6,B.efd,B.eff,B.efb,B.efg,B.eq0,B.eq1,B.epZ,B.eq_,B.epY,B.eq2,B.eq3,B.eq4,B.eq5,B.eEm,B.eEo,B.eEl,B.eEk,B.eEq,B.eEj,B.edO,B.edP,B.edH,B.edG,B.edI,B.edF,B.edJ,B.edE,B.edK,B.edD,B.edC,B.edB,B.edA,B.crL,B.crM,B.fPe,B.crH,B.crG,B.crN,B.crI,B.crJ,B.ceN,B.dWr,B.dVV,B.dVT,B.dVU,B.dVQ,B.dWd,B.dVW,B.dVX,B.dWf,B.dW0,B.dWj,B.dWc,B.dWk,B.dWb,B.dWl,B.dWa,B.dW9,B.dW8,B.dW7,B.dWp,B.dW6,B.dWq,B.dW5,B.dWg,B.dW_,B.dWh,B.dVZ,B.dWi,B.dVY,B.dVO,B.dVN,B.dcr,B.fgn,B.fgo,B.fgp,B.fgq,B.fgr,B.fgs,B.fgt,B.eFb,B.eFc,B.eFa,B.eF9,B.exe,B.exp,B.exr,B.exl,B.exs,B.exk,B.exj,B.exv,B.exi,B.exw,B.exh,B.exx,B.exg,B.exy,B.exf,B.exb,B.exa,B.eZy,B.dWw,B.dWL,B.dWC,B.dWM,B.dWB,B.dWN,B.dWK,B.dWR,B.dWJ,B.dWI,B.dWT,B.dWH,B.dWG,B.dWF,B.dWE,B.dWY,B.dWD,B.dWO,B.dWA,B.dWP,B.dWz,B.dWQ,B.dWy,B.eq8,B.eq9,B.eq7,B.eqa,B.eq6,B.dDT,B.dDP,B.dDX,B.dDO,B.dDY,B.dDN,B.dDZ,B.dDM,B.dE_,B.dDL,B.dE0,B.dDK,B.dE1,B.dDJ,B.dE2,B.dDI,B.dDV,B.dDH,B.dUU,B.dUV,B.dUT,B.dUW,B.dUS,B.dUR,B.dUQ,B.dUP,B.dUO,B.dV0,B.dUN,B.dV1,B.dUM,B.dV2,B.dUL,B.epn,B.epo,B.epm,B.epp,B.epl,B.epq,B.epk,B.epr,B.epj,B.epi,B.eph,B.epg,B.epf])
t(B.bwB,B.aLz)
t(B.aDH,B.bwB)
u(C.mL,[B.bgh,B.bap,B.brl,B.b95,B.bq_,B.bpr,B.b9L,B.bpt,B.btq,B.bgf,B.brg,B.bkC,B.bs7,B.ba5,B.bh9,B.bkD,B.bhR,B.bda,B.b9a,B.beE,B.aih,B.b8i,B.bur,B.aed,B.bgk,B.bgz,B.buD,B.bps,B.bkQ,B.beL,B.bre,B.b9X,B.bqN,B.b9l,B.beB,B.bq2])
t(B.aKC,B.aKB)
t(B.aC6,B.aKC)
t(B.bwk,B.aKH)
t(B.aC9,B.bwk)
u(C.m9,[B.K9,B.a_W,B.J5])
u(C.au,[B.bqn,B.aeu,B.adm,B.PO,B.bqR,B.a7T,B.bcw,B.b66,B.dA,B.eQ,B.ava,B.fi,B.F3])
t(B.aGI,B.aMq)
t(B.bge,C.oK)
t(B.aDG,B.aLx)
t(B.bjT,B.aLG)
t(B.aDW,B.aLM)
t(B.bwA,B.aLu)
t(B.aDy,B.bwA)
t(B.bwI,B.aLJ)
t(B.bjY,B.bwI)
t(B.bwj,B.aKF)
t(B.aC8,B.bwj)
t(B.bwy,B.aLs)
t(B.bjx,B.bwy)
t(B.bwz,B.aLt)
t(B.aDx,B.bwz)
t(B.aCC,B.aKT)
t(B.bir,B.aKx)
t(B.biZ,B.aL0)
t(B.ax3,B.ax2)
t(B.aig,B.ax3)
t(B.aCD,B.bwm)
t(B.b8j,B.aJ3)
t(B.biL,B.aKQ)
t(B.bwr,B.aLh)
t(B.bjk,B.bwr)
t(B.bws,B.aLi)
t(B.aDh,B.bws)
t(B.bwJ,B.aLU)
t(B.aE8,B.bwJ)
t(B.bwn,B.aKW)
t(B.biU,B.bwn)
t(B.bwi,B.aKD)
t(B.biw,B.bwi)
t(B.bwx,B.aLq)
t(B.bjv,B.bwx)
t(B.aL2,B.aL1)
t(B.aCO,B.aL2)
t(B.bwF,B.aLF)
t(B.bjS,B.bwF)
t(B.bwp,B.aL3)
t(B.aCP,B.bwp)
t(B.bwD,B.aLC)
t(B.bjP,B.bwD)
t(B.bwh,B.aKA)
t(B.biv,B.bwh)
t(B.bwo,B.aKZ)
t(B.biX,B.bwo)
t(B.bwC,B.aLB)
t(B.bjO,B.bwC)
w(B.aLz,C.ca)
w(B.bwB,B.mB)
w(B.aKB,C.ca)
w(B.aKC,B.mB)
w(B.aKH,C.ca)
w(B.bwk,B.mB)
w(B.aMq,C.eR)
w(B.aLx,C.ca)
w(B.aLG,C.ca)
w(B.aLM,C.ca)
w(B.aKF,C.ca)
w(B.bwj,B.mB)
w(B.aLu,C.ca)
w(B.bwA,B.mB)
w(B.aLJ,C.ca)
w(B.bwI,B.mB)
w(B.aLs,C.ca)
w(B.bwy,B.mB)
w(B.aLt,C.ca)
w(B.bwz,B.mB)
w(B.aKT,C.ca)
w(B.aKx,C.ca)
w(B.aL0,C.ca)
w(B.ax2,C.ca)
w(B.ax3,B.mB)
w(B.aJ3,C.ca)
v(B.bwm,C.ey)
w(B.aKQ,C.ca)
w(B.aLh,C.ca)
w(B.bwr,B.mB)
w(B.aLi,C.ca)
w(B.bws,B.mB)
w(B.aKD,C.ca)
w(B.bwi,B.mB)
w(B.aKW,C.ca)
w(B.bwn,B.mB)
w(B.aLq,C.ca)
w(B.bwx,B.mB)
w(B.aLU,C.ca)
w(B.bwJ,B.mB)
w(B.aL1,C.ca)
w(B.aL2,B.mB)
w(B.aL3,C.ca)
w(B.bwp,B.mB)
w(B.aLC,C.ca)
w(B.bwD,B.mB)
w(B.aLF,C.ca)
w(B.bwF,B.mB)
w(B.aKA,C.ca)
w(B.bwh,B.mB)
w(B.aKZ,C.ca)
w(B.bwo,B.mB)
w(B.aLB,C.ca)
w(B.bwC,B.mB)})()
C.jY(b.typeUniverse,JSON.parse('{"V5":{"ag":[],"r":[]},"bji":{"ah":["V5"]},"Vx":{"ag":[],"r":[]},"aDH":{"ah":["Vx"]},"bgh":{"aB":[]},"TY":{"ag":[],"r":[]},"aC6":{"ah":["TY"]},"U2":{"ag":[],"r":[]},"aC9":{"ah":["U2"]},"bap":{"aB":[]},"aeu":{"au":[],"r":[]},"adm":{"au":[],"r":[]},"aGH":{"ag":[],"r":[]},"N5":{"ag":[],"r":[]},"aCq":{"ah":["N5"]},"bqn":{"au":[],"r":[]},"PO":{"au":[],"r":[]},"brl":{"aB":[]},"bqR":{"au":[],"r":[]},"b95":{"aB":[]},"aGI":{"ah":["aGH"]},"bq_":{"aB":[]},"bpr":{"aB":[]},"b9L":{"aB":[]},"bpt":{"aB":[]},"btq":{"aB":[]},"Vw":{"ag":[],"r":[]},"bge":{"aB":[]},"aDG":{"ah":["Vw"]},"bgf":{"aB":[]},"VL":{"ag":[],"r":[]},"VX":{"ag":[],"r":[]},"bjT":{"ah":["VL"]},"brg":{"aB":[]},"aDW":{"ah":["VX"]},"Vt":{"ag":[],"r":[]},"VS":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"aDy":{"ah":["Vt"]},"bkC":{"aB":[]},"bjY":{"ah":["VS"]},"bs7":{"aB":[]},"aC8":{"ah":["U0"]},"ba5":{"aB":[]},"Vn":{"ag":[],"r":[]},"Vs":{"ag":[],"r":[]},"bjx":{"ah":["Vn"]},"bh9":{"aB":[]},"aDx":{"ah":["Vs"]},"bkD":{"aB":[]},"Vq":{"ag":[],"r":[]},"Uo":{"ag":[],"r":[]},"UE":{"ag":[],"r":[]},"aDv":{"ah":["Vq"]},"bhR":{"aB":[]},"biN":{"ah":["Uo"]},"aCC":{"ah":["UE"]},"bda":{"aB":[]},"TT":{"ag":[],"r":[]},"US":{"ag":[],"r":[]},"U1":{"ag":[],"r":[]},"bir":{"ah":["TT"]},"b9a":{"aB":[]},"biZ":{"ah":["US"]},"beE":{"aB":[]},"biE":{"ah":["U1"]},"aih":{"aB":[]},"aif":{"ag":[],"r":[]},"aig":{"ah":["aif"]},"UF":{"ag":[],"r":[]},"awK":{"ag":[],"r":[]},"aCD":{"ah":["UF"],"ey":[]},"b8j":{"ah":["awK"]},"b8i":{"aB":[]},"Um":{"ag":[],"r":[]},"biL":{"ah":["Um"]},"bur":{"aB":[]},"aed":{"aB":[]},"Va":{"ag":[],"r":[]},"Vc":{"ag":[],"r":[]},"bjk":{"ah":["Va"]},"bgk":{"aB":[]},"aDh":{"ah":["Vc"]},"bgz":{"aB":[]},"a7T":{"au":[],"r":[]},"W2":{"ag":[],"r":[]},"UM":{"ag":[],"r":[]},"TZ":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"Vo":{"ag":[],"r":[]},"VB":{"ag":[],"r":[]},"VW":{"ag":[],"r":[]},"Vm":{"ag":[],"r":[]},"aE8":{"ah":["W2"]},"buD":{"aB":[]},"biU":{"ah":["UM"]},"bps":{"aB":[]},"biw":{"ah":["TZ"]},"biO":{"ah":["UD"]},"bkQ":{"aB":[]},"aDr":{"ah":["Vo"]},"aDN":{"ah":["VB"]},"bk1":{"ah":["VW"]},"bjv":{"ah":["Vm"]},"bcw":{"au":[],"r":[]},"b66":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"ava":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"F3":{"au":[],"r":[]},"UT":{"ag":[],"r":[]},"aCO":{"ah":["UT"]},"beL":{"aB":[]},"VZ":{"ag":[],"r":[]},"bk5":{"ah":["VZ"]},"VK":{"ag":[],"r":[]},"UU":{"ag":[],"r":[]},"VC":{"ag":[],"r":[]},"bjS":{"ah":["VK"]},"bre":{"aB":[]},"aCP":{"ah":["UU"]},"b9X":{"aB":[]},"bjP":{"ah":["VC"]},"bqN":{"aB":[]},"TX":{"ag":[],"r":[]},"UQ":{"ag":[],"r":[]},"Vy":{"ag":[],"r":[]},"biv":{"ah":["TX"]},"b9l":{"aB":[]},"biX":{"ah":["UQ"]},"beB":{"aB":[]},"bjO":{"ah":["Vy"]},"bq2":{"aB":[]}}'))
C.Ka(b.typeUniverse,JSON.parse('{"mB":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lV<w?>"),e8:w("d4"),G:w("w"),l:w("bk<m,m>"),J:w("bk<m,M>"),I:w("bk<m,H>"),R:w("eI<m>"),Z:w("a0"),M:w("O<da>"),f5:w("O<a2D>"),gh:w("O<aRh>"),h:w("O<a2H>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hp>"),aJ:w("O<az<aC>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<Hp>>"),gO:w("O<ai<ai<M>>>"),bj:w("O<ai<m>>"),b:w("O<ai<M>>"),fA:w("O<ai<H?>>"),D:w("O<a4<m,aC>>"),g:w("O<u>"),bz:w("O<to>"),ds:w("O<a8f>"),v:w("O<hp>"),U:w("O<+(u,M)>"),ev:w("O<+(u,H)>"),K:w("O<+(m,m)>"),fT:w("O<+(M,r)>"),E:w("O<+(H,m)>"),u:w("O<+(H,H)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,M,M,H)>"),o:w("O<+(m,H,m,H)>"),d:w("O<+(m,m,M,M,a4<m,M>)>"),_:w("O<uM>"),q:w("O<cR>"),fQ:w("O<a9T>"),s:w("O<m>"),cF:w("O<as>"),X:w("O<wb>"),F:w("O<aaF>"),p:w("O<r>"),bL:w("O<ab_>"),fH:w("O<lj>"),aq:w("O<b8Z>"),a_:w("O<abd>"),cS:w("O<abk>"),cB:w("O<nk>"),ba:w("O<abu>"),d9:w("O<Pn>"),bi:w("O<abN>"),eW:w("O<Cb>"),fY:w("O<YT>"),aX:w("O<FA>"),ea:w("O<acC>"),gB:w("O<ad7>"),ed:w("O<PE>"),g4:w("O<bkP>"),aS:w("O<a_q>"),ac:w("O<adq>"),cd:w("O<Cl>"),fr:w("O<aek>"),e4:w("O<a08>"),r:w("O<aep>"),au:w("O<aHy>"),f7:w("O<R>"),n:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<to?>"),d4:w("O<m?>"),bN:w("O<H?>"),gJ:w("cs<aig>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<m,@>"),f:w("a4<@,@>"),bd:w("L<eb,m>"),dv:w("L<m,m>"),fR:w("L<+(M,r),r>"),m:w("iC"),gA:w("z2"),gD:w("vL"),P:w("cr"),C:w("aC"),W:w("to"),dV:w("eb"),g7:w("BU"),N:w("m"),bO:w("as"),k:w("kh"),Y:w("bq<M>"),cL:w("aaG"),gj:w("cy<m>"),aC:w("cy<H?>"),dg:w("e9<qG>"),e3:w("b9o"),a2:w("C7"),f3:w("qG"),es:w("FE"),gV:w("mZ"),y:w("R"),i:w("M"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pU?"),T:w("m?"),cD:w("M?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWu=new C.da(0,0.85)
D.fye=new C.x("Tap once to start the chain",null,K.TF,null,null,null,null,null,null,null,null,null)
D.aW2=new C.bI(D.aWu,null,null,D.fye,null)
D.aWk=new C.da(0,0.1)
D.aXo=new B.aRr(0,0,0)
D.K3=new B.aRr(0,0.5,0)
D.aXX=new C.ay(A.b1,1,A.q,-1)
D.aZp=new C.aY(0,1/0,0,290)
D.aZw=new C.aY(16,1/0,16,1/0)
D.f_m=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new C.x("\u26a1",null,D.f_m,null,null,null,null,null,null,null,null,null)
D.b4b=new C.cp(A.A,null,null,D.fAz,null)
D.aQ0=new C.G(!0,A.c2,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQ0,null,A.L,null,null,null,null,null,null,null)
D.e7l=new C.D(A.nZ,D.fqx,null)
D.b4k=new C.cp(A.A,null,null,D.e7l,null)
D.fug=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kG,null,A.L,null,null,null,null,null,null,null)
D.e7p=new C.D(A.nZ,D.fug,null)
D.b4F=new C.cp(A.A,null,null,D.e7p,null)
D.fa9=new C.G(!0,A.je,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz_=new C.x("Draw anywhere",null,D.fa9,null,null,null,null,null,null,null,null,null)
D.b4J=new C.cp(A.A,null,null,D.fz_,null)
D.fgN=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQ0,null,A.L,null,null,null,null,null,null,null)
D.e86=new C.D(A.Fk,D.fgN,null)
D.b51=new C.cp(A.A,null,null,D.e86,null)
D.abM=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b7D=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b8p=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VZ=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b8v=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b8A=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b8F=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.W0=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b9K=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b9P=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.ba8=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bbg=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ad5=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bbJ=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.As=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bcw=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adw=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bd7=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bde=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.adH=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.WD=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bdI=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adR=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.ae3=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WO=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bfs=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bfv=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bfz=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bfI=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aew=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bg4=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EE=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bhb=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bhj=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bhn=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bhy=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bhC=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bhJ=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vb=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afk=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.biP=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bjy=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bk0=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bkq=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afL=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.boR=new C.ba(11e6)
D.bpS=new C.Q(0,0,8,6)
D.agI=new C.Q(0,0,9,0)
D.bqo=new C.Q(10,0,10,4)
D.bqt=new C.Q(10,10,10,6)
D.bqB=new C.Q(10,34,10,26)
D.bqJ=new C.Q(10,6,10,2)
D.Yf=new C.Q(10,6,10,4)
D.bqL=new C.Q(10,8,0,10)
D.brl=new C.Q(12,8,8,8)
D.brq=new C.Q(14,0,14,22)
D.brs=new C.Q(14,0,14,30)
D.ah9=new C.Q(14,0,14,6)
D.ahg=new C.Q(14,10,8,12)
D.brZ=new C.Q(14,8,14,6)
D.bsq=new C.Q(16,4,16,28)
D.bsA=new C.Q(16,8,16,12)
D.buE=new C.Q(26,12,26,58)
D.bvr=new C.Q(4,4,6,2)
D.bvt=new C.Q(4,4,8,2)
D.bw2=new C.Q(8,14,8,12)
D.bw9=new C.Q(8,40,8,30)
D.bwd=new C.Q(8,6,16,0)
D.bwe=new C.Q(8,6,8,8)
D.bwz=new C.Q(0,0,1.5,0)
D.aXa=new C.GP(26,"saturation")
D.bwR=new C.yK(A.cU,D.aXa,null,A.abK)
D.ffT=new C.x("REACTION LAB",null,Y.aQC,null,null,null,null,A.a2,null,1,null,null)
D.bwX=new C.bC(1,A.bh,D.ffT,null)
D.f73=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new C.x("CORE PROTOCOL",null,D.f73,null,null,null,null,null,null,null,null,null)
D.bxa=new C.bC(1,A.bh,D.fj1,null)
D.fjJ=new C.x("\ud83d\udce2 NGMY Ads",null,A.qq,null,null,null,null,A.eD,null,1,null,null)
D.bxT=new C.bC(1,A.bh,D.fjJ,null)
D.feC=new C.x("Wire selected",null,A.ht,null,null,null,null,null,null,null,null,null)
D.by6=new C.bC(1,A.bh,D.feC,null)
D.akp=new C.a0(62712,"MaterialIcons",!1)
D.bCZ=new C.a0(62878,"MaterialIcons",!1)
D.a_x=new C.a0(62908,"MaterialIcons",!1)
D.bD1=new C.a0(62918,"MaterialIcons",!1)
D.bD2=new C.a0(62931,"MaterialIcons",!1)
D.bD5=new C.a0(62951,"MaterialIcons",!1)
D.bDm=new C.a0(63064,"MaterialIcons",!1)
D.bDo=new C.a0(63070,"MaterialIcons",!1)
D.y5=new C.a0(63128,"MaterialIcons",!1)
D.G6=new C.a0(63726,"MaterialIcons",!1)
D.bEI=new C.a0(983122,"MaterialIcons",!1)
D.bEX=new C.a0(983247,"MaterialIcons",!1)
D.bF8=new C.a0(983415,"MaterialIcons",!1)
D.bF9=new C.a0(983417,"MaterialIcons",!1)
D.bFa=new C.a0(983442,"MaterialIcons",!1)
D.bFb=new C.a0(983443,"MaterialIcons",!1)
D.alJ=new C.a0(983467,"MaterialIcons",!1)
D.bFh=new C.a0(983501,"MaterialIcons",!1)
D.bFs=new C.a0(983616,"MaterialIcons",!1)
D.bFt=new C.a0(983624,"MaterialIcons",!1)
D.bFG=new C.a0(983776,"MaterialIcons",!1)
D.bFX=new C.a0(984561,"MaterialIcons",!1)
D.bGx=new C.ae(A.rc,24,A.aM,null,null,null)
D.bHh=new C.ae(A.ND,null,A.ad,null,null,null)
D.bHP=new C.ae(A.mw,21,A.ad,null,null,null)
D.bEH=new C.a0(983117,"MaterialIcons",!1)
D.bJb=new C.ae(D.bEH,28,A.c,null,null,null)
D.bJr=new C.ae(A.jl,18,null,null,null,null)
D.bLc=new C.ae(A.e6,21,A.cb,null,null,null)
D.bLr=new C.ae(A.mx,null,A.ad,null,null,null)
D.bLB=new C.ae(A.a0o,21,A.ad,null,null,null)
D.bMq=new C.ae(A.eC,17,A.ad,null,null,null)
D.an6=new C.ae(A.eC,19,null,null,null,null)
D.mB=new C.ae(A.vF,21,A.ad,null,null,null)
D.bNU=new C.ae(A.N6,null,A.ad,null,null,null)
D.bP2=new C.ae(A.jl,21,A.ad,null,null,null)
D.bPV=new C.ae(A.fe,20,A.aA,null,null,null)
D.bQA=new C.ae(A.dW,null,A.aM,null,null,null)
D.bQV=new C.ae(A.k2,null,A.aA,null,null,null)
D.dc5=w([A.di,A.d3,A.di],x.O)
D.bTO=new C.a8(A.a3,A.a8,A.x,D.dc5,null,null)
D.cR6=w([A.bO,A.bl],x.O)
D.bTW=new C.a8(A.b_,A.b4,A.x,D.cR6,null,null)
D.bU7=new C.a8(A.b_,A.b4,A.x,A.axh,null,null)
D.cRs=w([A.fT,A.f6],x.O)
D.bUg=new C.a8(A.b_,A.b4,A.x,D.cRs,null,null)
D.ao8=new C.a8(A.b_,A.b4,A.x,M.a24,null,null)
D.cOU=w([A.ou,A.i8],x.O)
D.bUU=new C.a8(A.b_,A.b4,A.x,D.cOU,null,null)
D.cQP=w([A.ei,A.az],x.O)
D.aof=new C.a8(A.b_,A.b4,A.x,D.cQP,null,null)
D.d6u=w([A.dA,A.iS,A.bl],x.O)
D.bVc=new C.a8(A.a3,A.a8,A.x,D.d6u,null,null)
D.d6A=w([A.jf,A.cC],x.O)
D.bVw=new C.a8(A.b_,A.b4,A.x,D.d6A,null,null)
D.cnH=w([A.bO,A.dA],x.O)
D.bVF=new C.a8(A.a3,A.a8,A.x,D.cnH,null,null)
D.axX=w([A.ei,L.mi],x.O)
D.bVM=new C.a8(A.b_,A.b4,A.x,D.axX,null,null)
D.bW3=new C.a8(A.b_,A.b4,A.x,I.aoB,null,null)
D.bdP=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b71=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cMh=w([D.bdP,D.b71],x.O)
D.bWg=new C.a8(A.b_,A.b4,A.x,D.cMh,null,null)
D.bWR=new C.a8(A.ax,A.aC,A.x,A.a21,null,null)
D.big=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dhw=w([D.big,A.KB],x.O)
D.bWY=new C.a8(A.b_,A.b4,A.x,D.dhw,null,null)
D.cZQ=w([A.az,A.w],x.O)
D.bX2=new C.a8(A.b_,A.b4,A.x,D.cZQ,null,null)
D.bX5=new C.a8(A.b_,A.b4,A.x,T.axl,null,null)
D.bhG=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bip=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cAm=w([A.Ln,D.bhG,D.bip],x.O)
D.bXf=new C.a8(A.b_,A.b4,A.x,D.cAm,null,null)
D.co0=w([A.d5,A.fy],x.O)
D.bXv=new C.a8(A.b_,A.b4,A.x,D.co0,null,null)
D.bXB=new C.a8(A.ax,A.aC,A.x,A.a2P,null,null)
D.aoD=w([0,2,4,6,7,9,11],x.t)
D.bYc=w([0,4,7],x.t)
D.aoI=w([0,4,7,12],x.t)
D.bYd=w([0,4,7,4],x.t)
D.ax2=w([A.h4,A.pG],x.O)
D.awy=w([A.hx,A.cY],x.O)
D.auX=w([A.bt,A.dQ],x.O)
D.cIS=w([A.aM,A.d5],x.O)
D.cPf=w([A.cb,A.eQ],x.O)
D.d7I=w([A.bW,A.lG],x.O)
D.auq=w([A.cs,A.jW],x.O)
D.cNQ=w([A.bJ,A.aK],x.O)
D.bYx=w([D.ax2,D.awy,A.a29,D.auX,D.cIS,D.cPf,A.aw4,D.d7I,D.auq,D.cNQ],x.Q)
D.c2b=w([120,220,380],x.t)
D.c5W=w([12,16,19,24],x.t)
D.c64=w([1400,800,450,2400],x.t)
D.cak=w([0,0.6,1],x.n)
D.cet=w([250,450,900,1500],x.t)
D.b7Q=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bi1=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bg6=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.blc=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bfi=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atH=w([D.b7Q,D.bi1,D.bg6,D.blc,D.bfi],x.O)
D.eB8=new C.z("type","Typewriter")
D.etZ=new C.z("bounce","Bounce")
D.eBW=new C.z("wave","Wave")
D.eD1=new C.z("zoom","Zoom")
D.cv9=w([D.eB8,D.etZ,D.eBW,A.a5X,I.aLW,D.eD1,I.aLY],x.K)
D.cvn=w([50,25,75],x.t)
D.cAS=w([0,5,10,15,18,20,25],x.t)
D.evD=new C.z("fish","Fish")
D.evF=new C.z("fly","Fireflies")
D.etX=new C.z("bird","Birds")
D.cF4=w([D.evD,D.evF,D.etX],x.K)
D.cJ8=w([900,500,250,1600],x.t)
D.cMG=w([0.78,1],x.n)
D.auY=w([0,2,4,7,9,12,14,16],x.t)
D.cNd=w([A.bt,A.bC,A.b9,A.bt],x.O)
D.av2=w(["A","T","C","G"],x.s)
D.cNe=w(["A","U","C","G"],x.s)
D.a1Z=w([A.ay,A.bZ,A.bk,A.aR,A.nQ],x.O)
D.cOy=w([A.az,A.ay,A.cs,A.bZ,A.bk,A.cz,A.cf,A.bC,A.KB],x.O)
D.a22=w([0.04,0.17,0.3],x.n)
D.cPb=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GT=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eL5=new B.uM("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eLb=new B.uM("Medium engine","A good all-rounder.",0.3,0.9)
D.eLa=new B.uM("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GU=w([D.eL5,D.eLb,D.eLa],x._)
D.ejO=new C.z(6,"Easy")
D.eks=new C.z(8,"Medium")
D.efW=new C.z(10,"Hard")
D.cQ0=w([D.ejO,D.eks,D.efW],x.E)
D.avm=w([0.55,0.78,1],x.n)
D.cRx=w([0.93,0.975,1],x.n)
D.avx=w([A.c,A.h5,A.ov,A.az],x.O)
D.fDx=new B.xW("Moon",1737,4291941851)
D.fDu=new B.xW("Earth",6371,4281908728)
D.fDy=new B.xW("Neptune",24622,4284524026)
D.fDz=new B.xW("Saturn",58232,4294829706)
D.fDv=new B.xW("Jupiter",69911,4294677052)
D.fDA=new B.xW("Sun",696340,4294688548)
D.fDB=new B.xW("Sirius A",119e4,4290763774)
D.fDs=new B.xW("Arcturus",179e5,4294818420)
D.fDt=new B.xW("Betelgeuse",531e6,4294472049)
D.fDw=new B.xW("UY Scuti",667e6,4293870660)
D.PS=w([D.fDx,D.fDu,D.fDy,D.fDz,D.fDv,D.fDA,D.fDB,D.fDs,D.fDt,D.fDw],C.ax("O<xW>"))
D.eGB=new C.bo("glow","Glow",A.a_z)
D.eEa=new C.bo("rainbow","Rainbow",A.nh)
D.eEx=new C.bo("stars","Stars",A.i2)
D.eDV=new C.bo("sparks","Sparks",A.dW)
D.eFS=new C.bo("fire","Fire",A.vG)
D.cTl=w([D.eGB,D.eEa,D.eEx,D.eDV,D.eFS],x.c)
D.avB=w([A.bk,A.ay,A.bZ,A.d3],x.O)
D.cUl=w([0.2,1],x.n)
D.eL2=new B.uM("Radar","Shows your height above the ground.",0.1,0)
D.eL3=new B.uM("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eL0=new B.uM("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avJ=w([D.eL2,D.eL3,D.eL0],x._)
D.eF7=new C.bo("attract","Attract",A.ym)
D.eEU=new C.bo("scare","Scare",A.ra)
D.eE3=new C.bo("food","Food",A.u1)
D.bEN=new C.a0(983158,"MaterialIcons",!1)
D.eFq=new C.bo("hunt","Hunt",D.bEN)
D.cUY=w([D.eF7,D.eEU,D.eE3,D.eFq],x.c)
D.cVm=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cVB=w([47,100,220,470,1000],x.n)
D.aw0=w([0,2,4,7,9],x.t)
D.HX={volts:0}
D.a3M=new C.bk(D.HX,[3],x.J)
D.Ij=new C.e7(["b","battery",0.2,0.3,D.a3M])
D.e2H={on:0}
D.dmc=new C.bk(D.e2H,[1],x.J)
D.D0=new C.e7(["s","switch",0.5,0.3,D.dmc])
D.eJb=new C.e7(["l","bulb",0.8,0.3,A.j_])
D.cRd=w([D.Ij,D.D0,D.eJb],x.d)
D.D_=new C.cC(["b",0,"s",0])
D.eIc=new C.cC(["s",1,"l",0])
D.aM1=new C.cC(["l",1,"b",1])
D.d6F=w([D.D_,D.eIc,D.aM1],x.o)
D.cQH=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.efe=new B.my("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cRd,D.d6F,D.cQH)
D.aGa={ohms:0}
D.aDK=new C.bk(D.aGa,[220],x.J)
D.eIF=new C.e7(["r","resistor",0.5,0.3,D.aDK])
D.eJq=new C.e7(["d","led",0.8,0.3,A.j_])
D.d9F=w([D.Ij,D.eIF,D.eJq],x.d)
D.eHy=new C.cC(["b",0,"r",0])
D.eI6=new C.cC(["r",1,"d",0])
D.eHE=new C.cC(["d",1,"b",1])
D.di_=w([D.eHy,D.eI6,D.eHE],x.o)
D.da4=w(["led","diode","indicator"],x.s)
D.efl=new B.my("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d9F,D.di_,D.da4)
D.a52={level:0}
D.dlz=new C.bk(D.a52,[0.2],x.J)
D.eIL=new C.e7(["p","pot",0.5,0.3,D.dlz])
D.eIN=new C.e7(["m","motor",0.8,0.3,A.j_])
D.cRv=w([D.Ij,D.eIL,D.eIN],x.d)
D.eHx=new C.cC(["b",0,"p",0])
D.eI2=new C.cC(["p",1,"m",0])
D.eHZ=new C.cC(["m",1,"b",1])
D.de0=w([D.eHx,D.eI2,D.eHZ],x.o)
D.d6o=w(["fan","motor","spin","dimmer"],x.s)
D.efc=new B.my("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cRv,D.de0,D.d6o)
D.a3J=new C.bk(D.a52,[0.9],x.J)
D.aM8=new C.e7(["s","solar",0.25,0.3,D.a3J])
D.aM7=new C.e7(["l","bulb",0.75,0.3,A.j_])
D.cU2=w([D.aM8,D.aM7],x.d)
D.eI9=new C.cC(["s",0,"l",0])
D.eHY=new C.cC(["l",1,"s",1])
D.cSf=w([D.eI9,D.eHY],x.o)
D.dez=w(["solar","sun","without battery","no battery","free"],x.s)
D.eff=new B.my("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cU2,D.cSf,D.dez)
D.eJt=new C.e7(["c","crank",0.25,0.3,D.a3J])
D.d4M=w([D.eJt,D.aM7],x.d)
D.eHB=new C.cC(["c",0,"l",0])
D.eHX=new C.cC(["l",1,"c",1])
D.d5j=w([D.eHB,D.eHX],x.o)
D.d4V=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.efb=new B.my("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d4M,D.d5j,D.d4V)
D.dly=new C.bk(D.a52,[0.7],x.J)
D.eIQ=new C.e7(["t","turbine",0.25,0.3,D.dly])
D.eID=new C.e7(["m","motor",0.75,0.3,A.j_])
D.d_s=w([D.eIQ,D.eID],x.d)
D.eIk=new C.cC(["t",0,"m",0])
D.eI_=new C.cC(["m",1,"t",1])
D.cZu=w([D.eIk,D.eI_],x.o)
D.d3F=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ef8=new B.my("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d_s,D.cZu,D.d3F)
D.aDH=new C.bk(D.HX,[9],x.J)
D.a6_=new C.e7(["b","battery",0.2,0.3,D.aDH])
D.aM6=new C.e7(["r","radio",0.8,0.3,A.j_])
D.df9=w([D.a6_,D.D0,D.aM6],x.d)
D.eIe=new C.cC(["s",1,"r",0])
D.aM2=new C.cC(["r",1,"b",1])
D.bXV=w([D.D_,D.eIe,D.aM2],x.o)
D.ddN=w(["radio","music","listen"],x.s)
D.efk=new B.my("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.df9,D.bXV,D.ddN)
D.dmE=new C.bk(D.HX,[12],x.J)
D.aM5=new C.e7(["b","battery",0.2,0.3,D.dmE])
D.eJc=new C.e7(["t","tv",0.8,0.3,A.j_])
D.cRe=w([D.aM5,D.D0,D.eJc],x.d)
D.eIf=new C.cC(["s",1,"t",0])
D.aM3=new C.cC(["t",1,"b",1])
D.d7L=w([D.D_,D.eIf,D.aM3],x.o)
D.df7=w(["tv","television","screen","watch"],x.s)
D.ef5=new B.my("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cRe,D.d7L,D.df7)
D.eJ2=new C.e7(["z","buzzer",0.8,0.3,A.j_])
D.cxH=w([D.Ij,D.D0,D.eJ2],x.d)
D.eIg=new C.cC(["s",1,"z",0])
D.eIy=new C.cC(["z",1,"b",1])
D.cMs=w([D.D_,D.eIg,D.eIy],x.o)
D.dca=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.efh=new B.my("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cxH,D.cMs,D.dca)
D.eIM=new C.e7(["h","heater",0.8,0.3,A.j_])
D.d2n=w([D.a6_,D.D0,D.eIM],x.d)
D.eIb=new C.cC(["s",1,"h",0])
D.eHM=new C.cC(["h",1,"b",1])
D.cN9=w([D.D_,D.eIb,D.eHM],x.o)
D.chK=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ef6=new B.my("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d2n,D.cN9,D.chK)
D.eJe=new C.e7(["s","solar",0.2,0.25,D.a3J])
D.dmJ=new C.bk(D.aGa,[100],x.J)
D.eJh=new C.e7(["r","resistor",0.55,0.25,D.dmJ])
D.eJo=new C.e7(["c","capacitor",0.85,0.25,A.j_])
D.eII=new C.e7(["q","resistor",0.55,0.6,D.aDK])
D.eJf=new C.e7(["d","led",0.85,0.6,A.j_])
D.d7l=w([D.eJe,D.eJh,D.eJo,D.eII,D.eJf],x.d)
D.eIa=new C.cC(["s",0,"r",0])
D.eI5=new C.cC(["r",1,"c",0])
D.eHD=new C.cC(["c",1,"s",1])
D.eHC=new C.cC(["c",0,"q",0])
D.eI4=new C.cC(["q",1,"d",0])
D.eHF=new C.cC(["d",1,"c",1])
D.cXu=w([D.eIa,D.eI5,D.eHD,D.eHC,D.eI4,D.eHF],x.o)
D.d49=w(["capacitor","store","charge","flash"],x.s)
D.efj=new B.my("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d7l,D.cXu,D.d49)
D.eIT=new C.e7(["b","battery",0.15,0.3,D.a3M])
D.eJu=new C.e7(["l1","bulb",0.5,0.3,A.j_])
D.eJ_=new C.e7(["l2","bulb",0.85,0.3,A.j_])
D.cPt=w([D.eIT,D.eJu,D.eJ_],x.d)
D.eHw=new C.cC(["b",0,"l1",0])
D.eHU=new C.cC(["l1",1,"l2",0])
D.eHV=new C.cC(["l2",1,"b",1])
D.d08=w([D.eHw,D.eHU,D.eHV],x.o)
D.deU=w(["series","two bulbs","dim"],x.s)
D.ef9=new B.my("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cPt,D.d08,D.deU)
D.e2V={volts:0,charge:1}
D.dmO=new C.bk(D.e2V,[1.5,0],x.J)
D.eJm=new C.e7(["b","battery",0.75,0.3,D.dmO])
D.cOV=w([D.aM8,D.eJm],x.d)
D.eI8=new C.cC(["s",0,"b",0])
D.eHA=new C.cC(["b",1,"s",1])
D.cXL=w([D.eI8,D.eHA],x.o)
D.d4h=w(["charge","rechargeable","flat","recharge"],x.s)
D.ef7=new B.my("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cOV,D.cXL,D.d4h)
D.dmD=new C.bk(D.HX,[4.5],x.J)
D.eIO=new C.e7(["b","battery",0.2,0.3,D.dmD])
D.aM4=new C.e7(["p","phone",0.8,0.3,A.j_])
D.d_i=w([D.eIO,D.D0,D.aM4],x.d)
D.eId=new C.cC(["s",1,"p",0])
D.a5Z=new C.cC(["p",1,"b",1])
D.dba=w([D.D_,D.eId,D.a5Z],x.o)
D.dcA=w(["phone","charger","usb","mobile"],x.s)
D.efd=new B.my("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d_i,D.dba,D.dcA)
D.eIA=new C.e7(["f","fan",0.8,0.3,A.j_])
D.c9U=w([D.Ij,D.eIA],x.d)
D.eHv=new C.cC(["b",0,"f",0])
D.eHK=new C.cC(["f",1,"b",1])
D.cNE=w([D.eHv,D.eHK],x.o)
D.d6n=w(["fan","cool","air","wind"],x.s)
D.efm=new B.my("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c9U,D.cNE,D.d6n)
D.eJ6=new C.e7(["b","battery",0.15,0.2,D.a3M])
D.eIB=new C.e7(["a","ammeter",0.5,0.2,A.j_])
D.eIz=new C.e7(["l","bulb",0.85,0.2,A.j_])
D.eJ8=new C.e7(["v","voltmeter",0.5,0.6,A.j_])
D.d4A=w([D.eJ6,D.eIB,D.eIz,D.eJ8],x.d)
D.eHt=new C.cC(["b",0,"a",0])
D.eHs=new C.cC(["a",1,"l",0])
D.eIm=new C.cC(["v",0,"l",0])
D.eIn=new C.cC(["v",1,"l",1])
D.cXC=w([D.eHt,D.eHs,D.aM1,D.eIm,D.eIn],x.o)
D.dhZ=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.efi=new B.my("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d4A,D.cXC,D.dhZ)
D.eJx=new C.e7(["b","battery",0.15,0.2,D.aDH])
D.eIS=new C.e7(["t","tv",0.55,0.2,A.j_])
D.aDI=new C.bk(D.HX,[5],x.J)
D.eIG=new C.e7(["c","buck",0.4,0.5,D.aDI])
D.eIU=new C.e7(["p","phone",0.8,0.5,A.j_])
D.cVo=w([D.eJx,D.eIS,D.eIG,D.eIU],x.d)
D.eHz=new C.cC(["b",0,"t",0])
D.aM_=new C.cC(["b",0,"c",0])
D.aM0=new C.cC(["c",1,"p",0])
D.d_f=w([D.eHz,D.aM3,D.aM_,D.aM0,D.a5Z],x.o)
D.cTC=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.efa=new B.my("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cVo,D.d_f,D.cTC)
D.eIH=new C.e7(["c","buck",0.5,0.3,D.aDI])
D.cN0=w([D.aM5,D.eIH,D.aM4],x.d)
D.cRE=w([D.aM_,D.aM0,D.a5Z],x.o)
D.cl8=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ef4=new B.my("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cN0,D.cRE,D.cl8)
D.eIY=new C.e7(["d","diode",0.5,0.3,A.j_])
D.d0l=w([D.a6_,D.eIY,D.aM6],x.d)
D.eHu=new C.cC(["b",0,"d",0])
D.eHG=new C.cC(["d",1,"r",0])
D.cAc=w([D.eHu,D.eHG,D.aM2],x.o)
D.cTi=w(["diode","protect","backwards","one way"],x.s)
D.efg=new B.my("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d0l,D.cAc,D.cTi)
D.PV=w([D.efe,D.efl,D.efc,D.eff,D.efb,D.ef8,D.efk,D.ef5,D.efh,D.ef6,D.efj,D.ef9,D.ef7,D.efd,D.efm,D.efi,D.efa,D.ef4,D.efg],C.ax("O<my>"))
D.h0V=new B.FS("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h0T=new B.FS("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.h0W=new B.FS("Mercury",3.7,A.jU,"Mercury is small, so its gravity is like Mars.")
D.h0Q=new B.FS("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h0S=new B.FS("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.h0U=new B.FS("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.h0R=new B.FS("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rk=w([D.h0V,D.h0T,D.h0W,D.h0Q,D.h0S,D.h0U,D.h0R],C.ax("O<FS>"))
D.cXs=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2i=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cY8=w([0.2,0.5,0.8],x.n)
D.bDh=new C.a0(63040,"MaterialIcons",!1)
D.eEY=new C.bo("peg","Peg",D.bDh)
D.eE7=new C.bo("bar","Bar",R.BF)
D.eEA=new C.bo("erase","Erase",A.Na)
D.cYl=w([D.eEY,D.eE7,D.eEA],x.c)
D.eNY=new C.cR(A.bi,A.J,4)
D.cYw=w([D.eNY],x.q)
D.awg=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aV9=new B.K9(0,"accordion")
D.cNW=w([A.jn,A.BG,A.Bu],x.w)
D.cUQ=w(["Mail","SMS","Ad"],x.s)
D.cOq=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h_7=new B.Ao(D.aV9,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ax2,D.cNW,D.cUQ,D.cOq)
D.a9u=new B.K9(1,"flip")
D.d43=w([A.pY,A1.Gi,A.u2],x.w)
D.cZZ=w(["Unlock","Verify","Secure"],x.s)
D.cMX=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h_6=new B.Ao(D.a9u,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awy,D.d43,D.cZZ,D.cMX)
D.aVa=new B.K9(2,"towers")
D.cYO=w([A.yi,A.q1,A.hO],x.w)
D.cYr=w(["Save","Grow","Earn"],x.s)
D.cB0=w(["","",""],x.s)
D.h_8=new B.Ao(D.aVa,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a29,D.cYO,D.cYr,D.cB0)
D.a9v=new B.K9(3,"assemble")
D.d4Y=w([A.nj,A.ha,A.dW],x.w)
D.cUe=w(["Launch","Charge","Shine"],x.s)
D.d1z=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h_a=new B.Ao(D.a9v,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auX,D.d4Y,D.cUe,D.d1z)
D.aVb=new B.K9(4,"carousel")
D.d4N=w([A.b9,A.f7],x.O)
D.cV_=w([A.mw,A.akW,A.a0g],x.w)
D.cPR=w(["Explore","Discover","Learn"],x.s)
D.d_n=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h_5=new B.Ao(D.aVb,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d4N,D.cV_,D.cPR,D.d_n)
D.aVc=new B.K9(5,"burst")
D.cYn=w([A.ja,A.tg],x.O)
D.cOl=w([A.lk,A.mu,A.i1],x.w)
D.cOH=w(["Cheer","Win","Love"],x.s)
D.cQN=w(["Make some noise","First place","Share the joy"],x.s)
D.h_9=new B.Ao(D.aVc,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cYn,D.cOl,D.cOH,D.cQN)
D.awh=w([D.h_7,D.h_6,D.h_8,D.h_a,D.h_5,D.h_9],C.ax("O<Ao>"))
D.eF_=new C.bo("skin","Skin",A.akX)
D.eGn=new C.bo("muscle","Muscles",A.Nm)
D.eG5=new C.bo("organ","Organs",A.i1)
D.bCI=new C.a0(62747,"MaterialIcons",!1)
D.eGb=new C.bo("bone","Skeleton",D.bCI)
D.eGt=new C.bo("vessel","Blood vessels",A.q3)
D.cYU=w([D.eF_,D.eGn,D.eG5,D.eGb,D.eGt],x.c)
D.eL4=new B.uM("Simple legs","Light. Land gently.",0.15,0.2)
D.eL6=new B.uM("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eL9=new B.uM("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C5=w([D.eL4,D.eL6,D.eL9],x._)
D.d_x=w([1.77,3.55,7.15,16.7],x.n)
D.d1Y=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eAC=new C.z("spiral","Spiral")
D.ejL=new C.z("barred","Barred spiral")
D.ev7=new C.z("elliptical","Elliptical")
D.d2D=w([D.eAC,D.ejL,D.ev7],x.K)
D.eH9=new C.cC(["beat",0.18,0.28,0])
D.eIh=new C.cC(["burst",0.7,0.2,0])
D.eIs=new C.cC(["delay",0.45,0.5,1])
D.eI1=new C.cC(["ripple",0.75,0.6,3])
D.cTY=w([D.eH9,D.eIh,D.eIs,D.eI1],x.e)
D.d3t=w([N.l6,M.Ii,F.So],x.u)
D.fZm=new B.FE("First spark","A clock lights a burst and a ripple",D.cTY,D.d3t)
D.eHJ=new C.cC(["beat",0.15,0.3,1])
D.eGO=new C.cC(["ripple",0.62,0.15,0])
D.eIo=new C.cC(["delay",0.4,0.45,0])
D.eHp=new C.cC(["ripple",0.7,0.45,0])
D.eH5=new C.cC(["delay",0.4,0.7,1])
D.eI3=new C.cC(["shake",0.75,0.75,0])
D.dfT=w([D.eHJ,D.eGO,D.eIo,D.eHp,D.eH5,D.eI3],x.e)
D.egT=new C.z(2,4)
D.aLQ=new C.z(4,5)
D.cXj=w([N.l6,M.Ii,F.So,D.egT,D.aLQ],x.u)
D.fZo=new B.FE("Heartbeat","Two thumps, then a shake",D.dfT,D.cXj)
D.eHe=new C.cC(["dice",0.15,0.7,1])
D.eIu=new C.cC(["echo",0.4,0.7,0])
D.eHn=new C.cC(["comet",0.7,0.5,4])
D.eIi=new C.cC(["burst",0.72,0.2,1])
D.eHH=new C.cC(["burst",0.3,0.25,0])
D.eHf=new C.cC(["pop",0.55,0.85,0])
D.chj=w([D.eHe,D.eIu,D.eHn,D.eIi,D.eHH,D.eHf],x.e)
D.egi=new C.z(1,3)
D.egj=new C.z(1,4)
D.aLO=new C.z(0,5)
D.d4I=w([N.l6,W.uy,D.egi,D.egj,D.aLO],x.u)
D.fZn=new B.FE("Fireworks","Dice launch comets that burst in colour",D.chj,D.d4I)
D.eHj=new C.cC(["beat",0.15,0.2,2])
D.eHR=new C.cC(["chance",0.4,0.2,0])
D.eHb=new C.cC(["ball",0.7,0.12,3])
D.eGZ=new C.cC(["chance",0.4,0.5,1])
D.eIt=new C.cC(["ball",0.3,0.08,1])
D.eGS=new C.cC(["ripple",0.7,0.55,3])
D.cal=w([D.eHj,D.eHR,D.eHb,D.eGZ,D.eIt,D.eGS],x.e)
D.egU=new C.z(2,5)
D.cxr=w([N.l6,W.uy,M.a5T,F.Sp,D.egU],x.u)
D.fZl=new B.FE("Rain","Balls fall at random and splash",D.cal,D.cxr)
D.eHS=new C.cC(["beat",0.12,0.45,2])
D.eIj=new C.cC(["toggle",0.38,0.2,0])
D.eIq=new C.cC(["wash",0.7,0.15,4])
D.eHd=new C.cC(["count3",0.38,0.45,0])
D.eIl=new C.cC(["burst",0.72,0.4,0])
D.eHI=new C.cC(["light",0.55,0.7,1])
D.eH_=new C.cC(["pop",0.8,0.8,4])
D.d7j=w([D.eHS,D.eIj,D.eIq,D.eHd,D.eIl,D.eHI,D.eH_],x.e)
D.ehm=new C.z(3,6)
D.cdt=w([N.l6,W.uy,M.a5T,F.Sp,D.aLO,D.ehm],x.u)
D.fZj=new B.FE("Disco","A beat drives lights, washes and bursts",D.d7j,D.cdt)
D.eIx=new C.cC(["button",0.12,0.2,0])
D.eGU=new C.cC(["delay",0.34,0.2,1])
D.eIw=new C.cC(["light",0.56,0.2,1])
D.eIp=new C.cC(["delay",0.56,0.45,1])
D.eHT=new C.cC(["ball",0.34,0.6,0])
D.eGY=new C.cC(["delay",0.34,0.8,1])
D.eGN=new C.cC(["burst",0.7,0.8,5])
D.bYA=w([D.eIx,D.eGU,D.eIw,D.eIp,D.eHT,D.eGY,D.eGN],x.e)
D.ejq=new C.z(5,6)
D.dck=w([N.l6,W.uy,F.So,F.Sp,D.aLQ,D.ejq],x.u)
D.fZk=new B.FE("Domino","Tap the button and watch it run down the line",D.bYA,D.dck)
D.awC=w([D.fZm,D.fZo,D.fZn,D.fZl,D.fZj,D.fZk],C.ax("O<FE>"))
D.d2L=w([0.05,0.15,0.25],x.n)
D.d2Z=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d3E=w([1.5,3,4.5,9,12],x.n)
D.eDE=new C.bo("dice","Dice",A.mt)
D.eEH=new C.bo("coin","Coin",K.yb)
D.eGo=new C.bo("num","Number",A.yk)
D.d3O=w([D.eDE,D.eEH,D.eGo],x.c)
D.d3R=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fDC=new B.OT("Moon",1.62,0,4291941851)
D.fDD=new B.OT("Mars",3.71,0.01,4294472049)
D.fDE=new B.OT("Earth",9.81,1,4281908728)
D.fDG=new B.OT("Jupiter",24.79,1.4,4294677052)
D.fDF=new B.OT("Sun",274,2,4294688548)
D.yK=w([D.fDC,D.fDD,D.fDE,D.fDG,D.fDF],C.ax("O<OT>"))
D.awJ=w([A.cb,A.aM,A.b1,A.aR,A.bt,A.bW,A.cs,A.hx],x.O)
D.e1g={H:0}
D.dmd=new C.bk(D.e1g,[2],x.I)
D.dnM=new B.tb("Hydrogen","H\u2082",D.dmd,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e1h={H:0,Cl:1}
D.dmq=new C.bk(D.e1h,[1,1],x.I)
D.dnO=new B.tb("Hydrogen chloride","HCl",D.dmq,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e1i={H:0,O:1}
D.dlW=new C.bk(D.e1i,[2,1],x.I)
D.dnP=new B.tb("Water","H\u2082O",D.dlW,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e1v={N:0,H:1}
D.dmN=new C.bk(D.e1v,[1,3],x.I)
D.dnX=new B.tb("Ammonia","NH\u2083",D.dmN,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a51={C:0,H:1}
D.dmH=new C.bk(D.a51,[1,4],x.I)
D.dnQ=new B.tb("Methane","CH\u2084",D.dmH,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e1j={H:0,S:1}
D.dl3=new C.bk(D.e1j,[2,1],x.I)
D.dnW=new B.tb("Hydrogen sulfide","H\u2082S",D.dl3,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e1A={O:0}
D.dmL=new C.bk(D.e1A,[2],x.I)
D.dnY=new B.tb("Oxygen","O\u2082",D.dmL,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e1u={N:0}
D.dme=new C.bk(D.e1u,[2],x.I)
D.dnN=new B.tb("Nitrogen","N\u2082",D.dme,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e14={C:0,O:1}
D.dmT=new C.bk(D.e14,[1,2],x.I)
D.dnU=new B.tb("Carbon dioxide","CO\u2082",D.dmT,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aG7={C:0,H:1,O:2}
D.dkP=new C.bk(D.aG7,[1,2,1],x.I)
D.dnV=new B.tb("Formaldehyde","CH\u2082O",D.dkP,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dmG=new C.bk(D.a51,[2,4],x.I)
D.dnS=new B.tb("Ethene","C\u2082H\u2084",D.dmG,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dmF=new C.bk(D.a51,[2,6],x.I)
D.dnR=new B.tb("Ethane","C\u2082H\u2086",D.dmF,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dkQ=new C.bk(D.aG7,[1,4,1],x.I)
D.dnT=new B.tb("Methanol","CH\u2083OH",D.dkQ,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2y=w([D.dnM,D.dnO,D.dnP,D.dnX,D.dnQ,D.dnW,D.dnY,D.dnN,D.dnU,D.dnV,D.dnS,D.dnR,D.dnT],C.ax("O<tb>"))
D.d4O=w([A.bW,A.aR,A.dP,A.b1],x.O)
D.d5I=w([],x.h)
D.d5M=w([],x.B)
D.a2H=w([],x.F)
D.e8Q=new B.eb("battery","Battery","\ud83d\udd0b",A.b1,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e8W=new B.eb("solar","Solar panel","\u2600\ufe0f",A.bZ,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e9A=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e9c=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e8I=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hx,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e9a=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e9F=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e9m=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e90=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e9C=new B.eb("fuse","Fuse","\ud83e\uddef",A.cb,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e8A=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hx,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e9n=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e9p=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e8Y=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e91=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e9j=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bW,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e8R=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e9e=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e96=new B.eb("radio","Radio","\ud83d\udcfb",A.nQ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e93=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e8H=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e8O=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e8U=new B.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e9H=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bW,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e9w=new B.eb("clock","Digital clock","\u23f0",A.b1,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e99=new B.eb("calculator","Calculator","\ud83e\uddee",A.Ku,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e8N=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e9G=new B.eb("router","WiFi router","\ud83d\udcf6",A.hx,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e9J=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e8D=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e9K=new B.eb("kettle","Kettle","\ud83e\uded6",A.mh,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e8L=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e8X=new B.eb("lights","Party lights","\ud83c\udf84",A.nQ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e97=new B.eb("fridge","Fridge","\ud83e\uddca",A.fT,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e8F=new B.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e9x=new B.eb("blender","Blender","\ud83e\udd64",A.cb,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e94=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e8K=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e98=new B.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e9u=new B.eb("neon","Neon sign","\ud83e\udea7",A.bW,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e8G=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e9o=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.bZ,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e8T=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e9i=new B.eb("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e9z=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e8E=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e9d=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e9l=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nQ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e9E=new B.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e8C=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e9I=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bW,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e9t=new B.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e9f=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.ja,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e9r=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e8M=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e9D=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e8z=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e95=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e8Z=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e9k=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.td,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e8B=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e8P=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e9B=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cz,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e9g=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e9b=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cg,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e9s=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e9_=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b1,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e9h=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e9q=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e9v=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e8y=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e92=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cz,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e8V=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e8J=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e8S=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e9y=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qj=w([D.e8Q,D.e8W,D.e9A,D.e9c,D.e8I,D.e9a,D.e9F,D.e9m,D.e90,D.e9C,D.e8A,D.e9n,D.e9p,D.e8Y,D.e91,D.e9j,D.e8R,D.e9e,D.e96,D.e93,D.e8H,D.e8O,D.e8U,D.e9H,D.e9w,D.e99,D.e8N,D.e9G,D.e9J,D.e8D,D.e9K,D.e8L,D.e8X,D.e97,D.e8F,D.e9x,D.e94,D.e8K,D.e98,D.e9u,D.e8G,D.e9o,D.e8T,D.e9i,D.e9z,D.e8E,D.e9d,D.e9l,D.e9E,D.e8C,D.e9I,D.e9t,D.e9f,D.e9r,D.e8M,D.e9D,D.e8z,D.e95,D.e8Z,D.e9k,D.e8B,D.e8P,D.e9B,D.e9g,D.e9b,D.e9s,D.e9_,D.e9h,D.e9q,D.e9v,D.e8y,D.e92,D.e8V,D.e8J,D.e8S,D.e9y],C.ax("O<eb>"))
D.d68=w([0,0.46,0.82],x.n)
D.d6j=w([5,10,15,25,45,60],x.t)
D.d6D=w([-0.045,0.03,-0.015],x.n)
D.d70=w([0.9,0.97,1],x.n)
D.ax9=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.ub=w([0.05,0.2,0.35],x.n)
D.cOL=w([D.EE,D.EE],x.O)
D.cTU=w([A.EO,A.M],x.O)
D.cSX=w([A.fk,A.hl],x.O)
D.cMU=w([A.f7,A.nP],x.O)
D.c9S=w([A.lG,A.dx],x.O)
D.axa=w([D.cOL,D.cTU,D.cSX,D.cMU,D.c9S],x.Q)
D.fDq=new B.v_("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fDr=new B.v_("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fDi=new B.v_("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fDp=new B.v_("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fDn=new B.v_("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fDj=new B.v_("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fDo=new B.v_("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fDk=new B.v_("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fDm=new B.v_("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fDl=new B.v_("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cb=w([D.fDq,D.fDr,D.fDi,D.fDp,D.fDn,D.fDj,D.fDo,D.fDk,D.fDm,D.fDl],C.ax("O<v_>"))
D.bf_=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d8c=w([D.EE,D.bf_,D.adw,A.ad2],x.O)
D.b0Z=new C.ac(0,A.G,A.hK,A.dE,6)
D.d96=w([D.b0Z],x.V)
D.efE=new C.z(0,"AND")
D.egk=new C.z(1,"Adder")
D.egV=new C.z(2,"Blinker")
D.ehn=new C.z(3,"Memory")
D.d9R=w([D.efE,D.egk,D.egV,D.ehn],x.E)
D.axm=w([-104,0,104],x.n)
D.axn=w([-14,3],x.n)
D.dak=w([-16,16],x.n)
D.axp=w([-22,22],x.n)
D.daz=w([-8,0,8],x.n)
D.axt=w([-92,0,92],x.n)
D.daV=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eL1=new B.uM("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eL8=new B.uM("Medium tank","Balanced.",0.35,1)
D.eL7=new B.uM("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qw=w([D.eL1,D.eL8,D.eL7],x._)
D.nn=w([0.04,0.2,0.36],x.n)
D.axD=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eG4=new C.bo(D.aV9,"Fold",K.alT)
D.eFe=new C.bo(D.a9u,"Flip",A.FV)
D.bD0=new C.a0(62889,"MaterialIcons",!1)
D.eGm=new C.bo(D.aVa,"Rise",D.bD0)
D.am6=new C.a0(983870,"MaterialIcons",!1)
D.eDc=new C.bo(D.a9v,"Assemble",D.am6)
D.eDl=new C.bo(D.aVb,"Spin",D.akp)
D.eDi=new C.bo(D.aVc,"Pop",A.lk)
D.dch=w([D.eG4,D.eFe,D.eGm,D.eDc,D.eDl,D.eDi],C.ax("O<+(K9,m,a0)>"))
D.axI=w([A.bW,A.dP,A.bu,A.aR,A.bt,A.cb],x.O)
D.dcs=w([A.aR,A.cs,A.cs,A.b1],x.O)
D.dcF=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eC7=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.en_=new C.z("Make the output turn TWICE as fast.",2)
D.egu=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eAM=new C.z("Make the output turn 4 times faster.",4)
D.esB=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.evJ=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eud=new C.z("Make the output turn 3 times faster.",3)
D.euZ=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.axN=w([D.eC7,D.en_,D.egu,D.eAM,D.esB,D.evJ,D.eud,D.euZ],C.ax("O<+(m,M)>"))
D.ddD=w([3,4.5,5,6,9],x.n)
D.b1x=new C.ac(0,A.G,A.aW,A.J,16)
D.de4=w([D.b1x],x.V)
D.Qy=w([A.bW,A.bZ,A.b1,A.aR,A.bt,A.cb,A.c,A.cs],x.O)
D.dew=w(["solar","turbine","crank","pot"],x.s)
D.deR=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.deY=w([0,0.35,0.75,1],x.n)
D.eDy=new C.bo("drop","Drop",D.alJ)
D.eDA=new C.bo("weight","Weight",U.ama)
D.eGh=new C.bo("cannon","Newton's cannon",A.al8)
D.dfA=w([D.eDy,D.eDA,D.eGh],x.c)
D.ezq=new C.z("piano","Piano")
D.ez6=new C.z("organ","Organ")
D.etV=new C.z("bell","Bell")
D.ezs=new C.z("pluck","Pluck")
D.eAL=new C.z("synth","Synth")
D.evE=new C.z("flute","Flute")
D.ay4=w([D.ezq,D.ez6,D.etV,D.ezs,D.eAL,D.evE],x.K)
D.dg6=w(["volts","level","ohms","on"],x.s)
D.dhp=w([A.jn,A.BG,A.Bu,A.pY,A1.Gi,A.u2,A.yi,A.q1,A.hO,A.nj,A.ha,A.dW,A.i1,A.i2,A.mu,A.lR,A.vM,A.rh,A.lS,A.FM,A.u1,A.FU,A.Bw,A.alE,A.Ne,A.ye,A.Nm,A.ali,T.am2,A.lk],x.w)
D.dii=w([0.72,1],x.n)
D.dit=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e2N={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dkJ=new C.bk(D.e2N,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aG9={A:0,T:1,C:2,G:3}
D.a3D=new C.bk(D.aG9,["U","A","G","C"],x.l)
D.dkR=new C.bk(D.aG9,["T","A","G","C"],x.l)
D.e1r={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d4S=w([0,2,4,5,7,9,11],x.t)
D.cO1=w([0,2,3,5,7,8,10],x.t)
D.da2=w([0,3,5,6,7,10],x.t)
D.Ch=new C.bk(D.e1r,[D.aw0,D.d4S,D.cO1,D.da2,D.aoD],C.ax("bk<m,ai<H>>"))
D.e2A={A:0,T:1,U:2,C:3,G:4}
D.dl6=new C.bk(D.e2A,[A.cb,A.co,A.co,A.aM,A.b1],C.ax("bk<m,w>"))
D.e0P={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fT3=new B.xY("Switch",F.NM,A.bZ,0,"Tap it to turn it ON or OFF.")
D.fT_=new B.xY("Blinker",A.oQ,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fT0=new B.xY("AND",D.am6,A.co,2,"ON only when BOTH inputs are ON.")
D.bEv=new C.a0(63671,"MaterialIcons",!1)
D.fSZ=new B.xY("OR",D.bEv,A.bt,2,"ON when EITHER input is ON.")
D.fT1=new B.xY("XOR",G.a_E,A.bW,2,"ON when the inputs are DIFFERENT.")
D.fSW=new B.xY("NAND",A.tR,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bDB=new C.a0(63176,"MaterialIcons",!1)
D.fSX=new B.xY("NOR",D.bDB,A.hx,2,"ON only when BOTH inputs are OFF.")
D.fSY=new B.xY("NOT",A_.BH,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fT2=new B.xY("Light",A.rc,A.dP,1,"Glows when its input is ON.")
D.fT4=new B.xY("Buzzer",A.o3,A.cb,1,"Beeps while its input is ON.")
D.yX=new C.bk(D.e0P,[D.fT3,D.fT_,D.fT0,D.fSZ,D.fT1,D.fSW,D.fSX,D.fSY,D.fT2,D.fT4],C.ax("bk<m,xY>"))
D.e2x={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eDZ=new C.bo(3,20,1.9)
D.eDt=new C.bo(33,90,1.6)
D.eGG=new C.bo(52,15,3.2)
D.eGE=new C.bo(45,-100,1.8)
D.eF8=new C.bo(-15,-60,1.9)
D.eEC=new C.bo(-25,140,2.4)
D.eEt=new C.bo(-82,0,2.2)
D.aDw=new C.bk(D.e2x,[D.eDZ,D.eDt,D.eGG,D.eGE,D.eF8,D.eEC,D.eEt],C.ax("bk<m,+(M,M,M)>"))
D.cNr=w([A.A],x.M)
D.cNK=w([A.ax,A.aC],x.M)
D.cWp=w([A.ax,A.A,A.aC],x.M)
D.cXR=w([A.ax,A.la,A.A,A.lA,A.aC],x.M)
D.d9N=w([A.ax,A.la,A.a3,A.a8,A.lA,A.aC],x.M)
D.dm3=new C.dS([1,D.cNr,2,D.cNK,3,D.cWp,4,A.ay9,5,D.cXR,6,D.d9N],C.ax("dS<H,ai<da>>"))
D.e1s={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eFk=new C.bo(1,A.bO,"Hydrogen")
D.eEd=new C.bo(4,A.bl,"Carbon")
D.eDd=new C.bo(3,A.d3,"Nitrogen")
D.eFE=new C.bo(2,A.ay,"Oxygen")
D.eF1=new C.bo(2,A.bZ,"Sulfur")
D.eGe=new C.bo(1,A.bk,"Chlorine")
D.w0=new C.bk(D.e1s,[D.eFk,D.eEd,D.eDd,D.eFE,D.eF1,D.eGe],C.ax("bk<m,+(H,w,m)>"))
D.e2T={Calm:0,Box:1,Sleep:2}
D.cuV=w([4,2,6,0],x.n)
D.cv1=w([4,4,4,4],x.n)
D.cv2=w([4,7,8,0],x.n)
D.QX=new C.bk(D.e2T,[D.cuV,D.cv1,D.cv2],C.ax("bk<m,ai<M>>"))
D.e0Y={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wG=new B.a_W(0,"source")
D.cXm=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fY_=new B.q0("Clock",A.oQ,D.wG,A.bu,D.cXm)
D.fXW=new B.q0("Button",A.ym,D.wG,A.aM,A.T)
D.ddP=w(["random","quick","slow"],x.s)
D.fY6=new B.q0("Dice",A.mt,D.wG,A.bW,D.ddP)
D.bE9=new C.a0(63484,"MaterialIcons",!1)
D.DF=new B.a_W(1,"logic")
D.did=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fY2=new B.q0("Delay",D.bE9,D.DF,A.co,D.did)
D.d6q=w(["fast","mid","slow"],x.s)
D.fY7=new B.q0("Echo",A.aly,D.DF,A.bt,D.d6q)
D.fY4=new B.q0("Every 2nd",A_.BH,D.DF,A.hx,A.T)
D.bDP=new C.a0(63309,"MaterialIcons",!1)
D.fY1=new B.q0("Every 3rd",D.bDP,D.DF,A.aR,A.T)
D.bFO=new C.a0(983902,"MaterialIcons",!1)
D.bY_=w(["50%","25%","75%"],x.s)
D.fY9=new B.q0("Chance",D.bFO,D.DF,A.cs,D.bY_)
D.qx=new B.a_W(2,"out")
D.fXY=new B.q0("Light",A.rc,D.qx,A.dP,A.T)
D.fXZ=new B.q0("Burst",A.lk,D.qx,A.bW,A.T)
D.fXX=new B.q0("Ripple",A.yq,D.qx,A.b9,A.T)
D.fY5=new B.q0("Ball",A.alL,D.qx,A.cs,A.T)
D.fY3=new B.q0("Comet",A.nj,D.qx,A.bt,A.T)
D.bFy=new C.a0(983669,"MaterialIcons",!1)
D.fY8=new B.q0("Shake",D.bFy,D.qx,A.cb,A.T)
D.fYa=new B.q0("Pop",A.FN,D.qx,A.b1,A.T)
D.fY0=new B.q0("Wash",A.Nq,D.qx,A.pv,A.T)
D.mD=new C.bk(D.e0Y,[D.fY_,D.fXW,D.fY6,D.fY2,D.fY7,D.fY4,D.fY1,D.fY9,D.fXY,D.fXZ,D.fXX,D.fY5,D.fY3,D.fY8,D.fYa,D.fY0],C.ax("bk<m,q0>"))
D.e2B={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Ci=new C.bk(D.e2B,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e1a={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zo=new B.J5(0,"tv")
D.eMz=new B.m5("Samsung Neo QLED 8K",D.zo,F.Er,A.aR)
D.eMq=new B.m5("LG OLED evo G5",D.zo,A.ea,A.h3)
D.eMh=new B.m5("Sony Bravia 9",D.zo,A.qJ,A.br)
D.eMl=new B.m5("Apple TV 4K",D.zo,A.e2,A.bO)
D.eMi=new B.m5("Bang and Olufsen Beovision",D.zo,F.E9,F.td)
D.In=new B.J5(1,"iphone")
D.aMt=new B.m5("iPhone 18 Pro Max",D.In,D.afL,A.cf)
D.wd=new B.J5(3,"fold")
D.bkX=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eMv=new B.m5("iPhone Fold",D.wd,D.bkX,A.b6)
D.uB=new B.J5(2,"android")
D.eMw=new B.m5("Samsung Galaxy S26 Ultra",D.uB,F.abW,A.d3)
D.bex=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eMo=new B.m5("Samsung Galaxy Z Fold7",D.wd,D.bex,A.cz)
D.eMk=new B.m5("Google Pixel 10 Pro XL",D.uB,A.dA,A.bk)
D.eMs=new B.m5("Xiaomi 16 Ultra",D.uB,A.lK,A.cg)
D.eMn=new B.m5("Huawei Mate 80 Pro Max",D.uB,A.eQ,A.ay)
D.eMj=new B.m5("OPPO Find X9 Ultra",D.uB,A.dY,A.b1)
D.eMB=new B.m5("Honor Magic V5",D.wd,A.di,A.co)
D.eMp=new B.m5("vivo X300 Pro",D.uB,A.hl,A.cs)
D.Sx=new B.J5(4,"tablet")
D.eMu=new B.m5("iPad Pro M5",D.Sx,A.dA,A.aR)
D.a69=new B.J5(5,"reader")
D.eMC=new B.m5("Kindle Scribe",D.a69,A.ei,A.br)
D.zp=new B.J5(6,"computer")
D.eMt=new B.m5("MacBook Pro M5 Max",D.zp,A.dA,A.cf)
D.eMy=new B.m5("iMac 32 inch",D.zp,A.bO,A.cz)
D.eMr=new B.m5("Pro Display XDR 8K",D.zp,A.lK,A.b9)
D.eMm=new B.m5("Sony Laser Projector",D.zp,A.cC,A.dP)
D.eMx=new B.m5("Luxury car touchscreen",D.zp,L.mi,A.ay)
D.eMA=new B.m5("Apple Vision Pro",D.zp,A.jf,A.bt)
D.lZ=new C.bk(D.e1a,[D.eMz,D.eMq,D.eMh,D.eMl,D.eMi,D.aMt,D.eMv,D.eMw,D.eMo,D.eMk,D.eMs,D.eMn,D.eMj,D.eMB,D.eMp,D.eMu,D.eMC,D.eMt,D.eMy,D.eMr,D.eMm,D.eMx,D.eMA],C.ax("bk<m,m5>"))
D.e1m={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bnv=new B.fK(20,4,13,!1)
D.bnW=new B.fK(14,5,13.5,!1)
D.bnN=new B.fK(9,2.4,10,!1)
D.bo0=new B.fK(7,5,12.5,!1)
D.bnQ=new B.fK(8,3.5,12,!1)
D.bnr=new B.fK(15,2,6,!1)
D.bnZ=new B.fK(45,6,13.5,!0)
D.bnH=new B.fK(10,8,13.5,!1)
D.bnz=new B.fK(25,3,12,!0)
D.bnF=new B.fK(35,4,12,!0)
D.bnG=new B.fK(40,4.5,9.5,!0)
D.bnI=new B.fK(55,3,9,!0)
D.bns=new B.fK(18,3,9,!1)
D.bnY=new B.fK(22,4,13.5,!1)
D.bnR=new B.fK(16,5,13.5,!1)
D.bnD=new B.fK(30,4,9,!0)
D.bo9=new B.fK(5,3.5,13,!1)
D.bnL=new B.fK(25,3,13.5,!0)
D.bnU=new B.fK(14,2.5,9,!1)
D.bnK=new B.fK(6,6,13,!1)
D.bo1=new B.fK(30,1.2,5,!0)
D.bo8=new B.fK(35,3,4.5,!0)
D.bo4=new B.fK(20,4.5,7.5,!0)
D.bnJ=new B.fK(55,5.5,13.5,!0)
D.bnq=new B.fK(45,5.5,13.5,!0)
D.bnV=new B.fK(40,5.5,13.5,!0)
D.bo7=new B.fK(60,6,13.5,!0)
D.agc=new B.fK(28,4,7,!0)
D.F0=new B.fK(25,4,7,!0)
D.bnC=new B.fK(30,4,7,!0)
D.bnx=new B.fK(22,4,7,!0)
D.bny=new B.fK(24,4,7,!0)
D.bnM=new B.fK(60,3,5.5,!0)
D.bnt=new B.fK(18,9,14,!0)
D.bnA=new B.fK(25,9,14,!0)
D.agd=new B.fK(30,8,14,!0)
D.bnw=new B.fK(20,8,14,!0)
D.bnE=new B.fK(30,9,14,!0)
D.bo2=new B.fK(22,5,9.5,!0)
D.bnu=new B.fK(30,2.5,10.5,!0)
D.bnS=new B.fK(50,5.5,13.5,!0)
D.bo6=new B.fK(12,2,9.5,!1)
D.bnP=new B.fK(16,1.3,9.5,!0)
D.bo_=new B.fK(40,2.5,7,!0)
D.bo5=new B.fK(60,1.2,4.8,!0)
D.bo3=new B.fK(18,5,13.5,!0)
D.bnX=new B.fK(8,2,9.5,!1)
D.bnO=new B.fK(12,2.5,8,!1)
D.bnB=new B.fK(20,3.5,13.5,!0)
D.bnT=new B.fK(3.5,3,13,!1)
D.yY=new C.bk(D.e1m,[D.bnv,D.bnW,D.bnN,D.bo0,D.bnQ,D.bnr,D.bnZ,D.bnH,D.bnz,D.bnF,D.bnG,D.bnI,D.bns,D.bnY,D.bnR,D.bnD,D.bo9,D.bnL,D.bnU,D.bnK,D.bo1,D.bo8,D.bo4,D.bnJ,D.bnq,D.bnV,D.bo7,D.agc,D.F0,D.bnC,D.F0,D.bnx,D.F0,D.bny,D.agc,D.F0,D.bnM,D.bnt,D.bnA,D.agd,D.bnw,D.bnE,D.bo2,D.bnu,D.bnS,D.bo6,D.bnP,D.bo_,D.bo5,D.F0,D.agd,D.bo3,D.bnX,D.bnO,D.bnB,D.bnT],C.ax("bk<m,fK>"))
D.e0X={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eCI=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ejn=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eji=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.euY=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.evV=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.euU=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ehs=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.esU=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eCQ=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ewf=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.emo=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eha=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.els=new C.z("Movement","They pull your legs together and help you balance.")
D.enj=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ejw=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eAm=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eBp=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.esC=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eB9=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.erk=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ewo=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ehh=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.enG=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.ew4=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.erE=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eBh=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eup=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ehq=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ewX=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eA_=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eyg=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.efN=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eu7=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eub=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eom=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ejH=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.en8=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.et3=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ez_=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eCN=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ewl=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.efA=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ete=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.egd=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ezf=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eAi=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.etE=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ezu=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.ehj=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eAO=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ekS=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eyF=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eo2=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.erz=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ewF=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eAZ=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eAQ=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eAV=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.es2=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.exs=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eyd=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eAD=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.etD=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.epY=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eoM=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eu2=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ewy=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eqt=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.er8=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eld=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eAe=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.em_=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ega=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eol=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eg5=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ek3=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eoq=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.em8=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ewT=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.enm=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eCv=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eoV=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.erX=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eux=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.emg=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.em1=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dnc=new C.bk(D.e0X,[D.eCI,D.ejn,D.eji,D.euY,D.evV,D.euU,D.ehs,D.esU,D.eCQ,D.ewf,D.emo,D.eha,D.els,D.enj,D.ejw,D.eAm,D.eBp,D.esC,D.eB9,D.erk,D.ewo,D.ehh,D.enG,D.ew4,D.erE,D.eBh,D.eup,D.ehq,D.ewX,D.eA_,D.eyg,D.efN,D.eu7,D.eub,D.eom,D.ejH,D.en8,D.et3,D.ez_,D.eCN,D.ewl,D.efA,D.ete,D.egd,D.ezf,D.eAi,D.etE,D.ezu,D.ehj,D.eAO,D.ekS,D.eyF,D.eo2,D.erz,D.ewF,D.eAZ,D.eAQ,D.eAV,D.es2,D.exs,D.eyd,D.eAD,D.etD,D.epY,D.eoM,D.eu2,D.ewy,D.eqt,D.er8,D.eld,D.eAe,D.em_,D.ega,D.eol,D.eg5,D.ek3,D.eoq,D.em8,D.ewT,D.enm,D.eCv,D.eoV,D.erX,D.eux,D.emg,D.em1],C.ax("bk<m,+(m,m)>"))
D.dne=new C.hw(A.G,11)
D.dnj=new C.hw(A.G,30)
D.dqq=new B.TT(null)
D.due=new B.TX(null)
D.duf=new B.TY(null)
D.dus=new B.TZ(null)
D.dwt=new B.U0(null)
D.dwu=new B.U1(null)
D.dwv=new B.U2(null)
D.dxi=new B.Uo(null)
D.dxk=new B.UD(null)
D.dxl=new B.UE(null)
D.dxn=new B.UF(null)
D.dxV=new B.UM(null)
D.dzQ=new B.UQ(null)
D.dzR=new B.US(null)
D.dzS=new B.UT(null)
D.dzU=new B.UU(null)
D.dBu=new B.Va(null)
D.dBw=new B.Vc(null)
D.dBB=new B.Vm(null)
D.dBM=new B.Vn(null)
D.dCh=new B.Vo(null)
D.dDM=new B.Vq(null)
D.dF9=new B.Vs(null)
D.dFa=new B.Vt(null)
D.dGv=new B.Vw(null)
D.dWo=new B.Vx(null)
D.dWq=new B.Vy(null)
D.dWr=new B.VB(null)
D.dWs=new B.VC(null)
D.dYl=new B.VK(null)
D.dYm=new B.VL(null)
D.dYu=new B.VS(null)
D.dYD=new B.VW(null)
D.dYE=new B.VX(null)
D.dYF=new B.a7T(null)
D.dZf=new B.VZ(null)
D.e_I=new B.W2(null)
D.e33=new C.u(0,118)
D.aGg=new C.u(0,13)
D.e34=new C.u(0,17)
D.e37=new C.u(0,330)
D.e3a=new C.u(0,-13)
D.aGm=new C.u(0,-14)
D.e3b=new C.u(0,-17)
D.e3c=new C.u(0,-18)
D.e3d=new C.u(0,-19)
D.e3e=new C.u(0,-20)
D.e3h=new C.u(0,-26)
D.e3i=new C.u(0,-28)
D.e3j=new C.u(0,-31)
D.e3k=new C.u(0,-32)
D.w7=new C.u(0,-6)
D.e3l=new C.u(0,-6771)
D.e3m=new C.u(0,-9)
D.e3o=new C.u(-9.5,-11)
D.e3p=new C.u(10,20)
D.e3r=new C.u(10,-13)
D.e3s=new C.u(10,-22)
D.e3t=new C.u(10,-4)
D.a55=new C.u(11,8)
D.e3v=new C.u(12,2)
D.e3w=new C.u(14,0)
D.e3x=new C.u(14,12)
D.aGq=new C.u(14,8)
D.e3y=new C.u(14,-17)
D.e3z=new C.u(14,-18)
D.aGr=new C.u(14,-3)
D.aGs=new C.u(14,-4)
D.e3A=new C.u(15,0)
D.e3B=new C.u(15,-12)
D.e3C=new C.u(16,-8)
D.e3D=new C.u(18,14)
D.e3E=new C.u(18,-12)
D.aGw=new C.u(20,0)
D.e3K=new C.u(20,15)
D.e3L=new C.u(20,-17)
D.e3M=new C.u(20,-3)
D.e3N=new C.u(21,8)
D.e3P=new C.u(22,10)
D.aGx=new C.u(22,8)
D.e3Q=new C.u(24,0)
D.e3R=new C.u(24,2)
D.e3T=new C.u(24,-18)
D.e3U=new C.u(24,-22)
D.e3V=new C.u(25,8)
D.e3W=new C.u(26,0)
D.e41=new C.u(28,-30)
D.e46=new C.u(30,18)
D.e47=new C.u(30,2)
D.e48=new C.u(31,19)
D.e49=new C.u(32,0)
D.aGA=new C.u(34,0)
D.aGB=new C.u(34,-32)
D.HY=new C.u(36,0)
D.e4e=new C.u(3,-1)
D.e4h=new C.u(40,3)
D.e4l=new C.u(4,11)
D.e4o=new C.u(4,-2)
D.e4s=new C.u(5,0)
D.e4t=new C.u(5,17)
D.e4u=new C.u(5,6)
D.e4y=new C.u(6,11)
D.e4E=new C.u(8,7)
D.e4F=new C.u(8,-10)
D.e4G=new C.u(8,-14)
D.e4H=new C.u(8,-3)
D.aGF=new C.u(9,0)
D.e4K=new C.u(-20.5,-17.6)
D.e4L=new C.u(-9,18.5)
D.e4O=new C.u(-2.6,-1)
D.e4P=new C.u(1.9,-0.8)
D.e4S=new C.u(-0.22,0.09)
D.e4X=new C.u(2.6,1)
D.e53=new C.u(-9,12.2)
D.e5l=new C.u(-9,20.5)
D.e5D=new C.u(-10,0)
D.e5E=new C.u(-10,12)
D.aGM=new C.u(-10,4)
D.e5F=new C.u(-11,-2)
D.e5G=new C.u(-13,-5)
D.e5H=new C.u(-14,0)
D.e5I=new C.u(-14,13)
D.e5J=new C.u(-14,2)
D.e5K=new C.u(-14,-12)
D.e5L=new C.u(-14,-19)
D.e5M=new C.u(-14,-23)
D.e5N=new C.u(-15,6)
D.e5O=new C.u(-16,14)
D.e5P=new C.u(-16,-8)
D.e5Q=new C.u(-17,10)
D.e5R=new C.u(-17,-18)
D.e5S=new C.u(-17,-8)
D.e5U=new C.u(-18,20)
D.e5V=new C.u(-18,-9)
D.aGO=new C.u(-20,0)
D.e5X=new C.u(-20,16)
D.e5Y=new C.u(-20,-9)
D.RV=new C.u(-22,8)
D.e5Z=new C.u(-22,-10)
D.e6_=new C.u(-22,-11)
D.e60=new C.u(-24,10)
D.e61=new C.u(-24,11)
D.e62=new C.u(-24,14)
D.e63=new C.u(-24,-22)
D.e64=new C.u(-25,-11)
D.e65=new C.u(-26,0)
D.e66=new C.u(-26,-18)
D.e67=new C.u(-2,9)
D.e68=new C.u(-2,-10)
D.e69=new C.u(-2,-20)
D.e6a=new C.u(-2,-9)
D.e6b=new C.u(-32,0)
D.aGQ=new C.u(-34,0)
D.e6g=new C.u(-40,3)
D.e6i=new C.u(-4,11)
D.e6j=new C.u(-4,-17)
D.e6k=new C.u(-4,-2)
D.e6m=new C.u(-5,0)
D.e6n=new C.u(-5,20)
D.e6o=new C.u(-5,6)
D.e6p=new C.u(-6,26)
D.e6q=new C.u(-6,6)
D.e6r=new C.u(-6,-42)
D.e6s=new C.u(-7,-19)
D.e6t=new C.u(-7,-24)
D.e6u=new C.u(-8,-9)
D.a59=new C.u(-9,0)
D.e6v=new C.u(-9,1)
D.e6w=new C.u(-9,-23)
D.fgx=new C.x("Thinking\u2026",null,A.h1,null,null,null,null,null,null,null,null,null)
D.e7s=new C.D(A.jC,D.fgx,null)
D.fwu=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e7C=new C.D(A8.vp,D.fwu,null)
D.bvf=new C.Q(4,0,4,14)
D.fbY=new C.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhr=new C.x("Games and little helpers for a spare minute.",null,D.fbY,null,null,null,null,null,null,null,null,null)
D.e7M=new C.D(D.bvf,D.fhr,null)
D.fti=new C.x("Tap to throw in a star",null,A.kG,null,null,null,null,null,null,null,null,null)
D.b4H=new C.cp(A.A,null,null,D.fti,null)
D.edG=new C.cL(0,null,0,14,null,null,D.b4H,null)
D.d6Z=w([A.iP,A.bl],x.O)
D.aLH=new C.bT(A.A,0.5,A.x,null,0,D.d6Z,null,null)
D.eeo=new C.bT(A.A,0.5,A.x,null,0,D.axX,null,null)
D.cZA=w([A.c,A.bJ],x.O)
D.eeq=new C.bT(A.A,0.5,A.x,null,0,D.cZA,null,null)
D.eer=new C.bT(A.A,0.5,A.x,null,0,M.ax1,null,null)
D.deJ=w([A.bO,A.jf],x.O)
D.aLI=new C.bT(A.A,0.5,A.x,null,0,D.deJ,null,null)
D.cEE=w([A.c,A.bO],x.O)
D.eev=new C.bT(A.rX,0.5,A.x,null,0,D.cEE,null,null)
D.bc_=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bhg=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cYD=w([D.bc_,D.afk,D.bhg],x.O)
D.d51=w([0,0.7,1],x.n)
D.eex=new C.bT(A.rX,0.5,A.x,null,0,D.cYD,D.d51,null)
D.cv8=w([A.oD,A.aF,A.K],x.O)
D.dbz=w([0.3,0.7,1],x.n)
D.eez=new C.bT(A.A,0.5,A.x,null,0,D.cv8,D.dbz,null)
D.bl0=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dcX=w([A.fa,D.bl0],x.O)
D.eeB=new C.bT(A.rX,0.5,A.x,null,0,D.dcX,null,null)
D.cxW=w([A.dA,A.cC],x.O)
D.eeC=new C.bT(A.A,0.5,A.x,null,0,D.cxW,null,null)
D.cU3=w([A.oD,A.aF,A.fk],x.O)
D.eeD=new C.bT(A.A,0.5,A.x,null,0,D.cU3,null,null)
D.cMq=w([A.h5,A.aM,A.d5],x.O)
D.eeF=new C.bT(A.rX,0.5,A.x,null,0,D.cMq,null,null)
D.d7w=w([A.jf,L.mi],x.O)
D.eeG=new C.bT(A.rX,0.5,A.x,null,0,D.d7w,null,null)
D.bcd=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bae=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cWh=w([D.bcd,D.bae],x.O)
D.eeI=new C.bT(A.A,0.5,A.x,null,0,D.cWh,null,null)
D.bgG=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.beF=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.beJ=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dh_=w([D.bgG,D.beF,D.beJ],x.O)
D.cSR=w([0,0.65,1],x.n)
D.eeJ=new C.bT(M.a9F,0.5,A.x,null,0,D.dh_,D.cSR,null)
D.eeK=new C.bT(A.A,0.5,A.x,null,0,D.auq,null,null)
D.ddX=w([A.lH,A.aF,A.fk],x.O)
D.eeP=new C.bT(A.A,0.5,A.x,null,0,D.ddX,null,null)
D.dfv=w([A.jf,A.hH],x.O)
D.eeS=new C.bT(A.A,0.5,A.x,null,0,D.dfv,null,null)
D.aLM=new C.aT(9,9)
D.ef0=new C.aT(1.4,1.4)
D.efH=new C.z(0,-4)
D.ekP=new C.z(0.22,4)
D.erV=new C.z(0.8,-4)
D.eAR=new C.z(0.58,4)
D.eDC=new C.bo("Moon",1.62,4291941851)
D.eEb=new C.bo("Neptune",11.15,4284524026)
D.eEP=new C.bo("Sun",274,4294688548)
D.eF4=new C.bo("Mercury",3.7,4288455599)
D.eFa=new C.bo("Earth",9.81,4281908728)
D.eFc=new C.bo("Mars",3.71,4294472049)
D.eFv=new C.bo("Venus",8.87,4294759245)
D.eFB=new C.bo("Saturn",10.44,4294829706)
D.eFY=new C.bo("Jupiter",24.79,4294677052)
D.eJz=new C.a9(10,-8,18,-2)
D.eJA=new C.a9(14,-14,20,14)
D.eJB=new C.a9(20,-2,30,2)
D.eJD=new C.a9(4,-13,30,-3)
D.eJF=new C.a9(8,-7,12,7)
D.eJL=new C.a9(-12,12,12,19)
D.eJM=new C.a9(-12,14,12,22)
D.eJN=new C.a9(-12,-22,12,8)
D.eJO=new C.a9(-12,-25,12,19)
D.eJP=new C.a9(-12,-26,12,-6)
D.eJQ=new C.a9(-12,-4,12,14)
D.eJR=new C.a9(-12,-6,10,6)
D.eJS=new C.a9(-14,20,14,24)
D.eJT=new C.a9(-14,6,14,10)
D.eJU=new C.a9(-14,-17,14,15)
D.eJV=new C.a9(-14,-26,14,18)
D.eJW=new C.a9(-14,-4,14,20)
D.eJX=new C.a9(-15,-29,15,25)
D.eJY=new C.a9(-16,-16,16,16)
D.eJZ=new C.a9(-16,-22,-9,18)
D.eK_=new C.a9(-16,-24,16,-10)
D.eK0=new C.a9(-16,-2,16,20)
D.eK2=new C.a9(-18,20,18,24)
D.eK3=new C.a9(-18,-18,18,20)
D.eK4=new C.a9(-20,12,20,22)
D.eK5=new C.a9(-20,-28,20,26)
D.eK6=new C.a9(-22,14,22,18)
D.aMb=new C.a9(-22,-26,22,24)
D.eK7=new C.a9(-22,-3,22,3)
D.eK8=new C.a9(-22,-4,22,12)
D.eK9=new C.a9(-24,-12,10,22)
D.eKa=new C.a9(-24,-14,22,8)
D.eKb=new C.a9(-24,-6,24,20)
D.aMc=new C.a9(-24,-9,24,9)
D.eKc=new C.a9(-25,14,25,19)
D.eKd=new C.a9(-26,-14,14,8)
D.eKe=new C.a9(-26,-4,26,20)
D.eKf=new C.a9(-26,-6,4,6)
D.aMd=new C.a9(-28,-13,28,13)
D.eKg=new C.a9(-28,-16,28,16)
D.eKh=new C.a9(-28,-16,28,8)
D.eKi=new C.a9(-28,-22,28,22)
D.eKj=new C.a9(-30,-12,30,14)
D.eKk=new C.a9(-30,-14,0,14)
D.eKl=new C.a9(-30,-18,30,20)
D.eKm=new C.a9(-30,-28,30,14)
D.eKn=new C.a9(-30,-2,30,18)
D.eKo=new C.a9(-30,-4,30,18)
D.eKp=new C.a9(-32,-17,32,17)
D.eKq=new C.a9(-32,-28,32,18)
D.eKr=new C.a9(-33,-21,33,17)
D.eKs=new C.a9(-34,14,34,26)
D.a60=new C.a9(-34,-18,34,18)
D.eKt=new C.a9(-34,-4,34,7)
D.eKu=new C.a9(-36,-24,36,20)
D.eKv=new C.a9(-38,-22,38,22)
D.eKw=new C.a9(-3,12,3,22)
D.eKx=new C.a9(-3,5,3,15)
D.eKz=new C.a9(-46,-34,46,28)
D.eKA=new C.a9(-48,-3,48,3)
D.eKD=new C.a9(-6,18,24,24)
D.eKE=new C.a9(-6,5,6,12)
D.eKF=new C.a9(-6,-22,6,-15)
D.eKG=new C.a9(-9,-16,9,22)
D.eKH=new C.a9(-4.5,-24,4.5,-21.2)
D.eKJ=new C.a9(14,-9,17.5,9)
D.e2u={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aN4=new C.eI(D.e2u,5,x.R)
D.e26={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eNE=new C.eI(D.e26,10,x.R)
D.ePD=new C.ar(24,44)
D.ePI=new C.ar(300,300)
D.eQ1=new C.ar(54,38)
D.eQ8=new C.ar(66,38)
D.b6_=new C.fj(2,null,null,null,null,A.bt,null,null,null,null)
D.eR5=new C.a7(16,16,D.b6_,null)
D.aO3=new C.hM(3,12,12,0.82,null)
D.fya=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOe=new C.b1(D.fya,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d7z=w([A.cb,A.bZ,A.b1,A.aR,A.pv,A.cb],x.O)
D.eWY=new C.fT(A.A,0,6.283185307179586,A.x,D.d7z,null,null)
D.f4W=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q2,null,null,null)
D.eYc=new C.eq("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f4W)
D.aQG=new C.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new C.eq("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQG)
D.f2k=new C.G(!0,A4.Kz,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new C.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f2k)
D.f79=new C.G(!0,A.kh,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYm=new C.eq("AI",null,null,A.cO,null,null,null,null,null,null,D.f79)
D.f25=new C.G(!0,A.c2,null,null,null,null,15,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYn=new C.eq("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f25)
D.aP2=new C.G(!0,A.c2,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYC=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYE=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZa=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new C.G(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZY=new C.G(!0,A.c2,null,null,null,null,11,A.N,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_2=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new C.G(!0,A.aS,null,null,null,null,12,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f08=new C.G(!0,A.c2,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0i=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOa=new C.cR(A.hK,A.dE,6)
D.d1j=w([D.eOa],x.q)
D.f0C=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d1j,null,null,null)
D.f0F=new C.G(!0,A.eu,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0I=new C.G(!0,A.c,null,null,null,null,17,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new C.G(!0,A.c2,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f18=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new C.G(!0,A.c2,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new C.G(!0,A.aA,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1t=new C.G(!0,A.c2,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2n=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2S=new C.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3m=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new C.cR(A.aW,A.J,3)
D.ayc=w([D.eOd],x.q)
D.f3p=new C.G(!0,A.c,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayc,null,null,null)
D.f3u=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4a=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q2,null,null,null)
D.f4D=new C.G(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4L=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new C.G(!0,A.tn,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5L=new C.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new C.G(!0,A.c2,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new C.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f60=new C.G(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6r=new C.G(!0,A.c2,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6F=new C.G(!0,A.n3,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6G=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ5=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7t=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO1=new C.cR(A.w,A.J,5)
D.cQv=w([D.eO1],x.q)
D.f7u=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cQv,null,null,null)
D.f7z=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayc,null,null,null)
D.f7O=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7T=new C.G(!0,A.fy,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new C.G(!0,A.c2,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new C.G(!0,A.b1,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9b=new C.G(!0,A.c2,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new C.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Y=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQr=new C.G(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faq=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faA=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faH=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb0=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQD=new C.G(!0,A.ad,null,null,null,null,12,A.N,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb3=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbO=new C.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7Z=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcc=new C.G(!0,A.tn,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new C.G(!0,A.b1,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0N=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcV=new C.x("\u26a0\ufe0f ",null,D.f0N,null,null,null,null,null,null,null,null,null)
D.fd6=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wm,null,null,null,null,null,null,null,null,null)
D.fdx=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mM,null,null,null,null,null,null,null,null,null)
D.feB=new C.x("Pick one, then change it and see what happens.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.feF=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f1R=new C.G(!0,A.ad,null,null,null,null,null,A.N,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.f1R,null,null,null,null,null,null,null,null,null)
D.ffW=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7g,null,null,null,null,null,null,null,null,null)
D.fh3=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fhJ=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fig=new C.x("Make it yours",null,A.kb,null,null,null,null,null,null,null,null,null)
D.fix=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7n,null,null,null,null,null,null,null,null,null)
D.f65=new C.G(!0,A.je,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkQ=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f65,null,null,null,null,null,null,null,null,null)
D.fl4=new C.x("YOUR DECODING",null,Q.mM,null,null,null,null,null,null,null,null,null)
D.flg=new C.x("5G",null,U.aPt,null,null,null,null,null,null,null,null,null)
D.f8p=new C.G(!0,A.c2,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmo=new C.x("WHAT HAPPENS",null,D.f8p,null,null,null,null,null,null,null,null,null)
D.fo4=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.foL=new C.x("Change the words and pictures on the three slabs.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.foW=new C.x("All the parts and wires will be removed.",null,A.hE,null,null,null,null,null,null,null,null,null)
D.fpf=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fpP=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fqG=new C.x("INTERCEPTED",null,Q.mM,null,null,null,null,null,null,null,null,null)
D.fr_=new C.x("\ud83c\udfaf Challenges",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fru=new C.x("Remove this part",null,V.aP5,null,null,null,null,null,null,null,null,null)
D.frM=new C.x("Clear the board?",null,A.dn,null,null,null,null,null,null,null,null,null)
D.f7U=new C.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs0=new C.x("How the Lab works",null,D.f7U,null,null,null,null,null,null,null,null,null)
D.f_u=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsk=new C.x("Electronics Lab",null,D.f_u,null,null,null,null,A.a2,null,1,null,null)
D.fsn=new C.x("?",null,M.aQA,null,null,null,null,null,null,null,null,null)
D.f6_=new C.G(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsr=new C.x("Planet Earth",null,D.f6_,null,null,null,null,null,null,null,null,null)
D.ftE=new C.x("Ready-made circuits",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fuf=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fuy=new C.x("UNIVERSE EXPLORER",null,I.a7m,null,null,null,null,null,null,null,null,null)
D.fx3=new C.x("SECRET VERSION",null,Q.mM,null,null,null,null,null,null,null,null,null)
D.faK=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.faK,null,null,null,null,null,null,null,null,null)
D.fyM=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7g,null,null,null,null,null,null,null,null,null)
D.fze=new C.x("NGMY",null,A.uI,null,null,null,null,null,null,null,null,null)
D.fzr=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.TE,null,null,null,null,null,null,null,null,null)
D.fzO=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kF,null,null,null,null,null,null,null,null,null)
D.fAK=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wm,null,null,null,null,null,null,null,null,null)
D.fAM=new C.x("TOOLBOX",null,I.a7m,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hdk=null
$.hdj=null
$.hjn=0
$.hLd=C.T(x.N,x.k)
$.hLO=C.T(x.N,x.k)
$.hcF=null
$.hLz=C.T(x.N,x.k)
$.hMC=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ih5","bDq",()=>{var v="led"
return C.a([B.axB("Both together","Make the light glow only when BOTH switches are ON.",2,new B.ffB(),v),B.axB("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.ffC(),v),B.axB("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.ffD(),v),B.axB("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.ffK(),v),B.axB("Not both","Make the light go OFF only when both switches are ON.",2,new B.ffL(),v),B.axB("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.ffM(),"buzzer")],C.ax("O<ba6>"))})
w($,"ihx","bDr",()=>C.a([B.ox("UNIVERSE","Earth, space and gravity",A.a0g,A.aR,new B.fg1()),B.ox("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.a_G,A.aR,new B.fg2()),B.ox("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_x,A.b1,new B.fg3()),B.ox("TOOLBOX","Converter, clock, games",T.akB,A.cs,new B.fge()),B.ox("MOLECULE MAKER","Join atoms into real molecules",A.Nd,A.hx,new B.fgg()),B.ox("DNA LAB","Copy DNA, build a protein",D.a_x,A.bW,new B.fgh()),B.ox("ECOSYSTEM LAB","Grass, rabbits and foxes",A.ye,A.b1,new B.fgi()),B.ox("BALANCE LAB","Levers, weight and torque",D.bFG,A.aM,new B.fgj()),B.ox("GEAR LAB","Teeth, speed and force",A.BE,A.cs,new B.fgk()),B.ox("LASER MAZE","Bend the beam with mirrors",I.al_,A.ay,new B.fgl()),B.ox("LIGHT MIXER","Match colours with light",D.bDm,A.b9,new B.fgm()),B.ox("CIPHER LAB","Make and crack secret codes",A.yp,A.aR,new B.fg4()),B.ox("REACTION LAB","Wire parts together",A.yt,A.bu,new B.fg5()),B.ox("SPARK PAINTER","Paint with light",A.a_z,A.bW,new B.fg6()),B.ox("ROCKET LANDER","Land softly on the pad",A.nj,A.aR,new B.fg7()),B.ox("ORBIT STUDIO","Slingshot planets",A.mw,A.cs,new B.fg8()),B.ox("SWARM STUDIO","A living school of fish",A.Nd,A.b1,new B.fg9()),B.ox("CHAIN BURST","One tap, a whole chain",A.ha,A.bW,new B.fga()),B.ox("TITLE ANIMATOR","Make a moving title",A.yl,A.bZ,new B.fgb()),B.ox("CIRCUIT LAB","Connect logic, learn it",A.a0_,A.co,new B.fgc()),B.ox("MARBLE MUSIC","Marbles ring the notes",D.bD1,A.b9,new B.fgd()),B.ox("ORBIT SEQUENCER","Planets play the tune",D.bFt,A.bt,new B.fgf())],C.ax("O<brW>")))
w($,"ij1","qc",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qj[v]
t.n(0,u.a,u)}return t})
w($,"ih6","ahs",()=>C.a([B.Fo("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.ffN()),B.Fo("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.ffO()),B.Fo("Spin the motor","A battery and a motor in a loop will make it spin.",new B.ffP()),B.Fo("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.ffQ()),B.Fo("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.ffR()),B.Fo("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.ffE()),B.Fo("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.ffF()),B.Fo("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.ffG()),B.Fo("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.ffH()),B.Fo("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.ffI()),B.Fo("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.ffJ())],C.ax("O<ba7>")))
w($,"ihz","hrK",()=>C.a([B.a0r("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cg,new B.fgu()),B.a0r("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cb,A.bB,new B.fgv()),B.a0r("Breathe","Calm down in a minute","\ud83e\udee7",A.hx,A.cz,new B.fgw()),B.a0r("Draw Pad","Sketch and share","\ud83c\udfa8",A.bC,A.b6,new B.fgx()),B.a0r("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.cf,new B.fgy()),B.a0r("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bZ,A.bk,new B.fgz()),B.a0r("Tip & Split","Share the bill","\ud83e\uddfe",A.b1,A.aZ,new B.fgA()),B.a0r("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new B.fgB())],C.ax("O<btg>")))
w($,"ihy","hrJ",()=>C.a([B.aeL("EARTH GLOBE","Turn it, tap a country",A.mw,A.aR,new B.fgn()),B.aeL("SOLAR SYSTEM","The Sun and its worlds",D.bD5,A.aM,new B.fgo()),B.aeL("GRAVITY LAB","Drop, weigh, orbit",D.alJ,A.cs,new B.fgp()),B.aeL("BLACK HOLE","Throw in a star",A.FC,A.bt,new B.fgq()),B.aeL("GALAXY","Build, tilt, collide",A.y2,A.h4,new B.fgr()),B.aeL("SIZE COMPARE","Earth next to a star",D.bDo,A.bW,new B.fgs()),B.aeL("SEASONS & MOON","Why it is summer",A.vy,A.bu,new B.fgt())],C.ax("O<btb>")))})()};
(a=>{a["kPIoOWeY0wUBuh3gSVFqFSDALSA="]=a.current})($__dart_deferred_initializers__);