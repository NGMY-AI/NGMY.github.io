((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A9,A1,A2,I,P,A3,Aa,A4,A5,G,Ab,A6,Ac,Y,Ad,Ae,Q,N,Af,Ag,Z,O,V,Ah,Ai,R,M,Aj,W,K,S,Ak,E,F,L,B={
bzd(d){return B.hSN(d)},
hSN(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzd=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qS(C.n7(""),d,A.hD,null,null).d8(0,A.Yt),$async$bzd)
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
return C.i($async$bzd,v)},
i3s(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qg[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h7(D.Qg,new B.fyg())
if(w==null)w=A.d.gI(D.Qg)
s=C.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qj().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajM(w.a,w.b,m,w,s,!1)},
hY7(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.QH,new B.fob(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ibi(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cH(b2,"{")
v=A.a.oE(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aK(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.u(J.q(q,"kind"))
o=C.u(J.q(q,"id"))
if(!$.qj().ai(0,p)||J.f4(s,o)||J.ad(t)>=8)continue
J.ce(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.djH[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dU(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dU(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.ce(t,new C.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.u(J.q(g,0))
e=C.u(J.q(g,2))
d=A.o.D(A.k.N(C.dU(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dU(J.q(g,3))),0,1)
if(J.f4(s,f)&&J.f4(s,e)&&!J.A(f,e))J.ce(i,new C.cA([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gR(a0)
J.ce(a1,C.u(a2))}a3=a1
a0=J.q(u,"title")
a0=C.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mC(a0,C.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.u(a5==null?"":a5)
return new B.ajM(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i22(d){var w,v,u=B.h7U()
d.B(u)
for(w=0;w<60;++w)u.v6(0,0.03333333333333333)
v=u.a
return A.d.b6(v,new B.fv2(u))&&!A.d.d7(v,new B.fv3())},
i21(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qj().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.di0,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(C.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hRn(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i3r(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qj().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QH[u]
if(A.d.b6(w,new B.fyd(s)))if(!C.cS(r,s.b.toLowerCase(),0))v=C.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fye(e),C.S(w).k("a_<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cJ(w,0,new B.fyf())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qj().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajM:function ajM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyg:function fyg(){},
fob:function fob(){},
fv2:function fv2(d){this.a=d},
fv3:function fv3(){},
fyd:function fyd(d){this.a=d},
fye:function fye(d){this.a=d},
fyf:function fyf(){},
Vn:function Vn(d,e){this.c=d
this.a=e},
bjQ:function bjQ(d,e,f,g,h){var _=this
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
e8F:function e8F(d){this.a=d},
e8G:function e8G(d,e,f){this.a=d
this.b=e
this.c=f},
e8H:function e8H(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8O:function e8O(d){this.a=d},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8N:function e8N(d,e,f){this.a=d
this.b=e
this.c=f},
e8P:function e8P(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e8K:function e8K(d){this.a=d},
e8L:function e8L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8Q:function e8Q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e8J:function e8J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8V:function e8V(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8U:function e8U(d){this.a=d},
e8Y:function e8Y(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e90:function e90(d,e){this.a=d
this.b=e},
bzy(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQs,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hlo(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zU,A.L,w,w),A.aB,C.bV(A.fT,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wm,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G3:function G3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uR:function uR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VP:function VP(d){this.a=d},
aE5:function aE5(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fs$=h
_.l6$=i
_.fX$=j
_.ft$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
eoM:function eoM(){},
ep5:function ep5(d){this.a=d},
ep4:function ep4(d,e){this.a=d
this.b=e},
ep6:function ep6(){},
ep7:function ep7(){},
eoO:function eoO(d,e,f){this.a=d
this.b=e
this.c=f},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoF:function eoF(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoI:function eoI(d){this.a=d},
eoJ:function eoJ(d){this.a=d},
eoK:function eoK(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoB:function eoB(d){this.a=d},
eoC:function eoC(d){this.a=d},
eoA:function eoA(d){this.a=d},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoY:function eoY(d){this.a=d},
eoP:function eoP(d){this.a=d},
ep_:function ep_(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e){this.a=d
this.b=e},
ep0:function ep0(d){this.a=d},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
eoS:function eoS(d){this.a=d},
bgP:function bgP(d,e){this.b=d
this.a=e},
aLX:function aLX(){},
bxc:function bxc(){},
cFJ(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cFJ=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qV().jH(0,"assets/data/body3d.bin"),$async$cFJ)
case 3:d=a1
$.hgK=J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aS6(d)
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
e=D.d6Y[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2Z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aYL))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9W(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cFJ,v)},
aRU:function aRU(d,e,f){this.a=d
this.b=e
this.c=f},
a2Z:function a2Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9W:function b9W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ud:function Ud(d){this.a=d},
aCv:function aCv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fs$=s
_.l6$=t
_.fX$=u
_.ft$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dFF:function dFF(d){this.a=d},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFh:function dFh(d,e){this.a=d
this.b=e},
dFi:function dFi(){},
dFG:function dFG(){},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFk:function dFk(d){this.a=d},
dFl:function dFl(){},
dFm:function dFm(d){this.a=d},
dFo:function dFo(d,e){this.a=d
this.b=e},
dFn:function dFn(d){this.a=d},
dFe:function dFe(d,e,f){this.a=d
this.b=e
this.c=f},
dFf:function dFf(d){this.a=d},
dFg:function dFg(d){this.a=d},
dFv:function dFv(d){this.a=d},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFx:function dFx(d,e){this.a=d
this.b=e},
dFy:function dFy(d){this.a=d},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFz:function dFz(d,e){this.a=d
this.b=e},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFA:function dFA(d){this.a=d},
dFs:function dFs(d){this.a=d},
dFB:function dFB(d){this.a=d},
dFr:function dFr(d){this.a=d},
dFC:function dFC(d){this.a=d},
dFq:function dFq(d){this.a=d},
dFD:function dFD(d){this.a=d},
dFp:function dFp(d){this.a=d},
aKZ:function aKZ(){},
aL_:function aL_(){},
c0W:function c0W(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c0X:function c0X(d,e){this.a=d
this.b=e},
c0Y:function c0Y(d){this.a=d},
ay_(d,e,f,g,h){return new B.baE(d,e,f,g,h)},
fZA(d,e,f,g,h,i){return $.hOL.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.cMv(d,e,f,i,g,h))},
y5:function y5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ck:function Ck(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
baE:function baE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhP:function fhP(){},
fhQ:function fhQ(){},
fhR:function fhR(){},
fhY:function fhY(){},
fhZ:function fhZ(){},
fi_:function fi_(){},
Uj:function Uj(d){this.a=d},
aCy:function aCy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fs$=m
_.l6$=n
_.fX$=o
_.ft$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dHQ:function dHQ(d){this.a=d},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHx:function dHx(){},
dHR:function dHR(){},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHt:function dHt(d,e){this.a=d
this.b=e},
dHy:function dHy(d,e,f){this.a=d
this.b=e
this.c=f},
dHn:function dHn(){},
dHo:function dHo(){},
dHp:function dHp(d){this.a=d},
dHq:function dHq(d,e){this.a=d
this.b=e},
dHr:function dHr(d,e,f){this.a=d
this.b=e
this.c=f},
dHz:function dHz(){},
dHA:function dHA(d,e){this.a=d
this.b=e},
dHB:function dHB(d){this.a=d},
dHw:function dHw(d,e){this.a=d
this.b=e},
dHv:function dHv(d){this.a=d},
dHm:function dHm(d,e,f){this.a=d
this.b=e
this.c=f},
dHK:function dHK(d){this.a=d},
dHJ:function dHJ(d){this.a=d},
dHL:function dHL(d){this.a=d},
dHI:function dHI(d){this.a=d},
dHG:function dHG(d){this.a=d},
dHH:function dHH(d){this.a=d},
dHF:function dHF(d){this.a=d},
dHC:function dHC(d){this.a=d},
dHE:function dHE(d){this.a=d},
dHM:function dHM(d,e){this.a=d
this.b=e},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHO:function dHO(d){this.a=d},
dHD:function dHD(d){this.a=d},
dHP:function dHP(d,e){this.a=d
this.b=e},
baX:function baX(d,e){this.b=d
this.a=e},
cMv:function cMv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aL4:function aL4(){},
bwW:function bwW(){},
hFB(){return new B.Nh(null)},
oD(d,e,f,g,h){return new B.bsw(d,e,f,g,h)},
bqW(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
h_5(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nh:function Nh(d){this.a=d},
Kk:function Kk(d,e){this.a=d
this.b=e},
Ax:function Ax(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCP:function aCP(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dNF:function dNF(d,e){this.a=d
this.b=e},
dNE:function dNE(d){this.a=d},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNG:function dNG(d){this.a=d},
bsw:function bsw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fif:function fif(){},
fig:function fig(){},
fih:function fih(){},
fis:function fis(){},
fiu:function fiu(){},
fiv:function fiv(){},
fiw:function fiw(){},
fix:function fix(){},
fiy:function fiy(){},
fiz:function fiz(){},
fiA:function fiA(){},
fii:function fii(){},
fij:function fij(){},
fik:function fik(){},
fil:function fil(){},
fim:function fim(){},
fin:function fin(){},
fio:function fio(){},
fip:function fip(){},
fiq:function fiq(){},
fir:function fir(){},
fit:function fit(){},
bqX:function bqX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZt:function eZt(d){this.a=d},
eZs:function eZs(d,e){this.a=d
this.b=e},
eZq:function eZq(d){this.a=d},
eZu:function eZu(d){this.a=d},
eZr:function eZr(d,e){this.a=d
this.b=e},
aeO:function aeO(d,e,f){this.c=d
this.d=e
this.a=f},
adG:function adG(d,e,f){this.c=d
this.d=e
this.a=f},
PZ:function PZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
brV:function brV(d,e){this.b=d
this.a=e},
brq:function brq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9D:function b9D(d,e){this.b=d
this.a=e},
aH4:function aH4(d,e){this.c=d
this.a=e},
aH5:function aH5(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b4$=f
_.c=_.a=null},
eZ9:function eZ9(d){this.a=d},
eZ8:function eZ8(d){this.a=d},
eZ7:function eZ7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ6:function eZ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ4:function eZ4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ3:function eZ3(d,e,f){this.a=d
this.b=e
this.c=f},
eZ5:function eZ5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZ2:function eZ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZh:function eZh(d){this.a=d},
eZg:function eZg(d){this.a=d},
eZi:function eZi(d,e){this.a=d
this.b=e},
eZj:function eZj(d,e){this.a=d
this.b=e},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZf:function eZf(d,e,f){this.a=d
this.b=e
this.c=f},
eZl:function eZl(d,e,f){this.a=d
this.b=e
this.c=f},
eZe:function eZe(d){this.a=d},
eZa:function eZa(d){this.a=d},
eZm:function eZm(d){this.a=d},
eZn:function eZn(d){this.a=d},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZo:function eZo(d,e){this.a=d
this.b=e},
eZc:function eZc(d,e){this.a=d
this.b=e},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZb:function eZb(d,e){this.a=d
this.b=e},
eZ0:function eZ0(){},
eZ1:function eZ1(){},
bqz:function bqz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq0:function bq0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bai:function bai(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq2:function bq2(d,e,f){this.b=d
this.c=e
this.a=f},
bu0:function bu0(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMO:function aMO(){},
hmP(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.v(w,0)),u=e.aC(0,new C.v(w,0)),t=1-f,s=3*t
return d.aH(0,t*t*t).ad(0,v.aH(0,s*t*f)).ad(0,u.aH(0,s*f*f)).ad(0,e.aH(0,f*f*f))},
bgO(d,e,f,g,h,i){return $.hPl.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.dhu(d,e,f,i,g,h))},
a0d:function a0d(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qM:function qM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Co:function Co(d,e){this.a=d
this.b=e},
Zb:function Zb(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0q:function a0q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cy:function Cy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abx:function abx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abO:function abO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adK:function adK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgM:function bgM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bI$=0},
dhy:function dhy(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhv:function dhv(d,e){this.a=d
this.b=e},
dhw:function dhw(d){this.a=d},
dhx:function dhx(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhB:function dhB(d){this.a=d},
dhC:function dhC(d){this.a=d},
dhD:function dhD(d){this.a=d},
dhE:function dhE(d){this.a=d},
dhF:function dhF(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhH:function dhH(d){this.a=d},
dhI:function dhI(d){this.a=d},
FP:function FP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VO:function VO(d){this.a=d},
aE4:function aE4(d,e,f,g,h,i,j){var _=this
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
eo6:function eo6(d){this.a=d},
enW:function enW(d){this.a=d},
enY:function enY(){},
enZ:function enZ(){},
eo1:function eo1(){},
eo2:function eo2(d,e,f){this.a=d
this.b=e
this.c=f},
eo3:function eo3(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo_:function eo_(){},
eo0:function eo0(d){this.a=d},
eow:function eow(d){this.a=d},
eo5:function eo5(){},
enS:function enS(d){this.a=d},
eo8:function eo8(d){this.a=d},
eo7:function eo7(d){this.a=d},
eoa:function eoa(){},
eo9:function eo9(d,e){this.a=d
this.b=e},
enV:function enV(){},
enT:function enT(d){this.a=d},
enU:function enU(d){this.a=d},
eou:function eou(d){this.a=d},
eot:function eot(d){this.a=d},
eov:function eov(d){this.a=d},
eok:function eok(d,e){this.a=d
this.b=e},
eos:function eos(d){this.a=d},
eoq:function eoq(d){this.a=d},
eor:function eor(d){this.a=d},
eop:function eop(d){this.a=d},
eoo:function eoo(d){this.a=d},
eol:function eol(d){this.a=d},
eom:function eom(d){this.a=d},
eon:function eon(d){this.a=d},
enX:function enX(){},
eog:function eog(d){this.a=d},
eoh:function eoh(d){this.a=d},
eof:function eof(d){this.a=d},
eoi:function eoi(d){this.a=d},
eoe:function eoe(d){this.a=d},
eoj:function eoj(d){this.a=d},
eod:function eod(d){this.a=d},
eoc:function eoc(d){this.a=d},
eob:function eob(d,e){this.a=d
this.b=e},
bgN:function bgN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhu:function dhu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLV:function aLV(){},
blm:function blm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PQ:function PQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W2:function W2(d){this.a=d},
bkq:function bkq(d,e,f,g,h,i,j,k){var _=this
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
eAb:function eAb(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(){},
ezN:function ezN(){},
ezM:function ezM(){},
ezW:function ezW(d,e){this.a=d
this.b=e},
ezY:function ezY(d){this.a=d},
eA1:function eA1(d){this.a=d},
ezX:function ezX(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA3:function eA3(d){this.a=d},
eA4:function eA4(d,e){this.a=d
this.b=e},
ezV:function ezV(d,e){this.a=d
this.b=e},
eA5:function eA5(d){this.a=d},
ezU:function ezU(d){this.a=d},
eA6:function eA6(d,e){this.a=d
this.b=e},
ezT:function ezT(d,e){this.a=d
this.b=e},
eA7:function eA7(d){this.a=d},
ezS:function ezS(d,e){this.a=d
this.b=e},
eA8:function eA8(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
eA_:function eA_(d){this.a=d},
ezP:function ezP(d){this.a=d},
eA0:function eA0(d,e){this.a=d
this.b=e},
ezO:function ezO(d,e){this.a=d
this.b=e},
brQ:function brQ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
We:function We(d){this.a=d},
aEk:function aEk(d,e,f,g){var _=this
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
eGL:function eGL(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e,f){this.a=d
this.b=e
this.c=f},
eGN:function eGN(d){this.a=d},
eGK:function eGK(){},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGI:function eGI(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
aM3:function aM3(){},
aM9:function aM9(){},
a_I:function a_I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VL:function VL(d){this.a=d},
aDX:function aDX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fs$=h
_.l6$=i
_.fX$=j
_.ft$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ekC:function ekC(d){this.a=d},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekq:function ekq(d,e){this.a=d
this.b=e},
ekr:function ekr(d){this.a=d},
eko:function eko(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekn:function ekn(d){this.a=d},
eks:function eks(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
eku:function eku(d){this.a=d},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekv:function ekv(d){this.a=d},
ekk:function ekk(d,e){this.a=d
this.b=e},
ekw:function ekw(d){this.a=d},
ekj:function ekj(d){this.a=d},
ekx:function ekx(d){this.a=d},
eki:function eki(d){this.a=d},
eky:function eky(d){this.a=d},
ekh:function ekh(d){this.a=d},
ekz:function ekz(d){this.a=d},
ekA:function ekA(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekg:function ekg(d){this.a=d},
ekt:function ekt(d){this.a=d},
bl9:function bl9(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abE:function abE(d,e,f){this.a=d
this.b=e
this.c=f},
W9:function W9(d){this.a=d},
bkv:function bkv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fs$=i
_.l6$=j
_.fX$=k
_.ft$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eGb:function eGb(d){this.a=d},
eG1:function eG1(d,e){this.a=d
this.b=e},
eG2:function eG2(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFR:function eFR(d){this.a=d},
eG3:function eG3(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eG5:function eG5(d){this.a=d},
eFW:function eFW(d){this.a=d},
eG6:function eG6(d){this.a=d},
eFV:function eFV(d,e){this.a=d
this.b=e},
eG7:function eG7(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eG8:function eG8(d){this.a=d},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eFP:function eFP(d,e){this.a=d
this.b=e},
eGa:function eGa(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
bsI:function bsI(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ac6:function ac6(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Uh:function Uh(d){this.a=d},
aCx:function aCx(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fs$=h
_.l6$=i
_.fX$=j
_.ft$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dGZ:function dGZ(d){this.a=d},
dGY:function dGY(d,e){this.a=d
this.b=e},
dH_:function dH_(){},
dH0:function dH0(d){this.a=d},
dGP:function dGP(d,e){this.a=d
this.b=e},
dGS:function dGS(d){this.a=d},
dGR:function dGR(d,e){this.a=d
this.b=e},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGW:function dGW(d,e,f){this.a=d
this.b=e
this.c=f},
dGV:function dGV(d){this.a=d},
dGT:function dGT(d){this.a=d},
dGU:function dGU(d){this.a=d},
dGX:function dGX(d){this.a=d},
baD:function baD(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cM2:function cM2(d){this.a=d},
aL2:function aL2(){},
bwV:function bwV(){},
aLS:function aLS(){},
bxb:function bxb(){},
aM6:function aM6(){},
bxj:function bxj(){},
FL:function FL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acW:function acW(d,e,f){this.a=d
this.b=e
this.c=f},
VF:function VF(d){this.a=d},
bk4:function bk4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fs$=i
_.l6$=j
_.fX$=k
_.ft$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eg5:function eg5(d,e){this.a=d
this.b=e},
egu:function egu(d){this.a=d},
egj:function egj(d){this.a=d},
ega:function ega(d){this.a=d},
egk:function egk(d,e){this.a=d
this.b=e},
egl:function egl(d){this.a=d},
eg9:function eg9(d){this.a=d},
egh:function egh(d){this.a=d},
egi:function egi(d){this.a=d},
egg:function egg(d){this.a=d},
egm:function egm(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
egn:function egn(d,e){this.a=d
this.b=e},
ege:function ege(d,e){this.a=d
this.b=e},
ego:function ego(d,e){this.a=d
this.b=e},
egd:function egd(d,e){this.a=d
this.b=e},
egp:function egp(d){this.a=d},
egc:function egc(d,e){this.a=d
this.b=e},
egq:function egq(d){this.a=d},
egb:function egb(d){this.a=d},
egr:function egr(d){this.a=d},
eg8:function eg8(d){this.a=d},
egs:function egs(d){this.a=d},
eg7:function eg7(d){this.a=d},
egt:function egt(d){this.a=d},
eg6:function eg6(d){this.a=d},
bhH:function bhH(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adr:function adr(d,e){this.a=d
this.b=e
this.c=-1000},
VK:function VK(d){this.a=d},
aDW:function aDW(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fs$=h
_.l6$=i
_.fX$=j
_.ft$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ek_:function ek_(d,e){this.a=d
this.b=e},
ek0:function ek0(d,e,f){this.a=d
this.b=e
this.c=f},
ek7:function ek7(d){this.a=d},
ek6:function ek6(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
ek9:function ek9(d){this.a=d},
ek5:function ek5(d){this.a=d},
eka:function eka(d){this.a=d},
ek4:function ek4(d,e){this.a=d
this.b=e},
ekb:function ekb(d,e){this.a=d
this.b=e},
ek3:function ek3(d,e){this.a=d
this.b=e},
ekc:function ekc(d,e){this.a=d
this.b=e},
ek2:function ek2(d,e){this.a=d
this.b=e},
ekd:function ekd(d){this.a=d},
eke:function eke(d){this.a=d},
ek1:function ek1(d){this.a=d},
ekf:function ekf(d){this.a=d},
bla:function bla(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLQ:function aLQ(){},
bx9:function bx9(){},
aLR:function aLR(){},
bxa:function bxa(){},
fe7(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8I,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ik,w,w,1/0)},
i3R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e5(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bM(0,new B.fyy(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.wf.h(0,d[n]).a)return!1
m=C.ev([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h1E(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cH(w,v[0])*16+A.a.cH(w,v[1])*4+A.a.cH(w,v[2])]},
tl:function tl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9w:function b9w(d,e){this.a=d
this.b=e},
fyy:function fyy(d,e){this.a=d
this.b=e},
VI:function VI(d){this.a=d},
aDU:function aDU(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
eju:function eju(d){this.a=d},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejg:function ejg(d,e){this.a=d
this.b=e},
eja:function eja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ejb:function ejb(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
eje:function eje(d,e){this.a=d
this.b=e},
ejc:function ejc(d){this.a=d},
ejd:function ejd(d,e){this.a=d
this.b=e},
ejo:function ejo(){},
ejp:function ejp(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejl:function ejl(d,e){this.a=d
this.b=e},
ejh:function ejh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejj:function ejj(d){this.a=d},
ejr:function ejr(d,e){this.a=d
this.b=e},
eji:function eji(d,e){this.a=d
this.b=e},
ejs:function ejs(d,e){this.a=d
this.b=e},
bio:function bio(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dpE:function dpE(d,e){this.a=d
this.b=e},
UG:function UG(d){this.a=d},
bjk:function bjk(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dPJ:function dPJ(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPx:function dPx(){},
dPz:function dPz(d){this.a=d},
dPw:function dPw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPH:function dPH(){},
dPC:function dPC(){},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPG:function dPG(d,e){this.a=d
this.b=e},
UW:function UW(d){this.a=d},
aD0:function aD0(d,e,f,g,h){var _=this
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
dSy:function dSy(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSl:function dSl(){},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dSq:function dSq(d){this.a=d},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSr:function dSr(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSt:function dSt(d){this.a=d},
dSu:function dSu(d){this.a=d},
dSv:function dSv(d){this.a=d},
dSw:function dSw(d){this.a=d},
bdI:function bdI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d4L:function d4L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4N:function d4N(d,e,f){this.a=d
this.b=e
this.c=f},
d4M:function d4M(d,e){this.a=d
this.b=e},
aLg:function aLg(){},
bA3(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8I,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ik,w,w,1/0)},
frE(d,e,f,g,h){var w,v,u=null,t=C.h4(u,u,u,u,C.d3(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dP,A.c5)
t.en()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.v(v/2,w.gbd(w)/2))
t.a4(d,w)},
i0U(){var w,v,u,t,s,r,q,p,o=new C.eE()
o.dt(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.am(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.av(5)
if(r.L(0,p))q.push(new C.z(p,1+o.av(2+A.o.am(t,3))))}A.d.aZ(q,new B.fsE())
w.push(new B.aRK(q))}return w},
a1E(d,e){var w,v,u,t
for(w=new C.Xh(d),v="";w.C();){u=C.jK(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jK(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
idG(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Xh(d),v=0,u="";w.C();){t=C.jK(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jK(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRK:function aRK(d){this.a=d},
bG3:function bG3(){},
fsE:function fsE(){},
U8:function U8(d){this.a=d},
biZ:function biZ(d,e,f,g,h,i){var _=this
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
dD9:function dD9(){},
dDm:function dDm(d){this.a=d},
dDl:function dDl(d,e,f){this.a=d
this.b=e
this.c=f},
dDn:function dDn(d){this.a=d},
dDk:function dDk(d,e){this.a=d
this.b=e},
dDa:function dDa(d,e){this.a=d
this.b=e},
dDf:function dDf(){},
dDg:function dDg(d){this.a=d},
dDe:function dDe(d){this.a=d},
dDh:function dDh(d,e){this.a=d
this.b=e},
dDd:function dDd(d,e){this.a=d
this.b=e},
dDi:function dDi(d,e){this.a=d
this.b=e},
dDc:function dDc(d,e){this.a=d
this.b=e},
dDj:function dDj(d){this.a=d},
dDb:function dDb(d){this.a=d},
b9I:function b9I(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cEA:function cEA(d,e){this.a=d
this.b=e},
V9:function V9(d){this.a=d},
bjw:function bjw(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dWB:function dWB(d){this.a=d},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWC:function dWC(d){this.a=d},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWr:function dWr(d,e,f){this.a=d
this.b=e
this.c=f},
dWv:function dWv(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWx:function dWx(d){this.a=d},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWy:function dWy(d,e){this.a=d
this.b=e},
bfb:function bfb(d,e,f){this.b=d
this.c=e
this.a=f},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ui:function Ui(d){this.a=d},
bjb:function bjb(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dHl:function dHl(d){this.a=d},
dHk:function dHk(d,e){this.a=d
this.b=e},
dH3:function dH3(){},
dHc:function dHc(d){this.a=d},
dHb:function dHb(){},
dHd:function dHd(d){this.a=d},
dHa:function dHa(){},
dHe:function dHe(d){this.a=d},
dH9:function dH9(d){this.a=d},
dHf:function dHf(d){this.a=d},
dH8:function dH8(d){this.a=d},
dHg:function dHg(d){this.a=d},
dH7:function dH7(d){this.a=d},
dHh:function dHh(d,e){this.a=d
this.b=e},
dH6:function dH6(d,e){this.a=d
this.b=e},
dHi:function dHi(d){this.a=d},
dH5:function dH5(d,e){this.a=d
this.b=e},
dHj:function dHj(d){this.a=d},
dH4:function dH4(d,e){this.a=d
this.b=e},
aKV:function aKV(){},
aLo:function aLo(){},
hrT(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcn()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h7U(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4k(w,v,u,A.cG,C.U(x.N,x.y))},
hzs(d,e,f){var w=d.c,v=e===0?-1:1
return new C.v(w*f.a+v*B.h7V(d),d.d*f.b)},
h7V(d){return 42+(D.m1.ai(0,d.b)?(d.ch-1)*38:0)},
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
aac:function aac(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abj:function abj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4k:function a4k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMs:function bMs(){},
bMD:function bMD(d){this.a=d},
bMy:function bMy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bME:function bME(d){this.a=d},
bMF:function bMF(d){this.a=d},
bMH:function bMH(d){this.a=d},
bMI:function bMI(d){this.a=d},
bMG:function bMG(d){this.a=d},
bMJ:function bMJ(d,e,f){this.a=d
this.b=e
this.c=f},
bMK:function bMK(d){this.a=d},
bMu:function bMu(d){this.a=d},
bMv:function bMv(d){this.a=d},
bMt:function bMt(d){this.a=d},
bMw:function bMw(d,e,f){this.a=d
this.b=e
this.c=f},
bMx:function bMx(d){this.a=d},
bMr:function bMr(d){this.a=d},
bML:function bML(d,e){this.a=d
this.b=e},
bMz:function bMz(d,e){this.a=d
this.b=e},
bMC:function bMC(d){this.a=d},
bMB:function bMB(d){this.a=d},
bMA:function bMA(d){this.a=d},
aiz:function aiz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHf:function bHf(){},
bHg:function bHg(){},
mC:function mC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clh:function clh(d){this.a=d},
ibe(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fJU(),c9=new B.fJW(),d0=new B.fJX(),d1=new B.fJV(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bL,A.bK))
d3.bE(D.eag,D.e83,c9.$2(A.dB,1.4))
d3.bE(D.e7U,D.e7T,c9.$2(A.bq,2.4))
d3.bE(D.e7V,Y.aHh,c9.$2(A.bq,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Rt
d3.af(D.e7E,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.v(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aN7,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.bq))
d3.af(A.cJ,13,c8.$1(c7?A.aN.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.jb(0,d4.y*0.6)
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
r.delete()}}d3.af(D.eac,2.4,c8.$1(c7?A.bc:A.ak))
d3.af(D.eaU,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.ec))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bE())
d3.aQ(q,c8.$1(A.f9.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.av.j(0.7)))}d3.aQ(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.jb(0,d4.y)
d3.bE(D.a5L,D.aHx,c9.$2(A.bN,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f1).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.ir,3,c8.$1(c7?A.bc:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3v[m]
r=c9.$2(A.bq,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.ch(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c0(p),r)
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
d3.aQ(w,d1.$3(D.ePf,A.aM,A.d5))
d3.b0(D.eOF,c8.$1(A.dy))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.jb(0,d4.y*2)
d3.bE(A.J,D.e7Y,c9.$2(A.bN,2.4))
d3.bE(A.a5K,D.e7X,c9.$2(A.hM,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dQ.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.bM.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.ePl,A.bn,A.ct))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aQ(k,c8.$1(A.ec))
d3.af(D.e81,7,c8.$1(c7?A.c:A.dy))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.mm))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.bY:D.biM
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bY.j(0.35))
t.z=A.lw
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.eam,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.ePr,A.bN,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.jb(0,d4.y*0.5)
d3.hY(C.ch(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.mm))
if(c7)d6.$5(d3,"0:"+A.a.aW(A.o.u(59-A.o.E(A.k.bm(d5),60)),2,"0"),D.e82,A.b2,6.5)
d3.af(D.e8e,4,c8.$1(A.dy))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Si,10,c8.$1(c7?A.bH:A.bq))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.jb(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eaW,A.c,16)
d2.restore()
d3.af(A.kc,6,c8.$1(A.d_))
d3.af(A.kc,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.Si,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c0(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.eal,D.eaS,c9.$2(A.bq,4))
d2=d3.a
J.by(d2.save())
d3.jb(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.ePg,A.bN,A.ak))
d3.af(D.aHj,8,c8.$1(A.aw))
d3.af(D.aHj,4.5,c8.$1(c7?A.aN:A.ct))
d3.af(D.eaj,2.2,c8.$1(c7&&A.o.E(A.k.bm(d5*1.6),2)===0?A.av:A.ks))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eau,A.av,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.ePo,A.iZ,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.v(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b0(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.b0(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bY))}d3.af(D.eaf,4,c8.$1(A.aW))
d3.af(D.e7Z,2.4,c8.$1(A.av))
d3.af(D.e8b,2.4,c8.$1(A.bc))
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
h.e=null}}d3.aQ(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e8_,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eay,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.eao,3,c8.$1(c7?A.bc:A.bq))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b0(D.ePi,c8.$1(F.to))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.tf(0,-1,1)
d3.hY(C.ch(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.cc))
d3.af(D.e8G,1.2,c8.$1(A.w))
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
d3.aQ(e,d1.$3(D.ePM,A.c,A.bz))
d3.b0(D.ePL,c8.$1(c7?A.dQ:A.bq))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aQ(s,c8.$1(A.es))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.Rt
d3.af(D.e7F,14,d2)}return!0
case"discoball":d3.bE(D.e7K,K.aHf,c9.$2(A.dy,1.4))
d3.af(A.J,16,d1.$3(D.eP3,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d7W[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.eP1,A.cr,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.eOV,A.aL,A.bK))
d3.bE(D.e7J,D.e7L,c9.$2(A.bq,1.6))
d3.af(D.e7M,2.2,c8.$1(c7?A.av:A.bq))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3x[m]
if(c7)t=a1?A.b8:A.f3
else t=A.ct
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.jb(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a5H,c9.$2(A.bK,4))
d2.restore()
d3.bE(D.ea8,D.eas,c9.$2(A.bK,4))
d3.b0(D.ePK,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayf[m]+1,d2,10,14,2)
p=C.aq(A.bM,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.et(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.ePh,A.bN,A.bn))
for(m=0;m<2;++m){l=D.ayf[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.aw).H()
t.drawRRect(C.et(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mJ
r=s.H()
t.drawRRect(C.et(d2),r)
r.delete()}}d3.bE(D.e8i,D.e8z,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.ct))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mS(1,a3,0.8,1).iL():A.ec
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mJ
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dy))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.eP6,A.cA,A.Lh))
d3.af(D.eaz,8,c8.$1(A.qW))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.jb(0,d4.y)
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
d3.aQ(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fW).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e97,3.2,c8.$1(A.fW.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.jb(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.ePj,A.iV,A.tr))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.ec))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mJ
d3.af(D.e8d,8,d2)}return!0
case"headphones":d3.fa(C.ch(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bq,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QU[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bu,A.pF).H()
d2.drawRRect(C.et(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.v(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c0(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.v(-4,-8-A.k.E(d5*14,8)),A.kn,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.eP_,A.dy,A.ec))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.T(Date.now(),0,!1)
d6.$5(d3,A.a.aW(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aW(A.o.u(C.h3(a4)),2,"0"),D.e7Q,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Et,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new C.v(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bm(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.mm))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(a5),$.pz(),!0)
d2.translate(-27,-19)
E.La(d3,D.eVy,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vo))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dL,A.dc))
d3.aE(a6,c9.$2(A.b_,1.2))
d3.af(D.aHE,9,c8.$1(A.aw))
d3.af(D.aHE,6,c9.$2(A.d5,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e9b,s,8.2)
d3.af(D.e84,2.4,c8.$1(c7?A.bc:A.aJ))
d6.$5(d3,"IN",D.eat,A.ad,6)
d6.$5(d3,"OUT",D.e9_,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bK,A.av,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e7G,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.eOW,A.ec,A.hJ))
d6.$5(d3,"7805",D.a5L,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.ddX[m]-1
r=c8.$1(A.e3).H()
d2.drawRect(C.c0(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.eaV,A.bk,9)
return!0
case"diode":d3.bE(D.aHI,D.aHs,c9.$2(A.e3,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b0(D.eOL,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.jv
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.eah,A.aA,8)
return!0
case"ldr":d3.bE(D.aHI,D.a5L,c9.$2(A.e3,2.4))
d3.bE(D.aHx,D.aHs,c9.$2(A.e3,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.tA,1.6))
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
a8.e=null}d3.aQ(a8,c9.$2(A.bM,1.4))
d2=C.aq(A.bq,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.v(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ea9,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eb
break A}if("sonytv"===d2){t=A.qR
break A}if("appletv"===d2){t=A.e3
break A}t=F.Ev
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
p.clipRRect(C.et(a5),$.pz(),!0)
p.translate(t,s)
E.h43(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e8A,1.6,c8.$1(A.b2))}else{d3.aE(a5,c8.$1(D.vo))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aQ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dy))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.mH[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dy).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e9N,A.bN,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.X9))
d6.$5(d3,"Apple TV",D.e9c,A.bq,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bhg))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eaR,F.to,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m1.h(0,d2)
b1=b0.b===D.ws
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
t.clipRRect(C.et(a5),$.pz(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.La(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vo))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.v(0,t),new C.v(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.v(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.ec))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bN))
if(c7){d6.$5(d3,"NGMY",D.eaY,A.aw,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c0(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aHd,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.ePs,A.cr,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b8),$.pz(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.La(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vo))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.X9))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.ePw,A.bL,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b9),$.pz(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.La(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vo))
d3.af(D.aH8,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.X9))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.eb))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c0),$.pz(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.La(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vo))
d3.b0(D.ePC,c8.$1(A.bn))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dy))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c1),$.pz(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.La(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.ePk,A.iC,A.dy))
d3.af(D.aHi,7,c8.$1(A.aw))
d3.af(D.aHi,4,c8.$1(c7?A.dQ:A.ct))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.mm))
d3.aE(c2,c9.$2(A.bq,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cW(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aQ(c3,c9.$2(A.aN,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.v(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bm(d5*2),5)),D.e98,A.c,10)
d6.$5(d3,"km/h",D.e95,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dy,A.ec))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c5),$.pz(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.La(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lw
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bE(D.eaD,D.eaI,c9.$2(A.bn,4))
d3.bE(D.e8B,D.e8J,c9.$2(A.bn,4))
return!0}return!1},
fJU:function fJU(){},
fJW:function fJW(){},
fJX:function fJX(){},
fJV:function fJV(){},
h6K(d,e,f,g){return new B.aix(d,g,f,e)},
FA(d,e,f){return new B.baF(d,e,f)},
aix:function aix(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiy:function aiy(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fs$=h
_.l6$=i
_.fX$=j
_.ft$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bGU:function bGU(d,e){this.a=d
this.b=e},
bGV:function bGV(d){this.a=d},
bGT:function bGT(d){this.a=d},
bGW:function bGW(){},
bGX:function bGX(d){this.a=d},
bGY:function bGY(d,e,f){this.a=d
this.b=e
this.c=f},
bGS:function bGS(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGR:function bGR(d,e,f){this.a=d
this.b=e
this.c=f},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGL:function bGL(){},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGN:function bGN(d,e){this.a=d
this.b=e},
bGO:function bGO(d){this.a=d},
bGP:function bGP(d){this.a=d},
bHc:function bHc(d){this.a=d},
bHd:function bHd(){},
bGn:function bGn(){},
bHe:function bHe(d,e){this.a=d
this.b=e},
bHb:function bHb(d,e,f){this.a=d
this.b=e
this.c=f},
bH6:function bH6(d){this.a=d},
bH3:function bH3(d,e,f){this.a=d
this.b=e
this.c=f},
bH4:function bH4(d,e){this.a=d
this.b=e},
bH7:function bH7(d){this.a=d},
bH1:function bH1(d,e){this.a=d
this.b=e},
bH2:function bH2(d,e){this.a=d
this.b=e},
bH5:function bH5(d){this.a=d},
bH8:function bH8(d){this.a=d},
bH_:function bH_(d,e){this.a=d
this.b=e},
bH0:function bH0(d,e){this.a=d
this.b=e},
bH9:function bH9(d){this.a=d},
bGZ:function bGZ(d){this.a=d},
bHa:function bHa(d){this.a=d},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGI:function bGI(d,e){this.a=d
this.b=e},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGv:function bGv(d){this.a=d},
bGt:function bGt(d){this.a=d},
bGw:function bGw(d,e,f){this.a=d
this.b=e
this.c=f},
bGs:function bGs(d,e){this.a=d
this.b=e},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGA:function bGA(d,e){this.a=d
this.b=e},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGC:function bGC(d,e,f){this.a=d
this.b=e
this.c=f},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGD:function bGD(d,e,f){this.a=d
this.b=e
this.c=f},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGE:function bGE(d,e,f){this.a=d
this.b=e
this.c=f},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGF:function bGF(d){this.a=d},
bGG:function bGG(d){this.a=d},
bGx:function bGx(d){this.a=d},
bGy:function bGy(d){this.a=d},
baF:function baF(d,e,f){this.a=d
this.b=e
this.c=f},
fi0:function fi0(){},
fi1:function fi1(){},
fi2:function fi2(){},
fhO:function fhO(){},
fi3:function fi3(){},
fhN:function fhN(){},
fi4:function fi4(){},
fhS:function fhS(){},
fhM:function fhM(){},
fhT:function fhT(){},
fhL:function fhL(){},
fhU:function fhU(){},
fhK:function fhK(){},
fhV:function fhV(){},
fhI:function fhI(){},
fhJ:function fhJ(){},
fhW:function fhW(){},
fhG:function fhG(){},
fhH:function fhH(){},
fhX:function fhX(){},
fhF:function fhF(){},
UX:function UX(d){this.a=d},
aD1:function aD1(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSP:function dSP(d){this.a=d},
dSQ:function dSQ(){},
dSR:function dSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSS:function dSS(){},
dSF:function dSF(d){this.a=d},
dSE:function dSE(d,e,f){this.a=d
this.b=e
this.c=f},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSC:function dSC(){},
dSO:function dSO(d){this.a=d},
dSN:function dSN(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(){},
dSM:function dSM(d,e,f){this.a=d
this.b=e
this.c=f},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSI:function dSI(){},
dSU:function dSU(d){this.a=d},
dSV:function dSV(d,e){this.a=d
this.b=e},
dST:function dST(){},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
ax8:function ax8(d,e){this.c=d
this.a=e},
b8R:function b8R(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cC7:function cC7(d){this.a=d},
b8Q:function b8Q(d,e){this.b=d
this.a=e},
cC6:function cC6(d){this.a=d},
axr:function axr(){},
axs:function axs(){},
aJr:function aJr(){},
bwY:function bwY(){},
ibf(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.wl,23)
$.W()
b8=C.N()
b8.r=A.aw.gp(0)
b9.af(A.wl,25,b8)
b8=C.N()
b8.sar(D.eiX.aw(0,v))
b9.af(A.wl,23,b8)
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
r.d=A.bS
b9.bE(A.wl,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.af(A.wl,3,r)
c2.$5(b9,w?"V":"A",D.eaL,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eae,A.aw,9.5)
return!0
case"fan":b8=C.bx(D.eOS,A.hF)
$.W()
s=C.N()
s.r=A.bq.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.b0(D.ePD,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wm,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.ch(A.aHc,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fW.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c0(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bm.gp(0)
b9.af(D.wm,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wm,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jl.gp(0)
b9.af(D.wm,14,b8)
return!0
case"speaker":l=C.bx(D.aN7,A.uJ)
$.W()
b8=C.N()
b8.sar(D.ap2.aw(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.ejj.aw(0,C.bU(A.cC,15)))
b9.af(A.cC,14+k,b8)
b8=C.N()
b8.r=A.dy.gp(0)
b9.af(A.cC,5,b8)
b8=C.N()
b8.r=A.bn.gp(0)
b9.af(D.aHe,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e8h,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bY.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c0(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.ePv,A.uJ)
$.W()
b8=C.N()
b8.sar(D.bYl.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.aN9,A.iu)
s=C.N()
s.r=A.hJ.gp(0)
b9.aE(b8,s)
if(b7){i=new C.T(Date.now(),0,!1)
h=C.BX(i)<500?":":" "
g=A.a.aW(A.o.u(C.dk(i)),2,"0")
f=A.a.aW(A.o.u(C.h3(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.b0(D.aN9,b8)
c2.$5(b9,g+h+f,D.eaw,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.eav,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e8l,2.4,b8)
return!0
case"calculator":j=C.bx(D.ePb,A.he)
$.W()
b8=C.N()
b8.sar(D.bY5.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.eP5,A.hd)
s=C.N()
s.r=(b7?A.Xl:D.bjj).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ead,A.Wd,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.SO)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cc:A.bN).gp(0)
n=p.H()
b8.drawRRect(C.et(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eP2,A.he)
$.W()
b8=C.N()
b8.r=L.mm.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.agA.gp(0)
b9.aE(j,b8)
a0=C.bx(D.eOU,A.hF)
if(b7){b8=C.N()
b8.sar(D.bZE.aw(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.et(a0),$.pz(),!0)
b8.translate(-12,-25)
E.La(b9,D.eV9,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eOR,A.hd)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.b0(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e9v,A.c,6)}else{b8=C.N()
b8.r=D.vo.gp(0)
b9.aE(a0,b8)}b8=C.bx(D.ePN,D.ejs)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bx(D.ePu,A.qr)
$.W()
b8=C.N()
b8.sar(D.bYC.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QU[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.ct.gp(0)
r.c=4
r.d=A.bS
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bc:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.wm,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hm.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c0(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.ePa,A.hF)
s=$.W()
r=C.N()
r.r=A.ec.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.av.j(0.5*a5).gp(0)
b8.z=A.zc
b9.af(A.wl,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cW(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.es,D.bbA,a5).gp(0)
b9.aQ(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bW.gp(0)
b9.aQ(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.jb(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aHe,s)
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
q.sar(D.bWH.aw(0,D.ePn))
b9.aQ(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bE())
p=C.N()
p.r=A.f9.gp(0)
b9.aQ(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bE())
s=C.N()
s.r=A.f9.gp(0)
b9.aQ(r,s)
for(a2=0;a2<2;++a2){a3=F.ayg[a2]
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
r.sar(D.bXM.aw(0,D.eP9))
b9.aQ(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e3.gp(0)
b9.aQ(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cW(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.aw.gp(0)
b9.aQ(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.ty,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ec
b8.r=s.gp(0)
b9.b0(D.eP8,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lw
b9.af(A.aHa,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aw.gp(0)
b9.af(D.e7D,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ao,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bE())
s=C.N()
s.r=A.dQ.j(0.28*u).gp(0)
b9.aQ(b8,s)
s=C.N()
s.r=A.dQ.j(0.5*u).gp(0)
s.z=Z.HM
b9.af(D.eaA,24,s)}b8=C.bx(D.ePJ,A.hF)
s=$.W()
r=C.N()
r.r=A.ec.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.e7R,D.aHk,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.aHk,D.eaB,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k_).gp(0)
b9.aQ(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.af(D.eaC,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cW(0,22,34,-6))
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
b3.r=D.a2y[u].j(0.6).gp(0)
b3.z=A.Rt
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
if(b2)o=D.a2y[u]
else{o=C.aq(D.a2y[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.ibe(b9,c0,c1,c2)},
fO:function fO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h27(d){var w=D.m1.h(0,d)
return(w==null?null:w.b)===D.zC},
icq(d,e,f){return C.a6(d,!1).cm(C.uK(null,!1,!0,!0,new B.fOA(e,f),A.eM,null,A.pU,new B.fOB(),x.H))},
Jh:function Jh(d,e){this.a=d
this.b=e},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOA:function fOA(d,e){this.a=d
this.b=e},
fOB:function fOB(){},
UE:function UE(d,e,f){this.c=d
this.d=e
this.a=f},
bji:function bji(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dOC:function dOC(d){this.a=d},
dOB:function dOB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOz:function dOz(){},
dOA:function dOA(d){this.a=d},
dOy:function dOy(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOv:function dOv(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOp:function dOp(d){this.a=d},
dOt:function dOt(d,e,f){this.a=d
this.b=e
this.c=f},
dOs:function dOs(d){this.a=d},
dOr:function dOr(d){this.a=d},
bv1:function bv1(d,e,f){this.b=d
this.c=e
this.a=f},
aex:function aex(d,e,f){this.b=d
this.c=e
this.a=f},
aLd:function aLd(){},
fmT(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zU,A.L,w,w),A.aB,C.bV(A.fT,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wm,w,u,v,w,w,A.n),w,w,w,A.ez,A.a9,w,w,w),w,w,w)},
h2f(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eE()
b4.dt(b5*977+13)
w=A.o.D(1+A.o.am(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.av(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.U(u,t)
m=w
l=0
k=N.nx
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
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.am(b5,8),2,4)
a9=C.ev([A.d.gal(g)],u)
A.d.fo(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
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
return new B.aWn(b0,a9,C.U(u,t),q,N.nx,w+v)}return new B.aWn(C.aX(u),C.ev([25],u),C.U(u,t),21,N.nx,1)},
hrM(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.am(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.boe(p,o)},
hn4(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aWn:function aWn(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vs:function Vs(d){this.a=d},
bjS:function bjS(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fs$=g
_.l6$=h
_.fX$=i
_.ft$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ebF:function ebF(d){this.a=d},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebG:function ebG(){},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebw:function ebw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebx:function ebx(d){this.a=d},
eby:function eby(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebD:function ebD(d,e){this.a=d
this.b=e},
bgS:function bgS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dhR:function dhR(d,e,f){this.a=d
this.b=e
this.c=f},
dhU:function dhU(d,e,f){this.a=d
this.b=e
this.c=f},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d){this.a=d},
Vu:function Vu(d){this.a=d},
aDG:function aDG(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fs$=g
_.l6$=h
_.fX$=i
_.ft$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ebY:function ebY(d){this.a=d},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebZ:function ebZ(){},
ebJ:function ebJ(){},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebP:function ebP(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(d){this.a=d},
ebK:function ebK(d){this.a=d},
ebT:function ebT(d){this.a=d},
ebO:function ebO(d,e){this.a=d
this.b=e},
ebU:function ebU(d){this.a=d},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebW:function ebW(d){this.a=d},
bh6:function bh6(d,e){this.b=d
this.a=e},
aLF:function aLF(){},
bx2:function bx2(){},
aLG:function aLG(){},
bx3:function bx3(){},
a0J(d,e,f,g,h,i){return new B.btR(d,e,f,g,h,i)},
btR:function btR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiI:function fiI(){},
fiJ:function fiJ(){},
fiK:function fiK(){},
fiL:function fiL(){},
fiM:function fiM(){},
fiN:function fiN(){},
fiO:function fiO(){},
fiP:function fiP(){},
a8c:function a8c(d){this.a=d},
cfV:function cfV(d){this.a=d},
cfW:function cfW(){},
cfU:function cfU(d,e){this.a=d
this.b=e},
cfT:function cfT(d){this.a=d},
Wk:function Wk(d){this.a=d},
aEx:function aEx(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fs$=f
_.l6$=g
_.fX$=h
_.ft$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eLd:function eLd(d){this.a=d},
eL9:function eL9(d){this.a=d},
eL8:function eL8(d,e){this.a=d
this.b=e},
eLb:function eLb(d,e){this.a=d
this.b=e},
eLa:function eLa(d,e){this.a=d
this.b=e},
eLc:function eLc(d){this.a=d},
bvd:function bvd(d,e,f){this.b=d
this.c=e
this.a=f},
V3:function V3(d){this.a=d},
bjr:function bjr(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fs$=d
_.l6$=e
_.fX$=f
_.ft$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dUU:function dUU(){},
dUV:function dUV(){},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dUT:function dUT(d){this.a=d},
bq1:function bq1(d,e,f){this.b=d
this.c=e
this.a=f},
Ue:function Ue(d){this.a=d},
bj3:function bj3(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fs$=d
_.l6$=e
_.fX$=f
_.ft$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dFM:function dFM(){},
dFN:function dFN(){},
dFH:function dFH(){},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFJ:function dFJ(d,e){this.a=d
this.b=e},
dFL:function dFL(d){this.a=d},
dFI:function dFI(d){this.a=d},
aHW:function aHW(d,e,f){this.a=d
this.b=e
this.c=f},
UV:function UV(d){this.a=d},
bjl:function bjl(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSb:function dSb(d){this.a=d},
dS9:function dS9(d,e){this.a=d
this.b=e},
dSc:function dSc(d){this.a=d},
dS8:function dS8(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dS7:function dS7(d,e){this.a=d
this.b=e},
dSe:function dSe(d,e){this.a=d
this.b=e},
dS6:function dS6(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dS5:function dS5(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dS4:function dS4(d){this.a=d},
dSh:function dSh(d){this.a=d},
dS3:function dS3(d){this.a=d},
dSi:function dSi(d){this.a=d},
dSj:function dSj(d){this.a=d},
dS2:function dS2(d){this.a=d},
bln:function bln(d,e,f){this.b=d
this.c=e
this.a=f},
VG:function VG(d){this.a=d},
aDQ:function aDQ(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehl:function ehl(d,e,f){this.a=d
this.b=e
this.c=f},
ehj:function ehj(d,e,f){this.a=d
this.b=e
this.c=f},
ehm:function ehm(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehp:function ehp(d,e){this.a=d
this.b=e},
eho:function eho(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
VT:function VT(d){this.a=d},
aEb:function aEb(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
esd:function esd(d){this.a=d},
ese:function ese(d){this.a=d},
esb:function esb(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
esa:function esa(d){this.a=d},
esf:function esf(d){this.a=d},
esg:function esg(d){this.a=d},
esh:function esh(d){this.a=d},
esi:function esi(d,e){this.a=d
this.b=e},
Wd:function Wd(d){this.a=d},
bkz:function bkz(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eGv:function eGv(){},
eGE:function eGE(){},
eGA:function eGA(d){this.a=d},
eGz:function eGz(){},
eGB:function eGB(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGC:function eGC(d){this.a=d},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGD:function eGD(d){this.a=d},
eGw:function eGw(d){this.a=d},
VE:function VE(d){this.a=d},
bk2:function bk2(d,e,f,g,h,i,j,k){var _=this
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
_.fs$=f
_.l6$=g
_.fX$=h
_.ft$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eg_:function eg_(){},
eg0:function eg0(){},
efT:function efT(d){this.a=d},
efS:function efS(d){this.a=d},
efU:function efU(d){this.a=d},
efR:function efR(d){this.a=d},
efV:function efV(d){this.a=d},
efQ:function efQ(d){this.a=d},
efW:function efW(d,e){this.a=d
this.b=e},
efP:function efP(d,e){this.a=d
this.b=e},
efX:function efX(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efY:function efY(d){this.a=d},
efN:function efN(d,e){this.a=d
this.b=e},
efZ:function efZ(d){this.a=d},
efM:function efM(d,e){this.a=d
this.b=e},
bd3:function bd3(d,e,f){this.c=d
this.d=e
this.a=f},
aL0:function aL0(){},
bwU:function bwU(){},
aLj:function aLj(){},
bwZ:function bwZ(){},
aLO:function aLO(){},
bx8:function bx8(){},
aMh:function aMh(){},
bxk:function bxk(){},
jL(d,e,f,g,h,i){return new B.b6D(h,d,f,g,i,e,null)},
hrB(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fSp(g,e,f),d,w,!0,!0,x.H)},
hH(d,e,f,g,h,i,j){return new B.avz(f,j,i,h,g,d,e,null)},
qU(d,e,f){return B.idf(d,e,f)},
idf(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qU=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m2(2),$async$qU)
case 7:q=h
w=8
return C.b(q.hw(A.h0),$async$qU)
case 8:p=h
if(p==null){w=1
break}o=J.eX(A.dD.gaP(p))
w=9
return C.b(B.cqR(C.a([B.hgv(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qU)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.gV).f.S(D.aPf)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qU,v)},
lk(d,e,f,g){var w,v=$.arG
if(v==="music")return E.dH(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dH(261.63*v,w,f,0,g,"sine")}return B.w2(v,e,f,g)},
w2(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
BK(d,e,f,g){var w,v,u,t,s,r,q,p=$.arG
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.lk(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dG(4,"count",x.S),C.S(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lk(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.cfR(d,s,f,g),u)}},
a8b(d,e){var w="sine",v="noise"
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
zx(d){return B.hID(d)},
hID(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zx=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$zx)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.U(x.N,x.z)
w=1
break}p=A.S.aK(0,q,null)
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
return C.i($async$zx,v)},
w_(d,e){return B.hIE(d,e)},
hIE(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$w_=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$w_)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$w_)
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
return C.i($async$w_,v)},
b6D:function b6D(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
csQ:function csQ(d){this.a=d},
csR:function csR(d,e){this.a=d
this.b=e},
fSp:function fSp(d,e,f){this.a=d
this.b=e
this.c=f},
fSo:function fSo(d){this.a=d},
dB:function dB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
csM:function csM(d){this.a=d},
eV:function eV(d,e,f){this.c=d
this.d=e
this.a=f},
avz:function avz(d,e,f,g,h,i,j,k){var _=this
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
csL:function csL(d){this.a=d},
Ff:function Ff(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csS:function csS(d){this.a=d},
mF:function mF(){},
csN:function csN(d,e,f){this.a=d
this.b=e
this.c=f},
csP:function csP(d){this.a=d},
csO:function csO(){},
cfR:function cfR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvr(){var w=0,v=C.j(x.cL),u,t
var $async$cvr=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qV().bg_("assets/data/world110.json"),$async$cvr)
case 3:u=t.hNc(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cvr,v)},
hNc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aK(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dU(j.h(k,0)),C.dU(j.h(k,1))],v))}q.push(m)}o=C.cQ(p.h(r,"n"))
m=C.cQ(p.h(r,"a"))
l=C.cQ(p.h(r,"ct"))
j=C.cQ(p.h(r,"sr"))
i=C.dU(p.h(r,"pop"))
h=C.dU(p.h(r,"gdp"))
g=C.cQ(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aQe(g,f,"",0)
f=C.dU(J.q(p.h(r,"c"),0))
p=C.dU(J.q(p.h(r,"c"),1))
e=new B.aaZ(o,m,l,j,i,h,g,f,p,q)
e.byk(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.ab_(a1)},
fvX(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GP(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaZ:function aaZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab_:function ab_(d){this.a=d},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
P4:function P4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y3:function y3(d,e,f){this.a=d
this.b=e
this.c=f},
P3:function P3(d){this.a=0
this.b=d
this.c=0},
hP5(d,e,f){return $.hP6.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.ddA(d,e,f))},
Va:function Va(d){this.a=d},
aDc:function aDc(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fs$=j
_.l6$=k
_.fX$=l
_.ft$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dXC:function dXC(d){this.a=d},
dXB:function dXB(d,e){this.a=d
this.b=e},
dX4:function dX4(d){this.a=d},
dX2:function dX2(d){this.a=d},
dX3:function dX3(d,e,f){this.a=d
this.b=e
this.c=f},
dX1:function dX1(d){this.a=d},
dX0:function dX0(){},
dX_:function dX_(d){this.a=d},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXc:function dXc(d){this.a=d},
dXd:function dXd(d){this.a=d},
dXb:function dXb(d){this.a=d},
dXe:function dXe(d){this.a=d},
dX5:function dX5(d,e){this.a=d
this.b=e},
dX6:function dX6(d){this.a=d},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXa:function dXa(d,e){this.a=d
this.b=e},
dXt:function dXt(d){this.a=d},
dXm:function dXm(d){this.a=d},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXl:function dXl(d,e){this.a=d
this.b=e},
dXv:function dXv(d){this.a=d},
dXk:function dXk(d,e){this.a=d
this.b=e},
dXw:function dXw(d){this.a=d},
dXj:function dXj(d,e){this.a=d
this.b=e},
dXx:function dXx(d){this.a=d},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXy:function dXy(d){this.a=d},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXz:function dXz(d){this.a=d},
dXg:function dXg(d){this.a=d},
dXA:function dXA(d){this.a=d},
dXf:function dXf(d){this.a=d},
dXq:function dXq(d){this.a=d},
dX9:function dX9(d){this.a=d},
dXr:function dXr(d){this.a=d},
dX8:function dX8(d){this.a=d},
dXs:function dXs(d){this.a=d},
dX7:function dX7(d){this.a=d},
dWZ:function dWZ(){},
dWY:function dWY(d){this.a=d},
dWX:function dWX(d){this.a=d},
bfi:function bfi(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ddA:function ddA(d,e,f){this.a=d
this.b=e
this.c=f},
ddB:function ddB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLp:function aLp(){},
aLq:function aLq(){},
af4(d,e,f,g,h){return new B.btM(d,e,f,g,h)},
btM:function btM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiB:function fiB(){},
fiC:function fiC(){},
fiD:function fiD(){},
fiE:function fiE(){},
fiF:function fiF(){},
fiG:function fiG(){},
fiH:function fiH(){},
Wg:function Wg(d){this.a=d},
bkD:function bkD(){this.d=$
this.c=this.a=null},
eHo:function eHo(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHq:function eHq(){},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
hPx(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w+900)
u.push(2.2+v.aj())}return new B.bkp(new C.cs(null,x.A),new B.P3(A.cG),A.J,A.ax,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hPz(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hPy(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hhH(d,e,f){return $.hQ9.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.f0M(d,e,f))},
W1:function W1(d){this.a=d},
bkp:function bkp(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fs$=j
_.l6$=k
_.fX$=l
_.ft$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
ezr:function ezr(d,e){this.a=d
this.b=e},
ezC:function ezC(d,e){this.a=d
this.b=e},
ezD:function ezD(d,e){this.a=d
this.b=e},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezF:function ezF(d,e){this.a=d
this.b=e},
ezG:function ezG(d){this.a=d},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezH:function ezH(d){this.a=d},
ezw:function ezw(d,e){this.a=d
this.b=e},
ezI:function ezI(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezq:function ezq(){},
ezp:function ezp(){},
ezo:function ezo(d){this.a=d},
ezn:function ezn(d){this.a=d},
brO:function brO(d,e){this.b=d
this.a=e},
f0M:function f0M(d,e,f){this.a=d
this.b=e
this.c=f},
f0N:function f0N(){},
f0O:function f0O(){},
Vb:function Vb(d){this.a=d},
aDd:function aDd(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fs$=k
_.l6$=l
_.fX$=m
_.ft$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dXG:function dXG(){},
dY8:function dY8(){},
dXV:function dXV(d,e){this.a=d
this.b=e},
dXM:function dXM(d,e){this.a=d
this.b=e},
dXW:function dXW(d){this.a=d},
dXL:function dXL(d){this.a=d},
dXX:function dXX(d){this.a=d},
dXU:function dXU(d){this.a=d},
dY0:function dY0(d){this.a=d},
dXT:function dXT(d){this.a=d},
dY1:function dY1(d){this.a=d},
dXS:function dXS(d,e){this.a=d
this.b=e},
dY2:function dY2(d){this.a=d},
dY3:function dY3(d){this.a=d},
dXR:function dXR(d,e){this.a=d
this.b=e},
dY4:function dY4(d){this.a=d},
dXQ:function dXQ(d,e){this.a=d
this.b=e},
dY5:function dY5(d){this.a=d},
dXP:function dXP(d,e){this.a=d
this.b=e},
dY6:function dY6(d){this.a=d},
dXO:function dXO(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dXN:function dXN(d){this.a=d},
dXY:function dXY(d){this.a=d},
dXK:function dXK(d){this.a=d},
dXZ:function dXZ(d){this.a=d},
dXJ:function dXJ(d){this.a=d},
dY_:function dY_(d){this.a=d},
dXI:function dXI(d){this.a=d},
dXF:function dXF(d){this.a=d},
dXE:function dXE(){},
dXH:function dXH(d,e){this.a=d
this.b=e},
dXD:function dXD(d){this.a=d},
bau:function bau(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VU:function VU(d){this.a=d},
bkm:function bkm(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fs$=e
_.l6$=f
_.fX$=g
_.ft$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
esl:function esl(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
esk:function esk(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esj:function esj(d,e){this.a=d
this.b=e},
brm:function brm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eZW:function eZW(d){this.a=d},
aLr:function aLr(){},
bx0:function bx0(){},
aM_:function aM_(){},
bxe:function bxe(){},
aM2:function aM2(){},
bxg:function bxg(){},
hPv(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eE()
v.dt(w)
v=v.aj()
u=new C.eE()
u.dt(w+500)
s.push(new C.v(v,u.aj()))}return new B.bj2(new C.cs(null,x.A),new B.P3(A.cG),t,A.ax,s,$,A.bx,0,C.a([],x.X),null,null)},
Py:function Py(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Uc:function Uc(d){this.a=d},
bj2:function bj2(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fs$=i
_.l6$=j
_.fX$=k
_.ft$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dFd:function dFd(){},
dF1:function dF1(){},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF3:function dF3(d,e){this.a=d
this.b=e},
dF0:function dF0(d){this.a=d},
dF_:function dF_(d){this.a=d},
dF5:function dF5(d){this.a=d},
dEZ:function dEZ(d,e){this.a=d
this.b=e},
dF6:function dF6(d){this.a=d},
dEY:function dEY(d){this.a=d},
dF7:function dF7(d){this.a=d},
dEX:function dEX(d){this.a=d},
dF8:function dF8(d){this.a=d},
dEW:function dEW(d){this.a=d},
dF9:function dF9(d){this.a=d},
dEV:function dEV(d){this.a=d},
dFa:function dFa(d){this.a=d},
dEU:function dEU(d){this.a=d},
dFb:function dFb(d){this.a=d},
dET:function dET(d){this.a=d},
dFc:function dFc(d){this.a=d},
dES:function dES(d){this.a=d},
dF4:function dF4(d){this.a=d},
dER:function dER(d){this.a=d},
b9T:function b9T(d,e){this.b=d
this.a=e},
aeJ:function aeJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V7:function V7(d){this.a=d},
bju:function bju(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fs$=p
_.l6$=q
_.fX$=r
_.ft$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dWd:function dWd(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW2:function dW2(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW6:function dW6(d){this.a=d},
dW0:function dW0(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dW_:function dW_(d,e){this.a=d
this.b=e},
dW8:function dW8(d){this.a=d},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dW9:function dW9(d){this.a=d},
dVY:function dVY(d,e){this.a=d
this.b=e},
dWa:function dWa(d){this.a=d},
dVX:function dVX(d){this.a=d},
dWb:function dWb(d){this.a=d},
dVW:function dVW(d){this.a=d},
dWc:function dWc(d){this.a=d},
dVV:function dVV(d){this.a=d},
bf8:function bf8(d,e){this.b=d
this.a=e},
daI:function daI(d){this.a=d},
VQ:function VQ(d){this.a=d},
bkl:function bkl(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fs$=f
_.l6$=g
_.fX$=h
_.ft$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
erA:function erA(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erz:function erz(d){this.a=d},
erC:function erC(d){this.a=d},
ery:function ery(d){this.a=d},
erD:function erD(d){this.a=d},
erx:function erx(d){this.a=d},
erE:function erE(d){this.a=d},
erw:function erw(d){this.a=d},
erF:function erF(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
erG:function erG(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
erH:function erH(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
bqC:function bqC(d,e){this.b=d
this.a=e},
aKY:function aKY(){},
bwT:function bwT(){},
aLm:function aLm(){},
bx_:function bx_(){},
aLZ:function aLZ(){},
bxd:function bxd(){},
hgv(d,e,f){var w,v
C.fV(0,0,!1)
w=new C.ln(e,f,$,null)
v=w.bIB(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i2a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.o_(A.k.ab(p.c,4)),"y",C.o_(A.k.ab(p.d,4)),"v",p.e,"l",C.o_(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.o_(A.k.ab(p.as,3)),"ch",p.at,"vc",C.o_(A.k.ab(p.z,3)),"s",C.o_(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fp(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ibD(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aK(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cv:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qj().ai(0,s)){J.ce(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ty(a2,d,a0,a1)
a3.apS(a2,d,a0,a1)
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
d=C.jN(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jN(J.q(t,"b"))
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
J.ce(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cv:i)
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
if(m!=null&&l!=null)a6.akn(m,A.k.N(C.dU(J.q(p,1))),l,A.k.N(C.dU(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cv:h)
while(h.C()){j=h.gR(h)
J.ce(k,A.k.N(C.dU(j)))}return new C.bof(i,k)}catch(a4){return a5}},
fxT(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fxT=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fxT)
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
return C.i($async$fxT,v)},
bDC(d){return B.idb(d)},
idb(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDC=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bDC)
case 7:w=6
return C.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDC)
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
return C.i($async$bDC,v)},
cqR(d,e){var w=0,v=C.j(x.g7),u
var $async$cqR=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h4X().xc(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cqR,v)}},D,T,H,U,A_,A7,A8,Al,X
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
A5=c[99]
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
Aj=c[94]
W=c[116]
K=c[132]
S=c[95]
Ak=c[24]
E=c[26]
F=c[92]
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
X=c[96]
B.ajM.prototype={}
B.Vn.prototype={
T(){return new B.bjQ(C.U(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mD(0,null,null))}}
B.bjQ.prototype={
gVZ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Np(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Np=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jN()
p.bP(0,A.c8)
t.m(new B.e8F(t))
t.a.toString
p=t.gVZ()
w=3
return C.b(B.bzd(B.hRn(q,B.i21(p),o,t.ay)),$async$Np)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i3r(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e8G(t,o,r))
$.aW.x1$.push(new B.e8H(t))
case 1:return C.h(u,v)}})
return C.i($async$Np,v)},
XZ(d){return this.bZH(d)},
aVz(){return this.XZ(null)},
bZH(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XZ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jN()
t.f.saY(0,o)
t.m(new B.e8S(t))
E.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bzd(B.hY7(o)),$async$XZ)
case 3:r=n.a=m.ibi(f)
p.b=""
if(r!=null&&!B.i22(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i3s(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajM(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e8T(p,t))
t.c43(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XZ,v)},
c43(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gVZ()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e8O(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e8M(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e8P(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e8Q(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e8R(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.n(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eWF,A.be,C.E(C.d(m.Q,l,l,l,l,l,l,A.TH,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fli
else{w=C.E(C.d(k.a,l,l,l,l,l,l,A.U5,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f6m,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vw,C.d(u,l,l,l,l,l,l,D.f91,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.DF,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.fbr,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.Mk,new C.cl(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.m9,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bh,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.a86,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fN,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fgK,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.ebU)
j=C.cd(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.x(C.a([C.ai1(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bsz,A.ek,l,l,1/0),A.bd,A.ih),C.E(B.h6K(m.gVZ(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dB("Ask about it",i,new B.e8W(m),l,A.bu,l),new B.dB("Invent something new",!i,new B.e8X(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dg8[p]
i.push(new B.dB(n,!1,new B.e8Y(m,n),l,A.bu,l))}f.push(new B.eV(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.d_k[p]
i.push(new B.dB(r,!1,new B.e8Z(m,r),l,A.bu,l))}f.push(new B.eV(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.U,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kJ,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e9_(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dp,!0,A.a4,l,A.an,l,A.aPY,l,l),1)
h=m.at
v=h&&j?D.bHn:A.dX
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e90(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jL(A.bu,A.hb,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.G3.prototype={}
B.uR.prototype={}
B.VP.prototype={
T(){return new B.aE5(A.J,A.J,A.ax,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE5.prototype={
gaWO(){var w,v,u,t=this,s=D.Hf[t.cx],r=D.QV[t.cy],q=D.Cp[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awB[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.eoM())},
ga2f(){return D.Hf[this.cx].d/this.gaWO()},
gaO2(){return 0.1*(D.Hf[this.cx].d/0.9)/D.QV[this.cy].d},
Z(){this.a1()
this.lj()
B.zx("rocket_lander").bC(new B.ep5(this),x.P)},
c4c(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cG.aj()*0.6
w.f=new C.v(0.15+A.cG.aj()*0.7,0.08)
w.r=new C.v((A.cG.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lD(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.ep6())
return}w=D.rs[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2f()
v=v.ad(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaO2())}if(m.dy){t=m.r
v=v.aC(0,t.aH(0,t.gcn()*6*D.ayy[m.d]))}t=m.r=m.r.ad(0,v.aH(0,d))
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
p=D.Cp[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.w_("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BK("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2f()/(D.rs[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2f()/(D.rs[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dH(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bm(m.CW*20),2)===0)E.dH(90,"",70,0,0.12,"noise")
m.m(new B.ep7())},
afz(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f8w,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dB(e[w].a,f.$1(w),new B.eoO(this,g,w),v,h,v))
return new C.D(A.eI,C.x(C.a([u,A.cV,C.bV(A.bA,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDM(d){var w,v,u,t,s=this,r=null,q=s.ga2f()/(D.rs[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaO2()),o=D.ayy[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.U_,r,r,r),A.R,s.afz("ENGINE: "+D.Hf[s.cx].b,D.Hf,new B.eoD(s),new B.eoE(s),A.cs),s.afz("FUEL TANK: "+D.QV[s.cy].b,D.QV,new B.eoF(s),new B.eoG(s),A.b2),s.afz("LANDING GEAR: "+D.Cp[s.db].b,D.Cp,new B.eoH(s),new B.eoI(s),A.aN),s.afz("EXTRAS (tap to add)",D.awB,new B.eoJ(s),new B.eoK(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fDu)
o=(q?A.b2:A.c9).j(0.14)
w=C.n(12)
v=A.k.ab(s.gaWO(),2)
u=A.k.ab(s.ga2f()/(D.rs[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cp[s.db].d*100)+".",r,r,r,r,r,r,D.f99,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.no,"Launch",new B.eoL(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lF,new C.o(D.biU,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aXW(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.n(18),t=C.I(A.b_,A.q,1)
return C.og(A.jI,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eoA(e),new B.eoB(e),w,w,w,w,new B.eoC(e))},
aXV(d,e,f){return this.aXW(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.eoZ(s,D.rs[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rs[w].a:"\ud83d\udd12"
o.push(new B.dB(v,s.d===w,new B.ep_(s,w),r,D.rs[w].c,r))}v=C.a([s.aXV(F.amp,new B.ep0(s),s.y),A.be,s.aXW(A.vU,new B.ep1(s),s.Q,130),A.be,s.aXV(A.O3,new B.ep2(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aN:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.be,C.aC(r,C.p(r,D.bLC,A.f,r,r,new C.o(u,r,C.I(A.b_,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ep3(s),r,r,r,r,r,r,!1,A.a7)],p))}return B.jL(A.cs,A.hb,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eV(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgP.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rs[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.blE,a0,0.25)
a1.toString
d.sar(new C.a8(A.b0,A.b4,A.x,C.a([F.ae1,a1],x.O),l,l).aw(0,new C.a9(0,0,g,f)))
a2.b0(new C.a9(0,0,g,f),d)
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
a2.aQ(r,d)
o=C.ch(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.iu)
a0=C.N()
a0.r=A.bc.gp(0)
a2.aE(d,a0)
a0=C.bx(o.cz(2),A.qr)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.jb(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.HM
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
a2.aQ(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bE())
k=C.N()
k.r=A.c.gp(0)
a2.aQ(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cW(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cW(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.sar(D.bYe.aw(0,D.eP0))
a2.aQ(m,i)
i=C.N()
i.r=A.aN.gp(0)
a2.af(D.wm,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.av.gp(0)
a2.aQ(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.av.gp(0)
a2.aQ(f,k)
g.restore()},
au(d){return!0}}
B.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxc.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvP()}}
B.aRU.prototype={}
B.a2Z.prototype={}
B.b9W.prototype={}
B.Ud.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ev(["skin"],x.N),o=new Float32Array(0)
return new B.aCv(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Kt,D.Kt,A.ax,A.cG,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCv.prototype={
Z(){var w=this
w.a1()
w.lj()
w.as=new B.c0W(w.gccx())
new B.dFF(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.buQ()},
ccy(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f_(0,C.F(["t","init","data",$.hgK],x.N,x.z))
v.at=!0
v.ax=""
v.ayt()
break
case"pick":v.m(new B.dFh(v,d))
break
case"shot":v.ahr(C.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.u(w.h(d,"text")))
break}},
ayt(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aux[q.CW]
v=new B.dFi()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fp(u)
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
ahr(d){return this.ctu(d)},
ctu(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahr=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aL(A.a.b5(d,A.a.cH(d,",")+1))
w=6
return C.b(B.cqR(C.a([B.hgv(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahr)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.gV).f.S(D.aPf)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahr,v)},
axV(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lD(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){B.a8b("kick",0.4)
v.a4T(170,new B.dFG())}v.ok=w
return},
ahg(d){var w,v,u,t,s=this
s.m(new B.dFj(s,d))
if(d==null){s.fx=D.Kt
s.dy=1
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.S(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dFk(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayt()
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cvV(t,d)
return},
cvV(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a8b("kick",0.8)
this.a4T(260,new B.dFl())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4T(w*70,new B.dFm(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dH(110,"",360,0.7,0.3,"saw")
else B.w2("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dH(210+e.length*4,"",80,0.6,0.55,"tri")
E.dH(2400,"",20,0,0.3,v)
break
case"muscle":E.dH(70,"",150,1,0.6,"sine")
break
case"vessel":E.dH(300,"",380,0.4,0.22,v)
B.a8b("kick",0.3)
break
default:B.w2("organic",2+A.o.E(e.length,6),200,0.4)}},
cAs(d){this.m(new B.dFo(this,d))},
aYd(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axV(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.av(w)]
p.p4=""},
bVj(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dFe(u,w,d))
v=x.t
B.BK("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4T(1100,new B.dFf(u))
return}if(d==null){if(u.cx!=null)u.ahg(null)
return}u.ahg(d)},
bZ0(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bY.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f4U,u,u,u)}else if(d==null||e==null)w=D.fiQ
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hH,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.DF,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bO2,u,u,u,new B.dFg(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Wj,u,s,t,u,u,A.n),u,u,u,u,I.ai2,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dr4.h(0,g)
i.ayt()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d8R
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axV(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mF,h,h,h,new B.dFv(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DQ(h,A.qp,q)}else q=A.kF
q=C.x(C.a([C.E(q,1),new C.D(F.YP,i.bZ0(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d0R[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dB(l,n,new B.dFw(i,o),o.c,A.bY,h))}p=C.a([new B.eV(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dB(k,k===i.cx,new B.dFx(i,k),h,A.aM,h))}p.push(new B.eV(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hH(A.c9,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dFy(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Ff(D.aux[j],i.CW===j,new B.dFz(i,j),!1,h))
p.push(new B.eV(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dB("Spin",n,new B.dFA(i),D.ale,A.aN,h),new B.fj(A.k6,"Reset view",new B.dFB(i),A.c,h),new B.dB(l,m,new B.dFC(i),A.Gw,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dB("Heartbeat sound",i.k4,new B.dFD(i),A.o8,A.c9,h))
p.push(new B.eV(v,h,h))
return B.jL(A.bY,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aKZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aL_.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.buP()}}
B.c0W.prototype={
kH(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hmO
$.hmO=v+1
u="ngmy-body-viewer-"+v
$.yE()
$.qi().pW(u,new B.c0X(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fM(v,"message",new B.c0Y(t),!1,x.gA)
t.b=u},
f_(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bza(w.contentWindow)
if(w!=null)J.fU7(w,e,"*")}}catch(v){}}}
B.y5.prototype={}
B.Ck.prototype={}
B.no.prototype={}
B.baE.prototype={}
B.Uj.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aCy(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),A.ax,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCy.prototype={
Z(){var w=this
w.a1()
w.lj()
w.ach()
$.aW.x1$.push(new B.dHQ(w))},
ach(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ach=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$ach)
case 6:q=e.td("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dHu(s,r))
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
return C.i($async$ach,v)},
acB(d){return this.c1O(d)},
c1O(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acB=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$acB)
case 6:r=f
q=s.cx
p=C.a3(q).k("jS<co.E,m>")
q=C.C(new C.jS(q,new B.dHx(),p),p.k("J.E"))
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
return C.i($async$acB,v)},
awD(d,e,f,g){var w="c"+this.y++,v=new B.Ck(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.awD(0,e,f,0)},
abD(d,e){var w
if(D.za.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.v(-36,w))},
tE(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aS6(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fX$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dY(m,D.cLQ[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tE(p,0)&&n.tE(p,1)
break
case"or":p=q.a
o=n.tE(p,0)||n.tE(p,1)
break
case"xor":p=q.a
o=n.tE(p,0)!==n.tE(p,1)
break
case"nand":p=q.a
o=!(n.tE(p,0)&&n.tE(p,1))
break
case"nor":p=q.a
o=!(n.tE(p,0)||n.tE(p,1))
break
case"not":o=!n.tE(q.a,0)
break
default:o=n.tE(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bNY(){return this.aS6(null)},
lD(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNY()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f2(w,new B.dHR()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fX$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fX$)
o=s+1
E.dH(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awE(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
asS(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new B.dHs(w,d))
return}w.m(new B.dHt(w,d))},
cwc(d){this.m(new B.dHy(this,d,$.bDY()[d]))},
c6q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDY()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dHn(),t),s)
A.d.aZ(r,new B.dHo())
q=C.C(new C.a_(new C.bc(v,u),new B.dHp(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dHq(d,w))
return}u=d.r
p=C.dQ(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h4(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aS6(0)
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
d.m(new B.dHr(d,o,a0))},
axr(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
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
ceW(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
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
bYU(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.za.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abD(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bMQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abD(p,o)
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
c6s(d){var w,v,u,t=this,s=t.axr(d)
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
t.m(new B.dHz())
return}u=t.bMQ(d)
if(u!=null)t.m(new B.dHA(t,u))
else t.m(new B.dHB(t))},
avt(d){return this.c0O(d)},
c0O(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avt=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axr(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dHw(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avt,v)},
bzC(d){if(this.x.A(0,A.ax))return
this.m(new B.dHm(this,d,A.cG))
C.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDY()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o8:O.ro,A.ad,h,h,h,21),h,h,h,new B.dHK(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.cl.j(0.14)
r=C.I(A.cl.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f44,h,h,h),C.d(w.b,h,h,h,h,h,h,D.fcm,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lQ,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.ftS,i.gc6p(),C.bn(A.cl,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mu,D.btb,h,h,1/0))}u.push(C.E(C.cq(new B.dHL(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.za.h(0,r).a+": "+D.za.h(0,r).e,h,h,h,h,h,h,A.rX,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.ahM,A.bR,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.za.gdL(D.za),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.q,-1)
t.push(C.aC(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.y(p.a,h,D.aR7,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fC,Aj.Mq,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dHM(i,r),h,h,h,h,h,h,!1,A.a7))}s=C.a([],g)
for(l=0;l<4;++l){k=D.dd9[l]
s.push(new B.fj(A.O4,k.b,new B.dHN(i,k),A.cl,h))}s.push(new B.fj(D.yh,"Clear",new B.dHO(i),A.c9,h))
r=C.a([],g)
for(j=0;q=$.bDY(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eh:A.lo
o=i.ay
n=i.cx.t(0,j)?A.b2:A.bH
r.push(new B.dB(q.a,o===j,new B.dHP(i,j),p,n,h))}return B.jL(A.cl,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eV(t,"PARTS",h),new B.eV(s,"TRY",h),new B.eV(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.baX.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.acz.gp(0)
a7.b0(new C.a9(0,0,0+a5,0+a6),w)
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
g=a5.abD(j,m.c)
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
l.d=A.bS
l.r=(f?A.dQ:A.bq).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Ij)
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
a7.aQ(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c6r(a7,a5.d)},
c6r(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.za.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.ch(a0.c,64,64)
s=C.bx(t,A.la)
r=w.cy===v
q=s.eU(A.cC)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lw
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bU(a0.c,52)))
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
q.sar(new C.a8(A.b0,A.b4,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.ue:D.bHT}else l=e.b
k=B.fZA(C.jK(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aC(0,new C.v(p/2,q.gbd(q)/2)))
j=B.fZA(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fZA(f,9,u?A.dQ:A.bW,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYR(d,w.abD(a0,h),o)
this.aYR(d,a0.c.ad(0,D.Ij),o)},
aYR(d,e,f){var w
$.W()
w=C.N()
w.r=D.acz.gp(0)
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
B.aL4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwW.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.buV()}}
B.Nh.prototype={
T(){return new B.aCP(C.mD(0,null,null))}}
B.Kk.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ax.prototype={}
B.aCP.prototype={
c6w(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dNF(w,e))},
c_H(){var w=this
w.e.q()
w.e=C.mD(w.f,null,null)
w.m(new B.dNE(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.op(t,C.c6(v,A.c_,t?new B.bqX(w.e,w.gc6v(w),new B.dNG(d),v):new B.aH4(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dNH(w,u),x.C)}}
B.bsw.prototype={}
B.bqX.prototype={
aYS(d,e){var w=null
return new C.D(I.Zh,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f4E,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.np,v,v,v,w.e,v,v,v,v,v,v),A.rR,D.bz2],u),A.m,v,A.e,A.j,0,v,v),s=w.aYS("STUDIOS","Play, make things, and keep what you make")
$.bDZ()
return C.bm(!0,C.x(C.a([new C.D(D.by5,t,v),C.E(C.vz(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.mb(s,v),new C.nR(A.hQ,C.OR(new C.os(new B.eZt(d),22,!0,!0,!0,0,C.t1(),v),D.aP4),v),new C.mb(w.aYS("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nR(D.bti,C.OR(new C.os(new B.eZu(w),6,!0,!0,!0,0,C.t1(),v),D.aP4),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeO.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.aq(F.n8,p,0.3)
m.toString
w=x.O
m=C.a([m,D.afo],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.az,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.az,A.aC,A.x,m,r,r),A.n),r,A.FO,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adG.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.aq(F.n8,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.afo],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aHD,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.C3,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.az,A.aC,A.x,f,k,k),A.n),k,A.FO,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PZ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Sg,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bX(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.az,A.aC,A.x,C.a([p,o,n,i],m),D.dis,j),A.n),A.bf),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bX(0,C.b3(j,j,j,new B.brV(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f6e,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ts)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fO,C.B(C.a([s,A.ep,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bX(0,C.e0(C.en(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bX(0,C.e0(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bX(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.brV.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.jb(0,0.35)
t=C.ch(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.sar(new C.a8(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.b0(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.brq.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bh0,D.aeA],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.kc,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.X(A.js,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9D(p,w),A.ax),A.aq),new C.o(w,w,s,v,r,new C.a8(A.az,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9D.prototype={
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
q.delete()}u=e.ed(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
au(d){return!1}}
B.aH4.prototype={
T(){return new B.aH5(new C.cs(null,x.A),null,null)}}
B.aH5.prototype={
gu0(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bqG,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZi(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fM,null,1,null,v)
w.fg(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawF(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6t(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVi(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaW0(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6z(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a1()
var w=this.gu0()
w.dd()
w.dU$.L(0,this.gcvW())},
cvX(){var w,v,u,t,s,r,q,p=this,o=p.gu0().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawF().a){case 0:w=D.nt
break
case 1:w=D.un
break
case 2:w=D.a2C
break
case 3:w=D.nt
break
case 4:w=D.d5P
break
case 5:w=D.un
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aag)r=0.09
else r=s===D.aah?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.c_L[v]
B.lk("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BK("bell",D.c8u,1400,0.35)}}p.ax=o},
q(){this.gu0().q()
this.gZi().q()
this.bwN()},
ag_(){var w=this
w.gu0().cVd(0,C.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eZ9(w))},
cgY(){this.gu0().bT(0)
this.m(new B.eZ8(this))},
adB(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adB=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaW0(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aO),$.aw()))}m=C.a([],m)
for(t=u.gb6z(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aO),$.aw()))}o=C.C(u.gaVi(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bS(F.n8,null,new B.eZ7(u,l,m,o),t,!0,!0,!0,A.ly,!1,!1,x.H),$async$adB)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adB,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawF(),f=i.a.c,e=f.b,d=i.gc6t(),a0=new B.Ax(g,e,f.c,d,i.gaVi(),i.gaW0(),i.gb6z())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o8:O.ro,A.ad,h,h,h,21),h,h,h,new B.eZh(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bRw,h,h,h,i.gc6u(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mF,h,h,h,new B.eZi(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c7(i.gZi(),new B.eZj(i,a0),h),C.cq(new B.eZk(i,a0))],g)
u=i.as
t=u?i.gcgX():i.gcjg()
u=u?D.bH8:A.u8
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c7(i.gu0(),new B.eZl(i,a1,a0),h),1),C.aH(h,h,h,h,D.bNT,h,h,h,new B.eZm(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hH(r,u+"x","Speed",2.5,0.4,new B.eZn(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dfJ[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dB(p.b,o===p.a,new B.eZo(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c05[q]
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
d.push(C.aC(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.az,A.aC,A.x,n,h,h),A.a5),h,l,h,D.ahw,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eZp(i,n),h,h,h,h,h,h,!1,A.a7))}return B.jL(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ex(new C.an(A.W,h,A.b1,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eV(u,"STYLE",h),new B.eV(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
byO(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nt[r]
p=A.k.D((1-A.ey.aA(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nt[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nt[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.ka(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nt[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nt[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nt[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kI(q,new C.iJ(n,f,A.b0,!0,f,new B.PZ(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nt[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nt[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mm(new B.bqz(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bPr(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.un[r]
p=A.pQ.aA(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.un[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.un[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jQ(n,n,n,1)
m.fF(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PZ(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fF(3.141592653589793)
k=new C.iJ(k,f,A.A,!0,f,new B.brq(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kI(q,new C.iJ(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cAZ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2C[w]
l.push(A.cu.aA(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bX(0,C.b3(n,n,n,new B.bu0(d.d,l,D.awe,m,B.bqW(e,0.4,0.62),f,B.bqW(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.h_5(g,w)
q=D.awe[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kI(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.h_5(g,w)
r=D.a2C[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kI(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.U9,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bF2(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.aA(0,B.bqW(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bX(0,C.av(C.dX(C.b3(f,f,f,new B.bq0(A.d.gI(a1),B.bqW(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e7v),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fF(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jQ(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kI(k*(0.45+0.55*o),C.dX(new C.iJ(l,f,A.A,!0,f,new B.PZ(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new B.eZ0())
A.d.v(a0,new C.M(w,new B.eZ1(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bEc(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.un[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mU.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.un[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.aye[q]
k=C.dp()
k.mN(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jQ(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.un[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kI(m,C.dX(new C.iJ(k,e,A.A,!0,e,new B.PZ(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.un[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dX(new C.mm(new B.bai(w,f,q,e),e,new C.ar(r,212),e,e),new C.v(0,D.aye[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBJ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.e7z],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nt[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.aA(0,p)
q=D.ayn[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nt[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nt[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mN(l*h+D.d9O[r]*o)
f.fF(l*0.9)
h=0.55+0.45*o
f.jQ(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kI(g,C.dX(new C.iJ(f,a3,A.A,!0,a3,new B.PZ(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nt[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayn[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dX(new C.mm(new B.bq2(A.d.gI(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bqz.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.hd)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mJ
d.aE(q,t)
t=C.bx(u,A.hd)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bq0.prototype={
a4(d,e){var w,v,u=this.c,t=C.ch(e.ed(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HM
d.hY(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hY(t,u)
u=t.cz(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hY(u,v)},
au(d){return!0}}
B.bai.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ed(A.J),f=this.c,e=A.cu.aA(0,f)
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
B.bq2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ed(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.ch(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c0(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.bu0.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a8(A.b0,A.b4,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.b0(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.h_5(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lw
a4=a3.H()
t.drawOval(C.c0(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new C.a8(A.b0,A.b4,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c0(a5),a4)
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
t.drawRect(C.c0(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cC(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.hd)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.et(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c0(a5),$.oN()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new C.a8(A.b0,A.b4,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c0(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMO.prototype={
aT(){this.b3()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
B.a0d.prototype={
a5(){return"_Role."+this.b}}
B.q7.prototype={}
B.qM.prototype={}
B.Co.prototype={}
B.Zb.prototype={}
B.aeE.prototype={}
B.a0q.prototype={
gY(d){return this.d}}
B.Cy.prototype={}
B.abx.prototype={}
B.abO.prototype={}
B.adK.prototype={}
B.bgM.prototype={
a2o(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dH(d,"",e,g,h,f)},
b7B(d,e,f){return this.a2o(d,e,f,0,0.55)},
aBd(d,e,f,g){return this.a2o(d,e,f,0,g)},
b7C(d,e,f,g){return this.a2o(d,e,f,g,0.55)},
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
w.aU()},
ajF(d,e,f,g){var w="n"+this.ay++,v=new B.qM(w,e,f,g)
this.a.n(0,w,v)
this.aU()
return v},
B4(d,e,f){return this.ajF(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new B.dhy(e))
A.d.br(w.c,new B.dhz(e))
w.aU()},
bbq(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mI.h(0,v.b).c===D.wV)return!1
w=this.b
if(A.d.b6(w,new B.dhv(d,e)))return!1
w.push(new B.Co(d,e))
this.aU()
return!0},
bZE(d){var w
if(d.b==="beat")return D.c8E[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aEI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayD[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cy(u,t,j.ax,90))
w.push(new B.Cy(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0q(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7B(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0q(u,new C.v(o*p,n*p),m,3+w.aj()*4.5,1000+w.av(700),j.ax))}j.f.push(new B.Cy(u,t,j.ax,120))
j.aBd(120,200,"noise",0.5)
j.b7B(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cy(u,t,j.ax,230))
w.push(new B.Cy(u,t,j.ax+160,160))
w.push(new B.Cy(u,t,j.ax+320,100))
j.b7C(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abx(u,new C.v((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7C(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abO(u,u.ad(0,new C.v(Math.cos(q),Math.sin(q)).aH(0,260+w.aj()*200)),t,j.ax))
j.a2o(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2o(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adK(u,D.ay1[v],t,j.ax))
j.aBd(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBd(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c4K[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cr2(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f2(w,new B.dhw(d));v.C();)j.azK(w.gR(0),j.ax+D.ch3[A.o.E(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cy1[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f2(w,new B.dhx(d));v.C();)j.azK(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zf(w,0,v-700)},
cr2(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Zb(e,"~"+d))},
azK(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeE(d.a,v,e,w))
u.push(new B.Zb(w,v))},
a65(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEI(r)
u.n(0,r,o.ax+o.bZE(s))}}w=o.c
v=C.S(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dhA(o),v),v.k("J.E"))
if(q.length!==0){A.d.br(w,new B.dhB(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gae(v),r=new C.f2(u,new B.dhC(p));r.C();)o.azK(u.gR(0),o.ax)}else o.aEI(u)}}A.d.br(o.d,new B.dhD(o))
A.d.br(o.e,new B.dhE(o))
A.d.br(o.f,new B.dhF(o))
A.d.br(o.w,new B.dhG(o))
A.d.br(o.x,new B.dhH(o))
A.d.br(o.r,new B.dhI(o))
o.aU()},
v6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ah(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.S.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cMT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aK(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.u(J.q(v,"k"))
if(!D.mI.ai(0,u))continue
t=C.u(J.q(v,"id"))
m.n(0,t,new B.qM(t,u,new C.v(C.dU(J.q(v,"x"))*k.cy.a,C.dU(J.q(v,"y"))*k.cy.b),A.k.N(C.dU(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.u(J.q(r,0))
p=C.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Co(q,p))}k.aU()
return!0}catch(l){return!1}},
cPW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qM(n,r,new C.v(q*p.a,o*p.b),s))
l.aU()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbq(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FP.prototype={}
B.VO.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aE4(new B.bgM(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),A.cG,A.K,A.ax,$.aw()),A.bx,A.J,A.J,A.U,null,null)}}
B.aE4.prototype={
aca(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aca=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$aca)
case 6:q=n.jN(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.eo6(s))
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
return C.i($async$aca,v)},
a96(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a96=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.enW(s))
u=3
w=6
return C.b(C.ay(),$async$a96)
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
return C.i($async$a96,v)},
bL1(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.enY())+"|"+A.d.cJ(o,0,new B.enZ())
if(v===p.ch)return p.CW
u=new B.eo1()
t=x.s
s=C.a([],t)
r=new B.eo2(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f2(n,new B.eo_());w.C();){q=n.gR(0)
if(!A.d.b6(o,new B.eo0(q)))s.push(C.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dG(5,"count",x.S),x.N).dJ(0)},
Z(){var w,v=this
v.a1()
v.aca()
v.d.db=v.ay
w=v.qA(new B.eow(v))
w.i1(0)
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
w.bvN()},
abH(d){return this.bZ6(d)},
bZ6(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abH=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$abH)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cMT(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWs(A.d.gI(D.axt))
if(s.c!=null)s.m(new B.eo5())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abH,v)},
aWs(d){this.d.cPW(0,d.c,d.d)
this.E8()},
E8(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lP,new B.enS(this))},
awG(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
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
ceX(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
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
bYV(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mI.h(0,r.b).c===D.wV)continue
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
c6z(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hmP(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cyJ(d){var w,v,u,t,s,r,q=this,p=q.awG(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eY()
u=v.b
if(u==="button"){w.aEI(p)
return}if(q.r)return
t=D.mI.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qG)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aU()
q.E8()
return}if(q.r)return
r=q.c6z(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aU()
q.E8()}},
cgf(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ceX(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awG(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cgg(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aU()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aU()}}},
b0A(){var w,v,u=this
if(u.z!=null){w=u.bYV(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbq(v,w)}else v=!1
if(v){C.jU()
u.E8()}u.z=null
u.d.aU()}else if(u.x!=null){if(u.at)u.E8()
u.x=null}},
acn(d){return this.c0P(d)},
c0P(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$acn=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awG(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bS(F.n8,null,new B.eo8(q),p,!0,!0,!1,A.ly,!1,!1,x.y),$async$acn)
case 3:if(f===!0){r.W(0,s)
t.E8()}case 1:return C.h(u,v)}})
return C.i($async$acn,v)},
c6x(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B4(0,d,new C.v(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eY()
this.E8()},
ag7(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ag7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bS(F.n8,null,new B.eoa(),s,!0,!0,!0,A.ly,!1,!1,x.es),$async$ag7)
case 2:t=e
if(t!=null)u.aWs(t)
return C.h(null,v)}})
return C.i($async$ag7,v)},
adC(d){var w=0,v=C.j(x.H),u=this,t
var $async$adC=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.enV(),t,null,!0,!0,x.y),$async$adC)
case 2:if(f===!0){u.d.a8(0)
u.E8()}return C.h(null,v)}})
return C.i($async$adC,v)},
B(d){var w=this,v=null,u=C.a([C.ai1(w.r?new C.bI(A.a3,v,v,new C.D(A.FP,C.hn(D.bLS,D.fmN,new B.eou(w),v),v),v):w.c6A(),A.bd,A.iG),C.E(C.cq(new B.eov(w)),1)],x.p)
if(!w.r)u.push(w.ctx())
return C.c6(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bGK(){var w=null,v=new B.enX(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bX(0,C.en(C.av(C.p(w,C.cd(C.x(C.a([D.fxR,A.au,D.fFn,A.aB,v.$4(A.oZ,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.C0,A.cl,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.ln,A.bY,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alr,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fEH,new C.bI(A.a8,w,w,C.bK(!1,D.fv1,w,w,!0,w,w,this.gbGD(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.VH,new C.o(F.n8,w,s,t,w,w,A.n),w,w,w,A.fD,A8.aiL,w,w,w),w,w,w),u,!0),0,0,0)},
c6A(){var w=this,v=null,u=C.aH(v,v,v,v,S.np,v,v,v,new B.eog(w),v,v,v,v,v,v),t=w.a8z(A.NT,"How it works",new B.eoh(w),!0),s=w.ay?A.o8:O.ro
return new C.D(D.bxl,C.B(C.a([u,D.byP,t,w.a8z(s,"Sound",new B.eoi(w),!0),w.a8z(A.dX,"Ideas",w.gcjZ(),!0),w.a8z(D.yh,"Clear",w.gc6y(w),!0),w.aNl(A.iK,"Show",new B.eoj(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNl(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ac.vG,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hx(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a8z(d,e,f,g){return this.aNl(d,e,f,g,!1)},
ctx(){var w=null,v=new B.eoc(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wV),v.$2("CHANGE",D.E_),v.$2("REACT",D.qG)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AP,w,new C.bO(new C.az(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bsB,w,w,w)},
cty(d){var w,v,u,t,s=null,r=D.mI.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fC,C.aC(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aR7,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hP,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eob(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
B.bgN.prototype={
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
b8.b0(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
e.d=A.bS
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rA(new C.v(h,i),new C.v(f,g))
e.sar(new C.a8(A.a3,A.a8,A.x,d,b4,b4).aw(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hmP(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Ij)
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
b8.aQ(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.aA(0,v)
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
h=C.ll(o,i,A.dV.aA(0,v))
h.toString
i=C.ll(o,i,A.dV.aA(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bS
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rA(i,h)
o.sar(new C.a8(A.a3,A.a8,A.x,f,b4,b4).aw(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jv
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
i.z=A.jv
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(new C.bT(P.pt,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgO(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cfO(b8,b5.d,b6)
b7.restore()},
cfO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mI.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.ch(e.c,64,64)
t=C.bx(u,A.it)
s=t.eU(A.cC)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lw
d.aE(s,r)
if(v>0){s=t.cz(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zc
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
r.sar(new C.a8(A.b0,A.b4,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgO(C.jK(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aC(0,new C.v(s/2,r.gbd(r)/2)))
n=B.bgO(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.ay1[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qG){s=e.c.ad(0,new C.v(0,62))
r=C.N()
r.r=D.ayD[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgO(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgO(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wV)k.b1p(d,e.c.aC(0,D.Ij),q)
k.b1p(d,e.c.ad(0,D.Ij),q)},
b1p(d,e,f){var w
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
B.aLV.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.blm.prototype={}
B.PQ.prototype={
gY(d){return this.d}}
B.W2.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bkq(new C.cs(null,x.A),w,v,A.cG,A.bx,D.F0,null,null)}}
B.bkq.prototype={
b_7(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bm((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awT[A.o.E(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":B.lk("synth",u,420,0.3)
break
case"rainbow":B.lk("bell",u,700,0.35)
break
case"stars":B.lk("pluck",u+12,400,0.4)
break
case"sparks":E.dH(2400+t.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dH(110+t.r.av(60),"",140,0,0.22,"noise")}},
c9z(d){return this.b_7(d,!1)},
Z(){var w,v=this
v.a1()
w=v.qA(new B.eAb(v))
w.i1(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bvW()},
gb0U(){var w=this.Q
return w<0?new H.mS(1,A.k.E(this.y*0.18,360),0.85,1).iL():D.QY[w]},
aRM(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0U(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bH,A.av,v.aj())
m.toString
j.push(new B.PQ(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.av(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PQ(d,new C.v(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.av(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PQ(d,new C.v(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aYU(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0U()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.blm(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRM(e)
r.b_7(e,!0)
r.m(new B.ezN())},
aYT(){this.ax=null
this.m(new B.ezM())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mF,n,n,n,new B.ezW(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brQ(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b65)
k=C.aC(A.c7,new C.an(A.W,n,A.b1,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ezX(o),new B.ezY(o),new B.eA1(o),n,n,n,n,n,n,n,n,n,new B.eA2(o),new B.eA3(o),n,n,n,!1,A.a7)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cWb[w]
j.push(new B.dB(v.b,o.z===v.a,new B.eA4(o,v),v.c,A.bY,n))}u=C.a([new B.Ff(A.c,o.Q<0,new B.eA5(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Ff(D.QY[t],o.Q===t,new B.eA6(o,t),!1,n))
s=o.as
s=B.hH(A.bY,A.o.u(A.k.V(s)),"Size",36,4,new B.eA7(o),s)
r=o.ch
q=r?A.o8:O.ro
q=C.a([new B.dB("Sound",r,new B.eA8(o),q,A.bY,n),new B.fj(A.rn,"Undo",new B.ezZ(o),A.c,n),new B.fj(D.yh,"Clear",new B.eA_(o),A.c9,n)],m)
for(w=0;w<4;++w){p=D.dbt[w]
q.push(new B.Ff(p,o.at.A(0,p),new B.eA0(o,p),!1,n))}return B.jL(A.bY,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ex(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eV(j,"BRUSH",n),new B.eV(u,"COLOUR",n),s,new B.eV(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.brQ.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.b0(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.S(q),m=p.k("nn<1>"),l=new C.nn(q,1,a5,m),l.zL(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
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
q.d=A.bS
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
q.d=A.bS
q.e=A.fG
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fG
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mS(1,A.o.E(i*5,360),0.85,1).iL()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bS
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mS(1,A.o.E(a3*23,360),0.7,1).iL():l
a4.c6B(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rr
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6B(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
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
p.z=A.jv
d.aQ(n,p)
p=C.N()
p.r=h.gp(0)
d.aQ(n,p)},
au(d){return!0}}
B.We.prototype={
T(){return new B.aEk(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aO),$.aw()),null,null)}}
B.aEk.prototype={
gIO(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tM,null,1,null,v)
w.cM(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a1()
var w=this.gIO()
w.dd()
w.dU$.L(0,this.gbY2())},
bY3(){var w,v,u,t,s,r,q,p=this,o=p.gIO().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m5:new C.mc(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dH(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dH(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lk(s,D.avQ[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIO().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.bw1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.mc(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.QY[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mF,j,j,j,new B.eGL(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.ay2[k.y]
s=C.bw(t,C.c_(C.av(C.c7(k.gIO(),new B.eGM(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.az,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.U,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DE,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eGN(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hu,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cxO[r]
i.push(new B.dB(q.b,k.r===q.a,new B.eGO(k,q),j,A.bH,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Ff(D.QY[o],k.w===o,new B.eGP(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o8:O.ro
l=C.a([new B.dB(m,n,new B.eGQ(k),l,A.bH,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Ff(D.ay2[o][0],k.y===o,new B.eGR(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mB,"Replay",new B.eGS(k),A.c,j))
m=k.x
return B.jL(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ex(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.O,new B.eV(i,"MOVE",j),new B.eV(p,"COLOUR",j),new B.eV(l,"SOUND",j),new B.eV(n,"BACK",j),B.hH(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new B.eGT(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c_R(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bm(g*1.6*f)?1:0
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
case"glitch":u=A.o.E(A.k.bm(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bY:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mU.aA(0,t)
w=h
m=t
break
case"rainbow":w=new H.mS(1,A.k.E(g*360+e*40,360),0.75,1).iL()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dX(C.ef(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aM3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aM9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.a_I.prototype={}
B.VL.prototype={
T(){var w=C.a([],x.aS)
return new B.aDX(new C.cs(null,x.A),w,A.cG,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDX.prototype={
gadD(){var w=this.r
return new C.v(w.a/2,w.b/2)},
b29(){return new H.mS(1,this.f.aj()*360,0.6,1).iL()},
ar9(d,e,f,g){var w=this,v=w.gadD().ad(0,new C.v(Math.cos(e),Math.sin(e)).aH(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_I(v,new C.v(-t,s).aH(0,r).aH(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b29(),C.a([],x.g)))},
bG3(d,e,f){return this.ar9(d,e,f,!1)},
bG2(d,e){return this.ar9(d,e,1,!1)},
cvR(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bG2(40+w*u/5,v.aj()*3.141592653589793*2)},
bGZ(){var w=this.r
this.bG3(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
Z(){this.a1()
this.lj()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.ax))return
w=a2.e
v=w.length
if(v===0&&a2.fX$<300)return
u=a2.gadD()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
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
i=new C.v(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.v(m,o)
j=n.a
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
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
B.lk("bell",D.avQ[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.ekC(u),C.S(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dH(70,"",300,0.6,0.8,"sine")
A.d.br(w,new B.ekD(a2,u))},
cjS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadD()
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
gaW5(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aH(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mF,r,r,r,new B.ekq(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.ekr(s)),n=s.w
n=B.hH(A.cs,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.eks(s),n)
w=s.x
w=B.hH(A.cs,A.k.ab(w,1)+"x","Time",3,0.2,new B.eku(s),w)
v=s.Q
v=B.hH(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ekv(s),v)
u=s.ax
t=u?A.o8:O.ro
return B.jL(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eV(C.a([new B.dB("Sound",u,new B.ekw(s),t,A.cs,r),new B.dB("Trails",s.z,new B.ekx(s),A.O9,A.cs,r),new B.dB("Planets pull each other",s.y,new B.eky(s),A.yE,A.cs,r)],q),r,r),new B.eV(C.a([new B.fj(A.mA,"Solar system",new B.ekz(s),A.cs,r),new B.fj(A.no,"Comet",new B.ekA(s),A.c,r),new B.fj(A.mx,"Cluster",new B.ekB(s),A.c,r),new B.fj(D.yh,"Clear",new B.ekt(s),A.c9,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.bl9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.WZ.gp(0)
d.b0(new C.a9(0,0,0+g,0+f),w)
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
t.sar(new C.bT(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.af(g,f,t)
t=C.N()
t.sar(D.ejg.aw(0,C.bU(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bS
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
q.sar(new C.bT(P.pt,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jl.gp(0)
d.bE(g,f,t)
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
B.abE.prototype={}
B.W9.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bkv(new C.cs(null,x.A),w,v,A.cG,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkv.prototype={
Z(){this.a1()
this.lj()},
c6C(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abE(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.c6C()
w=a2.f
A.d.br(w,new B.eGc(a2))
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
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.K)(w),++d){k=w[d].a
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
A.d.br(w,new B.eGd(a2))
if(w.length<a1&&a2.ch)B.lk("bell",12+a2.r.av(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fX$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fX$
B.lk("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mF,l,l,l,new B.eG1(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eG2(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cXN[w]
h.push(new B.dB(v.b,m.at===v.a,new B.eG3(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cHM[w]
u.push(new B.dB(t.b,m.ax===t.a,new B.eG4(m,t),l,A.b2,l))}s=m.ch
r=s?A.o8:O.ro
r=C.a([new B.dB("Sound",s,new B.eG5(m),r,A.b2,l)],k)
s=m.x
s=B.hH(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eG6(m),s)
q=B.hH(A.b2,l,"Together",2.5,0,new B.eG7(m),m.y)
p=B.hH(A.b2,l,"Apart",2.5,0,new B.eG8(m),m.z)
o=B.hH(A.b2,l,"Same way",2.5,0,new B.eG9(m),m.Q)
n=m.as
return B.jL(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eV(h,"TOUCH",l),new B.eV(u,"LOOK",l),new B.eV(r,l,l),s,q,p,o,B.hH(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eGa(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsI.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aep,D.bm3],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,U.LK],v):C.a([D.biY,D.ba2],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.sar(new C.a8(A.b0,A.b4,A.x,w,a3,a3).aw(0,new C.a9(0,0,v,u)))
a5.b0(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
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
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mS(1,j,0.7,1).iL()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jv
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
j.sar(new C.a8(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).aw(0,D.eOX))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c9
else a1=v==="scare"?A.bH:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.ac6.prototype={}
B.Uh.prototype={
T(){var w=C.a([],x.bi)
return new B.aCx(w,A.cG,A.ax,C.U(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCx.prototype={
gIa(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacE(){return 54-8*(this.r/100)},
Z(){this.a1()
this.lj()
B.zx("chain_burst").bC(new B.dGZ(this),x.P)},
aYW(){return B.w_("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azO(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.ac6(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new H.mS(1,u.aj()*360,0.6,1).iL()))}},
Zj(d){var w,v=this
if(d==null)return 0
w=(v.fX$-d)/1000
if(w<0.4)return v.gacE()*A.dV.aA(0,w/0.4)
if(w<1.1)return v.gacE()
if(w<1.5)return v.gacE()*(1-(w-1.1)/0.4)
return 0},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.ax)||!j.Q)return
w=j.d
if(w.length===0)j.azO()
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
if(v!=null)n.push(new C.z(v,j.Zj(j.ax)))
for(v=A.d.gae(w),s=new C.f2(v,new B.dH_());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zj(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fX$
E.dH(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eY()
break}}}if(!(j.at!=null&&j.Zj(j.ax)>0||A.d.b6(w,new B.dH0(j)))&&j.fX$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gIa()){if(j.as>=j.gIa()*1.5)k=3
else k=j.as>=j.gIa()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BK("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aYW()}else E.dH(120,"",300,0,0.3,"saw")}}},
aYV(d){this.m(new B.dGP(this,d))
this.aYW()},
adE(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dGS(u),s,null,!0,!0,x.S),$async$adE)
case 2:t=e
if(t!=null)u.aYV(t)
return C.h(null,v)}})
return C.i($async$adE,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gIa(),t=w.x.h(0,""+w.r)
return B.jL(A.bY,A.hb,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dGW(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.rj,"Levels",w.gc6D(),A.bY,v),new B.fj(A.k6,"New board",new B.dGX(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auG(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQs,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYx(d,e){return this.auG(d,e,A.c)}}
B.baD.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.F0.gp(0)
d.b0(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cM2(d)
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
B.aL2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwV.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.buT()}}
B.aLS.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxb.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvK()}}
B.aM6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxj.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvZ()}}
B.FL.prototype={
gcPb(){return this.a.aC(0,this.b).gcn()>4}}
B.acW.prototype={}
B.VF.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bk4(new C.cs(null,x.A),w,v,A.cG,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk4.prototype={
aPm(d){return new H.mS(1,A.o.E(d*29,360),0.6,1).iL()},
a_3(d){var w,v=D.CD.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bm(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dY(w,u)},
aS1(d){A.d.br(this.e,new B.eg5(this,d))},
crW(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcn()
return d.aC(0,e.ad(0,w.aH(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcn()},
ayj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.a_3(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.FL(p,r,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iL()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.a_3(h)
f.push(new B.FL(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iL()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_3(h)
f.push(new B.FL(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iL()))}}},
Z(){this.a1()
this.lj()},
c6F(d,e){var w,v=this.fX$
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
w.push(new B.acW(new C.v(a2.w.a*(0.2+v.aj()*0.6),6),new C.v((v.aj()-0.5)*40,0),new H.mS(1,v.aj()*360,0.5,1).iL()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.K)(w),++r){q=w[r]
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
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.K)(u),++i){h=u[i]
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
if(a1<0){a2.c6F(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.br(w,new B.egu(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o8:O.ro,A.ad,p,p,p,21),p,p,p,new B.egj(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mF,p,p,p,new B.egk(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.egl(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d0f[w]
l.push(new B.dB(v.b,q.x===v.a,new B.egm(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.CD.gef(D.CD));t.C();){s=t.gR(t)
u.push(new B.dB(s,q.y===s,new B.egn(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ayZ[w]
t.push(new B.dB(r.b,q.z===r.a,new B.ego(q,r),p,A.b8,p))}s=q.Q
return B.jL(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eV(l,"TOOL",p),new B.eV(u,"SCALE",p),new B.eV(t,"SOUND",p),B.hH(A.b8,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.egp(q),s),new B.eV(C.a([new B.fj(D.bHI,"Stairs",new B.egq(q),A.b8,p),new B.fj(Al.NS,"Pinball",new B.egr(q),A.c,p),new B.fj(A.mx,"Random",new B.egs(q),A.c,p),new B.fj(D.yh,"Clear",new B.egt(q),A.c9,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhH.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.sar(D.bYP.aw(0,new C.a9(0,0,a0,a1)))
a2.b0(new C.a9(0,0,a0,a1),w)
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
q.d=A.bS
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jv
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jv
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sar(new C.bT(P.pt,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bS
u.r=A.aA.gp(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rz
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new C.bT(P.pt,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adr.prototype={}
B.VK.prototype={
T(){var w=C.a([],x.gB)
return new B.aDW(new C.cs(null,x.A),w,A.cG,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDW.prototype={
gaYX(){var w=this.w
return new C.v(w.a/2,w.b/2)},
ayw(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azJ(d){var w=D.CD.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dY(v,u)},
Z(){this.a1()
this.lj()},
aQM(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adr(w,A.k.E(t/v+u,1)))}},
lD(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.ax))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fX$
if(p.Q){r=p.z
s=p.azJ(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lk(r,s+12,q,0.55)}}}},
c6G(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaYX()),e=f.gcn()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayw(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.S(s))
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
m=h.ayw(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ek_(h,n).$0()
h.c.eg()
return}}h.m(new B.ek0(g,h,t))
if(h.Q)B.lk(h.z,h.azJ(g.a)+12,700,0.5)
C.eY()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o8:O.ro,A.ad,q,q,q,21),q,q,q,new B.ek7(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mF,q,q,q,new B.ek8(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ek9(r)),m=r.x
m=B.hH(A.bu,""+A.k.V(m),"Tempo",180,40,new B.eka(r),m)
w=C.a([],p)
for(v=J.aV(D.CD.gef(D.CD));v.C();){u=v.gR(v)
w.push(new B.dB(u,r.y===u,new B.ekb(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ayZ[t]
v.push(new B.dB(s.b,r.z===s.a,new B.ekc(r,s),q,A.bu,q))}return B.jL(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eV(w,"SCALE",q),new B.eV(v,"SOUND",q),new B.eV(C.a([new B.fj(A.dX,"Demo",new B.ekd(r),A.bu,q),new B.fj(A.mx,"Random",new B.eke(r),A.c,q),new B.fj(D.yh,"Clear",new B.ekf(r),A.c9,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.bla.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.WZ.gp(0)
a5.b0(new C.a9(0,0,0+a6.a,0+a6.b),w)
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
r.sar(new C.a8(A.b4,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.a9(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mS(1,A.k.E(s.$1(l)*23,360),0.55,1).iL()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dim[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kl(new C.es(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.jv(1),a4,a4,a4,a4,A.c5,a4)
i.en()
o=i.b.c
m=J.fTP(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.v(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.sar(D.eiT.aw(0,C.bU(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mS(1,A.k.E(s.$1(a0)*23,360),0.55,1).iL()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fTP(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jv
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.sar(new C.bT(P.pt,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.v(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLQ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx9.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvI()}}
B.aLR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxa.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvJ()}}
B.tl.prototype={}
B.b9w.prototype={}
B.VI.prototype={
T(){var w=x.S
return new B.aDU(C.a([],x.aq),C.U(w,w),C.aX(w),D.eVe)}}
B.aDU.prototype={
Z(){this.a1()
B.zx("molecule_maker").bC(new B.eju(this),x.P)},
ajc(d){var w={}
w.a=0
this.f.bM(0,new B.ejg(w,d))
return w.a},
gaZ2(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i3R(t,this.f,D.a38[this.d])},
c6X(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eE()
w.dt(t*7+3)
t=v.y
v.m(new B.eja(v,e,t.a,w,t.b))
B.w2("pop",u.length,90,0.35)},
awK(d){return this.m(new B.ejb(this))},
aZ3(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c72(d){this.m(new B.ejf(this,this.aZ3(d)))},
col(){var w=this.r
if(w==null)return
this.m(new B.eje(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a38[k.d],h=k.gaZ2()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.wf.h(0,w[u].a).a-k.ajc(u)
w=i.c
w=w.gdL(w)
t=w.dz(w,new B.ejo(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hm
r=x.p
s=C.x(C.a([new C.D(A.fN,B.fe7(w,s,h&&k.d<12?new B.fj(A.j3,"Next",new B.ejp(k),A.b2,j):j),j),C.E(C.cq(new B.ejq(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dB(p+D.a38[u].b,k.d===u,new B.ejr(k,u),j,A.hm,j))}q=C.a([],r)
for(p=D.wf.gdL(D.wf),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dy:m.b
q.push(new B.dB(n+" \xb7 "+m.a,!1,new B.ejs(k,o),j,l,j))}return B.jL(A.hm,A.hb,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eV(w,"GOAL",j),new B.eV(q,"ADD",j),new B.eV(C.a([new B.dB("Remove selected atom",!1,k.gcok(),A.e7,A.c9,j),new B.dB("Clear all",!1,k.gc6Y(k),A.k6,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.bio.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hm.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bM(0,new B.dpE(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.wf.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jv
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
h.sar(new C.bT(A.Kb,0.5,A.x,a3,0,C.a([f,g,e],r),I.ax1,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aw:A.c
d=new C.kl(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c5,a3)
d.en()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.v(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.bc:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.u(k)
a1=new C.kl(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nD),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c5,a3)
a1.en()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.h4(a3,a3,a3,a3,D.f3_,A.a4,A.c6,a3,A.dP,A.c5)
d.en()
d.a4(a4,new C.v((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.UG.prototype={
T(){var w=x.s
return new B.bjk(C.a([],w),C.a([],w))}}
B.bjk.prototype={
Z(){this.a1()
this.aw3()
B.zx("dna_lab").bC(new B.dPJ(this),x.P)},
gb3o(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a4d.h(0,w[u])
t.toString
s.push(t)}return A.d.h2(s)},
ga97(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3o(),w,v))}return u},
aw3(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eE()
k.dt(l.e*31+l.d*7+C.BX(new C.T(Date.now(),0,!1)))
w=new B.dPy(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mJ(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a4d.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h2(r))}if(!A.d.b6(t,new B.dPx()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b16()},
b16(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h1E(s.ga97()[r])
v=J.dJ(D.CE.gef(D.CE),new B.dPz(w)).dJ(0)
u=new C.eE()
u.dt(r+s.e)
A.d.fo(v,u)
u=C.a([w],x.s)
A.d.v(u,C.d9(v,0,C.dG(3,"count",x.S),C.S(v).c))
t=new C.eE()
t.dt(s.e*3+r)
A.d.fo(u,t)
s.z=u},
aZ1(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.doB.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a4d.h(0,w.f[v])
u.toString
break A}u=B.h1E(w.ga97()[v])
break A}w.m(new B.dPw(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dPH(),e=new B.dPC(),d=h.d===2?h.gb3o():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mQ,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bY.j(0.18):A.K
q=new C.aT(10,10)
p=new C.az(t.length===s?A.bY:A.bE,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga97()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cl(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.brH,A.el,g,g,g))}v.push(C.bV(A.bA,u,A.br,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bV(A.bA,u,A.br,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Ah.NZ,j<t.length?A.aA:A.bE,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.Mp,C.bV(A.bA,u,A.br,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mQ,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dm
q=new C.aT(12,12)
o=j<t.length
p=new C.az(o?A.b2:A.b_,1,A.q,-1)
if(o){o=D.CE.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bW
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ek,g,g,g))}v.push(C.bV(A.bA,u,A.br,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bV(A.bA,u,A.br,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fe7(u,t>=(h.d===2?3:9)?A.b2:A.bY,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fe7(u,A.bY,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.U2,g,g,g))
v=C.cd(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dB(D.d62[j],h.d===j,new B.dPD(h,j),g,A.bY,g))
u=C.a([new B.eV(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.k6,"New strand",new B.dPE(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.CE.h(0,i)
q.toString
a0.push(new B.fj(D.a08,q,new B.dPF(h,i),A.bY,g))}u.push(C.bV(A.bA,a0,A.br,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.avV:D.cPV
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aC(g,C.p(A.A,new C.y(k,g,D.f3e,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dPG(h,k),g,g,g,g,g,g,!1,A.a7))}u.push(C.B(a0,A.m,g,A.qg,A.j,0,g,g))}return B.jL(A.bY,A.hb,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.UW.prototype={
T(){return new B.aD0(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aD0.prototype={
Z(){var w,v=this
v.a1()
w=v.qA(v.gc6Z())
w.i1(0)
v.d!==$&&C.aP()
v.d=w
B.zx("ecosystem").bC(new B.dSy(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bv7()},
gaMG(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c7_(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaMG()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bm(w),5)===0)B.w_("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dSl())},
aal(d){this.m(new B.dSk(this,d))
B.w2("pop",3,120,0.4)},
c71(){return this.m(new B.dSm(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.YO,B.fe7(r,t.gaMG()?A.b2:A.c9,s),s),C.E(new C.D(D.bse,C.bw(C.n(18),C.b3(s,s,s,new B.bdI(t.f,t.r,t.w,s),A.f6),A.aq),s),1),new C.D(A.eI,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.fai,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hH(A.b2,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dSq(t),w)
v=t.y
v=B.hH(A.bN,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dSr(t),v)
u=t.z
return B.jL(A.b2,A.hb,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hH(A.cs,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dSs(t),u),new B.eV(C.a([new B.dB("Drought",!1,new B.dSt(t),A.yC,A.aM,s),new B.dB("Disease",!1,new B.dSu(t),D.bHA,A.bu,s),new B.dB("+ Foxes",!1,new B.dSv(t),s,A.cs,s),new B.dB("+ Rabbits",!1,new B.dSw(t),s,A.bN,s),new B.dB("Reset",!1,t.gc70(),A.k6,A.aN,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdI.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.sar(D.bWQ.aw(0,new C.a9(0,0,d,a0)))
a1.b0(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.vc,A.bc,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.b0(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eE()
r.dt(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hk.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d4L(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.beM.gp(0)
a1.b0(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dm.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d4N(h,j,a1)
g.$3(0,100,A.bc)
g.$3(1,120,A.bN)
g.$3(2,24,A.cs)
g=new B.d4M(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bc,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bN,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aLg.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aRK.prototype={
guZ(){return A.d.cJ(this.a,0,new B.bG3())}}
B.U8.prototype={
T(){var w=x.S
return new B.biZ(B.i0U(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.biZ.prototype={
gvW(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dD9())},
Z(){var w,v=this
v.a1()
w=v.qA(new B.dDm(v))
w.i1(0)
v.x!==$&&C.aP()
v.x=w
B.zx("balance_lab").bC(new B.dDn(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buL()},
cyW(d){var w,v=this
v.m(new B.dDa(v,d))
B.w2("click",v.f[d],60,0.4)
if(v.gvW()===v.d[v.e].guZ()&&v.r.L(0,v.e)){B.w2("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.w_("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dDf(),C.S(k).k("M<1,m>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aG(k," + ")
if(o.gvW()===m[o.e].guZ())s="\u2696\ufe0f Balanced! "+m[o.e].guZ()+" = "+o.gvW()+". The torques are equal, so the seesaw stays level."
else s=o.gvW()>m[o.e].guZ()?"The right side is too strong ("+o.gvW()+" vs "+m[o.e].guZ()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guZ()+" vs "+o.gvW()+"). Add weight to the right, or place it further from the middle."
k=o.gvW()===m[o.e].guZ()?A.b2:A.aM
k=B.bA3(s,k,o.gvW()===m[o.e].guZ()&&o.e<m.length-1?new B.fj(A.j3,"Next",new B.dDg(o),A.b2,n):n)
w=C.E(C.cq(new B.dDh(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guZ(),n,n,n,n,n,n,D.aRE,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.YO,k,n),w,new C.D(D.ahX,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvW(),n,n,n,n,n,n,D.aRE,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dB(w+p,o.e===v,new B.dDi(o,v),n,A.aM,n))}return B.jL(A.aM,A.hb,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eV(u,"LEVEL",n),new B.eV(C.a([new B.dB("Clear right side",!1,new B.dDj(o),A.k6,A.c9,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9I.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bE())
v=C.N()
v.r=A.ak.gp(0)
d.aQ(i,v)
v=h-120
i=C.N()
i.r=A.aJ.gp(0)
d.b0(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.jb(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.he)
w=C.N()
w.sar(D.bZw.aw(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hM.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.frE(d,""+Math.abs(s),new C.v(w,22),A.bW,10)}q=new B.cEA(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aN)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bY)
if(w[s]===0){l=C.bx(C.ch(new C.v(m,-22),22,v),A.he)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b_.gp(0)
r=k.H()
i.drawRRect(C.et(l),r)
r.delete()
B.frE(d,"+",new C.v(m,-22),A.bW,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.af(new C.v(h,f),7,i)},
au(d){return!0},
gjr(){return this.e}}
B.V9.prototype={
T(){return new B.bjw(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bjw.prototype={
ga0w(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadN(){var w=this.ga0w(),v=this.r,u=D.ayI[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a1()
w=v.qA(new B.dWB(v))
w.i1(0)
v.x!==$&&C.aP()
v.x=w
B.zx("gear_lab").bC(new B.dWC(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bvf()},
c73(d,e){var w,v=this
v.m(new B.dWr(v,d,e))
if(v.gadN()&&v.w.L(0,v.r)){B.w2("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.w_("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0w(),n=r.ga0w(),m=D.ayI[r.r].a
m=r.gadN()?"\u2705 Done! Ratio "+A.k.ab(r.ga0w(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadN()?A.b2:A.cs
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.YO,B.bA3(m,w,r.gadN()&&r.r<7?new B.fj(A.j3,"Next",new B.dWv(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.bfb(v,r.f,q),A.f6),1),new C.D(D.ahX,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0w(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a81,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dB(m+s,r.r===t,new B.dWw(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eV(o,"GOAL",q),B.hH(A.aN,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dWx(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avz("Gear "+s+" teeth",p,new B.dWy(r,t),8,40,D.dfW[t],""+p,q))}return B.jL(A.cs,A.hb,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.bfb.prototype={
bQq(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ekb,D.epE,D.eG0,D.ewL],s=v===0,r=0;r<4;++r){q=t[r]
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
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fe(g,A.pv)
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
h=new B.dcL(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cS)
h.$5(new C.v(0,0),g[0],w[0],j,A.n0)
h.$5(new C.v(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.dcM(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aN)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.Ui.prototype={
T(){var w=$.aw()
return new B.bjb(new C.as(new C.bb("Meet me at noon",A.b5,A.aO),w),new C.as(new C.bb("LEMON",A.b5,A.aO),w),C.aX(x.S))}}
B.bjb.prototype={
Z(){this.a1()
this.aXF()
B.zx("cipher_lab").bC(new B.dHl(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aXF(){this.y=1+A.cG.av(25)
this.z=0},
ga9B(){var w=this
return B.a1E(B.a1E(D.He[w.x],w.y),-w.z)===D.He[w.x]},
gaxI(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1E(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1E(u,0).split(""),x.s),new B.dH3(),x.dv).h2(0)
break A}w=B.idG(u,v.e.a.a)
break A}return w},
aSW(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bW.E>")),v=v.k("bW.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fe(q,A.x6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bB(1,A.bh,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aN,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.MI,r,r,r,r),new C.y(C.jK(65+s),r,D.fc7,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m0,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kI,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dHc(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f6k,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kI,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dHd(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iQ,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fCY)
w.push(A.au)
v=A.aN.j(0.12)
u=C.n(14)
t=C.I(A.aN.j(0.4),A.q,1)
w.push(C.p(o,C.zP(p.gaxI().length===0?"\u2026":p.gaxI(),D.fb6,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bA3(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aN,o))
w.push(A.ac)
w.push(D.fjg)
w.push(A.au)
w.push(p.aSW(p.gaxI()))
w.push(A.au)
w.push(D.flF)
s=C.cw(w,o,A.bB,o,o,A.ah,!1)}else{w=B.bA3("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1E(D.He[p.x],p.y),o,o,o,o,o,o,D.fbH,o,o,o)
u=(p.ga9B()?A.b2:A.aN).j(0.14)
t=C.n(14)
r=C.I((p.ga9B()?A.b2:A.aN).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fwt,v,A.R,D.fqS,C.p(o,C.d(B.a1E(B.a1E(D.He[p.x],p.y),-p.z),o,o,o,o,o,o,D.fd9,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aSW(B.a1E(D.He[p.x],p.y)),A.O],x.p)
if(p.ga9B())t.push(B.bA3("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fj(A.k6,"Next",new B.dHe(p),A.b2,o)))
s=C.cw(t,o,A.bB,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eV(C.a([new B.dB("Make a secret",w===0,new B.dHf(p),A.js,A.aN,o),new B.dB("Crack a code",w===1,new B.dHg(p),A.q6,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dB(n[q],p.r===q,new B.dHh(p,q),o,A.aN,o))
v=C.a([new B.eV(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hH(A.aN,""+u,"Shift",25,1,new B.dHi(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hH(A.aM,""+v,"Shift back",25,0,new B.dHj(p),v))}return B.jL(A.aN,A.hb,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aKV.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aLo.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.ed.prototype={}
B.ty.prototype={
apS(d,e,f,g){var w=this
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
B.aac.prototype={}
B.abj.prototype={}
B.a4k.prototype={
bdg(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hi()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aac(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c2W(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new B.bMs())},
ajF(d,e,f,g){var w="p"+this.c++,v=new B.ty(w,e,f,g)
v.apS(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new B.bMD(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cH0(d,e,f,g,h){return A.d.b6(this.b,new B.bMy(e,f,g,h))},
akn(d,e,f,g){var w
if(d===f||this.cH0(0,d,e,f,g))return null
w=new B.abj(d,e,f,g)
this.b.push(w)
return w},
aAh(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zH(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amZ(d){return this.LD(d)&&!d.x&&d.cx>this.zH(d)},
b5P(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LD(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c74(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zb.h(0,v)
if(w!=null)return w.a
return 100},
v6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2W(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.S(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bME(a2),t).cJ(0,0,new B.bMF(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new B.bMH(o)
m=C.a([],x.t)
l=new B.bMG(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new B.bMJ(g,l,n)
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
a2.b5L(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zH(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5L(e,d,w,!0)
a2.bNg(a4)},
b5L(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new B.bMu(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bMt(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bMw(C.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
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
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5P(t)*(1+t.CW))
a4=b2.aAh(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c74(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQp(e,a0,b8)
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
bQp(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bNg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAh(o)/a1.b5P(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zH(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFl(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdg(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tM(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tM(o,"The "+$.qj().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tM(o,"More than 1.5 amps went through the "+$.qj().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tM(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tM(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zb.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qj().h(0,n).b
l=f.b
l=l===A.k.jc(l)?""+A.k.V(l):C.u(l)
g=f.c
g=g===A.k.jc(g)?""+A.k.V(g):C.u(g)
a1.tM(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eSX.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tM(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tM(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tM(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tM(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tM(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tM(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFl(d){return A.d.b6(this.a,new B.bMr(d))},
tM(d,e){var w
d.x=!0
d.ay=e
this.bdg(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhU(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGq(d){var w=d.b
return D.aO3.t(0,w)||D.zb.ai(0,w)||w==="buck"||w==="regulator"},
beH(d){var w,v=!0
if(!this.LD(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zb.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uy(d,e){var w=this.b
return new C.a_(w,new B.bML(d,e),C.S(w).k("a_<1>")).gM(0)},
Cu(d){var w,v
if(d.x)return!1
w=d.b
if(D.zb.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qj().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGq(d)||i.Cu(d))return null
w=i.Uy(d,0)
v=i.Uy(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.S(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcPv(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jc(r)?""+A.k.V(r):C.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zb.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGv("battery"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Uy(n,0)+i.Uy(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGv("switch"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qj().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zH(k))return"The "+$.qj().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zH(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b6(u,new B.bMz(i,d))
h=q.b
h=h===A.k.jc(h)?""+A.k.V(h):C.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGv(d){var w=this.a
return new C.a_(w,new B.bMC(d),C.S(w).k("a_<1>"))},
aG3(d){return this.aGv(d).b6(0,new B.bMB(0.35))},
pN(d,e){return A.d.b6(this.a,new B.bMA(e))}}
B.aiz.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.EU.gp(0)
c0.b0(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m1.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m1.ai(0,h.b)?(h.ch-1)*38:0
b4.cDZ(c0,new C.v(k*b6+j*(42+i),l*b7),new C.v(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hzs(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bS
c0.bE(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.adW.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zc
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mU.aA(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cgM(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zH(a0)){g=j+0
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
a9=new C.kl(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(g+-3,f+-8))}if(!a0.x)g=(D.aO3.t(0,h)||D.zb.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cu(a0)&&r.Uy(a0,0)+r.Uy(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kl(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m1.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.EU.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.beH(a0)?A.c9:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beH(a0)){a9=new C.kl(new C.es("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c9,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.XG,F.XN,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bS
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Rs
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b6(q,new B.bHf())){b3=A.d.cJ(q,0,new B.bHg())
$.W()
b7=C.N()
b7.r=D.b9N.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b0(new C.a9(0,0,b8,b9),b7)
a9=C.h4(b5,b5,b5,b5,D.f2T,A.a4,A.c6,b5,A.dP,A.c5)
a9.wH(b6-24)
a9.a4(c0,new C.v(12,10))}},
qm(d,e,f,g,h){var w=null,v=C.h4(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(d,f)},
cDZ(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hrT(a1,a2,a3)
d.F(new C.cW(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.adW,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aN,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bS
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aQ(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bS
u.r=(a4?A.c:o).gp(0)
a0.aQ(d,u)
if(q){n=new C.Su(new C.vD(C.xa(d),!1,C.a([],x.f5))).gI(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jA()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jA()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jA()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jA()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jA()
i=t[u].ML(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OV(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b0:A.a3
u=g?A.b4:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.sar(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.Hg,null).aw(0,d))
return w},
avT(d,e,f){return this.OV(d,e,f,!0)},
c2x(d,e){return this.OV(d,A.bn,A.iC,e)},
ahd(d,e){var w,v,u
$.W()
w=C.N()
w.sar(D.aMz.aw(0,C.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e9f)
v=e.ad(0,D.e9o)
u=C.N()
u.r=A.ec.gp(0)
u.c=1.2
d.bE(w,v,u)},
cgM(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.sar(D.bWv.aw(0,D.ePG))
c0.c=3.4
c0.d=A.bS
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mJ
c1.hY(D.ePy,w)
if(c3){w=C.bx(D.ePF,A.ke)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h7V(c2)
c1.bE(new C.v(-u,0),D.eax,c0)
c1.bE(D.e8n,new C.v(u,0),c0)
t=c2.x
w=c2.b
s=D.m1.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bC8(c1,c2)
break
case"solar":r=C.bx(D.ePB,A.iu)
c1.aE(r,b3.OV(new C.a9(r.a,r.b,r.c,r.d),A.dy,A.bN,!1))
b9=C.N()
w=C.aq(D.bdc,A.d_,0.25+0.55*c2.f)
w.toString
v=C.aq(D.blb,A.mn,0.3+0.4*c2.f)
v.toString
b9.sar(new C.a8(A.az,A.aC,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a6H))
c1.b0(D.a6H,b9)
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
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aQ(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dQ.j(0.9).gp(0)
c1.af(D.e8t,4+4*w,b9)
break
case"crank":n=C.bx(D.ePm,A.hf)
c1.aE(n,b3.avT(new C.a9(n.a,n.b,n.c,n.d),A.bq,A.bK))
b9=C.N()
b9.sar(D.aMA.aw(0,C.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new C.v(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bS
c1.bE(A.J,m,b9)
b9=C.N()
b9.sar(D.ejb.aw(0,C.bU(m,7)))
c1.af(m,7,b9)
b3.ahd(c1,D.eaq)
b3.ahd(c1,D.e8g)
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
c1.aQ(v,l)
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
b9.sar(D.eiS.aw(0,C.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.ePt,A.qr)
b9=C.N()
b9.sar(D.ap2.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.ahd(c1,D.Sl)
b3.ahd(c1,D.aHp)
i=c2.w?D.aHp:D.e80
b9=C.N()
b9.r=A.aw.gp(0)
b9.c=6
b9.d=A.bS
c1.bE(D.Sl,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bN).gp(0)
b9.c=4
b9.d=A.bS
c1.bE(D.Sl,i,b9)
b9=C.ll(D.Sl,i,0.85)
b9.toString
w=C.N()
w.r=A.av.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aN8,D.aME)
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
b9.r=C.aq(A.bN,A.cs,c2.fx).gp(0)
c1.bE(D.aHG,D.aHo,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.bE(D.aHG,D.eaO,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.bE(D.e8U,D.aHo,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.ch(new C.v(F.mH[g]*22,0),20,9)
w=C.bx(f,A.hF)
o=b3.OV(f,A.d5,A.oG,!0).H()
b9.drawRRect(C.et(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.sar(D.ej3.aw(0,C.bU(A.J,21)))
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
b9.sar(D.eiQ.aw(0,C.bU(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bS
c1.bE(new C.v(b9*3,w*3),new C.v(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aN8,D.aME)
b9=C.N()
b9.sar(D.bZO.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(C.c0(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.b0(D.ePP,b9)
b9=c2.r
b3.qm(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ea5,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.zc
c1.af(D.wm,34,v)}n=C.ch(D.e7w,12,18)
c1.aE(C.bx(n,A.hF),b3.OV(n,A.bn,A.e3,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Ws
else{v=C.aq(A.e3,A.i1,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.EV
else{l=C.aq(A.dy,A.dQ,c2.fx)
l.toString}w.sar(new C.bT(A.t7,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.rI,17)))
c1.af(A.rI,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rI,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cW(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aQ(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.eaK,D.eaM,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e8N,D.e8Q,v)
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
else{w=C.aq(A.dy,D.be1,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aQ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.av.j(0.6*w).gp(0)
v.z=D.dr6
c1.af(A.rI,30,v)}w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.eaQ,D.eaP,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.e8W,D.e8V,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cW(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j2
else{l=C.aq(A.es,D.aeJ,c2.fx)
l.toString}if(t)j=A.ku
else{j=C.aq(A.ks,A.av,c2.fx)
j.toString}v.sar(new C.a8(A.az,A.aC,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eOT))
c1.aQ(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jl.gp(0)
c1.aQ(a6,v)
v=C.N()
v.r=A.eK.gp(0)
c1.b0(D.eOZ,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cW(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aQ(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aE(C.bx(a7,A.he),b3.avT(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.ct.gp(0)
c1.b0(D.eOG,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.b0(D.eOH,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.ch(D.e7O,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c0(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.aw.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qm(c1,"M",D.eap,A.aw,14)
break
case"buzzer":a8=C.ch(A.J,42,42)
b9=C.N()
b9.sar(D.ej7.aw(0,a8))
c1.hY(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b_.gp(0)
c1.af(A.J,6,b9)
b3.qm(c1,"+",D.eai,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bY.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c0(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.ePp,A.he)
w=C.N()
w.sar(D.bXt.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
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
w.r=D.beF.j(0.5*b9).gp(0)
w.z=A.jv
c1.aQ(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bS
b9.r=C.aq(A.lL,A3.Xv,c2.fx).gp(0)
c1.aQ(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.he)
w=C.N()
w.sar(D.bWn.aw(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bN.gp(0)
c1.b0(D.eP4,w)
for(p=0;p<4;++p){b0=new C.kl(new C.es("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.H(!0,A.aw,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.jv(1),b4,b4,b4,b4,A.c5,b4)
b0.en()
b0.a4(c1,new C.v(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aE(C.bx(b1,A.hF),b3.c2x(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.b0(new C.a9(-3,w,11,w+b9),v)
b3.qm(c1,"1F",D.wm,A.c,11)
break
case"radio":a1=C.bx(D.a6H,A.hf)
b9=C.N()
b9.sar(D.c_3.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oG.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bx(D.ePq,A.iu)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lL.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fJ:A.nS).gp(0)
c1.b0(D.eOJ,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bE(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aMA.aw(0,C.bU(D.a5H,6)))
c1.af(D.a5H,6,w)
w=C.N()
w.r=A.oG.gp(0)
c1.af(D.e8m,4,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=1.8
c1.bE(D.e8k,D.aHt,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aHt,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nX.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c0(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.ePA,A.he)
v=C.N()
v.r=L.mm.gp(0)
c1.aE(w,v)
b2=C.bx(D.ePx,A.hF)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.et(b2),$.pz(),!0)
b9.translate(-33,-21)
E.h43(c1,D.eVF,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.af(D.e8y,1.6,b9)}else{w=C.N()
w.r=D.vo.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aQ(b9,w)}b9=C.N()
b9.r=A.bq.gp(0)
c1.b0(D.eOY,b9)
break}B.ibf(c1,c2,b3.b.d,b3.gc75())
if(t)b3.qm(c1,"\u2716",D.eaT,A.av,14)
if(s)c1.a.restore()},
bC8(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aE(C.bx(w,A.qr),m.avT(w,A.dy,A.iY))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.sar(D.aoW.aw(0,v))
d.b0(v,u)
u=C.N()
u.r=A.dU.gp(0)
d.b0(D.ePd,u)
t=new C.a9(28,-5,34,5)
d.aE(C.bx(t,A.hd),m.OV(t,A.dy,A.iC,!0))
m.qm(d,"+",D.e85,A.aM,11)
m.qm(d,"\u2212",D.ear,A.ad,11)
m.qm(d,C.u(l===A.k.jc(l)?A.k.V(l):l)+"V",D.eab,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bE.gp(0)
d.b0(D.ePc,u)
u=e.as
s=C.N()
s.r=C.aq(A.av,A.b2,u).gp(0)
d.b0(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qm(d,"FLAT",D.ea4,A.c9,9)}if(l>2){u=C.N()
u.r=A.b_.gp(0)
u.c=1
d.bE(D.e7C,D.aH8,u)
m.qm(d,l>3?"3 cells":"2 cells",D.eaa,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.qr)
$.W()
s=C.N()
s.sar(D.bZB.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cS.gp(0)
d.b0(D.ePe,s)
for(u=d.a,q=0;q<2;++q){p=F.aym[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.aMz.aw(0,C.bU(new C.v(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qm(d,"9V",D.ea6,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.iu)
$.W()
s=C.N()
s.sar(D.aoW.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bH.gp(0)
d.b0(D.ePz,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.ch(new C.v(F.a3v[q],-20),8,10),A.hd)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.et(s),n)
n.delete()}m.qm(d,"+",D.e8c,A.av,10)
m.qm(d,"12V",D.ea7,A.aw,15)}},
au(d){return!0}}
B.mC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ty(o,r,q,p)
n.apS(o,r,q,p)
k.push(n)
J.iw(s[4],new B.clh(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akn(m,u[1],l,u[3])}}}
B.aix.prototype={
T(){var w=x.N
return new B.aiy(A.J,A.ax,C.U(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aiy.prototype={
adQ(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGU(w,d))
w.as=C.cM(A.ll,new B.bGV(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.brY()},
a_D(d,e){return this.ceI(d,e)},
b03(d){return this.a_D(d,!1)},
ceI(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_D=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r8:A.xG
p=d.b
w=3
return C.b(E.h4m(s,r,p,d.ax<3.2,q,$.qj().h(0,p).b),$async$a_D)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_D,v)},
cro(d){var w=this,v=new C.T(Date.now(),0,!1),u=w.at.ca(0,d.a,new B.bGW()),t=J.cF(u)
t.L(u,v)
t.br(u,new B.bGX(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0Y(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kv,new B.bGY(w,u,d))}},
a_j(d){return this.cd5(d)},
cd5(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_j=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.icq(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_j)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_j,v)},
a0Y(d){return this.coZ(d)},
coZ(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0Y=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kS,null,new B.bGS(u,d),t,!0,!0,!1,A.kD,!1,!1,x.H),$async$a0Y)
case 2:return C.h(null,v)}})
return C.i($async$a0Y,v)},
Z(){this.a1()
this.beR()
this.lj()},
beR(){this.a.c.e=new B.bHc(this)},
lD(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v6(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.m1.h(0,s.b)
if((r==null?null:r.b)!==D.zC)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_D(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dH(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dH(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cG.aj()<0.5
else u=!1
if(u)E.dH(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dH(900+A.cG.av(800),"",90,0,0.1,o)
if(A.cG.aj()<0.35)E.dH(300+A.cG.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cG.aj()<0.4
else u=!1
if(u)E.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dH(330+A.o.E(110*A.k.bm(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dH((A.k.bm(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dH(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dH(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cG.aj()<0.5
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
q.m(new B.bHd())},
b75(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m1.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0K(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.S(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m1.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cE_(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m1.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m1.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hrT(new C.v(k,n),new C.v(i,l),p)
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
adO(){this.a.toString
this.m(new B.bGn())},
boJ(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d02[v]
if(!A.d.b6(p.a.c.a,new B.bHe(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.Il:o
s=s?K.Il:o
q=t.ajF(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dH(1200,"",50,0,0.3,"tri")
p.adO()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.QH[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.am(u+1,2)):w
r=t?A.d.fQ(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b0z(s,!0))
n.a.toString
if(t)w.push(n.b0z(r,!0))
w.push(C.E(C.cq(new B.bHb(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0z(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qj()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aC(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zS,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nA,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tO,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGo(this,u),p,p,p,p,p,p,!1,A.a7))}return C.p(p,C.cw(m,p,A.h7,p,p,A.aP,!1),A.f,p,p,new C.o(F.AP,p,new C.bO(A.Y,A.Y,new C.az(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZ6(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.acD,w,C.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ahY,w,w,w)},
cgN(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qj().h(0,o),m=d.dy,l=d.fr,k=new B.bGH(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Jo,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bNE,p,p,p,new B.bGu(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GK,p,p,p,new B.bGv(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.DF,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.fbw,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c9:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcN(d)
if(v!=null){l=(d.x?A.av:A.aF).j(0.14)
j=C.n(10)
i=C.I((d.x?A.av:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i4,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fhW,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.h27(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dB("CH "+t,d.at===u,new B.bGw(q,d,u),p,h,p))}l=C.bV(A.bA,l,A.br,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Cu(d)?"Showing: "+F.Qh[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Cu(d))l.push(new B.fj(A.Gj,"Open big screen",new B.bGz(q,d),h,p))
A.d.v(m,l)}if(D.m1.ai(0,o)&&!B.h27(o)){l=C.a([A.am,C.d(q.a.c.Cu(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Cu(d))l.push(new B.fj(A.O_,"Open the "+$.qj().h(0,o).b,new B.bGA(q,d),h,p))
A.d.v(m,l)}if(D.m1.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.BW,"Make it bigger (or tap it 4 times)",new B.bGB(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Cu(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fcl,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dh5[s]
j=r===A.k.jc(r)?A.k.V(r):r
l.push(new B.dB(C.u(j)+" V out",d.e===r,new B.bGC(q,d,r),p,h,p))}i.push(new C.D(A.lQ,C.bV(A.bA,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fA7)
A.d.v(m,i)}if(q.a.c.LD(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zH(d),2)
i=q.a.c
w=i.amZ(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amZ(d)?A.c9:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zH(d),0,1)
i=q.a.c.amZ(d)?A.av:A.b2
m.push(new C.D(A.i4,C.x(C.a([l,A.cV,C.bw(j,C.m6(A.bE,p,p,5,p,w,new C.lZ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i4,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f6h,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d6J[s]
j=r===1.5?"1.5 V (rechargeable)":C.u(r)+" V"
l.push(new B.dB(j,d.e===r,new B.bGD(q,d,r),p,h,p))}m.push(C.bV(A.bA,l,A.br,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYs[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dB(j,d.r===r,new B.bGE(q,d,r),p,h,p))}m.push(C.bV(A.bA,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGF(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGG(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bGx(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bGy(d)))
if(o==="crank")m.push(D.fvB)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hg,p,p,p))
return q.aZ6(new C.cT(D.b_M,C.cd(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.baF.prototype={}
B.UX.prototype={
T(){return new B.aD1(B.h7U(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aD1.prototype={
Z(){this.a1()
$.aW.bY$.push(this)
this.adP()},
adP(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fxT(),$async$adP)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.ibD(t.d,r)
if(s!=null){t.m(new B.dSG(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adP,v)},
EU(){var w,v=this
if(!v.as)return
w=B.i2a(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDC(w)},
j7(d){if(d!==A.fw)this.EU()},
q(){$.aW.hO(this)
this.EU()
this.a2()},
c77(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.S(v).k("a_<1>")
t=new C.a_(v,new B.dSP(q),u).gM(0)
s=new C.a_(v,new B.dSQ(),u).gM(0)
r=new C.a_(v,w.gcT_(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dSR(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EU()
if(A.o.E(q.w,10)===0){w=q.f
$.ahK()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahK()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BK("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dSS())
q.EU()
w=q.c
w.toString
w=C.Xj(w)
if(w!=null)w.S(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahK()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mp,p,p,p,p,p,p,p,p,p,p))}},
agu(){var w=0,v=C.j(x.H),u=this,t
var $async$agu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dSF(u),t,null,!0,!0,x.H),$async$agu)
case 2:return C.h(null,v)}})
return C.i($async$agu,v)},
aZ5(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aC(w,C.hx(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aZ4(d,e,f,g){return this.aZ5(d,e,f,g,null)},
aqx(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aC(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ee,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeN(){var w=0,v=C.j(x.H),u=this,t
var $async$aeN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).cm(C.ea(new B.dSB(u),!1,null,x.H)),$async$aeN)
case 2:t=u.e.gbk()
if(t!=null)t.beR()
if(u.c!=null)u.m(new B.dSC())
u.EU()
return C.h(null,v)}})
return C.i($async$aeN,v)},
bFe(){var w,v,u,t,s=null,r=this.f
$.ahK()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bc:A.av
u=C.n(9)
t=C.I(F.AP,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wD,s,s,s),s,s,s),A.f,s,D.b_T,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahA(){var w=0,v=C.j(x.H),u=this,t
var $async$ahA=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kS,null,new B.dSO(u),t,!0,!0,!0,A.kD,!1,!1,x.H),$async$ahA)
case 2:return C.h(null,v)}})
return C.i($async$ahA,v)},
c78(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aC(r,C.p(r,D.bOS,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dSU(d),r,r,r,r,r,r,!1,A.a7),o=C.n(11)
o=C.p(r,D.b5y,A.f,r,r,new C.o(A.bm,r,C.I(A.aN.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fya,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f1:A.fW,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.ax8(s.gccN(),r),A.rR,s.aZ4(A.yg,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dSV(s,d)),s.aZ5(A.lo,"Challenges",A.aM,s.gcu_(),s.bFe()),s.aZ4(A.NT,"How to play",A.aN,new B.dSW(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqx(A.o6,"Circuits",A.bu,s.gcmO()),A.bp,s.aqx(A.oV,"Repair",A.aM,new B.dSX(s)),A.bp,s.aqx(D.yh,"Clear",A.c9,new B.dSY(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AP,r,new C.bO(A.Y,A.Y,new C.az(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.by6,r,r,r)},
B(d){var w=this,v=null
$.arG="tech"
return C.c6(v,A.c_,C.bm(!0,C.x(C.a([w.c78(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h6K(w.d,w.e,w.gc76(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.ax8.prototype={
T(){return new B.b8R(null,null)}}
B.b8R.prototype={
gawL(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.T,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawL().q()
this.btd()},
B(d){var w=null,v=this.a.c
return C.aC(w,C.hx(new C.a7(42,42,C.c7(this.gawL(),new B.cC7(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
B.b8Q.prototype={
a4(d,e){var w,v,u,t=null,s=e.ed(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mJ
d.af(s,r+2+o*2,w)
w=C.N()
w.sar(D.ej2.aw(0,C.bU(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.sar(new C.fY(A.A,0,6.283185307179586,A.x,D.cPU,t,new C.mq(p)).aw(0,C.bU(s,r)))
d.af(s,r,v)
p=new B.cC6(d)
p.$3(s.ad(0,A.rI),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e96),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.eaX),2.6,0.5+0.5*Math.cos(q))
u=C.h4(t,t,t,t,D.f2Z,A.a4,A.c6,t,A.dP,A.c5)
u.en()
u.a4(d,s.ad(0,new C.v(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.axs.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.brX()}}
B.aJr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwY.prototype={}
B.fO.prototype={}
B.Jh.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m9.prototype={}
B.UE.prototype={
T(){return new B.bji(null,null)}}
B.bji.prototype={
ga94(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.o2,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga94().q()
this.bv3()},
gRF(){var w=this.ga94().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m1.h(0,this.a.c)
if(v==null)v=D.aNp
return C.c6(w,U.LK,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zD?this.bHq(v):this.cjy(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mE,w,w,w,new B.dOC(d),w,w,w,C.nB(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f4z,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c79(d){var w
A:{if(D.IJ===d){w=0.46153846153846156
break A}if(D.uN===d){w=0.45
break A}if(D.ws===d){w=0.9259259259259258
break A}if(D.SX===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjy(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IJ
A:{if(D.IJ===p){w=44
break A}if(D.uN===p){w=30
break A}if(D.ws===p){w=22
break A}if(D.SX===p){w=26
break A}w=14
break A}v=C.c7(this.ga94(),new B.dOB(this,w,d,o),q)
if(p===D.a6Q)v=new C.Dn(D.byJ,v,q)
p=this.c79(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fL(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A2.FR,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.az,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsr,new C.Q(u,u,u,u),q,q,q),q)},
b6h(d){var w,v,u,t=null,s=new C.T(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bm(this.gRF()*0.4),0,100),q=d.b===D.IJ,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aW(A.o.u(C.dk(s)),2,"0")+":"+A.a.aW(A.o.u(C.h3(s)),2,"0"),t,t,t,t,t,t,A.rY,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byr,t,t,t,3))}n.push(A.db)
n.push(D.fr3)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bg(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.n(2),t,t,A.n),t,t,t,A2.FR,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qu)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fif,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auI(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.dcn,new C.a8(A.az,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.f94,v,v,v)],w))
return C.aC(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dOx(this,d),v,v,v,v,v,v,!1,A.a7)},
bYD(d,e){return this.auI(d,e,!0)},
bYl(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SX||n===D.ws,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kq,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b6h(d)
w=m?190:138
v=C.n(24)
u=C.I(A.b_,A.q,1)
w=C.aC(o,C.p(o,C.bw(C.n(23),C.b3(o,o,o,new B.aex(0,p.gRF(),o),A.f6),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hQ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dOv(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k8[s]
t.push(new C.cp(A.A,o,o,p.bYD(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m3(0.92,t,v,8,12,A7.vC,o,!1),1)],u)
if(n!==D.a6Q){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.d9(F.k8,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auI(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qg,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.btg,T.ajp,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.az,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAM(d,e){var w=null
return C.p(w,C.x(C.a([this.b6h(d),C.E(C.b3(w,w,w,new B.aex(e,this.gRF(),w),A.f6),1),C.aC(w,C.p(w,C.av(C.d(F.k8[e].a,w,w,w,w,w,w,A.Je,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dOq(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHq(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fL(1.5384615384615383,C.p(t,C.c7(this.ga94(),new B.dOt(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.az,A.aC,A.x,w,t,t),A.n),t,t,t,D.by1,new C.Q(8,8,8,s),t,t,t),t)}}
B.bv1.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kq,0.4)
t.toString
w.sar(new C.a8(A.az,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).aw(0,new C.a9(0,0,n,m)))
d.b0(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.drb
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aex.prototype={
a4(d,e){return E.Rm(d,e,this.b,this.c)},
au(d){return!0}}
B.aLd.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aWn.prototype={}
B.Vs.prototype={
T(){return new B.bjS(C.U(x.S,x.N),A.ax,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjS.prototype={
gvu(){var w=this.f
return w===$?this.f=B.h2f(0):w},
Z(){this.a1()
this.lj()
B.zx("laser_maze").bC(new B.ebF(this),x.P)},
lD(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.ebG())},
adU(d){var w=this
w.m(new B.ebv(w,d))
B.w_("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c7p(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdB()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bm((d.a-t)/v)
q=A.k.bm((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvu().b.t(0,p)||p===o.gvu().e||o.gvu().d.ai(0,p))return
o.m(new B.ebw(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.ebz(t,B.hrM(t.gvu(),t.r))),q=x.p,p=C.a([new B.dB("Clear mirrors",!1,new B.ebA(t),A.k6,A.aM,s),new B.dB("Skip",!1,new B.ebB(t),D.bHB,A.aN,s)],q)
if(t.d>0)p.push(new B.dB("Back",!1,new B.ebC(t),D.bHC,A.aN,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dB(""+u,v===t.d,new B.ebD(t,v),s,A.av,s))}return B.jL(A.av,A.hb,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eV(p,s,s),new B.eV(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bgS.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdB()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dhR(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.ke)
v=$.W()
u=C.N()
u.r=L.mm.gp(0)
a9.aE(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dm.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dm.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.ch(p,u,u),A.hf)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.c_9.aw(0,C.ch(p,a3,a3)))
q=o.H()
w.drawRRect(C.et(r),q)
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
a8.z=A.lw
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fG
a8.r=D.aeJ.gp(0)
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fG
a8.r=A.c.gp(0)
a9.aQ(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.CG
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bq).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.kl(new C.es("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.jv(1),a2,a2,a2,a2,A.c5,a2)
i.en()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.v(m-h/2,k-j.gbd(j)/2))}g=new B.dhU(a7,a3,a9)
a1.c.bM(0,new B.dhS(g))
a4.d.bM(0,new B.dhT(g))
f=a7.$1(a4.e)
a4=C.bx(C.ch(f,o,a3*0.8),A.hf)
a8=C.N()
a8.r=A.av.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.v(v,0))
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
B.Vu.prototype={
T(){var w=x.n
return new B.aDG(A.cG,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDG.prototype={
Z(){this.a1()
this.lj()
B.zx("light_mixer").bC(new B.ebY(this),x.P)},
lD(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZb()
w.m(new B.ebZ())},
awP(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.av(5)/4)
u.e=t
if(A.d.d7(t,new B.ebJ()))u.e[w.av(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZb(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hn4(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.w2(v,A.o.am(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.w_("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcyZ(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cRX[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.ebS(v,B.hn4(v.e,t))),r=t[0]
r=B.hH(A.av,""+A.k.V(r*100)+"%","Red",1,0,new B.ebT(v),r)
w=t[1]
w=B.hH(A.bc,""+A.k.V(w*100)+"%","Green",1,0,new B.ebU(v),w)
t=t[2]
return B.jL(A.b8,A.hb,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hH(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.ebV(v),t),new C.bI(A.a8,u,u,new B.fj(A.ho,"Lock it in",new B.ebW(v),A.b2,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bh6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qq)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.et(C.bx(new C.a9(0,0,n,m),A.qq)),$.pz(),!0)
v=e.gdB()*0.3
u=e.ed(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.v(0,l)),u.ad(0,new C.v(l,t)),u.ad(0,new C.v(v*0.55,t))]
r=[A.EB,I.adJ,I.aea]
d.lh(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nJ
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qq)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b_.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLF.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx2.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvx()}}
B.aLG.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx3.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvy()}}
B.btR.prototype={}
B.a8c.prototype={
B(d){var w=null
return C.c6(C.eF(w,w,w,!0,!0,D.aeW,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.anV,w,w,w,new B.cfV(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fGK,w,w,w,1,w,!0),D.aeW,C.cw(C.a([D.ecd,C.cq(new B.cfW())],x.p),w,D.bug,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Wk.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aEx(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEx.prototype={
Z(){this.a1()
this.lj()},
b4f(d){var w=this.d.length
return A.o.E(A.k.bm(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lD(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4f(v.f)
if(w!==v.x){v.x=w
B.lk("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eLd(v))
B.BK("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c8m(){if(this.d.length<2)return
this.m(new B.eL9(this))},
aZx(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eL8(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8l(),p=s.d,o=C.E(C.aC(r,C.b3(r,r,r,new B.bvd(p,s.f,r),A.f6),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fgq,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.axz[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aC(r,C.p(r,new C.y(p[v],r,D.ffH,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eLb(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return B.jL(A.aM,A.hb,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eV(o,r,r),C.B(C.a([C.E(C.aM(r,A.U,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kJ,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eLc(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dp,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hB,"Add",s.gc8j(s),A.c,r),A.bp,new B.fj(A.mx,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.bvd.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.bbd.gp(0)
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
n.r=D.axz[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
k=new C.kl(new C.es(o,i,i,A.cO,i,i,i,i,i,i,D.f3M),A.a4,A.c6,new C.jv(1),i,i,i,i,A.c5,i)
k.en()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.v(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.aeA.gp(0)
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
a1.aQ(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aQ(j,e)},
au(d){return!0}}
B.V3.prototype={
T(){return new B.bjr($,A.bx,0,C.a([],x.X),null,null)}}
B.bjr.prototype={
Z(){this.a1()
this.lj()},
lD(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BK("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4T(900,new B.dUU())}w.m(new B.dUV())},
aZz(d){return this.m(new B.dUP(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aW(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aW(A.o.u(A.o.E(A.k.dj(m),60)),2,"0")
m=C.b3(n,n,n,new B.bq1(l,A.c9,n),A.aOJ)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f81,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f75,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wy,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d9s[r]
u.push(new B.dB(""+q+" min",o.d===q,new B.dUR(o,q),n,A.c9,n))}m=o.f
p=m?A1.yp:A.iK
m=m?"Pause":"Start"
return B.jL(A.c9,A.hb,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eV(u,n,n),new B.eV(C.a([new B.fj(p,m,new B.dUS(o),A.b2,n),new B.fj(A.k6,"Reset",new B.dUT(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bq1.prototype={
a4(d,e){var w,v,u,t,s=e.ed(A.J),r=e.a/2-14
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
v.d=A.bS
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sar(new C.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bU(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.Ue.prototype={
T(){return new B.bj3($,A.bx,0,C.a([],x.X),null,null)}}
B.bj3.prototype={
Z(){this.a1()
this.lj()},
lD(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rm.h(0,p.d)
w.toString
v=A.d.fe(w,new B.dFM())
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
B.lk("flute",D.c_M[t]+5,1400,0.35)}p.m(new B.dFN())},
gc8p(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.K7("Press Start",0.5)
w=D.Rm.h(0,this.d)
w.toString
v=A.d.fe(w,new B.dFH())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.K7("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new C.K7("Hold",1)
case 2:return new C.K7("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new C.K7("Hold",0.5)}}}return new C.K7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8p(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hm.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hm.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.DH,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kJ,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Rm.gef(D.Rm));w.C();){v=w.gR(w)
o.push(new B.dB(v,r.d===v,new B.dFK(r,v),q,A.hm,q))}w=r.e
v=w?A.Gz:A.iK
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dFL(r),A.b2,q))
return B.jL(A.hm,A.hb,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eV(o,q,q))}}
B.aHW.prototype={}
B.UV.prototype={
T(){return new B.bjl(new C.cs(null,x.A),C.a([],x.au),A.aw,A.c)}}
B.bjl.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mF,s,s,s,new B.dSa(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.n(18),new C.ex(C.aC(s,C.b3(s,s,s,new B.bln(t.e,t.x,s),A.f6),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dSb(t),new B.dSc(t),s,s,s,s,s,s,s,s,s,new B.dSd(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cRj[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Ff(v,u,new B.dSe(t,v),!1,s))}u=t.r
return B.jL(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.x(C.a([new B.eV(o,s,s),B.hH(A.bD,""+A.k.V(u),"Brush",30,2,new B.dSf(t),u),new B.eV(C.a([new B.dB("Eraser",t.w,new B.dSg(t),A.Gb,A.bD,s),new B.fj(A.rn,"Undo",new B.dSh(t),A.c,s),new B.fj(A.e7,"Clear",new B.dSi(t),A.c,s),new B.fj(A.NP,"Paper",new B.dSj(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.bln.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.b0(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bS
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
B.VG.prototype={
T(){var w=x.S
return new B.aDQ(C.aX(w),C.aX(w))}}
B.aDQ.prototype={
Z(){this.a1()
this.as2()},
as2(){var w,v,u=this,t=x.N,s=C.bo(D.del,!0,t)
A.d.CN(s)
w=x.S
v=C.S(s).c
t=C.C(C.d9(s,0,C.dG(u.d,"count",w),v),t)
A.d.v(t,C.d9(s,0,C.dG(u.d,"count",w),v))
A.d.CN(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8k(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lk("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.ehk(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.nd,new B.ehl(s,v,u),t)
else{s.x=!0
C.bN(Ab.Ft,new B.ehm(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.TW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xQ,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hE,A.j,0,q,q),q),C.E(C.im(!0,q,q,A.y,new C.hQ(v,8,8,1,q),new B.ehq(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cSN[t]
o.push(new B.dB(s.b,r.d===s.a,new B.ehr(r,s),q,A.aN,q))}o.push(new B.fj(D.bHz,"New game",new B.ehs(r),A.b2,q))
return B.jL(A.aN,A.hb,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eV(o,q,q))}}
B.VT.prototype={
T(){return new B.aEb(C.a([],x.t))}}
B.aEb.prototype={
c8o(d){A.d.a8(this.d)
this.w=!0
this.aZy()},
aZy(){this.d.push(A.cG.av(4))
this.e=0
this.ZJ()},
ZJ(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.esd(t))
s=x.H
w=3
return C.b(C.bN(A.lP,null,s),$async$ZJ)
case 3:r=t.d,q=C.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSG(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZJ)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.ese(t))
case 1:return C.h(u,v)}})
return C.i($async$ZJ,v)},
aSG(d){this.m(new B.esb(this,d))
B.lk("marimba",D.apy[d]+5,450,0.55)
C.bN(A.Fq,new B.esc(this),x.H)},
c8q(d){var w,v,u=this
if(!u.w||u.r)return
u.aSG(d)
w=u.d
v=u.e
if(w[v]!==d){E.dH(90,"",600,0,0.5,"saw")
u.m(new B.esf(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.esg(u))
C.bN(A.ii,new B.esh(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.U2,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fgN,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awt[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.awt[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aC(p,C.df(p,p,p,p,A.bd,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jn,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.esi(q,v),p,p,p,p,p,p,!1,A.a7))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d7,new C.fL(1,C.m3(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jL(A.bH,A.hb,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eV(C.a([new B.fj(A.iK,n,q.gc8n(q),A.b2,p)],m),p,p))}}
B.Wd.prototype={
T(){return new B.bkz(new C.as(A.as,$.aw()))}}
B.bkz.prototype={
avA(d){return C.oK(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eGv(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eGE()
l=C.aM(m,A.U,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Aa.x0),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aZj),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kI,"Bill amount",!0,!0,!1,m,m,m,m,D.fem,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eGA(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQc,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.n(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avA(w)),t.$2("Total","$"+n.avA(v)),X.Ma,t.$3$big("Each of "+n.f+" pays","$"+n.avA(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fD,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cDA[p]
r.push(new B.dB(""+o+"%",A.k.V(n.e)===o,new B.eGB(n,o),m,A.b2,m))}l=n.f
return B.jL(A.b2,A.hb,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eV(r,"TIP",m),B.hH(A.aN,""+l,"People",20,1,new B.eGC(n),l),new B.eV(C.a([new B.dB("Round up",n.r,new B.eGD(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.VE.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bk2(w,A.cG,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk2.prototype={
Z(){this.a1()
this.lj()},
lD(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bm(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
B.a8b("snare",0.5)}u.m(new B.eg_())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hi()
u.w=t
u.x=t?0:3.141592653589793
B.lk("bell",24,400,0.5)}u.m(new B.eg0())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bd3(v,o.r>0,n))}u=C.aC(n,C.av(C.bV(A.fT,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efT(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aC(n,C.av(C.ef(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fdB,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ej6,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efU(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=C.aC(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f3g,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kJ,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efV(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d6V[r]
v.push(new B.dB(q.b,o.d===q.a,new B.efW(o,q),q.c,A.bu,n))}v=C.a([new B.eV(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hH(A.bu,""+s,"Dice",4,1,new B.efX(o),s))}if(o.d==="num"){s=o.z
s=B.hH(A.bu,""+s,"From",100,1,new B.efY(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hH(A.bu,""+p,"To",1000,2,new B.efZ(o),p)],m))}return B.jL(A.bu,A.hb,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bd3.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cG.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=C.a([],x.p)
for(s=D.dpT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.abD,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aL0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwU.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.buR()}}
B.aLj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwZ.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bva()}}
B.aLO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx8.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvG()}}
B.aMh.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxk.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bw9()}}
B.b6D.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEq.h(0,t)
$.arG=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.np,u,u,u,new B.csQ(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NT,s,u,u,u,22),u,u,u,new B.csR(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bxj,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AP,u,new C.bO(new C.az(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fv,u,u,1/0))
return C.c6(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dB.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ee],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tO,C.aC(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bd,new C.o(p,s,o,r,s,s,A.n),A.eH,s,s,s,A.h8,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.csM(t),s,s,s,s,s,s,!1,A.a7),s)}}
B.eV.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cw,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avz.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.av7(d).cJD(q,A.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9Z(C.l1(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A.Je,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tO,C.aF(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ai.ahK,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ee,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.csL(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.Ff.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f1A:u
w=t?A.c:A.b_
w=C.I(w,A.q,t?2.5:1)
return C.aC(u,C.df(u,u,u,u,A.bd,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hz,u,r,D.ahw,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.csS(v),u,u,u,u,u,u,!1,A.a7)}}
B.mF.prototype={
a4T(d,e){var w=C.dj()
w.seL(C.cM(C.dE(0,0,0,d,0,0),new B.csN(this,w,e)))
this.ft$.push(w.bj())},
lj(){var w=this,v=w.qA(new B.csP(w))
v.i1(0)
w.fs$!==$&&C.aP()
w.fs$=v}}
B.aaZ.prototype={
byk(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gR(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bBz()
g.ay!==$&&C.aP()
g.ay=w},
bBz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.ab_.prototype={
cFx(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.FA(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v5.prototype={}
B.P4.prototype={}
B.y3.prototype={}
B.P3.prototype={
fn(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.apr[w.av(7)]
w=w.hi()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lk(u,v+w-12,2200,0.1)}}
B.Va.prototype={
T(){var w=$.aw()
return new B.aDc(new C.cs(null,x.A),new C.as(A.as,w),new B.P3(A.cG),D.d8V,A.ax,D.a3h,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDc.prototype={
Z(){var w,v=this
v.a1()
v.lj()
v.a.toString
w=$.hg4
if(w==null)w=$.hg4=B.cvr()
w.bC(new B.dXC(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.bvi()},
ct9(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dX4(p[n]).$0())
w.push(q)}this.w=w},
gVW(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
atd(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axi(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.atd(d.x,d.w,105/Math.max(w,3))
C.eY()
B.lk("bell",(A.d.cH(D.a2S,d.c)+1)*3+12,900,0.45)
E.dH(300,"",280,1.4,0.15,"tri")},
lD(d){var w,v,u,t,s,r,q,p=this
p.f.fn(0,d,p.db)
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
c94(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gVW()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVW()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFx((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c93(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dX2(w))
return}w.m(new B.dX3(w,v,A.a.i(d).toLowerCase()))},
bOA(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dX0(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bKf,n,n,n,o.gbOz(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mF,n,n,n,new B.dXn(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dXo(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.U,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DE,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSn,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc92(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iQ,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dB(s.a,!1,new B.dXp(o,s),A.mz,A.aN,n))}i.push(new C.D(A.i4,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dB("Whole Earth",!1,new B.dXt(o),A.hp,A.aN,n)],l)
for(v=D.aEp.gdL(D.aEp),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dB(u.a,!1,new B.dXu(o,u),n,A.aN,n))}w.push(new B.dB("Random",!1,new B.dXv(o),A.mx,A.aN,n))
i.push(new B.eV(w,"GO TO",n))
w=o.z
i.push(B.hH(A.aN,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dXw(o),w))
w=o.dy
i.push(B.hH(A.bH,A.a.aW(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new B.dXx(o),w))
w=o.fr
i.push(B.hH(A.b2,o.crT(),"Season",365,0,new B.dXy(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lV:D.Gs
i.push(new B.eV(C.a([new B.dB("Spin",w,new B.dXz(o),D.bFq,A.aN,n),new B.dB("Night",v,new B.dXA(o),A.vM,A.aN,n),new B.dB("Borders",u,new B.dXq(o),D.bFu,A.aN,n),new B.dB("Names",r,new B.dXr(o),X.BT,A.aN,n),new B.dB("Music",q,new B.dXs(o),p,A.aN,n)],l),n,n))
return B.jL(A.aN,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
crT(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ax8[u])v=u
return A.io[v]+" "+(A.k.bm(w-D.ax8[v])+1)},
c91(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mS(1,A.o.E((A.d.cH(D.a2S,t)+1)*47,360),0.55,1).iL()
r=new B.dWZ()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dj,j,j,j),1),C.aH(j,j,j,j,A.GK,j,j,j,new B.dWY(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hg,j,j,j)
m=D.dor.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fvX(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GP(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GP(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fvX(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.Wj,j,p,q,j,j,A.n),j,j,j,j,D.ai3,j,j,j)}}
B.bfi.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AL.gp(0)
d8.b0(new C.a9(0,0,0+d4,0+d5),d7)
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
u.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aN.j(0.35),A.K],t),D.cUk,d3).aw(0,C.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.sar(D.eja.aw(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k5(n))
d8.qx(0,d6)
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
f=new B.ddB(l,k,j,p,o)
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
a9=A.o.E((A.d.cH(D.a2S,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mS(1,a9,a3,a8?1:0.62).iL().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fG
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
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rz
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
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
c9=B.hP5(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a4(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b91.j(0.78)],t),D.d9h,d3).aw(0,C.bU(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dlZ,d3).aw(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fW.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aLp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aLq.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvh()}}
B.btM.prototype={}
B.Wg.prototype={
T(){return new B.bkD()}}
B.bkD.prototype={
gaSe(){var w=this.d
if(w===$)w=this.d=A.cG.av(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AL,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.anV,w,w,w,new B.eHo(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAq,w,w,w,1,w,!0),u=C.n(18),t=A.aN.j(0.1),s=C.I(A.aN.j(0.35),A.q,1),r=x.p
return C.c6(v,D.AL,C.cw(C.a([C.p(w,C.B(C.a([D.bIY,A.at,C.E(C.d(D.cYd[this.gaSe()],w,w,w,w,w,w,D.a8I,w,w,w),1),C.aH(w,w,w,w,D.bTn,w,w,w,new B.eHp(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eHq())],r),w,A.Z1,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.W1.prototype={
T(){return B.hPx()}}
B.bkp.prototype={
cjz(d){var w=d.c,v=B.hPz(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a1()
this.lj()},
lD(d){var w,v,u,t=this
t.e.fn(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjz(w)
u=new C.v(-v.a,-v.b).aH(0,t.w)
v=C.ll(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc95(){var w=this.ch
return new C.v(w.a/2,w.b/2).ad(0,this.x)},
c99(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cw[s]
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
aZU(d){this.m(new B.ezr(this,d))
C.eY()
B.lk("bell",D.dmb[A.o.E(A.d.cH(D.Cw,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mF,m,m,m,new B.ezC(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.ezD(n,l)),h=C.a([new B.dB("All",!1,new B.ezE(n),A.a0Y,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cw[w]
h.push(new B.dB(v.a,n.z===v,new B.ezF(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hH(A.aM,s,"Time",1,0,new B.ezG(n),u/t)
u=n.w
u=B.hH(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.ezH(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lV:D.Gs
return B.jL(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eV(h,"GO TO",m),t,u,new B.eV(C.a([new B.dB("Orbits",s,new B.ezI(n),m,A.aM,m),new B.dB("Names",r,new B.ezJ(n),m,A.aM,m),new B.dB("Asteroids",q,new B.ezK(n),m,A.aM,m),new B.dB("Music",p,new B.ezL(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c96(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.ezp(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kh,r,r,r),1),C.aH(r,r,r,r,A.GK,r,r,r,new B.ezo(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.DF,r,r,r)
v=n.$2("WIDTH",B.GP(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.u(p)+" AU ("+B.GP(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.ezq().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.Wj,r,l,m,r,r,A.n),r,r,r,r,D.ai3,r,r,r)}}
B.brO.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AL.gp(0)
a7.b0(new C.a9(0,0,0+a5,0+a6),w)
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
o=a5.gc95()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cw),t=new C.f2(a6,new B.f0N()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hPy(A.d.gI(D.Cw))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.sar(D.ej4.aw(0,C.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hhH("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cw),t=new C.f2(a6,new B.f0O()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0=C.ch(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c0(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rz
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sar(new C.bT(P.pt,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a2u,a4).aw(0,C.bU(new C.v(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2v[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hhH(d,10.5,A.ad)
h.a4(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.Vb.prototype={
T(){var w=x.i
return new B.aDd(new B.P3(A.cG),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDd.prototype={
cwp(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c98(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e7N
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
s.m(new B.dXG())},
Z(){this.a1()
this.lj()},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fn(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yY[r]
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
break}}}if(A.d.d7(s,new B.dY8()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(n==="drop")n=p.bML()
else n=n==="weight"?p.cDO():p.bEQ()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dj9[u]
v.push(new B.dB(t.b,p.d===t.a,new B.dXV(p,t),t.c,A.cs,o))}v=C.a([new B.eV(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dB("Hammer",!s,new B.dXW(p),Ag.Gn,A.cs,o),new B.dB("Feather",s,new B.dXX(p),X.Ny,A.cs,o),new B.dB(q,r,new B.dY0(p),A.Gc,A.aN,o)],w)
q=p.w
A.d.v(v,C.a([new B.eV(r,o,o),B.hH(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dY1(p),q),new B.eV(C.a([new B.fj(A.u_,"Drop!",new B.dY2(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hH(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dY3(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hH(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dY4(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hH(A.cs,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dY5(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hH(A.cs,A.k.ab(r,1)+"x out","View",8,0.5,new B.dY6(p),r),new B.eV(C.a([new B.fj(A.no,"Fire!",p.gc97(),A.b2,o),new B.fj(A.u_,"Falls",new B.dY7(p),A.c,o),new B.fj(A.rf,"Orbit 7.7",new B.dXY(p),A.c,o),new B.fj(D.bIn,"Oval 9",new B.dXZ(p),A.c,o),new B.fj(A.BW,"Escape",new B.dY_(p),A.c,o)],w),o,o)],w))}return B.jL(A.cs,A.hb,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bML(){return new C.D(D.bsj,C.cq(new B.dXF(this)),null)},
cDO(){var w,v,u,t=null,s=[D.eIK,D.eKb,D.eKj,D.eKC,D.eKh,D.eKI,D.eJi,D.eL4,D.eJW],r=x.p,q=C.a([D.foh,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cw,new C.cl(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bh,new C.Bq(new B.dXH(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fqD)
return C.cw(q,t,A.ik,t,t,A.ah,!1)},
bEQ(){return C.cq(new B.dXD(this))}}
B.bau.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AL.gp(0)
d.b0(new C.a9(0,0,0+h,0+g),e)
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
e.sar(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aN.j(0.35),A.K],x.O),D.dab,i).aw(0,C.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.sar(D.eiZ.aw(0,C.bU(g,p)))
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
d.aQ(n,s)
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
f.d=A.bS
f.r=A.cs.j(0.9).gp(0)
d.aQ(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mJ
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VU.prototype={
T(){return new B.bkm(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkm.prototype={
Z(){this.a1()
this.lj()},
lD(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qd[l.e],i=D.Qd[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mF,k,k,k,new B.esl(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.brm(f,g,v,k),A.f6),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GP(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hH,A.L,k,k)
o=B.GP(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.zQ,A.L,k,k),A.bC,C.d(p+": "+B.GP(w*2)+" km wide. "+r+": "+B.GP(h*2)+" km wide.",k,k,k,k,k,k,A5.Jm,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buq,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Qd[m]
r.push(new B.dB(w.a,l.e===m,new B.esm(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Qd[m]
w.push(new B.dB(s.a,l.f===m,new B.esn(l,m),k,C.b0(s.c),k))}return B.jL(A.bY,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ex(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eV(r,"FIRST",k),new B.eV(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.brm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.WZ.gp(0)
d.b0(new C.a9(0,0,0+h,0+g),w)
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
w=new B.eZW(d)
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
k=C.h4(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.f9Q,s.a),A.a4,A.c6,i,A.dP,A.c5)
k.en()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.v(-w/2,h)))
j=C.h4(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.fda,t.a),A.a4,A.c6,i,A.dP,A.c5)
j.en()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.v(-h/2,-t.gbd(t)/2)))},
au(d){return!0}}
B.aLr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx0.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvj()}}
B.aM_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxe.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvS()}}
B.aM2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxg.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvV()}}
B.Py.prototype={}
B.Uc.prototype={
T(){return B.hPv()}}
B.bj2.prototype={
Z(){this.a1()
this.lj()},
lD(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fn(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dH(70,"",500,0.3,0.5,"sine")}}A.d.br(w,new B.dFd())},
aZV(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb7U()
v=d.aC(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcn()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Py(t,u,1.2,new C.vI(1,30+A.cG.aj()*40,0.9,0.7).iL()))
B.lk("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7U(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dF1(),C.S(m).k("M<1,L>")).fe(0,A.v8),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mF,n,n,n,new B.dF2(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dF3(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fvX(s)+" Suns"
t=B.hH(A.bu,s,"Mass",1,0,new B.dF5(o),u/t)
u=C.a([new B.dB("Star (10)",!1,new B.dF6(o),n,A.bu,n),new B.dB("Cygnus X-1 (21)",!1,new B.dF7(o),n,A.bu,n),new B.dB("Milky Way core (4 million)",!1,new B.dF8(o),n,A.bu,n),new B.dB("M87 (6.5 billion)",!1,new B.dF9(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lV:D.Gs
return B.jL(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eV(u,"LIKE",n),new B.eV(C.a([new B.dB("Glowing ring",s,new B.dFa(o),n,A.bu,n),new B.dB("Bent light",r,new B.dFb(o),n,A.bu,n),new B.dB("Music",q,new B.dFc(o),p,A.bu,n),new B.fj(A.k6,"Clear",new B.dF4(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aeA(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f5L,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zN,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9T.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bh7.gp(0)
b2.b0(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb7U()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
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
b0.z=S.Rr
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.vg,A.fl,d)
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
b1.sar(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cPl,null).aw(0,C.bU(u,b0)))
b2.af(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bu.j(0.55).gp(0)
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
n.d=A.bS
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
B.aeJ.prototype={}
B.V7.prototype={
T(){var w=x.r,v=x.g
return new B.bju(new C.cs(null,x.A),new B.P3(A.cG),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bju.prototype={
Z(){this.a1()
this.ZW()
this.lj()},
ZW(){var w,v,u,t,s,r,q,p,o=this,n=new C.eE()
n.dt(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeJ(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.av(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hi()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeJ(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwf(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e9g
k.cx=D.e9j
w=new C.eE()
w.dt(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeJ(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
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
p.e.fn(0,d,p.y)
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
q=new B.dWd(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mF,r,r,r,new B.dW3(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bf8(s,r),A.ax),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a7X,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d5H[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dB(u.b,o,new B.dW4(s,u),r,A.h4,r))}l.push(new B.dB("Collide",s.ch,new B.dW5(s),A.ye,A.bY,r))
o=C.a([new B.eV(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hH(A.h4,""+n,"Arms",6,2,new B.dW6(s),n)
l=s.r
A.d.v(o,C.a([n,B.hH(A.h4,A.k.ab(l,1),"Winding",6,0.8,new B.dW7(s),l)],q))}n=s.as
o.push(B.hH(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dW8(s),n))
n=s.ax
o.push(B.hH(A.h4,A.k.ab(n,1)+"x","Speed",4,0,new B.dW9(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lV:D.Gs
o.push(new B.eV(C.a([new B.dB("Dark matter",n,new B.dWa(s),r,A.bu,r),new B.dB("You are here",l,new B.dWb(s),r,A.aM,r),new B.dB("Music",w,new B.dWc(s),t,A.h4,r)],q),r,r))
return B.jL(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ex(new C.an(A.W,r,A.b1,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.bf8.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bjc.gp(0)
a3.b0(new C.a9(0,0,0+a1,0+a2),w)
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
t.sar(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.ccU,a0).aw(0,C.bU(o,a2)))
a3.af(o,a2,t)}m=new B.daI(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.fJ.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
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
l.r=new H.mS(1,r,q>200?0.45:0.55,1).iL().j(0.35+(1-s)*0.5).gp(0)
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
f=C.h4(a0,a0,a0,a0,D.f2P,A.a4,A.c6,a0,A.dP,A.c5)
f.en()
f.a4(a3,g.ad(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bkr.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bfg.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fJ.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.iz.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.VQ.prototype={
T(){return new B.bkl(new C.cs(null,x.A),new B.P3(A.cG),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkl.prototype={
Z(){this.a1()
this.lj()},
lD(d){var w,v,u,t=this
t.e.fn(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))B.lk("bell",60+u*4,500,0.35)
t.as=u}},
gcrS(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcia(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mF,q,q,q,new B.erA(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ex(C.b3(q,q,q,new B.bqC(r,q),A.f6),r.d),1)
if(r.f==="seasons")w=r.gcrS()
else{w=r.gcia()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.TU,A.L,q,q),A.f,q,q,q,q,q,q,q,K.aid,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yp:A.iK
t=r.Q
s=t?A.lV:D.Gs
s=C.a([new B.eV(C.a([new B.dB("Seasons",n==="seasons",new B.erB(r),A.yC,A.bv,q),new B.dB("Moon phases",n==="moon",new B.erC(r),A.vM,A.bv,q),new B.dB(u,!1,new B.erD(r),v,A.bv,q),new B.dB("Music",t,new B.erE(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hH(A.bv,D.d50[A.o.E(A.k.bm(n*12),12)],"Month",1,0,new B.erF(r),n)
v=r.z
A.d.v(s,C.a([n,B.hH(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.erG(r),v)],p))}else{p=r.w
s.push(B.hH(A.bv,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new B.erH(r),p))}p=r.y
s.push(B.hH(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.erI(r),p))
return B.jL(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqC.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AL.gp(0)
b9.b0(new C.a9(0,0,0+b5,0+b6),b8)
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
u=C.ch(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b_.gp(0)
b9.hY(u,t)
t=C.N()
t.sar(D.ej0.aw(0,C.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eG(0,p.aC(0,l).gcn())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bh3.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k5(C.bU(A.J,k)))
b9.qx(0,b7)
b7=i.aH(0,k).aH(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.ej9.aw(0,C.bU(A.J,s)))
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
t.r=A.c9.gp(0)
b9.bE(b7,b5,t)
t=h.aH(0,k).aH(0,1.7)
b5=C.N()
b5.r=A.c9.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.h4(b4,b4,b4,b4,C.d3(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRI,b5),A.a4,A.c6,b4,A.dP,A.c5)
f.en()
f.a4(b9,l.ad(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
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
r.sar(new C.bT(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bcJ,D.ag9],x.O),D.cXa,b4).aw(0,C.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b9Y.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k5(C.bU(a1,a2)))
b9.qx(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bN.gp(0)
b9.b0(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eG(0,a1.aC(0,p).gcn())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.ate[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aN.j(0.45).gp(0)
a7.z=A.jv
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b9T.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k5(C.bU(a8,a9)))
b9.qx(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCw(new C.v(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCw(new C.v(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bN.gp(0)
b9.aQ(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b_.gp(0)
b9.af(a8,a9,b8)
b3=C.h4(b4,b4,b4,b4,D.f2Q,A.a4,A.c6,b4,A.dP,A.c5)
b3.en()
b3.a4(b9,a8.ad(0,new C.v(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwT.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.buO()}}
B.aLm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx_.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvd()}}
B.aLZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxd.prototype={
q(){var w,v,u
for(w=this.ft$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.fs$
w===$&&C.c()
w.q()
this.bvR()}}
var z=a.updateTypes(["~()","R(ty)","R(a4k)","aA<~>()","R(Co)","G(ty,G)","L(L,ty)","R(Ck)","R(Zb)","R(abj)","R(v5)","R(a2Z)","R(no)","R(a_I)","R(ac6)","G(G)","Uj()","UW()","U8()","V9()","Vs()","Vu()","Ui()","VO()","W2()","VP()","VL()","W9()","Uh()","We()","R(mC)","VF()","VK()","aeO(Y,G)","adG(Y,G)","~(a5<@,@>)","G(Ck,Ck)","m(ed)","R(aeE)","R(a0q)","R(Cy)","R(abO)","R(adK)","R(abx)","G(G,qM)","G(G,Co)","m(qM)","~(qM,ai<m>,G)","qM?(Co)","R(qM)","t(m,a0d)","R(PQ)","~(Ax)","R(abE)","L(G?)","Wg()","R(FL)","R(acW)","L(G)","UX()","L(Py)","R(aac)","Ud()","a8c()","~(B6,m,v,w,L)","~(m,ty)","VI()","Vn(Y)","Ng(Y)","UE(Y,br<L>,br<L>)","Wk()","V3()","Ue()","UV()","VG()","VT()","Wd()","VE()","~(m)","cr(ab_)","R(aaZ)","Va()","W1()","Vb()","Uc()","V7()","VU()","VQ()","UG()","R(Py)","~(ba)"])
B.fyg.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fob.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fv2.prototype={
$1(d){var w
if(!this.a.LD(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fv3.prototype={
$1(d){return d.x},
$S:z+1}
B.fyd.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fye.prototype={
$1(d){var w
if(!this.a.LD(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fyf.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e8F.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e8G.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e8H.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.ih)}},
$S:8}
B.e8S.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e8T.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e8O.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e8M.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dE(0,0,0,d,0,0),new B.e8N(w,this.b,e)))},
$S:1852}
B.e8N.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e8P.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVZ().ajF(0,u[1],u[2],u[3])
u[4].bM(0,new B.e8K(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dH(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e8L(w.a,v,w.f,w.r))},
$S:0}
B.e8K.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:190}
B.e8L.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e8Q.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVZ().akn(t,u[1],s,u[3])
E.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e8J(w.a,v,w.e,w.f))},
$S:0}
B.e8J.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e8R.prototype={
$0(){E.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e8I(w,this.b))},
$S:0}
B.e8I.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e8W.prototype={
$0(){var w=this.a
return w.m(new B.e8V(w))},
$S:0}
B.e8V.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e8X.prototype={
$0(){var w=this.a
return w.m(new B.e8U(w))},
$S:0}
B.e8U.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e8Y.prototype={
$0(){var w=this.a
w.f.saY(0,this.b)
w.Np()},
$S:0}
B.e8Z.prototype={
$0(){return this.a.XZ(this.b)},
$S:0}
B.e9_.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Np():w.aVz()},
$S:2}
B.e90.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Np():w.aVz()},
$S:0}
B.eoM.prototype={
$2(d,e){return d+e},
$S:1853}
B.ep5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ep4(w,d))},
$S:141}
B.ep4.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.ep6.prototype={
$0(){},
$S:0}
B.ep7.prototype={
$0(){},
$S:0}
B.eoO.prototype={
$0(){return this.a.m(new B.eoN(this.b,this.c))},
$S:0}
B.eoN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.eoD.prototype={
$1(d){return this.a.cx===d},
$S:31}
B.eoE.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.eoF.prototype={
$1(d){return this.a.cy===d},
$S:31}
B.eoG.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.eoH.prototype={
$1(d){return this.a.db===d},
$S:31}
B.eoI.prototype={
$1(d){return this.a.db=d},
$S:28}
B.eoJ.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:31}
B.eoK.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:28}
B.eoL.prototype={
$0(){var w=this.a
return w.m(w.gawc())},
$S:0}
B.eoB.prototype={
$1(d){return this.a.$1(!0)},
$S:83}
B.eoC.prototype={
$1(d){return this.a.$1(!1)},
$S:129}
B.eoA.prototype={
$1(d){return this.a.$1(!1)},
$S:182}
B.eoZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgP(o,p),n)
w=this.b
v=B.bzy("WORLD",w.a,w.c)
u=B.bzy("GRAVITY",C.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c9:A.b2
t=B.bzy("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cp[o.db].d?A.c9:A.c
q=x.p
s=C.a([v,u,t,B.bzy("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bzy("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hE,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDM(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rs[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mB,"Again",new B.eoU(o),A.c,p),new B.fj(A.oV,"Rebuild",new B.eoV(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j3,"Next world",new B.eoW(o),A.b2,p))
n.push(B.hlo("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hlo("Crash!",o.at,A.c9,C.a([new B.fj(A.mB,"Try again",new B.eoX(o),A.b2,p),new B.fj(A.oV,"Rebuild",new B.eoY(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b1,A.r,n,p)},
$S:64}
B.eoU.prototype={
$0(){var w=this.a
return w.m(w.gawc())},
$S:0}
B.eoV.prototype={
$0(){var w=this.a
return w.m(new B.eoR(w))},
$S:0}
B.eoR.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eoW.prototype={
$0(){var w=this.a
return w.m(new B.eoQ(w))},
$S:0}
B.eoQ.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eoX.prototype={
$0(){var w=this.a
return w.m(w.gawc())},
$S:0}
B.eoY.prototype={
$0(){var w=this.a
return w.m(new B.eoP(w))},
$S:0}
B.eoP.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ep_.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.eoT(v,w))},
$S:0}
B.eoT.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.ep0.prototype={
$1(d){return this.a.y=d},
$S:9}
B.ep1.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.ep2.prototype={
$1(d){return this.a.z=d},
$S:9}
B.ep3.prototype={
$0(){var w=this.a
return w.m(new B.eoS(w))},
$S:0}
B.eoS.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dFF.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hgJ
if(q==null)q=$.hgJ=B.cFJ()
w=3
return C.b(C.iP(C.a([q,$.qV().bg_("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kH(0,C.cQ(J.q(s,1)))
q.m(new B.dFE(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dFE.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dFh.prototype={
$0(){return this.a.bVj(C.aU(J.q(this.b,"group")))},
$S:0}
B.dFi.prototype={
$1(d){return A.a.aW(A.o.fY(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:328}
B.dFG.prototype={
$0(){return B.a8b("kick",0.25)},
$S:0}
B.dFj.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dFk.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dFl.prototype={
$0(){return B.a8b("kick",0.5)},
$S:0}
B.dFm.prototype={
$0(){return E.dH(1300+this.a.R8.av(900),"",40,0,0.2,"square")},
$S:0}
B.dFo.prototype={
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
u=w}if(u.cx!=null&&!A.d.b6(u.d.e,new B.dFn(u)))u.cx=null
u.go=0},
$S:0}
B.dFn.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axV(d)},
$S:z+11}
B.dFe.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dFf.prototype={
$0(){var w=this.a
return w.m(w.gc4I())},
$S:0}
B.dFg.prototype={
$0(){return this.a.ahg(null)},
$S:0}
B.dFv.prototype={
$0(){var w=this.a.as
return w==null?null:w.f_(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dFw.prototype={
$0(){return this.a.cAs(this.b.a)},
$S:0}
B.dFx.prototype={
$0(){return this.a.ahg(this.b)},
$S:0}
B.dFy.prototype={
$1(d){var w=this.a
return w.m(new B.dFu(w,d))},
$S:6}
B.dFu.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dFz.prototype={
$0(){var w=this.a
return w.m(new B.dFt(w,this.b))},
$S:0}
B.dFt.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dFA.prototype={
$0(){var w=this.a
return w.m(new B.dFs(w))},
$S:0}
B.dFs.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dFB.prototype={
$0(){var w=this.a
return w.m(new B.dFr(w))},
$S:0}
B.dFr.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f_(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Kt},
$S:0}
B.dFC.prototype={
$0(){var w=this.a
return w.m(new B.dFq(w))},
$S:0}
B.dFq.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYd()
else w.p2=null},
$S:0}
B.dFD.prototype={
$0(){var w=this.a
return w.m(new B.dFp(w))},
$S:0}
B.dFp.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c0X.prototype={
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
$S:342}
B.c0Y.prototype={
$1(d){var w=new C.rQ([],[]).pD(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:574}
B.fhP.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:214}
B.fhQ.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:214}
B.fhR.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:214}
B.fhY.prototype={
$1(d){return!J.q(d,0)},
$S:214}
B.fhZ.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:214}
B.fi_.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:214}
B.dHQ.prototype={
$1(d){return this.a.asS(0)},
$S:8}
B.dHu.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i1F(),C.S(w).k("M<1,G>")).fP(0)},
$S:0}
B.dHx.prototype={
$1(d){return""+d},
$S:82}
B.dHR.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dHs.prototype={
$1(d){return this.a.asS(this.b)},
$S:8}
B.dHt.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awE(0)
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
p=a1.awD(0,a0,a1.m5(0.82,0.25),0)
o=a1.awD(0,a0,a1.m5(0.82,0.65),0)
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
B.dHy.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awE(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Ck(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m5(0.86,0.5))},
$S:0}
B.dHn.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dHo.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+36}
B.dHp.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dHq.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dHr.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acB(this.c)
if(v.ax)B.BK("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dH(140,"",250,0,0.3,"square")}},
$S:0}
B.dHz.prototype={
$0(){},
$S:0}
B.dHA.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dHB.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dHw.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new B.dHv(v))
w.cy=null},
$S:0}
B.dHv.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dHm.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.v(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dHK.prototype={
$0(){var w=this.a
return w.m(new B.dHJ(w))},
$S:0}
B.dHJ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dHL.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aC(A.c7,C.jA(C.b3(w,w,w,new B.baX(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dHE(v),w,w,w,new B.dHF(v),new B.dHG(v),new B.dHH(v),w,w,w,w,w,w,w,w,w,w,new B.dHI(v),w,w,w,!1,A.a7)},
$S:36}
B.dHI.prototype={
$1(d){return this.a.c6s(d.b)},
$S:50}
B.dHG.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ceW(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axr(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:44}
B.dHH.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dHF.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYU(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new B.dHC(w))
u=t.as
u.toString
v.push(new B.no(u,w.a,w.b))
C.jU()}}t.z=t.as=null},
$S:38}
B.dHC.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dHE.prototype={
$1(d){return this.a.avt(d.b)},
$S:290}
B.dHM.prototype={
$0(){return this.a.bzC(this.b.a)},
$S:0}
B.dHN.prototype={
$0(){return this.a.asS(this.b.a)},
$S:0}
B.dHO.prototype={
$0(){var w=this.a
return w.m(new B.dHD(w))},
$S:0}
B.dHD.prototype={
$0(){var w=this.a
w.awE(0)
w.ay=null},
$S:0}
B.dHP.prototype={
$0(){return this.a.cwc(this.b)},
$S:0}
B.cMv.prototype={
$0(){var w=this,v=null,u=C.h4(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:316}
B.dNF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dNE.prototype={
$0(){return this.a.d=null},
$S:0}
B.dNH.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_H()},
$S:125}
B.dNG.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.fif.prototype={
$0(){return D.e2i},
$S:z+55}
B.fig.prototype={
$0(){return D.dBq},
$S:z+59}
B.fih.prototype={
$0(){return D.dyi},
$S:z+62}
B.fis.prototype={
$0(){return D.e1I},
$S:z+63}
B.fiu.prototype={
$0(){return D.dHP},
$S:z+66}
B.fiv.prototype={
$0(){return D.dBl},
$S:z+88}
B.fiw.prototype={
$0(){return D.dBo},
$S:z+17}
B.fix.prototype={
$0(){return D.dut},
$S:z+18}
B.fiy.prototype={
$0(){return D.dDU},
$S:z+19}
B.fiz.prototype={
$0(){return D.dFx},
$S:z+20}
B.fiA.prototype={
$0(){return D.dFz},
$S:z+21}
B.fii.prototype={
$0(){return D.dAx},
$S:z+22}
B.fij.prototype={
$0(){return D.dKy},
$S:z+23}
B.fik.prototype={
$0(){return D.e1p},
$S:z+24}
B.fil.prototype={
$0(){return D.e_r},
$S:z+25}
B.fim.prototype={
$0(){return D.dJd},
$S:z+26}
B.fin.prototype={
$0(){return D.e1x},
$S:z+27}
B.fio.prototype={
$0(){return D.dAw},
$S:z+28}
B.fip.prototype={
$0(){return D.e1H},
$S:z+29}
B.fiq.prototype={
$0(){return D.dAy},
$S:z+16}
B.fir.prototype={
$0(){return D.dFP},
$S:z+31}
B.fit.prototype={
$0(){return D.dJc},
$S:z+32}
B.eZt.prototype={
$2(d,e){return new B.aeO($.bDZ()[e],new B.eZs(e,this.a),null)},
$S:z+33}
B.eZs.prototype={
$0(){var w=this.a,v=F.aEq.h(0,$.bDZ()[w].a)
$.arG=v==null?"music":v
C.a6(this.b,!1).cm(C.ea(new B.eZq(w),!1,null,x.H))},
$S:0}
B.eZq.prototype={
$1(d){return $.bDZ()[this.a].e.$0()},
$S:40}
B.eZu.prototype={
$2(d,e){return new B.adG(D.ax9[e],new B.eZr(this.a,e),null)},
$S:z+34}
B.eZr.prototype={
$0(){return this.a.d.$1(D.ax9[this.b])},
$S:0}
B.eZ9.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eZ8.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eZ7.prototype={
$1(d){var w=this
return new C.e3(new B.eZ6(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eZ6.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fo_,A.au,D.fux,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bB(1,A.bh,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e4(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DE,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iQ,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bh,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e4(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DE,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iQ,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dl4[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bE
f=new C.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aC(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fC,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eZ4(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.fdS,d,d,d,d,d,d,d,d,d),A.am,new C.cl(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.zW,new B.eZ5(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A4.xR,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:110}
B.eZ4.prototype={
$0(){var w=this
return w.a.$1(new B.eZ3(w.b,w.c,w.d))},
$S:0}
B.eZ3.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eZ5.prototype={
$0(){var w=this,v=w.a
v.m(new B.eZ2(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eZ2.prototype={
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
B.eZh.prototype={
$0(){var w=this.a
return w.m(new B.eZg(w))},
$S:0}
B.eZg.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eZi.prototype={
$0(){return B.qU(this.b,this.a.f,"scene")},
$S:0}
B.eZj.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZi().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bT(D.aXH,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:336}
B.eZk.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.eQ(A.A,C.c7(new C.hb(C.a([u.gu0(),u.gZi()],x.dS)),new B.eZf(u,this.b,v),w),A.f,A.dZ),w,w,w)},
$S:271}
B.eZf.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu0().x
r===$&&C.c()
w=r<0.9?1:1-B.bqW(r,0.9,0.98)
v=s.gZi().x
v===$&&C.c()
u=A.dC.aA(0,v)
switch(s.gawF().a){case 0:s=s.byO(t.b,r,u,t.c)
break
case 1:s=s.bPr(t.b,r,u,t.c)
break
case 2:s=s.cAZ(t.b,r,u,t.c)
break
case 3:s=s.bBJ(t.b,r,u,t.c)
break
case 4:s=s.bF2(t.b,r,u,t.c)
break
case 5:s=s.bEc(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:219}
B.eZl.prototype={
$2(d,e){var w=C.av7(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJx(u,A.bE,v,3.5)
u=this.a
w=u.gu0().x
w===$&&C.c()
return C.a9Z(C.l1(null,null,null,1,0,new B.eZe(u),A.k.D(w,0,1)),v)},
$S:1857}
B.eZe.prototype={
$1(d){var w=this.a
w.gu0().sp(0,d)
if(w.as)w.m(new B.eZa(w))},
$S:6}
B.eZa.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eZm.prototype={
$0(){var w=this.a
w.gu0().sp(0,0)
w.ag_()},
$S:0}
B.eZn.prototype={
$1(d){var w=this.a
w.m(new B.eZd(w,d))
if(w.as)w.ag_()},
$S:6}
B.eZd.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eZo.prototype={
$0(){var w=this.a
w.m(new B.eZc(w,this.b))
w.gu0().sp(0,0)
if(w.as)w.ag_()},
$S:0}
B.eZc.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eZp.prototype={
$0(){var w=this.a
return w.m(new B.eZb(w,this.b))},
$S:0}
B.eZb.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eZ0.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1858}
B.eZ1.prototype={
$1(d){return d.b},
$S:1859}
B.dhy.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dhz.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dhv.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dhw.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhx.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhA.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dhB.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dhC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhD.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dhE.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dhF.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dhG.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dhH.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dhI.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.eo6.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.enW.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.enY.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.enZ.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.eo1.prototype={
$1(d){var w=D.mI.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.eo2.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.S(q),o=x.dg,n=C.C(new C.eb(new C.cO(new C.a_(q,new B.eo3(d),p.k("a_<1>")),new B.eo4(r),p.k("cO<1,qM?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.eo3.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eo4.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eo_.prototype={
$1(d){return D.mI.h(0,d.b).c===D.wV},
$S:z+49}
B.eo0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eow.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v6(0,u)
w.a65(A.o.am(v,1000))},
$S:8}
B.eo5.prototype={
$0(){},
$S:0}
B.enS.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
B.eo8.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mI.h(0,v).b,D.mI.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fFK,w,C.d(D.mI.h(0,v).a,w,w,w,w,w,w,A.hu,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.anZ,w,w,w,w,new B.eo7(d),!1,w,w,w,w,w,w,w,D.fxj,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.eo7.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.eoa.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.ec3],x.p)
for(w=0;w<6;++w){v=D.axt[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bT2,u,u,u,u,new B.eo9(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kI,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hu,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bxV,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.eo9.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.enV.prototype={
$1(d){var w=null
return C.em(C.a([C.bK(!1,A.df,w,w,!0,w,w,new B.enT(d),w,w),C.bK(!1,A.DJ,w,w,!0,w,w,new B.enU(d),w,w)],x.p),w,w,F.n8,D.fuI,w,w,w,w,D.fxB,w)},
$S:20}
B.enT.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.enU.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.eou.prototype={
$0(){var w=this.a
return w.m(new B.eot(w))},
$S:0}
B.eot.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eov.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mj(new B.eok(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6o:t
v=C.a([C.b3(u,t,t,new B.bgN(w,v,new B.eol(r),new B.eom(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e0(C.c7(w,new B.eon(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGK())
return C.aC(A.c7,C.jA(new C.an(A.W,t,A.b1,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.eoo(r),t,r.gcge(),t,new B.eop(r),new B.eoq(r),new B.eor(r),t,t,t,t,t,t,t,t,t,t,new B.eos(r),t,t,t,!1,A.a7)},
$S:36}
B.eok.prototype={
$0(){return this.a.abH(this.b)},
$S:0}
B.eos.prototype={
$1(d){return this.a.cyJ(d.b)},
$S:50}
B.eoq.prototype={
$1(d){return this.a.cgf(d.b)},
$S:44}
B.eor.prototype={
$1(d){return this.a.cgg(d.b)},
$S:18}
B.eop.prototype={
$1(d){return this.a.b0A()},
$S:38}
B.eoo.prototype={
$1(d){return this.a.acn(d.b)},
$S:290}
B.eol.prototype={
$0(){return this.a.z},
$S:647}
B.eom.prototype={
$0(){return this.a.Q},
$S:721}
B.eon.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bL1()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=C.a([D.fsb,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.y(p[r],q,D.fcB,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:61}
B.enX.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e6,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A6.TU,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.U_,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1861}
B.eog.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lB()},
$S:0}
B.eoh.prototype={
$0(){var w=this.a
return w.m(new B.eof(w))},
$S:0}
B.eof.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eoi.prototype={
$0(){var w=this.a
return w.m(new B.eoe(w))},
$S:0}
B.eoe.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.eoj.prototype={
$0(){var w=this.a
return w.m(new B.eod(w))},
$S:0}
B.eod.prototype={
$0(){return this.a.r=!0},
$S:0}
B.eoc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mI.gdL(D.mI),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.cty(p[r]))
return new C.D(I.aht,C.x(C.a([new C.D(R.aj8,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.eob.prototype={
$0(){return this.a.c6x(this.b)},
$S:0}
B.dhu.prototype={
$0(){var w=this,v=null,u=C.h4(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:316}
B.eAb.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.br(o,new B.eA9(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eAa())},
$S:8}
B.eA9.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eAa.prototype={
$0(){},
$S:0}
B.ezN.prototype={
$0(){},
$S:0}
B.ezM.prototype={
$0(){},
$S:0}
B.ezW.prototype={
$0(){return B.qU(this.b,this.a.d,"spark-painter")},
$S:0}
B.ezY.prototype={
$1(d){return this.a.aYU(0,d.b)},
$S:44}
B.eA1.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcn()>2.5}else w=!1
if(w)t.a.push(u)
v.aRM(u)
v.c9z(u)
return null},
$S:18}
B.ezX.prototype={
$1(d){return this.a.aYT()},
$S:38}
B.eA2.prototype={
$1(d){return this.a.aYU(0,d.b)},
$S:23}
B.eA3.prototype={
$1(d){return this.a.aYT()},
$S:50}
B.eA4.prototype={
$0(){var w=this.a
return w.m(new B.ezV(w,this.b))},
$S:0}
B.ezV.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eA5.prototype={
$0(){var w=this.a
return w.m(new B.ezU(w))},
$S:0}
B.ezU.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eA6.prototype={
$0(){var w=this.a
return w.m(new B.ezT(w,this.b))},
$S:0}
B.ezT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eA7.prototype={
$1(d){var w=this.a
return w.m(new B.ezS(w,d))},
$S:6}
B.ezS.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eA8.prototype={
$0(){var w=this.a
return w.m(new B.ezR(w))},
$S:0}
B.ezR.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ezZ.prototype={
$0(){var w=this.a
return w.m(new B.ezQ(w))},
$S:0}
B.ezQ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eA_.prototype={
$0(){var w=this.a
return w.m(new B.ezP(w))},
$S:0}
B.ezP.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eA0.prototype={
$0(){var w=this.a
return w.m(new B.ezO(w,this.b))},
$S:0}
B.ezO.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eGL.prototype={
$0(){return B.qU(this.b,this.a.d,"title")},
$S:0}
B.eGM.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIO().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_R(v[t],t,s,q,u))
return new C.D(A.fD,C.bV(A.fT,w,A.t4,0,0),null)},
$S:685}
B.eGN.prototype={
$1(d){return this.a.m(new B.eGK())},
$S:2}
B.eGK.prototype={
$0(){},
$S:0}
B.eGO.prototype={
$0(){var w=this.a
w.m(new B.eGJ(w,this.b))
w=w.gIO()
w.iJ(0,0)
w.cM(0)},
$S:0}
B.eGJ.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eGP.prototype={
$0(){var w=this.a
return w.m(new B.eGI(w,this.b))},
$S:0}
B.eGI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eGQ.prototype={
$0(){var w=this.a
return w.m(new B.eGH(w))},
$S:0}
B.eGH.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eGR.prototype={
$0(){var w=this.a
return w.m(new B.eGG(w,this.b))},
$S:0}
B.eGG.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eGS.prototype={
$0(){var w=this.a.gIO()
w.iJ(0,0)
w.cM(0)},
$S:0}
B.eGT.prototype={
$1(d){var w=this.a
return w.m(new B.eGF(w,d))},
$S:6}
B.eGF.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ekC.prototype={
$1(d){return d.a.aC(0,this.a).gcn()<16},
$S:z+13}
B.ekD.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcn()<16||d.a.aC(0,w).gcn()>this.a.r.gamn()*2.2},
$S:z+13}
B.ekq.prototype={
$0(){return B.qU(this.b,this.a.d,"orbits")},
$S:0}
B.ekr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadD()
v=q.w
u=q.as
t=q.at
s=u==null?A.a3b:q.cjS(u,q.gaW5())
return new C.ex(C.aC(A.c7,C.b3(r,r,r,new B.bl9(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ekn(q),new B.eko(q),new B.ekp(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7),q.d)},
$S:202}
B.eko.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.ekp.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ekn.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcn()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_I(u,v.gaW5(),v.Q,v.b29(),C.a([],x.g)))
C.jU()
if(v.ax)E.dH(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:38}
B.eks.prototype={
$1(d){var w=this.a
return w.m(new B.ekm(w,d))},
$S:6}
B.ekm.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eku.prototype={
$1(d){var w=this.a
return w.m(new B.ekl(w,d))},
$S:6}
B.ekl.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ekv.prototype={
$1(d){var w=this.a
return w.m(new B.ekk(w,d))},
$S:6}
B.ekk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ekw.prototype={
$0(){var w=this.a
return w.m(new B.ekj(w))},
$S:0}
B.ekj.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ekx.prototype={
$0(){var w=this.a
return w.m(new B.eki(w))},
$S:0}
B.eki.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eky.prototype={
$0(){var w=this.a
return w.m(new B.ekh(w))},
$S:0}
B.ekh.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ekz.prototype={
$0(){var w=this.a
return w.m(w.gcvQ())},
$S:0}
B.ekA.prototype={
$0(){var w=this.a
return w.m(w.gbGY())},
$S:0}
B.ekB.prototype={
$0(){var w=this.a
return w.m(new B.ekg(w))},
$S:0}
B.ekg.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.ar9(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hi())}},
$S:0}
B.ekt.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.eGc.prototype={
$1(d){return this.a.fX$-d.b>6000},
$S:723}
B.eGd.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eGb(d),C.S(w).k("a_<1>")).gM(0)>=3},
$S:723}
B.eGb.prototype={
$1(d){return d.a.aC(0,this.a.a).gcn()<14},
$S:z+53}
B.eG1.prototype={
$0(){return B.qU(this.b,this.a.d,"swarm")},
$S:0}
B.eG2.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bsI(v.e,v.f,v.ax,v.at,v.ay,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eFZ(v),new B.eG_(v),new B.eG0(v),w,w,w,w,w,w,w,w,new B.eFR(v),new B.eFS(v),new B.eFT(v),w,w,w,!1,A.a7),v.d)},
$S:202}
B.eG_.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eG0.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eFZ.prototype={
$1(d){return this.a.ay=null},
$S:38}
B.eFS.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fX$))
if(w.ch)E.dH(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lk("flute",7,500,0.3)},
$S:23}
B.eFT.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eFR.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eG3.prototype={
$0(){var w=this.a
return w.m(new B.eFY(w,this.b))},
$S:0}
B.eFY.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eG4.prototype={
$0(){var w=this.a
return w.m(new B.eFX(w,this.b))},
$S:0}
B.eFX.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eG5.prototype={
$0(){var w=this.a
return w.m(new B.eFW(w))},
$S:0}
B.eFW.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eG6.prototype={
$1(d){var w=this.a
return w.m(new B.eFV(w,d))},
$S:6}
B.eFV.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eG7.prototype={
$1(d){var w=this.a
return w.m(new B.eFU(w,d))},
$S:6}
B.eFU.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eG8.prototype={
$1(d){var w=this.a
return w.m(new B.eFQ(w,d))},
$S:6}
B.eFQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eG9.prototype={
$1(d){var w=this.a
return w.m(new B.eFP(w,d))},
$S:6}
B.eFP.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eGa.prototype={
$1(d){var w=this.a
return w.m(new B.eFO(w,d))},
$S:6}
B.eFO.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dGZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dGY(w,d))},
$S:141}
B.dGY.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.U(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jz(v==null?A.ry:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.u(u.a),A.k.N(C.dU(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dH_.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dH0.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zj(w)>0},
$S:z+14}
B.dGP.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azO()},
$S:0}
B.dGS.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eL(w,F.kS,new C.D(A.bB,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hH,w,w,w),A.R,C.E(C.im(!0,w,w,A.y,T.aP3,new B.dGR(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.Y),w)},
$S:48}
B.dGR.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dGQ(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bY:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b_:A.dm,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jl
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aH("\u2605",n)+A.a.aH("\u2606",3-n),s,s,s,s,s,s,D.fgj,s,s,s))
return C.aC(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a7)},
$S:78}
B.dGQ.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dGW.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacE()
o=C.b3(q,q,q,new B.baD(p.d,w,v,p.gc6E(),q),o)
v=p.bYx("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gIa()
t=p.as>=p.gIa()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auG("GOAL",""+w+" / "+u,t),p.auG("STARS",A.a.aH("\u2605",s)+A.a.aH("\u2606",3-s),A.aM)],r),A.m,q,A.hE,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lI)
if(p.Q&&!p.y)s.push(D.aXp)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.b2:A.c9).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.c9,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gIa()+".",q,q,q,q,q,q,A.hG,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aH("\u2605",t==null?1:t),q,q,q,q,q,q,D.f6M,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mB,"Try again",new B.dGT(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j3,"Next level",new B.dGU(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.Wm,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aC(A.c7,new C.an(A.W,q,A.b1,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dGV(p),q,q,q,q,!1,A.a7)},
$S:36}
B.dGV.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fX$
E.dH(180,"",200,1,0.4,"sine")
C.jl()},
$S:23}
B.dGT.prototype={
$0(){var w=this.a
return w.m(w.gb4P())},
$S:0}
B.dGU.prototype={
$0(){var w=this.a
return w.aYV(w.r+1)},
$S:0}
B.dGX.prototype={
$0(){var w=this.a
return w.m(w.gb4P())},
$S:0}
B.cM2.prototype={
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
v.z=A.lw
w.af(d,e*0.5,v)},
$S:724}
B.eg5.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcPb()?this.a.crW(w,v,d.b):w.aC(0,v).gcn())<24},
$S:z+56}
B.egu.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.egj.prototype={
$0(){var w=this.a
return w.m(new B.ega(w))},
$S:0}
B.ega.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.egk.prototype={
$0(){return B.qU(this.b,this.a.d,"marble-music")},
$S:0}
B.egl.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bhH(v.e,v.f,v.at,v.ax,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egg(v),new B.egh(v),new B.egi(v),w,w,w,w,w,w,w,w,w,w,new B.eg9(v),w,w,w,!1,A.a7),v.d)},
$S:202}
B.eg9.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_3(w)
u.e.push(new B.FL(w,w,v,u.aPm(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}if(u.x==="erase")u.aS1(d.b)},
$S:50}
B.egh.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.egi.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aS1(d.b)},
$S:18}
B.egg.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcn()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_3(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FL(w,t,v,u.aPm(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:38}
B.egm.prototype={
$0(){var w=this.a
return w.m(new B.egf(w,this.b))},
$S:0}
B.egf.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.egn.prototype={
$0(){var w=this.a
return w.m(new B.ege(w,this.b))},
$S:0}
B.ege.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ego.prototype={
$0(){var w=this.a
return w.m(new B.egd(w,this.b))},
$S:0}
B.egd.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.egp.prototype={
$1(d){var w=this.a
return w.m(new B.egc(w,d))},
$S:6}
B.egc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.egq.prototype={
$0(){var w=this.a
return w.m(new B.egb(w))},
$S:0}
B.egb.prototype={
$0(){return this.a.ayj("stairs")},
$S:0}
B.egr.prototype={
$0(){var w=this.a
return w.m(new B.eg8(w))},
$S:0}
B.eg8.prototype={
$0(){return this.a.ayj("pinball")},
$S:0}
B.egs.prototype={
$0(){var w=this.a
return w.m(new B.eg7(w))},
$S:0}
B.eg7.prototype={
$0(){return this.a.ayj("random")},
$S:0}
B.egt.prototype={
$0(){var w=this.a
return w.m(new B.eg6(w))},
$S:0}
B.eg6.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ek_.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ek0.prototype={
$0(){var w=this.b,v=new B.adr(this.a.a,this.c)
v.c=w.fX$
return w.e.push(v)},
$S:0}
B.ek7.prototype={
$0(){var w=this.a
return w.m(new B.ek6(w))},
$S:0}
B.ek6.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ek8.prototype={
$0(){return B.qU(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ek9.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQM()}w=u.w
return new C.ex(C.aC(A.c7,C.b3(v,v,v,new B.bla(u.e,u.gaYX(),6,u.gclY(),u.gcso(),u.fX$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ek5(u),v,v,v,!1,A.a7),u.d)},
$S:202}
B.ek5.prototype={
$1(d){return this.a.c6G(d.b)},
$S:50}
B.eka.prototype={
$1(d){var w=this.a
return w.m(new B.ek4(w,d))},
$S:6}
B.ek4.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ekb.prototype={
$0(){var w=this.a
return w.m(new B.ek3(w,this.b))},
$S:0}
B.ek3.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ekc.prototype={
$0(){var w=this.a
return w.m(new B.ek2(w,this.b))},
$S:0}
B.ek2.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ekd.prototype={
$0(){var w=this.a
return w.m(w.gbKY())},
$S:0}
B.eke.prototype={
$0(){var w=this.a
return w.m(new B.ek1(w))},
$S:0}
B.ek1.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adr(v.av(6),v.aj()))},
$S:0}
B.ekf.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.fyy.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:135}
B.eju.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ejt(w,d))},
$S:141}
B.ejt.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.ejg.prototype={
$2(d,e){var w=this.b
if(A.o.am(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:135}
B.eja.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b9w(w.b,new C.v(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ejb.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ejf.prototype={
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
p=D.wf.h(0,v[u].a).a
o=w.ajc(u)
v=D.wf.h(0,v[t].a).a
n=w.ajc(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.w2("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaZ2()&&w.x.L(0,w.d)){B.w2("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.w_("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.eje.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ejc(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bM(0,new B.ejd(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ejc.prototype={
$1(d){var w=this.a
return A.o.am(d,100)===w||A.o.E(d,100)===w},
$S:31}
B.ejd.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:135}
B.ejo.prototype={
$1(d){return""+d.b+" "+D.wf.h(0,d.a).c.toLowerCase()},
$S:352}
B.ejp.prototype={
$0(){var w=this.a
return w.m(new B.ejn(w))},
$S:0}
B.ejn.prototype={
$0(){var w=this.a;++w.d
w.awK(0)},
$S:0}
B.ejq.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aC(A.c7,C.b3(w,w,w,new B.bio(v.e,v.f,v.r,v.gcD8(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ejj(v),new B.ejk(v),new B.ejl(v,e),w,w,w,w,w,w,w,w,w,w,new B.ejm(v),w,w,w,!1,A.a7)},
$S:36}
B.ejm.prototype={
$1(d){return this.a.c72(d.b)},
$S:50}
B.ejk.prototype={
$1(d){var w=this.a
return w.w=w.aZ3(d.b)},
$S:44}
B.ejl.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ejh(w,v,d,this.b))},
$S:18}
B.ejh.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ejj.prototype={
$1(d){return this.a.w=null},
$S:38}
B.ejr.prototype={
$0(){var w=this.a
return w.m(new B.eji(w,this.b))},
$S:0}
B.eji.prototype={
$0(){var w=this.a
w.d=this.b
w.awK(0)},
$S:0}
B.ejs.prototype={
$0(){return this.a.c6X(0,this.b.a)},
$S:0}
B.dpE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.am(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.v(-h.b,h.a).eG(0,Math.max(h.gcn(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bS
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:135}
B.dPJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dPI(w,d))},
$S:141}
B.dPI.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dPy.prototype={
$0(){var w,v,u=J.e5(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.avV[w.av(4)]
return A.d.h2(u)},
$S:22}
B.dPx.prototype={
$1(d){return B.h1E(d)==="*"},
$S:3}
B.dPz.prototype={
$1(d){return d!==this.a},
$S:3}
B.dPw.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.w_("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.w2("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga97()[r]+" codes for "+C.u(D.CE.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b16()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.CE.h(0,w[u]))
r="Protein built: "+A.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.w2("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dPH.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dm:e,u=C.n(8),t=f?C.I(A.b_,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b_:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mu,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1865}
B.dPC.prototype={
$1(d){var w=D.doV.h(0,d)
return w==null?A.c:w},
$S:725}
B.dPD.prototype={
$0(){var w=this.a
return w.m(new B.dPB(w,this.b))},
$S:0}
B.dPB.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.aw3()},
$S:0}
B.dPE.prototype={
$0(){var w=this.a
return w.m(new B.dPA(w))},
$S:0}
B.dPA.prototype={
$0(){var w=this.a;++w.e
w.aw3()},
$S:0}
B.dPF.prototype={
$0(){return this.a.aZ1(this.b)},
$S:0}
B.dPG.prototype={
$0(){return this.a.aZ1(this.b)},
$S:0}
B.dSy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dSx(w,d))},
$S:141}
B.dSx.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dSl.prototype={
$0(){},
$S:0}
B.dSk.prototype={
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
B.dSm.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dSq.prototype={
$1(d){var w=this.a
return w.m(new B.dSp(w,d))},
$S:6}
B.dSp.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dSr.prototype={
$1(d){var w=this.a
return w.m(new B.dSo(w,d))},
$S:6}
B.dSo.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dSs.prototype={
$1(d){var w=this.a
return w.m(new B.dSn(w,d))},
$S:6}
B.dSn.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dSt.prototype={
$0(){return this.a.aal("drought")},
$S:0}
B.dSu.prototype={
$0(){return this.a.aal("disease")},
$S:0}
B.dSv.prototype={
$0(){return this.a.aal("foxes")},
$S:0}
B.dSw.prototype={
$0(){return this.a.aal("rabbits")},
$S:0}
B.d4L.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eE()
k.dt(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kl(new C.es(e,l,l,A.cO,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.jv(1),l,l,l,l,A.c5,l)
n.en()
n.a4(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1867}
B.d4N.prototype={
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
this.c.aQ(u,l)},
$S:1868}
B.d4M.prototype={
$3(d,e,f){var w=null,v=C.h4(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(this.a,new C.v(f,this.b.b+2))},
$S:1869}
B.bG3.prototype={
$2(d,e){return d+e.a*e.b},
$S:1870}
B.fsE.prototype={
$2(d,e){return e.a-d.a},
$S:1871}
B.dD9.prototype={
$2(d,e){return d+e},
$S:74}
B.dDm.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dDl(v,A.k.D((v.gvW()-w[v.e].guZ())/Math.max(w[v.e].guZ(),8),-1,1)*0.32,u))},
$S:8}
B.dDl.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dDn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dDk(w,d))},
$S:141}
B.dDk.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dDa.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dDf.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1872}
B.dDg.prototype={
$0(){var w=this.a
return w.m(new B.dDe(w))},
$S:0}
B.dDe.prototype={
$0(){var w=this.a;++w.e
A.d.h6(w.f,0,5,0)},
$S:0}
B.dDh.prototype={
$2(d,e){var w=null,v=this.a
return C.aC(A.c7,C.b3(w,w,w,new B.b9I(v.w,this.b.a,v.f,v.gvW()===v.d[v.e].guZ(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dDd(v,e),w,w,w,!1,A.a7)},
$S:36}
B.dDd.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cyW(v-1)},
$S:50}
B.dDi.prototype={
$0(){var w=this.a
return w.m(new B.dDc(w,this.b))},
$S:0}
B.dDc.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h6(w.f,0,5,0)},
$S:0}
B.dDj.prototype={
$0(){var w=this.a
return w.m(new B.dDb(w))},
$S:0}
B.dDb.prototype={
$0(){return A.d.h6(this.a.f,0,5,0)},
$S:0}
B.cEA.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.ch(new C.v(d,s),20,w),A.qr)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
B.frE(v,"1",new C.v(d,s),A.bk,11)}},
$S:1873}
B.dWB.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dWA(w,v))},
$S:8}
B.dWA.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dWC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWz(w,d))},
$S:141}
B.dWz.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dWr.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dWv.prototype={
$0(){var w=this.a
return w.m(new B.dWu(w))},
$S:0}
B.dWu.prototype={
$0(){return this.a.r++},
$S:0}
B.dWw.prototype={
$0(){var w=this.a
return w.m(new B.dWt(w,this.b))},
$S:0}
B.dWt.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWx.prototype={
$1(d){var w=this.a
return w.m(new B.dWs(w,d))},
$S:6}
B.dWs.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dWy.prototype={
$1(d){return this.a.c73(this.b,d)},
$S:6}
B.dcL.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQq(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sar(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bU(d,e+6)))
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
p.r=A.hM.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1874}
B.dcM.prototype={
$3(d,e,f){var w=this,v=w.b
return B.frE(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1875}
B.dHl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dHk(w,d))},
$S:141}
B.dHk.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dH3.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jK(90-(w-65)):d},
$S:14}
B.dHc.prototype={
$1(d){return this.a.m(new B.dHb())},
$S:2}
B.dHb.prototype={
$0(){},
$S:0}
B.dHd.prototype={
$1(d){return this.a.m(new B.dHa())},
$S:2}
B.dHa.prototype={
$0(){},
$S:0}
B.dHe.prototype={
$0(){var w=this.a
return w.m(new B.dH9(w))},
$S:0}
B.dH9.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXF()},
$S:0}
B.dHf.prototype={
$0(){var w=this.a
return w.m(new B.dH8(w))},
$S:0}
B.dH8.prototype={
$0(){return this.a.f=0},
$S:0}
B.dHg.prototype={
$0(){var w=this.a
return w.m(new B.dH7(w))},
$S:0}
B.dH7.prototype={
$0(){return this.a.f=1},
$S:0}
B.dHh.prototype={
$0(){var w=this.a
return w.m(new B.dH6(w,this.b))},
$S:0}
B.dH6.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHi.prototype={
$1(d){var w=this.a
return w.m(new B.dH5(w,d))},
$S:6}
B.dH5.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dHj.prototype={
$1(d){var w=this.a
w.m(new B.dH4(w,d))
if(w.ga9B()&&w.Q.L(0,w.x)){B.w2("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.w_("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dH4.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bMs.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bMD.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bMy.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bME.prototype={
$1(d){return this.a.LD(d)&&!d.x},
$S:z+1}
B.bMF.prototype={
$2(d,e){return Math.max(d,this.a.aAh(e))},
$S:z+6}
B.bMH.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMI(w))},
$S:z+5}
B.bMI.prototype={
$0(){return this.a.a},
$S:98}
B.bMG.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
B.bMJ.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMK(w))},
$S:z+5}
B.bMK.prototype={
$0(){return this.a.a},
$S:98}
B.bMu.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMv(w))},
$S:z+5}
B.bMv.prototype={
$0(){return this.a.a},
$S:98}
B.bMt.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
B.bMw.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMx(w))},
$S:z+5}
B.bMx.prototype={
$0(){return this.a.a},
$S:98}
B.bMr.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bML.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bMz.prototype={
$1(d){return d!==this.b&&this.a.aGq(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bMC.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bMB.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bMA.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHf.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bHg.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.clh.prototype={
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
$S:190}
B.fJU.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1876}
B.fJW.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bS
return w},
$S:1877}
B.fJX.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1878}
B.fJV.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.sar(new C.a8(A.b0,A.b4,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1879}
B.bGU.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGT(w))},
$S:0}
B.bGT.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGW.prototype={
$0(){return C.a([],x.ey)},
$S:1880}
B.bGX.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:427}
B.bGY.prototype={
$0(){var w,v,u
J.bE7(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cu(v))if(B.h27(v.b))w.b03(v)
else w.a_j(v)
else{u=w.a.c.bcN(v)
w.adQ(u==null?"The "+$.qj().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGS.prototype={
$1(d){return new C.e3(new B.bGQ(this.a,this.b),null)},
$S:21}
B.bGQ.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGR(this.a,v,e),t=$.qj(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kh,w,w,w),q=C.aH(w,w,w,w,D.bJI,w,w,w,new B.bGM(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xT,C.x(C.a([r,A.au,D.fGI,A.R,C.B(C.a([q,C.E(C.l1(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bQn,w,w,w,new B.bGN(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fko,w,w,!0,w,w,new B.bGO(u),w,w),C.bK(!1,A.zW,w,w,!0,w,w,new B.bGP(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:86}
B.bGR.prototype={
$1(d){var w=this.a
w.m(new B.bGK(this.b,d))
this.c.$1(new B.bGL())
w.a.toString},
$S:6}
B.bGK.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGL.prototype={
$0(){},
$S:0}
B.bGM.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGN.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGO.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGP.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bHc.prototype={
$2(d,e){var w
if(d==="short"){E.dH(1800,"",120,0,0.55,"noise")
E.dH(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adQ("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adQ("\u26a0 Overloaded! The "+$.qj().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zH(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adQ("Burnt out! "+e.ay)
E.dH(140,"",320,0,0.6,"noise")
E.dH(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bHd.prototype={
$0(){},
$S:0}
B.bGn.prototype={
$0(){},
$S:0}
B.bHe.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bHb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aC(A.c7,C.b3(p,p,p,new B.aiz(w,v,u,t,s,r==null?A.j6:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bH5(o),new B.bH6(o),new B.bH7(o),p,p,p,p,p,p,p,p,p,p,new B.bH8(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b5H)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aC(p,C.p(p,C.B(C.a([D.fiE,C.E(C.d(w,p,p,p,p,p,p,D.faR,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.bb8,p,u,v,p,p,A.n),p,p,p,p,A.nh,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bH9(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZ6(C.B(C.a([D.bA_,new B.fj(A.Gd,"Cut wire",new B.bHa(o),A.c9,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cgN(w),p,p,10,10,p,p))}return C.jA(new C.an(A.W,p,A.b1,A.r,n,p),A.r,p)},
$S:459}
B.bH6.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b75(s)
if(r!=null){t.m(new B.bH3(t,r,d))
return}w=t.b0K(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bH4(t,w))}},
$S:44}
B.bH3.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bH4.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bH7.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bH1(w,d))
else if(w.w!=null)w.m(new B.bH2(w,d.b.ad(0,w.x)))},
$S:18}
B.bH1.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bH2.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bH5.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b75(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akn(u.a,u.b,v.a,v.b)!=null)E.dH(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adO()},
$S:38}
B.bH8.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0K(v)
if(u!=null){w.m(new B.bH_(w,u))
if(D.m1.ai(0,u.b))w.cro(u)
w.a.toString
return}w.m(new B.bH0(w,w.cE_(v)))},
$S:50}
B.bH_.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dH(200,"",70,0,0.2,"saw")}},
$S:0}
B.bH0.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bH9.prototype={
$0(){var w=this.a
return w.m(new B.bGZ(w))},
$S:0}
B.bGZ.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bHa.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dH(300,"",50,0,0.35,"noise")
w.adO()},
$S:0}
B.bGo.prototype={
$0(){return this.a.boJ(this.b)},
$S:0}
B.bGH.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f5m,w,w,w),C.E(C.l1(this.b.d,w,w,g,h,new B.bGJ(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1881}
B.bGJ.prototype={
$1(d){var w=this.a
w.m(new B.bGI(this.b,d))
w.a.toString},
$S:6}
B.bGI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGu.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dH(260,"",70,0,0.35,"noise")
w.adO()},
$S:0}
B.bGv.prototype={
$0(){var w=this.a
return w.m(new B.bGt(w))},
$S:0}
B.bGt.prototype={
$0(){return this.a.d=null},
$S:0}
B.bGw.prototype={
$0(){this.a.m(new B.bGs(this.b,this.c))
E.dH(900,"",40,0,0.3,"noise")},
$S:0}
B.bGs.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bGz.prototype={
$0(){return this.a.b03(this.b)},
$S:0}
B.bGA.prototype={
$0(){return this.a.a_j(this.b)},
$S:0}
B.bGB.prototype={
$0(){return this.a.a0Y(this.b)},
$S:0}
B.bGC.prototype={
$0(){var w=this.a
w.m(new B.bGr(this.b,this.c))
w.a.toString},
$S:0}
B.bGr.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGD.prototype={
$0(){var w=this.a
w.m(new B.bGq(this.b,this.c))
w.a.toString},
$S:0}
B.bGq.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGE.prototype={
$0(){var w=this.a
w.m(new B.bGp(this.b,this.c))
w.a.toString},
$S:0}
B.bGp.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGF.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGG.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGx.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGy.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fi0.prototype={
$1(d){return d.aG3("bulb")},
$S:z+2}
B.fi1.prototype={
$1(d){return d.pN(0,"switch")&&d.aG3("bulb")},
$S:z+2}
B.fi2.prototype={
$1(d){return A.d.b6(d.a,new B.fhO())},
$S:z+2}
B.fhO.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fi3.prototype={
$1(d){return d.pN(0,"resistor")&&A.d.b6(d.a,new B.fhN())},
$S:z+2}
B.fhN.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fi4.prototype={
$1(d){return!d.pN(0,"battery")&&d.aG3("bulb")},
$S:z+2}
B.fhS.prototype={
$1(d){return A.d.b6(d.a,new B.fhM())},
$S:z+2}
B.fhM.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fhT.prototype={
$1(d){return A.d.b6(d.a,new B.fhL())},
$S:z+2}
B.fhL.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fhU.prototype={
$1(d){return A.d.b6(d.a,new B.fhK())},
$S:z+2}
B.fhK.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fhV.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fhI())&&A.d.b6(w,new B.fhJ())&&d.pN(0,"buck")},
$S:z+2}
B.fhI.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fhJ.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fhW.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fhG())&&A.d.b6(w,new B.fhH())},
$S:z+2}
B.fhG.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fhH.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fhX.prototype={
$1(d){return A.d.b6(d.a,new B.fhF())},
$S:z+2}
B.fhF.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dSG.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dSP.prototype={
$1(d){var w=this.a.d
return w.aGq(d)&&w.Cu(d)},
$S:z+1}
B.dSQ.prototype={
$1(d){return d.x},
$S:z+1}
B.dSR.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dSS.prototype={
$0(){},
$S:0}
B.dSF.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.fzv,A.au,D.fkk,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qg[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.az(A.bE,1,A.q,-1)
n.push(C.aC(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.kg,q,q,q,q,q,q,q,q,q),A.bC,new C.y(u.b,q,D.fbB,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dSE(w,d,u),q,q,q,q,q,q,!1,A.a7))}return C.eL(q,F.kS,new C.D(A.bQ,new C.a7(340,q,C.cw(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.Y),q)},
$S:48}
B.dSE.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dSD(w,this.c))
E.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dSD.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhU()},
$S:0}
B.dSB.prototype={
$1(d){return new B.Vn(this.a.d,null)},
$S:z+67}
B.dSC.prototype={
$0(){},
$S:0}
B.dSO.prototype={
$1(d){return new C.e3(new B.dSN(this.a),null)},
$S:21}
B.dSN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahK(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aN
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fwO,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.n(4),C.m6(A.bE,m,m,5,m,w.a/11,new C.lZ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fnn)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.TS,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DF,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dSL(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dm,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aC(m,C.p(m,new C.cl(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a8r,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bh,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.nh,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dSM(l,o,e),m,m,m,m,m,m,!1,A.a7))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A4.xR,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:86}
B.dSL.prototype={
$0(){var w=this.a
w.m(new B.dSJ(w))
this.b.$1(new B.dSK())
w.EU()},
$S:0}
B.dSJ.prototype={
$0(){var w=this.a
$.ahK()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dSK.prototype={
$0(){},
$S:0}
B.dSM.prototype={
$0(){var w=this.a
w.m(new B.dSH(w,this.b))
this.c.$1(new B.dSI())
w.EU()},
$S:0}
B.dSH.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dSI.prototype={
$0(){},
$S:0}
B.dSU.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.dSV.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mg("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).cm(C.ea(new B.dST(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dST.prototype={
$1(d){C.lq("construction")
return Ak.hFA()},
$S:z+68}
B.dSW.prototype={
$0(){return B.hrB(this.a,"ELECTRONICS LAB",this.b,A.aN)},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
return w.m(w.d.gcVc())},
$S:0}
B.dSY.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grG(v))
w.EU()},
$S:0}
B.cC7.prototype={
$2(d,e){var w=null,v=this.a.gawL().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8Q(v,w),A.ax)},
$S:69}
B.cC6.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cW(v,u,v+e,u))
w.F(new C.cW(v,u,v,u+e))
w.F(new C.cW(v,u,v-e,u))
w.F(new C.cW(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aQ(w,t)},
$S:764}
B.fOA.prototype={
$3(d,e,f){return new B.UE(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fOB.prototype={
$4(d,e,f,g){var w=x.Y
return new C.d_(e,!1,C.is(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
B.dOC.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.dOB.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYl(o):q.bAM(o,p),m=x.p
p=C.a([C.qm(new C.nh(n,new C.cx(p,x.aC)),A.pU,C.rW(),A.bd,A.bd,new B.dOz())],m)
n=t.d
if(n){w=A.k.E(q.gRF(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.at],m)
if(w)m.push(D.bzL)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.aw,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ey,new C.o(A.w,s,s,u,s,s,A.n),A.nd,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uN)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.Ky,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.ws)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.Ky,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aC(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dOA(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b1,A.r,p,s),A.aq)},
$S:312}
B.dOz.prototype={
$2(d,e){var w=x.Y
return new C.d_(e,!1,C.is(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:465}
B.dOA.prototype={
$0(){var w=this.a
return w.m(new B.dOy(w))},
$S:0}
B.dOy.prototype={
$0(){return this.a.e=null},
$S:0}
B.dOx.prototype={
$0(){var w=this.a
return w.m(new B.dOw(w,this.b))},
$S:0}
B.dOw.prototype={
$0(){return this.a.e=A.d.cH(F.k8,this.b)},
$S:0}
B.dOv.prototype={
$0(){var w=this.a
return w.m(new B.dOu(w))},
$S:0}
B.dOu.prototype={
$0(){return this.a.e=0},
$S:0}
B.dOq.prototype={
$0(){var w=this.a
return w.m(new B.dOp(w))},
$S:0}
B.dOp.prototype={
$0(){return this.a.e=null},
$S:0}
B.dOt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fFa,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eF,p,p,p,D.fhx,p,p,p),1),C.d(A.a.aW(A.o.u(C.dk(new C.T(Date.now(),0,!1))),2,"0")+":"+A.a.aW(A.o.u(C.h3(new C.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qy,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kX,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bv1(w.gRF(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.b_,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aC(p,C.p(p,p,A.f,p,p,A.abw,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dOs(w),p,p,p,p,p,p,!1,A.a7),A.ee,C.p(p,p,A.f,p,p,A.abC,p,12,p,p,p,p,p,12),A.ee,C.p(p,p,A.f,p,p,D.b16,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.k8[o].a,p,1,A.a2,p,p,p,A.a8j,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.ct,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bX(0,new C.D(D.bwv,C.p(p,C.bw(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aex(r,w.gRF(),p),A.f6),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dhx,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.b_,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jq,w.auI(F.k8[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lm,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.W,p,A.b1,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.LK,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:312}
B.dOs.prototype={
$0(){var w=this.a
return w.m(new B.dOr(w))},
$S:0}
B.dOr.prototype={
$0(){return this.a.e=null},
$S:0}
B.ebF.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ebE(w,d))},
$S:141}
B.ebE.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h2f(v)},
$S:0}
B.ebG.prototype={
$0(){},
$S:0}
B.ebv.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h2f(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.ebw.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvu().r){C.jU()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.w2("click",s.c+s.d,60,0.4)
if(B.hrM(r.gvu(),q).b.a===r.gvu().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.w_("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BK("bell",D.apy,700,0.45)
for(q=r.gvu().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((A.o.E(t,7)+0.5)*p+w,(A.o.am(t,7)+0.5)*p+v),0))}}},
$S:0}
B.ebz.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aC(A.c7,C.b3(s,s,s,new B.bgS(r.gvu(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ebx(r),s,s,s,!1,A.a7),C.ao(s,C.e0(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQD,s,s,s),C.d(""+u.a+"/"+r.gvu().c.a+" \u2605   mirrors "+w.a+"/"+r.gvu().r,s,s,s,s,s,s,R.a8_,s,s,s)],t),A.m,s,A.hE,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fmT("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fj(A.j3,"Next level",new B.eby(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b1,A.r,w,s)},
$S:64}
B.ebx.prototype={
$1(d){return this.a.c7p(d.b)},
$S:50}
B.eby.prototype={
$0(){var w=this.a
return w.adU(w.d+1)},
$S:0}
B.ebA.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grG(v))},
$S:0}
B.ebB.prototype={
$0(){var w=this.a
return w.adU(w.d+1)},
$S:0}
B.ebC.prototype={
$0(){var w=this.a
return w.adU(w.d-1)},
$S:0}
B.ebD.prototype={
$0(){return this.a.adU(this.b)},
$S:0}
B.dhR.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.am(d,7)+0.5)*w)},
$S:726}
B.dhU.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fW:A.aL).gp(0)
u.c=7
u.d=A.bS
r.bE(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bS
r.bE(w,v,u)},
$S:1883}
B.dhS.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:454}
B.dhT.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:454}
B.ebY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ebX(w,d))},
$S:141}
B.ebX.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.ebZ.prototype={
$0(){},
$S:0}
B.ebJ.prototype={
$1(d){return d===0},
$S:114}
B.ebS.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.u(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a8b,s,s,s)
w=r.z==="play"?A.k.dj(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c9:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a8_,s,s,s)],v),A.m,s,A.hE,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dm:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b_,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.btP,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcyZ(),s,s,s,s,s,s,D.aRt,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.x(C.a([C.E(C.b3(s,s,s,new B.bh6(r.f,s),A.f6),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aRt,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fmT("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fj(A.iK,"Start",new B.ebP(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fmT(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j3,"Next colour",new B.ebQ(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fmT("Finished! "+q,u,A.b2,C.a([new B.fj(A.mB,"Play again",new B.ebR(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.ebP.prototype={
$0(){var w=this.a
return w.m(new B.ebL(w))},
$S:0}
B.ebL.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awP()},
$S:0}
B.ebQ.prototype={
$0(){var w=this.a
return w.m(w.gc7n())},
$S:0}
B.ebR.prototype={
$0(){var w=this.a
return w.m(new B.ebK(w))},
$S:0}
B.ebK.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awP()},
$S:0}
B.ebT.prototype={
$1(d){var w=this.a
return w.m(new B.ebO(w,d))},
$S:6}
B.ebO.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.ebU.prototype={
$1(d){var w=this.a
return w.m(new B.ebN(w,d))},
$S:6}
B.ebN.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.ebV.prototype={
$1(d){var w=this.a
return w.m(new B.ebM(w,d))},
$S:6}
B.ebM.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.ebW.prototype={
$0(){var w=this.a
return w.m(w.gc7o())},
$S:0}
B.fiI.prototype={
$0(){return D.e3L},
$S:z+70}
B.fiJ.prototype={
$0(){return D.dBY},
$S:z+71}
B.fiK.prototype={
$0(){return D.dyv},
$S:z+72}
B.fiL.prototype={
$0(){return D.dBn},
$S:z+73}
B.fiM.prototype={
$0(){return D.dGk},
$S:z+74}
B.fiN.prototype={
$0(){return D.e_u},
$S:z+75}
B.fiO.prototype={
$0(){return D.e1G},
$S:z+76}
B.fiP.prototype={
$0(){return D.dFE},
$S:z+77}
B.cfV.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.cfW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hvd(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aC(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TR,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lD,m,m,C.x(C.a([new C.y(r.a,m,D.fg9,m,m,m,m,m,m,m,m,m),A.cV,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.az,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cfU(d,r),m,m,m,m,m,m,!1,A.a7))}return C.bV(A.bA,j,A.br,14,14)},
$S:158}
B.cfU.prototype={
$0(){return C.a6(this.a,!1).cm(C.ea(new B.cfT(this.b),!1,null,x.H))},
$S:0}
B.cfT.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eLd.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4f(w.f)]},
$S:0}
B.eL9.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cG.aj()*7},
$S:0}
B.eL8.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c8)
w.w=""},
$S:0}
B.eLb.prototype={
$0(){var w=this.a
return w.m(new B.eLa(w,this.b))},
$S:0}
B.eLa.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eLc.prototype={
$1(d){return this.a.aZx(0)},
$S:2}
B.dUU.prototype={
$0(){return B.BK("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dUV.prototype={
$0(){},
$S:0}
B.dUP.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dUR.prototype={
$0(){return this.a.aZz(this.b)},
$S:0}
B.dUS.prototype={
$0(){var w=this.a
return w.m(new B.dUQ(w))},
$S:0}
B.dUQ.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dUT.prototype={
$0(){var w=this.a
return w.aZz(w.d)},
$S:0}
B.dFM.prototype={
$2(d,e){return d+e},
$S:87}
B.dFN.prototype={
$0(){},
$S:0}
B.dFH.prototype={
$2(d,e){return d+e},
$S:87}
B.dFK.prototype={
$0(){var w=this.a
return w.m(new B.dFJ(w,this.b))},
$S:0}
B.dFJ.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dFL.prototype={
$0(){var w=this.a
return w.m(new B.dFI(w))},
$S:0}
B.dFI.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dSa.prototype={
$0(){return B.qU(this.b,this.a.d,"drawing")},
$S:0}
B.dSb.prototype={
$1(d){var w=this.a
return w.m(new B.dS9(w,d))},
$S:44}
B.dS9.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHW(u,v,t))},
$S:0}
B.dSc.prototype={
$1(d){var w=this.a
return w.m(new B.dS8(w,d))},
$S:18}
B.dS8.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dSd.prototype={
$1(d){var w=this.a
return w.m(new B.dS7(w,d))},
$S:23}
B.dS7.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHW(u,v,t))},
$S:0}
B.dSe.prototype={
$0(){var w=this.a
return w.m(new B.dS6(w,this.b))},
$S:0}
B.dS6.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dSf.prototype={
$1(d){var w=this.a
return w.m(new B.dS5(w,d))},
$S:6}
B.dS5.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSg.prototype={
$0(){var w=this.a
return w.m(new B.dS4(w))},
$S:0}
B.dS4.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dSh.prototype={
$0(){var w=this.a
return w.m(new B.dS3(w))},
$S:0}
B.dS3.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dSi.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.dSj.prototype={
$0(){var w=this.a
return w.m(new B.dS2(w))},
$S:0}
B.dS2.prototype={
$0(){var w=this.a
w.x=D.awp[A.o.E(A.d.cH(D.awp,w.x)+1,4)]},
$S:0}
B.ehk.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.ehl.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BK("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ehj(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BK("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ehj.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.ehm.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ehi(w))},
$S:11}
B.ehi.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.ehq.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aC(w,C.mG(new B.eho(v,e),w,A.bd,A.pU,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ehp(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:78}
B.ehp.prototype={
$0(){return this.a.c8k(this.b)},
$S:0}
B.eho.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fF(3.141592653589793*e)
m=C.n(16)
w=o?p:D.bZp
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b_,A.q,1)
if(o){r=C.dp()
r.fF(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fv(A.A,C.d(u[t],p,p,p,p,p,p,D.fdv,p,p,p),p,r,!0)
u=r}else u=D.fyd
return C.fv(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:133}
B.ehr.prototype={
$0(){var w=this.a
return w.m(new B.ehn(w,this.b))},
$S:0}
B.ehn.prototype={
$0(){var w=this.a
w.d=this.b.a
w.as2()},
$S:0}
B.ehs.prototype={
$0(){var w=this.a
return w.m(w.gbJv())},
$S:0}
B.esd.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.ese.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.esb.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.esc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.esa(w))},
$S:11}
B.esa.prototype={
$0(){return this.a.f=-1},
$S:0}
B.esf.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.esg.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.esh.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZy()},
$S:11}
B.esi.prototype={
$0(){return this.a.c8q(this.b)},
$S:0}
B.eGv.prototype={
$1(d){return C.u(d.h(0,1))+","},
$S:68}
B.eGE.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kW,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.eQ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dZ),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1885}
B.eGA.prototype={
$1(d){return this.a.m(new B.eGz())},
$S:2}
B.eGz.prototype={
$0(){},
$S:0}
B.eGB.prototype={
$0(){var w=this.a
return w.m(new B.eGy(w,this.b))},
$S:0}
B.eGy.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eGC.prototype={
$1(d){var w=this.a
return w.m(new B.eGx(w,d))},
$S:6}
B.eGx.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eGD.prototype={
$0(){var w=this.a
return w.m(new B.eGw(w))},
$S:0}
B.eGw.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.eg_.prototype={
$0(){},
$S:0}
B.eg0.prototype={
$0(){},
$S:0}
B.efT.prototype={
$0(){var w=this.a
return w.m(new B.efS(w))},
$S:0}
B.efS.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a8b("hat",0.6)},
$S:0}
B.efU.prototype={
$0(){var w=this.a
return w.m(new B.efR(w))},
$S:0}
B.efR.prototype={
$0(){this.a.y=1.1
B.lk("bell",36,200,0.4)},
$S:0}
B.efV.prototype={
$0(){var w=this.a
return w.m(new B.efQ(w))},
$S:0}
B.efQ.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
B.lk("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.efW.prototype={
$0(){var w=this.a
return w.m(new B.efP(w,this.b))},
$S:0}
B.efP.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.efX.prototype={
$1(d){var w=this.a
return w.m(new B.efO(w,d))},
$S:6}
B.efO.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e5(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.efY.prototype={
$1(d){var w=this.a
return w.m(new B.efN(w,d))},
$S:6}
B.efN.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.efZ.prototype={
$1(d){var w=this.a
return w.m(new B.efM(w,d))},
$S:6}
B.efM.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.csQ.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.csR.prototype={
$0(){var w=this.a
return B.hrB(this.b,w.c,w.e,w.d)},
$S:0}
B.fSp.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f5V,v,v,v)
return C.em(C.a([C.bK(!1,D.fns,v,v,!0,v,v,new B.fSo(d),v,v)],x.p),v,v,F.n8,w,v,v,v,new C.b7(u,new C.az(s,1,A.q,-1)),t,v)},
$S:20}
B.fSo.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.csM.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csL.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csS.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csN.prototype={
$0(){var w=this.a
A.d.W(w.ft$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
B.csP.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l6$.a)/1e6,0,0.04)
w.l6$=d
w.fX$=A.o.am(v,1000)
w.lD(u)
if(w.c!=null)w.m(new B.csO())},
$S:8}
B.csO.prototype={
$0(){},
$S:0}
B.cfR.prototype={
$0(){var w=this
return B.lk(w.a,w.b,w.c,w.d)},
$S:1}
B.dXC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dXB(w,d))},
$S:z+79}
B.dXB.prototype={
$0(){return this.a.ct9(this.b)},
$S:0}
B.dX4.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:692}
B.dX2.prototype={
$0(){return this.a.id=D.a3h},
$S:0}
B.dX3.prototype={
$0(){var w=this.b.a,v=C.S(w).k("a_<1>")
v=C.pi(new C.a_(w,new B.dX1(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dX1.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dX0.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.em(C.a([C.bK(!1,A.pn,w,w,!0,w,w,new B.dX_(d),w,w)],x.p),w,w,F.n8,v,w,w,w,w,D.fyi,w)},
$S:20}
B.dX_.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dXn.prototype={
$0(){return B.qU(this.b,this.a.d,"earth")},
$S:0}
B.dXo.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVW()
r=p.z
o=C.a([C.aC(A.c7,C.b3(q,q,q,new B.bfi(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dXb(p),new B.dXc(p),new B.dXd(p),q,q,q,q,q,q,q,new B.dXe(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(A9.ace)
w=this.b
if(w!=null)o.push(C.ao(8,p.c91(w),q,q,10,10,q,q))
return new C.ex(new C.an(A.W,q,A.b1,A.r,o,q),p.d)},
$S:202}
B.dXc.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:244}
B.dXd.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVW()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:224}
B.dXb.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVW()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:580}
B.dXe.prototype={
$1(d){var w=this.a,v=w.c94(d.b)
if(v!=null)w.m(new B.dX5(w,v))
else w.m(new B.dX6(w))},
$S:50}
B.dX5.prototype={
$0(){return this.a.axi(this.b)},
$S:0}
B.dX6.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dXp.prototype={
$0(){var w=this.a
w.e.bP(0,A.c8)
w.m(new B.dXa(w,this.b))},
$S:0}
B.dXa.prototype={
$0(){var w=this.a
w.id=D.a3h
w.axi(this.b)},
$S:0}
B.dXt.prototype={
$0(){var w=this.a
return w.m(new B.dXm(w))},
$S:0}
B.dXm.prototype={
$0(){var w=this.a
w.fx=null
w.atd(15,w.y,1)},
$S:0}
B.dXu.prototype={
$0(){var w=this.a
return w.m(new B.dXl(w,this.b))},
$S:0}
B.dXl.prototype={
$0(){var w=this.b.b
return this.a.atd(w.a,w.b,w.c)},
$S:0}
B.dXv.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dXk(w,v))},
$S:0}
B.dXk.prototype={
$0(){var w=this.b.a
return this.a.axi(w[A.cG.av(w.length)])},
$S:0}
B.dXw.prototype={
$1(d){var w=this.a
return w.m(new B.dXj(w,d))},
$S:6}
B.dXj.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dXx.prototype={
$1(d){var w=this.a
return w.m(new B.dXi(w,d))},
$S:6}
B.dXi.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dXy.prototype={
$1(d){var w=this.a
return w.m(new B.dXh(w,d))},
$S:6}
B.dXh.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dXz.prototype={
$0(){var w=this.a
return w.m(new B.dXg(w))},
$S:0}
B.dXg.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dXA.prototype={
$0(){var w=this.a
return w.m(new B.dXf(w))},
$S:0}
B.dXf.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dXq.prototype={
$0(){var w=this.a
return w.m(new B.dX9(w))},
$S:0}
B.dX9.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dXr.prototype={
$0(){var w=this.a
return w.m(new B.dX8(w))},
$S:0}
B.dX8.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dXs.prototype={
$0(){var w=this.a
return w.m(new B.dX7(w))},
$S:0}
B.dX7.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dWZ.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ3,w,w,w),A.uQ,C.d(e,w,2,A.a2,w,w,w,A.U8,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dWY.prototype={
$0(){var w=this.a
return w.m(new B.dWX(w))},
$S:0}
B.dWX.prototype={
$0(){return this.a.fx=null},
$S:0}
B.ddA.prototype={
$0(){var w=null,v=C.h4(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0r,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:316}
B.ddB.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1886}
B.fiB.prototype={
$0(){return D.dDV},
$S:z+81}
B.fiC.prototype={
$0(){return D.e1o},
$S:z+82}
B.fiD.prototype={
$0(){return D.dDX},
$S:z+83}
B.fiE.prototype={
$0(){return D.dyh},
$S:z+84}
B.fiF.prototype={
$0(){return D.dDT},
$S:z+85}
B.fiG.prototype={
$0(){return D.e_v},
$S:z+86}
B.fiH.prototype={
$0(){return D.e_t},
$S:z+87}
B.eHo.prototype={
$0(){return C.a6(this.a,!1).lB()},
$S:0}
B.eHp.prototype={
$0(){var w=this.a
return w.m(new B.eHn(w))},
$S:0}
B.eHn.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSe()+1,16)},
$S:0}
B.eHq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hvc(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bj8],u)
k.push(C.aC(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.y(s.a,n,D.far,n,A.L,n,n,n,n,2,n,n),A.cV,new C.y(s.b,n,D.ffy,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.az,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eHm(d,s),n,n,n,n,n,n,!1,A.a7))}return C.bV(A.fT,k,A.br,10,10)},
$S:158}
B.eHm.prototype={
$0(){return C.a6(this.a,!1).cm(C.ea(new B.eHl(this.b),!1,null,x.H))},
$S:0}
B.eHl.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.ezr.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ezC.prototype={
$0(){return B.qU(this.b,this.a.d,"solar-system")},
$S:0}
B.ezD.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aC(A.c7,C.b3(v,v,v,new B.brO(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ezz(u),new B.ezA(u),v,v,v,v,v,v,v,new B.ezB(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c96(w),v,v,10,10,v,v))
return new C.ex(new C.an(A.W,v,A.b1,A.r,t,v),u.d)},
$S:202}
B.ezz.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:244}
B.ezA.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:224}
B.ezB.prototype={
$1(d){var w=this.a,v=w.c99(d.b)
if(v!=null)w.aZU(v)},
$S:50}
B.ezE.prototype={
$0(){var w=this.a
return w.m(new B.ezy(w))},
$S:0}
B.ezy.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ezF.prototype={
$0(){return this.a.aZU(this.b)},
$S:0}
B.ezG.prototype={
$1(d){var w=this.a
return w.m(new B.ezx(w,d))},
$S:6}
B.ezx.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ezH.prototype={
$1(d){var w=this.a
return w.m(new B.ezw(w,d))},
$S:6}
B.ezw.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ezI.prototype={
$0(){var w=this.a
return w.m(new B.ezv(w))},
$S:0}
B.ezv.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ezJ.prototype={
$0(){var w=this.a
return w.m(new B.ezu(w))},
$S:0}
B.ezu.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ezK.prototype={
$0(){var w=this.a
return w.m(new B.ezt(w))},
$S:0}
B.ezt.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ezL.prototype={
$0(){var w=this.a
return w.m(new B.ezs(w))},
$S:0}
B.ezs.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ezq.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:328}
B.ezp.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ3,w,w,w),A.uQ,C.d(e,w,2,A.a2,w,w,w,A.U8,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.ezo.prototype={
$0(){var w=this.a
return w.m(new B.ezn(w))},
$S:0}
B.ezn.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f0M.prototype={
$0(){var w=null,v=C.h4(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qp,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:316}
B.f0N.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f0O.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dXG.prototype={
$0(){},
$S:0}
B.dY8.prototype={
$1(d){return d!=null},
$S:390}
B.dXV.prototype={
$0(){var w=this.a
return w.m(new B.dXM(w,this.b))},
$S:0}
B.dXM.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dXW.prototype={
$0(){var w=this.a
return w.m(new B.dXL(w))},
$S:0}
B.dXL.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dXX.prototype={
$0(){var w=this.a
return w.m(new B.dXU(w))},
$S:0}
B.dXU.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dY0.prototype={
$0(){var w=this.a
return w.m(new B.dXT(w))},
$S:0}
B.dXT.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dY1.prototype={
$1(d){var w=this.a
return w.m(new B.dXS(w,d))},
$S:6}
B.dXS.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dY2.prototype={
$0(){var w=this.a
return w.m(w.gcwo())},
$S:0}
B.dY3.prototype={
$1(d){var w=this.a
return w.m(new B.dXR(w,d))},
$S:6}
B.dXR.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dY4.prototype={
$1(d){var w=this.a
return w.m(new B.dXQ(w,d))},
$S:6}
B.dXQ.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dY5.prototype={
$1(d){var w=this.a
return w.m(new B.dXP(w,d))},
$S:6}
B.dXP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dY6.prototype={
$1(d){var w=this.a
return w.m(new B.dXO(w,d))},
$S:6}
B.dXO.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dY7.prototype={
$0(){var w=this.a
return w.m(new B.dXN(w))},
$S:0}
B.dXN.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dXY.prototype={
$0(){var w=this.a
return w.m(new B.dXK(w))},
$S:0}
B.dXK.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dXZ.prototype={
$0(){var w=this.a
return w.m(new B.dXJ(w))},
$S:0}
B.dXJ.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dY_.prototype={
$0(){var w=this.a
return w.m(new B.dXI(w))},
$S:0}
B.dXI.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dXF.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bX(0,C.c_(g,new C.o(D.bhE,g,g,C.n(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yY[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.u(D.yY[q].b)+" m/s\xb2",g,D.feV,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dm,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.Ny,C.b0(D.yY[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yY[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yY[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yY[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rY,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f76,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dXE()))a1.push(D.b61)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dXE.prototype={
$1(d){return d==null},
$S:390}
B.dXH.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bd,new C.o(v,v,v,C.n(8),v,new C.a8(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ih,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GP(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fdf,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dXD.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.bau(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aN:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GP(A.k.D(r.cx.gcn()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b1,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRK,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.esl.prototype={
$0(){return B.qU(this.b,this.a.d,"size-compare")},
$S:0}
B.esm.prototype={
$0(){var w=this.a
return w.m(new B.esk(w,this.b))},
$S:0}
B.esk.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.esn.prototype={
$0(){var w=this.a
return w.m(new B.esj(w,this.b))},
$S:0}
B.esj.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eZW.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.sar(new C.bT(P.pt,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a2u,null).aw(0,C.bU(d,e)))
u.af(d,e,w)},
$S:724}
B.dFd.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dF1.prototype={
$1(d){return d.b},
$S:z+60}
B.dF2.prototype={
$0(){return B.qU(this.b,this.a.d,"black-hole")},
$S:0}
B.dF3.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aC(A.c7,C.b3(q,q,q,new B.b9T(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dF_(p),q,q,q,q,q,q,q,q,q,new B.dF0(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fvX(t)+" Suns"
t=p.aeA("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aeA("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GP(s))+" km"),p.aeA("TIME",A.k.ab(this.b*100,0)+"%"),p.aeA("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ei7)
return new C.ex(new C.an(A.W,q,A.b1,A.r,r,q),p.d)},
$S:202}
B.dF0.prototype={
$1(d){return this.a.aZV(d.b)},
$S:23}
B.dF_.prototype={
$1(d){if(A.cG.aj()<0.12)this.a.aZV(d.b)},
$S:18}
B.dF5.prototype={
$1(d){var w=this.a
return w.m(new B.dEZ(w,d))},
$S:6}
B.dEZ.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dF6.prototype={
$0(){var w=this.a
return w.m(new B.dEY(w))},
$S:0}
B.dEY.prototype={
$0(){return this.a.r=10},
$S:0}
B.dF7.prototype={
$0(){var w=this.a
return w.m(new B.dEX(w))},
$S:0}
B.dEX.prototype={
$0(){return this.a.r=21},
$S:0}
B.dF8.prototype={
$0(){var w=this.a
return w.m(new B.dEW(w))},
$S:0}
B.dEW.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dF9.prototype={
$0(){var w=this.a
return w.m(new B.dEV(w))},
$S:0}
B.dEV.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dFa.prototype={
$0(){var w=this.a
return w.m(new B.dEU(w))},
$S:0}
B.dEU.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dFb.prototype={
$0(){var w=this.a
return w.m(new B.dET(w))},
$S:0}
B.dET.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dFc.prototype={
$0(){var w=this.a
return w.m(new B.dES(w))},
$S:0}
B.dES.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dF4.prototype={
$0(){var w=this.a
return w.m(new B.dER(w))},
$S:0}
B.dER.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dWd.prototype={
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
$S:1887}
B.dW3.prototype={
$0(){return B.qU(this.b,this.a.d,"galaxy")},
$S:0}
B.dW4.prototype={
$0(){var w=this.a
return w.m(new B.dW2(w,this.b))},
$S:0}
B.dW2.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZW()},
$S:0}
B.dW5.prototype={
$0(){var w=this.a
return w.m(new B.dW1(w))},
$S:0}
B.dW1.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZW()}w.cwf()},
$S:0}
B.dW6.prototype={
$1(d){var w=this.a
return w.m(new B.dW0(w,d))},
$S:6}
B.dW0.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZW()},
$S:0}
B.dW7.prototype={
$1(d){var w=this.a
return w.m(new B.dW_(w,d))},
$S:6}
B.dW_.prototype={
$0(){var w=this.a
w.r=this.b
w.ZW()},
$S:0}
B.dW8.prototype={
$1(d){var w=this.a
return w.m(new B.dVZ(w,d))},
$S:6}
B.dVZ.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dW9.prototype={
$1(d){var w=this.a
return w.m(new B.dVY(w,d))},
$S:6}
B.dVY.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
return w.m(new B.dVX(w))},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dWb.prototype={
$0(){var w=this.a
return w.m(new B.dVW(w))},
$S:0}
B.dVW.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dWc.prototype={
$0(){var w=this.a
return w.m(new B.dVV(w))},
$S:0}
B.dVV.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.daI.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1888}
B.erA.prototype={
$0(){return B.qU(this.b,this.a.d,"seasons-moon")},
$S:0}
B.erB.prototype={
$0(){var w=this.a
return w.m(new B.erz(w))},
$S:0}
B.erz.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.erC.prototype={
$0(){var w=this.a
return w.m(new B.ery(w))},
$S:0}
B.ery.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.erD.prototype={
$0(){var w=this.a
return w.m(new B.erx(w))},
$S:0}
B.erx.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.erE.prototype={
$0(){var w=this.a
return w.m(new B.erw(w))},
$S:0}
B.erw.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.erF.prototype={
$1(d){var w=this.a
return w.m(new B.erv(w,d))},
$S:6}
B.erv.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.erG.prototype={
$1(d){var w=this.a
return w.m(new B.eru(w,d))},
$S:6}
B.eru.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.erH.prototype={
$1(d){var w=this.a
return w.m(new B.ert(w,d))},
$S:6}
B.ert.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.erI.prototype={
$1(d){var w=this.a
return w.m(new B.ers(w,d))},
$S:6}
B.ers.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLX.prototype
w.bvP=w.q
w=B.aKZ.prototype
w.buP=w.q
w=B.aL_.prototype
w.buQ=w.q
w=B.aL4.prototype
w.buV=w.q
w=B.aMO.prototype
w.bwN=w.q
w=B.aLV.prototype
w.bvN=w.q
w=B.aM3.prototype
w.bvW=w.q
w=B.aM9.prototype
w.bw1=w.q
w=B.aL2.prototype
w.buT=w.q
w=B.aLS.prototype
w.bvK=w.q
w=B.aM6.prototype
w.bvZ=w.q
w=B.aLQ.prototype
w.bvI=w.q
w=B.aLR.prototype
w.bvJ=w.q
w=B.aLg.prototype
w.bv7=w.q
w=B.aKV.prototype
w.buL=w.q
w=B.aLo.prototype
w.bvf=w.q
w=B.axr.prototype
w.brX=w.q
w=B.axs.prototype
w.brY=w.q
w=B.aJr.prototype
w.btd=w.q
w=B.aLd.prototype
w.bv3=w.q
w=B.aLF.prototype
w.bvx=w.q
w=B.aLG.prototype
w.bvy=w.q
w=B.aL0.prototype
w.buR=w.q
w=B.aLj.prototype
w.bva=w.q
w=B.aLO.prototype
w.bvG=w.q
w=B.aMh.prototype
w.bw9=w.q
w=B.aLp.prototype
w.bvh=w.q
w=B.aLq.prototype
w.bvi=w.q
w=B.aLr.prototype
w.bvj=w.q
w=B.aM_.prototype
w.bvS=w.q
w=B.aM2.prototype
w.bvV=w.q
w=B.aKY.prototype
w.buO=w.q
w=B.aLm.prototype
w.bvd=w.q
w=B.aLZ.prototype
w.bvR=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aE5.prototype,"gawc","c4c",0)
var r
v(r=B.aCv.prototype,"gccx","ccy",35)
w(r,"gc4I","aYd",0)
w(B.aCy.prototype,"gc6p","c6q",0)
u(B.aCP.prototype,"gc6v","c6w",52)
w(r=B.aH5.prototype,"gcvW","cvX",0)
w(r,"gcjg","ag_",0)
w(r,"gcgX","cgY",0)
w(r,"gc6u","adB",3)
w(r=B.aE4.prototype,"gbGD","a96",3)
w(r,"gcge","b0A",0)
w(r,"gcjZ","ag7",3)
t(r,"gc6y","adC",3)
w(B.aEk.prototype,"gbY2","bY3",0)
w(r=B.aDX.prototype,"gcvQ","cvR",0)
w(r,"gbGY","bGZ",0)
w(r=B.aCx.prototype,"gb4P","azO",0)
v(r,"gc6E","Zj",54)
w(r,"gc6D","adE",3)
v(r=B.aDW.prototype,"gclY","ayw",58)
v(r,"gcso","azJ",15)
w(r,"gbKY","aQM",0)
v(r=B.aDU.prototype,"gcD8","ajc",15)
t(r,"gc6Y","awK",0)
w(r,"gcok","col",0)
v(r=B.aD0.prototype,"gc6Z","c7_",90)
w(r,"gc70","c71",0)
t(r=B.a4k.prototype,"grG","a8",0)
v(r,"gcT_","amZ",1)
v(r,"gcPv","LD",1)
w(r,"gcVc","bhU",0)
s(B.aiz.prototype,"gc75",0,5,null,["$5"],["qm"],64,0,0)
w(r=B.aD1.prototype,"gc76","c77",0)
w(r,"gcmO","agu",3)
w(r,"gccN","aeN",3)
w(r,"gcu_","ahA",3)
w(r=B.aDG.prototype,"gc7n","awP",0)
w(r,"gc7o","aZb",0)
w(r=B.aEx.prototype,"gc8l","c8m",0)
t(r,"gc8j","aZx",0)
w(B.aDQ.prototype,"gbJv","as2",0)
t(B.aEb.prototype,"gc8n","c8o",0)
v(r=B.aDc.prototype,"gc92","c93",78)
w(r,"gbOz","bOA",0)
w(r=B.aDd.prototype,"gcwo","cwp",0)
w(r,"gc97","c98",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajM,B.G3,B.uR,B.aRU,B.a2Z,B.b9W,B.c0W,B.y5,B.Ck,B.no,B.baE,B.Ax,B.bsw,B.q7,B.qM,B.Co,B.Zb,B.aeE,B.a0q,B.Cy,B.abx,B.abO,B.adK,B.FP,B.blm,B.PQ,B.a_I,B.abE,B.ac6,B.FL,B.acW,B.adr,B.tl,B.b9w,B.aRK,B.ed,B.ty,B.aac,B.abj,B.a4k,B.mC,B.baF,B.fO,B.m9,B.aWn,B.btR,B.aHW,B.mF,B.aaZ,B.ab_,B.v5,B.P4,B.y3,B.P3,B.btM,B.Py,B.aeJ])
u(C.i_,[B.fyg,B.fob,B.fv2,B.fv3,B.fyd,B.fye,B.e8H,B.e9_,B.ep5,B.eoD,B.eoE,B.eoF,B.eoG,B.eoH,B.eoI,B.eoJ,B.eoK,B.eoB,B.eoC,B.eoA,B.ep0,B.ep1,B.ep2,B.dFi,B.dFk,B.dFn,B.dFy,B.c0X,B.c0Y,B.fhP,B.fhQ,B.fhR,B.fhY,B.fhZ,B.fi_,B.dHQ,B.dHx,B.dHR,B.dHs,B.dHn,B.dHp,B.dHv,B.dHI,B.dHG,B.dHH,B.dHF,B.dHC,B.dHE,B.eZq,B.eZ7,B.eZe,B.eZn,B.eZ1,B.dhy,B.dhz,B.dhv,B.dhw,B.dhx,B.dhA,B.dhB,B.dhC,B.dhD,B.dhE,B.dhF,B.dhG,B.dhH,B.dhI,B.eo1,B.eo2,B.eo3,B.eo4,B.eo_,B.eo0,B.eow,B.eo8,B.eoa,B.enV,B.eos,B.eoq,B.eor,B.eop,B.eoo,B.enX,B.eAb,B.eA9,B.ezY,B.eA1,B.ezX,B.eA2,B.eA3,B.eA7,B.eGN,B.eGT,B.ekC,B.ekD,B.eko,B.ekp,B.ekn,B.eks,B.eku,B.ekv,B.eGc,B.eGd,B.eGb,B.eG_,B.eG0,B.eFZ,B.eFS,B.eFT,B.eG6,B.eG7,B.eG8,B.eG9,B.eGa,B.dGZ,B.dH_,B.dH0,B.dGS,B.dGV,B.cM2,B.eg5,B.egu,B.eg9,B.egh,B.egi,B.egg,B.egp,B.ek5,B.eka,B.eju,B.ejc,B.ejo,B.ejm,B.ejk,B.ejl,B.ejj,B.dPJ,B.dPx,B.dPz,B.dPH,B.dPC,B.dSy,B.dSq,B.dSr,B.dSs,B.d4L,B.d4N,B.d4M,B.dDm,B.dDn,B.dDf,B.dDd,B.cEA,B.dWB,B.dWC,B.dWx,B.dWy,B.dcL,B.dcM,B.dHl,B.dH3,B.dHc,B.dHd,B.dHi,B.dHj,B.bMs,B.bMD,B.bMy,B.bME,B.bMG,B.bMt,B.bMr,B.bML,B.bMz,B.bMC,B.bMB,B.bMA,B.bHf,B.fJU,B.fJX,B.fJV,B.bGX,B.bGS,B.bGR,B.bHe,B.bH6,B.bH7,B.bH5,B.bH8,B.bGH,B.bGJ,B.bGF,B.bGG,B.bGx,B.bGy,B.fi0,B.fi1,B.fi2,B.fhO,B.fi3,B.fhN,B.fi4,B.fhS,B.fhM,B.fhT,B.fhL,B.fhU,B.fhK,B.fhV,B.fhI,B.fhJ,B.fhW,B.fhG,B.fhH,B.fhX,B.fhF,B.dSP,B.dSQ,B.dSF,B.dSB,B.dSO,B.dST,B.cC6,B.fOA,B.fOB,B.ebF,B.ebx,B.dhR,B.dhU,B.ebY,B.ebJ,B.ebT,B.ebU,B.ebV,B.cfT,B.eLc,B.dSb,B.dSc,B.dSd,B.dSf,B.eho,B.eGv,B.eGE,B.eGA,B.eGC,B.efX,B.efY,B.efZ,B.fSp,B.csP,B.dXC,B.dX1,B.dX0,B.dXc,B.dXd,B.dXb,B.dXe,B.dXw,B.dXx,B.dXy,B.eHl,B.ezz,B.ezA,B.ezB,B.ezG,B.ezH,B.ezq,B.f0N,B.f0O,B.dY8,B.dY1,B.dY3,B.dY4,B.dY5,B.dY6,B.dXE,B.eZW,B.dFd,B.dF1,B.dF0,B.dF_,B.dF5,B.dWd,B.dW6,B.dW7,B.dW8,B.dW9,B.daI,B.erF,B.erG,B.erH,B.erI])
u(C.kn,[B.fyf,B.e8M,B.e8K,B.eoM,B.eoZ,B.dHo,B.dHL,B.dNH,B.eZt,B.eZu,B.eZ6,B.eZj,B.eZk,B.eZf,B.eZl,B.eZ0,B.enY,B.enZ,B.eov,B.eon,B.eoc,B.eGM,B.ekr,B.eG2,B.dGR,B.dGW,B.egl,B.ek9,B.fyy,B.ejg,B.ejd,B.ejq,B.dpE,B.bG3,B.fsE,B.dD9,B.dDh,B.bMF,B.bMH,B.bMJ,B.bMu,B.bMw,B.bHg,B.clh,B.fJW,B.bGQ,B.bHc,B.bHb,B.dSN,B.cC7,B.dOB,B.dOz,B.dOt,B.ebz,B.dhS,B.dhT,B.ebS,B.cfW,B.dFM,B.dFH,B.ehq,B.dXo,B.dWZ,B.ddB,B.eHq,B.ezD,B.ezp,B.dXF,B.dXH,B.dXD,B.dF3])
u(C.ag,[B.Vn,B.VP,B.Ud,B.Uj,B.Nh,B.aH4,B.VO,B.W2,B.We,B.VL,B.W9,B.Uh,B.VF,B.VK,B.VI,B.UG,B.UW,B.U8,B.V9,B.Ui,B.aix,B.UX,B.ax8,B.UE,B.Vs,B.Vu,B.Wk,B.V3,B.Ue,B.UV,B.VG,B.VT,B.Wd,B.VE,B.Va,B.Wg,B.W1,B.Vb,B.VU,B.Uc,B.V7,B.VQ])
u(C.ah,[B.bjQ,B.aLX,B.aKZ,B.aL4,B.aCP,B.aMO,B.aLV,B.aM3,B.aM9,B.aLS,B.aM6,B.aL2,B.aLQ,B.aLR,B.aDU,B.bjk,B.aLg,B.aKV,B.aLo,B.bjb,B.axr,B.bwY,B.aJr,B.aLd,B.aLF,B.aLG,B.aMh,B.aLj,B.aL0,B.bjl,B.aDQ,B.aEb,B.bkz,B.aLO,B.aLp,B.bkD,B.aM2,B.aLr,B.aM_,B.aKY,B.aLm,B.aLZ])
u(C.ja,[B.e8F,B.e8G,B.e8S,B.e8T,B.e8O,B.e8N,B.e8P,B.e8L,B.e8Q,B.e8J,B.e8R,B.e8I,B.e8W,B.e8V,B.e8X,B.e8U,B.e8Y,B.e8Z,B.e90,B.ep4,B.ep6,B.ep7,B.eoO,B.eoN,B.eoL,B.eoU,B.eoV,B.eoR,B.eoW,B.eoQ,B.eoX,B.eoY,B.eoP,B.ep_,B.eoT,B.ep3,B.eoS,B.dFF,B.dFE,B.dFh,B.dFG,B.dFj,B.dFl,B.dFm,B.dFo,B.dFe,B.dFf,B.dFg,B.dFv,B.dFw,B.dFx,B.dFu,B.dFz,B.dFt,B.dFA,B.dFs,B.dFB,B.dFr,B.dFC,B.dFq,B.dFD,B.dFp,B.dHu,B.dHt,B.dHy,B.dHq,B.dHr,B.dHz,B.dHA,B.dHB,B.dHw,B.dHm,B.dHK,B.dHJ,B.dHM,B.dHN,B.dHO,B.dHD,B.dHP,B.cMv,B.dNF,B.dNE,B.dNG,B.fif,B.fig,B.fih,B.fis,B.fiu,B.fiv,B.fiw,B.fix,B.fiy,B.fiz,B.fiA,B.fii,B.fij,B.fik,B.fil,B.fim,B.fin,B.fio,B.fip,B.fiq,B.fir,B.fit,B.eZs,B.eZr,B.eZ9,B.eZ8,B.eZ4,B.eZ3,B.eZ5,B.eZ2,B.eZh,B.eZg,B.eZi,B.eZa,B.eZm,B.eZd,B.eZo,B.eZc,B.eZp,B.eZb,B.eo6,B.enW,B.eo5,B.enS,B.eo7,B.eo9,B.enT,B.enU,B.eou,B.eot,B.eok,B.eol,B.eom,B.eog,B.eoh,B.eof,B.eoi,B.eoe,B.eoj,B.eod,B.eob,B.dhu,B.eAa,B.ezN,B.ezM,B.ezW,B.eA4,B.ezV,B.eA5,B.ezU,B.eA6,B.ezT,B.ezS,B.eA8,B.ezR,B.ezZ,B.ezQ,B.eA_,B.ezP,B.eA0,B.ezO,B.eGL,B.eGK,B.eGO,B.eGJ,B.eGP,B.eGI,B.eGQ,B.eGH,B.eGR,B.eGG,B.eGS,B.eGF,B.ekq,B.ekm,B.ekl,B.ekk,B.ekw,B.ekj,B.ekx,B.eki,B.eky,B.ekh,B.ekz,B.ekA,B.ekB,B.ekg,B.ekt,B.eG1,B.eFR,B.eG3,B.eFY,B.eG4,B.eFX,B.eG5,B.eFW,B.eFV,B.eFU,B.eFQ,B.eFP,B.eFO,B.dGY,B.dGP,B.dGQ,B.dGT,B.dGU,B.dGX,B.egj,B.ega,B.egk,B.egm,B.egf,B.egn,B.ege,B.ego,B.egd,B.egc,B.egq,B.egb,B.egr,B.eg8,B.egs,B.eg7,B.egt,B.eg6,B.ek_,B.ek0,B.ek7,B.ek6,B.ek8,B.ek4,B.ekb,B.ek3,B.ekc,B.ek2,B.ekd,B.eke,B.ek1,B.ekf,B.ejt,B.eja,B.ejb,B.ejf,B.eje,B.ejp,B.ejn,B.ejh,B.ejr,B.eji,B.ejs,B.dPI,B.dPy,B.dPw,B.dPD,B.dPB,B.dPE,B.dPA,B.dPF,B.dPG,B.dSx,B.dSl,B.dSk,B.dSm,B.dSp,B.dSo,B.dSn,B.dSt,B.dSu,B.dSv,B.dSw,B.dDl,B.dDk,B.dDa,B.dDg,B.dDe,B.dDi,B.dDc,B.dDj,B.dDb,B.dWA,B.dWz,B.dWr,B.dWv,B.dWu,B.dWw,B.dWt,B.dWs,B.dHk,B.dHb,B.dHa,B.dHe,B.dH9,B.dHf,B.dH8,B.dHg,B.dH7,B.dHh,B.dH6,B.dH5,B.dH4,B.bMI,B.bMK,B.bMv,B.bMx,B.bGU,B.bGV,B.bGT,B.bGW,B.bGY,B.bGK,B.bGL,B.bGM,B.bGN,B.bGO,B.bGP,B.bHd,B.bGn,B.bH3,B.bH4,B.bH1,B.bH2,B.bH_,B.bH0,B.bH9,B.bGZ,B.bHa,B.bGo,B.bGI,B.bGu,B.bGv,B.bGt,B.bGw,B.bGs,B.bGz,B.bGA,B.bGB,B.bGC,B.bGr,B.bGD,B.bGq,B.bGE,B.bGp,B.dSG,B.dSR,B.dSS,B.dSE,B.dSD,B.dSC,B.dSL,B.dSJ,B.dSK,B.dSM,B.dSH,B.dSI,B.dSU,B.dSV,B.dSW,B.dSX,B.dSY,B.dOC,B.dOA,B.dOy,B.dOx,B.dOw,B.dOv,B.dOu,B.dOq,B.dOp,B.dOs,B.dOr,B.ebE,B.ebG,B.ebv,B.ebw,B.eby,B.ebA,B.ebB,B.ebC,B.ebD,B.ebX,B.ebZ,B.ebP,B.ebL,B.ebQ,B.ebR,B.ebK,B.ebO,B.ebN,B.ebM,B.ebW,B.fiI,B.fiJ,B.fiK,B.fiL,B.fiM,B.fiN,B.fiO,B.fiP,B.cfV,B.cfU,B.eLd,B.eL9,B.eL8,B.eLb,B.eLa,B.dUU,B.dUV,B.dUP,B.dUR,B.dUS,B.dUQ,B.dUT,B.dFN,B.dFK,B.dFJ,B.dFL,B.dFI,B.dSa,B.dS9,B.dS8,B.dS7,B.dSe,B.dS6,B.dS5,B.dSg,B.dS4,B.dSh,B.dS3,B.dSi,B.dSj,B.dS2,B.ehk,B.ehl,B.ehj,B.ehm,B.ehi,B.ehp,B.ehr,B.ehn,B.ehs,B.esd,B.ese,B.esb,B.esc,B.esa,B.esf,B.esg,B.esh,B.esi,B.eGz,B.eGB,B.eGy,B.eGx,B.eGD,B.eGw,B.eg_,B.eg0,B.efT,B.efS,B.efU,B.efR,B.efV,B.efQ,B.efW,B.efP,B.efO,B.efN,B.efM,B.csQ,B.csR,B.fSo,B.csM,B.csL,B.csS,B.csN,B.csO,B.cfR,B.dXB,B.dX4,B.dX2,B.dX3,B.dX_,B.dXn,B.dX5,B.dX6,B.dXp,B.dXa,B.dXt,B.dXm,B.dXu,B.dXl,B.dXv,B.dXk,B.dXj,B.dXi,B.dXh,B.dXz,B.dXg,B.dXA,B.dXf,B.dXq,B.dX9,B.dXr,B.dX8,B.dXs,B.dX7,B.dWY,B.dWX,B.ddA,B.fiB,B.fiC,B.fiD,B.fiE,B.fiF,B.fiG,B.fiH,B.eHo,B.eHp,B.eHn,B.eHm,B.ezr,B.ezC,B.ezE,B.ezy,B.ezF,B.ezx,B.ezw,B.ezI,B.ezv,B.ezJ,B.ezu,B.ezK,B.ezt,B.ezL,B.ezs,B.ezo,B.ezn,B.f0M,B.dXG,B.dXV,B.dXM,B.dXW,B.dXL,B.dXX,B.dXU,B.dY0,B.dXT,B.dXS,B.dY2,B.dXR,B.dXQ,B.dXP,B.dXO,B.dY7,B.dXN,B.dXY,B.dXK,B.dXZ,B.dXJ,B.dY_,B.dXI,B.esl,B.esm,B.esk,B.esn,B.esj,B.dF2,B.dEZ,B.dF6,B.dEY,B.dF7,B.dEX,B.dF8,B.dEW,B.dF9,B.dEV,B.dFa,B.dEU,B.dFb,B.dET,B.dFc,B.dES,B.dF4,B.dER,B.dW3,B.dW4,B.dW2,B.dW5,B.dW1,B.dW0,B.dW_,B.dVZ,B.dVY,B.dWa,B.dVX,B.dWb,B.dVW,B.dWc,B.dVV,B.erA,B.erB,B.erz,B.erC,B.ery,B.erD,B.erx,B.erE,B.erw,B.erv,B.eru,B.ert,B.ers])
t(B.bxc,B.aLX)
t(B.aE5,B.bxc)
u(C.mP,[B.bgP,B.baX,B.brV,B.b9D,B.bqz,B.bq0,B.bai,B.bq2,B.bu0,B.bgN,B.brQ,B.bl9,B.bsI,B.baD,B.bhH,B.bla,B.bio,B.bdI,B.b9I,B.bfb,B.aiz,B.b8Q,B.bv1,B.aex,B.bgS,B.bh6,B.bvd,B.bq1,B.bln,B.bfi,B.brO,B.bau,B.brm,B.b9T,B.bf8,B.bqC])
t(B.aL_,B.aKZ)
t(B.aCv,B.aL_)
t(B.bwW,B.aL4)
t(B.aCy,B.bwW)
u(C.md,[B.Kk,B.a0d,B.Jh])
u(C.au,[B.bqX,B.aeO,B.adG,B.PZ,B.brq,B.a8c,B.bd3,B.b6D,B.dB,B.eV,B.avz,B.fj,B.Ff])
t(B.aH5,B.aMO)
t(B.bgM,C.oR)
t(B.aE4,B.aLV)
t(B.bkq,B.aM3)
t(B.aEk,B.aM9)
t(B.bxb,B.aLS)
t(B.aDX,B.bxb)
t(B.bxj,B.aM6)
t(B.bkv,B.bxj)
t(B.bwV,B.aL2)
t(B.aCx,B.bwV)
t(B.bx9,B.aLQ)
t(B.bk4,B.bx9)
t(B.bxa,B.aLR)
t(B.aDW,B.bxa)
t(B.aD0,B.aLg)
t(B.biZ,B.aKV)
t(B.bjw,B.aLo)
t(B.axs,B.axr)
t(B.aiy,B.axs)
t(B.aD1,B.bwY)
t(B.b8R,B.aJr)
t(B.bji,B.aLd)
t(B.bx2,B.aLF)
t(B.bjS,B.bx2)
t(B.bx3,B.aLG)
t(B.aDG,B.bx3)
t(B.bxk,B.aMh)
t(B.aEx,B.bxk)
t(B.bwZ,B.aLj)
t(B.bjr,B.bwZ)
t(B.bwU,B.aL0)
t(B.bj3,B.bwU)
t(B.bx8,B.aLO)
t(B.bk2,B.bx8)
t(B.aLq,B.aLp)
t(B.aDc,B.aLq)
t(B.bxg,B.aM2)
t(B.bkp,B.bxg)
t(B.bx0,B.aLr)
t(B.aDd,B.bx0)
t(B.bxe,B.aM_)
t(B.bkm,B.bxe)
t(B.bwT,B.aKY)
t(B.bj2,B.bwT)
t(B.bx_,B.aLm)
t(B.bju,B.bx_)
t(B.bxd,B.aLZ)
t(B.bkl,B.bxd)
w(B.aLX,C.c9)
w(B.bxc,B.mF)
w(B.aKZ,C.c9)
w(B.aL_,B.mF)
w(B.aL4,C.c9)
w(B.bwW,B.mF)
w(B.aMO,C.eW)
w(B.aLV,C.c9)
w(B.aM3,C.c9)
w(B.aM9,C.c9)
w(B.aL2,C.c9)
w(B.bwV,B.mF)
w(B.aLS,C.c9)
w(B.bxb,B.mF)
w(B.aM6,C.c9)
w(B.bxj,B.mF)
w(B.aLQ,C.c9)
w(B.bx9,B.mF)
w(B.aLR,C.c9)
w(B.bxa,B.mF)
w(B.aLg,C.c9)
w(B.aKV,C.c9)
w(B.aLo,C.c9)
w(B.axr,C.c9)
w(B.axs,B.mF)
w(B.aJr,C.c9)
v(B.bwY,C.eB)
w(B.aLd,C.c9)
w(B.aLF,C.c9)
w(B.bx2,B.mF)
w(B.aLG,C.c9)
w(B.bx3,B.mF)
w(B.aL0,C.c9)
w(B.bwU,B.mF)
w(B.aLj,C.c9)
w(B.bwZ,B.mF)
w(B.aLO,C.c9)
w(B.bx8,B.mF)
w(B.aMh,C.c9)
w(B.bxk,B.mF)
w(B.aLp,C.c9)
w(B.aLq,B.mF)
w(B.aLr,C.c9)
w(B.bx0,B.mF)
w(B.aM_,C.c9)
w(B.bxe,B.mF)
w(B.aM2,C.c9)
w(B.bxg,B.mF)
w(B.aKY,C.c9)
w(B.bwT,B.mF)
w(B.aLm,C.c9)
w(B.bx_,B.mF)
w(B.aLZ,C.c9)
w(B.bxd,B.mF)})()
C.k1(b.typeUniverse,JSON.parse('{"Vn":{"ag":[],"t":[]},"bjQ":{"ah":["Vn"]},"VP":{"ag":[],"t":[]},"aE5":{"ah":["VP"]},"bgP":{"aB":[]},"Ud":{"ag":[],"t":[]},"aCv":{"ah":["Ud"]},"Uj":{"ag":[],"t":[]},"aCy":{"ah":["Uj"]},"baX":{"aB":[]},"aeO":{"au":[],"t":[]},"adG":{"au":[],"t":[]},"aH4":{"ag":[],"t":[]},"Nh":{"ag":[],"t":[]},"aCP":{"ah":["Nh"]},"bqX":{"au":[],"t":[]},"PZ":{"au":[],"t":[]},"brV":{"aB":[]},"brq":{"au":[],"t":[]},"b9D":{"aB":[]},"aH5":{"ah":["aH4"]},"bqz":{"aB":[]},"bq0":{"aB":[]},"bai":{"aB":[]},"bq2":{"aB":[]},"bu0":{"aB":[]},"VO":{"ag":[],"t":[]},"bgM":{"aB":[]},"aE4":{"ah":["VO"]},"bgN":{"aB":[]},"W2":{"ag":[],"t":[]},"We":{"ag":[],"t":[]},"bkq":{"ah":["W2"]},"brQ":{"aB":[]},"aEk":{"ah":["We"]},"VL":{"ag":[],"t":[]},"W9":{"ag":[],"t":[]},"Uh":{"ag":[],"t":[]},"aDX":{"ah":["VL"]},"bl9":{"aB":[]},"bkv":{"ah":["W9"]},"bsI":{"aB":[]},"aCx":{"ah":["Uh"]},"baD":{"aB":[]},"VF":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"bk4":{"ah":["VF"]},"bhH":{"aB":[]},"aDW":{"ah":["VK"]},"bla":{"aB":[]},"VI":{"ag":[],"t":[]},"UG":{"ag":[],"t":[]},"UW":{"ag":[],"t":[]},"aDU":{"ah":["VI"]},"bio":{"aB":[]},"bjk":{"ah":["UG"]},"aD0":{"ah":["UW"]},"bdI":{"aB":[]},"U8":{"ag":[],"t":[]},"V9":{"ag":[],"t":[]},"Ui":{"ag":[],"t":[]},"biZ":{"ah":["U8"]},"b9I":{"aB":[]},"bjw":{"ah":["V9"]},"bfb":{"aB":[]},"bjb":{"ah":["Ui"]},"aiz":{"aB":[]},"aix":{"ag":[],"t":[]},"aiy":{"ah":["aix"]},"UX":{"ag":[],"t":[]},"ax8":{"ag":[],"t":[]},"aD1":{"ah":["UX"],"eB":[]},"b8R":{"ah":["ax8"]},"b8Q":{"aB":[]},"UE":{"ag":[],"t":[]},"bji":{"ah":["UE"]},"bv1":{"aB":[]},"aex":{"aB":[]},"Vs":{"ag":[],"t":[]},"Vu":{"ag":[],"t":[]},"bjS":{"ah":["Vs"]},"bgS":{"aB":[]},"aDG":{"ah":["Vu"]},"bh6":{"aB":[]},"a8c":{"au":[],"t":[]},"Wk":{"ag":[],"t":[]},"V3":{"ag":[],"t":[]},"Ue":{"ag":[],"t":[]},"UV":{"ag":[],"t":[]},"VG":{"ag":[],"t":[]},"VT":{"ag":[],"t":[]},"Wd":{"ag":[],"t":[]},"VE":{"ag":[],"t":[]},"aEx":{"ah":["Wk"]},"bvd":{"aB":[]},"bjr":{"ah":["V3"]},"bq1":{"aB":[]},"bj3":{"ah":["Ue"]},"bjl":{"ah":["UV"]},"bln":{"aB":[]},"aDQ":{"ah":["VG"]},"aEb":{"ah":["VT"]},"bkz":{"ah":["Wd"]},"bk2":{"ah":["VE"]},"bd3":{"au":[],"t":[]},"b6D":{"au":[],"t":[]},"dB":{"au":[],"t":[]},"eV":{"au":[],"t":[]},"avz":{"au":[],"t":[]},"fj":{"au":[],"t":[]},"Ff":{"au":[],"t":[]},"Va":{"ag":[],"t":[]},"aDc":{"ah":["Va"]},"bfi":{"aB":[]},"Wg":{"ag":[],"t":[]},"bkD":{"ah":["Wg"]},"W1":{"ag":[],"t":[]},"Vb":{"ag":[],"t":[]},"VU":{"ag":[],"t":[]},"bkp":{"ah":["W1"]},"brO":{"aB":[]},"aDd":{"ah":["Vb"]},"bau":{"aB":[]},"bkm":{"ah":["VU"]},"brm":{"aB":[]},"Uc":{"ag":[],"t":[]},"V7":{"ag":[],"t":[]},"VQ":{"ag":[],"t":[]},"bj2":{"ah":["Uc"]},"b9T":{"aB":[]},"bju":{"ah":["V7"]},"bf8":{"aB":[]},"bkl":{"ah":["VQ"]},"bqC":{"aB":[]}}'))
C.Kl(b.typeUniverse,JSON.parse('{"mF":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lZ<w?>"),e8:w("d5"),G:w("w"),l:w("bk<m,m>"),J:w("bk<m,L>"),I:w("bk<m,G>"),R:w("dD<m>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a2V>"),gh:w("O<aRK>"),h:w("O<a2Z>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<T>"),dh:w("O<HC>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<HC>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<m>>"),b:w("O<ai<L>>"),fA:w("O<ai<G?>>"),D:w("O<a5<m,aD>>"),g:w("O<v>"),bz:w("O<ty>"),ds:w("O<a8z>"),v:w("O<hv>"),U:w("O<+(v,L)>"),ev:w("O<+(v,G)>"),K:w("O<+(m,m)>"),fT:w("O<+(L,t)>"),E:w("O<+(G,m)>"),u:w("O<+(G,G)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,L,L,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,L,L,a5<m,L>)>"),_:w("O<uR>"),q:w("O<cR>"),fQ:w("O<aac>"),s:w("O<m>"),cF:w("O<as>"),X:w("O<wh>"),F:w("O<aaZ>"),p:w("O<t>"),bL:w("O<abj>"),fH:w("O<ln>"),aq:w("O<b9w>"),a_:w("O<abx>"),cS:w("O<abE>"),cB:w("O<no>"),ba:w("O<abO>"),d9:w("O<Py>"),bi:w("O<ac6>"),eW:w("O<Co>"),fY:w("O<Zb>"),aX:w("O<FL>"),ea:w("O<acW>"),gB:w("O<adr>"),ed:w("O<PQ>"),g4:w("O<blm>"),aS:w("O<a_I>"),ac:w("O<adK>"),cd:w("O<Cy>"),fr:w("O<aeE>"),e4:w("O<a0q>"),r:w("O<aeJ>"),au:w("O<aHW>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<ty?>"),d4:w("O<m?>"),bN:w("O<G?>"),gJ:w("cs<aiy>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a5<m,@>"),f:w("a5<@,@>"),bd:w("M<ed,m>"),dv:w("M<m,m>"),fR:w("M<+(L,t),t>"),m:w("iE"),gA:w("zd"),gD:w("vS"),P:w("cr"),C:w("aD"),W:w("ty"),dV:w("ed"),g7:w("C5"),N:w("m"),bO:w("as"),k:w("kl"),Y:w("bq<L>"),cL:w("ab_"),gj:w("cx<m>"),aC:w("cx<G?>"),dg:w("eb<qM>"),e3:w("b9W"),a2:w("Ck"),f3:w("qM"),es:w("FP"),gV:w("n2"),y:w("R"),i:w("L"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a5<@,@>?"),cK:w("aD?"),az:w("q0?"),T:w("m?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXR=new C.dc(0,0.85)
D.fE8=new C.y("Tap once to start the chain",null,K.U2,null,null,null,null,null,null,null,null,null)
D.aXp=new C.bI(D.aXR,null,null,D.fE8,null)
D.aXH=new C.dc(0,0.1)
D.aYL=new B.aRU(0,0,0)
D.Kt=new B.aRU(0,0.5,0)
D.aZj=new C.az(A.b2,1,A.q,-1)
D.b_M=new C.aY(0,1/0,0,290)
D.b_T=new C.aY(16,1/0,16,1/0)
D.b16=new C.o(A.bc,null,null,null,null,null,A.a5)
D.f4Y=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGw=new C.y("\u26a1",null,D.f4Y,null,null,null,null,null,null,null,null,null)
D.b5y=new C.cp(A.A,null,null,D.fGw,null)
D.aR2=new C.H(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwk=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aR2,null,A.L,null,null,null,null,null,null,null)
D.ebN=new C.D(A.o3,D.fwk,null)
D.b5H=new C.cp(A.A,null,null,D.ebN,null)
D.fA8=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kJ,null,A.L,null,null,null,null,null,null,null)
D.ebR=new C.D(A.o3,D.fA8,null)
D.b61=new C.cp(A.A,null,null,D.ebR,null)
D.ffT=new C.H(!0,A.jl,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEW=new C.y("Draw anywhere",null,D.ffT,null,null,null,null,null,null,null,null,null)
D.b65=new C.cp(A.A,null,null,D.fEW,null)
D.fmw=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aR2,null,A.L,null,null,null,null,null,null,null)
D.ecy=new C.D(A.FI,D.fmw,null)
D.b6o=new C.cp(A.A,null,null,D.ecy,null)
D.acz=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b91=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b9N=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wj=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b9T=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b9Y=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.ba2=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Wm=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bb8=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bbd=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbA=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bcJ=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adW=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdc=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AL=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.be1=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aep=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.beF=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.beM=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aeA=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.WZ=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfg=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aeJ=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.aeW=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.X9=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bh0=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bh3=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bh7=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhg=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afo=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bhE=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.F0=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.biM=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.biU=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.biY=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bj8=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjc=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjj=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vo=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.ag9=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bkr=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.blb=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.blE=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bm3=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.agA=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bqG=new C.ba(11e6)
D.brH=new C.Q(0,0,8,6)
D.ahw=new C.Q(0,0,9,0)
D.bse=new C.Q(10,0,10,4)
D.bsj=new C.Q(10,10,10,6)
D.bsr=new C.Q(10,34,10,26)
D.bsz=new C.Q(10,6,10,2)
D.YO=new C.Q(10,6,10,4)
D.bsB=new C.Q(10,8,0,10)
D.btb=new C.Q(12,8,8,8)
D.btg=new C.Q(14,0,14,22)
D.bti=new C.Q(14,0,14,30)
D.ahX=new C.Q(14,0,14,6)
D.ai3=new C.Q(14,10,8,12)
D.btP=new C.Q(14,8,14,6)
D.bug=new C.Q(16,4,16,28)
D.buq=new C.Q(16,8,16,12)
D.bwv=new C.Q(26,12,26,58)
D.bxj=new C.Q(4,4,6,2)
D.bxl=new C.Q(4,4,8,2)
D.bxV=new C.Q(8,14,8,12)
D.by1=new C.Q(8,40,8,30)
D.by5=new C.Q(8,6,16,0)
D.by6=new C.Q(8,6,8,8)
D.byr=new C.Q(0,0,1.5,0)
D.aYx=new C.H1(26,"saturation")
D.byJ=new C.yV(A.cX,D.aYx,null,A.acx)
D.flC=new C.y("REACTION LAB",null,Y.aRD,null,null,null,null,A.a2,null,1,null,null)
D.byP=new C.bB(1,A.bh,D.flC,null)
D.fcK=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foN=new C.y("CORE PROTOCOL",null,D.fcK,null,null,null,null,null,null,null,null,null)
D.bz2=new C.bB(1,A.bh,D.foN,null)
D.fpv=new C.y("\ud83d\udce2 NGMY Ads",null,A.qy,null,null,null,null,A.eF,null,1,null,null)
D.bzL=new C.bB(1,A.bh,D.fpv,null)
D.fkl=new C.y("Wire selected",null,A.hu,null,null,null,null,null,null,null,null,null)
D.bA_=new C.bB(1,A.bh,D.fkl,null)
D.ale=new C.a0(62712,"MaterialIcons",!1)
D.bFq=new C.a0(62878,"MaterialIcons",!1)
D.a08=new C.a0(62908,"MaterialIcons",!1)
D.bFt=new C.a0(62918,"MaterialIcons",!1)
D.bFu=new C.a0(62931,"MaterialIcons",!1)
D.bFx=new C.a0(62951,"MaterialIcons",!1)
D.bFO=new C.a0(63064,"MaterialIcons",!1)
D.bFQ=new C.a0(63070,"MaterialIcons",!1)
D.yh=new C.a0(63128,"MaterialIcons",!1)
D.Gs=new C.a0(63726,"MaterialIcons",!1)
D.bH8=new C.a0(983122,"MaterialIcons",!1)
D.bHn=new C.a0(983247,"MaterialIcons",!1)
D.bHz=new C.a0(983415,"MaterialIcons",!1)
D.bHA=new C.a0(983417,"MaterialIcons",!1)
D.bHB=new C.a0(983442,"MaterialIcons",!1)
D.bHC=new C.a0(983443,"MaterialIcons",!1)
D.amy=new C.a0(983467,"MaterialIcons",!1)
D.bHI=new C.a0(983501,"MaterialIcons",!1)
D.bHT=new C.a0(983616,"MaterialIcons",!1)
D.bHU=new C.a0(983624,"MaterialIcons",!1)
D.bI6=new C.a0(983776,"MaterialIcons",!1)
D.bIn=new C.a0(984561,"MaterialIcons",!1)
D.bIY=new C.ae(A.rk,24,A.aM,null,null,null)
D.bJI=new C.ae(A.O2,null,A.ad,null,null,null)
D.bKf=new C.ae(A.mA,21,A.ad,null,null,null)
D.bH7=new C.a0(983117,"MaterialIcons",!1)
D.bLC=new C.ae(D.bH7,28,A.c,null,null,null)
D.bLS=new C.ae(A.jr,18,null,null,null,null)
D.bNE=new C.ae(A.e7,21,A.c9,null,null,null)
D.bNT=new C.ae(A.mB,null,A.ad,null,null,null)
D.bO2=new C.ae(A.a0Y,21,A.ad,null,null,null)
D.bOS=new C.ae(A.eE,17,A.ad,null,null,null)
D.anV=new C.ae(A.eE,19,null,null,null,null)
D.mF=new C.ae(A.vT,21,A.ad,null,null,null)
D.bQn=new C.ae(A.Nv,null,A.ad,null,null,null)
D.bRw=new C.ae(A.jr,21,A.ad,null,null,null)
D.bSn=new C.ae(A.fg,20,A.aA,null,null,null)
D.bT2=new C.ae(A.dX,null,A.aM,null,null,null)
D.bTn=new C.ae(A.k6,null,A.aA,null,null,null)
D.dfx=w([A.dc,A.d_,A.dc],x.O)
D.bWn=new C.a8(A.a3,A.a8,A.x,D.dfx,null,null)
D.cTT=w([A.bN,A.bn],x.O)
D.bWv=new C.a8(A.b0,A.b4,A.x,D.cTT,null,null)
D.bWH=new C.a8(A.b0,A.b4,A.x,A.ay9,null,null)
D.cUf=w([A.fW,A.f9],x.O)
D.bWQ=new C.a8(A.b0,A.b4,A.x,D.cUf,null,null)
D.aoW=new C.a8(A.b0,A.b4,A.x,M.a2E,null,null)
D.cRE=w([A.oD,A.ic],x.O)
D.bXt=new C.a8(A.b0,A.b4,A.x,D.cRE,null,null)
D.cTB=w([A.ec,A.aw],x.O)
D.ap2=new C.a8(A.b0,A.b4,A.x,D.cTB,null,null)
D.d9E=w([A.dy,A.iY,A.bn],x.O)
D.bXM=new C.a8(A.a3,A.a8,A.x,D.d9E,null,null)
D.d9K=w([A.j0,A.ct],x.O)
D.bY5=new C.a8(A.b0,A.b4,A.x,D.d9K,null,null)
D.cqk=w([A.bN,A.dy],x.O)
D.bYe=new C.a8(A.a3,A.a8,A.x,D.cqk,null,null)
D.ayR=w([A.ec,L.mm],x.O)
D.bYl=new C.a8(A.b0,A.b4,A.x,D.ayR,null,null)
D.bYC=new C.a8(A.b0,A.b4,A.x,I.app,null,null)
D.bfn=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b8o=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cOZ=w([D.bfn,D.b8o],x.O)
D.bYP=new C.a8(A.b0,A.b4,A.x,D.cOZ,null,null)
D.bZp=new C.a8(A.az,A.aC,A.x,A.a2B,null,null)
D.bjS=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dlb=w([D.bjS,A.L_],x.O)
D.bZw=new C.a8(A.b0,A.b4,A.x,D.dlb,null,null)
D.d1M=w([A.aw,A.w],x.O)
D.bZB=new C.a8(A.b0,A.b4,A.x,D.d1M,null,null)
D.bZE=new C.a8(A.b0,A.b4,A.x,T.ayd,null,null)
D.bjg=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bk1=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cD3=w([A.LN,D.bjg,D.bk1],x.O)
D.bZO=new C.a8(A.b0,A.b4,A.x,D.cD3,null,null)
D.cqE=w([A.d5,A.fA],x.O)
D.c_3=new C.a8(A.b0,A.b4,A.x,D.cqE,null,null)
D.c_9=new C.a8(A.az,A.aC,A.x,A.a3p,null,null)
D.apr=w([0,2,4,6,7,9,11],x.t)
D.c_L=w([0,4,7],x.t)
D.apy=w([0,4,7,12],x.t)
D.c_M=w([0,4,7,4],x.t)
D.axU=w([A.h4,A.pN],x.O)
D.axp=w([A.hm,A.cT],x.O)
D.avP=w([A.bu,A.dR],x.O)
D.cLA=w([A.aM,A.d5],x.O)
D.cS0=w([A.c9,A.eK],x.O)
D.daX=w([A.bY,A.lJ],x.O)
D.avg=w([A.cs,A.k_],x.O)
D.cQy=w([A.bK,A.aJ],x.O)
D.c05=w([D.axU,D.axp,A.a2J,D.avP,D.cLA,D.cS0,A.awX,D.daX,D.avg,D.cQy],x.Q)
D.c4K=w([120,220,380],x.t)
D.c8u=w([12,16,19,24],x.t)
D.c8E=w([1400,800,450,2400],x.t)
D.ccU=w([0,0.6,1],x.n)
D.ch3=w([250,450,900,1500],x.t)
D.b9d=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bjC=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bhG=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bmU=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bgR=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.aux=w([D.b9d,D.bjC,D.bhG,D.bmU,D.bgR],x.O)
D.eGi=new C.z("type","Typewriter")
D.eyP=new C.z("bounce","Bounce")
D.eH4=new C.z("wave","Wave")
D.eIa=new C.z("zoom","Zoom")
D.cxO=w([D.eGi,D.eyP,D.eH4,A.a6z,I.aMQ,D.eIa,I.aMU],x.K)
D.cy1=w([50,25,75],x.t)
D.cDA=w([0,5,10,15,18,20,25],x.t)
D.eAt=new C.z("fish","Fish")
D.eAv=new C.z("fly","Fireflies")
D.eyN=new C.z("bird","Birds")
D.cHM=w([D.eAt,D.eAv,D.eyN],x.K)
D.cLQ=w([900,500,250,1600],x.t)
D.cPl=w([0.78,1],x.n)
D.avQ=w([0,2,4,7,9,12,14,16],x.t)
D.cPU=w([A.bu,A.bD,A.b8,A.bu],x.O)
D.avV=w(["A","T","C","G"],x.s)
D.cPV=w(["A","U","C","G"],x.s)
D.a2y=w([A.av,A.bH,A.bc,A.aN,A.nX],x.O)
D.cRj=w([A.aw,A.av,A.cs,A.bH,A.bc,A.cA,A.cb,A.bD,A.L_],x.O)
D.a2C=w([0.04,0.17,0.3],x.n)
D.cRX=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.He=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eQb=new B.uR("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eQh=new B.uR("Medium engine","A good all-rounder.",0.3,0.9)
D.eQg=new B.uR("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hf=w([D.eQb,D.eQh,D.eQg],x._)
D.eow=new C.z(6,"Easy")
D.epd=new C.z(8,"Medium")
D.eku=new C.z(10,"Hard")
D.cSN=w([D.eow,D.epd,D.eku],x.E)
D.awe=w([0.55,0.78,1],x.n)
D.cUk=w([0.93,0.975,1],x.n)
D.awp=w([A.c,A.fJ,A.oF,A.aw],x.O)
D.fJv=new B.y3("Moon",1737,4291941851)
D.fJs=new B.y3("Earth",6371,4281908728)
D.fJw=new B.y3("Neptune",24622,4284524026)
D.fJx=new B.y3("Saturn",58232,4294829706)
D.fJt=new B.y3("Jupiter",69911,4294677052)
D.fJy=new B.y3("Sun",696340,4294688548)
D.fJz=new B.y3("Sirius A",119e4,4290763774)
D.fJq=new B.y3("Arcturus",179e5,4294818420)
D.fJr=new B.y3("Betelgeuse",531e6,4294472049)
D.fJu=new B.y3("UY Scuti",667e6,4293870660)
D.Qd=w([D.fJv,D.fJs,D.fJw,D.fJx,D.fJt,D.fJy,D.fJz,D.fJq,D.fJr,D.fJu],C.ax("O<y3>"))
D.eLI=new C.bl("glow","Glow",A.a0a)
D.eJh=new C.bl("rainbow","Rainbow",A.nm)
D.eJE=new C.bl("stars","Stars",A.i6)
D.eJ1=new C.bl("sparks","Sparks",A.dX)
D.eKZ=new C.bl("fire","Fire",A.vU)
D.cWb=w([D.eLI,D.eJh,D.eJE,D.eJ1,D.eKZ],x.c)
D.awt=w([A.bc,A.av,A.bH,A.d_],x.O)
D.cXa=w([0.2,1],x.n)
D.eQ8=new B.uR("Radar","Shows your height above the ground.",0.1,0)
D.eQ9=new B.uR("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eQ6=new B.uR("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awB=w([D.eQ8,D.eQ9,D.eQ6],x._)
D.eKe=new C.bl("attract","Attract",A.yy)
D.eK0=new C.bl("scare","Scare",A.ri)
D.eJa=new C.bl("food","Food",A.ub)
D.bHd=new C.a0(983158,"MaterialIcons",!1)
D.eKx=new C.bl("hunt","Hunt",D.bHd)
D.cXN=w([D.eKe,D.eK0,D.eJa,D.eKx],x.c)
D.cYd=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYs=w([47,100,220,470,1000],x.n)
D.awT=w([0,2,4,7,9],x.t)
D.Ii={volts:0}
D.a4n=new C.bk(D.Ii,[3],x.J)
D.IF=new C.e9(["b","battery",0.2,0.3,D.a4n])
D.e73={on:0}
D.dq3=new C.bk(D.e73,[1],x.J)
D.Dm=new C.e9(["s","switch",0.5,0.3,D.dq3])
D.eOh=new C.e9(["l","bulb",0.8,0.3,A.j6])
D.cU_=w([D.IF,D.Dm,D.eOh],x.d)
D.Dl=new C.cA(["b",0,"s",0])
D.eNi=new C.cA(["s",1,"l",0])
D.aMY=new C.cA(["l",1,"b",1])
D.d9Q=w([D.Dl,D.eNi,D.aMY],x.o)
D.cTt=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ejG=new B.mC("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cU_,D.d9Q,D.cTt)
D.aH2={ohms:0}
D.aEC=new C.bk(D.aH2,[220],x.J)
D.eNL=new C.e9(["r","resistor",0.5,0.3,D.aEC])
D.eOw=new C.e9(["d","led",0.8,0.3,A.j6])
D.dcY=w([D.IF,D.eNL,D.eOw],x.d)
D.eME=new C.cA(["b",0,"r",0])
D.eNc=new C.cA(["r",1,"d",0])
D.eMK=new C.cA(["d",1,"b",1])
D.dlG=w([D.eME,D.eNc,D.eMK],x.o)
D.ddn=w(["led","diode","indicator"],x.s)
D.ejN=new B.mC("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dcY,D.dlG,D.ddn)
D.a5E={level:0}
D.dpp=new C.bk(D.a5E,[0.2],x.J)
D.eNR=new C.e9(["p","pot",0.5,0.3,D.dpp])
D.eNT=new C.e9(["m","motor",0.8,0.3,A.j6])
D.cUi=w([D.IF,D.eNR,D.eNT],x.d)
D.eMD=new C.cA(["b",0,"p",0])
D.eN8=new C.cA(["p",1,"m",0])
D.eN4=new C.cA(["m",1,"b",1])
D.dht=w([D.eMD,D.eN8,D.eN4],x.o)
D.d9x=w(["fan","motor","spin","dimmer"],x.s)
D.ejE=new B.mC("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cUi,D.dht,D.d9x)
D.a4j=new C.bk(D.a5E,[0.9],x.J)
D.aN4=new C.e9(["s","solar",0.25,0.3,D.a4j])
D.aN3=new C.e9(["l","bulb",0.75,0.3,A.j6])
D.cWS=w([D.aN4,D.aN3],x.d)
D.eNf=new C.cA(["s",0,"l",0])
D.eN3=new C.cA(["l",1,"s",1])
D.cV2=w([D.eNf,D.eN3],x.o)
D.di3=w(["solar","sun","without battery","no battery","free"],x.s)
D.ejH=new B.mC("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cWS,D.cV2,D.di3)
D.eOz=new C.e9(["c","crank",0.25,0.3,D.a4j])
D.d7U=w([D.eOz,D.aN3],x.d)
D.eMH=new C.cA(["c",0,"l",0])
D.eN2=new C.cA(["l",1,"c",1])
D.d8s=w([D.eMH,D.eN2],x.o)
D.d82=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ejD=new B.mC("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d7U,D.d8s,D.d82)
D.dpo=new C.bk(D.a5E,[0.7],x.J)
D.eNW=new C.e9(["t","turbine",0.25,0.3,D.dpo])
D.eNJ=new C.e9(["m","motor",0.75,0.3,A.j6])
D.d2q=w([D.eNW,D.eNJ],x.d)
D.eNq=new C.cA(["t",0,"m",0])
D.eN5=new C.cA(["m",1,"t",1])
D.d1q=w([D.eNq,D.eN5],x.o)
D.d6K=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ejA=new B.mC("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2q,D.d1q,D.d6K)
D.aEz=new C.bk(D.Ii,[9],x.J)
D.a6G=new C.e9(["b","battery",0.2,0.3,D.aEz])
D.aN2=new C.e9(["r","radio",0.8,0.3,A.j6])
D.diF=w([D.a6G,D.Dm,D.aN2],x.d)
D.eNk=new C.cA(["s",1,"r",0])
D.aMZ=new C.cA(["r",1,"b",1])
D.c_u=w([D.Dl,D.eNk,D.aMZ],x.o)
D.dhf=w(["radio","music","listen"],x.s)
D.ejM=new B.mC("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.diF,D.c_u,D.dhf)
D.dqv=new C.bk(D.Ii,[12],x.J)
D.aN1=new C.e9(["b","battery",0.2,0.3,D.dqv])
D.eOi=new C.e9(["t","tv",0.8,0.3,A.j6])
D.cU1=w([D.aN1,D.Dm,D.eOi],x.d)
D.eNl=new C.cA(["s",1,"t",0])
D.aN_=new C.cA(["t",1,"b",1])
D.db_=w([D.Dl,D.eNl,D.aN_],x.o)
D.diC=w(["tv","television","screen","watch"],x.s)
D.ejx=new B.mC("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cU1,D.db_,D.diC)
D.eO8=new C.e9(["z","buzzer",0.8,0.3,A.j6])
D.cAl=w([D.IF,D.Dm,D.eO8],x.d)
D.eNm=new C.cA(["s",1,"z",0])
D.eNE=new C.cA(["z",1,"b",1])
D.cP9=w([D.Dl,D.eNm,D.eNE],x.o)
D.dfD=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ejJ=new B.mC("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAl,D.cP9,D.dfD)
D.eNS=new C.e9(["h","heater",0.8,0.3,A.j6])
D.d5r=w([D.a6G,D.Dm,D.eNS],x.d)
D.eNh=new C.cA(["s",1,"h",0])
D.eMS=new C.cA(["h",1,"b",1])
D.cPQ=w([D.Dl,D.eNh,D.eMS],x.o)
D.ckk=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ejy=new B.mC("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5r,D.cPQ,D.ckk)
D.eOk=new C.e9(["s","solar",0.2,0.25,D.a4j])
D.dqC=new C.bk(D.aH2,[100],x.J)
D.eOn=new C.e9(["r","resistor",0.55,0.25,D.dqC])
D.eOu=new C.e9(["c","capacitor",0.85,0.25,A.j6])
D.eNO=new C.e9(["q","resistor",0.55,0.6,D.aEC])
D.eOl=new C.e9(["d","led",0.85,0.6,A.j6])
D.dax=w([D.eOk,D.eOn,D.eOu,D.eNO,D.eOl],x.d)
D.eNg=new C.cA(["s",0,"r",0])
D.eNb=new C.cA(["r",1,"c",0])
D.eMJ=new C.cA(["c",1,"s",1])
D.eMI=new C.cA(["c",0,"q",0])
D.eNa=new C.cA(["q",1,"d",0])
D.eML=new C.cA(["d",1,"c",1])
D.d_m=w([D.eNg,D.eNb,D.eMJ,D.eMI,D.eNa,D.eML],x.o)
D.d7g=w(["capacitor","store","charge","flash"],x.s)
D.ejL=new B.mC("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dax,D.d_m,D.d7g)
D.eNZ=new C.e9(["b","battery",0.15,0.3,D.a4n])
D.eOA=new C.e9(["l1","bulb",0.5,0.3,A.j6])
D.eO5=new C.e9(["l2","bulb",0.85,0.3,A.j6])
D.cSf=w([D.eNZ,D.eOA,D.eO5],x.d)
D.eMC=new C.cA(["b",0,"l1",0])
D.eN_=new C.cA(["l1",1,"l2",0])
D.eN0=new C.cA(["l2",1,"b",1])
D.d36=w([D.eMC,D.eN_,D.eN0],x.o)
D.dio=w(["series","two bulbs","dim"],x.s)
D.ejB=new B.mC("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cSf,D.d36,D.dio)
D.e7m={volts:0,charge:1}
D.dqH=new C.bk(D.e7m,[1.5,0],x.J)
D.eOs=new C.e9(["b","battery",0.75,0.3,D.dqH])
D.cRF=w([D.aN4,D.eOs],x.d)
D.eNe=new C.cA(["s",0,"b",0])
D.eMG=new C.cA(["b",1,"s",1])
D.d_E=w([D.eNe,D.eMG],x.o)
D.d7p=w(["charge","rechargeable","flat","recharge"],x.s)
D.ejz=new B.mC("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cRF,D.d_E,D.d7p)
D.dqu=new C.bk(D.Ii,[4.5],x.J)
D.eNU=new C.e9(["b","battery",0.2,0.3,D.dqu])
D.aN0=new C.e9(["p","phone",0.8,0.3,A.j6])
D.d2g=w([D.eNU,D.Dm,D.aN0],x.d)
D.eNj=new C.cA(["s",1,"p",0])
D.a6F=new C.cA(["p",1,"b",1])
D.deC=w([D.Dl,D.eNj,D.a6F],x.o)
D.dg3=w(["phone","charger","usb","mobile"],x.s)
D.ejF=new B.mC("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d2g,D.deC,D.dg3)
D.eNG=new C.e9(["f","fan",0.8,0.3,A.j6])
D.cct=w([D.IF,D.eNG],x.d)
D.eMB=new C.cA(["b",0,"f",0])
D.eMQ=new C.cA(["f",1,"b",1])
D.cQl=w([D.eMB,D.eMQ],x.o)
D.d9w=w(["fan","cool","air","wind"],x.s)
D.ejO=new B.mC("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cct,D.cQl,D.d9w)
D.eOc=new C.e9(["b","battery",0.15,0.2,D.a4n])
D.eNH=new C.e9(["a","ammeter",0.5,0.2,A.j6])
D.eNF=new C.e9(["l","bulb",0.85,0.2,A.j6])
D.eOe=new C.e9(["v","voltmeter",0.5,0.6,A.j6])
D.d7I=w([D.eOc,D.eNH,D.eNF,D.eOe],x.d)
D.eMz=new C.cA(["b",0,"a",0])
D.eMy=new C.cA(["a",1,"l",0])
D.eNs=new C.cA(["v",0,"l",0])
D.eNt=new C.cA(["v",1,"l",1])
D.d_v=w([D.eMz,D.eMy,D.aMY,D.eNs,D.eNt],x.o)
D.dlF=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ejK=new B.mC("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d7I,D.d_v,D.dlF)
D.eOD=new C.e9(["b","battery",0.15,0.2,D.aEz])
D.eNY=new C.e9(["t","tv",0.55,0.2,A.j6])
D.aEA=new C.bk(D.Ii,[5],x.J)
D.eNM=new C.e9(["c","buck",0.4,0.5,D.aEA])
D.eO_=new C.e9(["p","phone",0.8,0.5,A.j6])
D.cYf=w([D.eOD,D.eNY,D.eNM,D.eO_],x.d)
D.eMF=new C.cA(["b",0,"t",0])
D.aMW=new C.cA(["b",0,"c",0])
D.aMX=new C.cA(["c",1,"p",0])
D.d2d=w([D.eMF,D.aN_,D.aMW,D.aMX,D.a6F],x.o)
D.cWs=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ejC=new B.mC("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cYf,D.d2d,D.cWs)
D.eNN=new C.e9(["c","buck",0.5,0.3,D.aEA])
D.cPH=w([D.aN1,D.eNN,D.aN0],x.d)
D.cUr=w([D.aMW,D.aMX,D.a6F],x.o)
D.cnL=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ejw=new B.mC("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cPH,D.cUr,D.cnL)
D.eO3=new C.e9(["d","diode",0.5,0.3,A.j6])
D.d3j=w([D.a6G,D.eO3,D.aN2],x.d)
D.eMA=new C.cA(["b",0,"d",0])
D.eMM=new C.cA(["d",1,"r",0])
D.cCT=w([D.eMA,D.eMM,D.aMZ],x.o)
D.cW8=w(["diode","protect","backwards","one way"],x.s)
D.ejI=new B.mC("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d3j,D.cCT,D.cW8)
D.Qg=w([D.ejG,D.ejN,D.ejE,D.ejH,D.ejD,D.ejA,D.ejM,D.ejx,D.ejJ,D.ejy,D.ejL,D.ejB,D.ejz,D.ejF,D.ejO,D.ejK,D.ejC,D.ejw,D.ejI],C.ax("O<mC>"))
D.hbb=new B.G3("Moon",1.62,A.dy,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hb9=new B.G3("Mars",3.71,A.av,"Mars has about 38 percent of Earth's gravity.")
D.hbc=new B.G3("Mercury",3.7,A.jZ,"Mercury is small, so its gravity is like Mars.")
D.hb6=new B.G3("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.hb8=new B.G3("Earth",9.81,A.aN,"On Earth gravity is strong, and the air also slows you down.")
D.hba=new B.G3("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.hb7=new B.G3("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rs=w([D.hbb,D.hb9,D.hbc,D.hb6,D.hb8,D.hba,D.hb7],C.ax("O<G3>"))
D.d_k=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2S=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d02=w([0.2,0.5,0.8],x.n)
D.bFJ=new C.a0(63040,"MaterialIcons",!1)
D.eK4=new C.bl("peg","Peg",D.bFJ)
D.eJe=new C.bl("bar","Bar",R.BZ)
D.eJH=new C.bl("erase","Erase",A.Nz)
D.d0f=w([D.eK4,D.eJe,D.eJH],x.c)
D.eTl=new C.cR(A.bk,A.J,4)
D.d0r=w([D.eTl],x.q)
D.ax8=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWw=new B.Kk(0,"accordion")
D.cQE=w([A.jt,A.C_,A.BL],x.w)
D.cXF=w(["Mail","SMS","Ad"],x.s)
D.cRa=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h9o=new B.Ax(D.aWw,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axU,D.cQE,D.cXF,D.cRa)
D.aag=new B.Kk(1,"flip")
D.d7a=w([A.q6,A0.GE,A.uc],x.w)
D.d1X=w(["Unlock","Verify","Secure"],x.s)
D.cPD=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h9n=new B.Ax(D.aag,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axp,D.d7a,D.d1X,D.cPD)
D.aWx=new B.Kk(2,"towers")
D.d0L=w([A.yu,A.qa,A.hS],x.w)
D.d0m=w(["Save","Grow","Earn"],x.s)
D.cDJ=w(["","",""],x.s)
D.h9p=new B.Ax(D.aWx,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2J,D.d0L,D.d0m,D.cDJ)
D.aah=new B.Kk(3,"assemble")
D.d85=w([A.no,A.h9,A.dX],x.w)
D.cX3=w(["Launch","Charge","Shine"],x.s)
D.d4A=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h9r=new B.Ax(D.aah,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avP,D.d85,D.cX3,D.d4A)
D.aWy=new B.Kk(4,"carousel")
D.d7V=w([A.b8,A.f3],x.O)
D.cXP=w([A.mA,A.alL,A.Oa],x.w)
D.cSD=w(["Explore","Discover","Learn"],x.s)
D.d2l=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h9m=new B.Ax(D.aWy,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d7V,D.cXP,D.cSD,D.d2l)
D.aWz=new B.Kk(5,"burst")
D.d0h=w([A.iV,A.tr],x.O)
D.cR5=w([A.ln,A.my,A.i5],x.w)
D.cRr=w(["Cheer","Win","Love"],x.s)
D.cTz=w(["Make some noise","First place","Share the joy"],x.s)
D.h9q=new B.Ax(D.aWz,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d0h,D.cR5,D.cRr,D.cTz)
D.ax9=w([D.h9o,D.h9n,D.h9p,D.h9r,D.h9m,D.h9q],C.ax("O<Ax>"))
D.eK6=new C.bl("skin","Skin",A.alM)
D.eLu=new C.bl("muscle","Muscles",A.NL)
D.eLc=new C.bl("organ","Organs",A.i5)
D.bF9=new C.a0(62747,"MaterialIcons",!1)
D.eLi=new C.bl("bone","Skeleton",D.bF9)
D.eLA=new C.bl("vessel","Blood vessels",A.qc)
D.d0R=w([D.eK6,D.eLu,D.eLc,D.eLi,D.eLA],x.c)
D.eQa=new B.uR("Simple legs","Light. Land gently.",0.15,0.2)
D.eQc=new B.uR("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eQf=new B.uR("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cp=w([D.eQa,D.eQc,D.eQf],x._)
D.d2v=w([1.77,3.55,7.15,16.7],x.n)
D.d50=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eFM=new C.z("spiral","Spiral")
D.eot=new C.z("barred","Barred spiral")
D.ezY=new C.z("elliptical","Elliptical")
D.d5H=w([D.eFM,D.eot,D.ezY],x.K)
D.eMg=new C.cA(["beat",0.18,0.28,0])
D.eNn=new C.cA(["burst",0.7,0.2,0])
D.eNy=new C.cA(["delay",0.45,0.5,1])
D.eN7=new C.cA(["ripple",0.75,0.6,3])
D.cWN=w([D.eMg,D.eNn,D.eNy,D.eN7],x.e)
D.d6y=w([N.lb,M.IE,F.SP],x.u)
D.h8D=new B.FP("First spark","A clock lights a burst and a ripple",D.cWN,D.d6y)
D.eMP=new C.cA(["beat",0.15,0.3,1])
D.eLV=new C.cA(["ripple",0.62,0.15,0])
D.eNu=new C.cA(["delay",0.4,0.45,0])
D.eMv=new C.cA(["ripple",0.7,0.45,0])
D.eMc=new C.cA(["delay",0.4,0.7,1])
D.eN9=new C.cA(["shake",0.75,0.75,0])
D.djt=w([D.eMP,D.eLV,D.eNu,D.eMv,D.eMc,D.eN9],x.e)
D.elt=new C.z(2,4)
D.aMJ=new C.z(4,5)
D.d_a=w([N.lb,M.IE,F.SP,D.elt,D.aMJ],x.u)
D.h8F=new B.FP("Heartbeat","Two thumps, then a shake",D.djt,D.d_a)
D.eMl=new C.cA(["dice",0.15,0.7,1])
D.eNA=new C.cA(["echo",0.4,0.7,0])
D.eMt=new C.cA(["comet",0.7,0.5,4])
D.eNo=new C.cA(["burst",0.72,0.2,1])
D.eMN=new C.cA(["burst",0.3,0.25,0])
D.eMm=new C.cA(["pop",0.55,0.85,0])
D.cjU=w([D.eMl,D.eNA,D.eMt,D.eNo,D.eMN,D.eMm],x.e)
D.ekT=new C.z(1,3)
D.ekU=new C.z(1,4)
D.aMG=new C.z(0,5)
D.d7Q=w([N.lb,W.uK,D.ekT,D.ekU,D.aMG],x.u)
D.h8E=new B.FP("Fireworks","Dice launch comets that burst in colour",D.cjU,D.d7Q)
D.eMq=new C.cA(["beat",0.15,0.2,2])
D.eMX=new C.cA(["chance",0.4,0.2,0])
D.eMi=new C.cA(["ball",0.7,0.12,3])
D.eM5=new C.cA(["chance",0.4,0.5,1])
D.eNz=new C.cA(["ball",0.3,0.08,1])
D.eLZ=new C.cA(["ripple",0.7,0.55,3])
D.ccV=w([D.eMq,D.eMX,D.eMi,D.eM5,D.eNz,D.eLZ],x.e)
D.elu=new C.z(2,5)
D.cA5=w([N.lb,W.uK,M.a6u,F.SQ,D.elu],x.u)
D.h8C=new B.FP("Rain","Balls fall at random and splash",D.ccV,D.cA5)
D.eMY=new C.cA(["beat",0.12,0.45,2])
D.eNp=new C.cA(["toggle",0.38,0.2,0])
D.eNw=new C.cA(["wash",0.7,0.15,4])
D.eMk=new C.cA(["count3",0.38,0.45,0])
D.eNr=new C.cA(["burst",0.72,0.4,0])
D.eMO=new C.cA(["light",0.55,0.7,1])
D.eM6=new C.cA(["pop",0.8,0.8,4])
D.dav=w([D.eMY,D.eNp,D.eNw,D.eMk,D.eNr,D.eMO,D.eM6],x.e)
D.elZ=new C.z(3,6)
D.cg3=w([N.lb,W.uK,M.a6u,F.SQ,D.aMG,D.elZ],x.u)
D.h8A=new B.FP("Disco","A beat drives lights, washes and bursts",D.dav,D.cg3)
D.eND=new C.cA(["button",0.12,0.2,0])
D.eM0=new C.cA(["delay",0.34,0.2,1])
D.eNC=new C.cA(["light",0.56,0.2,1])
D.eNv=new C.cA(["delay",0.56,0.45,1])
D.eMZ=new C.cA(["ball",0.34,0.6,0])
D.eM4=new C.cA(["delay",0.34,0.8,1])
D.eLU=new C.cA(["burst",0.7,0.8,5])
D.c08=w([D.eND,D.eM0,D.eNC,D.eNv,D.eMZ,D.eM4,D.eLU],x.e)
D.eo5=new C.z(5,6)
D.dfM=w([N.lb,W.uK,F.SP,F.SQ,D.aMJ,D.eo5],x.u)
D.h8B=new B.FP("Domino","Tap the button and watch it run down the line",D.c08,D.dfM)
D.axt=w([D.h8D,D.h8F,D.h8E,D.h8C,D.h8A,D.h8B],C.ax("O<FP>"))
D.d5P=w([0.05,0.15,0.25],x.n)
D.d62=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d6J=w([1.5,3,4.5,9,12],x.n)
D.eIM=new C.bl("dice","Dice",A.mx)
D.eJO=new C.bl("coin","Coin",K.yn)
D.eLv=new C.bl("num","Number",A.yw)
D.d6V=w([D.eIM,D.eJO,D.eLv],x.c)
D.d6Y=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fJA=new B.P4("Moon",1.62,0,4291941851)
D.fJB=new B.P4("Mars",3.71,0.01,4294472049)
D.fJC=new B.P4("Earth",9.81,1,4281908728)
D.fJE=new B.P4("Jupiter",24.79,1.4,4294677052)
D.fJD=new B.P4("Sun",274,2,4294688548)
D.yY=w([D.fJA,D.fJB,D.fJC,D.fJE,D.fJD],C.ax("O<P4>"))
D.axz=w([A.c9,A.aM,A.b2,A.aN,A.bu,A.bY,A.cs,A.hm],x.O)
D.e5l={H:0}
D.dq4=new C.bk(D.e5l,[2],x.I)
D.drE=new B.tl("Hydrogen","H\u2082",D.dq4,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e5m={H:0,Cl:1}
D.dqh=new C.bk(D.e5m,[1,1],x.I)
D.drG=new B.tl("Hydrogen chloride","HCl",D.dqh,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e5n={H:0,O:1}
D.dpM=new C.bk(D.e5n,[2,1],x.I)
D.drH=new B.tl("Water","H\u2082O",D.dpM,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e5B={N:0,H:1}
D.dqG=new C.bk(D.e5B,[1,3],x.I)
D.drP=new B.tl("Ammonia","NH\u2083",D.dqG,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5D={C:0,H:1}
D.dqz=new C.bk(D.a5D,[1,4],x.I)
D.drI=new B.tl("Methane","CH\u2084",D.dqz,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e5o={H:0,S:1}
D.doS=new C.bk(D.e5o,[2,1],x.I)
D.drO=new B.tl("Hydrogen sulfide","H\u2082S",D.doS,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e5G={O:0}
D.dqE=new C.bk(D.e5G,[2],x.I)
D.drQ=new B.tl("Oxygen","O\u2082",D.dqE,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e5A={N:0}
D.dq5=new C.bk(D.e5A,[2],x.I)
D.drF=new B.tl("Nitrogen","N\u2082",D.dq5,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e5a={C:0,O:1}
D.dqL=new C.bk(D.e5a,[1,2],x.I)
D.drM=new B.tl("Carbon dioxide","CO\u2082",D.dqL,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aH_={C:0,H:1,O:2}
D.doz=new C.bk(D.aH_,[1,2,1],x.I)
D.drN=new B.tl("Formaldehyde","CH\u2082O",D.doz,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dqy=new C.bk(D.a5D,[2,4],x.I)
D.drK=new B.tl("Ethene","C\u2082H\u2084",D.dqy,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dqx=new C.bk(D.a5D,[2,6],x.I)
D.drJ=new B.tl("Ethane","C\u2082H\u2086",D.dqx,"Two carbons joined by a single bond, each holding three hydrogens.")
D.doA=new C.bk(D.aH_,[1,4,1],x.I)
D.drL=new B.tl("Methanol","CH\u2083OH",D.doA,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a38=w([D.drE,D.drG,D.drH,D.drP,D.drI,D.drO,D.drQ,D.drF,D.drM,D.drN,D.drK,D.drJ,D.drL],C.ax("O<tl>"))
D.d7W=w([A.bY,A.aN,A.dQ,A.b2],x.O)
D.d8R=w([],x.h)
D.d8V=w([],x.B)
D.a3h=w([],x.F)
D.edh=new B.ed("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.edn=new B.ed("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ee1=new B.ed("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.edE=new B.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aN,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ed9=new B.ed("buck","Step-down converter","\ud83d\udd3d",A.hm,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.edC=new B.ed("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.ee6=new B.ed("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.edO=new B.ed("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eds=new B.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ee3=new B.ed("fuse","Fuse","\ud83e\uddef",A.c9,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ed1=new B.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hm,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.edP=new B.ed("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.edR=new B.ed("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.edp=new B.ed("led","LED","\ud83d\udd34",A.av,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.edt=new B.ed("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.edL=new B.ed("buzzer","Buzzer","\ud83d\udd14",A.bY,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.edi=new B.ed("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.edG=new B.ed("capacitor","Capacitor","\ud83e\udeab",A.cl,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.edy=new B.ed("radio","Radio","\ud83d\udcfb",A.nX,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.edv=new B.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ed8=new B.ed("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.edf=new B.ed("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.edl=new B.ed("fan","Fan","\ud83c\udf00",A.aN,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.ee8=new B.ed("speaker","Speaker","\ud83d\udd0a",A.bY,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.edY=new B.ed("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.edB=new B.ed("calculator","Calculator","\ud83e\uddee",A.KT,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ede=new B.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cl,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.ee7=new B.ed("router","WiFi router","\ud83d\udcf6",A.hm,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eea=new B.ed("siren","Siren","\ud83d\udea8",A.av,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ed4=new B.ed("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eeb=new B.ed("kettle","Kettle","\ud83e\uded6",A.ml,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.edc=new B.ed("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.edo=new B.ed("lights","Party lights","\ud83c\udf84",A.nX,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.edz=new B.ed("fridge","Fridge","\ud83e\uddca",A.fW,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ed6=new B.ed("washer","Washing machine","\ud83e\udee7",A.cl,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.edZ=new B.ed("blender","Blender","\ud83e\udd64",A.c9,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.edw=new B.ed("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.edb=new B.ed("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.edA=new B.ed("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.edW=new B.ed("neon","Neon sign","\ud83e\udea7",A.bY,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ed7=new B.ed("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.edQ=new B.ed("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.edk=new B.ed("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.edK=new B.ed("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.ee0=new B.ed("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ed5=new B.ed("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.edF=new B.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.edN=new B.ed("discoball","Disco ball","\ud83e\udea9",A.nX,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.ee5=new B.ed("robot","Robot","\ud83e\udd16",A.aN,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ed3=new B.ed("toaster","Toaster","\ud83c\udf5e",A.dU,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.ee9=new B.ed("ledstrip","LED strip","\ud83c\udf08",A.bY,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.edV=new B.ed("pump","Water pump","\ud83d\udeb0",A.aN,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.edH=new B.ed("hairdryer","Hair dryer","\ud83d\udca8",A.iV,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.edT=new B.ed("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.edd=new B.ed("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ee4=new B.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.cl,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ed0=new B.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.edx=new B.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.edq=new B.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bN,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.edM=new B.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.to,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ed2=new B.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.edg=new B.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.ee2=new B.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.edI=new B.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bc,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.edD=new B.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.edU=new B.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.av,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.edr=new B.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.edJ=new B.ed("honor","Honor Magic V5","\ud83d\udcf1",A.cl,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.edS=new B.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.edX=new B.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ed_=new B.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.edu=new B.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.edm=new B.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eda=new B.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.edj=new B.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.av,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ee_=new B.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QH=w([D.edh,D.edn,D.ee1,D.edE,D.ed9,D.edC,D.ee6,D.edO,D.eds,D.ee3,D.ed1,D.edP,D.edR,D.edp,D.edt,D.edL,D.edi,D.edG,D.edy,D.edv,D.ed8,D.edf,D.edl,D.ee8,D.edY,D.edB,D.ede,D.ee7,D.eea,D.ed4,D.eeb,D.edc,D.edo,D.edz,D.ed6,D.edZ,D.edw,D.edb,D.edA,D.edW,D.ed7,D.edQ,D.edk,D.edK,D.ee0,D.ed5,D.edF,D.edN,D.ee5,D.ed3,D.ee9,D.edV,D.edH,D.edT,D.edd,D.ee4,D.ed0,D.edx,D.edq,D.edM,D.ed2,D.edg,D.ee2,D.edI,D.edD,D.edU,D.edr,D.edJ,D.edS,D.edX,D.ed_,D.edu,D.edm,D.eda,D.edj,D.ee_],C.ax("O<ed>"))
D.d9h=w([0,0.46,0.82],x.n)
D.d9s=w([5,10,15,25,45,60],x.t)
D.d9O=w([-0.045,0.03,-0.015],x.n)
D.dab=w([0.9,0.97,1],x.n)
D.ay1=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.un=w([0.05,0.2,0.35],x.n)
D.cRv=w([D.F0,D.F0],x.O)
D.cWJ=w([A.Fa,A.M],x.O)
D.cVN=w([A.fl,A.hl],x.O)
D.cPz=w([A.f3,A.nW],x.O)
D.ccr=w([A.lJ,A.dx],x.O)
D.ay2=w([D.cRv,D.cWJ,D.cVN,D.cPz,D.ccr],x.Q)
D.fJo=new B.v5("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fJp=new B.v5("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fJg=new B.v5("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fJn=new B.v5("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fJl=new B.v5("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fJh=new B.v5("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fJm=new B.v5("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fJi=new B.v5("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fJk=new B.v5("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fJj=new B.v5("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cw=w([D.fJo,D.fJp,D.fJg,D.fJn,D.fJl,D.fJh,D.fJm,D.fJi,D.fJk,D.fJj],C.ax("O<v5>"))
D.bgx=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.dbt=w([D.F0,D.bgx,D.aep,A.adT],x.O)
D.b2l=new C.ac(0,A.G,A.hM,A.dE,6)
D.dcn=w([D.b2l],x.V)
D.ek7=new C.z(0,"AND")
D.ekV=new C.z(1,"Adder")
D.elv=new C.z(2,"Blinker")
D.em_=new C.z(3,"Memory")
D.dd9=w([D.ek7,D.ekV,D.elv,D.em_],x.E)
D.aye=w([-104,0,104],x.n)
D.ayf=w([-14,3],x.n)
D.ddX=w([-8,0,8],x.n)
D.ayn=w([-92,0,92],x.n)
D.del=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eQ7=new B.uR("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eQe=new B.uR("Medium tank","Balanced.",0.35,1)
D.eQd=new B.uR("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QV=w([D.eQ7,D.eQe,D.eQd],x._)
D.nt=w([0.04,0.2,0.36],x.n)
D.ayy=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eLb=new C.bl(D.aWw,"Fold",K.amI)
D.eKl=new C.bl(D.aag,"Flip",A.Gh)
D.bFs=new C.a0(62889,"MaterialIcons",!1)
D.eLt=new C.bl(D.aWx,"Rise",D.bFs)
D.amW=new C.a0(983870,"MaterialIcons",!1)
D.eIk=new C.bl(D.aah,"Assemble",D.amW)
D.eIt=new C.bl(D.aWy,"Spin",D.ale)
D.eIq=new C.bl(D.aWz,"Pop",A.ln)
D.dfJ=w([D.eLb,D.eKl,D.eLt,D.eIk,D.eIt,D.eIq],C.ax("O<+(Kk,m,a0)>"))
D.ayD=w([A.bY,A.dQ,A.bv,A.aN,A.bu,A.c9],x.O)
D.dfW=w([A.aN,A.cs,A.cs,A.b2],x.O)
D.dg8=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eHg=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.erQ=new C.z("Make the output turn TWICE as fast.",2)
D.el4=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eFW=new C.z("Make the output turn 4 times faster.",4)
D.exr=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eAz=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.ez3=new C.z("Make the output turn 3 times faster.",3)
D.ezP=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ayI=w([D.eHg,D.erQ,D.el4,D.eFW,D.exr,D.eAz,D.ez3,D.ezP],C.ax("O<+(m,L)>"))
D.dh5=w([3,4.5,5,6,9],x.n)
D.b2U=new C.ac(0,A.G,A.aW,A.J,16)
D.dhx=w([D.b2U],x.V)
D.QY=w([A.bY,A.bH,A.b2,A.aN,A.bu,A.c9,A.c,A.cs],x.O)
D.di0=w(["solar","turbine","crank","pot"],x.s)
D.dim=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dis=w([0,0.35,0.75,1],x.n)
D.eIG=new C.bl("drop","Drop",D.amy)
D.eII=new C.bl("weight","Weight",U.an_)
D.eLo=new C.bl("cannon","Newton's cannon",A.alY)
D.dj9=w([D.eIG,D.eII,D.eLo],x.c)
D.eEA=new C.z("piano","Piano")
D.eEg=new C.z("organ","Organ")
D.eyL=new C.z("bell","Bell")
D.eEC=new C.z("pluck","Pluck")
D.eFV=new C.z("synth","Synth")
D.eAu=new C.z("flute","Flute")
D.ayZ=w([D.eEA,D.eEg,D.eyL,D.eEC,D.eFV,D.eAu],x.K)
D.djH=w(["volts","level","ohms","on"],x.s)
D.dl4=w([A.jt,A.C_,A.BL,A.q6,A0.GE,A.uc,A.yu,A.qa,A.hS,A.no,A.h9,A.dX,A.i5,A.i6,A.my,A.lU,A.w_,A.rp,A.lV,A.G9,A.ub,A.BR,A.BN,A.amt,A.ND,A.yq,A.NL,A.am8,T.amS,A.ln],x.w)
D.dlZ=w([0.72,1],x.n)
D.dmb=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e79={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dor=new C.bk(D.e79,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aH1={A:0,T:1,C:2,G:3}
D.a4d=new C.bk(D.aH1,["U","A","G","C"],x.l)
D.doB=new C.bk(D.aH1,["T","A","G","C"],x.l)
D.e5x={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d8_=w([0,2,4,5,7,9,11],x.t)
D.cQL=w([0,2,3,5,7,8,10],x.t)
D.ddl=w([0,3,5,6,7,10],x.t)
D.CD=new C.bk(D.e5x,[D.awT,D.d8_,D.cQL,D.ddl,D.apr],C.ax("bk<m,ai<G>>"))
D.e6W={A:0,T:1,U:2,C:3,G:4}
D.doV=new C.bk(D.e6W,[A.c9,A.cl,A.cl,A.aM,A.b2],C.ax("bk<m,w>"))
D.e4T={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h20=new B.y5("Switch",F.ue,A.bH,0,"Tap it to turn it ON or OFF.")
D.h1X=new B.y5("Blinker",A.oZ,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h1Y=new B.y5("AND",D.amW,A.cl,2,"ON only when BOTH inputs are ON.")
D.bGW=new C.a0(63671,"MaterialIcons",!1)
D.h1W=new B.y5("OR",D.bGW,A.bu,2,"ON when EITHER input is ON.")
D.h1Z=new B.y5("XOR",G.a0f,A.bY,2,"ON when the inputs are DIFFERENT.")
D.h1T=new B.y5("NAND",A.u0,A.aN,2,"OFF only when BOTH inputs are ON.")
D.bG2=new C.a0(63176,"MaterialIcons",!1)
D.h1U=new B.y5("NOR",D.bG2,A.hm,2,"ON only when BOTH inputs are OFF.")
D.h1V=new B.y5("NOT",A_.C0,A.cs,1,"Flips the signal: ON becomes OFF.")
D.h2_=new B.y5("Light",A.rk,A.dQ,1,"Glows when its input is ON.")
D.h21=new B.y5("Buzzer",A.o8,A.c9,1,"Beeps while its input is ON.")
D.za=new C.bk(D.e4T,[D.h20,D.h1X,D.h1Y,D.h1W,D.h1Z,D.h1T,D.h1U,D.h1V,D.h2_,D.h21],C.ax("bk<m,y5>"))
D.e6T={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eJ5=new C.bl(3,20,1.9)
D.eIB=new C.bl(33,90,1.6)
D.eLN=new C.bl(52,15,3.2)
D.eLL=new C.bl(45,-100,1.8)
D.eKf=new C.bl(-15,-60,1.9)
D.eJJ=new C.bl(-25,140,2.4)
D.eJA=new C.bl(-82,0,2.2)
D.aEp=new C.bk(D.e6T,[D.eJ5,D.eIB,D.eLN,D.eLL,D.eKf,D.eJJ,D.eJA],C.ax("bk<m,+(L,L,L)>"))
D.cQ7=w([A.A],x.M)
D.cQr=w([A.az,A.aC],x.M)
D.cZf=w([A.az,A.A,A.aC],x.M)
D.d_K=w([A.az,A.le,A.A,A.lD,A.aC],x.M)
D.dd5=w([A.az,A.le,A.a3,A.a8,A.lD,A.aC],x.M)
D.dpT=new C.dt([1,D.cQ7,2,D.cQr,3,D.cZf,4,A.az3,5,D.d_K,6,D.dd5],C.ax("dt<G,ai<dc>>"))
D.e5y={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eKr=new C.bl(1,A.bN,"Hydrogen")
D.eJk=new C.bl(4,A.bn,"Carbon")
D.eIl=new C.bl(3,A.d_,"Nitrogen")
D.eKL=new C.bl(2,A.av,"Oxygen")
D.eK8=new C.bl(2,A.bH,"Sulfur")
D.eLl=new C.bl(1,A.bc,"Chlorine")
D.wf=new C.bk(D.e5y,[D.eKr,D.eJk,D.eIl,D.eKL,D.eK8,D.eLl],C.ax("bk<m,+(G,w,m)>"))
D.e7k={Calm:0,Box:1,Sleep:2}
D.cxz=w([4,2,6,0],x.n)
D.cxG=w([4,4,4,4],x.n)
D.cxH=w([4,7,8,0],x.n)
D.Rm=new C.bk(D.e7k,[D.cxz,D.cxG,D.cxH],C.ax("bk<m,ai<L>>"))
D.e52={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wV=new B.a0d(0,"source")
D.d_d=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h7g=new B.q7("Clock",A.oZ,D.wV,A.bv,D.d_d)
D.h7c=new B.q7("Button",A.yy,D.wV,A.aM,A.U)
D.dhh=w(["random","quick","slow"],x.s)
D.h7n=new B.q7("Dice",A.mx,D.wV,A.bY,D.dhh)
D.bGB=new C.a0(63484,"MaterialIcons",!1)
D.E_=new B.a0d(1,"logic")
D.dlU=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h7j=new B.q7("Delay",D.bGB,D.E_,A.cl,D.dlU)
D.d9z=w(["fast","mid","slow"],x.s)
D.h7o=new B.q7("Echo",A.amn,D.E_,A.bu,D.d9z)
D.h7l=new B.q7("Every 2nd",A_.C0,D.E_,A.hm,A.U)
D.bGg=new C.a0(63309,"MaterialIcons",!1)
D.h7i=new B.q7("Every 3rd",D.bGg,D.E_,A.aN,A.U)
D.bIe=new C.a0(983902,"MaterialIcons",!1)
D.c_z=w(["50%","25%","75%"],x.s)
D.h7q=new B.q7("Chance",D.bIe,D.E_,A.cs,D.c_z)
D.qG=new B.a0d(2,"out")
D.h7e=new B.q7("Light",A.rk,D.qG,A.dQ,A.U)
D.h7f=new B.q7("Burst",A.ln,D.qG,A.bY,A.U)
D.h7d=new B.q7("Ripple",A.yB,D.qG,A.b8,A.U)
D.h7m=new B.q7("Ball",A.amA,D.qG,A.cs,A.U)
D.h7k=new B.q7("Comet",A.no,D.qG,A.bu,A.U)
D.bHZ=new C.a0(983669,"MaterialIcons",!1)
D.h7p=new B.q7("Shake",D.bHZ,D.qG,A.c9,A.U)
D.h7r=new B.q7("Pop",A.Ga,D.qG,A.b2,A.U)
D.h7h=new B.q7("Wash",A.NP,D.qG,A.pC,A.U)
D.mI=new C.bk(D.e52,[D.h7g,D.h7c,D.h7n,D.h7j,D.h7o,D.h7l,D.h7i,D.h7q,D.h7e,D.h7f,D.h7d,D.h7m,D.h7k,D.h7p,D.h7r,D.h7h],C.ax("bk<m,q7>"))
D.e6X={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.CE=new C.bk(D.e6X,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e5f={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zC=new B.Jh(0,"tv")
D.eRF=new B.m9("Samsung Neo QLED 8K",D.zC,F.EN,A.aN)
D.eRw=new B.m9("LG OLED evo G5",D.zC,A.eb,A.h3)
D.eRn=new B.m9("Sony Bravia 9",D.zC,A.qR,A.bs)
D.eRr=new B.m9("Apple TV 4K",D.zC,A.e3,A.bN)
D.eRo=new B.m9("Bang and Olufsen Beovision",D.zC,F.Ev,F.to)
D.IJ=new B.Jh(1,"iphone")
D.aNp=new B.m9("iPhone 18 Pro Max",D.IJ,D.agA,A.cb)
D.ws=new B.Jh(3,"fold")
D.bmC=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eRB=new B.m9("iPhone Fold",D.ws,D.bmC,A.b6)
D.uN=new B.Jh(2,"android")
D.eRC=new B.m9("Samsung Galaxy S26 Ultra",D.uN,F.acK,A.d_)
D.bg5=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eRu=new B.m9("Samsung Galaxy Z Fold7",D.ws,D.bg5,A.cA)
D.eRq=new B.m9("Google Pixel 10 Pro XL",D.uN,A.dy,A.bc)
D.eRy=new B.m9("Xiaomi 16 Ultra",D.uN,A.lN,A.cc)
D.eRt=new B.m9("Huawei Mate 80 Pro Max",D.uN,A.eK,A.av)
D.eRp=new B.m9("OPPO Find X9 Ultra",D.uN,A.e_,A.b2)
D.eRH=new B.m9("Honor Magic V5",D.ws,A.dc,A.cl)
D.eRv=new B.m9("vivo X300 Pro",D.uN,A.hl,A.cs)
D.SX=new B.Jh(4,"tablet")
D.eRA=new B.m9("iPad Pro M5",D.SX,A.dy,A.aN)
D.a6Q=new B.Jh(5,"reader")
D.eRI=new B.m9("Kindle Scribe",D.a6Q,A.ec,A.bs)
D.zD=new B.Jh(6,"computer")
D.eRz=new B.m9("MacBook Pro M5 Max",D.zD,A.dy,A.cb)
D.eRE=new B.m9("iMac 32 inch",D.zD,A.bN,A.cA)
D.eRx=new B.m9("Pro Display XDR 8K",D.zD,A.lN,A.b8)
D.eRs=new B.m9("Sony Laser Projector",D.zD,A.ct,A.dQ)
D.eRD=new B.m9("Luxury car touchscreen",D.zD,L.mm,A.av)
D.eRG=new B.m9("Apple Vision Pro",D.zD,A.j0,A.bu)
D.m1=new C.bk(D.e5f,[D.eRF,D.eRw,D.eRn,D.eRr,D.eRo,D.aNp,D.eRB,D.eRC,D.eRu,D.eRq,D.eRy,D.eRt,D.eRp,D.eRH,D.eRv,D.eRA,D.eRI,D.eRz,D.eRE,D.eRx,D.eRs,D.eRD,D.eRG],C.ax("bk<m,m9>"))
D.e5s={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpk=new B.fO(20,4,13,!1)
D.bpL=new B.fO(14,5,13.5,!1)
D.bpC=new B.fO(9,2.4,10,!1)
D.bpQ=new B.fO(7,5,12.5,!1)
D.bpF=new B.fO(8,3.5,12,!1)
D.bpg=new B.fO(15,2,6,!1)
D.bpO=new B.fO(45,6,13.5,!0)
D.bpw=new B.fO(10,8,13.5,!1)
D.bpo=new B.fO(25,3,12,!0)
D.bpu=new B.fO(35,4,12,!0)
D.bpv=new B.fO(40,4.5,9.5,!0)
D.bpx=new B.fO(55,3,9,!0)
D.bph=new B.fO(18,3,9,!1)
D.bpN=new B.fO(22,4,13.5,!1)
D.bpG=new B.fO(16,5,13.5,!1)
D.bps=new B.fO(30,4,9,!0)
D.bpZ=new B.fO(5,3.5,13,!1)
D.bpA=new B.fO(25,3,13.5,!0)
D.bpJ=new B.fO(14,2.5,9,!1)
D.bpz=new B.fO(6,6,13,!1)
D.bpR=new B.fO(30,1.2,5,!0)
D.bpY=new B.fO(35,3,4.5,!0)
D.bpU=new B.fO(20,4.5,7.5,!0)
D.bpy=new B.fO(55,5.5,13.5,!0)
D.bpf=new B.fO(45,5.5,13.5,!0)
D.bpK=new B.fO(40,5.5,13.5,!0)
D.bpX=new B.fO(60,6,13.5,!0)
D.ah1=new B.fO(28,4,7,!0)
D.Fn=new B.fO(25,4,7,!0)
D.bpr=new B.fO(30,4,7,!0)
D.bpm=new B.fO(22,4,7,!0)
D.bpn=new B.fO(24,4,7,!0)
D.bpB=new B.fO(60,3,5.5,!0)
D.bpi=new B.fO(18,9,14,!0)
D.bpp=new B.fO(25,9,14,!0)
D.ah2=new B.fO(30,8,14,!0)
D.bpl=new B.fO(20,8,14,!0)
D.bpt=new B.fO(30,9,14,!0)
D.bpS=new B.fO(22,5,9.5,!0)
D.bpj=new B.fO(30,2.5,10.5,!0)
D.bpH=new B.fO(50,5.5,13.5,!0)
D.bpW=new B.fO(12,2,9.5,!1)
D.bpE=new B.fO(16,1.3,9.5,!0)
D.bpP=new B.fO(40,2.5,7,!0)
D.bpV=new B.fO(60,1.2,4.8,!0)
D.bpT=new B.fO(18,5,13.5,!0)
D.bpM=new B.fO(8,2,9.5,!1)
D.bpD=new B.fO(12,2.5,8,!1)
D.bpq=new B.fO(20,3.5,13.5,!0)
D.bpI=new B.fO(3.5,3,13,!1)
D.zb=new C.bk(D.e5s,[D.bpk,D.bpL,D.bpC,D.bpQ,D.bpF,D.bpg,D.bpO,D.bpw,D.bpo,D.bpu,D.bpv,D.bpx,D.bph,D.bpN,D.bpG,D.bps,D.bpZ,D.bpA,D.bpJ,D.bpz,D.bpR,D.bpY,D.bpU,D.bpy,D.bpf,D.bpK,D.bpX,D.ah1,D.Fn,D.bpr,D.Fn,D.bpm,D.Fn,D.bpn,D.ah1,D.Fn,D.bpB,D.bpi,D.bpp,D.ah2,D.bpl,D.bpt,D.bpS,D.bpj,D.bpH,D.bpW,D.bpE,D.bpP,D.bpV,D.Fn,D.ah2,D.bpT,D.bpM,D.bpD,D.bpq,D.bpI],C.ax("bk<m,fO>"))
D.e51={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eHR=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eo2=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.enY=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ezO=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eAL=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ezK=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.em4=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.exK=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eHZ=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eB4=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ere=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.elN=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eqh=new C.z("Movement","They pull your legs together and help you balance.")
D.es9=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eob=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eFw=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eGy=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.exs=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eGj=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ewa=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eBd=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.elU=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.esw=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eAU=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ewu=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eGr=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ezf=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.em2=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eBM=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eF9=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eDp=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eki=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eyY=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ez1=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.etc=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eop=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.erZ=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.exU=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eE9=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eHW=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eBa=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ek1=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ey4=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ekO=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eEp=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eFs=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eyu=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eEE=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.elW=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eFY=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.epH=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eDP=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.esT=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ewp=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eBu=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eG8=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eG_=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eG4=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ewT=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eCh=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eDm=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eFN=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eyt=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.euO=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.etC=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eyT=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eBn=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.evj=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.evZ=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eq2=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eFo=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eqP=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ekL=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.etb=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ekG=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eoO=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.etg=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eqY=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eBI=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.esc=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eHE=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.etL=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ewN=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ezn=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.er6=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eqR=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dr4=new C.bk(D.e51,[D.eHR,D.eo2,D.enY,D.ezO,D.eAL,D.ezK,D.em4,D.exK,D.eHZ,D.eB4,D.ere,D.elN,D.eqh,D.es9,D.eob,D.eFw,D.eGy,D.exs,D.eGj,D.ewa,D.eBd,D.elU,D.esw,D.eAU,D.ewu,D.eGr,D.ezf,D.em2,D.eBM,D.eF9,D.eDp,D.eki,D.eyY,D.ez1,D.etc,D.eop,D.erZ,D.exU,D.eE9,D.eHW,D.eBa,D.ek1,D.ey4,D.ekO,D.eEp,D.eFs,D.eyu,D.eEE,D.elW,D.eFY,D.epH,D.eDP,D.esT,D.ewp,D.eBu,D.eG8,D.eG_,D.eG4,D.ewT,D.eCh,D.eDm,D.eFN,D.eyt,D.euO,D.etC,D.eyT,D.eBn,D.evj,D.evZ,D.eq2,D.eFo,D.eqP,D.ekL,D.etb,D.ekG,D.eoO,D.etg,D.eqY,D.eBI,D.esc,D.eHE,D.etL,D.ewN,D.ezn,D.er6,D.eqR],C.ax("bk<m,+(m,m)>"))
D.dr6=new C.hC(A.G,11)
D.drb=new C.hC(A.G,30)
D.dut=new B.U8(null)
D.dyh=new B.Uc(null)
D.dyi=new B.Ud(null)
D.dyv=new B.Ue(null)
D.dAw=new B.Uh(null)
D.dAx=new B.Ui(null)
D.dAy=new B.Uj(null)
D.dBl=new B.UG(null)
D.dBn=new B.UV(null)
D.dBo=new B.UW(null)
D.dBq=new B.UX(null)
D.dBY=new B.V3(null)
D.dDT=new B.V7(null)
D.dDU=new B.V9(null)
D.dDV=new B.Va(null)
D.dDX=new B.Vb(null)
D.dFx=new B.Vs(null)
D.dFz=new B.Vu(null)
D.dFE=new B.VE(null)
D.dFP=new B.VF(null)
D.dGk=new B.VG(null)
D.dHP=new B.VI(null)
D.dJc=new B.VK(null)
D.dJd=new B.VL(null)
D.dKy=new B.VO(null)
D.e_r=new B.VP(null)
D.e_t=new B.VQ(null)
D.e_u=new B.VT(null)
D.e_v=new B.VU(null)
D.e1o=new B.W1(null)
D.e1p=new B.W2(null)
D.e1x=new B.W9(null)
D.e1G=new B.Wd(null)
D.e1H=new B.We(null)
D.e1I=new B.a8c(null)
D.e2i=new B.Wg(null)
D.e3L=new B.Wk(null)
D.e7v=new C.v(0,118)
D.aH8=new C.v(0,13)
D.e7w=new C.v(0,17)
D.e7z=new C.v(0,330)
D.e7C=new C.v(0,-13)
D.aHe=new C.v(0,-14)
D.e7D=new C.v(0,-17)
D.e7E=new C.v(0,-18)
D.e7F=new C.v(0,-19)
D.e7G=new C.v(0,-20)
D.e7J=new C.v(0,-26)
D.e7K=new C.v(0,-28)
D.e7L=new C.v(0,-31)
D.e7M=new C.v(0,-32)
D.wm=new C.v(0,-6)
D.e7N=new C.v(0,-6771)
D.e7O=new C.v(0,-9)
D.e7Q=new C.v(-9.5,-11)
D.e7R=new C.v(10,20)
D.e7T=new C.v(10,-13)
D.e7U=new C.v(10,-22)
D.e7V=new C.v(10,-4)
D.a5H=new C.v(11,8)
D.e7X=new C.v(12,2)
D.e7Y=new C.v(14,0)
D.e7Z=new C.v(14,12)
D.aHi=new C.v(14,8)
D.e8_=new C.v(14,-17)
D.e80=new C.v(14,-18)
D.aHj=new C.v(14,-3)
D.aHk=new C.v(14,-4)
D.e81=new C.v(15,0)
D.e82=new C.v(15,-12)
D.e83=new C.v(16,-8)
D.e84=new C.v(18,14)
D.e85=new C.v(18,-12)
D.aHo=new C.v(20,0)
D.e8b=new C.v(20,15)
D.e8c=new C.v(20,-17)
D.e8d=new C.v(20,-3)
D.e8e=new C.v(21,8)
D.e8g=new C.v(22,10)
D.aHp=new C.v(22,8)
D.e8h=new C.v(24,0)
D.e8i=new C.v(24,2)
D.e8k=new C.v(24,-18)
D.e8l=new C.v(24,-22)
D.e8m=new C.v(25,8)
D.e8n=new C.v(26,0)
D.e8t=new C.v(28,-30)
D.e8y=new C.v(30,18)
D.e8z=new C.v(30,2)
D.e8A=new C.v(31,19)
D.e8B=new C.v(32,0)
D.aHs=new C.v(34,0)
D.aHt=new C.v(34,-32)
D.Ij=new C.v(36,0)
D.e8G=new C.v(3,-1)
D.e8J=new C.v(40,3)
D.e8N=new C.v(4,11)
D.e8Q=new C.v(4,-2)
D.e8U=new C.v(5,0)
D.e8V=new C.v(5,17)
D.e8W=new C.v(5,6)
D.e9_=new C.v(6,11)
D.e95=new C.v(8,7)
D.e96=new C.v(8,-10)
D.e97=new C.v(8,-14)
D.e98=new C.v(8,-3)
D.aHx=new C.v(9,0)
D.e9b=new C.v(-20.5,-17.6)
D.e9c=new C.v(-9,18.5)
D.e9f=new C.v(-2.6,-1)
D.e9g=new C.v(1.9,-0.8)
D.e9j=new C.v(-0.22,0.09)
D.e9o=new C.v(2.6,1)
D.e9v=new C.v(-9,12.2)
D.e9N=new C.v(-9,20.5)
D.ea4=new C.v(-10,0)
D.ea5=new C.v(-10,12)
D.aHE=new C.v(-10,4)
D.ea6=new C.v(-11,-2)
D.ea7=new C.v(-13,-5)
D.ea8=new C.v(-14,0)
D.ea9=new C.v(-14,13)
D.eaa=new C.v(-14,2)
D.eab=new C.v(-14,-12)
D.eac=new C.v(-14,-19)
D.ead=new C.v(-14,-23)
D.eae=new C.v(-15,6)
D.eaf=new C.v(-16,14)
D.eag=new C.v(-16,-8)
D.eah=new C.v(-17,10)
D.eai=new C.v(-17,-18)
D.eaj=new C.v(-17,-8)
D.eal=new C.v(-18,20)
D.eam=new C.v(-18,-9)
D.aHG=new C.v(-20,0)
D.eao=new C.v(-20,16)
D.eap=new C.v(-20,-9)
D.Sl=new C.v(-22,8)
D.eaq=new C.v(-22,-10)
D.ear=new C.v(-22,-11)
D.eas=new C.v(-24,10)
D.eat=new C.v(-24,11)
D.eau=new C.v(-24,14)
D.eav=new C.v(-24,-22)
D.eaw=new C.v(-25,-11)
D.eax=new C.v(-26,0)
D.eay=new C.v(-26,-18)
D.eaz=new C.v(-2,9)
D.eaA=new C.v(-2,-10)
D.eaB=new C.v(-2,-20)
D.eaC=new C.v(-2,-9)
D.eaD=new C.v(-32,0)
D.aHI=new C.v(-34,0)
D.eaI=new C.v(-40,3)
D.eaK=new C.v(-4,11)
D.eaL=new C.v(-4,-17)
D.eaM=new C.v(-4,-2)
D.eaO=new C.v(-5,0)
D.eaP=new C.v(-5,20)
D.eaQ=new C.v(-5,6)
D.eaR=new C.v(-6,26)
D.eaS=new C.v(-6,6)
D.eaT=new C.v(-6,-42)
D.eaU=new C.v(-7,-19)
D.eaV=new C.v(-7,-24)
D.eaW=new C.v(-8,-9)
D.a5L=new C.v(-9,0)
D.eaX=new C.v(-9,1)
D.eaY=new C.v(-9,-23)
D.fmf=new C.y("Thinking\u2026",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ebU=new C.D(A.jH,D.fmf,null)
D.fCn=new C.y("Start from a ready-made board",null,A.fS,null,null,null,null,null,null,null,null,null)
D.ec3=new C.D(A7.vC,D.fCn,null)
D.bx7=new C.Q(4,0,4,14)
D.fhH=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fna=new C.y("Games and little helpers for a spare minute.",null,D.fhH,null,null,null,null,null,null,null,null,null)
D.ecd=new C.D(D.bx7,D.fna,null)
D.fz9=new C.y("Tap to throw in a star",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.b63=new C.cp(A.A,null,null,D.fz9,null)
D.ei7=new C.cL(0,null,0,14,null,null,D.b63,null)
D.da9=w([A.iC,A.bn],x.O)
D.aMz=new C.bT(A.A,0.5,A.x,null,0,D.da9,null,null)
D.eiQ=new C.bT(A.A,0.5,A.x,null,0,D.ayR,null,null)
D.d1w=w([A.c,A.bK],x.O)
D.eiS=new C.bT(A.A,0.5,A.x,null,0,D.d1w,null,null)
D.eiT=new C.bT(A.A,0.5,A.x,null,0,M.axT,null,null)
D.die=w([A.bN,A.j0],x.O)
D.aMA=new C.bT(A.A,0.5,A.x,null,0,D.die,null,null)
D.cHn=w([A.c,A.bN],x.O)
D.eiX=new C.bT(A.t7,0.5,A.x,null,0,D.cHn,null,null)
D.bdu=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.biR=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d0y=w([D.bdu,D.ag9,D.biR],x.O)
D.d89=w([0,0.7,1],x.n)
D.eiZ=new C.bT(A.t7,0.5,A.x,null,0,D.d0y,D.d89,null)
D.cxN=w([A.oN,A.aF,A.K],x.O)
D.df0=w([0.3,0.7,1],x.n)
D.ej0=new C.bT(A.A,0.5,A.x,null,0,D.cxN,D.df0,null)
D.bmG=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgq=w([A.fc,D.bmG],x.O)
D.ej2=new C.bT(A.t7,0.5,A.x,null,0,D.dgq,null,null)
D.cAB=w([A.dy,A.ct],x.O)
D.ej3=new C.bT(A.A,0.5,A.x,null,0,D.cAB,null,null)
D.cWT=w([A.oN,A.aF,A.fl],x.O)
D.ej4=new C.bT(A.A,0.5,A.x,null,0,D.cWT,null,null)
D.cP7=w([A.fJ,A.aM,A.d5],x.O)
D.ej6=new C.bT(A.t7,0.5,A.x,null,0,D.cP7,null,null)
D.daL=w([A.j0,L.mm],x.O)
D.ej7=new C.bT(A.t7,0.5,A.x,null,0,D.daL,null,null)
D.bdI=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bbG=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cZ7=w([D.bdI,D.bbG],x.O)
D.ej9=new C.bT(A.A,0.5,A.x,null,0,D.cZ7,null,null)
D.bif=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgc=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgg=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dkD=w([D.bif,D.bgc,D.bgg],x.O)
D.cVH=w([0,0.65,1],x.n)
D.eja=new C.bT(M.aar,0.5,A.x,null,0,D.dkD,D.cVH,null)
D.ejb=new C.bT(A.A,0.5,A.x,null,0,D.avg,null,null)
D.dhp=w([A.lK,A.aF,A.fl],x.O)
D.ejg=new C.bT(A.A,0.5,A.x,null,0,D.dhp,null,null)
D.dj4=w([A.j0,A.hJ],x.O)
D.ejj=new C.bT(A.A,0.5,A.x,null,0,D.dj4,null,null)
D.aME=new C.aT(9,9)
D.ejs=new C.aT(1.4,1.4)
D.ekb=new C.z(0,-4)
D.epE=new C.z(0.22,4)
D.ewL=new C.z(0.8,-4)
D.eG0=new C.z(0.58,4)
D.eIK=new C.bl("Moon",1.62,4291941851)
D.eJi=new C.bl("Neptune",11.15,4284524026)
D.eJW=new C.bl("Sun",274,4294688548)
D.eKb=new C.bl("Mercury",3.7,4288455599)
D.eKh=new C.bl("Earth",9.81,4281908728)
D.eKj=new C.bl("Mars",3.71,4294472049)
D.eKC=new C.bl("Venus",8.87,4294759245)
D.eKI=new C.bl("Saturn",10.44,4294829706)
D.eL4=new C.bl("Jupiter",24.79,4294677052)
D.eOF=new C.a9(10,-8,18,-2)
D.eOG=new C.a9(14,-14,20,14)
D.eOH=new C.a9(20,-2,30,2)
D.eOJ=new C.a9(4,-13,30,-3)
D.eOL=new C.a9(8,-7,12,7)
D.eOR=new C.a9(-12,12,12,19)
D.eOS=new C.a9(-12,14,12,22)
D.eOT=new C.a9(-12,-22,12,8)
D.eOU=new C.a9(-12,-25,12,19)
D.eOV=new C.a9(-12,-26,12,-6)
D.eOW=new C.a9(-12,-4,12,14)
D.eOX=new C.a9(-12,-6,10,6)
D.eOY=new C.a9(-14,20,14,24)
D.eOZ=new C.a9(-14,6,14,10)
D.eP_=new C.a9(-14,-17,14,15)
D.eP0=new C.a9(-14,-26,14,18)
D.eP1=new C.a9(-14,-4,14,20)
D.eP2=new C.a9(-15,-29,15,25)
D.eP3=new C.a9(-16,-16,16,16)
D.eP4=new C.a9(-16,-22,-9,18)
D.eP5=new C.a9(-16,-24,16,-10)
D.eP6=new C.a9(-16,-2,16,20)
D.eP8=new C.a9(-18,20,18,24)
D.eP9=new C.a9(-18,-18,18,20)
D.ePa=new C.a9(-20,12,20,22)
D.ePb=new C.a9(-20,-28,20,26)
D.ePc=new C.a9(-22,14,22,18)
D.aN7=new C.a9(-22,-26,22,24)
D.ePd=new C.a9(-22,-3,22,3)
D.ePe=new C.a9(-22,-4,22,12)
D.ePf=new C.a9(-24,-12,10,22)
D.ePg=new C.a9(-24,-14,22,8)
D.ePh=new C.a9(-24,-6,24,20)
D.aN8=new C.a9(-24,-9,24,9)
D.ePi=new C.a9(-25,14,25,19)
D.ePj=new C.a9(-26,-14,14,8)
D.ePk=new C.a9(-26,-4,26,20)
D.ePl=new C.a9(-26,-6,4,6)
D.aN9=new C.a9(-28,-13,28,13)
D.ePm=new C.a9(-28,-16,28,16)
D.ePn=new C.a9(-28,-16,28,8)
D.ePo=new C.a9(-28,-22,28,22)
D.ePp=new C.a9(-30,-12,30,14)
D.ePq=new C.a9(-30,-14,0,14)
D.ePr=new C.a9(-30,-18,30,20)
D.ePs=new C.a9(-30,-28,30,14)
D.ePt=new C.a9(-30,-2,30,18)
D.ePu=new C.a9(-30,-4,30,18)
D.ePv=new C.a9(-32,-17,32,17)
D.ePw=new C.a9(-32,-28,32,18)
D.ePx=new C.a9(-33,-21,33,17)
D.ePy=new C.a9(-34,14,34,26)
D.a6H=new C.a9(-34,-18,34,18)
D.ePz=new C.a9(-34,-4,34,7)
D.ePA=new C.a9(-36,-24,36,20)
D.ePB=new C.a9(-38,-22,38,22)
D.ePC=new C.a9(-3,12,3,22)
D.ePD=new C.a9(-3,5,3,15)
D.ePF=new C.a9(-46,-34,46,28)
D.ePG=new C.a9(-48,-3,48,3)
D.ePJ=new C.a9(-6,18,24,24)
D.ePK=new C.a9(-6,5,6,12)
D.ePL=new C.a9(-6,-22,6,-15)
D.ePM=new C.a9(-9,-16,9,22)
D.ePN=new C.a9(-4.5,-24,4.5,-21.2)
D.ePP=new C.a9(14,-9,17.5,9)
D.e6J={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aO3=new C.dD(D.e6J,5,x.R)
D.e6g={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eSX=new C.dD(D.e6g,10,x.R)
D.eV9=new C.ar(24,44)
D.eVe=new C.ar(300,300)
D.eVy=new C.ar(54,38)
D.eVF=new C.ar(66,38)
D.b7m=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eWF=new C.a7(16,16,D.b7m,null)
D.aP4=new C.hQ(3,12,12,0.82,null)
D.fE4=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPf=new C.b1(D.fE4,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.daO=w([A.c9,A.bH,A.b2,A.aN,A.pC,A.c9],x.O)
D.f1A=new C.fY(A.A,0,6.283185307179586,A.x,D.daO,null,null)
D.faC=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qp,null,null,null)
D.f2P=new C.es("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.faC)
D.aRI=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new C.es("What we see",null,null,A.cO,null,null,null,null,null,null,D.aRI)
D.f7Y=new C.H(!0,A3.KY,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2T=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f7Y)
D.fcQ=new C.H(!0,A.kn,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Z=new C.es("AI",null,null,A.cO,null,null,null,null,null,null,D.fcQ)
D.f7J=new C.H(!0,A.bW,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3_=new C.es("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f7J)
D.aQ3=new C.H(!0,A.bW,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3e=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3M=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f44=new C.H(!0,A.cl,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4z=new C.H(!0,A.bW,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4U=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5m=new C.H(!0,A.aS,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5L=new C.H(!0,A.bW,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTy=new C.cR(A.hM,A.dE,6)
D.d4k=w([D.eTy],x.q)
D.f6e=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d4k,null,null,null)
D.f6h=new C.H(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6k=new C.H(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6m=new C.H(!0,A.bW,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6M=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQs=new C.H(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f75=new C.H(!0,A.aA,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f76=new C.H(!0,A.bW,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f81=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8w=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f91=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTB=new C.cR(A.aW,A.J,3)
D.az5=w([D.eTB],x.q)
D.f94=new C.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.az5,null,null,null)
D.f99=new C.H(!0,A.c,null,null,null,null,12.5,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qp,null,null,null)
D.fai=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.far=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faR=new C.H(!0,A.ty,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbr=new C.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbw=new C.H(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbB=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc7=new C.H(!0,A.bW,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcl=new C.H(!0,A.n7,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcm=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR7=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd9=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTp=new C.cR(A.w,A.J,5)
D.cTh=w([D.eTp],x.q)
D.fda=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTh,null,null,null)
D.fdf=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.az5,null,null,null)
D.fdv=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdB=new C.H(!0,A.fA,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdS=new C.H(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fem=new C.H(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feV=new C.H(!0,A.bW,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffH=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRt=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgj=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgK=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRE=new C.H(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgN=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8I=new C.H(!0,A.c,null,null,null,null,13,A.a6,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new C.H(!0,A.ty,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fif=new C.H(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6p=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new C.y("\u26a0\ufe0f ",null,D.f6p,null,null,null,null,null,null,null,null,null)
D.fiQ=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wC,null,null,null,null,null,null,null,null,null)
D.fjg=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fkk=new C.y("Pick one, then change it and see what happens.",null,A.wC,null,null,null,null,null,null,null,null,null)
D.fko=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f7u=new C.H(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fli=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f7u,null,null,null,null,null,null,null,null,null)
D.flF=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7Y,null,null,null,null,null,null,null,null,null)
D.fmN=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fns=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new C.y("Make it yours",null,A.kh,null,null,null,null,null,null,null,null,null)
D.foh=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a85,null,null,null,null,null,null,null,null,null)
D.fbM=new C.H(!0,A.jl,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fbM,null,null,null,null,null,null,null,null,null)
D.fqS=new C.y("YOUR DECODING",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fr3=new C.y("5G",null,U.aQv,null,null,null,null,null,null,null,null,null)
D.fe7=new C.H(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsb=new C.y("WHAT HAPPENS",null,D.fe7,null,null,null,null,null,null,null,null,null)
D.ftS=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fux=new C.y("Change the words and pictures on the three slabs.",null,A.wC,null,null,null,null,null,null,null,null,null)
D.fuI=new C.y("All the parts and wires will be removed.",null,A.hG,null,null,null,null,null,null,null,null,null)
D.fv1=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fwt=new C.y("INTERCEPTED",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fwO=new C.y("\ud83c\udfaf Challenges",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fxj=new C.y("Remove this part",null,V.aQ7,null,null,null,null,null,null,null,null,null)
D.fxB=new C.y("Clear the board?",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fdC=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxR=new C.y("How the Lab works",null,D.fdC,null,null,null,null,null,null,null,null,null)
D.f55=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fya=new C.y("Electronics Lab",null,D.f55,null,null,null,null,A.a2,null,1,null,null)
D.fyd=new C.y("?",null,M.aRC,null,null,null,null,null,null,null,null,null)
D.fbG=new C.H(!0,A.aN,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyi=new C.y("Planet Earth",null,D.fbG,null,null,null,null,null,null,null,null,null)
D.fzv=new C.y("Ready-made circuits",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fA7=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fAq=new C.y("UNIVERSE EXPLORER",null,I.a83,null,null,null,null,null,null,null,null,null)
D.fCY=new C.y("SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fgt=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDu=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fgt,null,null,null,null,null,null,null,null,null)
D.fEH=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7Y,null,null,null,null,null,null,null,null,null)
D.fFa=new C.y("NGMY",null,A.uU,null,null,null,null,null,null,null,null,null)
D.fFn=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.U1,null,null,null,null,null,null,null,null,null)
D.fFK=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kI,null,null,null,null,null,null,null,null,null)
D.fGI=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wC,null,null,null,null,null,null,null,null,null)
D.fGK=new C.y("TOOLBOX",null,I.a83,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hgK=null
$.hgJ=null
$.hmO=0
$.hOL=C.U(x.N,x.k)
$.hPl=C.U(x.N,x.k)
$.hg4=null
$.hP6=C.U(x.N,x.k)
$.hQ9=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ikH","bDY",()=>{var v="led"
return C.a([B.ay_("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fhP(),v),B.ay_("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fhQ(),v),B.ay_("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fhR(),v),B.ay_("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fhY(),v),B.ay_("Not both","Make the light go OFF only when both switches are ON.",2,new B.fhZ(),v),B.ay_("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fi_(),"buzzer")],C.ax("O<baE>"))})
w($,"il8","bDZ",()=>C.a([B.oD("UNIVERSE","Earth, space and gravity",A.Oa,A.aN,new B.fif()),B.oD("ELECTRONICS LAB","Batteries, wires, real circuits",Af.BO,A.aN,new B.fig()),B.oD("DISCOVERY LAB","Body Explorer: a real 3D human",D.a08,A.b2,new B.fih()),B.oD("TOOLBOX","Converter, clock, games",T.alq,A.cs,new B.fis()),B.oD("MOLECULE MAKER","Join atoms into real molecules",A.NC,A.hm,new B.fiu()),B.oD("DNA LAB","Copy DNA, build a protein",D.a08,A.bY,new B.fiv()),B.oD("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yq,A.b2,new B.fiw()),B.oD("BALANCE LAB","Levers, weight and torque",D.bI6,A.aM,new B.fix()),B.oD("GEAR LAB","Teeth, speed and force",A.BY,A.cs,new B.fiy()),B.oD("LASER MAZE","Bend the beam with mirrors",I.alP,A.av,new B.fiz()),B.oD("LIGHT MIXER","Match colours with light",D.bFO,A.b8,new B.fiA()),B.oD("CIPHER LAB","Make and crack secret codes",A.yA,A.aN,new B.fii()),B.oD("REACTION LAB","Wire parts together",A.yE,A.bv,new B.fij()),B.oD("SPARK PAINTER","Paint with light",A.a0a,A.bY,new B.fik()),B.oD("ROCKET LANDER","Land softly on the pad",A.no,A.aN,new B.fil()),B.oD("ORBIT STUDIO","Slingshot planets",A.mA,A.cs,new B.fim()),B.oD("SWARM STUDIO","A living school of fish",A.NC,A.b2,new B.fin()),B.oD("CHAIN BURST","One tap, a whole chain",A.h9,A.bY,new B.fio()),B.oD("TITLE ANIMATOR","Make a moving title",A.yx,A.bH,new B.fip()),B.oD("CIRCUIT LAB","Connect logic, learn it",A.a0A,A.cl,new B.fiq()),B.oD("MARBLE MUSIC","Marbles ring the notes",D.bFt,A.b8,new B.fir()),B.oD("ORBIT SEQUENCER","Planets play the tune",D.bHU,A.bu,new B.fit())],C.ax("O<bsw>")))
w($,"imG","qj",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.QH[v]
t.n(0,u.a,u)}return t})
w($,"ikI","ahK",()=>C.a([B.FA("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fi0()),B.FA("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fi1()),B.FA("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fi2()),B.FA("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fi3()),B.FA("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fi4()),B.FA("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fhS()),B.FA("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fhT()),B.FA("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fhU()),B.FA("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fhV()),B.FA("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fhW()),B.FA("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fhX())],C.ax("O<baF>")))
w($,"ila","hvd",()=>C.a([B.a0J("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fiI()),B.a0J("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c9,A.bz,new B.fiJ()),B.a0J("Breathe","Calm down in a minute","\ud83e\udee7",A.hm,A.cA,new B.fiK()),B.a0J("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b6,new B.fiL()),B.a0J("Memory Match","Find the pairs","\ud83c\udccf",A.aN,A.cb,new B.fiM()),B.a0J("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bc,new B.fiN()),B.a0J("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.fiO()),B.a0J("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fiP())],C.ax("O<btR>")))
w($,"il9","hvc",()=>C.a([B.af4("EARTH GLOBE","Turn it, tap a country",A.mA,A.aN,new B.fiB()),B.af4("SOLAR SYSTEM","The Sun and its worlds",D.bFx,A.aM,new B.fiC()),B.af4("GRAVITY LAB","Drop, weigh, orbit",D.amy,A.cs,new B.fiD()),B.af4("BLACK HOLE","Throw in a star",A.G_,A.bu,new B.fiE()),B.af4("GALAXY","Build, tilt, collide",A.ye,A.h4,new B.fiF()),B.af4("SIZE COMPARE","Earth next to a star",D.bFQ,A.bY,new B.fiG()),B.af4("SEASONS & MOON","Why it is summer",A.vM,A.bv,new B.fiH())],C.ax("O<btM>")))})()};
(a=>{a["d92dt9YOOgi0TrFizLaia+uG6ro="]=a.current})($__dart_deferred_initializers__);