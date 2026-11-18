((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A5,A1,A6,A2,S,O,V,A7,N,A8,A9,Aa,Ab,A3,Ac,Ad,Ae,Af,W,T,P,Ag,Ah,X,Y,Ai,E,I,G,K,Aj,Ak,Al,Am,Q,An,R,Ao,C={
bCO(d){return C.iap(d)},
iap(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rn(B.ns(""),d,A.i1,null,null).dg(0,A.a0I),$async$bCO)
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
return B.i($async$bCO,v)},
iml(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.SA[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cR(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fb(D.SA,new C.fMv())
if(w==null)w=A.d.gH(D.SA)
s=B.T(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qL().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alC(w.a,w.b,m,w,s,!1)},
ig0(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.T_,new C.fB8(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iue(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.pe(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.W.aP(0,A.a.aA(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.u(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.w(J.u(q,"kind"))
o=B.w(J.u(q,"id"))
if(!$.qL().am(0,p)||J.eC(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dC8[a9]
l=J.u(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.h.D(typeof J.u(q,"x")=="number"?B.dF(J.u(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.u(q,"y")=="number"?B.dF(J.u(q,"y")):0.25+A.h.ar(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.u(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.u(g,0))
e=B.w(J.u(g,2))
d=A.o.D(A.h.M(B.dF(J.u(g,1))),0,1)
a0=A.o.D(A.h.M(B.dF(J.u(g,3))),0,1)
if(J.eC(s,f)&&J.eC(s,e)&&!J.z(f,e))J.c5(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.u(u,"steps"))
a0=J.aT(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gP(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.u(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.u(u,"explain")
a4=new C.n1(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.u(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alC(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ikP(d){var w,v,u=C.hoh()
d.B(u)
for(w=0;w<60;++w)u.vO(0,0.03333333333333333)
v=u.a
return A.d.aU(v,new C.fIS(u))&&!A.d.cE(v,new C.fIT())},
ikO(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qL().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.h.U(t.r)+" ohms")
if(A.d.q(D.dAg,p))q.push("level "+A.h.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.h.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i8V(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
imk(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qL().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.T_[u]
if(A.d.aU(w,new C.fMs(s)))if(!B.cR(r,s.b.toLowerCase(),0))v=B.cR(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fMt(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.ad(A.d.cB(w,0,new C.fMu())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qL().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alC:function alC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMv:function fMv(){},
fB8:function fB8(){},
fIS:function fIS(d){this.a=d},
fIT:function fIT(){},
fMs:function fMs(d){this.a=d},
fMt:function fMt(d){this.a=d},
fMu:function fMu(){},
WZ:function WZ(d,e){this.c=d
this.a=e},
bn9:function bn9(d,e,f,g,h){var _=this
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
ekE:function ekE(d){this.a=d},
ekF:function ekF(d,e,f){this.a=d
this.b=e
this.c=f},
ekG:function ekG(d){this.a=d},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d,e){this.a=d
this.b=e},
ekN:function ekN(d){this.a=d},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekM:function ekM(d,e,f){this.a=d
this.b=e
this.c=f},
ekO:function ekO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ekJ:function ekJ(d){this.a=d},
ekK:function ekK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekP:function ekP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ekI:function ekI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekQ:function ekQ(d,e){this.a=d
this.b=e},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekV:function ekV(d){this.a=d},
ekU:function ekU(d){this.a=d},
ekW:function ekW(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekX:function ekX(d,e){this.a=d
this.b=e},
ekY:function ekY(d,e){this.a=d
this.b=e},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
el_:function el_(d,e){this.a=d
this.b=e},
bD8(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fAP,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hCg(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.Ba,A.K,w,w),A.aB,B.c_(A.fU,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(D.bjb,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
H_:function H_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vt:function vt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xl:function Xl(d){this.a=d},
aGM:function aGM(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h8$=h
_.m9$=i
_.fa$=j
_.h9$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
ezZ:function ezZ(){},
eAi:function eAi(d){this.a=d},
eAh:function eAh(d,e){this.a=d
this.b=e},
eAj:function eAj(){},
eAk:function eAk(){},
eA0:function eA0(d,e,f){this.a=d
this.b=e
this.c=f},
eA_:function eA_(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezT:function ezT(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezN:function ezN(d){this.a=d},
eAb:function eAb(d,e){this.a=d
this.b=e},
eA6:function eA6(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA3:function eA3(d){this.a=d},
eA8:function eA8(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(d){this.a=d},
eA1:function eA1(d){this.a=d},
eAc:function eAc(d,e){this.a=d
this.b=e},
eA5:function eA5(d,e){this.a=d
this.b=e},
eAd:function eAd(d){this.a=d},
eAe:function eAe(d){this.a=d},
eAf:function eAf(d){this.a=d},
eAg:function eAg(d){this.a=d},
eA4:function eA4(d){this.a=d},
bk3:function bk3(d,e){this.b=d
this.a=e},
aOM:function aOM(){},
bAN:function bAN(){},
hxk(){var w=$.hxi
return w==null?$.hxi=$.pe().cXf("assets/data/three.min.js"):w},
hxj(){var w=$.hxh
return w==null?$.hxh=C.cQb():w},
cQb(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cQb=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.pe().iG(0,"assets/data/body3d.bin"),$async$cQb)
case 3:d=a1
$.hxl=J.er(A.dI.gaT(d),d.byteOffset,d.byteLength)
t=B.Tp(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jP(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dnY[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4H(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b6_))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bd0(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cQb,v)},
c7z(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c7z=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iz(B.a([C.hxj(),C.hxk()],x.D),x.K),$async$c7z)
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
return B.i($async$c7z,v)},
aUS:function aUS(d,e,f){this.a=d
this.b=e
this.c=f},
a4H:function a4H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bd0:function bd0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VP:function VP(d){this.a=d},
aFd:function aFd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h8$=s
_.m9$=t
_.fa$=u
_.h9$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dQA:function dQA(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQc:function dQc(d){this.a=d},
dQd:function dQd(){},
dQB:function dQB(){},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQg:function dQg(){},
dQh:function dQh(d){this.a=d},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQq:function dQq(d){this.a=d},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQt:function dQt(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQv:function dQv(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQx:function dQx(d){this.a=d},
dQl:function dQl(d){this.a=d},
dQy:function dQy(d){this.a=d},
dQk:function dQk(d){this.a=d},
aNP:function aNP(){},
aNQ:function aNQ(){},
c7A:function c7A(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c7B:function c7B(d,e){this.a=d
this.b=e},
c7C:function c7C(d){this.a=d},
aAA(d,e,f,g,h){return new C.bdM(d,e,f,g,h)},
hec(d,e,f,g,h,i){return $.i6e.c1(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cX7(d,e,f,i,g,h))},
yL:function yL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D5:function D5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nQ:function nQ(d,e,f){this.a=d
this.b=e
this.c=f},
bdM:function bdM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fug:function fug(){},
fuh:function fuh(){},
fui:function fui(){},
fup:function fup(){},
fuq:function fuq(){},
fur:function fur(){},
VW:function VW(d){this.a=d},
aFf:function aFf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h8$=m
_.m9$=n
_.fa$=o
_.h9$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dSf:function dSf(d){this.a=d},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRX:function dRX(){},
dSg:function dSg(){},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e,f){this.a=d
this.b=e
this.c=f},
dRN:function dRN(){},
dRO:function dRO(){},
dRP:function dRP(d){this.a=d},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dRZ:function dRZ(){},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS0:function dS0(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRM:function dRM(d,e,f){this.a=d
this.b=e
this.c=f},
dS9:function dS9(d){this.a=d},
dS8:function dS8(d){this.a=d},
dSa:function dSa(d){this.a=d},
dS7:function dS7(d){this.a=d},
dS5:function dS5(d){this.a=d},
dS6:function dS6(d){this.a=d},
dS4:function dS4(d){this.a=d},
dS1:function dS1(d){this.a=d},
dS3:function dS3(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dS2:function dS2(d){this.a=d},
dSe:function dSe(d,e){this.a=d
this.b=e},
be3:function be3(d,e){this.b=d
this.a=e},
cX7:function cX7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNU:function aNU(){},
bAx:function bAx(){},
hXW(){return new C.Om(null)},
Rr(d,e,f,g,h){return new C.bw4(d,e,f,g,h)},
buq(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
heK(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
ioh(){return B.kX("construction","")},
Om:function Om(d){this.a=d},
Ll:function Ll(d,e){this.a=d
this.b=e},
B7:function B7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFw:function aFw(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYs:function dYs(d){this.a=d},
bw4:function bw4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fuH:function fuH(){},
fuI:function fuI(){},
fuJ:function fuJ(){},
fuK:function fuK(){},
fuL:function fuL(){},
fuM:function fuM(){},
fuN:function fuN(){},
fuO:function fuO(){},
fuP:function fuP(){},
bur:function bur(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fa6:function fa6(d){this.a=d},
fa5:function fa5(d,e){this.a=d
this.b=e},
fa3:function fa3(d){this.a=d},
fa7:function fa7(d){this.a=d},
fa4:function fa4(d,e){this.a=d
this.b=e},
agt:function agt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afk:function afk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rk:function Rk(d,e,f,g,h,i,j,k,l,m){var _=this
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
bvs:function bvs(d,e){this.b=d
this.a=e},
buY:function buY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcJ:function bcJ(d,e){this.b=d
this.a=e},
aJO:function aJO(d,e){this.c=d
this.a=e},
aJP:function aJP(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b9$=f
_.c=_.a=null},
f9N:function f9N(d){this.a=d},
f9M:function f9M(d){this.a=d},
f9L:function f9L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9K:function f9K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9I:function f9I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9H:function f9H(d,e,f){this.a=d
this.b=e
this.c=f},
f9J:function f9J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9G:function f9G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9V:function f9V(d){this.a=d},
f9U:function f9U(d){this.a=d},
f9W:function f9W(d,e){this.a=d
this.b=e},
f9X:function f9X(d,e){this.a=d
this.b=e},
f9Y:function f9Y(d,e){this.a=d
this.b=e},
f9T:function f9T(d,e,f){this.a=d
this.b=e
this.c=f},
f9Z:function f9Z(d,e,f){this.a=d
this.b=e
this.c=f},
f9S:function f9S(d){this.a=d},
f9O:function f9O(d){this.a=d},
fa_:function fa_(d){this.a=d},
fa0:function fa0(d){this.a=d},
f9R:function f9R(d,e){this.a=d
this.b=e},
fa1:function fa1(d,e){this.a=d
this.b=e},
f9Q:function f9Q(d,e){this.a=d
this.b=e},
fa2:function fa2(d,e){this.a=d
this.b=e},
f9P:function f9P(d,e){this.a=d
this.b=e},
f9E:function f9E(){},
f9F:function f9F(){},
bu2:function bu2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bts:function bts(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdp:function bdp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btu:function btu(d,e,f){this.b=d
this.c=e
this.a=f},
bxy:function bxy(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aPB:function aPB(){},
hDO(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.r(w,0)),u=e.aJ(0,new B.r(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a5(0,v.aM(0,s*t*f)).a5(0,u.aM(0,s*f*f)).a5(0,e.aM(0,f*f*f))},
bk2(d,e,f,g,h,i){return $.i6N.c1(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dsi(d,e,f,i,g,h))},
a1P:function a1P(d,e){this.a=d
this.b=e},
qB:function qB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rh:function rh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D9:function D9(d,e){this.a=d
this.b=e},
a_O:function a_O(d,e){this.a=d
this.b=e},
agh:function agh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a21:function a21(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dk:function Dk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ada:function ada(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adr:function adr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afn:function afn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bk0:function bk0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.R$=0
_.V$=t
_.by$=_.bL$=0},
dsm:function dsm(d){this.a=d},
dsn:function dsn(d){this.a=d},
dsj:function dsj(d,e){this.a=d
this.b=e},
dsk:function dsk(d){this.a=d},
dsl:function dsl(d){this.a=d},
dso:function dso(d){this.a=d},
dsp:function dsp(d){this.a=d},
dsq:function dsq(d){this.a=d},
dsr:function dsr(d){this.a=d},
dss:function dss(d){this.a=d},
dst:function dst(d){this.a=d},
dsu:function dsu(d){this.a=d},
dsv:function dsv(d){this.a=d},
dsw:function dsw(d){this.a=d},
GL:function GL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xk:function Xk(d){this.a=d},
aGL:function aGL(d,e,f,g,h,i,j){var _=this
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
ezj:function ezj(d){this.a=d},
ez8:function ez8(d){this.a=d},
eza:function eza(){},
ezb:function ezb(){},
eze:function eze(){},
ezf:function ezf(d,e,f){this.a=d
this.b=e
this.c=f},
ezg:function ezg(d){this.a=d},
ezh:function ezh(d){this.a=d},
ezc:function ezc(){},
ezd:function ezd(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezi:function ezi(){},
ez4:function ez4(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezk:function ezk(d){this.a=d},
ezn:function ezn(){},
ezm:function ezm(d,e){this.a=d
this.b=e},
ez7:function ez7(){},
ez5:function ez5(d){this.a=d},
ez6:function ez6(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezI:function ezI(d){this.a=d},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezF:function ezF(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ez9:function ez9(){},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezp:function ezp(d){this.a=d},
ezo:function ezo(d,e){this.a=d
this.b=e},
bk1:function bk1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dsi:function dsi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOK:function aOK(){},
hJB(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcJ()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hoh(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5Q(w,v,u,A.cT,B.T(x.N,x.y))},
hRC(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hoi(d),d.d*f.b)},
hoi(d){return 42+(D.mv.am(0,d.b)?(d.ch-1)*38:0)},
ek:function ek(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u3:function u3(d,e,f,g){var _=this
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
abQ:function abQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5Q:function a5Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQP:function bQP(){},
bR_:function bR_(d){this.a=d},
bQV:function bQV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR0:function bR0(d){this.a=d},
bR1:function bR1(d){this.a=d},
bR3:function bR3(d){this.a=d},
bR4:function bR4(d){this.a=d},
bR2:function bR2(d){this.a=d},
bR5:function bR5(d,e,f){this.a=d
this.b=e
this.c=f},
bR6:function bR6(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQT:function bQT(d,e,f){this.a=d
this.b=e
this.c=f},
bQU:function bQU(d){this.a=d},
bQO:function bQO(d){this.a=d},
bR7:function bR7(d,e){this.a=d
this.b=e},
bQW:function bQW(d,e){this.a=d
this.b=e},
bQZ:function bQZ(d){this.a=d},
bQY:function bQY(d){this.a=d},
bQX:function bQX(d){this.a=d},
akp:function akp(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bLa:function bLa(){},
bLb:function bLb(){},
n1:function n1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuT:function cuT(d){this.a=d},
iu9(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fYD(),c8=new C.fYF(),c9=new C.fYG(),d0=new C.fYE(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.aq(w,d0.$3(new B.a4(w.a,w.b,w.c,w.d),A.ci,A.bP))
d2.ah(D.ewq,D.etk,c8.$2(A.dZ,1.4))
d2.ah(D.et_,D.esY,c8.$2(A.by,2.4))
d2.ah(D.et0,T.aN4,c8.$2(A.by,2.4))
if(c6){d1=c7.$1(A.ft.j(0.5))
d1.y=A.Hs
d2.O(D.esG,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.h.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.aq(c9.$4(-22,-26,44,50),d0.$3(D.aTc,A.aS,A.cA))
d2.O(A.cM,16,c7.$1(A.by))
d2.O(A.cM,13,c7.$1(c6?A.aH.j(0.85):A.a_))
if(c6){d1=d2.c
J.bt(d1.save())
d1.translate(0,4)
d2.jq(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
d2.O(new B.r(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.O(D.ewi,2.4,c7.$1(c6?A.bi:A.an))
d2.O(D.exa,2.4,c7.$1(A.an))
return!0
case"blender":d2.aq(c9.$5(-14,14,28,12,4),c7.$1(A.cR))
d1=$.S().r
t=x.v
s=new B.aH(d1,A.aj,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bx())
d2.af(s,c7.$1(A.ft.j(0.35)))
if(c6){d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.aA.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bt(d1.save())
d1.translate(0,10)
d2.jq(0,d3.y)
d2.ah(D.a9L,D.aNr,c8.$2(A.bO,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.O(new B.r(Math.sin(d1+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c7.$1(A.eV))
return!0
case"drone":d2.aq(c9.$5(-10,-4,20,10,4),c7.$1(A.aL))
d2.O(A.hr,3,c7.$1(c6?A.bi:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.J6[p]
d2.ah(new B.r(o*0.4,1),new B.r(o,t),c8.$2(A.by,3))
J.bt(d1.save())
d1.translate(o,q)
d2.ah(D.ew6,D.et4,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.c0(B.bX(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bx())
d2.af(w,d0.$3(D.fgU,A.aQ,A.d6))
d2.aF(D.fg0,c7.$1(A.d_))
d1=d2.c
J.bt(d1.save())
d1.translate(18,-5)
d2.jq(0,d3.y*2)
d2.ah(A.J,D.etb,c8.$2(A.bO,2.4))
d2.ah(A.a9H,D.eta,c8.$2(A.hN,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
d2.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.ex.j(1-u)))}return!0
case"torch":if(c6){v=A.h.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.aq(c9.$5(-26,-6,30,12,3),d0.$3(D.fh_,A.bj,A.ct))
n=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bx())
d2.af(n,c7.$1(A.cR))
d2.O(D.etg,7,c7.$1(c6?A.c:A.d_))
return!0
case"neon":d2.aq(c9.$5(-30,-14,60,28,6),c7.$1(M.mX))
if(c6)m=d3.ax>0.5||A.o.F(A.h.bh(d4*17),3)!==0
else m=!1
l=m?A.c4:D.btQ
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c4.j(0.35))
t.y=A.n4
d2.aq(d1,t)}d2.aq(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eww,l,17)
return!0
case"microwave":d2.aq(c9.$4(-30,-18,60,38),d0.$3(D.fh5,A.bO,A.bj))
d1=c9.$5(-26,-14,38,30,3)
d2.aq(d1,c7.$1(c6?A.bL.j(0.75):A.av))
if(c6){d1=d2.c
J.bt(d1.save())
d1.translate(-7,8)
d2.jq(0,d3.y*0.5)
d2.c0(B.bX(A.J,7,22),c7.$1(A.d6))
d1.restore()}d2.aq(c9.$5(15,-14,12,12,2),c7.$1(M.mX))
if(c6)d5.$5(d2,"0:"+A.a.b0(A.o.v(59-A.o.F(A.h.bh(d4),60)),2,"0"),D.eth,A.be,6.5)
d2.O(D.etx,4,c7.$1(A.d_))
return!0
case"doorbell":d2.aq(c9.$5(-16,-26,32,52,8),c7.$1(A.bm))
d2.O(A.JY,10,c7.$1(c6?A.bt:A.by))
d1=d2.c
J.bt(d1.save())
d1.translate(0,-8)
d2.jq(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.exe,A.c,16)
d1.restore()
d2.O(A.kG,6,c7.$1(A.d9))
d2.O(A.kG,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cQ(B.bW(A.JY,14+v*6+A.h.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.ewv,D.ex7,c8.$2(A.by,4))
d1=d2.c
J.bt(d1.save())
d2.jq(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.aq(c9.$5(-24,-14,46,22,5),d0.$3(D.fgV,A.bO,A.an))
d2.O(D.aN8,8,c7.$1(A.av))
d2.O(D.aN8,4.5,c7.$1(c6?A.aH:A.ct))
d2.O(D.ewt,2.2,c7.$1(c6&&A.o.F(A.h.bh(d4*1.6),2)===0?A.aA:A.kz))
d1.restore()
if(c6)d5.$5(d2,"REC",D.ewE,A.aA,9)
return!0
case"console":d2.aq(c9.$5(-28,-22,56,44,8),d0.$3(D.fh2,A.j7,A.fB))
d2.aq(c9.$5(-20,-17,40,22,3),c7.$1(A.dR))
if(c6){d1=d4*2.3
d2.O(new B.r(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aF(new B.a4(-18,t,-15.6,t+8),c7.$1(A.be))
d1=-9+Math.sin(d1-0.4)*6
d2.aF(new B.a4(15.6,d1,18,d1+8),c7.$1(A.c4))}d2.O(D.ewo,4,c7.$1(A.b5))
d2.O(D.etc,2.4,c7.$1(A.aA))
d2.O(D.etu,2.4,c7.$1(A.bi))
return!0
case"heartmon":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.aq(c9.$5(-26,-18,52,28,3),c7.$1(A.dR))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aH(d1.r,A.aj,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.h.F((o+25)/50-d1,1)
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
k.ab()}}d2.af(k,c8.$2(A.be,1.8))
d5.$5(d2,"72",D.etd,A.hv,11)
d1=d4*9
d5.$5(d2,"\u2665",D.ewJ,A.hv.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.O(D.ewy,3,c7.$1(c6?A.bi:A.by))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.aq(d1,c7.$1(A.cF.j(c6?0.5:0.3)))
d2.aq(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aF(D.fgX,c7.$1(F.up))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bt(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.op(0,-1,1)
d2.c0(B.bX(A.J,8,14),c7.$1(A.cP))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.c9))
d2.O(D.euf,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.h.F(d1+v*0.2,1)
d2.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aH(d1,A.aj,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bx())
d2.af(g,d0.$3(D.fhx,A.c,A.bD))
d2.aF(D.fht,c7.$1(c6?A.ex:A.by))
q=new B.aH(d1,A.aj,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bx())
d2.af(q,c7.$1(A.eq))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.ex.j(0.45)))
d1=c7.$1(A.ex.j(0.35))
d1.y=A.Hs
d2.O(D.esH,14,d1)}return!0
case"discoball":d2.ah(D.esJ,U.aN_,c8.$2(A.d_,1.4))
d2.O(A.J,16,d0.$3(D.fgE,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.r(-16,d1),new B.r(16,d1),c8.$2(A.dB,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c8.$2(A.dB,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dp2[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.aq(c9.$5(-14,-4,28,24,5),d0.$3(D.fgB,A.cA,A.an))
d2.aq(c9.$5(-12,-26,24,20,5),d0.$3(D.fgu,A.bm,A.bP))
d2.ah(H.aN1,D.esL,c8.$2(A.by,1.6))
d2.O(D.esM,2.2,c7.$1(c6?A.aA:A.by))
d=c6&&A.h.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a76[p]
if(c6)d1=d?A.ba:A.fn
else d1=A.ct
d2.O(new B.r(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bt(d1.save())
d1.translate(14,0)
d2.jq(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a9C,c8.$2(A.bP,4))
d1.restore()
d2.ah(D.ewe,D.ewC,c8.$2(A.bP,4))
d2.aF(D.fhs,c7.$1(c6?A.ba.j(0.7):A.aL))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aDK[p]+1,d1,10,14,2)
q=B.ap(A.bL,A.d6,a0)
q.toString
d2.aq(t,c7.$1(q))}d2.aq(c9.$5(-24,-6,48,26,8),d0.$3(D.fgW,A.bO,A.bj))
for(p=0;p<2;++p){o=D.aDK[p]
d1=c9.$5(o,-5,12,5,2)
d2.aq(d1,c7.$1(c6?A.fL:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cP.j(0.5))
t.y=N.oA
d2.aq(d1,t)}}d2.ah(D.etD,D.etY,c8.$2(A.av,3))
return!0
case"ledstrip":d2.aq(c9.$5(-34,-4,68,10,4),c7.$1(A.ct))
for(d1=d4*90,v=0;v<9;++v){a1=A.h.F(d1+v*40,360)
l=c6?new Ar.po(1,a1,0.8,1).je():A.cR
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oA
d2.O(new B.r(-30+v*7.5,1),7,t)}d2.O(new B.r(-30+v*7.5,1),2.6,c7.$1(l))}d2.aq(c9.$5(-40,-2,6,6,1),c7.$1(A.d_))
return!0
case"pump":d2.aq(c9.$5(-16,-2,32,22,6),d0.$3(D.fgK,A.cF,A.Gl))
d2.O(D.ewK,8,c7.$1(A.rM))
d1=d2.c
J.bt(d1.save())
d1.translate(-2,9)
d2.jq(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.ft,2.4))}d1.restore()
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bP,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.O(new B.r(26,6-A.h.F(d1+v*0.2,1)*26),2.2,c7.$1(A.h9))
d2.O(D.euT,3.2,c7.$1(A.h9.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bt(d1.save())
d2.jq(0,-0.15)
d2.aq(c9.$5(-26,-14,40,22,10),d0.$3(D.fgY,A.hL,A.ut))
d2.aq(c9.$5(14,-10,12,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-10,6,12,22,4),c7.$1(A.cR))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.r(24+t,q),new B.r(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cP.j(0.4))
d1.y=N.oA
d2.O(D.etw,8,d1)}return!0
case"headphones":d2.cQ(B.bX(A.dL,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.by,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Tb[p]
t=o-7
d2.aq(c9.$5(t,0,14,20,6),d0.$3(new B.a4(t,0,t+14,20),A.bh,A.mR))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bW(new B.r(o,10),10+v*5+A.h.F(d1,5))
h=t?2.2:-0.9
d2.cQ(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.r(-4,-8-A.h.F(d4*14,8)),A.kO,12)
return!0
case"smartwatch":d2.aq(c9.$5(-8,-30,16,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-8,14,16,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-14,-17,28,32,8),d0.$3(D.fgz,A.d_,A.cR))
d2.aq(c9.$5(-11,-14,22,26,6),c7.$1(A.dR))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b0(A.o.v(B.dg(a2)),2,"0")+":"+A.a.b0(A.o.v(B.fV(a2)),2,"0"),D.esS,A.be,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ap(A.G5,A.hv,j)
d1.toString
d5.$5(d2,"\u2665",new B.r(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.h.bh(d4*2),6)),A.dL,A.c,7)}return!0
case"tablet":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(M.mX))
d2.aq(c9.$5(-30,-22,60,44,6),c8.$2(A.bP,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(a3),$.mK(),!0)
d1.translate(-27,-19)
L.Mg(d2,D.fnU,d4,!1,c5,c5)
d1.restore()}else d2.aq(a3,c7.$1(D.wr))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.aq(a4,d0.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dX,A.dh))
d2.aq(a4,c8.$2(A.aT,1.2))
d2.O(D.aNy,9,c7.$1(A.av))
d2.O(D.aNy,6,c8.$2(A.d6,2))
d2.aq(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.aq(c9.$5(-22,-19,44,12,2),c7.$1(A.dR))
d1=A.h.ad(d3.db,1)
t=A.h.ad(c6?d3.dx:d3.e,1)
q=c6?A.be:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.ev2,q,8.2)
d2.O(D.etl,2.4,c7.$1(c6?A.bi:A.aL))
d5.$5(d2,"IN",D.ewD,A.ab,6)
d5.$5(d2,"OUT",D.euK,A.ab,6)
return!0
case"regulator":a5=c6?A.h.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aA,a5)
t.toString
d2.aq(d1,c7.$1(t))
d2.O(H.a9A,3,c7.$1(A.aL))
d2.aq(c9.$5(-12,-4,24,18,3),d0.$3(D.fgv,A.cR,A.i7))
d5.$5(d2,"7805",D.a9L,A.ab,8)
for(p=0;p<3;++p){d1=D.dvH[p]-1
d2.aF(new B.a4(d1,14,d1+2,22),c7.$1(A.dY))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.h.F(d1+v*0.33,1)
d2.O(new B.r(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.exb,A.bq,9)
return!0
case"diode":d2.ah(D.aNC,D.aNl,c8.$2(A.dY,2.4))
d2.aq(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.aF(D.fge,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.ex.j(0.4))
t.y=A.kY
d2.aq(d1,t)}d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.b5))
d5.$5(d2,"one way",D.ewr,A.aE,8)
return!0
case"ldr":d2.ah(D.aNC,D.a9L,c8.$2(A.dY,2.4))
d2.ah(D.aNr,D.aNl,c8.$2(A.dY,2.4))
d2.O(A.J,12,c7.$1(A.d6))
d2.O(A.J,12,c8.$2(A.rS,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aH(d1.r,A.aj,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ap(A.by,A.ex,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.r(-6,-26),d1,14)
d5.$5(d2,""+A.h.U(20+980*(1-d3.f))+"\u03a9",D.ewf,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eo
break
case"sonytv":t=A.rD
break
case"appletv":t=A.dY
break
default:t=F.BU
break}a7=d1==="lgtv"||d1==="appletv"
d2.aq(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bt(h.save())
h.clipRRect(B.n6(a3),$.mK(),!0)
h.translate(t,q)
L.fYT(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1,c5,c5)
h.restore()
d2.O(D.eu0,1.6,c7.$1(A.be))}else{d2.aq(a3,c7.$1(D.wr))
h=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bx())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.aq(c9.$5(-22,19,44,3,1.5),c7.$1(A.d_))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fP[p]
t=$.S()
q=B.a([],d1)
t=new B.aH(t.r,A.aj,c5,c5,q)
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
h=new B.bx()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.d_))}d5.$5(d2,"SONY",D.evH,A.bO,5.5)
break
case"appletv":d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_6))
d5.$5(d2,"Apple TV",D.ev3,A.by,4.8)
break
default:d2.aq(c9.$5(-34,19,68,7,3),c7.$1(D.bs3))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.r(d1,20),new B.r(d1,25),c8.$2(A.dB,0.6))}d5.$5(d2,"B&O",D.ex6,F.up,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mv.h(0,d1)
b0=a9.b===D.AS
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
b6=B.ap(b5,A.c,0.35)
b6.toString
d2.aq(w,d0.$3(new B.a4(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bt(t.save())
t.clipRRect(B.n6(a3),$.mK(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Mg(d2,new B.av(a3.c-q,a3.d-h),d4,!1,c5,c5)
t.restore()}else d2.aq(a3,c7.$1(D.wr))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.r(0,t),new B.r(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.aq(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.O(new B.r(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.aq(c9.$5(-17,-28,34,52,4),c7.$1(A.cR))
d2.aq(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bO))
if(c6){d5.$5(d2,"NGMY",D.exh,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aF(new B.a4(-11,d1,-11+t,d1+1.4),c7.$1(A.bj))}d2.O(A.a9y,1.6,c7.$1(A.av))}return!0
case"laptop":d2.aq(c9.$5(-30,-28,60,42,4),d0.$3(D.fh6,A.cA,A.bj))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(b7),$.mK(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Mg(d2,new B.av(b7.c-t,b7.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b7,c7.$1(D.wr))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_6))
d2.aq(c9.$5(-7,16,14,2,1),c7.$1(A.bj))
return!0
case"imac":d2.aq(c9.$5(-32,-28,64,46,5),d0.$3(D.fha,A.ci,A.cA))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(b8),$.mK(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Mg(d2,new B.av(b8.c-t,b8.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b8,c7.$1(D.wr))
d2.O(D.aMV,2,c7.$1(A.bP))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_6))
return!0
case"monitor":d2.aq(c9.$5(-34,-28,68,40,3),c7.$1(A.eo))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(b9),$.mK(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Mg(d2,new B.av(b9.c-t,b9.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b9,c7.$1(D.wr))
d2.aF(D.fhh,c7.$1(A.bj))
d2.aq(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d_))
return!0
case"projector":if(c6){d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.ex.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(c0),$.mK(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Mg(d2,new B.av(c0.c-t,c0.d-q),d4,!1,c5,c5)
d1.restore()}d2.aq(c9.$5(-26,-4,52,24,6),d0.$3(D.fgZ,A.hY,A.d_))
d2.O(D.aN6,7,c7.$1(A.av))
d2.O(D.aN6,4,c7.$1(c6?A.ex:A.ct))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.r(d1,2),new B.r(d1,14),c8.$2(A.dB,1))}return!0
case"carscreen":d2.aq(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.aq(c1,c7.$1(M.mX))
d2.aq(c1,c8.$2(A.by,1.2))
if(c6){c2=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.ce(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.h.F(d4*6,48)
d2.O(new B.r(-26+d1,4-d1*0.1),2.4,c7.$1(A.be))
d5.$5(d2,""+(88+A.o.F(A.h.bh(d4*2),5)),H.aNq,A.c,10)
d5.$5(d2,"km/h",D.euR,A.aE,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.aq(c3,d0.$3(new B.a4(c3.a,c3.b,c3.c,c3.d),A.d_,A.cR))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bt(d1.save())
d1.clipRRect(B.n6(c4),$.mK(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Mg(d2,new B.av(c4.c-t,c4.d-q),d4,!1,c5,c5)
d1.restore()
d1=c7.$1(A.bh.j(0.2))
d1.y=A.n4
d2.O(A.J,26,d1)}else d2.aq(c4,c7.$1(A.a_))
d2.ah(D.ewR,D.ewW,c8.$2(A.bj,4))
d2.ah(D.eu2,D.eui,c8.$2(A.bj,4))
return!0}return!1},
fYD:function fYD(){},
fYF:function fYF(){},
fYG:function fYG(){},
fYE:function fYE(){},
hn8(d,e,f,g){return new C.akn(d,g,f,e)},
Gv(d,e,f){return new C.bdN(d,e,f)},
akn:function akn(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ako:function ako(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.e=_.d=null
_.f=!1
_.r=null
_.w=d
_.Q=_.z=_.y=_.x=null
_.as=e
_.at=f
_.ax=0
_.ch=_.ay=null
_.CW=g
_.cx=h
_.cy=!1
_.db=null
_.h8$=i
_.m9$=j
_.fa$=k
_.h9$=l
_.bw$=m
_.a9$=n
_.c=_.a=null},
bKO:function bKO(d,e){this.a=d
this.b=e},
bKP:function bKP(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKQ:function bKQ(){},
bKR:function bKR(d){this.a=d},
bKS:function bKS(d,e,f){this.a=d
this.b=e
this.c=f},
bKM:function bKM(d,e){this.a=d
this.b=e},
bKJ:function bKJ(d,e){this.a=d
this.b=e},
bKK:function bKK(d,e,f){this.a=d
this.b=e
this.c=f},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKE:function bKE(){},
bKL:function bKL(d,e,f){this.a=d
this.b=e
this.c=f},
bKI:function bKI(d,e){this.a=d
this.b=e},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKH:function bKH(d){this.a=d},
bL7:function bL7(d){this.a=d},
bL8:function bL8(){},
bKd:function bKd(){},
bL9:function bL9(d,e){this.a=d
this.b=e},
bL6:function bL6(d,e){this.a=d
this.b=e},
bL1:function bL1(d){this.a=d},
bKZ:function bKZ(d,e,f){this.a=d
this.b=e
this.c=f},
bL_:function bL_(d,e){this.a=d
this.b=e},
bL2:function bL2(d){this.a=d},
bKX:function bKX(d,e){this.a=d
this.b=e},
bKY:function bKY(d,e){this.a=d
this.b=e},
bL0:function bL0(d){this.a=d},
bL3:function bL3(d){this.a=d},
bKU:function bKU(d,e){this.a=d
this.b=e},
bKV:function bKV(d,e){this.a=d
this.b=e},
bKW:function bKW(d,e){this.a=d
this.b=e},
bL4:function bL4(d){this.a=d},
bKT:function bKT(d){this.a=d},
bL5:function bL5(d){this.a=d},
bKe:function bKe(d,e){this.a=d
this.b=e},
bKA:function bKA(d,e){this.a=d
this.b=e},
bKC:function bKC(d,e){this.a=d
this.b=e},
bKB:function bKB(d,e){this.a=d
this.b=e},
bKz:function bKz(){},
bKl:function bKl(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKm:function bKm(d,e){this.a=d
this.b=e},
bKn:function bKn(d){this.a=d},
bKj:function bKj(d){this.a=d},
bKr:function bKr(d,e,f){this.a=d
this.b=e
this.c=f},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKs:function bKs(d,e){this.a=d
this.b=e},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKu:function bKu(d,e){this.a=d
this.b=e},
bKv:function bKv(d,e,f){this.a=d
this.b=e
this.c=f},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKw:function bKw(d,e,f){this.a=d
this.b=e
this.c=f},
bKg:function bKg(d,e){this.a=d
this.b=e},
bKx:function bKx(d,e,f){this.a=d
this.b=e
this.c=f},
bKf:function bKf(d,e){this.a=d
this.b=e},
bKy:function bKy(d){this.a=d},
bKo:function bKo(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKq:function bKq(d){this.a=d},
bdN:function bdN(d,e,f){this.a=d
this.b=e
this.c=f},
fus:function fus(){},
fut:function fut(){},
fuu:function fuu(){},
fuf:function fuf(){},
fuv:function fuv(){},
fue:function fue(){},
fuw:function fuw(){},
fuj:function fuj(){},
fud:function fud(){},
fuk:function fuk(){},
fuc:function fuc(){},
ful:function ful(){},
fub:function fub(){},
fum:function fum(){},
fu9:function fu9(){},
fua:function fua(){},
fun:function fun(){},
fu7:function fu7(){},
fu8:function fu8(){},
fuo:function fuo(){},
fu6:function fu6(){},
Wx:function Wx(d){this.a=d},
aFJ:function aFJ(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e2B:function e2B(){},
e2C:function e2C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2D:function e2D(){},
e2q:function e2q(d){this.a=d},
e2p:function e2p(d,e,f){this.a=d
this.b=e
this.c=f},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e2n:function e2n(){},
e2z:function e2z(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2u:function e2u(d){this.a=d},
e2v:function e2v(){},
e2x:function e2x(d,e,f){this.a=d
this.b=e
this.c=f},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2t:function e2t(){},
e2F:function e2F(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2E:function e2E(){},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2I:function e2I(d){this.a=d},
e2J:function e2J(d){this.a=d},
azG:function azG(d,e){this.c=d
this.a=e},
bbV:function bbV(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cMq:function cMq(d){this.a=d},
bbU:function bbU(d,e){this.b=d
this.a=e},
cMp:function cMp(d){this.a=d},
aA0:function aA0(){},
aA1:function aA1(){},
aMg:function aMg(){},
bAA:function bAA(){},
iua(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bW(A.vF,23)
$.S()
b8=B.L()
b8.r=A.av.gp(0)
b9.O(A.vF,25,b8)
b8=B.L()
b8.san(D.eFZ.aD(0,v))
b9.O(A.vF,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.h.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.vF,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.vF,3,r)
c2.$5(b9,w?"V":"A",D.ewZ,A.bq,12)
c2.$5(b9,w?A.h.ad(o,1)+" V":""+A.h.U(o*1000)+" mA",D.ewl,A.av,9.5)
return!0
case"fan":b8=B.by(D.fgr,A.iF)
$.S()
s=B.L()
s.r=A.by.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aF(D.fhi,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vG,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bt(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bX(A.aMZ,18,10)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.h9.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c0(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vG,4,b8)
b8=B.L()
b8.b=A.aa
b8.c=2
b8.r=A.cA.gp(0)
b9.O(H.vG,22,b8)
b8=B.L()
b8.b=A.aa
b8.c=0.8
b8.r=A.k0.gp(0)
b9.O(H.vG,14,b8)
return!0
case"speaker":n=B.by(D.aTc,A.r9)
$.S()
b8=B.L()
b8.san(D.aup.aD(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eGl.aD(0,B.bW(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d_.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bj.gp(0)
b9.O(H.a9z,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bW(D.etC,6+u*6+A.h.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.c4.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.by(D.fh9,A.r9)
$.S()
b8=B.L()
b8.san(D.cb4.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.by(D.aTe,A.jy)
s=B.L()
s.r=A.i7.gp(0)
b9.aq(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FP(k)<500?":":" "
i=A.a.b0(A.o.v(B.dg(k)),2,"0")
h=A.a.b0(A.o.v(B.fV(k)),2,"0")
b8=B.L()
b8.r=A.be.j(0.12).gp(0)
b9.aF(D.aTe,b8)
c2.$5(b9,i+j+h,D.ewH,A.be,21)}b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.ewF,2.4,b8)
b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.etH,2.4,b8)
return!0
case"calculator":l=B.by(D.fgP,A.ir)
$.S()
b8=B.L()
b8.san(D.caO.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.by(D.fgI,A.hF)
s=B.L()
s.r=(b7?A.a_k:D.but).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ewk,A.YU,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.by(new B.a4(r,b8,r+6,s),A.V7)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=(f===3?A.c9:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.by(D.fgD,A.ir)
$.S()
b8=B.L()
b8.r=M.mX.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.9
b8.r=D.alz.gp(0)
b9.aq(l,b8)
e=B.by(D.fgt,A.iF)
if(b7){b8=B.L()
b8.san(D.ccr.aD(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bt(b8.save())
b8.clipRRect(B.n6(e),$.mK(),!0)
b8.translate(-12,-25)
L.Mg(b9,D.fnw,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.by(D.fgq,A.hF)
s=B.L()
s.r=A.b5.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.be.gp(0)
b9.aF(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.U(d*100)+"%",D.evn,A.c,6)}else{b8=B.L()
b8.r=D.wr.gp(0)
b9.aq(e,b8)}b8=B.by(D.fhy,D.eGt)
s=B.L()
s.r=A.w.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.by(D.fh8,A.nZ)
$.S()
b8=B.L()
b8.san(D.cbm.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Tb[a0]
b8=a1<0?-4:4
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.ct.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.h.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(a2?A.bi:A.aL).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bW(H.vG,8+u*6+A.h.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.fK.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.by(D.fgO,A.iF)
s=$.S()
r=B.L()
r.r=A.cR.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aA.j(0.5*a3).gp(0)
b8.y=A.CX
b9.O(A.vF,34,b8)}a4=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ce(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bx())
b8=B.L()
b8.r=B.ap(A.eq,D.bkV,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bt(b8.save())
b8.translate(0,-2)
b9.jq(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a9z,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bt(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aH(s,A.aj,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bx())
q=B.L()
q.san(D.c9m.aD(0,D.fh1))
b9.af(l,q)
q=new B.aH(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bx())
p=B.L()
p.r=A.ft.gp(0)
b9.af(q,p)
r=new B.aH(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bx())
s=B.L()
s.r=A.ft.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aDL[a0]
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.av.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bt(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.h.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.aE.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aH(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ce(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bx())
r=B.L()
r.san(D.cat.aD(0,D.fgN))
b9.af(l,r)
r=new B.aH(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bx())
q=B.L()
q.r=A.dY.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ce(-34,-6,-18,12))
b8=B.L()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cP,A.uB,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cR
b8.r=s.gp(0)
b9.aF(D.fgM,b8)
if(b7){b8=B.L()
b8.r=A.cP.j(0.3).gp(0)
b8.y=A.n4
b9.O(A.aMX,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.av.gp(0)
b9.O(D.esF,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.S().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bx())
s=B.L()
s.r=A.ex.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.ex.j(0.5*u).gp(0)
s.y=W.OY
b9.O(D.ewL,24,s)}b8=B.by(D.fhr,A.iF)
s=$.S()
r=B.L()
r.r=A.cR.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.esV,D.aN9,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aN9,D.ewM,r)
a7=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bx())
s=B.L()
s.r=(b7?A.aQ:A.k1).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bj).gp(0)
b9.O(D.ewP,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aH(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ce(0,22,34,-6))
r=B.L()
r.b=A.aa
r.c=2
r.r=A.hK.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b1.r=D.a63[u].j(0.6).gp(0)
b1.y=A.Hs
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.aj,b6,b6,b1)
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
q=new B.ce(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bx()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(b0)p=D.a63[u]
else{p=B.ap(D.a63[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iu9(b9,c0,c1,c2)},
fW:function fW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hi8(d){var w=D.mv.h(0,d)
return(w==null?null:w.b)===D.AQ},
ivp(d,e,f){return B.a6(d,!1).ce(B.vm(null,!1,!0,!0,new C.h2L(e,f),A.eW,null,A.pt,new C.h2M(),x.H))},
Kk:function Kk(d,e){this.a=d
this.b=e},
m7:function m7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2L:function h2L(d,e){this.a=d
this.b=e},
h2M:function h2M(){},
Wg:function Wg(d,e,f){this.c=d
this.d=e
this.a=f},
aFz:function aFz(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.a9$=f
_.c=_.a=null},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZo:function dZo(d,e,f){this.a=d
this.b=e
this.c=f},
dZy:function dZy(d,e,f){this.a=d
this.b=e
this.c=f},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZA:function dZA(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZd:function dZd(d){this.a=d},
dZw:function dZw(){},
dZs:function dZs(d){this.a=d},
dZt:function dZt(d){this.a=d},
dZu:function dZu(d){this.a=d},
dZv:function dZv(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZr:function dZr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZp:function dZp(){},
dZq:function dZq(d){this.a=d},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZi:function dZi(d){this.a=d},
dZj:function dZj(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZh:function dZh(d,e,f){this.a=d
this.b=e
this.c=f},
dZg:function dZg(d){this.a=d},
byC:function byC(d,e,f){this.b=d
this.c=e
this.a=f},
aga:function aga(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aO4:function aO4(){},
a2l(d,e,f,g,h,i){return new C.bxo(d,e,f,g,h,i)},
bxo:function bxo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuX:function fuX(){},
fuY:function fuY(){},
fuZ:function fuZ(){},
fv_:function fv_(){},
fv0:function fv0(){},
fv1:function fv1(){},
fv2:function fv2(){},
fv3:function fv3(){},
a9O:function a9O(d){this.a=d},
cnL:function cnL(d){this.a=d},
cnM:function cnM(){},
cnK:function cnK(d,e){this.a=d
this.b=e},
cnJ:function cnJ(d){this.a=d},
XT:function XT(d){this.a=d},
aHe:function aHe(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h8$=f
_.m9$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eWo:function eWo(d){this.a=d},
eWk:function eWk(d){this.a=d},
eWj:function eWj(d,e){this.a=d
this.b=e},
eWm:function eWm(d,e){this.a=d
this.b=e},
eWl:function eWl(d,e){this.a=d
this.b=e},
eWn:function eWn(d){this.a=d},
byO:function byO(d,e,f){this.b=d
this.c=e
this.a=f},
WF:function WF(d){this.a=d},
bmK:function bmK(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h8$=d
_.m9$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e5q:function e5q(){},
e5r:function e5r(){},
e5l:function e5l(d,e){this.a=d
this.b=e},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5o:function e5o(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5p:function e5p(d){this.a=d},
btt:function btt(d,e,f){this.b=d
this.c=e
this.a=f},
VQ:function VQ(d){this.a=d},
bmj:function bmj(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h8$=d
_.m9$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dQH:function dQH(){},
dQI:function dQI(){},
dQC:function dQC(){},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQG:function dQG(d){this.a=d},
dQD:function dQD(d){this.a=d},
aKG:function aKG(d,e,f){this.a=d
this.b=e
this.c=f},
Ww:function Ww(d){this.a=d},
bmB:function bmB(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d){this.a=d},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d){this.a=d},
e1T:function e1T(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e20:function e20(d){this.a=d},
e1R:function e1R(d,e){this.a=d
this.b=e},
e21:function e21(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e22:function e22(d){this.a=d},
e1P:function e1P(d){this.a=d},
e23:function e23(d){this.a=d},
e24:function e24(d){this.a=d},
e1O:function e1O(d){this.a=d},
boD:function boD(d,e,f){this.b=d
this.c=e
this.a=f},
Xf:function Xf(d){this.a=d},
aGx:function aGx(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
esT:function esT(d,e){this.a=d
this.b=e},
esU:function esU(d,e,f){this.a=d
this.b=e
this.c=f},
esS:function esS(d,e,f){this.a=d
this.b=e
this.c=f},
esV:function esV(d){this.a=d},
esR:function esR(d){this.a=d},
esZ:function esZ(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
esW:function esW(d,e){this.a=d
this.b=e},
et0:function et0(d){this.a=d},
Xp:function Xp(d){this.a=d},
aGS:function aGS(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDE:function eDE(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d,e){this.a=d
this.b=e},
XK:function XK(d){this.a=d},
bnR:function bnR(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eRK:function eRK(){},
eRT:function eRT(){},
eRP:function eRP(d){this.a=d},
eRO:function eRO(){},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eRN:function eRN(d,e){this.a=d
this.b=e},
eRR:function eRR(d){this.a=d},
eRM:function eRM(d,e){this.a=d
this.b=e},
eRS:function eRS(d){this.a=d},
eRL:function eRL(d){this.a=d},
Xe:function Xe(d){this.a=d},
bnl:function bnl(d,e,f,g,h,i,j,k){var _=this
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
_.h8$=f
_.m9$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
ery:function ery(){},
erz:function erz(){},
err:function err(d){this.a=d},
erq:function erq(d){this.a=d},
ers:function ers(d){this.a=d},
erp:function erp(d){this.a=d},
ert:function ert(d){this.a=d},
ero:function ero(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
erv:function erv(d){this.a=d},
erm:function erm(d,e){this.a=d
this.b=e},
erw:function erw(d){this.a=d},
erl:function erl(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
bga:function bga(d,e,f){this.c=d
this.d=e
this.a=f},
aNR:function aNR(){},
bAw:function bAw(){},
aOb:function aOb(){},
bAC:function bAC(){},
aOE:function aOE(){},
bAL:function bAL(){},
aP4:function aP4(){},
bAU:function bAU(){},
JQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.au0
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mz(d,e[w],f,g)
return}for(p=B.cY(e,0,B.dD(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mz(d,s,f,g)
else B.bO(new B.be(1000*q),new C.cnH(d,s,f,g),u)}},
clf(d){return C.i_Z(d)},
i_Z(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$clf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$clf)
case 7:r=f
q=B.aV(J.u(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.W.aP(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a1(p,o,n):B.T(o,n)
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
return B.i($async$clf,v)},
b3S(d,e){return C.i0_(d,e)},
i0_(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3S=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3S)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.W.av(e,null)),$async$b3S)
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
return B.i($async$b3S,v)},
cnH:function cnH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
il2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.ou(A.h.ad(p.c,4)),"y",B.ou(A.h.ad(p.d,4)),"v",p.e,"l",B.ou(A.h.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.ou(A.h.ad(p.as,3)),"ch",p.at,"vc",B.ou(A.h.ad(p.z,3)),"s",B.ou(A.h.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a3(f).k("ci.E"))
A.d.ff(l)
return A.W.av(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iuz(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.W.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.u(w,"parts"))
f=J.aT(f==null?A.cu:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.u(t,"k"))
s=e==null?"":e
if(!$.qL().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.u(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.u(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u3(a2,d,a0,a1)
a3.asv(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.u(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.u(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.u(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k8(J.u(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k8(J.u(t,"b"))
r.x=d===!0
d=B.aV(J.u(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.u(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.u(t,"ch"))
r.at=A.h.M(d==null?0:d)
d=B.aJ(J.u(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.u(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.c5(v,r)}i=g.a(J.u(w,"wires"))
i=J.aT(i==null?A.cu:i)
h=x.j
while(i.C()){q=i.gP(i)
p=h.a(q)
f=B.aJ(J.u(p,0))
o=f==null?a5:A.h.M(f)
f=B.aJ(J.u(p,2))
n=f==null?a5:A.h.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.u(v,o)
l=J.u(v,n)
if(m!=null&&l!=null)a6.amq(m,A.h.M(B.dF(J.u(p,1))),l,A.h.M(B.dF(J.u(p,3))))}i=B.aJ(J.u(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.u(w,"done"))
h=J.aT(h==null?A.cu:h)
while(h.C()){j=h.gP(h)
J.c5(k,A.h.M(B.dF(j)))}return new B.brA(i,k)}catch(a4){return a5}},
fM7(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fM7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fM7)
case 7:r=o.aV(n.u(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fM7,v)},
bHk(d){return C.iwc(d)},
iwc(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bHk=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bHk)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bHk)
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
return B.i($async$bHk,v)}},D,U,Z,Ap,L,F,M,H,Aq,A_,Ar,A0,A4,As
J=c[1]
B=c[0]
A=c[2]
A5=c[121]
A1=c[147]
A6=c[153]
A2=c[151]
S=c[144]
O=c[42]
V=c[140]
A7=c[136]
N=c[146]
A8=c[156]
A9=c[164]
Aa=c[108]
Ab=c[138]
A3=c[120]
Ac=c[162]
Ad=c[154]
Ae=c[158]
Af=c[77]
W=c[142]
T=c[86]
P=c[131]
Ag=c[89]
Ah=c[115]
X=c[145]
Y=c[157]
Ai=c[106]
E=c[29]
I=c[3]
G=c[39]
K=c[110]
Aj=c[104]
Ak=c[124]
Al=c[163]
Am=c[103]
Q=c[161]
An=c[159]
R=c[132]
Ao=c[160]
C=a.updateHolder(c[18],C)
D=c[141]
U=c[155]
Z=c[149]
Ap=c[26]
L=c[28]
F=c[101]
M=c[99]
H=c[143]
Aq=c[68]
A_=c[150]
Ar=c[58]
A0=c[112]
A4=c[152]
As=c[148]
C.alC.prototype={}
C.WZ.prototype={
S(){return new C.bn9(B.T(x.N,x.i),new B.au(A.aw,$.ax()),B.a([],x.X),B.a([],x.eZ),B.n2(0,null,null))}}
C.bn9.prototype={
gXh(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Q2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Q2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.cg)
t.m(new C.ekE(t))
t.a.toString
p=t.gXh()
w=3
return B.b(C.bCO(C.i8V(q,C.ikO(p),o,t.ay)),$async$Q2)
case 3:s=e
r=s==null?null:J.j6(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.imk(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ekF(t,o,r))
$.aU.x1$.push(new C.ekG(t))
case 1:return B.h(u,v)}})
return B.i($async$Q2,v)},
Zo(d){return this.c3V(d)},
aYZ(){return this.Zo(null)},
c3V(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
t.f.sb4(0,o)
t.m(new C.ekR(t))
G.dA(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCO(C.ig0(o)),$async$Zo)
case 3:r=n.a=m.iue(f)
p.b=""
if(r!=null&&!C.ikP(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iml(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alC(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ekS(p,t))
t.c9z(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zo,v)},
c9z(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gXh()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ekN(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ekL(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ekO(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ekP(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ekQ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bh.j(0.1),g=B.l(16),f=B.K(A.bh.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fp5,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.B2,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fQj
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Lg,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fAd,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uK,B.d(u,l,l,l,l,l,l,D.fD3,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,K.Lj,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fFF,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.ig,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.m_,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.D(A.Oo,new B.c8(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bn,new B.bz(1,A.bd,B.d(q,l,l,l,l,l,l,new B.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bh.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.d(o.a,l,l,l,l,l,l,A.W5,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bf(s,s,s,s),l,l,A.n),l,l,l,l,A.hm,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.P,new B.bL(A.a9,l,l,s,l),A.ax,B.p(l,B.d(o.b,l,l,l,l,l,l,D.fLu,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bf(q,q,q,q),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eyh)
j=B.ca(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajO(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bEn,A.ez,l,l,1/0),A.b0,A.ie),B.E(C.hn8(m.gXh(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dZ("Ask about it",i,new C.ekV(m),l,A.bh,l),new E.dZ("Invent something new",!i,new C.ekW(m),l,A.bh,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dy6[p]
i.push(new E.dZ(n,!1,new C.ekX(m,n),l,A.bh,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dfy[p]
i.push(new E.dZ(r,!1,new C.ekY(m,r),l,A.bh,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(16),A.a1),l,A.eX,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kr,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ekZ(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a7,l,A.ao,l,A.VV,l,l),1)
h=m.at
v=h&&j?D.bUt:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fD(v,j,new C.el_(m,k),A.bh,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lI(A.bh,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.H_.prototype={}
C.vt.prototype={}
C.Xl.prototype={
S(){return new C.aGM(A.J,A.J,A.az,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGM.prototype={
gb_i(){var w,v,u,t=this,s=D.IP[t.cx],r=D.Td[t.cy],q=D.DY[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e_(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aC1[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cB(p,0,new C.ezZ())},
ga3R(){return D.IP[this.cx].d/this.gb_i()},
gaRd(){return 0.1*(D.IP[this.cx].d/0.9)/D.Td[this.cy].d},
Y(){this.a3()
this.mk()
C.clf("rocket_lander").bG(new C.eAi(this),x.k)},
c9I(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cT.ai()*0.6
w.f=new B.r(0.15+A.cT.ai()*0.7,0.08)
w.r=new B.r((A.cT.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mE(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eAj())
return}w=D.tw[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3R()
v=v.a5(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaRd())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcJ()*6*D.aE4[m.d]))}t=m.r=m.r.a5(0,v.aM(0,d))
s=m.f=m.f.a5(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.h.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.DY[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3S("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JQ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3R()/(D.tw[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.ad(m.ga3R()/(D.tw[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dA(80,"",500,0,0.6,"noise")
B.fO()}}if(m.Q&&m.x>0&&A.o.F(A.h.bh(m.CW*20),2)===0)G.dA(90,"",70,0,0.12,"noise")
m.m(new C.eAk())},
ahw(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fCx,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dZ(e[w].a,f.$1(w),new C.eA0(this,g,w),v,h,v))
return new B.D(A.eP,B.x(B.a([u,A.cS,B.c_(A.bI,s,A.br,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bIE(d){var w,v,u,t,s=this,r=null,q=s.ga3R()/(D.tw[s.d].b/9.81*0.28)>=1,p=A.h.U(1/s.gaRd()),o=D.aE4[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.aco,r,r,r),A.T,s.ahw("ENGINE: "+D.IP[s.cx].b,D.IP,new C.ezQ(s),new C.ezR(s),A.cP),s.ahw("FUEL TANK: "+D.Td[s.cy].b,D.Td,new C.ezS(s),new C.ezT(s),A.be),s.ahw("LANDING GEAR: "+D.DY[s.db].b,D.DY,new C.ezU(s),new C.ezV(s),A.aH),s.ahw("EXTRAS (tap to add)",D.aC1,new C.ezW(s),new C.ezX(s),A.bh)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h8l)
o=(q?A.be:A.bY).j(0.14)
w=B.l(12)
v=A.h.ad(s.gb_i(),2)
u=A.h.ad(s.ga3R()/(D.tw[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.U(D.DY[s.db].d*100)+".",r,r,r,r,r,r,D.fDd,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.ig,A.bS,r,r,r))
m.push(A.T)
m.push(new B.bL(A.z,r,r,new E.fD(A.oO,"Launch",new C.ezY(s),A.be,r),r))
return B.as(B.p(r,B.ca(B.x(m,A.E,r,A.e,A.N,0,A.p),A.t,r,A.y,r,r,A.bT,r,r,A.ah),A.f,r,A.m4,new B.o(D.btY,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
b0u(d,e,f,g){var w=null,v=f?A.cP:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mT(A.iT,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ezN(e),new C.ezO(e),w,w,w,w,new C.ezP(e))},
b0t(d,e,f){return this.b0u(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cm(new C.eAb(s,D.tw[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tw[w].a:"\ud83d\udd12"
o.push(new E.dZ(v,s.d===w,new C.eAc(s,w),r,D.tw[w].c,r))}v=B.a([s.b0t(F.arA,new C.eAd(s),s.y),A.bc,s.b0u(A.v5,new C.eAe(s),s.Q,130),A.bc,s.b0t(A.Qd,new C.eAf(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bc,B.az(r,B.p(r,D.bYH,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eAg(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lI(A.cP,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.b9,A.i,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bk3.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tw[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ap(I.a_W,e,0.25)
d.toString
f.san(new B.a7(A.aY,A.b3,A.x,B.a([F.aix,d],x.O),n,n).aD(0,new B.a4(0,0,i,h)))
a0.aF(new B.a4(0,0,i,h),f)
w=new B.e0()
w.cU(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e0()
s.cU(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bx())
h=$.S()
g=B.L()
g.r=B.ap(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bX(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.by(q,A.jy)
e=B.L()
e.r=A.bi.gp(0)
a0.aq(g,e)
e=B.by(q.cr(2),A.nZ)
g=B.L()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bt(f.save())
f.translate(g.a*k,g.b*j)
a0.jq(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cP.j(0.6).gp(0)
m.y=W.OY
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bx())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bx())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ce(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ce(-14,-10,0,-26))
o.E(new B.bx())
k=B.L()
k.san(F.aus.aD(0,D.fgA))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.vG,5,k)
k=new B.aH(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bx())
j=B.L()
j.r=A.aA.gp(0)
a0.af(k,j)
i=new B.aH(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bx())
m=B.L()
m.r=A.aA.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAN.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAy()}}
C.aUS.prototype={}
C.a4H.prototype={}
C.bd0.prototype={}
C.VP.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ew(["skin"],x.N),o=new Float32Array(0)
return new C.aFd(w,v,u,t,s,r,q,new B.cx(null,x.A),p,D.Ml,D.Ml,A.az,A.cT,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFd.prototype={
Y(){var w=this
w.a3()
w.mk()
w.as=new C.c7A(w.gciQ())
new C.dQA(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bzA()},
ciR(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f9(0,B.I(["t","init","data",$.hxl],x.N,x.z))
v.at=!0
v.ay=""
v.aBi()
break
case"parts":v.m(new C.dQa(v))
break
case"pick":v.m(new C.dQb(v,d))
break
case"shot":v.ajq(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dQc(v))
break}},
aBi(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.azT[q.cx]
v=new C.dQd()
u=q.ch
u=B.C(u,B.a3(u).k("ci.E"))
A.d.ff(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.h.U(q.k4),"spin",q.go],t,x.cK)
r=A.W.av(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.f9(0,u)}},
ajq(d){return this.czV(d)},
czV(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ajq=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cJ.aL(A.a.b1(d,A.a.co(d,",")+1))
w=6
return B.b(B.axr(B.a([B.cHC(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ajq)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.q).f.T(I.aVz)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ajq,v)},
aAH(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bh(w)!==A.h.bh(v.p1)){E.XM("kick",0,0.4)
v.UU(170,new C.dQB())}v.p1=w
return},
aeZ(d){var w,v,u,t,s=this
s.m(new C.dQe(s,d))
if(d==null){s.fy=D.Ml
s.fr=1
w=s.as
if(w!=null)w.f9(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dQf(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aBi()
w=s.as
if(w!=null)w.f9(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cCo(t,d)
return},
cCo(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XM("kick",0,0.8)
this.UU(260,new C.dQg())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dA(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UU(w*70,new C.dQh(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dA(110,"",360,0.7,0.3,"saw")
else E.hcl("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dA(210+e.length*4,"",80,0.6,0.55,"tri")
G.dA(2400,"",20,0,0.3,v)
break
case"muscle":G.dA(70,"",150,1,0.6,"sine")
break
case"vessel":G.dA(300,"",380,0.4,0.22,v)
E.XM("kick",0,0.3)
break
default:E.hcl("organic",2+A.o.F(e.length,6),200,0.4)}},
cH5(d){this.m(new C.dQj(this,d))},
b0N(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAH(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c_A(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dQ7(u,w,d))
v=x.t
C.JQ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UU(1100,new C.dQ8(u))
return}if(d==null){if(u.cy!=null)u.aeZ(null)
return}u.aeZ(d)},
c3c(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.c4.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fyA,u,u,u)}else if(d==null||e==null)w=D.fNF
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hu,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,K.Lj,u,u,u)],w),A.E,u,A.e,A.N,0,A.p),1),B.aI(u,u,u,u,D.c0j,u,u,u,new C.dQ9(v),u,u,u,u,"Back to the whole body",A.ch)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.Z4,u,s,t,u,u,A.n),u,u,u,u,S.an3,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dJJ.h(0,g)
i.aBi()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dq6
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAH(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.oR,h,h,h,new C.dQq(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BZ(h,A.pS,p))}p=i.ax
o=p?0:1
q.push(new B.dt(p,B.xA(B.p(A.z,B.x(D.dzH,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b8s,h,h,D.hAX,h,h,h,h,h),A.b0,A.n0,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.amL,i.c3c(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dhb[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dZ(l,o,new C.dQr(i,n),n.c,A.c4,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dZ(k,k===i.cy,new C.dQs(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iZ(A.bY,""+A.h.U(o)+" beats/min","Heart rate",180,40,new C.dQt(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G8(D.azT[j],i.cx===j,new C.dQu(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dZ("Spin",o,new C.dQv(i),D.aqz,A.aH,h),new E.fD(A.oJ,"Reset view",new C.dQw(i),A.c,h),new E.dZ(l,m,new C.dQx(i),A.I9,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dZ("Heartbeat sound",i.ok,new C.dQy(i),A.oN,A.bY,h))
p.push(new E.fd(v,h,h))
return E.lI(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aNP.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aNQ.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzz()}}
C.c7A.prototype={
kX(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hDN
$.hDN=v+1
u="ngmy-body-viewer-"+v
$.xw()
$.q4().pl(u,new C.c7B(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fC(v,"message",new C.c7C(t),!1,x.gA)
t.b=u},
f9(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RD(w.contentWindow)
if(w!=null)J.ajC(w,e,"*")}}catch(v){}}}
C.yL.prototype={}
C.D5.prototype={}
C.nQ.prototype={}
C.bdM.prototype={}
C.VW.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aFf(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFf.prototype={
Y(){var w=this
w.a3()
w.mk()
w.adX()
$.aU.x1$.push(new C.dSf(w))},
adX(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adX=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adX)
case 6:q=e.rA("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dRU(s,r))
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
return B.i($async$adX,v)},
aei(d){return this.c7f(d)},
c7f(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aei=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$aei)
case 6:r=f
q=s.cx
p=B.a3(q).k("kd<ci.E,n>")
q=B.C(new B.kd(q,new C.dRX(),p),p.k("M.E"))
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
return B.i($async$aei,v)},
azm(d,e,f,g){var w="c"+this.y++,v=new C.D5(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.azm(0,e,f,0)},
adh(d,e){var w
if(D.An.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.r(-36,w))},
um(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aVp(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fa$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dn(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.d_F[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.um(p,0)&&n.um(p,1)
break
case"or":p=q.a
o=n.um(p,0)||n.um(p,1)
break
case"xor":p=q.a
o=n.um(p,0)!==n.um(p,1)
break
case"nand":p=q.a
o=!(n.um(p,0)&&n.um(p,1))
break
case"nor":p=q.a
o=!(n.um(p,0)||n.um(p,1))
break
case"not":o=!n.um(q.a,0)
break
default:o=n.um(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bT3(){return this.aVp(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bT3()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a3(w).k("b8<2>")).gae(0),v=new B.eL(w,new C.dSg()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fa$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fa$)
o=s+1
G.dA(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
azn(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
ml(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
avw(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dRS(w,d))
return}w.m(new C.dRT(w,d))},
cCG(d){this.m(new C.dRY(this,d,$.bHH()[d]))},
cc2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bHH()[a0]
v=d.d
u=B.a3(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dRN(),t),s)
A.d.b_(r,new C.dRO())
q=B.C(new B.Y(new B.b8(v,u),new C.dRP(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dRQ(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dB(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aVp(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lq(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dRR(d,o,a0))},
aAd(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b8<2>")
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
clh(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b8<2>")
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
c35(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.An.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adh(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRN(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adh(p,o)
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
cc4(d){var w,v,u,t=this,s=t.aAd(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eZ()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dA(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dRZ())
return}u=t.bRN(d)
if(u!=null)t.m(new C.dS_(t,u))
else t.m(new C.dS0(t))},
ay9(d){return this.c6d(d)},
c6d(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ay9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAd(d)
if(s==null){w=1
break}B.jv()
t.m(new C.dRW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ay9,v)},
bEs(d){if(this.x.A(0,A.az))return
this.m(new C.dRM(this,d,A.cT))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bHH()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oN:X.ts,A.ab,h,h,h,21),h,h,h,new C.dS9(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cs.j(0.14)
r=B.K(A.cs.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fxJ,h,h,h),B.d(w.b,h,h,h,h,h,h,A.Wj,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.ln,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.be:A.eV,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bJ(D.fZl,h,i.gcc1(),B.bp(A.cs,h,h,h,h,h,h,h,h,h,h,A.ch))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Ow,D.bF5,h,h,1/0))}u.push(B.E(B.cm(new C.dSa(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.An.h(0,r).a+": "+D.An.h(0,r).e,h,h,h,h,h,h,A.u3,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a16,A.bS,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.An.gdP(D.An),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,B.d(p.a,h,h,h,h,h,h,D.aXA,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.o(n,h,new B.bH(m,m,m,m),new B.bf(q,q,q,q),h,h,A.n),h,h,h,A.f2,Am.Ot,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dSb(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.duI[l]
s.push(new E.fD(A.Qe,k.b,new C.dSc(i,k),A.cs,h))}s.push(new E.fD(I.wV,"Clear",new C.dSd(i),A.bY,h))
r=B.a([],g)
for(j=0;q=$.bHH(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.lS
o=i.ay
n=i.cx.q(0,j)?A.be:A.bt
r.push(new E.dZ(q.a,o===j,new C.dSe(i,j),p,n,h))}return E.lI(A.cs,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.be3.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.agN.gp(0)
a5.aF(new B.a4(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.r(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.adh(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aH(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.ks(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=N.oA
a5.af(f,n)}n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=3.2
n.d=A.bG
n.r=(h?A.ex:A.by).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.K_)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.S().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.ks(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dn(q,q.r,q.e);a3.C();)this.cc3(a5,a3.d)},
cc3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.An.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bX(a0.c,64,64)
s=B.by(t,A.jQ)
r=w.cy===v
q=s.eD(A.cz)
$.S()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.y=A.n4
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aD(0,B.bW(a0.c,52)))
d.O(q,52,p)}q=s.eD(A.cM)
p=B.L()
o=e.c
p.r=B.ap(o,A.w,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.w,u?0.2:0.45)
m.toString
q.san(new B.a7(A.aY,A.b3,A.x,B.a([p,m],x.O),g,g).aD(0,t))
d.aq(s,q)
q=B.L()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oL:D.bV0}else l=e.b
k=C.hec(B.lq(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aJ(0,new B.r(p/2,q.gba(q)/2)))
j=C.hec(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a5(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hec(f,9,u?A.ex:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1r(d,w.adh(a0,h),o)
this.b1r(d,a0.c.a5(0,D.K_),o)},
b1r(d,e,f){var w
$.S()
w=B.L()
w.r=D.agN.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aE(d){return!0}}
C.aNU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAx.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzE()}}
C.Om.prototype={
S(){return new C.aFw(B.n2(0,null,null))}}
C.Ll.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B7.prototype={}
C.aFw.prototype={
Y(){this.a3()
B.bO(A.qB,C.itj(),x.H)},
cc9(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dYr(w,e))},
c51(){var w=this
w.e.t()
w.e=B.n2(w.f,null,null)
w.m(new C.dYq(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c6
return B.oU(t,B.c6(v,s,t?new C.bur(w.e,w.gcc8(w),new C.dYs(d),v):new C.aJO(u,new B.bg(u.b,x.W)),v,!1,!1,v,!1),new C.dYt(w,u),x.K)}}
C.bw4.prototype={}
C.bur.prototype={
b1s(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bA:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a1v,B.x(B.a([v,A.bF,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aE(d,A.dD,x.w).w,p=B.aI(s,s,s,s,B.X(A.eK,r?A.bA:A.ab,s,s,s,20),s,s,D.hBp,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.l(14),A.IS,s,A.n)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.l(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aH.j(0.22),A.J,8)],x.V),new B.a7(A.ay,A.aC,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bA:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.p(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hBu,s,A1.anz,s,s,s),s,s,s),1),A.tW],u),A.l,s,A.e,A.i,0,s,s)
v=t.b1s("STUDIOS","Play, make things, and keep what you make",r)
$.bHI()
return B.bn(!1,B.x(B.a([B.E(B.w8(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nN(new B.Q(8,q.r.b+6,8,4),new B.m9(w,s),s),new B.m9(v,s),new B.nN(A.hZ,B.Q1(new B.oX(new C.fa6(d),9,!0,!0,!0,0,B.tt(),s),D.aVo),s),new B.m9(t.b1s("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nN(D.bFe,B.Q1(new B.oX(new C.fa7(t),6,!0,!0,!0,0,B.tt(),s),D.aVo),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agt.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.l(20)
v=(A.o.ar(o.c,3)&1)===0
u=B.a7G(v?A.aH:A.bh,20)
v=v?A.aH:A.bh
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eE(B.x(B.a([new B.VU(v,44,m.c,n,n),A.P,B.d(m.a,n,2,A.a2,n,n,n,D.fDW,A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,D.fGM,A.K,n,n)],x.p),A.l,n,A.b9,A.i,0,A.p),n,u,n,A.CS,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.l(20)
v=B.l(20)
u=B.ap(K.md,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ak5],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eE(B.x(B.a([B.p(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a7(A.ay,A.aC,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.P,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b9,A.i,0,A.p),n,new B.o(n,n,s,v,q,new B.a7(A.ay,A.aC,A.x,u,n,n),A.n),n,A.CS,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.ar(this.c,3)&1)===0?A.aH:A.bh,g=B.l(20)
if(i)w=B.a7G(h,20)
else{w=B.l(20)
v=B.ap(K.md,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ak5],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,12)],x.V),new B.a7(A.ay,A.aC,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.VV(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a9J,0)],s)
u.push(B.p(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bf(o,o,o,o),m,new B.a7(A.a5,A.a9,A.x,n,l,l),A.n),l,17,l,new B.Q(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bA
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eE(B.x(B.a([new B.a5(58,l,u,l),A.T,t,A.ax,B.X(A.Dy,i?B.VV(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b9,A.i,0,A.p),l,w,l,A.CS,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bN(new B.o(h,j,j,B.l(22),j,j,A.n),A.bk,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JX,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.o(j,j,j,j,j,new B.a7(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.dAJ,j),A.n),A.bk,j,j),0,0,0),B.ao(j,new B.bN(new B.o(j,j,j,j,j,new B.a7(A.aY,A.b3,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bk,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b5(j,j,j,new C.bvs(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fA3,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.KP)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hc,B.A(B.a([s,A.eu,B.E(B.x(p,A.E,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dt(!0,B.ec(j,A.w.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bS(0,new B.dt(!0,new B.bN(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bk,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bN(new B.o(j,j,j,u,r,j,A.n),A.bk,B.bv(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bvs.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.bt(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jq(0,0.35)
t=B.bX(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aD(0,t))
d.aF(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.buY.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.brM,D.aj8],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kG,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.o(w,w,s,v,r,new B.a7(A.ay,A.aC,A.x,u,w,w),A.n),A.bk,B.bv(q,B.b5(B.as(B.X(A.jL,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcJ(p,w),A.az),A.aq),w),w)}}
C.bcJ.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.ej(A.J)
$.S()
t=B.L()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aE(d){return!1}}
C.aJO.prototype={
S(){return new C.aJP(new B.cx(null,x.A),null,null)}}
C.aJP.prototype={
guM(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,D.bCu,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_Q(){var w,v=this,u=v.e
if(u===$){w=B.bo(null,A.hb,null,1,null,v)
w.f1(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gazo(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcc6(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYH(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZu(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gbao(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guM()
w.dm()
w.dV$.I(0,this.gcCp())},
cCq(){var w,v,u,t,s,r,q,p=this,o=p.guM().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gazo().a){case 0:w=D.nU
break
case 1:w=D.vp
break
case 2:w=D.a66
break
case 3:w=D.nU
break
case 4:w=D.dmK
break
case 5:w=D.vp
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aeq)r=0.09
else r=s===D.aer?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dA(260+90*v,"",260,1.6,0.18,"tri")
u=D.cdC[v]
E.mz("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JQ("bell",D.cmt,1400,0.35)}}p.ax=o},
t(){this.guM().t()
this.ga_Q().t()
this.bBu()},
afp(){var w=this
w.guM().d1D(0,B.dw(0,0,0,A.h.U(11e3/w.Q),0,0))
w.m(new C.f9N(w))},
cnm(){this.guM().bQ(0)
this.m(new C.f9M(this))},
afo(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZu(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.bb(q,A.b7,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gbao(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.bb(p,A.b7,A.aP),$.ax()))}o=B.C(u.gaYH(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(K.md,null,new C.f9L(u,l,m,o),t,!0,!0,!0,A.lX,!1,!1,x.H),$async$afo)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ax()
n.R$=0}return B.h(null,v)}})
return B.i($async$afo,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gazo(),f=i.a.c,e=f.b,d=i.gcc6(),a0=new C.B7(g,e,f.c,d,i.gaYH(),i.gaZu(),i.gbao())
f=B.ap(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oN:X.ts,A.ab,h,h,h,21),h,h,h,new C.f9V(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c40,h,h,h,i.gcc7(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,I.oR,h,h,h,new C.f9W(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c7(i.ga_Q(),new C.f9X(i,a0),h),B.cm(new C.f9Y(i,a0))],g)
u=i.as
t=u?i.gcnl():i.gcca()
u=u?D.bUe:A.tp
s=B.ap(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ch),B.E(B.c7(i.guM(),new C.f9Z(i,a1,a0),h),1),B.aI(h,h,h,h,D.c09,h,h,h,new C.fa_(i),h,h,h,h,"Replay",A.ch)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.h.ad(s,1)
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iZ(r,u+"x","Speed",2.5,0.4,new C.fa0(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dxG[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dZ(p.b,o===p.a,new C.fa1(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.ce1[q]
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
d.push(B.az(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bH(j,j,j,j),h,h,new B.a7(A.ay,A.aC,A.x,n,h,h),A.a6),h,l,h,I.amA,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa2(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lI(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e8(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.N,0,A.p))},
bDD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nU[r]
p=A.h.D((1-A.ed.az(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.nU[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.nU[r]
q=n-0.01
q=A.h.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.k5(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nU[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nU[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nU[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kO(q,new B.j0(n,f,A.aY,!0,f,new C.Rk(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nU[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nU[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mN(new C.bu2(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bUD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vp[r]
p=A.qz.az(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vp[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vp[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k7(n,n,n,1)
m.fE(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Rk(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fE(3.141592653589793)
k=new B.j0(k,f,A.z,!0,f,new C.buY(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kO(q,new B.j0(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cHz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a66[w]
l.push(A.ck.az(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b5(n,n,n,new C.bxy(d.d,l,D.aBB,m,C.buq(e,0.4,0.62),f,C.buq(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.heK(g,w)
q=D.aBB[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kO(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.heK(g,w)
r=D.a66[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kO(A.h.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.Wv,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJW(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ck.az(0,C.buq(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dP(B.b5(f,f,f,new C.bts(A.d.gH(a1),C.buq(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.est),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dH.az(0,A.h.D((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fE(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k7(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.cj(A.z,f,f,new B.kO(k*(0.45+0.55*o),B.dP(new B.j0(l,f,A.z,!0,f,new C.Rk(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.f9E())
A.d.u(a0,new B.N(w,new C.f9F(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cc5(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vp[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.nk.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vp[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aDI[q]
k=B.dr()
k.n5(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k7(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vp[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,new B.kO(m,B.dP(new B.j0(k,e,A.z,!0,e,new C.Rk(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vp[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,B.dP(new B.mN(new C.bdp(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aDI[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bGz(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.esx],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nU[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.ck.az(0,p)
q=D.aDT[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nU[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.nU[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n5(l*h+D.dr7[r]*o)
f.fE(l*0.9)
h=0.55+0.45*o
f.k7(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,new B.kO(g,B.dP(new B.j0(f,a3,A.z,!0,a3,new C.Rk(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nU[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDT[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,B.dP(new B.mN(new C.btu(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bu2.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.by(u,A.hF)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oA
d.aq(q,t)
t=B.by(u,A.hF)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bts.prototype={
a4(d,e){var w,v,u=this.c,t=B.bX(e.ej(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=W.OY
d.c0(t,u)
u=B.L()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c0(t,u)
u=t.cr(-14)
v=B.L()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.c0(u,v)},
aE(d){return!0}}
C.bdp.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.J),h=this.c,g=A.ck.az(0,h)
$.S()
w=B.L()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e0()
t.cU(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.btu.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bX(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c0(q,p)}},
aE(d){return d.c!==this.c}}
C.bxy.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.S()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a7(A.aY,A.b3,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aD(0,d0))
d1.aF(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.heK(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.n4
d1.c0(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a7(A.aY,A.b3,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aD(0,a4))
d1.aF(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.aj,c1,c1,a5)
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
a9=new B.bx()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a5.r=B.ap(A.d.gal(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.aj,c1,c1,a5)
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
a2=new B.bx()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b2.b=A.aa
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aF(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.h.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.by(new B.a4(b7,a6,b7+s,a9),A.hF)
$.S()
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bt(g.save())
g.clipRect(B.i2(a4),$.mn()[1],!0)
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.san(new B.a7(A.aY,A.b3,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aD(0,b9))
d1.aF(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aPB.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.a1P.prototype={
a7(){return"_Role."+this.b}}
C.qB.prototype={}
C.rh.prototype={}
C.D9.prototype={}
C.a_O.prototype={}
C.agh.prototype={}
C.a21.prototype={
gZ(d){return this.d}}
C.Dk.prototype={}
C.ada.prototype={}
C.adr.prototype={}
C.afn.prototype={}
C.bk0.prototype={
a4_(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dA(d,"",e,g,h,f)},
bbv(d,e,f){return this.a4_(d,e,f,0,0.55)},
aE2(d,e,f,g){return this.a4_(d,e,f,0,g)},
bbw(d,e,f,g){return this.a4_(d,e,f,g,0.55)},
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
w.b3()},
alB(d,e,f,g){var w="n"+this.ay++,v=new C.rh(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tj(d,e,f){return this.alB(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.dsm(e))
A.d.bq(w.c,new C.dsn(e))
w.b3()},
bfo(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n8.h(0,v.b).c===D.y4)return!1
w=this.b
if(A.d.aU(w,new C.dsj(d,e)))return!1
w.push(new C.D9(d,e))
this.b3()
return!0},
c3S(d){var w
if(d.b==="beat")return D.cmD[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aE9[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dk(u,t,j.ax,90))
w.push(new C.Dk(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a21(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bbv(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a21(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Dk(u,t,j.ax,120))
j.aE2(120,200,"noise",0.5)
j.bbv(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dk(u,t,j.ax,230))
w.push(new C.Dk(u,t,j.ax+160,160))
w.push(new C.Dk(u,t,j.ax+320,100))
j.bbw(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ada(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bbw(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adr(u,u.a5(0,new B.r(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a4_(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fO()
j.a4_(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afn(u,D.aDw[v],t,j.ax))
j.aE2(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aE2(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ciJ[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cxu(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eL(w,new C.dsk(d));v.C();)j.aCx(w.gP(0),j.ax+D.cv5[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cMo[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eL(w,new C.dsl(d));v.C();)j.aCx(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xG(w,0,v-700)},
cxu(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_O(e,"~"+d))},
aCx(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agh(d.a,v,e,w))
u.push(new C.a_O(w,v))},
a7J(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b8<2>")
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
else if(o.ax>=q){o.aHE(r)
u.n(0,r,o.ax+o.c3S(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dso(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.dsp(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b1(u,1)
for(u=A.d.gae(v),r=new B.eL(u,new C.dsq(p));r.C();)o.aCx(u.gP(0),o.ax)}else o.aHE(u)}}A.d.bq(o.d,new C.dsr(o))
A.d.bq(o.e,new C.dss(o))
A.d.bq(o.f,new C.dst(o))
A.d.bq(o.w,new C.dsu(o))
A.d.bq(o.x,new C.dsv(o))
A.d.bq(o.r,new C.dsw(o))
o.b3()},
vO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.r(q.a+o*e,q.b+p*e)
r.b=new B.r(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.r(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.r(l,o)
if(o>n){p=m.a=new B.r(l,n)
t=m.b=new B.r(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.r(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.dn(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.I(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.W.av(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Ux(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.W.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.u(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.w(J.u(v,"k"))
if(!D.n8.am(0,u))continue
t=B.w(J.u(v,"id"))
m.n(0,t,new C.rh(t,u,new B.r(B.dF(J.u(v,"x"))*k.cy.a,B.dF(J.u(v,"y"))*k.cy.b),A.h.M(B.dF(J.u(v,"p")))))
s=B.cb(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.u(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.w(J.u(r,0))
p=B.w(J.u(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D9(q,p))}k.b3()
return!0}catch(l){return!1}},
cX3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rh(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bfo(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GL.prototype={}
C.Xk.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGL(new C.bk0(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cT,A.L,A.az,$.ax()),A.bC,A.J,A.J,A.Z,null,null)}}
C.aGL.prototype={
adQ(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adQ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adQ)
case 6:q=n.k8(m.u(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ezj(s))
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
return B.i($async$adQ,v)},
aaK(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaK=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ez8(s))
u=3
w=6
return B.b(B.aA(),$async$aaK)
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
return B.i($async$aaK,v)},
bPV(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cB(0,0,new C.eza())+"|"+A.d.cB(o,0,new C.ezb())
if(v===p.ch)return p.CW
u=new C.eze()
t=x.s
s=B.a([],t)
r=new C.ezf(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eL(n,new C.ezc());w.C();){q=n.gP(0)
if(!A.d.aU(o,new C.ezd(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cY(s,0,B.dD(5,"count",x.S),x.N).dq(0)},
Y(){var w,v=this
v.a3()
v.adQ()
v.d.db=v.ay
w=v.q6(new C.ezJ(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.bAw()},
adl(d){return this.c3i(d)},
c3i(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adl=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$adl)
case 6:q=m.aV(l.u(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ux(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZW(A.d.gH(D.aCY))
if(s.c!=null)s.m(new C.ezi())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adl,v)},
aZW(d){this.d.cX3(0,d.c,d.d)
this.EO()},
EO(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lM,new C.ez4(this))},
azp(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b8<2>")
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
cli(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b8<2>")
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
c36(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n8.h(0,r.b).c===D.y4)continue
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
ccd(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hDO(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cFe(d){var w,v,u,t,s,r,q=this,p=q.azp(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aHE(p)
return}if(q.r)return
t=D.n8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rr)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.EO()
return}if(q.r)return
r=q.ccd(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b3()
q.EO()}},
cmD(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cli(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azp(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
cmE(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b4n(){var w,v,u=this
if(u.z!=null){w=u.c36(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bfo(v,w)}else v=!1
if(v){B.k0()
u.EO()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.EO()
u.x=null}},
ae2(d){return this.c6e(d)},
c6e(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azp(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jv()
p=t.c
p.toString
w=3
return B.b(B.bU(K.md,null,new C.ezl(q),p,!0,!0,!1,A.lX,!1,!1,x.y),$async$ae2)
case 3:if(f===!0){r.W(0,s)
t.EO()}case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
ccb(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tj(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eZ()
this.EO()},
ai3(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ai3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(K.md,null,new C.ezn(),s,!0,!0,!0,A.lX,!1,!1,x.es),$async$ai3)
case 2:t=e
if(t!=null)u.aZW(t)
return B.h(null,v)}})
return B.i($async$ai3,v)},
afq(d){var w=0,v=B.j(x.H),u=this,t
var $async$afq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ez7(),t,null,!0,!0,x.y),$async$afq)
case 2:if(f===!0){u.d.a8(0)
u.EO()}return B.h(null,v)}})
return B.i($async$afq,v)},
B(d){var w=this,v=null,u=B.a([B.ajO(w.r?new B.bL(A.a5,v,v,new B.D(A.Hp,B.hv(D.bYY,D.fRV,new C.ezH(w),v),v),v):w.cce(),A.b0,A.iQ),B.E(B.cm(new C.ezI(w)),1)],x.p)
if(!w.r)u.push(w.czY())
return B.c6(v,A.c6,B.bn(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bLB(){var w=null,v=new C.ez9(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bS(0,B.ec(B.as(B.p(w,B.ca(B.x(B.a([D.h2t,A.ax,D.haf,A.aB,v.$4(A.oK,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A0.Du,A.cs,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kc,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.PL,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h9x,new B.bL(A.a9,w,w,B.bP(!1,D.h_y,w,w,!0,w,w,w,this.gbLu(),w,w),w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Yf,new B.o(K.md,w,s,t,w,w,A.n),w,w,w,A.fu,As.anR,w,w,w),w,w,w),u,!0),0,0,0)},
cce(){var w=this,v=null,u=B.aI(v,v,v,v,Aj.n6,v,v,v,new C.ezt(w),v,v,v,v,v,v),t=w.aaa(A.Dk,"How it works",new C.ezu(w),!0),s=w.ay?A.oN:X.ts
return new B.D(D.bJr,B.A(B.a([u,D.bL7,t,w.aaa(s,"Sound",new C.ezv(w),!0),w.aaa(A.e9,"Ideas",w.gcqp(),!0),w.aaa(I.wV,"Clear",w.gccc(w),!0),w.aQv(A.he,"Show",new C.ezw(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQv(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Af.wL,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.he(new B.D(new B.Q(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aaa(d,e,f,g){return this.aQv(d,e,f,g,!1)},
czY(){var w=null,v=new C.ezp(this),u=A.c.j(0.08)
return B.p(w,B.ca(B.A(B.a([v.$2("START",D.y4),v.$2("CHANGE",D.FC),v.$2("REACT",D.rr)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM),A.f,w,w,new B.o(K.Cb,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bEp,w,w,w)},
czZ(d){var w,v,u,t,s=null,r=D.n8.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f2,B.az(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a2,s,s,s,D.aXA,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a7(A.aY,A.b3,A.x,u,s,s),A.n),s,s,s,s,A.hy,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ezo(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bk1.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bt(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.r(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aF(new B.a4(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
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
d=new B.aH(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.ks(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n8.h(0,l.b).d
a2=D.n8.h(0,k.b).d
f=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f.b=A.aa
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.r2(new B.r(i,j),new B.r(g,h))
f.san(new B.a7(A.a5,A.a9,A.x,e,b3,b3).aD(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hDO(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=N.oA
b7.O(a5,8,i)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.K_)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.S().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.ks(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.e6.az(0,v)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kN(p,j,A.e6.az(0,v))
i.toString
j=B.kN(p,j,A.e6.az(0,A.h.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.r2(j,i)
p.san(new B.a7(A.a5,A.a9,A.x,g,b3,b3).aD(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kY
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kY
b7.O(p,11,j)
j=k.a
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bT(A7.Bt,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aD(0,B.bW(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bk2(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dn(o,o.r,o.e);b4.C();)b2.cm9(b7,b4.d,b5)
b6.restore()},
cm9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n8.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.bX(e.c,64,64)
t=B.by(u,A.iq)
s=t.eD(A.cz)
$.S()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.y=A.n4
d.aq(s,r)
if(v>0){s=t.cr(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.CX
d.aq(s,r)}s=t.eD(A.cM)
r=B.L()
q=h.d
r.r=B.ap(q,A.w,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.w,0.35)
p.toString
r.san(new B.a7(A.aY,A.b3,A.x,B.a([s,p],x.O),j,j).aD(0,u))
d.aq(t,r)
r=B.L()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bk2(B.lq(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aJ(0,new B.r(s/2,r.gba(r)/2)))
n=C.bk2(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a5(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aDw[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rr){s=e.c.a5(0,new B.r(0,62))
r=B.L()
r.r=D.aE9[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bk2(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bk2(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.y4)k.b5b(d,e.c.aJ(0,D.K_),q)
k.b5b(d,e.c.a5(0,D.K_),q)},
b5b(d,e,f){var w
$.S()
w=B.L()
w.r=A.c6.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aE(d){return!0}}
C.aOK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.ek.prototype={}
C.u3.prototype={
asv(d,e,f,g){var w=this
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
C.abQ.prototype={}
C.acX.prototype={}
C.a5Q.prototype={
bhg(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h4()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abQ(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c8o(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQP())},
alB(d,e,f,g){var w="p"+this.c++,v=new C.u3(w,e,f,g)
v.asv(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bR_(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cO1(d,e,f,g,h){return A.d.aU(this.b,new C.bQV(e,f,g,h))},
amq(d,e,f,g){var w
if(d===f||this.cO1(0,d,e,f,g))return null
w=new C.acX(d,e,f,g)
this.b.push(w)
return w},
aD3(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
An(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
apc(d){return this.Mv(d)&&!d.x&&d.cx>this.An(d)},
b9z(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mv(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ccy(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Ao.h(0,v)
if(w!=null)return w.a
return 100},
vO(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c8o(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bR0(a2),t).cB(0,0,new C.bR1(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bR3(o)
m=B.a([],x.t)
l=new C.bR2(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bR5(g,l,n)
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
a2.b9v(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.An(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b9v(e,d,w,!0)
a2.bSg(a4)},
b9v(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQR(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQQ(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQT(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c2(b7,0,!1,b3)
v=x.Y
k=B.T(v,b3)
j=B.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bj(B.dO(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9z(t)*(1+t.CW))
a4=b2.aD3(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ccy(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bVD(e,a0,b8)
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
bVD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c2(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bSg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aD3(o)/a1.b9z(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.An(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bKe(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bhg(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uu(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.h.D(o.db-h,0,24)
else o.cy=A.h.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uu(o,"The "+$.qL().h(0,n).b+" got "+A.h.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the "+$.qL().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uu(o,"The regulator had to turn "+A.h.ad(o.cy,1)+" V into heat while "+A.h.U(i*1000)+" mA flowed. That is "+A.h.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Ao.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qL().h(0,n).b
l=f.b
l=l===A.h.fK(l)?""+A.h.U(l):B.w(l)
g=f.c
g=g===A.h.fK(g)?""+A.h.U(g):B.w(g)
a1.uu(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.flb.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uu(o,"The bulb got "+A.h.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uu(o,"The LED had "+A.h.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uu(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uu(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uu(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uu(o,"The capacitor was charged to "+A.h.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bKe(d){return A.d.aU(this.a,new C.bQO(d))},
uu(d,e){var w
d.x=!0
d.ay=e
this.bhg(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blV(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJq(d){var w=d.b
return D.aUk.q(0,w)||D.Ao.am(0,w)||w==="buck"||w==="regulator"},
biL(d){var w,v=!0
if(!this.Mv(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Ao.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VN(d,e){var w=this.b
return new B.Y(w,new C.bR7(d,e),B.U(w).k("Y<1>")).gJ(0)},
rw(d){var w,v
if(d.x)return!1
w=d.b
if(D.Ao.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qL().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJq(d)||i.rw(d))return null
w=i.VN(d,0)
v=i.VN(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcWD(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.fK(r)?""+A.h.U(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Ao.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MI("battery"),o=J.aT(t.a),t=new B.eL(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.VN(n,0)+i.VN(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MI("switch"),o=J.aT(t.a),t=new B.eL(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qL().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.An(k))return"The "+$.qL().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.ad(k.cx,2)+" amps, but it can only give about "+A.h.ad(i.An(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aU(u,new C.bQW(i,d))
h=q.b
h=h===A.h.fK(h)?""+A.h.U(h):B.w(h)
u=A.h.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MI(d){var w=this.a
return new B.Y(w,new C.bQZ(d),B.U(w).k("Y<1>"))},
aJ1(d){return this.MI(d).aU(0,new C.bQY(0.35))},
qi(d,e){return A.d.aU(this.a,new C.bQX(e))}}
C.akp.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.nt.gp(0)
c2.aF(new B.a4(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.O(new B.r(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mv.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mv.am(0,j.b)?(j.ch-1)*38:0
b6.cKJ(c2,new B.r(m*b8+l*(42+k),n*b9),new B.r(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hRC(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.L()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bG
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=F.N9.j(A.h.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.CX
c2.O(new B.r(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bt(n.save())
n.translate(k,j)
i=A.h.D(A.nk.az(0,A.h.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cna(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.An(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aH(a1,A.aj,b7,b7,a2)
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
a8=new B.bx()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=A.aA.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aH(a1,A.aj,b7,b7,a2)
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
a0=new B.bx()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iF(new B.et("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.H(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jo(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.ep()
b0.a4(c2,new B.r(h+-3,g+-8))}if(!e.x)h=(D.aUk.q(0,i)||D.Ao.am(0,i)||i==="buck"||i==="regulator")&&!w.rw(e)&&w.VN(e,0)+w.VN(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.at.gp(0)
c2.O(new B.r(k,j),10,h)
b0=new B.iF(new B.et("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.H(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jo(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.ep()
b0.a4(c2,new B.r(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mv.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.r(g,h)
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=F.nt.gp(0)
c2.O(b0,7,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.c=2.4
k.r=(j&&w.biL(e)?A.bY:A.ab).gp(0)
c2.O(b0,6,k)
if(j&&w.biL(e)){b0=new B.iF(new B.et("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.H(!0,A.bY,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jo(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.ep()
b0.a4(c2,new B.r(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.r(n,m)
b4=A.h.D(b2.r/0.8,0,1)
l=B.ap(M.NO,F.a_X,b4)
l.toString
k=b2.f
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.gp(0)
j.c=2.4
j.d=A.bG
c2.ah(b3,new B.r(n-b2.e*0.035,m-k*0.035),j)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.j(0.35*b4).gp(0)
j.y=A.OZ
c2.O(b3,4.5*b4+1,j)}if(A.d.aU(s,new C.bLa())){b5=A.d.cB(s,0,new C.bLb())
$.S()
b9=B.L()
b9.r=D.biV.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aF(new B.a4(0,0,c0,c1),b9)
b0=B.fE(b7,A.cx,b7,b7,b7,D.fwp,A.a7,A.c1,b7,A.dJ,A.c2)
b0.nB(b8-24)
b0.a4(c2,new B.r(12,10))}},
qY(d,e,f,g,h){var w=null,v=B.fE(w,A.cx,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a7,A.c1,w,A.dJ,A.c2)
v.ep()
v.a4(d,f)},
cKJ(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hJB(a0,a1,a2)
e.E(new B.ce(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.N9,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bj
u=B.L()
u.b=A.aa
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.aa
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.amb(new B.uU(B.BP(e),!1,B.a([],x.R))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jP()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.jP()
i=t[u].b
i===$&&B.c()
i=A.h.F(k*22+j*m*l,i.a.length())
v.jP()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.jP()
h=t[u].b
h===$&&B.c()
g=A.h.F(i+j,h.a.length())
v.jP()
f=t[u].W1(g)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
PV(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.aY:A.a5
u=g?A.b3:A.a9
t=B.ap(e,A.w,0.3)
t.toString
w.san(new B.a7(v,u,A.x,B.a([e,f,e,t],x.O),A.IQ,null).aD(0,d))
return w},
ayz(d,e,f){return this.PV(d,e,f,!0)},
c7Y(d,e){return this.PV(d,A.bj,A.hY,e)},
ajd(d,e){var w,v,u
$.S()
w=B.L()
w.san(D.aSu.aD(0,B.bW(e,4.2)))
d.O(e,4.2,w)
w=e.a5(0,D.ev6)
v=e.a5(0,D.evf)
u=B.L()
u.r=A.cR.gp(0)
u.c=1.2
d.ah(w,v,u)},
cna(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.san(D.c98.aD(0,D.fho))
c0.c=3.4
c0.d=A.bG
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=N.oA
c1.c0(D.fhc,w)
if(c3){w=B.by(D.fhm,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.aq(w,v)}u=C.hoi(c2)
c1.ah(new B.r(-u,0),D.ewI,c0)
c1.ah(D.etM,new B.r(u,0),c0)
t=c2.x
w=c2.b
s=D.mv.am(0,w)&&c2.ch!==1
if(s){J.bt(c1.c.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.bGZ(c1,c2)
break
case"solar":r=B.by(D.fhf,A.jy)
c1.aq(r,b3.PV(new B.a4(r.a,r.b,r.c,r.d),A.d_,A.bO,!1))
b9=B.L()
w=B.ap(D.bmW,A.d9,0.25+0.55*c2.f)
w.toString
v=B.ap(D.bwE,A.mc,0.3+0.4*c2.f)
v.toString
b9.san(new B.a7(A.ay,A.aC,A.x,B.a([w,v],x.O),b4,b4).aD(0,D.aaE))
c1.aF(D.aaE,b9)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.r(b9,-18),new B.r(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.r(-34,b9),new B.r(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.cA.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.r(b9,-18),new B.r(b9,18),w)}b9=new B.aH($.S().r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bx())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.L()
b9.r=A.ex.j(0.9).gp(0)
c1.O(D.etQ,4+4*w,b9)
break
case"crank":o=B.by(D.fh0,A.fR)
c1.aq(o,b3.ayz(new B.a4(o.a,o.b,o.c,o.d),A.by,A.bP))
b9=B.L()
b9.san(D.aSv.aD(0,B.bW(A.J,12)))
c1.O(A.J,12,b9)
n=new B.r(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cA.gp(0)
b9.c=5
b9.d=A.bG
c1.ah(A.J,n,b9)
b9=B.L()
b9.san(D.eGd.aD(0,B.bW(n,7)))
c1.O(n,7,b9)
b3.ajd(c1,D.ewA)
b3.ajd(c1,D.etB)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aH(b9,A.aj,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bx())
m=B.L()
m.r=A.bO.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bt(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aH(b9,A.aj,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.ce(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.ce(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bx()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.L()
b9.san(D.eFU.aD(0,B.bW(A.J,4.5)))
c1.O(A.J,4.5,b9)
break
case"switch":o=B.by(D.fh7,A.nZ)
b9=B.L()
b9.san(D.aup.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,b9)
b3.ajd(c1,D.UD)
b3.ajd(c1,D.aNh)
h=c2.w?D.aNh:H.aN7
b9=B.L()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bG
c1.ah(D.UD,h,b9)
b9=B.L()
b9.r=(c2.w?A.be:A.bO).gp(0)
b9.c=4
b9.d=A.bG
c1.ah(D.UD,h,b9)
b9=B.kN(D.UD,h,0.85)
b9.toString
w=B.L()
w.r=A.aA.gp(0)
c1.O(b9,5,w)
break
case"fuse":g=B.by(D.aTd,D.aSA)
b9=B.L()
b9.r=A.ft.j(0.25).gp(0)
c1.aq(g,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aE.gp(0)
c1.aq(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ap(A.bO,A.cP,c2.fx).gp(0)
c1.ah(D.aNA,D.aNf,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aNA,D.ex3,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.euD,D.aNf,b9)
b9=B.L()
b9.r=A.dZ.gp(0)
c1.O(A.J,6,b9)}for(f=0;f<2;++f){e=B.bX(new B.r(M.fP[f]*22,0),20,9)
c1.aq(B.by(e,A.iF),b3.PV(e,A.d6,A.oh,!0))}break
case"pot":b9=B.L()
b9.san(D.eG4.aD(0,B.bW(A.J,21)))
c1.O(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.aE.gp(0)
k.c=1.2
c1.ah(new B.r(b9*18,w*18),new B.r(v*22,m*22),k)}b9=B.L()
b9.san(D.eFS.aD(0,B.bW(A.J,13)))
c1.O(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bG
c1.ah(new B.r(b9*3,w*3),new B.r(v*12,m*12),k)
break
case"resistor":a1=B.by(D.aTd,D.aSA)
b9=B.L()
b9.san(D.ccB.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=a3[p].gp(0)
c1.aF(new B.a4(b9,-9,b9+4.5,9),w)}b9=B.L()
b9.r=A.aQ.gp(0)
c1.aF(D.fhA,b9)
b9=c2.r
b3.qY(c1,b9>=1000?"1k\u03a9":""+A.h.U(b9)+"\u03a9",D.ew2,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.ex.j(0.55*w).gp(0)
v.y=A.CX
c1.O(H.vG,34,v)}o=B.bX(D.esu,12,18)
c1.aq(B.by(o,A.iF),b3.PV(o,A.bj,A.dY,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.dB.gp(0)
v.c=1
c1.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.N_
else{v=B.ap(A.dY,A.hM,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gv
else{m=B.ap(A.d_,A.ex,c2.fx)
m.toString}w.san(new B.bT(A.nj,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aD(0,B.bW(A.tL,17)))
c1.O(A.tL,17,w)
w=B.L()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.O(A.tL,17,w)
b9=b9.r
w=x.v
m=new B.aH(b9,A.aj,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.ce(-12,-4,-9,0))
v=B.L()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.ewY,D.ex_,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.euw,D.euz,v)
w=B.a([],w)
a4=new B.aH(b9,A.aj,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.S()
b9=B.L()
b9.b=A.aa
b9.c=1.8
if(t)w=A.b5
else{w=B.ap(A.d_,D.bo1,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.aA.j(0.6*w).gp(0)
v.y=D.bKV
c1.O(A.tL,30,v)}w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.ex5,D.ex4,w)
w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.euF,D.euE,w)
b9=b9.r
w=x.v
a6=new B.aH(b9,A.aj,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ce(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bx())
v=B.L()
if(t)m=A.jp
else{m=B.ap(A.eq,D.bpO,c2.fx)
m.toString}if(t)k=A.kT
else{k=B.ap(A.kz,A.aA,c2.fx)
k.toString}v.san(new B.a7(A.ay,A.aC,A.x,B.a([m,k],x.O),b4,b4).aD(0,D.fgs))
c1.af(a6,v)
v=B.L()
v.b=A.aa
v.c=1.2
v.r=A.k0.gp(0)
c1.af(a6,v)
v=B.L()
v.r=A.er.gp(0)
c1.aF(D.fgy,v)
w=new B.aH(b9,A.aj,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ce(-6,-12,0,-15))
b9=B.L()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c1.aq(B.by(a7,A.ir),b3.ayz(a7,A.an,A.bm))
b9=B.L()
b9.r=A.ct.gp(0)
c1.aF(D.fg1,b9)
b9=B.L()
b9.r=A.cA.gp(0)
c1.aF(D.fg3,b9)
b9=c1.c
J.bt(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bt(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bX(H.aN2,15,7)
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.cP.j(0.9).gp(0)
c1.c0(w,v)
b9.restore()}w=B.L()
w.r=A.av.gp(0)
c1.O(A.J,3,w)
b9.restore()
b3.qY(c1,"M",D.ewz,A.av,14)
break
case"buzzer":a8=B.bX(A.J,42,42)
b9=B.L()
b9.san(D.eG8.aD(0,a8))
c1.c0(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.O(A.J,6,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aT.gp(0)
c1.O(A.J,6,b9)
b3.qY(c1,"+",D.ews,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.h.F(b9.d*14,5):0
v=B.bW(A.J,24+l*5+v)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.b=A.aa
m.c=2
m.r=A.c4.j(w*(1-l*0.22)).gp(0)
c1.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.by(D.fh3,A.ir)
w=B.L()
w.san(D.caa.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b9.r,A.aj,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.ce(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.L()
w.b=A.aa
w.c=10
w.r=D.boM.j(0.5*b9).gp(0)
w.y=A.kY
c1.af(a9,w)}$.S()
b9=B.L()
b9.b=A.aa
b9.c=3.2
b9.d=A.bG
b9.r=B.ap(A.ma,Ab.yH,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b9=B.by(a7,A.ir)
w=B.L()
w.san(D.c90.aD(0,a7))
c1.aq(b9,w)
w=B.L()
w.r=A.bO.gp(0)
c1.aF(D.fgH,w)
for(p=0;p<4;++p){b0=new B.iF(new B.et("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.H(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a7,A.c1,new B.jo(1),b4,b4,b4,b4,A.c2,b4,A.cx)
b0.ep()
b0.a4(c1,new B.r(-14,-18+p*9))}b1=new B.a4(-16,-24,16,-17)
c1.aq(B.by(b1,A.iF),b3.c7Y(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.be.j(0.5).gp(0)
c1.aF(new B.a4(-3,w,11,w+b9),v)
b3.qY(c1,"1F",H.vG,A.c,11)
break
case"radio":a1=B.by(D.aaE,A.fR)
b9=B.L()
b9.san(D.ccP.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.oh.j(0.6).gp(0)
c1.aq(a1,b9)
b9=B.by(D.fh4,A.jy)
w=B.L()
w.r=A.dW.gp(0)
c1.aq(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.ma.gp(0)
w.c=1.4
c1.ah(new B.r(-27,b9),new B.r(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.fZ:A.oj).gp(0)
c1.aF(D.fg8,b9)
if(c2.fx>0){b9=8+A.h.F(b3.b.d*7,18)
w=B.L()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.r(b9,-13),new B.r(b9,-3),w)}b9=B.L()
b9.san(D.aSv.aD(0,B.bW(D.a9C,6)))
c1.O(D.a9C,6,b9)
b9=B.L()
b9.r=A.oh.gp(0)
c1.O(D.etL,4,b9)
b9=B.L()
b9.r=A.dY.gp(0)
b9.c=1.8
c1.ah(D.etG,D.aNm,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bW(D.aNm,4+l*5+A.h.F(b9.d*8,5))
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.b=A.aa
v.c=1.4
v.r=A.oq.j(0.7).gp(0)
c1.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.by(D.fhe,A.ir)
v=B.L()
v.r=M.mX.gp(0)
c1.aq(w,v)
b2=B.by(D.fhb,A.iF)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bt(b9.save())
b9.clipRRect(B.n6(b2),$.mK(),!0)
b9.translate(-33,-21)
L.fYT(c1,D.fo_,c2.at,b3.b.d,c2.ax,-1,b4,b4)
b9.restore()
b9=B.L()
b9.r=A.be.gp(0)
c1.O(D.etX,1.6,b9)}else{w=B.L()
w.r=D.wr.gp(0)
c1.aq(b2,w)
b9=new B.aH(b9.r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bx())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.L()
b9.r=A.by.gp(0)
c1.aF(D.fgx,b9)
break}C.iua(c1,c2,b3.b.d,b3.gccz())
if(t)b3.qY(c1,"\u2716",D.ex8,A.aA,14)
if(s)c1.c.restore()},
bGZ(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a4(-28,-13,28,13)
d.aq(B.by(w,A.nZ),o.ayz(w,A.d_,A.iO))
v=new B.a4(-22,-13,22,13)
$.S()
u=B.L()
u.san(D.auh.aD(0,v))
d.aF(v,u)
u=B.L()
u.r=A.e3.gp(0)
d.aF(D.fgR,u)
t=new B.a4(28,-5,34,5)
d.aq(B.by(t,A.hF),o.PV(t,A.d_,A.hY,!0))
o.qY(d,"+",D.etm,A.aQ,11)
o.qY(d,"\u2212",D.ewB,A.ab,11)
o.qY(d,B.w(n===A.h.fK(n)?A.h.U(n):n)+"V",D.ewh,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.bw.gp(0)
d.aF(D.fgQ,u)
u=e.as
s=B.L()
s.r=B.ap(A.aA,A.be,u).gp(0)
d.aF(new B.a4(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qY(d,"FLAT",D.ew1,A.bY,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.esE,D.aMV,u)
o.qY(d,n>3?"3 cells":"2 cells",D.ewg,A.aE,8)}}else if(n<=9){r=new B.a4(-22,-17,22,17)
u=B.by(r,A.nZ)
$.S()
s=B.L()
s.san(D.cco.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.dn.gp(0)
d.aF(D.fgS,s)
for(q=0;q<2;++q){p=F.aDS[q]
u=p<0?5:3.6
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.san(D.aSu.aD(0,B.bW(new B.r(p,-18),5)))
d.O(new B.r(p,-18),u,s)}o.qY(d,"9V",D.ew9,A.c,16)}else{r=new B.a4(-34,-16,34,16)
u=B.by(r,A.jy)
$.S()
s=B.L()
s.san(D.auh.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.bt.gp(0)
d.aF(D.fhd,s)
for(q=0;q<2;++q){u=B.by(B.bX(new B.r(F.J6[q],-20),8,10),A.hF)
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.cA.gp(0)
d.aq(u,s)}o.qY(d,"+",D.etv,A.aA,10)
o.qY(d,"12V",D.ewd,A.av,15)}},
aE(d){return!0}}
C.n1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u3(o,r,q,p)
n.asv(o,r,q,p)
k.push(n)
J.iL(s[4],new C.cuT(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.amq(m,u[1],l,u[3])}}}
C.akn.prototype={
S(){var w=x.N
return new C.ako(B.c0(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.ako.prototype={
afB(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKO(w,d))
w.ch=B.cz(A.lN,new C.bKP(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bwB()},
a1e(d,e){return this.cl3(d,e)},
b3R(d){return this.a1e(d,!1)},
cl3(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1e=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.t4:A.yR
p=d.b
w=3
return B.b(L.hkD(s,r,p,d.ax<3.2,q,$.qL().h(0,p).b),$async$a1e)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1e,v)},
cxR(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c1(0,d.a,new C.bKQ()),t=J.cE(u)
t.I(u,v)
t.bq(u,new C.bKR(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2y(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cz(A.iR,new C.bKS(w,u,d))}},
a0V(d){return this.cjp(d)},
cjp(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.ivp(s,d.b,A.h.U(A.h.F(t.a.c.d*0.12,1)*100)),$async$a0V)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a0V,v)},
a2y(d){return this.cvp(d)},
cvp(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bKM(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2y)
case 2:return B.h(null,v)}})
return B.i($async$a2y,v)},
Y(){this.a3()
this.biV()
this.mk()},
biV(){this.a.c.e=new C.bL7(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vO(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mv.h(0,s.b)
if((r==null?null:r.b)!==D.AQ)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1e(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dA(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dA(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cT.ai()<0.5
else u=!1
if(u)G.dA(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dA(900+A.cT.aw(800),"",90,0,0.1,o)
if(A.cT.ai()<0.35)G.dA(300+A.cT.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cT.ai()<0.4
else u=!1
if(u)G.dA(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dA(330+A.o.F(110*A.h.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dA((A.h.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dA(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dA(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cT.ai()<0.5
else u=!1
if(u)G.dA(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dA(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dA(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bL8())},
baX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mv.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4x(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mv.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cKK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mv.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mv.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hJB(new B.r(k,n),new B.r(i,l),p)
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
afz(){this.a.toString
this.m(new C.bKd())},
btf(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dgj[v]
if(!A.d.aU(p.a.c.a,new C.bL9(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Z.AF:o
s=s?Z.AF:o
q=t.alB(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dA(1200,"",50,0,0.3,"tri")
p.afz()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.T_[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fN(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cr<1>")
w=B.C(new B.cr(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b4m(s,!0))
n.a.toString
if(t)w.push(n.b4m(r,!0))
w.push(B.E(B.cm(new C.bL6(n,q)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b4m(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qL()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.p(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xI,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o2,p,p,p)],n),A.l,p,A.b9,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bH(q,q,q,q),new B.bf(r,r,r,r),p,p,A.n),p,p,p,K.oy,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKe(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cw(m,p,p,A.hl,p,p,A.aM,!1),A.f,p,p,new B.o(K.Cb,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cnb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qL().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bKA(e,a1)
t=new C.bKz()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.G,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.p(A.z,B.d(a1.c,d,d,d,d,d,d,A.xI,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.ae,o,B.az(d,B.p(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.Wa,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.n),d,d,d,d,A.oz,d,d,d),A.y,!1,D.hAQ,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bKl(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c4x,d,d,d,new C.bKm(e,a2),d,d,d,d,"Remove part",A.ch),B.aI(d,d,d,d,A.Qu,d,d,d,new C.bKn(e),d,d,d,d,d,A.ch)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.KY,d,d,d),A.cS,B.d("How it is made: "+a1.f,d,d,d,d,d,d,T.aX8,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fQN)
else m.push(new B.D(A.f2,B.A(B.a([t.$2(A.h.ad(Math.abs(a2.dy),2),"VOLTS"),A.bn,t.$2(A.h.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bn,t.$2(A.h.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bgN(a2)
if(j!=null){a1=(a2.x?A.aA:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.aA:A.at).j(0.5),A.r,1)
m.push(new B.D(A.ig,B.p(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fMH,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.n),d,d,d,d,A.cq,d,d,d),d))}if(C.hi8(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f2,new E.dZ("CH "+h,a2.at===i,new C.bKr(e,a2,i),d,r,d),d))}a1=B.ca(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
if(e.a.c.rw(a2)){w=F.SO[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.ax,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.ht,d,d,d)],k)
if(e.a.c.rw(a2))a1.push(new E.fD(A.wX,"Open big screen",new C.bKs(e,a2),r,d))
A.d.u(m,a1)}if(D.mv.am(0,a0)&&!C.hi8(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.rw(a2))a1.push(B.d(e.a.c.rw(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.ht,d,d,d))
if(e.a.c.rw(a2))a1.push(new E.fD(A.Qc,"Open the "+$.qL().h(0,a0).b,new C.bKt(e,a2),r,d))
A.d.u(m,a1)}if(D.mv.am(0,a0))A.d.u(m,B.a([A.am,new E.fD(A.Dp,"Make it bigger (or tap it 4 times)",new C.bKu(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.ad(a2.db,1)
if(e.a.c.rw(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.h.ad(v,1)+" V",d,d,d,d,d,d,D.fGB,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dzb[g]
w=f===A.h.fK(f)?A.h.U(f):f
a1.push(new E.dZ(B.w(w)+" V out",a2.e===f,new C.bKv(e,a2,f),d,r,d))}v.push(new B.D(A.ln,B.c_(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.h4S)
A.d.u(m,v)}if(e.a.c.Mv(a2)&&!a2.x){a1=A.h.ad(a2.cx,2)
w=A.h.ad(e.a.c.An(a2),2)
v=e.a.c
o=v.apc(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.apc(a2)?A.bY:A.ew,d,d,d,d,d,d,d,d,12.5,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.h.D(a2.cx/e.a.c.An(a2),0,1)
v=e.a.c.apc(a2)?A.aA:A.be
m.push(new B.D(A.ig,B.x(B.a([a1,A.cS,B.bv(w,B.kw(A.bw,d,d,5,d,o,new B.lS(v,x.c)),A.aq)],k),A.E,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.U(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ig,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fA8,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dnF[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dZ(w,a2.e===f,new C.bKw(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.ddq[g]
w=f>=1000?"1 k\u03a9":""+A.o.U(f)+" \u03a9"
a1.push(new E.dZ(w,a2.r===f,new C.bKx(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bKy(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bKo(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bKp(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bKq(a2)))
if(a0==="crank")m.push(D.h07)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.ht,d,d,d))
return B.p(d,new B.cN(D.b8k,B.ca(B.x(m,A.E,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.YT,d,q,s,p,d,A.n),d,d,D.hAa,d,D.bF2,d,d,d)}}
C.bdN.prototype={}
C.Wx.prototype={
S(){return new C.aFJ(C.hoh(),new B.cx(null,x.gJ),B.aR(x.S))}}
C.aFJ.prototype={
Y(){this.a3()
$.aU.bZ$.push(this)
this.afA()},
afA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fM7(),$async$afA)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iuz(t.d,r)
if(s!=null){t.m(new C.e2r(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afA,v)},
FB(){var w,v=this
if(!v.as)return
w=C.il2(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bHk(w)},
jn(d){if(d!==A.fW)this.FB()},
t(){$.aU.hZ(this)
this.FB()
this.a2()},
ccB(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e2A(q),u).gJ(0)
s=new B.Y(v,new C.e2B(),u).gJ(0)
r=new B.Y(v,w.gd_f(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e2C(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FB()
if(A.o.F(q.w,10)===0){w=q.f
$.ajs()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajs()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JQ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e2D())
q.FB()
w=q.c
w.toString
w=B.Kj(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajs()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mZ,p,p,p,p,p,p,p,p,p,p))}},
aiq(){var w=0,v=B.j(x.H),u=this,t
var $async$aiq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e2q(u),t,null,!0,!0,x.H),$async$aiq)
case 2:return B.h(null,v)}})
return B.i($async$aiq,v)},
b1E(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.az(w,B.he(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1D(d,e,f,g){return this.b1E(d,e,f,g,null)},
atb(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.az(w,B.p(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e7,new B.di(1,A.cn,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b9,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agK(){var w=0,v=B.j(x.H),u=this,t
var $async$agK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ef(new C.e2m(u),!1,null,x.H)),$async$agK)
case 2:t=u.e.gbl()
if(t!=null)t.biV()
if(u.c!=null)u.m(new C.e2n())
u.FB()
return B.h(null,v)}})
return B.i($async$agK,v)},
bK7(){var w,v,u,t,s=null,r=this.f
$.ajs()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bi:A.aA
u=B.l(9)
t=B.K(K.Cb,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xL,s,s,s),s,s,s),A.f,s,D.b89,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f6,s,s,s)},
ajz(){var w=0,v=B.j(x.H),u=this,t
var $async$ajz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mW,null,new C.e2z(u),t,!0,!0,!0,A.kn,!1,!1,x.H),$async$ajz)
case 2:return B.h(null,v)}})
return B.i($async$ajz,v)},
ccC(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.p(r,D.c1a,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2F(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.p(r,D.be9,A.f,r,r,new B.o(A.bs,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.h2O,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eV:A.h9,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.azG(s.gcj7(),r),A.vO,s.b1D(A.qR,"Construction Lab: real 3D wiring, plumbing and a house",A.cP,new C.e2G(s,d)),s.b1E(A.lS,"Challenges",A.aQ,s.gcAq(),s.bK7()),s.b1D(A.Dk,"How to play",A.aH,new C.e2H(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.atb(A.oG,"Circuits",A.bh,s.gctg()),A.bn,s.atb(A.oE,"Repair",A.aQ,new C.e2I(s)),A.bn,s.atb(I.wV,"Clear",A.bY,new C.e2J(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(K.Cb,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bKf,r,r,r)},
B(d){var w=this,v=null
$.au0="tech"
return B.c6(v,A.c6,B.bn(!0,B.x(B.a([w.ccC(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hn8(w.d,w.e,w.gccA(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azG.prototype={
S(){return new C.bbV(null,null)}}
C.bbV.prototype={
gazw(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.Y,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazw().t()
this.bxX()},
B(d){var w=null,v=this.a.c
return B.az(w,B.he(new B.a5(42,42,B.c7(this.gazw(),new C.cMq(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbU.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.oA
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eG3.aD(0,B.bW(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.aa
v.c=2.2
v.san(new B.h4(A.z,0,6.283185307179586,A.x,D.d3Q,t,new B.mR(p)).aD(0,B.bW(s,r)))
d.O(s,r,v)
p=new C.cMp(d)
p.$3(s.a5(0,A.tL),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.euS),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.exf),2.6,0.5+0.5*Math.cos(q))
u=B.fE(t,A.cx,t,t,t,D.fwv,A.a7,A.c1,t,A.dJ,A.c2)
u.ep()
u.a4(d,s.a5(0,new B.r(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.aA0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aA1.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bwA()}}
C.aMg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAA.prototype={}
C.fW.prototype={}
C.Kk.prototype={
a7(){return"ScreenStyle."+this.b}}
C.m7.prototype={}
C.Wg.prototype={
S(){return new C.aFz(Z.AF,null,null)}}
C.aFz.prototype={
gaaI(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.ox,null,1,null,v)
w.cs(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
gabr(){var w=D.mv.h(0,this.a.c)
return w==null?D.aTv:w},
t(){if(this.f){O.CW(V.KS)
O.bFM()}this.gaaI().t()
this.bzP()},
gBH(){var w=this.gaaI().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
O6(){var w,v=this,u=v.e
if(u==null)return null
w=F.ik[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.h.bh(Math.max(0,v.gBH()-v.z)/10),14)
return w},
JP(d){this.m(new C.dZn(this,d))},
b4S(d){this.m(new C.dZo(this,d,14))},
aDk(d){var w=this.O6()
if(w==null)w=d>0?-1:0
return this.b4S(w+d)},
cFq(d,e){if(e.a<=0||e.b<=0||this.O6()==null)return
this.m(new C.dZy(this,d,e))},
adC(){return this.c4Y()},
c4Y(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.O6()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.dZm(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$adC)
case 3:if(t.c!=null&&r.a)t.b4S(q)
case 1:return B.h(u,v)}})
return B.i($async$adC,v)},
cGY(){var w=this,v=!w.f
w.m(new C.dZz(w,v))
if(v){O.CW(V.abN)
O.hiY(w.gabr().b===D.xv)}else{O.CW(V.KS)
O.bFM()}},
ccF(){var w,v=this
if(!v.f)return
B.jv()
v.m(new C.dZA(v))
w=v.c.K(x.q).f
w.Mj()
if(v.r)w.T(F.aVC)},
aQ_(d){return B.cm(new C.dZf(this,d))},
cmA(d){var w,v=this,u=null,t=v.gBH(),s=t-v.w,r=s<1.4?new L.b_F(v.x,s):u
if(F.ik[d].e===-1){w=Math.max(0,t-v.z)
return new C.aga(d,w,r,A.o.F(v.y+A.h.bh(w/10),14),u)}return new C.aga(d,t,r,u,u)},
aZE(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.Q(u,0,u,0),B.A(B.a([B.X(A.l_,A.av,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.d("Learn more",w,w,w,w,w,w,B.m(w,w,A.av,w,w,w,w,w,w,w,w,d*0.48,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),w),A.o0,!0,w,w,w,w,D.hAc,w,w,w,w,w,w,this.gc4X(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.o0,w,w,A.ai)},
b1F(d,e,f,g){var w=null,v=B.ne(w,A.b5,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.X(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ccE(d,e,f){return this.b1F(d,e,f,null)},
cuz(){var w=this,v=null,u=new C.dZw(),t=A.w.j(0.72),s=B.l(22),r=B.K(w.gabr().d.j(0.5),A.r,1),q=u.$3(D.bUI,"AD \u2212",new C.dZs(w)),p=u.$3(A.arG,"AD +",new C.dZt(w)),o=u.$5$color$on(A.kD,"HOME",new C.dZu(w),w.gabr().d,w.e==null),n=w.e
n=n!=null&&F.ik[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zu,"ADS",new C.dZv(w),A.c4,n)],x.p),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.n),v,v,D.hAh,v,A.OW,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gabr(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dD,x.w).w.r.b+26:8
w=o.ccE(A.cB,"Back to the board",new C.dZB(d))
v=o.f
u=v?Ai.HX:A.wX
v=v?"Leave full screen":"Full screen"
v=o.b1F(u,v,o.gbbq(),D.hB2)
u=B.l(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.Q(8,l,8,0),B.A(B.a([w,A.ae,v,A.ae,B.E(new B.bL(A.a9,n,n,B.p(n,B.d(t==null?s:s+" \xb7 "+F.ik[t].a,n,1,A.a2,n,n,n,Ak.xE,n,n,n),A.f,n,n,new B.o(A.b5,n,n,u,n,n,A.n),n,n,n,n,A.lO,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.xv?o.bMf(m):o.cq_(m)
l=o.f
w=!l
v=l?o.gb1G():n
if(l){l=B.as(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b1,A.t,B.a([l,B.ao(n,B.xA(new B.dt(!k,q,n),A.b0,A.ie,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.am,o.cuz(),B.E(new B.D(A.cw,B.as(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A_.a_z,B.bn(w,B.az(A.bZ,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ccD(d){var w
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
cq_(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aaN
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c7(p.gaaI(),new C.dZr(p,w,d,m),o)
if(n===D.aaO)v=new B.BG(D.bKU,v,o)
n=p.ccD(n)
u=p.f?A.hA:A.a12
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.w,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.l(w)
r=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.w,o,o,B.l(w-3),o,o,A.n),o,o,o,o,A2.Hq,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a7(A.ay,A.aC,A.x,q,o,o),A.n),o,o,o,u,new B.Q(t,t,t,t),o,o,o),o)},
ba5(d){var w=Date.now(),v=A.o.D(this.a.d+A.h.bh(this.gBH()*0.4),0,100),u=d.b===D.aaN,t=u?34:20,s=u?28:18
return new B.D(new B.Q(t,12,s,2),B.cm(new C.dZx(new B.V(w,0,!1),v)),null)},
axm(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dtV,new B.a7(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.fD6,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dZk(this,d),v,v,v,v,v,v,!1,A.a4)},
c2P(d,e){return this.axm(d,e,!0)},
c2w(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aTw||o===D.AS,m=d.d,l=B.ap(m,A.w,0.55)
l.toString
m=B.ap(m,A.jX,0.5)
m.toString
m=B.a([l,A.dA,m],x.O)
l=q.ba5(d)
w=n?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.az(p,B.p(p,B.bv(B.l(23),B.b5(p,p,p,new C.aga(0,q.gBH(),p,p,p),A.h4),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.n),p,w,p,A.hZ,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dZi(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ik[s]
t.push(new B.cj(A.z,p,p,new B.dx(A.dM,A.z,A.f,q.c2P(r,n?58:54),p),p))}l=B.a([l,A.am,w,A.af,B.E(B.l4(0.92,t,v,8,12,A4.wF,p,!1),1)],u)
if(o!==D.aaO){o=A.c.j(0.16)
w=B.l(28)
l.push(B.p(p,B.cm(new C.dZj(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.n),p,p,p,D.bFc,H.aox,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a7(A.ay,A.aC,A.x,m,p,p),A.n),p,p,p,p,p,p,p,p)},
bFC(d,e){var w=this,v=null,u=w.O6(),t=w.ba5(d),s=B.E(w.aQ_(e),1),r=x.p,q=B.a([B.bS(0,B.az(v,B.p(v,B.as(B.d(F.ik[e].a,v,v,v,v,v,v,A.L_,v,v,v),v,v,v),A.f,A.w,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dZc(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.aZE(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.w,v,v,v,v,v,v,v,v,v,v)},
aT0(d,e){return B.c7(this.gaaI(),new C.dZh(this,e,d),null)},
bMf(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qt(t.aT0(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(q?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.p(s,B.bv(B.l(q?20:8),t.aT0(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a7(A.ay,A.aC,A.x,w,s,s),A.n),s,s,s,A.aor,new B.Q(8,8,8,r),s,s,s),s)}}
C.byC.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.L()
v=this.c
u=B.ap(v,A.w,0.6)
u.toString
t=B.ap(v,A.jX,0.4)
t.toString
w.san(new B.a7(A.ay,A.aC,A.x,B.a([u,A.dA,t],x.O),null,null).aD(0,new B.a4(0,0,p,o)))
d.aF(new B.a4(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.S,A.Q,A.V,A.X,A.U)
t.r=v.j(0.1).gp(0)
t.y=D.bKZ
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.aga.prototype={
a4(d,e){var w=this
return L.Mh(d,e,w.b,w.c,w.e,w.d)},
aE(d){return!0}}
C.aO4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bxo.prototype={}
C.a9O.prototype={
B(d){var w=null
return B.c6(B.eS(w,w,w,!0,!0,D.ajx,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.atc,w,w,w,new C.cnL(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hbI,w,w,w,1,w,!0),D.ajx,B.cw(B.a([D.eyH,B.cm(new C.cnM())],x.p),w,w,D.bGi,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XT.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHe(w,new B.au(A.aw,$.ax()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aHe.prototype={
Y(){this.a3()
this.mk()},
b7X(d){var w=this.d.length
return A.o.F(A.h.bh(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7X(v.f)
if(w!==v.x){v.x=w
E.mz("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eWo(v))
C.JQ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cew(){if(this.d.length<2)return
this.m(new C.eWk(this))},
b2f(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eWj(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcev(),p=s.d,o=B.E(B.az(r,B.b5(r,r,r,new C.byO(p,s.f,r),A.h4),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fL6,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aD3[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.az(r,B.p(r,B.d(p[v],r,r,r,r,r,r,D.fKj,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bf(t,t,t,t),r,r,A.n),r,r,r,A.f2,A.hn,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eWm(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lI(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bA(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kr,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eWn(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a7,r,A.ao,r,r,r,r),1),A.ae,new E.fD(A.i_,"Add",s.gcet(s),A.c,r),A.bn,new E.fD(A.nL,"Spin",q,A.be,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.byO.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.L()
w.r=D.bky.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.aa
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bW(g,f)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=D.aD3[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bW(g,f)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bt(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aA(p,0,11)+"\u2026"
n=new B.iF(new B.et(p,l,l,A.cN,l,l,l,l,l,l,D.fxj),A.a7,A.c1,new B.jo(1),l,l,l,l,A.c2,l,A.cx)
n.ep()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.aj8.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.aa
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bx())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.aa
h.c=2
h.r=A.b5.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.WF.prototype={
S(){return new C.bmK($,A.bC,0,B.a([],x.X),null,null)}}
C.bmK.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JQ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UU(900,new C.e5q())}w.m(new C.e5r())},
b2h(d){return this.m(new C.e5l(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.v(A.h.ar(m,60)),2,"0")
v=A.a.b0(A.o.v(A.o.F(A.h.cC(m),60)),2,"0")
m=B.b5(n,n,n,new C.btt(l,A.bY,n),A.aV0)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fC_,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fAX,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vP,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dqK[r]
u.push(new E.dZ(""+q+" min",o.d===q,new C.e5n(o,q),n,A.bY,n))}m=o.f
p=m?A6.v8:A.he
m=m?"Pause":"Start"
return E.lI(A.bY,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fD(p,m,new C.e5o(o),A.be,n),new E.fD(A.oJ,"Reset",new C.e5p(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.btt.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.J),r=e.a/2-14
$.S()
w=B.L()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bW(s,r)
v=B.L()
v.b=A.aa
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.h4(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aD(0,B.bW(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VQ.prototype={
S(){return new C.bmj($,A.bC,0,B.a([],x.X),null,null)}}
C.bmj.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.TH.h(0,p.d)
w.toString
v=A.d.f0(w,new C.dQH())
u=A.h.F(p.f,v)
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
E.mz("flute",D.cdE[t]+5,1400,0.35)}p.m(new C.dQI())},
gcez(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L8("Press Start",0.5)
w=D.TH.h(0,this.d)
w.toString
v=A.d.f0(w,new C.dQC())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L8("Breathe in",0.5+0.5*A.dH.az(0,p))
case 1:return new B.L8("Hold",1)
case 2:return new B.L8("Breathe out",1-0.5*A.dH.az(0,p))
default:return new B.L8("Hold",0.5)}}}return new B.L8("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcez(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fK.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.fK.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q2,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kr,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.TH.gew(D.TH));w.C();){v=w.gP(w)
o.push(new E.dZ(v,r.d===v,new C.dQF(r,v),q,A.fK,q))}w=r.e
v=w?A.zK:A.he
w=w?"Stop":"Start"
o.push(new E.fD(v,w,new C.dQG(r),A.be,q))
return E.lI(A.fK,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKG.prototype={}
C.Ww.prototype={
S(){return new C.bmB(new B.cx(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bmB.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.oR,s,s,s,new C.e1W(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.l(18),new B.e8(B.az(s,B.b5(s,s,s,new C.boD(t.e,t.x,s),A.h4),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e1X(t),new C.e1Y(t),s,s,s,s,s,s,s,s,s,new C.e1Z(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d5r[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G8(v,u,new C.e2_(t,v),!1,s))}u=t.r
return E.lI(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bS,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iZ(A.bE,""+A.h.U(u),"Brush",30,2,new C.e20(t),u),new E.fd(B.a([new E.dZ("Eraser",t.w,new C.e21(t),A.zv,A.bE,s),new E.fD(A.pD,"Undo",new C.e22(t),A.c,s),new E.fD(A.ej,"Clear",new C.e23(t),A.c,s),new E.fD(A.Q_,"Paper",new C.e24(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.boD.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.L()
w.r=this.c.gp(0)
d.aF(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dQ
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.aj,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.ce(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aE(d){return!0}}
C.Xf.prototype={
S(){var w=x.S
return new C.aGx(B.aR(w),B.aR(w))}}
C.aGx.prototype={
Y(){this.a3()
this.auH()},
auH(){var w,v,u=this,t=x.N,s=B.br(D.dw7,!0,t)
A.d.Dx(s)
w=x.S
v=B.U(s).c
t=B.C(B.cY(s,0,B.dD(u.d,"count",w),v),t)
A.d.u(t,B.cY(s,0,B.dD(u.d,"count",w),v))
A.d.Dx(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
ceu(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mz("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.esT(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.n_,new C.esU(s,v,u),t)
else{s.x=!0
B.bO(Ad.H6,new C.esV(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Wh,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.z2,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.j_,A.i,0,q,q),q),B.E(B.iA(!0,q,q,A.y,new B.hN(v,8,8,1,q),new C.esZ(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d72[t]
o.push(new E.dZ(s.b,r.d===s.a,new C.et_(r,s),q,A.aH,q))}o.push(new E.fD(I.arF,"New game",new C.et0(r),A.be,q))
return E.lI(A.aH,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xp.prototype={
S(){return new C.aGS(B.a([],x.t))}}
C.aGS.prototype={
cey(d){A.d.a8(this.d)
this.w=!0
this.b2g()},
b2g(){this.d.push(A.cT.aw(4))
this.e=0
this.a0h()},
a0h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eDF(t))
s=x.H
w=3
return B.b(B.bO(A.lM,null,s),$async$a0h)
case 3:r=t.d,q=B.br(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVZ(n)
w=7
return B.b(B.bO(new B.be(1000*Math.max(280,600-r.length*18)),null,s),$async$a0h)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eDG(t))
case 1:return B.h(u,v)}})
return B.i($async$a0h,v)},
aVZ(d){this.m(new C.eDD(this,d))
E.mz("marimba",D.cdD[d]+5,450,0.55)
B.bO(A.H4,new C.eDE(this),x.H)},
ceA(d){var w,v,u=this
if(!u.w||u.r)return
u.aVZ(d)
w=u.d
v=u.e
if(w[v]!==d){G.dA(90,"",600,0,0.5,"saw")
u.m(new C.eDH(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eDI(u))
B.bO(A.hO,new C.eDJ(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,U.aXD,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fLx,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBU[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aBU[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cU(p,p,p,p,A.b0,new B.o(u,p,new B.bH(r,r,r,r),new B.bf(t,t,t,t),s,p,A.n),A.jq,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDK(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.db,new B.fH(1,B.l4(1,l,2,12,12,p,A.e0,!1),p)],m),A.l,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lI(A.bt,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fD(A.he,n,q.gcex(q),A.be,p)],m),p,p))}}
C.XK.prototype={
S(){return new C.bnR(new B.au(A.aw,$.ax()))}}
C.bnR.prototype={
ayg(d){return B.ox(A.h.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eRK(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cX(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eRT()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bA(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A8.ya),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b6B),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lY,"Bill amount",!0,!0,!1,m,m,m,m,D.fIO,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.eb,m,m,m,1,m,m,!1,"\u2022",m,new C.eRP(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aWC,!0,A.a7,m,A.ao,m,m,m,m)
k=A.be.j(0.1)
s=B.l(20)
r=B.K(A.be.j(0.35),A.r,1)
q=x.p
s=B.cw(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.h.U(n.e)+"%)","$"+n.ayg(w)),t.$2("Total","$"+n.ayg(v)),A5.Oe,t.$3$big("Each of "+n.f+" pays","$"+n.ayg(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bT,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cS5[p]
r.push(new E.dZ(""+o+"%",A.h.U(n.e)===o,new C.eRQ(n,o),m,A.be,m))}l=n.f
return E.lI(A.be,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iZ(A.aH,""+l,"People",20,1,new C.eRR(n),l),new E.fd(B.a([new E.dZ("Round up",n.r,new C.eRS(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.Xe.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bnl(w,A.cT,$,A.bC,0,B.a([],x.X),null,null)}}
C.bnl.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.h.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.XM("snare",0,0.5)}u.m(new C.ery())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h4()
u.w=t
u.x=t?0:3.141592653589793
E.mz("bell",24,400,0.5)}u.m(new C.erz())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bga(v,o.r>0,n))}u=B.az(n,B.as(B.c_(A.fU,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.err(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d6,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e4(A.z,B.p(A.z,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fHX,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eG7,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ers(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fwN,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kr,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ert(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dnU[r]
v.push(new E.dZ(q.b,o.d===q.a,new C.eru(o,q),q.c,A.bh,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iZ(A.bh,""+s,"Dice",4,1,new C.erv(o),s))}if(o.d==="num"){s=o.z
s=E.iZ(A.bh,""+s,"From",100,1,new C.erw(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iZ(A.bh,""+p,"To",1000,2,new C.erx(o),p)],m))}return E.lI(A.bh,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bga.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cT.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dIC.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.p(p,p,A.f,p,p,A.Yk,p,18,p,p,p,p,p,18),p))
return B.eK(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bH,p,p,100),p)}}
C.aNR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAw.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzB()}}
C.aOb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAC.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzX()}}
C.aOE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAL.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAq()}}
C.aP4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAU.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAR()}}
var z=a.updateTypes(["R(u3)","~()","R(a5Q)","aB<~>()","R(D9)","G(u3,G)","F(F,u3)","R(D5)","R(a_O)","R(acX)","R(a4H)","R(nQ)","XL()","VP()","a9O()","Xk()","Xz()","Xl()","R(n1)","VW()","agt(Z,G)","afk(Z,G)","~(a9<@,@>)","G(D5,D5)","n(ek)","R(agh)","R(a21)","R(Dk)","R(adr)","R(afn)","R(ada)","G(G,rh)","G(G,D9)","n(rh)","~(rh,ai<n>,G)","rh?(D9)","Xe()","v(n,a1P)","R(abQ)","~(B7)","XO()","~(xI,n,r,t,F)","~(n,u3)","Wx()","WZ(Z)","Ol(Z)","Wg(Z,bu<F>,bu<F>)","J3(Z)","XT()","WF()","VQ()","Ww()","Xf()","Xp()","XK()","R(rh)"])
C.fMv.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fB8.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fIS.prototype={
$1(d){var w
if(!this.a.Mv(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fIT.prototype={
$1(d){return d.x},
$S:z+0}
C.fMs.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fMt.prototype={
$1(d){var w
if(!this.a.Mv(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fMu.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ekE.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekF.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ekG.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd6(v).Q
v.toString
w.mv(v,A.e6,A.ie)}},
$S:8}
C.ekR.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ekS.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ekN.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ekL.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dw(0,0,0,d,0,0),new C.ekM(w,this.b,e)))},
$S:1926}
C.ekM.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ekO.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXh().alB(0,u[1],u[2],u[3])
u[4].bO(0,new C.ekJ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dA(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ekK(w.a,v,w.f,w.r))},
$S:0}
C.ekJ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:194}
C.ekK.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.h.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ekP.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXh().amq(t,u[1],s,u[3])
G.dA(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ekI(w.a,v,w.e,w.f))},
$S:0}
C.ekI.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.h.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ekQ.prototype={
$0(){G.dA(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ekH(w,this.b))},
$S:0}
C.ekH.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ekV.prototype={
$0(){var w=this.a
return w.m(new C.ekU(w))},
$S:0}
C.ekU.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ekW.prototype={
$0(){var w=this.a
return w.m(new C.ekT(w))},
$S:0}
C.ekT.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ekX.prototype={
$0(){var w=this.a
w.f.sb4(0,this.b)
w.Q2()},
$S:0}
C.ekY.prototype={
$0(){return this.a.Zo(this.b)},
$S:0}
C.ekZ.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Q2():w.aYZ()},
$S:2}
C.el_.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Q2():w.aYZ()},
$S:0}
C.ezZ.prototype={
$2(d,e){return d+e},
$S:1927}
C.eAi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eAh(w,d))},
$S:1928}
C.eAh.prototype={
$0(){var w=B.aJ(J.u(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eAj.prototype={
$0(){},
$S:0}
C.eAk.prototype={
$0(){},
$S:0}
C.eA0.prototype={
$0(){return this.a.m(new C.eA_(this.b,this.c))},
$S:0}
C.eA_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ezQ.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.ezR.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.ezS.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.ezT.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.ezU.prototype={
$1(d){return this.a.db===d},
$S:33}
C.ezV.prototype={
$1(d){return this.a.db=d},
$S:32}
C.ezW.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.ezX.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:32}
C.ezY.prototype={
$0(){var w=this.a
return w.m(w.gayS())},
$S:0}
C.ezO.prototype={
$1(d){return this.a.$1(!0)},
$S:73}
C.ezP.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.ezN.prototype={
$1(d){return this.a.$1(!1)},
$S:147}
C.eAb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b5(p,p,p,new C.bk3(o,p),n)
w=this.b
v=C.bD8("WORLD",w.a,w.c)
u=C.bD8("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.U(t*100)
t=t<0.25?A.bY:A.be
t=C.bD8("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.U(s*100)
s=s>D.DY[o.db].d?A.bY:A.c
q=x.p
s=B.a([v,u,t,C.bD8("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bD8("HEIGHT",""+A.h.U(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.j_,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bIE(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tw[w].a+".":"You landed on every world!"
v=B.a([new E.fD(A.nN,"Again",new C.eA6(o),A.c,p),new E.fD(A.oE,"Rebuild",new C.eA7(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fD(A.jt,"Next world",new C.eA8(o),A.be,p))
n.push(C.hCg("Perfect landing!",w,A.be,v))}if(o.as==="crashed")n.push(C.hCg("Crash!",o.at,A.bY,B.a([new E.fD(A.nN,"Try again",new C.eA9(o),A.be,p),new E.fD(A.oE,"Rebuild",new C.eAa(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:65}
C.eA6.prototype={
$0(){var w=this.a
return w.m(w.gayS())},
$S:0}
C.eA7.prototype={
$0(){var w=this.a
return w.m(new C.eA3(w))},
$S:0}
C.eA3.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eA8.prototype={
$0(){var w=this.a
return w.m(new C.eA2(w))},
$S:0}
C.eA2.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eA9.prototype={
$0(){var w=this.a
return w.m(w.gayS())},
$S:0}
C.eAa.prototype={
$0(){var w=this.a
return w.m(new C.eA1(w))},
$S:0}
C.eA1.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eAc.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eA5(v,w))},
$S:0}
C.eA5.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eAd.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eAe.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eAf.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eAg.prototype={
$0(){var w=this.a
return w.m(new C.eA4(w))},
$S:0}
C.eA4.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dQA.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iz(B.a([C.hxj(),C.hxk()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kX(0,B.cP(J.u(r,1)))
q.m(new C.dQz(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:48}
C.dQz.prototype={
$0(){return this.a.d=x.m.a(J.u(this.b,0))},
$S:0}
C.dQa.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dQb.prototype={
$0(){return this.a.c_A(B.aV(J.u(this.b,"group")))},
$S:0}
C.dQc.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dQd.prototype={
$1(d){return A.a.b0(A.o.ft(A.o.D(A.h.U(d*255),0,255),16),2,"0")},
$S:344}
C.dQB.prototype={
$0(){return E.XM("kick",0,0.25)},
$S:0}
C.dQe.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dQf.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQg.prototype={
$0(){return E.XM("kick",0,0.5)},
$S:0}
C.dQh.prototype={
$0(){return G.dA(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dQj.prototype={
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
u=w}if(u.cy!=null&&!A.d.aU(u.d.e,new C.dQi(u)))u.cy=null
u.id=0},
$S:0}
C.dQi.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAH(d)},
$S:z+10}
C.dQ7.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dQ8.prototype={
$0(){var w=this.a
return w.m(w.gcah())},
$S:0}
C.dQ9.prototype={
$0(){return this.a.aeZ(null)},
$S:0}
C.dQq.prototype={
$0(){var w=this.a.as
return w==null?null:w.f9(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dQr.prototype={
$0(){return this.a.cH5(this.b.a)},
$S:0}
C.dQs.prototype={
$0(){return this.a.aeZ(this.b)},
$S:0}
C.dQt.prototype={
$1(d){var w=this.a
return w.m(new C.dQp(w,d))},
$S:6}
C.dQp.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dQu.prototype={
$0(){var w=this.a
return w.m(new C.dQo(w,this.b))},
$S:0}
C.dQo.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dQv.prototype={
$0(){var w=this.a
return w.m(new C.dQn(w))},
$S:0}
C.dQn.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dQw.prototype={
$0(){var w=this.a
return w.m(new C.dQm(w))},
$S:0}
C.dQm.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f9(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Ml},
$S:0}
C.dQx.prototype={
$0(){var w=this.a
return w.m(new C.dQl(w))},
$S:0}
C.dQl.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0N()
else w.p3=null},
$S:0}
C.dQy.prototype={
$0(){var w=this.a
return w.m(new C.dQk(w))},
$S:0}
C.dQk.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c7B.prototype={
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
$S:302}
C.c7C.prototype={
$1(d){var w=new B.qz([],[]).o4(d.data,!0)
if(x.f.b(w)&&J.u(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:413}
C.fug.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:229}
C.fuh.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:229}
C.fui.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:229}
C.fup.prototype={
$1(d){return!J.u(d,0)},
$S:229}
C.fuq.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:229}
C.fur.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:229}
C.dSf.prototype={
$1(d){return this.a.avw(0)},
$S:8}
C.dRU.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ikr(),B.U(w).k("N<1,G>")).fL(0)},
$S:0}
C.dRX.prototype={
$1(d){return""+d},
$S:77}
C.dSg.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dRS.prototype={
$1(d){return this.a.avw(this.b)},
$S:8}
C.dRT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.azn(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.ml(0.15,0.3))
u=a1.mU(0,d,a1.ml(0.15,0.62))
t=a1.mU(0,"and",a1.ml(0.48,0.46))
s=a1.mU(0,a0,a1.ml(0.82,0.46))
a1=t.a
w.push(new C.nQ(v.a,a1,0))
w.push(new C.nQ(u.a,a1,1))
w.push(new C.nQ(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.ml(0.12,0.25))
u=a1.mU(0,d,a1.ml(0.12,0.65))
r=a1.mU(0,"xor",a1.ml(0.46,0.25))
q=a1.mU(0,"and",a1.ml(0.46,0.65))
p=a1.azm(0,a0,a1.ml(0.82,0.25),0)
o=a1.azm(0,a0,a1.ml(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nQ(a1,n,0))
m=u.a
w.push(new C.nQ(m,n,1))
l=q.a
w.push(new C.nQ(a1,l,0))
w.push(new C.nQ(m,l,1))
w.push(new C.nQ(n,p.a,0))
w.push(new C.nQ(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.ml(0.15,0.4))
j=a1.mU(0,"not",a1.ml(0.45,0.65))
s=a1.mU(0,a0,a1.ml(0.82,0.3))
i=a1.mU(0,"buzzer",a1.ml(0.82,0.65))
a1=k.a
w.push(new C.nQ(a1,s.a,0))
n=j.a
w.push(new C.nQ(a1,n,0))
w.push(new C.nQ(n,i.a,0))
break
default:h=a1.mU(0,d,a1.ml(0.12,0.25))
g=a1.mU(0,d,a1.ml(0.12,0.7))
f=a1.mU(0,"nor",a1.ml(0.5,0.25))
e=a1.mU(0,"nor",a1.ml(0.5,0.7))
s=a1.mU(0,a0,a1.ml(0.86,0.25))
a1=f.a
w.push(new C.nQ(g.a,a1,0))
n=e.a
w.push(new C.nQ(n,a1,1))
w.push(new C.nQ(h.a,n,0))
w.push(new C.nQ(a1,n,1))
w.push(new C.nQ(a1,s.a,0))}},
$S:0}
C.dRY.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.azn(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D5(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.ml(0.86,0.5))},
$S:0}
C.dRN.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dRO.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dRP.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dRQ.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dRR.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aei(this.c)
if(v.ax)C.JQ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dA(140,"",250,0,0.3,"square")}},
$S:0}
C.dRZ.prototype={
$0(){},
$S:0}
C.dS_.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dS0.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dRW.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dRV(v))
w.cy=null},
$S:0}
C.dRV.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dRM.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dS9.prototype={
$0(){var w=this.a
return w.m(new C.dS8(w))},
$S:0}
C.dS8.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dSa.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.bZ,B.ji(B.b5(w,w,w,new C.be3(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dS3(v),w,w,w,new C.dS4(v),new C.dS5(v),new C.dS6(v),w,w,w,w,w,w,w,w,w,w,new C.dS7(v),w,w,w,!1,A.a4)},
$S:37}
C.dS7.prototype={
$1(d){return this.a.cc4(d.b)},
$S:60}
C.dS5.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.clh(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAd(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:50}
C.dS6.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dS4.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c35(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dS1(w))
u=t.as
u.toString
v.push(new C.nQ(u,w.a,w.b))
B.k0()}}t.z=t.as=null},
$S:36}
C.dS1.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dS3.prototype={
$1(d){return this.a.ay9(d.b)},
$S:330}
C.dSb.prototype={
$0(){return this.a.bEs(this.b.a)},
$S:0}
C.dSc.prototype={
$0(){return this.a.avw(this.b.a)},
$S:0}
C.dSd.prototype={
$0(){var w=this.a
return w.m(new C.dS2(w))},
$S:0}
C.dS2.prototype={
$0(){var w=this.a
w.azn(0)
w.ay=null},
$S:0}
C.dSe.prototype={
$0(){return this.a.cCG(this.b)},
$S:0}
C.cX7.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dJ,A.c2)
u.ep()
return u},
$S:251}
C.dYr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYq.prototype={
$0(){return this.a.d=null},
$S:0}
C.dYt.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c51()},
$S:124}
C.dYs.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.fuH.prototype={
$0(){return I.aMF},
$S:z+40}
C.fuI.prototype={
$0(){return D.dVL},
$S:z+43}
C.fuJ.prototype={
$0(){return D.dSC},
$S:z+13}
C.fuK.prototype={
$0(){return D.ems},
$S:z+14}
C.fuL.prototype={
$0(){return D.e4l},
$S:z+15}
C.fuM.prototype={
$0(){return I.aMw},
$S:z+16}
C.fuN.prototype={
$0(){return D.eke},
$S:z+17}
C.fuO.prototype={
$0(){return I.aME},
$S:z+12}
C.fuP.prototype={
$0(){return D.dUT},
$S:z+19}
C.fa6.prototype={
$2(d,e){return new C.agt(e,$.bHI()[e],new C.fa5(e,this.a),null)},
$S:z+20}
C.fa5.prototype={
$0(){var w=this.a,v=K.aKa.h(0,$.bHI()[w].a)
$.au0=v==null?"music":v
B.a6(this.b,!1).ce(B.ef(new C.fa3(w),!1,null,x.H))},
$S:0}
C.fa3.prototype={
$1(d){return $.bHI()[this.a].e.$0()},
$S:39}
C.fa7.prototype={
$2(d,e){return new C.afk(e,D.aCz[e],new C.fa4(this.a,e),null)},
$S:z+21}
C.fa4.prototype={
$0(){return this.a.d.$1(D.aCz[this.b])},
$S:0}
C.f9N.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f9M.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9L.prototype={
$1(d){var w=this
return new B.e3(new C.f9K(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f9K.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.fTb,A.ax,D.h_0,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fIg,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bz(1,A.bd,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e9(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.Fg,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bf(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bd,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e9(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.Fg,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bf(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dDD[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bw
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.p(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bH(e,e,e,e),new B.bf(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.f2,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f9I(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c8(A.aM,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.P,new B.a5(a0,44,B.cw(m,a0,a0,a0,a0,a0,A.aM,!1),a0),A.aB],w))}v.push(B.bJ(A.Bc,a0,new C.f9J(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bn(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cw(v,a0,a0,A3.z3,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:105}
C.f9I.prototype={
$0(){var w=this
return w.a.$1(new C.f9H(w.b,w.c,w.d))},
$S:0}
C.f9H.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f9J.prototype={
$0(){var w=this,v=w.a
v.m(new C.f9G(v,w.b,w.c,w.d))
B.a6(w.e,!1).N(null)},
$S:0}
C.f9G.prototype={
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
C.f9V.prototype={
$0(){var w=this.a
return w.m(new C.f9U(w))},
$S:0}
C.f9U.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f9W.prototype={
$0(){return E.uK(this.b,this.a.f,"scene")},
$S:0}
C.f9X.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_Q().x
w===$&&B.c()
return new B.bN(new B.o(v,v,v,v,v,new B.bT(D.b44,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c6],x.O),v,v),A.n),A.bk,v,v)},
$S:298}
C.f9Y.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dx(A.dM,A.z,A.f,B.c7(new B.hf(B.a([u.guM(),u.ga_Q()],x.dS)),new C.f9T(u,this.b,v),w),w),w,w,w)},
$S:222}
C.f9T.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guM().x
r===$&&B.c()
w=r<0.9?1:1-C.buq(r,0.9,0.98)
v=s.ga_Q().x
v===$&&B.c()
u=A.dH.az(0,v)
switch(s.gazo().a){case 0:s=s.bDD(t.b,r,u,t.c)
break
case 1:s=s.bUD(t.b,r,u,t.c)
break
case 2:s=s.cHz(t.b,r,u,t.c)
break
case 3:s=s.bGz(t.b,r,u,t.c)
break
case 4:s=s.bJW(t.b,r,u,t.c)
break
case 5:s=s.cc5(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:188}
C.f9Z.prototype={
$2(d,e){var w=B.abD(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cQx(u,A.bw,v,3.5)
u=this.a
w=u.guM().x
w===$&&B.c()
return B.Za(B.l5(null,null,null,1,0,new C.f9S(u),A.h.D(w,0,1)),v)},
$S:1930}
C.f9S.prototype={
$1(d){var w=this.a
w.guM().sp(0,d)
if(w.as)w.m(new C.f9O(w))},
$S:6}
C.f9O.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fa_.prototype={
$0(){var w=this.a
w.guM().sp(0,0)
w.afp()},
$S:0}
C.fa0.prototype={
$1(d){var w=this.a
w.m(new C.f9R(w,d))
if(w.as)w.afp()},
$S:6}
C.f9R.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fa1.prototype={
$0(){var w=this.a
w.m(new C.f9Q(w,this.b))
w.guM().sp(0,0)
if(w.as)w.afp()},
$S:0}
C.f9Q.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fa2.prototype={
$0(){var w=this.a
return w.m(new C.f9P(w,this.b))},
$S:0}
C.f9P.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f9E.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1931}
C.f9F.prototype={
$1(d){return d.b},
$S:1932}
C.dsm.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dsn.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dsj.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dsk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dsl.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dso.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dsp.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dsq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dsr.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dss.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dst.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dsu.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dsv.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dsw.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ezj.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ez8.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eza.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ezb.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eze.prototype={
$1(d){var w=D.n8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ezf.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ed(new B.cM(new B.Y(q,new C.ezg(d),p.k("Y<1>")),new C.ezh(r),p.k("cM<1,rh?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ezg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezh.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ezc.prototype={
$1(d){return D.n8.h(0,d.b).c===D.y4},
$S:z+55}
C.ezd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezJ.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vO(0,u)
w.a7J(A.o.ar(v,1000))},
$S:8}
C.ezi.prototype={
$0(){},
$S:0}
C.ez4.prototype={
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
C.ezl.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.P,B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n8.h(0,v).b,D.n8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.haE,w,B.d(D.n8.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,Y.atg,w,w,w,w,new C.ezk(d),!1,w,w,w,w,w,w,w,D.h1T,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.ezk.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ezn.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.eyv],x.p)
for(w=0;w<6;++w){v=D.aCY[w]
u=B.d(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dJ(!1,t,t,t,!0,t,t,t,!0,t,t,D.c5D,t,t,t,t,new C.ezm(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lY,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cw(r,t,t,D.bK4,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.ezm.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.ez7.prototype={
$1(d){var w=null
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.ez5(d),w,w),B.bP(!1,A.Fk,w,w,!0,w,w,w,new C.ez6(d),w,w)],x.p),w,w,K.md,D.h_d,w,w,w,w,D.h2b,w)},
$S:18}
C.ez5.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ez6.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ezH.prototype={
$0(){var w=this.a
return w.m(new C.ezG(w))},
$S:0}
C.ezG.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ezI.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nt(new C.ezx(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bf1:t
v=B.a([B.b5(u,t,t,new C.bk1(w,v,new C.ezy(r),new C.ezz(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dt(!0,B.c7(w,new C.ezA(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bLB())
return B.az(A.bZ,B.ji(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ezB(r),t,r.gcmC(),t,new C.ezC(r),new C.ezD(r),new C.ezE(r),t,t,t,t,t,t,t,t,t,t,new C.ezF(r),t,t,t,!1,A.a4)},
$S:37}
C.ezx.prototype={
$0(){return this.a.adl(this.b)},
$S:0}
C.ezF.prototype={
$1(d){return this.a.cFe(d.b)},
$S:60}
C.ezD.prototype={
$1(d){return this.a.cmD(d.b)},
$S:50}
C.ezE.prototype={
$1(d){return this.a.cmE(d.b)},
$S:19}
C.ezC.prototype={
$1(d){return this.a.b4n()},
$S:36}
C.ezB.prototype={
$1(d){return this.a.ae2(d.b)},
$S:330}
C.ezy.prototype={
$0(){return this.a.z},
$S:769}
C.ezz.prototype={
$0(){return this.a.Q},
$S:757}
C.ezA.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPV()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.bw,A.r,1)
t=B.a([D.fXA,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aXz,q,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.N,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hn,q,q,q)},
$S:68}
C.ez9.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ae.Wc,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,F.aco,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1934}
C.ezt.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.ezu.prototype={
$0(){var w=this.a
return w.m(new C.ezs(w))},
$S:0}
C.ezs.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ezv.prototype={
$0(){var w=this.a
return w.m(new C.ezr(w))},
$S:0}
C.ezr.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ezw.prototype={
$0(){var w=this.a
return w.m(new C.ezq(w))},
$S:0}
C.ezq.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ezp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n8.gdP(D.n8),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.czZ(p[r]))
return new B.D(S.amx,B.x(B.a([new B.D(An.aog,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ezo.prototype={
$0(){return this.a.ccb(this.b)},
$S:0}
C.dsi.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dJ,A.c2)
u.ep()
return u},
$S:251}
C.bQP.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bR_.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQV.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bR0.prototype={
$1(d){return this.a.Mv(d)&&!d.x},
$S:z+0}
C.bR1.prototype={
$2(d,e){return Math.max(d,this.a.aD3(e))},
$S:z+6}
C.bR3.prototype={
$2(d,e){var w=this.a
return w.c1(0,d.a+"."+e,new C.bR4(w))},
$S:z+5}
C.bR4.prototype={
$0(){return this.a.a},
$S:88}
C.bR2.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bR5.prototype={
$2(d,e){var w=this.a
return w.c1(0,this.b.$1(this.c.$2(d,e)),new C.bR6(w))},
$S:z+5}
C.bR6.prototype={
$0(){return this.a.a},
$S:88}
C.bQR.prototype={
$2(d,e){var w=this.a
return w.c1(0,d.a+"."+e,new C.bQS(w))},
$S:z+5}
C.bQS.prototype={
$0(){return this.a.a},
$S:88}
C.bQQ.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bQT.prototype={
$2(d,e){var w=this.a
return w.c1(0,this.b.$1(this.c.$2(d,e)),new C.bQU(w))},
$S:z+5}
C.bQU.prototype={
$0(){return this.a.a},
$S:88}
C.bQO.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bR7.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQW.prototype={
$1(d){return d!==this.b&&this.a.aJq(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQZ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQY.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQX.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bLa.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bLb.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cuT.prototype={
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
$S:194}
C.fYD.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:1935}
C.fYF.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1936}
C.fYG.prototype={
$5(d,e,f,g,h){return B.by(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1937}
C.fYE.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.san(new B.a7(A.aY,A.b3,A.x,B.a([e,f],x.O),null,null).aD(0,d))
return w},
$S:1938}
C.bKO.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKP.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKN(w))},
$S:0}
C.bKN.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKQ.prototype={
$0(){return B.a([],x.l)},
$S:1939}
C.bKR.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:442}
C.bKS.prototype={
$0(){var w,v,u
J.bHT(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rw(v))if(C.hi8(v.b))w.b3R(v)
else w.a0V(v)
else{u=w.a.c.bgN(v)
w.afB(u==null?"The "+$.qL().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKM.prototype={
$1(d){return new B.e3(new C.bKJ(this.a,this.b),null)},
$S:20}
C.bKJ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bKK(this.a,o,a3),m=$.qL(),l=o.b,k=m.h(0,l).d,j=A.h.U(o.ch/1.04),i=new C.bKL(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q1,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fXo],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.p(p,B.d(""+A.h.U(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.lO,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dq,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.av],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.p(p,B.as(B.cU(p,B.as(new B.dx(A.dC,A.z,A.f,new B.D(A.hA,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mE,p,p,p),p),p),p,p,p),p,p,A.b0,new B.o(p,p,q,s,f,new B.a7(A.ay,A.aC,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.X(A.arx,k,p,p,p,30),p,p,p,new C.bKF(n,o),p,p,p,p,p,p)
t=B.abD(a2).bgg(k,A.bw,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Za(B.l5(p,p,p,5.2,1,n,A.h.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a3i,k,p,p,p,30),p,p,p,new C.bKG(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.ht,p,p,p),1),B.bP(!1,A1.aYB,p,p,!0,p,p,p,new C.bKH(a2),p,B.fs(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tb,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cd1,A.n),p,p,p,A.yV,D.bGB,p,p,p),!0,!1,A.ag,!0,!0)},
$S:86}
C.bKK.prototype={
$1(d){var w=this.a
w.m(new C.bKD(this.b,d))
this.c.$1(new C.bKE())
w.a.toString},
$S:6}
C.bKD.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bKE.prototype={
$0(){},
$S:0}
C.bKL.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bw
r=B.K(r,A.r,u?2:1)
return B.E(B.az(v,B.cU(v,B.as(new B.dx(A.dM,A.z,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.o(t,v,r,s,v,v,A.n),A.ha,v,v,v,A.j9,A.qH,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bKI(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:750}
C.bKI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKF.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bKG.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bKH.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.bL7.prototype={
$2(d,e){var w
if(d==="short"){G.dA(1800,"",120,0,0.55,"noise")
G.dA(200,"",160,2.2,0.4,"saw")
B.fO()
w=this.a
if(w.c!=null)w.afB("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dA(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afB("\u26a0 Overloaded! The "+$.qL().h(0,e.b).b+" can only give about "+A.h.ad(w.a.c.An(e),2)+" amps but your gadgets are asking for "+A.h.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afB("Burnt out! "+e.ay)
G.dA(140,"",320,0,0.6,"noise")
G.dA(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bL8.prototype={
$0(){},
$S:0}
C.bKd.prototype={
$0(){},
$S:0}
C.bL9.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bL6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.az(A.bZ,B.b5(p,p,p,new C.akp(w,v,u,t,s,r==null?A.jw:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bL0(o),new C.bL1(o),new C.bL2(o),p,p,p,p,p,p,p,p,p,p,new C.bL3(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bej)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cP,A.r,1)
n.push(B.ao(p,B.az(p,B.p(p,B.A(B.a([D.fNs,B.E(B.d(w,p,p,p,p,p,p,D.fF3,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bkr,p,u,v,p,p,A.n),p,p,p,p,A.nH,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bL4(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bMj,new E.fD(A.Dc,"Cut wire",new C.bL5(o),A.bY,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.l(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.YT,p,B.K(A.bw,A.r,1),w,p,p,A.n),p,p,p,p,F.an0,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cnb(w),p,p,10,10,p,p))}}return B.ji(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:318}
C.bL1.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.baX(s)
if(r!=null){t.m(new C.bKZ(t,r,d))
return}w=t.b4x(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bL_(t,w))}},
$S:50}
C.bKZ.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bL_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bL2.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bKX(w,d))
else if(w.Q!=null)w.m(new C.bKY(w,d.b.a5(0,w.as)))},
$S:19}
C.bKX.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bKY.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bL0.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.baX(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.amq(u.a,u.b,v.a,v.b)!=null)G.dA(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afz()},
$S:36}
C.bL3.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b4x(u)
if(t!=null){v.m(new C.bKU(v,t))
if(D.mv.am(0,t.b))v.cxR(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bB(v.w).a<38e4){v.m(new C.bKV(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bKW(v,v.cKK(u)))},
$S:60}
C.bKU.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dA(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dA(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKV.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bKW.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bL4.prototype={
$0(){var w=this.a
return w.m(new C.bKT(w))},
$S:0}
C.bKT.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bL5.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dA(300,"",50,0,0.35,"noise")
w.afz()},
$S:0}
C.bKe.prototype={
$0(){return this.a.btf(this.b)},
$S:0}
C.bKA.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fz5,w,w,w),B.E(B.l5(this.b.d,w,w,g,h,new C.bKC(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1940}
C.bKC.prototype={
$1(d){var w=this.a
w.m(new C.bKB(this.b,d))
w.a.toString},
$S:6}
C.bKB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKz.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.acd,w,w,w),B.d(e,w,w,w,w,w,w,D.fBT,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.wC,w,w,w),1)},
$S:118}
C.bKl.prototype={
$0(){var w=this.a
return w.m(new C.bKk(w))},
$S:0}
C.bKk.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bKm.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dA(260,"",70,0,0.35,"noise")
w.afz()},
$S:0}
C.bKn.prototype={
$0(){var w=this.a
return w.m(new C.bKj(w))},
$S:0}
C.bKj.prototype={
$0(){return this.a.e=null},
$S:0}
C.bKr.prototype={
$0(){this.a.m(new C.bKi(this.b,this.c))
G.dA(900,"",40,0,0.3,"noise")},
$S:0}
C.bKi.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bKs.prototype={
$0(){return this.a.b3R(this.b)},
$S:0}
C.bKt.prototype={
$0(){return this.a.a0V(this.b)},
$S:0}
C.bKu.prototype={
$0(){return this.a.a2y(this.b)},
$S:0}
C.bKv.prototype={
$0(){var w=this.a
w.m(new C.bKh(this.b,this.c))
w.a.toString},
$S:0}
C.bKh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bKw.prototype={
$0(){var w=this.a
w.m(new C.bKg(this.b,this.c))
w.a.toString},
$S:0}
C.bKg.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bKx.prototype={
$0(){var w=this.a
w.m(new C.bKf(this.b,this.c))
w.a.toString},
$S:0}
C.bKf.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bKy.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKo.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKp.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKq.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fus.prototype={
$1(d){return d.aJ1("bulb")},
$S:z+2}
C.fut.prototype={
$1(d){return d.qi(0,"switch")&&d.aJ1("bulb")},
$S:z+2}
C.fuu.prototype={
$1(d){return A.d.aU(d.a,new C.fuf())},
$S:z+2}
C.fuf.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fuv.prototype={
$1(d){return d.qi(0,"resistor")&&A.d.aU(d.a,new C.fue())},
$S:z+2}
C.fue.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fuw.prototype={
$1(d){return!d.qi(0,"battery")&&d.aJ1("bulb")},
$S:z+2}
C.fuj.prototype={
$1(d){return A.d.aU(d.a,new C.fud())},
$S:z+2}
C.fud.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fuk.prototype={
$1(d){return A.d.aU(d.a,new C.fuc())},
$S:z+2}
C.fuc.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ful.prototype={
$1(d){return A.d.aU(d.a,new C.fub())},
$S:z+2}
C.fub.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fum.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.fu9())&&A.d.aU(w,new C.fua())&&d.qi(0,"buck")},
$S:z+2}
C.fu9.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fua.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fun.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.fu7())&&A.d.aU(w,new C.fu8())},
$S:z+2}
C.fu7.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fu8.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fuo.prototype={
$1(d){return A.d.aU(d.a,new C.fu6())},
$S:z+2}
C.fu6.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e2r.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e2A.prototype={
$1(d){var w=this.a.d
return w.aJq(d)&&w.rw(d)},
$S:z+0}
C.e2B.prototype={
$1(d){return d.x},
$S:z+0}
C.e2C.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e2D.prototype={
$0(){},
$S:0}
C.e2q.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.h4c,A.ax,D.fPi,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.SA[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bw,1,A.r,-1)
n.push(B.az(q,B.p(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iH,q,q,q),A.bF,B.d(u.b,q,3,A.a2,q,q,q,D.fFO,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bH(r,r,r,r),new B.bf(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e2p(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eI(q,F.mW,new B.D(A.bT,new B.a5(340,q,B.cw(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d7,q,new B.ba(p,A.a1),q)},
$S:46}
C.e2p.prototype={
$0(){B.a6(this.b,!1).N(null)
var w=this.a
w.m(new C.e2o(w,this.c))
G.dA(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e2o.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blV()},
$S:0}
C.e2m.prototype={
$1(d){return new C.WZ(this.a.d,null)},
$S:z+44}
C.e2n.prototype={
$0(){},
$S:0}
C.e2z.prototype={
$1(d){return new B.e3(new C.e2y(this.a),null)},
$S:20}
C.e2y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajs(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.be:A.aH
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.h1m,A.b4,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.P,B.bv(B.l(4),B.kw(A.bw,m,m,5,m,w.a/11,new B.lS(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fSx)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.L8,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.Lj,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.ax,q,new B.bL(A.a9,m,m,B.bP(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e2w(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.acn,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.az(m,B.p(m,new B.c8(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.as,new B.bz(1,A.bd,B.d(r.a,m,m,m,m,m,m,new B.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bH(n,n,n,n),new B.bf(t,t,t,t),m,m,A.n),m,m,m,A.eP,A.nH,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e2x(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cw(u,m,m,A3.z3,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:86}
C.e2w.prototype={
$0(){var w=this.a
w.m(new C.e2u(w))
this.b.$1(new C.e2v())
w.FB()},
$S:0}
C.e2u.prototype={
$0(){var w=this.a
$.ajs()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e2v.prototype={
$0(){},
$S:0}
C.e2x.prototype={
$0(){var w=this.a
w.m(new C.e2s(w,this.b))
this.c.$1(new C.e2t())
w.FB()},
$S:0}
C.e2s.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2t.prototype={
$0(){},
$S:0}
C.e2F.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.e2G.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.kX("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ef(new C.e2E(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e2E.prototype={
$1(d){B.lc("construction")
return Ap.hXV()},
$S:z+45}
C.e2H.prototype={
$0(){return E.hJj(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e2I.prototype={
$0(){var w=this.a
return w.m(w.d.gd1C())},
$S:0}
C.e2J.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtm(v))
w.FB()},
$S:0}
C.cMq.prototype={
$2(d,e){var w=null,v=this.a.gazw().x
v===$&&B.c()
return B.b5(w,w,w,new C.bbU(v,w),A.az)},
$S:56}
C.cMp.prototype={
$3(d,e,f){var w=new B.aH($.S().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+e,u))
w.E(new B.ce(v,u,v,u+e))
w.E(new B.ce(v,u,v-e,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bx())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:472}
C.h2L.prototype={
$3(d,e,f){return new C.Wg(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h2M.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ir(A.z,g,null,new B.bi(B.cG(A.ck,e,null),new B.bs(0.85,1,w),w.k("bi<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dZn.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBH()},
$S:0}
C.dZo.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBH()},
$S:0}
C.dZy.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBH()},
$S:0}
C.dZm.prototype={
$1(d){return new L.J3(F.Sl[this.b],new C.dZl(this.a,d),null)},
$S:z+47}
C.dZl.prototype={
$0(){this.a.a=!0
B.a6(this.b,!1).ek()},
$S:0}
C.dZz.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.dZA.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dZf.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb1G():w
return B.az(A.bZ,B.b5(w,w,w,v.cmA(this.b),A.h4),A.y,!1,D.hAm,u,w,w,w,new C.dZd(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dZe(v,e),w,w,w,!1,A.a4)},
$S:37}
C.dZe.prototype={
$1(d){var w=this.b
return this.a.cFq(d.b,new B.av(B.aS(1/0,w.a,w.b),B.aS(1/0,w.c,w.d)))},
$S:60}
C.dZd.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.O6()!=null){w=v<0?1:-1
this.a.aDk(w)}},
$S:36}
C.dZw.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.l(14),t=B.K(h?g:A.aT,A.r,1)
return B.az(w,B.p(w,B.x(B.a([B.X(d,g,w,w,w,20),A.rg,B.d(e,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,A.j9,A.kC,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:765}
C.dZs.prototype={
$0(){return this.a.aDk(-1)},
$S:0}
C.dZt.prototype={
$0(){return this.a.aDk(1)},
$S:0}
C.dZu.prototype={
$0(){return this.a.JP(null)},
$S:0}
C.dZv.prototype={
$0(){return this.a.JP(0)},
$S:0}
C.dZB.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.dZr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c2w(o):q.bFC(o,p),m=x.p
p=B.a([B.oF(new B.m_(n,new B.bg(p,x.bz)),A.pt,B.q0(),A.b0,A.b0,new C.dZp())],m)
n=t.d
if(n){w=A.h.F(q.gBH(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.as],m)
if(w)m.push(D.bM5)
else m.push(A.b4)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.be:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.as(B.cU(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.ed,new B.o(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AR)p.push(B.ao(s,B.as(B.p(s,s,A.f,s,s,A.Mr,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.AS)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Mr,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.az(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZq(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:360}
C.dZp.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ir(A.z,d,null,new B.bi(e,new B.bs(0.92,1,w),w.k("bi<bQ.T>"))),null)},
$S:422}
C.dZq.prototype={
$0(){return this.a.JP(null)},
$S:0}
C.dZx.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.d(A.a.b0(A.o.v(B.dg(q)),2,"0")+":"+A.a.b0(A.o.v(B.fV(q)),2,"0"),s,s,s,s,s,s,A.u4,s,s,s),A.b4],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bf(v,v,v,v),s,s,A.n),s,4+w*2,s,D.bKB,s,s,s,3))}q.push(A.df)
q.push(D.fWo)
q.push(A.bn)
v=B.K(A.ab,A.r,1)
u=B.l(4)
t=this.b
q.push(B.p(s,new B.bL(A.a5,s,s,B.BX(A.z,B.p(s,s,A.f,s,s,new B.o(A.be,s,s,B.l(2),s,s,A.n),s,s,s,A2.Hq,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.n),s,12,s,s,s,s,s,26))
q.push(A.rd)
q.push(B.d(""+t+"%",s,s,s,s,s,s,D.fN3,s,s,s))
return new B.dx(A.dM,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:343}
C.dZk.prototype={
$0(){return this.a.JP(A.d.co(F.ik,this.b))},
$S:0}
C.dZi.prototype={
$0(){return this.a.JP(0)},
$S:0}
C.dZj.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cY(F.ik,0,B.dD(4,"count",x.S),x.gD),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=this.a,v=v.k("ak.E");w.C();){t=w.d
q.push(u.axm(t==null?v.a(t):t,50,!1))}return new B.dx(A.dM,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.r0,A.i,0,s,s),s),s)},
$S:343}
C.dZc.prototype={
$0(){return this.a.JP(null)},
$S:0}
C.dZh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.w.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.c_,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.ha2,A.as,B.E(B.d(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.eT,n,n,n,A.acI,n,n,n),1),B.d(A.a.b0(A.o.v(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.v(B.fV(new B.V(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rj,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.Q(j,0,k,0),n,n,n)
j=B.a([B.b5(n,n,n,new C.byC(l.gBH(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dD,x.w).w.r.b+52}else m=12
v=B.l(10)
u=B.K(A.aT,A.r,1)
t=B.l(10)
s=B.az(n,B.p(n,n,A.f,n,n,A.afL,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dZg(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Yj,n,12,n,n,n,n,n,12)
q=B.az(n,B.p(n,n,A.f,n,n,D.b9o,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbbq(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e7,r,A.e7,q,A.as,B.E(B.d(F.ik[p].a,n,1,A.a2,n,n,n,A.Wa,n,n,n),1)],w)
if(l.O6()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.aZE(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.ct,n,n,n,26,n,n,A.fv,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.D(new B.Q(26,m,26,58),B.p(n,B.bv(t,B.x(B.a([s,B.E(l.aQ_(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.aq),A.f,n,n,new B.o(A.w,n,u,v,D.dzE,n,A.n),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.l(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.j9,l.axm(F.ik[o],34,!1),n))
j.push(B.ao(8,B.as(B.p(n,B.A(t,A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.n),n,n,n,n,A.lR,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b1,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A_.a_z,n,n,n,n,n,n,n,n,n,n)},
$S:82}
C.dZg.prototype={
$0(){return this.a.JP(null)},
$S:0}
C.fuX.prototype={
$0(){return D.eov},
$S:z+48}
C.fuY.prototype={
$0(){return D.dWj},
$S:z+49}
C.fuZ.prototype={
$0(){return D.dSP},
$S:z+50}
C.fv_.prototype={
$0(){return D.dVH},
$S:z+51}
C.fv0.prototype={
$0(){return D.e08},
$S:z+52}
C.fv1.prototype={
$0(){return D.ekh},
$S:z+53}
C.fv2.prototype={
$0(){return D.emr},
$S:z+54}
C.fv3.prototype={
$0(){return D.e_b},
$S:z+36}
C.cnL.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.cnM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hN7(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ao.L6,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fKQ,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lD,k,k,B.x(B.a([m,A.cS,B.d(r.b,k,k,k,k,k,k,new B.H(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bf(q,q,q,q),p,new B.a7(A.ay,A.aC,A.x,o,k,k),A.n),k,v,k,k,A.bH,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cnK(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c_(A.bI,h,A.br,k,14,14)},
$S:167}
C.cnK.prototype={
$0(){return B.a6(this.a,!1).ce(B.ef(new C.cnJ(this.b),!1,null,x.H))},
$S:0}
C.cnJ.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eWo.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7X(w.f)]},
$S:0}
C.eWk.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cT.ai()*7},
$S:0}
C.eWj.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cg)
w.w=""},
$S:0}
C.eWm.prototype={
$0(){var w=this.a
return w.m(new C.eWl(w,this.b))},
$S:0}
C.eWl.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eWn.prototype={
$1(d){return this.a.b2f(0)},
$S:2}
C.e5q.prototype={
$0(){return C.JQ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e5r.prototype={
$0(){},
$S:0}
C.e5l.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e5n.prototype={
$0(){return this.a.b2h(this.b)},
$S:0}
C.e5o.prototype={
$0(){var w=this.a
return w.m(new C.e5m(w))},
$S:0}
C.e5m.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e5p.prototype={
$0(){var w=this.a
return w.b2h(w.d)},
$S:0}
C.dQH.prototype={
$2(d,e){return d+e},
$S:84}
C.dQI.prototype={
$0(){},
$S:0}
C.dQC.prototype={
$2(d,e){return d+e},
$S:84}
C.dQF.prototype={
$0(){var w=this.a
return w.m(new C.dQE(w,this.b))},
$S:0}
C.dQE.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dQG.prototype={
$0(){var w=this.a
return w.m(new C.dQD(w))},
$S:0}
C.dQD.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e1W.prototype={
$0(){return E.uK(this.b,this.a.d,"drawing")},
$S:0}
C.e1X.prototype={
$1(d){var w=this.a
return w.m(new C.e1V(w,d))},
$S:50}
C.e1V.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKG(u,v,t))},
$S:0}
C.e1Y.prototype={
$1(d){var w=this.a
return w.m(new C.e1U(w,d))},
$S:19}
C.e1U.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e1Z.prototype={
$1(d){var w=this.a
return w.m(new C.e1T(w,d))},
$S:23}
C.e1T.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKG(u,v,t))},
$S:0}
C.e2_.prototype={
$0(){var w=this.a
return w.m(new C.e1S(w,this.b))},
$S:0}
C.e1S.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e20.prototype={
$1(d){var w=this.a
return w.m(new C.e1R(w,d))},
$S:6}
C.e1R.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e21.prototype={
$0(){var w=this.a
return w.m(new C.e1Q(w))},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e22.prototype={
$0(){var w=this.a
return w.m(new C.e1P(w))},
$S:0}
C.e1P.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e23.prototype={
$0(){var w=this.a
return w.m(A.d.gtm(w.e))},
$S:0}
C.e24.prototype={
$0(){var w=this.a
return w.m(new C.e1O(w))},
$S:0}
C.e1O.prototype={
$0(){var w=this.a
w.x=D.aBM[A.o.F(A.d.co(D.aBM,w.x)+1,4)]},
$S:0}
C.esT.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.esU.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JQ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.esS(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JQ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.esS.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.esV.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.esR(w))},
$S:11}
C.esR.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.esZ.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lJ(new C.esX(v,e),w,A.b0,A.pt,w,w,new B.bs(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esY(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.esY.prototype={
$0(){return this.a.ceu(this.b)},
$S:0}
C.esX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fE(3.141592653589793*e)
m=B.l(16)
w=o?p:D.ccd
if(o)v=q.a.r.q(0,q.b)?A.be.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.be:A.aT,A.r,1)
if(o){r=B.dr()
r.fE(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fA(A.z,B.d(u[t],p,p,p,p,p,p,H.acr,p,p,p),p,r,!0)
u=r}else u=D.h2S
return B.fA(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:110}
C.et_.prototype={
$0(){var w=this.a
return w.m(new C.esW(w,this.b))},
$S:0}
C.esW.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auH()},
$S:0}
C.et0.prototype={
$0(){var w=this.a
return w.m(w.gbOn())},
$S:0}
C.eDF.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eDG.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eDD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDC(w))},
$S:11}
C.eDC.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eDH.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eDJ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b2g()},
$S:11}
C.eDK.prototype={
$0(){return this.a.ceA(this.b)},
$S:0}
C.eRK.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:58}
C.eRT.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kC,B.A(B.a([v,A.ae,new B.di(1,A.cn,new B.dx(A.dM,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1941}
C.eRP.prototype={
$1(d){return this.a.m(new C.eRO())},
$S:2}
C.eRO.prototype={
$0(){},
$S:0}
C.eRQ.prototype={
$0(){var w=this.a
return w.m(new C.eRN(w,this.b))},
$S:0}
C.eRN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRR.prototype={
$1(d){var w=this.a
return w.m(new C.eRM(w,d))},
$S:6}
C.eRM.prototype={
$0(){return this.a.f=A.h.U(this.b)},
$S:0}
C.eRS.prototype={
$0(){var w=this.a
return w.m(new C.eRL(w))},
$S:0}
C.eRL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ery.prototype={
$0(){},
$S:0}
C.erz.prototype={
$0(){},
$S:0}
C.err.prototype={
$0(){var w=this.a
return w.m(new C.erq(w))},
$S:0}
C.erq.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
E.XM("hat",0,0.6)},
$S:0}
C.ers.prototype={
$0(){var w=this.a
return w.m(new C.erp(w))},
$S:0}
C.erp.prototype={
$0(){this.a.y=1.1
E.mz("bell",36,200,0.4)},
$S:0}
C.ert.prototype={
$0(){var w=this.a
return w.m(new C.ero(w))},
$S:0}
C.ero.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mz("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eru.prototype={
$0(){var w=this.a
return w.m(new C.ern(w,this.b))},
$S:0}
C.ern.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.erv.prototype={
$1(d){var w=this.a
return w.m(new C.erm(w,d))},
$S:6}
C.erm.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.U(this.b),r=J.e6(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.erw.prototype={
$1(d){var w=this.a
return w.m(new C.erl(w,d))},
$S:6}
C.erl.prototype={
$0(){return this.a.z=A.h.U(this.b)},
$S:0}
C.erx.prototype={
$1(d){var w=this.a
return w.m(new C.erk(w,d))},
$S:6}
C.erk.prototype={
$0(){return this.a.Q=A.h.U(this.b)},
$S:0}
C.cnH.prototype={
$0(){var w=this
return E.mz(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOM.prototype
w.bAy=w.t
w=C.aNP.prototype
w.bzz=w.t
w=C.aNQ.prototype
w.bzA=w.t
w=C.aNU.prototype
w.bzE=w.t
w=C.aPB.prototype
w.bBu=w.t
w=C.aOK.prototype
w.bAw=w.t
w=C.aA0.prototype
w.bwA=w.t
w=C.aA1.prototype
w.bwB=w.t
w=C.aMg.prototype
w.bxX=w.t
w=C.aO4.prototype
w.bzP=w.t
w=C.aNR.prototype
w.bzB=w.t
w=C.aOb.prototype
w.bzX=w.t
w=C.aOE.prototype
w.bAq=w.t
w=C.aP4.prototype
w.bAR=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGM.prototype,"gayS","c9I",1)
v(C,"itj","c7z",3)
var q
u(q=C.aFd.prototype,"gciQ","ciR",22)
w(q,"gcah","b0N",1)
w(C.aFf.prototype,"gcc1","cc2",1)
t(C.aFw.prototype,"gcc8","cc9",39)
w(q=C.aJP.prototype,"gcCp","cCq",1)
w(q,"gcca","afp",1)
w(q,"gcnl","cnm",1)
w(q,"gcc7","afo",3)
w(q=C.aGL.prototype,"gbLu","aaK",3)
w(q,"gcmC","b4n",1)
w(q,"gcqp","ai3",3)
s(q,"gccc","afq",3)
s(q=C.a5Q.prototype,"gtm","a8",1)
u(q,"gd_f","apc",0)
u(q,"gcWD","Mv",0)
w(q,"gd1C","blV",1)
r(C.akp.prototype,"gccz",0,5,null,["$5"],["qY"],41,0,0)
w(q=C.aFJ.prototype,"gccA","ccB",1)
w(q,"gctg","aiq",3)
w(q,"gcj7","agK",3)
w(q,"gcAq","ajz",3)
w(q=C.aFz.prototype,"gc4X","adC",3)
w(q,"gbbq","cGY",1)
w(q,"gb1G","ccF",1)
w(q=C.aHe.prototype,"gcev","cew",1)
s(q,"gcet","b2f",1)
w(C.aGx.prototype,"gbOn","auH",1)
s(C.aGS.prototype,"gcex","cey",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.alC,C.H_,C.vt,C.aUS,C.a4H,C.bd0,C.c7A,C.yL,C.D5,C.nQ,C.bdM,C.B7,C.bw4,C.qB,C.rh,C.D9,C.a_O,C.agh,C.a21,C.Dk,C.ada,C.adr,C.afn,C.GL,C.ek,C.u3,C.abQ,C.acX,C.a5Q,C.n1,C.bdN,C.fW,C.m7,C.bxo,C.aKG])
u(B.ht,[C.fMv,C.fB8,C.fIS,C.fIT,C.fMs,C.fMt,C.ekG,C.ekZ,C.eAi,C.ezQ,C.ezR,C.ezS,C.ezT,C.ezU,C.ezV,C.ezW,C.ezX,C.ezO,C.ezP,C.ezN,C.eAd,C.eAe,C.eAf,C.dQd,C.dQf,C.dQi,C.dQt,C.c7B,C.c7C,C.fug,C.fuh,C.fui,C.fup,C.fuq,C.fur,C.dSf,C.dRX,C.dSg,C.dRS,C.dRN,C.dRP,C.dRV,C.dS7,C.dS5,C.dS6,C.dS4,C.dS1,C.dS3,C.fa3,C.f9L,C.f9S,C.fa0,C.f9F,C.dsm,C.dsn,C.dsj,C.dsk,C.dsl,C.dso,C.dsp,C.dsq,C.dsr,C.dss,C.dst,C.dsu,C.dsv,C.dsw,C.eze,C.ezf,C.ezg,C.ezh,C.ezc,C.ezd,C.ezJ,C.ezl,C.ezn,C.ez7,C.ezF,C.ezD,C.ezE,C.ezC,C.ezB,C.ez9,C.bQP,C.bR_,C.bQV,C.bR0,C.bR2,C.bQQ,C.bQO,C.bR7,C.bQW,C.bQZ,C.bQY,C.bQX,C.bLa,C.fYD,C.fYG,C.fYE,C.bKR,C.bKM,C.bKK,C.bL9,C.bL1,C.bL2,C.bL0,C.bL3,C.bKA,C.bKC,C.bKy,C.bKo,C.bKp,C.bKq,C.fus,C.fut,C.fuu,C.fuf,C.fuv,C.fue,C.fuw,C.fuj,C.fud,C.fuk,C.fuc,C.ful,C.fub,C.fum,C.fu9,C.fua,C.fun,C.fu7,C.fu8,C.fuo,C.fu6,C.e2A,C.e2B,C.e2q,C.e2m,C.e2z,C.e2E,C.cMp,C.h2L,C.h2M,C.dZm,C.dZe,C.dZd,C.dZw,C.cnJ,C.eWn,C.e1X,C.e1Y,C.e1Z,C.e20,C.esX,C.eRK,C.eRT,C.eRP,C.eRR,C.erv,C.erw,C.erx])
u(B.jE,[C.fMu,C.ekL,C.ekJ,C.ezZ,C.eAb,C.dRO,C.dSa,C.dYt,C.fa6,C.fa7,C.f9K,C.f9X,C.f9Y,C.f9T,C.f9Z,C.f9E,C.eza,C.ezb,C.ezI,C.ezA,C.ezp,C.bR1,C.bR3,C.bR5,C.bQR,C.bQT,C.bLb,C.cuT,C.fYF,C.bKJ,C.bKL,C.bL7,C.bL6,C.bKz,C.e2y,C.cMq,C.dZf,C.dZr,C.dZp,C.dZx,C.dZj,C.dZh,C.cnM,C.dQH,C.dQC,C.esZ])
u(B.af,[C.WZ,C.Xl,C.VP,C.VW,C.Om,C.aJO,C.Xk,C.akn,C.Wx,C.azG,C.Wg,C.XT,C.WF,C.VQ,C.Ww,C.Xf,C.Xp,C.XK,C.Xe])
u(B.ah,[C.bn9,C.aOM,C.aNP,C.aNU,C.aFw,C.aPB,C.aOK,C.aA0,C.bAA,C.aMg,C.aO4,C.aP4,C.aOb,C.aNR,C.bmB,C.aGx,C.aGS,C.bnR,C.aOE])
u(B.iT,[C.ekE,C.ekF,C.ekR,C.ekS,C.ekN,C.ekM,C.ekO,C.ekK,C.ekP,C.ekI,C.ekQ,C.ekH,C.ekV,C.ekU,C.ekW,C.ekT,C.ekX,C.ekY,C.el_,C.eAh,C.eAj,C.eAk,C.eA0,C.eA_,C.ezY,C.eA6,C.eA7,C.eA3,C.eA8,C.eA2,C.eA9,C.eAa,C.eA1,C.eAc,C.eA5,C.eAg,C.eA4,C.dQA,C.dQz,C.dQa,C.dQb,C.dQc,C.dQB,C.dQe,C.dQg,C.dQh,C.dQj,C.dQ7,C.dQ8,C.dQ9,C.dQq,C.dQr,C.dQs,C.dQp,C.dQu,C.dQo,C.dQv,C.dQn,C.dQw,C.dQm,C.dQx,C.dQl,C.dQy,C.dQk,C.dRU,C.dRT,C.dRY,C.dRQ,C.dRR,C.dRZ,C.dS_,C.dS0,C.dRW,C.dRM,C.dS9,C.dS8,C.dSb,C.dSc,C.dSd,C.dS2,C.dSe,C.cX7,C.dYr,C.dYq,C.dYs,C.fuH,C.fuI,C.fuJ,C.fuK,C.fuL,C.fuM,C.fuN,C.fuO,C.fuP,C.fa5,C.fa4,C.f9N,C.f9M,C.f9I,C.f9H,C.f9J,C.f9G,C.f9V,C.f9U,C.f9W,C.f9O,C.fa_,C.f9R,C.fa1,C.f9Q,C.fa2,C.f9P,C.ezj,C.ez8,C.ezi,C.ez4,C.ezk,C.ezm,C.ez5,C.ez6,C.ezH,C.ezG,C.ezx,C.ezy,C.ezz,C.ezt,C.ezu,C.ezs,C.ezv,C.ezr,C.ezw,C.ezq,C.ezo,C.dsi,C.bR4,C.bR6,C.bQS,C.bQU,C.bKO,C.bKP,C.bKN,C.bKQ,C.bKS,C.bKD,C.bKE,C.bKI,C.bKF,C.bKG,C.bKH,C.bL8,C.bKd,C.bKZ,C.bL_,C.bKX,C.bKY,C.bKU,C.bKV,C.bKW,C.bL4,C.bKT,C.bL5,C.bKe,C.bKB,C.bKl,C.bKk,C.bKm,C.bKn,C.bKj,C.bKr,C.bKi,C.bKs,C.bKt,C.bKu,C.bKv,C.bKh,C.bKw,C.bKg,C.bKx,C.bKf,C.e2r,C.e2C,C.e2D,C.e2p,C.e2o,C.e2n,C.e2w,C.e2u,C.e2v,C.e2x,C.e2s,C.e2t,C.e2F,C.e2G,C.e2H,C.e2I,C.e2J,C.dZn,C.dZo,C.dZy,C.dZl,C.dZz,C.dZA,C.dZs,C.dZt,C.dZu,C.dZv,C.dZB,C.dZq,C.dZk,C.dZi,C.dZc,C.dZg,C.fuX,C.fuY,C.fuZ,C.fv_,C.fv0,C.fv1,C.fv2,C.fv3,C.cnL,C.cnK,C.eWo,C.eWk,C.eWj,C.eWm,C.eWl,C.e5q,C.e5r,C.e5l,C.e5n,C.e5o,C.e5m,C.e5p,C.dQI,C.dQF,C.dQE,C.dQG,C.dQD,C.e1W,C.e1V,C.e1U,C.e1T,C.e2_,C.e1S,C.e1R,C.e21,C.e1Q,C.e22,C.e1P,C.e23,C.e24,C.e1O,C.esT,C.esU,C.esS,C.esV,C.esR,C.esY,C.et_,C.esW,C.et0,C.eDF,C.eDG,C.eDD,C.eDE,C.eDC,C.eDH,C.eDI,C.eDJ,C.eDK,C.eRO,C.eRQ,C.eRN,C.eRM,C.eRS,C.eRL,C.ery,C.erz,C.err,C.erq,C.ers,C.erp,C.ert,C.ero,C.eru,C.ern,C.erm,C.erl,C.erk,C.cnH])
t(C.bAN,C.aOM)
t(C.aGM,C.bAN)
u(B.mt,[C.bk3,C.be3,C.bvs,C.bcJ,C.bu2,C.bts,C.bdp,C.btu,C.bxy,C.bk1,C.akp,C.bbU,C.byC,C.aga,C.byO,C.btt,C.boD])
t(C.aNQ,C.aNP)
t(C.aFd,C.aNQ)
t(C.bAx,C.aNU)
t(C.aFf,C.bAx)
u(B.l8,[C.Ll,C.a1P,C.Kk])
u(B.aw,[C.bur,C.agt,C.afk,C.Rk,C.buY,C.a9O,C.bga])
t(C.aJP,C.aPB)
t(C.bk0,B.pk)
t(C.aGL,C.aOK)
t(C.aA1,C.aA0)
t(C.ako,C.aA1)
t(C.aFJ,C.bAA)
t(C.bbV,C.aMg)
t(C.aFz,C.aO4)
t(C.bAU,C.aP4)
t(C.aHe,C.bAU)
t(C.bAC,C.aOb)
t(C.bmK,C.bAC)
t(C.bAw,C.aNR)
t(C.bmj,C.bAw)
t(C.bAL,C.aOE)
t(C.bnl,C.bAL)
w(C.aOM,B.cf)
w(C.bAN,E.nO)
w(C.aNP,B.cf)
w(C.aNQ,E.nO)
w(C.aNU,B.cf)
w(C.bAx,E.nO)
w(C.aPB,B.eP)
w(C.aOK,B.cf)
w(C.aA0,B.cf)
w(C.aA1,E.nO)
w(C.aMg,B.cf)
v(C.bAA,B.eG)
w(C.aO4,B.cf)
w(C.aNR,B.cf)
w(C.bAw,E.nO)
w(C.aOb,B.cf)
w(C.bAC,E.nO)
w(C.aOE,B.cf)
w(C.bAL,E.nO)
w(C.aP4,B.cf)
w(C.bAU,E.nO)})()
B.j1(b.typeUniverse,JSON.parse('{"WZ":{"af":[],"v":[]},"bn9":{"ah":["WZ"]},"Xl":{"af":[],"v":[]},"aGM":{"ah":["Xl"]},"bk3":{"aC":[]},"VP":{"af":[],"v":[]},"aFd":{"ah":["VP"]},"VW":{"af":[],"v":[]},"aFf":{"ah":["VW"]},"be3":{"aC":[]},"agt":{"aw":[],"v":[]},"afk":{"aw":[],"v":[]},"aJO":{"af":[],"v":[]},"Om":{"af":[],"v":[]},"aFw":{"ah":["Om"]},"bur":{"aw":[],"v":[]},"Rk":{"aw":[],"v":[]},"bvs":{"aC":[]},"buY":{"aw":[],"v":[]},"bcJ":{"aC":[]},"aJP":{"ah":["aJO"]},"bu2":{"aC":[]},"bts":{"aC":[]},"bdp":{"aC":[]},"btu":{"aC":[]},"bxy":{"aC":[]},"Xk":{"af":[],"v":[]},"bk0":{"aC":[]},"aGL":{"ah":["Xk"]},"bk1":{"aC":[]},"akp":{"aC":[]},"akn":{"af":[],"v":[]},"ako":{"ah":["akn"]},"Wx":{"af":[],"v":[]},"azG":{"af":[],"v":[]},"aFJ":{"ah":["Wx"],"eG":[]},"bbV":{"ah":["azG"]},"bbU":{"aC":[]},"Wg":{"af":[],"v":[]},"aFz":{"ah":["Wg"]},"byC":{"aC":[]},"aga":{"aC":[]},"a9O":{"aw":[],"v":[]},"XT":{"af":[],"v":[]},"WF":{"af":[],"v":[]},"VQ":{"af":[],"v":[]},"Ww":{"af":[],"v":[]},"Xf":{"af":[],"v":[]},"Xp":{"af":[],"v":[]},"XK":{"af":[],"v":[]},"Xe":{"af":[],"v":[]},"aHe":{"ah":["XT"]},"byO":{"aC":[]},"bmK":{"ah":["WF"]},"btt":{"aC":[]},"bmj":{"ah":["VQ"]},"bmB":{"ah":["Ww"]},"boD":{"aC":[]},"aGx":{"ah":["Xf"]},"aGS":{"ah":["Xp"]},"bnR":{"ah":["XK"]},"bnl":{"ah":["Xe"]},"bga":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lS<t?>"),G:w("t"),J:w("bq<n,F>"),Q:w("db<n>"),Z:w("a_"),M:w("O<d7>"),R:w("O<a4C>"),h:w("O<a4H>"),V:w("O<ab>"),O:w("O<t>"),l:w("O<V>"),D:w("O<aB<aF>>"),x:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<F>>"),U:w("O<ai<G?>>"),B:w("O<a9<n,aF>>"),g:w("O<r>"),F:w("O<u3>"),v:w("O<fZ>"),eZ:w("O<+(n,n)>"),fT:w("O<+(F,v)>"),I:w("O<+(G,n)>"),u:w("O<+(G,G)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,F,F,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,F,F,a9<n,F>)>"),_:w("O<vt>"),fQ:w("O<abQ>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gk>"),p:w("O<v>"),bL:w("O<acX>"),fH:w("O<lt>"),a_:w("O<ada>"),cB:w("O<nQ>"),ba:w("O<adr>"),eW:w("O<D9>"),fY:w("O<a_O>"),ac:w("O<afn>"),cd:w("O<Dk>"),fr:w("O<agh>"),e4:w("O<a21>"),au:w("O<aKG>"),f7:w("O<R>"),n:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<u3?>"),bN:w("O<G?>"),gJ:w("cx<ako>"),A:w("cx<ah<af>>"),bF:w("ai<t>"),gl:w("ai<V>"),ew:w("ai<aF>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<ek,n>"),fR:w("N<+(F,v),v>"),w:w("iC"),gA:w("zT"),gD:w("wt"),k:w("cu"),K:w("aF"),Y:w("u3"),C:w("ek"),N:w("n"),bO:w("au"),a:w("bs<F>"),W:w("bg<n>"),bz:w("bg<G?>"),dg:w("ed<rh>"),m:w("bd0"),a2:w("D5"),f3:w("rh"),es:w("GL"),q:w("mf"),y:w("R"),i:w("F"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aF?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b44=new B.d7(0,0.1)
D.b6_=new C.aUS(0,0,0)
D.Ml=new C.aUS(0,0.5,0)
D.b6B=new B.ay(A.be,1,A.r,-1)
D.b89=new B.aY(16,1/0,16,1/0)
D.b8k=new B.aY(0,1/0,0,210)
D.bqj=new B.t(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dzR=w([D.bqj,Aq.ak1],x.O)
D.eG_=new B.bT(A.Bu,1.1,A.x,null,0,D.dzR,null,null)
D.b8s=new B.o(null,null,null,null,null,D.eG_,A.n)
D.b9o=new B.o(A.bi,null,null,null,null,null,A.a6)
D.fyE=new B.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbr=new B.B("\u26a1",null,D.fyE,null,null,null,null,null,null,null,null,null)
D.be9=new B.cj(A.z,null,null,D.hbr,null)
D.aXu=new B.H(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0S=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aXu,null,A.K,null,null,null,null,null,null,null)
D.eya=new B.D(A.nK,D.h0S,null)
D.bej=new B.cj(A.z,null,null,D.eya,null)
D.fRC=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aXu,null,A.K,null,null,null,null,null,null,null)
D.ez2=new B.D(A.Hl,D.fRC,null)
D.bf1=new B.cj(A.z,null,null,D.ez2,null)
D.agN=new B.t(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.biV=new B.t(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bjb=new B.t(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bkr=new B.t(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bky=new B.t(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bkV=new B.t(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bmW=new B.t(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bo1=new B.t(1,1,0.9686274509803922,0.8,A.q)
D.boM=new B.t(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aj8=new B.t(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bpO=new B.t(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ajx=new B.t(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.a_6=new B.t(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.brM=new B.t(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bs3=new B.t(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ak5=new B.t(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.btQ=new B.t(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.btY=new B.t(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.but=new B.t(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wr=new B.t(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bwE=new B.t(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.alz=new B.t(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bCu=new B.be(11e6)
D.bEn=new B.Q(10,6,10,2)
D.bEp=new B.Q(10,8,0,10)
D.bF2=new B.Q(12,8,6,10)
D.bF5=new B.Q(12,8,8,8)
D.bFc=new B.Q(14,0,14,22)
D.bFe=new B.Q(14,0,14,30)
D.bGi=new B.Q(16,4,16,28)
D.bGB=new B.Q(18,10,18,16)
D.bJr=new B.Q(4,4,8,2)
D.bK4=new B.Q(8,14,8,12)
D.bKf=new B.Q(8,6,8,8)
D.bKB=new B.Q(0,0,1.5,0)
D.b5M=new B.HZ(26,"saturation")
D.bKU=new B.uT(A.cC,D.b5M,null,A.YP)
D.bKV=new B.fT(A.G,11)
D.bKZ=new B.fT(A.G,30)
D.fQE=new B.B("REACTION LAB",null,T.aY7,null,null,null,null,A.a2,null,1,null,null)
D.bL7=new B.bz(1,A.bd,D.fQE,null)
D.fUM=new B.B("\ud83d\udce2 NGMY Ads",null,A.rj,null,null,null,null,A.eT,null,1,null,null)
D.bM5=new B.bz(1,A.bd,D.fUM,null)
D.fPj=new B.B("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bMj=new B.bz(1,A.bd,D.fPj,null)
D.aqz=new B.a_(62712,"MaterialIcons",!1)
D.bSw=new B.a_(62908,"MaterialIcons",!1)
D.bUe=new B.a_(983122,"MaterialIcons",!1)
D.bUt=new B.a_(983247,"MaterialIcons",!1)
D.bUI=new B.a_(983443,"MaterialIcons",!1)
D.bV0=new B.a_(983616,"MaterialIcons",!1)
D.bUd=new B.a_(983117,"MaterialIcons",!1)
D.bYH=new B.ae(D.bUd,28,A.c,null,null,null)
D.bYY=new B.ae(A.jb,18,null,null,null,null)
D.c09=new B.ae(A.nN,null,A.ab,null,null,null)
D.c0j=new B.ae(A.a4k,21,A.ab,null,null,null)
D.c1a=new B.ae(A.eK,17,A.ab,null,null,null)
D.c40=new B.ae(A.jb,21,A.ab,null,null,null)
D.c4x=new B.ae(A.ej,20,A.bY,null,null,null)
D.c5D=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dxs=w([A.dh,A.d9,A.dh],x.O)
D.c90=new B.a7(A.a5,A.a9,A.x,D.dxs,null,null)
D.d8i=w([A.bO,A.bj],x.O)
D.c98=new B.a7(A.aY,A.b3,A.x,D.d8i,null,null)
D.c9m=new B.a7(A.aY,A.b3,A.x,A.a6Z,null,null)
D.auh=new B.a7(A.aY,A.b3,A.x,Q.a68,null,null)
D.d5P=w([A.pf,A.iw],x.O)
D.caa=new B.a7(A.aY,A.b3,A.x,D.d5P,null,null)
D.d81=w([A.cR,A.av],x.O)
D.aup=new B.a7(A.aY,A.b3,A.x,D.d81,null,null)
D.dqY=w([A.d_,A.iO,A.bj],x.O)
D.cat=new B.a7(A.a5,A.a9,A.x,D.dqY,null,null)
D.dr3=w([A.cy,A.ct],x.O)
D.caO=new B.a7(A.aY,A.b3,A.x,D.dr3,null,null)
D.aEq=w([A.cR,M.mX],x.O)
D.cb4=new B.a7(A.aY,A.b3,A.x,D.aEq,null,null)
D.cbm=new B.a7(A.aY,A.b3,A.x,S.auL,null,null)
D.ccd=new B.a7(A.ay,A.aC,A.x,A.Sm,null,null)
D.di9=w([A.av,A.w],x.O)
D.cco=new B.a7(A.aY,A.b3,A.x,D.di9,null,null)
D.ccr=new B.a7(A.aY,A.b3,A.x,H.aDH,null,null)
D.bun=new B.t(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bvh=new B.t(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cRx=w([A.NM,D.bun,D.bvh],x.O)
D.ccB=new B.a7(A.aY,A.b3,A.x,D.cRx,null,null)
D.cEP=w([A.d6,A.iL],x.O)
D.ccP=new B.a7(A.aY,A.b3,A.x,D.cEP,null,null)
D.by3=new B.t(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cFA=w([F.agV,D.by3],x.O)
D.cd1=new B.a7(A.aY,A.b3,A.x,D.cFA,null,null)
D.cdC=w([0,4,7],x.t)
D.cdD=w([0,4,7,12],x.t)
D.cdE=w([0,4,7,4],x.t)
D.aDo=w([A.h8,A.rR],x.O)
D.aCU=w([A.fK,A.cW],x.O)
D.aBc=w([A.bh,A.dN],x.O)
D.d_m=w([A.aQ,A.d6],x.O)
D.dsm=w([A.c4,A.lF],x.O)
D.aAD=w([A.cP,A.k1],x.O)
D.d4A=w([A.bP,A.aL],x.O)
D.ce1=w([D.aDo,D.aCU,A.a6d,D.aBc,D.d_m,A.aBs,A.aCo,D.dsm,D.aAD,D.d4A],B.at("O<ai<t>>"))
D.ciJ=w([120,220,380],x.t)
D.cmt=w([12,16,19,24],x.t)
D.cmD=w([1400,800,450,2400],x.t)
D.cv5=w([250,450,900,1500],x.t)
D.bid=new B.t(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.buO=new B.t(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bsu=new B.t(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.byE=new B.t(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.brz=new B.t(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.azT=w([D.bid,D.buO,D.bsu,D.byE,D.brz],x.O)
D.cMo=w([50,25,75],x.t)
D.cS5=w([0,5,10,15,18,20,25],x.t)
D.d_F=w([900,500,250,1600],x.t)
D.d3Q=w([A.bh,A.bE,A.ba,A.bh],x.O)
D.a63=w([A.aA,A.bt,A.bi,A.aH,A.oq],x.O)
D.d5r=w([A.av,A.aA,A.cP,A.bt,A.bi,A.cF,A.cj,A.bE,A.Z9],x.O)
D.a66=w([0.04,0.17,0.3],x.n)
D.fhX=new C.vt("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fi2=new C.vt("Medium engine","A good all-rounder.",0.3,0.9)
D.fi1=new C.vt("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.IP=w([D.fhX,D.fi2,D.fi1],x._)
D.eLY=new B.y(6,"Easy")
D.eMK=new B.y(8,"Medium")
D.eHz=new B.y(10,"Hard")
D.d72=w([D.eLY,D.eMK,D.eHz],x.I)
D.aBB=w([0.55,0.78,1],x.n)
D.aBM=w([A.c,A.fZ,A.ph,A.av],x.O)
D.aBU=w([A.bi,A.aA,A.bt,A.d9],x.O)
D.fhU=new C.vt("Radar","Shows your height above the ground.",0.1,0)
D.fhV=new C.vt("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fhS=new C.vt("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aC1=w([D.fhU,D.fhV,D.fhS],x._)
D.ddq=w([47,100,220,470,1000],x.n)
D.JW={volts:0}
D.a7Z=new B.bq(D.JW,[3],x.J)
D.Km=new B.dY(["b","battery",0.2,0.3,D.a7Z])
D.erY={on:0}
D.dIN=new B.bq(D.erY,[1],x.J)
D.EY=new B.dY(["s","switch",0.5,0.3,D.dIN])
D.ffB=new B.dY(["l","bulb",0.8,0.3,A.jw])
D.d8r=w([D.Km,D.EY,D.ffB],x.d)
D.EW=new B.b7(["b",0,"s",0])
D.feA=new B.b7(["s",1,"l",0])
D.aT0=new B.b7(["l",1,"b",1])
D.dra=w([D.EW,D.feA,D.aT0],x.o)
D.d7S=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eGH=new C.n1("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d8r,D.dra,D.d7S)
D.aMP={ohms:0}
D.aKp=new B.bq(D.aMP,[220],x.J)
D.ff3=new B.dY(["r","resistor",0.5,0.3,D.aKp])
D.ffQ=new B.dY(["d","led",0.8,0.3,A.jw])
D.duu=w([D.Km,D.ff3,D.ffQ],x.d)
D.fdP=new B.b7(["b",0,"r",0])
D.feu=new B.b7(["r",1,"d",0])
D.fdW=new B.b7(["d",1,"b",1])
D.dEg=w([D.fdP,D.feu,D.fdW],x.o)
D.duY=w(["led","diode","indicator"],x.s)
D.eGO=new C.n1("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.duu,D.dEg,D.duY)
D.a9w={level:0}
D.dI9=new B.bq(D.a9w,[0.2],x.J)
D.ff9=new B.dY(["p","pot",0.5,0.3,D.dI9])
D.ffb=new B.dY(["m","motor",0.8,0.3,A.jw])
D.d8M=w([D.Km,D.ff9,D.ffb],x.d)
D.fdO=new B.b7(["b",0,"p",0])
D.fep=new B.b7(["p",1,"m",0])
D.fel=new B.b7(["m",1,"b",1])
D.dzA=w([D.fdO,D.fep,D.fel],x.o)
D.dqQ=w(["fan","motor","spin","dimmer"],x.s)
D.eGF=new C.n1("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d8M,D.dzA,D.dqQ)
D.a7W=new B.bq(D.a9w,[0.9],x.J)
D.aT9=new B.dY(["s","solar",0.25,0.3,D.a7W])
D.aT8=new B.dY(["l","bulb",0.75,0.3,A.jw])
D.dbJ=w([D.aT9,D.aT8],x.d)
D.fex=new B.b7(["s",0,"l",0])
D.fei=new B.b7(["l",1,"s",1])
D.d9C=w([D.fex,D.fei],x.o)
D.dAl=w(["solar","sun","without battery","no battery","free"],x.s)
D.eGI=new C.n1("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dbJ,D.d9C,D.dAl)
D.ffT=new B.dY(["c","crank",0.25,0.3,D.a7W])
D.dp0=w([D.ffT,D.aT8],x.d)
D.fdS=new B.b7(["c",0,"l",0])
D.feh=new B.b7(["l",1,"c",1])
D.dpE=w([D.fdS,D.feh],x.o)
D.dpa=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eGE=new C.n1("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dp0,D.dpE,D.dpa)
D.dI8=new B.bq(D.a9w,[0.7],x.J)
D.ffe=new B.dY(["t","turbine",0.25,0.3,D.dI8])
D.ff1=new B.dY(["m","motor",0.75,0.3,A.jw])
D.diS=w([D.ffe,D.ff1],x.d)
D.feI=new B.b7(["t",0,"m",0])
D.fem=new B.b7(["m",1,"t",1])
D.dhO=w([D.feI,D.fem],x.o)
D.dnG=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eGB=new C.n1("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.diS,D.dhO,D.dnG)
D.aKm=new B.bq(D.JW,[9],x.J)
D.aaC=new B.dY(["b","battery",0.2,0.3,D.aKm])
D.aT6=new B.dY(["r","radio",0.8,0.3,A.jw])
D.dAX=w([D.aaC,D.EY,D.aT6],x.d)
D.feC=new B.b7(["s",1,"r",0])
D.aT2=new B.b7(["r",1,"b",1])
D.cdh=w([D.EW,D.feC,D.aT2],x.o)
D.dzl=w(["radio","music","listen"],x.s)
D.eGN=new C.n1("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dAX,D.cdh,D.dzl)
D.dJc=new B.bq(D.JW,[12],x.J)
D.aT5=new B.dY(["b","battery",0.2,0.3,D.dJc])
D.ffC=new B.dY(["t","tv",0.8,0.3,A.jw])
D.d8t=w([D.aT5,D.EY,D.ffC],x.d)
D.feD=new B.b7(["s",1,"t",0])
D.aT3=new B.b7(["t",1,"b",1])
D.dsp=w([D.EW,D.feD,D.aT3],x.o)
D.dAV=w(["tv","television","screen","watch"],x.s)
D.eGy=new C.n1("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d8t,D.dsp,D.dAV)
D.ffs=new B.dY(["z","buzzer",0.8,0.3,A.jw])
D.cOL=w([D.Km,D.EY,D.ffs],x.d)
D.feE=new B.b7(["s",1,"z",0])
D.feW=new B.b7(["z",1,"b",1])
D.d2Z=w([D.EW,D.feE,D.feW],x.o)
D.dxz=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eGK=new C.n1("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cOL,D.d2Z,D.dxz)
D.ffa=new B.dY(["h","heater",0.8,0.3,A.jw])
D.dmi=w([D.aaC,D.EY,D.ffa],x.d)
D.fez=new B.b7(["s",1,"h",0])
D.fe4=new B.b7(["h",1,"b",1])
D.d3L=w([D.EW,D.fez,D.fe4],x.o)
D.cyo=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eGz=new C.n1("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dmi,D.d3L,D.cyo)
D.ffE=new B.dY(["s","solar",0.2,0.25,D.a7W])
D.dJg=new B.bq(D.aMP,[100],x.J)
D.ffH=new B.dY(["r","resistor",0.55,0.25,D.dJg])
D.ffO=new B.dY(["c","capacitor",0.85,0.25,A.jw])
D.ff6=new B.dY(["q","resistor",0.55,0.6,D.aKp])
D.ffF=new B.dY(["d","led",0.85,0.6,A.jw])
D.drT=w([D.ffE,D.ffH,D.ffO,D.ff6,D.ffF],x.d)
D.fey=new B.b7(["s",0,"r",0])
D.fet=new B.b7(["r",1,"c",0])
D.fdU=new B.b7(["c",1,"s",1])
D.fdT=new B.b7(["c",0,"q",0])
D.fes=new B.b7(["q",1,"d",0])
D.fdX=new B.b7(["d",1,"c",1])
D.dfA=w([D.fey,D.fet,D.fdU,D.fdT,D.fes,D.fdX],x.o)
D.doh=w(["capacitor","store","charge","flash"],x.s)
D.eGM=new C.n1("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.drT,D.dfA,D.doh)
D.ffh=new B.dY(["b","battery",0.15,0.3,D.a7Z])
D.ffU=new B.dY(["l1","bulb",0.5,0.3,A.jw])
D.ffp=new B.dY(["l2","bulb",0.85,0.3,A.jw])
D.d6s=w([D.ffh,D.ffU,D.ffp],x.d)
D.fdN=new B.b7(["b",0,"l1",0])
D.fee=new B.b7(["l1",1,"l2",0])
D.fef=new B.b7(["l2",1,"b",1])
D.djG=w([D.fdN,D.fee,D.fef],x.o)
D.dAF=w(["series","two bulbs","dim"],x.s)
D.eGC=new C.n1("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d6s,D.djG,D.dAF)
D.esi={volts:0,charge:1}
D.dJj=new B.bq(D.esi,[1.5,0],x.J)
D.ffM=new B.dY(["b","battery",0.75,0.3,D.dJj])
D.d5Q=w([D.aT9,D.ffM],x.d)
D.few=new B.b7(["s",0,"b",0])
D.fdR=new B.b7(["b",1,"s",1])
D.dfU=w([D.few,D.fdR],x.o)
D.dos=w(["charge","rechargeable","flat","recharge"],x.s)
D.eGA=new C.n1("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d5Q,D.dfU,D.dos)
D.dJb=new B.bq(D.JW,[4.5],x.J)
D.ffc=new B.dY(["b","battery",0.2,0.3,D.dJb])
D.aT4=new B.dY(["p","phone",0.8,0.3,A.jw])
D.diH=w([D.ffc,D.EY,D.aT4],x.d)
D.feB=new B.b7(["s",1,"p",0])
D.aaB=new B.b7(["p",1,"b",1])
D.dwp=w([D.EW,D.feB,D.aaB],x.o)
D.dy0=w(["phone","charger","usb","mobile"],x.s)
D.eGG=new C.n1("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.diH,D.dwp,D.dy0)
D.feZ=new B.dY(["f","fan",0.8,0.3,A.jw])
D.cqu=w([D.Km,D.feZ],x.d)
D.fdM=new B.b7(["b",0,"f",0])
D.fe2=new B.b7(["f",1,"b",1])
D.d4l=w([D.fdM,D.fe2],x.o)
D.dqP=w(["fan","cool","air","wind"],x.s)
D.eGP=new C.n1("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cqu,D.d4l,D.dqP)
D.ffw=new B.dY(["b","battery",0.15,0.2,D.a7Z])
D.ff_=new B.dY(["a","ammeter",0.5,0.2,A.jw])
D.feY=new B.dY(["l","bulb",0.85,0.2,A.jw])
D.ffy=new B.dY(["v","voltmeter",0.5,0.6,A.jw])
D.doQ=w([D.ffw,D.ff_,D.feY,D.ffy],x.d)
D.fdK=new B.b7(["b",0,"a",0])
D.fdJ=new B.b7(["a",1,"l",0])
D.feK=new B.b7(["v",0,"l",0])
D.feL=new B.b7(["v",1,"l",1])
D.dfL=w([D.fdK,D.fdJ,D.aT0,D.feK,D.feL],x.o)
D.dEf=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eGL=new C.n1("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.doQ,D.dfL,D.dEf)
D.ffX=new B.dY(["b","battery",0.15,0.2,D.aKm])
D.ffg=new B.dY(["t","tv",0.55,0.2,A.jw])
D.aKn=new B.bq(D.JW,[5],x.J)
D.ff4=new B.dY(["c","buck",0.4,0.5,D.aKn])
D.ffi=new B.dY(["p","phone",0.8,0.5,A.jw])
D.ddc=w([D.ffX,D.ffg,D.ff4,D.ffi],x.d)
D.fdQ=new B.b7(["b",0,"t",0])
D.aSZ=new B.b7(["b",0,"c",0])
D.aT_=new B.b7(["c",1,"p",0])
D.diE=w([D.fdQ,D.aT3,D.aSZ,D.aT_,D.aaB],x.o)
D.dbg=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eGD=new C.n1("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.ddc,D.diE,D.dbg)
D.ff5=new B.dY(["c","buck",0.5,0.3,D.aKn])
D.d3z=w([D.aT5,D.ff5,D.aT4],x.d)
D.d8X=w([D.aSZ,D.aT_,D.aaB],x.o)
D.cBU=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eGx=new C.n1("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d3z,D.d8X,D.cBU)
D.ffn=new B.dY(["d","diode",0.5,0.3,A.jw])
D.djV=w([D.aaC,D.ffn,D.aT6],x.d)
D.fdL=new B.b7(["b",0,"d",0])
D.fdY=new B.b7(["d",1,"r",0])
D.cRj=w([D.fdL,D.fdY,D.aT2],x.o)
D.daW=w(["diode","protect","backwards","one way"],x.s)
D.eGJ=new C.n1("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.djV,D.cRj,D.daW)
D.SA=w([D.eGH,D.eGO,D.eGF,D.eGI,D.eGE,D.eGB,D.eGN,D.eGy,D.eGK,D.eGz,D.eGM,D.eGC,D.eGA,D.eGG,D.eGP,D.eGL,D.eGD,D.eGx,D.eGJ],B.at("O<n1>"))
D.hOi=new C.H_("Moon",1.62,A.d_,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hOg=new C.H_("Mars",3.71,A.aA,"Mars has about 38 percent of Earth's gravity.")
D.hOj=new C.H_("Mercury",3.7,A.ky,"Mercury is small, so its gravity is like Mars.")
D.hOd=new C.H_("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hOf=new C.H_("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hOh=new C.H_("Neptune",11.15,A.d9,"Neptune pulls a little harder than Earth.")
D.hOe=new C.H_("Jupiter",24.79,A.cP,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tw=w([D.hOi,D.hOg,D.hOj,D.hOd,D.hOf,D.hOh,D.hOe],B.at("O<H_>"))
D.dfy=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dgj=w([0.2,0.5,0.8],x.n)
D.b2N=new C.Ll(0,"accordion")
D.d4I=w([A.jM,A.zJ,A.zu],x.x)
D.dcC=w(["Mail","SMS","Ad"],x.s)
D.d5j=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hMs=new C.B7(D.b2N,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aDo,D.d4I,D.dcC,D.d5j)
D.aeq=new C.Ll(1,"flip")
D.dob=w([A.qU,A.DC,A.tq],x.x)
D.din=w(["Unlock","Verify","Secure"],x.s)
D.d3u=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hMr=new C.B7(D.aeq,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCU,D.dob,D.din,D.d3u)
D.b2O=new C.Ll(2,"towers")
D.dh5=w([A.zH,A.pC,A.ii],x.x)
D.dgD=w(["Save","Grow","Earn"],x.s)
D.cSh=w(["","",""],x.s)
D.hMt=new C.B7(D.b2O,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6d,D.dh5,D.dgD,D.cSh)
D.aer=new C.Ll(3,"assemble")
D.dpe=w([A.oO,A.ho,A.e9],x.x)
D.dbW=w(["Launch","Charge","Shine"],x.s)
D.dlj=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hMv=new C.B7(D.aer,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aBc,D.dpe,D.dbW,D.dlj)
D.b2P=new C.Ll(4,"carousel")
D.dp1=w([A.ba,A.fn],x.O)
D.dcL=w([A.n5,A.aqX,A.Qj],x.x)
D.d6T=w(["Explore","Discover","Learn"],x.s)
D.diN=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hMq=new C.B7(D.b2P,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dp1,D.dcL,D.d6T,D.diN)
D.b2Q=new C.Ll(5,"burst")
D.dgy=w([A.hL,A.ut],x.O)
D.d5c=w([A.kc,A.ml,A.hD],x.x)
D.d5B=w(["Cheer","Win","Love"],x.s)
D.d8_=w(["Make some noise","First place","Share the joy"],x.s)
D.hMu=new C.B7(D.b2Q,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dgy,D.d5c,D.d5B,D.d8_)
D.aCz=w([D.hMs,D.hMr,D.hMt,D.hMv,D.hMq,D.hMu],B.at("O<B7>"))
D.f8t=new B.b3("skin","Skin",A.a3B)
D.fa9=new B.b3("muscle","Muscles",A.PW)
D.f9N=new B.b3("organ","Organs",A.hD)
D.bSc=new B.a_(62747,"MaterialIcons",!1)
D.f9W=new B.b3("bone","Skeleton",D.bSc)
D.fah=new B.b3("vessel","Blood vessels",A.pG)
D.dhb=w([D.f8t,D.fa9,D.f9N,D.f9W,D.fah],x.r)
D.fhW=new C.vt("Simple legs","Light. Land gently.",0.15,0.2)
D.fhY=new C.vt("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fi0=new C.vt("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DY=w([D.fhW,D.fhY,D.fi0],x._)
D.fdj=new B.b7(["beat",0.18,0.28,0])
D.feF=new B.b7(["burst",0.7,0.2,0])
D.feQ=new B.b7(["delay",0.45,0.5,1])
D.feo=new B.b7(["ripple",0.75,0.6,3])
D.dbE=w([D.fdj,D.feF,D.feQ,D.feo],x.e)
D.dnt=w([P.l8,Q.Kl,F.V8],x.u)
D.hLd=new C.GL("First spark","A clock lights a burst and a ripple",D.dbE,D.dnt)
D.fe1=new B.b7(["beat",0.15,0.3,1])
D.fbB=new B.b7(["ripple",0.62,0.15,0])
D.feM=new B.b7(["delay",0.4,0.45,0])
D.fdF=new B.b7(["ripple",0.7,0.45,0])
D.fde=new B.b7(["delay",0.4,0.7,1])
D.feq=new B.b7(["shake",0.75,0.75,0])
D.dBU=w([D.fe1,D.fbB,D.feM,D.fdF,D.fde,D.feq],x.e)
D.eIH=new B.y(2,4)
D.aSG=new B.y(4,5)
D.dfn=w([P.l8,Q.Kl,F.V8,D.eIH,D.aSG],x.u)
D.hLf=new C.GL("Heartbeat","Two thumps, then a shake",D.dBU,D.dfn)
D.fdp=new B.b7(["dice",0.15,0.7,1])
D.feS=new B.b7(["echo",0.4,0.7,0])
D.fdB=new B.b7(["comet",0.7,0.5,4])
D.feG=new B.b7(["burst",0.72,0.2,1])
D.fdZ=new B.b7(["burst",0.3,0.25,0])
D.fdq=new B.b7(["pop",0.55,0.85,0])
D.cxW=w([D.fdp,D.feS,D.fdB,D.feG,D.fdZ,D.fdq],x.e)
D.eI0=new B.y(1,3)
D.eI1=new B.y(1,4)
D.aSC=new B.y(0,5)
D.doX=w([P.l8,R.vL,D.eI0,D.eI1,D.aSC],x.u)
D.hLe=new C.GL("Fireworks","Dice launch comets that burst in colour",D.cxW,D.doX)
D.fdx=new B.b7(["beat",0.15,0.2,2])
D.feb=new B.b7(["chance",0.4,0.2,0])
D.fdm=new B.b7(["ball",0.7,0.12,3])
D.fd7=new B.b7(["chance",0.4,0.5,1])
D.feR=new B.b7(["ball",0.3,0.08,1])
D.fcq=new B.b7(["ripple",0.7,0.55,3])
D.cqX=w([D.fdx,D.feb,D.fdm,D.fd7,D.feR,D.fcq],x.e)
D.eII=new B.y(2,5)
D.cOv=w([P.l8,R.vL,Q.aat,F.V9,D.eII],x.u)
D.hLc=new C.GL("Rain","Balls fall at random and splash",D.cqX,D.cOv)
D.fec=new B.b7(["beat",0.12,0.45,2])
D.feH=new B.b7(["toggle",0.38,0.2,0])
D.feO=new B.b7(["wash",0.7,0.15,4])
D.fdo=new B.b7(["count3",0.38,0.45,0])
D.feJ=new B.b7(["burst",0.72,0.4,0])
D.fe_=new B.b7(["light",0.55,0.7,1])
D.fd8=new B.b7(["pop",0.8,0.8,4])
D.drR=w([D.fec,D.feH,D.feO,D.fdo,D.feJ,D.fe_,D.fd8],x.e)
D.eJe=new B.y(3,6)
D.cu5=w([P.l8,R.vL,Q.aat,F.V9,D.aSC,D.eJe],x.u)
D.hLa=new C.GL("Disco","A beat drives lights, washes and bursts",D.drR,D.cu5)
D.feV=new B.b7(["button",0.12,0.2,0])
D.fcQ=new B.b7(["delay",0.34,0.2,1])
D.feU=new B.b7(["light",0.56,0.2,1])
D.feN=new B.b7(["delay",0.56,0.45,1])
D.fed=new B.b7(["ball",0.34,0.6,0])
D.fd6=new B.b7(["delay",0.34,0.8,1])
D.fbr=new B.b7(["burst",0.7,0.8,5])
D.ce4=w([D.feV,D.fcQ,D.feU,D.feN,D.fed,D.fd6,D.fbr],x.e)
D.eLt=new B.y(5,6)
D.dxJ=w([P.l8,R.vL,F.V8,F.V9,D.aSG,D.eLt],x.u)
D.hLb=new C.GL("Domino","Tap the button and watch it run down the line",D.ce4,D.dxJ)
D.aCY=w([D.hLd,D.hLf,D.hLe,D.hLc,D.hLa,D.hLb],B.at("O<GL>"))
D.dmK=w([0.05,0.15,0.25],x.n)
D.dnF=w([1.5,3,4.5,9,12],x.n)
D.f6M=new B.b3("dice","Dice",A.nL)
D.f80=new B.b3("coin","Coin",U.zB)
D.fac=new B.b3("num","Number",A.x3)
D.dnU=w([D.f6M,D.f80,D.fac],x.r)
D.dnY=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aD3=w([A.bY,A.aQ,A.be,A.aH,A.bh,A.c4,A.cP,A.fK],x.O)
D.dp2=w([A.c4,A.aH,A.ex,A.be],x.O)
D.dq6=w([],x.h)
D.ezP=new C.ek("battery","Battery","\ud83d\udd0b",A.be,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ezV=new C.ek("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eAz=new C.ek("crank","Hand crank","\ud83d\udd04",A.cP,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eAb=new C.ek("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ezH=new C.ek("buck","Step-down converter","\ud83d\udd3d",A.fK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eA9=new C.ek("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eAE=new C.ek("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eAl=new C.ek("ldr","Light sensor","\ud83c\udf1e",A.ex,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eA_=new C.ek("switch","Switch","\ud83c\udf9a\ufe0f",A.bh,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eAB=new C.ek("fuse","Fuse","\ud83e\uddef",A.bY,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ezz=new C.ek("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eAm=new C.ek("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eAo=new C.ek("bulb","Light bulb","\ud83d\udca1",A.ex,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ezX=new C.ek("led","LED","\ud83d\udd34",A.aA,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eA0=new C.ek("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eAi=new C.ek("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ezQ=new C.ek("heater","Heater","\ud83d\udd25",A.cP,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eAd=new C.ek("capacitor","Capacitor","\ud83e\udeab",A.cs,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eA5=new C.ek("radio","Radio","\ud83d\udcfb",A.oq,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eA2=new C.ek("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ezG=new C.ek("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ezN=new C.ek("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ezT=new C.ek("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eAG=new C.ek("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eAv=new C.ek("clock","Digital clock","\u23f0",A.be,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eA8=new C.ek("calculator","Calculator","\ud83e\uddee",A.MO,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ezM=new C.ek("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cs,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eAF=new C.ek("router","WiFi router","\ud83d\udcf6",A.fK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eAI=new C.ek("siren","Siren","\ud83d\udea8",A.aA,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ezC=new C.ek("toycar","Toy car","\ud83d\ude97",A.cP,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eAJ=new C.ek("kettle","Kettle","\ud83e\uded6",A.mV,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ezK=new C.ek("lamp","Desk lamp","\ud83e\ude94",A.ex,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ezW=new C.ek("lights","Party lights","\ud83c\udf84",A.oq,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eA6=new C.ek("fridge","Fridge","\ud83e\uddca",A.h9,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ezE=new C.ek("washer","Washing machine","\ud83e\udee7",A.cs,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eAw=new C.ek("blender","Blender","\ud83e\udd64",A.bY,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eA3=new C.ek("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ezJ=new C.ek("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eA7=new C.ek("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eAt=new C.ek("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ezF=new C.ek("microwave","Microwave","\ud83c\udf72",A.cP,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eAn=new C.ek("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ezS=new C.ek("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eAh=new C.ek("console","Game console","\ud83c\udfae",A.bh,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eAy=new C.ek("heartmon","Heart monitor","\ud83e\ude7a",A.hv,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ezD=new C.ek("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eAc=new C.ek("lighthouse","Lighthouse","\ud83d\uddfc",A.ex,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eAk=new C.ek("discoball","Disco ball","\ud83e\udea9",A.oq,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eAD=new C.ek("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ezB=new C.ek("toaster","Toaster","\ud83c\udf5e",A.e3,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eAH=new C.ek("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eAs=new C.ek("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eAe=new C.ek("hairdryer","Hair dryer","\ud83d\udca8",A.hL,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eAq=new C.ek("headphones","Headphones","\ud83c\udfa7",A.bh,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ezL=new C.ek("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eAC=new C.ek("tablet","iPad Pro M5","\ud83d\udcf2",A.cs,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ezy=new C.ek("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hv,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eA4=new C.ek("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ezY=new C.ek("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eAj=new C.ek("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.up,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ezA=new C.ek("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ezO=new C.ek("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d9,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eAA=new C.ek("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cF,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eAf=new C.ek("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bi,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eAa=new C.ek("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eAr=new C.ek("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aA,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ezZ=new C.ek("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.be,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eAg=new C.ek("honor","Honor Magic V5","\ud83d\udcf1",A.cs,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eAp=new C.ek("vivo","vivo X300 Pro","\ud83d\udcf1",A.cP,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eAu=new C.ek("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ezx=new C.ek("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eA1=new C.ek("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cF,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ezU=new C.ek("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ezI=new C.ek("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.ex,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ezR=new C.ek("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aA,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eAx=new C.ek("vision","Apple Vision Pro","\ud83e\udd7d",A.bh,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.T_=w([D.ezP,D.ezV,D.eAz,D.eAb,D.ezH,D.eA9,D.eAE,D.eAl,D.eA_,D.eAB,D.ezz,D.eAm,D.eAo,D.ezX,D.eA0,D.eAi,D.ezQ,D.eAd,D.eA5,D.eA2,D.ezG,D.ezN,D.ezT,D.eAG,D.eAv,D.eA8,D.ezM,D.eAF,D.eAI,D.ezC,D.eAJ,D.ezK,D.ezW,D.eA6,D.ezE,D.eAw,D.eA3,D.ezJ,D.eA7,D.eAt,D.ezF,D.eAn,D.ezS,D.eAh,D.eAy,D.ezD,D.eAc,D.eAk,D.eAD,D.ezB,D.eAH,D.eAs,D.eAe,D.eAq,D.ezL,D.eAC,D.ezy,D.eA4,D.ezY,D.eAj,D.ezA,D.ezO,D.eAA,D.eAf,D.eAa,D.eAr,D.ezZ,D.eAg,D.eAp,D.eAu,D.ezx,D.eA1,D.ezU,D.ezI,D.ezR,D.eAx],B.at("O<ek>"))
D.dqK=w([5,10,15,25,45,60],x.t)
D.dr7=w([-0.045,0.03,-0.015],x.n)
D.aDw=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vp=w([0.05,0.2,0.35],x.n)
D.baI=new B.ab(0,A.G,A.hN,A.dL,6)
D.dtV=w([D.baI],x.V)
D.eH9=new B.y(0,"AND")
D.eI3=new B.y(1,"Adder")
D.eIJ=new B.y(2,"Blinker")
D.eJf=new B.y(3,"Memory")
D.duI=w([D.eH9,D.eI3,D.eIJ,D.eJf],x.I)
D.aDI=w([-104,0,104],x.n)
D.aDK=w([-14,3],x.n)
D.dvH=w([-8,0,8],x.n)
D.aDT=w([-92,0,92],x.n)
D.dw7=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fhT=new C.vt("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fi_=new C.vt("Medium tank","Balanced.",0.35,1)
D.fhZ=new C.vt("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Td=w([D.fhT,D.fi_,D.fhZ],x._)
D.nU=w([0.04,0.2,0.36],x.n)
D.aE4=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f9M=new B.b3(D.b2N,"Fold",U.arS)
D.f8J=new B.b3(D.aeq,"Flip",A.Dg)
D.bSt=new B.a_(62889,"MaterialIcons",!1)
D.fa8=new B.b3(D.b2O,"Rise",D.bSt)
D.as4=new B.a_(983870,"MaterialIcons",!1)
D.f66=new B.b3(D.aer,"Assemble",D.as4)
D.f6j=new B.b3(D.b2P,"Spin",D.aqz)
D.f6d=new B.b3(D.b2Q,"Pop",A.kc)
D.dxG=w([D.f9M,D.f8J,D.fa8,D.f66,D.f6j,D.f6d],B.at("O<+(Ll,n,a_)>"))
D.aE9=w([A.c4,A.ex,A.bv,A.aH,A.bh,A.bY],x.O)
D.dy6=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dzb=w([3,4.5,5,6,9],x.n)
D.bbn=new B.ab(0,A.G,A.b5,A.J,16)
D.dzE=w([D.bbn],x.V)
D.h_6=new B.B("\ud83e\uddcd",null,R.Lc,null,null,null,null,null,null,null,null,null)
D.cd5=new B.IX(5,null,null,A.bw,A.c4,null,null,null,null)
D.foY=new B.a5(150,null,D.cd5,null)
D.fHh=new B.H(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2p=new B.B("Getting the body ready...",null,D.fHh,null,null,null,null,null,null,null,null,null)
D.h_9=new B.B("Real 3D anatomy, kept on your phone",null,Aa.B6,null,null,null,null,null,null,null,null,null)
D.dzH=w([D.h_6,A.aB,D.foY,A.af,D.h2p,A.ax,D.h_9],x.p)
D.dAg=w(["solar","turbine","crank","pot"],x.s)
D.dAJ=w([0,0.35,0.75,1],x.n)
D.dC8=w(["volts","level","ohms","on"],x.s)
D.dDD=w([A.jM,A.zJ,A.zu,A.qU,A.DC,A.tq,A.zH,A.pC,A.ii,A.oO,A.ho,A.e9,A.hD,A.i0,A.ml,A.kD,A.vc,A.qX,A.lr,A.HO,A.vb,A.Df,A.Dd,A.Qg,A.HN,A.Dq,A.PW,A.arj,H.as0,A.kc],x.x)
D.epJ={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hDs=new C.yL("Switch",F.oL,A.bt,0,"Tap it to turn it ON or OFF.")
D.hDo=new C.yL("Blinker",A.oK,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hDp=new C.yL("AND",D.as4,A.cs,2,"ON only when BOTH inputs are ON.")
D.bU0=new B.a_(63671,"MaterialIcons",!1)
D.hDn=new C.yL("OR",D.bU0,A.bh,2,"ON when EITHER input is ON.")
D.hDq=new C.yL("XOR",Ac.a3t,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hDk=new C.yL("NAND",A.uX,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bT4=new B.a_(63176,"MaterialIcons",!1)
D.hDl=new C.yL("NOR",D.bT4,A.fK,2,"ON only when BOTH inputs are OFF.")
D.hDm=new C.yL("NOT",A0.Du,A.cP,1,"Flips the signal: ON becomes OFF.")
D.hDr=new C.yL("Light",A.lp,A.ex,1,"Glows when its input is ON.")
D.hDt=new C.yL("Buzzer",A.oN,A.bY,1,"Beeps while its input is ON.")
D.An=new B.bq(D.epJ,[D.hDs,D.hDo,D.hDp,D.hDn,D.hDq,D.hDk,D.hDl,D.hDm,D.hDr,D.hDt],B.at("bq<n,yL>"))
D.eru={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.AQ=new C.Kk(0,"tv")
D.fjt=new C.m7("Samsung Neo QLED 8K",D.AQ,F.yv,A.aH)
D.fjj=new C.m7("LG OLED evo G5",D.AQ,A.eo,A.hv)
D.fja=new C.m7("Sony Bravia 9",D.AQ,A.rD,A.bu)
D.fje=new C.m7("Apple TV 4K",D.AQ,A.dY,A.bO)
D.fjb=new C.m7("Bang and Olufsen Beovision",D.AQ,F.BU,F.up)
D.aaN=new C.Kk(1,"iphone")
D.aTv=new C.m7("iPhone 18 Pro Max",D.aaN,D.alz,A.cj)
D.AS=new C.Kk(3,"fold")
D.byk=new B.t(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fjo=new C.m7("iPhone Fold",D.AS,D.byk,A.b8)
D.AR=new C.Kk(2,"android")
D.fjp=new C.m7("Samsung Galaxy S26 Ultra",D.AR,F.YV,A.d9)
D.bqD=new B.t(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fjh=new C.m7("Samsung Galaxy Z Fold7",D.AS,D.bqD,A.cF)
D.fjd=new C.m7("Google Pixel 10 Pro XL",D.AR,A.d_,A.bi)
D.fjl=new C.m7("Xiaomi 16 Ultra",D.AR,A.ic,A.c9)
D.fjg=new C.m7("Huawei Mate 80 Pro Max",D.AR,A.er,A.aA)
D.fjc=new C.m7("OPPO Find X9 Ultra",D.AR,A.ec,A.be)
D.fjv=new C.m7("Honor Magic V5",D.AS,A.dh,A.cs)
D.fji=new C.m7("vivo X300 Pro",D.AR,A.h_,A.cP)
D.aTw=new C.Kk(4,"tablet")
D.fjn=new C.m7("iPad Pro M5",D.aTw,A.d_,A.aH)
D.aaO=new C.Kk(5,"reader")
D.fjw=new C.m7("Kindle Scribe",D.aaO,A.cR,A.bu)
D.xv=new C.Kk(6,"computer")
D.fjm=new C.m7("MacBook Pro M5 Max",D.xv,A.d_,A.cj)
D.fjs=new C.m7("iMac 32 inch",D.xv,A.bO,A.cF)
D.fjk=new C.m7("Pro Display XDR 8K",D.xv,A.ic,A.ba)
D.fjf=new C.m7("Sony Laser Projector",D.xv,A.ct,A.ex)
D.fjq=new C.m7("Luxury car touchscreen",D.xv,M.mX,A.aA)
D.fju=new C.m7("Apple Vision Pro",D.xv,A.cy,A.bh)
D.fjr=new C.m7("Apple Watch Ultra",D.AS,F.BU,A.bv)
D.mv=new B.bq(D.eru,[D.fjt,D.fjj,D.fja,D.fje,D.fjb,D.aTv,D.fjo,D.fjp,D.fjh,D.fjd,D.fjl,D.fjg,D.fjc,D.fjv,D.fji,D.fjn,D.fjw,D.fjm,D.fjs,D.fjk,D.fjf,D.fjq,D.fju,D.fjr],B.at("bq<n,m7>"))
D.d43=w([A.z],x.M)
D.d4t=w([A.ay,A.aC],x.M)
D.dem=w([A.ay,A.z,A.aC],x.M)
D.dg_=w([A.ay,A.lC,A.z,A.lD,A.aC],x.M)
D.duE=w([A.ay,A.lC,A.a5,A.a9,A.lD,A.aC],x.M)
D.dIC=new B.cV([1,D.d43,2,D.d4t,3,D.dem,4,A.aEJ,5,D.dg_,6,D.duE],B.at("cV<G,ai<d7>>"))
D.esg={Calm:0,Box:1,Sleep:2}
D.cLS=w([4,2,6,0],x.n)
D.cLZ=w([4,4,4,4],x.n)
D.cM_=w([4,7,8,0],x.n)
D.TH=new B.bq(D.esg,[D.cLS,D.cLZ,D.cM_],B.at("bq<n,ai<F>>"))
D.epW={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.y4=new C.a1P(0,"source")
D.dfq=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hJR=new C.qB("Clock",A.oK,D.y4,A.bv,D.dfq)
D.hJN=new C.qB("Button",A.Dx,D.y4,A.aQ,A.Z)
D.dzn=w(["random","quick","slow"],x.s)
D.hJY=new C.qB("Dice",A.nL,D.y4,A.c4,D.dzn)
D.bTE=new B.a_(63484,"MaterialIcons",!1)
D.FC=new C.a1P(1,"logic")
D.dEv=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hJU=new C.qB("Delay",D.bTE,D.FC,A.cs,D.dEv)
D.dqR=w(["fast","mid","slow"],x.s)
D.hJZ=new C.qB("Echo",A.ary,D.FC,A.bh,D.dqR)
D.hJW=new C.qB("Every 2nd",A0.Du,D.FC,A.fK,A.Z)
D.bTk=new B.a_(63309,"MaterialIcons",!1)
D.hJT=new C.qB("Every 3rd",D.bTk,D.FC,A.aH,A.Z)
D.cdo=w(["50%","25%","75%"],x.s)
D.hK0=new C.qB("Chance",Al.as6,D.FC,A.cP,D.cdo)
D.rr=new C.a1P(2,"out")
D.hJP=new C.qB("Light",A.lp,D.rr,A.ex,A.Z)
D.hJQ=new C.qB("Burst",A.kc,D.rr,A.c4,A.Z)
D.hJO=new C.qB("Ripple",A.zO,D.rr,A.ba,A.Z)
D.hJX=new C.qB("Ball",A.arK,D.rr,A.cP,A.Z)
D.hJV=new C.qB("Comet",A.oO,D.rr,A.bh,A.Z)
D.bV7=new B.a_(983669,"MaterialIcons",!1)
D.hK_=new C.qB("Shake",D.bV7,D.rr,A.bY,A.Z)
D.hK1=new C.qB("Pop",A.Db,D.rr,A.be,A.Z)
D.hJS=new C.qB("Wash",A.Q_,D.rr,A.pm,A.Z)
D.n8=new B.bq(D.epW,[D.hJR,D.hJN,D.hJY,D.hJU,D.hJZ,D.hJW,D.hJT,D.hK0,D.hJP,D.hJQ,D.hJO,D.hJX,D.hJV,D.hK_,D.hK1,D.hJS],B.at("bq<n,qB>"))
D.eqi={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bB8=new C.fW(20,4,13,!1)
D.bBz=new C.fW(14,5,13.5,!1)
D.bBq=new C.fW(9,2.4,10,!1)
D.bBE=new C.fW(7,5,12.5,!1)
D.bBt=new C.fW(8,3.5,12,!1)
D.bB4=new C.fW(15,2,6,!1)
D.bBC=new C.fW(45,6,13.5,!0)
D.bBk=new C.fW(10,8,13.5,!1)
D.bBc=new C.fW(25,3,12,!0)
D.bBi=new C.fW(35,4,12,!0)
D.bBj=new C.fW(40,4.5,9.5,!0)
D.bBl=new C.fW(55,3,9,!0)
D.bB5=new C.fW(18,3,9,!1)
D.bBB=new C.fW(22,4,13.5,!1)
D.bBu=new C.fW(16,5,13.5,!1)
D.bBg=new C.fW(30,4,9,!0)
D.bBN=new C.fW(5,3.5,13,!1)
D.bBo=new C.fW(25,3,13.5,!0)
D.bBx=new C.fW(14,2.5,9,!1)
D.bBn=new C.fW(6,6,13,!1)
D.bBF=new C.fW(30,1.2,5,!0)
D.bBM=new C.fW(35,3,4.5,!0)
D.bBI=new C.fW(20,4.5,7.5,!0)
D.bBm=new C.fW(55,5.5,13.5,!0)
D.bB3=new C.fW(45,5.5,13.5,!0)
D.bBy=new C.fW(40,5.5,13.5,!0)
D.bBL=new C.fW(60,6,13.5,!0)
D.am4=new C.fW(28,4,7,!0)
D.H2=new C.fW(25,4,7,!0)
D.bBf=new C.fW(30,4,7,!0)
D.bBa=new C.fW(22,4,7,!0)
D.bBb=new C.fW(24,4,7,!0)
D.bBp=new C.fW(60,3,5.5,!0)
D.bB6=new C.fW(18,9,14,!0)
D.bBd=new C.fW(25,9,14,!0)
D.am5=new C.fW(30,8,14,!0)
D.bB9=new C.fW(20,8,14,!0)
D.bBh=new C.fW(30,9,14,!0)
D.bBG=new C.fW(22,5,9.5,!0)
D.bB7=new C.fW(30,2.5,10.5,!0)
D.bBv=new C.fW(50,5.5,13.5,!0)
D.bBK=new C.fW(12,2,9.5,!1)
D.bBs=new C.fW(16,1.3,9.5,!0)
D.bBD=new C.fW(40,2.5,7,!0)
D.bBJ=new C.fW(60,1.2,4.8,!0)
D.bBH=new C.fW(18,5,13.5,!0)
D.bBA=new C.fW(8,2,9.5,!1)
D.bBr=new C.fW(12,2.5,8,!1)
D.bBe=new C.fW(20,3.5,13.5,!0)
D.bBw=new C.fW(3.5,3,13,!1)
D.Ao=new B.bq(D.eqi,[D.bB8,D.bBz,D.bBq,D.bBE,D.bBt,D.bB4,D.bBC,D.bBk,D.bBc,D.bBi,D.bBj,D.bBl,D.bB5,D.bBB,D.bBu,D.bBg,D.bBN,D.bBo,D.bBx,D.bBn,D.bBF,D.bBM,D.bBI,D.bBm,D.bB3,D.bBy,D.bBL,D.am4,D.H2,D.bBf,D.H2,D.bBa,D.H2,D.bBb,D.am4,D.H2,D.bBp,D.bB6,D.bBd,D.am5,D.bB9,D.bBh,D.bBG,D.bB7,D.bBv,D.bBK,D.bBs,D.bBD,D.bBJ,D.H2,D.am5,D.bBH,D.bBA,D.bBr,D.bBe,D.bBw],B.at("bq<n,fW>"))
D.epT={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f5C=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eLq=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eLl=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eXV=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eYS=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eXR=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eJo=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eVM=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f5K=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eZd=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eOQ=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eJ2=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eNS=new B.y("Movement","They pull your legs together and help you balance.")
D.ePO=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eLz=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f31=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f4d=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eVx=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f3X=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eU5=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eZl=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eJ9=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eQb=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eZ0=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eUr=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f44=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eXl=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eJm=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eZX=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f2F=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f0L=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eHm=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eX3=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eX7=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eQW=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eLR=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ePC=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eVX=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f1B=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f5H=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eZi=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eH1=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eW8=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eHW=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f1R=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f2Y=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eWA=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f25=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eJb=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f3B=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eNe=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f1e=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eQA=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eUl=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eZD=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f3L=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f3D=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f3H=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eUU=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f_x=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f0I=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f3n=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eWz=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eSF=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eRn=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eWY=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eZw=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eTb=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eTT=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eNC=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f2U=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eOr=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eHT=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eQV=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eHO=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eMj=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eR_=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eOA=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eZT=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ePR=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f5o=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eRx=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eUM=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eXt=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eOI=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eOt=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dJJ=new B.bq(D.epT,[D.f5C,D.eLq,D.eLl,D.eXV,D.eYS,D.eXR,D.eJo,D.eVM,D.f5K,D.eZd,D.eOQ,D.eJ2,D.eNS,D.ePO,D.eLz,D.f31,D.f4d,D.eVx,D.f3X,D.eU5,D.eZl,D.eJ9,D.eQb,D.eZ0,D.eUr,D.f44,D.eXl,D.eJm,D.eZX,D.f2F,D.f0L,D.eHm,D.eX3,D.eX7,D.eQW,D.eLR,D.ePC,D.eVX,D.f1B,D.f5H,D.eZi,D.eH1,D.eW8,D.eHW,D.f1R,D.f2Y,D.eWA,D.f25,D.eJb,D.f3B,D.eNe,D.f1e,D.eQA,D.eUl,D.eZD,D.f3L,D.f3D,D.f3H,D.eUU,D.f_x,D.f0I,D.f3n,D.eWz,D.eSF,D.eRn,D.eWY,D.eZw,D.eTb,D.eTT,D.eNC,D.f2U,D.eOr,D.eHT,D.eQV,D.eHO,D.eMj,D.eR_,D.eOA,D.eZT,D.ePR,D.f5o,D.eRx,D.eUM,D.eXt,D.eOI,D.eOt],B.at("bq<n,+(n,n)>"))
D.dSC=new C.VP(null)
D.dSP=new C.VQ(null)
D.dUT=new C.VW(null)
D.dVH=new C.Ww(null)
D.dVL=new C.Wx(null)
D.dWj=new C.WF(null)
D.e_b=new C.Xe(null)
D.e08=new C.Xf(null)
D.e4l=new C.Xk(null)
D.eke=new C.Xl(null)
D.ekh=new C.Xp(null)
D.emr=new C.XK(null)
D.ems=new C.a9O(null)
D.eov=new C.XT(null)
D.est=new B.r(0,118)
D.aMV=new B.r(0,13)
D.esu=new B.r(0,17)
D.esx=new B.r(0,330)
D.esE=new B.r(0,-13)
D.esF=new B.r(0,-17)
D.esG=new B.r(0,-18)
D.esH=new B.r(0,-19)
D.esJ=new B.r(0,-28)
D.esL=new B.r(0,-31)
D.esM=new B.r(0,-32)
D.esS=new B.r(-9.5,-11)
D.esV=new B.r(10,20)
D.esY=new B.r(10,-13)
D.et_=new B.r(10,-22)
D.et0=new B.r(10,-4)
D.et4=new B.r(11,0)
D.a9C=new B.r(11,8)
D.eta=new B.r(12,2)
D.etb=new B.r(14,0)
D.etc=new B.r(14,12)
D.aN6=new B.r(14,8)
D.etd=new B.r(14,-17)
D.aN8=new B.r(14,-3)
D.aN9=new B.r(14,-4)
D.etg=new B.r(15,0)
D.eth=new B.r(15,-12)
D.etk=new B.r(16,-8)
D.etl=new B.r(18,14)
D.etm=new B.r(18,-12)
D.aNf=new B.r(20,0)
D.etu=new B.r(20,15)
D.etv=new B.r(20,-17)
D.etw=new B.r(20,-3)
D.etx=new B.r(21,8)
D.etB=new B.r(22,10)
D.aNh=new B.r(22,8)
D.etC=new B.r(24,0)
D.etD=new B.r(24,2)
D.etG=new B.r(24,-18)
D.etH=new B.r(24,-22)
D.etL=new B.r(25,8)
D.etM=new B.r(26,0)
D.etQ=new B.r(28,-30)
D.etX=new B.r(30,18)
D.etY=new B.r(30,2)
D.eu0=new B.r(31,19)
D.eu2=new B.r(32,0)
D.aNl=new B.r(34,0)
D.aNm=new B.r(34,-32)
D.K_=new B.r(36,0)
D.euf=new B.r(3,-1)
D.eui=new B.r(40,3)
D.euw=new B.r(4,11)
D.euz=new B.r(4,-2)
D.euD=new B.r(5,0)
D.euE=new B.r(5,17)
D.euF=new B.r(5,6)
D.euK=new B.r(6,11)
D.euR=new B.r(8,7)
D.euS=new B.r(8,-10)
D.euT=new B.r(8,-14)
D.aNr=new B.r(9,0)
D.ev2=new B.r(-20.5,-17.6)
D.ev3=new B.r(-9,18.5)
D.ev6=new B.r(-2.6,-1)
D.evf=new B.r(2.6,1)
D.evn=new B.r(-9,12.2)
D.evH=new B.r(-9,20.5)
D.ew1=new B.r(-10,0)
D.ew2=new B.r(-10,12)
D.aNy=new B.r(-10,4)
D.ew6=new B.r(-11,0)
D.ew9=new B.r(-11,-2)
D.ewd=new B.r(-13,-5)
D.ewe=new B.r(-14,0)
D.ewf=new B.r(-14,13)
D.ewg=new B.r(-14,2)
D.ewh=new B.r(-14,-12)
D.ewi=new B.r(-14,-19)
D.ewk=new B.r(-14,-23)
D.ewl=new B.r(-15,6)
D.ewo=new B.r(-16,14)
D.ewq=new B.r(-16,-8)
D.ewr=new B.r(-17,10)
D.ews=new B.r(-17,-18)
D.ewt=new B.r(-17,-8)
D.ewv=new B.r(-18,20)
D.eww=new B.r(-18,-9)
D.aNA=new B.r(-20,0)
D.ewy=new B.r(-20,16)
D.ewz=new B.r(-20,-9)
D.UD=new B.r(-22,8)
D.ewA=new B.r(-22,-10)
D.ewB=new B.r(-22,-11)
D.ewC=new B.r(-24,10)
D.ewD=new B.r(-24,11)
D.ewE=new B.r(-24,14)
D.ewF=new B.r(-24,-22)
D.ewH=new B.r(-25,-11)
D.ewI=new B.r(-26,0)
D.ewJ=new B.r(-26,-18)
D.ewK=new B.r(-2,9)
D.ewL=new B.r(-2,-10)
D.ewM=new B.r(-2,-20)
D.ewP=new B.r(-2,-9)
D.ewR=new B.r(-32,0)
D.aNC=new B.r(-34,0)
D.ewW=new B.r(-40,3)
D.ewY=new B.r(-4,11)
D.ewZ=new B.r(-4,-17)
D.ex_=new B.r(-4,-2)
D.ex3=new B.r(-5,0)
D.ex4=new B.r(-5,20)
D.ex5=new B.r(-5,6)
D.ex6=new B.r(-6,26)
D.ex7=new B.r(-6,6)
D.ex8=new B.r(-6,-42)
D.exa=new B.r(-7,-19)
D.exb=new B.r(-7,-24)
D.exe=new B.r(-8,-9)
D.a9L=new B.r(-9,0)
D.exf=new B.r(-9,1)
D.exh=new B.r(-9,-23)
D.fRj=new B.B("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.eyh=new B.D(A.jK,D.fRj,null)
D.h7c=new B.B("Start from a ready-made board",null,A.fF,null,null,null,null,null,null,null,null,null)
D.eyv=new B.D(A4.wF,D.h7c,null)
D.bJd=new B.Q(4,0,4,14)
D.fMr=new B.H(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSj=new B.B("Games and little helpers for a spare minute.",null,D.fMr,null,null,null,null,null,null,null,null,null)
D.eyH=new B.D(D.bJd,D.fSj,null)
D.drt=w([A.hY,A.bj],x.O)
D.aSu=new B.bT(A.z,0.5,A.x,null,0,D.drt,null,null)
D.eFS=new B.bT(A.z,0.5,A.x,null,0,D.aEq,null,null)
D.dhU=w([A.c,A.bP],x.O)
D.eFU=new B.bT(A.z,0.5,A.x,null,0,D.dhU,null,null)
D.dAw=w([A.bO,A.cy],x.O)
D.aSv=new B.bT(A.z,0.5,A.x,null,0,D.dAw,null,null)
D.cVY=w([A.c,A.bO],x.O)
D.eFZ=new B.bT(A.nj,0.5,A.x,null,0,D.cVY,null,null)
D.byo=new B.t(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dyq=w([A.fB,D.byo],x.O)
D.eG3=new B.bT(A.nj,0.5,A.x,null,0,D.dyq,null,null)
D.cP1=w([A.d_,A.ct],x.O)
D.eG4=new B.bT(A.z,0.5,A.x,null,0,D.cP1,null,null)
D.d2X=w([A.fZ,A.aQ,A.d6],x.O)
D.eG7=new B.bT(A.nj,0.5,A.x,null,0,D.d2X,null,null)
D.dsa=w([A.cy,M.mX],x.O)
D.eG8=new B.bT(A.nj,0.5,A.x,null,0,D.dsa,null,null)
D.eGd=new B.bT(A.z,0.5,A.x,null,0,D.aAD,null,null)
D.dBp=w([A.cy,A.i7],x.O)
D.eGl=new B.bT(A.z,0.5,A.x,null,0,D.dBp,null,null)
D.aSA=new B.aP(9,9)
D.eGt=new B.aP(1.4,1.4)
D.fg0=new B.a4(10,-8,18,-2)
D.fg1=new B.a4(14,-14,20,14)
D.fg3=new B.a4(20,-2,30,2)
D.fg8=new B.a4(4,-13,30,-3)
D.fge=new B.a4(8,-7,12,7)
D.fgq=new B.a4(-12,12,12,19)
D.fgr=new B.a4(-12,14,12,22)
D.fgs=new B.a4(-12,-22,12,8)
D.fgt=new B.a4(-12,-25,12,19)
D.fgu=new B.a4(-12,-26,12,-6)
D.fgv=new B.a4(-12,-4,12,14)
D.fgx=new B.a4(-14,20,14,24)
D.fgy=new B.a4(-14,6,14,10)
D.fgz=new B.a4(-14,-17,14,15)
D.fgA=new B.a4(-14,-26,14,18)
D.fgB=new B.a4(-14,-4,14,20)
D.fgD=new B.a4(-15,-29,15,25)
D.fgE=new B.a4(-16,-16,16,16)
D.fgH=new B.a4(-16,-22,-9,18)
D.fgI=new B.a4(-16,-24,16,-10)
D.fgK=new B.a4(-16,-2,16,20)
D.fgM=new B.a4(-18,20,18,24)
D.fgN=new B.a4(-18,-18,18,20)
D.fgO=new B.a4(-20,12,20,22)
D.fgP=new B.a4(-20,-28,20,26)
D.fgQ=new B.a4(-22,14,22,18)
D.aTc=new B.a4(-22,-26,22,24)
D.fgR=new B.a4(-22,-3,22,3)
D.fgS=new B.a4(-22,-4,22,12)
D.fgU=new B.a4(-24,-12,10,22)
D.fgV=new B.a4(-24,-14,22,8)
D.fgW=new B.a4(-24,-6,24,20)
D.aTd=new B.a4(-24,-9,24,9)
D.fgX=new B.a4(-25,14,25,19)
D.fgY=new B.a4(-26,-14,14,8)
D.fgZ=new B.a4(-26,-4,26,20)
D.fh_=new B.a4(-26,-6,4,6)
D.aTe=new B.a4(-28,-13,28,13)
D.fh0=new B.a4(-28,-16,28,16)
D.fh1=new B.a4(-28,-16,28,8)
D.fh2=new B.a4(-28,-22,28,22)
D.fh3=new B.a4(-30,-12,30,14)
D.fh4=new B.a4(-30,-14,0,14)
D.fh5=new B.a4(-30,-18,30,20)
D.fh6=new B.a4(-30,-28,30,14)
D.fh7=new B.a4(-30,-2,30,18)
D.fh8=new B.a4(-30,-4,30,18)
D.fh9=new B.a4(-32,-17,32,17)
D.fha=new B.a4(-32,-28,32,18)
D.fhb=new B.a4(-33,-21,33,17)
D.fhc=new B.a4(-34,14,34,26)
D.aaE=new B.a4(-34,-18,34,18)
D.fhd=new B.a4(-34,-4,34,7)
D.fhe=new B.a4(-36,-24,36,20)
D.fhf=new B.a4(-38,-22,38,22)
D.fhh=new B.a4(-3,12,3,22)
D.fhi=new B.a4(-3,5,3,15)
D.fhm=new B.a4(-46,-34,46,28)
D.fho=new B.a4(-48,-3,48,3)
D.fhr=new B.a4(-6,18,24,24)
D.fhs=new B.a4(-6,5,6,12)
D.fht=new B.a4(-6,-22,6,-15)
D.fhx=new B.a4(-9,-16,9,22)
D.fhy=new B.a4(-4.5,-24,4.5,-21.2)
D.fhA=new B.a4(14,-9,17.5,9)
D.erE={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aUk=new B.db(D.erE,5,x.Q)
D.er7={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.flb=new B.db(D.er7,10,x.Q)
D.fnw=new B.av(24,44)
D.fnU=new B.av(54,38)
D.fo_=new B.av(66,38)
D.bg2=new B.fi(2,null,null,null,null,A.bh,null,null,null,null)
D.fp5=new B.a5(16,16,D.bg2,null)
D.aVo=new B.hN(3,12,12,0.82,null)
D.fBW=new B.H(!0,A.wh,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new B.et("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fBW)
D.fH5=new B.H(!0,A.kO,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwv=new B.et("AI",null,null,A.cN,null,null,null,null,null,null,D.fH5)
D.fwN=new B.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new B.H(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.H(!0,A.cs,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyA=new B.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new B.H(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flV=new B.cT(A.hN,A.dL,6)
D.dl1=w([D.flV],B.at("O<cT>"))
D.fA3=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dl1,null,null,null)
D.fA8=new B.H(!0,A.ew,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAd=new B.H(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new B.H(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new B.H(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBT=new B.H(!0,A.bV,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC_=new B.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new B.H(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD3=new B.H(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD6=new B.H(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aEM,null,null,null)
D.fDd=new B.H(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDW=new B.H(!0,A.bA,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new B.H(!0,A.uB,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new B.H(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFO=new B.H(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new B.H(!0,A.mY,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGM=new B.H(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXA=new B.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHX=new B.H(!0,A.iL,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIg=new B.H(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIO=new B.H(!0,A.be,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKj=new B.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new B.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL6=new B.H(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new B.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new B.H(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMH=new B.H(!0,A.uB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN3=new B.H(!0,A.be,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAg=new B.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNs=new B.B("\u26a0\ufe0f ",null,D.fAg,null,null,null,null,null,null,null,null,null)
D.fNF=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B8,null,null,null,null,null,null,null,null,null)
D.fPi=new B.B("Pick one, then change it and see what happens.",null,A.B8,null,null,null,null,null,null,null,null,null)
D.fBq=new B.H(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQj=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fBq,null,null,null,null,null,null,null,null,null)
D.fFA=new B.H(!0,A.bY,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQN=new B.B("Burnt out! Press Repair.",null,D.fFA,null,null,null,null,null,null,null,null,null)
D.fRV=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fSx=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fTb=new B.B("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fWo=new B.B("5G",null,A_.aWV,null,null,null,null,null,null,null,null,null)
D.fXo=new B.B("Pick how big the screen is on the board",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fIy=new B.H(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXA=new B.B("WHAT HAPPENS",null,D.fIy,null,null,null,null,null,null,null,null,null)
D.fZl=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h_0=new B.B("Change the words and pictures on the three slabs.",null,A.B8,null,null,null,null,null,null,null,null,null)
D.h_d=new B.B("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.h_y=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h07=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h1m=new B.B("\ud83c\udfaf Challenges",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h1T=new B.B("Remove this part",null,Y.aWw,null,null,null,null,null,null,null,null,null)
D.h2b=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fHY=new B.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2t=new B.B("How the Lab works",null,D.fHY,null,null,null,null,null,null,null,null,null)
D.fyN=new B.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2O=new B.B("Electronics Lab",null,D.fyN,null,null,null,null,A.a2,null,1,null,null)
D.h2S=new B.B("?",null,Q.aY6,null,null,null,null,null,null,null,null,null)
D.h4c=new B.B("Ready-made circuits",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h4S=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fLb=new B.H(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8l=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fLb,null,null,null,null,null,null,null,null,null)
D.h9x=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aWu,null,null,null,null,null,null,null,null,null)
D.ha2=new B.B("NGMY",null,A.vR,null,null,null,null,null,null,null,null,null)
D.haf=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Wm,null,null,null,null,null,null,null,null,null)
D.haE=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lY,null,null,null,null,null,null,null,null,null)
D.hbI=new B.B("TOOLBOX",null,A9.ac1,null,null,null,null,null,null,null,null,null)
D.hAa=new B.bg("electronics-part-card",x.W)
D.hAc=new B.bg("device-learn-more",x.W)
D.hAh=new B.bg("device-remote",x.W)
D.hAm=new B.bg("device-picture",x.W)
D.hAQ=new B.bg("electronics-part-about",x.W)
D.hAX=new B.bg("body-loading",x.W)
D.hB2=new B.bg("device-fullscreen",x.W)
D.hBp=new B.bg("core-protocol-back",x.W)
D.hBu=new B.bg("core-protocol-title-frame",x.W)})();(function staticFields(){$.hxl=null
$.hxh=null
$.hxi=null
$.hDN=0
$.i6e=B.T(x.N,B.at("iF"))
$.i6N=B.T(x.N,B.at("iF"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iDZ","bHH",()=>{var v="led"
return B.a([C.aAA("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fug(),v),C.aAA("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fuh(),v),C.aAA("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fui(),v),C.aAA("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fup(),v),C.aAA("Not both","Make the light go OFF only when both switches are ON.",2,new C.fuq(),v),C.aAA("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fur(),"buzzer")],B.at("O<bdM>"))})
w($,"iEq","bHI",()=>B.a([C.Rr("UNIVERSE","Earth, space and gravity",A.Qj,A.aH,new C.fuH()),C.Rr("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.v_,A.aH,new C.fuI()),C.Rr("DISCOVERY LAB","Body Explorer: a real 3D human",D.bSw,A.be,new C.fuJ()),C.Rr("TOOLBOX","Converter, clock, games",H.aqM,A.cP,new C.fuK()),C.Rr("REACTION LAB","Wire parts together",A.DB,A.bv,new C.fuL()),C.Rr("SPARK PAINTER","Paint with light",A.HM,A.c4,new C.fuM()),C.Rr("ROCKET LANDER","Land softly on the pad",A.oO,A.aH,new C.fuN()),C.Rr("TITLE ANIMATOR","Make a moving title",A.x4,A.bt,new C.fuO()),C.Rr("CIRCUIT LAB","Connect logic, learn it",A.a3S,A.cs,new C.fuP())],B.at("O<bw4>")))
w($,"iG9","qL",()=>{var v,u,t=B.T(x.N,x.C)
for(v=0;v<76;++v){u=D.T_[v]
t.n(0,u.a,u)}return t})
w($,"iE_","ajs",()=>B.a([C.Gv("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fus()),C.Gv("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fut()),C.Gv("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fuu()),C.Gv("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fuv()),C.Gv("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fuw()),C.Gv("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fuj()),C.Gv("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fuk()),C.Gv("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.ful()),C.Gv("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fum()),C.Gv("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fun()),C.Gv("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fuo())],B.at("O<bdN>")))
w($,"iEs","hN7",()=>B.a([C.a2l("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c9,new C.fuX()),C.a2l("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bY,A.bD,new C.fuY()),C.a2l("Breathe","Calm down in a minute","\ud83e\udee7",A.fK,A.cF,new C.fuZ()),C.a2l("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b8,new C.fv_()),C.a2l("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fv0()),C.a2l("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bi,new C.fv1()),C.a2l("Tip & Split","Share the bill","\ud83e\uddfe",A.be,A.b2,new C.fv2()),C.a2l("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bh,A.aD,new C.fv3())],B.at("O<bxo>")))})()};
(a=>{a["taZJhpR4IpU+gsG/L5g+urqDf7s="]=a.current})($__dart_deferred_initializers__);