((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Ab,A2,A3,I,P,A4,Ac,A5,A6,G,Ad,Ae,A7,Af,X,Ag,Ah,Q,N,Ai,Aj,Y,O,U,Ak,Al,V,M,A8,W,K,S,Am,E,F,L,B={
byt(d){return B.hN_(d)},
hN_(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byt=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qK(C.n1(""),d,A.hl,null).cM(0,A.XA),$async$byt)
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
return C.i($async$byt,v)},
hYx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PF[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.iH(D.PF,new B.fsZ())
if(w==null)w=A.d.gL(D.PF)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q8().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajj(w.a,w.b,m,w,s,!1)},
hSh(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.Q3,new B.fjx(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i5o(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.oA(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aG(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q8().ai(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.ddW[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.eq([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dQ(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dQ(J.q(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.z(f,e))J.ch(i,new C.cI([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gT(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mw(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.ajj(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hX7(d){var w,v,u=B.h2f()
d.B(u)
for(w=0;w<60;++w)u.uW(0,0.03333333333333333)
v=u.a
return A.d.b5(v,new B.fpX(u))&&!A.d.d8(v,new B.fpY())},
hX6(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q8().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dcn,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hLv(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hYw(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q8().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Q3[u]
if(A.d.b5(w,new B.fsW(s)))if(!C.cX(r,s.b.toLowerCase(),0))v=C.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.fsX(e),C.U(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fsY())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q8().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajj:function ajj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsZ:function fsZ(){},
fjx:function fjx(){},
fpX:function fpX(d){this.a=d},
fpY:function fpY(){},
fsW:function fsW(d){this.a=d},
fsX:function fsX(d){this.a=d},
fsY:function fsY(){},
UU:function UU(d,e){this.c=d
this.a=e},
bj8:function bj8(d,e,f,g,h){var _=this
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
e4T:function e4T(d){this.a=d},
e4U:function e4U(d,e,f){this.a=d
this.b=e
this.c=f},
e4V:function e4V(d){this.a=d},
e55:function e55(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e51:function e51(d){this.a=d},
e5_:function e5_(d,e){this.a=d
this.b=e},
e50:function e50(d,e,f){this.a=d
this.b=e
this.c=f},
e52:function e52(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e53:function e53(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e4X:function e4X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e54:function e54(d,e){this.a=d
this.b=e},
e4W:function e4W(d,e){this.a=d
this.b=e},
e59:function e59(d){this.a=d},
e58:function e58(d){this.a=d},
e5a:function e5a(d){this.a=d},
e57:function e57(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5c:function e5c(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5e:function e5e(d,e){this.a=d
this.b=e},
byP(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hfH(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zy,A.L,w,w),A.aA,C.bY(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VI,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FK:function FK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uH:function uH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vl:function Vl(d){this.a=d},
aDw:function aDw(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fm$=h
_.kY$=i
_.fR$=j
_.fn$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
ekS:function ekS(){},
elb:function elb(d){this.a=d},
ela:function ela(d,e){this.a=d
this.b=e},
elc:function elc(){},
eld:function eld(){},
ekU:function ekU(d,e,f){this.a=d
this.b=e
this.c=f},
ekT:function ekT(d,e){this.a=d
this.b=e},
ekJ:function ekJ(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekM:function ekM(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekQ:function ekQ(d){this.a=d},
ekR:function ekR(d){this.a=d},
ekH:function ekH(d){this.a=d},
ekI:function ekI(d){this.a=d},
ekG:function ekG(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
el_:function el_(d){this.a=d},
el0:function el0(d){this.a=d},
ekX:function ekX(d){this.a=d},
el1:function el1(d){this.a=d},
ekW:function ekW(d){this.a=d},
el2:function el2(d){this.a=d},
el3:function el3(d){this.a=d},
ekV:function ekV(d){this.a=d},
el5:function el5(d,e){this.a=d
this.b=e},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
el6:function el6(d){this.a=d},
el7:function el7(d){this.a=d},
el8:function el8(d){this.a=d},
el9:function el9(d){this.a=d},
ekY:function ekY(d){this.a=d},
bg7:function bg7(d,e){this.b=d
this.a=e},
aLn:function aLn(){},
bwr:function bwr(){},
cEe(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEe=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qN().jw(0,"assets/data/body3d.bin"),$async$cEe)
case 3:d=a1
$.hb3=J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)
t=C.aRv(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jo(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d1V[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2x(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aWE))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9e(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEe,v)},
aRi:function aRi(d,e,f){this.a=d
this.b=e
this.c=f},
a2x:function a2x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9e:function b9e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TM:function TM(d){this.a=d},
aBW:function aBW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fm$=s
_.kY$=t
_.fR$=u
_.fn$=v
_.bq$=w
_.a8$=a0
_.c=_.a=null},
dE4:function dE4(d){this.a=d},
dE3:function dE3(d,e){this.a=d
this.b=e},
dDH:function dDH(d,e){this.a=d
this.b=e},
dDI:function dDI(){},
dE5:function dE5(){},
dDJ:function dDJ(d,e){this.a=d
this.b=e},
dDK:function dDK(d){this.a=d},
dDL:function dDL(){},
dDM:function dDM(d){this.a=d},
dDO:function dDO(d,e){this.a=d
this.b=e},
dDN:function dDN(d){this.a=d},
dDE:function dDE(d,e,f){this.a=d
this.b=e
this.c=f},
dDF:function dDF(d){this.a=d},
dDG:function dDG(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDW:function dDW(d,e){this.a=d
this.b=e},
dDX:function dDX(d,e){this.a=d
this.b=e},
dDY:function dDY(d){this.a=d},
dDU:function dDU(d,e){this.a=d
this.b=e},
dDZ:function dDZ(d,e){this.a=d
this.b=e},
dDT:function dDT(d,e){this.a=d
this.b=e},
dE_:function dE_(d){this.a=d},
dDS:function dDS(d){this.a=d},
dE0:function dE0(d){this.a=d},
dDR:function dDR(d){this.a=d},
dE1:function dE1(d){this.a=d},
dDQ:function dDQ(d){this.a=d},
dE2:function dE2(d){this.a=d},
dDP:function dDP(d){this.a=d},
aKp:function aKp(){},
aKq:function aKq(){},
c_A:function c_A(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_B:function c_B(d,e){this.a=d
this.b=e},
c_C:function c_C(d){this.a=d},
axq(d,e,f,g,h){return new B.b9X(d,e,f,g,h)},
fU9(d,e,f,g,h,i){return $.hIU.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cL0(d,e,f,i,g,h))},
xS:function xS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
C2:function C2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ni:function ni(d,e,f){this.a=d
this.b=e
this.c=f},
b9X:function b9X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fdL:function fdL(){},
fdM:function fdM(){},
fdN:function fdN(){},
fdU:function fdU(){},
fdV:function fdV(){},
fdW:function fdW(){},
TR:function TR(d){this.a=d},
aBZ:function aBZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fm$=m
_.kY$=n
_.fR$=o
_.fn$=p
_.bq$=q
_.a8$=r
_.c=_.a=null},
dGf:function dGf(d){this.a=d},
dFU:function dFU(d,e){this.a=d
this.b=e},
dFX:function dFX(){},
dGg:function dGg(){},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dFN:function dFN(){},
dFO:function dFO(){},
dFP:function dFP(d){this.a=d},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dFR:function dFR(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(){},
dG_:function dG_(d,e){this.a=d
this.b=e},
dG0:function dG0(d){this.a=d},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFV:function dFV(d){this.a=d},
dFM:function dFM(d,e,f){this.a=d
this.b=e
this.c=f},
dG9:function dG9(d){this.a=d},
dG8:function dG8(d){this.a=d},
dGa:function dGa(d){this.a=d},
dG7:function dG7(d){this.a=d},
dG5:function dG5(d){this.a=d},
dG6:function dG6(d){this.a=d},
dG4:function dG4(d){this.a=d},
dG1:function dG1(d){this.a=d},
dG3:function dG3(d){this.a=d},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGc:function dGc(d,e){this.a=d
this.b=e},
dGd:function dGd(d){this.a=d},
dG2:function dG2(d){this.a=d},
dGe:function dGe(d,e){this.a=d
this.b=e},
baf:function baf(d,e){this.b=d
this.a=e},
cL0:function cL0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKv:function aKv(){},
bwa:function bwa(){},
hzJ(){return new B.MY(null)},
ow(d,e,f,g,h){return new B.brM(d,e,f,g,h)},
bqc(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fUF(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
MY:function MY(d){this.a=d},
K1:function K1(d,e){this.a=d
this.b=e},
Ag:function Ag(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCf:function aCf(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dM7:function dM7(d,e){this.a=d
this.b=e},
dM6:function dM6(d){this.a=d},
dM9:function dM9(d,e){this.a=d
this.b=e},
dM8:function dM8(d){this.a=d},
brM:function brM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feb:function feb(){},
fec:function fec(){},
fed:function fed(){},
feo:function feo(){},
feq:function feq(){},
fer:function fer(){},
fes:function fes(){},
fet:function fet(){},
feu:function feu(){},
fev:function fev(){},
few:function few(){},
fee:function fee(){},
fef:function fef(){},
feg:function feg(){},
feh:function feh(){},
fei:function fei(){},
fej:function fej(){},
fek:function fek(){},
fel:function fel(){},
fem:function fem(){},
fen:function fen(){},
fep:function fep(){},
bqd:function bqd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVq:function eVq(d){this.a=d},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVn:function eVn(d){this.a=d},
eVr:function eVr(d){this.a=d},
eVo:function eVo(d,e){this.a=d
this.b=e},
aep:function aep(d,e,f){this.c=d
this.d=e
this.a=f},
adg:function adg(d,e,f){this.c=d
this.d=e
this.a=f},
PD:function PD(d,e,f,g,h,i,j,k,l,m){var _=this
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
brb:function brb(d,e){this.b=d
this.a=e},
bqH:function bqH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8W:function b8W(d,e){this.b=d
this.a=e},
aGv:function aGv(d,e){this.c=d
this.a=e},
aGw:function aGw(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b_$=f
_.c=_.a=null},
eV6:function eV6(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV4:function eV4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV3:function eV3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV1:function eV1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV0:function eV0(d,e,f){this.a=d
this.b=e
this.c=f},
eV2:function eV2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eV_:function eV_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVe:function eVe(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVf:function eVf(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e){this.a=d
this.b=e},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVc:function eVc(d,e,f){this.a=d
this.b=e
this.c=f},
eVi:function eVi(d,e,f){this.a=d
this.b=e
this.c=f},
eVb:function eVb(d){this.a=d},
eV7:function eV7(d){this.a=d},
eVj:function eVj(d){this.a=d},
eVk:function eVk(d){this.a=d},
eVa:function eVa(d,e){this.a=d
this.b=e},
eVl:function eVl(d,e){this.a=d
this.b=e},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVm:function eVm(d,e){this.a=d
this.b=e},
eV8:function eV8(d,e){this.a=d
this.b=e},
eUY:function eUY(){},
eUZ:function eUZ(){},
bpQ:function bpQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bph:function bph(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9B:function b9B(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpj:function bpj(d,e,f){this.b=d
this.c=e
this.a=f},
btg:function btg(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMe:function aMe(){},
hh6(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bg6(d,e,f,g,h,i){return $.hJu.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dfU(d,e,f,i,g,h))},
a_L:function a_L(d,e){this.a=d
this.b=e},
pW:function pW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qE:function qE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
C6:function C6(d,e){this.a=d
this.b=e},
YJ:function YJ(d,e){this.a=d
this.b=e},
aef:function aef(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_Y:function a_Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cg:function Cg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab7:function ab7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abo:function abo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adk:function adk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bg4:function bg4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bs$=_.bK$=0},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
dfV:function dfV(d,e){this.a=d
this.b=e},
dfW:function dfW(d){this.a=d},
dfX:function dfX(d){this.a=d},
dg_:function dg_(d){this.a=d},
dg0:function dg0(d){this.a=d},
dg1:function dg1(d){this.a=d},
dg2:function dg2(d){this.a=d},
dg3:function dg3(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d){this.a=d},
dg7:function dg7(d){this.a=d},
Fw:function Fw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vk:function Vk(d){this.a=d},
aDv:function aDv(d,e,f,g,h,i,j){var _=this
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
_.a8$=j
_.c=_.a=null},
ekc:function ekc(d){this.a=d},
ek1:function ek1(d){this.a=d},
ek3:function ek3(){},
ek4:function ek4(){},
ek7:function ek7(){},
ek8:function ek8(d,e,f){this.a=d
this.b=e
this.c=f},
ek9:function ek9(d){this.a=d},
eka:function eka(d){this.a=d},
ek5:function ek5(){},
ek6:function ek6(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekb:function ekb(){},
ejY:function ejY(d){this.a=d},
eke:function eke(d){this.a=d},
ekd:function ekd(d){this.a=d},
ekg:function ekg(){},
ekf:function ekf(d,e){this.a=d
this.b=e},
ek0:function ek0(){},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d){this.a=d},
ekA:function ekA(d){this.a=d},
ekz:function ekz(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekq:function ekq(d,e){this.a=d
this.b=e},
eky:function eky(d){this.a=d},
ekw:function ekw(d){this.a=d},
ekx:function ekx(d){this.a=d},
ekv:function ekv(d){this.a=d},
eku:function eku(d){this.a=d},
ekr:function ekr(d){this.a=d},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
ek2:function ek2(){},
ekm:function ekm(d){this.a=d},
ekn:function ekn(d){this.a=d},
ekl:function ekl(d){this.a=d},
eko:function eko(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekj:function ekj(d){this.a=d},
eki:function eki(d){this.a=d},
ekh:function ekh(d,e){this.a=d
this.b=e},
bg5:function bg5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dfU:function dfU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLl:function aLl(){},
bkF:function bkF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Pu:function Pu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VA:function VA(d){this.a=d},
bjJ:function bjJ(d,e,f,g,h,i,j,k){var _=this
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
_.a8$=k
_.c=_.a=null},
ew9:function ew9(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(){},
evL:function evL(){},
evK:function evK(){},
evU:function evU(d,e){this.a=d
this.b=e},
evW:function evW(d){this.a=d},
ew_:function ew_(d){this.a=d},
evV:function evV(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
evS:function evS(d){this.a=d},
ew4:function ew4(d,e){this.a=d
this.b=e},
evR:function evR(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
evQ:function evQ(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
evP:function evP(d){this.a=d},
evX:function evX(d){this.a=d},
evO:function evO(d){this.a=d},
evY:function evY(d){this.a=d},
evN:function evN(d){this.a=d},
evZ:function evZ(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
br6:function br6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VM:function VM(d){this.a=d},
aDL:function aDL(d,e,f,g){var _=this
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
_.a8$=g
_.c=_.a=null},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e,f){this.a=d
this.b=e
this.c=f},
eCL:function eCL(d){this.a=d},
eCI:function eCI(){},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCO:function eCO(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
aLu:function aLu(){},
aLA:function aLA(){},
a_f:function a_f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vh:function Vh(d){this.a=d},
aDn:function aDn(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fm$=h
_.kY$=i
_.fR$=j
_.fn$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
egQ:function egQ(d){this.a=d},
egR:function egR(d,e){this.a=d
this.b=e},
egE:function egE(d,e){this.a=d
this.b=e},
egF:function egF(d){this.a=d},
egC:function egC(d){this.a=d},
egD:function egD(d){this.a=d},
egB:function egB(d){this.a=d},
egG:function egG(d){this.a=d},
egA:function egA(d,e){this.a=d
this.b=e},
egI:function egI(d){this.a=d},
egz:function egz(d,e){this.a=d
this.b=e},
egJ:function egJ(d){this.a=d},
egy:function egy(d,e){this.a=d
this.b=e},
egK:function egK(d){this.a=d},
egx:function egx(d){this.a=d},
egL:function egL(d){this.a=d},
egw:function egw(d){this.a=d},
egM:function egM(d){this.a=d},
egv:function egv(d){this.a=d},
egN:function egN(d){this.a=d},
egO:function egO(d){this.a=d},
egP:function egP(d){this.a=d},
egu:function egu(d){this.a=d},
egH:function egH(d){this.a=d},
bks:function bks(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abe:function abe(d,e,f){this.a=d
this.b=e
this.c=f},
VH:function VH(d){this.a=d},
bjO:function bjO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fm$=i
_.kY$=j
_.fR$=k
_.fn$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eC9:function eC9(d){this.a=d},
eC_:function eC_(d,e){this.a=d
this.b=e},
eC0:function eC0(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBP:function eBP(d){this.a=d},
eC1:function eC1(d,e){this.a=d
this.b=e},
eBW:function eBW(d,e){this.a=d
this.b=e},
eC2:function eC2(d,e){this.a=d
this.b=e},
eBV:function eBV(d,e){this.a=d
this.b=e},
eC3:function eC3(d){this.a=d},
eBU:function eBU(d){this.a=d},
eC4:function eC4(d){this.a=d},
eBT:function eBT(d,e){this.a=d
this.b=e},
eC5:function eC5(d){this.a=d},
eBS:function eBS(d,e){this.a=d
this.b=e},
eC6:function eC6(d){this.a=d},
eBO:function eBO(d,e){this.a=d
this.b=e},
eC7:function eC7(d){this.a=d},
eBN:function eBN(d,e){this.a=d
this.b=e},
eC8:function eC8(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
brY:function brY(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abH:function abH(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
TP:function TP(d){this.a=d},
aBY:function aBY(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fm$=h
_.kY$=i
_.fR$=j
_.fn$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
dFo:function dFo(d){this.a=d},
dFn:function dFn(d,e){this.a=d
this.b=e},
dFp:function dFp(){},
dFq:function dFq(d){this.a=d},
dFe:function dFe(d,e){this.a=d
this.b=e},
dFh:function dFh(d){this.a=d},
dFg:function dFg(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dFl:function dFl(d,e,f){this.a=d
this.b=e
this.c=f},
dFk:function dFk(d){this.a=d},
dFi:function dFi(d){this.a=d},
dFj:function dFj(d){this.a=d},
dFm:function dFm(d){this.a=d},
b9W:function b9W(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKy:function cKy(d){this.a=d},
aKt:function aKt(){},
bw9:function bw9(){},
aLi:function aLi(){},
bwq:function bwq(){},
aLx:function aLx(){},
bwy:function bwy(){},
Fs:function Fs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acw:function acw(d,e,f){this.a=d
this.b=e
this.c=f},
Vb:function Vb(d){this.a=d},
bjn:function bjn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fm$=i
_.kY$=j
_.fR$=k
_.fn$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
ecj:function ecj(d,e){this.a=d
this.b=e},
ecI:function ecI(d){this.a=d},
ecx:function ecx(d){this.a=d},
eco:function eco(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecz:function ecz(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecA:function ecA(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecq:function ecq(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecl:function ecl(d){this.a=d},
ecH:function ecH(d){this.a=d},
eck:function eck(d){this.a=d},
bh_:function bh_(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ad1:function ad1(d,e){this.a=d
this.b=e
this.c=-1000},
Vg:function Vg(d){this.a=d},
aDm:function aDm(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fm$=h
_.kY$=i
_.fR$=j
_.fn$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
egd:function egd(d,e){this.a=d
this.b=e},
ege:function ege(d,e,f){this.a=d
this.b=e
this.c=f},
egl:function egl(d){this.a=d},
egk:function egk(d){this.a=d},
egm:function egm(d,e){this.a=d
this.b=e},
egn:function egn(d){this.a=d},
egj:function egj(d){this.a=d},
ego:function ego(d){this.a=d},
egi:function egi(d,e){this.a=d
this.b=e},
egp:function egp(d,e){this.a=d
this.b=e},
egh:function egh(d,e){this.a=d
this.b=e},
egq:function egq(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
egr:function egr(d){this.a=d},
egs:function egs(d){this.a=d},
egf:function egf(d){this.a=d},
egt:function egt(d){this.a=d},
bkt:function bkt(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLg:function aLg(){},
bwo:function bwo(){},
aLh:function aLh(){},
bwp:function bwp(){},
fa0(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
hYW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gaf(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bI(0,new B.ftf(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vW.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fXb(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
t7:function t7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8P:function b8P(d,e){this.a=d
this.b=e},
ftf:function ftf(d,e){this.a=d
this.b=e},
Ve:function Ve(d){this.a=d},
aDk:function aDk(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
efI:function efI(d){this.a=d},
efH:function efH(d,e){this.a=d
this.b=e},
efu:function efu(d,e){this.a=d
this.b=e},
efo:function efo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efp:function efp(d){this.a=d},
eft:function eft(d,e){this.a=d
this.b=e},
efs:function efs(d,e){this.a=d
this.b=e},
efq:function efq(d){this.a=d},
efr:function efr(d,e){this.a=d
this.b=e},
efC:function efC(){},
efD:function efD(d){this.a=d},
efB:function efB(d){this.a=d},
efE:function efE(d){this.a=d},
efA:function efA(d){this.a=d},
efy:function efy(d){this.a=d},
efz:function efz(d,e){this.a=d
this.b=e},
efv:function efv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efx:function efx(d){this.a=d},
efF:function efF(d,e){this.a=d
this.b=e},
efw:function efw(d,e){this.a=d
this.b=e},
efG:function efG(d,e){this.a=d
this.b=e},
bhH:function bhH(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
do3:function do3(d,e){this.a=d
this.b=e},
Uc:function Uc(d){this.a=d},
biD:function biD(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dOb:function dOb(d){this.a=d},
dOa:function dOa(d,e){this.a=d
this.b=e},
dO0:function dO0(d){this.a=d},
dO_:function dO_(){},
dO1:function dO1(d){this.a=d},
dNZ:function dNZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dO9:function dO9(){},
dO4:function dO4(){},
dO5:function dO5(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
dO6:function dO6(d){this.a=d},
dO2:function dO2(d){this.a=d},
dO7:function dO7(d,e){this.a=d
this.b=e},
dO8:function dO8(d,e){this.a=d
this.b=e},
Us:function Us(d){this.a=d},
aCr:function aCr(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a8$=h
_.c=_.a=null},
dR0:function dR0(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQO:function dQO(){},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dQT:function dQT(d){this.a=d},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQU:function dQU(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQY:function dQY(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
bd0:function bd0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3g:function d3g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3i:function d3i(d,e,f){this.a=d
this.b=e
this.c=f},
d3h:function d3h(d,e){this.a=d
this.b=e},
aKH:function aKH(){},
bzk(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7z,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
fmX(d,e,f,g,h){var w,v,u=null,t=C.i1(u,u,u,u,C.dn(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.cg,u,A.eh,A.ce)
t.eI()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbc(w)/2))
t.a5(d,w)},
hW0(){var w,v,u,t,s,r,q,p,o=new C.eL()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.J(0,p))q.push(new C.y(p,1+o.aB(2+A.o.an(t,3))))}A.d.b0(q,new B.fnW())
w.push(new B.aR8(q))}return w},
a1a(d,e){var w,v,u,t
for(w=new C.WO(d),v="";w.C();){u=C.jF(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jF(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i7H(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WO(d),v=0,u="";w.C();){t=C.jF(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=C.jF(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aR8:function aR8(d){this.a=d},
bFm:function bFm(){},
fnW:function fnW(){},
TH:function TH(d){this.a=d},
bih:function bih(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dBz:function dBz(){},
dBM:function dBM(d){this.a=d},
dBL:function dBL(d,e,f){this.a=d
this.b=e
this.c=f},
dBN:function dBN(d){this.a=d},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBA:function dBA(d,e){this.a=d
this.b=e},
dBF:function dBF(){},
dBG:function dBG(d){this.a=d},
dBE:function dBE(d){this.a=d},
dBH:function dBH(d,e){this.a=d
this.b=e},
dBD:function dBD(d,e){this.a=d
this.b=e},
dBI:function dBI(d,e){this.a=d
this.b=e},
dBC:function dBC(d,e){this.a=d
this.b=e},
dBJ:function dBJ(d){this.a=d},
dBB:function dBB(d){this.a=d},
b90:function b90(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cD5:function cD5(d,e){this.a=d
this.b=e},
UG:function UG(d){this.a=d},
biP:function biP(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a8$=h
_.c=_.a=null},
dV3:function dV3(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dV1:function dV1(d,e){this.a=d
this.b=e},
dUU:function dUU(d,e,f){this.a=d
this.b=e
this.c=f},
dUY:function dUY(d){this.a=d},
dUX:function dUX(d){this.a=d},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dUW:function dUW(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dUV:function dUV(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e){this.a=d
this.b=e},
beu:function beu(d,e,f){this.b=d
this.c=e
this.a=f},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbc:function dbc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TQ:function TQ(d){this.a=d},
biu:function biu(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dFL:function dFL(d){this.a=d},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFt:function dFt(){},
dFC:function dFC(d){this.a=d},
dFB:function dFB(){},
dFD:function dFD(d){this.a=d},
dFA:function dFA(){},
dFE:function dFE(d){this.a=d},
dFz:function dFz(d){this.a=d},
dFF:function dFF(d){this.a=d},
dFy:function dFy(d){this.a=d},
dFG:function dFG(d){this.a=d},
dFx:function dFx(d){this.a=d},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFI:function dFI(d){this.a=d},
dFv:function dFv(d,e){this.a=d
this.b=e},
dFJ:function dFJ(d){this.a=d},
dFu:function dFu(d,e){this.a=d
this.b=e},
aKl:function aKl(){},
aKP:function aKP(){},
hm7(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h2f(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3U(w,v,u,A.cI,C.T(x.N,x.y))},
htC(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h2g(d),d.d*f.b)},
h2g(d){return 42+(D.lU.ai(0,d.b)?(d.ch-1)*38:0)},
e9:function e9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tk:function tk(d,e,f,g){var _=this
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
a9O:function a9O(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aaU:function aaU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3U:function a3U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLh:function bLh(){},
bLs:function bLs(d){this.a=d},
bLn:function bLn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLt:function bLt(d){this.a=d},
bLu:function bLu(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLy:function bLy(d,e,f){this.a=d
this.b=e
this.c=f},
bLz:function bLz(d){this.a=d},
bLj:function bLj(d){this.a=d},
bLk:function bLk(d){this.a=d},
bLi:function bLi(d){this.a=d},
bLl:function bLl(d,e,f){this.a=d
this.b=e
this.c=f},
bLm:function bLm(d){this.a=d},
bLg:function bLg(d){this.a=d},
bLA:function bLA(d,e){this.a=d
this.b=e},
bLo:function bLo(d,e){this.a=d
this.b=e},
bLr:function bLr(d){this.a=d},
bLq:function bLq(d){this.a=d},
bLp:function bLp(d){this.a=d},
aia:function aia(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGy:function bGy(){},
bGz:function bGz(){},
mw:function mw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjV:function cjV(d){this.a=d},
i5k(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fEE(),c9=new B.fEG(),d0=new B.fEH(),d1=new B.fEF(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bM,A.bJ))
d3.bA(D.e3o,D.e1b,c9.$2(A.dB,1.4))
d3.bA(D.e11,D.e10,c9.$2(A.bv,2.4))
d3.bA(D.e12,X.aFS,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.fb.j(0.5))
d2.z=A.QO
d3.ae(D.e0M,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aLG,A.aP,A.cq))
d3.ae(A.cJ,16,c8.$1(A.bv))
d3.ae(A.cJ,13,c8.$1(c7?A.aS.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.iZ(0,d4.y*0.6)
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
r.delete()}}d3.ae(D.e3k,2.4,c8.$1(c7?A.bo:A.ak))
d3.ae(D.e41,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.eu))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bF())
d3.aO(q,c8.$1(A.fb.j(0.35)))
if(c7){d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.ay.j(0.7)))}d3.aO(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.iZ(0,d4.y)
d3.bA(D.a4K,D.aG7,c9.$2(A.bS,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ae(A.ig,3,c8.$1(c7?A.bo:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2x[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cm(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c0(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ap(10,-12))
w.E(new C.ap(10,2))
w.E(new C.ap(-2,2))
w.E(new C.ap(-6,22))
w.E(new C.ap(-16,22))
w.E(new C.ap(-14,2))
w.E(new C.ap(-24,2))
w.E(new C.bF())
d3.aO(w,d1.$3(D.eGw,A.aM,A.d8))
d3.aZ(D.eFW,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.iZ(0,d4.y*2)
d3.bA(A.J,D.e15,c9.$2(A.bS,2.4))
d3.bA(A.a4J,D.e14,c9.$2(A.hI,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dO.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ap(52,-26))
d2.E(new C.ap(52,18))
d2.E(new C.ap(16,4))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.bK.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eGC,A.bn,A.cE))
k=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aO(k,c8.$1(A.eu))
d3.ae(D.e19,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.mY))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bt(d5*17),3)!==0
else j=!1
i=j?A.bV:D.bgb
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bV.j(0.35))
t.z=A.lp
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e3u,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eGI,A.bS,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bK.j(0.75):A.aB))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.iZ(0,d4.y*0.5)
d3.hN(C.cm(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.mY))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.F(A.k.bt(d5),60)),2,"0"),D.e1a,A.b1,6.5)
d3.ae(D.e1m,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.RC,10,c8.$1(c7?A.cd:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.iZ(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e43,A.c,16)
d2.restore()
d3.ae(A.k2,6,c8.$1(A.d6))
d3.ae(A.k2,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bT(A.RC,14+v*6+A.k.F(t,6))
r=c9.$2(A.cd.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c0(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e3t,D.e4_,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.iZ(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eGx,A.bS,A.ak))
d3.ae(D.aFU,8,c8.$1(A.aB))
d3.ae(D.aFU,4.5,c8.$1(c7?A.aS:A.cE))
d3.ae(D.e3r,2.2,c8.$1(c7&&A.o.F(A.k.bt(d5*1.6),2)===0?A.ay:A.kf))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e3C,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eGF,A.iR,A.f7))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aZ(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b1))
d2=-9+Math.sin(d2-0.4)*6
d3.aZ(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bV))}d3.ae(D.e3n,4,c8.$1(A.aX))
d3.ae(D.e16,2.4,c8.$1(A.ay))
d3.ae(D.e1j,2.4,c8.$1(A.bo))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aB))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ap,c6,c6,t)
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
h.e=null}}d3.aO(h,c9.$2(A.b1,1.8))
d6.$5(d3,"72",D.e17,A.h0,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e3G,A.h0.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.e3w,3,c8.$1(c7?A.bo:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cz.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aZ(D.eGz,c8.$1(F.t5))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.t6(0,-1,1)
d3.hN(C.cm(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.ci))
d3.ae(D.e1O,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ap,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ap(-5,-16))
e.E(new C.ap(5,-16))
e.E(new C.ap(9,22))
e.E(new C.bF())
d3.aO(e,d1.$3(D.eH2,A.c,A.bI))
d3.aZ(D.eH1,c8.$1(c7?A.dO:A.bv))
s=new C.aO(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aO(s,c8.$1(A.er))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dO.j(0.45)))
d2=c8.$1(A.dO.j(0.35))
d2.z=A.QO
d3.ae(D.e0N,14,d2)}return!0
case"discoball":d3.bA(D.e0S,K.aFQ,c9.$2(A.dA,1.4))
d3.ae(A.J,16,d1.$3(D.eGk,A.aP,A.ak))
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
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d2T[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eGi,A.cq,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eGb,A.aL,A.bJ))
d3.bA(D.e0R,D.e0T,c9.$2(A.bv,1.6))
d3.ae(D.e0U,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2y[m]
if(c7)t=a1?A.b8:A.fc
else t=A.cE
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.iZ(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a4G,c9.$2(A.bJ,4))
d2.restore()
d3.bA(D.e3g,D.e3A,c9.$2(A.bJ,4))
d3.aZ(D.eH0,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.awT[m]+1,d2,10,14,2)
p=C.aq(A.bK,A.d8,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eGy,A.bS,A.bn))
for(m=0;m<2;++m){l=D.awT[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fx:A.aB).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mz
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bA(D.e1q,D.e1H,c9.$2(A.aB,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cE))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.mM(1,a3,0.8,1).iy():A.eu
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mz
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eGn,A.cz,A.KG))
d3.ae(D.e3H,8,c8.$1(A.qI))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.iZ(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fb,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aO(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hh).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.e2f,3.2,c8.$1(A.hh.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.iZ(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eGA,A.j6,A.t8))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eu))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mz
d3.ae(D.e1l,8,d2)}return!0
case"headphones":d3.f5(C.cm(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.awU[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bu,A.pp).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bT(new C.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ez.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c0(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.F(d5*14,8)),A.kb,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cE))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eGg,A.dA,A.eu))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dj(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.e0Y,A.b1,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.E1,A.h0,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bt(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.mY))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.pn(),!0)
d2.translate(-27,-19)
E.KR(d3,D.eMj,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.v4))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dS,A.dr))
d3.aD(a6,c9.$2(A.b3,1.2))
d3.ae(D.aGe,9,c8.$1(A.aB))
d3.ae(D.aGe,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aB))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b1:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e2j,s,8.2)
d3.ae(D.e1c,2.4,c8.$1(c7?A.bo:A.aK))
d6.$5(d3,"IN",D.e3B,A.ad,6)
d6.$5(d3,"OUT",D.e27,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(D.e0O,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eGc,A.eu,A.hF))
d6.$5(d3,"7805",D.a4K,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d8t[m]-1
r=c8.$1(A.e_).H()
d2.drawRect(C.c0(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e42,A.bi,9)
return!0
case"diode":d3.bA(D.aGi,D.aG2,c9.$2(A.e_,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aH.j(0.85)))
d3.aZ(D.eG1,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dO.j(0.4))
t.z=A.jk
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e3p,A.az,8)
return!0
case"ldr":d3.bA(D.aGi,D.a4K,c9.$2(A.e_,2.4))
d3.bA(D.aG7,D.aG2,c9.$2(A.e_,2.4))
d3.ae(A.J,12,c8.$1(A.d8))
d3.ae(A.J,12,c9.$2(A.th,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ap,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aO(a8,c9.$2(A.bK,1.4))
d2=C.aq(A.bv,A.dO,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e3h,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e9
break A}if("sonytv"===d2){t=A.qB
break A}if("appletv"===d2){t=A.e_
break A}t=F.E3
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
p.clipRRect(C.er(a5),$.pn(),!0)
p.translate(t,s)
E.fZw(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e1I,1.6,c8.$1(A.b1))}else{d3.aD(a5,c8.$1(D.v4))
p=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aO(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oS[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dA).H()
p=s.gbL().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e2V,A.bS,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.Wu))
d6.$5(d3,"Apple TV",D.e2k,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.beI))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dp,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e3Z,F.t5,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lU.h(0,d2)
b1=b0.b===D.w8
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
t.clipRRect(C.er(a5),$.pn(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KR(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.v4))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eu))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bS))
if(c7){d6.$5(d3,"NGMY",D.e45,A.aB,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c0(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aFO,1.6,c8.$1(A.aB))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eGJ,A.cq,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.pn(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KR(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.v4))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.Wu))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eGN,A.bM,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.pn(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KR(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.v4))
d3.ae(D.aFJ,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aO(d2,c8.$1(D.Wu))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e9))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.pn(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KR(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.v4))
d3.aZ(D.eGT,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aO(d2,c8.$1(A.dO.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.pn(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KR(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eGB,A.iN,A.dA))
d3.ae(D.aFT,7,c8.$1(A.aB))
d3.ae(D.aFT,4,c8.$1(c7?A.dO:A.cE))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dp,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aB))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.mY))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cU(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aO(c3,c9.$2(A.aS,2.2))
d2=A.k.F(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b1))
d6.$5(d3,""+(88+A.o.F(A.k.bt(d5*2),5)),D.e2g,A.c,10)
d6.$5(d3,"km/h",D.e2d,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.eu))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.pn(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KR(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lp
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e3L,D.e3Q,c9.$2(A.bn,4))
d3.bA(D.e1J,D.e1R,c9.$2(A.bn,4))
return!0}return!1},
fEE:function fEE(){},
fEG:function fEG(){},
fEH:function fEH(){},
fEF:function fEF(){},
h19(d,e,f,g){return new B.ai8(d,g,f,e)},
Fg(d,e,f){return new B.b9Y(d,e,f)},
ai8:function ai8(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ai9:function ai9(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fm$=h
_.kY$=i
_.fR$=j
_.fn$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
bGc:function bGc(d,e){this.a=d
this.b=e},
bGd:function bGd(d){this.a=d},
bGb:function bGb(d){this.a=d},
bGe:function bGe(){},
bGf:function bGf(d){this.a=d},
bGg:function bGg(d,e,f){this.a=d
this.b=e
this.c=f},
bGa:function bGa(d,e){this.a=d
this.b=e},
bG8:function bG8(d,e){this.a=d
this.b=e},
bG9:function bG9(d,e,f){this.a=d
this.b=e
this.c=f},
bG2:function bG2(d,e){this.a=d
this.b=e},
bG3:function bG3(){},
bG4:function bG4(d,e){this.a=d
this.b=e},
bG5:function bG5(d,e){this.a=d
this.b=e},
bG6:function bG6(d){this.a=d},
bG7:function bG7(d){this.a=d},
bGv:function bGv(d){this.a=d},
bGw:function bGw(){},
bFG:function bFG(){},
bGx:function bGx(d,e){this.a=d
this.b=e},
bGu:function bGu(d,e,f){this.a=d
this.b=e
this.c=f},
bGp:function bGp(d){this.a=d},
bGm:function bGm(d,e,f){this.a=d
this.b=e
this.c=f},
bGn:function bGn(d,e){this.a=d
this.b=e},
bGq:function bGq(d){this.a=d},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGo:function bGo(d){this.a=d},
bGr:function bGr(d){this.a=d},
bGi:function bGi(d,e){this.a=d
this.b=e},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGs:function bGs(d){this.a=d},
bGh:function bGh(d){this.a=d},
bGt:function bGt(d){this.a=d},
bFH:function bFH(d,e){this.a=d
this.b=e},
bG_:function bG_(d,e){this.a=d
this.b=e},
bG1:function bG1(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e){this.a=d
this.b=e},
bFN:function bFN(d,e){this.a=d
this.b=e},
bFO:function bFO(d){this.a=d},
bFM:function bFM(d){this.a=d},
bFP:function bFP(d,e,f){this.a=d
this.b=e
this.c=f},
bFL:function bFL(d,e){this.a=d
this.b=e},
bFS:function bFS(d,e){this.a=d
this.b=e},
bFT:function bFT(d,e){this.a=d
this.b=e},
bFU:function bFU(d,e){this.a=d
this.b=e},
bFV:function bFV(d,e,f){this.a=d
this.b=e
this.c=f},
bFK:function bFK(d,e){this.a=d
this.b=e},
bFW:function bFW(d,e,f){this.a=d
this.b=e
this.c=f},
bFJ:function bFJ(d,e){this.a=d
this.b=e},
bFX:function bFX(d,e,f){this.a=d
this.b=e
this.c=f},
bFI:function bFI(d,e){this.a=d
this.b=e},
bFY:function bFY(d){this.a=d},
bFZ:function bFZ(d){this.a=d},
bFQ:function bFQ(d){this.a=d},
bFR:function bFR(d){this.a=d},
b9Y:function b9Y(d,e,f){this.a=d
this.b=e
this.c=f},
fdX:function fdX(){},
fdY:function fdY(){},
fdZ:function fdZ(){},
fdK:function fdK(){},
fe_:function fe_(){},
fdJ:function fdJ(){},
fe0:function fe0(){},
fdO:function fdO(){},
fdI:function fdI(){},
fdP:function fdP(){},
fdH:function fdH(){},
fdQ:function fdQ(){},
fdG:function fdG(){},
fdR:function fdR(){},
fdE:function fdE(){},
fdF:function fdF(){},
fdS:function fdS(){},
fdC:function fdC(){},
fdD:function fdD(){},
fdT:function fdT(){},
fdB:function fdB(){},
Ut:function Ut(d){this.a=d},
aCs:function aCs(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dRi:function dRi(){},
dRj:function dRj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRk:function dRk(){},
dR7:function dR7(d){this.a=d},
dR6:function dR6(d,e,f){this.a=d
this.b=e
this.c=f},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dR4:function dR4(){},
dRg:function dRg(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRb:function dRb(d){this.a=d},
dRc:function dRc(){},
dRe:function dRe(d,e,f){this.a=d
this.b=e
this.c=f},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRa:function dRa(){},
dRm:function dRm(d){this.a=d},
dRn:function dRn(d,e){this.a=d
this.b=e},
dRl:function dRl(){},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRq:function dRq(d){this.a=d},
awz:function awz(d,e){this.c=d
this.a=e},
b89:function b89(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
cAD:function cAD(d){this.a=d},
b88:function b88(d,e){this.b=d
this.a=e},
cAC:function cAC(d){this.a=d},
awS:function awS(){},
awT:function awT(){},
aIS:function aIS(){},
bwc:function bwc(){},
i5l(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bT(A.w1,23)
$.W()
b8=C.M()
b8.r=A.aB.gp(0)
b9.ae(A.w1,25,b8)
b8=C.M()
b8.saq(D.ec0.av(0,v))
b9.ae(A.w1,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bi.gp(0)
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
b9.bA(A.w1,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bi.gp(0)
b9.ae(A.w1,3,r)
c2.$5(b9,w?"V":"A",D.e3T,A.bi,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e3m,A.aB,9.5)
return!0
case"fan":b8=C.bA(D.eG8,A.hC)
$.W()
s=C.M()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aZ(D.eGU,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.w2,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cm(A.aFN,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.hh.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c0(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bm.gp(0)
b9.ae(D.w2,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cq.gp(0)
b9.ae(D.w2,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.ja.gp(0)
b9.ae(D.w2,14,b8)
return!0
case"speaker":l=C.bA(D.aLG,A.up)
$.W()
b8=C.M()
b8.saq(D.anP.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.saq(D.ecn.av(0,C.bT(A.cx,15)))
b9.ae(A.cx,14+k,b8)
b8=C.M()
b8.r=A.dA.gp(0)
b9.ae(A.cx,5,b8)
b8=C.M()
b8.r=A.bn.gp(0)
b9.ae(D.aFP,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bT(D.e1p,6+u*6+A.k.F(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bV.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c0(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bA(D.eGM,A.up)
$.W()
b8=C.M()
b8.saq(D.bUg.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.aLI,A.ii)
s=C.M()
s.r=A.hF.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BF(i)<500?":":" "
g=A.a.aT(A.o.u(C.dj(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.b1.j(0.12).gp(0)
b9.aZ(D.aLI,b8)
c2.$5(b9,g+h+f,D.e3E,A.b1,21)}b8=C.M()
b8.r=A.cq.gp(0)
b9.ae(D.e3D,2.4,b8)
b8=C.M()
b8.r=A.cq.gp(0)
b9.ae(D.e1t,2.4,b8)
return!0
case"calculator":j=C.bA(D.eGs,A.hc)
$.W()
b8=C.M()
b8.saq(D.bU_.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.eGm,A.hb)
s=C.M()
s.r=(b7?A.WH:D.bgH).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e3l,A.VA,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bA(new C.a9(q,s,q+6,r),A.S5)
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.ci:A.bS).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bA(D.eGj,A.hc)
$.W()
b8=C.M()
b8.r=L.mY.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.afh.gp(0)
b9.aD(j,b8)
a0=C.bA(D.eGa,A.hC)
if(b7){b8=C.M()
b8.saq(D.bVz.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.pn(),!0)
b8.translate(-12,-25)
E.KR(b9,D.eLV,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=C.bA(D.eG7,A.hb)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.b1.gp(0)
b9.aZ(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e2D,A.c,6)}else{b8=C.M()
b8.r=D.v4.gp(0)
b9.aD(a0,b8)}b8=C.bA(D.eH3,D.ecw)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bA(D.eGL,A.rt)
$.W()
b8=C.M()
b8.saq(D.bUx.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.awU[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cE.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bt(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bo:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bT(D.w2,8+u*6+A.k.F(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hv.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c0(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bA(D.eGr,A.hC)
s=$.W()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yS
b9.ae(A.w1,34,b8)}a6=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cU(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.M()
b8.r=C.aq(A.er,D.b9c,a5).gp(0)
b9.aO(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c1.gp(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.iZ(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aFP,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ap,b6,b6,C.a([],r))
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
q.saq(D.bSD.av(0,D.eGE))
b9.aO(j,q)
q=new C.aO(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.M()
p.r=A.fb.gp(0)
b9.aO(q,p)
r=new C.aO(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.M()
s.r=A.fb.gp(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.d8l[a2]
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.by(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bS.gp(0)
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
case"kettle":b8=$.W().r
s=x.v
j=new C.aO(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cU(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bF())
r=C.M()
r.saq(D.bTG.av(0,D.eGq))
b9.aO(j,r)
r=new C.aO(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
q=C.M()
q.r=A.e_.gp(0)
b9.aO(r,q)
s=new C.aO(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cU(-34,-6,-18,12))
b8=C.M()
b8.b=A.ae
b8.c=5
b8.r=A.aB.gp(0)
b9.aO(s,b8)
b8=C.M()
if(b7){s=C.aq(A.cs,A.v3,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eu
b8.r=s.gp(0)
b9.aZ(D.eGp,b8)
if(b7){b8=C.M()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lp
b9.ae(A.aFL,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aB.gp(0)
b9.ae(D.e0L,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bF())
s=C.M()
s.r=A.dO.j(0.28*u).gp(0)
b9.aO(b8,s)
s=C.M()
s.r=A.dO.j(0.5*u).gp(0)
s.z=Y.Hj
b9.ae(D.e3I,24,s)}b8=C.bA(D.eH_,A.hC)
s=$.W()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.e0Z,D.aFV,r)
r=C.M()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aFV,D.e3J,r)
a9=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.M()
s.r=(b7?A.aM:A.jR).gp(0)
b9.aO(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ae(D.e3K,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cU(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.hg.gp(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1D[u].j(0.6).gp(0)
b3.z=A.QO
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
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1D[u]
else{o=C.aq(D.a1D[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i5k(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXE(d){var w=D.lU.h(0,d)
return(w==null?null:w.b)===D.zh},
i6t(d,e,f){return C.a5(d,!1).c8(C.uz(null,!1,!0,!0,new B.fJh(e,f),A.eI,null,A.pF,new B.fJi(),x.H))},
IZ:function IZ(d,e){this.a=d
this.b=e},
m2:function m2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJh:function fJh(d,e){this.a=d
this.b=e},
fJi:function fJi(){},
Ua:function Ua(d,e,f){this.c=d
this.d=e
this.a=f},
biB:function biB(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
dN4:function dN4(d){this.a=d},
dN3:function dN3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dN1:function dN1(){},
dN2:function dN2(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN_:function dN_(d,e){this.a=d
this.b=e},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dMY:function dMY(d){this.a=d},
dMX:function dMX(d){this.a=d},
dMT:function dMT(d){this.a=d},
dMS:function dMS(d){this.a=d},
dMW:function dMW(d,e,f){this.a=d
this.b=e
this.c=f},
dMV:function dMV(d){this.a=d},
dMU:function dMU(d){this.a=d},
buh:function buh(d,e,f){this.b=d
this.c=e
this.a=f},
ae8:function ae8(d,e,f){this.b=d
this.c=e
this.a=f},
aKE:function aKE(){},
fie(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zy,A.L,w,w),A.aA,C.bY(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VI,w,u,v,w,w,A.n),w,w,w,A.ew,A.a9,w,w,w),w,w,w)},
fXK(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eL()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mC
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
a2=b4.hb()?new C.y(f,-g):new C.y(-f,g)
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
a9=C.et([A.d.gal(g)],u)
A.d.fu(g,b4)
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
B:{a7=b4.aB(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.J(0,a7)}}v=b5>=10?1:0
return new B.aVK(b0,a9,C.T(u,t),q,N.mC,w+v)}return new B.aVK(C.aX(u),C.et([25],u),C.T(u,t),21,N.mC,1)},
hm_(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.F(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="/")k=new C.y(-s,-t)
if(q==="\\")k=new C.y(k.b,k.a)}return new C.bnx(p,o)},
hhm(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVK:function aVK(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UZ:function UZ(d){this.a=d},
bja:function bja(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fm$=g
_.kY$=h
_.fR$=i
_.fn$=j
_.bq$=k
_.a8$=l
_.c=_.a=null},
e7T:function e7T(d){this.a=d},
e7S:function e7S(d,e){this.a=d
this.b=e},
e7U:function e7U(){},
e7J:function e7J(d,e){this.a=d
this.b=e},
e7K:function e7K(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7L:function e7L(d){this.a=d},
e7M:function e7M(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7P:function e7P(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e7R:function e7R(d,e){this.a=d
this.b=e},
bga:function bga(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgg:function dgg(d,e,f){this.a=d
this.b=e
this.c=f},
dgj:function dgj(d,e,f){this.a=d
this.b=e
this.c=f},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
V0:function V0(d){this.a=d},
aD6:function aD6(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fm$=g
_.kY$=h
_.fR$=i
_.fn$=j
_.bq$=k
_.a8$=l
_.c=_.a=null},
e8b:function e8b(d){this.a=d},
e8a:function e8a(d,e){this.a=d
this.b=e},
e8c:function e8c(){},
e7X:function e7X(){},
e85:function e85(d,e){this.a=d
this.b=e},
e82:function e82(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e83:function e83(d){this.a=d},
e84:function e84(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e86:function e86(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e87:function e87(d){this.a=d},
e80:function e80(d,e){this.a=d
this.b=e},
e88:function e88(d){this.a=d},
e8_:function e8_(d,e){this.a=d
this.b=e},
e89:function e89(d){this.a=d},
bgp:function bgp(d,e){this.b=d
this.a=e},
aL5:function aL5(){},
bwh:function bwh(){},
aL6:function aL6(){},
bwi:function bwi(){},
a0g(d,e,f,g,h,i){return new B.bt6(d,e,f,g,h,i)},
bt6:function bt6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feE:function feE(){},
feF:function feF(){},
feG:function feG(){},
feH:function feH(){},
feI:function feI(){},
feJ:function feJ(){},
feK:function feK(){},
feL:function feL(){},
a7M:function a7M(d){this.a=d},
cex:function cex(d){this.a=d},
cey:function cey(){},
cew:function cew(d,e){this.a=d
this.b=e},
cev:function cev(d){this.a=d},
VS:function VS(d){this.a=d},
aDY:function aDY(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fm$=f
_.kY$=g
_.fR$=h
_.fn$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
eHb:function eHb(d){this.a=d},
eH7:function eH7(d){this.a=d},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e){this.a=d
this.b=e},
eHa:function eHa(d){this.a=d},
but:function but(d,e,f){this.b=d
this.c=e
this.a=f},
UA:function UA(d){this.a=d},
biK:function biK(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fm$=d
_.kY$=e
_.fR$=f
_.fn$=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dTm:function dTm(){},
dTn:function dTn(){},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTl:function dTl(d){this.a=d},
bpi:function bpi(d,e,f){this.b=d
this.c=e
this.a=f},
TN:function TN(d){this.a=d},
bim:function bim(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fm$=d
_.kY$=e
_.fR$=f
_.fn$=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dEb:function dEb(){},
dEc:function dEc(){},
dE6:function dE6(){},
dE9:function dE9(d,e){this.a=d
this.b=e},
dE8:function dE8(d,e){this.a=d
this.b=e},
dEa:function dEa(d){this.a=d},
dE7:function dE7(d){this.a=d},
aHm:function aHm(d,e,f){this.a=d
this.b=e
this.c=f},
Ur:function Ur(d){this.a=d},
biE:function biE(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQE:function dQE(d){this.a=d},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQF:function dQF(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQG:function dQG(d){this.a=d},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQI:function dQI(d){this.a=d},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d){this.a=d},
dQx:function dQx(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQv:function dQv(d){this.a=d},
bkG:function bkG(d,e,f){this.b=d
this.c=e
this.a=f},
Vc:function Vc(d){this.a=d},
aDg:function aDg(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
edy:function edy(d,e){this.a=d
this.b=e},
edz:function edz(d,e,f){this.a=d
this.b=e
this.c=f},
edx:function edx(d,e,f){this.a=d
this.b=e
this.c=f},
edA:function edA(d){this.a=d},
edw:function edw(d){this.a=d},
edE:function edE(d){this.a=d},
edD:function edD(d,e){this.a=d
this.b=e},
edC:function edC(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edB:function edB(d,e){this.a=d
this.b=e},
edG:function edG(d){this.a=d},
Vq:function Vq(d){this.a=d},
aDC:function aDC(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eob:function eob(d){this.a=d},
eoc:function eoc(d){this.a=d},
eo9:function eo9(d,e){this.a=d
this.b=e},
eoa:function eoa(d){this.a=d},
eo8:function eo8(d){this.a=d},
eod:function eod(d){this.a=d},
eoe:function eoe(d){this.a=d},
eof:function eof(d){this.a=d},
eog:function eog(d,e){this.a=d
this.b=e},
VL:function VL(d){this.a=d},
bjS:function bjS(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eCt:function eCt(){},
eCC:function eCC(){},
eCy:function eCy(d){this.a=d},
eCx:function eCx(){},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCA:function eCA(d){this.a=d},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCu:function eCu(d){this.a=d},
Va:function Va(d){this.a=d},
bjl:function bjl(d,e,f,g,h,i,j,k){var _=this
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
_.fm$=f
_.kY$=g
_.fR$=h
_.fn$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
ecd:function ecd(){},
ece:function ece(){},
ec6:function ec6(d){this.a=d},
ec5:function ec5(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec8:function ec8(d){this.a=d},
ec3:function ec3(d){this.a=d},
ec9:function ec9(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
eca:function eca(d){this.a=d},
ec1:function ec1(d,e){this.a=d
this.b=e},
ecb:function ecb(d){this.a=d},
ec0:function ec0(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ec_:function ec_(d,e){this.a=d
this.b=e},
bcm:function bcm(d,e,f){this.c=d
this.d=e
this.a=f},
aKr:function aKr(){},
bw8:function bw8(){},
aKK:function aKK(){},
bwd:function bwd(){},
aLe:function aLe(){},
bwn:function bwn(){},
aLI:function aLI(){},
bwz:function bwz(){},
jG(d,e,f,g,h,i){return new B.b5X(h,d,f,g,i,e,null)},
hlQ(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fN7(g,e,f),d,w,!0,!0,x.H)},
hz(d,e,f,g,h,i,j){return new B.auZ(f,j,i,h,g,d,e,null)},
qM(d,e,f){return B.i7i(d,e,f)},
i7i(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qM=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gb8()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lW(2),$async$qM)
case 7:q=h
w=8
return C.b(q.hq(A.fX),$async$qM)
case 8:p=h
if(p==null){w=1
break}o=J.eT(A.dD.gaM(p))
w=9
return C.b(B.cps(C.a([B.haP(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qM)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.S(D.aNJ)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qM,v)},
lf(d,e,f,g){var w,v=$.ar7
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vR(v,e,f,g)},
vR(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
Bs(d,e,f,g){var w,v,u,t,s,r,q,p=$.ar7
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lf(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bR(p,p.gM(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lf(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.cet(d,s,f,g),u)}},
a7L(d,e){var w="sine",v="noise"
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
zg(d){return B.hCM(d)},
hCM(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zg=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$zg)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aG(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a1(p,o,n):C.T(o,n)
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
return C.i($async$zg,v)},
vO(d,e){return B.hCN(d,e)},
hCN(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vO=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vO)
case 6:s=g
w=7
return C.b(s.au("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vO)
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
return C.i($async$vO,v)},
b5X:function b5X(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crp:function crp(d){this.a=d},
crq:function crq(d,e){this.a=d
this.b=e},
fN7:function fN7(d,e,f){this.a=d
this.b=e
this.c=f},
fN6:function fN6(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crl:function crl(d){this.a=d},
eQ:function eQ(d,e,f){this.c=d
this.d=e
this.a=f},
auZ:function auZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fh:function fh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crk:function crk(d){this.a=d},
EX:function EX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crr:function crr(d){this.a=d},
mz:function mz(){},
crm:function crm(d,e,f){this.a=d
this.b=e
this.c=f},
cro:function cro(d){this.a=d},
crn:function crn(){},
cet:function cet(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cu0(){var w=0,v=C.j(x.cL),u,t
var $async$cu0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qN().beH("assets/data/world110.json"),$async$cu0)
case 3:u=t.hHl(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cu0,v)},
hHl(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gT(l)
j=J.a6(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cP(p.h(r,"n"))
m=C.cP(p.h(r,"a"))
l=C.cP(p.h(r,"ct"))
j=C.cP(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cP(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPE(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaA(o,m,l,j,i,h,g,f,p,q)
e.bwX(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaB(a1)},
fqP(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gu(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaA:function aaA(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaB:function aaB(d){this.a=d},
uW:function uW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OK:function OK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xQ:function xQ(d,e,f){this.a=d
this.b=e
this.c=f},
OJ:function OJ(d){this.a=0
this.b=d
this.c=0},
hJe(d,e,f){return $.hJf.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dc0(d,e,f))},
UH:function UH(d){this.a=d},
aCD:function aCD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fm$=j
_.kY$=k
_.fR$=l
_.fn$=m
_.bq$=n
_.a8$=o
_.c=_.a=null},
dW4:function dW4(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dVx:function dVx(d){this.a=d},
dVv:function dVv(d){this.a=d},
dVw:function dVw(d,e,f){this.a=d
this.b=e
this.c=f},
dVu:function dVu(d){this.a=d},
dVt:function dVt(){},
dVs:function dVs(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVR:function dVR(d,e){this.a=d
this.b=e},
dVF:function dVF(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVE:function dVE(d){this.a=d},
dVH:function dVH(d){this.a=d},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVz:function dVz(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVW:function dVW(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVY:function dVY(d){this.a=d},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dVM:function dVM(d,e){this.a=d
this.b=e},
dW_:function dW_(d){this.a=d},
dVL:function dVL(d,e){this.a=d
this.b=e},
dW0:function dW0(d){this.a=d},
dVK:function dVK(d,e){this.a=d
this.b=e},
dW1:function dW1(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVV:function dVV(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVr:function dVr(){},
dVq:function dVq(d){this.a=d},
dVp:function dVp(d){this.a=d},
beB:function beB(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dc0:function dc0(d,e,f){this.a=d
this.b=e
this.c=f},
dc1:function dc1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKQ:function aKQ(){},
aKR:function aKR(){},
aeG(d,e,f,g,h){return new B.bt1(d,e,f,g,h)},
bt1:function bt1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fex:function fex(){},
fey:function fey(){},
fez:function fez(){},
feA:function feA(){},
feB:function feB(){},
feC:function feC(){},
feD:function feD(){},
VO:function VO(d){this.a=d},
bjW:function bjW(){this.d=$
this.c=this.a=null},
eDm:function eDm(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDo:function eDo(){},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDj:function eDj(d){this.a=d},
hJG(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eL()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eL()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjI(new C.cs(null,x.A),new B.OJ(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hJI(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hJH(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hc0(d,e,f){return $.hKi.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eXJ(d,e,f))},
Vz:function Vz(d){this.a=d},
bjI:function bjI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fm$=j
_.kY$=k
_.fR$=l
_.fn$=m
_.bq$=n
_.a8$=o
_.c=_.a=null},
evp:function evp(d,e){this.a=d
this.b=e},
evA:function evA(d,e){this.a=d
this.b=e},
evB:function evB(d,e){this.a=d
this.b=e},
evx:function evx(d){this.a=d},
evy:function evy(d){this.a=d},
evz:function evz(d){this.a=d},
evC:function evC(d){this.a=d},
evw:function evw(d){this.a=d},
evD:function evD(d,e){this.a=d
this.b=e},
evE:function evE(d){this.a=d},
evv:function evv(d,e){this.a=d
this.b=e},
evF:function evF(d){this.a=d},
evu:function evu(d,e){this.a=d
this.b=e},
evG:function evG(d){this.a=d},
evt:function evt(d){this.a=d},
evH:function evH(d){this.a=d},
evs:function evs(d){this.a=d},
evI:function evI(d){this.a=d},
evr:function evr(d){this.a=d},
evJ:function evJ(d){this.a=d},
evq:function evq(d){this.a=d},
evo:function evo(){},
evn:function evn(){},
evm:function evm(d){this.a=d},
evl:function evl(d){this.a=d},
br4:function br4(d,e){this.b=d
this.a=e},
eXJ:function eXJ(d,e,f){this.a=d
this.b=e
this.c=f},
eXK:function eXK(){},
eXL:function eXL(){},
UI:function UI(d){this.a=d},
aCE:function aCE(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fm$=k
_.kY$=l
_.fR$=m
_.fn$=n
_.bq$=o
_.a8$=p
_.c=_.a=null},
dW8:function dW8(){},
dWB:function dWB(){},
dWn:function dWn(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWd:function dWd(d){this.a=d},
dWp:function dWp(d){this.a=d},
dWm:function dWm(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWl:function dWl(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWv:function dWv(d){this.a=d},
dWw:function dWw(d){this.a=d},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWx:function dWx(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWy:function dWy(d){this.a=d},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWz:function dWz(d){this.a=d},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWA:function dWA(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWq:function dWq(d){this.a=d},
dWc:function dWc(d){this.a=d},
dWr:function dWr(d){this.a=d},
dWb:function dWb(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWa:function dWa(d){this.a=d},
dW7:function dW7(d){this.a=d},
dW6:function dW6(){},
dW9:function dW9(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
b9N:function b9N(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Vr:function Vr(d){this.a=d},
bjF:function bjF(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fm$=e
_.kY$=f
_.fR$=g
_.fn$=h
_.bq$=i
_.a8$=j
_.c=_.a=null},
eoj:function eoj(d,e){this.a=d
this.b=e},
eok:function eok(d,e){this.a=d
this.b=e},
eoi:function eoi(d,e){this.a=d
this.b=e},
eol:function eol(d,e){this.a=d
this.b=e},
eoh:function eoh(d,e){this.a=d
this.b=e},
bqD:function bqD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eVT:function eVT(d){this.a=d},
aKS:function aKS(){},
bwf:function bwf(){},
aLq:function aLq(){},
bwt:function bwt(){},
aLt:function aLt(){},
bwv:function bwv(){},
hJE(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eL()
v.dB(w)
v=v.aj()
u=new C.eL()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bil(new C.cs(null,x.A),new B.OJ(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pd:function Pd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TL:function TL(d){this.a=d},
bil:function bil(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fm$=i
_.kY$=j
_.fR$=k
_.fn$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
dDD:function dDD(){},
dDr:function dDr(){},
dDs:function dDs(d,e){this.a=d
this.b=e},
dDt:function dDt(d,e){this.a=d
this.b=e},
dDq:function dDq(d){this.a=d},
dDp:function dDp(d){this.a=d},
dDv:function dDv(d){this.a=d},
dDo:function dDo(d,e){this.a=d
this.b=e},
dDw:function dDw(d){this.a=d},
dDn:function dDn(d){this.a=d},
dDx:function dDx(d){this.a=d},
dDm:function dDm(d){this.a=d},
dDy:function dDy(d){this.a=d},
dDl:function dDl(d){this.a=d},
dDz:function dDz(d){this.a=d},
dDk:function dDk(d){this.a=d},
dDA:function dDA(d){this.a=d},
dDj:function dDj(d){this.a=d},
dDB:function dDB(d){this.a=d},
dDi:function dDi(d){this.a=d},
dDC:function dDC(d){this.a=d},
dDh:function dDh(d){this.a=d},
dDu:function dDu(d){this.a=d},
dDg:function dDg(d){this.a=d},
b9b:function b9b(d,e){this.b=d
this.a=e},
aek:function aek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UE:function UE(d){this.a=d},
biN:function biN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fm$=p
_.kY$=q
_.fR$=r
_.fn$=s
_.bq$=t
_.a8$=u
_.c=_.a=null},
dUG:function dUG(d){this.a=d},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUy:function dUy(d){this.a=d},
dUu:function dUu(d){this.a=d},
dUz:function dUz(d){this.a=d},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUA:function dUA(d){this.a=d},
dUs:function dUs(d,e){this.a=d
this.b=e},
dUB:function dUB(d){this.a=d},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUC:function dUC(d){this.a=d},
dUq:function dUq(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUp:function dUp(d){this.a=d},
dUE:function dUE(d){this.a=d},
dUo:function dUo(d){this.a=d},
dUF:function dUF(d){this.a=d},
dUn:function dUn(d){this.a=d},
ber:function ber(d,e){this.b=d
this.a=e},
d98:function d98(d){this.a=d},
Vn:function Vn(d){this.a=d},
bjE:function bjE(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fm$=f
_.kY$=g
_.fR$=h
_.fn$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
eny:function eny(d,e){this.a=d
this.b=e},
enz:function enz(d){this.a=d},
enx:function enx(d){this.a=d},
enA:function enA(d){this.a=d},
enw:function enw(d){this.a=d},
enB:function enB(d){this.a=d},
env:function env(d){this.a=d},
enC:function enC(d){this.a=d},
enu:function enu(d){this.a=d},
enD:function enD(d){this.a=d},
ent:function ent(d,e){this.a=d
this.b=e},
enE:function enE(d){this.a=d},
ens:function ens(d,e){this.a=d
this.b=e},
enF:function enF(d){this.a=d},
enr:function enr(d,e){this.a=d
this.b=e},
enG:function enG(d){this.a=d},
enq:function enq(d,e){this.a=d
this.b=e},
bpT:function bpT(d,e){this.b=d
this.a=e},
aKo:function aKo(){},
bw7:function bw7(){},
aKN:function aKN(){},
bwe:function bwe(){},
aLp:function aLp(){},
bws:function bws(){},
haP(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.li(e,f,$,null)
v=w.bH2(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hXf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nU(A.k.aa(p.c,4)),"y",C.nU(A.k.aa(p.d,4)),"v",p.e,"l",C.nU(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nU(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nU(A.k.aa(p.z,3)),"s",C.nU(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a4(f).k("co.E"))
A.d.fk(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i5G(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aG(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cu:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.q8().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tk(a2,d,a0,a1)
a3.ape(a2,d,a0,a1)
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
d=C.kg(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kg(J.q(t,"b"))
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
while(i.C()){q=i.gT(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ajP(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gT(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bny(i,k)}catch(a4){return a5}},
fsB(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fsB=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$fsB)
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
return C.i($async$fsB,v)},
bCW(d){return B.i7e(d)},
i7e(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bCW=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bCW)
case 7:w=6
return C.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bCW)
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
return C.i($async$bCW,v)},
cps(d,e){var w=0,v=C.j(x.g7),u
var $async$cps=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h_m().wX(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cps,v)}},D,T,H,R,Z,A9,Aa,An,A_
J=c[1]
C=c[0]
A=c[2]
A0=c[132]
A1=c[142]
Ab=c[141]
A2=c[133]
A3=c[129]
I=c[121]
P=c[113]
A4=c[117]
Ac=c[135]
A5=c[138]
A6=c[114]
G=c[124]
Ad=c[119]
Ae=c[134]
A7=c[137]
Af=c[67]
X=c[76]
Ag=c[83]
Ah=c[80]
Q=c[87]
N=c[107]
Ai=c[143]
Aj=c[109]
Y=c[120]
O=c[122]
U=c[139]
Ak=c[71]
Al=c[95]
V=c[140]
M=c[136]
A8=c[92]
W=c[108]
K=c[128]
S=c[93]
Am=c[24]
E=c[26]
F=c[94]
L=c[104]
B=a.updateHolder(c[17],B)
D=c[118]
T=c[131]
H=c[41]
R=c[126]
Z=c[125]
A9=c[130]
Aa=c[123]
An=c[127]
A_=c[99]
B.ajj.prototype={}
B.UU.prototype={
R(){return new B.bj8(C.T(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mx(0,null,null))}}
B.bj8.prototype={
gVG(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
N7(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$N7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jD()
p.bO(0,A.c5)
t.m(new B.e4T(t))
t.a.toString
p=t.gVG()
w=3
return C.b(B.byt(B.hLv(q,B.hX6(p),o,t.ay)),$async$N7)
case 3:s=e
r=s==null?null:J.iT(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hYw(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e4U(t,o,r))
$.aW.x1$.push(new B.e4V(t))
case 1:return C.h(u,v)}})
return C.i($async$N7,v)},
XF(d){return this.bXS(d)},
aUC(){return this.XF(null)},
bXS(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XF=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jD()
t.f.saV(0,o)
t.m(new B.e55(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byt(B.hSh(o)),$async$XF)
case 3:r=n.a=m.i5o(f)
p.b=""
if(r!=null&&!B.hX7(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hYx(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajj(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e56(p,t))
t.c25(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XF,v)},
c25(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVG()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e51(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e5_(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e52(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e53(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e54(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.m(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.A(C.a([D.eNm,A.bf,C.E(C.d(m.Q,l,l,l,l,l,l,A.T_,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fbP
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ad.Tt,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eY0,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.vd,C.d(u,l,l,l,l,l,l,D.f_D,l,l,l),l))
w.push(A.cS)
w.push(C.d(k.b,l,l,l,l,l,l,F.zw,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f21,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.hY,A.co,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.C(A.LG,new C.cn(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mI,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.N,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6W,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f7h,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.e51)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahD(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bpF,A.ei,l,l,1/0),A.bc,A.ia),C.E(B.h19(m.gVG(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e59(m),l,A.bu,l),new B.dA("Invent something new",!i,new B.e5a(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dax[p]
i.push(new B.dA(n,!1,new B.e5b(m,n),l,A.bu,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cVC[p]
i.push(new B.dA(r,!1,new B.e5c(m,r),l,A.bu,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kz,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e5d(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dm,!0,A.a4,l,A.am,l,A.aOr,l,l),1)
h=m.at
v=h&&j?D.bDH:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fh(v,j,new B.e5e(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jG(A.bu,A.h9,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FK.prototype={}
B.uH.prototype={}
B.Vl.prototype={
R(){return new B.aDw(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDw.prototype={
gaVM(){var w,v,u,t=this,s=D.GN[t.cx],r=D.Qg[t.cy],q=D.C_[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avi[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.ekS())},
ga1R(){return D.GN[this.cx].d/this.gaVM()},
gaNe(){return 0.1*(D.GN[this.cx].d/0.9)/D.Qg[this.cy].d},
a_(){this.a1()
this.lb()
B.zg("rocket_lander").bz(new B.elb(this),x.P)},
c2e(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lt(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.elc())
return}w=D.rb[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1R()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNe())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gcl()*6*D.ax6[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
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
p=D.C_[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vO("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.Bs("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1R()/(D.rb[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1R()/(D.rb[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.F(A.k.bt(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.eld())},
aeX(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f_8,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.ekU(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.cS,C.bY(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCh(d){var w,v,u,t,s=this,r=null,q=s.ga1R()/(D.rb[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNe()),o=D.ax6[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.To,r,r,r),A.S,s.aeX("ENGINE: "+D.GN[s.cx].b,D.GN,new B.ekJ(s),new B.ekK(s),A.cs),s.aeX("FUEL TANK: "+D.Qg[s.cy].b,D.Qg,new B.ekL(s),new B.ekM(s),A.b1),s.aeX("LANDING GEAR: "+D.C_[s.db].b,D.C_,new B.ekN(s),new B.ekO(s),A.aS),s.aeX("EXTRAS (tap to add)",D.avi,new B.ekP(s),new B.ekQ(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.ftI)
o=(q?A.b1:A.c7).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVM(),2)
u=A.k.aa(s.ga1R()/(D.rb[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C_[s.db].d*100)+".",r,r,r,r,r,r,D.f_L,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.hY,A.bT,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fh(A.ng,"Launch",new B.ekR(s),A.b1,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.ly,new C.o(D.bgj,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aWU(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b3,A.q,1)
return C.o9(A.jy,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.ekG(e),new B.ekH(e),w,w,w,w,new B.ekI(e))},
aWT(d,e,f){return this.aWU(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.el4(s,D.rb[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rb[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.el5(s,w),r,D.rb[w].c,r))}v=C.a([s.aWT(F.al8,new B.el6(s),s.y),A.bf,s.aWU(A.vA,new B.el7(s),s.Q,130),A.bf,s.aWT(A.Nr,new B.el8(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aS:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bHU,A.f,r,r,new C.o(u,r,C.I(A.b3,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.el9(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jG(A.cs,A.h9,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.A(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bg7.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rb[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.M(),a0=j.c,a1=C.aq(D.biY,a0,0.25)
a1.toString
d.saq(new C.a8(A.b0,A.b5,A.x,C.a([F.acH,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aZ(new C.a9(0,0,g,f),d)
w=new C.eL()
w.dB(5)
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
r=new C.aO(e.r,A.ap,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eL()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bF())
e=$.W()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aO(r,d)
o=C.cm(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bA(o,A.ii)
a0=C.M()
a0.r=A.bo.gp(0)
a2.aD(d,a0)
a0=C.bA(o.cF(2),A.rt)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.iZ(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.cs.j(0.6).gp(0)
k.z=Y.Hj
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bF())
k=C.M()
k.r=A.aM.gp(0)
a2.aO(n,k)
i=new C.aO(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bF())
k=C.M()
k.r=A.c.gp(0)
a2.aO(i,k)}k=e.r
m=new C.aO(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cU(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cU(-14,-10,0,-26))
m.E(new C.bF())
i=C.M()
i.saq(D.bU8.av(0,D.eGh))
a2.aO(m,i)
i=C.M()
i.r=A.aS.gp(0)
a2.ae(D.w2,5,i)
i=new C.aO(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.M()
h.r=A.ay.gp(0)
a2.aO(i,h)
f=new C.aO(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.M()
k.r=A.ay.gp(0)
a2.aO(f,k)
g.restore()},
ar(d){return!0}}
B.aLn.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwr.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bus()}}
B.aRi.prototype={}
B.a2x.prototype={}
B.b9e.prototype={}
B.TM.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aBW(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.JU,D.JU,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBW.prototype={
a_(){var w=this
w.a1()
w.lb()
w.as=new B.c_A(w.gcar())
new B.dE4(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.btt()},
cas(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.F(["t","init","data",$.hb3],x.N,x.z))
v.at=!0
v.ax=""
v.axL()
break
case"pick":v.m(new B.dDH(v,d))
break
case"shot":v.agP(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axL(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atg[q.CW]
v=new B.dDI()
u=q.ay
u=C.B(u,C.a4(u).k("co.E"))
A.d.fk(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eT(0,u)}},
agP(d){return this.cr9(d)},
cr9(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agP=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cps(C.a([B.haP(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agP)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.S(D.aNJ)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agP,v)},
axc(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lt(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bt(w)!==A.k.bt(v.ok)){B.a7L("kick",0.4)
v.a4s(170,new B.dE5())}v.ok=w
return},
agE(d){var w,v,u,t,s=this
s.m(new B.dDJ(s,d))
if(d==null){s.fx=D.JU
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dDK(d),v),v.k("J.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.axL()
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.ctz(t,d)
return},
ctz(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7L("kick",0.8)
this.a4s(260,new B.dDL())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4s(w*70,new B.dDM(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vR("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7L("kick",0.3)
break
default:B.vR("organic",2+A.o.F(e.length,6),200,0.4)}},
cy1(d){this.m(new B.dDO(this,d))},
aXb(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.axc(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.B(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bTv(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dDE(u,w,d))
v=x.t
B.Bs("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4s(1100,new B.dDF(u))
return}if(d==null){if(u.cx!=null)u.agE(null)
return}u.agE(d)},
bXb(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bV.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eWA,u,u,u)}else if(d==null||e==null)w=D.f9l
else{w=x.p
w=C.A(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i5,u,u,u),A.cS,C.d(e.b,u,u,u,u,u,u,F.zw,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bKi,u,u,u,new B.dDG(v),u,u,u,u,"Back to the whole body",A.ca)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VG,u,s,t,u,u,A.n),u,u,u,u,I.agN,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dl0.h(0,g)
i.axL()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d3N
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.axc(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mw,h,h,h,new B.dDV(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.DA(h,A.q9,q)}else q=A.ku
q=C.v(C.a([C.E(q,1),new C.C(F.XW,i.bXb(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cX2[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dDW(i,o),o.c,A.bV,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dDX(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hz(A.c7,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dDY(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EX(D.atg[j],i.CW===j,new B.dDZ(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dE_(i),D.ajX,A.aS,h),new B.fh(A.jY,"Reset view",new B.dE0(i),A.c,h),new B.dA(l,m,new B.dE1(i),A.G1,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dE2(i),A.o_,A.c7,h))
p.push(new B.eQ(v,h,h))
return B.jG(A.bV,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aKp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aKq.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bts()}}
B.c_A.prototype={
kw(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hh5
$.hh5=v+1
u="ngmy-body-viewer-"+v
$.yq()
$.q6().pR(u,new B.c_B(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_C(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byq(w.contentWindow)
if(w!=null)J.fOJ(w,e,"*")}}catch(v){}}}
B.xS.prototype={}
B.C2.prototype={}
B.ni.prototype={}
B.b9X.prototype={}
B.TR.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new B.aBZ(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBZ.prototype={
a_(){var w=this
w.a1()
w.lb()
w.abG()
$.aW.x1$.push(new B.dGf(w))},
abG(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abG=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abG)
case 6:q=e.t4("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dFU(s,r))
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
return C.i($async$abG,v)},
ac_(d){return this.c_T(d)},
c_T(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ac_=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.aA(),$async$ac_)
case 6:r=f
q=s.cx
p=C.a4(q).k("jL<co.E,n>")
q=C.B(new C.jL(q,new B.dFX(),p),p.k("J.E"))
r.au("StringList","ngmy_circuit_passed_v1",q)
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
return C.i($async$ac_,v)},
avV(d,e,f,g){var w="c"+this.y++,v=new B.C2(w,e,f,g)
this.d.n(0,w,v)
return v},
mv(d,e,f){return this.avV(0,e,f,0)},
ab1(d,e){var w
if(D.yQ.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tv(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRe(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fR$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e5(m,D.cHp[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tv(p,0)&&n.tv(p,1)
break
case"or":p=q.a
o=n.tv(p,0)||n.tv(p,1)
break
case"xor":p=q.a
o=n.tv(p,0)!==n.tv(p,1)
break
case"nand":p=q.a
o=!(n.tv(p,0)&&n.tv(p,1))
break
case"nor":p=q.a
o=!(n.tv(p,0)||n.tv(p,1))
break
case"not":o=!n.tv(q.a,0)
break
default:o=n.tv(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMg(){return this.aRe(null)},
lt(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMg()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a4(w).k("bc<2>")).gaf(0),v=new C.fi(w,new B.dGg()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fR$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fR$)
o=s+1
E.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
avW(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m_(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
asb(d){var w=this
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dFS(w,d))
return}w.m(new B.dFT(w,d))},
ctR(d){this.m(new B.dFY(this,d,$.bDh()[d]))},
c4l(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDh()[a0]
v=d.d
u=C.a4(v).k("bc<2>")
t=u.k("a2<J.E>")
s=t.k("J.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dFN(),t),s)
A.d.b0(r,new B.dFO())
q=C.B(new C.a2(new C.bc(v,u),new B.dFP(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dFQ(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fZ(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRe(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jF(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dFR(d,o,a0))},
awJ(d){var w,v,u,t,s=this.d,r=C.a4(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ccP(d){var w,v,u,t,s,r=this.d,q=C.a4(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bX4(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yQ.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ab1(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.y(p,o)
s=l}}}return t},
bLd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ab1(p,o)
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
c4n(d){var w,v,u,t=this,s=t.awJ(d)
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
t.m(new B.dFZ())
return}u=t.bLd(d)
if(u!=null)t.m(new B.dG_(t,u))
else t.m(new B.dG0(t))},
auK(d){return this.bZY(d)},
bZY(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auK=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awJ(d)
if(s==null){w=1
break}C.jh()
t.m(new B.dFW(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auK,v)},
byc(d){if(this.x.A(0,A.au))return
this.m(new B.dFM(this,d,A.cI))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDh()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o_:O.r7,A.ad,h,h,h,21),h,h,h,new B.dG9(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cr.j(0.14)
r=C.I(A.cr.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eVL,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f2X,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.ml,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b1:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bH(D.fki,i.gc4k(),C.bl(A.cr,h,h,h,h,h,h,h,h,h,h,A.ca))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,X.LP,D.bqh,h,h,1/0))}u.push(C.E(C.cp(new B.dGa(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yQ.h(0,r).a+": "+D.yQ.h(0,r).e,h,h,h,h,h,h,A.rG,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Aa.agu,A.bT,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yQ.gdK(D.yQ),s=s.gaf(s);s.C();){r=s.gT(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aPy,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fy,A8.LL,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGb(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d7S[l]
s.push(new B.fh(A.Ns,k.b,new B.dGc(i,k),A.cr,h))}s.push(new B.fh(D.xZ,"Clear",new B.dGd(i),A.c7,h))
r=C.a([],g)
for(j=0;q=$.bDh(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.lh
o=i.ay
n=i.cx.t(0,j)?A.b1:A.cd
r.push(new B.dA(q.a,o===j,new B.dGe(i,j),p,n,h))}return B.jG(A.cr,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.baf.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.M()
w.r=D.abf.gp(0)
a7.aZ(new C.a9(0,0,0+a5,0+a6),w)
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
g=a5.ab1(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pv(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cd.j(0.28).gp(0)
l.z=G.mz
s=l.H()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dO:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HQ)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pv(a6+a0,w,a5-a0,r,a5,r))
r=C.M()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aO(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c4m(a7,a5.d)},
c4m(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yQ.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cm(a0.c,64,64)
s=C.bA(t,A.l_)
r=w.cy===v
q=s.eN(A.cx)
$.W()
p=C.M()
p.r=A.w.j(0.55).gp(0)
p.z=A.lp
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.M()
p.saq(new C.bS(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bT(a0.c,52)))
d.ae(q,52,p)}q=s.eN(A.cJ)
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
q.saq(new C.a8(A.b0,A.b5,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.Nx:D.bEc}else l=e.b
k=B.fU9(C.jF(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aC(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fU9(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fU9(f,9,u?A.dO:A.c1,g,g,A.u)
i.a5(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXL(d,w.ab1(a0,h),o)
this.aXL(d,a0.c.ad(0,D.HQ),o)},
aXL(d,e,f){var w
$.W()
w=C.M()
w.r=D.abf.gp(0)
d.ae(e,8.5,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.M()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
ar(d){return!0}}
B.aKv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwa.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bty()}}
B.MY.prototype={
R(){return new B.aCf(C.mx(0,null,null))}}
B.K1.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.Ag.prototype={}
B.aCf.prototype={
c4r(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dM7(w,e))},
bYR(){var w=this
w.e.q()
w.e=C.mx(w.f,null,null)
w.m(new B.dM6(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oh(t,C.c8(v,A.bY,t?new B.bqd(w.e,w.gc4q(w),new B.dM8(d),v):new B.aGv(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dM9(w,u),x.C)}}
B.brM.prototype={}
B.bqd.prototype={
aXM(d,e){var w=null
return new C.C(I.Yl,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eWk,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,S.nh,v,v,v,w.e,v,v,v,v,v,v),A.rA,D.bw4],u),A.m,v,A.e,A.j,0,v,v),s=w.aXM("STUDIOS","Play, make things, and keep what you make")
$.bDi()
return C.bn(!0,C.v(C.a([new C.C(D.bv9,t,v),C.E(C.vp(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m4(s,v),new C.nM(A.hw,C.Ow(new C.ok(new B.eVq(d),22,!0,!0,!0,0,C.rO(),v),D.aNy),v),new C.m4(w.aXM("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nM(D.bqn,C.Ow(new C.ok(new B.eVr(w),6,!0,!0,!0,0,C.rO(),v),D.aNy),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aep.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n0,p,0.3)
m.toString
w=x.O
m=C.a([m,D.ae_],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eE(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cS,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fk,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adg.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n0,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.ae_],w)
v=C.I(A.d.gL(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGd,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BF,A.d.gL(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fk,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PD.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RA,26),new C.ac(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.dcN,j),A.n),A.bd),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brb(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eXT,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.SL)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fJ,C.A(C.a([s,A.eB,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.ek(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.brb.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.iZ(0,0.35)
t=C.cm(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.M()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aZ(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
B.bqH.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bet,D.adc],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k2,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.X(A.jh,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b8W(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.bd),w)}}
B.b8W.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.e9(A.J)
$.W()
t=C.M()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
ar(d){return!1}}
B.aGv.prototype={
R(){return new B.aGw(new C.cs(null,x.A),null,null)}}
B.aGw.prototype={
gtQ(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bnM,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gYW(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fc(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gavX(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc4o(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaUl(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaV_(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb5n(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtQ()
w.da()
w.dR$.J(0,this.gctA())},
ctB(){var w,v,u,t,s,r,q,p=this,o=p.gtQ().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavX().a){case 0:w=D.nk
break
case 1:w=D.u3
break
case 2:w=D.a1H
break
case 3:w=D.nk
break
case 4:w=D.d0Q
break
case 5:w=D.u3
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8Z)r=0.09
else r=s===D.a9_?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bWF[v]
B.lf("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bs("bell",D.c4o,1400,0.35)}}p.ax=o},
q(){this.gtQ().q()
this.gYW().q()
this.bvq()},
afn(){var w=this
w.gtQ().cSC(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eV6(w))},
ceR(){this.gtQ().bY(0)
this.m(new B.eV5(this))},
acY(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaV_(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5n(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.B(u.gaUl(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bU(F.n0,null,new B.eV4(u,l,m,o),t,!0,!0,!0,A.lr,!1,!1,x.H),$async$acY)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acY,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavX(),f=i.a.c,e=f.b,d=i.gc4o(),a0=new B.Ag(g,e,f.c,d,i.gaUl(),i.gaV_(),i.gb5n())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o_:O.r7,A.ad,h,h,h,21),h,h,h,new B.eVe(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bNJ,h,h,h,i.gc4p(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mw,h,h,h,new B.eVf(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYW(),new B.eVg(i,a0),h),C.cp(new B.eVh(i,a0))],g)
u=i.as
t=u?i.gceQ():i.gch8()
u=u?D.bDt:A.tS
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ca),C.E(C.c6(i.gtQ(),new B.eVi(i,a1,a0),h),1),C.aH(h,h,h,h,D.bK8,h,h,h,new B.eVj(i),h,h,h,h,"Replay",A.ca)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hz(r,u+"x","Speed",2.5,0.4,new B.eVk(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.daa[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eVl(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bX_[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b3
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agf,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eVm(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jG(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b_,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxo(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nk[r]
p=A.k.D((1-A.ev.aw(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nk[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nk[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dm()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jX(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nk[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nk[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nk[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kC(q,new C.iF(n,f,A.b0,!0,f,new B.PD(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nk[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.nk[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mf(new B.bpQ(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bNH(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.u3[r]
p=A.pC.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.u3[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.u3[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dm()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jH(n,n,n,1)
m.fA(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PD(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dm()
k.fA(3.141592653589793)
k=new C.iF(k,f,A.A,!0,f,new B.bqH(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kC(q,new C.iF(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cyx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1H[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btg(d.d,l,D.auW,m,B.bqc(e,0.4,0.62),f,B.bqc(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fUF(g,w)
q=D.auW[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kC(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fUF(g,w)
r=D.a1H[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kC(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a7r,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bDv(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqc(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bph(A.d.gL(a1),B.bqc(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.e0D),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aw(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dm()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fA(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jH(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new C.y(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kC(k*(0.45+0.55*o),C.dU(new C.iF(l,f,A.A,!0,f,new B.PD(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eUY())
A.d.v(a0,new C.K(w,new B.eUZ(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCI(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.u3[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mM.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.u3[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.awS[q]
k=C.dm()
k.mI(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jH(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.u3[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kC(m,C.dU(new C.iF(k,e,A.A,!0,e,new B.PD(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.u3[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dU(new C.mf(new B.b9B(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.awS[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAj(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e0H],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nk[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.awX[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nk[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nk[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dm()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mI(l*h+D.d4H[r]*o)
f.fA(l*0.9)
h=0.55+0.45*o
f.jH(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kC(g,C.dU(new C.iF(f,a3,A.A,!0,a3,new B.PD(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nk[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.awX[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dU(new C.mf(new B.bpj(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bpQ.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bA(u,A.hb)
$.W()
t=C.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mz
d.aD(q,t)
t=C.bA(u,A.hb)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
B.bph.prototype={
a5(d,e){var w,v,u=this.c,t=C.cm(e.e9(A.J),e.b*u,e.a*u)
$.W()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.Hj
d.hN(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hN(t,u)
u=t.cF(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hN(u,v)},
ar(d){return!0}}
B.b9B.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.e9(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.M()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.eL()
t.dB(this.d*17+3)
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
ar(d){return!0}}
B.bpj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.e9(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cm(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c0(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
B.btg.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.M()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b0,A.b5,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aZ(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fUF(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lp
a4=a3.H()
t.drawOval(C.c0(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b0,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c0(a5),a4)
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
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new C.cF(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new C.cF(a2)).a,a4)
a4.delete()
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c0(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cF(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cF(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bt(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bA(new C.a9(b7,a7,b7+r,b5),A.hb)
$.W()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c0(a5),$.q7()[1],!0)
$.W()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b0,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c0(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
B.aMe.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
B.a_L.prototype={
a4(){return"_Role."+this.b}}
B.pW.prototype={}
B.qE.prototype={}
B.C6.prototype={}
B.YJ.prototype={}
B.aef.prototype={}
B.a_Y.prototype={
gY(d){return this.d}}
B.Cg.prototype={}
B.ab7.prototype={}
B.abo.prototype={}
B.adk.prototype={}
B.bg4.prototype={
a2_(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6n(d,e,f){return this.a2_(d,e,f,0,0.55)},
aAv(d,e,f,g){return this.a2_(d,e,f,0,g)},
b6o(d,e,f,g){return this.a2_(d,e,f,g,0.55)},
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
aj1(d,e,f,g){var w="n"+this.ay++,v=new B.qE(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
AP(d,e,f){return this.aj1(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.dfY(e))
A.d.bn(w.c,new B.dfZ(e))
w.aW()},
baa(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.my.h(0,v.b).c===D.wy)return!1
w=this.b
if(A.d.b5(w,new B.dfV(d,e)))return!1
w.push(new B.C6(d,e))
this.aW()
return!0},
bXP(d){var w
if(d.b==="beat")return D.c4x[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aDZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.axb[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cg(u,t,j.ax,90))
w.push(new B.Cg(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_Y(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6n(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_Y(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.Cg(u,t,j.ax,120))
j.aAv(120,200,"noise",0.5)
j.b6n(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cg(u,t,j.ax,230))
w.push(new B.Cg(u,t,j.ax+160,160))
w.push(new B.Cg(u,t,j.ax+320,100))
j.b6o(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.ab7(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6o(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abo(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a2_(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2_(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adk(u,D.awF[v],t,j.ax))
j.aAv(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAv(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c0E[A.o.F(w,3)]
for(k=1;k<=3;++k)j.coP(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.fi(w,new B.dfW(d));v.C();)j.az1(w.gT(0),j.ax+D.ccV[A.o.F(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.ctH[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.fi(w,new B.dfX(d));v.C();)j.az1(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.z0(w,0,v-700)},
coP(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YJ(e,"~"+d))},
az1(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aef(d.a,v,e,w))
u.push(new B.YJ(w,v))},
aHj(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aDZ(r)
u.n(0,r,o.ax+o.bXP(s))}}w=o.c
v=C.U(w).k("a2<1>")
q=C.B(new C.a2(w,new B.dg_(o),v),v.k("J.E"))
if(q.length!==0){A.d.bn(w,new B.dg0(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b1(u,1)
for(u=A.d.gaf(v),r=new C.fi(u,new B.dg1(p));r.C();)o.az1(u.gT(0),o.ax)}else o.aDZ(u)}}A.d.bn(o.d,new B.dg2(o))
A.d.bn(o.e,new B.dg3(o))
A.d.bn(o.f,new B.dg4(o))
A.d.bn(o.w,new B.dg5(o))
A.d.bn(o.x,new B.dg6(o))
A.d.bn(o.r,new B.dg7(o))
o.aW()},
uW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
cKi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.my.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qE(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.C6(q,p))}k.aW()
return!0}catch(l){return!1}},
cNl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qE(n,r,new C.u(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.baa(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fw.prototype={}
B.Vk.prototype={
R(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDv(new B.bg4(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDv.prototype={
abz(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abz=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$abz)
case 6:q=n.kg(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ekc(s))
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
return C.i($async$abz,v)},
a8z(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8z=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.ek1(s))
u=3
w=6
return C.b(C.aA(),$async$a8z)
case 6:e.au("Bool","ngmy_core_lab_coach_v1",!0)
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
return C.i($async$a8z,v)},
bJt(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a4(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.ek3())+"|"+A.d.cI(o,0,new B.ek4())
if(v===p.ch)return p.CW
u=new B.ek7()
t=x.s
s=C.a([],t)
r=new B.ek8(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.fi(n,new B.ek5());w.C();){q=n.gT(0)
if(!A.d.b5(o,new B.ek6(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abz()
v.d.db=v.ay
w=v.qu(new B.ekC(v))
w.iR(0)
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
w.buq()},
ab5(d){return this.bXh(d)},
bXh(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ab5=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$ab5)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cKi(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVr(A.d.gL(D.aw8))
if(s.c!=null)s.m(new B.ekb())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ab5,v)},
aVr(d){this.d.cNl(0,d.c,d.d)
this.DW()},
DW(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lI,new B.ejY(this))},
avY(d){var w,v,u,t,s=this.d.a,r=C.a4(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ccQ(d){var w,v,u,t,s,r=this.d.a,q=C.a4(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bX5(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.my.h(0,r.b).c===D.wy)continue
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
c4u(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hh6(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cwj(d){var w,v,u,t,s,r,q=this,p=q.avY(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aDZ(p)
return}if(q.r)return
t=D.my.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qq)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aW()
q.DW()
return}if(q.r)return
r=q.c4u(d)
if(r!=null){w=q.d
A.d.cB(w.b,r)
w.aW()
q.DW()}},
ce8(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ccQ(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avY(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
ce9(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_s(){var w,v,u=this
if(u.z!=null){w=u.bX5(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.baa(v,w)}else v=!1
if(v){C.jO()
u.DW()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.DW()
u.x=null}},
abM(d){return this.bZZ(d)},
bZZ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abM=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avY(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jh()
p=t.c
p.toString
w=3
return C.b(C.bU(F.n0,null,new B.eke(q),p,!0,!0,!1,A.lr,!1,!1,x.y),$async$abM)
case 3:if(f===!0){r.W(0,s)
t.DW()}case 1:return C.h(u,v)}})
return C.i($async$abM,v)},
c4s(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AP(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.DW()},
afv(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afv=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bU(F.n0,null,new B.ekg(),s,!0,!0,!0,A.lr,!1,!1,x.es),$async$afv)
case 2:t=e
if(t!=null)u.aVr(t)
return C.h(null,v)}})
return C.i($async$afv,v)},
acZ(d){var w=0,v=C.j(x.H),u=this,t
var $async$acZ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.ek0(),t,null,!0,!0,x.y),$async$acZ)
case 2:if(f===!0){u.d.a9(0)
u.DW()}return C.h(null,v)}})
return C.i($async$acZ,v)},
B(d){var w=this,v=null,u=C.a([C.ahD(w.r?new C.bI(A.a3,v,v,new C.C(A.Fl,C.hd(D.bI9,D.fdj,new B.ekA(w),v),v),v):w.c4v(),A.bc,A.iv),C.E(C.cp(new B.ekB(w)),1)],x.p)
if(!w.r)u.push(w.crc())
return C.c8(v,A.bY,C.bn(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bFb(){var w=null,v=new B.ek2(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bt.j(0.5),A.q,1)
return C.bZ(0,C.ek(C.av(C.p(w,C.cd(C.v(C.a([D.foc,A.at,D.fvy,A.aA,v.$4(A.oI,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.G6,A.cr,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lg,A.bV,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ak9,A.cd,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fuT,new C.bI(A.a7,w,w,C.bK(!1,D.flr,w,w,!0,w,w,this.gbF4(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.V2,new C.o(F.n0,w,s,t,w,w,A.n),w,w,w,A.fz,Aa.ahx,w,w,w),w,w,w),u,!0),0,0,0)},
c4v(){var w=this,v=null,u=C.aH(v,v,v,v,S.nh,v,v,v,new B.ekm(w),v,v,v,v,v,v),t=w.a81(A.Ng,"How it works",new B.ekn(w),!0),s=w.ay?A.o_:O.r7
return new C.C(D.bun,C.A(C.a([u,D.bvS,t,w.a81(s,"Sound",new B.eko(w),!0),w.a81(A.dW,"Ideas",w.gchR(),!0),w.a81(D.xZ,"Clear",w.gc4t(w),!0),w.aMx(A.iV,"Show",new B.ekp(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMx(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Af.vn,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hp(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a81(d,e,f,g){return this.aMx(d,e,f,g,!1)},
crc(){var w=null,v=new B.eki(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wy),v.$2("CHANGE",D.Dz),v.$2("REACT",D.qq)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.At,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bpH,w,w,w)},
crd(d){var w,v,u,t,s=null,r=D.my.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.C(A.fy,C.aE(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cS,C.d(r.a,s,1,A.a2,s,s,s,D.aPy,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ekh(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bg5.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.by(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=C.M()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=C.M()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aZ(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
d.push(new C.pv(h+a1,i,f-a1,g,f,g))
a2=D.my.h(0,k.b).d
a3=D.my.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rp(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hh6(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mz
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HQ)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pv(t+a1,o,w-a1,i,w,i))
i=C.M()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aO(a0,i)
i=C.M()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.W()
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
h=C.lg(o,i,A.dU.aw(0,v))
h.toString
i=C.lg(o,i,A.dU.aw(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rp(i,h)
o.saq(new C.a8(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
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
$.W()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jk
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bS(P.pe,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bT(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bg6(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cdH(b8,b5.d,b6)
b7.restore()},
cdH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.my.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cm(e.c,64,64)
t=C.bA(u,A.jH)
s=t.eN(A.cx)
$.W()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.lp
d.aD(s,r)
if(v>0){s=t.cF(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yS
d.aD(s,r)}s=t.eN(A.cJ)
r=C.M()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.M()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b0,A.b5,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bg6(C.jF(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aC(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bg6(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.awF[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qq){s=e.c.ad(0,new C.u(0,62))
r=C.M()
r.r=D.axb[A.o.F(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bg6(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bg6(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wy)k.b0h(d,e.c.aC(0,D.HQ),q)
k.b0h(d,e.c.ad(0,D.HQ),q)},
b0h(d,e,f){var w
$.W()
w=C.M()
w.r=A.bY.gp(0)
d.ae(e,9,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.M()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
ar(d){return!0}}
B.aLl.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bkF.prototype={}
B.Pu.prototype={
gY(d){return this.d}}
B.VA.prototype={
R(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjJ(new C.cs(null,x.A),w,v,A.cI,A.bx,D.Ez,null,null)}}
B.bjJ.prototype={
aZ0(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bt((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avA[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lf("synth",u,420,0.3)
break
case"rainbow":B.lf("bell",u,700,0.35)
break
case"stars":B.lf("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c7u(d){return this.aZ0(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qu(new B.ew9(v))
w.iR(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.buz()},
gb_M(){var w=this.Q
return w<0?new H.mM(1,A.k.F(this.y*0.18,360),0.85,1).iy():D.Qi[w]},
aQU(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_M(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cd,A.ay,v.aj())
m.toString
j.push(new B.Pu(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.Pu(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.Pu(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXO(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_M()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkF(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQU(e)
r.aZ0(e,!0)
r.m(new B.evL())},
aXN(){this.ax=null
this.m(new B.evK())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mw,n,n,n,new B.evU(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.br6(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b3V)
k=C.aE(A.c4,new C.an(A.W,n,A.b_,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.evV(o),new B.evW(o),new B.ew_(o),n,n,n,n,n,n,n,n,n,new B.ew0(o),new B.ew1(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cRz[w]
j.push(new B.dA(v.b,o.z===v.a,new B.ew2(o,v),v.c,A.bV,n))}u=C.a([new B.EX(A.c,o.Q<0,new B.ew3(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EX(D.Qi[t],o.Q===t,new B.ew4(o,t),!1,n))
s=o.as
s=B.hz(A.bV,A.o.u(A.k.V(s)),"Size",36,4,new B.ew5(o),s)
r=o.ch
q=r?A.o_:O.r7
q=C.a([new B.dA("Sound",r,new B.ew6(o),q,A.bV,n),new B.fh(A.r6,"Undo",new B.evX(o),A.c,n),new B.fh(D.xZ,"Clear",new B.evY(o),A.c7,n)],m)
for(w=0;w<4;++w){p=D.d6e[w]
q.push(new B.EX(p,o.at.A(0,p),new B.evZ(o,p),!1,n))}return B.jG(A.bV,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.br6.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.M()
v=a4.e
w.r=v.gp(v)
a6.aZ(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.U(q),m=p.k("ol<1>"),l=new C.ol(q,1,a5,m),l.CL(q,1,a5,p.c),l=new C.bR(l,l.gM(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fA
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hu(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fA
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fA
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mM(1,A.o.F(i*5,360),0.85,1).iy()
o=q[i-1]
m=q[i]
$.W()
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
a1=k?new H.mM(1,A.o.F(a3*23,360),0.7,1).iy():l
a4.c4w(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.QM
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c4w(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ap,null,null,o)
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
$.W()
p=C.M()
p.r=h.j(0.4).gp(0)
p.z=A.jk
d.aO(n,p)
p=C.M()
p.r=h.gp(0)
d.aO(n,p)},
ar(d){return!0}}
B.VM.prototype={
R(){return new B.aDL(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aDL.prototype={
gIy(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tu,null,1,null,v)
w.cH(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIy()
w.da()
w.dR$.J(0,this.gbWe())},
bWf(){var w,v,u,t,s,r,q,p=this,o=p.gIy().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lZ:new C.m5(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lf(s,D.aux[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIy().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.buF()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m5(h)
w=C.B(h,C.a4(h).k("J.E"))}v=D.Qi[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mw,j,j,j,new B.eCJ(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.awG[k.y]
s=C.bw(t,C.c_(C.av(C.c6(k.gIy(),new B.eCK(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Dd,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eCL(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ho,!0,A.a4,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.ctv[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eCM(k,q),j,A.cd,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EX(D.Qi[o],k.w===o,new B.eCN(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o_:O.r7
l=C.a([new B.dA(m,n,new B.eCO(k),l,A.cd,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EX(D.awG[o][0],k.y===o,new B.eCP(k,o),!1,j))
n.push(A.bp)
n.push(new B.fh(A.ms,"Replay",new B.eCQ(k),A.c,j))
m=k.x
return B.jG(A.cd,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bC,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.N,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hz(A.cd,A.o.u(A.k.V(m)),"Size",96,28,new B.eCR(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZ1(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cQ(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bt(g*1.6*f)?1:0
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
p.push(new C.cQ(h,A.J,30*v))
p.push(new C.cQ(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bt(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bV:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mM.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mM(1,A.k.F(g*360+e*40,360),0.75,1).iy()
A.d.a9(p)
p.push(new C.cQ(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dU(C.eb(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLu.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aLA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.a_f.prototype={}
B.Vh.prototype={
R(){var w=C.a([],x.aS)
return new B.aDn(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDn.prototype={
gad_(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b11(){return new H.mM(1,this.f.aj()*360,0.6,1).iy()},
aqu(d,e,f,g){var w=this,v=w.gad_().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_f(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b11(),C.a([],x.g)))},
bEw(d,e,f){return this.aqu(d,e,f,!1)},
bEv(d,e){return this.aqu(d,e,1,!1)},
ctv(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bEv(40+w*u/5,v.aj()*3.141592653589793*2)},
bFq(){var w=this.r
this.bEw(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.lb()},
lt(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fR$<300)return
u=a2.gad_()
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
if(o.length>260)A.d.cB(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lR(v.a-s)!==J.lR(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fR$-n.r>250){n.r=a2.fR$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lf("bell",D.aux[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.egQ(u),C.U(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.egR(a2,u))},
chK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gad_()
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
gaV4(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mw,r,r,r,new B.egE(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.egF(s)),n=s.w
n=B.hz(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.egG(s),n)
w=s.x
w=B.hz(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.egI(s),w)
v=s.Q
v=B.hz(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.egJ(s),v)
u=s.ax
t=u?A.o_:O.r7
return B.jG(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.egK(s),t,A.cs,r),new B.dA("Trails",s.z,new B.egL(s),A.Nw,A.cs,r),new B.dA("Planets pull each other",s.y,new B.egM(s),A.ym,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fh(A.mr,"Solar system",new B.egN(s),A.cs,r),new B.fh(A.ng,"Comet",new B.egO(s),A.c,r),new B.fh(A.mp,"Cluster",new B.egP(s),A.c,r),new B.fh(D.xZ,"Clear",new B.egH(s),A.c7,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bks.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.M()
w.r=D.Wk.gp(0)
d.aZ(new C.a9(0,0,0+g,0+f),w)
v=new C.eL()
v.dB(5)
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
t.saq(new C.bS(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).av(0,C.bT(g,f)))
d.ae(g,f,t)
t=C.M()
t.saq(D.eck.av(0,C.bT(g,o)))
d.ae(g,o,t)
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
q.z=G.mz
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bS(P.pe,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bT(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.ja.gp(0)
d.bA(g,f,t)
t=C.M()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
B.abe.prototype={}
B.VH.prototype={
R(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjO(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjO.prototype={
a_(){this.a1()
this.lb()},
c4x(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abe(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lt(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c4x()
w=a2.f
A.d.bn(w,new B.eCa(a2))
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
A.d.bn(w,new B.eCb(a2))
if(w.length<a1&&a2.ch)B.lf("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fR$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fR$
B.lf("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mw,l,l,l,new B.eC_(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eC0(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cTc[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eC1(m,v),v.c,A.b1,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cDl[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eC2(m,t),l,A.b1,l))}s=m.ch
r=s?A.o_:O.r7
r=C.a([new B.dA("Sound",s,new B.eC3(m),r,A.b1,l)],k)
s=m.x
s=B.hz(A.b1,A.o.u(A.k.V(s)),"How many",150,15,new B.eC4(m),s)
q=B.hz(A.b1,l,"Together",2.5,0,new B.eC5(m),m.y)
p=B.hz(A.b1,l,"Apart",2.5,0,new B.eC6(m),m.z)
o=B.hz(A.b1,l,"Same way",2.5,0,new B.eC7(m),m.Q)
n=m.as
return B.jG(A.b1,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hz(A.b1,A.o.u(A.k.V(n)),"Speed",280,50,new B.eC8(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.brY.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.ad1,D.bjo],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,R.L5],v):C.a([D.bgm,D.b7M],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.M()
s.saq(new C.a8(A.b0,A.b5,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aZ(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cd.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cd.j(0.25).gp(0)
n.z=G.mz
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mM(1,j,0.7,1).iy()
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
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
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
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cz,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eGd))
o=j.H()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c7
else a1=v==="scare"?A.cd:A.b1
v=u?12:22
u=C.M()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
ar(d){return!0}}
B.abH.prototype={}
B.TP.prototype={
R(){var w=C.a([],x.bi)
return new B.aBY(w,A.cI,A.au,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBY.prototype={
gHU(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gac2(){return 54-8*(this.r/100)},
a_(){this.a1()
this.lb()
B.zg("chain_burst").bz(new B.dFo(this),x.P)},
aXQ(){return B.vO("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
az5(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abH(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mM(1,u.aj()*360,0.6,1).iy()))}},
YX(d){var w,v=this
if(d==null)return 0
w=(v.fR$-d)/1000
if(w<0.4)return v.gac2()*A.dU.aw(0,w/0.4)
if(w<1.1)return v.gac2()
if(w<1.5)return v.gac2()*(1-(w-1.1)/0.4)
return 0},
lt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.az5()
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
if(v!=null)n.push(new C.y(v,j.YX(j.ax)))
for(v=A.d.gaf(w),s=new C.fi(v,new B.dFp());s.C();){r=v.gT(0)
n.push(new C.y(r.a,j.YX(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fR$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eU()
break}}}if(!(j.at!=null&&j.YX(j.ax)>0||A.d.b5(w,new B.dFq(j)))&&j.fR$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHU()){if(j.as>=j.gHU()*1.5)k=3
else k=j.as>=j.gHU()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bs("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXQ()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXP(d){this.m(new B.dFe(this,d))
this.aXQ()},
ad0(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ad0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dFh(u),s,null,!0,!0,x.S),$async$ad0)
case 2:t=e
if(t!=null)u.aXP(t)
return C.h(null,v)}})
return C.i($async$ad0,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHU(),t=w.x.h(0,""+w.r)
return B.jG(A.bV,A.h9,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dFl(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fh(A.r2,"Levels",w.gc4y(),A.bV,v),new B.fh(A.jY,"New board",new B.dFm(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
au_(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bWI(d,e){return this.au_(d,e,A.c)}}
B.b9W.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.M()
w.r=D.Ez.gp(0)
d.aZ(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKy(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mz
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
B.aKt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bw9.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btw()}}
B.aLi.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwq.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bun()}}
B.aLx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buC()}}
B.Fs.prototype={
gcMA(){return this.a.aC(0,this.b).gcl()>4}}
B.acw.prototype={}
B.Vb.prototype={
R(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjn(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjn.prototype={
aOx(d){return new H.mM(1,A.o.F(d*29,360),0.6,1).iy()},
ZH(d){var w,v=D.Cb.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bt(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.e5(w,u)},
aR9(d){A.d.bn(this.e,new B.ecj(this,d))},
cpG(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcl()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcl()},
axB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.ZH(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fs(p,r,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iy()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZH(h)
f.push(new B.Fs(h,h,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iy()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZH(h)
f.push(new B.Fs(h,h,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iy()))}}},
a_(){this.a1()
this.lb()},
c4A(d,e){var w,v=this.fR$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lf(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lt(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acw(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mM(1,v.aj()*360,0.5,1).iy()))}if(u>3)a2.as=0
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
if(a1<0){a2.c4A(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.ecI(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o_:O.r7,A.ad,p,p,p,21),p,p,p,new B.ecx(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mw,p,p,p,new B.ecy(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.ecz(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cWu[w]
l.push(new B.dA(v.b,q.x===v.a,new B.ecA(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cb.geb(D.Cb));t.C();){s=t.gT(t)
u.push(new B.dA(s,q.y===s,new B.ecB(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.axy[w]
t.push(new B.dA(r.b,q.z===r.a,new B.ecC(q,r),p,A.b8,p))}s=q.Q
return B.jG(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hz(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.ecD(q),s),new B.eQ(C.a([new B.fh(D.bE1,"Stairs",new B.ecE(q),A.b8,p),new B.fh(An.Nf,"Pinball",new B.ecF(q),A.c,p),new B.fh(A.mp,"Random",new B.ecG(q),A.c,p),new B.fh(D.xZ,"Clear",new B.ecH(q),A.c7,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh_.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.M()
w.saq(D.bUK.av(0,new C.a9(0,0,a0,a1)))
a2.aZ(new C.a9(0,0,a0,a1),w)
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
j.saq(new C.bS(P.pe,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bT(q,9)))
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
q.z=A.rh
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bS(P.pe,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bT(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
B.ad1.prototype={}
B.Vg.prototype={
R(){var w=C.a([],x.gB)
return new B.aDm(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDm.prototype={
gaXR(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axO(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
az0(d){var w=D.Cb.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.e5(v,u)},
a_(){this.a1()
this.lb()},
aPU(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.ad1(w,A.k.F(t/v+u,1)))}},
lt(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fR$
if(p.Q){r=p.z
s=p.az0(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lf(r,s+12,q,0.55)}}}},
c4B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaXR()),e=f.gcl()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axO(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.axO(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.egd(h,n).$0()
h.c.e8()
return}}h.m(new B.ege(g,h,t))
if(h.Q)B.lf(h.z,h.az0(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o_:O.r7,A.ad,q,q,q,21),q,q,q,new B.egl(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mw,q,q,q,new B.egm(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.egn(r)),m=r.x
m=B.hz(A.bu,""+A.k.V(m),"Tempo",180,40,new B.ego(r),m)
w=C.a([],p)
for(v=J.aV(D.Cb.geb(D.Cb));v.C();){u=v.gT(v)
w.push(new B.dA(u,r.y===u,new B.egp(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.axy[t]
v.push(new B.dA(s.b,r.z===s.a,new B.egq(r,s),q,A.bu,q))}return B.jG(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fh(A.dW,"Demo",new B.egr(r),A.bu,q),new B.fh(A.mp,"Random",new B.egs(r),A.c,q),new B.fh(D.xZ,"Clear",new B.egt(r),A.c7,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bkt.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.M()
w.r=D.Wk.gp(0)
a5.aZ(new C.a9(0,0,0+a6.a,0+a6.b),w)
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
r.saq(new C.a8(A.b5,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mM(1,A.k.F(s.$1(l)*23,360),0.55,1).iy()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dcH[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kr(new C.ep(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.cg,new C.jq(1),a4,a4,a4,a4,A.ce,a4)
i.eI()
o=i.b.c
m=J.fOq(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.M()
w.saq(D.ebX.av(0,C.bT(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mM(1,A.k.F(s.$1(a0)*23,360),0.55,1).iy()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fOq(v.$1(a0))
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
d.saq(new C.bS(P.pe,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bT(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
B.aLg.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwo.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bul()}}
B.aLh.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwp.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bum()}}
B.t7.prototype={}
B.b8P.prototype={}
B.Ve.prototype={
R(){var w=x.S
return new B.aDk(C.a([],x.aq),C.T(w,w),C.aX(w),D.eM_)}}
B.aDk.prototype={
a_(){this.a1()
B.zg("molecule_maker").bz(new B.efI(this),x.P)},
aiA(d){var w={}
w.a=0
this.f.bI(0,new B.efu(w,d))
return w.a},
gaXX(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hYW(t,this.f,D.a2b[this.d])},
c4S(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eL()
w.dB(t*7+3)
t=v.y
v.m(new B.efo(v,e,t.a,w,t.b))
B.vR("pop",u.length,90,0.35)},
aw1(d){return this.m(new B.efp(this))},
aXY(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c4Y(d){this.m(new B.eft(this,this.aXY(d)))},
cma(){var w=this.r
if(w==null)return
this.m(new B.efs(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2b[k.d],h=k.gaXX()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vW.h(0,w[u].a).a-k.aiA(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.efC(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b1:A.hv
r=x.p
s=C.v(C.a([new C.C(A.fI,B.fa0(w,s,h&&k.d<12?new B.fh(A.iU,"Next",new B.efD(k),A.b1,j):j),j),C.E(C.cp(new B.efE(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2b[u].b,k.d===u,new B.efF(k,u),j,A.hv,j))}q=C.a([],r)
for(p=D.vW.gdK(D.vW),p=p.gaf(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.efG(k,o),j,l,j))}return B.jG(A.hv,A.h9,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcm9(),A.e5,A.c7,j),new B.dA("Clear all",!1,k.gc4T(k),A.jY,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhH.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hv.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bI(0,new B.do3(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vW.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bT(j,26)
if(q===t){$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jk
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.saq(new C.bS(A.JC,0.5,A.x,a3,0,C.a([f,g,e],r),I.avI,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aB:A.c
d=new C.kr(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.cg,new C.jq(1),a3,a3,a3,a3,A.ce,a3)
d.eI()
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
a1=new C.kr(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.ns),A.a4,A.cg,new C.jq(1),a3,a3,a3,a3,A.ce,a3)
a1.eI()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.i1(a3,a3,a3,a3,D.eUE,A.a4,A.cg,a3,A.eh,A.ce)
d.eI()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
B.Uc.prototype={
R(){var w=x.s
return new B.biD(C.a([],w),C.a([],w))}}
B.biD.prototype={
a_(){this.a1()
this.avk()
B.zg("dna_lab").bz(new B.dOb(this),x.P)},
gb2f(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3d.h(0,w[u])
t.toString
s.push(t)}return A.d.fX(s)},
ga8A(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2f(),w,v))}return u},
avk(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eL()
k.dB(l.e*31+l.d*7+C.BF(new C.S(Date.now(),0,!1)))
w=new B.dO0(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mD(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3d.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fX(r))}if(!A.d.b5(t,new B.dO_()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b_Z()},
b_Z(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fXb(s.ga8A()[r])
v=J.dH(D.Cc.geb(D.Cc),new B.dO1(w)).dH(0)
u=new C.eL()
u.dB(r+s.e)
A.d.fu(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eL()
t.dB(s.e*3+r)
A.d.fu(u,t)
s.z=u},
aXW(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.diG.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3d.h(0,w.f[v])
u.toString
break A}u=B.fXb(w.ga8A()[v])
break A}w.m(new B.dNZ(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dO9(),e=new B.dO4(),d=h.d===2?h.gb2f():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mH,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bV.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bV:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8A()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cn(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.boN,A.eo,g,g,g))}v.push(C.bY(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bY(A.bz,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cr(A.A,g,g,C.X(Ak.Nn,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.LK,C.bY(A.bz,u,A.bq,0,0),g)],a0))}v.push(A.an)
v.push(C.d(w,g,g,g,g,g,g,Q.mH,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b1.j(0.25):A.dq
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b1:A.b3,1,A.q,-1)
if(o){o=D.Cc.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ei,g,g,g))}v.push(C.bY(A.bz,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bY(A.bz,u,A.bq,0,0))}v.push(A.aA)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fa0(u,t>=(h.d===2?3:9)?A.b1:A.bV,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fa0(u,A.bV,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.Tq,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bC,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d13[j],h.d===j,new B.dO5(h,j),g,A.bV,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fh(A.jY,"New strand",new B.dO6(h),A.b1,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.Cc.h(0,i)
q.toString
a0.push(new B.fh(D.a_b,q,new B.dO7(h,i),A.bV,g))}u.push(C.bY(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.auC:D.cLv
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eUT,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dO8(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.q0,A.j,0,g,g))}return B.jG(A.bV,A.h9,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Us.prototype={
R(){return new B.aCr(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCr.prototype={
a_(){var w,v=this
v.a1()
w=v.qu(v.gc4U())
w.iR(0)
v.d!==$&&C.aP()
v.d=w
B.zg("ecosystem").bz(new B.dR0(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.btL()},
gaLS(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c4V(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cB(v,0)}if(m.gaLS()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.bt(w),5)===0)B.vO("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dQO())},
a9M(d){this.m(new B.dQN(this,d))
B.vR("pop",3,120,0.4)},
c4X(){return this.m(new B.dQP(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.XV,B.fa0(r,t.gaLS()?A.b1:A.c7,s),s),C.E(new C.C(D.bpk,C.bw(C.m(18),C.b3(s,s,s,new B.bd0(t.f,t.r,t.w,s),A.f1),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f0U,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hz(A.b1,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dQT(t),w)
v=t.y
v=B.hz(A.bS,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dQU(t),v)
u=t.z
return B.jG(A.b1,A.h9,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hz(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dQV(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dQW(t),A.yk,A.aM,s),new B.dA("Disease",!1,new B.dQX(t),D.bDU,A.bu,s),new B.dA("+ Foxes",!1,new B.dQY(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dQZ(t),s,A.bS,s),new B.dA("Reset",!1,t.gc4W(),A.jY,A.aS,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bd0.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.M()
w.saq(D.bSM.av(0,new C.a9(0,0,d,a0)))
a1.aZ(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uV,A.bo,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.M()
t.r=a0.gp(0)
a1.aZ(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eL()
r.dB(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hg.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d3g(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.M()
t.r=D.bce.gp(0)
a1.aZ(new C.a9(0,f,d,f+g),t)
i=C.M()
i.r=A.dq.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3i(h,j,a1)
g.$3(0,100,A.bo)
g.$3(1,120,A.bS)
g.$3(2,24,A.cs)
g=new B.d3h(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bo,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bS,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
ar(d){return!0}}
B.aKH.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aR8.prototype={
guO(){return A.d.cI(this.a,0,new B.bFm())}}
B.TH.prototype={
R(){var w=x.S
return new B.bih(B.hW0(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bih.prototype={
gvL(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dBz())},
a_(){var w,v=this
v.a1()
w=v.qu(new B.dBM(v))
w.iR(0)
v.x!==$&&C.aP()
v.x=w
B.zg("balance_lab").bz(new B.dBN(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bto()},
cww(d){var w,v=this
v.m(new B.dBA(v,d))
B.vR("click",v.f[d],60,0.4)
if(v.gvL()===v.d[v.e].guO()&&v.r.J(0,v.e)){B.vR("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a4(w).k("co.E"))
B.vO("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dBF(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvL()===m[o.e].guO())s="\u2696\ufe0f Balanced! "+m[o.e].guO()+" = "+o.gvL()+". The torques are equal, so the seesaw stays level."
else s=o.gvL()>m[o.e].guO()?"The right side is too strong ("+o.gvL()+" vs "+m[o.e].guO()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guO()+" vs "+o.gvL()+"). Add weight to the right, or place it further from the middle."
k=o.gvL()===m[o.e].guO()?A.b1:A.aM
k=B.bzk(s,k,o.gvL()===m[o.e].guO()&&o.e<m.length-1?new B.fh(A.iU,"Next",new B.dBG(o),A.b1,n):n)
w=C.E(C.cp(new B.dBH(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guO(),n,n,n,n,n,n,D.aQ5,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.XV,k,n),w,new C.C(D.agH,C.A(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvL(),n,n,n,n,n,n,D.aQ5,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dBI(o,v),n,A.aM,n))}return B.jG(A.aM,A.h9,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dBJ(o),A.jY,A.c7,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b90.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
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
d.aZ(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.iZ(0,j.b)
u=g*5.8
t=C.bA(new C.a9(-u,-9,u,9),A.hc)
w=C.M()
w.saq(D.bVr.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hI.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fmX(d,""+Math.abs(s),new C.u(w,22),A.c1,10)}q=new B.cD5(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aS)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bV)
if(w[s]===0){l=C.bA(C.cm(new C.u(m,-22),22,v),A.hc)
$.W()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b3.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fmX(d,"+",new C.u(m,-22),A.c1,14)}}i.restore()
$.W()
i=C.M()
i.r=(j.e?A.b1:A.aL).gp(0)
d.ae(new C.u(h,f),7,i)},
ar(d){return!0},
gjd(){return this.e}}
B.UG.prototype={
R(){return new B.biP(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.biP.prototype={
ga09(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gad9(){var w=this.ga09(),v=this.r,u=D.axg[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qu(new B.dV3(v))
w.iR(0)
v.x!==$&&C.aP()
v.x=w
B.zg("gear_lab").bz(new B.dV4(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btT()},
c4Z(d,e){var w,v=this
v.m(new B.dUU(v,d,e))
if(v.gad9()&&v.w.J(0,v.r)){B.vR("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a4(w).k("co.E"))
B.vO("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga09(),n=r.ga09(),m=D.axg[r.r].a
m=r.gad9()?"\u2705 Done! Ratio "+A.k.aa(r.ga09(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gad9()?A.b1:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.XV,B.bzk(m,w,r.gad9()&&r.r<7?new B.fh(A.iU,"Next",new B.dUY(r),A.b1,q):q),q),C.E(C.b3(q,q,q,new B.beu(v,r.f,q),A.f1),1),new C.C(D.agH,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga09(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A8.T1,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dUZ(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hz(A.aS,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dV_(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.auZ("Gear "+s+" teeth",p,new B.dV0(r,t),8,40,D.dal[t],""+p,q))}return B.jG(A.cs,A.h9,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.beu.prototype={
bOE(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.edb,D.ehZ,D.exv,D.ep0],s=v===0,r=0;r<4;++r){q=t[r]
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
n=A.d.fa(g,A.pg)
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
h=new B.dbb(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d8,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mT)
h.$5(new C.u(t,0),g[1],w[1],i,A.fx)
s.restore()
s=new B.dbc(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aS)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b1)},
ar(d){return!0}}
B.TQ.prototype={
R(){var w=$.aw()
return new B.biu(new C.ar(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.ar(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.biu.prototype={
a_(){this.a1()
this.aWD()
B.zg("cipher_lab").bz(new B.dFL(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aWD(){this.y=1+A.cI.aB(25)
this.z=0},
ga93(){var w=this
return B.a1a(B.a1a(D.GM[w.x],w.y),-w.z)===D.GM[w.x]},
gax_(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1a(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a1a(u,0).split(""),x.s),new B.dFt(),x.dv).fX(0)
break A}w=B.i7H(u,v.e.a.a)
break A}return w},
aS2(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bR(w,w.gM(0),v.k("bR<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fa(q,A.A2))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bD(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aS,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.M3,r,r,r,r),new C.x(C.jF(65+s),r,D.f2I,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lT,A.j,0,A.p),r))}return new C.a7(r,70,C.A(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ky,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dFC(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eXZ,!0,A.a4,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ky,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dFD(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iG,!0,A.a4,o,A.am,o,o,o,o)],v))}w.push(A.aA)
w.push(D.ftb)
w.push(A.at)
v=A.aS.j(0.12)
u=C.m(14)
t=C.I(A.aS.j(0.4),A.q,1)
w.push(C.p(o,C.zy(p.gax_().length===0?"\u2026":p.gax_(),D.f1H,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(B.bzk(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aS,o))
w.push(A.ac)
w.push(D.f9N)
w.push(A.at)
w.push(p.aS2(p.gax_()))
w.push(A.at)
w.push(D.fcb)
s=C.cz(w,o,A.bC,o,o,A.ah,!1)}else{w=B.bzk("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1a(D.GM[p.x],p.y),o,o,o,o,o,o,D.f2h,o,o,o)
u=(p.ga93()?A.b1:A.aS).j(0.14)
t=C.m(14)
r=C.I((p.ga93()?A.b1:A.aS).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fmS,v,A.S,D.fhg,C.p(o,C.d(B.a1a(B.a1a(D.GM[p.x],p.y),-p.z),o,o,o,o,o,o,D.f3K,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aS2(B.a1a(D.GM[p.x],p.y)),A.N],x.p)
if(p.ga93())t.push(B.bzk("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b1,new B.fh(A.jY,"Next",new B.dFE(p),A.b1,o)))
s=C.cz(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dFF(p),A.jh,A.aS,o),new B.dA("Crack a code",w===1,new B.dFG(p),A.pS,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dFH(p,q),o,A.aS,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hz(A.aS,""+u,"Shift",25,1,new B.dFI(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hz(A.aM,""+v,"Shift back",25,0,new B.dFJ(p),v))}return B.jG(A.aS,A.h9,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aKl.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aKP.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.e9.prototype={}
B.tk.prototype={
ape(d,e,f,g){var w=this
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
B.a9O.prototype={}
B.aaU.prototype={}
B.a3U.prototype={
bc_(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hb()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9O(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c10(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bLh())},
aj1(d,e,f,g){var w="p"+this.c++,v=new B.tk(w,e,f,g)
v.ape(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bLs(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cEr(d,e,f,g,h){return A.d.b5(this.b,new B.bLn(e,f,g,h))},
ajP(d,e,f,g){var w
if(d===f||this.cEr(0,d,e,f,g))return null
w=new B.aaU(d,e,f,g)
this.b.push(w)
return w},
azz(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zt(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amo(d){return this.Lm(d)&&!d.x&&d.cx>this.zt(d)},
b4F(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lm(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5_(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yR.h(0,v)
if(w!=null)return w.a
return 100},
uW(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c10(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bLt(a2),t).cI(0,0,new B.bLu(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLw(o)
m=C.a([],x.t)
l=new B.bLv(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLy(g,l,n)
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
a2.b4B(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zt(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4B(e,d,w,!0)
a2.bLE(a4)},
b4B(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLj(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLi(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLl(C.T(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4F(t)*(1+t.CW))
a4=b2.azz(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c5_(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bOD(e,a0,b8)
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
bOD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bLE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azz(o)/a1.b4F(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zt(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bDO(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bc_(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tB(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tB(o,"The "+$.q8().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tB(o,"More than 1.5 amps went through the "+$.q8().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tB(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tB(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yR.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q8().h(0,n).b
l=f.b
l=l===A.k.jY(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jY(g)?""+A.k.V(g):C.t(g)
a1.tB(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eJY.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tB(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tB(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tB(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tB(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tB(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tB(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bDO(d){return A.d.b5(this.a,new B.bLg(d))},
tB(d,e){var w
d.x=!0
d.ay=e
this.bc_(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bgB(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFE(d){var w=d.b
return D.aMz.t(0,w)||D.yR.ai(0,w)||w==="buck"||w==="regulator"},
bdn(d){var w,v=!0
if(!this.Lm(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yR.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uf(d,e){var w=this.b
return new C.a2(w,new B.bLA(d,e),C.U(w).k("a2<1>")).gM(0)},
Cf(d){var w,v
if(d.x)return!1
w=d.b
if(D.yR.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q8().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFE(d)||i.Cf(d))return null
w=i.Uf(d,0)
v=i.Uf(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcMU(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jY(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yR.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFJ("battery"),o=J.aV(t.a),t=new C.fi(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.Uf(n,0)+i.Uf(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFJ("switch"),o=J.aV(t.a),t=new C.fi(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q8().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zt(k))return"The "+$.q8().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zt(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b5(u,new B.bLo(i,d))
h=q.b
h=h===A.k.jY(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFJ(d){var w=this.a
return new C.a2(w,new B.bLr(d),C.U(w).k("a2<1>"))},
aFi(d){return this.aFJ(d).b5(0,new B.bLq(0.35))},
pI(d,e){return A.d.b5(this.a,new B.bLp(e))}}
B.aia.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.M()
w.r=F.KN.gp(0)
c0.aZ(new C.a9(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lU.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lU.ai(0,h.b)?(h.ch-1)*38:0
b4.cBq(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.htC(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.M()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.acC.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yS
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mM.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ceF(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zt(a0)){g=j+0
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
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbL().a.snapshot()
w.drawPath((a4.e=new C.cF(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbL().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.kr(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cg,new C.jq(1),b5,b5,b5,b5,A.ce,b5)
a9.eI()
a9.a5(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aMz.t(0,h)||D.yR.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cf(a0)&&r.Uf(a0,0)+r.Uf(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aH.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kr(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cg,new C.jq(1),b5,b5,b5,b5,A.ce,b5)
a9.eI()
a9.a5(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lU.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.KN.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bdn(a0)?A.c7:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdn(a0)){a9=new C.kr(new C.ep("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c7,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cg,new C.jq(1),b5,b5,b5,b5,A.ce,b5)
a9.eI()
a9.a5(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.X0,F.X5,b2)
j.toString
i=b1.f
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.QN
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b5(q,new B.bGy())){b3=A.d.cI(q,0,new B.bGz())
$.W()
b7=C.M()
b7.r=D.b7x.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aZ(new C.a9(0,0,b8,b9),b7)
a9=C.i1(b5,b5,b5,b5,D.eUx,A.a4,A.cg,b5,A.eh,A.ce)
a9.BE(b6-24)
a9.a5(c0,new C.u(12,10))}},
qg(d,e,f,g,h){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.cg,w,A.eh,A.ce)
v.eI()
v.a5(d,f)},
cBq(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hm7(a1,a2,a3)
d.E(new C.cU(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.acC,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aS,A.aM,A.k.D(r*1.2,0,1))
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
if(q){n=new C.S5(new C.vs(C.wX(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jn()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jn()
h=t[u].b
h===$&&C.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jn()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jn()
g=t[u].b
g===$&&C.c()
f=A.k.F(h+i,g.a.length())
v.jn()
i=t[u].Mr(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OD(d,e,f,g){var w,v,u,t
$.W()
w=C.M()
v=g?A.b0:A.a3
u=g?A.b5:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GO,null).av(0,d))
return w},
av9(d,e,f){return this.OD(d,e,f,!0)},
c0C(d,e){return this.OD(d,A.bn,A.iN,e)},
agB(d,e){var w,v,u
$.W()
w=C.M()
w.saq(D.aLa.av(0,C.bT(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.e2n)
v=e.ad(0,D.e2w)
u=C.M()
u.r=A.eu.gp(0)
u.c=1.2
d.bA(w,v,u)},
ceF(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.M()
c0.saq(D.bSs.av(0,D.eGX))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mz
c1.hN(D.eGP,w)
if(c3){w=C.bA(D.eGW,A.ks)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h2g(c2)
c1.bA(new C.u(-u,0),D.e3F,c0)
c1.bA(D.e1v,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lU.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAJ(c1,c2)
break
case"solar":r=C.bA(D.eGS,A.ii)
c1.aD(r,b3.OD(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bS,!1))
b9=C.M()
w=C.aq(D.baJ,A.d6,0.25+0.55*c2.f)
w.toString
v=C.aq(D.biv,A.mf,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a5B))
c1.aZ(D.a5B,b9)
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
$.W()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cq.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ap,b4,b4,C.a([],x.v))
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
b9.r=A.dO.j(0.9).gp(0)
c1.ae(D.e1B,4+4*w,b9)
break
case"crank":n=C.bA(D.eGD,A.hd)
c1.aD(n,b3.av9(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.M()
b9.saq(D.aLb.av(0,C.bT(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.saq(D.ecf.av(0,C.bT(m,7)))
c1.ae(m,7,b9)
b3.agB(c1,D.e3y)
b3.agB(c1,D.e1o)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bF())
l=C.M()
l.r=A.bS.gp(0)
c1.aO(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cU(6,-14,2,-30))
l.push(new C.cU(-2,-14,0,-2))
l.push(new C.bF())
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbL().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.saq(D.ebW.av(0,C.bT(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bA(D.eGK,A.rt)
b9=C.M()
b9.saq(D.anP.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agB(c1,D.RF)
b3.agB(c1,D.aG_)
i=c2.w?D.aG_:D.e18
b9=C.M()
b9.r=A.aB.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.RF,i,b9)
b9=C.M()
b9.r=(c2.w?A.b1:A.bS).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.RF,i,b9)
b9=C.lg(D.RF,i,0.85)
b9.toString
w=C.M()
w.r=A.ay.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.bA(D.aLH,D.aLg)
b9=C.M()
b9.r=A.fb.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aD(h,b9)
if(!t){b9=C.M()
b9.c=1.6
b9.r=C.aq(A.bS,A.cs,c2.fx).gp(0)
c1.bA(D.aGg,D.aFZ,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bA(D.aGg,D.e3W,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bA(D.e21,D.aFZ,b9)
b9=C.M()
b9.r=A.dB.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cm(new C.u(F.oS[g]*22,0),20,9)
w=C.bA(f,A.hC)
o=b3.OD(f,A.d8,A.oq,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.saq(D.ec7.av(0,C.bT(A.J,21)))
c1.ae(A.J,21,b9)
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
b9.saq(D.ebU.av(0,C.bT(A.J,13)))
c1.ae(A.J,13,b9)
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
case"resistor":a1=C.bA(D.aLH,D.aLg)
b9=C.M()
b9.saq(D.bVI.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c0(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.M()
b9.r=A.aM.gp(0)
c1.aZ(D.eH5,b9)
b9=c2.r
b3.qg(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e3d,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dO.j(0.55*w).gp(0)
v.z=A.yS
c1.ae(D.w2,34,v)}n=C.cm(D.e0E,12,18)
c1.aD(C.bA(n,A.hC),b3.OD(n,A.bn,A.e_,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dp.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.VN
else{v=C.aq(A.e_,A.hU,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Es
else{l=C.aq(A.dA,A.dO,c2.fx)
l.toString}w.saq(new C.bS(A.rP,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bT(A.rq,17)))
c1.ae(A.rq,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rq,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cU(-12,-4,-9,0))
v=C.M()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aO(l,v)
v=C.M()
v.r=A.cV.gp(0)
v.c=1.4
c1.bA(D.e3S,D.e3U,v)
v=C.M()
v.r=A.cV.gp(0)
v.c=1.4
c1.bA(D.e1V,D.e1Y,v)
w=C.a([],w)
a4=new C.aO(b9,A.ap,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.M()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dA,D.bbv,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aO(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dl2
c1.ae(A.rq,30,v)}w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e3Y,D.e3X,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e23,D.e22,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cU(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.M()
if(t)l=A.tm
else{l=C.aq(A.er,D.adl,c2.fx)
l.toString}if(t)j=A.ki
else{j=C.aq(A.kf,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eG9))
c1.aO(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.ja.gp(0)
c1.aO(a6,v)
v=C.M()
v.r=A.eN.gp(0)
c1.aZ(D.eGf,v)
w=new C.aO(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cU(-6,-12,0,-15))
b9=C.M()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aO(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bA(a7,A.hc),b3.av9(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cE.gp(0)
c1.aZ(D.eFX,b9)
b9=C.M()
b9.r=A.cq.gp(0)
c1.aZ(D.eFY,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cm(D.e0W,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c0(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aB.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qg(c1,"M",D.e3x,A.aB,14)
break
case"buzzer":a8=C.cm(A.J,42,42)
b9=C.M()
b9.saq(D.ecb.av(0,a8))
c1.hN(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b3.gp(0)
c1.ae(A.J,6,b9)
b3.qg(c1,"+",D.e3q,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=C.bT(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bV.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c0(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bA(D.eGG,A.hc)
w=C.M()
w.saq(D.bTp.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ap,b4,b4,w)
a9.E(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cU(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.M()
w.b=A.ae
w.c=10
w.r=D.bc7.j(0.5*b9).gp(0)
w.z=A.jk
c1.aO(a9,w)}$.W()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lE,A4.WP,c2.fx).gp(0)
c1.aO(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bA(a7,A.hc)
w=C.M()
w.saq(D.bSk.av(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bS.gp(0)
c1.aZ(D.eGl,w)
for(p=0;p<4;++p){b0=new C.kr(new C.ep("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.aB,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.cg,new C.jq(1),b4,b4,b4,b4,A.ce,b4)
b0.eI()
b0.a5(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bA(b1,A.hC),b3.c0C(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.M()
v.r=A.b1.j(0.5).gp(0)
c1.aZ(new C.a9(-3,w,11,w+b9),v)
b3.qg(c1,"1F",D.w2,A.c,11)
break
case"radio":a1=C.bA(D.a5B,A.hd)
b9=C.M()
b9.saq(D.bVY.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.oq.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bA(D.eGH,A.ii)
w=C.M()
w.r=A.dH.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lE.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.M()
w.r=(c2.fx>0?A.h2:A.nG).gp(0)
c1.aZ(D.eG_,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=C.M()
v.r=A.bI.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.saq(D.aLb.av(0,C.bT(D.a4G,6)))
c1.ae(D.a4G,6,w)
w=C.M()
w.r=A.oq.gp(0)
c1.ae(D.e1u,4,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=1.8
c1.bA(D.e1s,D.aG3,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bT(D.aG3,4+k*5+A.k.F(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nM.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c0(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bA(D.eGR,A.hc)
v=C.M()
v.r=L.mY.gp(0)
c1.aD(w,v)
b2=C.bA(D.eGO,A.hC)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.pn(),!0)
b9.translate(-33,-21)
E.fZw(c1,D.eMq,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.b1.gp(0)
c1.ae(D.e1G,1.6,b9)}else{w=C.M()
w.r=D.v4.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aO(b9,w)}b9=C.M()
b9.r=A.bv.gp(0)
c1.aZ(D.eGe,b9)
break}B.i5l(c1,c2,b3.b.d,b3.gc50())
if(t)b3.qg(c1,"\u2716",D.e40,A.ay,14)
if(s)c1.a.restore()},
bAJ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bA(w,A.rt),m.av9(w,A.dA,A.iQ))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.M()
u.saq(D.anI.av(0,v))
d.aZ(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aZ(D.eGu,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bA(t,A.hb),m.OD(t,A.dA,A.iN,!0))
m.qg(d,"+",D.e1d,A.aM,11)
m.qg(d,"\u2212",D.e3z,A.ad,11)
m.qg(d,C.t(l===A.k.jY(l)?A.k.V(l):l)+"V",D.e3j,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aZ(D.eGt,u)
u=e.as
s=C.M()
s.r=C.aq(A.ay,A.b1,u).gp(0)
d.aZ(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qg(d,"FLAT",D.e3c,A.c7,9)}if(l>2){u=C.M()
u.r=A.b3.gp(0)
u.c=1
d.bA(D.e0K,D.aFJ,u)
m.qg(d,l>3?"3 cells":"2 cells",D.e3i,A.az,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bA(r,A.rt)
$.W()
s=C.M()
s.saq(D.bVw.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cZ.gp(0)
d.aZ(D.eGv,s)
for(u=d.a,q=0;q<2;++q){p=D.d8u[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLa.av(0,C.bT(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qg(d,"9V",D.e3e,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bA(r,A.ii)
$.W()
s=C.M()
s.saq(D.anI.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cd.gp(0)
d.aZ(D.eGQ,s)
for(u=d.a,q=0;q<2;++q){s=C.bA(C.cm(new C.u(F.a2x[q],-20),8,10),A.hb)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cq.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qg(d,"+",D.e1k,A.ay,10)
m.qg(d,"12V",D.e3f,A.aB,15)}},
ar(d){return!0}}
B.mw.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tk(o,r,q,p)
n.ape(o,r,q,p)
k.push(n)
J.ip(s[4],new B.cjV(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajP(m,u[1],l,u[3])}}}
B.ai8.prototype={
R(){var w=x.N
return new B.ai9(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.ai9.prototype={
adc(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGc(w,d))
w.as=C.cM(A.lc,new B.bGd(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bqB()},
a_g(d,e){return this.ccC(d,e)},
aZW(d){return this.a_g(d,!1)},
ccC(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_g=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qT:A.v9
p=d.b
w=3
return C.b(E.fMG(s,r,p,d.ax<3.2,q,$.q8().h(0,p).b),$async$a_g)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_g,v)},
cp9(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGe()),t=J.cE(u)
t.J(u,v)
t.bn(u,new B.bGf(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0B(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kj,new B.bGg(w,u,d))}},
ZX(d){return this.cb_(d)},
cb_(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ZX=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i6t(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$ZX)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$ZX,v)},
a0B(d){return this.cmP(d)},
cmP(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0B=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bU(F.ke,null,new B.bGa(u,d),t,!0,!0,!1,A.k4,!1,!1,x.H),$async$a0B)
case 2:return C.h(null,v)}})
return C.i($async$a0B,v)},
a_(){this.a1()
this.bdy()
this.lb()},
bdy(){this.a.c.e=new B.bGv(this)},
lt(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uW(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lU.h(0,s.b)
if((r==null?null:r.b)!==D.zh)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.J(0,s.a)
q.a_g(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"speaker":if(s.fx>0)E.dF(330+A.o.F(110*A.k.bt(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bt(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new B.bGw())},
b5S(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lU.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.y(p,n)
r=i}}}return s},
b_C(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bR(w,w.gM(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lU.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cBr(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lU.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lU.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hm7(new C.u(k,n),new C.u(i,l),p)
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
ada(){this.a.toString
this.m(new B.bFG())},
bno(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cWi[v]
if(!A.d.b5(p.a.c.a,new B.bGx(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.HS:o
s=s?K.HS:o
q=t.aj1(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.ada()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Q3[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fL(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a4(q).k("cu<1>")
w=C.B(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_r(s,!0))
n.a.toString
if(t)w.push(n.b_r(r,!0))
w.push(C.E(C.cp(new B.bGu(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_r(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q8()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zu,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nq,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tw,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFH(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cz(m,p,A.h5,p,p,A.aO,!1),A.f,p,p,new C.o(F.At,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aY0(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.abj,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.agI,w,w,w)},
ceG(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q8().h(0,o),m=d.dy,l=d.fr,k=new B.bG_(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Ti,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bJU,p,p,p,new B.bFN(q,d),p,p,p,p,"Remove part",A.ca),C.aH(p,p,p,p,A.Gg,p,p,p,new B.bFO(q),p,p,p,p,p,A.ca)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.zw,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f26,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.an,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c7:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbw(d)
if(v!=null){l=(d.x?A.ay:A.aH).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aH).j(0.5),A.q,1)
m.push(new C.C(A.hY,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f8t,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.co,p,p,p),p))}if(B.fXE(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFP(q,d,u),p,h,p))}l=C.bY(A.bz,l,A.bq,4,6)
l=C.a([A.an,l,A.at,C.d(q.a.c.Cf(d)?"Showing: "+F.PG[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.Cf(d))l.push(new B.fh(A.FQ,"Open big screen",new B.bFS(q,d),h,p))
A.d.v(m,l)}if(D.lU.ai(0,o)&&!B.fXE(o)){l=C.a([A.an,C.d(q.a.c.Cf(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.Cf(d))l.push(new B.fh(A.No,"Open the "+$.q8().h(0,o).b,new B.bFT(q,d),h,p))
A.d.v(m,l)}if(D.lU.ai(0,o))A.d.v(m,C.a([A.an,new B.fh(A.Bz,"Make it bigger (or tap it 4 times)",new B.bFU(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Cf(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.an,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f2W,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dbv[s]
j=r===A.k.jY(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bFV(q,d,r),p,h,p))}i.push(new C.C(A.ml,C.bY(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fqo)
A.d.v(m,i)}if(q.a.c.Lm(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zt(d),2)
i=q.a.c
w=i.amo(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amo(d)?A.c7:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zt(d),0,1)
i=q.a.c.amo(d)?A.ay:A.b1
m.push(new C.C(A.hY,C.v(C.a([l,A.cS,C.bw(j,C.m_(A.bF,p,p,5,p,w,new C.lT(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.hY,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eXW,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d1I[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bFW(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cTQ[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bFX(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bFY(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bFZ(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFQ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFR(d)))
if(o==="crank")m.push(D.fm0)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.aY0(new C.cS(D.aYE,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.b9Y.prototype={}
B.Ut.prototype={
R(){return new B.aCs(B.h2f(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCs.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.adb()},
adb(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adb=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fsB(),$async$adb)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i5G(t.d,r)
if(s!=null){t.m(new B.dR8(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adb,v)},
EH(){var w,v=this
if(!v.as)return
w=B.hXf(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bCW(w)},
iV(d){if(d!==A.ft)this.EH()},
q(){$.aW.hE(this)
this.EH()
this.a2()},
c52(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a2<1>")
t=new C.a2(v,new B.dRh(q),u).gM(0)
s=new C.a2(v,new B.dRi(),u).gM(0)
r=new C.a2(v,w.gcQp(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRj(q,t,s,r))}if(A.o.F(q.w,45)===0)q.EH()
if(A.o.F(q.w,10)===0){w=q.f
$.ahl()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahl()[q.f].c.$1(q.d)){w.J(0,q.f)
B.Bs("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRk())
q.EH()
w=q.c
w.toString
w=C.WQ(w)
if(w!=null)w.S(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahl()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mh,p,p,p,p,p,p,p,p,p,p))}},
afS(){var w=0,v=C.j(x.H),u=this,t
var $async$afS=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dR7(u),t,null,!0,!0,x.H),$async$afS)
case 2:return C.h(null,v)}})
return C.i($async$afS,v)},
aY_(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hp(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aXZ(d,e,f,g){return this.aY_(d,e,f,g,null)},
apT(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aE(w,C.p(w,C.A(C.a([C.X(d,f,w,w,w,15),A.eb,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
aea(){var w=0,v=C.j(x.H),u=this,t
var $async$aea=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).c8(C.e8(new B.dR3(u),!1,null,x.H)),$async$aea)
case 2:t=u.e.gbg()
if(t!=null)t.bdy()
if(u.c!=null)u.m(new B.dR4())
u.EH()
return C.h(null,v)}})
return C.i($async$aea,v)},
bDH(){var w,v,u,t,s=null,r=this.f
$.ahl()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bo:A.ay
u=C.m(9)
t=C.I(F.At,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wg,s,s,s),s,s,s),A.f,s,D.aYL,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
agY(){var w=0,v=C.j(x.H),u=this,t
var $async$agY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bU(F.ke,null,new B.dRg(u),t,!0,!0,!0,A.k4,!1,!1,x.H),$async$agY)
case 2:return C.h(null,v)}})
return C.i($async$agY,v)},
c53(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bL7,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRm(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b3n,A.f,r,r,new C.o(A.bm,r,C.I(A.aS.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.fow,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.hh,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awz(s.gcaH(),r),A.rA,s.aXZ(A.xY,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRn(s,d)),s.aY_(A.lh,"Challenges",A.aM,s.gcrF(),s.bDH()),s.aXZ(A.Ng,"How to play",A.aS,new B.dRo(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.an,C.A(C.a([s.apT(A.nY,"Circuits",A.bu,s.gckD()),A.bp,s.apT(A.pO,"Repair",A.aM,new B.dRp(s)),A.bp,s.apT(D.xZ,"Clear",A.c7,new B.dRq(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.At,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bva,r,r,r)},
B(d){var w=this,v=null
$.ar7="tech"
return C.c8(v,A.bY,C.bn(!0,C.v(C.a([w.c53(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h19(w.d,w.e,w.gc51(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awz.prototype={
R(){return new B.b89(null,null)}}
B.b89.prototype={
gaw2(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gaw2().q()
this.brR()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hp(new C.a7(42,42,C.c6(this.gaw2(),new B.cAD(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b88.prototype={
a5(d,e){var w,v,u,t=null,s=e.e9(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.M()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mz
d.ae(s,r+2+o*2,w)
w=C.M()
w.saq(D.ec6.av(0,C.bT(s,r)))
d.ae(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.saq(new C.fS(A.A,0,6.283185307179586,A.x,D.cLu,t,new C.mj(p)).av(0,C.bT(s,r)))
d.ae(s,r,v)
p=new B.cAC(d)
p.$3(s.ad(0,A.rq),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e2e),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e44),2.6,0.5+0.5*Math.cos(q))
u=C.i1(t,t,t,t,D.eUD,A.a4,A.cg,t,A.eh,A.ce)
u.eI()
u.a5(d,s.ad(0,new C.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
B.awS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.awT.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bqA()}}
B.aIS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwc.prototype={}
B.fK.prototype={}
B.IZ.prototype={
a4(){return"ScreenStyle."+this.b}}
B.m2.prototype={}
B.Ua.prototype={
R(){return new B.biB(null,null)}}
B.biB.prototype={
ga8x(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nT,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8x().q()
this.btH()},
gRn(){var w=this.ga8x().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lU.h(0,this.a.c)
if(v==null)v=D.aLZ
return C.c8(w,R.L5,C.bn(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zi?this.bFS(v):this.chq(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mv,w,w,w,new B.dN4(d),w,w,w,C.nw(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eWf,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c54(d){var w
A:{if(D.Ie===d){w=0.46153846153846156
break A}if(D.ut===d){w=0.45
break A}if(D.w8===d){w=0.9259259259259258
break A}if(D.Sf===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
chq(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ie
A:{if(D.Ie===p){w=44
break A}if(D.ut===p){w=30
break A}if(D.w8===p){w=22
break A}if(D.Sf===p){w=26
break A}w=14
break A}v=C.c6(this.ga8x(),new B.dN3(this,w,d,o),q)
if(p===D.a5J)v=new C.D7(D.bvM,v,q)
p=this.c54(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Fn,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bpx,new C.Q(u,u,u,u),q,q,q),q)},
b55(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bt(this.gRn()*0.4),0,100),q=d.b===D.Ie,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dj(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rH,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bvu,t,t,t,3))}n.push(A.d9)
n.push(D.fhs)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Dy(A.A,C.p(t,t,A.f,t,t,new C.o(A.b1,t,t,C.m(2),t,t,A.n),t,t,t,A3.Fn,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qd)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f8M,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
au1(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d77,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f_G,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dN_(this,d),v,v,v,v,v,v,!1,A.a8)},
bWO(d,e){return this.au1(d,e,!0)},
bWx(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Sf||n===D.w8,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kI,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b55(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b3,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.ae8(0,p.gRn(),o),A.f1),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hw,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dMY(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k_[s]
t.push(new C.cr(A.A,o,o,p.bWO(r,m?58:54),o))}k=C.a([k,A.an,w,A.ac,C.E(C.lX(0.92,t,v,8,12,A9.vj,o,!1),1)],u)
if(n!==D.a5J){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k_,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bR(v,v.gM(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.au1(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.q0,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bql,T.aia,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzm(d,e){var w=null
return C.p(w,C.v(C.a([this.b55(d),C.E(C.b3(w,w,w,new B.ae8(e,this.gRn(),w),A.f1),1),C.aE(w,C.p(w,C.av(C.d(F.k_[e].a,w,w,w,w,w,w,A0.II,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dMT(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bFS(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8x(),new B.dMW(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bv5,new C.Q(8,8,8,s),t,t,t),t)}}
B.buh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.M()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kI,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aZ(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dl7
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ar(d){return!0}}
B.ae8.prototype={
a5(d,e){return E.aPq(d,e,this.b,this.c)},
ar(d){return!0}}
B.aKE.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aVK.prototype={}
B.UZ.prototype={
R(){return new B.bja(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bja.prototype={
gvj(){var w=this.f
return w===$?this.f=B.fXK(0):w},
a_(){this.a1()
this.lb()
B.zg("laser_maze").bz(new B.e7T(this),x.P)},
lt(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.y(u.a,t)
if(t>0.8)A.d.cB(w,v)}this.m(new B.e7U())},
adh(d){var w=this
w.m(new B.e7J(w,d))
B.vO("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c5k(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gee()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bt((d.a-t)/v)
q=A.k.bt((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvj().b.t(0,p)||p===o.gvj().e||o.gvj().d.ai(0,p))return
o.m(new B.e7K(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e7N(t,B.hm_(t.gvj(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e7O(t),A.jY,A.aM,s),new B.dA("Skip",!1,new B.e7P(t),D.bDV,A.aS,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e7Q(t),D.bDW,A.aS,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e7R(t,v),s,A.ay,s))}return B.jG(A.ay,A.h9,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bga.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gee()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgg(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bA(new C.a9(a5,a6,a8,a4),A.ks)
v=$.W()
u=C.M()
u.r=L.mY.gp(0)
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
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a4(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bA(C.cm(p,u,u),A.hd)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bW3.av(0,C.cm(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gM(0),v.k("bR<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.M()
a8.b=A.ae
a8.c=14
a8.e=A.fA
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lp
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=4
a8.e=A.fA
a8.r=D.adl.gp(0)
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=1.6
a8.e=A.fA
a8.r=A.c.gp(0)
a9.aO(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a4(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Ce
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
i=new C.kr(new C.ep("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.cg,new C.jq(1),a2,a2,a2,a2,A.ce,a2)
i.eI()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.dgj(a7,a3,a9)
a1.c.bI(0,new B.dgh(g))
a4.d.bI(0,new B.dgi(g))
f=a7.$1(a4.e)
a4=C.bA(C.cm(f,o,a3*0.8),A.hd)
a8=C.M()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.M()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
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
ar(d){return!0}}
B.V0.prototype={
R(){var w=x.n
return new B.aD6(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aD6.prototype={
a_(){this.a1()
this.lb()
B.zg("light_mixer").bz(new B.e8b(this),x.P)},
lt(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aY4()
w.m(new B.e8c())},
aw6(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.d8(t,new B.e7X()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aY4(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hhm(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vR(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vO("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcwz(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cNp[A.o.F(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e85(v,B.hhm(v.e,t))),r=t[0]
r=B.hz(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e86(v),r)
w=t[1]
w=B.hz(A.bo,""+A.k.V(w*100)+"%","Green",1,0,new B.e87(v),w)
t=t[2]
return B.jG(A.b8,A.h9,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hz(A.d6,""+A.k.V(t*100)+"%","Blue",1,0,new B.e88(v),t),new C.bI(A.a7,u,u,new B.fh(A.hz,"Lock it in",new B.e89(v),A.b1,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bgp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bA(new C.a9(0,0,n,m),A.qa)
$.W()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bA(new C.a9(0,0,n,m),A.qa)),$.pn(),!0)
v=e.gee()*0.3
u=e.e9(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.E8,I.acq,I.acP]
d.l9(new C.a9(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.ny
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bA(new C.a9(0,0,n,m),A.qa)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b3.gp(0)
d.aD(n,m)},
ar(d){return!0}}
B.aL5.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwh.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bua()}}
B.aL6.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwi.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.bub()}}
B.bt6.prototype={}
B.a7M.prototype={
B(d){var w=null
return C.c8(C.eC(w,w,w,!0,!0,D.ady,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amH,w,w,w,new B.cex(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fwU,w,w,w,1,w,!0),D.ady,C.cz(C.a([D.e5l,C.cp(new B.cey())],x.p),w,D.brk,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VS.prototype={
R(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDY(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDY.prototype={
a_(){this.a1()
this.lb()},
b36(d){var w=this.d.length
return A.o.F(A.k.bt(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lt(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b36(v.f)
if(w!==v.x){v.x=w
B.lf("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eHb(v))
B.Bs("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c6h(){if(this.d.length<2)return
this.m(new B.eH7(this))},
aYq(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eH6(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc6g(),p=s.d,o=C.E(C.aE(r,C.b3(r,r,r,new B.but(p,s.f,r),A.f1),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f6Y,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awe[A.o.F(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f6e,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fy,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eH9(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jG(A.aM,A.h9,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.A(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kz,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eHa(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dm,!0,A.a4,r,A.am,r,r,r,r),1),A.ab,new B.fh(A.hy,"Add",s.gc6e(s),A.c,r),A.bp,new B.fh(A.mp,"Spin",q,A.b1,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.but.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.M()
w.r=D.b8U.gp(0)
a1.ae(d,f,w)
w=C.M()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bT(d,a0)
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.awe[A.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
o=C.bT(d,a0)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kr(new C.ep(o,i,i,A.cO,i,i,i,i,i,i,D.eVr),A.a4,A.cg,new C.jq(1),i,i,i,i,A.ce,i)
k.eI()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.M()
f.r=D.adc.gp(0)
a1.ae(d,20,f)
f=C.M()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ae(d,20,f)
j=new C.aO(h.r,A.ap,i,i,C.a([],x.v))
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
ar(d){return!0}}
B.UA.prototype={
R(){return new B.biK($,A.bx,0,C.a([],x.X),null,null)}}
B.biK.prototype={
a_(){this.a1()
this.lb()},
lt(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bs("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4s(900,new B.dTm())}w.m(new B.dTn())},
aYs(d){return this.m(new B.dTh(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.F(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpi(l,A.c7,n),A.aNc)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eZE,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eYJ,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.D4,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d4n[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTj(o,q),n,A.c7,n))}m=o.f
p=m?A2.y6:A.iV
m=m?"Pause":"Start"
return B.jG(A.c7,A.h9,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fh(p,m,new B.dTk(o),A.b1,n),new B.fh(A.jY,"Reset",new B.dTl(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bpi.prototype={
a5(d,e){var w,v,u,t,s=e.e9(A.J),r=e.a/2-14
$.W()
w=C.M()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bT(s,r)
v=C.M()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bT(s,r)))
d.f5(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
B.TN.prototype={
R(){return new B.bim($,A.bx,0,C.a([],x.X),null,null)}}
B.bim.prototype={
a_(){this.a1()
this.lb()},
lt(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.QH.h(0,p.d)
w.toString
v=A.d.fa(w,new B.dEb())
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
B.lf("flute",D.bWG[t]+5,1400,0.35)}p.m(new B.dEc())},
gc6k(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JP("Press Start",0.5)
w=D.QH.h(0,this.d)
w.toString
v=A.d.fa(w,new B.dE6())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JP("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JP("Hold",1)
case 2:return new C.JP("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JP("Hold",0.5)}}}return new C.JP("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc6k(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.Df,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kz,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QH.geb(D.QH));w.C();){v=w.gT(w)
o.push(new B.dA(v,r.d===v,new B.dE9(r,v),q,A.hv,q))}w=r.e
v=w?A.a_U:A.iV
w=w?"Stop":"Start"
o.push(new B.fh(v,w,new B.dEa(r),A.b1,q))
return B.jG(A.hv,A.h9,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHm.prototype={}
B.Ur.prototype={
R(){return new B.biE(new C.cs(null,x.A),C.a([],x.au),A.aB,A.c)}}
B.biE.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mw,s,s,s,new B.dQD(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aE(s,C.b3(s,s,s,new B.bkG(t.e,t.x,s),A.f1),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dQE(t),new B.dQF(t),s,s,s,s,s,s,s,s,s,new B.dQG(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cMN[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EX(v,u,new B.dQH(t,v),!1,s))}u=t.r
return B.jG(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bT,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hz(A.bA,""+A.k.V(u),"Brush",30,2,new B.dQI(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dQJ(t),A.FI,A.bA,s),new B.fh(A.r6,"Undo",new B.dQK(t),A.c,s),new B.fh(A.e5,"Clear",new B.dQL(t),A.c,s),new B.fh(A.Nc,"Paper",new B.dQM(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bkG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.M()
w.r=this.c.gp(0)
d.aZ(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fA
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gL(m).a,A.d.gL(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cU(n,q,(n+i.a)/2,(q+i.b)/2)
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
u.drawPath((q==null?k.e=new C.cF(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
B.Vc.prototype={
R(){var w=x.S
return new B.aDg(C.aX(w),C.aX(w))}}
B.aDg.prototype={
a_(){this.a1()
this.arm()},
arm(){var w,v,u=this,t=x.N,s=C.bm(D.d8P,!0,t)
A.d.Cz(s)
w=x.S
v=C.U(s).c
t=C.B(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.Cz(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c6f(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lf("bell",12+A.o.F(d,9),150,0.35)
s.m(new B.edy(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n4,new B.edz(s,v,u),t)
else{s.x=!0
C.bN(Ae.F0,new B.edA(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Tj,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xy,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hB,A.j,0,q,q),q),C.E(C.ie(!0,q,q,A.y,new C.hK(v,8,8,1,q),new B.edE(r),r.e.length,A.bj,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cOf[t]
o.push(new B.dA(s.b,r.d===s.a,new B.edF(r,s),q,A.aS,q))}o.push(new B.fh(D.bDT,"New game",new B.edG(r),A.b1,q))
return B.jG(A.aS,A.h9,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.Vq.prototype={
R(){return new B.aDC(C.a([],x.t))}}
B.aDC.prototype={
c6j(d){A.d.a9(this.d)
this.w=!0
this.aYr()},
aYr(){this.d.push(A.cI.aB(4))
this.e=0
this.Zm()},
Zm(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zm=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.eob(t))
s=x.H
w=3
return C.b(C.bN(A.lI,null,s),$async$Zm)
case 3:r=t.d,q=C.bm(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRN(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zm)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.eoc(t))
case 1:return C.h(u,v)}})
return C.i($async$Zm,v)},
aRN(d){this.m(new B.eo9(this,d))
B.lf("marimba",D.aoh[d]+5,450,0.55)
C.bN(A.EZ,new B.eoa(this),x.H)},
c6l(d){var w,v,u=this
if(!u.w||u.r)return
u.aRN(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.eod(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.eoe(u))
C.bN(A.ib,new B.eof(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.Tq,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f7k,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ava[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.ava[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.di(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jb,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.eog(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.an,n,A.d5,new C.fG(1,C.lX(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jG(A.cd,A.h9,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fh(A.iV,n,q.gc6i(q),A.b1,p)],m),p,p))}}
B.VL.prototype={
R(){return new B.bjS(new C.ar(A.as,$.aw()))}}
B.bjS.prototype={
auR(d){return C.oC(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eCt(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eCC()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ac.wE),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aXa),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ky,"Bill amount",!0,!0,!1,m,m,m,m,D.f4V,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eCy(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aOF,!0,A.a4,m,A.am,m,m,m,m)
k=A.b1.j(0.1)
s=C.m(20)
r=C.I(A.b1.j(0.35),A.q,1)
q=x.p
s=C.cz(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auR(w)),t.$2("Total","$"+n.auR(v)),R.Xv,t.$3$big("Each of "+n.f+" pays","$"+n.auR(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fz,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cza[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eCz(n,o),m,A.b1,m))}l=n.f
return B.jG(A.b1,A.h9,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hz(A.aS,""+l,"People",20,1,new B.eCA(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eCB(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Va.prototype={
R(){var w=C.a([3,5],x.t)
return new B.bjl(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjl.prototype={
a_(){this.a1()
this.lb()},
lt(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bt(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7L("snare",0.5)}u.m(new B.ecd())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hb()
u.w=t
u.x=t?0:3.141592653589793
B.lf("bell",24,400,0.5)}u.m(new B.ece())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcm(v,o.r>0,n))}u=C.aE(n,C.av(C.bY(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ec6(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d8,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.eb(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f49,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eca,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ec7(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eUV,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kz,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ec8(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d1S[r]
v.push(new B.dA(q.b,o.d===q.a,new B.ec9(o,q),q.c,A.bu,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hz(A.bu,""+s,"Dice",4,1,new B.eca(o),s))}if(o.d==="num"){s=o.z
s=B.hz(A.bu,""+s,"From",100,1,new B.ecb(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hz(A.bu,""+p,"To",1000,2,new B.ecc(o),p)],m))}return B.jG(A.bu,A.h9,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bcm.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=C.a([],x.p)
for(s=D.djS.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaj,p,18,p,p,p,p,p,18),p))
return C.eG(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
B.aKr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bw8.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btu()}}
B.aKK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwd.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btO()}}
B.aLe.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwn.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buj()}}
B.aLI.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwz.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buN()}}
B.b5X.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aD_.h(0,t)
$.ar7=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nh,u,u,u,new B.crp(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Ng,s,u,u,u,22),u,u,u,new B.crq(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bul,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.At,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.F2,u,u,1/0))
return C.c8(u,A.bY,C.bn(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aR,s,s,s,16),A.eb],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.tw,C.aE(s,C.di(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crl(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.C(A.cC,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.auZ.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auy(d).cH3(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9A(C.kX(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.A(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.II,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fh.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.tw,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.C(Al.XY,C.A(C.a([C.X(w.c,u,v,v,v,17),A.eb,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crk(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.EX.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eTe:u
w=t?A.c:A.b3
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.di(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hX,u,r,D.agf,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crr(v),u,u,u,u,u,u,!1,A.a8)}}
B.mz.prototype={
a4s(d,e){var w=C.dh()
w.seD(C.cM(C.dC(0,0,0,d,0,0),new B.crm(this,w,e)))
this.fn$.push(w.bf())},
lb(){var w=this,v=w.qu(new B.cro(w))
v.iR(0)
w.fm$!==$&&C.aP()
w.fm$=v}}
B.aaA.prototype={
bwX(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gT(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bA9()
g.ay!==$&&C.aP()
g.ay=w},
bA9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaB.prototype={
cCZ(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.Fm(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uW.prototype={}
B.OK.prototype={}
B.xQ.prototype={}
B.OJ.prototype={
fj(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aoc[w.aB(7)]
w=w.hb()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
B.lf(u,v+w-12,2200,0.1)}}
B.UH.prototype={
R(){var w=$.aw()
return new B.aCD(new C.cs(null,x.A),new C.ar(A.as,w),new B.OJ(A.cI),D.d3Q,A.au,D.a2k,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCD.prototype={
a_(){var w,v=this
v.a1()
v.lb()
v.a.toString
w=$.hao
if(w==null)w=$.hao=B.cu0()
w.bz(new B.dW4(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.btW()},
cqQ(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dVx(p[n]).$0())
w.push(q)}this.w=w},
gVD(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asw(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awA(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asw(d.x,d.w,105/Math.max(w,3))
C.eU()
B.lf("bell",(A.d.cJ(D.a1W,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lt(d){var w,v,u,t,s,r,q,p=this
p.f.fj(0,d,p.db)
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
c7_(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVD()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVD()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cCZ((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c6Z(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVv(w))
return}w.m(new B.dVw(w,v,A.a.i(d).toLowerCase()))},
bMR(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dVt(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bGx,n,n,n,o.gbMQ(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mw,n,n,n,new B.dVQ(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dVR(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Dd,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bOz,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc6Y(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iG,!0,A.a4,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dVS(o,s),A.nf,A.aS,n))}i.push(new C.C(A.hY,new C.a7(n,38,C.cz(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.an)
w=C.a([new B.dA("Whole Earth",!1,new B.dVW(o),A.hj,A.aS,n)],l)
for(v=D.aCZ.gdK(D.aCZ),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new B.dA(u.a,!1,new B.dVX(o,u),n,A.aS,n))}w.push(new B.dA("Random",!1,new B.dVY(o),A.mp,A.aS,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hz(A.aS,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dVZ(o),w))
w=o.dy
i.push(B.hz(A.cd,A.a.aT(A.o.u(A.k.bt(w)),2,"0")+":00","Time",24,0,new B.dW_(o),w))
w=o.fr
i.push(B.hz(A.b1,o.cpD(),"Season",365,0,new B.dW0(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lN:D.FZ
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dW1(o),D.bBM,A.aS,n),new B.dA("Night",v,new B.dW2(o),A.vs,A.aS,n),new B.dA("Borders",u,new B.dVT(o),D.bBQ,A.aS,n),new B.dA("Names",r,new B.dVU(o),A_.Nk,A.aS,n),new B.dA("Music",q,new B.dVV(o),p,A.aS,n)],l),n,n))
return B.jG(A.aS,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cpD(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.avP[u])v=u
return A.ic[v]+" "+(A.k.bt(w-D.avP[v])+1)},
c6X(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mM(1,A.o.F((A.d.cJ(D.a1W,t)+1)*47,360),0.55,1).iy()
r=new B.dVr()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dl,j,j,j),1),C.aH(j,j,j,j,A.Gg,j,j,j,new B.dVq(this),j,j,j,j,j,A.ca)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hp,j,j,j)
m=D.diy.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fqP(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gu(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gu(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.N,v,A.N,m,A.N,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fqP(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VG,j,p,q,j,j,A.n),j,j,j,j,D.agO,j,j,j)}}
B.beB.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.M()
d7.r=D.Ao.gp(0)
d8.aZ(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eL()
w.dB(4)
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
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.aS.j(0.35),A.K],t),D.cPM,d3).av(0,C.bT(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bT(p,o)
u=C.M()
u.saq(D.ece.av(0,n))
d8.ae(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.k_(n))
d8.qr(0,d6)
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
f=new B.dc1(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cJ(D.a1W,a7.c)+1)*47,360)
$.W()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mM(1,a9,a3,a8?1:0.62).iy().gp(0)
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fA
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
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rh
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbL().a.snapshot()):s).a,q)
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
c9=B.hJe(a7.a,a3,b2)
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
$.W()
u=C.M()
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b6K.j(0.78)],t),D.d4c,d3).av(0,C.bT(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.M()
d4.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dg6,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.hh.j(0.5).gp(0)
d8.ae(p,o,d7)},
ar(d){return!0}}
B.aKQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.aKR.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btV()}}
B.bt1.prototype={}
B.VO.prototype={
R(){return new B.bjW()}}
B.bjW.prototype={
gaRm(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.Ao,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amH,w,w,w,new B.eDm(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fqH,w,w,w,1,w,!0),u=C.m(18),t=A.aS.j(0.1),s=C.I(A.aS.j(0.35),A.q,1),r=x.p
return C.c8(v,D.Ao,C.cz(C.a([C.p(w,C.A(C.a([D.bFg,A.av,C.E(C.d(D.cTB[this.gaRm()],w,w,w,w,w,w,D.a7z,w,w,w),1),C.aH(w,w,w,w,D.bPA,w,w,w,new B.eDn(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,C.cp(new B.eDo())],r),w,A.Y7,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vz.prototype={
R(){return B.hJG()}}
B.bjI.prototype={
chr(d){var w=d.c,v=B.hJI(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.lb()},
lt(d){var w,v,u,t=this
t.e.fj(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.chr(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lg(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc70(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c74(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.C5[s]
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
aYN(d){this.m(new B.evp(this,d))
C.eU()
B.lf("bell",D.dgh[A.o.F(A.d.cJ(D.C5,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mw,m,m,m,new B.evA(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.evB(n,l)),h=C.a([new B.dA("All",!1,new B.evC(n),A.a02,A.aM,m)],k)
for(w=0;w<10;++w){v=D.C5[w]
h.push(new B.dA(v.a,n.z===v,new B.evD(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hz(A.aM,s,"Time",1,0,new B.evE(n),u/t)
u=n.w
u=B.hz(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.evF(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lN:D.FZ
return B.jG(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.evG(n),m,A.aM,m),new B.dA("Names",r,new B.evH(n),m,A.aM,m),new B.dA("Asteroids",q,new B.evI(n),m,A.aM,m),new B.dA("Music",p,new B.evJ(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c71(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.evn(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.l1,r,r,r),1),C.aH(r,r,r,r,A.Gg,r,r,r,new B.evm(this),r,r,r,r,r,A.ca)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.zw,r,r,r)
v=n.$2("WIDTH",B.Gu(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gu(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.evo().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.N,p,A.N,v,A.N,s,A.N,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VG,r,l,m,r,r,A.n),r,r,r,r,D.agO,r,r,r)}}
B.br4.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.M()
w.r=D.Ao.gp(0)
a7.aZ(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eL()
v.dB(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc70()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.C5),t=new C.fi(a6,new B.eXK()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
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
p.delete()}i=B.hJH(A.d.gL(D.C5))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bT(o,a6)))
a7.ae(o,a6,t)
t=C.M()
t.saq(D.ec8.av(0,C.bT(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hc0("Sun",10.5,A.ad)
h.a5(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.C5),t=new C.fi(a6,new B.eXL()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
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
a0=C.cm(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bK.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c0(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rh
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bS(P.pe,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1z,a4).av(0,C.bT(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cYD[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hc0(d,10.5,A.ad)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
B.UI.prototype={
R(){var w=x.i
return new B.aCE(new B.OJ(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCE.prototype={
cu2(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c73(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e0V
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
s.m(new B.dW8())},
a_(){this.a1()
this.lb()},
lt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fj(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yD[r]
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
break}}}if(A.d.d8(s,new B.dWB()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcl()>120)v.push(i.cx)
if(v.length>700)A.d.cB(v,0)
if(i.cx.gcl()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bL8()
else n=n==="weight"?p.cBg():p.bDj()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.ddq[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWn(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWo(p),Aj.FU,A.cs,o),new B.dA("Feather",s,new B.dWp(p),A_.MV,A.cs,o),new B.dA(q,r,new B.dWt(p),A.FJ,A.aS,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hz(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWu(p),q),new B.eQ(C.a([new B.fh(A.tJ,"Drop!",new B.dWv(p),A.b1,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hz(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWw(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hz(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWx(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hz(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dWy(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hz(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dWz(p),r),new B.eQ(C.a([new B.fh(A.ng,"Fire!",p.gc72(),A.b1,o),new B.fh(A.tJ,"Falls",new B.dWA(p),A.c,o),new B.fh(A.qZ,"Orbit 7.7",new B.dWq(p),A.c,o),new B.fh(D.bEG,"Oval 9",new B.dWr(p),A.c,o),new B.fh(A.Bz,"Escape",new B.dWs(p),A.c,o)],w),o,o)],w))}return B.jG(A.cs,A.h9,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bL8(){return new C.C(D.bpp,C.cp(new B.dW7(this)),null)},
cBg(){var w,v,u,t=null,s=[D.eA9,D.eBy,D.eBG,D.eBZ,D.eBE,D.eC3,D.eAH,D.eCp,D.eBi],r=x.p,q=C.a([D.feK,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cC,new C.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bh,new C.B8(new B.dW9(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fh1)
return C.cz(q,t,A.ix,t,t,A.ah,!1)},
bDj(){return C.cp(new B.dW5(this))}}
B.b9N.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.M()
e.r=D.Ao.gp(0)
d.aZ(new C.a9(0,0,0+h,0+g),e)
w=new C.eL()
w.dB(2)
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
e.saq(new C.bS(A.A,0.5,A.x,i,0,C.a([A.K,A.aS.j(0.35),A.K],x.O),D.d54,i).av(0,C.bT(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.M()
e.saq(D.ec2.av(0,C.bT(g,p)))
d.ae(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ap,i,i,C.a([],e))
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
d.ae(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bR(u,u.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.M()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cs.j(0.9).gp(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mz
d.ae(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
ar(d){return!0}}
B.Vr.prototype={
R(){return new B.bjF(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjF.prototype={
a_(){this.a1()
this.lb()},
lt(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PB[l.e],i=D.PB[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mw,k,k,k,new B.eoj(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqD(f,g,v,k),A.f1),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gu(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i5,A.L,k,k)
o=B.Gu(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IL,A.L,k,k),A.bB,C.d(p+": "+B.Gu(w*2)+" km wide. "+r+": "+B.Gu(h*2)+" km wide.",k,k,k,k,k,k,A6.Tg,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bru,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PB[m]
r.push(new B.dA(w.a,l.e===m,new B.eok(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PB[m]
w.push(new B.dA(s.a,l.f===m,new B.eol(l,m),k,C.b0(s.c),k))}return B.jG(A.bV,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bqD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.M()
w.r=D.Wk.gp(0)
d.aZ(new C.a9(0,0,0+h,0+g),w)
v=new C.eL()
v.dB(6)
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
w=new B.eVT(d)
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
d.ae(l,n+3,w)
k=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.f0r,s.a),A.a4,A.cg,i,A.eh,A.ce)
k.eI()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a5(d,l.ad(0,new C.u(-w/2,h)))
j=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.f3L,t.a),A.a4,A.cg,i,A.eh,A.ce)
j.eI()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
ar(d){return!0}}
B.aKS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwf.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btX()}}
B.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwt.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buv()}}
B.aLt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwv.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buy()}}
B.Pd.prototype={}
B.TL.prototype={
R(){return B.hJE()}}
B.bil.prototype={
a_(){this.a1()
this.lb()},
lt(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fj(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dDD())},
aYO(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6G()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pd(t,u,1.2,new C.vx(1,30+A.cI.aj()*40,0.9,0.7).iy()))
B.lf("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6G(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dDr(),C.U(m).k("K<1,N>")).fa(0,A.uS),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mw,n,n,n,new B.dDs(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dDt(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fqP(s)+" Suns"
t=B.hz(A.bu,s,"Mass",1,0,new B.dDv(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDw(o),n,A.bu,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDx(o),n,A.bu,n),new B.dA("Milky Way core (4 million)",!1,new B.dDy(o),n,A.bu,n),new B.dA("M87 (6.5 billion)",!1,new B.dDz(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lN:D.FZ
return B.jG(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dDA(o),n,A.bu,n),new B.dA("Bent light",r,new B.dDB(o),n,A.bu,n),new B.dA("Music",q,new B.dDC(o),p,A.bu,n),new B.fh(A.jY,"Clear",new B.dDu(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adY(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eXp,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,L.zs,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9b.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.M()
w.r=D.bez.gp(0)
b2.aZ(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6G()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=S.QM
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.x1,A.fx,d)
n.toString
k=Math.cos(a4)
$.W()
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
$.W()
b1=C.M()
b1.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cKX,null).av(0,C.bT(u,b0)))
b2.ae(u,b0,b1)
b1=C.M()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.M()
b1.b=A.ae
b1.c=1
b1.r=A.bu.j(0.55).gp(0)
b2.ae(u,s,b1)
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
o.z=G.mz
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
B.aek.prototype={}
B.UE.prototype={
R(){var w=x.r,v=x.g
return new B.biN(new C.cs(null,x.A),new B.OJ(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.biN.prototype={
a_(){this.a1()
this.Zz()
this.lb()},
Zz(){var w,v,u,t,s,r,q,p,o=this,n=new C.eL()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aek(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hb()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aek(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
ctU(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e2o
k.cx=D.e2r
w=new C.eL()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aek(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bR(s,s.gM(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bR(u,u.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lt(d){var w,v,u,t,s,r,q,p=this
p.e.fj(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcl())
r=t.ex(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dUG(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mw,r,r,r,new B.dUw(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.ber(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ag.a6P,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d0I[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUx(s,u),r,A.h1,r))}l.push(new B.dA("Collide",s.ch,new B.dUy(s),A.xW,A.bV,r))
o=C.a([new B.eQ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hz(A.h1,""+n,"Arms",6,2,new B.dUz(s),n)
l=s.r
A.d.v(o,C.a([n,B.hz(A.h1,A.k.aa(l,1),"Winding",6,0.8,new B.dUA(s),l)],q))}n=s.as
o.push(B.hz(A.h1,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dUB(s),n))
n=s.ax
o.push(B.hz(A.h1,A.k.aa(n,1)+"x","Speed",4,0,new B.dUC(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lN:D.FZ
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dUD(s),r,A.bu,r),new B.dA("You are here",l,new B.dUE(s),r,A.aM,r),new B.dA("Music",w,new B.dUF(s),t,A.h1,r)],q),r,r))
return B.jG(A.h1,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b_,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.ber.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.M()
w.r=D.bgA.gp(0)
a3.aZ(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eL()
v.dB(3)
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
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c8M,a0).av(0,C.bT(o,a2)))
a3.ae(o,a2,t)}m=new B.d98(a1.as)
a2=n*0.3
t=C.M()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.h2.j(0.85),A.aH.j(0.3),A.K],x.O),a0,a0).av(0,C.bT(o,a2)))
a3.ae(o,a2,t)
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
l.r=new H.mM(1,r,q>200?0.45:0.55,1).iy().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=C.M()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ae(g,9,a2)
f=C.i1(a0,a0,a0,a0,D.eUt,A.a4,A.cg,a0,A.eh,A.ce)
f.eI()
f.a5(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bhM.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bcJ.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.M()
w.r=A.h2.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.io.gp(0)
a3.ae(a1,5,w)}},
ar(d){return!0}}
B.Vn.prototype={
R(){return new B.bjE(new C.cs(null,x.A),new B.OJ(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjE.prototype={
a_(){this.a1()
this.lb()},
lt(d){var w,v,u,t=this
t.e.fj(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bt(w*4)
if(u!==A.k.bt(t.as))B.lf("bell",60+u*4,500,0.35)
t.as=u}},
gcpC(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcg3(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mw,q,q,q,new B.eny(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bpT(r,q),A.f1),r.d),1)
if(r.f==="seasons")w=r.gcpC()
else{w=r.gcg3()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tf,A.L,q,q),A.f,q,q,q,q,q,q,q,K.agZ,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.y6:A.iV
t=r.Q
s=t?A.lN:D.FZ
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.enz(r),A.yk,A.bt,q),new B.dA("Moon phases",n==="moon",new B.enA(r),A.vs,A.bt,q),new B.dA(u,!1,new B.enB(r),v,A.bt,q),new B.dA("Music",t,new B.enC(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hz(A.bt,D.d02[A.o.F(A.k.bt(n*12),12)],"Month",1,0,new B.enD(r),n)
v=r.z
A.d.v(s,C.a([n,B.hz(A.bt,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.enE(r),v)],p))}else{p=r.w
s.push(B.hz(A.bt,""+(A.k.bt(p*29.5)+1),"Day of month",1,0,new B.enF(r),p))}p=r.y
s.push(B.hz(A.bt,A.k.aa(p,1)+"x","Speed",4,0.2,new B.enG(r),p))
return B.jG(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bpT.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.M()
b8.r=D.Ao.gp(0)
b9.aZ(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eL()
w.dB(4)
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
u=C.cm(p,n*2,o*2)
t=C.M()
t.b=A.ae
t.c=1
t.r=A.b3.gp(0)
b9.hN(u,t)
t=C.M()
t.saq(D.ec4.av(0,C.bT(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).ex(0,p.aC(0,l).gcl())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.bev.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.k_(C.bT(A.J,k)))
b9.qr(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.M()
b6.saq(D.ecd.av(0,C.bT(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.M()
t.c=2
t.r=A.c7.gp(0)
b9.bA(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.M()
b5.r=A.c7.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.i1(b4,b4,b4,b4,C.dn(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQ8,b5),A.a4,A.cg,b4,A.eh,A.ce)
f.eI()
f.a5(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.M()
r.b=A.ae
r.c=1
r.r=A.b3.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.M()
r.saq(new C.bS(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.bah,D.aeQ],x.O),D.cSA,b4).av(0,C.bT(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b7H.gp(0)
b9.ae(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.k_(C.bT(a1,a2)))
b9.qr(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bS.gp(0)
b9.aZ(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).ex(0,a1.aC(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.arY[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aS.j(0.45).gp(0)
a7.z=A.jk
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b7C.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.k_(C.bT(a8,a9)))
b9.qr(0,b6)
s=s.w
b1=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aBO(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBO(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bS.gp(0)
b9.aO(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b3.gp(0)
b9.ae(a8,a9,b8)
b3=C.i1(b4,b4,b4,b4,D.eUu,A.a4,A.cg,b4,A.eh,A.ce)
b3.eI()
b3.a5(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
B.aKo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bw7.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btr()}}
B.aKN.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bwe.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.btR()}}
B.aLp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
B.bws.prototype={
q(){var w,v,u
for(w=this.fn$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fm$
w===$&&C.c()
w.q()
this.buu()}}
var z=a.updateTypes(["~()","R(tk)","R(a3U)","az<~>()","R(C6)","H(tk,H)","N(N,tk)","R(C2)","R(YJ)","R(aaU)","R(uW)","R(a2x)","R(ni)","R(a_f)","R(abH)","H(H)","TR()","Us()","TH()","UG()","UZ()","V0()","TQ()","Vk()","VA()","Vl()","Vh()","VH()","TP()","VM()","R(mw)","Vb()","Vg()","aep(Y,H)","adg(Y,H)","~(a3<@,@>)","H(C2,C2)","n(e9)","R(aef)","R(a_Y)","R(Cg)","R(abo)","R(adk)","R(ab7)","H(H,qE)","H(H,C6)","n(qE)","~(qE,ai<n>,H)","qE?(C6)","R(qE)","r(n,a_L)","R(Pu)","~(Ag)","R(abe)","N(H?)","VO()","R(Fs)","R(acw)","N(H)","Ut()","N(Pd)","R(a9O)","TM()","a7M()","~(AQ,n,u,w,N)","~(n,tk)","Ve()","UU(Y)","MX(Y)","Ua(Y,bq<N>,bq<N>)","VS()","UA()","TN()","Ur()","Vc()","Vq()","VL()","Va()","~(n)","cq(aaB)","R(aaA)","UH()","Vz()","UI()","TL()","UE()","Vr()","Vn()","Uc()","R(Pd)","~(b9)"])
B.fsZ.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fjx.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.fpX.prototype={
$1(d){var w
if(!this.a.Lm(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fpY.prototype={
$1(d){return d.x},
$S:z+1}
B.fsW.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fsX.prototype={
$1(d){var w
if(!this.a.Lm(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fsY.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e4T.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e4U.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.y(this.b,this.c))},
$S:0}
B.e4V.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ia)}},
$S:9}
B.e55.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e56.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e51.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e5_.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e50(w,this.b,e)))},
$S:1829}
B.e50.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e52.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVG().aj1(0,u[1],u[2],u[3])
u[4].bI(0,new B.e4Y(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e4Z(w.a,v,w.f,w.r))},
$S:0}
B.e4Y.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:201}
B.e4Z.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bt(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e53.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVG().ajP(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e4X(w.a,v,w.e,w.f))},
$S:0}
B.e4X.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bt(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e54.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e4W(w,this.b))},
$S:0}
B.e4W.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e59.prototype={
$0(){var w=this.a
return w.m(new B.e58(w))},
$S:0}
B.e58.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e5a.prototype={
$0(){var w=this.a
return w.m(new B.e57(w))},
$S:0}
B.e57.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e5b.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.N7()},
$S:0}
B.e5c.prototype={
$0(){return this.a.XF(this.b)},
$S:0}
B.e5d.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.N7():w.aUC()},
$S:2}
B.e5e.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.N7():w.aUC()},
$S:0}
B.ekS.prototype={
$2(d,e){return d+e},
$S:1830}
B.elb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ela(w,d))},
$S:128}
B.ela.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.elc.prototype={
$0(){},
$S:0}
B.eld.prototype={
$0(){},
$S:0}
B.ekU.prototype={
$0(){return this.a.m(new B.ekT(this.b,this.c))},
$S:0}
B.ekT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ekJ.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.ekK.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.ekL.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.ekM.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.ekN.prototype={
$1(d){return this.a.db===d},
$S:32}
B.ekO.prototype={
$1(d){return this.a.db=d},
$S:28}
B.ekP.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.ekQ.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:28}
B.ekR.prototype={
$0(){var w=this.a
return w.m(w.gavt())},
$S:0}
B.ekH.prototype={
$1(d){return this.a.$1(!0)},
$S:80}
B.ekI.prototype={
$1(d){return this.a.$1(!1)},
$S:127}
B.ekG.prototype={
$1(d){return this.a.$1(!1)},
$S:190}
B.el4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bg7(o,p),n)
w=this.b
v=B.byP("WORLD",w.a,w.c)
u=B.byP("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c7:A.b1
t=B.byP("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.C_[o.db].d?A.c7:A.c
q=x.p
s=C.a([v,u,t,B.byP("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byP("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hB,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bCh(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rb[w].a+".":"You landed on every world!"
v=C.a([new B.fh(A.ms,"Again",new B.el_(o),A.c,p),new B.fh(A.pO,"Rebuild",new B.el0(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fh(A.iU,"Next world",new B.el1(o),A.b1,p))
n.push(B.hfH("Perfect landing!",w,A.b1,v))}if(o.as==="crashed")n.push(B.hfH("Crash!",o.at,A.c7,C.a([new B.fh(A.ms,"Try again",new B.el2(o),A.b1,p),new B.fh(A.pO,"Rebuild",new B.el3(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.r,n,p)},
$S:64}
B.el_.prototype={
$0(){var w=this.a
return w.m(w.gavt())},
$S:0}
B.el0.prototype={
$0(){var w=this.a
return w.m(new B.ekX(w))},
$S:0}
B.ekX.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.el1.prototype={
$0(){var w=this.a
return w.m(new B.ekW(w))},
$S:0}
B.ekW.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.el2.prototype={
$0(){var w=this.a
return w.m(w.gavt())},
$S:0}
B.el3.prototype={
$0(){var w=this.a
return w.m(new B.ekV(w))},
$S:0}
B.ekV.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.el5.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.ekZ(v,w))},
$S:0}
B.ekZ.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.el6.prototype={
$1(d){return this.a.y=d},
$S:8}
B.el7.prototype={
$1(d){return this.a.Q=d},
$S:8}
B.el8.prototype={
$1(d){return this.a.z=d},
$S:8}
B.el9.prototype={
$0(){var w=this.a
return w.m(new B.ekY(w))},
$S:0}
B.ekY.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dE4.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hb2
if(q==null)q=$.hb2=B.cEe()
w=3
return C.b(C.iK(C.a([q,$.qN().beH("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kw(0,C.cP(J.q(s,1)))
q.m(new B.dE3(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:49}
B.dE3.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dDH.prototype={
$0(){return this.a.bTv(C.aU(J.q(this.b,"group")))},
$S:0}
B.dDI.prototype={
$1(d){return A.a.aT(A.o.fS(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:329}
B.dE5.prototype={
$0(){return B.a7L("kick",0.25)},
$S:0}
B.dDJ.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dDK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dDL.prototype={
$0(){return B.a7L("kick",0.5)},
$S:0}
B.dDM.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dDO.prototype={
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
u=w}if(u.cx!=null&&!A.d.b5(u.d.e,new B.dDN(u)))u.cx=null
u.go=0},
$S:0}
B.dDN.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axc(d)},
$S:z+11}
B.dDE.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dDF.prototype={
$0(){var w=this.a
return w.m(w.gc2K())},
$S:0}
B.dDG.prototype={
$0(){return this.a.agE(null)},
$S:0}
B.dDV.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dDW.prototype={
$0(){return this.a.cy1(this.b.a)},
$S:0}
B.dDX.prototype={
$0(){return this.a.agE(this.b)},
$S:0}
B.dDY.prototype={
$1(d){var w=this.a
return w.m(new B.dDU(w,d))},
$S:6}
B.dDU.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dDZ.prototype={
$0(){var w=this.a
return w.m(new B.dDT(w,this.b))},
$S:0}
B.dDT.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dE_.prototype={
$0(){var w=this.a
return w.m(new B.dDS(w))},
$S:0}
B.dDS.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(new B.dDR(w))},
$S:0}
B.dDR.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.JU},
$S:0}
B.dE1.prototype={
$0(){var w=this.a
return w.m(new B.dDQ(w))},
$S:0}
B.dDQ.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXb()
else w.p2=null},
$S:0}
B.dE2.prototype={
$0(){var w=this.a
return w.m(new B.dDP(w))},
$S:0}
B.dDP.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c_B.prototype={
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
B.c_C.prototype={
$1(d){var w=new C.rD([],[]).py(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:602}
B.fdL.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:231}
B.fdM.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:231}
B.fdN.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:231}
B.fdU.prototype={
$1(d){return!J.q(d,0)},
$S:231}
B.fdV.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:231}
B.fdW.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:231}
B.dGf.prototype={
$1(d){return this.a.asb(0)},
$S:9}
B.dFU.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hWL(),C.U(w).k("K<1,H>")).fK(0)},
$S:0}
B.dFX.prototype={
$1(d){return""+d},
$S:78}
B.dGg.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dFS.prototype={
$1(d){return this.a.asb(this.b)},
$S:9}
B.dFT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avW(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mv(0,d,a1.m_(0.15,0.3))
u=a1.mv(0,d,a1.m_(0.15,0.62))
t=a1.mv(0,"and",a1.m_(0.48,0.46))
s=a1.mv(0,a0,a1.m_(0.82,0.46))
a1=t.a
w.push(new B.ni(v.a,a1,0))
w.push(new B.ni(u.a,a1,1))
w.push(new B.ni(a1,s.a,0))
break
case 1:v=a1.mv(0,d,a1.m_(0.12,0.25))
u=a1.mv(0,d,a1.m_(0.12,0.65))
r=a1.mv(0,"xor",a1.m_(0.46,0.25))
q=a1.mv(0,"and",a1.m_(0.46,0.65))
p=a1.avV(0,a0,a1.m_(0.82,0.25),0)
o=a1.avV(0,a0,a1.m_(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.ni(a1,n,0))
m=u.a
w.push(new B.ni(m,n,1))
l=q.a
w.push(new B.ni(a1,l,0))
w.push(new B.ni(m,l,1))
w.push(new B.ni(n,p.a,0))
w.push(new B.ni(l,o.a,0))
break
case 2:k=a1.mv(0,"clock",a1.m_(0.15,0.4))
j=a1.mv(0,"not",a1.m_(0.45,0.65))
s=a1.mv(0,a0,a1.m_(0.82,0.3))
i=a1.mv(0,"buzzer",a1.m_(0.82,0.65))
a1=k.a
w.push(new B.ni(a1,s.a,0))
n=j.a
w.push(new B.ni(a1,n,0))
w.push(new B.ni(n,i.a,0))
break
default:h=a1.mv(0,d,a1.m_(0.12,0.25))
g=a1.mv(0,d,a1.m_(0.12,0.7))
f=a1.mv(0,"nor",a1.m_(0.5,0.25))
e=a1.mv(0,"nor",a1.m_(0.5,0.7))
s=a1.mv(0,a0,a1.m_(0.86,0.25))
a1=f.a
w.push(new B.ni(g.a,a1,0))
n=e.a
w.push(new B.ni(n,a1,1))
w.push(new B.ni(h.a,n,0))
w.push(new B.ni(a1,n,1))
w.push(new B.ni(a1,s.a,0))}},
$S:0}
B.dFY.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avW(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.C2(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mv(0,w.e,o.m_(0.86,0.5))},
$S:0}
B.dFN.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dFO.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dFP.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dFQ.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dFR.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ac_(this.c)
if(v.ax)B.Bs("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dFZ.prototype={
$0(){},
$S:0}
B.dG_.prototype={
$0(){return A.d.cB(this.a.e,this.b)},
$S:0}
B.dG0.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dFW.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dFV(v))
w.cy=null},
$S:0}
B.dFV.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dFM.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mv(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dG9.prototype={
$0(){var w=this.a
return w.m(new B.dG8(w))},
$S:0}
B.dG8.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGa.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c4,C.jv(C.b3(w,w,w,new B.baf(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dG3(v),w,w,w,new B.dG4(v),new B.dG5(v),new B.dG6(v),w,w,w,w,w,w,w,w,w,w,new B.dG7(v),w,w,w,!1,A.a8)},
$S:35}
B.dG7.prototype={
$1(d){return this.a.c4n(d.b)},
$S:50}
B.dG5.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ccP(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awJ(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dG6.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dG4.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bX4(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dG1(w))
u=t.as
u.toString
v.push(new B.ni(u,w.a,w.b))
C.jO()}}t.z=t.as=null},
$S:37}
B.dG1.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dG3.prototype={
$1(d){return this.a.auK(d.b)},
$S:342}
B.dGb.prototype={
$0(){return this.a.byc(this.b.a)},
$S:0}
B.dGc.prototype={
$0(){return this.a.asb(this.b.a)},
$S:0}
B.dGd.prototype={
$0(){var w=this.a
return w.m(new B.dG2(w))},
$S:0}
B.dG2.prototype={
$0(){var w=this.a
w.avW(0)
w.ay=null},
$S:0}
B.dGe.prototype={
$0(){return this.a.ctR(this.b)},
$S:0}
B.cL0.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cg,v,A.eh,A.ce)
u.eI()
return u},
$S:318}
B.dM7.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dM6.prototype={
$0(){return this.a.d=null},
$S:0}
B.dM9.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bYR()},
$S:120}
B.dM8.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.feb.prototype={
$0(){return D.dWR},
$S:z+55}
B.fec.prototype={
$0(){return D.dv0},
$S:z+59}
B.fed.prototype={
$0(){return D.drS},
$S:z+62}
B.feo.prototype={
$0(){return D.dWg},
$S:z+63}
B.feq.prototype={
$0(){return D.dBo},
$S:z+66}
B.fer.prototype={
$0(){return D.duW},
$S:z+88}
B.fes.prototype={
$0(){return D.duZ},
$S:z+17}
B.fet.prototype={
$0(){return D.do2},
$S:z+18}
B.feu.prototype={
$0(){return D.dxu},
$S:z+19}
B.fev.prototype={
$0(){return D.dz6},
$S:z+20}
B.few.prototype={
$0(){return D.dz8},
$S:z+21}
B.fee.prototype={
$0(){return D.du6},
$S:z+22}
B.fef.prototype={
$0(){return D.dE7},
$S:z+23}
B.feg.prototype={
$0(){return D.dVY},
$S:z+24}
B.feh.prototype={
$0(){return D.dU0},
$S:z+25}
B.fei.prototype={
$0(){return D.dCN},
$S:z+26}
B.fej.prototype={
$0(){return D.dW5},
$S:z+27}
B.fek.prototype={
$0(){return D.du5},
$S:z+28}
B.fel.prototype={
$0(){return D.dWf},
$S:z+29}
B.fem.prototype={
$0(){return D.du7},
$S:z+16}
B.fen.prototype={
$0(){return D.dzo},
$S:z+31}
B.fep.prototype={
$0(){return D.dCM},
$S:z+32}
B.eVq.prototype={
$2(d,e){return new B.aep($.bDi()[e],new B.eVp(e,this.a),null)},
$S:z+33}
B.eVp.prototype={
$0(){var w=this.a,v=F.aD_.h(0,$.bDi()[w].a)
$.ar7=v==null?"music":v
C.a5(this.b,!1).c8(C.e8(new B.eVn(w),!1,null,x.H))},
$S:0}
B.eVn.prototype={
$1(d){return $.bDi()[this.a].e.$0()},
$S:39}
B.eVr.prototype={
$2(d,e){return new B.adg(D.avQ[e],new B.eVo(this.a,e),null)},
$S:z+34}
B.eVo.prototype={
$0(){return this.a.d.$1(D.avQ[this.b])},
$S:0}
B.eV6.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eV5.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eV4.prototype={
$1(d){var w=this
return new C.e0(new B.eV3(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eV3.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fev,A.at,D.fkX,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bD(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Dd,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iG,!0,A.a4,d,A.am,d,d,d,d),d),A.ab,new C.bD(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Dd,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iG,!0,A.a4,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dfd[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fy,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eV1(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f4q,d,d,d,d,d,d,d,d,d),A.an,new C.cn(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new C.a7(d,44,C.cz(n,d,d,d,d,A.aO,!1),d),A.aA],w))}v.push(C.bH(A.zA,new B.eV2(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bn(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cz(v,d,A5.B_,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
B.eV1.prototype={
$0(){var w=this
return w.a.$1(new B.eV0(w.b,w.c,w.d))},
$S:0}
B.eV0.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eV2.prototype={
$0(){var w=this,v=w.a
v.m(new B.eV_(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eV_.prototype={
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
B.eVe.prototype={
$0(){var w=this.a
return w.m(new B.eVd(w))},
$S:0}
B.eVd.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eVf.prototype={
$0(){return B.qM(this.b,this.a.f,"scene")},
$S:0}
B.eVg.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYW().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bS(D.aVA,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bY],x.O),v,v),A.n),A.bd)},
$S:326}
B.eVh.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(A.A,C.c6(new C.h3(C.a([u.gtQ(),u.gYW()],x.dS)),new B.eVc(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:235}
B.eVc.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtQ().x
r===$&&C.c()
w=r<0.9?1:1-B.bqc(r,0.9,0.98)
v=s.gYW().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gavX().a){case 0:s=s.bxo(t.b,r,u,t.c)
break
case 1:s=s.bNH(t.b,r,u,t.c)
break
case 2:s=s.cyx(t.b,r,u,t.c)
break
case 3:s=s.bAj(t.b,r,u,t.c)
break
case 4:s=s.bDv(t.b,r,u,t.c)
break
case 5:s=s.bCI(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:216}
B.eVi.prototype={
$2(d,e){var w=C.auy(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cGY(u,A.bF,v,3.5)
u=this.a
w=u.gtQ().x
w===$&&C.c()
return C.a9A(C.kX(null,null,null,1,0,new B.eVb(u),A.k.D(w,0,1)),v)},
$S:1834}
B.eVb.prototype={
$1(d){var w=this.a
w.gtQ().sp(0,d)
if(w.as)w.m(new B.eV7(w))},
$S:6}
B.eV7.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eVj.prototype={
$0(){var w=this.a
w.gtQ().sp(0,0)
w.afn()},
$S:0}
B.eVk.prototype={
$1(d){var w=this.a
w.m(new B.eVa(w,d))
if(w.as)w.afn()},
$S:6}
B.eVa.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eVl.prototype={
$0(){var w=this.a
w.m(new B.eV9(w,this.b))
w.gtQ().sp(0,0)
if(w.as)w.afn()},
$S:0}
B.eV9.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eVm.prototype={
$0(){var w=this.a
return w.m(new B.eV8(w,this.b))},
$S:0}
B.eV8.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eUY.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1835}
B.eUZ.prototype={
$1(d){return d.b},
$S:1836}
B.dfY.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dfZ.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dfV.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dfW.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dfX.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dg_.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dg0.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dg1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dg2.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dg3.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dg4.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dg5.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dg6.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dg7.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.ekc.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ek1.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ek3.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+44}
B.ek4.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+45}
B.ek7.prototype={
$1(d){var w=D.my.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
B.ek8.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.B(new C.e7(new C.cR(new C.a2(q,new B.ek9(d),p.k("a2<1>")),new B.eka(r),p.k("cR<1,qE?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.ek9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eka.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.ek5.prototype={
$1(d){return D.my.h(0,d.b).c===D.wy},
$S:z+49}
B.ek6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ekC.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uW(0,u)
w.aHj(A.o.an(v,1000))},
$S:9}
B.ekb.prototype={
$0(){},
$S:0}
B.ejY.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
B.eke.prototype={
$1(d){var w=null,v=this.a.b
return C.bn(!0,C.v(C.a([A.N,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.my.h(0,v).b,D.my.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fvV,w,C.d(D.my.h(0,v).a,w,w,w,w,w,w,A.ho,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,U.amL,w,w,w,w,new B.ekd(d),!1,w,w,w,w,w,w,w,D.fnG,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.ekd.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ekg.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e5b],x.p)
for(w=0;w<6;++w){v=D.aw8[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bPf,u,u,u,u,new B.ekf(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.ky,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.ho,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bn(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cz(s,u,D.buZ,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.ekf.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.ek0.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.ejZ(d),w,w),C.bK(!1,A.Dh,w,w,!0,w,w,new B.ek_(d),w,w)],x.p),w,w,F.n0,D.fl7,w,w,w,w,D.fnY,w)},
$S:19}
B.ejZ.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.ek_.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ekA.prototype={
$0(){var w=this.a
return w.m(new B.ekz(w))},
$S:0}
B.ekz.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ekB.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mc(new B.ekq(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b4d:t
v=C.a([C.b3(u,t,t,new B.bg5(w,v,new B.ekr(r),new B.eks(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.ekt(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFb())
return C.aE(A.c4,C.jv(new C.an(A.W,t,A.b_,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.eku(r),t,r.gce7(),t,new B.ekv(r),new B.ekw(r),new B.ekx(r),t,t,t,t,t,t,t,t,t,t,new B.eky(r),t,t,t,!1,A.a8)},
$S:35}
B.ekq.prototype={
$0(){return this.a.ab5(this.b)},
$S:0}
B.eky.prototype={
$1(d){return this.a.cwj(d.b)},
$S:50}
B.ekw.prototype={
$1(d){return this.a.ce8(d.b)},
$S:42}
B.ekx.prototype={
$1(d){return this.a.ce9(d.b)},
$S:18}
B.ekv.prototype={
$1(d){return this.a.b_s()},
$S:37}
B.eku.prototype={
$1(d){return this.a.abM(d.b)},
$S:342}
B.ekr.prototype={
$0(){return this.a.z},
$S:690}
B.eks.prototype={
$0(){return this.a.Q},
$S:734}
B.ekt.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJt()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.fiA,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f3b,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:60}
B.ek2.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.C(A.e4,C.A(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tf,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.To,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1838}
B.ekm.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lP()},
$S:0}
B.ekn.prototype={
$0(){var w=this.a
return w.m(new B.ekl(w))},
$S:0}
B.ekl.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eko.prototype={
$0(){var w=this.a
return w.m(new B.ekk(w))},
$S:0}
B.ekk.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ekp.prototype={
$0(){var w=this.a
return w.m(new B.ekj(w))},
$S:0}
B.ekj.prototype={
$0(){return this.a.r=!0},
$S:0}
B.eki.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.my.gdK(D.my),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.crd(p[r]))
return new C.C(I.agc,C.v(C.a([new C.C(V.ahU,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ekh.prototype={
$0(){return this.a.c4s(this.b)},
$S:0}
B.dfU.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cg,v,A.eh,A.ce)
u.eI()
return u},
$S:318}
B.ew9.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.ew7(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.ew8())},
$S:9}
B.ew7.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ew8.prototype={
$0(){},
$S:0}
B.evL.prototype={
$0(){},
$S:0}
B.evK.prototype={
$0(){},
$S:0}
B.evU.prototype={
$0(){return B.qM(this.b,this.a.d,"spark-painter")},
$S:0}
B.evW.prototype={
$1(d){return this.a.aXO(0,d.b)},
$S:42}
B.ew_.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aQU(u)
v.c7u(u)
return null},
$S:18}
B.evV.prototype={
$1(d){return this.a.aXN()},
$S:37}
B.ew0.prototype={
$1(d){return this.a.aXO(0,d.b)},
$S:23}
B.ew1.prototype={
$1(d){return this.a.aXN()},
$S:50}
B.ew2.prototype={
$0(){var w=this.a
return w.m(new B.evT(w,this.b))},
$S:0}
B.evT.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ew3.prototype={
$0(){var w=this.a
return w.m(new B.evS(w))},
$S:0}
B.evS.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ew4.prototype={
$0(){var w=this.a
return w.m(new B.evR(w,this.b))},
$S:0}
B.evR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ew5.prototype={
$1(d){var w=this.a
return w.m(new B.evQ(w,d))},
$S:6}
B.evQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ew6.prototype={
$0(){var w=this.a
return w.m(new B.evP(w))},
$S:0}
B.evP.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.evX.prototype={
$0(){var w=this.a
return w.m(new B.evO(w))},
$S:0}
B.evO.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.evY.prototype={
$0(){var w=this.a
return w.m(new B.evN(w))},
$S:0}
B.evN.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.evZ.prototype={
$0(){var w=this.a
return w.m(new B.evM(w,this.b))},
$S:0}
B.evM.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eCJ.prototype={
$0(){return B.qM(this.b,this.a.d,"title")},
$S:0}
B.eCK.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIy().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZ1(v[t],t,s,q,u))
return new C.C(A.fz,C.bY(A.fQ,w,A.rM,0,0),null)},
$S:713}
B.eCL.prototype={
$1(d){return this.a.m(new B.eCI())},
$S:2}
B.eCI.prototype={
$0(){},
$S:0}
B.eCM.prototype={
$0(){var w=this.a
w.m(new B.eCH(w,this.b))
w=w.gIy()
w.iw(0,0)
w.cH(0)},
$S:0}
B.eCH.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eCN.prototype={
$0(){var w=this.a
return w.m(new B.eCG(w,this.b))},
$S:0}
B.eCG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eCO.prototype={
$0(){var w=this.a
return w.m(new B.eCF(w))},
$S:0}
B.eCF.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eCP.prototype={
$0(){var w=this.a
return w.m(new B.eCE(w,this.b))},
$S:0}
B.eCE.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eCQ.prototype={
$0(){var w=this.a.gIy()
w.iw(0,0)
w.cH(0)},
$S:0}
B.eCR.prototype={
$1(d){var w=this.a
return w.m(new B.eCD(w,d))},
$S:6}
B.eCD.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.egQ.prototype={
$1(d){return d.a.aC(0,this.a).gcl()<16},
$S:z+13}
B.egR.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcl()<16||d.a.aC(0,w).gcl()>this.a.r.galO()*2.2},
$S:z+13}
B.egE.prototype={
$0(){return B.qM(this.b,this.a.d,"orbits")},
$S:0}
B.egF.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gad_()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2e:q.chK(u,q.gaV4())
return new C.ev(C.aE(A.c4,C.b3(r,r,r,new B.bks(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.egB(q),new B.egC(q),new B.egD(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:200}
B.egC.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.egD.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.egB.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_f(u,v.gaV4(),v.Q,v.b11(),C.a([],x.g)))
C.jO()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.egG.prototype={
$1(d){var w=this.a
return w.m(new B.egA(w,d))},
$S:6}
B.egA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.egI.prototype={
$1(d){var w=this.a
return w.m(new B.egz(w,d))},
$S:6}
B.egz.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.egJ.prototype={
$1(d){var w=this.a
return w.m(new B.egy(w,d))},
$S:6}
B.egy.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.egK.prototype={
$0(){var w=this.a
return w.m(new B.egx(w))},
$S:0}
B.egx.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.egL.prototype={
$0(){var w=this.a
return w.m(new B.egw(w))},
$S:0}
B.egw.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.egM.prototype={
$0(){var w=this.a
return w.m(new B.egv(w))},
$S:0}
B.egv.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.egN.prototype={
$0(){var w=this.a
return w.m(w.gctu())},
$S:0}
B.egO.prototype={
$0(){var w=this.a
return w.m(w.gbFp())},
$S:0}
B.egP.prototype={
$0(){var w=this.a
return w.m(new B.egu(w))},
$S:0}
B.egu.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqu(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hb())}},
$S:0}
B.egH.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.eCa.prototype={
$1(d){return this.a.fR$-d.b>6000},
$S:735}
B.eCb.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.eC9(d),C.U(w).k("a2<1>")).gM(0)>=3},
$S:735}
B.eC9.prototype={
$1(d){return d.a.aC(0,this.a.a).gcl()<14},
$S:z+53}
B.eC_.prototype={
$0(){return B.qM(this.b,this.a.d,"swarm")},
$S:0}
B.eC0.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.brY(v.e,v.f,v.ax,v.at,v.ay,v.fR$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eBX(v),new B.eBY(v),new B.eBZ(v),w,w,w,w,w,w,w,w,new B.eBP(v),new B.eBQ(v),new B.eBR(v),w,w,w,!1,A.a8),v.d)},
$S:200}
B.eBY.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.eBZ.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eBX.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eBQ.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.y(v,w.fR$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lf("flute",7,500,0.3)},
$S:23}
B.eBR.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eBP.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eC1.prototype={
$0(){var w=this.a
return w.m(new B.eBW(w,this.b))},
$S:0}
B.eBW.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eC2.prototype={
$0(){var w=this.a
return w.m(new B.eBV(w,this.b))},
$S:0}
B.eBV.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eC3.prototype={
$0(){var w=this.a
return w.m(new B.eBU(w))},
$S:0}
B.eBU.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eC4.prototype={
$1(d){var w=this.a
return w.m(new B.eBT(w,d))},
$S:6}
B.eBT.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eC5.prototype={
$1(d){var w=this.a
return w.m(new B.eBS(w,d))},
$S:6}
B.eBS.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eC6.prototype={
$1(d){var w=this.a
return w.m(new B.eBO(w,d))},
$S:6}
B.eBO.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eC7.prototype={
$1(d){var w=this.a
return w.m(new B.eBN(w,d))},
$S:6}
B.eBN.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eC8.prototype={
$1(d){var w=this.a
return w.m(new B.eBM(w,d))},
$S:6}
B.eBM.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFo.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFn(w,d))},
$S:128}
B.dFn.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.ju(v==null?A.rg:v)
v=v.gaf(v)
while(v.C()){u=v.gT(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFp.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFq.prototype={
$1(d){var w=d.d
return w!=null&&this.a.YX(w)>0},
$S:z+14}
B.dFe.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.az5()},
$S:0}
B.dFh.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eI(w,F.ke,new C.C(A.bC,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i5,w,w,w),A.S,C.E(C.ie(!0,w,w,A.y,T.aNx,new B.dFg(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:47}
B.dFg.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFf(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bV:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b3:A.dq,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.ja
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f6R,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:76}
B.dFf.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dFl.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gac2()
o=C.b3(q,q,q,new B.b9W(p.d,w,v,p.gc4z(),q),o)
v=p.bWI("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHU()
t=p.as>=p.gHU()?A.b1:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.au_("GOAL",""+w+" / "+u,t),p.au_("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hB,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lB)
if(p.Q&&!p.y)s.push(D.aVi)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b1:A.c7).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b1:A.c7,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.an,C.d("You blasted "+p.as+" dots. The goal was "+p.gHU()+".",q,q,q,q,q,q,A.hD,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eYp,q,q,q))}u.push(A.aA)
t=C.a([new B.fh(A.ms,"Try again",new B.dFi(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fh(A.iU,"Next level",new B.dFj(p),A.b1,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.VI,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c4,new C.an(A.W,q,A.b_,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFk(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dFk.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fR$
E.dF(180,"",200,1,0.4,"sine")
C.jh()},
$S:23}
B.dFi.prototype={
$0(){var w=this.a
return w.m(w.gb3G())},
$S:0}
B.dFj.prototype={
$0(){var w=this.a
return w.aXP(w.r+1)},
$S:0}
B.dFm.prototype={
$0(){var w=this.a
return w.m(w.gb3G())},
$S:0}
B.cKy.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.M()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=C.M()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=C.M()
v.r=f.j(0.25).gp(0)
v.z=A.lp
w.ae(d,e*0.5,v)},
$S:736}
B.ecj.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcMA()?this.a.cpG(w,v,d.b):w.aC(0,v).gcl())<24},
$S:z+56}
B.ecI.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.ecx.prototype={
$0(){var w=this.a
return w.m(new B.eco(w))},
$S:0}
B.eco.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ecy.prototype={
$0(){return B.qM(this.b,this.a.d,"marble-music")},
$S:0}
B.ecz.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bh_(v.e,v.f,v.at,v.ax,v.fR$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ecu(v),new B.ecv(v),new B.ecw(v),w,w,w,w,w,w,w,w,w,w,new B.ecn(v),w,w,w,!1,A.a8),v.d)},
$S:200}
B.ecn.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZH(w)
u.e.push(new B.Fs(w,w,v,u.aOx(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}if(u.x==="erase")u.aR9(d.b)},
$S:50}
B.ecv.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.ecw.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aR9(d.b)},
$S:18}
B.ecu.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZH(t.ad(0,w).ex(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fs(w,t,v,u.aOx(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.ecA.prototype={
$0(){var w=this.a
return w.m(new B.ect(w,this.b))},
$S:0}
B.ect.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.ecB.prototype={
$0(){var w=this.a
return w.m(new B.ecs(w,this.b))},
$S:0}
B.ecs.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ecC.prototype={
$0(){var w=this.a
return w.m(new B.ecr(w,this.b))},
$S:0}
B.ecr.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ecD.prototype={
$1(d){var w=this.a
return w.m(new B.ecq(w,d))},
$S:6}
B.ecq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ecE.prototype={
$0(){var w=this.a
return w.m(new B.ecp(w))},
$S:0}
B.ecp.prototype={
$0(){return this.a.axB("stairs")},
$S:0}
B.ecF.prototype={
$0(){var w=this.a
return w.m(new B.ecm(w))},
$S:0}
B.ecm.prototype={
$0(){return this.a.axB("pinball")},
$S:0}
B.ecG.prototype={
$0(){var w=this.a
return w.m(new B.ecl(w))},
$S:0}
B.ecl.prototype={
$0(){return this.a.axB("random")},
$S:0}
B.ecH.prototype={
$0(){var w=this.a
return w.m(new B.eck(w))},
$S:0}
B.eck.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.egd.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ege.prototype={
$0(){var w=this.b,v=new B.ad1(this.a.a,this.c)
v.c=w.fR$
return w.e.push(v)},
$S:0}
B.egl.prototype={
$0(){var w=this.a
return w.m(new B.egk(w))},
$S:0}
B.egk.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.egm.prototype={
$0(){return B.qM(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.egn.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aPU()}w=u.w
return new C.ev(C.aE(A.c4,C.b3(v,v,v,new B.bkt(u.e,u.gaXR(),6,u.gcjP(),u.gcq6(),u.fR$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.egj(u),v,v,v,!1,A.a8),u.d)},
$S:200}
B.egj.prototype={
$1(d){return this.a.c4B(d.b)},
$S:50}
B.ego.prototype={
$1(d){var w=this.a
return w.m(new B.egi(w,d))},
$S:6}
B.egi.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.egp.prototype={
$0(){var w=this.a
return w.m(new B.egh(w,this.b))},
$S:0}
B.egh.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.egq.prototype={
$0(){var w=this.a
return w.m(new B.egg(w,this.b))},
$S:0}
B.egg.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.egr.prototype={
$0(){var w=this.a
return w.m(w.gbJp())},
$S:0}
B.egs.prototype={
$0(){var w=this.a
return w.m(new B.egf(w))},
$S:0}
B.egf.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad1(v.aB(6),v.aj()))},
$S:0}
B.egt.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.ftf.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:139}
B.efI.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.efH(w,d))},
$S:128}
B.efH.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
B.efu.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:139}
B.efo.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8P(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.efp.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.eft.prototype={
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
p=D.vW.h(0,v[u].a).a
o=w.aiA(u)
v=D.vW.h(0,v[t].a).a
n=w.aiA(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vR("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaXX()&&w.x.J(0,w.d)){B.vR("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a4(m).k("co.E"))
B.vO("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.efs.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a4(t).k("cu<1>"),r=this.b,q=s.k("a2<J.E>"),p=C.B(new C.a2(new C.cu(t,s),new B.efq(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bI(0,new B.efr(r,v))
t.a9(0)
t.v(0,v)
A.d.cB(u.e,r)
u.r=null},
$S:0}
B.efq.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.F(d,100)===w},
$S:32}
B.efr.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:139}
B.efC.prototype={
$1(d){return""+d.b+" "+D.vW.h(0,d.a).c.toLowerCase()},
$S:403}
B.efD.prototype={
$0(){var w=this.a
return w.m(new B.efB(w))},
$S:0}
B.efB.prototype={
$0(){var w=this.a;++w.d
w.aw1(0)},
$S:0}
B.efE.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c4,C.b3(w,w,w,new B.bhH(v.e,v.f,v.r,v.gcAC(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efx(v),new B.efy(v),new B.efz(v,e),w,w,w,w,w,w,w,w,w,w,new B.efA(v),w,w,w,!1,A.a8)},
$S:35}
B.efA.prototype={
$1(d){return this.a.c4Y(d.b)},
$S:50}
B.efy.prototype={
$1(d){var w=this.a
return w.w=w.aXY(d.b)},
$S:42}
B.efz.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.efv(w,v,d,this.b))},
$S:18}
B.efv.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.efx.prototype={
$1(d){return this.a.w=null},
$S:37}
B.efF.prototype={
$0(){var w=this.a
return w.m(new B.efw(w,this.b))},
$S:0}
B.efw.prototype={
$0(){var w=this.a
w.d=this.b
w.aw1(0)},
$S:0}
B.efG.prototype={
$0(){return this.a.c4S(0,this.b.a)},
$S:0}
B.do3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).ex(0,Math.max(h.gcl(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:139}
B.dOb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOa(w,d))},
$S:128}
B.dOa.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dO0.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.auC[w.aB(4)]
return A.d.fX(u)},
$S:22}
B.dO_.prototype={
$1(d){return B.fXb(d)==="*"},
$S:3}
B.dO1.prototype={
$1(d){return d!==this.a},
$S:3}
B.dNZ.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vO("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vR("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8A()[r]+" codes for "+C.t(D.Cc.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b_Z()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.Cc.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vR("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dO9.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dq:e,u=C.m(8),t=f?C.I(A.b3,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b3:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.n9,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1842}
B.dO4.prototype={
$1(d){var w=D.diW.h(0,d)
return w==null?A.c:w},
$S:737}
B.dO5.prototype={
$0(){var w=this.a
return w.m(new B.dO3(w,this.b))},
$S:0}
B.dO3.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avk()},
$S:0}
B.dO6.prototype={
$0(){var w=this.a
return w.m(new B.dO2(w))},
$S:0}
B.dO2.prototype={
$0(){var w=this.a;++w.e
w.avk()},
$S:0}
B.dO7.prototype={
$0(){return this.a.aXW(this.b)},
$S:0}
B.dO8.prototype={
$0(){return this.a.aXW(this.b)},
$S:0}
B.dR0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dR_(w,d))},
$S:128}
B.dR_.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dQO.prototype={
$0(){},
$S:0}
B.dQN.prototype={
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
B.dQP.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dQT.prototype={
$1(d){var w=this.a
return w.m(new B.dQS(w,d))},
$S:6}
B.dQS.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dQU.prototype={
$1(d){var w=this.a
return w.m(new B.dQR(w,d))},
$S:6}
B.dQR.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dQV.prototype={
$1(d){var w=this.a
return w.m(new B.dQQ(w,d))},
$S:6}
B.dQQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dQW.prototype={
$0(){return this.a.a9M("drought")},
$S:0}
B.dQX.prototype={
$0(){return this.a.a9M("disease")},
$S:0}
B.dQY.prototype={
$0(){return this.a.a9M("foxes")},
$S:0}
B.dQZ.prototype={
$0(){return this.a.a9M("rabbits")},
$S:0}
B.d3g.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eL()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kr(new C.ep(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.cg,new C.jq(1),l,l,l,l,A.ce,l)
n.eI()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1844}
B.d3i.prototype={
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
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.M()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fA
this.c.aO(u,l)},
$S:1845}
B.d3h.prototype={
$3(d,e,f){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.cg,w,A.eh,A.ce)
v.eI()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1846}
B.bFm.prototype={
$2(d,e){return d+e.a*e.b},
$S:1847}
B.fnW.prototype={
$2(d,e){return e.a-d.a},
$S:1848}
B.dBz.prototype={
$2(d,e){return d+e},
$S:73}
B.dBM.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dBL(v,A.k.D((v.gvL()-w[v.e].guO())/Math.max(w[v.e].guO(),8),-1,1)*0.32,u))},
$S:9}
B.dBL.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dBN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dBK(w,d))},
$S:128}
B.dBK.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
B.dBA.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dBF.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1849}
B.dBG.prototype={
$0(){var w=this.a
return w.m(new B.dBE(w))},
$S:0}
B.dBE.prototype={
$0(){var w=this.a;++w.e
A.d.h_(w.f,0,5,0)},
$S:0}
B.dBH.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c4,C.b3(w,w,w,new B.b90(v.w,this.b.a,v.f,v.gvL()===v.d[v.e].guO(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dBD(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dBD.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cww(v-1)},
$S:50}
B.dBI.prototype={
$0(){var w=this.a
return w.m(new B.dBC(w,this.b))},
$S:0}
B.dBC.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h_(w.f,0,5,0)},
$S:0}
B.dBJ.prototype={
$0(){var w=this.a
return w.m(new B.dBB(w))},
$S:0}
B.dBB.prototype={
$0(){return A.d.h_(this.a.f,0,5,0)},
$S:0}
B.cD5.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bA(C.cm(new C.u(d,s),20,w),A.rt)
$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
B.fmX(v,"1",new C.u(d,s),A.bi,11)}},
$S:1850}
B.dV3.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dV2(w,v))},
$S:9}
B.dV2.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dV4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dV1(w,d))},
$S:128}
B.dV1.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
B.dUU.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dUY.prototype={
$0(){var w=this.a
return w.m(new B.dUX(w))},
$S:0}
B.dUX.prototype={
$0(){return this.a.r++},
$S:0}
B.dUZ.prototype={
$0(){var w=this.a
return w.m(new B.dUW(w,this.b))},
$S:0}
B.dUW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dV_.prototype={
$1(d){var w=this.a
return w.m(new B.dUV(w,d))},
$S:6}
B.dUV.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dV0.prototype={
$1(d){return this.a.c4Z(this.b,d)},
$S:6}
B.dbb.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bOE(d,e,f,g),m=this.b
$.W()
w=C.M()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bT(d,e+6)))
m.aO(n,w)
w=C.M()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aO(n,w)
w=C.M()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hI.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1851}
B.dbc.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fmX(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1852}
B.dFL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dFK(w,d))},
$S:128}
B.dFK.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dFt.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jF(90-(w-65)):d},
$S:14}
B.dFC.prototype={
$1(d){return this.a.m(new B.dFB())},
$S:2}
B.dFB.prototype={
$0(){},
$S:0}
B.dFD.prototype={
$1(d){return this.a.m(new B.dFA())},
$S:2}
B.dFA.prototype={
$0(){},
$S:0}
B.dFE.prototype={
$0(){var w=this.a
return w.m(new B.dFz(w))},
$S:0}
B.dFz.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWD()},
$S:0}
B.dFF.prototype={
$0(){var w=this.a
return w.m(new B.dFy(w))},
$S:0}
B.dFy.prototype={
$0(){return this.a.f=0},
$S:0}
B.dFG.prototype={
$0(){var w=this.a
return w.m(new B.dFx(w))},
$S:0}
B.dFx.prototype={
$0(){return this.a.f=1},
$S:0}
B.dFH.prototype={
$0(){var w=this.a
return w.m(new B.dFw(w,this.b))},
$S:0}
B.dFw.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dFI.prototype={
$1(d){var w=this.a
return w.m(new B.dFv(w,d))},
$S:6}
B.dFv.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dFJ.prototype={
$1(d){var w=this.a
w.m(new B.dFu(w,d))
if(w.ga93()&&w.Q.J(0,w.x)){B.vR("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a4(w).k("co.E"))
B.vO("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFu.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLh.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLs.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLn.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLt.prototype={
$1(d){return this.a.Lm(d)&&!d.x},
$S:z+1}
B.bLu.prototype={
$2(d,e){return Math.max(d,this.a.azz(e))},
$S:z+6}
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
$S:74}
B.bLy.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLz(w))},
$S:z+5}
B.bLz.prototype={
$0(){return this.a.a},
$S:109}
B.bLj.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLk(w))},
$S:z+5}
B.bLk.prototype={
$0(){return this.a.a},
$S:109}
B.bLi.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLl.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLm(w))},
$S:z+5}
B.bLm.prototype={
$0(){return this.a.a},
$S:109}
B.bLg.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLA.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLo.prototype={
$1(d){return d!==this.b&&this.a.aFE(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLr.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLq.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLp.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGy.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGz.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cjV.prototype={
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
$S:201}
B.fEE.prototype={
$1(d){var w
$.W()
w=C.M()
w.r=d.gp(0)
return w},
$S:1853}
B.fEG.prototype={
$2(d,e){var w
$.W()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1854}
B.fEH.prototype={
$5(d,e,f,g,h){return C.bA(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1855}
B.fEF.prototype={
$3(d,e,f){var w
$.W()
w=C.M()
w.saq(new C.a8(A.b0,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1856}
B.bGc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGb(w))},
$S:0}
B.bGb.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGe.prototype={
$0(){return C.a([],x.ey)},
$S:1857}
B.bGf.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:396}
B.bGg.prototype={
$0(){var w,v,u
J.bDq(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cf(v))if(B.fXE(v.b))w.aZW(v)
else w.ZX(v)
else{u=w.a.c.bbw(v)
w.adc(u==null?"The "+$.q8().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGa.prototype={
$1(d){return new C.e0(new B.bG8(this.a,this.b),null)},
$S:21}
B.bG8.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bG9(this.a,v,e),t=$.q8(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.l1,w,w,w),q=C.aH(w,w,w,w,D.bG_,w,w,w,new B.bG4(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bn(!0,new C.C(A.xA,C.v(C.a([r,A.at,D.fwS,A.S,C.A(C.a([q,C.E(C.kX(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bMA,w,w,w,new B.bG5(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bK(!1,D.faV,w,w,!0,w,w,new B.bG6(u),w,w),C.bK(!1,A.zA,w,w,!0,w,w,new B.bG7(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:85}
B.bG9.prototype={
$1(d){var w=this.a
w.m(new B.bG2(this.b,d))
this.c.$1(new B.bG3())
w.a.toString},
$S:6}
B.bG2.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bG3.prototype={
$0(){},
$S:0}
B.bG4.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bG5.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bG6.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bG7.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bGv.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adc("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adc("\u26a0 Overloaded! The "+$.q8().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zt(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adc("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGw.prototype={
$0(){},
$S:0}
B.bFG.prototype={
$0(){},
$S:0}
B.bGx.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c4,C.b3(p,p,p,new B.aia(w,v,u,t,s,r==null?A.iY:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGo(o),new B.bGp(o),new B.bGq(o),p,p,p,p,p,p,p,p,p,p,new B.bGr(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b3w)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f9a,C.E(C.d(w,p,p,p,p,p,p,D.f1r,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b8P,p,u,v,p,p,A.n),p,p,p,p,A.nU,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGs(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aY0(C.A(C.a([D.bwZ,new B.fh(A.FK,"Cut wire",new B.bGt(o),A.c7,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.ceG(w),p,p,10,10,p,p))}return C.jv(new C.an(A.W,p,A.b_,A.r,n,p),A.r,p)},
$S:356}
B.bGp.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b5S(s)
if(r!=null){t.m(new B.bGm(t,r,d))
return}w=t.b_C(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bGn(t,w))}},
$S:42}
B.bGm.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGq.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGk(w,d))
else if(w.w!=null)w.m(new B.bGl(w,d.b.ad(0,w.x)))},
$S:18}
B.bGk.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGl.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGo.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b5S(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajP(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ada()},
$S:37}
B.bGr.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_C(v)
if(u!=null){w.m(new B.bGi(w,u))
if(D.lU.ai(0,u.b))w.cp9(u)
w.a.toString
return}w.m(new B.bGj(w,w.cBr(v)))},
$S:50}
B.bGi.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGj.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGs.prototype={
$0(){var w=this.a
return w.m(new B.bGh(w))},
$S:0}
B.bGh.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGt.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.ada()},
$S:0}
B.bFH.prototype={
$0(){return this.a.bno(this.b)},
$S:0}
B.bG_.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eX2,w,w,w),C.E(C.kX(this.b.d,w,w,g,h,new B.bG1(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1858}
B.bG1.prototype={
$1(d){var w=this.a
w.m(new B.bG0(this.b,d))
w.a.toString},
$S:6}
B.bG0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFN.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.ada()},
$S:0}
B.bFO.prototype={
$0(){var w=this.a
return w.m(new B.bFM(w))},
$S:0}
B.bFM.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFP.prototype={
$0(){this.a.m(new B.bFL(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bFL.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bFS.prototype={
$0(){return this.a.aZW(this.b)},
$S:0}
B.bFT.prototype={
$0(){return this.a.ZX(this.b)},
$S:0}
B.bFU.prototype={
$0(){return this.a.a0B(this.b)},
$S:0}
B.bFV.prototype={
$0(){var w=this.a
w.m(new B.bFK(this.b,this.c))
w.a.toString},
$S:0}
B.bFK.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bFW.prototype={
$0(){var w=this.a
w.m(new B.bFJ(this.b,this.c))
w.a.toString},
$S:0}
B.bFJ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bFX.prototype={
$0(){var w=this.a
w.m(new B.bFI(this.b,this.c))
w.a.toString},
$S:0}
B.bFI.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bFY.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFZ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFQ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFR.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fdX.prototype={
$1(d){return d.aFi("bulb")},
$S:z+2}
B.fdY.prototype={
$1(d){return d.pI(0,"switch")&&d.aFi("bulb")},
$S:z+2}
B.fdZ.prototype={
$1(d){return A.d.b5(d.a,new B.fdK())},
$S:z+2}
B.fdK.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fe_.prototype={
$1(d){return d.pI(0,"resistor")&&A.d.b5(d.a,new B.fdJ())},
$S:z+2}
B.fdJ.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fe0.prototype={
$1(d){return!d.pI(0,"battery")&&d.aFi("bulb")},
$S:z+2}
B.fdO.prototype={
$1(d){return A.d.b5(d.a,new B.fdI())},
$S:z+2}
B.fdI.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fdP.prototype={
$1(d){return A.d.b5(d.a,new B.fdH())},
$S:z+2}
B.fdH.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fdQ.prototype={
$1(d){return A.d.b5(d.a,new B.fdG())},
$S:z+2}
B.fdG.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fdR.prototype={
$1(d){var w=d.a
return A.d.b5(w,new B.fdE())&&A.d.b5(w,new B.fdF())&&d.pI(0,"buck")},
$S:z+2}
B.fdE.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fdF.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fdS.prototype={
$1(d){var w=d.a
return A.d.b5(w,new B.fdC())&&A.d.b5(w,new B.fdD())},
$S:z+2}
B.fdC.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fdD.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fdT.prototype={
$1(d){return A.d.b5(d.a,new B.fdB())},
$S:z+2}
B.fdB.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dR8.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dRh.prototype={
$1(d){var w=this.a.d
return w.aFE(d)&&w.Cf(d)},
$S:z+1}
B.dRi.prototype={
$1(d){return d.x},
$S:z+1}
B.dRj.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRk.prototype={
$0(){},
$S:0}
B.dR7.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fpO,A.at,D.faR,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PF[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bF,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kx,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f2b,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cC,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dR6(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eI(q,F.ke,new C.C(A.bQ,new C.a7(340,q,C.cz(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:47}
B.dR6.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dR5(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dR5.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bgB()},
$S:0}
B.dR3.prototype={
$1(d){return new B.UU(this.a.d,null)},
$S:z+67}
B.dR4.prototype={
$0(){},
$S:0}
B.dRg.prototype={
$1(d){return new C.e0(new B.dRf(this.a),null)},
$S:21}
B.dRf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahl(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b1:A.aS
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fnb,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,C.bw(C.m(4),C.m_(A.bF,m,m,5,m,w.a/11,new C.lT(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fdT)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ah.Td,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.zw,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRd(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dq,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7h,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nU,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRe(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bn(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cz(u,m,A5.B_,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:85}
B.dRd.prototype={
$0(){var w=this.a
w.m(new B.dRb(w))
this.b.$1(new B.dRc())
w.EH()},
$S:0}
B.dRb.prototype={
$0(){var w=this.a
$.ahl()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRc.prototype={
$0(){},
$S:0}
B.dRe.prototype={
$0(){var w=this.a
w.m(new B.dR9(w,this.b))
this.c.$1(new B.dRa())
w.EH()},
$S:0}
B.dR9.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRa.prototype={
$0(){},
$S:0}
B.dRm.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.dRn.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m9("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).c8(C.e8(new B.dRl(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRl.prototype={
$1(d){C.ll("construction")
return Am.hzI()},
$S:z+68}
B.dRo.prototype={
$0(){return B.hlQ(this.a,"ELECTRONICS LAB",this.b,A.aS)},
$S:0}
B.dRp.prototype={
$0(){var w=this.a
return w.m(w.d.gcSB())},
$S:0}
B.dRq.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grw(v))
w.EH()},
$S:0}
B.cAD.prototype={
$2(d,e){var w=null,v=this.a.gaw2().x
v===$&&C.c()
return C.b3(w,w,w,new B.b88(v,w),A.au)},
$S:67}
B.cAC.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cU(v,u,v+e,u))
w.E(new C.cU(v,u,v,u+e))
w.E(new C.cU(v,u,v-e,u))
w.E(new C.cU(v,u,v,t))
w.E(new C.bF())
t=C.M()
t.r=A.c.j(f).gp(0)
this.a.aO(w,t)},
$S:703}
B.fJh.prototype={
$3(d,e,f){return new B.Ua(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fJi.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.ik(A.A,g,null,new C.bf(C.cH(A.ct,e,null),new C.bo(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.dN4.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.dN3.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bWx(o):q.bzm(o,p),m=x.p
p=C.a([C.qb(new C.nb(n,new C.cx(p,x.aC)),A.pF,C.rJ(),A.bc,A.bc,new B.dN1())],m)
n=t.d
if(n){w=A.k.F(q.gRn(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bwL)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b1:A.aB,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.di(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.n4,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.ut)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JZ,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.w8)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JZ,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dN2(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b_,A.r,p,s),A.aq)},
$S:294}
B.dN1.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.ik(A.A,d,null,new C.bf(e,new C.bo(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:365}
B.dN2.prototype={
$0(){var w=this.a
return w.m(new B.dN0(w))},
$S:0}
B.dN0.prototype={
$0(){return this.a.e=null},
$S:0}
B.dN_.prototype={
$0(){var w=this.a
return w.m(new B.dMZ(w,this.b))},
$S:0}
B.dMZ.prototype={
$0(){return this.a.e=A.d.cJ(F.k_,this.b)},
$S:0}
B.dMY.prototype={
$0(){var w=this.a
return w.m(new B.dMX(w))},
$S:0}
B.dMX.prototype={
$0(){return this.a.e=0},
$S:0}
B.dMT.prototype={
$0(){var w=this.a
return w.m(new B.dMS(w))},
$S:0}
B.dMS.prototype={
$0(){return this.a.e=null},
$S:0}
B.dMW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fvl,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f84,p,p,p),1),C.d(A.a.aT(A.o.u(C.dj(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qj,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.ld,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buh(w.gRn(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b3,A.q,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.aac,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dMV(w),p,p,p,p,p,p,!1,A.a8),A.eb,C.p(p,p,A.f,p,p,A.aai,p,12,p,p,p,p,p,12),A.eb,C.p(p,p,A.f,p,p,D.aZY,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k_[o].a,p,1,A.a2,p,p,p,A.a78,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cE,p,p,p,24,p,p,A.fp,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.C(D.bty,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.ae8(r,w.gRn(),p),A.f1),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dbW,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b3,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.jf,w.au1(F.k_[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lf,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b_,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.L5,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:294}
B.dMV.prototype={
$0(){var w=this.a
return w.m(new B.dMU(w))},
$S:0}
B.dMU.prototype={
$0(){return this.a.e=null},
$S:0}
B.e7T.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e7S(w,d))},
$S:128}
B.e7S.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fXK(v)},
$S:0}
B.e7U.prototype={
$0(){},
$S:0}
B.e7J.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fXK(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e7K.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvj().r){C.jO()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vR("click",s.c+s.d,60,0.4)
if(B.hm_(r.gvj(),q).b.a===r.gvj().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vO("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bs("bell",D.aoh,700,0.45)
for(q=r.gvj().c,q=C.ec(q,q.r,C.a4(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.y(new C.u((A.o.F(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e7N.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c4,C.b3(s,s,s,new B.bga(r.gvj(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e7L(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aP4,s,s,s),C.d(""+u.a+"/"+r.gvj().c.a+" \u2605   mirrors "+w.a+"/"+r.gvj().r,s,s,s,s,s,s,V.a6S,s,s,s)],t),A.m,s,A.hB,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fie("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b1,C.a([new B.fh(A.iU,"Next level",new B.e7M(r),A.b1,s)],t)))
return new C.an(A.W,s,A.b_,A.r,w,s)},
$S:64}
B.e7L.prototype={
$1(d){return this.a.c5k(d.b)},
$S:50}
B.e7M.prototype={
$0(){var w=this.a
return w.adh(w.d+1)},
$S:0}
B.e7O.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grw(v))},
$S:0}
B.e7P.prototype={
$0(){var w=this.a
return w.adh(w.d+1)},
$S:0}
B.e7Q.prototype={
$0(){var w=this.a
return w.adh(w.d-1)},
$S:0}
B.e7R.prototype={
$0(){return this.a.adh(this.b)},
$S:0}
B.dgg.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:738}
B.dgj.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.M()
u.r=(f?A.hh:A.aL).gp(0)
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
$S:1860}
B.dgh.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:458}
B.dgi.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:458}
B.e8b.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e8a(w,d))},
$S:128}
B.e8a.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e8c.prototype={
$0(){},
$S:0}
B.e7X.prototype={
$1(d){return d===0},
$S:117}
B.e85.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a70,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c7:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a6S,s,s,s)],v),A.m,s,A.hB,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dq:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b3,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bqT,w,s),C.E(C.A(C.a([C.E(new C.C(A.bT,C.v(C.a([t,A.an,C.d(q?"TARGET":"TARGET: "+r.gcwz(),s,s,s,s,s,s,D.aPU,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.C(A.bT,C.v(C.a([C.E(C.b3(s,s,s,new B.bgp(r.f,s),A.f1),1),A.an,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aPU,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fie("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fh(A.iV,"Start",new B.e82(r),A.b1,s)],v)))}if(r.z==="result")w.push(B.fie(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fh(A.iU,"Next colour",new B.e83(r),A.b1,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fie("Finished! "+q,u,A.b1,C.a([new B.fh(A.ms,"Play again",new B.e84(r),A.b1,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.e82.prototype={
$0(){var w=this.a
return w.m(new B.e7Z(w))},
$S:0}
B.e7Z.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aw6()},
$S:0}
B.e83.prototype={
$0(){var w=this.a
return w.m(w.gc5i())},
$S:0}
B.e84.prototype={
$0(){var w=this.a
return w.m(new B.e7Y(w))},
$S:0}
B.e7Y.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aw6()},
$S:0}
B.e86.prototype={
$1(d){var w=this.a
return w.m(new B.e81(w,d))},
$S:6}
B.e81.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e87.prototype={
$1(d){var w=this.a
return w.m(new B.e80(w,d))},
$S:6}
B.e80.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e88.prototype={
$1(d){var w=this.a
return w.m(new B.e8_(w,d))},
$S:6}
B.e8_.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e89.prototype={
$0(){var w=this.a
return w.m(w.gc5j())},
$S:0}
B.feE.prototype={
$0(){return D.dYj},
$S:z+70}
B.feF.prototype={
$0(){return D.dvy},
$S:z+71}
B.feG.prototype={
$0(){return D.ds4},
$S:z+72}
B.feH.prototype={
$0(){return D.duY},
$S:z+73}
B.feI.prototype={
$0(){return D.dzU},
$S:z+74}
B.feJ.prototype={
$0(){return D.dU2},
$S:z+75}
B.feK.prototype={
$0(){return D.dWe},
$S:z+76}
B.feL.prototype={
$0(){return D.dzd},
$S:z+77}
B.cex.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.cey.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hpr(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dk,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Tc,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lw,m,m,C.v(C.a([new C.x(r.a,m,D.f6H,m,m,m,m,m,m,m,m,m),A.cS,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cew(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bY(A.bz,j,A.bq,14,14)},
$S:166}
B.cew.prototype={
$0(){return C.a5(this.a,!1).c8(C.e8(new B.cev(this.b),!1,null,x.H))},
$S:0}
B.cev.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eHb.prototype={
$0(){var w=this.a
return w.w=w.d[w.b36(w.f)]},
$S:0}
B.eH7.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eH6.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c5)
w.w=""},
$S:0}
B.eH9.prototype={
$0(){var w=this.a
return w.m(new B.eH8(w,this.b))},
$S:0}
B.eH8.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cB(w,this.b)},
$S:0}
B.eHa.prototype={
$1(d){return this.a.aYq(0)},
$S:2}
B.dTm.prototype={
$0(){return B.Bs("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTn.prototype={
$0(){},
$S:0}
B.dTh.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTj.prototype={
$0(){return this.a.aYs(this.b)},
$S:0}
B.dTk.prototype={
$0(){var w=this.a
return w.m(new B.dTi(w))},
$S:0}
B.dTi.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTl.prototype={
$0(){var w=this.a
return w.aYs(w.d)},
$S:0}
B.dEb.prototype={
$2(d,e){return d+e},
$S:88}
B.dEc.prototype={
$0(){},
$S:0}
B.dE6.prototype={
$2(d,e){return d+e},
$S:88}
B.dE9.prototype={
$0(){var w=this.a
return w.m(new B.dE8(w,this.b))},
$S:0}
B.dE8.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEa.prototype={
$0(){var w=this.a
return w.m(new B.dE7(w))},
$S:0}
B.dE7.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dQD.prototype={
$0(){return B.qM(this.b,this.a.d,"drawing")},
$S:0}
B.dQE.prototype={
$1(d){var w=this.a
return w.m(new B.dQC(w,d))},
$S:42}
B.dQC.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHm(u,v,t))},
$S:0}
B.dQF.prototype={
$1(d){var w=this.a
return w.m(new B.dQB(w,d))},
$S:18}
B.dQB.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dQG.prototype={
$1(d){var w=this.a
return w.m(new B.dQA(w,d))},
$S:23}
B.dQA.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHm(u,v,t))},
$S:0}
B.dQH.prototype={
$0(){var w=this.a
return w.m(new B.dQz(w,this.b))},
$S:0}
B.dQz.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dQI.prototype={
$1(d){var w=this.a
return w.m(new B.dQy(w,d))},
$S:6}
B.dQy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQJ.prototype={
$0(){var w=this.a
return w.m(new B.dQx(w))},
$S:0}
B.dQx.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dQK.prototype={
$0(){var w=this.a
return w.m(new B.dQw(w))},
$S:0}
B.dQw.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dQL.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.dQM.prototype={
$0(){var w=this.a
return w.m(new B.dQv(w))},
$S:0}
B.dQv.prototype={
$0(){var w=this.a
w.x=D.av6[A.o.F(A.d.cJ(D.av6,w.x)+1,4)]},
$S:0}
B.edy.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
B.edz.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bs("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.edx(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bs("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.edx.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.edA.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.edw(w))},
$S:11}
B.edw.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.edE.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mA(new B.edC(v,e),w,A.bc,A.pF,w,w,new C.bo(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edD(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:76}
B.edD.prototype={
$0(){return this.a.c6f(this.b)},
$S:0}
B.edC.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dm(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fA(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bVk
if(o)v=q.a.r.t(0,q.b)?A.b1.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b1:A.b3,A.q,1)
if(o){r=C.dm()
r.fA(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f44,p,p,p),p,r,!0)
u=r}else u=D.foz
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.edF.prototype={
$0(){var w=this.a
return w.m(new B.edB(w,this.b))},
$S:0}
B.edB.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arm()},
$S:0}
B.edG.prototype={
$0(){var w=this.a
return w.m(w.gbHX())},
$S:0}
B.eob.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eoc.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.eo9.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eoa.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.eo8(w))},
$S:11}
B.eo8.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eod.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.eoe.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eof.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYr()},
$S:11}
B.eog.prototype={
$0(){return this.a.c6l(this.b)},
$S:0}
B.eCt.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:70}
B.eCC.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kM,C.A(C.a([v,A.ab,new C.dq(1,A.cn,C.f4(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1862}
B.eCy.prototype={
$1(d){return this.a.m(new B.eCx())},
$S:2}
B.eCx.prototype={
$0(){},
$S:0}
B.eCz.prototype={
$0(){var w=this.a
return w.m(new B.eCw(w,this.b))},
$S:0}
B.eCw.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eCA.prototype={
$1(d){var w=this.a
return w.m(new B.eCv(w,d))},
$S:6}
B.eCv.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eCB.prototype={
$0(){var w=this.a
return w.m(new B.eCu(w))},
$S:0}
B.eCu.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.ecd.prototype={
$0(){},
$S:0}
B.ece.prototype={
$0(){},
$S:0}
B.ec6.prototype={
$0(){var w=this.a
return w.m(new B.ec5(w))},
$S:0}
B.ec5.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7L("hat",0.6)},
$S:0}
B.ec7.prototype={
$0(){var w=this.a
return w.m(new B.ec4(w))},
$S:0}
B.ec4.prototype={
$0(){this.a.y=1.1
B.lf("bell",36,200,0.4)},
$S:0}
B.ec8.prototype={
$0(){var w=this.a
return w.m(new B.ec3(w))},
$S:0}
B.ec3.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.lf("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
B.ec9.prototype={
$0(){var w=this.a
return w.m(new B.ec2(w,this.b))},
$S:0}
B.ec2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eca.prototype={
$1(d){var w=this.a
return w.m(new B.ec1(w,d))},
$S:6}
B.ec1.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.ecb.prototype={
$1(d){var w=this.a
return w.m(new B.ec0(w,d))},
$S:6}
B.ec0.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.ecc.prototype={
$1(d){var w=this.a
return w.m(new B.ec_(w,d))},
$S:6}
B.ec_.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crp.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.crq.prototype={
$0(){var w=this.a
return B.hlQ(this.b,w.c,w.e,w.d)},
$S:0}
B.fN7.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eXz,v,v,v)
return C.ej(C.a([C.bK(!1,D.fdY,v,v,!0,v,v,new B.fN6(d),v,v)],x.p),v,v,F.n0,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:19}
B.fN6.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.crl.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crk.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crr.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crm.prototype={
$0(){var w=this.a
A.d.W(w.fn$,this.b.bf())
if(w.c!=null)this.c.$0()},
$S:0}
B.cro.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kY$.a)/1e6,0,0.04)
w.kY$=d
w.fR$=A.o.an(v,1000)
w.lt(u)
if(w.c!=null)w.m(new B.crn())},
$S:9}
B.crn.prototype={
$0(){},
$S:0}
B.cet.prototype={
$0(){var w=this
return B.lf(w.a,w.b,w.c,w.d)},
$S:1}
B.dW4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dW3(w,d))},
$S:z+79}
B.dW3.prototype={
$0(){return this.a.cqQ(this.b)},
$S:0}
B.dVx.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:717}
B.dVv.prototype={
$0(){return this.a.id=D.a2k},
$S:0}
B.dVw.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a2<1>")
v=C.p8(new C.a2(w,new B.dVu(this.c),v),6,v.k("J.E"))
w=C.B(v,C.a4(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVu.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVt.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ej(C.a([C.bK(!1,A.p8,w,w,!0,w,w,new B.dVs(d),w,w)],x.p),w,w,F.n0,v,w,w,w,w,D.foD,w)},
$S:19}
B.dVs.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dVQ.prototype={
$0(){return B.qM(this.b,this.a.d,"earth")},
$S:0}
B.dVR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVD()
r=p.z
o=C.a([C.aE(A.c4,C.b3(q,q,q,new B.beB(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dVE(p),new B.dVF(p),new B.dVG(p),q,q,q,q,q,q,q,new B.dVH(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Ab.aaV)
w=this.b
if(w!=null)o.push(C.ao(8,p.c6X(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b_,A.r,o,q),p.d)},
$S:200}
B.dVF.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:246}
B.dVG.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVD()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:217}
B.dVE.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVD()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dVH.prototype={
$1(d){var w=this.a,v=w.c7_(d.b)
if(v!=null)w.m(new B.dVy(w,v))
else w.m(new B.dVz(w))},
$S:50}
B.dVy.prototype={
$0(){return this.a.awA(this.b)},
$S:0}
B.dVz.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dVS.prototype={
$0(){var w=this.a
w.e.bO(0,A.c5)
w.m(new B.dVD(w,this.b))},
$S:0}
B.dVD.prototype={
$0(){var w=this.a
w.id=D.a2k
w.awA(this.b)},
$S:0}
B.dVW.prototype={
$0(){var w=this.a
return w.m(new B.dVP(w))},
$S:0}
B.dVP.prototype={
$0(){var w=this.a
w.fx=null
w.asw(15,w.y,1)},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
return w.m(new B.dVO(w,this.b))},
$S:0}
B.dVO.prototype={
$0(){var w=this.b.b
return this.a.asw(w.a,w.b,w.c)},
$S:0}
B.dVY.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dVN(w,v))},
$S:0}
B.dVN.prototype={
$0(){var w=this.b.a
return this.a.awA(w[A.cI.aB(w.length)])},
$S:0}
B.dVZ.prototype={
$1(d){var w=this.a
return w.m(new B.dVM(w,d))},
$S:6}
B.dVM.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dW_.prototype={
$1(d){var w=this.a
return w.m(new B.dVL(w,d))},
$S:6}
B.dVL.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dW0.prototype={
$1(d){var w=this.a
return w.m(new B.dVK(w,d))},
$S:6}
B.dVK.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dW1.prototype={
$0(){var w=this.a
return w.m(new B.dVJ(w))},
$S:0}
B.dVJ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dW2.prototype={
$0(){var w=this.a
return w.m(new B.dVI(w))},
$S:0}
B.dVI.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dVT.prototype={
$0(){var w=this.a
return w.m(new B.dVC(w))},
$S:0}
B.dVC.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dVU.prototype={
$0(){var w=this.a
return w.m(new B.dVB(w))},
$S:0}
B.dVB.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dVV.prototype={
$0(){var w=this.a
return w.m(new B.dVA(w))},
$S:0}
B.dVA.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dVr.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOx,w,w,w),A.uw,C.d(e,w,2,A.a2,w,w,w,A.Tw,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.dVq.prototype={
$0(){var w=this.a
return w.m(new B.dVp(w))},
$S:0}
B.dVp.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dc0.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cWF,w,w),this.a),A.a4,A.cg,w,A.eh,A.ce)
v.eI()
return v},
$S:318}
B.dc1.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1863}
B.fex.prototype={
$0(){return D.dxv},
$S:z+81}
B.fey.prototype={
$0(){return D.dVX},
$S:z+82}
B.fez.prototype={
$0(){return D.dxx},
$S:z+83}
B.feA.prototype={
$0(){return D.drR},
$S:z+84}
B.feB.prototype={
$0(){return D.dxt},
$S:z+85}
B.feC.prototype={
$0(){return D.dU3},
$S:z+86}
B.feD.prototype={
$0(){return D.dU1},
$S:z+87}
B.eDm.prototype={
$0(){return C.a5(this.a,!1).lP()},
$S:0}
B.eDn.prototype={
$0(){var w=this.a
return w.m(new B.eDl(w))},
$S:0}
B.eDl.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaRm()+1,16)},
$S:0}
B.eDo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hpq(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bgx],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.N,new C.x(s.a,n,D.f11,n,A.L,n,n,n,n,2,n,n),A.cS,new C.x(s.b,n,D.f65,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.co,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eDk(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bY(A.fQ,k,A.bq,10,10)},
$S:166}
B.eDk.prototype={
$0(){return C.a5(this.a,!1).c8(C.e8(new B.eDj(this.b),!1,null,x.H))},
$S:0}
B.eDj.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.evp.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.evA.prototype={
$0(){return B.qM(this.b,this.a.d,"solar-system")},
$S:0}
B.evB.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c4,C.b3(v,v,v,new B.br4(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.evx(u),new B.evy(u),v,v,v,v,v,v,v,new B.evz(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c71(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b_,A.r,t,v),u.d)},
$S:200}
B.evx.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:246}
B.evy.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:217}
B.evz.prototype={
$1(d){var w=this.a,v=w.c74(d.b)
if(v!=null)w.aYN(v)},
$S:50}
B.evC.prototype={
$0(){var w=this.a
return w.m(new B.evw(w))},
$S:0}
B.evw.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.evD.prototype={
$0(){return this.a.aYN(this.b)},
$S:0}
B.evE.prototype={
$1(d){var w=this.a
return w.m(new B.evv(w,d))},
$S:6}
B.evv.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.evF.prototype={
$1(d){var w=this.a
return w.m(new B.evu(w,d))},
$S:6}
B.evu.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.evG.prototype={
$0(){var w=this.a
return w.m(new B.evt(w))},
$S:0}
B.evt.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.evH.prototype={
$0(){var w=this.a
return w.m(new B.evs(w))},
$S:0}
B.evs.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.evI.prototype={
$0(){var w=this.a
return w.m(new B.evr(w))},
$S:0}
B.evr.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.evJ.prototype={
$0(){var w=this.a
return w.m(new B.evq(w))},
$S:0}
B.evq.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.evo.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:329}
B.evn.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOx,w,w,w),A.uw,C.d(e,w,2,A.a2,w,w,w,A.Tw,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
B.evm.prototype={
$0(){var w=this.a
return w.m(new B.evl(w))},
$S:0}
B.evl.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eXJ.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PN,w,w),this.a),A.a4,A.cg,w,A.eh,A.ce)
v.eI()
return v},
$S:318}
B.eXK.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eXL.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dW8.prototype={
$0(){},
$S:0}
B.dWB.prototype={
$1(d){return d!=null},
$S:434}
B.dWn.prototype={
$0(){var w=this.a
return w.m(new B.dWe(w,this.b))},
$S:0}
B.dWe.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWo.prototype={
$0(){var w=this.a
return w.m(new B.dWd(w))},
$S:0}
B.dWd.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWp.prototype={
$0(){var w=this.a
return w.m(new B.dWm(w))},
$S:0}
B.dWm.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dWt.prototype={
$0(){var w=this.a
return w.m(new B.dWl(w))},
$S:0}
B.dWl.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dWu.prototype={
$1(d){var w=this.a
return w.m(new B.dWk(w,d))},
$S:6}
B.dWk.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dWv.prototype={
$0(){var w=this.a
return w.m(w.gcu1())},
$S:0}
B.dWw.prototype={
$1(d){var w=this.a
return w.m(new B.dWj(w,d))},
$S:6}
B.dWj.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dWx.prototype={
$1(d){var w=this.a
return w.m(new B.dWi(w,d))},
$S:6}
B.dWi.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWy.prototype={
$1(d){var w=this.a
return w.m(new B.dWh(w,d))},
$S:6}
B.dWh.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dWz.prototype={
$1(d){var w=this.a
return w.m(new B.dWg(w,d))},
$S:6}
B.dWg.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dWA.prototype={
$0(){var w=this.a
return w.m(new B.dWf(w))},
$S:0}
B.dWf.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dWq.prototype={
$0(){var w=this.a
return w.m(new B.dWc(w))},
$S:0}
B.dWc.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dWr.prototype={
$0(){var w=this.a
return w.m(new B.dWb(w))},
$S:0}
B.dWb.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dWs.prototype={
$0(){var w=this.a
return w.m(new B.dWa(w))},
$S:0}
B.dWa.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dW7.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c_(g,new C.o(D.bf4,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yD[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yD[q].b)+" m/s\xb2",g,D.f5s,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dq,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(A_.MV,C.b0(D.yD[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yD[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yD[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yD[q].d).j(0.6),g,g,g,3,g,A.fp,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rH,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eYK,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d8(v,new B.dW6()))a1.push(D.b3R)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dW6.prototype={
$1(d){return d==null},
$S:434}
B.dW9.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.di(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ia,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gu(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f3Q,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dW5.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9N(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b1
else u=A.a.t(u,"escapes")?A.aS:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Gu(A.k.D(r.cx.gcl()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQa,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.eoj.prototype={
$0(){return B.qM(this.b,this.a.d,"size-compare")},
$S:0}
B.eok.prototype={
$0(){var w=this.a
return w.m(new B.eoi(w,this.b))},
$S:0}
B.eoi.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eol.prototype={
$0(){var w=this.a
return w.m(new B.eoh(w,this.b))},
$S:0}
B.eoh.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eVT.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.hu(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bS(P.pe,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1z,null).av(0,C.bT(d,e)))
u.ae(d,e,w)},
$S:736}
B.dDD.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dDr.prototype={
$1(d){return d.b},
$S:z+60}
B.dDs.prototype={
$0(){return B.qM(this.b,this.a.d,"black-hole")},
$S:0}
B.dDt.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c4,C.b3(q,q,q,new B.b9b(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDp(p),q,q,q,q,q,q,q,q,q,new B.dDq(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fqP(t)+" Suns"
t=p.adY("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adY("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gu(s))+" km"),p.adY("TIME",A.k.aa(this.b*100,0)+"%"),p.adY("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ebb)
return new C.ev(new C.an(A.W,q,A.b_,A.r,r,q),p.d)},
$S:200}
B.dDq.prototype={
$1(d){return this.a.aYO(d.b)},
$S:23}
B.dDp.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYO(d.b)},
$S:18}
B.dDv.prototype={
$1(d){var w=this.a
return w.m(new B.dDo(w,d))},
$S:6}
B.dDo.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dDw.prototype={
$0(){var w=this.a
return w.m(new B.dDn(w))},
$S:0}
B.dDn.prototype={
$0(){return this.a.r=10},
$S:0}
B.dDx.prototype={
$0(){var w=this.a
return w.m(new B.dDm(w))},
$S:0}
B.dDm.prototype={
$0(){return this.a.r=21},
$S:0}
B.dDy.prototype={
$0(){var w=this.a
return w.m(new B.dDl(w))},
$S:0}
B.dDl.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dDz.prototype={
$0(){var w=this.a
return w.m(new B.dDk(w))},
$S:0}
B.dDk.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dDA.prototype={
$0(){var w=this.a
return w.m(new B.dDj(w))},
$S:0}
B.dDj.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dDB.prototype={
$0(){var w=this.a
return w.m(new B.dDi(w))},
$S:0}
B.dDi.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dDC.prototype={
$0(){var w=this.a
return w.m(new B.dDh(w))},
$S:0}
B.dDh.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dDu.prototype={
$0(){var w=this.a
return w.m(new B.dDg(w))},
$S:0}
B.dDg.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dUG.prototype={
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
$S:1864}
B.dUw.prototype={
$0(){return B.qM(this.b,this.a.d,"galaxy")},
$S:0}
B.dUx.prototype={
$0(){var w=this.a
return w.m(new B.dUv(w,this.b))},
$S:0}
B.dUv.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Zz()},
$S:0}
B.dUy.prototype={
$0(){var w=this.a
return w.m(new B.dUu(w))},
$S:0}
B.dUu.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Zz()}w.ctU()},
$S:0}
B.dUz.prototype={
$1(d){var w=this.a
return w.m(new B.dUt(w,d))},
$S:6}
B.dUt.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Zz()},
$S:0}
B.dUA.prototype={
$1(d){var w=this.a
return w.m(new B.dUs(w,d))},
$S:6}
B.dUs.prototype={
$0(){var w=this.a
w.r=this.b
w.Zz()},
$S:0}
B.dUB.prototype={
$1(d){var w=this.a
return w.m(new B.dUr(w,d))},
$S:6}
B.dUr.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dUC.prototype={
$1(d){var w=this.a
return w.m(new B.dUq(w,d))},
$S:6}
B.dUq.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dUD.prototype={
$0(){var w=this.a
return w.m(new B.dUp(w))},
$S:0}
B.dUp.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dUE.prototype={
$0(){var w=this.a
return w.m(new B.dUo(w))},
$S:0}
B.dUo.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
return w.m(new B.dUn(w))},
$S:0}
B.dUn.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d98.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1865}
B.eny.prototype={
$0(){return B.qM(this.b,this.a.d,"seasons-moon")},
$S:0}
B.enz.prototype={
$0(){var w=this.a
return w.m(new B.enx(w))},
$S:0}
B.enx.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.enA.prototype={
$0(){var w=this.a
return w.m(new B.enw(w))},
$S:0}
B.enw.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.enB.prototype={
$0(){var w=this.a
return w.m(new B.env(w))},
$S:0}
B.env.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.enC.prototype={
$0(){var w=this.a
return w.m(new B.enu(w))},
$S:0}
B.enu.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.enD.prototype={
$1(d){var w=this.a
return w.m(new B.ent(w,d))},
$S:6}
B.ent.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.enE.prototype={
$1(d){var w=this.a
return w.m(new B.ens(w,d))},
$S:6}
B.ens.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.enF.prototype={
$1(d){var w=this.a
return w.m(new B.enr(w,d))},
$S:6}
B.enr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.enG.prototype={
$1(d){var w=this.a
return w.m(new B.enq(w,d))},
$S:6}
B.enq.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLn.prototype
w.bus=w.q
w=B.aKp.prototype
w.bts=w.q
w=B.aKq.prototype
w.btt=w.q
w=B.aKv.prototype
w.bty=w.q
w=B.aMe.prototype
w.bvq=w.q
w=B.aLl.prototype
w.buq=w.q
w=B.aLu.prototype
w.buz=w.q
w=B.aLA.prototype
w.buF=w.q
w=B.aKt.prototype
w.btw=w.q
w=B.aLi.prototype
w.bun=w.q
w=B.aLx.prototype
w.buC=w.q
w=B.aLg.prototype
w.bul=w.q
w=B.aLh.prototype
w.bum=w.q
w=B.aKH.prototype
w.btL=w.q
w=B.aKl.prototype
w.bto=w.q
w=B.aKP.prototype
w.btT=w.q
w=B.awS.prototype
w.bqA=w.q
w=B.awT.prototype
w.bqB=w.q
w=B.aIS.prototype
w.brR=w.q
w=B.aKE.prototype
w.btH=w.q
w=B.aL5.prototype
w.bua=w.q
w=B.aL6.prototype
w.bub=w.q
w=B.aKr.prototype
w.btu=w.q
w=B.aKK.prototype
w.btO=w.q
w=B.aLe.prototype
w.buj=w.q
w=B.aLI.prototype
w.buN=w.q
w=B.aKQ.prototype
w.btV=w.q
w=B.aKR.prototype
w.btW=w.q
w=B.aKS.prototype
w.btX=w.q
w=B.aLq.prototype
w.buv=w.q
w=B.aLt.prototype
w.buy=w.q
w=B.aKo.prototype
w.btr=w.q
w=B.aKN.prototype
w.btR=w.q
w=B.aLp.prototype
w.buu=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDw.prototype,"gavt","c2e",0)
var r
v(r=B.aBW.prototype,"gcar","cas",35)
w(r,"gc2K","aXb",0)
w(B.aBZ.prototype,"gc4k","c4l",0)
u(B.aCf.prototype,"gc4q","c4r",52)
w(r=B.aGw.prototype,"gctA","ctB",0)
w(r,"gch8","afn",0)
w(r,"gceQ","ceR",0)
w(r,"gc4p","acY",3)
w(r=B.aDv.prototype,"gbF4","a8z",3)
w(r,"gce7","b_s",0)
w(r,"gchR","afv",3)
t(r,"gc4t","acZ",3)
w(B.aDL.prototype,"gbWe","bWf",0)
w(r=B.aDn.prototype,"gctu","ctv",0)
w(r,"gbFp","bFq",0)
w(r=B.aBY.prototype,"gb3G","az5",0)
v(r,"gc4z","YX",54)
w(r,"gc4y","ad0",3)
v(r=B.aDm.prototype,"gcjP","axO",58)
v(r,"gcq6","az0",15)
w(r,"gbJp","aPU",0)
v(r=B.aDk.prototype,"gcAC","aiA",15)
t(r,"gc4T","aw1",0)
w(r,"gcm9","cma",0)
v(r=B.aCr.prototype,"gc4U","c4V",90)
w(r,"gc4W","c4X",0)
t(r=B.a3U.prototype,"grw","a9",0)
v(r,"gcQp","amo",1)
v(r,"gcMU","Lm",1)
w(r,"gcSB","bgB",0)
s(B.aia.prototype,"gc50",0,5,null,["$5"],["qg"],64,0,0)
w(r=B.aCs.prototype,"gc51","c52",0)
w(r,"gckD","afS",3)
w(r,"gcaH","aea",3)
w(r,"gcrF","agY",3)
w(r=B.aD6.prototype,"gc5i","aw6",0)
w(r,"gc5j","aY4",0)
w(r=B.aDY.prototype,"gc6g","c6h",0)
t(r,"gc6e","aYq",0)
w(B.aDg.prototype,"gbHX","arm",0)
t(B.aDC.prototype,"gc6i","c6j",0)
v(r=B.aCD.prototype,"gc6Y","c6Z",78)
w(r,"gbMQ","bMR",0)
w(r=B.aCE.prototype,"gcu1","cu2",0)
w(r,"gc72","c73",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajj,B.FK,B.uH,B.aRi,B.a2x,B.b9e,B.c_A,B.xS,B.C2,B.ni,B.b9X,B.Ag,B.brM,B.pW,B.qE,B.C6,B.YJ,B.aef,B.a_Y,B.Cg,B.ab7,B.abo,B.adk,B.Fw,B.bkF,B.Pu,B.a_f,B.abe,B.abH,B.Fs,B.acw,B.ad1,B.t7,B.b8P,B.aR8,B.e9,B.tk,B.a9O,B.aaU,B.a3U,B.mw,B.b9Y,B.fK,B.m2,B.aVK,B.bt6,B.aHm,B.mz,B.aaA,B.aaB,B.uW,B.OK,B.xQ,B.OJ,B.bt1,B.Pd,B.aek])
u(C.hT,[B.fsZ,B.fjx,B.fpX,B.fpY,B.fsW,B.fsX,B.e4V,B.e5d,B.elb,B.ekJ,B.ekK,B.ekL,B.ekM,B.ekN,B.ekO,B.ekP,B.ekQ,B.ekH,B.ekI,B.ekG,B.el6,B.el7,B.el8,B.dDI,B.dDK,B.dDN,B.dDY,B.c_B,B.c_C,B.fdL,B.fdM,B.fdN,B.fdU,B.fdV,B.fdW,B.dGf,B.dFX,B.dGg,B.dFS,B.dFN,B.dFP,B.dFV,B.dG7,B.dG5,B.dG6,B.dG4,B.dG1,B.dG3,B.eVn,B.eV4,B.eVb,B.eVk,B.eUZ,B.dfY,B.dfZ,B.dfV,B.dfW,B.dfX,B.dg_,B.dg0,B.dg1,B.dg2,B.dg3,B.dg4,B.dg5,B.dg6,B.dg7,B.ek7,B.ek8,B.ek9,B.eka,B.ek5,B.ek6,B.ekC,B.eke,B.ekg,B.ek0,B.eky,B.ekw,B.ekx,B.ekv,B.eku,B.ek2,B.ew9,B.ew7,B.evW,B.ew_,B.evV,B.ew0,B.ew1,B.ew5,B.eCL,B.eCR,B.egQ,B.egR,B.egC,B.egD,B.egB,B.egG,B.egI,B.egJ,B.eCa,B.eCb,B.eC9,B.eBY,B.eBZ,B.eBX,B.eBQ,B.eBR,B.eC4,B.eC5,B.eC6,B.eC7,B.eC8,B.dFo,B.dFp,B.dFq,B.dFh,B.dFk,B.cKy,B.ecj,B.ecI,B.ecn,B.ecv,B.ecw,B.ecu,B.ecD,B.egj,B.ego,B.efI,B.efq,B.efC,B.efA,B.efy,B.efz,B.efx,B.dOb,B.dO_,B.dO1,B.dO9,B.dO4,B.dR0,B.dQT,B.dQU,B.dQV,B.d3g,B.d3i,B.d3h,B.dBM,B.dBN,B.dBF,B.dBD,B.cD5,B.dV3,B.dV4,B.dV_,B.dV0,B.dbb,B.dbc,B.dFL,B.dFt,B.dFC,B.dFD,B.dFI,B.dFJ,B.bLh,B.bLs,B.bLn,B.bLt,B.bLv,B.bLi,B.bLg,B.bLA,B.bLo,B.bLr,B.bLq,B.bLp,B.bGy,B.fEE,B.fEH,B.fEF,B.bGf,B.bGa,B.bG9,B.bGx,B.bGp,B.bGq,B.bGo,B.bGr,B.bG_,B.bG1,B.bFY,B.bFZ,B.bFQ,B.bFR,B.fdX,B.fdY,B.fdZ,B.fdK,B.fe_,B.fdJ,B.fe0,B.fdO,B.fdI,B.fdP,B.fdH,B.fdQ,B.fdG,B.fdR,B.fdE,B.fdF,B.fdS,B.fdC,B.fdD,B.fdT,B.fdB,B.dRh,B.dRi,B.dR7,B.dR3,B.dRg,B.dRl,B.cAC,B.fJh,B.fJi,B.e7T,B.e7L,B.dgg,B.dgj,B.e8b,B.e7X,B.e86,B.e87,B.e88,B.cev,B.eHa,B.dQE,B.dQF,B.dQG,B.dQI,B.edC,B.eCt,B.eCC,B.eCy,B.eCA,B.eca,B.ecb,B.ecc,B.fN7,B.cro,B.dW4,B.dVu,B.dVt,B.dVF,B.dVG,B.dVE,B.dVH,B.dVZ,B.dW_,B.dW0,B.eDj,B.evx,B.evy,B.evz,B.evE,B.evF,B.evo,B.eXK,B.eXL,B.dWB,B.dWu,B.dWw,B.dWx,B.dWy,B.dWz,B.dW6,B.eVT,B.dDD,B.dDr,B.dDq,B.dDp,B.dDv,B.dUG,B.dUz,B.dUA,B.dUB,B.dUC,B.d98,B.enD,B.enE,B.enF,B.enG])
u(C.ki,[B.fsY,B.e5_,B.e4Y,B.ekS,B.el4,B.dFO,B.dGa,B.dM9,B.eVq,B.eVr,B.eV3,B.eVg,B.eVh,B.eVc,B.eVi,B.eUY,B.ek3,B.ek4,B.ekB,B.ekt,B.eki,B.eCK,B.egF,B.eC0,B.dFg,B.dFl,B.ecz,B.egn,B.ftf,B.efu,B.efr,B.efE,B.do3,B.bFm,B.fnW,B.dBz,B.dBH,B.bLu,B.bLw,B.bLy,B.bLj,B.bLl,B.bGz,B.cjV,B.fEG,B.bG8,B.bGv,B.bGu,B.dRf,B.cAD,B.dN3,B.dN1,B.dMW,B.e7N,B.dgh,B.dgi,B.e85,B.cey,B.dEb,B.dE6,B.edE,B.dVR,B.dVr,B.dc1,B.eDo,B.evB,B.evn,B.dW7,B.dW9,B.dW5,B.dDt])
u(C.ag,[B.UU,B.Vl,B.TM,B.TR,B.MY,B.aGv,B.Vk,B.VA,B.VM,B.Vh,B.VH,B.TP,B.Vb,B.Vg,B.Ve,B.Uc,B.Us,B.TH,B.UG,B.TQ,B.ai8,B.Ut,B.awz,B.Ua,B.UZ,B.V0,B.VS,B.UA,B.TN,B.Ur,B.Vc,B.Vq,B.VL,B.Va,B.UH,B.VO,B.Vz,B.UI,B.Vr,B.TL,B.UE,B.Vn])
u(C.ah,[B.bj8,B.aLn,B.aKp,B.aKv,B.aCf,B.aMe,B.aLl,B.aLu,B.aLA,B.aLi,B.aLx,B.aKt,B.aLg,B.aLh,B.aDk,B.biD,B.aKH,B.aKl,B.aKP,B.biu,B.awS,B.bwc,B.aIS,B.aKE,B.aL5,B.aL6,B.aLI,B.aKK,B.aKr,B.biE,B.aDg,B.aDC,B.bjS,B.aLe,B.aKQ,B.bjW,B.aLt,B.aKS,B.aLq,B.aKo,B.aKN,B.aLp])
u(C.j6,[B.e4T,B.e4U,B.e55,B.e56,B.e51,B.e50,B.e52,B.e4Z,B.e53,B.e4X,B.e54,B.e4W,B.e59,B.e58,B.e5a,B.e57,B.e5b,B.e5c,B.e5e,B.ela,B.elc,B.eld,B.ekU,B.ekT,B.ekR,B.el_,B.el0,B.ekX,B.el1,B.ekW,B.el2,B.el3,B.ekV,B.el5,B.ekZ,B.el9,B.ekY,B.dE4,B.dE3,B.dDH,B.dE5,B.dDJ,B.dDL,B.dDM,B.dDO,B.dDE,B.dDF,B.dDG,B.dDV,B.dDW,B.dDX,B.dDU,B.dDZ,B.dDT,B.dE_,B.dDS,B.dE0,B.dDR,B.dE1,B.dDQ,B.dE2,B.dDP,B.dFU,B.dFT,B.dFY,B.dFQ,B.dFR,B.dFZ,B.dG_,B.dG0,B.dFW,B.dFM,B.dG9,B.dG8,B.dGb,B.dGc,B.dGd,B.dG2,B.dGe,B.cL0,B.dM7,B.dM6,B.dM8,B.feb,B.fec,B.fed,B.feo,B.feq,B.fer,B.fes,B.fet,B.feu,B.fev,B.few,B.fee,B.fef,B.feg,B.feh,B.fei,B.fej,B.fek,B.fel,B.fem,B.fen,B.fep,B.eVp,B.eVo,B.eV6,B.eV5,B.eV1,B.eV0,B.eV2,B.eV_,B.eVe,B.eVd,B.eVf,B.eV7,B.eVj,B.eVa,B.eVl,B.eV9,B.eVm,B.eV8,B.ekc,B.ek1,B.ekb,B.ejY,B.ekd,B.ekf,B.ejZ,B.ek_,B.ekA,B.ekz,B.ekq,B.ekr,B.eks,B.ekm,B.ekn,B.ekl,B.eko,B.ekk,B.ekp,B.ekj,B.ekh,B.dfU,B.ew8,B.evL,B.evK,B.evU,B.ew2,B.evT,B.ew3,B.evS,B.ew4,B.evR,B.evQ,B.ew6,B.evP,B.evX,B.evO,B.evY,B.evN,B.evZ,B.evM,B.eCJ,B.eCI,B.eCM,B.eCH,B.eCN,B.eCG,B.eCO,B.eCF,B.eCP,B.eCE,B.eCQ,B.eCD,B.egE,B.egA,B.egz,B.egy,B.egK,B.egx,B.egL,B.egw,B.egM,B.egv,B.egN,B.egO,B.egP,B.egu,B.egH,B.eC_,B.eBP,B.eC1,B.eBW,B.eC2,B.eBV,B.eC3,B.eBU,B.eBT,B.eBS,B.eBO,B.eBN,B.eBM,B.dFn,B.dFe,B.dFf,B.dFi,B.dFj,B.dFm,B.ecx,B.eco,B.ecy,B.ecA,B.ect,B.ecB,B.ecs,B.ecC,B.ecr,B.ecq,B.ecE,B.ecp,B.ecF,B.ecm,B.ecG,B.ecl,B.ecH,B.eck,B.egd,B.ege,B.egl,B.egk,B.egm,B.egi,B.egp,B.egh,B.egq,B.egg,B.egr,B.egs,B.egf,B.egt,B.efH,B.efo,B.efp,B.eft,B.efs,B.efD,B.efB,B.efv,B.efF,B.efw,B.efG,B.dOa,B.dO0,B.dNZ,B.dO5,B.dO3,B.dO6,B.dO2,B.dO7,B.dO8,B.dR_,B.dQO,B.dQN,B.dQP,B.dQS,B.dQR,B.dQQ,B.dQW,B.dQX,B.dQY,B.dQZ,B.dBL,B.dBK,B.dBA,B.dBG,B.dBE,B.dBI,B.dBC,B.dBJ,B.dBB,B.dV2,B.dV1,B.dUU,B.dUY,B.dUX,B.dUZ,B.dUW,B.dUV,B.dFK,B.dFB,B.dFA,B.dFE,B.dFz,B.dFF,B.dFy,B.dFG,B.dFx,B.dFH,B.dFw,B.dFv,B.dFu,B.bLx,B.bLz,B.bLk,B.bLm,B.bGc,B.bGd,B.bGb,B.bGe,B.bGg,B.bG2,B.bG3,B.bG4,B.bG5,B.bG6,B.bG7,B.bGw,B.bFG,B.bGm,B.bGn,B.bGk,B.bGl,B.bGi,B.bGj,B.bGs,B.bGh,B.bGt,B.bFH,B.bG0,B.bFN,B.bFO,B.bFM,B.bFP,B.bFL,B.bFS,B.bFT,B.bFU,B.bFV,B.bFK,B.bFW,B.bFJ,B.bFX,B.bFI,B.dR8,B.dRj,B.dRk,B.dR6,B.dR5,B.dR4,B.dRd,B.dRb,B.dRc,B.dRe,B.dR9,B.dRa,B.dRm,B.dRn,B.dRo,B.dRp,B.dRq,B.dN4,B.dN2,B.dN0,B.dN_,B.dMZ,B.dMY,B.dMX,B.dMT,B.dMS,B.dMV,B.dMU,B.e7S,B.e7U,B.e7J,B.e7K,B.e7M,B.e7O,B.e7P,B.e7Q,B.e7R,B.e8a,B.e8c,B.e82,B.e7Z,B.e83,B.e84,B.e7Y,B.e81,B.e80,B.e8_,B.e89,B.feE,B.feF,B.feG,B.feH,B.feI,B.feJ,B.feK,B.feL,B.cex,B.cew,B.eHb,B.eH7,B.eH6,B.eH9,B.eH8,B.dTm,B.dTn,B.dTh,B.dTj,B.dTk,B.dTi,B.dTl,B.dEc,B.dE9,B.dE8,B.dEa,B.dE7,B.dQD,B.dQC,B.dQB,B.dQA,B.dQH,B.dQz,B.dQy,B.dQJ,B.dQx,B.dQK,B.dQw,B.dQL,B.dQM,B.dQv,B.edy,B.edz,B.edx,B.edA,B.edw,B.edD,B.edF,B.edB,B.edG,B.eob,B.eoc,B.eo9,B.eoa,B.eo8,B.eod,B.eoe,B.eof,B.eog,B.eCx,B.eCz,B.eCw,B.eCv,B.eCB,B.eCu,B.ecd,B.ece,B.ec6,B.ec5,B.ec7,B.ec4,B.ec8,B.ec3,B.ec9,B.ec2,B.ec1,B.ec0,B.ec_,B.crp,B.crq,B.fN6,B.crl,B.crk,B.crr,B.crm,B.crn,B.cet,B.dW3,B.dVx,B.dVv,B.dVw,B.dVs,B.dVQ,B.dVy,B.dVz,B.dVS,B.dVD,B.dVW,B.dVP,B.dVX,B.dVO,B.dVY,B.dVN,B.dVM,B.dVL,B.dVK,B.dW1,B.dVJ,B.dW2,B.dVI,B.dVT,B.dVC,B.dVU,B.dVB,B.dVV,B.dVA,B.dVq,B.dVp,B.dc0,B.fex,B.fey,B.fez,B.feA,B.feB,B.feC,B.feD,B.eDm,B.eDn,B.eDl,B.eDk,B.evp,B.evA,B.evC,B.evw,B.evD,B.evv,B.evu,B.evG,B.evt,B.evH,B.evs,B.evI,B.evr,B.evJ,B.evq,B.evm,B.evl,B.eXJ,B.dW8,B.dWn,B.dWe,B.dWo,B.dWd,B.dWp,B.dWm,B.dWt,B.dWl,B.dWk,B.dWv,B.dWj,B.dWi,B.dWh,B.dWg,B.dWA,B.dWf,B.dWq,B.dWc,B.dWr,B.dWb,B.dWs,B.dWa,B.eoj,B.eok,B.eoi,B.eol,B.eoh,B.dDs,B.dDo,B.dDw,B.dDn,B.dDx,B.dDm,B.dDy,B.dDl,B.dDz,B.dDk,B.dDA,B.dDj,B.dDB,B.dDi,B.dDC,B.dDh,B.dDu,B.dDg,B.dUw,B.dUx,B.dUv,B.dUy,B.dUu,B.dUt,B.dUs,B.dUr,B.dUq,B.dUD,B.dUp,B.dUE,B.dUo,B.dUF,B.dUn,B.eny,B.enz,B.enx,B.enA,B.enw,B.enB,B.env,B.enC,B.enu,B.ent,B.ens,B.enr,B.enq])
t(B.bwr,B.aLn)
t(B.aDw,B.bwr)
u(C.mJ,[B.bg7,B.baf,B.brb,B.b8W,B.bpQ,B.bph,B.b9B,B.bpj,B.btg,B.bg5,B.br6,B.bks,B.brY,B.b9W,B.bh_,B.bkt,B.bhH,B.bd0,B.b90,B.beu,B.aia,B.b88,B.buh,B.ae8,B.bga,B.bgp,B.but,B.bpi,B.bkG,B.beB,B.br4,B.b9N,B.bqD,B.b9b,B.ber,B.bpT])
t(B.aKq,B.aKp)
t(B.aBW,B.aKq)
t(B.bwa,B.aKv)
t(B.aBZ,B.bwa)
u(C.m6,[B.K1,B.a_L,B.IZ])
u(C.au,[B.bqd,B.aep,B.adg,B.PD,B.bqH,B.a7M,B.bcm,B.b5X,B.dA,B.eQ,B.auZ,B.fh,B.EX])
t(B.aGw,B.aMe)
t(B.bg4,C.oI)
t(B.aDv,B.aLl)
t(B.bjJ,B.aLu)
t(B.aDL,B.aLA)
t(B.bwq,B.aLi)
t(B.aDn,B.bwq)
t(B.bwy,B.aLx)
t(B.bjO,B.bwy)
t(B.bw9,B.aKt)
t(B.aBY,B.bw9)
t(B.bwo,B.aLg)
t(B.bjn,B.bwo)
t(B.bwp,B.aLh)
t(B.aDm,B.bwp)
t(B.aCr,B.aKH)
t(B.bih,B.aKl)
t(B.biP,B.aKP)
t(B.awT,B.awS)
t(B.ai9,B.awT)
t(B.aCs,B.bwc)
t(B.b89,B.aIS)
t(B.biB,B.aKE)
t(B.bwh,B.aL5)
t(B.bja,B.bwh)
t(B.bwi,B.aL6)
t(B.aD6,B.bwi)
t(B.bwz,B.aLI)
t(B.aDY,B.bwz)
t(B.bwd,B.aKK)
t(B.biK,B.bwd)
t(B.bw8,B.aKr)
t(B.bim,B.bw8)
t(B.bwn,B.aLe)
t(B.bjl,B.bwn)
t(B.aKR,B.aKQ)
t(B.aCD,B.aKR)
t(B.bwv,B.aLt)
t(B.bjI,B.bwv)
t(B.bwf,B.aKS)
t(B.aCE,B.bwf)
t(B.bwt,B.aLq)
t(B.bjF,B.bwt)
t(B.bw7,B.aKo)
t(B.bil,B.bw7)
t(B.bwe,B.aKN)
t(B.biN,B.bwe)
t(B.bws,B.aLp)
t(B.bjE,B.bws)
w(B.aLn,C.c9)
w(B.bwr,B.mz)
w(B.aKp,C.c9)
w(B.aKq,B.mz)
w(B.aKv,C.c9)
w(B.bwa,B.mz)
w(B.aMe,C.eR)
w(B.aLl,C.c9)
w(B.aLu,C.c9)
w(B.aLA,C.c9)
w(B.aKt,C.c9)
w(B.bw9,B.mz)
w(B.aLi,C.c9)
w(B.bwq,B.mz)
w(B.aLx,C.c9)
w(B.bwy,B.mz)
w(B.aLg,C.c9)
w(B.bwo,B.mz)
w(B.aLh,C.c9)
w(B.bwp,B.mz)
w(B.aKH,C.c9)
w(B.aKl,C.c9)
w(B.aKP,C.c9)
w(B.awS,C.c9)
w(B.awT,B.mz)
w(B.aIS,C.c9)
v(B.bwc,C.ez)
w(B.aKE,C.c9)
w(B.aL5,C.c9)
w(B.bwh,B.mz)
w(B.aL6,C.c9)
w(B.bwi,B.mz)
w(B.aKr,C.c9)
w(B.bw8,B.mz)
w(B.aKK,C.c9)
w(B.bwd,B.mz)
w(B.aLe,C.c9)
w(B.bwn,B.mz)
w(B.aLI,C.c9)
w(B.bwz,B.mz)
w(B.aKQ,C.c9)
w(B.aKR,B.mz)
w(B.aKS,C.c9)
w(B.bwf,B.mz)
w(B.aLq,C.c9)
w(B.bwt,B.mz)
w(B.aLt,C.c9)
w(B.bwv,B.mz)
w(B.aKo,C.c9)
w(B.bw7,B.mz)
w(B.aKN,C.c9)
w(B.bwe,B.mz)
w(B.aLp,C.c9)
w(B.bws,B.mz)})()
C.jW(b.typeUniverse,JSON.parse('{"UU":{"ag":[],"r":[]},"bj8":{"ah":["UU"]},"Vl":{"ag":[],"r":[]},"aDw":{"ah":["Vl"]},"bg7":{"aB":[]},"TM":{"ag":[],"r":[]},"aBW":{"ah":["TM"]},"TR":{"ag":[],"r":[]},"aBZ":{"ah":["TR"]},"baf":{"aB":[]},"aep":{"au":[],"r":[]},"adg":{"au":[],"r":[]},"aGv":{"ag":[],"r":[]},"MY":{"ag":[],"r":[]},"aCf":{"ah":["MY"]},"bqd":{"au":[],"r":[]},"PD":{"au":[],"r":[]},"brb":{"aB":[]},"bqH":{"au":[],"r":[]},"b8W":{"aB":[]},"aGw":{"ah":["aGv"]},"bpQ":{"aB":[]},"bph":{"aB":[]},"b9B":{"aB":[]},"bpj":{"aB":[]},"btg":{"aB":[]},"Vk":{"ag":[],"r":[]},"bg4":{"aB":[]},"aDv":{"ah":["Vk"]},"bg5":{"aB":[]},"VA":{"ag":[],"r":[]},"VM":{"ag":[],"r":[]},"bjJ":{"ah":["VA"]},"br6":{"aB":[]},"aDL":{"ah":["VM"]},"Vh":{"ag":[],"r":[]},"VH":{"ag":[],"r":[]},"TP":{"ag":[],"r":[]},"aDn":{"ah":["Vh"]},"bks":{"aB":[]},"bjO":{"ah":["VH"]},"brY":{"aB":[]},"aBY":{"ah":["TP"]},"b9W":{"aB":[]},"Vb":{"ag":[],"r":[]},"Vg":{"ag":[],"r":[]},"bjn":{"ah":["Vb"]},"bh_":{"aB":[]},"aDm":{"ah":["Vg"]},"bkt":{"aB":[]},"Ve":{"ag":[],"r":[]},"Uc":{"ag":[],"r":[]},"Us":{"ag":[],"r":[]},"aDk":{"ah":["Ve"]},"bhH":{"aB":[]},"biD":{"ah":["Uc"]},"aCr":{"ah":["Us"]},"bd0":{"aB":[]},"TH":{"ag":[],"r":[]},"UG":{"ag":[],"r":[]},"TQ":{"ag":[],"r":[]},"bih":{"ah":["TH"]},"b90":{"aB":[]},"biP":{"ah":["UG"]},"beu":{"aB":[]},"biu":{"ah":["TQ"]},"aia":{"aB":[]},"ai8":{"ag":[],"r":[]},"ai9":{"ah":["ai8"]},"Ut":{"ag":[],"r":[]},"awz":{"ag":[],"r":[]},"aCs":{"ah":["Ut"],"ez":[]},"b89":{"ah":["awz"]},"b88":{"aB":[]},"Ua":{"ag":[],"r":[]},"biB":{"ah":["Ua"]},"buh":{"aB":[]},"ae8":{"aB":[]},"UZ":{"ag":[],"r":[]},"V0":{"ag":[],"r":[]},"bja":{"ah":["UZ"]},"bga":{"aB":[]},"aD6":{"ah":["V0"]},"bgp":{"aB":[]},"a7M":{"au":[],"r":[]},"VS":{"ag":[],"r":[]},"UA":{"ag":[],"r":[]},"TN":{"ag":[],"r":[]},"Ur":{"ag":[],"r":[]},"Vc":{"ag":[],"r":[]},"Vq":{"ag":[],"r":[]},"VL":{"ag":[],"r":[]},"Va":{"ag":[],"r":[]},"aDY":{"ah":["VS"]},"but":{"aB":[]},"biK":{"ah":["UA"]},"bpi":{"aB":[]},"bim":{"ah":["TN"]},"biE":{"ah":["Ur"]},"bkG":{"aB":[]},"aDg":{"ah":["Vc"]},"aDC":{"ah":["Vq"]},"bjS":{"ah":["VL"]},"bjl":{"ah":["Va"]},"bcm":{"au":[],"r":[]},"b5X":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"auZ":{"au":[],"r":[]},"fh":{"au":[],"r":[]},"EX":{"au":[],"r":[]},"UH":{"ag":[],"r":[]},"aCD":{"ah":["UH"]},"beB":{"aB":[]},"VO":{"ag":[],"r":[]},"bjW":{"ah":["VO"]},"Vz":{"ag":[],"r":[]},"UI":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"bjI":{"ah":["Vz"]},"br4":{"aB":[]},"aCE":{"ah":["UI"]},"b9N":{"aB":[]},"bjF":{"ah":["Vr"]},"bqD":{"aB":[]},"TL":{"ag":[],"r":[]},"UE":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"bil":{"ah":["TL"]},"b9b":{"aB":[]},"biN":{"ah":["UE"]},"ber":{"aB":[]},"bjE":{"ah":["Vn"]},"bpT":{"aB":[]}}'))
C.K2(b.typeUniverse,JSON.parse('{"mz":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lT<w?>"),e8:w("d4"),G:w("w"),l:w("bk<n,n>"),J:w("bk<n,N>"),I:w("bk<n,H>"),R:w("eM<n>"),Z:w("a0"),M:w("O<da>"),f5:w("O<a2t>"),gh:w("O<aR8>"),h:w("O<a2x>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hi>"),aJ:w("O<az<aC>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<Hi>>"),gO:w("O<ai<ai<N>>>"),bj:w("O<ai<n>>"),b:w("O<ai<N>>"),fA:w("O<ai<H?>>"),D:w("O<a3<n,aC>>"),g:w("O<u>"),bz:w("O<tk>"),ds:w("O<a88>"),v:w("O<hn>"),U:w("O<+(u,N)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(N,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,N,N,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,N,N,a3<n,N>)>"),_:w("O<uH>"),q:w("O<cQ>"),fQ:w("O<a9O>"),s:w("O<n>"),cF:w("O<ar>"),X:w("O<w5>"),F:w("O<aaA>"),p:w("O<r>"),bL:w("O<aaU>"),fH:w("O<li>"),aq:w("O<b8P>"),a_:w("O<ab7>"),cS:w("O<abe>"),cB:w("O<ni>"),ba:w("O<abo>"),d9:w("O<Pd>"),bi:w("O<abH>"),eW:w("O<C6>"),fY:w("O<YJ>"),aX:w("O<Fs>"),ea:w("O<acw>"),gB:w("O<ad1>"),ed:w("O<Pu>"),g4:w("O<bkF>"),aS:w("O<a_f>"),ac:w("O<adk>"),cd:w("O<Cg>"),fr:w("O<aef>"),e4:w("O<a_Y>"),r:w("O<aek>"),au:w("O<aHm>"),f7:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<tk?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<ai9>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a3<n,@>"),f:w("a3<@,@>"),bd:w("K<e9,n>"),dv:w("K<n,n>"),fR:w("K<+(N,r),r>"),m:w("iz"),gA:w("yX"),gD:w("vG"),P:w("cq"),C:w("aC"),W:w("tk"),dV:w("e9"),g7:w("BP"),N:w("n"),bO:w("ar"),k:w("kr"),Y:w("bo<N>"),cL:w("aaB"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e7<qE>"),e3:w("b9e"),a2:w("C2"),f3:w("qE"),es:w("Fw"),gV:w("mX"),y:w("R"),i:w("N"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a3<@,@>?"),cK:w("aC?"),az:w("pP?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVK=new C.da(0,0.85)
D.fum=new C.x("Tap once to start the chain",null,K.Tq,null,null,null,null,null,null,null,null,null)
D.aVi=new C.bI(D.aVK,null,null,D.fum,null)
D.aVA=new C.da(0,0.1)
D.aWE=new B.aRi(0,0,0)
D.JU=new B.aRi(0,0.5,0)
D.aXa=new C.ay(A.b1,1,A.q,-1)
D.aYE=new C.aY(0,1/0,0,290)
D.aYL=new C.aY(16,1/0,16,1/0)
D.aZY=new C.o(A.bo,null,null,null,null,null,A.a6)
D.eWE=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwH=new C.x("\u26a1",null,D.eWE,null,null,null,null,null,null,null,null,null)
D.b3n=new C.cr(A.A,null,null,D.fwH,null)
D.aPt=new C.G(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmJ=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPt,null,A.L,null,null,null,null,null,null,null)
D.e4V=new C.C(A.nV,D.fmJ,null)
D.b3w=new C.cr(A.A,null,null,D.e4V,null)
D.fqp=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kz,null,A.L,null,null,null,null,null,null,null)
D.e4Z=new C.C(A.nV,D.fqp,null)
D.b3R=new C.cr(A.A,null,null,D.e4Z,null)
D.f6q=new C.G(!0,A.ja,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv6=new C.x("Draw anywhere",null,D.f6q,null,null,null,null,null,null,null,null,null)
D.b3V=new C.cr(A.A,null,null,D.fv6,null)
D.fd2=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPt,null,A.L,null,null,null,null,null,null,null)
D.e5G=new C.C(A.Ff,D.fd2,null)
D.b4d=new C.cr(A.A,null,null,D.e5G,null)
D.abf=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b6K=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b7x=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VG=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b7C=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b7H=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b7M=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.VI=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b8P=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b8U=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b9c=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bah=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acC=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.baJ=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.Ao=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bbv=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.ad1=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bc7=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bce=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.adc=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Wk=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bcJ=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adl=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.ady=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Wu=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bet=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bev=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bez=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.beI=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.ae_=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bf4=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Ez=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bgb=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bgj=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bgm=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bgx=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bgA=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bgH=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.v4=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.aeQ=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bhM=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.biv=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.biY=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bjo=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afh=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bnM=new C.b9(11e6)
D.boN=new C.Q(0,0,8,6)
D.agf=new C.Q(0,0,9,0)
D.bpk=new C.Q(10,0,10,4)
D.bpp=new C.Q(10,10,10,6)
D.bpx=new C.Q(10,34,10,26)
D.bpF=new C.Q(10,6,10,2)
D.XV=new C.Q(10,6,10,4)
D.bpH=new C.Q(10,8,0,10)
D.bqh=new C.Q(12,8,8,8)
D.bql=new C.Q(14,0,14,22)
D.bqn=new C.Q(14,0,14,30)
D.agH=new C.Q(14,0,14,6)
D.agO=new C.Q(14,10,8,12)
D.bqT=new C.Q(14,8,14,6)
D.brk=new C.Q(16,4,16,28)
D.bru=new C.Q(16,8,16,12)
D.bty=new C.Q(26,12,26,58)
D.bul=new C.Q(4,4,6,2)
D.bun=new C.Q(4,4,8,2)
D.buZ=new C.Q(8,14,8,12)
D.bv5=new C.Q(8,40,8,30)
D.bv9=new C.Q(8,6,16,0)
D.bva=new C.Q(8,6,8,8)
D.bvu=new C.Q(0,0,1.5,0)
D.aWq=new C.GH(26,"saturation")
D.bvM=new C.yE(A.cV,D.aWq,null,A.abd)
D.fc8=new C.x("REACTION LAB",null,X.aQ4,null,null,null,null,A.a2,null,1,null,null)
D.bvS=new C.bD(1,A.bh,D.fc8,null)
D.f3k=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffe=new C.x("CORE PROTOCOL",null,D.f3k,null,null,null,null,null,null,null,null,null)
D.bw4=new C.bD(1,A.bh,D.ffe,null)
D.ffW=new C.x("\ud83d\udce2 NGMY Ads",null,A.qj,null,null,null,null,A.eC,null,1,null,null)
D.bwL=new C.bD(1,A.bh,D.ffW,null)
D.faS=new C.x("Wire selected",null,A.ho,null,null,null,null,null,null,null,null,null)
D.bwZ=new C.bD(1,A.bh,D.faS,null)
D.ajX=new C.a0(62712,"MaterialIcons",!1)
D.bBM=new C.a0(62878,"MaterialIcons",!1)
D.a_b=new C.a0(62908,"MaterialIcons",!1)
D.bBP=new C.a0(62918,"MaterialIcons",!1)
D.bBQ=new C.a0(62931,"MaterialIcons",!1)
D.bBT=new C.a0(62951,"MaterialIcons",!1)
D.bC8=new C.a0(63064,"MaterialIcons",!1)
D.bCa=new C.a0(63070,"MaterialIcons",!1)
D.xZ=new C.a0(63128,"MaterialIcons",!1)
D.FZ=new C.a0(63726,"MaterialIcons",!1)
D.bDt=new C.a0(983122,"MaterialIcons",!1)
D.bDH=new C.a0(983247,"MaterialIcons",!1)
D.bDT=new C.a0(983415,"MaterialIcons",!1)
D.bDU=new C.a0(983417,"MaterialIcons",!1)
D.bDV=new C.a0(983442,"MaterialIcons",!1)
D.bDW=new C.a0(983443,"MaterialIcons",!1)
D.ali=new C.a0(983467,"MaterialIcons",!1)
D.bE1=new C.a0(983501,"MaterialIcons",!1)
D.bEc=new C.a0(983616,"MaterialIcons",!1)
D.bEd=new C.a0(983624,"MaterialIcons",!1)
D.bEp=new C.a0(983776,"MaterialIcons",!1)
D.bEG=new C.a0(984561,"MaterialIcons",!1)
D.bFg=new C.ae(A.r3,24,A.aM,null,null,null)
D.bG_=new C.ae(A.Nq,null,A.ad,null,null,null)
D.bGx=new C.ae(A.mr,21,A.ad,null,null,null)
D.bDs=new C.a0(983117,"MaterialIcons",!1)
D.bHU=new C.ae(D.bDs,28,A.c,null,null,null)
D.bI9=new C.ae(A.jg,18,null,null,null,null)
D.bJU=new C.ae(A.e5,21,A.c7,null,null,null)
D.bK8=new C.ae(A.ms,null,A.ad,null,null,null)
D.bKi=new C.ae(A.a02,21,A.ad,null,null,null)
D.bL7=new C.ae(A.eA,17,A.ad,null,null,null)
D.amH=new C.ae(A.eA,19,null,null,null,null)
D.mw=new C.ae(A.vz,21,A.ad,null,null,null)
D.bMA=new C.ae(A.MS,null,A.ad,null,null,null)
D.bNJ=new C.ae(A.jg,21,A.ad,null,null,null)
D.bOz=new C.ae(A.fd,20,A.az,null,null,null)
D.bPf=new C.ae(A.dW,null,A.aM,null,null,null)
D.bPA=new C.ae(A.jY,null,A.az,null,null,null)
D.da_=w([A.dr,A.d6,A.dr],x.O)
D.bSk=new C.a8(A.a3,A.a7,A.x,D.da_,null,null)
D.cPl=w([A.bS,A.bn],x.O)
D.bSs=new C.a8(A.b0,A.b5,A.x,D.cPl,null,null)
D.bSD=new C.a8(A.b0,A.b5,A.x,A.awN,null,null)
D.cPH=w([A.hh,A.fb],x.O)
D.bSM=new C.a8(A.b0,A.b5,A.x,D.cPH,null,null)
D.anI=new C.a8(A.b0,A.b5,A.x,M.a1J,null,null)
D.cN7=w([A.op,A.i7],x.O)
D.bTp=new C.a8(A.b0,A.b5,A.x,D.cN7,null,null)
D.cP3=w([A.eu,A.aB],x.O)
D.anP=new C.a8(A.b0,A.b5,A.x,D.cP3,null,null)
D.d4y=w([A.dA,A.iQ,A.bn],x.O)
D.bTG=new C.a8(A.a3,A.a7,A.x,D.d4y,null,null)
D.d4E=w([A.jt,A.cE],x.O)
D.bU_=new C.a8(A.b0,A.b5,A.x,D.d4E,null,null)
D.cm5=w([A.bS,A.dA],x.O)
D.bU8=new C.a8(A.a3,A.a7,A.x,D.cm5,null,null)
D.axq=w([A.eu,L.mY],x.O)
D.bUg=new C.a8(A.b0,A.b5,A.x,D.axq,null,null)
D.bUx=new C.a8(A.b0,A.b5,A.x,I.aoa,null,null)
D.bcQ=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b68=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cKy=w([D.bcQ,D.b68],x.O)
D.bUK=new C.a8(A.b0,A.b5,A.x,D.cKy,null,null)
D.bVk=new C.a8(A.ax,A.aC,A.x,A.a1G,null,null)
D.bhe=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dfk=w([D.bhe,A.Kp],x.O)
D.bVr=new C.a8(A.b0,A.b5,A.x,D.dfk,null,null)
D.cXY=w([A.aB,A.w],x.O)
D.bVw=new C.a8(A.b0,A.b5,A.x,D.cXY,null,null)
D.bVz=new C.a8(A.b0,A.b5,A.x,T.awR,null,null)
D.bgE=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bhn=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cyF=w([A.L8,D.bgE,D.bhn],x.O)
D.bVI=new C.a8(A.b0,A.b5,A.x,D.cyF,null,null)
D.cmp=w([A.d8,A.fw],x.O)
D.bVY=new C.a8(A.b0,A.b5,A.x,D.cmp,null,null)
D.bW3=new C.a8(A.ax,A.aC,A.x,A.a2s,null,null)
D.aoc=w([0,2,4,6,7,9,11],x.t)
D.bWF=w([0,4,7],x.t)
D.aoh=w([0,4,7,12],x.t)
D.bWG=w([0,4,7,4],x.t)
D.awx=w([A.h1,A.px],x.O)
D.aw4=w([A.hv,A.d_],x.O)
D.auw=w([A.bu,A.dP],x.O)
D.cH9=w([A.aM,A.d8],x.O)
D.cNt=w([A.c7,A.eN],x.O)
D.d5K=w([A.bV,A.lC],x.O)
D.au0=w([A.cs,A.jR],x.O)
D.cM4=w([A.bJ,A.aK],x.O)
D.bX_=w([D.awx,D.aw4,A.a1N,D.auw,D.cH9,D.cNt,A.avD,D.d5K,D.au0,D.cM4],x.Q)
D.c0E=w([120,220,380],x.t)
D.c4o=w([12,16,19,24],x.t)
D.c4x=w([1400,800,450,2400],x.t)
D.c8M=w([0,0.6,1],x.n)
D.ccV=w([250,450,900,1500],x.t)
D.b6X=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bh_=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bf6=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bka=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bej=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atg=w([D.b6X,D.bh_,D.bf6,D.bka,D.bej],x.O)
D.exN=new C.y("type","Typewriter")
D.er_=new C.y("bounce","Bounce")
D.eyz=new C.y("wave","Wave")
D.ezD=new C.y("zoom","Zoom")
D.ctv=w([D.exN,D.er_,D.eyz,A.a5x,I.aLq,D.ezD,I.aLs],x.K)
D.ctH=w([50,25,75],x.t)
D.cza=w([0,5,10,15,18,20,25],x.t)
D.esC=new C.y("fish","Fish")
D.esE=new C.y("fly","Fireflies")
D.eqY=new C.y("bird","Birds")
D.cDl=w([D.esC,D.esE,D.eqY],x.K)
D.cHp=w([900,500,250,1600],x.t)
D.cKX=w([0.78,1],x.n)
D.aux=w([0,2,4,7,9,12,14,16],x.t)
D.cLu=w([A.bu,A.bA,A.b8,A.bu],x.O)
D.auC=w(["A","T","C","G"],x.s)
D.cLv=w(["A","U","C","G"],x.s)
D.a1D=w([A.ay,A.cd,A.bo,A.aS,A.nM],x.O)
D.cMN=w([A.aB,A.ay,A.cs,A.cd,A.bo,A.cz,A.cc,A.bA,A.Kp],x.O)
D.a1H=w([0.04,0.17,0.3],x.n)
D.cNp=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GM=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eHs=new B.uH("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eHy=new B.uH("Medium engine","A good all-rounder.",0.3,0.9)
D.eHx=new B.uH("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GN=w([D.eHs,D.eHy,D.eHx],x._)
D.eh2=new C.y(6,"Easy")
D.ehC=new C.y(8,"Medium")
D.edr=new C.y(10,"Hard")
D.cOf=w([D.eh2,D.ehC,D.edr],x.E)
D.auW=w([0.55,0.78,1],x.n)
D.cPM=w([0.93,0.975,1],x.n)
D.av6=w([A.c,A.h2,A.pk,A.aB],x.O)
D.fzF=new B.xQ("Moon",1737,4291941851)
D.fzC=new B.xQ("Earth",6371,4281908728)
D.fzG=new B.xQ("Neptune",24622,4284524026)
D.fzH=new B.xQ("Saturn",58232,4294829706)
D.fzD=new B.xQ("Jupiter",69911,4294677052)
D.fzI=new B.xQ("Sun",696340,4294688548)
D.fzJ=new B.xQ("Sirius A",119e4,4290763774)
D.fzA=new B.xQ("Arcturus",179e5,4294818420)
D.fzB=new B.xQ("Betelgeuse",531e6,4294472049)
D.fzE=new B.xQ("UY Scuti",667e6,4293870660)
D.PB=w([D.fzF,D.fzC,D.fzG,D.fzH,D.fzD,D.fzI,D.fzJ,D.fzA,D.fzB,D.fzE],C.ax("O<xQ>"))
D.eD0=new C.bt("glow","Glow",A.a_d)
D.eAG=new C.bt("rainbow","Rainbow",A.nd)
D.eB2=new C.bt("stars","Stars",A.i0)
D.eAq=new C.bt("sparks","Sparks",A.dW)
D.eCj=new C.bt("fire","Fire",A.vA)
D.cRz=w([D.eD0,D.eAG,D.eB2,D.eAq,D.eCj],x.c)
D.ava=w([A.bo,A.ay,A.cd,A.d6],x.O)
D.cSA=w([0.2,1],x.n)
D.eHp=new B.uH("Radar","Shows your height above the ground.",0.1,0)
D.eHq=new B.uH("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eHn=new B.uH("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avi=w([D.eHp,D.eHq,D.eHn],x._)
D.eBB=new C.bt("attract","Attract",A.yf)
D.eBn=new C.bt("scare","Scare",A.r1)
D.eAz=new C.bt("food","Food",A.tV)
D.bDy=new C.a0(983158,"MaterialIcons",!1)
D.eBU=new C.bt("hunt","Hunt",D.bDy)
D.cTc=w([D.eBB,D.eBn,D.eAz,D.eBU],x.c)
D.cTB=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cTQ=w([47,100,220,470,1000],x.n)
D.avA=w([0,2,4,7,9],x.t)
D.HP={volts:0}
D.a3m=new C.bk(D.HP,[3],x.J)
D.Ia=new C.eq(["b","battery",0.2,0.3,D.a3m])
D.e0h={on:0}
D.dk0=new C.bk(D.e0h,[1],x.J)
D.CV=new C.eq(["s","switch",0.5,0.3,D.dk0])
D.eFy=new C.eq(["l","bulb",0.8,0.3,A.iY])
D.cPs=w([D.Ia,D.CV,D.eFy],x.d)
D.CU=new C.cI(["b",0,"s",0])
D.eEz=new C.cI(["s",1,"l",0])
D.aLw=new C.cI(["l",1,"b",1])
D.d4J=w([D.CU,D.eEz,D.aLw],x.o)
D.cOW=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ecK=new B.mw("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cPs,D.d4J,D.cOW)
D.aFD={ohms:0}
D.aDc=new C.bk(D.aFD,[220],x.J)
D.eF1=new C.eq(["r","resistor",0.5,0.3,D.aDc])
D.eFN=new C.eq(["d","led",0.8,0.3,A.iY])
D.d7H=w([D.Ia,D.eF1,D.eFN],x.d)
D.eDV=new C.cI(["b",0,"r",0])
D.eEt=new C.cI(["r",1,"d",0])
D.eE0=new C.cI(["d",1,"b",1])
D.dfO=w([D.eDV,D.eEt,D.eE0],x.o)
D.d86=w(["led","diode","indicator"],x.s)
D.ecR=new B.mw("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d7H,D.dfO,D.d86)
D.a4D={level:0}
D.djo=new C.bk(D.a4D,[0.2],x.J)
D.eF7=new C.eq(["p","pot",0.5,0.3,D.djo])
D.eF9=new C.eq(["m","motor",0.8,0.3,A.iY])
D.cPK=w([D.Ia,D.eF7,D.eF9],x.d)
D.eDU=new C.cI(["b",0,"p",0])
D.eEp=new C.cI(["p",1,"m",0])
D.eEl=new C.cI(["m",1,"b",1])
D.dbS=w([D.eDU,D.eEp,D.eEl],x.o)
D.d4s=w(["fan","motor","spin","dimmer"],x.s)
D.ecI=new B.mw("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cPK,D.dbS,D.d4s)
D.a3j=new C.bk(D.a4D,[0.9],x.J)
D.aLD=new C.eq(["s","solar",0.25,0.3,D.a3j])
D.aLC=new C.eq(["l","bulb",0.75,0.3,A.iY])
D.cSh=w([D.aLD,D.aLC],x.d)
D.eEw=new C.cI(["s",0,"l",0])
D.eEk=new C.cI(["l",1,"s",1])
D.cQt=w([D.eEw,D.eEk],x.o)
D.dcq=w(["solar","sun","without battery","no battery","free"],x.s)
D.ecL=new B.mw("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cSh,D.cQt,D.dcq)
D.eFQ=new C.eq(["c","crank",0.25,0.3,D.a3j])
D.d2R=w([D.eFQ,D.aLC],x.d)
D.eDY=new C.cI(["c",0,"l",0])
D.eEj=new C.cI(["l",1,"c",1])
D.d3o=w([D.eDY,D.eEj],x.o)
D.d3_=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ecH=new B.mw("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d2R,D.d3o,D.d3_)
D.djn=new C.bk(D.a4D,[0.7],x.J)
D.eFc=new C.eq(["t","turbine",0.25,0.3,D.djn])
D.eF_=new C.eq(["m","motor",0.75,0.3,A.iY])
D.cYA=w([D.eFc,D.eF_],x.d)
D.eEH=new C.cI(["t",0,"m",0])
D.eEm=new C.cI(["m",1,"t",1])
D.cXC=w([D.eEH,D.eEm],x.o)
D.d1J=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ecE=new B.mw("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cYA,D.cXC,D.d1J)
D.aD9=new C.bk(D.HP,[9],x.J)
D.a5A=new C.eq(["b","battery",0.2,0.3,D.aD9])
D.aLB=new C.eq(["r","radio",0.8,0.3,A.iY])
D.dd_=w([D.a5A,D.CV,D.aLB],x.d)
D.eEB=new C.cI(["s",1,"r",0])
D.aLx=new C.cI(["r",1,"b",1])
D.bWn=w([D.CU,D.eEB,D.aLx],x.o)
D.dbF=w(["radio","music","listen"],x.s)
D.ecQ=new B.mw("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dd_,D.bWn,D.dbF)
D.dks=new C.bk(D.HP,[12],x.J)
D.aLA=new C.eq(["b","battery",0.2,0.3,D.dks])
D.eFz=new C.eq(["t","tv",0.8,0.3,A.iY])
D.cPt=w([D.aLA,D.CV,D.eFz],x.d)
D.eEC=new C.cI(["s",1,"t",0])
D.aLy=new C.cI(["t",1,"b",1])
D.d5N=w([D.CU,D.eEC,D.aLy],x.o)
D.dcY=w(["tv","television","screen","watch"],x.s)
D.ecB=new B.mw("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cPt,D.d5N,D.dcY)
D.eFp=new C.eq(["z","buzzer",0.8,0.3,A.iY])
D.cw_=w([D.Ia,D.CV,D.eFp],x.d)
D.eED=new C.cI(["s",1,"z",0])
D.eEV=new C.cI(["z",1,"b",1])
D.cKJ=w([D.CU,D.eED,D.eEV],x.o)
D.da4=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ecN=new B.mw("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cw_,D.cKJ,D.da4)
D.eF8=new C.eq(["h","heater",0.8,0.3,A.iY])
D.d0s=w([D.a5A,D.CV,D.eF8],x.d)
D.eEy=new C.cI(["s",1,"h",0])
D.eE8=new C.cI(["h",1,"b",1])
D.cLq=w([D.CU,D.eEy,D.eE8],x.o)
D.cgb=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ecC=new B.mw("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d0s,D.cLq,D.cgb)
D.eFB=new C.eq(["s","solar",0.2,0.25,D.a3j])
D.dkx=new C.bk(D.aFD,[100],x.J)
D.eFE=new C.eq(["r","resistor",0.55,0.25,D.dkx])
D.eFL=new C.eq(["c","capacitor",0.85,0.25,A.iY])
D.eF4=new C.eq(["q","resistor",0.55,0.6,D.aDc])
D.eFC=new C.eq(["d","led",0.85,0.6,A.iY])
D.d5p=w([D.eFB,D.eFE,D.eFL,D.eF4,D.eFC],x.d)
D.eEx=new C.cI(["s",0,"r",0])
D.eEs=new C.cI(["r",1,"c",0])
D.eE_=new C.cI(["c",1,"s",1])
D.eDZ=new C.cI(["c",0,"q",0])
D.eEr=new C.cI(["q",1,"d",0])
D.eE1=new C.cI(["d",1,"c",1])
D.cVE=w([D.eEx,D.eEs,D.eE_,D.eDZ,D.eEr,D.eE1],x.o)
D.d2c=w(["capacitor","store","charge","flash"],x.s)
D.ecP=new B.mw("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d5p,D.cVE,D.d2c)
D.eFf=new C.eq(["b","battery",0.15,0.3,D.a3m])
D.eFR=new C.eq(["l1","bulb",0.5,0.3,A.iY])
D.eFm=new C.eq(["l2","bulb",0.85,0.3,A.iY])
D.cNH=w([D.eFf,D.eFR,D.eFm],x.d)
D.eDT=new C.cI(["b",0,"l1",0])
D.eEg=new C.cI(["l1",1,"l2",0])
D.eEh=new C.cI(["l2",1,"b",1])
D.cZe=w([D.eDT,D.eEg,D.eEh],x.o)
D.dcJ=w(["series","two bulbs","dim"],x.s)
D.ecF=new B.mw("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cNH,D.cZe,D.dcJ)
D.e0u={volts:0,charge:1}
D.dkC=new C.bk(D.e0u,[1.5,0],x.J)
D.eFJ=new C.eq(["b","battery",0.75,0.3,D.dkC])
D.cN8=w([D.aLD,D.eFJ],x.d)
D.eEv=new C.cI(["s",0,"b",0])
D.eDX=new C.cI(["b",1,"s",1])
D.cVV=w([D.eEv,D.eDX],x.o)
D.d2k=w(["charge","rechargeable","flat","recharge"],x.s)
D.ecD=new B.mw("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cN8,D.cVV,D.d2k)
D.dkr=new C.bk(D.HP,[4.5],x.J)
D.eFa=new C.eq(["b","battery",0.2,0.3,D.dkr])
D.aLz=new C.eq(["p","phone",0.8,0.3,A.iY])
D.cYq=w([D.eFa,D.CV,D.aLz],x.d)
D.eEA=new C.cI(["s",1,"p",0])
D.a5z=new C.cI(["p",1,"b",1])
D.d94=w([D.CU,D.eEA,D.a5z],x.o)
D.das=w(["phone","charger","usb","mobile"],x.s)
D.ecJ=new B.mw("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cYq,D.d94,D.das)
D.eEX=new C.eq(["f","fan",0.8,0.3,A.iY])
D.c8l=w([D.Ia,D.eEX],x.d)
D.eDS=new C.cI(["b",0,"f",0])
D.eE6=new C.cI(["f",1,"b",1])
D.cLT=w([D.eDS,D.eE6],x.o)
D.d4r=w(["fan","cool","air","wind"],x.s)
D.ecS=new B.mw("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c8l,D.cLT,D.d4r)
D.eFt=new C.eq(["b","battery",0.15,0.2,D.a3m])
D.eEY=new C.eq(["a","ammeter",0.5,0.2,A.iY])
D.eEW=new C.eq(["l","bulb",0.85,0.2,A.iY])
D.eFv=new C.eq(["v","voltmeter",0.5,0.6,A.iY])
D.d2D=w([D.eFt,D.eEY,D.eEW,D.eFv],x.d)
D.eDQ=new C.cI(["b",0,"a",0])
D.eDP=new C.cI(["a",1,"l",0])
D.eEJ=new C.cI(["v",0,"l",0])
D.eEK=new C.cI(["v",1,"l",1])
D.cVM=w([D.eDQ,D.eDP,D.aLw,D.eEJ,D.eEK],x.o)
D.dfN=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ecO=new B.mw("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d2D,D.cVM,D.dfN)
D.eFU=new C.eq(["b","battery",0.15,0.2,D.aD9])
D.eFe=new C.eq(["t","tv",0.55,0.2,A.iY])
D.aDa=new C.bk(D.HP,[5],x.J)
D.eF2=new C.eq(["c","buck",0.4,0.5,D.aDa])
D.eFg=new C.eq(["p","phone",0.8,0.5,A.iY])
D.cTD=w([D.eFU,D.eFe,D.eF2,D.eFg],x.d)
D.eDW=new C.cI(["b",0,"t",0])
D.aLu=new C.cI(["b",0,"c",0])
D.aLv=new C.cI(["c",1,"p",0])
D.cYn=w([D.eDW,D.aLy,D.aLu,D.aLv,D.a5z],x.o)
D.cRR=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ecG=new B.mw("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cTD,D.cYn,D.cRR)
D.eF3=new C.eq(["c","buck",0.5,0.3,D.aDa])
D.cLh=w([D.aLA,D.eF3,D.aLz],x.d)
D.cPT=w([D.aLu,D.aLv,D.a5z],x.o)
D.cjz=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ecA=new B.mw("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cLh,D.cPT,D.cjz)
D.eFk=new C.eq(["d","diode",0.5,0.3,A.iY])
D.cZr=w([D.a5A,D.eFk,D.aLB],x.d)
D.eDR=new C.cI(["b",0,"d",0])
D.eE2=new C.cI(["d",1,"r",0])
D.cyv=w([D.eDR,D.eE2,D.aLx],x.o)
D.cRw=w(["diode","protect","backwards","one way"],x.s)
D.ecM=new B.mw("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cZr,D.cyv,D.cRw)
D.PF=w([D.ecK,D.ecR,D.ecI,D.ecL,D.ecH,D.ecE,D.ecQ,D.ecB,D.ecN,D.ecC,D.ecP,D.ecF,D.ecD,D.ecJ,D.ecS,D.ecO,D.ecG,D.ecA,D.ecM],C.ax("O<mw>"))
D.fVW=new B.FK("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fVU=new B.FK("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.fVX=new B.FK("Mercury",3.7,A.jQ,"Mercury is small, so its gravity is like Mars.")
D.fVR=new B.FK("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fVT=new B.FK("Earth",9.81,A.aS,"On Earth gravity is strong, and the air also slows you down.")
D.fVV=new B.FK("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fVS=new B.FK("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rb=w([D.fVW,D.fVU,D.fVX,D.fVR,D.fVT,D.fVV,D.fVS],C.ax("O<FK>"))
D.cVC=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1W=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cWi=w([0.2,0.5,0.8],x.n)
D.bC3=new C.a0(63040,"MaterialIcons",!1)
D.eBr=new C.bt("peg","Peg",D.bC3)
D.eAD=new C.bt("bar","Bar",V.BC)
D.eB5=new C.bt("erase","Erase",A.MW)
D.cWu=w([D.eBr,D.eAD,D.eB5],x.c)
D.eKg=new C.cQ(A.bi,A.J,4)
D.cWF=w([D.eKg],x.q)
D.avP=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aUp=new B.K1(0,"accordion")
D.cMa=w([A.ji,A.BD,A.Br],x.w)
D.cT4=w(["Mail","SMS","Ad"],x.s)
D.cMF=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fU8=new B.Ag(D.aUp,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.awx,D.cMa,D.cT4,D.cMF)
D.a8Z=new B.K1(1,"flip")
D.d26=w([A.pS,A1.Ga,A.tW],x.w)
D.cY6=w(["Unlock","Verify","Secure"],x.s)
D.cLd=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fU7=new B.Ag(D.a8Z,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aw4,D.d26,D.cY6,D.cLd)
D.aUq=new B.K1(2,"towers")
D.cWX=w([A.yb,A.pW,A.hL],x.w)
D.cWA=w(["Save","Grow","Earn"],x.s)
D.czj=w(["","",""],x.s)
D.fU9=new B.Ag(D.aUq,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1N,D.cWX,D.cWA,D.czj)
D.a9_=new B.K1(3,"assemble")
D.d32=w([A.ng,A.h7,A.dW],x.w)
D.cSt=w(["Launch","Charge","Shine"],x.s)
D.d_E=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fUb=new B.Ag(D.a9_,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auw,D.d32,D.cSt,D.d_E)
D.aUr=new B.K1(4,"carousel")
D.d2S=w([A.b8,A.fc],x.O)
D.cTe=w([A.mr,A.aks,A.a_W],x.w)
D.cO5=w(["Explore","Discover","Learn"],x.s)
D.cYv=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fU6=new B.Ag(D.aUr,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d2S,D.cTe,D.cO5,D.cYv)
D.aUs=new B.K1(5,"burst")
D.cWw=w([A.j6,A.t8],x.O)
D.cMA=w([A.lg,A.mq,A.i_],x.w)
D.cMV=w(["Cheer","Win","Love"],x.s)
D.cP1=w(["Make some noise","First place","Share the joy"],x.s)
D.fUa=new B.Ag(D.aUs,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cWw,D.cMA,D.cMV,D.cP1)
D.avQ=w([D.fU8,D.fU7,D.fU9,D.fUb,D.fU6,D.fUa],C.ax("O<Ag>"))
D.eBt=new C.bt("skin","Skin",A.akt)
D.eCO=new C.bt("muscle","Muscles",A.N7)
D.eCx=new C.bt("organ","Organs",A.i_)
D.bBv=new C.a0(62747,"MaterialIcons",!1)
D.eCC=new C.bt("bone","Skeleton",D.bBv)
D.eCU=new C.bt("vessel","Blood vessels",A.pY)
D.cX2=w([D.eBt,D.eCO,D.eCx,D.eCC,D.eCU],x.c)
D.eHr=new B.uH("Simple legs","Light. Land gently.",0.15,0.2)
D.eHt=new B.uH("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eHw=new B.uH("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C_=w([D.eHr,D.eHt,D.eHw],x._)
D.cYD=w([1.77,3.55,7.15,16.7],x.n)
D.d02=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.exg=new C.y("spiral","Spiral")
D.eh_=new C.y("barred","Barred spiral")
D.es7=new C.y("elliptical","Elliptical")
D.d0I=w([D.exg,D.eh_,D.es7],x.K)
D.eDx=new C.cI(["beat",0.18,0.28,0])
D.eEE=new C.cI(["burst",0.7,0.2,0])
D.eEP=new C.cI(["delay",0.45,0.5,1])
D.eEo=new C.cI(["ripple",0.75,0.6,3])
D.cSc=w([D.eDx,D.eEE,D.eEP,D.eEo],x.e)
D.d1x=w([N.l0,M.I9,F.S6],x.u)
D.fTn=new B.Fw("First spark","A clock lights a burst and a ripple",D.cSc,D.d1x)
D.eE5=new C.cI(["beat",0.15,0.3,1])
D.eDb=new C.cI(["ripple",0.62,0.15,0])
D.eEL=new C.cI(["delay",0.4,0.45,0])
D.eDM=new C.cI(["ripple",0.7,0.45,0])
D.eDt=new C.cI(["delay",0.4,0.7,1])
D.eEq=new C.cI(["shake",0.75,0.75,0])
D.ddI=w([D.eE5,D.eDb,D.eEL,D.eDM,D.eDt,D.eEq],x.e)
D.eek=new C.y(2,4)
D.aLk=new C.y(4,5)
D.cVt=w([N.l0,M.I9,F.S6,D.eek,D.aLk],x.u)
D.fTp=new B.Fw("Heartbeat","Two thumps, then a shake",D.ddI,D.cVt)
D.eDC=new C.cI(["dice",0.15,0.7,1])
D.eER=new C.cI(["echo",0.4,0.7,0])
D.eDK=new C.cI(["comet",0.7,0.5,4])
D.eEF=new C.cI(["burst",0.72,0.2,1])
D.eE3=new C.cI(["burst",0.3,0.25,0])
D.eDD=new C.cI(["pop",0.55,0.85,0])
D.cfL=w([D.eDC,D.eER,D.eDK,D.eEF,D.eE3,D.eDD],x.e)
D.edL=new C.y(1,3)
D.edM=new C.y(1,4)
D.aLi=new C.y(0,5)
D.d2N=w([N.l0,W.uq,D.edL,D.edM,D.aLi],x.u)
D.fTo=new B.Fw("Fireworks","Dice launch comets that burst in colour",D.cfL,D.d2N)
D.eDH=new C.cI(["beat",0.15,0.2,2])
D.eEd=new C.cI(["chance",0.4,0.2,0])
D.eDz=new C.cI(["ball",0.7,0.12,3])
D.eDm=new C.cI(["chance",0.4,0.5,1])
D.eEQ=new C.cI(["ball",0.3,0.08,1])
D.eDf=new C.cI(["ripple",0.7,0.55,3])
D.c8N=w([D.eDH,D.eEd,D.eDz,D.eDm,D.eEQ,D.eDf],x.e)
D.eel=new C.y(2,5)
D.cvK=w([N.l0,W.uq,M.a5t,F.S7,D.eel],x.u)
D.fTm=new B.Fw("Rain","Balls fall at random and splash",D.c8N,D.cvK)
D.eEe=new C.cI(["beat",0.12,0.45,2])
D.eEG=new C.cI(["toggle",0.38,0.2,0])
D.eEN=new C.cI(["wash",0.7,0.15,4])
D.eDB=new C.cI(["count3",0.38,0.45,0])
D.eEI=new C.cI(["burst",0.72,0.4,0])
D.eE4=new C.cI(["light",0.55,0.7,1])
D.eDn=new C.cI(["pop",0.8,0.8,4])
D.d5n=w([D.eEe,D.eEG,D.eEN,D.eDB,D.eEI,D.eE4,D.eDn],x.e)
D.eeK=new C.y(3,6)
D.cbV=w([N.l0,W.uq,M.a5t,F.S7,D.aLi,D.eeK],x.u)
D.fTk=new B.Fw("Disco","A beat drives lights, washes and bursts",D.d5n,D.cbV)
D.eEU=new C.cI(["button",0.12,0.2,0])
D.eDh=new C.cI(["delay",0.34,0.2,1])
D.eET=new C.cI(["light",0.56,0.2,1])
D.eEM=new C.cI(["delay",0.56,0.45,1])
D.eEf=new C.cI(["ball",0.34,0.6,0])
D.eDl=new C.cI(["delay",0.34,0.8,1])
D.eDa=new C.cI(["burst",0.7,0.8,5])
D.bX2=w([D.eEU,D.eDh,D.eET,D.eEM,D.eEf,D.eDl,D.eDa],x.e)
D.egJ=new C.y(5,6)
D.dad=w([N.l0,W.uq,F.S6,F.S7,D.aLk,D.egJ],x.u)
D.fTl=new B.Fw("Domino","Tap the button and watch it run down the line",D.bX2,D.dad)
D.aw8=w([D.fTn,D.fTp,D.fTo,D.fTm,D.fTk,D.fTl],C.ax("O<Fw>"))
D.d0Q=w([0.05,0.15,0.25],x.n)
D.d13=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d1I=w([1.5,3,4.5,9,12],x.n)
D.eAb=new C.bt("dice","Dice",A.mp)
D.eBb=new C.bt("coin","Coin",K.y4)
D.eCP=new C.bt("num","Number",A.yd)
D.d1S=w([D.eAb,D.eBb,D.eCP],x.c)
D.d1V=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fzK=new B.OK("Moon",1.62,0,4291941851)
D.fzL=new B.OK("Mars",3.71,0.01,4294472049)
D.fzM=new B.OK("Earth",9.81,1,4281908728)
D.fzO=new B.OK("Jupiter",24.79,1.4,4294677052)
D.fzN=new B.OK("Sun",274,2,4294688548)
D.yD=w([D.fzK,D.fzL,D.fzM,D.fzO,D.fzN],C.ax("O<OK>"))
D.awe=w([A.c7,A.aM,A.b1,A.aS,A.bu,A.bV,A.cs,A.hv],x.O)
D.dZT={H:0}
D.dk1=new C.bk(D.dZT,[2],x.I)
D.dlA=new B.t7("Hydrogen","H\u2082",D.dk1,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dZU={H:0,Cl:1}
D.dke=new C.bk(D.dZU,[1,1],x.I)
D.dlC=new B.t7("Hydrogen chloride","HCl",D.dke,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dZV={H:0,O:1}
D.djL=new C.bk(D.dZV,[2,1],x.I)
D.dlD=new B.t7("Water","H\u2082O",D.djL,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e_7={N:0,H:1}
D.dkB=new C.bk(D.e_7,[1,3],x.I)
D.dlL=new B.t7("Ammonia","NH\u2083",D.dkB,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4C={C:0,H:1}
D.dkv=new C.bk(D.a4C,[1,4],x.I)
D.dlE=new B.t7("Methane","CH\u2084",D.dkv,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dZW={H:0,S:1}
D.diT=new C.bk(D.dZW,[2,1],x.I)
D.dlK=new B.t7("Hydrogen sulfide","H\u2082S",D.diT,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e_c={O:0}
D.dkz=new C.bk(D.e_c,[2],x.I)
D.dlM=new B.t7("Oxygen","O\u2082",D.dkz,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e_6={N:0}
D.dk2=new C.bk(D.e_6,[2],x.I)
D.dlB=new B.t7("Nitrogen","N\u2082",D.dk2,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dZH={C:0,O:1}
D.dkH=new C.bk(D.dZH,[1,2],x.I)
D.dlI=new B.t7("Carbon dioxide","CO\u2082",D.dkH,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aFA={C:0,H:1,O:2}
D.diE=new C.bk(D.aFA,[1,2,1],x.I)
D.dlJ=new B.t7("Formaldehyde","CH\u2082O",D.diE,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dku=new C.bk(D.a4C,[2,4],x.I)
D.dlG=new B.t7("Ethene","C\u2082H\u2084",D.dku,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dkt=new C.bk(D.a4C,[2,6],x.I)
D.dlF=new B.t7("Ethane","C\u2082H\u2086",D.dkt,"Two carbons joined by a single bond, each holding three hydrogens.")
D.diF=new C.bk(D.aFA,[1,4,1],x.I)
D.dlH=new B.t7("Methanol","CH\u2083OH",D.diF,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2b=w([D.dlA,D.dlC,D.dlD,D.dlL,D.dlE,D.dlK,D.dlM,D.dlB,D.dlI,D.dlJ,D.dlG,D.dlF,D.dlH],C.ax("O<t7>"))
D.d2T=w([A.bV,A.aS,A.dO,A.b1],x.O)
D.d3N=w([],x.h)
D.d3Q=w([],x.B)
D.a2k=w([],x.F)
D.e6p=new B.e9("battery","Battery","\ud83d\udd0b",A.b1,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e6v=new B.e9("solar","Solar panel","\u2600\ufe0f",A.cd,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e79=new B.e9("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e6M=new B.e9("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aS,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e6h=new B.e9("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e6K=new B.e9("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e7e=new B.e9("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e6W=new B.e9("ldr","Light sensor","\ud83c\udf1e",A.dO,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e6A=new B.e9("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e7b=new B.e9("fuse","Fuse","\ud83e\uddef",A.c7,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e69=new B.e9("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e6X=new B.e9("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e6Z=new B.e9("bulb","Light bulb","\ud83d\udca1",A.dO,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e6x=new B.e9("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e6B=new B.e9("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e6T=new B.e9("buzzer","Buzzer","\ud83d\udd14",A.bV,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e6q=new B.e9("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e6O=new B.e9("capacitor","Capacitor","\ud83e\udeab",A.cr,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e6G=new B.e9("radio","Radio","\ud83d\udcfb",A.nM,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e6D=new B.e9("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e6g=new B.e9("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e6n=new B.e9("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e6t=new B.e9("fan","Fan","\ud83c\udf00",A.aS,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e7g=new B.e9("speaker","Speaker","\ud83d\udd0a",A.bV,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e75=new B.e9("clock","Digital clock","\u23f0",A.b1,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e6J=new B.e9("calculator","Calculator","\ud83e\uddee",A.Ki,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e6m=new B.e9("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cr,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e7f=new B.e9("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e7i=new B.e9("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e6c=new B.e9("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e7j=new B.e9("kettle","Kettle","\ud83e\uded6",A.me,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e6k=new B.e9("lamp","Desk lamp","\ud83e\ude94",A.dO,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e6w=new B.e9("lights","Party lights","\ud83c\udf84",A.nM,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e6H=new B.e9("fridge","Fridge","\ud83e\uddca",A.hh,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e6e=new B.e9("washer","Washing machine","\ud83e\udee7",A.cr,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e76=new B.e9("blender","Blender","\ud83e\udd64",A.c7,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e6E=new B.e9("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e6j=new B.e9("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e6I=new B.e9("torch","Torch","\ud83d\udd26",A.bK,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e73=new B.e9("neon","Neon sign","\ud83e\udea7",A.bV,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e6f=new B.e9("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e6Y=new B.e9("doorbell","Doorbell","\ud83d\udd14",A.cd,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e6s=new B.e9("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e6S=new B.e9("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e78=new B.e9("heartmon","Heart monitor","\ud83e\ude7a",A.h0,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e6d=new B.e9("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e6N=new B.e9("lighthouse","Lighthouse","\ud83d\uddfc",A.dO,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e6V=new B.e9("discoball","Disco ball","\ud83e\udea9",A.nM,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e7d=new B.e9("robot","Robot","\ud83e\udd16",A.aS,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e6b=new B.e9("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e7h=new B.e9("ledstrip","LED strip","\ud83c\udf08",A.bV,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e72=new B.e9("pump","Water pump","\ud83d\udeb0",A.aS,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e6P=new B.e9("hairdryer","Hair dryer","\ud83d\udca8",A.j6,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e70=new B.e9("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e6l=new B.e9("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e7c=new B.e9("tablet","iPad Pro M5","\ud83d\udcf2",A.cr,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e68=new B.e9("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h0,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e6F=new B.e9("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e6y=new B.e9("appletv","Apple TV 4K","\ud83d\udcfa",A.bS,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e6U=new B.e9("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t5,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e6a=new B.e9("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e6o=new B.e9("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e7a=new B.e9("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cz,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e6Q=new B.e9("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bo,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e6L=new B.e9("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ci,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e71=new B.e9("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e6z=new B.e9("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b1,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e6R=new B.e9("honor","Honor Magic V5","\ud83d\udcf1",A.cr,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e7_=new B.e9("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e74=new B.e9("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e67=new B.e9("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cc,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e6C=new B.e9("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cz,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e6u=new B.e9("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e6i=new B.e9("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dO,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e6r=new B.e9("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e77=new B.e9("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Q3=w([D.e6p,D.e6v,D.e79,D.e6M,D.e6h,D.e6K,D.e7e,D.e6W,D.e6A,D.e7b,D.e69,D.e6X,D.e6Z,D.e6x,D.e6B,D.e6T,D.e6q,D.e6O,D.e6G,D.e6D,D.e6g,D.e6n,D.e6t,D.e7g,D.e75,D.e6J,D.e6m,D.e7f,D.e7i,D.e6c,D.e7j,D.e6k,D.e6w,D.e6H,D.e6e,D.e76,D.e6E,D.e6j,D.e6I,D.e73,D.e6f,D.e6Y,D.e6s,D.e6S,D.e78,D.e6d,D.e6N,D.e6V,D.e7d,D.e6b,D.e7h,D.e72,D.e6P,D.e70,D.e6l,D.e7c,D.e68,D.e6F,D.e6y,D.e6U,D.e6a,D.e6o,D.e7a,D.e6Q,D.e6L,D.e71,D.e6z,D.e6R,D.e7_,D.e74,D.e67,D.e6C,D.e6u,D.e6i,D.e6r,D.e77],C.ax("O<e9>"))
D.d4c=w([0,0.46,0.82],x.n)
D.d4n=w([5,10,15,25,45,60],x.t)
D.d4H=w([-0.045,0.03,-0.015],x.n)
D.d54=w([0.9,0.97,1],x.n)
D.awF=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.u3=w([0.05,0.2,0.35],x.n)
D.cMZ=w([D.Ez,D.Ez],x.O)
D.cS8=w([A.EJ,A.M],x.O)
D.cRa=w([A.fx,A.hu],x.O)
D.cLa=w([A.fc,A.nL],x.O)
D.c8j=w([A.lC,A.dx],x.O)
D.awG=w([D.cMZ,D.cS8,D.cRa,D.cLa,D.c8j],x.Q)
D.fzy=new B.uW("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fzz=new B.uW("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fzq=new B.uW("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fzx=new B.uW("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fzv=new B.uW("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fzr=new B.uW("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fzw=new B.uW("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fzs=new B.uW("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fzu=new B.uW("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fzt=new B.uW("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.C5=w([D.fzy,D.fzz,D.fzq,D.fzx,D.fzv,D.fzr,D.fzw,D.fzs,D.fzu,D.fzt],C.ax("O<uW>"))
D.be_=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d6e=w([D.Ez,D.be_,D.ad1,A.acz],x.O)
D.b0b=new C.ac(0,A.G,A.hI,A.dE,6)
D.d77=w([D.b0b],x.V)
D.ed8=new C.y(0,"AND")
D.edN=new C.y(1,"Adder")
D.eem=new C.y(2,"Blinker")
D.eeL=new C.y(3,"Memory")
D.d7S=w([D.ed8,D.edN,D.eem,D.eeL],x.E)
D.awS=w([-104,0,104],x.n)
D.awT=w([-14,3],x.n)
D.d8l=w([-16,16],x.n)
D.awU=w([-22,22],x.n)
D.d8t=w([-8,0,8],x.n)
D.d8u=w([-8,8],x.n)
D.awX=w([-92,0,92],x.n)
D.d8P=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eHo=new B.uH("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eHv=new B.uH("Medium tank","Balanced.",0.35,1)
D.eHu=new B.uH("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qg=w([D.eHo,D.eHv,D.eHu],x._)
D.nk=w([0.04,0.2,0.36],x.n)
D.ax6=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eCw=new C.bt(D.aUp,"Fold",K.alt)
D.eBI=new C.bt(D.a8Z,"Flip",A.FO)
D.bBO=new C.a0(62889,"MaterialIcons",!1)
D.eCN=new C.bt(D.aUq,"Rise",D.bBO)
D.alH=new C.a0(983870,"MaterialIcons",!1)
D.ezL=new C.bt(D.a9_,"Assemble",D.alH)
D.ezU=new C.bt(D.aUr,"Spin",D.ajX)
D.ezR=new C.bt(D.aUs,"Pop",A.lg)
D.daa=w([D.eCw,D.eBI,D.eCN,D.ezL,D.ezU,D.ezR],C.ax("O<+(K1,n,a0)>"))
D.axb=w([A.bV,A.dO,A.bt,A.aS,A.bu,A.c7],x.O)
D.dal=w([A.aS,A.cs,A.cs,A.b1],x.O)
D.dax=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eyJ=new C.y("Make the output turn HALF as fast as the input.",0.5)
D.ek7=new C.y("Make the output turn TWICE as fast.",2)
D.edX=new C.y("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.exq=new C.y("Make the output turn 4 times faster.",4)
D.epG=new C.y("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.esI=new C.y("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.ere=new C.y("Make the output turn 3 times faster.",3)
D.erZ=new C.y("Make the output spin at the same speed as the input, using four different gears.",1)
D.axg=w([D.eyJ,D.ek7,D.edX,D.exq,D.epG,D.esI,D.ere,D.erZ],C.ax("O<+(n,N)>"))
D.dbv=w([3,4.5,5,6,9],x.n)
D.b0J=new C.ac(0,A.G,A.aX,A.J,16)
D.dbW=w([D.b0J],x.V)
D.Qi=w([A.bV,A.cd,A.b1,A.aS,A.bu,A.c7,A.c,A.cs],x.O)
D.dcn=w(["solar","turbine","crank","pot"],x.s)
D.dcH=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dcN=w([0,0.35,0.75,1],x.n)
D.eA6=new C.bt("drop","Drop",D.ali)
D.eA8=new C.bt("weight","Weight",R.alL)
D.eCI=new C.bt("cannon","Newton's cannon",A.akG)
D.ddq=w([D.eA6,D.eA8,D.eCI],x.c)
D.ew4=new C.y("piano","Piano")
D.evL=new C.y("organ","Organ")
D.eqW=new C.y("bell","Bell")
D.ew6=new C.y("pluck","Pluck")
D.exp=new C.y("synth","Synth")
D.esD=new C.y("flute","Flute")
D.axy=w([D.ew4,D.evL,D.eqW,D.ew6,D.exp,D.esD],x.K)
D.ddW=w(["volts","level","ohms","on"],x.s)
D.dfd=w([A.ji,A.BD,A.Br,A.pS,A1.Ga,A.tW,A.yb,A.pW,A.hL,A.ng,A.h7,A.dW,A.i_,A.i0,A.mq,A.lM,A.vG,A.r8,A.lN,A.FG,A.tV,A.N9,A.Bt,A.ald,A.N_,A.y7,A.N7,A.akQ,T.alD,A.lg],x.w)
D.dg6=w([0.72,1],x.n)
D.dgh=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e0m={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.diy=new C.bk(D.e0m,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aFC={A:0,T:1,C:2,G:3}
D.a3d=new C.bk(D.aFC,["U","A","G","C"],x.l)
D.diG=new C.bk(D.aFC,["T","A","G","C"],x.l)
D.e_3={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d2X=w([0,2,4,5,7,9,11],x.t)
D.cMg=w([0,2,3,5,7,8,10],x.t)
D.d84=w([0,3,5,6,7,10],x.t)
D.Cb=new C.bk(D.e_3,[D.avA,D.d2X,D.cMg,D.d84,D.aoc],C.ax("bk<n,ai<H>>"))
D.e0a={A:0,T:1,U:2,C:3,G:4}
D.diW=new C.bk(D.e0a,[A.c7,A.cr,A.cr,A.aM,A.b1],C.ax("bk<n,w>"))
D.dZq={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fN3=new B.xS("Switch",F.Nx,A.cd,0,"Tap it to turn it ON or OFF.")
D.fN_=new B.xS("Blinker",A.oI,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fN0=new B.xS("AND",D.alH,A.cr,2,"ON only when BOTH inputs are ON.")
D.bDg=new C.a0(63671,"MaterialIcons",!1)
D.fMZ=new B.xS("OR",D.bDg,A.bu,2,"ON when EITHER input is ON.")
D.fN1=new B.xS("XOR",G.a_i,A.bV,2,"ON when the inputs are DIFFERENT.")
D.fMW=new B.xS("NAND",A.tK,A.aS,2,"OFF only when BOTH inputs are ON.")
D.bCm=new C.a0(63176,"MaterialIcons",!1)
D.fMX=new B.xS("NOR",D.bCm,A.hv,2,"ON only when BOTH inputs are OFF.")
D.fMY=new B.xS("NOT",Z.G6,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fN2=new B.xS("Light",A.r3,A.dO,1,"Glows when its input is ON.")
D.fN4=new B.xS("Buzzer",A.o_,A.c7,1,"Beeps while its input is ON.")
D.yQ=new C.bk(D.dZq,[D.fN3,D.fN_,D.fN0,D.fMZ,D.fN1,D.fMW,D.fMX,D.fMY,D.fN2,D.fN4],C.ax("bk<n,xS>"))
D.e07={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eAu=new C.bt(3,20,1.9)
D.eA1=new C.bt(33,90,1.6)
D.eD5=new C.bt(52,15,3.2)
D.eD3=new C.bt(45,-100,1.8)
D.eBC=new C.bt(-15,-60,1.9)
D.eB7=new C.bt(-25,140,2.4)
D.eAZ=new C.bt(-82,0,2.2)
D.aCZ=new C.bk(D.e07,[D.eAu,D.eA1,D.eD5,D.eD3,D.eBC,D.eB7,D.eAZ],C.ax("bk<n,+(N,N,N)>"))
D.cLH=w([A.A],x.M)
D.cLZ=w([A.ax,A.aC],x.M)
D.cUE=w([A.ax,A.A,A.aC],x.M)
D.cW0=w([A.ax,A.l5,A.A,A.lw,A.aC],x.M)
D.d7O=w([A.ax,A.l5,A.a3,A.a7,A.lw,A.aC],x.M)
D.djS=new C.dS([1,D.cLH,2,D.cLZ,3,D.cUE,4,A.axD,5,D.cW0,6,D.d7O],C.ax("dS<H,ai<da>>"))
D.e_4={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eBO=new C.bt(1,A.bS,"Hydrogen")
D.eAJ=new C.bt(4,A.bn,"Carbon")
D.ezM=new C.bt(3,A.d6,"Nitrogen")
D.eC6=new C.bt(2,A.ay,"Oxygen")
D.eBv=new C.bt(2,A.cd,"Sulfur")
D.eCF=new C.bt(1,A.bo,"Chlorine")
D.vW=new C.bk(D.e_4,[D.eBO,D.eAJ,D.ezM,D.eC6,D.eBv,D.eCF],C.ax("bk<n,+(H,w,n)>"))
D.e0s={Calm:0,Box:1,Sleep:2}
D.ctg=w([4,2,6,0],x.n)
D.ctn=w([4,4,4,4],x.n)
D.cto=w([4,7,8,0],x.n)
D.QH=new C.bk(D.e0s,[D.ctg,D.ctn,D.cto],C.ax("bk<n,ai<N>>"))
D.dZz={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wy=new B.a_L(0,"source")
D.cVw=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fS0=new B.pW("Clock",A.oI,D.wy,A.bt,D.cVw)
D.fRX=new B.pW("Button",A.yf,D.wy,A.aM,A.T)
D.dbH=w(["random","quick","slow"],x.s)
D.fS7=new B.pW("Dice",A.mp,D.wy,A.bV,D.dbH)
D.bCW=new C.a0(63484,"MaterialIcons",!1)
D.Dz=new B.a_L(1,"logic")
D.dg1=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fS3=new B.pW("Delay",D.bCW,D.Dz,A.cr,D.dg1)
D.d4u=w(["fast","mid","slow"],x.s)
D.fS8=new B.pW("Echo",A.al6,D.Dz,A.bu,D.d4u)
D.fS5=new B.pW("Every 2nd",Z.G6,D.Dz,A.hv,A.T)
D.bCB=new C.a0(63309,"MaterialIcons",!1)
D.fS2=new B.pW("Every 3rd",D.bCB,D.Dz,A.aS,A.T)
D.bEx=new C.a0(983902,"MaterialIcons",!1)
D.bWs=w(["50%","25%","75%"],x.s)
D.fSa=new B.pW("Chance",D.bEx,D.Dz,A.cs,D.bWs)
D.qq=new B.a_L(2,"out")
D.fRZ=new B.pW("Light",A.r3,D.qq,A.dO,A.T)
D.fS_=new B.pW("Burst",A.lg,D.qq,A.bV,A.T)
D.fRY=new B.pW("Ripple",A.yj,D.qq,A.b8,A.T)
D.fS6=new B.pW("Ball",A.alk,D.qq,A.cs,A.T)
D.fS4=new B.pW("Comet",A.ng,D.qq,A.bu,A.T)
D.bEh=new C.a0(983669,"MaterialIcons",!1)
D.fS9=new B.pW("Shake",D.bEh,D.qq,A.c7,A.T)
D.fSb=new B.pW("Pop",A.FH,D.qq,A.b1,A.T)
D.fS1=new B.pW("Wash",A.Nc,D.qq,A.pn,A.T)
D.my=new C.bk(D.dZz,[D.fS0,D.fRX,D.fS7,D.fS3,D.fS8,D.fS5,D.fS2,D.fSa,D.fRZ,D.fS_,D.fRY,D.fS6,D.fS4,D.fS9,D.fSb,D.fS1],C.ax("bk<n,pW>"))
D.e0b={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Cc=new C.bk(D.e0b,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dZN={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zh=new B.IZ(0,"tv")
D.eIT=new B.m2("Samsung Neo QLED 8K",D.zh,F.Ek,A.aS)
D.eIK=new B.m2("LG OLED evo G5",D.zh,A.e9,A.h0)
D.eIB=new B.m2("Sony Bravia 9",D.zh,A.qB,A.br)
D.eIF=new B.m2("Apple TV 4K",D.zh,A.e_,A.bS)
D.eIC=new B.m2("Bang and Olufsen Beovision",D.zh,F.E3,F.t5)
D.Ie=new B.IZ(1,"iphone")
D.aLZ=new B.m2("iPhone 18 Pro Max",D.Ie,D.afh,A.cc)
D.w8=new B.IZ(3,"fold")
D.bjV=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eIP=new B.m2("iPhone Fold",D.w8,D.bjV,A.b7)
D.ut=new B.IZ(2,"android")
D.eIQ=new B.m2("Samsung Galaxy S26 Ultra",D.ut,F.abq,A.d6)
D.bdx=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eII=new B.m2("Samsung Galaxy Z Fold7",D.w8,D.bdx,A.cz)
D.eIE=new B.m2("Google Pixel 10 Pro XL",D.ut,A.dA,A.bo)
D.eIM=new B.m2("Xiaomi 16 Ultra",D.ut,A.lG,A.ci)
D.eIH=new B.m2("Huawei Mate 80 Pro Max",D.ut,A.eN,A.ay)
D.eID=new B.m2("OPPO Find X9 Ultra",D.ut,A.e3,A.b1)
D.eIV=new B.m2("Honor Magic V5",D.w8,A.dr,A.cr)
D.eIJ=new B.m2("vivo X300 Pro",D.ut,A.hu,A.cs)
D.Sf=new B.IZ(4,"tablet")
D.eIO=new B.m2("iPad Pro M5",D.Sf,A.dA,A.aS)
D.a5J=new B.IZ(5,"reader")
D.eIW=new B.m2("Kindle Scribe",D.a5J,A.eu,A.br)
D.zi=new B.IZ(6,"computer")
D.eIN=new B.m2("MacBook Pro M5 Max",D.zi,A.dA,A.cc)
D.eIS=new B.m2("iMac 32 inch",D.zi,A.bS,A.cz)
D.eIL=new B.m2("Pro Display XDR 8K",D.zi,A.lG,A.b8)
D.eIG=new B.m2("Sony Laser Projector",D.zi,A.cE,A.dO)
D.eIR=new B.m2("Luxury car touchscreen",D.zi,L.mY,A.ay)
D.eIU=new B.m2("Apple Vision Pro",D.zi,A.jt,A.bu)
D.lU=new C.bk(D.dZN,[D.eIT,D.eIK,D.eIB,D.eIF,D.eIC,D.aLZ,D.eIP,D.eIQ,D.eII,D.eIE,D.eIM,D.eIH,D.eID,D.eIV,D.eIJ,D.eIO,D.eIW,D.eIN,D.eIS,D.eIL,D.eIG,D.eIR,D.eIU],C.ax("bk<n,m2>"))
D.dZZ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bmq=new B.fK(20,4,13,!1)
D.bmR=new B.fK(14,5,13.5,!1)
D.bmI=new B.fK(9,2.4,10,!1)
D.bmW=new B.fK(7,5,12.5,!1)
D.bmL=new B.fK(8,3.5,12,!1)
D.bmm=new B.fK(15,2,6,!1)
D.bmU=new B.fK(45,6,13.5,!0)
D.bmC=new B.fK(10,8,13.5,!1)
D.bmu=new B.fK(25,3,12,!0)
D.bmA=new B.fK(35,4,12,!0)
D.bmB=new B.fK(40,4.5,9.5,!0)
D.bmD=new B.fK(55,3,9,!0)
D.bmn=new B.fK(18,3,9,!1)
D.bmT=new B.fK(22,4,13.5,!1)
D.bmM=new B.fK(16,5,13.5,!1)
D.bmy=new B.fK(30,4,9,!0)
D.bn4=new B.fK(5,3.5,13,!1)
D.bmG=new B.fK(25,3,13.5,!0)
D.bmP=new B.fK(14,2.5,9,!1)
D.bmF=new B.fK(6,6,13,!1)
D.bmX=new B.fK(30,1.2,5,!0)
D.bn3=new B.fK(35,3,4.5,!0)
D.bn_=new B.fK(20,4.5,7.5,!0)
D.bmE=new B.fK(55,5.5,13.5,!0)
D.bml=new B.fK(45,5.5,13.5,!0)
D.bmQ=new B.fK(40,5.5,13.5,!0)
D.bn2=new B.fK(60,6,13.5,!0)
D.afJ=new B.fK(28,4,7,!0)
D.EW=new B.fK(25,4,7,!0)
D.bmx=new B.fK(30,4,7,!0)
D.bms=new B.fK(22,4,7,!0)
D.bmt=new B.fK(24,4,7,!0)
D.bmH=new B.fK(60,3,5.5,!0)
D.bmo=new B.fK(18,9,14,!0)
D.bmv=new B.fK(25,9,14,!0)
D.afK=new B.fK(30,8,14,!0)
D.bmr=new B.fK(20,8,14,!0)
D.bmz=new B.fK(30,9,14,!0)
D.bmY=new B.fK(22,5,9.5,!0)
D.bmp=new B.fK(30,2.5,10.5,!0)
D.bmN=new B.fK(50,5.5,13.5,!0)
D.bn1=new B.fK(12,2,9.5,!1)
D.bmK=new B.fK(16,1.3,9.5,!0)
D.bmV=new B.fK(40,2.5,7,!0)
D.bn0=new B.fK(60,1.2,4.8,!0)
D.bmZ=new B.fK(18,5,13.5,!0)
D.bmS=new B.fK(8,2,9.5,!1)
D.bmJ=new B.fK(12,2.5,8,!1)
D.bmw=new B.fK(20,3.5,13.5,!0)
D.bmO=new B.fK(3.5,3,13,!1)
D.yR=new C.bk(D.dZZ,[D.bmq,D.bmR,D.bmI,D.bmW,D.bmL,D.bmm,D.bmU,D.bmC,D.bmu,D.bmA,D.bmB,D.bmD,D.bmn,D.bmT,D.bmM,D.bmy,D.bn4,D.bmG,D.bmP,D.bmF,D.bmX,D.bn3,D.bn_,D.bmE,D.bml,D.bmQ,D.bn2,D.afJ,D.EW,D.bmx,D.EW,D.bms,D.EW,D.bmt,D.afJ,D.EW,D.bmH,D.bmo,D.bmv,D.afK,D.bmr,D.bmz,D.bmY,D.bmp,D.bmN,D.bn1,D.bmK,D.bmV,D.bn0,D.EW,D.afK,D.bmZ,D.bmS,D.bmJ,D.bmw,D.bmO],C.ax("bk<n,fK>"))
D.dZy={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ezi=new C.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.egG=new C.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.egB=new C.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.erY=new C.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.esU=new C.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.erU=new C.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eeQ=new C.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.epW=new C.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ezr=new C.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ete=new C.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ejx=new C.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eey=new C.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eiC=new C.y("Movement","They pull your legs together and help you balance.")
D.ekr=new C.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.egP=new C.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ex0=new C.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ey3=new C.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.epH=new C.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.exO=new C.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eoq=new C.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.etm=new C.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eeF=new C.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ekO=new C.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.et3=new C.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eoK=new C.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.exW=new C.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.erq=new C.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eeO=new C.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.etV=new C.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ewE=new C.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.euV=new C.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.edh=new C.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.er8=new C.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.erc=new C.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.elt=new C.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.egW=new C.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ekg=new C.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eq5=new C.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.evE=new C.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ezo=new C.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.etj=new C.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ed4=new C.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eqg=new C.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.edG=new C.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.evU=new C.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ewX=new C.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eqG=new C.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ew8=new C.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eeH=new C.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.exs=new C.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ei1=new C.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.evj=new C.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ela=new C.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eoF=new C.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.etD=new C.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.exD=new C.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.exu=new C.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.exz=new C.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ep8=new C.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eur=new C.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.euS=new C.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.exh=new C.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eqF=new C.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.en4=new C.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.elU=new C.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.er3=new C.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.etw=new C.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.enA=new C.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eoe=new C.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ein=new C.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ewT=new C.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ej9=new C.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.edD=new C.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.els=new C.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.edy=new C.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ehg=new C.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.elx=new C.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eji=new C.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.etR=new C.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eku=new C.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ez5=new C.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.em2=new C.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ep2=new C.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.erx=new C.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ejp=new C.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ejb=new C.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dl0=new C.bk(D.dZy,[D.ezi,D.egG,D.egB,D.erY,D.esU,D.erU,D.eeQ,D.epW,D.ezr,D.ete,D.ejx,D.eey,D.eiC,D.ekr,D.egP,D.ex0,D.ey3,D.epH,D.exO,D.eoq,D.etm,D.eeF,D.ekO,D.et3,D.eoK,D.exW,D.erq,D.eeO,D.etV,D.ewE,D.euV,D.edh,D.er8,D.erc,D.elt,D.egW,D.ekg,D.eq5,D.evE,D.ezo,D.etj,D.ed4,D.eqg,D.edG,D.evU,D.ewX,D.eqG,D.ew8,D.eeH,D.exs,D.ei1,D.evj,D.ela,D.eoF,D.etD,D.exD,D.exu,D.exz,D.ep8,D.eur,D.euS,D.exh,D.eqF,D.en4,D.elU,D.er3,D.etw,D.enA,D.eoe,D.ein,D.ewT,D.ej9,D.edD,D.els,D.edy,D.ehg,D.elx,D.eji,D.etR,D.eku,D.ez5,D.em2,D.ep2,D.erx,D.ejp,D.ejb],C.ax("bk<n,+(n,n)>"))
D.dl2=new C.hu(A.G,11)
D.dl7=new C.hu(A.G,30)
D.do2=new B.TH(null)
D.drR=new B.TL(null)
D.drS=new B.TM(null)
D.ds4=new B.TN(null)
D.du5=new B.TP(null)
D.du6=new B.TQ(null)
D.du7=new B.TR(null)
D.duW=new B.Uc(null)
D.duY=new B.Ur(null)
D.duZ=new B.Us(null)
D.dv0=new B.Ut(null)
D.dvy=new B.UA(null)
D.dxt=new B.UE(null)
D.dxu=new B.UG(null)
D.dxv=new B.UH(null)
D.dxx=new B.UI(null)
D.dz6=new B.UZ(null)
D.dz8=new B.V0(null)
D.dzd=new B.Va(null)
D.dzo=new B.Vb(null)
D.dzU=new B.Vc(null)
D.dBo=new B.Ve(null)
D.dCM=new B.Vg(null)
D.dCN=new B.Vh(null)
D.dE7=new B.Vk(null)
D.dU0=new B.Vl(null)
D.dU1=new B.Vn(null)
D.dU2=new B.Vq(null)
D.dU3=new B.Vr(null)
D.dVX=new B.Vz(null)
D.dVY=new B.VA(null)
D.dW5=new B.VH(null)
D.dWe=new B.VL(null)
D.dWf=new B.VM(null)
D.dWg=new B.a7M(null)
D.dWR=new B.VO(null)
D.dYj=new B.VS(null)
D.e0D=new C.u(0,118)
D.aFJ=new C.u(0,13)
D.e0E=new C.u(0,17)
D.e0H=new C.u(0,330)
D.e0K=new C.u(0,-13)
D.aFP=new C.u(0,-14)
D.e0L=new C.u(0,-17)
D.e0M=new C.u(0,-18)
D.e0N=new C.u(0,-19)
D.e0O=new C.u(0,-20)
D.e0R=new C.u(0,-26)
D.e0S=new C.u(0,-28)
D.e0T=new C.u(0,-31)
D.e0U=new C.u(0,-32)
D.w2=new C.u(0,-6)
D.e0V=new C.u(0,-6771)
D.e0W=new C.u(0,-9)
D.e0Y=new C.u(-9.5,-11)
D.e0Z=new C.u(10,20)
D.e10=new C.u(10,-13)
D.e11=new C.u(10,-22)
D.e12=new C.u(10,-4)
D.a4G=new C.u(11,8)
D.e14=new C.u(12,2)
D.e15=new C.u(14,0)
D.e16=new C.u(14,12)
D.aFT=new C.u(14,8)
D.e17=new C.u(14,-17)
D.e18=new C.u(14,-18)
D.aFU=new C.u(14,-3)
D.aFV=new C.u(14,-4)
D.e19=new C.u(15,0)
D.e1a=new C.u(15,-12)
D.e1b=new C.u(16,-8)
D.e1c=new C.u(18,14)
D.e1d=new C.u(18,-12)
D.aFZ=new C.u(20,0)
D.e1j=new C.u(20,15)
D.e1k=new C.u(20,-17)
D.e1l=new C.u(20,-3)
D.e1m=new C.u(21,8)
D.e1o=new C.u(22,10)
D.aG_=new C.u(22,8)
D.e1p=new C.u(24,0)
D.e1q=new C.u(24,2)
D.e1s=new C.u(24,-18)
D.e1t=new C.u(24,-22)
D.e1u=new C.u(25,8)
D.e1v=new C.u(26,0)
D.e1B=new C.u(28,-30)
D.e1G=new C.u(30,18)
D.e1H=new C.u(30,2)
D.e1I=new C.u(31,19)
D.e1J=new C.u(32,0)
D.aG2=new C.u(34,0)
D.aG3=new C.u(34,-32)
D.HQ=new C.u(36,0)
D.e1O=new C.u(3,-1)
D.e1R=new C.u(40,3)
D.e1V=new C.u(4,11)
D.e1Y=new C.u(4,-2)
D.e21=new C.u(5,0)
D.e22=new C.u(5,17)
D.e23=new C.u(5,6)
D.e27=new C.u(6,11)
D.e2d=new C.u(8,7)
D.e2e=new C.u(8,-10)
D.e2f=new C.u(8,-14)
D.e2g=new C.u(8,-3)
D.aG7=new C.u(9,0)
D.e2j=new C.u(-20.5,-17.6)
D.e2k=new C.u(-9,18.5)
D.e2n=new C.u(-2.6,-1)
D.e2o=new C.u(1.9,-0.8)
D.e2r=new C.u(-0.22,0.09)
D.e2w=new C.u(2.6,1)
D.e2D=new C.u(-9,12.2)
D.e2V=new C.u(-9,20.5)
D.e3c=new C.u(-10,0)
D.e3d=new C.u(-10,12)
D.aGe=new C.u(-10,4)
D.e3e=new C.u(-11,-2)
D.e3f=new C.u(-13,-5)
D.e3g=new C.u(-14,0)
D.e3h=new C.u(-14,13)
D.e3i=new C.u(-14,2)
D.e3j=new C.u(-14,-12)
D.e3k=new C.u(-14,-19)
D.e3l=new C.u(-14,-23)
D.e3m=new C.u(-15,6)
D.e3n=new C.u(-16,14)
D.e3o=new C.u(-16,-8)
D.e3p=new C.u(-17,10)
D.e3q=new C.u(-17,-18)
D.e3r=new C.u(-17,-8)
D.e3t=new C.u(-18,20)
D.e3u=new C.u(-18,-9)
D.aGg=new C.u(-20,0)
D.e3w=new C.u(-20,16)
D.e3x=new C.u(-20,-9)
D.RF=new C.u(-22,8)
D.e3y=new C.u(-22,-10)
D.e3z=new C.u(-22,-11)
D.e3A=new C.u(-24,10)
D.e3B=new C.u(-24,11)
D.e3C=new C.u(-24,14)
D.e3D=new C.u(-24,-22)
D.e3E=new C.u(-25,-11)
D.e3F=new C.u(-26,0)
D.e3G=new C.u(-26,-18)
D.e3H=new C.u(-2,9)
D.e3I=new C.u(-2,-10)
D.e3J=new C.u(-2,-20)
D.e3K=new C.u(-2,-9)
D.e3L=new C.u(-32,0)
D.aGi=new C.u(-34,0)
D.e3Q=new C.u(-40,3)
D.e3S=new C.u(-4,11)
D.e3T=new C.u(-4,-17)
D.e3U=new C.u(-4,-2)
D.e3W=new C.u(-5,0)
D.e3X=new C.u(-5,20)
D.e3Y=new C.u(-5,6)
D.e3Z=new C.u(-6,26)
D.e4_=new C.u(-6,6)
D.e40=new C.u(-6,-42)
D.e41=new C.u(-7,-19)
D.e42=new C.u(-7,-24)
D.e43=new C.u(-8,-9)
D.a4K=new C.u(-9,0)
D.e44=new C.u(-9,1)
D.e45=new C.u(-9,-23)
D.fcN=new C.x("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.e51=new C.C(A.kk,D.fcN,null)
D.fsE=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e5b=new C.C(A9.vj,D.fsE,null)
D.bu9=new C.Q(4,0,4,14)
D.f8e=new C.G(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdH=new C.x("Games and little helpers for a spare minute.",null,D.f8e,null,null,null,null,null,null,null,null,null)
D.e5l=new C.C(D.bu9,D.fdH,null)
D.fpu=new C.x("Tap to throw in a star",null,A.kz,null,null,null,null,null,null,null,null,null)
D.b3T=new C.cr(A.A,null,null,D.fpu,null)
D.ebb=new C.cL(0,null,0,14,null,null,D.b3T,null)
D.d52=w([A.iN,A.bn],x.O)
D.aLa=new C.bS(A.A,0.5,A.x,null,0,D.d52,null,null)
D.ebU=new C.bS(A.A,0.5,A.x,null,0,D.axq,null,null)
D.cXI=w([A.c,A.bJ],x.O)
D.ebW=new C.bS(A.A,0.5,A.x,null,0,D.cXI,null,null)
D.ebX=new C.bS(A.A,0.5,A.x,null,0,M.aww,null,null)
D.dcz=w([A.bS,A.jt],x.O)
D.aLb=new C.bS(A.A,0.5,A.x,null,0,D.dcz,null,null)
D.cCX=w([A.c,A.bS],x.O)
D.ec0=new C.bS(A.rP,0.5,A.x,null,0,D.cCX,null,null)
D.bb_=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bgg=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cWM=w([D.bb_,D.aeQ,D.bgg],x.O)
D.d36=w([0,0.7,1],x.n)
D.ec2=new C.bS(A.rP,0.5,A.x,null,0,D.cWM,D.d36,null)
D.ctu=w([A.ow,A.aH,A.K],x.O)
D.d9t=w([0.3,0.7,1],x.n)
D.ec4=new C.bS(A.A,0.5,A.x,null,0,D.ctu,D.d9t,null)
D.bjY=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.daP=w([A.f7,D.bjY],x.O)
D.ec6=new C.bS(A.rP,0.5,A.x,null,0,D.daP,null,null)
D.cwe=w([A.dA,A.cE],x.O)
D.ec7=new C.bS(A.A,0.5,A.x,null,0,D.cwe,null,null)
D.cSi=w([A.ow,A.aH,A.fx],x.O)
D.ec8=new C.bS(A.A,0.5,A.x,null,0,D.cSi,null,null)
D.cKH=w([A.h2,A.aM,A.d8],x.O)
D.eca=new C.bS(A.rP,0.5,A.x,null,0,D.cKH,null,null)
D.d5z=w([A.jt,L.mY],x.O)
D.ecb=new C.bS(A.rP,0.5,A.x,null,0,D.d5z,null,null)
D.bbd=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b9i=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cUw=w([D.bbd,D.b9i],x.O)
D.ecd=new C.bS(A.A,0.5,A.x,null,0,D.cUw,null,null)
D.bfG=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bdF=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bdJ=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.deO=w([D.bfG,D.bdF,D.bdJ],x.O)
D.cR4=w([0,0.65,1],x.n)
D.ece=new C.bS(M.a99,0.5,A.x,null,0,D.deO,D.cR4,null)
D.ecf=new C.bS(A.A,0.5,A.x,null,0,D.au0,null,null)
D.dbO=w([A.lD,A.aH,A.fx],x.O)
D.eck=new C.bS(A.A,0.5,A.x,null,0,D.dbO,null,null)
D.ddl=w([A.jt,A.hF],x.O)
D.ecn=new C.bS(A.A,0.5,A.x,null,0,D.ddl,null,null)
D.aLg=new C.aT(9,9)
D.ecw=new C.aT(1.4,1.4)
D.edb=new C.y(0,-4)
D.ehZ=new C.y(0.22,4)
D.ep0=new C.y(0.8,-4)
D.exv=new C.y(0.58,4)
D.eA9=new C.bt("Moon",1.62,4291941851)
D.eAH=new C.bt("Neptune",11.15,4284524026)
D.eBi=new C.bt("Sun",274,4294688548)
D.eBy=new C.bt("Mercury",3.7,4288455599)
D.eBE=new C.bt("Earth",9.81,4281908728)
D.eBG=new C.bt("Mars",3.71,4294472049)
D.eBZ=new C.bt("Venus",8.87,4294759245)
D.eC3=new C.bt("Saturn",10.44,4294829706)
D.eCp=new C.bt("Jupiter",24.79,4294677052)
D.eFW=new C.a9(10,-8,18,-2)
D.eFX=new C.a9(14,-14,20,14)
D.eFY=new C.a9(20,-2,30,2)
D.eG_=new C.a9(4,-13,30,-3)
D.eG1=new C.a9(8,-7,12,7)
D.eG7=new C.a9(-12,12,12,19)
D.eG8=new C.a9(-12,14,12,22)
D.eG9=new C.a9(-12,-22,12,8)
D.eGa=new C.a9(-12,-25,12,19)
D.eGb=new C.a9(-12,-26,12,-6)
D.eGc=new C.a9(-12,-4,12,14)
D.eGd=new C.a9(-12,-6,10,6)
D.eGe=new C.a9(-14,20,14,24)
D.eGf=new C.a9(-14,6,14,10)
D.eGg=new C.a9(-14,-17,14,15)
D.eGh=new C.a9(-14,-26,14,18)
D.eGi=new C.a9(-14,-4,14,20)
D.eGj=new C.a9(-15,-29,15,25)
D.eGk=new C.a9(-16,-16,16,16)
D.eGl=new C.a9(-16,-22,-9,18)
D.eGm=new C.a9(-16,-24,16,-10)
D.eGn=new C.a9(-16,-2,16,20)
D.eGp=new C.a9(-18,20,18,24)
D.eGq=new C.a9(-18,-18,18,20)
D.eGr=new C.a9(-20,12,20,22)
D.eGs=new C.a9(-20,-28,20,26)
D.eGt=new C.a9(-22,14,22,18)
D.aLG=new C.a9(-22,-26,22,24)
D.eGu=new C.a9(-22,-3,22,3)
D.eGv=new C.a9(-22,-4,22,12)
D.eGw=new C.a9(-24,-12,10,22)
D.eGx=new C.a9(-24,-14,22,8)
D.eGy=new C.a9(-24,-6,24,20)
D.aLH=new C.a9(-24,-9,24,9)
D.eGz=new C.a9(-25,14,25,19)
D.eGA=new C.a9(-26,-14,14,8)
D.eGB=new C.a9(-26,-4,26,20)
D.eGC=new C.a9(-26,-6,4,6)
D.aLI=new C.a9(-28,-13,28,13)
D.eGD=new C.a9(-28,-16,28,16)
D.eGE=new C.a9(-28,-16,28,8)
D.eGF=new C.a9(-28,-22,28,22)
D.eGG=new C.a9(-30,-12,30,14)
D.eGH=new C.a9(-30,-14,0,14)
D.eGI=new C.a9(-30,-18,30,20)
D.eGJ=new C.a9(-30,-28,30,14)
D.eGK=new C.a9(-30,-2,30,18)
D.eGL=new C.a9(-30,-4,30,18)
D.eGM=new C.a9(-32,-17,32,17)
D.eGN=new C.a9(-32,-28,32,18)
D.eGO=new C.a9(-33,-21,33,17)
D.eGP=new C.a9(-34,14,34,26)
D.a5B=new C.a9(-34,-18,34,18)
D.eGQ=new C.a9(-34,-4,34,7)
D.eGR=new C.a9(-36,-24,36,20)
D.eGS=new C.a9(-38,-22,38,22)
D.eGT=new C.a9(-3,12,3,22)
D.eGU=new C.a9(-3,5,3,15)
D.eGW=new C.a9(-46,-34,46,28)
D.eGX=new C.a9(-48,-3,48,3)
D.eH_=new C.a9(-6,18,24,24)
D.eH0=new C.a9(-6,5,6,12)
D.eH1=new C.a9(-6,-22,6,-15)
D.eH2=new C.a9(-9,-16,9,22)
D.eH3=new C.a9(-4.5,-24,4.5,-21.2)
D.eH5=new C.a9(14,-9,17.5,9)
D.e04={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aMz=new C.eM(D.e04,5,x.R)
D.e_J={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eJY=new C.eM(D.e_J,10,x.R)
D.eLV=new C.at(24,44)
D.eM_=new C.at(300,300)
D.eMj=new C.at(54,38)
D.eMq=new C.at(66,38)
D.b5a=new C.fj(2,null,null,null,null,A.bu,null,null,null,null)
D.eNm=new C.a7(16,16,D.b5a,null)
D.aNy=new C.hK(3,12,12,0.82,null)
D.fui=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aNJ=new C.b1(D.fui,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d5C=w([A.c7,A.cd,A.b1,A.aS,A.pn,A.c7],x.O)
D.eTe=new C.fS(A.A,0,6.283185307179586,A.x,D.d5C,null,null)
D.f1c=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PN,null,null,null)
D.eUt=new C.ep("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f1c)
D.aQ8=new C.G(!0,A.az,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUu=new C.ep("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQ8)
D.eZB=new C.G(!0,A4.Kn,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new C.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eZB)
D.f3q=new C.G(!0,A.kb,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUD=new C.ep("AI",null,null,A.cO,null,null,null,null,null,null,D.f3q)
D.eZm=new C.G(!0,A.c1,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUE=new C.ep("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eZm)
D.aOx=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUT=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUV=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVr=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVL=new C.G(!0,A.cr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWf=new C.G(!0,A.c1,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWA=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX2=new C.G(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXp=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXz=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new C.cQ(A.hI,A.dE,6)
D.d_o=w([D.eKt],x.q)
D.eXT=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d_o,null,null,null)
D.eXW=new C.G(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new C.G(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new C.G(!0,A.c1,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOU=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYJ=new C.G(!0,A.az,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYK=new C.G(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZE=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_8=new C.G(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKw=new C.cQ(A.aX,A.J,3)
D.axG=w([D.eKw],x.q)
D.f_G=new C.G(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axG,null,null,null)
D.f_L=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0r=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PN,null,null,null)
D.f0U=new C.G(!0,A.az,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f11=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1r=new C.G(!0,A.v3,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f21=new C.G(!0,A.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f26=new C.G(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2b=new C.G(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new C.G(!0,A.az,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2I=new C.G(!0,A.c1,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2W=new C.G(!0,A.n_,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2X=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3b=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPy=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3K=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKk=new C.cQ(A.w,A.J,5)
D.cOK=w([D.eKk],x.q)
D.f3L=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cOK,null,null,null)
D.f3Q=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axG,null,null,null)
D.f44=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f49=new C.G(!0,A.fw,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new C.G(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4V=new C.G(!0,A.b1,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5s=new C.G(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f65=new C.G(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPU=new C.G(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6H=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Y=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7h=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ5=new C.G(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7k=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f84=new C.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7z=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new C.G(!0,A.v3,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8M=new C.G(!0,A.b1,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY3=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9a=new C.x("\u26a0\ufe0f ",null,D.eY3,null,null,null,null,null,null,null,null,null)
D.f9l=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.zv,null,null,null,null,null,null,null,null,null)
D.f9N=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mH,null,null,null,null,null,null,null,null,null)
D.faR=new C.x("Pick one, then change it and see what happens.",null,A.zv,null,null,null,null,null,null,null,null,null)
D.faV=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new C.G(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eZ7,null,null,null,null,null,null,null,null,null)
D.fcb=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a6Q,null,null,null,null,null,null,null,null,null)
D.fdj=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fdT=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fdY=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fev=new C.x("Make it yours",null,A.l1,null,null,null,null,null,null,null,null,null)
D.feK=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6V,null,null,null,null,null,null,null,null,null)
D.f2m=new C.G(!0,A.ja,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh1=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f2m,null,null,null,null,null,null,null,null,null)
D.fhg=new C.x("YOUR DECODING",null,Q.mH,null,null,null,null,null,null,null,null,null)
D.fhs=new C.x("5G",null,R.aOX,null,null,null,null,null,null,null,null,null)
D.f4G=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiA=new C.x("WHAT HAPPENS",null,D.f4G,null,null,null,null,null,null,null,null,null)
D.fki=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new C.x("Change the words and pictures on the three slabs.",null,A.zv,null,null,null,null,null,null,null,null,null)
D.fl7=new C.x("All the parts and wires will be removed.",null,A.hD,null,null,null,null,null,null,null,null,null)
D.flr=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fm0=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fmS=new C.x("INTERCEPTED",null,Q.mH,null,null,null,null,null,null,null,null,null)
D.fnb=new C.x("\ud83c\udfaf Challenges",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fnG=new C.x("Remove this part",null,U.aOA,null,null,null,null,null,null,null,null,null)
D.fnY=new C.x("Clear the board?",null,A.dm,null,null,null,null,null,null,null,null,null)
D.f4a=new C.G(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foc=new C.x("How the Lab works",null,D.f4a,null,null,null,null,null,null,null,null,null)
D.eWM=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new C.x("Electronics Lab",null,D.eWM,null,null,null,null,A.a2,null,1,null,null)
D.foz=new C.x("?",null,M.aQ2,null,null,null,null,null,null,null,null,null)
D.f2g=new C.G(!0,A.aS,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foD=new C.x("Planet Earth",null,D.f2g,null,null,null,null,null,null,null,null,null)
D.fpO=new C.x("Ready-made circuits",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fqo=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fqH=new C.x("UNIVERSE EXPLORER",null,I.a6U,null,null,null,null,null,null,null,null,null)
D.ftb=new C.x("SECRET VERSION",null,Q.mH,null,null,null,null,null,null,null,null,null)
D.f70=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f70,null,null,null,null,null,null,null,null,null)
D.fuT=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a6Q,null,null,null,null,null,null,null,null,null)
D.fvl=new C.x("NGMY",null,A.uC,null,null,null,null,null,null,null,null,null)
D.fvy=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IT,null,null,null,null,null,null,null,null,null)
D.fvV=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.ky,null,null,null,null,null,null,null,null,null)
D.fwS=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.zv,null,null,null,null,null,null,null,null,null)
D.fwU=new C.x("TOOLBOX",null,I.a6U,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hb3=null
$.hb2=null
$.hh5=0
$.hIU=C.T(x.N,x.k)
$.hJu=C.T(x.N,x.k)
$.hao=null
$.hJf=C.T(x.N,x.k)
$.hKi=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ieG","bDh",()=>{var v="led"
return C.a([B.axq("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fdL(),v),B.axq("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fdM(),v),B.axq("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fdN(),v),B.axq("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fdU(),v),B.axq("Not both","Make the light go OFF only when both switches are ON.",2,new B.fdV(),v),B.axq("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fdW(),"buzzer")],C.ax("O<b9X>"))})
w($,"if7","bDi",()=>C.a([B.ow("UNIVERSE","Earth, space and gravity",A.a_W,A.aS,new B.feb()),B.ow("ELECTRONICS LAB","Batteries, wires, real circuits",Ai.a_k,A.aS,new B.fec()),B.ow("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_b,A.b1,new B.fed()),B.ow("TOOLBOX","Converter, clock, games",T.ak8,A.cs,new B.feo()),B.ow("MOLECULE MAKER","Join atoms into real molecules",A.MZ,A.hv,new B.feq()),B.ow("DNA LAB","Copy DNA, build a protein",D.a_b,A.bV,new B.fer()),B.ow("ECOSYSTEM LAB","Grass, rabbits and foxes",A.y7,A.b1,new B.fes()),B.ow("BALANCE LAB","Levers, weight and torque",D.bEp,A.aM,new B.fet()),B.ow("GEAR LAB","Teeth, speed and force",A.BB,A.cs,new B.feu()),B.ow("LASER MAZE","Bend the beam with mirrors",I.akw,A.ay,new B.fev()),B.ow("LIGHT MIXER","Match colours with light",D.bC8,A.b8,new B.few()),B.ow("CIPHER LAB","Make and crack secret codes",A.yi,A.aS,new B.fee()),B.ow("REACTION LAB","Wire parts together",A.ym,A.bt,new B.fef()),B.ow("SPARK PAINTER","Paint with light",A.a_d,A.bV,new B.feg()),B.ow("ROCKET LANDER","Land softly on the pad",A.ng,A.aS,new B.feh()),B.ow("ORBIT STUDIO","Slingshot planets",A.mr,A.cs,new B.fei()),B.ow("SWARM STUDIO","A living school of fish",A.MZ,A.b1,new B.fej()),B.ow("CHAIN BURST","One tap, a whole chain",A.h7,A.bV,new B.fek()),B.ow("TITLE ANIMATOR","Make a moving title",A.ye,A.cd,new B.fel()),B.ow("CIRCUIT LAB","Connect logic, learn it",A.a_D,A.cr,new B.fem()),B.ow("MARBLE MUSIC","Marbles ring the notes",D.bBP,A.b8,new B.fen()),B.ow("ORBIT SEQUENCER","Planets play the tune",D.bEd,A.bu,new B.fep())],C.ax("O<brM>")))
w($,"igC","q8",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Q3[v]
t.n(0,u.a,u)}return t})
w($,"ieH","ahl",()=>C.a([B.Fg("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fdX()),B.Fg("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fdY()),B.Fg("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fdZ()),B.Fg("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fe_()),B.Fg("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fe0()),B.Fg("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fdO()),B.Fg("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fdP()),B.Fg("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fdQ()),B.Fg("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fdR()),B.Fg("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fdS()),B.Fg("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fdT())],C.ax("O<b9Y>")))
w($,"if9","hpr",()=>C.a([B.a0g("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.ci,new B.feE()),B.a0g("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c7,A.bI,new B.feF()),B.a0g("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cz,new B.feG()),B.a0g("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b7,new B.feH()),B.a0g("Memory Match","Find the pairs","\ud83c\udccf",A.aS,A.cc,new B.feI()),B.a0g("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cd,A.bo,new B.feJ()),B.a0g("Tip & Split","Share the bill","\ud83e\uddfe",A.b1,A.aZ,new B.feK()),B.a0g("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.feL())],C.ax("O<bt6>")))
w($,"if8","hpq",()=>C.a([B.aeG("EARTH GLOBE","Turn it, tap a country",A.mr,A.aS,new B.fex()),B.aeG("SOLAR SYSTEM","The Sun and its worlds",D.bBT,A.aM,new B.fey()),B.aeG("GRAVITY LAB","Drop, weigh, orbit",D.ali,A.cs,new B.fez()),B.aeG("BLACK HOLE","Throw in a star",A.Fw,A.bu,new B.feA()),B.aeG("GALAXY","Build, tilt, collide",A.xW,A.h1,new B.feB()),B.aeG("SIZE COMPARE","Earth next to a star",D.bCa,A.bV,new B.feC()),B.aeG("SEASONS & MOON","Why it is summer",A.vs,A.bt,new B.feD())],C.ax("O<bt1>")))})()};
(a=>{a["fWpnB38hwReo9R2CNlypqhNfzOA="]=a.current})($__dart_deferred_initializers__);