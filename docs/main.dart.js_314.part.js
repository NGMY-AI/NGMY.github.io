((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Aa,A2,A3,I,P,A4,Ab,A5,A6,G,Ac,Ad,A7,Ae,Y,Af,Ag,N,Q,Ah,Ai,Z,O,V,Aj,Ak,R,M,Al,W,K,S,Am,E,F,L,B={
byN(d){return B.hR7(d)},
hR7(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byN=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qP(C.n6(""),d,A.hD,null,null).d7(0,A.Y6),$async$byN)
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
return C.i($async$byN,v)},
i1K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Q0[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hn(D.Q0,new B.fwN())
if(w==null)w=A.d.gI(D.Q0)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qg().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajC(w.a,w.b,m,w,s,!1)},
hWq(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.Qr,new B.fn_(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i9A(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cK(b2,"{")
v=A.a.oD(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aJ(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.u(J.q(q,"kind"))
o=C.u(J.q(q,"id"))
if(!$.qg().ai(0,p)||J.f2(s,o)||J.ad(t)>=8)continue
J.ci(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.di7[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dR(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dR(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ci(t,new C.e7([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.u(J.q(g,0))
e=C.u(J.q(g,2))
d=A.o.D(A.k.N(C.dR(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dR(J.q(g,3))),0,1)
if(J.f2(s,f)&&J.f2(s,e)&&!J.A(f,e))J.ci(i,new C.cA([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gR(a0)
J.ci(a1,C.u(a2))}a3=a1
a0=J.q(u,"title")
a0=C.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mz(a0,C.u(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.u(a5==null?"":a5)
return new B.ajC(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i0k(d){var w,v,u=B.h6h()
d.B(u)
for(w=0;w<60;++w)u.v3(0,0.03333333333333333)
v=u.a
return A.d.b6(v,new B.ftL(u))&&!A.d.d6(v,new B.ftM())},
i0j(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qg().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dgu,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hPI(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i1J(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qg().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qr[u]
if(A.d.b6(w,new B.fwK(s)))if(!C.cS(r,s.b.toLowerCase(),0))v=C.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fwL(e),C.U(w).k("a_<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cJ(w,0,new B.fwM())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qg().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajC:function ajC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fwN:function fwN(){},
fn_:function fn_(){},
ftL:function ftL(d){this.a=d},
ftM:function ftM(){},
fwK:function fwK(d){this.a=d},
fwL:function fwL(d){this.a=d},
fwM:function fwM(){},
Vc:function Vc(d,e){this.c=d
this.a=e},
bjt:function bjt(d,e,f,g,h){var _=this
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
e7B:function e7B(d){this.a=d},
e7C:function e7C(d,e,f){this.a=d
this.b=e
this.c=f},
e7D:function e7D(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7P:function e7P(d,e){this.a=d
this.b=e},
e7K:function e7K(d){this.a=d},
e7I:function e7I(d,e){this.a=d
this.b=e},
e7J:function e7J(d,e,f){this.a=d
this.b=e
this.c=f},
e7L:function e7L(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7M:function e7M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e7F:function e7F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7S:function e7S(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7T:function e7T(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e7U:function e7U(d,e){this.a=d
this.b=e},
e7V:function e7V(d,e){this.a=d
this.b=e},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7X:function e7X(d,e){this.a=d
this.b=e},
bz8(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hjL(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zM,A.L,w,w),A.aB,C.bW(A.fR,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.W9,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FY:function FY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uM:function uM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VE:function VE(d){this.a=d},
aDP:function aDP(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.l2$=i
_.fV$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
enH:function enH(){},
eo0:function eo0(d){this.a=d},
eo_:function eo_(d,e){this.a=d
this.b=e},
eo1:function eo1(){},
eo2:function eo2(){},
enJ:function enJ(d,e,f){this.a=d
this.b=e
this.c=f},
enI:function enI(d,e){this.a=d
this.b=e},
eny:function eny(d){this.a=d},
enz:function enz(d){this.a=d},
enA:function enA(d){this.a=d},
enB:function enB(d){this.a=d},
enC:function enC(d){this.a=d},
enD:function enD(d){this.a=d},
enE:function enE(d){this.a=d},
enF:function enF(d){this.a=d},
enG:function enG(d){this.a=d},
enw:function enw(d){this.a=d},
enx:function enx(d){this.a=d},
env:function env(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
enP:function enP(d){this.a=d},
enQ:function enQ(d){this.a=d},
enM:function enM(d){this.a=d},
enR:function enR(d){this.a=d},
enL:function enL(d){this.a=d},
enS:function enS(d){this.a=d},
enT:function enT(d){this.a=d},
enK:function enK(d){this.a=d},
enV:function enV(d,e){this.a=d
this.b=e},
enO:function enO(d,e){this.a=d
this.b=e},
enW:function enW(d){this.a=d},
enX:function enX(d){this.a=d},
enY:function enY(d){this.a=d},
enZ:function enZ(d){this.a=d},
enN:function enN(d){this.a=d},
bgs:function bgs(d,e){this.b=d
this.a=e},
aLG:function aLG(){},
bwM:function bwM(){},
cF2(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cF2=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qS().jF(0,"assets/data/body3d.bin"),$async$cF2)
case 3:d=a1
$.hf7=J.f_(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aRM(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jq(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d5D[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2P(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aYe))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9z(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cF2,v)},
aRz:function aRz(d,e,f){this.a=d
this.b=e
this.c=f},
a2P:function a2P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9z:function b9z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U4:function U4(d){this.a=d},
aCe:function aCe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.l2$=t
_.fV$=u
_.fu$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dEZ:function dEZ(d){this.a=d},
dEY:function dEY(d,e){this.a=d
this.b=e},
dEB:function dEB(d,e){this.a=d
this.b=e},
dEC:function dEC(){},
dF_:function dF_(){},
dED:function dED(d,e){this.a=d
this.b=e},
dEE:function dEE(d){this.a=d},
dEF:function dEF(){},
dEG:function dEG(d){this.a=d},
dEI:function dEI(d,e){this.a=d
this.b=e},
dEH:function dEH(d){this.a=d},
dEy:function dEy(d,e,f){this.a=d
this.b=e
this.c=f},
dEz:function dEz(d){this.a=d},
dEA:function dEA(d){this.a=d},
dEP:function dEP(d){this.a=d},
dEQ:function dEQ(d,e){this.a=d
this.b=e},
dER:function dER(d,e){this.a=d
this.b=e},
dES:function dES(d){this.a=d},
dEO:function dEO(d,e){this.a=d
this.b=e},
dET:function dET(d,e){this.a=d
this.b=e},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEU:function dEU(d){this.a=d},
dEM:function dEM(d){this.a=d},
dEV:function dEV(d){this.a=d},
dEL:function dEL(d){this.a=d},
dEW:function dEW(d){this.a=d},
dEK:function dEK(d){this.a=d},
dEX:function dEX(d){this.a=d},
dEJ:function dEJ(d){this.a=d},
aKI:function aKI(){},
aKJ:function aKJ(){},
c0i:function c0i(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c0j:function c0j(d,e){this.a=d
this.b=e},
c0k:function c0k(d){this.a=d},
axJ(d,e,f,g,h){return new B.bah(d,e,f,g,h)},
fY0(d,e,f,g,h,i){return $.hN5.c8(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.cLP(d,e,f,i,g,h))},
y_:function y_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cf:function Cf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nn:function nn(d,e,f){this.a=d
this.b=e
this.c=f},
bah:function bah(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgH:function fgH(){},
fgI:function fgI(){},
fgJ:function fgJ(){},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgS:function fgS(){},
U9:function U9(d){this.a=d},
aCh:function aCh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.l2$=n
_.fV$=o
_.fu$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dH9:function dH9(d){this.a=d},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGR:function dGR(){},
dHa:function dHa(){},
dGM:function dGM(d,e){this.a=d
this.b=e},
dGN:function dGN(d,e){this.a=d
this.b=e},
dGS:function dGS(d,e,f){this.a=d
this.b=e
this.c=f},
dGH:function dGH(){},
dGI:function dGI(){},
dGJ:function dGJ(d){this.a=d},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGL:function dGL(d,e,f){this.a=d
this.b=e
this.c=f},
dGT:function dGT(){},
dGU:function dGU(d,e){this.a=d
this.b=e},
dGV:function dGV(d){this.a=d},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dGG:function dGG(d,e,f){this.a=d
this.b=e
this.c=f},
dH3:function dH3(d){this.a=d},
dH2:function dH2(d){this.a=d},
dH4:function dH4(d){this.a=d},
dH1:function dH1(d){this.a=d},
dH_:function dH_(d){this.a=d},
dH0:function dH0(d){this.a=d},
dGZ:function dGZ(d){this.a=d},
dGW:function dGW(d){this.a=d},
dGY:function dGY(d){this.a=d},
dH5:function dH5(d,e){this.a=d
this.b=e},
dH6:function dH6(d,e){this.a=d
this.b=e},
dH7:function dH7(d){this.a=d},
dGX:function dGX(d){this.a=d},
dH8:function dH8(d,e){this.a=d
this.b=e},
baA:function baA(d,e){this.b=d
this.a=e},
cLP:function cLP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKO:function aKO(){},
bwv:function bwv(){},
hDV(){return new B.Na(null)},
oA(d,e,f,g,h){return new B.bs6(d,e,f,g,h)},
bqx(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fYw(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Na:function Na(d){this.a=d},
Ke:function Ke(d,e){this.a=d
this.b=e},
Au:function Au(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCy:function aCy(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dMY:function dMY(d){this.a=d},
dN0:function dN0(d,e){this.a=d
this.b=e},
dN_:function dN_(d){this.a=d},
bs6:function bs6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh7:function fh7(){},
fh8:function fh8(){},
fh9:function fh9(){},
fhk:function fhk(){},
fhm:function fhm(){},
fhn:function fhn(){},
fho:function fho(){},
fhp:function fhp(){},
fhq:function fhq(){},
fhr:function fhr(){},
fhs:function fhs(){},
fha:function fha(){},
fhb:function fhb(){},
fhc:function fhc(){},
fhd:function fhd(){},
fhe:function fhe(){},
fhf:function fhf(){},
fhg:function fhg(){},
fhh:function fhh(){},
fhi:function fhi(){},
fhj:function fhj(){},
fhl:function fhl(){},
bqy:function bqy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eYo:function eYo(d){this.a=d},
eYn:function eYn(d,e){this.a=d
this.b=e},
eYl:function eYl(d){this.a=d},
eYp:function eYp(d){this.a=d},
eYm:function eYm(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e,f){this.c=d
this.d=e
this.a=f},
adw:function adw(d,e,f){this.c=d
this.d=e
this.a=f},
PS:function PS(d,e,f,g,h,i,j,k,l,m){var _=this
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
brw:function brw(d,e){this.b=d
this.a=e},
br1:function br1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9g:function b9g(d,e){this.b=d
this.a=e},
aGO:function aGO(d,e){this.c=d
this.a=e},
aGP:function aGP(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cP$=e
_.b4$=f
_.c=_.a=null},
eY4:function eY4(d){this.a=d},
eY3:function eY3(d){this.a=d},
eY2:function eY2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eY1:function eY1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eY_:function eY_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXZ:function eXZ(d,e,f){this.a=d
this.b=e
this.c=f},
eY0:function eY0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXY:function eXY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYc:function eYc(d){this.a=d},
eYb:function eYb(d){this.a=d},
eYd:function eYd(d,e){this.a=d
this.b=e},
eYe:function eYe(d,e){this.a=d
this.b=e},
eYf:function eYf(d,e){this.a=d
this.b=e},
eYa:function eYa(d,e,f){this.a=d
this.b=e
this.c=f},
eYg:function eYg(d,e,f){this.a=d
this.b=e
this.c=f},
eY9:function eY9(d){this.a=d},
eY5:function eY5(d){this.a=d},
eYh:function eYh(d){this.a=d},
eYi:function eYi(d){this.a=d},
eY8:function eY8(d,e){this.a=d
this.b=e},
eYj:function eYj(d,e){this.a=d
this.b=e},
eY7:function eY7(d,e){this.a=d
this.b=e},
eYk:function eYk(d,e){this.a=d
this.b=e},
eY6:function eY6(d,e){this.a=d
this.b=e},
eXW:function eXW(){},
eXX:function eXX(){},
bqa:function bqa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpC:function bpC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9W:function b9W(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpE:function bpE(d,e,f){this.b=d
this.c=e
this.a=f},
btB:function btB(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMx:function aMx(){},
hlb(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.v(w,0)),u=e.aC(0,new C.v(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bgr(d,e,f,g,h,i){return $.hNG.c8(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.dgO(d,e,f,i,g,h))},
a02:function a02(d,e){this.a=d
this.b=e},
q4:function q4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qJ:function qJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cj:function Cj(d,e){this.a=d
this.b=e},
Z0:function Z0(d,e){this.a=d
this.b=e},
aeu:function aeu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0f:function a0f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ct:function Ct(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abn:function abn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abE:function abE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adA:function adA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgp:function bgp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bI$=0},
dgS:function dgS(d){this.a=d},
dgT:function dgT(d){this.a=d},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d){this.a=d},
dgR:function dgR(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgV:function dgV(d){this.a=d},
dgW:function dgW(d){this.a=d},
dgX:function dgX(d){this.a=d},
dgY:function dgY(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
FJ:function FJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VD:function VD(d){this.a=d},
aDO:function aDO(d,e,f,g,h,i,j){var _=this
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
en1:function en1(d){this.a=d},
emR:function emR(d){this.a=d},
emT:function emT(){},
emU:function emU(){},
emX:function emX(){},
emY:function emY(d,e,f){this.a=d
this.b=e
this.c=f},
emZ:function emZ(d){this.a=d},
en_:function en_(d){this.a=d},
emV:function emV(){},
emW:function emW(d){this.a=d},
enr:function enr(d){this.a=d},
en0:function en0(){},
emN:function emN(d){this.a=d},
en3:function en3(d){this.a=d},
en2:function en2(d){this.a=d},
en5:function en5(){},
en4:function en4(d,e){this.a=d
this.b=e},
emQ:function emQ(){},
emO:function emO(d){this.a=d},
emP:function emP(d){this.a=d},
enp:function enp(d){this.a=d},
eno:function eno(d){this.a=d},
enq:function enq(d){this.a=d},
enf:function enf(d,e){this.a=d
this.b=e},
enn:function enn(d){this.a=d},
enl:function enl(d){this.a=d},
enm:function enm(d){this.a=d},
enk:function enk(d){this.a=d},
enj:function enj(d){this.a=d},
eng:function eng(d){this.a=d},
enh:function enh(d){this.a=d},
eni:function eni(d){this.a=d},
emS:function emS(){},
enb:function enb(d){this.a=d},
enc:function enc(d){this.a=d},
ena:function ena(d){this.a=d},
end:function end(d){this.a=d},
en9:function en9(d){this.a=d},
ene:function ene(d){this.a=d},
en8:function en8(d){this.a=d},
en7:function en7(d){this.a=d},
en6:function en6(d,e){this.a=d
this.b=e},
bgq:function bgq(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgO:function dgO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLE:function aLE(){},
bl_:function bl_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PJ:function PJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VS:function VS(d){this.a=d},
bk3:function bk3(d,e,f,g,h,i,j,k){var _=this
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
ez6:function ez6(d){this.a=d},
ez4:function ez4(d){this.a=d},
ez5:function ez5(){},
eyI:function eyI(){},
eyH:function eyH(){},
eyR:function eyR(d,e){this.a=d
this.b=e},
eyT:function eyT(d){this.a=d},
eyX:function eyX(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
ez_:function ez_(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d,e){this.a=d
this.b=e},
ez0:function ez0(d){this.a=d},
eyP:function eyP(d){this.a=d},
ez1:function ez1(d,e){this.a=d
this.b=e},
eyO:function eyO(d,e){this.a=d
this.b=e},
ez2:function ez2(d){this.a=d},
eyN:function eyN(d,e){this.a=d
this.b=e},
ez3:function ez3(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyV:function eyV(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyW:function eyW(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
brr:function brr(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
W3:function W3(d){this.a=d},
aE3:function aE3(d,e,f,g){var _=this
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
eFG:function eFG(d,e){this.a=d
this.b=e},
eFH:function eFH(d,e,f){this.a=d
this.b=e
this.c=f},
eFI:function eFI(d){this.a=d},
eFF:function eFF(){},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFL:function eFL(d){this.a=d},
eFC:function eFC(d){this.a=d},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFN:function eFN(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFA:function eFA(d,e){this.a=d
this.b=e},
aLN:function aLN(){},
aLT:function aLT(){},
a_x:function a_x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VA:function VA(d){this.a=d},
aDG:function aDG(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.l2$=i
_.fV$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejm:function ejm(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejj:function ejj(d){this.a=d},
ejo:function ejo(d){this.a=d},
eji:function eji(d,e){this.a=d
this.b=e},
ejq:function ejq(d){this.a=d},
ejh:function ejh(d,e){this.a=d
this.b=e},
ejr:function ejr(d){this.a=d},
ejg:function ejg(d,e){this.a=d
this.b=e},
ejs:function ejs(d){this.a=d},
ejf:function ejf(d){this.a=d},
ejt:function ejt(d){this.a=d},
eje:function eje(d){this.a=d},
eju:function eju(d){this.a=d},
ejd:function ejd(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejc:function ejc(d){this.a=d},
ejp:function ejp(d){this.a=d},
bkN:function bkN(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abu:function abu(d,e,f){this.a=d
this.b=e
this.c=f},
VZ:function VZ(d){this.a=d},
bk8:function bk8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.l2$=j
_.fV$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eF7:function eF7(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF6:function eF6(d){this.a=d},
eEX:function eEX(d,e){this.a=d
this.b=e},
eEY:function eEY(d){this.a=d},
eEV:function eEV(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEU:function eEU(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eF_:function eF_(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eF0:function eF0(d){this.a=d},
eER:function eER(d){this.a=d},
eF1:function eF1(d){this.a=d},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eEP:function eEP(d,e){this.a=d
this.b=e},
eF3:function eF3(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
eF4:function eF4(d){this.a=d},
eEK:function eEK(d,e){this.a=d
this.b=e},
eF5:function eF5(d){this.a=d},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
bsi:function bsi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abX:function abX(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
U7:function U7(d){this.a=d},
aCg:function aCg(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.l2$=i
_.fV$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dGi:function dGi(d){this.a=d},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGj:function dGj(){},
dGk:function dGk(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dGb:function dGb(d){this.a=d},
dGa:function dGa(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGd:function dGd(d){this.a=d},
dGg:function dGg(d){this.a=d},
bag:function bag(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cLm:function cLm(d){this.a=d},
aKM:function aKM(){},
bwu:function bwu(){},
aLB:function aLB(){},
bwL:function bwL(){},
aLQ:function aLQ(){},
bwT:function bwT(){},
FF:function FF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acM:function acM(d,e,f){this.a=d
this.b=e
this.c=f},
Vu:function Vu(d){this.a=d},
bjI:function bjI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.l2$=j
_.fV$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
ef1:function ef1(d,e){this.a=d
this.b=e},
efq:function efq(d){this.a=d},
eff:function eff(d){this.a=d},
ef6:function ef6(d){this.a=d},
efg:function efg(d,e){this.a=d
this.b=e},
efh:function efh(d){this.a=d},
ef5:function ef5(d){this.a=d},
efd:function efd(d){this.a=d},
efe:function efe(d){this.a=d},
efc:function efc(d){this.a=d},
efi:function efi(d,e){this.a=d
this.b=e},
efb:function efb(d,e){this.a=d
this.b=e},
efj:function efj(d,e){this.a=d
this.b=e},
efa:function efa(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
ef9:function ef9(d,e){this.a=d
this.b=e},
efl:function efl(d){this.a=d},
ef8:function ef8(d,e){this.a=d
this.b=e},
efm:function efm(d){this.a=d},
ef7:function ef7(d){this.a=d},
efn:function efn(d){this.a=d},
ef4:function ef4(d){this.a=d},
efo:function efo(d){this.a=d},
ef3:function ef3(d){this.a=d},
efp:function efp(d){this.a=d},
ef2:function ef2(d){this.a=d},
bhk:function bhk(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adh:function adh(d,e){this.a=d
this.b=e
this.c=-1000},
Vz:function Vz(d){this.a=d},
aDF:function aDF(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.l2$=i
_.fV$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
eiW:function eiW(d,e){this.a=d
this.b=e},
eiX:function eiX(d,e,f){this.a=d
this.b=e
this.c=f},
ej3:function ej3(d){this.a=d},
ej2:function ej2(d){this.a=d},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej5:function ej5(d){this.a=d},
ej1:function ej1(d){this.a=d},
ej6:function ej6(d){this.a=d},
ej0:function ej0(d,e){this.a=d
this.b=e},
ej7:function ej7(d,e){this.a=d
this.b=e},
ej_:function ej_(d,e){this.a=d
this.b=e},
ej8:function ej8(d,e){this.a=d
this.b=e},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
ej9:function ej9(d){this.a=d},
eja:function eja(d){this.a=d},
eiY:function eiY(d){this.a=d},
ejb:function ejb(d){this.a=d},
bkO:function bkO(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLz:function aLz(){},
bwJ:function bwJ(){},
aLA:function aLA(){},
bwK:function bwK(){},
fd_(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8e,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ij,w,w,1/0)},
i28(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdN(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bL(0,new B.fx3(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w7.h(0,d[n]).a)return!1
m=C.ev([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h04(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cK(w,v[0])*16+A.a.cK(w,v[1])*4+A.a.cK(w,v[2])]},
tg:function tg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b99:function b99(d,e){this.a=d
this.b=e},
fx3:function fx3(d,e){this.a=d
this.b=e},
Vx:function Vx(d){this.a=d},
aDD:function aDD(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
eiq:function eiq(d){this.a=d},
eip:function eip(d,e){this.a=d
this.b=e},
eic:function eic(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ei7:function ei7(d){this.a=d},
eib:function eib(d,e){this.a=d
this.b=e},
eia:function eia(d,e){this.a=d
this.b=e},
ei8:function ei8(d){this.a=d},
ei9:function ei9(d,e){this.a=d
this.b=e},
eik:function eik(){},
eil:function eil(d){this.a=d},
eij:function eij(d){this.a=d},
eim:function eim(d){this.a=d},
eii:function eii(d){this.a=d},
eig:function eig(d){this.a=d},
eih:function eih(d,e){this.a=d
this.b=e},
eid:function eid(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eif:function eif(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
eie:function eie(d,e){this.a=d
this.b=e},
eio:function eio(d,e){this.a=d
this.b=e},
bi1:function bi1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
doY:function doY(d,e){this.a=d
this.b=e},
Uv:function Uv(d){this.a=d},
biY:function biY(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dP2:function dP2(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dOS:function dOS(d){this.a=d},
dOR:function dOR(){},
dOT:function dOT(d){this.a=d},
dOQ:function dOQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP0:function dP0(){},
dOW:function dOW(){},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e){this.a=d
this.b=e},
dOY:function dOY(d){this.a=d},
dOU:function dOU(d){this.a=d},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dP_:function dP_(d,e){this.a=d
this.b=e},
UL:function UL(d){this.a=d},
aCK:function aCK(d,e,f,g,h){var _=this
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
dRS:function dRS(d){this.a=d},
dRR:function dRR(d,e){this.a=d
this.b=e},
dRF:function dRF(){},
dRE:function dRE(d,e){this.a=d
this.b=e},
dRG:function dRG(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRL:function dRL(d){this.a=d},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
bdl:function bdl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d44:function d44(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d46:function d46(d,e,f){this.a=d
this.b=e
this.c=f},
d45:function d45(d,e){this.a=d
this.b=e},
aL_:function aL_(){},
bzE(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8e,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ij,w,w,1/0)},
fqs(d,e,f,g,h){var w,v,u=null,t=C.h2(u,u,u,u,C.d3(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dP,A.c5)
t.em()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.v(v/2,w.gbd(w)/2))
t.a4(d,w)},
i_c(){var w,v,u,t,s,r,q,p,o=new C.eE()
o.dt(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aw(5)
if(r.L(0,p))q.push(new C.z(p,1+o.aw(2+A.o.an(t,3))))}A.d.aY(q,new B.frs())
w.push(new B.aRp(q))}return w},
a1t(d,e){var w,v,u,t
for(w=new C.X6(d),v="";w.C();){u=C.jH(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jH(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ibY(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.X6(d),v=0,u="";w.C();){t=C.jH(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jH(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRp:function aRp(d){this.a=d},
bFE:function bFE(){},
frs:function frs(){},
U_:function U_(d){this.a=d},
biC:function biC(d,e,f,g,h,i){var _=this
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
dCt:function dCt(){},
dCG:function dCG(d){this.a=d},
dCF:function dCF(d,e,f){this.a=d
this.b=e
this.c=f},
dCH:function dCH(d){this.a=d},
dCE:function dCE(d,e){this.a=d
this.b=e},
dCu:function dCu(d,e){this.a=d
this.b=e},
dCz:function dCz(){},
dCA:function dCA(d){this.a=d},
dCy:function dCy(d){this.a=d},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCC:function dCC(d,e){this.a=d
this.b=e},
dCw:function dCw(d,e){this.a=d
this.b=e},
dCD:function dCD(d){this.a=d},
dCv:function dCv(d){this.a=d},
b9l:function b9l(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDU:function cDU(d,e){this.a=d
this.b=e},
UZ:function UZ(d){this.a=d},
bj9:function bj9(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dVV:function dVV(d){this.a=d},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVW:function dVW(d){this.a=d},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e,f){this.a=d
this.b=e
this.c=f},
dVP:function dVP(d){this.a=d},
dVO:function dVO(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVR:function dVR(d){this.a=d},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVS:function dVS(d,e){this.a=d
this.b=e},
beP:function beP(d,e,f){this.b=d
this.c=e
this.a=f},
dc4:function dc4(d,e){this.a=d
this.b=e},
dc5:function dc5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U8:function U8(d){this.a=d},
biP:function biP(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dGF:function dGF(d){this.a=d},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGn:function dGn(){},
dGw:function dGw(d){this.a=d},
dGv:function dGv(){},
dGx:function dGx(d){this.a=d},
dGu:function dGu(){},
dGy:function dGy(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGA:function dGA(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGC:function dGC(d){this.a=d},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGD:function dGD(d){this.a=d},
dGo:function dGo(d,e){this.a=d
this.b=e},
aKE:function aKE(){},
aL7:function aL7(){},
hqg(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h6h(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4b(w,v,u,A.cG,C.T(x.N,x.y))},
hxO(d,e,f){var w=d.c,v=e===0?-1:1
return new C.v(w*f.a+v*B.h6i(d),d.d*f.b)},
h6i(d){return 42+(D.m0.ai(0,d.b)?(d.ch-1)*38:0)},
ec:function ec(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tt:function tt(d,e,f,g){var _=this
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
aa2:function aa2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ab9:function ab9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLR:function bLR(){},
bM1:function bM1(d){this.a=d},
bLX:function bLX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bM2:function bM2(d){this.a=d},
bM3:function bM3(d){this.a=d},
bM5:function bM5(d){this.a=d},
bM6:function bM6(d){this.a=d},
bM4:function bM4(d){this.a=d},
bM7:function bM7(d,e,f){this.a=d
this.b=e
this.c=f},
bM8:function bM8(d){this.a=d},
bLT:function bLT(d){this.a=d},
bLU:function bLU(d){this.a=d},
bLS:function bLS(d){this.a=d},
bLV:function bLV(d,e,f){this.a=d
this.b=e
this.c=f},
bLW:function bLW(d){this.a=d},
bLQ:function bLQ(d){this.a=d},
bM9:function bM9(d,e){this.a=d
this.b=e},
bLY:function bLY(d,e){this.a=d
this.b=e},
bM0:function bM0(d){this.a=d},
bM_:function bM_(d){this.a=d},
bLZ:function bLZ(d){this.a=d},
aip:function aip(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGQ:function bGQ(){},
bGR:function bGR(){},
mz:function mz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckC:function ckC(d){this.a=d},
i9w(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fIp(),c9=new B.fIr(),d0=new B.fIs(),d1=new B.fIq(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bL,A.bK))
d3.bE(D.e8b,D.e5Z,c9.$2(A.dB,1.4))
d3.bE(D.e5P,D.e5O,c9.$2(A.bq,2.4))
d3.bE(D.e5Q,Y.aGH,c9.$2(A.bq,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Rd
d3.af(D.e5z,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.v(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aMB,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.bq))
d3.af(A.cJ,13,c8.$1(c7?A.aN.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j8(0,d4.y*0.6)
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
r.delete()}}d3.af(D.e87,2.4,c8.$1(c7?A.be:A.ak))
d3.af(D.e8P,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.eb))
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
d3.aR(d2,c8.$1(A.aw.j(0.7)))}d3.aR(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j8(0,d4.y)
d3.bE(D.a5p,D.aGX,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f0).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.ip,3,c8.$1(c7?A.be:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a39[m]
r=c9.$2(A.bq,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cg(A.J,6,24+Math.sin(d4.y*3)*4)
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
d3.aR(w,d1.$3(D.eNb,A.aM,A.d5))
d3.b_(D.eMB,c8.$1(A.dy))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j8(0,d4.y*2)
d3.bE(A.J,D.e5T,c9.$2(A.bO,2.4))
d3.bE(A.a5o,D.e5S,c9.$2(A.hM,1))
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
d3.aR(d2,c8.$1(A.bM.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.eNh,A.bl,A.ct))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aR(k,c8.$1(A.eb))
d3.af(D.e5X,7,c8.$1(c7?A.c:A.dy))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.ml))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bn(d5*17),3)!==0
else j=!1
i=j?A.bX:D.bic
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bX.j(0.35))
t.z=A.lv
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e8h,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.eNn,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bM.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j8(0,d4.y*0.5)
d3.hU(C.cg(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.ml))
if(c7)d6.$5(d3,"0:"+A.a.aV(A.o.u(59-A.o.E(A.k.bn(d5),60)),2,"0"),D.e5Y,A.b2,6.5)
d3.af(D.e69,4,c8.$1(A.dy))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.S1,10,c8.$1(c7?A.bI:A.bq))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j8(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e8R,A.c,16)
d2.restore()
d3.af(A.kb,6,c8.$1(A.d_))
d3.af(A.kb,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.S1,14+v*6+A.k.E(t,6))
r=c9.$2(A.bI.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c0(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.e8g,D.e8N,c9.$2(A.bq,4))
d2=d3.a
J.by(d2.save())
d3.j8(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.eNc,A.bO,A.ak))
d3.af(D.aGJ,8,c8.$1(A.az))
d3.af(D.aGJ,4.5,c8.$1(c7?A.aN:A.ct))
d3.af(D.e8e,2.2,c8.$1(c7&&A.o.E(A.k.bn(d5*1.6),2)===0?A.aw:A.kr))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e8p,A.aw,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.eNk,A.iX,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.v(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b_(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.b_(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bX))}d3.af(D.e8a,4,c8.$1(A.aW))
d3.af(D.e5U,2.4,c8.$1(A.aw))
d3.af(D.e66,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
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
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aR(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e5V,A.h4,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e8t,A.h4.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.e8j,3,c8.$1(c7?A.be:A.bq))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cz.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b_(D.eNe,c8.$1(F.ti))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.td(0,-1,1)
d3.hU(C.cg(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.cc))
d3.af(D.e6B,1.2,c8.$1(A.w))
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
d3.aR(e,d1.$3(D.eNI,A.c,A.bz))
d3.b_(D.eNH,c8.$1(c7?A.dQ:A.bq))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aR(s,c8.$1(A.eq))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.Rd
d3.af(D.e5A,14,d2)}return!0
case"discoball":d3.bE(D.e5F,K.aGF,c9.$2(A.dy,1.4))
d3.af(A.J,16,d1.$3(D.eN_,A.aQ,A.ak))
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
r=c8.$1(D.d6B[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.eMY,A.cr,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.eMR,A.aL,A.bK))
d3.bE(D.e5E,D.e5G,c9.$2(A.bq,1.6))
d3.af(D.e5H,2.2,c8.$1(c7?A.aw:A.bq))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3b[m]
if(c7)t=a1?A.b8:A.f2
else t=A.ct
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j8(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a5l,c9.$2(A.bK,4))
d2.restore()
d3.bE(D.e83,D.e8n,c9.$2(A.bK,4))
d3.b_(D.eNG,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axF[m]+1,d2,10,14,2)
p=C.aq(A.bM,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.et(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.eNd,A.bO,A.bl))
for(m=0;m<2;++m){l=D.axF[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.az).H()
t.drawRRect(C.et(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mI
r=s.H()
t.drawRRect(C.et(d2),r)
r.delete()}}d3.bE(D.e6d,D.e6u,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.ct))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mQ(1,a3,0.8,1).iF():A.eb
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mI
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dy))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.eN2,A.cz,A.L_))
d3.af(D.e8u,8,c8.$1(A.qT))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j8(0,d4.y)
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
r=c8.$1(A.fV).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e72,3.2,c8.$1(A.fV.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j8(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.eNf,A.je,A.tl))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.eb))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mI
d3.af(D.e68,8,d2)}return!0
case"headphones":d3.fa(C.cg(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bq,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QE[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bu,A.pC).H()
d2.drawRRect(C.et(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.v(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c0(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.v(-4,-8-A.k.E(d5*14,8)),A.km,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.eMW,A.dy,A.eb))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aV(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aV(A.o.u(C.h1(a4)),2,"0"),D.e5L,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Ej,A.h4,g)
d2.toString
d6.$5(d3,"\u2665",new C.v(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bn(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.ml))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(a5),$.pv(),!0)
d2.translate(-27,-19)
E.L2(d3,D.eTg,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vh))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dM,A.dc))
d3.aE(a6,c9.$2(A.b_,1.2))
d3.af(D.aH3,9,c8.$1(A.az))
d3.af(D.aH3,6,c9.$2(A.d5,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e76,s,8.2)
d3.af(D.e6_,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.e8o,A.ad,6)
d6.$5(d3,"OUT",D.e6V,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bK,A.aw,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e5B,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.eMS,A.eb,A.hJ))
d6.$5(d3,"7805",D.a5p,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dcv[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c0(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e8Q,A.bk,9)
return!0
case"diode":d3.bE(D.aH7,D.aGS,c9.$2(A.e2,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b_(D.eMH,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.jt
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.e8c,A.aA,8)
return!0
case"ldr":d3.bE(D.aH7,D.a5p,c9.$2(A.e2,2.4))
d3.bE(D.aGX,D.aGS,c9.$2(A.e2,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.tu,1.6))
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
a8.e=null}d3.aR(a8,c9.$2(A.bM,1.4))
d2=C.aq(A.bq,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.v(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e84,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qO
break A}if("appletv"===d2){t=A.e2
break A}t=F.El
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
p.clipRRect(C.et(a5),$.pv(),!0)
p.translate(t,s)
E.h2s(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e6v,1.6,c8.$1(A.b2))}else{d3.aE(a5,c8.$1(D.vh))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aR(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dy))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.mG[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dy).H()
p=s.gbM().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e7I,A.bO,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.WX))
d6.$5(d3,"Apple TV",D.e77,A.bq,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bgI))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e8M,F.ti,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m0.h(0,d2)
b1=b0.b===D.wk
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
t.clipRRect(C.et(a5),$.pv(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.L2(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vh))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.v(0,t),new C.v(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.v(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.eb))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.e8T,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(C.c0(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aGD,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.eNo,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b8),$.pv(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.L2(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vh))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.WX))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.eNs,A.bL,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b9),$.pv(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.L2(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vh))
d3.af(D.aGy,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.WX))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c0),$.pv(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.L2(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vh))
d3.b_(D.eNy,c8.$1(A.bl))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dy))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c1),$.pv(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.L2(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.eNg,A.iA,A.dy))
d3.af(D.aGI,7,c8.$1(A.az))
d3.af(D.aGI,4,c8.$1(c7?A.dQ:A.ct))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.ml))
d3.aE(c2,c9.$2(A.bq,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cV(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aR(c3,c9.$2(A.aN,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.v(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bn(d5*2),5)),D.e73,A.c,10)
d6.$5(d3,"km/h",D.e70,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dy,A.eb))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c5),$.pv(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.L2(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lv
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bE(D.e8y,D.e8D,c9.$2(A.bl,4))
d3.bE(D.e6w,D.e6E,c9.$2(A.bl,4))
return!0}return!1},
fIp:function fIp(){},
fIr:function fIr(){},
fIs:function fIs(){},
fIq:function fIq(){},
h58(d,e,f,g){return new B.ain(d,g,f,e)},
Ft(d,e,f){return new B.bai(d,e,f)},
ain:function ain(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aio:function aio(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.l2$=i
_.fV$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGv:function bGv(d){this.a=d},
bGt:function bGt(d){this.a=d},
bGw:function bGw(){},
bGx:function bGx(d){this.a=d},
bGy:function bGy(d,e,f){this.a=d
this.b=e
this.c=f},
bGs:function bGs(d,e){this.a=d
this.b=e},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGr:function bGr(d,e,f){this.a=d
this.b=e
this.c=f},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGl:function bGl(){},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGn:function bGn(d,e){this.a=d
this.b=e},
bGo:function bGo(d){this.a=d},
bGp:function bGp(d){this.a=d},
bGN:function bGN(d){this.a=d},
bGO:function bGO(){},
bFY:function bFY(){},
bGP:function bGP(d,e){this.a=d
this.b=e},
bGM:function bGM(d,e,f){this.a=d
this.b=e
this.c=f},
bGH:function bGH(d){this.a=d},
bGE:function bGE(d,e,f){this.a=d
this.b=e
this.c=f},
bGF:function bGF(d,e){this.a=d
this.b=e},
bGI:function bGI(d){this.a=d},
bGC:function bGC(d,e){this.a=d
this.b=e},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGG:function bGG(d){this.a=d},
bGJ:function bGJ(d){this.a=d},
bGA:function bGA(d,e){this.a=d
this.b=e},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGK:function bGK(d){this.a=d},
bGz:function bGz(d){this.a=d},
bGL:function bGL(d){this.a=d},
bFZ:function bFZ(d,e){this.a=d
this.b=e},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGi:function bGi(d,e){this.a=d
this.b=e},
bG4:function bG4(d,e){this.a=d
this.b=e},
bG5:function bG5(d){this.a=d},
bG3:function bG3(d){this.a=d},
bG6:function bG6(d,e,f){this.a=d
this.b=e
this.c=f},
bG2:function bG2(d,e){this.a=d
this.b=e},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGa:function bGa(d,e){this.a=d
this.b=e},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e,f){this.a=d
this.b=e
this.c=f},
bG1:function bG1(d,e){this.a=d
this.b=e},
bGd:function bGd(d,e,f){this.a=d
this.b=e
this.c=f},
bG0:function bG0(d,e){this.a=d
this.b=e},
bGe:function bGe(d,e,f){this.a=d
this.b=e
this.c=f},
bG_:function bG_(d,e){this.a=d
this.b=e},
bGf:function bGf(d){this.a=d},
bGg:function bGg(d){this.a=d},
bG7:function bG7(d){this.a=d},
bG8:function bG8(d){this.a=d},
bai:function bai(d,e,f){this.a=d
this.b=e
this.c=f},
fgT:function fgT(){},
fgU:function fgU(){},
fgV:function fgV(){},
fgG:function fgG(){},
fgW:function fgW(){},
fgF:function fgF(){},
fgX:function fgX(){},
fgK:function fgK(){},
fgE:function fgE(){},
fgL:function fgL(){},
fgD:function fgD(){},
fgM:function fgM(){},
fgC:function fgC(){},
fgN:function fgN(){},
fgA:function fgA(){},
fgB:function fgB(){},
fgO:function fgO(){},
fgy:function fgy(){},
fgz:function fgz(){},
fgP:function fgP(){},
fgx:function fgx(){},
UM:function UM(d){this.a=d},
aCL:function aCL(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS8:function dS8(d){this.a=d},
dS9:function dS9(){},
dSa:function dSa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSb:function dSb(){},
dRZ:function dRZ(d){this.a=d},
dRY:function dRY(d,e,f){this.a=d
this.b=e
this.c=f},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRW:function dRW(){},
dS7:function dS7(d){this.a=d},
dS6:function dS6(d){this.a=d},
dS4:function dS4(d,e){this.a=d
this.b=e},
dS2:function dS2(d){this.a=d},
dS3:function dS3(){},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS0:function dS0(d,e){this.a=d
this.b=e},
dS1:function dS1(){},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d,e){this.a=d
this.b=e},
dSc:function dSc(){},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSh:function dSh(d){this.a=d},
awS:function awS(d,e){this.c=d
this.a=e},
b8u:function b8u(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cBr:function cBr(d){this.a=d},
b8t:function b8t(d,e){this.b=d
this.a=e},
cBq:function cBq(d){this.a=d},
axa:function axa(){},
axb:function axb(){},
aJa:function aJa(){},
bwx:function bwx(){},
i9x(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.wd,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.af(A.wd,25,b8)
b8=C.N()
b8.saq(D.egS.av(0,v))
b9.af(A.wd,23,b8)
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
b9.bE(A.wd,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.af(A.wd,3,r)
c2.$5(b9,w?"V":"A",D.e8G,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e89,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eMO,A.hF)
$.W()
s=C.N()
s.r=A.bq.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.b_(D.eNz,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.we,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cg(A.aGC,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fV.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c0(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bn.gp(0)
b9.af(D.we,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.we,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.ji.gp(0)
b9.af(D.we,14,b8)
return!0
case"speaker":l=C.bx(D.aMB,A.uC)
$.W()
b8=C.N()
b8.saq(D.aow.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.ehe.av(0,C.bU(A.cA,15)))
b9.af(A.cA,14+k,b8)
b8=C.N()
b8.r=A.dy.gp(0)
b9.af(A.cA,5,b8)
b8=C.N()
b8.r=A.bl.gp(0)
b9.af(D.aGE,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e6c,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bX.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c0(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eNr,A.uC)
$.W()
b8=C.N()
b8.saq(D.bXh.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.aMD,A.is)
s=C.N()
s.r=A.hJ.gp(0)
b9.aE(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BS(i)<500?":":" "
g=A.a.aV(A.o.u(C.dk(i)),2,"0")
f=A.a.aV(A.o.u(C.h1(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.b_(D.aMD,b8)
c2.$5(b9,g+h+f,D.e8r,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e8q,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e6g,2.4,b8)
return!0
case"calculator":j=C.bx(D.eN7,A.hf)
$.W()
b8=C.N()
b8.saq(D.bX1.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.eN1,A.he)
s=C.N()
s.r=(b7?A.X8:D.biK).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e88,A.W0,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Sx)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cc:A.bO).gp(0)
n=p.H()
b8.drawRRect(C.et(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eMZ,A.hf)
$.W()
b8=C.N()
b8.r=L.ml.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.ag1.gp(0)
b9.aE(j,b8)
a0=C.bx(D.eMQ,A.hF)
if(b7){b8=C.N()
b8.saq(D.bYA.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.et(a0),$.pv(),!0)
b8.translate(-12,-25)
E.L2(b9,D.eSS,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eMN,A.he)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.b_(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e7q,A.c,6)}else{b8=C.N()
b8.r=D.vh.gp(0)
b9.aE(a0,b8)}b8=C.bx(D.eNJ,D.ehn)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bx(D.eNq,A.qn)
$.W()
b8=C.N()
b8.saq(D.bXy.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QE[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.ct.gp(0)
r.c=4
r.d=A.bS
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bn(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.we,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hy.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c0(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eN6,A.hF)
s=$.W()
r=C.N()
r.r=A.eb.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.z4
b9.af(A.wd,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cV(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.eq,D.bb1,a5).gp(0)
b9.aR(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bY.gp(0)
b9.aR(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j8(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aGE,s)
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
q.saq(D.bVD.av(0,D.eNj))
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
for(a2=0;a2<2;++a2){a3=F.axG[a2]
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
j.F(new C.bE())
r=C.N()
r.saq(D.bWI.av(0,D.eN5))
b9.aR(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e2.gp(0)
b9.aR(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cV(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.az.gp(0)
b9.aR(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.ts,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eb
b8.r=s.gp(0)
b9.b_(D.eN4,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lv
b9.af(A.aGA,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.af(D.e5y,3,b8)
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
b9.aR(b8,s)
s=C.N()
s.r=A.dQ.j(0.5*u).gp(0)
s.z=Z.HB
b9.af(D.e8v,24,s)}b8=C.bx(D.eNF,A.hF)
s=$.W()
r=C.N()
r.r=A.eb.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.e5M,D.aGK,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.aGK,D.e8w,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k_).gp(0)
b9.aR(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bl).gp(0)
b9.af(D.e8x,4,b8)
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
b9.aR(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a2b[u].j(0.6).gp(0)
b3.z=A.Rd
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cV(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a2b[u]
else{o=C.aq(D.a2b[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbM().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.i9w(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0y(d){var w=D.m0.h(0,d)
return(w==null?null:w.b)===D.zu},
iaI(d,e,f){return C.a6(d,!1).cl(C.uF(null,!1,!0,!0,new B.fN5(e,f),A.eM,null,A.pR,new B.fN6(),x.H))},
Jb:function Jb(d,e){this.a=d
this.b=e},
m6:function m6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fN5:function fN5(d,e){this.a=d
this.b=e},
fN6:function fN6(){},
Ut:function Ut(d,e,f){this.c=d
this.d=e
this.a=f},
biW:function biW(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dNW:function dNW(d){this.a=d},
dNV:function dNV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNT:function dNT(){},
dNU:function dNU(d){this.a=d},
dNS:function dNS(d){this.a=d},
dNR:function dNR(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d,e){this.a=d
this.b=e},
dNP:function dNP(d){this.a=d},
dNO:function dNO(d){this.a=d},
dNK:function dNK(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNN:function dNN(d,e,f){this.a=d
this.b=e
this.c=f},
dNM:function dNM(d){this.a=d},
dNL:function dNL(d){this.a=d},
buC:function buC(d,e,f){this.b=d
this.c=e
this.a=f},
aen:function aen(d,e,f){this.b=d
this.c=e
this.a=f},
aKX:function aKX(){},
flH(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zM,A.L,w,w),A.aB,C.bW(A.fR,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.W9,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
h0E(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eE()
b4.dt(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aw(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mL
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aw(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hg()?new C.z(f,-g):new C.z(-f,g)
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
a9=C.ev([A.d.gal(g)],u)
A.d.fp(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aw(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aW2(b0,a9,C.T(u,t),q,N.mL,w+v)}return new B.aW2(C.aX(u),C.ev([25],u),C.T(u,t),21,N.mL,1)},
hq9(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnS(p,o)},
hlr(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aW2:function aW2(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vh:function Vh(d){this.a=d},
bjv:function bjv(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.ft$=g
_.l2$=h
_.fV$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
eaB:function eaB(d){this.a=d},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaC:function eaC(){},
ear:function ear(d,e){this.a=d
this.b=e},
eas:function eas(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eav:function eav(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eau:function eau(d){this.a=d},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eay:function eay(d){this.a=d},
eaz:function eaz(d,e){this.a=d
this.b=e},
bgv:function bgv(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dha:function dha(d,e,f){this.a=d
this.b=e
this.c=f},
dhd:function dhd(d,e,f){this.a=d
this.b=e
this.c=f},
dhb:function dhb(d){this.a=d},
dhc:function dhc(d){this.a=d},
Vj:function Vj(d){this.a=d},
aDp:function aDp(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.ft$=g
_.l2$=h
_.fV$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
eaU:function eaU(d){this.a=d},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaV:function eaV(){},
eaF:function eaF(){},
eaO:function eaO(d,e){this.a=d
this.b=e},
eaL:function eaL(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d){this.a=d},
eaJ:function eaJ(d,e){this.a=d
this.b=e},
eaR:function eaR(d){this.a=d},
eaI:function eaI(d,e){this.a=d
this.b=e},
eaS:function eaS(d){this.a=d},
bgK:function bgK(d,e){this.b=d
this.a=e},
aLo:function aLo(){},
bwC:function bwC(){},
aLp:function aLp(){},
bwD:function bwD(){},
a0y(d,e,f,g,h,i){return new B.btr(d,e,f,g,h,i)},
btr:function btr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fhA:function fhA(){},
fhB:function fhB(){},
fhC:function fhC(){},
fhD:function fhD(){},
fhE:function fhE(){},
fhF:function fhF(){},
fhG:function fhG(){},
fhH:function fhH(){},
a82:function a82(d){this.a=d},
cff:function cff(d){this.a=d},
cfg:function cfg(){},
cfe:function cfe(d,e){this.a=d
this.b=e},
cfd:function cfd(d){this.a=d},
W9:function W9(d){this.a=d},
aEg:function aEg(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.ft$=f
_.l2$=g
_.fV$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eK8:function eK8(d){this.a=d},
eK4:function eK4(d){this.a=d},
eK3:function eK3(d,e){this.a=d
this.b=e},
eK6:function eK6(d,e){this.a=d
this.b=e},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK7:function eK7(d){this.a=d},
buO:function buO(d,e,f){this.b=d
this.c=e
this.a=f},
UT:function UT(d){this.a=d},
bj4:function bj4(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.ft$=d
_.l2$=e
_.fV$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dUd:function dUd(){},
dUe:function dUe(){},
dU8:function dU8(d,e){this.a=d
this.b=e},
dUa:function dUa(d,e){this.a=d
this.b=e},
dUb:function dUb(d){this.a=d},
dU9:function dU9(d){this.a=d},
dUc:function dUc(d){this.a=d},
bpD:function bpD(d,e,f){this.b=d
this.c=e
this.a=f},
U5:function U5(d){this.a=d},
biH:function biH(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.ft$=d
_.l2$=e
_.fV$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dF5:function dF5(){},
dF6:function dF6(){},
dF0:function dF0(){},
dF3:function dF3(d,e){this.a=d
this.b=e},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF4:function dF4(d){this.a=d},
dF1:function dF1(d){this.a=d},
aHF:function aHF(d,e,f){this.a=d
this.b=e
this.c=f},
UK:function UK(d){this.a=d},
biZ:function biZ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRw:function dRw(d){this.a=d},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRx:function dRx(d){this.a=d},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRz:function dRz(d){this.a=d},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dRo:function dRo(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRm:function dRm(d){this.a=d},
bl0:function bl0(d,e,f){this.b=d
this.c=e
this.a=f},
Vv:function Vv(d){this.a=d},
aDz:function aDz(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
egg:function egg(d,e){this.a=d
this.b=e},
egh:function egh(d,e,f){this.a=d
this.b=e
this.c=f},
egf:function egf(d,e,f){this.a=d
this.b=e
this.c=f},
egi:function egi(d){this.a=d},
ege:function ege(d){this.a=d},
egm:function egm(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egk:function egk(d,e){this.a=d
this.b=e},
egn:function egn(d,e){this.a=d
this.b=e},
egj:function egj(d,e){this.a=d
this.b=e},
ego:function ego(d){this.a=d},
VI:function VI(d){this.a=d},
aDV:function aDV(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
er8:function er8(d){this.a=d},
er9:function er9(d){this.a=d},
er6:function er6(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
er5:function er5(d){this.a=d},
era:function era(d){this.a=d},
erb:function erb(d){this.a=d},
erc:function erc(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
W2:function W2(d){this.a=d},
bkc:function bkc(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eFq:function eFq(){},
eFz:function eFz(){},
eFv:function eFv(d){this.a=d},
eFu:function eFu(){},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFy:function eFy(d){this.a=d},
eFr:function eFr(d){this.a=d},
Vt:function Vt(d){this.a=d},
bjG:function bjG(d,e,f,g,h,i,j,k){var _=this
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
_.l2$=g
_.fV$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eeW:function eeW(){},
eeX:function eeX(){},
eeP:function eeP(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
eeN:function eeN(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeM:function eeM(d){this.a=d},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeT:function eeT(d){this.a=d},
eeK:function eeK(d,e){this.a=d
this.b=e},
eeU:function eeU(d){this.a=d},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eeV:function eeV(d){this.a=d},
eeI:function eeI(d,e){this.a=d
this.b=e},
bcH:function bcH(d,e,f){this.c=d
this.d=e
this.a=f},
aKK:function aKK(){},
bwt:function bwt(){},
aL2:function aL2(){},
bwy:function bwy(){},
aLx:function aLx(){},
bwI:function bwI(){},
aM0:function aM0(){},
bwU:function bwU(){},
jI(d,e,f,g,h,i){return new B.b6h(h,d,f,g,i,e,null)},
hpZ(d,e,f,g){var w=null
return C.cb(w,w,!0,w,new B.fQV(g,e,f),d,w,!0,!0,x.H)},
hF(d,e,f,g,h,i,j){return new B.avi(f,j,i,h,g,d,e,null)},
qR(d,e,f){return B.ibx(d,e,f)},
ibx(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qR=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m1(2),$async$qR)
case 7:q=h
w=8
return C.b(q.hv(A.h_),$async$qR)
case 8:p=h
if(p==null){w=1
break}o=J.eU(A.dD.gaP(p))
w=9
return C.b(B.cqa(C.a([B.heT(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qR)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.gV).f.U(D.aOG)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qR,v)},
lf(d,e,f,g){var w,v=$.arr
if(v==="music")return E.dE(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dE(261.63*v,w,f,0,g,"sine")}return B.vX(v,e,f,g)},
vX(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dE(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dE(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dE(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dE(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dE(t,"",160,-0.7,g*0.4,w)
return E.dE(900,"",90,0,g*0.45,u)
case"zap":return E.dE(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dE(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dE(320,"",220,-0.7,g*0.35,v)
return E.dE(1500,"",200,0,g*0.22,u)
case"organic":return E.dE(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dE(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dE(t,"",s,0,g*0.5,w)}},
BF(d,e,f,g){var w,v,u,t,s,r,q,p=$.arr
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.lf(d,e[w],f,g)
return}for(p=C.db(e,0,C.dG(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lf(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.cfb(d,s,f,g),u)}},
a81(d,e){var w="sine",v="noise"
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
zs(d){return B.hGY(d)},
hGY(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zs=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$zs)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.S.aJ(0,q,null)
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
return C.i($async$zs,v)},
vU(d,e){return B.hGZ(d,e)},
hGZ(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vU=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vU)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$vU)
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
return C.i($async$vU,v)},
b6h:function b6h(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cs9:function cs9(d){this.a=d},
csa:function csa(d,e){this.a=d
this.b=e},
fQV:function fQV(d,e,f){this.a=d
this.b=e
this.c=f},
fQU:function fQU(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cs5:function cs5(d){this.a=d},
eS:function eS(d,e,f){this.c=d
this.d=e
this.a=f},
avi:function avi(d,e,f,g,h,i,j,k){var _=this
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
cs4:function cs4(d){this.a=d},
F8:function F8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csb:function csb(d){this.a=d},
mC:function mC(){},
cs6:function cs6(d,e,f){this.a=d
this.b=e
this.c=f},
cs8:function cs8(d){this.a=d},
cs7:function cs7(){},
cfb:function cfb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuL(){var w=0,v=C.j(x.cL),u,t
var $async$cuL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qS().bfQ("assets/data/world110.json"),$async$cuL)
case 3:u=t.hLx(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cuL,v)},
hLx(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aJ(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dR(j.h(k,0)),C.dR(j.h(k,1))],v))}q.push(m)}o=C.cQ(p.h(r,"n"))
m=C.cQ(p.h(r,"a"))
l=C.cQ(p.h(r,"ct"))
j=C.cQ(p.h(r,"sr"))
i=C.dR(p.h(r,"pop"))
h=C.dR(p.h(r,"gdp"))
g=C.cQ(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPV(g,f,"",0)
f=C.dR(J.q(p.h(r,"c"),0))
p=C.dR(J.q(p.h(r,"c"),1))
e=new B.aaP(o,m,l,j,i,h,g,f,p,q)
e.by8(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaQ(a1)},
fuD(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GI(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaP:function aaP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaQ:function aaQ(d){this.a=d},
v0:function v0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OY:function OY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xY:function xY(d,e,f){this.a=d
this.b=e
this.c=f},
OX:function OX(d){this.a=0
this.b=d
this.c=0},
hNq(d,e,f){return $.hNr.c8(0,d+"|"+C.u(e)+"|"+f.l(),new B.dcU(d,e,f))},
V_:function V_(d){this.a=d},
aCW:function aCW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.l2$=k
_.fV$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dWW:function dWW(d){this.a=d},
dWV:function dWV(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWm:function dWm(d){this.a=d},
dWn:function dWn(d,e,f){this.a=d
this.b=e
this.c=f},
dWl:function dWl(d){this.a=d},
dWk:function dWk(){},
dWj:function dWj(d){this.a=d},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWw:function dWw(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWq:function dWq(d){this.a=d},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWu:function dWu(d,e){this.a=d
this.b=e},
dWN:function dWN(d){this.a=d},
dWG:function dWG(d){this.a=d},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWP:function dWP(d){this.a=d},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWQ:function dWQ(d){this.a=d},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWM:function dWM(d){this.a=d},
dWr:function dWr(d){this.a=d},
dWi:function dWi(){},
dWh:function dWh(d){this.a=d},
dWg:function dWg(d){this.a=d},
beW:function beW(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dcU:function dcU(d,e,f){this.a=d
this.b=e
this.c=f},
dcV:function dcV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL8:function aL8(){},
aL9:function aL9(){},
aeV(d,e,f,g,h){return new B.btm(d,e,f,g,h)},
btm:function btm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fht:function fht(){},
fhu:function fhu(){},
fhv:function fhv(){},
fhw:function fhw(){},
fhx:function fhx(){},
fhy:function fhy(){},
fhz:function fhz(){},
W5:function W5(d){this.a=d},
bkg:function bkg(){this.d=$
this.c=this.a=null},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGl:function eGl(){},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGg:function eGg(d){this.a=d},
hNS(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w+900)
u.push(2.2+v.aj())}return new B.bk2(new C.cs(null,x.A),new B.OX(A.cG),A.J,A.av,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hNU(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hNT(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hg4(d,e,f){return $.hOu.c8(0,d+"|"+C.u(e)+"|"+f.l(),new B.f_H(d,e,f))},
VR:function VR(d){this.a=d},
bk2:function bk2(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.l2$=k
_.fV$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
eym:function eym(d,e){this.a=d
this.b=e},
eyx:function eyx(d,e){this.a=d
this.b=e},
eyy:function eyy(d,e){this.a=d
this.b=e},
eyu:function eyu(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyA:function eyA(d,e){this.a=d
this.b=e},
eyB:function eyB(d){this.a=d},
eys:function eys(d,e){this.a=d
this.b=e},
eyC:function eyC(d){this.a=d},
eyr:function eyr(d,e){this.a=d
this.b=e},
eyD:function eyD(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyl:function eyl(){},
eyk:function eyk(){},
eyj:function eyj(d){this.a=d},
eyi:function eyi(d){this.a=d},
brp:function brp(d,e){this.b=d
this.a=e},
f_H:function f_H(d,e,f){this.a=d
this.b=e
this.c=f},
f_I:function f_I(){},
f_J:function f_J(){},
V0:function V0(d){this.a=d},
aCX:function aCX(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.l2$=l
_.fV$=m
_.fu$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dX_:function dX_(){},
dXs:function dXs(){},
dXe:function dXe(d,e){this.a=d
this.b=e},
dX5:function dX5(d,e){this.a=d
this.b=e},
dXf:function dXf(d){this.a=d},
dX4:function dX4(d){this.a=d},
dXg:function dXg(d){this.a=d},
dXd:function dXd(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXc:function dXc(d){this.a=d},
dXl:function dXl(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXa:function dXa(d,e){this.a=d
this.b=e},
dXo:function dXo(d){this.a=d},
dX9:function dX9(d,e){this.a=d
this.b=e},
dXp:function dXp(d){this.a=d},
dX8:function dX8(d,e){this.a=d
this.b=e},
dXq:function dXq(d){this.a=d},
dX7:function dX7(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dX6:function dX6(d){this.a=d},
dXh:function dXh(d){this.a=d},
dX3:function dX3(d){this.a=d},
dXi:function dXi(d){this.a=d},
dX2:function dX2(d){this.a=d},
dXj:function dXj(d){this.a=d},
dX1:function dX1(d){this.a=d},
dWZ:function dWZ(d){this.a=d},
dWY:function dWY(){},
dX0:function dX0(d,e){this.a=d
this.b=e},
dWX:function dWX(d){this.a=d},
ba7:function ba7(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VJ:function VJ(d){this.a=d},
bk_:function bk_(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.ft$=e
_.l2$=f
_.fV$=g
_.fu$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
erg:function erg(d,e){this.a=d
this.b=e},
erh:function erh(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
bqY:function bqY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eYR:function eYR(d){this.a=d},
aLa:function aLa(){},
bwA:function bwA(){},
aLJ:function aLJ(){},
bwO:function bwO(){},
aLM:function aLM(){},
bwQ:function bwQ(){},
hNQ(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eE()
v.dt(w)
v=v.aj()
u=new C.eE()
u.dt(w+500)
s.push(new C.v(v,u.aj()))}return new B.biG(new C.cs(null,x.A),new B.OX(A.cG),t,A.av,s,$,A.bx,0,C.a([],x.X),null,null)},
Pr:function Pr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
U3:function U3(d){this.a=d},
biG:function biG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.l2$=j
_.fV$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dEx:function dEx(){},
dEl:function dEl(){},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEk:function dEk(d){this.a=d},
dEj:function dEj(d){this.a=d},
dEp:function dEp(d){this.a=d},
dEi:function dEi(d,e){this.a=d
this.b=e},
dEq:function dEq(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEr:function dEr(d){this.a=d},
dEg:function dEg(d){this.a=d},
dEs:function dEs(d){this.a=d},
dEf:function dEf(d){this.a=d},
dEt:function dEt(d){this.a=d},
dEe:function dEe(d){this.a=d},
dEu:function dEu(d){this.a=d},
dEd:function dEd(d){this.a=d},
dEv:function dEv(d){this.a=d},
dEc:function dEc(d){this.a=d},
dEw:function dEw(d){this.a=d},
dEb:function dEb(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEa:function dEa(d){this.a=d},
b9w:function b9w(d,e){this.b=d
this.a=e},
aez:function aez(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UX:function UX(d){this.a=d},
bj7:function bj7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.l2$=q
_.fV$=r
_.fu$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dVx:function dVx(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVp:function dVp(d){this.a=d},
dVl:function dVl(d){this.a=d},
dVq:function dVq(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVr:function dVr(d){this.a=d},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVs:function dVs(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVt:function dVt(d){this.a=d},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVu:function dVu(d){this.a=d},
dVg:function dVg(d){this.a=d},
dVv:function dVv(d){this.a=d},
dVf:function dVf(d){this.a=d},
dVw:function dVw(d){this.a=d},
dVe:function dVe(d){this.a=d},
beM:function beM(d,e){this.b=d
this.a=e},
da1:function da1(d){this.a=d},
VF:function VF(d){this.a=d},
bjZ:function bjZ(d,e,f,g,h,i,j,k){var _=this
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
_.l2$=g
_.fV$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eqv:function eqv(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
equ:function equ(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqt:function eqt(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqr:function eqr(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqB:function eqB(d){this.a=d},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqC:function eqC(d){this.a=d},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqD:function eqD(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
bqd:function bqd(d,e){this.b=d
this.a=e},
aKH:function aKH(){},
bws:function bws(){},
aL5:function aL5(){},
bwz:function bwz(){},
aLI:function aLI(){},
bwN:function bwN(){},
heT(d,e,f){var w,v
C.fT(0,0,!1)
w=new C.li(e,f,$,null)
v=w.bIm(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i0s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nY(A.k.ab(p.c,4)),"y",C.nY(A.k.ab(p.d,4)),"v",p.e,"l",C.nY(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nY(A.k.ab(p.as,3)),"ch",p.at,"vc",C.nY(A.k.ab(p.z,3)),"s",C.nY(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fq(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i9V(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aJ(0,a7,a5)
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
if(!$.qg().ai(0,s)){J.ci(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tt(a2,d,a0,a1)
a3.apJ(a2,d,a0,a1)
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
d=C.jK(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jK(J.q(t,"b"))
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
J.ci(v,r)}i=g.a(J.q(w,"wires"))
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
if(m!=null&&l!=null)a6.akg(m,A.k.N(C.dR(J.q(p,1))),l,A.k.N(C.dR(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cv:h)
while(h.C()){j=h.gR(h)
J.ci(k,A.k.N(C.dR(j)))}return new C.bnT(i,k)}catch(a4){return a5}},
fwp(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fwp=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fwp)
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
return C.i($async$fwp,v)},
bDd(d){return B.ibt(d)},
ibt(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDd=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bDd)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bDd)
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
return C.i($async$bDd,v)},
cqa(d,e){var w=0,v=C.j(x.g7),u
var $async$cqa=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h3l().x9(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cqa,v)}},D,T,H,U,A_,A8,A9,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[137]
A1=c[146]
Aa=c[145]
A2=c[138]
A3=c[134]
I=c[126]
P=c[121]
A4=c[122]
Ab=c[140]
A5=c[111]
A6=c[99]
G=c[129]
Ac=c[124]
Ad=c[139]
A7=c[143]
Ae=c[67]
Y=c[76]
Af=c[84]
Ag=c[80]
N=c[116]
Q=c[88]
Ah=c[147]
Ai=c[118]
Z=c[125]
O=c[127]
V=c[144]
Aj=c[71]
Ak=c[142]
R=c[133]
M=c[141]
Al=c[94]
W=c[117]
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
B.ajC.prototype={}
B.Vc.prototype={
T(){return new B.bjt(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mA(0,null,null))}}
B.bjt.prototype={
gVW(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
this.ch.q()
this.a2()},
Nm(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nm=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jL()
p.bP(0,A.c8)
t.m(new B.e7B(t))
t.a.toString
p=t.gVW()
w=3
return C.b(B.byN(B.hPI(q,B.i0j(p),o,t.ay)),$async$Nm)
case 3:s=e
r=s==null?null:J.iW(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i1J(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e7C(t,o,r))
$.aW.x1$.push(new B.e7D(t))
case 1:return C.h(u,v)}})
return C.i($async$Nm,v)},
XW(d){return this.bZn(d)},
aVt(){return this.XW(null)},
bZn(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XW=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jL()
t.f.saX(0,o)
t.m(new B.e7O(t))
E.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byN(B.hWq(o)),$async$XW)
case 3:r=n.a=m.i9A(f)
p.b=""
if(r!=null&&!B.i0k(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i1K(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajC(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e7P(p,t))
t.c3J(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XW,v)},
c3J(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
A.d.a8(w)
w=++m.as
v=m.gVW()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e7K(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e7I(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e7L(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e7M(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e7N(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.m(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eUk,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.Tr,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fiR
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ac.TR,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f3Z,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vp,C.d(u,l,l,l,l,l,l,D.f6C,l,l,l),l))
w.push(A.cU)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dw,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f90,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i2,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.M3,new C.cl(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.m8,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bh,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.a7E,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fL,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fei,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.e9P)
j=C.c8(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.x(C.a([C.ahS(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.brW,A.ej,l,l,1/0),A.bc,A.ih),C.E(B.h58(m.gVW(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e7S(m),l,A.bu,l),new B.dA("Invent something new",!i,new B.e7T(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.deD[p]
i.push(new B.dA(n,!1,new B.e7U(m,n),l,A.bu,l))}f.push(new B.eS(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cZa[p]
i.push(new B.dA(r,!1,new B.e7V(m,r),l,A.bu,l))}f.push(new B.eS(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kI,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e7W(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dp,!0,A.a4,l,A.an,l,A.aPo,l,l),1)
h=m.at
v=h&&j?D.bGl:A.dX
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e7X(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jI(A.bu,A.hc,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.FY.prototype={}
B.uM.prototype={}
B.VE.prototype={
T(){return new B.aDP(A.J,A.J,A.av,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDP.prototype={
gaWI(){var w,v,u,t=this,s=D.H5[t.cx],r=D.QF[t.cy],q=D.Ce[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aw1[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.enH())},
ga2c(){return D.H5[this.cx].d/this.gaWI()},
gaNX(){return 0.1*(D.H5[this.cx].d/0.9)/D.QF[this.cy].d},
a_(){this.a1()
this.li()
B.zs("rocket_lander").bA(new B.eo0(this),x.P)},
c3S(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cG.aj()*0.6
w.f=new C.v(0.15+A.cG.aj()*0.7,0.08)
w.r=new C.v((A.cG.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lB(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.eo1())
return}w=D.rp[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2c()
v=v.ad(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNX())}if(m.dy){t=m.r
v=v.aC(0,t.aG(0,t.gcm()*6*D.axX[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
s=m.f=m.f.ad(0,t.aG(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Ce[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vU("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BF("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2c()/(D.rp[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2c()/(D.rp[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dE(80,"",500,0,0.6,"noise")
C.fJ()}}if(m.Q&&m.x>0&&A.o.E(A.k.bn(m.CW*20),2)===0)E.dE(90,"",70,0,0.12,"noise")
m.m(new B.eo2())},
aft(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f67,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.enJ(this,g,w),v,h,v))
return new C.D(A.eI,C.x(C.a([u,A.cU,C.bW(A.bB,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDx(d){var w,v,u,t,s=this,r=null,q=s.ga2c()/(D.rp[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNX()),o=D.axX[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.TL,r,r,r),A.R,s.aft("ENGINE: "+D.H5[s.cx].b,D.H5,new B.eny(s),new B.enz(s),A.cs),s.aft("FUEL TANK: "+D.QF[s.cy].b,D.QF,new B.enA(s),new B.enB(s),A.b2),s.aft("LANDING GEAR: "+D.Ce[s.db].b,D.Ce,new B.enC(s),new B.enD(s),A.aN),s.aft("EXTRAS (tap to add)",D.aw1,new B.enE(s),new B.enF(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fB0)
o=(q?A.b2:A.c9).j(0.14)
w=C.m(12)
v=A.k.ab(s.gaWI(),2)
u=A.k.ab(s.ga2c()/(D.rp[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Ce[s.db].d*100)+".",r,r,r,r,r,r,D.f6K,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i2,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.nn,"Launch",new B.enG(s),A.b2,r),r))
return C.av(C.p(r,C.c8(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ag),A.f,r,A.lE,new C.o(D.bik,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aXQ(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b_,A.q,1)
return C.od(A.jI,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.env(e),new B.enw(e),w,w,w,w,new B.enx(e))},
aXP(d,e,f){return this.aXQ(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.enU(s,D.rp[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rp[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.enV(s,w),r,D.rp[w].c,r))}v=C.a([s.aXP(F.alR,new B.enW(s),s.y),A.bd,s.aXQ(A.vM,new B.enX(s),s.Q,130),A.bd,s.aXP(A.NM,new B.enY(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aN:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aC(r,C.p(r,D.bKA,A.f,r,r,new C.o(u,r,C.I(A.b_,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.enZ(s),r,r,r,r,r,r,!1,A.a7)],p))}return B.jI(A.cs,A.hc,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eS(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgs.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rp[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bl3,a0,0.25)
a1.toString
d.saq(new C.a8(A.b0,A.b4,A.x,C.a([F.adr,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.b_(new C.a9(0,0,g,f),d)
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
if(a1!=null)e.bB(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bE())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aR(r,d)
o=C.cg(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.is)
a0=C.N()
a0.r=A.be.gp(0)
a2.aE(d,a0)
a0=C.bx(o.cw(2),A.qn)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j8(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.HB
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
m.F(new C.cV(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cV(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.saq(D.bXa.av(0,D.eMX))
a2.aR(m,i)
i=C.N()
i.r=A.aN.gp(0)
a2.af(D.we,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.aw.gp(0)
a2.aR(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.aw.gp(0)
a2.aR(f,k)
g.restore()},
au(d){return!0}}
B.aLG.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwM.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvD()}}
B.aRz.prototype={}
B.a2P.prototype={}
B.b9z.prototype={}
B.U4.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ev(["skin"],x.N),o=new Float32Array(0)
return new B.aCe(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Ka,D.Ka,A.av,A.cG,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCe.prototype={
a_(){var w=this
w.a1()
w.li()
w.as=new B.c0i(w.gccc())
new B.dEZ(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a6(0)
v.d=null}this.buE()},
ccd(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eZ(0,C.F(["t","init","data",$.hf7],x.N,x.z))
v.at=!0
v.ax=""
v.ayi()
break
case"pick":v.m(new B.dEB(v,d))
break
case"shot":v.ahl(C.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.u(w.h(d,"text")))
break}},
ayi(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atZ[q.CW]
v=new B.dEC()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fq(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.u(v.$1(w.b))+C.u(v.$1(w.c))+C.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eZ(0,u)}},
ahl(d){return this.ct5(d)},
ct5(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahl=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aK(A.a.b5(d,A.a.cK(d,",")+1))
w=6
return C.b(B.cqa(C.a([B.heT(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahl)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.gV).f.U(D.aOG)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahl,v)},
axK(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lB(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bn(w)!==A.k.bn(v.ok)){B.a81("kick",0.4)
v.a4P(170,new B.dF_())}v.ok=w
return},
aha(d){var w,v,u,t,s=this
s.m(new B.dED(s,d))
if(d==null){s.fx=D.Ka
s.dy=1
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dEE(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayi()
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cvy(t,d)
return},
cvy(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a81("kick",0.8)
this.a4P(260,new B.dEF())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4P(w*70,new B.dEG(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dE(110,"",360,0.7,0.3,"saw")
else B.vX("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dE(210+e.length*4,"",80,0.6,0.55,"tri")
E.dE(2400,"",20,0,0.3,v)
break
case"muscle":E.dE(70,"",150,1,0.6,"sine")
break
case"vessel":E.dE(300,"",380,0.4,0.22,v)
B.a81("kick",0.3)
break
default:B.vX("organic",2+A.o.E(e.length,6),200,0.4)}},
cA2(d){this.m(new B.dEI(this,d))},
aY7(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axK(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bV_(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dEy(u,w,d))
v=x.t
B.BF("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4P(1100,new B.dEz(u))
return}if(d==null){if(u.cx!=null)u.aha(null)
return}u.aha(d)},
bYH(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bX.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f2w,u,u,u)}else if(d==null||e==null)w=D.fgo
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hH,u,u,u),A.cU,C.d(e.b,u,u,u,u,u,u,F.Dw,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bN_,u,u,u,new B.dEA(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.W6,u,s,t,u,u,A.n),u,u,u,u,I.ahx,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dph.h(0,g)
i.ayi()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d7v
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axK(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mE,h,h,h,new B.dEP(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.DM(h,A.ql,q)}else q=A.kE
q=C.x(C.a([C.E(q,1),new C.D(F.Ys,i.bYH(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d_D[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEQ(i,o),o.c,A.bX,h))}p=C.a([new B.eS(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dER(i,k),h,A.aM,h))}p.push(new B.eS(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hF(A.c9,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dES(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F8(D.atZ[j],i.CW===j,new B.dET(i,j),!1,h))
p.push(new B.eS(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEU(i),D.akG,A.aN,h),new B.fj(A.k6,"Reset view",new B.dEV(i),A.c,h),new B.dA(l,m,new B.dEW(i),A.Gn,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEX(i),A.o5,A.c9,h))
p.push(new B.eS(v,h,h))
return B.jI(A.bX,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aKI.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aKJ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buD()}}
B.c0i.prototype={
kF(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hla
$.hla=v+1
u="ngmy-body-viewer-"+v
$.yz()
$.qf().pU(u,new B.c0j(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fL(v,"message",new B.c0k(t),!1,x.gA)
t.b=u},
eZ(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byK(w.contentWindow)
if(w!=null)J.fSB(w,e,"*")}}catch(v){}}}
B.y_.prototype={}
B.Cf.prototype={}
B.nn.prototype={}
B.bah.prototype={}
B.U9.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aCh(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.av,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCh.prototype={
a_(){var w=this
w.a1()
w.li()
w.acb()
$.aW.x1$.push(new B.dH9(w))},
acb(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acb=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$acb)
case 6:q=e.tb("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dGO(s,r))
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
return C.i($async$acb,v)},
acv(d){return this.c1t(d)},
c1t(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acv=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.az(),$async$acv)
case 6:r=f
q=s.cx
p=C.a3(q).k("jO<co.E,n>")
q=C.C(new C.jO(q,new B.dGR(),p),p.k("J.E"))
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
return C.i($async$acv,v)},
aws(d,e,f,g){var w="c"+this.y++,v=new B.Cf(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.aws(0,e,f,0)},
abx(d,e){var w
if(D.z2.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.v(-36,w))},
tC(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aS1(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fV$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dY(m,D.cKJ[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tC(p,0)&&n.tC(p,1)
break
case"or":p=q.a
o=n.tC(p,0)||n.tC(p,1)
break
case"xor":p=q.a
o=n.tC(p,0)!==n.tC(p,1)
break
case"nand":p=q.a
o=!(n.tC(p,0)&&n.tC(p,1))
break
case"nor":p=q.a
o=!(n.tC(p,0)||n.tC(p,1))
break
case"not":o=!n.tC(q.a,0)
break
default:o=n.tC(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bNG(){return this.aS1(null)},
lB(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNG()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f0(w,new B.dHa()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fV$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fV$)
o=s+1
E.dE(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awt(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m4(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
asI(d){var w=this
if(w.x.A(0,A.av)){$.aW.x1$.push(new B.dGM(w,d))
return}w.m(new B.dGN(w,d))},
cvQ(d){this.m(new B.dGS(this,d,$.bDz()[d]))},
c65(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDz()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dGH(),t),s)
A.d.aY(r,new B.dGI())
q=C.C(new C.a_(new C.bc(v,u),new B.dGJ(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGK(d,w))
return}u=d.r
p=C.dO(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dB(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aS1(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jH(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dGL(d,o,a0))},
axg(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ceB(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dw<1>")
r=new C.dw(r,q)
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
bYA(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.z2.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abx(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bMA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abx(p,o)
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
c67(d){var w,v,u,t=this,s=t.axg(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eV()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dGT())
return}u=t.bMA(d)
if(u!=null)t.m(new B.dGU(t,u))
else t.m(new B.dGV(t))},
avi(d){return this.c0t(d)},
c0t(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avi=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axg(d)
if(s==null){w=1
break}C.jj()
t.m(new B.dGQ(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avi,v)},
bzp(d){if(this.x.A(0,A.av))return
this.m(new B.dGG(this,d,A.cG))
C.eV()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDz()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o5:O.rk,A.ad,h,h,h,21),h,h,h,new B.dH3(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cn.j(0.14)
r=C.I(A.cn.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f1H,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f9W,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lP,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f0,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.frr,i.gc64(),C.bn(A.cn,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mc,D.bsy,h,h,1/0))}u.push(C.E(C.cq(new B.dH4(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.z2.h(0,r).a+": "+D.z2.h(0,r).e,h,h,h,h,h,h,A.rS,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A9.ahf,A.bR,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.z2.gdN(D.z2),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aC(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bD,new C.y(p.a,h,D.aQz,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fC,Al.M8,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dH5(i,r),h,h,h,h,h,h,!1,A.a7))}s=C.a([],g)
for(l=0;l<4;++l){k=D.dbK[l]
s.push(new B.fj(A.NN,k.b,new B.dH6(i,k),A.cn,h))}s.push(new B.fj(D.ya,"Clear",new B.dH7(i),A.c9,h))
r=C.a([],g)
for(j=0;q=$.bDz(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eg:A.ln
o=i.ay
n=i.cx.t(0,j)?A.b2:A.bI
r.push(new B.dA(q.a,o===j,new B.dH8(i,j),p,n,h))}return B.jI(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eS(t,"PARTS",h),new B.eS(s,"TRY",h),new B.eS(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.baA.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.ac0.gp(0)
a7.b_(new C.a9(0,0,0+a5,0+a6),w)
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
g=a5.abx(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pD(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.bI.j(0.28).gp(0)
l.z=G.mI
s=l.H()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cC(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bS
l.r=(f?A.dQ:A.bq).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.I7)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pD(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aR(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c66(a7,a5.d)},
c66(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.z2.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cg(a0.c,64,64)
s=C.bx(t,A.l9)
r=w.cy===v
q=s.eU(A.cA)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lv
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bU(a0.c,52)))
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
q.saq(new C.a8(A.b0,A.b4,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.NU:D.bGR}else l=e.b
k=B.fY0(C.jH(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aC(0,new C.v(p/2,q.gbd(q)/2)))
j=B.fY0(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fY0(f,9,u?A.dQ:A.bY,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYL(d,w.abx(a0,h),o)
this.aYL(d,a0.c.ad(0,D.I7),o)},
aYL(d,e,f){var w
$.W()
w=C.N()
w.r=D.ac0.gp(0)
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
B.aKO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwv.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buJ()}}
B.Na.prototype={
T(){return new B.aCy(C.mA(0,null,null))}}
B.Ke.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Au.prototype={}
B.aCy.prototype={
c6b(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMZ(w,e))},
c_m(){var w=this
w.e.q()
w.e=C.mA(w.f,null,null)
w.m(new B.dMY(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.ol(t,C.c7(v,A.c_,t?new B.bqy(w.e,w.gc6a(w),new B.dN_(d),v):new B.aGO(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dN0(w,u),x.C)}}
B.bs6.prototype={}
B.bqy.prototype={
aYM(d,e){var w=null
return new C.D(I.YT,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f2g,w,w,w),A.bD,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.no,v,v,v,w.e,v,v,v,v,v,v),A.rN,D.byp],u),A.m,v,A.e,A.j,0,v,v),s=w.aYM("STUDIOS","Play, make things, and keep what you make")
$.bDA()
return C.bm(!0,C.x(C.a([new C.D(D.bxs,t,v),C.E(C.vv(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.m8(s,v),new C.nQ(A.hQ,C.OK(new C.oo(new B.eYo(d),22,!0,!0,!0,0,C.rW(),v),D.aOv),v),new C.m8(w.aYM("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nQ(D.bsF,C.OK(new C.oo(new B.eYp(w),6,!0,!0,!0,0,C.rW(),v),D.aOv),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeE.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n8,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aeO],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ay,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cU,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ay,A.aC,A.x,m,r,r),A.n),r,A.FD,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.adw.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n8,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aeO],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aH2,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.BT,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ay,A.aC,A.x,f,k,k),A.n),k,A.FD,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.PS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.S_,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.ay,A.aC,A.x,C.a([p,o,n,i],m),D.dgV,j),A.n),A.bf),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brw(i,j),A.av),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f3R,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Tc)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fM,C.B(C.a([s,A.es,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.dZ(C.em(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.dZ(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.brw.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.j8(0,0.35)
t=C.cg(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.b_(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.br1.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bgs,D.ae_],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.kb,24)],x.V),q=C.m(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.X(A.jq,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9g(p,w),A.av),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ay,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9g.prototype={
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
q.delete()}u=e.ec(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
au(d){return!1}}
B.aGO.prototype={
T(){return new B.aGP(new C.cs(null,x.A),null,null)}}
B.aGP.prototype={
gtZ(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,D.bq4,null,1,null,v)
w.cL(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZf(){var w,v=this,u=v.e
if(u===$){w=C.bk(null,A.fK,null,1,null,v)
w.fh(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawu(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc68(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVc(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVU(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6r(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtZ()
w.da()
w.dU$.L(0,this.gcvz())},
cvA(){var w,v,u,t,s,r,q,p=this,o=p.gtZ().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawu().a){case 0:w=D.nr
break
case 1:w=D.ug
break
case 2:w=D.a2f
break
case 3:w=D.nr
break
case 4:w=D.d4x
break
case 5:w=D.ug
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9J)r=0.09
else r=s===D.a9K?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.bZI[v]
B.lf("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BF("bell",D.c7r,1400,0.35)}}p.ax=o},
q(){this.gtZ().q()
this.gZf().q()
this.bwB()},
afU(){var w=this
w.gtZ().cUJ(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eY4(w))},
cgD(){this.gtZ().bZ(0)
this.m(new B.eY3(this))},
adv(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adv=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaVU(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aO),$.aw()))}m=C.a([],m)
for(t=u.gb6r(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aO),$.aw()))}o=C.C(u.gaVc(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bS(F.n8,null,new B.eY2(u,l,m,o),t,!0,!0,!0,A.lx,!1,!1,x.H),$async$adv)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adv,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawu(),f=i.a.c,e=f.b,d=i.gc68(),a0=new B.Au(g,e,f.c,d,i.gaVc(),i.gaVU(),i.gb6r())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o5:O.rk,A.ad,h,h,h,21),h,h,h,new B.eYc(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bQs,h,h,h,i.gc69(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mE,h,h,h,new B.eYd(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZf(),new B.eYe(i,a0),h),C.cq(new B.eYf(i,a0))],g)
u=i.as
t=u?i.gcgC():i.gciV()
u=u?D.bG6:A.u2
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c6(i.gtZ(),new B.eYg(i,a1,a0),h),1),C.aH(h,h,h,h,D.bMQ,h,h,h,new B.eYh(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hF(r,u+"x","Speed",2.5,0.4,new B.eYi(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.ded[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eYj(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c_2[q]
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
i.w=o}j=new C.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aC(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ay,A.aC,A.x,n,h,h),A.a5),h,l,h,D.agZ,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eYk(i,n),h,h,h,h,h,h,!1,A.a7))}return B.jI(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ex(new C.an(A.W,h,A.b1,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eS(u,"STYLE",h),new B.eS(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
byB(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nr[r]
p=A.k.D((1-A.ew.az(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nr[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nr[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.k8(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nr[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nr[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nr[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kE(q,new C.iH(n,f,A.b0,!0,f,new B.PS(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nr[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nr[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mj(new B.bqa(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.av,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bP7(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.ug[r]
p=A.pN.az(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.ug[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.ug[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jO(n,n,n,1)
m.fD(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PS(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fD(3.141592653589793)
k=new C.iH(k,f,A.A,!0,f,new B.br1(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kE(q,new C.iH(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cAz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2f[w]
l.push(A.cu.az(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btB(d.d,l,D.avF,m,B.bqx(e,0.4,0.62),f,B.bqx(e,0.45,0.7),n),A.av),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fYw(g,w)
q=D.avF[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kE(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fYw(g,w)
r=D.a2f[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kE(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.TV,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bEO(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.az(0,B.bqx(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dV(C.b3(f,f,f,new B.bpC(A.d.gI(a1),B.bqx(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e5q),f,f,f),0,0,0))
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
l.fD(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jO(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kE(k*(0.45+0.55*o),C.dV(new C.iH(l,f,A.A,!0,f,new B.PS(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aY(w,new B.eXW())
A.d.v(a0,new C.M(w,new B.eXX(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bDY(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.ug[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mU.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.ug[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axE[q]
k=C.dp()
k.mN(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jO(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.ug[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kE(m,C.dV(new C.iH(k,e,A.A,!0,e,new B.PS(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.ug[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dV(new C.mj(new B.b9W(w,f,q,e),e,new C.ar(r,212),e,e),new C.v(0,D.axE[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBw(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.e5u],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nr[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.az(0,p)
q=D.axN[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nr[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nr[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mN(l*h+D.d8r[r]*o)
f.fD(l*0.9)
h=0.55+0.45*o
f.jO(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kE(g,C.dV(new C.iH(f,a3,A.A,!0,a3,new B.PS(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nr[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axN[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dV(new C.mj(new B.bpE(A.d.gI(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bqa.prototype={
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
t.z=G.mI
d.aE(q,t)
t=C.bx(u,A.he)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bpC.prototype={
a4(d,e){var w,v,u=this.c,t=C.cg(e.ec(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HB
d.hU(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hU(t,u)
u=t.cw(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hU(u,v)},
au(d){return!0}}
B.b9W.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ec(A.J),f=this.c,e=A.cu.az(0,f)
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
B.bpE.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ec(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cg(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c0(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.btB.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b0,A.b4,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.b_(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fYw(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lv
a4=a3.H()
t.drawOval(C.c0(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b0,A.b4,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
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
a6=a8.gbM().a.snapshot()
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
a2=b0.gbM().a.snapshot()
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
t.drawPath((a2==null?a8.e=new C.cC(a8.gbM().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbM().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bn(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.he)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.et(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c0(a5),$.oJ()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b0,A.b4,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c0(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMx.prototype={
aT(){this.b1()
this.aZ()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
B.a02.prototype={
a5(){return"_Role."+this.b}}
B.q4.prototype={}
B.qJ.prototype={}
B.Cj.prototype={}
B.Z0.prototype={}
B.aeu.prototype={}
B.a0f.prototype={
gY(d){return this.d}}
B.Ct.prototype={}
B.abn.prototype={}
B.abE.prototype={}
B.adA.prototype={}
B.bgp.prototype={
a2l(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dE(d,"",e,g,h,f)},
b7s(d,e,f){return this.a2l(d,e,f,0,0.55)},
aB3(d,e,f,g){return this.a2l(d,e,f,0,g)},
b7t(d,e,f,g){return this.a2l(d,e,f,g,0.55)},
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
ajx(d,e,f,g){var w="n"+this.ay++,v=new B.qJ(w,e,f,g)
this.a.n(0,w,v)
this.aU()
return v},
B2(d,e,f){return this.ajx(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new B.dgS(e))
A.d.bq(w.c,new B.dgT(e))
w.aU()},
bbh(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mH.h(0,v.b).c===D.wN)return!1
w=this.b
if(A.d.b6(w,new B.dgP(d,e)))return!1
w.push(new B.Cj(d,e))
this.aU()
return!0},
bZk(d){var w
if(d.b==="beat")return D.c7B[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aEB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ay1[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Ct(u,t,j.ax,90))
w.push(new B.Ct(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0f(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7s(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0f(u,new C.v(o*p,n*p),m,3+w.aj()*4.5,1000+w.aw(700),j.ax))}j.f.push(new B.Ct(u,t,j.ax,120))
j.aB3(120,200,"noise",0.5)
j.b7s(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Ct(u,t,j.ax,230))
w.push(new B.Ct(u,t,j.ax+160,160))
w.push(new B.Ct(u,t,j.ax+320,100))
j.b7t(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abn(u,new C.v((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7t(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abE(u,u.ad(0,new C.v(Math.cos(q),Math.sin(q)).aG(0,260+w.aj()*200)),t,j.ax))
j.a2l(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fJ()
j.a2l(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adA(u,D.axr[v],t,j.ax))
j.aB3(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aB3(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c3H[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cqF(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f0(w,new B.dgQ(d));v.C();)j.azz(w.gR(0),j.ax+D.cg0[A.o.E(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cwW[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f0(w,new B.dgR(d));v.C();)j.azz(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zc(w,0,v-700)},
cqF(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Z0(e,"~"+d))},
azz(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeu(d.a,v,e,w))
u.push(new B.Z0(w,v))},
a6_(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEB(r)
u.n(0,r,o.ax+o.bZk(s))}}w=o.c
v=C.U(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dgU(o),v),v.k("J.E"))
if(q.length!==0){A.d.bq(w,new B.dgV(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gae(v),r=new C.f0(u,new B.dgW(p));r.C();)o.azz(u.gR(0),o.ax)}else o.aEB(u)}}A.d.bq(o.d,new B.dgX(o))
A.d.bq(o.e,new B.dgY(o))
A.d.bq(o.f,new B.dgZ(o))
A.d.bq(o.w,new B.dh_(o))
A.d.bq(o.x,new B.dh0(o))
A.d.bq(o.r,new B.dh1(o))
o.aU()},
v3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
cMr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aJ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.u(J.q(v,"k"))
if(!D.mH.ai(0,u))continue
t=C.u(J.q(v,"id"))
m.n(0,t,new B.qJ(t,u,new C.v(C.dR(J.q(v,"x"))*k.cy.a,C.dR(J.q(v,"y"))*k.cy.b),A.k.N(C.dR(J.q(v,"p")))))
s=C.c9(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.u(J.q(r,0))
p=C.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cj(q,p))}k.aU()
return!0}catch(l){return!1}},
cPt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qJ(n,r,new C.v(q*p.a,o*p.b),s))
l.aU()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbh(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FJ.prototype={}
B.VD.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDO(new B.bgp(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cG,A.K,A.av,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDO.prototype={
ac4(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ac4=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$ac4)
case 6:q=n.jK(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.en1(s))
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
return C.i($async$ac4,v)},
a91(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a91=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.emR(s))
u=3
w=6
return C.b(C.az(),$async$a91)
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
return C.i($async$a91,v)},
bKN(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.emT())+"|"+A.d.cJ(o,0,new B.emU())
if(v===p.ch)return p.CW
u=new B.emX()
t=x.s
s=C.a([],t)
r=new B.emY(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f0(n,new B.emV());w.C();){q=n.gR(0)
if(!A.d.b6(o,new B.emW(q)))s.push(C.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.db(s,0,C.dG(5,"count",x.S),x.N).dJ(0)},
a_(){var w,v=this
v.a1()
v.ac4()
v.d.db=v.ay
w=v.qy(new B.enr(v))
w.j0(0)
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
w.bvB()},
abB(d){return this.bYN(d)},
bYN(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abB=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$abB)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cMr(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWm(A.d.gI(D.awV))
if(s.c!=null)s.m(new B.en0())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abB,v)},
aWm(d){this.d.cPt(0,d.c,d.d)
this.E7()},
E7(){var w=this.as
if(w!=null)w.a6(0)
this.as=C.cM(A.lO,new B.emN(this))},
awv(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ceC(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dw<1>")
r=new C.dw(r,q)
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
bYB(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mH.h(0,r.b).c===D.wN)continue
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
c6e(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hlb(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cyj(d){var w,v,u,t,s,r,q=this,p=q.awv(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eV()
u=v.b
if(u==="button"){w.aEB(p)
return}if(q.r)return
t=D.mH.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qD)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aU()
q.E7()
return}if(q.r)return
r=q.c6e(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aU()
q.E7()}},
cfV(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ceC(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awv(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cfW(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aU()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aU()}}},
b0t(){var w,v,u=this
if(u.z!=null){w=u.bYB(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbh(v,w)}else v=!1
if(v){C.jQ()
u.E7()}u.z=null
u.d.aU()}else if(u.x!=null){if(u.at)u.E7()
u.x=null}},
ach(d){return this.c0u(d)},
c0u(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ach=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awv(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jj()
p=t.c
p.toString
w=3
return C.b(C.bS(F.n8,null,new B.en3(q),p,!0,!0,!1,A.lx,!1,!1,x.y),$async$ach)
case 3:if(f===!0){r.W(0,s)
t.E7()}case 1:return C.h(u,v)}})
return C.i($async$ach,v)},
c6c(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B2(0,d,new C.v(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eV()
this.E7()},
ag1(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ag1=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bS(F.n8,null,new B.en5(),s,!0,!0,!0,A.lx,!1,!1,x.es),$async$ag1)
case 2:t=e
if(t!=null)u.aWm(t)
return C.h(null,v)}})
return C.i($async$ag1,v)},
adw(d){var w=0,v=C.j(x.H),u=this,t
var $async$adw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.emQ(),t,null,!0,!0,x.y),$async$adw)
case 2:if(f===!0){u.d.a8(0)
u.E7()}return C.h(null,v)}})
return C.i($async$adw,v)},
B(d){var w=this,v=null,u=C.a([C.ahS(w.r?new C.bI(A.a3,v,v,new C.D(A.FE,C.hk(D.bKQ,D.fkm,new B.enp(w),v),v),v):w.c6f(),A.bc,A.iE),C.E(C.cq(new B.enq(w)),1)],x.p)
if(!w.r)u.push(w.ct8())
return C.c7(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bGu(){var w=null,v=new B.emS(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bZ(0,C.em(C.av(C.p(w,C.c8(C.x(C.a([D.fvp,A.au,D.fCU,A.aB,v.$4(A.oU,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BQ,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lm,A.bX,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akT,A.bI,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fCd,new C.bI(A.a8,w,w,C.bK(!1,D.fsB,w,w,!0,w,w,this.gbGn(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.Vt,new C.o(F.n8,w,s,t,w,w,A.n),w,w,w,A.fD,A9.aif,w,w,w),w,w,w),u,!0),0,0,0)},
c6f(){var w=this,v=null,u=C.aH(v,v,v,v,S.no,v,v,v,new B.enb(w),v,v,v,v,v,v),t=w.a8u(A.NC,"How it works",new B.enc(w),!0),s=w.ay?A.o5:O.rk
return new C.D(D.bwI,C.B(C.a([u,D.byb,t,w.a8u(s,"Sound",new B.end(w),!0),w.a8u(A.dX,"Ideas",w.gcjD(),!0),w.a8u(D.ya,"Clear",w.gc6d(w),!0),w.aNf(A.iJ,"Show",new B.ene(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNf(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ae.vz,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hv(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8u(d,e,f,g){return this.aNf(d,e,f,g,!1)},
ct8(){var w=null,v=new B.en7(this),u=A.c.j(0.08)
return C.p(w,C.c8(C.B(C.a([v.$2("START",D.wN),v.$2("CHANGE",D.DQ),v.$2("REACT",D.qD)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AH,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.brY,w,w,w)},
ct9(d){var w,v,u,t,s=null,r=D.mH.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fC,C.aC(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cU,C.d(r.a,s,1,A.a2,s,s,s,D.aQz,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hP,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.en6(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
B.bgq.prototype={
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
b8.b_(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d.push(new C.pD(h+a1,i,f-a1,g,f,g))
a2=D.mH.h(0,k.b).d
a3=D.mH.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bS
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rw(new C.v(h,i),new C.v(f,g))
e.saq(new C.a8(A.a3,A.a8,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hlb(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mI
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.I7)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pD(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aR(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
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
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.lg(o,i,A.dV.az(0,v))
h.toString
i=C.lg(o,i,A.dV.az(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bS
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rw(i,h)
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
i.z=A.jt
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
i.z=A.jt
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bT(P.pq,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgr(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cft(b8,b5.d,b6)
b7.restore()},
cft(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mH.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cg(e.c,64,64)
t=C.bx(u,A.ir)
s=t.eU(A.cA)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lv
d.aE(s,r)
if(v>0){s=t.cw(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.z4
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
r.saq(new C.a8(A.b0,A.b4,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgr(C.jH(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aC(0,new C.v(s/2,r.gbd(r)/2)))
n=B.bgr(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.axr[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qD){s=e.c.ad(0,new C.v(0,62))
r=C.N()
r.r=D.ay1[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgr(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgr(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wN)k.b1i(d,e.c.aC(0,D.I7),q)
k.b1i(d,e.c.ad(0,D.I7),q)},
b1i(d,e,f){var w
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
B.aLE.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bl_.prototype={}
B.PJ.prototype={
gY(d){return this.d}}
B.VS.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bk3(new C.cs(null,x.A),w,v,A.cG,A.bx,D.EQ,null,null)}}
B.bk3.prototype={
b_0(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bn((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awj[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lf("synth",u,420,0.3)
break
case"rainbow":B.lf("bell",u,700,0.35)
break
case"stars":B.lf("pluck",u+12,400,0.4)
break
case"sparks":E.dE(2400+t.r.aw(2000),"",60,0,0.18,"noise")
break
default:E.dE(110+t.r.aw(60),"",140,0,0.22,"noise")}},
c9e(d){return this.b_0(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qy(new B.ez6(v))
w.j0(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bvK()},
gb0N(){var w=this.Q
return w<0?new H.mQ(1,A.k.E(this.y*0.18,360),0.85,1).iF():D.QI[w]},
aRH(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0N(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bI,A.aw,v.aj())
m.toString
j.push(new B.PJ(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aw(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PJ(d,new C.v(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aw(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PJ(d,new C.v(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aYO(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0N()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bl_(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRH(e)
r.b_0(e,!0)
r.m(new B.eyI())},
aYN(){this.ax=null
this.m(new B.eyH())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mE,n,n,n,new B.eyR(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brr(k,o.f,o.y,o.at,n),A.av)],m)
if(!o.ay&&k.length===0)j.push(D.b5z)
k=C.aC(A.c7,new C.an(A.W,n,A.b1,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eyS(o),new B.eyT(o),new B.eyX(o),n,n,n,n,n,n,n,n,n,new B.eyY(o),new B.eyZ(o),n,n,n,!1,A.a7)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cV0[w]
j.push(new B.dA(v.b,o.z===v.a,new B.ez_(o,v),v.c,A.bX,n))}u=C.a([new B.F8(A.c,o.Q<0,new B.ez0(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F8(D.QI[t],o.Q===t,new B.ez1(o,t),!1,n))
s=o.as
s=B.hF(A.bX,A.o.u(A.k.V(s)),"Size",36,4,new B.ez2(o),s)
r=o.ch
q=r?A.o5:O.rk
q=C.a([new B.dA("Sound",r,new B.ez3(o),q,A.bX,n),new B.fj(A.rj,"Undo",new B.eyU(o),A.c,n),new B.fj(D.ya,"Clear",new B.eyV(o),A.c9,n)],m)
for(w=0;w<4;++w){p=D.da5[w]
q.push(new B.F8(p,o.at.A(0,p),new B.eyW(o,p),!1,n))}return B.jI(A.bX,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ex(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eS(j,"BRUSH",n),new B.eS(u,"COLOUR",n),s,new B.eS(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.brr.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.b_(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.U(q),m=p.k("nm<1>"),l=new C.nm(q,1,a5,m),l.zI(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bB(k)
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
q.e=A.fF
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hA(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fF
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fF
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mQ(1,A.o.E(i*5,360),0.85,1).iF()
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
a1=k?new H.mQ(1,A.o.E(a3*23,360),0.7,1).iF():l
a4.c6g(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rb
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6g(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
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
n.e=null}}n.F(new C.bE())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jt
d.aR(n,p)
p=C.N()
p.r=h.gp(0)
d.aR(n,p)},
au(d){return!0}}
B.W3.prototype={
T(){return new B.aE3(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aO),$.aw()),null,null)}}
B.aE3.prototype={
gIK(){var w,v=this,u=v.e
if(u===$){w=C.bk(null,A.tF,null,1,null,v)
w.cL(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIK()
w.da()
w.dU$.L(0,this.gbXJ())},
bXK(){var w,v,u,t,s,r,q,p=this,o=p.gIK().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m4:new C.m9(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dE(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dE(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lf(s,D.avg[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIK().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bvQ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m9(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.QI[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mE,j,j,j,new B.eFG(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.axs[k.y]
s=C.bw(t,C.c_(C.av(C.c6(k.gIK(),new B.eFH(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ay,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Dv,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eFI(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ht,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cwI[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eFJ(k,q),j,A.bI,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F8(D.QI[o],k.w===o,new B.eFK(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o5:O.rk
l=C.a([new B.dA(m,n,new B.eFL(k),l,A.bI,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F8(D.axs[o][0],k.y===o,new B.eFM(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mA,"Replay",new B.eFN(k),A.c,j))
m=k.x
return B.jI(A.bI,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bA,new C.ex(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.O,new B.eS(i,"MOVE",j),new B.eS(p,"COLOUR",j),new B.eS(l,"SOUND",j),new B.eS(n,"BACK",j),B.hF(A.bI,A.o.u(A.k.V(m)),"Size",96,28,new B.eFO(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c_w(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bn(g*1.6*f)?1:0
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
case"glitch":u=A.o.E(A.k.bn(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bX:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mU.az(0,t)
w=h
m=t
break
case"rainbow":w=new H.mQ(1,A.k.E(g*360+e*40,360),0.75,1).iF()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dV(C.ee(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aLN.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aLT.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.a_x.prototype={}
B.VA.prototype={
T(){var w=C.a([],x.aS)
return new B.aDG(new C.cs(null,x.A),w,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDG.prototype={
gadx(){var w=this.r
return new C.v(w.a/2,w.b/2)},
b22(){return new H.mQ(1,this.f.aj()*360,0.6,1).iF()},
ar_(d,e,f,g){var w=this,v=w.gadx().ad(0,new C.v(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_x(v,new C.v(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b22(),C.a([],x.g)))},
bFP(d,e,f){return this.ar_(d,e,f,!1)},
bFO(d,e){return this.ar_(d,e,1,!1)},
cvu(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bFO(40+w*u/5,v.aj()*3.141592653589793*2)},
bGJ(){var w=this.r
this.bFP(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.li()},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.av))return
w=a2.e
v=w.length
if(v===0&&a2.fV$<300)return
u=a2.gadx()
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
if(o.length>260)A.d.cz(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lV(v.a-s)!==J.lV(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fV$-n.r>250){n.r=a2.fV$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lf("bell",D.avg[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.ejy(u),C.U(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dE(70,"",300,0.6,0.8,"sine")
A.d.bq(w,new B.ejz(a2,u))},
cjw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadx()
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
gaVZ(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mE,r,r,r,new B.ejm(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.ejn(s)),n=s.w
n=B.hF(A.cs,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.ejo(s),n)
w=s.x
w=B.hF(A.cs,A.k.ab(w,1)+"x","Time",3,0.2,new B.ejq(s),w)
v=s.Q
v=B.hF(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ejr(s),v)
u=s.ax
t=u?A.o5:O.rk
return B.jI(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eS(C.a([new B.dA("Sound",u,new B.ejs(s),t,A.cs,r),new B.dA("Trails",s.z,new B.ejt(s),A.NT,A.cs,r),new B.dA("Planets pull each other",s.y,new B.eju(s),A.yy,A.cs,r)],q),r,r),new B.eS(C.a([new B.fj(A.mz,"Solar system",new B.ejv(s),A.cs,r),new B.fj(A.nn,"Comet",new B.ejw(s),A.c,r),new B.fj(A.mw,"Cluster",new B.ejx(s),A.c,r),new B.fj(D.ya,"Clear",new B.ejp(s),A.c9,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.bkN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.WM.gp(0)
d.b_(new C.a9(0,0,0+g,0+f),w)
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
t.saq(new C.bT(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).av(0,C.bU(g,f)))
d.af(g,f,t)
t=C.N()
t.saq(D.ehb.av(0,C.bU(g,o)))
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
q.z=G.mI
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bT(P.pq,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.ji.gp(0)
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
B.abu.prototype={}
B.VZ.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bk8(new C.cs(null,x.A),w,v,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk8.prototype={
a_(){this.a1()
this.li()},
c6h(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abu(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.av))return
a2.c6h()
w=a2.f
A.d.bq(w,new B.eF7(a2))
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
A.d.bq(w,new B.eF8(a2))
if(w.length<a1&&a2.ch)B.lf("bell",12+a2.r.aw(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fV$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fV$
B.lf("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mE,l,l,l,new B.eEX(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eEY(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cWE[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eEZ(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cGF[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eF_(m,t),l,A.b2,l))}s=m.ch
r=s?A.o5:O.rk
r=C.a([new B.dA("Sound",s,new B.eF0(m),r,A.b2,l)],k)
s=m.x
s=B.hF(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eF1(m),s)
q=B.hF(A.b2,l,"Together",2.5,0,new B.eF2(m),m.y)
p=B.hF(A.b2,l,"Apart",2.5,0,new B.eF3(m),m.z)
o=B.hF(A.b2,l,"Same way",2.5,0,new B.eF4(m),m.Q)
n=m.as
return B.jI(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eS(h,"TOUCH",l),new B.eS(u,"LOOK",l),new B.eS(r,l,l),s,q,p,o,B.hF(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eF5(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsi.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adP,D.blt],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,U.Lt],v):C.a([D.bio,D.b9w],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b0,A.b4,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.b_(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bI.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bI.j(0.25).gp(0)
n.z=G.mI
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mQ(1,j,0.7,1).iF()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jt
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
j=d.gbM().a.snapshot()
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
j.push(new C.cV(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cV(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cz,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).av(0,D.eMT))
o=j.H()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c9
else a1=v==="scare"?A.bI:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.abX.prototype={}
B.U7.prototype={
T(){var w=C.a([],x.bi)
return new B.aCg(w,A.cG,A.av,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCg.prototype={
gI6(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacy(){return 54-8*(this.r/100)},
a_(){this.a1()
this.li()
B.zs("chain_burst").bA(new B.dGi(this),x.P)},
aYQ(){return B.vU("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azD(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abX(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new H.mQ(1,u.aj()*360,0.6,1).iF()))}},
Zg(d){var w,v=this
if(d==null)return 0
w=(v.fV$-d)/1000
if(w<0.4)return v.gacy()*A.dV.az(0,w/0.4)
if(w<1.1)return v.gacy()
if(w<1.5)return v.gacy()*(1-(w-1.1)/0.4)
return 0},
lB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.av)||!j.Q)return
w=j.d
if(w.length===0)j.azD()
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
if(v!=null)n.push(new C.z(v,j.Zg(j.ax)))
for(v=A.d.gae(w),s=new C.f0(v,new B.dGj());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zg(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fV$
E.dE(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eV()
break}}}if(!(j.at!=null&&j.Zg(j.ax)>0||A.d.b6(w,new B.dGk(j)))&&j.fV$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gI6()){if(j.as>=j.gI6()*1.5)k=3
else k=j.as>=j.gI6()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BF("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aYQ()}else E.dE(120,"",300,0,0.3,"saw")}}},
aYP(d){this.m(new B.dG8(this,d))
this.aYQ()},
ady(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ady=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dGb(u),s,null,!0,!0,x.S),$async$ady)
case 2:t=e
if(t!=null)u.aYP(t)
return C.h(null,v)}})
return C.i($async$ady,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gI6(),t=w.x.h(0,""+w.r)
return B.jI(A.bX,A.hc,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dGf(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.rf,"Levels",w.gc6i(),A.bX,v),new B.fj(A.k6,"New board",new B.dGg(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auw(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYd(d,e){return this.auw(d,e,A.c)}}
B.bag.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EQ.gp(0)
d.b_(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cLm(d)
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
p.z=G.mI
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
B.aKM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwu.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buH()}}
B.aLB.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwL.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvy()}}
B.aLQ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwT.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvN()}}
B.FF.prototype={
gcOJ(){return this.a.aC(0,this.b).gcm()>4}}
B.acM.prototype={}
B.Vu.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjI(new C.cs(null,x.A),w,v,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjI.prototype={
aPg(d){return new H.mQ(1,A.o.E(d*29,360),0.6,1).iF()},
a_0(d){var w,v=D.Cs.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bn(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dY(w,u)},
aRX(d){A.d.bq(this.e,new B.ef1(this,d))},
cry(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ad(0,w.aG(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
ay8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.a_0(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.FF(p,r,k,new H.mQ(1,A.o.E(k*29,360),0.6,1).iF()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.a_0(h)
f.push(new B.FF(h,h,k,new H.mQ(1,A.o.E(k*29,360),0.6,1).iF()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_0(h)
f.push(new B.FF(h,h,k,new H.mQ(1,A.o.E(k*29,360),0.6,1).iF()))}}},
a_(){this.a1()
this.li()},
c6k(d,e){var w,v=this.fV$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lf(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.av))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acM(new C.v(a2.w.a*(0.2+v.aj()*0.6),6),new C.v((v.aj()-0.5)*40,0),new H.mQ(1,v.aj()*360,0.5,1).iF()))}if(u>3)a2.as=0
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
if(a1<0){a2.c6k(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.bq(w,new B.efq(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o5:O.rk,A.ad,p,p,p,21),p,p,p,new B.eff(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mE,p,p,p,new B.efg(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.efh(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d_2[w]
l.push(new B.dA(v.b,q.x===v.a,new B.efi(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cs.gee(D.Cs));t.C();){s=t.gR(t)
u.push(new B.dA(s,q.y===s,new B.efj(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ayn[w]
t.push(new B.dA(r.b,q.z===r.a,new B.efk(q,r),p,A.b8,p))}s=q.Q
return B.jI(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eS(l,"TOOL",p),new B.eS(u,"SCALE",p),new B.eS(t,"SOUND",p),B.hF(A.b8,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.efl(q),s),new B.eS(C.a([new B.fj(D.bGG,"Stairs",new B.efm(q),A.b8,p),new B.fj(An.NB,"Pinball",new B.efn(q),A.c,p),new B.fj(A.mw,"Random",new B.efo(q),A.c,p),new B.fj(D.ya,"Clear",new B.efp(q),A.c9,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhk.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bXL.av(0,new C.a9(0,0,a0,a1)))
a2.b_(new C.a9(0,0,a0,a1),w)
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
q.z=A.jt
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
p.z=A.jt
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bT(P.pq,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bU(q,9)))
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
q.z=A.rv
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bT(P.pq,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adh.prototype={}
B.Vz.prototype={
T(){var w=C.a([],x.gB)
return new B.aDF(new C.cs(null,x.A),w,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDF.prototype={
gaYR(){var w=this.w
return new C.v(w.a/2,w.b/2)},
ayl(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azy(d){var w=D.Cs.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dY(v,u)},
a_(){this.a1()
this.li()},
aQH(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adh(w,A.k.E(t/v+u,1)))}},
lB(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.av))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fV$
if(p.Q){r=p.z
s=p.azy(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lf(r,s+12,q,0.55)}}}},
c6l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaYR()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayl(v)-e)
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
m=h.ayl(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.eiW(h,n).$0()
h.c.ef()
return}}h.m(new B.eiX(g,h,t))
if(h.Q)B.lf(h.z,h.azy(g.a)+12,700,0.5)
C.eV()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o5:O.rk,A.ad,q,q,q,21),q,q,q,new B.ej3(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mE,q,q,q,new B.ej4(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ej5(r)),m=r.x
m=B.hF(A.bu,""+A.k.V(m),"Tempo",180,40,new B.ej6(r),m)
w=C.a([],p)
for(v=J.aV(D.Cs.gee(D.Cs));v.C();){u=v.gR(v)
w.push(new B.dA(u,r.y===u,new B.ej7(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ayn[t]
v.push(new B.dA(s.b,r.z===s.a,new B.ej8(r,s),q,A.bu,q))}return B.jI(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eS(w,"SCALE",q),new B.eS(v,"SOUND",q),new B.eS(C.a([new B.fj(A.dX,"Demo",new B.ej9(r),A.bu,q),new B.fj(A.mw,"Random",new B.eja(r),A.c,q),new B.fj(D.ya,"Clear",new B.ejb(r),A.c9,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.bkO.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.WM.gp(0)
a5.b_(new C.a9(0,0,0+a6.a,0+a6.b),w)
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
r.saq(new C.a8(A.b4,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mQ(1,A.k.E(s.$1(l)*23,360),0.55,1).iF()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dgP[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.es(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.js(1),a4,a4,a4,a4,A.c5,a4)
i.em()
o=i.b.c
m=J.fSi(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.v(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.saq(D.egO.av(0,C.bU(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mQ(1,A.k.E(s.$1(a0)*23,360),0.55,1).iF()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fSi(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jt
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bT(P.pq,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bU(new C.v(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLz.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwJ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvw()}}
B.aLA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwK.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvx()}}
B.tg.prototype={}
B.b99.prototype={}
B.Vx.prototype={
T(){var w=x.S
return new B.aDD(C.a([],x.aq),C.T(w,w),C.aX(w),D.eSX)}}
B.aDD.prototype={
a_(){this.a1()
B.zs("molecule_maker").bA(new B.eiq(this),x.P)},
aj5(d){var w={}
w.a=0
this.f.bL(0,new B.eic(w,d))
return w.a},
gaYX(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i28(t,this.f,D.a2M[this.d])},
c6C(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eE()
w.dt(t*7+3)
t=v.y
v.m(new B.ei6(v,e,t.a,w,t.b))
B.vX("pop",u.length,90,0.35)},
awz(d){return this.m(new B.ei7(this))},
aYY(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c6I(d){this.m(new B.eib(this,this.aYY(d)))},
co_(){var w=this.r
if(w==null)return
this.m(new B.eia(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2M[k.d],h=k.gaYX()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w7.h(0,w[u].a).a-k.aj5(u)
w=i.c
w=w.gdN(w)
t=w.dz(w,new B.eik(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hy
r=x.p
s=C.x(C.a([new C.D(A.fL,B.fd_(w,s,h&&k.d<12?new B.fj(A.j0,"Next",new B.eil(k),A.b2,j):j),j),C.E(C.cq(new B.eim(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2M[u].b,k.d===u,new B.ein(k,u),j,A.hy,j))}q=C.a([],r)
for(p=D.w7.gdN(D.w7),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dy:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.eio(k,o),j,l,j))}return B.jI(A.hy,A.hc,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eS(w,"GOAL",j),new B.eS(q,"ADD",j),new B.eS(C.a([new B.dA("Remove selected atom",!1,k.gcnZ(),A.e6,A.c9,j),new B.dA("Clear all",!1,k.gc6D(k),A.k6,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.bi1.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hy.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bL(0,new B.doY(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.w7.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jt
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
h.saq(new C.bT(A.JT,0.5,A.x,a3,0,C.a([f,g,e],r),I.aws,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kh(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.js(1),a3,a3,a3,a3,A.c5,a3)
d.em()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.v(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.be:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.u(k)
a1=new C.kh(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nA),A.a4,A.c6,new C.js(1),a3,a3,a3,a3,A.c5,a3)
a1.em()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.h2(a3,a3,a3,a3,D.f0C,A.a4,A.c6,a3,A.dP,A.c5)
d.em()
d.a4(a4,new C.v((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.Uv.prototype={
T(){var w=x.s
return new B.biY(C.a([],w),C.a([],w))}}
B.biY.prototype={
a_(){this.a1()
this.avT()
B.zs("dna_lab").bA(new B.dP2(this),x.P)},
gb3h(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3S.h(0,w[u])
t.toString
s.push(t)}return A.d.h1(s)},
ga92(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3h(),w,v))}return u},
avT(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eE()
k.dt(l.e*31+l.d*7+C.BS(new C.S(Date.now(),0,!1)))
w=new B.dOS(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mG(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3S.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h1(r))}if(!A.d.b6(t,new B.dOR()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b1_()},
b1_(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h04(s.ga92()[r])
v=J.dH(D.Ct.gee(D.Ct),new B.dOT(w)).dJ(0)
u=new C.eE()
u.dt(r+s.e)
A.d.fp(v,u)
u=C.a([w],x.s)
A.d.v(u,C.db(v,0,C.dG(3,"count",x.S),C.U(v).c))
t=new C.eE()
t.dt(s.e*3+r)
A.d.fp(u,t)
s.z=u},
aYW(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dmW.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3S.h(0,w.f[v])
u.toString
break A}u=B.h04(w.ga92()[v])
break A}w.m(new B.dOQ(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dP0(),e=new B.dOW(),d=h.d===2?h.gb3h():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mQ,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bX.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bX:A.bE,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga92()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cl(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.br5,A.ek,g,g,g))}v.push(C.bW(A.bB,u,A.br,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bW(A.bB,u,A.br,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Aj.NI,j<t.length?A.aA:A.bE,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.M7,C.bW(A.bB,u,A.br,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mQ,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dm
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b2:A.b_,1,A.q,-1)
if(o){o=D.Ct.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bY
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bW(A.bB,u,A.br,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bW(A.bB,u,A.br,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fd_(u,t>=(h.d===2?3:9)?A.b2:A.bX,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fd_(u,A.bX,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.TO,g,g,g))
v=C.c8(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bA,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d4L[j],h.d===j,new B.dOX(h,j),g,A.bX,g))
u=C.a([new B.eS(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.k6,"New strand",new B.dOY(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.Ct.h(0,i)
q.toString
a0.push(new B.fj(D.a_K,q,new B.dOZ(h,i),A.bX,g))}u.push(C.bW(A.bB,a0,A.br,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.avl:D.cOQ
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aC(g,C.p(A.A,new C.y(k,g,D.f0R,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dP_(h,k),g,g,g,g,g,g,!1,A.a7))}u.push(C.B(a0,A.m,g,A.qc,A.j,0,g,g))}return B.jI(A.bX,A.hc,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.UL.prototype={
T(){return new B.aCK(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCK.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(v.gc6E())
w.j0(0)
v.d!==$&&C.aP()
v.d=w
B.zs("ecosystem").bA(new B.dRS(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.buW()},
gaMA(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c6F(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cz(v,0)}if(m.gaMA()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bn(w),5)===0)B.vU("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dRF())},
aae(d){this.m(new B.dRE(this,d))
B.vX("pop",3,120,0.4)},
c6H(){return this.m(new B.dRG(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.Yr,B.fd_(r,t.gaMA()?A.b2:A.c9,s),s),C.E(new C.D(D.brB,C.bw(C.m(18),C.b3(s,s,s,new B.bdl(t.f,t.r,t.w,s),A.f5),A.aq),s),1),new C.D(A.eI,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f7T,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hF(A.b2,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dRK(t),w)
v=t.y
v=B.hF(A.bO,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRL(t),v)
u=t.z
return B.jI(A.b2,A.hc,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hF(A.cs,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRM(t),u),new B.eS(C.a([new B.dA("Drought",!1,new B.dRN(t),A.yw,A.aM,s),new B.dA("Disease",!1,new B.dRO(t),D.bGy,A.bu,s),new B.dA("+ Foxes",!1,new B.dRP(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRQ(t),s,A.bO,s),new B.dA("Reset",!1,t.gc6G(),A.k6,A.aN,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdl.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bVM.av(0,new C.a9(0,0,d,a0)))
a1.b_(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v6,A.be,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.b_(new C.a9(0,v,d,v+u),t)
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
l.delete()}k=new B.d44(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bec.gp(0)
a1.b_(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dm.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d46(h,j,a1)
g.$3(0,100,A.be)
g.$3(1,120,A.bO)
g.$3(2,24,A.cs)
g=new B.d45(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.be,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bO,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aL_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aRp.prototype={
guW(){return A.d.cJ(this.a,0,new B.bFE())}}
B.U_.prototype={
T(){var w=x.S
return new B.biC(B.i_c(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.biC.prototype={
gvT(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dCt())},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dCG(v))
w.j0(0)
v.x!==$&&C.aP()
v.x=w
B.zs("balance_lab").bA(new B.dCH(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buz()},
cyw(d){var w,v=this
v.m(new B.dCu(v,d))
B.vX("click",v.f[d],60,0.4)
if(v.gvT()===v.d[v.e].guW()&&v.r.L(0,v.e)){B.vX("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vU("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dCz(),C.U(k).k("M<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvT()===m[o.e].guW())s="\u2696\ufe0f Balanced! "+m[o.e].guW()+" = "+o.gvT()+". The torques are equal, so the seesaw stays level."
else s=o.gvT()>m[o.e].guW()?"The right side is too strong ("+o.gvT()+" vs "+m[o.e].guW()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guW()+" vs "+o.gvT()+"). Add weight to the right, or place it further from the middle."
k=o.gvT()===m[o.e].guW()?A.b2:A.aM
k=B.bzE(s,k,o.gvT()===m[o.e].guW()&&o.e<m.length-1?new B.fj(A.j0,"Next",new B.dCA(o),A.b2,n):n)
w=C.E(C.cq(new B.dCB(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guW(),n,n,n,n,n,n,D.aR6,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.Yr,k,n),w,new C.D(D.ahr,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvT(),n,n,n,n,n,n,D.aR6,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dCC(o,v),n,A.aM,n))}return B.jI(A.aM,A.hc,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eS(u,"LEVEL",n),new B.eS(C.a([new B.dA("Clear right side",!1,new B.dCD(o),A.k6,A.c9,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9l.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
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
d.b_(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.j8(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hf)
w=C.N()
w.saq(D.bYs.av(0,new C.a9(t.a,t.b,t.c,t.d)))
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
B.fqs(d,""+Math.abs(s),new C.v(w,22),A.bY,10)}q=new B.cDU(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aN)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bX)
if(w[s]===0){l=C.bx(C.cg(new C.v(m,-22),22,v),A.hf)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b_.gp(0)
r=k.H()
i.drawRRect(C.et(l),r)
r.delete()
B.fqs(d,"+",new C.v(m,-22),A.bY,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.af(new C.v(h,f),7,i)},
au(d){return!0},
gjo(){return this.e}}
B.UZ.prototype={
T(){return new B.bj9(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bj9.prototype={
ga0t(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadH(){var w=this.ga0t(),v=this.r,u=D.ay6[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dVV(v))
w.j0(0)
v.x!==$&&C.aP()
v.x=w
B.zs("gear_lab").bA(new B.dVW(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bv3()},
c6J(d,e){var w,v=this
v.m(new B.dVL(v,d,e))
if(v.gadH()&&v.w.L(0,v.r)){B.vX("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vU("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0t(),n=r.ga0t(),m=D.ay6[r.r].a
m=r.gadH()?"\u2705 Done! Ratio "+A.k.ab(r.ga0t(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadH()?A.b2:A.cs
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.Yr,B.bzE(m,w,r.gadH()&&r.r<7?new B.fj(A.j0,"Next",new B.dVP(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.beP(v,r.f,q),A.f5),1),new C.D(D.ahr,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0t(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a7A,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVQ(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eS(o,"GOAL",q),B.hF(A.aN,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVR(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avi("Gear "+s+" teeth",p,new B.dVS(r,t),8,40,D.deq[t],""+p,q))}return B.jI(A.cs,A.hc,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.beP.prototype={
bQ6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ei6,D.enz,D.eDW,D.euG],s=v===0,r=0;r<4;++r){q=t[r]
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
n=A.d.ff(g,A.ps)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bY(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.dc4(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cR)
h.$5(new C.v(0,0),g[0],w[0],j,A.n0)
h.$5(new C.v(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.dc5(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aN)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.U8.prototype={
T(){var w=$.aw()
return new B.biP(new C.as(new C.bb("Meet me at noon",A.b5,A.aO),w),new C.as(new C.bb("LEMON",A.b5,A.aO),w),C.aX(x.S))}}
B.biP.prototype={
a_(){this.a1()
this.aXz()
B.zs("cipher_lab").bA(new B.dGF(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aXz(){this.y=1+A.cG.aw(25)
this.z=0},
ga9w(){var w=this
return B.a1t(B.a1t(D.H4[w.x],w.y),-w.z)===D.H4[w.x]},
gaxx(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1t(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1t(u,0).split(""),x.s),new B.dGn(),x.dv).h1(0)
break A}w=B.ibY(u,v.e.a.a)
break A}return w},
aSQ(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ff(q,A.Ah))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bB(1,A.bh,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aN,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mr,r,r,r,r),new C.y(C.jH(65+s),r,D.f9H,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m_,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dA,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dGw(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f3X,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dGx(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iP,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fAu)
w.push(A.au)
v=A.aN.j(0.12)
u=C.m(14)
t=C.I(A.aN.j(0.4),A.q,1)
w.push(C.p(o,C.zL(p.gaxx().length===0?"\u2026":p.gaxx(),D.f8G,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bA,o,o,o))
w.push(A.ac)
w.push(B.bzE(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aN,o))
w.push(A.ac)
w.push(D.fgP)
w.push(A.au)
w.push(p.aSQ(p.gaxx()))
w.push(A.au)
w.push(D.fjd)
s=C.cw(w,o,A.bA,o,o,A.ag,!1)}else{w=B.bzE("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1t(D.H4[p.x],p.y),o,o,o,o,o,o,D.f9g,o,o,o)
u=(p.ga9w()?A.b2:A.aN).j(0.14)
t=C.m(14)
r=C.I((p.ga9w()?A.b2:A.aN).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fu2,v,A.R,D.foq,C.p(o,C.d(B.a1t(B.a1t(D.H4[p.x],p.y),-p.z),o,o,o,o,o,o,D.faJ,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bA,o,o,o),A.ac,p.aSQ(B.a1t(D.H4[p.x],p.y)),A.O],x.p)
if(p.ga9w())t.push(B.bzE("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fj(A.k6,"Next",new B.dGy(p),A.b2,o)))
s=C.cw(t,o,A.bA,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eS(C.a([new B.dA("Make a secret",w===0,new B.dGz(p),A.jq,A.aN,o),new B.dA("Crack a code",w===1,new B.dGA(p),A.q3,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dGB(p,q),o,A.aN,o))
v=C.a([new B.eS(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hF(A.aN,""+u,"Shift",25,1,new B.dGC(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hF(A.aM,""+v,"Shift back",25,0,new B.dGD(p),v))}return B.jI(A.aN,A.hc,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aKE.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aL7.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.ec.prototype={}
B.tt.prototype={
apJ(d,e,f,g){var w=this
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
B.aa2.prototype={}
B.ab9.prototype={}
B.a4b.prototype={
bd6(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hg()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aa2(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c2B(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new B.bLR())},
ajx(d,e,f,g){var w="p"+this.c++,v=new B.tt(w,e,f,g)
v.apJ(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new B.bM1(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cGy(d,e,f,g,h){return A.d.b6(this.b,new B.bLX(e,f,g,h))},
akg(d,e,f,g){var w
if(d===f||this.cGy(0,d,e,f,g))return null
w=new B.ab9(d,e,f,g)
this.b.push(w)
return w},
aA6(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zE(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amR(d){return this.Ly(d)&&!d.x&&d.cx>this.zE(d)},
b5H(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Ly(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c6K(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.z3.h(0,v)
if(w!=null)return w.a
return 100},
v3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2B(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bM2(a2),t).cJ(0,0,new B.bM3(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bM5(o)
m=C.a([],x.t)
l=new B.bM4(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bM7(g,l,n)
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
a2.b5D(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zE(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5D(e,d,w,!0)
a2.bN0(a4)},
b5D(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLT(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLS(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLV(C.T(b3,b3),r,b5)
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
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5H(t)*(1+t.CW))
a4=b2.aA6(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c6K(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQ5(e,a0,b8)
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
bQ5(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bN0(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aA6(o)/a1.b5H(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zE(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bF6(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bd6(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tK(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tK(o,"The "+$.qg().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the "+$.qg().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tK(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.z3.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qg().h(0,n).b
l=f.b
l=l===A.k.k9(l)?""+A.k.V(l):C.u(l)
g=f.c
g=g===A.k.k9(g)?""+A.k.V(g):C.u(g)
a1.tK(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eQK.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tK(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tK(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tK(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tK(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tK(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tK(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bF6(d){return A.d.b6(this.a,new B.bLQ(d))},
tK(d,e){var w
d.x=!0
d.ay=e
this.bd6(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhL(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGj(d){var w=d.b
return D.aNv.t(0,w)||D.z3.ai(0,w)||w==="buck"||w==="regulator"},
bex(d){var w,v=!0
if(!this.Ly(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.z3.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uv(d,e){var w=this.b
return new C.a_(w,new B.bM9(d,e),C.U(w).k("a_<1>")).gM(0)},
Ct(d){var w,v
if(d.x)return!1
w=d.b
if(D.z3.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qg().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGj(d)||i.Ct(d))return null
w=i.Uv(d,0)
v=i.Uv(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcP2(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.k9(r)?""+A.k.V(r):C.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.z3.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGo("battery"),o=J.aV(t.a),t=new C.f0(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Uv(n,0)+i.Uv(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGo("switch"),o=J.aV(t.a),t=new C.f0(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qg().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zE(k))return"The "+$.qg().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zE(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b6(u,new B.bLY(i,d))
h=q.b
h=h===A.k.k9(h)?""+A.k.V(h):C.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGo(d){var w=this.a
return new C.a_(w,new B.bM0(d),C.U(w).k("a_<1>"))},
aFX(d){return this.aGo(d).b6(0,new B.bM_(0.35))},
pL(d,e){return A.d.b6(this.a,new B.bLZ(e))}}
B.aip.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.L8.gp(0)
c0.b_(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m0.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m0.ai(0,h.b)?(h.ch-1)*38:0
b4.cDw(c0,new C.v(k*b6+j*(42+i),l*b7),new C.v(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hxO(q.a,q.b,c1)
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
g.r=D.adm.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.z4
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mU.az(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cgr(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zE(a0)){g=j+0
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
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbM().a.snapshot()
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
e=a2.gbM().a.snapshot()
w.drawPath((a2.e=new C.cC(e)).a,s)
s.delete()
a9=new C.kh(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.em()
a9.a4(c0,new C.v(g+-3,f+-8))}if(!a0.x)g=(D.aNv.t(0,h)||D.z3.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ct(a0)&&r.Uv(a0,0)+r.Uv(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kh(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.em()
a9.a4(c0,new C.v(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m0.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.L8.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bex(a0)?A.c9:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bex(a0)){a9=new C.kh(new C.es("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c9,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.em()
a9.a4(c0,new C.v(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Xs,F.Xz,b2)
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
i.z=A.Rc
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b6(q,new B.bGQ())){b3=A.d.cJ(q,0,new B.bGR())
$.W()
b7=C.N()
b7.r=D.b9g.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b_(new C.a9(0,0,b8,b9),b7)
a9=C.h2(b5,b5,b5,b5,D.f0v,A.a4,A.c6,b5,A.dP,A.c5)
a9.wD(b6-24)
a9.a4(c0,new C.v(12,10))}},
qk(d,e,f,g,h){var w=null,v=C.h2(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dP,A.c5)
v.em()
v.a4(d,f)},
cDw(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hqg(a1,a2,a3)
d.F(new C.cV(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.adm,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aN,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bS
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aR(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bS
u.r=(a4?A.c:o).gp(0)
a0.aR(d,u)
if(q){n=new C.Sn(new C.vy(C.x3(d),!1,C.a([],x.f5))).gI(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jx()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jx()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jx()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jx()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jx()
i=t[u].MG(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OS(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b0:A.a3
u=g?A.b4:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.H6,null).av(0,d))
return w},
avI(d,e,f){return this.OS(d,e,f,!0)},
c2c(d,e){return this.OS(d,A.bl,A.iA,e)},
ah7(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLZ.av(0,C.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e7a)
v=e.ad(0,D.e7j)
u=C.N()
u.r=A.eb.gp(0)
u.c=1.2
d.bE(w,v,u)},
cgr(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bVr.av(0,D.eNC))
c0.c=3.4
c0.d=A.bS
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mI
c1.hU(D.eNu,w)
if(c3){w=C.bx(D.eNB,A.kd)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h6i(c2)
c1.bE(new C.v(-u,0),D.e8s,c0)
c1.bE(D.e6i,new C.v(u,0),c0)
t=c2.x
w=c2.b
s=D.m0.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bY(0,c2.ch)}switch(w){case"battery":b3.bBW(c1,c2)
break
case"solar":r=C.bx(D.eNx,A.is)
c1.aE(r,b3.OS(new C.a9(r.a,r.b,r.c,r.d),A.dy,A.bO,!1))
b9=C.N()
w=C.aq(D.bcE,A.d_,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bkB,A.mm,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ay,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a6g))
c1.b_(D.a6g,b9)
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
c1.aR(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dQ.j(0.9).gp(0)
c1.af(D.e6o,4+4*w,b9)
break
case"crank":n=C.bx(D.eNi,A.hg)
c1.aE(n,b3.avI(new C.a9(n.a,n.b,n.c,n.d),A.bq,A.bK))
b9=C.N()
b9.saq(D.aM_.av(0,C.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new C.v(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bS
c1.bE(A.J,m,b9)
b9=C.N()
b9.saq(D.eh6.av(0,C.bU(m,7)))
c1.af(m,7,b9)
b3.ah7(c1,D.e8l)
b3.ah7(c1,D.e6b)
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
l.r=A.bO.gp(0)
c1.aR(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cV(6,-14,2,-30))
l.push(new C.cV(-2,-14,0,-2))
l.push(new C.bE())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbM().a.snapshot()
v.drawPath((j.e=new C.cC(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.egN.av(0,C.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eNp,A.qn)
b9=C.N()
b9.saq(D.aow.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.ah7(c1,D.S4)
b3.ah7(c1,D.aGP)
i=c2.w?D.aGP:D.e5W
b9=C.N()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bS
c1.bE(D.S4,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bO).gp(0)
b9.c=4
b9.d=A.bS
c1.bE(D.S4,i,b9)
b9=C.lg(D.S4,i,0.85)
b9.toString
w=C.N()
w.r=A.aw.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aMC,D.aM3)
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
b9.r=C.aq(A.bO,A.cs,c2.fx).gp(0)
c1.bE(D.aH5,D.aGO,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bE(D.aH5,D.e8J,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bE(D.e6P,D.aGO,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cg(new C.v(F.mG[g]*22,0),20,9)
w=C.bx(f,A.hF)
o=b3.OS(f,A.d5,A.oA,!0).H()
b9.drawRRect(C.et(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.egZ.av(0,C.bU(A.J,21)))
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
b9.saq(D.egL.av(0,C.bU(A.J,13)))
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
case"resistor":a1=C.bx(D.aMC,D.aM3)
b9=C.N()
b9.saq(D.bYK.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
c1.b_(D.eNL,b9)
b9=c2.r
b3.qk(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e80,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.z4
c1.af(D.we,34,v)}n=C.cg(D.e5r,12,18)
c1.aE(C.bx(n,A.hF),b3.OS(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Wf
else{v=C.aq(A.e2,A.i_,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.EK
else{l=C.aq(A.dy,A.dQ,c2.fx)
l.toString}w.saq(new C.bT(A.t1,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rE,17)))
c1.af(A.rE,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rE,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cV(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aR(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e8F,D.e8H,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e6I,D.e6L,v)
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
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dy,D.bds,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aR(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dpj
c1.af(A.rE,30,v)}w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bE(D.e8L,D.e8K,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bE(D.e6R,D.e6Q,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cV(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j_
else{l=C.aq(A.eq,D.ae8,c2.fx)
l.toString}if(t)j=A.kt
else{j=C.aq(A.kr,A.aw,c2.fx)
j.toString}v.saq(new C.a8(A.ay,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eMP))
c1.aR(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.ji.gp(0)
c1.aR(a6,v)
v=C.N()
v.r=A.eK.gp(0)
c1.b_(D.eMV,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cV(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aR(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aE(C.bx(a7,A.hf),b3.avI(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.ct.gp(0)
c1.b_(D.eMC,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.b_(D.eMD,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cg(D.e5J,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c0(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qk(c1,"M",D.e8k,A.az,14)
break
case"buzzer":a8=C.cg(A.J,42,42)
b9=C.N()
b9.saq(D.eh2.av(0,a8))
c1.hU(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b_.gp(0)
c1.af(A.J,6,b9)
b3.qk(c1,"+",D.e8d,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bX.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c0(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eNl,A.hf)
w=C.N()
w.saq(D.bWp.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cV(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bB(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.be5.j(0.5*b9).gp(0)
w.z=A.jt
c1.aR(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bS
b9.r=C.aq(A.lK,A4.Xh,c2.fx).gp(0)
c1.aR(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hf)
w=C.N()
w.saq(D.bVj.av(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bO.gp(0)
c1.b_(D.eN0,w)
for(p=0;p<4;++p){b0=new C.kh(new C.es("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.H(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.js(1),b4,b4,b4,b4,A.c5,b4)
b0.em()
b0.a4(c1,new C.v(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aE(C.bx(b1,A.hF),b3.c2c(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.b_(new C.a9(-3,w,11,w+b9),v)
b3.qk(c1,"1F",D.we,A.c,11)
break
case"radio":a1=C.bx(D.a6g,A.hg)
b9=C.N()
b9.saq(D.bZ_.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oA.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bx(D.eNm,A.is)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lK.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fU:A.nP).gp(0)
c1.b_(D.eMF,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bE(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.saq(D.aM_.av(0,C.bU(D.a5l,6)))
c1.af(D.a5l,6,w)
w=C.N()
w.r=A.oA.gp(0)
c1.af(D.e6h,4,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=1.8
c1.bE(D.e6f,D.aGT,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGT,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nU.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c0(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eNw,A.hf)
v=C.N()
v.r=L.ml.gp(0)
c1.aE(w,v)
b2=C.bx(D.eNt,A.hF)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.et(b2),$.pv(),!0)
b9.translate(-33,-21)
E.h2s(c1,D.eTn,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.af(D.e6t,1.6,b9)}else{w=C.N()
w.r=D.vh.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aR(b9,w)}b9=C.N()
b9.r=A.bq.gp(0)
c1.b_(D.eMU,b9)
break}B.i9x(c1,c2,b3.b.d,b3.gc6L())
if(t)b3.qk(c1,"\u2716",D.e8O,A.aw,14)
if(s)c1.a.restore()},
bBW(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aE(C.bx(w,A.qn),m.avI(w,A.dy,A.iW))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.aop.av(0,v))
d.b_(v,u)
u=C.N()
u.r=A.dU.gp(0)
d.b_(D.eN9,u)
t=new C.a9(28,-5,34,5)
d.aE(C.bx(t,A.he),m.OS(t,A.dy,A.iA,!0))
m.qk(d,"+",D.e60,A.aM,11)
m.qk(d,"\u2212",D.e8m,A.ad,11)
m.qk(d,C.u(l===A.k.k9(l)?A.k.V(l):l)+"V",D.e86,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bE.gp(0)
d.b_(D.eN8,u)
u=e.as
s=C.N()
s.r=C.aq(A.aw,A.b2,u).gp(0)
d.b_(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qk(d,"FLAT",D.e8_,A.c9,9)}if(l>2){u=C.N()
u.r=A.b_.gp(0)
u.c=1
d.bE(D.e5x,D.aGy,u)
m.qk(d,l>3?"3 cells":"2 cells",D.e85,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.qn)
$.W()
s=C.N()
s.saq(D.bYx.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cR.gp(0)
d.b_(D.eNa,s)
for(u=d.a,q=0;q<2;++q){p=F.axM[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLZ.av(0,C.bU(new C.v(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qk(d,"9V",D.e81,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.is)
$.W()
s=C.N()
s.saq(D.aop.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bI.gp(0)
d.b_(D.eNv,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cg(new C.v(F.a39[q],-20),8,10),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.et(s),n)
n.delete()}m.qk(d,"+",D.e67,A.aw,10)
m.qk(d,"12V",D.e82,A.az,15)}},
au(d){return!0}}
B.mz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tt(o,r,q,p)
n.apJ(o,r,q,p)
k.push(n)
J.iv(s[4],new B.ckC(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akg(m,u[1],l,u[3])}}}
B.ain.prototype={
T(){var w=x.N
return new B.aio(A.J,A.av,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aio.prototype={
adK(d){var w=this,v=w.as
if(v!=null)v.a6(0)
w.m(new B.bGu(w,d))
w.as=C.cM(A.lk,new B.bGv(w))},
q(){var w=this.as
if(w!=null)w.a6(0)
w=this.ch
if(w!=null)w.a6(0)
this.brM()},
a_A(d,e){return this.cen(d,e)},
b_X(d){return this.a_A(d,!1)},
cen(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_A=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r5:A.xz
p=d.b
w=3
return C.b(E.h2K(s,r,p,d.ax<3.2,q,$.qg().h(0,p).b),$async$a_A)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_A,v)},
cr0(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.c8(0,d.a,new B.bGw()),t=J.cF(u)
t.L(u,v)
t.bq(u,new B.bGx(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a6(0)
w.a0V(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a6(0)
w.ch=C.cM(A.ku,new B.bGy(w,u,d))}},
a_g(d){return this.ccL(d)},
ccL(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_g=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.iaI(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_g)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_g,v)},
a0V(d){return this.coD(d)},
coD(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0V=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.bGs(u,d),t,!0,!0,!1,A.kC,!1,!1,x.H),$async$a0V)
case 2:return C.h(null,v)}})
return C.i($async$a0V,v)},
a_(){this.a1()
this.beH()
this.li()},
beH(){this.a.c.e=new B.bGN(this)},
lB(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v3(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.m0.h(0,s.b)
if((r==null?null:r.b)!==D.zu)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_A(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cG.aj()<0.5
else u=!1
if(u)E.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dE(900+A.cG.aw(800),"",90,0,0.1,o)
if(A.cG.aj()<0.35)E.dE(300+A.cG.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cG.aj()<0.4
else u=!1
if(u)E.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dE(330+A.o.E(110*A.k.bn(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dE((A.k.bn(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cG.aj()<0.5
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
q.m(new B.bGO())},
b6X(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m0.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0D(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dw<1>"),w=new C.dw(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m0.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cDx(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m0.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m0.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hqg(new C.v(k,n),new C.v(i,l),p)
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
adI(){this.a.toString
this.m(new B.bFY())},
boy(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cZR[v]
if(!A.d.b6(p.a.c.a,new B.bGP(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.I9:o
s=s?K.I9:o
q=t.ajx(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dE(1200,"",50,0,0.3,"tri")
p.adI()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qr[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.an(u+1,2)):w
r=t?A.d.fP(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b0s(s,!0))
n.a.toString
if(t)w.push(n.b0s(r,!0))
w.push(C.E(C.cq(new B.bGM(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0s(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qg()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aC(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zJ,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nx,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tH,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFZ(this,u),p,p,p,p,p,p,!1,A.a7))}return C.p(p,C.cw(m,p,A.h8,p,p,A.aP,!1),A.f,p,p,new C.o(F.AH,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZ0(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.ac4,w,C.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ahs,w,w,w)},
cgs(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qg().h(0,o),m=d.dy,l=d.fr,k=new B.bGh(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Ds,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bMB,p,p,p,new B.bG4(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GA,p,p,p,new B.bG5(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dw,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f95,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c9:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcD(d)
if(v!=null){l=(d.x?A.aw:A.aF).j(0.14)
j=C.m(10)
i=C.I((d.x?A.aw:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i2,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.ffu,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.h0y(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bG6(q,d,u),p,h,p))}l=C.bW(A.bB,l,A.br,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Ct(d)?"Showing: "+F.Q1[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.h3,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fj(A.G9,"Open big screen",new B.bG9(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o)&&!B.h0y(o)){l=C.a([A.am,C.d(q.a.c.Ct(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.h3,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fj(A.NJ,"Open the "+$.qg().h(0,o).b,new B.bGa(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.BL,"Make it bigger (or tap it 4 times)",new B.bGb(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Ct(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.f9V,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dfA[s]
j=r===A.k.k9(r)?A.k.V(r):r
l.push(new B.dA(C.u(j)+" V out",d.e===r,new B.bGc(q,d,r),p,h,p))}i.push(new C.D(A.lP,C.bW(A.bB,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fxE)
A.d.v(m,i)}if(q.a.c.Ly(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zE(d),2)
i=q.a.c
w=i.amR(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amR(d)?A.c9:A.er,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zE(d),0,1)
i=q.a.c.amR(d)?A.aw:A.b2
m.push(new C.D(A.i2,C.x(C.a([l,A.cU,C.bw(j,C.m3(A.bE,p,p,5,p,w,new C.lX(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i2,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f3U,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d5q[s]
j=r===1.5?"1.5 V (rechargeable)":C.u(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bGd(q,d,r),p,h,p))}m.push(C.bW(A.bB,l,A.br,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cXi[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bGe(q,d,r),p,h,p))}m.push(C.bW(A.bB,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGf(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGg(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bG7(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bG8(d)))
if(o==="crank")m.push(D.fta)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.h3,p,p,p))
return q.aZ0(new C.cT(D.b_f,C.c8(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.bai.prototype={}
B.UM.prototype={
T(){return new B.aCL(B.h6h(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCL.prototype={
a_(){this.a1()
$.aW.bT$.push(this)
this.adJ()},
adJ(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fwp(),$async$adJ)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i9V(t.d,r)
if(s!=null){t.m(new B.dS_(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adJ,v)},
ET(){var w,v=this
if(!v.as)return
w=B.i0s(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDd(w)},
j4(d){if(d!==A.fw)this.ET()},
q(){$.aW.hL(this)
this.ET()
this.a2()},
c6N(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a_<1>")
t=new C.a_(v,new B.dS8(q),u).gM(0)
s=new C.a_(v,new B.dS9(),u).gM(0)
r=new C.a_(v,w.gcSx(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dSa(q,t,s,r))}if(A.o.E(q.w,45)===0)q.ET()
if(A.o.E(q.w,10)===0){w=q.f
$.ahA()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahA()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BF("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dSb())
q.ET()
w=q.c
w.toString
w=C.X8(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahA()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mo,p,p,p,p,p,p,p,p,p,p))}},
ago(){var w=0,v=C.j(x.H),u=this,t
var $async$ago=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dRZ(u),t,null,!0,!0,x.H),$async$ago)
case 2:return C.h(null,v)}})
return C.i($async$ago,v)},
aZ_(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aC(w,C.hv(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aYZ(d,e,f,g){return this.aZ_(d,e,f,g,null)},
aqn(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aC(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ed,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeH(){var w=0,v=C.j(x.H),u=this,t
var $async$aeH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).cl(C.e8(new B.dRV(u),!1,null,x.H)),$async$aeH)
case 2:t=u.e.gbj()
if(t!=null)t.beH()
if(u.c!=null)u.m(new B.dRW())
u.ET()
return C.h(null,v)}})
return C.i($async$aeH,v)},
bF_(){var w,v,u,t,s=null,r=this.f
$.ahA()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.be:A.aw
u=C.m(9)
t=C.I(F.AH,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wv,s,s,s),s,s,s),A.f,s,D.b_m,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahu(){var w=0,v=C.j(x.H),u=this,t
var $async$ahu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.dS7(u),t,!0,!0,!0,A.kC,!1,!1,x.H),$async$ahu)
case 2:return C.h(null,v)}})
return C.i($async$ahu,v)},
c6O(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aC(r,C.p(r,D.bNP,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dSd(d),r,r,r,r,r,r,!1,A.a7),o=C.m(11)
o=C.p(r,D.b51,A.f,r,r,new C.o(A.bn,r,C.I(A.aN.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fvJ,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f0:A.fV,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awS(s.gccs(),r),A.rN,s.aYZ(A.y9,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dSe(s,d)),s.aZ_(A.ln,"Challenges",A.aM,s.gctD(),s.bF_()),s.aYZ(A.NC,"How to play",A.aN,new B.dSf(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqn(A.o3,"Circuits",A.bu,s.gcms()),A.bp,s.aqn(A.oQ,"Repair",A.aM,new B.dSg(s)),A.bp,s.aqn(D.ya,"Clear",A.c9,new B.dSh(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AH,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bxt,r,r,r)},
B(d){var w=this,v=null
$.arr="tech"
return C.c7(v,A.c_,C.bm(!0,C.x(C.a([w.c6O(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h58(w.d,w.e,w.gc6M(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awS.prototype={
T(){return new B.b8u(null,null)}}
B.b8u.prototype={
gawA(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,A.U,null,1,null,v)
w.cL(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawA().q()
this.bt1()},
B(d){var w=null,v=this.a.c
return C.aC(w,C.hv(new C.a7(42,42,C.c6(this.gawA(),new B.cBr(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
B.b8t.prototype={
a4(d,e){var w,v,u,t=null,s=e.ec(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mI
d.af(s,r+2+o*2,w)
w=C.N()
w.saq(D.egY.av(0,C.bU(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fV(A.A,0,6.283185307179586,A.x,D.cOP,t,new C.mn(p)).av(0,C.bU(s,r)))
d.af(s,r,v)
p=new B.cBq(d)
p.$3(s.ad(0,A.rE),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e71),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e8S),2.6,0.5+0.5*Math.cos(q))
u=C.h2(t,t,t,t,D.f0B,A.a4,A.c6,t,A.dP,A.c5)
u.em()
u.a4(d,s.ad(0,new C.v(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.axb.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.brL()}}
B.aJa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwx.prototype={}
B.fN.prototype={}
B.Jb.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m6.prototype={}
B.Ut.prototype={
T(){return new B.biW(null,null)}}
B.biW.prototype={
ga9_(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,A.o_,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga9_().q()
this.buS()},
gRD(){var w=this.ga9_().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m0.h(0,this.a.c)
if(v==null)v=D.aMT
return C.c7(w,U.Lt,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zv?this.bHb(v):this.cjc(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mD,w,w,w,new B.dNW(d),w,w,w,C.nA(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f2b,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c6P(d){var w
A:{if(D.Ix===d){w=0.46153846153846156
break A}if(D.uG===d){w=0.45
break A}if(D.wk===d){w=0.9259259259259258
break A}if(D.SH===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjc(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ix
A:{if(D.Ix===p){w=44
break A}if(D.uG===p){w=30
break A}if(D.wk===p){w=22
break A}if(D.SH===p){w=26
break A}w=14
break A}v=C.c6(this.ga9_(),new B.dNV(this,w,d,o),q)
if(p===D.a6p)v=new C.Dj(D.by5,v,q)
p=this.c6P(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fI(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.FG,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ay,A.aC,A.x,r,q,q),A.n),q,q,q,D.brO,new C.Q(u,u,u,u),q,q,q),q)},
b69(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bn(this.gRD()*0.4),0,100),q=d.b===D.Ix,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aV(A.o.u(C.dk(s)),2,"0")+":"+A.a.aV(A.o.u(C.h1(s)),2,"0"),t,t,t,t,t,t,A.rT,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bxO,t,t,t,3))}n.push(A.db)
n.push(D.foD)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bc(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.FG,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qq)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.ffO,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auy(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.db_,new C.a8(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.f6F,v,v,v)],w))
return C.aC(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNR(this,d),v,v,v,v,v,v,!1,A.a7)},
bYj(d,e){return this.auy(d,e,!0)},
bY1(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SH||n===D.wk,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kp,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b69(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b_,A.q,1)
w=C.aC(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aen(0,p.gRD(),o),A.f5),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hQ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNP(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k8[s]
t.push(new C.cp(A.A,o,o,p.bYj(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m0(0.92,t,v,8,12,A8.vv,o,!1),1)],u)
if(n!==D.a6p){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.db(F.k8,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auy(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qc,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bsD,T.aiU,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ay,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAz(d,e){var w=null
return C.p(w,C.x(C.a([this.b69(d),C.E(C.b3(w,w,w,new B.aen(e,this.gRD(),w),A.f5),1),C.aC(w,C.p(w,C.av(C.d(F.k8[e].a,w,w,w,w,w,w,A0.J0,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNK(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHb(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fI(1.5384615384615383,C.p(t,C.c6(this.ga9_(),new B.dNN(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ay,A.aC,A.x,w,t,t),A.n),t,t,t,D.bxo,new C.Q(8,8,8,s),t,t,t),t)}}
B.buC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kp,0.4)
t.toString
w.saq(new C.a8(A.ay,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.b_(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dpo
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aen.prototype={
a4(d,e){return E.Rg(d,e,this.b,this.c)},
au(d){return!0}}
B.aKX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aW2.prototype={}
B.Vh.prototype={
T(){return new B.bjv(C.T(x.S,x.N),A.av,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjv.prototype={
gvr(){var w=this.f
return w===$?this.f=B.h0E(0):w},
a_(){this.a1()
this.li()
B.zs("laser_maze").bA(new B.eaB(this),x.P)},
lB(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cz(w,v)}this.m(new B.eaC())},
adO(d){var w=this
w.m(new B.ear(w,d))
B.vU("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c74(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdE()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bn((d.a-t)/v)
q=A.k.bn((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvr().b.t(0,p)||p===o.gvr().e||o.gvr().d.ai(0,p))return
o.m(new B.eas(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.eav(t,B.hq9(t.gvr(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.eaw(t),A.k6,A.aM,s),new B.dA("Skip",!1,new B.eax(t),D.bGz,A.aN,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.eay(t),D.bGA,A.aN,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.eaz(t,v),s,A.aw,s))}return B.jI(A.aw,A.hc,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eS(p,s,s),new B.eS(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bgv.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdE()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dha(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kd)
v=$.W()
u=C.N()
u.r=L.ml.gp(0)
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
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.cg(p,u,u),A.hg)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bZ5.av(0,C.cg(p,a3,a3)))
q=o.H()
w.drawRRect(C.et(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.db(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bQ(a8,a8.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bB(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fF
a8.r=A.aw.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lv
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fF
a8.r=D.ae8.gp(0)
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fF
a8.r=A.c.gp(0)
a9.aR(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Cv
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
i=new C.kh(new C.es("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.js(1),a2,a2,a2,a2,A.c5,a2)
i.em()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.v(m-h/2,k-j.gbd(j)/2))}g=new B.dhd(a7,a3,a9)
a1.c.bL(0,new B.dhb(g))
a4.d.bL(0,new B.dhc(g))
f=a7.$1(a4.e)
a4=C.bx(C.cg(f,o,a3*0.8),A.hg)
a8=C.N()
a8.r=A.aw.gp(0)
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
B.Vj.prototype={
T(){var w=x.n
return new B.aDp(A.cG,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDp.prototype={
a_(){this.a1()
this.li()
B.zs("light_mixer").bA(new B.eaU(this),x.P)},
lB(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZ4()
w.m(new B.eaV())},
awE(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aw(5)/4)
u.e=t
if(A.d.d6(t,new B.eaF()))u.e[w.aw(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZ4(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hlr(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vX(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vU("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcyz(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cQP[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.eaO(v,B.hlr(v.e,t))),r=t[0]
r=B.hF(A.aw,""+A.k.V(r*100)+"%","Red",1,0,new B.eaP(v),r)
w=t[1]
w=B.hF(A.be,""+A.k.V(w*100)+"%","Green",1,0,new B.eaQ(v),w)
t=t[2]
return B.jI(A.b8,A.hc,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hF(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.eaR(v),t),new C.bI(A.a8,u,u,new B.fj(A.hn,"Lock it in",new B.eaS(v),A.b2,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bgK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qm)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.et(C.bx(new C.a9(0,0,n,m),A.qm)),$.pv(),!0)
v=e.gdE()*0.3
u=e.ec(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.v(0,l)),u.ad(0,new C.v(l,t)),u.ad(0,new C.v(v*0.55,t))]
r=[A.Er,I.ad9,I.adA]
d.lg(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nG
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qm)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b_.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLo.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwC.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvl()}}
B.aLp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwD.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvm()}}
B.btr.prototype={}
B.a82.prototype={
B(d){var w=null
return C.c7(C.eF(w,w,w,!0,!0,D.ael,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ann,w,w,w,new B.cff(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fEf,w,w,w,1,w,!0),D.ael,C.cw(C.a([D.ea8,C.cq(new B.cfg())],x.p),w,D.btD,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W9.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aEg(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEg.prototype={
a_(){this.a1()
this.li()},
b48(d){var w=this.d.length
return A.o.E(A.k.bn(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lB(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b48(v.f)
if(w!==v.x){v.x=w
B.lf("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eK8(v))
B.BF("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c81(){if(this.d.length<2)return
this.m(new B.eK4(this))},
aZq(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eK3(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc80(),p=s.d,o=C.E(C.aC(r,C.b3(r,r,r,new B.buO(p,s.f,r),A.f5),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fdZ,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.ax0[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aC(r,C.p(r,new C.y(p[v],r,D.fdf,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eK6(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return B.jI(A.aM,A.hc,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eS(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kI,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eK7(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dp,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hB,"Add",s.gc7Z(s),A.c,r),A.bp,new B.fj(A.mw,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.buO.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.baG.gp(0)
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
n.r=D.ax0[A.o.E(q,8)].gp(0)
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
k=new C.kh(new C.es(o,i,i,A.cO,i,i,i,i,i,i,D.f1o),A.a4,A.c6,new C.js(1),i,i,i,i,A.c5,i)
k.em()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.v(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.ae_.gp(0)
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
B.UT.prototype={
T(){return new B.bj4($,A.bx,0,C.a([],x.X),null,null)}}
B.bj4.prototype={
a_(){this.a1()
this.li()},
lB(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BF("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4P(900,new B.dUd())}w.m(new B.dUe())},
aZs(d){return this.m(new B.dU8(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aV(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aV(A.o.u(A.o.E(A.k.dk(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpD(l,A.c9,n),A.aO9)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f5D,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f4H,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wq,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d86[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dUa(o,q),n,A.c9,n))}m=o.f
p=m?A2.yi:A.iJ
m=m?"Pause":"Start"
return B.jI(A.c9,A.hc,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eS(u,n,n),new B.eS(C.a([new B.fj(p,m,new B.dUb(o),A.b2,n),new B.fj(A.k6,"Reset",new B.dUc(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bpD.prototype={
a4(d,e){var w,v,u,t,s=e.ec(A.J),r=e.a/2-14
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
v.saq(new C.fV(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.U5.prototype={
T(){return new B.biH($,A.bx,0,C.a([],x.X),null,null)}}
B.biH.prototype={
a_(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.R6.h(0,p.d)
w.toString
v=A.d.ff(w,new B.dF5())
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
B.lf("flute",D.bZJ[t]+5,1400,0.35)}p.m(new B.dF6())},
gc84(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.K1("Press Start",0.5)
w=D.R6.h(0,this.d)
w.toString
v=A.d.ff(w,new B.dF0())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.K1("Breathe in",0.5+0.5*A.dC.az(0,p))
case 1:return new C.K1("Hold",1)
case 2:return new C.K1("Breathe out",1-0.5*A.dC.az(0,p))
default:return new C.K1("Hold",0.5)}}}return new C.K1("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc84(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hy.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hy.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zN,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kI,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.R6.gee(D.R6));w.C();){v=w.gR(w)
o.push(new B.dA(v,r.d===v,new B.dF3(r,v),q,A.hy,q))}w=r.e
v=w?A.NS:A.iJ
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dF4(r),A.b2,q))
return B.jI(A.hy,A.hc,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eS(o,q,q))}}
B.aHF.prototype={}
B.UK.prototype={
T(){return new B.biZ(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biZ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mE,s,s,s,new B.dRu(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ex(C.aC(s,C.b3(s,s,s,new B.bl0(t.e,t.x,s),A.f5),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dRv(t),new B.dRw(t),s,s,s,s,s,s,s,s,s,new B.dRx(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cQb[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F8(v,u,new B.dRy(t,v),!1,s))}u=t.r
return B.jI(A.bC,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.x(C.a([new B.eS(o,s,s),B.hF(A.bC,""+A.k.V(u),"Brush",30,2,new B.dRz(t),u),new B.eS(C.a([new B.dA("Eraser",t.w,new B.dRA(t),A.G0,A.bC,s),new B.fj(A.rj,"Undo",new B.dRB(t),A.c,s),new B.fj(A.e6,"Clear",new B.dRC(t),A.c,s),new B.fj(A.Ny,"Paper",new B.dRD(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.bl0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.b_(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bS
p.e=A.fF
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
u.drawPath((q==null?k.e=new C.cC(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.Vv.prototype={
T(){var w=x.S
return new B.aDz(C.aX(w),C.aX(w))}}
B.aDz.prototype={
a_(){this.a1()
this.arS()},
arS(){var w,v,u=this,t=x.N,s=C.bo(D.dcS,!0,t)
A.d.CM(s)
w=x.S
v=C.U(s).c
t=C.C(C.db(s,0,C.dG(u.d,"count",w),v),t)
A.d.v(t,C.db(s,0,C.dG(u.d,"count",w),v))
A.d.CM(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8_(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lf("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.egg(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.nc,new B.egh(s,v,u),t)
else{s.x=!0
C.bN(Ad.Fi,new B.egi(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.TH,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xJ,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hE,A.j,0,q,q),q),C.E(C.il(!0,q,q,A.y,new C.hO(v,8,8,1,q),new B.egm(r),r.e.length,A.bm,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cRF[t]
o.push(new B.dA(s.b,r.d===s.a,new B.egn(r,s),q,A.aN,q))}o.push(new B.fj(D.bGx,"New game",new B.ego(r),A.b2,q))
return B.jI(A.aN,A.hc,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eS(o,q,q))}}
B.VI.prototype={
T(){return new B.aDV(C.a([],x.t))}}
B.aDV.prototype={
c83(d){A.d.a8(this.d)
this.w=!0
this.aZr()},
aZr(){this.d.push(A.cG.aw(4))
this.e=0
this.ZG()},
ZG(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.er8(t))
s=x.H
w=3
return C.b(C.bN(A.lO,null,s),$async$ZG)
case 3:r=t.d,q=C.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSA(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZG)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.er9(t))
case 1:return C.h(u,v)}})
return C.i($async$ZG,v)},
aSA(d){this.m(new B.er6(this,d))
B.lf("marimba",D.ap_[d]+5,450,0.55)
C.bN(A.Ff,new B.er7(this),x.H)},
c85(d){var w,v,u=this
if(!u.w||u.r)return
u.aSA(d)
w=u.d
v=u.e
if(w[v]!==d){E.dE(90,"",600,0,0.5,"saw")
u.m(new B.era(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.erb(u))
C.bN(A.ii,new B.erc(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.TO,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fel,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avU[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avU[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aC(p,C.df(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jk,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.erd(q,v),p,p,p,p,p,p,!1,A.a7))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d7,new C.fI(1,C.m0(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jI(A.bI,A.hc,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eS(C.a([new B.fj(A.iJ,n,q.gc82(q),A.b2,p)],m),p,p))}}
B.W2.prototype={
T(){return new B.bkc(new C.as(A.as,$.aw()))}}
B.bkc.prototype={
avp(d){return C.oG(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eFq(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eFz()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ab.wT),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aYN),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kH,"Bill amount",!0,!0,!1,m,m,m,m,D.fbW,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eFv(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aPD,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avp(w)),t.$2("Total","$"+n.avp(v)),X.LU,t.$3$big("Each of "+n.f+" pays","$"+n.avp(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fD,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cCs[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eFw(n,o),m,A.b2,m))}l=n.f
return B.jI(A.b2,A.hc,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eS(r,"TIP",m),B.hF(A.aN,""+l,"People",20,1,new B.eFx(n),l),new B.eS(C.a([new B.dA("Round up",n.r,new B.eFy(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.Vt.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bjG(w,A.cG,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjG.prototype={
a_(){this.a1()
this.li()},
lB(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bn(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
B.a81("snare",0.5)}u.m(new B.eeW())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hg()
u.w=t
u.x=t?0:3.141592653589793
B.lf("bell",24,400,0.5)}u.m(new B.eeX())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcH(v,o.r>0,n))}u=C.aC(n,C.av(C.bW(A.fR,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eeP(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aC(n,C.av(C.ee(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fba,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eh1,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eeQ(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=C.aC(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f0T,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kI,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eeR(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d5A[r]
v.push(new B.dA(q.b,o.d===q.a,new B.eeS(o,q),q.c,A.bu,n))}v=C.a([new B.eS(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hF(A.bu,""+s,"Dice",4,1,new B.eeT(o),s))}if(o.d==="num"){s=o.z
s=B.hF(A.bu,""+s,"From",100,1,new B.eeU(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hF(A.bu,""+p,"To",1000,2,new B.eeV(o),p)],m))}return B.jI(A.bu,A.hc,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bcH.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cG.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=C.a([],x.p)
for(s=D.do7.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.ab4,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bA,p,p,100),p)}}
B.aKK.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwt.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buF()}}
B.aL2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buZ()}}
B.aLx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwI.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvu()}}
B.aM0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwU.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvY()}}
B.b6h.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDQ.h(0,t)
$.arr=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.no,u,u,u,new B.cs9(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NC,s,u,u,u,22),u,u,u,new B.csa(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bwG,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AH,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fk,u,u,1/0))
return C.c7(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ed],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tH,C.aC(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eH,s,s,s,A.h9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cs5(t),s,s,s,s,s,s,!1,A.a7),s)}}
B.eS.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.c8(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cw,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avi.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auS(d).cJb(q,A.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9P(C.kY(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A0.J0,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tH,C.aF(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Ak.ahd,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ed,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cs4(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.F8.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f_c:u
w=t?A.c:A.b_
w=C.I(w,A.q,t?2.5:1)
return C.aC(u,C.df(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hz,u,r,D.agZ,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.csb(v),u,u,u,u,u,u,!1,A.a7)}}
B.mC.prototype={
a4P(d,e){var w=C.dj()
w.seL(C.cM(C.dC(0,0,0,d,0,0),new B.cs6(this,w,e)))
this.fu$.push(w.bi())},
li(){var w=this,v=w.qy(new B.cs8(w))
v.j0(0)
w.ft$!==$&&C.aP()
w.ft$=v}}
B.aaP.prototype={
by8(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bBm()
g.ay!==$&&C.aP()
g.ay=w},
bBm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaQ.prototype={
cF4(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.Fy(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v0.prototype={}
B.OY.prototype={}
B.xY.prototype={}
B.OX.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aoV[w.aw(7)]
w=w.hg()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lf(u,v+w-12,2200,0.1)}}
B.V_.prototype={
T(){var w=$.aw()
return new B.aCW(new C.cs(null,x.A),new C.as(A.as,w),new B.OX(A.cG),D.d7A,A.av,D.a2V,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCW.prototype={
a_(){var w,v=this
v.a1()
v.li()
v.a.toString
w=$.hes
if(w==null)w=$.hes=B.cuL()
w.bA(new B.dWW(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bv6()},
csM(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dWo(p[n]).$0())
w.push(q)}this.w=w},
gVT(){var w=this.fy
return w.A(0,A.av)?100:Math.min(w.a,w.b)*0.43},
at3(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
ax7(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.at3(d.x,d.w,105/Math.max(w,3))
C.eV()
B.lf("bell",(A.d.cK(D.a2v,d.c)+1)*3+12,900,0.45)
E.dE(300,"",280,1.4,0.15,"tri")},
lB(d){var w,v,u,t,s,r,q,p=this
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
c8K(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.av))return null
w=n.fy
v=n.gVT()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVT()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cF4((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c8J(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dWm(w))
return}w.m(new B.dWn(w,v,A.a.i(d).toLowerCase()))},
bOg(){var w=null,v=this.c
v.toString
C.cb(w,w,!0,w,new B.dWk(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bJd,n,n,n,o.gbOf(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mE,n,n,n,new B.dWH(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dWI(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Dv,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bRk,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc8I(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iP,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWJ(o,s),A.my,A.aN,n))}i.push(new C.D(A.i2,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWN(o),A.ho,A.aN,n)],l)
for(v=D.aDP.gdN(D.aDP),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dA(u.a,!1,new B.dWO(o,u),n,A.aN,n))}w.push(new B.dA("Random",!1,new B.dWP(o),A.mw,A.aN,n))
i.push(new B.eS(w,"GO TO",n))
w=o.z
i.push(B.hF(A.aN,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dWQ(o),w))
w=o.dy
i.push(B.hF(A.bI,A.a.aV(A.o.u(A.k.bn(w)),2,"0")+":00","Time",24,0,new B.dWR(o),w))
w=o.fr
i.push(B.hF(A.b2,o.crv(),"Season",365,0,new B.dWS(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lU:D.Gj
i.push(new B.eS(C.a([new B.dA("Spin",w,new B.dWT(o),D.bEn,A.aN,n),new B.dA("Night",v,new B.dWU(o),A.vE,A.aN,n),new B.dA("Borders",u,new B.dWK(o),D.bEr,A.aN,n),new B.dA("Names",r,new B.dWL(o),X.Ge,A.aN,n),new B.dA("Music",q,new B.dWM(o),p,A.aN,n)],l),n,n))
return B.jI(A.aN,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
crv(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awz[u])v=u
return A.il[v]+" "+(A.k.bn(w-D.awz[v])+1)},
c8H(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mQ(1,A.o.E((A.d.cK(D.a2v,t)+1)*47,360),0.55,1).iF()
r=new B.dWi()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dj,j,j,j),1),C.aH(j,j,j,j,A.GA,j,j,j,new B.dWh(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.h3,j,j,j)
m=D.dmO.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fuD(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GI(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GI(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fuD(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.W6,j,p,q,j,j,A.n),j,j,j,j,D.ahy,j,j,j)}}
B.beW.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AD.gp(0)
d8.b_(new C.a9(0,0,0+d4,0+d5),d7)
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aN.j(0.35),A.K],t),D.cTb,d3).av(0,C.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.eh5.av(0,n))
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
f=new B.dcV(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbM().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cC(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbM().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cC(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cK(D.a2v,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mQ(1,a9,a3,a8?1:0.62).iF().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fF
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
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bB(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbM().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbM().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rv
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbM().a.snapshot()):s).a,q)
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
c9=B.hNq(a7.a,a3,b2)
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b8u.j(0.78)],t),D.d7W,d3).av(0,C.bU(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dkm,d3).av(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fV.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aL8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.aL9.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv5()}}
B.btm.prototype={}
B.W5.prototype={
T(){return new B.bkg()}}
B.bkg.prototype={
gaS9(){var w=this.d
if(w===$)w=this.d=A.cG.aw(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AD,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ann,w,w,w,new B.eGj(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fxX,w,w,w,1,w,!0),u=C.m(18),t=A.aN.j(0.1),s=C.I(A.aN.j(0.35),A.q,1),r=x.p
return C.c7(v,D.AD,C.cw(C.a([C.p(w,C.B(C.a([D.bHW,A.at,C.E(C.d(D.cX3[this.gaS9()],w,w,w,w,w,w,D.a8e,w,w,w),1),C.aH(w,w,w,w,D.bSk,w,w,w,new B.eGk(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bA,w,w,w),A.aB,C.cq(new B.eGl())],r),w,A.YE,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.VR.prototype={
T(){return B.hNS()}}
B.bk2.prototype={
cjd(d){var w=d.c,v=B.hNU(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.li()},
lB(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjd(w)
u=new C.v(-v.a,-v.b).aG(0,t.w)
v=C.lg(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc8L(){var w=this.ch
return new C.v(w.a/2,w.b/2).ad(0,this.x)},
c8P(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cm[s]
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
aZN(d){this.m(new B.eym(this,d))
C.eV()
B.lf("bell",D.dky[A.o.E(A.d.cK(D.Cm,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mE,m,m,m,new B.eyx(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.eyy(n,l)),h=C.a([new B.dA("All",!1,new B.eyz(n),A.a0B,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cm[w]
h.push(new B.dA(v.a,n.z===v,new B.eyA(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hF(A.aM,s,"Time",1,0,new B.eyB(n),u/t)
u=n.w
u=B.hF(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.eyC(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lU:D.Gj
return B.jI(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eS(h,"GO TO",m),t,u,new B.eS(C.a([new B.dA("Orbits",s,new B.eyD(n),m,A.aM,m),new B.dA("Names",r,new B.eyE(n),m,A.aM,m),new B.dA("Asteroids",q,new B.eyF(n),m,A.aM,m),new B.dA("Music",p,new B.eyG(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c8M(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eyk(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kg,r,r,r),1),C.aH(r,r,r,r,A.GA,r,r,r,new B.eyj(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dw,r,r,r)
v=n.$2("WIDTH",B.GI(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.u(p)+" AU ("+B.GI(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eyl().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.W6,r,l,m,r,r,A.n),r,r,r,r,D.ahy,r,r,r)}}
B.brp.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AD.gp(0)
a7.b_(new C.a9(0,0,0+a5,0+a6),w)
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
o=a5.gc8L()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cm),t=new C.f0(a6,new B.f_I()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hNT(A.d.gI(D.Cm))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.saq(D.eh_.av(0,C.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hg4("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cm),t=new C.f0(a6,new B.f_J()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0=C.cg(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c0(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rv
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pq,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a27,a4).av(0,C.bU(new C.v(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d1h[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hg4(d,10.5,A.ad)
h.a4(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.V0.prototype={
T(){var w=x.i
return new B.aCX(new B.OX(A.cG),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCX.prototype={
cw2(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c8O(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e5I
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
E.dE(150,"",400,0,0.5,"noise")
E.dE(90,"",300,1.5,0.6,"sine")
s.m(new B.dX_())},
a_(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yQ[r]
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
break}}}if(A.d.d6(s,new B.dXs()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dE(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcm()>120)v.push(i.cx)
if(v.length>700)A.d.cz(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bMv()
else n=n==="weight"?p.cDm():p.bEB()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dhA[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dXe(p,t),t.c,A.cs,o))}v=C.a([new B.eS(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dXf(p),Ai.Gd,A.cs,o),new B.dA("Feather",s,new B.dXg(p),X.Nh,A.cs,o),new B.dA(q,r,new B.dXk(p),A.G1,A.aN,o)],w)
q=p.w
A.d.v(v,C.a([new B.eS(r,o,o),B.hF(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dXl(p),q),new B.eS(C.a([new B.fj(A.tU,"Drop!",new B.dXm(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hF(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dXn(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hF(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dXo(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hF(A.cs,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dXp(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hF(A.cs,A.k.ab(r,1)+"x out","View",8,0.5,new B.dXq(p),r),new B.eS(C.a([new B.fj(A.nn,"Fire!",p.gc8N(),A.b2,o),new B.fj(A.tU,"Falls",new B.dXr(p),A.c,o),new B.fj(A.rb,"Orbit 7.7",new B.dXh(p),A.c,o),new B.fj(D.bHl,"Oval 9",new B.dXi(p),A.c,o),new B.fj(A.BL,"Escape",new B.dXj(p),A.c,o)],w),o,o)],w))}return B.jI(A.cs,A.hc,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bMv(){return new C.D(D.brG,C.cq(new B.dWZ(this)),null)},
cDm(){var w,v,u,t=null,s=[D.eGF,D.eI7,D.eIf,D.eIy,D.eId,D.eIE,D.eHe,D.eJ0,D.eHS],r=x.p,q=C.a([D.flR,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cw,new C.cl(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bh,new C.Bm(new B.dX0(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fob)
return C.cw(q,t,A.ij,t,t,A.ag,!1)},
bEB(){return C.cq(new B.dWX(this))}}
B.ba7.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AD.gp(0)
d.b_(new C.a9(0,0,0+h,0+g),e)
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aN.j(0.35),A.K],x.O),D.d8P,i).av(0,C.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.saq(D.egU.av(0,C.bU(g,p)))
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
for(u=C.db(u,1,i,C.U(u).c),s=u.$ti,u=new C.bQ(u,u.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bB(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bS
f.r=A.cs.j(0.9).gp(0)
d.aR(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mI
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VJ.prototype={
T(){return new B.bk_(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bk_.prototype={
a_(){this.a1()
this.li()},
lB(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PY[l.e],i=D.PY[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mE,k,k,k,new B.erg(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqY(f,g,v,k),A.f5),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GI(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hH,A.L,k,k)
o=B.GI(v*v*v)
n=A.a.ca(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.zH,A.L,k,k),A.bD,C.d(p+": "+B.GI(w*2)+" km wide. "+r+": "+B.GI(h*2)+" km wide.",k,k,k,k,k,k,A6.zI,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.btN,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PY[m]
r.push(new B.dA(w.a,l.e===m,new B.erh(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PY[m]
w.push(new B.dA(s.a,l.f===m,new B.eri(l,m),k,C.b0(s.c),k))}return B.jI(A.bX,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ex(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eS(r,"FIRST",k),new B.eS(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.bqY.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.WM.gp(0)
d.b_(new C.a9(0,0,0+h,0+g),w)
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
w=new B.eYR(d)
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
k=C.h2(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.f7q,s.a),A.a4,A.c6,i,A.dP,A.c5)
k.em()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.v(-w/2,h)))
j=C.h2(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.faK,t.a),A.a4,A.c6,i,A.dP,A.c5)
j.em()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.v(-h/2,-t.gbd(t)/2)))},
au(d){return!0}}
B.aLa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwA.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv7()}}
B.aLJ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwO.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvG()}}
B.aLM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwQ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvJ()}}
B.Pr.prototype={}
B.U3.prototype={
T(){return B.hNQ()}}
B.biG.prototype={
a_(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fo(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dE(70,"",500,0.3,0.5,"sine")}}A.d.bq(w,new B.dEx())},
aZO(d){var w,v,u,t=this.Q
if(t.A(0,A.av))return
w=this.gb7L()
v=d.aC(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pr(t,u,1.2,new C.vD(1,30+A.cG.aj()*40,0.9,0.7).iF()))
B.lf("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7L(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dEl(),C.U(m).k("M<1,L>")).ff(0,A.v2),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mE,n,n,n,new B.dEm(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dEn(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fuD(s)+" Suns"
t=B.hF(A.bu,s,"Mass",1,0,new B.dEp(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dEq(o),n,A.bu,n),new B.dA("Cygnus X-1 (21)",!1,new B.dEr(o),n,A.bu,n),new B.dA("Milky Way core (4 million)",!1,new B.dEs(o),n,A.bu,n),new B.dA("M87 (6.5 billion)",!1,new B.dEt(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lU:D.Gj
return B.jI(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eS(u,"LIKE",n),new B.eS(C.a([new B.dA("Glowing ring",s,new B.dEu(o),n,A.bu,n),new B.dA("Bent light",r,new B.dEv(o),n,A.bu,n),new B.dA("Music",q,new B.dEw(o),p,A.bu,n),new B.fj(A.k6,"Clear",new B.dEo(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aeu(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f3n,w,w,w),A.bD,C.d(e,w,2,w,w,w,w,L.zF,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9w.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bgz.gp(0)
b2.b_(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb7L()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=S.Rb
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.va,A.fl,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cOg,null).av(0,C.bU(u,b0)))
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
o.z=G.mI
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aez.prototype={}
B.UX.prototype={
T(){var w=x.r,v=x.g
return new B.bj7(new C.cs(null,x.A),new B.OX(A.cG),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bj7.prototype={
a_(){this.a1()
this.ZT()
this.li()},
ZT(){var w,v,u,t,s,r,q,p,o=this,n=new C.eE()
n.dt(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aez(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aw(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hg()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aez(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cvT(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e7b
k.cx=D.e7e
w=new C.eE()
w.dt(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aez(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.db(s,0,C.dG(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bQ(s,s.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.db(u,0,C.dG(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bQ(u,u.gM(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dE(110,"",900,0.5,0.45,"sine")},
lB(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.eG(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aC(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dVx(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mE,r,r,r,new B.dVn(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.beM(s,r),A.av),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Af.a7v,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d4p[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dVo(s,u),r,A.h5,r))}l.push(new B.dA("Collide",s.ch,new B.dVp(s),A.y7,A.bX,r))
o=C.a([new B.eS(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hF(A.h5,""+n,"Arms",6,2,new B.dVq(s),n)
l=s.r
A.d.v(o,C.a([n,B.hF(A.h5,A.k.ab(l,1),"Winding",6,0.8,new B.dVr(s),l)],q))}n=s.as
o.push(B.hF(A.h5,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dVs(s),n))
n=s.ax
o.push(B.hF(A.h5,A.k.ab(n,1)+"x","Speed",4,0,new B.dVt(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lU:D.Gj
o.push(new B.eS(C.a([new B.dA("Dark matter",n,new B.dVu(s),r,A.bu,r),new B.dA("You are here",l,new B.dVv(s),r,A.aM,r),new B.dA("Music",w,new B.dVw(s),t,A.h5,r)],q),r,r))
return B.jI(A.h5,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ex(new C.an(A.W,r,A.b1,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.beM.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.biD.gp(0)
a3.b_(new C.a9(0,0,0+a1,0+a2),w)
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
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cbR,a0).av(0,C.bU(o,a2)))
a3.af(o,a2,t)}m=new B.da1(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.fU.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
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
l.r=new H.mQ(1,r,q>200?0.45:0.55,1).iF().j(0.35+(1-s)*0.5).gp(0)
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
f=C.h2(a0,a0,a0,a0,D.f0r,A.a4,A.c6,a0,A.dP,A.c5)
f.em()
f.a4(a3,g.ad(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bjR.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.beH.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fU.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.ix.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.VF.prototype={
T(){return new B.bjZ(new C.cs(null,x.A),new B.OX(A.cG),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjZ.prototype={
a_(){this.a1()
this.li()},
lB(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bn(w*4)
if(u!==A.k.bn(t.as))B.lf("bell",60+u*4,500,0.35)
t.as=u}},
gcru(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gchQ(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mE,q,q,q,new B.eqv(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ex(C.b3(q,q,q,new B.bqd(r,q),A.f5),r.d),1)
if(r.f==="seasons")w=r.gcru()
else{w=r.gchQ()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.TF,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahI,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.yi:A.iJ
t=r.Q
s=t?A.lU:D.Gj
s=C.a([new B.eS(C.a([new B.dA("Seasons",n==="seasons",new B.eqw(r),A.yw,A.bv,q),new B.dA("Moon phases",n==="moon",new B.eqx(r),A.vE,A.bv,q),new B.dA(u,!1,new B.eqy(r),v,A.bv,q),new B.dA("Music",t,new B.eqz(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hF(A.bv,D.d3K[A.o.E(A.k.bn(n*12),12)],"Month",1,0,new B.eqA(r),n)
v=r.z
A.d.v(s,C.a([n,B.hF(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.eqB(r),v)],p))}else{p=r.w
s.push(B.hF(A.bv,""+(A.k.bn(p*29.5)+1),"Day of month",1,0,new B.eqC(r),p))}p=r.y
s.push(B.hF(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.eqD(r),p))
return B.jI(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqd.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AD.gp(0)
b9.b_(new C.a9(0,0,0+b5,0+b6),b8)
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
u=C.cg(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b_.gp(0)
b9.hU(u,t)
t=C.N()
t.saq(D.egW.av(0,C.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eG(0,p.aC(0,l).gcm())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bgv.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qv(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.eh4.av(0,C.bU(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aG(0,k).aG(0,1.7)
b5=h.aG(0,k).aG(0,1.7)
t=C.N()
t.c=2
t.r=A.c9.gp(0)
b9.bE(b7,b5,t)
t=h.aG(0,k).aG(0,1.7)
b5=C.N()
b5.r=A.c9.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.h2(b4,b4,b4,b4,C.d3(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRa,b5),A.a4,A.c6,b4,A.dP,A.c5)
f.em()
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
r.saq(new C.bT(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bca,D.afB],x.O),D.cW0,b4).av(0,C.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b9r.gp(0)
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
b9.b_(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eG(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asG[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aN.j(0.45).gp(0)
a7.z=A.jt
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b9m.gp(0)
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
b1.aCo(new C.v(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCo(new C.v(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bO.gp(0)
b9.aR(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b_.gp(0)
b9.af(a8,a9,b8)
b3=C.h2(b4,b4,b4,b4,D.f0s,A.a4,A.c6,b4,A.dP,A.c5)
b3.em()
b3.a4(b9,a8.ad(0,new C.v(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKH.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bws.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buC()}}
B.aL5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwz.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv1()}}
B.aLI.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
B.bwN.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvF()}}
var z=a.updateTypes(["~()","R(tt)","R(a4b)","aA<~>()","R(Cj)","G(tt,G)","L(L,tt)","R(Cf)","R(Z0)","R(ab9)","R(v0)","R(a2P)","R(nn)","R(a_x)","R(abX)","G(G)","U9()","UL()","U_()","UZ()","Vh()","Vj()","U8()","VD()","VS()","VE()","VA()","VZ()","U7()","W3()","R(mz)","Vu()","Vz()","aeE(Y,G)","adw(Y,G)","~(a5<@,@>)","G(Cf,Cf)","n(ec)","R(aeu)","R(a0f)","R(Ct)","R(abE)","R(adA)","R(abn)","G(G,qJ)","G(G,Cj)","n(qJ)","~(qJ,ai<n>,G)","qJ?(Cj)","R(qJ)","r(n,a02)","R(PJ)","~(Au)","R(abu)","L(G?)","W5()","R(FF)","R(acM)","L(G)","UM()","L(Pr)","R(aa2)","U4()","a82()","~(B2,n,v,w,L)","~(n,tt)","Vx()","Vc(Y)","N9(Y)","Ut(Y,br<L>,br<L>)","W9()","UT()","U5()","UK()","Vv()","VI()","W2()","Vt()","~(n)","cr(aaQ)","R(aaP)","V_()","VR()","V0()","U3()","UX()","VJ()","VF()","Uv()","R(Pr)","~(ba)"])
B.fwN.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fn_.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.ftL.prototype={
$1(d){var w
if(!this.a.Ly(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.ftM.prototype={
$1(d){return d.x},
$S:z+1}
B.fwK.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fwL.prototype={
$1(d){var w
if(!this.a.Ly(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fwM.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e7B.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e7C.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e7D.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.md(v,A.dV,A.ih)}},
$S:9}
B.e7O.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e7P.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e7K.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e7I.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e7J(w,this.b,e)))},
$S:1844}
B.e7J.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e7L.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVW().ajx(0,u[1],u[2],u[3])
u[4].bL(0,new B.e7G(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e7H(w.a,v,w.f,w.r))},
$S:0}
B.e7G.prototype={
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
B.e7H.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bn(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e7M.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVW().akg(t,u[1],s,u[3])
E.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e7F(w.a,v,w.e,w.f))},
$S:0}
B.e7F.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bn(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e7N.prototype={
$0(){E.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e7E(w,this.b))},
$S:0}
B.e7E.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e7S.prototype={
$0(){var w=this.a
return w.m(new B.e7R(w))},
$S:0}
B.e7R.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e7T.prototype={
$0(){var w=this.a
return w.m(new B.e7Q(w))},
$S:0}
B.e7Q.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e7U.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.Nm()},
$S:0}
B.e7V.prototype={
$0(){return this.a.XW(this.b)},
$S:0}
B.e7W.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nm():w.aVt()},
$S:2}
B.e7X.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nm():w.aVt()},
$S:0}
B.enH.prototype={
$2(d,e){return d+e},
$S:1845}
B.eo0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eo_(w,d))},
$S:130}
B.eo_.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eo1.prototype={
$0(){},
$S:0}
B.eo2.prototype={
$0(){},
$S:0}
B.enJ.prototype={
$0(){return this.a.m(new B.enI(this.b,this.c))},
$S:0}
B.enI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.eny.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.enz.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.enA.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.enB.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.enC.prototype={
$1(d){return this.a.db===d},
$S:33}
B.enD.prototype={
$1(d){return this.a.db=d},
$S:29}
B.enE.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.enF.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:29}
B.enG.prototype={
$0(){var w=this.a
return w.m(w.gaw1())},
$S:0}
B.enw.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
B.enx.prototype={
$1(d){return this.a.$1(!1)},
$S:128}
B.env.prototype={
$1(d){return this.a.$1(!1)},
$S:199}
B.enU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgs(o,p),n)
w=this.b
v=B.bz8("WORLD",w.a,w.c)
u=B.bz8("GRAVITY",C.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c9:A.b2
t=B.bz8("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Ce[o.db].d?A.c9:A.c
q=x.p
s=C.a([v,u,t,B.bz8("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bz8("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hE,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDx(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rp[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mA,"Again",new B.enP(o),A.c,p),new B.fj(A.oQ,"Rebuild",new B.enQ(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j0,"Next world",new B.enR(o),A.b2,p))
n.push(B.hjL("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hjL("Crash!",o.at,A.c9,C.a([new B.fj(A.mA,"Try again",new B.enS(o),A.b2,p),new B.fj(A.oQ,"Rebuild",new B.enT(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b1,A.r,n,p)},
$S:62}
B.enP.prototype={
$0(){var w=this.a
return w.m(w.gaw1())},
$S:0}
B.enQ.prototype={
$0(){var w=this.a
return w.m(new B.enM(w))},
$S:0}
B.enM.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.enR.prototype={
$0(){var w=this.a
return w.m(new B.enL(w))},
$S:0}
B.enL.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.enS.prototype={
$0(){var w=this.a
return w.m(w.gaw1())},
$S:0}
B.enT.prototype={
$0(){var w=this.a
return w.m(new B.enK(w))},
$S:0}
B.enK.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.enV.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.enO(v,w))},
$S:0}
B.enO.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.enW.prototype={
$1(d){return this.a.y=d},
$S:8}
B.enX.prototype={
$1(d){return this.a.Q=d},
$S:8}
B.enY.prototype={
$1(d){return this.a.z=d},
$S:8}
B.enZ.prototype={
$0(){var w=this.a
return w.m(new B.enN(w))},
$S:0}
B.enN.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEZ.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hf6
if(q==null)q=$.hf6=B.cF2()
w=3
return C.b(C.iN(C.a([q,$.qS().bfQ("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kF(0,C.cQ(J.q(s,1)))
q.m(new B.dEY(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dEY.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dEB.prototype={
$0(){return this.a.bV_(C.aU(J.q(this.b,"group")))},
$S:0}
B.dEC.prototype={
$1(d){return A.a.aV(A.o.fW(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:277}
B.dF_.prototype={
$0(){return B.a81("kick",0.25)},
$S:0}
B.dED.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dEE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dEF.prototype={
$0(){return B.a81("kick",0.5)},
$S:0}
B.dEG.prototype={
$0(){return E.dE(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
B.dEI.prototype={
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
u=w}if(u.cx!=null&&!A.d.b6(u.d.e,new B.dEH(u)))u.cx=null
u.go=0},
$S:0}
B.dEH.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axK(d)},
$S:z+11}
B.dEy.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dEz.prototype={
$0(){var w=this.a
return w.m(w.gc4n())},
$S:0}
B.dEA.prototype={
$0(){return this.a.aha(null)},
$S:0}
B.dEP.prototype={
$0(){var w=this.a.as
return w==null?null:w.eZ(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEQ.prototype={
$0(){return this.a.cA2(this.b.a)},
$S:0}
B.dER.prototype={
$0(){return this.a.aha(this.b)},
$S:0}
B.dES.prototype={
$1(d){var w=this.a
return w.m(new B.dEO(w,d))},
$S:6}
B.dEO.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dET.prototype={
$0(){var w=this.a
return w.m(new B.dEN(w,this.b))},
$S:0}
B.dEN.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEU.prototype={
$0(){var w=this.a
return w.m(new B.dEM(w))},
$S:0}
B.dEM.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dEV.prototype={
$0(){var w=this.a
return w.m(new B.dEL(w))},
$S:0}
B.dEL.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eZ(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ka},
$S:0}
B.dEW.prototype={
$0(){var w=this.a
return w.m(new B.dEK(w))},
$S:0}
B.dEK.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aY7()
else w.p2=null},
$S:0}
B.dEX.prototype={
$0(){var w=this.a
return w.m(new B.dEJ(w))},
$S:0}
B.dEJ.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c0j.prototype={
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
$S:316}
B.c0k.prototype={
$1(d){var w=new C.rL([],[]).pB(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:479}
B.fgH.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:213}
B.fgI.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:213}
B.fgJ.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:213}
B.fgQ.prototype={
$1(d){return!J.q(d,0)},
$S:213}
B.fgR.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:213}
B.fgS.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:213}
B.dH9.prototype={
$1(d){return this.a.asI(0)},
$S:9}
B.dGO.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i_Y(),C.U(w).k("M<1,G>")).fO(0)},
$S:0}
B.dGR.prototype={
$1(d){return""+d},
$S:83}
B.dHa.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGM.prototype={
$1(d){return this.a.asI(this.b)},
$S:9}
B.dGN.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awt(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m4(0.15,0.3))
u=a1.mB(0,d,a1.m4(0.15,0.62))
t=a1.mB(0,"and",a1.m4(0.48,0.46))
s=a1.mB(0,a0,a1.m4(0.82,0.46))
a1=t.a
w.push(new B.nn(v.a,a1,0))
w.push(new B.nn(u.a,a1,1))
w.push(new B.nn(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m4(0.12,0.25))
u=a1.mB(0,d,a1.m4(0.12,0.65))
r=a1.mB(0,"xor",a1.m4(0.46,0.25))
q=a1.mB(0,"and",a1.m4(0.46,0.65))
p=a1.aws(0,a0,a1.m4(0.82,0.25),0)
o=a1.aws(0,a0,a1.m4(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nn(a1,n,0))
m=u.a
w.push(new B.nn(m,n,1))
l=q.a
w.push(new B.nn(a1,l,0))
w.push(new B.nn(m,l,1))
w.push(new B.nn(n,p.a,0))
w.push(new B.nn(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m4(0.15,0.4))
j=a1.mB(0,"not",a1.m4(0.45,0.65))
s=a1.mB(0,a0,a1.m4(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m4(0.82,0.65))
a1=k.a
w.push(new B.nn(a1,s.a,0))
n=j.a
w.push(new B.nn(a1,n,0))
w.push(new B.nn(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m4(0.12,0.25))
g=a1.mB(0,d,a1.m4(0.12,0.7))
f=a1.mB(0,"nor",a1.m4(0.5,0.25))
e=a1.mB(0,"nor",a1.m4(0.5,0.7))
s=a1.mB(0,a0,a1.m4(0.86,0.25))
a1=f.a
w.push(new B.nn(g.a,a1,0))
n=e.a
w.push(new B.nn(n,a1,1))
w.push(new B.nn(h.a,n,0))
w.push(new B.nn(a1,n,1))
w.push(new B.nn(a1,s.a,0))}},
$S:0}
B.dGS.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awt(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Cf(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m4(0.86,0.5))},
$S:0}
B.dGH.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dGI.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dGJ.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dGK.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dGL.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acv(this.c)
if(v.ax)B.BF("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dE(140,"",250,0,0.3,"square")}},
$S:0}
B.dGT.prototype={
$0(){},
$S:0}
B.dGU.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
B.dGV.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGQ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new B.dGP(v))
w.cy=null},
$S:0}
B.dGP.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dGG.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.v(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dH3.prototype={
$0(){var w=this.a
return w.m(new B.dH2(w))},
$S:0}
B.dH2.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dH4.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aC(A.c7,C.jx(C.b3(w,w,w,new B.baA(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGY(v),w,w,w,new B.dGZ(v),new B.dH_(v),new B.dH0(v),w,w,w,w,w,w,w,w,w,w,new B.dH1(v),w,w,w,!1,A.a7)},
$S:35}
B.dH1.prototype={
$1(d){return this.a.c67(d.b)},
$S:51}
B.dH_.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ceB(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axg(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:44}
B.dH0.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGZ.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYA(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new B.dGW(w))
u=t.as
u.toString
v.push(new B.nn(u,w.a,w.b))
C.jQ()}}t.z=t.as=null},
$S:37}
B.dGW.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGY.prototype={
$1(d){return this.a.avi(d.b)},
$S:281}
B.dH5.prototype={
$0(){return this.a.bzp(this.b.a)},
$S:0}
B.dH6.prototype={
$0(){return this.a.asI(this.b.a)},
$S:0}
B.dH7.prototype={
$0(){var w=this.a
return w.m(new B.dGX(w))},
$S:0}
B.dGX.prototype={
$0(){var w=this.a
w.awt(0)
w.ay=null},
$S:0}
B.dH8.prototype={
$0(){return this.a.cvQ(this.b)},
$S:0}
B.cLP.prototype={
$0(){var w=this,v=null,u=C.h2(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.em()
return u},
$S:343}
B.dMZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMY.prototype={
$0(){return this.a.d=null},
$S:0}
B.dN0.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_m()},
$S:119}
B.dN_.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.fh7.prototype={
$0(){return D.e0v},
$S:z+55}
B.fh8.prototype={
$0(){return D.dzD},
$S:z+59}
B.fh9.prototype={
$0(){return D.dwv},
$S:z+62}
B.fhk.prototype={
$0(){return D.e_V},
$S:z+63}
B.fhm.prototype={
$0(){return D.dG1},
$S:z+66}
B.fhn.prototype={
$0(){return D.dzy},
$S:z+88}
B.fho.prototype={
$0(){return D.dzB},
$S:z+17}
B.fhp.prototype={
$0(){return D.dsG},
$S:z+18}
B.fhq.prototype={
$0(){return D.dC6},
$S:z+19}
B.fhr.prototype={
$0(){return D.dDK},
$S:z+20}
B.fhs.prototype={
$0(){return D.dDM},
$S:z+21}
B.fha.prototype={
$0(){return D.dyK},
$S:z+22}
B.fhb.prototype={
$0(){return D.dIL},
$S:z+23}
B.fhc.prototype={
$0(){return D.e_C},
$S:z+24}
B.fhd.prototype={
$0(){return D.dYE},
$S:z+25}
B.fhe.prototype={
$0(){return D.dHq},
$S:z+26}
B.fhf.prototype={
$0(){return D.e_K},
$S:z+27}
B.fhg.prototype={
$0(){return D.dyJ},
$S:z+28}
B.fhh.prototype={
$0(){return D.e_U},
$S:z+29}
B.fhi.prototype={
$0(){return D.dyL},
$S:z+16}
B.fhj.prototype={
$0(){return D.dE1},
$S:z+31}
B.fhl.prototype={
$0(){return D.dHp},
$S:z+32}
B.eYo.prototype={
$2(d,e){return new B.aeE($.bDA()[e],new B.eYn(e,this.a),null)},
$S:z+33}
B.eYn.prototype={
$0(){var w=this.a,v=F.aDQ.h(0,$.bDA()[w].a)
$.arr=v==null?"music":v
C.a6(this.b,!1).cl(C.e8(new B.eYl(w),!1,null,x.H))},
$S:0}
B.eYl.prototype={
$1(d){return $.bDA()[this.a].e.$0()},
$S:39}
B.eYp.prototype={
$2(d,e){return new B.adw(D.awA[e],new B.eYm(this.a,e),null)},
$S:z+34}
B.eYm.prototype={
$0(){return this.a.d.$1(D.awA[this.b])},
$S:0}
B.eY4.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eY3.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eY2.prototype={
$1(d){var w=this
return new C.e1(new B.eY1(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eY1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.flz,A.au,D.fs6,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bB(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Dv,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iP,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Dv,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iP,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.djs[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bE
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aC(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fC,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eY_(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.fbr,d,d,d,d,d,d,d,d,d),A.am,new C.cl(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.zP,new B.eY0(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A5.xK,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
B.eY_.prototype={
$0(){var w=this
return w.a.$1(new B.eXZ(w.b,w.c,w.d))},
$S:0}
B.eXZ.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eY0.prototype={
$0(){var w=this,v=w.a
v.m(new B.eXY(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eXY.prototype={
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
B.eYc.prototype={
$0(){var w=this.a
return w.m(new B.eYb(w))},
$S:0}
B.eYb.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eYd.prototype={
$0(){return B.qR(this.b,this.a.f,"scene")},
$S:0}
B.eYe.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZf().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bT(D.aXa,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:318}
B.eYf.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f7(A.A,C.c6(new C.h9(C.a([u.gtZ(),u.gZf()],x.dS)),new B.eYa(u,this.b,v),w),A.f,A.ei),w,w,w)},
$S:242}
B.eYa.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtZ().x
r===$&&C.c()
w=r<0.9?1:1-B.bqx(r,0.9,0.98)
v=s.gZf().x
v===$&&C.c()
u=A.dC.az(0,v)
switch(s.gawu().a){case 0:s=s.byB(t.b,r,u,t.c)
break
case 1:s=s.bP7(t.b,r,u,t.c)
break
case 2:s=s.cAz(t.b,r,u,t.c)
break
case 3:s=s.bBw(t.b,r,u,t.c)
break
case 4:s=s.bEO(t.b,r,u,t.c)
break
case 5:s=s.bDY(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:214}
B.eYg.prototype={
$2(d,e){var w=C.auS(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJ5(u,A.bE,v,3.5)
u=this.a
w=u.gtZ().x
w===$&&C.c()
return C.a9P(C.kY(null,null,null,1,0,new B.eY9(u),A.k.D(w,0,1)),v)},
$S:1849}
B.eY9.prototype={
$1(d){var w=this.a
w.gtZ().sp(0,d)
if(w.as)w.m(new B.eY5(w))},
$S:6}
B.eY5.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eYh.prototype={
$0(){var w=this.a
w.gtZ().sp(0,0)
w.afU()},
$S:0}
B.eYi.prototype={
$1(d){var w=this.a
w.m(new B.eY8(w,d))
if(w.as)w.afU()},
$S:6}
B.eY8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eYj.prototype={
$0(){var w=this.a
w.m(new B.eY7(w,this.b))
w.gtZ().sp(0,0)
if(w.as)w.afU()},
$S:0}
B.eY7.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eYk.prototype={
$0(){var w=this.a
return w.m(new B.eY6(w,this.b))},
$S:0}
B.eY6.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eXW.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1850}
B.eXX.prototype={
$1(d){return d.b},
$S:1851}
B.dgS.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgT.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgP.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgQ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgU.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgV.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgW.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgX.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgY.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgZ.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dh_.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dh0.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dh1.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.en1.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.emR.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.emT.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.emU.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.emX.prototype={
$1(d){var w=D.mH.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.emY.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cO(new C.a_(q,new B.emZ(d),p.k("a_<1>")),new B.en_(r),p.k("cO<1,qJ?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.emZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.en_.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.emV.prototype={
$1(d){return D.mH.h(0,d.b).c===D.wN},
$S:z+49}
B.emW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.enr.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v3(0,u)
w.a6_(A.o.an(v,1000))},
$S:9}
B.en0.prototype={
$0(){},
$S:0}
B.emN.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
B.en3.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.O,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mH.h(0,v).b,D.mH.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fDg,w,C.d(D.mH.h(0,v).a,w,w,w,w,w,w,A.ht,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,V.anr,w,w,w,w,new B.en2(d),!1,w,w,w,w,w,w,w,D.fuS,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.en2.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.en5.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e9Z],x.p)
for(w=0;w<6;++w){v=D.awV[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bS_,u,u,u,u,new B.en4(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kH,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.ht,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bxh,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.en4.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.emQ.prototype={
$1(d){var w=null
return C.el(C.a([C.bK(!1,A.df,w,w,!0,w,w,new B.emO(d),w,w),C.bK(!1,A.Dz,w,w,!0,w,w,new B.emP(d),w,w)],x.p),w,w,F.n8,D.fsh,w,w,w,w,D.fv9,w)},
$S:20}
B.emO.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.emP.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.enp.prototype={
$0(){var w=this.a
return w.m(new B.eno(w))},
$S:0}
B.eno.prototype={
$0(){return this.a.r=!1},
$S:0}
B.enq.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mg(new B.enf(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b5S:t
v=C.a([C.b3(u,t,t,new B.bgq(w,v,new B.eng(r),new B.enh(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.dZ(C.c6(w,new B.eni(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGu())
return C.aC(A.c7,C.jx(new C.an(A.W,t,A.b1,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.enj(r),t,r.gcfU(),t,new B.enk(r),new B.enl(r),new B.enm(r),t,t,t,t,t,t,t,t,t,t,new B.enn(r),t,t,t,!1,A.a7)},
$S:35}
B.enf.prototype={
$0(){return this.a.abB(this.b)},
$S:0}
B.enn.prototype={
$1(d){return this.a.cyj(d.b)},
$S:51}
B.enl.prototype={
$1(d){return this.a.cfV(d.b)},
$S:44}
B.enm.prototype={
$1(d){return this.a.cfW(d.b)},
$S:18}
B.enk.prototype={
$1(d){return this.a.b0t()},
$S:37}
B.enj.prototype={
$1(d){return this.a.ach(d.b)},
$S:281}
B.eng.prototype={
$0(){return this.a.z},
$S:646}
B.enh.prototype={
$0(){return this.a.Q},
$S:721}
B.eni.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bKN()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bE,A.q,1)
t=C.a([D.fpL,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.y(p[r],q,D.faa,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h9,q,q,q)},
$S:61}
B.emS.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A7.TF,w,w,w),A.bD,C.d(g,w,w,w,w,w,w,F.TL,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1853}
B.enb.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lz()},
$S:0}
B.enc.prototype={
$0(){var w=this.a
return w.m(new B.ena(w))},
$S:0}
B.ena.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.end.prototype={
$0(){var w=this.a
return w.m(new B.en9(w))},
$S:0}
B.en9.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ene.prototype={
$0(){var w=this.a
return w.m(new B.en8(w))},
$S:0}
B.en8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.en7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mH.gdN(D.mH),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.ct9(p[r]))
return new C.D(I.agW,C.x(C.a([new C.D(R.aiD,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.en6.prototype={
$0(){return this.a.c6c(this.b)},
$S:0}
B.dgO.prototype={
$0(){var w=this,v=null,u=C.h2(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.em()
return u},
$S:343}
B.ez6.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.bq(o,new B.ez4(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.ez5())},
$S:9}
B.ez4.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ez5.prototype={
$0(){},
$S:0}
B.eyI.prototype={
$0(){},
$S:0}
B.eyH.prototype={
$0(){},
$S:0}
B.eyR.prototype={
$0(){return B.qR(this.b,this.a.d,"spark-painter")},
$S:0}
B.eyT.prototype={
$1(d){return this.a.aYO(0,d.b)},
$S:44}
B.eyX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aRH(u)
v.c9e(u)
return null},
$S:18}
B.eyS.prototype={
$1(d){return this.a.aYN()},
$S:37}
B.eyY.prototype={
$1(d){return this.a.aYO(0,d.b)},
$S:22}
B.eyZ.prototype={
$1(d){return this.a.aYN()},
$S:51}
B.ez_.prototype={
$0(){var w=this.a
return w.m(new B.eyQ(w,this.b))},
$S:0}
B.eyQ.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ez0.prototype={
$0(){var w=this.a
return w.m(new B.eyP(w))},
$S:0}
B.eyP.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ez1.prototype={
$0(){var w=this.a
return w.m(new B.eyO(w,this.b))},
$S:0}
B.eyO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ez2.prototype={
$1(d){var w=this.a
return w.m(new B.eyN(w,d))},
$S:6}
B.eyN.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ez3.prototype={
$0(){var w=this.a
return w.m(new B.eyM(w))},
$S:0}
B.eyM.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eyU.prototype={
$0(){var w=this.a
return w.m(new B.eyL(w))},
$S:0}
B.eyL.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eyV.prototype={
$0(){var w=this.a
return w.m(new B.eyK(w))},
$S:0}
B.eyK.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eyW.prototype={
$0(){var w=this.a
return w.m(new B.eyJ(w,this.b))},
$S:0}
B.eyJ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eFG.prototype={
$0(){return B.qR(this.b,this.a.d,"title")},
$S:0}
B.eFH.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIK().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_w(v[t],t,s,q,u))
return new C.D(A.fD,C.bW(A.fR,w,A.rZ,0,0),null)},
$S:684}
B.eFI.prototype={
$1(d){return this.a.m(new B.eFF())},
$S:2}
B.eFF.prototype={
$0(){},
$S:0}
B.eFJ.prototype={
$0(){var w=this.a
w.m(new B.eFE(w,this.b))
w=w.gIK()
w.iD(0,0)
w.cL(0)},
$S:0}
B.eFE.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eFK.prototype={
$0(){var w=this.a
return w.m(new B.eFD(w,this.b))},
$S:0}
B.eFD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eFL.prototype={
$0(){var w=this.a
return w.m(new B.eFC(w))},
$S:0}
B.eFC.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eFM.prototype={
$0(){var w=this.a
return w.m(new B.eFB(w,this.b))},
$S:0}
B.eFB.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eFN.prototype={
$0(){var w=this.a.gIK()
w.iD(0,0)
w.cL(0)},
$S:0}
B.eFO.prototype={
$1(d){var w=this.a
return w.m(new B.eFA(w,d))},
$S:6}
B.eFA.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ejy.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.ejz.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.gamf()*2.2},
$S:z+13}
B.ejm.prototype={
$0(){return B.qR(this.b,this.a.d,"orbits")},
$S:0}
B.ejn.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadx()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2P:q.cjw(u,q.gaVZ())
return new C.ex(C.aC(A.c7,C.b3(r,r,r,new B.bkN(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ejj(q),new B.ejk(q),new B.ejl(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7),q.d)},
$S:188}
B.ejk.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.ejl.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ejj.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_x(u,v.gaVZ(),v.Q,v.b22(),C.a([],x.g)))
C.jQ()
if(v.ax)E.dE(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.ejo.prototype={
$1(d){var w=this.a
return w.m(new B.eji(w,d))},
$S:6}
B.eji.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ejq.prototype={
$1(d){var w=this.a
return w.m(new B.ejh(w,d))},
$S:6}
B.ejh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ejr.prototype={
$1(d){var w=this.a
return w.m(new B.ejg(w,d))},
$S:6}
B.ejg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ejs.prototype={
$0(){var w=this.a
return w.m(new B.ejf(w))},
$S:0}
B.ejf.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ejt.prototype={
$0(){var w=this.a
return w.m(new B.eje(w))},
$S:0}
B.eje.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eju.prototype={
$0(){var w=this.a
return w.m(new B.ejd(w))},
$S:0}
B.ejd.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ejv.prototype={
$0(){var w=this.a
return w.m(w.gcvt())},
$S:0}
B.ejw.prototype={
$0(){var w=this.a
return w.m(w.gbGI())},
$S:0}
B.ejx.prototype={
$0(){var w=this.a
return w.m(new B.ejc(w))},
$S:0}
B.ejc.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.ar_(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hg())}},
$S:0}
B.ejp.prototype={
$0(){var w=this.a
return w.m(A.d.grF(w.e))},
$S:0}
B.eF7.prototype={
$1(d){return this.a.fV$-d.b>6000},
$S:723}
B.eF8.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eF6(d),C.U(w).k("a_<1>")).gM(0)>=3},
$S:723}
B.eF6.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eEX.prototype={
$0(){return B.qR(this.b,this.a.d,"swarm")},
$S:0}
B.eEY.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bsi(v.e,v.f,v.ax,v.at,v.ay,v.fV$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eEU(v),new B.eEV(v),new B.eEW(v),w,w,w,w,w,w,w,w,new B.eEM(v),new B.eEN(v),new B.eEO(v),w,w,w,!1,A.a7),v.d)},
$S:188}
B.eEV.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eEW.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eEU.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eEN.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fV$))
if(w.ch)E.dE(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lf("flute",7,500,0.3)},
$S:22}
B.eEO.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eEM.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eEZ.prototype={
$0(){var w=this.a
return w.m(new B.eET(w,this.b))},
$S:0}
B.eET.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eF_.prototype={
$0(){var w=this.a
return w.m(new B.eES(w,this.b))},
$S:0}
B.eES.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eF0.prototype={
$0(){var w=this.a
return w.m(new B.eER(w))},
$S:0}
B.eER.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eF1.prototype={
$1(d){var w=this.a
return w.m(new B.eEQ(w,d))},
$S:6}
B.eEQ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eF2.prototype={
$1(d){var w=this.a
return w.m(new B.eEP(w,d))},
$S:6}
B.eEP.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eF3.prototype={
$1(d){var w=this.a
return w.m(new B.eEL(w,d))},
$S:6}
B.eEL.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eF4.prototype={
$1(d){var w=this.a
return w.m(new B.eEK(w,d))},
$S:6}
B.eEK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eF5.prototype={
$1(d){var w=this.a
return w.m(new B.eEJ(w,d))},
$S:6}
B.eEJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dGi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dGh(w,d))},
$S:130}
B.dGh.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jw(v==null?A.ru:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.u(u.a),A.k.N(C.dR(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dGj.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dGk.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zg(w)>0},
$S:z+14}
B.dG8.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azD()},
$S:0}
B.dGb.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eL(w,F.kR,new C.D(A.bA,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hH,w,w,w),A.R,C.E(C.il(!0,w,w,A.y,T.aOu,new B.dGa(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.Y),w)},
$S:48}
B.dGa.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dG9(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bX:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b_:A.dm,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.ji
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.fdS,s,s,s))
return C.aC(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a7)},
$S:78}
B.dG9.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dGf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacy()
o=C.b3(q,q,q,new B.bag(p.d,w,v,p.gc6j(),q),o)
v=p.bYd("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gI6()
t=p.as>=p.gI6()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auw("GOAL",""+w+" / "+u,t),p.auw("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hE,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lH)
if(p.Q&&!p.y)s.push(D.aWT)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.c9).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.c9,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gI6()+".",q,q,q,q,q,q,A.hG,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f4n,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mA,"Try again",new B.dGc(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j0,"Next level",new B.dGd(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.W9,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aC(A.c7,new C.an(A.W,q,A.b1,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dGe(p),q,q,q,q,!1,A.a7)},
$S:35}
B.dGe.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fV$
E.dE(180,"",200,1,0.4,"sine")
C.jj()},
$S:22}
B.dGc.prototype={
$0(){var w=this.a
return w.m(w.gb4I())},
$S:0}
B.dGd.prototype={
$0(){var w=this.a
return w.aYP(w.r+1)},
$S:0}
B.dGg.prototype={
$0(){var w=this.a
return w.m(w.gb4I())},
$S:0}
B.cLm.prototype={
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
v.z=A.lv
w.af(d,e*0.5,v)},
$S:724}
B.ef1.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcOJ()?this.a.cry(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.efq.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eff.prototype={
$0(){var w=this.a
return w.m(new B.ef6(w))},
$S:0}
B.ef6.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.efg.prototype={
$0(){return B.qR(this.b,this.a.d,"marble-music")},
$S:0}
B.efh.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bhk(v.e,v.f,v.at,v.ax,v.fV$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efc(v),new B.efd(v),new B.efe(v),w,w,w,w,w,w,w,w,w,w,new B.ef5(v),w,w,w,!1,A.a7),v.d)},
$S:188}
B.ef5.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_0(w)
u.e.push(new B.FF(w,w,v,u.aPg(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRX(d.b)},
$S:51}
B.efd.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.efe.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRX(d.b)},
$S:18}
B.efc.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_0(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FF(w,t,v,u.aPg(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.efi.prototype={
$0(){var w=this.a
return w.m(new B.efb(w,this.b))},
$S:0}
B.efb.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.efj.prototype={
$0(){var w=this.a
return w.m(new B.efa(w,this.b))},
$S:0}
B.efa.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.efk.prototype={
$0(){var w=this.a
return w.m(new B.ef9(w,this.b))},
$S:0}
B.ef9.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.efl.prototype={
$1(d){var w=this.a
return w.m(new B.ef8(w,d))},
$S:6}
B.ef8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.efm.prototype={
$0(){var w=this.a
return w.m(new B.ef7(w))},
$S:0}
B.ef7.prototype={
$0(){return this.a.ay8("stairs")},
$S:0}
B.efn.prototype={
$0(){var w=this.a
return w.m(new B.ef4(w))},
$S:0}
B.ef4.prototype={
$0(){return this.a.ay8("pinball")},
$S:0}
B.efo.prototype={
$0(){var w=this.a
return w.m(new B.ef3(w))},
$S:0}
B.ef3.prototype={
$0(){return this.a.ay8("random")},
$S:0}
B.efp.prototype={
$0(){var w=this.a
return w.m(new B.ef2(w))},
$S:0}
B.ef2.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eiW.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eiX.prototype={
$0(){var w=this.b,v=new B.adh(this.a.a,this.c)
v.c=w.fV$
return w.e.push(v)},
$S:0}
B.ej3.prototype={
$0(){var w=this.a
return w.m(new B.ej2(w))},
$S:0}
B.ej2.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ej4.prototype={
$0(){return B.qR(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ej5.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQH()}w=u.w
return new C.ex(C.aC(A.c7,C.b3(v,v,v,new B.bkO(u.e,u.gaYR(),6,u.gclC(),u.gcs0(),u.fV$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ej1(u),v,v,v,!1,A.a7),u.d)},
$S:188}
B.ej1.prototype={
$1(d){return this.a.c6l(d.b)},
$S:51}
B.ej6.prototype={
$1(d){var w=this.a
return w.m(new B.ej0(w,d))},
$S:6}
B.ej0.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ej7.prototype={
$0(){var w=this.a
return w.m(new B.ej_(w,this.b))},
$S:0}
B.ej_.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ej8.prototype={
$0(){var w=this.a
return w.m(new B.eiZ(w,this.b))},
$S:0}
B.eiZ.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ej9.prototype={
$0(){var w=this.a
return w.m(w.gbKJ())},
$S:0}
B.eja.prototype={
$0(){var w=this.a
return w.m(new B.eiY(w))},
$S:0}
B.eiY.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adh(v.aw(6),v.aj()))},
$S:0}
B.ejb.prototype={
$0(){var w=this.a
return w.m(A.d.grF(w.e))},
$S:0}
B.fx3.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:142}
B.eiq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eip(w,d))},
$S:130}
B.eip.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.eic.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:142}
B.ei6.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b99(w.b,new C.v(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ei7.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.eib.prototype={
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
p=D.w7.h(0,v[u].a).a
o=w.aj5(u)
v=D.w7.h(0,v[t].a).a
n=w.aj5(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vX("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaYX()&&w.x.L(0,w.d)){B.vX("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vU("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.eia.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ei8(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bL(0,new B.ei9(r,v))
t.a8(0)
t.v(0,v)
A.d.cz(u.e,r)
u.r=null},
$S:0}
B.ei8.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.ei9.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:142}
B.eik.prototype={
$1(d){return""+d.b+" "+D.w7.h(0,d.a).c.toLowerCase()},
$S:429}
B.eil.prototype={
$0(){var w=this.a
return w.m(new B.eij(w))},
$S:0}
B.eij.prototype={
$0(){var w=this.a;++w.d
w.awz(0)},
$S:0}
B.eim.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aC(A.c7,C.b3(w,w,w,new B.bi1(v.e,v.f,v.r,v.gcCI(),w),A.f5),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eif(v),new B.eig(v),new B.eih(v,e),w,w,w,w,w,w,w,w,w,w,new B.eii(v),w,w,w,!1,A.a7)},
$S:35}
B.eii.prototype={
$1(d){return this.a.c6I(d.b)},
$S:51}
B.eig.prototype={
$1(d){var w=this.a
return w.w=w.aYY(d.b)},
$S:44}
B.eih.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.eid(w,v,d,this.b))},
$S:18}
B.eid.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.eif.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ein.prototype={
$0(){var w=this.a
return w.m(new B.eie(w,this.b))},
$S:0}
B.eie.prototype={
$0(){var w=this.a
w.d=this.b
w.awz(0)},
$S:0}
B.eio.prototype={
$0(){return this.a.c6C(0,this.b.a)},
$S:0}
B.doY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.v(-h.b,h.a).eG(0,Math.max(h.gcm(),1))
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
$S:142}
B.dP2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dP1(w,d))},
$S:130}
B.dP1.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOS.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.avl[w.aw(4)]
return A.d.h1(u)},
$S:23}
B.dOR.prototype={
$1(d){return B.h04(d)==="*"},
$S:3}
B.dOT.prototype={
$1(d){return d!==this.a},
$S:3}
B.dOQ.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vU("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vX("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga92()[r]+" codes for "+C.u(D.Ct.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b1_()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.Ct.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vX("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dP0.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dm:e,u=C.m(8),t=f?C.I(A.b_,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b_:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mt,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1857}
B.dOW.prototype={
$1(d){var w=D.dnb.h(0,d)
return w==null?A.c:w},
$S:725}
B.dOX.prototype={
$0(){var w=this.a
return w.m(new B.dOV(w,this.b))},
$S:0}
B.dOV.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avT()},
$S:0}
B.dOY.prototype={
$0(){var w=this.a
return w.m(new B.dOU(w))},
$S:0}
B.dOU.prototype={
$0(){var w=this.a;++w.e
w.avT()},
$S:0}
B.dOZ.prototype={
$0(){return this.a.aYW(this.b)},
$S:0}
B.dP_.prototype={
$0(){return this.a.aYW(this.b)},
$S:0}
B.dRS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRR(w,d))},
$S:130}
B.dRR.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dRF.prototype={
$0(){},
$S:0}
B.dRE.prototype={
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
B.dRG.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dRK.prototype={
$1(d){var w=this.a
return w.m(new B.dRJ(w,d))},
$S:6}
B.dRJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dRL.prototype={
$1(d){var w=this.a
return w.m(new B.dRI(w,d))},
$S:6}
B.dRI.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dRM.prototype={
$1(d){var w=this.a
return w.m(new B.dRH(w,d))},
$S:6}
B.dRH.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dRN.prototype={
$0(){return this.a.aae("drought")},
$S:0}
B.dRO.prototype={
$0(){return this.a.aae("disease")},
$S:0}
B.dRP.prototype={
$0(){return this.a.aae("foxes")},
$S:0}
B.dRQ.prototype={
$0(){return this.a.aae("rabbits")},
$S:0}
B.d44.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eE()
k.dt(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kh(new C.es(e,l,l,A.cO,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.js(1),l,l,l,l,A.c5,l)
n.em()
n.a4(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1859}
B.d46.prototype={
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
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fF
this.c.aR(u,l)},
$S:1860}
B.d45.prototype={
$3(d,e,f){var w=null,v=C.h2(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dP,A.c5)
v.em()
v.a4(this.a,new C.v(f,this.b.b+2))},
$S:1861}
B.bFE.prototype={
$2(d,e){return d+e.a*e.b},
$S:1862}
B.frs.prototype={
$2(d,e){return e.a-d.a},
$S:1863}
B.dCt.prototype={
$2(d,e){return d+e},
$S:74}
B.dCG.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dCF(v,A.k.D((v.gvT()-w[v.e].guW())/Math.max(w[v.e].guW(),8),-1,1)*0.32,u))},
$S:9}
B.dCF.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dCH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dCE(w,d))},
$S:130}
B.dCE.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dCu.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dCz.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1864}
B.dCA.prototype={
$0(){var w=this.a
return w.m(new B.dCy(w))},
$S:0}
B.dCy.prototype={
$0(){var w=this.a;++w.e
A.d.h5(w.f,0,5,0)},
$S:0}
B.dCB.prototype={
$2(d,e){var w=null,v=this.a
return C.aC(A.c7,C.b3(w,w,w,new B.b9l(v.w,this.b.a,v.f,v.gvT()===v.d[v.e].guW(),w),A.f5),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dCx(v,e),w,w,w,!1,A.a7)},
$S:35}
B.dCx.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cyw(v-1)},
$S:51}
B.dCC.prototype={
$0(){var w=this.a
return w.m(new B.dCw(w,this.b))},
$S:0}
B.dCw.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h5(w.f,0,5,0)},
$S:0}
B.dCD.prototype={
$0(){var w=this.a
return w.m(new B.dCv(w))},
$S:0}
B.dCv.prototype={
$0(){return A.d.h5(this.a.f,0,5,0)},
$S:0}
B.cDU.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cg(new C.v(d,s),20,w),A.qn)
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
B.fqs(v,"1",new C.v(d,s),A.bk,11)}},
$S:1865}
B.dVV.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVU(w,v))},
$S:9}
B.dVU.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dVT(w,d))},
$S:130}
B.dVT.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dVL.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dVP.prototype={
$0(){var w=this.a
return w.m(new B.dVO(w))},
$S:0}
B.dVO.prototype={
$0(){return this.a.r++},
$S:0}
B.dVQ.prototype={
$0(){var w=this.a
return w.m(new B.dVN(w,this.b))},
$S:0}
B.dVN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVR.prototype={
$1(d){var w=this.a
return w.m(new B.dVM(w,d))},
$S:6}
B.dVM.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dVS.prototype={
$1(d){return this.a.c6J(this.b,d)},
$S:6}
B.dc4.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQ6(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
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
p.r=A.hM.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1866}
B.dc5.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fqs(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1867}
B.dGF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dGE(w,d))},
$S:130}
B.dGE.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dGn.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jH(90-(w-65)):d},
$S:14}
B.dGw.prototype={
$1(d){return this.a.m(new B.dGv())},
$S:2}
B.dGv.prototype={
$0(){},
$S:0}
B.dGx.prototype={
$1(d){return this.a.m(new B.dGu())},
$S:2}
B.dGu.prototype={
$0(){},
$S:0}
B.dGy.prototype={
$0(){var w=this.a
return w.m(new B.dGt(w))},
$S:0}
B.dGt.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXz()},
$S:0}
B.dGz.prototype={
$0(){var w=this.a
return w.m(new B.dGs(w))},
$S:0}
B.dGs.prototype={
$0(){return this.a.f=0},
$S:0}
B.dGA.prototype={
$0(){var w=this.a
return w.m(new B.dGr(w))},
$S:0}
B.dGr.prototype={
$0(){return this.a.f=1},
$S:0}
B.dGB.prototype={
$0(){var w=this.a
return w.m(new B.dGq(w,this.b))},
$S:0}
B.dGq.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGC.prototype={
$1(d){var w=this.a
return w.m(new B.dGp(w,d))},
$S:6}
B.dGp.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dGD.prototype={
$1(d){var w=this.a
w.m(new B.dGo(w,d))
if(w.ga9w()&&w.Q.L(0,w.x)){B.vX("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vU("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dGo.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLR.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bM1.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLX.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bM2.prototype={
$1(d){return this.a.Ly(d)&&!d.x},
$S:z+1}
B.bM3.prototype={
$2(d,e){return Math.max(d,this.a.aA6(e))},
$S:z+6}
B.bM5.prototype={
$2(d,e){var w=this.a
return w.c8(0,d.a+"."+e,new B.bM6(w))},
$S:z+5}
B.bM6.prototype={
$0(){return this.a.a},
$S:110}
B.bM4.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bM7.prototype={
$2(d,e){var w=this.a
return w.c8(0,this.b.$1(this.c.$2(d,e)),new B.bM8(w))},
$S:z+5}
B.bM8.prototype={
$0(){return this.a.a},
$S:110}
B.bLT.prototype={
$2(d,e){var w=this.a
return w.c8(0,d.a+"."+e,new B.bLU(w))},
$S:z+5}
B.bLU.prototype={
$0(){return this.a.a},
$S:110}
B.bLS.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bLV.prototype={
$2(d,e){var w=this.a
return w.c8(0,this.b.$1(this.c.$2(d,e)),new B.bLW(w))},
$S:z+5}
B.bLW.prototype={
$0(){return this.a.a},
$S:110}
B.bLQ.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bM9.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLY.prototype={
$1(d){return d!==this.b&&this.a.aGj(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bM0.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bM_.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLZ.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGQ.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGR.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ckC.prototype={
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
B.fIp.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1868}
B.fIr.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bS
return w},
$S:1869}
B.fIs.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1870}
B.fIq.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b0,A.b4,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1871}
B.bGu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGt(w))},
$S:0}
B.bGt.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGw.prototype={
$0(){return C.a([],x.ey)},
$S:1872}
B.bGx.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:350}
B.bGy.prototype={
$0(){var w,v,u
J.bDI(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ct(v))if(B.h0y(v.b))w.b_X(v)
else w.a_g(v)
else{u=w.a.c.bcD(v)
w.adK(u==null?"The "+$.qg().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGs.prototype={
$1(d){return new C.e1(new B.bGq(this.a,this.b),null)},
$S:21}
B.bGq.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGr(this.a,v,e),t=$.qg(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kg,w,w,w),q=C.aH(w,w,w,w,D.bIG,w,w,w,new B.bGm(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xM,C.x(C.a([r,A.au,D.fEd,A.R,C.B(C.a([q,C.E(C.kY(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bPj,w,w,w,new B.bGn(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fhX,w,w,!0,w,w,new B.bGo(u),w,w),C.bK(!1,A.zP,w,w,!0,w,w,new B.bGp(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
B.bGr.prototype={
$1(d){var w=this.a
w.m(new B.bGk(this.b,d))
this.c.$1(new B.bGl())
w.a.toString},
$S:6}
B.bGk.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGl.prototype={
$0(){},
$S:0}
B.bGm.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGn.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGo.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGp.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bGN.prototype={
$2(d,e){var w
if(d==="short"){E.dE(1800,"",120,0,0.55,"noise")
E.dE(200,"",160,2.2,0.4,"saw")
C.fJ()
w=this.a
if(w.c!=null)w.adK("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adK("\u26a0 Overloaded! The "+$.qg().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zE(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adK("Burnt out! "+e.ay)
E.dE(140,"",320,0,0.6,"noise")
E.dE(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGO.prototype={
$0(){},
$S:0}
B.bFY.prototype={
$0(){},
$S:0}
B.bGP.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aC(A.c7,C.b3(p,p,p,new B.aip(w,v,u,t,s,r==null?A.j3:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGG(o),new B.bGH(o),new B.bGI(o),p,p,p,p,p,p,p,p,p,p,new B.bGJ(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b5a)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aC(p,C.p(p,C.B(C.a([D.fgc,C.E(C.d(w,p,p,p,p,p,p,D.f8q,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.baB,p,u,v,p,p,A.n),p,p,p,p,A.ng,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGK(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZ0(C.B(C.a([D.bzm,new B.fj(A.G2,"Cut wire",new B.bGL(o),A.c9,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cgs(w),p,p,10,10,p,p))}return C.jx(new C.an(A.W,p,A.b1,A.r,n,p),A.r,p)},
$S:408}
B.bGH.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6X(s)
if(r!=null){t.m(new B.bGE(t,r,d))
return}w=t.b0D(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bGF(t,w))}},
$S:44}
B.bGE.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGI.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGC(w,d))
else if(w.w!=null)w.m(new B.bGD(w,d.b.ad(0,w.x)))},
$S:18}
B.bGC.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGD.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGG.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6X(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akg(u.a,u.b,v.a,v.b)!=null)E.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adI()},
$S:37}
B.bGJ.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0D(v)
if(u!=null){w.m(new B.bGA(w,u))
if(D.m0.ai(0,u.b))w.cr0(u)
w.a.toString
return}w.m(new B.bGB(w,w.cDx(v)))},
$S:51}
B.bGA.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dE(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGB.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGK.prototype={
$0(){var w=this.a
return w.m(new B.bGz(w))},
$S:0}
B.bGz.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGL.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dE(300,"",50,0,0.35,"noise")
w.adI()},
$S:0}
B.bFZ.prototype={
$0(){return this.a.boy(this.b)},
$S:0}
B.bGh.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f2Z,w,w,w),C.E(C.kY(this.b.d,w,w,g,h,new B.bGj(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1873}
B.bGj.prototype={
$1(d){var w=this.a
w.m(new B.bGi(this.b,d))
w.a.toString},
$S:6}
B.bGi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bG4.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dE(260,"",70,0,0.35,"noise")
w.adI()},
$S:0}
B.bG5.prototype={
$0(){var w=this.a
return w.m(new B.bG3(w))},
$S:0}
B.bG3.prototype={
$0(){return this.a.d=null},
$S:0}
B.bG6.prototype={
$0(){this.a.m(new B.bG2(this.b,this.c))
E.dE(900,"",40,0,0.3,"noise")},
$S:0}
B.bG2.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bG9.prototype={
$0(){return this.a.b_X(this.b)},
$S:0}
B.bGa.prototype={
$0(){return this.a.a_g(this.b)},
$S:0}
B.bGb.prototype={
$0(){return this.a.a0V(this.b)},
$S:0}
B.bGc.prototype={
$0(){var w=this.a
w.m(new B.bG1(this.b,this.c))
w.a.toString},
$S:0}
B.bG1.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGd.prototype={
$0(){var w=this.a
w.m(new B.bG0(this.b,this.c))
w.a.toString},
$S:0}
B.bG0.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGe.prototype={
$0(){var w=this.a
w.m(new B.bG_(this.b,this.c))
w.a.toString},
$S:0}
B.bG_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGf.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGg.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG7.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG8.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fgT.prototype={
$1(d){return d.aFX("bulb")},
$S:z+2}
B.fgU.prototype={
$1(d){return d.pL(0,"switch")&&d.aFX("bulb")},
$S:z+2}
B.fgV.prototype={
$1(d){return A.d.b6(d.a,new B.fgG())},
$S:z+2}
B.fgG.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fgW.prototype={
$1(d){return d.pL(0,"resistor")&&A.d.b6(d.a,new B.fgF())},
$S:z+2}
B.fgF.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fgX.prototype={
$1(d){return!d.pL(0,"battery")&&d.aFX("bulb")},
$S:z+2}
B.fgK.prototype={
$1(d){return A.d.b6(d.a,new B.fgE())},
$S:z+2}
B.fgE.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fgL.prototype={
$1(d){return A.d.b6(d.a,new B.fgD())},
$S:z+2}
B.fgD.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fgM.prototype={
$1(d){return A.d.b6(d.a,new B.fgC())},
$S:z+2}
B.fgC.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fgN.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fgA())&&A.d.b6(w,new B.fgB())&&d.pL(0,"buck")},
$S:z+2}
B.fgA.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fgB.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fgO.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fgy())&&A.d.b6(w,new B.fgz())},
$S:z+2}
B.fgy.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fgz.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fgP.prototype={
$1(d){return A.d.b6(d.a,new B.fgx())},
$S:z+2}
B.fgx.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dS_.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dS8.prototype={
$1(d){var w=this.a.d
return w.aGj(d)&&w.Ct(d)},
$S:z+1}
B.dS9.prototype={
$1(d){return d.x},
$S:z+1}
B.dSa.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dSb.prototype={
$0(){},
$S:0}
B.dRZ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fx2,A.au,D.fhT,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Q0[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bE,1,A.q,-1)
n.push(C.aC(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.kf,q,q,q,q,q,q,q,q,q),A.bD,new C.y(u.b,q,D.f9a,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRY(w,d,u),q,q,q,q,q,q,!1,A.a7))}return C.eL(q,F.kR,new C.D(A.bQ,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.Y),q)},
$S:48}
B.dRY.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dRX(w,this.c))
E.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRX.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhL()},
$S:0}
B.dRV.prototype={
$1(d){return new B.Vc(this.a.d,null)},
$S:z+67}
B.dRW.prototype={
$0(){},
$S:0}
B.dS7.prototype={
$1(d){return new C.e1(new B.dS6(this.a),null)},
$S:21}
B.dS6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahA(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aN
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fum,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.m(4),C.m3(A.bE,m,m,5,m,w.a/11,new C.lX(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fkX)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.TD,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dw,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dS4(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dm,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aC(m,C.p(m,new C.cl(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a7Z,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bh,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.ng,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dS5(l,o,e),m,m,m,m,m,m,!1,A.a7))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A5.xK,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
B.dS4.prototype={
$0(){var w=this.a
w.m(new B.dS2(w))
this.b.$1(new B.dS3())
w.ET()},
$S:0}
B.dS2.prototype={
$0(){var w=this.a
$.ahA()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dS3.prototype={
$0(){},
$S:0}
B.dS5.prototype={
$0(){var w=this.a
w.m(new B.dS0(w,this.b))
this.c.$1(new B.dS1())
w.ET()},
$S:0}
B.dS0.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dS1.prototype={
$0(){},
$S:0}
B.dSd.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.dSe.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).cl(C.e8(new B.dSc(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dSc.prototype={
$1(d){C.lm("construction")
return Am.hDU()},
$S:z+68}
B.dSf.prototype={
$0(){return B.hpZ(this.a,"ELECTRONICS LAB",this.b,A.aN)},
$S:0}
B.dSg.prototype={
$0(){var w=this.a
return w.m(w.d.gcUI())},
$S:0}
B.dSh.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grF(v))
w.ET()},
$S:0}
B.cBr.prototype={
$2(d,e){var w=null,v=this.a.gawA().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8t(v,w),A.av)},
$S:71}
B.cBq.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cV(v,u,v+e,u))
w.F(new C.cV(v,u,v,u+e))
w.F(new C.cV(v,u,v-e,u))
w.F(new C.cV(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aR(w,t)},
$S:667}
B.fN5.prototype={
$3(d,e,f){return new B.Ut(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fN6.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.ir(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNW.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.dNV.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bY1(o):q.bAz(o,p),m=x.p
p=C.a([C.qj(new C.ng(n,new C.cx(p,x.aC)),A.pR,C.rR(),A.bc,A.bc,new B.dNT())],m)
n=t.d
if(n){w=A.k.E(q.gRD(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.at],m)
if(w)m.push(D.bz7)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.az,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.nc,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uG)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.Kg,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wk)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.Kg,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aC(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNU(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b1,A.r,p,s),A.aq)},
$S:335}
B.dNT.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.ir(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:365}
B.dNU.prototype={
$0(){var w=this.a
return w.m(new B.dNS(w))},
$S:0}
B.dNS.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNR.prototype={
$0(){var w=this.a
return w.m(new B.dNQ(w,this.b))},
$S:0}
B.dNQ.prototype={
$0(){return this.a.e=A.d.cK(F.k8,this.b)},
$S:0}
B.dNP.prototype={
$0(){var w=this.a
return w.m(new B.dNO(w))},
$S:0}
B.dNO.prototype={
$0(){return this.a.e=0},
$S:0}
B.dNK.prototype={
$0(){var w=this.a
return w.m(new B.dNJ(w))},
$S:0}
B.dNJ.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fCH,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eF,p,p,p,D.ff5,p,p,p),1),C.d(A.a.aV(A.o.u(C.dk(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aV(A.o.u(C.h1(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qv,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kW,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buC(w.gRD(),this.c.d,p),A.av)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b_,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aC(p,C.p(p,p,A.f,p,p,A.Kf,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNM(w),p,p,p,p,p,p,!1,A.a7),A.ed,C.p(p,p,A.f,p,p,A.ab3,p,12,p,p,p,p,p,12),A.ed,C.p(p,p,A.f,p,p,F.Vw,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.k8[o].a,p,1,A.a2,p,p,p,A.a7R,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.ct,p,p,p,24,p,p,A.fs,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.bvS,C.p(p,C.bw(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aen(r,w.gRD(),p),A.f5),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dg1,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b_,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jn,w.auy(F.k8[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.ll,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.W,p,A.b1,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.Lt,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:335}
B.dNM.prototype={
$0(){var w=this.a
return w.m(new B.dNL(w))},
$S:0}
B.dNL.prototype={
$0(){return this.a.e=null},
$S:0}
B.eaB.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eaA(w,d))},
$S:130}
B.eaA.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h0E(v)},
$S:0}
B.eaC.prototype={
$0(){},
$S:0}
B.ear.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h0E(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.eas.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvr().r){C.jQ()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vX("click",s.c+s.d,60,0.4)
if(B.hq9(r.gvr(),q).b.a===r.gvr().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vU("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BF("bell",D.ap_,700,0.45)
for(q=r.gvr().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.eav.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aC(A.c7,C.b3(s,s,s,new B.bgv(r.gvr(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eat(r),s,s,s,!1,A.a7),C.ao(s,C.dZ(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQ4,s,s,s),C.d(""+u.a+"/"+r.gvr().c.a+" \u2605   mirrors "+w.a+"/"+r.gvr().r,s,s,s,s,s,s,R.a7y,s,s,s)],t),A.m,s,A.hE,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.flH("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fj(A.j0,"Next level",new B.eau(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b1,A.r,w,s)},
$S:62}
B.eat.prototype={
$1(d){return this.a.c74(d.b)},
$S:51}
B.eau.prototype={
$0(){var w=this.a
return w.adO(w.d+1)},
$S:0}
B.eaw.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grF(v))},
$S:0}
B.eax.prototype={
$0(){var w=this.a
return w.adO(w.d+1)},
$S:0}
B.eay.prototype={
$0(){var w=this.a
return w.adO(w.d-1)},
$S:0}
B.eaz.prototype={
$0(){return this.a.adO(this.b)},
$S:0}
B.dha.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:726}
B.dhd.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fV:A.aL).gp(0)
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
$S:1875}
B.dhb.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:467}
B.dhc.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:467}
B.eaU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eaT(w,d))},
$S:130}
B.eaT.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.eaV.prototype={
$0(){},
$S:0}
B.eaF.prototype={
$1(d){return d===0},
$S:122}
B.eaO.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.u(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7J,s,s,s)
w=r.z==="play"?A.k.dk(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c9:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a7y,s,s,s)],v),A.m,s,A.hE,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dm:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b_,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.btb,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcyz(),s,s,s,s,s,s,D.aQV,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.x(C.a([C.E(C.b3(s,s,s,new B.bgK(r.f,s),A.f5),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQV,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.flH("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fj(A.iJ,"Start",new B.eaL(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.flH(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j0,"Next colour",new B.eaM(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.flH("Finished! "+q,u,A.b2,C.a([new B.fj(A.mA,"Play again",new B.eaN(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:62}
B.eaL.prototype={
$0(){var w=this.a
return w.m(new B.eaH(w))},
$S:0}
B.eaH.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awE()},
$S:0}
B.eaM.prototype={
$0(){var w=this.a
return w.m(w.gc72())},
$S:0}
B.eaN.prototype={
$0(){var w=this.a
return w.m(new B.eaG(w))},
$S:0}
B.eaG.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awE()},
$S:0}
B.eaP.prototype={
$1(d){var w=this.a
return w.m(new B.eaK(w,d))},
$S:6}
B.eaK.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.eaQ.prototype={
$1(d){var w=this.a
return w.m(new B.eaJ(w,d))},
$S:6}
B.eaJ.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.eaR.prototype={
$1(d){var w=this.a
return w.m(new B.eaI(w,d))},
$S:6}
B.eaI.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.eaS.prototype={
$0(){var w=this.a
return w.m(w.gc73())},
$S:0}
B.fhA.prototype={
$0(){return D.e1Y},
$S:z+70}
B.fhB.prototype={
$0(){return D.dAa},
$S:z+71}
B.fhC.prototype={
$0(){return D.dwI},
$S:z+72}
B.fhD.prototype={
$0(){return D.dzA},
$S:z+73}
B.fhE.prototype={
$0(){return D.dEx},
$S:z+74}
B.fhF.prototype={
$0(){return D.dYH},
$S:z+75}
B.fhG.prototype={
$0(){return D.e_T},
$S:z+76}
B.fhH.prototype={
$0(){return D.dDR},
$S:z+77}
B.cff.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.cfg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.htB(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aC(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TC,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lC,m,m,C.x(C.a([new C.y(r.a,m,D.fdI,m,m,m,m,m,m,m,m,m),A.cU,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.ay,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bA,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cfe(d,r),m,m,m,m,m,m,!1,A.a7))}return C.bW(A.bB,j,A.br,14,14)},
$S:174}
B.cfe.prototype={
$0(){return C.a6(this.a,!1).cl(C.e8(new B.cfd(this.b),!1,null,x.H))},
$S:0}
B.cfd.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eK8.prototype={
$0(){var w=this.a
return w.w=w.d[w.b48(w.f)]},
$S:0}
B.eK4.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cG.aj()*7},
$S:0}
B.eK3.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c8)
w.w=""},
$S:0}
B.eK6.prototype={
$0(){var w=this.a
return w.m(new B.eK5(w,this.b))},
$S:0}
B.eK5.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
B.eK7.prototype={
$1(d){return this.a.aZq(0)},
$S:2}
B.dUd.prototype={
$0(){return B.BF("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dUe.prototype={
$0(){},
$S:0}
B.dU8.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dUa.prototype={
$0(){return this.a.aZs(this.b)},
$S:0}
B.dUb.prototype={
$0(){var w=this.a
return w.m(new B.dU9(w))},
$S:0}
B.dU9.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dUc.prototype={
$0(){var w=this.a
return w.aZs(w.d)},
$S:0}
B.dF5.prototype={
$2(d,e){return d+e},
$S:86}
B.dF6.prototype={
$0(){},
$S:0}
B.dF0.prototype={
$2(d,e){return d+e},
$S:86}
B.dF3.prototype={
$0(){var w=this.a
return w.m(new B.dF2(w,this.b))},
$S:0}
B.dF2.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dF4.prototype={
$0(){var w=this.a
return w.m(new B.dF1(w))},
$S:0}
B.dF1.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dRu.prototype={
$0(){return B.qR(this.b,this.a.d,"drawing")},
$S:0}
B.dRv.prototype={
$1(d){var w=this.a
return w.m(new B.dRt(w,d))},
$S:44}
B.dRt.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHF(u,v,t))},
$S:0}
B.dRw.prototype={
$1(d){var w=this.a
return w.m(new B.dRs(w,d))},
$S:18}
B.dRs.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dRx.prototype={
$1(d){var w=this.a
return w.m(new B.dRr(w,d))},
$S:22}
B.dRr.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHF(u,v,t))},
$S:0}
B.dRy.prototype={
$0(){var w=this.a
return w.m(new B.dRq(w,this.b))},
$S:0}
B.dRq.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dRz.prototype={
$1(d){var w=this.a
return w.m(new B.dRp(w,d))},
$S:6}
B.dRp.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRA.prototype={
$0(){var w=this.a
return w.m(new B.dRo(w))},
$S:0}
B.dRo.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dRB.prototype={
$0(){var w=this.a
return w.m(new B.dRn(w))},
$S:0}
B.dRn.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dRC.prototype={
$0(){var w=this.a
return w.m(A.d.grF(w.e))},
$S:0}
B.dRD.prototype={
$0(){var w=this.a
return w.m(new B.dRm(w))},
$S:0}
B.dRm.prototype={
$0(){var w=this.a
w.x=D.avQ[A.o.E(A.d.cK(D.avQ,w.x)+1,4)]},
$S:0}
B.egg.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.egh.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BF("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.egf(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BF("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.egf.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.egi.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ege(w))},
$S:11}
B.ege.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.egm.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aC(w,C.mD(new B.egk(v,e),w,A.bc,A.pR,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egl(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:78}
B.egl.prototype={
$0(){return this.a.c8_(this.b)},
$S:0}
B.egk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fD(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bYl
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b_,A.q,1)
if(o){r=C.dp()
r.fD(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fv(A.A,C.d(u[t],p,p,p,p,p,p,D.fb4,p,p,p),p,r,!0)
u=r}else u=D.fvM
return C.fv(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:137}
B.egn.prototype={
$0(){var w=this.a
return w.m(new B.egj(w,this.b))},
$S:0}
B.egj.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arS()},
$S:0}
B.ego.prototype={
$0(){var w=this.a
return w.m(w.gbJg())},
$S:0}
B.er8.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.er9.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.er6.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.er7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.er5(w))},
$S:11}
B.er5.prototype={
$0(){return this.a.f=-1},
$S:0}
B.era.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.erb.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.erc.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZr()},
$S:11}
B.erd.prototype={
$0(){return this.a.c85(this.b)},
$S:0}
B.eFq.prototype={
$1(d){return C.u(d.h(0,1))+","},
$S:70}
B.eFz.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kV,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.f7(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ei),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1877}
B.eFv.prototype={
$1(d){return this.a.m(new B.eFu())},
$S:2}
B.eFu.prototype={
$0(){},
$S:0}
B.eFw.prototype={
$0(){var w=this.a
return w.m(new B.eFt(w,this.b))},
$S:0}
B.eFt.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eFx.prototype={
$1(d){var w=this.a
return w.m(new B.eFs(w,d))},
$S:6}
B.eFs.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eFy.prototype={
$0(){var w=this.a
return w.m(new B.eFr(w))},
$S:0}
B.eFr.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.eeW.prototype={
$0(){},
$S:0}
B.eeX.prototype={
$0(){},
$S:0}
B.eeP.prototype={
$0(){var w=this.a
return w.m(new B.eeO(w))},
$S:0}
B.eeO.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a81("hat",0.6)},
$S:0}
B.eeQ.prototype={
$0(){var w=this.a
return w.m(new B.eeN(w))},
$S:0}
B.eeN.prototype={
$0(){this.a.y=1.1
B.lf("bell",36,200,0.4)},
$S:0}
B.eeR.prototype={
$0(){var w=this.a
return w.m(new B.eeM(w))},
$S:0}
B.eeM.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
B.lf("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.eeS.prototype={
$0(){var w=this.a
return w.m(new B.eeL(w,this.b))},
$S:0}
B.eeL.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eeT.prototype={
$1(d){var w=this.a
return w.m(new B.eeK(w,d))},
$S:6}
B.eeK.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.eeU.prototype={
$1(d){var w=this.a
return w.m(new B.eeJ(w,d))},
$S:6}
B.eeJ.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.eeV.prototype={
$1(d){var w=this.a
return w.m(new B.eeI(w,d))},
$S:6}
B.eeI.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cs9.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.csa.prototype={
$0(){var w=this.a
return B.hpZ(this.b,w.c,w.e,w.d)},
$S:0}
B.fQV.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f3x,v,v,v)
return C.el(C.a([C.bK(!1,D.fl1,v,v,!0,v,v,new B.fQU(d),v,v)],x.p),v,v,F.n8,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:20}
B.fQU.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.cs5.prototype={
$0(){C.eV()
this.a.e.$0()},
$S:0}
B.cs4.prototype={
$0(){C.eV()
this.a.e.$0()},
$S:0}
B.csb.prototype={
$0(){C.eV()
this.a.e.$0()},
$S:0}
B.cs6.prototype={
$0(){var w=this.a
A.d.W(w.fu$,this.b.bi())
if(w.c!=null)this.c.$0()},
$S:0}
B.cs8.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l2$.a)/1e6,0,0.04)
w.l2$=d
w.fV$=A.o.an(v,1000)
w.lB(u)
if(w.c!=null)w.m(new B.cs7())},
$S:9}
B.cs7.prototype={
$0(){},
$S:0}
B.cfb.prototype={
$0(){var w=this
return B.lf(w.a,w.b,w.c,w.d)},
$S:1}
B.dWW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWV(w,d))},
$S:z+79}
B.dWV.prototype={
$0(){return this.a.csM(this.b)},
$S:0}
B.dWo.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:691}
B.dWm.prototype={
$0(){return this.a.id=D.a2V},
$S:0}
B.dWn.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a_<1>")
v=C.pe(new C.a_(w,new B.dWl(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dWl.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dWk.prototype={
$1(d){var w=null,v=C.c8(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.el(C.a([C.bK(!1,A.pk,w,w,!0,w,w,new B.dWj(d),w,w)],x.p),w,w,F.n8,v,w,w,w,w,D.fvQ,w)},
$S:20}
B.dWj.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dWH.prototype={
$0(){return B.qR(this.b,this.a.d,"earth")},
$S:0}
B.dWI.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVT()
r=p.z
o=C.a([C.aC(A.c7,C.b3(q,q,q,new B.beW(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dWv(p),new B.dWw(p),new B.dWx(p),q,q,q,q,q,q,q,new B.dWy(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(Aa.abG)
w=this.b
if(w!=null)o.push(C.ao(8,p.c8H(w),q,q,10,10,q,q))
return new C.ex(new C.an(A.W,q,A.b1,A.r,o,q),p.d)},
$S:188}
B.dWw.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:272}
B.dWx.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVT()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:222}
B.dWv.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVT()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:759}
B.dWy.prototype={
$1(d){var w=this.a,v=w.c8K(d.b)
if(v!=null)w.m(new B.dWp(w,v))
else w.m(new B.dWq(w))},
$S:51}
B.dWp.prototype={
$0(){return this.a.ax7(this.b)},
$S:0}
B.dWq.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWJ.prototype={
$0(){var w=this.a
w.e.bP(0,A.c8)
w.m(new B.dWu(w,this.b))},
$S:0}
B.dWu.prototype={
$0(){var w=this.a
w.id=D.a2V
w.ax7(this.b)},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.m(new B.dWG(w))},
$S:0}
B.dWG.prototype={
$0(){var w=this.a
w.fx=null
w.at3(15,w.y,1)},
$S:0}
B.dWO.prototype={
$0(){var w=this.a
return w.m(new B.dWF(w,this.b))},
$S:0}
B.dWF.prototype={
$0(){var w=this.b.b
return this.a.at3(w.a,w.b,w.c)},
$S:0}
B.dWP.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dWE(w,v))},
$S:0}
B.dWE.prototype={
$0(){var w=this.b.a
return this.a.ax7(w[A.cG.aw(w.length)])},
$S:0}
B.dWQ.prototype={
$1(d){var w=this.a
return w.m(new B.dWD(w,d))},
$S:6}
B.dWD.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dWR.prototype={
$1(d){var w=this.a
return w.m(new B.dWC(w,d))},
$S:6}
B.dWC.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dWS.prototype={
$1(d){var w=this.a
return w.m(new B.dWB(w,d))},
$S:6}
B.dWB.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dWT.prototype={
$0(){var w=this.a
return w.m(new B.dWA(w))},
$S:0}
B.dWA.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWU.prototype={
$0(){var w=this.a
return w.m(new B.dWz(w))},
$S:0}
B.dWz.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dWK.prototype={
$0(){var w=this.a
return w.m(new B.dWt(w))},
$S:0}
B.dWt.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dWL.prototype={
$0(){var w=this.a
return w.m(new B.dWs(w))},
$S:0}
B.dWs.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dWM.prototype={
$0(){var w=this.a
return w.m(new B.dWr(w))},
$S:0}
B.dWr.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dWi.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPu,w,w,w),A.uJ,C.d(e,w,2,A.a2,w,w,w,A.TU,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.dWh.prototype={
$0(){var w=this.a
return w.m(new B.dWg(w))},
$S:0}
B.dWg.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcU.prototype={
$0(){var w=null,v=C.h2(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d_e,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.em()
return v},
$S:343}
B.dcV.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1878}
B.fht.prototype={
$0(){return D.dC7},
$S:z+81}
B.fhu.prototype={
$0(){return D.e_B},
$S:z+82}
B.fhv.prototype={
$0(){return D.dC9},
$S:z+83}
B.fhw.prototype={
$0(){return D.dwu},
$S:z+84}
B.fhx.prototype={
$0(){return D.dC5},
$S:z+85}
B.fhy.prototype={
$0(){return D.dYI},
$S:z+86}
B.fhz.prototype={
$0(){return D.dYG},
$S:z+87}
B.eGj.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.eGk.prototype={
$0(){var w=this.a
return w.m(new B.eGi(w))},
$S:0}
B.eGi.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaS9()+1,16)},
$S:0}
B.eGl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.htA(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.biz],u)
k.push(C.aC(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.y(s.a,n,D.f80,n,A.L,n,n,n,n,2,n,n),A.cU,new C.y(s.b,n,D.fd6,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.ay,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eGh(d,s),n,n,n,n,n,n,!1,A.a7))}return C.bW(A.fR,k,A.br,10,10)},
$S:174}
B.eGh.prototype={
$0(){return C.a6(this.a,!1).cl(C.e8(new B.eGg(this.b),!1,null,x.H))},
$S:0}
B.eGg.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.eym.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eyx.prototype={
$0(){return B.qR(this.b,this.a.d,"solar-system")},
$S:0}
B.eyy.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aC(A.c7,C.b3(v,v,v,new B.brp(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eyu(u),new B.eyv(u),v,v,v,v,v,v,v,new B.eyw(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c8M(w),v,v,10,10,v,v))
return new C.ex(new C.an(A.W,v,A.b1,A.r,t,v),u.d)},
$S:188}
B.eyu.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:272}
B.eyv.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:222}
B.eyw.prototype={
$1(d){var w=this.a,v=w.c8P(d.b)
if(v!=null)w.aZN(v)},
$S:51}
B.eyz.prototype={
$0(){var w=this.a
return w.m(new B.eyt(w))},
$S:0}
B.eyt.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eyA.prototype={
$0(){return this.a.aZN(this.b)},
$S:0}
B.eyB.prototype={
$1(d){var w=this.a
return w.m(new B.eys(w,d))},
$S:6}
B.eys.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eyC.prototype={
$1(d){var w=this.a
return w.m(new B.eyr(w,d))},
$S:6}
B.eyr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eyD.prototype={
$0(){var w=this.a
return w.m(new B.eyq(w))},
$S:0}
B.eyq.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.eyE.prototype={
$0(){var w=this.a
return w.m(new B.eyp(w))},
$S:0}
B.eyp.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eyF.prototype={
$0(){var w=this.a
return w.m(new B.eyo(w))},
$S:0}
B.eyo.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eyG.prototype={
$0(){var w=this.a
return w.m(new B.eyn(w))},
$S:0}
B.eyn.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eyl.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:277}
B.eyk.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPu,w,w,w),A.uJ,C.d(e,w,2,A.a2,w,w,w,A.TU,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.eyj.prototype={
$0(){var w=this.a
return w.m(new B.eyi(w))},
$S:0}
B.eyi.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f_H.prototype={
$0(){var w=null,v=C.h2(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Q9,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.em()
return v},
$S:343}
B.f_I.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f_J.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dX_.prototype={
$0(){},
$S:0}
B.dXs.prototype={
$1(d){return d!=null},
$S:419}
B.dXe.prototype={
$0(){var w=this.a
return w.m(new B.dX5(w,this.b))},
$S:0}
B.dX5.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dXf.prototype={
$0(){var w=this.a
return w.m(new B.dX4(w))},
$S:0}
B.dX4.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dXg.prototype={
$0(){var w=this.a
return w.m(new B.dXd(w))},
$S:0}
B.dXd.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dXk.prototype={
$0(){var w=this.a
return w.m(new B.dXc(w))},
$S:0}
B.dXc.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dXl.prototype={
$1(d){var w=this.a
return w.m(new B.dXb(w,d))},
$S:6}
B.dXb.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dXm.prototype={
$0(){var w=this.a
return w.m(w.gcw1())},
$S:0}
B.dXn.prototype={
$1(d){var w=this.a
return w.m(new B.dXa(w,d))},
$S:6}
B.dXa.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dXo.prototype={
$1(d){var w=this.a
return w.m(new B.dX9(w,d))},
$S:6}
B.dX9.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dXp.prototype={
$1(d){var w=this.a
return w.m(new B.dX8(w,d))},
$S:6}
B.dX8.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dXq.prototype={
$1(d){var w=this.a
return w.m(new B.dX7(w,d))},
$S:6}
B.dX7.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dXr.prototype={
$0(){var w=this.a
return w.m(new B.dX6(w))},
$S:0}
B.dX6.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dXh.prototype={
$0(){var w=this.a
return w.m(new B.dX3(w))},
$S:0}
B.dX3.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dXi.prototype={
$0(){var w=this.a
return w.m(new B.dX2(w))},
$S:0}
B.dX2.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dXj.prototype={
$0(){var w=this.a
return w.m(new B.dX1(w))},
$S:0}
B.dX1.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c_(g,new C.o(D.bh4,g,g,C.m(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yQ[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.u(D.yQ[q].b)+" m/s\xb2",g,D.fct,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dm,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.Nh,C.b0(D.yQ[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yQ[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yQ[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yQ[q].d).j(0.6),g,g,g,3,g,A.fs,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rT,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f4I,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d6(v,new B.dWY()))a1.push(D.b5v)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:62}
B.dWY.prototype={
$1(d){return d==null},
$S:419}
B.dX0.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ih,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GI(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.faP,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:62}
B.dWX.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.ba7(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.av)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aN:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GI(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b1,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bD,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRc,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:62}
B.erg.prototype={
$0(){return B.qR(this.b,this.a.d,"size-compare")},
$S:0}
B.erh.prototype={
$0(){var w=this.a
return w.m(new B.erf(w,this.b))},
$S:0}
B.erf.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eri.prototype={
$0(){var w=this.a
return w.m(new B.ere(w,this.b))},
$S:0}
B.ere.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eYR.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hA(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pq,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a27,null).av(0,C.bU(d,e)))
u.af(d,e,w)},
$S:724}
B.dEx.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dEl.prototype={
$1(d){return d.b},
$S:z+60}
B.dEm.prototype={
$0(){return B.qR(this.b,this.a.d,"black-hole")},
$S:0}
B.dEn.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aC(A.c7,C.b3(q,q,q,new B.b9w(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dEj(p),q,q,q,q,q,q,q,q,q,new B.dEk(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fuD(t)+" Suns"
t=p.aeu("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aeu("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GI(s))+" km"),p.aeu("TIME",A.k.ab(this.b*100,0)+"%"),p.aeu("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eg2)
return new C.ex(new C.an(A.W,q,A.b1,A.r,r,q),p.d)},
$S:188}
B.dEk.prototype={
$1(d){return this.a.aZO(d.b)},
$S:22}
B.dEj.prototype={
$1(d){if(A.cG.aj()<0.12)this.a.aZO(d.b)},
$S:18}
B.dEp.prototype={
$1(d){var w=this.a
return w.m(new B.dEi(w,d))},
$S:6}
B.dEi.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dEq.prototype={
$0(){var w=this.a
return w.m(new B.dEh(w))},
$S:0}
B.dEh.prototype={
$0(){return this.a.r=10},
$S:0}
B.dEr.prototype={
$0(){var w=this.a
return w.m(new B.dEg(w))},
$S:0}
B.dEg.prototype={
$0(){return this.a.r=21},
$S:0}
B.dEs.prototype={
$0(){var w=this.a
return w.m(new B.dEf(w))},
$S:0}
B.dEf.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dEt.prototype={
$0(){var w=this.a
return w.m(new B.dEe(w))},
$S:0}
B.dEe.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dEu.prototype={
$0(){var w=this.a
return w.m(new B.dEd(w))},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dEv.prototype={
$0(){var w=this.a
return w.m(new B.dEc(w))},
$S:0}
B.dEc.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dEw.prototype={
$0(){var w=this.a
return w.m(new B.dEb(w))},
$S:0}
B.dEb.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dEo.prototype={
$0(){var w=this.a
return w.m(new B.dEa(w))},
$S:0}
B.dEa.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dVx.prototype={
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
$S:1879}
B.dVn.prototype={
$0(){return B.qR(this.b,this.a.d,"galaxy")},
$S:0}
B.dVo.prototype={
$0(){var w=this.a
return w.m(new B.dVm(w,this.b))},
$S:0}
B.dVm.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZT()},
$S:0}
B.dVp.prototype={
$0(){var w=this.a
return w.m(new B.dVl(w))},
$S:0}
B.dVl.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZT()}w.cvT()},
$S:0}
B.dVq.prototype={
$1(d){var w=this.a
return w.m(new B.dVk(w,d))},
$S:6}
B.dVk.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZT()},
$S:0}
B.dVr.prototype={
$1(d){var w=this.a
return w.m(new B.dVj(w,d))},
$S:6}
B.dVj.prototype={
$0(){var w=this.a
w.r=this.b
w.ZT()},
$S:0}
B.dVs.prototype={
$1(d){var w=this.a
return w.m(new B.dVi(w,d))},
$S:6}
B.dVi.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dVt.prototype={
$1(d){var w=this.a
return w.m(new B.dVh(w,d))},
$S:6}
B.dVh.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dVu.prototype={
$0(){var w=this.a
return w.m(new B.dVg(w))},
$S:0}
B.dVg.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dVv.prototype={
$0(){var w=this.a
return w.m(new B.dVf(w))},
$S:0}
B.dVf.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dVw.prototype={
$0(){var w=this.a
return w.m(new B.dVe(w))},
$S:0}
B.dVe.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.da1.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1880}
B.eqv.prototype={
$0(){return B.qR(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eqw.prototype={
$0(){var w=this.a
return w.m(new B.equ(w))},
$S:0}
B.equ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eqx.prototype={
$0(){var w=this.a
return w.m(new B.eqt(w))},
$S:0}
B.eqt.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eqy.prototype={
$0(){var w=this.a
return w.m(new B.eqs(w))},
$S:0}
B.eqs.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eqz.prototype={
$0(){var w=this.a
return w.m(new B.eqr(w))},
$S:0}
B.eqr.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eqA.prototype={
$1(d){var w=this.a
return w.m(new B.eqq(w,d))},
$S:6}
B.eqq.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eqB.prototype={
$1(d){var w=this.a
return w.m(new B.eqp(w,d))},
$S:6}
B.eqp.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eqC.prototype={
$1(d){var w=this.a
return w.m(new B.eqo(w,d))},
$S:6}
B.eqo.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eqD.prototype={
$1(d){var w=this.a
return w.m(new B.eqn(w,d))},
$S:6}
B.eqn.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLG.prototype
w.bvD=w.q
w=B.aKI.prototype
w.buD=w.q
w=B.aKJ.prototype
w.buE=w.q
w=B.aKO.prototype
w.buJ=w.q
w=B.aMx.prototype
w.bwB=w.q
w=B.aLE.prototype
w.bvB=w.q
w=B.aLN.prototype
w.bvK=w.q
w=B.aLT.prototype
w.bvQ=w.q
w=B.aKM.prototype
w.buH=w.q
w=B.aLB.prototype
w.bvy=w.q
w=B.aLQ.prototype
w.bvN=w.q
w=B.aLz.prototype
w.bvw=w.q
w=B.aLA.prototype
w.bvx=w.q
w=B.aL_.prototype
w.buW=w.q
w=B.aKE.prototype
w.buz=w.q
w=B.aL7.prototype
w.bv3=w.q
w=B.axa.prototype
w.brL=w.q
w=B.axb.prototype
w.brM=w.q
w=B.aJa.prototype
w.bt1=w.q
w=B.aKX.prototype
w.buS=w.q
w=B.aLo.prototype
w.bvl=w.q
w=B.aLp.prototype
w.bvm=w.q
w=B.aKK.prototype
w.buF=w.q
w=B.aL2.prototype
w.buZ=w.q
w=B.aLx.prototype
w.bvu=w.q
w=B.aM0.prototype
w.bvY=w.q
w=B.aL8.prototype
w.bv5=w.q
w=B.aL9.prototype
w.bv6=w.q
w=B.aLa.prototype
w.bv7=w.q
w=B.aLJ.prototype
w.bvG=w.q
w=B.aLM.prototype
w.bvJ=w.q
w=B.aKH.prototype
w.buC=w.q
w=B.aL5.prototype
w.bv1=w.q
w=B.aLI.prototype
w.bvF=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDP.prototype,"gaw1","c3S",0)
var r
v(r=B.aCe.prototype,"gccc","ccd",35)
w(r,"gc4n","aY7",0)
w(B.aCh.prototype,"gc64","c65",0)
u(B.aCy.prototype,"gc6a","c6b",52)
w(r=B.aGP.prototype,"gcvz","cvA",0)
w(r,"gciV","afU",0)
w(r,"gcgC","cgD",0)
w(r,"gc69","adv",3)
w(r=B.aDO.prototype,"gbGn","a91",3)
w(r,"gcfU","b0t",0)
w(r,"gcjD","ag1",3)
t(r,"gc6d","adw",3)
w(B.aE3.prototype,"gbXJ","bXK",0)
w(r=B.aDG.prototype,"gcvt","cvu",0)
w(r,"gbGI","bGJ",0)
w(r=B.aCg.prototype,"gb4I","azD",0)
v(r,"gc6j","Zg",54)
w(r,"gc6i","ady",3)
v(r=B.aDF.prototype,"gclC","ayl",58)
v(r,"gcs0","azy",15)
w(r,"gbKJ","aQH",0)
v(r=B.aDD.prototype,"gcCI","aj5",15)
t(r,"gc6D","awz",0)
w(r,"gcnZ","co_",0)
v(r=B.aCK.prototype,"gc6E","c6F",90)
w(r,"gc6G","c6H",0)
t(r=B.a4b.prototype,"grF","a8",0)
v(r,"gcSx","amR",1)
v(r,"gcP2","Ly",1)
w(r,"gcUI","bhL",0)
s(B.aip.prototype,"gc6L",0,5,null,["$5"],["qk"],64,0,0)
w(r=B.aCL.prototype,"gc6M","c6N",0)
w(r,"gcms","ago",3)
w(r,"gccs","aeH",3)
w(r,"gctD","ahu",3)
w(r=B.aDp.prototype,"gc72","awE",0)
w(r,"gc73","aZ4",0)
w(r=B.aEg.prototype,"gc80","c81",0)
t(r,"gc7Z","aZq",0)
w(B.aDz.prototype,"gbJg","arS",0)
t(B.aDV.prototype,"gc82","c83",0)
v(r=B.aCW.prototype,"gc8I","c8J",78)
w(r,"gbOf","bOg",0)
w(r=B.aCX.prototype,"gcw1","cw2",0)
w(r,"gc8N","c8O",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajC,B.FY,B.uM,B.aRz,B.a2P,B.b9z,B.c0i,B.y_,B.Cf,B.nn,B.bah,B.Au,B.bs6,B.q4,B.qJ,B.Cj,B.Z0,B.aeu,B.a0f,B.Ct,B.abn,B.abE,B.adA,B.FJ,B.bl_,B.PJ,B.a_x,B.abu,B.abX,B.FF,B.acM,B.adh,B.tg,B.b99,B.aRp,B.ec,B.tt,B.aa2,B.ab9,B.a4b,B.mz,B.bai,B.fN,B.m6,B.aW2,B.btr,B.aHF,B.mC,B.aaP,B.aaQ,B.v0,B.OY,B.xY,B.OX,B.btm,B.Pr,B.aez])
u(C.hX,[B.fwN,B.fn_,B.ftL,B.ftM,B.fwK,B.fwL,B.e7D,B.e7W,B.eo0,B.eny,B.enz,B.enA,B.enB,B.enC,B.enD,B.enE,B.enF,B.enw,B.enx,B.env,B.enW,B.enX,B.enY,B.dEC,B.dEE,B.dEH,B.dES,B.c0j,B.c0k,B.fgH,B.fgI,B.fgJ,B.fgQ,B.fgR,B.fgS,B.dH9,B.dGR,B.dHa,B.dGM,B.dGH,B.dGJ,B.dGP,B.dH1,B.dH_,B.dH0,B.dGZ,B.dGW,B.dGY,B.eYl,B.eY2,B.eY9,B.eYi,B.eXX,B.dgS,B.dgT,B.dgP,B.dgQ,B.dgR,B.dgU,B.dgV,B.dgW,B.dgX,B.dgY,B.dgZ,B.dh_,B.dh0,B.dh1,B.emX,B.emY,B.emZ,B.en_,B.emV,B.emW,B.enr,B.en3,B.en5,B.emQ,B.enn,B.enl,B.enm,B.enk,B.enj,B.emS,B.ez6,B.ez4,B.eyT,B.eyX,B.eyS,B.eyY,B.eyZ,B.ez2,B.eFI,B.eFO,B.ejy,B.ejz,B.ejk,B.ejl,B.ejj,B.ejo,B.ejq,B.ejr,B.eF7,B.eF8,B.eF6,B.eEV,B.eEW,B.eEU,B.eEN,B.eEO,B.eF1,B.eF2,B.eF3,B.eF4,B.eF5,B.dGi,B.dGj,B.dGk,B.dGb,B.dGe,B.cLm,B.ef1,B.efq,B.ef5,B.efd,B.efe,B.efc,B.efl,B.ej1,B.ej6,B.eiq,B.ei8,B.eik,B.eii,B.eig,B.eih,B.eif,B.dP2,B.dOR,B.dOT,B.dP0,B.dOW,B.dRS,B.dRK,B.dRL,B.dRM,B.d44,B.d46,B.d45,B.dCG,B.dCH,B.dCz,B.dCx,B.cDU,B.dVV,B.dVW,B.dVR,B.dVS,B.dc4,B.dc5,B.dGF,B.dGn,B.dGw,B.dGx,B.dGC,B.dGD,B.bLR,B.bM1,B.bLX,B.bM2,B.bM4,B.bLS,B.bLQ,B.bM9,B.bLY,B.bM0,B.bM_,B.bLZ,B.bGQ,B.fIp,B.fIs,B.fIq,B.bGx,B.bGs,B.bGr,B.bGP,B.bGH,B.bGI,B.bGG,B.bGJ,B.bGh,B.bGj,B.bGf,B.bGg,B.bG7,B.bG8,B.fgT,B.fgU,B.fgV,B.fgG,B.fgW,B.fgF,B.fgX,B.fgK,B.fgE,B.fgL,B.fgD,B.fgM,B.fgC,B.fgN,B.fgA,B.fgB,B.fgO,B.fgy,B.fgz,B.fgP,B.fgx,B.dS8,B.dS9,B.dRZ,B.dRV,B.dS7,B.dSc,B.cBq,B.fN5,B.fN6,B.eaB,B.eat,B.dha,B.dhd,B.eaU,B.eaF,B.eaP,B.eaQ,B.eaR,B.cfd,B.eK7,B.dRv,B.dRw,B.dRx,B.dRz,B.egk,B.eFq,B.eFz,B.eFv,B.eFx,B.eeT,B.eeU,B.eeV,B.fQV,B.cs8,B.dWW,B.dWl,B.dWk,B.dWw,B.dWx,B.dWv,B.dWy,B.dWQ,B.dWR,B.dWS,B.eGg,B.eyu,B.eyv,B.eyw,B.eyB,B.eyC,B.eyl,B.f_I,B.f_J,B.dXs,B.dXl,B.dXn,B.dXo,B.dXp,B.dXq,B.dWY,B.eYR,B.dEx,B.dEl,B.dEk,B.dEj,B.dEp,B.dVx,B.dVq,B.dVr,B.dVs,B.dVt,B.da1,B.eqA,B.eqB,B.eqC,B.eqD])
u(C.kj,[B.fwM,B.e7I,B.e7G,B.enH,B.enU,B.dGI,B.dH4,B.dN0,B.eYo,B.eYp,B.eY1,B.eYe,B.eYf,B.eYa,B.eYg,B.eXW,B.emT,B.emU,B.enq,B.eni,B.en7,B.eFH,B.ejn,B.eEY,B.dGa,B.dGf,B.efh,B.ej5,B.fx3,B.eic,B.ei9,B.eim,B.doY,B.bFE,B.frs,B.dCt,B.dCB,B.bM3,B.bM5,B.bM7,B.bLT,B.bLV,B.bGR,B.ckC,B.fIr,B.bGq,B.bGN,B.bGM,B.dS6,B.cBr,B.dNV,B.dNT,B.dNN,B.eav,B.dhb,B.dhc,B.eaO,B.cfg,B.dF5,B.dF0,B.egm,B.dWI,B.dWi,B.dcV,B.eGl,B.eyy,B.eyk,B.dWZ,B.dX0,B.dWX,B.dEn])
u(C.ag,[B.Vc,B.VE,B.U4,B.U9,B.Na,B.aGO,B.VD,B.VS,B.W3,B.VA,B.VZ,B.U7,B.Vu,B.Vz,B.Vx,B.Uv,B.UL,B.U_,B.UZ,B.U8,B.ain,B.UM,B.awS,B.Ut,B.Vh,B.Vj,B.W9,B.UT,B.U5,B.UK,B.Vv,B.VI,B.W2,B.Vt,B.V_,B.W5,B.VR,B.V0,B.VJ,B.U3,B.UX,B.VF])
u(C.ah,[B.bjt,B.aLG,B.aKI,B.aKO,B.aCy,B.aMx,B.aLE,B.aLN,B.aLT,B.aLB,B.aLQ,B.aKM,B.aLz,B.aLA,B.aDD,B.biY,B.aL_,B.aKE,B.aL7,B.biP,B.axa,B.bwx,B.aJa,B.aKX,B.aLo,B.aLp,B.aM0,B.aL2,B.aKK,B.biZ,B.aDz,B.aDV,B.bkc,B.aLx,B.aL8,B.bkg,B.aLM,B.aLa,B.aLJ,B.aKH,B.aL5,B.aLI])
u(C.j8,[B.e7B,B.e7C,B.e7O,B.e7P,B.e7K,B.e7J,B.e7L,B.e7H,B.e7M,B.e7F,B.e7N,B.e7E,B.e7S,B.e7R,B.e7T,B.e7Q,B.e7U,B.e7V,B.e7X,B.eo_,B.eo1,B.eo2,B.enJ,B.enI,B.enG,B.enP,B.enQ,B.enM,B.enR,B.enL,B.enS,B.enT,B.enK,B.enV,B.enO,B.enZ,B.enN,B.dEZ,B.dEY,B.dEB,B.dF_,B.dED,B.dEF,B.dEG,B.dEI,B.dEy,B.dEz,B.dEA,B.dEP,B.dEQ,B.dER,B.dEO,B.dET,B.dEN,B.dEU,B.dEM,B.dEV,B.dEL,B.dEW,B.dEK,B.dEX,B.dEJ,B.dGO,B.dGN,B.dGS,B.dGK,B.dGL,B.dGT,B.dGU,B.dGV,B.dGQ,B.dGG,B.dH3,B.dH2,B.dH5,B.dH6,B.dH7,B.dGX,B.dH8,B.cLP,B.dMZ,B.dMY,B.dN_,B.fh7,B.fh8,B.fh9,B.fhk,B.fhm,B.fhn,B.fho,B.fhp,B.fhq,B.fhr,B.fhs,B.fha,B.fhb,B.fhc,B.fhd,B.fhe,B.fhf,B.fhg,B.fhh,B.fhi,B.fhj,B.fhl,B.eYn,B.eYm,B.eY4,B.eY3,B.eY_,B.eXZ,B.eY0,B.eXY,B.eYc,B.eYb,B.eYd,B.eY5,B.eYh,B.eY8,B.eYj,B.eY7,B.eYk,B.eY6,B.en1,B.emR,B.en0,B.emN,B.en2,B.en4,B.emO,B.emP,B.enp,B.eno,B.enf,B.eng,B.enh,B.enb,B.enc,B.ena,B.end,B.en9,B.ene,B.en8,B.en6,B.dgO,B.ez5,B.eyI,B.eyH,B.eyR,B.ez_,B.eyQ,B.ez0,B.eyP,B.ez1,B.eyO,B.eyN,B.ez3,B.eyM,B.eyU,B.eyL,B.eyV,B.eyK,B.eyW,B.eyJ,B.eFG,B.eFF,B.eFJ,B.eFE,B.eFK,B.eFD,B.eFL,B.eFC,B.eFM,B.eFB,B.eFN,B.eFA,B.ejm,B.eji,B.ejh,B.ejg,B.ejs,B.ejf,B.ejt,B.eje,B.eju,B.ejd,B.ejv,B.ejw,B.ejx,B.ejc,B.ejp,B.eEX,B.eEM,B.eEZ,B.eET,B.eF_,B.eES,B.eF0,B.eER,B.eEQ,B.eEP,B.eEL,B.eEK,B.eEJ,B.dGh,B.dG8,B.dG9,B.dGc,B.dGd,B.dGg,B.eff,B.ef6,B.efg,B.efi,B.efb,B.efj,B.efa,B.efk,B.ef9,B.ef8,B.efm,B.ef7,B.efn,B.ef4,B.efo,B.ef3,B.efp,B.ef2,B.eiW,B.eiX,B.ej3,B.ej2,B.ej4,B.ej0,B.ej7,B.ej_,B.ej8,B.eiZ,B.ej9,B.eja,B.eiY,B.ejb,B.eip,B.ei6,B.ei7,B.eib,B.eia,B.eil,B.eij,B.eid,B.ein,B.eie,B.eio,B.dP1,B.dOS,B.dOQ,B.dOX,B.dOV,B.dOY,B.dOU,B.dOZ,B.dP_,B.dRR,B.dRF,B.dRE,B.dRG,B.dRJ,B.dRI,B.dRH,B.dRN,B.dRO,B.dRP,B.dRQ,B.dCF,B.dCE,B.dCu,B.dCA,B.dCy,B.dCC,B.dCw,B.dCD,B.dCv,B.dVU,B.dVT,B.dVL,B.dVP,B.dVO,B.dVQ,B.dVN,B.dVM,B.dGE,B.dGv,B.dGu,B.dGy,B.dGt,B.dGz,B.dGs,B.dGA,B.dGr,B.dGB,B.dGq,B.dGp,B.dGo,B.bM6,B.bM8,B.bLU,B.bLW,B.bGu,B.bGv,B.bGt,B.bGw,B.bGy,B.bGk,B.bGl,B.bGm,B.bGn,B.bGo,B.bGp,B.bGO,B.bFY,B.bGE,B.bGF,B.bGC,B.bGD,B.bGA,B.bGB,B.bGK,B.bGz,B.bGL,B.bFZ,B.bGi,B.bG4,B.bG5,B.bG3,B.bG6,B.bG2,B.bG9,B.bGa,B.bGb,B.bGc,B.bG1,B.bGd,B.bG0,B.bGe,B.bG_,B.dS_,B.dSa,B.dSb,B.dRY,B.dRX,B.dRW,B.dS4,B.dS2,B.dS3,B.dS5,B.dS0,B.dS1,B.dSd,B.dSe,B.dSf,B.dSg,B.dSh,B.dNW,B.dNU,B.dNS,B.dNR,B.dNQ,B.dNP,B.dNO,B.dNK,B.dNJ,B.dNM,B.dNL,B.eaA,B.eaC,B.ear,B.eas,B.eau,B.eaw,B.eax,B.eay,B.eaz,B.eaT,B.eaV,B.eaL,B.eaH,B.eaM,B.eaN,B.eaG,B.eaK,B.eaJ,B.eaI,B.eaS,B.fhA,B.fhB,B.fhC,B.fhD,B.fhE,B.fhF,B.fhG,B.fhH,B.cff,B.cfe,B.eK8,B.eK4,B.eK3,B.eK6,B.eK5,B.dUd,B.dUe,B.dU8,B.dUa,B.dUb,B.dU9,B.dUc,B.dF6,B.dF3,B.dF2,B.dF4,B.dF1,B.dRu,B.dRt,B.dRs,B.dRr,B.dRy,B.dRq,B.dRp,B.dRA,B.dRo,B.dRB,B.dRn,B.dRC,B.dRD,B.dRm,B.egg,B.egh,B.egf,B.egi,B.ege,B.egl,B.egn,B.egj,B.ego,B.er8,B.er9,B.er6,B.er7,B.er5,B.era,B.erb,B.erc,B.erd,B.eFu,B.eFw,B.eFt,B.eFs,B.eFy,B.eFr,B.eeW,B.eeX,B.eeP,B.eeO,B.eeQ,B.eeN,B.eeR,B.eeM,B.eeS,B.eeL,B.eeK,B.eeJ,B.eeI,B.cs9,B.csa,B.fQU,B.cs5,B.cs4,B.csb,B.cs6,B.cs7,B.cfb,B.dWV,B.dWo,B.dWm,B.dWn,B.dWj,B.dWH,B.dWp,B.dWq,B.dWJ,B.dWu,B.dWN,B.dWG,B.dWO,B.dWF,B.dWP,B.dWE,B.dWD,B.dWC,B.dWB,B.dWT,B.dWA,B.dWU,B.dWz,B.dWK,B.dWt,B.dWL,B.dWs,B.dWM,B.dWr,B.dWh,B.dWg,B.dcU,B.fht,B.fhu,B.fhv,B.fhw,B.fhx,B.fhy,B.fhz,B.eGj,B.eGk,B.eGi,B.eGh,B.eym,B.eyx,B.eyz,B.eyt,B.eyA,B.eys,B.eyr,B.eyD,B.eyq,B.eyE,B.eyp,B.eyF,B.eyo,B.eyG,B.eyn,B.eyj,B.eyi,B.f_H,B.dX_,B.dXe,B.dX5,B.dXf,B.dX4,B.dXg,B.dXd,B.dXk,B.dXc,B.dXb,B.dXm,B.dXa,B.dX9,B.dX8,B.dX7,B.dXr,B.dX6,B.dXh,B.dX3,B.dXi,B.dX2,B.dXj,B.dX1,B.erg,B.erh,B.erf,B.eri,B.ere,B.dEm,B.dEi,B.dEq,B.dEh,B.dEr,B.dEg,B.dEs,B.dEf,B.dEt,B.dEe,B.dEu,B.dEd,B.dEv,B.dEc,B.dEw,B.dEb,B.dEo,B.dEa,B.dVn,B.dVo,B.dVm,B.dVp,B.dVl,B.dVk,B.dVj,B.dVi,B.dVh,B.dVu,B.dVg,B.dVv,B.dVf,B.dVw,B.dVe,B.eqv,B.eqw,B.equ,B.eqx,B.eqt,B.eqy,B.eqs,B.eqz,B.eqr,B.eqq,B.eqp,B.eqo,B.eqn])
t(B.bwM,B.aLG)
t(B.aDP,B.bwM)
u(C.mM,[B.bgs,B.baA,B.brw,B.b9g,B.bqa,B.bpC,B.b9W,B.bpE,B.btB,B.bgq,B.brr,B.bkN,B.bsi,B.bag,B.bhk,B.bkO,B.bi1,B.bdl,B.b9l,B.beP,B.aip,B.b8t,B.buC,B.aen,B.bgv,B.bgK,B.buO,B.bpD,B.bl0,B.beW,B.brp,B.ba7,B.bqY,B.b9w,B.beM,B.bqd])
t(B.aKJ,B.aKI)
t(B.aCe,B.aKJ)
t(B.bwv,B.aKO)
t(B.aCh,B.bwv)
u(C.ma,[B.Ke,B.a02,B.Jb])
u(C.au,[B.bqy,B.aeE,B.adw,B.PS,B.br1,B.a82,B.bcH,B.b6h,B.dA,B.eS,B.avi,B.fj,B.F8])
t(B.aGP,B.aMx)
t(B.bgp,C.oN)
t(B.aDO,B.aLE)
t(B.bk3,B.aLN)
t(B.aE3,B.aLT)
t(B.bwL,B.aLB)
t(B.aDG,B.bwL)
t(B.bwT,B.aLQ)
t(B.bk8,B.bwT)
t(B.bwu,B.aKM)
t(B.aCg,B.bwu)
t(B.bwJ,B.aLz)
t(B.bjI,B.bwJ)
t(B.bwK,B.aLA)
t(B.aDF,B.bwK)
t(B.aCK,B.aL_)
t(B.biC,B.aKE)
t(B.bj9,B.aL7)
t(B.axb,B.axa)
t(B.aio,B.axb)
t(B.aCL,B.bwx)
t(B.b8u,B.aJa)
t(B.biW,B.aKX)
t(B.bwC,B.aLo)
t(B.bjv,B.bwC)
t(B.bwD,B.aLp)
t(B.aDp,B.bwD)
t(B.bwU,B.aM0)
t(B.aEg,B.bwU)
t(B.bwy,B.aL2)
t(B.bj4,B.bwy)
t(B.bwt,B.aKK)
t(B.biH,B.bwt)
t(B.bwI,B.aLx)
t(B.bjG,B.bwI)
t(B.aL9,B.aL8)
t(B.aCW,B.aL9)
t(B.bwQ,B.aLM)
t(B.bk2,B.bwQ)
t(B.bwA,B.aLa)
t(B.aCX,B.bwA)
t(B.bwO,B.aLJ)
t(B.bk_,B.bwO)
t(B.bws,B.aKH)
t(B.biG,B.bws)
t(B.bwz,B.aL5)
t(B.bj7,B.bwz)
t(B.bwN,B.aLI)
t(B.bjZ,B.bwN)
w(B.aLG,C.ca)
w(B.bwM,B.mC)
w(B.aKI,C.ca)
w(B.aKJ,B.mC)
w(B.aKO,C.ca)
w(B.bwv,B.mC)
w(B.aMx,C.eT)
w(B.aLE,C.ca)
w(B.aLN,C.ca)
w(B.aLT,C.ca)
w(B.aKM,C.ca)
w(B.bwu,B.mC)
w(B.aLB,C.ca)
w(B.bwL,B.mC)
w(B.aLQ,C.ca)
w(B.bwT,B.mC)
w(B.aLz,C.ca)
w(B.bwJ,B.mC)
w(B.aLA,C.ca)
w(B.bwK,B.mC)
w(B.aL_,C.ca)
w(B.aKE,C.ca)
w(B.aL7,C.ca)
w(B.axa,C.ca)
w(B.axb,B.mC)
w(B.aJa,C.ca)
v(B.bwx,C.eA)
w(B.aKX,C.ca)
w(B.aLo,C.ca)
w(B.bwC,B.mC)
w(B.aLp,C.ca)
w(B.bwD,B.mC)
w(B.aKK,C.ca)
w(B.bwt,B.mC)
w(B.aL2,C.ca)
w(B.bwy,B.mC)
w(B.aLx,C.ca)
w(B.bwI,B.mC)
w(B.aM0,C.ca)
w(B.bwU,B.mC)
w(B.aL8,C.ca)
w(B.aL9,B.mC)
w(B.aLa,C.ca)
w(B.bwA,B.mC)
w(B.aLJ,C.ca)
w(B.bwO,B.mC)
w(B.aLM,C.ca)
w(B.bwQ,B.mC)
w(B.aKH,C.ca)
w(B.bws,B.mC)
w(B.aL5,C.ca)
w(B.bwz,B.mC)
w(B.aLI,C.ca)
w(B.bwN,B.mC)})()
C.jY(b.typeUniverse,JSON.parse('{"Vc":{"ag":[],"r":[]},"bjt":{"ah":["Vc"]},"VE":{"ag":[],"r":[]},"aDP":{"ah":["VE"]},"bgs":{"aB":[]},"U4":{"ag":[],"r":[]},"aCe":{"ah":["U4"]},"U9":{"ag":[],"r":[]},"aCh":{"ah":["U9"]},"baA":{"aB":[]},"aeE":{"au":[],"r":[]},"adw":{"au":[],"r":[]},"aGO":{"ag":[],"r":[]},"Na":{"ag":[],"r":[]},"aCy":{"ah":["Na"]},"bqy":{"au":[],"r":[]},"PS":{"au":[],"r":[]},"brw":{"aB":[]},"br1":{"au":[],"r":[]},"b9g":{"aB":[]},"aGP":{"ah":["aGO"]},"bqa":{"aB":[]},"bpC":{"aB":[]},"b9W":{"aB":[]},"bpE":{"aB":[]},"btB":{"aB":[]},"VD":{"ag":[],"r":[]},"bgp":{"aB":[]},"aDO":{"ah":["VD"]},"bgq":{"aB":[]},"VS":{"ag":[],"r":[]},"W3":{"ag":[],"r":[]},"bk3":{"ah":["VS"]},"brr":{"aB":[]},"aE3":{"ah":["W3"]},"VA":{"ag":[],"r":[]},"VZ":{"ag":[],"r":[]},"U7":{"ag":[],"r":[]},"aDG":{"ah":["VA"]},"bkN":{"aB":[]},"bk8":{"ah":["VZ"]},"bsi":{"aB":[]},"aCg":{"ah":["U7"]},"bag":{"aB":[]},"Vu":{"ag":[],"r":[]},"Vz":{"ag":[],"r":[]},"bjI":{"ah":["Vu"]},"bhk":{"aB":[]},"aDF":{"ah":["Vz"]},"bkO":{"aB":[]},"Vx":{"ag":[],"r":[]},"Uv":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"aDD":{"ah":["Vx"]},"bi1":{"aB":[]},"biY":{"ah":["Uv"]},"aCK":{"ah":["UL"]},"bdl":{"aB":[]},"U_":{"ag":[],"r":[]},"UZ":{"ag":[],"r":[]},"U8":{"ag":[],"r":[]},"biC":{"ah":["U_"]},"b9l":{"aB":[]},"bj9":{"ah":["UZ"]},"beP":{"aB":[]},"biP":{"ah":["U8"]},"aip":{"aB":[]},"ain":{"ag":[],"r":[]},"aio":{"ah":["ain"]},"UM":{"ag":[],"r":[]},"awS":{"ag":[],"r":[]},"aCL":{"ah":["UM"],"eA":[]},"b8u":{"ah":["awS"]},"b8t":{"aB":[]},"Ut":{"ag":[],"r":[]},"biW":{"ah":["Ut"]},"buC":{"aB":[]},"aen":{"aB":[]},"Vh":{"ag":[],"r":[]},"Vj":{"ag":[],"r":[]},"bjv":{"ah":["Vh"]},"bgv":{"aB":[]},"aDp":{"ah":["Vj"]},"bgK":{"aB":[]},"a82":{"au":[],"r":[]},"W9":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"UK":{"ag":[],"r":[]},"Vv":{"ag":[],"r":[]},"VI":{"ag":[],"r":[]},"W2":{"ag":[],"r":[]},"Vt":{"ag":[],"r":[]},"aEg":{"ah":["W9"]},"buO":{"aB":[]},"bj4":{"ah":["UT"]},"bpD":{"aB":[]},"biH":{"ah":["U5"]},"biZ":{"ah":["UK"]},"bl0":{"aB":[]},"aDz":{"ah":["Vv"]},"aDV":{"ah":["VI"]},"bkc":{"ah":["W2"]},"bjG":{"ah":["Vt"]},"bcH":{"au":[],"r":[]},"b6h":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eS":{"au":[],"r":[]},"avi":{"au":[],"r":[]},"fj":{"au":[],"r":[]},"F8":{"au":[],"r":[]},"V_":{"ag":[],"r":[]},"aCW":{"ah":["V_"]},"beW":{"aB":[]},"W5":{"ag":[],"r":[]},"bkg":{"ah":["W5"]},"VR":{"ag":[],"r":[]},"V0":{"ag":[],"r":[]},"VJ":{"ag":[],"r":[]},"bk2":{"ah":["VR"]},"brp":{"aB":[]},"aCX":{"ah":["V0"]},"ba7":{"aB":[]},"bk_":{"ah":["VJ"]},"bqY":{"aB":[]},"U3":{"ag":[],"r":[]},"UX":{"ag":[],"r":[]},"VF":{"ag":[],"r":[]},"biG":{"ah":["U3"]},"b9w":{"aB":[]},"bj7":{"ah":["UX"]},"beM":{"aB":[]},"bjZ":{"ah":["VF"]},"bqd":{"aB":[]}}'))
C.Kf(b.typeUniverse,JSON.parse('{"mC":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lX<w?>"),e8:w("d5"),G:w("w"),l:w("bl<n,n>"),J:w("bl<n,L>"),I:w("bl<n,G>"),R:w("en<n>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a2L>"),gh:w("O<aRp>"),h:w("O<a2P>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hv>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<Hv>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<n>>"),b:w("O<ai<L>>"),fA:w("O<ai<G?>>"),D:w("O<a5<n,aD>>"),g:w("O<v>"),bz:w("O<tt>"),ds:w("O<a8p>"),v:w("O<ht>"),U:w("O<+(v,L)>"),ev:w("O<+(v,G)>"),K:w("O<+(n,n)>"),fT:w("O<+(L,r)>"),E:w("O<+(G,n)>"),u:w("O<+(G,G)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,L,L,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,L,L,a5<n,L>)>"),_:w("O<uM>"),q:w("O<cR>"),fQ:w("O<aa2>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wb>"),F:w("O<aaP>"),p:w("O<r>"),bL:w("O<ab9>"),fH:w("O<li>"),aq:w("O<b99>"),a_:w("O<abn>"),cS:w("O<abu>"),cB:w("O<nn>"),ba:w("O<abE>"),d9:w("O<Pr>"),bi:w("O<abX>"),eW:w("O<Cj>"),fY:w("O<Z0>"),aX:w("O<FF>"),ea:w("O<acM>"),gB:w("O<adh>"),ed:w("O<PJ>"),g4:w("O<bl_>"),aS:w("O<a_x>"),ac:w("O<adA>"),cd:w("O<Ct>"),fr:w("O<aeu>"),e4:w("O<a0f>"),r:w("O<aez>"),au:w("O<aHF>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<tt?>"),d4:w("O<n?>"),bN:w("O<G?>"),gJ:w("cs<aio>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a5<n,@>"),f:w("a5<@,@>"),bd:w("M<ec,n>"),dv:w("M<n,n>"),fR:w("M<+(L,r),r>"),m:w("iC"),gA:w("z8"),gD:w("vM"),P:w("cr"),C:w("aD"),W:w("tt"),dV:w("ec"),g7:w("C0"),N:w("n"),bO:w("as"),k:w("kh"),Y:w("bq<L>"),cL:w("aaQ"),gj:w("cx<n>"),aC:w("cx<G?>"),dg:w("e9<qJ>"),e3:w("b9z"),a2:w("Cf"),f3:w("qJ"),es:w("FJ"),gV:w("n1"),y:w("R"),i:w("L"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a5<@,@>?"),cK:w("aD?"),az:w("pY?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXk=new C.dc(0,0.85)
D.fBF=new C.y("Tap once to start the chain",null,K.TO,null,null,null,null,null,null,null,null,null)
D.aWT=new C.bI(D.aXk,null,null,D.fBF,null)
D.aXa=new C.dc(0,0.1)
D.aYe=new B.aRz(0,0,0)
D.Ka=new B.aRz(0,0.5,0)
D.aYN=new C.ay(A.b2,1,A.q,-1)
D.b_f=new C.aY(0,1/0,0,290)
D.b_m=new C.aY(16,1/0,16,1/0)
D.f2A=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new C.y("\u26a1",null,D.f2A,null,null,null,null,null,null,null,null,null)
D.b51=new C.cp(A.A,null,null,D.fE2,null)
D.aQu=new C.H(!0,A.bY,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftU=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQu,null,A.L,null,null,null,null,null,null,null)
D.e9I=new C.D(A.o0,D.ftU,null)
D.b5a=new C.cp(A.A,null,null,D.e9I,null)
D.fxF=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kI,null,A.L,null,null,null,null,null,null,null)
D.e9M=new C.D(A.o0,D.fxF,null)
D.b5v=new C.cp(A.A,null,null,D.e9M,null)
D.fdr=new C.H(!0,A.ji,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCs=new C.y("Draw anywhere",null,D.fdr,null,null,null,null,null,null,null,null,null)
D.b5z=new C.cp(A.A,null,null,D.fCs,null)
D.fk5=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQu,null,A.L,null,null,null,null,null,null,null)
D.eat=new C.D(A.Fx,D.fk5,null)
D.b5S=new C.cp(A.A,null,null,D.eat,null)
D.ac0=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b8u=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b9g=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.W6=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b9m=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b9r=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b9w=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.W9=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.baB=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.baG=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bb1=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bca=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adm=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bcE=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AD=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bds=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adP=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.be5=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bec=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.ae_=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.WM=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.beH=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.ae8=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.ael=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WX=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bgs=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bgv=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bgz=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bgI=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aeO=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bh4=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EQ=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bic=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bik=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bio=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.biz=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.biD=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.biK=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vh=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afB=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bjR=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bkB=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bl3=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.blt=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.ag1=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bq4=new C.ba(11e6)
D.br5=new C.Q(0,0,8,6)
D.agZ=new C.Q(0,0,9,0)
D.brB=new C.Q(10,0,10,4)
D.brG=new C.Q(10,10,10,6)
D.brO=new C.Q(10,34,10,26)
D.brW=new C.Q(10,6,10,2)
D.Yr=new C.Q(10,6,10,4)
D.brY=new C.Q(10,8,0,10)
D.bsy=new C.Q(12,8,8,8)
D.bsD=new C.Q(14,0,14,22)
D.bsF=new C.Q(14,0,14,30)
D.ahr=new C.Q(14,0,14,6)
D.ahy=new C.Q(14,10,8,12)
D.btb=new C.Q(14,8,14,6)
D.btD=new C.Q(16,4,16,28)
D.btN=new C.Q(16,8,16,12)
D.bvS=new C.Q(26,12,26,58)
D.bwG=new C.Q(4,4,6,2)
D.bwI=new C.Q(4,4,8,2)
D.bxh=new C.Q(8,14,8,12)
D.bxo=new C.Q(8,40,8,30)
D.bxs=new C.Q(8,6,16,0)
D.bxt=new C.Q(8,6,8,8)
D.bxO=new C.Q(0,0,1.5,0)
D.aY0=new C.GV(26,"saturation")
D.by5=new C.yQ(A.cX,D.aY0,null,A.abZ)
D.fja=new C.y("REACTION LAB",null,Y.aR5,null,null,null,null,A.a2,null,1,null,null)
D.byb=new C.bB(1,A.bh,D.fja,null)
D.faj=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fml=new C.y("CORE PROTOCOL",null,D.faj,null,null,null,null,null,null,null,null,null)
D.byp=new C.bB(1,A.bh,D.fml,null)
D.fn3=new C.y("\ud83d\udce2 NGMY Ads",null,A.qv,null,null,null,null,A.eF,null,1,null,null)
D.bz7=new C.bB(1,A.bh,D.fn3,null)
D.fhU=new C.y("Wire selected",null,A.ht,null,null,null,null,null,null,null,null,null)
D.bzm=new C.bB(1,A.bh,D.fhU,null)
D.akG=new C.a0(62712,"MaterialIcons",!1)
D.bEn=new C.a0(62878,"MaterialIcons",!1)
D.a_K=new C.a0(62908,"MaterialIcons",!1)
D.bEq=new C.a0(62918,"MaterialIcons",!1)
D.bEr=new C.a0(62931,"MaterialIcons",!1)
D.bEu=new C.a0(62951,"MaterialIcons",!1)
D.bEL=new C.a0(63064,"MaterialIcons",!1)
D.bEN=new C.a0(63070,"MaterialIcons",!1)
D.ya=new C.a0(63128,"MaterialIcons",!1)
D.Gj=new C.a0(63726,"MaterialIcons",!1)
D.bG6=new C.a0(983122,"MaterialIcons",!1)
D.bGl=new C.a0(983247,"MaterialIcons",!1)
D.bGx=new C.a0(983415,"MaterialIcons",!1)
D.bGy=new C.a0(983417,"MaterialIcons",!1)
D.bGz=new C.a0(983442,"MaterialIcons",!1)
D.bGA=new C.a0(983443,"MaterialIcons",!1)
D.am_=new C.a0(983467,"MaterialIcons",!1)
D.bGG=new C.a0(983501,"MaterialIcons",!1)
D.bGR=new C.a0(983616,"MaterialIcons",!1)
D.bGS=new C.a0(983624,"MaterialIcons",!1)
D.bH4=new C.a0(983776,"MaterialIcons",!1)
D.bHl=new C.a0(984561,"MaterialIcons",!1)
D.bHW=new C.ae(A.rg,24,A.aM,null,null,null)
D.bIG=new C.ae(A.NL,null,A.ad,null,null,null)
D.bJd=new C.ae(A.mz,21,A.ad,null,null,null)
D.bG5=new C.a0(983117,"MaterialIcons",!1)
D.bKA=new C.ae(D.bG5,28,A.c,null,null,null)
D.bKQ=new C.ae(A.jp,18,null,null,null,null)
D.bMB=new C.ae(A.e6,21,A.c9,null,null,null)
D.bMQ=new C.ae(A.mA,null,A.ad,null,null,null)
D.bN_=new C.ae(A.a0B,21,A.ad,null,null,null)
D.bNP=new C.ae(A.eE,17,A.ad,null,null,null)
D.ann=new C.ae(A.eE,19,null,null,null,null)
D.mE=new C.ae(A.vL,21,A.ad,null,null,null)
D.bPj=new C.ae(A.Ne,null,A.ad,null,null,null)
D.bQs=new C.ae(A.jp,21,A.ad,null,null,null)
D.bRk=new C.ae(A.fg,20,A.aA,null,null,null)
D.bS_=new C.ae(A.dX,null,A.aM,null,null,null)
D.bSk=new C.ae(A.k6,null,A.aA,null,null,null)
D.de2=w([A.dc,A.d_,A.dc],x.O)
D.bVj=new C.a8(A.a3,A.a8,A.x,D.de2,null,null)
D.cSL=w([A.bO,A.bl],x.O)
D.bVr=new C.a8(A.b0,A.b4,A.x,D.cSL,null,null)
D.bVD=new C.a8(A.b0,A.b4,A.x,A.axz,null,null)
D.cT6=w([A.fV,A.f9],x.O)
D.bVM=new C.a8(A.b0,A.b4,A.x,D.cT6,null,null)
D.aop=new C.a8(A.b0,A.b4,A.x,M.a2h,null,null)
D.cQx=w([A.ox,A.ic],x.O)
D.bWp=new C.a8(A.b0,A.b4,A.x,D.cQx,null,null)
D.cSt=w([A.eb,A.az],x.O)
D.aow=new C.a8(A.b0,A.b4,A.x,D.cSt,null,null)
D.d8h=w([A.dy,A.iW,A.bl],x.O)
D.bWI=new C.a8(A.a3,A.a8,A.x,D.d8h,null,null)
D.d8n=w([A.jj,A.ct],x.O)
D.bX1=new C.a8(A.b0,A.b4,A.x,D.d8n,null,null)
D.cpf=w([A.bO,A.dy],x.O)
D.bXa=new C.a8(A.a3,A.a8,A.x,D.cpf,null,null)
D.ayf=w([A.eb,L.ml],x.O)
D.bXh=new C.a8(A.b0,A.b4,A.x,D.ayf,null,null)
D.bXy=new C.a8(A.b0,A.b4,A.x,I.aoT,null,null)
D.beO=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b7S=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cNS=w([D.beO,D.b7S],x.O)
D.bXL=new C.a8(A.b0,A.b4,A.x,D.cNS,null,null)
D.bYl=new C.a8(A.ay,A.aC,A.x,A.a2e,null,null)
D.bjh=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.djz=w([D.bjh,A.KI],x.O)
D.bYs=new C.a8(A.b0,A.b4,A.x,D.djz,null,null)
D.d0z=w([A.az,A.w],x.O)
D.bYx=new C.a8(A.b0,A.b4,A.x,D.d0z,null,null)
D.bYA=new C.a8(A.b0,A.b4,A.x,T.axD,null,null)
D.biH=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bjr=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cBX=w([A.Lw,D.biH,D.bjr],x.O)
D.bYK=new C.a8(A.b0,A.b4,A.x,D.cBX,null,null)
D.cpz=w([A.d5,A.fA],x.O)
D.bZ_=new C.a8(A.b0,A.b4,A.x,D.cpz,null,null)
D.bZ5=new C.a8(A.ay,A.aC,A.x,A.a33,null,null)
D.aoV=w([0,2,4,6,7,9,11],x.t)
D.bZI=w([0,4,7],x.t)
D.ap_=w([0,4,7,12],x.t)
D.bZJ=w([0,4,7,4],x.t)
D.axk=w([A.h5,A.pK],x.O)
D.awR=w([A.hy,A.cS],x.O)
D.avf=w([A.bu,A.dR],x.O)
D.cKt=w([A.aM,A.d5],x.O)
D.cQT=w([A.c9,A.eK],x.O)
D.d9z=w([A.bX,A.lI],x.O)
D.auI=w([A.cs,A.k_],x.O)
D.cPs=w([A.bK,A.aJ],x.O)
D.c_2=w([D.axk,D.awR,A.a2m,D.avf,D.cKt,D.cQT,A.awn,D.d9z,D.auI,D.cPs],x.Q)
D.c3H=w([120,220,380],x.t)
D.c7r=w([12,16,19,24],x.t)
D.c7B=w([1400,800,450,2400],x.t)
D.cbR=w([0,0.6,1],x.n)
D.cg0=w([250,450,900,1500],x.t)
D.b8H=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bj2=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bh6=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bmj=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bgi=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atZ=w([D.b8H,D.bj2,D.bh6,D.bmj,D.bgi],x.O)
D.eEd=new C.z("type","Typewriter")
D.ewK=new C.z("bounce","Bounce")
D.eF_=new C.z("wave","Wave")
D.eG5=new C.z("zoom","Zoom")
D.cwI=w([D.eEd,D.ewK,D.eF_,A.a6c,I.aMf,D.eG5,I.aMj],x.K)
D.cwW=w([50,25,75],x.t)
D.cCs=w([0,5,10,15,18,20,25],x.t)
D.eyo=new C.z("fish","Fish")
D.eyq=new C.z("fly","Fireflies")
D.ewI=new C.z("bird","Birds")
D.cGF=w([D.eyo,D.eyq,D.ewI],x.K)
D.cKJ=w([900,500,250,1600],x.t)
D.cOg=w([0.78,1],x.n)
D.avg=w([0,2,4,7,9,12,14,16],x.t)
D.cOP=w([A.bu,A.bC,A.b8,A.bu],x.O)
D.avl=w(["A","T","C","G"],x.s)
D.cOQ=w(["A","U","C","G"],x.s)
D.a2b=w([A.aw,A.bI,A.be,A.aN,A.nU],x.O)
D.cQb=w([A.az,A.aw,A.cs,A.bI,A.be,A.cz,A.cb,A.bC,A.KI],x.O)
D.a2f=w([0.04,0.17,0.3],x.n)
D.cQP=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.H4=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eO7=new B.uM("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eOd=new B.uM("Medium engine","A good all-rounder.",0.3,0.9)
D.eOc=new B.uM("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.H5=w([D.eO7,D.eOd,D.eOc],x._)
D.emr=new C.z(6,"Easy")
D.en8=new C.z(8,"Medium")
D.eip=new C.z(10,"Hard")
D.cRF=w([D.emr,D.en8,D.eip],x.E)
D.avF=w([0.55,0.78,1],x.n)
D.cTb=w([0.93,0.975,1],x.n)
D.avQ=w([A.c,A.fU,A.oz,A.az],x.O)
D.fH0=new B.xY("Moon",1737,4291941851)
D.fGY=new B.xY("Earth",6371,4281908728)
D.fH1=new B.xY("Neptune",24622,4284524026)
D.fH2=new B.xY("Saturn",58232,4294829706)
D.fGZ=new B.xY("Jupiter",69911,4294677052)
D.fH3=new B.xY("Sun",696340,4294688548)
D.fH4=new B.xY("Sirius A",119e4,4290763774)
D.fGW=new B.xY("Arcturus",179e5,4294818420)
D.fGX=new B.xY("Betelgeuse",531e6,4294472049)
D.fH_=new B.xY("UY Scuti",667e6,4293870660)
D.PY=w([D.fH0,D.fGY,D.fH1,D.fH2,D.fGZ,D.fH3,D.fH4,D.fGW,D.fGX,D.fH_],C.ax("O<xY>"))
D.eJE=new C.bj("glow","Glow",A.a_M)
D.eHd=new C.bj("rainbow","Rainbow",A.nl)
D.eHA=new C.bj("stars","Stars",A.i5)
D.eGY=new C.bj("sparks","Sparks",A.dX)
D.eIV=new C.bj("fire","Fire",A.vM)
D.cV0=w([D.eJE,D.eHd,D.eHA,D.eGY,D.eIV],x.c)
D.avU=w([A.be,A.aw,A.bI,A.d_],x.O)
D.cW0=w([0.2,1],x.n)
D.eO4=new B.uM("Radar","Shows your height above the ground.",0.1,0)
D.eO5=new B.uM("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eO2=new B.uM("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aw1=w([D.eO4,D.eO5,D.eO2],x._)
D.eIa=new C.bj("attract","Attract",A.yr)
D.eHX=new C.bj("scare","Scare",A.re)
D.eH6=new C.bj("food","Food",A.u5)
D.bGb=new C.a0(983158,"MaterialIcons",!1)
D.eIt=new C.bj("hunt","Hunt",D.bGb)
D.cWE=w([D.eIa,D.eHX,D.eH6,D.eIt],x.c)
D.cX3=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cXi=w([47,100,220,470,1000],x.n)
D.awj=w([0,2,4,7,9],x.t)
D.I6={volts:0}
D.a41=new C.bl(D.I6,[3],x.J)
D.It=new C.e7(["b","battery",0.2,0.3,D.a41])
D.e51={on:0}
D.doh=new C.bl(D.e51,[1],x.J)
D.Db=new C.e7(["s","switch",0.5,0.3,D.doh])
D.eMd=new C.e7(["l","bulb",0.8,0.3,A.j3])
D.cSS=w([D.It,D.Db,D.eMd],x.d)
D.Da=new C.cA(["b",0,"s",0])
D.eLe=new C.cA(["s",1,"l",0])
D.aMr=new C.cA(["l",1,"b",1])
D.d8t=w([D.Da,D.eLe,D.aMr],x.o)
D.cSl=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ehB=new B.mz("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cSS,D.d8t,D.cSl)
D.aGs={ohms:0}
D.aE1=new C.bl(D.aGs,[220],x.J)
D.eLH=new C.e7(["r","resistor",0.5,0.3,D.aE1])
D.eMs=new C.e7(["d","led",0.8,0.3,A.j3])
D.dby=w([D.It,D.eLH,D.eMs],x.d)
D.eKA=new C.cA(["b",0,"r",0])
D.eL8=new C.cA(["r",1,"d",0])
D.eKG=new C.cA(["d",1,"b",1])
D.dk3=w([D.eKA,D.eL8,D.eKG],x.o)
D.dbY=w(["led","diode","indicator"],x.s)
D.ehI=new B.mz("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dby,D.dk3,D.dbY)
D.a5i={level:0}
D.dnE=new C.bl(D.a5i,[0.2],x.J)
D.eLN=new C.e7(["p","pot",0.5,0.3,D.dnE])
D.eLP=new C.e7(["m","motor",0.8,0.3,A.j3])
D.cT9=w([D.It,D.eLN,D.eLP],x.d)
D.eKz=new C.cA(["b",0,"p",0])
D.eL4=new C.cA(["p",1,"m",0])
D.eL0=new C.cA(["m",1,"b",1])
D.dfY=w([D.eKz,D.eL4,D.eL0],x.o)
D.d8b=w(["fan","motor","spin","dimmer"],x.s)
D.ehz=new B.mz("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cT9,D.dfY,D.d8b)
D.a3Y=new C.bl(D.a5i,[0.9],x.J)
D.aMy=new C.e7(["s","solar",0.25,0.3,D.a3Y])
D.aMx=new C.e7(["l","bulb",0.75,0.3,A.j3])
D.cVI=w([D.aMy,D.aMx],x.d)
D.eLb=new C.cA(["s",0,"l",0])
D.eL_=new C.cA(["l",1,"s",1])
D.cTU=w([D.eLb,D.eL_],x.o)
D.dgx=w(["solar","sun","without battery","no battery","free"],x.s)
D.ehC=new B.mz("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cVI,D.cTU,D.dgx)
D.eMv=new C.e7(["c","crank",0.25,0.3,D.a3Y])
D.d6z=w([D.eMv,D.aMx],x.d)
D.eKD=new C.cA(["c",0,"l",0])
D.eKZ=new C.cA(["l",1,"c",1])
D.d76=w([D.eKD,D.eKZ],x.o)
D.d6I=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ehy=new B.mz("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d6z,D.d76,D.d6I)
D.dnD=new C.bl(D.a5i,[0.7],x.J)
D.eLS=new C.e7(["t","turbine",0.25,0.3,D.dnD])
D.eLF=new C.e7(["m","motor",0.75,0.3,A.j3])
D.d1c=w([D.eLS,D.eLF],x.d)
D.eLm=new C.cA(["t",0,"m",0])
D.eL1=new C.cA(["m",1,"t",1])
D.d0d=w([D.eLm,D.eL1],x.o)
D.d5r=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ehv=new B.mz("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d1c,D.d0d,D.d5r)
D.aDZ=new C.bl(D.I6,[9],x.J)
D.a6f=new C.e7(["b","battery",0.2,0.3,D.aDZ])
D.aMw=new C.e7(["r","radio",0.8,0.3,A.j3])
D.dh6=w([D.a6f,D.Db,D.aMw],x.d)
D.eLg=new C.cA(["s",1,"r",0])
D.aMs=new C.cA(["r",1,"b",1])
D.bZq=w([D.Da,D.eLg,D.aMs],x.o)
D.dfK=w(["radio","music","listen"],x.s)
D.ehH=new B.mz("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dh6,D.bZq,D.dfK)
D.doJ=new C.bl(D.I6,[12],x.J)
D.aMv=new C.e7(["b","battery",0.2,0.3,D.doJ])
D.eMe=new C.e7(["t","tv",0.8,0.3,A.j3])
D.cST=w([D.aMv,D.Db,D.eMe],x.d)
D.eLh=new C.cA(["s",1,"t",0])
D.aMt=new C.cA(["t",1,"b",1])
D.d9C=w([D.Da,D.eLh,D.aMt],x.o)
D.dh4=w(["tv","television","screen","watch"],x.s)
D.ehs=new B.mz("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cST,D.d9C,D.dh4)
D.eM4=new C.e7(["z","buzzer",0.8,0.3,A.j3])
D.czf=w([D.It,D.Db,D.eM4],x.d)
D.eLi=new C.cA(["s",1,"z",0])
D.eLA=new C.cA(["z",1,"b",1])
D.cO2=w([D.Da,D.eLi,D.eLA],x.o)
D.de7=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ehE=new B.mz("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.czf,D.cO2,D.de7)
D.eLO=new C.e7(["h","heater",0.8,0.3,A.j3])
D.d49=w([D.a6f,D.Db,D.eLO],x.d)
D.eLd=new C.cA(["s",1,"h",0])
D.eKO=new C.cA(["h",1,"b",1])
D.cOL=w([D.Da,D.eLd,D.eKO],x.o)
D.cjh=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eht=new B.mz("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d49,D.cOL,D.cjh)
D.eMg=new C.e7(["s","solar",0.2,0.25,D.a3Y])
D.doO=new C.bl(D.aGs,[100],x.J)
D.eMj=new C.e7(["r","resistor",0.55,0.25,D.doO])
D.eMq=new C.e7(["c","capacitor",0.85,0.25,A.j3])
D.eLK=new C.e7(["q","resistor",0.55,0.6,D.aE1])
D.eMh=new C.e7(["d","led",0.85,0.6,A.j3])
D.d9a=w([D.eMg,D.eMj,D.eMq,D.eLK,D.eMh],x.d)
D.eLc=new C.cA(["s",0,"r",0])
D.eL7=new C.cA(["r",1,"c",0])
D.eKF=new C.cA(["c",1,"s",1])
D.eKE=new C.cA(["c",0,"q",0])
D.eL6=new C.cA(["q",1,"d",0])
D.eKH=new C.cA(["d",1,"c",1])
D.cZc=w([D.eLc,D.eL7,D.eKF,D.eKE,D.eL6,D.eKH],x.o)
D.d5W=w(["capacitor","store","charge","flash"],x.s)
D.ehG=new B.mz("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d9a,D.cZc,D.d5W)
D.eLV=new C.e7(["b","battery",0.15,0.3,D.a41])
D.eMw=new C.e7(["l1","bulb",0.5,0.3,A.j3])
D.eM1=new C.e7(["l2","bulb",0.85,0.3,A.j3])
D.cR7=w([D.eLV,D.eMw,D.eM1],x.d)
D.eKy=new C.cA(["b",0,"l1",0])
D.eKW=new C.cA(["l1",1,"l2",0])
D.eKX=new C.cA(["l2",1,"b",1])
D.d1T=w([D.eKy,D.eKW,D.eKX],x.o)
D.dgR=w(["series","two bulbs","dim"],x.s)
D.ehw=new B.mz("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cR7,D.d1T,D.dgR)
D.e5h={volts:0,charge:1}
D.doT=new C.bl(D.e5h,[1.5,0],x.J)
D.eMo=new C.e7(["b","battery",0.75,0.3,D.doT])
D.cQy=w([D.aMy,D.eMo],x.d)
D.eLa=new C.cA(["s",0,"b",0])
D.eKC=new C.cA(["b",1,"s",1])
D.cZt=w([D.eLa,D.eKC],x.o)
D.d64=w(["charge","rechargeable","flat","recharge"],x.s)
D.ehu=new B.mz("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cQy,D.cZt,D.d64)
D.doI=new C.bl(D.I6,[4.5],x.J)
D.eLQ=new C.e7(["b","battery",0.2,0.3,D.doI])
D.aMu=new C.e7(["p","phone",0.8,0.3,A.j3])
D.d12=w([D.eLQ,D.Db,D.aMu],x.d)
D.eLf=new C.cA(["s",1,"p",0])
D.a6e=new C.cA(["p",1,"b",1])
D.dd7=w([D.Da,D.eLf,D.a6e],x.o)
D.dey=w(["phone","charger","usb","mobile"],x.s)
D.ehA=new B.mz("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d12,D.dd7,D.dey)
D.eLC=new C.e7(["f","fan",0.8,0.3,A.j3])
D.cbq=w([D.It,D.eLC],x.d)
D.eKx=new C.cA(["b",0,"f",0])
D.eKM=new C.cA(["f",1,"b",1])
D.cPg=w([D.eKx,D.eKM],x.o)
D.d8a=w(["fan","cool","air","wind"],x.s)
D.ehJ=new B.mz("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cbq,D.cPg,D.d8a)
D.eM8=new C.e7(["b","battery",0.15,0.2,D.a41])
D.eLD=new C.e7(["a","ammeter",0.5,0.2,A.j3])
D.eLB=new C.e7(["l","bulb",0.85,0.2,A.j3])
D.eMa=new C.e7(["v","voltmeter",0.5,0.6,A.j3])
D.d6n=w([D.eM8,D.eLD,D.eLB,D.eMa],x.d)
D.eKv=new C.cA(["b",0,"a",0])
D.eKu=new C.cA(["a",1,"l",0])
D.eLo=new C.cA(["v",0,"l",0])
D.eLp=new C.cA(["v",1,"l",1])
D.cZk=w([D.eKv,D.eKu,D.aMr,D.eLo,D.eLp],x.o)
D.dk2=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ehF=new B.mz("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d6n,D.cZk,D.dk2)
D.eMz=new C.e7(["b","battery",0.15,0.2,D.aDZ])
D.eLU=new C.e7(["t","tv",0.55,0.2,A.j3])
D.aE_=new C.bl(D.I6,[5],x.J)
D.eLI=new C.e7(["c","buck",0.4,0.5,D.aE_])
D.eLW=new C.e7(["p","phone",0.8,0.5,A.j3])
D.cX5=w([D.eMz,D.eLU,D.eLI,D.eLW],x.d)
D.eKB=new C.cA(["b",0,"t",0])
D.aMp=new C.cA(["b",0,"c",0])
D.aMq=new C.cA(["c",1,"p",0])
D.d1_=w([D.eKB,D.aMt,D.aMp,D.aMq,D.a6e],x.o)
D.cVh=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ehx=new B.mz("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cX5,D.d1_,D.cVh)
D.eLJ=new C.e7(["c","buck",0.5,0.3,D.aE_])
D.cOC=w([D.aMv,D.eLJ,D.aMu],x.d)
D.cTi=w([D.aMp,D.aMq,D.a6e],x.o)
D.cmH=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ehr=new B.mz("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cOC,D.cTi,D.cmH)
D.eM_=new C.e7(["d","diode",0.5,0.3,A.j3])
D.d25=w([D.a6f,D.eM_,D.aMw],x.d)
D.eKw=new C.cA(["b",0,"d",0])
D.eKI=new C.cA(["d",1,"r",0])
D.cBN=w([D.eKw,D.eKI,D.aMs],x.o)
D.cUY=w(["diode","protect","backwards","one way"],x.s)
D.ehD=new B.mz("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d25,D.cBN,D.cUY)
D.Q0=w([D.ehB,D.ehI,D.ehz,D.ehC,D.ehy,D.ehv,D.ehH,D.ehs,D.ehE,D.eht,D.ehG,D.ehw,D.ehu,D.ehA,D.ehJ,D.ehF,D.ehx,D.ehr,D.ehD],C.ax("O<mz>"))
D.h7m=new B.FY("Moon",1.62,A.dy,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h7k=new B.FY("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.h7n=new B.FY("Mercury",3.7,A.jZ,"Mercury is small, so its gravity is like Mars.")
D.h7h=new B.FY("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h7j=new B.FY("Earth",9.81,A.aN,"On Earth gravity is strong, and the air also slows you down.")
D.h7l=new B.FY("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.h7i=new B.FY("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rp=w([D.h7m,D.h7k,D.h7n,D.h7h,D.h7j,D.h7l,D.h7i],C.ax("O<FY>"))
D.cZa=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2v=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cZR=w([0.2,0.5,0.8],x.n)
D.bEG=new C.a0(63040,"MaterialIcons",!1)
D.eI0=new C.bj("peg","Peg",D.bEG)
D.eHa=new C.bj("bar","Bar",R.BO)
D.eHD=new C.bj("erase","Erase",A.Ni)
D.d_2=w([D.eI0,D.eHa,D.eHD],x.c)
D.eR5=new C.cR(A.bk,A.J,4)
D.d_e=w([D.eR5],x.q)
D.awz=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aW_=new B.Ke(0,"accordion")
D.cPy=w([A.jr,A.BP,A.BD],x.w)
D.cWw=w(["Mail","SMS","Ad"],x.s)
D.cQ3=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h5z=new B.Au(D.aW_,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axk,D.cPy,D.cWw,D.cQ3)
D.a9J=new B.Ke(1,"flip")
D.d5Q=w([A.q3,A1.Gu,A.u6],x.w)
D.d0J=w(["Unlock","Verify","Secure"],x.s)
D.cOy=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h5y=new B.Au(D.a9J,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awR,D.d5Q,D.d0J,D.cOy)
D.aW0=new B.Ke(2,"towers")
D.d_x=w([A.yn,A.q7,A.hR],x.w)
D.d_9=w(["Save","Grow","Earn"],x.s)
D.cCB=w(["","",""],x.s)
D.h5A=new B.Au(D.aW0,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2m,D.d_x,D.d_9,D.cCB)
D.a9K=new B.Ke(3,"assemble")
D.d6L=w([A.nn,A.ha,A.dX],x.w)
D.cVU=w(["Launch","Charge","Shine"],x.s)
D.d3k=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h5C=new B.Au(D.a9K,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avf,D.d6L,D.cVU,D.d3k)
D.aW1=new B.Ke(4,"carousel")
D.d6A=w([A.b8,A.f2],x.O)
D.cWG=w([A.mz,A.alc,A.a0t],x.w)
D.cRv=w(["Explore","Discover","Learn"],x.s)
D.d17=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h5x=new B.Au(D.aW1,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d6A,D.cWG,D.cRv,D.d17)
D.aW2=new B.Ke(5,"burst")
D.d_4=w([A.je,A.tl],x.O)
D.cPZ=w([A.lm,A.mx,A.i4],x.w)
D.cQk=w(["Cheer","Win","Love"],x.s)
D.cSr=w(["Make some noise","First place","Share the joy"],x.s)
D.h5B=new B.Au(D.aW2,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d_4,D.cPZ,D.cQk,D.cSr)
D.awA=w([D.h5z,D.h5y,D.h5A,D.h5C,D.h5x,D.h5B],C.ax("O<Au>"))
D.eI2=new C.bj("skin","Skin",A.ald)
D.eJq=new C.bj("muscle","Muscles",A.Nu)
D.eJ8=new C.bj("organ","Organs",A.i4)
D.bE6=new C.a0(62747,"MaterialIcons",!1)
D.eJe=new C.bj("bone","Skeleton",D.bE6)
D.eJw=new C.bj("vessel","Blood vessels",A.q9)
D.d_D=w([D.eI2,D.eJq,D.eJ8,D.eJe,D.eJw],x.c)
D.eO6=new B.uM("Simple legs","Light. Land gently.",0.15,0.2)
D.eO8=new B.uM("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eOb=new B.uM("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ce=w([D.eO6,D.eO8,D.eOb],x._)
D.d1h=w([1.77,3.55,7.15,16.7],x.n)
D.d3K=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eDH=new C.z("spiral","Spiral")
D.emo=new C.z("barred","Barred spiral")
D.exT=new C.z("elliptical","Elliptical")
D.d4p=w([D.eDH,D.emo,D.exT],x.K)
D.eKc=new C.cA(["beat",0.18,0.28,0])
D.eLj=new C.cA(["burst",0.7,0.2,0])
D.eLu=new C.cA(["delay",0.45,0.5,1])
D.eL3=new C.cA(["ripple",0.75,0.6,3])
D.cVD=w([D.eKc,D.eLj,D.eLu,D.eL3],x.e)
D.d5f=w([N.la,M.Is,F.Sy],x.u)
D.h4O=new B.FJ("First spark","A clock lights a burst and a ripple",D.cVD,D.d5f)
D.eKL=new C.cA(["beat",0.15,0.3,1])
D.eJR=new C.cA(["ripple",0.62,0.15,0])
D.eLq=new C.cA(["delay",0.4,0.45,0])
D.eKr=new C.cA(["ripple",0.7,0.45,0])
D.eK8=new C.cA(["delay",0.4,0.7,1])
D.eL5=new C.cA(["shake",0.75,0.75,0])
D.dhU=w([D.eKL,D.eJR,D.eLq,D.eKr,D.eK8,D.eL5],x.e)
D.ejo=new C.z(2,4)
D.aM8=new C.z(4,5)
D.cZ1=w([N.la,M.Is,F.Sy,D.ejo,D.aM8],x.u)
D.h4Q=new B.FJ("Heartbeat","Two thumps, then a shake",D.dhU,D.cZ1)
D.eKh=new C.cA(["dice",0.15,0.7,1])
D.eLw=new C.cA(["echo",0.4,0.7,0])
D.eKp=new C.cA(["comet",0.7,0.5,4])
D.eLk=new C.cA(["burst",0.72,0.2,1])
D.eKJ=new C.cA(["burst",0.3,0.25,0])
D.eKi=new C.cA(["pop",0.55,0.85,0])
D.ciR=w([D.eKh,D.eLw,D.eKp,D.eLk,D.eKJ,D.eKi],x.e)
D.eiO=new C.z(1,3)
D.eiP=new C.z(1,4)
D.aM5=new C.z(0,5)
D.d6v=w([N.la,W.uD,D.eiO,D.eiP,D.aM5],x.u)
D.h4P=new B.FJ("Fireworks","Dice launch comets that burst in colour",D.ciR,D.d6v)
D.eKm=new C.cA(["beat",0.15,0.2,2])
D.eKT=new C.cA(["chance",0.4,0.2,0])
D.eKe=new C.cA(["ball",0.7,0.12,3])
D.eK1=new C.cA(["chance",0.4,0.5,1])
D.eLv=new C.cA(["ball",0.3,0.08,1])
D.eJV=new C.cA(["ripple",0.7,0.55,3])
D.cbT=w([D.eKm,D.eKT,D.eKe,D.eK1,D.eLv,D.eJV],x.e)
D.ejp=new C.z(2,5)
D.cz_=w([N.la,W.uD,M.a68,F.Sz,D.ejp],x.u)
D.h4N=new B.FJ("Rain","Balls fall at random and splash",D.cbT,D.cz_)
D.eKU=new C.cA(["beat",0.12,0.45,2])
D.eLl=new C.cA(["toggle",0.38,0.2,0])
D.eLs=new C.cA(["wash",0.7,0.15,4])
D.eKg=new C.cA(["count3",0.38,0.45,0])
D.eLn=new C.cA(["burst",0.72,0.4,0])
D.eKK=new C.cA(["light",0.55,0.7,1])
D.eK2=new C.cA(["pop",0.8,0.8,4])
D.d98=w([D.eKU,D.eLl,D.eLs,D.eKg,D.eLn,D.eKK,D.eK2],x.e)
D.ejU=new C.z(3,6)
D.cf0=w([N.la,W.uD,M.a68,F.Sz,D.aM5,D.ejU],x.u)
D.h4L=new B.FJ("Disco","A beat drives lights, washes and bursts",D.d98,D.cf0)
D.eLz=new C.cA(["button",0.12,0.2,0])
D.eJX=new C.cA(["delay",0.34,0.2,1])
D.eLy=new C.cA(["light",0.56,0.2,1])
D.eLr=new C.cA(["delay",0.56,0.45,1])
D.eKV=new C.cA(["ball",0.34,0.6,0])
D.eK0=new C.cA(["delay",0.34,0.8,1])
D.eJQ=new C.cA(["burst",0.7,0.8,5])
D.c_5=w([D.eLz,D.eJX,D.eLy,D.eLr,D.eKV,D.eK0,D.eJQ],x.e)
D.em0=new C.z(5,6)
D.deg=w([N.la,W.uD,F.Sy,F.Sz,D.aM8,D.em0],x.u)
D.h4M=new B.FJ("Domino","Tap the button and watch it run down the line",D.c_5,D.deg)
D.awV=w([D.h4O,D.h4Q,D.h4P,D.h4N,D.h4L,D.h4M],C.ax("O<FJ>"))
D.d4x=w([0.05,0.15,0.25],x.n)
D.d4L=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d5q=w([1.5,3,4.5,9,12],x.n)
D.eGH=new C.bj("dice","Dice",A.mw)
D.eHK=new C.bj("coin","Coin",K.yg)
D.eJr=new C.bj("num","Number",A.yp)
D.d5A=w([D.eGH,D.eHK,D.eJr],x.c)
D.d5D=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fH5=new B.OY("Moon",1.62,0,4291941851)
D.fH6=new B.OY("Mars",3.71,0.01,4294472049)
D.fH7=new B.OY("Earth",9.81,1,4281908728)
D.fH9=new B.OY("Jupiter",24.79,1.4,4294677052)
D.fH8=new B.OY("Sun",274,2,4294688548)
D.yQ=w([D.fH5,D.fH6,D.fH7,D.fH9,D.fH8],C.ax("O<OY>"))
D.ax0=w([A.c9,A.aM,A.b2,A.aN,A.bu,A.bX,A.cs,A.hy],x.O)
D.e3x={H:0}
D.doi=new C.bl(D.e3x,[2],x.I)
D.dpR=new B.tg("Hydrogen","H\u2082",D.doi,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e3y={H:0,Cl:1}
D.dov=new C.bl(D.e3y,[1,1],x.I)
D.dpT=new B.tg("Hydrogen chloride","HCl",D.dov,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e3z={H:0,O:1}
D.do0=new C.bl(D.e3z,[2,1],x.I)
D.dpU=new B.tg("Water","H\u2082O",D.do0,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e3N={N:0,H:1}
D.doS=new C.bl(D.e3N,[1,3],x.I)
D.dq1=new B.tg("Ammonia","NH\u2083",D.doS,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5h={C:0,H:1}
D.doM=new C.bl(D.a5h,[1,4],x.I)
D.dpV=new B.tg("Methane","CH\u2084",D.doM,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e3A={H:0,S:1}
D.dn8=new C.bl(D.e3A,[2,1],x.I)
D.dq0=new B.tg("Hydrogen sulfide","H\u2082S",D.dn8,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e3S={O:0}
D.doQ=new C.bl(D.e3S,[2],x.I)
D.dq2=new B.tg("Oxygen","O\u2082",D.doQ,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e3M={N:0}
D.doj=new C.bl(D.e3M,[2],x.I)
D.dpS=new B.tg("Nitrogen","N\u2082",D.doj,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e3l={C:0,O:1}
D.doY=new C.bl(D.e3l,[1,2],x.I)
D.dpZ=new B.tg("Carbon dioxide","CO\u2082",D.doY,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aGp={C:0,H:1,O:2}
D.dmU=new C.bl(D.aGp,[1,2,1],x.I)
D.dq_=new B.tg("Formaldehyde","CH\u2082O",D.dmU,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.doL=new C.bl(D.a5h,[2,4],x.I)
D.dpX=new B.tg("Ethene","C\u2082H\u2084",D.doL,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.doK=new C.bl(D.a5h,[2,6],x.I)
D.dpW=new B.tg("Ethane","C\u2082H\u2086",D.doK,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dmV=new C.bl(D.aGp,[1,4,1],x.I)
D.dpY=new B.tg("Methanol","CH\u2083OH",D.dmV,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2M=w([D.dpR,D.dpT,D.dpU,D.dq1,D.dpV,D.dq0,D.dq2,D.dpS,D.dpZ,D.dq_,D.dpX,D.dpW,D.dpY],C.ax("O<tg>"))
D.d6B=w([A.bX,A.aN,A.dQ,A.b2],x.O)
D.d7v=w([],x.h)
D.d7A=w([],x.B)
D.a2V=w([],x.F)
D.ebc=new B.ec("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ebi=new B.ec("solar","Solar panel","\u2600\ufe0f",A.bI,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ebX=new B.ec("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ebz=new B.ec("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aN,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eb4=new B.ec("buck","Step-down converter","\ud83d\udd3d",A.hy,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ebx=new B.ec("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.ec1=new B.ec("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.ebJ=new B.ec("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ebn=new B.ec("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ebZ=new B.ec("fuse","Fuse","\ud83e\uddef",A.c9,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eaX=new B.ec("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hy,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ebK=new B.ec("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.ebM=new B.ec("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ebk=new B.ec("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.ebo=new B.ec("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.ebG=new B.ec("buzzer","Buzzer","\ud83d\udd14",A.bX,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ebd=new B.ec("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ebB=new B.ec("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ebt=new B.ec("radio","Radio","\ud83d\udcfb",A.nU,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ebq=new B.ec("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eb3=new B.ec("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eba=new B.ec("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ebg=new B.ec("fan","Fan","\ud83c\udf00",A.aN,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.ec3=new B.ec("speaker","Speaker","\ud83d\udd0a",A.bX,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.ebT=new B.ec("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ebw=new B.ec("calculator","Calculator","\ud83e\uddee",A.KB,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eb9=new B.ec("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.ec2=new B.ec("router","WiFi router","\ud83d\udcf6",A.hy,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.ec5=new B.ec("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eb_=new B.ec("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.ec6=new B.ec("kettle","Kettle","\ud83e\uded6",A.mk,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eb7=new B.ec("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ebj=new B.ec("lights","Party lights","\ud83c\udf84",A.nU,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ebu=new B.ec("fridge","Fridge","\ud83e\uddca",A.fV,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eb1=new B.ec("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.ebU=new B.ec("blender","Blender","\ud83e\udd64",A.c9,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ebr=new B.ec("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eb6=new B.ec("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ebv=new B.ec("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ebR=new B.ec("neon","Neon sign","\ud83e\udea7",A.bX,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eb2=new B.ec("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ebL=new B.ec("doorbell","Doorbell","\ud83d\udd14",A.bI,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ebf=new B.ec("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.ebF=new B.ec("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.ebW=new B.ec("heartmon","Heart monitor","\ud83e\ude7a",A.h4,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eb0=new B.ec("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ebA=new B.ec("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.ebI=new B.ec("discoball","Disco ball","\ud83e\udea9",A.nU,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.ec0=new B.ec("robot","Robot","\ud83e\udd16",A.aN,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eaZ=new B.ec("toaster","Toaster","\ud83c\udf5e",A.dU,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.ec4=new B.ec("ledstrip","LED strip","\ud83c\udf08",A.bX,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ebQ=new B.ec("pump","Water pump","\ud83d\udeb0",A.aN,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.ebC=new B.ec("hairdryer","Hair dryer","\ud83d\udca8",A.je,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.ebO=new B.ec("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eb8=new B.ec("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ec_=new B.ec("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eaW=new B.ec("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h4,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ebs=new B.ec("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ebl=new B.ec("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ebH=new B.ec("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.ti,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eaY=new B.ec("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ebb=new B.ec("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.ebY=new B.ec("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cz,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ebD=new B.ec("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eby=new B.ec("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.ebP=new B.ec("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ebm=new B.ec("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.ebE=new B.ec("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ebN=new B.ec("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ebS=new B.ec("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eaV=new B.ec("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.ebp=new B.ec("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cz,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ebh=new B.ec("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eb5=new B.ec("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ebe=new B.ec("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ebV=new B.ec("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qr=w([D.ebc,D.ebi,D.ebX,D.ebz,D.eb4,D.ebx,D.ec1,D.ebJ,D.ebn,D.ebZ,D.eaX,D.ebK,D.ebM,D.ebk,D.ebo,D.ebG,D.ebd,D.ebB,D.ebt,D.ebq,D.eb3,D.eba,D.ebg,D.ec3,D.ebT,D.ebw,D.eb9,D.ec2,D.ec5,D.eb_,D.ec6,D.eb7,D.ebj,D.ebu,D.eb1,D.ebU,D.ebr,D.eb6,D.ebv,D.ebR,D.eb2,D.ebL,D.ebf,D.ebF,D.ebW,D.eb0,D.ebA,D.ebI,D.ec0,D.eaZ,D.ec4,D.ebQ,D.ebC,D.ebO,D.eb8,D.ec_,D.eaW,D.ebs,D.ebl,D.ebH,D.eaY,D.ebb,D.ebY,D.ebD,D.eby,D.ebP,D.ebm,D.ebE,D.ebN,D.ebS,D.eaV,D.ebp,D.ebh,D.eb5,D.ebe,D.ebV],C.ax("O<ec>"))
D.d7W=w([0,0.46,0.82],x.n)
D.d86=w([5,10,15,25,45,60],x.t)
D.d8r=w([-0.045,0.03,-0.015],x.n)
D.d8P=w([0.9,0.97,1],x.n)
D.axr=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.ug=w([0.05,0.2,0.35],x.n)
D.cQo=w([D.EQ,D.EQ],x.O)
D.cVz=w([A.F_,A.M],x.O)
D.cUC=w([A.fl,A.hl],x.O)
D.cOu=w([A.f2,A.nT],x.O)
D.cbo=w([A.lI,A.dx],x.O)
D.axs=w([D.cQo,D.cVz,D.cUC,D.cOu,D.cbo],x.Q)
D.fGU=new B.v0("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fGV=new B.v0("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fGM=new B.v0("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fGT=new B.v0("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fGR=new B.v0("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fGN=new B.v0("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fGS=new B.v0("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fGO=new B.v0("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fGQ=new B.v0("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fGP=new B.v0("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cm=w([D.fGU,D.fGV,D.fGM,D.fGT,D.fGR,D.fGN,D.fGS,D.fGO,D.fGQ,D.fGP],C.ax("O<v0>"))
D.bfZ=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.da5=w([D.EQ,D.bfZ,D.adP,A.adj],x.O)
D.b1P=new C.ac(0,A.G,A.hM,A.dE,6)
D.db_=w([D.b1P],x.V)
D.ei2=new C.z(0,"AND")
D.eiQ=new C.z(1,"Adder")
D.ejq=new C.z(2,"Blinker")
D.ejV=new C.z(3,"Memory")
D.dbK=w([D.ei2,D.eiQ,D.ejq,D.ejV],x.E)
D.axE=w([-104,0,104],x.n)
D.axF=w([-14,3],x.n)
D.dcv=w([-8,0,8],x.n)
D.axN=w([-92,0,92],x.n)
D.dcS=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eO3=new B.uM("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eOa=new B.uM("Medium tank","Balanced.",0.35,1)
D.eO9=new B.uM("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QF=w([D.eO3,D.eOa,D.eO9],x._)
D.nr=w([0.04,0.2,0.36],x.n)
D.axX=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eJ7=new C.bj(D.aW_,"Fold",K.am9)
D.eIh=new C.bj(D.a9J,"Flip",A.G7)
D.bEp=new C.a0(62889,"MaterialIcons",!1)
D.eJp=new C.bj(D.aW0,"Rise",D.bEp)
D.amn=new C.a0(983870,"MaterialIcons",!1)
D.eGf=new C.bj(D.a9K,"Assemble",D.amn)
D.eGo=new C.bj(D.aW1,"Spin",D.akG)
D.eGl=new C.bj(D.aW2,"Pop",A.lm)
D.ded=w([D.eJ7,D.eIh,D.eJp,D.eGf,D.eGo,D.eGl],C.ax("O<+(Ke,n,a0)>"))
D.ay1=w([A.bX,A.dQ,A.bv,A.aN,A.bu,A.c9],x.O)
D.deq=w([A.aN,A.cs,A.cs,A.b2],x.O)
D.deD=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eFb=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.epL=new C.z("Make the output turn TWICE as fast.",2)
D.ej_=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eDR=new C.z("Make the output turn 4 times faster.",4)
D.evm=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eyu=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.ewZ=new C.z("Make the output turn 3 times faster.",3)
D.exK=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ay6=w([D.eFb,D.epL,D.ej_,D.eDR,D.evm,D.eyu,D.ewZ,D.exK],C.ax("O<+(n,L)>"))
D.dfA=w([3,4.5,5,6,9],x.n)
D.b2n=new C.ac(0,A.G,A.aW,A.J,16)
D.dg1=w([D.b2n],x.V)
D.QI=w([A.bX,A.bI,A.b2,A.aN,A.bu,A.c9,A.c,A.cs],x.O)
D.dgu=w(["solar","turbine","crank","pot"],x.s)
D.dgP=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dgV=w([0,0.35,0.75,1],x.n)
D.eGB=new C.bj("drop","Drop",D.am_)
D.eGD=new C.bj("weight","Weight",U.amr)
D.eJk=new C.bj("cannon","Newton's cannon",A.alp)
D.dhA=w([D.eGB,D.eGD,D.eJk],x.c)
D.eCv=new C.z("piano","Piano")
D.eCb=new C.z("organ","Organ")
D.ewG=new C.z("bell","Bell")
D.eCx=new C.z("pluck","Pluck")
D.eDQ=new C.z("synth","Synth")
D.eyp=new C.z("flute","Flute")
D.ayn=w([D.eCv,D.eCb,D.ewG,D.eCx,D.eDQ,D.eyp],x.K)
D.di7=w(["volts","level","ohms","on"],x.s)
D.djs=w([A.jr,A.BP,A.BD,A.q3,A1.Gu,A.u6,A.yn,A.q7,A.hR,A.nn,A.ha,A.dX,A.i4,A.i5,A.mx,A.lT,A.vS,A.rl,A.lU,A.FZ,A.u5,A.G6,A.BF,A.alV,A.Nm,A.yj,A.Nu,A.alz,T.amj,A.lm],x.w)
D.dkm=w([0.72,1],x.n)
D.dky=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e56={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dmO=new C.bl(D.e56,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aGr={A:0,T:1,C:2,G:3}
D.a3S=new C.bl(D.aGr,["U","A","G","C"],x.l)
D.dmW=new C.bl(D.aGr,["T","A","G","C"],x.l)
D.e3J={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d6F=w([0,2,4,5,7,9,11],x.t)
D.cPF=w([0,2,3,5,7,8,10],x.t)
D.dbW=w([0,3,5,6,7,10],x.t)
D.Cs=new C.bl(D.e3J,[D.awj,D.d6F,D.cPF,D.dbW,D.aoV],C.ax("bl<n,ai<G>>"))
D.e4V={A:0,T:1,U:2,C:3,G:4}
D.dnb=new C.bl(D.e4V,[A.c9,A.cn,A.cn,A.aM,A.b2],C.ax("bl<n,w>"))
D.e34={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fZv=new B.y_("Switch",F.NU,A.bI,0,"Tap it to turn it ON or OFF.")
D.fZr=new B.y_("Blinker",A.oU,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fZs=new B.y_("AND",D.amn,A.cn,2,"ON only when BOTH inputs are ON.")
D.bFU=new C.a0(63671,"MaterialIcons",!1)
D.fZq=new B.y_("OR",D.bFU,A.bu,2,"ON when EITHER input is ON.")
D.fZt=new B.y_("XOR",G.a_R,A.bX,2,"ON when the inputs are DIFFERENT.")
D.fZn=new B.y_("NAND",A.tV,A.aN,2,"OFF only when BOTH inputs are ON.")
D.bF_=new C.a0(63176,"MaterialIcons",!1)
D.fZo=new B.y_("NOR",D.bF_,A.hy,2,"ON only when BOTH inputs are OFF.")
D.fZp=new B.y_("NOT",A_.BQ,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fZu=new B.y_("Light",A.rg,A.dQ,1,"Glows when its input is ON.")
D.fZw=new B.y_("Buzzer",A.o5,A.c9,1,"Beeps while its input is ON.")
D.z2=new C.bl(D.e34,[D.fZv,D.fZr,D.fZs,D.fZq,D.fZt,D.fZn,D.fZo,D.fZp,D.fZu,D.fZw],C.ax("bl<n,y_>"))
D.e4S={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eH1=new C.bj(3,20,1.9)
D.eGw=new C.bj(33,90,1.6)
D.eJJ=new C.bj(52,15,3.2)
D.eJH=new C.bj(45,-100,1.8)
D.eIb=new C.bj(-15,-60,1.9)
D.eHF=new C.bj(-25,140,2.4)
D.eHw=new C.bj(-82,0,2.2)
D.aDP=new C.bl(D.e4S,[D.eH1,D.eGw,D.eJJ,D.eJH,D.eIb,D.eHF,D.eHw],C.ax("bl<n,+(L,L,L)>"))
D.cP2=w([A.A],x.M)
D.cPm=w([A.ay,A.aC],x.M)
D.cY6=w([A.ay,A.A,A.aC],x.M)
D.cZz=w([A.ay,A.ld,A.A,A.lC,A.aC],x.M)
D.dbG=w([A.ay,A.ld,A.a3,A.a8,A.lC,A.aC],x.M)
D.do7=new C.dT([1,D.cP2,2,D.cPm,3,D.cY6,4,A.ays,5,D.cZz,6,D.dbG],C.ax("dT<G,ai<dc>>"))
D.e3K={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eIn=new C.bj(1,A.bO,"Hydrogen")
D.eHg=new C.bj(4,A.bl,"Carbon")
D.eGg=new C.bj(3,A.d_,"Nitrogen")
D.eIH=new C.bj(2,A.aw,"Oxygen")
D.eI4=new C.bj(2,A.bI,"Sulfur")
D.eJh=new C.bj(1,A.be,"Chlorine")
D.w7=new C.bl(D.e3K,[D.eIn,D.eHg,D.eGg,D.eIH,D.eI4,D.eJh],C.ax("bl<n,+(G,w,n)>"))
D.e5e={Calm:0,Box:1,Sleep:2}
D.cwt=w([4,2,6,0],x.n)
D.cwA=w([4,4,4,4],x.n)
D.cwB=w([4,7,8,0],x.n)
D.R6=new C.bl(D.e5e,[D.cwt,D.cwA,D.cwB],C.ax("bl<n,ai<L>>"))
D.e3d={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wN=new B.a02(0,"source")
D.cZ4=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h3r=new B.q4("Clock",A.oU,D.wN,A.bv,D.cZ4)
D.h3n=new B.q4("Button",A.yr,D.wN,A.aM,A.T)
D.dfM=w(["random","quick","slow"],x.s)
D.h3y=new B.q4("Dice",A.mw,D.wN,A.bX,D.dfM)
D.bFy=new C.a0(63484,"MaterialIcons",!1)
D.DQ=new B.a02(1,"logic")
D.dkh=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h3u=new B.q4("Delay",D.bFy,D.DQ,A.cn,D.dkh)
D.d8d=w(["fast","mid","slow"],x.s)
D.h3z=new B.q4("Echo",A.alP,D.DQ,A.bu,D.d8d)
D.h3w=new B.q4("Every 2nd",A_.BQ,D.DQ,A.hy,A.T)
D.bFd=new C.a0(63309,"MaterialIcons",!1)
D.h3t=new B.q4("Every 3rd",D.bFd,D.DQ,A.aN,A.T)
D.bHc=new C.a0(983902,"MaterialIcons",!1)
D.bZv=w(["50%","25%","75%"],x.s)
D.h3B=new B.q4("Chance",D.bHc,D.DQ,A.cs,D.bZv)
D.qD=new B.a02(2,"out")
D.h3p=new B.q4("Light",A.rg,D.qD,A.dQ,A.T)
D.h3q=new B.q4("Burst",A.lm,D.qD,A.bX,A.T)
D.h3o=new B.q4("Ripple",A.yv,D.qD,A.b8,A.T)
D.h3x=new B.q4("Ball",A.am1,D.qD,A.cs,A.T)
D.h3v=new B.q4("Comet",A.nn,D.qD,A.bu,A.T)
D.bGX=new C.a0(983669,"MaterialIcons",!1)
D.h3A=new B.q4("Shake",D.bGX,D.qD,A.c9,A.T)
D.h3C=new B.q4("Pop",A.G_,D.qD,A.b2,A.T)
D.h3s=new B.q4("Wash",A.Ny,D.qD,A.pz,A.T)
D.mH=new C.bl(D.e3d,[D.h3r,D.h3n,D.h3y,D.h3u,D.h3z,D.h3w,D.h3t,D.h3B,D.h3p,D.h3q,D.h3o,D.h3x,D.h3v,D.h3A,D.h3C,D.h3s],C.ax("bl<n,q4>"))
D.e4W={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Ct=new C.bl(D.e4W,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e3r={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zu=new B.Jb(0,"tv")
D.ePB=new B.m6("Samsung Neo QLED 8K",D.zu,F.ED,A.aN)
D.ePs=new B.m6("LG OLED evo G5",D.zu,A.ea,A.h4)
D.ePj=new B.m6("Sony Bravia 9",D.zu,A.qO,A.bs)
D.ePn=new B.m6("Apple TV 4K",D.zu,A.e2,A.bO)
D.ePk=new B.m6("Bang and Olufsen Beovision",D.zu,F.El,F.ti)
D.Ix=new B.Jb(1,"iphone")
D.aMT=new B.m6("iPhone 18 Pro Max",D.Ix,D.ag1,A.cb)
D.wk=new B.Jb(3,"fold")
D.bm1=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.ePx=new B.m6("iPhone Fold",D.wk,D.bm1,A.b6)
D.uG=new B.Jb(2,"android")
D.ePy=new B.m6("Samsung Galaxy S26 Ultra",D.uG,F.aca,A.d_)
D.bfw=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.ePq=new B.m6("Samsung Galaxy Z Fold7",D.wk,D.bfw,A.cz)
D.ePm=new B.m6("Google Pixel 10 Pro XL",D.uG,A.dy,A.be)
D.ePu=new B.m6("Xiaomi 16 Ultra",D.uG,A.lM,A.cc)
D.ePp=new B.m6("Huawei Mate 80 Pro Max",D.uG,A.eK,A.aw)
D.ePl=new B.m6("OPPO Find X9 Ultra",D.uG,A.dZ,A.b2)
D.ePD=new B.m6("Honor Magic V5",D.wk,A.dc,A.cn)
D.ePr=new B.m6("vivo X300 Pro",D.uG,A.hl,A.cs)
D.SH=new B.Jb(4,"tablet")
D.ePw=new B.m6("iPad Pro M5",D.SH,A.dy,A.aN)
D.a6p=new B.Jb(5,"reader")
D.ePE=new B.m6("Kindle Scribe",D.a6p,A.eb,A.bs)
D.zv=new B.Jb(6,"computer")
D.ePv=new B.m6("MacBook Pro M5 Max",D.zv,A.dy,A.cb)
D.ePA=new B.m6("iMac 32 inch",D.zv,A.bO,A.cz)
D.ePt=new B.m6("Pro Display XDR 8K",D.zv,A.lM,A.b8)
D.ePo=new B.m6("Sony Laser Projector",D.zv,A.ct,A.dQ)
D.ePz=new B.m6("Luxury car touchscreen",D.zv,L.ml,A.aw)
D.ePC=new B.m6("Apple Vision Pro",D.zv,A.jj,A.bu)
D.m0=new C.bl(D.e3r,[D.ePB,D.ePs,D.ePj,D.ePn,D.ePk,D.aMT,D.ePx,D.ePy,D.ePq,D.ePm,D.ePu,D.ePp,D.ePl,D.ePD,D.ePr,D.ePw,D.ePE,D.ePv,D.ePA,D.ePt,D.ePo,D.ePz,D.ePC],C.ax("bl<n,m6>"))
D.e3E={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.boJ=new B.fN(20,4,13,!1)
D.bp9=new B.fN(14,5,13.5,!1)
D.bp0=new B.fN(9,2.4,10,!1)
D.bpe=new B.fN(7,5,12.5,!1)
D.bp3=new B.fN(8,3.5,12,!1)
D.boF=new B.fN(15,2,6,!1)
D.bpc=new B.fN(45,6,13.5,!0)
D.boV=new B.fN(10,8,13.5,!1)
D.boN=new B.fN(25,3,12,!0)
D.boT=new B.fN(35,4,12,!0)
D.boU=new B.fN(40,4.5,9.5,!0)
D.boW=new B.fN(55,3,9,!0)
D.boG=new B.fN(18,3,9,!1)
D.bpb=new B.fN(22,4,13.5,!1)
D.bp4=new B.fN(16,5,13.5,!1)
D.boR=new B.fN(30,4,9,!0)
D.bpn=new B.fN(5,3.5,13,!1)
D.boZ=new B.fN(25,3,13.5,!0)
D.bp7=new B.fN(14,2.5,9,!1)
D.boY=new B.fN(6,6,13,!1)
D.bpf=new B.fN(30,1.2,5,!0)
D.bpm=new B.fN(35,3,4.5,!0)
D.bpi=new B.fN(20,4.5,7.5,!0)
D.boX=new B.fN(55,5.5,13.5,!0)
D.boE=new B.fN(45,5.5,13.5,!0)
D.bp8=new B.fN(40,5.5,13.5,!0)
D.bpl=new B.fN(60,6,13.5,!0)
D.agt=new B.fN(28,4,7,!0)
D.Fc=new B.fN(25,4,7,!0)
D.boQ=new B.fN(30,4,7,!0)
D.boL=new B.fN(22,4,7,!0)
D.boM=new B.fN(24,4,7,!0)
D.bp_=new B.fN(60,3,5.5,!0)
D.boH=new B.fN(18,9,14,!0)
D.boO=new B.fN(25,9,14,!0)
D.agu=new B.fN(30,8,14,!0)
D.boK=new B.fN(20,8,14,!0)
D.boS=new B.fN(30,9,14,!0)
D.bpg=new B.fN(22,5,9.5,!0)
D.boI=new B.fN(30,2.5,10.5,!0)
D.bp5=new B.fN(50,5.5,13.5,!0)
D.bpk=new B.fN(12,2,9.5,!1)
D.bp2=new B.fN(16,1.3,9.5,!0)
D.bpd=new B.fN(40,2.5,7,!0)
D.bpj=new B.fN(60,1.2,4.8,!0)
D.bph=new B.fN(18,5,13.5,!0)
D.bpa=new B.fN(8,2,9.5,!1)
D.bp1=new B.fN(12,2.5,8,!1)
D.boP=new B.fN(20,3.5,13.5,!0)
D.bp6=new B.fN(3.5,3,13,!1)
D.z3=new C.bl(D.e3E,[D.boJ,D.bp9,D.bp0,D.bpe,D.bp3,D.boF,D.bpc,D.boV,D.boN,D.boT,D.boU,D.boW,D.boG,D.bpb,D.bp4,D.boR,D.bpn,D.boZ,D.bp7,D.boY,D.bpf,D.bpm,D.bpi,D.boX,D.boE,D.bp8,D.bpl,D.agt,D.Fc,D.boQ,D.Fc,D.boL,D.Fc,D.boM,D.agt,D.Fc,D.bp_,D.boH,D.boO,D.agu,D.boK,D.boS,D.bpg,D.boI,D.bp5,D.bpk,D.bp2,D.bpd,D.bpj,D.Fc,D.agu,D.bph,D.bpa,D.bp1,D.boP,D.bp6],C.ax("bl<n,fN>"))
D.e3c={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eFM=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.elY=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.elT=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.exJ=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eyG=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.exF=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ek_=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.evF=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eFU=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ez_=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ep9=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ejI=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eoc=new C.z("Movement","They pull your legs together and help you balance.")
D.eq4=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.em6=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eDr=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eEt=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.evn=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eEe=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eu5=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ez8=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ejP=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eqr=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eyP=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eup=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eEm=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.exa=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ejY=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ezH=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eD4=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eBk=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eid=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.ewT=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ewX=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.er7=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.emk=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.epU=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.evP=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eC4=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eFR=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ez5=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ehX=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ew_=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eiJ=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eCk=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eDn=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ewp=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eCz=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.ejR=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eDT=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.enC=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eBK=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eqO=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.euk=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ezp=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eE3=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eDV=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eE_=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.euO=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eAc=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eBh=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eDI=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ewo=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.esJ=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.erx=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ewO=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ezi=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ete=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.etU=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.enY=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eDj=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eoK=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eiG=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.er6=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eiB=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.emJ=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.erb=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eoT=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ezD=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eq7=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eFz=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.erG=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.euI=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.exi=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ep1=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eoM=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dph=new C.bl(D.e3c,[D.eFM,D.elY,D.elT,D.exJ,D.eyG,D.exF,D.ek_,D.evF,D.eFU,D.ez_,D.ep9,D.ejI,D.eoc,D.eq4,D.em6,D.eDr,D.eEt,D.evn,D.eEe,D.eu5,D.ez8,D.ejP,D.eqr,D.eyP,D.eup,D.eEm,D.exa,D.ejY,D.ezH,D.eD4,D.eBk,D.eid,D.ewT,D.ewX,D.er7,D.emk,D.epU,D.evP,D.eC4,D.eFR,D.ez5,D.ehX,D.ew_,D.eiJ,D.eCk,D.eDn,D.ewp,D.eCz,D.ejR,D.eDT,D.enC,D.eBK,D.eqO,D.euk,D.ezp,D.eE3,D.eDV,D.eE_,D.euO,D.eAc,D.eBh,D.eDI,D.ewo,D.esJ,D.erx,D.ewO,D.ezi,D.ete,D.etU,D.enY,D.eDj,D.eoK,D.eiG,D.er6,D.eiB,D.emJ,D.erb,D.eoT,D.ezD,D.eq7,D.eFz,D.erG,D.euI,D.exi,D.ep1,D.eoM],C.ax("bl<n,+(n,n)>"))
D.dpj=new C.hA(A.G,11)
D.dpo=new C.hA(A.G,30)
D.dsG=new B.U_(null)
D.dwu=new B.U3(null)
D.dwv=new B.U4(null)
D.dwI=new B.U5(null)
D.dyJ=new B.U7(null)
D.dyK=new B.U8(null)
D.dyL=new B.U9(null)
D.dzy=new B.Uv(null)
D.dzA=new B.UK(null)
D.dzB=new B.UL(null)
D.dzD=new B.UM(null)
D.dAa=new B.UT(null)
D.dC5=new B.UX(null)
D.dC6=new B.UZ(null)
D.dC7=new B.V_(null)
D.dC9=new B.V0(null)
D.dDK=new B.Vh(null)
D.dDM=new B.Vj(null)
D.dDR=new B.Vt(null)
D.dE1=new B.Vu(null)
D.dEx=new B.Vv(null)
D.dG1=new B.Vx(null)
D.dHp=new B.Vz(null)
D.dHq=new B.VA(null)
D.dIL=new B.VD(null)
D.dYE=new B.VE(null)
D.dYG=new B.VF(null)
D.dYH=new B.VI(null)
D.dYI=new B.VJ(null)
D.e_B=new B.VR(null)
D.e_C=new B.VS(null)
D.e_K=new B.VZ(null)
D.e_T=new B.W2(null)
D.e_U=new B.W3(null)
D.e_V=new B.a82(null)
D.e0v=new B.W5(null)
D.e1Y=new B.W9(null)
D.e5q=new C.v(0,118)
D.aGy=new C.v(0,13)
D.e5r=new C.v(0,17)
D.e5u=new C.v(0,330)
D.e5x=new C.v(0,-13)
D.aGE=new C.v(0,-14)
D.e5y=new C.v(0,-17)
D.e5z=new C.v(0,-18)
D.e5A=new C.v(0,-19)
D.e5B=new C.v(0,-20)
D.e5E=new C.v(0,-26)
D.e5F=new C.v(0,-28)
D.e5G=new C.v(0,-31)
D.e5H=new C.v(0,-32)
D.we=new C.v(0,-6)
D.e5I=new C.v(0,-6771)
D.e5J=new C.v(0,-9)
D.e5L=new C.v(-9.5,-11)
D.e5M=new C.v(10,20)
D.e5O=new C.v(10,-13)
D.e5P=new C.v(10,-22)
D.e5Q=new C.v(10,-4)
D.a5l=new C.v(11,8)
D.e5S=new C.v(12,2)
D.e5T=new C.v(14,0)
D.e5U=new C.v(14,12)
D.aGI=new C.v(14,8)
D.e5V=new C.v(14,-17)
D.e5W=new C.v(14,-18)
D.aGJ=new C.v(14,-3)
D.aGK=new C.v(14,-4)
D.e5X=new C.v(15,0)
D.e5Y=new C.v(15,-12)
D.e5Z=new C.v(16,-8)
D.e6_=new C.v(18,14)
D.e60=new C.v(18,-12)
D.aGO=new C.v(20,0)
D.e66=new C.v(20,15)
D.e67=new C.v(20,-17)
D.e68=new C.v(20,-3)
D.e69=new C.v(21,8)
D.e6b=new C.v(22,10)
D.aGP=new C.v(22,8)
D.e6c=new C.v(24,0)
D.e6d=new C.v(24,2)
D.e6f=new C.v(24,-18)
D.e6g=new C.v(24,-22)
D.e6h=new C.v(25,8)
D.e6i=new C.v(26,0)
D.e6o=new C.v(28,-30)
D.e6t=new C.v(30,18)
D.e6u=new C.v(30,2)
D.e6v=new C.v(31,19)
D.e6w=new C.v(32,0)
D.aGS=new C.v(34,0)
D.aGT=new C.v(34,-32)
D.I7=new C.v(36,0)
D.e6B=new C.v(3,-1)
D.e6E=new C.v(40,3)
D.e6I=new C.v(4,11)
D.e6L=new C.v(4,-2)
D.e6P=new C.v(5,0)
D.e6Q=new C.v(5,17)
D.e6R=new C.v(5,6)
D.e6V=new C.v(6,11)
D.e70=new C.v(8,7)
D.e71=new C.v(8,-10)
D.e72=new C.v(8,-14)
D.e73=new C.v(8,-3)
D.aGX=new C.v(9,0)
D.e76=new C.v(-20.5,-17.6)
D.e77=new C.v(-9,18.5)
D.e7a=new C.v(-2.6,-1)
D.e7b=new C.v(1.9,-0.8)
D.e7e=new C.v(-0.22,0.09)
D.e7j=new C.v(2.6,1)
D.e7q=new C.v(-9,12.2)
D.e7I=new C.v(-9,20.5)
D.e8_=new C.v(-10,0)
D.e80=new C.v(-10,12)
D.aH3=new C.v(-10,4)
D.e81=new C.v(-11,-2)
D.e82=new C.v(-13,-5)
D.e83=new C.v(-14,0)
D.e84=new C.v(-14,13)
D.e85=new C.v(-14,2)
D.e86=new C.v(-14,-12)
D.e87=new C.v(-14,-19)
D.e88=new C.v(-14,-23)
D.e89=new C.v(-15,6)
D.e8a=new C.v(-16,14)
D.e8b=new C.v(-16,-8)
D.e8c=new C.v(-17,10)
D.e8d=new C.v(-17,-18)
D.e8e=new C.v(-17,-8)
D.e8g=new C.v(-18,20)
D.e8h=new C.v(-18,-9)
D.aH5=new C.v(-20,0)
D.e8j=new C.v(-20,16)
D.e8k=new C.v(-20,-9)
D.S4=new C.v(-22,8)
D.e8l=new C.v(-22,-10)
D.e8m=new C.v(-22,-11)
D.e8n=new C.v(-24,10)
D.e8o=new C.v(-24,11)
D.e8p=new C.v(-24,14)
D.e8q=new C.v(-24,-22)
D.e8r=new C.v(-25,-11)
D.e8s=new C.v(-26,0)
D.e8t=new C.v(-26,-18)
D.e8u=new C.v(-2,9)
D.e8v=new C.v(-2,-10)
D.e8w=new C.v(-2,-20)
D.e8x=new C.v(-2,-9)
D.e8y=new C.v(-32,0)
D.aH7=new C.v(-34,0)
D.e8D=new C.v(-40,3)
D.e8F=new C.v(-4,11)
D.e8G=new C.v(-4,-17)
D.e8H=new C.v(-4,-2)
D.e8J=new C.v(-5,0)
D.e8K=new C.v(-5,20)
D.e8L=new C.v(-5,6)
D.e8M=new C.v(-6,26)
D.e8N=new C.v(-6,6)
D.e8O=new C.v(-6,-42)
D.e8P=new C.v(-7,-19)
D.e8Q=new C.v(-7,-24)
D.e8R=new C.v(-8,-9)
D.a5p=new C.v(-9,0)
D.e8S=new C.v(-9,1)
D.e8T=new C.v(-9,-23)
D.fjP=new C.y("Thinking\u2026",null,A.h3,null,null,null,null,null,null,null,null,null)
D.e9P=new C.D(A.jH,D.fjP,null)
D.fzU=new C.y("Start from a ready-made board",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.e9Z=new C.D(A8.vv,D.fzU,null)
D.bwu=new C.Q(4,0,4,14)
D.fff=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkK=new C.y("Games and little helpers for a spare minute.",null,D.fff,null,null,null,null,null,null,null,null,null)
D.ea8=new C.D(D.bwu,D.fkK,null)
D.fwH=new C.y("Tap to throw in a star",null,A.kI,null,null,null,null,null,null,null,null,null)
D.b5x=new C.cp(A.A,null,null,D.fwH,null)
D.eg2=new C.cL(0,null,0,14,null,null,D.b5x,null)
D.d8N=w([A.iA,A.bl],x.O)
D.aLZ=new C.bT(A.A,0.5,A.x,null,0,D.d8N,null,null)
D.egL=new C.bT(A.A,0.5,A.x,null,0,D.ayf,null,null)
D.d0j=w([A.c,A.bK],x.O)
D.egN=new C.bT(A.A,0.5,A.x,null,0,D.d0j,null,null)
D.egO=new C.bT(A.A,0.5,A.x,null,0,M.axj,null,null)
D.dgH=w([A.bO,A.jj],x.O)
D.aM_=new C.bT(A.A,0.5,A.x,null,0,D.dgH,null,null)
D.cGf=w([A.c,A.bO],x.O)
D.egS=new C.bT(A.t1,0.5,A.x,null,0,D.cGf,null,null)
D.bcW=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bih=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d_l=w([D.bcW,D.afB,D.bih],x.O)
D.d6P=w([0,0.7,1],x.n)
D.egU=new C.bT(A.t1,0.5,A.x,null,0,D.d_l,D.d6P,null)
D.cwH=w([A.oH,A.aF,A.K],x.O)
D.ddw=w([0.3,0.7,1],x.n)
D.egW=new C.bT(A.A,0.5,A.x,null,0,D.cwH,D.ddw,null)
D.bm5=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.deV=w([A.fc,D.bm5],x.O)
D.egY=new C.bT(A.t1,0.5,A.x,null,0,D.deV,null,null)
D.czv=w([A.dy,A.ct],x.O)
D.egZ=new C.bT(A.A,0.5,A.x,null,0,D.czv,null,null)
D.cVJ=w([A.oH,A.aF,A.fl],x.O)
D.eh_=new C.bT(A.A,0.5,A.x,null,0,D.cVJ,null,null)
D.cO0=w([A.fU,A.aM,A.d5],x.O)
D.eh1=new C.bT(A.t1,0.5,A.x,null,0,D.cO0,null,null)
D.d9m=w([A.jj,L.ml],x.O)
D.eh2=new C.bT(A.t1,0.5,A.x,null,0,D.d9m,null,null)
D.bd9=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bb7=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cXZ=w([D.bd9,D.bb7],x.O)
D.eh4=new C.bT(A.A,0.5,A.x,null,0,D.cXZ,null,null)
D.bhG=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bfE=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bfI=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dj2=w([D.bhG,D.bfE,D.bfI],x.O)
D.cUw=w([0,0.65,1],x.n)
D.eh5=new C.bT(M.a9U,0.5,A.x,null,0,D.dj2,D.cUw,null)
D.eh6=new C.bT(A.A,0.5,A.x,null,0,D.auI,null,null)
D.dfU=w([A.lJ,A.aF,A.fl],x.O)
D.ehb=new C.bT(A.A,0.5,A.x,null,0,D.dfU,null,null)
D.dhv=w([A.jj,A.hJ],x.O)
D.ehe=new C.bT(A.A,0.5,A.x,null,0,D.dhv,null,null)
D.aM3=new C.aT(9,9)
D.ehn=new C.aT(1.4,1.4)
D.ei6=new C.z(0,-4)
D.enz=new C.z(0.22,4)
D.euG=new C.z(0.8,-4)
D.eDW=new C.z(0.58,4)
D.eGF=new C.bj("Moon",1.62,4291941851)
D.eHe=new C.bj("Neptune",11.15,4284524026)
D.eHS=new C.bj("Sun",274,4294688548)
D.eI7=new C.bj("Mercury",3.7,4288455599)
D.eId=new C.bj("Earth",9.81,4281908728)
D.eIf=new C.bj("Mars",3.71,4294472049)
D.eIy=new C.bj("Venus",8.87,4294759245)
D.eIE=new C.bj("Saturn",10.44,4294829706)
D.eJ0=new C.bj("Jupiter",24.79,4294677052)
D.eMB=new C.a9(10,-8,18,-2)
D.eMC=new C.a9(14,-14,20,14)
D.eMD=new C.a9(20,-2,30,2)
D.eMF=new C.a9(4,-13,30,-3)
D.eMH=new C.a9(8,-7,12,7)
D.eMN=new C.a9(-12,12,12,19)
D.eMO=new C.a9(-12,14,12,22)
D.eMP=new C.a9(-12,-22,12,8)
D.eMQ=new C.a9(-12,-25,12,19)
D.eMR=new C.a9(-12,-26,12,-6)
D.eMS=new C.a9(-12,-4,12,14)
D.eMT=new C.a9(-12,-6,10,6)
D.eMU=new C.a9(-14,20,14,24)
D.eMV=new C.a9(-14,6,14,10)
D.eMW=new C.a9(-14,-17,14,15)
D.eMX=new C.a9(-14,-26,14,18)
D.eMY=new C.a9(-14,-4,14,20)
D.eMZ=new C.a9(-15,-29,15,25)
D.eN_=new C.a9(-16,-16,16,16)
D.eN0=new C.a9(-16,-22,-9,18)
D.eN1=new C.a9(-16,-24,16,-10)
D.eN2=new C.a9(-16,-2,16,20)
D.eN4=new C.a9(-18,20,18,24)
D.eN5=new C.a9(-18,-18,18,20)
D.eN6=new C.a9(-20,12,20,22)
D.eN7=new C.a9(-20,-28,20,26)
D.eN8=new C.a9(-22,14,22,18)
D.aMB=new C.a9(-22,-26,22,24)
D.eN9=new C.a9(-22,-3,22,3)
D.eNa=new C.a9(-22,-4,22,12)
D.eNb=new C.a9(-24,-12,10,22)
D.eNc=new C.a9(-24,-14,22,8)
D.eNd=new C.a9(-24,-6,24,20)
D.aMC=new C.a9(-24,-9,24,9)
D.eNe=new C.a9(-25,14,25,19)
D.eNf=new C.a9(-26,-14,14,8)
D.eNg=new C.a9(-26,-4,26,20)
D.eNh=new C.a9(-26,-6,4,6)
D.aMD=new C.a9(-28,-13,28,13)
D.eNi=new C.a9(-28,-16,28,16)
D.eNj=new C.a9(-28,-16,28,8)
D.eNk=new C.a9(-28,-22,28,22)
D.eNl=new C.a9(-30,-12,30,14)
D.eNm=new C.a9(-30,-14,0,14)
D.eNn=new C.a9(-30,-18,30,20)
D.eNo=new C.a9(-30,-28,30,14)
D.eNp=new C.a9(-30,-2,30,18)
D.eNq=new C.a9(-30,-4,30,18)
D.eNr=new C.a9(-32,-17,32,17)
D.eNs=new C.a9(-32,-28,32,18)
D.eNt=new C.a9(-33,-21,33,17)
D.eNu=new C.a9(-34,14,34,26)
D.a6g=new C.a9(-34,-18,34,18)
D.eNv=new C.a9(-34,-4,34,7)
D.eNw=new C.a9(-36,-24,36,20)
D.eNx=new C.a9(-38,-22,38,22)
D.eNy=new C.a9(-3,12,3,22)
D.eNz=new C.a9(-3,5,3,15)
D.eNB=new C.a9(-46,-34,46,28)
D.eNC=new C.a9(-48,-3,48,3)
D.eNF=new C.a9(-6,18,24,24)
D.eNG=new C.a9(-6,5,6,12)
D.eNH=new C.a9(-6,-22,6,-15)
D.eNI=new C.a9(-9,-16,9,22)
D.eNJ=new C.a9(-4.5,-24,4.5,-21.2)
D.eNL=new C.a9(14,-9,17.5,9)
D.e4P={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aNv=new C.en(D.e4P,5,x.R)
D.e4r={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eQK=new C.en(D.e4r,10,x.R)
D.eSS=new C.ar(24,44)
D.eSX=new C.ar(300,300)
D.eTg=new C.ar(54,38)
D.eTn=new C.ar(66,38)
D.b6Q=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eUk=new C.a7(16,16,D.b6Q,null)
D.aOv=new C.hO(3,12,12,0.82,null)
D.fBB=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOG=new C.b1(D.fBB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d9p=w([A.c9,A.bI,A.b2,A.aN,A.pz,A.c9],x.O)
D.f_c=new C.fV(A.A,0,6.283185307179586,A.x,D.d9p,null,null)
D.f8b=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q9,null,null,null)
D.f0r=new C.es("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f8b)
D.aRa=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0s=new C.es("What we see",null,null,A.cO,null,null,null,null,null,null,D.aRa)
D.f5z=new C.H(!0,A4.KG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f5z)
D.fap=new C.H(!0,A.km,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new C.es("AI",null,null,A.cO,null,null,null,null,null,null,D.fap)
D.f5k=new C.H(!0,A.bY,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new C.es("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f5k)
D.aPu=new C.H(!0,A.bY,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0T=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new C.H(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2b=new C.H(!0,A.bY,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Z=new C.H(!0,A.aS,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new C.H(!0,A.bY,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3x=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRi=new C.cR(A.hM,A.dE,6)
D.d34=w([D.eRi],x.q)
D.f3R=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d34,null,null,null)
D.f3U=new C.H(!0,A.er,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3X=new C.H(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3Z=new C.H(!0,A.bY,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4n=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPU=new C.H(!0,A.bY,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4H=new C.H(!0,A.aA,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4I=new C.H(!0,A.bY,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6C=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new C.cR(A.aW,A.J,3)
D.ayv=w([D.eRl],x.q)
D.f6F=new C.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayv,null,null,null)
D.f6K=new C.H(!0,A.c,null,null,null,null,12.5,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q9,null,null,null)
D.f7T=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f80=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new C.H(!0,A.ts,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8G=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new C.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f95=new C.H(!0,A.bY,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9a=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9g=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9H=new C.H(!0,A.bY,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9V=new C.H(!0,A.n7,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faa=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQz=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faJ=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR9=new C.cR(A.w,A.J,5)
D.cS9=w([D.eR9],x.q)
D.faK=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cS9,null,null,null)
D.faP=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayv,null,null,null)
D.fb4=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fba=new C.H(!0,A.fA,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbr=new C.H(!0,A.bY,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbW=new C.H(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fct=new C.H(!0,A.bY,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd6=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdf=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQV=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdS=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdZ=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fei=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR6=new C.H(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fel=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff5=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8e=new C.H(!0,A.c,null,null,null,null,13,A.a6,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new C.H(!0,A.ts,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffO=new C.H(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f41=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new C.y("\u26a0\ufe0f ",null,D.f41,null,null,null,null,null,null,null,null,null)
D.fgo=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wu,null,null,null,null,null,null,null,null,null)
D.fgP=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fhT=new C.y("Pick one, then change it and see what happens.",null,A.wu,null,null,null,null,null,null,null,null,null)
D.fhX=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f55=new C.H(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f55,null,null,null,null,null,null,null,null,null)
D.fjd=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7w,null,null,null,null,null,null,null,null,null)
D.fkm=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fl1=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.flz=new C.y("Make it yours",null,A.kg,null,null,null,null,null,null,null,null,null)
D.flR=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7D,null,null,null,null,null,null,null,null,null)
D.f9l=new C.H(!0,A.ji,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fob=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f9l,null,null,null,null,null,null,null,null,null)
D.foq=new C.y("YOUR DECODING",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.foD=new C.y("5G",null,U.aPX,null,null,null,null,null,null,null,null,null)
D.fbH=new C.H(!0,A.bY,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new C.y("WHAT HAPPENS",null,D.fbH,null,null,null,null,null,null,null,null,null)
D.frr=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fs6=new C.y("Change the words and pictures on the three slabs.",null,A.wu,null,null,null,null,null,null,null,null,null)
D.fsh=new C.y("All the parts and wires will be removed.",null,A.hG,null,null,null,null,null,null,null,null,null)
D.fsB=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fta=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.h3,null,null,null,null,null,null,null,null,null)
D.fu2=new C.y("INTERCEPTED",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fum=new C.y("\ud83c\udfaf Challenges",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fuS=new C.y("Remove this part",null,V.aPy,null,null,null,null,null,null,null,null,null)
D.fv9=new C.y("Clear the board?",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fbb=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new C.y("How the Lab works",null,D.fbb,null,null,null,null,null,null,null,null,null)
D.f2I=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvJ=new C.y("Electronics Lab",null,D.f2I,null,null,null,null,A.a2,null,1,null,null)
D.fvM=new C.y("?",null,M.aR3,null,null,null,null,null,null,null,null,null)
D.f9f=new C.H(!0,A.aN,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvQ=new C.y("Planet Earth",null,D.f9f,null,null,null,null,null,null,null,null,null)
D.fx2=new C.y("Ready-made circuits",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fxE=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.h3,null,null,null,null,null,null,null,null,null)
D.fxX=new C.y("UNIVERSE EXPLORER",null,I.a7C,null,null,null,null,null,null,null,null,null)
D.fAu=new C.y("SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fe1=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB0=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fe1,null,null,null,null,null,null,null,null,null)
D.fCd=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7w,null,null,null,null,null,null,null,null,null)
D.fCH=new C.y("NGMY",null,A.uN,null,null,null,null,null,null,null,null,null)
D.fCU=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.TN,null,null,null,null,null,null,null,null,null)
D.fDg=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kH,null,null,null,null,null,null,null,null,null)
D.fEd=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wu,null,null,null,null,null,null,null,null,null)
D.fEf=new C.y("TOOLBOX",null,I.a7C,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hf7=null
$.hf6=null
$.hla=0
$.hN5=C.T(x.N,x.k)
$.hNG=C.T(x.N,x.k)
$.hes=null
$.hNr=C.T(x.N,x.k)
$.hOu=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iiY","bDz",()=>{var v="led"
return C.a([B.axJ("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fgH(),v),B.axJ("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fgI(),v),B.axJ("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fgJ(),v),B.axJ("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fgQ(),v),B.axJ("Not both","Make the light go OFF only when both switches are ON.",2,new B.fgR(),v),B.axJ("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fgS(),"buzzer")],C.ax("O<bah>"))})
w($,"ijp","bDA",()=>C.a([B.oA("UNIVERSE","Earth, space and gravity",A.a0t,A.aN,new B.fh7()),B.oA("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.a_T,A.aN,new B.fh8()),B.oA("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_K,A.b2,new B.fh9()),B.oA("TOOLBOX","Converter, clock, games",T.akS,A.cs,new B.fhk()),B.oA("MOLECULE MAKER","Join atoms into real molecules",A.Nl,A.hy,new B.fhm()),B.oA("DNA LAB","Copy DNA, build a protein",D.a_K,A.bX,new B.fhn()),B.oA("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yj,A.b2,new B.fho()),B.oA("BALANCE LAB","Levers, weight and torque",D.bH4,A.aM,new B.fhp()),B.oA("GEAR LAB","Teeth, speed and force",A.BN,A.cs,new B.fhq()),B.oA("LASER MAZE","Bend the beam with mirrors",I.alg,A.aw,new B.fhr()),B.oA("LIGHT MIXER","Match colours with light",D.bEL,A.b8,new B.fhs()),B.oA("CIPHER LAB","Make and crack secret codes",A.yu,A.aN,new B.fha()),B.oA("REACTION LAB","Wire parts together",A.yy,A.bv,new B.fhb()),B.oA("SPARK PAINTER","Paint with light",A.a_M,A.bX,new B.fhc()),B.oA("ROCKET LANDER","Land softly on the pad",A.nn,A.aN,new B.fhd()),B.oA("ORBIT STUDIO","Slingshot planets",A.mz,A.cs,new B.fhe()),B.oA("SWARM STUDIO","A living school of fish",A.Nl,A.b2,new B.fhf()),B.oA("CHAIN BURST","One tap, a whole chain",A.ha,A.bX,new B.fhg()),B.oA("TITLE ANIMATOR","Make a moving title",A.yq,A.bI,new B.fhh()),B.oA("CIRCUIT LAB","Connect logic, learn it",A.a0c,A.cn,new B.fhi()),B.oA("MARBLE MUSIC","Marbles ring the notes",D.bEq,A.b8,new B.fhj()),B.oA("ORBIT SEQUENCER","Planets play the tune",D.bGS,A.bu,new B.fhl())],C.ax("O<bs6>")))
w($,"ikU","qg",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qr[v]
t.n(0,u.a,u)}return t})
w($,"iiZ","ahA",()=>C.a([B.Ft("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fgT()),B.Ft("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fgU()),B.Ft("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fgV()),B.Ft("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fgW()),B.Ft("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fgX()),B.Ft("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fgK()),B.Ft("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fgL()),B.Ft("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fgM()),B.Ft("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fgN()),B.Ft("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fgO()),B.Ft("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fgP())],C.ax("O<bai>")))
w($,"ijr","htB",()=>C.a([B.a0y("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fhA()),B.a0y("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c9,A.bz,new B.fhB()),B.a0y("Breathe","Calm down in a minute","\ud83e\udee7",A.hy,A.cz,new B.fhC()),B.a0y("Draw Pad","Sketch and share","\ud83c\udfa8",A.bC,A.b6,new B.fhD()),B.a0y("Memory Match","Find the pairs","\ud83c\udccf",A.aN,A.cb,new B.fhE()),B.a0y("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bI,A.be,new B.fhF()),B.a0y("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.fhG()),B.a0y("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fhH())],C.ax("O<btr>")))
w($,"ijq","htA",()=>C.a([B.aeV("EARTH GLOBE","Turn it, tap a country",A.mz,A.aN,new B.fht()),B.aeV("SOLAR SYSTEM","The Sun and its worlds",D.bEu,A.aM,new B.fhu()),B.aeV("GRAVITY LAB","Drop, weigh, orbit",D.am_,A.cs,new B.fhv()),B.aeV("BLACK HOLE","Throw in a star",A.FP,A.bu,new B.fhw()),B.aeV("GALAXY","Build, tilt, collide",A.y7,A.h5,new B.fhx()),B.aeV("SIZE COMPARE","Earth next to a star",D.bEN,A.bX,new B.fhy()),B.aeV("SEASONS & MOON","Why it is summer",A.vE,A.bv,new B.fhz())],C.ax("O<btm>")))})()};
(a=>{a["JfmTOL7+fZ1UopAWlUIoSmf8Wtg="]=a.current})($__dart_deferred_initializers__);