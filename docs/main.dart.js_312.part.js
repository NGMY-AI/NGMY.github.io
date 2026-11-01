((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A9,A1,A2,I,P,A3,Aa,A4,A5,G,Ab,A6,Ac,Y,Ad,Ae,Q,N,Af,Ag,Z,O,V,Ah,Ai,R,M,Aj,W,K,S,Ak,E,F,L,B={
bzk(d){return B.hTR(d)},
hTR(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzk=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qT(C.n7(""),d,A.hG,null,null).d8(0,A.Yx),$async$bzk)
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
return C.i($async$bzk,v)},
i4x(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qj[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cT(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h1(D.Qj,new B.fzd())
if(w==null)w=A.d.gI(D.Qj)
s=C.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.qj().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajS(w.a,w.b,m,w,s,!1)},
hZb(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.QK,new B.fp3(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
icn(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cH(b2,"{")
v=A.a.oG(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aL(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.u(J.q(q,"kind"))
o=C.u(J.q(q,"id"))
if(!$.qj().ai(0,p)||J.f4(s,o)||J.ad(t)>=8)continue
J.cf(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dkc[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dU(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dU(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cf(t,new C.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.u(J.q(g,0))
e=C.u(J.q(g,2))
d=A.o.D(A.k.N(C.dU(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dU(J.q(g,3))),0,1)
if(J.f4(s,f)&&J.f4(s,e)&&!J.A(f,e))J.cf(i,new C.cz([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cw:a0)
while(a0.C()){a2=a0.gR(a0)
J.cf(a1,C.u(a2))}a3=a1
a0=J.q(u,"title")
a0=C.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mC(a0,C.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.u(a5==null?"":a5)
return new B.ajS(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i37(d){var w,v,u=B.h8W()
d.B(u)
for(w=0;w<60;++w)u.v8(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.fvZ(u))&&!A.d.d7(v,new B.fw_())},
i36(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qj().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.diu,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(C.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hSq(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i4w(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qj().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QK[u]
if(A.d.b4(w,new B.fza(s)))if(!C.cT(r,s.b.toLowerCase(),0))v=C.cT(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fzb(e),C.S(w).k("a_<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cJ(w,0,new B.fzc())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qj().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajS:function ajS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzd:function fzd(){},
fp3:function fp3(){},
fvZ:function fvZ(d){this.a=d},
fw_:function fw_(){},
fza:function fza(d){this.a=d},
fzb:function fzb(d){this.a=d},
fzc:function fzc(){},
Vq:function Vq(d,e){this.c=d
this.a=e},
bjX:function bjX(d,e,f,g,h){var _=this
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
e9v:function e9v(d){this.a=d},
e9w:function e9w(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9E:function e9E(d){this.a=d},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e,f){this.a=d
this.b=e
this.c=f},
e9F:function e9F(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9A:function e9A(d){this.a=d},
e9B:function e9B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9G:function e9G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9z:function e9z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9M:function e9M(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9P:function e9P(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9R:function e9R(d,e){this.a=d
this.b=e},
bzF(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQy,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hmq(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zW,A.L,w,w),A.aB,C.bS(A.fJ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wq,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G5:function G5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VT:function VT(d){this.a=d},
aEb:function aEb(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
epC:function epC(){},
epW:function epW(d){this.a=d},
epV:function epV(d,e){this.a=d
this.b=e},
epX:function epX(){},
epY:function epY(){},
epE:function epE(d,e,f){this.a=d
this.b=e
this.c=f},
epD:function epD(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d){this.a=d},
epB:function epB(d){this.a=d},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
epq:function epq(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epH:function epH(d){this.a=d},
epM:function epM(d){this.a=d},
epG:function epG(d){this.a=d},
epN:function epN(d){this.a=d},
epO:function epO(d){this.a=d},
epF:function epF(d){this.a=d},
epQ:function epQ(d,e){this.a=d
this.b=e},
epJ:function epJ(d,e){this.a=d
this.b=e},
epR:function epR(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
epI:function epI(d){this.a=d},
bgW:function bgW(d,e){this.b=d
this.a=e},
aM2:function aM2(){},
bxj:function bxj(){},
cGy(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cGy=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qW().jI(0,"assets/data/body3d.bin"),$async$cGy)
case 3:d=a1
$.hhL=J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aSd(d)
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
e=D.d7r[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a33(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aZ6))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.ba2(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cGy,v)},
aS0:function aS0(d,e,f){this.a=d
this.b=e
this.c=f},
a33:function a33(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ba2:function ba2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ug:function Ug(d){this.a=d},
aCB:function aCB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ft$=s
_.l7$=t
_.fX$=u
_.fu$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dGu:function dGu(d){this.a=d},
dGt:function dGt(d,e){this.a=d
this.b=e},
dG6:function dG6(d,e){this.a=d
this.b=e},
dG7:function dG7(){},
dGv:function dGv(){},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG9:function dG9(d){this.a=d},
dGa:function dGa(){},
dGb:function dGb(d){this.a=d},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGc:function dGc(d){this.a=d},
dG3:function dG3(d,e,f){this.a=d
this.b=e
this.c=f},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGl:function dGl(d,e){this.a=d
this.b=e},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGp:function dGp(d){this.a=d},
dGh:function dGh(d){this.a=d},
dGq:function dGq(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGe:function dGe(d){this.a=d},
aL4:function aL4(){},
aL5:function aL5(){},
c1K:function c1K(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c1L:function c1L(d,e){this.a=d
this.b=e},
c1M:function c1M(d){this.a=d},
ay5(d,e,f,g,h){return new B.baL(d,e,f,g,h)},
h_A(d,e,f,g,h,i){return $.hPO.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.cNk(d,e,f,i,g,h))},
y9:function y9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cn:function Cn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
baL:function baL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiG:function fiG(){},
fiH:function fiH(){},
fiI:function fiI(){},
fiP:function fiP(){},
fiQ:function fiQ(){},
fiR:function fiR(){},
Um:function Um(d){this.a=d},
aCE:function aCE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ft$=m
_.l7$=n
_.fX$=o
_.fu$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dIF:function dIF(d){this.a=d},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIm:function dIm(){},
dIG:function dIG(){},
dIh:function dIh(d,e){this.a=d
this.b=e},
dIi:function dIi(d,e){this.a=d
this.b=e},
dIn:function dIn(d,e,f){this.a=d
this.b=e
this.c=f},
dIc:function dIc(){},
dId:function dId(){},
dIe:function dIe(d){this.a=d},
dIf:function dIf(d,e){this.a=d
this.b=e},
dIg:function dIg(d,e,f){this.a=d
this.b=e
this.c=f},
dIo:function dIo(){},
dIp:function dIp(d,e){this.a=d
this.b=e},
dIq:function dIq(d){this.a=d},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIk:function dIk(d){this.a=d},
dIb:function dIb(d,e,f){this.a=d
this.b=e
this.c=f},
dIz:function dIz(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIA:function dIA(d){this.a=d},
dIx:function dIx(d){this.a=d},
dIv:function dIv(d){this.a=d},
dIw:function dIw(d){this.a=d},
dIu:function dIu(d){this.a=d},
dIr:function dIr(d){this.a=d},
dIt:function dIt(d){this.a=d},
dIB:function dIB(d,e){this.a=d
this.b=e},
dIC:function dIC(d,e){this.a=d
this.b=e},
dID:function dID(d){this.a=d},
dIs:function dIs(d){this.a=d},
dIE:function dIE(d,e){this.a=d
this.b=e},
bb3:function bb3(d,e){this.b=d
this.a=e},
cNk:function cNk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLa:function aLa(){},
bx2:function bx2(){},
hGF(){return new B.Nl(null)},
oG(d,e,f,g,h){return new B.bsD(d,e,f,g,h)},
br2(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
h05(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nl:function Nl(d){this.a=d},
Ko:function Ko(d,e){this.a=d
this.b=e},
AA:function AA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCV:function aCV(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOu:function dOu(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOw:function dOw(d){this.a=d},
bsD:function bsD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fj6:function fj6(){},
fj7:function fj7(){},
fj8:function fj8(){},
fjj:function fjj(){},
fjl:function fjl(){},
fjm:function fjm(){},
fjn:function fjn(){},
fjo:function fjo(){},
fjp:function fjp(){},
fjq:function fjq(){},
fjr:function fjr(){},
fj9:function fj9(){},
fja:function fja(){},
fjb:function fjb(){},
fjc:function fjc(){},
fjd:function fjd(){},
fje:function fje(){},
fjf:function fjf(){},
fjg:function fjg(){},
fjh:function fjh(){},
fji:function fji(){},
fjk:function fjk(){},
br3:function br3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_j:function f_j(d){this.a=d},
f_i:function f_i(d,e){this.a=d
this.b=e},
f_g:function f_g(d){this.a=d},
f_k:function f_k(d){this.a=d},
f_h:function f_h(d,e){this.a=d
this.b=e},
aeU:function aeU(d,e,f){this.c=d
this.d=e
this.a=f},
adM:function adM(d,e,f){this.c=d
this.d=e
this.a=f},
Q2:function Q2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bs1:function bs1(d,e){this.b=d
this.a=e},
brx:function brx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9K:function b9K(d,e){this.b=d
this.a=e},
aHa:function aHa(d,e){this.c=d
this.a=e},
aHb:function aHb(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b5$=f
_.c=_.a=null},
f__:function f__(d){this.a=d},
eZZ:function eZZ(d){this.a=d},
eZY:function eZY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZX:function eZX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZV:function eZV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZU:function eZU(d,e,f){this.a=d
this.b=e
this.c=f},
eZW:function eZW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZT:function eZT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_7:function f_7(d){this.a=d},
f_6:function f_6(d){this.a=d},
f_8:function f_8(d,e){this.a=d
this.b=e},
f_9:function f_9(d,e){this.a=d
this.b=e},
f_a:function f_a(d,e){this.a=d
this.b=e},
f_5:function f_5(d,e,f){this.a=d
this.b=e
this.c=f},
f_b:function f_b(d,e,f){this.a=d
this.b=e
this.c=f},
f_4:function f_4(d){this.a=d},
f_0:function f_0(d){this.a=d},
f_c:function f_c(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_3:function f_3(d,e){this.a=d
this.b=e},
f_e:function f_e(d,e){this.a=d
this.b=e},
f_2:function f_2(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_1:function f_1(d,e){this.a=d
this.b=e},
eZR:function eZR(){},
eZS:function eZS(){},
bqG:function bqG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq7:function bq7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bap:function bap(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq9:function bq9(d,e,f){this.b=d
this.c=e
this.a=f},
bu7:function bu7(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMU:function aMU(){},
hnQ(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.v(w,0)),u=e.aC(0,new C.v(w,0)),t=1-f,s=3*t
return d.aH(0,t*t*t).ad(0,v.aH(0,s*t*f)).ad(0,u.aH(0,s*f*f)).ad(0,e.aH(0,f*f*f))},
bgV(d,e,f,g,h,i){return $.hQo.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.dij(d,e,f,i,g,h))},
a0h:function a0h(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qN:function qN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cr:function Cr(d,e){this.a=d
this.b=e},
Zf:function Zf(d,e){this.a=d
this.b=e},
aeK:function aeK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0u:function a0u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CB:function CB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abD:function abD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abU:function abU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adQ:function adQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgT:function bgT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bI$=0},
din:function din(d){this.a=d},
dio:function dio(d){this.a=d},
dik:function dik(d,e){this.a=d
this.b=e},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
dip:function dip(d){this.a=d},
diq:function diq(d){this.a=d},
dir:function dir(d){this.a=d},
dis:function dis(d){this.a=d},
dit:function dit(d){this.a=d},
diu:function diu(d){this.a=d},
div:function div(d){this.a=d},
diw:function diw(d){this.a=d},
dix:function dix(d){this.a=d},
FR:function FR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VS:function VS(d){this.a=d},
aEa:function aEa(d,e,f,g,h,i,j){var _=this
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
_.a9$=j
_.c=_.a=null},
eoX:function eoX(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoO:function eoO(){},
eoP:function eoP(){},
eoS:function eoS(){},
eoT:function eoT(d,e,f){this.a=d
this.b=e
this.c=f},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoQ:function eoQ(){},
eoR:function eoR(d){this.a=d},
epm:function epm(d){this.a=d},
eoW:function eoW(){},
eoI:function eoI(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
eoY:function eoY(d){this.a=d},
ep0:function ep0(){},
ep_:function ep_(d,e){this.a=d
this.b=e},
eoL:function eoL(){},
eoJ:function eoJ(d){this.a=d},
eoK:function eoK(d){this.a=d},
epk:function epk(d){this.a=d},
epj:function epj(d){this.a=d},
epl:function epl(d){this.a=d},
epa:function epa(d,e){this.a=d
this.b=e},
epi:function epi(d){this.a=d},
epg:function epg(d){this.a=d},
eph:function eph(d){this.a=d},
epf:function epf(d){this.a=d},
epe:function epe(d){this.a=d},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
eoN:function eoN(){},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep5:function ep5(d){this.a=d},
ep8:function ep8(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep9:function ep9(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep1:function ep1(d,e){this.a=d
this.b=e},
bgU:function bgU(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dij:function dij(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aM0:function aM0(){},
blt:function blt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PU:function PU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W6:function W6(d){this.a=d},
bkx:function bkx(d,e,f,g,h,i,j,k){var _=this
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
_.a9$=k
_.c=_.a=null},
eB1:function eB1(d){this.a=d},
eB_:function eB_(d){this.a=d},
eB0:function eB0(){},
eAD:function eAD(){},
eAC:function eAC(){},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAO:function eAO(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAN:function eAN(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAL:function eAL(d,e){this.a=d
this.b=e},
eAW:function eAW(d){this.a=d},
eAK:function eAK(d){this.a=d},
eAX:function eAX(d,e){this.a=d
this.b=e},
eAJ:function eAJ(d,e){this.a=d
this.b=e},
eAY:function eAY(d){this.a=d},
eAI:function eAI(d,e){this.a=d
this.b=e},
eAZ:function eAZ(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAR:function eAR(d,e){this.a=d
this.b=e},
eAE:function eAE(d,e){this.a=d
this.b=e},
brX:function brX(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wi:function Wi(d){this.a=d},
aEq:function aEq(d,e,f,g){var _=this
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
_.a9$=g
_.c=_.a=null},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHC:function eHC(d,e,f){this.a=d
this.b=e
this.c=f},
eHD:function eHD(d){this.a=d},
eHA:function eHA(){},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e){this.a=d
this.b=e},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHG:function eHG(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHI:function eHI(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
aM9:function aM9(){},
aMf:function aMf(){},
a_M:function a_M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VP:function VP(d){this.a=d},
aE2:function aE2(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
els:function els(d){this.a=d},
elt:function elt(d,e){this.a=d
this.b=e},
elg:function elg(d,e){this.a=d
this.b=e},
elh:function elh(d){this.a=d},
ele:function ele(d){this.a=d},
elf:function elf(d){this.a=d},
eld:function eld(d){this.a=d},
eli:function eli(d){this.a=d},
elc:function elc(d,e){this.a=d
this.b=e},
elk:function elk(d){this.a=d},
elb:function elb(d,e){this.a=d
this.b=e},
ell:function ell(d){this.a=d},
ela:function ela(d,e){this.a=d
this.b=e},
elm:function elm(d){this.a=d},
el9:function el9(d){this.a=d},
eln:function eln(d){this.a=d},
el8:function el8(d){this.a=d},
elo:function elo(d){this.a=d},
el7:function el7(d){this.a=d},
elp:function elp(d){this.a=d},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
el6:function el6(d){this.a=d},
elj:function elj(d){this.a=d},
blg:function blg(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abK:function abK(d,e,f){this.a=d
this.b=e
this.c=f},
Wd:function Wd(d){this.a=d},
bkC:function bkC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH1:function eH1(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGT:function eGT(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGW:function eGW(d){this.a=d},
eGM:function eGM(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGZ:function eGZ(d){this.a=d},
eGG:function eGG(d,e){this.a=d
this.b=e},
eH_:function eH_(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eGE:function eGE(d,e){this.a=d
this.b=e},
bsP:function bsP(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
acc:function acc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Uk:function Uk(d){this.a=d},
aCD:function aCD(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dHO:function dHO(d){this.a=d},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHP:function dHP(){},
dHQ:function dHQ(d){this.a=d},
dHE:function dHE(d,e){this.a=d
this.b=e},
dHH:function dHH(d){this.a=d},
dHG:function dHG(d,e){this.a=d
this.b=e},
dHF:function dHF(d,e){this.a=d
this.b=e},
dHL:function dHL(d,e,f){this.a=d
this.b=e
this.c=f},
dHK:function dHK(d){this.a=d},
dHI:function dHI(d){this.a=d},
dHJ:function dHJ(d){this.a=d},
dHM:function dHM(d){this.a=d},
baK:function baK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cMS:function cMS(d){this.a=d},
aL8:function aL8(){},
bx1:function bx1(){},
aLY:function aLY(){},
bxi:function bxi(){},
aMc:function aMc(){},
bxq:function bxq(){},
FN:function FN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
ad1:function ad1(d,e,f){this.a=d
this.b=e
this.c=f},
VJ:function VJ(d){this.a=d},
bkb:function bkb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
egW:function egW(d,e){this.a=d
this.b=e},
ehk:function ehk(d){this.a=d},
eh9:function eh9(d){this.a=d},
eh0:function eh0(d){this.a=d},
eha:function eha(d,e){this.a=d
this.b=e},
ehb:function ehb(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh8:function eh8(d){this.a=d},
eh6:function eh6(d){this.a=d},
ehc:function ehc(d,e){this.a=d
this.b=e},
eh5:function eh5(d,e){this.a=d
this.b=e},
ehd:function ehd(d,e){this.a=d
this.b=e},
eh4:function eh4(d,e){this.a=d
this.b=e},
ehe:function ehe(d,e){this.a=d
this.b=e},
eh3:function eh3(d,e){this.a=d
this.b=e},
ehf:function ehf(d){this.a=d},
eh2:function eh2(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
eh1:function eh1(d){this.a=d},
ehh:function ehh(d){this.a=d},
egZ:function egZ(d){this.a=d},
ehi:function ehi(d){this.a=d},
egY:function egY(d){this.a=d},
ehj:function ehj(d){this.a=d},
egX:function egX(d){this.a=d},
bhO:function bhO(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adx:function adx(d,e){this.a=d
this.b=e
this.c=-1000},
VO:function VO(d){this.a=d},
aE1:function aE1(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ekQ:function ekQ(d,e){this.a=d
this.b=e},
ekR:function ekR(d,e,f){this.a=d
this.b=e
this.c=f},
ekY:function ekY(d){this.a=d},
ekX:function ekX(d){this.a=d},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
el_:function el_(d){this.a=d},
ekW:function ekW(d){this.a=d},
el0:function el0(d){this.a=d},
ekV:function ekV(d,e){this.a=d
this.b=e},
el1:function el1(d,e){this.a=d
this.b=e},
ekU:function ekU(d,e){this.a=d
this.b=e},
el2:function el2(d,e){this.a=d
this.b=e},
ekT:function ekT(d,e){this.a=d
this.b=e},
el3:function el3(d){this.a=d},
el4:function el4(d){this.a=d},
ekS:function ekS(d){this.a=d},
el5:function el5(d){this.a=d},
blh:function blh(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLW:function aLW(){},
bxg:function bxg(){},
aLX:function aLX(){},
bxh:function bxh(){},
feY(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8P,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i7,w,w,1/0)},
i4W(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdM(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e2(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bM(0,new B.fzv(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.wh.h(0,d[n]).a)return!1
m=C.ew([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h2H(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cH(w,v[0])*16+A.a.cH(w,v[1])*4+A.a.cH(w,v[2])]},
tl:function tl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9D:function b9D(d,e){this.a=d
this.b=e},
fzv:function fzv(d,e){this.a=d
this.b=e},
VM:function VM(d){this.a=d},
aE_:function aE_(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ekk:function ekk(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ek6:function ek6(d,e){this.a=d
this.b=e},
ek0:function ek0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ek1:function ek1(d){this.a=d},
ek5:function ek5(d,e){this.a=d
this.b=e},
ek4:function ek4(d,e){this.a=d
this.b=e},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d,e){this.a=d
this.b=e},
eke:function eke(){},
ekf:function ekf(d){this.a=d},
ekd:function ekd(d){this.a=d},
ekg:function ekg(d){this.a=d},
ekc:function ekc(d){this.a=d},
eka:function eka(d){this.a=d},
ekb:function ekb(d,e){this.a=d
this.b=e},
ek7:function ek7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ek9:function ek9(d){this.a=d},
ekh:function ekh(d,e){this.a=d
this.b=e},
ek8:function ek8(d,e){this.a=d
this.b=e},
eki:function eki(d,e){this.a=d
this.b=e},
biv:function biv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqt:function dqt(d,e){this.a=d
this.b=e},
UJ:function UJ(d){this.a=d},
bjr:function bjr(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dQz:function dQz(d){this.a=d},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQn:function dQn(){},
dQp:function dQp(d){this.a=d},
dQm:function dQm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQx:function dQx(){},
dQs:function dQs(){},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQq:function dQq(d){this.a=d},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
UZ:function UZ(d){this.a=d},
aD6:function aD6(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bt$=g
_.a9$=h
_.c=_.a=null},
dTo:function dTo(d){this.a=d},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTb:function dTb(){},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTc:function dTc(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTh:function dTh(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTi:function dTi(d){this.a=d},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d){this.a=d},
bdP:function bdP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d5A:function d5A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d5C:function d5C(d,e,f){this.a=d
this.b=e
this.c=f},
d5B:function d5B(d,e){this.a=d
this.b=e},
aLm:function aLm(){},
bAa(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8P,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i7,w,w,1/0)},
fsv(d,e,f,g,h){var w,v,u=null,t=C.fZ(u,u,u,u,C.d0(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dO,A.c3)
t.en()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.v(v/2,w.gbc(w)/2))
t.a3(d,w)},
i1Y(){var w,v,u,t,s,r,q,p,o=new C.eE()
o.dt(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.am(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.av(5)
if(r.L(0,p))q.push(new C.z(p,1+o.av(2+A.o.am(t,3))))}A.d.aZ(q,new B.ftv())
w.push(new B.aRQ(q))}return w},
a1I(d,e){var w,v,u,t
for(w=new C.Xl(d),v="";w.C();){u=C.jK(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jK(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ieL(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Xl(d),v=0,u="";w.C();){t=C.jK(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jK(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRQ:function aRQ(d){this.a=d},
bGa:function bGa(){},
ftv:function ftv(){},
Ub:function Ub(d){this.a=d},
bj5:function bj5(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dDZ:function dDZ(){},
dEb:function dEb(d){this.a=d},
dEa:function dEa(d,e,f){this.a=d
this.b=e
this.c=f},
dEc:function dEc(d){this.a=d},
dE9:function dE9(d,e){this.a=d
this.b=e},
dE_:function dE_(d,e){this.a=d
this.b=e},
dE4:function dE4(){},
dE5:function dE5(d){this.a=d},
dE3:function dE3(d){this.a=d},
dE6:function dE6(d,e){this.a=d
this.b=e},
dE2:function dE2(d,e){this.a=d
this.b=e},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE1:function dE1(d,e){this.a=d
this.b=e},
dE8:function dE8(d){this.a=d},
dE0:function dE0(d){this.a=d},
b9P:function b9P(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cFp:function cFp(d,e){this.a=d
this.b=e},
Vc:function Vc(d){this.a=d},
bjD:function bjD(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dXr:function dXr(d){this.a=d},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXs:function dXs(d){this.a=d},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXh:function dXh(d,e,f){this.a=d
this.b=e
this.c=f},
dXl:function dXl(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXj:function dXj(d,e){this.a=d
this.b=e},
dXn:function dXn(d){this.a=d},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXo:function dXo(d,e){this.a=d
this.b=e},
bfi:function bfi(d,e,f){this.b=d
this.c=e
this.a=f},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddB:function ddB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ul:function Ul(d){this.a=d},
bji:function bji(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dIa:function dIa(d){this.a=d},
dI9:function dI9(d,e){this.a=d
this.b=e},
dHT:function dHT(){},
dI1:function dI1(d){this.a=d},
dI0:function dI0(){},
dI2:function dI2(d){this.a=d},
dI_:function dI_(){},
dI3:function dI3(d){this.a=d},
dHZ:function dHZ(d){this.a=d},
dI4:function dI4(d){this.a=d},
dHY:function dHY(d){this.a=d},
dI5:function dI5(d){this.a=d},
dHX:function dHX(d){this.a=d},
dI6:function dI6(d,e){this.a=d
this.b=e},
dHW:function dHW(d,e){this.a=d
this.b=e},
dI7:function dI7(d){this.a=d},
dHV:function dHV(d,e){this.a=d
this.b=e},
dI8:function dI8(d){this.a=d},
dHU:function dHU(d,e){this.a=d
this.b=e},
aL0:function aL0(){},
aLu:function aLu(){},
hsV(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcn()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h8W(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4p(w,v,u,A.cH,C.U(x.N,x.y))},
hAw(d,e,f){var w=d.c,v=e===0?-1:1
return new C.v(w*f.a+v*B.h8X(d),d.d*f.b)},
h8X(d){return 42+(D.m4.ai(0,d.b)?(d.ch-1)*38:0)},
ed:function ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ty:function ty(d,e,f,g){var _=this
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
aai:function aai(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abp:function abp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4p:function a4p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMB:function bMB(){},
bMM:function bMM(d){this.a=d},
bMH:function bMH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMN:function bMN(d){this.a=d},
bMO:function bMO(d){this.a=d},
bMQ:function bMQ(d){this.a=d},
bMR:function bMR(d){this.a=d},
bMP:function bMP(d){this.a=d},
bMS:function bMS(d,e,f){this.a=d
this.b=e
this.c=f},
bMT:function bMT(d){this.a=d},
bMD:function bMD(d){this.a=d},
bME:function bME(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMF:function bMF(d,e,f){this.a=d
this.b=e
this.c=f},
bMG:function bMG(d){this.a=d},
bMA:function bMA(d){this.a=d},
bMU:function bMU(d,e){this.a=d
this.b=e},
bMI:function bMI(d,e){this.a=d
this.b=e},
bML:function bML(d){this.a=d},
bMK:function bMK(d){this.a=d},
bMJ:function bMJ(d){this.a=d},
aiF:function aiF(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHo:function bHo(){},
bHp:function bHp(){},
mC:function mC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cm5:function cm5(d){this.a=d},
icj(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fKS(),c9=new B.fKU(),d0=new B.fKV(),d1=new B.fKT(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a8(w.a,w.b,w.c,w.d),A.bL,A.bK))
d3.bE(D.eaN,D.e8A,c9.$2(A.dB,1.4))
d3.bE(D.e8q,D.e8p,c9.$2(A.br,2.4))
d3.bE(D.e8r,Y.aHn,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Rx
d3.af(D.e8a,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.v(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aNd,A.aQ,A.cs))
d3.af(A.cJ,16,c8.$1(A.br))
d3.af(A.cJ,13,c8.$1(c7?A.aO.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.jc(0,d4.y*0.6)
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
r.delete()}}d3.af(D.eaJ,2.4,c8.$1(c7?A.bc:A.ak))
d3.af(D.ebq,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.ee))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bE())
d3.aR(q,c8.$1(A.f9.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.av.j(0.7)))}d3.aR(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.jc(0,d4.y)
d3.bE(D.a5S,D.aHD,c9.$2(A.bN,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f1).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.iu,3,c8.$1(c7?A.bc:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3C[m]
r=c9.$2(A.br,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.ce(A.J,6,24+Math.sin(d4.y*3)*4)
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
w.F(new C.bE())
d3.aR(w,d1.$3(D.ePW,A.aM,A.d6))
d3.b_(D.ePl,c8.$1(A.dt))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.jc(0,d4.y*2)
d3.bE(A.J,D.e8u,c9.$2(A.bN,2.4))
d3.bE(A.a5R,D.e8t,c9.$2(A.hP,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dR.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.bM.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.eQ1,A.bn,A.cp))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aR(k,c8.$1(A.ee))
d3.af(D.e8y,7,c8.$1(c7?A.c:A.dt))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.mn))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bl(d5*17),3)!==0
else j=!1
i=j?A.bU:D.bj8
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bU.j(0.35))
t.z=A.lA
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.eaT,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.eQ7,A.bN,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.jc(0,d4.y*0.5)
d3.hZ(C.ce(A.J,7,22),c8.$1(A.d6))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.mn))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.E(A.k.bl(d5),60)),2,"0"),D.e8z,A.aZ,6.5)
d3.af(D.e8L,4,c8.$1(A.dt))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Sm,10,c8.$1(c7?A.bH:A.br))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.jc(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ebs,A.c,16)
d2.restore()
d3.af(A.ke,6,c8.$1(A.d_))
d3.af(A.ke,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bW(A.Sm,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.eaS,D.ebo,c9.$2(A.br,4))
d2=d3.a
J.by(d2.save())
d3.jc(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.ePX,A.bN,A.ak))
d3.af(D.aHp,8,c8.$1(A.aw))
d3.af(D.aHp,4.5,c8.$1(c7?A.aO:A.cp))
d3.af(D.eaQ,2.2,c8.$1(c7&&A.o.E(A.k.bl(d5*1.6),2)===0?A.av:A.ku))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eb0,A.av,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.eQ4,A.j0,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.v(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b_(new C.a8(-18,t,-15.6,t+8),c8.$1(A.aZ))
d2=-9+Math.sin(d2-0.4)*6
d3.b_(new C.a8(15.6,d2,18,d2+8),c8.$1(A.bU))}d3.af(D.eaM,4,c8.$1(A.aW))
d3.af(D.e8v,2.4,c8.$1(A.av))
d3.af(D.e8I,2.4,c8.$1(A.bc))
return!0
case"heartmon":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(A.aw))
d3.aE(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
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
if(p!=null)s.bD(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bD(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aR(h,c9.$2(A.aZ,1.8))
d6.$5(d3,"72",D.e8w,A.h4,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eb4,A.h4.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.eaV,3,c8.$1(c7?A.bc:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b_(D.ePZ,c8.$1(F.tp))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.ti(0,-1,1)
d3.hZ(C.ce(A.J,8,14),c8.$1(A.ct))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.cc))
d3.af(D.e9c,1.2,c8.$1(A.w))
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
e.F(new C.bE())
d3.aR(e,d1.$3(D.eQs,A.c,A.bz))
d3.b_(D.eQr,c8.$1(c7?A.dR:A.br))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aR(s,c8.$1(A.es))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dR.j(0.45)))
d2=c8.$1(A.dR.j(0.35))
d2.z=A.Rx
d3.af(D.e8b,14,d2)}return!0
case"discoball":d3.bE(D.e8g,K.aHl,c9.$2(A.dt,1.4))
d3.af(A.J,16,d1.$3(D.ePK,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.ds,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.ds,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d8p[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.ePI,A.cs,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.ePB,A.aL,A.bK))
d3.bE(D.e8f,D.e8h,c9.$2(A.br,1.6))
d3.af(D.e8i,2.2,c8.$1(c7?A.av:A.br))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3E[m]
if(c7)t=a1?A.b8:A.f3
else t=A.cp
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.jc(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a5O,c9.$2(A.bK,4))
d2.restore()
d3.bE(D.eaF,D.eaZ,c9.$2(A.bK,4))
d3.b_(D.eQq,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayl[m]+1,d2,10,14,2)
p=C.aq(A.bM,A.d6,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.ePY,A.bN,A.bn))
for(m=0;m<2;++m){l=D.ayl[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.aw).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mJ
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bE(D.e8P,D.e95,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mS(1,a3,0.8,1).iM():A.ee
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mJ
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dt))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.ePN,A.cA,A.Li))
d3.af(D.eb5,8,c8.$1(A.qX))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.jc(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f9,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aR(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fW).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e9E,3.2,c8.$1(A.fW.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.jc(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.eQ_,A.iX,A.ts))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.ee))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mJ
d3.af(D.e8K,8,d2)}return!0
case"headphones":d3.fa(C.ce(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QX[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a8(s,0,s+14,20),A.bu,A.oK).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bW(new C.v(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eD.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.v(-4,-8-A.k.E(d5*14,8)),A.kp,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.ePG,A.dt,A.ee))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.T(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aX(A.o.u(C.h4(a4)),2,"0"),D.e8m,A.aZ,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Ew,A.h4,g)
d2.toString
d6.$5(d3,"\u2665",new C.v(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bl(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.mn))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.oP(),!0)
d2.translate(-27,-19)
E.Le(d3,D.eWf,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vs))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a8(a6.a,a6.b,a6.c,a6.d),A.dM,A.d5))
d3.aE(a6,c9.$2(A.b_,1.2))
d3.af(D.aHK,9,c8.$1(A.aw))
d3.af(D.aHK,6,c9.$2(A.d6,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.aZ:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e9I,s,8.2)
d3.af(D.e8B,2.4,c8.$1(c7?A.bc:A.aJ))
d6.$5(d3,"IN",D.eb_,A.ad,6)
d6.$5(d3,"OUT",D.e9w,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bK,A.av,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e8c,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.ePC,A.ee,A.hM))
d6.$5(d3,"7805",D.a5S,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.deq[m]-1
r=c8.$1(A.e3).H()
d2.drawRect(C.c_(new C.a8(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ebr,A.bk,9)
return!0
case"diode":d3.bE(D.aHO,D.aHy,c9.$2(A.e3,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b_(D.ePr,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dR.j(0.4))
t.z=A.jw
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.eaO,A.aA,8)
return!0
case"ldr":d3.bE(D.aHO,D.a5S,c9.$2(A.e3,2.4))
d3.bE(D.aHD,D.aHy,c9.$2(A.e3,2.4))
d3.af(A.J,12,c8.$1(A.d6))
d3.af(A.J,12,c9.$2(A.tB,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bD(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aR(a8,c9.$2(A.bM,1.4))
d2=C.aq(A.br,A.dR,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.v(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.eaG,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.qS
break A}if("appletv"===d2){t=A.e3
break A}t=F.Ey
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
p.clipRRect(C.er(a5),$.oP(),!0)
p.translate(t,s)
E.h55(d3,new C.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e96,1.6,c8.$1(A.aZ))}else{d3.aE(a5,c8.$1(D.vs))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aR(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dt))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.ly[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dt).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eaj,A.bN,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xe))
d6.$5(d3,"Apple TV",D.e9J,A.br,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bhD))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.ds,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ebn,F.tp,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m4.h(0,d2)
b1=b0.b===D.wu
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
d3.aE(w,d1.$3(new C.a8(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.er(a5),$.oP(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Le(d3,new C.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vs))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.v(0,t),new C.v(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.v(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.ee))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bN))
if(c7){d6.$5(d3,"NGMY",D.ebu,A.aw,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c_(new C.a8(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aHj,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.eQ8,A.cs,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.oP(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Le(d3,new C.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xe))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.eQc,A.bL,A.cs))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.oP(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Le(d3,new C.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vs))
d3.af(D.aHe,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xe))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.oP(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Le(d3,new C.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vs))
d3.b_(D.eQi,c8.$1(A.bn))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dt))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dR.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.oP(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Le(d3,new C.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.eQ0,A.iE,A.dt))
d3.af(D.aHo,7,c8.$1(A.aw))
d3.af(D.aHo,4,c8.$1(c7?A.dR:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.ds,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.mn))
d3.aE(c2,c9.$2(A.br,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cW(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aR(c3,c9.$2(A.aO,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.v(-26+d2,4-d2*0.1),2.4,c8.$1(A.aZ))
d6.$5(d3,""+(88+A.o.E(A.k.bl(d5*2),5)),D.e9F,A.c,10)
d6.$5(d3,"km/h",D.e9C,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a8(c4.a,c4.b,c4.c,c4.d),A.dt,A.ee))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.oP(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Le(d3,new C.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lA
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bE(D.eb9,D.ebe,c9.$2(A.bn,4))
d3.bE(D.e97,D.e9f,c9.$2(A.bn,4))
return!0}return!1},
fKS:function fKS(){},
fKU:function fKU(){},
fKV:function fKV(){},
fKT:function fKT(){},
h7M(d,e,f,g){return new B.aiD(d,g,f,e)},
FC(d,e,f){return new B.baM(d,e,f)},
aiD:function aiD(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiE:function aiE(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bH2:function bH2(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d},
bH1:function bH1(d){this.a=d},
bH4:function bH4(){},
bH5:function bH5(d){this.a=d},
bH6:function bH6(d,e,f){this.a=d
this.b=e
this.c=f},
bH0:function bH0(d,e){this.a=d
this.b=e},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
bH_:function bH_(d,e,f){this.a=d
this.b=e
this.c=f},
bGT:function bGT(d,e){this.a=d
this.b=e},
bGU:function bGU(){},
bGV:function bGV(d,e){this.a=d
this.b=e},
bGW:function bGW(d,e){this.a=d
this.b=e},
bGX:function bGX(d){this.a=d},
bGY:function bGY(d){this.a=d},
bHl:function bHl(d){this.a=d},
bHm:function bHm(){},
bGw:function bGw(){},
bHn:function bHn(d,e){this.a=d
this.b=e},
bHk:function bHk(d,e,f){this.a=d
this.b=e
this.c=f},
bHf:function bHf(d){this.a=d},
bHc:function bHc(d,e,f){this.a=d
this.b=e
this.c=f},
bHd:function bHd(d,e){this.a=d
this.b=e},
bHg:function bHg(d){this.a=d},
bHa:function bHa(d,e){this.a=d
this.b=e},
bHb:function bHb(d,e){this.a=d
this.b=e},
bHe:function bHe(d){this.a=d},
bHh:function bHh(d){this.a=d},
bH8:function bH8(d,e){this.a=d
this.b=e},
bH9:function bH9(d,e){this.a=d
this.b=e},
bHi:function bHi(d){this.a=d},
bH7:function bH7(d){this.a=d},
bHj:function bHj(d){this.a=d},
bGx:function bGx(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGS:function bGS(d,e){this.a=d
this.b=e},
bGR:function bGR(d,e){this.a=d
this.b=e},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGE:function bGE(d){this.a=d},
bGC:function bGC(d){this.a=d},
bGF:function bGF(d,e,f){this.a=d
this.b=e
this.c=f},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGI:function bGI(d,e){this.a=d
this.b=e},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGL:function bGL(d,e,f){this.a=d
this.b=e
this.c=f},
bGA:function bGA(d,e){this.a=d
this.b=e},
bGM:function bGM(d,e,f){this.a=d
this.b=e
this.c=f},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGN:function bGN(d,e,f){this.a=d
this.b=e
this.c=f},
bGy:function bGy(d,e){this.a=d
this.b=e},
bGO:function bGO(d){this.a=d},
bGP:function bGP(d){this.a=d},
bGG:function bGG(d){this.a=d},
bGH:function bGH(d){this.a=d},
baM:function baM(d,e,f){this.a=d
this.b=e
this.c=f},
fiS:function fiS(){},
fiT:function fiT(){},
fiU:function fiU(){},
fiF:function fiF(){},
fiV:function fiV(){},
fiE:function fiE(){},
fiW:function fiW(){},
fiJ:function fiJ(){},
fiD:function fiD(){},
fiK:function fiK(){},
fiC:function fiC(){},
fiL:function fiL(){},
fiB:function fiB(){},
fiM:function fiM(){},
fiz:function fiz(){},
fiA:function fiA(){},
fiN:function fiN(){},
fix:function fix(){},
fiy:function fiy(){},
fiO:function fiO(){},
fiw:function fiw(){},
V_:function V_(d){this.a=d},
aD7:function aD7(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTF:function dTF(d){this.a=d},
dTG:function dTG(){},
dTH:function dTH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTI:function dTI(){},
dTv:function dTv(d){this.a=d},
dTu:function dTu(d,e,f){this.a=d
this.b=e
this.c=f},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTs:function dTs(){},
dTE:function dTE(d){this.a=d},
dTD:function dTD(d){this.a=d},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTz:function dTz(d){this.a=d},
dTA:function dTA(){},
dTC:function dTC(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTy:function dTy(){},
dTK:function dTK(d){this.a=d},
dTL:function dTL(d,e){this.a=d
this.b=e},
dTJ:function dTJ(){},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTN:function dTN(d){this.a=d},
dTO:function dTO(d){this.a=d},
axe:function axe(d,e){this.c=d
this.a=e},
b8Y:function b8Y(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cCX:function cCX(d){this.a=d},
b8X:function b8X(d,e){this.b=d
this.a=e},
cCW:function cCW(d){this.a=d},
axx:function axx(){},
axy:function axy(){},
aJx:function aJx(){},
bx4:function bx4(){},
ick(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bW(A.wn,23)
$.W()
b8=C.N()
b8.r=A.aw.gp(0)
b9.af(A.wn,25,b8)
b8=C.N()
b8.sar(D.eju.aw(0,v))
b9.af(A.wn,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bk.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bz.gp(0)
r.c=2
r.d=A.bT
b9.bE(A.wn,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.af(A.wn,3,r)
c2.$5(b9,w?"V":"A",D.ebh,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eaL,A.aw,9.5)
return!0
case"fan":b8=C.bw(D.ePy,A.hI)
$.W()
s=C.N()
s.r=A.br.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.b_(D.eQj,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wo,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.ce(A.aHi,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fW.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bm.gp(0)
b9.af(D.wo,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cs.gp(0)
b9.af(D.wo,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jm.gp(0)
b9.af(D.wo,14,b8)
return!0
case"speaker":l=C.bw(D.aNd,A.uL)
$.W()
b8=C.N()
b8.sar(D.ap9.aw(0,new C.a8(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.ejR.aw(0,C.bW(A.cC,15)))
b9.af(A.cC,14+k,b8)
b8=C.N()
b8.r=A.dt.gp(0)
b9.af(A.cC,5,b8)
b8=C.N()
b8.r=A.bn.gp(0)
b9.af(D.aHk,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bW(D.e8O,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bw(D.eQb,A.uL)
$.W()
b8=C.N()
b8.sar(D.bYM.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bw(D.aNf,A.ix)
s=C.N()
s.r=A.hM.gp(0)
b9.aE(b8,s)
if(b7){i=new C.T(Date.now(),0,!1)
h=C.C_(i)<500?":":" "
g=A.a.aX(A.o.u(C.dk(i)),2,"0")
f=A.a.aX(A.o.u(C.h4(i)),2,"0")
b8=C.N()
b8.r=A.aZ.j(0.12).gp(0)
b9.b_(D.aNf,b8)
c2.$5(b9,g+h+f,D.eb2,A.aZ,21)}b8=C.N()
b8.r=A.cs.gp(0)
b9.af(D.eb1,2.4,b8)
b8=C.N()
b8.r=A.cs.gp(0)
b9.af(D.e8S,2.4,b8)
return!0
case"calculator":j=C.bw(D.ePS,A.hf)
$.W()
b8=C.N()
b8.sar(D.bYw.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bw(D.ePM,A.he)
s=C.N()
s.r=(b7?A.Xq:D.bjG).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eaK,A.Wh,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bw(new C.a8(q,s,q+6,r),A.SS)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cc:A.bN).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bw(D.ePJ,A.hf)
$.W()
b8=C.N()
b8.r=L.mn.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.agI.gp(0)
b9.aE(j,b8)
a0=C.bw(D.ePA,A.hI)
if(b7){b8=C.N()
b8.sar(D.c_4.aw(0,new C.a8(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.oP(),!0)
b8.translate(-12,-25)
E.Le(b9,D.eVR,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bw(D.ePx,A.he)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.aZ.gp(0)
b9.b_(new C.a8(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.ea1,A.c,6)}else{b8=C.N()
b8.r=D.vs.gp(0)
b9.aE(a0,b8)}b8=C.bw(D.eQt,D.ek_)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bw(D.eQa,A.qs)
$.W()
b8=C.N()
b8.sar(D.bZ2.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QX[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bT
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bl(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bc:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bW(D.wo,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hn.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bw(D.ePR,A.hI)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.av.j(0.5*a5).gp(0)
b8.z=A.zf
b9.af(A.wn,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cW(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.es,D.bbU,a5).gp(0)
b9.aR(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bV.gp(0)
b9.aR(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.jc(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aHk,s)
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
j.F(new C.bE())
q=C.N()
q.sar(D.bX7.aw(0,D.eQ3))
b9.aR(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bE())
p=C.N()
p.r=A.f9.gp(0)
b9.aR(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bE())
s=C.N()
s.r=A.f9.gp(0)
b9.aR(r,s)
for(a2=0;a2<2;++a2){a3=F.aym[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aw.gp(0)
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
q.r=A.bN.gp(0)
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
j.F(new C.cW(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bE())
r=C.N()
r.sar(D.bYc.aw(0,D.ePQ))
b9.aR(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e3.gp(0)
b9.aR(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cW(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.aw.gp(0)
b9.aR(s,b8)
b8=C.N()
if(b7){s=C.aq(A.ct,A.tz,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.b_(D.ePP,b8)
if(b7){b8=C.N()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.lA
b9.af(A.aHg,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aw.gp(0)
b9.af(D.e89,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ao,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bE())
s=C.N()
s.r=A.dR.j(0.28*u).gp(0)
b9.aR(b8,s)
s=C.N()
s.r=A.dR.j(0.5*u).gp(0)
s.z=Z.HO
b9.af(D.eb6,24,s)}b8=C.bw(D.eQp,A.hI)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bT
b9.bE(D.e8n,D.aHq,r)
r=C.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bT
b9.bE(D.aHq,D.eb7,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k1).gp(0)
b9.aR(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.af(D.eb8,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cW(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hl.gp(0)
b9.aR(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a2F[u].j(0.6).gp(0)
b3.z=A.Rx
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cW(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a2F[u]
else{o=C.aq(D.a2F[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.icj(b9,c0,c1,c2)},
fP:function fP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h39(d){var w=D.m4.h(0,d)
return(w==null?null:w.b)===D.zF},
idv(d,e,f){return C.a5(d,!1).cm(C.uN(null,!1,!0,!0,new B.fPy(e,f),A.eM,null,A.pV,new B.fPz(),x.H))},
Jl:function Jl(d,e){this.a=d
this.b=e},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPy:function fPy(d,e){this.a=d
this.b=e},
fPz:function fPz(){},
UH:function UH(d,e,f){this.c=d
this.d=e
this.a=f},
bjp:function bjp(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dPs:function dPs(d){this.a=d},
dPr:function dPr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPp:function dPp(){},
dPq:function dPq(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPk:function dPk(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPf:function dPf(d){this.a=d},
dPj:function dPj(d,e,f){this.a=d
this.b=e
this.c=f},
dPi:function dPi(d){this.a=d},
dPh:function dPh(d){this.a=d},
bv8:function bv8(d,e,f){this.b=d
this.c=e
this.a=f},
aeD:function aeD(d,e,f){this.b=d
this.c=e
this.a=f},
aLj:function aLj(){},
fnK(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zW,A.L,w,w),A.aB,C.bS(A.fJ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wq,w,u,v,w,w,A.n),w,w,w,A.ez,A.a9,w,w,w),w,w,w)},
h3h(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eE()
b4.dt(b5*977+13)
w=A.o.D(1+A.o.am(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.av(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.U(u,t)
m=w
l=0
k=N.nz
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.av(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hi()?new C.z(f,-g):new C.z(-f,g)
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
a8=A.o.D(2+A.o.am(b5,8),2,4)
a9=C.ew([A.d.gal(g)],u)
A.d.fp(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.am(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.av(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aWu(b0,a9,C.U(u,t),q,N.nz,w+v)}return new B.aWu(C.aX(u),C.ew([25],u),C.U(u,t),21,N.nz,1)},
hsO(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.am(n,7),k=d.f
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
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bol(p,o)},
ho5(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aWu:function aWu(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vv:function Vv(d){this.a=d},
bjZ:function bjZ(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.ft$=g
_.l7$=h
_.fX$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ecv:function ecv(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecw:function ecw(){},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecm:function ecm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecn:function ecn(d){this.a=d},
eco:function eco(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
bgZ:function bgZ(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
diG:function diG(d,e,f){this.a=d
this.b=e
this.c=f},
diJ:function diJ(d,e,f){this.a=d
this.b=e
this.c=f},
diH:function diH(d){this.a=d},
diI:function diI(d){this.a=d},
Vx:function Vx(d){this.a=d},
aDM:function aDM(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.ft$=g
_.l7$=h
_.fX$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ecO:function ecO(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecP:function ecP(){},
ecz:function ecz(){},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecF:function ecF(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecK:function ecK(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecL:function ecL(d){this.a=d},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
bhd:function bhd(d,e){this.b=d
this.a=e},
aLL:function aLL(){},
bx9:function bx9(){},
aLM:function aLM(){},
bxa:function bxa(){},
a0N(d,e,f,g,h,i){return new B.btY(d,e,f,g,h,i)},
btY:function btY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjz:function fjz(){},
fjA:function fjA(){},
fjB:function fjB(){},
fjC:function fjC(){},
fjD:function fjD(){},
fjE:function fjE(){},
fjF:function fjF(){},
fjG:function fjG(){},
a8h:function a8h(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgK:function cgK(){},
cgI:function cgI(d,e){this.a=d
this.b=e},
cgH:function cgH(d){this.a=d},
Wo:function Wo(d){this.a=d},
aED:function aED(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eM3:function eM3(d){this.a=d},
eM_:function eM_(d){this.a=d},
eLZ:function eLZ(d,e){this.a=d
this.b=e},
eM1:function eM1(d,e){this.a=d
this.b=e},
eM0:function eM0(d,e){this.a=d
this.b=e},
eM2:function eM2(d){this.a=d},
bvk:function bvk(d,e,f){this.b=d
this.c=e
this.a=f},
V6:function V6(d){this.a=d},
bjy:function bjy(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.ft$=d
_.l7$=e
_.fX$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dVK:function dVK(){},
dVL:function dVL(){},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVI:function dVI(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
bq8:function bq8(d,e,f){this.b=d
this.c=e
this.a=f},
Uh:function Uh(d){this.a=d},
bja:function bja(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.ft$=d
_.l7$=e
_.fX$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dGB:function dGB(){},
dGC:function dGC(){},
dGw:function dGw(){},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGA:function dGA(d){this.a=d},
dGx:function dGx(d){this.a=d},
aI1:function aI1(d,e,f){this.a=d
this.b=e
this.c=f},
UY:function UY(d){this.a=d},
bjs:function bjs(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT1:function dT1(d){this.a=d},
dT_:function dT_(d,e){this.a=d
this.b=e},
dT2:function dT2(d){this.a=d},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dSY:function dSY(d,e){this.a=d
this.b=e},
dT4:function dT4(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dSV:function dSV(d){this.a=d},
dT7:function dT7(d){this.a=d},
dSU:function dSU(d){this.a=d},
dT8:function dT8(d){this.a=d},
dT9:function dT9(d){this.a=d},
dST:function dST(d){this.a=d},
blu:function blu(d,e,f){this.b=d
this.c=e
this.a=f},
VK:function VK(d){this.a=d},
aDW:function aDW(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eia:function eia(d,e){this.a=d
this.b=e},
eib:function eib(d,e,f){this.a=d
this.b=e
this.c=f},
ei9:function ei9(d,e,f){this.a=d
this.b=e
this.c=f},
eic:function eic(d){this.a=d},
ei8:function ei8(d){this.a=d},
eig:function eig(d){this.a=d},
eif:function eif(d,e){this.a=d
this.b=e},
eie:function eie(d,e){this.a=d
this.b=e},
eih:function eih(d,e){this.a=d
this.b=e},
eid:function eid(d,e){this.a=d
this.b=e},
eii:function eii(d){this.a=d},
VX:function VX(d){this.a=d},
aEh:function aEh(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
et3:function et3(d){this.a=d},
et4:function et4(d){this.a=d},
et1:function et1(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
et0:function et0(d){this.a=d},
et5:function et5(d){this.a=d},
et6:function et6(d){this.a=d},
et7:function et7(d){this.a=d},
et8:function et8(d,e){this.a=d
this.b=e},
Wh:function Wh(d){this.a=d},
bkG:function bkG(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eHl:function eHl(){},
eHu:function eHu(){},
eHq:function eHq(d){this.a=d},
eHp:function eHp(){},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHs:function eHs(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHt:function eHt(d){this.a=d},
eHm:function eHm(d){this.a=d},
VI:function VI(d){this.a=d},
bk9:function bk9(d,e,f,g,h,i,j,k){var _=this
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
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
egQ:function egQ(){},
egR:function egR(){},
egJ:function egJ(d){this.a=d},
egI:function egI(d){this.a=d},
egK:function egK(d){this.a=d},
egH:function egH(d){this.a=d},
egL:function egL(d){this.a=d},
egG:function egG(d){this.a=d},
egM:function egM(d,e){this.a=d
this.b=e},
egF:function egF(d,e){this.a=d
this.b=e},
egN:function egN(d){this.a=d},
egE:function egE(d,e){this.a=d
this.b=e},
egO:function egO(d){this.a=d},
egD:function egD(d,e){this.a=d
this.b=e},
egP:function egP(d){this.a=d},
egC:function egC(d,e){this.a=d
this.b=e},
bda:function bda(d,e,f){this.c=d
this.d=e
this.a=f},
aL6:function aL6(){},
bx0:function bx0(){},
aLp:function aLp(){},
bx5:function bx5(){},
aLU:function aLU(){},
bxf:function bxf(){},
aMn:function aMn(){},
bxr:function bxr(){},
jL(d,e,f,g,h,i){return new B.b6K(h,d,f,g,i,e,null)},
hsD(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fTn(g,e,f),d,w,!0,!0,x.H)},
hH(d,e,f,g,h,i,j){return new B.avF(f,j,i,h,g,d,e,null)},
qV(d,e,f){return B.iek(d,e,f)},
iek(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qV=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m3(2),$async$qV)
case 7:q=h
w=8
return C.b(q.hw(A.h1),$async$qV)
case 8:p=h
if(p==null){w=1
break}o=J.eX(A.dD.gaP(p))
w=9
return C.b(B.crF(C.a([B.hhw(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qV)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.U(D.aPl)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qV,v)},
lk(d,e,f,g){var w,v=$.arN
if(v==="music")return E.dH(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dH(261.63*v,w,f,0,g,"sine")}return B.w4(v,e,f,g)},
w4(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dH(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dH(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dH(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dH(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dH(t,"",160,-0.7,g*0.4,w)
return E.dH(900,"",90,0,g*0.45,u)
case"zap":return E.dH(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dH(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dH(320,"",220,-0.7,g*0.35,v)
return E.dH(1500,"",200,0,g*0.22,u)
case"organic":return E.dH(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dH(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dH(t,"",s,0,g*0.5,w)}},
BN(d,e,f,g){var w,v,u,t,s,r,q,p=$.arN
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lk(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dG(4,"count",x.S),C.S(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lk(d,s,f,g)
else C.bM(new C.ba(1000*q),new B.cgF(d,s,f,g),u)}},
a8g(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dH(95,"",200,1.8,e,w)
break
case"snare":E.dH(220,"",140,0,e*0.65,v)
break
case"hat":E.dH(5000,"",50,0,e*0.35,v)
break
case"open":E.dH(5200,"",220,0,e*0.35,v)
break
case"clap":E.dH(1100,"",100,0,e*0.5,v)
break
case"tom":E.dH(150,"",230,1,e,w)
break
case"low":E.dH(100,"",260,0.9,e,w)
break
case"rim":E.dH(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dH(820,"",240,0,e*0.3,"square")
break
case"crash":E.dH(3200,"",650,0,e*0.4,v)
break
case"shake":E.dH(7000,"",90,0,e*0.3,v)
break
default:E.dH(60,"",300,0,e,w)}},
zB(d){return B.hJG(d)},
hJG(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zB=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$zB)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.U(x.N,x.z)
w=1
break}p=A.S.aL(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a2(p,o,n):C.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$zB,v)},
w1(d,e){return B.hJH(d,e)},
hJH(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$w1=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$w1)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$w1)
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
return C.i($async$w1,v)},
b6K:function b6K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ctE:function ctE(d){this.a=d},
ctF:function ctF(d,e){this.a=d
this.b=e},
fTn:function fTn(d,e,f){this.a=d
this.b=e
this.c=f},
fTm:function fTm(d){this.a=d},
dB:function dB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ctA:function ctA(d){this.a=d},
eV:function eV(d,e,f){this.c=d
this.d=e
this.a=f},
avF:function avF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fj:function fj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctz:function ctz(d){this.a=d},
Fh:function Fh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctG:function ctG(d){this.a=d},
mF:function mF(){},
ctB:function ctB(d,e,f){this.a=d
this.b=e
this.c=f},
ctD:function ctD(d){this.a=d},
ctC:function ctC(){},
cgF:function cgF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwf(){var w=0,v=C.j(x.cL),u,t
var $async$cwf=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qW().bgc("assets/data/world110.json"),$async$cwf)
case 3:u=t.hOf(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cwf,v)},
hOf(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aL(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dU(j.h(k,0)),C.dU(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.dU(p.h(r,"pop"))
h=C.dU(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aQk(g,f,"",0)
f=C.dU(J.q(p.h(r,"c"),0))
p=C.dU(J.q(p.h(r,"c"),1))
e=new B.ab4(o,m,l,j,i,h,g,f,p,q)
e.byA(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.ab5(a1)},
fwT(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GR(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
ab4:function ab4(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab5:function ab5(d){this.a=d},
v7:function v7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
P8:function P8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y7:function y7(d,e,f){this.a=d
this.b=e
this.c=f},
P7:function P7(d){this.a=0
this.b=d
this.c=0},
hQ8(d,e,f){return $.hQ9.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.dep(d,e,f))},
Vd:function Vd(d){this.a=d},
aDi:function aDi(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l7$=k
_.fX$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dYs:function dYs(d){this.a=d},
dYr:function dYr(d,e){this.a=d
this.b=e},
dXV:function dXV(d){this.a=d},
dXT:function dXT(d){this.a=d},
dXU:function dXU(d,e,f){this.a=d
this.b=e
this.c=f},
dXS:function dXS(d){this.a=d},
dXR:function dXR(){},
dXQ:function dXQ(d){this.a=d},
dYd:function dYd(d,e){this.a=d
this.b=e},
dYe:function dYe(d,e){this.a=d
this.b=e},
dY2:function dY2(d){this.a=d},
dY3:function dY3(d){this.a=d},
dY1:function dY1(d){this.a=d},
dY4:function dY4(d){this.a=d},
dXW:function dXW(d,e){this.a=d
this.b=e},
dXX:function dXX(d){this.a=d},
dYf:function dYf(d,e){this.a=d
this.b=e},
dY0:function dY0(d,e){this.a=d
this.b=e},
dYj:function dYj(d){this.a=d},
dYc:function dYc(d){this.a=d},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
dYa:function dYa(d,e){this.a=d
this.b=e},
dYm:function dYm(d){this.a=d},
dY9:function dY9(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dY8:function dY8(d,e){this.a=d
this.b=e},
dYo:function dYo(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dY6:function dY6(d){this.a=d},
dYq:function dYq(d){this.a=d},
dY5:function dY5(d){this.a=d},
dYg:function dYg(d){this.a=d},
dY_:function dY_(d){this.a=d},
dYh:function dYh(d){this.a=d},
dXZ:function dXZ(d){this.a=d},
dYi:function dYi(d){this.a=d},
dXY:function dXY(d){this.a=d},
dXP:function dXP(){},
dXO:function dXO(d){this.a=d},
dXN:function dXN(d){this.a=d},
bfp:function bfp(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dep:function dep(d,e,f){this.a=d
this.b=e
this.c=f},
deq:function deq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLv:function aLv(){},
aLw:function aLw(){},
afa(d,e,f,g,h){return new B.btT(d,e,f,g,h)},
btT:function btT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjs:function fjs(){},
fjt:function fjt(){},
fju:function fju(){},
fjv:function fjv(){},
fjw:function fjw(){},
fjx:function fjx(){},
fjy:function fjy(){},
Wk:function Wk(d){this.a=d},
bkK:function bkK(){this.d=$
this.c=this.a=null},
eIe:function eIe(d){this.a=d},
eIf:function eIf(d){this.a=d},
eId:function eId(d){this.a=d},
eIg:function eIg(){},
eIc:function eIc(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
hQA(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w+900)
u.push(2.2+v.aj())}return new B.bkw(new C.cs(null,x.A),new B.P7(A.cH),A.J,A.ax,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hQC(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hQB(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hiI(d,e,f){return $.hRc.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.f1C(d,e,f))},
W5:function W5(d){this.a=d},
bkw:function bkw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l7$=k
_.fX$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
eAh:function eAh(d,e){this.a=d
this.b=e},
eAs:function eAs(d,e){this.a=d
this.b=e},
eAt:function eAt(d,e){this.a=d
this.b=e},
eAp:function eAp(d){this.a=d},
eAq:function eAq(d){this.a=d},
eAr:function eAr(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAo:function eAo(d){this.a=d},
eAv:function eAv(d,e){this.a=d
this.b=e},
eAw:function eAw(d){this.a=d},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAx:function eAx(d){this.a=d},
eAm:function eAm(d,e){this.a=d
this.b=e},
eAy:function eAy(d){this.a=d},
eAl:function eAl(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAk:function eAk(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAj:function eAj(d){this.a=d},
eAB:function eAB(d){this.a=d},
eAi:function eAi(d){this.a=d},
eAg:function eAg(){},
eAf:function eAf(){},
eAe:function eAe(d){this.a=d},
eAd:function eAd(d){this.a=d},
brV:function brV(d,e){this.b=d
this.a=e},
f1C:function f1C(d,e,f){this.a=d
this.b=e
this.c=f},
f1D:function f1D(){},
f1E:function f1E(){},
Ve:function Ve(d){this.a=d},
aDj:function aDj(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.ft$=k
_.l7$=l
_.fX$=m
_.fu$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dYw:function dYw(){},
dYZ:function dYZ(){},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYN:function dYN(d){this.a=d},
dYK:function dYK(d){this.a=d},
dYR:function dYR(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYH:function dYH(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYW:function dYW(d){this.a=d},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYX:function dYX(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYY:function dYY(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYO:function dYO(d){this.a=d},
dYA:function dYA(d){this.a=d},
dYP:function dYP(d){this.a=d},
dYz:function dYz(d){this.a=d},
dYQ:function dYQ(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYv:function dYv(d){this.a=d},
dYu:function dYu(){},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYt:function dYt(d){this.a=d},
baB:function baB(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VY:function VY(d){this.a=d},
bkt:function bkt(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.ft$=e
_.l7$=f
_.fX$=g
_.fu$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
etb:function etb(d,e){this.a=d
this.b=e},
etc:function etc(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
et9:function et9(d,e){this.a=d
this.b=e},
brt:function brt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f_M:function f_M(d){this.a=d},
aLx:function aLx(){},
bx7:function bx7(){},
aM5:function aM5(){},
bxl:function bxl(){},
aM8:function aM8(){},
bxn:function bxn(){},
hQy(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eE()
v.dt(w)
v=v.aj()
u=new C.eE()
u.dt(w+500)
s.push(new C.v(v,u.aj()))}return new B.bj9(new C.cs(null,x.A),new B.P7(A.cH),t,A.ax,s,$,A.bx,0,C.a([],x.X),null,null)},
PC:function PC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Uf:function Uf(d){this.a=d},
bj9:function bj9(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dG2:function dG2(){},
dFR:function dFR(){},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFQ:function dFQ(d){this.a=d},
dFP:function dFP(d){this.a=d},
dFV:function dFV(d){this.a=d},
dFO:function dFO(d,e){this.a=d
this.b=e},
dFW:function dFW(d){this.a=d},
dFN:function dFN(d){this.a=d},
dFX:function dFX(d){this.a=d},
dFM:function dFM(d){this.a=d},
dFY:function dFY(d){this.a=d},
dFL:function dFL(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dFK:function dFK(d){this.a=d},
dG_:function dG_(d){this.a=d},
dFJ:function dFJ(d){this.a=d},
dG0:function dG0(d){this.a=d},
dFI:function dFI(d){this.a=d},
dG1:function dG1(d){this.a=d},
dFH:function dFH(d){this.a=d},
dFU:function dFU(d){this.a=d},
dFG:function dFG(d){this.a=d},
ba_:function ba_(d,e){this.b=d
this.a=e},
aeP:function aeP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Va:function Va(d){this.a=d},
bjB:function bjB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.ft$=p
_.l7$=q
_.fX$=r
_.fu$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dX3:function dX3(d){this.a=d},
dWU:function dWU(d,e){this.a=d
this.b=e},
dWV:function dWV(d,e){this.a=d
this.b=e},
dWT:function dWT(d,e){this.a=d
this.b=e},
dWW:function dWW(d){this.a=d},
dWS:function dWS(d){this.a=d},
dWX:function dWX(d){this.a=d},
dWR:function dWR(d,e){this.a=d
this.b=e},
dWY:function dWY(d){this.a=d},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d){this.a=d},
dWP:function dWP(d,e){this.a=d
this.b=e},
dX_:function dX_(d){this.a=d},
dWO:function dWO(d,e){this.a=d
this.b=e},
dX0:function dX0(d){this.a=d},
dWN:function dWN(d){this.a=d},
dX1:function dX1(d){this.a=d},
dWM:function dWM(d){this.a=d},
dX2:function dX2(d){this.a=d},
dWL:function dWL(d){this.a=d},
bff:function bff(d,e){this.b=d
this.a=e},
dbx:function dbx(d){this.a=d},
VU:function VU(d){this.a=d},
bks:function bks(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
esq:function esq(d,e){this.a=d
this.b=e},
esr:function esr(d){this.a=d},
esp:function esp(d){this.a=d},
ess:function ess(d){this.a=d},
eso:function eso(d){this.a=d},
est:function est(d){this.a=d},
esn:function esn(d){this.a=d},
esu:function esu(d){this.a=d},
esm:function esm(d){this.a=d},
esv:function esv(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
esw:function esw(d){this.a=d},
esk:function esk(d,e){this.a=d
this.b=e},
esx:function esx(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
esy:function esy(d){this.a=d},
esi:function esi(d,e){this.a=d
this.b=e},
bqJ:function bqJ(d,e){this.b=d
this.a=e},
aL3:function aL3(){},
bx_:function bx_(){},
aLs:function aLs(){},
bx6:function bx6(){},
aM4:function aM4(){},
bxk:function bxk(){},
hhw(d,e,f){var w,v
C.fW(0,0,!1)
w=new C.ln(e,f,$,null)
v=w.bIR(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i3f(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.o2(A.k.ab(p.c,4)),"y",C.o2(A.k.ab(p.d,4)),"v",p.e,"l",C.o2(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.o2(A.k.ab(p.as,3)),"ch",p.at,"vc",C.o2(A.k.ab(p.z,3)),"s",C.o2(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fq(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
icI(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aL(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cw:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qj().ai(0,s)){J.cf(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ty(a2,d,a0,a1)
a3.aq0(a2,d,a0,a1)
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
d=C.jO(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jO(J.q(t,"b"))
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
J.cf(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cw:i)
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
if(m!=null&&l!=null)a6.akw(m,A.k.N(C.dU(J.q(p,1))),l,A.k.N(C.dU(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cw:h)
while(h.C()){j=h.gR(h)
J.cf(k,A.k.N(C.dU(j)))}return new C.bom(i,k)}catch(a4){return a5}},
fyQ(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fyQ=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fyQ)
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
return C.i($async$fyQ,v)},
bDJ(d){return B.ieg(d)},
ieg(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDJ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bDJ)
case 7:w=6
return C.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDJ)
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
return C.i($async$bDJ,v)},
crF(d,e){var w=0,v=C.j(x.g7),u
var $async$crF=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h5Z().xe(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$crF,v)}},D,T,H,U,A_,A7,A8,Al,X
J=c[1]
C=c[0]
A=c[2]
A0=c[145]
A9=c[144]
A1=c[137]
A2=c[134]
I=c[126]
P=c[121]
A3=c[123]
Aa=c[139]
A4=c[109]
A5=c[100]
G=c[129]
Ab=c[138]
A6=c[142]
Ac=c[67]
Y=c[76]
Ad=c[84]
Ae=c[80]
Q=c[88]
N=c[115]
Af=c[119]
Ag=c[117]
Z=c[125]
O=c[127]
V=c[143]
Ah=c[71]
Ai=c[141]
R=c[133]
M=c[140]
Aj=c[95]
W=c[116]
K=c[132]
S=c[96]
Ak=c[24]
E=c[26]
F=c[93]
L=c[102]
B=a.updateHolder(c[17],B)
D=c[124]
T=c[136]
H=c[41]
U=c[130]
A_=c[104]
A7=c[135]
A8=c[128]
Al=c[131]
X=c[97]
B.ajS.prototype={}
B.Vq.prototype={
S(){return new B.bjX(C.U(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mD(0,null,null))}}
B.bjX.prototype={
gW8(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nx(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nx=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
p.bP(0,A.c9)
t.m(new B.e9v(t))
t.a.toString
p=t.gW8()
w=3
return C.b(B.bzk(B.hSq(q,B.i36(p),o,t.ay)),$async$Nx)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i4w(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e9w(t,o,r))
$.aW.x1$.push(new B.e9x(t))
case 1:return C.h(u,v)}})
return C.i($async$Nx,v)},
Y8(d){return this.bZZ(d)},
aVM(){return this.Y8(null)},
bZZ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Y8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
t.f.saW(0,o)
t.m(new B.e9I(t))
E.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bzk(B.hZb(o)),$async$Y8)
case 3:r=n.a=m.icn(f)
p.b=""
if(r!=null&&!B.i37(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i4x(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajS(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e9J(p,t))
t.c4l(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Y8,v)},
c4l(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gW8()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e9E(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e9C(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e9F(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e9G(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e9H(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.n(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eXm,A.be,C.E(C.d(m.Q,l,l,l,l,l,l,A.Dx,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fm3
else{w=C.E(C.d(k.a,l,l,l,l,l,l,A.U9,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f75,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vA,C.d(u,l,l,l,l,l,l,D.f9L,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.DI,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.fca,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i6,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.Mm,new C.ci(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.mb,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bg,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aS(12,12)
s=new C.aS(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.TR,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bn(t,t,t,t),l,l,A.n),l,l,l,l,A.fO,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fhu,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bn(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.ecq)
j=C.cc(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.x(C.a([C.ai7(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bsX,A.ek,l,l,1/0),A.bd,A.il),C.E(B.h7M(m.gW8(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dB("Ask about it",i,new B.e9M(m),l,A.bu,l),new B.dB("Invent something new",!i,new B.e9N(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dgC[p]
i.push(new B.dB(n,!1,new B.e9O(m,n),l,A.bu,l))}f.push(new B.eV(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.d_N[p]
i.push(new B.dB(r,!1,new B.e9P(m,r),l,A.bu,l))}f.push(new B.eV(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.U,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kK,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e9Q(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a4,l,A.an,l,A.aQ3,l,l),1)
h=m.at
v=h&&j?D.bHM:A.dY
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e9R(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jL(A.bu,A.hc,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.G5.prototype={}
B.uU.prototype={}
B.VT.prototype={
S(){return new B.aEb(A.J,A.J,A.ax,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEb.prototype={
gaX0(){var w,v,u,t=this,s=D.Hh[t.cx],r=D.QY[t.cy],q=D.Cs[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awH[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.epC())},
ga2q(){return D.Hh[this.cx].d/this.gaX0()},
gaOf(){return 0.1*(D.Hh[this.cx].d/0.9)/D.QY[this.cy].d},
Z(){this.a1()
this.ll()
B.zB("rocket_lander").bB(new B.epW(this),x.P)},
c4u(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cH.aj()*0.6
w.f=new C.v(0.15+A.cH.aj()*0.7,0.08)
w.r=new C.v((A.cH.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lD(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.epX())
return}w=D.rt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2q()
v=v.ad(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOf())}if(m.dy){t=m.r
v=v.aC(0,t.aH(0,t.gcn()*6*D.ayE[m.d]))}t=m.r=m.r.ad(0,v.aH(0,d))
s=m.f=m.f.ad(0,t.aH(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cs[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.w1("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BN("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2q()/(D.rt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2q()/(D.rt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dH(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bl(m.CW*20),2)===0)E.dH(90,"",70,0,0.12,"noise")
m.m(new B.epY())},
afI(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f9f,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dB(e[w].a,f.$1(w),new B.epE(this,g,w),v,h,v))
return new C.D(A.eK,C.x(C.a([u,A.cV,C.bS(A.bA,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bE1(d){var w,v,u,t,s=this,r=null,q=s.ga2q()/(D.rt[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOf()),o=D.ayE[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.U3,r,r,r),A.R,s.afI("ENGINE: "+D.Hh[s.cx].b,D.Hh,new B.ept(s),new B.epu(s),A.ct),s.afI("FUEL TANK: "+D.QY[s.cy].b,D.QY,new B.epv(s),new B.epw(s),A.aZ),s.afI("LANDING GEAR: "+D.Cs[s.db].b,D.Cs,new B.epx(s),new B.epy(s),A.aO),s.afI("EXTRAS (tap to add)",D.awH,new B.epz(s),new B.epA(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fEh)
o=(q?A.aZ:A.c8).j(0.14)
w=C.n(12)
v=A.k.ab(s.gaX0(),2)
u=A.k.ab(s.ga2q()/(D.rt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cs[s.db].d*100)+".",r,r,r,r,r,r,D.f9T,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i6,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.nq,"Launch",new B.epB(s),A.aZ,r),r))
return C.av(C.p(r,C.cc(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bP,r,r,A.ag),A.f,r,A.lK,new C.o(D.bjg,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aY8(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.n(18),t=C.I(A.b_,A.q,1)
return C.oj(A.jJ,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.epq(e),new B.epr(e),w,w,w,w,new B.eps(e))},
aY7(d,e,f){return this.aY8(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.epP(s,D.rt[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rt[w].a:"\ud83d\udd12"
o.push(new B.dB(v,s.d===w,new B.epQ(s,w),r,D.rt[w].c,r))}v=C.a([s.aY7(F.amx,new B.epR(s),s.y),A.be,s.aY8(A.vW,new B.epS(s),s.Q,130),A.be,s.aY7(A.O5,new B.epT(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aO:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.be,C.aB(r,C.p(r,D.bM0,A.f,r,r,new C.o(u,r,C.I(A.b_,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.epU(s),r,r,r,r,r,r,!1,A.a5)],p))}return B.jL(A.ct,A.hc,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eV(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgW.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rt[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bm1,a0,0.25)
a1.toString
d.sar(new C.a9(A.b1,A.b5,A.x,C.a([F.ae9,a1],x.O),l,l).aw(0,new C.a8(0,0,g,f)))
a2.b_(new C.a8(0,0,g,f),d)
w=new C.eE()
w.dt(5)
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
q=new C.eE()
q.dt(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bD(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bE())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aR(r,d)
o=C.ce(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bw(o,A.ix)
a0=C.N()
a0.r=A.bc.gp(0)
a2.aE(d,a0)
a0=C.bw(o.cw(2),A.qs)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.jc(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.ct.j(0.6).gp(0)
k.z=Z.HO
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ao,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bE())
k=C.N()
k.r=A.aM.gp(0)
a2.aR(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bE())
k=C.N()
k.r=A.c.gp(0)
a2.aR(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cW(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cW(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.sar(D.bYF.aw(0,D.ePH))
a2.aR(m,i)
i=C.N()
i.r=A.aO.gp(0)
a2.af(D.wo,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.av.gp(0)
a2.aR(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.av.gp(0)
a2.aR(f,k)
g.restore()},
au(d){return!0}}
B.aM2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxj.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw4()}}
B.aS0.prototype={}
B.a33.prototype={}
B.ba2.prototype={}
B.Ug.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ew(["skin"],x.N),o=new Float32Array(0)
return new B.aCB(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Kv,D.Kv,A.ax,A.cH,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCB.prototype={
Z(){var w=this
w.a1()
w.ll()
w.as=new B.c1K(w.gccS())
new B.dGu(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.bv5()},
ccT(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f_(0,C.F(["t","init","data",$.hhL],x.N,x.z))
v.at=!0
v.ax=""
v.ayF()
break
case"pick":v.m(new B.dG6(v,d))
break
case"shot":v.ahA(C.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.u(w.h(d,"text")))
break}},
ayF(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.auD[q.CW]
v=new B.dG7()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fq(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.u(v.$1(w.b))+C.u(v.$1(w.c))+C.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f_(0,u)}},
ahA(d){return this.ctR(d)},
ctR(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahA=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aK(A.a.b6(d,A.a.cH(d,",")+1))
w=6
return C.b(B.crF(C.a([B.hhw(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahA)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(D.aPl)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahA,v)},
ay6(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lD(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bl(w)!==A.k.bl(v.ok)){B.a8g("kick",0.4)
v.a53(170,new B.dGv())}v.ok=w
return},
ahp(d){var w,v,u,t,s=this
s.m(new B.dG8(s,d))
if(d==null){s.fx=D.Kv
s.dy=1
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.S(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dG9(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayF()
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cwh(t,d)
return},
cwh(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a8g("kick",0.8)
this.a53(260,new B.dGa())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a53(w*70,new B.dGb(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dH(110,"",360,0.7,0.3,"saw")
else B.w4("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dH(210+e.length*4,"",80,0.6,0.55,"tri")
E.dH(2400,"",20,0,0.3,v)
break
case"muscle":E.dH(70,"",150,1,0.6,"sine")
break
case"vessel":E.dH(300,"",380,0.4,0.22,v)
B.a8g("kick",0.3)
break
default:B.w4("organic",2+A.o.E(e.length,6),200,0.4)}},
cAT(d){this.m(new B.dGd(this,d))},
aYq(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.ay6(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.av(w)]
p.p4=""},
bVB(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dG3(u,w,d))
v=x.t
B.BN("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a53(1100,new B.dG4(u))
return}if(d==null){if(u.cx!=null)u.ahp(null)
return}u.ahp(d)},
bZi(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bU.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f5C,u,u,u)}else if(d==null||e==null)w=D.fjB
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hK,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.DI,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bOr,u,u,u,new B.dG5(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Wn,u,s,t,u,u,A.n),u,u,u,u,I.aia,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.drA.h(0,g)
i.ayF()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d9k
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.ay6(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mG,h,h,h,new B.dGk(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DS(h,A.qq,q)}else q=A.kG
q=C.x(C.a([C.E(q,1),new C.D(F.YT,i.bZi(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d1k[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dB(l,n,new B.dGl(i,o),o.c,A.bU,h))}p=C.a([new B.eV(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dB(k,k===i.cx,new B.dGm(i,k),h,A.aM,h))}p.push(new B.eV(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hH(A.c8,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dGn(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Fh(D.auD[j],i.CW===j,new B.dGo(i,j),!1,h))
p.push(new B.eV(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dB("Spin",n,new B.dGp(i),D.alm,A.aO,h),new B.fj(A.k8,"Reset view",new B.dGq(i),A.c,h),new B.dB(l,m,new B.dGr(i),A.Gy,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dB("Heartbeat sound",i.k4,new B.dGs(i),A.ob,A.c8,h))
p.push(new B.eV(v,h,h))
return B.jL(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aL4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aL5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv4()}}
B.c1K.prototype={
kI(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hnP
$.hnP=v+1
u="ngmy-body-viewer-"+v
$.yJ()
$.qi().pX(u,new B.c1L(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fN(v,"message",new B.c1M(t),!1,x.gA)
t.b=u},
f_(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bzh(w.contentWindow)
if(w!=null)J.fV5(w,e,"*")}}catch(v){}}}
B.y9.prototype={}
B.Cn.prototype={}
B.no.prototype={}
B.baL.prototype={}
B.Um.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.aCE(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),A.ax,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCE.prototype={
Z(){var w=this
w.a1()
w.ll()
w.acq()
$.aW.x1$.push(new B.dIF(w))},
acq(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acq=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$acq)
case 6:q=e.tg("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dIj(s,r))
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
return C.i($async$acq,v)},
acK(d){return this.c25(d)},
c25(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acK=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$acK)
case 6:r=f
q=s.cx
p=C.a3(q).k("jT<co.E,m>")
q=C.C(new C.jT(q,new B.dIm(),p),p.k("J.E"))
r.aq("StringList","ngmy_circuit_passed_v1",q)
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
return C.i($async$acK,v)},
awP(d,e,f,g){var w="c"+this.y++,v=new B.Cn(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.awP(0,e,f,0)},
abM(d,e){var w
if(D.zd.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.v(-36,w))},
tG(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSj(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fX$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dS(m,D.cMh[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tG(p,0)&&n.tG(p,1)
break
case"or":p=q.a
o=n.tG(p,0)||n.tG(p,1)
break
case"xor":p=q.a
o=n.tG(p,0)!==n.tG(p,1)
break
case"nand":p=q.a
o=!(n.tG(p,0)&&n.tG(p,1))
break
case"nor":p=q.a
o=!(n.tG(p,0)||n.tG(p,1))
break
case"not":o=!n.tG(q.a,0)
break
default:o=n.tG(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bOf(){return this.aSj(null)},
lD(d){var w,v,u,t,s,r,q,p,o,n=this
n.bOf()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f2(w,new B.dIG()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fX$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fX$)
o=s+1
E.dH(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awQ(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
at0(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new B.dIh(w,d))
return}w.m(new B.dIi(w,d))},
cwz(d){this.m(new B.dIn(this,d,$.bE4()[d]))},
c6L(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bE4()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dIc(),t),s)
A.d.aZ(r,new B.dId())
q=C.C(new C.a_(new C.bc(v,u),new B.dIe(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dIf(d,w))
return}u=d.r
p=C.dQ(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSj(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jK(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dIg(d,o,a0))},
axD(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfg(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZb(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zd.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abM(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bN5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abM(p,o)
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
c6N(d){var w,v,u,t=this,s=t.axD(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dH(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dIo())
return}u=t.bN5(d)
if(u!=null)t.m(new B.dIp(t,u))
else t.m(new B.dIq(t))},
avC(d){return this.c15(d)},
c15(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avC=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axD(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dIl(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avC,v)},
bzS(d){if(this.x.A(0,A.ax))return
this.m(new B.dIb(this,d,A.cH))
C.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bE4()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.ob:O.ro,A.ad,h,h,h,21),h,h,h,new B.dIz(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.cl.j(0.14)
r=C.I(A.cl.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f4N,h,h,h),C.d(w.b,h,h,h,h,h,h,D.fd5,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lU,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.aZ:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fuE,i.gc6K(),C.bo(A.cl,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mw,D.btA,h,h,1/0))}u.push(C.E(C.cq(new B.dIA(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.zd.h(0,r).a+": "+D.zd.h(0,r).e,h,h,h,h,h,h,A.rY,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.ahU,A.bR,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.zd.gdM(D.zd),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aS(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.q,-1)
t.push(C.aB(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.y(p.a,h,D.aRc,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bn(q,q,q,q),h,h,A.n),h,h,h,A.fC,Aj.Ms,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dIB(i,r),h,h,h,h,h,h,!1,A.a5))}s=C.a([],g)
for(l=0;l<4;++l){k=D.ddD[l]
s.push(new B.fj(A.O6,k.b,new B.dIC(i,k),A.cl,h))}s.push(new B.fj(D.yj,"Clear",new B.dID(i),A.c8,h))
r=C.a([],g)
for(j=0;q=$.bE4(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e8:A.ls
o=i.ay
n=i.cx.t(0,j)?A.aZ:A.bH
r.push(new B.dB(q.a,o===j,new B.dIE(i,j),p,n,h))}return B.jL(A.cl,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eV(t,"PARTS",h),new B.eV(s,"TRY",h),new B.eV(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.bb3.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.acG.gp(0)
a7.b_(new C.a8(0,0,0+a5,0+a6),w)
v=C.N()
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
g=a5.abM(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pH(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.mJ
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cC(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bT
l.r=(f?A.dR:A.br).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Il)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pH(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aR(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c6M(a7,a5.d)},
c6M(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zd.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.ce(a0.c,64,64)
s=C.bw(t,A.lb)
r=w.cy===v
q=s.eU(A.cC)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lA
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bV(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bW(a0.c,52)))
d.af(q,52,p)}q=s.eU(A.cJ)
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
q.sar(new C.a9(A.b1,A.b5,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.uh:D.bIh}else l=e.b
k=B.h_A(C.jK(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aC(0,new C.v(p/2,q.gbc(q)/2)))
j=B.h_A(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.ad(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.h_A(f,9,u?A.dR:A.bV,g,g,A.u)
i.a3(d,a0.c.ad(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZ3(d,w.abM(a0,h),o)
this.aZ3(d,a0.c.ad(0,D.Il),o)},
aZ3(d,e,f){var w
$.W()
w=C.N()
w.r=D.acG.gp(0)
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
B.aLa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx2.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bva()}}
B.Nl.prototype={
S(){return new B.aCV(C.mD(0,null,null))}}
B.Ko.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.AA.prototype={}
B.aCV.prototype={
c6R(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dOv(w,e))},
c_Z(){var w=this
w.e.q()
w.e=C.mD(w.f,null,null)
w.m(new B.dOu(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.os(t,C.c6(v,A.c_,t?new B.br3(w.e,w.gc6Q(w),new B.dOw(d),v):new B.aHa(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dOx(w,u),x.C)}}
B.bsD.prototype={}
B.br3.prototype={
aZ4(d,e){var w=null
return new C.D(I.Zl,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f5m,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nr,v,v,v,w.e,v,v,v,v,v,v),A.rS,D.bzr],u),A.m,v,A.e,A.j,0,v,v),s=w.aZ4("STUDIOS","Play, make things, and keep what you make")
$.bE5()
return C.bm(!0,C.x(C.a([new C.D(D.byu,t,v),C.E(C.vB(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.mb(s,v),new C.nU(A.hS,C.OV(new C.ov(new B.f_j(d),22,!0,!0,!0,0,C.t1(),v),D.aPa),v),new C.mb(w.aZ4("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nU(D.btH,C.OV(new C.ov(new B.f_k(w),6,!0,!0,!0,0,C.t1(),v),D.aPa),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeU.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.aq(F.n9,p,0.3)
m.toString
w=x.O
m=C.a([m,D.afw],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a9(A.az,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a9(A.az,A.aC,A.x,m,r,r),A.n),r,A.FQ,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.adM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.aq(F.n9,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.afw],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aS(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aHJ,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bn(n,n,n,n),l,new C.a9(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.C6,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a9(A.az,A.aC,A.x,f,k,k),A.n),k,A.FQ,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.Q2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Sk,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bU(0,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,C.a([p,o,n,i],m),D.diW,j),A.n),A.bf),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.b1,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bU(0,C.b3(j,j,j,new B.bs1(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f6Y,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Tw)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fP,C.B(C.a([s,A.ep,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bU(0,C.e1(C.en(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bU(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bU(0,C.c0(C.bx(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.bs1.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a8(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.jc(0,0.35)
t=C.ce(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.sar(new C.a9(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.b_(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.brx.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bhn,D.aeI],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.ke,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c0(C.bx(q,C.b3(C.av(C.X(A.jt,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9K(p,w),A.ax),A.aq),new C.o(w,w,s,v,r,new C.a9(A.az,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9K.prototype={
a3(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ed(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
au(d){return!1}}
B.aHa.prototype={
S(){return new B.aHb(new C.cs(null,x.A),null,null)}}
B.aHb.prototype={
gu1(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.br3,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZt(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fN,null,1,null,v)
w.fh(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawR(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6O(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVv(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWd(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6M(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a1()
var w=this.gu1()
w.dd()
w.dW$.L(0,this.gcwi())},
cwj(){var w,v,u,t,s,r,q,p=this,o=p.gu1().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawR().a){case 0:w=D.nv
break
case 1:w=D.up
break
case 2:w=D.a2J
break
case 3:w=D.nv
break
case 4:w=D.d6i
break
case 5:w=D.up
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aan)r=0.09
else r=s===D.aao?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.c0b[v]
B.lk("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BN("bell",D.c8V,1400,0.35)}}p.ax=o},
q(){this.gu1().q()
this.gZt().q()
this.bx2()},
ag8(){var w=this
w.gu1().cVD(0,C.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.f__(w))},
chi(){this.gu1().bR(0)
this.m(new B.eZZ(this))},
adK(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaWd(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb6M(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaVv(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bR(F.n9,null,new B.eZY(u,l,m,o),t,!0,!0,!0,A.lC,!1,!1,x.H),$async$adK)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adK,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawR(),f=i.a.c,e=f.b,d=i.gc6O(),a0=new B.AA(g,e,f.c,d,i.gaVv(),i.gaWd(),i.gb6M())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.ob:O.ro,A.ad,h,h,h,21),h,h,h,new B.f_7(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bRX,h,h,h,i.gc6P(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mG,h,h,h,new B.f_8(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c7(i.gZt(),new B.f_9(i,a0),h),C.cq(new B.f_a(i,a0))],g)
u=i.as
t=u?i.gchh():i.gcjC()
u=u?D.bHx:A.ub
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c7(i.gu1(),new B.f_b(i,a1,a0),h),1),C.aH(h,h,h,h,D.bOh,h,h,h,new B.f_c(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hH(r,u+"x","Speed",2.5,0.4,new B.f_d(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dgc[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dB(p.b,o===p.a,new B.f_e(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c0w[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.b_
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aB(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a9(A.az,A.aC,A.x,n,h,h),A.a6),h,l,h,D.ahE,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.f_f(i,n),h,h,h,h,h,h,!1,A.a5))}return B.jL(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ey(new C.an(A.W,h,A.b2,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eV(u,"STYLE",h),new B.eV(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
bz3(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nv[r]
p=A.k.D((1-A.ey.az(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nv[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nv[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.kb(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nv[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nv[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nv[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kI(q,new C.iJ(n,f,A.b1,!0,f,new B.Q2(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nv[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nv[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mm(new B.bqG(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bPJ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.up[r]
p=A.pR.az(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.up[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.up[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jR(n,n,n,1)
m.fF(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Q2(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fF(3.141592653589793)
k=new C.iJ(k,f,A.A,!0,f,new B.brx(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kI(q,new C.iJ(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cBp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2J[w]
l.push(A.cu.az(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bU(0,C.b3(n,n,n,new B.bu7(d.d,l,D.awk,m,B.br2(e,0.4,0.62),f,B.br2(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.h05(g,w)
q=D.awk[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kI(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.h05(g,w)
r=D.a2J[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kI(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.Ud,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bFi(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.az(0,B.br2(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bU(0,C.av(C.dX(C.b3(f,f,f,new B.bq7(A.d.gI(a1),B.br2(a3,0,0.2),a4,f),new C.as(a5*0.95,70)),D.e81),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.az(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fF(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jR(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kI(k*(0.45+0.55*o),C.dX(new C.iJ(l,f,A.A,!0,f,new B.Q2(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new B.eZR())
A.d.v(a0,new C.M(w,new B.eZS(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bEs(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.up[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mV.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.up[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ayk[q]
k=C.dp()
k.mO(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jR(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.up[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kI(m,C.dX(new C.iJ(k,e,A.A,!0,e,new B.Q2(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.up[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dX(new C.mm(new B.bap(w,f,q,e),e,new C.as(r,212),e,e),new C.v(0,D.ayk[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBZ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.e85],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nv[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.az(0,p)
q=D.ayt[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nv[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nv[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mO(l*h+D.dah[r]*o)
f.fF(l*0.9)
h=0.55+0.45*o
f.jR(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kI(g,C.dX(new C.iJ(f,a3,A.A,!0,a3,new B.Q2(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nv[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayt[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dX(new C.mm(new B.bq9(A.d.gI(w),a2,a3),a3,new C.as(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bqG.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a8(w-v,0,w+v,e.b)
q=C.bw(u,A.he)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mJ
d.aE(q,t)
t=C.bw(u,A.he)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bq7.prototype={
a3(d,e){var w,v,u=this.c,t=C.ce(e.ed(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HO
d.hZ(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hZ(t,u)
u=t.cw(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hZ(u,v)},
au(d){return!0}}
B.bap.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ed(A.J),f=this.c,e=A.cu.az(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eE()
t.dt(this.d*17+3)
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
B.bq9.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ed(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.ce(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.bu7.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a8(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a9(A.b1,A.b5,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.b_(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.h05(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lA
a4=a3.H()
t.drawOval(C.c_(new C.a8(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a8(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new C.a9(A.b1,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
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
a6.push(new C.bE())
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cC(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cC(a2)).a,a4)
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
t.drawPath((a2==null?a8.e=new C.cC(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bl(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bw(new C.a8(b7,a7,b7+r,b5),A.he)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a8(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c_(a5),$.nu()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new C.a9(A.b1,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMU.prototype={
aU(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
B.a0h.prototype={
a5(){return"_Role."+this.b}}
B.q7.prototype={}
B.qN.prototype={}
B.Cr.prototype={}
B.Zf.prototype={}
B.aeK.prototype={}
B.a0u.prototype={
gY(d){return this.d}}
B.CB.prototype={}
B.abD.prototype={}
B.abU.prototype={}
B.adQ.prototype={}
B.bgT.prototype={
a2z(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dH(d,"",e,g,h,f)},
b7O(d,e,f){return this.a2z(d,e,f,0,0.55)},
aBq(d,e,f,g){return this.a2z(d,e,f,0,g)},
b7P(d,e,f,g){return this.a2z(d,e,f,g,0.55)},
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
w.aV()},
ajO(d,e,f,g){var w="n"+this.ay++,v=new B.qN(w,e,f,g)
this.a.n(0,w,v)
this.aV()
return v},
B5(d,e,f){return this.ajO(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new B.din(e))
A.d.br(w.c,new B.dio(e))
w.aV()},
bbD(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mI.h(0,v.b).c===D.wX)return!1
w=this.b
if(A.d.b4(w,new B.dik(d,e)))return!1
w.push(new B.Cr(d,e))
this.aV()
return!0},
bZW(d){var w
if(d.b==="beat")return D.c94[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aEV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayJ[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.CB(u,t,j.ax,90))
w.push(new B.CB(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0u(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7O(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0u(u,new C.v(o*p,n*p),m,3+w.aj()*4.5,1000+w.av(700),j.ax))}j.f.push(new B.CB(u,t,j.ax,120))
j.aBq(120,200,"noise",0.5)
j.b7O(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.CB(u,t,j.ax,230))
w.push(new B.CB(u,t,j.ax+160,160))
w.push(new B.CB(u,t,j.ax+320,100))
j.b7P(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abD(u,new C.v((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7P(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abU(u,u.ad(0,new C.v(Math.cos(q),Math.sin(q)).aH(0,260+w.aj()*200)),t,j.ax))
j.a2z(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2z(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adQ(u,D.ay7[v],t,j.ax))
j.aBq(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBq(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c5a[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cro(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f2(w,new B.dil(d));v.C();)j.azW(w.gR(0),j.ax+D.chu[A.o.E(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cyt[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f2(w,new B.dim(d));v.C();)j.azW(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zf(w,0,v-700)},
cro(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Zf(e,"~"+d))},
azW(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeK(d.a,v,e,w))
u.push(new B.Zf(w,v))},
a6f(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.C(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aEV(r)
u.n(0,r,o.ax+o.bZW(s))}}w=o.c
v=C.S(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dip(o),v),v.k("J.E"))
if(q.length!==0){A.d.br(w,new B.diq(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b6(u,1)
for(u=A.d.gae(v),r=new C.f2(u,new B.dir(p));r.C();)o.azW(u.gR(0),o.ax)}else o.aEV(u)}}A.d.br(o.d,new B.dis(o))
A.d.br(o.e,new B.dit(o))
A.d.br(o.f,new B.diu(o))
A.d.br(o.w,new B.div(o))
A.d.br(o.x,new B.diw(o))
A.d.br(o.r,new B.dix(o))
o.aV()},
v8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new C.v(q.a+o*e,q.b+p*e)
r.b=new C.v(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new C.v(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new C.v(l,o)
if(o>n){p=m.a=new C.v(l,n)
t=m.b=new C.v(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new C.v(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.S.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
Tt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aL(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.u(J.q(v,"k"))
if(!D.mI.ai(0,u))continue
t=C.u(J.q(v,"id"))
m.n(0,t,new B.qN(t,u,new C.v(C.dU(J.q(v,"x"))*k.cy.a,C.dU(J.q(v,"y"))*k.cy.b),A.k.N(C.dU(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.u(J.q(r,0))
p=C.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cr(q,p))}k.aV()
return!0}catch(l){return!1}},
cQl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qN(n,r,new C.v(q*p.a,o*p.b),s))
l.aV()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbD(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FR.prototype={}
B.VS.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aEa(new B.bgT(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),A.cH,A.K,A.ax,$.aw()),A.bx,A.J,A.J,A.U,null,null)}}
B.aEa.prototype={
acj(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acj=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$acj)
case 6:q=n.jO(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.eoX(s))
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
return C.i($async$acj,v)},
a9e(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a9e=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eoM(s))
u=3
w=6
return C.b(C.ay(),$async$a9e)
case 6:e.aq("Bool","ngmy_core_lab_coach_v1",!0)
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
return C.i($async$a9e,v)},
bLh(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.eoO())+"|"+A.d.cJ(o,0,new B.eoP())
if(v===p.ch)return p.CW
u=new B.eoS()
t=x.s
s=C.a([],t)
r=new B.eoT(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f2(n,new B.eoQ());w.C();){q=n.gR(0)
if(!A.d.b4(o,new B.eoR(q)))s.push(C.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dG(5,"count",x.S),x.N).dJ(0)},
Z(){var w,v=this
v.a1()
v.acj()
v.d.db=v.ay
w=v.qB(new B.epm(v))
w.hG(0)
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
w.bw2()},
abQ(d){return this.bZo(d)},
bZo(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abQ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$abQ)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Tt(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWF(A.d.gI(D.axz))
if(s.c!=null)s.m(new B.eoW())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abQ,v)},
aWF(d){this.d.cQl(0,d.c,d.d)
this.Ea()},
Ea(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lT,new B.eoI(this))},
awS(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfh(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZc(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mI.h(0,r.b).c===D.wX)continue
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
c6U(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hnQ(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cz7(d){var w,v,u,t,s,r,q=this,p=q.awS(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eY()
u=v.b
if(u==="button"){w.aEV(p)
return}if(q.r)return
t=D.mI.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qH)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aV()
q.Ea()
return}if(q.r)return
r=q.c6U(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aV()
q.Ea()}},
cgA(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cfh(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awS(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cgB(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aV()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aV()}}},
b0N(){var w,v,u=this
if(u.z!=null){w=u.bZc(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbD(v,w)}else v=!1
if(v){C.jV()
u.Ea()}u.z=null
u.d.aV()}else if(u.x!=null){if(u.at)u.Ea()
u.x=null}},
acw(d){return this.c16(d)},
c16(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$acw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awS(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bR(F.n9,null,new B.eoZ(q),p,!0,!0,!1,A.lC,!1,!1,x.y),$async$acw)
case 3:if(f===!0){r.W(0,s)
t.Ea()}case 1:return C.h(u,v)}})
return C.i($async$acw,v)},
c6S(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B5(0,d,new C.v(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eY()
this.Ea()},
agg(){var w=0,v=C.j(x.H),u=this,t,s
var $async$agg=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bR(F.n9,null,new B.ep0(),s,!0,!0,!0,A.lC,!1,!1,x.es),$async$agg)
case 2:t=e
if(t!=null)u.aWF(t)
return C.h(null,v)}})
return C.i($async$agg,v)},
adL(d){var w=0,v=C.j(x.H),u=this,t
var $async$adL=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.eoL(),t,null,!0,!0,x.y),$async$adL)
case 2:if(f===!0){u.d.a8(0)
u.Ea()}return C.h(null,v)}})
return C.i($async$adL,v)},
B(d){var w=this,v=null,u=C.a([C.ai7(w.r?new C.bI(A.a3,v,v,new C.D(A.FR,C.hn(D.bMg,D.fny,new B.epk(w),v),v),v):w.c6V(),A.bd,A.iI),C.E(C.cq(new B.epl(w)),1)],x.p)
if(!w.r)u.push(w.ctU())
return C.c6(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bH_(){var w=null,v=new B.eoN(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bU(0,C.en(C.av(C.p(w,C.cc(C.x(C.a([D.fyD,A.au,D.fGa,A.aB,v.$4(A.p_,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.C3,A.cl,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lr,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alz,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fFu,new C.bI(A.a8,w,w,C.bK(!1,D.fvO,w,w,!0,w,w,this.gbGT(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.VL,new C.o(F.n9,w,s,t,w,w,A.n),w,w,w,A.fD,A8.aiT,w,w,w),w,w,w),u,!0),0,0,0)},
c6V(){var w=this,v=null,u=C.aH(v,v,v,v,S.nr,v,v,v,new B.ep6(w),v,v,v,v,v,v),t=w.a8H(A.NV,"How it works",new B.ep7(w),!0),s=w.ay?A.ob:O.ro
return new C.D(D.bxK,C.B(C.a([u,D.bzd,t,w.a8H(s,"Sound",new B.ep8(w),!0),w.a8H(A.dY,"Ideas",w.gckk(),!0),w.a8H(D.yj,"Clear",w.gc6T(w),!0),w.aNy(A.iM,"Show",new B.ep9(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNy(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ac.tW,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hx(new C.D(new C.R(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8H(d,e,f,g){return this.aNy(d,e,f,g,!1)},
ctU(){var w=null,v=new B.ep2(this),u=A.c.j(0.08)
return C.p(w,C.cc(C.B(C.a([v.$2("START",D.wX),v.$2("CHANGE",D.E2),v.$2("REACT",D.qH)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AQ,w,new C.bO(new C.az(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bsZ,w,w,w)},
ctV(d){var w,v,u,t,s=null,r=D.mI.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fC,C.aB(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aRc,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a9(A.b1,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hC,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ep1(this,d),s,s,s,s,s,s,!1,A.a5),s)}}
B.bgU.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
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
b8.b_(new C.a8(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
d.push(new C.pH(h+a1,i,f-a1,g,f,g))
a2=D.mI.h(0,k.b).d
a3=D.mI.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bT
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rA(new C.v(h,i),new C.v(f,g))
e.sar(new C.a9(A.a3,A.a8,A.x,d,b4,b4).aw(0,new C.a8(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hnQ(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mJ
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Il)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pH(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aR(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.az(0,v)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
h=C.ll(o,i,A.dV.az(0,v))
h.toString
i=C.ll(o,i,A.dV.az(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bT
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rA(i,h)
o.sar(new C.a9(A.a3,A.a8,A.x,f,b4,b4).aw(0,new C.a8(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jw
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jw
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(new C.bV(P.pu,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bW(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgV(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cg8(b8,b5.d,b6)
b7.restore()},
cg8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mI.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.ce(e.c,64,64)
t=C.bw(u,A.iw)
s=t.eU(A.cC)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lA
d.aE(s,r)
if(v>0){s=t.cw(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zf
d.aE(s,r)}s=t.eU(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aE(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.sar(new C.a9(A.b1,A.b5,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgV(C.jK(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aC(0,new C.v(s/2,r.gbc(r)/2)))
n=B.bgV(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.ad(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.ay7[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qH){s=e.c.ad(0,new C.v(0,62))
r=C.N()
r.r=D.ayJ[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgV(m,9.5,A.aA,j,j,A.P)
l.a3(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgV(m,9.5,A.aA,j,j,A.P)
l.a3(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wX)k.b1C(d,e.c.aC(0,D.Il),q)
k.b1C(d,e.c.ad(0,D.Il),q)},
b1C(d,e,f){var w
$.W()
w=C.N()
w.r=A.c_.gp(0)
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
B.aM0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.blt.prototype={}
B.PU.prototype={
gY(d){return this.d}}
B.W6.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bkx(new C.cs(null,x.A),w,v,A.cH,A.bx,D.F3,null,null)}}
B.bkx.prototype={
b_k(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bl((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awZ[A.o.E(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":B.lk("synth",u,420,0.3)
break
case"rainbow":B.lk("bell",u,700,0.35)
break
case"stars":B.lk("pluck",u+12,400,0.4)
break
case"sparks":E.dH(2400+t.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dH(110+t.r.av(60),"",140,0,0.22,"noise")}},
c9U(d){return this.b_k(d,!1)},
Z(){var w,v=this
v.a1()
w=v.qB(new B.eB1(v))
w.hG(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bwb()},
gb16(){var w=this.Q
return w<0?new H.mS(1,A.k.E(this.y*0.18,360),0.85,1).iM():D.R0[w]},
aRZ(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb16(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bH,A.av,v.aj())
m.toString
j.push(new B.PU(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.av(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PU(d,new C.v(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.av(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PU(d,new C.v(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aZ6(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb16()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.blt(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRZ(e)
r.b_k(e,!0)
r.m(new B.eAD())},
aZ5(){this.ax=null
this.m(new B.eAC())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mG,n,n,n,new B.eAM(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brX(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b6r)
k=C.aB(A.c7,new C.an(A.W,n,A.b2,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eAN(o),new B.eAO(o),new B.eAS(o),n,n,n,n,n,n,n,n,n,new B.eAT(o),new B.eAU(o),n,n,n,!1,A.a5)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cWE[w]
j.push(new B.dB(v.b,o.z===v.a,new B.eAV(o,v),v.c,A.bU,n))}u=C.a([new B.Fh(A.c,o.Q<0,new B.eAW(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Fh(D.R0[t],o.Q===t,new B.eAX(o,t),!1,n))
s=o.as
s=B.hH(A.bU,A.o.u(A.k.V(s)),"Size",36,4,new B.eAY(o),s)
r=o.ch
q=r?A.ob:O.ro
q=C.a([new B.dB("Sound",r,new B.eAZ(o),q,A.bU,n),new B.fj(A.rn,"Undo",new B.eAP(o),A.c,n),new B.fj(D.yj,"Clear",new B.eAQ(o),A.c8,n)],m)
for(w=0;w<4;++w){p=D.dbX[w]
q.push(new B.Fh(p,o.at.A(0,p),new B.eAR(o,p),!1,n))}return B.jL(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ey(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eV(j,"BRUSH",n),new B.eV(u,"COLOUR",n),s,new B.eV(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.brX.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.b_(new C.a8(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.S(q),m=p.k("nn<1>"),l=new C.nn(q,1,a5,m),l.zM(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bD(k)
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
q.d=A.bT
q.e=A.fG
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.e=A.fG
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.e=A.fG
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mS(1,A.o.E(i*5,360),0.85,1).iM()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bT
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mS(1,A.o.E(a3*23,360),0.7,1).iM():l
a4.c6W(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rv
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6W(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bD(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bD(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bE())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jw
d.aR(n,p)
p=C.N()
p.r=h.gp(0)
d.aR(n,p)},
au(d){return!0}}
B.Wi.prototype={
S(){return new B.aEq(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aEq.prototype={
gIT(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tN,null,1,null,v)
w.cM(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a1()
var w=this.gIT()
w.dd()
w.dW$.L(0,this.gbYk())},
bYl(){var w,v,u,t,s,r,q,p=this,o=p.gIT().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m8:new C.mc(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dH(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dH(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lk(s,D.avW[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIT().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bwh()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.mc(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.R0[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mG,j,j,j,new B.eHB(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.ay8[k.y]
s=C.bx(t,C.c0(C.av(C.c7(k.gIT(),new B.eHC(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.U,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DH,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eHD(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hw,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cyf[r]
i.push(new B.dB(q.b,k.r===q.a,new B.eHE(k,q),j,A.bH,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Fh(D.R0[o],k.w===o,new B.eHF(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ob:O.ro
l=C.a([new B.dB(m,n,new B.eHG(k),l,A.bH,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Fh(D.ay8[o][0],k.y===o,new B.eHH(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mC,"Replay",new B.eHI(k),A.c,j))
m=k.x
return B.jL(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ey(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.O,new B.eV(i,"MOVE",j),new B.eV(p,"COLOUR",j),new B.eV(l,"SOUND",j),new B.eV(n,"BACK",j),B.hH(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new B.eHJ(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c08(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bl(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.E(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a8(p)
p.push(new C.cR(h,A.J,30*v))
p.push(new C.cR(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bl(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bU:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mV.az(0,t)
w=h
m=t
break
case"rainbow":w=new H.mS(1,A.k.E(g*360+e*40,360),0.75,1).iM()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dX(C.ef(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aM9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aMf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.a_M.prototype={}
B.VP.prototype={
S(){var w=C.a([],x.aS)
return new B.aE2(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE2.prototype={
gadM(){var w=this.r
return new C.v(w.a/2,w.b/2)},
b2m(){return new H.mS(1,this.f.aj()*360,0.6,1).iM()},
arj(d,e,f,g){var w=this,v=w.gadM().ad(0,new C.v(Math.cos(e),Math.sin(e)).aH(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_M(v,new C.v(-t,s).aH(0,r).aH(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b2m(),C.a([],x.g)))},
bGj(d,e,f){return this.arj(d,e,f,!1)},
bGi(d,e){return this.arj(d,e,1,!1)},
cwd(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bGi(40+w*u/5,v.aj()*3.141592653589793*2)},
bHe(){var w=this.r
this.bGj(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
Z(){this.a1()
this.ll()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.ax))return
w=a2.e
v=w.length
if(v===0&&a2.fX$<300)return
u=a2.gadM()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
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
i=new C.v(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.v(m,o)
j=n.a
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lX(v.a-s)!==J.lX(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fX$-n.r>250){n.r=a2.fX$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lk("bell",D.avW[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.els(u),C.S(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dH(70,"",300,0.6,0.8,"sine")
A.d.br(w,new B.elt(a2,u))},
ckd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadM()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new C.v(q,l)
t=new C.v(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(A.o.E(s,3)===0)k.push(t)
if(m<16)break}return k},
gaWi(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aH(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mG,r,r,r,new B.elg(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.elh(s)),n=s.w
n=B.hH(A.ct,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.eli(s),n)
w=s.x
w=B.hH(A.ct,A.k.ab(w,1)+"x","Time",3,0.2,new B.elk(s),w)
v=s.Q
v=B.hH(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ell(s),v)
u=s.ax
t=u?A.ob:O.ro
return B.jL(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eV(C.a([new B.dB("Sound",u,new B.elm(s),t,A.ct,r),new B.dB("Trails",s.z,new B.eln(s),A.Ob,A.ct,r),new B.dB("Planets pull each other",s.y,new B.elo(s),A.yG,A.ct,r)],q),r,r),new B.eV(C.a([new B.fj(A.mB,"Solar system",new B.elp(s),A.ct,r),new B.fj(A.nq,"Comet",new B.elq(s),A.c,r),new B.fj(A.my,"Cluster",new B.elr(s),A.c,r),new B.fj(D.yj,"Clear",new B.elj(s),A.c8,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.blg.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.X3.gp(0)
d.b_(new C.a8(0,0,0+g,0+f),w)
v=new C.eE()
v.dt(5)
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
t.sar(new C.bV(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).aw(0,C.bW(g,f)))
d.af(g,f,t)
t=C.N()
t.sar(D.ejO.aw(0,C.bW(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bT
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mJ
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sar(new C.bV(P.pu,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bW(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jm.gp(0)
d.bE(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abK.prototype={}
B.Wd.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bkC(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkC.prototype={
Z(){this.a1()
this.ll()},
c6X(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abK(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.c6X()
w=a2.f
A.d.br(w,new B.eH2(a2))
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
r=new C.v(r.a+j,r.b+l)
l=m.b
q=new C.v(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new C.v(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new C.v(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
l=s.a
k=l.a
if(k<40)f=new C.v(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new C.v(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new C.v(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new C.v(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new C.v(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new C.v(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.L)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new C.v(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new C.v(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=A.k.D(a0,l*0.5,l*k)
s.b=new C.v(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.v(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.br(w,new B.eH3(a2))
if(w.length<a1&&a2.ch)B.lk("bell",12+a2.r.av(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fX$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fX$
B.lk("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mG,l,l,l,new B.eGS(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eGT(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cYf[w]
h.push(new B.dB(v.b,m.at===v.a,new B.eGU(m,v),v.c,A.aZ,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cId[w]
u.push(new B.dB(t.b,m.ax===t.a,new B.eGV(m,t),l,A.aZ,l))}s=m.ch
r=s?A.ob:O.ro
r=C.a([new B.dB("Sound",s,new B.eGW(m),r,A.aZ,l)],k)
s=m.x
s=B.hH(A.aZ,A.o.u(A.k.V(s)),"How many",150,15,new B.eGX(m),s)
q=B.hH(A.aZ,l,"Together",2.5,0,new B.eGY(m),m.y)
p=B.hH(A.aZ,l,"Apart",2.5,0,new B.eGZ(m),m.z)
o=B.hH(A.aZ,l,"Same way",2.5,0,new B.eH_(m),m.Q)
n=m.as
return B.jL(A.aZ,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eV(h,"TOUCH",l),new B.eV(u,"LOOK",l),new B.eV(r,l,l),s,q,p,o,B.hH(A.aZ,A.o.u(A.k.V(n)),"Speed",280,50,new B.eH0(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsP.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aex,D.bmr],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,U.LM],v):C.a([D.bjk,D.ban],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.sar(new C.a9(A.b1,A.b5,A.x,w,a3,a3).aw(0,new C.a8(0,0,v,u)))
a5.b_(new C.a8(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bH.j(0.25).gp(0)
n.z=G.mJ
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mS(1,j,0.7,1).iM()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jw
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
j.push(new C.bE())
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
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
j.push(new C.cW(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cW(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cA,0.6)
f.toString
j.sar(new C.a9(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).aw(0,D.ePD))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c8
else a1=v==="scare"?A.bH:A.aZ
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.acc.prototype={}
B.Uk.prototype={
S(){var w=C.a([],x.bi)
return new B.aCD(w,A.cH,A.ax,C.U(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCD.prototype={
gId(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacN(){return 54-8*(this.r/100)},
Z(){this.a1()
this.ll()
B.zB("chain_burst").bB(new B.dHO(this),x.P)},
aZ8(){return B.w1("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
aA_(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.acc(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new H.mS(1,u.aj()*360,0.6,1).iM()))}},
Zu(d){var w,v=this
if(d==null)return 0
w=(v.fX$-d)/1000
if(w<0.4)return v.gacN()*A.dV.az(0,w/0.4)
if(w<1.1)return v.gacN()
if(w<1.5)return v.gacN()*(1-(w-1.1)/0.4)
return 0},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.ax)||!j.Q)return
w=j.d
if(w.length===0)j.aA_()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new C.v(o,s)
if(o<8||o>j.f.a-8)r=t.b=new C.v(-q,p)
if(s<8||s>j.f.b-8)t.b=new C.v(r.a,-r.b)}if(j.y){n=C.a([],x.U)
v=j.at
if(v!=null)n.push(new C.z(v,j.Zu(j.ax)))
for(v=A.d.gae(w),s=new C.f2(v,new B.dHP());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zu(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fX$
E.dH(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eY()
break}}}if(!(j.at!=null&&j.Zu(j.ax)>0||A.d.b4(w,new B.dHQ(j)))&&j.fX$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gId()){if(j.as>=j.gId()*1.5)k=3
else k=j.as>=j.gId()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BN("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aZ8()}else E.dH(120,"",300,0,0.3,"saw")}}},
aZ7(d){this.m(new B.dHE(this,d))
this.aZ8()},
adN(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dHH(u),s,null,!0,!0,x.S),$async$adN)
case 2:t=e
if(t!=null)u.aZ7(t)
return C.h(null,v)}})
return C.i($async$adN,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gId(),t=w.x.h(0,""+w.r)
return B.jL(A.bU,A.hc,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dHL(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.rj,"Levels",w.gc6Y(),A.bU,v),new B.fj(A.k8,"New board",new B.dHM(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auP(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQy,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYP(d,e){return this.auP(d,e,A.c)}}
B.baK.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.F3.gp(0)
d.b_(new C.a8(0,0,0+e.a,0+e.b),w)
v=new B.cMS(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mJ
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
B.aL8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx1.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv8()}}
B.aLY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxi.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw_()}}
B.aMc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxq.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwe()}}
B.FN.prototype={
gcPB(){return this.a.aC(0,this.b).gcn()>4}}
B.ad1.prototype={}
B.VJ.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bkb(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkb.prototype={
aPz(d){return new H.mS(1,A.o.E(d*29,360),0.6,1).iM()},
a_e(d){var w,v=D.CF.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bl(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dS(w,u)},
aSe(d){A.d.br(this.e,new B.egW(this,d))},
csh(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcn()
return d.aC(0,e.ad(0,w.aH(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcn()},
ayv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new C.v(q,p)
n=q+t
m=p+w
l=new C.v(n,m)
k=g.a_e(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.FN(p,r,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.a_e(h)
f.push(new B.FN(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_e(h)
f.push(new B.FN(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}}},
Z(){this.a1()
this.ll()},
c7_(d,e){var w,v=this.fX$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lk(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.ad1(new C.v(a2.w.a*(0.2+v.aj()*0.6),6),new C.v((v.aj()-0.5)*40,0),new H.mS(1,v.aj()*360,0.5,1).iM()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.L)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new C.v(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new C.v(k,l)
if(k<7){m=q.a=new C.v(7,l)
o=q.b=new C.v(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new C.v(m,n.b)
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.L)(u),++i){h=u[i]
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
g=new C.v(m+l*e,j+n*e)
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
q.a=new C.v(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.c7_(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.br(w,new B.ehk(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.ob:O.ro,A.ad,p,p,p,21),p,p,p,new B.eh9(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mG,p,p,p,new B.eha(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.ehb(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d0I[w]
l.push(new B.dB(v.b,q.x===v.a,new B.ehc(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.CF.gef(D.CF));t.C();){s=t.gR(t)
u.push(new B.dB(s,q.y===s,new B.ehd(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.az4[w]
t.push(new B.dB(r.b,q.z===r.a,new B.ehe(q,r),p,A.b8,p))}s=q.Q
return B.jL(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eV(l,"TOOL",p),new B.eV(u,"SCALE",p),new B.eV(t,"SOUND",p),B.hH(A.b8,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.ehf(q),s),new B.eV(C.a([new B.fj(D.bI6,"Stairs",new B.ehg(q),A.b8,p),new B.fj(Al.NU,"Pinball",new B.ehh(q),A.c,p),new B.fj(A.my,"Random",new B.ehi(q),A.c,p),new B.fj(D.yj,"Clear",new B.ehj(q),A.c8,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhO.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.sar(D.bZf.aw(0,new C.a8(0,0,a0,a1)))
a2.b_(new C.a8(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jw
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jw
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sar(new C.bV(P.pu,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bW(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bT
u.r=A.aA.gp(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rA
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new C.bV(P.pu,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bW(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adx.prototype={}
B.VO.prototype={
S(){var w=C.a([],x.gB)
return new B.aE1(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE1.prototype={
gaZ9(){var w=this.w
return new C.v(w.a/2,w.b/2)},
ayI(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azV(d){var w=D.CF.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dS(v,u)},
Z(){this.a1()
this.ll()},
aQZ(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adx(w,A.k.E(t/v+u,1)))}},
lD(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.ax))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fX$
if(p.Q){r=p.z
s=p.azV(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lk(r,s+12,q,0.55)}}}},
c70(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaZ9()),e=f.gcn()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayI(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.S(s))
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
m=h.ayI(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ekQ(h,n).$0()
h.c.eg()
return}}h.m(new B.ekR(g,h,t))
if(h.Q)B.lk(h.z,h.azV(g.a)+12,700,0.5)
C.eY()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.ob:O.ro,A.ad,q,q,q,21),q,q,q,new B.ekY(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mG,q,q,q,new B.ekZ(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.el_(r)),m=r.x
m=B.hH(A.bu,""+A.k.V(m),"Tempo",180,40,new B.el0(r),m)
w=C.a([],p)
for(v=J.aV(D.CF.gef(D.CF));v.C();){u=v.gR(v)
w.push(new B.dB(u,r.y===u,new B.el1(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.az4[t]
v.push(new B.dB(s.b,r.z===s.a,new B.el2(r,s),q,A.bu,q))}return B.jL(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eV(w,"SCALE",q),new B.eV(v,"SOUND",q),new B.eV(C.a([new B.fj(A.dY,"Demo",new B.el3(r),A.bu,q),new B.fj(A.my,"Random",new B.el4(r),A.c,q),new B.fj(D.yj,"Clear",new B.el5(r),A.c8,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.blh.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.X3.gp(0)
a5.b_(new C.a8(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.v(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sar(new C.a9(A.b5,A.b1,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.a8(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mS(1,A.k.E(s.$1(l)*23,360),0.55,1).iM()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.diQ[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.jM(new C.eu(o,a4,a4,A.cP,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.jv(1),a4,a4,a4,a4,A.c3,a4)
i.en()
o=i.b.c
m=J.fUN(v.$1(l))
h=i.b.a.c
i.a3(a5,new C.v(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.sar(D.ejq.aw(0,C.bW(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mS(1,A.k.E(s.$1(a0)*23,360),0.55,1).iM()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fUN(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jw
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.sar(new C.bV(P.pu,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bW(new C.v(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLW.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxg.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvY()}}
B.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxh.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvZ()}}
B.tl.prototype={}
B.b9D.prototype={}
B.VM.prototype={
S(){var w=x.S
return new B.aE_(C.a([],x.aq),C.U(w,w),C.aX(w),D.eVW)}}
B.aE_.prototype={
Z(){this.a1()
B.zB("molecule_maker").bB(new B.ekk(this),x.P)},
ajl(d){var w={}
w.a=0
this.f.bM(0,new B.ek6(w,d))
return w.a},
gaZf(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.i4W(t,this.f,D.a3f[this.d])},
c7h(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eE()
w.dt(t*7+3)
t=v.y
v.m(new B.ek0(v,e,t.a,w,t.b))
B.w4("pop",u.length,90,0.35)},
awW(d){return this.m(new B.ek1(this))},
aZg(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c7n(d){this.m(new B.ek5(this,this.aZg(d)))},
coH(){var w=this.r
if(w==null)return
this.m(new B.ek4(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a3f[k.d],h=k.gaZf()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.wh.h(0,w[u].a).a-k.ajl(u)
w=i.c
w=w.gdM(w)
t=w.dz(w,new B.eke(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.aZ:A.hn
r=x.p
s=C.x(C.a([new C.D(A.fO,B.feY(w,s,h&&k.d<12?new B.fj(A.j4,"Next",new B.ekf(k),A.aZ,j):j),j),C.E(C.cq(new B.ekg(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dB(p+D.a3f[u].b,k.d===u,new B.ekh(k,u),j,A.hn,j))}q=C.a([],r)
for(p=D.wh.gdM(D.wh),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dt:m.b
q.push(new B.dB(n+" \xb7 "+m.a,!1,new B.eki(k,o),j,l,j))}return B.jL(A.hn,A.hc,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eV(w,"GOAL",j),new B.eV(q,"ADD",j),new B.eV(C.a([new B.dB("Remove selected atom",!1,k.gcoG(),A.e9,A.c8,j),new B.dB("Clear all",!1,k.gc7i(k),A.k8,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.biv.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hn.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bM(0,new B.dqt(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.wh.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bW(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jw
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
h.sar(new C.bV(A.Kd,0.5,A.x,a3,0,C.a([f,g,e],r),I.ax7,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aw:A.c
d=new C.jM(new C.eu(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
d.en()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a3(a4,new C.v(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bc:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.u(k)
a1=new C.jM(new C.eu(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,A.nF),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
a1.en()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a3(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.fZ(a3,a3,a3,a3,D.f3H,A.a4,A.c6,a3,A.dO,A.c3)
d.en()
d.a3(a4,new C.v((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.UJ.prototype={
S(){var w=x.s
return new B.bjr(C.a([],w),C.a([],w))}}
B.bjr.prototype={
Z(){this.a1()
this.awc()
B.zB("dna_lab").bB(new B.dQz(this),x.P)},
gb3B(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a4l.h(0,w[u])
t.toString
s.push(t)}return A.d.h3(s)},
ga9f(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3B(),w,v))}return u},
awc(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eE()
k.dt(l.e*31+l.d*7+C.C_(new C.T(Date.now(),0,!1)))
w=new B.dQo(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mJ(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a4l.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h3(r))}if(!A.d.b4(t,new B.dQn()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b1j()},
b1j(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h2H(s.ga9f()[r])
v=J.dJ(D.CG.gef(D.CG),new B.dQp(w)).dJ(0)
u=new C.eE()
u.dt(r+s.e)
A.d.fp(v,u)
u=C.a([w],x.s)
A.d.v(u,C.d9(v,0,C.dG(3,"count",x.S),C.S(v).c))
t=new C.eE()
t.dt(s.e*3+r)
A.d.fp(u,t)
s.z=u},
aZe(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dp6.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a4l.h(0,w.f[v])
u.toString
break A}u=B.h2H(w.ga9f()[v])
break A}w.m(new B.dQm(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dQx(),e=new B.dQs(),d=h.d===2?h.gb3B():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mR,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new C.aS(10,10)
p=new C.az(t.length===s?A.bU:A.bD,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga9f()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.ci(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,D.bs4,A.el,g,g,g))}v.push(C.bS(A.bA,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bS(A.bA,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Ah.O0,j<t.length?A.aA:A.bD,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.Mr,C.bS(A.bA,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mR,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.aZ.j(0.25):A.dp
q=new C.aS(12,12)
o=j<t.length
p=new C.az(o?A.aZ:A.b_,1,A.q,-1)
if(o){o=D.CG.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bV
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,g,A.ek,g,g,g))}v.push(C.bS(A.bA,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bS(A.bA,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.feY(u,t>=(h.d===2?3:9)?A.aZ:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.feY(u,A.bU,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.U6,g,g,g))
v=C.cc(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dB(D.d6w[j],h.d===j,new B.dQt(h,j),g,A.bU,g))
u=C.a([new B.eV(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.k8,"New strand",new B.dQu(h),A.aZ,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.CG.h(0,i)
q.toString
a0.push(new B.fj(D.a0c,q,new B.dQv(h,i),A.bU,g))}u.push(C.bS(A.bA,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aw0:D.cQn
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aS(14,14)
a0.push(C.aB(g,C.p(A.A,new C.y(k,g,D.f3W,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bn(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dQw(h,k),g,g,g,g,g,g,!1,A.a5))}u.push(C.B(a0,A.m,g,A.qh,A.j,0,g,g))}return B.jL(A.bU,A.hc,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.UZ.prototype={
S(){return new B.aD6(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aD6.prototype={
Z(){var w,v=this
v.a1()
w=v.qB(v.gc7j())
w.hG(0)
v.d!==$&&C.aP()
v.d=w
B.zB("ecosystem").bB(new B.dTo(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bvn()},
gaMT(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c7k(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaMT()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bl(w),5)===0)B.w1("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dTb())},
aat(d){this.m(new B.dTa(this,d))
B.w4("pop",3,120,0.4)},
c7m(){return this.m(new B.dTc(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.YS,B.feY(r,t.gaMT()?A.aZ:A.c8,s),s),C.E(new C.D(D.bsC,C.bx(C.n(18),C.b3(s,s,s,new B.bdP(t.f,t.r,t.w,s),A.f6),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.fb1,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hH(A.aZ,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dTg(t),w)
v=t.y
v=B.hH(A.bN,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dTh(t),v)
u=t.z
return B.jL(A.aZ,A.hc,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hH(A.ct,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dTi(t),u),new B.eV(C.a([new B.dB("Drought",!1,new B.dTj(t),A.yE,A.aM,s),new B.dB("Disease",!1,new B.dTk(t),D.bHZ,A.bu,s),new B.dB("+ Foxes",!1,new B.dTl(t),s,A.ct,s),new B.dB("+ Rabbits",!1,new B.dTm(t),s,A.bN,s),new B.dB("Reset",!1,t.gc7l(),A.k8,A.aO,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdP.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.sar(D.bXg.aw(0,new C.a8(0,0,d,a0)))
a1.b_(new C.a8(0,0,d,a0),w)
w=h.b
a0=C.aq(A.vg,A.bc,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.b_(new C.a8(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eE()
r.dt(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hl.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d5A(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a8(10,a0,e,u)
t=C.N()
t.r=D.bf7.gp(0)
a1.b_(new C.a8(0,f,d,f+g),t)
i=C.N()
i.r=A.dp.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d5C(h,j,a1)
g.$3(0,100,A.bc)
g.$3(1,120,A.bN)
g.$3(2,24,A.ct)
g=new B.d5B(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bc,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bN,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
au(d){return!0}}
B.aLm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aRQ.prototype={
gv0(){return A.d.cJ(this.a,0,new B.bGa())}}
B.Ub.prototype={
S(){var w=x.S
return new B.bj5(B.i1Y(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bj5.prototype={
gvY(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dDZ())},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dEb(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zB("balance_lab").bB(new B.dEc(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bv0()},
czk(d){var w,v=this
v.m(new B.dE_(v,d))
B.w4("click",v.f[d],60,0.4)
if(v.gvY()===v.d[v.e].gv0()&&v.r.L(0,v.e)){B.w4("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.w1("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dE4(),C.S(k).k("M<1,m>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aG(k," + ")
if(o.gvY()===m[o.e].gv0())s="\u2696\ufe0f Balanced! "+m[o.e].gv0()+" = "+o.gvY()+". The torques are equal, so the seesaw stays level."
else s=o.gvY()>m[o.e].gv0()?"The right side is too strong ("+o.gvY()+" vs "+m[o.e].gv0()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gv0()+" vs "+o.gvY()+"). Add weight to the right, or place it further from the middle."
k=o.gvY()===m[o.e].gv0()?A.aZ:A.aM
k=B.bAa(s,k,o.gvY()===m[o.e].gv0()&&o.e<m.length-1?new B.fj(A.j4,"Next",new B.dE5(o),A.aZ,n):n)
w=C.E(C.cq(new B.dE6(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].gv0(),n,n,n,n,n,n,D.aRJ,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.YS,k,n),w,new C.D(D.ai4,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvY(),n,n,n,n,n,n,D.aRJ,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dB(w+p,o.e===v,new B.dE7(o,v),n,A.aM,n))}return B.jL(A.aM,A.hc,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eV(u,"LEVEL",n),new B.eV(C.a([new B.dB("Clear right side",!1,new B.dE8(o),A.k8,A.c8,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9P.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bE())
v=C.N()
v.r=A.ak.gp(0)
d.aR(i,v)
v=h-120
i=C.N()
i.r=A.aJ.gp(0)
d.b_(new C.a8(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.jc(0,j.b)
u=g*5.8
t=C.bw(new C.a8(-u,-9,u,9),A.hf)
w=C.N()
w.sar(D.bZX.aw(0,new C.a8(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hP.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fsv(d,""+Math.abs(s),new C.v(w,22),A.bV,10)}q=new B.cFp(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aO)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=C.bw(C.ce(new C.v(m,-22),22,v),A.hf)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b_.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fsv(d,"+",new C.v(m,-22),A.bV,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.aZ:A.aL).gp(0)
d.af(new C.v(h,f),7,i)},
au(d){return!0},
gjs(){return this.e}}
B.Vc.prototype={
S(){return new B.bjD(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bjD.prototype={
ga0H(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadW(){var w=this.ga0H(),v=this.r,u=D.ayO[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dXr(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zB("gear_lab").bB(new B.dXs(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bvv()},
c7o(d,e){var w,v=this
v.m(new B.dXh(v,d,e))
if(v.gadW()&&v.w.L(0,v.r)){B.w4("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.w1("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0H(),n=r.ga0H(),m=D.ayO[r.r].a
m=r.gadW()?"\u2705 Done! Ratio "+A.k.ab(r.ga0H(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadW()?A.aZ:A.ct
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.YS,B.bAa(m,w,r.gadW()&&r.r<7?new B.fj(A.j4,"Next",new B.dXl(r),A.aZ,q):q),q),C.E(C.b3(q,q,q,new B.bfi(v,r.f,q),A.f6),1),new C.D(D.ai4,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0H(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a88,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dB(m+s,r.r===t,new B.dXm(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eV(o,"GOAL",q),B.hH(A.aO,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dXn(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avF("Gear "+s+" teeth",p,new B.dXo(r,t),8,40,D.dgp[t],""+p,q))}return B.jL(A.ct,A.hc,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.bfi.prototype={
bQI(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ekJ,D.eqg,D.eGH,D.exn],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bD(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bD(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.F(new C.bE())
return i},
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.ff(g,A.pw)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bZ(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.ddA(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.d6,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cS)
h.$5(new C.v(0,0),g[0],w[0],j,A.n1)
h.$5(new C.v(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.ddB(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aO)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.aZ)},
au(d){return!0}}
B.Ul.prototype={
S(){var w=$.aw()
return new B.bji(new C.ar(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.ar(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.bji.prototype={
Z(){this.a1()
this.aXS()
B.zB("cipher_lab").bB(new B.dIa(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aXS(){this.y=1+A.cH.av(25)
this.z=0},
ga9J(){var w=this
return B.a1I(B.a1I(D.Hg[w.x],w.y),-w.z)===D.Hg[w.x]},
gaxU(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1I(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1I(u,0).split(""),x.s),new B.dHT(),x.dv).h3(0)
break A}w=B.ieL(u,v.e.a.a)
break A}return w},
aT8(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ff(q,A.x8))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aS(2,2)
v.push(new C.bB(1,A.bg,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aO,r,r,new C.bn(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.MK,r,r,r,r),new C.y(C.jK(65+s),r,D.fcR,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m3,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kJ,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dI1(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f73,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kJ,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dI2(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iS,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fDL)
w.push(A.au)
v=A.aO.j(0.12)
u=C.n(14)
t=C.I(A.aO.j(0.4),A.q,1)
w.push(C.p(o,C.zT(p.gaxU().length===0?"\u2026":p.gaxU(),D.fbQ,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bAa(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aO,o))
w.push(A.ac)
w.push(D.fk1)
w.push(A.au)
w.push(p.aT8(p.gaxU()))
w.push(A.au)
w.push(D.fmq)
s=C.cw(w,o,A.bB,o,o,A.ag,!1)}else{w=B.bAa("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1I(D.Hg[p.x],p.y),o,o,o,o,o,o,D.fcq,o,o,o)
u=(p.ga9J()?A.aZ:A.aO).j(0.14)
t=C.n(14)
r=C.I((p.ga9J()?A.aZ:A.aO).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fxf,v,A.R,D.frE,C.p(o,C.d(B.a1I(B.a1I(D.Hg[p.x],p.y),-p.z),o,o,o,o,o,o,D.fdT,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aT8(B.a1I(D.Hg[p.x],p.y)),A.O],x.p)
if(p.ga9J())t.push(B.bAa("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.aZ,new B.fj(A.k8,"Next",new B.dI3(p),A.aZ,o)))
s=C.cw(t,o,A.bB,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eV(C.a([new B.dB("Make a secret",w===0,new B.dI4(p),A.jt,A.aO,o),new B.dB("Crack a code",w===1,new B.dI5(p),A.q7,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dB(n[q],p.r===q,new B.dI6(p,q),o,A.aO,o))
v=C.a([new B.eV(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hH(A.aO,""+u,"Shift",25,1,new B.dI7(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hH(A.aM,""+v,"Shift back",25,0,new B.dI8(p),v))}return B.jL(A.aO,A.hc,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aL0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aLu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.ed.prototype={}
B.ty.prototype={
aq0(d,e,f,g){var w=this
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
B.aai.prototype={}
B.abp.prototype={}
B.a4p.prototype={
bdt(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hi()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aai(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c3d(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new B.bMB())},
ajO(d,e,f,g){var w="p"+this.c++,v=new B.ty(w,e,f,g)
v.aq0(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new B.bMM(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHr(d,e,f,g,h){return A.d.b4(this.b,new B.bMH(e,f,g,h))},
akw(d,e,f,g){var w
if(d===f||this.cHr(0,d,e,f,g))return null
w=new B.abp(d,e,f,g)
this.b.push(w)
return w},
aAt(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zI(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
an7(d){return this.LI(d)&&!d.x&&d.cx>this.zI(d)},
b61(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LI(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7p(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.ze.h(0,v)
if(w!=null)return w.a
return 100},
v8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c3d(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.S(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bMN(a2),t).cJ(0,0,new B.bMO(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new B.bMQ(o)
m=C.a([],x.t)
l=new B.bMP(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new B.bMS(g,l,n)
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
a2.b5Y(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zI(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5Y(e,d,w,!0)
a2.bNy(a4)},
b5Y(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new B.bMD(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bMC(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bMF(C.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.U(v,b3)
j=C.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.b8(C.dK(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b61(t)*(1+t.CW))
a4=b2.aAt(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7p(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQH(e,a0,b8)
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
bQH(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bNy(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAt(o)/a1.b61(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zI(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFB(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdt(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tN(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tN(o,"The "+$.qj().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the "+$.qj().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tN(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.ze.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qj().h(0,n).b
l=f.b
l=l===A.k.jd(l)?""+A.k.V(l):C.u(l)
g=f.c
g=g===A.k.jd(g)?""+A.k.V(g):C.u(g)
a1.tN(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eTD.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tN(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tN(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tN(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tN(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tN(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tN(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFB(d){return A.d.b4(this.a,new B.bMA(d))},
tN(d,e){var w
d.x=!0
d.ay=e
this.bdt(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bi6(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGD(d){var w=d.b
return D.aO9.t(0,w)||D.ze.ai(0,w)||w==="buck"||w==="regulator"},
beU(d){var w,v=!0
if(!this.LI(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.ze.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UI(d,e){var w=this.b
return new C.a_(w,new B.bMU(d,e),C.S(w).k("a_<1>")).gM(0)},
Cw(d){var w,v
if(d.x)return!1
w=d.b
if(D.ze.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bd_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qj().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGD(d)||i.Cw(d))return null
w=i.UI(d,0)
v=i.UI(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.S(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcPV(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jd(r)?""+A.k.V(r):C.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.ze.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGI("battery"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.UI(n,0)+i.UI(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGI("switch"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qj().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zI(k))return"The "+$.qj().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zI(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bMI(i,d))
h=q.b
h=h===A.k.jd(h)?""+A.k.V(h):C.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGI(d){var w=this.a
return new C.a_(w,new B.bML(d),C.S(w).k("a_<1>"))},
aGg(d){return this.aGI(d).b4(0,new B.bMK(0.35))},
pO(d,e){return A.d.b4(this.a,new B.bMJ(e))}}
B.aiF.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.AS.gp(0)
c0.b_(new C.a8(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m4.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m4.ai(0,h.b)?(h.ch-1)*38:0
b4.cEp(c0,new C.v(k*b6+j*(42+i),l*b7),new C.v(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hAw(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bT
c0.bE(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.ae4.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zf
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mV.az(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ch6(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zI(a0)){g=j+0
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
a3.push(new C.bE())
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.av.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cC(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cC(e)).a,s)
s.delete()
a9=new C.jM(new C.eu("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(g+-3,f+-8))}if(!a0.x)g=(D.aO9.t(0,h)||D.ze.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cw(a0)&&r.UI(a0,0)+r.UI(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.jM(new C.eu("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m4.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.AS.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.beU(a0)?A.c8:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beU(a0)){a9=new C.jM(new C.eu("+",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c8,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.XK,F.XR,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bT
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Rw
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bHo())){b3=A.d.cJ(q,0,new B.bHp())
$.W()
b7=C.N()
b7.r=D.ba8.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b_(new C.a8(0,0,b8,b9),b7)
a9=C.fZ(b5,b5,b5,b5,D.f3A,A.a4,A.c6,b5,A.dO,A.c3)
a9.uE(b6-24)
a9.a3(c0,new C.v(12,10))}},
qn(d,e,f,g,h){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dO,A.c3)
v.en()
v.a3(d,f)},
cEp(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hsV(a1,a2,a3)
d.F(new C.cW(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.ae4,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aO,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bT
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aR(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bT
u.r=(a4?A.c:o).gp(0)
a0.aR(d,u)
if(q){n=new C.Sy(new C.vF(C.xd(d),!1,C.a([],x.f5))).gI(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jB()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jB()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jB()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jB()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jB()
i=t[u].MS(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P2(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b1:A.a3
u=g?A.b5:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.sar(new C.a9(v,u,A.x,C.a([e,f,e,t],x.O),A.Hi,null).aw(0,d))
return w},
aw1(d,e,f){return this.P2(d,e,f,!0)},
c2P(d,e){return this.P2(d,A.bn,A.iE,e)},
ahm(d,e){var w,v,u
$.W()
w=C.N()
w.sar(D.aMF.aw(0,C.bW(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e9M)
v=e.ad(0,D.e9V)
u=C.N()
u.r=A.ee.gp(0)
u.c=1.2
d.bE(w,v,u)},
ch6(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.sar(D.bWW.aw(0,D.eQm))
c0.c=3.4
c0.d=A.bT
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mJ
c1.hZ(D.eQe,w)
if(c3){w=C.bw(D.eQl,A.kg)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h8X(c2)
c1.bE(new C.v(-u,0),D.eb3,c0)
c1.bE(D.e8U,new C.v(u,0),c0)
t=c2.x
w=c2.b
s=D.m4.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bCo(c1,c2)
break
case"solar":r=C.bw(D.eQh,A.ix)
c1.aE(r,b3.P2(new C.a8(r.a,r.b,r.c,r.d),A.dt,A.bN,!1))
b9=C.N()
w=C.aq(D.bdx,A.d_,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bly,A.mo,0.3+0.4*c2.f)
v.toString
b9.sar(new C.a9(A.az,A.aC,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a6O))
c1.b_(D.a6O,b9)
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
v.r=A.cs.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-34,18))
b9.F(new C.ap(-6+40*c2.f,-18))
b9.F(new C.ap(4+40*c2.f,-18))
b9.F(new C.ap(-24,18))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aR(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dR.j(0.9).gp(0)
c1.af(D.e9_,4+4*w,b9)
break
case"crank":n=C.bw(D.eQ2,A.hg)
c1.aE(n,b3.aw1(new C.a8(n.a,n.b,n.c,n.d),A.br,A.bK))
b9=C.N()
b9.sar(D.aMG.aw(0,C.bW(A.J,12)))
c1.af(A.J,12,b9)
m=new C.v(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cs.gp(0)
b9.c=5
b9.d=A.bT
c1.bE(A.J,m,b9)
b9=C.N()
b9.sar(D.ejJ.aw(0,C.bW(m,7)))
c1.af(m,7,b9)
b3.ahm(c1,D.eaX)
b3.ahm(c1,D.e8N)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ao,b4,b4,C.a([],w))
v.F(new C.b5(-3,24))
v.F(new C.ap(3,24))
v.F(new C.ap(1.5,0))
v.F(new C.ap(-1.5,0))
v.F(new C.bE())
l=C.N()
l.r=A.bN.gp(0)
c1.aR(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cW(6,-14,2,-30))
l.push(new C.cW(-2,-14,0,-2))
l.push(new C.bE())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cC(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.sar(D.ejp.aw(0,C.bW(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bw(D.eQ9,A.qs)
b9=C.N()
b9.sar(D.ap9.aw(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.ahm(c1,D.Sp)
b3.ahm(c1,D.aHv)
i=c2.w?D.aHv:D.e8x
b9=C.N()
b9.r=A.aw.gp(0)
b9.c=6
b9.d=A.bT
c1.bE(D.Sp,i,b9)
b9=C.N()
b9.r=(c2.w?A.aZ:A.bN).gp(0)
b9.c=4
b9.d=A.bT
c1.bE(D.Sp,i,b9)
b9=C.ll(D.Sp,i,0.85)
b9.toString
w=C.N()
w.r=A.av.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bw(D.aNe,D.aMK)
b9=C.N()
b9.r=A.f9.j(0.25).gp(0)
c1.aE(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aE(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bN,A.ct,c2.fx).gp(0)
c1.bE(D.aHM,D.aHu,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.bE(D.aHM,D.ebk,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.bE(D.e9q,D.aHu,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.ce(new C.v(F.ly[g]*22,0),20,9)
w=C.bw(f,A.hI)
o=b3.P2(f,A.d6,A.oH,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.sar(D.ejB.aw(0,C.bW(A.J,21)))
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
b9.sar(D.ejn.aw(0,C.bW(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bT
c1.bE(new C.v(b9*3,w*3),new C.v(v*12,l*12),j)
break
case"resistor":a1=C.bw(D.aNe,D.aMK)
b9=C.N()
b9.sar(D.c_e.aw(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c_(new C.a8(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.b_(D.eQv,b9)
b9=c2.r
b3.qn(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eaC,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dR.j(0.55*w).gp(0)
v.z=A.zf
c1.af(D.wo,34,v)}n=C.ce(D.e82,12,18)
c1.aE(C.bw(n,A.hI),b3.P2(n,A.bn,A.e3,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.ds.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Ww
else{v=C.aq(A.e3,A.i3,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.EY
else{l=C.aq(A.dt,A.dR,c2.fx)
l.toString}w.sar(new C.bV(A.t8,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bW(A.rJ,17)))
c1.af(A.rJ,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rJ,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cW(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aR(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.ebg,D.ebi,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e9j,D.e9m,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bD(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dt,D.ben,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aR(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.av.j(0.6*w).gp(0)
v.z=D.drC
c1.af(A.rJ,30,v)}w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.ebm,D.ebl,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.e9s,D.e9r,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cW(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j3
else{l=C.aq(A.es,D.aeR,c2.fx)
l.toString}if(t)j=A.kw
else{j=C.aq(A.ku,A.av,c2.fx)
j.toString}v.sar(new C.a9(A.az,A.aC,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.ePz))
c1.aR(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jm.gp(0)
c1.aR(a6,v)
v=C.N()
v.r=A.eC.gp(0)
c1.b_(D.ePF,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cW(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aR(w,b9)
break
case"motor":a7=new C.a8(-28,-14,20,14)
c1.aE(C.bw(a7,A.hf),b3.aw1(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cp.gp(0)
c1.b_(D.ePm,b9)
b9=C.N()
b9.r=A.cs.gp(0)
c1.b_(D.ePn,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.ce(D.e8k,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.aw.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qn(c1,"M",D.eaW,A.aw,14)
break
case"buzzer":a8=C.ce(A.J,42,42)
b9=C.N()
b9.sar(D.ejF.aw(0,a8))
c1.hZ(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b_.gp(0)
c1.af(A.J,6,b9)
b3.qn(c1,"+",D.eaP,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bW(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bU.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bw(D.eQ5,A.hf)
w=C.N()
w.sar(D.bXU.aw(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cW(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bD(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.bf0.j(0.5*b9).gp(0)
w.z=A.jw
c1.aR(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bT
b9.r=C.aq(A.lP,A3.Xz,c2.fx).gp(0)
c1.aR(a9,b9)
break
case"capacitor":a7=new C.a8(-16,-22,16,18)
b9=C.bw(a7,A.hf)
w=C.N()
w.sar(D.bWO.aw(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bN.gp(0)
c1.b_(D.ePL,w)
for(p=0;p<4;++p){b0=new C.jM(new C.eu("\u2212",b4,b4,A.cP,b4,b4,b4,b4,b4,b4,new C.H(!0,A.aw,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.jv(1),b4,b4,b4,b4,A.c3,b4)
b0.en()
b0.a3(c1,new C.v(-14,-18+p*9))}b1=new C.a8(-16,-24,16,-17)
c1.aE(C.bw(b1,A.hI),b3.c2P(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.aZ.j(0.5).gp(0)
c1.b_(new C.a8(-3,w,11,w+b9),v)
b3.qn(c1,"1F",D.wo,A.c,11)
break
case"radio":a1=C.bw(D.a6O,A.hg)
b9=C.N()
b9.sar(D.c_u.aw(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oH.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bw(D.eQ6,A.ix)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lP.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fK:A.nV).gp(0)
c1.b_(D.ePp,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bE(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aMG.aw(0,C.bW(D.a5O,6)))
c1.af(D.a5O,6,w)
w=C.N()
w.r=A.oH.gp(0)
c1.af(D.e8T,4,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=1.8
c1.bE(D.e8R,D.aHz,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bW(D.aHz,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.o_.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bw(D.eQg,A.hf)
v=C.N()
v.r=L.mn.gp(0)
c1.aE(w,v)
b2=C.bw(D.eQd,A.hI)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.oP(),!0)
b9.translate(-33,-21)
E.h55(c1,D.eWm,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.aZ.gp(0)
c1.af(D.e94,1.6,b9)}else{w=C.N()
w.r=D.vs.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aR(b9,w)}b9=C.N()
b9.r=A.br.gp(0)
c1.b_(D.ePE,b9)
break}B.ick(c1,c2,b3.b.d,b3.gc7q())
if(t)b3.qn(c1,"\u2716",D.ebp,A.av,14)
if(s)c1.a.restore()},
bCo(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a8(-28,-13,28,13)
d.aE(C.bw(w,A.qs),m.aw1(w,A.dt,A.j_))
v=new C.a8(-22,-13,22,13)
$.W()
u=C.N()
u.sar(D.ap2.aw(0,v))
d.b_(v,u)
u=C.N()
u.r=A.dS.gp(0)
d.b_(D.ePU,u)
t=new C.a8(28,-5,34,5)
d.aE(C.bw(t,A.he),m.P2(t,A.dt,A.iE,!0))
m.qn(d,"+",D.e8C,A.aM,11)
m.qn(d,"\u2212",D.eaY,A.ad,11)
m.qn(d,C.u(l===A.k.jd(l)?A.k.V(l):l)+"V",D.eaI,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bD.gp(0)
d.b_(D.ePT,u)
u=e.as
s=C.N()
s.r=C.aq(A.av,A.aZ,u).gp(0)
d.b_(new C.a8(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qn(d,"FLAT",D.eaB,A.c8,9)}if(l>2){u=C.N()
u.r=A.b_.gp(0)
u.c=1
d.bE(D.e88,D.aHe,u)
m.qn(d,l>3?"3 cells":"2 cells",D.eaH,A.aA,8)}}else if(l<=9){r=new C.a8(-22,-17,22,17)
u=C.bw(r,A.qs)
$.W()
s=C.N()
s.sar(D.c_1.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cS.gp(0)
d.b_(D.ePV,s)
for(u=d.a,q=0;q<2;++q){p=F.ays[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.aMF.aw(0,C.bW(new C.v(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qn(d,"9V",D.eaD,A.c,16)}else{r=new C.a8(-34,-16,34,16)
u=C.bw(r,A.ix)
$.W()
s=C.N()
s.sar(D.ap2.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bH.gp(0)
d.b_(D.eQf,s)
for(u=d.a,q=0;q<2;++q){s=C.bw(C.ce(new C.v(F.a3C[q],-20),8,10),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cs.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qn(d,"+",D.e8J,A.av,10)
m.qn(d,"12V",D.eaE,A.aw,15)}},
au(d){return!0}}
B.mC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ty(o,r,q,p)
n.aq0(o,r,q,p)
k.push(n)
J.iw(s[4],new B.cm5(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akw(m,u[1],l,u[3])}}}
B.aiD.prototype={
S(){var w=x.N
return new B.aiE(A.J,A.ax,C.U(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aiE.prototype={
adZ(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bH2(w,d))
w.as=C.cM(A.lo,new B.bH3(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bsd()},
a_O(d,e){return this.cf2(d,e)},
b0g(d){return this.a_O(d,!1)},
cf2(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_O=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r8:A.xI
p=d.b
w=3
return C.b(E.h5o(s,r,p,d.ax<3.2,q,$.qj().h(0,p).b),$async$a_O)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_O,v)},
crK(d){var w=this,v=new C.T(Date.now(),0,!1),u=w.at.ca(0,d.a,new B.bH4()),t=J.cF(u)
t.L(u,v)
t.br(u,new B.bH5(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a18(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kx,new B.bH6(w,u,d))}},
a_u(d){return this.cdq(d)},
cdq(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_u=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.idv(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_u)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_u,v)},
a18(d){return this.cpk(d)},
cpk(d){var w=0,v=C.j(x.H),u=this,t
var $async$a18=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kT,null,new B.bH0(u,d),t,!0,!0,!1,A.jS,!1,!1,x.H),$async$a18)
case 2:return C.h(null,v)}})
return C.i($async$a18,v)},
Z(){this.a1()
this.bf3()
this.ll()},
bf3(){this.a.c.e=new B.bHl(this)},
lD(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v8(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.m4.h(0,s.b)
if((r==null?null:r.b)!==D.zF)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_O(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dH(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dH(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cH.aj()<0.5
else u=!1
if(u)E.dH(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dH(900+A.cH.av(800),"",90,0,0.1,o)
if(A.cH.aj()<0.35)E.dH(300+A.cH.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cH.aj()<0.4
else u=!1
if(u)E.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dH(330+A.o.E(110*A.k.bl(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dH((A.k.bl(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dH(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dH(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cH.aj()<0.5
else u=!1
if(u)E.dH(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dH(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dH(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bHm())},
b7i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m4.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0X(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.S(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m4.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cEq(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m4.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m4.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hsV(new C.v(k,n),new C.v(i,l),p)
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
adX(){this.a.toString
this.m(new B.bGw())},
boX(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d0v[v]
if(!A.d.b4(p.a.c.a,new B.bHn(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.In:o
s=s?K.In:o
q=t.ajO(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dH(1200,"",50,0,0.3,"tri")
p.adX()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.QK[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.am(u+1,2)):w
r=t?A.d.fQ(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b0M(s,!0))
n.a.toString
if(t)w.push(n.b0M(r,!0))
w.push(C.E(C.cq(new B.bHk(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0M(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qj()
s=t.h(0,u).d.j(0.14)
r=new C.aS(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aB(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zU,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nC,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bn(r,r,r,r),p,p,A.n),p,p,p,F.tP,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGx(this,u),p,p,p,p,p,p,!1,A.a5))}return C.p(p,C.cw(m,p,A.h8,p,p,A.aP,!1),A.f,p,p,new C.o(F.AQ,p,new C.bO(A.Y,A.Y,new C.az(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZj(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.acK,w,C.I(A.bD,A.q,1),v,w,w,A.n),w,w,w,w,F.ai5,w,w,w)},
ch7(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qj().h(0,o),m=d.dy,l=d.fr,k=new B.bGQ(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Jq,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bO2,p,p,p,new B.bGD(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GM,p,p,p,new B.bGE(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.DI,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.fcf,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c8:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bd_(d)
if(v!=null){l=(d.x?A.av:A.aF).j(0.14)
j=C.n(10)
i=C.I((d.x?A.av:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i6,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fiG,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cq,p,p,p),p))}if(B.h39(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dB("CH "+t,d.at===u,new B.bGF(q,d,u),p,h,p))}l=C.bS(A.bA,l,A.bq,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Cw(d)?"Showing: "+F.Qk[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.Cw(d))l.push(new B.fj(A.Gl,"Open big screen",new B.bGI(q,d),h,p))
A.d.v(m,l)}if(D.m4.ai(0,o)&&!B.h39(o)){l=C.a([A.am,C.d(q.a.c.Cw(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.Cw(d))l.push(new B.fj(A.O1,"Open the "+$.qj().h(0,o).b,new B.bGJ(q,d),h,p))
A.d.v(m,l)}if(D.m4.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.BZ,"Make it bigger (or tap it 4 times)",new B.bGK(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Cw(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fd4,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dhz[s]
j=r===A.k.jd(r)?A.k.V(r):r
l.push(new B.dB(C.u(j)+" V out",d.e===r,new B.bGL(q,d,r),p,h,p))}i.push(new C.D(A.lU,C.bS(A.bA,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fAU)
A.d.v(m,i)}if(q.a.c.LI(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zI(d),2)
i=q.a.c
w=i.an7(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.an7(d)?A.c8:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zI(d),0,1)
i=q.a.c.an7(d)?A.av:A.aZ
m.push(new C.D(A.i6,C.x(C.a([l,A.cV,C.bx(j,C.m6(A.bD,p,p,5,p,w,new C.lZ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i6,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f70,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d7c[s]
j=r===1.5?"1.5 V (rechargeable)":C.u(r)+" V"
l.push(new B.dB(j,d.e===r,new B.bGM(q,d,r),p,h,p))}m.push(C.bS(A.bA,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYV[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dB(j,d.r===r,new B.bGN(q,d,r),p,h,p))}m.push(C.bS(A.bA,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGO(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGP(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bGG(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bGH(d)))
if(o==="crank")m.push(D.fwn)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hh,p,p,p))
return q.aZj(new C.cS(D.b07,C.cc(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.baM.prototype={}
B.V_.prototype={
S(){return new B.aD7(B.h8W(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aD7.prototype={
Z(){this.a1()
$.aW.bY$.push(this)
this.adY()},
adY(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fyQ(),$async$adY)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.icI(t.d,r)
if(s!=null){t.m(new B.dTw(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adY,v)},
EW(){var w,v=this
if(!v.as)return
w=B.i3f(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDJ(w)},
j8(d){if(d!==A.fw)this.EW()},
q(){$.aW.hP(this)
this.EW()
this.a2()},
c7s(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.S(v).k("a_<1>")
t=new C.a_(v,new B.dTF(q),u).gM(0)
s=new C.a_(v,new B.dTG(),u).gM(0)
r=new C.a_(v,w.gcTp(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dTH(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EW()
if(A.o.E(q.w,10)===0){w=q.f
$.ahR()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahR()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BN("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dTI())
q.EW()
w=q.c
w.toString
w=C.Xn(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahR()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mq,p,p,p,p,p,p,p,p,p,p))}},
agD(){var w=0,v=C.j(x.H),u=this,t
var $async$agD=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dTv(u),t,null,!0,!0,x.H),$async$agD)
case 2:return C.h(null,v)}})
return C.i($async$agD,v)},
aZi(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aB(w,C.hx(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5)},
aZh(d,e,f,g){return this.aZi(d,e,f,g,null)},
aqG(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aB(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.eg,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),1)},
aeW(){var w=0,v=C.j(x.H),u=this,t
var $async$aeW=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).cm(C.ea(new B.dTr(u),!1,null,x.H)),$async$aeW)
case 2:t=u.e.gbk()
if(t!=null)t.bf3()
if(u.c!=null)u.m(new B.dTs())
u.EW()
return C.h(null,v)}})
return C.i($async$aeW,v)},
bFu(){var w,v,u,t,s=null,r=this.f
$.ahR()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bc:A.av
u=C.n(9)
t=C.I(F.AQ,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wE,s,s,s),s,s,s),A.f,s,D.b0e,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahJ(){var w=0,v=C.j(x.H),u=this,t
var $async$ahJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kT,null,new B.dTE(u),t,!0,!0,!0,A.jS,!1,!1,x.H),$async$ahJ)
case 2:return C.h(null,v)}})
return C.i($async$ahJ,v)},
c7t(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aB(r,C.p(r,D.bPg,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dTK(d),r,r,r,r,r,r,!1,A.a5),o=C.n(11)
o=C.p(r,D.b5U,A.f,r,r,new C.o(A.bm,r,C.I(A.aO.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fyX,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f1:A.fW,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.axe(s.gcd7(),r),A.rS,s.aZh(A.yi,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dTL(s,d)),s.aZi(A.ls,"Challenges",A.aM,s.gcum(),s.bFu()),s.aZh(A.NV,"How to play",A.aO,new B.dTM(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqG(A.o9,"Circuits",A.bu,s.gcn9()),A.bp,s.aqG(A.oW,"Repair",A.aM,new B.dTN(s)),A.bp,s.aqG(D.yj,"Clear",A.c8,new B.dTO(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AQ,r,new C.bO(A.Y,A.Y,new C.az(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.byv,r,r,r)},
B(d){var w=this,v=null
$.arN="tech"
return C.c6(v,A.c_,C.bm(!0,C.x(C.a([w.c7t(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h7M(w.d,w.e,w.gc7r(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.axe.prototype={
S(){return new B.b8Y(null,null)}}
B.b8Y.prototype={
gawX(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.T,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawX().q()
this.btt()},
B(d){var w=null,v=this.a.c
return C.aB(w,C.hx(new C.a7(42,42,C.c7(this.gawX(),new B.cCX(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
B.b8X.prototype={
a3(d,e){var w,v,u,t=null,s=e.ed(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mJ
d.af(s,r+2+o*2,w)
w=C.N()
w.sar(D.ejA.aw(0,C.bW(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.sar(new C.fY(A.A,0,6.283185307179586,A.x,D.cQm,t,new C.mq(p)).aw(0,C.bW(s,r)))
d.af(s,r,v)
p=new B.cCW(d)
p.$3(s.ad(0,A.rJ),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e9D),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.ebt),2.6,0.5+0.5*Math.cos(q))
u=C.fZ(t,t,t,t,D.f3G,A.a4,A.c6,t,A.dO,A.c3)
u.en()
u.a3(d,s.ad(0,new C.v(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.axy.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bsc()}}
B.aJx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx4.prototype={}
B.fP.prototype={}
B.Jl.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m9.prototype={}
B.UH.prototype={
S(){return new B.bjp(null,null)}}
B.bjp.prototype={
ga9c(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.o5,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga9c().q()
this.bvj()},
gRP(){var w=this.ga9c().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m4.h(0,this.a.c)
if(v==null)v=D.aNv
return C.c6(w,U.LM,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zG?this.bHG(v):this.cjU(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mF,w,w,w,new B.dPs(d),w,w,w,C.nE(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f5h,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c7u(d){var w
A:{if(D.IL===d){w=0.46153846153846156
break A}if(D.uP===d){w=0.45
break A}if(D.wu===d){w=0.9259259259259258
break A}if(D.T0===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjU(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IL
A:{if(D.IL===p){w=44
break A}if(D.uP===p){w=30
break A}if(D.wu===p){w=22
break A}if(D.T0===p){w=26
break A}w=14
break A}v=C.c7(this.ga9c(),new B.dPr(this,w,d,o),q)
if(p===D.a6X)v=new C.Dp(D.bz7,v,q)
p=this.c7u(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fL(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A2.FT,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a9(A.az,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsP,new C.R(u,u,u,u),q,q,q),q)},
b6u(d){var w,v,u,t=null,s=new C.T(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bl(this.gRP()*0.4),0,100),q=d.b===D.IL,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aX(A.o.u(C.dk(s)),2,"0")+":"+A.a.aX(A.o.u(C.h4(s)),2,"0"),t,t,t,t,t,t,A.rZ,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aS(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bn(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byQ,t,t,t,3))}n.push(A.dc)
n.push(D.frQ)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bj(A.A,C.p(t,t,A.f,t,t,new C.o(A.aZ,t,t,C.n(2),t,t,A.n),t,t,t,A2.FT,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qv)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fj0,t,t,t))
return new C.D(new C.R(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auR(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.dcR,new C.a9(A.az,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.f9O,v,v,v)],w))
return C.aB(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dPn(this,d),v,v,v,v,v,v,!1,A.a5)},
bYV(d,e){return this.auR(d,e,!0)},
bYD(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.T0||n===D.wu,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.ks,0.5)
l.toString
l=C.a([k,A.dy,l],x.O)
k=p.b6u(d)
w=m?190:138
v=C.n(24)
u=C.I(A.b_,A.q,1)
w=C.aB(o,C.p(o,C.bx(C.n(23),C.b3(o,o,o,new B.aeD(0,p.gRP(),o),A.f6),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hS,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dPl(p),o,o,o,o,o,o,!1,A.a5)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.ka[s]
t.push(new C.cp(A.A,o,o,p.bYV(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m3(0.92,t,v,8,12,A7.vG,o,!1),1)],u)
if(n!==D.a6X){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.d9(F.ka,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auR(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qh,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.btF,T.ajx,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a9(A.az,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bB1(d,e){var w=null
return C.p(w,C.x(C.a([this.b6u(d),C.E(C.b3(w,w,w,new B.aeD(e,this.gRP(),w),A.f6),1),C.aB(w,C.p(w,C.av(C.d(F.ka[e].a,w,w,w,w,w,w,A.Jg,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dPg(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHG(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fL(1.5384615384615383,C.p(t,C.c7(this.ga9c(),new B.dPj(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a9(A.az,A.aC,A.x,w,t,t),A.n),t,t,t,D.byq,new C.R(8,8,8,s),t,t,t),t)}}
B.bv8.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.ks,0.4)
t.toString
w.sar(new C.a9(A.az,A.aC,A.x,C.a([u,A.dy,t],x.O),null,null).aw(0,new C.a8(0,0,n,m)))
d.b_(new C.a8(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.drH
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aeD.prototype={
a3(d,e){return E.Rq(d,e,this.b,this.c)},
au(d){return!0}}
B.aLj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aWu.prototype={}
B.Vv.prototype={
S(){return new B.bjZ(C.U(x.S,x.N),A.ax,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjZ.prototype={
gvw(){var w=this.f
return w===$?this.f=B.h3h(0):w},
Z(){this.a1()
this.ll()
B.zB("laser_maze").bB(new B.ecv(this),x.P)},
lD(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.ecw())},
ae2(d){var w=this
w.m(new B.ecl(w,d))
B.w1("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c7K(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdB()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bl((d.a-t)/v)
q=A.k.bl((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvw().b.t(0,p)||p===o.gvw().e||o.gvw().d.ai(0,p))return
o.m(new B.ecm(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.ecp(t,B.hsO(t.gvw(),t.r))),q=x.p,p=C.a([new B.dB("Clear mirrors",!1,new B.ecq(t),A.k8,A.aM,s),new B.dB("Skip",!1,new B.ecr(t),D.bI_,A.aO,s)],q)
if(t.d>0)p.push(new B.dB("Back",!1,new B.ecs(t),D.bI0,A.aO,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dB(""+u,v===t.d,new B.ect(t,v),s,A.av,s))}return B.jL(A.av,A.hc,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eV(p,s,s),new B.eV(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bgZ.prototype={
a3(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdB()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.diG(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bw(new C.a8(a5,a6,a8,a4),A.kg)
v=$.W()
u=C.N()
u.r=L.mn.gp(0)
a9.aE(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dp.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dp.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bw(C.ce(p,u,u),A.hg)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.c_A.aw(0,C.ce(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.d9(a8,1,a2,C.S(a8).c),v=a8.$ti,a8=new C.bQ(a8,a8.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bD(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fG
a8.r=A.av.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lA
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fG
a8.r=D.aeR.gp(0)
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fG
a8.r=A.c.gp(0)
a9.aR(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.CI
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.br).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.jM(new C.eu("\u2605",a2,a2,A.cP,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.jv(1),a2,a2,a2,a2,A.c3,a2)
i.en()
j=i.b
h=j.c
j=j.a.c
i.a3(a9,new C.v(m-h/2,k-j.gbc(j)/2))}g=new B.diJ(a7,a3,a9)
a1.c.bM(0,new B.diH(g))
a4.d.bM(0,new B.diI(g))
f=a7.$1(a4.e)
a4=C.bw(C.ce(f,o,a3*0.8),A.hg)
a8=C.N()
a8.r=A.av.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.v(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.af(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.L)(a4),++e){d=a4[e]
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
B.Vx.prototype={
S(){var w=x.n
return new B.aDM(A.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDM.prototype={
Z(){this.a1()
this.ll()
B.zB("light_mixer").bB(new B.ecO(this),x.P)},
lD(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZo()
w.m(new B.ecP())},
ax0(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.av(5)/4)
u.e=t
if(A.d.d7(t,new B.ecz()))u.e[w.av(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZo(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.ho5(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.w4(v,A.o.am(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.w1("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gczn(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cSp[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.ecI(v,B.ho5(v.e,t))),r=t[0]
r=B.hH(A.av,""+A.k.V(r*100)+"%","Red",1,0,new B.ecJ(v),r)
w=t[1]
w=B.hH(A.bc,""+A.k.V(w*100)+"%","Green",1,0,new B.ecK(v),w)
t=t[2]
return B.jL(A.b8,A.hc,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hH(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.ecL(v),t),new C.bI(A.a8,u,u,new B.fj(A.hq,"Lock it in",new B.ecM(v),A.aZ,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bhd.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bw(new C.a8(0,0,n,m),A.qr)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bw(new C.a8(0,0,n,m),A.qr)),$.oP(),!0)
v=e.gdB()*0.3
u=e.ed(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.v(0,l)),u.ad(0,new C.v(l,t)),u.ad(0,new C.v(v*0.55,t))]
r=[A.EF,I.adS,I.aei]
d.lj(new C.a8(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nK
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bw(new C.a8(0,0,n,m),A.qr)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b_.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLL.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx9.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvN()}}
B.aLM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxa.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvO()}}
B.btY.prototype={}
B.a8h.prototype={
B(d){var w=null
return C.c6(C.eF(w,w,w,!0,!0,D.af3,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao1,w,w,w,new B.cgJ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fHA,w,w,w,1,w,!0),D.af3,C.cw(C.a([D.ecL,C.cq(new B.cgK())],x.p),w,D.buF,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.Wo.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aED(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aED.prototype={
Z(){this.a1()
this.ll()},
b4s(d){var w=this.d.length
return A.o.E(A.k.bl(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lD(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4s(v.f)
if(w!==v.x){v.x=w
B.lk("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eM3(v))
B.BN("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c8H(){if(this.d.length<2)return
this.m(new B.eM_(this))},
aZK(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eLZ(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8G(),p=s.d,o=C.E(C.aB(r,C.b3(r,r,r,new B.bvk(p,s.f,r),A.f6),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fha,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.axF[A.o.E(v,8)].j(0.9)
t=new C.aS(20,20)
o.push(C.aB(r,C.p(r,new C.y(p[v],r,D.fgq,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bn(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eM1(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5))}p=A.c.j(0.07)
return B.jL(A.aM,A.hc,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eV(o,r,r),C.B(C.a([C.E(C.aM(r,A.U,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kK,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eM2(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hE,"Add",s.gc8E(s),A.c,r),A.bp,new B.fj(A.my,"Spin",q,A.aZ,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.bvk.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.bby.gp(0)
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
o=C.bW(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.axF[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bW(d,a0)
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
k=new C.jM(new C.eu(o,i,i,A.cP,i,i,i,i,i,i,D.f4t),A.a4,A.c6,new C.jv(1),i,i,i,i,A.c3,i)
k.en()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new C.v(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.N()
f.r=D.aeI.gp(0)
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
j.F(new C.bE())
e=C.N()
e.r=A.c.gp(0)
a1.aR(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aR(j,e)},
au(d){return!0}}
B.V6.prototype={
S(){return new B.bjy($,A.bx,0,C.a([],x.X),null,null)}}
B.bjy.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BN("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a53(900,new B.dVK())}w.m(new B.dVL())},
aZM(d){return this.m(new B.dVF(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.E(A.k.dj(m),60)),2,"0")
m=C.b3(n,n,n,new B.bq8(l,A.c8,n),A.aOP)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f8L,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f7P,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wA,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d9W[r]
u.push(new B.dB(""+q+" min",o.d===q,new B.dVH(o,q),n,A.c8,n))}m=o.f
p=m?A1.yr:A.iM
m=m?"Pause":"Start"
return B.jL(A.c8,A.hc,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eV(u,n,n),new B.eV(C.a([new B.fj(p,m,new B.dVI(o),A.aZ,n),new B.fj(A.k8,"Reset",new B.dVJ(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bq8.prototype={
a3(d,e){var w,v,u,t,s=e.ed(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=C.bW(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bT
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sar(new C.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bW(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.Uh.prototype={
S(){return new B.bja($,A.bx,0,C.a([],x.X),null,null)}}
B.bja.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rp.h(0,p.d)
w.toString
v=A.d.ff(w,new B.dGB())
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
B.lk("flute",D.c0c[t]+5,1400,0.35)}p.m(new B.dGC())},
gc8K(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Kb("Press Start",0.5)
w=D.Rp.h(0,this.d)
w.toString
v=A.d.ff(w,new B.dGw())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Kb("Breathe in",0.5+0.5*A.dC.az(0,p))
case 1:return new C.Kb("Hold",1)
case 2:return new C.Kb("Breathe out",1-0.5*A.dC.az(0,p))
default:return new C.Kb("Hold",0.5)}}}return new C.Kb("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8K(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hn.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hn.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.DK,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kK,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Rp.gef(D.Rp));w.C();){v=w.gR(w)
o.push(new B.dB(v,r.d===v,new B.dGz(r,v),q,A.hn,q))}w=r.e
v=w?A.GB:A.iM
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dGA(r),A.aZ,q))
return B.jL(A.hn,A.hc,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eV(o,q,q))}}
B.aI1.prototype={}
B.UY.prototype={
S(){return new B.bjs(new C.cs(null,x.A),C.a([],x.au),A.aw,A.c)}}
B.bjs.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mG,s,s,s,new B.dT0(t,d),s,s,s,s,"Share",s)],r),p=C.bx(C.n(18),new C.ey(C.aB(s,C.b3(s,s,s,new B.blu(t.e,t.x,s),A.f6),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dT1(t),new B.dT2(t),s,s,s,s,s,s,s,s,s,new B.dT3(t),s,s,s,s,!1,A.a5),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cRN[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Fh(v,u,new B.dT4(t,v),!1,s))}u=t.r
return B.jL(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.x(C.a([new B.eV(o,s,s),B.hH(A.bE,""+A.k.V(u),"Brush",30,2,new B.dT5(t),u),new B.eV(C.a([new B.dB("Eraser",t.w,new B.dT6(t),A.Gd,A.bE,s),new B.fj(A.rn,"Undo",new B.dT7(t),A.c,s),new B.fj(A.e9,"Clear",new B.dT8(t),A.c,s),new B.fj(A.NR,"Paper",new B.dT9(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.blu.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.b_(new C.a8(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bT
p.e=A.fG
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
i=new C.cW(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bD(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bD(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cC(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.VK.prototype={
S(){var w=x.S
return new B.aDW(C.aX(w),C.aX(w))}}
B.aDW.prototype={
Z(){this.a1()
this.asb()},
asb(){var w,v,u=this,t=x.N,s=C.bp(D.deP,!0,t)
A.d.CP(s)
w=x.S
v=C.S(s).c
t=C.C(C.d9(s,0,C.dG(u.d,"count",w),v),t)
A.d.v(t,C.d9(s,0,C.dG(u.d,"count",w),v))
A.d.CP(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8F(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lk("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.eia(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bM(A.ne,new B.eib(s,v,u),t)
else{s.x=!0
C.bM(Ab.Fv,new B.eic(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.U_,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xS,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hH,A.j,0,q,q),q),C.E(C.im(!0,q,q,A.y,new C.hQ(v,8,8,1,q),new B.eig(r),r.e.length,A.bl,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cTf[t]
o.push(new B.dB(s.b,r.d===s.a,new B.eih(r,s),q,A.aO,q))}o.push(new B.fj(D.bHY,"New game",new B.eii(r),A.aZ,q))
return B.jL(A.aO,A.hc,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eV(o,q,q))}}
B.VX.prototype={
S(){return new B.aEh(C.a([],x.t))}}
B.aEh.prototype={
c8J(d){A.d.a8(this.d)
this.w=!0
this.aZL()},
aZL(){this.d.push(A.cH.av(4))
this.e=0
this.ZU()},
ZU(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.et3(t))
s=x.H
w=3
return C.b(C.bM(A.lT,null,s),$async$ZU)
case 3:r=t.d,q=C.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aST(n)
w=7
return C.b(C.bM(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZU)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.et4(t))
case 1:return C.h(u,v)}})
return C.i($async$ZU,v)},
aST(d){this.m(new B.et1(this,d))
B.lk("marimba",D.apE[d]+5,450,0.55)
C.bM(A.Ft,new B.et2(this),x.H)},
c8L(d){var w,v,u=this
if(!u.w||u.r)return
u.aST(d)
w=u.d
v=u.e
if(w[v]!==d){E.dH(90,"",600,0,0.5,"saw")
u.m(new B.et5(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.et6(u))
C.bM(A.im,new B.et7(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.U6,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fhx,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awz[v]
u=u.j(q.f===v?1:0.35)
t=new C.aS(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.awz[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aB(p,C.df(p,p,p,p,A.bd,new C.o(u,p,new C.bO(r,r,r,r),new C.bn(t,t,t,t),s,p,A.n),A.jo,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.et8(q,v),p,p,p,p,p,p,!1,A.a5))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d8,new C.fL(1,C.m3(1,l,2,12,12,p,A.dT,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jL(A.bH,A.hc,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eV(C.a([new B.fj(A.iM,n,q.gc8I(q),A.aZ,p)],m),p,p))}}
B.Wh.prototype={
S(){return new B.bkG(new C.ar(A.as,$.aw()))}}
B.bkG.prototype={
avJ(d){return C.oM(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eHl(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eHu()
l=C.aM(m,A.U,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Aa.x2),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aZF),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kJ,"Bill amount",!0,!0,!1,m,m,m,m,D.ff5,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eHq(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQi,!0,A.a4,m,A.an,m,m,m,m)
k=A.aZ.j(0.1)
s=C.n(20)
r=C.I(A.aZ.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avJ(w)),t.$2("Total","$"+n.avJ(v)),X.Mc,t.$3$big("Each of "+n.f+" pays","$"+n.avJ(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bP,m,m,m)],q),m,A.fD,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cE1[p]
r.push(new B.dB(""+o+"%",A.k.V(n.e)===o,new B.eHr(n,o),m,A.aZ,m))}l=n.f
return B.jL(A.aZ,A.hc,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eV(r,"TIP",m),B.hH(A.aO,""+l,"People",20,1,new B.eHs(n),l),new B.eV(C.a([new B.dB("Round up",n.r,new B.eHt(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.VI.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bk9(w,A.cH,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk9.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bl(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
B.a8g("snare",0.5)}u.m(new B.egQ())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hi()
u.w=t
u.x=t?0:3.141592653589793
B.lk("bell",24,400,0.5)}u.m(new B.egR())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bda(v,o.r>0,n))}u=C.aB(n,C.av(C.bS(A.fJ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egJ(o),n,n,n,n,n,n,!1,A.a5)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d6,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aB(n,C.av(C.ef(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fek,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ejE,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egK(o),n,n,n,n,n,n,!1,A.a5)}else{m=o.as
u=C.aB(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f3Y,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kK,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egL(o),n,n,n,n,n,n,!1,A.a5)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d7o[r]
v.push(new B.dB(q.b,o.d===q.a,new B.egM(o,q),q.c,A.bu,n))}v=C.a([new B.eV(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hH(A.bu,""+s,"Dice",4,1,new B.egN(o),s))}if(o.d==="num"){s=o.z
s=B.hH(A.bu,""+s,"From",100,1,new B.egO(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hH(A.bu,""+p,"To",1000,2,new B.egP(o),p)],m))}return B.jL(A.bu,A.hc,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bda.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cH.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=C.a([],x.p)
for(s=D.dqo.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.abK,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aL6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx0.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv6()}}
B.aLp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvq()}}
B.aLU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxf.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvW()}}
B.aMn.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxr.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwp()}}
B.b6K.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEw.h(0,t)
$.arN=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nr,u,u,u,new B.ctE(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NV,s,u,u,u,22),u,u,u,new B.ctF(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bxI,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AQ,u,new C.bO(new C.az(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fx,u,u,1/0))
return C.c6(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dB.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.eg],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tP,C.aB(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bd,new C.o(p,s,o,r,s,s,A.n),A.eJ,s,s,s,A.h9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ctA(t),s,s,s,s,s,s,!1,A.a5),s)}}
B.eV.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cc(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cv,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avF.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.avd(d).cK3(q,A.bD,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.aa4(C.l1(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A.Jg,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tP,C.aF(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ai.ahS,C.B(C.a([C.X(w.c,u,v,v,v,17),A.eg,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.ctz(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.Fh.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f2h:u
w=t?A.c:A.b_
w=C.I(w,A.q,t?2.5:1)
return C.aB(u,C.df(u,u,u,u,A.bd,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hB,u,r,D.ahE,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.ctG(v),u,u,u,u,u,u,!1,A.a5)}}
B.mF.prototype={
a53(d,e){var w=C.dj()
w.seL(C.cM(C.dE(0,0,0,d,0,0),new B.ctB(this,w,e)))
this.fu$.push(w.bj())},
ll(){var w=this,v=w.qB(new B.ctD(w))
v.hG(0)
w.ft$!==$&&C.aP()
w.ft$=v}}
B.ab4.prototype={
byA(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gR(0)
n=J.a4(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bBP()
g.ay!==$&&C.aP()
g.ay=w},
bBP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.ab5.prototype={
cFY(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.FC(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v7.prototype={}
B.P8.prototype={}
B.y7.prototype={}
B.P7.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.apy[w.av(7)]
w=w.hi()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lk(u,v+w-12,2200,0.1)}}
B.Vd.prototype={
S(){var w=$.aw()
return new B.aDi(new C.cs(null,x.A),new C.ar(A.as,w),new B.P7(A.cH),D.d9o,A.ax,D.a3o,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDi.prototype={
Z(){var w,v=this
v.a1()
v.ll()
v.a.toString
w=$.hh5
if(w==null)w=$.hh5=B.cwf()
w.bB(new B.dYs(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.bvy()},
ctx(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dXV(p[n]).$0())
w.push(q)}this.w=w},
gW5(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
atm(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axu(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.atm(d.x,d.w,105/Math.max(w,3))
C.eY()
B.lk("bell",(A.d.cH(D.a2Z,d.c)+1)*3+12,900,0.45)
E.dH(300,"",280,1.4,0.15,"tri")},
lD(d){var w,v,u,t,s,r,q,p=this
p.f.fo(0,d,p.db)
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
c9p(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gW5()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gW5()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFY((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9o(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dXT(w))
return}w.m(new B.dXU(w,v,A.a.i(d).toLowerCase()))},
bOS(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dXR(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bKE,n,n,n,o.gbOR(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mG,n,n,n,new B.dYd(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dYe(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.U,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DH,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSO,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc9n(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iS,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dB(s.a,!1,new B.dYf(o,s),A.mA,A.aO,n))}i.push(new C.D(A.i6,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dB("Whole Earth",!1,new B.dYj(o),A.hr,A.aO,n)],l)
for(v=D.aEv.gdM(D.aEv),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dB(u.a,!1,new B.dYk(o,u),n,A.aO,n))}w.push(new B.dB("Random",!1,new B.dYl(o),A.my,A.aO,n))
i.push(new B.eV(w,"GO TO",n))
w=o.z
i.push(B.hH(A.aO,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dYm(o),w))
w=o.dy
i.push(B.hH(A.bH,A.a.aX(A.o.u(A.k.bl(w)),2,"0")+":00","Time",24,0,new B.dYn(o),w))
w=o.fr
i.push(B.hH(A.aZ,o.cse(),"Season",365,0,new B.dYo(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lY:D.Gu
i.push(new B.eV(C.a([new B.dB("Spin",w,new B.dYp(o),D.bFP,A.aO,n),new B.dB("Night",v,new B.dYq(o),A.vP,A.aO,n),new B.dB("Borders",u,new B.dYg(o),D.bFT,A.aO,n),new B.dB("Names",r,new B.dYh(o),X.BW,A.aO,n),new B.dB("Music",q,new B.dYi(o),p,A.aO,n)],l),n,n))
return B.jL(A.aO,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
cse(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axe[u])v=u
return A.ir[v]+" "+(A.k.bl(w-D.axe[v])+1)},
c9m(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mS(1,A.o.E((A.d.cH(D.a2Z,t)+1)*47,360),0.55,1).iM()
r=new B.dXP()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),C.aH(j,j,j,j,A.GM,j,j,j,new B.dXO(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hh,j,j,j)
m=D.doX.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fwT(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GR(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GR(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fwT(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.Wn,j,p,q,j,j,A.n),j,j,j,j,D.aib,j,j,j)}}
B.bfp.prototype={
a3(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AM.gp(0)
d8.b_(new C.a8(0,0,0+d4,0+d5),d7)
w=new C.eE()
w.dt(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.sar(new C.bV(A.A,0.5,A.x,d3,0,C.a([A.K,A.aO.j(0.35),A.K],t),D.cUN,d3).aw(0,C.bW(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bW(p,o)
u=C.N()
u.sar(D.ejI.aw(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k6(n))
d8.qy(0,d6)
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
f=new B.deq(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bD(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bD(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cH(D.a2Z,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mS(1,a9,a3,a8?1:0.62).iM().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fG
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.L)(a3),++b3){b4=a3[b3]
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
if(c8!=null)b6.bD(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bD(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bD(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rA
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
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
c9=B.hQ8(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a3(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.sar(new C.bV(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b9n.j(0.78)],t),D.d9L,d3).aw(0,C.bW(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.sar(new C.bV(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dmu,d3).aw(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fW.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aLv.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.aLw.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvx()}}
B.btT.prototype={}
B.Wk.prototype={
S(){return new B.bkK()}}
B.bkK.prototype={
gaSr(){var w=this.d
if(w===$)w=this.d=A.cH.av(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AM,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao1,w,w,w,new B.eIe(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fBc,w,w,w,1,w,!0),u=C.n(18),t=A.aO.j(0.1),s=C.I(A.aO.j(0.35),A.q,1),r=x.p
return C.c6(v,D.AM,C.cw(C.a([C.p(w,C.B(C.a([D.bJm,A.at,C.E(C.d(D.cYG[this.gaSr()],w,w,w,w,w,w,D.a8P,w,w,w),1),C.aH(w,w,w,w,D.bTO,w,w,w,new B.eIf(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eIg())],r),w,A.Z5,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W5.prototype={
S(){return B.hQA()}}
B.bkw.prototype={
cjV(d){var w=d.c,v=B.hQC(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjV(w)
u=new C.v(-v.a,-v.b).aH(0,t.w)
v=C.ll(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9q(){var w=this.ch
return new C.v(w.a/2,w.b/2).ad(0,this.x)},
c9u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cy[s]
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
b_6(d){this.m(new B.eAh(this,d))
C.eY()
B.lk("bell",D.dmH[A.o.E(A.d.cH(D.Cy,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mG,m,m,m,new B.eAs(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.eAt(n,l)),h=C.a([new B.dB("All",!1,new B.eAu(n),A.a11,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cy[w]
h.push(new B.dB(v.a,n.z===v,new B.eAv(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hH(A.aM,s,"Time",1,0,new B.eAw(n),u/t)
u=n.w
u=B.hH(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.eAx(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lY:D.Gu
return B.jL(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eV(h,"GO TO",m),t,u,new B.eV(C.a([new B.dB("Orbits",s,new B.eAy(n),m,A.aM,m),new B.dB("Names",r,new B.eAz(n),m,A.aM,m),new B.dB("Asteroids",q,new B.eAA(n),m,A.aM,m),new B.dB("Music",p,new B.eAB(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c9r(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eAf(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kj,r,r,r),1),C.aH(r,r,r,r,A.GM,r,r,r,new B.eAe(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.DI,r,r,r)
v=n.$2("WIDTH",B.GR(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.u(p)+" AU ("+B.GR(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eAg().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.Wn,r,l,m,r,r,A.n),r,r,r,r,D.aib,r,r,r)}}
B.brV.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AM.gp(0)
a7.b_(new C.a8(0,0,0+a5,0+a6),w)
v=new C.eE()
v.dt(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9q()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cy),t=new C.f2(a6,new B.f1D()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hQB(A.d.gI(D.Cy))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bV(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bW(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.sar(D.ejC.aw(0,C.bW(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hiI("Sun",10.5,A.ad)
h.a3(a7,o.ad(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cy),t=new C.f2(a6,new B.f1E()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0=C.ce(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rA
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sar(new C.bV(P.pu,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a2B,a4).aw(0,C.bW(new C.v(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2Z[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hiI(d,10.5,A.ad)
h.a3(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.Ve.prototype={
S(){var w=x.i
return new B.aDj(new B.P7(A.cH),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDj.prototype={
cwM(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9t(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e8j
s.cy=new C.v(s.ay,0)
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
E.dH(150,"",400,0,0.5,"noise")
E.dH(90,"",300,1.5,0.6,"sine")
s.m(new B.dYw())},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.z_[r]
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
if(q.a!=="Sun")E.dH(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d7(s,new B.dYZ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new C.v(k,s)
k=p+k*w
s=t+s*w
i.cx=new C.v(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new C.v(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dH(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcn()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcn()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bN0()
else n=n==="weight"?p.cEe():p.bF5()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.djF[u]
v.push(new B.dB(t.b,p.d===t.a,new B.dYL(p,t),t.c,A.ct,o))}v=C.a([new B.eV(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dB("Hammer",!s,new B.dYM(p),Ag.Gp,A.ct,o),new B.dB("Feather",s,new B.dYN(p),X.NA,A.ct,o),new B.dB(q,r,new B.dYR(p),A.Ge,A.aO,o)],w)
q=p.w
A.d.v(v,C.a([new B.eV(r,o,o),B.hH(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dYS(p),q),new B.eV(C.a([new B.fj(A.u2,"Drop!",new B.dYT(p),A.aZ,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hH(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dYU(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hH(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dYV(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hH(A.ct,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dYW(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hH(A.ct,A.k.ab(r,1)+"x out","View",8,0.5,new B.dYX(p),r),new B.eV(C.a([new B.fj(A.nq,"Fire!",p.gc9s(),A.aZ,o),new B.fj(A.u2,"Falls",new B.dYY(p),A.c,o),new B.fj(A.rf,"Orbit 7.7",new B.dYO(p),A.c,o),new B.fj(D.bIM,"Oval 9",new B.dYP(p),A.c,o),new B.fj(A.BZ,"Escape",new B.dYQ(p),A.c,o)],w),o,o)],w))}return B.jL(A.ct,A.hc,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bN0(){return new C.D(D.bsH,C.cq(new B.dYv(this)),null)},
cEe(){var w,v,u,t=null,s=[D.eJq,D.eKS,D.eL_,D.eLi,D.eKY,D.eLo,D.eJZ,D.eLL,D.eKC],r=x.p,q=C.a([D.fp4,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cv,new C.ci(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bg,new C.Bt(new B.dYx(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.frp)
return C.cw(q,t,A.i7,t,t,A.ag,!1)},
bF5(){return C.cq(new B.dYt(this))}}
B.baB.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AM.gp(0)
d.b_(new C.a8(0,0,0+h,0+g),e)
w=new C.eE()
w.dt(2)
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
e.sar(new C.bV(A.A,0.5,A.x,i,0,C.a([A.K,A.aO.j(0.35),A.K],x.O),D.daF,i).aw(0,C.bW(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.sar(D.ejw.aw(0,C.bW(g,p)))
d.af(g,p,e)
o=g.ad(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ao,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new C.b5(u-16,s))
n.F(new C.ap(u,t-400*h-4))
n.F(new C.ap(u+16,s))
n.F(new C.bE())
s=C.N()
s.r=A.ak.gp(0)
d.aR(n,s)
s=o.ad(0,new C.v(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=C.d9(u,1,i,C.S(u).c),s=u.$ti,u=new C.bQ(u,u.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bD(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bT
f.r=A.ct.j(0.9).gp(0)
d.aR(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mJ
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VY.prototype={
S(){return new B.bkt(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkt.prototype={
Z(){this.a1()
this.ll()},
lD(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qg[l.e],i=D.Qg[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mG,k,k,k,new B.etb(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.brt(f,g,v,k),A.f6),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GR(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hK,A.L,k,k)
o=B.GR(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.uU,A.L,k,k),A.bC,C.d(p+": "+B.GR(w*2)+" km wide. "+r+": "+B.GR(h*2)+" km wide.",k,k,k,k,k,k,A5.Jo,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buP,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Qg[m]
r.push(new B.dB(w.a,l.e===m,new B.etc(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Qg[m]
w.push(new B.dB(s.a,l.f===m,new B.etd(l,m),k,C.b0(s.c),k))}return B.jL(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ey(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eV(r,"FIRST",k),new B.eV(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.brt.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.X3.gp(0)
d.b_(new C.a8(0,0,0+h,0+g),w)
v=new C.eE()
v.dt(6)
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
m=new C.v(h,g)
w=new B.f_M(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=C.fZ(i,i,i,i,C.d0(i,i,i,i,i,i,i,i,i,D.faz,s.a),A.a4,A.c6,i,A.dO,A.c3)
k.en()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a3(d,l.ad(0,new C.v(-w/2,h)))
j=C.fZ(i,i,i,i,C.d0(i,i,i,i,i,i,i,i,i,D.fdU,t.a),A.a4,A.c6,i,A.dO,A.c3)
j.en()
t=j.b
h=t.c
t=t.a.c
j.a3(d,m.ad(0,new C.v(-h/2,-t.gbc(t)/2)))},
au(d){return!0}}
B.aLx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx7.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvz()}}
B.aM5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxl.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw7()}}
B.aM8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxn.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwa()}}
B.PC.prototype={}
B.Uf.prototype={
S(){return B.hQy()}}
B.bj9.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fo(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dH(70,"",500,0.3,0.5,"sine")}}A.d.br(w,new B.dG2())},
b_7(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb86()
v=d.aC(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcn()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.PC(t,u,1.2,new C.vK(1,30+A.cH.aj()*40,0.9,0.7).iM()))
B.lk("bell",60+A.k.V(12-u)*2,400,0.35)},
gb86(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dFR(),C.S(m).k("M<1,K>")).ff(0,A.vc),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mG,n,n,n,new B.dFS(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dFT(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fwT(s)+" Suns"
t=B.hH(A.bu,s,"Mass",1,0,new B.dFV(o),u/t)
u=C.a([new B.dB("Star (10)",!1,new B.dFW(o),n,A.bu,n),new B.dB("Cygnus X-1 (21)",!1,new B.dFX(o),n,A.bu,n),new B.dB("Milky Way core (4 million)",!1,new B.dFY(o),n,A.bu,n),new B.dB("M87 (6.5 billion)",!1,new B.dFZ(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lY:D.Gu
return B.jL(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eV(u,"LIKE",n),new B.eV(C.a([new B.dB("Glowing ring",s,new B.dG_(o),n,A.bu,n),new B.dB("Bent light",r,new B.dG0(o),n,A.bu,n),new B.dB("Music",q,new B.dG1(o),p,A.bu,n),new B.fj(A.k8,"Clear",new B.dFU(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aeJ(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f6u,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zQ,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.ba_.prototype={
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bhu.gp(0)
b2.b_(new C.a8(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb86()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Rv
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.vk,A.fl,d)
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
b1.sar(new C.bV(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cPN,null).aw(0,C.bW(u,b0)))
b2.af(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bu.j(0.55).gp(0)
b2.af(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.L)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bT
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mJ
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeP.prototype={}
B.Va.prototype={
S(){var w=x.r,v=x.g
return new B.bjB(new C.cs(null,x.A),new B.P7(A.cH),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjB.prototype={
Z(){this.a1()
this.a_6()
this.ll()},
a_6(){var w,v,u,t,s,r,q,p,o=this,n=new C.eE()
n.dt(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeP(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.av(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hi()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeP(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e9N
k.cx=D.e9Q
w=new C.eE()
w.dt(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeP(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.v(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.d9(s,0,C.dG(900,"count",r),C.S(s).c),o=s.$ti,s=new C.bQ(s,s.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.d9(u,0,C.dG(900,"count",r),C.S(u).c),r=u.$ti,u=new C.bQ(u,u.gM(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dH(110,"",900,0.5,0.45,"sine")},
lD(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcn())
r=t.eG(0,s).aH(0,0.9/(s*s))
w=p.fy.ad(0,r.aH(0,u))
p.fy=w
v=p.cx.aC(0,r.aH(0,u))
p.cx=v
w=p.fx.ad(0,w.aH(0,u))
p.fx=w
v=p.CW.ad(0,v.aH(0,u))
p.CW=v
q=new B.dX3(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mG,r,r,r,new B.dWU(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bff(s,r),A.ax),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bD,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a83,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d6a[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dB(u.b,o,new B.dWV(s,u),r,A.h5,r))}l.push(new B.dB("Collide",s.ch,new B.dWW(s),A.yg,A.bU,r))
o=C.a([new B.eV(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hH(A.h5,""+n,"Arms",6,2,new B.dWX(s),n)
l=s.r
A.d.v(o,C.a([n,B.hH(A.h5,A.k.ab(l,1),"Winding",6,0.8,new B.dWY(s),l)],q))}n=s.as
o.push(B.hH(A.h5,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dWZ(s),n))
n=s.ax
o.push(B.hH(A.h5,A.k.ab(n,1)+"x","Speed",4,0,new B.dX_(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lY:D.Gu
o.push(new B.eV(C.a([new B.dB("Dark matter",n,new B.dX0(s),r,A.bu,r),new B.dB("You are here",l,new B.dX1(s),r,A.aM,r),new B.dB("Music",w,new B.dX2(s),t,A.h5,r)],q),r,r))
return B.jL(A.h5,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ey(new C.an(A.W,r,A.b2,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.bff.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bjz.gp(0)
a3.b_(new C.a8(0,0,0+a1,0+a2),w)
v=new C.eE()
v.dt(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.sar(new C.bV(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cdk,a0).aw(0,C.bW(o,a2)))
a3.af(o,a2,t)}m=new B.dbx(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bV(A.A,0.5,A.x,a0,0,C.a([A.fK.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aw(0,C.bW(o,a2)))
a3.af(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.E(q,360)
l.r=new H.mS(1,r,q>200?0.45:0.55,1).iM().j(0.35+(1-s)*0.5).gp(0)
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
f=C.fZ(a0,a0,a0,a0,D.f3w,A.a4,A.c6,a0,A.dO,A.c3)
f.en()
f.a3(a3,g.ad(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bkO.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bfC.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fK.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.iC.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.VU.prototype={
S(){return new B.bks(new C.cs(null,x.A),new B.P7(A.cH),$,A.bx,0,C.a([],x.X),null,null)}}
B.bks.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bl(w*4)
if(u!==A.k.bl(t.as))B.lk("bell",60+u*4,500,0.35)
t.as=u}},
gcsd(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gciv(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mG,q,q,q,new B.esq(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ey(C.b3(q,q,q,new B.bqJ(r,q),A.f6),r.d),1)
if(r.f==="seasons")w=r.gcsd()
else{w=r.gciv()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.TY,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ail,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yr:A.iM
t=r.Q
s=t?A.lY:D.Gu
s=C.a([new B.eV(C.a([new B.dB("Seasons",n==="seasons",new B.esr(r),A.yE,A.bv,q),new B.dB("Moon phases",n==="moon",new B.ess(r),A.vP,A.bv,q),new B.dB(u,!1,new B.est(r),v,A.bv,q),new B.dB("Music",t,new B.esu(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hH(A.bv,D.d5u[A.o.E(A.k.bl(n*12),12)],"Month",1,0,new B.esv(r),n)
v=r.z
A.d.v(s,C.a([n,B.hH(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.esw(r),v)],p))}else{p=r.w
s.push(B.hH(A.bv,""+(A.k.bl(p*29.5)+1),"Day of month",1,0,new B.esx(r),p))}p=r.y
s.push(B.hH(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.esy(r),p))
return B.jL(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqJ.prototype={
a3(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AM.gp(0)
b9.b_(new C.a8(0,0,0+b5,0+b6),b8)
w=new C.eE()
w.dt(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.ce(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b_.gp(0)
b9.hZ(u,t)
t=C.N()
t.sar(D.ejy.aw(0,C.bW(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eG(0,p.aC(0,l).gcn())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bhq.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k6(C.bW(A.J,k)))
b9.qy(0,b7)
b7=i.aH(0,k).aH(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.ejH.aw(0,C.bW(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aH(0,k).aH(0,1.7)
b5=h.aH(0,k).aH(0,1.7)
t=C.N()
t.c=2
t.r=A.c8.gp(0)
b9.bE(b7,b5,t)
t=h.aH(0,k).aH(0,1.7)
b5=C.N()
b5.r=A.c8.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.fZ(b4,b4,b4,b4,C.d0(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRN,b5),A.a4,A.c6,b4,A.dO,A.c3)
f.en()
f.a3(b9,l.ad(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b_.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.sar(new C.bV(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bd3,D.agh],x.O),D.cXD,b4).aw(0,C.bW(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.bai.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k6(C.bW(a1,a2)))
b9.qy(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bN.gp(0)
b9.b_(new C.a8(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eG(0,a1.aC(0,p).gcn())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atk[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aO.j(0.45).gp(0)
a7.z=A.jw
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.bad.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k6(C.bW(a8,a9)))
b9.qy(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCJ(new C.v(u,t+a9),b6,new C.aS(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCJ(new C.v(u,b5),b6,new C.aS(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bN.gp(0)
b9.aR(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b_.gp(0)
b9.af(a8,a9,b8)
b3=C.fZ(b4,b4,b4,b4,D.f3x,A.a4,A.c6,b4,A.dO,A.c3)
b3.en()
b3.a3(b9,a8.ad(0,new C.v(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aL3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx_.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv3()}}
B.aLs.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bx6.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvt()}}
B.aM4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
B.bxk.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw6()}}
var z=a.updateTypes(["~()","Q(ty)","Q(a4p)","aA<~>()","Q(Cr)","G(ty,G)","K(K,ty)","Q(Cn)","Q(Zf)","Q(abp)","Q(v7)","Q(a33)","Q(no)","Q(a_M)","Q(acc)","G(G)","Um()","UZ()","Ub()","Vc()","Vv()","Vx()","Ul()","VS()","W6()","VT()","VP()","Wd()","Uk()","Wi()","Q(mC)","VJ()","VO()","aeU(Y,G)","adM(Y,G)","~(a6<@,@>)","G(Cn,Cn)","m(ed)","Q(aeK)","Q(a0u)","Q(CB)","Q(abU)","Q(adQ)","Q(abD)","G(G,qN)","G(G,Cr)","m(qN)","~(qN,ai<m>,G)","qN?(Cr)","Q(qN)","t(m,a0h)","Q(PU)","~(AA)","Q(abK)","K(G?)","Wk()","Q(FN)","Q(ad1)","K(G)","V_()","K(PC)","Q(aai)","Ug()","a8h()","~(B8,m,v,w,K)","~(m,ty)","VM()","Vq(Y)","Nk(Y)","UH(Y,br<K>,br<K>)","Wo()","V6()","Uh()","UY()","VK()","VX()","Wh()","VI()","~(m)","cr(ab5)","Q(ab4)","Vd()","W5()","Ve()","Uf()","Va()","VY()","VU()","UJ()","Q(PC)","~(ba)"])
B.fzd.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fp3.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fvZ.prototype={
$1(d){var w
if(!this.a.LI(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fw_.prototype={
$1(d){return d.x},
$S:z+1}
B.fza.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fzb.prototype={
$1(d){var w
if(!this.a.LI(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fzc.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e9v.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9w.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e9x.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.il)}},
$S:8}
B.e9I.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e9J.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e9E.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e9C.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dE(0,0,0,d,0,0),new B.e9D(w,this.b,e)))},
$S:1855}
B.e9D.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e9F.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gW8().ajO(0,u[1],u[2],u[3])
u[4].bM(0,new B.e9A(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dH(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e9B(w.a,v,w.f,w.r))},
$S:0}
B.e9A.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:180}
B.e9B.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bl(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9G.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gW8().akw(t,u[1],s,u[3])
E.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e9z(w.a,v,w.e,w.f))},
$S:0}
B.e9z.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bl(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9H.prototype={
$0(){E.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e9y(w,this.b))},
$S:0}
B.e9y.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e9M.prototype={
$0(){var w=this.a
return w.m(new B.e9L(w))},
$S:0}
B.e9L.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e9N.prototype={
$0(){var w=this.a
return w.m(new B.e9K(w))},
$S:0}
B.e9K.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e9O.prototype={
$0(){var w=this.a
w.f.saW(0,this.b)
w.Nx()},
$S:0}
B.e9P.prototype={
$0(){return this.a.Y8(this.b)},
$S:0}
B.e9Q.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nx():w.aVM()},
$S:2}
B.e9R.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nx():w.aVM()},
$S:0}
B.epC.prototype={
$2(d,e){return d+e},
$S:1856}
B.epW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.epV(w,d))},
$S:131}
B.epV.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.epX.prototype={
$0(){},
$S:0}
B.epY.prototype={
$0(){},
$S:0}
B.epE.prototype={
$0(){return this.a.m(new B.epD(this.b,this.c))},
$S:0}
B.epD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ept.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.epu.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.epv.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.epw.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.epx.prototype={
$1(d){return this.a.db===d},
$S:33}
B.epy.prototype={
$1(d){return this.a.db=d},
$S:29}
B.epz.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.epA.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:29}
B.epB.prototype={
$0(){var w=this.a
return w.m(w.gawl())},
$S:0}
B.epr.prototype={
$1(d){return this.a.$1(!0)},
$S:83}
B.eps.prototype={
$1(d){return this.a.$1(!1)},
$S:137}
B.epq.prototype={
$1(d){return this.a.$1(!1)},
$S:185}
B.epP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgW(o,p),n)
w=this.b
v=B.bzF("WORLD",w.a,w.c)
u=B.bzF("GRAVITY",C.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c8:A.aZ
t=B.bzF("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cs[o.db].d?A.c8:A.c
q=x.p
s=C.a([v,u,t,B.bzF("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bzF("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hH,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bE1(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rt[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mC,"Again",new B.epK(o),A.c,p),new B.fj(A.oW,"Rebuild",new B.epL(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j4,"Next world",new B.epM(o),A.aZ,p))
n.push(B.hmq("Perfect landing!",w,A.aZ,v))}if(o.as==="crashed")n.push(B.hmq("Crash!",o.at,A.c8,C.a([new B.fj(A.mC,"Try again",new B.epN(o),A.aZ,p),new B.fj(A.oW,"Rebuild",new B.epO(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b2,A.r,n,p)},
$S:64}
B.epK.prototype={
$0(){var w=this.a
return w.m(w.gawl())},
$S:0}
B.epL.prototype={
$0(){var w=this.a
return w.m(new B.epH(w))},
$S:0}
B.epH.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epM.prototype={
$0(){var w=this.a
return w.m(new B.epG(w))},
$S:0}
B.epG.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.epN.prototype={
$0(){var w=this.a
return w.m(w.gawl())},
$S:0}
B.epO.prototype={
$0(){var w=this.a
return w.m(new B.epF(w))},
$S:0}
B.epF.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epQ.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.epJ(v,w))},
$S:0}
B.epJ.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.epR.prototype={
$1(d){return this.a.y=d},
$S:9}
B.epS.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.epT.prototype={
$1(d){return this.a.z=d},
$S:9}
B.epU.prototype={
$0(){var w=this.a
return w.m(new B.epI(w))},
$S:0}
B.epI.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dGu.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hhK
if(q==null)q=$.hhK=B.cGy()
w=3
return C.b(C.iP(C.a([q,$.qW().bgc("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kI(0,C.cO(J.q(s,1)))
q.m(new B.dGt(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dGt.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dG6.prototype={
$0(){return this.a.bVB(C.aU(J.q(this.b,"group")))},
$S:0}
B.dG7.prototype={
$1(d){return A.a.aX(A.o.fY(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:277}
B.dGv.prototype={
$0(){return B.a8g("kick",0.25)},
$S:0}
B.dG8.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dG9.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dGa.prototype={
$0(){return B.a8g("kick",0.5)},
$S:0}
B.dGb.prototype={
$0(){return E.dH(1300+this.a.R8.av(900),"",40,0,0.2,"square")},
$S:0}
B.dGd.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dGc(u)))u.cx=null
u.go=0},
$S:0}
B.dGc.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ay6(d)},
$S:z+11}
B.dG3.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dG4.prototype={
$0(){var w=this.a
return w.m(w.gc52())},
$S:0}
B.dG5.prototype={
$0(){return this.a.ahp(null)},
$S:0}
B.dGk.prototype={
$0(){var w=this.a.as
return w==null?null:w.f_(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dGl.prototype={
$0(){return this.a.cAT(this.b.a)},
$S:0}
B.dGm.prototype={
$0(){return this.a.ahp(this.b)},
$S:0}
B.dGn.prototype={
$1(d){var w=this.a
return w.m(new B.dGj(w,d))},
$S:6}
B.dGj.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dGo.prototype={
$0(){var w=this.a
return w.m(new B.dGi(w,this.b))},
$S:0}
B.dGi.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dGp.prototype={
$0(){var w=this.a
return w.m(new B.dGh(w))},
$S:0}
B.dGh.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dGq.prototype={
$0(){var w=this.a
return w.m(new B.dGg(w))},
$S:0}
B.dGg.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f_(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Kv},
$S:0}
B.dGr.prototype={
$0(){var w=this.a
return w.m(new B.dGf(w))},
$S:0}
B.dGf.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYq()
else w.p2=null},
$S:0}
B.dGs.prototype={
$0(){var w=this.a
return w.m(new B.dGe(w))},
$S:0}
B.dGe.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c1L.prototype={
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
B.c1M.prototype={
$1(d){var w=new C.rQ([],[]).pF(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:480}
B.fiG.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:207}
B.fiH.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:207}
B.fiI.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:207}
B.fiP.prototype={
$1(d){return!J.q(d,0)},
$S:207}
B.fiQ.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:207}
B.fiR.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:207}
B.dIF.prototype={
$1(d){return this.a.at0(0)},
$S:8}
B.dIj.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i2K(),C.S(w).k("M<1,G>")).fP(0)},
$S:0}
B.dIm.prototype={
$1(d){return""+d},
$S:79}
B.dIG.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dIh.prototype={
$1(d){return this.a.at0(this.b)},
$S:8}
B.dIi.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awQ(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m5(0.15,0.3))
u=a1.mB(0,d,a1.m5(0.15,0.62))
t=a1.mB(0,"and",a1.m5(0.48,0.46))
s=a1.mB(0,a0,a1.m5(0.82,0.46))
a1=t.a
w.push(new B.no(v.a,a1,0))
w.push(new B.no(u.a,a1,1))
w.push(new B.no(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m5(0.12,0.25))
u=a1.mB(0,d,a1.m5(0.12,0.65))
r=a1.mB(0,"xor",a1.m5(0.46,0.25))
q=a1.mB(0,"and",a1.m5(0.46,0.65))
p=a1.awP(0,a0,a1.m5(0.82,0.25),0)
o=a1.awP(0,a0,a1.m5(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.no(a1,n,0))
m=u.a
w.push(new B.no(m,n,1))
l=q.a
w.push(new B.no(a1,l,0))
w.push(new B.no(m,l,1))
w.push(new B.no(n,p.a,0))
w.push(new B.no(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m5(0.15,0.4))
j=a1.mB(0,"not",a1.m5(0.45,0.65))
s=a1.mB(0,a0,a1.m5(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m5(0.82,0.65))
a1=k.a
w.push(new B.no(a1,s.a,0))
n=j.a
w.push(new B.no(a1,n,0))
w.push(new B.no(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m5(0.12,0.25))
g=a1.mB(0,d,a1.m5(0.12,0.7))
f=a1.mB(0,"nor",a1.m5(0.5,0.25))
e=a1.mB(0,"nor",a1.m5(0.5,0.7))
s=a1.mB(0,a0,a1.m5(0.86,0.25))
a1=f.a
w.push(new B.no(g.a,a1,0))
n=e.a
w.push(new B.no(n,a1,1))
w.push(new B.no(h.a,n,0))
w.push(new B.no(a1,n,1))
w.push(new B.no(a1,s.a,0))}},
$S:0}
B.dIn.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awQ(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Cn(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m5(0.86,0.5))},
$S:0}
B.dIc.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dId.prototype={
$2(d,e){return A.k.aN(d.c.b,e.c.b)},
$S:z+36}
B.dIe.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dIf.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dIg.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acK(this.c)
if(v.ax)B.BN("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dH(140,"",250,0,0.3,"square")}},
$S:0}
B.dIo.prototype={
$0(){},
$S:0}
B.dIp.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dIq.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dIl.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new B.dIk(v))
w.cy=null},
$S:0}
B.dIk.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dIb.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.v(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dIz.prototype={
$0(){var w=this.a
return w.m(new B.dIy(w))},
$S:0}
B.dIy.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dIA.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.x=u
return C.aB(A.c7,C.jA(C.b3(w,w,w,new B.bb3(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dIt(v),w,w,w,new B.dIu(v),new B.dIv(v),new B.dIw(v),w,w,w,w,w,w,w,w,w,w,new B.dIx(v),w,w,w,!1,A.a5)},
$S:36}
B.dIx.prototype={
$1(d){return this.a.c6N(d.b)},
$S:51}
B.dIv.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cfg(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axD(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:44}
B.dIw.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dIu.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZb(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new B.dIr(w))
u=t.as
u.toString
v.push(new B.no(u,w.a,w.b))
C.jV()}}t.z=t.as=null},
$S:38}
B.dIr.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dIt.prototype={
$1(d){return this.a.avC(d.b)},
$S:281}
B.dIB.prototype={
$0(){return this.a.bzS(this.b.a)},
$S:0}
B.dIC.prototype={
$0(){return this.a.at0(this.b.a)},
$S:0}
B.dID.prototype={
$0(){var w=this.a
return w.m(new B.dIs(w))},
$S:0}
B.dIs.prototype={
$0(){var w=this.a
w.awQ(0)
w.ay=null},
$S:0}
B.dIE.prototype={
$0(){return this.a.cwz(this.b)},
$S:0}
B.cNk.prototype={
$0(){var w=this,v=null,u=C.fZ(v,v,v,v,C.d0(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dO,A.c3)
u.en()
return u},
$S:343}
B.dOv.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dOu.prototype={
$0(){return this.a.d=null},
$S:0}
B.dOx.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_Z()},
$S:122}
B.dOw.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.fj6.prototype={
$0(){return D.e2P},
$S:z+55}
B.fj7.prototype={
$0(){return D.dBX},
$S:z+59}
B.fj8.prototype={
$0(){return D.dyP},
$S:z+62}
B.fjj.prototype={
$0(){return D.e2e},
$S:z+63}
B.fjl.prototype={
$0(){return D.dIl},
$S:z+66}
B.fjm.prototype={
$0(){return D.dBS},
$S:z+88}
B.fjn.prototype={
$0(){return D.dBV},
$S:z+17}
B.fjo.prototype={
$0(){return D.duZ},
$S:z+18}
B.fjp.prototype={
$0(){return D.dEq},
$S:z+19}
B.fjq.prototype={
$0(){return D.dG3},
$S:z+20}
B.fjr.prototype={
$0(){return D.dG5},
$S:z+21}
B.fj9.prototype={
$0(){return D.dB3},
$S:z+22}
B.fja.prototype={
$0(){return D.dL4},
$S:z+23}
B.fjb.prototype={
$0(){return D.e1W},
$S:z+24}
B.fjc.prototype={
$0(){return D.e_Y},
$S:z+25}
B.fjd.prototype={
$0(){return D.dJK},
$S:z+26}
B.fje.prototype={
$0(){return D.e23},
$S:z+27}
B.fjf.prototype={
$0(){return D.dB2},
$S:z+28}
B.fjg.prototype={
$0(){return D.e2d},
$S:z+29}
B.fjh.prototype={
$0(){return D.dB4},
$S:z+16}
B.fji.prototype={
$0(){return D.dGl},
$S:z+31}
B.fjk.prototype={
$0(){return D.dJJ},
$S:z+32}
B.f_j.prototype={
$2(d,e){return new B.aeU($.bE5()[e],new B.f_i(e,this.a),null)},
$S:z+33}
B.f_i.prototype={
$0(){var w=this.a,v=F.aEw.h(0,$.bE5()[w].a)
$.arN=v==null?"music":v
C.a5(this.b,!1).cm(C.ea(new B.f_g(w),!1,null,x.H))},
$S:0}
B.f_g.prototype={
$1(d){return $.bE5()[this.a].e.$0()},
$S:40}
B.f_k.prototype={
$2(d,e){return new B.adM(D.axf[e],new B.f_h(this.a,e),null)},
$S:z+34}
B.f_h.prototype={
$0(){return this.a.d.$1(D.axf[this.b])},
$S:0}
B.f__.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eZZ.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eZY.prototype={
$1(d){var w=this
return new C.e_(new B.eZX(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eZX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.foN,A.au,D.fvj,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aS(12,12)
m=new C.aS(12,12)
m=C.a([new C.bB(1,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e5(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DH,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e5(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DH,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dlA[l]
j=new C.aS(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bD
f=new C.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aB(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bn(j,j,j,j),d,d,A.n),d,d,d,A.fC,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eZV(a3,p,u,k),d,d,d,d,d,d,!1,A.a5))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.feB,d,d,d,d,d,d,d,d,d),A.am,new C.ci(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.wF,new B.eZW(t,r,q,u,a2),d))
return new C.D(new C.R(0,0,0,a1.f.d),C.bm(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A4.xT,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
B.eZV.prototype={
$0(){var w=this
return w.a.$1(new B.eZU(w.b,w.c,w.d))},
$S:0}
B.eZU.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eZW.prototype={
$0(){var w=this,v=w.a
v.m(new B.eZT(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eZT.prototype={
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
B.f_7.prototype={
$0(){var w=this.a
return w.m(new B.f_6(w))},
$S:0}
B.f_6.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.f_8.prototype={
$0(){return B.qV(this.b,this.a.f,"scene")},
$S:0}
B.f_9.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZt().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bV(D.aXN,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:316}
B.f_a.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.eQ(A.A,C.c7(new C.hb(C.a([u.gu1(),u.gZt()],x.dS)),new B.f_5(u,this.b,v),w),A.f,A.e_),w,w,w)},
$S:242}
B.f_5.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu1().x
r===$&&C.c()
w=r<0.9?1:1-B.br2(r,0.9,0.98)
v=s.gZt().x
v===$&&C.c()
u=A.dC.az(0,v)
switch(s.gawR().a){case 0:s=s.bz3(t.b,r,u,t.c)
break
case 1:s=s.bPJ(t.b,r,u,t.c)
break
case 2:s=s.cBp(t.b,r,u,t.c)
break
case 3:s=s.bBZ(t.b,r,u,t.c)
break
case 4:s=s.bFi(t.b,r,u,t.c)
break
case 5:s=s.bEs(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:233}
B.f_b.prototype={
$2(d,e){var w=C.avd(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJY(u,A.bD,v,3.5)
u=this.a
w=u.gu1().x
w===$&&C.c()
return C.aa4(C.l1(null,null,null,1,0,new B.f_4(u),A.k.D(w,0,1)),v)},
$S:1860}
B.f_4.prototype={
$1(d){var w=this.a
w.gu1().sp(0,d)
if(w.as)w.m(new B.f_0(w))},
$S:6}
B.f_0.prototype={
$0(){return this.a.as=!1},
$S:0}
B.f_c.prototype={
$0(){var w=this.a
w.gu1().sp(0,0)
w.ag8()},
$S:0}
B.f_d.prototype={
$1(d){var w=this.a
w.m(new B.f_3(w,d))
if(w.as)w.ag8()},
$S:6}
B.f_3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.f_e.prototype={
$0(){var w=this.a
w.m(new B.f_2(w,this.b))
w.gu1().sp(0,0)
if(w.as)w.ag8()},
$S:0}
B.f_2.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.f_f.prototype={
$0(){var w=this.a
return w.m(new B.f_1(w,this.b))},
$S:0}
B.f_1.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eZR.prototype={
$2(d,e){return A.k.aN(d.a,e.a)},
$S:1861}
B.eZS.prototype={
$1(d){return d.b},
$S:1862}
B.din.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dio.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dik.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dil.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dim.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dip.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.diq.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dir.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dis.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dit.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.diu.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.div.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.diw.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dix.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.eoX.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eoM.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.eoO.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.eoP.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.eoS.prototype={
$1(d){var w=D.mI.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.eoT.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.S(q),o=x.dg,n=C.C(new C.eb(new C.cP(new C.a_(q,new B.eoU(d),p.k("a_<1>")),new B.eoV(r),p.k("cP<1,qN?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.eoU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eoV.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eoQ.prototype={
$1(d){return D.mI.h(0,d.b).c===D.wX},
$S:z+49}
B.eoR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.epm.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v8(0,u)
w.a6f(A.o.am(v,1000))},
$S:8}
B.eoW.prototype={
$0(){},
$S:0}
B.eoI.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
B.eoZ.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mI.h(0,v).b,D.mI.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fGx,w,C.d(D.mI.h(0,v).a,w,w,w,w,w,w,A.hw,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.ao5,w,w,w,w,new B.eoY(d),!1,w,w,w,w,w,w,w,D.fy5,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
B.eoY.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ep0.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.ecA],x.p)
for(w=0;w<6;++w){v=D.axz[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bTt,u,u,u,u,new B.ep_(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kJ,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hw,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.byj,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:24}
B.ep_.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.eoL.prototype={
$1(d){var w=null
return C.em(C.a([C.bK(!1,A.dh,w,w,!0,w,w,new B.eoJ(d),w,w),C.bK(!1,A.DM,w,w,!0,w,w,new B.eoK(d),w,w)],x.p),w,w,F.n9,D.fvu,w,w,w,w,D.fyn,w)},
$S:21}
B.eoJ.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.eoK.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.epk.prototype={
$0(){var w=this.a
return w.m(new B.epj(w))},
$S:0}
B.epj.prototype={
$0(){return this.a.r=!1},
$S:0}
B.epl.prototype={
$2(d,e){var w,v,u,t=null,s=new C.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mj(new B.epa(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6K:t
v=C.a([C.b3(u,t,t,new B.bgU(w,v,new B.epb(r),new B.epc(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c7(w,new B.epd(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bH_())
return C.aB(A.c7,C.jA(new C.an(A.W,t,A.b2,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.epe(r),t,r.gcgz(),t,new B.epf(r),new B.epg(r),new B.eph(r),t,t,t,t,t,t,t,t,t,t,new B.epi(r),t,t,t,!1,A.a5)},
$S:36}
B.epa.prototype={
$0(){return this.a.abQ(this.b)},
$S:0}
B.epi.prototype={
$1(d){return this.a.cz7(d.b)},
$S:51}
B.epg.prototype={
$1(d){return this.a.cgA(d.b)},
$S:44}
B.eph.prototype={
$1(d){return this.a.cgB(d.b)},
$S:18}
B.epf.prototype={
$1(d){return this.a.b0N()},
$S:38}
B.epe.prototype={
$1(d){return this.a.acw(d.b)},
$S:281}
B.epb.prototype={
$0(){return this.a.z},
$S:647}
B.epc.prototype={
$0(){return this.a.Q},
$S:721}
B.epd.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bLh()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bD,A.q,1)
t=C.a([D.fsY,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.y(p[r],q,D.fdk,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h9,q,q,q)},
$S:62}
B.eoN.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e7,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A6.TY,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.U3,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1864}
B.ep6.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).ld()},
$S:0}
B.ep7.prototype={
$0(){var w=this.a
return w.m(new B.ep5(w))},
$S:0}
B.ep5.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ep8.prototype={
$0(){var w=this.a
return w.m(new B.ep4(w))},
$S:0}
B.ep4.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ep9.prototype={
$0(){var w=this.a
return w.m(new B.ep3(w))},
$S:0}
B.ep3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ep2.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mI.gdM(D.mI),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.ctV(p[r]))
return new C.D(I.ahB,C.x(C.a([new C.D(R.ajg,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ep1.prototype={
$0(){return this.a.c6S(this.b)},
$S:0}
B.dij.prototype={
$0(){var w=this,v=null,u=C.fZ(v,v,v,v,C.d0(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dO,A.c3)
u.en()
return u},
$S:343}
B.eB1.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.br(o,new B.eB_(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eB0())},
$S:8}
B.eB_.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eB0.prototype={
$0(){},
$S:0}
B.eAD.prototype={
$0(){},
$S:0}
B.eAC.prototype={
$0(){},
$S:0}
B.eAM.prototype={
$0(){return B.qV(this.b,this.a.d,"spark-painter")},
$S:0}
B.eAO.prototype={
$1(d){return this.a.aZ6(0,d.b)},
$S:44}
B.eAS.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcn()>2.5}else w=!1
if(w)t.a.push(u)
v.aRZ(u)
v.c9U(u)
return null},
$S:18}
B.eAN.prototype={
$1(d){return this.a.aZ5()},
$S:38}
B.eAT.prototype={
$1(d){return this.a.aZ6(0,d.b)},
$S:23}
B.eAU.prototype={
$1(d){return this.a.aZ5()},
$S:51}
B.eAV.prototype={
$0(){var w=this.a
return w.m(new B.eAL(w,this.b))},
$S:0}
B.eAL.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eAW.prototype={
$0(){var w=this.a
return w.m(new B.eAK(w))},
$S:0}
B.eAK.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eAX.prototype={
$0(){var w=this.a
return w.m(new B.eAJ(w,this.b))},
$S:0}
B.eAJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eAY.prototype={
$1(d){var w=this.a
return w.m(new B.eAI(w,d))},
$S:6}
B.eAI.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eAZ.prototype={
$0(){var w=this.a
return w.m(new B.eAH(w))},
$S:0}
B.eAH.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eAP.prototype={
$0(){var w=this.a
return w.m(new B.eAG(w))},
$S:0}
B.eAG.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eAQ.prototype={
$0(){var w=this.a
return w.m(new B.eAF(w))},
$S:0}
B.eAF.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eAR.prototype={
$0(){var w=this.a
return w.m(new B.eAE(w,this.b))},
$S:0}
B.eAE.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eHB.prototype={
$0(){return B.qV(this.b,this.a.d,"title")},
$S:0}
B.eHC.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIT().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c08(v[t],t,s,q,u))
return new C.D(A.fD,C.bS(A.fJ,w,A.t5,0,0),null)},
$S:685}
B.eHD.prototype={
$1(d){return this.a.m(new B.eHA())},
$S:2}
B.eHA.prototype={
$0(){},
$S:0}
B.eHE.prototype={
$0(){var w=this.a
w.m(new B.eHz(w,this.b))
w=w.gIT()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHz.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eHF.prototype={
$0(){var w=this.a
return w.m(new B.eHy(w,this.b))},
$S:0}
B.eHy.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eHG.prototype={
$0(){var w=this.a
return w.m(new B.eHx(w))},
$S:0}
B.eHx.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eHH.prototype={
$0(){var w=this.a
return w.m(new B.eHw(w,this.b))},
$S:0}
B.eHw.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eHI.prototype={
$0(){var w=this.a.gIT()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHJ.prototype={
$1(d){var w=this.a
return w.m(new B.eHv(w,d))},
$S:6}
B.eHv.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.els.prototype={
$1(d){return d.a.aC(0,this.a).gcn()<16},
$S:z+13}
B.elt.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcn()<16||d.a.aC(0,w).gcn()>this.a.r.gamw()*2.2},
$S:z+13}
B.elg.prototype={
$0(){return B.qV(this.b,this.a.d,"orbits")},
$S:0}
B.elh.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.as(e.b,e.d)
q.r=p
w=q.gadM()
v=q.w
u=q.as
t=q.at
s=u==null?A.a3i:q.ckd(u,q.gaWi())
return new C.ey(C.aB(A.c7,C.b3(r,r,r,new B.blg(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eld(q),new B.ele(q),new B.elf(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5),q.d)},
$S:197}
B.ele.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.elf.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eld.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcn()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_M(u,v.gaWi(),v.Q,v.b2m(),C.a([],x.g)))
C.jV()
if(v.ax)E.dH(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:38}
B.eli.prototype={
$1(d){var w=this.a
return w.m(new B.elc(w,d))},
$S:6}
B.elc.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.elk.prototype={
$1(d){var w=this.a
return w.m(new B.elb(w,d))},
$S:6}
B.elb.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ell.prototype={
$1(d){var w=this.a
return w.m(new B.ela(w,d))},
$S:6}
B.ela.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.elm.prototype={
$0(){var w=this.a
return w.m(new B.el9(w))},
$S:0}
B.el9.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eln.prototype={
$0(){var w=this.a
return w.m(new B.el8(w))},
$S:0}
B.el8.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.elo.prototype={
$0(){var w=this.a
return w.m(new B.el7(w))},
$S:0}
B.el7.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.elp.prototype={
$0(){var w=this.a
return w.m(w.gcwc())},
$S:0}
B.elq.prototype={
$0(){var w=this.a
return w.m(w.gbHd())},
$S:0}
B.elr.prototype={
$0(){var w=this.a
return w.m(new B.el6(w))},
$S:0}
B.el6.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.arj(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hi())}},
$S:0}
B.elj.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.eH2.prototype={
$1(d){return this.a.fX$-d.b>6000},
$S:723}
B.eH3.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eH1(d),C.S(w).k("a_<1>")).gM(0)>=3},
$S:723}
B.eH1.prototype={
$1(d){return d.a.aC(0,this.a.a).gcn()<14},
$S:z+53}
B.eGS.prototype={
$0(){return B.qV(this.b,this.a.d,"swarm")},
$S:0}
B.eGT.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ey(C.aB(A.c7,C.b3(w,w,w,new B.bsP(v.e,v.f,v.ax,v.at,v.ay,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eGP(v),new B.eGQ(v),new B.eGR(v),w,w,w,w,w,w,w,w,new B.eGH(v),new B.eGI(v),new B.eGJ(v),w,w,w,!1,A.a5),v.d)},
$S:197}
B.eGQ.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eGR.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eGP.prototype={
$1(d){return this.a.ay=null},
$S:38}
B.eGI.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fX$))
if(w.ch)E.dH(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lk("flute",7,500,0.3)},
$S:23}
B.eGJ.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eGH.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eGU.prototype={
$0(){var w=this.a
return w.m(new B.eGO(w,this.b))},
$S:0}
B.eGO.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eGV.prototype={
$0(){var w=this.a
return w.m(new B.eGN(w,this.b))},
$S:0}
B.eGN.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eGW.prototype={
$0(){var w=this.a
return w.m(new B.eGM(w))},
$S:0}
B.eGM.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eGX.prototype={
$1(d){var w=this.a
return w.m(new B.eGL(w,d))},
$S:6}
B.eGL.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eGY.prototype={
$1(d){var w=this.a
return w.m(new B.eGK(w,d))},
$S:6}
B.eGK.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eGZ.prototype={
$1(d){var w=this.a
return w.m(new B.eGG(w,d))},
$S:6}
B.eGG.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eH_.prototype={
$1(d){var w=this.a
return w.m(new B.eGF(w,d))},
$S:6}
B.eGF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eH0.prototype={
$1(d){var w=this.a
return w.m(new B.eGE(w,d))},
$S:6}
B.eGE.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dHO.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dHN(w,d))},
$S:131}
B.dHN.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.U(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jz(v==null?A.rz:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.u(u.a),A.k.N(C.dU(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dHP.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dHQ.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zu(w)>0},
$S:z+14}
B.dHE.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.aA_()},
$S:0}
B.dHH.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eL(w,F.kT,new C.D(A.bB,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hK,w,w,w),A.R,C.E(C.im(!0,w,w,A.y,T.aP9,new B.dHG(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.Y),w)},
$S:48}
B.dHG.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dHF(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b_:A.dp,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jm
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aH("\u2605",n)+A.a.aH("\u2606",3-n),s,s,s,s,s,s,D.fh2,s,s,s))
return C.aB(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a5)},
$S:77}
B.dHF.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dHL.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacN()
o=C.b3(q,q,q,new B.baK(p.d,w,v,p.gc6Z(),q),o)
v=p.bYP("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gId()
t=p.as>=p.gId()?A.aZ:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auP("GOAL",""+w+" / "+u,t),p.auP("STARS",A.a.aH("\u2605",s)+A.a.aH("\u2606",3-s),A.aM)],r),A.m,q,A.hH,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lN)
if(p.Q&&!p.y)s.push(D.aXv)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.aZ:A.c8).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.aZ:A.c8,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gId()+".",q,q,q,q,q,q,A.hJ,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aH("\u2605",t==null?1:t),q,q,q,q,q,q,D.f7v,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mC,"Try again",new B.dHI(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j4,"Next level",new B.dHJ(p),A.aZ,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.Wq,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aB(A.c7,new C.an(A.W,q,A.b2,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dHK(p),q,q,q,q,!1,A.a5)},
$S:36}
B.dHK.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fX$
E.dH(180,"",200,1,0.4,"sine")
C.jl()},
$S:23}
B.dHI.prototype={
$0(){var w=this.a
return w.m(w.gb51())},
$S:0}
B.dHJ.prototype={
$0(){var w=this.a
return w.aZ7(w.r+1)},
$S:0}
B.dHM.prototype={
$0(){var w=this.a
return w.m(w.gb51())},
$S:0}
B.cMS.prototype={
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
v.z=A.lA
w.af(d,e*0.5,v)},
$S:724}
B.egW.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcPB()?this.a.csh(w,v,d.b):w.aC(0,v).gcn())<24},
$S:z+56}
B.ehk.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eh9.prototype={
$0(){var w=this.a
return w.m(new B.eh0(w))},
$S:0}
B.eh0.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eha.prototype={
$0(){return B.qV(this.b,this.a.d,"marble-music")},
$S:0}
B.ehb.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ey(C.aB(A.c7,C.b3(w,w,w,new B.bhO(v.e,v.f,v.at,v.ax,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eh6(v),new B.eh7(v),new B.eh8(v),w,w,w,w,w,w,w,w,w,w,new B.eh_(v),w,w,w,!1,A.a5),v.d)},
$S:197}
B.eh_.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_e(w)
u.e.push(new B.FN(w,w,v,u.aPz(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}if(u.x==="erase")u.aSe(d.b)},
$S:51}
B.eh7.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.eh8.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aSe(d.b)},
$S:18}
B.eh6.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcn()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_e(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FN(w,t,v,u.aPz(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:38}
B.ehc.prototype={
$0(){var w=this.a
return w.m(new B.eh5(w,this.b))},
$S:0}
B.eh5.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.ehd.prototype={
$0(){var w=this.a
return w.m(new B.eh4(w,this.b))},
$S:0}
B.eh4.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ehe.prototype={
$0(){var w=this.a
return w.m(new B.eh3(w,this.b))},
$S:0}
B.eh3.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ehf.prototype={
$1(d){var w=this.a
return w.m(new B.eh2(w,d))},
$S:6}
B.eh2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ehg.prototype={
$0(){var w=this.a
return w.m(new B.eh1(w))},
$S:0}
B.eh1.prototype={
$0(){return this.a.ayv("stairs")},
$S:0}
B.ehh.prototype={
$0(){var w=this.a
return w.m(new B.egZ(w))},
$S:0}
B.egZ.prototype={
$0(){return this.a.ayv("pinball")},
$S:0}
B.ehi.prototype={
$0(){var w=this.a
return w.m(new B.egY(w))},
$S:0}
B.egY.prototype={
$0(){return this.a.ayv("random")},
$S:0}
B.ehj.prototype={
$0(){var w=this.a
return w.m(new B.egX(w))},
$S:0}
B.egX.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ekQ.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ekR.prototype={
$0(){var w=this.b,v=new B.adx(this.a.a,this.c)
v.c=w.fX$
return w.e.push(v)},
$S:0}
B.ekY.prototype={
$0(){var w=this.a
return w.m(new B.ekX(w))},
$S:0}
B.ekX.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ekZ.prototype={
$0(){return B.qV(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.el_.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.as(e.b,e.d)
if(!u.f){u.f=!0
u.aQZ()}w=u.w
return new C.ey(C.aB(A.c7,C.b3(v,v,v,new B.blh(u.e,u.gaZ9(),6,u.gcmj(),u.gcsL(),u.fX$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ekW(u),v,v,v,!1,A.a5),u.d)},
$S:197}
B.ekW.prototype={
$1(d){return this.a.c70(d.b)},
$S:51}
B.el0.prototype={
$1(d){var w=this.a
return w.m(new B.ekV(w,d))},
$S:6}
B.ekV.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.el1.prototype={
$0(){var w=this.a
return w.m(new B.ekU(w,this.b))},
$S:0}
B.ekU.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.el2.prototype={
$0(){var w=this.a
return w.m(new B.ekT(w,this.b))},
$S:0}
B.ekT.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.el3.prototype={
$0(){var w=this.a
return w.m(w.gbLd())},
$S:0}
B.el4.prototype={
$0(){var w=this.a
return w.m(new B.ekS(w))},
$S:0}
B.ekS.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adx(v.av(6),v.aj()))},
$S:0}
B.el5.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.fzv.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:140}
B.ekk.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ekj(w,d))},
$S:131}
B.ekj.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.ek6.prototype={
$2(d,e){var w=this.b
if(A.o.am(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:140}
B.ek0.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b9D(w.b,new C.v(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ek1.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ek5.prototype={
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
p=D.wh.h(0,v[u].a).a
o=w.ajl(u)
v=D.wh.h(0,v[t].a).a
n=w.ajl(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.w4("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaZf()&&w.x.L(0,w.d)){B.w4("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.w1("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.ek4.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ek2(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bM(0,new B.ek3(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ek2.prototype={
$1(d){var w=this.a
return A.o.am(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.ek3.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:140}
B.eke.prototype={
$1(d){return""+d.b+" "+D.wh.h(0,d.a).c.toLowerCase()},
$S:418}
B.ekf.prototype={
$0(){var w=this.a
return w.m(new B.ekd(w))},
$S:0}
B.ekd.prototype={
$0(){var w=this.a;++w.d
w.awW(0)},
$S:0}
B.ekg.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.as(e.b,e.d)
return C.aB(A.c7,C.b3(w,w,w,new B.biv(v.e,v.f,v.r,v.gcDz(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ek9(v),new B.eka(v),new B.ekb(v,e),w,w,w,w,w,w,w,w,w,w,new B.ekc(v),w,w,w,!1,A.a5)},
$S:36}
B.ekc.prototype={
$1(d){return this.a.c7n(d.b)},
$S:51}
B.eka.prototype={
$1(d){var w=this.a
return w.w=w.aZg(d.b)},
$S:44}
B.ekb.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ek7(w,v,d,this.b))},
$S:18}
B.ek7.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ek9.prototype={
$1(d){return this.a.w=null},
$S:38}
B.ekh.prototype={
$0(){var w=this.a
return w.m(new B.ek8(w,this.b))},
$S:0}
B.ek8.prototype={
$0(){var w=this.a
w.d=this.b
w.awW(0)},
$S:0}
B.eki.prototype={
$0(){return this.a.c7h(0,this.b.a)},
$S:0}
B.dqt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.am(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.v(-h.b,h.a).eG(0,Math.max(h.gcn(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bT
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:140}
B.dQz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dQy(w,d))},
$S:131}
B.dQy.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dQo.prototype={
$0(){var w,v,u=J.e2(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aw0[w.av(4)]
return A.d.h3(u)},
$S:22}
B.dQn.prototype={
$1(d){return B.h2H(d)==="*"},
$S:3}
B.dQp.prototype={
$1(d){return d!==this.a},
$S:3}
B.dQm.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.w1("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.w4("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga9f()[r]+" codes for "+C.u(D.CG.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b1j()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.CG.h(0,w[u]))
r="Protein built: "+A.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.w4("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dQx.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dp:e,u=C.n(8),t=f?C.I(A.b_,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b_:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mv,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1868}
B.dQs.prototype={
$1(d){var w=D.dpq.h(0,d)
return w==null?A.c:w},
$S:725}
B.dQt.prototype={
$0(){var w=this.a
return w.m(new B.dQr(w,this.b))},
$S:0}
B.dQr.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.awc()},
$S:0}
B.dQu.prototype={
$0(){var w=this.a
return w.m(new B.dQq(w))},
$S:0}
B.dQq.prototype={
$0(){var w=this.a;++w.e
w.awc()},
$S:0}
B.dQv.prototype={
$0(){return this.a.aZe(this.b)},
$S:0}
B.dQw.prototype={
$0(){return this.a.aZe(this.b)},
$S:0}
B.dTo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTn(w,d))},
$S:131}
B.dTn.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dTb.prototype={
$0(){},
$S:0}
B.dTa.prototype={
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
B.dTc.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dTg.prototype={
$1(d){var w=this.a
return w.m(new B.dTf(w,d))},
$S:6}
B.dTf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dTh.prototype={
$1(d){var w=this.a
return w.m(new B.dTe(w,d))},
$S:6}
B.dTe.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dTi.prototype={
$1(d){var w=this.a
return w.m(new B.dTd(w,d))},
$S:6}
B.dTd.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dTj.prototype={
$0(){return this.a.aat("drought")},
$S:0}
B.dTk.prototype={
$0(){return this.a.aat("disease")},
$S:0}
B.dTl.prototype={
$0(){return this.a.aat("foxes")},
$S:0}
B.dTm.prototype={
$0(){return this.a.aat("rabbits")},
$S:0}
B.d5A.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eE()
k.dt(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.jM(new C.eu(e,l,l,A.cP,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.jv(1),l,l,l,l,A.c3,l)
n.en()
n.a3(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1870}
B.d5C.prototype={
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
if(m!=null)n.bD(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bD(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fG
this.c.aR(u,l)},
$S:1871}
B.d5B.prototype={
$3(d,e,f){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dO,A.c3)
v.en()
v.a3(this.a,new C.v(f,this.b.b+2))},
$S:1872}
B.bGa.prototype={
$2(d,e){return d+e.a*e.b},
$S:1873}
B.ftv.prototype={
$2(d,e){return e.a-d.a},
$S:1874}
B.dDZ.prototype={
$2(d,e){return d+e},
$S:73}
B.dEb.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dEa(v,A.k.D((v.gvY()-w[v.e].gv0())/Math.max(w[v.e].gv0(),8),-1,1)*0.32,u))},
$S:8}
B.dEa.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dEc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dE9(w,d))},
$S:131}
B.dE9.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dE_.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dE4.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1875}
B.dE5.prototype={
$0(){var w=this.a
return w.m(new B.dE3(w))},
$S:0}
B.dE3.prototype={
$0(){var w=this.a;++w.e
A.d.h7(w.f,0,5,0)},
$S:0}
B.dE6.prototype={
$2(d,e){var w=null,v=this.a
return C.aB(A.c7,C.b3(w,w,w,new B.b9P(v.w,this.b.a,v.f,v.gvY()===v.d[v.e].gv0(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dE2(v,e),w,w,w,!1,A.a5)},
$S:36}
B.dE2.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.czk(v-1)},
$S:51}
B.dE7.prototype={
$0(){var w=this.a
return w.m(new B.dE1(w,this.b))},
$S:0}
B.dE1.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h7(w.f,0,5,0)},
$S:0}
B.dE8.prototype={
$0(){var w=this.a
return w.m(new B.dE0(w))},
$S:0}
B.dE0.prototype={
$0(){return A.d.h7(this.a.f,0,5,0)},
$S:0}
B.cFp.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bw(C.ce(new C.v(d,s),20,w),A.qs)
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
B.fsv(v,"1",new C.v(d,s),A.bk,11)}},
$S:1876}
B.dXr.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dXq(w,v))},
$S:8}
B.dXq.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dXs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dXp(w,d))},
$S:131}
B.dXp.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dXh.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dXl.prototype={
$0(){var w=this.a
return w.m(new B.dXk(w))},
$S:0}
B.dXk.prototype={
$0(){return this.a.r++},
$S:0}
B.dXm.prototype={
$0(){var w=this.a
return w.m(new B.dXj(w,this.b))},
$S:0}
B.dXj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dXn.prototype={
$1(d){var w=this.a
return w.m(new B.dXi(w,d))},
$S:6}
B.dXi.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dXo.prototype={
$1(d){return this.a.c7o(this.b,d)},
$S:6}
B.ddA.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQI(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sar(new C.bV(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bW(d,e+6)))
m.aR(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aR(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hP.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1877}
B.ddB.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fsv(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1878}
B.dIa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dI9(w,d))},
$S:131}
B.dI9.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dHT.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jK(90-(w-65)):d},
$S:14}
B.dI1.prototype={
$1(d){return this.a.m(new B.dI0())},
$S:2}
B.dI0.prototype={
$0(){},
$S:0}
B.dI2.prototype={
$1(d){return this.a.m(new B.dI_())},
$S:2}
B.dI_.prototype={
$0(){},
$S:0}
B.dI3.prototype={
$0(){var w=this.a
return w.m(new B.dHZ(w))},
$S:0}
B.dHZ.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXS()},
$S:0}
B.dI4.prototype={
$0(){var w=this.a
return w.m(new B.dHY(w))},
$S:0}
B.dHY.prototype={
$0(){return this.a.f=0},
$S:0}
B.dI5.prototype={
$0(){var w=this.a
return w.m(new B.dHX(w))},
$S:0}
B.dHX.prototype={
$0(){return this.a.f=1},
$S:0}
B.dI6.prototype={
$0(){var w=this.a
return w.m(new B.dHW(w,this.b))},
$S:0}
B.dHW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dI7.prototype={
$1(d){var w=this.a
return w.m(new B.dHV(w,d))},
$S:6}
B.dHV.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dI8.prototype={
$1(d){var w=this.a
w.m(new B.dHU(w,d))
if(w.ga9J()&&w.Q.L(0,w.x)){B.w4("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.w1("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dHU.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bMB.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bMM.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bMH.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bMN.prototype={
$1(d){return this.a.LI(d)&&!d.x},
$S:z+1}
B.bMO.prototype={
$2(d,e){return Math.max(d,this.a.aAt(e))},
$S:z+6}
B.bMQ.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMR(w))},
$S:z+5}
B.bMR.prototype={
$0(){return this.a.a},
$S:100}
B.bMP.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bMS.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMT(w))},
$S:z+5}
B.bMT.prototype={
$0(){return this.a.a},
$S:100}
B.bMD.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bME(w))},
$S:z+5}
B.bME.prototype={
$0(){return this.a.a},
$S:100}
B.bMC.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bMF.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMG(w))},
$S:z+5}
B.bMG.prototype={
$0(){return this.a.a},
$S:100}
B.bMA.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bMU.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bMI.prototype={
$1(d){return d!==this.b&&this.a.aGD(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bML.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bMK.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bMJ.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHo.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bHp.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cm5.prototype={
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
$S:180}
B.fKS.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1879}
B.fKU.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bT
return w},
$S:1880}
B.fKV.prototype={
$5(d,e,f,g,h){return C.bw(new C.a8(d,e,d+f,e+g),new C.aS(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1881}
B.fKT.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.sar(new C.a9(A.b1,A.b5,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1882}
B.bH2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bH3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bH1(w))},
$S:0}
B.bH1.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bH4.prototype={
$0(){return C.a([],x.ey)},
$S:1883}
B.bH5.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:377}
B.bH6.prototype={
$0(){var w,v,u
J.bEe(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cw(v))if(B.h39(v.b))w.b0g(v)
else w.a_u(v)
else{u=w.a.c.bd_(v)
w.adZ(u==null?"The "+$.qj().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bH0.prototype={
$1(d){return new C.e_(new B.bGZ(this.a,this.b),null)},
$S:20}
B.bGZ.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bH_(this.a,v,e),t=$.qj(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kj,w,w,w),q=C.aH(w,w,w,w,D.bK6,w,w,w,new B.bGV(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xV,C.x(C.a([r,A.au,D.fHy,A.R,C.B(C.a([q,C.E(C.l1(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bQN,w,w,w,new B.bGW(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fl9,w,w,!0,w,w,new B.bGX(u),w,w),C.bK(!1,A.wF,w,w,!0,w,w,new B.bGY(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:88}
B.bH_.prototype={
$1(d){var w=this.a
w.m(new B.bGT(this.b,d))
this.c.$1(new B.bGU())
w.a.toString},
$S:6}
B.bGT.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGU.prototype={
$0(){},
$S:0}
B.bGV.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGW.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGX.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGY.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bHl.prototype={
$2(d,e){var w
if(d==="short"){E.dH(1800,"",120,0,0.55,"noise")
E.dH(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adZ("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adZ("\u26a0 Overloaded! The "+$.qj().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zI(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adZ("Burnt out! "+e.ay)
E.dH(140,"",320,0,0.6,"noise")
E.dH(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bHm.prototype={
$0(){},
$S:0}
B.bGw.prototype={
$0(){},
$S:0}
B.bHn.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bHk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aB(A.c7,C.b3(p,p,p,new B.aiF(w,v,u,t,s,r==null?A.j7:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHe(o),new B.bHf(o),new B.bHg(o),p,p,p,p,p,p,p,p,p,p,new B.bHh(o),p,p,p,!1,A.a5)],q)
if(o.a.c.a.length===0)n.push(D.b62)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aB(p,C.p(p,C.B(C.a([D.fjp,C.E(C.d(w,p,p,p,p,p,p,D.fbA,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.bbt,p,u,v,p,p,A.n),p,p,p,p,A.nj,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHi(o),p,p,p,p,p,p,!1,A.a5),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZj(C.B(C.a([D.bAo,new B.fj(A.Gf,"Cut wire",new B.bHj(o),A.c8,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.ch7(w),p,p,10,10,p,p))}return C.jA(new C.an(A.W,p,A.b2,A.r,n,p),A.r,p)},
$S:359}
B.bHf.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7i(s)
if(r!=null){t.m(new B.bHc(t,r,d))
return}w=t.b0X(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bHd(t,w))}},
$S:44}
B.bHc.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bHd.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bHg.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bHa(w,d))
else if(w.w!=null)w.m(new B.bHb(w,d.b.ad(0,w.x)))},
$S:18}
B.bHa.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bHb.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bHe.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7i(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akw(u.a,u.b,v.a,v.b)!=null)E.dH(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adX()},
$S:38}
B.bHh.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0X(v)
if(u!=null){w.m(new B.bH8(w,u))
if(D.m4.ai(0,u.b))w.crK(u)
w.a.toString
return}w.m(new B.bH9(w,w.cEq(v)))},
$S:51}
B.bH8.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dH(200,"",70,0,0.2,"saw")}},
$S:0}
B.bH9.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bHi.prototype={
$0(){var w=this.a
return w.m(new B.bH7(w))},
$S:0}
B.bH7.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bHj.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dH(300,"",50,0,0.35,"noise")
w.adX()},
$S:0}
B.bGx.prototype={
$0(){return this.a.boX(this.b)},
$S:0}
B.bGQ.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f65,w,w,w),C.E(C.l1(this.b.d,w,w,g,h,new B.bGS(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1884}
B.bGS.prototype={
$1(d){var w=this.a
w.m(new B.bGR(this.b,d))
w.a.toString},
$S:6}
B.bGR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGD.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dH(260,"",70,0,0.35,"noise")
w.adX()},
$S:0}
B.bGE.prototype={
$0(){var w=this.a
return w.m(new B.bGC(w))},
$S:0}
B.bGC.prototype={
$0(){return this.a.d=null},
$S:0}
B.bGF.prototype={
$0(){this.a.m(new B.bGB(this.b,this.c))
E.dH(900,"",40,0,0.3,"noise")},
$S:0}
B.bGB.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bGI.prototype={
$0(){return this.a.b0g(this.b)},
$S:0}
B.bGJ.prototype={
$0(){return this.a.a_u(this.b)},
$S:0}
B.bGK.prototype={
$0(){return this.a.a18(this.b)},
$S:0}
B.bGL.prototype={
$0(){var w=this.a
w.m(new B.bGA(this.b,this.c))
w.a.toString},
$S:0}
B.bGA.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGM.prototype={
$0(){var w=this.a
w.m(new B.bGz(this.b,this.c))
w.a.toString},
$S:0}
B.bGz.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGN.prototype={
$0(){var w=this.a
w.m(new B.bGy(this.b,this.c))
w.a.toString},
$S:0}
B.bGy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGO.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGP.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGG.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGH.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fiS.prototype={
$1(d){return d.aGg("bulb")},
$S:z+2}
B.fiT.prototype={
$1(d){return d.pO(0,"switch")&&d.aGg("bulb")},
$S:z+2}
B.fiU.prototype={
$1(d){return A.d.b4(d.a,new B.fiF())},
$S:z+2}
B.fiF.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fiV.prototype={
$1(d){return d.pO(0,"resistor")&&A.d.b4(d.a,new B.fiE())},
$S:z+2}
B.fiE.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fiW.prototype={
$1(d){return!d.pO(0,"battery")&&d.aGg("bulb")},
$S:z+2}
B.fiJ.prototype={
$1(d){return A.d.b4(d.a,new B.fiD())},
$S:z+2}
B.fiD.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiK.prototype={
$1(d){return A.d.b4(d.a,new B.fiC())},
$S:z+2}
B.fiC.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fiL.prototype={
$1(d){return A.d.b4(d.a,new B.fiB())},
$S:z+2}
B.fiB.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fiM.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fiz())&&A.d.b4(w,new B.fiA())&&d.pO(0,"buck")},
$S:z+2}
B.fiz.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fiA.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fiN.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fix())&&A.d.b4(w,new B.fiy())},
$S:z+2}
B.fix.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fiy.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiO.prototype={
$1(d){return A.d.b4(d.a,new B.fiw())},
$S:z+2}
B.fiw.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dTw.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dTF.prototype={
$1(d){var w=this.a.d
return w.aGD(d)&&w.Cw(d)},
$S:z+1}
B.dTG.prototype={
$1(d){return d.x},
$S:z+1}
B.dTH.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dTI.prototype={
$0(){},
$S:0}
B.dTv.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.fAh,A.au,D.fl5,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qj[v]
t=A.c.j(0.06)
s=new C.aS(14,14)
r=new C.az(A.bD,1,A.q,-1)
n.push(C.aB(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.ki,q,q,q,q,q,q,q,q,q),A.bC,new C.y(u.b,q,D.fck,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bn(s,s,s,s),q,q,A.n),q,q,q,A.cv,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dTu(w,d,u),q,q,q,q,q,q,!1,A.a5))}return C.eL(q,F.kT,new C.D(A.bP,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.Y),q)},
$S:48}
B.dTu.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dTt(w,this.c))
E.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dTt.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bi6()},
$S:0}
B.dTr.prototype={
$1(d){return new B.Vq(this.a.d,null)},
$S:z+67}
B.dTs.prototype={
$0(){},
$S:0}
B.dTE.prototype={
$1(d){return new C.e_(new B.dTD(this.a),null)},
$S:20}
B.dTD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahR(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.aZ:A.aO
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fxA,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bx(C.n(4),C.m6(A.bD,m,m,5,m,w.a/11,new C.lZ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fo9)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.TW,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DI,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dTB(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aS(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dp,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aB(m,C.p(m,new C.ci(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a8y,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bg,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bn(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nj,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dTC(l,o,e),m,m,m,m,m,m,!1,A.a5))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A4.xT,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:88}
B.dTB.prototype={
$0(){var w=this.a
w.m(new B.dTz(w))
this.b.$1(new B.dTA())
w.EW()},
$S:0}
B.dTz.prototype={
$0(){var w=this.a
$.ahR()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dTA.prototype={
$0(){},
$S:0}
B.dTC.prototype={
$0(){var w=this.a
w.m(new B.dTx(w,this.b))
this.c.$1(new B.dTy())
w.EW()},
$S:0}
B.dTx.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dTy.prototype={
$0(){},
$S:0}
B.dTK.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dTL.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mg("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).cm(C.ea(new B.dTJ(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dTJ.prototype={
$1(d){C.lq("construction")
return Ak.hGE()},
$S:z+68}
B.dTM.prototype={
$0(){return B.hsD(this.a,"ELECTRONICS LAB",this.b,A.aO)},
$S:0}
B.dTN.prototype={
$0(){var w=this.a
return w.m(w.d.gcVC())},
$S:0}
B.dTO.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grI(v))
w.EW()},
$S:0}
B.cCX.prototype={
$2(d,e){var w=null,v=this.a.gawX().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8X(v,w),A.ax)},
$S:70}
B.cCW.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cW(v,u,v+e,u))
w.F(new C.cW(v,u,v,u+e))
w.F(new C.cW(v,u,v-e,u))
w.F(new C.cW(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aR(w,t)},
$S:668}
B.fPy.prototype={
$3(d,e,f){return new B.UH(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fPz.prototype={
$4(d,e,f,g){var w=x.Y
return new C.d_(e,!1,C.is(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
B.dPs.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dPr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYD(o):q.bB1(o,p),m=x.p
p=C.a([C.qm(new C.nh(n,new C.cx(p,x.aC)),A.pV,C.rW(),A.bd,A.bd,new B.dPp())],m)
n=t.d
if(n){w=A.k.E(q.gRP(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.at],m)
if(w)m.push(D.bA9)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.aZ:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ey,new C.o(A.w,s,s,u,s,s,A.n),A.ne,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uP)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.KA,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wu)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.KA,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aB(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dPq(q),s,s,s,s,s,s,!1,A.a5),s,s,0,0,s,s))
return C.bx(r,new C.an(A.W,s,A.b2,A.r,p,s),A.aq)},
$S:334}
B.dPp.prototype={
$2(d,e){var w=x.Y
return new C.d_(e,!1,C.is(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:388}
B.dPq.prototype={
$0(){var w=this.a
return w.m(new B.dPo(w))},
$S:0}
B.dPo.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPn.prototype={
$0(){var w=this.a
return w.m(new B.dPm(w,this.b))},
$S:0}
B.dPm.prototype={
$0(){return this.a.e=A.d.cH(F.ka,this.b)},
$S:0}
B.dPl.prototype={
$0(){var w=this.a
return w.m(new B.dPk(w))},
$S:0}
B.dPk.prototype={
$0(){return this.a.e=0},
$S:0}
B.dPg.prototype={
$0(){var w=this.a
return w.m(new B.dPf(w))},
$S:0}
B.dPf.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fFY,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eH,p,p,p,D.fih,p,p,p),1),C.d(A.a.aX(A.o.u(C.dk(new C.T(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(C.h4(new C.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qz,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kX,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bv8(w.gRP(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.b_,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aB(p,C.p(p,p,A.f,p,p,A.abD,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dPi(w),p,p,p,p,p,p,!1,A.a5),A.eg,C.p(p,p,A.f,p,p,A.abJ,p,12,p,p,p,p,p,12),A.eg,C.p(p,p,A.f,p,p,D.b1s,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.ka[o].a,p,1,A.a2,p,p,p,A.a8p,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bU(0,new C.D(D.bwU,C.p(p,C.bx(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aeD(r,w.gRP(),p),A.f6),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.di0,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.b_,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jr,w.auR(F.ka[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lq,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bx(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.W,p,A.b2,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.LM,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:334}
B.dPi.prototype={
$0(){var w=this.a
return w.m(new B.dPh(w))},
$S:0}
B.dPh.prototype={
$0(){return this.a.e=null},
$S:0}
B.ecv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ecu(w,d))},
$S:131}
B.ecu.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h3h(v)},
$S:0}
B.ecw.prototype={
$0(){},
$S:0}
B.ecl.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h3h(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.ecm.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvw().r){C.jV()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.w4("click",s.c+s.d,60,0.4)
if(B.hsO(r.gvw(),q).b.a===r.gvw().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.w1("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BN("bell",D.apE,700,0.45)
for(q=r.gvw().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((A.o.E(t,7)+0.5)*p+w,(A.o.am(t,7)+0.5)*p+v),0))}}},
$S:0}
B.ecp.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aB(A.c7,C.b3(s,s,s,new B.bgZ(r.gvw(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ecn(r),s,s,s,!1,A.a5),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQJ,s,s,s),C.d(""+u.a+"/"+r.gvw().c.a+" \u2605   mirrors "+w.a+"/"+r.gvw().r,s,s,s,s,s,s,R.a86,s,s,s)],t),A.m,s,A.hH,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fnK("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.aZ,C.a([new B.fj(A.j4,"Next level",new B.eco(r),A.aZ,s)],t)))
return new C.an(A.W,s,A.b2,A.r,w,s)},
$S:64}
B.ecn.prototype={
$1(d){return this.a.c7K(d.b)},
$S:51}
B.eco.prototype={
$0(){var w=this.a
return w.ae2(w.d+1)},
$S:0}
B.ecq.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grI(v))},
$S:0}
B.ecr.prototype={
$0(){var w=this.a
return w.ae2(w.d+1)},
$S:0}
B.ecs.prototype={
$0(){var w=this.a
return w.ae2(w.d-1)},
$S:0}
B.ect.prototype={
$0(){return this.a.ae2(this.b)},
$S:0}
B.diG.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.am(d,7)+0.5)*w)},
$S:726}
B.diJ.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fW:A.aL).gp(0)
u.c=7
u.d=A.bT
r.bE(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bT
r.bE(w,v,u)},
$S:1886}
B.diH.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:449}
B.diI.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:449}
B.ecO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ecN(w,d))},
$S:131}
B.ecN.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.ecP.prototype={
$0(){},
$S:0}
B.ecz.prototype={
$1(d){return d===0},
$S:111}
B.ecI.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.u(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a8h,s,s,s)
w=r.z==="play"?A.k.dj(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c8:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a86,s,s,s)],v),A.m,s,A.hH,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dp:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b_,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.bud,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gczn(),s,s,s,s,s,s,D.aRy,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.x(C.a([C.E(C.b3(s,s,s,new B.bhd(r.f,s),A.f6),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aRy,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fnK("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fj(A.iM,"Start",new B.ecF(r),A.aZ,s)],v)))}if(r.z==="result")w.push(B.fnK(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j4,"Next colour",new B.ecG(r),A.aZ,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fnK("Finished! "+q,u,A.aZ,C.a([new B.fj(A.mC,"Play again",new B.ecH(r),A.aZ,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.ecF.prototype={
$0(){var w=this.a
return w.m(new B.ecB(w))},
$S:0}
B.ecB.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ax0()},
$S:0}
B.ecG.prototype={
$0(){var w=this.a
return w.m(w.gc7I())},
$S:0}
B.ecH.prototype={
$0(){var w=this.a
return w.m(new B.ecA(w))},
$S:0}
B.ecA.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ax0()},
$S:0}
B.ecJ.prototype={
$1(d){var w=this.a
return w.m(new B.ecE(w,d))},
$S:6}
B.ecE.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.ecK.prototype={
$1(d){var w=this.a
return w.m(new B.ecD(w,d))},
$S:6}
B.ecD.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.ecL.prototype={
$1(d){var w=this.a
return w.m(new B.ecC(w,d))},
$S:6}
B.ecC.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.ecM.prototype={
$0(){var w=this.a
return w.m(w.gc7J())},
$S:0}
B.fjz.prototype={
$0(){return D.e4h},
$S:z+70}
B.fjA.prototype={
$0(){return D.dCu},
$S:z+71}
B.fjB.prototype={
$0(){return D.dz1},
$S:z+72}
B.fjC.prototype={
$0(){return D.dBU},
$S:z+73}
B.fjD.prototype={
$0(){return D.dGR},
$S:z+74}
B.fjE.prototype={
$0(){return D.e00},
$S:z+75}
B.fjF.prototype={
$0(){return D.e2c},
$S:z+76}
B.fjG.prototype={
$0(){return D.dGa},
$S:z+77}
B.cgJ.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.cgK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hwg(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aS(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(C.aB(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TV,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lI,m,m,C.x(C.a([new C.y(r.a,m,D.fgT,m,m,m,m,m,m,m,m,m),A.cV,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bn(q,q,q,q),p,new C.a9(A.az,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cgI(d,r),m,m,m,m,m,m,!1,A.a5))}return C.bS(A.bA,j,A.bq,14,14)},
$S:169}
B.cgI.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.cgH(this.b),!1,null,x.H))},
$S:0}
B.cgH.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eM3.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4s(w.f)]},
$S:0}
B.eM_.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cH.aj()*7},
$S:0}
B.eLZ.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c9)
w.w=""},
$S:0}
B.eM1.prototype={
$0(){var w=this.a
return w.m(new B.eM0(w,this.b))},
$S:0}
B.eM0.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eM2.prototype={
$1(d){return this.a.aZK(0)},
$S:2}
B.dVK.prototype={
$0(){return B.BN("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dVL.prototype={
$0(){},
$S:0}
B.dVF.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dVH.prototype={
$0(){return this.a.aZM(this.b)},
$S:0}
B.dVI.prototype={
$0(){var w=this.a
return w.m(new B.dVG(w))},
$S:0}
B.dVG.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dVJ.prototype={
$0(){var w=this.a
return w.aZM(w.d)},
$S:0}
B.dGB.prototype={
$2(d,e){return d+e},
$S:89}
B.dGC.prototype={
$0(){},
$S:0}
B.dGw.prototype={
$2(d,e){return d+e},
$S:89}
B.dGz.prototype={
$0(){var w=this.a
return w.m(new B.dGy(w,this.b))},
$S:0}
B.dGy.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dGA.prototype={
$0(){var w=this.a
return w.m(new B.dGx(w))},
$S:0}
B.dGx.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dT0.prototype={
$0(){return B.qV(this.b,this.a.d,"drawing")},
$S:0}
B.dT1.prototype={
$1(d){var w=this.a
return w.m(new B.dT_(w,d))},
$S:44}
B.dT_.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI1(u,v,t))},
$S:0}
B.dT2.prototype={
$1(d){var w=this.a
return w.m(new B.dSZ(w,d))},
$S:18}
B.dSZ.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dT3.prototype={
$1(d){var w=this.a
return w.m(new B.dSY(w,d))},
$S:23}
B.dSY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI1(u,v,t))},
$S:0}
B.dT4.prototype={
$0(){var w=this.a
return w.m(new B.dSX(w,this.b))},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dT5.prototype={
$1(d){var w=this.a
return w.m(new B.dSW(w,d))},
$S:6}
B.dSW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dT6.prototype={
$0(){var w=this.a
return w.m(new B.dSV(w))},
$S:0}
B.dSV.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dT7.prototype={
$0(){var w=this.a
return w.m(new B.dSU(w))},
$S:0}
B.dSU.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dT8.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.dT9.prototype={
$0(){var w=this.a
return w.m(new B.dST(w))},
$S:0}
B.dST.prototype={
$0(){var w=this.a
w.x=D.awv[A.o.E(A.d.cH(D.awv,w.x)+1,4)]},
$S:0}
B.eia.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.eib.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BN("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ei9(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BN("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ei9.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.eic.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ei8(w))},
$S:11}
B.ei8.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.eig.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aB(w,C.mG(new B.eie(v,e),w,A.bd,A.pV,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eif(v,e),w,w,w,w,w,w,!1,A.a5)},
$S:77}
B.eif.prototype={
$0(){return this.a.c8F(this.b)},
$S:0}
B.eie.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fF(3.141592653589793*e)
m=C.n(16)
w=o?p:D.bZQ
if(o)v=q.a.r.t(0,q.b)?A.aZ.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.aZ:A.b_,A.q,1)
if(o){r=C.dp()
r.fF(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fw(A.A,C.d(u[t],p,p,p,p,p,p,D.fee,p,p,p),p,r,!0)
u=r}else u=D.fz_
return C.fw(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.eih.prototype={
$0(){var w=this.a
return w.m(new B.eid(w,this.b))},
$S:0}
B.eid.prototype={
$0(){var w=this.a
w.d=this.b.a
w.asb()},
$S:0}
B.eii.prototype={
$0(){var w=this.a
return w.m(w.gbJL())},
$S:0}
B.et3.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.et4.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.et1.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.et2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.et0(w))},
$S:11}
B.et0.prototype={
$0(){return this.a.f=-1},
$S:0}
B.et5.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.et6.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.et7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZL()},
$S:11}
B.et8.prototype={
$0(){return this.a.c8L(this.b)},
$S:0}
B.eHl.prototype={
$1(d){return C.u(d.h(0,1))+","},
$S:68}
B.eHu.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kW,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.eQ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e_),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1888}
B.eHq.prototype={
$1(d){return this.a.m(new B.eHp())},
$S:2}
B.eHp.prototype={
$0(){},
$S:0}
B.eHr.prototype={
$0(){var w=this.a
return w.m(new B.eHo(w,this.b))},
$S:0}
B.eHo.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eHs.prototype={
$1(d){var w=this.a
return w.m(new B.eHn(w,d))},
$S:6}
B.eHn.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eHt.prototype={
$0(){var w=this.a
return w.m(new B.eHm(w))},
$S:0}
B.eHm.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.egQ.prototype={
$0(){},
$S:0}
B.egR.prototype={
$0(){},
$S:0}
B.egJ.prototype={
$0(){var w=this.a
return w.m(new B.egI(w))},
$S:0}
B.egI.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a8g("hat",0.6)},
$S:0}
B.egK.prototype={
$0(){var w=this.a
return w.m(new B.egH(w))},
$S:0}
B.egH.prototype={
$0(){this.a.y=1.1
B.lk("bell",36,200,0.4)},
$S:0}
B.egL.prototype={
$0(){var w=this.a
return w.m(new B.egG(w))},
$S:0}
B.egG.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
B.lk("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.egM.prototype={
$0(){var w=this.a
return w.m(new B.egF(w,this.b))},
$S:0}
B.egF.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.egN.prototype={
$1(d){var w=this.a
return w.m(new B.egE(w,d))},
$S:6}
B.egE.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.egO.prototype={
$1(d){var w=this.a
return w.m(new B.egD(w,d))},
$S:6}
B.egD.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.egP.prototype={
$1(d){var w=this.a
return w.m(new B.egC(w,d))},
$S:6}
B.egC.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.ctE.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.ctF.prototype={
$0(){var w=this.a
return B.hsD(this.b,w.c,w.e,w.d)},
$S:0}
B.fTn.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f6E,v,v,v)
return C.em(C.a([C.bK(!1,D.foe,v,v,!0,v,v,new B.fTm(d),v,v)],x.p),v,v,F.n9,w,v,v,v,new C.b7(u,new C.az(s,1,A.q,-1)),t,v)},
$S:21}
B.fTm.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.ctA.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctz.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctG.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctB.prototype={
$0(){var w=this.a
A.d.W(w.fu$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
B.ctD.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l7$.a)/1e6,0,0.04)
w.l7$=d
w.fX$=A.o.am(v,1000)
w.lD(u)
if(w.c!=null)w.m(new B.ctC())},
$S:8}
B.ctC.prototype={
$0(){},
$S:0}
B.cgF.prototype={
$0(){var w=this
return B.lk(w.a,w.b,w.c,w.d)},
$S:1}
B.dYs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dYr(w,d))},
$S:z+79}
B.dYr.prototype={
$0(){return this.a.ctx(this.b)},
$S:0}
B.dXV.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:692}
B.dXT.prototype={
$0(){return this.a.id=D.a3o},
$S:0}
B.dXU.prototype={
$0(){var w=this.b.a,v=C.S(w).k("a_<1>")
v=C.pj(new C.a_(w,new B.dXS(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dXS.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dXR.prototype={
$1(d){var w=null,v=C.cc(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.em(C.a([C.bK(!1,A.po,w,w,!0,w,w,new B.dXQ(d),w,w)],x.p),w,w,F.n9,v,w,w,w,w,D.fz4,w)},
$S:21}
B.dXQ.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dYd.prototype={
$0(){return B.qV(this.b,this.a.d,"earth")},
$S:0}
B.dYe.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gW5()
r=p.z
o=C.a([C.aB(A.c7,C.b3(q,q,q,new B.bfp(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dY1(p),new B.dY2(p),new B.dY3(p),q,q,q,q,q,q,q,new B.dY4(p),q,q,q,!1,A.a5)],x.p)
if(p.r==null)o.push(A9.acl)
w=this.b
if(w!=null)o.push(C.ao(8,p.c9m(w),q,q,10,10,q,q))
return new C.ey(new C.an(A.W,q,A.b2,A.r,o,q),p.d)},
$S:197}
B.dY2.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:261}
B.dY3.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gW5()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:220}
B.dY1.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gW5()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:759}
B.dY4.prototype={
$1(d){var w=this.a,v=w.c9p(d.b)
if(v!=null)w.m(new B.dXW(w,v))
else w.m(new B.dXX(w))},
$S:51}
B.dXW.prototype={
$0(){return this.a.axu(this.b)},
$S:0}
B.dXX.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dYf.prototype={
$0(){var w=this.a
w.e.bP(0,A.c9)
w.m(new B.dY0(w,this.b))},
$S:0}
B.dY0.prototype={
$0(){var w=this.a
w.id=D.a3o
w.axu(this.b)},
$S:0}
B.dYj.prototype={
$0(){var w=this.a
return w.m(new B.dYc(w))},
$S:0}
B.dYc.prototype={
$0(){var w=this.a
w.fx=null
w.atm(15,w.y,1)},
$S:0}
B.dYk.prototype={
$0(){var w=this.a
return w.m(new B.dYb(w,this.b))},
$S:0}
B.dYb.prototype={
$0(){var w=this.b.b
return this.a.atm(w.a,w.b,w.c)},
$S:0}
B.dYl.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dYa(w,v))},
$S:0}
B.dYa.prototype={
$0(){var w=this.b.a
return this.a.axu(w[A.cH.av(w.length)])},
$S:0}
B.dYm.prototype={
$1(d){var w=this.a
return w.m(new B.dY9(w,d))},
$S:6}
B.dY9.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dYn.prototype={
$1(d){var w=this.a
return w.m(new B.dY8(w,d))},
$S:6}
B.dY8.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dYo.prototype={
$1(d){var w=this.a
return w.m(new B.dY7(w,d))},
$S:6}
B.dY7.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dYp.prototype={
$0(){var w=this.a
return w.m(new B.dY6(w))},
$S:0}
B.dY6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dYq.prototype={
$0(){var w=this.a
return w.m(new B.dY5(w))},
$S:0}
B.dY5.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dYg.prototype={
$0(){var w=this.a
return w.m(new B.dY_(w))},
$S:0}
B.dY_.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dYh.prototype={
$0(){var w=this.a
return w.m(new B.dXZ(w))},
$S:0}
B.dXZ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dYi.prototype={
$0(){var w=this.a
return w.m(new B.dXY(w))},
$S:0}
B.dXY.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dXP.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ9,w,w,w),A.uS,C.d(e,w,2,A.a2,w,w,w,A.Uc,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dXO.prototype={
$0(){var w=this.a
return w.m(new B.dXN(w))},
$S:0}
B.dXN.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dep.prototype={
$0(){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0V,w,w),this.a),A.a4,A.c6,w,A.dO,A.c3)
v.en()
return v},
$S:343}
B.deq.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1889}
B.fjs.prototype={
$0(){return D.dEr},
$S:z+81}
B.fjt.prototype={
$0(){return D.e1V},
$S:z+82}
B.fju.prototype={
$0(){return D.dEt},
$S:z+83}
B.fjv.prototype={
$0(){return D.dyO},
$S:z+84}
B.fjw.prototype={
$0(){return D.dEp},
$S:z+85}
B.fjx.prototype={
$0(){return D.e01},
$S:z+86}
B.fjy.prototype={
$0(){return D.e0_},
$S:z+87}
B.eIe.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.eIf.prototype={
$0(){var w=this.a
return w.m(new B.eId(w))},
$S:0}
B.eId.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSr()+1,16)},
$S:0}
B.eIg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hwf(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aS(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bjv],u)
k.push(C.aB(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.y(s.a,n,D.fba,n,A.L,n,n,n,n,2,n,n),A.cV,new C.y(s.b,n,D.fgh,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bn(r,r,r,r),n,new C.a9(A.az,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cq,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eIc(d,s),n,n,n,n,n,n,!1,A.a5))}return C.bS(A.fJ,k,A.bq,10,10)},
$S:169}
B.eIc.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.eIb(this.b),!1,null,x.H))},
$S:0}
B.eIb.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.eAh.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eAs.prototype={
$0(){return B.qV(this.b,this.a.d,"solar-system")},
$S:0}
B.eAt.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.as(e.b,e.d)
u.ch=t
t=C.a([C.aB(A.c7,C.b3(v,v,v,new B.brV(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eAp(u),new B.eAq(u),v,v,v,v,v,v,v,new B.eAr(u),v,v,v,!1,A.a5)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c9r(w),v,v,10,10,v,v))
return new C.ey(new C.an(A.W,v,A.b2,A.r,t,v),u.d)},
$S:197}
B.eAp.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:261}
B.eAq.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:220}
B.eAr.prototype={
$1(d){var w=this.a,v=w.c9u(d.b)
if(v!=null)w.b_6(v)},
$S:51}
B.eAu.prototype={
$0(){var w=this.a
return w.m(new B.eAo(w))},
$S:0}
B.eAo.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eAv.prototype={
$0(){return this.a.b_6(this.b)},
$S:0}
B.eAw.prototype={
$1(d){var w=this.a
return w.m(new B.eAn(w,d))},
$S:6}
B.eAn.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eAx.prototype={
$1(d){var w=this.a
return w.m(new B.eAm(w,d))},
$S:6}
B.eAm.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eAy.prototype={
$0(){var w=this.a
return w.m(new B.eAl(w))},
$S:0}
B.eAl.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.eAz.prototype={
$0(){var w=this.a
return w.m(new B.eAk(w))},
$S:0}
B.eAk.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eAA.prototype={
$0(){var w=this.a
return w.m(new B.eAj(w))},
$S:0}
B.eAj.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eAB.prototype={
$0(){var w=this.a
return w.m(new B.eAi(w))},
$S:0}
B.eAi.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eAg.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:277}
B.eAf.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ9,w,w,w),A.uS,C.d(e,w,2,A.a2,w,w,w,A.Uc,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.eAe.prototype={
$0(){var w=this.a
return w.m(new B.eAd(w))},
$S:0}
B.eAd.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f1C.prototype={
$0(){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qs,w,w),this.a),A.a4,A.c6,w,A.dO,A.c3)
v.en()
return v},
$S:343}
B.f1D.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f1E.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dYw.prototype={
$0(){},
$S:0}
B.dYZ.prototype={
$1(d){return d!=null},
$S:365}
B.dYL.prototype={
$0(){var w=this.a
return w.m(new B.dYC(w,this.b))},
$S:0}
B.dYC.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dYM.prototype={
$0(){var w=this.a
return w.m(new B.dYB(w))},
$S:0}
B.dYB.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYN.prototype={
$0(){var w=this.a
return w.m(new B.dYK(w))},
$S:0}
B.dYK.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dYR.prototype={
$0(){var w=this.a
return w.m(new B.dYJ(w))},
$S:0}
B.dYJ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dYS.prototype={
$1(d){var w=this.a
return w.m(new B.dYI(w,d))},
$S:6}
B.dYI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dYT.prototype={
$0(){var w=this.a
return w.m(w.gcwL())},
$S:0}
B.dYU.prototype={
$1(d){var w=this.a
return w.m(new B.dYH(w,d))},
$S:6}
B.dYH.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dYV.prototype={
$1(d){var w=this.a
return w.m(new B.dYG(w,d))},
$S:6}
B.dYG.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dYW.prototype={
$1(d){var w=this.a
return w.m(new B.dYF(w,d))},
$S:6}
B.dYF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dYX.prototype={
$1(d){var w=this.a
return w.m(new B.dYE(w,d))},
$S:6}
B.dYE.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dYY.prototype={
$0(){var w=this.a
return w.m(new B.dYD(w))},
$S:0}
B.dYD.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dYO.prototype={
$0(){var w=this.a
return w.m(new B.dYA(w))},
$S:0}
B.dYA.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dYP.prototype={
$0(){var w=this.a
return w.m(new B.dYz(w))},
$S:0}
B.dYz.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dYQ.prototype={
$0(){var w=this.a
return w.m(new B.dYy(w))},
$S:0}
B.dYy.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dYv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bU(0,C.c0(g,new C.o(D.bi0,g,g,C.n(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.z_[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.u(D.z_[q].b)+" m/s\xb2",g,D.ffE,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dp,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.NA,C.b0(D.z_[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.z_[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.z_[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.z_[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rZ,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f7Q,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dYu()))a1.push(D.b6n)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dYu.prototype={
$1(d){return d==null},
$S:365}
B.dYx.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bd,new C.o(v,v,v,C.n(8),v,new C.a9(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.il,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GR(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fdZ,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dYt.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.baB(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bD,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.aZ
else u=A.a.t(u,"escapes")?A.aO:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GR(A.k.D(r.cx.gcn()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b2,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRP,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.etb.prototype={
$0(){return B.qV(this.b,this.a.d,"size-compare")},
$S:0}
B.etc.prototype={
$0(){var w=this.a
return w.m(new B.eta(w,this.b))},
$S:0}
B.eta.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.etd.prototype={
$0(){var w=this.a
return w.m(new B.et9(w,this.b))},
$S:0}
B.et9.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.f_M.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.sar(new C.bV(P.pu,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a2B,null).aw(0,C.bW(d,e)))
u.af(d,e,w)},
$S:724}
B.dG2.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dFR.prototype={
$1(d){return d.b},
$S:z+60}
B.dFS.prototype={
$0(){return B.qV(this.b,this.a.d,"black-hole")},
$S:0}
B.dFT.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.Q=o
o=C.aB(A.c7,C.b3(q,q,q,new B.ba_(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFP(p),q,q,q,q,q,q,q,q,q,new B.dFQ(p),q,q,q,q,!1,A.a5)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bD,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fwT(t)+" Suns"
t=p.aeJ("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aeJ("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GR(s))+" km"),p.aeJ("TIME",A.k.ab(this.b*100,0)+"%"),p.aeJ("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eiF)
return new C.ey(new C.an(A.W,q,A.b2,A.r,r,q),p.d)},
$S:197}
B.dFQ.prototype={
$1(d){return this.a.b_7(d.b)},
$S:23}
B.dFP.prototype={
$1(d){if(A.cH.aj()<0.12)this.a.b_7(d.b)},
$S:18}
B.dFV.prototype={
$1(d){var w=this.a
return w.m(new B.dFO(w,d))},
$S:6}
B.dFO.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dFW.prototype={
$0(){var w=this.a
return w.m(new B.dFN(w))},
$S:0}
B.dFN.prototype={
$0(){return this.a.r=10},
$S:0}
B.dFX.prototype={
$0(){var w=this.a
return w.m(new B.dFM(w))},
$S:0}
B.dFM.prototype={
$0(){return this.a.r=21},
$S:0}
B.dFY.prototype={
$0(){var w=this.a
return w.m(new B.dFL(w))},
$S:0}
B.dFL.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dFZ.prototype={
$0(){var w=this.a
return w.m(new B.dFK(w))},
$S:0}
B.dFK.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dG_.prototype={
$0(){var w=this.a
return w.m(new B.dFJ(w))},
$S:0}
B.dFJ.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dG0.prototype={
$0(){var w=this.a
return w.m(new B.dFI(w))},
$S:0}
B.dFI.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dG1.prototype={
$0(){var w=this.a
return w.m(new B.dFH(w))},
$S:0}
B.dFH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dFU.prototype={
$0(){var w=this.a
return w.m(new B.dFG(w))},
$S:0}
B.dFG.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dX3.prototype={
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
e[r]=new C.v(p,i)
q=d[r]
d[r]=new C.v(q.a+p*s,q.b+i*s)}},
$S:1890}
B.dWU.prototype={
$0(){return B.qV(this.b,this.a.d,"galaxy")},
$S:0}
B.dWV.prototype={
$0(){var w=this.a
return w.m(new B.dWT(w,this.b))},
$S:0}
B.dWT.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_6()},
$S:0}
B.dWW.prototype={
$0(){var w=this.a
return w.m(new B.dWS(w))},
$S:0}
B.dWS.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_6()}w.cwC()},
$S:0}
B.dWX.prototype={
$1(d){var w=this.a
return w.m(new B.dWR(w,d))},
$S:6}
B.dWR.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_6()},
$S:0}
B.dWY.prototype={
$1(d){var w=this.a
return w.m(new B.dWQ(w,d))},
$S:6}
B.dWQ.prototype={
$0(){var w=this.a
w.r=this.b
w.a_6()},
$S:0}
B.dWZ.prototype={
$1(d){var w=this.a
return w.m(new B.dWP(w,d))},
$S:6}
B.dWP.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dX_.prototype={
$1(d){var w=this.a
return w.m(new B.dWO(w,d))},
$S:6}
B.dWO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dX0.prototype={
$0(){var w=this.a
return w.m(new B.dWN(w))},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dX1.prototype={
$0(){var w=this.a
return w.m(new B.dWM(w))},
$S:0}
B.dWM.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dX2.prototype={
$0(){var w=this.a
return w.m(new B.dWL(w))},
$S:0}
B.dWL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dbx.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1891}
B.esq.prototype={
$0(){return B.qV(this.b,this.a.d,"seasons-moon")},
$S:0}
B.esr.prototype={
$0(){var w=this.a
return w.m(new B.esp(w))},
$S:0}
B.esp.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.ess.prototype={
$0(){var w=this.a
return w.m(new B.eso(w))},
$S:0}
B.eso.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.est.prototype={
$0(){var w=this.a
return w.m(new B.esn(w))},
$S:0}
B.esn.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.esu.prototype={
$0(){var w=this.a
return w.m(new B.esm(w))},
$S:0}
B.esm.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.esv.prototype={
$1(d){var w=this.a
return w.m(new B.esl(w,d))},
$S:6}
B.esl.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.esw.prototype={
$1(d){var w=this.a
return w.m(new B.esk(w,d))},
$S:6}
B.esk.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.esx.prototype={
$1(d){var w=this.a
return w.m(new B.esj(w,d))},
$S:6}
B.esj.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.esy.prototype={
$1(d){var w=this.a
return w.m(new B.esi(w,d))},
$S:6}
B.esi.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aM2.prototype
w.bw4=w.q
w=B.aL4.prototype
w.bv4=w.q
w=B.aL5.prototype
w.bv5=w.q
w=B.aLa.prototype
w.bva=w.q
w=B.aMU.prototype
w.bx2=w.q
w=B.aM0.prototype
w.bw2=w.q
w=B.aM9.prototype
w.bwb=w.q
w=B.aMf.prototype
w.bwh=w.q
w=B.aL8.prototype
w.bv8=w.q
w=B.aLY.prototype
w.bw_=w.q
w=B.aMc.prototype
w.bwe=w.q
w=B.aLW.prototype
w.bvY=w.q
w=B.aLX.prototype
w.bvZ=w.q
w=B.aLm.prototype
w.bvn=w.q
w=B.aL0.prototype
w.bv0=w.q
w=B.aLu.prototype
w.bvv=w.q
w=B.axx.prototype
w.bsc=w.q
w=B.axy.prototype
w.bsd=w.q
w=B.aJx.prototype
w.btt=w.q
w=B.aLj.prototype
w.bvj=w.q
w=B.aLL.prototype
w.bvN=w.q
w=B.aLM.prototype
w.bvO=w.q
w=B.aL6.prototype
w.bv6=w.q
w=B.aLp.prototype
w.bvq=w.q
w=B.aLU.prototype
w.bvW=w.q
w=B.aMn.prototype
w.bwp=w.q
w=B.aLv.prototype
w.bvx=w.q
w=B.aLw.prototype
w.bvy=w.q
w=B.aLx.prototype
w.bvz=w.q
w=B.aM5.prototype
w.bw7=w.q
w=B.aM8.prototype
w.bwa=w.q
w=B.aL3.prototype
w.bv3=w.q
w=B.aLs.prototype
w.bvt=w.q
w=B.aM4.prototype
w.bw6=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aEb.prototype,"gawl","c4u",0)
var r
v(r=B.aCB.prototype,"gccS","ccT",35)
w(r,"gc52","aYq",0)
w(B.aCE.prototype,"gc6K","c6L",0)
u(B.aCV.prototype,"gc6Q","c6R",52)
w(r=B.aHb.prototype,"gcwi","cwj",0)
w(r,"gcjC","ag8",0)
w(r,"gchh","chi",0)
w(r,"gc6P","adK",3)
w(r=B.aEa.prototype,"gbGT","a9e",3)
w(r,"gcgz","b0N",0)
w(r,"gckk","agg",3)
t(r,"gc6T","adL",3)
w(B.aEq.prototype,"gbYk","bYl",0)
w(r=B.aE2.prototype,"gcwc","cwd",0)
w(r,"gbHd","bHe",0)
w(r=B.aCD.prototype,"gb51","aA_",0)
v(r,"gc6Z","Zu",54)
w(r,"gc6Y","adN",3)
v(r=B.aE1.prototype,"gcmj","ayI",58)
v(r,"gcsL","azV",15)
w(r,"gbLd","aQZ",0)
v(r=B.aE_.prototype,"gcDz","ajl",15)
t(r,"gc7i","awW",0)
w(r,"gcoG","coH",0)
v(r=B.aD6.prototype,"gc7j","c7k",90)
w(r,"gc7l","c7m",0)
t(r=B.a4p.prototype,"grI","a8",0)
v(r,"gcTp","an7",1)
v(r,"gcPV","LI",1)
w(r,"gcVC","bi6",0)
s(B.aiF.prototype,"gc7q",0,5,null,["$5"],["qn"],64,0,0)
w(r=B.aD7.prototype,"gc7r","c7s",0)
w(r,"gcn9","agD",3)
w(r,"gcd7","aeW",3)
w(r,"gcum","ahJ",3)
w(r=B.aDM.prototype,"gc7I","ax0",0)
w(r,"gc7J","aZo",0)
w(r=B.aED.prototype,"gc8G","c8H",0)
t(r,"gc8E","aZK",0)
w(B.aDW.prototype,"gbJL","asb",0)
t(B.aEh.prototype,"gc8I","c8J",0)
v(r=B.aDi.prototype,"gc9n","c9o",78)
w(r,"gbOR","bOS",0)
w(r=B.aDj.prototype,"gcwL","cwM",0)
w(r,"gc9s","c9t",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajS,B.G5,B.uU,B.aS0,B.a33,B.ba2,B.c1K,B.y9,B.Cn,B.no,B.baL,B.AA,B.bsD,B.q7,B.qN,B.Cr,B.Zf,B.aeK,B.a0u,B.CB,B.abD,B.abU,B.adQ,B.FR,B.blt,B.PU,B.a_M,B.abK,B.acc,B.FN,B.ad1,B.adx,B.tl,B.b9D,B.aRQ,B.ed,B.ty,B.aai,B.abp,B.a4p,B.mC,B.baM,B.fP,B.m9,B.aWu,B.btY,B.aI1,B.mF,B.ab4,B.ab5,B.v7,B.P8,B.y7,B.P7,B.btT,B.PC,B.aeP])
u(C.i0,[B.fzd,B.fp3,B.fvZ,B.fw_,B.fza,B.fzb,B.e9x,B.e9Q,B.epW,B.ept,B.epu,B.epv,B.epw,B.epx,B.epy,B.epz,B.epA,B.epr,B.eps,B.epq,B.epR,B.epS,B.epT,B.dG7,B.dG9,B.dGc,B.dGn,B.c1L,B.c1M,B.fiG,B.fiH,B.fiI,B.fiP,B.fiQ,B.fiR,B.dIF,B.dIm,B.dIG,B.dIh,B.dIc,B.dIe,B.dIk,B.dIx,B.dIv,B.dIw,B.dIu,B.dIr,B.dIt,B.f_g,B.eZY,B.f_4,B.f_d,B.eZS,B.din,B.dio,B.dik,B.dil,B.dim,B.dip,B.diq,B.dir,B.dis,B.dit,B.diu,B.div,B.diw,B.dix,B.eoS,B.eoT,B.eoU,B.eoV,B.eoQ,B.eoR,B.epm,B.eoZ,B.ep0,B.eoL,B.epi,B.epg,B.eph,B.epf,B.epe,B.eoN,B.eB1,B.eB_,B.eAO,B.eAS,B.eAN,B.eAT,B.eAU,B.eAY,B.eHD,B.eHJ,B.els,B.elt,B.ele,B.elf,B.eld,B.eli,B.elk,B.ell,B.eH2,B.eH3,B.eH1,B.eGQ,B.eGR,B.eGP,B.eGI,B.eGJ,B.eGX,B.eGY,B.eGZ,B.eH_,B.eH0,B.dHO,B.dHP,B.dHQ,B.dHH,B.dHK,B.cMS,B.egW,B.ehk,B.eh_,B.eh7,B.eh8,B.eh6,B.ehf,B.ekW,B.el0,B.ekk,B.ek2,B.eke,B.ekc,B.eka,B.ekb,B.ek9,B.dQz,B.dQn,B.dQp,B.dQx,B.dQs,B.dTo,B.dTg,B.dTh,B.dTi,B.d5A,B.d5C,B.d5B,B.dEb,B.dEc,B.dE4,B.dE2,B.cFp,B.dXr,B.dXs,B.dXn,B.dXo,B.ddA,B.ddB,B.dIa,B.dHT,B.dI1,B.dI2,B.dI7,B.dI8,B.bMB,B.bMM,B.bMH,B.bMN,B.bMP,B.bMC,B.bMA,B.bMU,B.bMI,B.bML,B.bMK,B.bMJ,B.bHo,B.fKS,B.fKV,B.fKT,B.bH5,B.bH0,B.bH_,B.bHn,B.bHf,B.bHg,B.bHe,B.bHh,B.bGQ,B.bGS,B.bGO,B.bGP,B.bGG,B.bGH,B.fiS,B.fiT,B.fiU,B.fiF,B.fiV,B.fiE,B.fiW,B.fiJ,B.fiD,B.fiK,B.fiC,B.fiL,B.fiB,B.fiM,B.fiz,B.fiA,B.fiN,B.fix,B.fiy,B.fiO,B.fiw,B.dTF,B.dTG,B.dTv,B.dTr,B.dTE,B.dTJ,B.cCW,B.fPy,B.fPz,B.ecv,B.ecn,B.diG,B.diJ,B.ecO,B.ecz,B.ecJ,B.ecK,B.ecL,B.cgH,B.eM2,B.dT1,B.dT2,B.dT3,B.dT5,B.eie,B.eHl,B.eHu,B.eHq,B.eHs,B.egN,B.egO,B.egP,B.fTn,B.ctD,B.dYs,B.dXS,B.dXR,B.dY2,B.dY3,B.dY1,B.dY4,B.dYm,B.dYn,B.dYo,B.eIb,B.eAp,B.eAq,B.eAr,B.eAw,B.eAx,B.eAg,B.f1D,B.f1E,B.dYZ,B.dYS,B.dYU,B.dYV,B.dYW,B.dYX,B.dYu,B.f_M,B.dG2,B.dFR,B.dFQ,B.dFP,B.dFV,B.dX3,B.dWX,B.dWY,B.dWZ,B.dX_,B.dbx,B.esv,B.esw,B.esx,B.esy])
u(C.kn,[B.fzc,B.e9C,B.e9A,B.epC,B.epP,B.dId,B.dIA,B.dOx,B.f_j,B.f_k,B.eZX,B.f_9,B.f_a,B.f_5,B.f_b,B.eZR,B.eoO,B.eoP,B.epl,B.epd,B.ep2,B.eHC,B.elh,B.eGT,B.dHG,B.dHL,B.ehb,B.el_,B.fzv,B.ek6,B.ek3,B.ekg,B.dqt,B.bGa,B.ftv,B.dDZ,B.dE6,B.bMO,B.bMQ,B.bMS,B.bMD,B.bMF,B.bHp,B.cm5,B.fKU,B.bGZ,B.bHl,B.bHk,B.dTD,B.cCX,B.dPr,B.dPp,B.dPj,B.ecp,B.diH,B.diI,B.ecI,B.cgK,B.dGB,B.dGw,B.eig,B.dYe,B.dXP,B.deq,B.eIg,B.eAt,B.eAf,B.dYv,B.dYx,B.dYt,B.dFT])
u(C.ag,[B.Vq,B.VT,B.Ug,B.Um,B.Nl,B.aHa,B.VS,B.W6,B.Wi,B.VP,B.Wd,B.Uk,B.VJ,B.VO,B.VM,B.UJ,B.UZ,B.Ub,B.Vc,B.Ul,B.aiD,B.V_,B.axe,B.UH,B.Vv,B.Vx,B.Wo,B.V6,B.Uh,B.UY,B.VK,B.VX,B.Wh,B.VI,B.Vd,B.Wk,B.W5,B.Ve,B.VY,B.Uf,B.Va,B.VU])
u(C.ah,[B.bjX,B.aM2,B.aL4,B.aLa,B.aCV,B.aMU,B.aM0,B.aM9,B.aMf,B.aLY,B.aMc,B.aL8,B.aLW,B.aLX,B.aE_,B.bjr,B.aLm,B.aL0,B.aLu,B.bji,B.axx,B.bx4,B.aJx,B.aLj,B.aLL,B.aLM,B.aMn,B.aLp,B.aL6,B.bjs,B.aDW,B.aEh,B.bkG,B.aLU,B.aLv,B.bkK,B.aM8,B.aLx,B.aM5,B.aL3,B.aLs,B.aM4])
u(C.ja,[B.e9v,B.e9w,B.e9I,B.e9J,B.e9E,B.e9D,B.e9F,B.e9B,B.e9G,B.e9z,B.e9H,B.e9y,B.e9M,B.e9L,B.e9N,B.e9K,B.e9O,B.e9P,B.e9R,B.epV,B.epX,B.epY,B.epE,B.epD,B.epB,B.epK,B.epL,B.epH,B.epM,B.epG,B.epN,B.epO,B.epF,B.epQ,B.epJ,B.epU,B.epI,B.dGu,B.dGt,B.dG6,B.dGv,B.dG8,B.dGa,B.dGb,B.dGd,B.dG3,B.dG4,B.dG5,B.dGk,B.dGl,B.dGm,B.dGj,B.dGo,B.dGi,B.dGp,B.dGh,B.dGq,B.dGg,B.dGr,B.dGf,B.dGs,B.dGe,B.dIj,B.dIi,B.dIn,B.dIf,B.dIg,B.dIo,B.dIp,B.dIq,B.dIl,B.dIb,B.dIz,B.dIy,B.dIB,B.dIC,B.dID,B.dIs,B.dIE,B.cNk,B.dOv,B.dOu,B.dOw,B.fj6,B.fj7,B.fj8,B.fjj,B.fjl,B.fjm,B.fjn,B.fjo,B.fjp,B.fjq,B.fjr,B.fj9,B.fja,B.fjb,B.fjc,B.fjd,B.fje,B.fjf,B.fjg,B.fjh,B.fji,B.fjk,B.f_i,B.f_h,B.f__,B.eZZ,B.eZV,B.eZU,B.eZW,B.eZT,B.f_7,B.f_6,B.f_8,B.f_0,B.f_c,B.f_3,B.f_e,B.f_2,B.f_f,B.f_1,B.eoX,B.eoM,B.eoW,B.eoI,B.eoY,B.ep_,B.eoJ,B.eoK,B.epk,B.epj,B.epa,B.epb,B.epc,B.ep6,B.ep7,B.ep5,B.ep8,B.ep4,B.ep9,B.ep3,B.ep1,B.dij,B.eB0,B.eAD,B.eAC,B.eAM,B.eAV,B.eAL,B.eAW,B.eAK,B.eAX,B.eAJ,B.eAI,B.eAZ,B.eAH,B.eAP,B.eAG,B.eAQ,B.eAF,B.eAR,B.eAE,B.eHB,B.eHA,B.eHE,B.eHz,B.eHF,B.eHy,B.eHG,B.eHx,B.eHH,B.eHw,B.eHI,B.eHv,B.elg,B.elc,B.elb,B.ela,B.elm,B.el9,B.eln,B.el8,B.elo,B.el7,B.elp,B.elq,B.elr,B.el6,B.elj,B.eGS,B.eGH,B.eGU,B.eGO,B.eGV,B.eGN,B.eGW,B.eGM,B.eGL,B.eGK,B.eGG,B.eGF,B.eGE,B.dHN,B.dHE,B.dHF,B.dHI,B.dHJ,B.dHM,B.eh9,B.eh0,B.eha,B.ehc,B.eh5,B.ehd,B.eh4,B.ehe,B.eh3,B.eh2,B.ehg,B.eh1,B.ehh,B.egZ,B.ehi,B.egY,B.ehj,B.egX,B.ekQ,B.ekR,B.ekY,B.ekX,B.ekZ,B.ekV,B.el1,B.ekU,B.el2,B.ekT,B.el3,B.el4,B.ekS,B.el5,B.ekj,B.ek0,B.ek1,B.ek5,B.ek4,B.ekf,B.ekd,B.ek7,B.ekh,B.ek8,B.eki,B.dQy,B.dQo,B.dQm,B.dQt,B.dQr,B.dQu,B.dQq,B.dQv,B.dQw,B.dTn,B.dTb,B.dTa,B.dTc,B.dTf,B.dTe,B.dTd,B.dTj,B.dTk,B.dTl,B.dTm,B.dEa,B.dE9,B.dE_,B.dE5,B.dE3,B.dE7,B.dE1,B.dE8,B.dE0,B.dXq,B.dXp,B.dXh,B.dXl,B.dXk,B.dXm,B.dXj,B.dXi,B.dI9,B.dI0,B.dI_,B.dI3,B.dHZ,B.dI4,B.dHY,B.dI5,B.dHX,B.dI6,B.dHW,B.dHV,B.dHU,B.bMR,B.bMT,B.bME,B.bMG,B.bH2,B.bH3,B.bH1,B.bH4,B.bH6,B.bGT,B.bGU,B.bGV,B.bGW,B.bGX,B.bGY,B.bHm,B.bGw,B.bHc,B.bHd,B.bHa,B.bHb,B.bH8,B.bH9,B.bHi,B.bH7,B.bHj,B.bGx,B.bGR,B.bGD,B.bGE,B.bGC,B.bGF,B.bGB,B.bGI,B.bGJ,B.bGK,B.bGL,B.bGA,B.bGM,B.bGz,B.bGN,B.bGy,B.dTw,B.dTH,B.dTI,B.dTu,B.dTt,B.dTs,B.dTB,B.dTz,B.dTA,B.dTC,B.dTx,B.dTy,B.dTK,B.dTL,B.dTM,B.dTN,B.dTO,B.dPs,B.dPq,B.dPo,B.dPn,B.dPm,B.dPl,B.dPk,B.dPg,B.dPf,B.dPi,B.dPh,B.ecu,B.ecw,B.ecl,B.ecm,B.eco,B.ecq,B.ecr,B.ecs,B.ect,B.ecN,B.ecP,B.ecF,B.ecB,B.ecG,B.ecH,B.ecA,B.ecE,B.ecD,B.ecC,B.ecM,B.fjz,B.fjA,B.fjB,B.fjC,B.fjD,B.fjE,B.fjF,B.fjG,B.cgJ,B.cgI,B.eM3,B.eM_,B.eLZ,B.eM1,B.eM0,B.dVK,B.dVL,B.dVF,B.dVH,B.dVI,B.dVG,B.dVJ,B.dGC,B.dGz,B.dGy,B.dGA,B.dGx,B.dT0,B.dT_,B.dSZ,B.dSY,B.dT4,B.dSX,B.dSW,B.dT6,B.dSV,B.dT7,B.dSU,B.dT8,B.dT9,B.dST,B.eia,B.eib,B.ei9,B.eic,B.ei8,B.eif,B.eih,B.eid,B.eii,B.et3,B.et4,B.et1,B.et2,B.et0,B.et5,B.et6,B.et7,B.et8,B.eHp,B.eHr,B.eHo,B.eHn,B.eHt,B.eHm,B.egQ,B.egR,B.egJ,B.egI,B.egK,B.egH,B.egL,B.egG,B.egM,B.egF,B.egE,B.egD,B.egC,B.ctE,B.ctF,B.fTm,B.ctA,B.ctz,B.ctG,B.ctB,B.ctC,B.cgF,B.dYr,B.dXV,B.dXT,B.dXU,B.dXQ,B.dYd,B.dXW,B.dXX,B.dYf,B.dY0,B.dYj,B.dYc,B.dYk,B.dYb,B.dYl,B.dYa,B.dY9,B.dY8,B.dY7,B.dYp,B.dY6,B.dYq,B.dY5,B.dYg,B.dY_,B.dYh,B.dXZ,B.dYi,B.dXY,B.dXO,B.dXN,B.dep,B.fjs,B.fjt,B.fju,B.fjv,B.fjw,B.fjx,B.fjy,B.eIe,B.eIf,B.eId,B.eIc,B.eAh,B.eAs,B.eAu,B.eAo,B.eAv,B.eAn,B.eAm,B.eAy,B.eAl,B.eAz,B.eAk,B.eAA,B.eAj,B.eAB,B.eAi,B.eAe,B.eAd,B.f1C,B.dYw,B.dYL,B.dYC,B.dYM,B.dYB,B.dYN,B.dYK,B.dYR,B.dYJ,B.dYI,B.dYT,B.dYH,B.dYG,B.dYF,B.dYE,B.dYY,B.dYD,B.dYO,B.dYA,B.dYP,B.dYz,B.dYQ,B.dYy,B.etb,B.etc,B.eta,B.etd,B.et9,B.dFS,B.dFO,B.dFW,B.dFN,B.dFX,B.dFM,B.dFY,B.dFL,B.dFZ,B.dFK,B.dG_,B.dFJ,B.dG0,B.dFI,B.dG1,B.dFH,B.dFU,B.dFG,B.dWU,B.dWV,B.dWT,B.dWW,B.dWS,B.dWR,B.dWQ,B.dWP,B.dWO,B.dX0,B.dWN,B.dX1,B.dWM,B.dX2,B.dWL,B.esq,B.esr,B.esp,B.ess,B.eso,B.est,B.esn,B.esu,B.esm,B.esl,B.esk,B.esj,B.esi])
t(B.bxj,B.aM2)
t(B.aEb,B.bxj)
u(C.mP,[B.bgW,B.bb3,B.bs1,B.b9K,B.bqG,B.bq7,B.bap,B.bq9,B.bu7,B.bgU,B.brX,B.blg,B.bsP,B.baK,B.bhO,B.blh,B.biv,B.bdP,B.b9P,B.bfi,B.aiF,B.b8X,B.bv8,B.aeD,B.bgZ,B.bhd,B.bvk,B.bq8,B.blu,B.bfp,B.brV,B.baB,B.brt,B.ba_,B.bff,B.bqJ])
t(B.aL5,B.aL4)
t(B.aCB,B.aL5)
t(B.bx2,B.aLa)
t(B.aCE,B.bx2)
u(C.md,[B.Ko,B.a0h,B.Jl])
u(C.au,[B.br3,B.aeU,B.adM,B.Q2,B.brx,B.a8h,B.bda,B.b6K,B.dB,B.eV,B.avF,B.fj,B.Fh])
t(B.aHb,B.aMU)
t(B.bgT,C.oT)
t(B.aEa,B.aM0)
t(B.bkx,B.aM9)
t(B.aEq,B.aMf)
t(B.bxi,B.aLY)
t(B.aE2,B.bxi)
t(B.bxq,B.aMc)
t(B.bkC,B.bxq)
t(B.bx1,B.aL8)
t(B.aCD,B.bx1)
t(B.bxg,B.aLW)
t(B.bkb,B.bxg)
t(B.bxh,B.aLX)
t(B.aE1,B.bxh)
t(B.aD6,B.aLm)
t(B.bj5,B.aL0)
t(B.bjD,B.aLu)
t(B.axy,B.axx)
t(B.aiE,B.axy)
t(B.aD7,B.bx4)
t(B.b8Y,B.aJx)
t(B.bjp,B.aLj)
t(B.bx9,B.aLL)
t(B.bjZ,B.bx9)
t(B.bxa,B.aLM)
t(B.aDM,B.bxa)
t(B.bxr,B.aMn)
t(B.aED,B.bxr)
t(B.bx5,B.aLp)
t(B.bjy,B.bx5)
t(B.bx0,B.aL6)
t(B.bja,B.bx0)
t(B.bxf,B.aLU)
t(B.bk9,B.bxf)
t(B.aLw,B.aLv)
t(B.aDi,B.aLw)
t(B.bxn,B.aM8)
t(B.bkw,B.bxn)
t(B.bx7,B.aLx)
t(B.aDj,B.bx7)
t(B.bxl,B.aM5)
t(B.bkt,B.bxl)
t(B.bx_,B.aL3)
t(B.bj9,B.bx_)
t(B.bx6,B.aLs)
t(B.bjB,B.bx6)
t(B.bxk,B.aM4)
t(B.bks,B.bxk)
w(B.aM2,C.c9)
w(B.bxj,B.mF)
w(B.aL4,C.c9)
w(B.aL5,B.mF)
w(B.aLa,C.c9)
w(B.bx2,B.mF)
w(B.aMU,C.eW)
w(B.aM0,C.c9)
w(B.aM9,C.c9)
w(B.aMf,C.c9)
w(B.aL8,C.c9)
w(B.bx1,B.mF)
w(B.aLY,C.c9)
w(B.bxi,B.mF)
w(B.aMc,C.c9)
w(B.bxq,B.mF)
w(B.aLW,C.c9)
w(B.bxg,B.mF)
w(B.aLX,C.c9)
w(B.bxh,B.mF)
w(B.aLm,C.c9)
w(B.aL0,C.c9)
w(B.aLu,C.c9)
w(B.axx,C.c9)
w(B.axy,B.mF)
w(B.aJx,C.c9)
v(B.bx4,C.eB)
w(B.aLj,C.c9)
w(B.aLL,C.c9)
w(B.bx9,B.mF)
w(B.aLM,C.c9)
w(B.bxa,B.mF)
w(B.aL6,C.c9)
w(B.bx0,B.mF)
w(B.aLp,C.c9)
w(B.bx5,B.mF)
w(B.aLU,C.c9)
w(B.bxf,B.mF)
w(B.aMn,C.c9)
w(B.bxr,B.mF)
w(B.aLv,C.c9)
w(B.aLw,B.mF)
w(B.aLx,C.c9)
w(B.bx7,B.mF)
w(B.aM5,C.c9)
w(B.bxl,B.mF)
w(B.aM8,C.c9)
w(B.bxn,B.mF)
w(B.aL3,C.c9)
w(B.bx_,B.mF)
w(B.aLs,C.c9)
w(B.bx6,B.mF)
w(B.aM4,C.c9)
w(B.bxk,B.mF)})()
C.k2(b.typeUniverse,JSON.parse('{"Vq":{"ag":[],"t":[]},"bjX":{"ah":["Vq"]},"VT":{"ag":[],"t":[]},"aEb":{"ah":["VT"]},"bgW":{"aC":[]},"Ug":{"ag":[],"t":[]},"aCB":{"ah":["Ug"]},"Um":{"ag":[],"t":[]},"aCE":{"ah":["Um"]},"bb3":{"aC":[]},"aeU":{"au":[],"t":[]},"adM":{"au":[],"t":[]},"aHa":{"ag":[],"t":[]},"Nl":{"ag":[],"t":[]},"aCV":{"ah":["Nl"]},"br3":{"au":[],"t":[]},"Q2":{"au":[],"t":[]},"bs1":{"aC":[]},"brx":{"au":[],"t":[]},"b9K":{"aC":[]},"aHb":{"ah":["aHa"]},"bqG":{"aC":[]},"bq7":{"aC":[]},"bap":{"aC":[]},"bq9":{"aC":[]},"bu7":{"aC":[]},"VS":{"ag":[],"t":[]},"bgT":{"aC":[]},"aEa":{"ah":["VS"]},"bgU":{"aC":[]},"W6":{"ag":[],"t":[]},"Wi":{"ag":[],"t":[]},"bkx":{"ah":["W6"]},"brX":{"aC":[]},"aEq":{"ah":["Wi"]},"VP":{"ag":[],"t":[]},"Wd":{"ag":[],"t":[]},"Uk":{"ag":[],"t":[]},"aE2":{"ah":["VP"]},"blg":{"aC":[]},"bkC":{"ah":["Wd"]},"bsP":{"aC":[]},"aCD":{"ah":["Uk"]},"baK":{"aC":[]},"VJ":{"ag":[],"t":[]},"VO":{"ag":[],"t":[]},"bkb":{"ah":["VJ"]},"bhO":{"aC":[]},"aE1":{"ah":["VO"]},"blh":{"aC":[]},"VM":{"ag":[],"t":[]},"UJ":{"ag":[],"t":[]},"UZ":{"ag":[],"t":[]},"aE_":{"ah":["VM"]},"biv":{"aC":[]},"bjr":{"ah":["UJ"]},"aD6":{"ah":["UZ"]},"bdP":{"aC":[]},"Ub":{"ag":[],"t":[]},"Vc":{"ag":[],"t":[]},"Ul":{"ag":[],"t":[]},"bj5":{"ah":["Ub"]},"b9P":{"aC":[]},"bjD":{"ah":["Vc"]},"bfi":{"aC":[]},"bji":{"ah":["Ul"]},"aiF":{"aC":[]},"aiD":{"ag":[],"t":[]},"aiE":{"ah":["aiD"]},"V_":{"ag":[],"t":[]},"axe":{"ag":[],"t":[]},"aD7":{"ah":["V_"],"eB":[]},"b8Y":{"ah":["axe"]},"b8X":{"aC":[]},"UH":{"ag":[],"t":[]},"bjp":{"ah":["UH"]},"bv8":{"aC":[]},"aeD":{"aC":[]},"Vv":{"ag":[],"t":[]},"Vx":{"ag":[],"t":[]},"bjZ":{"ah":["Vv"]},"bgZ":{"aC":[]},"aDM":{"ah":["Vx"]},"bhd":{"aC":[]},"a8h":{"au":[],"t":[]},"Wo":{"ag":[],"t":[]},"V6":{"ag":[],"t":[]},"Uh":{"ag":[],"t":[]},"UY":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"VX":{"ag":[],"t":[]},"Wh":{"ag":[],"t":[]},"VI":{"ag":[],"t":[]},"aED":{"ah":["Wo"]},"bvk":{"aC":[]},"bjy":{"ah":["V6"]},"bq8":{"aC":[]},"bja":{"ah":["Uh"]},"bjs":{"ah":["UY"]},"blu":{"aC":[]},"aDW":{"ah":["VK"]},"aEh":{"ah":["VX"]},"bkG":{"ah":["Wh"]},"bk9":{"ah":["VI"]},"bda":{"au":[],"t":[]},"b6K":{"au":[],"t":[]},"dB":{"au":[],"t":[]},"eV":{"au":[],"t":[]},"avF":{"au":[],"t":[]},"fj":{"au":[],"t":[]},"Fh":{"au":[],"t":[]},"Vd":{"ag":[],"t":[]},"aDi":{"ah":["Vd"]},"bfp":{"aC":[]},"Wk":{"ag":[],"t":[]},"bkK":{"ah":["Wk"]},"W5":{"ag":[],"t":[]},"Ve":{"ag":[],"t":[]},"VY":{"ag":[],"t":[]},"bkw":{"ah":["W5"]},"brV":{"aC":[]},"aDj":{"ah":["Ve"]},"baB":{"aC":[]},"bkt":{"ah":["VY"]},"brt":{"aC":[]},"Uf":{"ag":[],"t":[]},"Va":{"ag":[],"t":[]},"VU":{"ag":[],"t":[]},"bj9":{"ah":["Uf"]},"ba_":{"aC":[]},"bjB":{"ah":["Va"]},"bff":{"aC":[]},"bks":{"ah":["VU"]},"bqJ":{"aC":[]}}'))
C.Kp(b.typeUniverse,JSON.parse('{"mF":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lZ<w?>"),e8:w("d5"),G:w("w"),l:w("bk<m,m>"),J:w("bk<m,K>"),I:w("bk<m,G>"),R:w("dD<m>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a3_>"),gh:w("O<aRQ>"),h:w("O<a33>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<T>"),dh:w("O<HG>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<HG>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<m>>"),b:w("O<ai<K>>"),fA:w("O<ai<G?>>"),D:w("O<a6<m,aD>>"),g:w("O<v>"),bz:w("O<ty>"),ds:w("O<a8E>"),v:w("O<hv>"),U:w("O<+(v,K)>"),ev:w("O<+(v,G)>"),K:w("O<+(m,m)>"),fT:w("O<+(K,t)>"),E:w("O<+(G,m)>"),u:w("O<+(G,G)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,K,K,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,K,K,a6<m,K>)>"),_:w("O<uU>"),q:w("O<cR>"),fQ:w("O<aai>"),s:w("O<m>"),cF:w("O<ar>"),X:w("O<wj>"),F:w("O<ab4>"),p:w("O<t>"),bL:w("O<abp>"),fH:w("O<ln>"),aq:w("O<b9D>"),a_:w("O<abD>"),cS:w("O<abK>"),cB:w("O<no>"),ba:w("O<abU>"),d9:w("O<PC>"),bi:w("O<acc>"),eW:w("O<Cr>"),fY:w("O<Zf>"),aX:w("O<FN>"),ea:w("O<ad1>"),gB:w("O<adx>"),ed:w("O<PU>"),g4:w("O<blt>"),aS:w("O<a_M>"),ac:w("O<adQ>"),cd:w("O<CB>"),fr:w("O<aeK>"),e4:w("O<a0u>"),r:w("O<aeP>"),au:w("O<aI1>"),f7:w("O<Q>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<ty?>"),d4:w("O<m?>"),bN:w("O<G?>"),gJ:w("cs<aiE>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a6<m,@>"),f:w("a6<@,@>"),bd:w("M<ed,m>"),dv:w("M<m,m>"),fR:w("M<+(K,t),t>"),m:w("iE"),gA:w("zh"),gD:w("vU"),P:w("cr"),C:w("aD"),W:w("ty"),dV:w("ed"),g7:w("C8"),N:w("m"),bO:w("ar"),k:w("jM"),Y:w("bq<K>"),cL:w("ab5"),gj:w("cx<m>"),aC:w("cx<G?>"),dg:w("eb<qN>"),e3:w("ba2"),a2:w("Cn"),f3:w("qN"),es:w("FR"),gV:w("n2"),y:w("Q"),i:w("K"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a6<@,@>?"),cK:w("aD?"),az:w("q0?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXX=new C.dc(0,0.85)
D.fEW=new C.y("Tap once to start the chain",null,K.U6,null,null,null,null,null,null,null,null,null)
D.aXv=new C.bI(D.aXX,null,null,D.fEW,null)
D.aXN=new C.dc(0,0.1)
D.aZ6=new B.aS0(0,0,0)
D.Kv=new B.aS0(0,0.5,0)
D.aZF=new C.az(A.aZ,1,A.q,-1)
D.b07=new C.aY(0,1/0,0,290)
D.b0e=new C.aY(16,1/0,16,1/0)
D.b1s=new C.o(A.bc,null,null,null,null,null,A.a6)
D.f5G=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHj=new C.y("\u26a1",null,D.f5G,null,null,null,null,null,null,null,null,null)
D.b5U=new C.cp(A.A,null,null,D.fHj,null)
D.aR7=new C.H(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx6=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aR7,null,A.L,null,null,null,null,null,null,null)
D.ecj=new C.D(A.o6,D.fx6,null)
D.b62=new C.cp(A.A,null,null,D.ecj,null)
D.fAV=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kK,null,A.L,null,null,null,null,null,null,null)
D.ecn=new C.D(A.o6,D.fAV,null)
D.b6n=new C.cp(A.A,null,null,D.ecn,null)
D.fgC=new C.H(!0,A.jm,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new C.y("Draw anywhere",null,D.fgC,null,null,null,null,null,null,null,null,null)
D.b6r=new C.cp(A.A,null,null,D.fFJ,null)
D.fnh=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aR7,null,A.L,null,null,null,null,null,null,null)
D.ed5=new C.D(A.FK,D.fnh,null)
D.b6K=new C.cp(A.A,null,null,D.ed5,null)
D.acG=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b9n=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.ba8=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wn=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.bad=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.bai=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.ban=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Wq=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bbt=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bby=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbU=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bd3=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ae4=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdx=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AM=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.ben=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aex=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bf0=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bf7=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aeI=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.X3=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfC=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aeR=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.af3=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Xe=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bhn=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bhq=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bhu=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhD=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afw=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bi0=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.F3=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bj8=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bjg=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bjk=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bjv=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjz=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjG=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vs=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.agh=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bkO=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bly=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bm1=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bmr=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.agI=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.br3=new C.ba(11e6)
D.bs4=new C.R(0,0,8,6)
D.ahE=new C.R(0,0,9,0)
D.bsC=new C.R(10,0,10,4)
D.bsH=new C.R(10,10,10,6)
D.bsP=new C.R(10,34,10,26)
D.bsX=new C.R(10,6,10,2)
D.YS=new C.R(10,6,10,4)
D.bsZ=new C.R(10,8,0,10)
D.btA=new C.R(12,8,8,8)
D.btF=new C.R(14,0,14,22)
D.btH=new C.R(14,0,14,30)
D.ai4=new C.R(14,0,14,6)
D.aib=new C.R(14,10,8,12)
D.bud=new C.R(14,8,14,6)
D.buF=new C.R(16,4,16,28)
D.buP=new C.R(16,8,16,12)
D.bwU=new C.R(26,12,26,58)
D.bxI=new C.R(4,4,6,2)
D.bxK=new C.R(4,4,8,2)
D.byj=new C.R(8,14,8,12)
D.byq=new C.R(8,40,8,30)
D.byu=new C.R(8,6,16,0)
D.byv=new C.R(8,6,8,8)
D.byQ=new C.R(0,0,1.5,0)
D.aYT=new C.H4(26,"saturation")
D.bz7=new C.yZ(A.cX,D.aYT,null,A.acE)
D.fmn=new C.y("REACTION LAB",null,Y.aRI,null,null,null,null,A.a2,null,1,null,null)
D.bzd=new C.bB(1,A.bg,D.fmn,null)
D.fdt=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new C.y("CORE PROTOCOL",null,D.fdt,null,null,null,null,null,null,null,null,null)
D.bzr=new C.bB(1,A.bg,D.fpz,null)
D.fqh=new C.y("\ud83d\udce2 NGMY Ads",null,A.qz,null,null,null,null,A.eH,null,1,null,null)
D.bA9=new C.bB(1,A.bg,D.fqh,null)
D.fl6=new C.y("Wire selected",null,A.hw,null,null,null,null,null,null,null,null,null)
D.bAo=new C.bB(1,A.bg,D.fl6,null)
D.alm=new C.a0(62712,"MaterialIcons",!1)
D.bFP=new C.a0(62878,"MaterialIcons",!1)
D.a0c=new C.a0(62908,"MaterialIcons",!1)
D.bFS=new C.a0(62918,"MaterialIcons",!1)
D.bFT=new C.a0(62931,"MaterialIcons",!1)
D.bFW=new C.a0(62951,"MaterialIcons",!1)
D.bGc=new C.a0(63064,"MaterialIcons",!1)
D.bGe=new C.a0(63070,"MaterialIcons",!1)
D.yj=new C.a0(63128,"MaterialIcons",!1)
D.Gu=new C.a0(63726,"MaterialIcons",!1)
D.bHx=new C.a0(983122,"MaterialIcons",!1)
D.bHM=new C.a0(983247,"MaterialIcons",!1)
D.bHY=new C.a0(983415,"MaterialIcons",!1)
D.bHZ=new C.a0(983417,"MaterialIcons",!1)
D.bI_=new C.a0(983442,"MaterialIcons",!1)
D.bI0=new C.a0(983443,"MaterialIcons",!1)
D.amG=new C.a0(983467,"MaterialIcons",!1)
D.bI6=new C.a0(983501,"MaterialIcons",!1)
D.bIh=new C.a0(983616,"MaterialIcons",!1)
D.bIi=new C.a0(983624,"MaterialIcons",!1)
D.bIv=new C.a0(983776,"MaterialIcons",!1)
D.bIM=new C.a0(984561,"MaterialIcons",!1)
D.bJm=new C.ae(A.rk,24,A.aM,null,null,null)
D.bK6=new C.ae(A.O4,null,A.ad,null,null,null)
D.bKE=new C.ae(A.mB,21,A.ad,null,null,null)
D.bHw=new C.a0(983117,"MaterialIcons",!1)
D.bM0=new C.ae(D.bHw,28,A.c,null,null,null)
D.bMg=new C.ae(A.js,18,null,null,null,null)
D.bO2=new C.ae(A.e9,21,A.c8,null,null,null)
D.bOh=new C.ae(A.mC,null,A.ad,null,null,null)
D.bOr=new C.ae(A.a11,21,A.ad,null,null,null)
D.bPg=new C.ae(A.eF,17,A.ad,null,null,null)
D.ao1=new C.ae(A.eF,19,null,null,null,null)
D.mG=new C.ae(A.vV,21,A.ad,null,null,null)
D.bQN=new C.ae(A.Nx,null,A.ad,null,null,null)
D.bRX=new C.ae(A.js,21,A.ad,null,null,null)
D.bSO=new C.ae(A.fg,20,A.aA,null,null,null)
D.bTt=new C.ae(A.dY,null,A.aM,null,null,null)
D.bTO=new C.ae(A.k8,null,A.aA,null,null,null)
D.dg0=w([A.d5,A.d_,A.d5],x.O)
D.bWO=new C.a9(A.a3,A.a8,A.x,D.dg0,null,null)
D.cUl=w([A.bN,A.bn],x.O)
D.bWW=new C.a9(A.b1,A.b5,A.x,D.cUl,null,null)
D.bX7=new C.a9(A.b1,A.b5,A.x,A.ayf,null,null)
D.cUI=w([A.fW,A.f9],x.O)
D.bXg=new C.a9(A.b1,A.b5,A.x,D.cUI,null,null)
D.ap2=new C.a9(A.b1,A.b5,A.x,M.a2L,null,null)
D.cS7=w([A.oG,A.ig],x.O)
D.bXU=new C.a9(A.b1,A.b5,A.x,D.cS7,null,null)
D.cU3=w([A.ee,A.aw],x.O)
D.ap9=new C.a9(A.b1,A.b5,A.x,D.cU3,null,null)
D.da7=w([A.dt,A.j_,A.bn],x.O)
D.bYc=new C.a9(A.a3,A.a8,A.x,D.da7,null,null)
D.dad=w([A.h7,A.cp],x.O)
D.bYw=new C.a9(A.b1,A.b5,A.x,D.dad,null,null)
D.cqL=w([A.bN,A.dt],x.O)
D.bYF=new C.a9(A.a3,A.a8,A.x,D.cqL,null,null)
D.ayX=w([A.ee,L.mn],x.O)
D.bYM=new C.a9(A.b1,A.b5,A.x,D.ayX,null,null)
D.bZ2=new C.a9(A.b1,A.b5,A.x,I.apw,null,null)
D.bfJ=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b8K=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cPq=w([D.bfJ,D.b8K],x.O)
D.bZf=new C.a9(A.b1,A.b5,A.x,D.cPq,null,null)
D.bZQ=new C.a9(A.az,A.aC,A.x,A.a2I,null,null)
D.bke=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dlH=w([D.bke,A.L1],x.O)
D.bZX=new C.a9(A.b1,A.b5,A.x,D.dlH,null,null)
D.d2f=w([A.aw,A.w],x.O)
D.c_1=new C.a9(A.b1,A.b5,A.x,D.d2f,null,null)
D.c_4=new C.a9(A.b1,A.b5,A.x,T.ayj,null,null)
D.bjD=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bko=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cDv=w([A.LP,D.bjD,D.bko],x.O)
D.c_e=new C.a9(A.b1,A.b5,A.x,D.cDv,null,null)
D.cr5=w([A.d6,A.fA],x.O)
D.c_u=new C.a9(A.b1,A.b5,A.x,D.cr5,null,null)
D.c_A=new C.a9(A.az,A.aC,A.x,A.a3w,null,null)
D.apy=w([0,2,4,6,7,9,11],x.t)
D.c0b=w([0,4,7],x.t)
D.apE=w([0,4,7,12],x.t)
D.c0c=w([0,4,7,4],x.t)
D.ay_=w([A.h5,A.pN],x.O)
D.axv=w([A.hn,A.cT],x.O)
D.avV=w([A.bu,A.dP],x.O)
D.cM1=w([A.aM,A.d6],x.O)
D.cSt=w([A.c8,A.eC],x.O)
D.dbq=w([A.bU,A.lO],x.O)
D.avm=w([A.ct,A.k1],x.O)
D.cR1=w([A.bK,A.aJ],x.O)
D.c0w=w([D.ay_,D.axv,A.a2Q,D.avV,D.cM1,D.cSt,A.ax2,D.dbq,D.avm,D.cR1],x.Q)
D.c5a=w([120,220,380],x.t)
D.c8V=w([12,16,19,24],x.t)
D.c94=w([1400,800,450,2400],x.t)
D.cdk=w([0,0.6,1],x.n)
D.chu=w([250,450,900,1500],x.t)
D.b9z=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bjZ=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bi2=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bnh=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bhd=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.auD=w([D.b9z,D.bjZ,D.bi2,D.bnh,D.bhd],x.O)
D.eGZ=new C.z("type","Typewriter")
D.ezr=new C.z("bounce","Bounce")
D.eHL=new C.z("wave","Wave")
D.eIR=new C.z("zoom","Zoom")
D.cyf=w([D.eGZ,D.ezr,D.eHL,A.a6G,I.aMW,D.eIR,I.aN_],x.K)
D.cyt=w([50,25,75],x.t)
D.cE1=w([0,5,10,15,18,20,25],x.t)
D.eB5=new C.z("fish","Fish")
D.eB7=new C.z("fly","Fireflies")
D.ezp=new C.z("bird","Birds")
D.cId=w([D.eB5,D.eB7,D.ezp],x.K)
D.cMh=w([900,500,250,1600],x.t)
D.cPN=w([0.78,1],x.n)
D.avW=w([0,2,4,7,9,12,14,16],x.t)
D.cQm=w([A.bu,A.bE,A.b8,A.bu],x.O)
D.aw0=w(["A","T","C","G"],x.s)
D.cQn=w(["A","U","C","G"],x.s)
D.a2F=w([A.av,A.bH,A.bc,A.aO,A.o_],x.O)
D.cRN=w([A.aw,A.av,A.ct,A.bH,A.bc,A.cA,A.cb,A.bE,A.L1],x.O)
D.a2J=w([0.04,0.17,0.3],x.n)
D.cSp=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Hg=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eQS=new B.uU("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eQY=new B.uU("Medium engine","A good all-rounder.",0.3,0.9)
D.eQX=new B.uU("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hh=w([D.eQS,D.eQY,D.eQX],x._)
D.ep6=new C.z(6,"Easy")
D.epP=new C.z(8,"Medium")
D.el2=new C.z(10,"Hard")
D.cTf=w([D.ep6,D.epP,D.el2],x.E)
D.awk=w([0.55,0.78,1],x.n)
D.cUN=w([0.93,0.975,1],x.n)
D.awv=w([A.c,A.fK,A.nS,A.aw],x.O)
D.fKl=new B.y7("Moon",1737,4291941851)
D.fKi=new B.y7("Earth",6371,4281908728)
D.fKm=new B.y7("Neptune",24622,4284524026)
D.fKn=new B.y7("Saturn",58232,4294829706)
D.fKj=new B.y7("Jupiter",69911,4294677052)
D.fKo=new B.y7("Sun",696340,4294688548)
D.fKp=new B.y7("Sirius A",119e4,4290763774)
D.fKg=new B.y7("Arcturus",179e5,4294818420)
D.fKh=new B.y7("Betelgeuse",531e6,4294472049)
D.fKk=new B.y7("UY Scuti",667e6,4293870660)
D.Qg=w([D.fKl,D.fKi,D.fKm,D.fKn,D.fKj,D.fKo,D.fKp,D.fKg,D.fKh,D.fKk],C.ax("O<y7>"))
D.eMo=new C.bl("glow","Glow",A.a0e)
D.eJY=new C.bl("rainbow","Rainbow",A.no)
D.eKk=new C.bl("stars","Stars",A.i9)
D.eJI=new C.bl("sparks","Sparks",A.dY)
D.eLF=new C.bl("fire","Fire",A.vW)
D.cWE=w([D.eMo,D.eJY,D.eKk,D.eJI,D.eLF],x.c)
D.awz=w([A.bc,A.av,A.bH,A.d_],x.O)
D.cXD=w([0.2,1],x.n)
D.eQP=new B.uU("Radar","Shows your height above the ground.",0.1,0)
D.eQQ=new B.uU("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eQN=new B.uU("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awH=w([D.eQP,D.eQQ,D.eQN],x._)
D.eKV=new C.bl("attract","Attract",A.yA)
D.eKH=new C.bl("scare","Scare",A.ri)
D.eJR=new C.bl("food","Food",A.ue)
D.bHC=new C.a0(983158,"MaterialIcons",!1)
D.eLd=new C.bl("hunt","Hunt",D.bHC)
D.cYf=w([D.eKV,D.eKH,D.eJR,D.eLd],x.c)
D.cYG=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYV=w([47,100,220,470,1000],x.n)
D.awZ=w([0,2,4,7,9],x.t)
D.Ik={volts:0}
D.a4u=new C.bk(D.Ik,[3],x.J)
D.IH=new C.e9(["b","battery",0.2,0.3,D.a4u])
D.e7A={on:0}
D.dqz=new C.bk(D.e7A,[1],x.J)
D.Do=new C.e9(["s","switch",0.5,0.3,D.dqz])
D.eOY=new C.e9(["l","bulb",0.8,0.3,A.j7])
D.cUs=w([D.IH,D.Do,D.eOY],x.d)
D.Dn=new C.cz(["b",0,"s",0])
D.eNZ=new C.cz(["s",1,"l",0])
D.aN3=new C.cz(["l",1,"b",1])
D.daj=w([D.Dn,D.eNZ,D.aN3],x.o)
D.cTW=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ekd=new B.mC("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cUs,D.daj,D.cTW)
D.aH8={ohms:0}
D.aEI=new C.bk(D.aH8,[220],x.J)
D.eOr=new C.e9(["r","resistor",0.5,0.3,D.aEI])
D.ePc=new C.e9(["d","led",0.8,0.3,A.j7])
D.ddr=w([D.IH,D.eOr,D.ePc],x.d)
D.eNk=new C.cz(["b",0,"r",0])
D.eNT=new C.cz(["r",1,"d",0])
D.eNq=new C.cz(["d",1,"b",1])
D.dmb=w([D.eNk,D.eNT,D.eNq],x.o)
D.ddR=w(["led","diode","indicator"],x.s)
D.ekk=new B.mC("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.ddr,D.dmb,D.ddR)
D.a5L={level:0}
D.dpV=new C.bk(D.a5L,[0.2],x.J)
D.eOx=new C.e9(["p","pot",0.5,0.3,D.dpV])
D.eOz=new C.e9(["m","motor",0.8,0.3,A.j7])
D.cUL=w([D.IH,D.eOx,D.eOz],x.d)
D.eNj=new C.cz(["b",0,"p",0])
D.eNP=new C.cz(["p",1,"m",0])
D.eNL=new C.cz(["m",1,"b",1])
D.dhX=w([D.eNj,D.eNP,D.eNL],x.o)
D.da0=w(["fan","motor","spin","dimmer"],x.s)
D.ekb=new B.mC("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cUL,D.dhX,D.da0)
D.a4r=new C.bk(D.a5L,[0.9],x.J)
D.aNa=new C.e9(["s","solar",0.25,0.3,D.a4r])
D.aN9=new C.e9(["l","bulb",0.75,0.3,A.j7])
D.cXk=w([D.aNa,D.aN9],x.d)
D.eNW=new C.cz(["s",0,"l",0])
D.eNK=new C.cz(["l",1,"s",1])
D.cVv=w([D.eNW,D.eNK],x.o)
D.dix=w(["solar","sun","without battery","no battery","free"],x.s)
D.eke=new B.mC("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cXk,D.cVv,D.dix)
D.ePf=new C.e9(["c","crank",0.25,0.3,D.a4r])
D.d8n=w([D.ePf,D.aN9],x.d)
D.eNn=new C.cz(["c",0,"l",0])
D.eNJ=new C.cz(["l",1,"c",1])
D.d8W=w([D.eNn,D.eNJ],x.o)
D.d8w=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eka=new B.mC("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d8n,D.d8W,D.d8w)
D.dpU=new C.bk(D.a5L,[0.7],x.J)
D.eOC=new C.e9(["t","turbine",0.25,0.3,D.dpU])
D.eOp=new C.e9(["m","motor",0.75,0.3,A.j7])
D.d2U=w([D.eOC,D.eOp],x.d)
D.eO6=new C.cz(["t",0,"m",0])
D.eNM=new C.cz(["m",1,"t",1])
D.d1U=w([D.eO6,D.eNM],x.o)
D.d7d=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ek7=new B.mC("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2U,D.d1U,D.d7d)
D.aEF=new C.bk(D.Ik,[9],x.J)
D.a6N=new C.e9(["b","battery",0.2,0.3,D.aEF])
D.aN8=new C.e9(["r","radio",0.8,0.3,A.j7])
D.dj9=w([D.a6N,D.Do,D.aN8],x.d)
D.eO0=new C.cz(["s",1,"r",0])
D.aN4=new C.cz(["r",1,"b",1])
D.c_V=w([D.Dn,D.eO0,D.aN4],x.o)
D.dhJ=w(["radio","music","listen"],x.s)
D.ekj=new B.mC("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dj9,D.c_V,D.dhJ)
D.dr0=new C.bk(D.Ik,[12],x.J)
D.aN7=new C.e9(["b","battery",0.2,0.3,D.dr0])
D.eOZ=new C.e9(["t","tv",0.8,0.3,A.j7])
D.cUu=w([D.aN7,D.Do,D.eOZ],x.d)
D.eO1=new C.cz(["s",1,"t",0])
D.aN5=new C.cz(["t",1,"b",1])
D.dbt=w([D.Dn,D.eO1,D.aN5],x.o)
D.dj6=w(["tv","television","screen","watch"],x.s)
D.ek4=new B.mC("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cUu,D.dbt,D.dj6)
D.eOP=new C.e9(["z","buzzer",0.8,0.3,A.j7])
D.cAN=w([D.IH,D.Do,D.eOP],x.d)
D.eO2=new C.cz(["s",1,"z",0])
D.eOk=new C.cz(["z",1,"b",1])
D.cPB=w([D.Dn,D.eO2,D.eOk],x.o)
D.dg6=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ekg=new B.mC("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAN,D.cPB,D.dg6)
D.eOy=new C.e9(["h","heater",0.8,0.3,A.j7])
D.d5V=w([D.a6N,D.Do,D.eOy],x.d)
D.eNY=new C.cz(["s",1,"h",0])
D.eNy=new C.cz(["h",1,"b",1])
D.cQi=w([D.Dn,D.eNY,D.eNy],x.o)
D.ckL=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ek5=new B.mC("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5V,D.cQi,D.ckL)
D.eP0=new C.e9(["s","solar",0.2,0.25,D.a4r])
D.dr7=new C.bk(D.aH8,[100],x.J)
D.eP3=new C.e9(["r","resistor",0.55,0.25,D.dr7])
D.ePa=new C.e9(["c","capacitor",0.85,0.25,A.j7])
D.eOu=new C.e9(["q","resistor",0.55,0.6,D.aEI])
D.eP1=new C.e9(["d","led",0.85,0.6,A.j7])
D.db0=w([D.eP0,D.eP3,D.ePa,D.eOu,D.eP1],x.d)
D.eNX=new C.cz(["s",0,"r",0])
D.eNS=new C.cz(["r",1,"c",0])
D.eNp=new C.cz(["c",1,"s",1])
D.eNo=new C.cz(["c",0,"q",0])
D.eNR=new C.cz(["q",1,"d",0])
D.eNr=new C.cz(["d",1,"c",1])
D.d_P=w([D.eNX,D.eNS,D.eNp,D.eNo,D.eNR,D.eNr],x.o)
D.d7K=w(["capacitor","store","charge","flash"],x.s)
D.eki=new B.mC("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.db0,D.d_P,D.d7K)
D.eOF=new C.e9(["b","battery",0.15,0.3,D.a4u])
D.ePg=new C.e9(["l1","bulb",0.5,0.3,A.j7])
D.eOM=new C.e9(["l2","bulb",0.85,0.3,A.j7])
D.cSI=w([D.eOF,D.ePg,D.eOM],x.d)
D.eNi=new C.cz(["b",0,"l1",0])
D.eNG=new C.cz(["l1",1,"l2",0])
D.eNH=new C.cz(["l2",1,"b",1])
D.d3A=w([D.eNi,D.eNG,D.eNH],x.o)
D.diS=w(["series","two bulbs","dim"],x.s)
D.ek8=new B.mC("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cSI,D.d3A,D.diS)
D.e7T={volts:0,charge:1}
D.drc=new C.bk(D.e7T,[1.5,0],x.J)
D.eP8=new C.e9(["b","battery",0.75,0.3,D.drc])
D.cS8=w([D.aNa,D.eP8],x.d)
D.eNV=new C.cz(["s",0,"b",0])
D.eNm=new C.cz(["b",1,"s",1])
D.d06=w([D.eNV,D.eNm],x.o)
D.d7T=w(["charge","rechargeable","flat","recharge"],x.s)
D.ek6=new B.mC("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cS8,D.d06,D.d7T)
D.dr_=new C.bk(D.Ik,[4.5],x.J)
D.eOA=new C.e9(["b","battery",0.2,0.3,D.dr_])
D.aN6=new C.e9(["p","phone",0.8,0.3,A.j7])
D.d2K=w([D.eOA,D.Do,D.aN6],x.d)
D.eO_=new C.cz(["s",1,"p",0])
D.a6M=new C.cz(["p",1,"b",1])
D.df5=w([D.Dn,D.eO_,D.a6M],x.o)
D.dgx=w(["phone","charger","usb","mobile"],x.s)
D.ekc=new B.mC("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d2K,D.df5,D.dgx)
D.eOm=new C.e9(["f","fan",0.8,0.3,A.j7])
D.ccU=w([D.IH,D.eOm],x.d)
D.eNh=new C.cz(["b",0,"f",0])
D.eNw=new C.cz(["f",1,"b",1])
D.cQP=w([D.eNh,D.eNw],x.o)
D.da_=w(["fan","cool","air","wind"],x.s)
D.ekl=new B.mC("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ccU,D.cQP,D.da_)
D.eOT=new C.e9(["b","battery",0.15,0.2,D.a4u])
D.eOn=new C.e9(["a","ammeter",0.5,0.2,A.j7])
D.eOl=new C.e9(["l","bulb",0.85,0.2,A.j7])
D.eOV=new C.e9(["v","voltmeter",0.5,0.6,A.j7])
D.d8b=w([D.eOT,D.eOn,D.eOl,D.eOV],x.d)
D.eNf=new C.cz(["b",0,"a",0])
D.eNe=new C.cz(["a",1,"l",0])
D.eO8=new C.cz(["v",0,"l",0])
D.eO9=new C.cz(["v",1,"l",1])
D.d_Y=w([D.eNf,D.eNe,D.aN3,D.eO8,D.eO9],x.o)
D.dma=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ekh=new B.mC("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d8b,D.d_Y,D.dma)
D.ePj=new C.e9(["b","battery",0.15,0.2,D.aEF])
D.eOE=new C.e9(["t","tv",0.55,0.2,A.j7])
D.aEG=new C.bk(D.Ik,[5],x.J)
D.eOs=new C.e9(["c","buck",0.4,0.5,D.aEG])
D.eOG=new C.e9(["p","phone",0.8,0.5,A.j7])
D.cYI=w([D.ePj,D.eOE,D.eOs,D.eOG],x.d)
D.eNl=new C.cz(["b",0,"t",0])
D.aN1=new C.cz(["b",0,"c",0])
D.aN2=new C.cz(["c",1,"p",0])
D.d2H=w([D.eNl,D.aN5,D.aN1,D.aN2,D.a6M],x.o)
D.cWV=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ek9=new B.mC("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cYI,D.d2H,D.cWV)
D.eOt=new C.e9(["c","buck",0.5,0.3,D.aEG])
D.cQ9=w([D.aN7,D.eOt,D.aN6],x.d)
D.cUU=w([D.aN1,D.aN2,D.a6M],x.o)
D.cob=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ek3=new B.mC("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cQ9,D.cUU,D.cob)
D.eOK=new C.e9(["d","diode",0.5,0.3,A.j7])
D.d3N=w([D.a6N,D.eOK,D.aN8],x.d)
D.eNg=new C.cz(["b",0,"d",0])
D.eNs=new C.cz(["d",1,"r",0])
D.cDk=w([D.eNg,D.eNs,D.aN4],x.o)
D.cWB=w(["diode","protect","backwards","one way"],x.s)
D.ekf=new B.mC("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d3N,D.cDk,D.cWB)
D.Qj=w([D.ekd,D.ekk,D.ekb,D.eke,D.eka,D.ek7,D.ekj,D.ek4,D.ekg,D.ek5,D.eki,D.ek8,D.ek6,D.ekc,D.ekl,D.ekh,D.ek9,D.ek3,D.ekf],C.ax("O<mC>"))
D.hcw=new B.G5("Moon",1.62,A.dt,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hcu=new B.G5("Mars",3.71,A.av,"Mars has about 38 percent of Earth's gravity.")
D.hcx=new B.G5("Mercury",3.7,A.k0,"Mercury is small, so its gravity is like Mars.")
D.hcr=new B.G5("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.hct=new B.G5("Earth",9.81,A.aO,"On Earth gravity is strong, and the air also slows you down.")
D.hcv=new B.G5("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.hcs=new B.G5("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rt=w([D.hcw,D.hcu,D.hcx,D.hcr,D.hct,D.hcv,D.hcs],C.ax("O<G5>"))
D.d_N=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2Z=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d0v=w([0.2,0.5,0.8],x.n)
D.bG7=new C.a0(63040,"MaterialIcons",!1)
D.eKL=new C.bl("peg","Peg",D.bG7)
D.eJV=new C.bl("bar","Bar",R.C1)
D.eKn=new C.bl("erase","Erase",A.NB)
D.d0I=w([D.eKL,D.eJV,D.eKn],x.c)
D.eU1=new C.cR(A.bk,A.J,4)
D.d0V=w([D.eU1],x.q)
D.axe=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWC=new B.Ko(0,"accordion")
D.cR7=w([A.ju,A.C2,A.BO],x.w)
D.cY7=w(["Mail","SMS","Ad"],x.s)
D.cRE=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.haJ=new B.AA(D.aWC,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ay_,D.cR7,D.cY7,D.cRE)
D.aan=new B.Ko(1,"flip")
D.d7E=w([A.q7,A0.GG,A.uf],x.w)
D.d2q=w(["Unlock","Verify","Secure"],x.s)
D.cQ5=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.haI=new B.AA(D.aan,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axv,D.d7E,D.d2q,D.cQ5)
D.aWD=new B.Ko(2,"towers")
D.d1e=w([A.yw,A.qb,A.hU],x.w)
D.d0Q=w(["Save","Grow","Earn"],x.s)
D.cEa=w(["","",""],x.s)
D.haK=new B.AA(D.aWD,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2Q,D.d1e,D.d0Q,D.cEa)
D.aao=new B.Ko(3,"assemble")
D.d8z=w([A.nq,A.ha,A.dY],x.w)
D.cXw=w(["Launch","Charge","Shine"],x.s)
D.d53=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.haM=new B.AA(D.aao,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avV,D.d8z,D.cXw,D.d53)
D.aWE=new B.Ko(4,"carousel")
D.d8o=w([A.b8,A.f3],x.O)
D.cYh=w([A.mB,A.alT,A.Oc],x.w)
D.cT5=w(["Explore","Discover","Learn"],x.s)
D.d2P=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.haH=new B.AA(D.aWE,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d8o,D.cYh,D.cT5,D.d2P)
D.aWF=new B.Ko(5,"burst")
D.d0K=w([A.iX,A.ts],x.O)
D.cRz=w([A.lr,A.mz,A.i8],x.w)
D.cRV=w(["Cheer","Win","Love"],x.s)
D.cU1=w(["Make some noise","First place","Share the joy"],x.s)
D.haL=new B.AA(D.aWF,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d0K,D.cRz,D.cRV,D.cU1)
D.axf=w([D.haJ,D.haI,D.haK,D.haM,D.haH,D.haL],C.ax("O<AA>"))
D.eKN=new C.bl("skin","Skin",A.alU)
D.eMa=new C.bl("muscle","Muscles",A.NN)
D.eLT=new C.bl("organ","Organs",A.i8)
D.bFy=new C.a0(62747,"MaterialIcons",!1)
D.eLZ=new C.bl("bone","Skeleton",D.bFy)
D.eMg=new C.bl("vessel","Blood vessels",A.qd)
D.d1k=w([D.eKN,D.eMa,D.eLT,D.eLZ,D.eMg],x.c)
D.eQR=new B.uU("Simple legs","Light. Land gently.",0.15,0.2)
D.eQT=new B.uU("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eQW=new B.uU("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cs=w([D.eQR,D.eQT,D.eQW],x._)
D.d2Z=w([1.77,3.55,7.15,16.7],x.n)
D.d5u=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eGs=new C.z("spiral","Spiral")
D.ep3=new C.z("barred","Barred spiral")
D.eAA=new C.z("elliptical","Elliptical")
D.d6a=w([D.eGs,D.ep3,D.eAA],x.K)
D.eMX=new C.cz(["beat",0.18,0.28,0])
D.eO3=new C.cz(["burst",0.7,0.2,0])
D.eOe=new C.cz(["delay",0.45,0.5,1])
D.eNO=new C.cz(["ripple",0.75,0.6,3])
D.cXf=w([D.eMX,D.eO3,D.eOe,D.eNO],x.e)
D.d71=w([N.lc,M.IG,F.ST],x.u)
D.h9Y=new B.FR("First spark","A clock lights a burst and a ripple",D.cXf,D.d71)
D.eNv=new C.cz(["beat",0.15,0.3,1])
D.eMB=new C.cz(["ripple",0.62,0.15,0])
D.eOa=new C.cz(["delay",0.4,0.45,0])
D.eNb=new C.cz(["ripple",0.7,0.45,0])
D.eMT=new C.cz(["delay",0.4,0.7,1])
D.eNQ=new C.cz(["shake",0.75,0.75,0])
D.djZ=w([D.eNv,D.eMB,D.eOa,D.eNb,D.eMT,D.eNQ],x.e)
D.em2=new C.z(2,4)
D.aMP=new C.z(4,5)
D.d_D=w([N.lc,M.IG,F.ST,D.em2,D.aMP],x.u)
D.ha_=new B.FR("Heartbeat","Two thumps, then a shake",D.djZ,D.d_D)
D.eN1=new C.cz(["dice",0.15,0.7,1])
D.eOg=new C.cz(["echo",0.4,0.7,0])
D.eN9=new C.cz(["comet",0.7,0.5,4])
D.eO4=new C.cz(["burst",0.72,0.2,1])
D.eNt=new C.cz(["burst",0.3,0.25,0])
D.eN2=new C.cz(["pop",0.55,0.85,0])
D.ckk=w([D.eN1,D.eOg,D.eN9,D.eO4,D.eNt,D.eN2],x.e)
D.els=new C.z(1,3)
D.elt=new C.z(1,4)
D.aMM=new C.z(0,5)
D.d8j=w([N.lc,W.uM,D.els,D.elt,D.aMM],x.u)
D.h9Z=new B.FR("Fireworks","Dice launch comets that burst in colour",D.ckk,D.d8j)
D.eN6=new C.cz(["beat",0.15,0.2,2])
D.eND=new C.cz(["chance",0.4,0.2,0])
D.eMZ=new C.cz(["ball",0.7,0.12,3])
D.eMM=new C.cz(["chance",0.4,0.5,1])
D.eOf=new C.cz(["ball",0.3,0.08,1])
D.eMF=new C.cz(["ripple",0.7,0.55,3])
D.cdl=w([D.eN6,D.eND,D.eMZ,D.eMM,D.eOf,D.eMF],x.e)
D.em3=new C.z(2,5)
D.cAx=w([N.lc,W.uM,M.a6B,F.SU,D.em3],x.u)
D.h9X=new B.FR("Rain","Balls fall at random and splash",D.cdl,D.cAx)
D.eNE=new C.cz(["beat",0.12,0.45,2])
D.eO5=new C.cz(["toggle",0.38,0.2,0])
D.eOc=new C.cz(["wash",0.7,0.15,4])
D.eN0=new C.cz(["count3",0.38,0.45,0])
D.eO7=new C.cz(["burst",0.72,0.4,0])
D.eNu=new C.cz(["light",0.55,0.7,1])
D.eMN=new C.cz(["pop",0.8,0.8,4])
D.daZ=w([D.eNE,D.eO5,D.eOc,D.eN0,D.eO7,D.eNu,D.eMN],x.e)
D.emy=new C.z(3,6)
D.cgu=w([N.lc,W.uM,M.a6B,F.SU,D.aMM,D.emy],x.u)
D.h9V=new B.FR("Disco","A beat drives lights, washes and bursts",D.daZ,D.cgu)
D.eOj=new C.cz(["button",0.12,0.2,0])
D.eMH=new C.cz(["delay",0.34,0.2,1])
D.eOi=new C.cz(["light",0.56,0.2,1])
D.eOb=new C.cz(["delay",0.56,0.45,1])
D.eNF=new C.cz(["ball",0.34,0.6,0])
D.eML=new C.cz(["delay",0.34,0.8,1])
D.eMA=new C.cz(["burst",0.7,0.8,5])
D.c0z=w([D.eOj,D.eMH,D.eOi,D.eOb,D.eNF,D.eML,D.eMA],x.e)
D.eoG=new C.z(5,6)
D.dgf=w([N.lc,W.uM,F.ST,F.SU,D.aMP,D.eoG],x.u)
D.h9W=new B.FR("Domino","Tap the button and watch it run down the line",D.c0z,D.dgf)
D.axz=w([D.h9Y,D.ha_,D.h9Z,D.h9X,D.h9V,D.h9W],C.ax("O<FR>"))
D.d6i=w([0.05,0.15,0.25],x.n)
D.d6w=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d7c=w([1.5,3,4.5,9,12],x.n)
D.eJs=new C.bl("dice","Dice",A.my)
D.eKu=new C.bl("coin","Coin",K.yp)
D.eMb=new C.bl("num","Number",A.yy)
D.d7o=w([D.eJs,D.eKu,D.eMb],x.c)
D.d7r=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fKq=new B.P8("Moon",1.62,0,4291941851)
D.fKr=new B.P8("Mars",3.71,0.01,4294472049)
D.fKs=new B.P8("Earth",9.81,1,4281908728)
D.fKu=new B.P8("Jupiter",24.79,1.4,4294677052)
D.fKt=new B.P8("Sun",274,2,4294688548)
D.z_=w([D.fKq,D.fKr,D.fKs,D.fKu,D.fKt],C.ax("O<P8>"))
D.axF=w([A.c8,A.aM,A.aZ,A.aO,A.bu,A.bU,A.ct,A.hn],x.O)
D.e5S={H:0}
D.dqA=new C.bk(D.e5S,[2],x.I)
D.ds9=new B.tl("Hydrogen","H\u2082",D.dqA,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e5T={H:0,Cl:1}
D.dqN=new C.bk(D.e5T,[1,1],x.I)
D.dsb=new B.tl("Hydrogen chloride","HCl",D.dqN,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e5U={H:0,O:1}
D.dqh=new C.bk(D.e5U,[2,1],x.I)
D.dsc=new B.tl("Water","H\u2082O",D.dqh,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e67={N:0,H:1}
D.drb=new C.bk(D.e67,[1,3],x.I)
D.dsk=new B.tl("Ammonia","NH\u2083",D.drb,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5K={C:0,H:1}
D.dr4=new C.bk(D.a5K,[1,4],x.I)
D.dsd=new B.tl("Methane","CH\u2084",D.dr4,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e5V={H:0,S:1}
D.dpn=new C.bk(D.e5V,[2,1],x.I)
D.dsj=new B.tl("Hydrogen sulfide","H\u2082S",D.dpn,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e6c={O:0}
D.dr9=new C.bk(D.e6c,[2],x.I)
D.dsl=new B.tl("Oxygen","O\u2082",D.dr9,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e66={N:0}
D.dqB=new C.bk(D.e66,[2],x.I)
D.dsa=new B.tl("Nitrogen","N\u2082",D.dqB,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e5H={C:0,O:1}
D.drg=new C.bk(D.e5H,[1,2],x.I)
D.dsh=new B.tl("Carbon dioxide","CO\u2082",D.drg,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aH5={C:0,H:1,O:2}
D.dp4=new C.bk(D.aH5,[1,2,1],x.I)
D.dsi=new B.tl("Formaldehyde","CH\u2082O",D.dp4,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dr3=new C.bk(D.a5K,[2,4],x.I)
D.dsf=new B.tl("Ethene","C\u2082H\u2084",D.dr3,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dr2=new C.bk(D.a5K,[2,6],x.I)
D.dse=new B.tl("Ethane","C\u2082H\u2086",D.dr2,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dp5=new C.bk(D.aH5,[1,4,1],x.I)
D.dsg=new B.tl("Methanol","CH\u2083OH",D.dp5,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a3f=w([D.ds9,D.dsb,D.dsc,D.dsk,D.dsd,D.dsj,D.dsl,D.dsa,D.dsh,D.dsi,D.dsf,D.dse,D.dsg],C.ax("O<tl>"))
D.d8p=w([A.bU,A.aO,A.dR,A.aZ],x.O)
D.d9k=w([],x.h)
D.d9o=w([],x.B)
D.a3o=w([],x.F)
D.edP=new B.ed("battery","Battery","\ud83d\udd0b",A.aZ,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.edV=new B.ed("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eez=new B.ed("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eeb=new B.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aO,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.edH=new B.ed("buck","Step-down converter","\ud83d\udd3d",A.hn,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ee9=new B.ed("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eeE=new B.ed("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eel=new B.ed("ldr","Light sensor","\ud83c\udf1e",A.dR,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ee_=new B.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eeB=new B.ed("fuse","Fuse","\ud83e\uddef",A.c8,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.edz=new B.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hn,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eem=new B.ed("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eeo=new B.ed("bulb","Light bulb","\ud83d\udca1",A.dR,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.edX=new B.ed("led","LED","\ud83d\udd34",A.av,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.ee0=new B.ed("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eei=new B.ed("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.edQ=new B.ed("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eed=new B.ed("capacitor","Capacitor","\ud83e\udeab",A.cl,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ee5=new B.ed("radio","Radio","\ud83d\udcfb",A.o_,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ee2=new B.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.edG=new B.ed("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.edN=new B.ed("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.edT=new B.ed("fan","Fan","\ud83c\udf00",A.aO,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eeG=new B.ed("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eev=new B.ed("clock","Digital clock","\u23f0",A.aZ,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ee8=new B.ed("calculator","Calculator","\ud83e\uddee",A.KV,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.edM=new B.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cl,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eeF=new B.ed("router","WiFi router","\ud83d\udcf6",A.hn,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eeI=new B.ed("siren","Siren","\ud83d\udea8",A.av,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.edC=new B.ed("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eeJ=new B.ed("kettle","Kettle","\ud83e\uded6",A.mm,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.edK=new B.ed("lamp","Desk lamp","\ud83e\ude94",A.dR,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.edW=new B.ed("lights","Party lights","\ud83c\udf84",A.o_,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ee6=new B.ed("fridge","Fridge","\ud83e\uddca",A.fW,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.edE=new B.ed("washer","Washing machine","\ud83e\udee7",A.cl,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eew=new B.ed("blender","Blender","\ud83e\udd64",A.c8,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ee3=new B.ed("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.edJ=new B.ed("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ee7=new B.ed("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eet=new B.ed("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.edF=new B.ed("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.een=new B.ed("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.edS=new B.ed("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eeh=new B.ed("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eey=new B.ed("heartmon","Heart monitor","\ud83e\ude7a",A.h4,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.edD=new B.ed("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eec=new B.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dR,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eek=new B.ed("discoball","Disco ball","\ud83e\udea9",A.o_,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eeD=new B.ed("robot","Robot","\ud83e\udd16",A.aO,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.edB=new B.ed("toaster","Toaster","\ud83c\udf5e",A.dS,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eeH=new B.ed("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ees=new B.ed("pump","Water pump","\ud83d\udeb0",A.aO,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eee=new B.ed("hairdryer","Hair dryer","\ud83d\udca8",A.iX,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eeq=new B.ed("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.edL=new B.ed("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eeC=new B.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.cl,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.edy=new B.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h4,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ee4=new B.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.edY=new B.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bN,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eej=new B.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tp,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.edA=new B.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.edO=new B.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eeA=new B.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eef=new B.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bc,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eea=new B.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eer=new B.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.av,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.edZ=new B.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.aZ,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eeg=new B.ed("honor","Honor Magic V5","\ud83d\udcf1",A.cl,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eep=new B.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eeu=new B.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.edx=new B.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.ee1=new B.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.edU=new B.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.edI=new B.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dR,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.edR=new B.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.av,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eex=new B.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QK=w([D.edP,D.edV,D.eez,D.eeb,D.edH,D.ee9,D.eeE,D.eel,D.ee_,D.eeB,D.edz,D.eem,D.eeo,D.edX,D.ee0,D.eei,D.edQ,D.eed,D.ee5,D.ee2,D.edG,D.edN,D.edT,D.eeG,D.eev,D.ee8,D.edM,D.eeF,D.eeI,D.edC,D.eeJ,D.edK,D.edW,D.ee6,D.edE,D.eew,D.ee3,D.edJ,D.ee7,D.eet,D.edF,D.een,D.edS,D.eeh,D.eey,D.edD,D.eec,D.eek,D.eeD,D.edB,D.eeH,D.ees,D.eee,D.eeq,D.edL,D.eeC,D.edy,D.ee4,D.edY,D.eej,D.edA,D.edO,D.eeA,D.eef,D.eea,D.eer,D.edZ,D.eeg,D.eep,D.eeu,D.edx,D.ee1,D.edU,D.edI,D.edR,D.eex],C.ax("O<ed>"))
D.d9L=w([0,0.46,0.82],x.n)
D.d9W=w([5,10,15,25,45,60],x.t)
D.dah=w([-0.045,0.03,-0.015],x.n)
D.daF=w([0.9,0.97,1],x.n)
D.ay7=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.up=w([0.05,0.2,0.35],x.n)
D.cRZ=w([D.F3,D.F3],x.O)
D.cXb=w([A.Fd,A.M],x.O)
D.cWf=w([A.fl,A.hm],x.O)
D.cQ1=w([A.f3,A.nZ],x.O)
D.ccS=w([A.lO,A.dy],x.O)
D.ay8=w([D.cRZ,D.cXb,D.cWf,D.cQ1,D.ccS],x.Q)
D.fKe=new B.v7("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fKf=new B.v7("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fK6=new B.v7("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fKd=new B.v7("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fKb=new B.v7("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fK7=new B.v7("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fKc=new B.v7("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fK8=new B.v7("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fKa=new B.v7("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fK9=new B.v7("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cy=w([D.fKe,D.fKf,D.fK6,D.fKd,D.fKb,D.fK7,D.fKc,D.fK8,D.fKa,D.fK9],C.ax("O<v7>"))
D.bgU=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.dbX=w([D.F3,D.bgU,D.aex,A.ae1],x.O)
D.b2H=new C.ac(0,A.G,A.hP,A.dE,6)
D.dcR=w([D.b2H],x.V)
D.ekF=new C.z(0,"AND")
D.elu=new C.z(1,"Adder")
D.em4=new C.z(2,"Blinker")
D.emz=new C.z(3,"Memory")
D.ddD=w([D.ekF,D.elu,D.em4,D.emz],x.E)
D.ayk=w([-104,0,104],x.n)
D.ayl=w([-14,3],x.n)
D.deq=w([-8,0,8],x.n)
D.ayt=w([-92,0,92],x.n)
D.deP=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eQO=new B.uU("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eQV=new B.uU("Medium tank","Balanced.",0.35,1)
D.eQU=new B.uU("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QY=w([D.eQO,D.eQV,D.eQU],x._)
D.nv=w([0.04,0.2,0.36],x.n)
D.ayE=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eLS=new C.bl(D.aWC,"Fold",K.amQ)
D.eL1=new C.bl(D.aan,"Flip",A.Gj)
D.bFR=new C.a0(62889,"MaterialIcons",!1)
D.eM9=new C.bl(D.aWD,"Rise",D.bFR)
D.an3=new C.a0(983870,"MaterialIcons",!1)
D.eJ0=new C.bl(D.aao,"Assemble",D.an3)
D.eJ9=new C.bl(D.aWE,"Spin",D.alm)
D.eJ6=new C.bl(D.aWF,"Pop",A.lr)
D.dgc=w([D.eLS,D.eL1,D.eM9,D.eJ0,D.eJ9,D.eJ6],C.ax("O<+(Ko,m,a0)>"))
D.ayJ=w([A.bU,A.dR,A.bv,A.aO,A.bu,A.c8],x.O)
D.dgp=w([A.aO,A.ct,A.ct,A.aZ],x.O)
D.dgC=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eHX=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.ess=new C.z("Make the output turn TWICE as fast.",2)
D.elE=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eGC=new C.z("Make the output turn 4 times faster.",4)
D.ey3=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eBb=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.ezG=new C.z("Make the output turn 3 times faster.",3)
D.eAr=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ayO=w([D.eHX,D.ess,D.elE,D.eGC,D.ey3,D.eBb,D.ezG,D.eAr],C.ax("O<+(m,K)>"))
D.dhz=w([3,4.5,5,6,9],x.n)
D.b3f=new C.ac(0,A.G,A.aW,A.J,16)
D.di0=w([D.b3f],x.V)
D.R0=w([A.bU,A.bH,A.aZ,A.aO,A.bu,A.c8,A.c,A.ct],x.O)
D.diu=w(["solar","turbine","crank","pot"],x.s)
D.diQ=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.diW=w([0,0.35,0.75,1],x.n)
D.eJm=new C.bl("drop","Drop",D.amG)
D.eJo=new C.bl("weight","Weight",U.an7)
D.eM4=new C.bl("cannon","Newton's cannon",A.am5)
D.djF=w([D.eJm,D.eJo,D.eM4],x.c)
D.eFg=new C.z("piano","Piano")
D.eEX=new C.z("organ","Organ")
D.ezn=new C.z("bell","Bell")
D.eFi=new C.z("pluck","Pluck")
D.eGB=new C.z("synth","Synth")
D.eB6=new C.z("flute","Flute")
D.az4=w([D.eFg,D.eEX,D.ezn,D.eFi,D.eGB,D.eB6],x.K)
D.dkc=w(["volts","level","ohms","on"],x.s)
D.dlA=w([A.ju,A.C2,A.BO,A.q7,A0.GG,A.uf,A.yw,A.qb,A.hU,A.nq,A.ha,A.dY,A.i8,A.i9,A.mz,A.lX,A.w1,A.rp,A.lY,A.Gb,A.ue,A.BU,A.BQ,A.amB,A.NF,A.ys,A.NN,A.amg,T.an_,A.lr],x.w)
D.dmu=w([0.72,1],x.n)
D.dmH=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e7G={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.doX=new C.bk(D.e7G,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aH7={A:0,T:1,C:2,G:3}
D.a4l=new C.bk(D.aH7,["U","A","G","C"],x.l)
D.dp6=new C.bk(D.aH7,["T","A","G","C"],x.l)
D.e63={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d8t=w([0,2,4,5,7,9,11],x.t)
D.cRe=w([0,2,3,5,7,8,10],x.t)
D.ddP=w([0,3,5,6,7,10],x.t)
D.CF=new C.bk(D.e63,[D.awZ,D.d8t,D.cRe,D.ddP,D.apy],C.ax("bk<m,ai<G>>"))
D.e7s={A:0,T:1,U:2,C:3,G:4}
D.dpq=new C.bk(D.e7s,[A.c8,A.cl,A.cl,A.aM,A.aZ],C.ax("bk<m,w>"))
D.e5p={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h3c=new B.y9("Switch",F.uh,A.bH,0,"Tap it to turn it ON or OFF.")
D.h38=new B.y9("Blinker",A.p_,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h39=new B.y9("AND",D.an3,A.cl,2,"ON only when BOTH inputs are ON.")
D.bHk=new C.a0(63671,"MaterialIcons",!1)
D.h37=new B.y9("OR",D.bHk,A.bu,2,"ON when EITHER input is ON.")
D.h3a=new B.y9("XOR",G.a0j,A.bU,2,"ON when the inputs are DIFFERENT.")
D.h34=new B.y9("NAND",A.u3,A.aO,2,"OFF only when BOTH inputs are ON.")
D.bGr=new C.a0(63176,"MaterialIcons",!1)
D.h35=new B.y9("NOR",D.bGr,A.hn,2,"ON only when BOTH inputs are OFF.")
D.h36=new B.y9("NOT",A_.C3,A.ct,1,"Flips the signal: ON becomes OFF.")
D.h3b=new B.y9("Light",A.rk,A.dR,1,"Glows when its input is ON.")
D.h3d=new B.y9("Buzzer",A.ob,A.c8,1,"Beeps while its input is ON.")
D.zd=new C.bk(D.e5p,[D.h3c,D.h38,D.h39,D.h37,D.h3a,D.h34,D.h35,D.h36,D.h3b,D.h3d],C.ax("bk<m,y9>"))
D.e7p={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eJM=new C.bl(3,20,1.9)
D.eJh=new C.bl(33,90,1.6)
D.eMt=new C.bl(52,15,3.2)
D.eMr=new C.bl(45,-100,1.8)
D.eKW=new C.bl(-15,-60,1.9)
D.eKp=new C.bl(-25,140,2.4)
D.eKg=new C.bl(-82,0,2.2)
D.aEv=new C.bk(D.e7p,[D.eJM,D.eJh,D.eMt,D.eMr,D.eKW,D.eKp,D.eKg],C.ax("bk<m,+(K,K,K)>"))
D.cQA=w([A.A],x.M)
D.cQV=w([A.az,A.aC],x.M)
D.cZI=w([A.az,A.A,A.aC],x.M)
D.d0c=w([A.az,A.lf,A.A,A.lI,A.aC],x.M)
D.ddz=w([A.az,A.lf,A.a3,A.a8,A.lI,A.aC],x.M)
D.dqo=new C.dt([1,D.cQA,2,D.cQV,3,D.cZI,4,A.az9,5,D.d0c,6,D.ddz],C.ax("dt<G,ai<dc>>"))
D.e64={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eL7=new C.bl(1,A.bN,"Hydrogen")
D.eK0=new C.bl(4,A.bn,"Carbon")
D.eJ1=new C.bl(3,A.d_,"Nitrogen")
D.eLr=new C.bl(2,A.av,"Oxygen")
D.eKP=new C.bl(2,A.bH,"Sulfur")
D.eM1=new C.bl(1,A.bc,"Chlorine")
D.wh=new C.bk(D.e64,[D.eL7,D.eK0,D.eJ1,D.eLr,D.eKP,D.eM1],C.ax("bk<m,+(G,w,m)>"))
D.e7R={Calm:0,Box:1,Sleep:2}
D.cy0=w([4,2,6,0],x.n)
D.cy7=w([4,4,4,4],x.n)
D.cy8=w([4,7,8,0],x.n)
D.Rp=new C.bk(D.e7R,[D.cy0,D.cy7,D.cy8],C.ax("bk<m,ai<K>>"))
D.e5z={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wX=new B.a0h(0,"source")
D.d_G=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h8B=new B.q7("Clock",A.p_,D.wX,A.bv,D.d_G)
D.h8x=new B.q7("Button",A.yA,D.wX,A.aM,A.U)
D.dhL=w(["random","quick","slow"],x.s)
D.h8I=new B.q7("Dice",A.my,D.wX,A.bU,D.dhL)
D.bH_=new C.a0(63484,"MaterialIcons",!1)
D.E2=new B.a0h(1,"logic")
D.dmp=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h8E=new B.q7("Delay",D.bH_,D.E2,A.cl,D.dmp)
D.da2=w(["fast","mid","slow"],x.s)
D.h8J=new B.q7("Echo",A.amv,D.E2,A.bu,D.da2)
D.h8G=new B.q7("Every 2nd",A_.C3,D.E2,A.hn,A.U)
D.bGF=new C.a0(63309,"MaterialIcons",!1)
D.h8D=new B.q7("Every 3rd",D.bGF,D.E2,A.aO,A.U)
D.bID=new C.a0(983902,"MaterialIcons",!1)
D.c0_=w(["50%","25%","75%"],x.s)
D.h8L=new B.q7("Chance",D.bID,D.E2,A.ct,D.c0_)
D.qH=new B.a0h(2,"out")
D.h8z=new B.q7("Light",A.rk,D.qH,A.dR,A.U)
D.h8A=new B.q7("Burst",A.lr,D.qH,A.bU,A.U)
D.h8y=new B.q7("Ripple",A.yD,D.qH,A.b8,A.U)
D.h8H=new B.q7("Ball",A.amI,D.qH,A.ct,A.U)
D.h8F=new B.q7("Comet",A.nq,D.qH,A.bu,A.U)
D.bIn=new C.a0(983669,"MaterialIcons",!1)
D.h8K=new B.q7("Shake",D.bIn,D.qH,A.c8,A.U)
D.h8M=new B.q7("Pop",A.Gc,D.qH,A.aZ,A.U)
D.h8C=new B.q7("Wash",A.NR,D.qH,A.pD,A.U)
D.mI=new C.bk(D.e5z,[D.h8B,D.h8x,D.h8I,D.h8E,D.h8J,D.h8G,D.h8D,D.h8L,D.h8z,D.h8A,D.h8y,D.h8H,D.h8F,D.h8K,D.h8M,D.h8C],C.ax("bk<m,q7>"))
D.e7t={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.CG=new C.bk(D.e7t,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e5M={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zF=new B.Jl(0,"tv")
D.eSl=new B.m9("Samsung Neo QLED 8K",D.zF,F.ER,A.aO)
D.eSc=new B.m9("LG OLED evo G5",D.zF,A.ed,A.h4)
D.eS3=new B.m9("Sony Bravia 9",D.zF,A.qS,A.bs)
D.eS7=new B.m9("Apple TV 4K",D.zF,A.e3,A.bN)
D.eS4=new B.m9("Bang and Olufsen Beovision",D.zF,F.Ey,F.tp)
D.IL=new B.Jl(1,"iphone")
D.aNv=new B.m9("iPhone 18 Pro Max",D.IL,D.agI,A.cb)
D.wu=new B.Jl(3,"fold")
D.bn_=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eSh=new B.m9("iPhone Fold",D.wu,D.bn_,A.b6)
D.uP=new B.Jl(2,"android")
D.eSi=new B.m9("Samsung Galaxy S26 Ultra",D.uP,F.acR,A.d_)
D.bgs=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eSa=new B.m9("Samsung Galaxy Z Fold7",D.wu,D.bgs,A.cA)
D.eS6=new B.m9("Google Pixel 10 Pro XL",D.uP,A.dt,A.bc)
D.eSe=new B.m9("Xiaomi 16 Ultra",D.uP,A.lR,A.cc)
D.eS9=new B.m9("Huawei Mate 80 Pro Max",D.uP,A.eC,A.av)
D.eS5=new B.m9("OPPO Find X9 Ultra",D.uP,A.dX,A.aZ)
D.eSn=new B.m9("Honor Magic V5",D.wu,A.d5,A.cl)
D.eSb=new B.m9("vivo X300 Pro",D.uP,A.hm,A.ct)
D.T0=new B.Jl(4,"tablet")
D.eSg=new B.m9("iPad Pro M5",D.T0,A.dt,A.aO)
D.a6X=new B.Jl(5,"reader")
D.eSo=new B.m9("Kindle Scribe",D.a6X,A.ee,A.bs)
D.zG=new B.Jl(6,"computer")
D.eSf=new B.m9("MacBook Pro M5 Max",D.zG,A.dt,A.cb)
D.eSk=new B.m9("iMac 32 inch",D.zG,A.bN,A.cA)
D.eSd=new B.m9("Pro Display XDR 8K",D.zG,A.lR,A.b8)
D.eS8=new B.m9("Sony Laser Projector",D.zG,A.cp,A.dR)
D.eSj=new B.m9("Luxury car touchscreen",D.zG,L.mn,A.av)
D.eSm=new B.m9("Apple Vision Pro",D.zG,A.h7,A.bu)
D.m4=new C.bk(D.e5M,[D.eSl,D.eSc,D.eS3,D.eS7,D.eS4,D.aNv,D.eSh,D.eSi,D.eSa,D.eS6,D.eSe,D.eS9,D.eS5,D.eSn,D.eSb,D.eSg,D.eSo,D.eSf,D.eSk,D.eSd,D.eS8,D.eSj,D.eSm],C.ax("bk<m,m9>"))
D.e5Z={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpI=new B.fP(20,4,13,!1)
D.bq8=new B.fP(14,5,13.5,!1)
D.bq_=new B.fP(9,2.4,10,!1)
D.bqd=new B.fP(7,5,12.5,!1)
D.bq2=new B.fP(8,3.5,12,!1)
D.bpE=new B.fP(15,2,6,!1)
D.bqb=new B.fP(45,6,13.5,!0)
D.bpU=new B.fP(10,8,13.5,!1)
D.bpM=new B.fP(25,3,12,!0)
D.bpS=new B.fP(35,4,12,!0)
D.bpT=new B.fP(40,4.5,9.5,!0)
D.bpV=new B.fP(55,3,9,!0)
D.bpF=new B.fP(18,3,9,!1)
D.bqa=new B.fP(22,4,13.5,!1)
D.bq3=new B.fP(16,5,13.5,!1)
D.bpQ=new B.fP(30,4,9,!0)
D.bqm=new B.fP(5,3.5,13,!1)
D.bpY=new B.fP(25,3,13.5,!0)
D.bq6=new B.fP(14,2.5,9,!1)
D.bpX=new B.fP(6,6,13,!1)
D.bqe=new B.fP(30,1.2,5,!0)
D.bql=new B.fP(35,3,4.5,!0)
D.bqh=new B.fP(20,4.5,7.5,!0)
D.bpW=new B.fP(55,5.5,13.5,!0)
D.bpD=new B.fP(45,5.5,13.5,!0)
D.bq7=new B.fP(40,5.5,13.5,!0)
D.bqk=new B.fP(60,6,13.5,!0)
D.ah9=new B.fP(28,4,7,!0)
D.Fq=new B.fP(25,4,7,!0)
D.bpP=new B.fP(30,4,7,!0)
D.bpK=new B.fP(22,4,7,!0)
D.bpL=new B.fP(24,4,7,!0)
D.bpZ=new B.fP(60,3,5.5,!0)
D.bpG=new B.fP(18,9,14,!0)
D.bpN=new B.fP(25,9,14,!0)
D.aha=new B.fP(30,8,14,!0)
D.bpJ=new B.fP(20,8,14,!0)
D.bpR=new B.fP(30,9,14,!0)
D.bqf=new B.fP(22,5,9.5,!0)
D.bpH=new B.fP(30,2.5,10.5,!0)
D.bq4=new B.fP(50,5.5,13.5,!0)
D.bqj=new B.fP(12,2,9.5,!1)
D.bq1=new B.fP(16,1.3,9.5,!0)
D.bqc=new B.fP(40,2.5,7,!0)
D.bqi=new B.fP(60,1.2,4.8,!0)
D.bqg=new B.fP(18,5,13.5,!0)
D.bq9=new B.fP(8,2,9.5,!1)
D.bq0=new B.fP(12,2.5,8,!1)
D.bpO=new B.fP(20,3.5,13.5,!0)
D.bq5=new B.fP(3.5,3,13,!1)
D.ze=new C.bk(D.e5Z,[D.bpI,D.bq8,D.bq_,D.bqd,D.bq2,D.bpE,D.bqb,D.bpU,D.bpM,D.bpS,D.bpT,D.bpV,D.bpF,D.bqa,D.bq3,D.bpQ,D.bqm,D.bpY,D.bq6,D.bpX,D.bqe,D.bql,D.bqh,D.bpW,D.bpD,D.bq7,D.bqk,D.ah9,D.Fq,D.bpP,D.Fq,D.bpK,D.Fq,D.bpL,D.ah9,D.Fq,D.bpZ,D.bpG,D.bpN,D.aha,D.bpJ,D.bpR,D.bqf,D.bpH,D.bq4,D.bqj,D.bq1,D.bqc,D.bqi,D.Fq,D.aha,D.bqg,D.bq9,D.bq0,D.bpO,D.bq5],C.ax("bk<m,fP>"))
D.e5y={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eIx=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eoD=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eoy=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eAq=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eBn=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eAm=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.emE=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eym=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eIF=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eBH=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.erR=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.emm=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eqU=new C.z("Movement","They pull your legs together and help you balance.")
D.esM=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eoM=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eGc=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eHe=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ey4=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eH_=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ewN=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eBQ=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.emt=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.et8=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eBw=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ex6=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eH7=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ezS=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.emC=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eCo=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eFQ=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eE5=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ekR=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.ezA=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ezE=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.etP=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ep_=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.esB=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eyw=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eEQ=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eIC=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eBN=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ekz=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eyH=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eln=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eF5=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eG8=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ez6=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eFk=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.emv=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eGE=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eqj=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eEv=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.etv=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ex1=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eC6=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eGP=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eGG=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eGL=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.exv=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eCU=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eE2=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eGt=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ez5=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.evq=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eue=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ezv=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eC_=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.evW=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ewB=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eqF=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eG4=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.err=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.elk=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.etO=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.elf=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.epp=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.etT=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.erA=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eCk=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.esP=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eIk=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eun=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.exp=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eA_=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.erJ=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ert=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.drA=new C.bk(D.e5y,[D.eIx,D.eoD,D.eoy,D.eAq,D.eBn,D.eAm,D.emE,D.eym,D.eIF,D.eBH,D.erR,D.emm,D.eqU,D.esM,D.eoM,D.eGc,D.eHe,D.ey4,D.eH_,D.ewN,D.eBQ,D.emt,D.et8,D.eBw,D.ex6,D.eH7,D.ezS,D.emC,D.eCo,D.eFQ,D.eE5,D.ekR,D.ezA,D.ezE,D.etP,D.ep_,D.esB,D.eyw,D.eEQ,D.eIC,D.eBN,D.ekz,D.eyH,D.eln,D.eF5,D.eG8,D.ez6,D.eFk,D.emv,D.eGE,D.eqj,D.eEv,D.etv,D.ex1,D.eC6,D.eGP,D.eGG,D.eGL,D.exv,D.eCU,D.eE2,D.eGt,D.ez5,D.evq,D.eue,D.ezv,D.eC_,D.evW,D.ewB,D.eqF,D.eG4,D.err,D.elk,D.etO,D.elf,D.epp,D.etT,D.erA,D.eCk,D.esP,D.eIk,D.eun,D.exp,D.eA_,D.erJ,D.ert],C.ax("bk<m,+(m,m)>"))
D.drC=new C.hC(A.G,11)
D.drH=new C.hC(A.G,30)
D.duZ=new B.Ub(null)
D.dyO=new B.Uf(null)
D.dyP=new B.Ug(null)
D.dz1=new B.Uh(null)
D.dB2=new B.Uk(null)
D.dB3=new B.Ul(null)
D.dB4=new B.Um(null)
D.dBS=new B.UJ(null)
D.dBU=new B.UY(null)
D.dBV=new B.UZ(null)
D.dBX=new B.V_(null)
D.dCu=new B.V6(null)
D.dEp=new B.Va(null)
D.dEq=new B.Vc(null)
D.dEr=new B.Vd(null)
D.dEt=new B.Ve(null)
D.dG3=new B.Vv(null)
D.dG5=new B.Vx(null)
D.dGa=new B.VI(null)
D.dGl=new B.VJ(null)
D.dGR=new B.VK(null)
D.dIl=new B.VM(null)
D.dJJ=new B.VO(null)
D.dJK=new B.VP(null)
D.dL4=new B.VS(null)
D.e_Y=new B.VT(null)
D.e0_=new B.VU(null)
D.e00=new B.VX(null)
D.e01=new B.VY(null)
D.e1V=new B.W5(null)
D.e1W=new B.W6(null)
D.e23=new B.Wd(null)
D.e2c=new B.Wh(null)
D.e2d=new B.Wi(null)
D.e2e=new B.a8h(null)
D.e2P=new B.Wk(null)
D.e4h=new B.Wo(null)
D.e81=new C.v(0,118)
D.aHe=new C.v(0,13)
D.e82=new C.v(0,17)
D.e85=new C.v(0,330)
D.e88=new C.v(0,-13)
D.aHk=new C.v(0,-14)
D.e89=new C.v(0,-17)
D.e8a=new C.v(0,-18)
D.e8b=new C.v(0,-19)
D.e8c=new C.v(0,-20)
D.e8f=new C.v(0,-26)
D.e8g=new C.v(0,-28)
D.e8h=new C.v(0,-31)
D.e8i=new C.v(0,-32)
D.wo=new C.v(0,-6)
D.e8j=new C.v(0,-6771)
D.e8k=new C.v(0,-9)
D.e8m=new C.v(-9.5,-11)
D.e8n=new C.v(10,20)
D.e8p=new C.v(10,-13)
D.e8q=new C.v(10,-22)
D.e8r=new C.v(10,-4)
D.a5O=new C.v(11,8)
D.e8t=new C.v(12,2)
D.e8u=new C.v(14,0)
D.e8v=new C.v(14,12)
D.aHo=new C.v(14,8)
D.e8w=new C.v(14,-17)
D.e8x=new C.v(14,-18)
D.aHp=new C.v(14,-3)
D.aHq=new C.v(14,-4)
D.e8y=new C.v(15,0)
D.e8z=new C.v(15,-12)
D.e8A=new C.v(16,-8)
D.e8B=new C.v(18,14)
D.e8C=new C.v(18,-12)
D.aHu=new C.v(20,0)
D.e8I=new C.v(20,15)
D.e8J=new C.v(20,-17)
D.e8K=new C.v(20,-3)
D.e8L=new C.v(21,8)
D.e8N=new C.v(22,10)
D.aHv=new C.v(22,8)
D.e8O=new C.v(24,0)
D.e8P=new C.v(24,2)
D.e8R=new C.v(24,-18)
D.e8S=new C.v(24,-22)
D.e8T=new C.v(25,8)
D.e8U=new C.v(26,0)
D.e9_=new C.v(28,-30)
D.e94=new C.v(30,18)
D.e95=new C.v(30,2)
D.e96=new C.v(31,19)
D.e97=new C.v(32,0)
D.aHy=new C.v(34,0)
D.aHz=new C.v(34,-32)
D.Il=new C.v(36,0)
D.e9c=new C.v(3,-1)
D.e9f=new C.v(40,3)
D.e9j=new C.v(4,11)
D.e9m=new C.v(4,-2)
D.e9q=new C.v(5,0)
D.e9r=new C.v(5,17)
D.e9s=new C.v(5,6)
D.e9w=new C.v(6,11)
D.e9C=new C.v(8,7)
D.e9D=new C.v(8,-10)
D.e9E=new C.v(8,-14)
D.e9F=new C.v(8,-3)
D.aHD=new C.v(9,0)
D.e9I=new C.v(-20.5,-17.6)
D.e9J=new C.v(-9,18.5)
D.e9M=new C.v(-2.6,-1)
D.e9N=new C.v(1.9,-0.8)
D.e9Q=new C.v(-0.22,0.09)
D.e9V=new C.v(2.6,1)
D.ea1=new C.v(-9,12.2)
D.eaj=new C.v(-9,20.5)
D.eaB=new C.v(-10,0)
D.eaC=new C.v(-10,12)
D.aHK=new C.v(-10,4)
D.eaD=new C.v(-11,-2)
D.eaE=new C.v(-13,-5)
D.eaF=new C.v(-14,0)
D.eaG=new C.v(-14,13)
D.eaH=new C.v(-14,2)
D.eaI=new C.v(-14,-12)
D.eaJ=new C.v(-14,-19)
D.eaK=new C.v(-14,-23)
D.eaL=new C.v(-15,6)
D.eaM=new C.v(-16,14)
D.eaN=new C.v(-16,-8)
D.eaO=new C.v(-17,10)
D.eaP=new C.v(-17,-18)
D.eaQ=new C.v(-17,-8)
D.eaS=new C.v(-18,20)
D.eaT=new C.v(-18,-9)
D.aHM=new C.v(-20,0)
D.eaV=new C.v(-20,16)
D.eaW=new C.v(-20,-9)
D.Sp=new C.v(-22,8)
D.eaX=new C.v(-22,-10)
D.eaY=new C.v(-22,-11)
D.eaZ=new C.v(-24,10)
D.eb_=new C.v(-24,11)
D.eb0=new C.v(-24,14)
D.eb1=new C.v(-24,-22)
D.eb2=new C.v(-25,-11)
D.eb3=new C.v(-26,0)
D.eb4=new C.v(-26,-18)
D.eb5=new C.v(-2,9)
D.eb6=new C.v(-2,-10)
D.eb7=new C.v(-2,-20)
D.eb8=new C.v(-2,-9)
D.eb9=new C.v(-32,0)
D.aHO=new C.v(-34,0)
D.ebe=new C.v(-40,3)
D.ebg=new C.v(-4,11)
D.ebh=new C.v(-4,-17)
D.ebi=new C.v(-4,-2)
D.ebk=new C.v(-5,0)
D.ebl=new C.v(-5,20)
D.ebm=new C.v(-5,6)
D.ebn=new C.v(-6,26)
D.ebo=new C.v(-6,6)
D.ebp=new C.v(-6,-42)
D.ebq=new C.v(-7,-19)
D.ebr=new C.v(-7,-24)
D.ebs=new C.v(-8,-9)
D.a5S=new C.v(-9,0)
D.ebt=new C.v(-9,1)
D.ebu=new C.v(-9,-23)
D.fn0=new C.y("Thinking\u2026",null,A.hh,null,null,null,null,null,null,null,null,null)
D.ecq=new C.D(A.jI,D.fn0,null)
D.fDa=new C.y("Start from a ready-made board",null,A.fT,null,null,null,null,null,null,null,null,null)
D.ecA=new C.D(A7.vG,D.fDa,null)
D.bxw=new C.R(4,0,4,14)
D.fir=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new C.y("Games and little helpers for a spare minute.",null,D.fir,null,null,null,null,null,null,null,null,null)
D.ecL=new C.D(D.bxw,D.fnX,null)
D.fzW=new C.y("Tap to throw in a star",null,A.kK,null,null,null,null,null,null,null,null,null)
D.b6p=new C.cp(A.A,null,null,D.fzW,null)
D.eiF=new C.cL(0,null,0,14,null,null,D.b6p,null)
D.daD=w([A.iE,A.bn],x.O)
D.aMF=new C.bV(A.A,0.5,A.x,null,0,D.daD,null,null)
D.ejn=new C.bV(A.A,0.5,A.x,null,0,D.ayX,null,null)
D.d2_=w([A.c,A.bK],x.O)
D.ejp=new C.bV(A.A,0.5,A.x,null,0,D.d2_,null,null)
D.ejq=new C.bV(A.A,0.5,A.x,null,0,M.axZ,null,null)
D.diI=w([A.bN,A.h7],x.O)
D.aMG=new C.bV(A.A,0.5,A.x,null,0,D.diI,null,null)
D.cHP=w([A.c,A.bN],x.O)
D.eju=new C.bV(A.t8,0.5,A.x,null,0,D.cHP,null,null)
D.bdQ=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bjd=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d11=w([D.bdQ,D.agh,D.bjd],x.O)
D.d8D=w([0,0.7,1],x.n)
D.ejw=new C.bV(A.t8,0.5,A.x,null,0,D.d11,D.d8D,null)
D.cye=w([A.oO,A.aF,A.K],x.O)
D.dfu=w([0.3,0.7,1],x.n)
D.ejy=new C.bV(A.A,0.5,A.x,null,0,D.cye,D.dfu,null)
D.bn3=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgU=w([A.fc,D.bn3],x.O)
D.ejA=new C.bV(A.t8,0.5,A.x,null,0,D.dgU,null,null)
D.cB2=w([A.dt,A.cp],x.O)
D.ejB=new C.bV(A.A,0.5,A.x,null,0,D.cB2,null,null)
D.cXl=w([A.oO,A.aF,A.fl],x.O)
D.ejC=new C.bV(A.A,0.5,A.x,null,0,D.cXl,null,null)
D.cPz=w([A.fK,A.aM,A.d6],x.O)
D.ejE=new C.bV(A.t8,0.5,A.x,null,0,D.cPz,null,null)
D.dbe=w([A.h7,L.mn],x.O)
D.ejF=new C.bV(A.t8,0.5,A.x,null,0,D.dbe,null,null)
D.be3=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bc_=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cZA=w([D.be3,D.bc_],x.O)
D.ejH=new C.bV(A.A,0.5,A.x,null,0,D.cZA,null,null)
D.biC=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgz=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgD=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dl8=w([D.biC,D.bgz,D.bgD],x.O)
D.cW9=w([0,0.65,1],x.n)
D.ejI=new C.bV(M.aay,0.5,A.x,null,0,D.dl8,D.cW9,null)
D.ejJ=new C.bV(A.A,0.5,A.x,null,0,D.avm,null,null)
D.dhT=w([A.lk,A.aF,A.fl],x.O)
D.ejO=new C.bV(A.A,0.5,A.x,null,0,D.dhT,null,null)
D.djA=w([A.h7,A.hM],x.O)
D.ejR=new C.bV(A.A,0.5,A.x,null,0,D.djA,null,null)
D.aMK=new C.aS(9,9)
D.ek_=new C.aS(1.4,1.4)
D.ekJ=new C.z(0,-4)
D.eqg=new C.z(0.22,4)
D.exn=new C.z(0.8,-4)
D.eGH=new C.z(0.58,4)
D.eJq=new C.bl("Moon",1.62,4291941851)
D.eJZ=new C.bl("Neptune",11.15,4284524026)
D.eKC=new C.bl("Sun",274,4294688548)
D.eKS=new C.bl("Mercury",3.7,4288455599)
D.eKY=new C.bl("Earth",9.81,4281908728)
D.eL_=new C.bl("Mars",3.71,4294472049)
D.eLi=new C.bl("Venus",8.87,4294759245)
D.eLo=new C.bl("Saturn",10.44,4294829706)
D.eLL=new C.bl("Jupiter",24.79,4294677052)
D.ePl=new C.a8(10,-8,18,-2)
D.ePm=new C.a8(14,-14,20,14)
D.ePn=new C.a8(20,-2,30,2)
D.ePp=new C.a8(4,-13,30,-3)
D.ePr=new C.a8(8,-7,12,7)
D.ePx=new C.a8(-12,12,12,19)
D.ePy=new C.a8(-12,14,12,22)
D.ePz=new C.a8(-12,-22,12,8)
D.ePA=new C.a8(-12,-25,12,19)
D.ePB=new C.a8(-12,-26,12,-6)
D.ePC=new C.a8(-12,-4,12,14)
D.ePD=new C.a8(-12,-6,10,6)
D.ePE=new C.a8(-14,20,14,24)
D.ePF=new C.a8(-14,6,14,10)
D.ePG=new C.a8(-14,-17,14,15)
D.ePH=new C.a8(-14,-26,14,18)
D.ePI=new C.a8(-14,-4,14,20)
D.ePJ=new C.a8(-15,-29,15,25)
D.ePK=new C.a8(-16,-16,16,16)
D.ePL=new C.a8(-16,-22,-9,18)
D.ePM=new C.a8(-16,-24,16,-10)
D.ePN=new C.a8(-16,-2,16,20)
D.ePP=new C.a8(-18,20,18,24)
D.ePQ=new C.a8(-18,-18,18,20)
D.ePR=new C.a8(-20,12,20,22)
D.ePS=new C.a8(-20,-28,20,26)
D.ePT=new C.a8(-22,14,22,18)
D.aNd=new C.a8(-22,-26,22,24)
D.ePU=new C.a8(-22,-3,22,3)
D.ePV=new C.a8(-22,-4,22,12)
D.ePW=new C.a8(-24,-12,10,22)
D.ePX=new C.a8(-24,-14,22,8)
D.ePY=new C.a8(-24,-6,24,20)
D.aNe=new C.a8(-24,-9,24,9)
D.ePZ=new C.a8(-25,14,25,19)
D.eQ_=new C.a8(-26,-14,14,8)
D.eQ0=new C.a8(-26,-4,26,20)
D.eQ1=new C.a8(-26,-6,4,6)
D.aNf=new C.a8(-28,-13,28,13)
D.eQ2=new C.a8(-28,-16,28,16)
D.eQ3=new C.a8(-28,-16,28,8)
D.eQ4=new C.a8(-28,-22,28,22)
D.eQ5=new C.a8(-30,-12,30,14)
D.eQ6=new C.a8(-30,-14,0,14)
D.eQ7=new C.a8(-30,-18,30,20)
D.eQ8=new C.a8(-30,-28,30,14)
D.eQ9=new C.a8(-30,-2,30,18)
D.eQa=new C.a8(-30,-4,30,18)
D.eQb=new C.a8(-32,-17,32,17)
D.eQc=new C.a8(-32,-28,32,18)
D.eQd=new C.a8(-33,-21,33,17)
D.eQe=new C.a8(-34,14,34,26)
D.a6O=new C.a8(-34,-18,34,18)
D.eQf=new C.a8(-34,-4,34,7)
D.eQg=new C.a8(-36,-24,36,20)
D.eQh=new C.a8(-38,-22,38,22)
D.eQi=new C.a8(-3,12,3,22)
D.eQj=new C.a8(-3,5,3,15)
D.eQl=new C.a8(-46,-34,46,28)
D.eQm=new C.a8(-48,-3,48,3)
D.eQp=new C.a8(-6,18,24,24)
D.eQq=new C.a8(-6,5,6,12)
D.eQr=new C.a8(-6,-22,6,-15)
D.eQs=new C.a8(-9,-16,9,22)
D.eQt=new C.a8(-4.5,-24,4.5,-21.2)
D.eQv=new C.a8(14,-9,17.5,9)
D.e7f={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aO9=new C.dD(D.e7f,5,x.R)
D.e6N={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eTD=new C.dD(D.e6N,10,x.R)
D.eVR=new C.as(24,44)
D.eVW=new C.as(300,300)
D.eWf=new C.as(54,38)
D.eWm=new C.as(66,38)
D.b7I=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eXm=new C.a7(16,16,D.b7I,null)
D.aPa=new C.hQ(3,12,12,0.82,null)
D.fES=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPl=new C.b1(D.fES,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.dbh=w([A.c8,A.bH,A.aZ,A.aO,A.pD,A.c8],x.O)
D.f2h=new C.fY(A.A,0,6.283185307179586,A.x,D.dbh,null,null)
D.fbl=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qs,null,null,null)
D.f3w=new C.eu("You are here (Sun)",null,null,A.cP,null,null,null,null,null,null,D.fbl)
D.aRN=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3x=new C.eu("What we see",null,null,A.cP,null,null,null,null,null,null,D.aRN)
D.f8H=new C.H(!0,A3.L_,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3A=new C.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cP,null,null,null,null,null,null,D.f8H)
D.fdz=new C.H(!0,A.kp,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3G=new C.eu("AI",null,null,A.cP,null,null,null,null,null,null,D.fdz)
D.f8s=new C.H(!0,A.bV,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3H=new C.eu("Add atoms with the buttons below",null,null,A.cP,null,null,null,null,null,null,D.f8s)
D.aQ9=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3Y=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4t=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4N=new C.H(!0,A.cl,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5h=new C.H(!0,A.bV,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5m=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5C=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f65=new C.H(!0,A.aS,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6u=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6E=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUf=new C.cR(A.hP,A.dE,6)
D.d4O=w([D.eUf],x.q)
D.f6Y=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d4O,null,null,null)
D.f70=new C.H(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f73=new C.H(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f75=new C.H(!0,A.bV,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7v=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQy=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7P=new C.H(!0,A.aA,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Q=new C.H(!0,A.bV,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8L=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9L=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUi=new C.cR(A.aW,A.J,3)
D.azb=w([D.eUi],x.q)
D.f9O=new C.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azb,null,null,null)
D.f9T=new C.H(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faz=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qs,null,null,null)
D.fb1=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fba=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbA=new C.H(!0,A.tz,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fca=new C.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new C.H(!0,A.bV,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fck=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcR=new C.H(!0,A.bV,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new C.H(!0,A.n8,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdT=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU5=new C.cR(A.w,A.J,5)
D.cTK=w([D.eU5],x.q)
D.fdU=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTK,null,null,null)
D.fdZ=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azb,null,null,null)
D.fee=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fek=new C.H(!0,A.fA,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feB=new C.H(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff5=new C.H(!0,A.aZ,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffE=new C.H(!0,A.bV,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgh=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRy=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh2=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fha=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRJ=new C.H(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fih=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8P=new C.H(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiG=new C.H(!0,A.tz,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj0=new C.H(!0,A.aZ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjp=new C.y("\u26a0\ufe0f ",null,D.f78,null,null,null,null,null,null,null,null,null)
D.fjB=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fk1=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fl5=new C.y("Pick one, then change it and see what happens.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fl9=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f8d=new C.H(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm3=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f8d,null,null,null,null,null,null,null,null,null)
D.fmq=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a84,null,null,null,null,null,null,null,null,null)
D.fny=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fo9=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hw,null,null,null,null,null,null,null,null,null)
D.foe=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.foN=new C.y("Make it yours",null,A.kj,null,null,null,null,null,null,null,null,null)
D.fp4=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8c,null,null,null,null,null,null,null,null,null)
D.fcv=new C.H(!0,A.jm,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frp=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fcv,null,null,null,null,null,null,null,null,null)
D.frE=new C.y("YOUR DECODING",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.frQ=new C.y("5G",null,U.aQB,null,null,null,null,null,null,null,null,null)
D.feR=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new C.y("WHAT HAPPENS",null,D.feR,null,null,null,null,null,null,null,null,null)
D.fuE=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fvj=new C.y("Change the words and pictures on the three slabs.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fvu=new C.y("All the parts and wires will be removed.",null,A.hJ,null,null,null,null,null,null,null,null,null)
D.fvO=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fxf=new C.y("INTERCEPTED",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fxA=new C.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fy5=new C.y("Remove this part",null,V.aQd,null,null,null,null,null,null,null,null,null)
D.fyn=new C.y("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fel=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new C.y("How the Lab works",null,D.fel,null,null,null,null,null,null,null,null,null)
D.f5O=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyX=new C.y("Electronics Lab",null,D.f5O,null,null,null,null,A.a2,null,1,null,null)
D.fz_=new C.y("?",null,M.aRH,null,null,null,null,null,null,null,null,null)
D.fcp=new C.H(!0,A.aO,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz4=new C.y("Planet Earth",null,D.fcp,null,null,null,null,null,null,null,null,null)
D.fAh=new C.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fAU=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fBc=new C.y("UNIVERSE EXPLORER",null,I.a8a,null,null,null,null,null,null,null,null,null)
D.fDL=new C.y("SECRET VERSION",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fhd=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fhd,null,null,null,null,null,null,null,null,null)
D.fFu=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a84,null,null,null,null,null,null,null,null,null)
D.fFY=new C.y("NGMY",null,A.uX,null,null,null,null,null,null,null,null,null)
D.fGa=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.U5,null,null,null,null,null,null,null,null,null)
D.fGx=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.fHy=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fHA=new C.y("TOOLBOX",null,I.a8a,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hhL=null
$.hhK=null
$.hnP=0
$.hPO=C.U(x.N,x.k)
$.hQo=C.U(x.N,x.k)
$.hh5=null
$.hQ9=C.U(x.N,x.k)
$.hRc=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ilN","bE4",()=>{var v="led"
return C.a([B.ay5("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fiG(),v),B.ay5("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fiH(),v),B.ay5("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fiI(),v),B.ay5("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fiP(),v),B.ay5("Not both","Make the light go OFF only when both switches are ON.",2,new B.fiQ(),v),B.ay5("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fiR(),"buzzer")],C.ax("O<baL>"))})
w($,"ime","bE5",()=>C.a([B.oG("UNIVERSE","Earth, space and gravity",A.Oc,A.aO,new B.fj6()),B.oG("ELECTRONICS LAB","Batteries, wires, real circuits",Af.BR,A.aO,new B.fj7()),B.oG("DISCOVERY LAB","Body Explorer: a real 3D human",D.a0c,A.aZ,new B.fj8()),B.oG("TOOLBOX","Converter, clock, games",T.aly,A.ct,new B.fjj()),B.oG("MOLECULE MAKER","Join atoms into real molecules",A.NE,A.hn,new B.fjl()),B.oG("DNA LAB","Copy DNA, build a protein",D.a0c,A.bU,new B.fjm()),B.oG("ECOSYSTEM LAB","Grass, rabbits and foxes",A.ys,A.aZ,new B.fjn()),B.oG("BALANCE LAB","Levers, weight and torque",D.bIv,A.aM,new B.fjo()),B.oG("GEAR LAB","Teeth, speed and force",A.C0,A.ct,new B.fjp()),B.oG("LASER MAZE","Bend the beam with mirrors",I.alX,A.av,new B.fjq()),B.oG("LIGHT MIXER","Match colours with light",D.bGc,A.b8,new B.fjr()),B.oG("CIPHER LAB","Make and crack secret codes",A.yC,A.aO,new B.fj9()),B.oG("REACTION LAB","Wire parts together",A.yG,A.bv,new B.fja()),B.oG("SPARK PAINTER","Paint with light",A.a0e,A.bU,new B.fjb()),B.oG("ROCKET LANDER","Land softly on the pad",A.nq,A.aO,new B.fjc()),B.oG("ORBIT STUDIO","Slingshot planets",A.mB,A.ct,new B.fjd()),B.oG("SWARM STUDIO","A living school of fish",A.NE,A.aZ,new B.fje()),B.oG("CHAIN BURST","One tap, a whole chain",A.ha,A.bU,new B.fjf()),B.oG("TITLE ANIMATOR","Make a moving title",A.yz,A.bH,new B.fjg()),B.oG("CIRCUIT LAB","Connect logic, learn it",A.a0E,A.cl,new B.fjh()),B.oG("MARBLE MUSIC","Marbles ring the notes",D.bFS,A.b8,new B.fji()),B.oG("ORBIT SEQUENCER","Planets play the tune",D.bIi,A.bu,new B.fjk())],C.ax("O<bsD>")))
w($,"inM","qj",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.QK[v]
t.n(0,u.a,u)}return t})
w($,"ilO","ahR",()=>C.a([B.FC("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fiS()),B.FC("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fiT()),B.FC("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fiU()),B.FC("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fiV()),B.FC("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fiW()),B.FC("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fiJ()),B.FC("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fiK()),B.FC("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fiL()),B.FC("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fiM()),B.FC("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fiN()),B.FC("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fiO())],C.ax("O<baM>")))
w($,"img","hwg",()=>C.a([B.a0N("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fjz()),B.a0N("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c8,A.bz,new B.fjA()),B.a0N("Breathe","Calm down in a minute","\ud83e\udee7",A.hn,A.cA,new B.fjB()),B.a0N("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b6,new B.fjC()),B.a0N("Memory Match","Find the pairs","\ud83c\udccf",A.aO,A.cb,new B.fjD()),B.a0N("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bc,new B.fjE()),B.a0N("Tip & Split","Share the bill","\ud83e\uddfe",A.aZ,A.b0,new B.fjF()),B.a0N("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fjG())],C.ax("O<btY>")))
w($,"imf","hwf",()=>C.a([B.afa("EARTH GLOBE","Turn it, tap a country",A.mB,A.aO,new B.fjs()),B.afa("SOLAR SYSTEM","The Sun and its worlds",D.bFW,A.aM,new B.fjt()),B.afa("GRAVITY LAB","Drop, weigh, orbit",D.amG,A.ct,new B.fju()),B.afa("BLACK HOLE","Throw in a star",A.G1,A.bu,new B.fjv()),B.afa("GALAXY","Build, tilt, collide",A.yg,A.h5,new B.fjw()),B.afa("SIZE COMPARE","Earth next to a star",D.bGe,A.bU,new B.fjx()),B.afa("SEASONS & MOON","Why it is summer",A.vP,A.bv,new B.fjy())],C.ax("O<btT>")))})()};
(a=>{a["GrNEarhgpQc4IJRITb4Rb/Wv/ko="]=a.current})($__dart_deferred_initializers__);