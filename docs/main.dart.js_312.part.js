((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A9,A1,A2,I,A3,P,Aa,A4,A5,G,Ab,A6,Ac,Y,Ad,Ae,Q,N,Af,Ag,Z,O,V,Ah,Ai,R,M,Aj,W,K,S,Ak,E,F,L,B={
bzn(d){return B.hUl(d)},
hUl(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzn=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qU(C.n7(""),d,A.hG,null,null).d8(0,A.YA),$async$bzn)
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
return C.i($async$bzn,v)},
i53(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Ql[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h1(D.Ql,new B.fzC())
if(w==null)w=A.d.gI(D.Ql)
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
return new B.ajV(w.a,w.b,m,w,s,!1)},
hZI(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.QM,new B.fpf(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
icT(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cH(b2,"{")
v=A.a.oH(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aL(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.v(J.q(q,"kind"))
o=C.v(J.q(q,"id"))
if(!$.qj().ai(0,p)||J.f4(s,o)||J.ad(t)>=8)continue
J.cf(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dkP[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dU(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dU(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cf(t,new C.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.v(J.q(g,0))
e=C.v(J.q(g,2))
d=A.o.D(A.k.N(C.dU(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dU(J.q(g,3))),0,1)
if(J.f4(s,f)&&J.f4(s,e)&&!J.A(f,e))J.cf(i,new C.cx([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cw:a0)
while(a0.C()){a2=a0.gR(a0)
J.cf(a1,C.v(a2))}a3=a1
a0=J.q(u,"title")
a0=C.v(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mC(a0,C.v(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.v(a5==null?"":a5)
return new B.ajV(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i3E(d){var w,v,u=B.h9n()
d.B(u)
for(w=0;w<60;++w)u.v8(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.fwn(u))&&!A.d.d7(v,new B.fwo())},
i3D(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qj().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.v(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dj6,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(C.v(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hSV(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i52(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qj().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QM[u]
if(A.d.b4(w,new B.fzz(s)))if(!C.cU(r,s.b.toLowerCase(),0))v=C.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fzA(e),C.S(w).k("a_<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cJ(w,0,new B.fzB())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qj().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajV:function ajV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzC:function fzC(){},
fpf:function fpf(){},
fwn:function fwn(d){this.a=d},
fwo:function fwo(){},
fzz:function fzz(d){this.a=d},
fzA:function fzA(d){this.a=d},
fzB:function fzB(){},
Vs:function Vs(d,e){this.c=d
this.a=e},
bk_:function bk_(d,e,f,g,h){var _=this
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
e9A:function e9A(d){this.a=d},
e9B:function e9B(d,e,f){this.a=d
this.b=e
this.c=f},
e9C:function e9C(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e,f){this.a=d
this.b=e
this.c=f},
e9K:function e9K(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9L:function e9L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9E:function e9E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9M:function e9M(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9R:function e9R(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9S:function e9S(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9T:function e9T(d,e){this.a=d
this.b=e},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9V:function e9V(d,e){this.a=d
this.b=e},
e9W:function e9W(d,e){this.a=d
this.b=e},
bzI(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQB,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hmR(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zZ,A.L,w,w),A.aB,C.bU(A.fJ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wt,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G8:function G8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uV:function uV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VV:function VV(d){this.a=d},
aEe:function aEe(d,e,f,g,h,i,j,k,l,m){var _=this
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
epH:function epH(){},
eq0:function eq0(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq1:function eq1(){},
eq2:function eq2(){},
epJ:function epJ(d,e,f){this.a=d
this.b=e
this.c=f},
epI:function epI(d,e){this.a=d
this.b=e},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d){this.a=d},
epB:function epB(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epv:function epv(d){this.a=d},
epU:function epU(d,e){this.a=d
this.b=e},
epP:function epP(d){this.a=d},
epQ:function epQ(d){this.a=d},
epM:function epM(d){this.a=d},
epR:function epR(d){this.a=d},
epL:function epL(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epK:function epK(d){this.a=d},
epV:function epV(d,e){this.a=d
this.b=e},
epO:function epO(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epX:function epX(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d){this.a=d},
epN:function epN(d){this.a=d},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
aM5:function aM5(){},
bxm:function bxm(){},
cGC(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cGC=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qX().jI(0,"assets/data/body3d.bin"),$async$cGC)
case 3:d=a1
$.hic=J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aSg(d)
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
e=D.d7Z[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a35(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aZn))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.ba5(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cGC,v)},
aS3:function aS3(d,e,f){this.a=d
this.b=e
this.c=f},
a35:function a35(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ba5:function ba5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ui:function Ui(d){this.a=d},
aCE:function aCE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dGy:function dGy(d){this.a=d},
dGx:function dGx(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dGb:function dGb(){},
dGz:function dGz(){},
dGc:function dGc(d,e){this.a=d
this.b=e},
dGd:function dGd(d){this.a=d},
dGe:function dGe(){},
dGf:function dGf(d){this.a=d},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGg:function dGg(d){this.a=d},
dG7:function dG7(d,e,f){this.a=d
this.b=e
this.c=f},
dG8:function dG8(d){this.a=d},
dG9:function dG9(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGr:function dGr(d){this.a=d},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGl:function dGl(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGi:function dGi(d){this.a=d},
aL7:function aL7(){},
aL8:function aL8(){},
c1O:function c1O(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c1P:function c1P(d,e){this.a=d
this.b=e},
c1Q:function c1Q(d){this.a=d},
ay8(d,e,f,g,h){return new B.baO(d,e,f,g,h)},
h00(d,e,f,g,h,i){return $.hQi.ca(0,d+"|"+C.v(e)+"|"+f.l()+"|"+C.v(g),new B.cNo(d,e,f,i,g,h))},
yc:function yc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cq:function Cq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nq:function nq(d,e,f){this.a=d
this.b=e
this.c=f},
baO:function baO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiR:function fiR(){},
fiS:function fiS(){},
fiT:function fiT(){},
fj_:function fj_(){},
fj0:function fj0(){},
fj1:function fj1(){},
Uo:function Uo(d){this.a=d},
aCH:function aCH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dIJ:function dIJ(d){this.a=d},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIq:function dIq(){},
dIK:function dIK(){},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIm:function dIm(d,e){this.a=d
this.b=e},
dIr:function dIr(d,e,f){this.a=d
this.b=e
this.c=f},
dIg:function dIg(){},
dIh:function dIh(){},
dIi:function dIi(d){this.a=d},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIk:function dIk(d,e,f){this.a=d
this.b=e
this.c=f},
dIs:function dIs(){},
dIt:function dIt(d,e){this.a=d
this.b=e},
dIu:function dIu(d){this.a=d},
dIp:function dIp(d,e){this.a=d
this.b=e},
dIo:function dIo(d){this.a=d},
dIf:function dIf(d,e,f){this.a=d
this.b=e
this.c=f},
dID:function dID(d){this.a=d},
dIC:function dIC(d){this.a=d},
dIE:function dIE(d){this.a=d},
dIB:function dIB(d){this.a=d},
dIz:function dIz(d){this.a=d},
dIA:function dIA(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIv:function dIv(d){this.a=d},
dIx:function dIx(d){this.a=d},
dIF:function dIF(d,e){this.a=d
this.b=e},
dIG:function dIG(d,e){this.a=d
this.b=e},
dIH:function dIH(d){this.a=d},
dIw:function dIw(d){this.a=d},
dII:function dII(d,e){this.a=d
this.b=e},
bb6:function bb6(d,e){this.b=d
this.a=e},
cNo:function cNo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLd:function aLd(){},
bx5:function bx5(){},
hH9(){return new B.Nn(null)},
oG(d,e,f,g,h){return new B.bsG(d,e,f,g,h)},
br5(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
h0w(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nn:function Nn(d){this.a=d},
Kq:function Kq(d,e){this.a=d
this.b=e},
AF:function AF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCY:function aCY(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOA:function dOA(d){this.a=d},
bsG:function bsG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjh:function fjh(){},
fji:function fji(){},
fjj:function fjj(){},
fju:function fju(){},
fjw:function fjw(){},
fjx:function fjx(){},
fjy:function fjy(){},
fjz:function fjz(){},
fjA:function fjA(){},
fjB:function fjB(){},
fjC:function fjC(){},
fjk:function fjk(){},
fjl:function fjl(){},
fjm:function fjm(){},
fjn:function fjn(){},
fjo:function fjo(){},
fjp:function fjp(){},
fjq:function fjq(){},
fjr:function fjr(){},
fjs:function fjs(){},
fjt:function fjt(){},
fjv:function fjv(){},
br6:function br6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_o:function f_o(d){this.a=d},
f_n:function f_n(d,e){this.a=d
this.b=e},
f_l:function f_l(d){this.a=d},
f_p:function f_p(d){this.a=d},
f_m:function f_m(d,e){this.a=d
this.b=e},
aeW:function aeW(d,e,f){this.c=d
this.d=e
this.a=f},
adO:function adO(d,e,f){this.c=d
this.d=e
this.a=f},
Q4:function Q4(d,e,f,g,h,i,j,k,l,m){var _=this
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
bs4:function bs4(d,e){this.b=d
this.a=e},
brA:function brA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9N:function b9N(d,e){this.b=d
this.a=e},
aHd:function aHd(d,e){this.c=d
this.a=e},
aHe:function aHe(d,e,f){var _=this
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
f_4:function f_4(d){this.a=d},
f_3:function f_3(d){this.a=d},
f_2:function f_2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_1:function f_1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f__:function f__(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZZ:function eZZ(d,e,f){this.a=d
this.b=e
this.c=f},
f_0:function f_0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZY:function eZY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_c:function f_c(d){this.a=d},
f_b:function f_b(d){this.a=d},
f_d:function f_d(d,e){this.a=d
this.b=e},
f_e:function f_e(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_a:function f_a(d,e,f){this.a=d
this.b=e
this.c=f},
f_g:function f_g(d,e,f){this.a=d
this.b=e
this.c=f},
f_9:function f_9(d){this.a=d},
f_5:function f_5(d){this.a=d},
f_h:function f_h(d){this.a=d},
f_i:function f_i(d){this.a=d},
f_8:function f_8(d,e){this.a=d
this.b=e},
f_j:function f_j(d,e){this.a=d
this.b=e},
f_7:function f_7(d,e){this.a=d
this.b=e},
f_k:function f_k(d,e){this.a=d
this.b=e},
f_6:function f_6(d,e){this.a=d
this.b=e},
eZW:function eZW(){},
eZX:function eZX(){},
bqJ:function bqJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqa:function bqa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bas:function bas(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqc:function bqc(d,e,f){this.b=d
this.c=e
this.a=f},
bua:function bua(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMX:function aMX(){},
hog(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aH(0,t*t*t).ad(0,v.aH(0,s*t*f)).ad(0,u.aH(0,s*f*f)).ad(0,e.aH(0,f*f*f))},
bgY(d,e,f,g,h,i){return $.hQT.ca(0,d+"|"+C.v(e)+"|"+f.l()+"|"+C.v(g),new B.din(d,e,f,i,g,h))},
a0j:function a0j(d,e){this.a=d
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
Cu:function Cu(d,e){this.a=d
this.b=e},
Zh:function Zh(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0w:function a0w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CE:function CE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abF:function abF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abW:function abW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adS:function adS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgW:function bgW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bJ$=0},
dir:function dir(d){this.a=d},
dis:function dis(d){this.a=d},
dio:function dio(d,e){this.a=d
this.b=e},
dip:function dip(d){this.a=d},
diq:function diq(d){this.a=d},
dit:function dit(d){this.a=d},
diu:function diu(d){this.a=d},
div:function div(d){this.a=d},
diw:function diw(d){this.a=d},
dix:function dix(d){this.a=d},
diy:function diy(d){this.a=d},
diz:function diz(d){this.a=d},
diA:function diA(d){this.a=d},
diB:function diB(d){this.a=d},
FU:function FU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VU:function VU(d){this.a=d},
aEd:function aEd(d,e,f,g,h,i,j){var _=this
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
ep1:function ep1(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoT:function eoT(){},
eoU:function eoU(){},
eoX:function eoX(){},
eoY:function eoY(d,e,f){this.a=d
this.b=e
this.c=f},
eoZ:function eoZ(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoV:function eoV(){},
eoW:function eoW(d){this.a=d},
epr:function epr(d){this.a=d},
ep0:function ep0(){},
eoN:function eoN(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep5:function ep5(){},
ep4:function ep4(d,e){this.a=d
this.b=e},
eoQ:function eoQ(){},
eoO:function eoO(d){this.a=d},
eoP:function eoP(d){this.a=d},
epp:function epp(d){this.a=d},
epo:function epo(d){this.a=d},
epq:function epq(d){this.a=d},
epf:function epf(d,e){this.a=d
this.b=e},
epn:function epn(d){this.a=d},
epl:function epl(d){this.a=d},
epm:function epm(d){this.a=d},
epk:function epk(d){this.a=d},
epj:function epj(d){this.a=d},
epg:function epg(d){this.a=d},
eph:function eph(d){this.a=d},
epi:function epi(d){this.a=d},
eoS:function eoS(){},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epa:function epa(d){this.a=d},
epd:function epd(d){this.a=d},
ep9:function ep9(d){this.a=d},
epe:function epe(d){this.a=d},
ep8:function ep8(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep6:function ep6(d,e){this.a=d
this.b=e},
bgX:function bgX(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
din:function din(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aM3:function aM3(){},
blw:function blw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PW:function PW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W8:function W8(d){this.a=d},
bkA:function bkA(d,e,f,g,h,i,j,k){var _=this
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
eB6:function eB6(d){this.a=d},
eB4:function eB4(d){this.a=d},
eB5:function eB5(){},
eAI:function eAI(){},
eAH:function eAH(){},
eAR:function eAR(d,e){this.a=d
this.b=e},
eAT:function eAT(d){this.a=d},
eAX:function eAX(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eB_:function eB_(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d,e){this.a=d
this.b=e},
eB0:function eB0(d){this.a=d},
eAP:function eAP(d){this.a=d},
eB1:function eB1(d,e){this.a=d
this.b=e},
eAO:function eAO(d,e){this.a=d
this.b=e},
eB2:function eB2(d){this.a=d},
eAN:function eAN(d,e){this.a=d
this.b=e},
eB3:function eB3(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAV:function eAV(d){this.a=d},
eAK:function eAK(d){this.a=d},
eAW:function eAW(d,e){this.a=d
this.b=e},
eAJ:function eAJ(d,e){this.a=d
this.b=e},
bs_:function bs_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wk:function Wk(d){this.a=d},
aEt:function aEt(d,e,f,g){var _=this
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
eHG:function eHG(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e,f){this.a=d
this.b=e
this.c=f},
eHI:function eHI(d){this.a=d},
eHF:function eHF(){},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHL:function eHL(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHA:function eHA(d,e){this.a=d
this.b=e},
aMc:function aMc(){},
aMi:function aMi(){},
a_O:function a_O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VR:function VR(d){this.a=d},
aE5:function aE5(d,e,f,g,h,i,j,k,l,m){var _=this
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
elx:function elx(d){this.a=d},
ely:function ely(d,e){this.a=d
this.b=e},
ell:function ell(d,e){this.a=d
this.b=e},
elm:function elm(d){this.a=d},
elj:function elj(d){this.a=d},
elk:function elk(d){this.a=d},
eli:function eli(d){this.a=d},
eln:function eln(d){this.a=d},
elh:function elh(d,e){this.a=d
this.b=e},
elp:function elp(d){this.a=d},
elg:function elg(d,e){this.a=d
this.b=e},
elq:function elq(d){this.a=d},
elf:function elf(d,e){this.a=d
this.b=e},
elr:function elr(d){this.a=d},
ele:function ele(d){this.a=d},
els:function els(d){this.a=d},
eld:function eld(d){this.a=d},
elt:function elt(d){this.a=d},
elc:function elc(d){this.a=d},
elu:function elu(d){this.a=d},
elv:function elv(d){this.a=d},
elw:function elw(d){this.a=d},
elb:function elb(d){this.a=d},
elo:function elo(d){this.a=d},
blj:function blj(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abM:function abM(d,e,f){this.a=d
this.b=e
this.c=f},
Wf:function Wf(d){this.a=d},
bkF:function bkF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eH7:function eH7(d){this.a=d},
eH8:function eH8(d){this.a=d},
eH6:function eH6(d){this.a=d},
eGX:function eGX(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGN:function eGN(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGM:function eGM(d){this.a=d},
eGZ:function eGZ(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e){this.a=d
this.b=e},
eH_:function eH_(d,e){this.a=d
this.b=e},
eGS:function eGS(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eGR:function eGR(d){this.a=d},
eH1:function eH1(d){this.a=d},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eH2:function eH2(d){this.a=d},
eGP:function eGP(d,e){this.a=d
this.b=e},
eH3:function eH3(d){this.a=d},
eGL:function eGL(d,e){this.a=d
this.b=e},
eH4:function eH4(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
bsS:function bsS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ace:function ace(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Um:function Um(d){this.a=d},
aCG:function aCG(d,e,f,g,h,i,j,k,l,m){var _=this
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
dHS:function dHS(d){this.a=d},
dHR:function dHR(d,e){this.a=d
this.b=e},
dHT:function dHT(){},
dHU:function dHU(d){this.a=d},
dHI:function dHI(d,e){this.a=d
this.b=e},
dHL:function dHL(d){this.a=d},
dHK:function dHK(d,e){this.a=d
this.b=e},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHP:function dHP(d,e,f){this.a=d
this.b=e
this.c=f},
dHO:function dHO(d){this.a=d},
dHM:function dHM(d){this.a=d},
dHN:function dHN(d){this.a=d},
dHQ:function dHQ(d){this.a=d},
baN:function baN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cMW:function cMW(d){this.a=d},
aLb:function aLb(){},
bx4:function bx4(){},
aM0:function aM0(){},
bxl:function bxl(){},
aMf:function aMf(){},
bxt:function bxt(){},
FQ:function FQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
ad3:function ad3(d,e,f){this.a=d
this.b=e
this.c=f},
VL:function VL(d){this.a=d},
bke:function bke(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eh0:function eh0(d,e){this.a=d
this.b=e},
ehp:function ehp(d){this.a=d},
ehe:function ehe(d){this.a=d},
eh5:function eh5(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
eh4:function eh4(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehh:function ehh(d,e){this.a=d
this.b=e},
eha:function eha(d,e){this.a=d
this.b=e},
ehi:function ehi(d,e){this.a=d
this.b=e},
eh9:function eh9(d,e){this.a=d
this.b=e},
ehj:function ehj(d,e){this.a=d
this.b=e},
eh8:function eh8(d,e){this.a=d
this.b=e},
ehk:function ehk(d){this.a=d},
eh7:function eh7(d,e){this.a=d
this.b=e},
ehl:function ehl(d){this.a=d},
eh6:function eh6(d){this.a=d},
ehm:function ehm(d){this.a=d},
eh3:function eh3(d){this.a=d},
ehn:function ehn(d){this.a=d},
eh2:function eh2(d){this.a=d},
eho:function eho(d){this.a=d},
eh1:function eh1(d){this.a=d},
bhR:function bhR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adz:function adz(d,e){this.a=d
this.b=e
this.c=-1000},
VQ:function VQ(d){this.a=d},
aE4:function aE4(d,e,f,g,h,i,j,k,l,m){var _=this
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
ekV:function ekV(d,e){this.a=d
this.b=e},
ekW:function ekW(d,e,f){this.a=d
this.b=e
this.c=f},
el2:function el2(d){this.a=d},
el1:function el1(d){this.a=d},
el3:function el3(d,e){this.a=d
this.b=e},
el4:function el4(d){this.a=d},
el0:function el0(d){this.a=d},
el5:function el5(d){this.a=d},
el_:function el_(d,e){this.a=d
this.b=e},
el6:function el6(d,e){this.a=d
this.b=e},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
el7:function el7(d,e){this.a=d
this.b=e},
ekY:function ekY(d,e){this.a=d
this.b=e},
el8:function el8(d){this.a=d},
el9:function el9(d){this.a=d},
ekX:function ekX(d){this.a=d},
ela:function ela(d){this.a=d},
blk:function blk(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLZ:function aLZ(){},
bxj:function bxj(){},
aM_:function aM_(){},
bxk:function bxk(){},
ff2(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8S,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i9,w,w,1/0)},
i5s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdM(j),j=j.gaf(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e2(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bM(0,new B.fzU(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.wi.h(0,d[n]).a)return!1
m=C.ev([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h36(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cH(w,v[0])*16+A.a.cH(w,v[1])*4+A.a.cH(w,v[2])]},
tn:function tn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9G:function b9G(d,e){this.a=d
this.b=e},
fzU:function fzU(d,e){this.a=d
this.b=e},
VO:function VO(d){this.a=d},
aE2:function aE2(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ekp:function ekp(d){this.a=d},
eko:function eko(d,e){this.a=d
this.b=e},
ekb:function ekb(d,e){this.a=d
this.b=e},
ek5:function ek5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ek6:function ek6(d){this.a=d},
eka:function eka(d,e){this.a=d
this.b=e},
ek9:function ek9(d,e){this.a=d
this.b=e},
ek7:function ek7(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
ekj:function ekj(){},
ekk:function ekk(d){this.a=d},
eki:function eki(d){this.a=d},
ekl:function ekl(d){this.a=d},
ekh:function ekh(d){this.a=d},
ekf:function ekf(d){this.a=d},
ekg:function ekg(d,e){this.a=d
this.b=e},
ekc:function ekc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eke:function eke(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
ekd:function ekd(d,e){this.a=d
this.b=e},
ekn:function ekn(d,e){this.a=d
this.b=e},
biy:function biy(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqx:function dqx(d,e){this.a=d
this.b=e},
UL:function UL(d){this.a=d},
bju:function bju(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dQD:function dQD(d){this.a=d},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQs:function dQs(d){this.a=d},
dQr:function dQr(){},
dQt:function dQt(d){this.a=d},
dQq:function dQq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQB:function dQB(){},
dQw:function dQw(){},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e){this.a=d
this.b=e},
V0:function V0(d){this.a=d},
aD9:function aD9(d,e,f,g,h){var _=this
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
dTs:function dTs(d){this.a=d},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTf:function dTf(){},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTl:function dTl(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTq:function dTq(d){this.a=d},
bdS:function bdS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d5E:function d5E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d5G:function d5G(d,e,f){this.a=d
this.b=e
this.c=f},
d5F:function d5F(d,e){this.a=d
this.b=e},
aLp:function aLp(){},
bAd(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8S,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i9,w,w,1/0)},
fsH(d,e,f,g,h){var w,v,u=null,t=C.fN(u,u,u,u,C.cX(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c4,u,A.dL,A.c3)
t.eh()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbc(w)/2))
t.a3(d,w)},
i2u(){var w,v,u,t,s,r,q,p,o=new C.ez()
o.dl(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.am(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aw(5)
if(r.L(0,p))q.push(new C.z(p,1+o.aw(2+A.o.am(t,3))))}A.d.b_(q,new B.ftM())
w.push(new B.aRT(q))}return w},
a1K(d,e){var w,v,u,t
for(w=new C.Xn(d),v="";w.C();){u=C.jK(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jK(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ifg(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Xn(d),v=0,u="";w.C();){t=C.jK(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jK(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRT:function aRT(d){this.a=d},
bGe:function bGe(){},
ftM:function ftM(){},
Ud:function Ud(d){this.a=d},
bj8:function bj8(d,e,f,g,h,i){var _=this
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
dE2:function dE2(){},
dEf:function dEf(d){this.a=d},
dEe:function dEe(d,e,f){this.a=d
this.b=e
this.c=f},
dEg:function dEg(d){this.a=d},
dEd:function dEd(d,e){this.a=d
this.b=e},
dE3:function dE3(d,e){this.a=d
this.b=e},
dE8:function dE8(){},
dE9:function dE9(d){this.a=d},
dE7:function dE7(d){this.a=d},
dEa:function dEa(d,e){this.a=d
this.b=e},
dE6:function dE6(d,e){this.a=d
this.b=e},
dEb:function dEb(d,e){this.a=d
this.b=e},
dE5:function dE5(d,e){this.a=d
this.b=e},
dEc:function dEc(d){this.a=d},
dE4:function dE4(d){this.a=d},
b9S:function b9S(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cFt:function cFt(d,e){this.a=d
this.b=e},
Ve:function Ve(d){this.a=d},
bjG:function bjG(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dXv:function dXv(d){this.a=d},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXw:function dXw(d){this.a=d},
dXt:function dXt(d,e){this.a=d
this.b=e},
dXl:function dXl(d,e,f){this.a=d
this.b=e
this.c=f},
dXp:function dXp(d){this.a=d},
dXo:function dXo(d){this.a=d},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXs:function dXs(d,e){this.a=d
this.b=e},
bfl:function bfl(d,e,f){this.b=d
this.c=e
this.a=f},
ddE:function ddE(d,e){this.a=d
this.b=e},
ddF:function ddF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Un:function Un(d){this.a=d},
bjl:function bjl(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dIe:function dIe(d){this.a=d},
dId:function dId(d,e){this.a=d
this.b=e},
dHX:function dHX(){},
dI5:function dI5(d){this.a=d},
dI4:function dI4(){},
dI6:function dI6(d){this.a=d},
dI3:function dI3(){},
dI7:function dI7(d){this.a=d},
dI2:function dI2(d){this.a=d},
dI8:function dI8(d){this.a=d},
dI1:function dI1(d){this.a=d},
dI9:function dI9(d){this.a=d},
dI0:function dI0(d){this.a=d},
dIa:function dIa(d,e){this.a=d
this.b=e},
dI_:function dI_(d,e){this.a=d
this.b=e},
dIb:function dIb(d){this.a=d},
dHZ:function dHZ(d,e){this.a=d
this.b=e},
dIc:function dIc(d){this.a=d},
dHY:function dHY(d,e){this.a=d
this.b=e},
aL3:function aL3(){},
aLx:function aLx(){},
htq(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcn()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h9n(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4r(w,v,u,A.cH,C.U(x.N,x.y))},
hB0(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h9o(d),d.d*f.b)},
h9o(d){return 42+(D.m5.ai(0,d.b)?(d.ch-1)*38:0)},
ed:function ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tA:function tA(d,e,f,g){var _=this
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
aak:function aak(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abr:function abr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4r:function a4r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMF:function bMF(){},
bMQ:function bMQ(d){this.a=d},
bML:function bML(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMR:function bMR(d){this.a=d},
bMS:function bMS(d){this.a=d},
bMU:function bMU(d){this.a=d},
bMV:function bMV(d){this.a=d},
bMT:function bMT(d){this.a=d},
bMW:function bMW(d,e,f){this.a=d
this.b=e
this.c=f},
bMX:function bMX(d){this.a=d},
bMH:function bMH(d){this.a=d},
bMI:function bMI(d){this.a=d},
bMG:function bMG(d){this.a=d},
bMJ:function bMJ(d,e,f){this.a=d
this.b=e
this.c=f},
bMK:function bMK(d){this.a=d},
bME:function bME(d){this.a=d},
bMY:function bMY(d,e){this.a=d
this.b=e},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMP:function bMP(d){this.a=d},
bMO:function bMO(d){this.a=d},
bMN:function bMN(d){this.a=d},
aiI:function aiI(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHs:function bHs(){},
bHt:function bHt(){},
mC:function mC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cm9:function cm9(d){this.a=d},
icP(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fLg(),c9=new B.fLi(),d0=new B.fLj(),d1=new B.fLh(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a8(w.a,w.b,w.c,w.d),A.bM,A.bK))
d3.bF(D.ebp,D.e9c,c9.$2(A.dC,1.4))
d3.bF(D.e92,D.e91,c9.$2(A.br,2.4))
d3.bF(D.e93,Y.aHq,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Rz
d3.ae(D.e8N,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aNg,A.aQ,A.cs))
d3.ae(A.cJ,16,c8.$1(A.br))
d3.ae(A.cJ,13,c8.$1(c7?A.aO.j(0.85):A.M))
if(c7){d2=d3.a
J.bv(d2.save())
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
r.delete()}}d3.ae(D.ebl,2.4,c8.$1(c7?A.bc:A.ak))
d3.ae(D.ec2,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.e2))
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
J.bv(d2.save())
d2.translate(0,10)
d3.jc(0,d4.y)
d3.bF(D.a5V,D.aHG,c9.$2(A.bN,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f1).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ae(A.iw,3,c8.$1(c7?A.bc:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3E[m]
r=c9.$2(A.br,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bv(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.c9(A.J,6,24+Math.sin(d4.y*3)*4)
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
d3.aQ(w,d1.$3(D.eR_,A.aM,A.d6))
d3.aX(D.eQp,c8.$1(A.dt))
d2=d3.a
J.bv(d2.save())
d2.translate(18,-5)
d3.jc(0,d4.y*2)
d3.bF(A.J,D.e96,c9.$2(A.bN,2.4))
d3.bF(A.a5U,D.e95,c9.$2(A.hQ,1))
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
d3.aQ(d2,c8.$1(A.bL.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.eR5,A.bn,A.cp))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aQ(k,c8.$1(A.e2))
d3.ae(D.e9a,7,c8.$1(c7?A.c:A.dt))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.mo))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bk(d5*17),3)!==0
else j=!1
i=j?A.bU:D.bjt
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bU.j(0.35))
t.z=A.lA
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ebv,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.eRb,A.bN,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bL.j(0.75):A.aw))
if(c7){d2=d3.a
J.bv(d2.save())
d2.translate(-7,8)
d3.jc(0,d4.y*0.5)
d3.hL(C.c9(A.J,7,22),c8.$1(A.d6))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.mo))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.o.u(59-A.o.E(A.k.bk(d5),60)),2,"0"),D.e9b,A.b_,6.5)
d3.ae(D.e9n,4,c8.$1(A.dt))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.So,10,c8.$1(c7?A.bH:A.br))
d2=d3.a
J.bv(d2.save())
d2.translate(0,-8)
d3.jc(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ec4,A.c,16)
d2.restore()
d3.ae(A.kg,6,c8.$1(A.d_))
d3.ae(A.kg,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bQ(A.So,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bF(D.ebu,D.ec0,c9.$2(A.br,4))
d2=d3.a
J.bv(d2.save())
d3.jc(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.eR0,A.bN,A.ak))
d3.ae(D.aHs,8,c8.$1(A.aw))
d3.ae(D.aHs,4.5,c8.$1(c7?A.aO:A.cp))
d3.ae(D.ebs,2.2,c8.$1(c7&&A.o.E(A.k.bk(d5*1.6),2)===0?A.av:A.kw))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ebD,A.av,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.eR8,A.j1,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new C.a8(-18,t,-15.6,t+8),c8.$1(A.b_))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new C.a8(15.6,d2,18,d2+8),c8.$1(A.bU))}d3.ae(D.ebo,4,c8.$1(A.aW))
d3.ae(D.e97,2.4,c8.$1(A.av))
d3.ae(D.e9k,2.4,c8.$1(A.bc))
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
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aQ(h,c9.$2(A.b_,1.8))
d6.$5(d3,"72",D.e98,A.h5,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ebH,A.h5.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.ebx,3,c8.$1(c7?A.bc:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aX(D.eR2,c8.$1(F.tp))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bv(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.v6(0,-1,1)
d3.hL(C.c9(A.J,8,14),c8.$1(A.ct))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.cc))
d3.ae(D.e9P,1.2,c8.$1(A.w))
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
d3.aQ(e,d1.$3(D.eRw,A.c,A.bz))
d3.aX(D.eRv,c8.$1(c7?A.dQ:A.br))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aQ(s,c8.$1(A.eu))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.Rz
d3.ae(D.e8O,14,d2)}return!0
case"discoball":d3.bF(D.e8T,K.aHo,c9.$2(A.dt,1.4))
d3.ae(A.J,16,d1.$3(D.eQO,A.aQ,A.ak))
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
r=c8.$1(D.d8X[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.eQM,A.cs,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.eQF,A.aL,A.bK))
d3.bF(D.e8S,D.e8U,c9.$2(A.br,1.6))
d3.ae(D.e8V,2.2,c8.$1(c7?A.av:A.br))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3G[m]
if(c7)t=a1?A.b7:A.f3
else t=A.cp
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bv(d2.save())
d2.translate(14,0)
d3.jc(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bF(A.J,D.a5R,c9.$2(A.bK,4))
d2.restore()
d3.bF(D.ebh,D.ebB,c9.$2(A.bK,4))
d3.aX(D.eRu,c8.$1(c7?A.b7.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayo[m]+1,d2,10,14,2)
p=C.ar(A.bL,A.d6,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.eA(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.eR1,A.bN,A.bn))
for(m=0;m<2;++m){l=D.ayo[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.aw).H()
t.drawRRect(C.eA(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mK
r=s.H()
t.drawRRect(C.eA(d2),r)
r.delete()}}d3.bF(D.e9r,D.e9I,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mS(1,a3,0.8,1).iM():A.e2
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mK
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dt))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.eQR,A.cA,A.Ll))
d3.ae(D.ebI,8,c8.$1(A.qY))
d2=d3.a
J.bv(d2.save())
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
d3.aQ(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fX).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.eag,3.2,c8.$1(A.fX.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bv(d2.save())
d3.jc(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.eR3,A.i5,A.ts))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.e2))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mK
d3.ae(D.e9m,8,d2)}return!0
case"headphones":d3.eV(C.c9(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QZ[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a8(s,0,s+14,20),A.bu,A.oK).H()
d2.drawRRect(C.eA(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bQ(new C.u(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eD.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.E(d5*14,8)),A.kr,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.eQK,A.dt,A.e2))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.T(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aY(A.o.u(C.h4(a4)),2,"0"),D.e8Z,A.b_,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.ar(A.Ex,A.h5,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bk(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.mo))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(a5),$.oP(),!0)
d2.translate(-27,-19)
E.Lg(d3,D.eXj,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vs))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a8(a6.a,a6.b,a6.c,a6.d),A.dM,A.d5))
d3.aE(a6,c9.$2(A.aZ,1.2))
d3.ae(D.aHN,9,c8.$1(A.aw))
d3.ae(D.aHN,6,c9.$2(A.d6,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b_:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.eak,s,8.2)
d3.ae(D.e9d,2.4,c8.$1(c7?A.bc:A.aJ))
d6.$5(d3,"IN",D.ebC,A.ad,6)
d6.$5(d3,"OUT",D.ea8,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.ar(A.bK,A.av,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.ae(D.e8P,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.eQG,A.e2,A.hM))
d6.$5(d3,"7805",D.a5V,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.df1[m]-1
r=c8.$1(A.e4).H()
d2.drawRect(C.c_(new C.a8(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ec3,A.bk,9)
return!0
case"diode":d3.bF(D.aHR,D.aHB,c9.$2(A.e4,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aE.j(0.85)))
d3.aX(D.eQv,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.jx
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.ebq,A.aA,8)
return!0
case"ldr":d3.bF(D.aHR,D.a5V,c9.$2(A.e4,2.4))
d3.bF(D.aHG,D.aHB,c9.$2(A.e4,2.4))
d3.ae(A.J,12,c8.$1(A.d6))
d3.ae(A.J,12,c9.$2(A.tB,1.6))
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
a8.e=null}d3.aQ(a8,c9.$2(A.bL,1.4))
d2=C.ar(A.br,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ebi,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ee
break A}if("sonytv"===d2){t=A.qT
break A}if("appletv"===d2){t=A.e4
break A}t=F.Ez
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aE(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bv(p.save())
p.clipRRect(C.eA(a5),$.oP(),!0)
p.translate(t,s)
E.h5w(d3,new C.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e9J,1.6,c8.$1(A.b_))}else{d3.aE(a5,c8.$1(D.vs))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aQ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dt))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.jw[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dt).H()
p=s.gbI().a.snapshot()
d2.drawPath((s.e=new C.cB(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eaW,A.bN,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.Xh))
d6.$5(d3,"Apple TV",D.eal,A.br,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bhX))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ec_,F.tp,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m5.h(0,d2)
b1=b0.b===D.wv
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
b7=C.ar(b6,A.c,0.35)
b7.toString
d3.aE(w,d1.$3(new C.a8(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bv(t.save())
t.clipRRect(C.eA(a5),$.oP(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lg(d3,new C.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vs))
if(b1){t=a5.b
s=a5.d
d3.bF(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.e2))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bN))
if(c7){d6.$5(d3,"NGMY",D.ec6,A.aw,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c_(new C.a8(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aHm,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.eRc,A.cs,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(b8),$.oP(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lg(d3,new C.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.Xh))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.eRg,A.bM,A.cs))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(b9),$.oP(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lg(d3,new C.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vs))
d3.ae(D.aHh,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.Xh))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.ee))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(c0),$.oP(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lg(d3,new C.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vs))
d3.aX(D.eRm,c8.$1(A.bn))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dt))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(c1),$.oP(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lg(d3,new C.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.eR4,A.iF,A.dt))
d3.ae(D.aHr,7,c8.$1(A.aw))
d3.ae(D.aHr,4,c8.$1(c7?A.dQ:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.mo))
d3.aE(c2,c9.$2(A.br,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cQ(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aQ(c3,c9.$2(A.aO,2.2))
d2=A.k.E(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b_))
d6.$5(d3,""+(88+A.o.E(A.k.bk(d5*2),5)),D.eah,A.c,10)
d6.$5(d3,"km/h",D.eae,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a8(c4.a,c4.b,c4.c,c4.d),A.dt,A.e2))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bv(d2.save())
d2.clipRRect(C.eA(c5),$.oP(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lg(d3,new C.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lA
d3.ae(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bF(D.ebM,D.ebR,c9.$2(A.bn,4))
d3.bF(D.e9K,D.e9S,c9.$2(A.bn,4))
return!0}return!1},
fLg:function fLg(){},
fLi:function fLi(){},
fLj:function fLj(){},
fLh:function fLh(){},
h8d(d,e,f,g){return new B.aiG(d,g,f,e)},
FF(d,e,f){return new B.baP(d,e,f)},
aiG:function aiG(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiH:function aiH(d,e,f,g,h,i,j,k,l,m){var _=this
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
bH6:function bH6(d,e){this.a=d
this.b=e},
bH7:function bH7(d){this.a=d},
bH5:function bH5(d){this.a=d},
bH8:function bH8(){},
bH9:function bH9(d){this.a=d},
bHa:function bHa(d,e,f){this.a=d
this.b=e
this.c=f},
bH4:function bH4(d,e){this.a=d
this.b=e},
bH2:function bH2(d,e){this.a=d
this.b=e},
bH3:function bH3(d,e,f){this.a=d
this.b=e
this.c=f},
bGX:function bGX(d,e){this.a=d
this.b=e},
bGY:function bGY(){},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
bH_:function bH_(d,e){this.a=d
this.b=e},
bH0:function bH0(d){this.a=d},
bH1:function bH1(d){this.a=d},
bHp:function bHp(d){this.a=d},
bHq:function bHq(){},
bGA:function bGA(){},
bHr:function bHr(d,e){this.a=d
this.b=e},
bHo:function bHo(d,e,f){this.a=d
this.b=e
this.c=f},
bHj:function bHj(d){this.a=d},
bHg:function bHg(d,e,f){this.a=d
this.b=e
this.c=f},
bHh:function bHh(d,e){this.a=d
this.b=e},
bHk:function bHk(d){this.a=d},
bHe:function bHe(d,e){this.a=d
this.b=e},
bHf:function bHf(d,e){this.a=d
this.b=e},
bHi:function bHi(d){this.a=d},
bHl:function bHl(d){this.a=d},
bHc:function bHc(d,e){this.a=d
this.b=e},
bHd:function bHd(d,e){this.a=d
this.b=e},
bHm:function bHm(d){this.a=d},
bHb:function bHb(d){this.a=d},
bHn:function bHn(d){this.a=d},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGU:function bGU(d,e){this.a=d
this.b=e},
bGW:function bGW(d,e){this.a=d
this.b=e},
bGV:function bGV(d,e){this.a=d
this.b=e},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGI:function bGI(d){this.a=d},
bGG:function bGG(d){this.a=d},
bGJ:function bGJ(d,e,f){this.a=d
this.b=e
this.c=f},
bGF:function bGF(d,e){this.a=d
this.b=e},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGN:function bGN(d,e){this.a=d
this.b=e},
bGO:function bGO(d,e){this.a=d
this.b=e},
bGP:function bGP(d,e,f){this.a=d
this.b=e
this.c=f},
bGE:function bGE(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e,f){this.a=d
this.b=e
this.c=f},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGR:function bGR(d,e,f){this.a=d
this.b=e
this.c=f},
bGC:function bGC(d,e){this.a=d
this.b=e},
bGS:function bGS(d){this.a=d},
bGT:function bGT(d){this.a=d},
bGK:function bGK(d){this.a=d},
bGL:function bGL(d){this.a=d},
baP:function baP(d,e,f){this.a=d
this.b=e
this.c=f},
fj2:function fj2(){},
fj3:function fj3(){},
fj4:function fj4(){},
fiQ:function fiQ(){},
fj5:function fj5(){},
fiP:function fiP(){},
fj6:function fj6(){},
fiU:function fiU(){},
fiO:function fiO(){},
fiV:function fiV(){},
fiN:function fiN(){},
fiW:function fiW(){},
fiM:function fiM(){},
fiX:function fiX(){},
fiK:function fiK(){},
fiL:function fiL(){},
fiY:function fiY(){},
fiI:function fiI(){},
fiJ:function fiJ(){},
fiZ:function fiZ(){},
fiH:function fiH(){},
V1:function V1(d){this.a=d},
aDa:function aDa(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dTA:function dTA(d,e){this.a=d
this.b=e},
dTJ:function dTJ(d){this.a=d},
dTK:function dTK(){},
dTL:function dTL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTM:function dTM(){},
dTz:function dTz(d){this.a=d},
dTy:function dTy(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
dTw:function dTw(){},
dTI:function dTI(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTD:function dTD(d){this.a=d},
dTE:function dTE(){},
dTG:function dTG(d,e,f){this.a=d
this.b=e
this.c=f},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTC:function dTC(){},
dTO:function dTO(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTN:function dTN(){},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTS:function dTS(d){this.a=d},
axh:function axh(d,e){this.c=d
this.a=e},
b90:function b90(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cD0:function cD0(d){this.a=d},
b9_:function b9_(d,e){this.b=d
this.a=e},
cD_:function cD_(d){this.a=d},
axA:function axA(){},
axB:function axB(){},
aJA:function aJA(){},
bx7:function bx7(){},
icR(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bQ(A.wo,23)
$.W()
b8=C.N()
b8.r=A.aw.gp(0)
b9.ae(A.wo,25,b8)
b8=C.N()
b8.saq(D.ek6.av(0,v))
b9.ae(A.wo,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
r.d=A.bQ
b9.bF(A.wo,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.ae(A.wo,3,r)
c2.$5(b9,w?"V":"A",D.ebU,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ebn,A.aw,9.5)
return!0
case"fan":b8=C.bu(D.eQC,A.hI)
$.W()
s=C.N()
s.r=A.br.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aX(D.eRn,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.wp,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bv(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.c9(A.aHl,18,10)
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.fX.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bm.gp(0)
b9.ae(D.wp,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cs.gp(0)
b9.ae(D.wp,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jm.gp(0)
b9.ae(D.wp,14,b8)
return!0
case"speaker":l=C.bu(D.aNg,A.uL)
$.W()
b8=C.N()
b8.saq(D.apc.av(0,new C.a8(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.ekt.av(0,C.bQ(A.cC,15)))
b9.ae(A.cC,14+k,b8)
b8=C.N()
b8.r=A.dt.gp(0)
b9.ae(A.cC,5,b8)
b8=C.N()
b8.r=A.bn.gp(0)
b9.ae(D.aHn,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bQ(D.e9q,6+u*6+A.k.E(b8,6))
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bu(D.eRf,A.uL)
$.W()
b8=C.N()
b8.saq(D.bZa.av(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bu(D.aNi,A.iz)
s=C.N()
s.r=A.hM.gp(0)
b9.aE(b8,s)
if(b7){i=new C.T(Date.now(),0,!1)
h=C.C2(i)<500?":":" "
g=A.a.aY(A.o.u(C.dk(i)),2,"0")
f=A.a.aY(A.o.u(C.h4(i)),2,"0")
b8=C.N()
b8.r=A.b_.j(0.12).gp(0)
b9.aX(D.aNi,b8)
c2.$5(b9,g+h+f,D.ebF,A.b_,21)}b8=C.N()
b8.r=A.cs.gp(0)
b9.ae(D.ebE,2.4,b8)
b8=C.N()
b8.r=A.cs.gp(0)
b9.ae(D.e9u,2.4,b8)
return!0
case"calculator":j=C.bu(D.eQW,A.hs)
$.W()
b8=C.N()
b8.saq(D.bYV.av(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bu(D.eQQ,A.hg)
s=C.N()
s.r=(b7?A.Xt:D.bk1).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ebm,A.Wj,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bu(new C.a8(q,s,q+6,r),A.SU)
$.W()
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=(d===3?A.cc:A.bN).gp(0)
n=p.H()
b8.drawRRect(C.eA(q),n)
n.delete()}return!0
case"phone":j=C.bu(D.eQN,A.hs)
$.W()
b8=C.N()
b8.r=L.mo.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.agK.gp(0)
b9.aE(j,b8)
a0=C.bu(D.eQE,A.hI)
if(b7){b8=C.N()
b8.saq(D.c_u.av(0,new C.a8(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.bv(b8.save())
b8.clipRRect(C.eA(a0),$.oP(),!0)
b8.translate(-12,-25)
E.Lg(b9,D.eWV,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bu(D.eQB,A.hg)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b_.gp(0)
b9.aX(new C.a8(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.eaE,A.c,6)}else{b8=C.N()
b8.r=D.vs.gp(0)
b9.aE(a0,b8)}b8=C.bu(D.eRx,D.ekC)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bu(D.eRe,A.qu)
$.W()
b8=C.N()
b8.saq(D.bZr.av(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QZ[a2]
s=a3<0?-4:4
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bQ
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bk(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=(a4?A.bc:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bQ(D.wp,8+u*6+A.k.E(s,6))
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.c=1.8
q.r=A.hm.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bu(D.eQV,A.hI)
s=$.W()
r=C.N()
r.r=A.e2.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.av.j(0.5*a5).gp(0)
b8.z=A.zi
b9.ae(A.wo,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cQ(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.ar(A.eu,D.bca,a5).gp(0)
b9.aQ(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bV.gp(0)
b9.aQ(a6,b8)
if(b7){b8=b9.a
J.bv(b8.save())
b8.translate(0,-2)
b9.jc(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bF(A.J,D.aHn,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bv(b8.save())
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
q.saq(D.bXv.av(0,D.eR7))
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
for(a2=0;a2<2;++a2){a3=F.ayp[a2]
s=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.aw.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bv(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.bN.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
q=-4+u*5
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
j.F(new C.cQ(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bE())
r=C.N()
r.saq(D.bYA.av(0,D.eQU))
b9.aQ(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e4.gp(0)
b9.aQ(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cQ(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.aw.gp(0)
b9.aQ(s,b8)
b8=C.N()
if(b7){s=C.ar(A.ct,A.tz,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e2
b8.r=s.gp(0)
b9.aX(D.eQT,b8)
if(b7){b8=C.N()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.lA
b9.ae(A.aHj,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aw.gp(0)
b9.ae(D.e8M,3,b8)
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
s.z=Z.HR
b9.ae(D.ebJ,24,s)}b8=C.bu(D.eRt,A.hI)
s=$.W()
r=C.N()
r.r=A.e2.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bQ
b9.bF(D.e9_,D.aHt,r)
r=C.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bQ
b9.bF(D.aHt,D.ebK,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k3).gp(0)
b9.aQ(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ae(D.ebL,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cQ(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.h7.gp(0)
b9.aQ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
b3.r=D.a2H[u].j(0.6).gp(0)
b3.z=A.Rz
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cQ(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
if(b2)o=D.a2H[u]
else{o=C.ar(D.a2H[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cB(p)).a,n)
n.delete()}return!0}return B.icP(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3z(d){var w=D.m5.h(0,d)
return(w==null?null:w.b)===D.zI},
ie0(d,e,f){return C.a5(d,!1).cm(C.uO(null,!1,!0,!0,new B.fPZ(e,f),A.eM,null,A.pX,new B.fQ_(),x.H))},
Jn:function Jn(d,e){this.a=d
this.b=e},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPZ:function fPZ(d,e){this.a=d
this.b=e},
fQ_:function fQ_(){},
UJ:function UJ(d,e,f){this.c=d
this.d=e
this.a=f},
bjs:function bjs(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dPw:function dPw(d){this.a=d},
dPv:function dPv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPt:function dPt(){},
dPu:function dPu(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPk:function dPk(d){this.a=d},
dPj:function dPj(d){this.a=d},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d){this.a=d},
dPl:function dPl(d){this.a=d},
bvb:function bvb(d,e,f){this.b=d
this.c=e
this.a=f},
aeF:function aeF(d,e,f){this.b=d
this.c=e
this.a=f},
aLm:function aLm(){},
fnV(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zZ,A.L,w,w),A.aB,C.bU(A.fJ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wt,w,u,v,w,w,A.n),w,w,w,A.eA,A.a9,w,w,w),w,w,w)},
h3H(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.ez()
b4.dl(b5*977+13)
w=A.o.D(1+A.o.am(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aw(5)
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
h=2+b4.aw(4)
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
a9=C.ev([A.d.gal(g)],u)
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
B:{a7=b4.aw(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aWx(b0,a9,C.U(u,t),q,N.nz,w+v)}return new B.aWx(C.aX(u),C.ev([25],u),C.U(u,t),21,N.nz,1)},
htj(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.am(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.boo(p,o)},
hox(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aWx:function aWx(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vx:function Vx(d){this.a=d},
bk1:function bk1(d,e,f,g,h,i,j,k,l){var _=this
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
ecA:function ecA(d){this.a=d},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecB:function ecB(){},
ecq:function ecq(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecs:function ecs(d){this.a=d},
ect:function ect(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
bh1:function bh1(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
diK:function diK(d,e,f){this.a=d
this.b=e
this.c=f},
diN:function diN(d,e,f){this.a=d
this.b=e
this.c=f},
diL:function diL(d){this.a=d},
diM:function diM(d){this.a=d},
Vz:function Vz(d){this.a=d},
aDP:function aDP(d,e,f,g,h,i,j,k,l){var _=this
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
ecT:function ecT(d){this.a=d},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecU:function ecU(){},
ecE:function ecE(){},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecK:function ecK(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecR:function ecR(d){this.a=d},
bhg:function bhg(d,e){this.b=d
this.a=e},
aLO:function aLO(){},
bxc:function bxc(){},
aLP:function aLP(){},
bxd:function bxd(){},
a0P(d,e,f,g,h,i){return new B.bu0(d,e,f,g,h,i)},
bu0:function bu0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjK:function fjK(){},
fjL:function fjL(){},
fjM:function fjM(){},
fjN:function fjN(){},
fjO:function fjO(){},
fjP:function fjP(){},
fjQ:function fjQ(){},
fjR:function fjR(){},
a8j:function a8j(d){this.a=d},
cgN:function cgN(d){this.a=d},
cgO:function cgO(){},
cgM:function cgM(d,e){this.a=d
this.b=e},
cgL:function cgL(d){this.a=d},
Wq:function Wq(d){this.a=d},
aEG:function aEG(d,e,f,g,h,i,j,k){var _=this
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
eM8:function eM8(d){this.a=d},
eM4:function eM4(d){this.a=d},
eM3:function eM3(d,e){this.a=d
this.b=e},
eM6:function eM6(d,e){this.a=d
this.b=e},
eM5:function eM5(d,e){this.a=d
this.b=e},
eM7:function eM7(d){this.a=d},
bvn:function bvn(d,e,f){this.b=d
this.c=e
this.a=f},
V8:function V8(d){this.a=d},
bjB:function bjB(d,e,f,g,h,i){var _=this
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
dVO:function dVO(){},
dVP:function dVP(){},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVM:function dVM(d){this.a=d},
dVK:function dVK(d){this.a=d},
dVN:function dVN(d){this.a=d},
bqb:function bqb(d,e,f){this.b=d
this.c=e
this.a=f},
Uj:function Uj(d){this.a=d},
bjd:function bjd(d,e,f,g,h,i){var _=this
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
dGF:function dGF(){},
dGG:function dGG(){},
dGA:function dGA(){},
dGD:function dGD(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGE:function dGE(d){this.a=d},
dGB:function dGB(d){this.a=d},
aI4:function aI4(d,e,f){this.a=d
this.b=e
this.c=f},
V_:function V_(d){this.a=d},
bjv:function bjv(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dT_:function dT_(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dTb:function dTb(d){this.a=d},
dSY:function dSY(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTd:function dTd(d){this.a=d},
dSX:function dSX(d){this.a=d},
blx:function blx(d,e,f){this.b=d
this.c=e
this.a=f},
VM:function VM(d){this.a=d},
aDZ:function aDZ(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eif:function eif(d,e){this.a=d
this.b=e},
eig:function eig(d,e,f){this.a=d
this.b=e
this.c=f},
eie:function eie(d,e,f){this.a=d
this.b=e
this.c=f},
eih:function eih(d){this.a=d},
eid:function eid(d){this.a=d},
eil:function eil(d){this.a=d},
eik:function eik(d,e){this.a=d
this.b=e},
eij:function eij(d,e){this.a=d
this.b=e},
eim:function eim(d,e){this.a=d
this.b=e},
eii:function eii(d,e){this.a=d
this.b=e},
ein:function ein(d){this.a=d},
VZ:function VZ(d){this.a=d},
aEk:function aEk(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
et5:function et5(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d){this.a=d},
etc:function etc(d){this.a=d},
etd:function etd(d,e){this.a=d
this.b=e},
Wj:function Wj(d){this.a=d},
bkJ:function bkJ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eHq:function eHq(){},
eHz:function eHz(){},
eHv:function eHv(d){this.a=d},
eHu:function eHu(){},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHy:function eHy(d){this.a=d},
eHr:function eHr(d){this.a=d},
VK:function VK(d){this.a=d},
bkc:function bkc(d,e,f,g,h,i,j,k){var _=this
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
egV:function egV(){},
egW:function egW(){},
egO:function egO(d){this.a=d},
egN:function egN(d){this.a=d},
egP:function egP(d){this.a=d},
egM:function egM(d){this.a=d},
egQ:function egQ(d){this.a=d},
egL:function egL(d){this.a=d},
egR:function egR(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egS:function egS(d){this.a=d},
egJ:function egJ(d,e){this.a=d
this.b=e},
egT:function egT(d){this.a=d},
egI:function egI(d,e){this.a=d
this.b=e},
egU:function egU(d){this.a=d},
egH:function egH(d,e){this.a=d
this.b=e},
bdd:function bdd(d,e,f){this.c=d
this.d=e
this.a=f},
aL9:function aL9(){},
bx3:function bx3(){},
aLs:function aLs(){},
bx8:function bx8(){},
aLX:function aLX(){},
bxi:function bxi(){},
aMq:function aMq(){},
bxu:function bxu(){},
jL(d,e,f,g,h,i){return new B.b6N(h,d,f,g,i,e,null)},
ht8(d,e,f,g){var w=null
return C.cb(w,w,!0,w,new B.fTO(g,e,f),d,w,!0,!0,x.H)},
hH(d,e,f,g,h,i,j){return new B.avI(f,j,i,h,g,d,e,null)},
qW(d,e,f){return B.ieQ(d,e,f)},
ieQ(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qW=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m3(2),$async$qW)
case 7:q=h
w=8
return C.b(q.hx(A.h2),$async$qW)
case 8:p=h
if(p==null){w=1
break}o=J.eX(A.dD.gaP(p))
w=9
return C.b(B.crJ(C.a([B.hhY(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qW)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.U(D.aPo)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qW,v)},
ll(d,e,f,g){var w,v=$.arQ
if(v==="music")return E.dH(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dH(261.63*v,w,f,0,g,"sine")}return B.w6(v,e,f,g)},
w6(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
BQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.arQ
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.ll(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dG(4,"count",x.S),C.S(e).c),v=p.$ti,p=new C.bR(p,p.gM(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.ll(d,s,f,g)
else C.bM(new C.ba(1000*q),new B.cgJ(d,s,f,g),u)}},
a8i(d,e){var w="sine",v="noise"
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
zG(d){return B.hKa(d)},
hKa(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zG=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$zG)
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
return C.i($async$zG,v)},
w3(d,e){return B.hKb(d,e)},
hKb(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$w3=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$w3)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$w3)
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
return C.i($async$w3,v)},
b6N:function b6N(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(d,e){this.a=d
this.b=e},
fTO:function fTO(d,e,f){this.a=d
this.b=e
this.c=f},
fTN:function fTN(d){this.a=d},
dB:function dB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ctE:function ctE(d){this.a=d},
eV:function eV(d,e,f){this.c=d
this.d=e
this.a=f},
avI:function avI(d,e,f,g,h,i,j,k){var _=this
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
ctD:function ctD(d){this.a=d},
Fk:function Fk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctK:function ctK(d){this.a=d},
mF:function mF(){},
ctF:function ctF(d,e,f){this.a=d
this.b=e
this.c=f},
ctH:function ctH(d){this.a=d},
ctG:function ctG(){},
cgJ:function cgJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwj(){var w=0,v=C.j(x.cL),u,t
var $async$cwj=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qX().bgg("assets/data/world110.json"),$async$cwj)
case 3:u=t.hOK(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cwj,v)},
hOK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aL(0,a2,null)),a1=C.a([],x.F)
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
g=C.aQn(g,f,"",0)
f=C.dU(J.q(p.h(r,"c"),0))
p=C.dU(J.q(p.h(r,"c"),1))
e=new B.ab6(o,m,l,j,i,h,g,f,p,q)
e.byE(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.ab7(a1)},
fxh(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GT(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
ab6:function ab6(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab7:function ab7(d){this.a=d},
v8:function v8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Pa:function Pa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ya:function ya(d,e,f){this.a=d
this.b=e
this.c=f},
P9:function P9(d){this.a=0
this.b=d
this.c=0},
hQD(d,e,f){return $.hQE.ca(0,d+"|"+C.v(e)+"|"+f.l(),new B.det(d,e,f))},
Vf:function Vf(d){this.a=d},
aDl:function aDl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dYw:function dYw(d){this.a=d},
dYv:function dYv(d,e){this.a=d
this.b=e},
dXZ:function dXZ(d){this.a=d},
dXX:function dXX(d){this.a=d},
dXY:function dXY(d,e,f){this.a=d
this.b=e
this.c=f},
dXW:function dXW(d){this.a=d},
dXV:function dXV(){},
dXU:function dXU(d){this.a=d},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYi:function dYi(d,e){this.a=d
this.b=e},
dY6:function dY6(d){this.a=d},
dY7:function dY7(d){this.a=d},
dY5:function dY5(d){this.a=d},
dY8:function dY8(d){this.a=d},
dY_:function dY_(d,e){this.a=d
this.b=e},
dY0:function dY0(d){this.a=d},
dYj:function dYj(d,e){this.a=d
this.b=e},
dY4:function dY4(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dYg:function dYg(d){this.a=d},
dYo:function dYo(d,e){this.a=d
this.b=e},
dYf:function dYf(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYd:function dYd(d,e){this.a=d
this.b=e},
dYr:function dYr(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYs:function dYs(d){this.a=d},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYt:function dYt(d){this.a=d},
dYa:function dYa(d){this.a=d},
dYu:function dYu(d){this.a=d},
dY9:function dY9(d){this.a=d},
dYk:function dYk(d){this.a=d},
dY3:function dY3(d){this.a=d},
dYl:function dYl(d){this.a=d},
dY2:function dY2(d){this.a=d},
dYm:function dYm(d){this.a=d},
dY1:function dY1(d){this.a=d},
dXT:function dXT(){},
dXS:function dXS(d){this.a=d},
dXR:function dXR(d){this.a=d},
bfs:function bfs(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
det:function det(d,e,f){this.a=d
this.b=e
this.c=f},
deu:function deu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLy:function aLy(){},
aLz:function aLz(){},
afc(d,e,f,g,h){return new B.btW(d,e,f,g,h)},
btW:function btW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjD:function fjD(){},
fjE:function fjE(){},
fjF:function fjF(){},
fjG:function fjG(){},
fjH:function fjH(){},
fjI:function fjI(){},
fjJ:function fjJ(){},
Wm:function Wm(d){this.a=d},
bkN:function bkN(){this.d=$
this.c=this.a=null},
eIj:function eIj(d){this.a=d},
eIk:function eIk(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIl:function eIl(){},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIg:function eIg(d){this.a=d},
hR4(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.ez()
v.dl(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.ez()
v.dl(w+900)
u.push(2.2+v.aj())}return new B.bkz(new C.cs(null,x.A),new B.P9(A.cH),A.J,A.ax,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hR6(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hR5(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hj9(d,e,f){return $.hRH.ca(0,d+"|"+C.v(e)+"|"+f.l(),new B.f1H(d,e,f))},
W7:function W7(d){this.a=d},
bkz:function bkz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
eAm:function eAm(d,e){this.a=d
this.b=e},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAy:function eAy(d,e){this.a=d
this.b=e},
eAu:function eAu(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAw:function eAw(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAA:function eAA(d,e){this.a=d
this.b=e},
eAB:function eAB(d){this.a=d},
eAs:function eAs(d,e){this.a=d
this.b=e},
eAC:function eAC(d){this.a=d},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAD:function eAD(d){this.a=d},
eAq:function eAq(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAp:function eAp(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAo:function eAo(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAn:function eAn(d){this.a=d},
eAl:function eAl(){},
eAk:function eAk(){},
eAj:function eAj(d){this.a=d},
eAi:function eAi(d){this.a=d},
brY:function brY(d,e){this.b=d
this.a=e},
f1H:function f1H(d,e,f){this.a=d
this.b=e
this.c=f},
f1I:function f1I(){},
f1J:function f1J(){},
Vg:function Vg(d){this.a=d},
aDm:function aDm(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dYA:function dYA(){},
dZ2:function dZ2(){},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYR:function dYR(d){this.a=d},
dYO:function dYO(d){this.a=d},
dYV:function dYV(d){this.a=d},
dYN:function dYN(d){this.a=d},
dYW:function dYW(d){this.a=d},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYX:function dYX(d){this.a=d},
dYY:function dYY(d){this.a=d},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d){this.a=d},
dYK:function dYK(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d){this.a=d},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYE:function dYE(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYz:function dYz(d){this.a=d},
dYy:function dYy(){},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYx:function dYx(d){this.a=d},
baE:function baE(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
W_:function W_(d){this.a=d},
bkw:function bkw(d,e,f,g,h,i,j){var _=this
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
etg:function etg(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
brw:function brw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f_R:function f_R(d){this.a=d},
aLA:function aLA(){},
bxa:function bxa(){},
aM8:function aM8(){},
bxo:function bxo(){},
aMb:function aMb(){},
bxq:function bxq(){},
hR2(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.ez()
v.dl(w)
v=v.aj()
u=new C.ez()
u.dl(w+500)
s.push(new C.u(v,u.aj()))}return new B.bjc(new C.cs(null,x.A),new B.P9(A.cH),t,A.ax,s,$,A.bx,0,C.a([],x.X),null,null)},
PE:function PE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Uh:function Uh(d){this.a=d},
bjc:function bjc(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dG6:function dG6(){},
dFV:function dFV(){},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFX:function dFX(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
dFT:function dFT(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dFS:function dFS(d,e){this.a=d
this.b=e},
dG_:function dG_(d){this.a=d},
dFR:function dFR(d){this.a=d},
dG0:function dG0(d){this.a=d},
dFQ:function dFQ(d){this.a=d},
dG1:function dG1(d){this.a=d},
dFP:function dFP(d){this.a=d},
dG2:function dG2(d){this.a=d},
dFO:function dFO(d){this.a=d},
dG3:function dG3(d){this.a=d},
dFN:function dFN(d){this.a=d},
dG4:function dG4(d){this.a=d},
dFM:function dFM(d){this.a=d},
dG5:function dG5(d){this.a=d},
dFL:function dFL(d){this.a=d},
dFY:function dFY(d){this.a=d},
dFK:function dFK(d){this.a=d},
ba2:function ba2(d,e){this.b=d
this.a=e},
aeR:function aeR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vc:function Vc(d){this.a=d},
bjE:function bjE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
dX7:function dX7(d){this.a=d},
dWY:function dWY(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dX_:function dX_(d){this.a=d},
dWW:function dWW(d){this.a=d},
dX0:function dX0(d){this.a=d},
dWV:function dWV(d,e){this.a=d
this.b=e},
dX1:function dX1(d){this.a=d},
dWU:function dWU(d,e){this.a=d
this.b=e},
dX2:function dX2(d){this.a=d},
dWT:function dWT(d,e){this.a=d
this.b=e},
dX3:function dX3(d){this.a=d},
dWS:function dWS(d,e){this.a=d
this.b=e},
dX4:function dX4(d){this.a=d},
dWR:function dWR(d){this.a=d},
dX5:function dX5(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dX6:function dX6(d){this.a=d},
dWP:function dWP(d){this.a=d},
bfi:function bfi(d,e){this.b=d
this.a=e},
dbB:function dbB(d){this.a=d},
VW:function VW(d){this.a=d},
bkv:function bkv(d,e,f,g,h,i,j,k){var _=this
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
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d){this.a=d},
esu:function esu(d){this.a=d},
esx:function esx(d){this.a=d},
est:function est(d){this.a=d},
esy:function esy(d){this.a=d},
ess:function ess(d){this.a=d},
esz:function esz(d){this.a=d},
esr:function esr(d){this.a=d},
esA:function esA(d){this.a=d},
esq:function esq(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
esp:function esp(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
esD:function esD(d){this.a=d},
esn:function esn(d,e){this.a=d
this.b=e},
bqM:function bqM(d,e){this.b=d
this.a=e},
aL6:function aL6(){},
bx2:function bx2(){},
aLv:function aLv(){},
bx9:function bx9(){},
aM7:function aM7(){},
bxn:function bxn(){},
hhY(d,e,f){var w,v
C.fX(0,0,!1)
w=new C.ln(e,f,$,null)
v=w.bIV(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i3M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.G(["k",p.b,"x",C.o2(A.k.ab(p.c,4)),"y",C.o2(A.k.ab(p.d,4)),"v",p.e,"l",C.o2(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.o2(A.k.ab(p.as,3)),"ch",p.at,"vc",C.o2(A.k.ab(p.z,3)),"s",C.o2(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fq(l)
return A.S.ao(C.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
idd(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
a3=new B.tA(a2,d,a0,a1)
a3.aq2(a2,d,a0,a1)
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
if(m!=null&&l!=null)a6.aky(m,A.k.N(C.dU(J.q(p,1))),l,A.k.N(C.dU(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cw:h)
while(h.C()){j=h.gR(h)
J.cf(k,A.k.N(C.dU(j)))}return new C.bop(i,k)}catch(a4){return a5}},
fze(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fze=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fze)
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
return C.i($async$fze,v)},
bDN(d){return B.ieM(d)},
ieM(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDN=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bDN)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bDN)
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
return C.i($async$bDN,v)},
crJ(d,e){var w=0,v=C.j(x.g7),u
var $async$crJ=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h6p().xf(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$crJ,v)}},D,T,H,U,A_,A7,A8,Al,X
J=c[1]
C=c[0]
A=c[2]
A0=c[145]
A9=c[144]
A1=c[137]
A2=c[134]
I=c[126]
A3=c[123]
P=c[121]
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
B.ajV.prototype={}
B.Vs.prototype={
S(){return new B.bk_(C.U(x.N,x.i),new C.at(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mD(0,null,null))}}
B.bk_.prototype={
gW9(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nz(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nz=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
p.bQ(0,A.c9)
t.m(new B.e9A(t))
t.a.toString
p=t.gW9()
w=3
return C.b(B.bzn(B.hSV(q,B.i3D(p),o,t.ay)),$async$Nz)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i52(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e9B(t,o,r))
$.aW.x1$.push(new B.e9C(t))
case 1:return C.h(u,v)}})
return C.i($async$Nz,v)},
Y9(d){return this.c_2(d)},
aVO(){return this.Y9(null)},
c_2(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Y9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
t.f.saV(0,o)
t.m(new B.e9N(t))
E.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bzn(B.hZI(o)),$async$Y9)
case 3:r=n.a=m.icT(f)
p.b=""
if(r!=null&&!B.i3E(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i53(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajV(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e9O(p,t))
t.c4p(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Y9,v)},
c4p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gW9()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e9J(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e9H(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e9K(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e9L(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e9M(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.n(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eYq,A.be,C.E(C.d(m.Q,l,l,l,l,l,l,A.Dz,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fn7
else{w=C.E(C.d(k.a,l,l,l,l,l,l,A.Ub,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f89,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vA,C.d(u,l,l,l,l,l,l,D.faP,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.DK,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.fde,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i8,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.Mo,new C.ci(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.mc,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bg,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aR(12,12)
s=new C.aR(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.TT,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bn(t,t,t,t),l,l,A.n),l,l,l,l,A.fN,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fiy,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bn(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.ed2)
j=C.cd(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.x(C.a([C.aia(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.btk,A.el,l,l,1/0),A.bd,A.io),C.E(B.h8d(m.gW9(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dB("Ask about it",i,new B.e9R(m),l,A.bu,l),new B.dB("Invent something new",!i,new B.e9S(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dhd[p]
i.push(new B.dB(n,!1,new B.e9T(m,n),l,A.bu,l))}f.push(new B.eV(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.d0k[p]
i.push(new B.dB(r,!1,new B.e9U(m,r),l,A.bu,l))}f.push(new B.eV(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.U,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.a0),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kM,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e9V(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a4,l,A.an,l,A.aQ6,l,l),1)
h=m.at
v=h&&j?D.bI9:A.dY
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e9W(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jL(A.bu,A.he,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.G8.prototype={}
B.uV.prototype={}
B.VV.prototype={
S(){return new B.aEe(A.J,A.J,A.ax,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEe.prototype={
gaX2(){var w,v,u,t=this,s=D.Hk[t.cx],r=D.R_[t.cy],q=D.Cu[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awJ[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.epH())},
ga2r(){return D.Hk[this.cx].d/this.gaX2()},
gaOh(){return 0.1*(D.Hk[this.cx].d/0.9)/D.R_[this.cy].d},
Z(){this.a1()
this.ll()
B.zG("rocket_lander").bC(new B.eq0(this),x.P)},
c4y(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cH.aj()*0.6
w.f=new C.u(0.15+A.cH.aj()*0.7,0.08)
w.r=new C.u((A.cH.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lD(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.eq1())
return}w=D.rt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2r()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOh())}if(m.dy){t=m.r
v=v.aB(0,t.aH(0,t.gcn()*6*D.ayH[m.d]))}t=m.r=m.r.ad(0,v.aH(0,d))
s=m.f=m.f.ad(0,t.aH(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cu[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.w3("rocket_lander",C.G(["unlocked",t],x.N,x.z))
B.BQ("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2r()/(D.rt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2r()/(D.rt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dH(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bk(m.CW*20),2)===0)E.dH(90,"",70,0,0.12,"noise")
m.m(new B.eq2())},
afK(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.faj,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dB(e[w].a,f.$1(w),new B.epJ(this,g,w),v,h,v))
return new C.D(A.eK,C.x(C.a([u,A.cV,C.bU(A.bA,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bE5(d){var w,v,u,t,s=this,r=null,q=s.ga2r()/(D.rt[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOh()),o=D.ayH[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.U5,r,r,r),A.R,s.afK("ENGINE: "+D.Hk[s.cx].b,D.Hk,new B.epy(s),new B.epz(s),A.ct),s.afK("FUEL TANK: "+D.R_[s.cy].b,D.R_,new B.epA(s),new B.epB(s),A.b_),s.afK("LANDING GEAR: "+D.Cu[s.db].b,D.Cu,new B.epC(s),new B.epD(s),A.aO),s.afK("EXTRAS (tap to add)",D.awJ,new B.epE(s),new B.epF(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fFl)
o=(q?A.b_:A.c8).j(0.14)
w=C.n(12)
v=A.k.ab(s.gaX2(),2)
u=A.k.ab(s.ga2r()/(D.rt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cu[s.db].d*100)+".",r,r,r,r,r,r,D.faX,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i8,A.bS,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.nq,"Launch",new B.epG(s),A.b_,r),r))
return C.av(C.p(r,C.cd(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bP,r,r,A.ag),A.f,r,A.lK,new C.o(D.bjB,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aYa(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.n(18),t=C.I(A.aZ,A.q,1)
return C.oj(A.jL,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.epv(e),new B.epw(e),w,w,w,w,new B.epx(e))},
aY9(d,e,f){return this.aYa(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.epU(s,D.rt[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rt[w].a:"\ud83d\udd12"
o.push(new B.dB(v,s.d===w,new B.epV(s,w),r,D.rt[w].c,r))}v=C.a([s.aY9(F.amA,new B.epW(s),s.y),A.be,s.aYa(A.vW,new B.epX(s),s.Q,130),A.be,s.aY9(A.O7,new B.epY(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aO:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.be,C.aB(r,C.p(r,D.bMo,A.f,r,r,new C.o(u,r,C.I(A.aZ,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.epZ(s),r,r,r,r,r,r,!1,A.a5)],p))}return B.jL(A.ct,A.he,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eV(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgZ.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rt[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.ar(D.bmp,a0,0.25)
a1.toString
d.saq(new C.a9(A.b1,A.b5,A.x,C.a([F.aeb,a1],x.O),l,l).av(0,new C.a8(0,0,g,f)))
a2.aX(new C.a8(0,0,g,f),d)
w=new C.ez()
w.dl(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aO(e.r,A.ao,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.ez()
q.dl(2)
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
d.r=C.ar(a0,A.w,0.6).gp(0)
a2.aQ(r,d)
o=C.c9(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bu(o,A.iz)
a0=C.N()
a0.r=A.bc.gp(0)
a2.aE(d,a0)
a0=C.bu(o.ct(2),A.qu)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.bv(g.save())
g.translate(d.a*i,d.b*h)
a2.jc(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.ct.j(0.6).gp(0)
k.z=Z.HR
a2.ae(A.J,34,k)
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
m.F(new C.cQ(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cQ(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.saq(D.bZ3.av(0,D.eQL))
a2.aQ(m,i)
i=C.N()
i.r=A.aO.gp(0)
a2.ae(D.wp,5,i)
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
B.aM5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxm.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw8()}}
B.aS3.prototype={}
B.a35.prototype={}
B.ba5.prototype={}
B.Ui.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ev(["skin"],x.N),o=new Float32Array(0)
return new B.aCE(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Ky,D.Ky,A.ax,A.cH,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCE.prototype={
Z(){var w=this
w.a1()
w.ll()
w.as=new B.c1O(w.gccW())
new B.dGy(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.bv9()},
ccX(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f0(0,C.G(["t","init","data",$.hic],x.N,x.z))
v.at=!0
v.ax=""
v.ayH()
break
case"pick":v.m(new B.dGa(v,d))
break
case"shot":v.ahC(C.v(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.v(w.h(d,"text")))
break}},
ayH(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.auF[q.CW]
v=new B.dGb()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fq(u)
t=x.N
s=C.G(["layers",u,"skinMode",q.ch,"tone","#"+C.v(v.$1(w.b))+C.v(v.$1(w.c))+C.v(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f0(0,u)}},
ahC(d){return this.ctV(d)},
ctV(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahC=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aK(A.a.b6(d,A.a.cH(d,",")+1))
w=6
return C.b(B.crJ(C.a([B.hhY(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahC)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(D.aPo)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahC,v)},
ay8(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lD(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bk(w)!==A.k.bk(v.ok)){B.a8i("kick",0.4)
v.a54(170,new B.dGz())}v.ok=w
return},
ahr(d){var w,v,u,t,s=this
s.m(new B.dGc(s,d))
if(d==null){s.fx=D.Ky
s.dy=1
w=s.as
if(w!=null)w.f0(0,C.G(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.S(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dGd(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayH()
w=s.as
if(w!=null)w.f0(0,C.G(["t","focus","group",d],x.N,x.z))
s.go=0
s.cwl(t,d)
return},
cwl(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a8i("kick",0.8)
this.a54(260,new B.dGe())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a54(w*70,new B.dGf(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dH(110,"",360,0.7,0.3,"saw")
else B.w6("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dH(210+e.length*4,"",80,0.6,0.55,"tri")
E.dH(2400,"",20,0,0.3,v)
break
case"muscle":E.dH(70,"",150,1,0.6,"sine")
break
case"vessel":E.dH(300,"",380,0.4,0.22,v)
B.a8i("kick",0.3)
break
default:B.w6("organic",2+A.o.E(e.length,6),200,0.4)}},
cAX(d){this.m(new B.dGh(this,d))},
aYs(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.ay8(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bVF(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dG7(u,w,d))
v=x.t
B.BQ("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a54(1100,new B.dG8(u))
return}if(d==null){if(u.cx!=null)u.ahr(null)
return}u.ahr(d)},
bZm(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bU.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f6G,u,u,u)}else if(d==null||e==null)w=D.fkF
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hK,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.DK,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bOP,u,u,u,new B.dG9(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Wp,u,s,t,u,u,A.n),u,u,u,u,I.aid,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dsc.h(0,g)
i.ayH()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d9S
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.ay8(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mH,h,h,h,new B.dGo(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DV(h,A.qs,q)}else q=A.kI
q=C.x(C.a([C.E(q,1),new C.D(F.YW,i.bZm(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d1R[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dB(l,n,new B.dGp(i,o),o.c,A.bU,h))}p=C.a([new B.eV(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dB(k,k===i.cx,new B.dGq(i,k),h,A.aM,h))}p.push(new B.eV(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hH(A.c8,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dGr(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Fk(D.auF[j],i.CW===j,new B.dGs(i,j),!1,h))
p.push(new B.eV(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dB("Spin",n,new B.dGt(i),D.alp,A.aO,h),new B.fj(A.ka,"Reset view",new B.dGu(i),A.c,h),new B.dB(l,m,new B.dGv(i),A.GB,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dB("Heartbeat sound",i.k4,new B.dGw(i),A.ob,A.c8,h))
p.push(new B.eV(v,h,h))
return B.jL(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aL7.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aL8.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv8()}}
B.c1O.prototype={
kI(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hof
$.hof=v+1
u="ngmy-body-viewer-"+v
$.yO()
$.qi().pY(u,new B.c1P(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fO(v,"message",new B.c1Q(t),!1,x.gA)
t.b=u},
f0(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bzk(w.contentWindow)
if(w!=null)J.fVw(w,e,"*")}}catch(v){}}}
B.yc.prototype={}
B.Cq.prototype={}
B.nq.prototype={}
B.baO.prototype={}
B.Uo.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.aCH(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),A.ax,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCH.prototype={
Z(){var w=this
w.a1()
w.ll()
w.acs()
$.aW.x1$.push(new B.dIJ(w))},
acs(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acs=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$acs)
case 6:q=e.tg("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dIn(s,r))
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
return C.i($async$acs,v)},
acM(d){return this.c29(d)},
c29(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acM=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$acM)
case 6:r=f
q=s.cx
p=C.a3(q).k("jV<co.E,m>")
q=C.C(new C.jV(q,new B.dIq(),p),p.k("J.E"))
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
return C.i($async$acM,v)},
awR(d,e,f,g){var w="c"+this.y++,v=new B.Cq(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.awR(0,e,f,0)},
abO(d,e){var w
if(D.zg.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tF(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSl(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fX$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dS(m,D.cMM[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tF(p,0)&&n.tF(p,1)
break
case"or":p=q.a
o=n.tF(p,0)||n.tF(p,1)
break
case"xor":p=q.a
o=n.tF(p,0)!==n.tF(p,1)
break
case"nand":p=q.a
o=!(n.tF(p,0)&&n.tF(p,1))
break
case"nor":p=q.a
o=!(n.tF(p,0)||n.tF(p,1))
break
case"not":o=!n.tF(q.a,0)
break
default:o=n.tF(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bOj(){return this.aSl(null)},
lD(d){var w,v,u,t,s,r,q,p,o,n=this
n.bOj()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gaf(0),v=new C.f2(w,new B.dIK()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fX$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fX$)
o=s+1
E.dH(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awS(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
at2(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new B.dIl(w,d))
return}w.m(new B.dIm(w,d))},
cwD(d){this.m(new B.dIr(this,d,$.bE8()[d]))},
c6P(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bE8()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dIg(),t),s)
A.d.b_(r,new B.dIh())
q=C.C(new C.a_(new C.bc(v,u),new B.dIi(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dIj(d,w))
return}u=d.r
p=C.dQ(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSl(0)
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
d.m(new B.dIk(d,o,a0))},
axF(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfk(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
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
bZf(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zg.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abO(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bN9(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abO(p,o)
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
c6R(d){var w,v,u,t=this,s=t.axF(d)
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
t.m(new B.dIs())
return}u=t.bN9(d)
if(u!=null)t.m(new B.dIt(t,u))
else t.m(new B.dIu(t))},
avE(d){return this.c19(d)},
c19(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avE=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axF(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dIp(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avE,v)},
bzW(d){if(this.x.A(0,A.ax))return
this.m(new B.dIf(this,d,A.cH))
C.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bE8()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.ob:O.ro,A.ad,h,h,h,21),h,h,h,new B.dID(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.cl.j(0.14)
r=C.I(A.cl.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f5R,h,h,h),C.d(w.b,h,h,h,h,h,h,D.fe9,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lV,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b_:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fvI,i.gc6O(),C.bo(A.cl,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.My,D.btY,h,h,1/0))}u.push(C.E(C.cq(new B.dIE(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.zg.h(0,r).a+": "+D.zg.h(0,r).e,h,h,h,h,h,h,A.rY,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.ahX,A.bS,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.zg.gdM(D.zg),s=s.gaf(s);s.C();){r=s.gR(s)
q=new C.aR(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.q,-1)
t.push(C.aB(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.y(p.a,h,D.aRf,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bn(q,q,q,q),h,h,A.n),h,h,h,A.fC,Aj.Mu,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dIF(i,r),h,h,h,h,h,h,!1,A.a5))}s=C.a([],g)
for(l=0;l<4;++l){k=D.dec[l]
s.push(new B.fj(A.O8,k.b,new B.dIG(i,k),A.cl,h))}s.push(new B.fj(D.ym,"Clear",new B.dIH(i),A.c8,h))
r=C.a([],g)
for(j=0;q=$.bE8(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e9:A.lt
o=i.ay
n=i.cx.t(0,j)?A.b_:A.bH
r.push(new B.dB(q.a,o===j,new B.dII(i,j),p,n,h))}return B.jL(A.cl,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eV(t,"PARTS",h),new B.eV(s,"TRY",h),new B.eV(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.bb6.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.acK.gp(0)
a7.aX(new C.a8(0,0,0+a5,0+a6),w)
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
g=a5.abO(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pH(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.mK
s=l.H()
l=d.gbI().a.snapshot()
w.drawPath((d.e=new C.cB(l)).a,s)
s.delete()}l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=3.2
l.d=A.bQ
l.r=(f?A.dQ:A.br).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cB(d.gbI().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Io)
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
a7.aQ(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c6Q(a7,a5.d)},
c6Q(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zg.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.c9(a0.c,64,64)
s=C.bu(t,A.le)
r=w.cy===v
q=s.eR(A.cC)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lA
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bS(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bQ(a0.c,52)))
d.ae(q,52,p)}q=s.eR(A.cJ)
p=C.N()
o=e.c
p.r=C.ar(o,A.w,0.65).gp(0)
d.aE(q,p)
n=u?0.35:0
q=C.N()
p=C.ar(o,A.c,0.1+n)
p.toString
m=C.ar(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a9(A.b1,A.b5,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.uh:D.bIF}else l=e.b
k=B.h00(C.jK(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aB(0,new C.u(p/2,q.gbc(q)/2)))
j=B.h00(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.h00(f,9,u?A.dQ:A.bV,g,g,A.u)
i.a3(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZ5(d,w.abO(a0,h),o)
this.aZ5(d,a0.c.ad(0,D.Io),o)},
aZ5(d,e,f){var w
$.W()
w=C.N()
w.r=D.acK.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
au(d){return!0}}
B.aLd.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bve()}}
B.Nn.prototype={
S(){return new B.aCY(C.mD(0,null,null))}}
B.Kq.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.AF.prototype={}
B.aCY.prototype={
c6V(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dOz(w,e))},
c02(){var w=this
w.e.q()
w.e=C.mD(w.f,null,null)
w.m(new B.dOy(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.os(t,C.c6(v,A.c_,t?new B.br6(w.e,w.gc6U(w),new B.dOA(d),v):new B.aHd(u,new C.cy(u.b,x.gj)),v,!1,!1,v,!1),new B.dOB(w,u),x.C)}}
B.bsG.prototype={}
B.br6.prototype={
aZ6(d,e){var w=null
return new C.D(I.Zo,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f6q,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nr,v,v,v,w.e,v,v,v,v,v,v),A.rS,D.bzP],u),A.m,v,A.e,A.j,0,v,v),s=w.aZ6("STUDIOS","Play, make things, and keep what you make")
$.bE9()
return C.bm(!0,C.x(C.a([new C.D(D.byS,t,v),C.E(C.vD(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.mb(s,v),new C.nU(A.hT,C.OX(new C.ov(new B.f_o(d),22,!0,!0,!0,0,C.t1(),v),D.aPd),v),new C.mb(w.aZ6("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nU(D.bu4,C.OX(new C.ov(new B.f_p(w),6,!0,!0,!0,0,C.t1(),v),D.aPd),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeW.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.ar(F.n9,p,0.3)
m.toString
w=x.O
m=C.a([m,D.afy],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.ar(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a9(A.az,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a9(A.az,A.aC,A.x,m,r,r),A.n),r,A.FT,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.adO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.ar(F.n9,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.afy],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aR(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aHM,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bn(n,n,n,n),l,new C.a9(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.ar(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.C8,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a9(A.az,A.aC,A.x,f,k,k),A.n),k,A.FT,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.Q4.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Sm,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bW(0,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,C.a([p,o,n,i],m),D.djy,j),A.n),A.bf),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.b1,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bW(0,C.b3(j,j,j,new B.bs4(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f81,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ty)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fO,C.B(C.a([s,A.eq,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bW(0,C.e1(C.en(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bW(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.Z,j,A.aa,A.f,C.a([h,C.bW(0,C.c0(C.by(q,new C.an(A.Z,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.bs4.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a8(r,-10,s,w)
u=d.a
J.bv(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.jc(0,0.35)
t=C.c9(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a9(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aX(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.brA.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bhH,D.aeK],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.kg,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c0(C.by(q,C.b3(C.av(C.X(A.jt,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9N(p,w),A.ax),A.aq),new C.o(w,w,s,v,r,new C.a9(A.az,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9N.prototype={
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
q.delete()}u=e.ee(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
au(d){return!1}}
B.aHd.prototype={
S(){return new B.aHe(new C.cs(null,x.A),null,null)}}
B.aHe.prototype={
gu0(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,D.brr,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZu(){var w,v=this,u=v.e
if(u===$){w=C.bk(null,A.fM,null,1,null,v)
w.fh(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawT(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6S(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVx(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWf(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6O(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a1()
var w=this.gu0()
w.dd()
w.dW$.L(0,this.gcwm())},
cwn(){var w,v,u,t,s,r,q,p=this,o=p.gu0().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawT().a){case 0:w=D.nv
break
case 1:w=D.up
break
case 2:w=D.a2L
break
case 3:w=D.nv
break
case 4:w=D.d6P
break
case 5:w=D.up
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aaq)r=0.09
else r=s===D.aar?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.c0C[v]
B.ll("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BQ("bell",D.c9m,1400,0.35)}}p.ax=o},
q(){this.gu0().q()
this.gZu().q()
this.bx6()},
aga(){var w=this
w.gu0().cVH(0,C.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.f_4(w))},
chm(){this.gu0().bR(0)
this.m(new B.f_3(this))},
adM(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adM=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaWf(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.at(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb6O(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.at(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaVx(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bT(F.n9,null,new B.f_2(u,l,m,o),t,!0,!0,!0,A.lC,!1,!1,x.H),$async$adM)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adM,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawT(),f=i.a.c,e=f.b,d=i.gc6S(),a0=new B.AF(g,e,f.c,d,i.gaVx(),i.gaWf(),i.gb6O())
f=C.ar(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.ob:O.ro,A.ad,h,h,h,21),h,h,h,new B.f_c(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bSk,h,h,h,i.gc6T(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mH,h,h,h,new B.f_d(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c7(i.gZu(),new B.f_e(i,a0),h),C.cq(new B.f_f(i,a0))],g)
u=i.as
t=u?i.gchl():i.gcjG()
u=u?D.bHV:A.ub
s=C.ar(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c7(i.gu0(),new B.f_g(i,a1,a0),h),1),C.aH(h,h,h,h,D.bOF,h,h,h,new B.f_h(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hH(r,u+"x","Speed",2.5,0.4,new B.f_i(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dgO[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dB(p.b,o===p.a,new B.f_j(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c0Y[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aZ
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aB(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a9(A.az,A.aC,A.x,n,h,h),A.a6),h,l,h,D.ahH,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.f_k(i,n),h,h,h,h,h,h,!1,A.a5))}return B.jL(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ex(new C.an(A.Z,h,A.b2,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eV(u,"STYLE",h),new B.eV(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
bz7(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nv[r]
p=A.k.D((1-A.ev.az(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
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
e.push(new C.cL(0,r*118,0,f,f,f,new C.kJ(q,new C.iJ(n,f,A.b1,!0,f,new B.Q4(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nv[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nv[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mm(new B.bqJ(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new C.a7(a2,358,new C.an(A.Z,f,A.aa,A.f,e,f),f)},
bPN(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.up[r]
p=A.pT.az(0,A.k.D((a0-q)/(q+0.17-q),0,1))
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
g=new B.Q4(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fF(3.141592653589793)
k=new C.iJ(k,f,A.A,!0,f,new B.brA(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kJ(q,new C.iJ(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.Z,f,A.aa,A.f,e,f),f)},
cBt(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2L[w]
l.push(A.cu.az(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bW(0,C.b3(n,n,n,new B.bua(d.d,l,D.awm,m,B.br5(e,0.4,0.62),f,B.br5(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.h0w(g,w)
q=D.awm[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kJ(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.h0w(g,w)
r=D.a2L[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kJ(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.Uf,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.Z,n,A.aa,A.f,v,n),n)},
bFm(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.az(0,B.br5(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bW(0,C.av(C.dX(C.b3(f,f,f,new B.bqa(A.d.gI(a1),B.br5(a3,0,0.2),a4,f),new C.as(a5*0.95,70)),D.e8E),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dA.az(0,A.k.D((o-0.7)/0.3,0,1))
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
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kJ(k*(0.45+0.55*o),C.dX(new C.iJ(l,f,A.A,!0,f,new B.Q4(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new B.eZW())
A.d.v(a0,new C.M(w,new B.eZX(),x.fR))
return new C.a7(a5,330,new C.an(A.Z,f,A.aa,A.f,a0,f),f)},
bEw(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.up[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lL.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.up[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ayn[q]
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
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kJ(m,C.dX(new C.iJ(k,e,A.A,!0,e,new B.Q4(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.up[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dX(new C.mm(new B.bas(w,f,q,e),e,new C.as(r,212),e,e),new C.u(0,D.ayn[q])),e),e))}return new C.a7(a4,330,new C.an(A.Z,e,A.aa,A.f,a0,e),e)},
bC2(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e8I],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nv[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.az(0,p)
q=D.ayw[r]
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
f.mO(l*h+D.daP[r]*o)
f.fF(l*0.9)
h=0.55+0.45*o
f.jR(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kJ(g,C.dX(new C.iJ(f,a3,A.A,!0,a3,new B.Q4(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nv[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayw[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dX(new C.mm(new B.bqc(A.d.gI(w),a2,a3),a3,new C.as(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.Z,a3,A.aa,A.f,a6,a3),a3)}}
B.bqJ.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a8(w-v,0,w+v,e.b)
q=C.bu(u,A.hg)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mK
d.aE(q,t)
t=C.bu(u,A.hg)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bqa.prototype={
a3(d,e){var w,v,u=this.c,t=C.c9(e.ee(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HR
d.hL(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hL(t,u)
u=t.ct(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hL(u,v)},
au(d){return!0}}
B.bas.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ee(A.J),f=this.c,e=A.cu.az(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.ez()
t.dl(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
au(d){return!0}}
B.bqc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ee(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.c9(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.bua.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a8(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a9(A.b1,A.b5,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aX(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bF(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.h0w(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lA
a4=a3.H()
t.drawOval(C.c_(new C.a8(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a8(d,a1,a3,a1+a0)
a6=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a7=C.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.saq(new C.a9(A.b1,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
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
a6=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a6.r=C.ar(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbI().a.snapshot()
t.drawPath((a8.e=new C.cB(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.r=C.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbI().a.snapshot()
t.drawPath((b0.e=new C.cB(a2)).a,a4)
a4.delete()
b1=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c_(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cB(a8.gbI().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cB(b0.gbI().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bk(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bu(new C.a8(b7,a7,b7+r,b5),A.hg)
$.W()
b9=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.eA(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a8(d,a1,a3,a1+28)
J.bv(t.save())
t.clipRect(C.c_(a5),$.na()[1],!0)
$.W()
a1=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.saq(new C.a9(A.b1,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMX.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
B.a0j.prototype={
a5(){return"_Role."+this.b}}
B.q7.prototype={}
B.qN.prototype={}
B.Cu.prototype={}
B.Zh.prototype={}
B.aeM.prototype={}
B.a0w.prototype={
gY(d){return this.d}}
B.CE.prototype={}
B.abF.prototype={}
B.abW.prototype={}
B.adS.prototype={}
B.bgW.prototype={
a2A(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dH(d,"",e,g,h,f)},
b7Q(d,e,f){return this.a2A(d,e,f,0,0.55)},
aBs(d,e,f,g){return this.a2A(d,e,f,0,g)},
b7R(d,e,f,g){return this.a2A(d,e,f,g,0.55)},
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
ajQ(d,e,f,g){var w="n"+this.ay++,v=new B.qN(w,e,f,g)
this.a.n(0,w,v)
this.aU()
return v},
B6(d,e,f){return this.ajQ(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new B.dir(e))
A.d.br(w.c,new B.dis(e))
w.aU()},
bbF(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mJ.h(0,v.b).c===D.wY)return!1
w=this.b
if(A.d.b4(w,new B.dio(d,e)))return!1
w.push(new B.Cu(d,e))
this.aU()
return!0},
c__(d){var w
if(d.b==="beat")return D.c9w[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aEX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayM[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.CE(u,t,j.ax,90))
w.push(new B.CE(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0w(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7Q(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.ar(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0w(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aw(700),j.ax))}j.f.push(new B.CE(u,t,j.ax,120))
j.aBs(120,200,"noise",0.5)
j.b7Q(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.CE(u,t,j.ax,230))
w.push(new B.CE(u,t,j.ax+160,160))
w.push(new B.CE(u,t,j.ax+320,100))
j.b7R(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abF(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7R(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abW(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aH(0,260+w.aj()*200)),t,j.ax))
j.a2A(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2A(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adS(u,D.aya[v],t,j.ax))
j.aBs(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBs(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c5C[A.o.E(w,3)]
for(k=1;k<=3;++k)j.crs(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.f2(w,new B.dip(d));v.C();)j.azY(w.gR(0),j.ax+D.chX[A.o.E(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cyV[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.f2(w,new B.diq(d));v.C();)j.azY(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zg(w,0,v-700)},
crs(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Zh(e,"~"+d))},
azY(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeM(d.a,v,e,w))
u.push(new B.Zh(w,v))},
a6g(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEX(r)
u.n(0,r,o.ax+o.c__(s))}}w=o.c
v=C.S(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dit(o),v),v.k("J.E"))
if(q.length!==0){A.d.br(w,new B.diu(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b6(u,1)
for(u=A.d.gaf(v),r=new C.f2(u,new B.div(p));r.C();)o.azY(u.gR(0),o.ax)}else o.aEX(u)}}A.d.br(o.d,new B.diw(o))
A.d.br(o.e,new B.dix(o))
A.d.br(o.f,new B.diy(o))
A.d.br(o.w,new B.diz(o))
A.d.br(o.x,new B.diA(o))
A.d.br(o.r,new B.diB(o))
o.aU()},
v8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.S.ao(C.G(["nodes",m,"edges",v],u,x.ew),null)},
Tu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aL(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.v(J.q(v,"k"))
if(!D.mJ.ai(0,u))continue
t=C.v(J.q(v,"id"))
m.n(0,t,new B.qN(t,u,new C.u(C.dU(J.q(v,"x"))*k.cy.a,C.dU(J.q(v,"y"))*k.cy.b),A.k.N(C.dU(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.v(J.q(r,0))
p=C.v(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cu(q,p))}k.aU()
return!0}catch(l){return!1}},
cQp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qN(n,r,new C.u(q*p.a,o*p.b),s))
l.aU()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbF(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FU.prototype={}
B.VU.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aEd(new B.bgW(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),A.cH,A.K,A.ax,$.aw()),A.bx,A.J,A.J,A.U,null,null)}}
B.aEd.prototype={
acl(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acl=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$acl)
case 6:q=n.jO(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ep1(s))
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
return C.i($async$acl,v)},
a9g(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a9g=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eoR(s))
u=3
w=6
return C.b(C.ay(),$async$a9g)
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
return C.i($async$a9g,v)},
bLl(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.eoT())+"|"+A.d.cJ(o,0,new B.eoU())
if(v===p.ch)return p.CW
u=new B.eoX()
t=x.s
s=C.a([],t)
r=new B.eoY(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.f2(n,new B.eoV());w.C();){q=n.gR(0)
if(!A.d.b4(o,new B.eoW(q)))s.push(C.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dG(5,"count",x.S),x.N).dJ(0)},
Z(){var w,v=this
v.a1()
v.acl()
v.d.db=v.ay
w=v.qB(new B.epr(v))
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
w.bw6()},
abS(d){return this.bZs(d)},
bZs(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abS=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$abS)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Tu(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWH(A.d.gI(D.axC))
if(s.c!=null)s.m(new B.ep0())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abS,v)},
aWH(d){this.d.cQp(0,d.c,d.d)
this.Eb()},
Eb(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lU,new B.eoN(this))},
awU(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfl(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
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
bZg(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mJ.h(0,r.b).c===D.wY)continue
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
c6Y(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hog(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
czb(d){var w,v,u,t,s,r,q=this,p=q.awU(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eY()
u=v.b
if(u==="button"){w.aEX(p)
return}if(q.r)return
t=D.mJ.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qJ)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aU()
q.Eb()
return}if(q.r)return
r=q.c6Y(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aU()
q.Eb()}},
cgE(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cfl(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awU(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
cgF(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aU()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aU()}}},
b0P(){var w,v,u=this
if(u.z!=null){w=u.bZg(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbF(v,w)}else v=!1
if(v){C.jX()
u.Eb()}u.z=null
u.d.aU()}else if(u.x!=null){if(u.at)u.Eb()
u.x=null}},
acy(d){return this.c1a(d)},
c1a(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$acy=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awU(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bT(F.n9,null,new B.ep3(q),p,!0,!0,!1,A.lC,!1,!1,x.y),$async$acy)
case 3:if(f===!0){r.W(0,s)
t.Eb()}case 1:return C.h(u,v)}})
return C.i($async$acy,v)},
c6W(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B6(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eY()
this.Eb()},
agi(){var w=0,v=C.j(x.H),u=this,t,s
var $async$agi=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bT(F.n9,null,new B.ep5(),s,!0,!0,!0,A.lC,!1,!1,x.es),$async$agi)
case 2:t=e
if(t!=null)u.aWH(t)
return C.h(null,v)}})
return C.i($async$agi,v)},
adN(d){var w=0,v=C.j(x.H),u=this,t
var $async$adN=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.eoQ(),t,null,!0,!0,x.y),$async$adN)
case 2:if(f===!0){u.d.a8(0)
u.Eb()}return C.h(null,v)}})
return C.i($async$adN,v)},
B(d){var w=this,v=null,u=C.a([C.aia(w.r?new C.bI(A.a3,v,v,new C.D(A.FU,C.hn(D.bME,D.foD,new B.epp(w),v),v),v):w.c6Z(),A.bd,A.iK),C.E(C.cq(new B.epq(w)),1)],x.p)
if(!w.r)u.push(w.ctY())
return C.c6(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bH3(){var w=null,v=new B.eoS(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bW(0,C.en(C.av(C.p(w,C.cd(C.x(C.a([D.fzH,A.au,D.fHe,A.aB,v.$4(A.p0,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.C5,A.cl,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.ls,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alC,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fGy,new C.bI(A.a8,w,w,C.bK(!1,D.fwS,w,w,!0,w,w,this.gbGX(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.VN,new C.o(F.n9,w,s,t,w,w,A.n),w,w,w,A.fD,A8.aiW,w,w,w),w,w,w),u,!0),0,0,0)},
c6Z(){var w=this,v=null,u=C.aH(v,v,v,v,S.nr,v,v,v,new B.epb(w),v,v,v,v,v,v),t=w.a8J(A.NX,"How it works",new B.epc(w),!0),s=w.ay?A.ob:O.ro
return new C.D(D.by7,C.B(C.a([u,D.bzB,t,w.a8J(s,"Sound",new B.epd(w),!0),w.a8J(A.dY,"Ideas",w.gcko(),!0),w.a8J(D.ym,"Clear",w.gc6X(w),!0),w.aNA(A.iO,"Show",new B.epe(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNA(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ac.tW,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hx(new C.D(new C.R(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8J(d,e,f,g){return this.aNA(d,e,f,g,!1)},
ctY(){var w=null,v=new B.ep7(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wY),v.$2("CHANGE",D.E4),v.$2("REACT",D.qJ)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AS,w,new C.bO(new C.az(u,1,A.q,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.btm,w,w,w)},
ctZ(d){var w,v,u,t,s=null,r=D.mJ.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fC,C.aB(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aRf,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a9(A.b1,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hC,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ep6(this,d),s,s,s,s,s,s,!1,A.a5),s)}}
B.bgX.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bv(b7.save())
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
b8.aX(new C.a8(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
a2=D.mJ.h(0,k.b).d
a3=D.mJ.h(0,j.b).d
e=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
e.b=A.ae
e.c=3
e.d=A.bQ
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rB(new C.u(h,i),new C.u(f,g))
e.saq(new C.a9(A.a3,A.a8,A.x,d,b4,b4).av(0,new C.a8(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbI().a.snapshot()
b7.drawPath((a0.e=new C.cB(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hog(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=A.c.j(0.35).gp(0)
h.z=G.mK
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Io)
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
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.az(0,v)
$.W()
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
h=C.kv(o,i,A.dV.az(0,v))
h.toString
i=C.kv(o,i,A.dV.az(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.c=5
o.d=A.bQ
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rB(i,h)
o.saq(new C.a9(A.a3,A.a8,A.x,f,b4,b4).av(0,new C.a8(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.jx
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jx
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i.saq(new C.bS(P.pv,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bQ(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgY(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cgc(b8,b5.d,b6)
b7.restore()},
cgc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mJ.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.c9(e.c,64,64)
t=C.bu(u,A.iy)
s=t.eR(A.cC)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lA
d.aE(s,r)
if(v>0){s=t.ct(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zi
d.aE(s,r)}s=t.eR(A.cJ)
r=C.N()
q=h.d
r.r=C.ar(q,A.w,0.65).gp(0)
d.aE(s,r)
r=C.N()
s=C.ar(q,A.c,0.18+0.4*v)
s.toString
p=C.ar(q,A.w,0.35)
p.toString
r.saq(new C.a9(A.b1,A.b5,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgY(C.jK(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aB(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bgY(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.aya[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qJ){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.ayM[A.o.E(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bgY(m,9.5,A.aA,j,j,A.O)
l.a3(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgY(m,9.5,A.aA,j,j,A.O)
l.a3(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wY)k.b1E(d,e.c.aB(0,D.Io),q)
k.b1E(d,e.c.ad(0,D.Io),q)},
b1E(d,e,f){var w
$.W()
w=C.N()
w.r=A.c_.gp(0)
d.ae(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
au(d){return!0}}
B.aM3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.blw.prototype={}
B.PW.prototype={
gY(d){return this.d}}
B.W8.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bkA(new C.cs(null,x.A),w,v,A.cH,A.bx,D.F6,null,null)}}
B.bkA.prototype={
b_m(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bk((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.ax0[A.o.E(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":B.ll("synth",u,420,0.3)
break
case"rainbow":B.ll("bell",u,700,0.35)
break
case"stars":B.ll("pluck",u+12,400,0.4)
break
case"sparks":E.dH(2400+t.r.aw(2000),"",60,0,0.18,"noise")
break
default:E.dH(110+t.r.aw(60),"",140,0,0.22,"noise")}},
c9Y(d){return this.b_m(d,!1)},
Z(){var w,v=this
v.a1()
w=v.qB(new B.eB6(v))
w.hG(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bwf()},
gb18(){var w=this.Q
return w<0?new H.mS(1,A.k.E(this.y*0.18,360),0.85,1).iM():D.R2[w]},
aS0(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb18(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.ar(A.bH,A.av,v.aj())
m.toString
j.push(new B.PW(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aw(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.ar(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PW(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aw(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PW(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aZ8(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb18()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.blw(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aS0(e)
r.b_m(e,!0)
r.m(new B.eAI())},
aZ7(){this.ax=null
this.m(new B.eAH())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mH,n,n,n,new B.eAR(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bs_(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b6I)
k=C.aB(A.c7,new C.an(A.Z,n,A.b2,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eAS(o),new B.eAT(o),new B.eAX(o),n,n,n,n,n,n,n,n,n,new B.eAY(o),new B.eAZ(o),n,n,n,!1,A.a5)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cX8[w]
j.push(new B.dB(v.b,o.z===v.a,new B.eB_(o,v),v.c,A.bU,n))}u=C.a([new B.Fk(A.c,o.Q<0,new B.eB0(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Fk(D.R2[t],o.Q===t,new B.eB1(o,t),!1,n))
s=o.as
s=B.hH(A.bU,A.o.u(A.k.V(s)),"Size",36,4,new B.eB2(o),s)
r=o.ch
q=r?A.ob:O.ro
q=C.a([new B.dB("Sound",r,new B.eB3(o),q,A.bU,n),new B.fj(A.rn,"Undo",new B.eAU(o),A.c,n),new B.fj(D.ym,"Clear",new B.eAV(o),A.c8,n)],m)
for(w=0;w<4;++w){p=D.dcu[w]
q.push(new B.Fk(p,o.at.A(0,p),new B.eAW(o,p),!1,n))}return B.jL(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ex(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eV(j,"BRUSH",n),new B.eV(u,"COLOUR",n),s,new B.eV(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.bs_.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.aX(new C.a8(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.S(q),m=p.k("np<1>"),l=new C.np(q,1,a5,m),l.zN(q,1,a5,p.c),l=new C.bR(l,l.gM(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bB(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.W()
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.d=A.bQ
q.e=A.fG
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cB(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.d=A.bQ
q.e=A.fG
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cB(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.d=A.bQ
q.e=A.fG
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cB(n.gbI().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mS(1,A.o.E(i*5,360),0.85,1).iM()
o=q[i-1]
m=q[i]
$.W()
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.c=p
l.d=A.bQ
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
a4.c7_(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rx
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c7_(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
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
p.z=A.jx
d.aQ(n,p)
p=C.N()
p.r=h.gp(0)
d.aQ(n,p)},
au(d){return!0}}
B.Wk.prototype={
S(){return new B.aEt(new C.cs(null,x.A),new C.at(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aEt.prototype={
gIU(){var w,v=this,u=v.e
if(u===$){w=C.bk(null,A.tN,null,1,null,v)
w.cM(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a1()
var w=this.gIU()
w.dd()
w.dW$.L(0,this.gbYo())},
bYp(){var w,v,u,t,s,r,q,p=this,o=p.gIU().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m9:new C.mc(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dH(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dH(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.ll(s,D.avY[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIU().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bwl()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.mc(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.R2[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mH,j,j,j,new B.eHG(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.ayb[k.y]
s=C.by(t,C.c0(C.av(C.c7(k.gIU(),new B.eHH(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.U,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DJ,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eHI(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hv,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cyH[r]
i.push(new B.dB(q.b,k.r===q.a,new B.eHJ(k,q),j,A.bH,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Fk(D.R2[o],k.w===o,new B.eHK(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ob:O.ro
l=C.a([new B.dB(m,n,new B.eHL(k),l,A.bH,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Fk(D.ayb[o][0],k.y===o,new B.eHM(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mD,"Replay",new B.eHN(k),A.c,j))
m=k.x
return B.jL(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ex(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.P,new B.eV(i,"MOVE",j),new B.eV(p,"COLOUR",j),new B.eV(l,"SOUND",j),new B.eV(n,"BACK",j),B.hH(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new B.eHO(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c0c(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bk(g*1.6*f)?1:0
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
p.push(new C.cS(h,A.J,30*v))
p.push(new C.cS(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bk(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b7
else w=u?A.bU:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lL.az(0,t)
w=h
m=t
break
case"rainbow":w=new H.mS(1,A.k.E(g*360+e*40,360),0.75,1).iM()
A.d.a8(p)
p.push(new C.cS(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dX(C.ef(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aMc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aMi.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.a_O.prototype={}
B.VR.prototype={
S(){var w=C.a([],x.aS)
return new B.aE5(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE5.prototype={
gadO(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b2o(){return new H.mS(1,this.f.aj()*360,0.6,1).iM()},
arl(d,e,f,g){var w=this,v=w.gadO().ad(0,new C.u(Math.cos(e),Math.sin(e)).aH(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_O(v,new C.u(-t,s).aH(0,r).aH(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b2o(),C.a([],x.g)))},
bGn(d,e,f){return this.arl(d,e,f,!1)},
bGm(d,e){return this.arl(d,e,1,!1)},
cwh(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bGm(40+w*u/5,v.aj()*3.141592653589793*2)},
bHi(){var w=this.r
this.bGn(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
Z(){this.a1()
this.ll()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.ax))return
w=a2.e
v=w.length
if(v===0&&a2.fX$<300)return
u=a2.gadO()
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
B.ll("bell",D.avY[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.elx(u),C.S(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dH(70,"",300,0.6,0.8,"sine")
A.d.br(w,new B.ely(a2,u))},
ckh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadO()
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
gaWk(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aB(0,w).aH(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mH,r,r,r,new B.ell(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.elm(s)),n=s.w
n=B.hH(A.ct,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.eln(s),n)
w=s.x
w=B.hH(A.ct,A.k.ab(w,1)+"x","Time",3,0.2,new B.elp(s),w)
v=s.Q
v=B.hH(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.elq(s),v)
u=s.ax
t=u?A.ob:O.ro
return B.jL(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eV(C.a([new B.dB("Sound",u,new B.elr(s),t,A.ct,r),new B.dB("Trails",s.z,new B.els(s),A.Od,A.ct,r),new B.dB("Planets pull each other",s.y,new B.elt(s),A.yJ,A.ct,r)],q),r,r),new B.eV(C.a([new B.fj(A.mC,"Solar system",new B.elu(s),A.ct,r),new B.fj(A.nq,"Comet",new B.elv(s),A.c,r),new B.fj(A.mz,"Cluster",new B.elw(s),A.c,r),new B.fj(D.ym,"Clear",new B.elo(s),A.c8,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.blj.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.X6.gp(0)
d.aX(new C.a8(0,0,0+g,0+f),w)
v=new C.ez()
v.dl(5)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.c.j(0.25+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.N()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).av(0,C.bQ(g,f)))
d.ae(g,f,t)
t=C.N()
t.saq(D.ekq.av(0,C.bQ(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j.c=2.2*l+0.4
j.d=A.bQ
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mK
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j=C.ar(k,A.w,0.5)
j.toString
q.saq(new C.bS(P.pv,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bQ(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jm.gp(0)
d.bF(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abM.prototype={}
B.Wf.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bkF(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkF.prototype={
Z(){this.a1()
this.ll()},
c70(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abM(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.c70()
w=a2.f
A.d.br(w,new B.eH7(a2))
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
A.d.br(w,new B.eH8(a2))
if(w.length<a1&&a2.ch)B.ll("bell",12+a2.r.aw(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fX$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fX$
B.ll("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mH,l,l,l,new B.eGX(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eGY(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cYK[w]
h.push(new B.dB(v.b,m.at===v.a,new B.eGZ(m,v),v.c,A.b_,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cII[w]
u.push(new B.dB(t.b,m.ax===t.a,new B.eH_(m,t),l,A.b_,l))}s=m.ch
r=s?A.ob:O.ro
r=C.a([new B.dB("Sound",s,new B.eH0(m),r,A.b_,l)],k)
s=m.x
s=B.hH(A.b_,A.o.u(A.k.V(s)),"How many",150,15,new B.eH1(m),s)
q=B.hH(A.b_,l,"Together",2.5,0,new B.eH2(m),m.y)
p=B.hH(A.b_,l,"Apart",2.5,0,new B.eH3(m),m.z)
o=B.hH(A.b_,l,"Same way",2.5,0,new B.eH4(m),m.Q)
n=m.as
return B.jL(A.b_,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eV(h,"TOUCH",l),new B.eV(u,"LOOK",l),new B.eV(r,l,l),s,q,p,o,B.hH(A.b_,A.o.u(A.k.V(n)),"Speed",280,50,new B.eH5(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsS.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aez,D.bmP],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,U.LO],v):C.a([D.bjF,D.baE],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a9(A.b1,A.b5,A.x,w,a3,a3).av(0,new C.a8(0,0,v,u)))
a5.aX(new C.a8(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.bH.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=A.bH.j(0.25).gp(0)
n.z=G.mK
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mS(1,j,0.7,1).iM()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
f.r=h.j(0.35*g).gp(0)
f.z=A.jx
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
f.r=A.c.j(g).gp(0)
o=f.H()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bv(s.save())
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
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=h.gp(0)
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cB(j)).a,o)
o.delete()
s.restore()
break
default:J.bv(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cQ(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cQ(0,6,9,0))
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
f=C.ar(h,A.cA,0.6)
f.toString
j.saq(new C.a9(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).av(0,D.eQH))
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cB(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c8
else a1=v==="scare"?A.bH:A.b_
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
au(d){return!0}}
B.ace.prototype={}
B.Um.prototype={
S(){var w=C.a([],x.bi)
return new B.aCG(w,A.cH,A.ax,C.U(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCG.prototype={
gIe(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacP(){return 54-8*(this.r/100)},
Z(){this.a1()
this.ll()
B.zG("chain_burst").bC(new B.dHS(this),x.P)},
aZa(){return B.w3("chain_burst",C.G(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
aA1(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.ace(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mS(1,u.aj()*360,0.6,1).iM()))}},
Zv(d){var w,v=this
if(d==null)return 0
w=(v.fX$-d)/1000
if(w<0.4)return v.gacP()*A.dV.az(0,w/0.4)
if(w<1.1)return v.gacP()
if(w<1.5)return v.gacP()*(1-(w-1.1)/0.4)
return 0},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.ax)||!j.Q)return
w=j.d
if(w.length===0)j.aA1()
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
if(v!=null)n.push(new C.z(v,j.Zv(j.ax)))
for(v=A.d.gaf(w),s=new C.f2(v,new B.dHT());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zv(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
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
break}}}if(!(j.at!=null&&j.Zv(j.ax)>0||A.d.b4(w,new B.dHU(j)))&&j.fX$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gIe()){if(j.as>=j.gIe()*1.5)k=3
else k=j.as>=j.gIe()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BQ("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aZa()}else E.dH(120,"",300,0,0.3,"saw")}}},
aZ9(d){this.m(new B.dHI(this,d))
this.aZa()},
adP(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dHL(u),s,null,!0,!0,x.S),$async$adP)
case 2:t=e
if(t!=null)u.aZ9(t)
return C.h(null,v)}})
return C.i($async$adP,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gIe(),t=w.x.h(0,""+w.r)
return B.jL(A.bU,A.he,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dHP(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.rj,"Levels",w.gc71(),A.bU,v),new B.fj(A.ka,"New board",new B.dHQ(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auR(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQB,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYT(d,e){return this.auR(d,e,A.c)}}
B.baN.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.F6.gp(0)
d.aX(new C.a8(0,0,0+e.a,0+e.b),w)
v=new B.cMW(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=n.j(0.25).gp(0)
p.z=G.mK
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
au(d){return!0}}
B.aLb.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx4.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvc()}}
B.aM0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxl.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw3()}}
B.aMf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxt.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwi()}}
B.FQ.prototype={
gcPF(){return this.a.aB(0,this.b).gcn()>4}}
B.ad3.prototype={}
B.VL.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bke(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bke.prototype={
aPB(d){return new H.mS(1,A.o.E(d*29,360),0.6,1).iM()},
a_f(d){var w,v=D.CH.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bk(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dS(w,u)},
aSg(d){A.d.br(this.e,new B.eh0(this,d))},
csl(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aB(0,e).gcn()
return d.aB(0,e.ad(0,w.aH(0,A.k.D((d.aB(0,e).a*v+d.aB(0,e).b*u)/t,0,1)))).gcn()},
ayx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
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
k=g.a_f(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.FQ(p,r,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.a_f(h)
f.push(new B.FQ(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_f(h)
f.push(new B.FQ(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}}},
Z(){this.a1()
this.ll()},
c73(d,e){var w,v=this.fX$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.ll(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.ad3(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mS(1,v.aj()*360,0.5,1).iM()))}if(u>3)a2.as=0
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
if(a1<0){a2.c73(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.br(w,new B.ehp(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.ob:O.ro,A.ad,p,p,p,21),p,p,p,new B.ehe(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mH,p,p,p,new B.ehf(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.ehg(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d1f[w]
l.push(new B.dB(v.b,q.x===v.a,new B.ehh(q,v),v.c,A.b7,p))}u=C.a([],o)
for(t=J.aV(D.CH.geg(D.CH));t.C();){s=t.gR(t)
u.push(new B.dB(s,q.y===s,new B.ehi(q,s),p,A.b7,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.az7[w]
t.push(new B.dB(r.b,q.z===r.a,new B.ehj(q,r),p,A.b7,p))}s=q.Q
return B.jL(A.b7,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eV(l,"TOOL",p),new B.eV(u,"SCALE",p),new B.eV(t,"SOUND",p),B.hH(A.b7,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.ehk(q),s),new B.eV(C.a([new B.fj(D.bIu,"Stairs",new B.ehl(q),A.b7,p),new B.fj(Al.NW,"Pinball",new B.ehm(q),A.c,p),new B.fj(A.mz,"Random",new B.ehn(q),A.c,p),new B.fj(D.ym,"Clear",new B.eho(q),A.c8,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhR.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bZF.av(0,new C.a8(0,0,a0,a1)))
a2.aX(new C.a8(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.d=A.bQ
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jx
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.d=A.bQ
q.c=6
q.r=C.ar(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=i.j(0.25+h).gp(0)
p.z=A.jx
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p=C.ar(i,A.w,0.4)
p.toString
j.saq(new C.bS(P.pv,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bQ(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bQ
u.r=A.aA.gp(0)
a2.bF(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rA
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.saq(new C.bS(P.pv,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bQ(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adz.prototype={}
B.VQ.prototype={
S(){var w=C.a([],x.gB)
return new B.aE4(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE4.prototype={
gaZb(){var w=this.w
return new C.u(w.a/2,w.b/2)},
ayK(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azX(d){var w=D.CH.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dS(v,u)},
Z(){this.a1()
this.ll()},
aR0(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adz(w,A.k.E(t/v+u,1)))}},
lD(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.ax))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fX$
if(p.Q){r=p.z
s=p.azX(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.ll(r,s+12,q,0.55)}}}},
c74(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaZb()),e=f.gcn()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayK(v)-e)
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
m=h.ayK(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ekV(h,n).$0()
h.c.ei()
return}}h.m(new B.ekW(g,h,t))
if(h.Q)B.ll(h.z,h.azX(g.a)+12,700,0.5)
C.eY()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.ob:O.ro,A.ad,q,q,q,21),q,q,q,new B.el2(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mH,q,q,q,new B.el3(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.el4(r)),m=r.x
m=B.hH(A.bu,""+A.k.V(m),"Tempo",180,40,new B.el5(r),m)
w=C.a([],p)
for(v=J.aV(D.CH.geg(D.CH));v.C();){u=v.gR(v)
w.push(new B.dB(u,r.y===u,new B.el6(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.az7[t]
v.push(new B.dB(s.b,r.z===s.a,new B.el7(r,s),q,A.bu,q))}return B.jL(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eV(w,"SCALE",q),new B.eV(v,"SOUND",q),new B.eV(C.a([new B.fj(A.dY,"Demo",new B.el8(r),A.bu,q),new B.fj(A.mz,"Random",new B.el9(r),A.c,q),new B.fj(D.ym,"Clear",new B.ela(r),A.c8,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.blk.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.X6.gp(0)
a5.aX(new C.a8(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aB(0,new C.u(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a9(A.b5,A.b1,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a8(o,m,o+2,m+u)))
a5.bF(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mS(1,A.k.E(s.$1(l)*23,360),0.55,1).iM()
o=v.$1(l)
m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.djs[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.jM(new C.et(o,a4,a4,A.cP,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c4,new C.jv(1),a4,a4,a4,a4,A.c3,a4)
i.eh()
o=i.b.c
m=J.fVd(v.$1(l))
h=i.b.a.c
i.a3(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.saq(D.ek2.av(0,C.bQ(t,16)))
a5.ae(t,16,w)
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
if(a2>0){d=J.fVd(v.$1(a0))
a0=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=k.j(0.35).gp(0)
d.z=A.jx
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
d.saq(new C.bS(P.pv,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bQ(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxj.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw1()}}
B.aM_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxk.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw2()}}
B.tn.prototype={}
B.b9G.prototype={}
B.VO.prototype={
S(){var w=x.S
return new B.aE2(C.a([],x.aq),C.U(w,w),C.aX(w),D.eX_)}}
B.aE2.prototype={
Z(){this.a1()
B.zG("molecule_maker").bC(new B.ekp(this),x.P)},
ajn(d){var w={}
w.a=0
this.f.bM(0,new B.ekb(w,d))
return w.a},
gaZh(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.i5s(t,this.f,D.a3h[this.d])},
c7l(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.ez()
w.dl(t*7+3)
t=v.y
v.m(new B.ek5(v,e,t.a,w,t.b))
B.w6("pop",u.length,90,0.35)},
awY(d){return this.m(new B.ek6(this))},
aZi(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c7r(d){this.m(new B.eka(this,this.aZi(d)))},
coL(){var w=this.r
if(w==null)return
this.m(new B.ek9(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a3h[k.d],h=k.gaZh()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.wi.h(0,w[u].a).a-k.ajn(u)
w=i.c
w=w.gdM(w)
t=w.dA(w,new B.ekj(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b_:A.hm
r=x.p
s=C.x(C.a([new C.D(A.fN,B.ff2(w,s,h&&k.d<12?new B.fj(A.j4,"Next",new B.ekk(k),A.b_,j):j),j),C.E(C.cq(new B.ekl(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dB(p+D.a3h[u].b,k.d===u,new B.ekm(k,u),j,A.hm,j))}q=C.a([],r)
for(p=D.wi.gdM(D.wi),p=p.gaf(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dt:m.b
q.push(new B.dB(n+" \xb7 "+m.a,!1,new B.ekn(k,o),j,l,j))}return B.jL(A.hm,A.he,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eV(w,"GOAL",j),new B.eV(q,"ADD",j),new B.eV(C.a([new B.dB("Remove selected atom",!1,k.gcoK(),A.ea,A.c8,j),new B.dB("Clear all",!1,k.gc7m(k),A.ka,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.biy.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.hm.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bM(0,new B.dqx(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.wi.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bQ(j,26)
if(q===t){$.W()
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jx
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
g=l.b
f=C.ar(g,A.c,0.5)
f.toString
e=C.ar(g,A.w,0.5)
e.toString
h.saq(new C.bS(A.Kg,0.5,A.x,a3,0,C.a([f,g,e],r),I.ax9,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aw:A.c
d=new C.jM(new C.et(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c4,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
d.eh()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a3(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bc:A.aE
j=m.b
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.v(k)
a1=new C.jM(new C.et(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,A.nF),A.a4,A.c4,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
a1.eh()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a3(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.fN(a3,a3,a3,a3,D.f4L,A.a4,A.c4,a3,A.dL,A.c3)
d.eh()
d.a3(a4,new C.u((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.UL.prototype={
S(){var w=x.s
return new B.bju(C.a([],w),C.a([],w))}}
B.bju.prototype={
Z(){this.a1()
this.awe()
B.zG("dna_lab").bC(new B.dQD(this),x.P)},
gb3D(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a4o.h(0,w[u])
t.toString
s.push(t)}return A.d.h3(s)},
ga9h(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3D(),w,v))}return u},
awe(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.ez()
k.dl(l.e*31+l.d*7+C.C2(new C.T(Date.now(),0,!1)))
w=new B.dQs(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mJ(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a4o.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h3(r))}if(!A.d.b4(t,new B.dQr()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b1l()},
b1l(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h36(s.ga9h()[r])
v=J.dJ(D.CI.geg(D.CI),new B.dQt(w)).dJ(0)
u=new C.ez()
u.dl(r+s.e)
A.d.fp(v,u)
u=C.a([w],x.s)
A.d.v(u,C.d9(v,0,C.dG(3,"count",x.S),C.S(v).c))
t=new C.ez()
t.dl(s.e*3+r)
A.d.fp(u,t)
s.z=u},
aZg(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dpJ.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a4o.h(0,w.f[v])
u.toString
break A}u=B.h36(w.ga9h()[v])
break A}w.m(new B.dQq(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dQB(),e=new B.dQw(),d=h.d===2?h.gb3D():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mS,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new C.aR(10,10)
p=new C.az(t.length===s?A.bU:A.bE,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga9h()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.ci(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,D.bss,A.em,g,g,g))}v.push(C.bU(A.bA,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bU(A.bA,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Ah.O2,j<t.length?A.aA:A.bE,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.Mt,C.bU(A.bA,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mS,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b_.j(0.25):A.dn
q=new C.aR(12,12)
o=j<t.length
p=new C.az(o?A.b_:A.aZ,1,A.q,-1)
if(o){o=D.CI.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bV
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,g,A.el,g,g,g))}v.push(C.bU(A.bA,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bU(A.bA,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.ff2(u,t>=(h.d===2?3:9)?A.b_:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.ff2(u,A.bU,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.U8,g,g,g))
v=C.cd(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dB(D.d72[j],h.d===j,new B.dQx(h,j),g,A.bU,g))
u=C.a([new B.eV(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.ka,"New strand",new B.dQy(h),A.b_,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.CI.h(0,i)
q.toString
a0.push(new B.fj(D.a0f,q,new B.dQz(h,i),A.bU,g))}u.push(C.bU(A.bA,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aw2:D.cQR
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aR(14,14)
a0.push(C.aB(g,C.p(A.A,new C.y(k,g,D.f5_,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bn(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dQA(h,k),g,g,g,g,g,g,!1,A.a5))}u.push(C.B(a0,A.m,g,A.qj,A.j,0,g,g))}return B.jL(A.bU,A.he,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.V0.prototype={
S(){return new B.aD9(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aD9.prototype={
Z(){var w,v=this
v.a1()
w=v.qB(v.gc7n())
w.hG(0)
v.d!==$&&C.aP()
v.d=w
B.zG("ecosystem").bC(new B.dTs(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bvr()},
gaMV(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c7o(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaMV()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bk(w),5)===0)B.w3("ecosystem",C.G(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dTf())},
aav(d){this.m(new B.dTe(this,d))
B.w6("pop",3,120,0.4)},
c7q(){return this.m(new B.dTg(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.YV,B.ff2(r,t.gaMV()?A.b_:A.c8,s),s),C.E(new C.D(D.bt_,C.by(C.n(18),C.b3(s,s,s,new B.bdS(t.f,t.r,t.w,s),A.f6),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.fc5,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hH(A.b_,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dTk(t),w)
v=t.y
v=B.hH(A.bN,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dTl(t),v)
u=t.z
return B.jL(A.b_,A.he,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hH(A.ct,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dTm(t),u),new B.eV(C.a([new B.dB("Drought",!1,new B.dTn(t),A.yH,A.aM,s),new B.dB("Disease",!1,new B.dTo(t),D.bIm,A.bu,s),new B.dB("+ Foxes",!1,new B.dTp(t),s,A.ct,s),new B.dB("+ Rabbits",!1,new B.dTq(t),s,A.bN,s),new B.dB("Reset",!1,t.gc7p(),A.ka,A.aO,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdS.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bXE.av(0,new C.a8(0,0,d,a0)))
a1.aX(new C.a8(0,0,d,a0),w)
w=h.b
a0=C.ar(A.vg,A.bc,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.aX(new C.a8(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.ez()
r.dl(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=A.h7.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d5E(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a8(10,a0,e,u)
t=C.N()
t.r=D.bfr.gp(0)
a1.aX(new C.a8(0,f,d,f+g),t)
i=C.N()
i.r=A.dn.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d5G(h,j,a1)
g.$3(0,100,A.bc)
g.$3(1,120,A.bN)
g.$3(2,24,A.ct)
g=new B.d5F(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bc,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bN,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
au(d){return!0}}
B.aLp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aRT.prototype={
gv_(){return A.d.cJ(this.a,0,new B.bGe())}}
B.Ud.prototype={
S(){var w=x.S
return new B.bj8(B.i2u(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bj8.prototype={
gvY(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dE2())},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dEf(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zG("balance_lab").bC(new B.dEg(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bv4()},
czo(d){var w,v=this
v.m(new B.dE3(v,d))
B.w6("click",v.f[d],60,0.4)
if(v.gvY()===v.d[v.e].gv_()&&v.r.L(0,v.e)){B.w6("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.w3("balance_lab",C.G(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dE8(),C.S(k).k("M<1,m>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aG(k," + ")
if(o.gvY()===m[o.e].gv_())s="\u2696\ufe0f Balanced! "+m[o.e].gv_()+" = "+o.gvY()+". The torques are equal, so the seesaw stays level."
else s=o.gvY()>m[o.e].gv_()?"The right side is too strong ("+o.gvY()+" vs "+m[o.e].gv_()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gv_()+" vs "+o.gvY()+"). Add weight to the right, or place it further from the middle."
k=o.gvY()===m[o.e].gv_()?A.b_:A.aM
k=B.bAd(s,k,o.gvY()===m[o.e].gv_()&&o.e<m.length-1?new B.fj(A.j4,"Next",new B.dE9(o),A.b_,n):n)
w=C.E(C.cq(new B.dEa(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].gv_(),n,n,n,n,n,n,D.aRM,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.YV,k,n),w,new C.D(D.ai7,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvY(),n,n,n,n,n,n,D.aRM,A.dP,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dB(w+p,o.e===v,new B.dEb(o,v),n,A.aM,n))}return B.jL(A.aM,A.he,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eV(u,"LEVEL",n),new B.eV(C.a([new B.dB("Clear right side",!1,new B.dEc(o),A.ka,A.c8,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9S.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
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
d.aX(new C.a8(v,w,v+240,w+8),i)
i=d.a
J.bv(i.save())
i.translate(h,f)
d.jc(0,j.b)
u=g*5.8
t=C.bu(new C.a8(-u,-9,u,9),A.hs)
w=C.N()
w.saq(D.c_m.av(0,new C.a8(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
v.r=A.hQ.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fsH(d,""+Math.abs(s),new C.u(w,22),A.bV,10)}q=new B.cFt(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aO)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=C.bu(C.c9(new C.u(m,-22),22,v),A.hs)
$.W()
k=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
k.b=A.ae
k.c=1.4
k.r=A.aZ.gp(0)
r=k.H()
i.drawRRect(C.eA(l),r)
r.delete()
B.fsH(d,"+",new C.u(m,-22),A.bV,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b_:A.aL).gp(0)
d.ae(new C.u(h,f),7,i)},
au(d){return!0},
gjs(){return this.e}}
B.Ve.prototype={
S(){return new B.bjG(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bjG.prototype={
ga0I(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadY(){var w=this.ga0I(),v=this.r,u=D.ayR[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dXv(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zG("gear_lab").bC(new B.dXw(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bvz()},
c7s(d,e){var w,v=this
v.m(new B.dXl(v,d,e))
if(v.gadY()&&v.w.L(0,v.r)){B.w6("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.w3("gear_lab",C.G(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0I(),n=r.ga0I(),m=D.ayR[r.r].a
m=r.gadY()?"\u2705 Done! Ratio "+A.k.ab(r.ga0I(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadY()?A.b_:A.ct
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.YV,B.bAd(m,w,r.gadY()&&r.r<7?new B.fj(A.j4,"Next",new B.dXp(r),A.b_,q):q),q),C.E(C.b3(q,q,q,new B.bfl(v,r.f,q),A.f6),1),new C.D(D.ai7,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0I(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a8b,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dB(m+s,r.r===t,new B.dXq(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eV(o,"GOAL",q),B.hH(A.aO,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dXr(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avI("Gear "+s+" teeth",p,new B.dXs(r,t),8,40,D.dh0[t],""+p,q))}return B.jL(A.ct,A.he,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.bfl.prototype={
bQM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ell,D.eqV,D.eHx,D.ey8],s=v===0,r=0;r<4;++r){q=t[r]
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
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.ff(g,A.px)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bv(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bZ(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.ddE(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d6,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cT)
h.$5(new C.u(0,0),g[0],w[0],j,A.n1)
h.$5(new C.u(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.ddF(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aO)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.b_)},
au(d){return!0}}
B.Un.prototype={
S(){var w=$.aw()
return new B.bjl(new C.at(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.at(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.bjl.prototype={
Z(){this.a1()
this.aXU()
B.zG("cipher_lab").bC(new B.dIe(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aXU(){this.y=1+A.cH.aw(25)
this.z=0},
ga9L(){var w=this
return B.a1K(B.a1K(D.Hj[w.x],w.y),-w.z)===D.Hj[w.x]},
gaxW(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1K(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1K(u,0).split(""),x.s),new B.dHX(),x.dv).h3(0)
break A}w=B.ifg(u,v.e.a.a)
break A}return w},
aTa(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bR(w,w.gM(0),v.k("bR<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ff(q,A.x9))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aR(2,2)
v.push(new C.bB(1,A.bg,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aO,r,r,new C.bn(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.MM,r,r,r,r),new C.y(C.jK(65+s),r,D.fdV,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m4,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kL,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dI5(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f87,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kL,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dI6(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iU,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fEP)
w.push(A.au)
v=A.aO.j(0.12)
u=C.n(14)
t=C.I(A.aO.j(0.4),A.q,1)
w.push(C.p(o,C.zY(p.gaxW().length===0?"\u2026":p.gaxW(),D.fcU,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bAd(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aO,o))
w.push(A.ac)
w.push(D.fl5)
w.push(A.au)
w.push(p.aTa(p.gaxW()))
w.push(A.au)
w.push(D.fnu)
s=C.cw(w,o,A.bB,o,o,A.ag,!1)}else{w=B.bAd("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1K(D.Hj[p.x],p.y),o,o,o,o,o,o,D.fdu,o,o,o)
u=(p.ga9L()?A.b_:A.aO).j(0.14)
t=C.n(14)
r=C.I((p.ga9L()?A.b_:A.aO).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fyj,v,A.R,D.fsI,C.p(o,C.d(B.a1K(B.a1K(D.Hj[p.x],p.y),-p.z),o,o,o,o,o,o,D.feX,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aTa(B.a1K(D.Hj[p.x],p.y)),A.P],x.p)
if(p.ga9L())t.push(B.bAd("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b_,new B.fj(A.ka,"Next",new B.dI7(p),A.b_,o)))
s=C.cw(t,o,A.bB,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eV(C.a([new B.dB("Make a secret",w===0,new B.dI8(p),A.jt,A.aO,o),new B.dB("Crack a code",w===1,new B.dI9(p),A.q9,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dB(n[q],p.r===q,new B.dIa(p,q),o,A.aO,o))
v=C.a([new B.eV(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hH(A.aO,""+u,"Shift",25,1,new B.dIb(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hH(A.aM,""+v,"Shift back",25,0,new B.dIc(p),v))}return B.jL(A.aO,A.he,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aL3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aLx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.ed.prototype={}
B.tA.prototype={
aq2(d,e,f,g){var w=this
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
B.aak.prototype={}
B.abr.prototype={}
B.a4r.prototype={
bdx(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hi()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aak(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c3h(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new B.bMF())},
ajQ(d,e,f,g){var w="p"+this.c++,v=new B.tA(w,e,f,g)
v.aq2(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new B.bMQ(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHv(d,e,f,g,h){return A.d.b4(this.b,new B.bML(e,f,g,h))},
aky(d,e,f,g){var w
if(d===f||this.cHv(0,d,e,f,g))return null
w=new B.abr(d,e,f,g)
this.b.push(w)
return w},
aAv(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zJ(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
an9(d){return this.LJ(d)&&!d.x&&d.cx>this.zJ(d)},
b63(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LJ(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7t(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zh.h(0,v)
if(w!=null)return w.a
return 100},
v8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c3h(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.S(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bMR(a2),t).cJ(0,0,new B.bMS(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new B.bMU(o)
m=C.a([],x.t)
l=new B.bMT(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new B.bMW(g,l,n)
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
a2.b6_(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zJ(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b6_(e,d,w,!0)
a2.bNC(a4)},
b6_(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new B.bMH(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bMG(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bMJ(C.U(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b63(t)*(1+t.CW))
a4=b2.aAv(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7t(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQL(e,a0,b8)
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
bQL(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bNC(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAv(o)/a1.b63(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zJ(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFF(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdx(o,3,260)
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
if(i>1.5)a1.tM(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zh.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qj().h(0,n).b
l=f.b
l=l===A.k.jd(l)?""+A.k.V(l):C.v(l)
g=f.c
g=g===A.k.jd(g)?""+A.k.V(g):C.v(g)
a1.tM(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eUH.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bFF(d){return A.d.b4(this.a,new B.bME(d))},
tM(d,e){var w
d.x=!0
d.ay=e
this.bdx(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bia(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGF(d){var w=d.b
return D.aOc.t(0,w)||D.zh.ai(0,w)||w==="buck"||w==="regulator"},
beY(d){var w,v=!0
if(!this.LJ(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zh.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UJ(d,e){var w=this.b
return new C.a_(w,new B.bMY(d,e),C.S(w).k("a_<1>")).gM(0)},
Cw(d){var w,v
if(d.x)return!1
w=d.b
if(D.zh.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bd3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qj().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGF(d)||i.Cw(d))return null
w=i.UJ(d,0)
v=i.UJ(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.S(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcPZ(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jd(r)?""+A.k.V(r):C.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zh.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGK("battery"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.UJ(n,0)+i.UJ(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGK("switch"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qj().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zJ(k))return"The "+$.qj().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zJ(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bMM(i,d))
h=q.b
h=h===A.k.jd(h)?""+A.k.V(h):C.v(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGK(d){var w=this.a
return new C.a_(w,new B.bMP(d),C.S(w).k("a_<1>"))},
aGi(d){return this.aGK(d).b4(0,new B.bMO(0.35))},
pP(d,e){return A.d.b4(this.a,new B.bMN(e))}}
B.aiI.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.AU.gp(0)
c0.aX(new C.a8(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m5.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m5.ai(0,h.b)?(h.ch-1)*38:0
b4.cEt(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hB0(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bQ
c0.bF(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=D.ae6.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zi
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bv(w.save())
w.translate(j,i)
h=A.k.D(A.lL.az(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cha(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zJ(a0)){g=j+0
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
a3=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a3.r=A.av.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbI().a.snapshot()
w.drawPath((a4.e=new C.cB(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbI().a.snapshot()
w.drawPath((a2.e=new C.cB(e)).a,s)
s.delete()
a9=new C.jM(new C.et("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c4,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.eh()
a9.a3(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aOc.t(0,h)||D.zh.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cw(a0)&&r.UJ(a0,0)+r.UJ(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.aE.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.jM(new C.et("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c4,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.eh()
a9.a3(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m5.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=F.AU.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j.b=A.ae
j.c=2.4
j.r=(i&&r.beY(a0)?A.c8:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beY(a0)){a9=new C.jM(new C.et("+",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c8,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c4,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.eh()
a9.a3(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.ar(F.XN,F.XU,b2)
j.toString
i=b1.f
$.W()
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=j.gp(0)
h.c=2.4
h.d=A.bQ
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Ry
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bHs())){b3=A.d.cJ(q,0,new B.bHt())
$.W()
b7=C.N()
b7.r=D.bap.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new C.a8(0,0,b8,b9),b7)
a9=C.fN(b5,b5,b5,b5,D.f4E,A.a4,A.c4,b5,A.dL,A.c3)
a9.uD(b6-24)
a9.a3(c0,new C.u(12,10))}},
qo(d,e,f,g,h){var w=null,v=C.fN(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
v.a3(d,f)},
cEt(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.htq(a1,a2,a3)
d.F(new C.cQ(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.ar(A.aM,D.ae6,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.ar(A.aO,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
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
if(q){n=new C.SA(new C.vH(C.xg(d),!1,C.a([],x.f5))).gI(0)
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
i=t[u].MU(f).a
h=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P4(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b1:A.a3
u=g?A.b5:A.a8
t=C.ar(e,A.w,0.3)
t.toString
w.saq(new C.a9(v,u,A.x,C.a([e,f,e,t],x.O),A.Hl,null).av(0,d))
return w},
aw3(d,e,f){return this.P4(d,e,f,!0)},
c2T(d,e){return this.P4(d,A.bn,A.iF,e)},
aho(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aMI.av(0,C.bQ(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.eao)
v=e.ad(0,D.eax)
u=C.N()
u.r=A.e2.gp(0)
u.c=1.2
d.bF(w,v,u)},
cha(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bXj.av(0,D.eRq))
c0.c=3.4
c0.d=A.bQ
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mK
c1.hL(D.eRi,w)
if(c3){w=C.bu(D.eRp,A.ki)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h9o(c2)
c1.bF(new C.u(-u,0),D.ebG,c0)
c1.bF(D.e9w,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.m5.ai(0,w)&&c2.ch!==1
if(s){J.bv(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bCs(c1,c2)
break
case"solar":r=C.bu(D.eRl,A.iz)
c1.aE(r,b3.P4(new C.a8(r.a,r.b,r.c,r.d),A.dt,A.bN,!1))
b9=C.N()
w=C.ar(D.bdP,A.d_,0.25+0.55*c2.f)
w.toString
v=C.ar(D.blV,A.mp,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a9(A.az,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a6R))
c1.aX(D.a6R,b9)
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
v=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
c1.aQ(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dQ.j(0.9).gp(0)
c1.ae(D.e9C,4+4*w,b9)
break
case"crank":n=C.bu(D.eR6,A.hh)
c1.aE(n,b3.aw3(new C.a8(n.a,n.b,n.c,n.d),A.br,A.bK))
b9=C.N()
b9.saq(D.aMJ.av(0,C.bQ(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cs.gp(0)
b9.c=5
b9.d=A.bQ
c1.bF(A.J,m,b9)
b9=C.N()
b9.saq(D.ekl.av(0,C.bQ(m,7)))
c1.ae(m,7,b9)
b3.aho(c1,D.ebz)
b3.aho(c1,D.e9p)
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
J.bv(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cQ(6,-14,2,-30))
l.push(new C.cQ(-2,-14,0,-2))
l.push(new C.bE())
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.c.gp(0)
o=l.H()
l=j.gbI().a.snapshot()
v.drawPath((j.e=new C.cB(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.ek1.av(0,C.bQ(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bu(D.eRd,A.qu)
b9=C.N()
b9.saq(D.apc.av(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.aho(c1,D.Sr)
b3.aho(c1,D.aHy)
i=c2.w?D.aHy:D.e99
b9=C.N()
b9.r=A.aw.gp(0)
b9.c=6
b9.d=A.bQ
c1.bF(D.Sr,i,b9)
b9=C.N()
b9.r=(c2.w?A.b_:A.bN).gp(0)
b9.c=4
b9.d=A.bQ
c1.bF(D.Sr,i,b9)
b9=C.kv(D.Sr,i,0.85)
b9.toString
w=C.N()
w.r=A.av.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.bu(D.aNh,D.aMN)
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
b9.r=C.ar(A.bN,A.ct,c2.fx).gp(0)
c1.bF(D.aHP,D.aHx,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.bF(D.aHP,D.ebX,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.bF(D.ea2,D.aHx,b9)
b9=C.N()
b9.r=A.dC.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.c9(new C.u(F.jw[g]*22,0),20,9)
w=C.bu(f,A.hI)
o=b3.P4(f,A.d6,A.oH,!0).H()
b9.drawRRect(C.eA(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.ekd.av(0,C.bQ(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=A.aA.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.N()
b9.saq(D.ek_.av(0,C.bQ(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bQ
c1.bF(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bu(D.aNh,D.aMN)
b9=C.N()
b9.saq(D.c_E.av(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=x.O
a2=C.G([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c_(new C.a8(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.aX(D.eRz,b9)
b9=c2.r
b3.qo(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ebe,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.zi
c1.ae(D.wp,34,v)}n=C.c9(D.e8F,12,18)
c1.aE(C.bu(n,A.hI),b3.P4(n,A.bn,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Wz
else{v=C.ar(A.e4,A.hO,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.F0
else{l=C.ar(A.dt,A.dQ,c2.fx)
l.toString}w.saq(new C.bS(A.t8,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bQ(A.rJ,17)))
c1.ae(A.rJ,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rJ,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cQ(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aQ(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bF(D.ebT,D.ebV,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bF(D.e9W,D.e9Z,v)
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
else{w=C.ar(A.dt,D.beH,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aQ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.av.j(0.6*w).gp(0)
v.z=D.dse
c1.ae(A.rJ,30,v)}w=C.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bF(D.ebZ,D.ebY,w)
w=C.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bF(D.ea4,D.ea3,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cQ(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j3
else{l=C.ar(A.eu,D.aeT,c2.fx)
l.toString}if(t)j=A.ky
else{j=C.ar(A.kw,A.av,c2.fx)
j.toString}v.saq(new C.a9(A.az,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eQD))
c1.aQ(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jm.gp(0)
c1.aQ(a6,v)
v=C.N()
v.r=A.ey.gp(0)
c1.aX(D.eQJ,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cQ(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aQ(w,b9)
break
case"motor":a7=new C.a8(-28,-14,20,14)
c1.aE(C.bu(a7,A.hs),b3.aw3(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cp.gp(0)
c1.aX(D.eQq,b9)
b9=C.N()
b9.r=A.cs.gp(0)
c1.aX(D.eQr,b9)
b9=c1.a
J.bv(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bv(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.c9(D.e8X,15,7)
v=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.aw.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qo(c1,"M",D.eby,A.aw,14)
break
case"buzzer":a8=C.c9(A.J,42,42)
b9=C.N()
b9.saq(D.ekh.av(0,a8))
c1.hL(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ae(A.J,6,b9)
b3.qo(c1,"+",D.ebr,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bQ(A.J,24+k*5+l)
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
j.b=A.ae
j.c=2
j.r=A.bU.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bu(D.eR9,A.hs)
w=C.N()
w.saq(D.bYh.av(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cQ(-24+k*6+3,b9,-24+a5*6,0)
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
w.r=D.bfk.j(0.5*b9).gp(0)
w.z=A.jx
c1.aQ(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bQ
b9.r=C.ar(A.lQ,A3.XC,c2.fx).gp(0)
c1.aQ(a9,b9)
break
case"capacitor":a7=new C.a8(-16,-22,16,18)
b9=C.bu(a7,A.hs)
w=C.N()
w.saq(D.bXb.av(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bN.gp(0)
c1.aX(D.eQP,w)
for(p=0;p<4;++p){b0=new C.jM(new C.et("\u2212",b4,b4,A.cP,b4,b4,b4,b4,b4,b4,new C.H(!0,A.aw,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c4,new C.jv(1),b4,b4,b4,b4,A.c3,b4)
b0.eh()
b0.a3(c1,new C.u(-14,-18+p*9))}b1=new C.a8(-16,-24,16,-17)
c1.aE(C.bu(b1,A.hI),b3.c2T(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b_.j(0.5).gp(0)
c1.aX(new C.a8(-3,w,11,w+b9),v)
b3.qo(c1,"1F",D.wp,A.c,11)
break
case"radio":a1=C.bu(D.a6R,A.hh)
b9=C.N()
b9.saq(D.c_U.av(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oH.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bu(D.eRa,A.iz)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
v.r=A.lQ.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fV:A.nV).gp(0)
c1.aX(D.eQt,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bF(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aMJ.av(0,C.bQ(D.a5R,6)))
c1.ae(D.a5R,6,w)
w=C.N()
w.r=A.oH.gp(0)
c1.ae(D.e9v,4,w)
w=C.N()
w.r=A.e4.gp(0)
w.c=1.8
c1.bF(D.e9t,D.aHC,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bQ(D.aHC,4+k*5+A.k.E(w.d*8,5))
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=1.4
l.r=A.o_.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bu(D.eRk,A.hs)
v=C.N()
v.r=L.mo.gp(0)
c1.aE(w,v)
b2=C.bu(D.eRh,A.hI)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bv(b9.save())
b9.clipRRect(C.eA(b2),$.oP(),!0)
b9.translate(-33,-21)
E.h5w(c1,D.eXq,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b_.gp(0)
c1.ae(D.e9H,1.6,b9)}else{w=C.N()
w.r=D.vs.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aQ(b9,w)}b9=C.N()
b9.r=A.br.gp(0)
c1.aX(D.eQI,b9)
break}B.icR(c1,c2,b3.b.d,b3.gc7u())
if(t)b3.qo(c1,"\u2716",D.ec1,A.av,14)
if(s)c1.a.restore()},
bCs(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a8(-28,-13,28,13)
d.aE(C.bu(w,A.qu),m.aw3(w,A.dt,A.j0))
v=new C.a8(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.ap5.av(0,v))
d.aX(v,u)
u=C.N()
u.r=A.dS.gp(0)
d.aX(D.eQY,u)
t=new C.a8(28,-5,34,5)
d.aE(C.bu(t,A.hg),m.P4(t,A.dt,A.iF,!0))
m.qo(d,"+",D.e9e,A.aM,11)
m.qo(d,"\u2212",D.ebA,A.ad,11)
m.qo(d,C.v(l===A.k.jd(l)?A.k.V(l):l)+"V",D.ebk,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bE.gp(0)
d.aX(D.eQX,u)
u=e.as
s=C.N()
s.r=C.ar(A.av,A.b_,u).gp(0)
d.aX(new C.a8(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qo(d,"FLAT",D.ebd,A.c8,9)}if(l>2){u=C.N()
u.r=A.aZ.gp(0)
u.c=1
d.bF(D.e8L,D.aHh,u)
m.qo(d,l>3?"3 cells":"2 cells",D.ebj,A.aA,8)}}else if(l<=9){r=new C.a8(-22,-17,22,17)
u=C.bu(r,A.qu)
$.W()
s=C.N()
s.saq(D.c_r.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cT.gp(0)
d.aX(D.eQZ,s)
for(u=d.a,q=0;q<2;++q){p=F.ayv[q]
s=p<0?5:3.6
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.saq(D.aMI.av(0,C.bQ(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qo(d,"9V",D.ebf,A.c,16)}else{r=new C.a8(-34,-16,34,16)
u=C.bu(r,A.iz)
$.W()
s=C.N()
s.saq(D.ap5.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bH.gp(0)
d.aX(D.eRj,s)
for(u=d.a,q=0;q<2;++q){s=C.bu(C.c9(new C.u(F.a3E[q],-20),8,10),A.hg)
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.cs.gp(0)
n=o.H()
u.drawRRect(C.eA(s),n)
n.delete()}m.qo(d,"+",D.e9l,A.av,10)
m.qo(d,"12V",D.ebg,A.aw,15)}},
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
n=new B.tA(o,r,q,p)
n.aq2(o,r,q,p)
k.push(n)
J.iw(s[4],new B.cm9(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aky(m,u[1],l,u[3])}}}
B.aiG.prototype={
S(){var w=x.N
return new B.aiH(A.J,A.ax,C.U(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aiH.prototype={
ae0(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bH6(w,d))
w.as=C.cM(A.lp,new B.bH7(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bsh()},
a_P(d,e){return this.cf6(d,e)},
b0i(d){return this.a_P(d,!1)},
cf6(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_P=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r8:A.xL
p=d.b
w=3
return C.b(E.h5P(s,r,p,d.ax<3.2,q,$.qj().h(0,p).b),$async$a_P)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_P,v)},
crO(d){var w=this,v=new C.T(Date.now(),0,!1),u=w.at.ca(0,d.a,new B.bH8()),t=J.cF(u)
t.L(u,v)
t.br(u,new B.bH9(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a19(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kz,new B.bHa(w,u,d))}},
a_v(d){return this.cdu(d)},
cdu(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_v=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.ie0(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_v)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_v,v)},
a19(d){return this.cpo(d)},
cpo(d){var w=0,v=C.j(x.H),u=this,t
var $async$a19=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bT(F.kW,null,new B.bH4(u,d),t,!0,!0,!1,A.jU,!1,!1,x.H),$async$a19)
case 2:return C.h(null,v)}})
return C.i($async$a19,v)},
Z(){this.a1()
this.bf7()
this.ll()},
bf7(){this.a.c.e=new B.bHp(this)},
lD(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v8(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.m5.h(0,s.b)
if((r==null?null:r.b)!==D.zI)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_P(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"radio":if(s.fx>0){E.dH(900+A.cH.aw(800),"",90,0,0.1,o)
if(A.cH.aj()<0.35)E.dH(300+A.cH.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cH.aj()<0.4
else u=!1
if(u)E.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dH(330+A.o.E(110*A.k.bk(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dH((A.k.bk(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new B.bHq())},
b7k(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m5.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0Z(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.S(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bR(w,w.gM(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m5.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cEu(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m5.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m5.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.htq(new C.u(k,n),new C.u(i,l),p)
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
adZ(){this.a.toString
this.m(new B.bGA())},
bp0(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d12[v]
if(!A.d.b4(p.a.c.a,new B.bHr(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.Iq:o
s=s?K.Iq:o
q=t.ajQ(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dH(1200,"",50,0,0.3,"tri")
p.adZ()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.QM[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.am(u+1,2)):w
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
w.push(n.b0O(s,!0))
n.a.toString
if(t)w.push(n.b0O(r,!0))
w.push(C.E(C.cq(new B.bHo(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0O(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qj()
s=t.h(0,u).d.j(0.14)
r=new C.aR(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aB(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zX,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nC,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bn(r,r,r,r),p,p,A.n),p,p,p,F.tP,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGB(this,u),p,p,p,p,p,p,!1,A.a5))}return C.p(p,C.cw(m,p,A.ha,p,p,A.aP,!1),A.f,p,p,new C.o(F.AS,p,new C.bO(A.a0,A.a0,new C.az(o,1,A.q,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZl(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.acO,w,C.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ai8,w,w,w)},
chb(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qj().h(0,o),m=d.dy,l=d.fr,k=new B.bGU(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Jt,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bOq,p,p,p,new B.bGH(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GP,p,p,p,new B.bGI(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.DK,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.fdj,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c8:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bd3(d)
if(v!=null){l=(d.x?A.av:A.aE).j(0.14)
j=C.n(10)
i=C.I((d.x?A.av:A.aE).j(0.5),A.q,1)
m.push(new C.D(A.i8,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fjK,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cq,p,p,p),p))}if(B.h3z(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dB("CH "+t,d.at===u,new B.bGJ(q,d,u),p,h,p))}l=C.bU(A.bA,l,A.bq,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Cw(d)?"Showing: "+F.Qm[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hi,p,p,p)],g)
if(q.a.c.Cw(d))l.push(new B.fj(A.Go,"Open big screen",new B.bGM(q,d),h,p))
A.d.v(m,l)}if(D.m5.ai(0,o)&&!B.h3z(o)){l=C.a([A.am,C.d(q.a.c.Cw(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hi,p,p,p)],g)
if(q.a.c.Cw(d))l.push(new B.fj(A.O3,"Open the "+$.qj().h(0,o).b,new B.bGN(q,d),h,p))
A.d.v(m,l)}if(D.m5.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.C0,"Make it bigger (or tap it 4 times)",new B.bGO(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Cw(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fe8,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dib[s]
j=r===A.k.jd(r)?A.k.V(r):r
l.push(new B.dB(C.v(j)+" V out",d.e===r,new B.bGP(q,d,r),p,h,p))}i.push(new C.D(A.lV,C.bU(A.bA,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fBY)
A.d.v(m,i)}if(q.a.c.LJ(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zJ(d),2)
i=q.a.c
w=i.an9(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.an9(d)?A.c8:A.ek,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zJ(d),0,1)
i=q.a.c.an9(d)?A.av:A.b_
m.push(new C.D(A.i8,C.x(C.a([l,A.cV,C.by(j,C.m6(A.bE,p,p,5,p,w,new C.lZ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i8,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f84,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d7J[s]
j=r===1.5?"1.5 V (rechargeable)":C.v(r)+" V"
l.push(new B.dB(j,d.e===r,new B.bGQ(q,d,r),p,h,p))}m.push(C.bU(A.bA,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cZq[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dB(j,d.r===r,new B.bGR(q,d,r),p,h,p))}m.push(C.bU(A.bA,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGS(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGT(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bGK(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bGL(d)))
if(o==="crank")m.push(D.fxr)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hi,p,p,p))
return q.aZl(new C.cT(D.b0o,C.cd(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.baP.prototype={}
B.V1.prototype={
S(){return new B.aDa(B.h9n(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aDa.prototype={
Z(){this.a1()
$.aW.bY$.push(this)
this.ae_()},
ae_(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ae_=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fze(),$async$ae_)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.idd(t.d,r)
if(s!=null){t.m(new B.dTA(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ae_,v)},
EX(){var w,v=this
if(!v.as)return
w=B.i3M(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDN(w)},
j8(d){if(d!==A.fx)this.EX()},
q(){$.aW.hQ(this)
this.EX()
this.a2()},
c7w(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.S(v).k("a_<1>")
t=new C.a_(v,new B.dTJ(q),u).gM(0)
s=new C.a_(v,new B.dTK(),u).gM(0)
r=new C.a_(v,w.gcTt(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dTL(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EX()
if(A.o.E(q.w,10)===0){w=q.f
$.ahU()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahU()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BQ("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dTM())
q.EX()
w=q.c
w.toString
w=C.Xp(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahU()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mr,p,p,p,p,p,p,p,p,p,p))}},
agF(){var w=0,v=C.j(x.H),u=this,t
var $async$agF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dTz(u),t,null,!0,!0,x.H),$async$agF)
case 2:return C.h(null,v)}})
return C.i($async$agF,v)},
aZk(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aB(w,C.hx(new C.a7(40,38,new C.an(A.Z,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5)},
aZj(d,e,f,g){return this.aZk(d,e,f,g,null)},
aqI(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aB(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.eg,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),1)},
aeY(){var w=0,v=C.j(x.H),u=this,t
var $async$aeY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).cm(C.ea(new B.dTv(u),!1,null,x.H)),$async$aeY)
case 2:t=u.e.gbl()
if(t!=null)t.bf7()
if(u.c!=null)u.m(new B.dTw())
u.EX()
return C.h(null,v)}})
return C.i($async$aeY,v)},
bFy(){var w,v,u,t,s=null,r=this.f
$.ahU()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bc:A.av
u=C.n(9)
t=C.I(F.AS,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wF,s,s,s),s,s,s),A.f,s,D.b0v,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahL(){var w=0,v=C.j(x.H),u=this,t
var $async$ahL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bT(F.kW,null,new B.dTI(u),t,!0,!0,!0,A.jU,!1,!1,x.H),$async$ahL)
case 2:return C.h(null,v)}})
return C.i($async$ahL,v)},
c7x(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aB(r,C.p(r,D.bPE,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dTO(d),r,r,r,r,r,r,!1,A.a5),o=C.n(11)
o=C.p(r,D.b6a,A.f,r,r,new C.o(A.bm,r,C.I(A.aO.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fA0,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f1:A.fX,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.axh(s.gcdb(),r),A.rS,s.aZj(A.yl,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dTP(s,d)),s.aZk(A.lt,"Challenges",A.aM,s.gcuq(),s.bFy()),s.aZj(A.NX,"How to play",A.aO,new B.dTQ(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqI(A.o9,"Circuits",A.bu,s.gcnd()),A.bp,s.aqI(A.oX,"Repair",A.aM,new B.dTR(s)),A.bp,s.aqI(D.ym,"Clear",A.c8,new B.dTS(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AS,r,new C.bO(A.a0,A.a0,new C.az(q,1,A.q,-1),A.a0),r,r,r,A.n),r,r,r,r,D.byT,r,r,r)},
B(d){var w=this,v=null
$.arQ="tech"
return C.c6(v,A.c_,C.bm(!0,C.x(C.a([w.c7x(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h8d(w.d,w.e,w.gc7v(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.axh.prototype={
S(){return new B.b90(null,null)}}
B.b90.prototype={
gawZ(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,A.T,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawZ().q()
this.btx()},
B(d){var w=null,v=this.a.c
return C.aB(w,C.hx(new C.a7(42,42,C.c7(this.gawZ(),new B.cD0(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
B.b9_.prototype={
a3(d,e){var w,v,u,t=null,s=e.ee(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mK
d.ae(s,r+2+o*2,w)
w=C.N()
w.saq(D.ekc.av(0,C.bQ(s,r)))
d.ae(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fZ(A.A,0,6.283185307179586,A.x,D.cQQ,t,new C.mq(p)).av(0,C.bQ(s,r)))
d.ae(s,r,v)
p=new B.cD_(d)
p.$3(s.ad(0,A.rJ),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.eaf),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.ec5),2.6,0.5+0.5*Math.cos(q))
u=C.fN(t,t,t,t,D.f4K,A.a4,A.c4,t,A.dL,A.c3)
u.eh()
u.a3(d,s.ad(0,new C.u(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.axB.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bsg()}}
B.aJA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx7.prototype={}
B.fQ.prototype={}
B.Jn.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m9.prototype={}
B.UJ.prototype={
S(){return new B.bjs(null,null)}}
B.bjs.prototype={
ga9e(){var w,v=this,u=v.d
if(u===$){w=C.bk(null,A.o5,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga9e().q()
this.bvn()},
gRR(){var w=this.ga9e().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m5.h(0,this.a.c)
if(v==null)v=D.aNy
return C.c6(w,U.LO,C.bm(!0,new C.an(A.Z,w,A.aa,A.r,C.a([C.av(v.b===D.zJ?this.bHK(v):this.cjY(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mG,w,w,w,new B.dPw(d),w,w,w,C.nE(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f6l,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c7y(d){var w
A:{if(D.IO===d){w=0.46153846153846156
break A}if(D.uP===d){w=0.45
break A}if(D.wv===d){w=0.9259259259259258
break A}if(D.T2===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjY(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IO
A:{if(D.IO===p){w=44
break A}if(D.uP===p){w=30
break A}if(D.wv===p){w=22
break A}if(D.T2===p){w=26
break A}w=14
break A}v=C.c7(this.ga9e(),new B.dPv(this,w,d,o),q)
if(p===D.a7_)v=new C.Ds(D.bzv,v,q)
p=this.c7y(p)
u=o?4:5
t=d.c
s=C.ar(t,A.c,o?0.25:0.08)
s.toString
r=C.ar(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fM(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A2.FW,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a9(A.az,A.aC,A.x,r,q,q),A.n),q,q,q,D.btc,new C.R(u,u,u,u),q,q,q),q)},
b6w(d){var w,v,u,t=null,s=new C.T(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bk(this.gRR()*0.4),0,100),q=d.b===D.IO,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aY(A.o.u(C.dk(s)),2,"0")+":"+A.a.aY(A.o.u(C.h4(s)),2,"0"),t,t,t,t,t,t,A.rZ,t,t,t),A.b8],x.p)
for(w=0;w<4;++w){v=new C.aR(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bn(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bzd,t,t,t,3))}n.push(A.dc)
n.push(D.fsU)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bm(A.A,C.p(t,t,A.f,t,t,new C.o(A.b_,t,t,C.n(2),t,t,A.n),t,t,t,A2.FW,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qx)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fk4,t,t,t))
return new C.D(new C.R(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auT(d,e,f){var w,v=null,u=d.d,t=C.ar(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.ddp,new C.a9(A.az,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.faS,v,v,v)],w))
return C.aB(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dPr(this,d),v,v,v,v,v,v,!1,A.a5)},
bYZ(d,e){return this.auT(d,e,!0)},
bYH(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.T2||n===D.wv,l=d.d,k=C.ar(l,A.w,0.55)
k.toString
l=C.ar(l,A.ku,0.5)
l.toString
l=C.a([k,A.dy,l],x.O)
k=p.b6w(d)
w=m?190:138
v=C.n(24)
u=C.I(A.aZ,A.q,1)
w=C.aB(o,C.p(o,C.by(C.n(23),C.b3(o,o,o,new B.aeF(0,p.gRR(),o),A.f6),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hT,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dPp(p),o,o,o,o,o,o,!1,A.a5)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.kc[s]
t.push(new C.cp(A.A,o,o,p.bYZ(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m3(0.92,t,v,8,12,A7.vG,o,!1),1)],u)
if(n!==D.a7_){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.d9(F.kc,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bR(v,v.gM(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auT(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qj,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bu2,T.ajA,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a9(A.az,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bB5(d,e){var w=null
return C.p(w,C.x(C.a([this.b6w(d),C.E(C.b3(w,w,w,new B.aeF(e,this.gRR(),w),A.f6),1),C.aB(w,C.p(w,C.av(C.d(F.kc[e].a,w,w,w,w,w,w,A.Jj,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dPk(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHK(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.ar(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fM(1.5384615384615383,C.p(t,C.c7(this.ga9e(),new B.dPn(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a9(A.az,A.aC,A.x,w,t,t),A.n),t,t,t,D.byO,new C.R(8,8,8,s),t,t,t),t)}}
B.bvb.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.ar(v,A.w,0.6)
u.toString
t=C.ar(v,A.ku,0.4)
t.toString
w.saq(new C.a9(A.az,A.aC,A.x,C.a([u,A.dy,t],x.O),null,null).av(0,new C.a8(0,0,n,m)))
d.aX(new C.a8(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=v.j(0.1).gp(0)
r.z=D.dsj
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aeF.prototype={
a3(d,e){return E.Rs(d,e,this.b,this.c)},
au(d){return!0}}
B.aLm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aWx.prototype={}
B.Vx.prototype={
S(){return new B.bk1(C.U(x.S,x.N),A.ax,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bk1.prototype={
gvw(){var w=this.f
return w===$?this.f=B.h3H(0):w},
Z(){this.a1()
this.ll()
B.zG("laser_maze").bC(new B.ecA(this),x.P)},
lD(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.ecB())},
ae4(d){var w=this
w.m(new B.ecq(w,d))
B.w3("laser_maze",C.G(["best",w.e,"level",w.d],x.N,x.z))},
c7O(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdt()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bk((d.a-t)/v)
q=A.k.bk((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvw().b.t(0,p)||p===o.gvw().e||o.gvw().d.ai(0,p))return
o.m(new B.ecr(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.ecu(t,B.htj(t.gvw(),t.r))),q=x.p,p=C.a([new B.dB("Clear mirrors",!1,new B.ecv(t),A.ka,A.aM,s),new B.dB("Skip",!1,new B.ecw(t),D.bIn,A.aO,s)],q)
if(t.d>0)p.push(new B.dB("Back",!1,new B.ecx(t),D.bIo,A.aO,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dB(""+u,v===t.d,new B.ecy(t,v),s,A.av,s))}return B.jL(A.av,A.he,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eV(p,s,s),new B.eV(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bh1.prototype={
a3(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdt()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.diK(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bu(new C.a8(a5,a6,a8,a4),A.ki)
v=$.W()
u=C.N()
u.r=L.mo.gp(0)
a9.aE(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.dn.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.dn.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bu(C.c9(p,u,u),A.hh)
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.saq(D.c00.av(0,C.c9(p,a3,a3)))
q=o.H()
w.drawRRect(C.eA(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.d9(a8,1,a2,C.S(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gM(0),v.k("bR<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
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
a8.e=A.fG
a8.r=A.av.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lA
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fG
a8.r=D.aeT.gp(0)
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
if(l){m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=A.aM.j(0.5).gp(0)
m.z=A.CK
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=(l?A.aM:A.br).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.jM(new C.et("\u2605",a2,a2,A.cP,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c4,new C.jv(1),a2,a2,a2,a2,A.c3,a2)
i.eh()
j=i.b
h=j.c
j=j.a.c
i.a3(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.diN(a7,a3,a9)
a1.c.bM(0,new B.diL(g))
a4.d.bM(0,new B.diM(g))
f=a7.$1(a4.e)
a4=C.bu(C.c9(f,o,a3*0.8),A.hh)
a8=C.N()
a8.r=A.av.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.L)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
au(d){return!0}}
B.Vz.prototype={
S(){var w=x.n
return new B.aDP(A.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDP.prototype={
Z(){this.a1()
this.ll()
B.zG("light_mixer").bC(new B.ecT(this),x.P)},
lD(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZq()
w.m(new B.ecU())},
ax2(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aw(5)/4)
u.e=t
if(A.d.d7(t,new B.ecE()))u.e[w.aw(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZq(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hox(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.w6(v,A.o.am(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.w3("light_mixer",C.G(["best",v],x.N,x.z))}}else u.z="result"},
gczr(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.G(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cST[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.ecN(v,B.hox(v.e,t))),r=t[0]
r=B.hH(A.av,""+A.k.V(r*100)+"%","Red",1,0,new B.ecO(v),r)
w=t[1]
w=B.hH(A.bc,""+A.k.V(w*100)+"%","Green",1,0,new B.ecP(v),w)
t=t[2]
return B.jL(A.b7,A.he,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hH(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.ecQ(v),t),new C.bI(A.a8,u,u,new B.fj(A.ho,"Lock it in",new B.ecR(v),A.b_,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bhg.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bu(new C.a8(0,0,n,m),A.qt)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.bv(w.save())
w.clipRRect(C.eA(C.bu(new C.a8(0,0,n,m),A.qt)),$.oP(),!0)
v=e.gdt()*0.3
u=e.ee(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.EH,I.adU,I.aek]
d.lj(new C.a8(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.a=A.nK
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bu(new C.a8(0,0,n,m),A.qt)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.aZ.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxc.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvR()}}
B.aLP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxd.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvS()}}
B.bu0.prototype={}
B.a8j.prototype={
B(d){var w=null
return C.c6(C.eF(w,w,w,!0,!0,D.af5,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao4,w,w,w,new B.cgN(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fIE,w,w,w,1,w,!0),D.af5,C.cw(C.a([D.edn,C.cq(new B.cgO())],x.p),w,D.bv2,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.Wq.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aEG(w,new C.at(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEG.prototype={
Z(){this.a1()
this.ll()},
b4u(d){var w=this.d.length
return A.o.E(A.k.bk(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lD(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4u(v.f)
if(w!==v.x){v.x=w
B.ll("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eM8(v))
B.BQ("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c8L(){if(this.d.length<2)return
this.m(new B.eM4(this))},
aZM(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eM3(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8K(),p=s.d,o=C.E(C.aB(r,C.b3(r,r,r,new B.bvn(p,s.f,r),A.f6),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fie,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.axI[A.o.E(v,8)].j(0.9)
t=new C.aR(20,20)
o.push(C.aB(r,C.p(r,new C.y(p[v],r,D.fhu,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bn(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eM6(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5))}p=A.c.j(0.07)
return B.jL(A.aM,A.he,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eV(o,r,r),C.B(C.a([C.E(C.aM(r,A.U,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kM,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eM7(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hE,"Add",s.gc8I(s),A.c,r),A.bp,new B.fj(A.mz,"Spin",q,A.b_,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.bvn.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.bbP.gp(0)
a1.ae(d,f,w)
w=C.N()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bQ(d,a0)
n=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=D.axI[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bQ(d,a0)
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
J.bv(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.jM(new C.et(o,i,i,A.cP,i,i,i,i,i,i,D.f5x),A.a4,A.c4,new C.jv(1),i,i,i,i,A.c3,i)
k.eh()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.N()
f.r=D.aeK.gp(0)
a1.ae(d,20,f)
f=C.N()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ae(d,20,f)
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
B.V8.prototype={
S(){return new B.bjB($,A.bx,0,C.a([],x.X),null,null)}}
B.bjB.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BQ("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a54(900,new B.dVO())}w.m(new B.dVP())},
aZO(d){return this.m(new B.dVJ(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aY(A.o.u(A.o.E(A.k.dh(m),60)),2,"0")
m=C.b3(n,n,n,new B.bqb(l,A.c8,n),A.aOS)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f9P,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f8T,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wB,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.dat[r]
u.push(new B.dB(""+q+" min",o.d===q,new B.dVL(o,q),n,A.c8,n))}m=o.f
p=m?A1.yu:A.iO
m=m?"Pause":"Start"
return B.jL(A.c8,A.he,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eV(u,n,n),new B.eV(C.a([new B.fj(p,m,new B.dVM(o),A.b_,n),new B.fj(A.ka,"Reset",new B.dVN(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bqb.prototype={
a3(d,e){var w,v,u,t,s=e.ee(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bQ(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bQ
u=this.c
t=C.ar(u,A.c,0.4)
t.toString
v.saq(new C.fZ(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bQ(s,r)))
d.eV(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.Uj.prototype={
S(){return new B.bjd($,A.bx,0,C.a([],x.X),null,null)}}
B.bjd.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rr.h(0,p.d)
w.toString
v=A.d.ff(w,new B.dGF())
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
B.ll("flute",D.c0D[t]+5,1400,0.35)}p.m(new B.dGG())},
gc8O(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Kd("Press Start",0.5)
w=D.Rr.h(0,this.d)
w.toString
v=A.d.ff(w,new B.dGA())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Kd("Breathe in",0.5+0.5*A.dA.az(0,p))
case 1:return new C.Kd("Hold",1)
case 2:return new C.Kd("Breathe out",1-0.5*A.dA.az(0,p))
default:return new C.Kd("Hold",0.5)}}}return new C.Kd("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8O(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hm.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hm.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.DM,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kM,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Rr.geg(D.Rr));w.C();){v=w.gR(w)
o.push(new B.dB(v,r.d===v,new B.dGD(r,v),q,A.hm,q))}w=r.e
v=w?A.GE:A.iO
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dGE(r),A.b_,q))
return B.jL(A.hm,A.he,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eV(o,q,q))}}
B.aI4.prototype={}
B.V_.prototype={
S(){return new B.bjv(new C.cs(null,x.A),C.a([],x.au),A.aw,A.c)}}
B.bjv.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mH,s,s,s,new B.dT4(t,d),s,s,s,s,"Share",s)],r),p=C.by(C.n(18),new C.ex(C.aB(s,C.b3(s,s,s,new B.blx(t.e,t.x,s),A.f6),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dT5(t),new B.dT6(t),s,s,s,s,s,s,s,s,s,new B.dT7(t),s,s,s,s,!1,A.a5),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cSg[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Fk(v,u,new B.dT8(t,v),!1,s))}u=t.r
return B.jL(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bS,p,s),"DRAW PAD",C.x(C.a([new B.eV(o,s,s),B.hH(A.bD,""+A.k.V(u),"Brush",30,2,new B.dT9(t),u),new B.eV(C.a([new B.dB("Eraser",t.w,new B.dTa(t),A.Gg,A.bD,s),new B.fj(A.rn,"Undo",new B.dTb(t),A.c,s),new B.fj(A.ea,"Clear",new B.dTc(t),A.c,s),new B.fj(A.NT,"Paper",new B.dTd(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.blx.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.aX(new C.a8(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bQ
p.e=A.fG
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
i=new C.cQ(n,q,(n+i.a)/2,(q+i.b)/2)
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
u.drawPath((q==null?k.e=new C.cB(k.gbI().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.VM.prototype={
S(){var w=x.S
return new B.aDZ(C.aX(w),C.aX(w))}}
B.aDZ.prototype={
Z(){this.a1()
this.asd()},
asd(){var w,v,u=this,t=x.N,s=C.bp(D.dfq,!0,t)
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
c8J(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.ll("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.eif(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bM(A.ne,new B.eig(s,v,u),t)
else{s.x=!0
C.bM(Ab.Fy,new B.eih(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.U1,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xV,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hH,A.j,0,q,q),q),C.E(C.im(!0,q,q,A.y,new C.hQ(v,8,8,1,q),new B.eil(r),r.e.length,A.bl,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cTJ[t]
o.push(new B.dB(s.b,r.d===s.a,new B.eim(r,s),q,A.aO,q))}o.push(new B.fj(D.bIl,"New game",new B.ein(r),A.b_,q))
return B.jL(A.aO,A.he,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eV(o,q,q))}}
B.VZ.prototype={
S(){return new B.aEk(C.a([],x.t))}}
B.aEk.prototype={
c8N(d){A.d.a8(this.d)
this.w=!0
this.aZN()},
aZN(){this.d.push(A.cH.aw(4))
this.e=0
this.ZV()},
ZV(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZV=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.et8(t))
s=x.H
w=3
return C.b(C.bM(A.lU,null,s),$async$ZV)
case 3:r=t.d,q=C.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSV(n)
w=7
return C.b(C.bM(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZV)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.et9(t))
case 1:return C.h(u,v)}})
return C.i($async$ZV,v)},
aSV(d){this.m(new B.et6(this,d))
B.ll("marimba",D.apG[d]+5,450,0.55)
C.bM(A.Fw,new B.et7(this),x.H)},
c8P(d){var w,v,u=this
if(!u.w||u.r)return
u.aSV(d)
w=u.d
v=u.e
if(w[v]!==d){E.dH(90,"",600,0,0.5,"saw")
u.m(new B.eta(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.etb(u))
C.bM(A.ip,new B.etc(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.U8,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fiB,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awB[v]
u=u.j(q.f===v?1:0.35)
t=new C.aR(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.awB[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aB(p,C.df(p,p,p,p,A.bd,new C.o(u,p,new C.bO(r,r,r,r),new C.bn(t,t,t,t),s,p,A.n),A.jo,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.etd(q,v),p,p,p,p,p,p,!1,A.a5))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d8,new C.fM(1,C.m3(1,l,2,12,12,p,A.dT,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jL(A.bH,A.he,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eV(C.a([new B.fj(A.iO,n,q.gc8M(q),A.b_,p)],m),p,p))}}
B.Wj.prototype={
S(){return new B.bkJ(new C.at(A.as,$.aw()))}}
B.bkJ.prototype={
avL(d){return C.oM(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eHq(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eHz()
l=C.aM(m,A.U,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Aa.x3),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aZW),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kL,"Bill amount",!0,!0,!1,m,m,m,m,D.fg9,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eHv(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQl,!0,A.a4,m,A.an,m,m,m,m)
k=A.b_.j(0.1)
s=C.n(20)
r=C.I(A.b_.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avL(w)),t.$2("Total","$"+n.avL(v)),X.Me,t.$3$big("Each of "+n.f+" pays","$"+n.avL(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bP,m,m,m)],q),m,A.fD,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cEu[p]
r.push(new B.dB(""+o+"%",A.k.V(n.e)===o,new B.eHw(n,o),m,A.b_,m))}l=n.f
return B.jL(A.b_,A.he,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eV(r,"TIP",m),B.hH(A.aO,""+l,"People",20,1,new B.eHx(n),l),new B.eV(C.a([new B.dB("Round up",n.r,new B.eHy(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.VK.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bkc(w,A.cH,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkc.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bk(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
B.a8i("snare",0.5)}u.m(new B.egV())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hi()
u.w=t
u.x=t?0:3.141592653589793
B.ll("bell",24,400,0.5)}u.m(new B.egW())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bdd(v,o.r>0,n))}u=C.aB(n,C.av(C.bU(A.fJ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egO(o),n,n,n,n,n,n,!1,A.a5)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d6,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aB(n,C.av(C.ef(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.ffo,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ekg,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egP(o),n,n,n,n,n,n,!1,A.a5)}else{m=o.as
u=C.aB(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f51,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kM,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egQ(o),n,n,n,n,n,n,!1,A.a5)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d7W[r]
v.push(new B.dB(q.b,o.d===q.a,new B.egR(o,q),q.c,A.bu,n))}v=C.a([new B.eV(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hH(A.bu,""+s,"Dice",4,1,new B.egS(o),s))}if(o.d==="num"){s=o.z
s=B.hH(A.bu,""+s,"From",100,1,new B.egT(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hH(A.bu,""+p,"To",1000,2,new B.egU(o),p)],m))}return B.jL(A.bu,A.he,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bdd.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cH.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=C.a([],x.p)
for(s=D.dr0.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.abO,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.Z,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aL9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx3.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bva()}}
B.aLs.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx8.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvu()}}
B.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxi.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw_()}}
B.aMq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxu.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwt()}}
B.b6N.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEz.h(0,t)
$.arQ=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nr,u,u,u,new B.ctI(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NX,s,u,u,u,22),u,u,u,new B.ctJ(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.by5,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AS,u,new C.bO(new C.az(A.c.j(0.08),1,A.q,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.FA,u,u,1/0))
return C.c6(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dB.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.eg],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tP,C.aB(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bd,new C.o(p,s,o,r,s,s,A.n),A.eJ,s,s,s,A.hb,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ctE(t),s,s,s,s,s,s,!1,A.a5),s)}}
B.eV.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cv,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avI.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.avg(d).cK7(q,A.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.aa6(C.l2(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A.Jj,A.dP,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tP,C.aF(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ai.ahV,C.B(C.a([C.X(w.c,u,v,v,v,17),A.eg,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.ctD(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.Fk.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f3l:u
w=t?A.c:A.aZ
w=C.I(w,A.q,t?2.5:1)
return C.aB(u,C.df(u,u,u,u,A.bd,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hB,u,r,D.ahH,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.ctK(v),u,u,u,u,u,u,!1,A.a5)}}
B.mF.prototype={
a54(d,e){var w=C.dj()
w.seL(C.cM(C.dE(0,0,0,d,0,0),new B.ctF(this,w,e)))
this.fu$.push(w.bj())},
ll(){var w=this,v=w.qB(new B.ctH(w))
v.hG(0)
w.ft$!==$&&C.aP()
w.ft$=v}}
B.ab6.prototype={
byE(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gR(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bBT()
g.ay!==$&&C.aP()
g.ay=w},
bBT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.ab7.prototype={
cG1(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.FD(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v8.prototype={}
B.Pa.prototype={}
B.ya.prototype={}
B.P9.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.apA[w.aw(7)]
w=w.hi()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.ll(u,v+w-12,2200,0.1)}}
B.Vf.prototype={
S(){var w=$.aw()
return new B.aDl(new C.cs(null,x.A),new C.at(A.as,w),new B.P9(A.cH),D.d9W,A.ax,D.a3q,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDl.prototype={
Z(){var w,v=this
v.a1()
v.ll()
v.a.toString
w=$.hhx
if(w==null)w=$.hhx=B.cwj()
w.bC(new B.dYw(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.bvC()},
ctB(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dXZ(p[n]).$0())
w.push(q)}this.w=w},
gW6(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
ato(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axw(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.ato(d.x,d.w,105/Math.max(w,3))
C.eY()
B.ll("bell",(A.d.cH(D.a30,d.c)+1)*3+12,900,0.45)
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
c9t(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gW6()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gW6()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cG1((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9s(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dXX(w))
return}w.m(new B.dXY(w,v,A.a.i(d).toLowerCase()))},
bOW(){var w=null,v=this.c
v.toString
C.cb(w,w,!0,w,new B.dXV(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bL1,n,n,n,o.gbOV(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mH,n,n,n,new B.dYh(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dYi(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.U,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DJ,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bTb,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc9r(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iU,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dB(s.a,!1,new B.dYj(o,s),A.mB,A.aO,n))}i.push(new C.D(A.i8,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dB("Whole Earth",!1,new B.dYn(o),A.hp,A.aO,n)],l)
for(v=D.aEy.gdM(D.aEy),v=v.gaf(v);v.C();){u=v.gR(v)
w.push(new B.dB(u.a,!1,new B.dYo(o,u),n,A.aO,n))}w.push(new B.dB("Random",!1,new B.dYp(o),A.mz,A.aO,n))
i.push(new B.eV(w,"GO TO",n))
w=o.z
i.push(B.hH(A.aO,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dYq(o),w))
w=o.dy
i.push(B.hH(A.bH,A.a.aY(A.o.u(A.k.bk(w)),2,"0")+":00","Time",24,0,new B.dYr(o),w))
w=o.fr
i.push(B.hH(A.b_,o.csi(),"Season",365,0,new B.dYs(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lZ:D.Gx
i.push(new B.eV(C.a([new B.dB("Spin",w,new B.dYt(o),D.bGc,A.aO,n),new B.dB("Night",v,new B.dYu(o),A.vP,A.aO,n),new B.dB("Borders",u,new B.dYk(o),D.bGg,A.aO,n),new B.dB("Names",r,new B.dYl(o),X.BY,A.aO,n),new B.dB("Music",q,new B.dYm(o),p,A.aO,n)],l),n,n))
return B.jL(A.aO,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
csi(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axg[u])v=u
return A.it[v]+" "+(A.k.bk(w-D.axg[v])+1)},
c9q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mS(1,A.o.E((A.d.cH(D.a30,t)+1)*47,360),0.55,1).iM()
r=new B.dXT()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),C.aH(j,j,j,j,A.GP,j,j,j,new B.dXS(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hi,j,j,j)
m=D.dpz.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fxh(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GT(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GT(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.P,v,A.P,m,A.P,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fxh(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.Wp,j,p,q,j,j,A.n),j,j,j,j,D.aie,j,j,j)}}
B.bfs.prototype={
a3(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AO.gp(0)
d8.aX(new C.a8(0,0,0+d4,0+d5),d7)
w=new C.ez()
w.dl(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.aO.j(0.35),A.K],t),D.cVh,d3).av(0,C.bQ(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bQ(p,o)
u=C.N()
u.saq(D.ekk.av(0,n))
d8.ae(p,o,u)
J.bv(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.jS(n))
d8.pE(0,d6)
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
f=new B.deu(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cB(d.gbI().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cB(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cB(d.gbI().a.snapshot()):s).a,q)
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
d7.drawPath((d6==null?d.e=new C.cB(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cH(D.a30,a7.c)+1)*47,360)
$.W()
b0=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a3=a8?0.35:0.5
b0.r=new H.mS(1,a9,a3,a8?1:0.62).iM().gp(0)
b1=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
d7.drawPath((b6==null?b8.e=new C.cB(b8.gbI().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cB(b8.gbI().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rA
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cB(d.gbI().a.snapshot()):s).a,q)
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
c9=B.hQD(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a3(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b9E.j(0.78)],t),D.dai,d3).av(0,C.bQ(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dn6,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fX.j(0.5).gp(0)
d8.ae(p,o,d7)},
au(d){return!0}}
B.aLy.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aLz.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvB()}}
B.btW.prototype={}
B.Wm.prototype={
S(){return new B.bkN()}}
B.bkN.prototype={
gaSt(){var w=this.d
if(w===$)w=this.d=A.cH.aw(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AO,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao4,w,w,w,new B.eIj(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fCg,w,w,w,1,w,!0),u=C.n(18),t=A.aO.j(0.1),s=C.I(A.aO.j(0.35),A.q,1),r=x.p
return C.c6(v,D.AO,C.cw(C.a([C.p(w,C.B(C.a([D.bJK,A.at,C.E(C.d(D.cZa[this.gaSt()],w,w,w,w,w,w,D.a8S,w,w,w),1),C.aH(w,w,w,w,D.bUb,w,w,w,new B.eIk(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eIl())],r),w,A.Z8,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W7.prototype={
S(){return B.hR4()}}
B.bkz.prototype={
cjZ(d){var w=d.c,v=B.hR6(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjZ(w)
u=new C.u(-v.a,-v.b).aH(0,t.w)
v=C.kv(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9u(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c9y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.CA[s]
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
b_8(d){this.m(new B.eAm(this,d))
C.eY()
B.ll("bell",D.dnj[A.o.E(A.d.cH(D.CA,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mH,m,m,m,new B.eAx(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.eAy(n,l)),h=C.a([new B.dB("All",!1,new B.eAz(n),A.a14,A.aM,m)],k)
for(w=0;w<10;++w){v=D.CA[w]
h.push(new B.dB(v.a,n.z===v,new B.eAA(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hH(A.aM,s,"Time",1,0,new B.eAB(n),u/t)
u=n.w
u=B.hH(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.eAC(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lZ:D.Gx
return B.jL(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eV(h,"GO TO",m),t,u,new B.eV(C.a([new B.dB("Orbits",s,new B.eAD(n),m,A.aM,m),new B.dB("Names",r,new B.eAE(n),m,A.aM,m),new B.dB("Asteroids",q,new B.eAF(n),m,A.aM,m),new B.dB("Music",p,new B.eAG(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c9v(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eAk(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kl,r,r,r),1),C.aH(r,r,r,r,A.GP,r,r,r,new B.eAj(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.DK,r,r,r)
v=n.$2("WIDTH",B.GT(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.v(p)+" AU ("+B.GT(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eAl().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.v(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.P,p,A.P,v,A.P,s,A.P,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.Wp,r,l,m,r,r,A.n),r,r,r,r,D.aie,r,r,r)}}
B.brY.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AO.gp(0)
a7.aX(new C.a8(0,0,0+a5,0+a6),w)
v=new C.ez()
v.dl(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9u()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.CA),t=new C.f2(a6,new B.f1I()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hR5(A.d.gI(D.CA))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bQ(o,a6)))
a7.ae(o,a6,t)
t=C.N()
t.saq(D.eke.av(0,C.bQ(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hj9("Sun",10.5,A.ad)
h.a3(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.CA),t=new C.f2(a6,new B.f1J()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.bv(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.c9(A.J,j*1.3,j*4.2)
a1=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.r=e.j(0.3).gp(0)
a0.z=A.rA
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a1=C.ar(e,A.w,0.55)
a1.toString
a0.saq(new C.bS(P.pv,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a2D,a4).av(0,C.bQ(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
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
a3=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d3v[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hj9(d,10.5,A.ad)
h.a3(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.Vg.prototype={
S(){var w=x.i
return new B.aDm(new B.P9(A.cH),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDm.prototype={
cwQ(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9x(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e8W
s.cy=new C.u(s.ay,0)
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
s.m(new B.dYA())},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.z2[r]
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
break}}}if(A.d.d7(s,new B.dZ2()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dH(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aB(0,i.cx).gcn()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcn()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bN4()
else n=n==="weight"?p.cEi():p.bF9()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dkh[u]
v.push(new B.dB(t.b,p.d===t.a,new B.dYP(p,t),t.c,A.ct,o))}v=C.a([new B.eV(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dB("Hammer",!s,new B.dYQ(p),Ag.Gs,A.ct,o),new B.dB("Feather",s,new B.dYR(p),X.NC,A.ct,o),new B.dB(q,r,new B.dYV(p),A.Gh,A.aO,o)],w)
q=p.w
A.d.v(v,C.a([new B.eV(r,o,o),B.hH(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dYW(p),q),new B.eV(C.a([new B.fj(A.u2,"Drop!",new B.dYX(p),A.b_,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hH(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dYY(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hH(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dYZ(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hH(A.ct,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dZ_(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hH(A.ct,A.k.ab(r,1)+"x out","View",8,0.5,new B.dZ0(p),r),new B.eV(C.a([new B.fj(A.nq,"Fire!",p.gc9w(),A.b_,o),new B.fj(A.u2,"Falls",new B.dZ1(p),A.c,o),new B.fj(A.rf,"Orbit 7.7",new B.dYS(p),A.c,o),new B.fj(D.bJ9,"Oval 9",new B.dYT(p),A.c,o),new B.fj(A.C0,"Escape",new B.dYU(p),A.c,o)],w),o,o)],w))}return B.jL(A.ct,A.he,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bN4(){return new C.D(D.bt4,C.cq(new B.dYz(this)),null)},
cEi(){var w,v,u,t=null,s=[D.eKl,D.eLR,D.eLZ,D.eMi,D.eLX,D.eMp,D.eKV,D.eMM,D.eLB],r=x.p,q=C.a([D.fq8,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cv,new C.ci(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bg,new C.Bw(new B.dYB(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fst)
return C.cw(q,t,A.i9,t,t,A.ag,!1)},
bF9(){return C.cq(new B.dYx(this))}}
B.baE.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AO.gp(0)
d.aX(new C.a8(0,0,0+h,0+g),e)
w=new C.ez()
w.dl(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.N()
e.saq(new C.bS(A.A,0.5,A.x,i,0,C.a([A.K,A.aO.j(0.35),A.K],x.O),D.dbc,i).av(0,C.bQ(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.N()
e.saq(D.ek8.av(0,C.bQ(g,p)))
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
n.F(new C.bE())
s=C.N()
s.r=A.ak.gp(0)
d.aQ(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=C.d9(u,1,i,C.S(u).c),s=u.$ti,u=new C.bR(u,u.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
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
f.d=A.bQ
f.r=A.ct.j(0.9).gp(0)
d.aQ(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mK
d.ae(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
au(d){return!0}}
B.W_.prototype={
S(){return new B.bkw(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkw.prototype={
Z(){this.a1()
this.ll()},
lD(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qi[l.e],i=D.Qi[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mH,k,k,k,new B.etg(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.brw(f,g,v,k),A.f6),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GT(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hK,A.L,k,k)
o=B.GT(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.uU,A.L,k,k),A.bC,C.d(p+": "+B.GT(w*2)+" km wide. "+r+": "+B.GT(h*2)+" km wide.",k,k,k,k,k,k,A5.Jr,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bvc,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Qi[m]
r.push(new B.dB(w.a,l.e===m,new B.eth(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Qi[m]
w.push(new B.dB(s.a,l.f===m,new B.eti(l,m),k,C.b0(s.c),k))}return B.jL(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ex(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eV(r,"FIRST",k),new B.eV(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.brw.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.X6.gp(0)
d.aX(new C.a8(0,0,0+h,0+g),w)
v=new C.ez()
v.dl(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.f_R(d)
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
d.ae(l,n+3,w)
k=C.fN(i,i,i,i,C.cX(i,i,i,i,i,i,i,i,i,D.fbD,s.a),A.a4,A.c4,i,A.dL,A.c3)
k.eh()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a3(d,l.ad(0,new C.u(-w/2,h)))
j=C.fN(i,i,i,i,C.cX(i,i,i,i,i,i,i,i,i,D.feY,t.a),A.a4,A.c4,i,A.dL,A.c3)
j.eh()
t=j.b
h=t.c
t=t.a.c
j.a3(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
au(d){return!0}}
B.aLA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxa.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvD()}}
B.aM8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxo.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwb()}}
B.aMb.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxq.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwe()}}
B.PE.prototype={}
B.Uh.prototype={
S(){return B.hR2()}}
B.bjc.prototype={
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
E.dH(70,"",500,0.3,0.5,"sine")}}A.d.br(w,new B.dG6())},
b_9(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb88()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcn()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.PE(t,u,1.2,new C.vM(1,30+A.cH.aj()*40,0.9,0.7).iM()))
B.ll("bell",60+A.k.V(12-u)*2,400,0.35)},
gb88(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dFV(),C.S(m).k("M<1,K>")).ff(0,A.vc),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mH,n,n,n,new B.dFW(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dFX(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fxh(s)+" Suns"
t=B.hH(A.bu,s,"Mass",1,0,new B.dFZ(o),u/t)
u=C.a([new B.dB("Star (10)",!1,new B.dG_(o),n,A.bu,n),new B.dB("Cygnus X-1 (21)",!1,new B.dG0(o),n,A.bu,n),new B.dB("Milky Way core (4 million)",!1,new B.dG1(o),n,A.bu,n),new B.dB("M87 (6.5 billion)",!1,new B.dG2(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lZ:D.Gx
return B.jL(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eV(u,"LIKE",n),new B.eV(C.a([new B.dB("Glowing ring",s,new B.dG3(o),n,A.bu,n),new B.dB("Bent light",r,new B.dG4(o),n,A.bu,n),new B.dB("Music",q,new B.dG5(o),p,A.bu,n),new B.fj(A.ka,"Clear",new B.dFY(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aeL(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f7y,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zT,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.ba2.prototype={
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bhO.gp(0)
b2.aX(new C.a8(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb88()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Rx
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.ar(A.vk,A.fl,d)
n.toString
k=Math.cos(a4)
$.W()
j=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=C.N()
b1.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cQh,null).av(0,C.bQ(u,b0)))
b2.ae(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.N()
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
n=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
n.c=4.2/Math.sqrt(a8)
n.d=A.bQ
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=k.j(0.2).gp(0)
o.z=G.mK
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeR.prototype={}
B.Vc.prototype={
S(){var w=x.r,v=x.g
return new B.bjE(new C.cs(null,x.A),new B.P9(A.cH),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjE.prototype={
Z(){this.a1()
this.a_7()
this.ll()},
a_7(){var w,v,u,t,s,r,q,p,o=this,n=new C.ez()
n.dl(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeR(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aw(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hi()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeR(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwG(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.eap
k.cx=D.eas
w=new C.ez()
w.dl(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeR(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.d9(s,0,C.dG(900,"count",r),C.S(s).c),o=s.$ti,s=new C.bR(s,s.gM(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.d9(u,0,C.dG(900,"count",r),C.S(u).c),r=u.$ti,u=new C.bR(u,u.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dH(110,"",900,0.5,0.45,"sine")},
lD(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aB(0,p.fx)
s=Math.max(0.25,t.gcn())
r=t.eG(0,s).aH(0,0.9/(s*s))
w=p.fy.ad(0,r.aH(0,u))
p.fy=w
v=p.cx.aB(0,r.aH(0,u))
p.cx=v
w=p.fx.ad(0,w.aH(0,u))
p.fx=w
v=p.CW.ad(0,v.aH(0,u))
p.CW=v
q=new B.dX7(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mH,r,r,r,new B.dWY(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bfi(s,r),A.ax),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a86,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d6H[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dB(u.b,o,new B.dWZ(s,u),r,A.h6,r))}l.push(new B.dB("Collide",s.ch,new B.dX_(s),A.yj,A.bU,r))
o=C.a([new B.eV(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hH(A.h6,""+n,"Arms",6,2,new B.dX0(s),n)
l=s.r
A.d.v(o,C.a([n,B.hH(A.h6,A.k.ab(l,1),"Winding",6,0.8,new B.dX1(s),l)],q))}n=s.as
o.push(B.hH(A.h6,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dX2(s),n))
n=s.ax
o.push(B.hH(A.h6,A.k.ab(n,1)+"x","Speed",4,0,new B.dX3(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lZ:D.Gx
o.push(new B.eV(C.a([new B.dB("Dark matter",n,new B.dX4(s),r,A.bu,r),new B.dB("You are here",l,new B.dX5(s),r,A.aM,r),new B.dB("Music",w,new B.dX6(s),t,A.h6,r)],q),r,r))
return B.jL(A.h6,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ex(new C.an(A.Z,r,A.b2,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.bfi.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bjU.gp(0)
a3.aX(new C.a8(0,0,0+a1,0+a2),w)
v=new C.ez()
v.dl(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.aF.j(0.32),A.aF.j(0.12),A.K],x.O),D.cdN,a0).av(0,C.bQ(o,a2)))
a3.ae(o,a2,t)}m=new B.dbB(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.fV.j(0.85),A.aE.j(0.3),A.K],x.O),a0,a0).av(0,C.bQ(o,a2)))
a3.ae(o,a2,t)
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
a3.ae(g,9,a2)
f=C.fN(a0,a0,a0,a0,D.f4A,A.a4,A.c4,a0,A.dL,A.c3)
f.eh()
f.a3(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bla.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bfW.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fV.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.i4.gp(0)
a3.ae(a1,5,w)}},
au(d){return!0}}
B.VW.prototype={
S(){return new B.bkv(new C.cs(null,x.A),new B.P9(A.cH),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkv.prototype={
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
u=A.k.bk(w*4)
if(u!==A.k.bk(t.as))B.ll("bell",60+u*4,500,0.35)
t.as=u}},
gcsh(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gciz(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mH,q,q,q,new B.esv(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ex(C.b3(q,q,q,new B.bqM(r,q),A.f6),r.d),1)
if(r.f==="seasons")w=r.gcsh()
else{w=r.gciz()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.U_,A.L,q,q),A.f,q,q,q,q,q,q,q,K.aio,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yu:A.iO
t=r.Q
s=t?A.lZ:D.Gx
s=C.a([new B.eV(C.a([new B.dB("Seasons",n==="seasons",new B.esw(r),A.yH,A.bv,q),new B.dB("Moon phases",n==="moon",new B.esx(r),A.vP,A.bv,q),new B.dB(u,!1,new B.esy(r),v,A.bv,q),new B.dB("Music",t,new B.esz(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hH(A.bv,D.d60[A.o.E(A.k.bk(n*12),12)],"Month",1,0,new B.esA(r),n)
v=r.z
A.d.v(s,C.a([n,B.hH(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.esB(r),v)],p))}else{p=r.w
s.push(B.hH(A.bv,""+(A.k.bk(p*29.5)+1),"Day of month",1,0,new B.esC(r),p))}p=r.y
s.push(B.hH(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.esD(r),p))
return B.jL(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqM.prototype={
a3(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AO.gp(0)
b9.aX(new C.a8(0,0,0+b5,0+b6),b8)
w=new C.ez()
w.dl(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.c9(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.aZ.gp(0)
b9.hL(u,t)
t=C.N()
t.saq(D.eka.av(0,C.bQ(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).eG(0,p.aB(0,l).gcn())
J.bv(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bhK.gp(0)
b9.ae(A.J,k,s)
J.bv(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.jS(C.bQ(A.J,k)))
b9.pE(0,b7)
b7=i.aH(0,k).aH(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.ekj.av(0,C.bQ(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aH(0,k).aH(0,1.7)
b5=h.aH(0,k).aH(0,1.7)
t=C.N()
t.c=2
t.r=A.c8.gp(0)
b9.bF(b7,b5,t)
t=h.aH(0,k).aH(0,1.7)
b5=C.N()
b5.r=A.c8.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.fN(b4,b4,b4,b4,C.cX(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRQ,b5),A.a4,A.c4,b4,A.dL,A.c3)
f.eh()
f.a3(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.aZ.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.saq(new C.bS(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bdl,D.agj],x.O),D.cY7,b4).av(0,C.bQ(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.baz.gp(0)
b9.ae(a1,a2,r)
J.bv(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.jS(C.bQ(a1,a2)))
b9.pE(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bN.gp(0)
b9.aX(new C.a8(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aB(0,p).eG(0,a1.aB(0,p).gcn())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atm[a5]
a7=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
a7.r=A.aO.j(0.45).gp(0)
a7.z=A.jx
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.bau.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bv(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.jS(C.bQ(a8,a9)))
b9.pE(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCL(new C.u(u,t+a9),b6,new C.aR(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCL(new C.u(u,b5),b6,new C.aR(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bN.gp(0)
b9.aQ(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.aZ.gp(0)
b9.ae(a8,a9,b8)
b3=C.fN(b4,b4,b4,b4,D.f4B,A.a4,A.c4,b4,A.dL,A.c3)
b3.eh()
b3.a3(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aL6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx2.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv7()}}
B.aLv.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx9.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvx()}}
B.aM7.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxn.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwa()}}
var z=a.updateTypes(["~()","Q(tA)","Q(a4r)","aA<~>()","Q(Cu)","F(tA,F)","K(K,tA)","Q(Cq)","Q(Zh)","Q(abr)","Q(v8)","Q(a35)","Q(nq)","Q(a_O)","Q(ace)","F(F)","Uo()","V0()","Ud()","Ve()","Vx()","Vz()","Un()","VU()","W8()","VV()","VR()","Wf()","Um()","Wk()","Q(mC)","VL()","VQ()","aeW(Y,F)","adO(Y,F)","~(a6<@,@>)","F(Cq,Cq)","m(ed)","Q(aeM)","Q(a0w)","Q(CE)","Q(abW)","Q(adS)","Q(abF)","F(F,qN)","F(F,Cu)","m(qN)","~(qN,ai<m>,F)","qN?(Cu)","Q(qN)","t(m,a0j)","Q(PW)","~(AF)","Q(abM)","K(F?)","Wm()","Q(FQ)","Q(ad3)","K(F)","V1()","K(PE)","Q(aak)","Ui()","a8j()","~(x7,m,u,w,K)","~(m,tA)","VO()","Vs(Y)","Nm(Y)","UJ(Y,br<K>,br<K>)","Wq()","V8()","Uj()","V_()","VM()","VZ()","Wj()","VK()","~(m)","cr(ab7)","Q(ab6)","Vf()","W7()","Vg()","Uh()","Vc()","W_()","VW()","UL()","Q(PE)","~(ba)"])
B.fzC.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fpf.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fwn.prototype={
$1(d){var w
if(!this.a.LJ(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fwo.prototype={
$1(d){return d.x},
$S:z+1}
B.fzz.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fzA.prototype={
$1(d){var w
if(!this.a.LJ(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fzB.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e9A.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9B.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e9C.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.io)}},
$S:8}
B.e9N.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e9O.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e9J.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e9H.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dE(0,0,0,d,0,0),new B.e9I(w,this.b,e)))},
$S:1856}
B.e9I.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e9K.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gW9().ajQ(0,u[1],u[2],u[3])
u[4].bM(0,new B.e9F(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dH(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e9G(w.a,v,w.f,w.r))},
$S:0}
B.e9F.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:187}
B.e9G.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bk(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9L.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gW9().aky(t,u[1],s,u[3])
E.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e9E(w.a,v,w.e,w.f))},
$S:0}
B.e9E.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bk(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9M.prototype={
$0(){E.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e9D(w,this.b))},
$S:0}
B.e9D.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e9R.prototype={
$0(){var w=this.a
return w.m(new B.e9Q(w))},
$S:0}
B.e9Q.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e9S.prototype={
$0(){var w=this.a
return w.m(new B.e9P(w))},
$S:0}
B.e9P.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e9T.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.Nz()},
$S:0}
B.e9U.prototype={
$0(){return this.a.Y9(this.b)},
$S:0}
B.e9V.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nz():w.aVO()},
$S:2}
B.e9W.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nz():w.aVO()},
$S:0}
B.epH.prototype={
$2(d,e){return d+e},
$S:1857}
B.eq0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eq_(w,d))},
$S:142}
B.eq_.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eq1.prototype={
$0(){},
$S:0}
B.eq2.prototype={
$0(){},
$S:0}
B.epJ.prototype={
$0(){return this.a.m(new B.epI(this.b,this.c))},
$S:0}
B.epI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.epy.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.epz.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.epA.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.epB.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.epC.prototype={
$1(d){return this.a.db===d},
$S:32}
B.epD.prototype={
$1(d){return this.a.db=d},
$S:28}
B.epE.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.epF.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:28}
B.epG.prototype={
$0(){var w=this.a
return w.m(w.gawn())},
$S:0}
B.epw.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
B.epx.prototype={
$1(d){return this.a.$1(!1)},
$S:128}
B.epv.prototype={
$1(d){return this.a.$1(!1)},
$S:197}
B.epU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgZ(o,p),n)
w=this.b
v=B.bzI("WORLD",w.a,w.c)
u=B.bzI("GRAVITY",C.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c8:A.b_
t=B.bzI("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cu[o.db].d?A.c8:A.c
q=x.p
s=C.a([v,u,t,B.bzI("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bzI("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hH,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bE5(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rt[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mD,"Again",new B.epP(o),A.c,p),new B.fj(A.oX,"Rebuild",new B.epQ(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j4,"Next world",new B.epR(o),A.b_,p))
n.push(B.hmR("Perfect landing!",w,A.b_,v))}if(o.as==="crashed")n.push(B.hmR("Crash!",o.at,A.c8,C.a([new B.fj(A.mD,"Try again",new B.epS(o),A.b_,p),new B.fj(A.oX,"Rebuild",new B.epT(o),A.aM,p)],q)))
return new C.an(A.Z,p,A.b2,A.r,n,p)},
$S:65}
B.epP.prototype={
$0(){var w=this.a
return w.m(w.gawn())},
$S:0}
B.epQ.prototype={
$0(){var w=this.a
return w.m(new B.epM(w))},
$S:0}
B.epM.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epR.prototype={
$0(){var w=this.a
return w.m(new B.epL(w))},
$S:0}
B.epL.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.epS.prototype={
$0(){var w=this.a
return w.m(w.gawn())},
$S:0}
B.epT.prototype={
$0(){var w=this.a
return w.m(new B.epK(w))},
$S:0}
B.epK.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epV.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.epO(v,w))},
$S:0}
B.epO.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.epW.prototype={
$1(d){return this.a.y=d},
$S:9}
B.epX.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.epY.prototype={
$1(d){return this.a.z=d},
$S:9}
B.epZ.prototype={
$0(){var w=this.a
return w.m(new B.epN(w))},
$S:0}
B.epN.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dGy.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hib
if(q==null)q=$.hib=B.cGC()
w=3
return C.b(C.iP(C.a([q,$.qX().bgg("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kI(0,C.cO(J.q(s,1)))
q.m(new B.dGx(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dGx.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dGa.prototype={
$0(){return this.a.bVF(C.aU(J.q(this.b,"group")))},
$S:0}
B.dGb.prototype={
$1(d){return A.a.aY(A.o.fY(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:300}
B.dGz.prototype={
$0(){return B.a8i("kick",0.25)},
$S:0}
B.dGc.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dGd.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dGe.prototype={
$0(){return B.a8i("kick",0.5)},
$S:0}
B.dGf.prototype={
$0(){return E.dH(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
B.dGh.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dGg(u)))u.cx=null
u.go=0},
$S:0}
B.dGg.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ay8(d)},
$S:z+11}
B.dG7.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dG8.prototype={
$0(){var w=this.a
return w.m(w.gc56())},
$S:0}
B.dG9.prototype={
$0(){return this.a.ahr(null)},
$S:0}
B.dGo.prototype={
$0(){var w=this.a.as
return w==null?null:w.f0(0,C.G(["t","shot"],x.N,x.z))},
$S:0}
B.dGp.prototype={
$0(){return this.a.cAX(this.b.a)},
$S:0}
B.dGq.prototype={
$0(){return this.a.ahr(this.b)},
$S:0}
B.dGr.prototype={
$1(d){var w=this.a
return w.m(new B.dGn(w,d))},
$S:6}
B.dGn.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dGs.prototype={
$0(){var w=this.a
return w.m(new B.dGm(w,this.b))},
$S:0}
B.dGm.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dGt.prototype={
$0(){var w=this.a
return w.m(new B.dGl(w))},
$S:0}
B.dGl.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dGu.prototype={
$0(){var w=this.a
return w.m(new B.dGk(w))},
$S:0}
B.dGk.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f0(0,C.G(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ky},
$S:0}
B.dGv.prototype={
$0(){var w=this.a
return w.m(new B.dGj(w))},
$S:0}
B.dGj.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYs()
else w.p2=null},
$S:0}
B.dGw.prototype={
$0(){var w=this.a
return w.m(new B.dGi(w))},
$S:0}
B.dGi.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c1P.prototype={
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
$S:345}
B.c1Q.prototype={
$1(d){var w=new C.rR([],[]).pG(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:759}
B.fiR.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:222}
B.fiS.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:222}
B.fiT.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:222}
B.fj_.prototype={
$1(d){return!J.q(d,0)},
$S:222}
B.fj0.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:222}
B.fj1.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:222}
B.dIJ.prototype={
$1(d){return this.a.at2(0)},
$S:8}
B.dIn.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i3g(),C.S(w).k("M<1,F>")).fP(0)},
$S:0}
B.dIq.prototype={
$1(d){return""+d},
$S:79}
B.dIK.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dIl.prototype={
$1(d){return this.a.at2(this.b)},
$S:8}
B.dIm.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awS(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m5(0.15,0.3))
u=a1.mB(0,d,a1.m5(0.15,0.62))
t=a1.mB(0,"and",a1.m5(0.48,0.46))
s=a1.mB(0,a0,a1.m5(0.82,0.46))
a1=t.a
w.push(new B.nq(v.a,a1,0))
w.push(new B.nq(u.a,a1,1))
w.push(new B.nq(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m5(0.12,0.25))
u=a1.mB(0,d,a1.m5(0.12,0.65))
r=a1.mB(0,"xor",a1.m5(0.46,0.25))
q=a1.mB(0,"and",a1.m5(0.46,0.65))
p=a1.awR(0,a0,a1.m5(0.82,0.25),0)
o=a1.awR(0,a0,a1.m5(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nq(a1,n,0))
m=u.a
w.push(new B.nq(m,n,1))
l=q.a
w.push(new B.nq(a1,l,0))
w.push(new B.nq(m,l,1))
w.push(new B.nq(n,p.a,0))
w.push(new B.nq(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m5(0.15,0.4))
j=a1.mB(0,"not",a1.m5(0.45,0.65))
s=a1.mB(0,a0,a1.m5(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m5(0.82,0.65))
a1=k.a
w.push(new B.nq(a1,s.a,0))
n=j.a
w.push(new B.nq(a1,n,0))
w.push(new B.nq(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m5(0.12,0.25))
g=a1.mB(0,d,a1.m5(0.12,0.7))
f=a1.mB(0,"nor",a1.m5(0.5,0.25))
e=a1.mB(0,"nor",a1.m5(0.5,0.7))
s=a1.mB(0,a0,a1.m5(0.86,0.25))
a1=f.a
w.push(new B.nq(g.a,a1,0))
n=e.a
w.push(new B.nq(n,a1,1))
w.push(new B.nq(h.a,n,0))
w.push(new B.nq(a1,n,1))
w.push(new B.nq(a1,s.a,0))}},
$S:0}
B.dIr.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awS(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Cq(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m5(0.86,0.5))},
$S:0}
B.dIg.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dIh.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+36}
B.dIi.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dIj.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dIk.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acM(this.c)
if(v.ax)B.BQ("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dH(140,"",250,0,0.3,"square")}},
$S:0}
B.dIs.prototype={
$0(){},
$S:0}
B.dIt.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dIu.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dIp.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new B.dIo(v))
w.cy=null},
$S:0}
B.dIo.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dIf.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dID.prototype={
$0(){var w=this.a
return w.m(new B.dIC(w))},
$S:0}
B.dIC.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dIE.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.x=u
return C.aB(A.c7,C.jA(C.b3(w,w,w,new B.bb6(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dIx(v),w,w,w,new B.dIy(v),new B.dIz(v),new B.dIA(v),w,w,w,w,w,w,w,w,w,w,new B.dIB(v),w,w,w,!1,A.a5)},
$S:36}
B.dIB.prototype={
$1(d){return this.a.c6R(d.b)},
$S:50}
B.dIz.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cfk(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axF(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:44}
B.dIA.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dIy.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZf(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new B.dIv(w))
u=t.as
u.toString
v.push(new B.nq(u,w.a,w.b))
C.jX()}}t.z=t.as=null},
$S:38}
B.dIv.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dIx.prototype={
$1(d){return this.a.avE(d.b)},
$S:279}
B.dIF.prototype={
$0(){return this.a.bzW(this.b.a)},
$S:0}
B.dIG.prototype={
$0(){return this.a.at2(this.b.a)},
$S:0}
B.dIH.prototype={
$0(){var w=this.a
return w.m(new B.dIw(w))},
$S:0}
B.dIw.prototype={
$0(){var w=this.a
w.awS(0)
w.ay=null},
$S:0}
B.dII.prototype={
$0(){return this.a.cwD(this.b)},
$S:0}
B.cNo.prototype={
$0(){var w=this,v=null,u=C.fN(v,v,v,v,C.cX(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c4,v,A.dL,A.c3)
u.eh()
return u},
$S:325}
B.dOz.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dOy.prototype={
$0(){return this.a.d=null},
$S:0}
B.dOB.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c02()},
$S:122}
B.dOA.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.fjh.prototype={
$0(){return D.e3r},
$S:z+55}
B.fji.prototype={
$0(){return D.dCz},
$S:z+59}
B.fjj.prototype={
$0(){return D.dzr},
$S:z+62}
B.fju.prototype={
$0(){return D.e2R},
$S:z+63}
B.fjw.prototype={
$0(){return D.dIY},
$S:z+66}
B.fjx.prototype={
$0(){return D.dCu},
$S:z+88}
B.fjy.prototype={
$0(){return D.dCx},
$S:z+17}
B.fjz.prototype={
$0(){return D.dvB},
$S:z+18}
B.fjA.prototype={
$0(){return D.dF2},
$S:z+19}
B.fjB.prototype={
$0(){return D.dGG},
$S:z+20}
B.fjC.prototype={
$0(){return D.dGI},
$S:z+21}
B.fjk.prototype={
$0(){return D.dBG},
$S:z+22}
B.fjl.prototype={
$0(){return D.dLH},
$S:z+23}
B.fjm.prototype={
$0(){return D.e2y},
$S:z+24}
B.fjn.prototype={
$0(){return D.e0A},
$S:z+25}
B.fjo.prototype={
$0(){return D.dKm},
$S:z+26}
B.fjp.prototype={
$0(){return D.e2G},
$S:z+27}
B.fjq.prototype={
$0(){return D.dBF},
$S:z+28}
B.fjr.prototype={
$0(){return D.e2Q},
$S:z+29}
B.fjs.prototype={
$0(){return D.dBH},
$S:z+16}
B.fjt.prototype={
$0(){return D.dGY},
$S:z+31}
B.fjv.prototype={
$0(){return D.dKl},
$S:z+32}
B.f_o.prototype={
$2(d,e){return new B.aeW($.bE9()[e],new B.f_n(e,this.a),null)},
$S:z+33}
B.f_n.prototype={
$0(){var w=this.a,v=F.aEz.h(0,$.bE9()[w].a)
$.arQ=v==null?"music":v
C.a5(this.b,!1).cm(C.ea(new B.f_l(w),!1,null,x.H))},
$S:0}
B.f_l.prototype={
$1(d){return $.bE9()[this.a].e.$0()},
$S:40}
B.f_p.prototype={
$2(d,e){return new B.adO(D.axh[e],new B.f_m(this.a,e),null)},
$S:z+34}
B.f_m.prototype={
$0(){return this.a.d.$1(D.axh[this.b])},
$S:0}
B.f_4.prototype={
$0(){return this.a.as=!0},
$S:0}
B.f_3.prototype={
$0(){return this.a.as=!1},
$S:0}
B.f_2.prototype={
$1(d){var w=this
return new C.e_(new B.f_1(w.a,w.b,w.c,w.d),null)},
$S:19}
B.f_1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fpR,A.au,D.fwn,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aR(12,12)
m=new C.aR(12,12)
m=C.a([new C.bB(1,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e5(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DJ,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iU,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e5(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DJ,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iU,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dmc[l]
j=new C.aR(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bE
f=new C.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aB(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bn(j,j,j,j),d,d,A.n),d,d,d,A.fC,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.f__(a3,p,u,k),d,d,d,d,d,d,!1,A.a5))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.ffF,d,d,d,d,d,d,d,d,d),A.am,new C.ci(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.wG,new B.f_0(t,r,q,u,a2),d))
return new C.D(new C.R(0,0,0,a1.f.d),C.bm(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A4.xW,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
B.f__.prototype={
$0(){var w=this
return w.a.$1(new B.eZZ(w.b,w.c,w.d))},
$S:0}
B.eZZ.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.f_0.prototype={
$0(){var w=this,v=w.a
v.m(new B.eZY(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eZY.prototype={
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
B.f_c.prototype={
$0(){var w=this.a
return w.m(new B.f_b(w))},
$S:0}
B.f_b.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.f_d.prototype={
$0(){return B.qW(this.b,this.a.f,"scene")},
$S:0}
B.f_e.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.ar(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZu().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bS(D.aXR,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:329}
B.f_f.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.eQ(A.A,C.c7(new C.hb(C.a([u.gu0(),u.gZu()],x.dS)),new B.f_a(u,this.b,v),w),A.f,A.e_),w,w,w)},
$S:251}
B.f_a.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu0().x
r===$&&C.c()
w=r<0.9?1:1-B.br5(r,0.9,0.98)
v=s.gZu().x
v===$&&C.c()
u=A.dA.az(0,v)
switch(s.gawT().a){case 0:s=s.bz7(t.b,r,u,t.c)
break
case 1:s=s.bPN(t.b,r,u,t.c)
break
case 2:s=s.cBt(t.b,r,u,t.c)
break
case 3:s=s.bC2(t.b,r,u,t.c)
break
case 4:s=s.bFm(t.b,r,u,t.c)
break
case 5:s=s.bEw(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:227}
B.f_g.prototype={
$2(d,e){var w=C.avg(this.b),v=this.c.d,u=C.ar(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.ar(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cK1(u,A.bE,v,3.5)
u=this.a
w=u.gu0().x
w===$&&C.c()
return C.aa6(C.l2(null,null,null,1,0,new B.f_9(u),A.k.D(w,0,1)),v)},
$S:1861}
B.f_9.prototype={
$1(d){var w=this.a
w.gu0().sp(0,d)
if(w.as)w.m(new B.f_5(w))},
$S:6}
B.f_5.prototype={
$0(){return this.a.as=!1},
$S:0}
B.f_h.prototype={
$0(){var w=this.a
w.gu0().sp(0,0)
w.aga()},
$S:0}
B.f_i.prototype={
$1(d){var w=this.a
w.m(new B.f_8(w,d))
if(w.as)w.aga()},
$S:6}
B.f_8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.f_j.prototype={
$0(){var w=this.a
w.m(new B.f_7(w,this.b))
w.gu0().sp(0,0)
if(w.as)w.aga()},
$S:0}
B.f_7.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.f_k.prototype={
$0(){var w=this.a
return w.m(new B.f_6(w,this.b))},
$S:0}
B.f_6.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eZW.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1862}
B.eZX.prototype={
$1(d){return d.b},
$S:1863}
B.dir.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dis.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dio.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dip.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.diq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dit.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.diu.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.div.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.diw.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dix.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.diy.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.diz.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.diA.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.diB.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.ep1.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eoR.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.eoT.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.eoU.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.eoX.prototype={
$1(d){var w=D.mJ.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.eoY.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.S(q),o=x.dg,n=C.C(new C.eb(new C.cP(new C.a_(q,new B.eoZ(d),p.k("a_<1>")),new B.ep_(r),p.k("cP<1,qN?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.eoZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ep_.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eoV.prototype={
$1(d){return D.mJ.h(0,d.b).c===D.wY},
$S:z+49}
B.eoW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.epr.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v8(0,u)
w.a6g(A.o.am(v,1000))},
$S:8}
B.ep0.prototype={
$0(){},
$S:0}
B.eoN.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
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
B.ep3.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.P,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mJ.h(0,v).b,D.mJ.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fHB,w,C.d(D.mJ.h(0,v).a,w,w,w,w,w,w,A.hv,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.ao8,w,w,w,w,new B.ep2(d),!1,w,w,w,w,w,w,w,D.fz9,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
B.ep2.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ep5.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.edc],x.p)
for(w=0;w<6;++w){v=D.axC[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bTR,u,u,u,u,new B.ep4(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kL,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hv,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.byH,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:27}
B.ep4.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.eoQ.prototype={
$1(d){var w=null
return C.em(C.a([C.bK(!1,A.dh,w,w,!0,w,w,new B.eoO(d),w,w),C.bK(!1,A.DO,w,w,!0,w,w,new B.eoP(d),w,w)],x.p),w,w,F.n9,D.fwy,w,w,w,w,D.fzr,w)},
$S:20}
B.eoO.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.eoP.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.epp.prototype={
$0(){var w=this.a
return w.m(new B.epo(w))},
$S:0}
B.epo.prototype={
$0(){return this.a.r=!1},
$S:0}
B.epq.prototype={
$2(d,e){var w,v,u,t=null,s=new C.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mj(new B.epf(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b70:t
v=C.a([C.b3(u,t,t,new B.bgX(w,v,new B.epg(r),new B.eph(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c7(w,new B.epi(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bH3())
return C.aB(A.c7,C.jA(new C.an(A.Z,t,A.b2,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.epj(r),t,r.gcgD(),t,new B.epk(r),new B.epl(r),new B.epm(r),t,t,t,t,t,t,t,t,t,t,new B.epn(r),t,t,t,!1,A.a5)},
$S:36}
B.epf.prototype={
$0(){return this.a.abS(this.b)},
$S:0}
B.epn.prototype={
$1(d){return this.a.czb(d.b)},
$S:50}
B.epl.prototype={
$1(d){return this.a.cgE(d.b)},
$S:44}
B.epm.prototype={
$1(d){return this.a.cgF(d.b)},
$S:18}
B.epk.prototype={
$1(d){return this.a.b0P()},
$S:38}
B.epj.prototype={
$1(d){return this.a.acy(d.b)},
$S:279}
B.epg.prototype={
$0(){return this.a.z},
$S:648}
B.eph.prototype={
$0(){return this.a.Q},
$S:723}
B.epi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bLl()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=C.a([D.fu1,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.y(p[r],q,D.feo,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hb,q,q,q)},
$S:60}
B.eoS.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e8,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A6.U_,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.U5,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1865}
B.epb.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).ld()},
$S:0}
B.epc.prototype={
$0(){var w=this.a
return w.m(new B.epa(w))},
$S:0}
B.epa.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.epd.prototype={
$0(){var w=this.a
return w.m(new B.ep9(w))},
$S:0}
B.ep9.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.epe.prototype={
$0(){var w=this.a
return w.m(new B.ep8(w))},
$S:0}
B.ep8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ep7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mJ.gdM(D.mJ),w=w.gaf(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.ctZ(p[r]))
return new C.D(I.ahE,C.x(C.a([new C.D(R.ajj,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ep6.prototype={
$0(){return this.a.c6W(this.b)},
$S:0}
B.din.prototype={
$0(){var w=this,v=null,u=C.fN(v,v,v,v,C.cX(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c4,v,A.dL,A.c3)
u.eh()
return u},
$S:325}
B.eB6.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.br(o,new B.eB4(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eB5())},
$S:8}
B.eB4.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eB5.prototype={
$0(){},
$S:0}
B.eAI.prototype={
$0(){},
$S:0}
B.eAH.prototype={
$0(){},
$S:0}
B.eAR.prototype={
$0(){return B.qW(this.b,this.a.d,"spark-painter")},
$S:0}
B.eAT.prototype={
$1(d){return this.a.aZ8(0,d.b)},
$S:44}
B.eAX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aB(0,u).gcn()>2.5}else w=!1
if(w)t.a.push(u)
v.aS0(u)
v.c9Y(u)
return null},
$S:18}
B.eAS.prototype={
$1(d){return this.a.aZ7()},
$S:38}
B.eAY.prototype={
$1(d){return this.a.aZ8(0,d.b)},
$S:23}
B.eAZ.prototype={
$1(d){return this.a.aZ7()},
$S:50}
B.eB_.prototype={
$0(){var w=this.a
return w.m(new B.eAQ(w,this.b))},
$S:0}
B.eAQ.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eB0.prototype={
$0(){var w=this.a
return w.m(new B.eAP(w))},
$S:0}
B.eAP.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eB1.prototype={
$0(){var w=this.a
return w.m(new B.eAO(w,this.b))},
$S:0}
B.eAO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eB2.prototype={
$1(d){var w=this.a
return w.m(new B.eAN(w,d))},
$S:6}
B.eAN.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eB3.prototype={
$0(){var w=this.a
return w.m(new B.eAM(w))},
$S:0}
B.eAM.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eAU.prototype={
$0(){var w=this.a
return w.m(new B.eAL(w))},
$S:0}
B.eAL.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eAV.prototype={
$0(){var w=this.a
return w.m(new B.eAK(w))},
$S:0}
B.eAK.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eAW.prototype={
$0(){var w=this.a
return w.m(new B.eAJ(w,this.b))},
$S:0}
B.eAJ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eHG.prototype={
$0(){return B.qW(this.b,this.a.d,"title")},
$S:0}
B.eHH.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIU().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c0c(v[t],t,s,q,u))
return new C.D(A.fD,C.bU(A.fJ,w,A.t5,0,0),null)},
$S:686}
B.eHI.prototype={
$1(d){return this.a.m(new B.eHF())},
$S:2}
B.eHF.prototype={
$0(){},
$S:0}
B.eHJ.prototype={
$0(){var w=this.a
w.m(new B.eHE(w,this.b))
w=w.gIU()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHE.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eHK.prototype={
$0(){var w=this.a
return w.m(new B.eHD(w,this.b))},
$S:0}
B.eHD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eHL.prototype={
$0(){var w=this.a
return w.m(new B.eHC(w))},
$S:0}
B.eHC.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eHM.prototype={
$0(){var w=this.a
return w.m(new B.eHB(w,this.b))},
$S:0}
B.eHB.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eHN.prototype={
$0(){var w=this.a.gIU()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHO.prototype={
$1(d){var w=this.a
return w.m(new B.eHA(w,d))},
$S:6}
B.eHA.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.elx.prototype={
$1(d){return d.a.aB(0,this.a).gcn()<16},
$S:z+13}
B.ely.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcn()<16||d.a.aB(0,w).gcn()>this.a.r.gamy()*2.2},
$S:z+13}
B.ell.prototype={
$0(){return B.qW(this.b,this.a.d,"orbits")},
$S:0}
B.elm.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.as(e.b,e.d)
q.r=p
w=q.gadO()
v=q.w
u=q.as
t=q.at
s=u==null?A.a3k:q.ckh(u,q.gaWk())
return new C.ex(C.aB(A.c7,C.b3(r,r,r,new B.blj(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eli(q),new B.elj(q),new B.elk(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5),q.d)},
$S:188}
B.elj.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.elk.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eli.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcn()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_O(u,v.gaWk(),v.Q,v.b2o(),C.a([],x.g)))
C.jX()
if(v.ax)E.dH(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:38}
B.eln.prototype={
$1(d){var w=this.a
return w.m(new B.elh(w,d))},
$S:6}
B.elh.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.elp.prototype={
$1(d){var w=this.a
return w.m(new B.elg(w,d))},
$S:6}
B.elg.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.elq.prototype={
$1(d){var w=this.a
return w.m(new B.elf(w,d))},
$S:6}
B.elf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.elr.prototype={
$0(){var w=this.a
return w.m(new B.ele(w))},
$S:0}
B.ele.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.els.prototype={
$0(){var w=this.a
return w.m(new B.eld(w))},
$S:0}
B.eld.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.elt.prototype={
$0(){var w=this.a
return w.m(new B.elc(w))},
$S:0}
B.elc.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.elu.prototype={
$0(){var w=this.a
return w.m(w.gcwg())},
$S:0}
B.elv.prototype={
$0(){var w=this.a
return w.m(w.gbHh())},
$S:0}
B.elw.prototype={
$0(){var w=this.a
return w.m(new B.elb(w))},
$S:0}
B.elb.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.arl(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hi())}},
$S:0}
B.elo.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.eH7.prototype={
$1(d){return this.a.fX$-d.b>6000},
$S:725}
B.eH8.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eH6(d),C.S(w).k("a_<1>")).gM(0)>=3},
$S:725}
B.eH6.prototype={
$1(d){return d.a.aB(0,this.a.a).gcn()<14},
$S:z+53}
B.eGX.prototype={
$0(){return B.qW(this.b,this.a.d,"swarm")},
$S:0}
B.eGY.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ex(C.aB(A.c7,C.b3(w,w,w,new B.bsS(v.e,v.f,v.ax,v.at,v.ay,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eGU(v),new B.eGV(v),new B.eGW(v),w,w,w,w,w,w,w,w,new B.eGM(v),new B.eGN(v),new B.eGO(v),w,w,w,!1,A.a5),v.d)},
$S:188}
B.eGV.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eGW.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eGU.prototype={
$1(d){return this.a.ay=null},
$S:38}
B.eGN.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fX$))
if(w.ch)E.dH(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.ll("flute",7,500,0.3)},
$S:23}
B.eGO.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eGM.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eGZ.prototype={
$0(){var w=this.a
return w.m(new B.eGT(w,this.b))},
$S:0}
B.eGT.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eH_.prototype={
$0(){var w=this.a
return w.m(new B.eGS(w,this.b))},
$S:0}
B.eGS.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eH0.prototype={
$0(){var w=this.a
return w.m(new B.eGR(w))},
$S:0}
B.eGR.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eH1.prototype={
$1(d){var w=this.a
return w.m(new B.eGQ(w,d))},
$S:6}
B.eGQ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eH2.prototype={
$1(d){var w=this.a
return w.m(new B.eGP(w,d))},
$S:6}
B.eGP.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eH3.prototype={
$1(d){var w=this.a
return w.m(new B.eGL(w,d))},
$S:6}
B.eGL.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eH4.prototype={
$1(d){var w=this.a
return w.m(new B.eGK(w,d))},
$S:6}
B.eGK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eH5.prototype={
$1(d){var w=this.a
return w.m(new B.eGJ(w,d))},
$S:6}
B.eGJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dHS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dHR(w,d))},
$S:142}
B.dHR.prototype={
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
v=v.gaf(v)
while(v.C()){u=v.gR(v)
t.n(0,C.v(u.a),A.k.N(C.dU(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dHT.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dHU.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zv(w)>0},
$S:z+14}
B.dHI.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.aA1()},
$S:0}
B.dHL.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eL(w,F.kW,new C.D(A.bB,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hK,w,w,w),A.R,C.E(C.im(!0,w,w,A.y,T.aPc,new B.dHK(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.a0),w)},
$S:48}
B.dHK.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dHJ(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.aZ:A.dn,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jm
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aH("\u2605",n)+A.a.aH("\u2606",3-n),s,s,s,s,s,s,D.fi6,s,s,s))
return C.aB(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a5)},
$S:77}
B.dHJ.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dHP.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacP()
o=C.b3(q,q,q,new B.baN(p.d,w,v,p.gc72(),q),o)
v=p.bYT("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gIe()
t=p.as>=p.gIe()?A.b_:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auR("GOAL",""+w+" / "+u,t),p.auR("STARS",A.a.aH("\u2605",s)+A.a.aH("\u2606",3-s),A.aM)],r),A.m,q,A.hH,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lO)
if(p.Q&&!p.y)s.push(D.aXz)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.b_:A.c8).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b_:A.c8,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gIe()+".",q,q,q,q,q,q,A.hJ,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aH("\u2605",t==null?1:t),q,q,q,q,q,q,D.f8z,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mD,"Try again",new B.dHM(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j4,"Next level",new B.dHN(p),A.b_,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.Wt,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aB(A.c7,new C.an(A.Z,q,A.b2,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dHO(p),q,q,q,q,!1,A.a5)},
$S:36}
B.dHO.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fX$
E.dH(180,"",200,1,0.4,"sine")
C.jl()},
$S:23}
B.dHM.prototype={
$0(){var w=this.a
return w.m(w.gb53())},
$S:0}
B.dHN.prototype={
$0(){var w=this.a
return w.aZ9(w.r+1)},
$S:0}
B.dHQ.prototype={
$0(){var w=this.a
return w.m(w.gb53())},
$S:0}
B.cMW.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.N()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=C.N()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=C.N()
v.r=f.j(0.25).gp(0)
v.z=A.lA
w.ae(d,e*0.5,v)},
$S:726}
B.eh0.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcPF()?this.a.csl(w,v,d.b):w.aB(0,v).gcn())<24},
$S:z+56}
B.ehp.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.ehe.prototype={
$0(){var w=this.a
return w.m(new B.eh5(w))},
$S:0}
B.eh5.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ehf.prototype={
$0(){return B.qW(this.b,this.a.d,"marble-music")},
$S:0}
B.ehg.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ex(C.aB(A.c7,C.b3(w,w,w,new B.bhR(v.e,v.f,v.at,v.ax,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ehb(v),new B.ehc(v),new B.ehd(v),w,w,w,w,w,w,w,w,w,w,new B.eh4(v),w,w,w,!1,A.a5),v.d)},
$S:188}
B.eh4.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_f(w)
u.e.push(new B.FQ(w,w,v,u.aPB(v)))
if(u.ay)B.ll(u.z,v+12,700,0.5)}if(u.x==="erase")u.aSg(d.b)},
$S:50}
B.ehc.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.ehd.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aSg(d.b)},
$S:18}
B.ehb.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcn()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_f(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FQ(w,t,v,u.aPB(v)))
if(u.ay)B.ll(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:38}
B.ehh.prototype={
$0(){var w=this.a
return w.m(new B.eha(w,this.b))},
$S:0}
B.eha.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.ehi.prototype={
$0(){var w=this.a
return w.m(new B.eh9(w,this.b))},
$S:0}
B.eh9.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ehj.prototype={
$0(){var w=this.a
return w.m(new B.eh8(w,this.b))},
$S:0}
B.eh8.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ehk.prototype={
$1(d){var w=this.a
return w.m(new B.eh7(w,d))},
$S:6}
B.eh7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ehl.prototype={
$0(){var w=this.a
return w.m(new B.eh6(w))},
$S:0}
B.eh6.prototype={
$0(){return this.a.ayx("stairs")},
$S:0}
B.ehm.prototype={
$0(){var w=this.a
return w.m(new B.eh3(w))},
$S:0}
B.eh3.prototype={
$0(){return this.a.ayx("pinball")},
$S:0}
B.ehn.prototype={
$0(){var w=this.a
return w.m(new B.eh2(w))},
$S:0}
B.eh2.prototype={
$0(){return this.a.ayx("random")},
$S:0}
B.eho.prototype={
$0(){var w=this.a
return w.m(new B.eh1(w))},
$S:0}
B.eh1.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ekV.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ekW.prototype={
$0(){var w=this.b,v=new B.adz(this.a.a,this.c)
v.c=w.fX$
return w.e.push(v)},
$S:0}
B.el2.prototype={
$0(){var w=this.a
return w.m(new B.el1(w))},
$S:0}
B.el1.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.el3.prototype={
$0(){return B.qW(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.el4.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.as(e.b,e.d)
if(!u.f){u.f=!0
u.aR0()}w=u.w
return new C.ex(C.aB(A.c7,C.b3(v,v,v,new B.blk(u.e,u.gaZb(),6,u.gcmn(),u.gcsP(),u.fX$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.el0(u),v,v,v,!1,A.a5),u.d)},
$S:188}
B.el0.prototype={
$1(d){return this.a.c74(d.b)},
$S:50}
B.el5.prototype={
$1(d){var w=this.a
return w.m(new B.el_(w,d))},
$S:6}
B.el_.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.el6.prototype={
$0(){var w=this.a
return w.m(new B.ekZ(w,this.b))},
$S:0}
B.ekZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.el7.prototype={
$0(){var w=this.a
return w.m(new B.ekY(w,this.b))},
$S:0}
B.ekY.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.el8.prototype={
$0(){var w=this.a
return w.m(w.gbLh())},
$S:0}
B.el9.prototype={
$0(){var w=this.a
return w.m(new B.ekX(w))},
$S:0}
B.ekX.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adz(v.aw(6),v.aj()))},
$S:0}
B.ela.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.fzU.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:139}
B.ekp.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eko(w,d))},
$S:142}
B.eko.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.ekb.prototype={
$2(d,e){var w=this.b
if(A.o.am(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:139}
B.ek5.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b9G(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ek6.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.eka.prototype={
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
p=D.wi.h(0,v[u].a).a
o=w.ajn(u)
v=D.wi.h(0,v[t].a).a
n=w.ajn(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.w6("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaZh()&&w.x.L(0,w.d)){B.w6("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.w3("molecule_maker",C.G(["done",m],x.N,x.z))}}}},
$S:0}
B.ek9.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ek7(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bM(0,new B.ek8(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ek7.prototype={
$1(d){var w=this.a
return A.o.am(d,100)===w||A.o.E(d,100)===w},
$S:32}
B.ek8.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:139}
B.ekj.prototype={
$1(d){return""+d.b+" "+D.wi.h(0,d.a).c.toLowerCase()},
$S:424}
B.ekk.prototype={
$0(){var w=this.a
return w.m(new B.eki(w))},
$S:0}
B.eki.prototype={
$0(){var w=this.a;++w.d
w.awY(0)},
$S:0}
B.ekl.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.as(e.b,e.d)
return C.aB(A.c7,C.b3(w,w,w,new B.biy(v.e,v.f,v.r,v.gcDD(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eke(v),new B.ekf(v),new B.ekg(v,e),w,w,w,w,w,w,w,w,w,w,new B.ekh(v),w,w,w,!1,A.a5)},
$S:36}
B.ekh.prototype={
$1(d){return this.a.c7r(d.b)},
$S:50}
B.ekf.prototype={
$1(d){var w=this.a
return w.w=w.aZi(d.b)},
$S:44}
B.ekg.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ekc(w,v,d,this.b))},
$S:18}
B.ekc.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.eke.prototype={
$1(d){return this.a.w=null},
$S:38}
B.ekm.prototype={
$0(){var w=this.a
return w.m(new B.ekd(w,this.b))},
$S:0}
B.ekd.prototype={
$0(){var w=this.a
w.d=this.b
w.awY(0)},
$S:0}
B.ekn.prototype={
$0(){return this.a.c7l(0,this.b.a)},
$S:0}
B.dqx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.am(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).eG(0,Math.max(h.gcn(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bQ
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:139}
B.dQD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dQC(w,d))},
$S:142}
B.dQC.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dQs.prototype={
$0(){var w,v,u=J.e2(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aw2[w.aw(4)]
return A.d.h3(u)},
$S:22}
B.dQr.prototype={
$1(d){return B.h36(d)==="*"},
$S:3}
B.dQt.prototype={
$1(d){return d!==this.a},
$S:3}
B.dQq.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.w3("dna_lab",C.G(["best",r],x.N,x.z))}r=s.d
B.w6("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga9h()[r]+" codes for "+C.v(D.CI.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b1l()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.CI.h(0,w[u]))
r="Protein built: "+A.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.w6("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dQB.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dn:e,u=C.n(8),t=f?C.I(A.aZ,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.aZ:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mw,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1869}
B.dQw.prototype={
$1(d){var w=D.dq2.h(0,d)
return w==null?A.c:w},
$S:727}
B.dQx.prototype={
$0(){var w=this.a
return w.m(new B.dQv(w,this.b))},
$S:0}
B.dQv.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.awe()},
$S:0}
B.dQy.prototype={
$0(){var w=this.a
return w.m(new B.dQu(w))},
$S:0}
B.dQu.prototype={
$0(){var w=this.a;++w.e
w.awe()},
$S:0}
B.dQz.prototype={
$0(){return this.a.aZg(this.b)},
$S:0}
B.dQA.prototype={
$0(){return this.a.aZg(this.b)},
$S:0}
B.dTs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTr(w,d))},
$S:142}
B.dTr.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dTf.prototype={
$0(){},
$S:0}
B.dTe.prototype={
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
B.dTg.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dTk.prototype={
$1(d){var w=this.a
return w.m(new B.dTj(w,d))},
$S:6}
B.dTj.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dTl.prototype={
$1(d){var w=this.a
return w.m(new B.dTi(w,d))},
$S:6}
B.dTi.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dTm.prototype={
$1(d){var w=this.a
return w.m(new B.dTh(w,d))},
$S:6}
B.dTh.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dTn.prototype={
$0(){return this.a.aav("drought")},
$S:0}
B.dTo.prototype={
$0(){return this.a.aav("disease")},
$S:0}
B.dTp.prototype={
$0(){return this.a.aav("foxes")},
$S:0}
B.dTq.prototype={
$0(){return this.a.aav("rabbits")},
$S:0}
B.d5E.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.ez()
k.dl(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.jM(new C.et(e,l,l,A.cP,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c4,new C.jv(1),l,l,l,l,A.c3,l)
n.eh()
n.a3(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1871}
B.d5G.prototype={
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
l.e=A.fG
this.c.aQ(u,l)},
$S:1872}
B.d5F.prototype={
$3(d,e,f){var w=null,v=C.fN(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
v.a3(this.a,new C.u(f,this.b.b+2))},
$S:1873}
B.bGe.prototype={
$2(d,e){return d+e.a*e.b},
$S:1874}
B.ftM.prototype={
$2(d,e){return e.a-d.a},
$S:1875}
B.dE2.prototype={
$2(d,e){return d+e},
$S:73}
B.dEf.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dEe(v,A.k.D((v.gvY()-w[v.e].gv_())/Math.max(w[v.e].gv_(),8),-1,1)*0.32,u))},
$S:8}
B.dEe.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dEg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dEd(w,d))},
$S:142}
B.dEd.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dE3.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dE8.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1876}
B.dE9.prototype={
$0(){var w=this.a
return w.m(new B.dE7(w))},
$S:0}
B.dE7.prototype={
$0(){var w=this.a;++w.e
A.d.h7(w.f,0,5,0)},
$S:0}
B.dEa.prototype={
$2(d,e){var w=null,v=this.a
return C.aB(A.c7,C.b3(w,w,w,new B.b9S(v.w,this.b.a,v.f,v.gvY()===v.d[v.e].gv_(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dE6(v,e),w,w,w,!1,A.a5)},
$S:36}
B.dE6.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.czo(v-1)},
$S:50}
B.dEb.prototype={
$0(){var w=this.a
return w.m(new B.dE5(w,this.b))},
$S:0}
B.dE5.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h7(w.f,0,5,0)},
$S:0}
B.dEc.prototype={
$0(){var w=this.a
return w.m(new B.dE4(w))},
$S:0}
B.dE4.prototype={
$0(){return A.d.h7(this.a.f,0,5,0)},
$S:0}
B.cFt.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bu(C.c9(new C.u(d,s),20,w),A.qu)
$.W()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.eA(r),p)
p.delete()
q=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.c=1.2
q.r=A.dC.gp(0)
p=q.H()
u.drawRRect(C.eA(r),p)
p.delete()
B.fsH(v,"1",new C.u(d,s),A.bk,11)}},
$S:1877}
B.dXv.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dXu(w,v))},
$S:8}
B.dXu.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dXw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dXt(w,d))},
$S:142}
B.dXt.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dXl.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dXp.prototype={
$0(){var w=this.a
return w.m(new B.dXo(w))},
$S:0}
B.dXo.prototype={
$0(){return this.a.r++},
$S:0}
B.dXq.prototype={
$0(){var w=this.a
return w.m(new B.dXn(w,this.b))},
$S:0}
B.dXn.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dXr.prototype={
$1(d){var w=this.a
return w.m(new B.dXm(w,d))},
$S:6}
B.dXm.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dXs.prototype={
$1(d){return this.a.c7s(this.b,d)},
$S:6}
B.ddE.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQM(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.ar(h,A.c,i?0.1:0.35)
v.toString
u=C.ar(h,A.w,0.5)
u.toString
w.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bQ(d,e+6)))
m.aQ(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aQ(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.hQ.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1878}
B.ddF.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fsH(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1879}
B.dIe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dId(w,d))},
$S:142}
B.dId.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dHX.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jK(90-(w-65)):d},
$S:14}
B.dI5.prototype={
$1(d){return this.a.m(new B.dI4())},
$S:2}
B.dI4.prototype={
$0(){},
$S:0}
B.dI6.prototype={
$1(d){return this.a.m(new B.dI3())},
$S:2}
B.dI3.prototype={
$0(){},
$S:0}
B.dI7.prototype={
$0(){var w=this.a
return w.m(new B.dI2(w))},
$S:0}
B.dI2.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXU()},
$S:0}
B.dI8.prototype={
$0(){var w=this.a
return w.m(new B.dI1(w))},
$S:0}
B.dI1.prototype={
$0(){return this.a.f=0},
$S:0}
B.dI9.prototype={
$0(){var w=this.a
return w.m(new B.dI0(w))},
$S:0}
B.dI0.prototype={
$0(){return this.a.f=1},
$S:0}
B.dIa.prototype={
$0(){var w=this.a
return w.m(new B.dI_(w,this.b))},
$S:0}
B.dI_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIb.prototype={
$1(d){var w=this.a
return w.m(new B.dHZ(w,d))},
$S:6}
B.dHZ.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dIc.prototype={
$1(d){var w=this.a
w.m(new B.dHY(w,d))
if(w.ga9L()&&w.Q.L(0,w.x)){B.w6("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.w3("cipher_lab",C.G(["done",w],x.N,x.z))}},
$S:6}
B.dHY.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bMF.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bMQ.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bML.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bMR.prototype={
$1(d){return this.a.LJ(d)&&!d.x},
$S:z+1}
B.bMS.prototype={
$2(d,e){return Math.max(d,this.a.aAv(e))},
$S:z+6}
B.bMU.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMV(w))},
$S:z+5}
B.bMV.prototype={
$0(){return this.a.a},
$S:99}
B.bMT.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bMW.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMX(w))},
$S:z+5}
B.bMX.prototype={
$0(){return this.a.a},
$S:99}
B.bMH.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMI(w))},
$S:z+5}
B.bMI.prototype={
$0(){return this.a.a},
$S:99}
B.bMG.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bMJ.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMK(w))},
$S:z+5}
B.bMK.prototype={
$0(){return this.a.a},
$S:99}
B.bME.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bMY.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bMM.prototype={
$1(d){return d!==this.b&&this.a.aGF(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bMP.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bMO.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bMN.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHs.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bHt.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cm9.prototype={
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
$S:187}
B.fLg.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1880}
B.fLi.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bQ
return w},
$S:1881}
B.fLj.prototype={
$5(d,e,f,g,h){return C.bu(new C.a8(d,e,d+f,e+g),new C.aR(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1882}
B.fLh.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a9(A.b1,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1883}
B.bH6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bH7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bH5(w))},
$S:0}
B.bH5.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bH8.prototype={
$0(){return C.a([],x.ey)},
$S:1884}
B.bH9.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:377}
B.bHa.prototype={
$0(){var w,v,u
J.bEi(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cw(v))if(B.h3z(v.b))w.b0i(v)
else w.a_v(v)
else{u=w.a.c.bd3(v)
w.ae0(u==null?"The "+$.qj().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bH4.prototype={
$1(d){return new C.e_(new B.bH2(this.a,this.b),null)},
$S:19}
B.bH2.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bH3(this.a,v,e),t=$.qj(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kl,w,w,w),q=C.aH(w,w,w,w,D.bKu,w,w,w,new B.bGZ(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xY,C.x(C.a([r,A.au,D.fIC,A.R,C.B(C.a([q,C.E(C.l2(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bRa,w,w,w,new B.bH_(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b8,C.bK(!1,D.fmd,w,w,!0,w,w,new B.bH0(u),w,w),C.bK(!1,A.wG,w,w,!0,w,w,new B.bH1(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:90}
B.bH3.prototype={
$1(d){var w=this.a
w.m(new B.bGX(this.b,d))
this.c.$1(new B.bGY())
w.a.toString},
$S:6}
B.bGX.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGY.prototype={
$0(){},
$S:0}
B.bGZ.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bH_.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bH0.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bH1.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bHp.prototype={
$2(d,e){var w
if(d==="short"){E.dH(1800,"",120,0,0.55,"noise")
E.dH(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.ae0("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ae0("\u26a0 Overloaded! The "+$.qj().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zJ(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ae0("Burnt out! "+e.ay)
E.dH(140,"",320,0,0.6,"noise")
E.dH(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bHq.prototype={
$0(){},
$S:0}
B.bGA.prototype={
$0(){},
$S:0}
B.bHr.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bHo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aB(A.c7,C.b3(p,p,p,new B.aiI(w,v,u,t,s,r==null?A.j7:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHi(o),new B.bHj(o),new B.bHk(o),p,p,p,p,p,p,p,p,p,p,new B.bHl(o),p,p,p,!1,A.a5)],q)
if(o.a.c.a.length===0)n.push(D.b6j)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aB(p,C.p(p,C.B(C.a([D.fkt,C.E(C.d(w,p,p,p,p,p,p,D.fcE,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.bbK,p,u,v,p,p,A.n),p,p,p,p,A.nj,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHm(o),p,p,p,p,p,p,!1,A.a5),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZl(C.B(C.a([D.bAM,new B.fj(A.Gi,"Cut wire",new B.bHn(o),A.c8,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.chb(w),p,p,10,10,p,p))}return C.jA(new C.an(A.Z,p,A.b2,A.r,n,p),A.r,p)},
$S:350}
B.bHj.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7k(s)
if(r!=null){t.m(new B.bHg(t,r,d))
return}w=t.b0Z(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new B.bHh(t,w))}},
$S:44}
B.bHg.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bHh.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bHk.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bHe(w,d))
else if(w.w!=null)w.m(new B.bHf(w,d.b.ad(0,w.x)))},
$S:18}
B.bHe.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bHf.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bHi.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7k(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aky(u.a,u.b,v.a,v.b)!=null)E.dH(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adZ()},
$S:38}
B.bHl.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0Z(v)
if(u!=null){w.m(new B.bHc(w,u))
if(D.m5.ai(0,u.b))w.crO(u)
w.a.toString
return}w.m(new B.bHd(w,w.cEu(v)))},
$S:50}
B.bHc.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dH(200,"",70,0,0.2,"saw")}},
$S:0}
B.bHd.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bHm.prototype={
$0(){var w=this.a
return w.m(new B.bHb(w))},
$S:0}
B.bHb.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bHn.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dH(300,"",50,0,0.35,"noise")
w.adZ()},
$S:0}
B.bGB.prototype={
$0(){return this.a.bp0(this.b)},
$S:0}
B.bGU.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f79,w,w,w),C.E(C.l2(this.b.d,w,w,g,h,new B.bGW(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1885}
B.bGW.prototype={
$1(d){var w=this.a
w.m(new B.bGV(this.b,d))
w.a.toString},
$S:6}
B.bGV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGH.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dH(260,"",70,0,0.35,"noise")
w.adZ()},
$S:0}
B.bGI.prototype={
$0(){var w=this.a
return w.m(new B.bGG(w))},
$S:0}
B.bGG.prototype={
$0(){return this.a.d=null},
$S:0}
B.bGJ.prototype={
$0(){this.a.m(new B.bGF(this.b,this.c))
E.dH(900,"",40,0,0.3,"noise")},
$S:0}
B.bGF.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bGM.prototype={
$0(){return this.a.b0i(this.b)},
$S:0}
B.bGN.prototype={
$0(){return this.a.a_v(this.b)},
$S:0}
B.bGO.prototype={
$0(){return this.a.a19(this.b)},
$S:0}
B.bGP.prototype={
$0(){var w=this.a
w.m(new B.bGE(this.b,this.c))
w.a.toString},
$S:0}
B.bGE.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGQ.prototype={
$0(){var w=this.a
w.m(new B.bGD(this.b,this.c))
w.a.toString},
$S:0}
B.bGD.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGR.prototype={
$0(){var w=this.a
w.m(new B.bGC(this.b,this.c))
w.a.toString},
$S:0}
B.bGC.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGS.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGT.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGK.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGL.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fj2.prototype={
$1(d){return d.aGi("bulb")},
$S:z+2}
B.fj3.prototype={
$1(d){return d.pP(0,"switch")&&d.aGi("bulb")},
$S:z+2}
B.fj4.prototype={
$1(d){return A.d.b4(d.a,new B.fiQ())},
$S:z+2}
B.fiQ.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fj5.prototype={
$1(d){return d.pP(0,"resistor")&&A.d.b4(d.a,new B.fiP())},
$S:z+2}
B.fiP.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fj6.prototype={
$1(d){return!d.pP(0,"battery")&&d.aGi("bulb")},
$S:z+2}
B.fiU.prototype={
$1(d){return A.d.b4(d.a,new B.fiO())},
$S:z+2}
B.fiO.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiV.prototype={
$1(d){return A.d.b4(d.a,new B.fiN())},
$S:z+2}
B.fiN.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fiW.prototype={
$1(d){return A.d.b4(d.a,new B.fiM())},
$S:z+2}
B.fiM.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fiX.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fiK())&&A.d.b4(w,new B.fiL())&&d.pP(0,"buck")},
$S:z+2}
B.fiK.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fiL.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fiY.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fiI())&&A.d.b4(w,new B.fiJ())},
$S:z+2}
B.fiI.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fiJ.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiZ.prototype={
$1(d){return A.d.b4(d.a,new B.fiH())},
$S:z+2}
B.fiH.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dTA.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dTJ.prototype={
$1(d){var w=this.a.d
return w.aGF(d)&&w.Cw(d)},
$S:z+1}
B.dTK.prototype={
$1(d){return d.x},
$S:z+1}
B.dTL.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dTM.prototype={
$0(){},
$S:0}
B.dTz.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.fBl,A.au,D.fm9,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Ql[v]
t=A.c.j(0.06)
s=new C.aR(14,14)
r=new C.az(A.bE,1,A.q,-1)
n.push(C.aB(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.kk,q,q,q,q,q,q,q,q,q),A.bC,new C.y(u.b,q,D.fdo,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bn(s,s,s,s),q,q,A.n),q,q,q,A.cv,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dTy(w,d,u),q,q,q,q,q,q,!1,A.a5))}return C.eL(q,F.kW,new C.D(A.bP,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.a0),q)},
$S:48}
B.dTy.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dTx(w,this.c))
E.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dTx.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bia()},
$S:0}
B.dTv.prototype={
$1(d){return new B.Vs(this.a.d,null)},
$S:z+67}
B.dTw.prototype={
$0(){},
$S:0}
B.dTI.prototype={
$1(d){return new C.e_(new B.dTH(this.a),null)},
$S:19}
B.dTH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahU(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b_:A.aO
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fyE,A.b8,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.by(C.n(4),C.m6(A.bE,m,m,5,m,w.a/11,new C.lZ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fpe)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.TY,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DK,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dTF(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aR(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dn,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aB(m,C.p(m,new C.ci(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a8B,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bg,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bn(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nj,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dTG(l,o,e),m,m,m,m,m,m,!1,A.a5))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A4.xW,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:90}
B.dTF.prototype={
$0(){var w=this.a
w.m(new B.dTD(w))
this.b.$1(new B.dTE())
w.EX()},
$S:0}
B.dTD.prototype={
$0(){var w=this.a
$.ahU()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dTE.prototype={
$0(){},
$S:0}
B.dTG.prototype={
$0(){var w=this.a
w.m(new B.dTB(w,this.b))
this.c.$1(new B.dTC())
w.EX()},
$S:0}
B.dTB.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dTC.prototype={
$0(){},
$S:0}
B.dTO.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dTP.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mg("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).cm(C.ea(new B.dTN(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dTN.prototype={
$1(d){C.lq("construction")
return Ak.hH8()},
$S:z+68}
B.dTQ.prototype={
$0(){return B.ht8(this.a,"ELECTRONICS LAB",this.b,A.aO)},
$S:0}
B.dTR.prototype={
$0(){var w=this.a
return w.m(w.d.gcVG())},
$S:0}
B.dTS.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grI(v))
w.EX()},
$S:0}
B.cD0.prototype={
$2(d,e){var w=null,v=this.a.gawZ().x
v===$&&C.c()
return C.b3(w,w,w,new B.b9_(v,w),A.ax)},
$S:71}
B.cD_.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cQ(v,u,v+e,u))
w.F(new C.cQ(v,u,v,u+e))
w.F(new C.cQ(v,u,v-e,u))
w.F(new C.cQ(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aQ(w,t)},
$S:448}
B.fPZ.prototype={
$3(d,e,f){return new B.UJ(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fQ_.prototype={
$4(d,e,f,g){var w=x.Y
return new C.d0(e,!1,C.is(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
B.dPw.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dPv.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYH(o):q.bB5(o,p),m=x.p
p=C.a([C.qm(new C.nj(n,new C.cy(p,x.aC)),A.pX,C.rW(),A.bd,A.bd,new B.dPt())],m)
n=t.d
if(n){w=A.k.E(q.gRR(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.at],m)
if(w)m.push(D.bAx)
else m.push(A.b8)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b_:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.ne,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uP)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.KD,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wv)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.KD,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aB(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dPu(q),s,s,s,s,s,s,!1,A.a5),s,s,0,0,s,s))
return C.by(r,new C.an(A.Z,s,A.b2,A.r,p,s),A.aq)},
$S:323}
B.dPt.prototype={
$2(d,e){var w=x.Y
return new C.d0(e,!1,C.is(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:360}
B.dPu.prototype={
$0(){var w=this.a
return w.m(new B.dPs(w))},
$S:0}
B.dPs.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPr.prototype={
$0(){var w=this.a
return w.m(new B.dPq(w,this.b))},
$S:0}
B.dPq.prototype={
$0(){return this.a.e=A.d.cH(F.kc,this.b)},
$S:0}
B.dPp.prototype={
$0(){var w=this.a
return w.m(new B.dPo(w))},
$S:0}
B.dPo.prototype={
$0(){return this.a.e=0},
$S:0}
B.dPk.prototype={
$0(){var w=this.a
return w.m(new B.dPj(w))},
$S:0}
B.dPj.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fH1,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eH,p,p,p,D.fjl,p,p,p),1),C.d(A.a.aY(A.o.u(C.dk(new C.T(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.o.u(C.h4(new C.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qB,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l_,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bvb(w.gRR(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.aZ,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aB(p,C.p(p,p,A.f,p,p,A.abH,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dPm(w),p,p,p,p,p,p,!1,A.a5),A.eg,C.p(p,p,A.f,p,p,A.abN,p,12,p,p,p,p,p,12),A.eg,C.p(p,p,A.f,p,p,D.b1J,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.kc[o].a,p,1,A.a2,p,p,p,A.a8s,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fs,p,p,p)
r=w.e
r.toString
v.push(C.bW(0,new C.D(D.bxh,C.p(p,C.by(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aeF(r,w.gRR(),p),A.f6),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.diD,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.aZ,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jr,w.auT(F.kc[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lr,p,p,p),p,p,p),p,p,0,0,p,p))
return C.by(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.Z,p,A.b2,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.LO,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:323}
B.dPm.prototype={
$0(){var w=this.a
return w.m(new B.dPl(w))},
$S:0}
B.dPl.prototype={
$0(){return this.a.e=null},
$S:0}
B.ecA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ecz(w,d))},
$S:142}
B.ecz.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h3H(v)},
$S:0}
B.ecB.prototype={
$0(){},
$S:0}
B.ecq.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h3H(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.ecr.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvw().r){C.jX()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.w6("click",s.c+s.d,60,0.4)
if(B.htj(r.gvw(),q).b.a===r.gvw().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.w3("laser_maze",C.G(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BQ("bell",D.apG,700,0.45)
for(q=r.gvw().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.am(t,7)+0.5)*p+v),0))}}},
$S:0}
B.ecu.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aB(A.c7,C.b3(s,s,s,new B.bh1(r.gvw(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ecs(r),s,s,s,!1,A.a5),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQM,s,s,s),C.d(""+u.a+"/"+r.gvw().c.a+" \u2605   mirrors "+w.a+"/"+r.gvw().r,s,s,s,s,s,s,R.a89,s,s,s)],t),A.m,s,A.hH,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fnV("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b_,C.a([new B.fj(A.j4,"Next level",new B.ect(r),A.b_,s)],t)))
return new C.an(A.Z,s,A.b2,A.r,w,s)},
$S:65}
B.ecs.prototype={
$1(d){return this.a.c7O(d.b)},
$S:50}
B.ect.prototype={
$0(){var w=this.a
return w.ae4(w.d+1)},
$S:0}
B.ecv.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grI(v))},
$S:0}
B.ecw.prototype={
$0(){var w=this.a
return w.ae4(w.d+1)},
$S:0}
B.ecx.prototype={
$0(){var w=this.a
return w.ae4(w.d-1)},
$S:0}
B.ecy.prototype={
$0(){return this.a.ae4(this.b)},
$S:0}
B.diK.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.am(d,7)+0.5)*w)},
$S:728}
B.diN.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fX:A.aL).gp(0)
u.c=7
u.d=A.bQ
r.bF(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bQ
r.bF(w,v,u)},
$S:1887}
B.diL.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:468}
B.diM.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:468}
B.ecT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ecS(w,d))},
$S:142}
B.ecS.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.ecU.prototype={
$0(){},
$S:0}
B.ecE.prototype={
$1(d){return d===0},
$S:116}
B.ecN.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.v(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a8k,s,s,s)
w=r.z==="play"?A.k.dh(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c8:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a89,s,s,s)],v),A.m,s,A.hH,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dn:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.aZ,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.buB,w,s),C.E(C.B(C.a([C.E(new C.D(A.bS,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gczr(),s,s,s,s,s,s,D.aRB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bS,C.x(C.a([C.E(C.b3(s,s,s,new B.bhg(r.f,s),A.f6),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aRB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fnV("Light Mixer","Match each colour with red, green and blue light."+q,A.b7,C.a([new B.fj(A.iO,"Start",new B.ecK(r),A.b_,s)],v)))}if(r.z==="result")w.push(B.fnV(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j4,"Next colour",new B.ecL(r),A.b_,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fnV("Finished! "+q,u,A.b_,C.a([new B.fj(A.mD,"Play again",new B.ecM(r),A.b_,s)],v)))}return new C.an(A.Z,s,A.aa,A.r,w,s)},
$S:65}
B.ecK.prototype={
$0(){var w=this.a
return w.m(new B.ecG(w))},
$S:0}
B.ecG.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ax2()},
$S:0}
B.ecL.prototype={
$0(){var w=this.a
return w.m(w.gc7M())},
$S:0}
B.ecM.prototype={
$0(){var w=this.a
return w.m(new B.ecF(w))},
$S:0}
B.ecF.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ax2()},
$S:0}
B.ecO.prototype={
$1(d){var w=this.a
return w.m(new B.ecJ(w,d))},
$S:6}
B.ecJ.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.ecP.prototype={
$1(d){var w=this.a
return w.m(new B.ecI(w,d))},
$S:6}
B.ecI.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.ecQ.prototype={
$1(d){var w=this.a
return w.m(new B.ecH(w,d))},
$S:6}
B.ecH.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.ecR.prototype={
$0(){var w=this.a
return w.m(w.gc7N())},
$S:0}
B.fjK.prototype={
$0(){return D.e4U},
$S:z+70}
B.fjL.prototype={
$0(){return D.dD6},
$S:z+71}
B.fjM.prototype={
$0(){return D.dzE},
$S:z+72}
B.fjN.prototype={
$0(){return D.dCw},
$S:z+73}
B.fjO.prototype={
$0(){return D.dHt},
$S:z+74}
B.fjP.prototype={
$0(){return D.e0D},
$S:z+75}
B.fjQ.prototype={
$0(){return D.e2P},
$S:z+76}
B.fjR.prototype={
$0(){return D.dGN},
$S:z+77}
B.cgN.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.cgO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hwM(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aR(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dp,16)],t)
n=A.c.j(0.85)
j.push(C.aB(m,C.p(m,new C.an(A.Z,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TX,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lI,m,m,C.x(C.a([new C.y(r.a,m,D.fhX,m,m,m,m,m,m,m,m,m),A.cV,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bn(q,q,q,q),p,new C.a9(A.az,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cgM(d,r),m,m,m,m,m,m,!1,A.a5))}return C.bU(A.bA,j,A.bq,14,14)},
$S:176}
B.cgM.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.cgL(this.b),!1,null,x.H))},
$S:0}
B.cgL.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eM8.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4u(w.f)]},
$S:0}
B.eM4.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cH.aj()*7},
$S:0}
B.eM3.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bQ(0,A.c9)
w.w=""},
$S:0}
B.eM6.prototype={
$0(){var w=this.a
return w.m(new B.eM5(w,this.b))},
$S:0}
B.eM5.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eM7.prototype={
$1(d){return this.a.aZM(0)},
$S:2}
B.dVO.prototype={
$0(){return B.BQ("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dVP.prototype={
$0(){},
$S:0}
B.dVJ.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dVL.prototype={
$0(){return this.a.aZO(this.b)},
$S:0}
B.dVM.prototype={
$0(){var w=this.a
return w.m(new B.dVK(w))},
$S:0}
B.dVK.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dVN.prototype={
$0(){var w=this.a
return w.aZO(w.d)},
$S:0}
B.dGF.prototype={
$2(d,e){return d+e},
$S:82}
B.dGG.prototype={
$0(){},
$S:0}
B.dGA.prototype={
$2(d,e){return d+e},
$S:82}
B.dGD.prototype={
$0(){var w=this.a
return w.m(new B.dGC(w,this.b))},
$S:0}
B.dGC.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dGE.prototype={
$0(){var w=this.a
return w.m(new B.dGB(w))},
$S:0}
B.dGB.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dT4.prototype={
$0(){return B.qW(this.b,this.a.d,"drawing")},
$S:0}
B.dT5.prototype={
$1(d){var w=this.a
return w.m(new B.dT3(w,d))},
$S:44}
B.dT3.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI4(u,v,t))},
$S:0}
B.dT6.prototype={
$1(d){var w=this.a
return w.m(new B.dT2(w,d))},
$S:18}
B.dT2.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dT7.prototype={
$1(d){var w=this.a
return w.m(new B.dT1(w,d))},
$S:23}
B.dT1.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI4(u,v,t))},
$S:0}
B.dT8.prototype={
$0(){var w=this.a
return w.m(new B.dT0(w,this.b))},
$S:0}
B.dT0.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dT9.prototype={
$1(d){var w=this.a
return w.m(new B.dT_(w,d))},
$S:6}
B.dT_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTa.prototype={
$0(){var w=this.a
return w.m(new B.dSZ(w))},
$S:0}
B.dSZ.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dTb.prototype={
$0(){var w=this.a
return w.m(new B.dSY(w))},
$S:0}
B.dSY.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dTc.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.dTd.prototype={
$0(){var w=this.a
return w.m(new B.dSX(w))},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
w.x=D.awx[A.o.E(A.d.cH(D.awx,w.x)+1,4)]},
$S:0}
B.eif.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.eig.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BQ("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.eie(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BQ("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.eie.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.eih.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.eid(w))},
$S:11}
B.eid.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.eil.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aB(w,C.mG(new B.eij(v,e),w,A.bd,A.pX,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eik(v,e),w,w,w,w,w,w,!1,A.a5)},
$S:77}
B.eik.prototype={
$0(){return this.a.c8J(this.b)},
$S:0}
B.eij.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fF(3.141592653589793*e)
m=C.n(16)
w=o?p:D.c_f
if(o)v=q.a.r.t(0,q.b)?A.b_.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b_:A.aZ,A.q,1)
if(o){r=C.dp()
r.fF(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fw(A.A,C.d(u[t],p,p,p,p,p,p,D.ffi,p,p,p),p,r,!0)
u=r}else u=D.fA3
return C.fw(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:131}
B.eim.prototype={
$0(){var w=this.a
return w.m(new B.eii(w,this.b))},
$S:0}
B.eii.prototype={
$0(){var w=this.a
w.d=this.b.a
w.asd()},
$S:0}
B.ein.prototype={
$0(){var w=this.a
return w.m(w.gbJP())},
$S:0}
B.et8.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.et9.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.et6.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.et7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.et5(w))},
$S:11}
B.et5.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eta.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.etb.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.etc.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZN()},
$S:11}
B.etd.prototype={
$0(){return this.a.c8P(this.b)},
$S:0}
B.eHq.prototype={
$1(d){return C.v(d.h(0,1))+","},
$S:69}
B.eHz.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kZ,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.eQ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e_),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1889}
B.eHv.prototype={
$1(d){return this.a.m(new B.eHu())},
$S:2}
B.eHu.prototype={
$0(){},
$S:0}
B.eHw.prototype={
$0(){var w=this.a
return w.m(new B.eHt(w,this.b))},
$S:0}
B.eHt.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eHx.prototype={
$1(d){var w=this.a
return w.m(new B.eHs(w,d))},
$S:6}
B.eHs.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eHy.prototype={
$0(){var w=this.a
return w.m(new B.eHr(w))},
$S:0}
B.eHr.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.egV.prototype={
$0(){},
$S:0}
B.egW.prototype={
$0(){},
$S:0}
B.egO.prototype={
$0(){var w=this.a
return w.m(new B.egN(w))},
$S:0}
B.egN.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a8i("hat",0.6)},
$S:0}
B.egP.prototype={
$0(){var w=this.a
return w.m(new B.egM(w))},
$S:0}
B.egM.prototype={
$0(){this.a.y=1.1
B.ll("bell",36,200,0.4)},
$S:0}
B.egQ.prototype={
$0(){var w=this.a
return w.m(new B.egL(w))},
$S:0}
B.egL.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
B.ll("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.egR.prototype={
$0(){var w=this.a
return w.m(new B.egK(w,this.b))},
$S:0}
B.egK.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.egS.prototype={
$1(d){var w=this.a
return w.m(new B.egJ(w,d))},
$S:6}
B.egJ.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.egT.prototype={
$1(d){var w=this.a
return w.m(new B.egI(w,d))},
$S:6}
B.egI.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.egU.prototype={
$1(d){var w=this.a
return w.m(new B.egH(w,d))},
$S:6}
B.egH.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.ctI.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.ctJ.prototype={
$0(){var w=this.a
return B.ht8(this.b,w.c,w.e,w.d)},
$S:0}
B.fTO.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f7I,v,v,v)
return C.em(C.a([C.bK(!1,D.fpj,v,v,!0,v,v,new B.fTN(d),v,v)],x.p),v,v,F.n9,w,v,v,v,new C.b7(u,new C.az(s,1,A.q,-1)),t,v)},
$S:20}
B.fTN.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.ctE.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctD.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctK.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctF.prototype={
$0(){var w=this.a
A.d.W(w.fu$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
B.ctH.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l7$.a)/1e6,0,0.04)
w.l7$=d
w.fX$=A.o.am(v,1000)
w.lD(u)
if(w.c!=null)w.m(new B.ctG())},
$S:8}
B.ctG.prototype={
$0(){},
$S:0}
B.cgJ.prototype={
$0(){var w=this
return B.ll(w.a,w.b,w.c,w.d)},
$S:1}
B.dYw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dYv(w,d))},
$S:z+79}
B.dYv.prototype={
$0(){return this.a.ctB(this.b)},
$S:0}
B.dXZ.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:693}
B.dXX.prototype={
$0(){return this.a.id=D.a3q},
$S:0}
B.dXY.prototype={
$0(){var w=this.b.a,v=C.S(w).k("a_<1>")
v=C.pj(new C.a_(w,new B.dXW(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dXW.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dXV.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.em(C.a([C.bK(!1,A.pp,w,w,!0,w,w,new B.dXU(d),w,w)],x.p),w,w,F.n9,v,w,w,w,w,D.fA8,w)},
$S:20}
B.dXU.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dYh.prototype={
$0(){return B.qW(this.b,this.a.d,"earth")},
$S:0}
B.dYi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gW6()
r=p.z
o=C.a([C.aB(A.c7,C.b3(q,q,q,new B.bfs(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dY5(p),new B.dY6(p),new B.dY7(p),q,q,q,q,q,q,q,new B.dY8(p),q,q,q,!1,A.a5)],x.p)
if(p.r==null)o.push(A9.acp)
w=this.b
if(w!=null)o.push(C.ao(8,p.c9q(w),q,q,10,10,q,q))
return new C.ex(new C.an(A.Z,q,A.b2,A.r,o,q),p.d)},
$S:188}
B.dY6.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:253}
B.dY7.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gW6()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:204}
B.dY5.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gW6()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:750}
B.dY8.prototype={
$1(d){var w=this.a,v=w.c9t(d.b)
if(v!=null)w.m(new B.dY_(w,v))
else w.m(new B.dY0(w))},
$S:50}
B.dY_.prototype={
$0(){return this.a.axw(this.b)},
$S:0}
B.dY0.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dYj.prototype={
$0(){var w=this.a
w.e.bQ(0,A.c9)
w.m(new B.dY4(w,this.b))},
$S:0}
B.dY4.prototype={
$0(){var w=this.a
w.id=D.a3q
w.axw(this.b)},
$S:0}
B.dYn.prototype={
$0(){var w=this.a
return w.m(new B.dYg(w))},
$S:0}
B.dYg.prototype={
$0(){var w=this.a
w.fx=null
w.ato(15,w.y,1)},
$S:0}
B.dYo.prototype={
$0(){var w=this.a
return w.m(new B.dYf(w,this.b))},
$S:0}
B.dYf.prototype={
$0(){var w=this.b.b
return this.a.ato(w.a,w.b,w.c)},
$S:0}
B.dYp.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dYe(w,v))},
$S:0}
B.dYe.prototype={
$0(){var w=this.b.a
return this.a.axw(w[A.cH.aw(w.length)])},
$S:0}
B.dYq.prototype={
$1(d){var w=this.a
return w.m(new B.dYd(w,d))},
$S:6}
B.dYd.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dYr.prototype={
$1(d){var w=this.a
return w.m(new B.dYc(w,d))},
$S:6}
B.dYc.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dYs.prototype={
$1(d){var w=this.a
return w.m(new B.dYb(w,d))},
$S:6}
B.dYb.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dYt.prototype={
$0(){var w=this.a
return w.m(new B.dYa(w))},
$S:0}
B.dYa.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dYu.prototype={
$0(){var w=this.a
return w.m(new B.dY9(w))},
$S:0}
B.dY9.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dYk.prototype={
$0(){var w=this.a
return w.m(new B.dY3(w))},
$S:0}
B.dY3.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dYl.prototype={
$0(){var w=this.a
return w.m(new B.dY2(w))},
$S:0}
B.dY2.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dYm.prototype={
$0(){var w=this.a
return w.m(new B.dY1(w))},
$S:0}
B.dY1.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dXT.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQc,w,w,w),A.uS,C.d(e,w,2,A.a2,w,w,w,A.Ue,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:127}
B.dXS.prototype={
$0(){var w=this.a
return w.m(new B.dXR(w))},
$S:0}
B.dXR.prototype={
$0(){return this.a.fx=null},
$S:0}
B.det.prototype={
$0(){var w=null,v=C.fN(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d1r,w,w),this.a),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
return v},
$S:325}
B.deu.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1890}
B.fjD.prototype={
$0(){return D.dF3},
$S:z+81}
B.fjE.prototype={
$0(){return D.e2x},
$S:z+82}
B.fjF.prototype={
$0(){return D.dF5},
$S:z+83}
B.fjG.prototype={
$0(){return D.dzq},
$S:z+84}
B.fjH.prototype={
$0(){return D.dF1},
$S:z+85}
B.fjI.prototype={
$0(){return D.e0E},
$S:z+86}
B.fjJ.prototype={
$0(){return D.e0C},
$S:z+87}
B.eIj.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.eIk.prototype={
$0(){var w=this.a
return w.m(new B.eIi(w))},
$S:0}
B.eIi.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSt()+1,16)},
$S:0}
B.eIl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hwL(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aR(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bjQ],u)
k.push(C.aB(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.P,new C.y(s.a,n,D.fce,n,A.L,n,n,n,n,2,n,n),A.cV,new C.y(s.b,n,D.fhl,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bn(r,r,r,r),n,new C.a9(A.az,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cq,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eIh(d,s),n,n,n,n,n,n,!1,A.a5))}return C.bU(A.fJ,k,A.bq,10,10)},
$S:176}
B.eIh.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.eIg(this.b),!1,null,x.H))},
$S:0}
B.eIg.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.eAm.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eAx.prototype={
$0(){return B.qW(this.b,this.a.d,"solar-system")},
$S:0}
B.eAy.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.as(e.b,e.d)
u.ch=t
t=C.a([C.aB(A.c7,C.b3(v,v,v,new B.brY(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eAu(u),new B.eAv(u),v,v,v,v,v,v,v,new B.eAw(u),v,v,v,!1,A.a5)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c9v(w),v,v,10,10,v,v))
return new C.ex(new C.an(A.Z,v,A.b2,A.r,t,v),u.d)},
$S:188}
B.eAu.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:253}
B.eAv.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:204}
B.eAw.prototype={
$1(d){var w=this.a,v=w.c9y(d.b)
if(v!=null)w.b_8(v)},
$S:50}
B.eAz.prototype={
$0(){var w=this.a
return w.m(new B.eAt(w))},
$S:0}
B.eAt.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eAA.prototype={
$0(){return this.a.b_8(this.b)},
$S:0}
B.eAB.prototype={
$1(d){var w=this.a
return w.m(new B.eAs(w,d))},
$S:6}
B.eAs.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eAC.prototype={
$1(d){var w=this.a
return w.m(new B.eAr(w,d))},
$S:6}
B.eAr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eAD.prototype={
$0(){var w=this.a
return w.m(new B.eAq(w))},
$S:0}
B.eAq.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.eAE.prototype={
$0(){var w=this.a
return w.m(new B.eAp(w))},
$S:0}
B.eAp.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eAF.prototype={
$0(){var w=this.a
return w.m(new B.eAo(w))},
$S:0}
B.eAo.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eAG.prototype={
$0(){var w=this.a
return w.m(new B.eAn(w))},
$S:0}
B.eAn.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eAl.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:300}
B.eAk.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQc,w,w,w),A.uS,C.d(e,w,2,A.a2,w,w,w,A.Ue,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:127}
B.eAj.prototype={
$0(){var w=this.a
return w.m(new B.eAi(w))},
$S:0}
B.eAi.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f1H.prototype={
$0(){var w=null,v=C.fN(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qu,w,w),this.a),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
return v},
$S:325}
B.f1I.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f1J.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dYA.prototype={
$0(){},
$S:0}
B.dZ2.prototype={
$1(d){return d!=null},
$S:364}
B.dYP.prototype={
$0(){var w=this.a
return w.m(new B.dYG(w,this.b))},
$S:0}
B.dYG.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dYQ.prototype={
$0(){var w=this.a
return w.m(new B.dYF(w))},
$S:0}
B.dYF.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYR.prototype={
$0(){var w=this.a
return w.m(new B.dYO(w))},
$S:0}
B.dYO.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dYV.prototype={
$0(){var w=this.a
return w.m(new B.dYN(w))},
$S:0}
B.dYN.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dYW.prototype={
$1(d){var w=this.a
return w.m(new B.dYM(w,d))},
$S:6}
B.dYM.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dYX.prototype={
$0(){var w=this.a
return w.m(w.gcwP())},
$S:0}
B.dYY.prototype={
$1(d){var w=this.a
return w.m(new B.dYL(w,d))},
$S:6}
B.dYL.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dYZ.prototype={
$1(d){var w=this.a
return w.m(new B.dYK(w,d))},
$S:6}
B.dYK.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dZ_.prototype={
$1(d){var w=this.a
return w.m(new B.dYJ(w,d))},
$S:6}
B.dYJ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dZ0.prototype={
$1(d){var w=this.a
return w.m(new B.dYI(w,d))},
$S:6}
B.dYI.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dZ1.prototype={
$0(){var w=this.a
return w.m(new B.dYH(w))},
$S:0}
B.dYH.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dYS.prototype={
$0(){var w=this.a
return w.m(new B.dYE(w))},
$S:0}
B.dYE.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dYT.prototype={
$0(){var w=this.a
return w.m(new B.dYD(w))},
$S:0}
B.dYD.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dYU.prototype={
$0(){var w=this.a
return w.m(new B.dYC(w))},
$S:0}
B.dYC.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dYz.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bW(0,C.c0(g,new C.o(D.bil,g,g,C.n(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.z2[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.v(D.z2[q].b)+" m/s\xb2",g,D.fgI,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dn,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.NC,C.b0(D.z2[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.z2[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.z2[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.z2[q].d).j(0.6),g,g,g,3,g,A.fs,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rZ,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f8U,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dYy()))a1.push(D.b6E)
return new C.an(A.Z,g,A.aa,A.r,a1,g)},
$S:65}
B.dYy.prototype={
$1(d){return d==null},
$S:364}
B.dYB.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bd,new C.o(v,v,v,C.n(8),v,new C.a9(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.io,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GT(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.Z,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.ff2,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:65}
B.dYx.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.baE(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b_
else u=A.a.t(u,"escapes")?A.aO:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GT(A.k.D(r.cx.gcn()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.Z,v,A.b2,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRS,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:65}
B.etg.prototype={
$0(){return B.qW(this.b,this.a.d,"size-compare")},
$S:0}
B.eth.prototype={
$0(){var w=this.a
return w.m(new B.etf(w,this.b))},
$S:0}
B.etf.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eti.prototype={
$0(){var w=this.a
return w.m(new B.ete(w,this.b))},
$S:0}
B.ete.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.f_R.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hC(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.N()
v=C.ar(f,A.w,0.6)
v.toString
w.saq(new C.bS(P.pv,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a2D,null).av(0,C.bQ(d,e)))
u.ae(d,e,w)},
$S:726}
B.dG6.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dFV.prototype={
$1(d){return d.b},
$S:z+60}
B.dFW.prototype={
$0(){return B.qW(this.b,this.a.d,"black-hole")},
$S:0}
B.dFX.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.Q=o
o=C.aB(A.c7,C.b3(q,q,q,new B.ba2(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFT(p),q,q,q,q,q,q,q,q,q,new B.dFU(p),q,q,q,q,!1,A.a5)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fxh(t)+" Suns"
t=p.aeL("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aeL("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GT(s))+" km"),p.aeL("TIME",A.k.ab(this.b*100,0)+"%"),p.aeL("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ejh)
return new C.ex(new C.an(A.Z,q,A.b2,A.r,r,q),p.d)},
$S:188}
B.dFU.prototype={
$1(d){return this.a.b_9(d.b)},
$S:23}
B.dFT.prototype={
$1(d){if(A.cH.aj()<0.12)this.a.b_9(d.b)},
$S:18}
B.dFZ.prototype={
$1(d){var w=this.a
return w.m(new B.dFS(w,d))},
$S:6}
B.dFS.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dG_.prototype={
$0(){var w=this.a
return w.m(new B.dFR(w))},
$S:0}
B.dFR.prototype={
$0(){return this.a.r=10},
$S:0}
B.dG0.prototype={
$0(){var w=this.a
return w.m(new B.dFQ(w))},
$S:0}
B.dFQ.prototype={
$0(){return this.a.r=21},
$S:0}
B.dG1.prototype={
$0(){var w=this.a
return w.m(new B.dFP(w))},
$S:0}
B.dFP.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dG2.prototype={
$0(){var w=this.a
return w.m(new B.dFO(w))},
$S:0}
B.dFO.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dG3.prototype={
$0(){var w=this.a
return w.m(new B.dFN(w))},
$S:0}
B.dFN.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dG4.prototype={
$0(){var w=this.a
return w.m(new B.dFM(w))},
$S:0}
B.dFM.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dG5.prototype={
$0(){var w=this.a
return w.m(new B.dFL(w))},
$S:0}
B.dFL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dFY.prototype={
$0(){var w=this.a
return w.m(new B.dFK(w))},
$S:0}
B.dFK.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dX7.prototype={
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
$S:1891}
B.dWY.prototype={
$0(){return B.qW(this.b,this.a.d,"galaxy")},
$S:0}
B.dWZ.prototype={
$0(){var w=this.a
return w.m(new B.dWX(w,this.b))},
$S:0}
B.dWX.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_7()},
$S:0}
B.dX_.prototype={
$0(){var w=this.a
return w.m(new B.dWW(w))},
$S:0}
B.dWW.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_7()}w.cwG()},
$S:0}
B.dX0.prototype={
$1(d){var w=this.a
return w.m(new B.dWV(w,d))},
$S:6}
B.dWV.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_7()},
$S:0}
B.dX1.prototype={
$1(d){var w=this.a
return w.m(new B.dWU(w,d))},
$S:6}
B.dWU.prototype={
$0(){var w=this.a
w.r=this.b
w.a_7()},
$S:0}
B.dX2.prototype={
$1(d){var w=this.a
return w.m(new B.dWT(w,d))},
$S:6}
B.dWT.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dX3.prototype={
$1(d){var w=this.a
return w.m(new B.dWS(w,d))},
$S:6}
B.dWS.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dX4.prototype={
$0(){var w=this.a
return w.m(new B.dWR(w))},
$S:0}
B.dWR.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dX5.prototype={
$0(){var w=this.a
return w.m(new B.dWQ(w))},
$S:0}
B.dWQ.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dX6.prototype={
$0(){var w=this.a
return w.m(new B.dWP(w))},
$S:0}
B.dWP.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dbB.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1892}
B.esv.prototype={
$0(){return B.qW(this.b,this.a.d,"seasons-moon")},
$S:0}
B.esw.prototype={
$0(){var w=this.a
return w.m(new B.esu(w))},
$S:0}
B.esu.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.esx.prototype={
$0(){var w=this.a
return w.m(new B.est(w))},
$S:0}
B.est.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.esy.prototype={
$0(){var w=this.a
return w.m(new B.ess(w))},
$S:0}
B.ess.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.esz.prototype={
$0(){var w=this.a
return w.m(new B.esr(w))},
$S:0}
B.esr.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.esA.prototype={
$1(d){var w=this.a
return w.m(new B.esq(w,d))},
$S:6}
B.esq.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.esB.prototype={
$1(d){var w=this.a
return w.m(new B.esp(w,d))},
$S:6}
B.esp.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.esC.prototype={
$1(d){var w=this.a
return w.m(new B.eso(w,d))},
$S:6}
B.eso.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.esD.prototype={
$1(d){var w=this.a
return w.m(new B.esn(w,d))},
$S:6}
B.esn.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aM5.prototype
w.bw8=w.q
w=B.aL7.prototype
w.bv8=w.q
w=B.aL8.prototype
w.bv9=w.q
w=B.aLd.prototype
w.bve=w.q
w=B.aMX.prototype
w.bx6=w.q
w=B.aM3.prototype
w.bw6=w.q
w=B.aMc.prototype
w.bwf=w.q
w=B.aMi.prototype
w.bwl=w.q
w=B.aLb.prototype
w.bvc=w.q
w=B.aM0.prototype
w.bw3=w.q
w=B.aMf.prototype
w.bwi=w.q
w=B.aLZ.prototype
w.bw1=w.q
w=B.aM_.prototype
w.bw2=w.q
w=B.aLp.prototype
w.bvr=w.q
w=B.aL3.prototype
w.bv4=w.q
w=B.aLx.prototype
w.bvz=w.q
w=B.axA.prototype
w.bsg=w.q
w=B.axB.prototype
w.bsh=w.q
w=B.aJA.prototype
w.btx=w.q
w=B.aLm.prototype
w.bvn=w.q
w=B.aLO.prototype
w.bvR=w.q
w=B.aLP.prototype
w.bvS=w.q
w=B.aL9.prototype
w.bva=w.q
w=B.aLs.prototype
w.bvu=w.q
w=B.aLX.prototype
w.bw_=w.q
w=B.aMq.prototype
w.bwt=w.q
w=B.aLy.prototype
w.bvB=w.q
w=B.aLz.prototype
w.bvC=w.q
w=B.aLA.prototype
w.bvD=w.q
w=B.aM8.prototype
w.bwb=w.q
w=B.aMb.prototype
w.bwe=w.q
w=B.aL6.prototype
w.bv7=w.q
w=B.aLv.prototype
w.bvx=w.q
w=B.aM7.prototype
w.bwa=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aEe.prototype,"gawn","c4y",0)
var r
v(r=B.aCE.prototype,"gccW","ccX",35)
w(r,"gc56","aYs",0)
w(B.aCH.prototype,"gc6O","c6P",0)
u(B.aCY.prototype,"gc6U","c6V",52)
w(r=B.aHe.prototype,"gcwm","cwn",0)
w(r,"gcjG","aga",0)
w(r,"gchl","chm",0)
w(r,"gc6T","adM",3)
w(r=B.aEd.prototype,"gbGX","a9g",3)
w(r,"gcgD","b0P",0)
w(r,"gcko","agi",3)
t(r,"gc6X","adN",3)
w(B.aEt.prototype,"gbYo","bYp",0)
w(r=B.aE5.prototype,"gcwg","cwh",0)
w(r,"gbHh","bHi",0)
w(r=B.aCG.prototype,"gb53","aA1",0)
v(r,"gc72","Zv",54)
w(r,"gc71","adP",3)
v(r=B.aE4.prototype,"gcmn","ayK",58)
v(r,"gcsP","azX",15)
w(r,"gbLh","aR0",0)
v(r=B.aE2.prototype,"gcDD","ajn",15)
t(r,"gc7m","awY",0)
w(r,"gcoK","coL",0)
v(r=B.aD9.prototype,"gc7n","c7o",90)
w(r,"gc7p","c7q",0)
t(r=B.a4r.prototype,"grI","a8",0)
v(r,"gcTt","an9",1)
v(r,"gcPZ","LJ",1)
w(r,"gcVG","bia",0)
s(B.aiI.prototype,"gc7u",0,5,null,["$5"],["qo"],64,0,0)
w(r=B.aDa.prototype,"gc7v","c7w",0)
w(r,"gcnd","agF",3)
w(r,"gcdb","aeY",3)
w(r,"gcuq","ahL",3)
w(r=B.aDP.prototype,"gc7M","ax2",0)
w(r,"gc7N","aZq",0)
w(r=B.aEG.prototype,"gc8K","c8L",0)
t(r,"gc8I","aZM",0)
w(B.aDZ.prototype,"gbJP","asd",0)
t(B.aEk.prototype,"gc8M","c8N",0)
v(r=B.aDl.prototype,"gc9r","c9s",78)
w(r,"gbOV","bOW",0)
w(r=B.aDm.prototype,"gcwP","cwQ",0)
w(r,"gc9w","c9x",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajV,B.G8,B.uV,B.aS3,B.a35,B.ba5,B.c1O,B.yc,B.Cq,B.nq,B.baO,B.AF,B.bsG,B.q7,B.qN,B.Cu,B.Zh,B.aeM,B.a0w,B.CE,B.abF,B.abW,B.adS,B.FU,B.blw,B.PW,B.a_O,B.abM,B.ace,B.FQ,B.ad3,B.adz,B.tn,B.b9G,B.aRT,B.ed,B.tA,B.aak,B.abr,B.a4r,B.mC,B.baP,B.fQ,B.m9,B.aWx,B.bu0,B.aI4,B.mF,B.ab6,B.ab7,B.v8,B.Pa,B.ya,B.P9,B.btW,B.PE,B.aeR])
u(C.i0,[B.fzC,B.fpf,B.fwn,B.fwo,B.fzz,B.fzA,B.e9C,B.e9V,B.eq0,B.epy,B.epz,B.epA,B.epB,B.epC,B.epD,B.epE,B.epF,B.epw,B.epx,B.epv,B.epW,B.epX,B.epY,B.dGb,B.dGd,B.dGg,B.dGr,B.c1P,B.c1Q,B.fiR,B.fiS,B.fiT,B.fj_,B.fj0,B.fj1,B.dIJ,B.dIq,B.dIK,B.dIl,B.dIg,B.dIi,B.dIo,B.dIB,B.dIz,B.dIA,B.dIy,B.dIv,B.dIx,B.f_l,B.f_2,B.f_9,B.f_i,B.eZX,B.dir,B.dis,B.dio,B.dip,B.diq,B.dit,B.diu,B.div,B.diw,B.dix,B.diy,B.diz,B.diA,B.diB,B.eoX,B.eoY,B.eoZ,B.ep_,B.eoV,B.eoW,B.epr,B.ep3,B.ep5,B.eoQ,B.epn,B.epl,B.epm,B.epk,B.epj,B.eoS,B.eB6,B.eB4,B.eAT,B.eAX,B.eAS,B.eAY,B.eAZ,B.eB2,B.eHI,B.eHO,B.elx,B.ely,B.elj,B.elk,B.eli,B.eln,B.elp,B.elq,B.eH7,B.eH8,B.eH6,B.eGV,B.eGW,B.eGU,B.eGN,B.eGO,B.eH1,B.eH2,B.eH3,B.eH4,B.eH5,B.dHS,B.dHT,B.dHU,B.dHL,B.dHO,B.cMW,B.eh0,B.ehp,B.eh4,B.ehc,B.ehd,B.ehb,B.ehk,B.el0,B.el5,B.ekp,B.ek7,B.ekj,B.ekh,B.ekf,B.ekg,B.eke,B.dQD,B.dQr,B.dQt,B.dQB,B.dQw,B.dTs,B.dTk,B.dTl,B.dTm,B.d5E,B.d5G,B.d5F,B.dEf,B.dEg,B.dE8,B.dE6,B.cFt,B.dXv,B.dXw,B.dXr,B.dXs,B.ddE,B.ddF,B.dIe,B.dHX,B.dI5,B.dI6,B.dIb,B.dIc,B.bMF,B.bMQ,B.bML,B.bMR,B.bMT,B.bMG,B.bME,B.bMY,B.bMM,B.bMP,B.bMO,B.bMN,B.bHs,B.fLg,B.fLj,B.fLh,B.bH9,B.bH4,B.bH3,B.bHr,B.bHj,B.bHk,B.bHi,B.bHl,B.bGU,B.bGW,B.bGS,B.bGT,B.bGK,B.bGL,B.fj2,B.fj3,B.fj4,B.fiQ,B.fj5,B.fiP,B.fj6,B.fiU,B.fiO,B.fiV,B.fiN,B.fiW,B.fiM,B.fiX,B.fiK,B.fiL,B.fiY,B.fiI,B.fiJ,B.fiZ,B.fiH,B.dTJ,B.dTK,B.dTz,B.dTv,B.dTI,B.dTN,B.cD_,B.fPZ,B.fQ_,B.ecA,B.ecs,B.diK,B.diN,B.ecT,B.ecE,B.ecO,B.ecP,B.ecQ,B.cgL,B.eM7,B.dT5,B.dT6,B.dT7,B.dT9,B.eij,B.eHq,B.eHz,B.eHv,B.eHx,B.egS,B.egT,B.egU,B.fTO,B.ctH,B.dYw,B.dXW,B.dXV,B.dY6,B.dY7,B.dY5,B.dY8,B.dYq,B.dYr,B.dYs,B.eIg,B.eAu,B.eAv,B.eAw,B.eAB,B.eAC,B.eAl,B.f1I,B.f1J,B.dZ2,B.dYW,B.dYY,B.dYZ,B.dZ_,B.dZ0,B.dYy,B.f_R,B.dG6,B.dFV,B.dFU,B.dFT,B.dFZ,B.dX7,B.dX0,B.dX1,B.dX2,B.dX3,B.dbB,B.esA,B.esB,B.esC,B.esD])
u(C.ko,[B.fzB,B.e9H,B.e9F,B.epH,B.epU,B.dIh,B.dIE,B.dOB,B.f_o,B.f_p,B.f_1,B.f_e,B.f_f,B.f_a,B.f_g,B.eZW,B.eoT,B.eoU,B.epq,B.epi,B.ep7,B.eHH,B.elm,B.eGY,B.dHK,B.dHP,B.ehg,B.el4,B.fzU,B.ekb,B.ek8,B.ekl,B.dqx,B.bGe,B.ftM,B.dE2,B.dEa,B.bMS,B.bMU,B.bMW,B.bMH,B.bMJ,B.bHt,B.cm9,B.fLi,B.bH2,B.bHp,B.bHo,B.dTH,B.cD0,B.dPv,B.dPt,B.dPn,B.ecu,B.diL,B.diM,B.ecN,B.cgO,B.dGF,B.dGA,B.eil,B.dYi,B.dXT,B.deu,B.eIl,B.eAy,B.eAk,B.dYz,B.dYB,B.dYx,B.dFX])
u(C.ag,[B.Vs,B.VV,B.Ui,B.Uo,B.Nn,B.aHd,B.VU,B.W8,B.Wk,B.VR,B.Wf,B.Um,B.VL,B.VQ,B.VO,B.UL,B.V0,B.Ud,B.Ve,B.Un,B.aiG,B.V1,B.axh,B.UJ,B.Vx,B.Vz,B.Wq,B.V8,B.Uj,B.V_,B.VM,B.VZ,B.Wj,B.VK,B.Vf,B.Wm,B.W7,B.Vg,B.W_,B.Uh,B.Vc,B.VW])
u(C.ah,[B.bk_,B.aM5,B.aL7,B.aLd,B.aCY,B.aMX,B.aM3,B.aMc,B.aMi,B.aM0,B.aMf,B.aLb,B.aLZ,B.aM_,B.aE2,B.bju,B.aLp,B.aL3,B.aLx,B.bjl,B.axA,B.bx7,B.aJA,B.aLm,B.aLO,B.aLP,B.aMq,B.aLs,B.aL9,B.bjv,B.aDZ,B.aEk,B.bkJ,B.aLX,B.aLy,B.bkN,B.aMb,B.aLA,B.aM8,B.aL6,B.aLv,B.aM7])
u(C.ja,[B.e9A,B.e9B,B.e9N,B.e9O,B.e9J,B.e9I,B.e9K,B.e9G,B.e9L,B.e9E,B.e9M,B.e9D,B.e9R,B.e9Q,B.e9S,B.e9P,B.e9T,B.e9U,B.e9W,B.eq_,B.eq1,B.eq2,B.epJ,B.epI,B.epG,B.epP,B.epQ,B.epM,B.epR,B.epL,B.epS,B.epT,B.epK,B.epV,B.epO,B.epZ,B.epN,B.dGy,B.dGx,B.dGa,B.dGz,B.dGc,B.dGe,B.dGf,B.dGh,B.dG7,B.dG8,B.dG9,B.dGo,B.dGp,B.dGq,B.dGn,B.dGs,B.dGm,B.dGt,B.dGl,B.dGu,B.dGk,B.dGv,B.dGj,B.dGw,B.dGi,B.dIn,B.dIm,B.dIr,B.dIj,B.dIk,B.dIs,B.dIt,B.dIu,B.dIp,B.dIf,B.dID,B.dIC,B.dIF,B.dIG,B.dIH,B.dIw,B.dII,B.cNo,B.dOz,B.dOy,B.dOA,B.fjh,B.fji,B.fjj,B.fju,B.fjw,B.fjx,B.fjy,B.fjz,B.fjA,B.fjB,B.fjC,B.fjk,B.fjl,B.fjm,B.fjn,B.fjo,B.fjp,B.fjq,B.fjr,B.fjs,B.fjt,B.fjv,B.f_n,B.f_m,B.f_4,B.f_3,B.f__,B.eZZ,B.f_0,B.eZY,B.f_c,B.f_b,B.f_d,B.f_5,B.f_h,B.f_8,B.f_j,B.f_7,B.f_k,B.f_6,B.ep1,B.eoR,B.ep0,B.eoN,B.ep2,B.ep4,B.eoO,B.eoP,B.epp,B.epo,B.epf,B.epg,B.eph,B.epb,B.epc,B.epa,B.epd,B.ep9,B.epe,B.ep8,B.ep6,B.din,B.eB5,B.eAI,B.eAH,B.eAR,B.eB_,B.eAQ,B.eB0,B.eAP,B.eB1,B.eAO,B.eAN,B.eB3,B.eAM,B.eAU,B.eAL,B.eAV,B.eAK,B.eAW,B.eAJ,B.eHG,B.eHF,B.eHJ,B.eHE,B.eHK,B.eHD,B.eHL,B.eHC,B.eHM,B.eHB,B.eHN,B.eHA,B.ell,B.elh,B.elg,B.elf,B.elr,B.ele,B.els,B.eld,B.elt,B.elc,B.elu,B.elv,B.elw,B.elb,B.elo,B.eGX,B.eGM,B.eGZ,B.eGT,B.eH_,B.eGS,B.eH0,B.eGR,B.eGQ,B.eGP,B.eGL,B.eGK,B.eGJ,B.dHR,B.dHI,B.dHJ,B.dHM,B.dHN,B.dHQ,B.ehe,B.eh5,B.ehf,B.ehh,B.eha,B.ehi,B.eh9,B.ehj,B.eh8,B.eh7,B.ehl,B.eh6,B.ehm,B.eh3,B.ehn,B.eh2,B.eho,B.eh1,B.ekV,B.ekW,B.el2,B.el1,B.el3,B.el_,B.el6,B.ekZ,B.el7,B.ekY,B.el8,B.el9,B.ekX,B.ela,B.eko,B.ek5,B.ek6,B.eka,B.ek9,B.ekk,B.eki,B.ekc,B.ekm,B.ekd,B.ekn,B.dQC,B.dQs,B.dQq,B.dQx,B.dQv,B.dQy,B.dQu,B.dQz,B.dQA,B.dTr,B.dTf,B.dTe,B.dTg,B.dTj,B.dTi,B.dTh,B.dTn,B.dTo,B.dTp,B.dTq,B.dEe,B.dEd,B.dE3,B.dE9,B.dE7,B.dEb,B.dE5,B.dEc,B.dE4,B.dXu,B.dXt,B.dXl,B.dXp,B.dXo,B.dXq,B.dXn,B.dXm,B.dId,B.dI4,B.dI3,B.dI7,B.dI2,B.dI8,B.dI1,B.dI9,B.dI0,B.dIa,B.dI_,B.dHZ,B.dHY,B.bMV,B.bMX,B.bMI,B.bMK,B.bH6,B.bH7,B.bH5,B.bH8,B.bHa,B.bGX,B.bGY,B.bGZ,B.bH_,B.bH0,B.bH1,B.bHq,B.bGA,B.bHg,B.bHh,B.bHe,B.bHf,B.bHc,B.bHd,B.bHm,B.bHb,B.bHn,B.bGB,B.bGV,B.bGH,B.bGI,B.bGG,B.bGJ,B.bGF,B.bGM,B.bGN,B.bGO,B.bGP,B.bGE,B.bGQ,B.bGD,B.bGR,B.bGC,B.dTA,B.dTL,B.dTM,B.dTy,B.dTx,B.dTw,B.dTF,B.dTD,B.dTE,B.dTG,B.dTB,B.dTC,B.dTO,B.dTP,B.dTQ,B.dTR,B.dTS,B.dPw,B.dPu,B.dPs,B.dPr,B.dPq,B.dPp,B.dPo,B.dPk,B.dPj,B.dPm,B.dPl,B.ecz,B.ecB,B.ecq,B.ecr,B.ect,B.ecv,B.ecw,B.ecx,B.ecy,B.ecS,B.ecU,B.ecK,B.ecG,B.ecL,B.ecM,B.ecF,B.ecJ,B.ecI,B.ecH,B.ecR,B.fjK,B.fjL,B.fjM,B.fjN,B.fjO,B.fjP,B.fjQ,B.fjR,B.cgN,B.cgM,B.eM8,B.eM4,B.eM3,B.eM6,B.eM5,B.dVO,B.dVP,B.dVJ,B.dVL,B.dVM,B.dVK,B.dVN,B.dGG,B.dGD,B.dGC,B.dGE,B.dGB,B.dT4,B.dT3,B.dT2,B.dT1,B.dT8,B.dT0,B.dT_,B.dTa,B.dSZ,B.dTb,B.dSY,B.dTc,B.dTd,B.dSX,B.eif,B.eig,B.eie,B.eih,B.eid,B.eik,B.eim,B.eii,B.ein,B.et8,B.et9,B.et6,B.et7,B.et5,B.eta,B.etb,B.etc,B.etd,B.eHu,B.eHw,B.eHt,B.eHs,B.eHy,B.eHr,B.egV,B.egW,B.egO,B.egN,B.egP,B.egM,B.egQ,B.egL,B.egR,B.egK,B.egJ,B.egI,B.egH,B.ctI,B.ctJ,B.fTN,B.ctE,B.ctD,B.ctK,B.ctF,B.ctG,B.cgJ,B.dYv,B.dXZ,B.dXX,B.dXY,B.dXU,B.dYh,B.dY_,B.dY0,B.dYj,B.dY4,B.dYn,B.dYg,B.dYo,B.dYf,B.dYp,B.dYe,B.dYd,B.dYc,B.dYb,B.dYt,B.dYa,B.dYu,B.dY9,B.dYk,B.dY3,B.dYl,B.dY2,B.dYm,B.dY1,B.dXS,B.dXR,B.det,B.fjD,B.fjE,B.fjF,B.fjG,B.fjH,B.fjI,B.fjJ,B.eIj,B.eIk,B.eIi,B.eIh,B.eAm,B.eAx,B.eAz,B.eAt,B.eAA,B.eAs,B.eAr,B.eAD,B.eAq,B.eAE,B.eAp,B.eAF,B.eAo,B.eAG,B.eAn,B.eAj,B.eAi,B.f1H,B.dYA,B.dYP,B.dYG,B.dYQ,B.dYF,B.dYR,B.dYO,B.dYV,B.dYN,B.dYM,B.dYX,B.dYL,B.dYK,B.dYJ,B.dYI,B.dZ1,B.dYH,B.dYS,B.dYE,B.dYT,B.dYD,B.dYU,B.dYC,B.etg,B.eth,B.etf,B.eti,B.ete,B.dFW,B.dFS,B.dG_,B.dFR,B.dG0,B.dFQ,B.dG1,B.dFP,B.dG2,B.dFO,B.dG3,B.dFN,B.dG4,B.dFM,B.dG5,B.dFL,B.dFY,B.dFK,B.dWY,B.dWZ,B.dWX,B.dX_,B.dWW,B.dWV,B.dWU,B.dWT,B.dWS,B.dX4,B.dWR,B.dX5,B.dWQ,B.dX6,B.dWP,B.esv,B.esw,B.esu,B.esx,B.est,B.esy,B.ess,B.esz,B.esr,B.esq,B.esp,B.eso,B.esn])
t(B.bxm,B.aM5)
t(B.aEe,B.bxm)
u(C.mP,[B.bgZ,B.bb6,B.bs4,B.b9N,B.bqJ,B.bqa,B.bas,B.bqc,B.bua,B.bgX,B.bs_,B.blj,B.bsS,B.baN,B.bhR,B.blk,B.biy,B.bdS,B.b9S,B.bfl,B.aiI,B.b9_,B.bvb,B.aeF,B.bh1,B.bhg,B.bvn,B.bqb,B.blx,B.bfs,B.brY,B.baE,B.brw,B.ba2,B.bfi,B.bqM])
t(B.aL8,B.aL7)
t(B.aCE,B.aL8)
t(B.bx5,B.aLd)
t(B.aCH,B.bx5)
u(C.md,[B.Kq,B.a0j,B.Jn])
u(C.au,[B.br6,B.aeW,B.adO,B.Q4,B.brA,B.a8j,B.bdd,B.b6N,B.dB,B.eV,B.avI,B.fj,B.Fk])
t(B.aHe,B.aMX)
t(B.bgW,C.oT)
t(B.aEd,B.aM3)
t(B.bkA,B.aMc)
t(B.aEt,B.aMi)
t(B.bxl,B.aM0)
t(B.aE5,B.bxl)
t(B.bxt,B.aMf)
t(B.bkF,B.bxt)
t(B.bx4,B.aLb)
t(B.aCG,B.bx4)
t(B.bxj,B.aLZ)
t(B.bke,B.bxj)
t(B.bxk,B.aM_)
t(B.aE4,B.bxk)
t(B.aD9,B.aLp)
t(B.bj8,B.aL3)
t(B.bjG,B.aLx)
t(B.axB,B.axA)
t(B.aiH,B.axB)
t(B.aDa,B.bx7)
t(B.b90,B.aJA)
t(B.bjs,B.aLm)
t(B.bxc,B.aLO)
t(B.bk1,B.bxc)
t(B.bxd,B.aLP)
t(B.aDP,B.bxd)
t(B.bxu,B.aMq)
t(B.aEG,B.bxu)
t(B.bx8,B.aLs)
t(B.bjB,B.bx8)
t(B.bx3,B.aL9)
t(B.bjd,B.bx3)
t(B.bxi,B.aLX)
t(B.bkc,B.bxi)
t(B.aLz,B.aLy)
t(B.aDl,B.aLz)
t(B.bxq,B.aMb)
t(B.bkz,B.bxq)
t(B.bxa,B.aLA)
t(B.aDm,B.bxa)
t(B.bxo,B.aM8)
t(B.bkw,B.bxo)
t(B.bx2,B.aL6)
t(B.bjc,B.bx2)
t(B.bx9,B.aLv)
t(B.bjE,B.bx9)
t(B.bxn,B.aM7)
t(B.bkv,B.bxn)
w(B.aM5,C.ca)
w(B.bxm,B.mF)
w(B.aL7,C.ca)
w(B.aL8,B.mF)
w(B.aLd,C.ca)
w(B.bx5,B.mF)
w(B.aMX,C.eW)
w(B.aM3,C.ca)
w(B.aMc,C.ca)
w(B.aMi,C.ca)
w(B.aLb,C.ca)
w(B.bx4,B.mF)
w(B.aM0,C.ca)
w(B.bxl,B.mF)
w(B.aMf,C.ca)
w(B.bxt,B.mF)
w(B.aLZ,C.ca)
w(B.bxj,B.mF)
w(B.aM_,C.ca)
w(B.bxk,B.mF)
w(B.aLp,C.ca)
w(B.aL3,C.ca)
w(B.aLx,C.ca)
w(B.axA,C.ca)
w(B.axB,B.mF)
w(B.aJA,C.ca)
v(B.bx7,C.eC)
w(B.aLm,C.ca)
w(B.aLO,C.ca)
w(B.bxc,B.mF)
w(B.aLP,C.ca)
w(B.bxd,B.mF)
w(B.aL9,C.ca)
w(B.bx3,B.mF)
w(B.aLs,C.ca)
w(B.bx8,B.mF)
w(B.aLX,C.ca)
w(B.bxi,B.mF)
w(B.aMq,C.ca)
w(B.bxu,B.mF)
w(B.aLy,C.ca)
w(B.aLz,B.mF)
w(B.aLA,C.ca)
w(B.bxa,B.mF)
w(B.aM8,C.ca)
w(B.bxo,B.mF)
w(B.aMb,C.ca)
w(B.bxq,B.mF)
w(B.aL6,C.ca)
w(B.bx2,B.mF)
w(B.aLv,C.ca)
w(B.bx9,B.mF)
w(B.aM7,C.ca)
w(B.bxn,B.mF)})()
C.k4(b.typeUniverse,JSON.parse('{"Vs":{"ag":[],"t":[]},"bk_":{"ah":["Vs"]},"VV":{"ag":[],"t":[]},"aEe":{"ah":["VV"]},"bgZ":{"aC":[]},"Ui":{"ag":[],"t":[]},"aCE":{"ah":["Ui"]},"Uo":{"ag":[],"t":[]},"aCH":{"ah":["Uo"]},"bb6":{"aC":[]},"aeW":{"au":[],"t":[]},"adO":{"au":[],"t":[]},"aHd":{"ag":[],"t":[]},"Nn":{"ag":[],"t":[]},"aCY":{"ah":["Nn"]},"br6":{"au":[],"t":[]},"Q4":{"au":[],"t":[]},"bs4":{"aC":[]},"brA":{"au":[],"t":[]},"b9N":{"aC":[]},"aHe":{"ah":["aHd"]},"bqJ":{"aC":[]},"bqa":{"aC":[]},"bas":{"aC":[]},"bqc":{"aC":[]},"bua":{"aC":[]},"VU":{"ag":[],"t":[]},"bgW":{"aC":[]},"aEd":{"ah":["VU"]},"bgX":{"aC":[]},"W8":{"ag":[],"t":[]},"Wk":{"ag":[],"t":[]},"bkA":{"ah":["W8"]},"bs_":{"aC":[]},"aEt":{"ah":["Wk"]},"VR":{"ag":[],"t":[]},"Wf":{"ag":[],"t":[]},"Um":{"ag":[],"t":[]},"aE5":{"ah":["VR"]},"blj":{"aC":[]},"bkF":{"ah":["Wf"]},"bsS":{"aC":[]},"aCG":{"ah":["Um"]},"baN":{"aC":[]},"VL":{"ag":[],"t":[]},"VQ":{"ag":[],"t":[]},"bke":{"ah":["VL"]},"bhR":{"aC":[]},"aE4":{"ah":["VQ"]},"blk":{"aC":[]},"VO":{"ag":[],"t":[]},"UL":{"ag":[],"t":[]},"V0":{"ag":[],"t":[]},"aE2":{"ah":["VO"]},"biy":{"aC":[]},"bju":{"ah":["UL"]},"aD9":{"ah":["V0"]},"bdS":{"aC":[]},"Ud":{"ag":[],"t":[]},"Ve":{"ag":[],"t":[]},"Un":{"ag":[],"t":[]},"bj8":{"ah":["Ud"]},"b9S":{"aC":[]},"bjG":{"ah":["Ve"]},"bfl":{"aC":[]},"bjl":{"ah":["Un"]},"aiI":{"aC":[]},"aiG":{"ag":[],"t":[]},"aiH":{"ah":["aiG"]},"V1":{"ag":[],"t":[]},"axh":{"ag":[],"t":[]},"aDa":{"ah":["V1"],"eC":[]},"b90":{"ah":["axh"]},"b9_":{"aC":[]},"UJ":{"ag":[],"t":[]},"bjs":{"ah":["UJ"]},"bvb":{"aC":[]},"aeF":{"aC":[]},"Vx":{"ag":[],"t":[]},"Vz":{"ag":[],"t":[]},"bk1":{"ah":["Vx"]},"bh1":{"aC":[]},"aDP":{"ah":["Vz"]},"bhg":{"aC":[]},"a8j":{"au":[],"t":[]},"Wq":{"ag":[],"t":[]},"V8":{"ag":[],"t":[]},"Uj":{"ag":[],"t":[]},"V_":{"ag":[],"t":[]},"VM":{"ag":[],"t":[]},"VZ":{"ag":[],"t":[]},"Wj":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"aEG":{"ah":["Wq"]},"bvn":{"aC":[]},"bjB":{"ah":["V8"]},"bqb":{"aC":[]},"bjd":{"ah":["Uj"]},"bjv":{"ah":["V_"]},"blx":{"aC":[]},"aDZ":{"ah":["VM"]},"aEk":{"ah":["VZ"]},"bkJ":{"ah":["Wj"]},"bkc":{"ah":["VK"]},"bdd":{"au":[],"t":[]},"b6N":{"au":[],"t":[]},"dB":{"au":[],"t":[]},"eV":{"au":[],"t":[]},"avI":{"au":[],"t":[]},"fj":{"au":[],"t":[]},"Fk":{"au":[],"t":[]},"Vf":{"ag":[],"t":[]},"aDl":{"ah":["Vf"]},"bfs":{"aC":[]},"Wm":{"ag":[],"t":[]},"bkN":{"ah":["Wm"]},"W7":{"ag":[],"t":[]},"Vg":{"ag":[],"t":[]},"W_":{"ag":[],"t":[]},"bkz":{"ah":["W7"]},"brY":{"aC":[]},"aDm":{"ah":["Vg"]},"baE":{"aC":[]},"bkw":{"ah":["W_"]},"brw":{"aC":[]},"Uh":{"ag":[],"t":[]},"Vc":{"ag":[],"t":[]},"VW":{"ag":[],"t":[]},"bjc":{"ah":["Uh"]},"ba2":{"aC":[]},"bjE":{"ah":["Vc"]},"bfi":{"aC":[]},"bkv":{"ah":["VW"]},"bqM":{"aC":[]}}'))
C.Kr(b.typeUniverse,JSON.parse('{"mF":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lZ<w?>"),e8:w("d5"),G:w("w"),l:w("bl<m,m>"),J:w("bl<m,K>"),I:w("bl<m,F>"),R:w("dD<m>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a31>"),gh:w("O<aRT>"),h:w("O<a35>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<T>"),dh:w("O<HI>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<HI>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<m>>"),b:w("O<ai<K>>"),fA:w("O<ai<F?>>"),D:w("O<a6<m,aD>>"),g:w("O<u>"),bz:w("O<tA>"),ds:w("O<a8G>"),v:w("O<hv>"),U:w("O<+(u,K)>"),ev:w("O<+(u,F)>"),K:w("O<+(m,m)>"),fT:w("O<+(K,t)>"),E:w("O<+(F,m)>"),u:w("O<+(F,F)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,K,K,F)>"),o:w("O<+(m,F,m,F)>"),d:w("O<+(m,m,K,K,a6<m,K>)>"),_:w("O<uV>"),q:w("O<cS>"),fQ:w("O<aak>"),s:w("O<m>"),cF:w("O<at>"),X:w("O<wl>"),F:w("O<ab6>"),p:w("O<t>"),bL:w("O<abr>"),fH:w("O<ln>"),aq:w("O<b9G>"),a_:w("O<abF>"),cS:w("O<abM>"),cB:w("O<nq>"),ba:w("O<abW>"),d9:w("O<PE>"),bi:w("O<ace>"),eW:w("O<Cu>"),fY:w("O<Zh>"),aX:w("O<FQ>"),ea:w("O<ad3>"),gB:w("O<adz>"),ed:w("O<PW>"),g4:w("O<blw>"),aS:w("O<a_O>"),ac:w("O<adS>"),cd:w("O<CE>"),fr:w("O<aeM>"),e4:w("O<a0w>"),r:w("O<aeR>"),au:w("O<aI4>"),f7:w("O<Q>"),n:w("O<K>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<tA?>"),d4:w("O<m?>"),bN:w("O<F?>"),gJ:w("cs<aiH>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<F>"),a:w("a6<m,@>"),f:w("a6<@,@>"),bd:w("M<ed,m>"),dv:w("M<m,m>"),fR:w("M<+(K,t),t>"),m:w("iE"),gA:w("zm"),gD:w("vW"),P:w("cr"),C:w("aD"),W:w("tA"),dV:w("ed"),g7:w("Cb"),N:w("m"),bO:w("at"),k:w("jM"),Y:w("bq<K>"),cL:w("ab7"),gj:w("cy<m>"),aC:w("cy<F?>"),dg:w("eb<qN>"),e3:w("ba5"),a2:w("Cq"),f3:w("qN"),es:w("FU"),gV:w("n2"),y:w("Q"),i:w("K"),z:w("@"),S:w("F"),L:w("ai<@>?"),fF:w("a6<@,@>?"),cK:w("aD?"),az:w("q0?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aY0=new C.dc(0,0.85)
D.fG_=new C.y("Tap once to start the chain",null,K.U8,null,null,null,null,null,null,null,null,null)
D.aXz=new C.bI(D.aY0,null,null,D.fG_,null)
D.aXR=new C.dc(0,0.1)
D.aZn=new B.aS3(0,0,0)
D.Ky=new B.aS3(0,0.5,0)
D.aZW=new C.az(A.b_,1,A.q,-1)
D.b0o=new C.aY(0,1/0,0,290)
D.b0v=new C.aY(16,1/0,16,1/0)
D.b1J=new C.o(A.bc,null,null,null,null,null,A.a6)
D.f6K=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIn=new C.y("\u26a1",null,D.f6K,null,null,null,null,null,null,null,null,null)
D.b6a=new C.cp(A.A,null,null,D.fIn,null)
D.aRa=new C.H(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fya=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aRa,null,A.L,null,null,null,null,null,null,null)
D.ecW=new C.D(A.o6,D.fya,null)
D.b6j=new C.cp(A.A,null,null,D.ecW,null)
D.fBZ=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kM,null,A.L,null,null,null,null,null,null,null)
D.ed_=new C.D(A.o6,D.fBZ,null)
D.b6E=new C.cp(A.A,null,null,D.ed_,null)
D.fhG=new C.H(!0,A.jm,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGN=new C.y("Draw anywhere",null,D.fhG,null,null,null,null,null,null,null,null,null)
D.b6I=new C.cp(A.A,null,null,D.fGN,null)
D.fol=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aRa,null,A.L,null,null,null,null,null,null,null)
D.edI=new C.D(A.FN,D.fol,null)
D.b70=new C.cp(A.A,null,null,D.edI,null)
D.acK=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b9E=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.bap=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wp=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.bau=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.baz=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.baE=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Wt=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bbK=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bbP=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bca=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bdl=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ae6=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdP=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AO=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.beH=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aez=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bfk=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bfr=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aeK=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.X6=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfW=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aeT=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.af5=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Xh=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bhH=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bhK=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bhO=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhX=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afy=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bil=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.F6=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bjt=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bjB=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bjF=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bjQ=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjU=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bk1=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vs=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.agj=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bla=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.blV=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bmp=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bmP=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.agK=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.brr=new C.ba(11e6)
D.bss=new C.R(0,0,8,6)
D.ahH=new C.R(0,0,9,0)
D.bt_=new C.R(10,0,10,4)
D.bt4=new C.R(10,10,10,6)
D.btc=new C.R(10,34,10,26)
D.btk=new C.R(10,6,10,2)
D.YV=new C.R(10,6,10,4)
D.btm=new C.R(10,8,0,10)
D.btY=new C.R(12,8,8,8)
D.bu2=new C.R(14,0,14,22)
D.bu4=new C.R(14,0,14,30)
D.ai7=new C.R(14,0,14,6)
D.aie=new C.R(14,10,8,12)
D.buB=new C.R(14,8,14,6)
D.bv2=new C.R(16,4,16,28)
D.bvc=new C.R(16,8,16,12)
D.bxh=new C.R(26,12,26,58)
D.by5=new C.R(4,4,6,2)
D.by7=new C.R(4,4,8,2)
D.byH=new C.R(8,14,8,12)
D.byO=new C.R(8,40,8,30)
D.byS=new C.R(8,6,16,0)
D.byT=new C.R(8,6,8,8)
D.bzd=new C.R(0,0,1.5,0)
D.aZ9=new C.H6(26,"saturation")
D.bzv=new C.z3(A.cX,D.aZ9,null,A.acI)
D.fnr=new C.y("REACTION LAB",null,Y.aRL,null,null,null,null,A.a2,null,1,null,null)
D.bzB=new C.bB(1,A.bg,D.fnr,null)
D.fex=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new C.y("CORE PROTOCOL",null,D.fex,null,null,null,null,null,null,null,null,null)
D.bzP=new C.bB(1,A.bg,D.fqD,null)
D.frl=new C.y("\ud83d\udce2 NGMY Ads",null,A.qB,null,null,null,null,A.eH,null,1,null,null)
D.bAx=new C.bB(1,A.bg,D.frl,null)
D.fma=new C.y("Wire selected",null,A.hv,null,null,null,null,null,null,null,null,null)
D.bAM=new C.bB(1,A.bg,D.fma,null)
D.alp=new C.a0(62712,"MaterialIcons",!1)
D.bGc=new C.a0(62878,"MaterialIcons",!1)
D.a0f=new C.a0(62908,"MaterialIcons",!1)
D.bGf=new C.a0(62918,"MaterialIcons",!1)
D.bGg=new C.a0(62931,"MaterialIcons",!1)
D.bGj=new C.a0(62951,"MaterialIcons",!1)
D.bGA=new C.a0(63064,"MaterialIcons",!1)
D.bGC=new C.a0(63070,"MaterialIcons",!1)
D.ym=new C.a0(63128,"MaterialIcons",!1)
D.Gx=new C.a0(63726,"MaterialIcons",!1)
D.bHV=new C.a0(983122,"MaterialIcons",!1)
D.bI9=new C.a0(983247,"MaterialIcons",!1)
D.bIl=new C.a0(983415,"MaterialIcons",!1)
D.bIm=new C.a0(983417,"MaterialIcons",!1)
D.bIn=new C.a0(983442,"MaterialIcons",!1)
D.bIo=new C.a0(983443,"MaterialIcons",!1)
D.amJ=new C.a0(983467,"MaterialIcons",!1)
D.bIu=new C.a0(983501,"MaterialIcons",!1)
D.bIF=new C.a0(983616,"MaterialIcons",!1)
D.bIG=new C.a0(983624,"MaterialIcons",!1)
D.bIT=new C.a0(983776,"MaterialIcons",!1)
D.bJ9=new C.a0(984561,"MaterialIcons",!1)
D.bJK=new C.ae(A.rk,24,A.aM,null,null,null)
D.bKu=new C.ae(A.O6,null,A.ad,null,null,null)
D.bL1=new C.ae(A.mC,21,A.ad,null,null,null)
D.bHU=new C.a0(983117,"MaterialIcons",!1)
D.bMo=new C.ae(D.bHU,28,A.c,null,null,null)
D.bME=new C.ae(A.js,18,null,null,null,null)
D.bOq=new C.ae(A.ea,21,A.c8,null,null,null)
D.bOF=new C.ae(A.mD,null,A.ad,null,null,null)
D.bOP=new C.ae(A.a14,21,A.ad,null,null,null)
D.bPE=new C.ae(A.eF,17,A.ad,null,null,null)
D.ao4=new C.ae(A.eF,19,null,null,null,null)
D.mH=new C.ae(A.vV,21,A.ad,null,null,null)
D.bRa=new C.ae(A.Nz,null,A.ad,null,null,null)
D.bSk=new C.ae(A.js,21,A.ad,null,null,null)
D.bTb=new C.ae(A.fg,20,A.aA,null,null,null)
D.bTR=new C.ae(A.dY,null,A.aM,null,null,null)
D.bUb=new C.ae(A.ka,null,A.aA,null,null,null)
D.dgC=w([A.d5,A.d_,A.d5],x.O)
D.bXb=new C.a9(A.a3,A.a8,A.x,D.dgC,null,null)
D.cUP=w([A.bN,A.bn],x.O)
D.bXj=new C.a9(A.b1,A.b5,A.x,D.cUP,null,null)
D.bXv=new C.a9(A.b1,A.b5,A.x,A.ayi,null,null)
D.cVb=w([A.fX,A.f9],x.O)
D.bXE=new C.a9(A.b1,A.b5,A.x,D.cVb,null,null)
D.ap5=new C.a9(A.b1,A.b5,A.x,M.a2N,null,null)
D.cSB=w([A.oG,A.ii],x.O)
D.bYh=new C.a9(A.b1,A.b5,A.x,D.cSB,null,null)
D.cUx=w([A.e2,A.aw],x.O)
D.apc=new C.a9(A.b1,A.b5,A.x,D.cUx,null,null)
D.daF=w([A.dt,A.j0,A.bn],x.O)
D.bYA=new C.a9(A.a3,A.a8,A.x,D.daF,null,null)
D.daL=w([A.h9,A.cp],x.O)
D.bYV=new C.a9(A.b1,A.b5,A.x,D.daL,null,null)
D.crd=w([A.bN,A.dt],x.O)
D.bZ3=new C.a9(A.a3,A.a8,A.x,D.crd,null,null)
D.az_=w([A.e2,L.mo],x.O)
D.bZa=new C.a9(A.b1,A.b5,A.x,D.az_,null,null)
D.bZr=new C.a9(A.b1,A.b5,A.x,I.apy,null,null)
D.bg2=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b90=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cPV=w([D.bg2,D.b90],x.O)
D.bZF=new C.a9(A.b1,A.b5,A.x,D.cPV,null,null)
D.c_f=new C.a9(A.az,A.aC,A.x,A.a2K,null,null)
D.bkB=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dmj=w([D.bkB,A.L3],x.O)
D.c_m=new C.a9(A.b1,A.b5,A.x,D.dmj,null,null)
D.d2M=w([A.aw,A.w],x.O)
D.c_r=new C.a9(A.b1,A.b5,A.x,D.d2M,null,null)
D.c_u=new C.a9(A.b1,A.b5,A.x,T.aym,null,null)
D.bjY=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bkL=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cDY=w([A.LR,D.bjY,D.bkL],x.O)
D.c_E=new C.a9(A.b1,A.b5,A.x,D.cDY,null,null)
D.crx=w([A.d6,A.fW],x.O)
D.c_U=new C.a9(A.b1,A.b5,A.x,D.crx,null,null)
D.c00=new C.a9(A.az,A.aC,A.x,A.a3y,null,null)
D.apA=w([0,2,4,6,7,9,11],x.t)
D.c0C=w([0,4,7],x.t)
D.apG=w([0,4,7,12],x.t)
D.c0D=w([0,4,7,4],x.t)
D.ay2=w([A.h6,A.pP],x.O)
D.axy=w([A.hm,A.cQ],x.O)
D.avX=w([A.bu,A.dO],x.O)
D.cMw=w([A.aM,A.d6],x.O)
D.cSX=w([A.c8,A.ey],x.O)
D.dbY=w([A.bU,A.lP],x.O)
D.avo=w([A.ct,A.k3],x.O)
D.cRv=w([A.bK,A.aJ],x.O)
D.c0Y=w([D.ay2,D.axy,A.a2S,D.avX,D.cMw,D.cSX,A.ax4,D.dbY,D.avo,D.cRv],x.Q)
D.c5C=w([120,220,380],x.t)
D.c9m=w([12,16,19,24],x.t)
D.c9w=w([1400,800,450,2400],x.t)
D.cdN=w([0,0.6,1],x.n)
D.chX=w([250,450,900,1500],x.t)
D.b9Q=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bkl=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bin=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bnF=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bhx=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.auF=w([D.b9Q,D.bkl,D.bin,D.bnF,D.bhx],x.O)
D.eHP=new C.z("type","Typewriter")
D.eAd=new C.z("bounce","Bounce")
D.eIB=new C.z("wave","Wave")
D.eJJ=new C.z("zoom","Zoom")
D.cyH=w([D.eHP,D.eAd,D.eIB,A.a6J,I.aMZ,D.eJJ,I.aN2],x.K)
D.cyV=w([50,25,75],x.t)
D.cEu=w([0,5,10,15,18,20,25],x.t)
D.eBS=new C.z("fish","Fish")
D.eBU=new C.z("fly","Fireflies")
D.eAb=new C.z("bird","Birds")
D.cII=w([D.eBS,D.eBU,D.eAb],x.K)
D.cMM=w([900,500,250,1600],x.t)
D.cQh=w([0.78,1],x.n)
D.avY=w([0,2,4,7,9,12,14,16],x.t)
D.cQQ=w([A.bu,A.bD,A.b7,A.bu],x.O)
D.aw2=w(["A","T","C","G"],x.s)
D.cQR=w(["A","U","C","G"],x.s)
D.a2H=w([A.av,A.bH,A.bc,A.aO,A.o_],x.O)
D.cSg=w([A.aw,A.av,A.ct,A.bH,A.bc,A.cA,A.cb,A.bD,A.L3],x.O)
D.a2L=w([0.04,0.17,0.3],x.n)
D.cST=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Hj=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eRW=new B.uV("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eS1=new B.uV("Medium engine","A good all-rounder.",0.3,0.9)
D.eS0=new B.uV("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hk=w([D.eRW,D.eS1,D.eS0],x._)
D.epM=new C.z(6,"Easy")
D.equ=new C.z(8,"Medium")
D.elF=new C.z(10,"Hard")
D.cTJ=w([D.epM,D.equ,D.elF],x.E)
D.awm=w([0.55,0.78,1],x.n)
D.cVh=w([0.93,0.975,1],x.n)
D.awx=w([A.c,A.fV,A.nS,A.aw],x.O)
D.fLp=new B.ya("Moon",1737,4291941851)
D.fLm=new B.ya("Earth",6371,4281908728)
D.fLq=new B.ya("Neptune",24622,4284524026)
D.fLr=new B.ya("Saturn",58232,4294829706)
D.fLn=new B.ya("Jupiter",69911,4294677052)
D.fLs=new B.ya("Sun",696340,4294688548)
D.fLt=new B.ya("Sirius A",119e4,4290763774)
D.fLk=new B.ya("Arcturus",179e5,4294818420)
D.fLl=new B.ya("Betelgeuse",531e6,4294472049)
D.fLo=new B.ya("UY Scuti",667e6,4293870660)
D.Qi=w([D.fLp,D.fLm,D.fLq,D.fLr,D.fLn,D.fLs,D.fLt,D.fLk,D.fLl,D.fLo],C.ax("O<ya>"))
D.eNq=new C.bh("glow","Glow",A.a0h)
D.eKU=new C.bh("rainbow","Rainbow",A.no)
D.eLh=new C.bh("stars","Stars",A.ib)
D.eKD=new C.bh("sparks","Sparks",A.dY)
D.eMG=new C.bh("fire","Fire",A.vW)
D.cX8=w([D.eNq,D.eKU,D.eLh,D.eKD,D.eMG],x.c)
D.awB=w([A.bc,A.av,A.bH,A.d_],x.O)
D.cY7=w([0.2,1],x.n)
D.eRT=new B.uV("Radar","Shows your height above the ground.",0.1,0)
D.eRU=new B.uV("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eRR=new B.uV("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awJ=w([D.eRT,D.eRU,D.eRR],x._)
D.eLU=new C.bh("attract","Attract",A.yD)
D.eLG=new C.bh("scare","Scare",A.ri)
D.eKN=new C.bh("food","Food",A.ue)
D.bI_=new C.a0(983158,"MaterialIcons",!1)
D.eMd=new C.bh("hunt","Hunt",D.bI_)
D.cYK=w([D.eLU,D.eLG,D.eKN,D.eMd],x.c)
D.cZa=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cZq=w([47,100,220,470,1000],x.n)
D.ax0=w([0,2,4,7,9],x.t)
D.In={volts:0}
D.a4x=new C.bl(D.In,[3],x.J)
D.IK=new C.e9(["b","battery",0.2,0.3,D.a4x])
D.e8c={on:0}
D.drb=new C.bl(D.e8c,[1],x.J)
D.Dq=new C.e9(["s","switch",0.5,0.3,D.drb])
D.eQ1=new C.e9(["l","bulb",0.8,0.3,A.j7])
D.cUW=w([D.IK,D.Dq,D.eQ1],x.d)
D.Dp=new C.cx(["b",0,"s",0])
D.eP2=new C.cx(["s",1,"l",0])
D.aN6=new C.cx(["l",1,"b",1])
D.daR=w([D.Dp,D.eP2,D.aN6],x.o)
D.cUp=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ekQ=new B.mC("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cUW,D.daR,D.cUp)
D.aHb={ohms:0}
D.aEL=new C.bl(D.aHb,[220],x.J)
D.ePv=new C.e9(["r","resistor",0.5,0.3,D.aEL])
D.eQg=new C.e9(["d","led",0.8,0.3,A.j7])
D.de_=w([D.IK,D.ePv,D.eQg],x.d)
D.eOo=new C.cx(["b",0,"r",0])
D.eOX=new C.cx(["r",1,"d",0])
D.eOu=new C.cx(["d",1,"b",1])
D.dmO=w([D.eOo,D.eOX,D.eOu],x.o)
D.deq=w(["led","diode","indicator"],x.s)
D.ekX=new B.mC("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.de_,D.dmO,D.deq)
D.a5O={level:0}
D.dqx=new C.bl(D.a5O,[0.2],x.J)
D.ePB=new C.e9(["p","pot",0.5,0.3,D.dqx])
D.ePD=new C.e9(["m","motor",0.8,0.3,A.j7])
D.cVe=w([D.IK,D.ePB,D.ePD],x.d)
D.eOn=new C.cx(["b",0,"p",0])
D.eOT=new C.cx(["p",1,"m",0])
D.eOP=new C.cx(["m",1,"b",1])
D.diz=w([D.eOn,D.eOT,D.eOP],x.o)
D.day=w(["fan","motor","spin","dimmer"],x.s)
D.ekO=new B.mC("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cVe,D.diz,D.day)
D.a4u=new C.bl(D.a5O,[0.9],x.J)
D.aNd=new C.e9(["s","solar",0.25,0.3,D.a4u])
D.aNc=new C.e9(["l","bulb",0.75,0.3,A.j7])
D.cXP=w([D.aNd,D.aNc],x.d)
D.eP_=new C.cx(["s",0,"l",0])
D.eOO=new C.cx(["l",1,"s",1])
D.cVZ=w([D.eP_,D.eOO],x.o)
D.dj9=w(["solar","sun","without battery","no battery","free"],x.s)
D.ekR=new B.mC("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cXP,D.cVZ,D.dj9)
D.eQj=new C.e9(["c","crank",0.25,0.3,D.a4u])
D.d8V=w([D.eQj,D.aNc],x.d)
D.eOr=new C.cx(["c",0,"l",0])
D.eON=new C.cx(["l",1,"c",1])
D.d9t=w([D.eOr,D.eON],x.o)
D.d93=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ekN=new B.mC("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d8V,D.d9t,D.d93)
D.dqw=new C.bl(D.a5O,[0.7],x.J)
D.ePG=new C.e9(["t","turbine",0.25,0.3,D.dqw])
D.ePt=new C.e9(["m","motor",0.75,0.3,A.j7])
D.d3q=w([D.ePG,D.ePt],x.d)
D.ePa=new C.cx(["t",0,"m",0])
D.eOQ=new C.cx(["m",1,"t",1])
D.d2q=w([D.ePa,D.eOQ],x.o)
D.d7K=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ekK=new B.mC("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d3q,D.d2q,D.d7K)
D.aEI=new C.bl(D.In,[9],x.J)
D.a6Q=new C.e9(["b","battery",0.2,0.3,D.aEI])
D.aNb=new C.e9(["r","radio",0.8,0.3,A.j7])
D.djM=w([D.a6Q,D.Dq,D.aNb],x.d)
D.eP4=new C.cx(["s",1,"r",0])
D.aN7=new C.cx(["r",1,"b",1])
D.c0l=w([D.Dp,D.eP4,D.aN7],x.o)
D.dil=w(["radio","music","listen"],x.s)
D.ekW=new B.mC("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.djM,D.c0l,D.dil)
D.drD=new C.bl(D.In,[12],x.J)
D.aNa=new C.e9(["b","battery",0.2,0.3,D.drD])
D.eQ2=new C.e9(["t","tv",0.8,0.3,A.j7])
D.cUY=w([D.aNa,D.Dq,D.eQ2],x.d)
D.eP5=new C.cx(["s",1,"t",0])
D.aN8=new C.cx(["t",1,"b",1])
D.dc0=w([D.Dp,D.eP5,D.aN8],x.o)
D.djJ=w(["tv","television","screen","watch"],x.s)
D.ekH=new B.mC("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cUY,D.dc0,D.djJ)
D.ePT=new C.e9(["z","buzzer",0.8,0.3,A.j7])
D.cBe=w([D.IK,D.Dq,D.ePT],x.d)
D.eP6=new C.cx(["s",1,"z",0])
D.ePo=new C.cx(["z",1,"b",1])
D.cQ5=w([D.Dp,D.eP6,D.ePo],x.o)
D.dgI=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ekT=new B.mC("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cBe,D.cQ5,D.dgI)
D.ePC=new C.e9(["h","heater",0.8,0.3,A.j7])
D.d6r=w([D.a6Q,D.Dq,D.ePC],x.d)
D.eP1=new C.cx(["s",1,"h",0])
D.eOC=new C.cx(["h",1,"b",1])
D.cQM=w([D.Dp,D.eP1,D.eOC],x.o)
D.cld=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ekI=new B.mC("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d6r,D.cQM,D.cld)
D.eQ4=new C.e9(["s","solar",0.2,0.25,D.a4u])
D.drK=new C.bl(D.aHb,[100],x.J)
D.eQ7=new C.e9(["r","resistor",0.55,0.25,D.drK])
D.eQe=new C.e9(["c","capacitor",0.85,0.25,A.j7])
D.ePy=new C.e9(["q","resistor",0.55,0.6,D.aEL])
D.eQ5=new C.e9(["d","led",0.85,0.6,A.j7])
D.dby=w([D.eQ4,D.eQ7,D.eQe,D.ePy,D.eQ5],x.d)
D.eP0=new C.cx(["s",0,"r",0])
D.eOW=new C.cx(["r",1,"c",0])
D.eOt=new C.cx(["c",1,"s",1])
D.eOs=new C.cx(["c",0,"q",0])
D.eOV=new C.cx(["q",1,"d",0])
D.eOv=new C.cx(["d",1,"c",1])
D.d0m=w([D.eP0,D.eOW,D.eOt,D.eOs,D.eOV,D.eOv],x.o)
D.d8h=w(["capacitor","store","charge","flash"],x.s)
D.ekV=new B.mC("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dby,D.d0m,D.d8h)
D.ePJ=new C.e9(["b","battery",0.15,0.3,D.a4x])
D.eQk=new C.e9(["l1","bulb",0.5,0.3,A.j7])
D.ePQ=new C.e9(["l2","bulb",0.85,0.3,A.j7])
D.cTb=w([D.ePJ,D.eQk,D.ePQ],x.d)
D.eOm=new C.cx(["b",0,"l1",0])
D.eOK=new C.cx(["l1",1,"l2",0])
D.eOL=new C.cx(["l2",1,"b",1])
D.d46=w([D.eOm,D.eOK,D.eOL],x.o)
D.dju=w(["series","two bulbs","dim"],x.s)
D.ekL=new B.mC("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cTb,D.d46,D.dju)
D.e8v={volts:0,charge:1}
D.drP=new C.bl(D.e8v,[1.5,0],x.J)
D.eQc=new C.e9(["b","battery",0.75,0.3,D.drP])
D.cSC=w([D.aNd,D.eQc],x.d)
D.eOZ=new C.cx(["s",0,"b",0])
D.eOq=new C.cx(["b",1,"s",1])
D.d0E=w([D.eOZ,D.eOq],x.o)
D.d8q=w(["charge","rechargeable","flat","recharge"],x.s)
D.ekJ=new B.mC("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cSC,D.d0E,D.d8q)
D.drC=new C.bl(D.In,[4.5],x.J)
D.ePE=new C.e9(["b","battery",0.2,0.3,D.drC])
D.aN9=new C.e9(["p","phone",0.8,0.3,A.j7])
D.d3g=w([D.ePE,D.Dq,D.aN9],x.d)
D.eP3=new C.cx(["s",1,"p",0])
D.a6P=new C.cx(["p",1,"b",1])
D.dfH=w([D.Dp,D.eP3,D.a6P],x.o)
D.dh8=w(["phone","charger","usb","mobile"],x.s)
D.ekP=new B.mC("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d3g,D.dfH,D.dh8)
D.ePq=new C.e9(["f","fan",0.8,0.3,A.j7])
D.cdl=w([D.IK,D.ePq],x.d)
D.eOl=new C.cx(["b",0,"f",0])
D.eOA=new C.cx(["f",1,"b",1])
D.cRi=w([D.eOl,D.eOA],x.o)
D.dax=w(["fan","cool","air","wind"],x.s)
D.ekY=new B.mC("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cdl,D.cRi,D.dax)
D.ePX=new C.e9(["b","battery",0.15,0.2,D.a4x])
D.ePr=new C.e9(["a","ammeter",0.5,0.2,A.j7])
D.ePp=new C.e9(["l","bulb",0.85,0.2,A.j7])
D.ePZ=new C.e9(["v","voltmeter",0.5,0.6,A.j7])
D.d8J=w([D.ePX,D.ePr,D.ePp,D.ePZ],x.d)
D.eOj=new C.cx(["b",0,"a",0])
D.eOi=new C.cx(["a",1,"l",0])
D.ePc=new C.cx(["v",0,"l",0])
D.ePd=new C.cx(["v",1,"l",1])
D.d0v=w([D.eOj,D.eOi,D.aN6,D.ePc,D.ePd],x.o)
D.dmN=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ekU=new B.mC("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d8J,D.d0v,D.dmN)
D.eQn=new C.e9(["b","battery",0.15,0.2,D.aEI])
D.ePI=new C.e9(["t","tv",0.55,0.2,A.j7])
D.aEJ=new C.bl(D.In,[5],x.J)
D.ePw=new C.e9(["c","buck",0.4,0.5,D.aEJ])
D.ePK=new C.e9(["p","phone",0.8,0.5,A.j7])
D.cZd=w([D.eQn,D.ePI,D.ePw,D.ePK],x.d)
D.eOp=new C.cx(["b",0,"t",0])
D.aN4=new C.cx(["b",0,"c",0])
D.aN5=new C.cx(["c",1,"p",0])
D.d3d=w([D.eOp,D.aN8,D.aN4,D.aN5,D.a6P],x.o)
D.cXp=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ekM=new B.mC("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cZd,D.d3d,D.cXp)
D.ePx=new C.e9(["c","buck",0.5,0.3,D.aEJ])
D.cQD=w([D.aNa,D.ePx,D.aN9],x.d)
D.cVo=w([D.aN4,D.aN5,D.a6P],x.o)
D.coE=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ekG=new B.mC("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cQD,D.cVo,D.coE)
D.ePO=new C.e9(["d","diode",0.5,0.3,A.j7])
D.d4j=w([D.a6Q,D.ePO,D.aNb],x.d)
D.eOk=new C.cx(["b",0,"d",0])
D.eOw=new C.cx(["d",1,"r",0])
D.cDM=w([D.eOk,D.eOw,D.aN7],x.o)
D.cX5=w(["diode","protect","backwards","one way"],x.s)
D.ekS=new B.mC("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d4j,D.cDM,D.cX5)
D.Ql=w([D.ekQ,D.ekX,D.ekO,D.ekR,D.ekN,D.ekK,D.ekW,D.ekH,D.ekT,D.ekI,D.ekV,D.ekL,D.ekJ,D.ekP,D.ekY,D.ekU,D.ekM,D.ekG,D.ekS],C.ax("O<mC>"))
D.he2=new B.G8("Moon",1.62,A.dt,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.he0=new B.G8("Mars",3.71,A.av,"Mars has about 38 percent of Earth's gravity.")
D.he3=new B.G8("Mercury",3.7,A.k2,"Mercury is small, so its gravity is like Mars.")
D.hdY=new B.G8("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.he_=new B.G8("Earth",9.81,A.aO,"On Earth gravity is strong, and the air also slows you down.")
D.he1=new B.G8("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.hdZ=new B.G8("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rt=w([D.he2,D.he0,D.he3,D.hdY,D.he_,D.he1,D.hdZ],C.ax("O<G8>"))
D.d0k=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a30=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d12=w([0.2,0.5,0.8],x.n)
D.bGv=new C.a0(63040,"MaterialIcons",!1)
D.eLK=new C.bh("peg","Peg",D.bGv)
D.eKR=new C.bh("bar","Bar",R.C3)
D.eLk=new C.bh("erase","Erase",A.ND)
D.d1f=w([D.eLK,D.eKR,D.eLk],x.c)
D.eV5=new C.cS(A.bk,A.J,4)
D.d1r=w([D.eV5],x.q)
D.axg=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWG=new B.Kq(0,"accordion")
D.cRB=w([A.ju,A.C4,A.BQ],x.w)
D.cYC=w(["Mail","SMS","Ad"],x.s)
D.cS7=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hcf=new B.AF(D.aWG,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ay2,D.cRB,D.cYC,D.cS7)
D.aaq=new B.Kq(1,"flip")
D.d8b=w([A.q9,A0.GJ,A.uf],x.w)
D.d2X=w(["Unlock","Verify","Secure"],x.s)
D.cQz=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hce=new B.AF(D.aaq,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axy,D.d8b,D.d2X,D.cQz)
D.aWH=new B.Kq(2,"towers")
D.d1L=w([A.yz,A.qd,A.hV],x.w)
D.d1m=w(["Save","Grow","Earn"],x.s)
D.cEE=w(["","",""],x.s)
D.hcg=new B.AF(D.aWH,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2S,D.d1L,D.d1m,D.cEE)
D.aar=new B.Kq(3,"assemble")
D.d96=w([A.nq,A.hc,A.dY],x.w)
D.cY0=w(["Launch","Charge","Shine"],x.s)
D.d5A=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hci=new B.AF(D.aar,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avX,D.d96,D.cY0,D.d5A)
D.aWI=new B.Kq(4,"carousel")
D.d8W=w([A.b7,A.f3],x.O)
D.cYM=w([A.mC,A.alW,A.Oe],x.w)
D.cTz=w(["Explore","Discover","Learn"],x.s)
D.d3l=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hcd=new B.AF(D.aWI,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d8W,D.cYM,D.cTz,D.d3l)
D.aWJ=new B.Kq(5,"burst")
D.d1h=w([A.i5,A.ts],x.O)
D.cS2=w([A.ls,A.mA,A.ia],x.w)
D.cSo=w(["Cheer","Win","Love"],x.s)
D.cUv=w(["Make some noise","First place","Share the joy"],x.s)
D.hch=new B.AF(D.aWJ,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d1h,D.cS2,D.cSo,D.cUv)
D.axh=w([D.hcf,D.hce,D.hcg,D.hci,D.hcd,D.hch],C.ax("O<AF>"))
D.eLM=new C.bh("skin","Skin",A.alX)
D.eNc=new C.bh("muscle","Muscles",A.NP)
D.eMU=new C.bh("organ","Organs",A.ia)
D.bFW=new C.a0(62747,"MaterialIcons",!1)
D.eN_=new C.bh("bone","Skeleton",D.bFW)
D.eNi=new C.bh("vessel","Blood vessels",A.qf)
D.d1R=w([D.eLM,D.eNc,D.eMU,D.eN_,D.eNi],x.c)
D.eRV=new B.uV("Simple legs","Light. Land gently.",0.15,0.2)
D.eRX=new B.uV("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eS_=new B.uV("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cu=w([D.eRV,D.eRX,D.eS_],x._)
D.d3v=w([1.77,3.55,7.15,16.7],x.n)
D.d60=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eHi=new C.z("spiral","Spiral")
D.epJ=new C.z("barred","Barred spiral")
D.eBm=new C.z("elliptical","Elliptical")
D.d6H=w([D.eHi,D.epJ,D.eBm],x.K)
D.eO0=new C.cx(["beat",0.18,0.28,0])
D.eP7=new C.cx(["burst",0.7,0.2,0])
D.ePi=new C.cx(["delay",0.45,0.5,1])
D.eOS=new C.cx(["ripple",0.75,0.6,3])
D.cXK=w([D.eO0,D.eP7,D.ePi,D.eOS],x.e)
D.d7y=w([N.lf,M.IJ,F.SV],x.u)
D.hbu=new B.FU("First spark","A clock lights a burst and a ripple",D.cXK,D.d7y)
D.eOz=new C.cx(["beat",0.15,0.3,1])
D.eNF=new C.cx(["ripple",0.62,0.15,0])
D.ePe=new C.cx(["delay",0.4,0.45,0])
D.eOf=new C.cx(["ripple",0.7,0.45,0])
D.eNX=new C.cx(["delay",0.4,0.7,1])
D.eOU=new C.cx(["shake",0.75,0.75,0])
D.dkB=w([D.eOz,D.eNF,D.ePe,D.eOf,D.eNX,D.eOU],x.e)
D.emH=new C.z(2,4)
D.aMS=new C.z(4,5)
D.d0a=w([N.lf,M.IJ,F.SV,D.emH,D.aMS],x.u)
D.hbw=new B.FU("Heartbeat","Two thumps, then a shake",D.dkB,D.d0a)
D.eO5=new C.cx(["dice",0.15,0.7,1])
D.ePk=new C.cx(["echo",0.4,0.7,0])
D.eOd=new C.cx(["comet",0.7,0.5,4])
D.eP8=new C.cx(["burst",0.72,0.2,1])
D.eOx=new C.cx(["burst",0.3,0.25,0])
D.eO6=new C.cx(["pop",0.55,0.85,0])
D.ckN=w([D.eO5,D.ePk,D.eOd,D.eP8,D.eOx,D.eO6],x.e)
D.em6=new C.z(1,3)
D.em7=new C.z(1,4)
D.aMP=new C.z(0,5)
D.d8R=w([N.lf,W.uM,D.em6,D.em7,D.aMP],x.u)
D.hbv=new B.FU("Fireworks","Dice launch comets that burst in colour",D.ckN,D.d8R)
D.eOa=new C.cx(["beat",0.15,0.2,2])
D.eOH=new C.cx(["chance",0.4,0.2,0])
D.eO2=new C.cx(["ball",0.7,0.12,3])
D.eNQ=new C.cx(["chance",0.4,0.5,1])
D.ePj=new C.cx(["ball",0.3,0.08,1])
D.eNJ=new C.cx(["ripple",0.7,0.55,3])
D.cdO=w([D.eOa,D.eOH,D.eO2,D.eNQ,D.ePj,D.eNJ],x.e)
D.emI=new C.z(2,5)
D.cAZ=w([N.lf,W.uM,M.a6E,F.SW,D.emI],x.u)
D.hbt=new B.FU("Rain","Balls fall at random and splash",D.cdO,D.cAZ)
D.eOI=new C.cx(["beat",0.12,0.45,2])
D.eP9=new C.cx(["toggle",0.38,0.2,0])
D.ePg=new C.cx(["wash",0.7,0.15,4])
D.eO4=new C.cx(["count3",0.38,0.45,0])
D.ePb=new C.cx(["burst",0.72,0.4,0])
D.eOy=new C.cx(["light",0.55,0.7,1])
D.eNR=new C.cx(["pop",0.8,0.8,4])
D.dbw=w([D.eOI,D.eP9,D.ePg,D.eO4,D.ePb,D.eOy,D.eNR],x.e)
D.enc=new C.z(3,6)
D.cgX=w([N.lf,W.uM,M.a6E,F.SW,D.aMP,D.enc],x.u)
D.hbr=new B.FU("Disco","A beat drives lights, washes and bursts",D.dbw,D.cgX)
D.ePn=new C.cx(["button",0.12,0.2,0])
D.eNL=new C.cx(["delay",0.34,0.2,1])
D.ePm=new C.cx(["light",0.56,0.2,1])
D.ePf=new C.cx(["delay",0.56,0.45,1])
D.eOJ=new C.cx(["ball",0.34,0.6,0])
D.eNP=new C.cx(["delay",0.34,0.8,1])
D.eNE=new C.cx(["burst",0.7,0.8,5])
D.c10=w([D.ePn,D.eNL,D.ePm,D.ePf,D.eOJ,D.eNP,D.eNE],x.e)
D.epl=new C.z(5,6)
D.dgR=w([N.lf,W.uM,F.SV,F.SW,D.aMS,D.epl],x.u)
D.hbs=new B.FU("Domino","Tap the button and watch it run down the line",D.c10,D.dgR)
D.axC=w([D.hbu,D.hbw,D.hbv,D.hbt,D.hbr,D.hbs],C.ax("O<FU>"))
D.d6P=w([0.05,0.15,0.25],x.n)
D.d72=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d7J=w([1.5,3,4.5,9,12],x.n)
D.eKn=new C.bh("dice","Dice",A.mz)
D.eLs=new C.bh("coin","Coin",K.ys)
D.eNd=new C.bh("num","Number",A.yB)
D.d7W=w([D.eKn,D.eLs,D.eNd],x.c)
D.d7Z=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fLu=new B.Pa("Moon",1.62,0,4291941851)
D.fLv=new B.Pa("Mars",3.71,0.01,4294472049)
D.fLw=new B.Pa("Earth",9.81,1,4281908728)
D.fLy=new B.Pa("Jupiter",24.79,1.4,4294677052)
D.fLx=new B.Pa("Sun",274,2,4294688548)
D.z2=w([D.fLu,D.fLv,D.fLw,D.fLy,D.fLx],C.ax("O<Pa>"))
D.axI=w([A.c8,A.aM,A.b_,A.aO,A.bu,A.bU,A.ct,A.hm],x.O)
D.e6u={H:0}
D.drc=new C.bl(D.e6u,[2],x.I)
D.dsM=new B.tn("Hydrogen","H\u2082",D.drc,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e6v={H:0,Cl:1}
D.drp=new C.bl(D.e6v,[1,1],x.I)
D.dsO=new B.tn("Hydrogen chloride","HCl",D.drp,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e6w={H:0,O:1}
D.dqU=new C.bl(D.e6w,[2,1],x.I)
D.dsP=new B.tn("Water","H\u2082O",D.dqU,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e6K={N:0,H:1}
D.drO=new C.bl(D.e6K,[1,3],x.I)
D.dsX=new B.tn("Ammonia","NH\u2083",D.drO,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5N={C:0,H:1}
D.drH=new C.bl(D.a5N,[1,4],x.I)
D.dsQ=new B.tn("Methane","CH\u2084",D.drH,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e6x={H:0,S:1}
D.dq_=new C.bl(D.e6x,[2,1],x.I)
D.dsW=new B.tn("Hydrogen sulfide","H\u2082S",D.dq_,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e6P={O:0}
D.drM=new C.bl(D.e6P,[2],x.I)
D.dsY=new B.tn("Oxygen","O\u2082",D.drM,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e6J={N:0}
D.drd=new C.bl(D.e6J,[2],x.I)
D.dsN=new B.tn("Nitrogen","N\u2082",D.drd,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e6j={C:0,O:1}
D.drT=new C.bl(D.e6j,[1,2],x.I)
D.dsU=new B.tn("Carbon dioxide","CO\u2082",D.drT,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aH8={C:0,H:1,O:2}
D.dpH=new C.bl(D.aH8,[1,2,1],x.I)
D.dsV=new B.tn("Formaldehyde","CH\u2082O",D.dpH,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.drG=new C.bl(D.a5N,[2,4],x.I)
D.dsS=new B.tn("Ethene","C\u2082H\u2084",D.drG,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.drF=new C.bl(D.a5N,[2,6],x.I)
D.dsR=new B.tn("Ethane","C\u2082H\u2086",D.drF,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dpI=new C.bl(D.aH8,[1,4,1],x.I)
D.dsT=new B.tn("Methanol","CH\u2083OH",D.dpI,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a3h=w([D.dsM,D.dsO,D.dsP,D.dsX,D.dsQ,D.dsW,D.dsY,D.dsN,D.dsU,D.dsV,D.dsS,D.dsR,D.dsT],C.ax("O<tn>"))
D.d8X=w([A.bU,A.aO,A.dQ,A.b_],x.O)
D.d9S=w([],x.h)
D.d9W=w([],x.B)
D.a3q=w([],x.F)
D.eer=new B.ed("battery","Battery","\ud83d\udd0b",A.b_,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eex=new B.ed("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.efb=new B.ed("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eeO=new B.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aO,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eej=new B.ed("buck","Step-down converter","\ud83d\udd3d",A.hm,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eeM=new B.ed("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.efg=new B.ed("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eeY=new B.ed("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eeC=new B.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.efd=new B.ed("fuse","Fuse","\ud83e\uddef",A.c8,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eeb=new B.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hm,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eeZ=new B.ed("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.ef0=new B.ed("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eez=new B.ed("led","LED","\ud83d\udd34",A.av,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eeD=new B.ed("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eeV=new B.ed("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ees=new B.ed("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eeQ=new B.ed("capacitor","Capacitor","\ud83e\udeab",A.cl,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eeI=new B.ed("radio","Radio","\ud83d\udcfb",A.o_,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eeF=new B.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b7,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eei=new B.ed("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eep=new B.ed("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eev=new B.ed("fan","Fan","\ud83c\udf00",A.aO,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.efi=new B.ed("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.ef7=new B.ed("clock","Digital clock","\u23f0",A.b_,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eeL=new B.ed("calculator","Calculator","\ud83e\uddee",A.KY,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eeo=new B.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cl,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.efh=new B.ed("router","WiFi router","\ud83d\udcf6",A.hm,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.efk=new B.ed("siren","Siren","\ud83d\udea8",A.av,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eee=new B.ed("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.efl=new B.ed("kettle","Kettle","\ud83e\uded6",A.mn,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eem=new B.ed("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eey=new B.ed("lights","Party lights","\ud83c\udf84",A.o_,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eeJ=new B.ed("fridge","Fridge","\ud83e\uddca",A.fX,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eeg=new B.ed("washer","Washing machine","\ud83e\udee7",A.cl,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.ef8=new B.ed("blender","Blender","\ud83e\udd64",A.c8,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eeG=new B.ed("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eel=new B.ed("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eeK=new B.ed("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ef5=new B.ed("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eeh=new B.ed("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ef_=new B.ed("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eeu=new B.ed("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eeU=new B.ed("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.efa=new B.ed("heartmon","Heart monitor","\ud83e\ude7a",A.h5,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eef=new B.ed("aquarium","Aquarium","\ud83d\udc20",A.b7,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eeP=new B.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eeX=new B.ed("discoball","Disco ball","\ud83e\udea9",A.o_,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eff=new B.ed("robot","Robot","\ud83e\udd16",A.aO,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eed=new B.ed("toaster","Toaster","\ud83c\udf5e",A.dS,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.efj=new B.ed("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ef4=new B.ed("pump","Water pump","\ud83d\udeb0",A.aO,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eeR=new B.ed("hairdryer","Hair dryer","\ud83d\udca8",A.i5,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.ef2=new B.ed("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.een=new B.ed("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.efe=new B.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.cl,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eea=new B.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h5,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eeH=new B.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eeA=new B.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bN,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eeW=new B.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tp,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eec=new B.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eeq=new B.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.efc=new B.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eeS=new B.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bc,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eeN=new B.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.ef3=new B.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.av,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eeB=new B.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b_,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eeT=new B.ed("honor","Honor Magic V5","\ud83d\udcf1",A.cl,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ef1=new B.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ef6=new B.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ee9=new B.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eeE=new B.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eew=new B.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b7,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eek=new B.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eet=new B.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.av,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ef9=new B.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QM=w([D.eer,D.eex,D.efb,D.eeO,D.eej,D.eeM,D.efg,D.eeY,D.eeC,D.efd,D.eeb,D.eeZ,D.ef0,D.eez,D.eeD,D.eeV,D.ees,D.eeQ,D.eeI,D.eeF,D.eei,D.eep,D.eev,D.efi,D.ef7,D.eeL,D.eeo,D.efh,D.efk,D.eee,D.efl,D.eem,D.eey,D.eeJ,D.eeg,D.ef8,D.eeG,D.eel,D.eeK,D.ef5,D.eeh,D.ef_,D.eeu,D.eeU,D.efa,D.eef,D.eeP,D.eeX,D.eff,D.eed,D.efj,D.ef4,D.eeR,D.ef2,D.een,D.efe,D.eea,D.eeH,D.eeA,D.eeW,D.eec,D.eeq,D.efc,D.eeS,D.eeN,D.ef3,D.eeB,D.eeT,D.ef1,D.ef6,D.ee9,D.eeE,D.eew,D.eek,D.eet,D.ef9],C.ax("O<ed>"))
D.dai=w([0,0.46,0.82],x.n)
D.dat=w([5,10,15,25,45,60],x.t)
D.daP=w([-0.045,0.03,-0.015],x.n)
D.dbc=w([0.9,0.97,1],x.n)
D.aya=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.up=w([0.05,0.2,0.35],x.n)
D.cSs=w([D.F6,D.F6],x.O)
D.cXG=w([A.Fg,A.M],x.O)
D.cWK=w([A.fl,A.hA],x.O)
D.cQv=w([A.f3,A.nZ],x.O)
D.cdj=w([A.lP,A.dy],x.O)
D.ayb=w([D.cSs,D.cXG,D.cWK,D.cQv,D.cdj],x.Q)
D.fLi=new B.v8("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fLj=new B.v8("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fLa=new B.v8("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fLh=new B.v8("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fLf=new B.v8("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fLb=new B.v8("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fLg=new B.v8("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fLc=new B.v8("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fLe=new B.v8("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fLd=new B.v8("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.CA=w([D.fLi,D.fLj,D.fLa,D.fLh,D.fLf,D.fLb,D.fLg,D.fLc,D.fLe,D.fLd],C.ax("O<v8>"))
D.bhd=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.dcu=w([D.F6,D.bhd,D.aez,A.ae3],x.O)
D.b2Y=new C.ac(0,A.G,A.hQ,A.dE,6)
D.ddp=w([D.b2Y],x.V)
D.elh=new C.z(0,"AND")
D.em8=new C.z(1,"Adder")
D.emJ=new C.z(2,"Blinker")
D.end=new C.z(3,"Memory")
D.dec=w([D.elh,D.em8,D.emJ,D.end],x.E)
D.ayn=w([-104,0,104],x.n)
D.ayo=w([-14,3],x.n)
D.df1=w([-8,0,8],x.n)
D.ayw=w([-92,0,92],x.n)
D.dfq=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eRS=new B.uV("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eRZ=new B.uV("Medium tank","Balanced.",0.35,1)
D.eRY=new B.uV("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.R_=w([D.eRS,D.eRZ,D.eRY],x._)
D.nv=w([0.04,0.2,0.36],x.n)
D.ayH=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eMT=new C.bh(D.aWG,"Fold",K.amT)
D.eM0=new C.bh(D.aaq,"Flip",A.Gm)
D.bGe=new C.a0(62889,"MaterialIcons",!1)
D.eNb=new C.bh(D.aWH,"Rise",D.bGe)
D.an6=new C.a0(983870,"MaterialIcons",!1)
D.eJT=new C.bh(D.aar,"Assemble",D.an6)
D.eK2=new C.bh(D.aWI,"Spin",D.alp)
D.eK_=new C.bh(D.aWJ,"Pop",A.ls)
D.dgO=w([D.eMT,D.eM0,D.eNb,D.eJT,D.eK2,D.eK_],C.ax("O<+(Kq,m,a0)>"))
D.ayM=w([A.bU,A.dQ,A.bv,A.aO,A.bu,A.c8],x.O)
D.dh0=w([A.aO,A.ct,A.ct,A.b_],x.O)
D.dhd=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eIN=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.et7=new C.z("Make the output turn TWICE as fast.",2)
D.emi=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eHs=new C.z("Make the output turn 4 times faster.",4)
D.eyP=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eBY=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eAs=new C.z("Make the output turn 3 times faster.",3)
D.eBd=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ayR=w([D.eIN,D.et7,D.emi,D.eHs,D.eyP,D.eBY,D.eAs,D.eBd],C.ax("O<+(m,K)>"))
D.dib=w([3,4.5,5,6,9],x.n)
D.b3w=new C.ac(0,A.G,A.aW,A.J,16)
D.diD=w([D.b3w],x.V)
D.R2=w([A.bU,A.bH,A.b_,A.aO,A.bu,A.c8,A.c,A.ct],x.O)
D.dj6=w(["solar","turbine","crank","pot"],x.s)
D.djs=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.djy=w([0,0.35,0.75,1],x.n)
D.eKh=new C.bh("drop","Drop",D.amJ)
D.eKj=new C.bh("weight","Weight",U.ana)
D.eN5=new C.bh("cannon","Newton's cannon",A.am8)
D.dkh=w([D.eKh,D.eKj,D.eN5],x.c)
D.eG5=new C.z("piano","Piano")
D.eFM=new C.z("organ","Organ")
D.eA9=new C.z("bell","Bell")
D.eG7=new C.z("pluck","Pluck")
D.eHr=new C.z("synth","Synth")
D.eBT=new C.z("flute","Flute")
D.az7=w([D.eG5,D.eFM,D.eA9,D.eG7,D.eHr,D.eBT],x.K)
D.dkP=w(["volts","level","ohms","on"],x.s)
D.dmc=w([A.ju,A.C4,A.BQ,A.q9,A0.GJ,A.uf,A.yz,A.qd,A.hV,A.nq,A.hc,A.dY,A.ia,A.ib,A.mA,A.lY,A.w1,A.rp,A.lZ,A.Ge,A.ue,A.BW,A.BS,A.amE,A.NH,A.yv,A.NP,A.amj,T.an2,A.ls],x.w)
D.dn6=w([0.72,1],x.n)
D.dnj=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e8i={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dpz=new C.bl(D.e8i,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aHa={A:0,T:1,C:2,G:3}
D.a4o=new C.bl(D.aHa,["U","A","G","C"],x.l)
D.dpJ=new C.bl(D.aHa,["T","A","G","C"],x.l)
D.e6G={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d90=w([0,2,4,5,7,9,11],x.t)
D.cRI=w([0,2,3,5,7,8,10],x.t)
D.deo=w([0,3,5,6,7,10],x.t)
D.CH=new C.bl(D.e6G,[D.ax0,D.d90,D.cRI,D.deo,D.apA],C.ax("bl<m,ai<F>>"))
D.e84={A:0,T:1,U:2,C:3,G:4}
D.dq2=new C.bl(D.e84,[A.c8,A.cl,A.cl,A.aM,A.b_],C.ax("bl<m,w>"))
D.e61={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h4J=new B.yc("Switch",F.uh,A.bH,0,"Tap it to turn it ON or OFF.")
D.h4F=new B.yc("Blinker",A.p0,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h4G=new B.yc("AND",D.an6,A.cl,2,"ON only when BOTH inputs are ON.")
D.bHI=new C.a0(63671,"MaterialIcons",!1)
D.h4E=new B.yc("OR",D.bHI,A.bu,2,"ON when EITHER input is ON.")
D.h4H=new B.yc("XOR",G.a0m,A.bU,2,"ON when the inputs are DIFFERENT.")
D.h4B=new B.yc("NAND",A.u3,A.aO,2,"OFF only when BOTH inputs are ON.")
D.bGP=new C.a0(63176,"MaterialIcons",!1)
D.h4C=new B.yc("NOR",D.bGP,A.hm,2,"ON only when BOTH inputs are OFF.")
D.h4D=new B.yc("NOT",A_.C5,A.ct,1,"Flips the signal: ON becomes OFF.")
D.h4I=new B.yc("Light",A.rk,A.dQ,1,"Glows when its input is ON.")
D.h4K=new B.yc("Buzzer",A.ob,A.c8,1,"Beeps while its input is ON.")
D.zg=new C.bl(D.e61,[D.h4J,D.h4F,D.h4G,D.h4E,D.h4H,D.h4B,D.h4C,D.h4D,D.h4I,D.h4K],C.ax("bl<m,yc>"))
D.e81={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eKI=new C.bh(3,20,1.9)
D.eKc=new C.bh(33,90,1.6)
D.eNw=new C.bh(52,15,3.2)
D.eNu=new C.bh(45,-100,1.8)
D.eLV=new C.bh(-15,-60,1.9)
D.eLm=new C.bh(-25,140,2.4)
D.eLc=new C.bh(-82,0,2.2)
D.aEy=new C.bl(D.e81,[D.eKI,D.eKc,D.eNw,D.eNu,D.eLV,D.eLm,D.eLc],C.ax("bl<m,+(K,K,K)>"))
D.cR3=w([A.A],x.M)
D.cRo=w([A.az,A.aC],x.M)
D.d_d=w([A.az,A.A,A.aC],x.M)
D.d0K=w([A.az,A.li,A.A,A.lI,A.aC],x.M)
D.de8=w([A.az,A.li,A.a3,A.a8,A.lI,A.aC],x.M)
D.dr0=new C.dt([1,D.cR3,2,D.cRo,3,D.d_d,4,A.azc,5,D.d0K,6,D.de8],C.ax("dt<F,ai<dc>>"))
D.e6H={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eM7=new C.bh(1,A.bN,"Hydrogen")
D.eKX=new C.bh(4,A.bn,"Carbon")
D.eJU=new C.bh(3,A.d_,"Nitrogen")
D.eMs=new C.bh(2,A.av,"Oxygen")
D.eLO=new C.bh(2,A.bH,"Sulfur")
D.eN2=new C.bh(1,A.bc,"Chlorine")
D.wi=new C.bl(D.e6H,[D.eM7,D.eKX,D.eJU,D.eMs,D.eLO,D.eN2],C.ax("bl<m,+(F,w,m)>"))
D.e8t={Calm:0,Box:1,Sleep:2}
D.cys=w([4,2,6,0],x.n)
D.cyz=w([4,4,4,4],x.n)
D.cyA=w([4,7,8,0],x.n)
D.Rr=new C.bl(D.e8t,[D.cys,D.cyz,D.cyA],C.ax("bl<m,ai<K>>"))
D.e6b={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wY=new B.a0j(0,"source")
D.d0d=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.ha7=new B.q7("Clock",A.p0,D.wY,A.bv,D.d0d)
D.ha3=new B.q7("Button",A.yD,D.wY,A.aM,A.U)
D.din=w(["random","quick","slow"],x.s)
D.hae=new B.q7("Dice",A.mz,D.wY,A.bU,D.din)
D.bHn=new C.a0(63484,"MaterialIcons",!1)
D.E4=new B.a0j(1,"logic")
D.dn1=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.haa=new B.q7("Delay",D.bHn,D.E4,A.cl,D.dn1)
D.daA=w(["fast","mid","slow"],x.s)
D.haf=new B.q7("Echo",A.amy,D.E4,A.bu,D.daA)
D.hac=new B.q7("Every 2nd",A_.C5,D.E4,A.hm,A.U)
D.bH2=new C.a0(63309,"MaterialIcons",!1)
D.ha9=new B.q7("Every 3rd",D.bH2,D.E4,A.aO,A.U)
D.bJ0=new C.a0(983902,"MaterialIcons",!1)
D.c0q=w(["50%","25%","75%"],x.s)
D.hah=new B.q7("Chance",D.bJ0,D.E4,A.ct,D.c0q)
D.qJ=new B.a0j(2,"out")
D.ha5=new B.q7("Light",A.rk,D.qJ,A.dQ,A.U)
D.ha6=new B.q7("Burst",A.ls,D.qJ,A.bU,A.U)
D.ha4=new B.q7("Ripple",A.yG,D.qJ,A.b7,A.U)
D.had=new B.q7("Ball",A.amL,D.qJ,A.ct,A.U)
D.hab=new B.q7("Comet",A.nq,D.qJ,A.bu,A.U)
D.bIL=new C.a0(983669,"MaterialIcons",!1)
D.hag=new B.q7("Shake",D.bIL,D.qJ,A.c8,A.U)
D.hai=new B.q7("Pop",A.Gf,D.qJ,A.b_,A.U)
D.ha8=new B.q7("Wash",A.NT,D.qJ,A.pF,A.U)
D.mJ=new C.bl(D.e6b,[D.ha7,D.ha3,D.hae,D.haa,D.haf,D.hac,D.ha9,D.hah,D.ha5,D.ha6,D.ha4,D.had,D.hab,D.hag,D.hai,D.ha8],C.ax("bl<m,q7>"))
D.e85={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.CI=new C.bl(D.e85,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e6o={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zI=new B.Jn(0,"tv")
D.eTp=new B.m9("Samsung Neo QLED 8K",D.zI,F.EU,A.aO)
D.eTg=new B.m9("LG OLED evo G5",D.zI,A.ee,A.h5)
D.eT7=new B.m9("Sony Bravia 9",D.zI,A.qT,A.bs)
D.eTb=new B.m9("Apple TV 4K",D.zI,A.e4,A.bN)
D.eT8=new B.m9("Bang and Olufsen Beovision",D.zI,F.Ez,F.tp)
D.IO=new B.Jn(1,"iphone")
D.aNy=new B.m9("iPhone 18 Pro Max",D.IO,D.agK,A.cb)
D.wv=new B.Jn(3,"fold")
D.bnn=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eTl=new B.m9("iPhone Fold",D.wv,D.bnn,A.b6)
D.uP=new B.Jn(2,"android")
D.eTm=new B.m9("Samsung Galaxy S26 Ultra",D.uP,F.acV,A.d_)
D.bgM=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eTe=new B.m9("Samsung Galaxy Z Fold7",D.wv,D.bgM,A.cA)
D.eTa=new B.m9("Google Pixel 10 Pro XL",D.uP,A.dt,A.bc)
D.eTi=new B.m9("Xiaomi 16 Ultra",D.uP,A.lS,A.cc)
D.eTd=new B.m9("Huawei Mate 80 Pro Max",D.uP,A.ey,A.av)
D.eT9=new B.m9("OPPO Find X9 Ultra",D.uP,A.dX,A.b_)
D.eTr=new B.m9("Honor Magic V5",D.wv,A.d5,A.cl)
D.eTf=new B.m9("vivo X300 Pro",D.uP,A.hA,A.ct)
D.T2=new B.Jn(4,"tablet")
D.eTk=new B.m9("iPad Pro M5",D.T2,A.dt,A.aO)
D.a7_=new B.Jn(5,"reader")
D.eTs=new B.m9("Kindle Scribe",D.a7_,A.e2,A.bs)
D.zJ=new B.Jn(6,"computer")
D.eTj=new B.m9("MacBook Pro M5 Max",D.zJ,A.dt,A.cb)
D.eTo=new B.m9("iMac 32 inch",D.zJ,A.bN,A.cA)
D.eTh=new B.m9("Pro Display XDR 8K",D.zJ,A.lS,A.b7)
D.eTc=new B.m9("Sony Laser Projector",D.zJ,A.cp,A.dQ)
D.eTn=new B.m9("Luxury car touchscreen",D.zJ,L.mo,A.av)
D.eTq=new B.m9("Apple Vision Pro",D.zJ,A.h9,A.bu)
D.m5=new C.bl(D.e6o,[D.eTp,D.eTg,D.eT7,D.eTb,D.eT8,D.aNy,D.eTl,D.eTm,D.eTe,D.eTa,D.eTi,D.eTd,D.eT9,D.eTr,D.eTf,D.eTk,D.eTs,D.eTj,D.eTo,D.eTh,D.eTc,D.eTn,D.eTq],C.ax("bl<m,m9>"))
D.e6B={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bq5=new B.fQ(20,4,13,!1)
D.bqw=new B.fQ(14,5,13.5,!1)
D.bqn=new B.fQ(9,2.4,10,!1)
D.bqB=new B.fQ(7,5,12.5,!1)
D.bqq=new B.fQ(8,3.5,12,!1)
D.bq1=new B.fQ(15,2,6,!1)
D.bqz=new B.fQ(45,6,13.5,!0)
D.bqh=new B.fQ(10,8,13.5,!1)
D.bq9=new B.fQ(25,3,12,!0)
D.bqf=new B.fQ(35,4,12,!0)
D.bqg=new B.fQ(40,4.5,9.5,!0)
D.bqi=new B.fQ(55,3,9,!0)
D.bq2=new B.fQ(18,3,9,!1)
D.bqy=new B.fQ(22,4,13.5,!1)
D.bqr=new B.fQ(16,5,13.5,!1)
D.bqd=new B.fQ(30,4,9,!0)
D.bqK=new B.fQ(5,3.5,13,!1)
D.bql=new B.fQ(25,3,13.5,!0)
D.bqu=new B.fQ(14,2.5,9,!1)
D.bqk=new B.fQ(6,6,13,!1)
D.bqC=new B.fQ(30,1.2,5,!0)
D.bqJ=new B.fQ(35,3,4.5,!0)
D.bqF=new B.fQ(20,4.5,7.5,!0)
D.bqj=new B.fQ(55,5.5,13.5,!0)
D.bq0=new B.fQ(45,5.5,13.5,!0)
D.bqv=new B.fQ(40,5.5,13.5,!0)
D.bqI=new B.fQ(60,6,13.5,!0)
D.ahc=new B.fQ(28,4,7,!0)
D.Ft=new B.fQ(25,4,7,!0)
D.bqc=new B.fQ(30,4,7,!0)
D.bq7=new B.fQ(22,4,7,!0)
D.bq8=new B.fQ(24,4,7,!0)
D.bqm=new B.fQ(60,3,5.5,!0)
D.bq3=new B.fQ(18,9,14,!0)
D.bqa=new B.fQ(25,9,14,!0)
D.ahd=new B.fQ(30,8,14,!0)
D.bq6=new B.fQ(20,8,14,!0)
D.bqe=new B.fQ(30,9,14,!0)
D.bqD=new B.fQ(22,5,9.5,!0)
D.bq4=new B.fQ(30,2.5,10.5,!0)
D.bqs=new B.fQ(50,5.5,13.5,!0)
D.bqH=new B.fQ(12,2,9.5,!1)
D.bqp=new B.fQ(16,1.3,9.5,!0)
D.bqA=new B.fQ(40,2.5,7,!0)
D.bqG=new B.fQ(60,1.2,4.8,!0)
D.bqE=new B.fQ(18,5,13.5,!0)
D.bqx=new B.fQ(8,2,9.5,!1)
D.bqo=new B.fQ(12,2.5,8,!1)
D.bqb=new B.fQ(20,3.5,13.5,!0)
D.bqt=new B.fQ(3.5,3,13,!1)
D.zh=new C.bl(D.e6B,[D.bq5,D.bqw,D.bqn,D.bqB,D.bqq,D.bq1,D.bqz,D.bqh,D.bq9,D.bqf,D.bqg,D.bqi,D.bq2,D.bqy,D.bqr,D.bqd,D.bqK,D.bql,D.bqu,D.bqk,D.bqC,D.bqJ,D.bqF,D.bqj,D.bq0,D.bqv,D.bqI,D.ahc,D.Ft,D.bqc,D.Ft,D.bq7,D.Ft,D.bq8,D.ahc,D.Ft,D.bqm,D.bq3,D.bqa,D.ahd,D.bq6,D.bqe,D.bqD,D.bq4,D.bqs,D.bqH,D.bqp,D.bqA,D.bqG,D.Ft,D.ahd,D.bqE,D.bqx,D.bqo,D.bqb,D.bqt],C.ax("bl<m,fQ>"))
D.e6a={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eJp=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.epi=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.epd=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eBc=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eC9=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eB8=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eni=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ez8=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eJx=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eCu=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.esv=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.en0=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ery=new C.z("Movement","They pull your legs together and help you balance.")
D.etr=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.epr=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eH2=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eI4=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eyQ=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eHQ=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.exx=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eCD=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.en7=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.etO=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eCi=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.exR=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eHY=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eAE=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eng=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eDd=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eGG=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eEV=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.elt=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eAm=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eAq=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.euv=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.epF=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.etg=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ezi=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eFF=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eJu=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eCA=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.elb=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ezt=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.em1=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eFV=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eGZ=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ezT=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eG9=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.en9=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eHu=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eqY=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eFk=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eub=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.exM=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eCV=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eHF=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eHw=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eHB=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eyg=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eDJ=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eES=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eHj=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ezS=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ew7=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.euV=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eAh=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eCN=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ewG=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.exl=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.erj=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eGV=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.es5=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.elZ=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.euu=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.elU=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eq4=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.euz=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.ese=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eD9=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.etu=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eJc=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ev3=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eya=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eAM=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.esn=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.es7=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dsc=new C.bl(D.e6a,[D.eJp,D.epi,D.epd,D.eBc,D.eC9,D.eB8,D.eni,D.ez8,D.eJx,D.eCu,D.esv,D.en0,D.ery,D.etr,D.epr,D.eH2,D.eI4,D.eyQ,D.eHQ,D.exx,D.eCD,D.en7,D.etO,D.eCi,D.exR,D.eHY,D.eAE,D.eng,D.eDd,D.eGG,D.eEV,D.elt,D.eAm,D.eAq,D.euv,D.epF,D.etg,D.ezi,D.eFF,D.eJu,D.eCA,D.elb,D.ezt,D.em1,D.eFV,D.eGZ,D.ezT,D.eG9,D.en9,D.eHu,D.eqY,D.eFk,D.eub,D.exM,D.eCV,D.eHF,D.eHw,D.eHB,D.eyg,D.eDJ,D.eES,D.eHj,D.ezS,D.ew7,D.euV,D.eAh,D.eCN,D.ewG,D.exl,D.erj,D.eGV,D.es5,D.elZ,D.euu,D.elU,D.eq4,D.euz,D.ese,D.eD9,D.etu,D.eJc,D.ev3,D.eya,D.eAM,D.esn,D.es7],C.ax("bl<m,+(m,m)>"))
D.dse=new C.hC(A.G,11)
D.dsj=new C.hC(A.G,30)
D.dvB=new B.Ud(null)
D.dzq=new B.Uh(null)
D.dzr=new B.Ui(null)
D.dzE=new B.Uj(null)
D.dBF=new B.Um(null)
D.dBG=new B.Un(null)
D.dBH=new B.Uo(null)
D.dCu=new B.UL(null)
D.dCw=new B.V_(null)
D.dCx=new B.V0(null)
D.dCz=new B.V1(null)
D.dD6=new B.V8(null)
D.dF1=new B.Vc(null)
D.dF2=new B.Ve(null)
D.dF3=new B.Vf(null)
D.dF5=new B.Vg(null)
D.dGG=new B.Vx(null)
D.dGI=new B.Vz(null)
D.dGN=new B.VK(null)
D.dGY=new B.VL(null)
D.dHt=new B.VM(null)
D.dIY=new B.VO(null)
D.dKl=new B.VQ(null)
D.dKm=new B.VR(null)
D.dLH=new B.VU(null)
D.e0A=new B.VV(null)
D.e0C=new B.VW(null)
D.e0D=new B.VZ(null)
D.e0E=new B.W_(null)
D.e2x=new B.W7(null)
D.e2y=new B.W8(null)
D.e2G=new B.Wf(null)
D.e2P=new B.Wj(null)
D.e2Q=new B.Wk(null)
D.e2R=new B.a8j(null)
D.e3r=new B.Wm(null)
D.e4U=new B.Wq(null)
D.e8E=new C.u(0,118)
D.aHh=new C.u(0,13)
D.e8F=new C.u(0,17)
D.e8I=new C.u(0,330)
D.e8L=new C.u(0,-13)
D.aHn=new C.u(0,-14)
D.e8M=new C.u(0,-17)
D.e8N=new C.u(0,-18)
D.e8O=new C.u(0,-19)
D.e8P=new C.u(0,-20)
D.e8S=new C.u(0,-26)
D.e8T=new C.u(0,-28)
D.e8U=new C.u(0,-31)
D.e8V=new C.u(0,-32)
D.wp=new C.u(0,-6)
D.e8W=new C.u(0,-6771)
D.e8X=new C.u(0,-9)
D.e8Z=new C.u(-9.5,-11)
D.e9_=new C.u(10,20)
D.e91=new C.u(10,-13)
D.e92=new C.u(10,-22)
D.e93=new C.u(10,-4)
D.a5R=new C.u(11,8)
D.e95=new C.u(12,2)
D.e96=new C.u(14,0)
D.e97=new C.u(14,12)
D.aHr=new C.u(14,8)
D.e98=new C.u(14,-17)
D.e99=new C.u(14,-18)
D.aHs=new C.u(14,-3)
D.aHt=new C.u(14,-4)
D.e9a=new C.u(15,0)
D.e9b=new C.u(15,-12)
D.e9c=new C.u(16,-8)
D.e9d=new C.u(18,14)
D.e9e=new C.u(18,-12)
D.aHx=new C.u(20,0)
D.e9k=new C.u(20,15)
D.e9l=new C.u(20,-17)
D.e9m=new C.u(20,-3)
D.e9n=new C.u(21,8)
D.e9p=new C.u(22,10)
D.aHy=new C.u(22,8)
D.e9q=new C.u(24,0)
D.e9r=new C.u(24,2)
D.e9t=new C.u(24,-18)
D.e9u=new C.u(24,-22)
D.e9v=new C.u(25,8)
D.e9w=new C.u(26,0)
D.e9C=new C.u(28,-30)
D.e9H=new C.u(30,18)
D.e9I=new C.u(30,2)
D.e9J=new C.u(31,19)
D.e9K=new C.u(32,0)
D.aHB=new C.u(34,0)
D.aHC=new C.u(34,-32)
D.Io=new C.u(36,0)
D.e9P=new C.u(3,-1)
D.e9S=new C.u(40,3)
D.e9W=new C.u(4,11)
D.e9Z=new C.u(4,-2)
D.ea2=new C.u(5,0)
D.ea3=new C.u(5,17)
D.ea4=new C.u(5,6)
D.ea8=new C.u(6,11)
D.eae=new C.u(8,7)
D.eaf=new C.u(8,-10)
D.eag=new C.u(8,-14)
D.eah=new C.u(8,-3)
D.aHG=new C.u(9,0)
D.eak=new C.u(-20.5,-17.6)
D.eal=new C.u(-9,18.5)
D.eao=new C.u(-2.6,-1)
D.eap=new C.u(1.9,-0.8)
D.eas=new C.u(-0.22,0.09)
D.eax=new C.u(2.6,1)
D.eaE=new C.u(-9,12.2)
D.eaW=new C.u(-9,20.5)
D.ebd=new C.u(-10,0)
D.ebe=new C.u(-10,12)
D.aHN=new C.u(-10,4)
D.ebf=new C.u(-11,-2)
D.ebg=new C.u(-13,-5)
D.ebh=new C.u(-14,0)
D.ebi=new C.u(-14,13)
D.ebj=new C.u(-14,2)
D.ebk=new C.u(-14,-12)
D.ebl=new C.u(-14,-19)
D.ebm=new C.u(-14,-23)
D.ebn=new C.u(-15,6)
D.ebo=new C.u(-16,14)
D.ebp=new C.u(-16,-8)
D.ebq=new C.u(-17,10)
D.ebr=new C.u(-17,-18)
D.ebs=new C.u(-17,-8)
D.ebu=new C.u(-18,20)
D.ebv=new C.u(-18,-9)
D.aHP=new C.u(-20,0)
D.ebx=new C.u(-20,16)
D.eby=new C.u(-20,-9)
D.Sr=new C.u(-22,8)
D.ebz=new C.u(-22,-10)
D.ebA=new C.u(-22,-11)
D.ebB=new C.u(-24,10)
D.ebC=new C.u(-24,11)
D.ebD=new C.u(-24,14)
D.ebE=new C.u(-24,-22)
D.ebF=new C.u(-25,-11)
D.ebG=new C.u(-26,0)
D.ebH=new C.u(-26,-18)
D.ebI=new C.u(-2,9)
D.ebJ=new C.u(-2,-10)
D.ebK=new C.u(-2,-20)
D.ebL=new C.u(-2,-9)
D.ebM=new C.u(-32,0)
D.aHR=new C.u(-34,0)
D.ebR=new C.u(-40,3)
D.ebT=new C.u(-4,11)
D.ebU=new C.u(-4,-17)
D.ebV=new C.u(-4,-2)
D.ebX=new C.u(-5,0)
D.ebY=new C.u(-5,20)
D.ebZ=new C.u(-5,6)
D.ec_=new C.u(-6,26)
D.ec0=new C.u(-6,6)
D.ec1=new C.u(-6,-42)
D.ec2=new C.u(-7,-19)
D.ec3=new C.u(-7,-24)
D.ec4=new C.u(-8,-9)
D.a5V=new C.u(-9,0)
D.ec5=new C.u(-9,1)
D.ec6=new C.u(-9,-23)
D.fo4=new C.y("Thinking\u2026",null,A.hi,null,null,null,null,null,null,null,null,null)
D.ed2=new C.D(A.jK,D.fo4,null)
D.fEe=new C.y("Start from a ready-made board",null,A.fS,null,null,null,null,null,null,null,null,null)
D.edc=new C.D(A7.vG,D.fEe,null)
D.bxU=new C.R(4,0,4,14)
D.fjv=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new C.y("Games and little helpers for a spare minute.",null,D.fjv,null,null,null,null,null,null,null,null,null)
D.edn=new C.D(D.bxU,D.fp1,null)
D.fB_=new C.y("Tap to throw in a star",null,A.kM,null,null,null,null,null,null,null,null,null)
D.b6G=new C.cp(A.A,null,null,D.fB_,null)
D.ejh=new C.cL(0,null,0,14,null,null,D.b6G,null)
D.dba=w([A.iF,A.bn],x.O)
D.aMI=new C.bS(A.A,0.5,A.x,null,0,D.dba,null,null)
D.ek_=new C.bS(A.A,0.5,A.x,null,0,D.az_,null,null)
D.d2w=w([A.c,A.bK],x.O)
D.ek1=new C.bS(A.A,0.5,A.x,null,0,D.d2w,null,null)
D.ek2=new C.bS(A.A,0.5,A.x,null,0,M.ay1,null,null)
D.djk=w([A.bN,A.h9],x.O)
D.aMJ=new C.bS(A.A,0.5,A.x,null,0,D.djk,null,null)
D.cIi=w([A.c,A.bN],x.O)
D.ek6=new C.bS(A.t8,0.5,A.x,null,0,D.cIi,null,null)
D.be7=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bjy=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d1y=w([D.be7,D.agj,D.bjy],x.O)
D.d9a=w([0,0.7,1],x.n)
D.ek8=new C.bS(A.t8,0.5,A.x,null,0,D.d1y,D.d9a,null)
D.cyG=w([A.oO,A.aE,A.K],x.O)
D.dg5=w([0.3,0.7,1],x.n)
D.eka=new C.bS(A.A,0.5,A.x,null,0,D.cyG,D.dg5,null)
D.bnr=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dhv=w([A.fc,D.bnr],x.O)
D.ekc=new C.bS(A.t8,0.5,A.x,null,0,D.dhv,null,null)
D.cBu=w([A.dt,A.cp],x.O)
D.ekd=new C.bS(A.A,0.5,A.x,null,0,D.cBu,null,null)
D.cXQ=w([A.oO,A.aE,A.fl],x.O)
D.eke=new C.bS(A.A,0.5,A.x,null,0,D.cXQ,null,null)
D.cQ3=w([A.fV,A.aM,A.d6],x.O)
D.ekg=new C.bS(A.t8,0.5,A.x,null,0,D.cQ3,null,null)
D.dbM=w([A.h9,L.mo],x.O)
D.ekh=new C.bS(A.t8,0.5,A.x,null,0,D.dbM,null,null)
D.bem=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bcg=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.d_5=w([D.bem,D.bcg],x.O)
D.ekj=new C.bS(A.A,0.5,A.x,null,0,D.d_5,null,null)
D.biX=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgT=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgX=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dlL=w([D.biX,D.bgT,D.bgX],x.O)
D.cWE=w([0,0.65,1],x.n)
D.ekk=new C.bS(M.aaB,0.5,A.x,null,0,D.dlL,D.cWE,null)
D.ekl=new C.bS(A.A,0.5,A.x,null,0,D.avo,null,null)
D.div=w([A.lm,A.aE,A.fl],x.O)
D.ekq=new C.bS(A.A,0.5,A.x,null,0,D.div,null,null)
D.dkc=w([A.h9,A.hM],x.O)
D.ekt=new C.bS(A.A,0.5,A.x,null,0,D.dkc,null,null)
D.aMN=new C.aR(9,9)
D.ekC=new C.aR(1.4,1.4)
D.ell=new C.z(0,-4)
D.eqV=new C.z(0.22,4)
D.ey8=new C.z(0.8,-4)
D.eHx=new C.z(0.58,4)
D.eKl=new C.bh("Moon",1.62,4291941851)
D.eKV=new C.bh("Neptune",11.15,4284524026)
D.eLB=new C.bh("Sun",274,4294688548)
D.eLR=new C.bh("Mercury",3.7,4288455599)
D.eLX=new C.bh("Earth",9.81,4281908728)
D.eLZ=new C.bh("Mars",3.71,4294472049)
D.eMi=new C.bh("Venus",8.87,4294759245)
D.eMp=new C.bh("Saturn",10.44,4294829706)
D.eMM=new C.bh("Jupiter",24.79,4294677052)
D.eQp=new C.a8(10,-8,18,-2)
D.eQq=new C.a8(14,-14,20,14)
D.eQr=new C.a8(20,-2,30,2)
D.eQt=new C.a8(4,-13,30,-3)
D.eQv=new C.a8(8,-7,12,7)
D.eQB=new C.a8(-12,12,12,19)
D.eQC=new C.a8(-12,14,12,22)
D.eQD=new C.a8(-12,-22,12,8)
D.eQE=new C.a8(-12,-25,12,19)
D.eQF=new C.a8(-12,-26,12,-6)
D.eQG=new C.a8(-12,-4,12,14)
D.eQH=new C.a8(-12,-6,10,6)
D.eQI=new C.a8(-14,20,14,24)
D.eQJ=new C.a8(-14,6,14,10)
D.eQK=new C.a8(-14,-17,14,15)
D.eQL=new C.a8(-14,-26,14,18)
D.eQM=new C.a8(-14,-4,14,20)
D.eQN=new C.a8(-15,-29,15,25)
D.eQO=new C.a8(-16,-16,16,16)
D.eQP=new C.a8(-16,-22,-9,18)
D.eQQ=new C.a8(-16,-24,16,-10)
D.eQR=new C.a8(-16,-2,16,20)
D.eQT=new C.a8(-18,20,18,24)
D.eQU=new C.a8(-18,-18,18,20)
D.eQV=new C.a8(-20,12,20,22)
D.eQW=new C.a8(-20,-28,20,26)
D.eQX=new C.a8(-22,14,22,18)
D.aNg=new C.a8(-22,-26,22,24)
D.eQY=new C.a8(-22,-3,22,3)
D.eQZ=new C.a8(-22,-4,22,12)
D.eR_=new C.a8(-24,-12,10,22)
D.eR0=new C.a8(-24,-14,22,8)
D.eR1=new C.a8(-24,-6,24,20)
D.aNh=new C.a8(-24,-9,24,9)
D.eR2=new C.a8(-25,14,25,19)
D.eR3=new C.a8(-26,-14,14,8)
D.eR4=new C.a8(-26,-4,26,20)
D.eR5=new C.a8(-26,-6,4,6)
D.aNi=new C.a8(-28,-13,28,13)
D.eR6=new C.a8(-28,-16,28,16)
D.eR7=new C.a8(-28,-16,28,8)
D.eR8=new C.a8(-28,-22,28,22)
D.eR9=new C.a8(-30,-12,30,14)
D.eRa=new C.a8(-30,-14,0,14)
D.eRb=new C.a8(-30,-18,30,20)
D.eRc=new C.a8(-30,-28,30,14)
D.eRd=new C.a8(-30,-2,30,18)
D.eRe=new C.a8(-30,-4,30,18)
D.eRf=new C.a8(-32,-17,32,17)
D.eRg=new C.a8(-32,-28,32,18)
D.eRh=new C.a8(-33,-21,33,17)
D.eRi=new C.a8(-34,14,34,26)
D.a6R=new C.a8(-34,-18,34,18)
D.eRj=new C.a8(-34,-4,34,7)
D.eRk=new C.a8(-36,-24,36,20)
D.eRl=new C.a8(-38,-22,38,22)
D.eRm=new C.a8(-3,12,3,22)
D.eRn=new C.a8(-3,5,3,15)
D.eRp=new C.a8(-46,-34,46,28)
D.eRq=new C.a8(-48,-3,48,3)
D.eRt=new C.a8(-6,18,24,24)
D.eRu=new C.a8(-6,5,6,12)
D.eRv=new C.a8(-6,-22,6,-15)
D.eRw=new C.a8(-9,-16,9,22)
D.eRx=new C.a8(-4.5,-24,4.5,-21.2)
D.eRz=new C.a8(14,-9,17.5,9)
D.e7S={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aOc=new C.dD(D.e7S,5,x.R)
D.e7p={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eUH=new C.dD(D.e7p,10,x.R)
D.eWV=new C.as(24,44)
D.eX_=new C.as(300,300)
D.eXj=new C.as(54,38)
D.eXq=new C.as(66,38)
D.b7Z=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eYq=new C.a7(16,16,D.b7Z,null)
D.aPd=new C.hQ(3,12,12,0.82,null)
D.fFW=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new C.b1(D.fFW,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.dbP=w([A.c8,A.bH,A.b_,A.aO,A.pF,A.c8],x.O)
D.f3l=new C.fZ(A.A,0,6.283185307179586,A.x,D.dbP,null,null)
D.fcp=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qu,null,null,null)
D.f4A=new C.et("You are here (Sun)",null,null,A.cP,null,null,null,null,null,null,D.fcp)
D.aRQ=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4B=new C.et("What we see",null,null,A.cP,null,null,null,null,null,null,D.aRQ)
D.f9L=new C.H(!0,A3.EB,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new C.et("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cP,null,null,null,null,null,null,D.f9L)
D.feD=new C.H(!0,A.kr,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4K=new C.et("AI",null,null,A.cP,null,null,null,null,null,null,D.feD)
D.f9w=new C.H(!0,A.bV,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4L=new C.et("Add atoms with the buttons below",null,null,A.cP,null,null,null,null,null,null,D.f9w)
D.aQc=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f51=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5x=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new C.H(!0,A.cl,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6l=new C.H(!0,A.bV,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6G=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f79=new C.H(!0,A.aS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7I=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new C.cS(A.hQ,A.dE,6)
D.d5k=w([D.eVj],x.q)
D.f81=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d5k,null,null,null)
D.f84=new C.H(!0,A.ek,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f87=new C.H(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new C.H(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8z=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQB=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new C.H(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8U=new C.H(!0,A.bV,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faj=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faP=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVm=new C.cS(A.aW,A.J,3)
D.aze=w([D.eVm],x.q)
D.faS=new C.H(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aze,null,null,null)
D.faX=new C.H(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qu,null,null,null)
D.fc5=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fce=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcE=new C.H(!0,A.tz,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcU=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fde=new C.H(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new C.H(!0,A.bV,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdo=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdu=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdV=new C.H(!0,A.bV,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new C.H(!0,A.n8,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe9=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feo=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRf=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feX=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV9=new C.cS(A.w,A.J,5)
D.cUd=w([D.eV9],x.q)
D.feY=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cUd,null,null,null)
D.ff2=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aze,null,null,null)
D.ffi=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new C.H(!0,A.fW,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new C.H(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new C.H(!0,A.b_,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new C.H(!0,A.bV,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRB=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi6=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fie=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRM=new C.H(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiB=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8S=new C.H(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new C.H(!0,A.tz,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new C.H(!0,A.b_,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8c=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new C.y("\u26a0\ufe0f ",null,D.f8c,null,null,null,null,null,null,null,null,null)
D.fkF=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wE,null,null,null,null,null,null,null,null,null)
D.fl5=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mS,null,null,null,null,null,null,null,null,null)
D.fm9=new C.y("Pick one, then change it and see what happens.",null,A.wE,null,null,null,null,null,null,null,null,null)
D.fmd=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f9h=new C.H(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f9h,null,null,null,null,null,null,null,null,null)
D.fnu=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a87,null,null,null,null,null,null,null,null,null)
D.foD=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fpe=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fpj=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new C.y("Make it yours",null,A.kl,null,null,null,null,null,null,null,null,null)
D.fq8=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8f,null,null,null,null,null,null,null,null,null)
D.fdz=new C.H(!0,A.jm,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fst=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fdz,null,null,null,null,null,null,null,null,null)
D.fsI=new C.y("YOUR DECODING",null,Q.mS,null,null,null,null,null,null,null,null,null)
D.fsU=new C.y("5G",null,U.aQE,null,null,null,null,null,null,null,null,null)
D.ffV=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu1=new C.y("WHAT HAPPENS",null,D.ffV,null,null,null,null,null,null,null,null,null)
D.fvI=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new C.y("Change the words and pictures on the three slabs.",null,A.wE,null,null,null,null,null,null,null,null,null)
D.fwy=new C.y("All the parts and wires will be removed.",null,A.hJ,null,null,null,null,null,null,null,null,null)
D.fwS=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fyj=new C.y("INTERCEPTED",null,Q.mS,null,null,null,null,null,null,null,null,null)
D.fyE=new C.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fz9=new C.y("Remove this part",null,V.aQg,null,null,null,null,null,null,null,null,null)
D.fzr=new C.y("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.ffp=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzH=new C.y("How the Lab works",null,D.ffp,null,null,null,null,null,null,null,null,null)
D.f6S=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new C.y("Electronics Lab",null,D.f6S,null,null,null,null,A.a2,null,1,null,null)
D.fA3=new C.y("?",null,M.aRK,null,null,null,null,null,null,null,null,null)
D.fdt=new C.H(!0,A.aO,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA8=new C.y("Planet Earth",null,D.fdt,null,null,null,null,null,null,null,null,null)
D.fBl=new C.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fBY=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fCg=new C.y("UNIVERSE EXPLORER",null,I.a8d,null,null,null,null,null,null,null,null,null)
D.fEP=new C.y("SECRET VERSION",null,Q.mS,null,null,null,null,null,null,null,null,null)
D.fih=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFl=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fih,null,null,null,null,null,null,null,null,null)
D.fGy=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a87,null,null,null,null,null,null,null,null,null)
D.fH1=new C.y("NGMY",null,A.uX,null,null,null,null,null,null,null,null,null)
D.fHe=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.U7,null,null,null,null,null,null,null,null,null)
D.fHB=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kL,null,null,null,null,null,null,null,null,null)
D.fIC=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wE,null,null,null,null,null,null,null,null,null)
D.fIE=new C.y("TOOLBOX",null,I.a8d,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hic=null
$.hib=null
$.hof=0
$.hQi=C.U(x.N,x.k)
$.hQT=C.U(x.N,x.k)
$.hhx=null
$.hQE=C.U(x.N,x.k)
$.hRH=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"imi","bE8",()=>{var v="led"
return C.a([B.ay8("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fiR(),v),B.ay8("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fiS(),v),B.ay8("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fiT(),v),B.ay8("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fj_(),v),B.ay8("Not both","Make the light go OFF only when both switches are ON.",2,new B.fj0(),v),B.ay8("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fj1(),"buzzer")],C.ax("O<baO>"))})
w($,"imK","bE9",()=>C.a([B.oG("UNIVERSE","Earth, space and gravity",A.Oe,A.aO,new B.fjh()),B.oG("ELECTRONICS LAB","Batteries, wires, real circuits",Af.BT,A.aO,new B.fji()),B.oG("DISCOVERY LAB","Body Explorer: a real 3D human",D.a0f,A.b_,new B.fjj()),B.oG("TOOLBOX","Converter, clock, games",T.alB,A.ct,new B.fju()),B.oG("MOLECULE MAKER","Join atoms into real molecules",A.NG,A.hm,new B.fjw()),B.oG("DNA LAB","Copy DNA, build a protein",D.a0f,A.bU,new B.fjx()),B.oG("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yv,A.b_,new B.fjy()),B.oG("BALANCE LAB","Levers, weight and torque",D.bIT,A.aM,new B.fjz()),B.oG("GEAR LAB","Teeth, speed and force",A.C2,A.ct,new B.fjA()),B.oG("LASER MAZE","Bend the beam with mirrors",I.am_,A.av,new B.fjB()),B.oG("LIGHT MIXER","Match colours with light",D.bGA,A.b7,new B.fjC()),B.oG("CIPHER LAB","Make and crack secret codes",A.yF,A.aO,new B.fjk()),B.oG("REACTION LAB","Wire parts together",A.yJ,A.bv,new B.fjl()),B.oG("SPARK PAINTER","Paint with light",A.a0h,A.bU,new B.fjm()),B.oG("ROCKET LANDER","Land softly on the pad",A.nq,A.aO,new B.fjn()),B.oG("ORBIT STUDIO","Slingshot planets",A.mC,A.ct,new B.fjo()),B.oG("SWARM STUDIO","A living school of fish",A.NG,A.b_,new B.fjp()),B.oG("CHAIN BURST","One tap, a whole chain",A.hc,A.bU,new B.fjq()),B.oG("TITLE ANIMATOR","Make a moving title",A.yC,A.bH,new B.fjr()),B.oG("CIRCUIT LAB","Connect logic, learn it",A.a0H,A.cl,new B.fjs()),B.oG("MARBLE MUSIC","Marbles ring the notes",D.bGf,A.b7,new B.fjt()),B.oG("ORBIT SEQUENCER","Planets play the tune",D.bIG,A.bu,new B.fjv())],C.ax("O<bsG>")))
w($,"ioh","qj",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.QM[v]
t.n(0,u.a,u)}return t})
w($,"imj","ahU",()=>C.a([B.FF("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fj2()),B.FF("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fj3()),B.FF("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fj4()),B.FF("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fj5()),B.FF("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fj6()),B.FF("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fiU()),B.FF("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fiV()),B.FF("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fiW()),B.FF("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fiX()),B.FF("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fiY()),B.FF("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fiZ())],C.ax("O<baP>")))
w($,"imM","hwM",()=>C.a([B.a0P("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fjK()),B.a0P("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c8,A.bz,new B.fjL()),B.a0P("Breathe","Calm down in a minute","\ud83e\udee7",A.hm,A.cA,new B.fjM()),B.a0P("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b6,new B.fjN()),B.a0P("Memory Match","Find the pairs","\ud83c\udccf",A.aO,A.cb,new B.fjO()),B.a0P("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bc,new B.fjP()),B.a0P("Tip & Split","Share the bill","\ud83e\uddfe",A.b_,A.b0,new B.fjQ()),B.a0P("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aF,new B.fjR())],C.ax("O<bu0>")))
w($,"imL","hwL",()=>C.a([B.afc("EARTH GLOBE","Turn it, tap a country",A.mC,A.aO,new B.fjD()),B.afc("SOLAR SYSTEM","The Sun and its worlds",D.bGj,A.aM,new B.fjE()),B.afc("GRAVITY LAB","Drop, weigh, orbit",D.amJ,A.ct,new B.fjF()),B.afc("BLACK HOLE","Throw in a star",A.G4,A.bu,new B.fjG()),B.afc("GALAXY","Build, tilt, collide",A.yj,A.h6,new B.fjH()),B.afc("SIZE COMPARE","Earth next to a star",D.bGC,A.bU,new B.fjI()),B.afc("SEASONS & MOON","Why it is summer",A.vP,A.bv,new B.fjJ())],C.ax("O<btW>")))})()};
(a=>{a["9g3fSFaMJLIhRmKr7ChDWHLu1+8="]=a.current})($__dart_deferred_initializers__);