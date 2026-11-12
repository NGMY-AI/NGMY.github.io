((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Z,A5,A6,A_,R,A7,A8,A9,A0,Aa,A1,N,Ab,Ac,Ad,Ae,T,Af,P,Ag,U,V,W,E,K,G,I,A2,O,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bBJ(d){return C.i5Y(d)},
i5Y(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rf(B.nl(""),d,A.hY,null,null).dh(0,A.a_E),$async$bBJ)
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
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bBJ,v)},
iib(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RX[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fe(D.RX,new C.fJs())
if(w==null)w=A.d.gH(D.RX)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qC().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.al_(w.a,w.b,m,w,s,!1)},
ibG(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sl,new C.fyc(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iqG(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p5(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Y.aQ(0,A.a.aC(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aU(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qC().al(0,p)||J.eG(s,o)||J.ad(t)>=8)continue
J.c6(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dwZ[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.E(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.E(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c6(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.E(A.j.M(B.dC(J.t(g,1))),0,1)
a0=A.o.E(A.j.M(B.dC(J.t(g,3))),0,1)
if(J.eG(s,f)&&J.eG(s,e)&&!J.z(f,e))J.c6(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aU(a0==null?A.cp:a0)
while(a0.C()){a2=a0.gR(a0)
J.c6(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mW(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.al_(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
igF(d){var w,v,u=C.hkl()
d.B(u)
for(w=0;w<60;++w)u.vI(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fFR(u))&&!A.d.cD(v,new C.fFS())},
igE(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qC().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dvg,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i4j(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iia(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qC().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sl[u]
if(A.d.aV(w,new C.fJp(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fJq(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cJ(w,0,new C.fJr())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qC().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
al_:function al_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJs:function fJs(){},
fyc:function fyc(){},
fFR:function fFR(d){this.a=d},
fFS:function fFS(){},
fJp:function fJp(d){this.a=d},
fJq:function fJq(d){this.a=d},
fJr:function fJr(){},
WC:function WC(d,e){this.c=d
this.a=e},
bma:function bma(d,e,f,g,h){var _=this
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
eil:function eil(d){this.a=d},
eim:function eim(d,e,f){this.a=d
this.b=e
this.c=f},
ein:function ein(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d,e){this.a=d
this.b=e},
eiu:function eiu(d){this.a=d},
eis:function eis(d,e){this.a=d
this.b=e},
eit:function eit(d,e,f){this.a=d
this.b=e
this.c=f},
eiv:function eiv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eiq:function eiq(d){this.a=d},
eir:function eir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiw:function eiw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eip:function eip(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eix:function eix(d,e){this.a=d
this.b=e},
eio:function eio(d,e){this.a=d
this.b=e},
eiC:function eiC(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiD:function eiD(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiH:function eiH(d,e){this.a=d
this.b=e},
bC3(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fqz,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hy7(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.xl,A.K,w,w),A.aB,B.bU(A.fO,g,A.bs,w,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.p(D.bgT,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GT:function GT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vl:function vl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WZ:function WZ(d){this.a=d},
aFX:function aFX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h5$=h
_.m5$=i
_.f9$=j
_.h6$=k
_.by$=l
_.a9$=m
_.c=_.a=null},
exE:function exE(){},
exY:function exY(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exZ:function exZ(){},
ey_:function ey_(){},
exG:function exG(d,e,f){this.a=d
this.b=e
this.c=f},
exF:function exF(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exw:function exw(d){this.a=d},
exx:function exx(d){this.a=d},
exy:function exy(d){this.a=d},
exz:function exz(d){this.a=d},
exA:function exA(d){this.a=d},
exB:function exB(d){this.a=d},
exC:function exC(d){this.a=d},
exD:function exD(d){this.a=d},
ext:function ext(d){this.a=d},
exu:function exu(d){this.a=d},
exs:function exs(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
exM:function exM(d){this.a=d},
exN:function exN(d){this.a=d},
exJ:function exJ(d){this.a=d},
exO:function exO(d){this.a=d},
exI:function exI(d){this.a=d},
exP:function exP(d){this.a=d},
exQ:function exQ(d){this.a=d},
exH:function exH(d){this.a=d},
exS:function exS(d,e){this.a=d
this.b=e},
exL:function exL(d,e){this.a=d
this.b=e},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exW:function exW(d){this.a=d},
exK:function exK(d){this.a=d},
bj7:function bj7(d,e){this.b=d
this.a=e},
aNS:function aNS(){},
bzJ:function bzJ(){},
htj(){var w=$.hth
return w==null?$.hth=$.rh().cVS("assets/data/three.min.js"):w},
hti(){var w=$.htg
return w==null?$.htg=C.cOw():w},
cOw(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOw=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rh().jo(0,"assets/data/body3d.bin"),$async$cOw)
case 3:d=a1
$.htk=J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)
t=B.a4m(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jI(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.djj[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4g(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b41))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bc3(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOw,v)},
c6a(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6a=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.hti(),C.htj()],x.D),x.K),$async$c6a)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$c6a,v)},
aTX:function aTX(d,e,f){this.a=d
this.b=e
this.c=f},
a4g:function a4g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bc3:function bc3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vv:function Vv(d){this.a=d},
aEq:function aEq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ax=_.at=!1
_.ay=""
_.ch=l
_.CW=2
_.cx=1
_.cy=null
_.db=0.5
_.dx=0.05
_.fr=_.dy=1
_.fx=m
_.fy=n
_.go=!0
_.id=0
_.k1=1
_.k2=o
_.k3=0
_.k4=72
_.ok=!1
_.p1=0
_.p2=!1
_.p3=null
_.p4=0
_.R8=""
_.RG=p
_.rx=q
_.ry=r
_.to=0
_.h5$=s
_.m5$=t
_.f9$=u
_.h6$=v
_.by$=w
_.a9$=a0
_.c=_.a=null},
dOJ:function dOJ(d){this.a=d},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOj:function dOj(d){this.a=d},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
dOm:function dOm(){},
dOK:function dOK(){},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOo:function dOo(d){this.a=d},
dOp:function dOp(){},
dOq:function dOq(d){this.a=d},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOr:function dOr(d){this.a=d},
dOg:function dOg(d,e,f){this.a=d
this.b=e
this.c=f},
dOh:function dOh(d){this.a=d},
dOi:function dOi(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOC:function dOC(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOv:function dOv(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOt:function dOt(d){this.a=d},
aMX:function aMX(){},
aMY:function aMY(){},
c6b:function c6b(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6c:function c6c(d,e){this.a=d
this.b=e},
c6d:function c6d(d){this.a=d},
azR(d,e,f,g,h){return new C.bcP(d,e,f,g,h)},
hav(d,e,f,g,h,i){return $.i1B.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVr(d,e,f,i,g,h))},
yF:function yF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D_:function D_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nI:function nI(d,e,f){this.a=d
this.b=e
this.c=f},
bcP:function bcP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fru:function fru(){},
frv:function frv(){},
frw:function frw(){},
frD:function frD(){},
frE:function frE(){},
frF:function frF(){},
VA:function VA(d){this.a=d},
aEs:function aEs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h5$=m
_.m5$=n
_.f9$=o
_.h6$=p
_.by$=q
_.a9$=r
_.c=_.a=null},
dQo:function dQo(d){this.a=d},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ5:function dQ5(){},
dQp:function dQp(){},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dPW:function dPW(){},
dPX:function dPX(){},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(){},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d){this.a=d},
dPV:function dPV(d,e,f){this.a=d
this.b=e
this.c=f},
dQi:function dQi(d){this.a=d},
dQh:function dQh(d){this.a=d},
dQj:function dQj(d){this.a=d},
dQg:function dQg(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQf:function dQf(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQc:function dQc(d){this.a=d},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQn:function dQn(d,e){this.a=d
this.b=e},
bd7:function bd7(d,e){this.b=d
this.a=e},
cVr:function cVr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aN1:function aN1(){},
bzt:function bzt(){},
hTi(){return new C.Ob(null)},
Ra(d,e,f,g,h){return new C.bv0(d,e,f,g,h)},
btn(d,e,f){return A.j.E((d-e)/(f-e),0,1)},
hb2(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ob:function Ob(d){this.a=d},
Ld:function Ld(d,e){this.a=d
this.b=e},
B7:function B7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEJ:function aEJ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dWo:function dWo(d,e){this.a=d
this.b=e},
dWn:function dWn(d){this.a=d},
bv0:function bv0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frV:function frV(){},
frW:function frW(){},
frX:function frX(){},
frY:function frY(){},
frZ:function frZ(){},
fs_:function fs_(){},
fs0:function fs0(){},
fs1:function fs1(){},
fs2:function fs2(){},
bto:function bto(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7k:function f7k(d){this.a=d},
f7j:function f7j(d,e){this.a=d
this.b=e},
f7h:function f7h(d){this.a=d},
f7l:function f7l(d){this.a=d},
f7i:function f7i(d,e){this.a=d
this.b=e},
afU:function afU(d,e,f){this.c=d
this.d=e
this.a=f},
aeM:function aeM(d,e,f){this.c=d
this.d=e
this.a=f},
R3:function R3(d,e,f,g,h,i,j,k,l,m){var _=this
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
buo:function buo(d,e){this.b=d
this.a=e},
btU:function btU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbM:function bbM(d,e){this.b=d
this.a=e},
aIW:function aIW(d,e){this.c=d
this.a=e},
aIX:function aIX(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b9$=f
_.c=_.a=null},
f70:function f70(d){this.a=d},
f7_:function f7_(d){this.a=d},
f6Z:function f6Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6Y:function f6Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6W:function f6W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6V:function f6V(d,e,f){this.a=d
this.b=e
this.c=f},
f6X:function f6X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6U:function f6U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f78:function f78(d){this.a=d},
f77:function f77(d){this.a=d},
f79:function f79(d,e){this.a=d
this.b=e},
f7a:function f7a(d,e){this.a=d
this.b=e},
f7b:function f7b(d,e){this.a=d
this.b=e},
f76:function f76(d,e,f){this.a=d
this.b=e
this.c=f},
f7c:function f7c(d,e,f){this.a=d
this.b=e
this.c=f},
f75:function f75(d){this.a=d},
f71:function f71(d){this.a=d},
f7d:function f7d(d){this.a=d},
f7e:function f7e(d){this.a=d},
f74:function f74(d,e){this.a=d
this.b=e},
f7f:function f7f(d,e){this.a=d
this.b=e},
f73:function f73(d,e){this.a=d
this.b=e},
f7g:function f7g(d,e){this.a=d
this.b=e},
f72:function f72(d,e){this.a=d
this.b=e},
f6S:function f6S(){},
f6T:function f6T(){},
bt_:function bt_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsq:function bsq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcs:function bcs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bss:function bss(d,e,f){this.b=d
this.c=e
this.a=f},
bwu:function bwu(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOH:function aOH(){},
hzz(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.o(w,0)),u=e.aJ(0,new B.o(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bj6(d,e,f,g,h,i){return $.i29.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dqw(d,e,f,i,g,h))},
a1s:function a1s(d,e){this.a=d
this.b=e},
qr:function qr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r9:function r9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D3:function D3(d,e){this.a=d
this.b=e},
a_q:function a_q(d,e){this.a=d
this.b=e},
afI:function afI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1F:function a1F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
De:function De(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acD:function acD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acU:function acU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeP:function aeP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bj4:function bj4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bx$=_.bL$=0},
dqA:function dqA(d){this.a=d},
dqB:function dqB(d){this.a=d},
dqx:function dqx(d,e){this.a=d
this.b=e},
dqy:function dqy(d){this.a=d},
dqz:function dqz(d){this.a=d},
dqC:function dqC(d){this.a=d},
dqD:function dqD(d){this.a=d},
dqE:function dqE(d){this.a=d},
dqF:function dqF(d){this.a=d},
dqG:function dqG(d){this.a=d},
dqH:function dqH(d){this.a=d},
dqI:function dqI(d){this.a=d},
dqJ:function dqJ(d){this.a=d},
dqK:function dqK(d){this.a=d},
GE:function GE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WY:function WY(d){this.a=d},
aFW:function aFW(d,e,f,g,h,i,j){var _=this
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
_.by$=i
_.a9$=j
_.c=_.a=null},
ewZ:function ewZ(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewQ:function ewQ(){},
ewR:function ewR(){},
ewU:function ewU(){},
ewV:function ewV(d,e,f){this.a=d
this.b=e
this.c=f},
ewW:function ewW(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewS:function ewS(){},
ewT:function ewT(d){this.a=d},
exo:function exo(d){this.a=d},
ewY:function ewY(){},
ewK:function ewK(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex2:function ex2(){},
ex1:function ex1(d,e){this.a=d
this.b=e},
ewN:function ewN(){},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d){this.a=d},
exm:function exm(d){this.a=d},
exl:function exl(d){this.a=d},
exn:function exn(d){this.a=d},
exc:function exc(d,e){this.a=d
this.b=e},
exk:function exk(d){this.a=d},
exi:function exi(d){this.a=d},
exj:function exj(d){this.a=d},
exh:function exh(d){this.a=d},
exg:function exg(d){this.a=d},
exd:function exd(d){this.a=d},
exe:function exe(d){this.a=d},
exf:function exf(d){this.a=d},
ewP:function ewP(){},
ex8:function ex8(d){this.a=d},
ex9:function ex9(d){this.a=d},
ex7:function ex7(d){this.a=d},
exa:function exa(d){this.a=d},
ex6:function ex6(d){this.a=d},
exb:function exb(d){this.a=d},
ex5:function ex5(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex3:function ex3(d,e){this.a=d
this.b=e},
bj5:function bj5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqw:function dqw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNQ:function aNQ(){},
hF0(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcI()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hkl(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5p(w,v,u,A.cN,B.T(x.N,x.y))},
hMZ(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hkm(d),d.d*f.b)},
hkm(d){return 42+(D.ms.al(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tY:function tY(d,e,f,g){var _=this
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
abi:function abi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acp:function acp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5p:function a5p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPw:function bPw(){},
bPH:function bPH(d){this.a=d},
bPC:function bPC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPI:function bPI(d){this.a=d},
bPJ:function bPJ(d){this.a=d},
bPL:function bPL(d){this.a=d},
bPM:function bPM(d){this.a=d},
bPK:function bPK(d){this.a=d},
bPN:function bPN(d,e,f){this.a=d
this.b=e
this.c=f},
bPO:function bPO(d){this.a=d},
bPy:function bPy(d){this.a=d},
bPz:function bPz(d){this.a=d},
bPx:function bPx(d){this.a=d},
bPA:function bPA(d,e,f){this.a=d
this.b=e
this.c=f},
bPB:function bPB(d){this.a=d},
bPv:function bPv(d){this.a=d},
bPP:function bPP(d,e){this.a=d
this.b=e},
bPD:function bPD(d,e){this.a=d
this.b=e},
bPG:function bPG(d){this.a=d},
bPF:function bPF(d){this.a=d},
bPE:function bPE(d){this.a=d},
ajO:function ajO(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJT:function bJT(){},
bJU:function bJU(){},
mW:function mW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctg:function ctg(d){this.a=d},
iqA(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fVg(),c8=new C.fVi(),c9=new C.fVj(),d0=new C.fVh(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.bO,A.bK))
d2.ah(D.ep1,D.elX,c8.$2(A.dO,1.4))
d2.ah(D.elC,D.elA,c8.$2(A.bv,2.4))
d2.ah(D.elD,T.aLo,c8.$2(A.bv,2.4))
if(c6){d1=c7.$1(A.fF.j(0.5))
d1.y=A.H5
d2.N(D.eli,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRv,A.aP,A.cu))
d2.N(A.cM,16,c7.$1(A.bv))
d2.N(A.cM,13,c7.$1(c6?A.aH.j(0.85):A.S))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.I,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.eoU,2.4,c7.$1(c6?A.bg:A.am))
d2.N(D.epM,2.4,c7.$1(A.am))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.e6))
d1=$.Q().r
t=x.v
s=new B.aF(d1,A.ai,c5,c5,B.a([],t))
s.D(new B.aZ(-16,-26))
s.D(new B.aq(16,-26))
s.D(new B.aq(12,14))
s.D(new B.aq(-12,14))
s.D(new B.bv())
d2.af(s,c7.$1(A.fF.j(0.35)))
if(c6){d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(-14,-10))
d1.D(new B.aq(14,-10))
d1.D(new B.aq(12,14))
d1.D(new B.aq(-12,14))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8r,D.aLK,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eU))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.ik,3,c7.$1(c6?A.bg:A.am))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IE[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bv,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.eoI,D.elH,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.I,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
w.D(new B.aZ(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bv())
d2.af(w,d0.$3(D.f6K,A.aV,A.cZ))
d2.ar(D.f5R,c7.$1(A.db))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.I,D.elO,c8.$2(A.bP,2.4))
d2.ah(A.a8o,D.elN,c8.$2(A.ht,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dy.j(1-u)))}return!0
case"torch":if(c6){v=A.j.E(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,-6))
d1.D(new B.aq(52,-26))
d1.D(new B.aq(52,18))
d1.D(new B.aq(16,4))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.bN.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f6Q,A.bq,A.cq))
n=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
n.D(new B.aZ(4,-6))
n.D(new B.aq(18,-12))
n.D(new B.aq(18,12))
n.D(new B.aq(4,6))
n.D(new B.bv())
d2.af(n,c7.$1(A.e6))
d2.N(D.elT,7,c7.$1(c6?A.c:A.db))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.nx))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.br7
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mf
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.ep7,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f6W,A.bP,A.bq))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bN.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.I,7,22),c7.$1(A.cZ))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.nx))
if(c6)d5.$5(d2,"0:"+A.a.b0(A.o.u(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.elU,A.b4,6.5)
d2.N(D.em9,4,c7.$1(A.db))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jv,10,c7.$1(c6?A.bi:A.bv))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.epQ,A.c,16)
d1.restore()
d2.N(A.kB,6,c7.$1(A.d5))
d2.N(A.kB,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cC(B.bX(A.Jv,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bi.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.ep6,D.epJ,c8.$2(A.bv,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f6L,A.bP,A.am))
d2.N(D.aLs,8,c7.$1(A.as))
d2.N(D.aLs,4.5,c7.$1(c6?A.aH:A.cq))
d2.N(D.ep4,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.kq))
d1.restore()
if(c6)d5.$5(d2,"REC",D.epf,A.ay,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f6T,A.iZ,A.fn))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dA))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.ep_,4,c7.$1(A.aU))
d2.N(D.elP,2.4,c7.$1(A.ay))
d2.N(D.em6,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.am(c9.$5(-26,-18,52,28,3),c7.$1(A.dA))
if(c6){d1=$.Q()
t=B.a([],x.v)
k=new B.aF(d1.r,A.ai,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.j.F((o+25)/50-d1,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aZ(o,i)
t.push(q)
h=k.f
if(h!=null)q.ak(h)
k.ab()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.ak(h)
k.ab()}}d2.af(k,c8.$2(A.b4,1.8))
d5.$5(d2,"72",D.elQ,A.hm,11)
d1=d4*9
d5.$5(d2,"\u2665",D.epk,A.hm.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.ep9,3,c7.$1(c6?A.bg:A.bv))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cy.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f6N,c7.$1(F.u1))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pj(0,-1,1)
d2.bZ(B.bs(A.I,8,14),c7.$1(A.cF))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,0))
d1.D(new B.aq(-12,-4))
d1.D(new B.aq(-12,4))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.ca))
d2.N(D.emS,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.Q().r
t=x.v
g=new B.aF(d1,A.ai,c5,c5,B.a([],t))
g.D(new B.aZ(-9,22))
g.D(new B.aq(-5,-16))
g.D(new B.aq(5,-16))
g.D(new B.aq(9,22))
g.D(new B.bv())
d2.af(g,d0.$3(D.f7n,A.c,A.bC))
d2.ar(D.f7j,c7.$1(c6?A.dy:A.bv))
q=new B.aF(d1,A.ai,c5,c5,B.a([],t))
q.D(new B.aZ(-7,-22))
q.D(new B.aq(0,-29))
q.D(new B.aq(7,-22))
q.D(new B.bv())
d2.af(q,c7.$1(A.ej))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(0,-19))
t=f*34
d1.D(new B.aq(t,-26))
d1.D(new B.aq(t,-12))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.45)))
d1=c7.$1(A.dy.j(0.35))
d1.y=A.H5
d2.N(D.elj,14,d1)}return!0
case"discoball":d2.ah(D.ell,Q.aLj,c8.$2(A.db,1.4))
d2.N(A.I,16,d0.$3(D.f6u,A.aP,A.am))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.ds,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.ds,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dkn[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f6r,A.cu,A.am))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f6k,A.aO,A.bK))
d2.ah(H.aLl,D.eln,c8.$2(A.bv,1.6))
d2.N(D.elo,2.2,c7.$1(c6?A.ay:A.bv))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a60[p]
if(c6)d1=d?A.ba:A.eX
else d1=A.cq
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.I,D.a8i,c8.$2(A.bK,4))
d1.restore()
d2.ah(D.eoQ,D.epd,c8.$2(A.bK,4))
d2.ar(D.f7i,c7.$1(c6?A.ba.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aC8[p]+1,d1,10,14,2)
q=B.ar(A.bN,A.cZ,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f6M,A.bP,A.bq))
for(p=0;p<2;++p){o=D.aC8[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fp:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cF.j(0.5))
t.y=N.oq
d2.am(d1,t)}}d2.ah(D.emf,D.emA,c8.$2(A.as,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cq))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Am.pf(1,a1,0.8,1).k_():A.e6
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oq
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.db))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f6A,A.cy,A.FT))
d2.N(D.epl,8,c7.$1(A.rz))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.I,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fF,2.4))}d1.restore()
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,6))
d1.D(new B.aq(26,6))
d1.D(new B.aq(26,-20))
d1.D(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bK,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hs))
d2.N(D.enu,3.2,c7.$1(A.hs.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f6O,A.hT,A.ry))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cq))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.e6))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cF.j(0.4))
d1.y=N.oq
d2.N(D.em8,8,d1)}return!0
case"headphones":d2.cC(B.bs(A.dG,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bv,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Sy[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.br,A.og))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.o(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cC(q,h,1.6,!1,c8.$2(A.eL.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.j.F(d4*14,8)),A.kK,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cq))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cq))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f6p,A.db,A.e6))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dA))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b0(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b0(A.o.u(B.fP(a2)),2,"0"),D.elu,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FA,A.hm,j)
d1.toString
d5.$5(d2,"\u2665",new B.o(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dG,A.c,7)}return!0
case"tablet":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(M.nx))
d2.am(c9.$5(-30,-22,60,44,6),c8.$2(A.bK,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(a3),$.np(),!0)
d1.translate(-27,-19)
L.M1(d2,D.fdI,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.w7))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dJ,A.d6))
d2.am(a4,c8.$2(A.aT,1.2))
d2.N(D.aLS,9,c7.$1(A.as))
d2.N(D.aLS,6,c8.$2(A.cZ,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dA))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.am
d5.$5(d2,d1+"\u2192"+t+"V",D.enE,q,8.2)
d2.N(D.elY,2.4,c7.$1(c6?A.bg:A.aM))
d5.$5(d2,"IN",D.epe,A.ab,6)
d5.$5(d2,"OUT",D.enm,A.ab,6)
return!0
case"regulator":a5=c6?A.j.E(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bK,A.ay,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a8g,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f6l,A.e6,A.i2))
d5.$5(d2,"7805",D.a8r,A.ab,8)
for(p=0;p<3;++p){d1=D.dqQ[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.ea))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.epN,A.bo,9)
return!0
case"diode":d2.ah(D.aLW,D.aLE,c8.$2(A.ea,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.av.j(0.85)))
d2.ar(D.f64,c7.$1(A.bo))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dy.j(0.4))
t.y=A.kU
d2.am(d1,t)}d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,-4))
d1.D(new B.aq(-8,4))
d1.D(new B.aq(-1,0))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.aU))
d5.$5(d2,"one way",D.ep2,A.aD,8)
return!0
case"ldr":d2.ah(D.aLW,D.a8r,c8.$2(A.ea,2.4))
d2.ah(D.aLK,D.aLE,c8.$2(A.ea,2.4))
d2.N(A.I,12,c7.$1(A.cZ))
d2.N(A.I,12,c8.$2(A.rE,1.6))
d1=$.Q()
t=B.a([],x.v)
a6=new B.aF(d1.r,A.ai,c5,c5,t)
a6.D(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bN,1.4))
d1=B.ar(A.bv,A.dy,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.eoR,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.ep
break
case"sonytv":t=A.rt
break
case"appletv":t=A.ea
break
default:t=F.FD
break}a7=d1==="lgtv"||d1==="appletv"
d2.am(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bo(h.save())
h.clipRRect(B.nP(a3),$.np(),!0)
h.translate(t,q)
L.hgj(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.emD,1.6,c7.$1(A.b4))}else{d2.am(a3,c7.$1(D.w7))
h=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
h.D(new B.aZ(t,q))
h.D(new B.aq(t+24,q))
h.D(new B.aq(t,q+22))
h.D(new B.bv())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.db))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fI[p]
t=$.Q()
q=B.a([],d1)
t=new B.aF(t.r,A.ai,c5,c5,q)
q.push(new B.aZ(o*30,20))
t.ab()
h=new B.aq(o*22,20)
q.push(h)
a8=t.f
if(a8!=null)h.ak(a8)
t.ab()
h=new B.aq(o*26,26)
q.push(h)
a8=t.f
if(a8!=null)h.ak(a8)
t.ab()
h=new B.bv()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.db))}d5.$5(d2,"SONY",D.eoh,A.bP,5.5)
break
case"appletv":d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,18))
d1.D(new B.aq(8,18))
d1.D(new B.aq(12,25))
d1.D(new B.aq(-12,25))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z9))
d5.$5(d2,"Apple TV",D.enF,A.bv,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.bpo))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.ds,0.6))}d5.$5(d2,"B&O",D.epI,F.u1,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.ms.h(0,d1)
b0=a9.b===D.Er
b1=b0?44:30
b2=b0?48:54
t=-b1/2
q=-b2/2
h=b0?5:6.5
w=c9.$5(t,q-2,b1,b2,h)
h=w.a
a8=w.b
b3=w.c
b4=w.d
b5=a9.c
b6=B.ar(b5,A.c,0.35)
b6.toString
d2.am(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bo(t.save())
t.clipRRect(B.nP(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M1(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.am(a3,c7.$1(D.w7))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.e6))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.epT,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bq))}d2.N(A.a8e,1.6,c7.$1(A.as))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f6X,A.cu,A.bq))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M1(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.w7))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-38,16))
d1.D(new B.aq(38,16))
d1.D(new B.aq(34,21))
d1.D(new B.aq(-34,21))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z9))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.bq))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f70,A.bO,A.cu))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M1(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.w7))
d2.N(D.aLe,2,c7.$1(A.bK))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,18))
d1.D(new B.aq(6,18))
d1.D(new B.aq(10,26))
d1.D(new B.aq(-10,26))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z9))
return!0
case"monitor":d2.am(c9.$5(-34,-28,68,40,3),c7.$1(A.ep))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M1(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.am(b9,c7.$1(D.w7))
d2.ar(D.f77,c7.$1(A.bq))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.db))
return!0
case"projector":if(c6){d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(14,4))
d1.D(new B.aq(-32,-42))
d1.D(new B.aq(34,-42))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M1(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f6P,A.iC,A.db))
d2.N(D.aLq,7,c7.$1(A.as))
d2.N(D.aLq,4,c7.$1(c6?A.dy:A.cq))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.ds,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.nx))
d2.am(c1,c8.$2(A.bv,1.2))
if(c6){c2=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
c2.D(new B.aZ(-26,4))
c2.D(new B.c5(-10,-14+Math.sin(d4)*3,6,-6))
c2.D(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aLJ,A.c,10)
d5.$5(d2,"km/h",D.ens,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.db,A.e6))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M1(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.br.j(0.2))
d1.y=A.mf
d2.N(A.I,26,d1)}else d2.am(c4,c7.$1(A.S))
d2.ah(D.eps,D.epx,c8.$2(A.bq,4))
d2.ah(D.emF,D.emV,c8.$2(A.bq,4))
return!0}return!1},
fVg:function fVg(){},
fVi:function fVi(){},
fVj:function fVj(){},
fVh:function fVh(){},
hjb(d,e,f,g){return new C.ajM(d,g,f,e)},
Go(d,e,f){return new C.bcQ(d,e,f)},
ajM:function ajM(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajN:function ajN(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h5$=h
_.m5$=i
_.f9$=j
_.h6$=k
_.by$=l
_.a9$=m
_.c=_.a=null},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJy:function bJy(d){this.a=d},
bJw:function bJw(d){this.a=d},
bJz:function bJz(){},
bJA:function bJA(d){this.a=d},
bJB:function bJB(d,e,f){this.a=d
this.b=e
this.c=f},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJs:function bJs(d,e){this.a=d
this.b=e},
bJt:function bJt(d,e,f){this.a=d
this.b=e
this.c=f},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJn:function bJn(){},
bJu:function bJu(d,e,f){this.a=d
this.b=e
this.c=f},
bJr:function bJr(d,e){this.a=d
this.b=e},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJq:function bJq(d){this.a=d},
bJQ:function bJQ(d){this.a=d},
bJR:function bJR(){},
bJ_:function bJ_(){},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e,f){this.a=d
this.b=e
this.c=f},
bJK:function bJK(d){this.a=d},
bJH:function bJH(d,e,f){this.a=d
this.b=e
this.c=f},
bJI:function bJI(d,e){this.a=d
this.b=e},
bJL:function bJL(d){this.a=d},
bJF:function bJF(d,e){this.a=d
this.b=e},
bJG:function bJG(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d){this.a=d},
bJM:function bJM(d){this.a=d},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJN:function bJN(d){this.a=d},
bJC:function bJC(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJ0:function bJ0(d,e){this.a=d
this.b=e},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJl:function bJl(d,e){this.a=d
this.b=e},
bJk:function bJk(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bJ8:function bJ8(d,e,f){this.a=d
this.b=e
this.c=f},
bJ4:function bJ4(d,e){this.a=d
this.b=e},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJc:function bJc(d,e){this.a=d
this.b=e},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJe:function bJe(d,e,f){this.a=d
this.b=e
this.c=f},
bJ3:function bJ3(d,e){this.a=d
this.b=e},
bJf:function bJf(d,e,f){this.a=d
this.b=e
this.c=f},
bJ2:function bJ2(d,e){this.a=d
this.b=e},
bJg:function bJg(d,e,f){this.a=d
this.b=e
this.c=f},
bJ1:function bJ1(d,e){this.a=d
this.b=e},
bJh:function bJh(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bcQ:function bcQ(d,e,f){this.a=d
this.b=e
this.c=f},
frG:function frG(){},
frH:function frH(){},
frI:function frI(){},
frt:function frt(){},
frJ:function frJ(){},
frs:function frs(){},
frK:function frK(){},
frx:function frx(){},
frr:function frr(){},
fry:function fry(){},
frq:function frq(){},
frz:function frz(){},
frp:function frp(){},
frA:function frA(){},
frn:function frn(){},
fro:function fro(){},
frB:function frB(){},
frl:function frl(){},
frm:function frm(){},
frC:function frC(){},
frk:function frk(){},
Wb:function Wb(d){this.a=d},
aEV:function aEV(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e09:function e09(d,e){this.a=d
this.b=e},
e0i:function e0i(d){this.a=d},
e0j:function e0j(){},
e0k:function e0k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0l:function e0l(){},
e08:function e08(d){this.a=d},
e07:function e07(d,e,f){this.a=d
this.b=e
this.c=f},
e06:function e06(d,e){this.a=d
this.b=e},
e04:function e04(d){this.a=d},
e05:function e05(){},
e0h:function e0h(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0e:function e0e(d,e){this.a=d
this.b=e},
e0c:function e0c(d){this.a=d},
e0d:function e0d(){},
e0f:function e0f(d,e,f){this.a=d
this.b=e
this.c=f},
e0a:function e0a(d,e){this.a=d
this.b=e},
e0b:function e0b(){},
e0n:function e0n(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0m:function e0m(){},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0q:function e0q(d){this.a=d},
e0r:function e0r(d){this.a=d},
ayY:function ayY(d,e){this.c=d
this.a=e},
baZ:function baZ(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
cKQ:function cKQ(d){this.a=d},
baY:function baY(d,e){this.b=d
this.a=e},
cKP:function cKP(d){this.a=d},
azh:function azh(){},
azi:function azi(){},
aLo:function aLo(){},
bzw:function bzw(){},
iqC(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vl,23)
$.Q()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vl,25,b8)
b8=B.K()
b8.sav(D.eyA.aK(0,v))
b9.N(A.vl,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.bo.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.E(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bw
b9.ah(A.vl,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bo.gp(0)
b9.N(A.vl,3,r)
c2.$5(b9,w?"V":"A",D.epA,A.bo,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.eoX,A.as,9.5)
return!0
case"fan":b8=B.bl(D.f6h,A.hP)
$.Q()
s=B.K()
s.r=A.bv.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.am.gp(0)
b9.ar(D.f78,s)
s=B.K()
s.r=A.S.j(0.6).gp(0)
b9.N(H.vm,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLi,18,10)
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=A.hs.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.bp.gp(0)
b9.N(H.vm,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cu.gp(0)
b9.N(H.vm,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jX.gp(0)
b9.N(H.vm,14,b8)
return!0
case"speaker":n=B.bl(D.aRv,A.r_)
$.Q()
b8=B.K()
b8.sav(D.asO.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.eyW.aK(0,B.bX(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.K()
b8.r=A.db.gp(0)
b9.N(A.cA,5,b8)
b8=B.K()
b8.r=A.bq.gp(0)
b9.N(H.a8f,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.eme,6+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cC(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bl(D.f7_,A.r_)
$.Q()
b8=B.K()
b8.sav(D.c7t.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bl(D.aRx,A.ix)
s=B.K()
s.r=A.i2.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FI(k)<500?":":" "
i=A.a.b0(A.o.u(B.dg(k)),2,"0")
h=A.a.b0(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aRx,b8)
c2.$5(b9,i+j+h,D.epi,A.b4,21)}b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.epg,2.4,b8)
b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.emj,2.4,b8)
return!0
case"calculator":l=B.bl(D.f6F,A.hQ)
$.Q()
b8=B.K()
b8.sav(D.c7d.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bl(D.f6y,A.hz)
s=B.K()
s.r=(b7?A.Zl:D.brI).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eoW,A.Y4,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bl(new B.a1(r,b8,r+6,s),A.Ur)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=(f===3?A.ca:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bl(D.f6t,A.hQ)
$.Q()
b8=B.K()
b8.r=M.nx.gp(0)
b9.am(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.ak4.gp(0)
b9.am(l,b8)
e=B.bl(D.f6j,A.hP)
if(b7){b8=B.K()
b8.sav(D.c8L.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nP(e),$.np(),!0)
b8.translate(-12,-25)
L.M1(b9,D.fdk,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bl(D.f6g,A.hz)
s=B.K()
s.r=A.aU.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.enY,A.c,6)}else{b8=B.K()
b8.r=D.w7.gp(0)
b9.am(e,b8)}b8=B.bl(D.f7o,D.ez3)
s=B.K()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bl(D.f6Z,A.mv)
$.Q()
b8=B.K()
b8.sav(D.c7K.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.Sy[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.cq.gp(0)
s.c=4
s.d=A.bw
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.T,A.P)
b8.r=(a2?A.bg:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vm,8+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=1.8
r.r=A.hq.j(0.9-u*0.2).gp(0)
b9.cC(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bl(D.f6E,A.hP)
s=$.Q()
r=B.K()
r.r=A.e6.gp(0)
b9.am(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wo
b9.N(A.vl,34,b8)}a4=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a4.D(new B.aZ(-16,12))
a4.D(new B.aq(-16,-2))
a4.D(new B.c5(0,-30,16,-2))
a4.D(new B.aq(16,12))
a4.D(new B.bv())
b8=B.K()
b8.r=B.ar(A.ej,D.biD,a3).gp(0)
b9.af(a4,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bo(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.I,H.a8f,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
b8.translate(0,a5)
s=$.Q().r
r=x.v
l=new B.aF(s,A.ai,b6,b6,B.a([],r))
l.D(new B.aZ(-28,8))
l.D(new B.aq(-28,-2))
l.D(new B.aq(-16,-4))
l.D(new B.aq(-10,-16))
l.D(new B.aq(10,-16))
l.D(new B.aq(18,-4))
l.D(new B.aq(28,-2))
l.D(new B.aq(28,8))
l.D(new B.bv())
q=B.K()
q.sav(D.c5Q.aK(0,D.f6S))
b9.af(l,q)
q=new B.aF(s,A.ai,b6,b6,B.a([],r))
q.D(new B.aZ(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bv())
p=B.K()
p.r=A.fF.gp(0)
b9.af(q,p)
r=new B.aF(s,A.ai,b6,b6,B.a([],r))
r.D(new B.aZ(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bv())
s=B.K()
s.r=A.fF.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aC9[a0]
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.as.gp(0)
b9.N(new B.o(a1,10),7.5,s)
J.bo(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.I,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.Q().r
s=x.v
l=new B.aF(b8,A.ai,b6,b6,B.a([],s))
l.D(new B.aZ(-18,20))
l.D(new B.aq(-14,-12))
l.D(new B.c5(0,-20,14,-12))
l.D(new B.aq(18,20))
l.D(new B.bv())
r=B.K()
r.sav(D.c6T.aK(0,D.f6D))
b9.af(l,r)
r=new B.aF(b8,A.ai,b6,b6,B.a([],s))
r.D(new B.aZ(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bv())
q=B.K()
q.r=A.ea.gp(0)
b9.af(r,q)
s=new B.aF(b8,A.ai,b6,b6,B.a([],s))
s.D(new B.aZ(-14,-8))
s.D(new B.c5(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cF,A.ue,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e6
b8.r=s.gp(0)
b9.ar(D.f6C,b8)
if(b7){b8=B.K()
b8.r=A.cF.j(0.3).gp(0)
b8.y=A.mf
b9.N(A.aLg,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.elh,3,b8)
return!0
case"lamp":if(b7){u=A.j.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.Q().r,A.ai,b6,b6,B.a([],x.v))
b8.D(new B.aZ(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bv())
s=B.K()
s.r=A.dy.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dy.j(0.5*u).gp(0)
s.y=U.On
b9.N(D.epm,24,s)}b8=B.bl(D.f7h,A.hP)
s=$.Q()
r=B.K()
r.r=A.e6.gp(0)
b9.am(b8,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bw
b9.ah(D.elx,D.aLt,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bw
b9.ah(D.aLt,D.epn,r)
a7=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a7.D(new B.aZ(-14,-16))
a7.D(new B.aq(6,-26))
a7.D(new B.aq(10,-12))
a7.D(new B.aq(-10,-6))
a7.D(new B.bv())
s=B.K()
s.r=(b7?A.aV:A.kr).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bq).gp(0)
b9.N(D.epq,4,b8)
return!0
case"lights":b8=$.Q().r
s=x.v
a8=new B.aF(b8,A.ai,b6,b6,B.a([],s))
a8.D(new B.aZ(-34,-6))
a8.D(new B.c5(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hp.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.T,A.P)
b1.r=D.a52[u].j(0.6).gp(0)
b1.y=A.H5
b9.N(new B.o(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aF(b8,A.ai,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.ab()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.ak(b4)
b2.ab()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.ak(b5)
b2.ab()
q=new B.c5(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bv()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
if(b0)p=D.a52[u]
else{p=B.ar(D.a52[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iqA(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hem(d){var w=D.ms.h(0,d)
return(w==null?null:w.b)===D.Av},
irP(d,e,f){return B.a6(d,!1).cd(B.ve(null,!1,!0,!0,new C.h_a(e,f),A.eR,null,A.pi,new C.h_b(),x.H))},
Kc:function Kc(d,e){this.a=d
this.b=e},
mt:function mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_a:function h_a(d,e){this.a=d
this.b=e},
h_b:function h_b(){},
VV:function VV(d,e,f){this.c=d
this.d=e
this.a=f},
blA:function blA(d,e){var _=this
_.d=$
_.e=null
_.by$=d
_.a9$=e
_.c=_.a=null},
dXj:function dXj(d){this.a=d},
dXi:function dXi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXg:function dXg(){},
dXh:function dXh(d){this.a=d},
dXf:function dXf(d){this.a=d},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXd:function dXd(d,e){this.a=d
this.b=e},
dXc:function dXc(d){this.a=d},
dXb:function dXb(d){this.a=d},
dX7:function dX7(d){this.a=d},
dX6:function dX6(d){this.a=d},
dXa:function dXa(d,e,f){this.a=d
this.b=e
this.c=f},
dX9:function dX9(d){this.a=d},
dX8:function dX8(d){this.a=d},
bxy:function bxy(d,e,f){this.b=d
this.c=e
this.a=f},
afB:function afB(d,e,f){this.b=d
this.c=e
this.a=f},
aNa:function aNa(){},
a1Z(d,e,f,g,h,i){return new C.bwk(d,e,f,g,h,i)},
bwk:function bwk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsa:function fsa(){},
fsb:function fsb(){},
fsc:function fsc(){},
fsd:function fsd(){},
fse:function fse(){},
fsf:function fsf(){},
fsg:function fsg(){},
fsh:function fsh(){},
a9g:function a9g(d){this.a=d},
cm8:function cm8(d){this.a=d},
cm9:function cm9(){},
cm7:function cm7(d,e){this.a=d
this.b=e},
cm6:function cm6(d){this.a=d},
Xv:function Xv(d){this.a=d},
aGo:function aGo(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h5$=f
_.m5$=g
_.f9$=h
_.h6$=i
_.by$=j
_.a9$=k
_.c=_.a=null},
eTI:function eTI(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTF:function eTF(d,e){this.a=d
this.b=e},
eTH:function eTH(d){this.a=d},
bxK:function bxK(d,e,f){this.b=d
this.c=e
this.a=f},
Wj:function Wj(d){this.a=d},
blL:function blL(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h5$=d
_.m5$=e
_.f9$=f
_.h6$=g
_.by$=h
_.a9$=i
_.c=_.a=null},
e38:function e38(){},
e39:function e39(){},
e33:function e33(d,e){this.a=d
this.b=e},
e35:function e35(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e34:function e34(d){this.a=d},
e37:function e37(d){this.a=d},
bsr:function bsr(d,e,f){this.b=d
this.c=e
this.a=f},
Vw:function Vw(d){this.a=d},
blm:function blm(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h5$=d
_.m5$=e
_.f9$=f
_.h6$=g
_.by$=h
_.a9$=i
_.c=_.a=null},
dOQ:function dOQ(){},
dOR:function dOR(){},
dOL:function dOL(){},
dOO:function dOO(d,e){this.a=d
this.b=e},
dON:function dON(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dOM:function dOM(d){this.a=d},
aJO:function aJO(d,e,f){this.a=d
this.b=e
this.c=f},
Wa:function Wa(d){this.a=d},
blC:function blC(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_F:function e_F(d){this.a=d},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_G:function e_G(d){this.a=d},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_J:function e_J(d){this.a=d},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_K:function e_K(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_L:function e_L(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_M:function e_M(d){this.a=d},
e_N:function e_N(d){this.a=d},
e_w:function e_w(d){this.a=d},
bnE:function bnE(d,e,f){this.b=d
this.c=e
this.a=f},
WT:function WT(d){this.a=d},
aFI:function aFI(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqz:function eqz(d,e,f){this.a=d
this.b=e
this.c=f},
eqx:function eqx(d,e,f){this.a=d
this.b=e
this.c=f},
eqA:function eqA(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqE:function eqE(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqC:function eqC(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqG:function eqG(d){this.a=d},
X2:function X2(d){this.a=d},
aG2:function aG2(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eBk:function eBk(d){this.a=d},
eBl:function eBl(d){this.a=d},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBj:function eBj(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBm:function eBm(d){this.a=d},
eBn:function eBn(d){this.a=d},
eBo:function eBo(d){this.a=d},
eBp:function eBp(d,e){this.a=d
this.b=e},
Xm:function Xm(d){this.a=d},
bmS:function bmS(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
ePb:function ePb(){},
ePk:function ePk(){},
ePg:function ePg(d){this.a=d},
ePf:function ePf(){},
ePh:function ePh(d,e){this.a=d
this.b=e},
ePe:function ePe(d,e){this.a=d
this.b=e},
ePi:function ePi(d){this.a=d},
ePd:function ePd(d,e){this.a=d
this.b=e},
ePj:function ePj(d){this.a=d},
ePc:function ePc(d){this.a=d},
WS:function WS(d){this.a=d},
bmm:function bmm(d,e,f,g,h,i,j,k){var _=this
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
_.h5$=f
_.m5$=g
_.f9$=h
_.h6$=i
_.by$=j
_.a9$=k
_.c=_.a=null},
epd:function epd(){},
epe:function epe(){},
ep6:function ep6(d){this.a=d},
ep5:function ep5(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep8:function ep8(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
ep1:function ep1(d,e){this.a=d
this.b=e},
epb:function epb(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
epc:function epc(d){this.a=d},
ep_:function ep_(d,e){this.a=d
this.b=e},
bfe:function bfe(d,e,f){this.c=d
this.d=e
this.a=f},
aMZ:function aMZ(){},
bzs:function bzs(){},
aNh:function aNh(){},
bzy:function bzy(){},
aNK:function aNK(){},
bzH:function bzH(){},
aOa:function aOa(){},
bzQ:function bzQ(){},
JJ(d,e,f,g){var w,v,u,t,s,r,q,p=$.atj
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mr(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bP(p,p.gI(0),v.k("bP<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mr(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.cm4(d,s,f,g),u)}},
cjD(d){return C.hWk(d)},
hWk(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cjD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cjD)
case 7:r=f
q=B.aT(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.Y.aQ(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a3(p,o,n):B.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.T(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cjD,v)},
b2V(d,e){return C.hWl(d,e)},
hWl(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2V=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2V)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.Y.az(e,null)),$async$b2V)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$b2V,v)},
cm4:function cm4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
igT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oo(A.j.ad(p.c,4)),"y",B.oo(A.j.ad(p.d,4)),"v",p.e,"l",B.oo(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oo(A.j.ad(p.as,3)),"ch",p.at,"vc",B.oo(A.j.ad(p.z,3)),"s",B.oo(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.fi(l)
return A.Y.az(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ir0(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aU(f==null?A.cp:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aT(J.t(t,"k"))
s=e==null?"":e
if(!$.qC().al(0,s)){J.c6(v,null)
continue}d=s
a0=B.aI(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aI(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tY(a2,d,a0,a1)
a3.as0(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aI(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aI(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aI(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k2(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k2(J.t(t,"b"))
r.x=d===!0
d=B.aT(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aI(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aI(J.t(t,"ch"))
r.at=A.j.M(d==null?0:d)
d=B.aI(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aI(J.t(t,"s"))
r.ch=A.j.E(d==null?1:d,1,5.2)
J.c6(v,r)}i=g.a(J.t(w,"wires"))
i=J.aU(i==null?A.cp:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aI(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aI(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.alX(m,A.j.M(B.dC(J.t(p,1))),l,A.j.M(B.dC(J.t(p,3))))}i=B.aI(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aU(h==null?A.cp:h)
while(h.C()){j=h.gR(h)
J.c6(k,A.j.M(B.dC(j)))}return new B.bqB(i,k)}catch(a4){return a5}},
fJ4(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fJ4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fJ4)
case 7:r=o.aT(n.t(e.a,"ngmy_electronics_lab_v1"))
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
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fJ4,v)},
bG9(d){return C.isC(d)},
isC(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bG9=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bG9)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bG9)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$bG9,v)}},D,H,Al,X,Am,Y,A3,An
J=c[1]
B=c[0]
A=c[2]
A4=c[118]
Z=c[159]
A5=c[157]
A6=c[150]
A_=c[148]
R=c[142]
A7=c[135]
A8=c[152]
A9=c[161]
A0=c[106]
Aa=c[137]
A1=c[117]
N=c[144]
Ab=c[160]
Ac=c[151]
Ad=c[155]
Ae=c[75]
T=c[84]
Af=c[87]
P=c[129]
Ag=c[133]
U=c[140]
V=c[143]
W=c[154]
E=c[29]
K=c[3]
G=c[38]
I=c[108]
A2=c[102]
O=c[153]
Ah=c[101]
Ai=c[156]
S=c[130]
Aj=c[158]
Q=c[146]
Ak=c[26]
L=c[28]
F=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[139]
H=c[141]
Al=c[67]
X=c[147]
Am=c[57]
Y=c[110]
A3=c[149]
An=c[145]
C.al_.prototype={}
C.WC.prototype={
S(){return new C.bma(B.T(x.N,x.i),new B.au(A.aw,$.aw()),B.a([],x.X),B.a([],x.eZ),B.mX(0,null,null))}}
C.bma.prototype={
gWZ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a4()},
PK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.ce)
t.m(new C.eil(t))
t.a.toString
p=t.gWZ()
w=3
return B.b(C.bBJ(C.i4j(q,C.igE(p),o,t.ay)),$async$PK)
case 3:s=e
r=s==null?null:J.j7(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.iia(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eim(t,o,r))
$.aW.x1$.push(new C.ein(t))
case 1:return B.h(u,v)}})
return B.i($async$PK,v)},
Z3(d){return this.c3_(d)},
aYm(){return this.Z3(null)},
c3_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
t.f.sb1(0,o)
t.m(new C.eiy(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBJ(C.ibG(o)),$async$Z3)
case 3:r=n.a=m.iqG(f)
p.b=""
if(r!=null&&!C.igF(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iib(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.al_(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eiz(p,t))
t.c8A(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z3,v)},
c8A(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gWZ()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eiu(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eis(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eiv(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.eiw(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eix(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.br.j(0.1),g=B.m(16),f=B.L(A.br.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.feS,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AH,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fFG
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VH,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fpX,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.ur,B.d(u,l,l,l,l,l,l,D.fsK,l,l,l),l))
w.push(A.cU)
w.push(B.d(k.b,l,l,l,l,l,l,I.EK,l,l,l))
u=k.e
if(u.length!==0){t=A.aV.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fvg,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.hU,A.cl,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lV,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NQ,new B.c7(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bm,new B.bz(1,A.bc,B.d(q,l,l,l,l,l,l,new B.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.br.j(0.3)
s=new B.aN(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vp,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hc,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.v(w,B.a([A.U,new B.bL(A.aa,l,l,s,l),A.ax,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fAW,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.eqV)
j=B.cg(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aje(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bBq,A.ey,l,l,1/0),A.b3,A.iI),B.E(C.hjb(m.gWZ(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.eiC(m),l,A.br,l),new E.dW("Invent something new",!i,new C.eiD(m),l,A.br,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dt7[p]
i.push(new E.dW(n,!1,new C.eiE(m,n),l,A.br,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.db6[p]
i.push(new E.dW(r,!1,new C.eiF(m,r),l,A.br,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(16),A.a1),l,A.eY,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kh,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eiG(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a5,l,A.ao,l,A.Vd,l,l),1)
h=m.at
v=h&&j?D.bRh:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fB(v,j,new C.eiH(m,k),A.br,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lA(A.br,A.f6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.Q,0,A.p))}}
C.GT.prototype={}
C.vl.prototype={}
C.WZ.prototype={
S(){return new C.aFX(A.I,A.I,A.az,B.aR(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aFX.prototype={
gaZF(){var w,v,u,t=this,s=D.Ir[t.cx],r=D.SA[t.cy],q=D.Dq[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAq[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new C.exE())},
ga3q(){return D.Ir[this.cx].d/this.gaZF()},
gaQE(){return 0.1*(D.Ir[this.cx].d/0.9)/D.SA[this.cy].d},
Y(){this.a3()
this.me()
C.cjD("rocket_lander").bG(new C.exY(this),x.h)},
c8J(){var w=this
w.ay=A.j.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cN.ai()*0.6
w.f=new B.o(0.15+A.cN.ai()*0.7,0.08)
w.r=new B.o((A.cN.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mw(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.exZ())
return}w=D.t8[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3q()
v=v.a2(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQE())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcI()*6*D.aCt[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.o(-t.a*0.4,t.b)
t=new B.o(A.j.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.o(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dq[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2V("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JJ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3q()/(D.t8[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3q()/(D.t8[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.ey_())},
ah1(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fsc,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.exG(this,g,w),v,h,v))
return new B.D(A.eM,B.x(B.a([u,A.cU,B.bU(A.bG,s,A.bs,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bHO(d){var w,v,u,t,s=this,r=null,q=s.ga3q()/(D.t8[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQE()),o=D.aCt[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ab6,r,r,r),A.X,s.ah1("ENGINE: "+D.Ir[s.cx].b,D.Ir,new C.exv(s),new C.exw(s),A.cF),s.ah1("FUEL TANK: "+D.SA[s.cy].b,D.SA,new C.exx(s),new C.exy(s),A.b4),s.ah1("LANDING GEAR: "+D.Dq[s.db].b,D.Dq,new C.exz(s),new C.exA(s),A.aH),s.ah1("EXTRAS (tap to add)",D.aAq,new C.exB(s),new C.exC(s),A.br)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fYz)
o=(q?A.b4:A.c0).j(0.14)
w=B.m(12)
v=A.j.ad(s.gaZF(),2)
u=A.j.ad(s.ga3q()/(D.t8[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Dq[s.db].d*100)+".",r,r,r,r,r,r,D.fsS,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.hU,A.bV,r,r,r))
m.push(A.X)
m.push(new B.bL(A.A,r,r,new E.fB(A.oC,"Launch",new C.exD(s),A.b4,r),r))
return B.at(B.q(r,B.cg(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.m_,new B.p(D.brf,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b_Q(d,e,f,g){var w=null,v=f?A.cF:A.c.j(0.1),u=B.m(18),t=B.L(A.aT,A.r,1)
return B.mM(A.iL,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.exs(e),new C.ext(e),w,w,w,w,new C.exu(e))},
b_P(d,e,f){return this.b_Q(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cs(new C.exR(s,D.t8[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.t8[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.exS(s,w),r,D.t8[w].c,r))}v=B.a([s.b_P(F.aq7,new C.exT(s),s.y),A.bd,s.b_Q(A.wB,new C.exU(s),s.Q,130),A.bd,s.b_P(A.PC,new C.exV(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aA(r,B.q(r,D.bVu,A.f,r,r,new B.p(u,r,B.L(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exW(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lA(A.cF,A.f6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.m,r,A.bb,A.i,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bj7.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.t8[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.Q(),f=B.K(),e=l.c,d=B.ar(K.ZT,e,0.25)
d.toString
f.sav(new B.a9(A.b7,A.b9,A.x,B.a([F.ah2,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e4()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.o(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aF(g.r,A.ai,n,n,h)
t.D(new B.aZ(0,u+14))
s=new B.e4()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.D(new B.aq(k,j))
t.D(new B.aq(0,j))
t.D(new B.bv())
h=$.Q()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.o(m.ax*k,u+10),8,m.ay*k)
g=B.bl(q,A.ix)
e=B.K()
e.r=A.bg.gp(0)
a0.am(g,e)
e=B.bl(q.cn(2),A.mv)
g=B.K()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.am(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bo(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cF.j(0.6).gp(0)
m.y=U.On
a0.N(A.I,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aF(k,A.ai,n,n,B.a([],i))
p.D(new B.aZ(-8,18))
p.D(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.D(new B.aq(8,18))
p.D(new B.bv())
m=B.K()
m.r=A.aV.gp(0)
a0.af(p,m)
k=new B.aF(k,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-4,18))
k.D(new B.aq(0,32))
k.D(new B.aq(4,18))
k.D(new B.bv())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aF(m,A.ai,n,n,B.a([],i))
o.D(new B.aZ(0,-26))
o.D(new B.c5(14,-10,11,18))
o.D(new B.aq(-11,18))
o.D(new B.c5(-14,-10,0,-26))
o.D(new B.bv())
k=B.K()
k.sav(D.c7m.aK(0,D.f6q))
a0.af(o,k)
k=B.K()
k.r=A.aH.gp(0)
a0.N(H.vm,5,k)
k=new B.aF(m,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-11,6))
k.D(new B.aq(-20,20))
k.D(new B.aq(-11,18))
k.D(new B.bv())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aF(m,A.ai,n,n,B.a([],i))
i.D(new B.aZ(11,6))
i.D(new B.aq(20,20))
i.D(new B.aq(11,18))
i.D(new B.bv())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aNS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzJ.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzI()}}
C.aTX.prototype={}
C.a4g.prototype={}
C.bc3.prototype={}
C.Vv.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aEq(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LL,D.LL,A.az,A.cN,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEq.prototype={
Y(){var w=this
w.a3()
w.me()
w.as=new C.c6b(w.gchB())
new C.dOJ(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byM()},
chC(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.I(["t","init","data",$.htk],x.N,x.z))
v.at=!0
v.ay=""
v.aAM()
break
case"parts":v.m(new C.dOj(v))
break
case"pick":v.m(new C.dOk(v,d))
break
case"shot":v.aiW(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dOl(v))
break}},
aAM(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayi[q.cx]
v=new C.dOm()
u=q.ch
u=B.C(u,B.a4(u).k("ch.E"))
A.d.fi(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.Y.az(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f8(0,u)}},
aiW(d){return this.cyA(d)},
cyA(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aiW=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awK(B.a([B.cG0(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aiW)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aTP)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aiW,v)},
aAa(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mw(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.p1)){E.Xo("kick",0,0.4)
v.UE(170,new C.dOK())}v.p1=w
return},
aez(d){var w,v,u,t,s=this
s.m(new C.dOn(s,d))
if(d==null){s.fy=D.LL
s.fr=1
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOo(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.J(0,t)
if(s.CW===2)s.CW=1}s.aAM()
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cB3(t,d)
return},
cB3(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Xo("kick",0,0.8)
this.UE(260,new C.dOp())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UE(w*70,new C.dOq(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h8G("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.Xo("kick",0,0.3)
break
default:E.h8G("organic",2+A.o.F(e.length,6),200,0.4)}},
cFI(d){this.m(new C.dOs(this,d))},
b07(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAa(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
bZF(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dOg(u,w,d))
v=x.t
C.JJ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UE(1100,new C.dOh(u))
return}if(d==null){if(u.cy!=null)u.aez(null)
return}u.aez(d)},
c2h(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.foi,u,u,u)}else if(d==null||e==null)w=D.fD4
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hk,u,u,u),A.cU,B.d(e.b,u,u,u,u,u,u,I.EK,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aG(u,u,u,u,D.bY0,u,u,u,new C.dOi(v),u,u,u,u,"Back to the whole body",A.cf)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(K.Yd,u,s,t,u,u,A.n),u,u,u,u,R.alz,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dEj.h(0,g)
i.aAM()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dlp
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAa(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aG(h,h,h,h,K.oF,h,h,h,new C.dOz(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BX(h,A.pJ,p))}p=i.ax
o=p?0:1
q.push(new B.dx(p,B.zj(B.q(A.A,B.x(D.duI,A.m,h,A.e,A.Q,0,A.p),A.f,h,h,D.b6t,h,h,D.hpz,h,h,h,h,h),A.b3,A.mV,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b2,A.t,q,h),1),new B.D(F.a_Y,i.c2h(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dcI[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dOA(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dOB(i,k),h,A.aV,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iP(A.c0,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dOC(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G1(D.ayi[j],i.cx===j,new C.dOD(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dOE(i),D.ap_,A.aH,h),new E.fB(A.ox,"Reset view",new C.dOF(i),A.c,h),new E.dW(l,m,new C.dOG(i),A.HL,A.aV,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dOH(i),A.oB,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lA(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aMX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aMY.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byL()}}
C.c6b.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hzy
$.hzy=v+1
u="ngmy-body-viewer-"+v
$.xp()
$.pU().pc(u,new C.c6c(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fz(v,"message",new C.c6d(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rn(w.contentWindow)
if(w!=null)J.aj4(w,e,"*")}}catch(v){}}}
C.yF.prototype={}
C.D_.prototype={}
C.nI.prototype={}
C.bcP.prototype={}
C.VA.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEs(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.I,A.I,B.aR(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEs.prototype={
Y(){var w=this
w.a3()
w.me()
w.adx()
$.aW.x1$.push(new C.dQo(w))},
adx(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adx=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adx)
case 6:q=e.tS("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dQ2(s,r))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adx,v)},
adT(d){return this.c6e(d)},
c6e(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adT=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.az(),$async$adT)
case 6:r=f
q=s.cx
p=B.a4(q).k("k7<ch.E,n>")
q=B.C(new B.k7(q,new C.dQ5(),p),p.k("M.E"))
r.aB("StringList","ngmy_circuit_passed_v1",q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adT,v)},
ayO(d,e,f,g){var w="c"+this.y++,v=new C.D_(w,e,f,g)
this.d.n(0,w,v)
return v},
mM(d,e,f){return this.ayO(0,e,f,0)},
acS(d,e){var w
if(D.A3.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.o(-36,w))},
uh(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUM(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cWD[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uh(p,0)&&n.uh(p,1)
break
case"or":p=q.a
o=n.uh(p,0)||n.uh(p,1)
break
case"xor":p=q.a
o=n.uh(p,0)!==n.uh(p,1)
break
case"nand":p=q.a
o=!(n.uh(p,0)&&n.uh(p,1))
break
case"nor":p=q.a
o=!(n.uh(p,0)||n.uh(p,1))
break
case"not":o=!n.uh(q.a,0)
break
default:o=n.uh(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bS8(){return this.aUM(null)},
mw(d){var w,v,u,t,s,r,q,p,o,n=this
n.bS8()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eF(w,new C.dQp()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayP(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mf(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
av_(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQ0(w,d))
return}w.m(new C.dQ1(w,d))},
cBl(d){this.m(new C.dQ6(this,d,$.bGv()[d]))},
cb0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGv()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dPW(),t),s)
A.d.aZ(r,new C.dPX())
q=B.C(new B.Y(new B.b8(v,u),new C.dPY(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dPZ(d,w))
return}u=d.r
p=B.dM(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUM(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lz(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aO(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dQ_(d,o,a0))},
azG(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bP(s,s.gI(0),r.k("bP<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ck1(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bP(r,r.gI(0),q.k("bP<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2a(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A3.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acS(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bQS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acS(p,o)
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
cb2(d){var w,v,u,t=this,s=t.azG(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dQ7())
return}u=t.bQS(d)
if(u!=null)t.m(new C.dQ8(t,u))
else t.m(new C.dQ9(t))},
axD(d){return this.c5d(d)},
c5d(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azG(d)
if(s==null){w=1
break}B.jV()
t.m(new C.dQ4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axD,v)},
bDC(d){if(this.x.A(0,A.az))return
this.m(new C.dPV(this,d,A.cN))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGv()[g]
g=x.p
v=B.a([B.aG(h,h,h,h,B.X(i.ax?A.oB:V.t3,A.ab,h,h,h,21),h,h,h,new C.dQi(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cn.j(0.14)
r=B.L(A.cn.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fnq,h,h,h),B.d(w.b,h,h,h,h,h,h,H.ab5,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lg,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b4:A.eU,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fOB,h,i.gcb_(),B.bp(A.cn,h,h,h,h,h,h,h,h,h,h,A.cf))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,T.NY,D.bC5,h,h,1/0))}u.push(B.E(B.cs(new C.dQj(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A3.h(0,r).a+": "+D.A3.h(0,r).e,h,h,h,h,h,h,A.tE,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a01,A.bV,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A3.gdO(D.A3),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bH,B.d(p.a,h,h,h,h,h,h,D.aVM,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.p(n,h,new B.bF(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fz,Ah.NV,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQk(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dpV[l]
s.push(new E.fB(A.PD,k.b,new C.dQl(i,k),A.cn,h))}s.push(new E.fB(K.wy,"Clear",new C.dQm(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGv(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lL
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bi
r.push(new E.dW(q.a,o===j,new C.dQn(i,j),p,n,h))}return E.lA(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bd7.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.Q()
w=B.K()
w.r=D.afn.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.o(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.acS(l,o.c)
h=s.h(0,n)===!0
n=$.Q()
g=B.a([],r)
f=new B.aF(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kR(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=9
n.r=A.bi.j(0.28).gp(0)
n.y=N.oq
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=3.2
n.d=A.bw
n.r=(h?A.dy:A.bv).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.Jx)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aF($.Q().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.D(new B.aZ(a4,w))
s=i.b
r.D(new B.kR(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cb1(a5,a3.d)},
cb1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A3.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bl(t,A.jL)
r=w.cy===v
q=s.eQ(A.cA)
$.Q()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mf
d.am(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bX(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cM)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.am(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a9(A.b7,A.b9,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.am(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pt:D.bRN}else l=e.b
k=C.hav(B.lz(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.o(p/2,q.gba(q)/2)))
j=C.hav(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.a2(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hav(f,9,u?A.dy:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0M(d,w.acS(a0,h),o)
this.b0M(d,a0.c.a2(0,D.Jx),o)},
b0M(d,e,f){var w
$.Q()
w=B.K()
w.r=D.afn.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aE(d){return!0}}
C.aN1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzt.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byQ()}}
C.Ob.prototype={
S(){return new C.aEJ(B.mX(0,null,null))}}
C.Ld.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B7.prototype={}
C.aEJ.prototype={
Y(){this.a3()
B.bQ(A.rM,C.ip1(),x.H)},
cb7(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dWm(w,e))},
c43(){var w=this
w.e.t()
w.e=B.mX(w.f,null,null)
w.m(new C.dWl(w))},
t(){this.e.t()
this.a4()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oL(t,B.c4(v,A.c3,t?new C.bto(w.e,w.gcb6(w),new C.dWn(d),v):new C.aIW(u,new B.bM(u.b,x.k)),v,!1,!1,v,!1),new C.dWo(w,u),x.K)}}
C.bv0.prototype={}
C.bto.prototype={
b0N(d,e){var w=null
return new B.D(R.a0t,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fo1,w,w,w),A.bH,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.A(B.a([B.aG(v,v,v,v,A2.mm,v,v,v,w.e,v,v,v,v,v,v),A.tw,D.bIk],u),A.m,v,A.e,A.i,0,v,v),s=w.b0N("STUDIOS","Play, make things, and keep what you make")
$.bGw()
return B.bm(!1,B.x(B.a([new B.D(D.bHf,t,v),B.E(B.w2(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mv(s,v),new B.of(A.hV,B.PN(new B.oO(new C.f7k(d),9,!0,!0,!0,0,B.tp(),v),D.aTE),v),new B.mv(w.b0N("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.of(D.bCd,B.PN(new B.oO(new C.f7l(w),6,!0,!0,!0,0,B.tp(),v),D.aTE),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)}}
C.afU.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(I.m6,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aiB],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.q(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.p(r,r,r,r,u,new B.a9(A.aA,A.aF,A.x,w,r,r),A.a7),r,44,r,r,r,r,r,44),A.U,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cU,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.bb,A.i,0,A.p),r,new B.p(r,r,v,n,t,new B.a9(A.aA,A.aF,A.x,m,r,r),A.n),r,A.H_,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aeM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(I.m6,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aiB],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aN(6,6)
m=B.a([A.d.gH(i),A.d.gan(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLR,0)],u)
r.push(B.q(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.p(k,k,k,new B.be(n,n,n,n),l,new B.a9(A.a6,A.aa,A.x,m,k,k),A.n),k,17,k,new B.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gH(i),A.d.gan(i),0.4)
u.toString
return B.aJ(!1,A.a3,!0,k,B.aP(!1,h,!0,B.eJ(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.ax,B.X(A.D2,A.d.gH(i),k,k,k,18)],s),A.m,k,A.bb,A.i,0,A.p),k,new B.p(k,k,v,g,t,new B.a9(A.aA,A.aF,A.x,f,k,k),A.n),k,A.H_,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.R3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gan(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c3(j,new B.p(h,j,j,B.m(22),j,j,A.n),A.bj),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Ju,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.I,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gan(i)
i=B.ar(A.d.gan(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c3(j,new B.p(j,j,j,j,j,new B.a9(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.dvG,j),A.n),A.bj),0,0,0),B.ap(j,B.c3(j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.b9,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bj),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.buo(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fpN,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.V1)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h3,B.A(B.a([s,A.ex,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dx(!0,B.e8(j,A.w.j(A.j.E(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bR(0,new B.dx(!0,B.c3(j,new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bj),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,B.c3(B.by(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),new B.p(j,j,j,u,r,j,A.n),A.bj),0,0,0)],l),j),j)}}
C.buo.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bo(u.save())
u.translate(v.gbw().a,v.gbw().b)
d.hW(0,0.35)
t=B.bs(A.I,(w- -10)*1.6,s-r)
$.Q()
s=B.K()
s.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.btU.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bp7,D.ahF],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kB,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c3(B.by(q,B.b4(B.at(B.X(A.jG,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbM(p,w),A.az),A.aq),new B.p(w,w,s,v,r,new B.a9(A.aA,A.aF,A.x,u,w,w),A.n),A.bj),w)}}
C.bbM.prototype={
a5(d,e){var w,v,u,t,s,r
$.Q()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.o(s,0),new B.o(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.o(0,r),new B.o(u,r),w)
u=e.ej(A.I)
$.Q()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aE(d){return!1}}
C.aIW.prototype={
S(){return new C.aIX(new B.cw(null,x.A),null,null)}}
C.aIX.prototype={
guG(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bzv,null,1,null,v)
w.cP(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
ga_p(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.h2,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bG()
v.e=w
u=w}return u},
gayQ(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcb4(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaY4(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaYS(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9D(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guG()
w.dl()
w.dV$.J(0,this.gcB4())},
cB5(){var w,v,u,t,s,r,q,p=this,o=p.guG().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayQ().a){case 0:w=D.nN
break
case 1:w=D.v5
break
case 2:w=D.a55
break
case 3:w=D.nN
break
case 4:w=D.di6
break
case 5:w=D.v5
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ad5)r=0.09
else r=s===D.ad6?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.c9W[v]
E.mr("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JJ("bell",D.ciK,1400,0.35)}}p.ax=o},
t(){this.guG().t()
this.ga_p().t()
this.bAE()},
aeZ(){var w=this
w.guG().d0e(0,B.dv(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f70(w))},
cm4(){this.guG().bQ(0)
this.m(new C.f7_(this))},
aeY(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaYS(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aQ),$.aw()))}m=B.a([],m)
for(t=u.gb9D(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aQ),$.aw()))}o=B.C(u.gaY4(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m6,null,new C.f6Z(u,l,m,o),t,!0,!0,!0,A.lS,!1,!1,x.H),$async$aeY)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeY,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayQ(),f=i.a.c,e=f.b,d=i.gcb4(),a0=new C.B7(g,e,f.c,d,i.gaY4(),i.gaYS(),i.gb9D())
f=B.ar(A.d.gH(d),A.d.gan(d),0.4)
f.toString
g=x.p
w=B.a([B.aG(h,h,h,h,B.X(i.at?A.oB:V.t3,A.ab,h,h,h,21),h,h,h,new C.f78(i),h,h,h,h,"Sound",h),B.aG(h,h,h,h,D.c0B,h,h,h,i.gcb5(),h,h,h,h,"Edit words and pictures",h),B.aG(h,h,h,h,K.oF,h,h,h,new C.f79(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.ga_p(),new C.f7a(i,a0),h),B.cs(new C.f7b(i,a0))],g)
u=i.as
t=u?i.gcm3():i.gcb8()
u=u?D.bR4:A.t2
s=B.ar(A.d.gH(d),A.d.gan(d),0.4)
s.toString
t=B.A(B.a([B.aG(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cf),B.E(B.c9(i.guG(),new C.f7c(i,a1,a0),h),1),B.aG(h,h,h,h,D.bXR,h,h,h,new C.f7d(i),h,h,h,h,"Replay",A.cf)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f7e(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dsI[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f7f(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.caj[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aT
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.q(h,h,A.f,h,h,new B.p(h,h,new B.bF(j,j,j,j),h,h,new B.a9(A.aA,A.aF,A.x,n,h,h),A.a7),h,l,h,K.al5,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f7g(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bCN(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nN[r]
p=A.j.E((1-A.e7.aA(0,A.j.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.E(p/1.5707963267948966,0,1)
q=D.nN[r]
n=q+0.12
m=A.j.E((a0-n)/(q+0.2-n),0,1)
n=D.nN[r]
q=n-0.01
q=A.j.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nN[r]
h=i+0.1
if(A.j.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nN[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nN[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kG(q,new B.iR(n,f,A.b7,!0,f,new C.R3(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nN[r]
u=v-0.02
g=A.j.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nN[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mF(new C.bt_(u,g,1-A.j.E((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bTI(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v5[r]
p=A.qp.aA(0,A.j.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v5[r]
m=q+0.15
l=A.j.E((a0-m)/(q+0.25-m),0,1)
m=D.v5[r]
q=m-0.03
q=A.j.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k5(n,n,n,1)
m.fL(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.R3(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iR(k,f,A.A,!0,f,new C.btU(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kG(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cGc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a55[w]
l.push(A.cw.aA(0,A.j.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bwu(d.d,l,D.aA0,m,C.btn(e,0.4,0.62),f,C.btn(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hb2(g,w)
q=D.aA0[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kG(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hb2(g,w)
r=D.a55[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kG(A.j.E((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VN,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJ4(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btn(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.at(B.dP(B.b4(f,f,f,new C.bsq(A.d.gH(a1),C.btn(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.el6),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.E((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.j.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fL(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k5(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cL(0,0,0,0,f,f,new B.cf(A.A,f,f,new B.kG(k*(0.45+0.55*o),B.dP(new B.iR(l,f,A.A,!0,f,new C.R3(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f6S())
A.d.v(a0,new B.N(w,new C.f6T(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cb3(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v5[q]
o=A.j.E((a2-p)/(p+0.22-p),0,1)
n=A.l9.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v5[q]
m=A.j.E((a2-m)/(m+0.02-m),0,1)
l=D.aC6[q]
k=B.dr()
k.n_(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v5[q]
g=h+0.1
g=A.j.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.cf(A.A,e,e,new B.kG(m,B.dP(new B.iR(k,e,A.A,!0,e,new C.R3(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.v5[q]
h=l+0.02
f=A.j.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.cf(A.A,e,e,B.dP(new B.mF(new C.bcs(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aC6[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFJ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.ela],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nN[r]
p=A.j.E((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCh[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nN[r]
f=g+0.2
e=A.j.E((a8-f)/(g+0.3-f),0,1)
f=D.nN[r]
g=f-0.01
g=A.j.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n_(l*h+D.dmq[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,new B.kG(g,B.dP(new B.iR(f,a3,A.A,!0,a3,new C.R3(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nN[r]
i=q+0.17
a2=A.j.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCh[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,B.dP(new B.mF(new C.bss(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bt_.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bl(u,A.hz)
$.Q()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oq
d.am(q,t)
t=B.bl(u,A.hz)
q=B.K()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bsq.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ej(A.I),e.b*u,e.a*u)
$.Q()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.On
d.bZ(t,u)
u=B.K()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bZ(t,u)
u=t.cn(-14)
v=B.K()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.bZ(u,v)},
aE(d){return!0}}
C.bcs.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.I),h=this.c,g=A.cw.aA(0,h)
$.Q()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e4()
t.d_(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.E(v,0,1)).gp(0)
d.N(new B.o(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bss.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.I)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.E(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aE(d){return d.c!==this.c}}
C.bwu.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.Q()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hb2(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.Q()
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mf
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.T,A.P)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a9(A.b7,A.b9,A.x,B.a([a6,A.d.gan(w)],v),c1,c1).aK(0,a4))
d1.ar(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aF(a2,A.ai,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.ab()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.bv()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.T,A.P)
a5.r=B.ar(A.d.gan(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aF(a2,A.ai,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.ab()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.ak(a9)
b1.ab()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ak(a6)
b1.ab()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ak(a6)
b1.ab()
a2=new B.bv()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.O,A.M,A.R,A.T,A.P)
b2.b=A.a9
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.ar(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bl(new B.a1(b7,a6,b7+s,a9),A.hz)
$.Q()
b8=new B.ao(A.O,A.M,A.R,A.T,A.P)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hR(a4),$.mf()[1],!0)
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aOH.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a4()}}
C.a1s.prototype={
a7(){return"_Role."+this.b}}
C.qr.prototype={}
C.r9.prototype={}
C.D3.prototype={}
C.a_q.prototype={}
C.afI.prototype={}
C.a1F.prototype={
gZ(d){return this.d}}
C.De.prototype={}
C.acD.prototype={}
C.acU.prototype={}
C.aeP.prototype={}
C.bj4.prototype={
a3z(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baJ(d,e,f){return this.a3z(d,e,f,0,0.55)},
aDv(d,e,f,g){return this.a3z(d,e,f,0,g)},
baK(d,e,f,g){return this.a3z(d,e,f,g,0.55)},
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
w.b_()},
al6(d,e,f,g){var w="n"+this.ay++,v=new C.r9(w,e,f,g)
this.a.n(0,w,v)
this.b_()
return v},
tb(d,e,f){return this.al6(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dqA(e))
A.d.bt(w.c,new C.dqB(e))
w.b_()},
beB(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n7.h(0,v.b).c===D.xD)return!1
w=this.b
if(A.d.aV(w,new C.dqx(d,e)))return!1
w.push(new C.D3(d,e))
this.b_()
return!0},
c2X(d){var w
if(d.b==="beat")return D.ciU[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aH5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCy[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.De(u,t,j.ax,90))
w.push(new C.De(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1F(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baJ(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1F(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.De(u,t,j.ax,120))
j.aDv(120,200,"noise",0.5)
j.baJ(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.De(u,t,j.ax,230))
w.push(new C.De(u,t,j.ax+160,160))
w.push(new C.De(u,t,j.ax+320,100))
j.baK(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acD(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baK(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.acU(u,u.a2(0,new B.o(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3z(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3z(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aeP(u,D.aBT[v],t,j.ax))
j.aDv(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDv(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cf_[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwa(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eF(w,new C.dqy(d));v.C();)j.aC0(w.gR(0),j.ax+D.crk[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cIz[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eF(w,new C.dqz(d));v.C();)j.aC0(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xB(w,0,v-700)},
cwa(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_q(e,"~"+d))},
aC0(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afI(d.a,v,e,w))
u.push(new C.a_q(w,v))},
a7k(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b8<2>")
w=B.C(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aH5(r)
u.n(0,r,o.ax+o.c2X(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dqC(o),v),v.k("M.E"))
if(q.length!==0){A.d.bt(w,new C.dqD(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eF(u,new C.dqE(p));r.C();)o.aC0(u.gR(0),o.ax)}else o.aH5(u)}}A.d.bt(o.d,new C.dqF(o))
A.d.bt(o.e,new C.dqG(o))
A.d.bt(o.f,new C.dqH(o))
A.d.bt(o.w,new C.dqI(o))
A.d.bt(o.x,new C.dqJ(o))
A.d.bt(o.r,new C.dqK(o))
o.b_()},
vI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.o(q.a+o*e,q.b+p*e)
r.b=new B.o(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.o(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.o(l,o)
if(o>n){p=m.a=new B.o(l,n)
t=m.b=new B.o(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.o(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.I(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.Y.az(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Uh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aU(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n7.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.r9(t,u,new B.o(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.j.M(B.dC(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D3(q,p))}k.b_()
return!0}catch(l){return!1}},
cVG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r9(n,r,new B.o(q*p.a,o*p.b),s))
l.b_()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beB(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GE.prototype={}
C.WY.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFW(new C.bj4(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cN,A.L,A.az,$.aw()),A.bE,A.I,A.I,A.Z,null,null)}}
C.aFW.prototype={
adq(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adq)
case 6:q=n.k2(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ewZ(s))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adq,v)},
aak(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aak=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ewO(s))
u=3
w=6
return B.b(B.az(),$async$aak)
case 6:e.aB("Bool","ngmy_core_lab_coach_v1",!0)
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aak,v)},
bP_(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cJ(0,0,new C.ewQ())+"|"+A.d.cJ(o,0,new C.ewR())
if(v===p.ch)return p.CW
u=new C.ewU()
t=x.s
s=B.a([],t)
r=new C.ewV(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eF(n,new C.ewS());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.ewT(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a3()
v.adq()
v.d.db=v.ay
w=v.q_(new C.exo(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.T$=$.aw()
v.P$=0
w.bzG()},
acW(d){return this.c2n(d)},
c2n(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acW=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acW)
case 6:q=m.aT(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uh(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZi(A.d.gH(D.aBk))
if(s.c!=null)s.m(new C.ewY())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acW,v)},
aZi(d){this.d.cVG(0,d.c,d.d)
this.EI()},
EI(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lH,new C.ewK(this))},
ayR(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bP(s,s.gI(0),r.k("bP<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ck2(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bP(r,r.gI(0),q.k("bP<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2b(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n7.h(0,r.b).c===D.xD)continue
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
cbb(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hzz(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cDU(d){var w,v,u,t,s,r,q=this,p=q.ayR(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aH5(p)
return}if(q.r)return
t=D.n7.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rh)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b_()
q.EI()
return}if(q.r)return
r=q.cbb(d)
if(r!=null){w=q.d
A.d.cB(w.b,r)
w.b_()
q.EI()}},
cll(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ck2(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayR(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clm(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b_()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.j.E(d.a+s.y.a,46,t.a-46),A.j.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b_()}}},
b3E(){var w,v,u=this
if(u.z!=null){w=u.c2b(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beB(v,w)}else v=!1
if(v){B.jU()
u.EI()}u.z=null
u.d.b_()}else if(u.x!=null){if(u.at)u.EI()
u.x=null}},
adD(d){return this.c5e(d)},
c5e(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayR(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jV()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m6,null,new C.ex0(q),p,!0,!0,!1,A.lS,!1,!1,x.y),$async$adD)
case 3:if(f===!0){r.W(0,s)
t.EI()}case 1:return B.h(u,v)}})
return B.i($async$adD,v)},
cb9(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tb(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EI()},
ahz(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m6,null,new C.ex2(),s,!0,!0,!0,A.lS,!1,!1,x.es),$async$ahz)
case 2:t=e
if(t!=null)u.aZi(t)
return B.h(null,v)}})
return B.i($async$ahz,v)},
af_(d){var w=0,v=B.j(x.H),u=this,t
var $async$af_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ewN(),t,null,!0,!0,x.y),$async$af_)
case 2:if(f===!0){u.d.a8(0)
u.EI()}return B.h(null,v)}})
return B.i($async$af_,v)},
B(d){var w=this,v=null,u=B.a([B.aje(w.r?new B.bL(A.a6,v,v,new B.D(A.H0,B.ho(D.bVK,D.fHd,new C.exm(w),v),v),v):w.cbc(),A.b3,A.iH),B.E(B.cs(new C.exn(w)),1)],x.p)
if(!w.r)u.push(w.cyD())
return B.c4(v,A.c3,B.bm(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKJ(){var w=null,v=new C.ewP(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bR(0,B.e8(B.at(B.q(w,B.cg(B.x(B.a([D.fSK,A.ax,D.h_t,A.aB,v.$4(A.oA,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.CZ,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kv,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.P8,A.bi,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fZM,new B.bL(A.aa,w,w,B.bN(!1,D.fPN,w,w,!0,w,w,w,this.gbKC(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Xv,new B.p(I.m6,w,s,t,w,w,A.n),w,w,w,A.fs,An.ami,w,w,w),w,w,w),u,!0),0,0,0)},
cbc(){var w=this,v=null,u=B.aG(v,v,v,v,A2.mm,v,v,v,new C.ex8(w),v,v,v,v,v,v),t=w.a9L(A.HB,"How it works",new C.ex9(w),!0),s=w.ay?A.oB:V.t3
return new B.D(D.bGp,B.A(B.a([u,D.bI6,t,w.a9L(s,"Sound",new C.exa(w),!0),w.a9L(A.ed,"Ideas",w.gcp7(),!0),w.a9L(K.wy,"Clear",w.gcba(w),!0),w.aPW(A.hw,"Show",new C.exb(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aPW(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ae.wn,B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.hb(new B.D(new B.R(8,8,8,8),B.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9L(d,e,f,g){return this.aPW(d,e,f,g,!1)},
cyD(){var w=null,v=new C.ex4(this),u=A.c.j(0.08)
return B.q(w,B.cg(B.A(B.a([v.$2("START",D.xD),v.$2("CHANGE",D.F6),v.$2("REACT",D.rh)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BM,w,new B.bF(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bBs,w,w,w)},
cyE(d){var w,v,u,t,s=null,r=D.n7.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fz,B.aA(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cU,B.d(r.a,s,1,A.a2,s,s,s,D.aVM,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a9(A.b7,A.b9,A.x,u,s,s),A.n),s,s,s,s,A.hG,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ex3(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bj5.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bo(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.Q()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.o(r,s),1,u)
q=b4.CW
if(b5<q){$.Q()
p=B.K()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.ar(new B.a1(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.Q()
e=B.a([],p)
d=new B.aF(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kR(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n7.h(0,l.b).d
a2=D.n7.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=3
f.d=A.bw
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rY(new B.o(i,j),new B.o(g,h))
f.sav(new B.a9(A.a6,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.E((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hzz(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.Q()
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.j(0.35).gp(0)
i.y=N.oq
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.Jx)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aF($.Q().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.D(new B.aZ(t,p))
j=a8.b
d.D(new B.kR(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.j.E((b5-p)/700,0,1)
if(b5<p)continue
p=A.dH.aA(0,v)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.j.E((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.ks(p,j,A.dH.aA(0,v))
i.toString
j=B.ks(p,j,A.dH.aA(0,A.j.E(v-0.35,0,1)))
j.toString
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.c=5
p.d=A.bw
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rY(j,i)
p.sav(new B.a9(A.a6,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kU
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.j.E((b5-a3.f)/a3.e,0,1)
p=a3.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c_(A7.B8,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.j.E((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bj6(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.ckU(b7,b4.d,b5)
b6.restore()},
ckU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n7.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.E(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bl(u,A.il)
s=t.eQ(A.cA)
$.Q()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mf
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wo
d.am(s,r)}s=t.eQ(A.cM)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a9(A.b7,A.b9,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.am(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bj6(B.lz(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.o(s/2,r.gba(r)/2)))
n=C.bj6(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.a2(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aBT[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rh){s=e.c.a2(0,new B.o(0,62))
r=B.K()
r.r=D.aCy[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bj6(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bj6(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xD)k.b4r(d,e.c.aJ(0,D.Jx),q)
k.b4r(d,e.c.a2(0,D.Jx),q)},
b4r(d,e,f){var w
$.Q()
w=B.K()
w.r=A.c3.gp(0)
d.N(e,9,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aE(d){return!0}}
C.aNQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.eh.prototype={}
C.tY.prototype={
as0(d,e,f,g){var w=this
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
C.abi.prototype={}
C.acp.prototype={}
C.a5p.prototype={
bgt(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abi(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7o(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bPw())},
al6(d,e,f,g){var w="p"+this.c++,v=new C.tY(w,e,f,g)
v.as0(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bPH(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMF(d,e,f,g,h){return A.d.aV(this.b,new C.bPC(e,f,g,h))},
alX(d,e,f,g){var w
if(d===f||this.cMF(0,d,e,f,g))return null
w=new C.acp(d,e,f,g)
this.b.push(w)
return w},
aCx(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Af(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoI(d){return this.Mf(d)&&!d.x&&d.cx>this.Af(d)},
b8O(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mf(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbw(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A4.h(0,v)
if(w!=null)return w.a
return 100},
vI(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7o(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bPI(a2),t).cJ(0,0,new C.bPJ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bPL(o)
m=B.a([],x.t)
l=new C.bPK(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bPN(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.J)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b8K(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Af(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8K(e,d,w,!0)
a2.bRl(a4)},
b8K(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPy(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPx(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPA(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bZ(b7,0,!1,b3)
v=x.W
k=B.T(v,b3)
j=B.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bi(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8O(t)*(1+t.CW))
a4=b2.aCx(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbw(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUI(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
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
bUI(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.J)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.J)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.bZ(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bRl(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCx(o)/a1.b8O(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Af(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJn(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgt(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.un(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.j.E(o.db-h,0,24)
else o.cy=A.j.E(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.un(o,"The "+$.qC().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.un(o,"More than 1.5 amps went through the "+$.qC().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.un(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.un(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A4.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qC().h(0,n).b
l=f.b
l=l===A.j.iY(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iY(g)?""+A.j.V(g):B.w(g)
a1.un(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fb0.q(0,n)){m=o.fx>0?A.j.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.un(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.un(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.E(j/14,0,1)
break
case"motor":n=A.j.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.un(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.E(i/1,0,1)
if(!o.x&&i>1)a1.un(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.un(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.un(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJn(d){return A.d.aV(this.a,new C.bPv(d))},
un(d,e){var w
d.x=!0
d.ay=e
this.bgt(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bl7(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aIS(d){var w=d.b
return D.aSD.q(0,w)||D.A4.al(0,w)||w==="buck"||w==="regulator"},
bhX(d){var w,v=!0
if(!this.Mf(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A4.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vw(d,e){var w=this.b
return new B.Y(w,new C.bPP(d,e),B.U(w).k("Y<1>")).gI(0)},
tO(d){var w,v
if(d.x)return!1
w=d.b
if(D.A4.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bg_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qC().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aIS(d)||i.tO(d))return null
w=i.Vw(d,0)
v=i.Vw(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVf(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iY(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A4.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Ms("battery"),o=J.aU(t.a),t=new B.eF(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vw(n,0)+i.Vw(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Ms("switch"),o=J.aU(t.a),t=new B.eF(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qC().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Af(k))return"The "+$.qC().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Af(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bPD(i,d))
h=q.b
h=h===A.j.iY(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Ms(d){var w=this.a
return new B.Y(w,new C.bPG(d),B.U(w).k("Y<1>"))},
aIt(d){return this.Ms(d).aV(0,new C.bPF(0.35))},
qc(d,e){return A.d.aV(this.a,new C.bPE(e))}}
C.ajO.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.Q()
w=B.K()
w.r=F.yb.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.o(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.ms.al(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.ms.al(0,j.b)?(j.ch-1)*38:0
b6.cJm(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hMZ(s.a,s.b,c3)
s=b6.e
s.toString
$.Q()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bw
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.Q()
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=F.Mz.j(A.j.E(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wo
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.j.E(A.l9.aA(0,A.j.E(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.clT(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Af(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.Q().r
a2=B.a([],l)
a3=new B.aF(a1,A.ai,b7,b7,a2)
a4=g-13
a2.push(new B.aZ(h,a4))
a3.ab()
a5=h+13
a6=g+10
a7=new B.aq(a5,a6)
a2.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a7=h-13
a8=new B.aq(a7,a6)
a2.push(a8)
a9=a3.f
if(a9!=null)a8.ak(a9)
a3.ab()
a8=new B.bv()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.r=A.ay.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aF(a1,A.ai,b7,b7,a2)
a2.push(new B.aZ(h,a4))
a1.ab()
a0=new B.aq(a5,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ak(a3)
a1.ab()
a0=new B.aq(a7,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ak(a3)
a1.ab()
a0=new B.bv()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.H(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aSD.q(0,i)||D.A4.al(0,i)||i==="buck"||i==="regulator")&&!w.tO(e)&&w.Vw(e,0)+w.Vw(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.Q()
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.av.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iH(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.H(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.ms.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=F.yb.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bhX(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bhX(e)){b0=new B.iH(new B.en("+",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.H(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.j.E(b2.r/0.8,0,1)
l=B.ar(M.Nf,F.ZU,b4)
l.toString
k=b2.f
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.gp(0)
j.c=2.4
j.d=A.bw
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H4
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bJT())){b5=A.d.cJ(s,0,new C.bJU())
$.Q()
b9=B.K()
b9.r=D.bgC.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.cs,b7,b7,b7,D.fm8,A.a5,A.bX,b7,A.dz,A.bY)
b0.o5(b8-24)
b0.a5(c2,new B.o(12,10))}},
qS(d,e,f,g,h){var w=null,v=B.fq(w,A.cs,w,w,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
v.a5(d,f)},
cJm(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
e.D(new B.aZ(a0.a,a0.b))
w=C.hF0(a0,a1,a2)
e.D(new B.c5(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aV,F.Mz,A.j.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aH,A.aV,A.j.E(r*1.2,0,1))
u.toString
o=u}else o=A.bq
u=B.K()
u.b=A.a9
u.c=a3?7:5
u.d=A.bw
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.K()
u.b=A.a9
u.c=2.4
u.d=A.bw
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.TO(new B.rv(B.xI(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.iy()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.iy()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.iy()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iy()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.iy()
f=t[u].De(g)
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PC(d,e,f,g){var w,v,u,t
$.Q()
w=B.K()
v=g?A.b7:A.a6
u=g?A.b9:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.Is,null).aK(0,d))
return w},
ay2(d,e,f){return this.PC(d,e,f,!0)},
c6Y(d,e){return this.PC(d,A.bq,A.iC,e)},
aiJ(d,e){var w,v,u
$.Q()
w=B.K()
w.sav(D.aQO.aK(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.enI)
v=e.a2(0,D.enR)
u=B.K()
u.r=A.e6.gp(0)
u.c=1.2
d.ah(w,v,u)},
clT(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.Q(),c0=B.K()
c0.sav(D.c5E.aK(0,D.f7e))
c0.c=3.4
c0.d=A.bw
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.oq
c1.bZ(D.f72,w)
if(c3){w=B.bl(D.f7c,A.jK)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hkm(c2)
c1.ah(new B.o(-u,0),D.epj,c0)
c1.ah(D.emo,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.ms.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bG8(c1,c2)
break
case"solar":r=B.bl(D.f75,A.ix)
c1.am(r,b3.PC(new B.a1(r.a,r.b,r.c,r.d),A.db,A.bP,!1))
b9=B.K()
w=B.ar(D.bkw,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.btM,A.mR,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a9(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9l))
c1.ar(D.a9l,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.Q()
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=A.cu.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aF($.Q().r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dy.j(0.9).gp(0)
c1.N(D.ems,4+4*w,b9)
break
case"crank":o=B.bl(D.f6R,A.fK)
c1.am(o,b3.ay2(new B.a1(o.a,o.b,o.c,o.d),A.bv,A.bK))
b9=B.K()
b9.sav(D.aQP.aK(0,B.bX(A.I,12)))
c1.N(A.I,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cu.gp(0)
b9.c=5
b9.d=A.bw
c1.ah(A.I,n,b9)
b9=B.K()
b9.sav(D.eyO.aK(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiJ(c1,D.epb)
b3.aiJ(c1,D.emd)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ai,b4,b4,B.a([],w))
v.D(new B.aZ(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bv())
m=B.K()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bo(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aF(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c5(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c5(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bv()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.eyw.aK(0,B.bX(A.I,4.5)))
c1.N(A.I,4.5,b9)
break
case"switch":o=B.bl(D.f6Y,A.mv)
b9=B.K()
b9.sav(D.asO.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiJ(c1,D.TX)
b3.aiJ(c1,D.aLA)
h=c2.w?D.aLA:H.aLr
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bw
c1.ah(D.TX,h,b9)
b9=B.K()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bw
c1.ah(D.TX,h,b9)
b9=B.ks(D.TX,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bl(D.aRw,D.aQT)
b9=B.K()
b9.r=A.fF.j(0.25).gp(0)
c1.am(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.am(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cF,c2.fx).gp(0)
c1.ah(D.aLU,D.aLy,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aLU,D.epF,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.enf,D.aLy,b9)
b9=B.K()
b9.r=A.dO.gp(0)
c1.N(A.I,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.fI[f]*22,0),20,9)
c1.am(B.bl(e,A.hP),b3.PC(e,A.cZ,A.o8,!0))}break
case"pot":b9=B.K()
b9.sav(D.eyG.aK(0,B.bX(A.I,21)))
c1.N(A.I,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.eyu.aK(0,B.bX(A.I,13)))
c1.N(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aV.gp(0)
k.c=3
k.d=A.bw
c1.ah(new B.o(b9*3,w*3),new B.o(v*12,m*12),k)
break
case"resistor":a1=B.bl(D.aRw,D.aQT)
b9=B.K()
b9.sav(D.c8U.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aV.gp(0)
c1.ar(D.f7q,b9)
b9=c2.r
b3.qS(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.eoE,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dy.j(0.55*w).gp(0)
v.y=A.wo
c1.N(H.vm,34,v)}o=B.bs(D.el7,12,18)
c1.am(B.bl(o,A.hP),b3.PC(o,A.bq,A.ea,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.r=A.ds.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Mp
else{v=B.ar(A.ea,A.i5,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G2
else{m=B.ar(A.db,A.dy,c2.fx)
m.toString}w.sav(new B.c_(A.tM,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bX(A.tm,17)))
c1.N(A.tm,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tm,17,w)
b9=b9.r
w=x.v
m=new B.aF(b9,A.ai,b4,b4,B.a([],w))
m.D(new B.aZ(-9,-12))
m.D(new B.c5(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.epz,D.epB,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.en8,D.enb,v)
w=B.a([],w)
a4=new B.aF(b9,A.ai,b4,b4,w)
a4.D(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aU
else{w=B.ar(A.db,D.blx,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bHV
c1.N(A.tm,30,v)}w=B.K()
w.r=A.ea.gp(0)
w.c=2.4
c1.ah(D.epH,D.epG,w)
w=B.K()
w.r=A.ea.gp(0)
w.c=2.4
c1.ah(D.enh,D.eng,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ai,b4,b4,B.a([],w))
a6.D(new B.aZ(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c5(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bv())
v=B.K()
if(t)m=A.jl
else{m=B.ar(A.ej,D.bng,c2.fx)
m.toString}if(t)k=A.kP
else{k=B.ar(A.kq,A.ay,c2.fx)
k.toString}v.sav(new B.a9(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f6i))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jX.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.er.gp(0)
c1.ar(D.f6o,v)
w=new B.aF(b9,A.ai,b4,b4,B.a([],w))
w.D(new B.aZ(-7,-4))
w.D(new B.c5(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.am(B.bl(a7,A.hQ),b3.ay2(a7,A.am,A.aO))
b9=B.K()
b9.r=A.cq.gp(0)
c1.ar(D.f5S,b9)
b9=B.K()
b9.r=A.cu.gp(0)
c1.ar(D.f5U,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLm,15,7)
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.r=A.cF.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.I,3,w)
b9.restore()
b3.qS(c1,"M",D.epa,A.as,14)
break
case"buzzer":a8=B.bs(A.I,42,42)
b9=B.K()
b9.sav(D.eyK.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.I,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.I,6,b9)
b3.qS(c1,"+",D.ep3,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bX(A.I,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cC(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bl(D.f6U,A.hQ)
w=B.K()
w.sav(D.c6B.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ai,b4,b4,w)
a9.D(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c5(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.Q()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bmg.j(0.5*b9).gp(0)
w.y=A.kU
c1.af(a9,w)}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bw
b9.r=B.ar(A.m4,Aa.yj,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bl(a7,A.hQ)
w=B.K()
w.sav(D.c5w.aK(0,a7))
c1.am(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f6x,w)
for(p=0;p<4;++p){b0=new B.iH(new B.en("\u2212",b4,b4,A.cJ,b4,b4,b4,b4,b4,b4,new B.H(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jg(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.am(B.bl(b1,A.hP),b3.c6Y(b1,!1))
b9=38*c2.fx
w=18-b9
$.Q()
v=B.K()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qS(c1,"1F",H.vm,A.c,11)
break
case"radio":a1=B.bl(D.a9l,A.fK)
b9=B.K()
b9.sav(D.c99.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.o8.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bl(D.f6V,A.ix)
w=B.K()
w.r=A.dT.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=A.m4.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.h_:A.ob).gp(0)
c1.ar(D.f5Z,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.K()
w.r=A.bC.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aQP.aK(0,B.bX(D.a8i,6)))
c1.N(D.a8i,6,b9)
b9=B.K()
b9.r=A.o8.gp(0)
c1.N(D.emn,4,b9)
b9=B.K()
b9.r=A.ea.gp(0)
b9.c=1.8
c1.ah(D.emi,D.aLF,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLF,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.b=A.a9
v.c=1.4
v.r=A.nt.j(0.7).gp(0)
c1.cC(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bl(D.f74,A.hQ)
v=B.K()
v.r=M.nx.gp(0)
c1.am(w,v)
b2=B.bl(D.f71,A.hP)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nP(b2),$.np(),!0)
b9.translate(-33,-21)
L.hgj(c1,D.fdP,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b4.gp(0)
c1.N(D.emz,1.6,b9)}else{w=B.K()
w.r=D.w7.gp(0)
c1.am(b2,w)
b9=new B.aF(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bv.gp(0)
c1.ar(D.f6n,b9)
break}C.iqC(c1,c2,b3.b.d,b3.gcbx())
if(t)b3.qS(c1,"\u2716",D.epK,A.ay,14)
if(s)c1.c.restore()},
bG8(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.am(B.bl(w,A.mv),o.ay2(w,A.db,A.jj))
v=new B.a1(-22,-13,22,13)
$.Q()
u=B.K()
u.sav(D.asH.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.dX.gp(0)
d.ar(D.f6H,u)
t=new B.a1(28,-5,34,5)
d.am(B.bl(t,A.hz),o.PC(t,A.db,A.iC,!0))
o.qS(d,"+",D.elZ,A.aV,11)
o.qS(d,"\u2212",D.epc,A.ab,11)
o.qS(d,B.w(n===A.j.iY(n)?A.j.V(n):n)+"V",D.eoT,A.aV,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.ar(D.f6G,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qS(d,"FLAT",D.eoD,A.c0,9)}if(n>2){u=B.K()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.elg,D.aLe,u)
o.qS(d,n>3?"3 cells":"2 cells",D.eoS,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bl(r,A.mv)
$.Q()
s=B.K()
s.sav(D.c8I.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.cX.gp(0)
d.ar(D.f6I,s)
for(q=0;q<2;++q){p=F.aCg[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.sav(D.aQO.aK(0,B.bX(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qS(d,"9V",D.eoL,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bl(r,A.ix)
$.Q()
s=B.K()
s.sav(D.asH.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.bi.gp(0)
d.ar(D.f73,s)
for(q=0;q<2;++q){u=B.bl(B.bs(new B.o(F.IE[q],-20),8,10),A.hz)
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.cu.gp(0)
d.am(u,s)}o.qS(d,"+",D.em7,A.ay,10)
o.qS(d,"12V",D.eoP,A.as,15)}},
aE(d){return!0}}
C.mW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tY(o,r,q,p)
n.as0(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctg(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alX(m,u[1],l,u[3])}}}
C.ajM.prototype={
S(){var w=x.N
return new C.ajN(A.I,A.az,B.T(w,x.gl),B.aR(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.ajN.prototype={
afa(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJx(w,d))
w.as=B.cy(A.lI,new C.bJy(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvN()},
a0N(d,e){return this.cjO(d,e)},
b37(d){return this.a0N(d,!1)},
cjO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0N=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rQ:A.yw
p=d.b
w=3
return B.b(L.hgG(s,r,p,d.ax<3.2,q,$.qC().h(0,p).b),$async$a0N)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0N,v)},
cwx(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJz()),t=J.cC(u)
t.J(u,v)
t.bt(u,new C.bJA(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a26(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iJ,new C.bJB(w,u,d))}},
a0t(d){return this.ci9(d)},
ci9(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.irP(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0t)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
a26(d){return this.cu6(d)},
cu6(d){var w=0,v=B.j(x.H),u=this,t
var $async$a26=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bJv(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a26)
case 2:return B.h(null,v)}})
return B.i($async$a26,v)},
Y(){this.a3()
this.bi6()
this.me()},
bi6(){this.a.c.e=new C.bJQ(this)},
mw(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vI(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.ms.h(0,s.b)
if((r==null?null:r.b)!==D.Av)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0N(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cN.ai()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cN.aw(800),"",90,0,0.1,o)
if(A.cN.ai()<0.35)G.dE(300+A.cN.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cN.ai()<0.4
else u=!1
if(u)G.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dE(330+A.o.F(110*A.j.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.j.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cN.ai()<0.5
else u=!1
if(u)G.dE(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dE(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dE(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bJR())},
bab(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.ms.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3O(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bP(w,w.gI(0),v.k("bP<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.ms.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJn(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.ms.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.ms.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hF0(new B.o(k,n),new B.o(i,l),p)
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
af8(){this.a.toString
this.m(new C.bJ_())},
bsr(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dbR[v]
if(!A.d.aV(p.a.c.a,new C.bJS(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jz:o
s=s?Q.Jz:o
q=t.al6(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.af8()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sl[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fO(w,A.o.aq(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3D(s,!0))
n.a.toString
if(t)w.push(n.b3D(r,!0))
w.push(B.E(B.cs(new C.bJP(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b3D(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qC()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AP,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nU,p,p,p)],n),A.m,p,A.bb,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bF(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.oo,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJ0(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.hb,p,p,A.aL,!1),A.f,p,p,new B.p(I.BM,p,new B.bF(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b1_(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.p(F.aft,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alw,w,w,w)},
clU(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qC().h(0,o),m=d.dy,l=d.fr,k=new C.bJj(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KG,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aG(p,p,p,p,D.bXC,p,p,p,new C.bJ6(q,d),p,p,p,p,"Remove part",A.cf),B.aG(p,p,p,p,A.PS,p,p,p,new C.bJ7(q),p,p,p,p,p,A.cf)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EK,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fvl,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.ax,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aV,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bg_(d)
if(v!=null){l=(d.x?A.ay:A.av).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.av).j(0.5),A.r,1)
m.push(new B.D(A.hU,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fC6,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.hem(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJ8(q,d,u),p,h,p))}l=B.bU(A.bG,l,A.bs,p,4,6)
l=B.a([A.an,l,A.ax,B.d(q.a.c.tO(d)?"Showing: "+F.Rj[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hj,p,p,p)],g)
if(q.a.c.tO(d))l.push(new E.fB(A.Hx,"Open big screen",new C.bJb(q,d),h,p))
A.d.v(m,l)}if(D.ms.al(0,o)&&!C.hem(o)){l=B.a([A.an,B.d(q.a.c.tO(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hj,p,p,p)],g)
if(q.a.c.tO(d))l.push(new E.fB(A.PA,"Open the "+$.qC().h(0,o).b,new C.bJc(q,d),h,p))
A.d.v(m,l)}if(D.ms.al(0,o))A.d.v(m,B.a([A.an,new E.fB(A.CT,"Make it bigger (or tap it 4 times)",new C.bJd(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tO(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fwc,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.duc[s]
j=r===A.j.iY(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJe(q,d,r),p,h,p))}i.push(new B.D(A.lg,B.bU(A.bG,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fV5)
A.d.v(m,i)}if(q.a.c.Mf(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Af(d),2)
i=q.a.c
w=i.aoI(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoI(d)?A.c0:A.ev,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.j.E(d.cx/q.a.c.Af(d),0,1)
i=q.a.c.aoI(d)?A.ay:A.b4
m.push(new B.D(A.hU,B.x(B.a([l,A.cU,B.by(j,B.kn(A.bA,p,p,5,p,w,new B.lM(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hU,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fpS,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dj1[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJf(q,d,r),p,h,p))}m.push(B.bU(A.bG,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d9_[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJg(q,d,r),p,h,p))}m.push(B.bU(A.bG,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJh(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJi(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJ9(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJa(d)))
if(o==="crank")m.push(D.fQm)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hj,p,p,p))
return q.b1_(new B.cR(D.b64,B.cg(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcQ.prototype={}
C.Wb.prototype={
S(){return new C.aEV(C.hkl(),new B.cw(null,x.q),B.aR(x.S))}}
C.aEV.prototype={
Y(){this.a3()
$.aW.c1$.push(this)
this.af9()},
af9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fJ4(),$async$af9)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ir0(t.d,r)
if(s!=null){t.m(new C.e09(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$af9,v)},
Fu(){var w,v=this
if(!v.as)return
w=C.igT(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bG9(w)},
jl(d){if(d!==A.fQ)this.Fu()},
t(){$.aW.hV(this)
this.Fu()
this.a4()},
cbz(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e0i(q),u).gI(0)
s=new B.Y(v,new C.e0j(),u).gI(0)
r=new B.Y(v,w.gcYS(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e0k(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fu()
if(A.o.F(q.w,10)===0){w=q.f
$.aiW()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiW()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JJ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e0l())
q.Fu()
w=q.c
w.toString
w=B.Yv(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiW()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m9,p,p,p,p,p,p,p,p,p,p))}},
ahV(){var w=0,v=B.j(x.H),u=this,t
var $async$ahV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e08(u),t,null,!0,!0,x.H),$async$ahV)
case 2:return B.h(null,v)}})
return B.i($async$ahV,v)},
b0Z(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b0Y(d,e,f,g){return this.b0Z(d,e,f,g,null)},
asH(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e3,new B.dp(1,A.cr,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agf(){var w=0,v=B.j(x.H),u=this,t
var $async$agf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).cd(B.eb(new C.e04(u),!1,null,x.H)),$async$agf)
case 2:t=u.e.gbk()
if(t!=null)t.bi6()
if(u.c!=null)u.m(new C.e05())
u.Fu()
return B.h(null,v)}})
return B.i($async$agf,v)},
bJg(){var w,v,u,t,s=null,r=this.f
$.aiW()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.ay
u=B.m(9)
t=B.L(I.BM,A.r,1.5)
return B.q(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xk,s,s,s),s,s,s),A.f,s,D.b6b,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f4,s,s,s)},
aj4(){var w=0,v=B.j(x.H),u=this,t
var $async$aj4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mQ,null,new C.e0h(u),t,!0,!0,!0,A.ke,!1,!1,x.H),$async$aj4)
case 2:return B.h(null,v)}})
return B.i($async$aj4,v)},
cbA(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.bYS,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0n(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bbX,A.f,r,r,new B.p(A.bp,r,B.L(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fT5,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eU:A.hs,r,r,r,r,r,r,r,r,11.5,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayY(s.gchR(),r),A.tw,s.b0Y(A.uH,"Construction Lab: real 3D wiring, plumbing and a house",A.cF,new C.e0o(s,d)),s.b0Z(A.lL,"Challenges",A.aV,s.gcz5(),s.bJg()),s.b0Y(A.HB,"How to play",A.aH,new C.e0p(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.an,B.A(B.a([s.asH(A.ov,"Circuits",A.br,s.gcrX()),A.bm,s.asH(A.ot,"Repair",A.aV,new C.e0q(s)),A.bm,s.asH(K.wy,"Clear",A.c0,new C.e0r(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.p(I.BM,r,new B.bF(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bHg,r,r,r)},
B(d){var w=this,v=null
$.atj="tech"
return B.c4(v,A.c3,B.bm(!0,B.x(B.a([w.cbA(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hjb(w.d,w.e,w.gcby(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.ayY.prototype={
S(){return new C.baZ(null,null)}}
C.baZ.prototype={
gayY(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.a_,null,1,null,v)
w.cP(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
t(){this.gayY().t()
this.bx8()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c9(this.gayY(),new C.cKQ(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.baY.prototype={
a5(d,e){var w,v,u,t=null,s=e.ej(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.Q()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.oq
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.eyF.aK(0,B.bX(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fY(A.A,0,6.283185307179586,A.x,D.d_K,t,new B.mJ(p)).aK(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cKP(d)
p.$3(s.a2(0,A.tm),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.ent),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.epR),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.cs,t,t,t,D.fme,A.a5,A.bX,t,A.dz,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.o(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.azi.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvM()}}
C.aLo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzw.prototype={}
C.fQ.prototype={}
C.Kc.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mt.prototype={}
C.VV.prototype={
S(){return new C.blA(null,null)}}
C.blA.prototype={
gaai(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.on,null,1,null,v)
w.cr(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
t(){this.gaai().t()
this.byZ()},
gSA(){var w=this.gaai().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.ms.h(0,this.a.c)
if(v==null)v=D.aRO
return B.c4(w,X.Zy,B.bm(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.at(v.b===D.Ax?this.bLn(v):this.coI(v),w,w,w),B.ap(w,B.aG(w,w,w,w,A.n5,w,w,w,new C.dXj(d),w,w,w,B.o_(w,A.aU,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fnX,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbB(d){var w
switch(d.a){case 1:w=0.46153846153846156
break
case 2:w=0.45
break
case 3:w=0.9259259259259258
break
case 4:w=0.75
break
default:w=0.7317073170731708
break}return w},
coI(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9u
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(this.gaai(),new C.dXi(this,w,d,o),q)
if(p===D.a9v)v=new B.BH(D.bHU,v,q)
p=this.cbB(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fF(p,B.q(q,B.q(q,v,A.f,q,q,new B.p(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A_.H2,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a9(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bBi,new B.R(u,u,u,u),q,q,q),q)},
b9k(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.j.bh(this.gSA()*0.4),0,100),q=d.b===D.a9u,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b0(A.o.u(B.dg(s)),2,"0")+":"+A.a.b0(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tF,t,t,t),A.b5],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.q(t,t,A.f,t,t,new B.p(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bHB,t,t,t,3))}n.push(A.de)
n.push(D.fLD)
n.push(A.bm)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bL(A.a6,t,t,B.BV(A.A,B.q(t,t,A.f,t,t,new B.p(A.b4,t,t,B.m(2),t,t,A.n),t,t,t,A_.H2,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r4)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fCt,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.m,t,A.e,A.i,0,t,t),t)},
awR(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dp6,new B.a9(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.fsM,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dXe(this,d),v,v,v,v,v,v,!1,A.a4)},
c1U(d,e){return this.awR(d,e,!0)},
c1B(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aRP||n===D.Er,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.km,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b9k(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aT,A.r,1)
w=B.aA(o,B.q(o,B.by(B.m(23),B.b4(o,o,o,new C.afB(0,p.gSA(),o),A.fL),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.hV,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dXc(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kx[s]
t.push(new B.cf(A.A,o,o,p.c1U(r,m?58:54),o))}k=B.a([k,A.an,w,A.af,B.E(B.kU(0.92,t,v,8,12,A3.wj,o,!1),1)],u)
if(n!==D.a9v){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cW(F.kx,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bP(v,v.gI(0),t.k("bP<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awR(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.m,o,A.qS,A.i,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bCb,H.amX,o,o,o))}return B.q(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a9(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEM(d,e){var w=null
return B.q(w,B.x(B.a([this.b9k(d),B.E(B.b4(w,w,w,new C.afB(e,this.gSA(),w),A.fL),1),B.aA(w,B.q(w,B.at(B.d(F.kx[e].a,w,w,w,w,w,w,A.Ku,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dX7(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLn(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fF(1.5384615384615383,B.q(t,B.c9(this.gaai(),new C.dXa(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a9(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bHa,new B.R(8,8,8,s),t,t,t),t)}}
C.bxy.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.Q()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.km,0.4)
t.toString
w.sav(new B.a9(A.aA,A.aF,A.x,B.a([u,A.dx,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.T,A.P)
t.r=v.j(0.1).gp(0)
t.y=D.bHZ
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.afB.prototype={
a5(d,e){return L.M2(d,e,this.b,this.c)},
aE(d){return!0}}
C.aNa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bwk.prototype={}
C.a9g.prototype={
B(d){var w=null
return B.c4(B.eH(w,w,w,!0,!0,D.ai1,w,1,!0,w,0,!1,w,!1,w,w,B.aG(w,w,w,w,K.arE,w,w,w,new C.cm8(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h0W,w,w,w,1,w,!0),D.ai1,B.cl(B.a([D.erj,B.cs(new C.cm9())],x.p),w,w,D.bDg,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Xv.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGo(w,new B.au(A.aw,$.aw()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aGo.prototype={
Y(){this.a3()
this.me()},
b7c(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mw(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7c(v.f)
if(w!==v.x){v.x=w
E.mr("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eTI(v))
C.JJ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdi(){if(this.d.length<2)return
this.m(new C.eTE(this))},
b1w(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eTD(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdh(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxK(p,s.f,r),A.fL),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fAA,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBq[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.aA(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fzP,r,r,r),A.f,r,r,new B.p(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.hd,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eTG(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lA(A.aV,A.f6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bt(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kh,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eTH(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fB(A.hW,"Add",s.gcdf(s),A.c,r),A.bm,new E.fB(A.ou,"Spin",q,A.b4,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bxK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.Q()
w=B.K()
w.r=D.big.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.a9
w.c=3
w.r=A.aV.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=D.aBq[A.o.F(r,8)].gp(0)
d.cC(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cC(o,q,u,!0,p)
J.bo(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aC(p,0,11)+"\u2026"
n=new B.iH(new B.en(p,l,l,A.cJ,l,l,l,l,l,l,D.fn3),A.a5,A.bX,new B.jg(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahF.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aV.gp(0)
d.N(g,20,i)
m=new B.aF(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.D(new B.aZ(j,h+26))
h-=10
m.D(new B.aq(j-14,h))
m.D(new B.aq(j+14,h))
m.D(new B.bv())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.aU.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.Wj.prototype={
S(){return new C.blL($,A.bE,0,B.a([],x.X),null,null)}}
C.blL.prototype={
Y(){this.a3()
this.me()},
mw(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JJ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UE(900,new C.e38())}w.m(new C.e39())},
b1y(d){return this.m(new C.e33(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.u(A.j.aq(m,60)),2,"0")
v=A.a.b0(A.o.u(A.o.F(A.j.cL(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsr(l,A.c0,n),A.aTj)
u=B.d(w+":"+v,n,n,n,n,n,n,D.frH,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fqH,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vx,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dm3[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e35(o,q),n,A.c0,n))}m=o.f
p=m?A6.uP:A.hw
m=m?"Pause":"Start"
return E.lA(A.c0,A.f6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fB(p,m,new C.e36(o),A.b4,n),new E.fB(A.ox,"Reset",new C.e37(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bsr.prototype={
a5(d,e){var w,v,u,t,s=e.ej(A.I),r=e.a/2-14
$.Q()
w=B.K()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bX(s,r)
v=B.K()
v.b=A.a9
v.c=16
v.d=A.bw
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bX(s,r)))
d.cC(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.Vw.prototype={
S(){return new C.blm($,A.bE,0,B.a([],x.X),null,null)}}
C.blm.prototype={
Y(){this.a3()
this.me()},
mw(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T1.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dOQ())
u=A.j.F(p.f,v)
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
E.mr("flute",D.c9Y[t]+5,1400,0.35)}p.m(new C.dOR())},
gcdl(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L0("Press Start",0.5)
w=D.T1.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dOL())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L0("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new B.L0("Hold",1)
case 2:return new B.L0("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new B.L0("Hold",0.5)}}}return new B.L0("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdl(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hq.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hq.j(0.35),A.I,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pT,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kh,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.T1.gev(D.T1));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dOO(r,v),q,A.hq,q))}w=r.e
v=w?A.zl:A.hw
w=w?"Stop":"Start"
o.push(new E.fB(v,w,new C.dOP(r),A.b4,q))
return E.lA(A.hq,A.f6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJO.prototype={}
C.Wa.prototype={
S(){return new C.blC(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.blC.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aG(s,s,s,s,K.oF,s,s,s,new C.e_E(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.em(B.aA(s,B.b4(s,s,s,new C.bnE(t.e,t.x,s),A.fL),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e_F(t),new C.e_G(t),s,s,s,s,s,s,s,s,s,new C.e_H(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d1g[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G1(v,u,new C.e_I(t,v),!1,s))}u=t.r
return E.lA(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bD,""+A.j.V(u),"Brush",30,2,new C.e_J(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e_K(t),A.CG,A.bD,s),new E.fB(A.pu,"Undo",new C.e_L(t),A.c,s),new E.fB(A.eh,"Clear",new C.e_M(t),A.c,s),new E.fB(A.Pn,"Paper",new C.e_N(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bnE.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.Q()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bw
q.e=A.dP
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aF(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c5(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gan(n).a,A.d.gan(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aE(d){return!0}}
C.WT.prototype={
S(){var w=x.S
return new C.aFI(B.aR(w),B.aR(w))}}
C.aFI.prototype={
Y(){this.a3()
this.aub()},
aub(){var w,v,u=this,t=x.N,s=B.bq(D.drf,!0,t)
A.d.Do(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Do(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdg(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mr("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eqy(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gan(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mU,new C.eqz(s,v,u),t)
else{s.x=!0
B.bQ(Ac.GE,new C.eqA(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VA,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yI,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aV:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iR,A.i,0,q,q),q),B.E(B.im(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.eqE(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d2Q[t]
o.push(new E.dW(s.b,r.d===s.a,new C.eqF(r,s),q,A.aH,q))}o.push(new E.fB(K.aqc,"New game",new C.eqG(r),A.b4,q))
return E.lA(A.aH,A.f6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.X2.prototype={
S(){return new C.aG2(B.a([],x.t))}}
C.aG2.prototype={
cdk(d){A.d.a8(this.d)
this.w=!0
this.b1x()},
b1x(){this.d.push(A.cN.aw(4))
this.e=0
this.a_R()},
a_R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eBk(t))
s=x.H
w=3
return B.b(B.bQ(A.lH,null,s),$async$a_R)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVl(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_R)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eBl(t))
case 1:return B.h(u,v)}})
return B.i($async$a_R,v)},
aVl(d){this.m(new C.eBi(this,d))
E.mr("marimba",D.c9X[d]+5,450,0.55)
B.bQ(A.GC,new C.eBj(this),x.H)},
cdm(d){var w,v,u=this
if(!u.w||u.r)return
u.aVl(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eBm(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eBn(u))
B.bQ(A.hF,new C.eBo(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aVP,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fAZ,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAj[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aAj[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cT(p,p,p,p,A.b3,new B.p(u,p,new B.bF(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jm,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBp(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ac,B.x(B.a([o,A.an,n,A.d8,new B.fF(1,B.kU(1,l,2,12,12,p,A.dW,!1),p)],m),A.m,p,A.bb,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lA(A.bi,A.f6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fB(A.hw,n,q.gcdj(q),A.b4,p)],m),p,p))}}
C.Xm.prototype={
S(){return new C.bmS(new B.au(A.aw,$.aw()))}}
C.bmS.prototype={
axK(d){return B.p4(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.ePb(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d1(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.ePk()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A8.xJ),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b4C),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lU,"Bill amount",!0,!0,!1,m,m,m,m,D.fyl,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e9,m,m,m,1,m,m,!1,"\u2022",m,new C.ePg(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aUO,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.m(20)
r=B.L(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axK(w)),t.$2("Total","$"+n.axK(v)),A4.NG,t.$3$big("Each of "+n.f+" pays","$"+n.axK(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fs,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cOb[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.ePh(n,o),m,A.b4,m))}l=n.f
return E.lA(A.b4,A.f6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aH,""+l,"People",20,1,new C.ePi(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.ePj(n),m,A.aV,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.WS.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmm(w,A.cN,$,A.bE,0,B.a([],x.X),null,null)}}
C.bmm.prototype={
Y(){this.a3()
this.me()},
mw(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Xo("snare",0,0.5)}u.m(new C.epd())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mr("bell",24,400,0.5)}u.m(new C.epe())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfe(v,o.r>0,n))}u=B.aA(n,B.at(B.bU(A.fO,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ep6(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.cZ,A.r,6)
s=B.a([new B.ac(0,A.G,A.aV.j(0.4),A.I,30)],x.V)
u=B.aA(n,B.at(B.ed(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fxw,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eyJ,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ep7(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fmw,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kh,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ep8(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.djf[r]
v.push(new E.dW(q.b,o.d===q.a,new C.ep9(o,q),q.c,A.br,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.br,""+s,"Dice",4,1,new C.epa(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.br,""+s,"From",100,1,new C.epb(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.br,""+p,"To",1000,2,new C.epc(o),p)],m))}return E.lA(A.br,A.f6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.Q,0,A.p))}}
C.bfe.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cN.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dDc.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,O.aet,p,18,p,p,p,p,p,18),p))
return B.eM(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bF,p,p,100),p)}}
C.aMZ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzs.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byN()}}
C.aNh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzy.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bz6()}}
C.aNK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzH.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzA()}}
C.aOa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzQ.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bA0()}}
var z=a.updateTypes(["P(tY)","~()","P(a5p)","aB<~>()","P(D3)","G(tY,G)","F(F,tY)","P(D_)","P(a_q)","P(acp)","P(a4g)","P(nI)","Xn()","Vv()","a9g()","WY()","Xc()","WZ()","P(mW)","VA()","afU(Z,G)","aeM(Z,G)","~(a8<@,@>)","G(D_,D_)","n(eh)","P(afI)","P(a1F)","P(De)","P(acU)","P(aeP)","P(acD)","G(G,r9)","G(G,D3)","n(r9)","~(r9,ai<n>,G)","r9?(D3)","WS()","v(n,a1s)","P(abi)","~(B7)","Xq()","~(uK,n,o,u,F)","~(n,tY)","Wb()","WC(Z)","Oa(Z)","VV(Z,bw<F>,bw<F>)","Xv()","Wj()","Vw()","Wa()","WT()","X2()","Xm()","P(r9)"])
C.fJs.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fyc.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fFR.prototype={
$1(d){var w
if(!this.a.Mf(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fFS.prototype={
$1(d){return d.x},
$S:z+0}
C.fJp.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fJq.prototype={
$1(d){var w
if(!this.a.Mf(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fJr.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eil.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eim.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ein.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iI)}},
$S:7}
C.eiy.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eiz.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eiu.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eis.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dv(0,0,0,d,0,0),new C.eit(w,this.b,e)))},
$S:1901}
C.eit.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eiv.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWZ().al6(0,u[1],u[2],u[3])
u[4].bO(0,new C.eiq(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eir(w.a,v,w.f,w.r))},
$S:0}
C.eiq.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:186}
C.eir.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eiw.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWZ().alX(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eip(w.a,v,w.e,w.f))},
$S:0}
C.eip.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eix.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.eio(w,this.b))},
$S:0}
C.eio.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eiC.prototype={
$0(){var w=this.a
return w.m(new C.eiB(w))},
$S:0}
C.eiB.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eiD.prototype={
$0(){var w=this.a
return w.m(new C.eiA(w))},
$S:0}
C.eiA.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eiE.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PK()},
$S:0}
C.eiF.prototype={
$0(){return this.a.Z3(this.b)},
$S:0}
C.eiG.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYm()},
$S:2}
C.eiH.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYm()},
$S:0}
C.exE.prototype={
$2(d,e){return d+e},
$S:1902}
C.exY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.exX(w,d))},
$S:1903}
C.exX.prototype={
$0(){var w=B.aI(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.exZ.prototype={
$0(){},
$S:0}
C.ey_.prototype={
$0(){},
$S:0}
C.exG.prototype={
$0(){return this.a.m(new C.exF(this.b,this.c))},
$S:0}
C.exF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.exv.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.exw.prototype={
$1(d){return this.a.cx=d},
$S:28}
C.exx.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.exy.prototype={
$1(d){return this.a.cy=d},
$S:28}
C.exz.prototype={
$1(d){return this.a.db===d},
$S:33}
C.exA.prototype={
$1(d){return this.a.db=d},
$S:28}
C.exB.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.exC.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:28}
C.exD.prototype={
$0(){var w=this.a
return w.m(w.gayl())},
$S:0}
C.ext.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.exu.prototype={
$1(d){return this.a.$1(!1)},
$S:112}
C.exs.prototype={
$1(d){return this.a.$1(!1)},
$S:145}
C.exR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bj7(o,p),n)
w=this.b
v=C.bC3("WORLD",w.a,w.c)
u=C.bC3("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.c0:A.b4
t=C.bC3("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Dq[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bC3("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bC3("HEIGHT",""+A.j.V(A.j.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.m,p,A.iR,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bHO(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.t8[w].a+".":"You landed on every world!"
v=B.a([new E.fB(A.oy,"Again",new C.exM(o),A.c,p),new E.fB(A.ot,"Rebuild",new C.exN(o),A.aV,p)],q)
if(o.d+1<7)v.push(new E.fB(A.jF,"Next world",new C.exO(o),A.b4,p))
n.push(C.hy7("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hy7("Crash!",o.at,A.c0,B.a([new E.fB(A.oy,"Try again",new C.exP(o),A.b4,p),new E.fB(A.ot,"Rebuild",new C.exQ(o),A.aV,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:67}
C.exM.prototype={
$0(){var w=this.a
return w.m(w.gayl())},
$S:0}
C.exN.prototype={
$0(){var w=this.a
return w.m(new C.exJ(w))},
$S:0}
C.exJ.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exO.prototype={
$0(){var w=this.a
return w.m(new C.exI(w))},
$S:0}
C.exI.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.exP.prototype={
$0(){var w=this.a
return w.m(w.gayl())},
$S:0}
C.exQ.prototype={
$0(){var w=this.a
return w.m(new C.exH(w))},
$S:0}
C.exH.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exS.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.exL(v,w))},
$S:0}
C.exL.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.exT.prototype={
$1(d){return this.a.y=d},
$S:9}
C.exU.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.exV.prototype={
$1(d){return this.a.z=d},
$S:9}
C.exW.prototype={
$0(){var w=this.a
return w.m(new C.exK(w))},
$S:0}
C.exK.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dOJ.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.hti(),C.htj()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cO(J.t(r,1)))
q.m(new C.dOI(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dOI.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOj.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOk.prototype={
$0(){return this.a.bZF(B.aT(J.t(this.b,"group")))},
$S:0}
C.dOl.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOm.prototype={
$1(d){return A.a.b0(A.o.ft(A.o.E(A.j.V(d*255),0,255),16),2,"0")},
$S:285}
C.dOK.prototype={
$0(){return E.Xo("kick",0,0.25)},
$S:0}
C.dOn.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dOo.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOp.prototype={
$0(){return E.Xo("kick",0,0.5)},
$S:0}
C.dOq.prototype={
$0(){return G.dE(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dOs.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.W(0,u)
else{v.J(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dOr(u)))u.cy=null
u.id=0},
$S:0}
C.dOr.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAa(d)},
$S:z+10}
C.dOg.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dOh.prototype={
$0(){var w=this.a
return w.m(w.gc9i())},
$S:0}
C.dOi.prototype={
$0(){return this.a.aez(null)},
$S:0}
C.dOz.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dOA.prototype={
$0(){return this.a.cFI(this.b.a)},
$S:0}
C.dOB.prototype={
$0(){return this.a.aez(this.b)},
$S:0}
C.dOC.prototype={
$1(d){var w=this.a
return w.m(new C.dOy(w,d))},
$S:6}
C.dOy.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dOD.prototype={
$0(){var w=this.a
return w.m(new C.dOx(w,this.b))},
$S:0}
C.dOx.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dOE.prototype={
$0(){var w=this.a
return w.m(new C.dOw(w))},
$S:0}
C.dOw.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dOF.prototype={
$0(){var w=this.a
return w.m(new C.dOv(w))},
$S:0}
C.dOv.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LL},
$S:0}
C.dOG.prototype={
$0(){var w=this.a
return w.m(new C.dOu(w))},
$S:0}
C.dOu.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b07()
else w.p3=null},
$S:0}
C.dOH.prototype={
$0(){var w=this.a
return w.m(new C.dOt(w))},
$S:0}
C.dOt.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6c.prototype={
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
$S:327}
C.c6d.prototype={
$1(d){var w=new B.r6([],[]).oL(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:349}
C.fru.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:215}
C.frv.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:215}
C.frw.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:215}
C.frD.prototype={
$1(d){return!J.t(d,0)},
$S:215}
C.frE.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:215}
C.frF.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:215}
C.dQo.prototype={
$1(d){return this.a.av_(0)},
$S:7}
C.dQ2.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.igh(),B.U(w).k("N<1,G>")).fM(0)},
$S:0}
C.dQ5.prototype={
$1(d){return""+d},
$S:78}
C.dQp.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQ0.prototype={
$1(d){return this.a.av_(this.b)},
$S:7}
C.dQ1.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayP(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mM(0,d,a1.mf(0.15,0.3))
u=a1.mM(0,d,a1.mf(0.15,0.62))
t=a1.mM(0,"and",a1.mf(0.48,0.46))
s=a1.mM(0,a0,a1.mf(0.82,0.46))
a1=t.a
w.push(new C.nI(v.a,a1,0))
w.push(new C.nI(u.a,a1,1))
w.push(new C.nI(a1,s.a,0))
break
case 1:v=a1.mM(0,d,a1.mf(0.12,0.25))
u=a1.mM(0,d,a1.mf(0.12,0.65))
r=a1.mM(0,"xor",a1.mf(0.46,0.25))
q=a1.mM(0,"and",a1.mf(0.46,0.65))
p=a1.ayO(0,a0,a1.mf(0.82,0.25),0)
o=a1.ayO(0,a0,a1.mf(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nI(a1,n,0))
m=u.a
w.push(new C.nI(m,n,1))
l=q.a
w.push(new C.nI(a1,l,0))
w.push(new C.nI(m,l,1))
w.push(new C.nI(n,p.a,0))
w.push(new C.nI(l,o.a,0))
break
case 2:k=a1.mM(0,"clock",a1.mf(0.15,0.4))
j=a1.mM(0,"not",a1.mf(0.45,0.65))
s=a1.mM(0,a0,a1.mf(0.82,0.3))
i=a1.mM(0,"buzzer",a1.mf(0.82,0.65))
a1=k.a
w.push(new C.nI(a1,s.a,0))
n=j.a
w.push(new C.nI(a1,n,0))
w.push(new C.nI(n,i.a,0))
break
default:h=a1.mM(0,d,a1.mf(0.12,0.25))
g=a1.mM(0,d,a1.mf(0.12,0.7))
f=a1.mM(0,"nor",a1.mf(0.5,0.25))
e=a1.mM(0,"nor",a1.mf(0.5,0.7))
s=a1.mM(0,a0,a1.mf(0.86,0.25))
a1=f.a
w.push(new C.nI(g.a,a1,0))
n=e.a
w.push(new C.nI(n,a1,1))
w.push(new C.nI(h.a,n,0))
w.push(new C.nI(a1,n,1))
w.push(new C.nI(a1,s.a,0))}},
$S:0}
C.dQ6.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayP(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D_(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mM(0,w.e,o.mf(0.86,0.5))},
$S:0}
C.dPW.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dPX.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dPY.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dPZ.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQ_.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adT(this.c)
if(v.ax)C.JJ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQ7.prototype={
$0(){},
$S:0}
C.dQ8.prototype={
$0(){return A.d.cB(this.a.e,this.b)},
$S:0}
C.dQ9.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dQ3(v))
w.cy=null},
$S:0}
C.dQ3.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dPV.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mM(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQi.prototype={
$0(){var w=this.a
return w.m(new C.dQh(w))},
$S:0}
C.dQh.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQj.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.jl(B.b4(w,w,w,new C.bd7(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQc(v),w,w,w,new C.dQd(v),new C.dQe(v),new C.dQf(v),w,w,w,w,w,w,w,w,w,w,new C.dQg(v),w,w,w,!1,A.a4)},
$S:37}
C.dQg.prototype={
$1(d){return this.a.cb2(d.b)},
$S:72}
C.dQe.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ck1(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azG(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:49}
C.dQf.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.j.E(w.a+u.Q.a,46,u.x.a-46),A.j.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQd.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2a(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dQa(w))
u=t.as
u.toString
v.push(new C.nI(u,w.a,w.b))
B.jU()}}t.z=t.as=null},
$S:38}
C.dQa.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQc.prototype={
$1(d){return this.a.axD(d.b)},
$S:330}
C.dQk.prototype={
$0(){return this.a.bDC(this.b.a)},
$S:0}
C.dQl.prototype={
$0(){return this.a.av_(this.b.a)},
$S:0}
C.dQm.prototype={
$0(){var w=this.a
return w.m(new C.dQb(w))},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
w.ayP(0)
w.ay=null},
$S:0}
C.dQn.prototype={
$0(){return this.a.cBl(this.b)},
$S:0}
C.cVr.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:246}
C.dWm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWl.prototype={
$0(){return this.a.d=null},
$S:0}
C.dWo.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c43()},
$S:131}
C.dWn.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.frV.prototype={
$0(){return K.aKZ},
$S:z+40}
C.frW.prototype={
$0(){return D.dOM},
$S:z+43}
C.frX.prototype={
$0(){return D.dLE},
$S:z+13}
C.frY.prototype={
$0(){return D.ef5},
$S:z+14}
C.frZ.prototype={
$0(){return D.dXZ},
$S:z+15}
C.fs_.prototype={
$0(){return K.aKQ},
$S:z+16}
C.fs0.prototype={
$0(){return D.ecS},
$S:z+17}
C.fs1.prototype={
$0(){return K.aKY},
$S:z+12}
C.fs2.prototype={
$0(){return D.dNU},
$S:z+19}
C.f7k.prototype={
$2(d,e){return new C.afU($.bGw()[e],new C.f7j(e,this.a),null)},
$S:z+20}
C.f7j.prototype={
$0(){var w=this.a,v=I.aIw.h(0,$.bGw()[w].a)
$.atj=v==null?"music":v
B.a6(this.b,!1).cd(B.eb(new C.f7h(w),!1,null,x.H))},
$S:0}
C.f7h.prototype={
$1(d){return $.bGw()[this.a].e.$0()},
$S:39}
C.f7l.prototype={
$2(d,e){return new C.aeM(D.aAW[e],new C.f7i(this.a,e),null)},
$S:z+21}
C.f7i.prototype={
$0(){return this.a.d.$1(D.aAW[this.b])},
$S:0}
C.f70.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f7_.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6Z.prototype={
$1(d){var w=this
return new B.dY(new C.f6Y(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f6Y.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aH(a3,a0,a1).w
a1=B.aH(a3,a0,a1).w
w=x.p
v=B.a([D.fIt,A.ax,D.fPg,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fxP,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EJ,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jv,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EJ,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jv,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dyp[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aS,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bF(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fz,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f6W(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.an,new B.c7(A.aL,A.e,A.i,A.m,a0,A.p,a0,0,l,a0),A.U,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bI(A.AS,a0,new C.f6X(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cR(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A1.yJ,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:101}
C.f6W.prototype={
$0(){var w=this
return w.a.$1(new C.f6V(w.b,w.c,w.d))},
$S:0}
C.f6V.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f6X.prototype={
$0(){var w=this,v=w.a
v.m(new C.f6U(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f6U.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.C(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.C(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.C(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.f78.prototype={
$0(){var w=this.a
return w.m(new C.f77(w))},
$S:0}
C.f77.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f79.prototype={
$0(){return E.uD(this.b,this.a.f,"scene")},
$S:0}
C.f7a.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gan(u),0.4)
u.toString
w=this.a.ga_p().x
w===$&&B.c()
return B.c3(v,new B.p(v,v,v,v,v,new B.c_(D.b26,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bj)},
$S:331}
C.f7b.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.ev(A.A,B.c9(new B.h5(B.a([u.guG(),u.ga_p()],x.dS)),new C.f76(u,this.b,v),w),A.f,A.e2),w,w,w)},
$S:224}
C.f76.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guG().x
r===$&&B.c()
w=r<0.9?1:1-C.btn(r,0.9,0.98)
v=s.ga_p().x
v===$&&B.c()
u=A.dC.aA(0,v)
switch(s.gayQ().a){case 0:s=s.bCN(t.b,r,u,t.c)
break
case 1:s=s.bTI(t.b,r,u,t.c)
break
case 2:s=s.cGc(t.b,r,u,t.c)
break
case 3:s=s.bFJ(t.b,r,u,t.c)
break
case 4:s=s.bJ4(t.b,r,u,t.c)
break
case 5:s=s.cb3(t.b,r,u,t.c)
break
default:s=null}return B.da(s,w)},
$S:204}
C.f7c.prototype={
$2(d,e){var w=B.ab5(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gan(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gan(v),0.4)
v.toString
v=w.cPa(u,A.bA,v,3.5)
u=this.a
w=u.guG().x
w===$&&B.c()
return B.YO(B.kV(null,null,null,1,0,new C.f75(u),A.j.E(w,0,1)),v)},
$S:1905}
C.f75.prototype={
$1(d){var w=this.a
w.guG().sp(0,d)
if(w.as)w.m(new C.f71(w))},
$S:6}
C.f71.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f7d.prototype={
$0(){var w=this.a
w.guG().sp(0,0)
w.aeZ()},
$S:0}
C.f7e.prototype={
$1(d){var w=this.a
w.m(new C.f74(w,d))
if(w.as)w.aeZ()},
$S:6}
C.f74.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f7f.prototype={
$0(){var w=this.a
w.m(new C.f73(w,this.b))
w.guG().sp(0,0)
if(w.as)w.aeZ()},
$S:0}
C.f73.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f7g.prototype={
$0(){var w=this.a
return w.m(new C.f72(w,this.b))},
$S:0}
C.f72.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f6S.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1906}
C.f6T.prototype={
$1(d){return d.b},
$S:1907}
C.dqA.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dqB.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dqx.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dqy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqz.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqC.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqD.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqF.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dqG.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dqH.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dqI.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dqJ.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dqK.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ewZ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewO.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ewQ.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ewR.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ewU.prototype={
$1(d){var w=D.n7.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ewV.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.e9(new B.cM(new B.Y(q,new C.ewW(d),p.k("Y<1>")),new C.ewX(r),p.k("cM<1,r9?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ewW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewX.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ewS.prototype={
$1(d){return D.n7.h(0,d.b).c===D.xD},
$S:z+54}
C.ewT.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exo.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vI(0,u)
w.a7k(A.o.aq(v,1000))},
$S:7}
C.ewY.prototype={
$0(){},
$S:0}
C.ewK.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.aB("String","ngmy_core_reaction_lab_v1",s.a.d.aj())
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:1}
C.ex0.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.U,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n7.h(0,v).b,D.n7.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h_S,w,B.d(D.n7.h(0,v).a,w,w,w,w,w,w,A.fY,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.arI,w,w,w,w,new C.ex_(d),!1,w,w,w,w,w,w,w,D.fS8,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.ex_.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ex2.prototype={
$1(d){var w,v,u,t=null,s=B.aH(d,t,x.l).w,r=B.a([D.er7],x.p)
for(w=0;w<6;++w){v=D.aBk[w]
u=B.d(v.a,t,t,t,t,t,t,A.fY,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c28,t,t,t,t,new C.ex1(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lU,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bH3,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.ex1.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ewN.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.ewL(d),w,w),B.bN(!1,A.EO,w,w,!0,w,w,w,new C.ewM(d),w,w)],x.p),w,w,I.m6,D.fPt,w,w,w,w,D.fSs,w)},
$S:18}
C.ewL.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ewM.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exm.prototype={
$0(){var w=this.a
return w.m(new C.exl(w))},
$S:0}
C.exl.prototype={
$0(){return this.a.r=!1},
$S:0}
C.exn.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.exc(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bcQ:t
v=B.a([B.b4(u,t,t,new C.bj5(w,v,new C.exd(r),new C.exe(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.dx(!0,B.c9(w,new C.exf(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKJ())
return B.aA(A.c5,B.jl(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.exg(r),t,r.gclk(),t,new C.exh(r),new C.exi(r),new C.exj(r),t,t,t,t,t,t,t,t,t,t,new C.exk(r),t,t,t,!1,A.a4)},
$S:37}
C.exc.prototype={
$0(){return this.a.acW(this.b)},
$S:0}
C.exk.prototype={
$1(d){return this.a.cDU(d.b)},
$S:72}
C.exi.prototype={
$1(d){return this.a.cll(d.b)},
$S:49}
C.exj.prototype={
$1(d){return this.a.clm(d.b)},
$S:19}
C.exh.prototype={
$1(d){return this.a.b3E()},
$S:38}
C.exg.prototype={
$1(d){return this.a.adD(d.b)},
$S:330}
C.exd.prototype={
$0(){return this.a.z},
$S:699}
C.exe.prototype={
$0(){return this.a.Q},
$S:751}
C.exf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bP_()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fMQ,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,D.fwr,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.hd,q,q,q)},
$S:65}
C.ewP.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ad.Vv,w,w,w),A.bH,B.d(g,w,w,w,w,w,w,F.ab6,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1909}
C.ex8.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.ex9.prototype={
$0(){var w=this.a
return w.m(new C.ex7(w))},
$S:0}
C.ex7.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exa.prototype={
$0(){var w=this.a
return w.m(new C.ex6(w))},
$S:0}
C.ex6.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.exb.prototype={
$0(){var w=this.a
return w.m(new C.ex5(w))},
$S:0}
C.ex5.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ex4.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n7.gdO(D.n7),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyE(p[r]))
return new B.D(R.al2,B.x(B.a([new B.D(Ai.amG,w,q),B.A(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ex3.prototype={
$0(){return this.a.cb9(this.b)},
$S:0}
C.dqw.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:246}
C.bPw.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPH.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPC.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPI.prototype={
$1(d){return this.a.Mf(d)&&!d.x},
$S:z+0}
C.bPJ.prototype={
$2(d,e){return Math.max(d,this.a.aCx(e))},
$S:z+6}
C.bPL.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPM(w))},
$S:z+5}
C.bPM.prototype={
$0(){return this.a.a},
$S:86}
C.bPK.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bPN.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPO(w))},
$S:z+5}
C.bPO.prototype={
$0(){return this.a.a},
$S:86}
C.bPy.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPz(w))},
$S:z+5}
C.bPz.prototype={
$0(){return this.a.a},
$S:86}
C.bPx.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bPA.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPB(w))},
$S:z+5}
C.bPB.prototype={
$0(){return this.a.a},
$S:86}
C.bPv.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPP.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPD.prototype={
$1(d){return d!==this.b&&this.a.aIS(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPG.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPF.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPE.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJT.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJU.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctg.prototype={
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
$S:186}
C.fVg.prototype={
$1(d){var w
$.Q()
w=B.K()
w.r=d.gp(0)
return w},
$S:1910}
C.fVi.prototype={
$2(d,e){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bw
return w},
$S:1911}
C.fVj.prototype={
$5(d,e,f,g,h){return B.bl(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1912}
C.fVh.prototype={
$3(d,e,f){var w
$.Q()
w=B.K()
w.sav(new B.a9(A.b7,A.b9,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1913}
C.bJx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJw(w))},
$S:0}
C.bJw.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJz.prototype={
$0(){return B.a([],x.C)},
$S:1914}
C.bJA.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:361}
C.bJB.prototype={
$0(){var w,v,u
J.bGF(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tO(v))if(C.hem(v.b))w.b37(v)
else w.a0t(v)
else{u=w.a.c.bg_(v)
w.afa(u==null?"The "+$.qC().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJv.prototype={
$1(d){return new B.dY(new C.bJs(this.a,this.b),null)},
$S:20}
C.bJs.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJt(this.a,o,a3),m=$.qC(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bJu(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.I,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.at(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pS,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a7),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jN,p,p,p),D.fME],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.mc,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dl,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.I,14)],f)
v=B.q(p,B.at(B.cT(p,B.at(B.ev(A.A,new B.D(A.hH,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mA,p,p,p),p),A.f,A.dB),p,p,p),p,p,A.b3,new B.p(p,p,q,s,f,new B.a9(A.aA,A.aF,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.m,p,A.e,A.i,0,p,p)
w=B.aG(p,p,p,p,B.X(A.aq4,k,p,p,p,30),p,p,p,new C.bJo(n,o),p,p,p,p,p,p)
t=B.ab5(a2).bft(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.YO(B.kV(p,p,p,5.2,1,n,A.j.E(o.ch,1,5.2)),t),1),B.aG(p,p,p,p,B.X(A.a2f,k,p,p,p,30),p,p,p,new C.bJp(n,o),p,p,p,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hj,p,p,p),1),B.bN(!1,A5.aWO,p,p,!0,p,p,p,new C.bJq(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.rU,p,p,p,p,p,p,p,p))],a0),A.m,p,A.e,A.i,0,p,p)],a0),A.m,p,A.e,A.Q,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.c9m,A.n),p,p,p,A.yA,D.bDA,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bJt.prototype={
$1(d){var w=this.a
w.m(new C.bJm(this.b,d))
this.c.$1(new C.bJn())
w.a.toString},
$S:6}
C.bJm.prototype={
$0(){return this.a.ch=A.j.E(this.b,1,5.2)},
$S:0}
C.bJn.prototype={
$0(){},
$S:0}
C.bJu.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.aA(v,B.cT(v,B.at(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e2),v,v,v),v,v,A.b3,new B.p(t,v,r,s,v,v,A.n),A.h1,v,v,v,A.jo,A.qx,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJr(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:714}
C.bJr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJo.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJp.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bJQ.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.afa("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afa("\u26a0 Overloaded! The "+$.qC().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Af(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afa("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJR.prototype={
$0(){},
$S:0}
C.bJ_.prototype={
$0(){},
$S:0}
C.bJS.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.ajO(w,v,u,t,s,r==null?A.jr:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJJ(o),new C.bJK(o),new C.bJL(o),p,p,p,p,p,p,p,p,p,p,new C.bJM(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bc6)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cF,A.r,1)
n.push(B.ap(p,B.aA(p,B.q(p,B.A(B.a([D.fCS,B.E(B.d(w,p,p,p,p,p,p,D.fuG,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bi9,p,u,v,p,p,A.n),p,p,p,p,A.nE,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJN(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b1_(B.A(B.a([D.bJh,new E.fB(A.CH,"Cut wire",new C.bJO(o),A.c0,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.clU(w),p,p,10,10,p,p))}return B.jl(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:314}
C.bJK.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bab(s)
if(r!=null){t.m(new C.bJH(t,r,d))
return}w=t.b3O(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bJI(t,w))}},
$S:49}
C.bJH.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJL.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJF(w,d))
else if(w.w!=null)w.m(new C.bJG(w,d.b.a2(0,w.x)))},
$S:19}
C.bJF.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJG.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.bab(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alX(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.af8()},
$S:38}
C.bJM.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3O(v)
if(u!=null){w.m(new C.bJD(w,u))
if(D.ms.al(0,u.b))w.cwx(u)
w.a.toString
return}w.m(new C.bJE(w,w.cJn(v)))},
$S:72}
C.bJD.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJE.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJN.prototype={
$0(){var w=this.a
return w.m(new C.bJC(w))},
$S:0}
C.bJC.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJO.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.af8()},
$S:0}
C.bJ0.prototype={
$0(){return this.a.bsr(this.b)},
$S:0}
C.bJj.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.foP,w,w,w),B.E(B.kV(this.b.d,w,w,g,h,new C.bJl(this.a,f),A.j.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1915}
C.bJl.prototype={
$1(d){var w=this.a
w.m(new C.bJk(this.b,d))
w.a.toString},
$S:6}
C.bJk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJ6.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.af8()},
$S:0}
C.bJ7.prototype={
$0(){var w=this.a
return w.m(new C.bJ5(w))},
$S:0}
C.bJ5.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJ8.prototype={
$0(){this.a.m(new C.bJ4(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJ4.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJb.prototype={
$0(){return this.a.b37(this.b)},
$S:0}
C.bJc.prototype={
$0(){return this.a.a0t(this.b)},
$S:0}
C.bJd.prototype={
$0(){return this.a.a26(this.b)},
$S:0}
C.bJe.prototype={
$0(){var w=this.a
w.m(new C.bJ3(this.b,this.c))
w.a.toString},
$S:0}
C.bJ3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJf.prototype={
$0(){var w=this.a
w.m(new C.bJ2(this.b,this.c))
w.a.toString},
$S:0}
C.bJ2.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJg.prototype={
$0(){var w=this.a
w.m(new C.bJ1(this.b,this.c))
w.a.toString},
$S:0}
C.bJ1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJh.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJi.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ9.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJa.prototype={
$1(d){return this.a.f=d},
$S:6}
C.frG.prototype={
$1(d){return d.aIt("bulb")},
$S:z+2}
C.frH.prototype={
$1(d){return d.qc(0,"switch")&&d.aIt("bulb")},
$S:z+2}
C.frI.prototype={
$1(d){return A.d.aV(d.a,new C.frt())},
$S:z+2}
C.frt.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.frJ.prototype={
$1(d){return d.qc(0,"resistor")&&A.d.aV(d.a,new C.frs())},
$S:z+2}
C.frs.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.frK.prototype={
$1(d){return!d.qc(0,"battery")&&d.aIt("bulb")},
$S:z+2}
C.frx.prototype={
$1(d){return A.d.aV(d.a,new C.frr())},
$S:z+2}
C.frr.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fry.prototype={
$1(d){return A.d.aV(d.a,new C.frq())},
$S:z+2}
C.frq.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.frz.prototype={
$1(d){return A.d.aV(d.a,new C.frp())},
$S:z+2}
C.frp.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.frA.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.frn())&&A.d.aV(w,new C.fro())&&d.qc(0,"buck")},
$S:z+2}
C.frn.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fro.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.frB.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.frl())&&A.d.aV(w,new C.frm())},
$S:z+2}
C.frl.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.frm.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.frC.prototype={
$1(d){return A.d.aV(d.a,new C.frk())},
$S:z+2}
C.frk.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e09.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e0i.prototype={
$1(d){var w=this.a.d
return w.aIS(d)&&w.tO(d)},
$S:z+0}
C.e0j.prototype={
$1(d){return d.x},
$S:z+0}
C.e0k.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e0l.prototype={
$0(){},
$S:0}
C.e08.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fUs,A.ax,D.fEH,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RX[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iy,q,q,q),A.bH,B.d(u.b,q,3,A.a2,q,q,q,D.fvq,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bF(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e07(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eO(q,F.mQ,new B.D(A.bQ,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d7,q,new B.b9(p,A.a1),q)},
$S:47}
C.e07.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e06(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e06.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bl7()},
$S:0}
C.e04.prototype={
$1(d){return new C.WC(this.a.d,null)},
$S:z+44}
C.e05.prototype={
$0(){},
$S:0}
C.e0h.prototype={
$1(d){return new B.dY(new C.e0g(this.a),null)},
$S:20}
C.e0g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiW(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aH
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fRA,A.b5,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.U,B.by(B.m(4),B.kn(A.bA,m,m,5,m,w.a/11,new B.lM(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fHR)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.KD,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EK,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.ax,q,new B.bL(A.aa,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e0e(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dl,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.ab4,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.aA(m,B.q(m,new B.c7(A.aL,A.e,A.i,A.m,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bc,B.d(r.a,m,m,m,m,m,m,new B.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bF(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eM,A.nE,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e0f(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A1.yJ,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e0e.prototype={
$0(){var w=this.a
w.m(new C.e0c(w))
this.b.$1(new C.e0d())
w.Fu()},
$S:0}
C.e0c.prototype={
$0(){var w=this.a
$.aiW()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e0d.prototype={
$0(){},
$S:0}
C.e0f.prototype={
$0(){var w=this.a
w.m(new C.e0a(w,this.b))
this.c.$1(new C.e0b())
w.Fu()},
$S:0}
C.e0a.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e0b.prototype={
$0(){},
$S:0}
C.e0n.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e0o.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mb("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).cd(B.eb(new C.e0m(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e0m.prototype={
$1(d){B.lm("construction")
return Ak.hTh()},
$S:z+45}
C.e0p.prototype={
$0(){return E.hEJ(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e0q.prototype={
$0(){var w=this.a
return w.m(w.d.gd0d())},
$S:0}
C.e0r.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gte(v))
w.Fu()},
$S:0}
C.cKQ.prototype={
$2(d,e){var w=null,v=this.a.gayY().x
v===$&&B.c()
return B.b4(w,w,w,new C.baY(v,w),A.az)},
$S:63}
C.cKP.prototype={
$3(d,e,f){var w=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aZ(v,t))
w.D(new B.c5(v,u,v+e,u))
w.D(new B.c5(v,u,v,u+e))
w.D(new B.c5(v,u,v-e,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:437}
C.h_a.prototype={
$3(d,e,f){return new C.VV(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h_b.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.it(A.A,g,null,new B.bg(B.cJ(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dXj.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dXi.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1B(o):q.bEM(o,p),m=x.p
p=B.a([B.p8(new B.mL(n,new B.bM(p,x.bz)),A.pi,B.qy(),A.b3,A.b3,new C.dXg())],m)
n=t.d
if(n){w=A.j.F(q.gSA(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bJ3)
else m.push(A.b5)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.b4:A.as,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.at(B.cT(s,B.A(m,A.m,s,A.e,A.i,0,s,s),s,s,A.e7,new B.p(A.w,s,s,u,s,s,A.n),A.mU,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Aw)p.push(B.ap(s,B.at(B.q(s,s,A.f,s,s,A.LQ,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Er)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LQ,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXh(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:345}
C.dXg.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.it(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:352}
C.dXh.prototype={
$0(){var w=this.a
return w.m(new C.dXf(w))},
$S:0}
C.dXf.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXe.prototype={
$0(){var w=this.a
return w.m(new C.dXd(w,this.b))},
$S:0}
C.dXd.prototype={
$0(){return this.a.e=A.d.co(F.kx,this.b)},
$S:0}
C.dXc.prototype={
$0(){var w=this.a
return w.m(new C.dXb(w))},
$S:0}
C.dXb.prototype={
$0(){return this.a.e=0},
$S:0}
C.dX7.prototype={
$0(){var w=this.a
return w.m(new C.dX6(w))},
$S:0}
C.dX6.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.h_g,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eP,p,p,p,F.aWn,p,p,p),1),B.d(A.a.b0(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r8,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kt,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxy(w.gSA(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aT,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.aA(p,B.q(p,p,A.f,p,p,A.aem,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dX9(w),p,p,p,p,p,p,!1,A.a4),A.e3,B.q(p,p,A.f,p,p,A.aes,p,12,p,p,p,p,p,12),A.e3,B.q(p,p,A.f,p,p,D.b7p,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kx[o].a,p,1,A.a2,p,p,p,A.aaZ,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cq,p,p,p,24,p,p,A.fH,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bFz,B.q(p,B.by(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afB(r,w.gSA(),p),A.fL),1)],l),A.m,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.duF,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jo,w.awR(F.kx[q],34,!1),p))
v.push(B.ap(8,B.at(B.q(p,B.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lK,p,p,p),p,p,p),p,p,0,0,p,p))
return B.by(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.Zy,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:345}
C.dX9.prototype={
$0(){var w=this.a
return w.m(new C.dX8(w))},
$S:0}
C.dX8.prototype={
$0(){return this.a.e=null},
$S:0}
C.fsa.prototype={
$0(){return D.eh8},
$S:z+47}
C.fsb.prototype={
$0(){return D.dPk},
$S:z+48}
C.fsc.prototype={
$0(){return D.dLR},
$S:z+49}
C.fsd.prototype={
$0(){return D.dOI},
$S:z+50}
C.fse.prototype={
$0(){return D.dTM},
$S:z+51}
C.fsf.prototype={
$0(){return D.ecV},
$S:z+52}
C.fsg.prototype={
$0(){return D.ef4},
$S:z+53}
C.fsh.prototype={
$0(){return D.dT5},
$S:z+36}
C.cm8.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cm9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hIy(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.KB,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fAi,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cL(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cU,B.d(r.b,k,k,k,k,k,k,new B.H(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.Q,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.be(q,q,q,q),p,new B.a9(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cm7(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bU(A.bG,h,A.bs,k,14,14)},
$S:178}
C.cm7.prototype={
$0(){return B.a6(this.a,!1).cd(B.eb(new C.cm6(this.b),!1,null,x.H))},
$S:0}
C.cm6.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eTI.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7c(w.f)]},
$S:0}
C.eTE.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cN.ai()*7},
$S:0}
C.eTD.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.ce)
w.w=""},
$S:0}
C.eTG.prototype={
$0(){var w=this.a
return w.m(new C.eTF(w,this.b))},
$S:0}
C.eTF.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cB(w,this.b)},
$S:0}
C.eTH.prototype={
$1(d){return this.a.b1w(0)},
$S:2}
C.e38.prototype={
$0(){return C.JJ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e39.prototype={
$0(){},
$S:0}
C.e33.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e35.prototype={
$0(){return this.a.b1y(this.b)},
$S:0}
C.e36.prototype={
$0(){var w=this.a
return w.m(new C.e34(w))},
$S:0}
C.e34.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e37.prototype={
$0(){var w=this.a
return w.b1y(w.d)},
$S:0}
C.dOQ.prototype={
$2(d,e){return d+e},
$S:79}
C.dOR.prototype={
$0(){},
$S:0}
C.dOL.prototype={
$2(d,e){return d+e},
$S:79}
C.dOO.prototype={
$0(){var w=this.a
return w.m(new C.dON(w,this.b))},
$S:0}
C.dON.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dOP.prototype={
$0(){var w=this.a
return w.m(new C.dOM(w))},
$S:0}
C.dOM.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e_E.prototype={
$0(){return E.uD(this.b,this.a.d,"drawing")},
$S:0}
C.e_F.prototype={
$1(d){var w=this.a
return w.m(new C.e_D(w,d))},
$S:49}
C.e_D.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJO(u,v,t))},
$S:0}
C.e_G.prototype={
$1(d){var w=this.a
return w.m(new C.e_C(w,d))},
$S:19}
C.e_C.prototype={
$0(){return A.d.gan(this.a.e).c.push(this.b.b)},
$S:0}
C.e_H.prototype={
$1(d){var w=this.a
return w.m(new C.e_B(w,d))},
$S:23}
C.e_B.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJO(u,v,t))},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
return w.m(new C.e_A(w,this.b))},
$S:0}
C.e_A.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e_J.prototype={
$1(d){var w=this.a
return w.m(new C.e_z(w,d))},
$S:6}
C.e_z.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e_K.prototype={
$0(){var w=this.a
return w.m(new C.e_y(w))},
$S:0}
C.e_y.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e_L.prototype={
$0(){var w=this.a
return w.m(new C.e_x(w))},
$S:0}
C.e_x.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e_M.prototype={
$0(){var w=this.a
return w.m(A.d.gte(w.e))},
$S:0}
C.e_N.prototype={
$0(){var w=this.a
return w.m(new C.e_w(w))},
$S:0}
C.e_w.prototype={
$0(){var w=this.a
w.x=D.aAb[A.o.F(A.d.co(D.aAb,w.x)+1,4)]},
$S:0}
C.eqy.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.eqz.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JJ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eqx(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JJ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eqx.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eqA.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eqw(w))},
$S:12}
C.eqw.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.eqE.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lB(new C.eqC(v,e),w,A.b3,A.pi,w,w,new B.br(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqD(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eqD.prototype={
$0(){return this.a.cdg(this.b)},
$S:0}
C.eqC.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c8x
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b4:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fx(A.A,B.d(u[t],p,p,p,p,p,p,H.ab9,p,p,p),p,r,!0)
u=r}else u=D.fT9
return B.fx(A.A,B.q(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:110}
C.eqF.prototype={
$0(){var w=this.a
return w.m(new C.eqB(w,this.b))},
$S:0}
C.eqB.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aub()},
$S:0}
C.eqG.prototype={
$0(){var w=this.a
return w.m(w.gbNt())},
$S:0}
C.eBk.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eBl.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eBi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBh(w))},
$S:12}
C.eBh.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eBm.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eBn.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eBo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1x()},
$S:12}
C.eBp.prototype={
$0(){return this.a.cdm(this.b)},
$S:0}
C.ePb.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:64}
C.ePk.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kT,B.A(B.a([v,A.ae,new B.dp(1,A.cr,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e2),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1916}
C.ePg.prototype={
$1(d){return this.a.m(new C.ePf())},
$S:2}
C.ePf.prototype={
$0(){},
$S:0}
C.ePh.prototype={
$0(){var w=this.a
return w.m(new C.ePe(w,this.b))},
$S:0}
C.ePe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ePi.prototype={
$1(d){var w=this.a
return w.m(new C.ePd(w,d))},
$S:6}
C.ePd.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.ePj.prototype={
$0(){var w=this.a
return w.m(new C.ePc(w))},
$S:0}
C.ePc.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.epd.prototype={
$0(){},
$S:0}
C.epe.prototype={
$0(){},
$S:0}
C.ep6.prototype={
$0(){var w=this.a
return w.m(new C.ep5(w))},
$S:0}
C.ep5.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.Xo("hat",0,0.6)},
$S:0}
C.ep7.prototype={
$0(){var w=this.a
return w.m(new C.ep4(w))},
$S:0}
C.ep4.prototype={
$0(){this.a.y=1.1
E.mr("bell",36,200,0.4)},
$S:0}
C.ep8.prototype={
$0(){var w=this.a
return w.m(new C.ep3(w))},
$S:0}
C.ep3.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mr("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ep9.prototype={
$0(){var w=this.a
return w.m(new C.ep2(w,this.b))},
$S:0}
C.ep2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.epa.prototype={
$1(d){var w=this.a
return w.m(new C.ep1(w,d))},
$S:6}
C.ep1.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.epb.prototype={
$1(d){var w=this.a
return w.m(new C.ep0(w,d))},
$S:6}
C.ep0.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.epc.prototype={
$1(d){var w=this.a
return w.m(new C.ep_(w,d))},
$S:6}
C.ep_.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cm4.prototype={
$0(){var w=this
return E.mr(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNS.prototype
w.bzI=w.t
w=C.aMX.prototype
w.byL=w.t
w=C.aMY.prototype
w.byM=w.t
w=C.aN1.prototype
w.byQ=w.t
w=C.aOH.prototype
w.bAE=w.t
w=C.aNQ.prototype
w.bzG=w.t
w=C.azh.prototype
w.bvM=w.t
w=C.azi.prototype
w.bvN=w.t
w=C.aLo.prototype
w.bx8=w.t
w=C.aNa.prototype
w.byZ=w.t
w=C.aMZ.prototype
w.byN=w.t
w=C.aNh.prototype
w.bz6=w.t
w=C.aNK.prototype
w.bzA=w.t
w=C.aOa.prototype
w.bA0=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aFX.prototype,"gayl","c8J",1)
v(C,"ip1","c6a",3)
var q
u(q=C.aEq.prototype,"gchB","chC",22)
w(q,"gc9i","b07",1)
w(C.aEs.prototype,"gcb_","cb0",1)
t(C.aEJ.prototype,"gcb6","cb7",39)
w(q=C.aIX.prototype,"gcB4","cB5",1)
w(q,"gcb8","aeZ",1)
w(q,"gcm3","cm4",1)
w(q,"gcb5","aeY",3)
w(q=C.aFW.prototype,"gbKC","aak",3)
w(q,"gclk","b3E",1)
w(q,"gcp7","ahz",3)
s(q,"gcba","af_",3)
s(q=C.a5p.prototype,"gte","a8",1)
u(q,"gcYS","aoI",0)
u(q,"gcVf","Mf",0)
w(q,"gd0d","bl7",1)
r(C.ajO.prototype,"gcbx",0,5,null,["$5"],["qS"],41,0,0)
w(q=C.aEV.prototype,"gcby","cbz",1)
w(q,"gcrX","ahV",3)
w(q,"gchR","agf",3)
w(q,"gcz5","aj4",3)
w(q=C.aGo.prototype,"gcdh","cdi",1)
s(q,"gcdf","b1w",1)
w(C.aFI.prototype,"gbNt","aub",1)
s(C.aG2.prototype,"gcdj","cdk",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.al_,C.GT,C.vl,C.aTX,C.a4g,C.bc3,C.c6b,C.yF,C.D_,C.nI,C.bcP,C.B7,C.bv0,C.qr,C.r9,C.D3,C.a_q,C.afI,C.a1F,C.De,C.acD,C.acU,C.aeP,C.GE,C.eh,C.tY,C.abi,C.acp,C.a5p,C.mW,C.bcQ,C.fQ,C.mt,C.bwk,C.aJO])
u(B.ht,[C.fJs,C.fyc,C.fFR,C.fFS,C.fJp,C.fJq,C.ein,C.eiG,C.exY,C.exv,C.exw,C.exx,C.exy,C.exz,C.exA,C.exB,C.exC,C.ext,C.exu,C.exs,C.exT,C.exU,C.exV,C.dOm,C.dOo,C.dOr,C.dOC,C.c6c,C.c6d,C.fru,C.frv,C.frw,C.frD,C.frE,C.frF,C.dQo,C.dQ5,C.dQp,C.dQ0,C.dPW,C.dPY,C.dQ3,C.dQg,C.dQe,C.dQf,C.dQd,C.dQa,C.dQc,C.f7h,C.f6Z,C.f75,C.f7e,C.f6T,C.dqA,C.dqB,C.dqx,C.dqy,C.dqz,C.dqC,C.dqD,C.dqE,C.dqF,C.dqG,C.dqH,C.dqI,C.dqJ,C.dqK,C.ewU,C.ewV,C.ewW,C.ewX,C.ewS,C.ewT,C.exo,C.ex0,C.ex2,C.ewN,C.exk,C.exi,C.exj,C.exh,C.exg,C.ewP,C.bPw,C.bPH,C.bPC,C.bPI,C.bPK,C.bPx,C.bPv,C.bPP,C.bPD,C.bPG,C.bPF,C.bPE,C.bJT,C.fVg,C.fVj,C.fVh,C.bJA,C.bJv,C.bJt,C.bJS,C.bJK,C.bJL,C.bJJ,C.bJM,C.bJj,C.bJl,C.bJh,C.bJi,C.bJ9,C.bJa,C.frG,C.frH,C.frI,C.frt,C.frJ,C.frs,C.frK,C.frx,C.frr,C.fry,C.frq,C.frz,C.frp,C.frA,C.frn,C.fro,C.frB,C.frl,C.frm,C.frC,C.frk,C.e0i,C.e0j,C.e08,C.e04,C.e0h,C.e0m,C.cKP,C.h_a,C.h_b,C.cm6,C.eTH,C.e_F,C.e_G,C.e_H,C.e_J,C.eqC,C.ePb,C.ePk,C.ePg,C.ePi,C.epa,C.epb,C.epc])
u(B.jw,[C.fJr,C.eis,C.eiq,C.exE,C.exR,C.dPX,C.dQj,C.dWo,C.f7k,C.f7l,C.f6Y,C.f7a,C.f7b,C.f76,C.f7c,C.f6S,C.ewQ,C.ewR,C.exn,C.exf,C.ex4,C.bPJ,C.bPL,C.bPN,C.bPy,C.bPA,C.bJU,C.ctg,C.fVi,C.bJs,C.bJu,C.bJQ,C.bJP,C.e0g,C.cKQ,C.dXi,C.dXg,C.dXa,C.cm9,C.dOQ,C.dOL,C.eqE])
u(B.af,[C.WC,C.WZ,C.Vv,C.VA,C.Ob,C.aIW,C.WY,C.ajM,C.Wb,C.ayY,C.VV,C.Xv,C.Wj,C.Vw,C.Wa,C.WT,C.X2,C.Xm,C.WS])
u(B.ah,[C.bma,C.aNS,C.aMX,C.aN1,C.aEJ,C.aOH,C.aNQ,C.azh,C.bzw,C.aLo,C.aNa,C.aOa,C.aNh,C.aMZ,C.blC,C.aFI,C.aG2,C.bmS,C.aNK])
u(B.iJ,[C.eil,C.eim,C.eiy,C.eiz,C.eiu,C.eit,C.eiv,C.eir,C.eiw,C.eip,C.eix,C.eio,C.eiC,C.eiB,C.eiD,C.eiA,C.eiE,C.eiF,C.eiH,C.exX,C.exZ,C.ey_,C.exG,C.exF,C.exD,C.exM,C.exN,C.exJ,C.exO,C.exI,C.exP,C.exQ,C.exH,C.exS,C.exL,C.exW,C.exK,C.dOJ,C.dOI,C.dOj,C.dOk,C.dOl,C.dOK,C.dOn,C.dOp,C.dOq,C.dOs,C.dOg,C.dOh,C.dOi,C.dOz,C.dOA,C.dOB,C.dOy,C.dOD,C.dOx,C.dOE,C.dOw,C.dOF,C.dOv,C.dOG,C.dOu,C.dOH,C.dOt,C.dQ2,C.dQ1,C.dQ6,C.dPZ,C.dQ_,C.dQ7,C.dQ8,C.dQ9,C.dQ4,C.dPV,C.dQi,C.dQh,C.dQk,C.dQl,C.dQm,C.dQb,C.dQn,C.cVr,C.dWm,C.dWl,C.dWn,C.frV,C.frW,C.frX,C.frY,C.frZ,C.fs_,C.fs0,C.fs1,C.fs2,C.f7j,C.f7i,C.f70,C.f7_,C.f6W,C.f6V,C.f6X,C.f6U,C.f78,C.f77,C.f79,C.f71,C.f7d,C.f74,C.f7f,C.f73,C.f7g,C.f72,C.ewZ,C.ewO,C.ewY,C.ewK,C.ex_,C.ex1,C.ewL,C.ewM,C.exm,C.exl,C.exc,C.exd,C.exe,C.ex8,C.ex9,C.ex7,C.exa,C.ex6,C.exb,C.ex5,C.ex3,C.dqw,C.bPM,C.bPO,C.bPz,C.bPB,C.bJx,C.bJy,C.bJw,C.bJz,C.bJB,C.bJm,C.bJn,C.bJr,C.bJo,C.bJp,C.bJq,C.bJR,C.bJ_,C.bJH,C.bJI,C.bJF,C.bJG,C.bJD,C.bJE,C.bJN,C.bJC,C.bJO,C.bJ0,C.bJk,C.bJ6,C.bJ7,C.bJ5,C.bJ8,C.bJ4,C.bJb,C.bJc,C.bJd,C.bJe,C.bJ3,C.bJf,C.bJ2,C.bJg,C.bJ1,C.e09,C.e0k,C.e0l,C.e07,C.e06,C.e05,C.e0e,C.e0c,C.e0d,C.e0f,C.e0a,C.e0b,C.e0n,C.e0o,C.e0p,C.e0q,C.e0r,C.dXj,C.dXh,C.dXf,C.dXe,C.dXd,C.dXc,C.dXb,C.dX7,C.dX6,C.dX9,C.dX8,C.fsa,C.fsb,C.fsc,C.fsd,C.fse,C.fsf,C.fsg,C.fsh,C.cm8,C.cm7,C.eTI,C.eTE,C.eTD,C.eTG,C.eTF,C.e38,C.e39,C.e33,C.e35,C.e36,C.e34,C.e37,C.dOR,C.dOO,C.dON,C.dOP,C.dOM,C.e_E,C.e_D,C.e_C,C.e_B,C.e_I,C.e_A,C.e_z,C.e_K,C.e_y,C.e_L,C.e_x,C.e_M,C.e_N,C.e_w,C.eqy,C.eqz,C.eqx,C.eqA,C.eqw,C.eqD,C.eqF,C.eqB,C.eqG,C.eBk,C.eBl,C.eBi,C.eBj,C.eBh,C.eBm,C.eBn,C.eBo,C.eBp,C.ePf,C.ePh,C.ePe,C.ePd,C.ePj,C.ePc,C.epd,C.epe,C.ep6,C.ep5,C.ep7,C.ep4,C.ep8,C.ep3,C.ep9,C.ep2,C.ep1,C.ep0,C.ep_,C.cm4])
t(C.bzJ,C.aNS)
t(C.aFX,C.bzJ)
u(B.mk,[C.bj7,C.bd7,C.buo,C.bbM,C.bt_,C.bsq,C.bcs,C.bss,C.bwu,C.bj5,C.ajO,C.baY,C.bxy,C.afB,C.bxK,C.bsr,C.bnE])
t(C.aMY,C.aMX)
t(C.aEq,C.aMY)
t(C.bzt,C.aN1)
t(C.aEs,C.bzt)
u(B.lD,[C.Ld,C.a1s,C.Kc])
u(B.ax,[C.bto,C.afU,C.aeM,C.R3,C.btU,C.a9g,C.bfe])
t(C.aIX,C.aOH)
t(C.bj4,B.pb)
t(C.aFW,C.aNQ)
t(C.azi,C.azh)
t(C.ajN,C.azi)
t(C.aEV,C.bzw)
t(C.baZ,C.aLo)
t(C.blA,C.aNa)
t(C.bzQ,C.aOa)
t(C.aGo,C.bzQ)
t(C.bzy,C.aNh)
t(C.blL,C.bzy)
t(C.bzs,C.aMZ)
t(C.blm,C.bzs)
t(C.bzH,C.aNK)
t(C.bmm,C.bzH)
w(C.aNS,B.cc)
w(C.bzJ,E.nG)
w(C.aMX,B.cc)
w(C.aMY,E.nG)
w(C.aN1,B.cc)
w(C.bzt,E.nG)
w(C.aOH,B.eQ)
w(C.aNQ,B.cc)
w(C.azh,B.cc)
w(C.azi,E.nG)
w(C.aLo,B.cc)
v(C.bzw,B.eB)
w(C.aNa,B.cc)
w(C.aMZ,B.cc)
w(C.bzs,E.nG)
w(C.aNh,B.cc)
w(C.bzy,E.nG)
w(C.aNK,B.cc)
w(C.bzH,E.nG)
w(C.aOa,B.cc)
w(C.bzQ,E.nG)})()
B.iT(b.typeUniverse,JSON.parse('{"WC":{"af":[],"v":[]},"bma":{"ah":["WC"]},"WZ":{"af":[],"v":[]},"aFX":{"ah":["WZ"]},"bj7":{"aC":[]},"Vv":{"af":[],"v":[]},"aEq":{"ah":["Vv"]},"VA":{"af":[],"v":[]},"aEs":{"ah":["VA"]},"bd7":{"aC":[]},"afU":{"ax":[],"v":[]},"aeM":{"ax":[],"v":[]},"aIW":{"af":[],"v":[]},"Ob":{"af":[],"v":[]},"aEJ":{"ah":["Ob"]},"bto":{"ax":[],"v":[]},"R3":{"ax":[],"v":[]},"buo":{"aC":[]},"btU":{"ax":[],"v":[]},"bbM":{"aC":[]},"aIX":{"ah":["aIW"]},"bt_":{"aC":[]},"bsq":{"aC":[]},"bcs":{"aC":[]},"bss":{"aC":[]},"bwu":{"aC":[]},"WY":{"af":[],"v":[]},"bj4":{"aC":[]},"aFW":{"ah":["WY"]},"bj5":{"aC":[]},"ajO":{"aC":[]},"ajM":{"af":[],"v":[]},"ajN":{"ah":["ajM"]},"Wb":{"af":[],"v":[]},"ayY":{"af":[],"v":[]},"aEV":{"ah":["Wb"],"eB":[]},"baZ":{"ah":["ayY"]},"baY":{"aC":[]},"VV":{"af":[],"v":[]},"blA":{"ah":["VV"]},"bxy":{"aC":[]},"afB":{"aC":[]},"a9g":{"ax":[],"v":[]},"Xv":{"af":[],"v":[]},"Wj":{"af":[],"v":[]},"Vw":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"WT":{"af":[],"v":[]},"X2":{"af":[],"v":[]},"Xm":{"af":[],"v":[]},"WS":{"af":[],"v":[]},"aGo":{"ah":["Xv"]},"bxK":{"aC":[]},"blL":{"ah":["Wj"]},"bsr":{"aC":[]},"blm":{"ah":["Vw"]},"blC":{"ah":["Wa"]},"bnE":{"aC":[]},"aFI":{"ah":["WT"]},"aG2":{"ah":["X2"]},"bmS":{"ah":["Xm"]},"bmm":{"ah":["WS"]},"bfe":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lM<u?>"),G:w("u"),J:w("bu<n,F>"),Q:w("de<n>"),Z:w("a0"),M:w("O<d9>"),R:w("O<SR>"),a:w("O<a4g>"),V:w("O<ac>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<F>>"),U:w("O<ai<G?>>"),x:w("O<a8<n,aE>>"),g:w("O<o>"),F:w("O<tY>"),v:w("O<fT>"),eZ:w("O<+(n,n)>"),fT:w("O<+(F,v)>"),I:w("O<+(G,n)>"),u:w("O<+(G,G)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,F,F,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,F,F,a8<n,F>)>"),_:w("O<vl>"),fQ:w("O<abi>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gd>"),p:w("O<v>"),bL:w("O<acp>"),fH:w("O<lk>"),a_:w("O<acD>"),cB:w("O<nI>"),ba:w("O<acU>"),eW:w("O<D3>"),fY:w("O<a_q>"),ac:w("O<aeP>"),cd:w("O<De>"),fr:w("O<afI>"),e4:w("O<a1F>"),au:w("O<aJO>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<tY?>"),bN:w("O<G?>"),q:w("cw<ajN>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(F,v),v>"),l:w("iC"),gA:w("zS"),gD:w("wn"),h:w("ct"),K:w("aE"),W:w("tY"),B:w("eh"),N:w("n"),bO:w("au"),Y:w("br<F>"),k:w("bM<n>"),bz:w("bM<G?>"),dg:w("e9<r9>"),m:w("bc3"),a2:w("D_"),f3:w("r9"),es:w("GE"),gV:w("mz"),y:w("P"),i:w("F"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b26=new B.d9(0,0.1)
D.b41=new C.aTX(0,0,0)
D.LL=new C.aTX(0,0.5,0)
D.b4C=new B.ay(A.b4,1,A.r,-1)
D.b64=new B.aY(0,1/0,0,290)
D.b6b=new B.aY(16,1/0,16,1/0)
D.bnK=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.duR=w([D.bnK,Al.aiw],x.O)
D.eyB=new B.c_(A.Fb,1.1,A.x,null,0,D.duR,null,null)
D.b6t=new B.p(null,null,null,null,null,D.eyB,A.n)
D.b7p=new B.p(A.bg,null,null,null,null,null,A.a7)
D.fom=new B.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0G=new B.B("\u26a1",null,D.fom,null,null,null,null,null,null,null,null,null)
D.bbX=new B.cf(A.A,null,null,D.h0G,null)
D.aVH=new B.H(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR6=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVH,null,A.K,null,null,null,null,null,null,null)
D.eqN=new B.D(A.nH,D.fR6,null)
D.bc6=new B.cf(A.A,null,null,D.eqN,null)
D.fGV=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVH,null,A.K,null,null,null,null,null,null,null)
D.erF=new B.D(A.GV,D.fGV,null)
D.bcQ=new B.cf(A.A,null,null,D.erF,null)
D.afn=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bgC=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bgT=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bi9=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.big=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.biD=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bkw=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.blx=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bmg=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahF=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bng=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ai1=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Z9=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bp7=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bpo=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiB=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.br7=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.brf=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.brI=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w7=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.btM=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ak4=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bzv=new B.bd(11e6)
D.bBi=new B.R(10,34,10,26)
D.bBq=new B.R(10,6,10,2)
D.bBs=new B.R(10,8,0,10)
D.bC5=new B.R(12,8,8,8)
D.bCb=new B.R(14,0,14,22)
D.bCd=new B.R(14,0,14,30)
D.bDg=new B.R(16,4,16,28)
D.bDA=new B.R(18,10,18,16)
D.bFz=new B.R(26,12,26,58)
D.bGp=new B.R(4,4,8,2)
D.bH3=new B.R(8,14,8,12)
D.bHa=new B.R(8,40,8,30)
D.bHf=new B.R(8,6,16,0)
D.bHg=new B.R(8,6,8,8)
D.bHB=new B.R(0,0,1.5,0)
D.b3O=new B.HS(26,"saturation")
D.bHU=new B.uN(A.d0,D.b3O,null,A.Y1)
D.bHV=new B.hw(A.G,11)
D.bHZ=new B.hw(A.G,30)
D.fG0=new B.B("REACTION LAB",null,T.aWi,null,null,null,null,A.a2,null,1,null,null)
D.bI6=new B.bz(1,A.bc,D.fG0,null)
D.fwA=new B.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new B.B("CORE PROTOCOL",null,D.fwA,null,null,null,null,null,null,null,null,null)
D.bIk=new B.bz(1,A.bc,D.fJg,null)
D.fK3=new B.B("\ud83d\udce2 NGMY Ads",null,A.r8,null,null,null,null,A.eP,null,1,null,null)
D.bJ3=new B.bz(1,A.bc,D.fK3,null)
D.fEI=new B.B("Wire selected",null,A.fY,null,null,null,null,null,null,null,null,null)
D.bJh=new B.bz(1,A.bc,D.fEI,null)
D.ap_=new B.a0(62712,"MaterialIcons",!1)
D.bPn=new B.a0(62908,"MaterialIcons",!1)
D.bR4=new B.a0(983122,"MaterialIcons",!1)
D.bRh=new B.a0(983247,"MaterialIcons",!1)
D.bRN=new B.a0(983616,"MaterialIcons",!1)
D.bR3=new B.a0(983117,"MaterialIcons",!1)
D.bVu=new B.ae(D.bR3,28,A.c,null,null,null)
D.bVK=new B.ae(A.j2,18,null,null,null,null)
D.bXC=new B.ae(A.eh,21,A.c0,null,null,null)
D.bXR=new B.ae(A.oy,null,A.ab,null,null,null)
D.bY0=new B.ae(A.a3h,21,A.ab,null,null,null)
D.bYS=new B.ae(A.eN,17,A.ab,null,null,null)
D.c0B=new B.ae(A.j2,21,A.ab,null,null,null)
D.c28=new B.ae(A.ed,null,A.aV,null,null,null)
D.dsw=w([A.d6,A.d5,A.d6],x.O)
D.c5w=new B.a9(A.a6,A.aa,A.x,D.dsw,null,null)
D.d45=w([A.bP,A.bq],x.O)
D.c5E=new B.a9(A.b7,A.b9,A.x,D.d45,null,null)
D.c5Q=new B.a9(A.b7,A.b9,A.x,A.a5U,null,null)
D.asH=new B.a9(A.b7,A.b9,A.x,O.a57,null,null)
D.d1D=w([A.p7,A.iA],x.O)
D.c6B=new B.a9(A.b7,A.b9,A.x,D.d1D,null,null)
D.d3O=w([A.e6,A.as],x.O)
D.asO=new B.a9(A.b7,A.b9,A.x,D.d3O,null,null)
D.dmg=w([A.db,A.jj,A.bq],x.O)
D.c6T=new B.a9(A.a6,A.aa,A.x,D.dmg,null,null)
D.dmm=w([A.dU,A.cq],x.O)
D.c7d=new B.a9(A.b7,A.b9,A.x,D.dmm,null,null)
D.cAJ=w([A.bP,A.db],x.O)
D.c7m=new B.a9(A.a6,A.aa,A.x,D.cAJ,null,null)
D.aCO=w([A.e6,M.nx],x.O)
D.c7t=new B.a9(A.b7,A.b9,A.x,D.aCO,null,null)
D.c7K=new B.a9(A.b7,A.b9,A.x,R.at9,null,null)
D.c8x=new B.a9(A.aA,A.aF,A.x,A.RJ,null,null)
D.ddD=w([A.as,A.w],x.O)
D.c8I=new B.a9(A.b7,A.b9,A.x,D.ddD,null,null)
D.c8L=new B.a9(A.b7,A.b9,A.x,H.aC5,null,null)
D.brD=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bst=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cNF=w([A.Nd,D.brD,D.bst],x.O)
D.c8U=new B.a9(A.b7,A.b9,A.x,D.cNF,null,null)
D.cB2=w([A.cZ,A.h9],x.O)
D.c99=new B.a9(A.b7,A.b9,A.x,D.cB2,null,null)
D.bv5=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cBN=w([F.afw,D.bv5],x.O)
D.c9m=new B.a9(A.b7,A.b9,A.x,D.cBN,null,null)
D.c9W=w([0,4,7],x.t)
D.c9X=w([0,4,7,12],x.t)
D.c9Y=w([0,4,7,4],x.t)
D.aBL=w([A.ho,A.qi],x.O)
D.aBg=w([A.hq,A.cG],x.O)
D.azB=w([A.br,A.dK],x.O)
D.cWk=w([A.aV,A.cZ],x.O)
D.dnC=w([A.bT,A.kJ],x.O)
D.az1=w([A.cF,A.kr],x.O)
D.d0r=w([A.bK,A.aM],x.O)
D.caj=w([D.aBL,D.aBg,A.a5c,D.azB,D.cWk,A.azR,A.aAL,D.dnC,D.az1,D.d0r],B.as("O<ai<u>>"))
D.cf_=w([120,220,380],x.t)
D.ciK=w([12,16,19,24],x.t)
D.ciU=w([1400,800,450,2400],x.t)
D.crk=w([250,450,900,1500],x.t)
D.bfY=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bs2=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bpQ=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bvF=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.boW=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayi=w([D.bfY,D.bs2,D.bpQ,D.bvF,D.boW],x.O)
D.cIz=w([50,25,75],x.t)
D.cOb=w([0,5,10,15,18,20,25],x.t)
D.cWD=w([900,500,250,1600],x.t)
D.d_K=w([A.br,A.bD,A.ba,A.br],x.O)
D.a52=w([A.ay,A.bi,A.bg,A.aH,A.nt],x.O)
D.d1g=w([A.as,A.ay,A.cF,A.bi,A.bg,A.cy,A.ch,A.bD,A.Yi],x.O)
D.a55=w([0.04,0.17,0.3],x.n)
D.f7N=new C.vl("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f7T=new C.vl("Medium engine","A good all-rounder.",0.3,0.9)
D.f7S=new C.vl("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Ir=w([D.f7N,D.f7T,D.f7S],x._)
D.eEn=new B.y(6,"Easy")
D.eF8=new B.y(8,"Medium")
D.eA6=new B.y(10,"Hard")
D.d2Q=w([D.eEn,D.eF8,D.eA6],x.I)
D.aA0=w([0.55,0.78,1],x.n)
D.aAb=w([A.c,A.h_,A.nm,A.as],x.O)
D.aAj=w([A.bg,A.ay,A.bi,A.d5],x.O)
D.f7K=new C.vl("Radar","Shows your height above the ground.",0.1,0)
D.f7L=new C.vl("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f7I=new C.vl("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAq=w([D.f7K,D.f7L,D.f7I],x._)
D.d9_=w([47,100,220,470,1000],x.n)
D.Jt={volts:0}
D.a6V=new B.bu(D.Jt,[3],x.J)
D.JU=new B.dX(["b","battery",0.2,0.3,D.a6V])
D.ekB={on:0}
D.dDo=new B.bu(D.ekB,[1],x.J)
D.Ep=new B.dX(["s","switch",0.5,0.3,D.dDo])
D.f5r=new B.dX(["l","bulb",0.8,0.3,A.jr])
D.d4e=w([D.JU,D.Ep,D.f5r],x.d)
D.En=new B.cu(["b",0,"s",0])
D.f4r=new B.cu(["s",1,"l",0])
D.aRj=new B.cu(["l",1,"b",1])
D.dms=w([D.En,D.f4r,D.aRj],x.o)
D.d3D=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ezh=new C.mW("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d4e,D.dms,D.d3D)
D.aL8={ohms:0}
D.aIK=new B.bu(D.aL8,[220],x.J)
D.f4U=new B.dX(["r","resistor",0.5,0.3,D.aIK])
D.f5G=new B.dX(["d","led",0.8,0.3,A.jr])
D.dpH=w([D.JU,D.f4U,D.f5G],x.d)
D.f3M=new B.cu(["b",0,"r",0])
D.f4l=new B.cu(["r",1,"d",0])
D.f3S=new B.cu(["d",1,"b",1])
D.dz0=w([D.f3M,D.f4l,D.f3S],x.o)
D.dqa=w(["led","diode","indicator"],x.s)
D.ezo=new C.mW("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dpH,D.dz0,D.dqa)
D.a8c={level:0}
D.dCK=new B.bu(D.a8c,[0.2],x.J)
D.f5_=new B.dX(["p","pot",0.5,0.3,D.dCK])
D.f51=new B.dX(["m","motor",0.8,0.3,A.jr])
D.d4y=w([D.JU,D.f5_,D.f51],x.d)
D.f3L=new B.cu(["b",0,"p",0])
D.f4h=new B.cu(["p",1,"m",0])
D.f4d=new B.cu(["m",1,"b",1])
D.duB=w([D.f3L,D.f4h,D.f4d],x.o)
D.dm9=w(["fan","motor","spin","dimmer"],x.s)
D.ezf=new C.mW("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d4y,D.duB,D.dm9)
D.a6S=new B.bu(D.a8c,[0.9],x.J)
D.aRs=new B.dX(["s","solar",0.25,0.3,D.a6S])
D.aRr=new B.dX(["l","bulb",0.75,0.3,A.jr])
D.d7l=w([D.aRs,D.aRr],x.d)
D.f4o=new B.cu(["s",0,"l",0])
D.f4b=new B.cu(["l",1,"s",1])
D.d5m=w([D.f4o,D.f4b],x.o)
D.dvj=w(["solar","sun","without battery","no battery","free"],x.s)
D.ezi=new C.mW("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d7l,D.d5m,D.dvj)
D.f5J=new B.dX(["c","crank",0.25,0.3,D.a6S])
D.dkl=w([D.f5J,D.aRr],x.d)
D.f3P=new B.cu(["c",0,"l",0])
D.f4a=new B.cu(["l",1,"c",1])
D.dkX=w([D.f3P,D.f4a],x.o)
D.dkv=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eze=new C.mW("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dkl,D.dkX,D.dkv)
D.dCJ=new B.bu(D.a8c,[0.7],x.J)
D.f54=new B.dX(["t","turbine",0.25,0.3,D.dCJ])
D.f4S=new B.dX(["m","motor",0.75,0.3,A.jr])
D.dej=w([D.f54,D.f4S],x.d)
D.f4z=new B.cu(["t",0,"m",0])
D.f4e=new B.cu(["m",1,"t",1])
D.ddi=w([D.f4z,D.f4e],x.o)
D.dj2=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ezb=new C.mW("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dej,D.ddi,D.dj2)
D.aIH=new B.bu(D.Jt,[9],x.J)
D.a9j=new B.dX(["b","battery",0.2,0.3,D.aIH])
D.aRp=new B.dX(["r","radio",0.8,0.3,A.jr])
D.dvT=w([D.a9j,D.Ep,D.aRp],x.d)
D.f4t=new B.cu(["s",1,"r",0])
D.aRl=new B.cu(["r",1,"b",1])
D.c9D=w([D.En,D.f4t,D.aRl],x.o)
D.dum=w(["radio","music","listen"],x.s)
D.ezn=new C.mW("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dvT,D.c9D,D.dum)
D.dDO=new B.bu(D.Jt,[12],x.J)
D.aRo=new B.dX(["b","battery",0.2,0.3,D.dDO])
D.f5s=new B.dX(["t","tv",0.8,0.3,A.jr])
D.d4g=w([D.aRo,D.Ep,D.f5s],x.d)
D.f4u=new B.cu(["s",1,"t",0])
D.aRm=new B.cu(["t",1,"b",1])
D.dnF=w([D.En,D.f4u,D.aRm],x.o)
D.dvR=w(["tv","television","screen","watch"],x.s)
D.ez8=new C.mW("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d4g,D.dnF,D.dvR)
D.f5i=new B.dX(["z","buzzer",0.8,0.3,A.jr])
D.cKV=w([D.JU,D.Ep,D.f5i],x.d)
D.f4v=new B.cu(["s",1,"z",0])
D.f4N=new B.cu(["z",1,"b",1])
D.cZY=w([D.En,D.f4v,D.f4N],x.o)
D.dsC=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ezk=new C.mW("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cKV,D.cZY,D.dsC)
D.f50=new B.dX(["h","heater",0.8,0.3,A.jr])
D.dhH=w([D.a9j,D.Ep,D.f50],x.d)
D.f4q=new B.cu(["s",1,"h",0])
D.f4_=new B.cu(["h",1,"b",1])
D.d_F=w([D.En,D.f4q,D.f4_],x.o)
D.cuC=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ez9=new C.mW("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dhH,D.d_F,D.cuC)
D.f5u=new B.dX(["s","solar",0.2,0.25,D.a6S])
D.dDR=new B.bu(D.aL8,[100],x.J)
D.f5x=new B.dX(["r","resistor",0.55,0.25,D.dDR])
D.f5E=new B.dX(["c","capacitor",0.85,0.25,A.jr])
D.f4X=new B.dX(["q","resistor",0.55,0.6,D.aIK])
D.f5v=new B.dX(["d","led",0.85,0.6,A.jr])
D.dnb=w([D.f5u,D.f5x,D.f5E,D.f4X,D.f5v],x.d)
D.f4p=new B.cu(["s",0,"r",0])
D.f4k=new B.cu(["r",1,"c",0])
D.f3R=new B.cu(["c",1,"s",1])
D.f3Q=new B.cu(["c",0,"q",0])
D.f4j=new B.cu(["q",1,"d",0])
D.f3T=new B.cu(["d",1,"c",1])
D.db8=w([D.f4p,D.f4k,D.f3R,D.f3Q,D.f4j,D.f3T],x.o)
D.djD=w(["capacitor","store","charge","flash"],x.s)
D.ezm=new C.mW("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dnb,D.db8,D.djD)
D.f57=new B.dX(["b","battery",0.15,0.3,D.a6V])
D.f5K=new B.dX(["l1","bulb",0.5,0.3,A.jr])
D.f5f=new B.dX(["l2","bulb",0.85,0.3,A.jr])
D.d2g=w([D.f57,D.f5K,D.f5f],x.d)
D.f3K=new B.cu(["b",0,"l1",0])
D.f47=new B.cu(["l1",1,"l2",0])
D.f48=new B.cu(["l2",1,"b",1])
D.df6=w([D.f3K,D.f47,D.f48],x.o)
D.dvC=w(["series","two bulbs","dim"],x.s)
D.ezc=new C.mW("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d2g,D.df6,D.dvC)
D.ekW={volts:0,charge:1}
D.dDU=new B.bu(D.ekW,[1.5,0],x.J)
D.f5C=new B.dX(["b","battery",0.75,0.3,D.dDU])
D.d1E=w([D.aRs,D.f5C],x.d)
D.f4n=new B.cu(["s",0,"b",0])
D.f3O=new B.cu(["b",1,"s",1])
D.dbs=w([D.f4n,D.f3O],x.o)
D.djN=w(["charge","rechargeable","flat","recharge"],x.s)
D.eza=new C.mW("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d1E,D.dbs,D.djN)
D.dDN=new B.bu(D.Jt,[4.5],x.J)
D.f52=new B.dX(["b","battery",0.2,0.3,D.dDN])
D.aRn=new B.dX(["p","phone",0.8,0.3,A.jr])
D.de8=w([D.f52,D.Ep,D.aRn],x.d)
D.f4s=new B.cu(["s",1,"p",0])
D.a9i=new B.cu(["p",1,"b",1])
D.drw=w([D.En,D.f4s,D.a9i],x.o)
D.dt1=w(["phone","charger","usb","mobile"],x.s)
D.ezg=new C.mW("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.de8,D.drw,D.dt1)
D.f4P=new B.dX(["f","fan",0.8,0.3,A.jr])
D.cmJ=w([D.JU,D.f4P],x.d)
D.f3J=new B.cu(["b",0,"f",0])
D.f3Y=new B.cu(["f",1,"b",1])
D.d0d=w([D.f3J,D.f3Y],x.o)
D.dm8=w(["fan","cool","air","wind"],x.s)
D.ezp=new C.mW("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cmJ,D.d0d,D.dm8)
D.f5m=new B.dX(["b","battery",0.15,0.2,D.a6V])
D.f4Q=new B.dX(["a","ammeter",0.5,0.2,A.jr])
D.f4O=new B.dX(["l","bulb",0.85,0.2,A.jr])
D.f5o=new B.dX(["v","voltmeter",0.5,0.6,A.jr])
D.dk9=w([D.f5m,D.f4Q,D.f4O,D.f5o],x.d)
D.f3H=new B.cu(["b",0,"a",0])
D.f3G=new B.cu(["a",1,"l",0])
D.f4B=new B.cu(["v",0,"l",0])
D.f4C=new B.cu(["v",1,"l",1])
D.dbj=w([D.f3H,D.f3G,D.aRj,D.f4B,D.f4C],x.o)
D.dz_=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ezl=new C.mW("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dk9,D.dbj,D.dz_)
D.f5N=new B.dX(["b","battery",0.15,0.2,D.aIH])
D.f56=new B.dX(["t","tv",0.55,0.2,A.jr])
D.aII=new B.bu(D.Jt,[5],x.J)
D.f4V=new B.dX(["c","buck",0.4,0.5,D.aII])
D.f58=new B.dX(["p","phone",0.8,0.5,A.jr])
D.d8M=w([D.f5N,D.f56,D.f4V,D.f58],x.d)
D.f3N=new B.cu(["b",0,"t",0])
D.aRh=new B.cu(["b",0,"c",0])
D.aRi=new B.cu(["c",1,"p",0])
D.de5=w([D.f3N,D.aRm,D.aRh,D.aRi,D.a9i],x.o)
D.d6U=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ezd=new C.mW("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d8M,D.de5,D.d6U)
D.f4W=new B.dX(["c","buck",0.5,0.3,D.aII])
D.d_u=w([D.aRo,D.f4W,D.aRn],x.d)
D.d4I=w([D.aRh,D.aRi,D.a9i],x.o)
D.cy6=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ez7=new C.mW("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d_u,D.d4I,D.cy6)
D.f5d=new B.dX(["d","diode",0.5,0.3,A.jr])
D.dfk=w([D.a9j,D.f5d,D.aRp],x.d)
D.f3I=new B.cu(["b",0,"d",0])
D.f3U=new B.cu(["d",1,"r",0])
D.cNt=w([D.f3I,D.f3U,D.aRl],x.o)
D.d6z=w(["diode","protect","backwards","one way"],x.s)
D.ezj=new C.mW("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dfk,D.cNt,D.d6z)
D.RX=w([D.ezh,D.ezo,D.ezf,D.ezi,D.eze,D.ezb,D.ezn,D.ez8,D.ezk,D.ez9,D.ezm,D.ezc,D.eza,D.ezg,D.ezp,D.ezl,D.ezd,D.ez7,D.ezj],B.as("O<mW>"))
D.hCU=new C.GT("Moon",1.62,A.db,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hCS=new C.GT("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hCV=new C.GT("Mercury",3.7,A.kp,"Mercury is small, so its gravity is like Mars.")
D.hCP=new C.GT("Venus",8.87,A.aV,"Venus is almost as heavy as Earth, with strong gravity.")
D.hCR=new C.GT("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hCT=new C.GT("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hCQ=new C.GT("Jupiter",24.79,A.cF,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.t8=w([D.hCU,D.hCS,D.hCV,D.hCP,D.hCR,D.hCT,D.hCQ],B.as("O<GT>"))
D.db6=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dbR=w([0.2,0.5,0.8],x.n)
D.b0V=new C.Ld(0,"accordion")
D.d0z=w([A.jH,A.CY,A.CE],x.w)
D.d8c=w(["Mail","SMS","Ad"],x.s)
D.d18=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hB7=new C.B7(D.b0V,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBL,D.d0z,D.d8c,D.d18)
D.ad5=new C.Ld(1,"flip")
D.djx=w([A.qK,Z.HT,A.uT],x.w)
D.ddQ=w(["Unlock","Verify","Secure"],x.s)
D.d_q=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hB6=new C.B7(D.ad5,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBg,D.djx,D.ddQ,D.d_q)
D.b0W=new C.Ld(2,"towers")
D.dcC=w([A.zj,A.qN,A.id],x.w)
D.dc9=w(["Save","Grow","Earn"],x.s)
D.cOm=w(["","",""],x.s)
D.hB8=new C.B7(D.b0W,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5c,D.dcC,D.dc9,D.cOm)
D.ad6=new C.Ld(3,"assemble")
D.dkz=w([A.oC,A.hv,A.ed],x.w)
D.d7x=w(["Launch","Charge","Shine"],x.s)
D.dgI=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hBa=new C.B7(D.ad6,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azB,D.dkz,D.d7x,D.dgI)
D.b0X=new C.Ld(4,"carousel")
D.dkm=w([A.ba,A.eX],x.O)
D.d8l=w([A.n3,A.apr,A.PI],x.w)
D.d2G=w(["Explore","Discover","Learn"],x.s)
D.dee=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hB5=new C.B7(D.b0X,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dkm,D.d8l,D.d2G,D.dee)
D.b0Y=new C.Ld(5,"burst")
D.dc4=w([A.hT,A.ry],x.O)
D.d12=w([A.kv,A.n1,A.hJ],x.w)
D.d1o=w(["Cheer","Win","Love"],x.s)
D.d3M=w(["Make some noise","First place","Share the joy"],x.s)
D.hB9=new C.B7(D.b0Y,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dc4,D.d12,D.d1o,D.d3M)
D.aAW=w([D.hB7,D.hB6,D.hB8,D.hBa,D.hB5,D.hB9],B.as("O<B7>"))
D.f0P=new B.b5("skin","Skin",A.aps)
D.f2t=new B.b5("muscle","Muscles",A.Pj)
D.f27=new B.b5("organ","Organs",A.hJ)
D.bP5=new B.a0(62747,"MaterialIcons",!1)
D.f2f=new B.b5("bone","Skeleton",D.bP5)
D.f2B=new B.b5("vessel","Blood vessels",A.py)
D.dcI=w([D.f0P,D.f2t,D.f27,D.f2f,D.f2B],x.r)
D.f7M=new C.vl("Simple legs","Light. Land gently.",0.15,0.2)
D.f7O=new C.vl("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f7R=new C.vl("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dq=w([D.f7M,D.f7O,D.f7R],x._)
D.f3o=new B.cu(["beat",0.18,0.28,0])
D.f4w=new B.cu(["burst",0.7,0.2,0])
D.f4H=new B.cu(["delay",0.45,0.5,1])
D.f4g=new B.cu(["ripple",0.75,0.6,3])
D.d7g=w([D.f3o,D.f4w,D.f4H,D.f4g],x.e)
D.diQ=w([P.lv,O.JT,F.Us],x.u)
D.hzy=new C.GE("First spark","A clock lights a burst and a ripple",D.d7g,D.diQ)
D.f3X=new B.cu(["beat",0.15,0.3,1])
D.f32=new B.cu(["ripple",0.62,0.15,0])
D.f4D=new B.cu(["delay",0.4,0.45,0])
D.f3D=new B.cu(["ripple",0.7,0.45,0])
D.f3k=new B.cu(["delay",0.4,0.7,1])
D.f4i=new B.cu(["shake",0.75,0.75,0])
D.dwK=w([D.f3X,D.f32,D.f4D,D.f3D,D.f3k,D.f4i],x.e)
D.eBd=new B.y(2,4)
D.aQZ=new B.y(4,5)
D.daX=w([P.lv,O.JT,F.Us,D.eBd,D.aQZ],x.u)
D.hzA=new C.GE("Heartbeat","Two thumps, then a shake",D.dwK,D.daX)
D.f3t=new B.cu(["dice",0.15,0.7,1])
D.f4J=new B.cu(["echo",0.4,0.7,0])
D.f3B=new B.cu(["comet",0.7,0.5,4])
D.f4x=new B.cu(["burst",0.72,0.2,1])
D.f3V=new B.cu(["burst",0.3,0.25,0])
D.f3u=new B.cu(["pop",0.55,0.85,0])
D.cua=w([D.f3t,D.f4J,D.f3B,D.f4x,D.f3V,D.f3u],x.e)
D.eAy=new B.y(1,3)
D.eAz=new B.y(1,4)
D.aQV=new B.y(0,5)
D.dkh=w([P.lv,S.vr,D.eAy,D.eAz,D.aQV],x.u)
D.hzz=new C.GE("Fireworks","Dice launch comets that burst in colour",D.cua,D.dkh)
D.f3y=new B.cu(["beat",0.15,0.2,2])
D.f44=new B.cu(["chance",0.4,0.2,0])
D.f3q=new B.cu(["ball",0.7,0.12,3])
D.f3d=new B.cu(["chance",0.4,0.5,1])
D.f4I=new B.cu(["ball",0.3,0.08,1])
D.f36=new B.cu(["ripple",0.7,0.55,3])
D.cnb=w([D.f3y,D.f44,D.f3q,D.f3d,D.f4I,D.f36],x.e)
D.eBe=new B.y(2,5)
D.cKE=w([P.lv,S.vr,O.a9a,F.Ut,D.eBe],x.u)
D.hzx=new C.GE("Rain","Balls fall at random and splash",D.cnb,D.cKE)
D.f45=new B.cu(["beat",0.12,0.45,2])
D.f4y=new B.cu(["toggle",0.38,0.2,0])
D.f4F=new B.cu(["wash",0.7,0.15,4])
D.f3s=new B.cu(["count3",0.38,0.45,0])
D.f4A=new B.cu(["burst",0.72,0.4,0])
D.f3W=new B.cu(["light",0.55,0.7,1])
D.f3e=new B.cu(["pop",0.8,0.8,4])
D.dn9=w([D.f45,D.f4y,D.f4F,D.f3s,D.f4A,D.f3W,D.f3e],x.e)
D.eBL=new B.y(3,6)
D.cqk=w([P.lv,S.vr,O.a9a,F.Ut,D.aQV,D.eBL],x.u)
D.hzv=new C.GE("Disco","A beat drives lights, washes and bursts",D.dn9,D.cqk)
D.f4M=new B.cu(["button",0.12,0.2,0])
D.f38=new B.cu(["delay",0.34,0.2,1])
D.f4L=new B.cu(["light",0.56,0.2,1])
D.f4E=new B.cu(["delay",0.56,0.45,1])
D.f46=new B.cu(["ball",0.34,0.6,0])
D.f3c=new B.cu(["delay",0.34,0.8,1])
D.f31=new B.cu(["burst",0.7,0.8,5])
D.cam=w([D.f4M,D.f38,D.f4L,D.f4E,D.f46,D.f3c,D.f31],x.e)
D.eDX=new B.y(5,6)
D.dsL=w([P.lv,S.vr,F.Us,F.Ut,D.aQZ,D.eDX],x.u)
D.hzw=new C.GE("Domino","Tap the button and watch it run down the line",D.cam,D.dsL)
D.aBk=w([D.hzy,D.hzA,D.hzz,D.hzx,D.hzv,D.hzw],B.as("O<GE>"))
D.di6=w([0.05,0.15,0.25],x.n)
D.dj1=w([1.5,3,4.5,9,12],x.n)
D.f_8=new B.b5("dice","Dice",A.ou)
D.f0n=new B.b5("coin","Coin",Q.ze)
D.f2w=new B.b5("num","Number",A.zn)
D.djf=w([D.f_8,D.f0n,D.f2w],x.r)
D.djj=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBq=w([A.c0,A.aV,A.b4,A.aH,A.br,A.bT,A.cF,A.hq],x.O)
D.dkn=w([A.bT,A.aH,A.dy,A.b4],x.O)
D.dlp=w([],x.a)
D.ess=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.esy=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bi,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.etc=new C.eh("crank","Hand crank","\ud83d\udd04",A.cF,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.esP=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.esk=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hq,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.esN=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eth=new C.eh("diode","Diode","\u27a1\ufe0f",A.aV,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.esZ=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dy,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.esD=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.br,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ete=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.esc=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hq,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.et_=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aV,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.et1=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dy,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.esA=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.esE=new C.eh("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.esW=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.est=new C.eh("heater","Heater","\ud83d\udd25",A.cF,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.esR=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.esJ=new C.eh("radio","Radio","\ud83d\udcfb",A.nt,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.esG=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.esj=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.esq=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aV,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.esw=new C.eh("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.etj=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.et8=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.esM=new C.eh("calculator","Calculator","\ud83e\uddee",A.Md,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.esp=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eti=new C.eh("router","WiFi router","\ud83d\udcf6",A.hq,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.etl=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.esf=new C.eh("toycar","Toy car","\ud83d\ude97",A.cF,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.etm=new C.eh("kettle","Kettle","\ud83e\uded6",A.mP,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.esn=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dy,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.esz=new C.eh("lights","Party lights","\ud83c\udf84",A.nt,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.esK=new C.eh("fridge","Fridge","\ud83e\uddca",A.hs,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.esh=new C.eh("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.et9=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.esH=new C.eh("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.esm=new C.eh("drill","Power drill","\ud83d\udd29",A.aV,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.esL=new C.eh("torch","Torch","\ud83d\udd26",A.bN,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.et6=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.esi=new C.eh("microwave","Microwave","\ud83c\udf72",A.cF,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.et0=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bi,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.esv=new C.eh("camera","Security camera","\ud83d\udcf7",A.am,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.esV=new C.eh("console","Game console","\ud83c\udfae",A.br,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.etb=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hm,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.esg=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.esQ=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dy,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.esY=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nt,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.etg=new C.eh("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ese=new C.eh("toaster","Toaster","\ud83c\udf5e",A.dX,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.etk=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.et5=new C.eh("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.esS=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hT,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.et3=new C.eh("headphones","Headphones","\ud83c\udfa7",A.br,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eso=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.etf=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.esb=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hm,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.esI=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.esB=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.esX=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u1,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.esd=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.esr=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.etd=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.esT=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.esO=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.et4=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.esC=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.esU=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.et2=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cF,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.et7=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.esa=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.esF=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.esx=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.esl=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dy,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.esu=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eta=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.br,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sl=w([D.ess,D.esy,D.etc,D.esP,D.esk,D.esN,D.eth,D.esZ,D.esD,D.ete,D.esc,D.et_,D.et1,D.esA,D.esE,D.esW,D.est,D.esR,D.esJ,D.esG,D.esj,D.esq,D.esw,D.etj,D.et8,D.esM,D.esp,D.eti,D.etl,D.esf,D.etm,D.esn,D.esz,D.esK,D.esh,D.et9,D.esH,D.esm,D.esL,D.et6,D.esi,D.et0,D.esv,D.esV,D.etb,D.esg,D.esQ,D.esY,D.etg,D.ese,D.etk,D.et5,D.esS,D.et3,D.eso,D.etf,D.esb,D.esI,D.esB,D.esX,D.esd,D.esr,D.etd,D.esT,D.esO,D.et4,D.esC,D.esU,D.et2,D.et7,D.esa,D.esF,D.esx,D.esl,D.esu,D.eta],B.as("O<eh>"))
D.dm3=w([5,10,15,25,45,60],x.t)
D.dmq=w([-0.045,0.03,-0.015],x.n)
D.aBT=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v5=w([0.05,0.2,0.35],x.n)
D.b8G=new B.ac(0,A.G,A.ht,A.dG,6)
D.dp6=w([D.b8G],x.V)
D.ezJ=new B.y(0,"AND")
D.eAA=new B.y(1,"Adder")
D.eBf=new B.y(2,"Blinker")
D.eBM=new B.y(3,"Memory")
D.dpV=w([D.ezJ,D.eAA,D.eBf,D.eBM],x.I)
D.aC6=w([-104,0,104],x.n)
D.aC8=w([-14,3],x.n)
D.dqQ=w([-8,0,8],x.n)
D.aCh=w([-92,0,92],x.n)
D.drf=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f7J=new C.vl("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f7Q=new C.vl("Medium tank","Balanced.",0.35,1)
D.f7P=new C.vl("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SA=w([D.f7J,D.f7Q,D.f7P],x._)
D.nN=w([0.04,0.2,0.36],x.n)
D.aCt=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f26=new B.b5(D.b0V,"Fold",Q.aqo)
D.f14=new B.b5(D.ad5,"Flip",A.CN)
D.bPm=new B.a0(62889,"MaterialIcons",!1)
D.f2s=new B.b5(D.b0W,"Rise",D.bPm)
D.aqB=new B.a0(983870,"MaterialIcons",!1)
D.eZt=new B.b5(D.ad6,"Assemble",D.aqB)
D.eZH=new B.b5(D.b0X,"Spin",D.ap_)
D.eZB=new B.b5(D.b0Y,"Pop",A.kv)
D.dsI=w([D.f26,D.f14,D.f2s,D.eZt,D.eZH,D.eZB],B.as("O<+(Ld,n,a0)>"))
D.aCy=w([A.bT,A.dy,A.bx,A.aH,A.br,A.c0],x.O)
D.dt7=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.duc=w([3,4.5,5,6,9],x.n)
D.b9e=new B.ac(0,A.G,A.aU,A.I,16)
D.duF=w([D.b9e],x.V)
D.fPm=new B.B("\ud83e\uddcd",null,S.KI,null,null,null,null,null,null,null,null,null)
D.c9q=new B.IR(5,null,null,A.bA,A.bT,null,null,null,null)
D.feL=new B.a5(150,null,D.c9q,null)
D.fwR=new B.H(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new B.B("Getting the body ready...",null,D.fwR,null,null,null,null,null,null,null,null,null)
D.fPp=new B.B("Real 3D anatomy, kept on your phone",null,A0.xg,null,null,null,null,null,null,null,null,null)
D.duI=w([D.fPm,A.aB,D.feL,A.af,D.fSG,A.ax,D.fPp],x.p)
D.dvg=w(["solar","turbine","crank","pot"],x.s)
D.dvG=w([0,0.35,0.75,1],x.n)
D.dwZ=w(["volts","level","ohms","on"],x.s)
D.dyp=w([A.jH,A.CY,A.CE,A.qK,Z.HT,A.uT,A.zj,A.qN,A.id,A.oC,A.hv,A.ed,A.hJ,A.ie,A.n1,A.lM,A.uS,A.t4,A.lj,A.Hp,A.wJ,A.CM,A.CI,A.a35,A.P9,A.CU,A.Pj,A.apP,H.aqx,A.kv],x.w)
D.eim={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hrO=new C.yF("Switch",F.pt,A.bi,0,"Tap it to turn it ON or OFF.")
D.hrK=new C.yF("Blinker",A.oA,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hrL=new C.yF("AND",D.aqB,A.cn,2,"ON only when BOTH inputs are ON.")
D.bQR=new B.a0(63671,"MaterialIcons",!1)
D.hrJ=new C.yF("OR",D.bQR,A.br,2,"ON when EITHER input is ON.")
D.hrM=new C.yF("XOR",Ab.a2s,A.bT,2,"ON when the inputs are DIFFERENT.")
D.hrG=new C.yF("NAND",A.uF,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bPX=new B.a0(63176,"MaterialIcons",!1)
D.hrH=new C.yF("NOR",D.bPX,A.hq,2,"ON only when BOTH inputs are OFF.")
D.hrI=new C.yF("NOT",Y.CZ,A.cF,1,"Flips the signal: ON becomes OFF.")
D.hrN=new C.yF("Light",A.mh,A.dy,1,"Glows when its input is ON.")
D.hrP=new C.yF("Buzzer",A.oB,A.c0,1,"Beeps while its input is ON.")
D.A3=new B.bu(D.eim,[D.hrO,D.hrK,D.hrL,D.hrJ,D.hrM,D.hrG,D.hrH,D.hrI,D.hrN,D.hrP],B.as("bu<n,yF>"))
D.d_Y=w([A.A],x.M)
D.d0k=w([A.aA,A.aF],x.M)
D.d9X=w([A.aA,A.A,A.aF],x.M)
D.dby=w([A.aA,A.ly,A.A,A.lz,A.aF],x.M)
D.dpR=w([A.aA,A.ly,A.a6,A.aa,A.lz,A.aF],x.M)
D.dDc=new B.cZ([1,D.d_Y,2,D.d0k,3,D.d9X,4,A.aD6,5,D.dby,6,D.dpR],B.as("cZ<G,ai<d9>>"))
D.ekU={Calm:0,Box:1,Sleep:2}
D.cI1=w([4,2,6,0],x.n)
D.cI8=w([4,4,4,4],x.n)
D.cI9=w([4,7,8,0],x.n)
D.T1=new B.bu(D.ekU,[D.cI1,D.cI8,D.cI9],B.as("bu<n,ai<F>>"))
D.eiz={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xD=new C.a1s(0,"source")
D.db_=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hyb=new C.qr("Clock",A.oA,D.xD,A.bx,D.db_)
D.hy7=new C.qr("Button",A.D1,D.xD,A.aV,A.Z)
D.duo=w(["random","quick","slow"],x.s)
D.hyi=new C.qr("Dice",A.ou,D.xD,A.bT,D.duo)
D.bQv=new B.a0(63484,"MaterialIcons",!1)
D.F6=new C.a1s(1,"logic")
D.dzf=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hye=new C.qr("Delay",D.bQv,D.F6,A.cn,D.dzf)
D.dmb=w(["fast","mid","slow"],x.s)
D.hyj=new C.qr("Echo",A.aq5,D.F6,A.br,D.dmb)
D.hyg=new C.qr("Every 2nd",Y.CZ,D.F6,A.hq,A.Z)
D.bQa=new B.a0(63309,"MaterialIcons",!1)
D.hyd=new C.qr("Every 3rd",D.bQa,D.F6,A.aH,A.Z)
D.bS7=new B.a0(983902,"MaterialIcons",!1)
D.c9K=w(["50%","25%","75%"],x.s)
D.hyl=new C.qr("Chance",D.bS7,D.F6,A.cF,D.c9K)
D.rh=new C.a1s(2,"out")
D.hy9=new C.qr("Light",A.mh,D.rh,A.dy,A.Z)
D.hya=new C.qr("Burst",A.kv,D.rh,A.bT,A.Z)
D.hy8=new C.qr("Ripple",A.zq,D.rh,A.ba,A.Z)
D.hyh=new C.qr("Ball",A.aqg,D.rh,A.cF,A.Z)
D.hyf=new C.qr("Comet",A.oC,D.rh,A.br,A.Z)
D.bRS=new B.a0(983669,"MaterialIcons",!1)
D.hyk=new C.qr("Shake",D.bRS,D.rh,A.c0,A.Z)
D.hym=new C.qr("Pop",A.Hq,D.rh,A.b4,A.Z)
D.hyc=new C.qr("Wash",A.Pn,D.rh,A.pa,A.Z)
D.n7=new B.bu(D.eiz,[D.hyb,D.hy7,D.hyi,D.hye,D.hyj,D.hyg,D.hyd,D.hyl,D.hy9,D.hya,D.hy8,D.hyh,D.hyf,D.hyk,D.hym,D.hyc],B.as("bu<n,qr>"))
D.eiM={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Av=new C.Kc(0,"tv")
D.f9i=new C.mt("Samsung Neo QLED 8K",D.Av,F.y7,A.aH)
D.f99=new C.mt("LG OLED evo G5",D.Av,A.ep,A.hm)
D.f90=new C.mt("Sony Bravia 9",D.Av,A.rt,A.bu)
D.f94=new C.mt("Apple TV 4K",D.Av,A.ea,A.bP)
D.f91=new C.mt("Bang and Olufsen Beovision",D.Av,F.FD,F.u1)
D.a9u=new C.Kc(1,"iphone")
D.aRO=new C.mt("iPhone 18 Pro Max",D.a9u,D.ak4,A.ch)
D.Er=new C.Kc(3,"fold")
D.bvl=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f9e=new C.mt("iPhone Fold",D.Er,D.bvl,A.b8)
D.Aw=new C.Kc(2,"android")
D.f9f=new C.mt("Samsung Galaxy S26 Ultra",D.Aw,F.Y5,A.d5)
D.bo3=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f97=new C.mt("Samsung Galaxy Z Fold7",D.Er,D.bo3,A.cy)
D.f93=new C.mt("Google Pixel 10 Pro XL",D.Aw,A.db,A.bg)
D.f9b=new C.mt("Xiaomi 16 Ultra",D.Aw,A.ia,A.ca)
D.f96=new C.mt("Huawei Mate 80 Pro Max",D.Aw,A.er,A.ay)
D.f92=new C.mt("OPPO Find X9 Ultra",D.Aw,A.e5,A.b4)
D.f9k=new C.mt("Honor Magic V5",D.Er,A.d6,A.cn)
D.f98=new C.mt("vivo X300 Pro",D.Aw,A.hE,A.cF)
D.aRP=new C.Kc(4,"tablet")
D.f9d=new C.mt("iPad Pro M5",D.aRP,A.db,A.aH)
D.a9v=new C.Kc(5,"reader")
D.f9l=new C.mt("Kindle Scribe",D.a9v,A.e6,A.bu)
D.Ax=new C.Kc(6,"computer")
D.f9c=new C.mt("MacBook Pro M5 Max",D.Ax,A.db,A.ch)
D.f9h=new C.mt("iMac 32 inch",D.Ax,A.bP,A.cy)
D.f9a=new C.mt("Pro Display XDR 8K",D.Ax,A.ia,A.ba)
D.f95=new C.mt("Sony Laser Projector",D.Ax,A.cq,A.dy)
D.f9g=new C.mt("Luxury car touchscreen",D.Ax,M.nx,A.ay)
D.f9j=new C.mt("Apple Vision Pro",D.Ax,A.dU,A.br)
D.ms=new B.bu(D.eiM,[D.f9i,D.f99,D.f90,D.f94,D.f91,D.aRO,D.f9e,D.f9f,D.f97,D.f93,D.f9b,D.f96,D.f92,D.f9k,D.f98,D.f9d,D.f9l,D.f9c,D.f9h,D.f9a,D.f95,D.f9g,D.f9j],B.as("bu<n,mt>"))
D.eiY={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.by9=new C.fQ(20,4,13,!1)
D.byA=new C.fQ(14,5,13.5,!1)
D.byr=new C.fQ(9,2.4,10,!1)
D.byF=new C.fQ(7,5,12.5,!1)
D.byu=new C.fQ(8,3.5,12,!1)
D.by5=new C.fQ(15,2,6,!1)
D.byD=new C.fQ(45,6,13.5,!0)
D.byl=new C.fQ(10,8,13.5,!1)
D.byd=new C.fQ(25,3,12,!0)
D.byj=new C.fQ(35,4,12,!0)
D.byk=new C.fQ(40,4.5,9.5,!0)
D.bym=new C.fQ(55,3,9,!0)
D.by6=new C.fQ(18,3,9,!1)
D.byC=new C.fQ(22,4,13.5,!1)
D.byv=new C.fQ(16,5,13.5,!1)
D.byh=new C.fQ(30,4,9,!0)
D.byO=new C.fQ(5,3.5,13,!1)
D.byp=new C.fQ(25,3,13.5,!0)
D.byy=new C.fQ(14,2.5,9,!1)
D.byo=new C.fQ(6,6,13,!1)
D.byG=new C.fQ(30,1.2,5,!0)
D.byN=new C.fQ(35,3,4.5,!0)
D.byJ=new C.fQ(20,4.5,7.5,!0)
D.byn=new C.fQ(55,5.5,13.5,!0)
D.by4=new C.fQ(45,5.5,13.5,!0)
D.byz=new C.fQ(40,5.5,13.5,!0)
D.byM=new C.fQ(60,6,13.5,!0)
D.akz=new C.fQ(28,4,7,!0)
D.Gz=new C.fQ(25,4,7,!0)
D.byg=new C.fQ(30,4,7,!0)
D.byb=new C.fQ(22,4,7,!0)
D.byc=new C.fQ(24,4,7,!0)
D.byq=new C.fQ(60,3,5.5,!0)
D.by7=new C.fQ(18,9,14,!0)
D.bye=new C.fQ(25,9,14,!0)
D.akA=new C.fQ(30,8,14,!0)
D.bya=new C.fQ(20,8,14,!0)
D.byi=new C.fQ(30,9,14,!0)
D.byH=new C.fQ(22,5,9.5,!0)
D.by8=new C.fQ(30,2.5,10.5,!0)
D.byw=new C.fQ(50,5.5,13.5,!0)
D.byL=new C.fQ(12,2,9.5,!1)
D.byt=new C.fQ(16,1.3,9.5,!0)
D.byE=new C.fQ(40,2.5,7,!0)
D.byK=new C.fQ(60,1.2,4.8,!0)
D.byI=new C.fQ(18,5,13.5,!0)
D.byB=new C.fQ(8,2,9.5,!1)
D.bys=new C.fQ(12,2.5,8,!1)
D.byf=new C.fQ(20,3.5,13.5,!0)
D.byx=new C.fQ(3.5,3,13,!1)
D.A4=new B.bu(D.eiY,[D.by9,D.byA,D.byr,D.byF,D.byu,D.by5,D.byD,D.byl,D.byd,D.byj,D.byk,D.bym,D.by6,D.byC,D.byv,D.byh,D.byO,D.byp,D.byy,D.byo,D.byG,D.byN,D.byJ,D.byn,D.by4,D.byz,D.byM,D.akz,D.Gz,D.byg,D.Gz,D.byb,D.Gz,D.byc,D.akz,D.Gz,D.byq,D.by7,D.bye,D.akA,D.bya,D.byi,D.byH,D.by8,D.byw,D.byL,D.byt,D.byE,D.byK,D.Gz,D.akA,D.byI,D.byB,D.bys,D.byf,D.byx],B.as("bu<n,fQ>"))
D.eiw={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eYZ=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eDU=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eDP=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eQl=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eRi=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eQh=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eBV=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eOc=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eZ6=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eRE=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eHi=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eBz=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eGh=new B.y("Movement","They pull your legs together and help you balance.")
D.eIf=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eE2=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eWp=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eXz=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eNV=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eXi=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eMv=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eRN=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eBG=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eIC=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eRr=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eMR=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eXq=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ePM=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eBT=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eSn=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eW2=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eU9=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ezV=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.ePu=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ePy=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eJm=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eEg=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eI3=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eOn=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eUZ=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eZ3=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eRK=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ezD=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eOz=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eAt=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eVe=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eWl=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eP0=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eVt=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eBI=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eWX=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eFD=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eUC=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eJ0=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eML=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eS3=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eX6=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eWZ=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eX2=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eNi=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eSW=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eU6=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eWJ=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eP_=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eL4=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eJN=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ePp=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eRX=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eLB=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eMi=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eG1=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eWh=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eGS=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eAq=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eJl=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eAl=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eEI=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eJq=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eH1=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eSj=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eIi=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eYL=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eJX=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eNb=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ePU=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eHa=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eGU=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dEj=new B.bu(D.eiw,[D.eYZ,D.eDU,D.eDP,D.eQl,D.eRi,D.eQh,D.eBV,D.eOc,D.eZ6,D.eRE,D.eHi,D.eBz,D.eGh,D.eIf,D.eE2,D.eWp,D.eXz,D.eNV,D.eXi,D.eMv,D.eRN,D.eBG,D.eIC,D.eRr,D.eMR,D.eXq,D.ePM,D.eBT,D.eSn,D.eW2,D.eU9,D.ezV,D.ePu,D.ePy,D.eJm,D.eEg,D.eI3,D.eOn,D.eUZ,D.eZ3,D.eRK,D.ezD,D.eOz,D.eAt,D.eVe,D.eWl,D.eP0,D.eVt,D.eBI,D.eWX,D.eFD,D.eUC,D.eJ0,D.eML,D.eS3,D.eX6,D.eWZ,D.eX2,D.eNi,D.eSW,D.eU6,D.eWJ,D.eP_,D.eL4,D.eJN,D.ePp,D.eRX,D.eLB,D.eMi,D.eG1,D.eWh,D.eGS,D.eAq,D.eJl,D.eAl,D.eEI,D.eJq,D.eH1,D.eSj,D.eIi,D.eYL,D.eJX,D.eNb,D.ePU,D.eHa,D.eGU],B.as("bu<n,+(n,n)>"))
D.dLE=new C.Vv(null)
D.dLR=new C.Vw(null)
D.dNU=new C.VA(null)
D.dOI=new C.Wa(null)
D.dOM=new C.Wb(null)
D.dPk=new C.Wj(null)
D.dT5=new C.WS(null)
D.dTM=new C.WT(null)
D.dXZ=new C.WY(null)
D.ecS=new C.WZ(null)
D.ecV=new C.X2(null)
D.ef4=new C.Xm(null)
D.ef5=new C.a9g(null)
D.eh8=new C.Xv(null)
D.el6=new B.o(0,118)
D.aLe=new B.o(0,13)
D.el7=new B.o(0,17)
D.ela=new B.o(0,330)
D.elg=new B.o(0,-13)
D.elh=new B.o(0,-17)
D.eli=new B.o(0,-18)
D.elj=new B.o(0,-19)
D.ell=new B.o(0,-28)
D.eln=new B.o(0,-31)
D.elo=new B.o(0,-32)
D.elu=new B.o(-9.5,-11)
D.elx=new B.o(10,20)
D.elA=new B.o(10,-13)
D.elC=new B.o(10,-22)
D.elD=new B.o(10,-4)
D.elH=new B.o(11,0)
D.a8i=new B.o(11,8)
D.elN=new B.o(12,2)
D.elO=new B.o(14,0)
D.elP=new B.o(14,12)
D.aLq=new B.o(14,8)
D.elQ=new B.o(14,-17)
D.aLs=new B.o(14,-3)
D.aLt=new B.o(14,-4)
D.elT=new B.o(15,0)
D.elU=new B.o(15,-12)
D.elX=new B.o(16,-8)
D.elY=new B.o(18,14)
D.elZ=new B.o(18,-12)
D.aLy=new B.o(20,0)
D.em6=new B.o(20,15)
D.em7=new B.o(20,-17)
D.em8=new B.o(20,-3)
D.em9=new B.o(21,8)
D.emd=new B.o(22,10)
D.aLA=new B.o(22,8)
D.eme=new B.o(24,0)
D.emf=new B.o(24,2)
D.emi=new B.o(24,-18)
D.emj=new B.o(24,-22)
D.emn=new B.o(25,8)
D.emo=new B.o(26,0)
D.ems=new B.o(28,-30)
D.emz=new B.o(30,18)
D.emA=new B.o(30,2)
D.emD=new B.o(31,19)
D.emF=new B.o(32,0)
D.aLE=new B.o(34,0)
D.aLF=new B.o(34,-32)
D.Jx=new B.o(36,0)
D.emS=new B.o(3,-1)
D.emV=new B.o(40,3)
D.en8=new B.o(4,11)
D.enb=new B.o(4,-2)
D.eng=new B.o(5,17)
D.enh=new B.o(5,6)
D.enm=new B.o(6,11)
D.ens=new B.o(8,7)
D.ent=new B.o(8,-10)
D.enu=new B.o(8,-14)
D.aLK=new B.o(9,0)
D.enE=new B.o(-20.5,-17.6)
D.enF=new B.o(-9,18.5)
D.enI=new B.o(-2.6,-1)
D.enR=new B.o(2.6,1)
D.enY=new B.o(-9,12.2)
D.eoh=new B.o(-9,20.5)
D.eoD=new B.o(-10,0)
D.eoE=new B.o(-10,12)
D.aLS=new B.o(-10,4)
D.eoI=new B.o(-11,0)
D.eoL=new B.o(-11,-2)
D.eoP=new B.o(-13,-5)
D.eoQ=new B.o(-14,0)
D.eoR=new B.o(-14,13)
D.eoS=new B.o(-14,2)
D.eoT=new B.o(-14,-12)
D.eoU=new B.o(-14,-19)
D.eoW=new B.o(-14,-23)
D.eoX=new B.o(-15,6)
D.ep_=new B.o(-16,14)
D.ep1=new B.o(-16,-8)
D.ep2=new B.o(-17,10)
D.ep3=new B.o(-17,-18)
D.ep4=new B.o(-17,-8)
D.ep6=new B.o(-18,20)
D.ep7=new B.o(-18,-9)
D.aLU=new B.o(-20,0)
D.ep9=new B.o(-20,16)
D.epa=new B.o(-20,-9)
D.TX=new B.o(-22,8)
D.epb=new B.o(-22,-10)
D.epc=new B.o(-22,-11)
D.epd=new B.o(-24,10)
D.epe=new B.o(-24,11)
D.epf=new B.o(-24,14)
D.epg=new B.o(-24,-22)
D.epi=new B.o(-25,-11)
D.epj=new B.o(-26,0)
D.epk=new B.o(-26,-18)
D.epl=new B.o(-2,9)
D.epm=new B.o(-2,-10)
D.epn=new B.o(-2,-20)
D.epq=new B.o(-2,-9)
D.eps=new B.o(-32,0)
D.aLW=new B.o(-34,0)
D.epx=new B.o(-40,3)
D.epz=new B.o(-4,11)
D.epA=new B.o(-4,-17)
D.epB=new B.o(-4,-2)
D.epF=new B.o(-5,0)
D.epG=new B.o(-5,20)
D.epH=new B.o(-5,6)
D.epI=new B.o(-6,26)
D.epJ=new B.o(-6,6)
D.epK=new B.o(-6,-42)
D.epM=new B.o(-7,-19)
D.epN=new B.o(-7,-24)
D.epQ=new B.o(-8,-9)
D.a8r=new B.o(-9,0)
D.epR=new B.o(-9,1)
D.epT=new B.o(-9,-23)
D.fGD=new B.B("Thinking\u2026",null,A.hj,null,null,null,null,null,null,null,null,null)
D.eqV=new B.D(A.jE,D.fGD,null)
D.fXr=new B.B("Start from a ready-made board",null,A.fC,null,null,null,null,null,null,null,null,null)
D.er7=new B.D(A3.wj,D.fXr,null)
D.bGb=new B.R(4,0,4,14)
D.fBS=new B.H(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new B.B("Games and little helpers for a spare minute.",null,D.fBS,null,null,null,null,null,null,null,null,null)
D.erj=new B.D(D.bGb,D.fHD,null)
D.dmM=w([A.iC,A.bq],x.O)
D.aQO=new B.c_(A.A,0.5,A.x,null,0,D.dmM,null,null)
D.eyu=new B.c_(A.A,0.5,A.x,null,0,D.aCO,null,null)
D.ddo=w([A.c,A.bK],x.O)
D.eyw=new B.c_(A.A,0.5,A.x,null,0,D.ddo,null,null)
D.dvt=w([A.bP,A.dU],x.O)
D.aQP=new B.c_(A.A,0.5,A.x,null,0,D.dvt,null,null)
D.cS0=w([A.c,A.bP],x.O)
D.eyA=new B.c_(A.tM,0.5,A.x,null,0,D.cS0,null,null)
D.bvp=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dtq=w([A.fn,D.bvp],x.O)
D.eyF=new B.c_(A.tM,0.5,A.x,null,0,D.dtq,null,null)
D.cLb=w([A.db,A.cq],x.O)
D.eyG=new B.c_(A.A,0.5,A.x,null,0,D.cLb,null,null)
D.cZW=w([A.h_,A.aV,A.cZ],x.O)
D.eyJ=new B.c_(A.tM,0.5,A.x,null,0,D.cZW,null,null)
D.dnq=w([A.dU,M.nx],x.O)
D.eyK=new B.c_(A.tM,0.5,A.x,null,0,D.dnq,null,null)
D.eyO=new B.c_(A.A,0.5,A.x,null,0,D.az1,null,null)
D.dwi=w([A.dU,A.i2],x.O)
D.eyW=new B.c_(A.A,0.5,A.x,null,0,D.dwi,null,null)
D.aQT=new B.aN(9,9)
D.ez3=new B.aN(1.4,1.4)
D.f5R=new B.a1(10,-8,18,-2)
D.f5S=new B.a1(14,-14,20,14)
D.f5U=new B.a1(20,-2,30,2)
D.f5Z=new B.a1(4,-13,30,-3)
D.f64=new B.a1(8,-7,12,7)
D.f6g=new B.a1(-12,12,12,19)
D.f6h=new B.a1(-12,14,12,22)
D.f6i=new B.a1(-12,-22,12,8)
D.f6j=new B.a1(-12,-25,12,19)
D.f6k=new B.a1(-12,-26,12,-6)
D.f6l=new B.a1(-12,-4,12,14)
D.f6n=new B.a1(-14,20,14,24)
D.f6o=new B.a1(-14,6,14,10)
D.f6p=new B.a1(-14,-17,14,15)
D.f6q=new B.a1(-14,-26,14,18)
D.f6r=new B.a1(-14,-4,14,20)
D.f6t=new B.a1(-15,-29,15,25)
D.f6u=new B.a1(-16,-16,16,16)
D.f6x=new B.a1(-16,-22,-9,18)
D.f6y=new B.a1(-16,-24,16,-10)
D.f6A=new B.a1(-16,-2,16,20)
D.f6C=new B.a1(-18,20,18,24)
D.f6D=new B.a1(-18,-18,18,20)
D.f6E=new B.a1(-20,12,20,22)
D.f6F=new B.a1(-20,-28,20,26)
D.f6G=new B.a1(-22,14,22,18)
D.aRv=new B.a1(-22,-26,22,24)
D.f6H=new B.a1(-22,-3,22,3)
D.f6I=new B.a1(-22,-4,22,12)
D.f6K=new B.a1(-24,-12,10,22)
D.f6L=new B.a1(-24,-14,22,8)
D.f6M=new B.a1(-24,-6,24,20)
D.aRw=new B.a1(-24,-9,24,9)
D.f6N=new B.a1(-25,14,25,19)
D.f6O=new B.a1(-26,-14,14,8)
D.f6P=new B.a1(-26,-4,26,20)
D.f6Q=new B.a1(-26,-6,4,6)
D.aRx=new B.a1(-28,-13,28,13)
D.f6R=new B.a1(-28,-16,28,16)
D.f6S=new B.a1(-28,-16,28,8)
D.f6T=new B.a1(-28,-22,28,22)
D.f6U=new B.a1(-30,-12,30,14)
D.f6V=new B.a1(-30,-14,0,14)
D.f6W=new B.a1(-30,-18,30,20)
D.f6X=new B.a1(-30,-28,30,14)
D.f6Y=new B.a1(-30,-2,30,18)
D.f6Z=new B.a1(-30,-4,30,18)
D.f7_=new B.a1(-32,-17,32,17)
D.f70=new B.a1(-32,-28,32,18)
D.f71=new B.a1(-33,-21,33,17)
D.f72=new B.a1(-34,14,34,26)
D.a9l=new B.a1(-34,-18,34,18)
D.f73=new B.a1(-34,-4,34,7)
D.f74=new B.a1(-36,-24,36,20)
D.f75=new B.a1(-38,-22,38,22)
D.f77=new B.a1(-3,12,3,22)
D.f78=new B.a1(-3,5,3,15)
D.f7c=new B.a1(-46,-34,46,28)
D.f7e=new B.a1(-48,-3,48,3)
D.f7h=new B.a1(-6,18,24,24)
D.f7i=new B.a1(-6,5,6,12)
D.f7j=new B.a1(-6,-22,6,-15)
D.f7n=new B.a1(-9,-16,9,22)
D.f7o=new B.a1(-4.5,-24,4.5,-21.2)
D.f7q=new B.a1(14,-9,17.5,9)
D.eki={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSD=new B.de(D.eki,5,x.Q)
D.ejN={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fb0=new B.de(D.ejN,10,x.Q)
D.fdk=new B.av(24,44)
D.fdI=new B.av(54,38)
D.fdP=new B.av(66,38)
D.bdQ=new B.fk(2,null,null,null,null,A.br,null,null,null,null)
D.feS=new B.a5(16,16,D.bdQ,null)
D.aTE=new B.hG(3,12,12,0.82,null)
D.frD=new B.H(!0,A0.xX,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cJ,null,null,null,null,null,null,D.frD)
D.fwG=new B.H(!0,A.kK,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fme=new B.en("AI",null,null,A.cJ,null,null,null,null,null,null,D.fwG)
D.fmw=new B.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new B.H(!0,A.bo,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnq=new B.H(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new B.H(!0,A.bW,null,null,null,null,11,A.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new B.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foi=new B.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foP=new B.H(!0,A.aS,null,null,null,null,12,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new B.cU(A.ht,A.dG,6)
D.dgq=w([D.fbJ],B.as("O<cU>"))
D.fpN=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dgq,null,null,null)
D.fpS=new B.H(!0,A.ev,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.H(!0,A.bW,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqz=new B.H(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqH=new B.H(!0,A.aD,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frH=new B.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new B.H(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new B.H(!0,A.aV,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new B.H(!0,A.c,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aD9,null,null,null)
D.fsS=new B.H(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuG=new B.H(!0,A.ue,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new B.H(!0,A.bN,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new B.H(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new B.H(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new B.H(!0,A.mS,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new B.H(!0,A.ab,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVM=new B.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new B.H(!0,A.h9,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxP=new B.H(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyl=new B.H(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new B.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAA=new B.H(!0,A.aV,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAW=new B.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAZ=new B.H(!0,A.aV,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new B.H(!0,A.ue,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCt=new B.H(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq_=new B.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCS=new B.B("\u26a0\ufe0f ",null,D.fq_,null,null,null,null,null,null,null,null,null)
D.fD4=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AQ,null,null,null,null,null,null,null,null,null)
D.fEH=new B.B("Pick one, then change it and see what happens.",null,A.AQ,null,null,null,null,null,null,null,null,null)
D.fr8=new B.H(!0,A.ab,null,null,null,null,null,A.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFG=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fr8,null,null,null,null,null,null,null,null,null)
D.fHd=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fHR=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fIt=new B.B("Make it yours",null,A.jN,null,null,null,null,null,null,null,null,null)
D.fLD=new B.B("5G",null,X.aV7,null,null,null,null,null,null,null,null,null)
D.fME=new B.B("Pick how big the screen is on the board",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fy6=new B.H(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMQ=new B.B("WHAT HAPPENS",null,D.fy6,null,null,null,null,null,null,null,null,null)
D.fOB=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fPg=new B.B("Change the words and pictures on the three slabs.",null,A.AQ,null,null,null,null,null,null,null,null,null)
D.fPt=new B.B("All the parts and wires will be removed.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fPN=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fQm=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fRA=new B.B("\ud83c\udfaf Challenges",null,A.di,null,null,null,null,null,null,null,null,null)
D.fS8=new B.B("Remove this part",null,W.aUI,null,null,null,null,null,null,null,null,null)
D.fSs=new B.B("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fxx=new B.H(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSK=new B.B("How the Lab works",null,D.fxx,null,null,null,null,null,null,null,null,null)
D.fow=new B.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT5=new B.B("Electronics Lab",null,D.fow,null,null,null,null,A.a2,null,1,null,null)
D.fT9=new B.B("?",null,O.aWh,null,null,null,null,null,null,null,null,null)
D.fUs=new B.B("Ready-made circuits",null,A.di,null,null,null,null,null,null,null,null,null)
D.fV5=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fAE=new B.H(!0,A.aV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYz=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.fZM=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUG,null,null,null,null,null,null,null,null,null)
D.h_g=new B.B("NGMY",null,A.vA,null,null,null,null,null,null,null,null,null)
D.h_t=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VE,null,null,null,null,null,null,null,null,null)
D.h_S=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lU,null,null,null,null,null,null,null,null,null)
D.h0W=new B.B("TOOLBOX",null,A9.aaK,null,null,null,null,null,null,null,null,null)
D.hpz=new B.bM("body-loading",x.k)})();(function staticFields(){$.htk=null
$.htg=null
$.hth=null
$.hzy=0
$.i1B=B.T(x.N,B.as("iH"))
$.i29=B.T(x.N,B.as("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iAo","bGv",()=>{var v="led"
return B.a([C.azR("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fru(),v),C.azR("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.frv(),v),C.azR("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.frw(),v),C.azR("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.frD(),v),C.azR("Not both","Make the light go OFF only when both switches are ON.",2,new C.frE(),v),C.azR("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.frF(),"buzzer")],B.as("O<bcP>"))})
w($,"iAQ","bGw",()=>B.a([C.Ra("UNIVERSE","Earth, space and gravity",A.PI,A.aH,new C.frV()),C.Ra("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.CJ,A.aH,new C.frW()),C.Ra("DISCOVERY LAB","Body Explorer: a real 3D human",D.bPn,A.b4,new C.frX()),C.Ra("TOOLBOX","Converter, clock, games",H.apc,A.cF,new C.frY()),C.Ra("REACTION LAB","Wire parts together",A.D5,A.bx,new C.frZ()),C.Ra("SPARK PAINTER","Paint with light",A.P7,A.bT,new C.fs_()),C.Ra("ROCKET LANDER","Land softly on the pad",A.oC,A.aH,new C.fs0()),C.Ra("TITLE ANIMATOR","Make a moving title",A.wL,A.bi,new C.fs1()),C.Ra("CIRCUIT LAB","Connect logic, learn it",A.a2N,A.cn,new C.fs2())],B.as("O<bv0>")))
w($,"iCu","qC",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sl[v]
t.n(0,u.a,u)}return t})
w($,"iAp","aiW",()=>B.a([C.Go("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.frG()),C.Go("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.frH()),C.Go("Spin the motor","A battery and a motor in a loop will make it spin.",new C.frI()),C.Go("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.frJ()),C.Go("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.frK()),C.Go("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.frx()),C.Go("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fry()),C.Go("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.frz()),C.Go("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.frA()),C.Go("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.frB()),C.Go("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.frC())],B.as("O<bcQ>")))
w($,"iAS","hIy",()=>B.a([C.a1Z("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aV,A.ca,new C.fsa()),C.a1Z("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bC,new C.fsb()),C.a1Z("Breathe","Calm down in a minute","\ud83e\udee7",A.hq,A.cy,new C.fsc()),C.a1Z("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b8,new C.fsd()),C.a1Z("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ch,new C.fse()),C.a1Z("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bi,A.bg,new C.fsf()),C.a1Z("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b1,new C.fsg()),C.a1Z("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.br,A.aE,new C.fsh())],B.as("O<bwk>")))})()};
(a=>{a["fqKUIy9MUfJlHOsx768O6Tlk9uY="]=a.current})($__dart_deferred_initializers__);