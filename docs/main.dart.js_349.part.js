((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Z,A5,A6,A_,R,A7,A8,A9,A0,Aa,A1,N,Ab,Ac,Ad,Ae,T,P,U,Af,Ag,V,W,E,K,G,I,A2,O,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bBR(d){return C.i6w(d)},
i6w(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rg(B.nm(""),d,A.i0,null,null).dh(0,A.a_J),$async$bBR)
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
return B.i($async$bBR,v)},
iiK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RZ[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fe(D.RZ,new C.fJU())
if(w==null)w=A.d.gH(D.RZ)
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
return new C.al4(w.a,w.b,m,w,s,!1)},
ice(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sn,new C.fyE(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
irg(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
J.c7(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dxj[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c7(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dC(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dC(J.t(g,3))),0,1)
if(J.eG(s,f)&&J.eG(s,e)&&!J.z(f,e))J.c7(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aU(a0==null?A.cq:a0)
while(a0.C()){a2=a0.gR(a0)
J.c7(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mX(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.al4(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ihd(d){var w,v,u=C.hkT()
d.B(u)
for(w=0;w<60;++w)u.vI(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fGi(u))&&!A.d.cE(v,new C.fGj())},
ihc(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qC().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dvB,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i4R(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iiJ(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qC().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sn[u]
if(A.d.aV(w,new C.fJR(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fJS(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cJ(w,0,new C.fJT())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qC().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
al4:function al4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJU:function fJU(){},
fyE:function fyE(){},
fGi:function fGi(d){this.a=d},
fGj:function fGj(){},
fJR:function fJR(d){this.a=d},
fJS:function fJS(d){this.a=d},
fJT:function fJT(){},
WD:function WD(d,e){this.c=d
this.a=e},
bmg:function bmg(d,e,f,g,h){var _=this
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
eiH:function eiH(d){this.a=d},
eiI:function eiI(d,e,f){this.a=d
this.b=e
this.c=f},
eiJ:function eiJ(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
eiP:function eiP(d,e,f){this.a=d
this.b=e
this.c=f},
eiR:function eiR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eiM:function eiM(d){this.a=d},
eiN:function eiN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiS:function eiS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eiL:function eiL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiT:function eiT(d,e){this.a=d
this.b=e},
eiK:function eiK(d,e){this.a=d
this.b=e},
eiY:function eiY(d){this.a=d},
eiX:function eiX(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
eiW:function eiW(d){this.a=d},
ej_:function ej_(d,e){this.a=d
this.b=e},
ej0:function ej0(d,e){this.a=d
this.b=e},
ej1:function ej1(d,e){this.a=d
this.b=e},
ej2:function ej2(d,e){this.a=d
this.b=e},
bCb(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fqW,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.Q,0,A.p)},
hyF(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.xn,A.K,w,w),A.aB,B.bU(A.fQ,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.Q,0,A.p),A.f,w,w,new B.p(D.bh_,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GT:function GT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vn:function vn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X_:function X_(d){this.a=d},
aG2:function aG2(d,e,f,g,h,i,j,k,l,m){var _=this
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
ey_:function ey_(){},
eyj:function eyj(d){this.a=d},
eyi:function eyi(d,e){this.a=d
this.b=e},
eyk:function eyk(){},
eyl:function eyl(){},
ey1:function ey1(d,e,f){this.a=d
this.b=e
this.c=f},
ey0:function ey0(d,e){this.a=d
this.b=e},
exR:function exR(d){this.a=d},
exS:function exS(d){this.a=d},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exW:function exW(d){this.a=d},
exX:function exX(d){this.a=d},
exY:function exY(d){this.a=d},
exZ:function exZ(d){this.a=d},
exP:function exP(d){this.a=d},
exQ:function exQ(d){this.a=d},
exO:function exO(d){this.a=d},
eyc:function eyc(d,e){this.a=d
this.b=e},
ey7:function ey7(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey9:function ey9(d){this.a=d},
ey3:function ey3(d){this.a=d},
eya:function eya(d){this.a=d},
eyb:function eyb(d){this.a=d},
ey2:function ey2(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
ey6:function ey6(d,e){this.a=d
this.b=e},
eye:function eye(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
ey5:function ey5(d){this.a=d},
bjc:function bjc(d,e){this.b=d
this.a=e},
aNZ:function aNZ(){},
bzR:function bzR(){},
htR(){var w=$.htP
return w==null?$.htP=$.ri().cW4("assets/data/three.min.js"):w},
htQ(){var w=$.htO
return w==null?$.htO=C.cOD():w},
cOD(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOD=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.ri().jo(0,"assets/data/body3d.bin"),$async$cOD)
case 3:d=a1
$.htS=J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)
t=B.a4p(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jJ(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.djF[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4j(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b47))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bc8(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOD,v)},
c6h(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6h=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.htQ(),C.htR()],x.D),x.K),$async$c6h)
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
return B.i($async$c6h,v)},
aU0:function aU0(d,e,f){this.a=d
this.b=e
this.c=f},
a4j:function a4j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bc8:function bc8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vw:function Vw(d){this.a=d},
aEw:function aEw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dOT:function dOT(d){this.a=d},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOv:function dOv(d){this.a=d},
dOw:function dOw(){},
dOU:function dOU(){},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOz:function dOz(){},
dOA:function dOA(d){this.a=d},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOB:function dOB(d){this.a=d},
dOq:function dOq(d,e,f){this.a=d
this.b=e
this.c=f},
dOr:function dOr(d){this.a=d},
dOs:function dOs(d){this.a=d},
dOJ:function dOJ(d){this.a=d},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e){this.a=d
this.b=e},
dOM:function dOM(d){this.a=d},
dOI:function dOI(d,e){this.a=d
this.b=e},
dON:function dON(d,e){this.a=d
this.b=e},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOO:function dOO(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOP:function dOP(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOQ:function dOQ(d){this.a=d},
dOE:function dOE(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOD:function dOD(d){this.a=d},
aN2:function aN2(){},
aN3:function aN3(){},
c6i:function c6i(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6j:function c6j(d,e){this.a=d
this.b=e},
c6k:function c6k(d){this.a=d},
azX(d,e,f,g,h){return new C.bcU(d,e,f,g,h)},
hb3(d,e,f,g,h,i){return $.i28.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVy(d,e,f,i,g,h))},
yI:function yI(d,e,f,g,h){var _=this
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
bcU:function bcU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frW:function frW(){},
frX:function frX(){},
frY:function frY(){},
fs4:function fs4(){},
fs5:function fs5(){},
fs6:function fs6(){},
VB:function VB(d){this.a=d},
aEy:function aEy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dQy:function dQy(d){this.a=d},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQf:function dQf(){},
dQz:function dQz(){},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQg:function dQg(d,e,f){this.a=d
this.b=e
this.c=f},
dQ5:function dQ5(){},
dQ6:function dQ6(){},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(){},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQj:function dQj(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQ4:function dQ4(d,e,f){this.a=d
this.b=e
this.c=f},
dQs:function dQs(d){this.a=d},
dQr:function dQr(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQq:function dQq(d){this.a=d},
dQo:function dQo(d){this.a=d},
dQp:function dQp(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQk:function dQk(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQl:function dQl(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
bdc:function bdc(d,e){this.b=d
this.a=e},
cVy:function cVy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aN7:function aN7(){},
bzB:function bzB(){},
hTQ(){return new C.Ob(null)},
Ra(d,e,f,g,h){return new C.bv8(d,e,f,g,h)},
btv(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hbB(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ob:function Ob(d){this.a=d},
Ld:function Ld(d,e){this.a=d
this.b=e},
B9:function B9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEP:function aEP(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWK:function dWK(d,e){this.a=d
this.b=e},
dWJ:function dWJ(d){this.a=d},
bv8:function bv8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsm:function fsm(){},
fsn:function fsn(){},
fso:function fso(){},
fsp:function fsp(){},
fsq:function fsq(){},
fsr:function fsr(){},
fss:function fss(){},
fst:function fst(){},
fsu:function fsu(){},
btw:function btw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7M:function f7M(d){this.a=d},
f7L:function f7L(d,e){this.a=d
this.b=e},
f7J:function f7J(d){this.a=d},
f7N:function f7N(d){this.a=d},
f7K:function f7K(d,e){this.a=d
this.b=e},
afX:function afX(d,e,f){this.c=d
this.d=e
this.a=f},
aeP:function aeP(d,e,f){this.c=d
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
buw:function buw(d,e){this.b=d
this.a=e},
bu1:function bu1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbR:function bbR(d,e){this.b=d
this.a=e},
aJ1:function aJ1(d,e){this.c=d
this.a=e},
aJ2:function aJ2(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
f7s:function f7s(d){this.a=d},
f7r:function f7r(d){this.a=d},
f7q:function f7q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7p:function f7p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7n:function f7n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7m:function f7m(d,e,f){this.a=d
this.b=e
this.c=f},
f7o:function f7o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7l:function f7l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7A:function f7A(d){this.a=d},
f7z:function f7z(d){this.a=d},
f7B:function f7B(d,e){this.a=d
this.b=e},
f7C:function f7C(d,e){this.a=d
this.b=e},
f7D:function f7D(d,e){this.a=d
this.b=e},
f7y:function f7y(d,e,f){this.a=d
this.b=e
this.c=f},
f7E:function f7E(d,e,f){this.a=d
this.b=e
this.c=f},
f7x:function f7x(d){this.a=d},
f7t:function f7t(d){this.a=d},
f7F:function f7F(d){this.a=d},
f7G:function f7G(d){this.a=d},
f7w:function f7w(d,e){this.a=d
this.b=e},
f7H:function f7H(d,e){this.a=d
this.b=e},
f7v:function f7v(d,e){this.a=d
this.b=e},
f7I:function f7I(d,e){this.a=d
this.b=e},
f7u:function f7u(d,e){this.a=d
this.b=e},
f7j:function f7j(){},
f7k:function f7k(){},
bt7:function bt7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsx:function bsx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcx:function bcx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsA:function bsA(d,e,f){this.b=d
this.c=e
this.a=f},
bwC:function bwC(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOO:function aOO(){},
hA6(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.o(w,0)),u=e.aJ(0,new B.o(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjb(d,e,f,g,h,i){return $.i2H.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dqD(d,e,f,i,g,h))},
a1u:function a1u(d,e){this.a=d
this.b=e},
qs:function qs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ra:function ra(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D3:function D3(d,e){this.a=d
this.b=e},
a_r:function a_r(d,e){this.a=d
this.b=e},
afL:function afL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1H:function a1H(d,e,f,g,h,i){var _=this
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
acG:function acG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeS:function aeS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bj9:function bj9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dqH:function dqH(d){this.a=d},
dqI:function dqI(d){this.a=d},
dqE:function dqE(d,e){this.a=d
this.b=e},
dqF:function dqF(d){this.a=d},
dqG:function dqG(d){this.a=d},
dqJ:function dqJ(d){this.a=d},
dqK:function dqK(d){this.a=d},
dqL:function dqL(d){this.a=d},
dqM:function dqM(d){this.a=d},
dqN:function dqN(d){this.a=d},
dqO:function dqO(d){this.a=d},
dqP:function dqP(d){this.a=d},
dqQ:function dqQ(d){this.a=d},
dqR:function dqR(d){this.a=d},
GE:function GE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WZ:function WZ(d){this.a=d},
aG1:function aG1(d,e,f,g,h,i,j){var _=this
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
exk:function exk(d){this.a=d},
ex9:function ex9(d){this.a=d},
exb:function exb(){},
exc:function exc(){},
exf:function exf(){},
exg:function exg(d,e,f){this.a=d
this.b=e
this.c=f},
exh:function exh(d){this.a=d},
exi:function exi(d){this.a=d},
exd:function exd(){},
exe:function exe(d){this.a=d},
exK:function exK(d){this.a=d},
exj:function exj(){},
ex5:function ex5(d){this.a=d},
exm:function exm(d){this.a=d},
exl:function exl(d){this.a=d},
exo:function exo(){},
exn:function exn(d,e){this.a=d
this.b=e},
ex8:function ex8(){},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d){this.a=d},
exI:function exI(d){this.a=d},
exH:function exH(d){this.a=d},
exJ:function exJ(d){this.a=d},
exy:function exy(d,e){this.a=d
this.b=e},
exG:function exG(d){this.a=d},
exE:function exE(d){this.a=d},
exF:function exF(d){this.a=d},
exD:function exD(d){this.a=d},
exC:function exC(d){this.a=d},
exz:function exz(d){this.a=d},
exA:function exA(d){this.a=d},
exB:function exB(d){this.a=d},
exa:function exa(){},
exu:function exu(d){this.a=d},
exv:function exv(d){this.a=d},
ext:function ext(d){this.a=d},
exw:function exw(d){this.a=d},
exs:function exs(d){this.a=d},
exx:function exx(d){this.a=d},
exr:function exr(d){this.a=d},
exq:function exq(d){this.a=d},
exp:function exp(d,e){this.a=d
this.b=e},
bja:function bja(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqD:function dqD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNX:function aNX(){},
hFy(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcI()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hkT(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5s(w,v,u,A.cN,B.T(x.N,x.y))},
hNw(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hkU(d),d.d*f.b)},
hkU(d){return 42+(D.mt.al(0,d.b)?(d.ch-1)*38:0)},
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
abl:function abl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5s:function a5s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPD:function bPD(){},
bPO:function bPO(d){this.a=d},
bPJ:function bPJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPP:function bPP(d){this.a=d},
bPQ:function bPQ(d){this.a=d},
bPS:function bPS(d){this.a=d},
bPT:function bPT(d){this.a=d},
bPR:function bPR(d){this.a=d},
bPU:function bPU(d,e,f){this.a=d
this.b=e
this.c=f},
bPV:function bPV(d){this.a=d},
bPF:function bPF(d){this.a=d},
bPG:function bPG(d){this.a=d},
bPE:function bPE(d){this.a=d},
bPH:function bPH(d,e,f){this.a=d
this.b=e
this.c=f},
bPI:function bPI(d){this.a=d},
bPC:function bPC(d){this.a=d},
bPW:function bPW(d,e){this.a=d
this.b=e},
bPK:function bPK(d,e){this.a=d
this.b=e},
bPN:function bPN(d){this.a=d},
bPM:function bPM(d){this.a=d},
bPL:function bPL(d){this.a=d},
ajT:function ajT(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bK_:function bK_(){},
bK0:function bK0(){},
mX:function mX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctn:function ctn(d){this.a=d},
ira(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fVK(),c8=new C.fVM(),c9=new C.fVN(),d0=new C.fVL(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.bO,A.bK))
d2.ah(D.epm,D.emh,c8.$2(A.dO,1.4))
d2.ah(D.elX,D.elV,c8.$2(A.bw,2.4))
d2.ah(D.elY,U.aLr,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fG.j(0.5))
d1.y=A.H7
d2.N(D.elD,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRy,A.aP,A.cu))
d2.N(A.cL,16,c7.$1(A.bw))
d2.N(A.cL,13,c7.$1(c6?A.aH.j(0.85):A.T))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.epe,2.4,c7.$1(c6?A.be:A.am))
d2.N(D.eq6,2.4,c7.$1(A.am))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.e7))
d1=$.Q().r
t=x.v
s=new B.aF(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bv())
d2.af(s,c7.$1(A.fG.j(0.35)))
if(c6){d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8w,D.aLN,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eU))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.ik,3,c7.$1(c6?A.be:A.am))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IF[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bw,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.ep2,D.em1,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.H,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bv())
d2.af(w,d0.$3(D.f76,A.aS,A.cZ))
d2.ar(D.f6d,c7.$1(A.db))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.H,D.em8,c8.$2(A.bP,2.4))
d2.ah(A.a8t,D.em7,c8.$2(A.hu,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dy.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f7c,A.br,A.cr))
n=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bv())
d2.af(n,c7.$1(A.e7))
d2.N(D.emd,7,c7.$1(c6?A.c:A.db))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.nx))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.brf
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mf
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eps,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f7i,A.bP,A.br))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bL.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.H,7,22),c7.$1(A.cZ))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.nx))
if(c6)d5.$5(d2,"0:"+A.a.b0(A.o.u(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.eme,A.b4,6.5)
d2.N(D.emu,4,c7.$1(A.db))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jw,10,c7.$1(c6?A.bi:A.bw))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eqa,A.c,16)
d1.restore()
d2.N(A.kB,6,c7.$1(A.d5))
d2.N(A.kB,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cB(B.bX(A.Jw,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bi.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.epr,D.eq3,c8.$2(A.bw,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f77,A.bP,A.am))
d2.N(D.aLv,8,c7.$1(A.as))
d2.N(D.aLv,4.5,c7.$1(c6?A.aH:A.cr))
d2.N(D.epp,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.kq))
d1.restore()
if(c6)d5.$5(d2,"REC",D.epA,A.ay,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f7f,A.j_,A.fn))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dA))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.epk,4,c7.$1(A.aV))
d2.N(D.em9,2.4,c7.$1(A.ay))
d2.N(D.emr,2.4,c7.$1(A.be))
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
d5.$5(d2,"72",D.ema,A.hn,11)
d1=d4*9
d5.$5(d2,"\u2665",D.epF,A.hn.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.epu,3,c7.$1(c6?A.be:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cy.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f79,c7.$1(F.u4))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pj(0,-1,1)
d2.bZ(B.bs(A.H,8,14),c7.$1(A.cF))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.c8))
d2.N(D.enc,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.Q().r
t=x.v
g=new B.aF(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bv())
d2.af(g,d0.$3(D.f7K,A.c,A.bC))
d2.ar(D.f7G,c7.$1(c6?A.dy:A.bw))
q=new B.aF(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bv())
d2.af(q,c7.$1(A.ej))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.45)))
d1=c7.$1(A.dy.j(0.35))
d1.y=A.H7
d2.N(D.elE,14,d1)}return!0
case"discoball":d2.ah(D.elG,Q.aLm,c8.$2(A.db,1.4))
d2.N(A.H,16,d0.$3(D.f6R,A.aP,A.am))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.ds,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.ds,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dkI[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f6O,A.cu,A.am))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f6H,A.aO,A.bK))
d2.ah(H.aLo,D.elI,c8.$2(A.bw,1.6))
d2.N(D.elJ,2.2,c7.$1(c6?A.ay:A.bw))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a65[p]
if(c6)d1=d?A.ba:A.eX
else d1=A.cr
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.H,D.a8n,c8.$2(A.bK,4))
d1.restore()
d2.ah(D.epa,D.epy,c8.$2(A.bK,4))
d2.ar(D.f7F,c7.$1(c6?A.ba.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCa[p]+1,d1,10,14,2)
q=B.ar(A.bL,A.cZ,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f78,A.bP,A.br))
for(p=0;p<2;++p){o=D.aCa[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fp:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cF.j(0.5))
t.y=N.os
d2.am(d1,t)}}d2.ah(D.emA,D.emV,c8.$2(A.as,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cr))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Am.pf(1,a1,0.8,1).k_():A.e7
if(c6){t=c7.$1(l.j(0.45))
t.y=N.os
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.db))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f6X,A.cy,A.FU))
d2.N(D.epG,8,c7.$1(A.rB))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fG,2.4))}d1.restore()
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bK,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.ht))
d2.N(D.enP,3.2,c7.$1(A.ht.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f7a,A.hV,A.rA))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cr))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.e7))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cF.j(0.4))
d1.y=N.os
d2.N(D.emt,8,d1)}return!0
case"headphones":d2.cB(B.bs(A.dG,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SA[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bp,A.oh))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.o(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cB(q,h,1.6,!1,c8.$2(A.eL.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.j.F(d4*14,8)),A.kK,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cr))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cr))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f6M,A.db,A.e7))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dA))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b0(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b0(A.o.u(B.fP(a2)),2,"0"),D.elP,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FB,A.hn,j)
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
L.M1(d2,D.fe5,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.w8))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dJ,A.d6))
d2.am(a4,c8.$2(A.aU,1.2))
d2.N(D.aLV,9,c7.$1(A.as))
d2.N(D.aLV,6,c8.$2(A.cZ,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dA))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.am
d5.$5(d2,d1+"\u2192"+t+"V",D.enZ,q,8.2)
d2.N(D.emi,2.4,c7.$1(c6?A.be:A.aM))
d5.$5(d2,"IN",D.epz,A.ab,6)
d5.$5(d2,"OUT",D.enH,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bK,A.ay,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a8l,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f6I,A.e7,A.i5))
d5.$5(d2,"7805",D.a8w,A.ab,8)
for(p=0;p<3;++p){d1=D.drb[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.ea))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eq7,A.bo,9)
return!0
case"diode":d2.ah(D.aLZ,D.aLH,c8.$2(A.ea,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.av.j(0.85)))
d2.ar(D.f6r,c7.$1(A.bo))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dy.j(0.4))
t.y=A.kU
d2.am(d1,t)}d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.aV))
d5.$5(d2,"one way",D.epn,A.aD,8)
return!0
case"ldr":d2.ah(D.aLZ,D.a8w,c8.$2(A.ea,2.4))
d2.ah(D.aLN,D.aLH,c8.$2(A.ea,2.4))
d2.N(A.H,12,c7.$1(A.cZ))
d2.N(A.H,12,c8.$2(A.rG,1.6))
d1=$.Q()
t=B.a([],x.v)
a6=new B.aF(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ar(A.bw,A.dy,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.epb,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.ep
break
case"sonytv":t=A.rv
break
case"appletv":t=A.ea
break
default:t=F.FE
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
L.hgS(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.emY,1.6,c7.$1(A.b4))}else{d2.am(a3,c7.$1(D.w8))
h=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bv())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.db))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fK[p]
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
d2.af(t,c7.$1(A.db))}d5.$5(d2,"SONY",D.eoC,A.bP,5.5)
break
case"appletv":d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zd))
d5.$5(d2,"Apple TV",D.eo_,A.bw,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.bpw))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.ds,0.6))}d5.$5(d2,"B&O",D.eq2,F.u4,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.Et
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
t.restore()}else d2.am(a3,c7.$1(D.w8))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.e7))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eqd,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.br))}d2.N(A.a8j,1.6,c7.$1(A.as))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f7j,A.cu,A.br))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M1(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.w8))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zd))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.br))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f7n,A.bO,A.cu))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M1(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.w8))
d2.N(D.aLh,2,c7.$1(A.bK))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zd))
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
d1.restore()}else d2.am(b9,c7.$1(D.w8))
d2.ar(D.f7u,c7.$1(A.br))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.db))
return!0
case"projector":if(c6){d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M1(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f7b,A.iE,A.db))
d2.N(D.aLt,7,c7.$1(A.as))
d2.N(D.aLt,4,c7.$1(c6?A.dy:A.cr))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.ds,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.nx))
d2.am(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c5(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aLM,A.c,10)
d5.$5(d2,"km/h",D.enN,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.db,A.e7))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nP(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M1(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bp.j(0.2))
d1.y=A.mf
d2.N(A.H,26,d1)}else d2.am(c4,c7.$1(A.T))
d2.ah(D.epN,D.epS,c8.$2(A.br,4))
d2.ah(D.en_,D.enf,c8.$2(A.br,4))
return!0}return!1},
fVK:function fVK(){},
fVM:function fVM(){},
fVN:function fVN(){},
fVL:function fVL(){},
hjK(d,e,f,g){return new C.ajR(d,g,f,e)},
Go(d,e,f){return new C.bcV(d,e,f)},
ajR:function ajR(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajS:function ajS(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJE:function bJE(d,e){this.a=d
this.b=e},
bJF:function bJF(d){this.a=d},
bJD:function bJD(d){this.a=d},
bJG:function bJG(){},
bJH:function bJH(d){this.a=d},
bJI:function bJI(d,e,f){this.a=d
this.b=e
this.c=f},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJz:function bJz(d,e){this.a=d
this.b=e},
bJA:function bJA(d,e,f){this.a=d
this.b=e
this.c=f},
bJt:function bJt(d,e){this.a=d
this.b=e},
bJu:function bJu(){},
bJB:function bJB(d,e,f){this.a=d
this.b=e
this.c=f},
bJy:function bJy(d,e){this.a=d
this.b=e},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJx:function bJx(d){this.a=d},
bJX:function bJX(d){this.a=d},
bJY:function bJY(){},
bJ6:function bJ6(){},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bJW:function bJW(d,e,f){this.a=d
this.b=e
this.c=f},
bJR:function bJR(d){this.a=d},
bJO:function bJO(d,e,f){this.a=d
this.b=e
this.c=f},
bJP:function bJP(d,e){this.a=d
this.b=e},
bJS:function bJS(d){this.a=d},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJN:function bJN(d,e){this.a=d
this.b=e},
bJQ:function bJQ(d){this.a=d},
bJT:function bJT(d){this.a=d},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJU:function bJU(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJV:function bJV(d){this.a=d},
bJ7:function bJ7(d,e){this.a=d
this.b=e},
bJq:function bJq(d,e){this.a=d
this.b=e},
bJs:function bJs(d,e){this.a=d
this.b=e},
bJr:function bJr(d,e){this.a=d
this.b=e},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJe:function bJe(d){this.a=d},
bJc:function bJc(d){this.a=d},
bJf:function bJf(d,e,f){this.a=d
this.b=e
this.c=f},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJk:function bJk(d,e){this.a=d
this.b=e},
bJl:function bJl(d,e,f){this.a=d
this.b=e
this.c=f},
bJa:function bJa(d,e){this.a=d
this.b=e},
bJm:function bJm(d,e,f){this.a=d
this.b=e
this.c=f},
bJ9:function bJ9(d,e){this.a=d
this.b=e},
bJn:function bJn(d,e,f){this.a=d
this.b=e
this.c=f},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
bJo:function bJo(d){this.a=d},
bJp:function bJp(d){this.a=d},
bJg:function bJg(d){this.a=d},
bJh:function bJh(d){this.a=d},
bcV:function bcV(d,e,f){this.a=d
this.b=e
this.c=f},
fs7:function fs7(){},
fs8:function fs8(){},
fs9:function fs9(){},
frV:function frV(){},
fsa:function fsa(){},
frU:function frU(){},
fsb:function fsb(){},
frZ:function frZ(){},
frT:function frT(){},
fs_:function fs_(){},
frS:function frS(){},
fs0:function fs0(){},
frR:function frR(){},
fs1:function fs1(){},
frP:function frP(){},
frQ:function frQ(){},
fs2:function fs2(){},
frN:function frN(){},
frO:function frO(){},
fs3:function fs3(){},
frM:function frM(){},
Wc:function Wc(d){this.a=d},
aF0:function aF0(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0E:function e0E(d){this.a=d},
e0F:function e0F(){},
e0G:function e0G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0H:function e0H(){},
e0u:function e0u(d){this.a=d},
e0t:function e0t(d,e,f){this.a=d
this.b=e
this.c=f},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0q:function e0q(d){this.a=d},
e0r:function e0r(){},
e0D:function e0D(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0y:function e0y(d){this.a=d},
e0z:function e0z(){},
e0B:function e0B(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0x:function e0x(){},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0I:function e0I(){},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d){this.a=d},
e0N:function e0N(d){this.a=d},
az3:function az3(d,e){this.c=d
this.a=e},
bb2:function bb2(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
cKX:function cKX(d){this.a=d},
bb1:function bb1(d,e){this.b=d
this.a=e},
cKW:function cKW(d){this.a=d},
azn:function azn(){},
azo:function azo(){},
aLu:function aLu(){},
bzE:function bzE(){},
irc(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vm,23)
$.Q()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vm,25,b8)
b8=B.K()
b8.sav(D.eyW.aK(0,v))
b9.N(A.vm,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=A.bo.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vm,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bo.gp(0)
b9.N(A.vm,3,r)
c2.$5(b9,w?"V":"A",D.epV,A.bo,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.eph,A.as,9.5)
return!0
case"fan":b8=B.bm(D.f6E,A.hQ)
$.Q()
s=B.K()
s.r=A.bw.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.am.gp(0)
b9.ar(D.f7v,s)
s=B.K()
s.r=A.T.j(0.6).gp(0)
b9.N(H.vn,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLl,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.r=A.ht.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.bq.gp(0)
b9.N(H.vn,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cu.gp(0)
b9.N(H.vn,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jZ.gp(0)
b9.N(H.vn,14,b8)
return!0
case"speaker":n=B.bm(D.aRy,A.r1)
$.Q()
b8=B.K()
b8.sav(D.asQ.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.ezi.aK(0,B.bX(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.K()
b8.r=A.db.gp(0)
b9.N(A.cA,5,b8)
b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.a8k,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.emz,6+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cB(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bm(D.f7m,A.r1)
$.Q()
b8=B.K()
b8.sav(D.c7K.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bm(D.aRA,A.iz)
s=B.K()
s.r=A.i5.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FI(k)<500?":":" "
i=A.a.b0(A.o.u(B.dg(k)),2,"0")
h=A.a.b0(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aRA,b8)
c2.$5(b9,i+j+h,D.epD,A.b4,21)}b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.epB,2.4,b8)
b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.emE,2.4,b8)
return!0
case"calculator":l=B.bm(D.f71,A.hR)
$.Q()
b8=B.K()
b8.sav(D.c7u.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bm(D.f6V,A.hA)
s=B.K()
s.r=(b7?A.Zp:D.brQ).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.epg,A.Y8,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bm(new B.a1(r,b8,r+6,s),A.Ut)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=(f===3?A.c8:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bm(D.f6Q,A.hR)
$.Q()
b8=B.K()
b8.r=M.nx.gp(0)
b9.am(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.ak7.gp(0)
b9.am(l,b8)
e=B.bm(D.f6G,A.hQ)
if(b7){b8=B.K()
b8.sav(D.c92.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nP(e),$.np(),!0)
b8.translate(-12,-25)
L.M1(b9,D.fdI,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bm(D.f6D,A.hA)
s=B.K()
s.r=A.aV.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.eoi,A.c,6)}else{b8=B.K()
b8.r=D.w8.gp(0)
b9.am(e,b8)}b8=B.bm(D.f7L,D.ezq)
s=B.K()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bm(D.f7l,A.mw)
$.Q()
b8=B.K()
b8.sav(D.c80.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.SA[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=A.cr.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.P)
b8.r=(a2?A.be:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vn,8+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.b=A.a9
r.c=1.8
r.r=A.hr.j(0.9-u*0.2).gp(0)
b9.cB(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bm(D.f70,A.hQ)
s=$.Q()
r=B.K()
r.r=A.e7.gp(0)
b9.am(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wq
b9.N(A.vm,34,b8)}a4=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c5(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bv())
b8=B.K()
b8.r=B.ar(A.ej,D.biK,a3).gp(0)
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
b9.ah(A.H,H.a8k,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
b8.translate(0,a5)
s=$.Q().r
r=x.v
l=new B.aF(s,A.ai,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bv())
q=B.K()
q.sav(D.c66.aK(0,D.f7e))
b9.af(l,q)
q=new B.aF(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bv())
p=B.K()
p.r=A.fG.gp(0)
b9.af(q,p)
r=new B.aF(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bv())
s=B.K()
s.r=A.fG.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCb[a0]
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=A.as.gp(0)
b9.N(new B.o(a1,10),7.5,s)
J.bo(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.H,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.Q().r
s=x.v
l=new B.aF(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c5(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bv())
r=B.K()
r.sav(D.c79.aK(0,D.f7_))
b9.af(l,r)
r=new B.aF(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bv())
q=B.K()
q.r=A.ea.gp(0)
b9.af(r,q)
s=new B.aF(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c5(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cF,A.uh,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e7
b8.r=s.gp(0)
b9.ar(D.f6Z,b8)
if(b7){b8=B.K()
b8.r=A.cF.j(0.3).gp(0)
b8.y=A.mf
b9.N(A.aLj,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.elC,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.Q().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bv())
s=B.K()
s.r=A.dy.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dy.j(0.5*u).gp(0)
s.y=T.Oo
b9.N(D.epH,24,s)}b8=B.bm(D.f7E,A.hQ)
s=$.Q()
r=B.K()
r.r=A.e7.gp(0)
b9.am(b8,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.elS,D.aLw,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aLw,D.epI,r)
a7=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bv())
s=B.K()
s.r=(b7?A.aS:A.kr).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.br).gp(0)
b9.N(D.epL,4,b8)
return!0
case"lights":b8=$.Q().r
s=x.v
a8=new B.aF(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c5(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hq.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.P)
b1.r=D.a57[u].j(0.6).gp(0)
b1.y=A.H7
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
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
if(b0)p=D.a57[u]
else{p=B.ar(D.a57[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.ira(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
heV(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.Aw},
isq(d,e,f){return B.a6(d,!1).cd(B.vg(null,!1,!0,!0,new C.h_I(e,f),A.eR,null,A.pk,new C.h_J(),x.H))},
Kc:function Kc(d,e){this.a=d
this.b=e},
mt:function mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_I:function h_I(d,e){this.a=d
this.b=e},
h_J:function h_J(){},
VW:function VW(d,e,f){this.c=d
this.d=e
this.a=f},
blG:function blG(d,e){var _=this
_.d=$
_.e=null
_.by$=d
_.a9$=e
_.c=_.a=null},
dXF:function dXF(d){this.a=d},
dXE:function dXE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXC:function dXC(){},
dXD:function dXD(d){this.a=d},
dXB:function dXB(d){this.a=d},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXz:function dXz(d,e){this.a=d
this.b=e},
dXy:function dXy(d){this.a=d},
dXx:function dXx(d){this.a=d},
dXt:function dXt(d){this.a=d},
dXs:function dXs(d){this.a=d},
dXw:function dXw(d,e,f){this.a=d
this.b=e
this.c=f},
dXv:function dXv(d){this.a=d},
dXu:function dXu(d){this.a=d},
bxG:function bxG(d,e,f){this.b=d
this.c=e
this.a=f},
afE:function afE(d,e,f){this.b=d
this.c=e
this.a=f},
aNh:function aNh(){},
a20(d,e,f,g,h,i){return new C.bws(d,e,f,g,h,i)},
bws:function bws(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsC:function fsC(){},
fsD:function fsD(){},
fsE:function fsE(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsH:function fsH(){},
fsI:function fsI(){},
fsJ:function fsJ(){},
a9j:function a9j(d){this.a=d},
cmf:function cmf(d){this.a=d},
cmg:function cmg(){},
cme:function cme(d,e){this.a=d
this.b=e},
cmd:function cmd(d){this.a=d},
Xw:function Xw(d){this.a=d},
aGu:function aGu(d,e,f,g,h,i,j,k){var _=this
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
eU3:function eU3(d){this.a=d},
eU_:function eU_(d){this.a=d},
eTZ:function eTZ(d,e){this.a=d
this.b=e},
eU1:function eU1(d,e){this.a=d
this.b=e},
eU0:function eU0(d,e){this.a=d
this.b=e},
eU2:function eU2(d){this.a=d},
bxS:function bxS(d,e,f){this.b=d
this.c=e
this.a=f},
Wk:function Wk(d){this.a=d},
blR:function blR(d,e,f,g,h,i){var _=this
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
e3u:function e3u(){},
e3v:function e3v(){},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3s:function e3s(d){this.a=d},
e3q:function e3q(d){this.a=d},
e3t:function e3t(d){this.a=d},
bsz:function bsz(d,e,f){this.b=d
this.c=e
this.a=f},
Vx:function Vx(d){this.a=d},
blr:function blr(d,e,f,g,h,i){var _=this
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
dP_:function dP_(){},
dP0:function dP0(){},
dOV:function dOV(){},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOZ:function dOZ(d){this.a=d},
dOW:function dOW(d){this.a=d},
aJU:function aJU(d,e,f){this.a=d
this.b=e
this.c=f},
Wb:function Wb(d){this.a=d},
blI:function blI(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0_:function e0_(d,e){this.a=d
this.b=e},
e00:function e00(d){this.a=d},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e01:function e01(d){this.a=d},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e02:function e02(d){this.a=d},
e_X:function e_X(d,e){this.a=d
this.b=e},
e03:function e03(d,e){this.a=d
this.b=e},
e_W:function e_W(d,e){this.a=d
this.b=e},
e04:function e04(d){this.a=d},
e_V:function e_V(d,e){this.a=d
this.b=e},
e05:function e05(d){this.a=d},
e_U:function e_U(d){this.a=d},
e06:function e06(d){this.a=d},
e_T:function e_T(d){this.a=d},
e07:function e07(d){this.a=d},
e08:function e08(d){this.a=d},
e_S:function e_S(d){this.a=d},
bnK:function bnK(d,e,f){this.b=d
this.c=e
this.a=f},
WU:function WU(d){this.a=d},
aFO:function aFO(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e,f){this.a=d
this.b=e
this.c=f},
eqT:function eqT(d,e,f){this.a=d
this.b=e
this.c=f},
eqW:function eqW(d){this.a=d},
eqS:function eqS(d){this.a=d},
er_:function er_(d){this.a=d},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e){this.a=d
this.b=e},
er0:function er0(d,e){this.a=d
this.b=e},
eqX:function eqX(d,e){this.a=d
this.b=e},
er1:function er1(d){this.a=d},
X3:function X3(d){this.a=d},
aG8:function aG8(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eBG:function eBG(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBF:function eBF(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d,e){this.a=d
this.b=e},
Xn:function Xn(d){this.a=d},
bmY:function bmY(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
ePx:function ePx(){},
ePG:function ePG(){},
ePC:function ePC(d){this.a=d},
ePB:function ePB(){},
ePD:function ePD(d,e){this.a=d
this.b=e},
ePA:function ePA(d,e){this.a=d
this.b=e},
ePE:function ePE(d){this.a=d},
ePz:function ePz(d,e){this.a=d
this.b=e},
ePF:function ePF(d){this.a=d},
ePy:function ePy(d){this.a=d},
WT:function WT(d){this.a=d},
bms:function bms(d,e,f,g,h,i,j,k){var _=this
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
epz:function epz(){},
epA:function epA(){},
eps:function eps(d){this.a=d},
epr:function epr(d){this.a=d},
ept:function ept(d){this.a=d},
epq:function epq(d){this.a=d},
epu:function epu(d){this.a=d},
epp:function epp(d){this.a=d},
epv:function epv(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
epw:function epw(d){this.a=d},
epn:function epn(d,e){this.a=d
this.b=e},
epx:function epx(d){this.a=d},
epm:function epm(d,e){this.a=d
this.b=e},
epy:function epy(d){this.a=d},
epl:function epl(d,e){this.a=d
this.b=e},
bfj:function bfj(d,e,f){this.c=d
this.d=e
this.a=f},
aN4:function aN4(){},
bzA:function bzA(){},
aNo:function aNo(){},
bzG:function bzG(){},
aNR:function aNR(){},
bzP:function bzP(){},
aOh:function aOh(){},
bzY:function bzY(){},
JJ(d,e,f,g){var w,v,u,t,s,r,q,p=$.atp
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mr(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mr(d,s,f,g)
else B.bP(new B.bd(1000*q),new C.cmb(d,s,f,g),u)}},
cjK(d){return C.hWS(d)},
hWS(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cjK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cjK)
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
return B.i($async$cjK,v)},
b2Z(d,e){return C.hWT(d,e)},
hWT(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2Z=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2Z)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.Y.az(e,null)),$async$b2Z)
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
return B.i($async$b2Z,v)},
cmb:function cmb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ihr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oo(A.j.ad(p.c,4)),"y",B.oo(A.j.ad(p.d,4)),"v",p.e,"l",B.oo(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oo(A.j.ad(p.as,3)),"ch",p.at,"vc",B.oo(A.j.ad(p.z,3)),"s",B.oo(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.fi(l)
return A.Y.az(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
irB(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aU(f==null?A.cq:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aT(J.t(t,"k"))
s=e==null?"":e
if(!$.qC().al(0,s)){J.c7(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tY(a2,d,a0,a1)
a3.as4(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k4(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k4(J.t(t,"b"))
r.x=d===!0
d=B.aT(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.j.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.j.D(d==null?1:d,1,5.2)
J.c7(v,r)}i=g.a(J.t(w,"wires"))
i=J.aU(i==null?A.cq:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.am0(m,A.j.M(B.dC(J.t(p,1))),l,A.j.M(B.dC(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aU(h==null?A.cq:h)
while(h.C()){j=h.gR(h)
J.c7(k,A.j.M(B.dC(j)))}return new B.bqI(i,k)}catch(a4){return a5}},
fJw(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fJw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fJw)
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
return B.i($async$fJw,v)},
bGh(d){return C.itd(d)},
itd(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGh=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bGh)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bGh)
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
return B.i($async$bGh,v)}},D,H,Al,X,Am,Y,A3,An
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
T=c[140]
P=c[129]
U=c[84]
Af=c[87]
Ag=c[133]
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
C.al4.prototype={}
C.WD.prototype={
S(){return new C.bmg(B.T(x.N,x.i),new B.au(A.aw,$.aw()),B.a([],x.X),B.a([],x.eZ),B.mY(0,null,null))}}
C.bmg.prototype={
gX0(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.ce)
t.m(new C.eiH(t))
t.a.toString
p=t.gX0()
w=3
return B.b(C.bBR(C.i4R(q,C.ihc(p),o,t.ay)),$async$PN)
case 3:s=e
r=s==null?null:J.j7(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.iiJ(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eiI(t,o,r))
$.aW.x1$.push(new C.eiJ(t))
case 1:return B.h(u,v)}})
return B.i($async$PN,v)},
Z4(d){return this.c3a(d)},
aYu(){return this.Z4(null)},
c3a(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
t.f.sb1(0,o)
t.m(new C.eiU(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBR(C.ice(o)),$async$Z4)
case 3:r=n.a=m.irg(f)
p.b=""
if(r!=null&&!C.ihd(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iiK(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.al4(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eiV(p,t))
t.c8L(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z4,v)},
c8L(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX0()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eiQ(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eiO(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eiR(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.eiS(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eiT(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bp.j(0.1),g=B.m(16),f=B.L(A.bp.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fff,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AI,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fG6
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VK,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fqj,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.us,B.d(u,l,l,l,l,l,l,D.ft6,l,l,l),l))
w.push(A.cU)
w.push(B.d(k.b,l,l,l,l,l,l,I.EM,l,l,l))
u=k.e
if(u.length!==0){t=A.aS.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fvE,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.hW,A.cl,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lW,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NS,new B.c6(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bm,new B.bz(1,A.bc,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bp.j(0.3)
s=new B.aN(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vr,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hd,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.v(w,B.a([A.U,new B.bM(A.aa,l,l,s,l),A.ax,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fBm,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.erf)
j=B.cc(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajh(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bBx,A.ey,l,l,1/0),A.b1,A.iu),B.E(C.hjK(m.gX0(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.eiY(m),l,A.bp,l),new E.dW("Invent something new",!i,new C.eiZ(m),l,A.bp,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dtt[p]
i.push(new E.dW(n,!1,new C.ej_(m,n),l,A.bp,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dbr[p]
i.push(new E.dW(r,!1,new C.ej0(m,r),l,A.bp,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(16),A.a1),l,A.eY,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kh,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ej1(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a5,l,A.ao,l,A.Vf,l,l),1)
h=m.at
v=h&&j?D.bRu:A.ee
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fC(v,j,new C.ej2(m,k),A.bp,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lB(A.bp,A.f6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.Q,0,A.p))}}
C.GT.prototype={}
C.vn.prototype={}
C.X_.prototype={
S(){return new C.aG2(A.H,A.H,A.az,B.aR(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aG2.prototype={
gaZN(){var w,v,u,t=this,s=D.Is[t.cx],r=D.SC[t.cy],q=D.Ds[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAs[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new C.ey_())},
ga3u(){return D.Is[this.cx].d/this.gaZN()},
gaQK(){return 0.1*(D.Is[this.cx].d/0.9)/D.SC[this.cy].d},
Y(){this.a4()
this.me()
C.cjK("rocket_lander").bG(new C.eyj(this),x.h)},
c8U(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
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
if(m.as!=="flying"){m.m(new C.eyk())
return}w=D.tb[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3u()
v=v.a2(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQK())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcI()*6*D.aCv[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.o(-t.a*0.4,t.b)
t=new B.o(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.o(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Ds[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2Z("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JJ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3u()/(D.tb[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3u()/(D.tb[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.eyl())},
ah5(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fsz,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.ey1(this,g,w),v,h,v))
return new B.D(A.eM,B.x(B.a([u,A.cU,B.bU(A.bG,s,A.bs,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bHX(d){var w,v,u,t,s=this,r=null,q=s.ga3u()/(D.tb[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQK()),o=D.aCv[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ab9,r,r,r),A.X,s.ah5("ENGINE: "+D.Is[s.cx].b,D.Is,new C.exR(s),new C.exS(s),A.cF),s.ah5("FUEL TANK: "+D.SC[s.cy].b,D.SC,new C.exT(s),new C.exU(s),A.b4),s.ah5("LANDING GEAR: "+D.Ds[s.db].b,D.Ds,new C.exV(s),new C.exW(s),A.aH),s.ah5("EXTRAS (tap to add)",D.aAs,new C.exX(s),new C.exY(s),A.bp)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fZ3)
o=(q?A.b4:A.c0).j(0.14)
w=B.m(12)
v=A.j.ad(s.gaZN(),2)
u=A.j.ad(s.ga3u()/(D.tb[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Ds[s.db].d*100)+".",r,r,r,r,r,r,D.ftf,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.hW,A.bV,r,r,r))
m.push(A.X)
m.push(new B.bM(A.A,r,r,new E.fC(A.oE,"Launch",new C.exZ(s),A.b4,r),r))
return B.at(B.q(r,B.cc(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.m0,new B.p(D.brn,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b_Y(d,e,f,g){var w=null,v=f?A.cF:A.c.j(0.1),u=B.m(18),t=B.L(A.aU,A.r,1)
return B.mN(A.iN,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.exO(e),new C.exP(e),w,w,w,w,new C.exQ(e))},
b_X(d,e,f){return this.b_Y(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cs(new C.eyc(s,D.tb[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tb[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.eyd(s,w),r,D.tb[w].c,r))}v=B.a([s.b_X(F.aq9,new C.eye(s),s.y),A.bd,s.b_Y(A.wD,new C.eyf(s),s.Q,130),A.bd,s.b_X(A.PD,new C.eyg(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aA(r,B.q(r,D.bVI,A.f,r,r,new B.p(u,r,B.L(A.aU,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eyh(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lB(A.cF,A.f6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.i,0,r,r)],p),A.l,r,A.e,A.Q,0,A.p))}}
C.bjc.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tb[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.Q(),f=B.K(),e=l.c,d=B.ar(K.ZX,e,0.25)
d.toString
f.sav(new B.a9(A.b7,A.b8,A.x,B.a([F.ah5,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e4()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.o(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aF(g.r,A.ai,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e4()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bv())
h=$.Q()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.o(m.ax*k,u+10),8,m.ay*k)
g=B.bm(q,A.iz)
e=B.K()
e.r=A.be.gp(0)
a0.am(g,e)
e=B.bm(q.cn(2),A.mw)
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
m.y=T.Oo
a0.N(A.H,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aF(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bv())
m=B.K()
m.r=A.aS.gp(0)
a0.af(p,m)
k=new B.aF(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bv())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aF(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c5(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c5(-14,-10,0,-26))
o.E(new B.bv())
k=B.K()
k.sav(D.c7D.aK(0,D.f6N))
a0.af(o,k)
k=B.K()
k.r=A.aH.gp(0)
a0.N(H.vn,5,k)
k=new B.aF(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bv())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aF(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bv())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aNZ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzR.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzR()}}
C.aU0.prototype={}
C.a4j.prototype={}
C.bc8.prototype={}
C.Vw.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aEw(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LN,D.LN,A.az,A.cN,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEw.prototype={
Y(){var w=this
w.a4()
w.me()
w.as=new C.c6i(w.gchN())
new C.dOT(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byU()},
chO(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.I(["t","init","data",$.htS],x.N,x.z))
v.at=!0
v.ay=""
v.aAS()
break
case"parts":v.m(new C.dOt(v))
break
case"pick":v.m(new C.dOu(v,d))
break
case"shot":v.aj_(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dOv(v))
break}},
aAS(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayk[q.cx]
v=new C.dOw()
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
aj_(d){return this.cyN(d)},
cyN(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj_=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awQ(B.a([B.cG7(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj_)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aTT)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj_,v)},
aAg(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mw(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.p1)){E.Xp("kick",0,0.4)
v.UG(170,new C.dOU())}v.p1=w
return},
aeD(d){var w,v,u,t,s=this
s.m(new C.dOx(s,d))
if(d==null){s.fy=D.LN
s.fr=1
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOy(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.J(0,t)
if(s.CW===2)s.CW=1}s.aAS()
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBg(t,d)
return},
cBg(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Xp("kick",0,0.8)
this.UG(260,new C.dOz())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UG(w*70,new C.dOA(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h9e("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.Xp("kick",0,0.3)
break
default:E.h9e("organic",2+A.o.F(e.length,6),200,0.4)}},
cFV(d){this.m(new C.dOC(this,d))},
b0f(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAg(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
bZQ(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dOq(u,w,d))
v=x.t
C.JJ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UG(1100,new C.dOr(u))
return}if(d==null){if(u.cy!=null)u.aeD(null)
return}u.aeD(d)},
c2s(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.foG,u,u,u)}else if(d==null||e==null)w=D.fDv
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hl,u,u,u),A.cU,B.d(e.b,u,u,u,u,u,u,I.EM,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aG(u,u,u,u,D.bYf,u,u,u,new C.dOs(v),u,u,u,u,"Back to the whole body",A.cf)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(K.Yh,u,s,t,u,u,A.n),u,u,u,u,R.alC,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dEE.h(0,g)
i.aAS()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dlK
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAg(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aG(h,h,h,h,K.oH,h,h,h,new C.dOJ(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BX(h,A.pM,p))}p=i.ax
o=p?0:1
q.push(new B.dw(p,B.zl(B.q(A.A,B.x(D.dv2,A.l,h,A.e,A.Q,0,A.p),A.f,h,h,D.b6z,h,h,D.hq6,h,h,h,h,h),A.b1,A.mW,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b3,A.t,q,h),1),new B.D(F.a02,i.c2s(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dd2[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dOK(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dOL(i,k),h,A.aS,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iP(A.c0,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dOM(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G1(D.ayk[j],i.cx===j,new C.dON(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dOO(i),D.ap1,A.aH,h),new E.fC(A.oz,"Reset view",new C.dOP(i),A.c,h),new E.dW(l,m,new C.dOQ(i),A.HM,A.aS,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dOR(i),A.oD,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lB(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.Q,0,A.p))}}
C.aN2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aN3.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byT()}}
C.c6i.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hA5
$.hA5=v+1
u="ngmy-body-viewer-"+v
$.xs()
$.pV().pc(u,new C.c6j(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6k(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rn(w.contentWindow)
if(w!=null)J.aj7(w,e,"*")}}catch(v){}}}
C.yI.prototype={}
C.D_.prototype={}
C.nI.prototype={}
C.bcU.prototype={}
C.VB.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEy(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.H,A.H,B.aR(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEy.prototype={
Y(){var w=this
w.a4()
w.me()
w.adB()
$.aW.x1$.push(new C.dQy(w))},
adB(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adB=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adB)
case 6:q=e.tS("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dQc(s,r))
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
return B.i($async$adB,v)},
adX(d){return this.c6p(d)},
c6p(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adX=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.az(),$async$adX)
case 6:r=f
q=s.cx
p=B.a4(q).k("k8<ch.E,n>")
q=B.C(new B.k8(q,new C.dQf(),p),p.k("M.E"))
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
return B.i($async$adX,v)},
ayU(d,e,f,g){var w="c"+this.y++,v=new C.D_(w,e,f,g)
this.d.n(0,w,v)
return v},
mM(d,e,f){return this.ayU(0,e,f,0)},
acW(d,e){var w
if(D.A4.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.o(-36,w))},
uh(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUU(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cWW[A.o.F(q.d,4)])&1)===0
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
bSj(){return this.aUU(null)},
mw(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSj()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eF(w,new C.dQz()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayV(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mf(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
av4(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQa(w,d))
return}w.m(new C.dQb(w,d))},
cBy(d){this.m(new C.dQg(this,d,$.bGD()[d]))},
cbc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGD()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dQ5(),t),s)
A.d.aZ(r,new C.dQ6())
q=B.C(new B.Y(new B.b8(v,u),new C.dQ7(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQ8(d,w))
return}u=d.r
p=B.dN(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUU(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lA(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aO(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dQ9(d,o,a0))},
azM(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cke(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2l(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A4.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acW(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bR2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acW(p,o)
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
cbe(d){var w,v,u,t=this,s=t.azM(d)
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
t.m(new C.dQh())
return}u=t.bR2(d)
if(u!=null)t.m(new C.dQi(t,u))
else t.m(new C.dQj(t))},
axI(d){return this.c5o(d)},
c5o(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azM(d)
if(s==null){w=1
break}B.jX()
t.m(new C.dQe(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axI,v)},
bDL(d){if(this.x.A(0,A.az))return
this.m(new C.dQ4(this,d,A.cN))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGD()[g]
g=x.p
v=B.a([B.aG(h,h,h,h,B.X(i.ax?A.oD:V.t6,A.ab,h,h,h,21),h,h,h,new C.dQs(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.co.j(0.14)
r=B.L(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fnN,h,h,h),B.d(w.b,h,h,h,h,h,h,H.ab8,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lg,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b4:A.eU,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fP4,h,i.gcbb(),B.bp(A.co,h,h,h,h,h,h,h,h,h,h,A.cf))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,U.O_,D.bCd,h,h,1/0))}u.push(B.E(B.cs(new C.dQt(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A4.h(0,r).a+": "+D.A4.h(0,r).e,h,h,h,h,h,h,A.tH,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a06,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A4.gdO(D.A4),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bH,B.d(p.a,h,h,h,h,h,h,D.aVS,h,h,h)],g),A.l,h,A.e,A.Q,0,A.p),A.f,h,h,new B.p(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ah.NX,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQu(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dqg[l]
s.push(new E.fC(A.PE,k.b,new C.dQv(i,k),A.co,h))}s.push(new E.fC(K.wA,"Clear",new C.dQw(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGD(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.eb:A.lM
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bi
r.push(new E.dW(q.a,o===j,new C.dQx(i,j),p,n,h))}return E.lB(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.Q,0,A.p))}}
C.bdc.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.Q()
w=B.K()
w.r=D.afq.gp(0)
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
i=a3.acW(l,o.c)
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
if(h){n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.b=A.a9
n.c=9
n.r=A.bi.j(0.28).gp(0)
n.y=N.os
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dy:A.bw).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.Jy)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aF($.Q().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kR(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbd(a5,a3.d)},
cbd(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A4.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bm(t,A.jN)
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
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bX(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
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
q.sav(new B.a9(A.b7,A.b8,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.am(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pw:D.bS_}else l=e.b
k=C.hb3(B.lA(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.o(p/2,q.gba(q)/2)))
j=C.hb3(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hb3(f,9,u?A.dy:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0U(d,w.acW(a0,h),o)
this.b0U(d,a0.c.a2(0,D.Jy),o)},
b0U(d,e,f){var w
$.Q()
w=B.K()
w.r=D.afq.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aD(d){return!0}}
C.aN7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzB.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byY()}}
C.Ob.prototype={
S(){return new C.aEP(B.mY(0,null,null))}}
C.Ld.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B9.prototype={}
C.aEP.prototype={
Y(){this.a4()
B.bP(A.qu,C.ipC(),x.H)},
cbj(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dWI(w,e))},
c4e(){var w=this
w.e.t()
w.e=B.mY(w.f,null,null)
w.m(new C.dWH(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oM(t,B.c4(v,A.c3,t?new C.btw(w.e,w.gcbi(w),new C.dWJ(d),v):new C.aJ1(u,new B.bJ(u.b,x.k)),v,!1,!1,v,!1),new C.dWK(w,u),x.K)}}
C.bv8.prototype={}
C.btw.prototype={
b0V(d,e){var w=null
return new B.D(R.a0y,B.x(B.a([B.d(d,w,w,w,w,w,w,D.foo,w,w,w),A.bH,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.A(B.a([B.aG(v,v,v,v,A2.mn,v,v,v,w.e,v,v,v,v,v,v),A.tz,D.bIv],u),A.l,v,A.e,A.i,0,v,v),s=w.b0V("STUDIOS","Play, make things, and keep what you make")
$.bGE()
return B.bn(!1,B.x(B.a([new B.D(D.bHq,t,v),B.E(B.w4(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mv(s,v),new B.of(A.hX,B.PN(new B.oP(new C.f7M(d),9,!0,!0,!0,0,B.tq(),v),D.aTI),v),new B.mv(w.b0V("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.of(D.bCm,B.PN(new B.oP(new C.f7N(w),6,!0,!0,!0,0,B.tq(),v),D.aTI),v)],u)),1)],u),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)}}
C.afX.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(I.m7,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aiE],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.H,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.H,12)],u)
return B.aI(!1,A.a3,!0,r,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.q(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.p(r,r,r,r,u,new B.a9(A.aA,A.aE,A.x,w,r,r),A.a7),r,44,r,r,r,r,r,44),A.U,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cU,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.l,r,A.bb,A.i,0,A.p),r,new B.p(r,r,v,n,t,new B.a9(A.aA,A.aE,A.x,m,r,r),A.n),r,A.H1,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aeP.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(I.m7,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aiE],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aN(6,6)
m=B.a([A.d.gH(i),A.d.gan(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLU,0)],u)
r.push(B.q(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.p(k,k,k,new B.be(n,n,n,n),l,new B.a9(A.a6,A.aa,A.x,m,k,k),A.n),k,17,k,new B.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.l,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gH(i),A.d.gan(i),0.4)
u.toString
return B.aI(!1,A.a3,!0,k,B.aP(!1,h,!0,B.eJ(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.ax,B.X(A.D4,A.d.gH(i),k,k,k,18)],s),A.l,k,A.bb,A.i,0,A.p),k,new B.p(k,k,v,g,t,new B.a9(A.aA,A.aE,A.x,f,k,k),A.n),k,A.H1,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.R3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gan(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c2(j,new B.p(h,j,j,B.m(22),j,j,A.n),A.bj),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jv,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.H,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gan(i)
i=B.ar(A.d.gan(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c2(j,new B.p(j,j,j,j,j,new B.a9(A.aA,A.aE,A.x,B.a([p,o,n,i],m),D.dw0,j),A.n),A.bj),0,0,0),B.ap(j,B.c2(j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.b8,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bj),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.buw(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.H,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fq9,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Kn)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h4,B.A(B.a([s,A.ex,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dw(!0,B.e9(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bR(0,new B.dw(!0,B.c2(j,new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bj),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,B.c2(B.by(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),new B.p(j,j,j,u,r,j,A.n),A.bj),0,0,0)],l),j),j)}}
C.buw.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bo(u.save())
u.translate(v.gbw().a,v.gbw().b)
d.hW(0,0.35)
t=B.bs(A.H,(w- -10)*1.6,s-r)
$.Q()
s=B.K()
s.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bu1.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bpf,D.ahI],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kB,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c2(B.by(q,B.b4(B.at(B.X(A.jH,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbR(p,w),A.az),A.aq),new B.p(w,w,s,v,r,new B.a9(A.aA,A.aE,A.x,u,w,w),A.n),A.bj),w)}}
C.bbR.prototype={
a5(d,e){var w,v,u,t,s,r
$.Q()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.o(s,0),new B.o(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.o(0,r),new B.o(u,r),w)
u=e.ei(A.H)
$.Q()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aD(d){return!1}}
C.aJ1.prototype={
S(){return new C.aJ2(new B.cw(null,x.A),null,null)}}
C.aJ2.prototype={
guG(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bzD,null,1,null,v)
w.cO(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
ga_t(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h3,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bD()
v.e=w
u=w}return u},
gayW(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbg(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYc(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ_(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9L(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guG()
w.dl()
w.dV$.J(0,this.gcBh())},
cBi(){var w,v,u,t,s,r,q,p=this,o=p.guG().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayW().a){case 0:w=D.nO
break
case 1:w=D.v6
break
case 2:w=D.a5a
break
case 3:w=D.nO
break
case 4:w=D.dis
break
case 5:w=D.v6
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ad9)r=0.09
else r=s===D.ada?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.cad[v]
E.mr("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JJ("bell",D.cj2,1400,0.35)}}p.ax=o},
t(){this.guG().t()
this.ga_t().t()
this.bAN()},
af2(){var w=this
w.guG().d0r(0,B.dv(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f7s(w))},
cmh(){this.guG().bQ(0)
this.m(new C.f7r(this))},
af1(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ_(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aR),$.aw()))}m=B.a([],m)
for(t=u.gb9L(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aR),$.aw()))}o=B.C(u.gaYc(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m7,null,new C.f7q(u,l,m,o),t,!0,!0,!0,A.lT,!1,!1,x.H),$async$af1)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$af1,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayW(),f=i.a.c,e=f.b,d=i.gcbg(),a0=new C.B9(g,e,f.c,d,i.gaYc(),i.gaZ_(),i.gb9L())
f=B.ar(A.d.gH(d),A.d.gan(d),0.4)
f.toString
g=x.p
w=B.a([B.aG(h,h,h,h,B.X(i.at?A.oD:V.t6,A.ab,h,h,h,21),h,h,h,new C.f7A(i),h,h,h,h,"Sound",h),B.aG(h,h,h,h,D.c0S,h,h,h,i.gcbh(),h,h,h,h,"Edit words and pictures",h),B.aG(h,h,h,h,K.oH,h,h,h,new C.f7B(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c8(i.ga_t(),new C.f7C(i,a0),h),B.cs(new C.f7D(i,a0))],g)
u=i.as
t=u?i.gcmg():i.gcbk()
u=u?D.bRh:A.t5
s=B.ar(A.d.gH(d),A.d.gan(d),0.4)
s.toString
t=B.A(B.a([B.aG(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cf),B.E(B.c8(i.guG(),new C.f7E(i,a1,a0),h),1),B.aG(h,h,h,h,D.bY5,h,h,h,new C.f7F(i),h,h,h,h,"Replay",A.cf)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f7G(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dt3[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f7H(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.caC[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aU
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.q(h,h,A.f,h,h,new B.p(h,h,new B.bG(j,j,j,j),h,h,new B.a9(A.aA,A.aE,A.x,n,h,h),A.a7),h,l,h,K.al8,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f7I(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lB(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b3,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.Q,0,A.p))},
bCW(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nO[r]
p=A.j.D((1-A.e3.aA(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nO[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nO[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nO[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nO[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nO[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kG(q,new B.iR(n,f,A.b7,!0,f,new C.R3(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nO[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nO[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mG(new C.bt7(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bTT(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v6[r]
p=A.qs.aA(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v6[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.v6[r]
q=m-0.03
q=A.j.D((a0-q)/(m+0.01-q),0,1)
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
k=new B.iR(k,f,A.A,!0,f,new C.bu1(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kG(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cGp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5a[w]
l.push(A.cw.aA(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bwC(d.d,l,D.aA2,m,C.btv(e,0.4,0.62),f,C.btv(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hbB(g,w)
q=D.aA2[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kG(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hbB(g,w)
r=D.a5a[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kG(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VQ,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJd(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btv(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.at(B.dM(B.b4(f,f,f,new C.bsx(A.d.gH(a1),C.btv(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.elr),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.j.D((o-0.7)/0.3,0,1))
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
w.push(new B.y(o,new B.cL(0,0,0,0,f,f,new B.cg(A.A,f,f,new B.kG(k*(0.45+0.55*o),B.dM(new B.iR(l,f,A.A,!0,f,new C.R3(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f7j())
A.d.v(a0,new B.N(w,new C.f7k(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cbf(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v6[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.l9.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v6[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aC8[q]
k=B.dr()
k.n_(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v6[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.cg(A.A,e,e,new B.kG(m,B.dM(new B.iR(k,e,A.A,!0,e,new C.R3(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.v6[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.cg(A.A,e,e,B.dM(new B.mG(new C.bcx(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aC8[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFS(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.elv],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nO[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCj[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nO[r]
f=g+0.2
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nO[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n_(l*h+D.dmL[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cg(A.A,a3,a3,new B.kG(g,B.dM(new B.iR(f,a3,A.A,!0,a3,new C.R3(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nO[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCj[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cg(A.A,a3,a3,B.dM(new B.mG(new C.bsA(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bt7.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bm(u,A.hA)
$.Q()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.os
d.am(q,t)
t=B.bm(u,A.hA)
q=B.K()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bsx.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ei(A.H),e.b*u,e.a*u)
$.Q()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=T.Oo
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
aD(d){return!0}}
C.bcx.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ei(A.H),h=this.c,g=A.cw.aA(0,h)
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
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.N(new B.o(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bsA.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.H)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aD(d){return d.c!==this.c}}
C.bwC.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.Q()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a9(A.b7,A.b8,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hbB(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.Q()
a3=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mf
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.S,A.P)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a9(A.b7,A.b8,A.x,B.a([a6,A.d.gan(w)],v),c1,c1).aK(0,a4))
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
a5=new B.ao(A.O,A.M,A.R,A.S,A.P)
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
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.O,A.M,A.R,A.S,A.P)
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
b0=B.bm(new B.a1(b7,a6,b7+s,a9),A.hA)
$.Q()
b8=new B.ao(A.O,A.M,A.R,A.S,A.P)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hT(a4),$.mg()[1],!0)
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a2.sav(new B.a9(A.b7,A.b8,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aOO.prototype={
aY(){this.b5()
this.b4()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1u.prototype={
a7(){return"_Role."+this.b}}
C.qs.prototype={}
C.ra.prototype={}
C.D3.prototype={}
C.a_r.prototype={}
C.afL.prototype={}
C.a1H.prototype={
gZ(d){return this.d}}
C.De.prototype={}
C.acG.prototype={}
C.acX.prototype={}
C.aeS.prototype={}
C.bj9.prototype={
a3D(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baR(d,e,f){return this.a3D(d,e,f,0,0.55)},
aDB(d,e,f,g){return this.a3D(d,e,f,0,g)},
baS(d,e,f,g){return this.a3D(d,e,f,g,0.55)},
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
ala(d,e,f,g){var w="n"+this.ay++,v=new C.ra(w,e,f,g)
this.a.n(0,w,v)
this.b_()
return v},
tb(d,e,f){return this.ala(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dqH(e))
A.d.bt(w.c,new C.dqI(e))
w.b_()},
beJ(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n7.h(0,v.b).c===D.xF)return!1
w=this.b
if(A.d.aV(w,new C.dqE(d,e)))return!1
w.push(new C.D3(d,e))
this.b_()
return!0},
c37(d){var w
if(d.b==="beat")return D.cjc[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCA[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.De(u,t,j.ax,90))
w.push(new C.De(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1H(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baR(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1H(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.De(u,t,j.ax,120))
j.aDB(120,200,"noise",0.5)
j.baR(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.De(u,t,j.ax,230))
w.push(new C.De(u,t,j.ax+160,160))
w.push(new C.De(u,t,j.ax+320,100))
j.baS(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acG(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baS(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.acX(u,u.a2(0,new B.o(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3D(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3D(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aeS(u,D.aBV[v],t,j.ax))
j.aDB(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDB(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cfi[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwn(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eF(w,new C.dqF(d));v.C();)j.aC6(w.gR(0),j.ax+D.crD[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cIS[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eF(w,new C.dqG(d));v.C();)j.aC6(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xB(w,0,v-700)},
cwn(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_r(e,"~"+d))},
aC6(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afL(d.a,v,e,w))
u.push(new C.a_r(w,v))},
a7o(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aHb(r)
u.n(0,r,o.ax+o.c37(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dqJ(o),v),v.k("M.E"))
if(q.length!==0){A.d.bt(w,new C.dqK(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eF(u,new C.dqL(p));r.C();)o.aC6(u.gR(0),o.ax)}else o.aHb(u)}}A.d.bt(o.d,new C.dqM(o))
A.d.bt(o.e,new C.dqN(o))
A.d.bt(o.f,new C.dqO(o))
A.d.bt(o.w,new C.dqP(o))
A.d.bt(o.x,new C.dqQ(o))
A.d.bt(o.r,new C.dqR(o))
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
Uj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aU(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n7.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.ra(t,u,new B.o(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.j.M(B.dC(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D3(q,p))}k.b_()
return!0}catch(l){return!1}},
cVT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.ra(n,r,new B.o(q*p.a,o*p.b),s))
l.b_()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beJ(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GE.prototype={}
C.WZ.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aG1(new C.bj9(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cN,A.L,A.az,$.aw()),A.bE,A.H,A.H,A.Z,null,null)}}
C.aG1.prototype={
adu(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adu=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adu)
case 6:q=n.k4(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.exk(s))
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
return B.i($async$adu,v)},
aao(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aao=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ex9(s))
u=3
w=6
return B.b(B.az(),$async$aao)
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
return B.i($async$aao,v)},
bPa(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cJ(0,0,new C.exb())+"|"+A.d.cJ(o,0,new C.exc())
if(v===p.ch)return p.CW
u=new C.exf()
t=x.s
s=B.a([],t)
r=new C.exg(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eF(n,new C.exd());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.exe(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adu()
v.d.db=v.ay
w=v.q_(new C.exK(v))
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
w.bzP()},
ad_(d){return this.c2y(d)},
c2y(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad_=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$ad_)
case 6:q=m.aT(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uj(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZq(A.d.gH(D.aBm))
if(s.c!=null)s.m(new C.exj())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad_,v)},
aZq(d){this.d.cVT(0,d.c,d.d)
this.EJ()},
EJ(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lH,new C.ex5(this))},
ayX(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckf(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2m(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n7.h(0,r.b).c===D.xF)continue
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
cbn(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hA6(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cE6(d){var w,v,u,t,s,r,q=this,p=q.ayX(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHb(p)
return}if(q.r)return
t=D.n7.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rj)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b_()
q.EJ()
return}if(q.r)return
r=q.cbn(d)
if(r!=null){w=q.d
A.d.cD(w.b,r)
w.b_()
q.EJ()}},
cly(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckf(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayX(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clz(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b_()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b_()}}},
b3M(){var w,v,u=this
if(u.z!=null){w=u.c2m(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beJ(v,w)}else v=!1
if(v){B.jW()
u.EJ()}u.z=null
u.d.b_()}else if(u.x!=null){if(u.at)u.EJ()
u.x=null}},
adH(d){return this.c5p(d)},
c5p(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayX(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jX()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m7,null,new C.exm(q),p,!0,!0,!1,A.lT,!1,!1,x.y),$async$adH)
case 3:if(f===!0){r.W(0,s)
t.EJ()}case 1:return B.h(u,v)}})
return B.i($async$adH,v)},
cbl(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tb(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EJ()},
ahD(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m7,null,new C.exo(),s,!0,!0,!0,A.lT,!1,!1,x.es),$async$ahD)
case 2:t=e
if(t!=null)u.aZq(t)
return B.h(null,v)}})
return B.i($async$ahD,v)},
af3(d){var w=0,v=B.j(x.H),u=this,t
var $async$af3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.ex8(),t,null,!0,!0,x.y),$async$af3)
case 2:if(f===!0){u.d.a8(0)
u.EJ()}return B.h(null,v)}})
return B.i($async$af3,v)},
B(d){var w=this,v=null,u=B.a([B.ajh(w.r?new B.bM(A.a6,v,v,new B.D(A.H2,B.ho(D.bVY,D.fHE,new C.exI(w),v),v),v):w.cbo(),A.b1,A.iJ),B.E(B.cs(new C.exJ(w)),1)],x.p)
if(!w.r)u.push(w.cyQ())
return B.c4(v,A.c3,B.bn(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKT(){var w=null,v=new C.exa(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bR(0,B.e9(B.at(B.q(w,B.cc(B.x(B.a([D.fTe,A.ax,D.h_Y,A.aB,v.$4(A.oC,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D0,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kv,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.P9,A.bi,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h_g,new B.bM(A.aa,w,w,B.bN(!1,D.fQg,w,w,!0,w,w,w,this.gbKM(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Xy,new B.p(I.m7,w,s,t,w,w,A.n),w,w,w,A.fs,An.aml,w,w,w),w,w,w),u,!0),0,0,0)},
cbo(){var w=this,v=null,u=B.aG(v,v,v,v,A2.mn,v,v,v,new C.exu(w),v,v,v,v,v,v),t=w.a9P(A.CR,"How it works",new C.exv(w),!0),s=w.ay?A.oD:V.t6
return new B.D(D.bGA,B.A(B.a([u,D.bIh,t,w.a9P(s,"Sound",new C.exw(w),!0),w.a9P(A.ee,"Ideas",w.gcpk(),!0),w.a9P(K.wA,"Clear",w.gcbm(w),!0),w.aQ1(A.hx,"Show",new C.exx(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQ1(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ae.wp,B.aI(!1,A.a3,!0,u,B.aP(!1,t,!0,B.hb(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9P(d,e,f,g){return this.aQ1(d,e,f,g,!1)},
cyQ(){var w=null,v=new C.exq(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.xF),v.$2("CHANGE",D.F8),v.$2("REACT",D.rj)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BO,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bBz,w,w,w)},
cyR(d){var w,v,u,t,s=null,r=D.n7.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fB,B.aA(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cU,B.d(r.a,s,1,A.a2,s,s,s,D.aVS,s,s,s)],x.p),A.l,s,A.e,A.Q,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a9(A.b7,A.b8,A.x,u,s,s),A.n),s,s,s,s,A.hH,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.exp(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bja.prototype={
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
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rZ(new B.o(i,j),new B.o(g,h))
f.sav(new B.a9(A.a6,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hA6(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.Q()
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.r=A.c.j(0.35).gp(0)
i.y=N.os
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.Jy)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aF($.Q().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kR(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.j.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.dH.aA(0,v)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.ks(p,j,A.dH.aA(0,v))
i.toString
j=B.ks(p,j,A.dH.aA(0,A.j.D(v-0.35,0,1)))
j.toString
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.c=5
p.d=A.bu
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rZ(j,i)
p.sav(new B.a9(A.a6,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kU
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.sav(new B.bY(A7.B9,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjb(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.cl6(b7,b4.d,b5)
b6.restore()},
cl6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n7.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bm(u,A.il)
s=t.eQ(A.cA)
$.Q()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mf
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wq
d.am(s,r)}s=t.eQ(A.cL)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a9(A.b7,A.b8,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.am(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bjb(B.lA(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.o(s/2,r.gba(r)/2)))
n=C.bjb(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aBV[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rj){s=e.c.a2(0,new B.o(0,62))
r=B.K()
r.r=D.aCA[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjb(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjb(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xF)k.b4z(d,e.c.aJ(0,D.Jy),q)
k.b4z(d,e.c.a2(0,D.Jy),q)},
b4z(d,e,f){var w
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
aD(d){return!0}}
C.aNX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.eh.prototype={}
C.tY.prototype={
as4(d,e,f,g){var w=this
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
C.abl.prototype={}
C.acs.prototype={}
C.a5s.prototype={
bgB(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abl(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7z(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bPD())},
ala(d,e,f,g){var w="p"+this.c++,v=new C.tY(w,e,f,g)
v.as4(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bPO(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMS(d,e,f,g,h){return A.d.aV(this.b,new C.bPJ(e,f,g,h))},
am0(d,e,f,g){var w
if(d===f||this.cMS(0,d,e,f,g))return null
w=new C.acs(d,e,f,g)
this.b.push(w)
return w},
aCD(d){var w
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
aoM(d){return this.Mi(d)&&!d.x&&d.cx>this.Af(d)},
b8W(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mi(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbI(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A5.h(0,v)
if(w!=null)return w.a
return 100},
vI(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7z(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bPP(a2),t).cJ(0,0,new C.bPQ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bPS(o)
m=B.a([],x.t)
l=new C.bPR(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bPU(g,l,n)
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
a2.b8S(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Af(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8S(e,d,w,!0)
a2.bRw(a4)},
b8S(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPF(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPE(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPH(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c_(b7,0,!1,b3)
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
for(d=0;d<b7;++d)e[d]=B.c_(b7,0,!1,b3)
a0=B.c_(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8W(t)*(1+t.CW))
a4=b2.aCD(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbI(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUT(e,a0,b8)
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
bUT(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c_(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c_(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bRw(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCD(o)/a1.b8W(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Af(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJw(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgB(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.un(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.j.D(o.db-h,0,24)
else o.cy=A.j.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.un(o,"The "+$.qC().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.un(o,"More than 1.5 amps went through the "+$.qC().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.un(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.un(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A5.h(0,n)
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
if(D.fbo.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.un(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.un(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.D(j/14,0,1)
break
case"motor":n=A.j.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.un(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.D(i/1,0,1)
if(!o.x&&i>1)a1.un(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.un(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.un(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJw(d){return A.d.aV(this.a,new C.bPC(d))},
un(d,e){var w
d.x=!0
d.ay=e
this.bgB(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blf(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aIY(d){var w=d.b
return D.aSG.q(0,w)||D.A5.al(0,w)||w==="buck"||w==="regulator"},
bi4(d){var w,v=!0
if(!this.Mi(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A5.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vy(d,e){var w=this.b
return new B.Y(w,new C.bPW(d,e),B.U(w).k("Y<1>")).gI(0)},
tO(d){var w,v
if(d.x)return!1
w=d.b
if(D.A5.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bg7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qC().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aIY(d)||i.tO(d))return null
w=i.Vy(d,0)
v=i.Vy(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVs(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iY(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A5.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mv("battery"),o=J.aU(t.a),t=new B.eF(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vy(n,0)+i.Vy(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mv("switch"),o=J.aU(t.a),t=new B.eF(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qC().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Af(k))return"The "+$.qC().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Af(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bPK(i,d))
h=q.b
h=h===A.j.iY(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mv(d){var w=this.a
return new B.Y(w,new C.bPN(d),B.U(w).k("Y<1>"))},
aIz(d){return this.Mv(d).aV(0,new C.bPM(0.35))},
qc(d,e){return A.d.aV(this.a,new C.bPL(e))}}
C.ajT.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.Q()
w=B.K()
w.r=F.yd.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.o(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mt.al(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mt.al(0,j.b)?(j.ch-1)*38:0
b6.cJz(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hNw(s.a,s.b,c3)
s=b6.e
s.toString
$.Q()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bu
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.Q()
h=new B.ao(A.O,A.M,A.R,A.S,A.P)
h.r=F.MB.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wq
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.j.D(A.l9.aA(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cm5(c2,e,e===q)
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
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
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
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aSG.q(0,i)||D.A5.al(0,i)||i==="buck"||i==="regulator")&&!w.tO(e)&&w.Vy(e,0)+w.Vy(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.Q()
h=new B.ao(A.O,A.M,A.R,A.S,A.P)
h.r=A.av.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iH(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.r=F.yd.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bi4(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bi4(e)){b0=new B.iH(new B.en("+",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ar(M.Nh,F.ZY,b4)
l.toString
k=b2.f
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H6
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bK_())){b5=A.d.cJ(s,0,new C.bK0())
$.Q()
b9=B.K()
b9.r=D.bgJ.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.cs,b7,b7,b7,D.fmv,A.a5,A.bX,b7,A.dz,A.bY)
b0.o5(b8-24)
b0.a5(c2,new B.o(12,10))}},
qS(d,e,f,g,h){var w=null,v=B.fq(w,A.cs,w,w,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
v.a5(d,f)},
cJz(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hFy(a0,a1,a2)
e.E(new B.c5(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aS,F.MB,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aH,A.aS,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.br
u=B.K()
u.b=A.a9
u.c=a3?7:5
u.d=A.bu
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.K()
u.b=A.a9
u.c=2.4
u.d=A.bu
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.TP(new B.rw(B.xL(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.D(r*120,0,160)
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
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PF(d,e,f,g){var w,v,u,t
$.Q()
w=B.K()
v=g?A.b7:A.a6
u=g?A.b8:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.It,null).aK(0,d))
return w},
ay7(d,e,f){return this.PF(d,e,f,!0)},
c78(d,e){return this.PF(d,A.br,A.iE,e)},
aiN(d,e){var w,v,u
$.Q()
w=B.K()
w.sav(D.aQR.aK(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.eo2)
v=e.a2(0,D.eob)
u=B.K()
u.r=A.e7.gp(0)
u.c=1.2
d.ah(w,v,u)},
cm5(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.Q(),c0=B.K()
c0.sav(D.c5V.aK(0,D.f7B))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.os
c1.bZ(D.f7p,w)
if(c3){w=B.bm(D.f7z,A.jM)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hkU(c2)
c1.ah(new B.o(-u,0),D.epE,c0)
c1.ah(D.emJ,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGh(c1,c2)
break
case"solar":r=B.bm(D.f7s,A.iz)
c1.am(r,b3.PF(new B.a1(r.a,r.b,r.c,r.d),A.db,A.bP,!1))
b9=B.K()
w=B.ar(D.bkD,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.btU,A.mS,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a9(A.aA,A.aE,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9q))
c1.ar(D.a9q,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.Q()
w=new B.ao(A.O,A.M,A.R,A.S,A.P)
w.r=A.cu.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aF($.Q().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bv())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dy.j(0.9).gp(0)
c1.N(D.emN,4+4*w,b9)
break
case"crank":o=B.bm(D.f7d,A.fM)
c1.am(o,b3.ay7(new B.a1(o.a,o.b,o.c,o.d),A.bw,A.bK))
b9=B.K()
b9.sav(D.aQS.aK(0,B.bX(A.H,12)))
c1.N(A.H,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cu.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.H,n,b9)
b9=B.K()
b9.sav(D.eza.aK(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiN(c1,D.epw)
b3.aiN(c1,D.emy)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bv())
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
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.eyS.aK(0,B.bX(A.H,4.5)))
c1.N(A.H,4.5,b9)
break
case"switch":o=B.bm(D.f7k,A.mw)
b9=B.K()
b9.sav(D.asQ.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiN(c1,D.TZ)
b3.aiN(c1,D.aLD)
h=c2.w?D.aLD:H.aLu
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.TZ,h,b9)
b9=B.K()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.TZ,h,b9)
b9=B.ks(D.TZ,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bm(D.aRz,D.aQW)
b9=B.K()
b9.r=A.fG.j(0.25).gp(0)
c1.am(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.am(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cF,c2.fx).gp(0)
c1.ah(D.aLX,D.aLB,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aLX,D.eq_,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.enA,D.aLB,b9)
b9=B.K()
b9.r=A.dO.gp(0)
c1.N(A.H,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.fK[f]*22,0),20,9)
c1.am(B.bm(e,A.hQ),b3.PF(e,A.cZ,A.o9,!0))}break
case"pot":b9=B.K()
b9.sav(D.ez1.aK(0,B.bX(A.H,21)))
c1.N(A.H,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.eyQ.aK(0,B.bX(A.H,13)))
c1.N(A.H,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aS.gp(0)
k.c=3
k.d=A.bu
c1.ah(new B.o(b9*3,w*3),new B.o(v*12,m*12),k)
break
case"resistor":a1=B.bm(D.aRz,D.aQW)
b9=B.K()
b9.sav(D.c9b.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.S,A.P)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aS.gp(0)
c1.ar(D.f7N,b9)
b9=c2.r
b3.qS(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.eoZ,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dy.j(0.55*w).gp(0)
v.y=A.wq
c1.N(H.vn,34,v)}o=B.bs(D.els,12,18)
c1.am(B.bm(o,A.hQ),b3.PF(o,A.br,A.ea,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.P)
v.r=A.ds.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Mr
else{v=B.ar(A.ea,A.hF,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G3
else{m=B.ar(A.db,A.dy,c2.fx)
m.toString}w.sav(new B.bY(A.tP,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bX(A.tp,17)))
c1.N(A.tp,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tp,17,w)
b9=b9.r
w=x.v
m=new B.aF(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c5(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.epU,D.epW,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.ent,D.enw,v)
w=B.a([],w)
a4=new B.aF(b9,A.ai,b4,b4,w)
a4.E(new B.aZ(-4,-2))
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
if(t)w=A.aV
else{w=B.ar(A.db,D.blE,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bI5
c1.N(A.tp,30,v)}w=B.K()
w.r=A.ea.gp(0)
w.c=2.4
c1.ah(D.eq1,D.eq0,w)
w=B.K()
w.r=A.ea.gp(0)
w.c=2.4
c1.ah(D.enC,D.enB,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c5(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bv())
v=B.K()
if(t)m=A.jl
else{m=B.ar(A.ej,D.bnn,c2.fx)
m.toString}if(t)k=A.kP
else{k=B.ar(A.kq,A.ay,c2.fx)
k.toString}v.sav(new B.a9(A.aA,A.aE,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f6F))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jZ.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.es.gp(0)
c1.ar(D.f6L,v)
w=new B.aF(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c5(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.am(B.bm(a7,A.hR),b3.ay7(a7,A.am,A.aO))
b9=B.K()
b9.r=A.cr.gp(0)
c1.ar(D.f6e,b9)
b9=B.K()
b9.r=A.cu.gp(0)
c1.ar(D.f6g,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLp,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.P)
v.r=A.cF.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.H,3,w)
b9.restore()
b3.qS(c1,"M",D.epv,A.as,14)
break
case"buzzer":a8=B.bs(A.H,42,42)
b9=B.K()
b9.sav(D.ez5.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.H,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aU.gp(0)
c1.N(A.H,6,b9)
b3.qS(c1,"+",D.epo,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bX(A.H,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cB(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bm(D.f7g,A.hR)
w=B.K()
w.sav(D.c6S.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
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
w.r=D.bmn.j(0.5*b9).gp(0)
w.y=A.kU
c1.af(a9,w)}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m5,Aa.yl,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bm(a7,A.hR)
w=B.K()
w.sav(D.c5N.aK(0,a7))
c1.am(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f6U,w)
for(p=0;p<4;++p){b0=new B.iH(new B.en("\u2212",b4,b4,A.cJ,b4,b4,b4,b4,b4,b4,new B.G(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jg(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.am(B.bm(b1,A.hQ),b3.c78(b1,!1))
b9=38*c2.fx
w=18-b9
$.Q()
v=B.K()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qS(c1,"1F",H.vn,A.c,11)
break
case"radio":a1=B.bm(D.a9q,A.fM)
b9=B.K()
b9.sav(D.c9r.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.o9.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bm(D.f7h,A.iz)
w=B.K()
w.r=A.dT.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.P)
w.r=A.m5.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fy:A.oc).gp(0)
c1.ar(D.f6l,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.K()
w.r=A.bC.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aQS.aK(0,B.bX(D.a8n,6)))
c1.N(D.a8n,6,b9)
b9=B.K()
b9.r=A.o9.gp(0)
c1.N(D.emI,4,b9)
b9=B.K()
b9.r=A.ea.gp(0)
b9.c=1.8
c1.ah(D.emD,D.aLI,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLI,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.P)
v.b=A.a9
v.c=1.4
v.r=A.nt.j(0.7).gp(0)
c1.cB(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bm(D.f7r,A.hR)
v=B.K()
v.r=M.nx.gp(0)
c1.am(w,v)
b2=B.bm(D.f7o,A.hQ)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nP(b2),$.np(),!0)
b9.translate(-33,-21)
L.hgS(c1,D.fec,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b4.gp(0)
c1.N(D.emU,1.6,b9)}else{w=B.K()
w.r=D.w8.gp(0)
c1.am(b2,w)
b9=new B.aF(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bw.gp(0)
c1.ar(D.f6K,b9)
break}C.irc(c1,c2,b3.b.d,b3.gcbJ())
if(t)b3.qS(c1,"\u2716",D.eq4,A.ay,14)
if(s)c1.c.restore()},
bGh(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.am(B.bm(w,A.mw),o.ay7(w,A.db,A.jj))
v=new B.a1(-22,-13,22,13)
$.Q()
u=B.K()
u.sav(D.asJ.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.dX.gp(0)
d.ar(D.f73,u)
t=new B.a1(28,-5,34,5)
d.am(B.bm(t,A.hA),o.PF(t,A.db,A.iE,!0))
o.qS(d,"+",D.emj,A.aS,11)
o.qS(d,"\u2212",D.epx,A.ab,11)
o.qS(d,B.w(n===A.j.iY(n)?A.j.V(n):n)+"V",D.epd,A.aS,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.ar(D.f72,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qS(d,"FLAT",D.eoY,A.c0,9)}if(n>2){u=B.K()
u.r=A.aU.gp(0)
u.c=1
d.ah(D.elB,D.aLh,u)
o.qS(d,n>3?"3 cells":"2 cells",D.epc,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bm(r,A.mw)
$.Q()
s=B.K()
s.sav(D.c9_.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.cX.gp(0)
d.ar(D.f74,s)
for(q=0;q<2;++q){p=F.aCi[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.sav(D.aQR.aK(0,B.bX(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qS(d,"9V",D.ep5,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bm(r,A.iz)
$.Q()
s=B.K()
s.sav(D.asJ.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.bi.gp(0)
d.ar(D.f7q,s)
for(q=0;q<2;++q){u=B.bm(B.bs(new B.o(F.IF[q],-20),8,10),A.hA)
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=A.cu.gp(0)
d.am(u,s)}o.qS(d,"+",D.ems,A.ay,10)
o.qS(d,"12V",D.ep9,A.as,15)}},
aD(d){return!0}}
C.mX.prototype={
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
n.as4(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctn(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am0(m,u[1],l,u[3])}}}
C.ajR.prototype={
S(){var w=x.N
return new C.ajS(A.H,A.az,B.T(w,x.gl),B.aR(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.ajS.prototype={
afe(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJE(w,d))
w.as=B.cy(A.lI,new C.bJF(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvV()},
a0R(d,e){return this.ck0(d,e)},
b3f(d){return this.a0R(d,!1)},
ck0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0R=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rS:A.yy
p=d.b
w=3
return B.b(L.hhe(s,r,p,d.ax<3.2,q,$.qC().h(0,p).b),$async$a0R)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0R,v)},
cwK(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJG()),t=J.cC(u)
t.J(u,v)
t.bt(u,new C.bJH(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2a(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iL,new C.bJI(w,u,d))}},
a0x(d){return this.cim(d)},
cim(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.isq(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0x)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0x,v)},
a2a(d){return this.cuj(d)},
cuj(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bJC(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2a)
case 2:return B.h(null,v)}})
return B.i($async$a2a,v)},
Y(){this.a4()
this.bie()
this.me()},
bie(){this.a.c.e=new C.bJX(this)},
mw(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vI(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.Aw)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0R(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
q.m(new C.bJY())},
baj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mt.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3W(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mt.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJA(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mt.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mt.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hFy(new B.o(k,n),new B.o(i,l),p)
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
afc(){this.a.toString
this.m(new C.bJ6())},
bsz(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dcb[v]
if(!A.d.aV(p.a.c.a,new C.bJZ(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JA:o
s=s?Q.JA:o
q=t.ala(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.afc()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sn[v].a)
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
w.push(n.b3L(s,!0))
n.a.toString
if(t)w.push(n.b3L(r,!0))
w.push(B.E(B.cs(new C.bJW(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b3L(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qC()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AQ,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nV,p,p,p)],n),A.l,p,A.bb,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.oq,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJ7(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.hc,p,p,A.aL,!1),A.f,p,p,new B.p(I.BO,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b17(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.p(F.afw,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alz,w,w,w)},
cm6(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qC().h(0,o),m=d.dy,l=d.fr,k=new C.bJq(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KI,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aG(p,p,p,p,D.bXQ,p,p,p,new C.bJd(q,d),p,p,p,p,"Remove part",A.cf),B.aG(p,p,p,p,A.PT,p,p,p,new C.bJe(q),p,p,p,p,p,A.cf)],g),A.l,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EM,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fvJ,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.ax,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aS,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bg7(d)
if(v!=null){l=(d.x?A.ay:A.av).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.av).j(0.5),A.r,1)
m.push(new B.D(A.hW,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fCx,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.heV(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJf(q,d,u),p,h,p))}l=B.bU(A.bG,l,A.bs,p,4,6)
l=B.a([A.an,l,A.ax,B.d(q.a.c.tO(d)?"Showing: "+F.Rk[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hk,p,p,p)],g)
if(q.a.c.tO(d))l.push(new E.fC(A.Hz,"Open big screen",new C.bJi(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o)&&!C.heV(o)){l=B.a([A.an,B.d(q.a.c.tO(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hk,p,p,p)],g)
if(q.a.c.tO(d))l.push(new E.fC(A.PB,"Open the "+$.qC().h(0,o).b,new C.bJj(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o))A.d.v(m,B.a([A.an,new E.fC(A.CV,"Make it bigger (or tap it 4 times)",new C.bJk(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tO(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fwA,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dux[s]
j=r===A.j.iY(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJl(q,d,r),p,h,p))}i.push(new B.D(A.lg,B.bU(A.bG,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fVA)
A.d.v(m,i)}if(q.a.c.Mi(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Af(d),2)
i=q.a.c
w=i.aoM(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoM(d)?A.c0:A.er,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.j.D(d.cx/q.a.c.Af(d),0,1)
i=q.a.c.aoM(d)?A.ay:A.b4
m.push(new B.D(A.hW,B.x(B.a([l,A.cU,B.by(j,B.ko(A.bA,p,p,5,p,w,new B.lN(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hW,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fqe,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.djn[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJm(q,d,r),p,h,p))}m.push(B.bU(A.bG,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d9k[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJn(q,d,r),p,h,p))}m.push(B.bU(A.bG,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJo(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJp(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJg(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJh(d)))
if(o==="crank")m.push(D.fQQ)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hk,p,p,p))
return q.b17(new B.cQ(D.b6a,B.cc(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcV.prototype={}
C.Wc.prototype={
S(){return new C.aF0(C.hkT(),new B.cw(null,x.q),B.aR(x.S))}}
C.aF0.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afd()},
afd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fJw(),$async$afd)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.irB(t.d,r)
if(s!=null){t.m(new C.e0v(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afd,v)},
Fv(){var w,v=this
if(!v.as)return
w=C.ihr(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGh(w)},
jl(d){if(d!==A.fS)this.Fv()},
t(){$.aW.hV(this)
this.Fv()
this.a3()},
cbL(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e0E(q),u).gI(0)
s=new B.Y(v,new C.e0F(),u).gI(0)
r=new B.Y(v,w.gcZ4(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e0G(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fv()
if(A.o.F(q.w,10)===0){w=q.f
$.aiZ()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiZ()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JJ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e0H())
q.Fv()
w=q.c
w.toString
w=B.Yw(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiZ()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.ma,p,p,p,p,p,p,p,p,p,p))}},
ahZ(){var w=0,v=B.j(x.H),u=this,t
var $async$ahZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e0u(u),t,null,!0,!0,x.H),$async$ahZ)
case 2:return B.h(null,v)}})
return B.i($async$ahZ,v)},
b16(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b15(d,e,f,g){return this.b16(d,e,f,g,null)},
asL(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e4,new B.dl(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agj(){var w=0,v=B.j(x.H),u=this,t
var $async$agj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).cd(B.ec(new C.e0q(u),!1,null,x.H)),$async$agj)
case 2:t=u.e.gbk()
if(t!=null)t.bie()
if(u.c!=null)u.m(new C.e0r())
u.Fv()
return B.h(null,v)}})
return B.i($async$agj,v)},
bJp(){var w,v,u,t,s=null,r=this.f
$.aiZ()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.ay
u=B.m(9)
t=B.L(I.BO,A.r,1.5)
return B.q(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xm,s,s,s),s,s,s),A.f,s,D.b6h,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f4,s,s,s)},
aj8(){var w=0,v=B.j(x.H),u=this,t
var $async$aj8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mR,null,new C.e0D(u),t,!0,!0,!0,A.ke,!1,!1,x.H),$async$aj8)
case 2:return B.h(null,v)}})
return B.i($async$aj8,v)},
cbM(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.bZ6,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0J(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bc3,A.f,r,r,new B.p(A.bq,r,B.L(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fTA,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eU:A.ht,r,r,r,r,r,r,r,r,11.5,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.az3(s.gci3(),r),A.tz,s.b15(A.uI,"Construction Lab: real 3D wiring, plumbing and a house",A.cF,new C.e0K(s,d)),s.b16(A.lM,"Challenges",A.aS,s.gczi(),s.bJp()),s.b15(A.CR,"How to play",A.aH,new C.e0L(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.an,B.A(B.a([s.asL(A.ox,"Circuits",A.bp,s.gcs9()),A.bm,s.asL(A.ov,"Repair",A.aS,new C.e0M(s)),A.bm,s.asL(K.wA,"Clear",A.c0,new C.e0N(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.Q,0,A.p),A.f,r,r,new B.p(I.BO,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bHr,r,r,r)},
B(d){var w=this,v=null
$.atp="tech"
return B.c4(v,A.c3,B.bn(!0,B.x(B.a([w.cbM(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hjK(w.d,w.e,w.gcbK(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.az3.prototype={
S(){return new C.bb2(null,null)}}
C.bb2.prototype={
gaz3(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.a_,null,1,null,v)
w.cO(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gaz3().t()
this.bxg()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c8(this.gaz3(),new C.cKX(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bb1.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.H),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.Q()
w=B.K()
w.r=A.b9.j(0.25+0.15*o).gp(0)
w.y=N.os
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.ez0.aK(0,B.bX(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fZ(A.A,0,6.283185307179586,A.x,D.d02,t,new B.mK(p)).aK(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cKW(d)
p.$3(s.a2(0,A.tp),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.enO),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.eqb),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.cs,t,t,t,D.fmB,A.a5,A.bX,t,A.dz,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.o(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.azn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.azo.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvU()}}
C.aLu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzE.prototype={}
C.fQ.prototype={}
C.Kc.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mt.prototype={}
C.VW.prototype={
S(){return new C.blG(null,null)}}
C.blG.prototype={
gaam(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.op,null,1,null,v)
w.cr(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gaam().t()
this.bz7()},
gSC(){var w=this.gaam().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aRR
return B.c4(w,X.ZC,B.bn(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.at(v.b===D.Ay?this.bLx(v):this.coV(v),w,w,w),B.ap(w,B.aG(w,w,w,w,A.n5,w,w,w,new C.dXF(d),w,w,w,B.o_(w,A.aV,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.foj,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbN(d){var w
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
coV(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9z
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c8(this.gaam(),new C.dXE(this,w,d,o),q)
if(p===D.a9A)v=new B.BH(D.bI4,v,q)
p=this.cbN(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.H,36)],x.V)
return new B.fH(p,B.q(q,B.q(q,v,A.f,q,q,new B.p(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A_.H4,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a9(A.aA,A.aE,A.x,r,q,q),A.n),q,q,q,D.bBp,new B.R(u,u,u,u),q,q,q),q)},
b9s(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.j.bh(this.gSC()*0.4),0,100),q=d.b===D.a9z,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b0(A.o.u(B.dg(s)),2,"0")+":"+A.a.b0(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tI,t,t,t),A.b5],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.q(t,t,A.f,t,t,new B.p(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bHM,t,t,t,3))}n.push(A.de)
n.push(D.fM5)
n.push(A.bm)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bM(A.a6,t,t,B.BV(A.A,B.q(t,t,A.f,t,t,new B.p(A.b4,t,t,B.m(2),t,t,A.n),t,t,t,A_.H4,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r6)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fCU,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.i,0,t,t),t)},
awW(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dps,new B.a9(A.aA,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.ft9,v,v,v)],w))
return B.aA(v,B.x(t,A.l,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dXA(this,d),v,v,v,v,v,v,!1,A.a4)},
c24(d,e){return this.awW(d,e,!0)},
c1M(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aRS||n===D.Et,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.km,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b9s(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aU,A.r,1)
w=B.aA(o,B.q(o,B.by(B.m(23),B.b4(o,o,o,new C.afE(0,p.gSC(),o),A.fN),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.hX,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dXy(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kx[s]
t.push(new B.cg(A.A,o,o,p.c24(r,m?58:54),o))}k=B.a([k,A.an,w,A.af,B.E(B.kU(0.92,t,v,8,12,A3.wl,o,!1),1)],u)
if(n!==D.a9A){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cW(F.kx,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bQ(v,v.gI(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awW(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.l,o,A.qU,A.i,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bCk,H.amZ,o,o,o))}return B.q(o,B.x(k,A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a9(A.aA,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEV(d,e){var w=null
return B.q(w,B.x(B.a([this.b9s(d),B.E(B.b4(w,w,w,new C.afE(e,this.gSC(),w),A.fN),1),B.aA(w,B.q(w,B.at(B.d(F.kx[e].a,w,w,w,w,w,w,A.Kw,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dXt(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLx(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.H,36)],x.V)
return new B.fH(1.5384615384615383,B.q(t,B.c8(this.gaam(),new C.dXw(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a9(A.aA,A.aE,A.x,w,t,t),A.n),t,t,t,D.bHl,new B.R(8,8,8,s),t,t,t),t)}}
C.bxG.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.Q()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.km,0.4)
t.toString
w.sav(new B.a9(A.aA,A.aE,A.x,B.a([u,A.dx,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.P)
t.r=v.j(0.1).gp(0)
t.y=D.bI9
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.afE.prototype={
a5(d,e){return L.M2(d,e,this.b,this.c)},
aD(d){return!0}}
C.aNh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bws.prototype={}
C.a9j.prototype={
B(d){var w=null
return B.c4(B.eH(w,w,w,!0,!0,D.ai4,w,1,!0,w,0,!1,w,!1,w,w,B.aG(w,w,w,w,K.arG,w,w,w,new C.cmf(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h1q,w,w,w,1,w,!0),D.ai4,B.cl(B.a([D.erE,B.cs(new C.cmg())],x.p),w,w,D.bDq,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Xw.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGu(w,new B.au(A.aw,$.aw()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aGu.prototype={
Y(){this.a4()
this.me()},
b7k(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mw(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7k(v.f)
if(w!==v.x){v.x=w
E.mr("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eU3(v))
C.JJ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdu(){if(this.d.length<2)return
this.m(new C.eU_(this))},
b1E(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eTZ(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdt(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxS(p,s.f,r),A.fN),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fB0,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBs[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.aA(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fAd,r,r,r),A.f,r,r,new B.p(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.he,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eU1(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lB(A.aS,A.f6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bt(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kh,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eU2(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fC(A.hY,"Add",s.gcdr(s),A.c,r),A.bm,new E.fC(A.ow,"Spin",q,A.b4,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.Q,0,A.p))}}
C.bxS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.Q()
w=B.K()
w.r=D.bin.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.a9
w.c=3
w.r=A.aS.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=D.aBs[A.o.F(r,8)].gp(0)
d.cB(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cB(o,q,u,!0,p)
J.bo(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aC(p,0,11)+"\u2026"
n=new B.iH(new B.en(p,l,l,A.cJ,l,l,l,l,l,l,D.fnq),A.a5,A.bX,new B.jg(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahI.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aS.gp(0)
d.N(g,20,i)
m=new B.aF(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bv())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.aV.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Wk.prototype={
S(){return new C.blR($,A.bE,0,B.a([],x.X),null,null)}}
C.blR.prototype={
Y(){this.a4()
this.me()},
mw(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JJ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UG(900,new C.e3u())}w.m(new C.e3v())},
b1G(d){return this.m(new C.e3p(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.u(A.j.aq(m,60)),2,"0")
v=A.a.b0(A.o.u(A.o.F(A.j.cL(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsz(l,A.c0,n),A.aTm)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fs3,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fr3,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vy,n,n,n)],s),A.l,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dmo[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e3r(o,q),n,A.c0,n))}m=o.f
p=m?A6.uQ:A.hx
m=m?"Pause":"Start"
return E.lB(A.c0,A.f6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e3s(o),A.b4,n),new E.fC(A.oz,"Reset",new C.e3t(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.Q,0,A.p))}}
C.bsz.prototype={
a5(d,e){var w,v,u,t,s=e.ei(A.H),r=e.a/2-14
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
v.d=A.bu
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.fZ(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bX(s,r)))
d.cB(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Vx.prototype={
S(){return new C.blr($,A.bE,0,B.a([],x.X),null,null)}}
C.blr.prototype={
Y(){this.a4()
this.me()},
mw(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T3.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dP_())
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
E.mr("flute",D.caf[t]+5,1400,0.35)}p.m(new C.dP0())},
gcdx(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L0("Press Start",0.5)
w=D.T3.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dOV())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L0("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new B.L0("Hold",1)
case 2:return new B.L0("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new B.L0("Hold",0.5)}}}return new B.L0("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdx(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hr.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hr.j(0.35),A.H,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pW,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kh,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.T3.gev(D.T3));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dOY(r,v),q,A.hr,q))}w=r.e
v=w?A.zn:A.hx
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dOZ(r),A.b4,q))
return E.lB(A.hr,A.f6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJU.prototype={}
C.Wb.prototype={
S(){return new C.blI(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.blI.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aG(s,s,s,s,K.oH,s,s,s,new C.e0_(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.em(B.aA(s,B.b4(s,s,s,new C.bnK(t.e,t.x,s),A.fN),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e00(t),new C.e01(t),s,s,s,s,s,s,s,s,s,new C.e02(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d1z[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G1(v,u,new C.e03(t,v),!1,s))}u=t.r
return E.lB(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bD,""+A.j.V(u),"Brush",30,2,new C.e04(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e05(t),A.CH,A.bD,s),new E.fC(A.px,"Undo",new C.e06(t),A.c,s),new E.fC(A.eh,"Clear",new C.e07(t),A.c,s),new E.fC(A.Po,"Paper",new C.e08(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.Q,0,A.p))}}
C.bnK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.Q()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bu
q.e=A.dP
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
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
aD(d){return!0}}
C.WU.prototype={
S(){var w=x.S
return new C.aFO(B.aR(w),B.aR(w))}}
C.aFO.prototype={
Y(){this.a4()
this.aug()},
aug(){var w,v,u=this,t=x.N,s=B.bq(D.drB,!0,t)
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
cds(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mr("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eqU(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gan(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mV,new C.eqV(s,v,u),t)
else{s.x=!0
B.bP(Ac.GF,new C.eqW(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VD,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yK,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aS:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iS,A.i,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.er_(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d38[t]
o.push(new E.dW(s.b,r.d===s.a,new C.er0(r,s),q,A.aH,q))}o.push(new E.fC(K.aqe,"New game",new C.er1(r),A.b4,q))
return E.lB(A.aH,A.f6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.X3.prototype={
S(){return new C.aG8(B.a([],x.t))}}
C.aG8.prototype={
cdw(d){A.d.a8(this.d)
this.w=!0
this.b1F()},
b1F(){this.d.push(A.cN.aw(4))
this.e=0
this.a_V()},
a_V(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eBG(t))
s=x.H
w=3
return B.b(B.bP(A.lH,null,s),$async$a_V)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVt(n)
w=7
return B.b(B.bP(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_V)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eBH(t))
case 1:return B.h(u,v)}})
return B.i($async$a_V,v)},
aVt(d){this.m(new C.eBE(this,d))
E.mr("marimba",D.cae[d]+5,450,0.55)
B.bP(A.GD,new C.eBF(this),x.H)},
cdy(d){var w,v,u=this
if(!u.w||u.r)return
u.aVt(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eBI(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eBJ(u))
B.bP(A.hG,new C.eBK(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aVV,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fBp,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAl[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aAl[v].j(0.8),A.H,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cT(p,p,p,p,A.b1,new B.p(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jm,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBL(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ac,B.x(B.a([o,A.an,n,A.d8,new B.fH(1,B.kU(1,l,2,12,12,p,A.dW,!1),p)],m),A.l,p,A.bb,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lB(A.bi,A.f6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hx,n,q.gcdv(q),A.b4,p)],m),p,p))}}
C.Xn.prototype={
S(){return new C.bmY(new B.au(A.aw,$.aw()))}}
C.bmY.prototype={
axP(d){return B.p5(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.ePx(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d2(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.ePG()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A8.xL),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b4I),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lV,"Bill amount",!0,!0,!1,m,m,m,m,D.fyJ,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e9,m,m,m,1,m,m,!1,"\u2022",m,new C.ePC(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aUT,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.m(20)
r=B.L(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axP(w)),t.$2("Total","$"+n.axP(v)),A4.NI,t.$3$big("Each of "+n.f+" pays","$"+n.axP(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fs,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cOu[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.ePD(n,o),m,A.b4,m))}l=n.f
return E.lB(A.b4,A.f6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aH,""+l,"People",20,1,new C.ePE(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.ePF(n),m,A.aS,m)],q),m,m)],q),A.l,m,A.e,A.Q,0,A.p))}}
C.WT.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bms(w,A.cN,$,A.bE,0,B.a([],x.X),null,null)}}
C.bms.prototype={
Y(){this.a4()
this.me()},
mw(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Xp("snare",0,0.5)}u.m(new C.epz())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mr("bell",24,400,0.5)}u.m(new C.epA())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfj(v,o.r>0,n))}u=B.aA(n,B.at(B.bU(A.fQ,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eps(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.cZ,A.r,6)
s=B.a([new B.ac(0,A.G,A.aS.j(0.4),A.H,30)],x.V)
u=B.aA(n,B.at(B.e6(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fxU,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.ez4,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ept(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fmT,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kh,n,n,n)],x.p),A.l,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epu(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.djB[r]
v.push(new E.dW(q.b,o.d===q.a,new C.epv(o,q),q.c,A.bp,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.bp,""+s,"Dice",4,1,new C.epw(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.bp,""+s,"From",100,1,new C.epx(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.bp,""+p,"To",1000,2,new C.epy(o),p)],m))}return E.lB(A.bp,A.f6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.Q,0,A.p))}}
C.bfj.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cN.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dDx.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.q(p,p,A.f,p,p,O.aew,p,18,p,p,p,p,p,18),p))
return B.eN(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bF,p,p,100),p)}}
C.aN4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzA.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byV()}}
C.aNo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzG.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzf()}}
C.aNR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzP.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzJ()}}
C.aOh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzY.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bA9()}}
var z=a.updateTypes(["P(tY)","~()","P(a5s)","aB<~>()","P(D3)","H(tY,H)","F(F,tY)","P(D_)","P(a_r)","P(acs)","P(a4j)","P(nI)","Xo()","Vw()","a9j()","WZ()","Xd()","X_()","P(mX)","VB()","afX(Z,H)","aeP(Z,H)","~(a8<@,@>)","H(D_,D_)","n(eh)","P(afL)","P(a1H)","P(De)","P(acX)","P(aeS)","P(acG)","H(H,ra)","H(H,D3)","n(ra)","~(ra,ai<n>,H)","ra?(D3)","WT()","v(n,a1u)","P(abl)","~(B9)","Xr()","~(uM,n,o,u,F)","~(n,tY)","Wc()","WD(Z)","Oa(Z)","VW(Z,bw<F>,bw<F>)","Xw()","Wk()","Vx()","Wb()","WU()","X3()","Xn()","P(ra)"])
C.fJU.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fyE.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fGi.prototype={
$1(d){var w
if(!this.a.Mi(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fGj.prototype={
$1(d){return d.x},
$S:z+0}
C.fJR.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fJS.prototype={
$1(d){var w
if(!this.a.Mi(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fJT.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eiH.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eiI.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eiJ.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iu)}},
$S:7}
C.eiU.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eiV.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eiQ.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eiO.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dv(0,0,0,d,0,0),new C.eiP(w,this.b,e)))},
$S:1901}
C.eiP.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eiR.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX0().ala(0,u[1],u[2],u[3])
u[4].bO(0,new C.eiM(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eiN(w.a,v,w.f,w.r))},
$S:0}
C.eiM.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:203}
C.eiN.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eiS.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX0().am0(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eiL(w.a,v,w.e,w.f))},
$S:0}
C.eiL.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eiT.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.eiK(w,this.b))},
$S:0}
C.eiK.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eiY.prototype={
$0(){var w=this.a
return w.m(new C.eiX(w))},
$S:0}
C.eiX.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eiZ.prototype={
$0(){var w=this.a
return w.m(new C.eiW(w))},
$S:0}
C.eiW.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ej_.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PN()},
$S:0}
C.ej0.prototype={
$0(){return this.a.Z4(this.b)},
$S:0}
C.ej1.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PN():w.aYu()},
$S:2}
C.ej2.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PN():w.aYu()},
$S:0}
C.ey_.prototype={
$2(d,e){return d+e},
$S:1902}
C.eyj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eyi(w,d))},
$S:1903}
C.eyi.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eyk.prototype={
$0(){},
$S:0}
C.eyl.prototype={
$0(){},
$S:0}
C.ey1.prototype={
$0(){return this.a.m(new C.ey0(this.b,this.c))},
$S:0}
C.ey0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.exR.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.exS.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.exT.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.exU.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.exV.prototype={
$1(d){return this.a.db===d},
$S:33}
C.exW.prototype={
$1(d){return this.a.db=d},
$S:31}
C.exX.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.exY.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:31}
C.exZ.prototype={
$0(){var w=this.a
return w.m(w.gayq())},
$S:0}
C.exP.prototype={
$1(d){return this.a.$1(!0)},
$S:70}
C.exQ.prototype={
$1(d){return this.a.$1(!1)},
$S:113}
C.exO.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.eyc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bjc(o,p),n)
w=this.b
v=C.bCb("WORLD",w.a,w.c)
u=C.bCb("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.c0:A.b4
t=C.bCb("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Ds[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bCb("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCb("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iS,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bHX(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tb[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oA,"Again",new C.ey7(o),A.c,p),new E.fC(A.ov,"Rebuild",new C.ey8(o),A.aS,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jG,"Next world",new C.ey9(o),A.b4,p))
n.push(C.hyF("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hyF("Crash!",o.at,A.c0,B.a([new E.fC(A.oA,"Try again",new C.eya(o),A.b4,p),new E.fC(A.ov,"Rebuild",new C.eyb(o),A.aS,p)],q)))
return new B.an(A.a0,p,A.b3,A.t,n,p)},
$S:67}
C.ey7.prototype={
$0(){var w=this.a
return w.m(w.gayq())},
$S:0}
C.ey8.prototype={
$0(){var w=this.a
return w.m(new C.ey4(w))},
$S:0}
C.ey4.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ey9.prototype={
$0(){var w=this.a
return w.m(new C.ey3(w))},
$S:0}
C.ey3.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eya.prototype={
$0(){var w=this.a
return w.m(w.gayq())},
$S:0}
C.eyb.prototype={
$0(){var w=this.a
return w.m(new C.ey2(w))},
$S:0}
C.ey2.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyd.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ey6(v,w))},
$S:0}
C.ey6.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eye.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eyf.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eyg.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eyh.prototype={
$0(){var w=this.a
return w.m(new C.ey5(w))},
$S:0}
C.ey5.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dOT.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.htQ(),C.htR()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cO(J.t(r,1)))
q.m(new C.dOS(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dOS.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOt.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOu.prototype={
$0(){return this.a.bZQ(B.aT(J.t(this.b,"group")))},
$S:0}
C.dOv.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOw.prototype={
$1(d){return A.a.b0(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:307}
C.dOU.prototype={
$0(){return E.Xp("kick",0,0.25)},
$S:0}
C.dOx.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dOy.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOz.prototype={
$0(){return E.Xp("kick",0,0.5)},
$S:0}
C.dOA.prototype={
$0(){return G.dE(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dOC.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dOB(u)))u.cy=null
u.id=0},
$S:0}
C.dOB.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAg(d)},
$S:z+10}
C.dOq.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dOr.prototype={
$0(){var w=this.a
return w.m(w.gc9t())},
$S:0}
C.dOs.prototype={
$0(){return this.a.aeD(null)},
$S:0}
C.dOJ.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dOK.prototype={
$0(){return this.a.cFV(this.b.a)},
$S:0}
C.dOL.prototype={
$0(){return this.a.aeD(this.b)},
$S:0}
C.dOM.prototype={
$1(d){var w=this.a
return w.m(new C.dOI(w,d))},
$S:6}
C.dOI.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dON.prototype={
$0(){var w=this.a
return w.m(new C.dOH(w,this.b))},
$S:0}
C.dOH.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dOO.prototype={
$0(){var w=this.a
return w.m(new C.dOG(w))},
$S:0}
C.dOG.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dOP.prototype={
$0(){var w=this.a
return w.m(new C.dOF(w))},
$S:0}
C.dOF.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LN},
$S:0}
C.dOQ.prototype={
$0(){var w=this.a
return w.m(new C.dOE(w))},
$S:0}
C.dOE.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0f()
else w.p3=null},
$S:0}
C.dOR.prototype={
$0(){var w=this.a
return w.m(new C.dOD(w))},
$S:0}
C.dOD.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6j.prototype={
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
$S:301}
C.c6k.prototype={
$1(d){var w=new B.r7([],[]).oL(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:409}
C.frW.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:229}
C.frX.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:229}
C.frY.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:229}
C.fs4.prototype={
$1(d){return!J.t(d,0)},
$S:229}
C.fs5.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:229}
C.fs6.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:229}
C.dQy.prototype={
$1(d){return this.a.av4(0)},
$S:7}
C.dQc.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.igQ(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dQf.prototype={
$1(d){return""+d},
$S:78}
C.dQz.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQa.prototype={
$1(d){return this.a.av4(this.b)},
$S:7}
C.dQb.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayV(0)
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
p=a1.ayU(0,a0,a1.mf(0.82,0.25),0)
o=a1.ayU(0,a0,a1.mf(0.82,0.65),0)
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
C.dQg.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayV(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D_(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mM(0,w.e,o.mf(0.86,0.5))},
$S:0}
C.dQ5.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQ6.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQ7.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQ8.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQ9.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adX(this.c)
if(v.ax)C.JJ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQh.prototype={
$0(){},
$S:0}
C.dQi.prototype={
$0(){return A.d.cD(this.a.e,this.b)},
$S:0}
C.dQj.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQe.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dQd(v))
w.cy=null},
$S:0}
C.dQd.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQ4.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mM(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQs.prototype={
$0(){var w=this.a
return w.m(new C.dQr(w))},
$S:0}
C.dQr.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQt.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.jl(B.b4(w,w,w,new C.bdc(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQm(v),w,w,w,new C.dQn(v),new C.dQo(v),new C.dQp(v),w,w,w,w,w,w,w,w,w,w,new C.dQq(v),w,w,w,!1,A.a4)},
$S:37}
C.dQq.prototype={
$1(d){return this.a.cbe(d.b)},
$S:68}
C.dQo.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cke(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azM(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:48}
C.dQp.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQn.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2l(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dQk(w))
u=t.as
u.toString
v.push(new C.nI(u,w.a,w.b))
B.jW()}}t.z=t.as=null},
$S:38}
C.dQk.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQm.prototype={
$1(d){return this.a.axI(d.b)},
$S:310}
C.dQu.prototype={
$0(){return this.a.bDL(this.b.a)},
$S:0}
C.dQv.prototype={
$0(){return this.a.av4(this.b.a)},
$S:0}
C.dQw.prototype={
$0(){var w=this.a
return w.m(new C.dQl(w))},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.ayV(0)
w.ay=null},
$S:0}
C.dQx.prototype={
$0(){return this.a.cBy(this.b)},
$S:0}
C.cVy.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:268}
C.dWI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWH.prototype={
$0(){return this.a.d=null},
$S:0}
C.dWK.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4e()},
$S:128}
C.dWJ.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.fsm.prototype={
$0(){return K.aL1},
$S:z+40}
C.fsn.prototype={
$0(){return D.dP6},
$S:z+43}
C.fso.prototype={
$0(){return D.dLZ},
$S:z+13}
C.fsp.prototype={
$0(){return D.efq},
$S:z+14}
C.fsq.prototype={
$0(){return D.dYj},
$S:z+15}
C.fsr.prototype={
$0(){return K.aKT},
$S:z+16}
C.fss.prototype={
$0(){return D.edc},
$S:z+17}
C.fst.prototype={
$0(){return K.aL0},
$S:z+12}
C.fsu.prototype={
$0(){return D.dOe},
$S:z+19}
C.f7M.prototype={
$2(d,e){return new C.afX($.bGE()[e],new C.f7L(e,this.a),null)},
$S:z+20}
C.f7L.prototype={
$0(){var w=this.a,v=I.aIz.h(0,$.bGE()[w].a)
$.atp=v==null?"music":v
B.a6(this.b,!1).cd(B.ec(new C.f7J(w),!1,null,x.H))},
$S:0}
C.f7J.prototype={
$1(d){return $.bGE()[this.a].e.$0()},
$S:39}
C.f7N.prototype={
$2(d,e){return new C.aeP(D.aAY[e],new C.f7K(this.a,e),null)},
$S:z+21}
C.f7K.prototype={
$0(){return this.a.d.$1(D.aAY[this.b])},
$S:0}
C.f7s.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f7r.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f7q.prototype={
$1(d){var w=this
return new B.dY(new C.f7p(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f7p.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aH(a3,a0,a1).w
a1=B.aH(a3,a0,a1).w
w=x.p
v=B.a([D.fIU,A.ax,D.fPK,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fyc,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EL,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jv,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EL,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jv,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dyK[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aT,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fB,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f7n(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.an,new B.c6(A.aL,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.U,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bI(A.AT,a0,new C.f7o(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bn(!0,new B.cQ(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A1.yL,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:100}
C.f7n.prototype={
$0(){var w=this
return w.a.$1(new C.f7m(w.b,w.c,w.d))},
$S:0}
C.f7m.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f7o.prototype={
$0(){var w=this,v=w.a
v.m(new C.f7l(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f7l.prototype={
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
C.f7A.prototype={
$0(){var w=this.a
return w.m(new C.f7z(w))},
$S:0}
C.f7z.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f7B.prototype={
$0(){return E.uD(this.b,this.a.f,"scene")},
$S:0}
C.f7C.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gan(u),0.4)
u.toString
w=this.a.ga_t().x
w===$&&B.c()
return B.c2(v,new B.p(v,v,v,v,v,new B.bY(D.b2c,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bj)},
$S:308}
C.f7D.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.ev(A.A,B.c8(new B.h6(B.a([u.guG(),u.ga_t()],x.dS)),new C.f7y(u,this.b,v),w),A.f,A.e2),w,w,w)},
$S:230}
C.f7y.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guG().x
r===$&&B.c()
w=r<0.9?1:1-C.btv(r,0.9,0.98)
v=s.ga_t().x
v===$&&B.c()
u=A.dC.aA(0,v)
switch(s.gayW().a){case 0:s=s.bCW(t.b,r,u,t.c)
break
case 1:s=s.bTT(t.b,r,u,t.c)
break
case 2:s=s.cGp(t.b,r,u,t.c)
break
case 3:s=s.bFS(t.b,r,u,t.c)
break
case 4:s=s.bJd(t.b,r,u,t.c)
break
case 5:s=s.cbf(t.b,r,u,t.c)
break
default:s=null}return B.d6(s,w)},
$S:180}
C.f7E.prototype={
$2(d,e){var w=B.ab8(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gan(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gan(v),0.4)
v.toString
v=w.cPn(u,A.bA,v,3.5)
u=this.a
w=u.guG().x
w===$&&B.c()
return B.YP(B.kV(null,null,null,1,0,new C.f7x(u),A.j.D(w,0,1)),v)},
$S:1905}
C.f7x.prototype={
$1(d){var w=this.a
w.guG().sp(0,d)
if(w.as)w.m(new C.f7t(w))},
$S:6}
C.f7t.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f7F.prototype={
$0(){var w=this.a
w.guG().sp(0,0)
w.af2()},
$S:0}
C.f7G.prototype={
$1(d){var w=this.a
w.m(new C.f7w(w,d))
if(w.as)w.af2()},
$S:6}
C.f7w.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f7H.prototype={
$0(){var w=this.a
w.m(new C.f7v(w,this.b))
w.guG().sp(0,0)
if(w.as)w.af2()},
$S:0}
C.f7v.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f7I.prototype={
$0(){var w=this.a
return w.m(new C.f7u(w,this.b))},
$S:0}
C.f7u.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f7j.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1906}
C.f7k.prototype={
$1(d){return d.b},
$S:1907}
C.dqH.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dqI.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dqE.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dqF.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqG.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqJ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqK.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqM.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dqN.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dqO.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dqP.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dqQ.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dqR.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.exk.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ex9.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.exb.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.exc.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.exf.prototype={
$1(d){var w=D.n7.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.exg.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.exh(d),p.k("Y<1>")),new C.exi(r),p.k("cM<1,ra?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.exh.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exi.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.exd.prototype={
$1(d){return D.n7.h(0,d.b).c===D.xF},
$S:z+54}
C.exe.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exK.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vI(0,u)
w.a7o(A.o.aq(v,1000))},
$S:7}
C.exj.prototype={
$0(){},
$S:0}
C.ex5.prototype={
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
C.exm.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.U,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n7.h(0,v).b,D.n7.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h0m,w,B.d(D.n7.h(0,v).a,w,w,w,w,w,w,A.h_,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.arK,w,w,w,w,new C.exl(d),!1,w,w,w,w,w,w,w,D.fSD,w,w,w)],x.p),A.l,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.exl.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exo.prototype={
$1(d){var w,v,u,t=null,s=B.aH(d,t,x.l).w,r=B.a([D.ers],x.p)
for(w=0;w<6;++w){v=D.aBm[w]
u=B.d(v.a,t,t,t,t,t,t,A.h_,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c2p,t,t,t,t,new C.exn(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lV,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bHe,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.exn.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ex8.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.ex6(d),w,w),B.bN(!1,A.EQ,w,w,!0,w,w,w,new C.ex7(d),w,w)],x.p),w,w,I.m7,D.fPX,w,w,w,w,D.fSX,w)},
$S:18}
C.ex6.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ex7.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exI.prototype={
$0(){var w=this.a
return w.m(new C.exH(w))},
$S:0}
C.exH.prototype={
$0(){return this.a.r=!1},
$S:0}
C.exJ.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.exy(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bcX:t
v=B.a([B.b4(u,t,t,new C.bja(w,v,new C.exz(r),new C.exA(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.dw(!0,B.c8(w,new C.exB(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKT())
return B.aA(A.c5,B.jl(new B.an(A.a0,t,A.b3,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.exC(r),t,r.gclx(),t,new C.exD(r),new C.exE(r),new C.exF(r),t,t,t,t,t,t,t,t,t,t,new C.exG(r),t,t,t,!1,A.a4)},
$S:37}
C.exy.prototype={
$0(){return this.a.ad_(this.b)},
$S:0}
C.exG.prototype={
$1(d){return this.a.cE6(d.b)},
$S:68}
C.exE.prototype={
$1(d){return this.a.cly(d.b)},
$S:48}
C.exF.prototype={
$1(d){return this.a.clz(d.b)},
$S:19}
C.exD.prototype={
$1(d){return this.a.b3M()},
$S:38}
C.exC.prototype={
$1(d){return this.a.adH(d.b)},
$S:310}
C.exz.prototype={
$0(){return this.a.z},
$S:586}
C.exA.prototype={
$0(){return this.a.Q},
$S:671}
C.exB.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPa()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fNj,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aVR,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.he,q,q,q)},
$S:69}
C.exa.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ad.Vy,w,w,w),A.bH,B.d(g,w,w,w,w,w,w,F.ab9,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1909}
C.exu.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.exv.prototype={
$0(){var w=this.a
return w.m(new C.ext(w))},
$S:0}
C.ext.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exw.prototype={
$0(){var w=this.a
return w.m(new C.exs(w))},
$S:0}
C.exs.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.exx.prototype={
$0(){var w=this.a
return w.m(new C.exr(w))},
$S:0}
C.exr.prototype={
$0(){return this.a.r=!0},
$S:0}
C.exq.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n7.gdO(D.n7),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyR(p[r]))
return new B.D(R.al5,B.x(B.a([new B.D(Ai.amJ,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.exp.prototype={
$0(){return this.a.cbl(this.b)},
$S:0}
C.dqD.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:268}
C.bPD.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPO.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPJ.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPP.prototype={
$1(d){return this.a.Mi(d)&&!d.x},
$S:z+0}
C.bPQ.prototype={
$2(d,e){return Math.max(d,this.a.aCD(e))},
$S:z+6}
C.bPS.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPT(w))},
$S:z+5}
C.bPT.prototype={
$0(){return this.a.a},
$S:88}
C.bPR.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bPU.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPV(w))},
$S:z+5}
C.bPV.prototype={
$0(){return this.a.a},
$S:88}
C.bPF.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPG(w))},
$S:z+5}
C.bPG.prototype={
$0(){return this.a.a},
$S:88}
C.bPE.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bPH.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPI(w))},
$S:z+5}
C.bPI.prototype={
$0(){return this.a.a},
$S:88}
C.bPC.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPW.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPK.prototype={
$1(d){return d!==this.b&&this.a.aIY(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPN.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPM.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPL.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bK_.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bK0.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctn.prototype={
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
$S:203}
C.fVK.prototype={
$1(d){var w
$.Q()
w=B.K()
w.r=d.gp(0)
return w},
$S:1910}
C.fVM.prototype={
$2(d,e){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1911}
C.fVN.prototype={
$5(d,e,f,g,h){return B.bm(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1912}
C.fVL.prototype={
$3(d,e,f){var w
$.Q()
w=B.K()
w.sav(new B.a9(A.b7,A.b8,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1913}
C.bJE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJD(w))},
$S:0}
C.bJD.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJG.prototype={
$0(){return B.a([],x.C)},
$S:1914}
C.bJH.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:399}
C.bJI.prototype={
$0(){var w,v,u
J.bGN(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tO(v))if(C.heV(v.b))w.b3f(v)
else w.a0x(v)
else{u=w.a.c.bg7(v)
w.afe(u==null?"The "+$.qC().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJC.prototype={
$1(d){return new B.dY(new C.bJz(this.a,this.b),null)},
$S:20}
C.bJz.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJA(this.a,o,a3),m=$.qC(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bJB(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.H,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aU,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.at(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pV,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a7),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jP,p,p,p),D.fN7],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.mc,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dl,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.H,14)],f)
v=B.q(p,B.at(B.cT(p,B.at(B.ev(A.A,new B.D(A.hI,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mB,p,p,p),p),A.f,A.dB),p,p,p),p,p,A.b1,new B.p(p,p,q,s,f,new B.a9(A.aA,A.aE,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aG(p,p,p,p,B.X(A.aq6,k,p,p,p,30),p,p,p,new C.bJv(n,o),p,p,p,p,p,p)
t=B.ab8(a2).bfB(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.YP(B.kV(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aG(p,p,p,p,B.X(A.a2l,k,p,p,p,30),p,p,p,new C.bJw(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hk,p,p,p),1),B.bN(!1,A5.aWT,p,p,!0,p,p,p,new C.bJx(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.rX,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.Q,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.c9E,A.n),p,p,p,A.yC,D.bDK,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bJA.prototype={
$1(d){var w=this.a
w.m(new C.bJt(this.b,d))
this.c.$1(new C.bJu())
w.a.toString},
$S:6}
C.bJt.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bJu.prototype={
$0(){},
$S:0}
C.bJB.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.aA(v,B.cT(v,B.at(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e2),v,v,v),v,v,A.b1,new B.p(t,v,r,s,v,v,A.n),A.h2,v,v,v,A.jo,A.qA,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJy(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:568}
C.bJy.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJv.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJw.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJx.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bJX.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.afe("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afe("\u26a0 Overloaded! The "+$.qC().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Af(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afe("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJY.prototype={
$0(){},
$S:0}
C.bJ6.prototype={
$0(){},
$S:0}
C.bJZ.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.ajT(w,v,u,t,s,r==null?A.jr:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJQ(o),new C.bJR(o),new C.bJS(o),p,p,p,p,p,p,p,p,p,p,new C.bJT(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bcd)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cF,A.r,1)
n.push(B.ap(p,B.aA(p,B.q(p,B.A(B.a([D.fDi,B.E(B.d(w,p,p,p,p,p,p,D.fv3,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.big,p,u,v,p,p,A.n),p,p,p,p,A.nE,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJU(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b17(B.A(B.a([D.bJs,new E.fC(A.CI,"Cut wire",new C.bJV(o),A.c0,p)],q),A.l,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cm6(w),p,p,10,10,p,p))}return B.jl(new B.an(A.a0,p,A.b3,A.t,n,p),A.t,p)},
$S:345}
C.bJR.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.baj(s)
if(r!=null){t.m(new C.bJO(t,r,d))
return}w=t.b3W(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bJP(t,w))}},
$S:48}
C.bJO.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJS.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJM(w,d))
else if(w.w!=null)w.m(new C.bJN(w,d.b.a2(0,w.x)))},
$S:19}
C.bJM.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJN.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJQ.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.baj(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am0(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.afc()},
$S:38}
C.bJT.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3W(v)
if(u!=null){w.m(new C.bJK(w,u))
if(D.mt.al(0,u.b))w.cwK(u)
w.a.toString
return}w.m(new C.bJL(w,w.cJA(v)))},
$S:68}
C.bJK.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJL.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJU.prototype={
$0(){var w=this.a
return w.m(new C.bJJ(w))},
$S:0}
C.bJJ.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJV.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.afc()},
$S:0}
C.bJ7.prototype={
$0(){return this.a.bsz(this.b)},
$S:0}
C.bJq.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fpb,w,w,w),B.E(B.kV(this.b.d,w,w,g,h,new C.bJs(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1915}
C.bJs.prototype={
$1(d){var w=this.a
w.m(new C.bJr(this.b,d))
w.a.toString},
$S:6}
C.bJr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJd.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.afc()},
$S:0}
C.bJe.prototype={
$0(){var w=this.a
return w.m(new C.bJc(w))},
$S:0}
C.bJc.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJf.prototype={
$0(){this.a.m(new C.bJb(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJi.prototype={
$0(){return this.a.b3f(this.b)},
$S:0}
C.bJj.prototype={
$0(){return this.a.a0x(this.b)},
$S:0}
C.bJk.prototype={
$0(){return this.a.a2a(this.b)},
$S:0}
C.bJl.prototype={
$0(){var w=this.a
w.m(new C.bJa(this.b,this.c))
w.a.toString},
$S:0}
C.bJa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJm.prototype={
$0(){var w=this.a
w.m(new C.bJ9(this.b,this.c))
w.a.toString},
$S:0}
C.bJ9.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJn.prototype={
$0(){var w=this.a
w.m(new C.bJ8(this.b,this.c))
w.a.toString},
$S:0}
C.bJ8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJo.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJp.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJg.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJh.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fs7.prototype={
$1(d){return d.aIz("bulb")},
$S:z+2}
C.fs8.prototype={
$1(d){return d.qc(0,"switch")&&d.aIz("bulb")},
$S:z+2}
C.fs9.prototype={
$1(d){return A.d.aV(d.a,new C.frV())},
$S:z+2}
C.frV.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fsa.prototype={
$1(d){return d.qc(0,"resistor")&&A.d.aV(d.a,new C.frU())},
$S:z+2}
C.frU.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fsb.prototype={
$1(d){return!d.qc(0,"battery")&&d.aIz("bulb")},
$S:z+2}
C.frZ.prototype={
$1(d){return A.d.aV(d.a,new C.frT())},
$S:z+2}
C.frT.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fs_.prototype={
$1(d){return A.d.aV(d.a,new C.frS())},
$S:z+2}
C.frS.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fs0.prototype={
$1(d){return A.d.aV(d.a,new C.frR())},
$S:z+2}
C.frR.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fs1.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.frP())&&A.d.aV(w,new C.frQ())&&d.qc(0,"buck")},
$S:z+2}
C.frP.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.frQ.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fs2.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.frN())&&A.d.aV(w,new C.frO())},
$S:z+2}
C.frN.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.frO.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fs3.prototype={
$1(d){return A.d.aV(d.a,new C.frM())},
$S:z+2}
C.frM.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e0v.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e0E.prototype={
$1(d){var w=this.a.d
return w.aIY(d)&&w.tO(d)},
$S:z+0}
C.e0F.prototype={
$1(d){return d.x},
$S:z+0}
C.e0G.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e0H.prototype={
$0(){},
$S:0}
C.e0u.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fUX,A.ax,D.fF7,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RZ[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iA,q,q,q),A.bH,B.d(u.b,q,3,A.a2,q,q,q,D.fvO,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e0t(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eP(q,F.mR,new B.D(A.bQ,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d7,q,new B.b9(p,A.a1),q)},
$S:47}
C.e0t.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e0s(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e0s.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blf()},
$S:0}
C.e0q.prototype={
$1(d){return new C.WD(this.a.d,null)},
$S:z+44}
C.e0r.prototype={
$0(){},
$S:0}
C.e0D.prototype={
$1(d){return new B.dY(new C.e0C(this.a),null)},
$S:20}
C.e0C.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiZ(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aH
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fS4,A.b5,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.U,B.by(B.m(4),B.ko(A.bA,m,m,5,m,w.a/11,new B.lN(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fIh)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.KF,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EM,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.ax,q,new B.bM(A.aa,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e0A(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dl,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.ab7,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.aA(m,B.q(m,new B.c6(A.aL,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bc,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eM,A.nE,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e0B(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A1.yL,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e0A.prototype={
$0(){var w=this.a
w.m(new C.e0y(w))
this.b.$1(new C.e0z())
w.Fv()},
$S:0}
C.e0y.prototype={
$0(){var w=this.a
$.aiZ()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e0z.prototype={
$0(){},
$S:0}
C.e0B.prototype={
$0(){var w=this.a
w.m(new C.e0w(w,this.b))
this.c.$1(new C.e0x())
w.Fv()},
$S:0}
C.e0w.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e0x.prototype={
$0(){},
$S:0}
C.e0J.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e0K.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mc("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).cd(B.ec(new C.e0I(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e0I.prototype={
$1(d){B.lm("construction")
return Ak.hTP()},
$S:z+45}
C.e0L.prototype={
$0(){return E.hFg(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e0M.prototype={
$0(){var w=this.a
return w.m(w.d.gd0q())},
$S:0}
C.e0N.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gte(v))
w.Fv()},
$S:0}
C.cKX.prototype={
$2(d,e){var w=null,v=this.a.gaz3().x
v===$&&B.c()
return B.b4(w,w,w,new C.bb1(v,w),A.az)},
$S:56}
C.cKW.prototype={
$3(d,e,f){var w=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c5(v,u,v+e,u))
w.E(new B.c5(v,u,v,u+e))
w.E(new B.c5(v,u,v-e,u))
w.E(new B.c5(v,u,v,t))
w.E(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:461}
C.h_I.prototype={
$3(d,e,f){return new C.VW(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h_J.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dXF.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dXE.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1M(o):q.bEV(o,p),m=x.p
p=B.a([B.ow(new B.mM(n,new B.bJ(p,x.bz)),A.pk,B.pR(),A.b1,A.b1,new C.dXC())],m)
n=t.d
if(n){w=A.j.F(q.gSC(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bJe)
else m.push(A.b5)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.b4:A.as,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.at(B.cT(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.e3,new B.p(A.w,s,s,u,s,s,A.n),A.mV,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Ax)p.push(B.ap(s,B.at(B.q(s,s,A.f,s,s,A.LS,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Et)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LS,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXD(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b3,A.t,p,s),A.aq)},
$S:302}
C.dXC.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:405}
C.dXD.prototype={
$0(){var w=this.a
return w.m(new C.dXB(w))},
$S:0}
C.dXB.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXA.prototype={
$0(){var w=this.a
return w.m(new C.dXz(w,this.b))},
$S:0}
C.dXz.prototype={
$0(){return this.a.e=A.d.co(F.kx,this.b)},
$S:0}
C.dXy.prototype={
$0(){var w=this.a
return w.m(new C.dXx(w))},
$S:0}
C.dXx.prototype={
$0(){return this.a.e=0},
$S:0}
C.dXt.prototype={
$0(){var w=this.a
return w.m(new C.dXs(w))},
$S:0}
C.dXs.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.h_L,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eP,p,p,p,A.abs,p,p,p),1),B.d(A.a.b0(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.ra,p,p,p)],l),A.l,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kt,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxG(w.gSC(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aU,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.aA(p,B.q(p,p,A.f,p,p,A.aeq,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dXv(w),p,p,p,p,p,p,!1,A.a4),A.e4,B.q(p,p,A.f,p,p,A.XB,p,12,p,p,p,p,p,12),A.e4,B.q(p,p,A.f,p,p,D.b7v,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kx[o].a,p,1,A.a2,p,p,p,A.ab1,p,p,p),1)],l),A.l,p,A.e,A.i,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fI,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bFJ,B.q(p,B.by(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afE(r,w.gSC(),p),A.fN),1)],l),A.l,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.dv_,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aU,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jo,w.awW(F.kx[q],34,!1),p))
v.push(B.ap(8,B.at(B.q(p,B.A(s,A.l,p,A.e,A.Q,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lL,p,p,p),p,p,p),p,p,0,0,p,p))
return B.by(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b3,A.t,v,p),1)],l),A.l,p,A.e,A.i,0,A.p),A.f,X.ZC,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:302}
C.dXv.prototype={
$0(){var w=this.a
return w.m(new C.dXu(w))},
$S:0}
C.dXu.prototype={
$0(){return this.a.e=null},
$S:0}
C.fsC.prototype={
$0(){return D.eht},
$S:z+47}
C.fsD.prototype={
$0(){return D.dPF},
$S:z+48}
C.fsE.prototype={
$0(){return D.dMb},
$S:z+49}
C.fsF.prototype={
$0(){return D.dP2},
$S:z+50}
C.fsG.prototype={
$0(){return D.dU6},
$S:z+51}
C.fsH.prototype={
$0(){return D.edf},
$S:z+52}
C.fsI.prototype={
$0(){return D.efp},
$S:z+53}
C.fsJ.prototype={
$0(){return D.dTq},
$S:z+36}
C.cmf.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hJ5(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.KD,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fAJ,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cL(k,-6,-6,k,k,k,n,k),new B.bM(A.lz,k,k,B.x(B.a([m,A.cU,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.Q,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.be(q,q,q,q),p,new B.a9(A.aA,A.aE,A.x,o,k,k),A.n),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cme(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bU(A.bG,h,A.bs,k,14,14)},
$S:161}
C.cme.prototype={
$0(){return B.a6(this.a,!1).cd(B.ec(new C.cmd(this.b),!1,null,x.H))},
$S:0}
C.cmd.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eU3.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7k(w.f)]},
$S:0}
C.eU_.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cN.ai()*7},
$S:0}
C.eTZ.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.ce)
w.w=""},
$S:0}
C.eU1.prototype={
$0(){var w=this.a
return w.m(new C.eU0(w,this.b))},
$S:0}
C.eU0.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cD(w,this.b)},
$S:0}
C.eU2.prototype={
$1(d){return this.a.b1E(0)},
$S:2}
C.e3u.prototype={
$0(){return C.JJ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e3v.prototype={
$0(){},
$S:0}
C.e3p.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e3r.prototype={
$0(){return this.a.b1G(this.b)},
$S:0}
C.e3s.prototype={
$0(){var w=this.a
return w.m(new C.e3q(w))},
$S:0}
C.e3q.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e3t.prototype={
$0(){var w=this.a
return w.b1G(w.d)},
$S:0}
C.dP_.prototype={
$2(d,e){return d+e},
$S:79}
C.dP0.prototype={
$0(){},
$S:0}
C.dOV.prototype={
$2(d,e){return d+e},
$S:79}
C.dOY.prototype={
$0(){var w=this.a
return w.m(new C.dOX(w,this.b))},
$S:0}
C.dOX.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dOZ.prototype={
$0(){var w=this.a
return w.m(new C.dOW(w))},
$S:0}
C.dOW.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0_.prototype={
$0(){return E.uD(this.b,this.a.d,"drawing")},
$S:0}
C.e00.prototype={
$1(d){var w=this.a
return w.m(new C.e_Z(w,d))},
$S:48}
C.e_Z.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJU(u,v,t))},
$S:0}
C.e01.prototype={
$1(d){var w=this.a
return w.m(new C.e_Y(w,d))},
$S:19}
C.e_Y.prototype={
$0(){return A.d.gan(this.a.e).c.push(this.b.b)},
$S:0}
C.e02.prototype={
$1(d){var w=this.a
return w.m(new C.e_X(w,d))},
$S:22}
C.e_X.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJU(u,v,t))},
$S:0}
C.e03.prototype={
$0(){var w=this.a
return w.m(new C.e_W(w,this.b))},
$S:0}
C.e_W.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e04.prototype={
$1(d){var w=this.a
return w.m(new C.e_V(w,d))},
$S:6}
C.e_V.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e05.prototype={
$0(){var w=this.a
return w.m(new C.e_U(w))},
$S:0}
C.e_U.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e06.prototype={
$0(){var w=this.a
return w.m(new C.e_T(w))},
$S:0}
C.e_T.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e07.prototype={
$0(){var w=this.a
return w.m(A.d.gte(w.e))},
$S:0}
C.e08.prototype={
$0(){var w=this.a
return w.m(new C.e_S(w))},
$S:0}
C.e_S.prototype={
$0(){var w=this.a
w.x=D.aAd[A.o.F(A.d.co(D.aAd,w.x)+1,4)]},
$S:0}
C.eqU.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.eqV.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JJ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eqT(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JJ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eqT.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eqW.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eqS(w))},
$S:12}
C.eqS.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.er_.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lC(new C.eqY(v,e),w,A.b1,A.pk,w,w,new B.br(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqZ(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.eqZ.prototype={
$0(){return this.a.cds(this.b)},
$S:0}
C.eqY.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c8P
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b4:A.aU,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abc,p,p,p),p,r,!0)
u=r}else u=D.fTE
return B.fz(A.A,B.q(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.er0.prototype={
$0(){var w=this.a
return w.m(new C.eqX(w,this.b))},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aug()},
$S:0}
C.er1.prototype={
$0(){var w=this.a
return w.m(w.gbNE())},
$S:0}
C.eBG.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eBH.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eBE.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBD(w))},
$S:12}
C.eBD.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eBI.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eBJ.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eBK.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1F()},
$S:12}
C.eBL.prototype={
$0(){return this.a.cdy(this.b)},
$S:0}
C.ePx.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:59}
C.ePG.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aT,w,w,w,w,w,w,w,w,f?16:14,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kT,B.A(B.a([v,A.ae,new B.dl(1,A.cm,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e2),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1916}
C.ePC.prototype={
$1(d){return this.a.m(new C.ePB())},
$S:2}
C.ePB.prototype={
$0(){},
$S:0}
C.ePD.prototype={
$0(){var w=this.a
return w.m(new C.ePA(w,this.b))},
$S:0}
C.ePA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ePE.prototype={
$1(d){var w=this.a
return w.m(new C.ePz(w,d))},
$S:6}
C.ePz.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.ePF.prototype={
$0(){var w=this.a
return w.m(new C.ePy(w))},
$S:0}
C.ePy.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.epz.prototype={
$0(){},
$S:0}
C.epA.prototype={
$0(){},
$S:0}
C.eps.prototype={
$0(){var w=this.a
return w.m(new C.epr(w))},
$S:0}
C.epr.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c_(u,1,!1,x.S)
w.r=0.9
E.Xp("hat",0,0.6)},
$S:0}
C.ept.prototype={
$0(){var w=this.a
return w.m(new C.epq(w))},
$S:0}
C.epq.prototype={
$0(){this.a.y=1.1
E.mr("bell",36,200,0.4)},
$S:0}
C.epu.prototype={
$0(){var w=this.a
return w.m(new C.epp(w))},
$S:0}
C.epp.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mr("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.epv.prototype={
$0(){var w=this.a
return w.m(new C.epo(w,this.b))},
$S:0}
C.epo.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.epw.prototype={
$1(d){var w=this.a
return w.m(new C.epn(w,d))},
$S:6}
C.epn.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.epx.prototype={
$1(d){var w=this.a
return w.m(new C.epm(w,d))},
$S:6}
C.epm.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.epy.prototype={
$1(d){var w=this.a
return w.m(new C.epl(w,d))},
$S:6}
C.epl.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cmb.prototype={
$0(){var w=this
return E.mr(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNZ.prototype
w.bzR=w.t
w=C.aN2.prototype
w.byT=w.t
w=C.aN3.prototype
w.byU=w.t
w=C.aN7.prototype
w.byY=w.t
w=C.aOO.prototype
w.bAN=w.t
w=C.aNX.prototype
w.bzP=w.t
w=C.azn.prototype
w.bvU=w.t
w=C.azo.prototype
w.bvV=w.t
w=C.aLu.prototype
w.bxg=w.t
w=C.aNh.prototype
w.bz7=w.t
w=C.aN4.prototype
w.byV=w.t
w=C.aNo.prototype
w.bzf=w.t
w=C.aNR.prototype
w.bzJ=w.t
w=C.aOh.prototype
w.bA9=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aG2.prototype,"gayq","c8U",1)
v(C,"ipC","c6h",3)
var q
u(q=C.aEw.prototype,"gchN","chO",22)
w(q,"gc9t","b0f",1)
w(C.aEy.prototype,"gcbb","cbc",1)
t(C.aEP.prototype,"gcbi","cbj",39)
w(q=C.aJ2.prototype,"gcBh","cBi",1)
w(q,"gcbk","af2",1)
w(q,"gcmg","cmh",1)
w(q,"gcbh","af1",3)
w(q=C.aG1.prototype,"gbKM","aao",3)
w(q,"gclx","b3M",1)
w(q,"gcpk","ahD",3)
s(q,"gcbm","af3",3)
s(q=C.a5s.prototype,"gte","a8",1)
u(q,"gcZ4","aoM",0)
u(q,"gcVs","Mi",0)
w(q,"gd0q","blf",1)
r(C.ajT.prototype,"gcbJ",0,5,null,["$5"],["qS"],41,0,0)
w(q=C.aF0.prototype,"gcbK","cbL",1)
w(q,"gcs9","ahZ",3)
w(q,"gci3","agj",3)
w(q,"gczi","aj8",3)
w(q=C.aGu.prototype,"gcdt","cdu",1)
s(q,"gcdr","b1E",1)
w(C.aFO.prototype,"gbNE","aug",1)
s(C.aG8.prototype,"gcdv","cdw",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.al4,C.GT,C.vn,C.aU0,C.a4j,C.bc8,C.c6i,C.yI,C.D_,C.nI,C.bcU,C.B9,C.bv8,C.qs,C.ra,C.D3,C.a_r,C.afL,C.a1H,C.De,C.acG,C.acX,C.aeS,C.GE,C.eh,C.tY,C.abl,C.acs,C.a5s,C.mX,C.bcV,C.fQ,C.mt,C.bws,C.aJU])
u(B.ht,[C.fJU,C.fyE,C.fGi,C.fGj,C.fJR,C.fJS,C.eiJ,C.ej1,C.eyj,C.exR,C.exS,C.exT,C.exU,C.exV,C.exW,C.exX,C.exY,C.exP,C.exQ,C.exO,C.eye,C.eyf,C.eyg,C.dOw,C.dOy,C.dOB,C.dOM,C.c6j,C.c6k,C.frW,C.frX,C.frY,C.fs4,C.fs5,C.fs6,C.dQy,C.dQf,C.dQz,C.dQa,C.dQ5,C.dQ7,C.dQd,C.dQq,C.dQo,C.dQp,C.dQn,C.dQk,C.dQm,C.f7J,C.f7q,C.f7x,C.f7G,C.f7k,C.dqH,C.dqI,C.dqE,C.dqF,C.dqG,C.dqJ,C.dqK,C.dqL,C.dqM,C.dqN,C.dqO,C.dqP,C.dqQ,C.dqR,C.exf,C.exg,C.exh,C.exi,C.exd,C.exe,C.exK,C.exm,C.exo,C.ex8,C.exG,C.exE,C.exF,C.exD,C.exC,C.exa,C.bPD,C.bPO,C.bPJ,C.bPP,C.bPR,C.bPE,C.bPC,C.bPW,C.bPK,C.bPN,C.bPM,C.bPL,C.bK_,C.fVK,C.fVN,C.fVL,C.bJH,C.bJC,C.bJA,C.bJZ,C.bJR,C.bJS,C.bJQ,C.bJT,C.bJq,C.bJs,C.bJo,C.bJp,C.bJg,C.bJh,C.fs7,C.fs8,C.fs9,C.frV,C.fsa,C.frU,C.fsb,C.frZ,C.frT,C.fs_,C.frS,C.fs0,C.frR,C.fs1,C.frP,C.frQ,C.fs2,C.frN,C.frO,C.fs3,C.frM,C.e0E,C.e0F,C.e0u,C.e0q,C.e0D,C.e0I,C.cKW,C.h_I,C.h_J,C.cmd,C.eU2,C.e00,C.e01,C.e02,C.e04,C.eqY,C.ePx,C.ePG,C.ePC,C.ePE,C.epw,C.epx,C.epy])
u(B.jw,[C.fJT,C.eiO,C.eiM,C.ey_,C.eyc,C.dQ6,C.dQt,C.dWK,C.f7M,C.f7N,C.f7p,C.f7C,C.f7D,C.f7y,C.f7E,C.f7j,C.exb,C.exc,C.exJ,C.exB,C.exq,C.bPQ,C.bPS,C.bPU,C.bPF,C.bPH,C.bK0,C.ctn,C.fVM,C.bJz,C.bJB,C.bJX,C.bJW,C.e0C,C.cKX,C.dXE,C.dXC,C.dXw,C.cmg,C.dP_,C.dOV,C.er_])
u(B.af,[C.WD,C.X_,C.Vw,C.VB,C.Ob,C.aJ1,C.WZ,C.ajR,C.Wc,C.az3,C.VW,C.Xw,C.Wk,C.Vx,C.Wb,C.WU,C.X3,C.Xn,C.WT])
u(B.ah,[C.bmg,C.aNZ,C.aN2,C.aN7,C.aEP,C.aOO,C.aNX,C.azn,C.bzE,C.aLu,C.aNh,C.aOh,C.aNo,C.aN4,C.blI,C.aFO,C.aG8,C.bmY,C.aNR])
u(B.iJ,[C.eiH,C.eiI,C.eiU,C.eiV,C.eiQ,C.eiP,C.eiR,C.eiN,C.eiS,C.eiL,C.eiT,C.eiK,C.eiY,C.eiX,C.eiZ,C.eiW,C.ej_,C.ej0,C.ej2,C.eyi,C.eyk,C.eyl,C.ey1,C.ey0,C.exZ,C.ey7,C.ey8,C.ey4,C.ey9,C.ey3,C.eya,C.eyb,C.ey2,C.eyd,C.ey6,C.eyh,C.ey5,C.dOT,C.dOS,C.dOt,C.dOu,C.dOv,C.dOU,C.dOx,C.dOz,C.dOA,C.dOC,C.dOq,C.dOr,C.dOs,C.dOJ,C.dOK,C.dOL,C.dOI,C.dON,C.dOH,C.dOO,C.dOG,C.dOP,C.dOF,C.dOQ,C.dOE,C.dOR,C.dOD,C.dQc,C.dQb,C.dQg,C.dQ8,C.dQ9,C.dQh,C.dQi,C.dQj,C.dQe,C.dQ4,C.dQs,C.dQr,C.dQu,C.dQv,C.dQw,C.dQl,C.dQx,C.cVy,C.dWI,C.dWH,C.dWJ,C.fsm,C.fsn,C.fso,C.fsp,C.fsq,C.fsr,C.fss,C.fst,C.fsu,C.f7L,C.f7K,C.f7s,C.f7r,C.f7n,C.f7m,C.f7o,C.f7l,C.f7A,C.f7z,C.f7B,C.f7t,C.f7F,C.f7w,C.f7H,C.f7v,C.f7I,C.f7u,C.exk,C.ex9,C.exj,C.ex5,C.exl,C.exn,C.ex6,C.ex7,C.exI,C.exH,C.exy,C.exz,C.exA,C.exu,C.exv,C.ext,C.exw,C.exs,C.exx,C.exr,C.exp,C.dqD,C.bPT,C.bPV,C.bPG,C.bPI,C.bJE,C.bJF,C.bJD,C.bJG,C.bJI,C.bJt,C.bJu,C.bJy,C.bJv,C.bJw,C.bJx,C.bJY,C.bJ6,C.bJO,C.bJP,C.bJM,C.bJN,C.bJK,C.bJL,C.bJU,C.bJJ,C.bJV,C.bJ7,C.bJr,C.bJd,C.bJe,C.bJc,C.bJf,C.bJb,C.bJi,C.bJj,C.bJk,C.bJl,C.bJa,C.bJm,C.bJ9,C.bJn,C.bJ8,C.e0v,C.e0G,C.e0H,C.e0t,C.e0s,C.e0r,C.e0A,C.e0y,C.e0z,C.e0B,C.e0w,C.e0x,C.e0J,C.e0K,C.e0L,C.e0M,C.e0N,C.dXF,C.dXD,C.dXB,C.dXA,C.dXz,C.dXy,C.dXx,C.dXt,C.dXs,C.dXv,C.dXu,C.fsC,C.fsD,C.fsE,C.fsF,C.fsG,C.fsH,C.fsI,C.fsJ,C.cmf,C.cme,C.eU3,C.eU_,C.eTZ,C.eU1,C.eU0,C.e3u,C.e3v,C.e3p,C.e3r,C.e3s,C.e3q,C.e3t,C.dP0,C.dOY,C.dOX,C.dOZ,C.dOW,C.e0_,C.e_Z,C.e_Y,C.e_X,C.e03,C.e_W,C.e_V,C.e05,C.e_U,C.e06,C.e_T,C.e07,C.e08,C.e_S,C.eqU,C.eqV,C.eqT,C.eqW,C.eqS,C.eqZ,C.er0,C.eqX,C.er1,C.eBG,C.eBH,C.eBE,C.eBF,C.eBD,C.eBI,C.eBJ,C.eBK,C.eBL,C.ePB,C.ePD,C.ePA,C.ePz,C.ePF,C.ePy,C.epz,C.epA,C.eps,C.epr,C.ept,C.epq,C.epu,C.epp,C.epv,C.epo,C.epn,C.epm,C.epl,C.cmb])
t(C.bzR,C.aNZ)
t(C.aG2,C.bzR)
u(B.mk,[C.bjc,C.bdc,C.buw,C.bbR,C.bt7,C.bsx,C.bcx,C.bsA,C.bwC,C.bja,C.ajT,C.bb1,C.bxG,C.afE,C.bxS,C.bsz,C.bnK])
t(C.aN3,C.aN2)
t(C.aEw,C.aN3)
t(C.bzB,C.aN7)
t(C.aEy,C.bzB)
u(B.lE,[C.Ld,C.a1u,C.Kc])
u(B.ax,[C.btw,C.afX,C.aeP,C.R3,C.bu1,C.a9j,C.bfj])
t(C.aJ2,C.aOO)
t(C.bj9,B.pb)
t(C.aG1,C.aNX)
t(C.azo,C.azn)
t(C.ajS,C.azo)
t(C.aF0,C.bzE)
t(C.bb2,C.aLu)
t(C.blG,C.aNh)
t(C.bzY,C.aOh)
t(C.aGu,C.bzY)
t(C.bzG,C.aNo)
t(C.blR,C.bzG)
t(C.bzA,C.aN4)
t(C.blr,C.bzA)
t(C.bzP,C.aNR)
t(C.bms,C.bzP)
w(C.aNZ,B.cd)
w(C.bzR,E.nG)
w(C.aN2,B.cd)
w(C.aN3,E.nG)
w(C.aN7,B.cd)
w(C.bzB,E.nG)
w(C.aOO,B.eM)
w(C.aNX,B.cd)
w(C.azn,B.cd)
w(C.azo,E.nG)
w(C.aLu,B.cd)
v(C.bzE,B.eB)
w(C.aNh,B.cd)
w(C.aN4,B.cd)
w(C.bzA,E.nG)
w(C.aNo,B.cd)
w(C.bzG,E.nG)
w(C.aNR,B.cd)
w(C.bzP,E.nG)
w(C.aOh,B.cd)
w(C.bzY,E.nG)})()
B.iT(b.typeUniverse,JSON.parse('{"WD":{"af":[],"v":[]},"bmg":{"ah":["WD"]},"X_":{"af":[],"v":[]},"aG2":{"ah":["X_"]},"bjc":{"aC":[]},"Vw":{"af":[],"v":[]},"aEw":{"ah":["Vw"]},"VB":{"af":[],"v":[]},"aEy":{"ah":["VB"]},"bdc":{"aC":[]},"afX":{"ax":[],"v":[]},"aeP":{"ax":[],"v":[]},"aJ1":{"af":[],"v":[]},"Ob":{"af":[],"v":[]},"aEP":{"ah":["Ob"]},"btw":{"ax":[],"v":[]},"R3":{"ax":[],"v":[]},"buw":{"aC":[]},"bu1":{"ax":[],"v":[]},"bbR":{"aC":[]},"aJ2":{"ah":["aJ1"]},"bt7":{"aC":[]},"bsx":{"aC":[]},"bcx":{"aC":[]},"bsA":{"aC":[]},"bwC":{"aC":[]},"WZ":{"af":[],"v":[]},"bj9":{"aC":[]},"aG1":{"ah":["WZ"]},"bja":{"aC":[]},"ajT":{"aC":[]},"ajR":{"af":[],"v":[]},"ajS":{"ah":["ajR"]},"Wc":{"af":[],"v":[]},"az3":{"af":[],"v":[]},"aF0":{"ah":["Wc"],"eB":[]},"bb2":{"ah":["az3"]},"bb1":{"aC":[]},"VW":{"af":[],"v":[]},"blG":{"ah":["VW"]},"bxG":{"aC":[]},"afE":{"aC":[]},"a9j":{"ax":[],"v":[]},"Xw":{"af":[],"v":[]},"Wk":{"af":[],"v":[]},"Vx":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"WU":{"af":[],"v":[]},"X3":{"af":[],"v":[]},"Xn":{"af":[],"v":[]},"WT":{"af":[],"v":[]},"aGu":{"ah":["Xw"]},"bxS":{"aC":[]},"blR":{"ah":["Wk"]},"bsz":{"aC":[]},"blr":{"ah":["Vx"]},"blI":{"ah":["Wb"]},"bnK":{"aC":[]},"aFO":{"ah":["WU"]},"aG8":{"ah":["X3"]},"bmY":{"ah":["Xn"]},"bms":{"ah":["WT"]},"bfj":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lN<u?>"),G:w("u"),J:w("bu<n,F>"),Q:w("de<n>"),Z:w("a0"),M:w("O<da>"),R:w("O<SS>"),a:w("O<a4j>"),V:w("O<ac>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<F>>"),U:w("O<ai<H?>>"),x:w("O<a8<n,aE>>"),g:w("O<o>"),F:w("O<tY>"),v:w("O<fT>"),eZ:w("O<+(n,n)>"),fT:w("O<+(F,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,F,F,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,F,F,a8<n,F>)>"),_:w("O<vn>"),fQ:w("O<abl>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gd>"),p:w("O<v>"),bL:w("O<acs>"),fH:w("O<lk>"),a_:w("O<acG>"),cB:w("O<nI>"),ba:w("O<acX>"),eW:w("O<D3>"),fY:w("O<a_r>"),ac:w("O<aeS>"),cd:w("O<De>"),fr:w("O<afL>"),e4:w("O<a1H>"),au:w("O<aJU>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tY?>"),bN:w("O<H?>"),q:w("cw<ajS>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(F,v),v>"),l:w("iC"),gA:w("zU"),gD:w("wp"),h:w("ct"),K:w("aE"),W:w("tY"),B:w("eh"),N:w("n"),bO:w("au"),Y:w("br<F>"),k:w("bJ<n>"),bz:w("bJ<H?>"),dg:w("ea<ra>"),m:w("bc8"),a2:w("D_"),f3:w("ra"),es:w("GE"),gV:w("mz"),y:w("P"),i:w("F"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2c=new B.da(0,0.1)
D.b47=new C.aU0(0,0,0)
D.LN=new C.aU0(0,0.5,0)
D.b4I=new B.ay(A.b4,1,A.r,-1)
D.b6a=new B.aY(0,1/0,0,290)
D.b6h=new B.aY(16,1/0,16,1/0)
D.bnS=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dvb=w([D.bnS,Al.aiz],x.O)
D.eyX=new B.bY(A.Fd,1.1,A.x,null,0,D.dvb,null,null)
D.b6z=new B.p(null,null,null,null,null,D.eyX,A.n)
D.b7v=new B.p(A.be,null,null,null,null,null,A.a7)
D.foK=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1a=new B.B("\u26a1",null,D.foK,null,null,null,null,null,null,null,null,null)
D.bc3=new B.cg(A.A,null,null,D.h1a,null)
D.aVM=new B.G(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRA=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVM,null,A.K,null,null,null,null,null,null,null)
D.er7=new B.D(A.nH,D.fRA,null)
D.bcd=new B.cg(A.A,null,null,D.er7,null)
D.fHl=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVM,null,A.K,null,null,null,null,null,null,null)
D.es0=new B.D(A.GX,D.fHl,null)
D.bcX=new B.cg(A.A,null,null,D.es0,null)
D.afq=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bgJ=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bh_=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.big=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bin=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.biK=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bkD=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.blE=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bmn=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahI=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bnn=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ai4=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zd=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bpf=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bpw=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiE=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.brf=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.brn=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.brQ=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w8=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.btU=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ak7=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bzD=new B.bd(11e6)
D.bBp=new B.R(10,34,10,26)
D.bBx=new B.R(10,6,10,2)
D.bBz=new B.R(10,8,0,10)
D.bCd=new B.R(12,8,8,8)
D.bCk=new B.R(14,0,14,22)
D.bCm=new B.R(14,0,14,30)
D.bDq=new B.R(16,4,16,28)
D.bDK=new B.R(18,10,18,16)
D.bFJ=new B.R(26,12,26,58)
D.bGA=new B.R(4,4,8,2)
D.bHe=new B.R(8,14,8,12)
D.bHl=new B.R(8,40,8,30)
D.bHq=new B.R(8,6,16,0)
D.bHr=new B.R(8,6,8,8)
D.bHM=new B.R(0,0,1.5,0)
D.b3U=new B.HS(26,"saturation")
D.bI4=new B.uP(A.d0,D.b3U,null,A.Y5)
D.bI5=new B.hw(A.G,11)
D.bI9=new B.hw(A.G,30)
D.fGr=new B.B("REACTION LAB",null,U.aWo,null,null,null,null,A.a2,null,1,null,null)
D.bIh=new B.bz(1,A.bc,D.fGr,null)
D.fwX=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new B.B("CORE PROTOCOL",null,D.fwX,null,null,null,null,null,null,null,null,null)
D.bIv=new B.bz(1,A.bc,D.fJI,null)
D.fKv=new B.B("\ud83d\udce2 NGMY Ads",null,A.ra,null,null,null,null,A.eP,null,1,null,null)
D.bJe=new B.bz(1,A.bc,D.fKv,null)
D.fF8=new B.B("Wire selected",null,A.h_,null,null,null,null,null,null,null,null,null)
D.bJs=new B.bz(1,A.bc,D.fF8,null)
D.ap1=new B.a0(62712,"MaterialIcons",!1)
D.bPA=new B.a0(62908,"MaterialIcons",!1)
D.bRh=new B.a0(983122,"MaterialIcons",!1)
D.bRu=new B.a0(983247,"MaterialIcons",!1)
D.bS_=new B.a0(983616,"MaterialIcons",!1)
D.bRg=new B.a0(983117,"MaterialIcons",!1)
D.bVI=new B.ae(D.bRg,28,A.c,null,null,null)
D.bVY=new B.ae(A.j2,18,null,null,null,null)
D.bXQ=new B.ae(A.eh,21,A.c0,null,null,null)
D.bY5=new B.ae(A.oA,null,A.ab,null,null,null)
D.bYf=new B.ae(A.a3n,21,A.ab,null,null,null)
D.bZ6=new B.ae(A.eN,17,A.ab,null,null,null)
D.c0S=new B.ae(A.j2,21,A.ab,null,null,null)
D.c2p=new B.ae(A.ee,null,A.aS,null,null,null)
D.dsS=w([A.d6,A.d5,A.d6],x.O)
D.c5N=new B.a9(A.a6,A.aa,A.x,D.dsS,null,null)
D.d4o=w([A.bP,A.br],x.O)
D.c5V=new B.a9(A.b7,A.b8,A.x,D.d4o,null,null)
D.c66=new B.a9(A.b7,A.b8,A.x,A.a5Z,null,null)
D.asJ=new B.a9(A.b7,A.b8,A.x,O.a5c,null,null)
D.d1W=w([A.p9,A.iC],x.O)
D.c6S=new B.a9(A.b7,A.b8,A.x,D.d1W,null,null)
D.d46=w([A.e7,A.as],x.O)
D.asQ=new B.a9(A.b7,A.b8,A.x,D.d46,null,null)
D.dmB=w([A.db,A.jj,A.br],x.O)
D.c79=new B.a9(A.a6,A.aa,A.x,D.dmB,null,null)
D.dmH=w([A.dU,A.cr],x.O)
D.c7u=new B.a9(A.b7,A.b8,A.x,D.dmH,null,null)
D.cB1=w([A.bP,A.db],x.O)
D.c7D=new B.a9(A.a6,A.aa,A.x,D.cB1,null,null)
D.aCR=w([A.e7,M.nx],x.O)
D.c7K=new B.a9(A.b7,A.b8,A.x,D.aCR,null,null)
D.c80=new B.a9(A.b7,A.b8,A.x,R.atb,null,null)
D.c8P=new B.a9(A.aA,A.aE,A.x,A.RL,null,null)
D.ddY=w([A.as,A.w],x.O)
D.c9_=new B.a9(A.b7,A.b8,A.x,D.ddY,null,null)
D.c92=new B.a9(A.b7,A.b8,A.x,H.aC7,null,null)
D.brL=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bsB=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cNY=w([A.Nf,D.brL,D.bsB],x.O)
D.c9b=new B.a9(A.b7,A.b8,A.x,D.cNY,null,null)
D.cBl=w([A.cZ,A.ha],x.O)
D.c9r=new B.a9(A.b7,A.b8,A.x,D.cBl,null,null)
D.bvd=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cC5=w([F.afz,D.bvd],x.O)
D.c9E=new B.a9(A.b7,A.b8,A.x,D.cC5,null,null)
D.cad=w([0,4,7],x.t)
D.cae=w([0,4,7,12],x.t)
D.caf=w([0,4,7,4],x.t)
D.aBN=w([A.hp,A.ql],x.O)
D.aBi=w([A.hr,A.cG],x.O)
D.azD=w([A.bp,A.dK],x.O)
D.cWD=w([A.aS,A.cZ],x.O)
D.dnY=w([A.bT,A.kJ],x.O)
D.az3=w([A.cF,A.kr],x.O)
D.d0K=w([A.bK,A.aM],x.O)
D.caC=w([D.aBN,D.aBi,A.a5h,D.azD,D.cWD,A.azT,A.aAN,D.dnY,D.az3,D.d0K],B.as("O<ai<u>>"))
D.cfi=w([120,220,380],x.t)
D.cj2=w([12,16,19,24],x.t)
D.cjc=w([1400,800,450,2400],x.t)
D.crD=w([250,450,900,1500],x.t)
D.bg4=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bsa=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bpY=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bvN=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bp3=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayk=w([D.bg4,D.bsa,D.bpY,D.bvN,D.bp3],x.O)
D.cIS=w([50,25,75],x.t)
D.cOu=w([0,5,10,15,18,20,25],x.t)
D.cWW=w([900,500,250,1600],x.t)
D.d02=w([A.bp,A.bD,A.ba,A.bp],x.O)
D.a57=w([A.ay,A.bi,A.be,A.aH,A.nt],x.O)
D.d1z=w([A.as,A.ay,A.cF,A.bi,A.be,A.cy,A.ch,A.bD,A.Ym],x.O)
D.a5a=w([0.04,0.17,0.3],x.n)
D.f89=new C.vn("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f8f=new C.vn("Medium engine","A good all-rounder.",0.3,0.9)
D.f8e=new C.vn("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Is=w([D.f89,D.f8f,D.f8e],x._)
D.eEK=new B.y(6,"Easy")
D.eFv=new B.y(8,"Medium")
D.eAt=new B.y(10,"Hard")
D.d38=w([D.eEK,D.eFv,D.eAt],x.I)
D.aA2=w([0.55,0.78,1],x.n)
D.aAd=w([A.c,A.fy,A.nm,A.as],x.O)
D.aAl=w([A.be,A.ay,A.bi,A.d5],x.O)
D.f86=new C.vn("Radar","Shows your height above the ground.",0.1,0)
D.f87=new C.vn("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f84=new C.vn("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAs=w([D.f86,D.f87,D.f84],x._)
D.d9k=w([47,100,220,470,1000],x.n)
D.Ju={volts:0}
D.a7_=new B.bu(D.Ju,[3],x.J)
D.JV=new B.dX(["b","battery",0.2,0.3,D.a7_])
D.ekW={on:0}
D.dDJ=new B.bu(D.ekW,[1],x.J)
D.Er=new B.dX(["s","switch",0.5,0.3,D.dDJ])
D.f5O=new B.dX(["l","bulb",0.8,0.3,A.jr])
D.d4x=w([D.JV,D.Er,D.f5O],x.d)
D.Ep=new B.cu(["b",0,"s",0])
D.f4O=new B.cu(["s",1,"l",0])
D.aRm=new B.cu(["l",1,"b",1])
D.dmN=w([D.Ep,D.f4O,D.aRm],x.o)
D.d3W=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ezE=new C.mX("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d4x,D.dmN,D.d3W)
D.aLb={ohms:0}
D.aIN=new B.bu(D.aLb,[220],x.J)
D.f5g=new B.dX(["r","resistor",0.5,0.3,D.aIN])
D.f62=new B.dX(["d","led",0.8,0.3,A.jr])
D.dq2=w([D.JV,D.f5g,D.f62],x.d)
D.f48=new B.cu(["b",0,"r",0])
D.f4I=new B.cu(["r",1,"d",0])
D.f4e=new B.cu(["d",1,"b",1])
D.dzl=w([D.f48,D.f4I,D.f4e],x.o)
D.dqw=w(["led","diode","indicator"],x.s)
D.ezL=new C.mX("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dq2,D.dzl,D.dqw)
D.a8h={level:0}
D.dD4=new B.bu(D.a8h,[0.2],x.J)
D.f5m=new B.dX(["p","pot",0.5,0.3,D.dD4])
D.f5o=new B.dX(["m","motor",0.8,0.3,A.jr])
D.d4R=w([D.JV,D.f5m,D.f5o],x.d)
D.f47=new B.cu(["b",0,"p",0])
D.f4E=new B.cu(["p",1,"m",0])
D.f4A=new B.cu(["m",1,"b",1])
D.duW=w([D.f47,D.f4E,D.f4A],x.o)
D.dmu=w(["fan","motor","spin","dimmer"],x.s)
D.ezC=new C.mX("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d4R,D.duW,D.dmu)
D.a6X=new B.bu(D.a8h,[0.9],x.J)
D.aRv=new B.dX(["s","solar",0.25,0.3,D.a6X])
D.aRu=new B.dX(["l","bulb",0.75,0.3,A.jr])
D.d7F=w([D.aRv,D.aRu],x.d)
D.f4L=new B.cu(["s",0,"l",0])
D.f4y=new B.cu(["l",1,"s",1])
D.d5F=w([D.f4L,D.f4y],x.o)
D.dvE=w(["solar","sun","without battery","no battery","free"],x.s)
D.ezF=new C.mX("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d7F,D.d5F,D.dvE)
D.f65=new B.dX(["c","crank",0.25,0.3,D.a6X])
D.dkG=w([D.f65,D.aRu],x.d)
D.f4b=new B.cu(["c",0,"l",0])
D.f4x=new B.cu(["l",1,"c",1])
D.dlh=w([D.f4b,D.f4x],x.o)
D.dkQ=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ezB=new C.mX("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dkG,D.dlh,D.dkQ)
D.dD3=new B.bu(D.a8h,[0.7],x.J)
D.f5r=new B.dX(["t","turbine",0.25,0.3,D.dD3])
D.f5e=new B.dX(["m","motor",0.75,0.3,A.jr])
D.deE=w([D.f5r,D.f5e],x.d)
D.f4W=new B.cu(["t",0,"m",0])
D.f4B=new B.cu(["m",1,"t",1])
D.ddD=w([D.f4W,D.f4B],x.o)
D.djo=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ezy=new C.mX("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.deE,D.ddD,D.djo)
D.aIK=new B.bu(D.Ju,[9],x.J)
D.a9o=new B.dX(["b","battery",0.2,0.3,D.aIK])
D.aRs=new B.dX(["r","radio",0.8,0.3,A.jr])
D.dwd=w([D.a9o,D.Er,D.aRs],x.d)
D.f4Q=new B.cu(["s",1,"r",0])
D.aRo=new B.cu(["r",1,"b",1])
D.c9V=w([D.Ep,D.f4Q,D.aRo],x.o)
D.duH=w(["radio","music","listen"],x.s)
D.ezK=new C.mX("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dwd,D.c9V,D.duH)
D.dE8=new B.bu(D.Ju,[12],x.J)
D.aRr=new B.dX(["b","battery",0.2,0.3,D.dE8])
D.f5P=new B.dX(["t","tv",0.8,0.3,A.jr])
D.d4z=w([D.aRr,D.Er,D.f5P],x.d)
D.f4R=new B.cu(["s",1,"t",0])
D.aRp=new B.cu(["t",1,"b",1])
D.do0=w([D.Ep,D.f4R,D.aRp],x.o)
D.dwb=w(["tv","television","screen","watch"],x.s)
D.ezv=new C.mX("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d4z,D.do0,D.dwb)
D.f5F=new B.dX(["z","buzzer",0.8,0.3,A.jr])
D.cLd=w([D.JV,D.Er,D.f5F],x.d)
D.f4S=new B.cu(["s",1,"z",0])
D.f59=new B.cu(["z",1,"b",1])
D.d_g=w([D.Ep,D.f4S,D.f59],x.o)
D.dsY=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ezH=new C.mX("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cLd,D.d_g,D.dsY)
D.f5n=new B.dX(["h","heater",0.8,0.3,A.jr])
D.di2=w([D.a9o,D.Er,D.f5n],x.d)
D.f4N=new B.cu(["s",1,"h",0])
D.f4m=new B.cu(["h",1,"b",1])
D.d_Y=w([D.Ep,D.f4N,D.f4m],x.o)
D.cuV=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ezw=new C.mX("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.di2,D.d_Y,D.cuV)
D.f5R=new B.dX(["s","solar",0.2,0.25,D.a6X])
D.dEb=new B.bu(D.aLb,[100],x.J)
D.f5U=new B.dX(["r","resistor",0.55,0.25,D.dEb])
D.f60=new B.dX(["c","capacitor",0.85,0.25,A.jr])
D.f5j=new B.dX(["q","resistor",0.55,0.6,D.aIN])
D.f5S=new B.dX(["d","led",0.85,0.6,A.jr])
D.dnw=w([D.f5R,D.f5U,D.f60,D.f5j,D.f5S],x.d)
D.f4M=new B.cu(["s",0,"r",0])
D.f4H=new B.cu(["r",1,"c",0])
D.f4d=new B.cu(["c",1,"s",1])
D.f4c=new B.cu(["c",0,"q",0])
D.f4G=new B.cu(["q",1,"d",0])
D.f4f=new B.cu(["d",1,"c",1])
D.dbt=w([D.f4M,D.f4H,D.f4d,D.f4c,D.f4G,D.f4f],x.o)
D.djZ=w(["capacitor","store","charge","flash"],x.s)
D.ezJ=new C.mX("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dnw,D.dbt,D.djZ)
D.f5u=new B.dX(["b","battery",0.15,0.3,D.a7_])
D.f66=new B.dX(["l1","bulb",0.5,0.3,A.jr])
D.f5C=new B.dX(["l2","bulb",0.85,0.3,A.jr])
D.d2z=w([D.f5u,D.f66,D.f5C],x.d)
D.f46=new B.cu(["b",0,"l1",0])
D.f4u=new B.cu(["l1",1,"l2",0])
D.f4v=new B.cu(["l2",1,"b",1])
D.dfs=w([D.f46,D.f4u,D.f4v],x.o)
D.dvX=w(["series","two bulbs","dim"],x.s)
D.ezz=new C.mX("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d2z,D.dfs,D.dvX)
D.elg={volts:0,charge:1}
D.dEe=new B.bu(D.elg,[1.5,0],x.J)
D.f5Z=new B.dX(["b","battery",0.75,0.3,D.dEe])
D.d1X=w([D.aRv,D.f5Z],x.d)
D.f4K=new B.cu(["s",0,"b",0])
D.f4a=new B.cu(["b",1,"s",1])
D.dbN=w([D.f4K,D.f4a],x.o)
D.dk8=w(["charge","rechargeable","flat","recharge"],x.s)
D.ezx=new C.mX("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d1X,D.dbN,D.dk8)
D.dE7=new B.bu(D.Ju,[4.5],x.J)
D.f5p=new B.dX(["b","battery",0.2,0.3,D.dE7])
D.aRq=new B.dX(["p","phone",0.8,0.3,A.jr])
D.det=w([D.f5p,D.Er,D.aRq],x.d)
D.f4P=new B.cu(["s",1,"p",0])
D.a9n=new B.cu(["p",1,"b",1])
D.drS=w([D.Ep,D.f4P,D.a9n],x.o)
D.dtn=w(["phone","charger","usb","mobile"],x.s)
D.ezD=new C.mX("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.det,D.drS,D.dtn)
D.f5b=new B.dX(["f","fan",0.8,0.3,A.jr])
D.cn1=w([D.JV,D.f5b],x.d)
D.f45=new B.cu(["b",0,"f",0])
D.f4k=new B.cu(["f",1,"b",1])
D.d0w=w([D.f45,D.f4k],x.o)
D.dmt=w(["fan","cool","air","wind"],x.s)
D.ezM=new C.mX("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cn1,D.d0w,D.dmt)
D.f5J=new B.dX(["b","battery",0.15,0.2,D.a7_])
D.f5c=new B.dX(["a","ammeter",0.5,0.2,A.jr])
D.f5a=new B.dX(["l","bulb",0.85,0.2,A.jr])
D.f5L=new B.dX(["v","voltmeter",0.5,0.6,A.jr])
D.dku=w([D.f5J,D.f5c,D.f5a,D.f5L],x.d)
D.f43=new B.cu(["b",0,"a",0])
D.f42=new B.cu(["a",1,"l",0])
D.f4Y=new B.cu(["v",0,"l",0])
D.f4Z=new B.cu(["v",1,"l",1])
D.dbE=w([D.f43,D.f42,D.aRm,D.f4Y,D.f4Z],x.o)
D.dzk=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ezI=new C.mX("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dku,D.dbE,D.dzk)
D.f69=new B.dX(["b","battery",0.15,0.2,D.aIK])
D.f5t=new B.dX(["t","tv",0.55,0.2,A.jr])
D.aIL=new B.bu(D.Ju,[5],x.J)
D.f5h=new B.dX(["c","buck",0.4,0.5,D.aIL])
D.f5v=new B.dX(["p","phone",0.8,0.5,A.jr])
D.d96=w([D.f69,D.f5t,D.f5h,D.f5v],x.d)
D.f49=new B.cu(["b",0,"t",0])
D.aRk=new B.cu(["b",0,"c",0])
D.aRl=new B.cu(["c",1,"p",0])
D.deq=w([D.f49,D.aRp,D.aRk,D.aRl,D.a9n],x.o)
D.d7d=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ezA=new C.mX("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d96,D.deq,D.d7d)
D.f5i=new B.dX(["c","buck",0.5,0.3,D.aIL])
D.d_N=w([D.aRr,D.f5i,D.aRq],x.d)
D.d50=w([D.aRk,D.aRl,D.a9n],x.o)
D.cyp=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ezu=new C.mX("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d_N,D.d50,D.cyp)
D.f5A=new B.dX(["d","diode",0.5,0.3,A.jr])
D.dfG=w([D.a9o,D.f5A,D.aRs],x.d)
D.f44=new B.cu(["b",0,"d",0])
D.f4g=new B.cu(["d",1,"r",0])
D.cNM=w([D.f44,D.f4g,D.aRo],x.o)
D.d6T=w(["diode","protect","backwards","one way"],x.s)
D.ezG=new C.mX("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dfG,D.cNM,D.d6T)
D.RZ=w([D.ezE,D.ezL,D.ezC,D.ezF,D.ezB,D.ezy,D.ezK,D.ezv,D.ezH,D.ezw,D.ezJ,D.ezz,D.ezx,D.ezD,D.ezM,D.ezI,D.ezA,D.ezu,D.ezG],B.as("O<mX>"))
D.hDr=new C.GT("Moon",1.62,A.db,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hDp=new C.GT("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hDs=new C.GT("Mercury",3.7,A.kp,"Mercury is small, so its gravity is like Mars.")
D.hDm=new C.GT("Venus",8.87,A.aS,"Venus is almost as heavy as Earth, with strong gravity.")
D.hDo=new C.GT("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hDq=new C.GT("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hDn=new C.GT("Jupiter",24.79,A.cF,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tb=w([D.hDr,D.hDp,D.hDs,D.hDm,D.hDo,D.hDq,D.hDn],B.as("O<GT>"))
D.dbr=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dcb=w([0.2,0.5,0.8],x.n)
D.b1_=new C.Ld(0,"accordion")
D.d0S=w([A.jI,A.D_,A.CF],x.w)
D.d8x=w(["Mail","SMS","Ad"],x.s)
D.d1r=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hBF=new C.B9(D.b1_,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBN,D.d0S,D.d8x,D.d1r)
D.ad9=new C.Ld(1,"flip")
D.djT=w([A.qM,Z.HU,A.uU],x.w)
D.dea=w(["Unlock","Verify","Secure"],x.s)
D.d_J=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hBE=new C.B9(D.ad9,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBi,D.djT,D.dea,D.d_J)
D.b10=new C.Ld(2,"towers")
D.dcX=w([A.zl,A.qP,A.id],x.w)
D.dcu=w(["Save","Grow","Earn"],x.s)
D.cOF=w(["","",""],x.s)
D.hBG=new C.B9(D.b10,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5h,D.dcX,D.dcu,D.cOF)
D.ada=new C.Ld(3,"assemble")
D.dkU=w([A.oE,A.hw,A.ee],x.w)
D.d7R=w(["Launch","Charge","Shine"],x.s)
D.dh3=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hBI=new C.B9(D.ada,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azD,D.dkU,D.d7R,D.dh3)
D.b11=new C.Ld(4,"carousel")
D.dkH=w([A.ba,A.eX],x.O)
D.d8G=w([A.n4,A.apt,A.PJ],x.w)
D.d2Z=w(["Explore","Discover","Learn"],x.s)
D.dez=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hBD=new C.B9(D.b11,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dkH,D.d8G,D.d2Z,D.dez)
D.b12=new C.Ld(5,"burst")
D.dcp=w([A.hV,A.rA],x.O)
D.d1l=w([A.kv,A.n2,A.hK],x.w)
D.d1H=w(["Cheer","Win","Love"],x.s)
D.d44=w(["Make some noise","First place","Share the joy"],x.s)
D.hBH=new C.B9(D.b12,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dcp,D.d1l,D.d1H,D.d44)
D.aAY=w([D.hBF,D.hBE,D.hBG,D.hBI,D.hBD,D.hBH],B.as("O<B9>"))
D.f1b=new B.b5("skin","Skin",A.apu)
D.f2Q=new B.b5("muscle","Muscles",A.Pk)
D.f2u=new B.b5("organ","Organs",A.hK)
D.bPi=new B.a0(62747,"MaterialIcons",!1)
D.f2C=new B.b5("bone","Skeleton",D.bPi)
D.f2Y=new B.b5("vessel","Blood vessels",A.pB)
D.dd2=w([D.f1b,D.f2Q,D.f2u,D.f2C,D.f2Y],x.r)
D.f88=new C.vn("Simple legs","Light. Land gently.",0.15,0.2)
D.f8a=new C.vn("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f8d=new C.vn("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ds=w([D.f88,D.f8a,D.f8d],x._)
D.f3L=new B.cu(["beat",0.18,0.28,0])
D.f4T=new B.cu(["burst",0.7,0.2,0])
D.f53=new B.cu(["delay",0.45,0.5,1])
D.f4D=new B.cu(["ripple",0.75,0.6,3])
D.d7A=w([D.f3L,D.f4T,D.f53,D.f4D],x.e)
D.djb=w([P.lv,O.JU,F.Uu],x.u)
D.hA5=new C.GE("First spark","A clock lights a burst and a ripple",D.d7A,D.djb)
D.f4j=new B.cu(["beat",0.15,0.3,1])
D.f3p=new B.cu(["ripple",0.62,0.15,0])
D.f5_=new B.cu(["delay",0.4,0.45,0])
D.f4_=new B.cu(["ripple",0.7,0.45,0])
D.f3H=new B.cu(["delay",0.4,0.7,1])
D.f4F=new B.cu(["shake",0.75,0.75,0])
D.dx4=w([D.f4j,D.f3p,D.f5_,D.f4_,D.f3H,D.f4F],x.e)
D.eBA=new B.y(2,4)
D.aR1=new B.y(4,5)
D.dbh=w([P.lv,O.JU,F.Uu,D.eBA,D.aR1],x.u)
D.hA7=new C.GE("Heartbeat","Two thumps, then a shake",D.dx4,D.dbh)
D.f3Q=new B.cu(["dice",0.15,0.7,1])
D.f55=new B.cu(["echo",0.4,0.7,0])
D.f3Y=new B.cu(["comet",0.7,0.5,4])
D.f4U=new B.cu(["burst",0.72,0.2,1])
D.f4h=new B.cu(["burst",0.3,0.25,0])
D.f3R=new B.cu(["pop",0.55,0.85,0])
D.cut=w([D.f3Q,D.f55,D.f3Y,D.f4U,D.f4h,D.f3R],x.e)
D.eAV=new B.y(1,3)
D.eAW=new B.y(1,4)
D.aQY=new B.y(0,5)
D.dkC=w([P.lv,S.vs,D.eAV,D.eAW,D.aQY],x.u)
D.hA6=new C.GE("Fireworks","Dice launch comets that burst in colour",D.cut,D.dkC)
D.f3V=new B.cu(["beat",0.15,0.2,2])
D.f4r=new B.cu(["chance",0.4,0.2,0])
D.f3N=new B.cu(["ball",0.7,0.12,3])
D.f3A=new B.cu(["chance",0.4,0.5,1])
D.f54=new B.cu(["ball",0.3,0.08,1])
D.f3t=new B.cu(["ripple",0.7,0.55,3])
D.cnu=w([D.f3V,D.f4r,D.f3N,D.f3A,D.f54,D.f3t],x.e)
D.eBB=new B.y(2,5)
D.cKX=w([P.lv,S.vs,O.a9f,F.Uv,D.eBB],x.u)
D.hA4=new C.GE("Rain","Balls fall at random and splash",D.cnu,D.cKX)
D.f4s=new B.cu(["beat",0.12,0.45,2])
D.f4V=new B.cu(["toggle",0.38,0.2,0])
D.f51=new B.cu(["wash",0.7,0.15,4])
D.f3P=new B.cu(["count3",0.38,0.45,0])
D.f4X=new B.cu(["burst",0.72,0.4,0])
D.f4i=new B.cu(["light",0.55,0.7,1])
D.f3B=new B.cu(["pop",0.8,0.8,4])
D.dnu=w([D.f4s,D.f4V,D.f51,D.f3P,D.f4X,D.f4i,D.f3B],x.e)
D.eC7=new B.y(3,6)
D.cqD=w([P.lv,S.vs,O.a9f,F.Uv,D.aQY,D.eC7],x.u)
D.hA2=new C.GE("Disco","A beat drives lights, washes and bursts",D.dnu,D.cqD)
D.f58=new B.cu(["button",0.12,0.2,0])
D.f3v=new B.cu(["delay",0.34,0.2,1])
D.f57=new B.cu(["light",0.56,0.2,1])
D.f50=new B.cu(["delay",0.56,0.45,1])
D.f4t=new B.cu(["ball",0.34,0.6,0])
D.f3z=new B.cu(["delay",0.34,0.8,1])
D.f3o=new B.cu(["burst",0.7,0.8,5])
D.caF=w([D.f58,D.f3v,D.f57,D.f50,D.f4t,D.f3z,D.f3o],x.e)
D.eEj=new B.y(5,6)
D.dt6=w([P.lv,S.vs,F.Uu,F.Uv,D.aR1,D.eEj],x.u)
D.hA3=new C.GE("Domino","Tap the button and watch it run down the line",D.caF,D.dt6)
D.aBm=w([D.hA5,D.hA7,D.hA6,D.hA4,D.hA2,D.hA3],B.as("O<GE>"))
D.dis=w([0.05,0.15,0.25],x.n)
D.djn=w([1.5,3,4.5,9,12],x.n)
D.f_v=new B.b5("dice","Dice",A.ow)
D.f0K=new B.b5("coin","Coin",Q.zg)
D.f2T=new B.b5("num","Number",A.zp)
D.djB=w([D.f_v,D.f0K,D.f2T],x.r)
D.djF=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBs=w([A.c0,A.aS,A.b4,A.aH,A.bp,A.bT,A.cF,A.hr],x.O)
D.dkI=w([A.bT,A.aH,A.dy,A.b4],x.O)
D.dlK=w([],x.a)
D.esO=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.esU=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bi,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ety=new C.eh("crank","Hand crank","\ud83d\udd04",A.cF,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eta=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.esG=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hr,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.et8=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.etD=new C.eh("diode","Diode","\u27a1\ufe0f",A.aS,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.etk=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dy,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.esZ=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bp,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.etA=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.esy=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hr,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.etl=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aS,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.etn=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dy,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.esW=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.et_=new C.eh("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eth=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.esP=new C.eh("heater","Heater","\ud83d\udd25",A.cF,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.etc=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.et4=new C.eh("radio","Radio","\ud83d\udcfb",A.nt,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.et1=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.esF=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.esM=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aS,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.esS=new C.eh("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.etF=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.etu=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.et7=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mf,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.esL=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.etE=new C.eh("router","WiFi router","\ud83d\udcf6",A.hr,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.etH=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.esB=new C.eh("toycar","Toy car","\ud83d\ude97",A.cF,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.etI=new C.eh("kettle","Kettle","\ud83e\uded6",A.mQ,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.esJ=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dy,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.esV=new C.eh("lights","Party lights","\ud83c\udf84",A.nt,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.et5=new C.eh("fridge","Fridge","\ud83e\uddca",A.ht,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.esD=new C.eh("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.etv=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.et2=new C.eh("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.esI=new C.eh("drill","Power drill","\ud83d\udd29",A.aS,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.et6=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ets=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.esE=new C.eh("microwave","Microwave","\ud83c\udf72",A.cF,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.etm=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bi,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.esR=new C.eh("camera","Security camera","\ud83d\udcf7",A.am,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.etg=new C.eh("console","Game console","\ud83c\udfae",A.bp,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.etx=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hn,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.esC=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.etb=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dy,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.etj=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nt,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.etC=new C.eh("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.esA=new C.eh("toaster","Toaster","\ud83c\udf5e",A.dX,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.etG=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.etr=new C.eh("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.etd=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hV,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.etp=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bp,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.esK=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.etB=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.esx=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hn,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.et3=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.esX=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eti=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u4,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.esz=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b9,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.esN=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.etz=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ete=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.et9=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.etq=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.esY=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.etf=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eto=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cF,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ett=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.esw=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.et0=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.esT=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.esH=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dy,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.esQ=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.etw=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bp,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sn=w([D.esO,D.esU,D.ety,D.eta,D.esG,D.et8,D.etD,D.etk,D.esZ,D.etA,D.esy,D.etl,D.etn,D.esW,D.et_,D.eth,D.esP,D.etc,D.et4,D.et1,D.esF,D.esM,D.esS,D.etF,D.etu,D.et7,D.esL,D.etE,D.etH,D.esB,D.etI,D.esJ,D.esV,D.et5,D.esD,D.etv,D.et2,D.esI,D.et6,D.ets,D.esE,D.etm,D.esR,D.etg,D.etx,D.esC,D.etb,D.etj,D.etC,D.esA,D.etG,D.etr,D.etd,D.etp,D.esK,D.etB,D.esx,D.et3,D.esX,D.eti,D.esz,D.esN,D.etz,D.ete,D.et9,D.etq,D.esY,D.etf,D.eto,D.ett,D.esw,D.et0,D.esT,D.esH,D.esQ,D.etw],B.as("O<eh>"))
D.dmo=w([5,10,15,25,45,60],x.t)
D.dmL=w([-0.045,0.03,-0.015],x.n)
D.aBV=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v6=w([0.05,0.2,0.35],x.n)
D.b8N=new B.ac(0,A.G,A.hu,A.dG,6)
D.dps=w([D.b8N],x.V)
D.eA5=new B.y(0,"AND")
D.eAX=new B.y(1,"Adder")
D.eBC=new B.y(2,"Blinker")
D.eC8=new B.y(3,"Memory")
D.dqg=w([D.eA5,D.eAX,D.eBC,D.eC8],x.I)
D.aC8=w([-104,0,104],x.n)
D.aCa=w([-14,3],x.n)
D.drb=w([-8,0,8],x.n)
D.aCj=w([-92,0,92],x.n)
D.drB=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f85=new C.vn("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f8c=new C.vn("Medium tank","Balanced.",0.35,1)
D.f8b=new C.vn("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SC=w([D.f85,D.f8c,D.f8b],x._)
D.nO=w([0.04,0.2,0.36],x.n)
D.aCv=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f2t=new B.b5(D.b1_,"Fold",Q.aqq)
D.f1r=new B.b5(D.ad9,"Flip",A.CO)
D.bPz=new B.a0(62889,"MaterialIcons",!1)
D.f2P=new B.b5(D.b10,"Rise",D.bPz)
D.aqD=new B.a0(983870,"MaterialIcons",!1)
D.eZQ=new B.b5(D.ada,"Assemble",D.aqD)
D.f_3=new B.b5(D.b11,"Spin",D.ap1)
D.eZY=new B.b5(D.b12,"Pop",A.kv)
D.dt3=w([D.f2t,D.f1r,D.f2P,D.eZQ,D.f_3,D.eZY],B.as("O<+(Ld,n,a0)>"))
D.aCA=w([A.bT,A.dy,A.bx,A.aH,A.bp,A.c0],x.O)
D.dtt=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dux=w([3,4.5,5,6,9],x.n)
D.b9l=new B.ac(0,A.G,A.aV,A.H,16)
D.dv_=w([D.b9l],x.V)
D.fPQ=new B.B("\ud83e\uddcd",null,S.KK,null,null,null,null,null,null,null,null,null)
D.c9I=new B.IR(5,null,null,A.bA,A.bT,null,null,null,null)
D.ff8=new B.a5(150,null,D.c9I,null)
D.fxd=new B.G(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTa=new B.B("Getting the body ready...",null,D.fxd,null,null,null,null,null,null,null,null,null)
D.fPT=new B.B("Real 3D anatomy, kept on your phone",null,A0.xi,null,null,null,null,null,null,null,null,null)
D.dv2=w([D.fPQ,A.aB,D.ff8,A.af,D.fTa,A.ax,D.fPT],x.p)
D.dvB=w(["solar","turbine","crank","pot"],x.s)
D.dw0=w([0,0.35,0.75,1],x.n)
D.dxj=w(["volts","level","ohms","on"],x.s)
D.dyK=w([A.jI,A.D_,A.CF,A.qM,Z.HU,A.uU,A.zl,A.qP,A.id,A.oE,A.hw,A.ee,A.hK,A.ie,A.n2,A.lN,A.uT,A.t7,A.lj,A.Hr,A.wL,A.CN,A.CJ,A.a3b,A.Pa,A.CW,A.Pk,A.apR,H.aqz,A.kv],x.w)
D.eiH={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hsl=new C.yI("Switch",F.pw,A.bi,0,"Tap it to turn it ON or OFF.")
D.hsh=new C.yI("Blinker",A.oC,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hsi=new C.yI("AND",D.aqD,A.co,2,"ON only when BOTH inputs are ON.")
D.bR3=new B.a0(63671,"MaterialIcons",!1)
D.hsg=new C.yI("OR",D.bR3,A.bp,2,"ON when EITHER input is ON.")
D.hsj=new C.yI("XOR",Ab.a2y,A.bT,2,"ON when the inputs are DIFFERENT.")
D.hsd=new C.yI("NAND",A.uG,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bQ9=new B.a0(63176,"MaterialIcons",!1)
D.hse=new C.yI("NOR",D.bQ9,A.hr,2,"ON only when BOTH inputs are OFF.")
D.hsf=new C.yI("NOT",Y.D0,A.cF,1,"Flips the signal: ON becomes OFF.")
D.hsk=new C.yI("Light",A.mh,A.dy,1,"Glows when its input is ON.")
D.hsm=new C.yI("Buzzer",A.oD,A.c0,1,"Beeps while its input is ON.")
D.A4=new B.bu(D.eiH,[D.hsl,D.hsh,D.hsi,D.hsg,D.hsj,D.hsd,D.hse,D.hsf,D.hsk,D.hsm],B.as("bu<n,yI>"))
D.d0g=w([A.A],x.M)
D.d0D=w([A.aA,A.aE],x.M)
D.dah=w([A.aA,A.A,A.aE],x.M)
D.dbT=w([A.aA,A.ly,A.A,A.lz,A.aE],x.M)
D.dqc=w([A.aA,A.ly,A.a6,A.aa,A.lz,A.aE],x.M)
D.dDx=new B.cZ([1,D.d0g,2,D.d0D,3,D.dah,4,A.aD9,5,D.dbT,6,D.dqc],B.as("cZ<H,ai<da>>"))
D.ele={Calm:0,Box:1,Sleep:2}
D.cIk=w([4,2,6,0],x.n)
D.cIr=w([4,4,4,4],x.n)
D.cIs=w([4,7,8,0],x.n)
D.T3=new B.bu(D.ele,[D.cIk,D.cIr,D.cIs],B.as("bu<n,ai<F>>"))
D.eiU={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xF=new C.a1u(0,"source")
D.dbk=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hyJ=new C.qs("Clock",A.oC,D.xF,A.bx,D.dbk)
D.hyF=new C.qs("Button",A.D3,D.xF,A.aS,A.Z)
D.duJ=w(["random","quick","slow"],x.s)
D.hyQ=new C.qs("Dice",A.ow,D.xF,A.bT,D.duJ)
D.bQI=new B.a0(63484,"MaterialIcons",!1)
D.F8=new C.a1u(1,"logic")
D.dzA=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hyM=new C.qs("Delay",D.bQI,D.F8,A.co,D.dzA)
D.dmw=w(["fast","mid","slow"],x.s)
D.hyR=new C.qs("Echo",A.aq7,D.F8,A.bp,D.dmw)
D.hyO=new C.qs("Every 2nd",Y.D0,D.F8,A.hr,A.Z)
D.bQn=new B.a0(63309,"MaterialIcons",!1)
D.hyL=new C.qs("Every 3rd",D.bQn,D.F8,A.aH,A.Z)
D.bSk=new B.a0(983902,"MaterialIcons",!1)
D.ca1=w(["50%","25%","75%"],x.s)
D.hyT=new C.qs("Chance",D.bSk,D.F8,A.cF,D.ca1)
D.rj=new C.a1u(2,"out")
D.hyH=new C.qs("Light",A.mh,D.rj,A.dy,A.Z)
D.hyI=new C.qs("Burst",A.kv,D.rj,A.bT,A.Z)
D.hyG=new C.qs("Ripple",A.zs,D.rj,A.ba,A.Z)
D.hyP=new C.qs("Ball",A.aqi,D.rj,A.cF,A.Z)
D.hyN=new C.qs("Comet",A.oE,D.rj,A.bp,A.Z)
D.bS4=new B.a0(983669,"MaterialIcons",!1)
D.hyS=new C.qs("Shake",D.bS4,D.rj,A.c0,A.Z)
D.hyU=new C.qs("Pop",A.Hs,D.rj,A.b4,A.Z)
D.hyK=new C.qs("Wash",A.Po,D.rj,A.pc,A.Z)
D.n7=new B.bu(D.eiU,[D.hyJ,D.hyF,D.hyQ,D.hyM,D.hyR,D.hyO,D.hyL,D.hyT,D.hyH,D.hyI,D.hyG,D.hyP,D.hyN,D.hyS,D.hyU,D.hyK],B.as("bu<n,qs>"))
D.ej6={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Aw=new C.Kc(0,"tv")
D.f9G=new C.mt("Samsung Neo QLED 8K",D.Aw,F.y9,A.aH)
D.f9x=new C.mt("LG OLED evo G5",D.Aw,A.ep,A.hn)
D.f9o=new C.mt("Sony Bravia 9",D.Aw,A.rv,A.bv)
D.f9s=new C.mt("Apple TV 4K",D.Aw,A.ea,A.bP)
D.f9p=new C.mt("Bang and Olufsen Beovision",D.Aw,F.FE,F.u4)
D.a9z=new C.Kc(1,"iphone")
D.aRR=new C.mt("iPhone 18 Pro Max",D.a9z,D.ak7,A.ch)
D.Et=new C.Kc(3,"fold")
D.bvt=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f9C=new C.mt("iPhone Fold",D.Et,D.bvt,A.b9)
D.Ax=new C.Kc(2,"android")
D.f9D=new C.mt("Samsung Galaxy S26 Ultra",D.Ax,F.Y9,A.d5)
D.bob=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f9v=new C.mt("Samsung Galaxy Z Fold7",D.Et,D.bob,A.cy)
D.f9r=new C.mt("Google Pixel 10 Pro XL",D.Ax,A.db,A.be)
D.f9z=new C.mt("Xiaomi 16 Ultra",D.Ax,A.ib,A.c8)
D.f9u=new C.mt("Huawei Mate 80 Pro Max",D.Ax,A.es,A.ay)
D.f9q=new C.mt("OPPO Find X9 Ultra",D.Ax,A.e6,A.b4)
D.f9I=new C.mt("Honor Magic V5",D.Et,A.d6,A.co)
D.f9w=new C.mt("vivo X300 Pro",D.Ax,A.fV,A.cF)
D.aRS=new C.Kc(4,"tablet")
D.f9B=new C.mt("iPad Pro M5",D.aRS,A.db,A.aH)
D.a9A=new C.Kc(5,"reader")
D.f9J=new C.mt("Kindle Scribe",D.a9A,A.e7,A.bv)
D.Ay=new C.Kc(6,"computer")
D.f9A=new C.mt("MacBook Pro M5 Max",D.Ay,A.db,A.ch)
D.f9F=new C.mt("iMac 32 inch",D.Ay,A.bP,A.cy)
D.f9y=new C.mt("Pro Display XDR 8K",D.Ay,A.ib,A.ba)
D.f9t=new C.mt("Sony Laser Projector",D.Ay,A.cr,A.dy)
D.f9E=new C.mt("Luxury car touchscreen",D.Ay,M.nx,A.ay)
D.f9H=new C.mt("Apple Vision Pro",D.Ay,A.dU,A.bp)
D.mt=new B.bu(D.ej6,[D.f9G,D.f9x,D.f9o,D.f9s,D.f9p,D.aRR,D.f9C,D.f9D,D.f9v,D.f9r,D.f9z,D.f9u,D.f9q,D.f9I,D.f9w,D.f9B,D.f9J,D.f9A,D.f9F,D.f9y,D.f9t,D.f9E,D.f9H],B.as("bu<n,mt>"))
D.eji={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.byh=new C.fQ(20,4,13,!1)
D.byI=new C.fQ(14,5,13.5,!1)
D.byz=new C.fQ(9,2.4,10,!1)
D.byN=new C.fQ(7,5,12.5,!1)
D.byC=new C.fQ(8,3.5,12,!1)
D.byd=new C.fQ(15,2,6,!1)
D.byL=new C.fQ(45,6,13.5,!0)
D.byt=new C.fQ(10,8,13.5,!1)
D.byl=new C.fQ(25,3,12,!0)
D.byr=new C.fQ(35,4,12,!0)
D.bys=new C.fQ(40,4.5,9.5,!0)
D.byu=new C.fQ(55,3,9,!0)
D.bye=new C.fQ(18,3,9,!1)
D.byK=new C.fQ(22,4,13.5,!1)
D.byD=new C.fQ(16,5,13.5,!1)
D.byp=new C.fQ(30,4,9,!0)
D.byW=new C.fQ(5,3.5,13,!1)
D.byx=new C.fQ(25,3,13.5,!0)
D.byG=new C.fQ(14,2.5,9,!1)
D.byw=new C.fQ(6,6,13,!1)
D.byO=new C.fQ(30,1.2,5,!0)
D.byV=new C.fQ(35,3,4.5,!0)
D.byR=new C.fQ(20,4.5,7.5,!0)
D.byv=new C.fQ(55,5.5,13.5,!0)
D.byc=new C.fQ(45,5.5,13.5,!0)
D.byH=new C.fQ(40,5.5,13.5,!0)
D.byU=new C.fQ(60,6,13.5,!0)
D.akC=new C.fQ(28,4,7,!0)
D.GA=new C.fQ(25,4,7,!0)
D.byo=new C.fQ(30,4,7,!0)
D.byj=new C.fQ(22,4,7,!0)
D.byk=new C.fQ(24,4,7,!0)
D.byy=new C.fQ(60,3,5.5,!0)
D.byf=new C.fQ(18,9,14,!0)
D.bym=new C.fQ(25,9,14,!0)
D.akD=new C.fQ(30,8,14,!0)
D.byi=new C.fQ(20,8,14,!0)
D.byq=new C.fQ(30,9,14,!0)
D.byP=new C.fQ(22,5,9.5,!0)
D.byg=new C.fQ(30,2.5,10.5,!0)
D.byE=new C.fQ(50,5.5,13.5,!0)
D.byT=new C.fQ(12,2,9.5,!1)
D.byB=new C.fQ(16,1.3,9.5,!0)
D.byM=new C.fQ(40,2.5,7,!0)
D.byS=new C.fQ(60,1.2,4.8,!0)
D.byQ=new C.fQ(18,5,13.5,!0)
D.byJ=new C.fQ(8,2,9.5,!1)
D.byA=new C.fQ(12,2.5,8,!1)
D.byn=new C.fQ(20,3.5,13.5,!0)
D.byF=new C.fQ(3.5,3,13,!1)
D.A5=new B.bu(D.eji,[D.byh,D.byI,D.byz,D.byN,D.byC,D.byd,D.byL,D.byt,D.byl,D.byr,D.bys,D.byu,D.bye,D.byK,D.byD,D.byp,D.byW,D.byx,D.byG,D.byw,D.byO,D.byV,D.byR,D.byv,D.byc,D.byH,D.byU,D.akC,D.GA,D.byo,D.GA,D.byj,D.GA,D.byk,D.akC,D.GA,D.byy,D.byf,D.bym,D.akD,D.byi,D.byq,D.byP,D.byg,D.byE,D.byT,D.byB,D.byM,D.byS,D.GA,D.akD,D.byQ,D.byJ,D.byA,D.byn,D.byF],B.as("bu<n,fQ>"))
D.eiR={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eZl=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eEg=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eEb=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eQI=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eRF=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eQE=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eCh=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eOz=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eZt=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eS0=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eHF=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eBW=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eGE=new B.y("Movement","They pull your legs together and help you balance.")
D.eIC=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eEp=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eWM=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eXW=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eOh=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eXF=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eMS=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eS9=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eC2=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eIZ=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eRO=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eNd=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eXN=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eQ8=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eCf=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eSK=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eWp=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eUw=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eAh=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.ePR=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ePV=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eJJ=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eED=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eIq=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eOK=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eVl=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eZq=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eS6=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eA_=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eOW=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eAQ=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eVB=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eWI=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ePn=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eVQ=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eC4=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eXj=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eG_=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eUZ=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eJn=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eN7=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eSq=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eXt=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eXl=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eXp=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eNF=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eTi=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eUt=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eX5=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ePm=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eLr=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eK9=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ePM=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eSj=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eLY=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eMF=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eGo=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eWE=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eHe=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eAN=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eJI=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eAI=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eF4=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eJN=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eHo=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eSG=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eIF=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eZ7=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eKj=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eNy=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eQg=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eHx=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eHg=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dEE=new B.bu(D.eiR,[D.eZl,D.eEg,D.eEb,D.eQI,D.eRF,D.eQE,D.eCh,D.eOz,D.eZt,D.eS0,D.eHF,D.eBW,D.eGE,D.eIC,D.eEp,D.eWM,D.eXW,D.eOh,D.eXF,D.eMS,D.eS9,D.eC2,D.eIZ,D.eRO,D.eNd,D.eXN,D.eQ8,D.eCf,D.eSK,D.eWp,D.eUw,D.eAh,D.ePR,D.ePV,D.eJJ,D.eED,D.eIq,D.eOK,D.eVl,D.eZq,D.eS6,D.eA_,D.eOW,D.eAQ,D.eVB,D.eWI,D.ePn,D.eVQ,D.eC4,D.eXj,D.eG_,D.eUZ,D.eJn,D.eN7,D.eSq,D.eXt,D.eXl,D.eXp,D.eNF,D.eTi,D.eUt,D.eX5,D.ePm,D.eLr,D.eK9,D.ePM,D.eSj,D.eLY,D.eMF,D.eGo,D.eWE,D.eHe,D.eAN,D.eJI,D.eAI,D.eF4,D.eJN,D.eHo,D.eSG,D.eIF,D.eZ7,D.eKj,D.eNy,D.eQg,D.eHx,D.eHg],B.as("bu<n,+(n,n)>"))
D.dLZ=new C.Vw(null)
D.dMb=new C.Vx(null)
D.dOe=new C.VB(null)
D.dP2=new C.Wb(null)
D.dP6=new C.Wc(null)
D.dPF=new C.Wk(null)
D.dTq=new C.WT(null)
D.dU6=new C.WU(null)
D.dYj=new C.WZ(null)
D.edc=new C.X_(null)
D.edf=new C.X3(null)
D.efp=new C.Xn(null)
D.efq=new C.a9j(null)
D.eht=new C.Xw(null)
D.elr=new B.o(0,118)
D.aLh=new B.o(0,13)
D.els=new B.o(0,17)
D.elv=new B.o(0,330)
D.elB=new B.o(0,-13)
D.elC=new B.o(0,-17)
D.elD=new B.o(0,-18)
D.elE=new B.o(0,-19)
D.elG=new B.o(0,-28)
D.elI=new B.o(0,-31)
D.elJ=new B.o(0,-32)
D.elP=new B.o(-9.5,-11)
D.elS=new B.o(10,20)
D.elV=new B.o(10,-13)
D.elX=new B.o(10,-22)
D.elY=new B.o(10,-4)
D.em1=new B.o(11,0)
D.a8n=new B.o(11,8)
D.em7=new B.o(12,2)
D.em8=new B.o(14,0)
D.em9=new B.o(14,12)
D.aLt=new B.o(14,8)
D.ema=new B.o(14,-17)
D.aLv=new B.o(14,-3)
D.aLw=new B.o(14,-4)
D.emd=new B.o(15,0)
D.eme=new B.o(15,-12)
D.emh=new B.o(16,-8)
D.emi=new B.o(18,14)
D.emj=new B.o(18,-12)
D.aLB=new B.o(20,0)
D.emr=new B.o(20,15)
D.ems=new B.o(20,-17)
D.emt=new B.o(20,-3)
D.emu=new B.o(21,8)
D.emy=new B.o(22,10)
D.aLD=new B.o(22,8)
D.emz=new B.o(24,0)
D.emA=new B.o(24,2)
D.emD=new B.o(24,-18)
D.emE=new B.o(24,-22)
D.emI=new B.o(25,8)
D.emJ=new B.o(26,0)
D.emN=new B.o(28,-30)
D.emU=new B.o(30,18)
D.emV=new B.o(30,2)
D.emY=new B.o(31,19)
D.en_=new B.o(32,0)
D.aLH=new B.o(34,0)
D.aLI=new B.o(34,-32)
D.Jy=new B.o(36,0)
D.enc=new B.o(3,-1)
D.enf=new B.o(40,3)
D.ent=new B.o(4,11)
D.enw=new B.o(4,-2)
D.enB=new B.o(5,17)
D.enC=new B.o(5,6)
D.enH=new B.o(6,11)
D.enN=new B.o(8,7)
D.enO=new B.o(8,-10)
D.enP=new B.o(8,-14)
D.aLN=new B.o(9,0)
D.enZ=new B.o(-20.5,-17.6)
D.eo_=new B.o(-9,18.5)
D.eo2=new B.o(-2.6,-1)
D.eob=new B.o(2.6,1)
D.eoi=new B.o(-9,12.2)
D.eoC=new B.o(-9,20.5)
D.eoY=new B.o(-10,0)
D.eoZ=new B.o(-10,12)
D.aLV=new B.o(-10,4)
D.ep2=new B.o(-11,0)
D.ep5=new B.o(-11,-2)
D.ep9=new B.o(-13,-5)
D.epa=new B.o(-14,0)
D.epb=new B.o(-14,13)
D.epc=new B.o(-14,2)
D.epd=new B.o(-14,-12)
D.epe=new B.o(-14,-19)
D.epg=new B.o(-14,-23)
D.eph=new B.o(-15,6)
D.epk=new B.o(-16,14)
D.epm=new B.o(-16,-8)
D.epn=new B.o(-17,10)
D.epo=new B.o(-17,-18)
D.epp=new B.o(-17,-8)
D.epr=new B.o(-18,20)
D.eps=new B.o(-18,-9)
D.aLX=new B.o(-20,0)
D.epu=new B.o(-20,16)
D.epv=new B.o(-20,-9)
D.TZ=new B.o(-22,8)
D.epw=new B.o(-22,-10)
D.epx=new B.o(-22,-11)
D.epy=new B.o(-24,10)
D.epz=new B.o(-24,11)
D.epA=new B.o(-24,14)
D.epB=new B.o(-24,-22)
D.epD=new B.o(-25,-11)
D.epE=new B.o(-26,0)
D.epF=new B.o(-26,-18)
D.epG=new B.o(-2,9)
D.epH=new B.o(-2,-10)
D.epI=new B.o(-2,-20)
D.epL=new B.o(-2,-9)
D.epN=new B.o(-32,0)
D.aLZ=new B.o(-34,0)
D.epS=new B.o(-40,3)
D.epU=new B.o(-4,11)
D.epV=new B.o(-4,-17)
D.epW=new B.o(-4,-2)
D.eq_=new B.o(-5,0)
D.eq0=new B.o(-5,20)
D.eq1=new B.o(-5,6)
D.eq2=new B.o(-6,26)
D.eq3=new B.o(-6,6)
D.eq4=new B.o(-6,-42)
D.eq6=new B.o(-7,-19)
D.eq7=new B.o(-7,-24)
D.eqa=new B.o(-8,-9)
D.a8w=new B.o(-9,0)
D.eqb=new B.o(-9,1)
D.eqd=new B.o(-9,-23)
D.fH3=new B.B("Thinking\u2026",null,A.hk,null,null,null,null,null,null,null,null,null)
D.erf=new B.D(A.jE,D.fH3,null)
D.fXW=new B.B("Start from a ready-made board",null,A.fD,null,null,null,null,null,null,null,null,null)
D.ers=new B.D(A3.wl,D.fXW,null)
D.bGm=new B.R(4,0,4,14)
D.fCi=new B.G(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI3=new B.B("Games and little helpers for a spare minute.",null,D.fCi,null,null,null,null,null,null,null,null,null)
D.erE=new B.D(D.bGm,D.fI3,null)
D.dn6=w([A.iE,A.br],x.O)
D.aQR=new B.bY(A.A,0.5,A.x,null,0,D.dn6,null,null)
D.eyQ=new B.bY(A.A,0.5,A.x,null,0,D.aCR,null,null)
D.ddJ=w([A.c,A.bK],x.O)
D.eyS=new B.bY(A.A,0.5,A.x,null,0,D.ddJ,null,null)
D.dvO=w([A.bP,A.dU],x.O)
D.aQS=new B.bY(A.A,0.5,A.x,null,0,D.dvO,null,null)
D.cSj=w([A.c,A.bP],x.O)
D.eyW=new B.bY(A.tP,0.5,A.x,null,0,D.cSj,null,null)
D.bvx=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dtM=w([A.fn,D.bvx],x.O)
D.ez0=new B.bY(A.tP,0.5,A.x,null,0,D.dtM,null,null)
D.cLu=w([A.db,A.cr],x.O)
D.ez1=new B.bY(A.A,0.5,A.x,null,0,D.cLu,null,null)
D.d_e=w([A.fy,A.aS,A.cZ],x.O)
D.ez4=new B.bY(A.tP,0.5,A.x,null,0,D.d_e,null,null)
D.dnM=w([A.dU,M.nx],x.O)
D.ez5=new B.bY(A.tP,0.5,A.x,null,0,D.dnM,null,null)
D.eza=new B.bY(A.A,0.5,A.x,null,0,D.az3,null,null)
D.dwD=w([A.dU,A.i5],x.O)
D.ezi=new B.bY(A.A,0.5,A.x,null,0,D.dwD,null,null)
D.aQW=new B.aN(9,9)
D.ezq=new B.aN(1.4,1.4)
D.f6d=new B.a1(10,-8,18,-2)
D.f6e=new B.a1(14,-14,20,14)
D.f6g=new B.a1(20,-2,30,2)
D.f6l=new B.a1(4,-13,30,-3)
D.f6r=new B.a1(8,-7,12,7)
D.f6D=new B.a1(-12,12,12,19)
D.f6E=new B.a1(-12,14,12,22)
D.f6F=new B.a1(-12,-22,12,8)
D.f6G=new B.a1(-12,-25,12,19)
D.f6H=new B.a1(-12,-26,12,-6)
D.f6I=new B.a1(-12,-4,12,14)
D.f6K=new B.a1(-14,20,14,24)
D.f6L=new B.a1(-14,6,14,10)
D.f6M=new B.a1(-14,-17,14,15)
D.f6N=new B.a1(-14,-26,14,18)
D.f6O=new B.a1(-14,-4,14,20)
D.f6Q=new B.a1(-15,-29,15,25)
D.f6R=new B.a1(-16,-16,16,16)
D.f6U=new B.a1(-16,-22,-9,18)
D.f6V=new B.a1(-16,-24,16,-10)
D.f6X=new B.a1(-16,-2,16,20)
D.f6Z=new B.a1(-18,20,18,24)
D.f7_=new B.a1(-18,-18,18,20)
D.f70=new B.a1(-20,12,20,22)
D.f71=new B.a1(-20,-28,20,26)
D.f72=new B.a1(-22,14,22,18)
D.aRy=new B.a1(-22,-26,22,24)
D.f73=new B.a1(-22,-3,22,3)
D.f74=new B.a1(-22,-4,22,12)
D.f76=new B.a1(-24,-12,10,22)
D.f77=new B.a1(-24,-14,22,8)
D.f78=new B.a1(-24,-6,24,20)
D.aRz=new B.a1(-24,-9,24,9)
D.f79=new B.a1(-25,14,25,19)
D.f7a=new B.a1(-26,-14,14,8)
D.f7b=new B.a1(-26,-4,26,20)
D.f7c=new B.a1(-26,-6,4,6)
D.aRA=new B.a1(-28,-13,28,13)
D.f7d=new B.a1(-28,-16,28,16)
D.f7e=new B.a1(-28,-16,28,8)
D.f7f=new B.a1(-28,-22,28,22)
D.f7g=new B.a1(-30,-12,30,14)
D.f7h=new B.a1(-30,-14,0,14)
D.f7i=new B.a1(-30,-18,30,20)
D.f7j=new B.a1(-30,-28,30,14)
D.f7k=new B.a1(-30,-2,30,18)
D.f7l=new B.a1(-30,-4,30,18)
D.f7m=new B.a1(-32,-17,32,17)
D.f7n=new B.a1(-32,-28,32,18)
D.f7o=new B.a1(-33,-21,33,17)
D.f7p=new B.a1(-34,14,34,26)
D.a9q=new B.a1(-34,-18,34,18)
D.f7q=new B.a1(-34,-4,34,7)
D.f7r=new B.a1(-36,-24,36,20)
D.f7s=new B.a1(-38,-22,38,22)
D.f7u=new B.a1(-3,12,3,22)
D.f7v=new B.a1(-3,5,3,15)
D.f7z=new B.a1(-46,-34,46,28)
D.f7B=new B.a1(-48,-3,48,3)
D.f7E=new B.a1(-6,18,24,24)
D.f7F=new B.a1(-6,5,6,12)
D.f7G=new B.a1(-6,-22,6,-15)
D.f7K=new B.a1(-9,-16,9,22)
D.f7L=new B.a1(-4.5,-24,4.5,-21.2)
D.f7N=new B.a1(14,-9,17.5,9)
D.ekD={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSG=new B.de(D.ekD,5,x.Q)
D.ek7={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fbo=new B.de(D.ek7,10,x.Q)
D.fdI=new B.av(24,44)
D.fe5=new B.av(54,38)
D.fec=new B.av(66,38)
D.bdX=new B.fk(2,null,null,null,null,A.bp,null,null,null,null)
D.fff=new B.a5(16,16,D.bdX,null)
D.aTI=new B.hG(3,12,12,0.82,null)
D.fs_=new B.G(!0,A0.xZ,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmv=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cJ,null,null,null,null,null,null,D.fs_)
D.fx2=new B.G(!0,A.kK,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmB=new B.en("AI",null,null,A.cJ,null,null,null,null,null,null,D.fx2)
D.fmT=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnq=new B.G(!0,A.bo,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new B.G(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new B.G(!0,A.bW,null,null,null,null,11,A.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foo=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foG=new B.G(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpb=new B.G(!0,A.aT,null,null,null,null,12,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new B.cU(A.hu,A.dG,6)
D.dgM=w([D.fc6],B.as("O<cU>"))
D.fq9=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dgM,null,null,null)
D.fqe=new B.G(!0,A.er,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new B.G(!0,A.bW,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqW=new B.G(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr3=new B.G(!0,A.aD,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs3=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new B.G(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new B.G(!0,A.aS,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new B.G(!0,A.c,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDc,null,null,null)
D.ftf=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new B.G(!0,A.uh,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvJ=new B.G(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new B.G(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new B.G(!0,A.mT,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVS=new B.G(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxU=new B.G(!0,A.ha,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyc=new B.G(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyJ=new B.G(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAd=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAJ=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB0=new B.G(!0,A.aS,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBm=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBp=new B.G(!0,A.aS,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new B.G(!0,A.uh,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCU=new B.G(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqm=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDi=new B.B("\u26a0\ufe0f ",null,D.fqm,null,null,null,null,null,null,null,null,null)
D.fDv=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AR,null,null,null,null,null,null,null,null,null)
D.fF7=new B.B("Pick one, then change it and see what happens.",null,A.AR,null,null,null,null,null,null,null,null,null)
D.frv=new B.G(!0,A.ab,null,null,null,null,null,A.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.frv,null,null,null,null,null,null,null,null,null)
D.fHE=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fIh=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h_,null,null,null,null,null,null,null,null,null)
D.fIU=new B.B("Make it yours",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fM5=new B.B("5G",null,X.aVc,null,null,null,null,null,null,null,null,null)
D.fN7=new B.B("Pick how big the screen is on the board",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fyu=new B.G(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNj=new B.B("WHAT HAPPENS",null,D.fyu,null,null,null,null,null,null,null,null,null)
D.fP4=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fPK=new B.B("Change the words and pictures on the three slabs.",null,A.AR,null,null,null,null,null,null,null,null,null)
D.fPX=new B.B("All the parts and wires will be removed.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fQg=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fS4=new B.B("\ud83c\udfaf Challenges",null,A.di,null,null,null,null,null,null,null,null,null)
D.fSD=new B.B("Remove this part",null,W.aUN,null,null,null,null,null,null,null,null,null)
D.fSX=new B.B("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fxV=new B.G(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTe=new B.B("How the Lab works",null,D.fxV,null,null,null,null,null,null,null,null,null)
D.foT=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTA=new B.B("Electronics Lab",null,D.foT,null,null,null,null,A.a2,null,1,null,null)
D.fTE=new B.B("?",null,O.aWn,null,null,null,null,null,null,null,null,null)
D.fUX=new B.B("Ready-made circuits",null,A.di,null,null,null,null,null,null,null,null,null)
D.fVA=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fB4=new B.G(!0,A.aS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ3=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fB4,null,null,null,null,null,null,null,null,null)
D.h_g=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUL,null,null,null,null,null,null,null,null,null)
D.h_L=new B.B("NGMY",null,A.vB,null,null,null,null,null,null,null,null,null)
D.h_Y=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VH,null,null,null,null,null,null,null,null,null)
D.h0m=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lV,null,null,null,null,null,null,null,null,null)
D.h1q=new B.B("TOOLBOX",null,A9.aaO,null,null,null,null,null,null,null,null,null)
D.hq6=new B.bJ("body-loading",x.k)})();(function staticFields(){$.htS=null
$.htO=null
$.htP=null
$.hA5=0
$.i28=B.T(x.N,B.as("iH"))
$.i2H=B.T(x.N,B.as("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iB_","bGD",()=>{var v="led"
return B.a([C.azX("Both together","Make the light glow only when BOTH switches are ON.",2,new C.frW(),v),C.azX("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.frX(),v),C.azX("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.frY(),v),C.azX("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fs4(),v),C.azX("Not both","Make the light go OFF only when both switches are ON.",2,new C.fs5(),v),C.azX("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fs6(),"buzzer")],B.as("O<bcU>"))})
w($,"iBr","bGE",()=>B.a([C.Ra("UNIVERSE","Earth, space and gravity",A.PJ,A.aH,new C.fsm()),C.Ra("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.CK,A.aH,new C.fsn()),C.Ra("DISCOVERY LAB","Body Explorer: a real 3D human",D.bPA,A.b4,new C.fso()),C.Ra("TOOLBOX","Converter, clock, games",H.ape,A.cF,new C.fsp()),C.Ra("REACTION LAB","Wire parts together",A.D7,A.bx,new C.fsq()),C.Ra("SPARK PAINTER","Paint with light",A.P8,A.bT,new C.fsr()),C.Ra("ROCKET LANDER","Land softly on the pad",A.oE,A.aH,new C.fss()),C.Ra("TITLE ANIMATOR","Make a moving title",A.wN,A.bi,new C.fst()),C.Ra("CIRCUIT LAB","Connect logic, learn it",A.a2T,A.co,new C.fsu())],B.as("O<bv8>")))
w($,"iD5","qC",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sn[v]
t.n(0,u.a,u)}return t})
w($,"iB0","aiZ",()=>B.a([C.Go("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fs7()),C.Go("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fs8()),C.Go("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fs9()),C.Go("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fsa()),C.Go("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fsb()),C.Go("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.frZ()),C.Go("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fs_()),C.Go("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fs0()),C.Go("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fs1()),C.Go("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fs2()),C.Go("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fs3())],B.as("O<bcV>")))
w($,"iBt","hJ5",()=>B.a([C.a20("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aS,A.c8,new C.fsC()),C.a20("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bC,new C.fsD()),C.a20("Breathe","Calm down in a minute","\ud83e\udee7",A.hr,A.cy,new C.fsE()),C.a20("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b9,new C.fsF()),C.a20("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ch,new C.fsG()),C.a20("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bi,A.be,new C.fsH()),C.a20("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b2,new C.fsI()),C.a20("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bp,A.aF,new C.fsJ())],B.as("O<bws>")))})()};
(a=>{a["fxnTtLrr4jV1UV4r3r1IqxfneuQ="]=a.current})($__dart_deferred_initializers__);