((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Z,A_,A5,A0,S,A6,A7,A8,A1,A9,A2,N,Aa,Ab,Ac,Ad,T,O,U,Ae,Af,V,W,E,K,G,I,Ag,Ah,P,Ai,Aj,R,Ak,Q,Al,L,F,M,C={
bCd(d){return C.i7Q(d)},
i7Q(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rh(B.nm(""),d,A.i4,null,null).dg(0,A.a_V),$async$bCd)
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
return B.i($async$bCd,v)},
ik2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.S1[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fh(D.S1,new C.fKR())
if(w==null)w=A.d.gH(D.S1)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qF().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ali(w.a,w.b,m,w,s,!1)},
idy(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sp,new C.fzw(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
isD(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p7(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aQ(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qF().al(0,p)||J.eI(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dys[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dD(J.t(g,3))),0,1)
if(J.eI(s,f)&&J.eI(s,e)&&!J.z(f,e))J.c5(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cr:a0)
while(a0.C()){a2=a0.gR(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mY(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ali(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iiw(d){var w,v,u=C.hm2()
d.B(u)
for(w=0;w<60;++w)u.vN(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fHf(u))&&!A.d.cD(v,new C.fHg())},
iiv(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qF().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dwI,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i6a(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ik1(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qF().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sp[u]
if(A.d.aV(w,new C.fKO(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fKP(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cF(w,0,new C.fKQ())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qF().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ali:function ali(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKR:function fKR(){},
fzw:function fzw(){},
fHf:function fHf(d){this.a=d},
fHg:function fHg(){},
fKO:function fKO(d){this.a=d},
fKP:function fKP(d){this.a=d},
fKQ:function fKQ(){},
WQ:function WQ(d,e){this.c=d
this.a=e},
bmE:function bmE(d,e,f,g,h){var _=this
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
eju:function eju(d){this.a=d},
ejv:function ejv(d,e,f){this.a=d
this.b=e
this.c=f},
ejw:function ejw(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejI:function ejI(d,e){this.a=d
this.b=e},
ejD:function ejD(d){this.a=d},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e,f){this.a=d
this.b=e
this.c=f},
ejE:function ejE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejz:function ejz(d){this.a=d},
ejA:function ejA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejF:function ejF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejy:function ejy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejG:function ejG(d,e){this.a=d
this.b=e},
ejx:function ejx(d,e){this.a=d
this.b=e},
ejL:function ejL(d){this.a=d},
ejK:function ejK(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejN:function ejN(d,e){this.a=d
this.b=e},
ejO:function ejO(d,e){this.a=d
this.b=e},
ejP:function ejP(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
bCy(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fsm,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hzU(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.as(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.AX,A.K,w,w),A.aB,B.bW(A.fU,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bhB,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vr:function vr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xc:function Xc(d){this.a=d},
aGg:function aGg(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h6$=h
_.m7$=i
_.fb$=j
_.h7$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
eyO:function eyO(){},
ez7:function ez7(d){this.a=d},
ez6:function ez6(d,e){this.a=d
this.b=e},
ez8:function ez8(){},
ez9:function ez9(){},
eyQ:function eyQ(d,e,f){this.a=d
this.b=e
this.c=f},
eyP:function eyP(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyC:function eyC(d){this.a=d},
ez0:function ez0(d,e){this.a=d
this.b=e},
eyW:function eyW(d){this.a=d},
eyX:function eyX(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
ez_:function ez_(d){this.a=d},
eyR:function eyR(d){this.a=d},
ez1:function ez1(d,e){this.a=d
this.b=e},
eyV:function eyV(d,e){this.a=d
this.b=e},
ez2:function ez2(d){this.a=d},
ez3:function ez3(d){this.a=d},
ez4:function ez4(d){this.a=d},
ez5:function ez5(d){this.a=d},
eyU:function eyU(d){this.a=d},
bjx:function bjx(d,e){this.b=d
this.a=e},
aOf:function aOf(){},
bAd:function bAd(){},
hv3(){var w=$.hv1
return w==null?$.hv1=$.rk().cWe("assets/data/three.min.js"):w},
hv2(){var w=$.hv0
return w==null?$.hv0=C.cPf():w},
cPf(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cPf=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jp(0,"assets/data/body3d.bin"),$async$cPf)
case 3:d=a1
$.hv4=J.eE(A.dS.gaU(d),d.byteOffset,d.byteLength)
t=B.a4A(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jK(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dkG[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4u(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b4A))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcu(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cPf,v)},
c6G(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6G=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.hv2(),C.hv3()],x.D),x.K),$async$c6G)
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
return B.i($async$c6G,v)},
aUk:function aUk(d,e,f){this.a=d
this.b=e
this.c=f},
a4u:function a4u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcu:function bcu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VG:function VG(d){this.a=d},
aEK:function aEK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h6$=s
_.m7$=t
_.fb$=u
_.h7$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dPD:function dPD(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPg:function dPg(){},
dPE:function dPE(){},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPj:function dPj(){},
dPk:function dPk(d){this.a=d},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPa:function dPa(d,e,f){this.a=d
this.b=e
this.c=f},
dPb:function dPb(d){this.a=d},
dPc:function dPc(d){this.a=d},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPq:function dPq(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPn:function dPn(d){this.a=d},
aNi:function aNi(){},
aNj:function aNj(){},
c6H:function c6H(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6I:function c6I(d,e){this.a=d
this.b=e},
c6J:function c6J(d){this.a=d},
aAa(d,e,f,g,h){return new C.bdf(d,e,f,g,h)},
hcc(d,e,f,g,h,i){return $.i3s.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWa(d,e,f,i,g,h))},
yL:function yL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D3:function D3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nL:function nL(d,e,f){this.a=d
this.b=e
this.c=f},
bdf:function bdf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsM:function fsM(){},
fsN:function fsN(){},
fsO:function fsO(){},
fsV:function fsV(){},
fsW:function fsW(){},
fsX:function fsX(){},
VN:function VN(d){this.a=d},
aEM:function aEM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h6$=m
_.m7$=n
_.fb$=o
_.h7$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dRi:function dRi(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dR_:function dR_(){},
dRj:function dRj(){},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e,f){this.a=d
this.b=e
this.c=f},
dQQ:function dQQ(){},
dQR:function dQR(){},
dQS:function dQS(d){this.a=d},
dQT:function dQT(d,e){this.a=d
this.b=e},
dQU:function dQU(d,e,f){this.a=d
this.b=e
this.c=f},
dR1:function dR1(){},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dQP:function dQP(d,e,f){this.a=d
this.b=e
this.c=f},
dRc:function dRc(d){this.a=d},
dRb:function dRb(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRa:function dRa(d){this.a=d},
dR8:function dR8(d){this.a=d},
dR9:function dR9(d){this.a=d},
dR7:function dR7(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR6:function dR6(d){this.a=d},
dRe:function dRe(d,e){this.a=d
this.b=e},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dR5:function dR5(d){this.a=d},
dRh:function dRh(d,e){this.a=d
this.b=e},
bdy:function bdy(d,e){this.b=d
this.a=e},
cWa:function cWa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNn:function aNn(){},
bzY:function bzY(){},
hV8(){return new C.Oi(null)},
Rl(d,e,f,g,h){return new C.bvv(d,e,f,g,h)},
btS(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hcK(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Oi:function Oi(d){this.a=d},
Lk:function Lk(d,e){this.a=d
this.b=e},
Bb:function Bb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF2:function aF2(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXt:function dXt(d){this.a=d},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXv:function dXv(d){this.a=d},
bvv:function bvv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftc:function ftc(){},
ftd:function ftd(){},
fte:function fte(){},
ftf:function ftf(){},
ftg:function ftg(){},
fth:function fth(){},
fti:function fti(){},
ftj:function ftj(){},
ftk:function ftk(){},
btT:function btT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8B:function f8B(d){this.a=d},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8y:function f8y(d){this.a=d},
f8C:function f8C(d){this.a=d},
f8z:function f8z(d,e){this.a=d
this.b=e},
agf:function agf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Re:function Re(d,e,f,g,h,i,j,k,l,m){var _=this
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
buT:function buT(d,e){this.b=d
this.a=e},
buo:function buo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcc:function bcc(d,e){this.b=d
this.a=e},
aJh:function aJh(d,e){this.c=d
this.a=e},
aJi:function aJi(d,e,f){var _=this
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
f8h:function f8h(d){this.a=d},
f8g:function f8g(d){this.a=d},
f8f:function f8f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8e:function f8e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8c:function f8c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8b:function f8b(d,e,f){this.a=d
this.b=e
this.c=f},
f8d:function f8d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8a:function f8a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8p:function f8p(d){this.a=d},
f8o:function f8o(d){this.a=d},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8r:function f8r(d,e){this.a=d
this.b=e},
f8s:function f8s(d,e){this.a=d
this.b=e},
f8n:function f8n(d,e,f){this.a=d
this.b=e
this.c=f},
f8t:function f8t(d,e,f){this.a=d
this.b=e
this.c=f},
f8m:function f8m(d){this.a=d},
f8i:function f8i(d){this.a=d},
f8u:function f8u(d){this.a=d},
f8v:function f8v(d){this.a=d},
f8l:function f8l(d,e){this.a=d
this.b=e},
f8w:function f8w(d,e){this.a=d
this.b=e},
f8k:function f8k(d,e){this.a=d
this.b=e},
f8x:function f8x(d,e){this.a=d
this.b=e},
f8j:function f8j(d,e){this.a=d
this.b=e},
f88:function f88(){},
f89:function f89(){},
btu:function btu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsU:function bsU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcT:function bcT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsW:function bsW(d,e,f){this.b=d
this.c=e
this.a=f},
bwZ:function bwZ(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aP4:function aP4(){},
hBl(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.p(w,0)),u=e.aJ(0,new B.p(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjw(d,e,f,g,h,i){return $.i40.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.drk(d,e,f,i,g,h))},
a1E:function a1E(d,e){this.a=d
this.b=e},
qu:function qu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rb:function rb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D7:function D7(d,e){this.a=d
this.b=e},
a_D:function a_D(d,e){this.a=d
this.b=e},
ag3:function ag3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1R:function a1R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Di:function Di(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
add:function add(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af9:function af9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bju:function bju(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.by$=_.bL$=0},
dro:function dro(d){this.a=d},
drp:function drp(d){this.a=d},
drl:function drl(d,e){this.a=d
this.b=e},
drm:function drm(d){this.a=d},
drn:function drn(d){this.a=d},
drq:function drq(d){this.a=d},
drr:function drr(d){this.a=d},
drs:function drs(d){this.a=d},
drt:function drt(d){this.a=d},
dru:function dru(d){this.a=d},
drv:function drv(d){this.a=d},
drw:function drw(d){this.a=d},
drx:function drx(d){this.a=d},
dry:function dry(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xb:function Xb(d){this.a=d},
aGf:function aGf(d,e,f,g,h,i,j){var _=this
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
_.bw$=i
_.a9$=j
_.c=_.a=null},
ey8:function ey8(d){this.a=d},
exY:function exY(d){this.a=d},
ey_:function ey_(){},
ey0:function ey0(){},
ey3:function ey3(){},
ey4:function ey4(d,e,f){this.a=d
this.b=e
this.c=f},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey1:function ey1(){},
ey2:function ey2(d){this.a=d},
eyy:function eyy(d){this.a=d},
ey7:function ey7(){},
exU:function exU(d){this.a=d},
eya:function eya(d){this.a=d},
ey9:function ey9(d){this.a=d},
eyc:function eyc(){},
eyb:function eyb(d,e){this.a=d
this.b=e},
exX:function exX(){},
exV:function exV(d){this.a=d},
exW:function exW(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyx:function eyx(d){this.a=d},
eym:function eym(d,e){this.a=d
this.b=e},
eyu:function eyu(d){this.a=d},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyp:function eyp(d){this.a=d},
exZ:function exZ(){},
eyi:function eyi(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyf:function eyf(d){this.a=d},
eye:function eye(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
bjv:function bjv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
drk:function drk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOd:function aOd(){},
hGQ(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcK()*0.1
return new B.p((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hm2(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5D(w,v,u,A.cQ,B.T(x.N,x.y))},
hOP(d,e,f){var w=d.c,v=e===0?-1:1
return new B.p(w*f.a+v*C.hm3(d),d.d*f.b)},
hm3(d){return 42+(D.mt.al(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u0:function u0(d,e,f,g){var _=this
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
abC:function abC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acJ:function acJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5D:function a5D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQ1:function bQ1(){},
bQc:function bQc(d){this.a=d},
bQ7:function bQ7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQd:function bQd(d){this.a=d},
bQe:function bQe(d){this.a=d},
bQg:function bQg(d){this.a=d},
bQh:function bQh(d){this.a=d},
bQf:function bQf(d){this.a=d},
bQi:function bQi(d,e,f){this.a=d
this.b=e
this.c=f},
bQj:function bQj(d){this.a=d},
bQ3:function bQ3(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
bQ2:function bQ2(d){this.a=d},
bQ5:function bQ5(d,e,f){this.a=d
this.b=e
this.c=f},
bQ6:function bQ6(d){this.a=d},
bQ0:function bQ0(d){this.a=d},
bQk:function bQk(d,e){this.a=d
this.b=e},
bQ8:function bQ8(d,e){this.a=d
this.b=e},
bQb:function bQb(d){this.a=d},
bQa:function bQa(d){this.a=d},
bQ9:function bQ9(d){this.a=d},
ak6:function ak6(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKo:function bKo(){},
bKp:function bKp(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctZ:function ctZ(d){this.a=d},
isx(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fWM(),c8=new C.fWO(),c9=new C.fWP(),d0=new C.fWN(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.an(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.cd,A.bN))
d2.ah(D.eqD,D.enx,c8.$2(A.e_,1.4))
d2.ah(D.enc,D.ena,c8.$2(A.bw,2.4))
d2.ah(D.end,U.aLL,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fI.j(0.5))
d1.y=A.H6
d2.N(D.emT,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.p(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.an(c9.$4(-22,-26,44,50),d0.$3(D.aRT,A.aS,A.cx))
d2.N(A.cL,16,c7.$1(A.bw))
d2.N(A.cL,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.bp(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.eqv,2.4,c7.$1(c6?A.bd:A.an))
d2.N(D.ern,2.4,c7.$1(A.an))
return!0
case"blender":d2.an(c9.$5(-14,14,28,12,4),c7.$1(A.cS))
d1=$.S().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bt())
d2.af(s,c7.$1(A.fI.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bp(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8I,D.aM7,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.p(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eW))
return!0
case"drone":d2.an(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.hn,3,c7.$1(c6?A.bd:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IK[p]
d2.ah(new B.p(o*0.4,1),new B.p(o,t),c8.$2(A.bw,3))
J.bp(d1.save())
d1.translate(o,q)
d2.ah(D.eqj,D.enh,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bt())
d2.af(w,d0.$3(D.f8r,A.aQ,A.d3))
d2.ar(D.f7y,c7.$1(A.d2))
d1=d2.c
J.bp(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.J,D.eno,c8.$2(A.bP,2.4))
d2.ah(A.a8E,D.enn,c8.$2(A.hI,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dC.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.an(c9.$5(-26,-6,30,12,3),d0.$3(D.f8x,A.bj,A.cl))
n=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bt())
d2.af(n,c7.$1(A.cS))
d2.N(D.ent,7,c7.$1(c6?A.c:A.d2))
return!0
case"neon":d2.an(c9.$5(-30,-14,60,28,6),c7.$1(M.ny))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.brV
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mg
d2.an(d1,t)}d2.an(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eqJ,l,17)
return!0
case"microwave":d2.an(c9.$4(-30,-18,60,38),d0.$3(D.f8D,A.bP,A.bj))
d1=c9.$5(-26,-14,38,30,3)
d2.an(d1,c7.$1(c6?A.bL.j(0.75):A.as))
if(c6){d1=d2.c
J.bp(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.J,7,22),c7.$1(A.d3))
d1.restore()}d2.an(c9.$5(15,-14,12,12,2),c7.$1(M.ny))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.v(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.enu,A.b4,6.5)
d2.N(D.enK,4,c7.$1(A.d2))
return!0
case"doorbell":d2.an(c9.$5(-16,-26,32,52,8),c7.$1(A.bi))
d2.N(A.JB,10,c7.$1(c6?A.bl:A.bw))
d1=d2.c
J.bp(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.err,A.c,16)
d1.restore()
d2.N(A.kF,6,c7.$1(A.d7))
d2.N(A.kF,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cB(B.bZ(A.JB,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bl.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eqI,D.erk,c8.$2(A.bw,4))
d1=d2.c
J.bp(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.an(c9.$5(-24,-14,46,22,5),d0.$3(D.f8s,A.bP,A.an))
d2.N(D.aLP,8,c7.$1(A.as))
d2.N(D.aLP,4.5,c7.$1(c6?A.aG:A.cl))
d2.N(D.eqG,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.ku))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eqR,A.ay,9)
return!0
case"console":d2.an(c9.$5(-28,-22,56,44,8),d0.$3(D.f8A,A.j6,A.fp))
d2.an(c9.$5(-20,-17,40,22,3),c7.$1(A.dF))
if(c6){d1=d4*2.3
d2.N(new B.p(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.eqB,4,c7.$1(A.b6))
d2.N(D.enp,2.4,c7.$1(A.ay))
d2.N(D.enH,2.4,c7.$1(A.bd))
return!0
case"heartmon":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.an(c9.$5(-26,-18,52,28,3),c7.$1(A.dF))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aG(d1.r,A.ai,c5,c5,t)
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
d5.$5(d2,"72",D.enq,A.hr,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eqW,A.hr.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eqL,3,c7.$1(c6?A.bd:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.an(d1,c7.$1(A.cD.j(c6?0.5:0.3)))
d2.an(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f8u,c7.$1(F.u8))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bp(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pl(0,-1,1)
d2.bZ(B.bs(A.J,8,14),c7.$1(A.cI))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.c6))
d2.N(D.eos,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.p(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bt())
d2.af(g,d0.$3(D.f94,A.c,A.bD))
d2.ar(D.f90,c7.$1(c6?A.dC:A.bw))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bt())
d2.af(q,c7.$1(A.em))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.dC.j(0.45)))
d1=c7.$1(A.dC.j(0.35))
d1.y=A.H6
d2.N(D.emU,14,d1)}return!0
case"discoball":d2.ah(D.emW,Q.aLG,c8.$2(A.d2,1.4))
d2.N(A.J,16,d0.$3(D.f8b,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.p(-16,d1),new B.p(16,d1),c8.$2(A.dx,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.p(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.p(Math.cos(f)*16,0),c8.$2(A.dx,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.p(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dlJ[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.an(c9.$5(-14,-4,28,24,5),d0.$3(D.f88,A.cx,A.an))
d2.an(c9.$5(-12,-26,24,20,5),d0.$3(D.f81,A.bi,A.bN))
d2.ah(H.aLI,D.emY,c8.$2(A.bw,1.6))
d2.N(D.emZ,2.2,c7.$1(c6?A.ay:A.bw))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6h[p]
if(c6)d1=d?A.b9:A.eZ
else d1=A.cl
d2.N(new B.p(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bp(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a8z,c8.$2(A.bN,4))
d1.restore()
d2.ah(D.eqr,D.eqP,c8.$2(A.bN,4))
d2.ar(D.f9_,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCv[p]+1,d1,10,14,2)
q=B.ar(A.bL,A.d3,a0)
q.toString
d2.an(t,c7.$1(q))}d2.an(c9.$5(-24,-6,48,26,8),d0.$3(D.f8t,A.bP,A.bj))
for(p=0;p<2;++p){o=D.aCv[p]
d1=c9.$5(o,-5,12,5,2)
d2.an(d1,c7.$1(c6?A.fr:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cI.j(0.5))
t.y=N.os
d2.an(d1,t)}}d2.ah(D.enQ,D.eoa,c8.$2(A.as,3))
return!0
case"ledstrip":d2.an(c9.$5(-34,-4,68,10,4),c7.$1(A.cl))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new An.pi(1,a1,0.8,1).jd():A.cS
if(c6){t=c7.$1(l.j(0.45))
t.y=N.os
d2.N(new B.p(-30+v*7.5,1),7,t)}d2.N(new B.p(-30+v*7.5,1),2.6,c7.$1(l))}d2.an(c9.$5(-40,-2,6,6,1),c7.$1(A.d2))
return!0
case"pump":d2.an(c9.$5(-16,-2,32,22,6),d0.$3(D.f8h,A.cD,A.FV))
d2.N(D.eqX,8,c7.$1(A.rF))
d1=d2.c
J.bp(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fI,2.4))}d1.restore()
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bN,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.p(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hx))
d2.N(D.ep5,3.2,c7.$1(A.hx.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bp(d1.save())
d2.hW(0,-0.15)
d2.an(c9.$5(-26,-14,40,22,10),d0.$3(D.f8v,A.i_,A.rE))
d2.an(c9.$5(14,-10,12,14,3),c7.$1(A.cl))
d2.an(c9.$5(-10,6,12,22,4),c7.$1(A.cS))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.p(24+t,q),new B.p(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cI.j(0.4))
d1.y=N.os
d2.N(D.enJ,8,d1)}return!0
case"headphones":d2.cB(B.bs(A.dM,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SC[p]
t=o-7
d2.an(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bg,A.nv))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.p(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cB(q,h,1.6,!1,c8.$2(A.eK.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.p(-4,-8-A.j.F(d4*14,8)),A.kO,12)
return!0
case"smartwatch":d2.an(c9.$5(-8,-30,16,14,3),c7.$1(A.cl))
d2.an(c9.$5(-8,14,16,14,3),c7.$1(A.cl))
d2.an(c9.$5(-14,-17,28,32,8),d0.$3(D.f86,A.d2,A.cS))
d2.an(c9.$5(-11,-14,22,26,6),c7.$1(A.dF))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.v(B.df(a2)),2,"0")+":"+A.a.b_(A.o.v(B.fP(a2)),2,"0"),D.en4,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FD,A.hr,j)
d1.toString
d5.$5(d2,"\u2665",new B.p(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dM,A.c,7)}return!0
case"tablet":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(M.ny))
d2.an(c9.$5(-30,-22,60,44,6),c8.$2(A.bN,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(a3),$.np(),!0)
d1.translate(-27,-19)
L.Ma(d2,D.ffr,d4,c5)
d1.restore()}else d2.an(a3,c7.$1(D.wc))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.an(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dO,A.db))
d2.an(a4,c8.$2(A.aT,1.2))
d2.N(D.aMe,9,c7.$1(A.as))
d2.N(D.aMe,6,c8.$2(A.d3,2))
d2.an(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.an(c9.$5(-22,-19,44,12,2),c7.$1(A.dF))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.epf,q,8.2)
d2.N(D.eny,2.4,c7.$1(c6?A.bd:A.aM))
d5.$5(d2,"IN",D.eqQ,A.ab,6)
d5.$5(d2,"OUT",D.eoX,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bN,A.ay,a5)
t.toString
d2.an(d1,c7.$1(t))
d2.N(H.a8x,3,c7.$1(A.aM))
d2.an(c9.$5(-12,-4,24,18,3),d0.$3(D.f82,A.cS,A.i9))
d5.$5(d2,"7805",D.a8I,A.ab,8)
for(p=0;p<3;++p){d1=D.dse[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.e1))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.p(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.ero,A.bq,9)
return!0
case"diode":d2.ah(D.aMi,D.aM1,c8.$2(A.e1,2.4))
d2.an(c9.$5(-14,-7,28,14,6),c7.$1(A.aw.j(0.85)))
d2.ar(D.f7M,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dC.j(0.4))
t.y=A.kV
d2.an(d1,t)}d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.b6))
d5.$5(d2,"one way",D.eqE,A.aD,8)
return!0
case"ldr":d2.ah(D.aMi,D.a8I,c8.$2(A.e1,2.4))
d2.ah(D.aM7,D.aM1,c8.$2(A.e1,2.4))
d2.N(A.J,12,c7.$1(A.d3))
d2.N(A.J,12,c8.$2(A.rK,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ar(A.bw,A.dC,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.p(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.eqs,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eq
break
case"sonytv":t=A.ry
break
case"appletv":t=A.e1
break
default:t=F.FG
break}a7=d1==="lgtv"||d1==="appletv"
d2.an(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bp(h.save())
h.clipRRect(B.nR(a3),$.np(),!0)
h.translate(t,q)
L.hi1(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.eod,1.6,c7.$1(A.b4))}else{d2.an(a3,c7.$1(D.wc))
h=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bt())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.an(c9.$5(-22,19,44,3,1.5),c7.$1(A.d2))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fN[p]
t=$.S()
q=B.a([],d1)
t=new B.aG(t.r,A.ai,c5,c5,q)
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
h=new B.bt()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.d2))}d5.$5(d2,"SONY",D.epU,A.bP,5.5)
break
case"appletv":d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
d5.$5(d2,"Apple TV",D.epg,A.bw,4.8)
break
default:d2.an(c9.$5(-34,19,68,7,3),c7.$1(D.bqc))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.p(d1,20),new B.p(d1,25),c8.$2(A.dx,0.6))}d5.$5(d2,"B&O",D.erj,F.u8,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.Ew
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
d2.an(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bp(t.save())
t.clipRRect(B.nR(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Ma(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.an(a3,c7.$1(D.wc))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.p(0,t),new B.p(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.an(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.p(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.an(c9.$5(-17,-28,34,52,4),c7.$1(A.cS))
d2.an(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eru,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bj))}d2.N(A.a8v,1.6,c7.$1(A.as))}return!0
case"laptop":d2.an(c9.$5(-30,-28,60,42,4),d0.$3(D.f8E,A.cx,A.bj))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Ma(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.an(b7,c7.$1(D.wc))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
d2.an(c9.$5(-7,16,14,2,1),c7.$1(A.bj))
return!0
case"imac":d2.an(c9.$5(-32,-28,64,46,5),d0.$3(D.f8I,A.cd,A.cx))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Ma(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.an(b8,c7.$1(D.wc))
d2.N(D.aLB,2,c7.$1(A.bN))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
return!0
case"monitor":d2.an(c9.$5(-34,-28,68,40,3),c7.$1(A.eq))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Ma(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.an(b9,c7.$1(D.wc))
d2.ar(D.f8P,c7.$1(A.bj))
d2.an(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d2))
return!0
case"projector":if(c6){d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.dC.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Ma(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.an(c9.$5(-26,-4,52,24,6),d0.$3(D.f8w,A.hZ,A.d2))
d2.N(D.aLN,7,c7.$1(A.as))
d2.N(D.aLN,4,c7.$1(c6?A.dC:A.cl))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.p(d1,2),new B.p(d1,14),c8.$2(A.dx,1))}return!0
case"carscreen":d2.an(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.an(c1,c7.$1(M.ny))
d2.an(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c7(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.p(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aM6,A.c,10)
d5.$5(d2,"km/h",D.ep3,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.an(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.d2,A.cS))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Ma(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bg.j(0.2))
d1.y=A.mg
d2.N(A.J,26,d1)}else d2.an(c4,c7.$1(A.a_))
d2.ah(D.er3,D.er8,c8.$2(A.bj,4))
d2.ah(D.eof,D.eov,c8.$2(A.bj,4))
return!0}return!1},
fWM:function fWM(){},
fWO:function fWO(){},
fWP:function fWP(){},
fWN:function fWN(){},
hkU(d,e,f,g){return new C.ak4(d,g,f,e)},
Gt(d,e,f){return new C.bdg(d,e,f)},
ak4:function ak4(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak5:function ak5(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h6$=h
_.m7$=i
_.fb$=j
_.h7$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
bK2:function bK2(d,e){this.a=d
this.b=e},
bK3:function bK3(d){this.a=d},
bK1:function bK1(d){this.a=d},
bK4:function bK4(){},
bK5:function bK5(d){this.a=d},
bK6:function bK6(d,e,f){this.a=d
this.b=e
this.c=f},
bK0:function bK0(d,e){this.a=d
this.b=e},
bJY:function bJY(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d,e,f){this.a=d
this.b=e
this.c=f},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJT:function bJT(){},
bK_:function bK_(d,e,f){this.a=d
this.b=e
this.c=f},
bJX:function bJX(d,e){this.a=d
this.b=e},
bJU:function bJU(d,e){this.a=d
this.b=e},
bJV:function bJV(d,e){this.a=d
this.b=e},
bJW:function bJW(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKm:function bKm(){},
bJv:function bJv(){},
bKn:function bKn(d,e){this.a=d
this.b=e},
bKk:function bKk(d,e,f){this.a=d
this.b=e
this.c=f},
bKf:function bKf(d){this.a=d},
bKc:function bKc(d,e,f){this.a=d
this.b=e
this.c=f},
bKd:function bKd(d,e){this.a=d
this.b=e},
bKg:function bKg(d){this.a=d},
bKa:function bKa(d,e){this.a=d
this.b=e},
bKb:function bKb(d,e){this.a=d
this.b=e},
bKe:function bKe(d){this.a=d},
bKh:function bKh(d){this.a=d},
bK8:function bK8(d,e){this.a=d
this.b=e},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKi:function bKi(d){this.a=d},
bK7:function bK7(d){this.a=d},
bKj:function bKj(d){this.a=d},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e){this.a=d
this.b=e},
bJR:function bJR(d,e){this.a=d
this.b=e},
bJQ:function bJQ(d,e){this.a=d
this.b=e},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJD:function bJD(d){this.a=d},
bJB:function bJB(d){this.a=d},
bJE:function bJE(d,e,f){this.a=d
this.b=e
this.c=f},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJH:function bJH(d,e){this.a=d
this.b=e},
bJI:function bJI(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
bJK:function bJK(d,e,f){this.a=d
this.b=e
this.c=f},
bJz:function bJz(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e,f){this.a=d
this.b=e
this.c=f},
bJy:function bJy(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e,f){this.a=d
this.b=e
this.c=f},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJN:function bJN(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJF:function bJF(d){this.a=d},
bJG:function bJG(d){this.a=d},
bdg:function bdg(d,e,f){this.a=d
this.b=e
this.c=f},
fsY:function fsY(){},
fsZ:function fsZ(){},
ft_:function ft_(){},
fsL:function fsL(){},
ft0:function ft0(){},
fsK:function fsK(){},
ft1:function ft1(){},
fsP:function fsP(){},
fsJ:function fsJ(){},
fsQ:function fsQ(){},
fsI:function fsI(){},
fsR:function fsR(){},
fsH:function fsH(){},
fsS:function fsS(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsT:function fsT(){},
fsD:function fsD(){},
fsE:function fsE(){},
fsU:function fsU(){},
fsC:function fsC(){},
Wo:function Wo(d){this.a=d},
aFe:function aFe(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e1i:function e1i(d,e){this.a=d
this.b=e},
e1r:function e1r(d){this.a=d},
e1s:function e1s(){},
e1t:function e1t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1u:function e1u(){},
e1h:function e1h(d){this.a=d},
e1g:function e1g(d,e,f){this.a=d
this.b=e
this.c=f},
e1f:function e1f(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e1e:function e1e(){},
e1q:function e1q(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1m:function e1m(){},
e1o:function e1o(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1k:function e1k(){},
e1w:function e1w(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1v:function e1v(){},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1z:function e1z(d){this.a=d},
e1A:function e1A(d){this.a=d},
azg:function azg(d,e){this.c=d
this.a=e},
bbo:function bbo(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cLy:function cLy(d){this.a=d},
bbn:function bbn(d,e){this.b=d
this.a=e},
cLx:function cLx(d){this.a=d},
azB:function azB(){},
azC:function azC(){},
aLK:function aLK(){},
bA0:function bA0(){},
isz(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.vt,23)
$.S()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vt,25,b8)
b8=B.K()
b8.sav(D.eAb.aK(0,v))
b9.N(A.vt,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.p(b8*17,s*17-2),new B.p(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vt,new B.p(b8*18,s*18-2),r)
r=B.K()
r.r=A.bq.gp(0)
b9.N(A.vt,3,r)
c2.$5(b9,w?"V":"A",D.erb,A.bq,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.eqy,A.as,9.5)
return!0
case"fan":b8=B.bn(D.f7Z,A.hU)
$.S()
s=B.K()
s.r=A.bw.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.an.gp(0)
b9.ar(D.f8Q,s)
s=B.K()
s.r=A.a_.j(0.6).gp(0)
b9.N(H.vu,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bp(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLF,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.hx.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.vu,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cx.gp(0)
b9.N(H.vu,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jZ.gp(0)
b9.N(H.vu,14,b8)
return!0
case"speaker":n=B.bn(D.aRT,A.r4)
$.S()
b8=B.K()
b8.sav(D.at9.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.an(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.eAw.aK(0,B.bZ(A.cC,15)))
b9.N(A.cC,14+m,b8)
b8=B.K()
b8.r=A.d2.gp(0)
b9.N(A.cC,5,b8)
b8=B.K()
b8.r=A.bj.gp(0)
b9.N(H.a8w,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.enP,6+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cB(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f8H,A.r4)
$.S()
b8=B.K()
b8.sav(D.c8F.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.aRV,A.iF)
s=B.K()
s.r=A.i9.gp(0)
b9.an(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b_(A.o.v(B.df(k)),2,"0")
h=A.a.b_(A.o.v(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aRV,b8)
c2.$5(b9,i+j+h,D.eqU,A.b4,21)}b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.eqS,2.4,b8)
b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.enU,2.4,b8)
return!0
case"calculator":l=B.bn(D.f8m,A.hV)
$.S()
b8=B.K()
b8.sav(D.c8p.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.f8f,A.hC)
s=B.K()
s.r=(b7?A.Zz:D.bsw).gp(0)
b9.an(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eqx,A.Yg,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.Uw)
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.an(r,q)}return!0
case"phone":l=B.bn(D.f8a,A.hV)
$.S()
b8=B.K()
b8.r=M.ny.gp(0)
b9.an(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.akl.gp(0)
b9.an(l,b8)
e=B.bn(D.f80,A.hU)
if(b7){b8=B.K()
b8.sav(D.c9Y.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.an(e,b8)
b8=b9.c
J.bp(b8.save())
b8.clipRRect(B.nR(e),$.np(),!0)
b8.translate(-12,-25)
L.Ma(b9,D.ff3,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bn(D.f7Y,A.hC)
s=B.K()
s.r=A.b6.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.epA,A.c,6)}else{b8=B.K()
b8.r=D.wc.gp(0)
b9.an(e,b8)}b8=B.bn(D.f95,D.eAE)
s=B.K()
s.r=A.w.gp(0)
b9.an(b8,s)
return!0
case"router":l=B.bn(D.f8G,A.mw)
$.S()
b8=B.K()
b8.sav(D.c8W.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
for(a0=0;a0<2;++a0){a1=F.SC[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cl.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.p(a1,-4),new B.p(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.bd:A.aM).gp(0)
b9.N(new B.p(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.vu,8+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.hv.j(0.9-u*0.2).gp(0)
b9.cB(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f8l,A.hU)
s=$.S()
r=B.K()
r.r=A.cS.gp(0)
b9.an(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wv
b9.N(A.vt,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c7(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bt())
b8=B.K()
b8.r=B.ar(A.em,D.bjk,a3).gp(0)
b9.af(a4,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bp(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a8w,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bp(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aG(s,A.ai,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bt())
q=B.K()
q.sav(D.c7_.aK(0,D.f8z))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bt())
p=B.K()
p.r=A.fI.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bt())
s=B.K()
s.r=A.fI.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCw[a0]
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.as.gp(0)
b9.N(new B.p(a1,10),7.5,s)
J.bp(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.p(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.p(-34-s,r),new B.p(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c7(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bt())
r=B.K()
r.sav(D.c84.aK(0,D.f8k))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bt())
q=B.K()
q.r=A.e1.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c7(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cI,A.um,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cS
b8.r=s.gp(0)
b9.ar(D.f8j,b8)
if(b7){b8=B.K()
b8.r=A.cI.j(0.3).gp(0)
b8.y=A.mg
b9.N(A.aLD,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.p(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.emS,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bt())
s=B.K()
s.r=A.dC.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dC.j(0.5*u).gp(0)
s.y=T.Or
b9.N(D.eqY,24,s)}b8=B.bn(D.f8Z,A.hU)
s=$.S()
r=B.K()
r.r=A.cS.gp(0)
b9.an(b8,r)
r=B.K()
r.r=A.d2.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.en7,D.aLQ,r)
r=B.K()
r.r=A.d2.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aLQ,D.eqZ,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bt())
s=B.K()
s.r=(b7?A.aQ:A.kv).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bj).gp(0)
b9.N(D.er1,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c7(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hu.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.r=D.a5j[u].j(0.6).gp(0)
b1.y=A.H6
b9.N(new B.p(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aG(b8,A.ai,b6,b6,b1)
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
q=new B.c7(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bt()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5j[u]
else{p=B.ar(D.a5j[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.isx(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hg4(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.AA},
itO(d,e,f){return B.a6(d,!1).ce(B.vk(null,!1,!0,!0,new C.h0N(e,f),A.eT,null,A.pl,new C.h0O(),x.H))},
Kj:function Kj(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0N:function h0N(d,e){this.a=d
this.b=e},
h0O:function h0O(){},
W7:function W7(d,e,f){this.c=d
this.d=e
this.a=f},
bm3:function bm3(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
dYs:function dYs(d){this.a=d},
dYr:function dYr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYp:function dYp(){},
dYq:function dYq(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYn:function dYn(d,e){this.a=d
this.b=e},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
dYk:function dYk(d){this.a=d},
dYg:function dYg(d){this.a=d},
dYf:function dYf(d){this.a=d},
dYj:function dYj(d,e,f){this.a=d
this.b=e
this.c=f},
dYi:function dYi(d){this.a=d},
dYh:function dYh(d){this.a=d},
by2:function by2(d,e,f){this.b=d
this.c=e
this.a=f},
afX:function afX(d,e,f){this.b=d
this.c=e
this.a=f},
aNy:function aNy(){},
a2a(d,e,f,g,h,i){return new C.bwP(d,e,f,g,h,i)},
bwP:function bwP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fts:function fts(){},
ftt:function ftt(){},
ftu:function ftu(){},
ftv:function ftv(){},
ftw:function ftw(){},
ftx:function ftx(){},
fty:function fty(){},
ftz:function ftz(){},
a9A:function a9A(d){this.a=d},
cmR:function cmR(d){this.a=d},
cmS:function cmS(){},
cmQ:function cmQ(d,e){this.a=d
this.b=e},
cmP:function cmP(d){this.a=d},
XJ:function XJ(d){this.a=d},
aGI:function aGI(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h6$=f
_.m7$=g
_.fb$=h
_.h7$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eUT:function eUT(d){this.a=d},
eUP:function eUP(d){this.a=d},
eUO:function eUO(d,e){this.a=d
this.b=e},
eUR:function eUR(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUS:function eUS(d){this.a=d},
bye:function bye(d,e,f){this.b=d
this.c=e
this.a=f},
Ww:function Ww(d){this.a=d},
bme:function bme(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h6$=d
_.m7$=e
_.fb$=f
_.h7$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e4h:function e4h(){},
e4i:function e4i(){},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4f:function e4f(d){this.a=d},
e4d:function e4d(d){this.a=d},
e4g:function e4g(d){this.a=d},
bsV:function bsV(d,e,f){this.b=d
this.c=e
this.a=f},
VH:function VH(d){this.a=d},
blN:function blN(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h6$=d
_.m7$=e
_.fb$=f
_.h7$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dPK:function dPK(){},
dPL:function dPL(){},
dPF:function dPF(){},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d){this.a=d},
dPG:function dPG(d){this.a=d},
aK9:function aK9(d,e,f){this.a=d
this.b=e
this.c=f},
Wn:function Wn(d){this.a=d},
bm5:function bm5(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0O:function e0O(d){this.a=d},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0P:function e0P(d){this.a=d},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d){this.a=d},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0S:function e0S(d){this.a=d},
e0I:function e0I(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0U:function e0U(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0V:function e0V(d){this.a=d},
e0W:function e0W(d){this.a=d},
e0F:function e0F(d){this.a=d},
bo7:function bo7(d,e,f){this.b=d
this.c=e
this.a=f},
X6:function X6(d){this.a=d},
aG1:function aG1(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erI:function erI(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e,f){this.a=d
this.b=e
this.c=f},
erH:function erH(d,e,f){this.a=d
this.b=e
this.c=f},
erK:function erK(d){this.a=d},
erG:function erG(d){this.a=d},
erO:function erO(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
erM:function erM(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erL:function erL(d,e){this.a=d
this.b=e},
erQ:function erQ(d){this.a=d},
Xg:function Xg(d){this.a=d},
aGm:function aGm(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCt:function eCt(d){this.a=d},
eCr:function eCr(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCz:function eCz(d,e){this.a=d
this.b=e},
XA:function XA(d){this.a=d},
bnl:function bnl(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQm:function eQm(){},
eQv:function eQv(){},
eQr:function eQr(d){this.a=d},
eQq:function eQq(){},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQt:function eQt(d){this.a=d},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQu:function eQu(d){this.a=d},
eQn:function eQn(d){this.a=d},
X5:function X5(d){this.a=d},
bmQ:function bmQ(d,e,f,g,h,i,j,k){var _=this
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
_.h6$=f
_.m7$=g
_.fb$=h
_.h7$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eqn:function eqn(){},
eqo:function eqo(){},
eqg:function eqg(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqc:function eqc(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eqb:function eqb(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
eqa:function eqa(d,e){this.a=d
this.b=e},
eqm:function eqm(d){this.a=d},
eq9:function eq9(d,e){this.a=d
this.b=e},
bfF:function bfF(d,e,f){this.c=d
this.d=e
this.a=f},
aNk:function aNk(){},
bzX:function bzX(){},
aNF:function aNF(){},
bA2:function bA2(){},
aO7:function aO7(){},
bAb:function bAb(){},
aOy:function aOy(){},
bAk:function bAk(){},
JQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.atB
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dB(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bO(new B.bd(1000*q),new C.cmN(d,s,f,g),u)}},
ckl(d){return C.hYb(d)},
hYb(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckl)
case 7:r=f
q=B.aU(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.X.aQ(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a2(p,o,n):B.T(o,n)
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
return B.i($async$ckl,v)},
b3l(d,e){return C.hYc(d,e)},
hYc(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3l=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3l)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.X.aw(e,null)),$async$b3l)
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
return B.i($async$b3l,v)},
cmN:function cmN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iiK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oo(A.j.ad(p.c,4)),"y",B.oo(A.j.ad(p.d,4)),"v",p.e,"l",B.oo(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oo(A.j.ad(p.as,3)),"ch",p.at,"vc",B.oo(A.j.ad(p.z,3)),"s",B.oo(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.ff(l)
return A.X.aw(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
isY(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.cr:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aU(J.t(t,"k"))
s=e==null?"":e
if(!$.qF().al(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u0(a2,d,a0,a1)
a3.asa(a2,d,a0,a1)
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
d=B.k5(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k5(J.t(t,"b"))
r.x=d===!0
d=B.aU(J.t(t,"bw"))
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
J.c5(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cr:i)
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
if(m!=null&&l!=null)a6.am6(m,A.j.M(B.dD(J.t(p,1))),l,A.j.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cr:h)
while(h.C()){j=h.gR(h)
J.c5(k,A.j.M(B.dD(j)))}return new B.br4(i,k)}catch(a4){return a5}},
fKt(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fKt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fKt)
case 7:r=o.aU(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fKt,v)},
bGF(d){return C.iuB(d)},
iuB(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGF=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGF)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGF)
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
return B.i($async$bGF,v)}},D,H,Am,X,An,Y,A3,Ao
J=c[1]
B=c[0]
A=c[2]
A4=c[120]
Z=c[160]
A_=c[146]
A5=c[152]
A0=c[150]
S=c[143]
A6=c[136]
A7=c[154]
A8=c[163]
A1=c[107]
A9=c[138]
A2=c[119]
N=c[145]
Aa=c[161]
Ab=c[153]
Ac=c[156]
Ad=c[76]
T=c[141]
O=c[130]
U=c[85]
Ae=c[88]
Af=c[134]
V=c[144]
W=c[155]
E=c[29]
K=c[3]
G=c[38]
I=c[109]
Ag=c[103]
Ah=c[162]
P=c[159]
Ai=c[102]
Aj=c[157]
R=c[131]
Ak=c[158]
Q=c[148]
Al=c[26]
L=c[28]
F=c[100]
M=c[98]
C=a.updateHolder(c[18],C)
D=c[140]
H=c[142]
Am=c[67]
X=c[149]
An=c[57]
Y=c[111]
A3=c[151]
Ao=c[147]
C.ali.prototype={}
C.WQ.prototype={
S(){return new C.bmE(B.T(x.N,x.i),new B.au(A.ax,$.ax()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bmE.prototype={
gX3(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
p.bP(0,A.cf)
t.m(new C.eju(t))
t.a.toString
p=t.gX3()
w=3
return B.b(C.bCd(C.i6a(q,C.iiv(p),o,t.ay)),$async$PQ)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ik1(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ejv(t,o,r))
$.aW.x1$.push(new C.ejw(t))
case 1:return B.h(u,v)}})
return B.i($async$PQ,v)},
Z9(d){return this.c3i(d)},
aYA(){return this.Z9(null)},
c3i(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.ejH(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCd(C.idy(o)),$async$Z9)
case 3:r=n.a=m.isD(f)
p.b=""
if(r!=null&&!C.iiw(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ik2(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ali(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejI(p,t))
t.c8U(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z9,v)},
c8U(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX3()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejD(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejB(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejE(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ejF(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejG(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bg.j(0.1),g=B.m(16),f=B.L(A.bg.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fgB,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.AM,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fHP
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VO,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.frJ,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uw,B.d(u,l,l,l,l,l,l,D.fuA,l,l,l),l))
w.push(A.cT)
w.push(B.d(k.b,l,l,l,l,l,l,I.EP,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fxb,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i0,A.co,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lX,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NW,new B.c8(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bo,new B.bz(1,A.bb,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bg.j(0.3)
s=new B.aN(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vu,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hg,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.u(w,B.a([A.T,new B.bL(A.aa,l,l,s,l),A.av,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fD2,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.esu)
j=B.cc(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajw(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bCj,A.eH,l,l,1/0),A.b_,A.iz),B.E(C.hkU(m.gX3(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.ejL(m),l,A.bg,l),new E.dW("Invent something new",!i,new C.ejM(m),l,A.bg,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.duz[p]
i.push(new E.dW(n,!1,new C.ejN(m,n),l,A.bg,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dcp[p]
i.push(new E.dW(r,!1,new C.ejO(m,r),l,A.bg,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kk,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejP(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.ao,l,A.Vi,l,l),1)
h=m.at
v=h&&j?D.bSg:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.af,new E.fC(v,j,new C.ejQ(m,k),A.bg,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lA(A.bg,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.GY.prototype={}
C.vr.prototype={}
C.Xc.prototype={
S(){return new C.aGg(A.J,A.J,A.az,B.aR(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGg.prototype={
gaZT(){var w,v,u,t=this,s=D.Iu[t.cx],r=D.SE[t.cy],q=D.Dw[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAN[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.eyO())},
ga3A(){return D.Iu[this.cx].d/this.gaZT()},
gaQP(){return 0.1*(D.Iu[this.cx].d/0.9)/D.SE[this.cy].d},
Y(){this.a4()
this.mh()
C.ckl("rocket_lander").bG(new C.ez7(this),x.k)},
c92(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cQ.ai()*0.6
w.f=new B.p(0.15+A.cQ.ai()*0.7,0.08)
w.r=new B.p((A.cQ.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ez8())
return}w=D.tg[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.p(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3A()
v=v.a2(0,new B.p(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQP())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcK()*6*D.aCQ[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.p(-t.a*0.4,t.b)
t=new B.p(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.p(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dw[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3l("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JQ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3A()/(D.tg[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3A()/(D.tg[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.ez9())},
aha(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fu3,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.eyQ(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cT,B.bW(A.bH,s,A.bs,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bI3(d){var w,v,u,t,s=this,r=null,q=s.ga3A()/(D.tg[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQP()),o=D.aCQ[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abk,r,r,r),A.W,s.aha("ENGINE: "+D.Iu[s.cx].b,D.Iu,new C.eyF(s),new C.eyG(s),A.cI),s.aha("FUEL TANK: "+D.SE[s.cy].b,D.SE,new C.eyH(s),new C.eyI(s),A.b4),s.aha("LANDING GEAR: "+D.Dw[s.db].b,D.Dw,new C.eyJ(s),new C.eyK(s),A.aG),s.aha("EXTRAS (tap to add)",D.aAN,new C.eyL(s),new C.eyM(s),A.bg)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h_O)
o=(q?A.b4:A.c0).j(0.14)
w=B.m(12)
v=A.j.ad(s.gaZT(),2)
u=A.j.ad(s.ga3A()/(D.tg[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Dw[s.db].d*100)+".",r,r,r,r,r,r,D.fuJ,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i0,A.bV,r,r,r))
m.push(A.W)
m.push(new B.bL(A.A,r,r,new E.fC(A.oF,"Launch",new C.eyN(s),A.b4,r),r))
return B.as(B.q(r,B.cc(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bS,r,r,A.ah),A.f,r,A.m1,new B.o(D.bs2,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b03(d,e,f,g){var w=null,v=f?A.cI:A.c.j(0.1),u=B.m(18),t=B.L(A.aT,A.r,1)
return B.mP(A.iR,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyC(e),new C.eyD(e),w,w,w,w,new C.eyE(e))},
b02(d,e,f){return this.b03(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cq(new C.ez0(s,D.tg[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tg[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.ez1(s,w),r,D.tg[w].c,r))}v=B.a([s.b02(F.aqp,new C.ez2(s),s.y),A.bc,s.b03(A.wH,new C.ez3(s),s.Q,130),A.bc,s.b02(A.PI,new C.ez4(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.az(r,B.q(r,D.bWs,A.f,r,r,new B.o(u,r,B.L(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ez5(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lA(A.cI,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bjx.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tg[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.K(),e=l.c,d=B.ar(K.a_7,e,0.25)
d.toString
f.sav(new B.a8(A.b2,A.b8,A.x,B.a([F.ahj,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e2()
w.cY(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.p(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aG(g.r,A.ai,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e2()
s.cY(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bt())
h=$.S()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.p(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iF)
e=B.K()
e.r=A.bd.gp(0)
a0.an(g,e)
e=B.bn(q.cn(2),A.mw)
g=B.K()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.an(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bp(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cI.j(0.6).gp(0)
m.y=T.Or
a0.N(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bt())
m=B.K()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bt())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c7(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c7(-14,-10,0,-26))
o.E(new B.bt())
k=B.K()
k.sav(D.c8y.aK(0,D.f87))
a0.af(o,k)
k=B.K()
k.r=A.aG.gp(0)
a0.N(H.vu,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bt())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bt())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aOf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAd.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzY()}}
C.aUk.prototype={}
C.a4u.prototype={}
C.bcu.prototype={}
C.VG.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ew(["skin"],x.N),o=new Float32Array(0)
return new C.aEK(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LQ,D.LQ,A.az,A.cQ,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEK.prototype={
Y(){var w=this
w.a4()
w.mh()
w.as=new C.c6H(w.gchW())
new C.dPD(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bz_()},
chX(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fa(0,B.I(["t","init","data",$.hv4],x.N,x.z))
v.at=!0
v.ay=""
v.aAZ()
break
case"parts":v.m(new C.dPd(v))
break
case"pick":v.m(new C.dPe(v,d))
break
case"shot":v.aj4(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPf(v))
break}},
aAZ(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayD[q.cx]
v=new C.dPg()
u=q.ch
u=B.C(u,B.a4(u).k("ch.E"))
A.d.ff(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.X.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fa(0,u)}},
aj4(d){return this.cyX(d)},
cyX(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.ax2(B.a([B.cGJ(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj4)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(K.aUd)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj4,v)},
aAn(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mz(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.p1)){E.XC("kick",0,0.4)
v.UJ(170,new C.dPE())}v.p1=w
return},
aeI(d){var w,v,u,t,s=this
s.m(new C.dPh(s,d))
if(d==null){s.fy=D.LQ
s.fr=1
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPi(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aAZ()
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBq(t,d)
return},
cBq(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XC("kick",0,0.8)
this.UJ(260,new C.dPj())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UJ(w*70,new C.dPk(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.ham("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.XC("kick",0,0.3)
break
default:E.ham("organic",2+A.o.F(e.length,6),200,0.4)}},
cG4(d){this.m(new C.dPm(this,d))},
b0l(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAn(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
bZY(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPa(u,w,d))
v=x.t
C.JQ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UJ(1100,new C.dPb(u))
return}if(d==null){if(u.cy!=null)u.aeI(null)
return}u.aeI(d)},
c2A(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fq5,u,u,u)}else if(d==null||e==null)w=D.fFb
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hq,u,u,u),A.cT,B.d(e.b,u,u,u,u,u,u,I.EP,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bZ1,u,u,u,new C.dPc(v),u,u,u,u,"Back to the whole body",A.ch)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.o(K.Yp,u,s,t,u,u,A.n),u,u,u,u,S.alO,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dFP.h(0,g)
i.aAZ()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dmM
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAn(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,K.oI,h,h,h,new C.dPt(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.C_(h,A.pO,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zn(B.q(A.A,B.x(D.dw8,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b70,h,h,D.hs1,h,h,h,h,h),A.b_,A.mY,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.a0e,i.c2A(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.de1[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dPu(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dPv(i,k),h,A.aQ,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iQ(A.c0,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dPw(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.ayD[j],i.cx===j,new C.dPx(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dPy(i),D.api,A.aG,h),new E.fC(A.oA,"Reset view",new C.dPz(i),A.c,h),new E.dW(l,m,new C.dPA(i),A.HM,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dPB(i),A.oE,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lA(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aNi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNj.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byZ()}}
C.c6H.prototype={
kX(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hBk
$.hBk=v+1
u="ngmy-body-viewer-"+v
$.xu()
$.pY().pe(u,new C.c6I(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6J(t),!1,x.gA)
t.b=u},
fa(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rx(w.contentWindow)
if(w!=null)J.ajl(w,e,"*")}}catch(v){}}}
C.yL.prototype={}
C.D3.prototype={}
C.nL.prototype={}
C.bdf.prototype={}
C.VN.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEM(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEM.prototype={
Y(){var w=this
w.a4()
w.mh()
w.adG()
$.aW.x1$.push(new C.dRi(w))},
adG(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adG=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adG)
case 6:q=e.tV("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dQX(s,r))
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
return B.i($async$adG,v)},
ae1(d){return this.c6z(d)},
c6z(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ae1=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$ae1)
case 6:r=f
q=s.cx
p=B.a4(q).k("k9<ch.E,n>")
q=B.C(new B.k9(q,new C.dR_(),p),p.k("M.E"))
r.aC("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$ae1,v)},
az0(d,e,f,g){var w="c"+this.y++,v=new C.D3(w,e,f,g)
this.d.n(0,w,v)
return v},
mP(d,e,f){return this.az0(0,e,f,0)},
ad0(d,e){var w
if(D.A8.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.p(-36,w))},
ul(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aV_(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cXS[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ul(p,0)&&n.ul(p,1)
break
case"or":p=q.a
o=n.ul(p,0)||n.ul(p,1)
break
case"xor":p=q.a
o=n.ul(p,0)!==n.ul(p,1)
break
case"nand":p=q.a
o=!(n.ul(p,0)&&n.ul(p,1))
break
case"nor":p=q.a
o=!(n.ul(p,0)||n.ul(p,1))
break
case"not":o=!n.ul(q.a,0)
break
default:o=n.ul(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSr(){return this.aV_(null)},
mz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSr()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eH(w,new C.dRj()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fb$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
az1(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.p(d*w.a,e*w.b)},
avb(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQV(w,d))
return}w.m(new C.dQW(w,d))},
cBI(d){this.m(new C.dR0(this,d,$.bH0()[d]))},
cbl(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bH0()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dQQ(),t),s)
A.d.aZ(r,new C.dQR())
q=B.C(new B.Y(new B.b8(v,u),new C.dQS(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQT(d,w))
return}u=d.r
p=B.dJ(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aV_(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lz(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aO(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dQU(d,o,a0))},
azT(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cko(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2t(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A8.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ad0(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRa(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ad0(p,o)
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
cbn(d){var w,v,u,t=this,s=t.azT(d)
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
t.m(new C.dR1())
return}u=t.bRa(d)
if(u!=null)t.m(new C.dR2(t,u))
else t.m(new C.dR3(t))},
axP(d){return this.c5y(d)},
c5y(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azT(d)
if(s==null){w=1
break}B.jY()
t.m(new C.dQZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axP,v)},
bDS(d){if(this.x.A(0,A.az))return
this.m(new C.dQP(this,d,A.cQ))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bH0()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oE:V.tb,A.ab,h,h,h,21),h,h,h,new C.dRc(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cv.j(0.14)
r=B.L(A.cv.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fpd,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VI,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.li,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b4:A.eW,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bJ(D.fQP,h,i.gcbk(),B.bo(A.cv,h,h,h,h,h,h,h,h,h,h,A.ch))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,U.O3,D.bD1,h,h,1/0))}u.push(B.E(B.cq(new C.dRd(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A8.h(0,r).a+": "+D.A8.h(0,r).e,h,h,h,h,h,h,A.tM,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0i,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A8.gdO(D.A8),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aWd,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fC,Ai.O0,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRe(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dri[l]
s.push(new E.fC(A.PJ,k.b,new C.dRf(i,k),A.cv,h))}s.push(new E.fC(K.wE,"Clear",new C.dRg(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bH0(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lN
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bl
r.push(new E.dW(q.a,o===j,new C.dRh(i,j),p,n,h))}return E.lA(A.cv,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bdy.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.K()
w.r=D.afE.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.p(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.ad0(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aG(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.km(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=9
n.r=A.bl.j(0.28).gp(0)
n.y=N.os
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dC:A.bw).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.JD)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.S().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.km(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbm(a5,a3.d)},
cbm(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A8.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bn(t,A.jO)
r=w.cy===v
q=s.eQ(A.cC)
$.S()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mg
d.an(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bZ(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.an(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a8(A.b2,A.b8,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.an(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.an(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.py:D.bSM}else l=e.b
k=C.hcc(B.lz(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.p(p/2,q.gba(q)/2)))
j=C.hcc(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.p(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hcc(f,9,u?A.dC:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.p(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1_(d,w.ad0(a0,h),o)
this.b1_(d,a0.c.a2(0,D.JD),o)},
b1_(d,e,f){var w
$.S()
w=B.K()
w.r=D.afE.gp(0)
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
C.aNn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzY.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bz3()}}
C.Oi.prototype={
S(){return new C.aF2(B.mZ(0,null,null))}}
C.Lk.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Bb.prototype={}
C.aF2.prototype={
Y(){this.a4()
B.bO(A.qw,C.iqZ(),x.H)},
cbs(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dXu(w,e))},
c4m(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dXt(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c3
return B.oO(t,B.c4(v,s,t?new C.btT(w.e,w.gcbr(w),new C.dXv(d),v):new C.aJh(u,new B.bv(u.b,x.Y)),v,!1,!1,v,!1),new C.dXw(w,u),x.K)}}
C.bvv.prototype={}
C.btT.prototype={
b10(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a0J,B.x(B.a([v,A.bG,B.d(e,w,w,w,w,w,w,B.l(w,w,f?A.cA:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aF(d,A.dN,x.l).w,p=B.aI(s,s,s,s,B.X(A.eM,r?A.bB:A.ab,s,s,s,20),s,s,D.hsn,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Ix,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.L(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a8(A.aA,A.aF,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.q(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cA:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hss,s,A_.amj,s,s,s),s,s,s),1),A.tE],u),A.l,s,A.e,A.i,0,s,s)
v=t.b10("STUDIOS","Play, make things, and keep what you make",r)
$.bH1()
return B.bm(!1,B.x(B.a([B.E(B.w7(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.R(8,q.r.b+6,8,4),new B.m3(w,s),s),new B.m3(v,s),new B.nI(A.i1,B.PX(new B.oR(new C.f8B(d),9,!0,!0,!0,0,B.tr(),s),D.aU2),s),new B.m3(t.b10("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bDa,B.PX(new B.oR(new C.f8C(t),6,!0,!0,!0,0,B.tr(),s),D.aU2),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agf.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.m(20)
v=(A.o.aq(o.c,3)&1)===0
u=B.a7t(v?A.aG:A.bg,20)
v=v?A.aG:A.bg
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.eA(B.x(B.a([new B.VL(v,44,m.c,n,n),A.T,B.d(m.a,n,2,A.a2,n,n,n,D.fvr,A.K,n,n),A.cT,B.d(m.b,n,2,A.a2,n,n,n,D.fyj,A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,u,n,A.Cw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}w=B.m(20)
v=B.m(20)
u=B.ar(I.m8,l,0.3)
u.toString
t=x.O
u=B.a([u,D.aiT],t)
s=B.L(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ar(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.eA(B.x(B.a([B.q(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.aA,A.aF,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.T,B.d(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cT,B.d(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.aA,A.aF,A.x,u,n,n),A.n),n,A.Cw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}}
C.af6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.aq(this.c,3)&1)===0?A.aG:A.bg,g=B.m(20)
if(i)w=B.a7t(h,20)
else{w=B.m(20)
v=B.ar(I.m8,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.aiT],x.O)
v=new B.o(l,l,B.L(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cC,12)],x.V),new B.a8(A.aA,A.aF,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aN(6,6)
if(i){n=B.ar(h,A.c,0.1)
n.toString
n=B.a([n,B.VM(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gam(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a8G,0)],s)
u.push(B.q(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a7,A.aa,A.x,n,l,l),A.n),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bB
else{t=B.ar(A.d.gH(j),A.d.gam(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aH(!1,A.a3,!0,l,B.aP(!1,g,!0,B.eA(B.x(B.a([new B.a5(58,l,u,l),A.W,t,A.av,B.X(A.D9,i?B.VM(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.i,0,A.p),l,w,l,A.Cw,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj)}}
C.Re.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gam(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,new B.bN(new B.o(h,j,j,B.m(22),j,j,A.n),A.bk,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JA,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gam(i)
i=B.ar(A.d.gam(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.dx7,j),A.n),A.bk,j,j),0,0,0),B.ap(j,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.b2,A.b8,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bk,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b2(j,j,j,new C.buT(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.frz,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Kr)
p.push(B.q(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h7,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.du(!0,B.e9(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bS(0,new B.du(!0,new B.bN(new B.o(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bk,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bN(new B.o(j,j,j,u,r,j,A.n),A.bk,B.bx(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.buT.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bp(u.save())
u.translate(v.gbx().a,v.gbx().b)
d.hW(0,0.35)
t=B.bs(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.K()
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.buo.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bpW,D.ahX],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kF,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.o(w,w,s,v,r,new B.a8(A.aA,A.aF,A.x,u,w,w),A.n),A.bk,B.bx(q,B.b2(B.as(B.X(A.jJ,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcc(p,w),A.az),A.aq),w),w)}}
C.bcc.prototype={
a5(d,e){var w,v,u,t,s,r
$.S()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.p(s,0),new B.p(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.p(0,r),new B.p(u,r),w)
u=e.ei(A.J)
$.S()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aD(d){return!1}}
C.aJh.prototype={
S(){return new C.aJi(new B.cw(null,x.A),null,null)}}
C.aJi.prototype={
guL(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bAp,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_z(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h5,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gaz2(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbp(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYi(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ5(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9R(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guL()
w.dl()
w.dV$.I(0,this.gcBr())},
cBs(){var w,v,u,t,s,r,q,p=this,o=p.guL().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaz2().a){case 0:w=D.nP
break
case 1:w=D.vd
break
case 2:w=D.a5m
break
case 3:w=D.nP
break
case 4:w=D.djt
break
case 5:w=D.vd
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adm)r=0.09
else r=s===D.adn?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.cb7[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JQ("bell",D.cjX,1400,0.35)}}p.ax=o},
t(){this.guL().t()
this.ga_z().t()
this.bAU()},
af7(){var w=this
w.guL().d0B(0,B.dw(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f8h(w))},
cms(){this.guL().bQ(0)
this.m(new C.f8g(this))},
af6(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ5(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gb9R(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.ax()))}o=B.C(u.gaYi(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(I.m8,null,new C.f8f(u,l,m,o),t,!0,!0,!0,A.lU,!1,!1,x.H),$async$af6)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$af6,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaz2(),f=i.a.c,e=f.b,d=i.gcbp(),a0=new C.Bb(g,e,f.c,d,i.gaYi(),i.gaZ5(),i.gb9R())
f=B.ar(A.d.gH(d),A.d.gam(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oE:V.tb,A.ab,h,h,h,21),h,h,h,new C.f8p(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c1F,h,h,h,i.gcbq(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,K.oI,h,h,h,new C.f8q(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_z(),new C.f8r(i,a0),h),B.cq(new C.f8s(i,a0))],g)
u=i.as
t=u?i.gcmr():i.gcbt()
u=u?D.bS3:A.ta
s=B.ar(A.d.gH(d),A.d.gam(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ch),B.E(B.c6(i.guL(),new C.f8t(i,a1,a0),h),1),B.aI(h,h,h,h,D.bYS,h,h,h,new C.f8u(i),h,h,h,h,"Replay",A.ch)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gam(d),0.4)
r.toString
s=E.iQ(r,u+"x","Speed",2.5,0.4,new C.f8v(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.du8[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gam(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f8w(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cbw[q]
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
d.push(B.az(h,B.q(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a8(A.aA,A.aF,A.x,n,h,h),A.a6),h,l,h,K.all,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8x(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eo(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.P,0,A.p))},
bD2(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nP[r]
p=A.j.D((1-A.e2.aA(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nP[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nP[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kn(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nP[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nP[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nP[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kH(q,new B.iS(n,f,A.b2,!0,f,new C.Re(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nP[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nP[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.btu(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bU0(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vd[r]
p=A.qu.aA(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vd[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.vd[r]
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
g=new C.Re(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iS(k,f,A.A,!0,f,new C.buo(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kH(q,new B.iS(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cGz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5m[w]
l.push(A.cw.aA(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b2(n,n,n,new C.bwZ(d.d,l,D.aAm,m,C.btS(e,0.4,0.62),f,C.btS(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hcK(g,w)
q=D.aAm[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kH(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hcK(g,w)
r=D.a5m[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kH(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VU,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJl(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btS(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dO(B.b2(f,f,f,new C.bsU(A.d.gH(a1),C.btS(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.emH),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dG.aA(0,A.j.D((o-0.7)/0.3,0,1))
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
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ci(A.A,f,f,new B.kH(k*(0.45+0.55*o),B.dO(new B.iS(l,f,A.A,!0,f,new C.Re(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.p(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f88())
A.d.u(a0,new B.N(w,new C.f89(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cbo(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vd[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.lb.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vd[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aCt[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vd[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,new B.kH(m,B.dO(new B.iS(k,e,A.A,!0,e,new C.Re(d,92,w,p,j,i,0,g*s,h,e),e),new B.p(0,l)),e),e),e))
l=D.vd[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,B.dO(new B.mJ(new C.bcT(w,f,q,e),e,new B.av(r,212),e,e),new B.p(0,D.aCt[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFZ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.p(-b0,-150),new B.p(b0,-40),D.emL],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nP[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCE[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nP[r]
f=g+0.2
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nP[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.dnN[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,new B.kH(g,B.dO(new B.iS(f,a3,A.A,!0,a3,new C.Re(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.p(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nP[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCE[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,B.dO(new B.mJ(new C.bsW(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.p(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.btu.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hC)
$.S()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.os
d.an(q,t)
t=B.bn(u,A.hC)
q=B.K()
q.r=A.c.j(s).gp(0)
d.an(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bsU.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ei(A.J),e.b*u,e.a*u)
$.S()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=T.Or
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
C.bcT.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ei(A.J),h=this.c,g=A.cw.aA(0,h)
$.S()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e2()
t.cY(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.N(new B.p(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bsW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aD(d){return d.c!==this.c}}
C.bwZ.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.S()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b2,A.b8,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.p(0,c3),new B.p(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hcK(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mg
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a8(A.b2,A.b8,A.x,B.a([a6,A.d.gam(w)],v),c1,c1).aK(0,a4))
d1.ar(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aG(a2,A.ai,c1,c1,a5)
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
a9=new B.bt()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gam(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aG(a2,A.ai,c1,c1,a5)
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
a2=new B.bt()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
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
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hC)
$.S()
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.an(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bp(g.save())
g.clipRect(B.hU(a4),$.mh()[1],!0)
$.S()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b2,A.b8,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aP4.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1E.prototype={
a7(){return"_Role."+this.b}}
C.qu.prototype={}
C.rb.prototype={}
C.D7.prototype={}
C.a_D.prototype={}
C.ag3.prototype={}
C.a1R.prototype={
gZ(d){return this.d}}
C.Di.prototype={}
C.acX.prototype={}
C.add.prototype={}
C.af9.prototype={}
C.bju.prototype={
a3J(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baX(d,e,f){return this.a3J(d,e,f,0,0.55)},
aDI(d,e,f,g){return this.a3J(d,e,f,0,g)},
baY(d,e,f,g){return this.a3J(d,e,f,g,0.55)},
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
w.b0()},
alf(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
te(d,e,f){return this.alf(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.dro(e))
A.d.bq(w.c,new C.drp(e))
w.b0()},
beP(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n9.h(0,v.b).c===D.xI)return!1
w=this.b
if(A.d.aV(w,new C.drl(d,e)))return!1
w.push(new C.D7(d,e))
this.b0()
return!0},
c3f(d){var w
if(d.b==="beat")return D.ck6[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCV[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Di(u,t,j.ax,90))
w.push(new C.Di(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1R(u,new B.p(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baX(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1R(u,new B.p(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Di(u,t,j.ax,120))
j.aDI(120,200,"noise",0.5)
j.baX(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Di(u,t,j.ax,230))
w.push(new C.Di(u,t,j.ax+160,160))
w.push(new C.Di(u,t,j.ax+320,100))
j.baY(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acX(u,new B.p((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baY(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.add(u,u.a2(0,new B.p(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3J(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3J(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af9(u,D.aCf[v],t,j.ax))
j.aDI(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDI(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cgc[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cww(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eH(w,new C.drm(d));v.C();)j.aCd(w.gR(0),j.ax+D.csx[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cJL[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eH(w,new C.drn(d));v.C();)j.aCd(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xF(w,0,v-700)},
cww(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_D(e,"~"+d))},
aCd(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag3(d.a,v,e,w))
u.push(new C.a_D(w,v))},
a7u(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aHh(r)
u.n(0,r,o.ax+o.c3f(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.drq(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.drr(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eH(u,new C.drs(p));r.C();)o.aCd(u.gR(0),o.ax)}else o.aHh(u)}}A.d.bq(o.d,new C.drt(o))
A.d.bq(o.e,new C.dru(o))
A.d.bq(o.f,new C.drv(o))
A.d.bq(o.w,new C.drw(o))
A.d.bq(o.x,new C.drx(o))
A.d.bq(o.r,new C.dry(o))
o.b0()},
vN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.p(q.a+o*e,q.b+p*e)
r.b=new B.p(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.p(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.p(l,o)
if(o>n){p=m.a=new B.p(l,n)
t=m.b=new B.p(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.p(-t.a*0.8,t.b)}},
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
v.push(B.a([n.a,n.b],r))}return A.X.aw(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Um(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n9.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.p(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.j.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D7(q,p))}k.b0()
return!0}catch(l){return!1}},
cW2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rb(n,r,new B.p(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beP(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xb.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGf(new C.bju(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cQ,A.L,A.az,$.ax()),A.bF,A.J,A.J,A.Z,null,null)}}
C.aGf.prototype={
adz(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adz=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adz)
case 6:q=n.k5(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ey8(s))
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
return B.i($async$adz,v)},
aau(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aau=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.exY(s))
u=3
w=6
return B.b(B.aA(),$async$aau)
case 6:e.aC("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$aau,v)},
bPi(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cF(0,0,new C.ey_())+"|"+A.d.cF(o,0,new C.ey0())
if(v===p.ch)return p.CW
u=new C.ey3()
t=x.s
s=B.a([],t)
r=new C.ey4(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eH(n,new C.ey1());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.ey2(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dB(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adz()
v.d.db=v.ay
w=v.q1(new C.eyy(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.U$=$.ax()
v.P$=0
w.bzW()},
ad4(d){return this.c2G(d)},
c2G(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad4)
case 6:q=m.aU(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Um(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZw(A.d.gH(D.aBH))
if(s.c!=null)s.m(new C.ey7())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad4,v)},
aZw(d){this.d.cW2(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lI,new C.exU(this))},
az3(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckp(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2u(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n9.h(0,r.b).c===D.xI)continue
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
cbw(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hBl(new B.p(n.a+36,n.b+0),new B.p(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEg(d){var w,v,u,t,s,r,q=this,p=q.az3(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHh(p)
return}if(q.r)return
t=D.n9.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rm)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbw(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clI(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckp(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az3(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clJ(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.p(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3S(){var w,v,u=this
if(u.z!=null){w=u.c2u(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beP(v,w)}else v=!1
if(v){B.jX()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adM(d){return this.c5z(d)},
c5z(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az3(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jY()
p=t.c
p.toString
w=3
return B.b(B.bU(I.m8,null,new C.eya(q),p,!0,!0,!1,A.lU,!1,!1,x.y),$async$adM)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adM,v)},
cbu(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.te(0,d,new B.p(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EL()},
ahI(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(I.m8,null,new C.eyc(),s,!0,!0,!0,A.lU,!1,!1,x.es),$async$ahI)
case 2:t=e
if(t!=null)u.aZw(t)
return B.h(null,v)}})
return B.i($async$ahI,v)},
af8(d){var w=0,v=B.j(x.H),u=this,t
var $async$af8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.exX(),t,null,!0,!0,x.y),$async$af8)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$af8,v)},
B(d){var w=this,v=null,u=B.a([B.ajw(w.r?new B.bL(A.a7,v,v,new B.D(A.H2,B.hp(D.bWI,D.fJp,new C.eyw(w),v),v),v):w.cbx(),A.b_,A.iO),B.E(B.cq(new C.eyx(w)),1)],x.p)
if(!w.r)u.push(w.cz_())
return B.c4(v,A.c3,B.bm(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bL0(){var w=null,v=new C.exZ(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bS(0,B.e9(B.as(B.q(w,B.cc(B.x(B.a([D.fUY,A.av,D.h1H,A.aB,v.$4(A.oD,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D5,A.cv,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k8,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pe,A.bl,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h0Z,new B.bL(A.aa,w,w,B.bP(!1,D.fS1,w,w,!0,w,w,w,this.gbKU(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XE,new B.o(I.m8,w,s,t,w,w,A.n),w,w,w,A.fu,Ao.amA,w,w,w),w,w,w),u,!0),0,0,0)},
cbx(){var w=this,v=null,u=B.aI(v,v,v,v,Ag.n6,v,v,v,new C.eyi(w),v,v,v,v,v,v),t=w.a9V(A.CX,"How it works",new C.eyj(w),!0),s=w.ay?A.oE:V.tb
return new B.D(D.bHl,B.A(B.a([u,D.bJ2,t,w.a9V(s,"Sound",new C.eyk(w),!0),w.a9V(A.ed,"Ideas",w.gcpu(),!0),w.a9V(K.wE,"Clear",w.gcbv(w),!0),w.aQ6(A.hi,"Show",new C.eyl(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQ6(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wu,B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.h6(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9V(d,e,f,g){return this.aQ6(d,e,f,g,!1)},
cz_(){var w=null,v=new C.eye(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.xI),v.$2("CHANGE",D.Fa),v.$2("REACT",D.rm)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.o(I.BV,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bCl,w,w,w)},
cz0(d){var w,v,u,t,s=null,r=D.n9.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fC,B.az(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cT,B.d(r.a,s,1,A.a2,s,s,s,D.aWd,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b2,A.b8,A.x,u,s,s),A.n),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyd(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjv.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bp(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.p(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
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
f=$.S()
e=B.a([],p)
d=new B.aG(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.km(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n9.h(0,l.b).d
a2=D.n9.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t1(new B.p(i,j),new B.p(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hBl(new B.p(j.a+36,j.b+0),new B.p(i.a-36,i.b),a4)
$.S()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.os
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.JD)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.S().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.km(t+a0,p,w-a0,j,w,j))
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
p=A.dK.aA(0,v)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.ku(p,j,A.dK.aA(0,v))
i.toString
j=B.ku(p,j,A.dK.aA(0,A.j.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=5
p.d=A.bu
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t1(j,i)
p.sav(new B.a8(A.a7,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kV
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kV
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A6.Bf,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bZ(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjw(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.p(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.clg(b7,b4.d,b5)
b6.restore()},
clg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n9.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bn(u,A.ir)
s=t.eQ(A.cC)
$.S()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mg
d.an(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wv
d.an(s,r)}s=t.eQ(A.cL)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.an(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b2,A.b8,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.an(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.an(t,r)
r=h.b
p=e.c
o=C.bjw(B.lz(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.p(s/2,r.gba(r)/2)))
n=C.bjw(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.p(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aCf[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rm){s=e.c.a2(0,new B.p(0,62))
r=B.K()
r.r=D.aCV[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjw(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjw(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xI)k.b4F(d,e.c.aJ(0,D.JD),q)
k.b4F(d,e.c.a2(0,D.JD),q)},
b4F(d,e,f){var w
$.S()
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
C.aOd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u0.prototype={
asa(d,e,f,g){var w=this
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
C.abC.prototype={}
C.acJ.prototype={}
C.a5D.prototype={
bgH(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h2()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abC(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7J(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQ1())},
alf(d,e,f,g){var w="p"+this.c++,v=new C.u0(w,e,f,g)
v.asa(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQc(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cN1(d,e,f,g,h){return A.d.aV(this.b,new C.bQ7(e,f,g,h))},
am6(d,e,f,g){var w
if(d===f||this.cN1(0,d,e,f,g))return null
w=new C.acJ(d,e,f,g)
this.b.push(w)
return w},
aCK(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Ak(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoS(d){return this.Mm(d)&&!d.x&&d.cx>this.Ak(d)},
b91(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mm(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbR(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A9.h(0,v)
if(w!=null)return w.a
return 100},
vN(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7J(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQd(a2),t).cF(0,0,new C.bQe(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQg(o)
m=B.a([],x.t)
l=new C.bQf(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQi(g,l,n)
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
a2.b8Y(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Ak(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8Y(e,d,w,!0)
a2.bRE(a4)},
b8Y(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQ3(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQ2(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQ5(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c0(b7,0,!1,b3)
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
if(h)B.bj(B.dN(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c0(b7,0,!1,b3)
a0=B.c0(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b91(t)*(1+t.CW))
a4=b2.aCK(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbR(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bV0(e,a0,b8)
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
bV0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c0(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c0(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bRE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCK(o)/a1.b91(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Ak(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJE(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgH(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ut(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.ut(o,"The "+$.qF().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the "+$.qF().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ut(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A9.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qF().h(0,n).b
l=f.b
l=l===A.j.iH(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iH(g)?""+A.j.V(g):B.w(g)
a1.ut(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fcJ.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ut(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ut(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.D(j/14,0,1)
break
case"motor":n=A.j.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ut(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.D(i/1,0,1)
if(!o.x&&i>1)a1.ut(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ut(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ut(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJE(d){return A.d.aV(this.a,new C.bQ0(d))},
ut(d,e){var w
d.x=!0
d.ay=e
this.bgH(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bll(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ3(d){var w=d.b
return D.aT0.q(0,w)||D.A9.al(0,w)||w==="buck"||w==="regulator"},
bia(d){var w,v=!0
if(!this.Mm(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A9.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VB(d,e){var w=this.b
return new B.Y(w,new C.bQk(d,e),B.U(w).k("Y<1>")).gJ(0)},
tR(d){var w,v
if(d.x)return!1
w=d.b
if(D.A9.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qF().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ3(d)||i.tR(d))return null
w=i.VB(d,0)
v=i.VB(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVC(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iH(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A9.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mz("battery"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.VB(n,0)+i.VB(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mz("switch"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qF().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Ak(k))return"The "+$.qF().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Ak(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bQ8(i,d))
h=q.b
h=h===A.j.iH(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mz(d){var w=this.a
return new B.Y(w,new C.bQb(d),B.U(w).k("Y<1>"))},
aIF(d){return this.Mz(d).aV(0,new C.bQa(0.35))},
qe(d,e){return A.d.aV(this.a,new C.bQ9(e))}}
C.ak6.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.K()
w.r=F.yg.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.p(u,t),1.1,v)
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
b6.cJJ(c2,new B.p(m*b8+l*(42+k),n*b9),new B.p(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hOP(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bu
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=F.ME.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wv
c2.N(new B.p(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bp(n.save())
n.translate(k,j)
i=A.j.D(A.lb.aA(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cmf(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Ak(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aG(a1,A.ai,b7,b7,a2)
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
a8=new B.bt()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.r=A.ay.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aG(a1,A.ai,b7,b7,a2)
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
a0=new B.bt()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.ep("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(h+-3,g+-8))}if(!e.x)h=(D.aT0.q(0,i)||D.A9.al(0,i)||i==="buck"||i==="regulator")&&!w.tR(e)&&w.VB(e,0)+w.VB(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.aw.gp(0)
c2.N(new B.p(k,j),10,h)
b0=new B.iH(new B.ep("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.p(g,h)
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=F.yg.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bia(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bia(e)){b0=new B.iH(new B.ep("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.p(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ar(M.Nl,F.a_8,b4)
l.toString
k=b2.f
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.p(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.Ot
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKo())){b5=A.d.cF(s,0,new C.bKp())
$.S()
b9=B.K()
b9.r=D.bhk.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fr(b7,A.cs,b7,b7,b7,D.fnW,A.a5,A.bX,b7,A.dD,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.p(12,10))}},
qU(d,e,f,g,h){var w=null,v=B.fr(w,A.cs,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dD,A.bY)
v.e5()
v.a5(d,f)},
cJJ(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hGQ(a0,a1,a2)
e.E(new B.c7(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aQ,F.ME,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aG,A.aQ,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.bj
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
if(q){n=new B.U_(new B.ry(B.xN(e),!1,B.a([],x.R))).gH(0)
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
f=t[u].Di(g)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PI(d,e,f,g){var w,v,u,t
$.S()
w=B.K()
v=g?A.b2:A.a7
u=g?A.b8:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Iv,null).aK(0,d))
return w},
aye(d,e,f){return this.PI(d,e,f,!0)},
c7i(d,e){return this.PI(d,A.bj,A.hZ,e)},
aiS(d,e){var w,v,u
$.S()
w=B.K()
w.sav(D.aRa.aK(0,B.bZ(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.epj)
v=e.a2(0,D.eps)
u=B.K()
u.r=A.cS.gp(0)
u.c=1.2
d.ah(w,v,u)},
cmf(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.K()
c0.sav(D.c6M.aK(0,D.f8W))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.os
c1.bZ(D.f8K,w)
if(c3){w=B.bn(D.f8U,A.jN)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.an(w,v)}u=C.hm3(c2)
c1.ah(new B.p(-u,0),D.eqV,c0)
c1.ah(D.enZ,new B.p(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.al(0,w)&&c2.ch!==1
if(s){J.bp(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGo(c1,c2)
break
case"solar":r=B.bn(D.f8N,A.iF)
c1.an(r,b3.PI(new B.a1(r.a,r.b,r.c,r.d),A.d2,A.bP,!1))
b9=B.K()
w=B.ar(D.blg,A.d7,0.25+0.55*c2.f)
w.toString
v=B.ar(D.buF,A.mU,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9C))
c1.ar(D.a9C,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.p(b9,-18),new B.p(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.p(-34,b9),new B.p(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.cx.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.p(b9,-18),new B.p(b9,18),w)}b9=new B.aG($.S().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bt())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dC.j(0.9).gp(0)
c1.N(D.eo2,4+4*w,b9)
break
case"crank":o=B.bn(D.f8y,A.fP)
c1.an(o,b3.aye(new B.a1(o.a,o.b,o.c,o.d),A.bw,A.bN))
b9=B.K()
b9.sav(D.aRb.aK(0,B.bZ(A.J,12)))
c1.N(A.J,12,b9)
n=new B.p(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cx.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.J,n,b9)
b9=B.K()
b9.sav(D.eAp.aK(0,B.bZ(n,7)))
c1.N(n,7,b9)
b3.aiS(c1,D.eqN)
b3.aiS(c1,D.enO)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bt())
m=B.K()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bp(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aG(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c7(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c7(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bt()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.eA6.aK(0,B.bZ(A.J,4.5)))
c1.N(A.J,4.5,b9)
break
case"switch":o=B.bn(D.f8F,A.mw)
b9=B.K()
b9.sav(D.at9.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,b9)
b3.aiS(c1,D.U0)
b3.aiS(c1,D.aLY)
h=c2.w?D.aLY:H.aLO
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.U0,h,b9)
b9=B.K()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.U0,h,b9)
b9=B.ku(D.U0,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aRU,D.aRg)
b9=B.K()
b9.r=A.fI.j(0.25).gp(0)
c1.an(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.an(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cI,c2.fx).gp(0)
c1.ah(D.aMg,D.aLW,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aMg,D.erg,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.eoQ,D.aLW,b9)
b9=B.K()
b9.r=A.e_.gp(0)
c1.N(A.J,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.p(M.fN[f]*22,0),20,9)
c1.an(B.bn(e,A.hU),b3.PI(e,A.d3,A.ob,!0))}break
case"pot":b9=B.K()
b9.sav(D.eAh.aK(0,B.bZ(A.J,21)))
c1.N(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.p(b9*18,w*18),new B.p(v*22,m*22),k)}b9=B.K()
b9.sav(D.eA4.aK(0,B.bZ(A.J,13)))
c1.N(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bu
c1.ah(new B.p(b9*3,w*3),new B.p(v*12,m*12),k)
break
case"resistor":a1=B.bn(D.aRU,D.aRg)
b9=B.K()
b9.sav(D.ca6.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aQ.gp(0)
c1.ar(D.f97,b9)
b9=c2.r
b3.qU(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.eqf,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dC.j(0.55*w).gp(0)
v.y=A.wv
c1.N(H.vu,34,v)}o=B.bs(D.emI,12,18)
c1.an(B.bn(o,A.hU),b3.PI(o,A.bj,A.e1,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.dx.gp(0)
v.c=1
c1.ah(new B.p(-9,w),new B.p(9,w),v)}w=B.K()
if(t)v=A.Mu
else{v=B.ar(A.e1,A.hH,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G4
else{m=B.ar(A.d2,A.dC,c2.fx)
m.toString}w.sav(new B.bY(A.p5,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bZ(A.tu,17)))
c1.N(A.tu,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tu,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c7(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.era,D.erc,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.eoJ,D.eoM,v)
w=B.a([],w)
a4=new B.aG(b9,A.ai,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.S()
b9=B.K()
b9.b=A.a9
b9.c=1.8
if(t)w=A.b6
else{w=B.ar(A.d2,D.bmj,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bIQ
c1.N(A.tu,30,v)}w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.eri,D.erh,w)
w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.eoS,D.eoR,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c7(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bt())
v=B.K()
if(t)m=A.jo
else{m=B.ar(A.em,D.bo2,c2.fx)
m.toString}if(t)k=A.kS
else{k=B.ar(A.ku,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f8_))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jZ.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.et.gp(0)
c1.ar(D.f85,v)
w=new B.aG(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c7(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.an(B.bn(a7,A.hV),b3.aye(a7,A.an,A.bi))
b9=B.K()
b9.r=A.cl.gp(0)
c1.ar(D.f7z,b9)
b9=B.K()
b9.r=A.cx.gp(0)
c1.ar(D.f7B,b9)
b9=c1.c
J.bp(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bp(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLJ,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.cI.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.J,3,w)
b9.restore()
b3.qU(c1,"M",D.eqM,A.as,14)
break
case"buzzer":a8=B.bs(A.J,42,42)
b9=B.K()
b9.sav(D.eAl.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.J,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.J,6,b9)
b3.qU(c1,"+",D.eqF,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bZ(A.J,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cB(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f8B,A.hV)
w=B.K()
w.sav(D.c7N.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c7(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bn2.j(0.5*b9).gp(0)
w.y=A.kV
c1.af(a9,w)}$.S()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m6,A9.yo,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hV)
w=B.K()
w.sav(D.c6E.aK(0,a7))
c1.an(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f8e,w)
for(p=0;p<4;++p){b0=new B.iH(new B.ep("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jh(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.p(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.an(B.bn(b1,A.hU),b3.c7i(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.K()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qU(c1,"1F",H.vu,A.c,11)
break
case"radio":a1=B.bn(D.a9C,A.fP)
b9=B.K()
b9.sav(D.cal.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.ob.j(0.6).gp(0)
c1.an(a1,b9)
b9=B.bn(D.f8C,A.iF)
w=B.K()
w.r=A.dW.gp(0)
c1.an(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.m6.gp(0)
w.c=1.4
c1.ah(new B.p(-27,b9),new B.p(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fz:A.od).gp(0)
c1.ar(D.f7G,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.K()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.p(b9,-13),new B.p(b9,-3),w)}b9=B.K()
b9.sav(D.aRb.aK(0,B.bZ(D.a8z,6)))
c1.N(D.a8z,6,b9)
b9=B.K()
b9.r=A.ob.gp(0)
c1.N(D.enY,4,b9)
b9=B.K()
b9.r=A.e1.gp(0)
b9.c=1.8
c1.ah(D.enT,D.aM2,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bZ(D.aM2,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nt.j(0.7).gp(0)
c1.cB(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f8M,A.hV)
v=B.K()
v.r=M.ny.gp(0)
c1.an(w,v)
b2=B.bn(D.f8J,A.hU)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bp(b9.save())
b9.clipRRect(B.nR(b2),$.np(),!0)
b9.translate(-33,-21)
L.hi1(c1,D.ffx,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b4.gp(0)
c1.N(D.eo9,1.6,b9)}else{w=B.K()
w.r=D.wc.gp(0)
c1.an(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bt())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bw.gp(0)
c1.ar(D.f84,b9)
break}C.isz(c1,c2,b3.b.d,b3.gcbS())
if(t)b3.qU(c1,"\u2716",D.erl,A.ay,14)
if(s)c1.c.restore()},
bGo(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.an(B.bn(w,A.mw),o.aye(w,A.d2,A.j5))
v=new B.a1(-22,-13,22,13)
$.S()
u=B.K()
u.sav(D.at2.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.e0.gp(0)
d.ar(D.f8o,u)
t=new B.a1(28,-5,34,5)
d.an(B.bn(t,A.hC),o.PI(t,A.d2,A.hZ,!0))
o.qU(d,"+",D.enz,A.aQ,11)
o.qU(d,"\u2212",D.eqO,A.ab,11)
o.qU(d,B.w(n===A.j.iH(n)?A.j.V(n):n)+"V",D.equ,A.aQ,13)
if(n===1.5){u=B.K()
u.r=A.by.gp(0)
d.ar(D.f8n,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qU(d,"FLAT",D.eqe,A.c0,9)}if(n>2){u=B.K()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.emR,D.aLB,u)
o.qU(d,n>3?"3 cells":"2 cells",D.eqt,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mw)
$.S()
s=B.K()
s.sav(D.c9V.aK(0,r))
d.an(u,s)
s=B.K()
s.r=A.d1.gp(0)
d.ar(D.f8p,s)
for(q=0;q<2;++q){p=F.aCD[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.sav(D.aRa.aK(0,B.bZ(new B.p(p,-18),5)))
d.N(new B.p(p,-18),u,s)}o.qU(d,"9V",D.eqm,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iF)
$.S()
s=B.K()
s.sav(D.at2.aK(0,r))
d.an(u,s)
s=B.K()
s.r=A.bl.gp(0)
d.ar(D.f8L,s)
for(q=0;q<2;++q){u=B.bn(B.bs(new B.p(F.IK[q],-20),8,10),A.hC)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cx.gp(0)
d.an(u,s)}o.qU(d,"+",D.enI,A.ay,10)
o.qU(d,"12V",D.eqq,A.as,15)}},
aD(d){return!0}}
C.mY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u0(o,r,q,p)
n.asa(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctZ(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am6(m,u[1],l,u[3])}}}
C.ak4.prototype={
S(){var w=x.N
return new C.ak5(A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.ak5.prototype={
afj(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bK2(w,d))
w.as=B.cy(A.lJ,new C.bK3(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bw0()},
a0X(d,e){return this.cka(d,e)},
b3l(d){return this.a0X(d,!1)},
cka(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0X=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rW:A.yz
p=d.b
w=3
return B.b(L.hio(s,r,p,d.ax<3.2,q,$.qF().h(0,p).b),$async$a0X)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0X,v)},
cwT(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bK4()),t=J.cD(u)
t.I(u,v)
t.bq(u,new C.bK5(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2g(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iP,new C.bK6(w,u,d))}},
a0D(d){return this.ciw(d)},
ciw(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.itO(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0D)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0D,v)},
a2g(d){return this.cut(d)},
cut(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bK0(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2g)
case 2:return B.h(null,v)}})
return B.i($async$a2g,v)},
Y(){this.a4()
this.bil()
this.mh()},
bil(){this.a.c.e=new C.bKl(this)},
mz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vN(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.AA)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.I(0,s.a)
q.a0X(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cQ.ai()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cQ.az(800),"",90,0,0.1,o)
if(A.cQ.ai()<0.35)G.dE(300+A.cQ.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cQ.ai()<0.4
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
case"kettle":if(s.fx>0)u=A.cQ.ai()<0.5
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
q.m(new C.bKm())},
bap(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b41(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mt.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hGQ(new B.p(k,n),new B.p(i,l),p)
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
afh(){this.a.toString
this.m(new C.bJv())},
bsF(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dd9[v]
if(!A.d.aV(p.a.c.a,new C.bKn(u,w))){o=new B.p(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JF:o
s=s?Q.JF:o
q=t.alf(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.afh()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sp[v].a)
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
w.push(n.b3R(s,!0))
n.a.toString
if(t)w.push(n.b3R(r,!0))
w.push(B.E(B.cq(new C.bKk(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b3R(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qF()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AU,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nW,p,p,p)],n),A.l,p,A.ba,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.or,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJw(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.hf,p,p,A.aL,!1),A.f,p,p,new B.o(I.BV,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b1d(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.o(F.afK,w,B.L(A.by,A.r,1),v,w,w,A.n),w,w,w,w,F.alL,w,w,w)},
cmg(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qF().h(0,o),m=d.dy,l=d.fr,k=new C.bJP(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KL,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.af,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bYA,p,p,p,new C.bJC(q,d),p,p,p,p,"Remove part",A.ch),B.aI(p,p,p,p,A.PY,p,p,p,new C.bJD(q),p,p,p,p,p,A.ch)],g),A.l,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EP,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fxg,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aQ,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bgd(d)
if(v!=null){l=(d.x?A.ay:A.aw).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.aw).j(0.5),A.r,1)
m.push(new B.D(A.i0,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fEd,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.co,p,p,p),p))}if(C.hg4(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJE(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bs,p,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.tR(d)?"Showing: "+F.Rp[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.tR(d))l.push(new E.fC(A.Hz,"Open big screen",new C.bJH(q,d),h,p))
A.d.u(m,l)}if(D.mt.al(0,o)&&!C.hg4(o)){l=B.a([A.am,B.d(q.a.c.tR(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.tR(d))l.push(new E.fC(A.PG,"Open the "+$.qF().h(0,o).b,new C.bJI(q,d),h,p))
A.d.u(m,l)}if(D.mt.al(0,o))A.d.u(m,B.a([A.am,new E.fC(A.D0,"Make it bigger (or tap it 4 times)",new C.bJJ(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tR(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fy8,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dvD[s]
j=r===A.j.iH(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJK(q,d,r),p,h,p))}i.push(new B.D(A.li,B.bW(A.bH,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fXk)
A.d.u(m,i)}if(q.a.c.Mm(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Ak(d),2)
i=q.a.c
w=i.aoS(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoS(d)?A.c0:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.j.D(d.cx/q.a.c.Ak(d),0,1)
i=q.a.c.aoS(d)?A.ay:A.b4
m.push(new B.D(A.i0,B.x(B.a([l,A.cT,B.bx(j,B.kq(A.by,p,p,5,p,w,new B.lN(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i0,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.frE,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dko[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJL(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.dai[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJM(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJN(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJO(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJF(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJG(d)))
if(o==="crank")m.push(D.fSB)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.b1d(new B.cP(D.b6D,B.cc(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bdg.prototype={}
C.Wo.prototype={
S(){return new C.aFe(C.hm2(),new B.cw(null,x.q),B.aR(x.S))}}
C.aFe.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afi()},
afi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKt(),$async$afi)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.isY(t.d,r)
if(s!=null){t.m(new C.e1i(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afi,v)},
Fx(){var w,v=this
if(!v.as)return
w=C.iiK(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGF(w)},
jm(d){if(d!==A.fW)this.Fx()},
t(){$.aW.hV(this)
this.Fx()
this.a3()},
cbU(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e1r(q),u).gJ(0)
s=new B.Y(v,new C.e1s(),u).gJ(0)
r=new B.Y(v,w.gcZe(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e1t(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fx()
if(A.o.F(q.w,10)===0){w=q.f
$.ajc()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajc()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JQ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e1u())
q.Fx()
w=q.c
w.toString
w=B.PJ(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajc()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mb,p,p,p,p,p,p,p,p,p,p))}},
ai3(){var w=0,v=B.j(x.H),u=this,t
var $async$ai3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e1h(u),t,null,!0,!0,x.H),$async$ai3)
case 2:return B.h(null,v)}})
return B.i($async$ai3,v)},
b1c(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h6(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1b(d,e,f,g){return this.b1c(d,e,f,g,null)},
asS(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.az(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e8,new B.dm(1,A.cp,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ago(){var w=0,v=B.j(x.H),u=this,t
var $async$ago=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ec(new C.e1d(u),!1,null,x.H)),$async$ago)
case 2:t=u.e.gbk()
if(t!=null)t.bil()
if(u.c!=null)u.m(new C.e1e())
u.Fx()
return B.h(null,v)}})
return B.i($async$ago,v)},
bJx(){var w,v,u,t,s=null,r=this.f
$.ajc()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bd:A.ay
u=B.m(9)
t=B.L(I.BV,A.r,1.5)
return B.q(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xp,s,s,s),s,s,s),A.f,s,D.b6K,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f6,s,s,s)},
ajd(){var w=0,v=B.j(x.H),u=this,t
var $async$ajd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mT,null,new C.e1q(u),t,!0,!0,!0,A.kh,!1,!1,x.H),$async$ajd)
case 2:return B.h(null,v)}})
return B.i($async$ajd,v)},
cbV(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.q(r,D.bZT,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1w(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bcH,A.f,r,r,new B.o(A.br,r,B.L(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.af,o,A.af,B.E(B.x(B.a([D.fVi,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eW:A.hx,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.azg(s.gcid(),r),A.vB,s.b1b(A.uN,"Construction Lab: real 3D wiring, plumbing and a house",A.cI,new C.e1x(s,d)),s.b1c(A.lN,"Challenges",A.aQ,s.gczs(),s.bJx()),s.b1b(A.CX,"How to play",A.aG,new C.e1y(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.asS(A.oy,"Circuits",A.bg,s.gcsj()),A.bo,s.asS(A.ow,"Repair",A.aQ,new C.e1z(s)),A.bo,s.asS(K.wE,"Clear",A.c0,new C.e1A(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(I.BV,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bIb,r,r,r)},
B(d){var w=this,v=null
$.atB="tech"
return B.c4(v,A.c3,B.bm(!0,B.x(B.a([w.cbV(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hkU(w.d,w.e,w.gcbT(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azg.prototype={
S(){return new C.bbo(null,null)}}
C.bbo.prototype={
gaza(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Y,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaza().t()
this.bxm()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h6(new B.a5(42,42,B.c6(this.gaza(),new C.cLy(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbn.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.K()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.os
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.eAg.aK(0,B.bZ(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fZ(A.A,0,6.283185307179586,A.x,D.d1_,t,new B.mN(p)).aK(0,B.bZ(s,r)))
d.N(s,r,v)
p=new C.cLx(d)
p.$3(s.a2(0,A.tu),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.ep4),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.ers),2.6,0.5+0.5*Math.cos(q))
u=B.fr(t,A.cs,t,t,t,D.fo1,A.a5,A.bX,t,A.dD,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.p(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.azB.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azC.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bw_()}}
C.aLK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA0.prototype={}
C.fQ.prototype={}
C.Kj.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W7.prototype={
S(){return new C.bm3(null,null)}}
C.bm3.prototype={
gaas(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.oq,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaas().t()
this.bze()},
gSF(){var w=this.gaas().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aSb
return B.c4(w,X.ZN,B.bm(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.as(v.b===D.AC?this.bLF(v):this.cp4(v),w,w,w),B.ap(w,B.aI(w,w,w,w,A.n5,w,w,w,new C.dYs(d),w,w,w,B.o1(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fpL,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbW(d){var w
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
cp4(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9L
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(this.gaas(),new C.dYr(this,w,d,o),q)
if(p===D.a9M)v=new B.BK(D.bIP,v,q)
p=this.cbW(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(p,B.q(q,B.q(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A0.H4,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bCb,new B.R(u,u,u,u),q,q,q),q)},
b9y(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.j.bh(this.gSF()*0.4),0,100),q=d.b===D.a9L,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.v(B.df(s)),2,"0")+":"+A.a.b_(A.o.v(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tN,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.q(t,t,A.f,t,t,new B.o(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bIw,t,t,t,3))}n.push(A.dh)
n.push(D.fNR)
n.push(A.bo)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bL(A.a7,t,t,B.BY(A.A,B.q(t,t,A.f,t,t,new B.o(A.b4,t,t,B.m(2),t,t,A.n),t,t,t,A0.H4,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r9)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fEA,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.i,0,t,t),t)},
ax2(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.as(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dqv,new B.a8(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.fuD,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYn(this,d),v,v,v,v,v,v,!1,A.a4)},
c2c(d,e){return this.ax2(d,e,!0)},
c1U(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aSc||n===D.Ew,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kp,0.5)
l.toString
l=B.a([k,A.dB,l],x.O)
k=p.b9y(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aT,A.r,1)
w=B.az(o,B.q(o,B.bx(B.m(23),B.b2(o,o,o,new C.afX(0,p.gSF(),o),A.fQ),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.i1,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dYl(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kB[s]
t.push(new B.ci(A.A,o,o,p.c2c(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kX(0.92,t,v,8,12,A3.wp,o,!1),1)],u)
if(n!==D.a9M){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cX(F.kB,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.ax2(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.l,o,A.qW,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bD8,H.ang,o,o,o))}return B.q(o,B.x(k,A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bF1(d,e){var w=null
return B.q(w,B.x(B.a([this.b9y(d),B.E(B.b2(w,w,w,new C.afX(e,this.gSF(),w),A.fQ),1),B.az(w,B.q(w,B.as(B.d(F.kB[e].a,w,w,w,w,w,w,A.KA,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYg(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLF(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.q(t,B.c6(this.gaas(),new C.dYj(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bI6,new B.R(8,8,8,s),t,t,t),t)}}
C.by2.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kp,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aF,A.x,B.a([u,A.dB,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bIU
d.N(new B.p(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.afX.prototype={
a5(d,e){return L.Mb(d,e,this.b,this.c)},
aD(d){return!0}}
C.aNy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwP.prototype={}
C.a9A.prototype={
B(d){var w=null
return B.c4(B.eP(w,w,w,!0,!0,D.aik,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,K.arZ,w,w,w,new C.cmR(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h39,w,w,w,1,w,!0),D.aik,B.cl(B.a([D.esT,B.cq(new C.cmS())],x.p),w,w,D.bEe,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XJ.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGI(w,new B.au(A.ax,$.ax()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGI.prototype={
Y(){this.a4()
this.mh()},
b7q(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7q(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eUT(v))
C.JQ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdD(){if(this.d.length<2)return
this.m(new C.eUP(this))},
b1K(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eUO(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdC(),p=s.d,o=B.E(B.az(r,B.b2(r,r,r,new C.bye(p,s.f,r),A.fQ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fCF,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBN[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.az(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fBS,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eUR(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lA(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bA(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kk,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eUS(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.ao,r,r,r,r),1),A.af,new E.fC(A.i2,"Add",s.gcdA(s),A.c,r),A.bo,new E.fC(A.ox,"Spin",q,A.b4,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bye.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.p(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.K()
w.r=D.biY.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.a9
w.c=3
w.r=A.aQ.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bZ(g,f)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=D.aBN[A.o.F(r,8)].gp(0)
d.cB(p,q,u,!0,o)
o=B.bZ(g,f)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cB(o,q,u,!0,p)
J.bp(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iH(new B.ep(p,l,l,A.cN,l,l,l,l,l,l,D.foR),A.a5,A.bX,new B.jh(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.p(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahX.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aQ.gp(0)
d.N(g,20,i)
m=new B.aG(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bt())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.b6.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Ww.prototype={
S(){return new C.bme($,A.bF,0,B.a([],x.X),null,null)}}
C.bme.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JQ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UJ(900,new C.e4h())}w.m(new C.e4i())},
b1M(d){return this.m(new C.e4c(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.v(A.j.aq(m,60)),2,"0")
v=A.a.b_(A.o.v(A.o.F(A.j.cC(m),60)),2,"0")
m=B.b2(n,n,n,new C.bsV(l,A.c0,n),A.aTH)
u=B.d(w+":"+v,n,n,n,n,n,n,D.ftw,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fsu,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vF,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dnq[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e4e(o,q),n,A.c0,n))}m=o.f
p=m?A5.uW:A.hi
m=m?"Pause":"Start"
return E.lA(A.c0,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e4f(o),A.b4,n),new E.fC(A.oA,"Reset",new C.e4g(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bsV.prototype={
a5(d,e){var w,v,u,t,s=e.ei(A.J),r=e.a/2-14
$.S()
w=B.K()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bZ(s,r)
v=B.K()
v.b=A.a9
v.c=16
v.d=A.bu
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.fZ(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bZ(s,r)))
d.cB(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.VH.prototype={
S(){return new C.blN($,A.bF,0,B.a([],x.X),null,null)}}
C.blN.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T5.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPK())
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
E.mv("flute",D.cb9[t]+5,1400,0.35)}p.m(new C.dPL())},
gcdG(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L7("Press Start",0.5)
w=D.T5.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPF())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L7("Breathe in",0.5+0.5*A.dG.aA(0,p))
case 1:return new B.L7("Hold",1)
case 2:return new B.L7("Breathe out",1-0.5*A.dG.aA(0,p))
default:return new B.L7("Hold",0.5)}}}return new B.L7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdG(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pY,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kk,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.T5.gev(D.T5));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dPI(r,v),q,A.hv,q))}w=r.e
v=w?A.zs:A.hi
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dPJ(r),A.b4,q))
return E.lA(A.hv,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aK9.prototype={}
C.Wn.prototype={
S(){return new C.bm5(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.bm5.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,K.oI,s,s,s,new C.e0N(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.eo(B.az(s,B.b2(s,s,s,new C.bo7(t.e,t.x,s),A.fQ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0O(t),new C.e0P(t),s,s,s,s,s,s,s,s,s,new C.e0Q(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d2w[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e0R(t,v),!1,s))}u=t.r
return E.lA(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iQ(A.bE,""+A.j.V(u),"Brush",30,2,new C.e0S(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e0T(t),A.CO,A.bE,s),new E.fC(A.pz,"Undo",new C.e0U(t),A.c,s),new E.fC(A.ek,"Clear",new C.e0V(t),A.c,s),new E.fC(A.Pt,"Paper",new C.e0W(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bo7.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bu
q.e=A.dT
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aG(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c7(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gam(n).a,A.d.gam(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aD(d){return!0}}
C.X6.prototype={
S(){var w=x.S
return new C.aG1(B.aR(w),B.aR(w))}}
C.aG1.prototype={
Y(){this.a4()
this.aun()},
aun(){var w,v,u=this,t=x.N,s=B.bq(D.dsD,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dB(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dB(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdB(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erI(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gam(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.mX,new C.erJ(s,v,u),t)
else{s.x=!0
B.bO(Ab.GH,new C.erK(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VG,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yM,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iX,A.i,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.erO(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d46[t]
o.push(new E.dW(s.b,r.d===s.a,new C.erP(r,s),q,A.aG,q))}o.push(new E.fC(K.aqu,"New game",new C.erQ(r),A.b4,q))
return E.lA(A.aG,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.Xg.prototype={
S(){return new C.aGm(B.a([],x.t))}}
C.aGm.prototype={
cdF(d){A.d.a8(this.d)
this.w=!0
this.b1L()},
b1L(){this.d.push(A.cQ.az(4))
this.e=0
this.a00()},
a00(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a00=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCu(t))
s=x.H
w=3
return B.b(B.bO(A.lI,null,s),$async$a00)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVz(n)
w=7
return B.b(B.bO(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a00)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eCv(t))
case 1:return B.h(u,v)}})
return B.i($async$a00,v)},
aVz(d){this.m(new C.eCs(this,d))
E.mv("marimba",D.cb8[d]+5,450,0.55)
B.bO(A.GF,new C.eCt(this),x.H)},
cdH(d){var w,v,u=this
if(!u.w||u.r)return
u.aVz(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eCw(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCx(u))
B.bO(A.hJ,new C.eCy(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aWg,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fD5,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAG[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aAG[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b_,new B.o(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jp,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCz(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.dc,new B.fH(1,B.kX(1,l,2,12,12,p,A.dZ,!1),p)],m),A.l,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lA(A.bl,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hi,n,q.gcdE(q),A.b4,p)],m),p,p))}}
C.XA.prototype={
S(){return new C.bnl(new B.au(A.ax,$.ax()))}}
C.bnl.prototype={
axW(d){return B.p7(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQm(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQv()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bA(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A7.xO),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b5a),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lW,"Bill amount",!0,!0,!1,m,m,m,m,D.fAl,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ec,m,m,m,1,m,m,!1,"\u2022",m,new C.eQr(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aVe,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.m(20)
r=B.L(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bA,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axW(w)),t.$2("Total","$"+n.axW(v)),A4.NM,t.$3$big("Each of "+n.f+" pays","$"+n.axW(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cPq[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.eQs(n,o),m,A.b4,m))}l=n.f
return E.lA(A.b4,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iQ(A.aG,""+l,"People",20,1,new C.eQt(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eQu(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.X5.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmQ(w,A.cQ,$,A.bF,0,B.a([],x.X),null,null)}}
C.bmQ.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
E.XC("snare",0,0.5)}u.m(new C.eqn())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h2()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eqo())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfF(v,o.r>0,n))}u=B.az(n,B.as(B.bW(A.fU,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqg(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d3,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e1(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fzv,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eAk,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqh(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.foj,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kk,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqi(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dkC[r]
v.push(new E.dW(q.b,o.d===q.a,new C.eqj(o,q),q.c,A.bg,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iQ(A.bg,""+s,"Dice",4,1,new C.eqk(o),s))}if(o.d==="num"){s=o.z
s=E.iQ(A.bg,""+s,"From",100,1,new C.eql(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iQ(A.bg,""+p,"To",1000,2,new C.eqm(o),p)],m))}return E.lA(A.bg,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bfF.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cQ.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=B.a([],x.p)
for(s=D.dEI.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,A.XI,p,18,p,p,p,p,p,18),p))
return B.eG(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzX.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bz0()}}
C.aNF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA2.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzm()}}
C.aO7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAb.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzQ()}}
C.aOy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAk.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bAg()}}
var z=a.updateTypes(["Q(u0)","~()","Q(a5D)","aB<~>()","Q(D7)","H(u0,H)","G(G,u0)","Q(D3)","Q(a_D)","Q(acJ)","Q(a4u)","Q(nL)","XB()","VG()","a9A()","Xb()","Xq()","Xc()","Q(mY)","VN()","agf(Z,H)","af6(Z,H)","~(a9<@,@>)","H(D3,D3)","n(eh)","Q(ag3)","Q(a1R)","Q(Di)","Q(add)","Q(af9)","Q(acX)","H(H,rb)","H(H,D7)","n(rb)","~(rb,ai<n>,H)","rb?(D7)","X5()","v(n,a1E)","Q(abC)","~(Bb)","XE()","~(uQ,n,p,u,G)","~(n,u0)","Wo()","WQ(Z)","Oh(Z)","W7(Z,bw<G>,bw<G>)","XJ()","Ww()","VH()","Wn()","X6()","Xg()","XA()","Q(rb)"])
C.fKR.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fzw.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fHf.prototype={
$1(d){var w
if(!this.a.Mm(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fHg.prototype={
$1(d){return d.x},
$S:z+0}
C.fKO.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fKP.prototype={
$1(d){var w
if(!this.a.Mm(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fKQ.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eju.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ejv.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ejw.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iz)}},
$S:8}
C.ejH.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejI.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejD.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejB.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejC(w,this.b,e)))},
$S:1906}
C.ejC.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejE.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX3().alf(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejz(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejA(w.a,v,w.f,w.r))},
$S:0}
C.ejz.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:205}
C.ejA.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejF.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX3().am6(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejy(w.a,v,w.e,w.f))},
$S:0}
C.ejy.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejG.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejx(w,this.b))},
$S:0}
C.ejx.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejL.prototype={
$0(){var w=this.a
return w.m(new C.ejK(w))},
$S:0}
C.ejK.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejM.prototype={
$0(){var w=this.a
return w.m(new C.ejJ(w))},
$S:0}
C.ejJ.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejN.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PQ()},
$S:0}
C.ejO.prototype={
$0(){return this.a.Z9(this.b)},
$S:0}
C.ejP.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PQ():w.aYA()},
$S:2}
C.ejQ.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PQ():w.aYA()},
$S:0}
C.eyO.prototype={
$2(d,e){return d+e},
$S:1907}
C.ez7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ez6(w,d))},
$S:1908}
C.ez6.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ez8.prototype={
$0(){},
$S:0}
C.ez9.prototype={
$0(){},
$S:0}
C.eyQ.prototype={
$0(){return this.a.m(new C.eyP(this.b,this.c))},
$S:0}
C.eyP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyF.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eyG.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eyH.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eyI.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eyJ.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eyK.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eyL.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.eyM.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:32}
C.eyN.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.eyD.prototype={
$1(d){return this.a.$1(!0)},
$S:70}
C.eyE.prototype={
$1(d){return this.a.$1(!1)},
$S:112}
C.eyC.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.ez0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bjx(o,p),n)
w=this.b
v=C.bCy("WORLD",w.a,w.c)
u=C.bCy("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.c0:A.b4
t=C.bCy("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Dw[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bCy("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCy("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iX,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI3(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tg[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oB,"Again",new C.eyW(o),A.c,p),new E.fC(A.ow,"Rebuild",new C.eyX(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jI,"Next world",new C.eyY(o),A.b4,p))
n.push(C.hzU("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hzU("Crash!",o.at,A.c0,B.a([new E.fC(A.oB,"Try again",new C.eyZ(o),A.b4,p),new E.fC(A.ow,"Rebuild",new C.ez_(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:67}
C.eyW.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.eyX.prototype={
$0(){var w=this.a
return w.m(new C.eyT(w))},
$S:0}
C.eyT.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyY.prototype={
$0(){var w=this.a
return w.m(new C.eyS(w))},
$S:0}
C.eyS.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eyZ.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.ez_.prototype={
$0(){var w=this.a
return w.m(new C.eyR(w))},
$S:0}
C.eyR.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ez1.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eyV(v,w))},
$S:0}
C.eyV.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ez2.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ez3.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ez4.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ez5.prototype={
$0(){var w=this.a
return w.m(new C.eyU(w))},
$S:0}
C.eyU.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPD.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.hv2(),C.hv3()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kX(0,B.cO(J.t(r,1)))
q.m(new C.dPC(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPC.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPd.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPe.prototype={
$0(){return this.a.bZY(B.aU(J.t(this.b,"group")))},
$S:0}
C.dPf.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPg.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:335}
C.dPE.prototype={
$0(){return E.XC("kick",0,0.25)},
$S:0}
C.dPh.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPi.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPj.prototype={
$0(){return E.XC("kick",0,0.5)},
$S:0}
C.dPk.prototype={
$0(){return G.dE(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dPm.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.W(0,u)
else{v.I(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dPl(u)))u.cy=null
u.id=0},
$S:0}
C.dPl.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAn(d)},
$S:z+10}
C.dPa.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.m(w.gc9C())},
$S:0}
C.dPc.prototype={
$0(){return this.a.aeI(null)},
$S:0}
C.dPt.prototype={
$0(){var w=this.a.as
return w==null?null:w.fa(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dPu.prototype={
$0(){return this.a.cG4(this.b.a)},
$S:0}
C.dPv.prototype={
$0(){return this.a.aeI(this.b)},
$S:0}
C.dPw.prototype={
$1(d){var w=this.a
return w.m(new C.dPs(w,d))},
$S:6}
C.dPs.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPx.prototype={
$0(){var w=this.a
return w.m(new C.dPr(w,this.b))},
$S:0}
C.dPr.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPy.prototype={
$0(){var w=this.a
return w.m(new C.dPq(w))},
$S:0}
C.dPq.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPz.prototype={
$0(){var w=this.a
return w.m(new C.dPp(w))},
$S:0}
C.dPp.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fa(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LQ},
$S:0}
C.dPA.prototype={
$0(){var w=this.a
return w.m(new C.dPo(w))},
$S:0}
C.dPo.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0l()
else w.p3=null},
$S:0}
C.dPB.prototype={
$0(){var w=this.a
return w.m(new C.dPn(w))},
$S:0}
C.dPn.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6I.prototype={
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
$S:290}
C.c6J.prototype={
$1(d){var w=new B.qs([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:390}
C.fsM.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:232}
C.fsN.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:232}
C.fsO.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:232}
C.fsV.prototype={
$1(d){return!J.t(d,0)},
$S:232}
C.fsW.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:232}
C.fsX.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:232}
C.dRi.prototype={
$1(d){return this.a.avb(0)},
$S:8}
C.dQX.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ii8(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dR_.prototype={
$1(d){return""+d},
$S:76}
C.dRj.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQV.prototype={
$1(d){return this.a.avb(this.b)},
$S:8}
C.dQW.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.az1(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mP(0,d,a1.mi(0.15,0.3))
u=a1.mP(0,d,a1.mi(0.15,0.62))
t=a1.mP(0,"and",a1.mi(0.48,0.46))
s=a1.mP(0,a0,a1.mi(0.82,0.46))
a1=t.a
w.push(new C.nL(v.a,a1,0))
w.push(new C.nL(u.a,a1,1))
w.push(new C.nL(a1,s.a,0))
break
case 1:v=a1.mP(0,d,a1.mi(0.12,0.25))
u=a1.mP(0,d,a1.mi(0.12,0.65))
r=a1.mP(0,"xor",a1.mi(0.46,0.25))
q=a1.mP(0,"and",a1.mi(0.46,0.65))
p=a1.az0(0,a0,a1.mi(0.82,0.25),0)
o=a1.az0(0,a0,a1.mi(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nL(a1,n,0))
m=u.a
w.push(new C.nL(m,n,1))
l=q.a
w.push(new C.nL(a1,l,0))
w.push(new C.nL(m,l,1))
w.push(new C.nL(n,p.a,0))
w.push(new C.nL(l,o.a,0))
break
case 2:k=a1.mP(0,"clock",a1.mi(0.15,0.4))
j=a1.mP(0,"not",a1.mi(0.45,0.65))
s=a1.mP(0,a0,a1.mi(0.82,0.3))
i=a1.mP(0,"buzzer",a1.mi(0.82,0.65))
a1=k.a
w.push(new C.nL(a1,s.a,0))
n=j.a
w.push(new C.nL(a1,n,0))
w.push(new C.nL(n,i.a,0))
break
default:h=a1.mP(0,d,a1.mi(0.12,0.25))
g=a1.mP(0,d,a1.mi(0.12,0.7))
f=a1.mP(0,"nor",a1.mi(0.5,0.25))
e=a1.mP(0,"nor",a1.mi(0.5,0.7))
s=a1.mP(0,a0,a1.mi(0.86,0.25))
a1=f.a
w.push(new C.nL(g.a,a1,0))
n=e.a
w.push(new C.nL(n,a1,1))
w.push(new C.nL(h.a,n,0))
w.push(new C.nL(a1,n,1))
w.push(new C.nL(a1,s.a,0))}},
$S:0}
C.dR0.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.az1(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D3(p,"switch",new B.p(0.14*q.a,r*q.b),0))}o.mP(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dQQ.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQR.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQS.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQT.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQU.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ae1(this.c)
if(v.ax)C.JQ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dR1.prototype={
$0(){},
$S:0}
C.dR2.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dR3.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQZ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dQY(v))
w.cy=null},
$S:0}
C.dQY.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQP.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mP(0,this.b,new B.p(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRc.prototype={
$0(){var w=this.a
return w.m(new C.dRb(w))},
$S:0}
C.dRb.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRd.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c2,B.jm(B.b2(w,w,w,new C.bdy(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dR6(v),w,w,w,new C.dR7(v),new C.dR8(v),new C.dR9(v),w,w,w,w,w,w,w,w,w,w,new C.dRa(v),w,w,w,!1,A.a4)},
$S:36}
C.dRa.prototype={
$1(d){return this.a.cbn(d.b)},
$S:65}
C.dR8.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cko(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azT(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:48}
C.dR9.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.p(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dR7.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2t(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dR4(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jX()}}t.z=t.as=null},
$S:38}
C.dR4.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dR6.prototype={
$1(d){return this.a.axP(d.b)},
$S:312}
C.dRe.prototype={
$0(){return this.a.bDS(this.b.a)},
$S:0}
C.dRf.prototype={
$0(){return this.a.avb(this.b.a)},
$S:0}
C.dRg.prototype={
$0(){var w=this.a
return w.m(new C.dR5(w))},
$S:0}
C.dR5.prototype={
$0(){var w=this.a
w.az1(0)
w.ay=null},
$S:0}
C.dRh.prototype={
$0(){return this.a.cBI(this.b)},
$S:0}
C.cWa.prototype={
$0(){var w=this,v=null,u=B.fr(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:261}
C.dXu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXt.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXw.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4m()},
$S:131}
C.dXv.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.ftc.prototype={
$0(){return K.aLl},
$S:z+40}
C.ftd.prototype={
$0(){return D.dQi},
$S:z+43}
C.fte.prototype={
$0(){return D.dN9},
$S:z+13}
C.ftf.prototype={
$0(){return D.egG},
$S:z+14}
C.ftg.prototype={
$0(){return D.dZz},
$S:z+15}
C.fth.prototype={
$0(){return K.aLc},
$S:z+16}
C.fti.prototype={
$0(){return D.ees},
$S:z+17}
C.ftj.prototype={
$0(){return K.aLk},
$S:z+12}
C.ftk.prototype={
$0(){return D.dPq},
$S:z+19}
C.f8B.prototype={
$2(d,e){return new C.agf(e,$.bH1()[e],new C.f8A(e,this.a),null)},
$S:z+20}
C.f8A.prototype={
$0(){var w=this.a,v=I.aIT.h(0,$.bH1()[w].a)
$.atB=v==null?"music":v
B.a6(this.b,!1).ce(B.ec(new C.f8y(w),!1,null,x.H))},
$S:0}
C.f8y.prototype={
$1(d){return $.bH1()[this.a].e.$0()},
$S:39}
C.f8C.prototype={
$2(d,e){return new C.af6(e,D.aBi[e],new C.f8z(this.a,e),null)},
$S:z+21}
C.f8z.prototype={
$0(){return this.a.d.$1(D.aBi[this.b])},
$S:0}
C.f8h.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f8g.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8f.prototype={
$1(d){var w=this
return new B.dY(new C.f8e(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f8e.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fKF,A.av,D.fRu,A.ae],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fzP,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EO,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.af,new B.bz(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EO,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dzV[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fC,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f8c(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c8(A.aL,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bJ(A.AZ,a0,new C.f8d(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A2.yN,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:104}
C.f8c.prototype={
$0(){var w=this
return w.a.$1(new C.f8b(w.b,w.c,w.d))},
$S:0}
C.f8b.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f8d.prototype={
$0(){var w=this,v=w.a
v.m(new C.f8a(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f8a.prototype={
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
C.f8p.prototype={
$0(){var w=this.a
return w.m(new C.f8o(w))},
$S:0}
C.f8o.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f8q.prototype={
$0(){return E.uH(this.b,this.a.f,"scene")},
$S:0}
C.f8r.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gam(u),0.4)
u.toString
w=this.a.ga_z().x
w===$&&B.c()
return new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b2G,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bk,v,v)},
$S:284}
C.f8s.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.ev(A.A,B.c6(new B.h7(B.a([u.guL(),u.ga_z()],x.dS)),new C.f8n(u,this.b,v),w),A.f,A.e7),w,w,w)},
$S:214}
C.f8n.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guL().x
r===$&&B.c()
w=r<0.9?1:1-C.btS(r,0.9,0.98)
v=s.ga_z().x
v===$&&B.c()
u=A.dG.aA(0,v)
switch(s.gaz2().a){case 0:s=s.bD2(t.b,r,u,t.c)
break
case 1:s=s.bU0(t.b,r,u,t.c)
break
case 2:s=s.cGz(t.b,r,u,t.c)
break
case 3:s=s.bFZ(t.b,r,u,t.c)
break
case 4:s=s.bJl(t.b,r,u,t.c)
break
case 5:s=s.cbo(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:181}
C.f8t.prototype={
$2(d,e){var w=B.abp(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gam(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gam(v),0.4)
v.toString
v=w.cPx(u,A.by,v,3.5)
u=this.a
w=u.guL().x
w===$&&B.c()
return B.Z0(B.kY(null,null,null,1,0,new C.f8m(u),A.j.D(w,0,1)),v)},
$S:1910}
C.f8m.prototype={
$1(d){var w=this.a
w.guL().sp(0,d)
if(w.as)w.m(new C.f8i(w))},
$S:6}
C.f8i.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8u.prototype={
$0(){var w=this.a
w.guL().sp(0,0)
w.af7()},
$S:0}
C.f8v.prototype={
$1(d){var w=this.a
w.m(new C.f8l(w,d))
if(w.as)w.af7()},
$S:6}
C.f8l.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8w.prototype={
$0(){var w=this.a
w.m(new C.f8k(w,this.b))
w.guL().sp(0,0)
if(w.as)w.af7()},
$S:0}
C.f8k.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f8x.prototype={
$0(){var w=this.a
return w.m(new C.f8j(w,this.b))},
$S:0}
C.f8j.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f88.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1911}
C.f89.prototype={
$1(d){return d.b},
$S:1912}
C.dro.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drp.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drl.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drm.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drq.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drr.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drs.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drt.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dru.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drv.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drw.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drx.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dry.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ey8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exY.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ey_.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ey0.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ey3.prototype={
$1(d){var w=D.n9.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ey4.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.ey5(d),p.k("Y<1>")),new C.ey6(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ey5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ey6.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ey1.prototype={
$1(d){return D.n9.h(0,d.b).c===D.xI},
$S:z+54}
C.ey2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyy.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vN(0,u)
w.a7u(A.o.aq(v,1000))},
$S:8}
C.ey7.prototype={
$0(){},
$S:0}
C.exU.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$$0)
case 6:e.aC("String","ngmy_core_reaction_lab_v1",s.a.d.aj())
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
C.eya.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n9.h(0,v).b,D.n9.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h25,w,B.d(D.n9.h(0,v).a,w,w,w,w,w,w,A.h2,w,w,w),w,w,w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,W.as2,w,w,w,w,new C.ey9(d),!1,w,w,w,w,w,w,w,D.fUm,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.ey9.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyc.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.esH],x.p)
for(w=0;w<6;++w){v=D.aBH[w]
u=B.d(v.a,t,t,t,t,t,t,A.h2,t,t,t)
r.push(B.dH(!1,t,t,t,!0,t,t,t,!0,t,t,D.c3g,t,t,t,t,new C.eyb(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lW,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bI_,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.eyb.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.exX.prototype={
$1(d){var w=null
return B.eg(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.exV(d),w,w),B.bP(!1,A.ET,w,w,!0,w,w,w,new C.exW(d),w,w)],x.p),w,w,I.m8,D.fRH,w,w,w,w,D.fUG,w)},
$S:18}
C.exV.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.exW.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyw.prototype={
$0(){var w=this.a
return w.m(new C.eyv(w))},
$S:0}
C.eyv.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eyx.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.eym(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bdz:t
v=B.a([B.b2(u,t,t,new C.bjv(w,v,new C.eyn(r),new C.eyo(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c6(w,new C.eyp(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bL0())
return B.az(A.c2,B.jm(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eyq(r),t,r.gclH(),t,new C.eyr(r),new C.eys(r),new C.eyt(r),t,t,t,t,t,t,t,t,t,t,new C.eyu(r),t,t,t,!1,A.a4)},
$S:36}
C.eym.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
C.eyu.prototype={
$1(d){return this.a.cEg(d.b)},
$S:65}
C.eys.prototype={
$1(d){return this.a.clI(d.b)},
$S:48}
C.eyt.prototype={
$1(d){return this.a.clJ(d.b)},
$S:19}
C.eyr.prototype={
$1(d){return this.a.b3S()},
$S:38}
C.eyq.prototype={
$1(d){return this.a.adM(d.b)},
$S:312}
C.eyn.prototype={
$0(){return this.a.z},
$S:659}
C.eyo.prototype={
$0(){return this.a.Q},
$S:737}
C.eyp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPi()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.by,A.r,1)
t=B.a([D.fP3,A.cT],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aWc,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:66}
C.exZ.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.en,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.VB,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abk,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1914}
C.eyi.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
return w.m(new C.eyh(w))},
$S:0}
C.eyh.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyk.prototype={
$0(){var w=this.a
return w.m(new C.eyg(w))},
$S:0}
C.eyg.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
return w.m(new C.eyf(w))},
$S:0}
C.eyf.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eye.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n9.gdO(D.n9),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cz0(p[r]))
return new B.D(S.ali,B.x(B.a([new B.D(Aj.an0,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eyd.prototype={
$0(){return this.a.cbu(this.b)},
$S:0}
C.drk.prototype={
$0(){var w=this,v=null,u=B.fr(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:261}
C.bQ1.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQc.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQ7.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQd.prototype={
$1(d){return this.a.Mm(d)&&!d.x},
$S:z+0}
C.bQe.prototype={
$2(d,e){return Math.max(d,this.a.aCK(e))},
$S:z+6}
C.bQg.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQh(w))},
$S:z+5}
C.bQh.prototype={
$0(){return this.a.a},
$S:86}
C.bQf.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQi.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQj(w))},
$S:z+5}
C.bQj.prototype={
$0(){return this.a.a},
$S:86}
C.bQ3.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQ4(w))},
$S:z+5}
C.bQ4.prototype={
$0(){return this.a.a},
$S:86}
C.bQ2.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQ5.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQ6(w))},
$S:z+5}
C.bQ6.prototype={
$0(){return this.a.a},
$S:86}
C.bQ0.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQk.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQ8.prototype={
$1(d){return d!==this.b&&this.a.aJ3(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQb.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQa.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQ9.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKo.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKp.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctZ.prototype={
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
$S:205}
C.fWM.prototype={
$1(d){var w
$.S()
w=B.K()
w.r=d.gp(0)
return w},
$S:1915}
C.fWO.prototype={
$2(d,e){var w
$.S()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1916}
C.fWP.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1917}
C.fWN.prototype={
$3(d,e,f){var w
$.S()
w=B.K()
w.sav(new B.a8(A.b2,A.b8,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1918}
C.bK2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bK3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bK1(w))},
$S:0}
C.bK1.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bK4.prototype={
$0(){return B.a([],x.C)},
$S:1919}
C.bK5.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:376}
C.bK6.prototype={
$0(){var w,v,u
J.bHa(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tR(v))if(C.hg4(v.b))w.b3l(v)
else w.a0D(v)
else{u=w.a.c.bgd(v)
w.afj(u==null?"The "+$.qF().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bK0.prototype={
$1(d){return new B.dY(new C.bJY(this.a,this.b),null)},
$S:20}
C.bJY.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJZ(this.a,o,a3),m=$.qF(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bK_(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pX,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jP,p,p,p),D.fOS],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.md,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dr,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.q(p,B.as(B.cT(p,B.as(B.ev(A.A,new B.D(A.hM,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mC,p,p,p),p),A.f,A.dE),p,p,p),p,p,A.b_,new B.o(p,p,q,s,f,new B.a8(A.aA,A.aF,A.x,r,p,p),A.n),A.eG,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.X(A.aqm,k,p,p,p,30),p,p,p,new C.bJU(n,o),p,p,p,p,p,p)
t=B.abp(a2).bfH(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z0(B.kY(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a2w,k,p,p,p,30),p,p,p,new C.bJV(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.x(B.a([d,A.ae,u,A.aB,v,A.ae,i,A.av,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hp,p,p,p),1),B.bP(!1,A_.aXf,p,p,!0,p,p,p,new C.bJW(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t0,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cay,A.n),p,p,p,A.yE,D.bEx,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bJZ.prototype={
$1(d){var w=this.a
w.m(new C.bJS(this.b,d))
this.c.$1(new C.bJT())
w.a.toString},
$S:6}
C.bJS.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bJT.prototype={
$0(){},
$S:0}
C.bK_.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.by
r=B.L(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e7),v,v,v),v,v,A.b_,new B.o(t,v,r,s,v,v,A.n),A.h4,v,v,v,A.jr,A.qC,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJX(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:678}
C.bJX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJU.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJV.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJW.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bKl.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.afj("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afj("\u26a0 Overloaded! The "+$.qF().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Ak(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afj("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKm.prototype={
$0(){},
$S:0}
C.bJv.prototype={
$0(){},
$S:0}
C.bKn.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.az(A.c2,B.b2(p,p,p,new C.ak6(w,v,u,t,s,r==null?A.jt:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKe(o),new C.bKf(o),new C.bKg(o),p,p,p,p,p,p,p,p,p,p,new C.bKh(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bcR)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cI,A.r,1)
n.push(B.ap(p,B.az(p,B.q(p,B.A(B.a([D.fEZ,B.E(B.d(w,p,p,p,p,p,p,D.fwB,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.biR,p,u,v,p,p,A.n),p,p,p,p,A.nG,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKi(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b1d(B.A(B.a([D.bKe,new E.fC(A.CP,"Cut wire",new C.bKj(o),A.c0,p)],q),A.l,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cmg(w),p,p,10,10,p,p))}return B.jm(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:326}
C.bKf.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bap(s)
if(r!=null){t.m(new C.bKc(t,r,d))
return}w=t.b41(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.p(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bKd(t,w))}},
$S:48}
C.bKc.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bKd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKg.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bKa(w,d))
else if(w.w!=null)w.m(new C.bKb(w,d.b.a2(0,w.x)))},
$S:19}
C.bKa.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bKb.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bKe.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.bap(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am6(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.afh()},
$S:38}
C.bKh.prototype={
$1(d){var w=this.a,v=d.b,u=w.b41(v)
if(u!=null){w.m(new C.bK8(w,u))
if(D.mt.al(0,u.b))w.cwT(u)
w.a.toString
return}w.m(new C.bK9(w,w.cJK(v)))},
$S:65}
C.bK8.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bK9.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bKi.prototype={
$0(){var w=this.a
return w.m(new C.bK7(w))},
$S:0}
C.bK7.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bKj.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.afh()},
$S:0}
C.bJw.prototype={
$0(){return this.a.bsF(this.b)},
$S:0}
C.bJP.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fqB,w,w,w),B.E(B.kY(this.b.d,w,w,g,h,new C.bJR(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1920}
C.bJR.prototype={
$1(d){var w=this.a
w.m(new C.bJQ(this.b,d))
w.a.toString},
$S:6}
C.bJQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJC.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.afh()},
$S:0}
C.bJD.prototype={
$0(){var w=this.a
return w.m(new C.bJB(w))},
$S:0}
C.bJB.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJE.prototype={
$0(){this.a.m(new C.bJA(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJA.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJH.prototype={
$0(){return this.a.b3l(this.b)},
$S:0}
C.bJI.prototype={
$0(){return this.a.a0D(this.b)},
$S:0}
C.bJJ.prototype={
$0(){return this.a.a2g(this.b)},
$S:0}
C.bJK.prototype={
$0(){var w=this.a
w.m(new C.bJz(this.b,this.c))
w.a.toString},
$S:0}
C.bJz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJL.prototype={
$0(){var w=this.a
w.m(new C.bJy(this.b,this.c))
w.a.toString},
$S:0}
C.bJy.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJM.prototype={
$0(){var w=this.a
w.m(new C.bJx(this.b,this.c))
w.a.toString},
$S:0}
C.bJx.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJN.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJO.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJF.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJG.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fsY.prototype={
$1(d){return d.aIF("bulb")},
$S:z+2}
C.fsZ.prototype={
$1(d){return d.qe(0,"switch")&&d.aIF("bulb")},
$S:z+2}
C.ft_.prototype={
$1(d){return A.d.aV(d.a,new C.fsL())},
$S:z+2}
C.fsL.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.ft0.prototype={
$1(d){return d.qe(0,"resistor")&&A.d.aV(d.a,new C.fsK())},
$S:z+2}
C.fsK.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.ft1.prototype={
$1(d){return!d.qe(0,"battery")&&d.aIF("bulb")},
$S:z+2}
C.fsP.prototype={
$1(d){return A.d.aV(d.a,new C.fsJ())},
$S:z+2}
C.fsJ.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsQ.prototype={
$1(d){return A.d.aV(d.a,new C.fsI())},
$S:z+2}
C.fsI.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsR.prototype={
$1(d){return A.d.aV(d.a,new C.fsH())},
$S:z+2}
C.fsH.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fsS.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsF())&&A.d.aV(w,new C.fsG())&&d.qe(0,"buck")},
$S:z+2}
C.fsF.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsG.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fsT.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsD())&&A.d.aV(w,new C.fsE())},
$S:z+2}
C.fsD.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fsE.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsU.prototype={
$1(d){return A.d.aV(d.a,new C.fsC())},
$S:z+2}
C.fsC.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e1i.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e1r.prototype={
$1(d){var w=this.a.d
return w.aJ3(d)&&w.tR(d)},
$S:z+0}
C.e1s.prototype={
$1(d){return d.x},
$S:z+0}
C.e1t.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e1u.prototype={
$0(){},
$S:0}
C.e1h.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fWH,A.av,D.fGQ,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.S1[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.by,1,A.r,-1)
n.push(B.az(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iG,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fxl,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e1g(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eJ(q,F.mT,new B.D(A.bS,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.da,q,new B.b9(p,A.a1),q)},
$S:47}
C.e1g.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e1f(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e1f.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bll()},
$S:0}
C.e1d.prototype={
$1(d){return new C.WQ(this.a.d,null)},
$S:z+44}
C.e1e.prototype={
$0(){},
$S:0}
C.e1q.prototype={
$1(d){return new B.dY(new C.e1p(this.a),null)},
$S:20}
C.e1p.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajc(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aG
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fTQ,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.T,B.bx(B.m(4),B.kq(A.by,m,m,5,m,w.a/11,new B.lN(f,x.c)),A.aq),A.ae],v)
if(h)u.push(D.fK1)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.KJ,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EP,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.av,q,new B.bL(A.aa,m,m,B.bP(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e1n(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abj,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.az(m,B.q(m,new B.c8(A.aL,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nG,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1o(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A2.yN,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e1n.prototype={
$0(){var w=this.a
w.m(new C.e1l(w))
this.b.$1(new C.e1m())
w.Fx()},
$S:0}
C.e1l.prototype={
$0(){var w=this.a
$.ajc()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e1m.prototype={
$0(){},
$S:0}
C.e1o.prototype={
$0(){var w=this.a
w.m(new C.e1j(w,this.b))
this.c.$1(new C.e1k())
w.Fx()},
$S:0}
C.e1j.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1k.prototype={
$0(){},
$S:0}
C.e1w.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e1x.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ec(new C.e1v(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e1v.prototype={
$1(d){B.ll("construction")
return Al.hV7()},
$S:z+45}
C.e1y.prototype={
$0(){return E.hGy(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e1z.prototype={
$0(){var w=this.a
return w.m(w.d.gd0A())},
$S:0}
C.e1A.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gth(v))
w.Fx()},
$S:0}
C.cLy.prototype={
$2(d,e){var w=null,v=this.a.gaza().x
v===$&&B.c()
return B.b2(w,w,w,new C.bbn(v,w),A.az)},
$S:56}
C.cLx.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c7(v,u,v+e,u))
w.E(new B.c7(v,u,v,u+e))
w.E(new B.c7(v,u,v-e,u))
w.E(new B.c7(v,u,v,t))
w.E(new B.bt())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:455}
C.h0N.prototype={
$3(d,e,f){return new C.W7(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h0O.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYs.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dYr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1U(o):q.bF1(o,p),m=x.p
p=B.a([B.oy(new B.mq(n,new B.bv(p,x.bz)),A.pl,B.pU(),A.b_,A.b_,new C.dYp())],m)
n=t.d
if(n){w=A.j.F(q.gSF(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bK0)
else m.push(A.b0)
m.push(B.q(s,s,A.f,s,s,new B.o(w?A.b4:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.e2,new B.o(A.w,s,s,u,s,s,A.n),A.mX,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AB)p.push(B.ap(s,B.as(B.q(s,s,A.f,s,s,A.LW,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Ew)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LW,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.as(B.q(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dYq(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:302}
C.dYp.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bQ.T>"))),null)},
$S:386}
C.dYq.prototype={
$0(){var w=this.a
return w.m(new C.dYo(w))},
$S:0}
C.dYo.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
return w.m(new C.dYm(w,this.b))},
$S:0}
C.dYm.prototype={
$0(){return this.a.e=A.d.co(F.kB,this.b)},
$S:0}
C.dYl.prototype={
$0(){var w=this.a
return w.m(new C.dYk(w))},
$S:0}
C.dYk.prototype={
$0(){return this.a.e=0},
$S:0}
C.dYg.prototype={
$0(){var w=this.a
return w.m(new C.dYf(w))},
$S:0}
C.dYf.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.h1u,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eR,p,p,p,A.abC,p,p,p),1),B.d(A.a.b_(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.v(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rd,p,p,p)],l),A.l,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kz,p,p,p)
w=this.a
v=B.a([B.b2(p,p,p,new C.by2(w.gSF(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aT,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.az(p,B.q(p,p,A.f,p,p,A.aeD,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dYi(w),p,p,p,p,p,p,!1,A.a4),A.e8,B.q(p,p,A.f,p,p,A.XH,p,12,p,p,p,p,p,12),A.e8,B.q(p,p,A.f,p,p,D.b7X,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kB[o].a,p,1,A.a2,p,p,p,A.abd,p,p,p),1)],l),A.l,p,A.e,A.i,0,p,p),A.f,A.cl,p,p,p,24,p,p,A.fK,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bGu,B.q(p,B.bx(s,B.x(B.a([o,B.E(B.b2(p,p,p,new C.afX(r,w.gSF(),p),A.fQ),1)],l),A.l,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dw5,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jr,w.ax2(F.kB[q],34,!1),p))
v.push(B.ap(8,B.as(B.q(p,B.A(s,A.l,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lM,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b1,A.t,v,p),1)],l),A.l,p,A.e,A.i,0,A.p),A.f,X.ZN,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:302}
C.dYi.prototype={
$0(){var w=this.a
return w.m(new C.dYh(w))},
$S:0}
C.dYh.prototype={
$0(){return this.a.e=null},
$S:0}
C.fts.prototype={
$0(){return D.eiJ},
$S:z+47}
C.ftt.prototype={
$0(){return D.dQR},
$S:z+48}
C.ftu.prototype={
$0(){return D.dNm},
$S:z+49}
C.ftv.prototype={
$0(){return D.dQe},
$S:z+50}
C.ftw.prototype={
$0(){return D.dVm},
$S:z+51}
C.ftx.prototype={
$0(){return D.eev},
$S:z+52}
C.fty.prototype={
$0(){return D.egF},
$S:z+53}
C.ftz.prototype={
$0(){return D.dUG},
$S:z+36}
C.cmR.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hKn(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ak.KH,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fCn,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cT,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cmQ(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bs,k,14,14)},
$S:168}
C.cmQ.prototype={
$0(){return B.a6(this.a,!1).ce(B.ec(new C.cmP(this.b),!1,null,x.H))},
$S:0}
C.cmP.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eUT.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7q(w.f)]},
$S:0}
C.eUP.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cQ.ai()*7},
$S:0}
C.eUO.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eUR.prototype={
$0(){var w=this.a
return w.m(new C.eUQ(w,this.b))},
$S:0}
C.eUQ.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eUS.prototype={
$1(d){return this.a.b1K(0)},
$S:2}
C.e4h.prototype={
$0(){return C.JQ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e4i.prototype={
$0(){},
$S:0}
C.e4c.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e4e.prototype={
$0(){return this.a.b1M(this.b)},
$S:0}
C.e4f.prototype={
$0(){var w=this.a
return w.m(new C.e4d(w))},
$S:0}
C.e4d.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e4g.prototype={
$0(){var w=this.a
return w.b1M(w.d)},
$S:0}
C.dPK.prototype={
$2(d,e){return d+e},
$S:81}
C.dPL.prototype={
$0(){},
$S:0}
C.dPF.prototype={
$2(d,e){return d+e},
$S:81}
C.dPI.prototype={
$0(){var w=this.a
return w.m(new C.dPH(w,this.b))},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a
return w.m(new C.dPG(w))},
$S:0}
C.dPG.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0N.prototype={
$0(){return E.uH(this.b,this.a.d,"drawing")},
$S:0}
C.e0O.prototype={
$1(d){var w=this.a
return w.m(new C.e0M(w,d))},
$S:48}
C.e0M.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK9(u,v,t))},
$S:0}
C.e0P.prototype={
$1(d){var w=this.a
return w.m(new C.e0L(w,d))},
$S:19}
C.e0L.prototype={
$0(){return A.d.gam(this.a.e).c.push(this.b.b)},
$S:0}
C.e0Q.prototype={
$1(d){var w=this.a
return w.m(new C.e0K(w,d))},
$S:22}
C.e0K.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK9(u,v,t))},
$S:0}
C.e0R.prototype={
$0(){var w=this.a
return w.m(new C.e0J(w,this.b))},
$S:0}
C.e0J.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0S.prototype={
$1(d){var w=this.a
return w.m(new C.e0I(w,d))},
$S:6}
C.e0I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e0T.prototype={
$0(){var w=this.a
return w.m(new C.e0H(w))},
$S:0}
C.e0H.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0U.prototype={
$0(){var w=this.a
return w.m(new C.e0G(w))},
$S:0}
C.e0G.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e0V.prototype={
$0(){var w=this.a
return w.m(A.d.gth(w.e))},
$S:0}
C.e0W.prototype={
$0(){var w=this.a
return w.m(new C.e0F(w))},
$S:0}
C.e0F.prototype={
$0(){var w=this.a
w.x=D.aAy[A.o.F(A.d.co(D.aAy,w.x)+1,4)]},
$S:0}
C.erI.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.erJ.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JQ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erH(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JQ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.erH.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erK.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erG(w))},
$S:11}
C.erG.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.erO.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lB(new C.erM(v,e),w,A.b_,A.pl,w,w,new B.br(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erN(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.erN.prototype={
$0(){return this.a.cdB(this.b)},
$S:0}
C.erM.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c9K
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b4:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abn,p,p,p),p,r,!0)
u=r}else u=D.fVm
return B.fz(A.A,B.q(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:114}
C.erP.prototype={
$0(){var w=this.a
return w.m(new C.erL(w,this.b))},
$S:0}
C.erL.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aun()},
$S:0}
C.erQ.prototype={
$0(){var w=this.a
return w.m(w.gbNM())},
$S:0}
C.eCu.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eCs.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCr(w))},
$S:11}
C.eCr.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eCw.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1L()},
$S:11}
C.eCz.prototype={
$0(){return this.a.cdH(this.b)},
$S:0}
C.eQm.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.eQv.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.ky,B.A(B.a([v,A.af,new B.dm(1,A.cp,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e7),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1921}
C.eQr.prototype={
$1(d){return this.a.m(new C.eQq())},
$S:2}
C.eQq.prototype={
$0(){},
$S:0}
C.eQs.prototype={
$0(){var w=this.a
return w.m(new C.eQp(w,this.b))},
$S:0}
C.eQp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQt.prototype={
$1(d){var w=this.a
return w.m(new C.eQo(w,d))},
$S:6}
C.eQo.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eQu.prototype={
$0(){var w=this.a
return w.m(new C.eQn(w))},
$S:0}
C.eQn.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqn.prototype={
$0(){},
$S:0}
C.eqo.prototype={
$0(){},
$S:0}
C.eqg.prototype={
$0(){var w=this.a
return w.m(new C.eqf(w))},
$S:0}
C.eqf.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c0(u,1,!1,x.S)
w.r=0.9
E.XC("hat",0,0.6)},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
return w.m(new C.eqe(w))},
$S:0}
C.eqe.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.eqi.prototype={
$0(){var w=this.a
return w.m(new C.eqd(w))},
$S:0}
C.eqd.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eqj.prototype={
$0(){var w=this.a
return w.m(new C.eqc(w,this.b))},
$S:0}
C.eqc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eqk.prototype={
$1(d){var w=this.a
return w.m(new C.eqb(w,d))},
$S:6}
C.eqb.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eql.prototype={
$1(d){var w=this.a
return w.m(new C.eqa(w,d))},
$S:6}
C.eqa.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.eqm.prototype={
$1(d){var w=this.a
return w.m(new C.eq9(w,d))},
$S:6}
C.eq9.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cmN.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOf.prototype
w.bzY=w.t
w=C.aNi.prototype
w.byZ=w.t
w=C.aNj.prototype
w.bz_=w.t
w=C.aNn.prototype
w.bz3=w.t
w=C.aP4.prototype
w.bAU=w.t
w=C.aOd.prototype
w.bzW=w.t
w=C.azB.prototype
w.bw_=w.t
w=C.azC.prototype
w.bw0=w.t
w=C.aLK.prototype
w.bxm=w.t
w=C.aNy.prototype
w.bze=w.t
w=C.aNk.prototype
w.bz0=w.t
w=C.aNF.prototype
w.bzm=w.t
w=C.aO7.prototype
w.bzQ=w.t
w=C.aOy.prototype
w.bAg=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGg.prototype,"gayx","c92",1)
v(C,"iqZ","c6G",3)
var q
u(q=C.aEK.prototype,"gchW","chX",22)
w(q,"gc9C","b0l",1)
w(C.aEM.prototype,"gcbk","cbl",1)
t(C.aF2.prototype,"gcbr","cbs",39)
w(q=C.aJi.prototype,"gcBr","cBs",1)
w(q,"gcbt","af7",1)
w(q,"gcmr","cms",1)
w(q,"gcbq","af6",3)
w(q=C.aGf.prototype,"gbKU","aau",3)
w(q,"gclH","b3S",1)
w(q,"gcpu","ahI",3)
s(q,"gcbv","af8",3)
s(q=C.a5D.prototype,"gth","a8",1)
u(q,"gcZe","aoS",0)
u(q,"gcVC","Mm",0)
w(q,"gd0A","bll",1)
r(C.ak6.prototype,"gcbS",0,5,null,["$5"],["qU"],41,0,0)
w(q=C.aFe.prototype,"gcbT","cbU",1)
w(q,"gcsj","ai3",3)
w(q,"gcid","ago",3)
w(q,"gczs","ajd",3)
w(q=C.aGI.prototype,"gcdC","cdD",1)
s(q,"gcdA","b1K",1)
w(C.aG1.prototype,"gbNM","aun",1)
s(C.aGm.prototype,"gcdE","cdF",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ali,C.GY,C.vr,C.aUk,C.a4u,C.bcu,C.c6H,C.yL,C.D3,C.nL,C.bdf,C.Bb,C.bvv,C.qu,C.rb,C.D7,C.a_D,C.ag3,C.a1R,C.Di,C.acX,C.add,C.af9,C.GJ,C.eh,C.u0,C.abC,C.acJ,C.a5D,C.mY,C.bdg,C.fQ,C.mx,C.bwP,C.aK9])
u(B.hu,[C.fKR,C.fzw,C.fHf,C.fHg,C.fKO,C.fKP,C.ejw,C.ejP,C.ez7,C.eyF,C.eyG,C.eyH,C.eyI,C.eyJ,C.eyK,C.eyL,C.eyM,C.eyD,C.eyE,C.eyC,C.ez2,C.ez3,C.ez4,C.dPg,C.dPi,C.dPl,C.dPw,C.c6I,C.c6J,C.fsM,C.fsN,C.fsO,C.fsV,C.fsW,C.fsX,C.dRi,C.dR_,C.dRj,C.dQV,C.dQQ,C.dQS,C.dQY,C.dRa,C.dR8,C.dR9,C.dR7,C.dR4,C.dR6,C.f8y,C.f8f,C.f8m,C.f8v,C.f89,C.dro,C.drp,C.drl,C.drm,C.drn,C.drq,C.drr,C.drs,C.drt,C.dru,C.drv,C.drw,C.drx,C.dry,C.ey3,C.ey4,C.ey5,C.ey6,C.ey1,C.ey2,C.eyy,C.eya,C.eyc,C.exX,C.eyu,C.eys,C.eyt,C.eyr,C.eyq,C.exZ,C.bQ1,C.bQc,C.bQ7,C.bQd,C.bQf,C.bQ2,C.bQ0,C.bQk,C.bQ8,C.bQb,C.bQa,C.bQ9,C.bKo,C.fWM,C.fWP,C.fWN,C.bK5,C.bK0,C.bJZ,C.bKn,C.bKf,C.bKg,C.bKe,C.bKh,C.bJP,C.bJR,C.bJN,C.bJO,C.bJF,C.bJG,C.fsY,C.fsZ,C.ft_,C.fsL,C.ft0,C.fsK,C.ft1,C.fsP,C.fsJ,C.fsQ,C.fsI,C.fsR,C.fsH,C.fsS,C.fsF,C.fsG,C.fsT,C.fsD,C.fsE,C.fsU,C.fsC,C.e1r,C.e1s,C.e1h,C.e1d,C.e1q,C.e1v,C.cLx,C.h0N,C.h0O,C.cmP,C.eUS,C.e0O,C.e0P,C.e0Q,C.e0S,C.erM,C.eQm,C.eQv,C.eQr,C.eQt,C.eqk,C.eql,C.eqm])
u(B.jx,[C.fKQ,C.ejB,C.ejz,C.eyO,C.ez0,C.dQR,C.dRd,C.dXw,C.f8B,C.f8C,C.f8e,C.f8r,C.f8s,C.f8n,C.f8t,C.f88,C.ey_,C.ey0,C.eyx,C.eyp,C.eye,C.bQe,C.bQg,C.bQi,C.bQ3,C.bQ5,C.bKp,C.ctZ,C.fWO,C.bJY,C.bK_,C.bKl,C.bKk,C.e1p,C.cLy,C.dYr,C.dYp,C.dYj,C.cmS,C.dPK,C.dPF,C.erO])
u(B.af,[C.WQ,C.Xc,C.VG,C.VN,C.Oi,C.aJh,C.Xb,C.ak4,C.Wo,C.azg,C.W7,C.XJ,C.Ww,C.VH,C.Wn,C.X6,C.Xg,C.XA,C.X5])
u(B.ah,[C.bmE,C.aOf,C.aNi,C.aNn,C.aF2,C.aP4,C.aOd,C.azB,C.bA0,C.aLK,C.aNy,C.aOy,C.aNF,C.aNk,C.bm5,C.aG1,C.aGm,C.bnl,C.aO7])
u(B.iK,[C.eju,C.ejv,C.ejH,C.ejI,C.ejD,C.ejC,C.ejE,C.ejA,C.ejF,C.ejy,C.ejG,C.ejx,C.ejL,C.ejK,C.ejM,C.ejJ,C.ejN,C.ejO,C.ejQ,C.ez6,C.ez8,C.ez9,C.eyQ,C.eyP,C.eyN,C.eyW,C.eyX,C.eyT,C.eyY,C.eyS,C.eyZ,C.ez_,C.eyR,C.ez1,C.eyV,C.ez5,C.eyU,C.dPD,C.dPC,C.dPd,C.dPe,C.dPf,C.dPE,C.dPh,C.dPj,C.dPk,C.dPm,C.dPa,C.dPb,C.dPc,C.dPt,C.dPu,C.dPv,C.dPs,C.dPx,C.dPr,C.dPy,C.dPq,C.dPz,C.dPp,C.dPA,C.dPo,C.dPB,C.dPn,C.dQX,C.dQW,C.dR0,C.dQT,C.dQU,C.dR1,C.dR2,C.dR3,C.dQZ,C.dQP,C.dRc,C.dRb,C.dRe,C.dRf,C.dRg,C.dR5,C.dRh,C.cWa,C.dXu,C.dXt,C.dXv,C.ftc,C.ftd,C.fte,C.ftf,C.ftg,C.fth,C.fti,C.ftj,C.ftk,C.f8A,C.f8z,C.f8h,C.f8g,C.f8c,C.f8b,C.f8d,C.f8a,C.f8p,C.f8o,C.f8q,C.f8i,C.f8u,C.f8l,C.f8w,C.f8k,C.f8x,C.f8j,C.ey8,C.exY,C.ey7,C.exU,C.ey9,C.eyb,C.exV,C.exW,C.eyw,C.eyv,C.eym,C.eyn,C.eyo,C.eyi,C.eyj,C.eyh,C.eyk,C.eyg,C.eyl,C.eyf,C.eyd,C.drk,C.bQh,C.bQj,C.bQ4,C.bQ6,C.bK2,C.bK3,C.bK1,C.bK4,C.bK6,C.bJS,C.bJT,C.bJX,C.bJU,C.bJV,C.bJW,C.bKm,C.bJv,C.bKc,C.bKd,C.bKa,C.bKb,C.bK8,C.bK9,C.bKi,C.bK7,C.bKj,C.bJw,C.bJQ,C.bJC,C.bJD,C.bJB,C.bJE,C.bJA,C.bJH,C.bJI,C.bJJ,C.bJK,C.bJz,C.bJL,C.bJy,C.bJM,C.bJx,C.e1i,C.e1t,C.e1u,C.e1g,C.e1f,C.e1e,C.e1n,C.e1l,C.e1m,C.e1o,C.e1j,C.e1k,C.e1w,C.e1x,C.e1y,C.e1z,C.e1A,C.dYs,C.dYq,C.dYo,C.dYn,C.dYm,C.dYl,C.dYk,C.dYg,C.dYf,C.dYi,C.dYh,C.fts,C.ftt,C.ftu,C.ftv,C.ftw,C.ftx,C.fty,C.ftz,C.cmR,C.cmQ,C.eUT,C.eUP,C.eUO,C.eUR,C.eUQ,C.e4h,C.e4i,C.e4c,C.e4e,C.e4f,C.e4d,C.e4g,C.dPL,C.dPI,C.dPH,C.dPJ,C.dPG,C.e0N,C.e0M,C.e0L,C.e0K,C.e0R,C.e0J,C.e0I,C.e0T,C.e0H,C.e0U,C.e0G,C.e0V,C.e0W,C.e0F,C.erI,C.erJ,C.erH,C.erK,C.erG,C.erN,C.erP,C.erL,C.erQ,C.eCu,C.eCv,C.eCs,C.eCt,C.eCr,C.eCw,C.eCx,C.eCy,C.eCz,C.eQq,C.eQs,C.eQp,C.eQo,C.eQu,C.eQn,C.eqn,C.eqo,C.eqg,C.eqf,C.eqh,C.eqe,C.eqi,C.eqd,C.eqj,C.eqc,C.eqb,C.eqa,C.eq9,C.cmN])
t(C.bAd,C.aOf)
t(C.aGg,C.bAd)
u(B.mn,[C.bjx,C.bdy,C.buT,C.bcc,C.btu,C.bsU,C.bcT,C.bsW,C.bwZ,C.bjv,C.ak6,C.bbn,C.by2,C.afX,C.bye,C.bsV,C.bo7])
t(C.aNj,C.aNi)
t(C.aEK,C.aNj)
t(C.bzY,C.aNn)
t(C.aEM,C.bzY)
u(B.lD,[C.Lk,C.a1E,C.Kj])
u(B.aw,[C.btT,C.agf,C.af6,C.Re,C.buo,C.a9A,C.bfF])
t(C.aJi,C.aP4)
t(C.bju,B.pe)
t(C.aGf,C.aOd)
t(C.azC,C.azB)
t(C.ak5,C.azC)
t(C.aFe,C.bA0)
t(C.bbo,C.aLK)
t(C.bm3,C.aNy)
t(C.bAk,C.aOy)
t(C.aGI,C.bAk)
t(C.bA2,C.aNF)
t(C.bme,C.bA2)
t(C.bzX,C.aNk)
t(C.blN,C.bzX)
t(C.bAb,C.aO7)
t(C.bmQ,C.bAb)
w(C.aOf,B.cd)
w(C.bAd,E.nJ)
w(C.aNi,B.cd)
w(C.aNj,E.nJ)
w(C.aNn,B.cd)
w(C.bzY,E.nJ)
w(C.aP4,B.eN)
w(C.aOd,B.cd)
w(C.azB,B.cd)
w(C.azC,E.nJ)
w(C.aLK,B.cd)
v(C.bA0,B.eC)
w(C.aNy,B.cd)
w(C.aNk,B.cd)
w(C.bzX,E.nJ)
w(C.aNF,B.cd)
w(C.bA2,E.nJ)
w(C.aO7,B.cd)
w(C.bAb,E.nJ)
w(C.aOy,B.cd)
w(C.bAk,E.nJ)})()
B.iU(b.typeUniverse,JSON.parse('{"WQ":{"af":[],"v":[]},"bmE":{"ah":["WQ"]},"Xc":{"af":[],"v":[]},"aGg":{"ah":["Xc"]},"bjx":{"aC":[]},"VG":{"af":[],"v":[]},"aEK":{"ah":["VG"]},"VN":{"af":[],"v":[]},"aEM":{"ah":["VN"]},"bdy":{"aC":[]},"agf":{"aw":[],"v":[]},"af6":{"aw":[],"v":[]},"aJh":{"af":[],"v":[]},"Oi":{"af":[],"v":[]},"aF2":{"ah":["Oi"]},"btT":{"aw":[],"v":[]},"Re":{"aw":[],"v":[]},"buT":{"aC":[]},"buo":{"aw":[],"v":[]},"bcc":{"aC":[]},"aJi":{"ah":["aJh"]},"btu":{"aC":[]},"bsU":{"aC":[]},"bcT":{"aC":[]},"bsW":{"aC":[]},"bwZ":{"aC":[]},"Xb":{"af":[],"v":[]},"bju":{"aC":[]},"aGf":{"ah":["Xb"]},"bjv":{"aC":[]},"ak6":{"aC":[]},"ak4":{"af":[],"v":[]},"ak5":{"ah":["ak4"]},"Wo":{"af":[],"v":[]},"azg":{"af":[],"v":[]},"aFe":{"ah":["Wo"],"eC":[]},"bbo":{"ah":["azg"]},"bbn":{"aC":[]},"W7":{"af":[],"v":[]},"bm3":{"ah":["W7"]},"by2":{"aC":[]},"afX":{"aC":[]},"a9A":{"aw":[],"v":[]},"XJ":{"af":[],"v":[]},"Ww":{"af":[],"v":[]},"VH":{"af":[],"v":[]},"Wn":{"af":[],"v":[]},"X6":{"af":[],"v":[]},"Xg":{"af":[],"v":[]},"XA":{"af":[],"v":[]},"X5":{"af":[],"v":[]},"aGI":{"ah":["XJ"]},"bye":{"aC":[]},"bme":{"ah":["Ww"]},"bsV":{"aC":[]},"blN":{"ah":["VH"]},"bm5":{"ah":["Wn"]},"bo7":{"aC":[]},"aG1":{"ah":["X6"]},"aGm":{"ah":["Xg"]},"bnl":{"ah":["XA"]},"bmQ":{"ah":["X5"]},"bfF":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lN<u?>"),G:w("u"),J:w("bu<n,G>"),Q:w("de<n>"),Z:w("a0"),M:w("O<da>"),R:w("O<T2>"),h:w("O<a4u>"),V:w("O<ab>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<G>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<p>"),F:w("O<u0>"),v:w("O<fT>"),eZ:w("O<+(n,n)>"),fT:w("O<+(G,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,G,G,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,G,G,a9<n,G>)>"),_:w("O<vr>"),fQ:w("O<abC>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acJ>"),fH:w("O<lj>"),a_:w("O<acX>"),cB:w("O<nL>"),ba:w("O<add>"),eW:w("O<D7>"),fY:w("O<a_D>"),ac:w("O<af9>"),cd:w("O<Di>"),fr:w("O<ag3>"),e4:w("O<a1R>"),au:w("O<aK9>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u0?>"),bN:w("O<H?>"),q:w("cw<ak5>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(G,v),v>"),l:w("iC"),gA:w("zW"),gD:w("wr"),k:w("ct"),K:w("aE"),W:w("u0"),B:w("eh"),N:w("n"),bO:w("au"),a:w("br<G>"),Y:w("bv<n>"),bz:w("bv<H?>"),dg:w("ea<rb>"),m:w("bcu"),a2:w("D3"),f3:w("rb"),es:w("GJ"),gV:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2G=new B.da(0,0.1)
D.b4A=new C.aUk(0,0,0)
D.LQ=new C.aUk(0,0.5,0)
D.b5a=new B.ay(A.b4,1,A.r,-1)
D.b6D=new B.aY(0,1/0,0,290)
D.b6K=new B.aY(16,1/0,16,1/0)
D.bow=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dwi=w([D.bow,Am.aiP],x.O)
D.eAc=new B.bY(A.Ff,1.1,A.x,null,0,D.dwi,null,null)
D.b70=new B.o(null,null,null,null,null,D.eAc,A.n)
D.b7X=new B.o(A.bd,null,null,null,null,null,A.a6)
D.fq9=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2T=new B.B("\u26a1",null,D.fq9,null,null,null,null,null,null,null,null,null)
D.bcH=new B.ci(A.A,null,null,D.h2T,null)
D.aW7=new B.F(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTl=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aW7,null,A.K,null,null,null,null,null,null,null)
D.esn=new B.D(A.nJ,D.fTl,null)
D.bcR=new B.ci(A.A,null,null,D.esn,null)
D.fJ6=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aW7,null,A.K,null,null,null,null,null,null,null)
D.ete=new B.D(A.GY,D.fJ6,null)
D.bdz=new B.ci(A.A,null,null,D.ete,null)
D.afE=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bhk=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bhB=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.biR=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.biY=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bjk=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.blg=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bmj=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bn2=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahX=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bo2=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aik=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zl=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bpW=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bqc=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiT=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.brV=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bs2=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bsw=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wc=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.buF=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akl=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bAp=new B.bd(11e6)
D.bCb=new B.R(10,34,10,26)
D.bCj=new B.R(10,6,10,2)
D.bCl=new B.R(10,8,0,10)
D.bD1=new B.R(12,8,8,8)
D.bD8=new B.R(14,0,14,22)
D.bDa=new B.R(14,0,14,30)
D.bEe=new B.R(16,4,16,28)
D.bEx=new B.R(18,10,18,16)
D.bGu=new B.R(26,12,26,58)
D.bHl=new B.R(4,4,8,2)
D.bI_=new B.R(8,14,8,12)
D.bI6=new B.R(8,40,8,30)
D.bIb=new B.R(8,6,8,8)
D.bIw=new B.R(0,0,1.5,0)
D.b4m=new B.HZ(26,"saturation")
D.bIP=new B.uT(A.cz,D.b4m,null,A.Yd)
D.bIQ=new B.hm(A.G,11)
D.bIU=new B.hm(A.G,30)
D.fI9=new B.B("REACTION LAB",null,U.aWL,null,null,null,null,A.a2,null,1,null,null)
D.bJ2=new B.bz(1,A.bb,D.fI9,null)
D.fMf=new B.B("\ud83d\udce2 NGMY Ads",null,A.rd,null,null,null,null,A.eR,null,1,null,null)
D.bK0=new B.bz(1,A.bb,D.fMf,null)
D.fGR=new B.B("Wire selected",null,A.h2,null,null,null,null,null,null,null,null,null)
D.bKe=new B.bz(1,A.bb,D.fGR,null)
D.api=new B.a0(62712,"MaterialIcons",!1)
D.bQm=new B.a0(62908,"MaterialIcons",!1)
D.bS3=new B.a0(983122,"MaterialIcons",!1)
D.bSg=new B.a0(983247,"MaterialIcons",!1)
D.bSM=new B.a0(983616,"MaterialIcons",!1)
D.bS2=new B.a0(983117,"MaterialIcons",!1)
D.bWs=new B.ae(D.bS2,28,A.c,null,null,null)
D.bWI=new B.ae(A.j9,18,null,null,null,null)
D.bYA=new B.ae(A.ek,21,A.c0,null,null,null)
D.bYS=new B.ae(A.oB,null,A.ab,null,null,null)
D.bZ1=new B.ae(A.a3y,21,A.ab,null,null,null)
D.bZT=new B.ae(A.eM,17,A.ab,null,null,null)
D.c1F=new B.ae(A.j9,21,A.ab,null,null,null)
D.c3g=new B.ae(A.ed,null,A.aQ,null,null,null)
D.dtW=w([A.db,A.d7,A.db],x.O)
D.c6E=new B.a8(A.a7,A.aa,A.x,D.dtW,null,null)
D.d5l=w([A.bP,A.bj],x.O)
D.c6M=new B.a8(A.b2,A.b8,A.x,D.d5l,null,null)
D.c7_=new B.a8(A.b2,A.b8,A.x,A.a6a,null,null)
D.at2=new B.a8(A.b2,A.b8,A.x,P.a5o,null,null)
D.d2T=w([A.p9,A.iI],x.O)
D.c7N=new B.a8(A.b2,A.b8,A.x,D.d2T,null,null)
D.d54=w([A.cS,A.as],x.O)
D.at9=new B.a8(A.b2,A.b8,A.x,D.d54,null,null)
D.dnD=w([A.d2,A.j5,A.bj],x.O)
D.c84=new B.a8(A.a7,A.aa,A.x,D.dnD,null,null)
D.dnJ=w([A.cA,A.cl],x.O)
D.c8p=new B.a8(A.b2,A.b8,A.x,D.dnJ,null,null)
D.cBV=w([A.bP,A.d2],x.O)
D.c8y=new B.a8(A.a7,A.aa,A.x,D.cBV,null,null)
D.aDa=w([A.cS,M.ny],x.O)
D.c8F=new B.a8(A.b2,A.b8,A.x,D.aDa,null,null)
D.c8W=new B.a8(A.b2,A.b8,A.x,S.atu,null,null)
D.c9K=new B.a8(A.aA,A.aF,A.x,A.RP,null,null)
D.deX=w([A.as,A.w],x.O)
D.c9V=new B.a8(A.b2,A.b8,A.x,D.deX,null,null)
D.c9Y=new B.a8(A.b2,A.b8,A.x,H.aCs,null,null)
D.bsr=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bti=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cOS=w([A.Nj,D.bsr,D.bti],x.O)
D.ca6=new B.a8(A.b2,A.b8,A.x,D.cOS,null,null)
D.cCe=w([A.d3,A.hc],x.O)
D.cal=new B.a8(A.b2,A.b8,A.x,D.cCe,null,null)
D.bw_=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cD_=w([F.afN,D.bw_],x.O)
D.cay=new B.a8(A.b2,A.b8,A.x,D.cD_,null,null)
D.cb7=w([0,4,7],x.t)
D.cb8=w([0,4,7,12],x.t)
D.cb9=w([0,4,7,4],x.t)
D.aC7=w([A.ht,A.qn],x.O)
D.aBD=w([A.hv,A.cJ],x.O)
D.azX=w([A.bg,A.dP],x.O)
D.cXz=w([A.aQ,A.d3],x.O)
D.dp_=w([A.bT,A.kN],x.O)
D.azn=w([A.cI,A.kv],x.O)
D.d1H=w([A.bN,A.aM],x.O)
D.cbw=w([D.aC7,D.aBD,A.a5t,D.azX,D.cXz,A.aAc,A.aB7,D.dp_,D.azn,D.d1H],B.at("O<ai<u>>"))
D.cgc=w([120,220,380],x.t)
D.cjX=w([12,16,19,24],x.t)
D.ck6=w([1400,800,450,2400],x.t)
D.csx=w([250,450,900,1500],x.t)
D.bgH=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bsR=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bqD=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bwz=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bpJ=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayD=w([D.bgH,D.bsR,D.bqD,D.bwz,D.bpJ],x.O)
D.cJL=w([50,25,75],x.t)
D.cPq=w([0,5,10,15,18,20,25],x.t)
D.cXS=w([900,500,250,1600],x.t)
D.d1_=w([A.bg,A.bE,A.b9,A.bg],x.O)
D.a5j=w([A.ay,A.bl,A.bd,A.aG,A.nt],x.O)
D.d2w=w([A.as,A.ay,A.cI,A.bl,A.bd,A.cD,A.ci,A.bE,A.Yu],x.O)
D.a5m=w([0.04,0.17,0.3],x.n)
D.f9u=new C.vr("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f9A=new C.vr("Medium engine","A good all-rounder.",0.3,0.9)
D.f9z=new C.vr("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Iu=w([D.f9u,D.f9A,D.f9z],x._)
D.eFY=new B.y(6,"Easy")
D.eGJ=new B.y(8,"Medium")
D.eBH=new B.y(10,"Hard")
D.d46=w([D.eFY,D.eGJ,D.eBH],x.I)
D.aAm=w([0.55,0.78,1],x.n)
D.aAy=w([A.c,A.fz,A.nn,A.as],x.O)
D.aAG=w([A.bd,A.ay,A.bl,A.d7],x.O)
D.f9r=new C.vr("Radar","Shows your height above the ground.",0.1,0)
D.f9s=new C.vr("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f9p=new C.vr("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAN=w([D.f9r,D.f9s,D.f9p],x._)
D.dai=w([47,100,220,470,1000],x.n)
D.Jz={volts:0}
D.a7b=new B.bu(D.Jz,[3],x.J)
D.JZ=new B.dX(["b","battery",0.2,0.3,D.a7b])
D.emb={on:0}
D.dEU=new B.bu(D.emb,[1],x.J)
D.Eu=new B.dX(["s","switch",0.5,0.3,D.dEU])
D.f78=new B.dX(["l","bulb",0.8,0.3,A.jt])
D.d5u=w([D.JZ,D.Eu,D.f78],x.d)
D.Es=new B.cu(["b",0,"s",0])
D.f68=new B.cu(["s",1,"l",0])
D.aRH=new B.cu(["l",1,"b",1])
D.dnP=w([D.Es,D.f68,D.aRH],x.o)
D.d4U=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eAS=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d5u,D.dnP,D.d4U)
D.aLv={ohms:0}
D.aJ6=new B.bu(D.aLv,[220],x.J)
D.f6B=new B.dX(["r","resistor",0.5,0.3,D.aJ6])
D.f7n=new B.dX(["d","led",0.8,0.3,A.jt])
D.dr4=w([D.JZ,D.f6B,D.f7n],x.d)
D.f5t=new B.cu(["b",0,"r",0])
D.f62=new B.cu(["r",1,"d",0])
D.f5z=new B.cu(["d",1,"b",1])
D.dAw=w([D.f5t,D.f62,D.f5z],x.o)
D.dry=w(["led","diode","indicator"],x.s)
D.eAZ=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dr4,D.dAw,D.dry)
D.a8t={level:0}
D.dEf=new B.bu(D.a8t,[0.2],x.J)
D.f6H=new B.dX(["p","pot",0.5,0.3,D.dEf])
D.f6J=new B.dX(["m","motor",0.8,0.3,A.jt])
D.d5O=w([D.JZ,D.f6H,D.f6J],x.d)
D.f5s=new B.cu(["b",0,"p",0])
D.f5Z=new B.cu(["p",1,"m",0])
D.f5V=new B.cu(["m",1,"b",1])
D.dw1=w([D.f5s,D.f5Z,D.f5V],x.o)
D.dnw=w(["fan","motor","spin","dimmer"],x.s)
D.eAQ=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d5O,D.dw1,D.dnw)
D.a78=new B.bu(D.a8t,[0.9],x.J)
D.aRQ=new B.dX(["s","solar",0.25,0.3,D.a78])
D.aRP=new B.dX(["l","bulb",0.75,0.3,A.jt])
D.d8E=w([D.aRQ,D.aRP],x.d)
D.f65=new B.cu(["s",0,"l",0])
D.f5T=new B.cu(["l",1,"s",1])
D.d6C=w([D.f65,D.f5T],x.o)
D.dwL=w(["solar","sun","without battery","no battery","free"],x.s)
D.eAT=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d8E,D.d6C,D.dwL)
D.f7q=new B.dX(["c","crank",0.25,0.3,D.a78])
D.dlH=w([D.f7q,D.aRP],x.d)
D.f5w=new B.cu(["c",0,"l",0])
D.f5S=new B.cu(["l",1,"c",1])
D.dmj=w([D.f5w,D.f5S],x.o)
D.dlR=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eAP=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dlH,D.dmj,D.dlR)
D.dEe=new B.bu(D.a8t,[0.7],x.J)
D.f6M=new B.dX(["t","turbine",0.25,0.3,D.dEe])
D.f6z=new B.dX(["m","motor",0.75,0.3,A.jt])
D.dfE=w([D.f6M,D.f6z],x.d)
D.f6g=new B.cu(["t",0,"m",0])
D.f5W=new B.cu(["m",1,"t",1])
D.deC=w([D.f6g,D.f5W],x.o)
D.dkp=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eAM=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dfE,D.deC,D.dkp)
D.aJ3=new B.bu(D.Jz,[9],x.J)
D.a9A=new B.dX(["b","battery",0.2,0.3,D.aJ3])
D.aRN=new B.dX(["r","radio",0.8,0.3,A.jt])
D.dxk=w([D.a9A,D.Eu,D.aRN],x.d)
D.f6a=new B.cu(["s",1,"r",0])
D.aRJ=new B.cu(["r",1,"b",1])
D.caP=w([D.Es,D.f6a,D.aRJ],x.o)
D.dvN=w(["radio","music","listen"],x.s)
D.eAY=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dxk,D.caP,D.dvN)
D.dFj=new B.bu(D.Jz,[12],x.J)
D.aRM=new B.dX(["b","battery",0.2,0.3,D.dFj])
D.f79=new B.dX(["t","tv",0.8,0.3,A.jt])
D.d5w=w([D.aRM,D.Eu,D.f79],x.d)
D.f6b=new B.cu(["s",1,"t",0])
D.aRK=new B.cu(["t",1,"b",1])
D.dp2=w([D.Es,D.f6b,D.aRK],x.o)
D.dxi=w(["tv","television","screen","watch"],x.s)
D.eAJ=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d5w,D.dp2,D.dxi)
D.f7_=new B.dX(["z","buzzer",0.8,0.3,A.jt])
D.cM6=w([D.JZ,D.Eu,D.f7_],x.d)
D.f6c=new B.cu(["s",1,"z",0])
D.f6u=new B.cu(["z",1,"b",1])
D.d0c=w([D.Es,D.f6c,D.f6u],x.o)
D.du1=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eAV=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cM6,D.d0c,D.du1)
D.f6I=new B.dX(["h","heater",0.8,0.3,A.jt])
D.dj2=w([D.a9A,D.Eu,D.f6I],x.d)
D.f67=new B.cu(["s",1,"h",0])
D.f5H=new B.cu(["h",1,"b",1])
D.d0V=w([D.Es,D.f67,D.f5H],x.o)
D.cvO=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eAK=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dj2,D.d0V,D.cvO)
D.f7b=new B.dX(["s","solar",0.2,0.25,D.a78])
D.dFm=new B.bu(D.aLv,[100],x.J)
D.f7e=new B.dX(["r","resistor",0.55,0.25,D.dFm])
D.f7l=new B.dX(["c","capacitor",0.85,0.25,A.jt])
D.f6E=new B.dX(["q","resistor",0.55,0.6,D.aJ6])
D.f7c=new B.dX(["d","led",0.85,0.6,A.jt])
D.doy=w([D.f7b,D.f7e,D.f7l,D.f6E,D.f7c],x.d)
D.f66=new B.cu(["s",0,"r",0])
D.f61=new B.cu(["r",1,"c",0])
D.f5y=new B.cu(["c",1,"s",1])
D.f5x=new B.cu(["c",0,"q",0])
D.f60=new B.cu(["q",1,"d",0])
D.f5A=new B.cu(["d",1,"c",1])
D.dcr=w([D.f66,D.f61,D.f5y,D.f5x,D.f60,D.f5A],x.o)
D.dl0=w(["capacitor","store","charge","flash"],x.s)
D.eAX=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.doy,D.dcr,D.dl0)
D.f6P=new B.dX(["b","battery",0.15,0.3,D.a7b])
D.f7r=new B.dX(["l1","bulb",0.5,0.3,A.jt])
D.f6X=new B.dX(["l2","bulb",0.85,0.3,A.jt])
D.d3w=w([D.f6P,D.f7r,D.f6X],x.d)
D.f5r=new B.cu(["b",0,"l1",0])
D.f5P=new B.cu(["l1",1,"l2",0])
D.f5Q=new B.cu(["l2",1,"b",1])
D.dgr=w([D.f5r,D.f5P,D.f5Q],x.o)
D.dx3=w(["series","two bulbs","dim"],x.s)
D.eAN=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d3w,D.dgr,D.dx3)
D.emw={volts:0,charge:1}
D.dFp=new B.bu(D.emw,[1.5,0],x.J)
D.f7j=new B.dX(["b","battery",0.75,0.3,D.dFp])
D.d2U=w([D.aRQ,D.f7j],x.d)
D.f64=new B.cu(["s",0,"b",0])
D.f5v=new B.cu(["b",1,"s",1])
D.dcL=w([D.f64,D.f5v],x.o)
D.dla=w(["charge","rechargeable","flat","recharge"],x.s)
D.eAL=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d2U,D.dcL,D.dla)
D.dFi=new B.bu(D.Jz,[4.5],x.J)
D.f6K=new B.dX(["b","battery",0.2,0.3,D.dFi])
D.aRL=new B.dX(["p","phone",0.8,0.3,A.jt])
D.dft=w([D.f6K,D.Eu,D.aRL],x.d)
D.f69=new B.cu(["s",1,"p",0])
D.a9z=new B.cu(["p",1,"b",1])
D.dsV=w([D.Es,D.f69,D.a9z],x.o)
D.dut=w(["phone","charger","usb","mobile"],x.s)
D.eAR=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dft,D.dsV,D.dut)
D.f6w=new B.dX(["f","fan",0.8,0.3,A.jt])
D.cnW=w([D.JZ,D.f6w],x.d)
D.f5q=new B.cu(["b",0,"f",0])
D.f5F=new B.cu(["f",1,"b",1])
D.d1t=w([D.f5q,D.f5F],x.o)
D.dnv=w(["fan","cool","air","wind"],x.s)
D.eB_=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cnW,D.d1t,D.dnv)
D.f73=new B.dX(["b","battery",0.15,0.2,D.a7b])
D.f6x=new B.dX(["a","ammeter",0.5,0.2,A.jt])
D.f6v=new B.dX(["l","bulb",0.85,0.2,A.jt])
D.f75=new B.dX(["v","voltmeter",0.5,0.6,A.jt])
D.dlw=w([D.f73,D.f6x,D.f6v,D.f75],x.d)
D.f5o=new B.cu(["b",0,"a",0])
D.f5n=new B.cu(["a",1,"l",0])
D.f6i=new B.cu(["v",0,"l",0])
D.f6j=new B.cu(["v",1,"l",1])
D.dcC=w([D.f5o,D.f5n,D.aRH,D.f6i,D.f6j],x.o)
D.dAv=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eAW=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dlw,D.dcC,D.dAv)
D.f7u=new B.dX(["b","battery",0.15,0.2,D.aJ3])
D.f6O=new B.dX(["t","tv",0.55,0.2,A.jt])
D.aJ4=new B.bu(D.Jz,[5],x.J)
D.f6C=new B.dX(["c","buck",0.4,0.5,D.aJ4])
D.f6Q=new B.dX(["p","phone",0.8,0.5,A.jt])
D.da4=w([D.f7u,D.f6O,D.f6C,D.f6Q],x.d)
D.f5u=new B.cu(["b",0,"t",0])
D.aRF=new B.cu(["b",0,"c",0])
D.aRG=new B.cu(["c",1,"p",0])
D.dfq=w([D.f5u,D.aRK,D.aRF,D.aRG,D.a9z],x.o)
D.d8c=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eAO=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.da4,D.dfq,D.d8c)
D.f6D=new B.dX(["c","buck",0.5,0.3,D.aJ4])
D.d0K=w([D.aRM,D.f6D,D.aRL],x.d)
D.d5Y=w([D.aRF,D.aRG,D.a9z],x.o)
D.czi=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eAI=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d0K,D.d5Y,D.czi)
D.f6V=new B.dX(["d","diode",0.5,0.3,A.jt])
D.dgF=w([D.a9A,D.f6V,D.aRN],x.d)
D.f5p=new B.cu(["b",0,"d",0])
D.f5B=new B.cu(["d",1,"r",0])
D.cOF=w([D.f5p,D.f5B,D.aRJ],x.o)
D.d7S=w(["diode","protect","backwards","one way"],x.s)
D.eAU=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dgF,D.cOF,D.d7S)
D.S1=w([D.eAS,D.eAZ,D.eAQ,D.eAT,D.eAP,D.eAM,D.eAY,D.eAJ,D.eAV,D.eAK,D.eAX,D.eAN,D.eAL,D.eAR,D.eB_,D.eAW,D.eAO,D.eAI,D.eAU],B.at("O<mY>"))
D.hFz=new C.GY("Moon",1.62,A.d2,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hFx=new C.GY("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hFA=new C.GY("Mercury",3.7,A.kt,"Mercury is small, so its gravity is like Mars.")
D.hFu=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hFw=new C.GY("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hFy=new C.GY("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.hFv=new C.GY("Jupiter",24.79,A.cI,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tg=w([D.hFz,D.hFx,D.hFA,D.hFu,D.hFw,D.hFy,D.hFv],B.at("O<GY>"))
D.dcp=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dd9=w([0.2,0.5,0.8],x.n)
D.b1s=new C.Lk(0,"accordion")
D.d1P=w([A.jK,A.zr,A.CM],x.w)
D.d9v=w(["Mail","SMS","Ad"],x.s)
D.d2o=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hDN=new C.Bb(D.b1s,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aC7,D.d1P,D.d9v,D.d2o)
D.adm=new C.Lk(1,"flip")
D.dkV=w([A.qO,Z.HU,A.v0],x.w)
D.dfa=w(["Unlock","Verify","Secure"],x.s)
D.d0G=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hDM=new C.Bb(D.adm,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBD,D.dkV,D.dfa,D.d0G)
D.b1t=new C.Lk(2,"towers")
D.ddW=w([A.zp,A.qR,A.ij],x.w)
D.dds=w(["Save","Grow","Earn"],x.s)
D.cPB=w(["","",""],x.s)
D.hDO=new C.Bb(D.b1t,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5t,D.ddW,D.dds,D.cPB)
D.adn=new C.Lk(3,"assemble")
D.dlV=w([A.oF,A.hA,A.ed],x.w)
D.d8Q=w(["Launch","Charge","Shine"],x.s)
D.di3=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hDQ=new C.Bb(D.adn,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azX,D.dlV,D.d8Q,D.di3)
D.b1u=new C.Lk(4,"carousel")
D.dlI=w([A.b9,A.eZ],x.O)
D.d9E=w([A.n4,A.apJ,A.PO],x.w)
D.d3X=w(["Explore","Discover","Learn"],x.s)
D.dfz=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hDL=new C.Bb(D.b1u,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dlI,D.d9E,D.d3X,D.dfz)
D.b1v=new C.Lk(5,"burst")
D.ddn=w([A.i_,A.rE],x.O)
D.d2i=w([A.k8,A.n2,A.hO],x.w)
D.d2F=w(["Cheer","Win","Love"],x.s)
D.d52=w(["Make some noise","First place","Share the joy"],x.s)
D.hDP=new C.Bb(D.b1v,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.ddn,D.d2i,D.d2F,D.d52)
D.aBi=w([D.hDN,D.hDM,D.hDO,D.hDQ,D.hDL,D.hDP],B.at("O<Bb>"))
D.f2s=new B.b5("skin","Skin",A.apK)
D.f48=new B.b5("muscle","Muscles",A.Pp)
D.f3M=new B.b5("organ","Organs",A.hO)
D.bQ4=new B.a0(62747,"MaterialIcons",!1)
D.f3U=new B.b5("bone","Skeleton",D.bQ4)
D.f4g=new B.b5("vessel","Blood vessels",A.pD)
D.de1=w([D.f2s,D.f48,D.f3M,D.f3U,D.f4g],x.r)
D.f9t=new C.vr("Simple legs","Light. Land gently.",0.15,0.2)
D.f9v=new C.vr("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f9y=new C.vr("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dw=w([D.f9t,D.f9v,D.f9y],x._)
D.f55=new B.cu(["beat",0.18,0.28,0])
D.f6d=new B.cu(["burst",0.7,0.2,0])
D.f6o=new B.cu(["delay",0.45,0.5,1])
D.f5Y=new B.cu(["ripple",0.75,0.6,3])
D.d8z=w([D.f55,D.f6d,D.f6o,D.f5Y],x.e)
D.dkc=w([O.lv,P.JY,F.Ux],x.u)
D.hCd=new C.GJ("First spark","A clock lights a burst and a ripple",D.d8z,D.dkc)
D.f5E=new B.cu(["beat",0.15,0.3,1])
D.f4K=new B.cu(["ripple",0.62,0.15,0])
D.f6k=new B.cu(["delay",0.4,0.45,0])
D.f5k=new B.cu(["ripple",0.7,0.45,0])
D.f51=new B.cu(["delay",0.4,0.7,1])
D.f6_=new B.cu(["shake",0.75,0.75,0])
D.dyd=w([D.f5E,D.f4K,D.f6k,D.f5k,D.f51,D.f6_],x.e)
D.eCO=new B.y(2,4)
D.aRm=new B.y(4,5)
D.dce=w([O.lv,P.JY,F.Ux,D.eCO,D.aRm],x.u)
D.hCf=new C.GJ("Heartbeat","Two thumps, then a shake",D.dyd,D.dce)
D.f5a=new B.cu(["dice",0.15,0.7,1])
D.f6q=new B.cu(["echo",0.4,0.7,0])
D.f5i=new B.cu(["comet",0.7,0.5,4])
D.f6e=new B.cu(["burst",0.72,0.2,1])
D.f5C=new B.cu(["burst",0.3,0.25,0])
D.f5b=new B.cu(["pop",0.55,0.85,0])
D.cvm=w([D.f5a,D.f6q,D.f5i,D.f6e,D.f5C,D.f5b],x.e)
D.eC8=new B.y(1,3)
D.eC9=new B.y(1,4)
D.aRi=new B.y(0,5)
D.dlD=w([O.lv,R.vy,D.eC8,D.eC9,D.aRi],x.u)
D.hCe=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cvm,D.dlD)
D.f5f=new B.cu(["beat",0.15,0.2,2])
D.f5M=new B.cu(["chance",0.4,0.2,0])
D.f57=new B.cu(["ball",0.7,0.12,3])
D.f4V=new B.cu(["chance",0.4,0.5,1])
D.f6p=new B.cu(["ball",0.3,0.08,1])
D.f4O=new B.cu(["ripple",0.7,0.55,3])
D.coo=w([D.f5f,D.f5M,D.f57,D.f4V,D.f6p,D.f4O],x.e)
D.eCP=new B.y(2,5)
D.cLR=w([O.lv,R.vy,P.a9r,F.Uy,D.eCP],x.u)
D.hCc=new C.GJ("Rain","Balls fall at random and splash",D.coo,D.cLR)
D.f5N=new B.cu(["beat",0.12,0.45,2])
D.f6f=new B.cu(["toggle",0.38,0.2,0])
D.f6m=new B.cu(["wash",0.7,0.15,4])
D.f59=new B.cu(["count3",0.38,0.45,0])
D.f6h=new B.cu(["burst",0.72,0.4,0])
D.f5D=new B.cu(["light",0.55,0.7,1])
D.f4W=new B.cu(["pop",0.8,0.8,4])
D.dow=w([D.f5N,D.f6f,D.f6m,D.f59,D.f6h,D.f5D,D.f4W],x.e)
D.eDl=new B.y(3,6)
D.crx=w([O.lv,R.vy,P.a9r,F.Uy,D.aRi,D.eDl],x.u)
D.hCa=new C.GJ("Disco","A beat drives lights, washes and bursts",D.dow,D.crx)
D.f6t=new B.cu(["button",0.12,0.2,0])
D.f4Q=new B.cu(["delay",0.34,0.2,1])
D.f6s=new B.cu(["light",0.56,0.2,1])
D.f6l=new B.cu(["delay",0.56,0.45,1])
D.f5O=new B.cu(["ball",0.34,0.6,0])
D.f4U=new B.cu(["delay",0.34,0.8,1])
D.f4J=new B.cu(["burst",0.7,0.8,5])
D.cbz=w([D.f6t,D.f4Q,D.f6s,D.f6l,D.f5O,D.f4U,D.f4J],x.e)
D.eFx=new B.y(5,6)
D.dub=w([O.lv,R.vy,F.Ux,F.Uy,D.aRm,D.eFx],x.u)
D.hCb=new C.GJ("Domino","Tap the button and watch it run down the line",D.cbz,D.dub)
D.aBH=w([D.hCd,D.hCf,D.hCe,D.hCc,D.hCa,D.hCb],B.at("O<GJ>"))
D.djt=w([0.05,0.15,0.25],x.n)
D.dko=w([1.5,3,4.5,9,12],x.n)
D.f0K=new B.b5("dice","Dice",A.ox)
D.f2_=new B.b5("coin","Coin",Q.zk)
D.f4b=new B.b5("num","Number",A.wP)
D.dkC=w([D.f0K,D.f2_,D.f4b],x.r)
D.dkG=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBN=w([A.c0,A.aQ,A.b4,A.aG,A.bg,A.bT,A.cI,A.hv],x.O)
D.dlJ=w([A.bT,A.aG,A.dC,A.b4],x.O)
D.dmM=w([],x.h)
D.eu1=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eu7=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bl,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.euM=new C.eh("crank","Hand crank","\ud83d\udd04",A.cI,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.euo=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.etU=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eum=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bN,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.euR=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.euy=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dC,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.euc=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bg,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.euO=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.etM=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.euz=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.euB=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dC,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eu9=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eud=new C.eh("motor","Motor","\u2699\ufe0f",A.bN,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.euv=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eu2=new C.eh("heater","Heater","\ud83d\udd25",A.cI,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.euq=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cv,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eui=new C.eh("radio","Radio","\ud83d\udcfb",A.nt,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.euf=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.etT=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eu_=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eu5=new C.eh("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.euT=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.euI=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eul=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mi,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.etZ=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cv,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.euS=new C.eh("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.euV=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.etP=new C.eh("toycar","Toy car","\ud83d\ude97",A.cI,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.euW=new C.eh("kettle","Kettle","\ud83e\uded6",A.mS,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.etX=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dC,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eu8=new C.eh("lights","Party lights","\ud83c\udf84",A.nt,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.euj=new C.eh("fridge","Fridge","\ud83e\uddca",A.hx,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.etR=new C.eh("washer","Washing machine","\ud83e\udee7",A.cv,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.euJ=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eug=new C.eh("drone","Drone","\ud83d\ude81",A.bN,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.etW=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.euk=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.euG=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.etS=new C.eh("microwave","Microwave","\ud83c\udf72",A.cI,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.euA=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bl,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eu4=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.euu=new C.eh("console","Game console","\ud83c\udfae",A.bg,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.euL=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hr,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.etQ=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eup=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dC,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eux=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nt,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.euQ=new C.eh("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.etO=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e0,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.euU=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.euF=new C.eh("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eur=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.i_,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.euD=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bg,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.etY=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.euP=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cv,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.etL=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hr,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.euh=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eua=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.euw=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u8,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.etN=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eu0=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.euN=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cD,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eus=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eun=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.euE=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eub=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eut=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cv,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.euC=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cI,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.euH=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.etK=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eue=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cD,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eu6=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.etV=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dC,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eu3=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.euK=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bg,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sp=w([D.eu1,D.eu7,D.euM,D.euo,D.etU,D.eum,D.euR,D.euy,D.euc,D.euO,D.etM,D.euz,D.euB,D.eu9,D.eud,D.euv,D.eu2,D.euq,D.eui,D.euf,D.etT,D.eu_,D.eu5,D.euT,D.euI,D.eul,D.etZ,D.euS,D.euV,D.etP,D.euW,D.etX,D.eu8,D.euj,D.etR,D.euJ,D.eug,D.etW,D.euk,D.euG,D.etS,D.euA,D.eu4,D.euu,D.euL,D.etQ,D.eup,D.eux,D.euQ,D.etO,D.euU,D.euF,D.eur,D.euD,D.etY,D.euP,D.etL,D.euh,D.eua,D.euw,D.etN,D.eu0,D.euN,D.eus,D.eun,D.euE,D.eub,D.eut,D.euC,D.euH,D.etK,D.eue,D.eu6,D.etV,D.eu3,D.euK],B.at("O<eh>"))
D.dnq=w([5,10,15,25,45,60],x.t)
D.dnN=w([-0.045,0.03,-0.015],x.n)
D.aCf=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vd=w([0.05,0.2,0.35],x.n)
D.b9g=new B.ab(0,A.G,A.hI,A.dM,6)
D.dqv=w([D.b9g],x.V)
D.eBj=new B.y(0,"AND")
D.eCa=new B.y(1,"Adder")
D.eCQ=new B.y(2,"Blinker")
D.eDm=new B.y(3,"Memory")
D.dri=w([D.eBj,D.eCa,D.eCQ,D.eDm],x.I)
D.aCt=w([-104,0,104],x.n)
D.aCv=w([-14,3],x.n)
D.dse=w([-8,0,8],x.n)
D.aCE=w([-92,0,92],x.n)
D.dsD=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f9q=new C.vr("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f9x=new C.vr("Medium tank","Balanced.",0.35,1)
D.f9w=new C.vr("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SE=w([D.f9q,D.f9x,D.f9w],x._)
D.nP=w([0.04,0.2,0.36],x.n)
D.aCQ=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f3L=new B.b5(D.b1s,"Fold",Q.aqG)
D.f2I=new B.b5(D.adm,"Flip",A.CU)
D.bQl=new B.a0(62889,"MaterialIcons",!1)
D.f47=new B.b5(D.b1t,"Rise",D.bQl)
D.aqT=new B.a0(983870,"MaterialIcons",!1)
D.f03=new B.b5(D.adn,"Assemble",D.aqT)
D.f0h=new B.b5(D.b1u,"Spin",D.api)
D.f0b=new B.b5(D.b1v,"Pop",A.k8)
D.du8=w([D.f3L,D.f2I,D.f47,D.f03,D.f0h,D.f0b],B.at("O<+(Lk,n,a0)>"))
D.aCV=w([A.bT,A.dC,A.bx,A.aG,A.bg,A.c0],x.O)
D.duz=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dvD=w([3,4.5,5,6,9],x.n)
D.b9W=new B.ab(0,A.G,A.b6,A.J,16)
D.dw5=w([D.b9W],x.V)
D.fRA=new B.B("\ud83e\uddcd",null,R.KN,null,null,null,null,null,null,null,null,null)
D.caC=new B.IY(5,null,null,A.by,A.bT,null,null,null,null)
D.fgu=new B.a5(150,null,D.caC,null)
D.fyP=new B.F(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUU=new B.B("Getting the body ready...",null,D.fyP,null,null,null,null,null,null,null,null,null)
D.fRD=new B.B("Real 3D anatomy, kept on your phone",null,A1.xl,null,null,null,null,null,null,null,null,null)
D.dw8=w([D.fRA,A.aB,D.fgu,A.ae,D.fUU,A.av,D.fRD],x.p)
D.dwI=w(["solar","turbine","crank","pot"],x.s)
D.dx7=w([0,0.35,0.75,1],x.n)
D.dys=w(["volts","level","ohms","on"],x.s)
D.dzV=w([A.jK,A.zr,A.CM,A.qO,Z.HU,A.v0,A.zp,A.qR,A.ij,A.oF,A.hA,A.ed,A.hO,A.ik,A.n2,A.lO,A.v_,A.tc,A.ll,A.Hr,A.uZ,A.CT,A.CQ,A.a3m,A.Pf,A.D1,A.Pp,A.aq6,H.aqP,A.k8],x.w)
D.ejX={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hur=new C.yL("Switch",F.py,A.bl,0,"Tap it to turn it ON or OFF.")
D.hun=new C.yL("Blinker",A.oD,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.huo=new C.yL("AND",D.aqT,A.cv,2,"ON only when BOTH inputs are ON.")
D.bRQ=new B.a0(63671,"MaterialIcons",!1)
D.hum=new C.yL("OR",D.bRQ,A.bg,2,"ON when EITHER input is ON.")
D.hup=new C.yL("XOR",Aa.a2I,A.bT,2,"ON when the inputs are DIFFERENT.")
D.huj=new C.yL("NAND",A.uL,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bQW=new B.a0(63176,"MaterialIcons",!1)
D.huk=new C.yL("NOR",D.bQW,A.hv,2,"ON only when BOTH inputs are OFF.")
D.hul=new C.yL("NOT",Y.D5,A.cI,1,"Flips the signal: ON becomes OFF.")
D.huq=new C.yL("Light",A.mj,A.dC,1,"Glows when its input is ON.")
D.hus=new C.yL("Buzzer",A.oE,A.c0,1,"Beeps while its input is ON.")
D.A8=new B.bu(D.ejX,[D.hur,D.hun,D.huo,D.hum,D.hup,D.huj,D.huk,D.hul,D.huq,D.hus],B.at("bu<n,yL>"))
D.d1d=w([A.A],x.M)
D.d1A=w([A.aA,A.aF],x.M)
D.dbf=w([A.aA,A.A,A.aF],x.M)
D.dcR=w([A.aA,A.ly,A.A,A.lz,A.aF],x.M)
D.dre=w([A.aA,A.ly,A.a7,A.aa,A.lz,A.aF],x.M)
D.dEI=new B.d_([1,D.d1d,2,D.d1A,3,D.dbf,4,A.aDt,5,D.dcR,6,D.dre],B.at("d_<H,ai<da>>"))
D.emu={Calm:0,Box:1,Sleep:2}
D.cJe=w([4,2,6,0],x.n)
D.cJl=w([4,4,4,4],x.n)
D.cJm=w([4,7,8,0],x.n)
D.T5=new B.bu(D.emu,[D.cJe,D.cJl,D.cJm],B.at("bu<n,ai<G>>"))
D.ek9={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xI=new C.a1E(0,"source")
D.dch=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hAR=new C.qu("Clock",A.oD,D.xI,A.bx,D.dch)
D.hAN=new C.qu("Button",A.D8,D.xI,A.aQ,A.Z)
D.dvP=w(["random","quick","slow"],x.s)
D.hAY=new C.qu("Dice",A.ox,D.xI,A.bT,D.dvP)
D.bRu=new B.a0(63484,"MaterialIcons",!1)
D.Fa=new C.a1E(1,"logic")
D.dAL=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hAU=new C.qu("Delay",D.bRu,D.Fa,A.cv,D.dAL)
D.dnx=w(["fast","mid","slow"],x.s)
D.hAZ=new C.qu("Echo",A.aqn,D.Fa,A.bg,D.dnx)
D.hAW=new C.qu("Every 2nd",Y.D5,D.Fa,A.hv,A.Z)
D.bR9=new B.a0(63309,"MaterialIcons",!1)
D.hAT=new C.qu("Every 3rd",D.bR9,D.Fa,A.aG,A.Z)
D.caW=w(["50%","25%","75%"],x.s)
D.hB0=new C.qu("Chance",Ah.aqV,D.Fa,A.cI,D.caW)
D.rm=new C.a1E(2,"out")
D.hAP=new C.qu("Light",A.mj,D.rm,A.dC,A.Z)
D.hAQ=new C.qu("Burst",A.k8,D.rm,A.bT,A.Z)
D.hAO=new C.qu("Ripple",A.zw,D.rm,A.b9,A.Z)
D.hAX=new C.qu("Ball",A.aqy,D.rm,A.cI,A.Z)
D.hAV=new C.qu("Comet",A.oF,D.rm,A.bg,A.Z)
D.bSR=new B.a0(983669,"MaterialIcons",!1)
D.hB_=new C.qu("Shake",D.bSR,D.rm,A.c0,A.Z)
D.hB1=new C.qu("Pop",A.Hs,D.rm,A.b4,A.Z)
D.hAS=new C.qu("Wash",A.Pt,D.rm,A.pd,A.Z)
D.n9=new B.bu(D.ek9,[D.hAR,D.hAN,D.hAY,D.hAU,D.hAZ,D.hAW,D.hAT,D.hB0,D.hAP,D.hAQ,D.hAO,D.hAX,D.hAV,D.hB_,D.hB1,D.hAS],B.at("bu<n,qu>"))
D.ekm={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.AA=new C.Kj(0,"tv")
D.fb0=new C.mx("Samsung Neo QLED 8K",D.AA,F.yc,A.aG)
D.faS=new C.mx("LG OLED evo G5",D.AA,A.eq,A.hr)
D.faJ=new C.mx("Sony Bravia 9",D.AA,A.ry,A.bv)
D.faN=new C.mx("Apple TV 4K",D.AA,A.e1,A.bP)
D.faK=new C.mx("Bang and Olufsen Beovision",D.AA,F.FG,F.u8)
D.a9L=new C.Kj(1,"iphone")
D.aSb=new C.mx("iPhone 18 Pro Max",D.a9L,D.akl,A.ci)
D.Ew=new C.Kj(3,"fold")
D.bwf=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.faX=new C.mx("iPhone Fold",D.Ew,D.bwf,A.b7)
D.AB=new C.Kj(2,"android")
D.faY=new C.mx("Samsung Galaxy S26 Ultra",D.AB,F.Yh,A.d7)
D.boQ=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.faQ=new C.mx("Samsung Galaxy Z Fold7",D.Ew,D.boQ,A.cD)
D.faM=new C.mx("Google Pixel 10 Pro XL",D.AB,A.d2,A.bd)
D.faU=new C.mx("Xiaomi 16 Ultra",D.AB,A.ig,A.c6)
D.faP=new C.mx("Huawei Mate 80 Pro Max",D.AB,A.et,A.ay)
D.faL=new C.mx("OPPO Find X9 Ultra",D.AB,A.ea,A.b4)
D.fb2=new C.mx("Honor Magic V5",D.Ew,A.db,A.cv)
D.faR=new C.mx("vivo X300 Pro",D.AB,A.fH,A.cI)
D.aSc=new C.Kj(4,"tablet")
D.faW=new C.mx("iPad Pro M5",D.aSc,A.d2,A.aG)
D.a9M=new C.Kj(5,"reader")
D.fb3=new C.mx("Kindle Scribe",D.a9M,A.cS,A.bv)
D.AC=new C.Kj(6,"computer")
D.faV=new C.mx("MacBook Pro M5 Max",D.AC,A.d2,A.ci)
D.fb_=new C.mx("iMac 32 inch",D.AC,A.bP,A.cD)
D.faT=new C.mx("Pro Display XDR 8K",D.AC,A.ig,A.b9)
D.faO=new C.mx("Sony Laser Projector",D.AC,A.cl,A.dC)
D.faZ=new C.mx("Luxury car touchscreen",D.AC,M.ny,A.ay)
D.fb1=new C.mx("Apple Vision Pro",D.AC,A.cA,A.bg)
D.mt=new B.bu(D.ekm,[D.fb0,D.faS,D.faJ,D.faN,D.faK,D.aSb,D.faX,D.faY,D.faQ,D.faM,D.faU,D.faP,D.faL,D.fb2,D.faR,D.faW,D.fb3,D.faV,D.fb_,D.faT,D.faO,D.faZ,D.fb1],B.at("bu<n,mx>"))
D.eky={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bz3=new C.fQ(20,4,13,!1)
D.bzu=new C.fQ(14,5,13.5,!1)
D.bzl=new C.fQ(9,2.4,10,!1)
D.bzz=new C.fQ(7,5,12.5,!1)
D.bzo=new C.fQ(8,3.5,12,!1)
D.bz_=new C.fQ(15,2,6,!1)
D.bzx=new C.fQ(45,6,13.5,!0)
D.bzf=new C.fQ(10,8,13.5,!1)
D.bz7=new C.fQ(25,3,12,!0)
D.bzd=new C.fQ(35,4,12,!0)
D.bze=new C.fQ(40,4.5,9.5,!0)
D.bzg=new C.fQ(55,3,9,!0)
D.bz0=new C.fQ(18,3,9,!1)
D.bzw=new C.fQ(22,4,13.5,!1)
D.bzp=new C.fQ(16,5,13.5,!1)
D.bzb=new C.fQ(30,4,9,!0)
D.bzI=new C.fQ(5,3.5,13,!1)
D.bzj=new C.fQ(25,3,13.5,!0)
D.bzs=new C.fQ(14,2.5,9,!1)
D.bzi=new C.fQ(6,6,13,!1)
D.bzA=new C.fQ(30,1.2,5,!0)
D.bzH=new C.fQ(35,3,4.5,!0)
D.bzD=new C.fQ(20,4.5,7.5,!0)
D.bzh=new C.fQ(55,5.5,13.5,!0)
D.byZ=new C.fQ(45,5.5,13.5,!0)
D.bzt=new C.fQ(40,5.5,13.5,!0)
D.bzG=new C.fQ(60,6,13.5,!0)
D.akP=new C.fQ(28,4,7,!0)
D.GC=new C.fQ(25,4,7,!0)
D.bza=new C.fQ(30,4,7,!0)
D.bz5=new C.fQ(22,4,7,!0)
D.bz6=new C.fQ(24,4,7,!0)
D.bzk=new C.fQ(60,3,5.5,!0)
D.bz1=new C.fQ(18,9,14,!0)
D.bz8=new C.fQ(25,9,14,!0)
D.akQ=new C.fQ(30,8,14,!0)
D.bz4=new C.fQ(20,8,14,!0)
D.bzc=new C.fQ(30,9,14,!0)
D.bzB=new C.fQ(22,5,9.5,!0)
D.bz2=new C.fQ(30,2.5,10.5,!0)
D.bzq=new C.fQ(50,5.5,13.5,!0)
D.bzF=new C.fQ(12,2,9.5,!1)
D.bzn=new C.fQ(16,1.3,9.5,!0)
D.bzy=new C.fQ(40,2.5,7,!0)
D.bzE=new C.fQ(60,1.2,4.8,!0)
D.bzC=new C.fQ(18,5,13.5,!0)
D.bzv=new C.fQ(8,2,9.5,!1)
D.bzm=new C.fQ(12,2.5,8,!1)
D.bz9=new C.fQ(20,3.5,13.5,!0)
D.bzr=new C.fQ(3.5,3,13,!1)
D.A9=new B.bu(D.eky,[D.bz3,D.bzu,D.bzl,D.bzz,D.bzo,D.bz_,D.bzx,D.bzf,D.bz7,D.bzd,D.bze,D.bzg,D.bz0,D.bzw,D.bzp,D.bzb,D.bzI,D.bzj,D.bzs,D.bzi,D.bzA,D.bzH,D.bzD,D.bzh,D.byZ,D.bzt,D.bzG,D.akP,D.GC,D.bza,D.GC,D.bz5,D.GC,D.bz6,D.akP,D.GC,D.bzk,D.bz1,D.bz8,D.akQ,D.bz4,D.bzc,D.bzB,D.bz2,D.bzq,D.bzF,D.bzn,D.bzy,D.bzE,D.GC,D.akQ,D.bzC,D.bzv,D.bzm,D.bz9,D.bzr],B.at("bu<n,fQ>"))
D.ek6={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f_z=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eFu=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eFp=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eRW=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eST=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eRS=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eDv=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ePN=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f_H=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eTe=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eIT=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eD9=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eHS=new B.y("Movement","They pull your legs together and help you balance.")
D.eJQ=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eFD=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eY_=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eZ9=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ePv=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eYT=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eO5=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eTn=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eDg=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eKc=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eT1=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eOr=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eZ0=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eRm=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eDt=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eTY=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eXD=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eVK=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eBv=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eR4=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eR8=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eKX=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eFR=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eJE=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ePY=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eWz=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f_E=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eTk=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eBd=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eQ9=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eC3=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eWP=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eXW=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eQB=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eX3=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eDi=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eYx=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eHd=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eWc=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eKB=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eOl=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eTE=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eYH=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eYz=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eYD=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eOT=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eUw=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eVH=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eYj=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eQA=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eMF=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eLn=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eR_=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eTx=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eNb=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eNT=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eHC=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eXS=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eIs=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eC0=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eKW=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eBW=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eGi=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eL0=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eIC=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eTU=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eJT=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f_l=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eLx=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eOM=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eRu=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eIL=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eIu=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dFP=new B.bu(D.ek6,[D.f_z,D.eFu,D.eFp,D.eRW,D.eST,D.eRS,D.eDv,D.ePN,D.f_H,D.eTe,D.eIT,D.eD9,D.eHS,D.eJQ,D.eFD,D.eY_,D.eZ9,D.ePv,D.eYT,D.eO5,D.eTn,D.eDg,D.eKc,D.eT1,D.eOr,D.eZ0,D.eRm,D.eDt,D.eTY,D.eXD,D.eVK,D.eBv,D.eR4,D.eR8,D.eKX,D.eFR,D.eJE,D.ePY,D.eWz,D.f_E,D.eTk,D.eBd,D.eQ9,D.eC3,D.eWP,D.eXW,D.eQB,D.eX3,D.eDi,D.eYx,D.eHd,D.eWc,D.eKB,D.eOl,D.eTE,D.eYH,D.eYz,D.eYD,D.eOT,D.eUw,D.eVH,D.eYj,D.eQA,D.eMF,D.eLn,D.eR_,D.eTx,D.eNb,D.eNT,D.eHC,D.eXS,D.eIs,D.eC0,D.eKW,D.eBW,D.eGi,D.eL0,D.eIC,D.eTU,D.eJT,D.f_l,D.eLx,D.eOM,D.eRu,D.eIL,D.eIu],B.at("bu<n,+(n,n)>"))
D.dN9=new C.VG(null)
D.dNm=new C.VH(null)
D.dPq=new C.VN(null)
D.dQe=new C.Wn(null)
D.dQi=new C.Wo(null)
D.dQR=new C.Ww(null)
D.dUG=new C.X5(null)
D.dVm=new C.X6(null)
D.dZz=new C.Xb(null)
D.ees=new C.Xc(null)
D.eev=new C.Xg(null)
D.egF=new C.XA(null)
D.egG=new C.a9A(null)
D.eiJ=new C.XJ(null)
D.emH=new B.p(0,118)
D.aLB=new B.p(0,13)
D.emI=new B.p(0,17)
D.emL=new B.p(0,330)
D.emR=new B.p(0,-13)
D.emS=new B.p(0,-17)
D.emT=new B.p(0,-18)
D.emU=new B.p(0,-19)
D.emW=new B.p(0,-28)
D.emY=new B.p(0,-31)
D.emZ=new B.p(0,-32)
D.en4=new B.p(-9.5,-11)
D.en7=new B.p(10,20)
D.ena=new B.p(10,-13)
D.enc=new B.p(10,-22)
D.end=new B.p(10,-4)
D.enh=new B.p(11,0)
D.a8z=new B.p(11,8)
D.enn=new B.p(12,2)
D.eno=new B.p(14,0)
D.enp=new B.p(14,12)
D.aLN=new B.p(14,8)
D.enq=new B.p(14,-17)
D.aLP=new B.p(14,-3)
D.aLQ=new B.p(14,-4)
D.ent=new B.p(15,0)
D.enu=new B.p(15,-12)
D.enx=new B.p(16,-8)
D.eny=new B.p(18,14)
D.enz=new B.p(18,-12)
D.aLW=new B.p(20,0)
D.enH=new B.p(20,15)
D.enI=new B.p(20,-17)
D.enJ=new B.p(20,-3)
D.enK=new B.p(21,8)
D.enO=new B.p(22,10)
D.aLY=new B.p(22,8)
D.enP=new B.p(24,0)
D.enQ=new B.p(24,2)
D.enT=new B.p(24,-18)
D.enU=new B.p(24,-22)
D.enY=new B.p(25,8)
D.enZ=new B.p(26,0)
D.eo2=new B.p(28,-30)
D.eo9=new B.p(30,18)
D.eoa=new B.p(30,2)
D.eod=new B.p(31,19)
D.eof=new B.p(32,0)
D.aM1=new B.p(34,0)
D.aM2=new B.p(34,-32)
D.JD=new B.p(36,0)
D.eos=new B.p(3,-1)
D.eov=new B.p(40,3)
D.eoJ=new B.p(4,11)
D.eoM=new B.p(4,-2)
D.eoR=new B.p(5,17)
D.eoS=new B.p(5,6)
D.eoX=new B.p(6,11)
D.ep3=new B.p(8,7)
D.ep4=new B.p(8,-10)
D.ep5=new B.p(8,-14)
D.aM7=new B.p(9,0)
D.epf=new B.p(-20.5,-17.6)
D.epg=new B.p(-9,18.5)
D.epj=new B.p(-2.6,-1)
D.eps=new B.p(2.6,1)
D.epA=new B.p(-9,12.2)
D.epU=new B.p(-9,20.5)
D.eqe=new B.p(-10,0)
D.eqf=new B.p(-10,12)
D.aMe=new B.p(-10,4)
D.eqj=new B.p(-11,0)
D.eqm=new B.p(-11,-2)
D.eqq=new B.p(-13,-5)
D.eqr=new B.p(-14,0)
D.eqs=new B.p(-14,13)
D.eqt=new B.p(-14,2)
D.equ=new B.p(-14,-12)
D.eqv=new B.p(-14,-19)
D.eqx=new B.p(-14,-23)
D.eqy=new B.p(-15,6)
D.eqB=new B.p(-16,14)
D.eqD=new B.p(-16,-8)
D.eqE=new B.p(-17,10)
D.eqF=new B.p(-17,-18)
D.eqG=new B.p(-17,-8)
D.eqI=new B.p(-18,20)
D.eqJ=new B.p(-18,-9)
D.aMg=new B.p(-20,0)
D.eqL=new B.p(-20,16)
D.eqM=new B.p(-20,-9)
D.U0=new B.p(-22,8)
D.eqN=new B.p(-22,-10)
D.eqO=new B.p(-22,-11)
D.eqP=new B.p(-24,10)
D.eqQ=new B.p(-24,11)
D.eqR=new B.p(-24,14)
D.eqS=new B.p(-24,-22)
D.eqU=new B.p(-25,-11)
D.eqV=new B.p(-26,0)
D.eqW=new B.p(-26,-18)
D.eqX=new B.p(-2,9)
D.eqY=new B.p(-2,-10)
D.eqZ=new B.p(-2,-20)
D.er1=new B.p(-2,-9)
D.er3=new B.p(-32,0)
D.aMi=new B.p(-34,0)
D.er8=new B.p(-40,3)
D.era=new B.p(-4,11)
D.erb=new B.p(-4,-17)
D.erc=new B.p(-4,-2)
D.erg=new B.p(-5,0)
D.erh=new B.p(-5,20)
D.eri=new B.p(-5,6)
D.erj=new B.p(-6,26)
D.erk=new B.p(-6,6)
D.erl=new B.p(-6,-42)
D.ern=new B.p(-7,-19)
D.ero=new B.p(-7,-24)
D.err=new B.p(-8,-9)
D.a8I=new B.p(-9,0)
D.ers=new B.p(-9,1)
D.eru=new B.p(-9,-23)
D.fIO=new B.B("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.esu=new B.D(A.jG,D.fIO,null)
D.fZF=new B.B("Start from a ready-made board",null,A.fE,null,null,null,null,null,null,null,null,null)
D.esH=new B.D(A3.wp,D.fZF,null)
D.bH7=new B.R(4,0,4,14)
D.fDZ=new B.F(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new B.B("Games and little helpers for a spare minute.",null,D.fDZ,null,null,null,null,null,null,null,null,null)
D.esT=new B.D(D.bH7,D.fJO,null)
D.do8=w([A.hZ,A.bj],x.O)
D.aRa=new B.bY(A.A,0.5,A.x,null,0,D.do8,null,null)
D.eA4=new B.bY(A.A,0.5,A.x,null,0,D.aDa,null,null)
D.deI=w([A.c,A.bN],x.O)
D.eA6=new B.bY(A.A,0.5,A.x,null,0,D.deI,null,null)
D.dwV=w([A.bP,A.cA],x.O)
D.aRb=new B.bY(A.A,0.5,A.x,null,0,D.dwV,null,null)
D.cTf=w([A.c,A.bP],x.O)
D.eAb=new B.bY(A.p5,0.5,A.x,null,0,D.cTf,null,null)
D.bwj=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.duS=w([A.fp,D.bwj],x.O)
D.eAg=new B.bY(A.p5,0.5,A.x,null,0,D.duS,null,null)
D.cMn=w([A.d2,A.cl],x.O)
D.eAh=new B.bY(A.A,0.5,A.x,null,0,D.cMn,null,null)
D.d0a=w([A.fz,A.aQ,A.d3],x.O)
D.eAk=new B.bY(A.p5,0.5,A.x,null,0,D.d0a,null,null)
D.doO=w([A.cA,M.ny],x.O)
D.eAl=new B.bY(A.p5,0.5,A.x,null,0,D.doO,null,null)
D.eAp=new B.bY(A.A,0.5,A.x,null,0,D.azn,null,null)
D.dxL=w([A.cA,A.i9],x.O)
D.eAw=new B.bY(A.A,0.5,A.x,null,0,D.dxL,null,null)
D.aRg=new B.aN(9,9)
D.eAE=new B.aN(1.4,1.4)
D.f7y=new B.a1(10,-8,18,-2)
D.f7z=new B.a1(14,-14,20,14)
D.f7B=new B.a1(20,-2,30,2)
D.f7G=new B.a1(4,-13,30,-3)
D.f7M=new B.a1(8,-7,12,7)
D.f7Y=new B.a1(-12,12,12,19)
D.f7Z=new B.a1(-12,14,12,22)
D.f8_=new B.a1(-12,-22,12,8)
D.f80=new B.a1(-12,-25,12,19)
D.f81=new B.a1(-12,-26,12,-6)
D.f82=new B.a1(-12,-4,12,14)
D.f84=new B.a1(-14,20,14,24)
D.f85=new B.a1(-14,6,14,10)
D.f86=new B.a1(-14,-17,14,15)
D.f87=new B.a1(-14,-26,14,18)
D.f88=new B.a1(-14,-4,14,20)
D.f8a=new B.a1(-15,-29,15,25)
D.f8b=new B.a1(-16,-16,16,16)
D.f8e=new B.a1(-16,-22,-9,18)
D.f8f=new B.a1(-16,-24,16,-10)
D.f8h=new B.a1(-16,-2,16,20)
D.f8j=new B.a1(-18,20,18,24)
D.f8k=new B.a1(-18,-18,18,20)
D.f8l=new B.a1(-20,12,20,22)
D.f8m=new B.a1(-20,-28,20,26)
D.f8n=new B.a1(-22,14,22,18)
D.aRT=new B.a1(-22,-26,22,24)
D.f8o=new B.a1(-22,-3,22,3)
D.f8p=new B.a1(-22,-4,22,12)
D.f8r=new B.a1(-24,-12,10,22)
D.f8s=new B.a1(-24,-14,22,8)
D.f8t=new B.a1(-24,-6,24,20)
D.aRU=new B.a1(-24,-9,24,9)
D.f8u=new B.a1(-25,14,25,19)
D.f8v=new B.a1(-26,-14,14,8)
D.f8w=new B.a1(-26,-4,26,20)
D.f8x=new B.a1(-26,-6,4,6)
D.aRV=new B.a1(-28,-13,28,13)
D.f8y=new B.a1(-28,-16,28,16)
D.f8z=new B.a1(-28,-16,28,8)
D.f8A=new B.a1(-28,-22,28,22)
D.f8B=new B.a1(-30,-12,30,14)
D.f8C=new B.a1(-30,-14,0,14)
D.f8D=new B.a1(-30,-18,30,20)
D.f8E=new B.a1(-30,-28,30,14)
D.f8F=new B.a1(-30,-2,30,18)
D.f8G=new B.a1(-30,-4,30,18)
D.f8H=new B.a1(-32,-17,32,17)
D.f8I=new B.a1(-32,-28,32,18)
D.f8J=new B.a1(-33,-21,33,17)
D.f8K=new B.a1(-34,14,34,26)
D.a9C=new B.a1(-34,-18,34,18)
D.f8L=new B.a1(-34,-4,34,7)
D.f8M=new B.a1(-36,-24,36,20)
D.f8N=new B.a1(-38,-22,38,22)
D.f8P=new B.a1(-3,12,3,22)
D.f8Q=new B.a1(-3,5,3,15)
D.f8U=new B.a1(-46,-34,46,28)
D.f8W=new B.a1(-48,-3,48,3)
D.f8Z=new B.a1(-6,18,24,24)
D.f9_=new B.a1(-6,5,6,12)
D.f90=new B.a1(-6,-22,6,-15)
D.f94=new B.a1(-9,-16,9,22)
D.f95=new B.a1(-4.5,-24,4.5,-21.2)
D.f97=new B.a1(14,-9,17.5,9)
D.elT={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aT0=new B.de(D.elT,5,x.Q)
D.eln={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fcJ=new B.de(D.eln,10,x.Q)
D.ff3=new B.av(24,44)
D.ffr=new B.av(54,38)
D.ffx=new B.av(66,38)
D.bez=new B.fj(2,null,null,null,null,A.bg,null,null,null,null)
D.fgB=new B.a5(16,16,D.bez,null)
D.aU2=new B.hG(3,12,12,0.82,null)
D.fts=new B.F(!0,A1.y2,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new B.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fts)
D.fyD=new B.F(!0,A.kO,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new B.ep("AI",null,null,A.cN,null,null,null,null,null,null,D.fyD)
D.foj=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foR=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new B.F(!0,A.cv,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new B.F(!0,A.bW,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq5=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fds=new B.cU(A.hI,A.dM,6)
D.dhM=w([D.fds],B.at("O<cU>"))
D.frz=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dhM,null,null,null)
D.frE=new B.F(!0,A.es,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frJ=new B.F(!0,A.bW,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new B.F(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsu=new B.F(!0,A.aD,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.F(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuA=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDw,null,null,null)
D.fuJ=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvr=new B.F(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.F(!0,A.um,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxg=new B.F(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new B.F(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy8=new B.F(!0,A.mV,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyj=new B.F(!0,A.cA,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWd=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzv=new B.F(!0,A.hc,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new B.F(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new B.F(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD2=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD5=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new B.F(!0,A.um,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEA=new B.F(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frM=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new B.B("\u26a0\ufe0f ",null,D.frM,null,null,null,null,null,null,null,null,null)
D.fFb=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AV,null,null,null,null,null,null,null,null,null)
D.fGQ=new B.B("Pick one, then change it and see what happens.",null,A.AV,null,null,null,null,null,null,null,null,null)
D.fsY=new B.F(!0,A.ab,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fsY,null,null,null,null,null,null,null,null,null)
D.fJp=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fK1=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fKF=new B.B("Make it yours",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fNR=new B.B("5G",null,X.aVx,null,null,null,null,null,null,null,null,null)
D.fOS=new B.B("Pick how big the screen is on the board",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fA6=new B.F(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP3=new B.B("WHAT HAPPENS",null,D.fA6,null,null,null,null,null,null,null,null,null)
D.fQP=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fRu=new B.B("Change the words and pictures on the three slabs.",null,A.AV,null,null,null,null,null,null,null,null,null)
D.fRH=new B.B("All the parts and wires will be removed.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fS1=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fSB=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.B("\ud83c\udfaf Challenges",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fUm=new B.B("Remove this part",null,W.aV8,null,null,null,null,null,null,null,null,null)
D.fUG=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fzw=new B.F(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUY=new B.B("How the Lab works",null,D.fzw,null,null,null,null,null,null,null,null,null)
D.fqi=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVi=new B.B("Electronics Lab",null,D.fqi,null,null,null,null,A.a2,null,1,null,null)
D.fVm=new B.B("?",null,P.aWK,null,null,null,null,null,null,null,null,null)
D.fWH=new B.B("Ready-made circuits",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fXk=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fCK=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_O=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fCK,null,null,null,null,null,null,null,null,null)
D.h0Z=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aV6,null,null,null,null,null,null,null,null,null)
D.h1u=new B.B("NGMY",null,A.vH,null,null,null,null,null,null,null,null,null)
D.h1H=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VL,null,null,null,null,null,null,null,null,null)
D.h25=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lW,null,null,null,null,null,null,null,null,null)
D.h39=new B.B("TOOLBOX",null,A8.ab_,null,null,null,null,null,null,null,null,null)
D.hs1=new B.bv("body-loading",x.Y)
D.hsn=new B.bv("core-protocol-back",x.Y)
D.hss=new B.bv("core-protocol-title-frame",x.Y)})();(function staticFields(){$.hv4=null
$.hv0=null
$.hv1=null
$.hBk=0
$.i3s=B.T(x.N,B.at("iH"))
$.i40=B.T(x.N,B.at("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iCn","bH0",()=>{var v="led"
return B.a([C.aAa("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fsM(),v),C.aAa("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fsN(),v),C.aAa("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fsO(),v),C.aAa("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fsV(),v),C.aAa("Not both","Make the light go OFF only when both switches are ON.",2,new C.fsW(),v),C.aAa("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fsX(),"buzzer")],B.at("O<bdf>"))})
w($,"iCP","bH1",()=>B.a([C.Rl("UNIVERSE","Earth, space and gravity",A.PO,A.aG,new C.ftc()),C.Rl("ELECTRONICS LAB","Batteries, wires, real circuits",Af.CR,A.aG,new C.ftd()),C.Rl("DISCOVERY LAB","Body Explorer: a real 3D human",D.bQm,A.b4,new C.fte()),C.Rl("TOOLBOX","Converter, clock, games",H.apv,A.cI,new C.ftf()),C.Rl("REACTION LAB","Wire parts together",A.Dc,A.bx,new C.ftg()),C.Rl("SPARK PAINTER","Paint with light",A.Hq,A.bT,new C.fth()),C.Rl("ROCKET LANDER","Land softly on the pad",A.oF,A.aG,new C.fti()),C.Rl("TITLE ANIMATOR","Make a moving title",A.wQ,A.bl,new C.ftj()),C.Rl("CIRCUIT LAB","Connect logic, learn it",A.a33,A.cv,new C.ftk())],B.at("O<bvv>")))
w($,"iEu","qF",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sp[v]
t.n(0,u.a,u)}return t})
w($,"iCo","ajc",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fsY()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fsZ()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.ft_()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.ft0()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.ft1()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fsP()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fsQ()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fsR()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fsS()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fsT()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fsU())],B.at("O<bdg>")))
w($,"iCR","hKn",()=>B.a([C.a2a("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c6,new C.fts()),C.a2a("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bD,new C.ftt()),C.a2a("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cD,new C.ftu()),C.a2a("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.ftv()),C.a2a("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.ftw()),C.a2a("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bl,A.bd,new C.ftx()),C.a2a("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b3,new C.fty()),C.a2a("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bg,A.aE,new C.ftz())],B.at("O<bwP>")))})()};
(a=>{a["Q+Hx1b5yCjFoq821MLwZ4TeoOzI="]=a.current})($__dart_deferred_initializers__);