((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A_,A6,A0,A1,K,V,A7,R,A2,H,A8,A3,A9,W,Aa,Ab,O,Ac,Ad,X,P,Y,Ae,M,Af,Ag,S,Ah,L,Q,Ai,E,F,I,C={
bz0(d){return C.hSj(d)},
hSj(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bz0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qY(B.n9(""),d,A.hF,null,null).d9(0,A.YV),$async$bz0)
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
return B.i($async$bz0,v)},
i38(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qw[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h_(D.Qw,new C.fx5())
if(w==null)w=A.d.gI(D.Qw)
s=B.U(x.N,x.E)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.M)(r),++u){l=r[u].a
k=l[0]
l=$.qn().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.M)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ajS(w.a,w.b,m,w,s,!1)},
hXJ(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.QW,new C.fmD(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iaY(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cD(b2,"{")
v=A.a.oH(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aN(0,A.a.ap(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aY(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.w(J.q(q,"kind"))
o=B.w(J.q(q,"id"))
if(!$.qn().ai(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dnK[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.E(typeof J.q(q,"x")=="number"?B.e5(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.q(q,"y")=="number"?B.e5(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cc(t,new B.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.q(g,0))
e=B.w(J.q(g,2))
d=A.o.E(A.k.O(B.e5(J.q(g,1))),0,1)
a0=A.o.E(A.k.O(B.e5(J.q(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.A(f,e))J.cc(i,new B.cx([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.q(u,"steps"))
a0=J.aW(a0==null?A.cy:a0)
while(a0.C()){a2=a0.gT(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.q(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.mI(a0,B.w(a1==null?"":a1),t,i,A.V)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ajS(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i1J(d){var w,v,u=C.h7a()
d.B(u)
for(w=0;w<60;++w)u.va(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.ftQ(u))&&!A.d.d8(v,new C.ftR())},
i1I(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.M)(l),++u){t=l[u];++v
k.n(0,t.a,$.qn().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.M)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.q(D.dm0,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.M)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hQS(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.M)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i37(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qn().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QW[u]
if(A.d.b3(w,new C.fx2(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fx3(e),B.S(w).k("Z<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cM(w,0,new C.fx4())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qn().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajS:function ajS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fx5:function fx5(){},
fmD:function fmD(){},
ftQ:function ftQ(d){this.a=d},
ftR:function ftR(){},
fx2:function fx2(d){this.a=d},
fx3:function fx3(d){this.a=d},
fx4:function fx4(){},
Vw:function Vw(d,e){this.c=d
this.a=e},
bjO:function bjO(d,e,f,g,h){var _=this
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
e9l:function e9l(d){this.a=d},
e9m:function e9m(d,e,f){this.a=d
this.b=e
this.c=f},
e9n:function e9n(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9u:function e9u(d){this.a=d},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9t:function e9t(d,e,f){this.a=d
this.b=e
this.c=f},
e9v:function e9v(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9w:function e9w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9p:function e9p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9x:function e9x(d,e){this.a=d
this.b=e},
e9o:function e9o(d,e){this.a=d
this.b=e},
e9C:function e9C(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9E:function e9E(d,e){this.a=d
this.b=e},
e9F:function e9F(d,e){this.a=d
this.b=e},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9H:function e9H(d,e){this.a=d
this.b=e},
bzl(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fcl,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hkI(d,e,f,g){var w=null,v=B.m(24),u=B.I(f.j(0.6),A.r,1)
return B.au(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,B.d(e,w,w,w,w,w,w,A.A4,A.L,w,w),A.aA,B.bX(A.fW,g,A.bs,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bbI,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G9:function G9(d,e,f,g){var _=this
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
aEk:function aEk(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iH$=h
_.oA$=i
_.nc$=j
_.iI$=k
_.bx$=l
_.ab$=m
_.c=_.a=null},
enB:function enB(){},
enV:function enV(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
enW:function enW(){},
enX:function enX(){},
enD:function enD(d,e,f){this.a=d
this.b=e
this.c=f},
enC:function enC(d,e){this.a=d
this.b=e},
ens:function ens(d){this.a=d},
ent:function ent(d){this.a=d},
enu:function enu(d){this.a=d},
env:function env(d){this.a=d},
enw:function enw(d){this.a=d},
enx:function enx(d){this.a=d},
eny:function eny(d){this.a=d},
enz:function enz(d){this.a=d},
enA:function enA(d){this.a=d},
enq:function enq(d){this.a=d},
enr:function enr(d){this.a=d},
enp:function enp(d){this.a=d},
enO:function enO(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
enK:function enK(d){this.a=d},
enG:function enG(d){this.a=d},
enL:function enL(d){this.a=d},
enF:function enF(d){this.a=d},
enM:function enM(d){this.a=d},
enN:function enN(d){this.a=d},
enE:function enE(d){this.a=d},
enP:function enP(d,e){this.a=d
this.b=e},
enI:function enI(d,e){this.a=d
this.b=e},
enQ:function enQ(d){this.a=d},
enR:function enR(d){this.a=d},
enS:function enS(d){this.a=d},
enT:function enT(d){this.a=d},
enH:function enH(d){this.a=d},
bgU:function bgU(d,e){this.b=d
this.a=e},
aM3:function aM3(){},
bx0:function bx0(){},
cHu(){var w=0,v=B.j(x.F),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cHu=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r_().jI(0,"assets/data/body3d.bin"),$async$cHu)
case 3:d=a1
$.hg0=J.eZ(A.dE.gaQ(d),d.byteOffset,d.byteLength)
t=B.aSc(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.js(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.daJ[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a32(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b_b))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.ba1(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cHu,v)},
aS_:function aS_(d,e,f){this.a=d
this.b=e
this.c=f},
a32:function a32(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ba1:function ba1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Uq:function Uq(d){this.a=d},
aCQ:function aCQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iH$=s
_.oA$=t
_.nc$=u
_.iI$=v
_.bx$=w
_.ab$=a0
_.c=_.a=null},
dH1:function dH1(d){this.a=d},
dH0:function dH0(d,e){this.a=d
this.b=e},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(){},
dH2:function dH2(){},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGH:function dGH(d){this.a=d},
dGI:function dGI(){},
dGJ:function dGJ(d){this.a=d},
dGL:function dGL(d,e){this.a=d
this.b=e},
dGK:function dGK(d){this.a=d},
dGB:function dGB(d,e,f){this.a=d
this.b=e
this.c=f},
dGC:function dGC(d){this.a=d},
dGD:function dGD(d){this.a=d},
dGS:function dGS(d){this.a=d},
dGT:function dGT(d,e){this.a=d
this.b=e},
dGU:function dGU(d,e){this.a=d
this.b=e},
dGV:function dGV(d){this.a=d},
dGR:function dGR(d,e){this.a=d
this.b=e},
dGW:function dGW(d,e){this.a=d
this.b=e},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGX:function dGX(d){this.a=d},
dGP:function dGP(d){this.a=d},
dGY:function dGY(d){this.a=d},
dGO:function dGO(d){this.a=d},
dGZ:function dGZ(d){this.a=d},
dGN:function dGN(d){this.a=d},
dH_:function dH_(d){this.a=d},
dGM:function dGM(d){this.a=d},
aLd:function aLd(){},
aLe:function aLe(){},
c2I:function c2I(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c2J:function c2J(d,e){this.a=d
this.b=e},
c2K:function c2K(d){this.a=d},
ayi(d,e,f,g,h){return new C.baJ(d,e,f,g,h)},
fYK(d,e,f,g,h,i){return $.hOf.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cOf(d,e,f,i,g,h))},
yb:function yb(d,e,f,g,h){var _=this
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
ns:function ns(d,e,f){this.a=d
this.b=e
this.c=f},
baJ:function baJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgs:function fgs(){},
fgt:function fgt(){},
fgu:function fgu(){},
fgB:function fgB(){},
fgC:function fgC(){},
fgD:function fgD(){},
Uu:function Uu(d){this.a=d},
aCS:function aCS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iH$=m
_.oA$=n
_.nc$=o
_.iI$=p
_.bx$=q
_.ab$=r
_.c=_.a=null},
dIH:function dIH(d){this.a=d},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIo:function dIo(){},
dII:function dII(){},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIk:function dIk(d,e){this.a=d
this.b=e},
dIp:function dIp(d,e,f){this.a=d
this.b=e
this.c=f},
dIe:function dIe(){},
dIf:function dIf(){},
dIg:function dIg(d){this.a=d},
dIh:function dIh(d,e){this.a=d
this.b=e},
dIi:function dIi(d,e,f){this.a=d
this.b=e
this.c=f},
dIq:function dIq(){},
dIr:function dIr(d,e){this.a=d
this.b=e},
dIs:function dIs(d){this.a=d},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIm:function dIm(d){this.a=d},
dId:function dId(d,e,f){this.a=d
this.b=e
this.c=f},
dIB:function dIB(d){this.a=d},
dIA:function dIA(d){this.a=d},
dIC:function dIC(d){this.a=d},
dIz:function dIz(d){this.a=d},
dIx:function dIx(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIw:function dIw(d){this.a=d},
dIt:function dIt(d){this.a=d},
dIv:function dIv(d){this.a=d},
dID:function dID(d,e){this.a=d
this.b=e},
dIE:function dIE(d,e){this.a=d
this.b=e},
dIF:function dIF(d){this.a=d},
dIu:function dIu(d){this.a=d},
dIG:function dIG(d,e){this.a=d
this.b=e},
bb1:function bb1(d,e){this.b=d
this.a=e},
cOf:function cOf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLi:function aLi(){},
bwP:function bwP(){},
hF6(){return new C.Nr(null)},
Qg(d,e,f,g,h){return new C.bsq(d,e,f,g,h)},
bqQ(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
fZf(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nr:function Nr(d){this.a=d},
Ks:function Ks(d,e){this.a=d
this.b=e},
AE:function AE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aD8:function aD8(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOw:function dOw(d){this.a=d},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
bsq:function bsq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgT:function fgT(){},
fgU:function fgU(){},
fgV:function fgV(){},
fgW:function fgW(){},
fgX:function fgX(){},
fgY:function fgY(){},
fgZ:function fgZ(){},
fh_:function fh_(){},
fh0:function fh0(){},
bqR:function bqR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXU:function eXU(d){this.a=d},
eXT:function eXT(d,e){this.a=d
this.b=e},
eXR:function eXR(d){this.a=d},
eXV:function eXV(d){this.a=d},
eXS:function eXS(d,e){this.a=d
this.b=e},
aeQ:function aeQ(d,e,f){this.c=d
this.d=e
this.a=f},
adH:function adH(d,e,f){this.c=d
this.d=e
this.a=f},
Q9:function Q9(d,e,f,g,h,i,j,k,l,m){var _=this
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
brP:function brP(d,e){this.b=d
this.a=e},
brk:function brk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9K:function b9K(d,e){this.b=d
this.a=e},
aHk:function aHk(d,e){this.c=d
this.a=e},
aHl:function aHl(d,e,f){var _=this
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
eXA:function eXA(d){this.a=d},
eXz:function eXz(d){this.a=d},
eXy:function eXy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXx:function eXx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXv:function eXv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXu:function eXu(d,e,f){this.a=d
this.b=e
this.c=f},
eXw:function eXw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXt:function eXt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXI:function eXI(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXK:function eXK(d,e){this.a=d
this.b=e},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXG:function eXG(d,e,f){this.a=d
this.b=e
this.c=f},
eXM:function eXM(d,e,f){this.a=d
this.b=e
this.c=f},
eXF:function eXF(d){this.a=d},
eXB:function eXB(d){this.a=d},
eXN:function eXN(d){this.a=d},
eXO:function eXO(d){this.a=d},
eXE:function eXE(d,e){this.a=d
this.b=e},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXQ:function eXQ(d,e){this.a=d
this.b=e},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXr:function eXr(){},
eXs:function eXs(){},
bqt:function bqt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpV:function bpV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bao:function bao(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpX:function bpX(d,e,f){this.b=d
this.c=e
this.a=f},
btU:function btU(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMU:function aMU(){},
hm9(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.aa(0,new B.t(w,0)),u=e.aF(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).aa(0,v.aI(0,s*t*f)).aa(0,u.aI(0,s*f*f)).aa(0,e.aI(0,f*f*f))},
bgT(d,e,f,g,h,i){return $.hOQ.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dja(d,e,f,i,g,h))},
a0g:function a0g(d,e){this.a=d
this.b=e},
qb:function qb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qR:function qR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cr:function Cr(d,e){this.a=d
this.b=e},
Ze:function Ze(d,e){this.a=d
this.b=e},
aeF:function aeF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0t:function a0t(d,e,f,g,h,i){var _=this
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
abB:function abB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abR:function abR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adL:function adL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgR:function bgR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dje:function dje(d){this.a=d},
djf:function djf(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
djc:function djc(d){this.a=d},
djd:function djd(d){this.a=d},
djg:function djg(d){this.a=d},
djh:function djh(d){this.a=d},
dji:function dji(d){this.a=d},
djj:function djj(d){this.a=d},
djk:function djk(d){this.a=d},
djl:function djl(d){this.a=d},
djm:function djm(d){this.a=d},
djn:function djn(d){this.a=d},
djo:function djo(d){this.a=d},
FU:function FU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VS:function VS(d){this.a=d},
aEj:function aEj(d,e,f,g,h,i,j){var _=this
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
_.bx$=i
_.ab$=j
_.c=_.a=null},
emW:function emW(d){this.a=d},
emL:function emL(d){this.a=d},
emN:function emN(){},
emO:function emO(){},
emR:function emR(){},
emS:function emS(d,e,f){this.a=d
this.b=e
this.c=f},
emT:function emT(d){this.a=d},
emU:function emU(d){this.a=d},
emP:function emP(){},
emQ:function emQ(d){this.a=d},
enl:function enl(d){this.a=d},
emV:function emV(){},
emH:function emH(d){this.a=d},
emY:function emY(d){this.a=d},
emX:function emX(d){this.a=d},
en_:function en_(){},
emZ:function emZ(d,e){this.a=d
this.b=e},
emK:function emK(){},
emI:function emI(d){this.a=d},
emJ:function emJ(d){this.a=d},
enj:function enj(d){this.a=d},
eni:function eni(d){this.a=d},
enk:function enk(d){this.a=d},
en9:function en9(d,e){this.a=d
this.b=e},
enh:function enh(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
ene:function ene(d){this.a=d},
end:function end(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d){this.a=d},
enc:function enc(d){this.a=d},
emM:function emM(){},
en5:function en5(d){this.a=d},
en6:function en6(d){this.a=d},
en4:function en4(d){this.a=d},
en7:function en7(d){this.a=d},
en3:function en3(d){this.a=d},
en8:function en8(d){this.a=d},
en2:function en2(d){this.a=d},
en1:function en1(d){this.a=d},
en0:function en0(d,e){this.a=d
this.b=e},
bgS:function bgS(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dja:function dja(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aM1:function aM1(){},
blf:function blf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Q0:function Q0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W6:function W6(d){this.a=d},
bkm:function bkm(d,e,f,g,h,i,j,k){var _=this
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
_.bx$=j
_.ab$=k
_.c=_.a=null},
ez1:function ez1(d){this.a=d},
ez_:function ez_(d){this.a=d},
ez0:function ez0(){},
eyD:function eyD(){},
eyC:function eyC(){},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyO:function eyO(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyV:function eyV(d,e){this.a=d
this.b=e},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyW:function eyW(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyX:function eyX(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eyY:function eyY(d){this.a=d},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyZ:function eyZ(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyR:function eyR(d,e){this.a=d
this.b=e},
eyE:function eyE(d,e){this.a=d
this.b=e},
brK:function brK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wh:function Wh(d){this.a=d},
aEz:function aEz(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bx$=f
_.ab$=g
_.c=_.a=null},
eFa:function eFa(d,e){this.a=d
this.b=e},
eFb:function eFb(d,e,f){this.a=d
this.b=e
this.c=f},
eFc:function eFc(d){this.a=d},
eF9:function eF9(){},
eFd:function eFd(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e){this.a=d
this.b=e},
eFf:function eFf(d){this.a=d},
eF6:function eF6(d){this.a=d},
eFg:function eFg(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eFi:function eFi(d){this.a=d},
eF4:function eF4(d,e){this.a=d
this.b=e},
aMa:function aMa(){},
aMf:function aMf(){},
hrh(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcH()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h7a(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4o(w,v,u,A.cW,B.U(x.N,x.y))},
hyU(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.h7b(d),d.d*f.b)},
h7b(d){return 42+(D.m6.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tz:function tz(d,e,f,g){var _=this
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
aah:function aah(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abn:function abn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4o:function a4o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMt:function bMt(){},
bME:function bME(d){this.a=d},
bMz:function bMz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMF:function bMF(d){this.a=d},
bMG:function bMG(d){this.a=d},
bMI:function bMI(d){this.a=d},
bMJ:function bMJ(d){this.a=d},
bMH:function bMH(d){this.a=d},
bMK:function bMK(d,e,f){this.a=d
this.b=e
this.c=f},
bML:function bML(d){this.a=d},
bMv:function bMv(d){this.a=d},
bMw:function bMw(d){this.a=d},
bMu:function bMu(d){this.a=d},
bMx:function bMx(d,e,f){this.a=d
this.b=e
this.c=f},
bMy:function bMy(d){this.a=d},
bMs:function bMs(d){this.a=d},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMA:function bMA(d,e){this.a=d
this.b=e},
bMD:function bMD(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMB:function bMB(d){this.a=d},
aiE:function aiE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bH4:function bH4(){},
bH5:function bH5(){},
mI:function mI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cn4:function cn4(d){this.a=d},
iaU(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fIN(),c9=new C.fIP(),d0=new C.fIQ(),d1=new C.fIO(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.bN,A.bL))
d3.br(D.een,D.ebu,c9.$2(A.dL,1.4))
d3.br(D.ebc,D.ebb,c9.$2(A.br,2.4))
d3.br(D.ebd,W.aHQ,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.RJ
d3.ae(D.eaY,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aNP,A.aP,A.cr))
d3.ae(A.cH,16,c8.$1(A.br))
d3.ae(A.cH,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.bq(d2.save())
d2.translate(0,4)
d3.iZ(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ae,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ae(D.eef,2.4,c8.$1(c7?A.be:A.al))
d3.ae(D.ef3,2.4,c8.$1(A.al))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.e5))
d2=$.W().r
t=x.v
q=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
q.D(new B.b1(-16,-26))
q.D(new B.ap(16,-26))
q.D(new B.ap(12,14))
q.D(new B.ap(-12,14))
q.D(new B.bv())
d3.aJ(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.D(new B.b1(-14,-10))
d2.D(new B.ap(14,-10))
d2.D(new B.ap(12,14))
d2.D(new B.ap(-12,14))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.aw.j(0.7)))}d3.aJ(q,c9.$2(A.ae,1.6))
d2=d3.a
J.bq(d2.save())
d2.translate(0,10)
d3.iZ(0,d4.y)
d3.br(D.a6i,D.aIb,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ae(A.hY,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a4_[m]
r=c9.$2(A.br,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bq(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bP(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(B.bQ(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
w.D(new B.b1(-24,-12))
w.D(new B.ap(10,-12))
w.D(new B.ap(10,2))
w.D(new B.ap(-2,2))
w.D(new B.ap(-6,22))
w.D(new B.ap(-16,22))
w.D(new B.ap(-14,2))
w.D(new B.ap(-24,2))
w.D(new B.bv())
d3.aJ(w,d1.$3(D.eUi,A.aT,A.d8))
d3.aX(D.eTt,c8.$1(A.dt))
d2=d3.a
J.bq(d2.save())
d2.translate(18,-5)
d3.iZ(0,d4.y*2)
d3.br(A.J,D.ebm,c9.$2(A.bO,2.4))
d3.br(A.a6f,D.ebl,c9.$2(A.i7,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dR.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(16,-6))
d2.D(new B.ap(52,-26))
d2.D(new B.ap(52,18))
d2.D(new B.ap(16,4))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.bM.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eUo,A.bl,A.cp))
k=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
k.D(new B.b1(4,-6))
k.D(new B.ap(18,-12))
k.D(new B.ap(18,12))
k.D(new B.ap(4,6))
k.D(new B.bv())
d3.aJ(k,c8.$1(A.e5))
d3.ae(D.ebq,7,c8.$1(c7?A.c:A.dt))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(I.n3))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.c7:D.bld
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c7.j(0.35))
t.z=A.mK
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.eet,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eUu,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bM.j(0.75):A.av))
if(c7){d2=d3.a
J.bq(d2.save())
d2.translate(-7,8)
d3.iZ(0,d4.y*0.5)
d3.e1(B.bP(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(I.n3))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.u(59-A.o.F(A.k.bm(d5),60)),2,"0"),D.ebr,A.bo,6.5)
d3.ae(D.ebH,4,c8.$1(A.dt))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.Iv,10,c8.$1(c7?A.bI:A.br))
d2=d3.a
J.bq(d2.save())
d2.translate(0,-8)
d3.iZ(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ef7,A.c,16)
d2.restore()
d3.ae(A.kk,6,c8.$1(A.d0))
d3.ae(A.kk,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bW(A.Iv,14+v*6+A.k.F(t,6))
r=c9.$2(A.bI.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[B.bQ(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.br(D.ees,D.ef1,c9.$2(A.br,4))
d2=d3.a
J.bq(d2.save())
d3.iZ(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eUj,A.bO,A.al))
d3.ae(D.aHU,8,c8.$1(A.av))
d3.ae(D.aHU,4.5,c8.$1(c7?A.aR:A.cp))
d3.ae(D.eeq,2.2,c8.$1(c7&&A.o.F(A.k.bm(d5*1.6),2)===0?A.aw:A.kx))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eeB,A.aw,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eUr,A.j5,A.fd))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dJ))
if(c7){d2=d5*2.3
d3.ae(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bo))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c7))}d3.ae(D.eel,4,c8.$1(A.aW))
d3.ae(D.ebn,2.4,c8.$1(A.aw))
d3.ae(D.ebE,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dJ))
if(c7){d2=$.W()
t=B.a([],x.v)
h=new B.aJ(d2.r,A.ak,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.b1(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aJ(h,c9.$2(A.bo,1.8))
d6.$5(d3,"72",D.ebo,A.h7,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eeG,A.h7.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.eev,3,c8.$1(c7?A.be:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cC.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ae,1.6))
d3.aX(D.eUl,c8.$1(F.tt))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bq(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.oW(0,-1,1)
d3.e1(B.bP(A.J,8,14),c8.$1(A.cY))
d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(-6,0))
d2.D(new B.ap(-12,-4))
d2.D(new B.ap(-12,4))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.ca))
d3.ae(D.eci,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ae,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
e.D(new B.b1(-9,22))
e.D(new B.ap(-5,-16))
e.D(new B.ap(5,-16))
e.D(new B.ap(9,22))
e.D(new B.bv())
d3.aJ(e,d1.$3(D.eUV,A.c,A.bx))
d3.aX(D.eUS,c8.$1(c7?A.dR:A.br))
s=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
s.D(new B.b1(-7,-22))
s.D(new B.ap(0,-29))
s.D(new B.ap(7,-22))
s.D(new B.bv())
d3.aJ(s,c8.$1(A.ev))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.D(new B.b1(0,-19))
t=d*34
d2.D(new B.ap(t,-26))
d2.D(new B.ap(t,-12))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.dR.j(0.45)))
d2=c8.$1(A.dR.j(0.35))
d2.z=A.RJ
d3.ae(D.eaZ,14,d2)}return!0
case"discoball":d3.br(D.eb1,L.aHM,c9.$2(A.dt,1.4))
d3.ae(A.J,16,d1.$3(D.eU2,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.dbJ[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eU_,A.cr,A.al))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eTT,A.aL,A.bL))
d3.br(G.aHN,D.eb2,c9.$2(A.br,1.6))
d3.ae(D.eb3,2.2,c8.$1(c7?A.aw:A.br))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a41[m]
if(c7)t=a1?A.bb:A.f5
else t=A.cp
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bq(d2.save())
d2.translate(14,0)
d3.iZ(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.br(A.J,D.a6b,c9.$2(A.bL,4))
d2.restore()
d3.br(D.eeb,D.eez,c9.$2(A.bL,4))
d3.aX(D.eUR,c8.$1(c7?A.bb.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayP[m]+1,d2,10,14,2)
p=B.ar(A.bM,A.d8,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(B.eU(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eUk,A.bO,A.bl))
for(m=0;m<2;++m){l=D.ayP[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.ft:A.av).H()
t.drawRRect(B.eU(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cY.j(0.5))
s.z=H.pf
r=s.H()
t.drawRRect(B.eU(d2),r)
r.delete()}}d3.br(D.ebM,D.ec4,c9.$2(A.av,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new N.vM(1,a3,0.8,1).m_():A.e5
if(c7){s=c8.$1(i.j(0.45))
s.z=H.pf
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dt))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eU8,A.cC,A.Lu))
d3.ae(D.eeH,8,c8.$1(A.qY))
d2=d3.a
J.bq(d2.save())
d2.translate(-2,9)
d3.iZ(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fh,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
t.D(new B.b1(16,6))
t.D(new B.ap(26,6))
t.D(new B.ap(26,-20))
t.D(new B.ap(10,-20))
d3.aJ(t,c9.$2(A.bL,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hl).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.ecU,3.2,c8.$1(A.hl.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bq(d2.save())
d3.iZ(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eUm,A.i5,A.tw))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.e5))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cY.j(0.4))
d2.z=H.pf
d3.ae(D.ebG,8,d2)}return!0
case"headphones":d3.e0(B.bP(A.dy,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.R8[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a5(s,0,s+14,20),A.by,A.oN).H()
d2.drawRRect(B.eU(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bW(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eF.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[B.bQ(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.ks,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eTY,A.dt,A.e5))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dJ))
if(c7){a4=new B.T(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.u(B.dl(a4)),2,"0")+":"+A.a.aZ(A.o.u(B.h2(a4)),2,"0"),D.eb6,A.bo,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.ED,A.h7,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bm(d5*2),6)),A.dy,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(I.n3))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bL,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(a5),$.oR(),!0)
d2.translate(-27,-19)
E.Lh(d3,D.f_H,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vC))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new B.a5(a6.a,a6.b,a6.c,a6.d),A.dI,A.d7))
d3.aD(a6,c9.$2(A.aZ,1.2))
d3.ae(D.aIi,9,c8.$1(A.av))
d3.ae(D.aIi,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dJ))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bo:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.ed2,s,8.2)
d3.ae(D.ebv,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.eeA,A.ae,6)
d6.$5(d3,"OUT",D.ecM,A.ae,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bL,A.aw,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(G.a69,3,c8.$1(A.aJ))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eTU,A.e5,A.hK))
d6.$5(d3,"7805",D.a6i,A.ae,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dhQ[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(B.bQ(new B.a5(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ef4,A.bk,9)
return!0
case"diode":d3.br(D.aIm,D.aI5,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aE.j(0.85)))
d3.aX(D.eTF,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dR.j(0.4))
t.z=A.lC
d3.aD(d2,t)}d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(-8,-4))
d2.D(new B.ap(-8,4))
d2.D(new B.ap(-1,0))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.eeo,A.aB,8)
return!0
case"ldr":d3.br(D.aIm,D.a6i,c9.$2(A.e2,2.4))
d3.br(D.aIb,D.aI5,c9.$2(A.e2,2.4))
d3.ae(A.J,12,c8.$1(A.d8))
d3.ae(A.J,12,c9.$2(A.tF,1.6))
d2=$.W()
t=B.a([],x.v)
a8=new B.aJ(d2.r,A.ak,c6,c6,t)
a8.D(new B.b1(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bA(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aJ(a8,c9.$2(A.bM,1.4))
d2=B.ar(A.br,A.dR,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.eec,A.ae,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eg
break A}if("sonytv"===d2){t=A.qT
break A}if("appletv"===d2){t=A.e2
break A}t=F.EF
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bq(p.save())
p.clipRRect(B.eU(a5),$.oR(),!0)
p.translate(t,s)
E.h3g(d3,new B.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.ec7,1.6,c8.$1(A.bo))}else{d3.aD(a5,c8.$1(D.vC))
p=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
p.D(new B.b1(t,s))
p.D(new B.ap(t+24,s))
p.D(new B.ap(t,s+22))
p.D(new B.bv())
d3.aJ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dt))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=I.jc[m]
s=$.W()
p=B.a([],t)
s=new B.aJ(s.r,A.ak,c6,c6,p)
p.push(new B.b1(l*30,20))
p.push(new B.ap(l*22,20))
p.push(new B.ap(l*26,26))
p.push(new B.bv())
r=c8.$1(A.dt).H()
p=s.gbB().a.snapshot()
d2.drawPath((s.e=new B.cv(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.edG,A.bO,5.5)
break
case"appletv":d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(-8,18))
d2.D(new B.ap(8,18))
d2.D(new B.ap(12,25))
d2.D(new B.ap(-12,25))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.Xz))
d6.$5(d3,"Apple TV",D.ed3,A.br,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bjC))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dn,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ef0,F.tt,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m6.h(0,d2)
b1=b0.b===D.wF
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
b7=B.ar(b6,A.c,0.35)
b7.toString
d3.aD(w,d1.$3(new B.a5(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bq(t.save())
t.clipRRect(B.eU(a5),$.oR(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lh(d3,new B.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vC))
if(b1){t=a5.b
s=a5.d
d3.br(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.e5))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.efa,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(B.bQ(new B.a5(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aHL,1.6,c8.$1(A.av))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eUv,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(b8),$.oR(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lh(d3,new B.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vC))
d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(-38,16))
d2.D(new B.ap(38,16))
d2.D(new B.ap(34,21))
d2.D(new B.ap(-34,21))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.Xz))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eUz,A.bN,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(b9),$.oR(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lh(d3,new B.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vC))
d3.ae(D.aHG,2,c8.$1(A.bL))
d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(-6,18))
d2.D(new B.ap(6,18))
d2.D(new B.ap(10,26))
d2.D(new B.ap(-10,26))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.Xz))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.eg))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(c0),$.oR(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lh(d3,new B.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vC))
d3.aX(D.eUG,c8.$1(A.bl))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dt))
return!0
case"projector":if(c7){d2=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
d2.D(new B.b1(14,4))
d2.D(new B.ap(-32,-42))
d2.D(new B.ap(34,-42))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.dR.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(c1),$.oR(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lh(d3,new B.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eUn,A.il,A.dt))
d3.ae(D.aHS,7,c8.$1(A.av))
d3.ae(D.aHS,4,c8.$1(c7?A.dR:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dn,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(I.n3))
d3.aD(c2,c9.$2(A.br,1.2))
if(c7){c3=new B.aJ($.W().r,A.ak,c6,c6,B.a([],x.v))
c3.D(new B.b1(-26,4))
c3.D(new B.ca(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.ap(22,-16))
d3.aJ(c3,c9.$2(A.aR,2.2))
d2=A.k.F(d5*6,48)
d3.ae(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bo))
d6.$5(d3,""+(88+A.o.F(A.k.bm(d5*2),5)),G.aIa,A.c,10)
d6.$5(d3,"km/h",D.ecS,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.dt,A.e5))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eU(c5),$.oR(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lh(d3,new B.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.mK
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.br(D.eeL,D.eeQ,c9.$2(A.bl,4))
d3.br(D.ec9,D.ecl,c9.$2(A.bl,4))
return!0}return!1},
fIN:function fIN(){},
fIP:function fIP(){},
fIQ:function fIQ(){},
fIO:function fIO(){},
h6_(d,e,f,g){return new C.aiC(d,g,f,e)},
FE(d,e,f){return new C.baK(d,e,f)},
aiC:function aiC(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiD:function aiD(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iH$=h
_.oA$=i
_.nc$=j
_.iI$=k
_.bx$=l
_.ab$=m
_.c=_.a=null},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGK:function bGK(d){this.a=d},
bGI:function bGI(d){this.a=d},
bGL:function bGL(){},
bGM:function bGM(d){this.a=d},
bGN:function bGN(d,e,f){this.a=d
this.b=e
this.c=f},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGF:function bGF(d,e){this.a=d
this.b=e},
bGG:function bGG(d,e,f){this.a=d
this.b=e
this.c=f},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGA:function bGA(){},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGC:function bGC(d,e){this.a=d
this.b=e},
bGD:function bGD(d){this.a=d},
bGE:function bGE(d){this.a=d},
bH1:function bH1(d){this.a=d},
bH2:function bH2(){},
bGc:function bGc(){},
bH3:function bH3(d,e){this.a=d
this.b=e},
bH0:function bH0(d,e,f){this.a=d
this.b=e
this.c=f},
bGW:function bGW(d){this.a=d},
bGT:function bGT(d,e,f){this.a=d
this.b=e
this.c=f},
bGU:function bGU(d,e){this.a=d
this.b=e},
bGX:function bGX(d){this.a=d},
bGR:function bGR(d,e){this.a=d
this.b=e},
bGS:function bGS(d,e){this.a=d
this.b=e},
bGV:function bGV(d){this.a=d},
bGY:function bGY(d){this.a=d},
bGP:function bGP(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGZ:function bGZ(d){this.a=d},
bGO:function bGO(d){this.a=d},
bH_:function bH_(d){this.a=d},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGw:function bGw(d,e){this.a=d
this.b=e},
bGy:function bGy(d,e){this.a=d
this.b=e},
bGx:function bGx(d,e){this.a=d
this.b=e},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGk:function bGk(d){this.a=d},
bGi:function bGi(d){this.a=d},
bGl:function bGl(d,e,f){this.a=d
this.b=e
this.c=f},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGr:function bGr(d,e,f){this.a=d
this.b=e
this.c=f},
bGg:function bGg(d,e){this.a=d
this.b=e},
bGs:function bGs(d,e,f){this.a=d
this.b=e
this.c=f},
bGf:function bGf(d,e){this.a=d
this.b=e},
bGt:function bGt(d,e,f){this.a=d
this.b=e
this.c=f},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGu:function bGu(d){this.a=d},
bGv:function bGv(d){this.a=d},
bGm:function bGm(d){this.a=d},
bGn:function bGn(d){this.a=d},
baK:function baK(d,e,f){this.a=d
this.b=e
this.c=f},
fgE:function fgE(){},
fgF:function fgF(){},
fgG:function fgG(){},
fgr:function fgr(){},
fgH:function fgH(){},
fgq:function fgq(){},
fgI:function fgI(){},
fgv:function fgv(){},
fgp:function fgp(){},
fgw:function fgw(){},
fgo:function fgo(){},
fgx:function fgx(){},
fgn:function fgn(){},
fgy:function fgy(){},
fgl:function fgl(){},
fgm:function fgm(){},
fgz:function fgz(){},
fgj:function fgj(){},
fgk:function fgk(){},
fgA:function fgA(){},
fgi:function fgi(){},
V5:function V5(d){this.a=d},
aDk:function aDk(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dT5:function dT5(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dTf:function dTf(){},
dTg:function dTg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTh:function dTh(){},
dT4:function dT4(d){this.a=d},
dT3:function dT3(d,e,f){this.a=d
this.b=e
this.c=f},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT0:function dT0(d){this.a=d},
dT1:function dT1(){},
dTd:function dTd(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTa:function dTa(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dT9:function dT9(){},
dTb:function dTb(d,e,f){this.a=d
this.b=e
this.c=f},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT7:function dT7(){},
dTj:function dTj(d){this.a=d},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTi:function dTi(){},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTn:function dTn(d){this.a=d},
axr:function axr(d,e){this.c=d
this.a=e},
b8Z:function b8Z(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
cDU:function cDU(d){this.a=d},
b8Y:function b8Y(d,e){this.b=d
this.a=e},
cDT:function cDT(d){this.a=d},
axK:function axK(){},
axL:function axL(){},
aJH:function aJH(){},
bwR:function bwR(){},
iaW(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bW(A.uN,23)
$.W()
b8=B.K()
b8.r=A.av.gp(0)
b9.ae(A.uN,25,b8)
b8=B.K()
b8.sar(D.eng.aA(0,v))
b9.ae(A.uN,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=A.bk.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bx.gp(0)
r.c=2
r.d=A.bH
b9.br(A.uN,new B.t(b8*18,s*18-2),r)
r=B.K()
r.r=A.bk.gp(0)
b9.ae(A.uN,3,r)
c2.$5(b9,w?"V":"A",D.eeT,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eei,A.av,9.5)
return!0
case"fan":b8=B.bz(D.eTQ,A.hG)
$.W()
s=B.K()
s.r=A.br.gp(0)
b9.aD(b8,s)
s=B.K()
s.r=A.al.gp(0)
b9.aX(D.eUH,s)
s=B.K()
s.r=A.M.j(0.6).gp(0)
b9.ae(G.uO,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bq(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bP(A.aHK,18,10)
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.hl.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(B.bQ(s),n)
n.delete()
b8.restore()}b8=B.K()
b8.r=A.bm.gp(0)
b9.ae(G.uO,4,b8)
b8=B.K()
b8.b=A.ac
b8.c=2
b8.r=A.cr.gp(0)
b9.ae(G.uO,22,b8)
b8=B.K()
b8.b=A.ac
b8.c=0.8
b8.r=A.k6.gp(0)
b9.ae(G.uO,14,b8)
return!0
case"speaker":l=B.bz(D.aNP,A.uT)
$.W()
b8=B.K()
b8.sar(D.apC.aA(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sar(D.enC.aA(0,B.bW(A.cv,15)))
b9.ae(A.cv,14+k,b8)
b8=B.K()
b8.r=A.dt.gp(0)
b9.ae(A.cv,5,b8)
b8=B.K()
b8.r=A.bl.gp(0)
b9.ae(G.a68,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bW(D.ebL,6+u*6+A.k.F(b8,6))
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.c=1.8
q.r=A.c7.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[B.bQ(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bz(D.eUy,A.uT)
$.W()
b8=B.K()
b8.sar(D.c0w.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.aNR,A.iB)
s=B.K()
s.r=A.hK.gp(0)
b9.aD(b8,s)
if(b7){i=new B.T(Date.now(),0,!1)
h=B.EY(i)<500?":":" "
g=A.a.aZ(A.o.u(B.dl(i)),2,"0")
f=A.a.aZ(A.o.u(B.h2(i)),2,"0")
b8=B.K()
b8.r=A.bo.j(0.12).gp(0)
b9.aX(D.aNR,b8)
c2.$5(b9,g+h+f,D.eeE,A.bo,21)}b8=B.K()
b8.r=A.cr.gp(0)
b9.ae(D.eeC,2.4,b8)
b8=B.K()
b8.r=A.cr.gp(0)
b9.ae(D.ebP,2.4,b8)
return!0
case"calculator":j=B.bz(D.eUd,A.i_)
$.W()
b8=B.K()
b8.sar(D.c0g.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.eU6,A.he)
s=B.K()
s.r=(b7?A.XL:D.blN).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eeh,A.Wz,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bz(new B.a5(q,s,q+6,r),A.T2)
$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=(d===3?A.ca:A.bO).gp(0)
n=p.H()
b8.drawRRect(B.eU(q),n)
n.delete()}return!0
case"phone":j=B.bz(D.eU1,A.i_)
$.W()
b8=B.K()
b8.r=I.n3.gp(0)
b9.aD(j,b8)
b8=B.K()
b8.b=A.ac
b8.c=1.9
b8.r=D.aha.gp(0)
b9.aD(j,b8)
a0=B.bz(D.eTS,A.hG)
if(b7){b8=B.K()
b8.sar(D.c1P.aA(0,new B.a5(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bq(b8.save())
b8.clipRRect(B.eU(a0),$.oR(),!0)
b8.translate(-12,-25)
E.Lh(b9,D.f_j,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bz(D.eTP,A.he)
s=B.K()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=B.K()
s.r=A.bo.gp(0)
b9.aX(new B.a5(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.edm,A.c,6)}else{b8=B.K()
b8.r=D.vC.gp(0)
b9.aD(a0,b8)}b8=B.bz(D.eUW,D.enL)
s=B.K()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=B.bz(D.eUx,A.rM)
$.W()
b8=B.K()
b8.sar(D.c0N.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.R8[a2]
s=a3<0?-4:4
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bH
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bW(G.uO,8+u*6+A.k.F(s,6))
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.c=1.8
q.r=A.iI.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[B.bQ(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bz(D.eUc,A.hG)
s=$.W()
r=B.K()
r.r=A.e5.gp(0)
b9.aD(b8,r)
if(b7){b8=B.K()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zp
b9.ae(A.uN,34,b8)}a6=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a6.D(new B.b1(-16,12))
a6.D(new B.ap(-16,-2))
a6.D(new B.ca(0,-30,16,-2))
a6.D(new B.ap(16,12))
a6.D(new B.bv())
b8=B.K()
b8.r=B.ar(A.ev,D.bdn,a5).gp(0)
b9.aJ(a6,b8)
b8=B.K()
b8.b=A.ac
b8.c=1.4
b8.r=A.bX.gp(0)
b9.aJ(a6,b8)
if(b7){b8=b9.a
J.bq(b8.save())
b8.translate(0,-2)
b9.iZ(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.br(A.J,G.a68,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bq(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new B.aJ(s,A.ak,b6,b6,B.a([],r))
j.D(new B.b1(-28,8))
j.D(new B.ap(-28,-2))
j.D(new B.ap(-16,-4))
j.D(new B.ap(-10,-16))
j.D(new B.ap(10,-16))
j.D(new B.ap(18,-4))
j.D(new B.ap(28,-2))
j.D(new B.ap(28,8))
j.D(new B.bv())
q=B.K()
q.sar(D.bZR.aA(0,D.eUq))
b9.aJ(j,q)
q=new B.aJ(s,A.ak,b6,b6,B.a([],r))
q.D(new B.b1(-8,-4))
q.D(new B.ap(-4,-13))
q.D(new B.ap(4,-13))
q.D(new B.ap(4,-4))
q.D(new B.bv())
p=B.K()
p.r=A.fh.gp(0)
b9.aJ(q,p)
r=new B.aJ(s,A.ak,b6,b6,B.a([],r))
r.D(new B.b1(8,-4))
r.D(new B.ap(8,-13))
r.D(new B.ap(11,-13))
r.D(new B.ap(15,-4))
r.D(new B.bv())
s=B.K()
s.r=A.fh.gp(0)
b9.aJ(r,s)
for(a2=0;a2<2;++a2){a3=F.ayQ[a2]
s=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
s.r=A.av.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bq(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.r=A.bO.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=A.aB.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
j.D(new B.b1(-18,20))
j.D(new B.ap(-14,-12))
j.D(new B.ca(0,-20,14,-12))
j.D(new B.ap(18,20))
j.D(new B.bv())
r=B.K()
r.sar(D.c_W.aA(0,D.eUb))
b9.aJ(j,r)
r=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
r.D(new B.b1(14,-10))
r.D(new B.ap(30,-22))
r.D(new B.ap(32,-18))
r.D(new B.ap(16,-4))
r.D(new B.bv())
q=B.K()
q.r=A.e2.gp(0)
b9.aJ(r,q)
s=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
s.D(new B.b1(-14,-8))
s.D(new B.ca(-34,-6,-18,12))
b8=B.K()
b8.b=A.ac
b8.c=5
b8.r=A.av.gp(0)
b9.aJ(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cY,A.tD,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e5
b8.r=s.gp(0)
b9.aX(D.eUa,b8)
if(b7){b8=B.K()
b8.r=A.cY.j(0.3).gp(0)
b8.z=A.mK
b9.ae(A.aHI,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.K()
b8.r=A.av.gp(0)
b9.ae(D.eaX,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aJ($.W().r,A.ak,b6,b6,B.a([],x.v))
b8.D(new B.b1(-10,-14))
b8.D(new B.ap(-30,24))
b8.D(new B.ap(10,24))
b8.D(new B.ap(8,-14))
b8.D(new B.bv())
s=B.K()
s.r=A.dR.j(0.28*u).gp(0)
b9.aJ(b8,s)
s=B.K()
s.r=A.dR.j(0.5*u).gp(0)
s.z=X.HY
b9.ae(D.eeI,24,s)}b8=B.bz(D.eUQ,A.hG)
s=$.W()
r=B.K()
r.r=A.e5.gp(0)
b9.aD(b8,r)
r=B.K()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bH
b9.br(D.eb8,D.aHV,r)
r=B.K()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bH
b9.br(D.aHV,D.eeJ,r)
a9=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a9.D(new B.b1(-14,-16))
a9.D(new B.ap(6,-26))
a9.D(new B.ap(10,-12))
a9.D(new B.ap(-10,-6))
a9.D(new B.bv())
s=B.K()
s.r=(b7?A.aT:A.k7).gp(0)
b9.aJ(a9,s)
b8=B.K()
b8.r=(b7?A.c:A.bl).gp(0)
b9.ae(D.eeK,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
b0.D(new B.b1(-34,-6))
b0.D(new B.ca(0,22,34,-6))
r=B.K()
r.b=A.ac
r.c=2
r.r=A.hk.gp(0)
b9.aJ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b3.r=D.a34[u].j(0.6).gp(0)
b3.z=A.RJ
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aJ(b8,A.ak,b6,b6,b3)
b3.push(new B.b1(p-3,o))
b3.push(new B.ap(p+3,o))
b5=o+11
b3.push(new B.ap(p+5,b5))
b3.push(new B.ca(p,o+17,p-5,b5))
b3.push(new B.bv())
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
if(b2)o=D.a34[u]
else{o=B.ar(D.a34[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbB().a.snapshot()
r.drawPath((b4.e=new B.cv(p)).a,n)
n.delete()}return!0}return C.iaU(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1j(d){var w=D.m6.h(0,d)
return(w==null?null:w.b)===D.zP},
ic5(d,e,f){return B.a3(d,!1).cg(B.uN(null,!1,!0,!0,new C.fNv(e,f),A.eO,null,A.q_,new C.fNw(),x.H))},
Jq:function Jq(d,e){this.a=d
this.b=e},
md:function md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNv:function fNv(d,e){this.a=d
this.b=e},
fNw:function fNw(){},
UP:function UP(d,e,f){this.c=d
this.d=e
this.a=f},
bjh:function bjh(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.ab$=e
_.c=_.a=null},
dPu:function dPu(d){this.a=d},
dPt:function dPt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPr:function dPr(){},
dPs:function dPs(d){this.a=d},
dPq:function dPq(d){this.a=d},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPn:function dPn(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPi:function dPi(d){this.a=d},
dPh:function dPh(d){this.a=d},
dPl:function dPl(d,e,f){this.a=d
this.b=e
this.c=f},
dPk:function dPk(d){this.a=d},
dPj:function dPj(d){this.a=d},
buV:function buV(d,e,f){this.b=d
this.c=e
this.a=f},
aey:function aey(d,e,f){this.b=d
this.c=e
this.a=f},
aLr:function aLr(){},
a0N(d,e,f,g,h,i){return new C.btK(d,e,f,g,h,i)},
btK:function btK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fh8:function fh8(){},
fh9:function fh9(){},
fha:function fha(){},
fhb:function fhb(){},
fhc:function fhc(){},
fhd:function fhd(){},
fhe:function fhe(){},
fhf:function fhf(){},
a8h:function a8h(d){this.a=d},
chI:function chI(d){this.a=d},
chJ:function chJ(){},
chH:function chH(d,e){this.a=d
this.b=e},
chG:function chG(d){this.a=d},
Wn:function Wn(d){this.a=d},
aEM:function aEM(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iH$=f
_.oA$=g
_.nc$=h
_.iI$=i
_.bx$=j
_.ab$=k
_.c=_.a=null},
eJD:function eJD(d){this.a=d},
eJz:function eJz(d){this.a=d},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJC:function eJC(d){this.a=d},
bv6:function bv6(d,e,f){this.b=d
this.c=e
this.a=f},
Vd:function Vd(d){this.a=d},
bjq:function bjq(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iH$=d
_.oA$=e
_.nc$=f
_.iI$=g
_.bx$=h
_.ab$=i
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
bpW:function bpW(d,e,f){this.b=d
this.c=e
this.a=f},
Ur:function Ur(d){this.a=d},
bj3:function bj3(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iH$=d
_.oA$=e
_.nc$=f
_.iI$=g
_.bx$=h
_.ab$=i
_.c=_.a=null},
dH8:function dH8(){},
dH9:function dH9(){},
dH3:function dH3(){},
dH6:function dH6(d,e){this.a=d
this.b=e},
dH5:function dH5(d,e){this.a=d
this.b=e},
dH7:function dH7(d){this.a=d},
dH4:function dH4(d){this.a=d},
aIb:function aIb(d,e,f){this.a=d
this.b=e
this.c=f},
V4:function V4(d){this.a=d},
bjj:function bjj(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSS:function dSS(d){this.a=d},
dSM:function dSM(d,e){this.a=d
this.b=e},
dST:function dST(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSV:function dSV(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSH:function dSH(d){this.a=d},
blg:function blg(d,e,f){this.b=d
this.c=e
this.a=f},
VN:function VN(d){this.a=d},
aE7:function aE7(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eh8:function eh8(d,e){this.a=d
this.b=e},
eh9:function eh9(d,e,f){this.a=d
this.b=e
this.c=f},
eh7:function eh7(d,e,f){this.a=d
this.b=e
this.c=f},
eha:function eha(d){this.a=d},
eh6:function eh6(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehd:function ehd(d,e){this.a=d
this.b=e},
ehc:function ehc(d,e){this.a=d
this.b=e},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehb:function ehb(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
VX:function VX(d){this.a=d},
aEq:function aEq(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
er3:function er3(d){this.a=d},
er4:function er4(d){this.a=d},
er1:function er1(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
er0:function er0(d){this.a=d},
er5:function er5(d){this.a=d},
er6:function er6(d){this.a=d},
er7:function er7(d){this.a=d},
er8:function er8(d,e){this.a=d
this.b=e},
Wg:function Wg(d){this.a=d},
bku:function bku(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eEV:function eEV(){},
eF3:function eF3(){},
eF_:function eF_(d){this.a=d},
eEZ:function eEZ(){},
eF0:function eF0(d,e){this.a=d
this.b=e},
eEY:function eEY(d,e){this.a=d
this.b=e},
eF1:function eF1(d){this.a=d},
eEX:function eEX(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eEW:function eEW(d){this.a=d},
VM:function VM(d){this.a=d},
bk_:function bk_(d,e,f,g,h,i,j,k){var _=this
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
_.iH$=f
_.oA$=g
_.nc$=h
_.iI$=i
_.bx$=j
_.ab$=k
_.c=_.a=null},
egd:function egd(){},
ege:function ege(){},
eg6:function eg6(d){this.a=d},
eg5:function eg5(d){this.a=d},
eg7:function eg7(d){this.a=d},
eg4:function eg4(d){this.a=d},
eg8:function eg8(d){this.a=d},
eg3:function eg3(d){this.a=d},
eg9:function eg9(d,e){this.a=d
this.b=e},
eg2:function eg2(d,e){this.a=d
this.b=e},
ega:function ega(d){this.a=d},
eg1:function eg1(d,e){this.a=d
this.b=e},
egb:function egb(d){this.a=d},
eg0:function eg0(d,e){this.a=d
this.b=e},
egc:function egc(d){this.a=d},
eg_:function eg_(d,e){this.a=d
this.b=e},
bd8:function bd8(d,e,f){this.c=d
this.d=e
this.a=f},
aLf:function aLf(){},
bwO:function bwO(){},
aLw:function aLw(){},
bwS:function bwS(){},
aLY:function aLY(){},
bx_:function bx_(){},
aMn:function aMn(){},
bx7:function bx7(){},
oy(d,e,f,g,h,i){return new C.b6K(h,d,f,g,i,e,null)},
hr0(d,e,f,g){var w=null
return B.cf(w,w,!0,w,new C.fRk(g,e,f),d,w,!0,!0,x.H)},
lQ(d,e,f,g,h,i,j){return new C.b6L(f,j,i,h,g,d,e,null)},
wV(d,e,f){return C.icV(d,e,f)},
icV(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$wV=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aV.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m0(2),$async$wV)
case 7:q=h
w=8
return B.b(q.hv(A.h5),$async$wV)
case 8:p=h
if(p==null){w=1
break}o=J.eV(A.dE.gaQ(p))
w=9
return B.b(C.csE(B.a([C.hfM(o,"image/png",f+".png")],x.D),"Made in NGMY Core Protocol"),$async$wV)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.U).f.R(D.aPX)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$wV,v)},
q0(d,e,f,g){var w,v=$.arY
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.fWW(v,e,f,g)},
fWW(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dX(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dX(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dX(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dX(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dX(t,"",160,-0.7,g*0.4,w)
return E.dX(900,"",90,0,g*0.45,u)
case"zap":return E.dX(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dX(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dX(320,"",220,-0.7,g*0.35,v)
return E.dX(1500,"",200,0,g*0.22,u)
case"organic":return E.dX(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dX(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dX(t,"",s,0,g*0.5,w)}},
IX(d,e,f,g){var w,v,u,t,s,r,q,p=$.arY
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.M)(e),++w)C.q0(d,e[w],f,g)
return}for(p=B.d1(e,0,B.dB(4,"count",x.S),B.S(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.q0(d,s,f,g)
else B.bN(new B.bb(1000*q),new C.chE(d,s,f,g),u)}},
a8g(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dX(95,"",200,1.8,e,w)
break
case"snare":E.dX(220,"",140,0,e*0.65,v)
break
case"hat":E.dX(5000,"",50,0,e*0.35,v)
break
case"open":E.dX(5200,"",220,0,e*0.35,v)
break
case"clap":E.dX(1100,"",100,0,e*0.5,v)
break
case"tom":E.dX(150,"",230,1,e,w)
break
case"low":E.dX(100,"",260,0.9,e,w)
break
case"rim":E.dX(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dX(820,"",240,0,e*0.3,"square")
break
case"crash":E.dX(3200,"",650,0,e*0.4,v)
break
case"shake":E.dX(7000,"",90,0,e*0.3,v)
break
default:E.dX(60,"",300,0,e,w)}},
cfA(d){return C.hI7(d)},
hI7(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cfA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cfA)
case 7:r=f
q=B.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.S.aN(0,q,null)
o=x.N
n=x.A
o=x.f.b(p)?B.a2(p,o,n):B.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.U(x.N,x.A)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cfA,v)},
b0V(d,e){return C.hI8(d,e)},
hI8(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b0V=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b0V)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$b0V)
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
return B.i($async$b0V,v)},
b6K:function b6K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cuB:function cuB(d){this.a=d},
cuC:function cuC(d,e){this.a=d
this.b=e},
fRk:function fRk(d,e,f){this.a=d
this.b=e
this.c=f},
fRj:function fRj(d){this.a=d},
f4:function f4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cux:function cux(d){this.a=d},
hn:function hn(d,e,f){this.c=d
this.d=e
this.a=f},
b6L:function b6L(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
j6:function j6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cuw:function cuw(d){this.a=d},
Fj:function Fj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cuD:function cuD(d){this.a=d},
qK:function qK(){},
cuy:function cuy(d,e,f){this.a=d
this.b=e
this.c=f},
cuA:function cuA(d){this.a=d},
cuz:function cuz(){},
chE:function chE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cxc(){var w=0,v=B.j(x.cL),u,t
var $async$cxc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.r_().bga("assets/data/world110.json"),$async$cxc)
case 3:u=t.hMH(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cxc,v)},
hMH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aN(0,a2,null)),a1=B.a([],x.m)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.P,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a4(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a4(k)
m.push(B.a([B.e5(j.h(k,0)),B.e5(j.h(k,1))],v))}q.push(m)}o=B.cP(p.h(r,"n"))
m=B.cP(p.h(r,"a"))
l=B.cP(p.h(r,"ct"))
j=B.cP(p.h(r,"sr"))
i=B.e5(p.h(r,"pop"))
h=B.e5(p.h(r,"gdp"))
g=B.cP(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aQk(g,f,"",0)
f=B.e5(J.q(p.h(r,"c"),0))
p=B.e5(J.q(p.h(r,"c"),1))
e=new C.ab2(o,m,l,j,i,h,g,f,p,q)
e.byC(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.ab3(a1)},
fuK(d){if(d>=1e12)return A.k.ac(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ac(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ac(d/1e6,1)+" million"
if(d>=1000)return A.k.ac(d/1000,1)+" thousand"
return A.k.ac(d,0)},
GV(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
ab2:function ab2(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab3:function ab3(d){this.a=d},
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
Pf:function Pf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y9:function y9(d,e,f){this.a=d
this.b=e
this.c=f},
Pe:function Pe(d){this.a=0
this.b=d
this.c=0},
hOA(d,e,f){return $.hOB.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.dfg(d,e,f))},
Vj:function Vj(d){this.a=d},
aDv:function aDv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iH$=j
_.oA$=k
_.nc$=l
_.iI$=m
_.bx$=n
_.ab$=o
_.c=_.a=null},
dYg:function dYg(d){this.a=d},
dYf:function dYf(d,e){this.a=d
this.b=e},
dXJ:function dXJ(d){this.a=d},
dXH:function dXH(d){this.a=d},
dXI:function dXI(d,e,f){this.a=d
this.b=e
this.c=f},
dXG:function dXG(d){this.a=d},
dXF:function dXF(){},
dXE:function dXE(d){this.a=d},
dY1:function dY1(d,e){this.a=d
this.b=e},
dY2:function dY2(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXS:function dXS(d){this.a=d},
dXQ:function dXQ(d){this.a=d},
dXT:function dXT(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXL:function dXL(d){this.a=d},
dY3:function dY3(d,e){this.a=d
this.b=e},
dXP:function dXP(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dY0:function dY0(d){this.a=d},
dY8:function dY8(d,e){this.a=d
this.b=e},
dY_:function dY_(d,e){this.a=d
this.b=e},
dY9:function dY9(d){this.a=d},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dYa:function dYa(d){this.a=d},
dXY:function dXY(d,e){this.a=d
this.b=e},
dYb:function dYb(d){this.a=d},
dXX:function dXX(d,e){this.a=d
this.b=e},
dYc:function dYc(d){this.a=d},
dXW:function dXW(d,e){this.a=d
this.b=e},
dYd:function dYd(d){this.a=d},
dXV:function dXV(d){this.a=d},
dYe:function dYe(d){this.a=d},
dXU:function dXU(d){this.a=d},
dY4:function dY4(d){this.a=d},
dXO:function dXO(d){this.a=d},
dY5:function dY5(d){this.a=d},
dXN:function dXN(d){this.a=d},
dY6:function dY6(d){this.a=d},
dXM:function dXM(d){this.a=d},
dXD:function dXD(){},
dXC:function dXC(d){this.a=d},
dXB:function dXB(d){this.a=d},
bfm:function bfm(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dfg:function dfg(d,e,f){this.a=d
this.b=e
this.c=f},
dfh:function dfh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLB:function aLB(){},
aLC:function aLC(){},
af6(d,e,f,g,h){return new C.btF(d,e,f,g,h)},
btF:function btF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh1:function fh1(){},
fh2:function fh2(){},
fh3:function fh3(){},
fh4:function fh4(){},
fh5:function fh5(){},
fh6:function fh6(){},
fh7:function fh7(){},
Wj:function Wj(d){this.a=d},
bky:function bky(){this.d=$
this.c=this.a=null},
eFO:function eFO(d){this.a=d},
eFP:function eFP(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFQ:function eFQ(){},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFL:function eFL(d){this.a=d},
hP1(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.en()
v.df(w)
t.push(v.aj()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.en()
v.df(w+900)
u.push(2.2+v.aj())}return new C.bkl(new B.cy(null,x.z),new C.Pe(A.cW),A.J,A.az,t,u,$,A.bE,0,B.a([],x.X),null,null)},
hP3(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hP2(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hgY(d,e,f){return $.hPE.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.f_c(d,e,f))},
W5:function W5(d){this.a=d},
bkl:function bkl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iH$=j
_.oA$=k
_.nc$=l
_.iI$=m
_.bx$=n
_.ab$=o
_.c=_.a=null},
eyh:function eyh(d,e){this.a=d
this.b=e},
eys:function eys(d,e){this.a=d
this.b=e},
eyt:function eyt(d,e){this.a=d
this.b=e},
eyp:function eyp(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyv:function eyv(d,e){this.a=d
this.b=e},
eyw:function eyw(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eym:function eym(d,e){this.a=d
this.b=e},
eyy:function eyy(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyg:function eyg(){},
eyf:function eyf(){},
eye:function eye(d){this.a=d},
eyd:function eyd(d){this.a=d},
brI:function brI(d,e){this.b=d
this.a=e},
f_c:function f_c(d,e,f){this.a=d
this.b=e
this.c=f},
f_d:function f_d(){},
f_e:function f_e(){},
Vk:function Vk(d){this.a=d},
aDw:function aDw(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iH$=k
_.oA$=l
_.nc$=m
_.iI$=n
_.bx$=o
_.ab$=p
_.c=_.a=null},
dYk:function dYk(){},
dYN:function dYN(){},
dYz:function dYz(d,e){this.a=d
this.b=e},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYA:function dYA(d){this.a=d},
dYp:function dYp(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYx:function dYx(d){this.a=d},
dYG:function dYG(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYH:function dYH(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d){this.a=d},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYK:function dYK(d){this.a=d},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYL:function dYL(d){this.a=d},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYr:function dYr(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYE:function dYE(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYi:function dYi(){},
dYl:function dYl(d,e){this.a=d
this.b=e},
dYh:function dYh(d){this.a=d},
baA:function baA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VY:function VY(d){this.a=d},
bki:function bki(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iH$=e
_.oA$=f
_.nc$=g
_.iI$=h
_.bx$=i
_.ab$=j
_.c=_.a=null},
erb:function erb(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
brg:function brg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eYm:function eYm(d){this.a=d},
aLD:function aLD(){},
bwU:function bwU(){},
aM6:function aM6(){},
bx2:function bx2(){},
aM9:function aM9(){},
bx4:function bx4(){},
hP_(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.en()
v.df(w)
v=v.aj()
u=new B.en()
u.df(w+500)
s.push(new B.t(v,u.aj()))}return new C.bj2(new B.cy(null,x.z),new C.Pe(A.cW),t,A.az,s,$,A.bE,0,B.a([],x.X),null,null)},
PJ:function PJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Up:function Up(d){this.a=d},
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
_.iH$=i
_.oA$=j
_.nc$=k
_.iI$=l
_.bx$=m
_.ab$=n
_.c=_.a=null},
dGA:function dGA(){},
dGo:function dGo(){},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGm:function dGm(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGl:function dGl(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGi:function dGi(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGh:function dGh(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGy:function dGy(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGe:function dGe(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGd:function dGd(d){this.a=d},
b9Z:function b9Z(d,e){this.b=d
this.a=e},
aeL:function aeL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vh:function Vh(d){this.a=d},
bjt:function bjt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iH$=p
_.oA$=q
_.nc$=r
_.iI$=s
_.bx$=t
_.ab$=u
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
bfd:function bfd(d,e){this.b=d
this.a=e},
dcp:function dcp(d){this.a=d},
VU:function VU(d){this.a=d},
bkh:function bkh(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iH$=f
_.oA$=g
_.nc$=h
_.iI$=i
_.bx$=j
_.ab$=k
_.c=_.a=null},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqr:function eqr(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqo:function eqo(d){this.a=d},
eqt:function eqt(d){this.a=d},
eqn:function eqn(d){this.a=d},
equ:function equ(d){this.a=d},
eqm:function eqm(d){this.a=d},
eqv:function eqv(d){this.a=d},
eql:function eql(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqy:function eqy(d){this.a=d},
eqi:function eqi(d,e){this.a=d
this.b=e},
bqw:function bqw(d,e){this.b=d
this.a=e},
aLc:function aLc(){},
bwN:function bwN(){},
aLz:function aLz(){},
bwT:function bwT(){},
aM5:function aM5(){},
bx1:function bx1(){},
hfM(d,e,f){var w,v
B.fU(0,0,!1)
w=new B.lp(e,f,$,null)
v=w.bIP(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i1R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.C)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.M)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o5(A.k.ac(p.c,4)),"y",B.o5(A.k.ac(p.d,4)),"v",p.e,"l",B.o5(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o5(A.k.ac(p.as,3)),"ch",p.at,"vc",B.o5(A.k.ac(p.z,3)),"s",B.o5(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.M)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cp.E"))
A.d.fc(l)
return A.S.ao(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ibi(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.q(w,"parts"))
f=J.aW(f==null?A.cy:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qn().ai(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tz(a2,d,a0,a1)
a3.aqc(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jM(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jM(J.q(t,"b"))
r.x=d===!0
d=B.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.q(t,"ch"))
r.at=A.k.O(d==null?0:d)
d=B.aK(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.q(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cc(v,r)}i=g.a(J.q(w,"wires"))
i=J.aW(i==null?A.cy:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aK(J.q(p,0))
o=f==null?a5:A.k.O(f)
f=B.aK(J.q(p,2))
n=f==null?a5:A.k.O(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.akB(m,A.k.O(B.e5(J.q(p,1))),l,A.k.O(B.e5(J.q(p,3))))}i=B.aK(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.q(w,"done"))
h=J.aW(h==null?A.cy:h)
while(h.C()){j=h.gT(h)
J.cc(k,A.k.O(B.e5(j)))}return new B.bo9(i,k)}catch(a4){return a5}},
fwI(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fwI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fwI)
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
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fwI,v)},
bDp(d){return C.icR(d)},
icR(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bDp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bDp)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDp)
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
return B.i($async$bDp,v)},
csE(d,e){var w=0,v=B.j(x.g7),u
var $async$csE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.h4a().xf(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$csE,v)}},D,G,N,T,Z,A4,A5,U
J=c[1]
B=c[0]
A=c[2]
A_=c[148]
A6=c[147]
A0=c[138]
A1=c[136]
K=c[130]
V=c[126]
A7=c[140]
R=c[103]
A2=c[112]
H=c[133]
A8=c[139]
A3=c[143]
A9=c[69]
W=c[78]
Aa=c[86]
Ab=c[82]
O=c[120]
Ac=c[124]
Ad=c[122]
X=c[128]
P=c[131]
Y=c[144]
Ae=c[142]
M=c[141]
Af=c[98]
Ag=c[145]
S=c[121]
Ah=c[146]
L=c[134]
Q=c[99]
Ai=c[24]
E=c[26]
F=c[95]
I=c[96]
C=a.updateHolder(c[17],C)
D=c[127]
G=c[129]
N=c[43]
T=c[135]
Z=c[106]
A4=c[137]
A5=c[132]
U=c[100]
C.ajS.prototype={}
C.Vw.prototype={
U(){return new C.bjO(B.U(x.N,x.i),new B.as(A.at,$.aw()),B.a([],x.X),B.a([],x.L),B.mJ(0,null,null))}}
C.bjO.prototype={
gWe(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
this.ch.t()
this.a2()},
Pc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.ak$.d.c
if(s!=null)s.jQ()
p.bP(0,A.c5)
t.m(new C.e9l(t))
t.a.toString
p=t.gWe()
w=3
return B.b(C.bz0(C.hQS(q,C.i1I(p),o,t.ay)),$async$Pc)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i37(q,p,o)
if(t.c==null){w=1
break}t.m(new C.e9m(t,o,r))
$.aV.x1$.push(new C.e9n(t))
case 1:return B.h(u,v)}})
return B.i($async$Pc,v)},
Ye(d){return this.c_1(d)},
aVS(){return this.Ye(null)},
c_1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ye=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.ak$.d.c
if(s!=null)s.jQ()
t.f.saU(0,o)
t.m(new C.e9y(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bz0(C.hXJ(o)),$async$Ye)
case 3:r=n.a=m.iaY(f)
p.b=""
if(r!=null&&!C.i1J(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i38(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ajS(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.e9z(p,t))
t.c4q(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Ye,v)},
c4q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
A.d.a8(w)
w=++m.as
v=m.gWe()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.e9u(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.e9s(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.e9v(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.M)(r),++u){p.$2(o,new C.e9w(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.e9x(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=B.m(16),f=B.I(A.by.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f0O,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.DF,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fr_
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Um,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fbH,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.tU,B.d(u,l,l,l,l,l,l,D.fes,l,l,l),l))
w.push(A.cO)
w.push(B.d(k.b,l,l,l,l,l,l,F.DR,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fgV,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i9,A.cm,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.MA,new B.cb(A.aM,A.e,A.j,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.me,l,l,l,l,l,l,l,l,l),A.bn,new B.bA(1,A.bd,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.M)(j),++p){o=j[p]
t=new B.aQ(12,12)
s=new B.aQ(12,12)
A.d.v(w,B.a([A.N,new B.bK(A.a8,l,l,B.p(l,new B.y(o.a,l,A.U4,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.by.j(0.3),l,l,new B.bk(t,t,t,t),l,l,A.n),l,l,l,l,A.h2,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fmi,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bk(s,s,s,s),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.egb)
j=B.ce(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=B.x(B.a([B.ai6(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bvg,A.ex,l,l,1/0),A.b8,A.ip),B.E(C.h6_(m.gWe(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.f4("Ask about it",i,new C.e9C(m),l,A.by,l),new C.f4("Invent something new",!i,new C.e9D(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dk3[p]
i.push(new C.f4(n,!1,new C.e9E(m,n),l,A.by,l))}f.push(new C.hn(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d3_[p]
i.push(new C.f4(r,!1,new C.e9F(m,r),l,A.by,l))}f.push(new C.hn(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.V,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.m(16),A.a0),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.e9G(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dd,!0,A.a5,l,A.ao,l,A.aQF,l,l),1)
h=m.at
v=h&&j?D.bKv:A.e3
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ab,new C.j6(v,j,new C.e9H(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.oy(A.by,A.hT,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.P,0,A.p))}}
C.G9.prototype={}
C.uU.prototype={}
C.VT.prototype={
U(){return new C.aEk(A.J,A.J,A.az,B.aY(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEk.prototype={
gaX5(){var w,v,u,t=this,s=D.Hp[t.cx],r=D.R9[t.cy],q=D.CC[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.em(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ax7[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cM(p,0,new C.enB())},
ga2x(){return D.Hp[this.cx].d/this.gaX5()},
gaOo(){return 0.1*(D.Hp[this.cx].d/0.9)/D.R9[this.cy].d},
a_(){this.a1()
this.p5()
C.cfA("rocket_lander").bL(new C.enV(this),x.a)},
c4z(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.aj()*0.6
w.f=new B.t(0.15+A.cW.aj()*0.7,0.08)
w.r=new B.t((A.cW.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
pZ(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.enW())
return}w=D.rs[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2x()
v=v.aa(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOo())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcH()*6*D.az7[m.d]))}t=m.r=m.r.aa(0,v.aI(0,d))
s=m.f=m.f.aa(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.CC[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b0V("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.IX("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2x()/(D.rs[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga2x()/(D.rs[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fF()}}if(m.Q&&m.x>0&&A.o.F(A.k.bm(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.enX())},
afP(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fdW,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.f4(e[w].a,f.$1(w),new C.enD(this,g,w),v,h,v))
return new B.D(A.eG,B.x(B.a([u,A.cO,B.bX(A.bB,s,A.bs,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bE4(d){var w,v,u,t,s=this,r=null,q=s.ga2x()/(D.rs[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOo()),o=D.az7[s.d],n=B.m(24),m=d.c,l=B.I(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Uh,r,r,r),A.R,s.afP("ENGINE: "+D.Hp[s.cx].b,D.Hp,new C.ens(s),new C.ent(s),A.cY),s.afP("FUEL TANK: "+D.R9[s.cy].b,D.R9,new C.enu(s),new C.env(s),A.bo),s.afP("LANDING GEAR: "+D.CC[s.db].b,D.CC,new C.enw(s),new C.enx(s),A.aR),s.afP("EXTRAS (tap to add)",D.ax7,new C.eny(s),new C.enz(s),A.by)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fJs)
o=(q?A.bo:A.cs).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaX5(),2)
u=A.k.ac(s.ga2x()/(D.rs[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CC[s.db].d*100)+".",r,r,r,r,r,r,D.feA,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i9,A.bU,r,r,r))
m.push(A.R)
m.push(new B.bK(A.A,r,r,new C.j6(A.od,"Launch",new C.enA(s),A.bo,r),r))
return B.au(B.p(r,B.ce(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bR,r,r,A.ag),A.f,r,A.lN,new B.o(D.blm,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
aYd(d,e,f,g){var w=null,v=f?A.cY:A.c.j(0.1),u=B.m(18),t=B.I(A.aZ,A.r,1)
return B.nI(A.jL,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.enp(e),new C.enq(e),w,w,w,w,new C.enr(e))},
aYc(d,e,f){return this.aYd(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cC(new C.enO(s,D.rs[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rs[w].a:"\ud83d\udd12"
o.push(new C.f4(v,s.d===w,new C.enP(s,w),r,D.rs[w].c,r))}v=B.a([s.aYc(F.an_,new C.enQ(s),s.y),A.bc,s.aYd(A.w7,new C.enR(s),s.Q,130),A.bc,s.aYc(A.Oi,new C.enS(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bc,B.aB(r,B.p(r,D.bOF,A.f,r,r,new B.o(u,r,B.I(A.aZ,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.enT(s),r,r,r,r,r,r,!1,A.a4)],p))}return C.oy(A.cY,A.hT,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new C.hn(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bgU.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rs[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=B.K(),a0=j.c,a1=B.ar(D.boh,a0,0.25)
a1.toString
d.sar(new B.a9(A.b3,A.b6,A.x,B.a([F.aew,a1],x.O),l,l).aA(0,new B.a5(0,0,g,f)))
a2.aX(new B.a5(0,0,g,f),d)
w=new B.en()
w.df(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aJ(e.r,A.ak,l,l,d)
r.D(new B.b1(0,s+14))
q=new B.en()
q.df(2)
for(p=0;p<=i;p+=18){e=new B.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.ap(i,h))
r.D(new B.ap(0,h))
r.D(new B.bv())
e=$.W()
d=B.K()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aJ(r,d)
o=B.bP(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bz(o,A.iB)
a0=B.K()
a0.r=A.be.gp(0)
a2.aD(d,a0)
a0=B.bz(o.cs(2),A.rM)
d=B.K()
d.b=A.ac
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bq(g.save())
g.translate(d.a*i,d.b*h)
a2.iZ(0,k.w)
i=k.as
if(i==="crashed"){k=B.K()
k.r=A.cY.j(0.6).gp(0)
k.z=X.HY
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aJ(i,A.ak,l,l,B.a([],f))
n.D(new B.b1(-8,18))
n.D(new B.ap(0,44+Math.sin(k.CW*40)*8))
n.D(new B.ap(8,18))
n.D(new B.bv())
k=B.K()
k.r=A.aT.gp(0)
a2.aJ(n,k)
i=new B.aJ(i,A.ak,l,l,B.a([],f))
i.D(new B.b1(-4,18))
i.D(new B.ap(0,32))
i.D(new B.ap(4,18))
i.D(new B.bv())
k=B.K()
k.r=A.c.gp(0)
a2.aJ(i,k)}k=e.r
m=new B.aJ(k,A.ak,l,l,B.a([],f))
m.D(new B.b1(0,-26))
m.D(new B.ca(14,-10,11,18))
m.D(new B.ap(-11,18))
m.D(new B.ca(-14,-10,0,-26))
m.D(new B.bv())
i=B.K()
i.sar(D.c0p.aA(0,D.eTZ))
a2.aJ(m,i)
i=B.K()
i.r=A.aR.gp(0)
a2.ae(G.uO,5,i)
i=new B.aJ(k,A.ak,l,l,B.a([],f))
i.D(new B.b1(-11,6))
i.D(new B.ap(-20,20))
i.D(new B.ap(-11,18))
i.D(new B.bv())
h=B.K()
h.r=A.aw.gp(0)
a2.aJ(i,h)
f=new B.aJ(k,A.ak,l,l,B.a([],f))
f.D(new B.b1(11,6))
f.D(new B.ap(20,20))
f.D(new B.ap(11,18))
f.D(new B.bv())
k=B.K()
k.r=A.aw.gp(0)
a2.aJ(f,k)
g.restore()},
aw(d){return!0}}
C.aM3.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx0.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw6()}}
C.aS_.prototype={}
C.a32.prototype={}
C.ba1.prototype={}
C.Uq.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ey(["skin"],x.N),o=new Float32Array(0)
return new C.aCQ(w,v,u,t,s,r,q,new B.cy(null,x.z),p,D.KH,D.KH,A.az,A.cW,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aCQ.prototype={
a_(){var w=this
w.a1()
w.p5()
w.as=new C.c2I(w.gccP())
new C.dH1(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bvf()},
ccQ(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f3(0,B.G(["t","init","data",$.hg0],x.N,x.A))
v.at=!0
v.ax=""
v.ayN()
break
case"pick":v.m(new C.dGE(v,d))
break
case"shot":v.ahF(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
ayN(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.av2[q.CW]
v=new C.dGF()
u=q.ay
u=B.C(u,B.a6(u).k("cp.E"))
A.d.fc(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f3(0,u)}},
ahF(d){return this.ctM(d)},
ctM(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahF=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aM(A.a.b2(d,A.a.cD(d,",")+1))
w=6
return B.b(C.csE(B.a([C.hfM(r,"image/png","body.png")],x.D),"Made in NGMY Core Protocol"),$async$ahF)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.U).f.R(D.aPX)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahF,v)},
ayf(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
pZ(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){C.a8g("kick",0.4)
v.a5c(170,new C.dH2())}v.ok=w
return},
ahu(d){var w,v,u,t,s=this
s.m(new C.dGG(s,d))
if(d==null){s.fx=D.KH
s.dy=1
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.S(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dGH(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.ayN()
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cwf(t,d)
return},
cwf(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8g("kick",0.8)
this.a5c(260,new C.dGI())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5c(w*70,new C.dGJ(this))
else if(A.a.q(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.fWW("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a8g("kick",0.3)
break
default:C.fWW("organic",2+A.o.F(e.length,6),200,0.4)}},
cAN(d){this.m(new C.dGL(this,d))},
aYv(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(p.ayf(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cp.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.au(w)]
p.p4=""},
bVF(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dGB(u,w,d))
v=x.t
C.IX("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5c(1100,new C.dGC(u))
return}if(d==null){if(u.cx!=null)u.ahu(null)
return}u.ahu(d)},
bZl(d,e){var w,v=this,u=null,t=B.m(18),s=B.I(A.c7.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fa7,u,u,u)}else if(d==null||e==null)w=D.fos
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hI,u,u,u),A.cO,B.d(e.b,u,u,u,u,u,u,F.DR,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bR7,u,u,u,new C.dGD(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.WG,u,s,t,u,u,A.n),u,u,u,u,K.aiE,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.duV.h(0,g)
i.ayN()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dcD
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(i.ayf(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,D.qh,h,h,h,new C.dGS(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.DT(h,A.qs,q)}else q=A.kM
q=B.x(B.a([B.E(q,1),new B.D(F.Ze,i.bZl(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d4x[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new C.f4(l,n,new C.dGT(i,o),o.c,A.c7,h))}p=B.a([new C.hn(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.M)(w),++s){k=w[s]
n.push(new C.f4(k,k===i.cx,new C.dGU(i,k),h,A.aT,h))}p.push(new C.hn(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(C.lQ(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dGV(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.Fj(D.av2[j],i.CW===j,new C.dGW(i,j),!1,h))
p.push(new C.hn(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.f4("Spin",n,new C.dGX(i),D.alQ,A.aR,h),new C.j6(A.oa,"Reset view",new C.dGY(i),A.c,h),new C.f4(l,m,new C.dGZ(i),A.GF,A.aT,h)],v)
if(t.q(0,"organ"))v.push(new C.f4("Heartbeat sound",i.k4,new C.dH_(i),A.uo,A.cs,h))
p.push(new C.hn(v,h,h))
return C.oy(A.c7,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.P,0,A.p))}}
C.aLd.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aLe.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bve()}}
C.c2I.prototype={
kI(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aN(e,"</script","<\\/script")
v=$.hm8
$.hm8=v+1
u="ngmy-body-viewer-"+v
$.yN()
$.qm().q0(u,new C.c2J(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fL(v,"message",new C.c2K(t),!1,x.gA)
t.b=u},
f3(d,e){var w,v
try{w=this.c
if(w!=null){w=B.byY(w.contentWindow)
if(w!=null)J.fTb(w,e,"*")}}catch(v){}}}
C.yb.prototype={}
C.Cn.prototype={}
C.ns.prototype={}
C.baJ.prototype={}
C.Uu.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aCS(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.az,A.J,A.J,B.aY(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aCS.prototype={
a_(){var w=this
w.a1()
w.p5()
w.acx()
$.aV.x1$.push(new C.dIH(w))},
acx(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acx=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$acx)
case 6:q=e.tj("ngmy_circuit_passed_v1")
r=q==null?A.V:q
if(s.c!=null)s.m(new C.dIl(s,r))
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
return B.i($async$acx,v)},
acS(d){return this.c29(d)},
c29(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acS=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$acS)
case 6:r=f
q=s.cx
p=B.a6(q).k("jU<cp.E,n>")
q=B.C(new B.jU(q,new C.dIo(),p),p.k("J.E"))
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acS,v)},
ax_(d,e,f,g){var w="c"+this.y++,v=new C.Cn(w,e,f,g)
this.d.n(0,w,v)
return v},
mx(d,e,f){return this.ax_(0,e,f,0)},
abT(d,e){var w
if(D.zn.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.aa(0,new B.t(-36,w))},
tI(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSq(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nc$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e8(m,D.cPh[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tI(p,0)&&n.tI(p,1)
break
case"or":p=q.a
o=n.tI(p,0)||n.tI(p,1)
break
case"xor":p=q.a
o=n.tI(p,0)!==n.tI(p,1)
break
case"nand":p=q.a
o=!(n.tI(p,0)&&n.tI(p,1))
break
case"nor":p=q.a
o=!(n.tI(p,0)||n.tI(p,1))
break
case"not":o=!n.tI(q.a,0)
break
default:o=n.tI(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bOh(){return this.aSq(null)},
pZ(d){var w,v,u,t,s,r,q,p,o,n=this
n.bOh()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gaf(0),v=new B.f5(w,new C.dII()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.nc$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nc$)
o=s+1
E.dX(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ax0(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m2(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atc(d){var w=this
if(w.x.A(0,A.az)){$.aV.x1$.push(new C.dIj(w,d))
return}w.m(new C.dIk(w,d))},
cwx(d){this.m(new C.dIp(this,d,$.bDL()[d]))},
c6S(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDL()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("Z<J.E>")
s=t.k("J.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dIe(),t),s)
A.d.aV(r,new C.dIf())
q=B.C(new B.Z(new B.bc(v,u),new C.dIg(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dIh(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dB(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h2(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSq(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.l_(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dIi(d,o,a0))},
axN(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfe(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZe(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zn.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abT(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bN5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abT(p,o)
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
c6U(d){var w,v,u,t=this,s=t.axN(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f_()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dX(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dIq())
return}u=t.bN5(d)
if(u!=null)t.m(new C.dIr(t,u))
else t.m(new C.dIs(t))},
avO(d){return this.c18(d)},
c18(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$avO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.axN(d)
if(s==null){w=1
break}B.jD()
t.m(new C.dIn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$avO,v)},
bzU(d){if(this.x.A(0,A.az))return
this.m(new C.dId(this,d,A.cW))
B.f_()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDL()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.uo:P.Ce,A.ae,h,h,h,21),h,h,h,new C.dIB(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.co.j(0.14)
r=B.I(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.f9f,h,h,h),B.d(w.b,h,h,h,h,h,h,G.a8Q,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.kZ,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bo:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bG(D.fzH,i.gc6R(),B.bn(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,W.ML,D.bvU,h,h,1/0))}u.push(B.E(B.cC(new C.dIC(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zn.h(0,r).a+": "+D.zn.h(0,r).e,h,h,h,h,h,h,A.t_,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A5.aio,A.bU,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.zn.gdR(D.zn),s=s.gaf(s);s.C();){r=s.gT(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bA,new B.y(p.a,h,D.aRR,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bJ(m,m,m,m),new B.bk(q,q,q,q),h,h,A.n),h,h,h,A.fv,Af.MG,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dID(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dh0[l]
s.push(new C.j6(A.Oj,k.b,new C.dIE(i,k),A.co,h))}s.push(new C.j6(D.NX,"Clear",new C.dIF(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bDL(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.eb:A.lu
o=i.ay
n=i.cx.q(0,j)?A.bo:A.bI
r.push(new C.f4(q.a,o===j,new C.dIG(i,j),p,n,h))}return C.oy(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new C.hn(t,"PARTS",h),new C.hn(s,"TRY",h),new C.hn(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.bb1.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.K()
w.r=D.ad2.gp(0)
a7.aX(new B.a5(0,0,0+a5,0+a6),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.M)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.abT(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=B.a([],p)
d=new B.aJ(l.r,A.ak,a4,a4,e)
e.push(new B.b1(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.lB(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.b=A.ac
l.c=9
l.r=A.bI.j(0.28).gp(0)
l.z=H.pf
s=l.H()
l=d.gbB().a.snapshot()
w.drawPath((d.e=new B.cv(l)).a,s)
s.delete()}l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.b=A.ac
l.c=3.2
l.d=A.bH
l.r=(f?A.dR:A.br).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new B.cv(d.gbB().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.aa(0,D.Iw)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aJ($.W().r,A.ak,a4,a4,B.a([],p))
w=a3.b
p.D(new B.b1(a6,w))
r=g.b
p.D(new B.lB(a6+a0,w,a5-a0,r,a5,r))
r=B.K()
r.b=A.ac
r.c=3
r.r=A.ae.gp(0)
a7.aJ(p,r)}for(a5=new B.dt(o,o.r,o.e);a5.C();)this.c6T(a7,a5.d)},
c6T(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zn.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bP(a0.c,64,64)
s=B.bz(t,A.lg)
r=w.cy===v
q=s.eQ(A.cv)
$.W()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.z=A.mK
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sar(new B.c0(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aA(0,B.bW(a0.c,52)))
d.ae(q,52,p)}q=s.eQ(A.cH)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sar(new B.a9(A.b3,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.aD(s,q)
q=B.K()
q.b=A.ac
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.um:D.bKX}else l=e.b
k=C.fYK(B.l_(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aF(0,new B.t(p/2,q.gbd(q)/2)))
j=C.fYK(e.a,10.5,A.c,g,g,A.H)
j.a6(d,a0.c.aa(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fYK(f,9,u?A.dR:A.bX,g,g,A.u)
i.a6(d,a0.c.aa(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZ8(d,w.abT(a0,h),o)
this.aZ8(d,a0.c.aa(0,D.Iw),o)},
aZ8(d,e,f){var w
$.W()
w=B.K()
w.r=D.ad2.gp(0)
d.ae(e,8.5,w)
w=B.K()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
aw(d){return!0}}
C.aLi.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwP.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvj()}}
C.Nr.prototype={
U(){return new C.aD8(B.mJ(0,null,null))}}
C.Ks.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.AE.prototype={}
C.aD8.prototype={
c6Y(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dOx(w,e))},
c01(){var w=this
w.e.t()
w.e=B.mJ(w.f,null,null)
w.m(new C.dOw(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.ou(t,B.c5(v,A.bZ,t?new C.bqR(w.e,w.gc6X(w),new C.dOy(d),v):new C.aHk(u,new B.cz(u.b,x.gj)),v,!1,!1,v,!1),new C.dOz(w,u),x.K)}}
C.bsq.prototype={}
C.bqR.prototype={
aZ9(d,e){var w=null
return new B.D(K.ZH,B.x(B.a([B.d(d,w,w,w,w,w,w,D.f9R,w,w,w),A.bA,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aI(v,v,v,v,Q.nq,v,v,v,w.e,v,v,v,v,v,v),A.rT,D.bBU],u),A.m,v,A.e,A.j,0,v,v),s=w.aZ9("STUDIOS","Play, make things, and keep what you make")
$.bDM()
return B.bm(!0,B.x(B.a([new B.D(D.bAW,t,v),B.E(B.vC(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,B.a([new B.mf(s,v),new B.nX(A.hA,B.P1(new B.ox(new C.eXU(d),9,!0,!0,!0,0,B.t3(),v),D.aPM),v),new B.mf(w.aZ9("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nX(D.bw0,B.P1(new B.ox(new C.eXV(w),6,!0,!0,!0,0,B.t3(),v),D.aPM),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
C.aeQ.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.n7,p,0.3)
m.toString
w=x.O
m=B.a([m,D.afV],w)
v=B.I(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aF(!1,A.a2,!0,r,B.aL(!1,o,!0,B.eF(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ax,A.aD,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cO,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ax,A.aD,A.x,m,r,r),A.n),r,A.FX,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.adH.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.n7,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.afV],w)
v=B.I(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aQ(6,6)
m=B.a([A.d.gI(i),A.d.gal(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),K.aIh,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bk(n,n,n,n),l,new B.a9(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return B.aF(!1,A.a2,!0,k,B.aL(!1,h,!0,B.eF(B.x(B.a([new B.a8(58,k,w,k),A.R,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,B.X(A.Cc,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ax,A.aD,A.x,f,k,k),A.n),k,A.FX,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
C.Q9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c1(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Sw,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bU(0,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.ax,A.aD,A.x,B.a([p,o,n,i],m),D.dmr,j),A.n),A.bf),0,0,0),B.ao(j,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bU(0,B.b4(j,j,j,new C.brP(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.I(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fby,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.TI)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fR,B.B(B.a([s,A.es,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bU(0,B.e2(B.el(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bU(0,B.e2(B.c1(j,new B.o(j,j,B.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new B.a8(w,v,new B.an(A.a_,j,A.aa,A.f,B.a([h,B.bU(0,B.c1(B.bx(q,new B.an(A.a_,j,A.aa,A.t,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
C.brP.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.a
J.bq(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.iZ(0,0.35)
t=B.bP(A.J,(w- -10)*1.6,s-r)
$.W()
s=B.K()
s.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aA(0,t))
d.aX(t,s)
u.restore()},
aw(d){return d.b!==this.b}}
C.brk.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bjm,D.af5],x.O),t=this.e,s=B.I(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kk,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a8(this.c,this.d,B.c1(B.bx(q,B.b4(B.au(B.X(A.jN,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b9K(p,w),A.az),A.aq),new B.o(w,w,s,v,r,new B.a9(A.ax,A.aD,A.x,u,w,w),A.n),A.bf),w)}}
C.b9K.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.W()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.eh(A.J)
$.W()
t=B.K()
t.b=A.ac
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
aw(d){return!1}}
C.aHk.prototype={
U(){return new C.aHl(new B.cy(null,x.z),null,null)}}
C.aHl.prototype={
gu3(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.btm,null,1,null,v)
w.cL(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
gZz(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.fP,null,1,null,v)
w.fk(0,!0)
v.e!==$&&B.bH()
v.e=w
u=w}return u},
gax1(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6V(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaVB(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWj(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb6I(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gu3()
w.de()
w.dV$.M(0,this.gcwg())},
cwh(){var w,v,u,t,s,r,q,p=this,o=p.gu3().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gax1().a){case 0:w=D.nt
break
case 1:w=D.uv
break
case 2:w=D.a38
break
case 3:w=D.nt
break
case 4:w=D.d9z
break
case 5:w=D.uv
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aaK)r=0.09
else r=s===D.aaL?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c2X[v]
C.q0("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.IX("bell",D.cbK,1400,0.35)}}p.ax=o},
t(){this.gu3().t()
this.gZz().t()
this.bx3()},
adU(){var w=this
w.gu3().cVA(0,B.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eXA(w))},
chh(){this.gu3().bR(0)
this.m(new C.eXz(this))},
adT(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaWj(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
l.push(new B.as(new B.ba(q,A.b4,A.aN),$.aw()))}m=B.a([],m)
for(t=u.gb6I(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){p=t[r]
m.push(new B.as(new B.ba(p,A.b4,A.aN),$.aw()))}o=B.C(u.gaVB(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(F.n7,null,new C.eXy(u,l,m,o),t,!0,!0,!0,A.lE,!1,!1,x.H),$async$adT)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$adT,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gax1(),f=i.a.c,e=f.b,d=i.gc6V(),a0=new C.AE(g,e,f.c,d,i.gaVB(),i.gaWj(),i.gb6I())
f=B.ar(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.uo:P.Ce,A.ae,h,h,h,21),h,h,h,new C.eXI(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.bUD,h,h,h,i.gc6W(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,D.qh,h,h,h,new C.eXJ(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c8(i.gZz(),new C.eXK(i,a0),h),B.cC(new C.eXL(i,a0))],g)
u=i.as
t=u?i.gchg():i.gc6Z()
u=u?D.bKh:A.uh
s=B.ar(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=B.B(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.c8(i.gu3(),new C.eXM(i,a1,a0),h),1),B.aI(h,h,h,h,D.bQY,h,h,h,new C.eXN(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=C.lQ(r,u+"x","Speed",2.5,0.4,new C.eXO(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.djE[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new C.f4(p.b,o===p.a,new C.eXP(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c3k[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aZ
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bJ(j,j,j,j),h,h,new B.a9(A.ax,A.aD,A.x,n,h,h),A.a6),h,l,h,D.ai8,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXQ(i,n),h,h,h,h,h,h,!1,A.a4))}return C.oy(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eG(new B.an(A.a_,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new C.hn(u,"STYLE",h),new C.hn(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bz5(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nt[r]
p=A.k.E((1-A.ew.av(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nt[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nt[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dk()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kc(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nt[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nt[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nt[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kH(q,new B.iJ(n,f,A.b3,!0,f,new C.Q9(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nt[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nt[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mr(new C.bqt(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a8(a2,358,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
bPN(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uv[r]
p=A.pW.av(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uv[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uv[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dk()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jT(n,n,n,1)
m.fA(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Q9(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dk()
k.fA(3.141592653589793)
k=new B.iJ(k,f,A.A,!0,f,new C.brk(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kH(q,new B.iJ(m,f,A.A,!0,f,k,f),f),f))}return new B.a8(a2,378,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
cBf(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a38[w]
l.push(A.ct.av(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bU(0,B.b4(n,n,n,new C.btU(d.d,l,D.awL,m,C.bqQ(e,0.4,0.62),f,C.bqQ(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fZf(g,w)
q=D.awL[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kH(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fZf(g,w)
r=D.a38[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kH(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Ur,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a8(g,m+90,new B.an(A.a_,n,A.aa,A.f,v,n),n)},
bFk(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.av(0,C.bqQ(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bU(0,B.au(B.dU(B.b4(f,f,f,new C.bpV(A.d.gI(a1),C.bqQ(a3,0,0.2),a4,f),new B.at(a5*0.95,70)),D.eaN),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dA.av(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dk()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fA(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jT(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.cn(A.A,f,f,new B.kH(k*(0.45+0.55*o),B.dU(new B.iJ(l,f,A.A,!0,f,new C.Q9(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aV(w,new C.eXr())
A.d.v(a0,new B.N(w,new C.eXs(),x.fR))
return new B.a8(a5,330,new B.an(A.a_,f,A.aa,A.f,a0,f),f)},
bEv(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uv[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lO.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uv[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.ayO[q]
k=B.dk()
k.mL(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jT(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uv[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.cn(A.A,e,e,new B.kH(m,B.dU(new B.iJ(k,e,A.A,!0,e,new C.Q9(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uv[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.cn(A.A,e,e,B.dU(new B.mr(new C.bao(w,f,q,e),e,new B.at(r,212),e,e),new B.t(0,D.ayO[q])),e),e))}return new B.a8(a4,330,new B.an(A.a_,e,A.aa,A.f,a0,e),e)},
bC0(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.eaR],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nt[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.ct.av(0,p)
q=D.ayX[r]
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
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nt[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dk()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mL(l*h+D.ddB[r]*o)
f.fA(l*0.9)
h=0.55+0.45*o
f.jT(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cn(A.A,a3,a3,new B.kH(g,B.dU(new B.iJ(f,a3,A.A,!0,a3,new C.Q9(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nt[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayX[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cn(A.A,a3,a3,B.dU(new B.mr(new C.bpX(A.d.gI(w),a2,a3),a3,new B.at(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a8(b0,330,new B.an(A.a_,a3,A.aa,A.f,a6,a3),a3)}}
C.bqt.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bz(u,A.he)
$.W()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=H.pf
d.aD(q,t)
t=B.bz(u,A.he)
q=B.K()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aw(d){return d.c!==this.c||d.d!==this.d}}
C.bpV.prototype={
a6(d,e){var w,v,u=this.c,t=B.bP(e.eh(A.J),e.b*u,e.a*u)
$.W()
u=B.K()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.HY
d.e1(t,u)
u=B.K()
u.b=A.ac
u.c=2.5
u.r=w.j(0.7).gp(0)
d.e1(t,u)
u=t.cs(-14)
v=B.K()
v.b=A.ac
v.c=1
v.r=w.j(0.3).gp(0)
d.e1(u,v)},
aw(d){return!0}}
C.bao.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eh(A.J),f=this.c,e=A.ct.av(0,f)
$.W()
w=B.K()
w.b=A.ac
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new B.en()
t.df(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aw(d){return!0}}
C.bpX.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eh(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bP(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.b=A.ac
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(B.bQ(p),n)
n.delete()}},
aw(d){return d.c!==this.c}}
C.btU.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a5(0,d0,0+c5,d0+60)
$.W()
d0=B.K()
w=c1.b
v=x.O
d0.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aA(0,d1))
d2.aX(d1,d0)
d0=B.K()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.br(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.fZf(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mK
a4=a3.H()
t.drawOval(B.bQ(new B.a5(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a5(d,a1,a3,a1+a0)
a6=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new B.a9(A.b3,A.b6,A.x,B.a([a7,A.d.gal(w)],v),c2,c2).aA(0,a5))
a4=a6.H()
t.drawRect(B.bQ(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aJ(a2,A.ak,c2,c2,a6)
a6.push(new B.b1(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a7,m))
a6.push(new B.ap(a3,c4))
a6.push(new B.bv())
a6=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a6.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbB().a.snapshot()
t.drawPath((a8.e=new B.cv(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aJ(a2,A.ak,c2,c2,a6)
a6.push(new B.b1(d,a1))
a6.push(new B.ap(d+c8,a9))
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a3,a1))
a6.push(new B.bv())
a2=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbB().a.snapshot()
t.drawPath((b0.e=new B.cv(a2)).a,a4)
a4.delete()
b1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b1.b=A.ac
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(B.bQ(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cv(a8.gbB().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cv(b0.gbB().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bz(new B.a5(b7,a7,b7+r,b5),A.he)
$.W()
b9=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(B.eU(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a5(d,a1,a3,a1+28)
J.bq(t.save())
t.clipRect(B.bQ(a5),$.nc()[1],!0)
$.W()
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aA(0,c0))
a4=a1.H()
t.drawRect(B.bQ(c0),a4)
a4.delete()
t.restore()}}},
aw(d){return!0}}
C.aMU.prototype={
aY(){this.b6()
this.b5()
this.dK()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdG())
w.b4$=null
w.a2()}}
C.a0g.prototype={
a3(){return"_Role."+this.b}}
C.qb.prototype={}
C.qR.prototype={}
C.Cr.prototype={}
C.Ze.prototype={}
C.aeF.prototype={}
C.a0t.prototype={
gY(d){return this.d}}
C.CB.prototype={}
C.abB.prototype={}
C.abR.prototype={}
C.adL.prototype={}
C.bgR.prototype={
a2G(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b7M(d,e,f){return this.a2G(d,e,f,0,0.55)},
aBw(d,e,f,g){return this.a2G(d,e,f,0,g)},
b7N(d,e,f,g){return this.a2G(d,e,f,g,0.55)},
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
w.aT()},
ajS(d,e,f,g){var w="n"+this.ay++,v=new C.qR(w,e,f,g)
this.a.n(0,w,v)
this.aT()
return v},
B5(d,e,f){return this.ajS(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dje(e))
A.d.bt(w.c,new C.djf(e))
w.aT()},
bbA(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mJ.h(0,v.b).c===D.x6)return!1
w=this.b
if(A.d.b3(w,new C.djb(d,e)))return!1
w.push(new C.Cr(d,e))
this.aT()
return!0},
bZZ(d){var w
if(d.b==="beat")return D.cbU[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.au(500)
case 2:return 1400+w.au(2200)
default:return 450+w.au(2000)}},
aF4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.azc[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CB(u,t,j.ax,90))
w.push(new C.CB(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new C.a0t(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7M(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.aj()*0.5)
m.toString
v.push(new C.a0t(u,new B.t(o*p,n*p),m,3+w.aj()*4.5,1000+w.au(700),j.ax))}j.f.push(new C.CB(u,t,j.ax,120))
j.aBw(120,200,"noise",0.5)
j.b7M(261.63*Math.pow(2,([7,12,16,19][w.au(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CB(u,t,j.ax,230))
w.push(new C.CB(u,t,j.ax+160,160))
w.push(new C.CB(u,t,j.ax+320,100))
j.b7N(180+j.at.au(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abB(u,new B.t((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7N(300+w.au(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new C.abR(u,u.aa(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.aj()*200)),t,j.ax))
j.a2G(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fF()
j.a2G(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adL(u,D.ayA[v],t,j.ax))
j.aBw(261.63*Math.pow(2,([0,5,9,12][j.at.au(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBw(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c8_[A.o.F(w,3)]
for(k=1;k<=3;++k)j.crl(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f5(w,new C.djc(d));v.C();)j.aA1(w.gT(0),j.ax+D.ckl[A.o.F(g.d,4)])
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
case"chance":s=j.at.au(100)<D.cBn[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f5(w,new C.djd(d));v.C();)j.aA1(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zf(w,0,v-700)},
crl(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Ze(e,"~"+d))},
aA1(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeF(d.a,v,e,w))
u.push(new C.Ze(w,v))},
a6p(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aF4(r)
u.n(0,r,o.ax+o.bZZ(s))}}w=o.c
v=B.S(w).k("Z<1>")
q=B.C(new B.Z(w,new C.djg(o),v),v.k("J.E"))
if(q.length!==0){A.d.bt(w,new C.djh(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.M)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gaf(v),r=new B.f5(u,new C.dji(p));r.C();)o.aA1(u.gT(0),o.ax)}else o.aF4(u)}}A.d.bt(o.d,new C.djj(o))
A.d.bt(o.e,new C.djk(o))
A.d.bt(o.f,new C.djl(o))
A.d.bt(o.w,new C.djm(o))
A.d.bt(o.x,new C.djn(o))
A.d.bt(o.r,new C.djo(o))
o.aT()},
va(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.t(q.a+o*e,q.b+p*e)
r.b=new B.t(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.t(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.t(l,o)
if(o>n){p=m.a=new B.t(l,n)
t=m.b=new B.t(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.t(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.C)
for(v=this.a,v=new B.dt(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.S.ao(B.G(["nodes",m,"edges",v],u,x.ew),null)},
Ty(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.S.aN(0,d,null))
k.a8(0)
for(o=x.j,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.w(J.q(v,"k"))
if(!D.mJ.ai(0,u))continue
t=B.w(J.q(v,"id"))
m.n(0,t,new C.qR(t,u,new B.t(B.e5(J.q(v,"x"))*k.cy.a,B.e5(J.q(v,"y"))*k.cy.b),A.k.O(B.e5(J.q(v,"p")))))
s=B.c9(B.aN(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.w(J.q(r,0))
p=B.w(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new C.Cr(q,p))}k.aT()
return!0}catch(l){return!1}},
cQj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qR(n,r,new B.t(q*p.a,o*p.b),s))
l.aT()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbA(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.FU.prototype={}
C.VS.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aEj(new C.bgR(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cW,A.K,A.az,$.aw()),A.bE,A.J,A.J,A.V,null,null)}}
C.aEj.prototype={
acq(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acq)
case 6:q=n.jM(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.emW(s))
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
return B.i($async$acq,v)},
a9o(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9o=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.emL(s))
u=3
w=6
return B.b(B.az(),$async$a9o)
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9o,v)},
bLf(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cM(0,0,new C.emN())+"|"+A.d.cM(o,0,new C.emO())
if(v===p.ch)return p.CW
u=new C.emR()
t=x.s
s=B.a([],t)
r=new C.emS(p,s,u)
for(n=new B.bc(n,w).gaf(0),w=new B.f5(n,new C.emP());w.C();){q=n.gT(0)
if(!A.d.b3(o,new C.emQ(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d1(s,0,B.dB(5,"count",x.S),x.N).dA(0)},
a_(){var w,v=this
v.a1()
v.acq()
v.d.db=v.ay
w=v.un(new C.enl(v))
w.hE(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.S$=$.aw()
v.P$=0
w.bw4()},
abX(d){return this.bZr(d)},
bZr(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abX=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$abX)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ty(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWK(A.d.gI(D.ay0))
if(s.c!=null)s.m(new C.emV())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$abX,v)},
aWK(d){this.d.cQj(0,d.c,d.d)
this.Ed()},
Ed(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cM(A.lX,new C.emH(this))},
ax2(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cff(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZf(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mJ.h(0,r.b).c===D.x6)continue
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
c71(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hm9(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cz3(d){var w,v,u,t,s,r,q=this,p=q.ax2(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f_()
u=v.b
if(u==="button"){w.aF4(p)
return}if(q.r)return
t=D.mJ.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qJ)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aT()
q.Ed()
return}if(q.r)return
r=q.c71(d)
if(r!=null){w=q.d
A.d.cG(w.b,r)
w.aT()
q.Ed()}},
cgy(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cff(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ax2(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
cgz(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aT()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aT()}}},
b0M(){var w,v,u=this
if(u.z!=null){w=u.bZf(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbA(v,w)}else v=!1
if(v){B.kp()
u.Ed()}u.z=null
u.d.aT()}else if(u.x!=null){if(u.at)u.Ed()
u.x=null}},
acD(d){return this.c19(d)},
c19(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$acD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ax2(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jD()
p=t.c
p.toString
w=3
return B.b(B.bT(F.n7,null,new C.emY(q),p,!0,!0,!1,A.lE,!1,!1,x.y),$async$acD)
case 3:if(f===!0){r.W(0,s)
t.Ed()}case 1:return B.h(u,v)}})
return B.i($async$acD,v)},
c7_(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B5(0,d,new B.t(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
B.f_()
this.Ed()},
agm(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(F.n7,null,new C.en_(),s,!0,!0,!0,A.lE,!1,!1,x.es),$async$agm)
case 2:t=e
if(t!=null)u.aWK(t)
return B.h(null,v)}})
return B.i($async$agm,v)},
adV(d){var w=0,v=B.j(x.H),u=this,t
var $async$adV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.emK(),t,null,!0,!0,x.y),$async$adV)
case 2:if(f===!0){u.d.a8(0)
u.Ed()}return B.h(null,v)}})
return B.i($async$adV,v)},
B(d){var w=this,v=null,u=B.a([B.ai6(w.r?new B.bK(A.a3,v,v,new B.D(A.FY,B.ho(D.bOV,D.fsu,new C.enj(w),v),v),v):w.c72(),A.b8,A.iN),B.E(B.cC(new C.enk(w)),1)],x.p)
if(!w.r)u.push(w.ctP())
return B.c5(v,A.bZ,B.bm(!0,B.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bH_(){var w=null,v=new C.emM(),u=A.w.j(0.7),t=B.m(26),s=B.I(A.bu.j(0.5),A.r,1)
return B.bU(0,B.el(B.au(B.p(w,B.ce(B.x(B.a([D.fDH,A.au,D.fLl,A.aA,v.$4(A.p3,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.C8,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l3,A.c7,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.am2,A.bI,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fKE,new B.bK(A.a8,w,w,B.bM(!1,D.fAR,w,w,!0,w,w,this.gbGT(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),A.f,w,A.W2,new B.o(F.n7,w,s,t,w,w,A.n),w,w,w,A.fb,A5.ajl,w,w,w),w,w,w),u,!0),0,0,0)},
c72(){var w=this,v=null,u=B.aI(v,v,v,v,Q.nq,v,v,v,new C.en5(w),v,v,v,v,v,v),t=w.a8R(A.O8,"How it works",new C.en6(w),!0),s=w.ay?A.uo:P.Ce
return new B.D(D.bA9,B.B(B.a([u,D.bBG,t,w.a8R(s,"Sound",new C.en7(w),!0),w.a8R(A.e3,"Ideas",w.gcki(),!0),w.a8R(D.NX,"Clear",w.gc70(w),!0),w.aNH(A.iu,"Show",new C.en8(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNH(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(A9.vU,B.aF(!1,A.a2,!0,u,B.aL(!1,t,!0,B.hp(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8R(d,e,f,g){return this.aNH(d,e,f,g,!1)},
ctP(){var w=null,v=new C.en1(this),u=A.c.j(0.08)
return B.p(w,B.ce(B.B(B.a([v.$2("START",D.x6),v.$2("CHANGE",D.Ea),v.$2("REACT",D.qJ)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(F.AZ,w,new B.bJ(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.bvi,w,w,w)},
ctQ(d){var w,v,u,t,s=null,r=D.mJ.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.I(v.j(0.5),A.r,1)
return new B.D(A.fv,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cO,B.d(r.a,s,1,A.a1,s,s,s,D.aRR,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b3,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.en0(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bgS.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bq(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=B.K()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aX(new B.a5(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){l=w[m]
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
d=B.a([],o)
a0=new B.aJ(e.r,A.ak,b4,b4,d)
d.push(new B.b1(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.lB(h+a1,i,f-a1,g,f,g))
a2=D.mJ.h(0,k.b).d
a3=D.mJ.h(0,j.b).d
e=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
e.b=A.ac
e.c=3
e.d=A.bH
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rD(new B.t(h,i),new B.t(f,g))
e.sar(new B.a9(A.a3,A.a8,A.x,d,b4,b4).aA(0,new B.a5(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbB().a.snapshot()
b7.drawPath((a0.e=new B.cv(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hm9(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.W()
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.r=A.c.j(0.35).gp(0)
h.z=H.pf
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.aa(0,D.Iw)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aJ($.W().r,A.ak,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.b1(t,o))
i=a9.b
a0.D(new B.lB(t+a1,o,w-a1,i,w,i))
i=B.K()
i.b=A.ac
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aJ(a0,i)
i=B.K()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.e_.av(0,v)
$.W()
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.b=A.ac
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kt(o,i,A.e_.av(0,v))
h.toString
i=B.kt(o,i,A.e_.av(0,A.k.E(v-0.35,0,1)))
i.toString
$.W()
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.c=5
o.d=A.bH
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rD(i,h)
o.sar(new B.a9(A.a3,A.a8,A.x,f,b4,b4).aA(0,new B.a5(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lC
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){j=w[m]
o=j.a
$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lC
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.sar(new B.c0(V.x9,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bW(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.M)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bgT(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new B.dt(n,n.r,n.e);b5.C();)b3.cg6(b8,b5.d,b6)
b7.restore()},
cg6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mJ.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bP(e.c,64,64)
t=B.bz(u,A.iA)
s=t.eQ(A.cv)
$.W()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.z=A.mK
d.aD(s,r)
if(v>0){s=t.cs(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zp
d.aD(s,r)}s=t.eQ(A.cH)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.aD(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sar(new B.a9(A.b3,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.aD(t,r)
r=B.K()
r.b=A.ac
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=C.bgT(B.l_(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aF(0,new B.t(s/2,r.gbd(r)/2)))
n=C.bgT(h.a,11,A.c,j,j,A.H)
n.a6(d,e.c.aa(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.ayA[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qJ){s=e.c.aa(0,new B.t(0,62))
r=B.K()
r.r=D.azc[A.o.F(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=C.bgT(m,9.5,A.aB,j,j,A.O)
l.a6(d,e.c.aa(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bgT(m,9.5,A.aB,j,j,A.O)
l.a6(d,e.c.aa(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.x6)k.b1A(d,e.c.aF(0,D.Iw),q)
k.b1A(d,e.c.aa(0,D.Iw),q)},
b1A(d,e,f){var w
$.W()
w=B.K()
w.r=A.bZ.gp(0)
d.ae(e,9,w)
w=B.K()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
aw(d){return!0}}
C.aM1.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.blf.prototype={}
C.Q0.prototype={
gY(d){return this.d}}
C.W6.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bkm(new B.cy(null,x.z),w,v,A.cW,A.bE,D.LK,null,null)}}
C.bkm.prototype={
b_i(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bm((1-d.b/(B.aH(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d1A[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":C.q0("synth",u,420,0.3)
break
case"rainbow":C.q0("bell",u,700,0.35)
break
case"stars":C.q0("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.au(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.au(60),"",140,0,0.22,"noise")}},
c9Q(d){return this.b_i(d,!1)},
a_(){var w,v=this
v.a1()
w=v.un(new C.ez1(v))
w.hE(0)
v.w!==$&&B.aP()
v.w=w},
t(){var w=this.w
w===$&&B.c()
w.t()
this.bwd()},
gb15(){var w=this.Q
return w<0?new N.vM(1,A.k.F(this.y*0.18,360),0.85,1).m_():D.Rc[w]},
aS5(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb15(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=B.ar(A.bI,A.aw,v.aj())
m.toString
j.push(new C.Q0(new B.t(u+(q-0.5)*p,t),new B.t((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.au(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=B.ar(k,A.c,v.aj()*0.6)
n.toString
j.push(new C.Q0(d,new B.t(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.au(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new C.Q0(d,new B.t(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aZb(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb15()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.blf(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aS5(e)
r.b_i(e,!0)
r.m(new C.eyD())},
aZa(){this.ax=null
this.m(new C.eyC())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aI(n,n,n,n,D.qh,n,n,n,new C.eyM(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.brK(k,o.f,o.y,o.at,n),A.az)],m)
if(!o.ay&&k.length===0)j.push(D.b7D)
k=B.aB(A.cg,new B.an(A.a_,n,A.b2,A.t,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eyN(o),new C.eyO(o),new C.eyS(o),n,n,n,n,n,n,n,n,n,new C.eyT(o),new C.eyU(o),n,n,n,!1,A.a4)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cZK[w]
j.push(new C.f4(v.b,o.z===v.a,new C.eyV(o,v),v.c,A.c7,n))}u=B.a([new C.Fj(A.c,o.Q<0,new C.eyW(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.Fj(D.Rc[t],o.Q===t,new C.eyX(o,t),!1,n))
s=o.as
s=C.lQ(A.c7,A.o.u(A.k.V(s)),"Size",36,4,new C.eyY(o),s)
r=o.ch
q=r?A.uo:P.Ce
q=B.a([new C.f4("Sound",r,new C.eyZ(o),q,A.c7,n),new C.j6(A.rn,"Undo",new C.eyP(o),A.c,n),new C.j6(D.NX,"Clear",new C.eyQ(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.dfh[w]
q.push(new C.Fj(p,o.at.A(0,p),new C.eyR(o,p),!1,n))}return C.oy(A.c7,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eG(k,o.d),"SPARK PAINTER",B.x(B.a([new C.hn(j,"BRUSH",n),new C.hn(u,"COLOUR",n),s,new C.hn(q,n,n)],m),A.m,n,A.e,A.P,0,A.p))}}
C.brK.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=B.K()
v=a4.e
w.r=v.gp(v)
a6.aX(new B.a5(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=B.a([],t)
n=new B.aJ(p.r,A.ak,a5,a5,o)
o.push(new B.b1(A.d.gI(q).a,A.d.gI(q).b))
for(p=B.S(q),m=p.k("lR<1>"),l=new B.lR(q,1,a5,m),l.vf(q,1,a5,p.c),l=new B.bS(l,l.gL(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.d=A.bH
q.e=A.dS
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.d=A.bH
q.e=A.dS
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.d=A.bH
q.e=A.dS
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new N.vM(1,A.o.F(i*5,360),0.85,1).m_()
o=q[i-1]
m=q[i]
$.W()
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.c=p
l.d=A.bH
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.M)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new N.vM(1,A.o.F(a3*23,360),0.7,1).m_():l
a4.c73(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=Q.RH
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c73(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=B.a([],x.v),n=new B.aJ(p.r,A.ak,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.b1(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bv())
$.W()
p=B.K()
p.r=h.j(0.4).gp(0)
p.z=A.lC
d.aJ(n,p)
p=B.K()
p.r=h.gp(0)
d.aJ(n,p)},
aw(d){return!0}}
C.Wh.prototype={
U(){return new C.aEz(new B.cy(null,x.z),new B.as(new B.ba("NGMY",A.b4,A.aN),$.aw()),null,null)}}
C.aEz.prototype={
gIW(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.r7,null,1,null,v)
w.cL(0)
v.e!==$&&B.bH()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIW()
w.de()
w.dV$.M(0,this.gbYo())},
bYp(){var w,v,u,t,s,r,q,p=this,o=p.gIW().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.ma:new B.mg(w)).gL(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.q0(s,D.cSP[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
t(){this.gIW().t()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bwi()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.mg(h)
w=B.C(h,B.a6(h).k("J.E"))}v=D.Rc[k.w]
h=x.p
u=B.a([B.aI(j,j,j,j,D.qh,j,j,j,new C.eFa(k,d),j,j,j,j,"Share",j)],h)
t=B.m(26)
s=D.ayB[k.y]
s=B.bx(t,B.c1(B.au(B.c8(k.gIW(),new C.eFb(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a9(A.ax,A.aD,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=B.aM(j,A.V,!1,j,!0,A.t,j,B.aO(),i,j,j,j,j,j,2,B.bs(j,new B.b5(4,B.m(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.DQ,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eFc(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.fK,!0,A.a5,j,A.ao,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.cB9[r]
i.push(new C.f4(q.b,k.r===q.a,new C.eFd(k,q),j,A.bI,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.Fj(D.Rc[o],k.w===o,new C.eFe(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.uo:P.Ce
l=B.a([new C.f4(m,n,new C.eFf(k),l,A.bI,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.Fj(D.ayB[o][0],k.y===o,new C.eFg(k,o),!1,j))
n.push(A.bn)
n.push(new C.j6(A.ob,"Replay",new C.eFh(k),A.c,j))
m=k.x
return C.oy(A.bI,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.D(A.bC,new B.eG(s,k.d),j),"TITLE ANIMATOR",B.x(B.a([t,A.N,new C.hn(i,"MOVE",j),new C.hn(p,"COLOUR",j),new C.hn(l,"SOUND",j),new C.hn(n,"BACK",j),C.lQ(A.bI,A.o.u(A.k.V(m)),"Size",96,28,new C.eFi(k),m)],h),A.m,j,A.e,A.P,0,A.p))},
c0b(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bm(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.F(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a8(p)
p.push(new B.cS(h,A.J,30*v))
p.push(new B.cS(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bm(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.bb
else w=u?A.c7:h
break
case"zoom":t=A.k.E(g*1.4-q*0.5,0,1)
n=A.lO.av(0,t)
w=h
m=t
break
case"rainbow":w=new N.vM(1,A.k.F(g*360+e*40,360),0.75,1).m_()
A.d.a8(p)
p.push(new B.cS(w.j(0.7),A.J,18))
break
default:w=h}return B.dd(B.dU(B.ed(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.t(l,o)),m)}}
C.aMa.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aMf.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.eb.prototype={}
C.tz.prototype={
aqc(d,e,f,g){var w=this
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
C.aah.prototype={}
C.abn.prototype={}
C.a4o.prototype={
bds(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new C.aah(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c3i(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bMt())},
ajS(d,e,f,g){var w="p"+this.c++,v=new C.tz(w,e,f,g)
v.aqc(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bME(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHo(d,e,f,g,h){return A.d.b3(this.b,new C.bMz(e,f,g,h))},
akB(d,e,f,g){var w
if(d===f||this.cHo(0,d,e,f,g))return null
w=new C.abn(d,e,f,g)
this.b.push(w)
return w},
aAy(d){var w
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
anf(d){return this.LL(d)&&!d.x&&d.cx>this.zI(d)},
b5X(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LL(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7k(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zo.h(0,v)
if(w!=null)return w.a
return 100},
va(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c3i(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.S(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.M)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bMF(a2),t).cM(0,0,new C.bMG(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bMI(o)
m=B.a([],x.t)
l=new C.bMH(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.M)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.M)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bMK(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.M)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b5T(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zI(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5T(e,d,w,!0)
a2.bNz(a4)},
b5T(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bMv(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bMu(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.M)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bMx(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c4(b7,0,!1,b3)
v=x.W
k=B.U(v,b3)
j=B.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.b8(B.dH(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c4(b7,0,!1,b3)
a0=B.c4(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5X(t)*(1+t.CW))
a4=b2.aAy(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7k(t)}}k.n(0,t,a3)
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
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
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
bQL(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c4(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.M)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.M)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.c4(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bNz(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.M)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAy(o)/a1.b5X(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zI(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFD(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bds(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tO(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.E(o.db-h,0,24)
else o.cy=A.k.E(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.tO(o,"The "+$.qn().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tO(o,"More than 1.5 amps went through the "+$.qn().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tO(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tO(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zo.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qn().h(0,n).b
l=f.b
l=l===A.k.jc(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jc(g)?""+A.k.V(g):B.w(g)
a1.tO(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eY5.q(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tO(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tO(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tO(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.tO(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tO(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tO(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFD(d){return A.d.b3(this.a,new C.bMs(d))},
tO(d,e){var w
d.x=!0
d.ay=e
this.bds(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bi6(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGM(d){var w=d.b
return D.aOM.q(0,w)||D.zo.ai(0,w)||w==="buck"||w==="regulator"},
beT(d){var w,v=!0
if(!this.LL(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zo.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UO(d,e){var w=this.b
return new B.Z(w,new C.bMM(d,e),B.S(w).k("Z<1>")).gL(0)},
Cx(d){var w,v
if(d.x)return!1
w=d.b
if(D.zo.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qn().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGM(d)||i.Cx(d))return null
w=i.UO(d,0)
v=i.UO(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.S(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcPT(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jc(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zo.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGR("battery"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.UO(n,0)+i.UO(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGR("switch"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qn().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zI(k))return"The "+$.qn().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zI(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bMA(i,d))
h=q.b
h=h===A.k.jc(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGR(d){var w=this.a
return new B.Z(w,new C.bMD(d),B.S(w).k("Z<1>"))},
aGp(d){return this.aGR(d).b3(0,new C.bMC(0.35))},
pQ(d,e){return A.d.b3(this.a,new C.bMB(e))}}
C.aiE.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=B.K()
w.r=F.B0.gp(0)
c0.aX(new B.a5(0,0,b8,b9),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m6.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m6.ai(0,h.b)?(h.ch-1)*38:0
b4.cEg(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hyU(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=B.K()
p.r=A.ae.gp(0)
p.c=3
p.d=A.bH
c0.br(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.r=D.aer.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zp
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bq(w.save())
w.translate(j,i)
h=A.k.E(A.lO.av(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ch5(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zI(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=B.a([],k)
a4=new B.aJ(a2,A.ak,b5,b5,a3)
a5=f-13
a3.push(new B.b1(g,a5))
a6=g+13
a7=f+10
a3.push(new B.ap(a6,a7))
a8=g-13
a3.push(new B.ap(a8,a7))
a3.push(new B.bv())
a3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbB().a.snapshot()
w.drawPath((a4.e=new B.cv(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aJ(a2,A.ak,b5,b5,e)
e.push(new B.b1(g,a5))
e.push(new B.ap(a6,a7))
e.push(new B.ap(a8,a7))
e.push(new B.bv())
e=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
e.b=A.ac
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbB().a.snapshot()
w.drawPath((a2.e=new B.cv(e)).a,s)
s.delete()
a9=new B.l3(new B.eS("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.c8,new B.kK(1),b5,b5,b5,b5,A.c6,b5)
a9.eT()
a9.a6(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aOM.q(0,h)||D.zo.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cx(a0)&&r.UO(a0,0)+r.UO(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.r=A.aE.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.l3(new B.eS("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.c8,new B.kK(1),b5,b5,b5,b5,A.c6,b5)
a9.eT()
a9.a6(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m6.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.r=F.B0.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.b=A.ac
j.c=2.4
j.r=(i&&r.beT(a0)?A.cs:A.ae).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beT(a0)){a9=new B.l3(new B.eS("+",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.c8,new B.kK(1),b5,b5,b5,b5,A.c6,b5)
a9.eT()
a9.a6(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(I.M3,F.Ye,b2)
j.toString
i=b1.f
$.W()
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.r=j.gp(0)
h.c=2.4
h.d=A.bH
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=j.j(0.35*b2).gp(0)
i.z=A.RI
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bH4())){b3=A.d.cM(q,0,new C.bH5())
$.W()
b7=B.K()
b7.r=D.bbs.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new B.a5(0,0,b8,b9),b7)
a9=B.fX(b5,b5,b5,b5,D.f84,A.a5,A.c8,b5,A.dQ,A.c6)
a9.t0(b6-24)
a9.a6(c0,new B.t(12,10))}},
qs(d,e,f,g,h){var w=null,v=B.fX(w,w,w,w,B.cZ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.c8,w,A.dQ,A.c6)
v.eT()
v.a6(d,f)},
cEg(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aJ($.W().r,A.ak,null,null,B.a([],x.v))
d.D(new B.b1(a1.a,a1.b))
w=C.hrh(a1,a2,a3)
d.D(new B.ca(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.aer,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aR,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.K()
u.b=A.ac
u.c=a4?7:5
u.d=A.bH
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aJ(d,u)
u=B.K()
u.b=A.ac
u.c=2.4
u.d=A.bH
u.r=(a4?A.c:o).gp(0)
a0.aJ(d,u)
if(q){n=new B.SI(new B.vG(B.xf(d),!1,B.a([],x.f5))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jB()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jB()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jB()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.jB()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.jB()
i=t[u].MT(f).a
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P4(d,e,f,g){var w,v,u,t
$.W()
w=B.K()
v=g?A.b3:A.a3
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sar(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.Hq,null).aA(0,d))
return w},
awd(d,e,f){return this.P4(d,e,f,!0)},
c2T(d,e){return this.P4(d,A.bl,A.il,e)},
ahr(d,e){var w,v,u
$.W()
w=B.K()
w.sar(D.aNe.aA(0,B.bW(e,4.2)))
d.ae(e,4.2,w)
w=e.aa(0,D.ed6)
v=e.aa(0,D.edf)
u=B.K()
u.r=A.e5.gp(0)
u.c=1.2
d.br(w,v,u)},
ch5(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=B.K()
c0.sar(D.bZE.aA(0,D.eUN))
c0.c=3.4
c0.d=A.bH
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.z=H.pf
c1.e1(D.eUB,w)
if(c3){w=B.bz(D.eUL,A.kK)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=C.h7b(c2)
c1.br(new B.t(-u,0),D.eeF,c0)
c1.br(D.ebS,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.m6.ai(0,w)&&c2.ch!==1
if(s){J.bq(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bCq(c1,c2)
break
case"solar":r=B.bz(D.eUE,A.iB)
c1.aD(r,b3.P4(new B.a5(r.a,r.b,r.c,r.d),A.dt,A.bO,!1))
b9=B.K()
w=B.ar(D.bf6,A.d0,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bnN,A.mt,0.3+0.4*c2.f)
v.toString
b9.sar(new B.a9(A.ax,A.aD,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a7d))
c1.aX(D.a7d,b9)
q=B.K()
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
v=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aJ($.W().r,A.ak,b4,b4,B.a([],x.v))
b9.D(new B.b1(-34,18))
b9.D(new B.ap(-6+40*c2.f,-18))
b9.D(new B.ap(4+40*c2.f,-18))
b9.D(new B.ap(-24,18))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aJ(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dR.j(0.9).gp(0)
c1.ae(D.ebY,4+4*w,b9)
break
case"crank":n=B.bz(D.eUp,A.hH)
c1.aD(n,b3.awd(new B.a5(n.a,n.b,n.c,n.d),A.br,A.bL))
b9=B.K()
b9.sar(D.aNf.aA(0,B.bW(A.J,12)))
c1.ae(A.J,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bH
c1.br(A.J,m,b9)
b9=B.K()
b9.sar(D.env.aA(0,B.bW(m,7)))
c1.ae(m,7,b9)
b3.ahr(c1,D.eex)
b3.ahr(c1,D.ebK)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aJ(b9,A.ak,b4,b4,B.a([],w))
v.D(new B.b1(-3,24))
v.D(new B.ap(3,24))
v.D(new B.ap(1.5,0))
v.D(new B.ap(-1.5,0))
v.D(new B.bv())
l=B.K()
l.r=A.bO.gp(0)
c1.aJ(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bq(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aJ(b9,A.ak,b4,b4,l)
l.push(new B.b1(0,-2))
l.push(new B.ca(6,-14,2,-30))
l.push(new B.ca(-2,-14,0,-2))
l.push(new B.bv())
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=A.c.gp(0)
o=l.H()
l=j.gbB().a.snapshot()
v.drawPath((j.e=new B.cv(l)).a,o)
o.delete()
v.restore()}b9=B.K()
b9.sar(D.enc.aA(0,B.bW(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=B.bz(D.eUw,A.rM)
b9=B.K()
b9.sar(D.apC.aA(0,new B.a5(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ahr(c1,D.SA)
b3.ahr(c1,D.aI2)
i=c2.w?D.aI2:G.aHT
b9=B.K()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bH
c1.br(D.SA,i,b9)
b9=B.K()
b9.r=(c2.w?A.bo:A.bO).gp(0)
b9.c=4
b9.d=A.bH
c1.br(D.SA,i,b9)
b9=B.kt(D.SA,i,0.85)
b9.toString
w=B.K()
w.r=A.aw.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=B.bz(D.aNQ,D.aNj)
b9=B.K()
b9.r=A.fh.j(0.25).gp(0)
c1.aD(h,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.aB.gp(0)
c1.aD(h,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bO,A.cY,c2.fx).gp(0)
c1.br(D.aIk,D.aI_,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.br(D.aIk,D.eeY,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.br(D.ecG,D.aI_,b9)
b9=B.K()
b9.r=A.dL.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bP(new B.t(I.jc[g]*22,0),20,9)
w=B.bz(f,A.hG)
o=b3.P4(f,A.d8,A.oK,!0).H()
b9.drawRRect(B.eU(w),o)
o.delete()}break
case"pot":b9=B.K()
b9.sar(D.enn.aA(0,B.bW(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.r=A.aB.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.K()
b9.sar(D.ena.aA(0,B.bW(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.K()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bH
c1.br(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bz(D.aNQ,D.aNj)
b9=B.K()
b9.sar(D.c1Z.aA(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=B.G([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(B.bQ(new B.a5(w,-9,w+4.5,9)),o)
o.delete()}b9=B.K()
b9.r=A.aT.gp(0)
c1.aX(D.eUY,b9)
b9=c2.r
b3.qs(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ee2,A.ae,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dR.j(0.55*w).gp(0)
v.z=A.zp
c1.ae(G.uO,34,v)}n=B.bP(D.eaO,12,18)
c1.aD(B.bz(n,A.hG),b3.P4(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=A.dn.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.K()
if(t)v=A.WR
else{v=B.ar(A.e2,A.hM,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.F6
else{l=B.ar(A.dt,A.dR,c2.fx)
l.toString}w.sar(new B.c0(A.tb,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bW(A.rI,17)))
c1.ae(A.rI,17,w)
w=B.K()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rI,17,w)
b9=b9.r
w=x.v
l=new B.aJ(b9,A.ak,b4,b4,B.a([],w))
l.D(new B.b1(-9,-12))
l.D(new B.ca(-12,-4,-9,0))
v=B.K()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aJ(l,v)
v=B.K()
v.r=A.cU.gp(0)
v.c=1.4
c1.br(D.eeS,D.eeU,v)
v=B.K()
v.r=A.cU.gp(0)
v.c=1.4
c1.br(D.ecy,D.ecB,v)
w=B.a([],w)
a4=new B.aJ(b9,A.ak,b4,b4,w)
a4.D(new B.b1(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bA(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=B.K()
b9.b=A.ac
b9.c=1.8
if(t)w=A.aW
else{w=B.ar(A.dt,D.bg2,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aJ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.duX
c1.ae(A.rI,30,v)}w=B.K()
w.r=A.e2.gp(0)
w.c=2.4
c1.br(D.ef_,D.eeZ,w)
w=B.K()
w.r=A.e2.gp(0)
w.c=2.4
c1.br(D.ecI,D.ecH,w)
b9=b9.r
w=x.v
a6=new B.aJ(b9,A.ak,b4,b4,B.a([],w))
a6.D(new B.b1(-12,8))
a6.D(new B.ap(-12,-6))
a6.D(new B.ca(0,-26,12,-6))
a6.D(new B.ap(12,8))
a6.D(new B.bv())
v=B.K()
if(t)l=A.j7
else{l=B.ar(A.ev,D.bhG,c2.fx)
l.toString}if(t)j=A.kz
else{j=B.ar(A.kx,A.aw,c2.fx)
j.toString}v.sar(new B.a9(A.ax,A.aD,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.eTR))
c1.aJ(a6,v)
v=B.K()
v.b=A.ac
v.c=1.2
v.r=A.k6.gp(0)
c1.aJ(a6,v)
v=B.K()
v.r=A.el.gp(0)
c1.aX(D.eTX,v)
w=new B.aJ(b9,A.ak,b4,b4,B.a([],w))
w.D(new B.b1(-7,-4))
w.D(new B.ca(-6,-12,0,-15))
b9=B.K()
b9.b=A.ac
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aJ(w,b9)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c1.aD(B.bz(a7,A.i_),b3.awd(a7,A.al,A.aL))
b9=B.K()
b9.r=A.cp.gp(0)
c1.aX(D.eTu,b9)
b9=B.K()
b9.r=A.cr.gp(0)
c1.aX(D.eTw,b9)
b9=c1.a
J.bq(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bq(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bP(G.aHO,15,7)
v=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
v.r=A.cY.j(0.9).gp(0)
o=v.H()
b9.drawOval(B.bQ(w),o)
o.delete()
b9.restore()}w=B.K()
w.r=A.av.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qs(c1,"M",D.eew,A.av,14)
break
case"buzzer":a8=B.bP(A.J,42,42)
b9=B.K()
b9.sar(D.enr.aA(0,a8))
c1.e1(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ae(A.J,6,b9)
b3.qs(c1,"+",D.eep,A.ae,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bW(A.J,24+k*5+l)
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.b=A.ac
j.c=2
j.r=A.c7.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[B.bQ(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bz(D.eUs,A.i_)
w=B.K()
w.sar(D.c_D.aA(0,new B.a5(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=B.a([],x.v)
a9=new B.aJ(b9.r,A.ak,b4,b4,w)
a9.D(new B.b1(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.ca(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bA(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=B.K()
w.b=A.ac
w.c=10
w.r=D.bgJ.j(0.5*b9).gp(0)
w.z=A.lC
c1.aJ(a9,w)}$.W()
b9=B.K()
b9.b=A.ac
b9.c=3.2
b9.d=A.bH
b9.r=B.ar(A.lT,R.LW,c2.fx).gp(0)
c1.aJ(a9,b9)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b9=B.bz(a7,A.i_)
w=B.K()
w.sar(D.bZw.aA(0,a7))
c1.aD(b9,w)
w=B.K()
w.r=A.bO.gp(0)
c1.aX(D.eU5,w)
for(p=0;p<4;++p){b0=new B.l3(new B.eS("\u2212",b4,b4,A.d_,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.c8,new B.kK(1),b4,b4,b4,b4,A.c6,b4)
b0.eT()
b0.a6(c1,new B.t(-14,-18+p*9))}b1=new B.a5(-16,-24,16,-17)
c1.aD(B.bz(b1,A.hG),b3.c2T(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=B.K()
v.r=A.bo.j(0.5).gp(0)
c1.aX(new B.a5(-3,w,11,w+b9),v)
b3.qs(c1,"1F",G.uO,A.c,11)
break
case"radio":a1=B.bz(D.a7d,A.hH)
b9=B.K()
b9.sar(D.c2e.aA(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.oK.j(0.6).gp(0)
c1.aD(a1,b9)
b9=B.bz(D.eUt,A.iB)
w=B.K()
w.r=A.dH.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
v.r=A.lT.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.K()
w.r=(c2.fx>0?A.fZ:A.nS).gp(0)
c1.aX(D.eTA,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.K()
v.r=A.bx.gp(0)
v.c=1.6
c1.br(new B.t(w,-13),new B.t(w,-3),v)}w=B.K()
w.sar(D.aNf.aA(0,B.bW(D.a6b,6)))
c1.ae(D.a6b,6,w)
w=B.K()
w.r=A.oK.gp(0)
c1.ae(D.ebR,4,w)
w=B.K()
w.r=A.e2.gp(0)
w.c=1.8
c1.br(D.ebO,D.aI6,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bW(D.aI6,4+k*5+A.k.F(w.d*8,5))
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.b=A.ac
l.c=1.4
l.r=A.nY.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[B.bQ(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bz(D.eUD,A.i_)
v=B.K()
v.r=I.n3.gp(0)
c1.aD(w,v)
b2=B.bz(D.eUA,A.hG)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bq(b9.save())
b9.clipRRect(B.eU(b2),$.oR(),!0)
b9.translate(-33,-21)
E.h3g(c1,D.f_O,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.bo.gp(0)
c1.ae(D.ec3,1.6,b9)}else{w=B.K()
w.r=D.vC.gp(0)
c1.aD(b2,w)
b9=new B.aJ(b9.r,A.ak,b4,b4,B.a([],x.v))
b9.D(new B.b1(-33,-21))
b9.D(new B.ap(-10,-21))
b9.D(new B.ap(-33,0))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.aJ(b9,w)}b9=B.K()
b9.r=A.br.gp(0)
c1.aX(D.eTW,b9)
break}C.iaW(c1,c2,b3.b.d,b3.gc7l())
if(t)b3.qs(c1,"\u2716",D.ef2,A.aw,14)
if(s)c1.a.restore()},
bCq(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a5(-28,-13,28,13)
d.aD(B.bz(w,A.rM),m.awd(w,A.dt,A.j4))
v=new B.a5(-22,-13,22,13)
$.W()
u=B.K()
u.sar(D.apv.aA(0,v))
d.aX(v,u)
u=B.K()
u.r=A.dV.gp(0)
d.aX(D.eUf,u)
t=new B.a5(28,-5,34,5)
d.aD(B.bz(t,A.he),m.P4(t,A.dt,A.il,!0))
m.qs(d,"+",D.ebw,A.aT,11)
m.qs(d,"\u2212",D.eey,A.ae,11)
m.qs(d,B.w(l===A.k.jc(l)?A.k.V(l):l)+"V",D.eee,A.aT,13)
if(l===1.5){u=B.K()
u.r=A.bz.gp(0)
d.aX(D.eUe,u)
u=e.as
s=B.K()
s.r=B.ar(A.aw,A.bo,u).gp(0)
d.aX(new B.a5(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qs(d,"FLAT",D.ee1,A.cs,9)}if(l>2){u=B.K()
u.r=A.aZ.gp(0)
u.c=1
d.br(D.eaW,D.aHG,u)
m.qs(d,l>3?"3 cells":"2 cells",D.eed,A.aB,8)}}else if(l<=9){r=new B.a5(-22,-17,22,17)
u=B.bz(r,A.rM)
$.W()
s=B.K()
s.sar(D.c1M.aA(0,r))
d.aD(u,s)
s=B.K()
s.r=A.cS.gp(0)
d.aX(D.eUg,s)
for(u=d.a,q=0;q<2;++q){p=F.ayW[q]
s=p<0?5:3.6
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.sar(D.aNe.aA(0,B.bW(new B.t(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qs(d,"9V",D.ee7,A.c,16)}else{r=new B.a5(-34,-16,34,16)
u=B.bz(r,A.iB)
$.W()
s=B.K()
s.sar(D.apv.aA(0,r))
d.aD(u,s)
s=B.K()
s.r=A.bI.gp(0)
d.aX(D.eUC,s)
for(u=d.a,q=0;q<2;++q){s=B.bz(B.bP(new B.t(F.a4_[q],-20),8,10),A.he)
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(B.eU(s),n)
n.delete()}m.qs(d,"+",D.ebF,A.aw,10)
m.qs(d,"12V",D.eea,A.av,15)}},
aw(d){return!0}}
C.mI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tz(o,r,q,p)
n.aqc(o,r,q,p)
k.push(n)
J.iv(s[4],new C.cn4(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.M)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akB(m,u[1],l,u[3])}}}
C.aiC.prototype={
U(){var w=x.N
return new C.aiD(A.J,A.az,B.U(w,x.gl),B.aY(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.aiD.prototype={
ae5(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bGJ(w,d))
w.as=B.cM(A.lr,new C.bGK(w))},
t(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.bsn()},
a_T(d,e){return this.cf0(d,e)},
b0f(d){return this.a_T(d,!1)},
cf0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a_T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r9:A.xV
p=d.b
w=3
return B.b(E.h3z(s,r,p,d.ax<3.2,q,$.qn().h(0,p).b),$async$a_T)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a_T,v)},
crH(d){var w=this,v=new B.T(Date.now(),0,!1),u=w.at.c4(0,d.a,new C.bGL()),t=J.cD(u)
t.M(u,v)
t.bt(u,new C.bGM(v))
if(t.gL(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1c(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cM(A.kB,new C.bGN(w,u,d))}},
a_z(d){return this.cdn(d)},
cdn(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ic5(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a_z)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_z,v)},
a1c(d){return this.cpg(d)},
cpg(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.lp,null,new C.bGH(u,d),t,!0,!0,!1,A.jW,!1,!1,x.H),$async$a1c)
case 2:return B.h(null,v)}})
return B.i($async$a1c,v)},
a_(){this.a1()
this.bf2()
this.p5()},
bf2(){this.a.c.e=new C.bH1(this)},
pZ(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.va(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=D.m6.h(0,s.b)
if((r==null?null:r.b)!==D.zP)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.M(0,s.a)
q.a_T(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.aj()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cW.au(800),"",90,0,0.1,o)
if(A.cW.aj()<0.35)E.dX(300+A.cW.au(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.aj()<0.4
else u=!1
if(u)E.dX(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dX(330+A.o.F(110*A.k.bm(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dX((A.k.bm(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dX(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dX(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cW.aj()<0.5
else u=!1
if(u)E.dX(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dX(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dX(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bH2())},
b7g(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m6.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b0W(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.S(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m6.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cEh(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m6.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m6.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hrh(new B.t(k,n),new B.t(i,l),p)
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
ae3(){this.a.toString
this.m(new C.bGc())},
bp6(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d3J[v]
if(!A.d.b3(p.a.c.a,new C.bH3(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.Iy:o
s=s?L.Iy:o
q=t.ajS(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.ae3()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.QW[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.an(u+1,2)):w
r=t?A.d.fP(w,A.o.an(w.length+1,2)):A.V
q=n.a.d
if(q!=null){w=B.a6(q).k("cs<1>")
w=B.C(new B.cs(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.M)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b0L(s,!0))
n.a.toString
if(t)w.push(n.b0L(r,!0))
w.push(B.E(B.cC(new C.bH0(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.j,0,A.p)},
b0L(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
t=$.qn()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.A3,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nz,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bJ(q,q,q,q),new B.bk(r,r,r,r),p,p,A.n),p,p,p,F.tS,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGd(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.ct(m,p,A.h1,p,p,A.aM,!1),A.f,p,p,new B.o(F.AZ,p,new B.bJ(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZi(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.ad7,w,B.I(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.aiz,w,w,w)},
ch6(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qn().h(0,o),m=d.dy,l=d.fr,k=new C.bGw(q,n),j=B.d(n.c,p,p,p,p,p,p,A.JC,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ab,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bQJ,p,p,p,new C.bGj(q,d),p,p,p,p,"Remove part",A.cc),B.aI(p,p,p,p,A.GV,p,p,p,new C.bGk(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.DR,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fh_,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcZ(d)
if(v!=null){l=(d.x?A.aw:A.aE).j(0.14)
j=B.m(10)
i=B.I((d.x?A.aw:A.aE).j(0.5),A.r,1)
m.push(new B.D(A.i9,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fnv,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.h1j(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.f4("CH "+t,d.at===u,new C.bGl(q,d,u),p,h,p))}l=B.bX(A.bB,l,A.bs,4,6)
l=B.a([A.am,l,A.au,B.d(q.a.c.Cx(d)?"Showing: "+F.Qx[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Cx(d))l.push(new C.j6(A.Gs,"Open big screen",new C.bGo(q,d),h,p))
A.d.v(m,l)}if(D.m6.ai(0,o)&&!C.h1j(o)){l=B.a([A.am,B.d(q.a.c.Cx(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Cx(d))l.push(new C.j6(A.Oe,"Open the "+$.qn().h(0,o).b,new C.bGp(q,d),h,p))
A.d.v(m,l)}if(D.m6.ai(0,o))A.d.v(m,B.a([A.am,new C.j6(A.C4,"Make it bigger (or tap it 4 times)",new C.bGq(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.Cx(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fhP,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dl3[s]
j=r===A.k.jc(r)?A.k.V(r):r
l.push(new C.f4(B.w(j)+" V out",d.e===r,new C.bGr(q,d,r),p,h,p))}i.push(new B.D(A.kZ,B.bX(A.bB,l,A.bs,0,6),p))}if(o==="regulator")i.push(D.fG1)
A.d.v(m,i)}if(q.a.c.LL(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zI(d),2)
i=q.a.c
w=i.anf(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anf(d)?A.cs:A.eo,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zI(d),0,1)
i=q.a.c.anf(d)?A.aw:A.bo
m.push(new B.D(A.i9,B.x(B.a([l,A.cO,B.bx(j,B.li(A.bz,p,p,5,p,w,new B.m4(i,x.x)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i9,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fbD,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dat[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new C.f4(j,d.e===r,new C.bGs(q,d,r),p,h,p))}m.push(B.bX(A.bB,l,A.bs,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d12[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.f4(j,d.r===r,new C.bGt(q,d,r),p,h,p))}m.push(B.bX(A.bB,l,A.bs,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bGu(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bGv(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bGm(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bGn(d)))
if(o==="crank")m.push(D.fBq)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hg,p,p,p))
return q.aZi(new B.cT(D.b1c,B.ce(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ag),p))}}
C.baK.prototype={}
C.V5.prototype={
U(){return new C.aDk(C.h7a(),new B.cy(null,x.gJ),B.aY(x.S))}}
C.aDk.prototype={
a_(){this.a1()
$.aV.bZ$.push(this)
this.ae4()},
ae4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fwI(),$async$ae4)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ibi(t.d,r)
if(s!=null){t.m(new C.dT5(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
EZ(){var w,v=this
if(!v.as)return
w=C.i1R(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bDp(w)},
j8(d){if(d!==A.fB)this.EZ()},
t(){$.aV.hN(this)
this.EZ()
this.a2()},
c7n(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.S(v).k("Z<1>")
t=new B.Z(v,new C.dTe(q),u).gL(0)
s=new B.Z(v,new C.dTf(),u).gL(0)
r=new B.Z(v,w.gcTo(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dTg(q,t,s,r))}if(A.o.F(q.w,45)===0)q.EZ()
if(A.o.F(q.w,10)===0){w=q.f
$.ahQ()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ahQ()[q.f].c.$1(q.d)){w.M(0,q.f)
C.IX("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dTh())
q.EZ()
w=q.c
w.toString
w=B.Xl(w)
if(w!=null)w.R(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ahQ()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mu,p,p,p,p,p,p,p,p,p,p))}},
agI(){var w=0,v=B.j(x.H),u=this,t
var $async$agI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.dT4(u),t,null,!0,!0,x.H),$async$agI)
case 2:return B.h(null,v)}})
return B.i($async$agI,v)},
aZh(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.I(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hp(new B.a8(40,38,new B.an(A.a_,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
aZg(d,e,f,g){return this.aZh(d,e,f,g,null)},
aqS(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.I(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.ej,new B.dr(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
af2(){var w=0,v=B.j(x.H),u=this,t
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a3(t,!1).cg(B.e_(new C.dT0(u),!1,null,x.H)),$async$af2)
case 2:t=u.e.gbk()
if(t!=null)t.bf2()
if(u.c!=null)u.m(new C.dT1())
u.EZ()
return B.h(null,v)}})
return B.i($async$af2,v)},
bFw(){var w,v,u,t,s=null,r=this.f
$.ahQ()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.I(F.AZ,A.r,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wO,s,s,s),s,s,s),A.f,s,D.b1j,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eU,s,s,s)},
ahO(){var w=0,v=B.j(x.H),u=this,t
var $async$ahO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.lp,null,new C.dTd(u),t,!0,!0,!0,A.jW,!1,!1,x.H),$async$ahO)
case 2:return B.h(null,v)}})
return B.i($async$ahO,v)},
c7o(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bRY,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dTj(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.b74,A.f,r,r,new B.o(A.bm,r,B.I(A.aR.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ab,o,A.ab,B.E(B.x(B.a([D.fE1,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f3:A.hl,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.axr(s.gcd4(),r),A.rT,s.aZg(A.yy,"Construction Lab: real 3D wiring, plumbing and a house",A.cY,new C.dTk(s,d)),s.aZh(A.lu,"Challenges",A.aT,s.gcuh(),s.bFw()),s.aZg(A.O8,"How to play",A.aR,new C.dTl(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,B.B(B.a([s.aqS(A.o7,"Circuits",A.by,s.gcn7()),A.bn,s.aqS(A.p_,"Repair",A.aT,new C.dTm(s)),A.bn,s.aqS(D.NX,"Clear",A.cs,new C.dTn(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(F.AZ,r,new B.bJ(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bAX,r,r,r)},
B(d){var w=this,v=null
$.arY="tech"
return B.c5(v,A.bZ,B.bm(!0,B.x(B.a([w.c7o(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h6_(w.d,w.e,w.gc7m(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.axr.prototype={
U(){return new C.b8Z(null,null)}}
C.b8Z.prototype={
gax6(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.U,null,1,null,v)
w.cL(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
t(){this.gax6().t()
this.btE()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hp(new B.a8(42,42,B.c8(this.gax6(),new C.cDU(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.b8Y.prototype={
a6(d,e){var w,v,u,t=null,s=e.eh(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=B.K()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=H.pf
d.ae(s,r+2+o*2,w)
w=B.K()
w.sar(D.enm.aA(0,B.bW(s,r)))
d.ae(s,r,w)
v=B.K()
v.b=A.ac
v.c=2.2
v.sar(new B.fW(A.A,0,6.283185307179586,A.x,D.cTl,t,new B.mv(p)).aA(0,B.bW(s,r)))
d.ae(s,r,v)
p=new C.cDT(d)
p.$3(s.aa(0,A.rI),8+o*1.5,1)
q*=4
p.$3(s.aa(0,D.ecT),3.2,0.5+0.5*Math.sin(q))
p.$3(s.aa(0,D.ef8),2.6,0.5+0.5*Math.cos(q))
u=B.fX(t,t,t,t,D.f8a,A.a5,A.c8,t,A.dQ,A.c6)
u.eT()
u.a6(d,s.aa(0,new B.t(-u.b.c/2,5)))},
aw(d){return d.b!==this.b}}
C.axK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.axL.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bsm()}}
C.aJH.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwR.prototype={}
C.fN.prototype={}
C.Jq.prototype={
a3(){return"ScreenStyle."+this.b}}
C.md.prototype={}
C.UP.prototype={
U(){return new C.bjh(null,null)}}
C.bjh.prototype={
ga9m(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.o3,null,1,null,v)
w.cr(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
t(){this.ga9m().t()
this.bvs()},
gRT(){var w=this.ga9m().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m6.h(0,this.a.c)
if(v==null)v=D.aO7
return B.c5(w,T.XY,B.bm(!0,new B.an(A.a_,w,A.aa,A.t,B.a([B.au(v.b===D.zQ?this.bHE(v):this.cjT(v),w,w,w),B.ao(w,B.aI(w,w,w,w,A.mG,w,w,w,new C.dPu(d),w,w,w,B.nG(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.au(B.d(v.a,w,w,w,w,w,w,D.f9M,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c7p(d){var w
A:{if(D.IW===d){w=0.46153846153846156
break A}if(D.uX===d){w=0.45
break A}if(D.wF===d){w=0.9259259259259258
break A}if(D.Tc===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjT(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IW
A:{if(D.IW===p){w=44
break A}if(D.uX===p){w=30
break A}if(D.wF===p){w=22
break A}if(D.Tc===p){w=26
break A}w=14
break A}v=B.c8(this.ga9m(),new C.dPt(this,w,d,o),q)
if(p===D.a7m)v=new B.Dp(D.bBz,v,q)
p=this.c7p(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A1.G_,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ax,A.aD,A.x,r,q,q),A.n),q,q,q,D.bv8,new B.Q(u,u,u,u),q,q,q),q)},
b6p(d){var w,v,u,t=null,s=new B.T(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bm(this.gRT()*0.4),0,100),q=d.b===D.IW,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aZ(A.o.u(B.dl(s)),2,"0")+":"+A.a.aZ(A.o.u(B.h2(s)),2,"0"),t,t,t,t,t,t,A.t0,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bk(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bBh,t,t,t,3))}n.push(A.db)
n.push(D.fwP)
n.push(A.bn)
v=B.I(A.ae,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bK(A.a3,t,t,B.Bk(A.A,B.p(t,t,A.f,t,t,new B.o(A.bo,t,t,B.m(2),t,t,A.n),t,t,t,A1.G_,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qw)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fnQ,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
av2(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.au(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dge,new B.a9(A.ax,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fev,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dPp(this,d),v,v,v,v,v,v,!1,A.a4)},
bYY(d,e){return this.av2(d,e,!0)},
bYH(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Tc||n===D.wF,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kv,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b6p(d)
w=m?190:138
v=B.m(24)
u=B.I(A.aZ,A.r,1)
w=B.aB(o,B.p(o,B.bx(B.m(23),B.b4(o,o,o,new C.aey(0,p.gRT(),o),A.fH),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hA,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dPn(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kg[s]
t.push(new B.cn(A.A,o,o,p.bYY(r,m?58:54),o))}k=B.a([k,A.am,w,A.ad,B.E(B.kG(0.92,t,v,8,12,A4.vP,o,!1),1)],u)
if(n!==D.a7m){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d1(F.kg,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.av2(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.ry,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bvZ,G.ak0,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ax,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bB3(d,e){var w=null
return B.p(w,B.x(B.a([this.b6p(d),B.E(B.b4(w,w,w,new C.aey(e,this.gRT(),w),A.fH),1),B.aB(w,B.p(w,B.au(B.d(F.kg[e].a,w,w,w,w,w,w,A.Jr,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dPi(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHE(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.p(t,B.c8(this.ga9m(),new C.dPl(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ax,A.aD,A.x,w,t,t),A.n),t,t,t,D.bAS,new B.Q(8,8,8,s),t,t,t),t)}}
C.buV.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kv,0.4)
t.toString
w.sar(new B.a9(A.ax,A.aD,A.x,B.a([u,A.dx,t],x.O),null,null).aA(0,new B.a5(0,0,n,m)))
d.aX(new B.a5(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=v.j(0.1).gp(0)
r.z=D.dv1
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aw(d){return!0}}
C.aey.prototype={
a6(d,e){return E.Rz(d,e,this.b,this.c)},
aw(d){return!0}}
C.aLr.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.btK.prototype={}
C.a8h.prototype={
B(d){var w=null
return B.c5(B.eD(w,w,w,!0,!0,D.afr,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.aou,w,w,w,new C.chI(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fMK,w,w,w,1,w,!0),D.afr,B.ct(B.a([D.egx,B.cC(new C.chJ())],x.p),w,D.bx0,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.Wn.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aEM(w,new B.as(A.at,$.aw()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEM.prototype={
a_(){this.a1()
this.p5()},
b4n(d){var w=this.d.length
return A.o.F(A.k.bm(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
pZ(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4n(v.f)
if(w!==v.x){v.x=w
C.q0("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eJD(v))
C.IX("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c8D(){if(this.d.length<2)return
this.m(new C.eJz(this))},
aZI(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eJy(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8C(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bv6(p,s.f,r),A.fH),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a8(r,40,B.au(B.d(n,r,r,r,r,r,r,D.flZ,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.ay6[A.o.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fld,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bk(t,t,t,t),r,r,A.n),r,r,r,A.fv,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eJB(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return C.oy(A.aT,A.hT,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new C.hn(o,r,r),B.B(B.a([B.E(B.aM(r,A.V,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bs(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eJC(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dd,!0,A.a5,r,A.ao,r,r,r,r),1),A.ab,new C.j6(A.hC,"Add",s.gc8z(s),A.c,r),A.bn,new C.j6(A.p0,"Spin",q,A.bo,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bv6.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=B.K()
w.r=D.bd0.gp(0)
a1.ae(d,f,w)
w=B.K()
w.b=A.ac
w.c=3
w.r=A.aT.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bW(d,a0)
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.r=D.ay6[A.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bQ(o),n,s,!0,m])
m.delete()
o=B.bW(d,a0)
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.b=A.ac
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[B.bQ(o),n,s,!0,m])
m.delete()
J.bq(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new B.l3(new B.eS(o,i,i,A.d_,i,i,i,i,i,i,D.f8W),A.a5,A.c8,new B.kK(1),i,i,i,i,A.c6,i)
k.eT()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new B.t(a0-n-16,-o.gbd(o)/2))
f.restore()}f=B.K()
f.r=D.af5.gp(0)
a1.ae(d,20,f)
f=B.K()
f.b=A.ac
f.c=3
f.r=A.aT.gp(0)
a1.ae(d,20,f)
j=new B.aJ(h.r,A.ak,i,i,B.a([],x.v))
e-=a0
j.D(new B.b1(g,e+26))
e-=10
j.D(new B.ap(g-14,e))
j.D(new B.ap(g+14,e))
j.D(new B.bv())
e=B.K()
e.r=A.c.gp(0)
a1.aJ(j,e)
e=B.K()
e.b=A.ac
e.c=2
e.r=A.aW.gp(0)
a1.aJ(j,e)},
aw(d){return!0}}
C.Vd.prototype={
U(){return new C.bjq($,A.bE,0,B.a([],x.X),null,null)}}
C.bjq.prototype={
a_(){this.a1()
this.p5()},
pZ(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.IX("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5c(900,new C.dVK())}w.m(new C.dVL())},
aZK(d){return this.m(new C.dVF(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aZ(A.o.u(A.o.F(A.k.dk(m),60)),2,"0")
m=B.b4(n,n,n,new C.bpW(l,A.cs,n),A.aPr)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fdq,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a8(280,280,new B.an(A.A,n,A.aa,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fct,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.v1,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.ddf[r]
u.push(new C.f4(""+q+" min",o.d===q,new C.dVH(o,q),n,A.cs,n))}m=o.f
p=m?A0.yG:A.iu
m=m?"Pause":"Start"
return C.oy(A.cs,A.hT,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new C.hn(u,n,n),new C.hn(B.a([new C.j6(p,m,new C.dVI(o),A.bo,n),new C.j6(A.oa,"Reset",new C.dVJ(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.bpW.prototype={
a6(d,e){var w,v,u,t,s=e.eh(A.J),r=e.a/2-14
$.W()
w=B.K()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=B.bW(s,r)
v=B.K()
v.b=A.ac
v.c=16
v.d=A.bH
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sar(new B.fW(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bW(s,r)))
d.e0(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aw(d){return d.b!==this.b}}
C.Ur.prototype={
U(){return new C.bj3($,A.bE,0,B.a([],x.X),null,null)}}
C.bj3.prototype={
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.RB.h(0,p.d)
w.toString
v=A.d.f9(w,new C.dH8())
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
C.q0("flute",D.c2Z[t]+5,1400,0.35)}p.m(new C.dH9())},
gc8G(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kf("Press Start",0.5)
w=D.RB.h(0,this.d)
w.toString
v=A.d.f9(w,new C.dH3())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kf("Breathe in",0.5+0.5*A.dA.av(0,p))
case 1:return new B.Kf("Hold",1)
case 2:return new B.Kf("Breathe out",1-0.5*A.dA.av(0,p))
default:return new B.Kf("Hold",0.5)}}}return new B.Kf("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8G(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iI.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iI.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.t2,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kP,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a8(300,340,new B.an(A.A,q,A.aa,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.RB.ges(D.RB));w.C();){v=w.gT(w)
o.push(new C.f4(v,r.d===v,new C.dH6(r,v),q,A.iI,q))}w=r.e
v=w?A.GK:A.iu
w=w?"Stop":"Start"
o.push(new C.j6(v,w,new C.dH7(r),A.bo,q))
return C.oy(A.iI,A.hT,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hn(o,q,q))}}
C.aIb.prototype={}
C.V4.prototype={
U(){return new C.bjj(new B.cy(null,x.z),B.a([],x.au),A.av,A.c)}}
C.bjj.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,D.qh,s,s,s,new C.dSP(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.eG(B.aB(s,B.b4(s,s,s,new C.blg(t.e,t.x,s),A.fH),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dSQ(t),new C.dSR(t),s,s,s,s,s,s,s,s,s,new C.dSS(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cUP[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.Fj(v,u,new C.dST(t,v),!1,s))}u=t.r
return C.oy(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new C.hn(o,s,s),C.lQ(A.bD,""+A.k.V(u),"Brush",30,2,new C.dSU(t),u),new C.hn(B.a([new C.f4("Eraser",t.w,new C.dSV(t),A.Gk,A.bD,s),new C.j6(A.rn,"Undo",new C.dSW(t),A.c,s),new C.j6(A.ec,"Clear",new C.dSX(t),A.c,s),new C.j6(A.O5,"Paper",new C.dSY(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.blg.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=B.K()
w.r=this.c.gp(0)
d.aX(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bH
p.e=A.dS
p.b=A.ac
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aJ(q.r,A.ak,null,null,o)
o.push(new B.b1(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.ca(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bA(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bA(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new B.cv(k.gbB().a.snapshot()):q).a,l)
l.delete()}}},
aw(d){return!0}}
C.VN.prototype={
U(){var w=x.S
return new C.aE7(B.aY(w),B.aY(w))}}
C.aE7.prototype={
a_(){this.a1()
this.axv()},
axv(){var w,v,u=this,t=x.N,s=B.bo(D.die,!0,t)
A.d.CR(s)
w=x.S
v=B.S(s).c
t=B.C(B.d1(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d1(s,0,B.dB(u.d,"count",w),v))
A.d.CR(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8B(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
C.q0("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eh8(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.nd,new C.eh9(s,v,u),t)
else{s.x=!0
B.bN(A8.FD,new C.eha(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Ud,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.y6,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ae,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.ix,A.j,0,q,q),q),B.E(B.ix(!0,q,q,A.y,new B.hP(v,8,8,1,q),new C.ehe(r),r.e.length,A.bj,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cWi[t]
o.push(new C.f4(s.b,r.d===s.a,new C.ehf(r,s),q,A.aR,q))}o.push(new C.j6(D.bKH,"New game",new C.ehg(r),A.bo,q))
return C.oy(A.aR,A.hT,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hn(o,q,q))}}
C.VX.prototype={
U(){return new C.aEq(B.a([],x.t))}}
C.aEq.prototype={
c8F(d){A.d.a8(this.d)
this.w=!0
this.aZJ()},
aZJ(){this.d.push(A.cW.au(4))
this.e=0
this.ZZ()},
ZZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.er3(t))
s=x.H
w=3
return B.b(B.bN(A.lX,null,s),$async$ZZ)
case 3:r=t.d,q=B.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSZ(n)
w=7
return B.b(B.bN(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$ZZ)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.er4(t))
case 1:return B.h(u,v)}})
return B.i($async$ZZ,v)},
aSZ(d){this.m(new C.er1(this,d))
C.q0("marimba",D.c2Y[d]+5,450,0.55)
B.bN(A.FB,new C.er2(this),x.H)},
c8H(d){var w,v,u=this
if(!u.w||u.r)return
u.aSZ(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.er5(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.er6(u))
B.bN(A.iq,new C.er7(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,L.aRU,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fml,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ax_[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.ax_[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.db(p,p,p,p,A.b8,new B.o(u,p,new B.bJ(r,r,r,r),new B.bk(t,t,t,t),s,p,A.n),A.jt,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.er8(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.au(new B.D(A.a9,B.x(B.a([o,A.am,n,A.d5,new B.fK(1,B.kG(1,l,2,12,12,p,A.dP,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.oy(A.bI,A.hT,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hn(B.a([new C.j6(A.iu,n,q.gc8E(q),A.bo,p)],m),p,p))}}
C.Wg.prototype={
U(){return new C.bku(new B.as(A.at,$.aw()))}}
C.bku.prototype={
avV(d){return B.oO(A.k.ac(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eEV(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d6(B.aN(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eF3()
l=B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A7.xd),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b_K),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lG,"Bill amount",!0,!0,!1,m,m,m,m,D.fjQ,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dZ,m,m,m,1,m,m,!1,"\u2022",m,new C.eF_(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQW,!0,A.a5,m,A.ao,m,m,m,m)
k=A.bo.j(0.1)
s=B.m(20)
r=B.I(A.bo.j(0.35),A.r,1)
q=x.p
s=B.ct(B.a([l,A.bv,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avV(w)),t.$2("Total","$"+n.avV(v)),U.Mq,t.$3$big("Each of "+n.f+" pays","$"+n.avV(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,A.fb,m,m,A.ag,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cGY[p]
r.push(new C.f4(""+o+"%",A.k.V(n.e)===o,new C.eF0(n,o),m,A.bo,m))}l=n.f
return C.oy(A.bo,A.hT,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new C.hn(r,"TIP",m),C.lQ(A.aR,""+l,"People",20,1,new C.eF1(n),l),new C.hn(B.a([new C.f4("Round up",n.r,new C.eF2(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.VM.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bk_(w,A.cW,$,A.bE,0,B.a([],x.X),null,null)}}
C.bk_.prototype={
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bm(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t
C.a8g("snare",0.5)}u.m(new C.egd())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
C.q0("bell",24,400,0.5)}u.m(new C.ege())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bd8(v,o.r>0,n))}u=B.aB(n,B.au(B.bX(A.fW,m,A.bs,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eg6(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.I(A.d8,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.au(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fj3,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.enq,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eg7(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aB(n,B.au(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.f8q,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kP,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eg8(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.daF[r]
v.push(new C.f4(q.b,o.d===q.a,new C.eg9(o,q),q.c,A.by,n))}v=B.a([new C.hn(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lQ(A.by,""+s,"Dice",4,1,new C.ega(o),s))}if(o.d==="num"){s=o.z
s=C.lQ(A.by,""+s,"From",100,1,new C.egb(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lQ(A.by,""+p,"To",1000,2,new C.egc(o),p)],m))}return C.oy(A.by,A.hT,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.P,0,A.p))}}
C.bd8.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.aj()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,14)],x.V)
t=B.a([],x.p)
for(s=D.dtR.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,M.ac6,p,18,p,p,p,p,p,18),p))
return B.eH(A.A,w,B.p(p,new B.an(A.a_,p,A.aa,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
C.aLf.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwO.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvg()}}
C.aLw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwS.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvy()}}
C.aLY.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx_.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw0()}}
C.aMn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx7.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bwq()}}
C.b6K.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aF_.h(0,t)
$.arY=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aI(u,u,u,u,Q.nq,u,u,u,new C.cuB(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a1,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aI(u,u,u,u,B.X(A.O8,s,u,u,u,22),u,u,u,new C.cuC(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bA7,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.AZ,u,new B.bJ(new B.ay(A.c.j(0.08),1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.FG,u,u,1/0))
return B.c5(u,A.bZ,B.bm(!0,B.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
C.f4.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.I(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aQ,s,s,s,16),A.ej],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ae,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tS,B.aB(s,B.db(s,B.B(v,A.m,s,A.e,A.P,0,s,s),s,s,A.b8,new B.o(p,s,o,r,s,s,A.n),A.eM,s,s,s,A.hb,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cux(t),s,s,s,s,s,s,!1,A.a4),s)}}
C.hn.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a8(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.ce(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),1))
return new B.D(A.cu,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b6L.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.avr(d).cK0(r,A.bz,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aa3(B.l2(t,t,t,v,w,u.e,A.k.E(u.d,w,v)),r),1)
return new B.a8(t,34,B.B(B.a([new B.a8(78,t,s,t),r,new B.a8(38,t,B.d(u.x,t,t,t,t,t,t,A.Jr,A.dT,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.j6.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tS,B.aF(!1,A.a2,!0,B.m(12),B.aL(!1,B.m(12),!0,new B.D(Ae.aim,B.B(B.a([B.X(w.c,u,v,v,v,17),A.ej,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cuw(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
C.Fj.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f6M:u
w=t?A.c:A.aZ
w=B.I(w,A.r,t?2.5:1)
return B.aB(u,B.db(u,u,u,u,A.b8,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hm,u,r,D.ai8,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cuD(v),u,u,u,u,u,u,!1,A.a4)}}
C.qK.prototype={
a5c(d,e){var w=B.dj()
w.seM(B.cM(B.dE(0,0,0,d,0,0),new C.cuy(this,w,e)))
this.iI$.push(w.bj())},
p5(){var w=this,v=w.un(new C.cuA(w))
v.hE(0)
w.iH$!==$&&B.aP()
w.iH$=v}}
C.ab2.prototype={
byC(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.M)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gT(0)
n=J.a4(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&B.aP()
g.z=s
g.Q!==$&&B.aP()
g.Q=t
g.as!==$&&B.aP()
g.as=r
g.at!==$&&B.aP()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,B.M)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bBR()
g.ay!==$&&B.aP()
g.ay=w},
bBR(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
k===$&&B.c()
w=!0
if(!(e<k)){k=l.Q
k===$&&B.c()
if(!(e>k)){k=l.as
k===$&&B.c()
if(!(f<k)){k=l.at
k===$&&B.c()
k=f>k}else k=w}else k=w}else k=w
if(k)return!1
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.M)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.ab3.prototype={
cFU(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(r.FF(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.v7.prototype={}
C.Pf.prototype={}
C.y9.prototype={}
C.Pe.prototype={
fs(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c2J[w.au(7)]
w=w.he()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.q0(u,v+w-12,2200,0.1)}}
C.Vj.prototype={
U(){var w=$.aw()
return new C.aDv(new B.cy(null,x.z),new B.as(A.at,w),new C.Pe(A.cW),D.dcH,A.az,D.a3M,$,A.bE,0,B.a([],x.X),null,null)}}
C.aDv.prototype={
a_(){var w,v=this
v.a1()
v.p5()
v.a.toString
w=$.hfl
if(w==null)w=$.hfl=C.cxc()
w.bL(new C.dYg(v),x.a)},
t(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bvF()},
cts(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n)q.push(new C.dXJ(p[n]).$0())
w.push(q)}this.w=w},
gWb(){var w=this.fy
return w.A(0,A.az)?100:Math.min(w.a,w.b)*0.43},
atz(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
axE(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.atz(d.x,d.w,105/Math.max(w,3))
B.f_()
C.q0("bell",(A.d.cD(D.a3o,d.c)+1)*3+12,900,0.45)
E.dX(300,"",280,1.4,0.15,"tri")},
pZ(d){var w,v,u,t,s,r,q,p=this
p.f.fs(0,d,p.db)
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
p.x=A.k.E(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c9l(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.az))return null
w=n.fy
v=n.gWb()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWb()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFU((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9k(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dXH(w))
return}w.m(new C.dXI(w,v,A.a.i(d).toLowerCase()))},
bOU(){var w=null,v=this.c
v.toString
B.cf(w,w,!0,w,new C.dXF(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aI(n,n,n,n,D.bNi,n,n,n,o.gbOT(),n,n,n,n,"Earth facts",n),B.aI(n,n,n,n,D.qh,n,n,n,new C.dY1(o,d),n,n,n,n,"Share",n)],l),j=B.cC(new C.dY2(o,m)),i=A.c.j(0.06)
i=B.a([B.aM(n,A.V,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,B.bs(n,new B.b5(4,B.m(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.DQ,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bVu,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc9j(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.jh,!0,A.a5,n,A.ao,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
w.push(new C.f4(s.a,!1,new C.dY3(o,s),A.mD,A.aR,n))}i.push(new B.D(A.i9,new B.a8(n,38,B.ct(w,n,n,n,n,A.aM,!1),n),n))}i.push(A.am)
w=B.a([new C.f4("Whole Earth",!1,new C.dY7(o),A.hp,A.aR,n)],l)
for(v=D.aEZ.gdR(D.aEZ),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new C.f4(u.a,!1,new C.dY8(o,u),n,A.aR,n))}w.push(new C.f4("Random",!1,new C.dY9(o),A.p0,A.aR,n))
i.push(new C.hn(w,"GO TO",n))
w=o.z
i.push(C.lQ(A.aR,A.k.ac(w,1)+"x","Zoom",16,0.8,new C.dYa(o),w))
w=o.dy
i.push(C.lQ(A.bI,A.a.aZ(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new C.dYb(o),w))
w=o.fr
i.push(C.lQ(A.bo,o.csb(),"Season",365,0,new C.dYc(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.m0:D.GB
i.push(new C.hn(B.a([new C.f4("Spin",w,new C.dYd(o),D.bIB,A.aR,n),new C.f4("Night",v,new C.dYe(o),A.w0,A.aR,n),new C.f4("Borders",u,new C.dY4(o),D.bIF,A.aR,n),new C.f4("Names",r,new C.dY5(o),U.C1,A.aR,n),new C.f4("Music",q,new C.dY6(o),p,A.aR,n)],l),n,n))
return C.oy(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.x(i,A.m,n,A.e,A.P,0,A.p))},
csb(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axD[u])v=u
return A.iv[v]+" "+(A.k.bm(w-D.axD[v])+1)},
c9i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new N.vM(1,A.o.F((A.d.cD(D.a3o,t)+1)*47,360),0.55,1).m_()
r=new C.dXD()
q=B.m(20)
p=B.I(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,B.E(B.d(d.a,j,1,A.a1,j,j,j,A.df,j,j,j),1),B.aI(j,j,j,j,A.GV,j,j,j,new C.dXC(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hg,j,j,j)
m=D.dsu.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ab,r.$2("PEOPLE",l?C.fuK(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.GV(i)+" km\xb2")
if(l)m=(w<10?A.k.ac(w,1):C.GV(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ac(u,3):A.k.ac(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.x(B.a([n,t,A.N,v,A.N,m,A.N,B.B(B.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+C.fuK(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.E,j,A.e,A.P,0,A.p),A.f,j,j,new B.o(D.WG,j,p,q,j,j,A.n),j,j,j,j,D.aiF,j,j,j)}}
C.bfm.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=B.K()
d7.r=D.AV.gp(0)
d8.aX(new B.a5(0,0,0+d4,0+d5),d7)
w=new B.en()
w.df(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.t(d4,d5)
o=d2.f
u=B.K()
t=x.O
u.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.aR.j(0.35),A.K],t),D.cXS,d3).aA(0,B.bW(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=B.bW(p,o)
u=B.K()
u.sar(D.enu.aA(0,n))
d8.ae(p,o,u)
J.bq(d7.save())
u=x.v
d6=new B.aJ(d6.r,A.ak,d3,d3,B.a([],u))
d6.D(new B.jy(n))
d8.mB(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.K()
g.b=A.ac
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.dfh(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aJ(a2.r,A.ak,d3,d3,a3)
a3.push(new B.b1(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cv(d.gbB().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aJ(a2.r,A.ak,d3,d3,a3)
a3.push(new B.b1(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cv(d.gbB().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cD(D.a3o,a7.c)+1)*47,360)
$.W()
b0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3=a8?0.35:0.5
b0.r=new N.vM(1,a9,a3,a8?1:0.62).m_().gp(0)
b1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b1.b=A.ac
b1.c=a8?2.2:m
b1.e=A.dS
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.M)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=B.a([],u)
b8=new B.aJ(b6.r,A.ak,d3,d3,b7)
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
if(v===0){b6=new B.b1(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bv()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bA(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cv(b8.gbB().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cv(b8.gbB().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.M)(a5),++b3){d=a5[b3]
$.W()
s=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
s.b=A.ac
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uz
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,B.M)(d6),++b3){a7=d6[b3]
a8=a7===a2
if(!a8)if(r){a3=a7.ax
a3===$&&B.c()
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
c9=C.hOA(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a6(d8,new B.t(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.W()
u=B.K()
u.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.baC.j(0.78)],t),D.dd4,d3).aA(0,B.bW(new B.t(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=B.K()
d4.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dq1,d3).aA(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=B.K()
d7.b=A.ac
d7.c=1.4
d7.r=A.hl.j(0.5).gp(0)
d8.ae(p,o,d7)},
aw(d){return!0}}
C.aLB.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aLC.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvE()}}
C.btF.prototype={}
C.Wj.prototype={
U(){return new C.bky()}}
C.bky.prototype={
gaSy(){var w=this.d
if(w===$)w=this.d=A.cW.au(16)
return w},
B(d){var w=null,v=B.eD(w,w,w,!0,!0,D.AV,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.aou,w,w,w,new C.eFO(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fGk,w,w,w,1,w,!0),u=B.m(18),t=A.aR.j(0.1),s=B.I(A.aR.j(0.35),A.r,1),r=x.p
return B.c5(v,D.AV,B.ct(B.a([B.p(w,B.B(B.a([D.bM_,A.as,B.E(B.d(D.d0O[this.gaSy()],w,w,w,w,w,w,D.fni,w,w,w),1),B.aI(w,w,w,w,D.bWu,w,w,w,new C.eFP(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,B.cC(new C.eFQ())],r),w,A.Zq,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.W5.prototype={
U(){return C.hP1()}}
C.bkl.prototype={
cjU(d){var w=d.c,v=C.hP3(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.t(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u,t=this
t.e.fs(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjU(w)
u=new B.t(-v.a,-v.b).aI(0,t.w)
v=B.kt(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9m(){var w=this.ch
return new B.t(w.a/2,w.b/2).aa(0,this.x)},
c9q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.CJ[s]
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
b_4(d){this.m(new C.eyh(this,d))
B.f_()
C.q0("bell",D.dqe[A.o.F(A.d.cD(D.CJ,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aI(m,m,m,m,D.qh,m,m,m,new C.eys(n,d),m,m,m,m,"Share",m)],k),i=B.cC(new C.eyt(n,l)),h=B.a([new C.f4("All",!1,new C.eyu(n),A.a1q,A.aT,m)],k)
for(w=0;w<10;++w){v=D.CJ[w]
h.push(new C.f4(v.a,n.z===v,new C.eyv(n,v),m,B.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ac(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lQ(A.aT,s,"Time",1,0,new C.eyw(n),u/t)
u=n.w
u=C.lQ(A.aT,A.k.ac(u,1)+"x","Zoom",9,0.5,new C.eyx(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.m0:D.GB
return C.oy(A.aT,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.x(B.a([new C.hn(h,"GO TO",m),t,u,new C.hn(B.a([new C.f4("Orbits",s,new C.eyy(n),m,A.aT,m),new C.f4("Names",r,new C.eyz(n),m,A.aT,m),new C.f4("Asteroids",q,new C.eyA(n),m,A.aT,m),new C.f4("Music",p,new C.eyB(n),o,A.aT,m)],k),m,m)],k),A.m,m,A.e,A.P,0,A.p))},
c9n(d){var w,v,u,t,s,r=null,q=B.b0(d.z),p=d.c,o=p*8.317,n=new C.eyf(),m=B.m(20),l=B.I(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ab,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.jZ,r,r,r),1),B.aI(r,r,r,r,A.GV,r,r,r,new C.eye(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.DR,r,r,r)
v=n.$2("WIDTH",C.GV(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":B.w(p)+" AU ("+C.GV(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.eyg().$1(v))
t=d.f
v=B.B(B.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ac(t/24,0)+" Earth days":A.k.ac(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.w(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ac(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ac(o,1)+" minutes":A.k.ac(o/60,1)+" hours"
return B.p(r,B.x(B.a([j,A.au,k,A.N,p,A.N,v,A.N,s,A.N,B.B(B.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.E,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(D.WG,r,l,m,r,r,A.n),r,r,r,r,D.aiF,r,r,r)}}
C.brI.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.K()
w.r=D.AV.gp(0)
a7.aX(new B.a5(0,0,0+a5,0+a6),w)
v=new B.en()
v.df(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9m()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.CJ),t=new B.f5(a6,new C.f_d()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
m.b=A.ac
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
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hP2(A.d.gI(D.CJ))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.K()
s=x.O
t.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.aT.j(0.5),A.K],s),a4,a4).aA(0,B.bW(o,a6)))
a7.ae(o,a6,t)
t=B.K()
t.sar(D.eno.aA(0,B.bW(o,i)))
a7.ae(o,i,t)
if(a5.at){h=C.hgY("Sun",10.5,A.ae)
h.a6(a7,o.aa(0,new B.t(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.CJ),t=new B.f5(a6,new C.f_e()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b0(l.z)
d=l.a
if(d==="Saturn"){J.bq(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.bP(A.J,j*1.3,j*4.2)
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.b=A.ac
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(B.bQ(a0),p)
p.delete()
w.restore()}a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a0.r=e.j(0.3).gp(0)
a0.z=A.uz
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sar(new B.c0(V.x9,0.5,A.x,a4,0,B.a([A.c,e,a1],s),K.a30,a4).aA(0,B.bW(new B.t(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.b=A.ac
l.c=2
l.r=A.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d6c[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3.r=A.ae.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hgY(d,10.5,A.ae)
h.a6(a7,new B.t(g+-h.b.c/2,f+(j+4)))}}},
aw(d){return!0}}
C.Vk.prototype={
U(){var w=x.i
return new C.aDw(new C.Pe(A.cW),B.c4(5,0,!1,w),B.c4(5,0,!1,w),B.c4(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bE,0,B.a([],x.X),null,null)}}
C.aDw.prototype={
cwK(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9p(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.eb4
s.cy=new B.t(s.ay,0)
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
E.dX(150,"",400,0,0.5,"noise")
E.dX(90,"",300,1.5,0.6,"sine")
s.m(new C.dYk())},
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fs(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.z9[r]
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
if(q.a!=="Sun")E.dX(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d8(s,new C.dYN()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new B.t(k,s)
k=p+k*w
s=t+s*w
i.cx=new B.t(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new B.t(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dX(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aF(0,i.cx).gcH()>120)v.push(i.cx)
if(v.length>700)A.d.cG(v,0)
if(i.cx.gcH()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bN_()
else n=n==="weight"?p.cE4():p.bF8()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.dnb[u]
v.push(new C.f4(t.b,p.d===t.a,new C.dYz(p,t),t.c,A.cY,o))}v=B.a([new C.hn(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.f4("Hammer",!s,new C.dYA(p),Ad.Gw,A.cY,o),new C.f4("Feather",s,new C.dYB(p),U.NQ,A.cY,o),new C.f4(q,r,new C.dYF(p),A.Gl,A.aR,o)],w)
q=p.w
A.d.v(v,B.a([new C.hn(r,o,o),C.lQ(A.cY,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.dYG(p),q),new C.hn(B.a([new C.j6(A.u6,"Drop!",new C.dYH(p),A.bo,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lQ(A.cY,""+A.k.V(s)+" kg","Your weight",120,20,new C.dYI(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lQ(A.cY,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.dYJ(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lQ(A.cY,A.k.ac(s,1)+" km/s","Speed",13,0,new C.dYK(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lQ(A.cY,A.k.ac(r,1)+"x out","View",8,0.5,new C.dYL(p),r),new C.hn(B.a([new C.j6(A.od,"Fire!",p.gc9o(),A.bo,o),new C.j6(A.u6,"Falls",new C.dYM(p),A.c,o),new C.j6(A.rg,"Orbit 7.7",new C.dYC(p),A.c,o),new C.j6(D.bLp,"Oval 9",new C.dYD(p),A.c,o),new C.j6(A.C4,"Escape",new C.dYE(p),A.c,o)],w),o,o)],w))}return C.oy(A.cY,A.hT,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.x(v,A.m,o,A.e,A.P,0,A.p))},
bN_(){return new B.D(D.bv_,B.cC(new C.dYj(this)),null)},
cE4(){var w,v,u,t=null,s=[D.eNw,D.eOZ,D.eP5,D.ePo,D.eP3,D.ePv,D.eO5,D.ePR,D.eOK],r=x.p,q=B.a([D.fu0,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=B.b0(v.c)
q.push(new B.D(A.cu,new B.cb(A.aM,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a8(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bA(1,A.bd,new B.Bu(new C.dYl(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fwq)
return B.ct(q,t,A.iP,t,t,A.ag,!1)},
bF8(){return B.cC(new C.dYh(this))}}
C.baA.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=B.K()
e.r=D.AV.gp(0)
d.aX(new B.a5(0,0,0+h,0+g),e)
w=new B.en()
w.df(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.K()
e.sar(new B.c0(A.A,0.5,A.x,i,0,B.a([A.K,A.aR.j(0.35),A.K],x.O),D.ddZ,i).aA(0,B.bW(g,p*1.1)))
d.ae(g,p*1.06,e)
e=B.K()
e.sar(D.eni.aA(0,B.bW(g,p)))
d.ae(g,p,e)
o=g.aa(0,new B.t(0,-p))
f=f.r
e=x.v
n=new B.aJ(f,A.ak,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.b1(u-16,s))
n.D(new B.ap(u,t-400*h-4))
n.D(new B.ap(u+16,s))
n.D(new B.bv())
s=B.K()
s.r=A.al.gp(0)
d.aJ(n,s)
s=o.aa(0,new B.t(0,-400*h-6))
u=B.K()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aJ(f,A.ak,i,i,e)
f=g.a
t=g.b
m.D(new B.b1(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=B.d1(u,1,i,B.S(u).c),s=u.$ti,u=new B.bS(u,u.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bA(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=B.K()
f.b=A.ac
f.c=2.4
f.d=A.bH
f.r=A.cY.j(0.9).gp(0)
d.aJ(m,f)}if(j.f){f=j.d
k=g.aa(0,new B.t(f.a*h,f.b*h))
h=B.K()
h.r=A.cY.j(0.4).gp(0)
h.z=H.pf
d.ae(k,7,h)
h=B.K()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
aw(d){return!0}}
C.VY.prototype={
U(){return new C.bki(new B.cy(null,x.z),$,A.bE,0,B.a([],x.X),null,null)}}
C.bki.prototype={
a_(){this.a1()
this.p5()},
pZ(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qs[l.e],i=D.Qs[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aI(k,k,k,k,D.qh,k,k,k,new C.erb(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.brg(f,g,v,k),A.fH),1)
r=g.a
q=v<10?A.k.ac(v,1):C.GV(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hI,A.L,k,k)
o=C.GV(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.x(B.a([s,B.p(k,B.x(B.a([q,A.au,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,R.v2,A.L,k,k),A.bA,B.d(p+": "+C.GV(w*2)+" km wide. "+r+": "+C.GV(h*2)+" km wide.",k,k,k,k,k,k,R.DM,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bxb,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.Qs[m]
r.push(new C.f4(w.a,l.e===m,new C.erc(l,m),k,B.b0(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.Qs[m]
w.push(new C.f4(s.a,l.f===m,new C.erd(l,m),k,B.b0(s.c),k))}return C.oy(A.c7,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eG(h,l.d),"SIZE COMPARE",B.x(B.a([new C.hn(r,"FIRST",k),new C.hn(w,"SECOND",k)],u),A.m,k,A.e,A.P,0,A.p))}}
C.brg.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=B.K()
w.r=D.bh4.gp(0)
d.aX(new B.a5(0,0,0+h,0+g),w)
v=new B.en()
v.df(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.t(h,g)
w=new C.eYm(d)
t=this.c
w.$3(m,o,B.b0(t.c))
s=o-n
l=new B.t(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b0(s.c))
w=B.K()
w.b=A.ac
w.c=1.4
w.r=A.ae.gp(0)
d.ae(l,n+3,w)
k=B.fX(i,i,i,i,B.cZ(i,i,i,i,i,i,i,i,i,D.ffj,s.a),A.a5,A.c8,i,A.dQ,A.c6)
k.eT()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a6(d,l.aa(0,new B.t(-w/2,h)))
j=B.fX(i,i,i,i,B.cZ(i,i,i,i,i,i,i,i,i,D.fiD,t.a),A.a5,A.c8,i,A.dQ,A.c6)
j.eT()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.aa(0,new B.t(-h/2,-t.gbd(t)/2)))},
aw(d){return!0}}
C.aLD.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwU.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvG()}}
C.aM6.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx2.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw9()}}
C.aM9.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx4.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bwc()}}
C.PJ.prototype={}
C.Up.prototype={
U(){return C.hP_()}}
C.bj2.prototype={
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fs(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bt(w,new C.dGA())},
b_5(d){var w,v,u,t=this.Q
if(t.A(0,A.az))return
w=this.gb84()
v=d.aF(0,new B.t(t.a/2,t.b*0.42))
u=A.k.E(v.gcH()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.PJ(t,u,1.2,new B.vL(1,30+A.cW.aj()*40,0.9,0.7).m_()))
C.q0("bell",60+A.k.V(12-u)*2,400,0.35)},
gb84(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.N(m,new C.dGo(),B.S(m).k("N<1,L>")).f9(0,A.vn),1.0001,99))
m=x.p
w=B.a([B.aI(n,n,n,n,D.qh,n,n,n,new C.dGp(o,d),n,n,n,n,"Share",n)],m)
v=B.cC(new C.dGq(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ac(s,0)+" Suns":C.fuK(s)+" Suns"
t=C.lQ(A.by,s,"Mass",1,0,new C.dGs(o),u/t)
u=B.a([new C.f4("Star (10)",!1,new C.dGt(o),n,A.by,n),new C.f4("Cygnus X-1 (21)",!1,new C.dGu(o),n,A.by,n),new C.f4("Milky Way core (4 million)",!1,new C.dGv(o),n,A.by,n),new C.f4("M87 (6.5 billion)",!1,new C.dGw(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.m0:D.GB
return C.oy(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.x(B.a([t,new C.hn(u,"LIKE",n),new C.hn(B.a([new C.f4("Glowing ring",s,new C.dGx(o),n,A.by,n),new C.f4("Bent light",r,new C.dGy(o),n,A.by,n),new C.f4("Music",q,new C.dGz(o),p,A.by,n),new C.j6(A.oa,"Clear",new C.dGr(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.P,0,A.p))},
aeQ(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.fb2,w,w,w),A.bA,B.d(e,w,2,w,w,w,w,I.A_,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b9Z.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=B.K()
w.r=D.bjt.gp(0)
b2.aX(new B.a5(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.t(w,v)
t=this.b
s=t.gb84()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.M)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.t(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.t(w+k/h*g,v+j/h*g)}}k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.K()
b0.b=A.ac
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=Q.RH
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.vu,A.ft,d)
n.toString
k=Math.cos(a4)
$.W()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=B.K()
b1.sar(new B.c0(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cSM,null).aA(0,B.bW(u,b0)))
b2.ae(u,b0,b1)
b1=B.K()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=B.K()
b1.b=A.ac
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.M)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.c=4.2/Math.sqrt(a8)
n.d=A.bH
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=k.j(0.2).gp(0)
o.z=H.pf
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aw(d){return!0}}
C.aeL.prototype={}
C.Vh.prototype={
U(){var w=x.r,v=x.g
return new C.bjt(new B.cy(null,x.z),new C.Pe(A.cW),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bE,0,B.a([],x.X),null,null)}}
C.bjt.prototype={
a_(){this.a1()
this.a_b()
this.p5()},
a_b(){var w,v,u,t,s,r,q,p,o=this,n=new B.en()
n.df(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new C.aeL(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.au(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new C.aeL(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwA(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.ed7
k.cx=D.eda
w=new B.en()
w.df(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.aeL(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new B.t(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new B.t(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=B.a([],u)
for(s=k.ay,r=x.S,s=B.d1(s,0,B.dB(900,"count",r),B.S(s).c),o=s.$ti,s=new B.bS(s,s.gL(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.t(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.d1(u,0,B.dB(900,"count",r),B.S(u).c),r=u.$ti,u=new B.bS(u,u.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.t(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dX(110,"",900,0.5,0.45,"sine")},
pZ(d){var w,v,u,t,s,r,q,p=this
p.e.fs(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcH())
r=t.eO(0,s).aI(0,0.9/(s*s))
w=p.fy.aa(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.aa(0,w.aI(0,u))
p.fx=w
v=p.CW.aa(0,v.aI(0,u))
p.CW=v
q=new C.dX3(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aI(r,r,r,r,D.qh,r,r,r,new C.dWU(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.bfd(s,r),A.az),n=A.w.j(0.5),m=B.m(14),l=B.I(A.bz,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Aa.a8s,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bU,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.d9r[v]
o=s.Q===u.a&&!s.ch
l.push(new C.f4(u.b,o,new C.dWV(s,u),r,A.h8,r))}l.push(new C.f4("Collide",s.ch,new C.dWW(s),A.yw,A.c7,r))
o=B.a([new C.hn(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lQ(A.h8,""+n,"Arms",6,2,new C.dWX(s),n)
l=s.r
A.d.v(o,B.a([n,C.lQ(A.h8,A.k.ac(l,1),"Winding",6,0.8,new C.dWY(s),l)],q))}n=s.as
o.push(C.lQ(A.h8,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dWZ(s),n))
n=s.ax
o.push(C.lQ(A.h8,A.k.ac(n,1)+"x","Speed",4,0,new C.dX_(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.m0:D.GB
o.push(new C.hn(B.a([new C.f4("Dark matter",n,new C.dX0(s),r,A.by,r),new C.f4("You are here",l,new C.dX1(s),r,A.aT,r),new C.f4("Music",w,new C.dX2(s),t,A.h8,r)],q),r,r))
return C.oy(A.h8,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eG(new B.an(A.a_,r,A.b2,A.t,m,r),s.d),"GALAXY",B.x(o,A.m,r,A.e,A.P,0,A.p))}}
C.bfd.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=B.K()
w.r=D.blF.gp(0)
a3.aX(new B.a5(0,0,0+a1,0+a2),w)
v=new B.en()
v.df(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.t(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.K()
t.sar(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.aC.j(0.32),A.aC.j(0.12),A.K],x.O),D.cgb,a0).aA(0,B.bW(o,a2)))
a3.ae(o,a2,t)}m=new C.dcp(a1.as)
a2=n*0.3
t=B.K()
t.sar(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.fZ.j(0.85),A.aE.j(0.3),A.K],x.O),a0,a0).aA(0,B.bW(o,a2)))
a3.ae(o,a2,t)
if(!a1.ch){l=B.K()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new N.vM(1,r,q>200?0.45:0.55,1).m_().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=B.K()
a2.b=A.ac
a2.c=1.6
a2.r=A.aT.gp(0)
a3.ae(g,9,a2)
f=B.fX(a0,a0,a0,a0,D.f80,A.a5,A.c8,a0,A.dQ,A.c6)
f.eT()
f.a6(a3,g.aa(0,new B.t(-f.b.c/2,12)))}}else{e=n*0.8
l=B.K()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bn_.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bho.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=B.K()
w.r=A.fZ.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.K()
w.r=A.i4.gp(0)
a3.ae(a1,5,w)}},
aw(d){return!0}}
C.VU.prototype={
U(){return new C.bkh(new B.cy(null,x.z),new C.Pe(A.cW),$,A.bE,0,B.a([],x.X),null,null)}}
C.bkh.prototype={
a_(){this.a1()
this.p5()},
pZ(d){var w,v,u,t=this
t.e.fs(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))C.q0("bell",60+u*4,500,0.35)
t.as=u}},
gcsa(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gciu(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aI(q,q,q,q,D.qh,q,q,q,new C.eqq(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.eG(B.b4(q,q,q,new C.bqw(r,q),A.fH),r.d),1)
if(r.f==="seasons")w=r.gcsa()
else{w=r.gciu()
v=A.k.an(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.x(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A3.U9,A.L,q,q),A.f,q,q,q,q,q,q,q,L.aiO,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.yG:A.iu
t=r.Q
s=t?A.m0:D.GB
s=B.a([new C.hn(B.a([new C.f4("Seasons",n==="seasons",new C.eqr(r),A.Cg,A.bu,q),new C.f4("Moon phases",n==="moon",new C.eqs(r),A.w0,A.bu,q),new C.f4(u,!1,new C.eqt(r),v,A.bu,q),new C.f4("Music",t,new C.equ(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lQ(A.bu,D.d8K[A.o.F(A.k.bm(n*12),12)],"Month",1,0,new C.eqv(r),n)
v=r.z
A.d.v(s,B.a([n,C.lQ(A.bu,A.k.ac(v,1)+"\xb0","Tilt",90,0,new C.eqw(r),v)],p))}else{p=r.w
s.push(C.lQ(A.bu,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new C.eqx(r),p))}p=r.y
s.push(C.lQ(A.bu,A.k.ac(p,1)+"x","Speed",4,0.2,new C.eqy(r),p))
return C.oy(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.x(s,A.m,q,A.e,A.P,0,A.p))}}
C.bqw.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=B.K()
b8.r=D.AV.gp(0)
b9.aX(new B.a5(0,0,0+b5,0+b6),b8)
w=new B.en()
w.df(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.t(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.bP(p,n*2,o*2)
t=B.K()
t.b=A.ac
t.c=1
t.r=A.aZ.gp(0)
b9.e1(u,t)
t=B.K()
t.sar(D.enk.aA(0,B.bW(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.aa(0,new B.t(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eO(0,p.aF(0,l).gcH())
J.bq(b8.save())
b8.translate(l.a,l.b)
s=B.K()
s.r=D.bjp.gp(0)
b9.ae(A.J,k,s)
J.bq(b8.save())
b7=new B.aJ(b7.r,A.ak,b4,b4,B.a([],x.v))
b7.D(new B.jy(B.bW(A.J,k)))
b9.mB(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.K()
b6.sar(D.ent.aA(0,B.bW(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.t(s,b6)
b7=new B.t(-s,-b6).aI(0,k).aI(0,1.7)
b5=h.aI(0,k).aI(0,1.7)
t=B.K()
t.c=2
t.r=A.cs.gp(0)
b9.br(b7,b5,t)
t=h.aI(0,k).aI(0,1.7)
b5=B.K()
b5.r=A.cs.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.fX(b4,b4,b4,b4,B.cZ(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aSp,b5),A.a5,A.c8,b4,A.dQ,A.c6)
f.eT()
f.a6(b9,l.aa(0,new B.t(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.K()
r.b=A.ac
r.c=1
r.r=A.aZ.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a0.r=A.aT.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.K()
r.sar(new B.c0(new B.df(-0.5,0),1.1,A.x,b4,0,B.a([D.beD,D.agK],x.O),D.d_M,b4).aA(0,B.bW(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.aa(0,new B.t(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.K()
r.r=D.bbD.gp(0)
b9.ae(a1,a2,r)
J.bq(b8.save())
b7=b7.r
r=x.v
d=new B.aJ(b7,A.ak,b4,b4,B.a([],r))
d.D(new B.jy(B.bW(a1,a2)))
b9.mB(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.K()
a3.r=A.bO.gp(0)
b9.aX(new B.a5(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eO(0,a1.aF(0,p).gcH())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atK[a5]
a7=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.lC
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.t(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.K()
b6.r=D.bby.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bq(b8.save())
b6=new B.aJ(b7,A.ak,b4,b4,B.a([],r))
b6.D(new B.jy(B.bW(a8,a9)))
b9.mB(0,b6)
s=s.w
b1=new B.aJ(b7,A.ak,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.b1(u,b5))
b6=b2>0
b1.aCQ(new B.t(u,t+a9),b6,new B.aQ(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCQ(new B.t(u,b5),b6,new B.aQ(a9*Math.abs(1-2*b0),a9))
b6=B.K()
b6.r=A.bO.gp(0)
b9.aJ(b1,b6)
b8.restore()
b8=B.K()
b8.b=A.ac
b8.c=1
b8.r=A.aZ.gp(0)
b9.ae(a8,a9,b8)
b3=B.fX(b4,b4,b4,b4,D.f81,A.a5,A.c8,b4,A.dQ,A.c6)
b3.eT()
b3.a6(b9,a8.aa(0,new B.t(-b3.b.c/2,a9+6)))}},
aw(d){return!0}}
C.aLc.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwN.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvd()}}
C.aLz.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bwT.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvB()}}
C.aM5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx1.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw8()}}
var z=a.updateTypes(["R(tz)","~()","R(a4o)","R(Cr)","aA<~>()","H(tz,H)","L(L,tz)","R(Cn)","R(Ze)","R(abn)","R(v7)","R(a32)","R(ns)","Wj()","a8h()","VS()","W6()","VT()","Wh()","Uu()","aeQ(Y,H)","adH(Y,H)","H(Cn,Cn)","R(mI)","n(eb)","R(aeF)","R(a0t)","R(CB)","R(abR)","R(adL)","R(abB)","H(H,qR)","H(H,Cr)","n(qR)","~(qR,ai<n>,H)","qR?(Cr)","R(qR)","v(n,a0g)","R(Q0)","R(aah)","~(AE)","~(a7<@,@>)","~(x6,n,t,u,L)","~(n,tz)","V5()","L(PJ)","Nq(Y)","UP(Y,br<L>,br<L>)","Wn()","Vd()","Ur()","V4()","VN()","VX()","Wg()","VM()","~(n)","cr(ab3)","R(ab2)","Vj()","W5()","Vk()","Up()","Vh()","VY()","VU()","Uq()","R(PJ)","Vw(Y)"])
C.fx5.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fmD.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.ftQ.prototype={
$1(d){var w
if(!this.a.LL(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.ftR.prototype={
$1(d){return d.x},
$S:z+0}
C.fx2.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fx3.prototype={
$1(d){var w
if(!this.a.LL(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fx4.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.e9l.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.e9m.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.e9n.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.mb(v,A.e_,A.ip)}},
$S:9}
C.e9y.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.e9z.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.e9u.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.e9s.prototype={
$2(d,e){var w=this.a
w.r.push(B.cM(B.dE(0,0,0,d,0,0),new C.e9t(w,this.b,e)))},
$S:1857}
C.e9t.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.e9v.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWe().ajS(0,u[1],u[2],u[3])
u[4].bQ(0,new C.e9q(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.e9r(w.a,v,w.f,w.r))},
$S:0}
C.e9q.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:178}
C.e9r.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e9w.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWe().akB(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.e9p(w.a,v,w.e,w.f))},
$S:0}
C.e9p.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e9x.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.e9o(w,this.b))},
$S:0}
C.e9o.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.e9C.prototype={
$0(){var w=this.a
return w.m(new C.e9B(w))},
$S:0}
C.e9B.prototype={
$0(){return this.a.at=!0},
$S:0}
C.e9D.prototype={
$0(){var w=this.a
return w.m(new C.e9A(w))},
$S:0}
C.e9A.prototype={
$0(){return this.a.at=!1},
$S:0}
C.e9E.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.Pc()},
$S:0}
C.e9F.prototype={
$0(){return this.a.Ye(this.b)},
$S:0}
C.e9G.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pc():w.aVS()},
$S:2}
C.e9H.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pc():w.aVS()},
$S:0}
C.enB.prototype={
$2(d,e){return d+e},
$S:1858}
C.enV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.enU(w,d))},
$S:1859}
C.enU.prototype={
$0(){var w=B.aK(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.enW.prototype={
$0(){},
$S:0}
C.enX.prototype={
$0(){},
$S:0}
C.enD.prototype={
$0(){return this.a.m(new C.enC(this.b,this.c))},
$S:0}
C.enC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ens.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.ent.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.enu.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.env.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.enw.prototype={
$1(d){return this.a.db===d},
$S:34}
C.enx.prototype={
$1(d){return this.a.db=d},
$S:29}
C.eny.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:34}
C.enz.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.M(0,d)},
$S:29}
C.enA.prototype={
$0(){var w=this.a
return w.m(w.gaww())},
$S:0}
C.enq.prototype={
$1(d){return this.a.$1(!0)},
$S:77}
C.enr.prototype={
$1(d){return this.a.$1(!1)},
$S:118}
C.enp.prototype={
$1(d){return this.a.$1(!1)},
$S:173}
C.enO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.at(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bgU(o,p),n)
w=this.b
v=C.bzl("WORLD",w.a,w.c)
u=C.bzl("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bo
t=C.bzl("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CC[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.bzl("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bzl("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.ix,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bE4(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rs[w].a+".":"You landed on every world!"
v=B.a([new C.j6(A.ob,"Again",new C.enJ(o),A.c,p),new C.j6(A.p_,"Rebuild",new C.enK(o),A.aT,p)],q)
if(o.d+1<7)v.push(new C.j6(A.kE,"Next world",new C.enL(o),A.bo,p))
n.push(C.hkI("Perfect landing!",w,A.bo,v))}if(o.as==="crashed")n.push(C.hkI("Crash!",o.at,A.cs,B.a([new C.j6(A.ob,"Try again",new C.enM(o),A.bo,p),new C.j6(A.p_,"Rebuild",new C.enN(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b2,A.t,n,p)},
$S:71}
C.enJ.prototype={
$0(){var w=this.a
return w.m(w.gaww())},
$S:0}
C.enK.prototype={
$0(){var w=this.a
return w.m(new C.enG(w))},
$S:0}
C.enG.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.enL.prototype={
$0(){var w=this.a
return w.m(new C.enF(w))},
$S:0}
C.enF.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.enM.prototype={
$0(){var w=this.a
return w.m(w.gaww())},
$S:0}
C.enN.prototype={
$0(){var w=this.a
return w.m(new C.enE(w))},
$S:0}
C.enE.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.enP.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.enI(v,w))},
$S:0}
C.enI.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.enQ.prototype={
$1(d){return this.a.y=d},
$S:8}
C.enR.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.enS.prototype={
$1(d){return this.a.z=d},
$S:8}
C.enT.prototype={
$0(){var w=this.a
return w.m(new C.enH(w))},
$S:0}
C.enH.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dH1.prototype={
$0(){var w=0,v=B.j(x.a),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hg_
if(q==null)q=$.hg_=C.cHu()
w=3
return B.b(B.iP(B.a([q,$.r_().bga("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kI(0,B.cP(J.q(s,1)))
q.m(new C.dH0(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dH0.prototype={
$0(){return this.a.d=x.F.a(J.q(this.b,0))},
$S:0}
C.dGE.prototype={
$0(){return this.a.bVF(B.aU(J.q(this.b,"group")))},
$S:0}
C.dGF.prototype={
$1(d){return A.a.aZ(A.o.fW(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:313}
C.dH2.prototype={
$0(){return C.a8g("kick",0.25)},
$S:0}
C.dGG.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dGH.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dGI.prototype={
$0(){return C.a8g("kick",0.5)},
$S:0}
C.dGJ.prototype={
$0(){return E.dX(1300+this.a.R8.au(900),"",40,0,0.2,"square")},
$S:0}
C.dGL.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dGK(u)))u.cx=null
u.go=0},
$S:0}
C.dGK.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayf(d)},
$S:z+11}
C.dGB.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dGC.prototype={
$0(){var w=this.a
return w.m(w.gc58())},
$S:0}
C.dGD.prototype={
$0(){return this.a.ahu(null)},
$S:0}
C.dGS.prototype={
$0(){var w=this.a.as
return w==null?null:w.f3(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dGT.prototype={
$0(){return this.a.cAN(this.b.a)},
$S:0}
C.dGU.prototype={
$0(){return this.a.ahu(this.b)},
$S:0}
C.dGV.prototype={
$1(d){var w=this.a
return w.m(new C.dGR(w,d))},
$S:7}
C.dGR.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dGW.prototype={
$0(){var w=this.a
return w.m(new C.dGQ(w,this.b))},
$S:0}
C.dGQ.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dGX.prototype={
$0(){var w=this.a
return w.m(new C.dGP(w))},
$S:0}
C.dGP.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dGY.prototype={
$0(){var w=this.a
return w.m(new C.dGO(w))},
$S:0}
C.dGO.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f3(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.KH},
$S:0}
C.dGZ.prototype={
$0(){var w=this.a
return w.m(new C.dGN(w))},
$S:0}
C.dGN.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYv()
else w.p2=null},
$S:0}
C.dH_.prototype={
$0(){var w=this.a
return w.m(new C.dGM(w))},
$S:0}
C.dGM.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c2J.prototype={
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
$S:280}
C.c2K.prototype={
$1(d){var w=new B.rT([],[]).pH(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:481}
C.fgs.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:221}
C.fgt.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:221}
C.fgu.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:221}
C.fgB.prototype={
$1(d){return!J.q(d,0)},
$S:221}
C.fgC.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:221}
C.fgD.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:221}
C.dIH.prototype={
$1(d){return this.a.atc(0)},
$S:9}
C.dIl.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i1l(),B.S(w).k("N<1,H>")).fF(0)},
$S:0}
C.dIo.prototype={
$1(d){return""+d},
$S:80}
C.dII.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dIj.prototype={
$1(d){return this.a.atc(this.b)},
$S:9}
C.dIk.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ax0(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mx(0,d,a1.m2(0.15,0.3))
u=a1.mx(0,d,a1.m2(0.15,0.62))
t=a1.mx(0,"and",a1.m2(0.48,0.46))
s=a1.mx(0,a0,a1.m2(0.82,0.46))
a1=t.a
w.push(new C.ns(v.a,a1,0))
w.push(new C.ns(u.a,a1,1))
w.push(new C.ns(a1,s.a,0))
break
case 1:v=a1.mx(0,d,a1.m2(0.12,0.25))
u=a1.mx(0,d,a1.m2(0.12,0.65))
r=a1.mx(0,"xor",a1.m2(0.46,0.25))
q=a1.mx(0,"and",a1.m2(0.46,0.65))
p=a1.ax_(0,a0,a1.m2(0.82,0.25),0)
o=a1.ax_(0,a0,a1.m2(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.ns(a1,n,0))
m=u.a
w.push(new C.ns(m,n,1))
l=q.a
w.push(new C.ns(a1,l,0))
w.push(new C.ns(m,l,1))
w.push(new C.ns(n,p.a,0))
w.push(new C.ns(l,o.a,0))
break
case 2:k=a1.mx(0,"clock",a1.m2(0.15,0.4))
j=a1.mx(0,"not",a1.m2(0.45,0.65))
s=a1.mx(0,a0,a1.m2(0.82,0.3))
i=a1.mx(0,"buzzer",a1.m2(0.82,0.65))
a1=k.a
w.push(new C.ns(a1,s.a,0))
n=j.a
w.push(new C.ns(a1,n,0))
w.push(new C.ns(n,i.a,0))
break
default:h=a1.mx(0,d,a1.m2(0.12,0.25))
g=a1.mx(0,d,a1.m2(0.12,0.7))
f=a1.mx(0,"nor",a1.m2(0.5,0.25))
e=a1.mx(0,"nor",a1.m2(0.5,0.7))
s=a1.mx(0,a0,a1.m2(0.86,0.25))
a1=f.a
w.push(new C.ns(g.a,a1,0))
n=e.a
w.push(new C.ns(n,a1,1))
w.push(new C.ns(h.a,n,0))
w.push(new C.ns(a1,n,1))
w.push(new C.ns(a1,s.a,0))}},
$S:0}
C.dIp.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ax0(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cn(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mx(0,w.e,o.m2(0.86,0.5))},
$S:0}
C.dIe.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dIf.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+22}
C.dIg.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dIh.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dIi.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acS(this.c)
if(v.ax)C.IX("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dIq.prototype={
$0(){},
$S:0}
C.dIr.prototype={
$0(){return A.d.cG(this.a.e,this.b)},
$S:0}
C.dIs.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dIn.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dIm(v))
w.cy=null},
$S:0}
C.dIm.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dId.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mx(0,this.b,new B.t(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
C.dIB.prototype={
$0(){var w=this.a
return w.m(new C.dIA(w))},
$S:0}
C.dIA.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dIC.prototype={
$2(d,e){var w=null,v=this.a,u=new B.at(e.b,e.d)
v.x=u
return B.aB(A.cg,B.jz(B.b4(w,w,w,new C.bb1(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dIv(v),w,w,w,new C.dIw(v),new C.dIx(v),new C.dIy(v),w,w,w,w,w,w,w,w,w,w,new C.dIz(v),w,w,w,!1,A.a4)},
$S:37}
C.dIz.prototype={
$1(d){return this.a.c6U(d.b)},
$S:64}
C.dIx.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cfe(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axN(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dIy.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dIw.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZe(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dIt(w))
u=t.as
u.toString
v.push(new C.ns(u,w.a,w.b))
B.kp()}}t.z=t.as=null},
$S:43}
C.dIt.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dIv.prototype={
$1(d){return this.a.avO(d.b)},
$S:293}
C.dID.prototype={
$0(){return this.a.bzU(this.b.a)},
$S:0}
C.dIE.prototype={
$0(){return this.a.atc(this.b.a)},
$S:0}
C.dIF.prototype={
$0(){var w=this.a
return w.m(new C.dIu(w))},
$S:0}
C.dIu.prototype={
$0(){var w=this.a
w.ax0(0)
w.ay=null},
$S:0}
C.dIG.prototype={
$0(){return this.a.cwx(this.b)},
$S:0}
C.cOf.prototype={
$0(){var w=this,v=null,u=B.fX(v,v,v,v,B.cZ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.c8,v,A.dQ,A.c6)
u.eT()
return u},
$S:316}
C.dOx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOw.prototype={
$0(){return this.a.d=null},
$S:0}
C.dOz.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c01()},
$S:119}
C.dOy.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.fgT.prototype={
$0(){return D.e5K},
$S:z+13}
C.fgU.prototype={
$0(){return D.dF_},
$S:z+44}
C.fgV.prototype={
$0(){return D.dBW},
$S:z+66}
C.fgW.prototype={
$0(){return D.e59},
$S:z+14}
C.fgX.prototype={
$0(){return D.dO0},
$S:z+15}
C.fgY.prototype={
$0(){return D.e4S},
$S:z+16}
C.fgZ.prototype={
$0(){return D.e2U},
$S:z+17}
C.fh_.prototype={
$0(){return D.e58},
$S:z+18}
C.fh0.prototype={
$0(){return D.dE9},
$S:z+19}
C.eXU.prototype={
$2(d,e){return new C.aeQ($.bDM()[e],new C.eXT(e,this.a),null)},
$S:z+20}
C.eXT.prototype={
$0(){var w=this.a,v=F.aF_.h(0,$.bDM()[w].a)
$.arY=v==null?"music":v
B.a3(this.b,!1).cg(B.e_(new C.eXR(w),!1,null,x.H))},
$S:0}
C.eXR.prototype={
$1(d){return $.bDM()[this.a].e.$0()},
$S:38}
C.eXV.prototype={
$2(d,e){return new C.adH(D.axE[e],new C.eXS(this.a,e),null)},
$S:z+21}
C.eXS.prototype={
$0(){return this.a.d.$1(D.axE[this.b])},
$S:0}
C.eXA.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eXz.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eXy.prototype={
$1(d){var w=this
return new B.dY(new C.eXx(w.a,w.b,w.c,w.d),null)},
$S:19}
C.eXx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.ftI,A.au,D.fAm,A.ad],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aQ(12,12)
m=new B.aQ(12,12)
m=B.a([new B.bA(1,A.bd,B.aM(d,A.V,!1,d,!0,A.t,d,B.aO(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,H.DQ,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jh,!0,A.a5,d,A.ao,d,d,d,d),d),A.ab,new B.bA(2,A.bd,B.aM(d,A.V,!1,d,!0,A.t,d,B.aO(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.DQ,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jh,!0,A.a5,d,A.ao,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dp8[l]
j=new B.aQ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bJ(f,f,f,f),new B.bk(j,j,j,j),d,d,A.n),d,d,d,A.fv,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eXv(a3,p,u,k),d,d,d,d,d,d,!1,A.a4))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fjl,d,d,d,d,d,d,d,d,d),A.am,new B.cb(A.aM,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new B.a8(d,44,B.ct(n,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bG(A.wP,new C.eXw(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bm(!0,new B.cT(new B.aX(0,1/0,0,a0.a.b*0.86),B.ct(v,d,A2.y7,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
C.eXv.prototype={
$0(){var w=this
return w.a.$1(new C.eXu(w.b,w.c,w.d))},
$S:0}
C.eXu.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eXw.prototype={
$0(){var w=this,v=w.a
v.m(new C.eXt(v,w.b,w.c,w.d))
B.a3(w.e,!1).N(null)},
$S:0}
C.eXt.prototype={
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
C.eXI.prototype={
$0(){var w=this.a
return w.m(new C.eXH(w))},
$S:0}
C.eXH.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eXJ.prototype={
$0(){return C.wV(this.b,this.a.f,"scene")},
$S:0}
C.eXK.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZz().x
w===$&&B.c()
return B.c1(v,new B.o(v,v,v,v,v,new B.c0(D.aYw,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bZ],x.O),v,v),A.n),A.bf)},
$S:342}
C.eXL.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.eN(A.A,B.c8(new B.h9(B.a([u.gu3(),u.gZz()],x.dS)),new C.eXG(u,this.b,v),w),A.f,A.e0),w,w,w)},
$S:241}
C.eXG.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu3().x
r===$&&B.c()
w=r<0.9?1:1-C.bqQ(r,0.9,0.98)
v=s.gZz().x
v===$&&B.c()
u=A.dA.av(0,v)
switch(s.gax1().a){case 0:s=s.bz5(t.b,r,u,t.c)
break
case 1:s=s.bPN(t.b,r,u,t.c)
break
case 2:s=s.cBf(t.b,r,u,t.c)
break
case 3:s=s.bC0(t.b,r,u,t.c)
break
case 4:s=s.bFk(t.b,r,u,t.c)
break
case 5:s=s.bEv(t.b,r,u,t.c)
break
default:s=null}return B.dd(s,w)},
$S:207}
C.eXM.prototype={
$2(d,e){var w=B.avr(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJV(u,A.bz,v,3.5)
u=this.a
w=u.gu3().x
w===$&&B.c()
return B.aa3(B.l2(null,null,null,1,0,new C.eXF(u),A.k.E(w,0,1)),v)},
$S:1862}
C.eXF.prototype={
$1(d){var w=this.a
w.gu3().sp(0,d)
if(w.as)w.m(new C.eXB(w))},
$S:7}
C.eXB.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eXN.prototype={
$0(){var w=this.a
w.gu3().sp(0,0)
w.adU()},
$S:0}
C.eXO.prototype={
$1(d){var w=this.a
w.m(new C.eXE(w,d))
if(w.as)w.adU()},
$S:7}
C.eXE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXP.prototype={
$0(){var w=this.a
w.m(new C.eXD(w,this.b))
w.gu3().sp(0,0)
if(w.as)w.adU()},
$S:0}
C.eXD.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eXQ.prototype={
$0(){var w=this.a
return w.m(new C.eXC(w,this.b))},
$S:0}
C.eXC.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.eXr.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1863}
C.eXs.prototype={
$1(d){return d.b},
$S:1864}
C.dje.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
C.djf.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.djb.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
C.djc.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.djd.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.djg.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.djh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dji.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.djj.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.djk.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.djl.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.djm.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.djn.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.djo.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.emW.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.emL.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.emN.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.emO.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.emR.prototype={
$1(d){var w=D.mJ.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.emS.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.S(q),o=x.dg,n=B.C(new B.ea(new B.cQ(new B.Z(q,new C.emT(d),p.k("Z<1>")),new C.emU(r),p.k("cQ<1,qR?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.M)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.emT.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.emU.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.emP.prototype={
$1(d){return D.mJ.h(0,d.b).c===D.x6},
$S:z+36}
C.emQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.enl.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.va(0,u)
w.a6p(A.o.an(v,1000))},
$S:9}
C.emV.prototype={
$0(){},
$S:0}
C.emH.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:1}
C.emY.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.N,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.X(D.mJ.h(0,v).b,D.mJ.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fLI,w,B.d(D.mJ.h(0,v).a,w,w,w,w,w,w,A.fK,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,Y.aoy,w,w,w,w,new C.emX(d),!1,w,w,w,w,w,w,w,D.fD8,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.emX.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.en_.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.l).w,s=B.a([D.egn],x.p)
for(w=0;w<6;++w){v=D.ay0[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bW9,u,u,u,u,new C.emZ(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lG,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fK,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,t.a.b*0.7),B.ct(s,u,D.bAL,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:25}
C.emZ.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.emK.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.emI(d),w,w),B.bM(!1,A.DU,w,w,!0,w,w,new C.emJ(d),w,w)],x.p),w,w,F.n7,D.fAx,w,w,w,w,D.fDr,w)},
$S:18}
C.emI.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.emJ.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.enj.prototype={
$0(){var w=this.a
return w.m(new C.eni(w))},
$S:0}
C.eni.prototype={
$0(){return this.a.r=!1},
$S:0}
C.enk.prototype={
$2(d,e){var w,v,u,t=null,s=new B.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mo(new C.en9(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b7W:t
v=B.a([B.b4(u,t,t,new C.bgS(w,v,new C.ena(r),new C.enb(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.c8(w,new C.enc(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bH_())
return B.aB(A.cg,B.jz(new B.an(A.a_,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.end(r),t,r.gcgx(),t,new C.ene(r),new C.enf(r),new C.eng(r),t,t,t,t,t,t,t,t,t,t,new C.enh(r),t,t,t,!1,A.a4)},
$S:37}
C.en9.prototype={
$0(){return this.a.abX(this.b)},
$S:0}
C.enh.prototype={
$1(d){return this.a.cz3(d.b)},
$S:64}
C.enf.prototype={
$1(d){return this.a.cgy(d.b)},
$S:49}
C.eng.prototype={
$1(d){return this.a.cgz(d.b)},
$S:21}
C.ene.prototype={
$1(d){return this.a.b0M()},
$S:43}
C.end.prototype={
$1(d){return this.a.acD(d.b)},
$S:293}
C.ena.prototype={
$0(){return this.a.z},
$S:649}
C.enb.prototype={
$0(){return this.a.Q},
$S:723}
C.enc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bLf()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.r,1)
t=B.a([D.fxY,A.cO],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.M)(p),++r)t.push(new B.y(p[r],q,D.fi3,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hb,q,q,q)},
$S:61}
C.emM.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.I(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ea,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A3.U9,w,w,w),A.bA,B.d(g,w,w,w,w,w,w,F.Uh,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1866}
C.en5.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).iW()},
$S:0}
C.en6.prototype={
$0(){var w=this.a
return w.m(new C.en4(w))},
$S:0}
C.en4.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.en7.prototype={
$0(){var w=this.a
return w.m(new C.en3(w))},
$S:0}
C.en3.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.en8.prototype={
$0(){var w=this.a
return w.m(new C.en2(w))},
$S:0}
C.en2.prototype={
$0(){return this.a.r=!0},
$S:0}
C.en1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mJ.gdR(D.mJ),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.M)(p),++r)u.push(s.ctQ(p[r]))
return new B.D(K.ai5,B.x(B.a([new B.D(Ag.ajK,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.en0.prototype={
$0(){return this.a.c7_(this.b)},
$S:0}
C.dja.prototype={
$0(){var w=this,v=null,u=B.fX(v,v,v,v,B.cZ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.c8,v,A.dQ,A.c6)
u.eT()
return u},
$S:316}
C.ez1.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.t(s.a+q*n,s.b+r*n)
t.b=new B.t(q*v,r*v)}A.d.bt(o,new C.ez_(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.ez0())},
$S:9}
C.ez_.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.ez0.prototype={
$0(){},
$S:0}
C.eyD.prototype={
$0(){},
$S:0}
C.eyC.prototype={
$0(){},
$S:0}
C.eyM.prototype={
$0(){return C.wV(this.b,this.a.d,"spark-painter")},
$S:0}
C.eyO.prototype={
$1(d){return this.a.aZb(0,d.b)},
$S:49}
C.eyS.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aF(0,u).gcH()>2.5}else w=!1
if(w)t.a.push(u)
v.aS5(u)
v.c9Q(u)
return null},
$S:21}
C.eyN.prototype={
$1(d){return this.a.aZa()},
$S:43}
C.eyT.prototype={
$1(d){return this.a.aZb(0,d.b)},
$S:23}
C.eyU.prototype={
$1(d){return this.a.aZa()},
$S:64}
C.eyV.prototype={
$0(){var w=this.a
return w.m(new C.eyL(w,this.b))},
$S:0}
C.eyL.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eyW.prototype={
$0(){var w=this.a
return w.m(new C.eyK(w))},
$S:0}
C.eyK.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eyX.prototype={
$0(){var w=this.a
return w.m(new C.eyJ(w,this.b))},
$S:0}
C.eyJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eyY.prototype={
$1(d){var w=this.a
return w.m(new C.eyI(w,d))},
$S:7}
C.eyI.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eyZ.prototype={
$0(){var w=this.a
return w.m(new C.eyH(w))},
$S:0}
C.eyH.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eyP.prototype={
$0(){var w=this.a
return w.m(new C.eyG(w))},
$S:0}
C.eyG.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eyQ.prototype={
$0(){var w=this.a
return w.m(new C.eyF(w))},
$S:0}
C.eyF.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.eyR.prototype={
$0(){var w=this.a
return w.m(new C.eyE(w,this.b))},
$S:0}
C.eyE.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eFa.prototype={
$0(){return C.wV(this.b,this.a.d,"title")},
$S:0}
C.eFb.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIW().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c0b(v[t],t,s,q,u))
return new B.D(A.fb,B.bX(A.fW,w,A.t8,0,0),null)},
$S:687}
C.eFc.prototype={
$1(d){return this.a.m(new C.eF9())},
$S:2}
C.eF9.prototype={
$0(){},
$S:0}
C.eFd.prototype={
$0(){var w=this.a
w.m(new C.eF8(w,this.b))
w=w.gIW()
w.iK(0,0)
w.cL(0)},
$S:0}
C.eF8.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eFe.prototype={
$0(){var w=this.a
return w.m(new C.eF7(w,this.b))},
$S:0}
C.eF7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eFf.prototype={
$0(){var w=this.a
return w.m(new C.eF6(w))},
$S:0}
C.eF6.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eFg.prototype={
$0(){var w=this.a
return w.m(new C.eF5(w,this.b))},
$S:0}
C.eF5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eFh.prototype={
$0(){var w=this.a.gIW()
w.iK(0,0)
w.cL(0)},
$S:0}
C.eFi.prototype={
$1(d){var w=this.a
return w.m(new C.eF4(w,d))},
$S:7}
C.eF4.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.bMt.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bME.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bMz.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bMF.prototype={
$1(d){return this.a.LL(d)&&!d.x},
$S:z+0}
C.bMG.prototype={
$2(d,e){return Math.max(d,this.a.aAy(e))},
$S:z+6}
C.bMI.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bMJ(w))},
$S:z+5}
C.bMJ.prototype={
$0(){return this.a.a},
$S:98}
C.bMH.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
C.bMK.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bML(w))},
$S:z+5}
C.bML.prototype={
$0(){return this.a.a},
$S:98}
C.bMv.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bMw(w))},
$S:z+5}
C.bMw.prototype={
$0(){return this.a.a},
$S:98}
C.bMu.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
C.bMx.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bMy(w))},
$S:z+5}
C.bMy.prototype={
$0(){return this.a.a},
$S:98}
C.bMs.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bMM.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bMA.prototype={
$1(d){return d!==this.b&&this.a.aGM(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bMD.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMC.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bMB.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bH4.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bH5.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cn4.prototype={
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
$S:178}
C.fIN.prototype={
$1(d){var w
$.W()
w=B.K()
w.r=d.gp(0)
return w},
$S:1867}
C.fIP.prototype={
$2(d,e){var w
$.W()
w=B.K()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bH
return w},
$S:1868}
C.fIQ.prototype={
$5(d,e,f,g,h){return B.bz(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1869}
C.fIO.prototype={
$3(d,e,f){var w
$.W()
w=B.K()
w.sar(new B.a9(A.b3,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1870}
C.bGJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bGK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bGI(w))},
$S:0}
C.bGI.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bGL.prototype={
$0(){return B.a([],x.ey)},
$S:1871}
C.bGM.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:369}
C.bGN.prototype={
$0(){var w,v,u
J.bDV(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cx(v))if(C.h1j(v.b))w.b0f(v)
else w.a_z(v)
else{u=w.a.c.bcZ(v)
w.ae5(u==null?"The "+$.qn().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bGH.prototype={
$1(d){return new B.dY(new C.bGF(this.a,this.b),null)},
$S:19}
C.bGF.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bGG(this.a,v,e),t=$.qn(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.jZ,w,w,w),q=B.aI(w,w,w,w,D.bMM,w,w,w,new C.bGB(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.vQ,B.x(B.a([r,A.au,D.fMI,A.R,B.B(B.a([q,B.E(B.l2(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aI(w,w,w,w,D.bTu,w,w,w,new C.bGC(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b0,B.bM(!1,D.fq5,w,w,!0,w,w,new C.bGD(u),w,w),B.bM(!1,A.wP,w,w,!0,w,w,new C.bGE(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.E,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
C.bGG.prototype={
$1(d){var w=this.a
w.m(new C.bGz(this.b,d))
this.c.$1(new C.bGA())
w.a.toString},
$S:7}
C.bGz.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bGA.prototype={
$0(){},
$S:0}
C.bGB.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bGC.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bGD.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bGE.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.bH1.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fF()
w=this.a
if(w.c!=null)w.ae5("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ae5("\u26a0 Overloaded! The "+$.qn().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zI(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ae5("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bH2.prototype={
$0(){},
$S:0}
C.bGc.prototype={
$0(){},
$S:0}
C.bH3.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bH0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.cg,B.b4(p,p,p,new C.aiE(w,v,u,t,s,r==null?A.jd:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGV(o),new C.bGW(o),new C.bGX(o),p,p,p,p,p,p,p,p,p,p,new C.bGY(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.b7d)
w=o.Q
if(w!=null){v=B.m(14)
u=B.I(A.cY,A.r,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.foe,B.E(B.d(w,p,p,p,p,p,p,D.fgk,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bcV,p,u,v,p,p,A.n),p,p,p,p,A.ni,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGZ(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aZi(B.B(B.a([D.bCS,new C.j6(A.Gm,"Cut wire",new C.bH_(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.ch6(w),p,p,10,10,p,p))}return B.jz(new B.an(A.a_,p,A.b2,A.t,n,p),A.t,p)},
$S:436}
C.bGW.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7g(s)
if(r!=null){t.m(new C.bGT(t,r,d))
return}w=t.b0W(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bGU(t,w))}},
$S:49}
C.bGT.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bGU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bGX.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bGR(w,d))
else if(w.w!=null)w.m(new C.bGS(w,d.b.aa(0,w.x)))},
$S:21}
C.bGR.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bGS.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bGV.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7g(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akB(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ae3()},
$S:43}
C.bGY.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0W(v)
if(u!=null){w.m(new C.bGP(w,u))
if(D.m6.ai(0,u.b))w.crH(u)
w.a.toString
return}w.m(new C.bGQ(w,w.cEh(v)))},
$S:64}
C.bGP.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bGQ.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bGZ.prototype={
$0(){var w=this.a
return w.m(new C.bGO(w))},
$S:0}
C.bGO.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bH_.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.ae3()},
$S:0}
C.bGd.prototype={
$0(){return this.a.bp6(this.b)},
$S:0}
C.bGw.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.faC,w,w,w),B.E(B.l2(this.b.d,w,w,g,h,new C.bGy(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1872}
C.bGy.prototype={
$1(d){var w=this.a
w.m(new C.bGx(this.b,d))
w.a.toString},
$S:7}
C.bGx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bGj.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.ae3()},
$S:0}
C.bGk.prototype={
$0(){var w=this.a
return w.m(new C.bGi(w))},
$S:0}
C.bGi.prototype={
$0(){return this.a.d=null},
$S:0}
C.bGl.prototype={
$0(){this.a.m(new C.bGh(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bGh.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bGo.prototype={
$0(){return this.a.b0f(this.b)},
$S:0}
C.bGp.prototype={
$0(){return this.a.a_z(this.b)},
$S:0}
C.bGq.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
C.bGr.prototype={
$0(){var w=this.a
w.m(new C.bGg(this.b,this.c))
w.a.toString},
$S:0}
C.bGg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bGs.prototype={
$0(){var w=this.a
w.m(new C.bGf(this.b,this.c))
w.a.toString},
$S:0}
C.bGf.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bGt.prototype={
$0(){var w=this.a
w.m(new C.bGe(this.b,this.c))
w.a.toString},
$S:0}
C.bGe.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bGu.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGv.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGm.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGn.prototype={
$1(d){return this.a.f=d},
$S:7}
C.fgE.prototype={
$1(d){return d.aGp("bulb")},
$S:z+2}
C.fgF.prototype={
$1(d){return d.pQ(0,"switch")&&d.aGp("bulb")},
$S:z+2}
C.fgG.prototype={
$1(d){return A.d.b3(d.a,new C.fgr())},
$S:z+2}
C.fgr.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fgH.prototype={
$1(d){return d.pQ(0,"resistor")&&A.d.b3(d.a,new C.fgq())},
$S:z+2}
C.fgq.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fgI.prototype={
$1(d){return!d.pQ(0,"battery")&&d.aGp("bulb")},
$S:z+2}
C.fgv.prototype={
$1(d){return A.d.b3(d.a,new C.fgp())},
$S:z+2}
C.fgp.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fgw.prototype={
$1(d){return A.d.b3(d.a,new C.fgo())},
$S:z+2}
C.fgo.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fgx.prototype={
$1(d){return A.d.b3(d.a,new C.fgn())},
$S:z+2}
C.fgn.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fgy.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fgl())&&A.d.b3(w,new C.fgm())&&d.pQ(0,"buck")},
$S:z+2}
C.fgl.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fgm.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fgz.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fgj())&&A.d.b3(w,new C.fgk())},
$S:z+2}
C.fgj.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fgk.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fgA.prototype={
$1(d){return A.d.b3(d.a,new C.fgi())},
$S:z+2}
C.fgi.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dT5.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dTe.prototype={
$1(d){var w=this.a.d
return w.aGM(d)&&w.Cx(d)},
$S:z+0}
C.dTf.prototype={
$1(d){return d.x},
$S:z+0}
C.dTg.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dTh.prototype={
$0(){},
$S:0}
C.dT4.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fFo,A.au,D.fq0,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qw[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iX,q,q,q,q,q,q,q,q,q),A.bA,new B.y(u.b,q,D.fh4,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dT3(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eM(q,F.lp,new B.D(A.bR,new B.a8(340,q,B.ct(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d4,q,new B.b7(p,A.a0),q)},
$S:47}
C.dT3.prototype={
$0(){B.a3(this.b,!1).N(null)
var w=this.a
w.m(new C.dT2(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dT2.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bi6()},
$S:0}
C.dT0.prototype={
$1(d){return new C.Vw(this.a.d,null)},
$S:z+68}
C.dT1.prototype={
$0(){},
$S:0}
C.dTd.prototype={
$1(d){return new B.dY(new C.dTc(this.a),null)},
$S:19}
C.dTc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahQ(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bo:A.aR
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fCD,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,B.bx(B.m(4),B.li(A.bz,m,m,5,m,w.a/11,new B.m4(f,x.x)),A.aq),A.ad],v)
if(h)u.push(D.ft5)
else{h=f.j(0.1)
t=B.m(14)
s=B.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ab.Jy,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DR,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bK(A.a8,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dTa(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.q(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.cb(A.aM,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a8P,m,m,m,m,m,m,m,m,m),A.as,new B.bA(1,A.bd,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bJ(n,n,n,n),new B.bk(t,t,t,t),m,m,A.n),m,m,m,A.eG,A.ni,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dTb(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,k.a.b*0.75),B.ct(u,m,A2.y7,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
C.dTa.prototype={
$0(){var w=this.a
w.m(new C.dT8(w))
this.b.$1(new C.dT9())
w.EZ()},
$S:0}
C.dT8.prototype={
$0(){var w=this.a
$.ahQ()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dT9.prototype={
$0(){},
$S:0}
C.dTb.prototype={
$0(){var w=this.a
w.m(new C.dT6(w,this.b))
this.c.$1(new C.dT7())
w.EZ()},
$S:0}
C.dT6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dT7.prototype={
$0(){},
$S:0}
C.dTj.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.dTk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ml("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a3(t.b,!1).cg(B.e_(new C.dTi(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dTi.prototype={
$1(d){B.ls("construction")
return Ai.hF5()},
$S:z+46}
C.dTl.prototype={
$0(){return C.hr0(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
C.dTm.prototype={
$0(){var w=this.a
return w.m(w.d.gcVz())},
$S:0}
C.dTn.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBp(v))
w.EZ()},
$S:0}
C.cDU.prototype={
$2(d,e){var w=null,v=this.a.gax6().x
v===$&&B.c()
return B.b4(w,w,w,new C.b8Y(v,w),A.az)},
$S:72}
C.cDT.prototype={
$3(d,e,f){var w=new B.aJ($.W().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.b1(v,t))
w.D(new B.ca(v,u,v+e,u))
w.D(new B.ca(v,u,v,u+e))
w.D(new B.ca(v,u,v-e,u))
w.D(new B.ca(v,u,v,t))
w.D(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.aJ(w,t)},
$S:387}
C.fNv.prototype={
$3(d,e,f){return new C.UP(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fNw.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.iq(A.A,g,null,new B.bf(B.cI(A.ct,e,null),new B.bp(0.85,1,w),w.k("bf<bL.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dPu.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.dPt.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYH(o):q.bB3(o,p),m=x.p
p=B.a([B.qq(new B.nm(n,new B.cz(p,x.aC)),A.q_,B.rY(),A.b8,A.b8,new C.dPr())],m)
n=t.d
if(n){w=A.k.F(q.gRT(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.as],m)
if(w)m.push(D.bCD)
else m.push(A.b0)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bo:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.au(B.db(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new B.o(A.w,s,s,u,s,s,A.n),A.nd,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uX)p.push(B.ao(s,B.au(B.p(s,s,A.f,s,s,A.KM,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wF)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.KM,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.au(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dPs(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b2,A.t,p,s),A.aq)},
$S:275}
C.dPr.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.iq(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bL.T>"))),null)},
$S:379}
C.dPs.prototype={
$0(){var w=this.a
return w.m(new C.dPq(w))},
$S:0}
C.dPq.prototype={
$0(){return this.a.e=null},
$S:0}
C.dPp.prototype={
$0(){var w=this.a
return w.m(new C.dPo(w,this.b))},
$S:0}
C.dPo.prototype={
$0(){return this.a.e=A.d.cD(F.kg,this.b)},
$S:0}
C.dPn.prototype={
$0(){var w=this.a
return w.m(new C.dPm(w))},
$S:0}
C.dPm.prototype={
$0(){return this.a.e=0},
$S:0}
C.dPi.prototype={
$0(){var w=this.a
return w.m(new C.dPh(w))},
$S:0}
C.dPh.prototype={
$0(){return this.a.e=null},
$S:0}
C.dPl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fL7,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eK,p,p,p,D.fn5,p,p,p),1),B.d(A.a.aZ(A.o.u(B.dl(new B.T(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.u(B.h2(new B.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qA,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l0,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.buV(w.gRT(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.I(A.aZ,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.ac_,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dPk(w),p,p,p,p,p,p,!1,A.a4),A.ej,B.p(p,p,A.f,p,p,A.ac5,p,12,p,p,p,p,p,12),A.ej,B.p(p,p,A.f,p,p,D.b2y,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.kg[o].a,p,1,A.a1,p,p,p,A.a8I,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fw,p,p,p)
r=w.e
r.toString
v.push(B.bU(0,new B.D(D.bzj,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aey(r,w.gRT(),p),A.fH),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dlv,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.I(A.aZ,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jx,w.av2(F.kg[q],34,!1),p))
v.push(B.ao(8,B.au(B.p(p,B.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lt,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b2,A.t,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.XY,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:275}
C.dPk.prototype={
$0(){var w=this.a
return w.m(new C.dPj(w))},
$S:0}
C.dPj.prototype={
$0(){return this.a.e=null},
$S:0}
C.fh8.prototype={
$0(){return D.e7c},
$S:z+48}
C.fh9.prototype={
$0(){return D.dFx},
$S:z+49}
C.fha.prototype={
$0(){return D.dC8},
$S:z+50}
C.fhb.prototype={
$0(){return D.dEY},
$S:z+51}
C.fhc.prototype={
$0(){return D.dJQ},
$S:z+52}
C.fhd.prototype={
$0(){return D.e2X},
$S:z+53}
C.fhe.prototype={
$0(){return D.e57},
$S:z+54}
C.fhf.prototype={
$0(){return D.dJa},
$S:z+55}
C.chI.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.chJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.huD(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dp,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.aa,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ah.Jw,m,m,m,m,m,m,m,m,m),m),new B.bK(A.lL,m,m,B.x(B.a([new B.y(r.a,m,D.flI,m,m,m,m,m,m,m,m,m),A.cO,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bk(q,q,q,q),p,new B.a9(A.ax,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.chH(d,r),m,m,m,m,m,m,!1,A.a4))}return B.bX(A.bB,j,A.bs,14,14)},
$S:170}
C.chH.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.chG(this.b),!1,null,x.H))},
$S:0}
C.chG.prototype={
$1(d){return this.a.f.$0()},
$S:38}
C.eJD.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4n(w.f)]},
$S:0}
C.eJz.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.aj()*7},
$S:0}
C.eJy.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c5)
w.w=""},
$S:0}
C.eJB.prototype={
$0(){var w=this.a
return w.m(new C.eJA(w,this.b))},
$S:0}
C.eJA.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cG(w,this.b)},
$S:0}
C.eJC.prototype={
$1(d){return this.a.aZI(0)},
$S:2}
C.dVK.prototype={
$0(){return C.IX("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dVL.prototype={
$0(){},
$S:0}
C.dVF.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dVH.prototype={
$0(){return this.a.aZK(this.b)},
$S:0}
C.dVI.prototype={
$0(){var w=this.a
return w.m(new C.dVG(w))},
$S:0}
C.dVG.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
return w.aZK(w.d)},
$S:0}
C.dH8.prototype={
$2(d,e){return d+e},
$S:78}
C.dH9.prototype={
$0(){},
$S:0}
C.dH3.prototype={
$2(d,e){return d+e},
$S:78}
C.dH6.prototype={
$0(){var w=this.a
return w.m(new C.dH5(w,this.b))},
$S:0}
C.dH5.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dH7.prototype={
$0(){var w=this.a
return w.m(new C.dH4(w))},
$S:0}
C.dH4.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dSP.prototype={
$0(){return C.wV(this.b,this.a.d,"drawing")},
$S:0}
C.dSQ.prototype={
$1(d){var w=this.a
return w.m(new C.dSO(w,d))},
$S:49}
C.dSO.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIb(u,v,t))},
$S:0}
C.dSR.prototype={
$1(d){var w=this.a
return w.m(new C.dSN(w,d))},
$S:21}
C.dSN.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.dSS.prototype={
$1(d){var w=this.a
return w.m(new C.dSM(w,d))},
$S:23}
C.dSM.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIb(u,v,t))},
$S:0}
C.dST.prototype={
$0(){var w=this.a
return w.m(new C.dSL(w,this.b))},
$S:0}
C.dSL.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dSU.prototype={
$1(d){var w=this.a
return w.m(new C.dSK(w,d))},
$S:7}
C.dSK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dSV.prototype={
$0(){var w=this.a
return w.m(new C.dSJ(w))},
$S:0}
C.dSJ.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dSW.prototype={
$0(){var w=this.a
return w.m(new C.dSI(w))},
$S:0}
C.dSI.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dSX.prototype={
$0(){var w=this.a
return w.m(A.d.gBp(w.e))},
$S:0}
C.dSY.prototype={
$0(){var w=this.a
return w.m(new C.dSH(w))},
$S:0}
C.dSH.prototype={
$0(){var w=this.a
w.x=D.awW[A.o.F(A.d.cD(D.awW,w.x)+1,4)]},
$S:0}
C.eh8.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.eh9.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.IX("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eh7(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.IX("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eh7.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eha.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eh6(w))},
$S:12}
C.eh6.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.ehe.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aB(w,B.mh(new C.ehc(v,e),w,A.b8,A.q_,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehd(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.ehd.prototype={
$0(){return this.a.c8B(this.b)},
$S:0}
C.ehc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dk(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fA(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c1B
if(o)v=q.a.r.q(0,q.b)?A.bo.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.I(u.r.q(0,t)?A.bo:A.aZ,A.r,1)
if(o){r=B.dk()
r.fA(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fo(A.A,B.d(u[t],p,p,p,p,p,p,G.a8T,p,p,p),p,r,!0)
u=r}else u=D.fE5
return B.fo(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:121}
C.ehf.prototype={
$0(){var w=this.a
return w.m(new C.ehb(w,this.b))},
$S:0}
C.ehb.prototype={
$0(){var w=this.a
w.d=this.b.a
w.axv()},
$S:0}
C.ehg.prototype={
$0(){var w=this.a
return w.m(w.gc8A())},
$S:0}
C.er3.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.er4.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.er1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.er2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.er0(w))},
$S:12}
C.er0.prototype={
$0(){return this.a.f=-1},
$S:0}
C.er5.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.er6.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.er7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZJ()},
$S:12}
C.er8.prototype={
$0(){return this.a.c8H(this.b)},
$S:0}
C.eEV.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:70}
C.eF3.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.l_,B.B(B.a([v,A.ab,new B.dr(1,A.cn,B.eN(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e0),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1873}
C.eF_.prototype={
$1(d){return this.a.m(new C.eEZ())},
$S:2}
C.eEZ.prototype={
$0(){},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
return w.m(new C.eEY(w,this.b))},
$S:0}
C.eEY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eF1.prototype={
$1(d){var w=this.a
return w.m(new C.eEX(w,d))},
$S:7}
C.eEX.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.m(new C.eEW(w))},
$S:0}
C.eEW.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.egd.prototype={
$0(){},
$S:0}
C.ege.prototype={
$0(){},
$S:0}
C.eg6.prototype={
$0(){var w=this.a
return w.m(new C.eg5(w))},
$S:0}
C.eg5.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
C.a8g("hat",0.6)},
$S:0}
C.eg7.prototype={
$0(){var w=this.a
return w.m(new C.eg4(w))},
$S:0}
C.eg4.prototype={
$0(){this.a.y=1.1
C.q0("bell",36,200,0.4)},
$S:0}
C.eg8.prototype={
$0(){var w=this.a
return w.m(new C.eg3(w))},
$S:0}
C.eg3.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.au(Math.max(v,u)-t+1)
w.as=u
C.q0("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
return w.m(new C.eg2(w,this.b))},
$S:0}
C.eg2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ega.prototype={
$1(d){var w=this.a
return w.m(new C.eg1(w,d))},
$S:7}
C.eg1.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.egb.prototype={
$1(d){var w=this.a
return w.m(new C.eg0(w,d))},
$S:7}
C.eg0.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.egc.prototype={
$1(d){var w=this.a
return w.m(new C.eg_(w,d))},
$S:7}
C.eg_.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cuB.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.cuC.prototype={
$0(){var w=this.a
return C.hr0(this.b,w.c,w.e,w.d)},
$S:0}
C.fRk.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.fbe,v,v,v)
return B.ek(B.a([B.bM(!1,D.fta,v,v,!0,v,v,new C.fRj(d),v,v)],x.p),v,v,F.n7,w,v,v,v,new B.b7(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:18}
C.fRj.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.cux.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cuw.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cuD.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cuy.prototype={
$0(){var w=this.a
A.d.W(w.iI$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
C.cuA.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.oA$.a)/1e6,0,0.04)
w.oA$=d
w.nc$=A.o.an(v,1000)
w.pZ(u)
if(w.c!=null)w.m(new C.cuz())},
$S:9}
C.cuz.prototype={
$0(){},
$S:0}
C.chE.prototype={
$0(){var w=this
return C.q0(w.a,w.b,w.c,w.d)},
$S:1}
C.dYg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dYf(w,d))},
$S:z+57}
C.dYf.prototype={
$0(){return this.a.cts(this.b)},
$S:0}
C.dXJ.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:700}
C.dXH.prototype={
$0(){return this.a.id=D.a3M},
$S:0}
C.dXI.prototype={
$0(){var w=this.b.a,v=B.S(w).k("Z<1>")
v=B.pl(new B.Z(w,new C.dXG(this.c),v),6,v.k("J.E"))
w=B.C(v,B.a6(v).k("J.E"))
return this.a.id=w},
$S:0}
C.dXG.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+58}
C.dXF.prototype={
$1(d){var w=null,v=B.ce(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ae,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.t,w,A.y,w,w,w,w,A.ag)
return B.ek(B.a([B.bM(!1,A.pt,w,w,!0,w,w,new C.dXE(d),w,w)],x.p),w,w,F.n7,v,w,w,w,w,D.fEa,w)},
$S:18}
C.dXE.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dY1.prototype={
$0(){return C.wV(this.b,this.a.d,"earth")},
$S:0}
C.dY2.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gWb()
r=p.z
o=B.a([B.aB(A.cg,B.b4(q,q,q,new C.bfm(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dXQ(p),new C.dXR(p),new C.dXS(p),q,q,q,q,q,q,q,new C.dXT(p),q,q,q,!1,A.a4)],x.p)
if(p.r==null)o.push(A6.acI)
w=this.b
if(w!=null)o.push(B.ao(8,p.c9i(w),q,q,10,10,q,q))
return new B.eG(new B.an(A.a_,q,A.b2,A.t,o,q),p.d)},
$S:427}
C.dXR.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:235}
C.dXS.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWb()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:211}
C.dXQ.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWb()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:650}
C.dXT.prototype={
$1(d){var w=this.a,v=w.c9l(d.b)
if(v!=null)w.m(new C.dXK(w,v))
else w.m(new C.dXL(w))},
$S:64}
C.dXK.prototype={
$0(){return this.a.axE(this.b)},
$S:0}
C.dXL.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dY3.prototype={
$0(){var w=this.a
w.e.bP(0,A.c5)
w.m(new C.dXP(w,this.b))},
$S:0}
C.dXP.prototype={
$0(){var w=this.a
w.id=D.a3M
w.axE(this.b)},
$S:0}
C.dY7.prototype={
$0(){var w=this.a
return w.m(new C.dY0(w))},
$S:0}
C.dY0.prototype={
$0(){var w=this.a
w.fx=null
w.atz(15,w.y,1)},
$S:0}
C.dY8.prototype={
$0(){var w=this.a
return w.m(new C.dY_(w,this.b))},
$S:0}
C.dY_.prototype={
$0(){var w=this.b.b
return this.a.atz(w.a,w.b,w.c)},
$S:0}
C.dY9.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.dXZ(w,v))},
$S:0}
C.dXZ.prototype={
$0(){var w=this.b.a
return this.a.axE(w[A.cW.au(w.length)])},
$S:0}
C.dYa.prototype={
$1(d){var w=this.a
return w.m(new C.dXY(w,d))},
$S:7}
C.dXY.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dYb.prototype={
$1(d){var w=this.a
return w.m(new C.dXX(w,d))},
$S:7}
C.dXX.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dYc.prototype={
$1(d){var w=this.a
return w.m(new C.dXW(w,d))},
$S:7}
C.dXW.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dYd.prototype={
$0(){var w=this.a
return w.m(new C.dXV(w))},
$S:0}
C.dXV.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dYe.prototype={
$0(){var w=this.a
return w.m(new C.dXU(w))},
$S:0}
C.dXU.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dY4.prototype={
$0(){var w=this.a
return w.m(new C.dXO(w))},
$S:0}
C.dXO.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dY5.prototype={
$0(){var w=this.a
return w.m(new C.dXN(w))},
$S:0}
C.dXN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dY6.prototype={
$0(){var w=this.a
return w.m(new C.dXM(w))},
$S:0}
C.dXM.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dXD.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aQL,w,w,w),A.v_,B.d(e,w,2,A.a1,w,w,w,A.Uq,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:138}
C.dXC.prototype={
$0(){var w=this.a
return w.m(new C.dXB(w))},
$S:0}
C.dXB.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dfg.prototype={
$0(){var w=null,v=B.fX(w,w,w,w,B.cZ(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d46,w,w),this.a),A.a5,A.c8,w,A.dQ,A.c6)
v.eT()
return v},
$S:316}
C.dfh.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.t(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1875}
C.fh1.prototype={
$0(){return D.dHt},
$S:z+59}
C.fh2.prototype={
$0(){return D.e4R},
$S:z+60}
C.fh3.prototype={
$0(){return D.dHv},
$S:z+61}
C.fh4.prototype={
$0(){return D.dBV},
$S:z+62}
C.fh5.prototype={
$0(){return D.dHs},
$S:z+63}
C.fh6.prototype={
$0(){return D.e2Y},
$S:z+64}
C.fh7.prototype={
$0(){return D.e2W},
$S:z+65}
C.eFO.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.eFP.prototype={
$0(){var w=this.a
return w.m(new C.eFN(w))},
$S:0}
C.eFN.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaSy()+1,16)},
$S:0}
C.eFQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.huC(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aQ(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.blB],u)
k.push(B.aB(n,B.p(n,B.x(B.a([B.X(s.c,q,n,n,n,30),A.N,new B.y(s.a,n,D.ffT,n,A.L,n,n,n,n,2,n,n),A.cO,new B.y(s.b,n,D.fl4,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bJ(p,p,p,p),new B.bk(r,r,r,r),n,new B.a9(A.ax,A.aD,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eFM(d,s),n,n,n,n,n,n,!1,A.a4))}return B.bX(A.fW,k,A.bs,10,10)},
$S:170}
C.eFM.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.eFL(this.b),!1,null,x.H))},
$S:0}
C.eFL.prototype={
$1(d){return this.a.e.$0()},
$S:38}
C.eyh.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.eys.prototype={
$0(){return C.wV(this.b,this.a.d,"solar-system")},
$S:0}
C.eyt.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.at(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.cg,B.b4(v,v,v,new C.brI(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eyp(u),new C.eyq(u),v,v,v,v,v,v,v,new C.eyr(u),v,v,v,!1,A.a4)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.c9n(w),v,v,10,10,v,v))
return new B.eG(new B.an(A.a_,v,A.b2,A.t,t,v),u.d)},
$S:427}
C.eyp.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:235}
C.eyq.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.aa(0,d.a)},
$S:211}
C.eyr.prototype={
$1(d){var w=this.a,v=w.c9q(d.b)
if(v!=null)w.b_4(v)},
$S:64}
C.eyu.prototype={
$0(){var w=this.a
return w.m(new C.eyo(w))},
$S:0}
C.eyo.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.eyv.prototype={
$0(){return this.a.b_4(this.b)},
$S:0}
C.eyw.prototype={
$1(d){var w=this.a
return w.m(new C.eyn(w,d))},
$S:7}
C.eyn.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.eyx.prototype={
$1(d){var w=this.a
return w.m(new C.eym(w,d))},
$S:7}
C.eym.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eyy.prototype={
$0(){var w=this.a
return w.m(new C.eyl(w))},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.eyz.prototype={
$0(){var w=this.a
return w.m(new C.eyk(w))},
$S:0}
C.eyk.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eyA.prototype={
$0(){var w=this.a
return w.m(new C.eyj(w))},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eyB.prototype={
$0(){var w=this.a
return w.m(new C.eyi(w))},
$S:0}
C.eyi.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eyg.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ac(d/365.25,w)+" Earth years"}else w=A.k.ac(d,0)+" Earth days"
return w},
$S:313}
C.eyf.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aQL,w,w,w),A.v_,B.d(e,w,2,A.a1,w,w,w,A.Uq,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:138}
C.eye.prototype={
$0(){var w=this.a
return w.m(new C.eyd(w))},
$S:0}
C.eyd.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.f_c.prototype={
$0(){var w=null,v=B.fX(w,w,w,w,B.cZ(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,L.QF,w,w),this.a),A.a5,A.c8,w,A.dQ,A.c6)
v.eT()
return v},
$S:316}
C.f_d.prototype={
$1(d){return d.c>0},
$S:z+10}
C.f_e.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dYk.prototype={
$0(){},
$S:0}
C.dYN.prototype={
$1(d){return d!=null},
$S:359}
C.dYz.prototype={
$0(){var w=this.a
return w.m(new C.dYq(w,this.b))},
$S:0}
C.dYq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dYA.prototype={
$0(){var w=this.a
return w.m(new C.dYp(w))},
$S:0}
C.dYp.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dYB.prototype={
$0(){var w=this.a
return w.m(new C.dYy(w))},
$S:0}
C.dYy.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYF.prototype={
$0(){var w=this.a
return w.m(new C.dYx(w))},
$S:0}
C.dYx.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dYG.prototype={
$1(d){var w=this.a
return w.m(new C.dYw(w,d))},
$S:7}
C.dYw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dYH.prototype={
$0(){var w=this.a
return w.m(w.gcwJ())},
$S:0}
C.dYI.prototype={
$1(d){var w=this.a
return w.m(new C.dYv(w,d))},
$S:7}
C.dYv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dYJ.prototype={
$1(d){var w=this.a
return w.m(new C.dYu(w,d))},
$S:7}
C.dYu.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dYK.prototype={
$1(d){var w=this.a
return w.m(new C.dYt(w,d))},
$S:7}
C.dYt.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dYL.prototype={
$1(d){var w=this.a
return w.m(new C.dYs(w,d))},
$S:7}
C.dYs.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dYM.prototype={
$0(){var w=this.a
return w.m(new C.dYr(w))},
$S:0}
C.dYr.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dYC.prototype={
$0(){var w=this.a
return w.m(new C.dYo(w))},
$S:0}
C.dYo.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dYD.prototype={
$0(){var w=this.a
return w.m(new C.dYn(w))},
$S:0}
C.dYn.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dYE.prototype={
$0(){var w=this.a
return w.m(new C.dYm(w))},
$S:0}
C.dYm.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dYj.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bU(0,B.c1(g,new B.o(D.bk0,g,g,B.m(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.z9[q]
n=B.b0(o.d)
o=B.x(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.w(D.z9[q].b)+" m/s\xb2",g,D.fkp,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(U.NQ,B.b0(D.z9[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b0(D.z9[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b0(D.z9[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b0(D.z9[q].d).j(0.6),g,g,g,3,g,A.fw,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ac(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cN(p,8,g,g,f,g,o,g),new B.cN(n-0.5,54,g,e,g,g,m,g),new B.cN(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cN(p,g,g,8,f,g,B.x(B.a([j,A.au,new B.y(i,g,A.t0,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.fcu,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d8(v,new C.dYi()))a1.push(D.b7y)
return new B.an(A.a_,g,A.aa,A.t,a1,g)},
$S:71}
C.dYi.prototype={
$1(d){return d==null},
$S:359}
C.dYl.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.db(v,v,v,v,A.b8,new B.o(v,v,v,B.m(8),v,new B.a9(A.a3,A.a8,A.x,B.a([B.b0(t).j(0.9),B.b0(t).j(0.4)],x.O),v,v),A.n),A.ip,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ac(r,1):C.GV(r)
u=u.ax*9.81/s
u=u<10?A.k.ac(u,2):A.k.ac(u,0)
return new B.an(A.a_,v,A.aa,A.t,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fiI,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:71}
C.dYh.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.baA(new B.t(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.az)
o=A.w.j(0.55)
p=B.m(14)
q=B.I(A.bz,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.q(u,"forever")||A.a.q(u,"again"))u=A.bo
else u=A.a.q(u,"escapes")?A.aR:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ac(Math.sqrt(58.86870477034412),1)
s=A.k.ac(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.GV(A.k.E(r.cx.gcH()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.a_,v,A.b2,A.t,B.a([n,B.ao(v,B.p(v,B.x(B.a([u,A.bA,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,K.aSs,v,v,v)],w),A.E,v,A.e,A.P,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bU,v,v,v),v,v,12,12,8,v)],w),v)},
$S:71}
C.erb.prototype={
$0(){return C.wV(this.b,this.a.d,"size-compare")},
$S:0}
C.erc.prototype={
$0(){var w=this.a
return w.m(new C.era(w,this.b))},
$S:0}
C.era.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erd.prototype={
$0(){var w=this.a
return w.m(new C.er9(w,this.b))},
$S:0}
C.er9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eYm.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=B.K()
w.r=f.j(0.2).gp(0)
w.z=new B.hC(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=B.K()
v=B.ar(f,A.w,0.6)
v.toString
w.sar(new B.c0(V.x9,0.5,A.x,null,0,B.a([A.c,f,v],x.O),K.a30,null).aA(0,B.bW(d,e)))
u.ae(d,e,w)},
$S:1876}
C.dGA.prototype={
$1(d){return d.e<=0},
$S:z+67}
C.dGo.prototype={
$1(d){return d.b},
$S:z+45}
C.dGp.prototype={
$0(){return C.wV(this.b,this.a.d,"black-hole")},
$S:0}
C.dGq.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.at(e.b,e.d)
p.Q=o
o=B.aB(A.cg,B.b4(q,q,q,new C.b9Z(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dGm(p),q,q,q,q,q,q,q,q,q,new C.dGn(p),q,q,q,q,!1,A.a4)
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.r,1)
t=p.r
if(t<1000)t=A.k.ac(t,t<10?1:0)+" Suns"
else t=C.fuK(t)+" Suns"
t=p.aeQ("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.aeQ("EDGE WIDTH",(s<100?A.k.ac(s,1):C.GV(s))+" km"),p.aeQ("TIME",A.k.ac(this.b*100,0)+"%"),p.aeQ("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bU,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ems)
return new B.eG(new B.an(A.a_,q,A.b2,A.t,r,q),p.d)},
$S:427}
C.dGn.prototype={
$1(d){return this.a.b_5(d.b)},
$S:23}
C.dGm.prototype={
$1(d){if(A.cW.aj()<0.12)this.a.b_5(d.b)},
$S:21}
C.dGs.prototype={
$1(d){var w=this.a
return w.m(new C.dGl(w,d))},
$S:7}
C.dGl.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dGt.prototype={
$0(){var w=this.a
return w.m(new C.dGk(w))},
$S:0}
C.dGk.prototype={
$0(){return this.a.r=10},
$S:0}
C.dGu.prototype={
$0(){var w=this.a
return w.m(new C.dGj(w))},
$S:0}
C.dGj.prototype={
$0(){return this.a.r=21},
$S:0}
C.dGv.prototype={
$0(){var w=this.a
return w.m(new C.dGi(w))},
$S:0}
C.dGi.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dGw.prototype={
$0(){var w=this.a
return w.m(new C.dGh(w))},
$S:0}
C.dGh.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dGx.prototype={
$0(){var w=this.a
return w.m(new C.dGg(w))},
$S:0}
C.dGg.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dGy.prototype={
$0(){var w=this.a
return w.m(new C.dGf(w))},
$S:0}
C.dGf.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dGz.prototype={
$0(){var w=this.a
return w.m(new C.dGe(w))},
$S:0}
C.dGe.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dGr.prototype={
$0(){var w=this.a
return w.m(new C.dGd(w))},
$S:0}
C.dGd.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dX3.prototype={
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
e[r]=new B.t(p,i)
q=d[r]
d[r]=new B.t(q.a+p*s,q.b+i*s)}},
$S:1877}
C.dWU.prototype={
$0(){return C.wV(this.b,this.a.d,"galaxy")},
$S:0}
C.dWV.prototype={
$0(){var w=this.a
return w.m(new C.dWT(w,this.b))},
$S:0}
C.dWT.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_b()},
$S:0}
C.dWW.prototype={
$0(){var w=this.a
return w.m(new C.dWS(w))},
$S:0}
C.dWS.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_b()}w.cwA()},
$S:0}
C.dWX.prototype={
$1(d){var w=this.a
return w.m(new C.dWR(w,d))},
$S:7}
C.dWR.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_b()},
$S:0}
C.dWY.prototype={
$1(d){var w=this.a
return w.m(new C.dWQ(w,d))},
$S:7}
C.dWQ.prototype={
$0(){var w=this.a
w.r=this.b
w.a_b()},
$S:0}
C.dWZ.prototype={
$1(d){var w=this.a
return w.m(new C.dWP(w,d))},
$S:7}
C.dWP.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dX_.prototype={
$1(d){var w=this.a
return w.m(new C.dWO(w,d))},
$S:7}
C.dWO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dX0.prototype={
$0(){var w=this.a
return w.m(new C.dWN(w))},
$S:0}
C.dWN.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dX1.prototype={
$0(){var w=this.a
return w.m(new C.dWM(w))},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dX2.prototype={
$0(){var w=this.a
return w.m(new C.dWL(w))},
$S:0}
C.dWL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dcp.prototype={
$6(d,e,f,g,h,i){return g.aa(0,new B.t((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1878}
C.eqq.prototype={
$0(){return C.wV(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eqr.prototype={
$0(){var w=this.a
return w.m(new C.eqp(w))},
$S:0}
C.eqp.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.eqs.prototype={
$0(){var w=this.a
return w.m(new C.eqo(w))},
$S:0}
C.eqo.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.eqt.prototype={
$0(){var w=this.a
return w.m(new C.eqn(w))},
$S:0}
C.eqn.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.m(new C.eqm(w))},
$S:0}
C.eqm.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.eqv.prototype={
$1(d){var w=this.a
return w.m(new C.eql(w,d))},
$S:7}
C.eql.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eqw.prototype={
$1(d){var w=this.a
return w.m(new C.eqk(w,d))},
$S:7}
C.eqk.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eqx.prototype={
$1(d){var w=this.a
return w.m(new C.eqj(w,d))},
$S:7}
C.eqj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eqy.prototype={
$1(d){var w=this.a
return w.m(new C.eqi(w,d))},
$S:7}
C.eqi.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aM3.prototype
w.bw6=w.t
w=C.aLd.prototype
w.bve=w.t
w=C.aLe.prototype
w.bvf=w.t
w=C.aLi.prototype
w.bvj=w.t
w=C.aMU.prototype
w.bx3=w.t
w=C.aM1.prototype
w.bw4=w.t
w=C.aMa.prototype
w.bwd=w.t
w=C.aMf.prototype
w.bwi=w.t
w=C.axK.prototype
w.bsm=w.t
w=C.axL.prototype
w.bsn=w.t
w=C.aJH.prototype
w.btE=w.t
w=C.aLr.prototype
w.bvs=w.t
w=C.aLf.prototype
w.bvg=w.t
w=C.aLw.prototype
w.bvy=w.t
w=C.aLY.prototype
w.bw0=w.t
w=C.aMn.prototype
w.bwq=w.t
w=C.aLB.prototype
w.bvE=w.t
w=C.aLC.prototype
w.bvF=w.t
w=C.aLD.prototype
w.bvG=w.t
w=C.aM6.prototype
w.bw9=w.t
w=C.aM9.prototype
w.bwc=w.t
w=C.aLc.prototype
w.bvd=w.t
w=C.aLz.prototype
w.bvB=w.t
w=C.aM5.prototype
w.bw8=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aEk.prototype,"gaww","c4z",1)
var r
v(r=C.aCQ.prototype,"gccP","ccQ",41)
w(r,"gc58","aYv",1)
w(C.aCS.prototype,"gc6R","c6S",1)
u(C.aD8.prototype,"gc6X","c6Y",40)
w(r=C.aHl.prototype,"gcwg","cwh",1)
w(r,"gc6Z","adU",1)
w(r,"gchg","chh",1)
w(r,"gc6W","adT",4)
w(r=C.aEj.prototype,"gbGT","a9o",4)
w(r,"gcgx","b0M",1)
w(r,"gcki","agm",4)
t(r,"gc70","adV",4)
w(C.aEz.prototype,"gbYo","bYp",1)
t(r=C.a4o.prototype,"gBp","a8",1)
v(r,"gcTo","anf",0)
v(r,"gcPT","LL",0)
w(r,"gcVz","bi6",1)
s(C.aiE.prototype,"gc7l",0,5,null,["$5"],["qs"],42,0,0)
w(r=C.aDk.prototype,"gc7m","c7n",1)
w(r,"gcn7","agI",4)
w(r,"gcd4","af2",4)
w(r,"gcuh","ahO",4)
w(r=C.aEM.prototype,"gc8C","c8D",1)
t(r,"gc8z","aZI",1)
w(C.aE7.prototype,"gc8A","axv",1)
t(C.aEq.prototype,"gc8E","c8F",1)
v(r=C.aDv.prototype,"gc9j","c9k",56)
w(r,"gbOT","bOU",1)
w(r=C.aDw.prototype,"gcwJ","cwK",1)
w(r,"gc9o","c9p",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ajS,C.G9,C.uU,C.aS_,C.a32,C.ba1,C.c2I,C.yb,C.Cn,C.ns,C.baJ,C.AE,C.bsq,C.qb,C.qR,C.Cr,C.Ze,C.aeF,C.a0t,C.CB,C.abB,C.abR,C.adL,C.FU,C.blf,C.Q0,C.eb,C.tz,C.aah,C.abn,C.a4o,C.mI,C.baK,C.fN,C.md,C.btK,C.aIb,C.qK,C.ab2,C.ab3,C.v7,C.Pf,C.y9,C.Pe,C.btF,C.PJ,C.aeL])
u(B.hS,[C.fx5,C.fmD,C.ftQ,C.ftR,C.fx2,C.fx3,C.e9n,C.e9G,C.enV,C.ens,C.ent,C.enu,C.env,C.enw,C.enx,C.eny,C.enz,C.enq,C.enr,C.enp,C.enQ,C.enR,C.enS,C.dGF,C.dGH,C.dGK,C.dGV,C.c2J,C.c2K,C.fgs,C.fgt,C.fgu,C.fgB,C.fgC,C.fgD,C.dIH,C.dIo,C.dII,C.dIj,C.dIe,C.dIg,C.dIm,C.dIz,C.dIx,C.dIy,C.dIw,C.dIt,C.dIv,C.eXR,C.eXy,C.eXF,C.eXO,C.eXs,C.dje,C.djf,C.djb,C.djc,C.djd,C.djg,C.djh,C.dji,C.djj,C.djk,C.djl,C.djm,C.djn,C.djo,C.emR,C.emS,C.emT,C.emU,C.emP,C.emQ,C.enl,C.emY,C.en_,C.emK,C.enh,C.enf,C.eng,C.ene,C.end,C.emM,C.ez1,C.ez_,C.eyO,C.eyS,C.eyN,C.eyT,C.eyU,C.eyY,C.eFc,C.eFi,C.bMt,C.bME,C.bMz,C.bMF,C.bMH,C.bMu,C.bMs,C.bMM,C.bMA,C.bMD,C.bMC,C.bMB,C.bH4,C.fIN,C.fIQ,C.fIO,C.bGM,C.bGH,C.bGG,C.bH3,C.bGW,C.bGX,C.bGV,C.bGY,C.bGw,C.bGy,C.bGu,C.bGv,C.bGm,C.bGn,C.fgE,C.fgF,C.fgG,C.fgr,C.fgH,C.fgq,C.fgI,C.fgv,C.fgp,C.fgw,C.fgo,C.fgx,C.fgn,C.fgy,C.fgl,C.fgm,C.fgz,C.fgj,C.fgk,C.fgA,C.fgi,C.dTe,C.dTf,C.dT4,C.dT0,C.dTd,C.dTi,C.cDT,C.fNv,C.fNw,C.chG,C.eJC,C.dSQ,C.dSR,C.dSS,C.dSU,C.ehc,C.eEV,C.eF3,C.eF_,C.eF1,C.ega,C.egb,C.egc,C.fRk,C.cuA,C.dYg,C.dXG,C.dXF,C.dXR,C.dXS,C.dXQ,C.dXT,C.dYa,C.dYb,C.dYc,C.eFL,C.eyp,C.eyq,C.eyr,C.eyw,C.eyx,C.eyg,C.f_d,C.f_e,C.dYN,C.dYG,C.dYI,C.dYJ,C.dYK,C.dYL,C.dYi,C.eYm,C.dGA,C.dGo,C.dGn,C.dGm,C.dGs,C.dX3,C.dWX,C.dWY,C.dWZ,C.dX_,C.dcp,C.eqv,C.eqw,C.eqx,C.eqy])
u(B.k7,[C.fx4,C.e9s,C.e9q,C.enB,C.enO,C.dIf,C.dIC,C.dOz,C.eXU,C.eXV,C.eXx,C.eXK,C.eXL,C.eXG,C.eXM,C.eXr,C.emN,C.emO,C.enk,C.enc,C.en1,C.eFb,C.bMG,C.bMI,C.bMK,C.bMv,C.bMx,C.bH5,C.cn4,C.fIP,C.bGF,C.bH1,C.bH0,C.dTc,C.cDU,C.dPt,C.dPr,C.dPl,C.chJ,C.dH8,C.dH3,C.ehe,C.dY2,C.dXD,C.dfh,C.eFQ,C.eyt,C.eyf,C.dYj,C.dYl,C.dYh,C.dGq])
u(B.ag,[C.Vw,C.VT,C.Uq,C.Uu,C.Nr,C.aHk,C.VS,C.W6,C.Wh,C.aiC,C.V5,C.axr,C.UP,C.Wn,C.Vd,C.Ur,C.V4,C.VN,C.VX,C.Wg,C.VM,C.Vj,C.Wj,C.W5,C.Vk,C.VY,C.Up,C.Vh,C.VU])
u(B.ah,[C.bjO,C.aM3,C.aLd,C.aLi,C.aD8,C.aMU,C.aM1,C.aMa,C.aMf,C.axK,C.bwR,C.aJH,C.aLr,C.aMn,C.aLw,C.aLf,C.bjj,C.aE7,C.aEq,C.bku,C.aLY,C.aLB,C.bky,C.aM9,C.aLD,C.aM6,C.aLc,C.aLz,C.aM5])
u(B.jb,[C.e9l,C.e9m,C.e9y,C.e9z,C.e9u,C.e9t,C.e9v,C.e9r,C.e9w,C.e9p,C.e9x,C.e9o,C.e9C,C.e9B,C.e9D,C.e9A,C.e9E,C.e9F,C.e9H,C.enU,C.enW,C.enX,C.enD,C.enC,C.enA,C.enJ,C.enK,C.enG,C.enL,C.enF,C.enM,C.enN,C.enE,C.enP,C.enI,C.enT,C.enH,C.dH1,C.dH0,C.dGE,C.dH2,C.dGG,C.dGI,C.dGJ,C.dGL,C.dGB,C.dGC,C.dGD,C.dGS,C.dGT,C.dGU,C.dGR,C.dGW,C.dGQ,C.dGX,C.dGP,C.dGY,C.dGO,C.dGZ,C.dGN,C.dH_,C.dGM,C.dIl,C.dIk,C.dIp,C.dIh,C.dIi,C.dIq,C.dIr,C.dIs,C.dIn,C.dId,C.dIB,C.dIA,C.dID,C.dIE,C.dIF,C.dIu,C.dIG,C.cOf,C.dOx,C.dOw,C.dOy,C.fgT,C.fgU,C.fgV,C.fgW,C.fgX,C.fgY,C.fgZ,C.fh_,C.fh0,C.eXT,C.eXS,C.eXA,C.eXz,C.eXv,C.eXu,C.eXw,C.eXt,C.eXI,C.eXH,C.eXJ,C.eXB,C.eXN,C.eXE,C.eXP,C.eXD,C.eXQ,C.eXC,C.emW,C.emL,C.emV,C.emH,C.emX,C.emZ,C.emI,C.emJ,C.enj,C.eni,C.en9,C.ena,C.enb,C.en5,C.en6,C.en4,C.en7,C.en3,C.en8,C.en2,C.en0,C.dja,C.ez0,C.eyD,C.eyC,C.eyM,C.eyV,C.eyL,C.eyW,C.eyK,C.eyX,C.eyJ,C.eyI,C.eyZ,C.eyH,C.eyP,C.eyG,C.eyQ,C.eyF,C.eyR,C.eyE,C.eFa,C.eF9,C.eFd,C.eF8,C.eFe,C.eF7,C.eFf,C.eF6,C.eFg,C.eF5,C.eFh,C.eF4,C.bMJ,C.bML,C.bMw,C.bMy,C.bGJ,C.bGK,C.bGI,C.bGL,C.bGN,C.bGz,C.bGA,C.bGB,C.bGC,C.bGD,C.bGE,C.bH2,C.bGc,C.bGT,C.bGU,C.bGR,C.bGS,C.bGP,C.bGQ,C.bGZ,C.bGO,C.bH_,C.bGd,C.bGx,C.bGj,C.bGk,C.bGi,C.bGl,C.bGh,C.bGo,C.bGp,C.bGq,C.bGr,C.bGg,C.bGs,C.bGf,C.bGt,C.bGe,C.dT5,C.dTg,C.dTh,C.dT3,C.dT2,C.dT1,C.dTa,C.dT8,C.dT9,C.dTb,C.dT6,C.dT7,C.dTj,C.dTk,C.dTl,C.dTm,C.dTn,C.dPu,C.dPs,C.dPq,C.dPp,C.dPo,C.dPn,C.dPm,C.dPi,C.dPh,C.dPk,C.dPj,C.fh8,C.fh9,C.fha,C.fhb,C.fhc,C.fhd,C.fhe,C.fhf,C.chI,C.chH,C.eJD,C.eJz,C.eJy,C.eJB,C.eJA,C.dVK,C.dVL,C.dVF,C.dVH,C.dVI,C.dVG,C.dVJ,C.dH9,C.dH6,C.dH5,C.dH7,C.dH4,C.dSP,C.dSO,C.dSN,C.dSM,C.dST,C.dSL,C.dSK,C.dSV,C.dSJ,C.dSW,C.dSI,C.dSX,C.dSY,C.dSH,C.eh8,C.eh9,C.eh7,C.eha,C.eh6,C.ehd,C.ehf,C.ehb,C.ehg,C.er3,C.er4,C.er1,C.er2,C.er0,C.er5,C.er6,C.er7,C.er8,C.eEZ,C.eF0,C.eEY,C.eEX,C.eF2,C.eEW,C.egd,C.ege,C.eg6,C.eg5,C.eg7,C.eg4,C.eg8,C.eg3,C.eg9,C.eg2,C.eg1,C.eg0,C.eg_,C.cuB,C.cuC,C.fRj,C.cux,C.cuw,C.cuD,C.cuy,C.cuz,C.chE,C.dYf,C.dXJ,C.dXH,C.dXI,C.dXE,C.dY1,C.dXK,C.dXL,C.dY3,C.dXP,C.dY7,C.dY0,C.dY8,C.dY_,C.dY9,C.dXZ,C.dXY,C.dXX,C.dXW,C.dYd,C.dXV,C.dYe,C.dXU,C.dY4,C.dXO,C.dY5,C.dXN,C.dY6,C.dXM,C.dXC,C.dXB,C.dfg,C.fh1,C.fh2,C.fh3,C.fh4,C.fh5,C.fh6,C.fh7,C.eFO,C.eFP,C.eFN,C.eFM,C.eyh,C.eys,C.eyu,C.eyo,C.eyv,C.eyn,C.eym,C.eyy,C.eyl,C.eyz,C.eyk,C.eyA,C.eyj,C.eyB,C.eyi,C.eye,C.eyd,C.f_c,C.dYk,C.dYz,C.dYq,C.dYA,C.dYp,C.dYB,C.dYy,C.dYF,C.dYx,C.dYw,C.dYH,C.dYv,C.dYu,C.dYt,C.dYs,C.dYM,C.dYr,C.dYC,C.dYo,C.dYD,C.dYn,C.dYE,C.dYm,C.erb,C.erc,C.era,C.erd,C.er9,C.dGp,C.dGl,C.dGt,C.dGk,C.dGu,C.dGj,C.dGv,C.dGi,C.dGw,C.dGh,C.dGx,C.dGg,C.dGy,C.dGf,C.dGz,C.dGe,C.dGr,C.dGd,C.dWU,C.dWV,C.dWT,C.dWW,C.dWS,C.dWR,C.dWQ,C.dWP,C.dWO,C.dX0,C.dWN,C.dX1,C.dWM,C.dX2,C.dWL,C.eqq,C.eqr,C.eqp,C.eqs,C.eqo,C.eqt,C.eqn,C.equ,C.eqm,C.eql,C.eqk,C.eqj,C.eqi])
t(C.bx0,C.aM3)
t(C.aEk,C.bx0)
u(B.mT,[C.bgU,C.bb1,C.brP,C.b9K,C.bqt,C.bpV,C.bao,C.bpX,C.btU,C.bgS,C.brK,C.aiE,C.b8Y,C.buV,C.aey,C.bv6,C.bpW,C.blg,C.bfm,C.brI,C.baA,C.brg,C.b9Z,C.bfd,C.bqw])
t(C.aLe,C.aLd)
t(C.aCQ,C.aLe)
t(C.bwP,C.aLi)
t(C.aCS,C.bwP)
u(B.lW,[C.Ks,C.a0g,C.Jq])
u(B.av,[C.bqR,C.aeQ,C.adH,C.Q9,C.brk,C.a8h,C.bd8,C.b6K,C.f4,C.hn,C.b6L,C.j6,C.Fj])
t(C.aHl,C.aMU)
t(C.bgR,B.oV)
t(C.aEj,C.aM1)
t(C.bkm,C.aMa)
t(C.aEz,C.aMf)
t(C.axL,C.axK)
t(C.aiD,C.axL)
t(C.aDk,C.bwR)
t(C.b8Z,C.aJH)
t(C.bjh,C.aLr)
t(C.bx7,C.aMn)
t(C.aEM,C.bx7)
t(C.bwS,C.aLw)
t(C.bjq,C.bwS)
t(C.bwO,C.aLf)
t(C.bj3,C.bwO)
t(C.bx_,C.aLY)
t(C.bk_,C.bx_)
t(C.aLC,C.aLB)
t(C.aDv,C.aLC)
t(C.bx4,C.aM9)
t(C.bkl,C.bx4)
t(C.bwU,C.aLD)
t(C.aDw,C.bwU)
t(C.bx2,C.aM6)
t(C.bki,C.bx2)
t(C.bwN,C.aLc)
t(C.bj2,C.bwN)
t(C.bwT,C.aLz)
t(C.bjt,C.bwT)
t(C.bx1,C.aM5)
t(C.bkh,C.bx1)
w(C.aM3,B.cq)
w(C.bx0,C.qK)
w(C.aLd,B.cq)
w(C.aLe,C.qK)
w(C.aLi,B.cq)
w(C.bwP,C.qK)
w(C.aMU,B.eT)
w(C.aM1,B.cq)
w(C.aMa,B.cq)
w(C.aMf,B.cq)
w(C.axK,B.cq)
w(C.axL,C.qK)
w(C.aJH,B.cq)
v(C.bwR,B.ez)
w(C.aLr,B.cq)
w(C.aLf,B.cq)
w(C.bwO,C.qK)
w(C.aLw,B.cq)
w(C.bwS,C.qK)
w(C.aLY,B.cq)
w(C.bx_,C.qK)
w(C.aMn,B.cq)
w(C.bx7,C.qK)
w(C.aLB,B.cq)
w(C.aLC,C.qK)
w(C.aLD,B.cq)
w(C.bwU,C.qK)
w(C.aM6,B.cq)
w(C.bx2,C.qK)
w(C.aM9,B.cq)
w(C.bx4,C.qK)
w(C.aLc,B.cq)
w(C.bwN,C.qK)
w(C.aLz,B.cq)
w(C.bwT,C.qK)
w(C.aM5,B.cq)
w(C.bx1,C.qK)})()
B.jL(b.typeUniverse,JSON.parse('{"Vw":{"ag":[],"v":[]},"bjO":{"ah":["Vw"]},"VT":{"ag":[],"v":[]},"aEk":{"ah":["VT"]},"bgU":{"aC":[]},"Uq":{"ag":[],"v":[]},"aCQ":{"ah":["Uq"]},"Uu":{"ag":[],"v":[]},"aCS":{"ah":["Uu"]},"bb1":{"aC":[]},"aeQ":{"av":[],"v":[]},"adH":{"av":[],"v":[]},"aHk":{"ag":[],"v":[]},"Nr":{"ag":[],"v":[]},"aD8":{"ah":["Nr"]},"bqR":{"av":[],"v":[]},"Q9":{"av":[],"v":[]},"brP":{"aC":[]},"brk":{"av":[],"v":[]},"b9K":{"aC":[]},"aHl":{"ah":["aHk"]},"bqt":{"aC":[]},"bpV":{"aC":[]},"bao":{"aC":[]},"bpX":{"aC":[]},"btU":{"aC":[]},"VS":{"ag":[],"v":[]},"bgR":{"aC":[]},"aEj":{"ah":["VS"]},"bgS":{"aC":[]},"W6":{"ag":[],"v":[]},"Wh":{"ag":[],"v":[]},"bkm":{"ah":["W6"]},"brK":{"aC":[]},"aEz":{"ah":["Wh"]},"aiE":{"aC":[]},"aiC":{"ag":[],"v":[]},"aiD":{"ah":["aiC"]},"V5":{"ag":[],"v":[]},"axr":{"ag":[],"v":[]},"aDk":{"ah":["V5"],"ez":[]},"b8Z":{"ah":["axr"]},"b8Y":{"aC":[]},"UP":{"ag":[],"v":[]},"bjh":{"ah":["UP"]},"buV":{"aC":[]},"aey":{"aC":[]},"a8h":{"av":[],"v":[]},"Wn":{"ag":[],"v":[]},"Vd":{"ag":[],"v":[]},"Ur":{"ag":[],"v":[]},"V4":{"ag":[],"v":[]},"VN":{"ag":[],"v":[]},"VX":{"ag":[],"v":[]},"Wg":{"ag":[],"v":[]},"VM":{"ag":[],"v":[]},"aEM":{"ah":["Wn"]},"bv6":{"aC":[]},"bjq":{"ah":["Vd"]},"bpW":{"aC":[]},"bj3":{"ah":["Ur"]},"bjj":{"ah":["V4"]},"blg":{"aC":[]},"aE7":{"ah":["VN"]},"aEq":{"ah":["VX"]},"bku":{"ah":["Wg"]},"bk_":{"ah":["VM"]},"bd8":{"av":[],"v":[]},"b6K":{"av":[],"v":[]},"f4":{"av":[],"v":[]},"hn":{"av":[],"v":[]},"b6L":{"av":[],"v":[]},"j6":{"av":[],"v":[]},"Fj":{"av":[],"v":[]},"Vj":{"ag":[],"v":[]},"aDv":{"ah":["Vj"]},"bfm":{"aC":[]},"Wj":{"ag":[],"v":[]},"bky":{"ah":["Wj"]},"W5":{"ag":[],"v":[]},"Vk":{"ag":[],"v":[]},"VY":{"ag":[],"v":[]},"bkl":{"ah":["W5"]},"brI":{"aC":[]},"aDw":{"ah":["Vk"]},"baA":{"aC":[]},"bki":{"ah":["VY"]},"brg":{"aC":[]},"Up":{"ag":[],"v":[]},"Vh":{"ag":[],"v":[]},"VU":{"ag":[],"v":[]},"bj2":{"ah":["Up"]},"b9Z":{"aC":[]},"bjt":{"ah":["Vh"]},"bfd":{"aC":[]},"bkh":{"ah":["VU"]},"bqw":{"aC":[]}}'))
B.G6(b.typeUniverse,JSON.parse('{"qK":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.ax
return{x:w("m4<u?>"),G:w("u"),J:w("bu<n,L>"),R:w("dD<n>"),Z:w("a1"),M:w("O<df>"),f5:w("O<a2Z>"),h:w("O<a32>"),V:w("O<ac>"),O:w("O<u>"),ey:w("O<T>"),dh:w("O<HK>"),aJ:w("O<aA<aD>>"),w:w("O<a1>"),Q:w("O<ai<u>>"),B:w("O<ai<HK>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<n>>"),b:w("O<ai<L>>"),fA:w("O<ai<H?>>"),C:w("O<a7<n,aD>>"),g:w("O<t>"),bz:w("O<tz>"),ds:w("O<a8E>"),v:w("O<he>"),L:w("O<+(n,n)>"),fT:w("O<+(L,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a1)>"),e:w("O<+(n,L,L,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,L,L,a7<n,L>)>"),_:w("O<uU>"),q:w("O<cS>"),fQ:w("O<aah>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wj>"),m:w("O<ab2>"),p:w("O<v>"),bL:w("O<abn>"),D:w("O<lp>"),a_:w("O<abB>"),cB:w("O<ns>"),ba:w("O<abR>"),d9:w("O<PJ>"),eW:w("O<Cr>"),fY:w("O<Ze>"),ed:w("O<Q0>"),g4:w("O<blf>"),ac:w("O<adL>"),cd:w("O<CB>"),fr:w("O<aeF>"),e4:w("O<a0t>"),r:w("O<aeL>"),au:w("O<aIb>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tz?>"),bN:w("O<H?>"),gJ:w("cy<aiD>"),z:w("cy<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a7<n,@>"),f:w("a7<@,@>"),bd:w("N<eb,n>"),fR:w("N<+(L,v),v>"),l:w("iE"),gA:w("zn"),gD:w("vW"),a:w("cr"),K:w("aD"),W:w("tz"),E:w("eb"),g7:w("C8"),N:w("n"),bO:w("as"),k:w("l3"),Y:w("bp<L>"),cL:w("ab3"),gj:w("cz<n>"),aC:w("cz<H?>"),dg:w("ea<qR>"),F:w("ba1"),a2:w("Cn"),f3:w("qR"),es:w("FU"),U:w("n4"),y:w("R"),i:w("L"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q4?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYw=new B.df(0,0.1)
D.b_b=new C.aS_(0,0,0)
D.KH=new C.aS_(0,0.5,0)
D.b_K=new B.ay(A.bo,1,A.r,-1)
D.b1c=new B.aX(0,1/0,0,290)
D.b1j=new B.aX(16,1/0,16,1/0)
D.b2y=new B.o(A.be,null,null,null,null,null,A.a6)
D.fab=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMt=new B.y("\u26a1",null,D.fab,null,null,null,null,null,null,null,null,null)
D.b74=new B.cn(A.A,null,null,D.fMt,null)
D.aRM=new B.F(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aRM,null,A.L,null,null,null,null,null,null,null)
D.eg4=new B.D(A.o4,D.fC9,null)
D.b7d=new B.cn(A.A,null,null,D.eg4,null)
D.fG2=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kP,null,A.L,null,null,null,null,null,null,null)
D.eg8=new B.D(A.o4,D.fG2,null)
D.b7y=new B.cn(A.A,null,null,D.eg8,null)
D.flq=new B.F(!0,A.k6,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKT=new B.y("Draw anywhere",null,D.flq,null,null,null,null,null,null,null,null,null)
D.b7D=new B.cn(A.A,null,null,D.fKT,null)
D.fsd=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aRM,null,A.L,null,null,null,null,null,null,null)
D.egS=new B.D(A.FS,D.fsd,null)
D.b7W=new B.cn(A.A,null,null,D.egS,null)
D.ad2=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.baC=new B.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.bbs=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.WG=new B.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bby=new B.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bbD=new B.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bbI=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bcV=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bd0=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bdn=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.beD=new B.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.aer=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bf6=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.AV=new B.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bg2=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bgJ=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.af5=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bh4=new B.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bho=new B.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bhG=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.afr=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Xz=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bjm=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bjp=new B.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bjt=new B.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.bjC=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.afV=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bk0=new B.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.LK=new B.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.bld=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.blm=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blB=new B.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.blF=new B.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.blN=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.vC=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.agK=new B.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bn_=new B.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.bnN=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.boh=new B.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.aha=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.btm=new B.bb(11e6)
D.ai8=new B.Q(0,0,9,0)
D.bv_=new B.Q(10,10,10,6)
D.bv8=new B.Q(10,34,10,26)
D.bvg=new B.Q(10,6,10,2)
D.bvi=new B.Q(10,8,0,10)
D.bvU=new B.Q(12,8,8,8)
D.bvZ=new B.Q(14,0,14,22)
D.bw0=new B.Q(14,0,14,30)
D.aiF=new B.Q(14,10,8,12)
D.bx0=new B.Q(16,4,16,28)
D.bxb=new B.Q(16,8,16,12)
D.bzj=new B.Q(26,12,26,58)
D.bA7=new B.Q(4,4,6,2)
D.bA9=new B.Q(4,4,8,2)
D.bAL=new B.Q(8,14,8,12)
D.bAS=new B.Q(8,40,8,30)
D.bAW=new B.Q(8,6,16,0)
D.bAX=new B.Q(8,6,8,8)
D.bBh=new B.Q(0,0,1.5,0)
D.aZY=new B.H8(26,"saturation")
D.bBz=new B.z3(A.cU,D.aZY,null,A.ad0)
D.frj=new B.y("REACTION LAB",null,W.aSl,null,null,null,null,A.a1,null,1,null,null)
D.bBG=new B.bA(1,A.bd,D.frj,null)
D.fic=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new B.y("CORE PROTOCOL",null,D.fic,null,null,null,null,null,null,null,null,null)
D.bBU=new B.bA(1,A.bd,D.fuv,null)
D.fvg=new B.y("\ud83d\udce2 NGMY Ads",null,A.qA,null,null,null,null,A.eK,null,1,null,null)
D.bCD=new B.bA(1,A.bd,D.fvg,null)
D.fq2=new B.y("Wire selected",null,A.fK,null,null,null,null,null,null,null,null,null)
D.bCS=new B.bA(1,A.bd,D.fq2,null)
D.alQ=new B.a1(62712,"MaterialIcons",!1)
D.bIB=new B.a1(62878,"MaterialIcons",!1)
D.bIE=new B.a1(62908,"MaterialIcons",!1)
D.bIF=new B.a1(62931,"MaterialIcons",!1)
D.bII=new B.a1(62951,"MaterialIcons",!1)
D.bIZ=new B.a1(63070,"MaterialIcons",!1)
D.NX=new B.a1(63128,"MaterialIcons",!1)
D.GB=new B.a1(63726,"MaterialIcons",!1)
D.bKh=new B.a1(983122,"MaterialIcons",!1)
D.bKv=new B.a1(983247,"MaterialIcons",!1)
D.bKH=new B.a1(983415,"MaterialIcons",!1)
D.an8=new B.a1(983467,"MaterialIcons",!1)
D.bKX=new B.a1(983616,"MaterialIcons",!1)
D.bLp=new B.a1(984561,"MaterialIcons",!1)
D.bM_=new B.ae(A.rj,24,A.aT,null,null,null)
D.bMM=new B.ae(A.Oh,null,A.ae,null,null,null)
D.bNi=new B.ae(A.o9,21,A.ae,null,null,null)
D.bKg=new B.a1(983117,"MaterialIcons",!1)
D.bOF=new B.ae(D.bKg,28,A.c,null,null,null)
D.bOV=new B.ae(A.j9,18,null,null,null,null)
D.bQJ=new B.ae(A.ec,21,A.cs,null,null,null)
D.bQY=new B.ae(A.ob,null,A.ae,null,null,null)
D.bR7=new B.ae(A.a1q,21,A.ae,null,null,null)
D.bRY=new B.ae(A.eI,17,A.ae,null,null,null)
D.aou=new B.ae(A.eI,19,null,null,null,null)
D.qh=new B.ae(A.w6,21,A.ae,null,null,null)
D.bTu=new B.ae(A.NN,null,A.ae,null,null,null)
D.bUD=new B.ae(A.j9,21,A.ae,null,null,null)
D.bVu=new B.ae(A.fi,20,A.aB,null,null,null)
D.bW9=new B.ae(A.e3,null,A.aT,null,null,null)
D.bWu=new B.ae(A.oa,null,A.aB,null,null,null)
D.djs=w([A.d7,A.d0,A.d7],x.O)
D.bZw=new B.a9(A.a3,A.a8,A.x,D.djs,null,null)
D.cXq=w([A.bO,A.bl],x.O)
D.bZE=new B.a9(A.b3,A.b6,A.x,D.cXq,null,null)
D.bZR=new B.a9(A.b3,A.b6,A.x,A.ayI,null,null)
D.apv=new B.a9(A.b3,A.b6,A.x,M.a3a,null,null)
D.cV9=w([A.oJ,A.ii],x.O)
D.c_D=new B.a9(A.b3,A.b6,A.x,D.cV9,null,null)
D.cX8=w([A.e5,A.av],x.O)
D.apC=new B.a9(A.b3,A.b6,A.x,D.cX8,null,null)
D.ddr=w([A.dt,A.j4,A.bl],x.O)
D.c_W=new B.a9(A.a3,A.a8,A.x,D.ddr,null,null)
D.ddx=w([A.ha,A.cp],x.O)
D.c0g=new B.a9(A.b3,A.b6,A.x,D.ddx,null,null)
D.ctF=w([A.bO,A.dt],x.O)
D.c0p=new B.a9(A.a3,A.a8,A.x,D.ctF,null,null)
D.azq=w([A.e5,I.n3],x.O)
D.c0w=new B.a9(A.b3,A.b6,A.x,D.azq,null,null)
D.c0N=new B.a9(A.b3,A.b6,A.x,K.apY,null,null)
D.c1B=new B.a9(A.ax,A.aD,A.x,A.a37,null,null)
D.d5s=w([A.av,A.w],x.O)
D.c1M=new B.a9(A.b3,A.b6,A.x,D.d5s,null,null)
D.c1P=new B.a9(A.b3,A.b6,A.x,G.ayN,null,null)
D.blJ=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bmw=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cGr=w([A.M1,D.blJ,D.bmw],x.O)
D.c1Z=new B.a9(A.b3,A.b6,A.x,D.cGr,null,null)
D.ctZ=w([A.d8,A.h_],x.O)
D.c2e=new B.a9(A.b3,A.b6,A.x,D.ctZ,null,null)
D.c2J=w([0,2,4,6,7,9,11],x.t)
D.c2X=w([0,4,7],x.t)
D.c2Y=w([0,4,7,12],x.t)
D.c2Z=w([0,4,7,4],x.t)
D.ays=w([A.h8,A.pR],x.O)
D.axX=w([A.iI,A.cM],x.O)
D.awl=w([A.by,A.dD],x.O)
D.cP1=w([A.aT,A.d8],x.O)
D.cVv=w([A.cs,A.el],x.O)
D.deL=w([A.c7,A.lR],x.O)
D.avN=w([A.cY,A.k7],x.O)
D.cU0=w([A.bL,A.aJ],x.O)
D.c3k=w([D.ays,D.axX,A.a3f,D.awl,D.cP1,D.cVv,A.axs,D.deL,D.avN,D.cU0],x.Q)
D.c8_=w([120,220,380],x.t)
D.cbK=w([12,16,19,24],x.t)
D.cbU=w([1400,800,450,2400],x.t)
D.cgb=w([0,0.6,1],x.n)
D.ckl=w([250,450,900,1500],x.t)
D.baQ=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bm6=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bk2=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bpz=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bjc=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.av2=w([D.baQ,D.bm6,D.bk2,D.bpz,D.bjc],x.O)
D.eKZ=new B.z("type","Typewriter")
D.eDs=new B.z("bounce","Bounce")
D.eLQ=new B.z("wave","Wave")
D.eMV=new B.z("zoom","Zoom")
D.cB9=w([D.eKZ,D.eDs,D.eLQ,A.a75,K.aNw,D.eMV,K.aNB],x.L)
D.cBn=w([50,25,75],x.t)
D.cGY=w([0,5,10,15,18,20,25],x.t)
D.cPh=w([900,500,250,1600],x.t)
D.cSM=w([0.78,1],x.n)
D.cSP=w([0,2,4,7,9,12,14,16],x.t)
D.cTl=w([A.by,A.bD,A.bb,A.by],x.O)
D.a34=w([A.aw,A.bI,A.be,A.aR,A.nY],x.O)
D.cUP=w([A.av,A.aw,A.cY,A.bI,A.be,A.cC,A.c9,A.bD,A.WM],x.O)
D.a38=w([0.04,0.17,0.3],x.n)
D.eVk=new C.uU("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eVq=new C.uU("Medium engine","A good all-rounder.",0.3,0.9)
D.eVp=new C.uU("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hp=w([D.eVk,D.eVq,D.eVp],x._)
D.esX=new B.z(6,"Easy")
D.etG=new B.z(8,"Medium")
D.eoN=new B.z(10,"Hard")
D.cWi=w([D.esX,D.etG,D.eoN],x.I)
D.awL=w([0.55,0.78,1],x.n)
D.cXS=w([0.93,0.975,1],x.n)
D.awW=w([A.c,A.fZ,A.nP,A.av],x.O)
D.fPv=new C.y9("Moon",1737,4291941851)
D.fPs=new C.y9("Earth",6371,4281908728)
D.fPw=new C.y9("Neptune",24622,4284524026)
D.fPx=new C.y9("Saturn",58232,4294829706)
D.fPt=new C.y9("Jupiter",69911,4294677052)
D.fPy=new C.y9("Sun",696340,4294688548)
D.fPz=new C.y9("Sirius A",119e4,4290763774)
D.fPq=new C.y9("Arcturus",179e5,4294818420)
D.fPr=new C.y9("Betelgeuse",531e6,4294472049)
D.fPu=new C.y9("UY Scuti",667e6,4293870660)
D.Qs=w([D.fPv,D.fPs,D.fPw,D.fPx,D.fPt,D.fPy,D.fPz,D.fPq,D.fPr,D.fPu],B.ax("O<y9>"))
D.eQu=new B.bj("glow","Glow",A.a0z)
D.eO4=new B.bj("rainbow","Rainbow",A.no)
D.eOr=new B.bj("stars","Stars",A.ib)
D.eNP=new B.bj("sparks","Sparks",A.e3)
D.ePL=new B.bj("fire","Fire",A.w7)
D.cZK=w([D.eQu,D.eO4,D.eOr,D.eNP,D.ePL],x.c)
D.ax_=w([A.be,A.aw,A.bI,A.d0],x.O)
D.d_M=w([0.2,1],x.n)
D.eVh=new C.uU("Radar","Shows your height above the ground.",0.1,0)
D.eVi=new C.uU("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eVf=new C.uU("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ax7=w([D.eVh,D.eVi,D.eVf],x._)
D.d0O=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d12=w([47,100,220,470,1000],x.n)
D.d1A=w([0,2,4,7,9],x.t)
D.Iu={volts:0}
D.a4R=new B.bu(D.Iu,[3],x.J)
D.IS=new B.e9(["b","battery",0.2,0.3,D.a4R])
D.eak={on:0}
D.du1=new B.bu(D.eak,[1],x.J)
D.Dw=new B.e9(["s","switch",0.5,0.3,D.du1])
D.eT5=new B.e9(["l","bulb",0.8,0.3,A.jd])
D.cXx=w([D.IS,D.Dw,D.eT5],x.d)
D.Dv=new B.cx(["b",0,"s",0])
D.eS6=new B.cx(["s",1,"l",0])
D.aNF=new B.cx(["l",1,"b",1])
D.ddD=w([D.Dv,D.eS6,D.aNF],x.o)
D.cX0=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.enZ=new C.mI("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cXx,D.ddD,D.cX0)
D.aHA={ohms:0}
D.aFb=new B.bu(D.aHA,[220],x.J)
D.eSz=new B.e9(["r","resistor",0.5,0.3,D.aFb])
D.eTk=new B.e9(["d","led",0.8,0.3,A.jd])
D.dgP=w([D.IS,D.eSz,D.eTk],x.d)
D.eRs=new B.cx(["b",0,"r",0])
D.eS0=new B.cx(["r",1,"d",0])
D.eRy=new B.cx(["d",1,"b",1])
D.dpJ=w([D.eRs,D.eS0,D.eRy],x.o)
D.dhe=w(["led","diode","indicator"],x.s)
D.eo5=new C.mI("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dgP,D.dpJ,D.dhe)
D.a66={level:0}
D.dto=new B.bu(D.a66,[0.2],x.J)
D.eSF=new B.e9(["p","pot",0.5,0.3,D.dto])
D.eSH=new B.e9(["m","motor",0.8,0.3,A.jd])
D.cXP=w([D.IS,D.eSF,D.eSH],x.d)
D.eRr=new B.cx(["b",0,"p",0])
D.eRX=new B.cx(["p",1,"m",0])
D.eRT=new B.cx(["m",1,"b",1])
D.dlr=w([D.eRr,D.eRX,D.eRT],x.o)
D.ddk=w(["fan","motor","spin","dimmer"],x.s)
D.enX=new C.mI("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cXP,D.dlr,D.ddk)
D.a4O=new B.bu(D.a66,[0.9],x.J)
D.aNM=new B.e9(["s","solar",0.25,0.3,D.a4O])
D.aNL=new B.e9(["l","bulb",0.75,0.3,A.jd])
D.d_s=w([D.aNM,D.aNL],x.d)
D.eS3=new B.cx(["s",0,"l",0])
D.eRS=new B.cx(["l",1,"s",1])
D.cYz=w([D.eS3,D.eRS],x.o)
D.dm3=w(["solar","sun","without battery","no battery","free"],x.s)
D.eo_=new C.mI("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d_s,D.cYz,D.dm3)
D.eTn=new B.e9(["c","crank",0.25,0.3,D.a4O])
D.dbH=w([D.eTn,D.aNL],x.d)
D.eRv=new B.cx(["c",0,"l",0])
D.eRR=new B.cx(["l",1,"c",1])
D.dce=w([D.eRv,D.eRR],x.o)
D.dbP=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.enW=new C.mI("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dbH,D.dce,D.dbP)
D.dtn=new B.bu(D.a66,[0.7],x.J)
D.eSK=new B.e9(["t","turbine",0.25,0.3,D.dtn])
D.eSx=new B.e9(["m","motor",0.75,0.3,A.jd])
D.d67=w([D.eSK,D.eSx],x.d)
D.eSe=new B.cx(["t",0,"m",0])
D.eRU=new B.cx(["m",1,"t",1])
D.d56=w([D.eSe,D.eRU],x.o)
D.dau=w(["wind","turbine","windmill","water","hydro"],x.s)
D.enT=new C.mI("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d67,D.d56,D.dau)
D.aF8=new B.bu(D.Iu,[9],x.J)
D.a7c=new B.e9(["b","battery",0.2,0.3,D.aF8])
D.aNK=new B.e9(["r","radio",0.8,0.3,A.jd])
D.dmF=w([D.a7c,D.Dw,D.aNK],x.d)
D.eS8=new B.cx(["s",1,"r",0])
D.aNG=new B.cx(["r",1,"b",1])
D.c2F=w([D.Dv,D.eS8,D.aNG],x.o)
D.dld=w(["radio","music","listen"],x.s)
D.eo4=new C.mI("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dmF,D.c2F,D.dld)
D.dur=new B.bu(D.Iu,[12],x.J)
D.aNJ=new B.e9(["b","battery",0.2,0.3,D.dur])
D.eT6=new B.e9(["t","tv",0.8,0.3,A.jd])
D.cXz=w([D.aNJ,D.Dw,D.eT6],x.d)
D.eS9=new B.cx(["s",1,"t",0])
D.aNH=new B.cx(["t",1,"b",1])
D.deO=w([D.Dv,D.eS9,D.aNH],x.o)
D.dmC=w(["tv","television","screen","watch"],x.s)
D.enQ=new C.mI("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cXz,D.deO,D.dmC)
D.eSX=new B.e9(["z","buzzer",0.8,0.3,A.jd])
D.cDI=w([D.IS,D.Dw,D.eSX],x.d)
D.eSa=new B.cx(["s",1,"z",0])
D.eSs=new B.cx(["z",1,"b",1])
D.cSA=w([D.Dv,D.eSa,D.eSs],x.o)
D.djy=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eo1=new C.mI("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cDI,D.cSA,D.djy)
D.eSG=new B.e9(["h","heater",0.8,0.3,A.jd])
D.d9b=w([D.a7c,D.Dw,D.eSG],x.d)
D.eS5=new B.cx(["s",1,"h",0])
D.eRG=new B.cx(["h",1,"b",1])
D.cTh=w([D.Dv,D.eS5,D.eRG],x.o)
D.cnD=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.enR=new C.mI("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d9b,D.cTh,D.cnD)
D.eT8=new B.e9(["s","solar",0.2,0.25,D.a4O])
D.duv=new B.bu(D.aHA,[100],x.J)
D.eTb=new B.e9(["r","resistor",0.55,0.25,D.duv])
D.eTi=new B.e9(["c","capacitor",0.85,0.25,A.jd])
D.eSC=new B.e9(["q","resistor",0.55,0.6,D.aFb])
D.eT9=new B.e9(["d","led",0.85,0.6,A.jd])
D.dek=w([D.eT8,D.eTb,D.eTi,D.eSC,D.eT9],x.d)
D.eS4=new B.cx(["s",0,"r",0])
D.eS_=new B.cx(["r",1,"c",0])
D.eRx=new B.cx(["c",1,"s",1])
D.eRw=new B.cx(["c",0,"q",0])
D.eRZ=new B.cx(["q",1,"d",0])
D.eRz=new B.cx(["d",1,"c",1])
D.d31=w([D.eS4,D.eS_,D.eRx,D.eRw,D.eRZ,D.eRz],x.o)
D.db1=w(["capacitor","store","charge","flash"],x.s)
D.eo3=new C.mI("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dek,D.d31,D.db1)
D.eSN=new B.e9(["b","battery",0.15,0.3,D.a4R])
D.eTo=new B.e9(["l1","bulb",0.5,0.3,A.jd])
D.eSU=new B.e9(["l2","bulb",0.85,0.3,A.jd])
D.cVK=w([D.eSN,D.eTo,D.eSU],x.d)
D.eRq=new B.cx(["b",0,"l1",0])
D.eRO=new B.cx(["l1",1,"l2",0])
D.eRP=new B.cx(["l2",1,"b",1])
D.d6P=w([D.eRq,D.eRO,D.eRP],x.o)
D.dmn=w(["series","two bulbs","dim"],x.s)
D.enU=new C.mI("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cVK,D.d6P,D.dmn)
D.eaD={volts:0,charge:1}
D.duy=new B.bu(D.eaD,[1.5,0],x.J)
D.eTg=new B.e9(["b","battery",0.75,0.3,D.duy])
D.cVa=w([D.aNM,D.eTg],x.d)
D.eS2=new B.cx(["s",0,"b",0])
D.eRu=new B.cx(["b",1,"s",1])
D.d3k=w([D.eS2,D.eRu],x.o)
D.dba=w(["charge","rechargeable","flat","recharge"],x.s)
D.enS=new C.mI("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cVa,D.d3k,D.dba)
D.duq=new B.bu(D.Iu,[4.5],x.J)
D.eSI=new B.e9(["b","battery",0.2,0.3,D.duq])
D.aNI=new B.e9(["p","phone",0.8,0.3,A.jd])
D.d5Y=w([D.eSI,D.Dw,D.aNI],x.d)
D.eS7=new B.cx(["s",1,"p",0])
D.a7b=new B.cx(["p",1,"b",1])
D.diw=w([D.Dv,D.eS7,D.a7b],x.o)
D.djY=w(["phone","charger","usb","mobile"],x.s)
D.enY=new C.mI("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d5Y,D.diw,D.djY)
D.eSu=new B.e9(["f","fan",0.8,0.3,A.jd])
D.cfJ=w([D.IS,D.eSu],x.d)
D.eRp=new B.cx(["b",0,"f",0])
D.eRE=new B.cx(["f",1,"b",1])
D.cTN=w([D.eRp,D.eRE],x.o)
D.ddj=w(["fan","cool","air","wind"],x.s)
D.eo6=new C.mI("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cfJ,D.cTN,D.ddj)
D.eT0=new B.e9(["b","battery",0.15,0.2,D.a4R])
D.eSv=new B.e9(["a","ammeter",0.5,0.2,A.jd])
D.eSt=new B.e9(["l","bulb",0.85,0.2,A.jd])
D.eT2=new B.e9(["v","voltmeter",0.5,0.6,A.jd])
D.dbv=w([D.eT0,D.eSv,D.eSt,D.eT2],x.d)
D.eRn=new B.cx(["b",0,"a",0])
D.eRm=new B.cx(["a",1,"l",0])
D.eSg=new B.cx(["v",0,"l",0])
D.eSh=new B.cx(["v",1,"l",1])
D.d3b=w([D.eRn,D.eRm,D.aNF,D.eSg,D.eSh],x.o)
D.dpI=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eo2=new C.mI("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dbv,D.d3b,D.dpI)
D.eTr=new B.e9(["b","battery",0.15,0.2,D.aF8])
D.eSM=new B.e9(["t","tv",0.55,0.2,A.jd])
D.aF9=new B.bu(D.Iu,[5],x.J)
D.eSA=new B.e9(["c","buck",0.4,0.5,D.aF9])
D.eSO=new B.e9(["p","phone",0.8,0.5,A.jd])
D.d0Q=w([D.eTr,D.eSM,D.eSA,D.eSO],x.d)
D.eRt=new B.cx(["b",0,"t",0])
D.aND=new B.cx(["b",0,"c",0])
D.aNE=new B.cx(["c",1,"p",0])
D.d5V=w([D.eRt,D.aNH,D.aND,D.aNE,D.a7b],x.o)
D.d_1=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.enV=new C.mI("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d0Q,D.d5V,D.d_1)
D.eSB=new B.e9(["c","buck",0.5,0.3,D.aF9])
D.cT8=w([D.aNJ,D.eSB,D.aNI],x.d)
D.cXZ=w([D.aND,D.aNE,D.a7b],x.o)
D.cr4=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.enP=new C.mI("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cT8,D.cXZ,D.cr4)
D.eSS=new B.e9(["d","diode",0.5,0.3,A.jd])
D.d71=w([D.a7c,D.eSS,D.aNK],x.d)
D.eRo=new B.cx(["b",0,"d",0])
D.eRA=new B.cx(["d",1,"r",0])
D.cGf=w([D.eRo,D.eRA,D.aNG],x.o)
D.cZH=w(["diode","protect","backwards","one way"],x.s)
D.eo0=new C.mI("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d71,D.cGf,D.cZH)
D.Qw=w([D.enZ,D.eo5,D.enX,D.eo_,D.enW,D.enT,D.eo4,D.enQ,D.eo1,D.enR,D.eo3,D.enU,D.enS,D.enY,D.eo6,D.eo2,D.enV,D.enP,D.eo0],B.ax("O<mI>"))
D.hj0=new C.G9("Moon",1.62,A.dt,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hiZ=new C.G9("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hj1=new C.G9("Mercury",3.7,A.k5,"Mercury is small, so its gravity is like Mars.")
D.hiW=new C.G9("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hiY=new C.G9("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.hj_=new C.G9("Neptune",11.15,A.d0,"Neptune pulls a little harder than Earth.")
D.hiX=new C.G9("Jupiter",24.79,A.cY,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rs=w([D.hj0,D.hiZ,D.hj1,D.hiW,D.hiY,D.hj_,D.hiX],B.ax("O<G9>"))
D.d3_=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a3o=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d3J=w([0.2,0.5,0.8],x.n)
D.eYu=new B.cS(A.bk,A.J,4)
D.d46=w([D.eYu],x.q)
D.axD=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aXm=new C.Ks(0,"accordion")
D.cU8=w([A.jy,A.C7,A.BU],x.w)
D.d0g=w(["Mail","SMS","Ad"],x.s)
D.cUG=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hhd=new C.AE(D.aXm,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ays,D.cU8,D.d0g,D.cUG)
D.aaK=new C.Ks(1,"flip")
D.daW=w([A.rk,A_.GP,A.uk],x.w)
D.d5F=w(["Unlock","Verify","Secure"],x.s)
D.cT4=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hhc=new C.AE(D.aaK,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axX,D.daW,D.d5F,D.cT4)
D.aXn=new C.Ks(2,"towers")
D.d4r=w([A.yK,A.qe,A.hR],x.w)
D.d41=w(["Save","Grow","Earn"],x.s)
D.cH8=w(["","",""],x.s)
D.hhe=new C.AE(D.aXn,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a3f,D.d4r,D.d41,D.cH8)
D.aaL=new C.Ks(3,"assemble")
D.dbS=w([A.od,A.ho,A.e3],x.w)
D.d_E=w(["Launch","Charge","Shine"],x.s)
D.d8i=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hhg=new C.AE(D.aaL,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.awl,D.dbS,D.d_E,D.d8i)
D.aXo=new C.Ks(4,"carousel")
D.dbI=w([A.bb,A.f5],x.O)
D.d0p=w([A.o9,A.aml,A.Oo],x.w)
D.cW8=w(["Explore","Discover","Learn"],x.s)
D.d62=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hhb=new C.AE(D.aXo,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dbI,D.d0p,D.cW8,D.d62)
D.aXp=new C.Ks(5,"burst")
D.d3X=w([A.i5,A.tw],x.O)
D.cUB=w([A.l3,A.mC,A.ia],x.w)
D.cUX=w(["Cheer","Win","Love"],x.s)
D.cX6=w(["Make some noise","First place","Share the joy"],x.s)
D.hhf=new C.AE(D.aXp,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d3X,D.cUB,D.cUX,D.cX6)
D.axE=w([D.hhd,D.hhc,D.hhe,D.hhg,D.hhb,D.hhf],B.ax("O<AE>"))
D.eOV=new B.bj("skin","Skin",A.amm)
D.eQg=new B.bj("muscle","Muscles",A.O1)
D.ePZ=new B.bj("organ","Organs",A.ia)
D.bIk=new B.a1(62747,"MaterialIcons",!1)
D.eQ4=new B.bj("bone","Skeleton",D.bIk)
D.eQm=new B.bj("vessel","Blood vessels",A.qg)
D.d4x=w([D.eOV,D.eQg,D.ePZ,D.eQ4,D.eQm],x.c)
D.eVj=new C.uU("Simple legs","Light. Land gently.",0.15,0.2)
D.eVl=new C.uU("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eVo=new C.uU("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CC=w([D.eVj,D.eVl,D.eVo],x._)
D.d6c=w([1.77,3.55,7.15,16.7],x.n)
D.d8K=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eKt=new B.z("spiral","Spiral")
D.esU=new B.z("barred","Barred spiral")
D.eEz=new B.z("elliptical","Elliptical")
D.d9r=w([D.eKt,D.esU,D.eEz],x.L)
D.eR4=new B.cx(["beat",0.18,0.28,0])
D.eSb=new B.cx(["burst",0.7,0.2,0])
D.eSm=new B.cx(["delay",0.45,0.5,1])
D.eRW=new B.cx(["ripple",0.75,0.6,3])
D.d_n=w([D.eR4,D.eSb,D.eSm,D.eRW],x.e)
D.dai=w([O.lh,M.IR,F.T3],x.u)
D.hgr=new C.FU("First spark","A clock lights a burst and a ripple",D.d_n,D.dai)
D.eRD=new B.cx(["beat",0.15,0.3,1])
D.eQJ=new B.cx(["ripple",0.62,0.15,0])
D.eSi=new B.cx(["delay",0.4,0.45,0])
D.eRj=new B.cx(["ripple",0.7,0.45,0])
D.eR0=new B.cx(["delay",0.4,0.7,1])
D.eRY=new B.cx(["shake",0.75,0.75,0])
D.dnw=w([D.eRD,D.eQJ,D.eSi,D.eRj,D.eR0,D.eRY],x.e)
D.epQ=new B.z(2,4)
D.aNp=new B.z(4,5)
D.d2Q=w([O.lh,M.IR,F.T3,D.epQ,D.aNp],x.u)
D.hgt=new C.FU("Heartbeat","Two thumps, then a shake",D.dnw,D.d2Q)
D.eR9=new B.cx(["dice",0.15,0.7,1])
D.eSo=new B.cx(["echo",0.4,0.7,0])
D.eRh=new B.cx(["comet",0.7,0.5,4])
D.eSc=new B.cx(["burst",0.72,0.2,1])
D.eRB=new B.cx(["burst",0.3,0.25,0])
D.eRa=new B.cx(["pop",0.55,0.85,0])
D.cnb=w([D.eR9,D.eSo,D.eRh,D.eSc,D.eRB,D.eRa],x.e)
D.epe=new B.z(1,3)
D.epf=new B.z(1,4)
D.aNl=new B.z(0,5)
D.dbD=w([O.lh,S.uU,D.epe,D.epf,D.aNl],x.u)
D.hgs=new C.FU("Fireworks","Dice launch comets that burst in colour",D.cnb,D.dbD)
D.eRe=new B.cx(["beat",0.15,0.2,2])
D.eRL=new B.cx(["chance",0.4,0.2,0])
D.eR6=new B.cx(["ball",0.7,0.12,3])
D.eQU=new B.cx(["chance",0.4,0.5,1])
D.eSn=new B.cx(["ball",0.3,0.08,1])
D.eQN=new B.cx(["ripple",0.7,0.55,3])
D.cgc=w([D.eRe,D.eRL,D.eR6,D.eQU,D.eSn,D.eQN],x.e)
D.epR=new B.z(2,5)
D.cDr=w([O.lh,S.uU,M.a71,F.T4,D.epR],x.u)
D.hgq=new C.FU("Rain","Balls fall at random and splash",D.cgc,D.cDr)
D.eRM=new B.cx(["beat",0.12,0.45,2])
D.eSd=new B.cx(["toggle",0.38,0.2,0])
D.eSk=new B.cx(["wash",0.7,0.15,4])
D.eR8=new B.cx(["count3",0.38,0.45,0])
D.eSf=new B.cx(["burst",0.72,0.4,0])
D.eRC=new B.cx(["light",0.55,0.7,1])
D.eQV=new B.cx(["pop",0.8,0.8,4])
D.dei=w([D.eRM,D.eSd,D.eSk,D.eR8,D.eSf,D.eRC,D.eQV],x.e)
D.eqm=new B.z(3,6)
D.cjl=w([O.lh,S.uU,M.a71,F.T4,D.aNl,D.eqm],x.u)
D.hgo=new C.FU("Disco","A beat drives lights, washes and bursts",D.dei,D.cjl)
D.eSr=new B.cx(["button",0.12,0.2,0])
D.eQP=new B.cx(["delay",0.34,0.2,1])
D.eSq=new B.cx(["light",0.56,0.2,1])
D.eSj=new B.cx(["delay",0.56,0.45,1])
D.eRN=new B.cx(["ball",0.34,0.6,0])
D.eQT=new B.cx(["delay",0.34,0.8,1])
D.eQI=new B.cx(["burst",0.7,0.8,5])
D.c3n=w([D.eSr,D.eQP,D.eSq,D.eSj,D.eRN,D.eQT,D.eQI],x.e)
D.esw=new B.z(5,6)
D.djH=w([O.lh,S.uU,F.T3,F.T4,D.aNp,D.esw],x.u)
D.hgp=new C.FU("Domino","Tap the button and watch it run down the line",D.c3n,D.djH)
D.ay0=w([D.hgr,D.hgt,D.hgs,D.hgq,D.hgo,D.hgp],B.ax("O<FU>"))
D.d9z=w([0.05,0.15,0.25],x.n)
D.dat=w([1.5,3,4.5,9,12],x.n)
D.eNz=new B.bj("dice","Dice",A.p0)
D.eOB=new B.bj("coin","Coin",L.yE)
D.eQh=new B.bj("num","Number",A.yM)
D.daF=w([D.eNz,D.eOB,D.eQh],x.c)
D.daJ=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fPA=new C.Pf("Moon",1.62,0,4291941851)
D.fPB=new C.Pf("Mars",3.71,0.01,4294472049)
D.fPC=new C.Pf("Earth",9.81,1,4281908728)
D.fPE=new C.Pf("Jupiter",24.79,1.4,4294677052)
D.fPD=new C.Pf("Sun",274,2,4294688548)
D.z9=w([D.fPA,D.fPB,D.fPC,D.fPE,D.fPD],B.ax("O<Pf>"))
D.ay6=w([A.cs,A.aT,A.bo,A.aR,A.by,A.c7,A.cY,A.iI],x.O)
D.dbJ=w([A.c7,A.aR,A.dR,A.bo],x.O)
D.dcD=w([],x.h)
D.dcH=w([],x.B)
D.a3M=w([],x.m)
D.ehC=new C.eb("battery","Battery","\ud83d\udd0b",A.bo,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ehI=new C.eb("solar","Solar panel","\u2600\ufe0f",A.bI,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eim=new C.eb("crank","Hand crank","\ud83d\udd04",A.cY,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ehZ=new C.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ehu=new C.eb("buck","Step-down converter","\ud83d\udd3d",A.iI,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ehX=new C.eb("regulator","5 V regulator","\ud83e\uddca",A.bL,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eir=new C.eb("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.ei8=new C.eb("ldr","Light sensor","\ud83c\udf1e",A.dR,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ehN=new C.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eio=new C.eb("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ehm=new C.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iI,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ei9=new C.eb("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eib=new C.eb("bulb","Light bulb","\ud83d\udca1",A.dR,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ehK=new C.eb("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.ehO=new C.eb("motor","Motor","\u2699\ufe0f",A.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.ei5=new C.eb("buzzer","Buzzer","\ud83d\udd14",A.c7,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ehD=new C.eb("heater","Heater","\ud83d\udd25",A.cY,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ei0=new C.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ehT=new C.eb("radio","Radio","\ud83d\udcfb",A.nY,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ehQ=new C.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bb,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eht=new C.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ehA=new C.eb("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ehG=new C.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eit=new C.eb("speaker","Speaker","\ud83d\udd0a",A.c7,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eii=new C.eb("clock","Digital clock","\u23f0",A.bo,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ehW=new C.eb("calculator","Calculator","\ud83e\uddee",A.L6,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ehz=new C.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eis=new C.eb("router","WiFi router","\ud83d\udcf6",A.iI,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eiv=new C.eb("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ehp=new C.eb("toycar","Toy car","\ud83d\ude97",A.cY,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eiw=new C.eb("kettle","Kettle","\ud83e\uded6",A.ms,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ehx=new C.eb("lamp","Desk lamp","\ud83e\ude94",A.dR,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ehJ=new C.eb("lights","Party lights","\ud83c\udf84",A.nY,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ehU=new C.eb("fridge","Fridge","\ud83e\uddca",A.hl,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ehr=new C.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eij=new C.eb("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ehR=new C.eb("drone","Drone","\ud83d\ude81",A.bL,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ehw=new C.eb("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ehV=new C.eb("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eig=new C.eb("neon","Neon sign","\ud83e\udea7",A.c7,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ehs=new C.eb("microwave","Microwave","\ud83c\udf72",A.cY,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eia=new C.eb("doorbell","Doorbell","\ud83d\udd14",A.bI,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ehF=new C.eb("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.ei4=new C.eb("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eil=new C.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h7,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ehq=new C.eb("aquarium","Aquarium","\ud83d\udc20",A.bb,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ei_=new C.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dR,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.ei7=new C.eb("discoball","Disco ball","\ud83e\udea9",A.nY,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eiq=new C.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eho=new C.eb("toaster","Toaster","\ud83c\udf5e",A.dV,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eiu=new C.eb("ledstrip","LED strip","\ud83c\udf08",A.c7,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eif=new C.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.ei1=new C.eb("hairdryer","Hair dryer","\ud83d\udca8",A.i5,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eid=new C.eb("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ehy=new C.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eip=new C.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ehl=new C.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h7,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ehS=new C.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ehL=new C.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ei6=new C.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tt,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ehn=new C.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ehB=new C.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d0,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.ein=new C.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cC,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ei2=new C.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.ehY=new C.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eie=new C.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ehM=new C.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bo,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.ei3=new C.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eic=new C.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cY,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eih=new C.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ehk=new C.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c9,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.ehP=new C.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cC,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ehH=new C.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bb,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ehv=new C.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dR,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ehE=new C.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eik=new C.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QW=w([D.ehC,D.ehI,D.eim,D.ehZ,D.ehu,D.ehX,D.eir,D.ei8,D.ehN,D.eio,D.ehm,D.ei9,D.eib,D.ehK,D.ehO,D.ei5,D.ehD,D.ei0,D.ehT,D.ehQ,D.eht,D.ehA,D.ehG,D.eit,D.eii,D.ehW,D.ehz,D.eis,D.eiv,D.ehp,D.eiw,D.ehx,D.ehJ,D.ehU,D.ehr,D.eij,D.ehR,D.ehw,D.ehV,D.eig,D.ehs,D.eia,D.ehF,D.ei4,D.eil,D.ehq,D.ei_,D.ei7,D.eiq,D.eho,D.eiu,D.eif,D.ei1,D.eid,D.ehy,D.eip,D.ehl,D.ehS,D.ehL,D.ei6,D.ehn,D.ehB,D.ein,D.ei2,D.ehY,D.eie,D.ehM,D.ei3,D.eic,D.eih,D.ehk,D.ehP,D.ehH,D.ehv,D.ehE,D.eik],B.ax("O<eb>"))
D.dd4=w([0,0.46,0.82],x.n)
D.ddf=w([5,10,15,25,45,60],x.t)
D.ddB=w([-0.045,0.03,-0.015],x.n)
D.ddZ=w([0.9,0.97,1],x.n)
D.ayA=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uv=w([0.05,0.2,0.35],x.n)
D.cV0=w([D.LK,D.LK],x.O)
D.d_i=w([A.Fl,A.M],x.O)
D.cZl=w([A.ft,A.hy],x.O)
D.cT0=w([A.f5,A.nX],x.O)
D.cfH=w([A.lR,A.dx],x.O)
D.ayB=w([D.cV0,D.d_i,D.cZl,D.cT0,D.cfH],x.Q)
D.fPo=new C.v7("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fPp=new C.v7("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fPg=new C.v7("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fPn=new C.v7("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fPl=new C.v7("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fPh=new C.v7("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fPm=new C.v7("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fPi=new C.v7("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fPk=new C.v7("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fPj=new C.v7("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.CJ=w([D.fPo,D.fPp,D.fPg,D.fPn,D.fPl,D.fPh,D.fPm,D.fPi,D.fPk,D.fPj],B.ax("O<v7>"))
D.biS=new B.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bgl=new B.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dfh=w([D.LK,D.biS,D.bgl,A.aeo],x.O)
D.b3P=new B.ac(0,A.G,A.i7,A.dy,6)
D.dge=w([D.b3P],x.V)
D.eoq=new B.z(0,"AND")
D.epg=new B.z(1,"Adder")
D.epS=new B.z(2,"Blinker")
D.eqn=new B.z(3,"Memory")
D.dh0=w([D.eoq,D.epg,D.epS,D.eqn],x.I)
D.ayO=w([-104,0,104],x.n)
D.ayP=w([-14,3],x.n)
D.dhQ=w([-8,0,8],x.n)
D.ayX=w([-92,0,92],x.n)
D.die=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eVg=new C.uU("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eVn=new C.uU("Medium tank","Balanced.",0.35,1)
D.eVm=new C.uU("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.R9=w([D.eVg,D.eVn,D.eVm],x._)
D.nt=w([0.04,0.2,0.36],x.n)
D.az7=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ePY=new B.bj(D.aXm,"Fold",L.ani)
D.eP8=new B.bj(D.aaK,"Flip",A.Gq)
D.bID=new B.a1(62889,"MaterialIcons",!1)
D.eQf=new B.bj(D.aXn,"Rise",D.bID)
D.anw=new B.a1(983870,"MaterialIcons",!1)
D.eN4=new B.bj(D.aaL,"Assemble",D.anw)
D.eNd=new B.bj(D.aXo,"Spin",D.alQ)
D.eNa=new B.bj(D.aXp,"Pop",A.l3)
D.djE=w([D.ePY,D.eP8,D.eQf,D.eN4,D.eNd,D.eNa],B.ax("O<+(Ks,n,a1)>"))
D.azc=w([A.c7,A.dR,A.bu,A.aR,A.by,A.cs],x.O)
D.dk3=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dl3=w([3,4.5,5,6,9],x.n)
D.b4n=new B.ac(0,A.G,A.aW,A.J,16)
D.dlv=w([D.b4n],x.V)
D.Rc=w([A.c7,A.bI,A.bo,A.aR,A.by,A.cs,A.c,A.cY],x.O)
D.dm0=w(["solar","turbine","crank","pot"],x.s)
D.dmr=w([0,0.35,0.75,1],x.n)
D.eNs=new B.bj("drop","Drop",D.an8)
D.eNu=new B.bj("weight","Weight",T.anA)
D.eQ9=new B.bj("cannon","Newton's cannon",A.amx)
D.dnb=w([D.eNs,D.eNu,D.eQ9],x.c)
D.dnK=w(["volts","level","ohms","on"],x.s)
D.dp8=w([A.jy,A.C7,A.BU,A.rk,A_.GP,A.uk,A.yK,A.qe,A.hR,A.od,A.ho,A.e3,A.ia,A.ib,A.mC,A.m_,A.we,A.ro,A.m0,A.Gi,A.wd,A.C_,A.BW,A.an3,A.NT,A.C5,A.O1,A.amJ,G.ans,A.l3],x.w)
D.dq1=w([0.72,1],x.n)
D.dqe=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.eaq={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dsu=new B.bu(D.eaq,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.ax("bu<n,n>"))
D.e8k={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h8V=new C.yb("Switch",F.um,A.bI,0,"Tap it to turn it ON or OFF.")
D.h8R=new C.yb("Blinker",A.p3,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h8S=new C.yb("AND",D.anw,A.co,2,"ON only when BOTH inputs are ON.")
D.bK4=new B.a1(63671,"MaterialIcons",!1)
D.h8Q=new C.yb("OR",D.bK4,A.by,2,"ON when EITHER input is ON.")
D.h8T=new C.yb("XOR",H.a0F,A.c7,2,"ON when the inputs are DIFFERENT.")
D.h8N=new C.yb("NAND",A.u7,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bJb=new B.a1(63176,"MaterialIcons",!1)
D.h8O=new C.yb("NOR",D.bJb,A.iI,2,"ON only when BOTH inputs are OFF.")
D.h8P=new C.yb("NOT",Z.C8,A.cY,1,"Flips the signal: ON becomes OFF.")
D.h8U=new C.yb("Light",A.rj,A.dR,1,"Glows when its input is ON.")
D.h8W=new C.yb("Buzzer",A.uo,A.cs,1,"Beeps while its input is ON.")
D.zn=new B.bu(D.e8k,[D.h8V,D.h8R,D.h8S,D.h8Q,D.h8T,D.h8N,D.h8O,D.h8P,D.h8U,D.h8W],B.ax("bu<n,yb>"))
D.eab={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eNU=new B.bj(3,20,1.9)
D.eNn=new B.bj(33,90,1.6)
D.eQA=new B.bj(52,15,3.2)
D.eQy=new B.bj(45,-100,1.8)
D.eP1=new B.bj(-15,-60,1.9)
D.eOv=new B.bj(-25,140,2.4)
D.eOm=new B.bj(-82,0,2.2)
D.aEZ=new B.bu(D.eab,[D.eNU,D.eNn,D.eQA,D.eQy,D.eP1,D.eOv,D.eOm],B.ax("bu<n,+(L,L,L)>"))
D.cTy=w([A.A],x.M)
D.cTU=w([A.ax,A.aD],x.M)
D.d1U=w([A.ax,A.A,A.aD],x.M)
D.d3q=w([A.ax,A.lk,A.A,A.lL,A.aD],x.M)
D.dgX=w([A.ax,A.lk,A.a3,A.a8,A.lL,A.aD],x.M)
D.dtR=new B.dv([1,D.cTy,2,D.cTU,3,D.d1U,4,A.azD,5,D.d3q,6,D.dgX],B.ax("dv<H,ai<df>>"))
D.eaB={Calm:0,Box:1,Sleep:2}
D.cAU=w([4,2,6,0],x.n)
D.cB0=w([4,4,4,4],x.n)
D.cB1=w([4,7,8,0],x.n)
D.RB=new B.bu(D.eaB,[D.cAU,D.cB0,D.cB1],B.ax("bu<n,ai<L>>"))
D.e8v={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.x6=new C.a0g(0,"source")
D.d2T=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hf4=new C.qb("Clock",A.p3,D.x6,A.bu,D.d2T)
D.hf0=new C.qb("Button",A.Cb,D.x6,A.aT,A.V)
D.dlf=w(["random","quick","slow"],x.s)
D.hfb=new C.qb("Dice",A.p0,D.x6,A.c7,D.dlf)
D.bJK=new B.a1(63484,"MaterialIcons",!1)
D.Ea=new C.a0g(1,"logic")
D.dpX=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hf7=new C.qb("Delay",D.bJK,D.Ea,A.co,D.dpX)
D.ddm=w(["fast","mid","slow"],x.s)
D.hfc=new C.qb("Echo",A.amY,D.Ea,A.by,D.ddm)
D.hf9=new C.qb("Every 2nd",Z.C8,D.Ea,A.iI,A.V)
D.bJp=new B.a1(63309,"MaterialIcons",!1)
D.hf6=new C.qb("Every 3rd",D.bJp,D.Ea,A.aR,A.V)
D.bLg=new B.a1(983902,"MaterialIcons",!1)
D.c2L=w(["50%","25%","75%"],x.s)
D.hfe=new C.qb("Chance",D.bLg,D.Ea,A.cY,D.c2L)
D.qJ=new C.a0g(2,"out")
D.hf2=new C.qb("Light",A.rj,D.qJ,A.dR,A.V)
D.hf3=new C.qb("Burst",A.l3,D.qJ,A.c7,A.V)
D.hf1=new C.qb("Ripple",A.yP,D.qJ,A.bb,A.V)
D.hfa=new C.qb("Ball",A.ana,D.qJ,A.cY,A.V)
D.hf8=new C.qb("Comet",A.od,D.qJ,A.by,A.V)
D.bL1=new B.a1(983669,"MaterialIcons",!1)
D.hfd=new C.qb("Shake",D.bL1,D.qJ,A.cs,A.V)
D.hff=new C.qb("Pop",A.Gj,D.qJ,A.bo,A.V)
D.hf5=new C.qb("Wash",A.O5,D.qJ,A.pH,A.V)
D.mJ=new B.bu(D.e8v,[D.hf4,D.hf0,D.hfb,D.hf7,D.hfc,D.hf9,D.hf6,D.hfe,D.hf2,D.hf3,D.hf1,D.hfa,D.hf8,D.hfd,D.hff,D.hf5],B.ax("bu<n,qb>"))
D.e8H={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zP=new C.Jq(0,"tv")
D.eWO=new C.md("Samsung Neo QLED 8K",D.zP,F.F_,A.aR)
D.eWF=new C.md("LG OLED evo G5",D.zP,A.eg,A.h7)
D.eWw=new C.md("Sony Bravia 9",D.zP,A.qT,A.bq)
D.eWA=new C.md("Apple TV 4K",D.zP,A.e2,A.bO)
D.eWx=new C.md("Bang and Olufsen Beovision",D.zP,F.EF,F.tt)
D.IW=new C.Jq(1,"iphone")
D.aO7=new C.md("iPhone 18 Pro Max",D.IW,D.aha,A.c9)
D.wF=new C.Jq(3,"fold")
D.bph=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.eWK=new C.md("iPhone Fold",D.wF,D.bph,A.b5)
D.uX=new C.Jq(2,"android")
D.eWL=new C.md("Samsung Galaxy S26 Ultra",D.uX,F.ade,A.d0)
D.bin=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.eWD=new C.md("Samsung Galaxy Z Fold7",D.wF,D.bin,A.cC)
D.eWz=new C.md("Google Pixel 10 Pro XL",D.uX,A.dt,A.be)
D.eWH=new C.md("Xiaomi 16 Ultra",D.uX,A.j8,A.ca)
D.eWC=new C.md("Huawei Mate 80 Pro Max",D.uX,A.el,A.aw)
D.eWy=new C.md("OPPO Find X9 Ultra",D.uX,A.dX,A.bo)
D.eWQ=new C.md("Honor Magic V5",D.wF,A.d7,A.co)
D.eWE=new C.md("vivo X300 Pro",D.uX,A.hy,A.cY)
D.Tc=new C.Jq(4,"tablet")
D.eWJ=new C.md("iPad Pro M5",D.Tc,A.dt,A.aR)
D.a7m=new C.Jq(5,"reader")
D.eWR=new C.md("Kindle Scribe",D.a7m,A.e5,A.bq)
D.zQ=new C.Jq(6,"computer")
D.eWI=new C.md("MacBook Pro M5 Max",D.zQ,A.dt,A.c9)
D.eWN=new C.md("iMac 32 inch",D.zQ,A.bO,A.cC)
D.eWG=new C.md("Pro Display XDR 8K",D.zQ,A.j8,A.bb)
D.eWB=new C.md("Sony Laser Projector",D.zQ,A.cp,A.dR)
D.eWM=new C.md("Luxury car touchscreen",D.zQ,I.n3,A.aw)
D.eWP=new C.md("Apple Vision Pro",D.zQ,A.ha,A.by)
D.m6=new B.bu(D.e8H,[D.eWO,D.eWF,D.eWw,D.eWA,D.eWx,D.aO7,D.eWK,D.eWL,D.eWD,D.eWz,D.eWH,D.eWC,D.eWy,D.eWQ,D.eWE,D.eWJ,D.eWR,D.eWI,D.eWN,D.eWG,D.eWB,D.eWM,D.eWP],B.ax("bu<n,md>"))
D.e8P={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bs0=new C.fN(20,4,13,!1)
D.bsr=new C.fN(14,5,13.5,!1)
D.bsi=new C.fN(9,2.4,10,!1)
D.bsw=new C.fN(7,5,12.5,!1)
D.bsl=new C.fN(8,3.5,12,!1)
D.brX=new C.fN(15,2,6,!1)
D.bsu=new C.fN(45,6,13.5,!0)
D.bsc=new C.fN(10,8,13.5,!1)
D.bs4=new C.fN(25,3,12,!0)
D.bsa=new C.fN(35,4,12,!0)
D.bsb=new C.fN(40,4.5,9.5,!0)
D.bsd=new C.fN(55,3,9,!0)
D.brY=new C.fN(18,3,9,!1)
D.bst=new C.fN(22,4,13.5,!1)
D.bsm=new C.fN(16,5,13.5,!1)
D.bs8=new C.fN(30,4,9,!0)
D.bsF=new C.fN(5,3.5,13,!1)
D.bsg=new C.fN(25,3,13.5,!0)
D.bsp=new C.fN(14,2.5,9,!1)
D.bsf=new C.fN(6,6,13,!1)
D.bsx=new C.fN(30,1.2,5,!0)
D.bsE=new C.fN(35,3,4.5,!0)
D.bsA=new C.fN(20,4.5,7.5,!0)
D.bse=new C.fN(55,5.5,13.5,!0)
D.brW=new C.fN(45,5.5,13.5,!0)
D.bsq=new C.fN(40,5.5,13.5,!0)
D.bsD=new C.fN(60,6,13.5,!0)
D.ahD=new C.fN(28,4,7,!0)
D.Fy=new C.fN(25,4,7,!0)
D.bs7=new C.fN(30,4,7,!0)
D.bs2=new C.fN(22,4,7,!0)
D.bs3=new C.fN(24,4,7,!0)
D.bsh=new C.fN(60,3,5.5,!0)
D.brZ=new C.fN(18,9,14,!0)
D.bs5=new C.fN(25,9,14,!0)
D.ahE=new C.fN(30,8,14,!0)
D.bs1=new C.fN(20,8,14,!0)
D.bs9=new C.fN(30,9,14,!0)
D.bsy=new C.fN(22,5,9.5,!0)
D.bs_=new C.fN(30,2.5,10.5,!0)
D.bsn=new C.fN(50,5.5,13.5,!0)
D.bsC=new C.fN(12,2,9.5,!1)
D.bsk=new C.fN(16,1.3,9.5,!0)
D.bsv=new C.fN(40,2.5,7,!0)
D.bsB=new C.fN(60,1.2,4.8,!0)
D.bsz=new C.fN(18,5,13.5,!0)
D.bss=new C.fN(8,2,9.5,!1)
D.bsj=new C.fN(12,2.5,8,!1)
D.bs6=new C.fN(20,3.5,13.5,!0)
D.bso=new C.fN(3.5,3,13,!1)
D.zo=new B.bu(D.e8P,[D.bs0,D.bsr,D.bsi,D.bsw,D.bsl,D.brX,D.bsu,D.bsc,D.bs4,D.bsa,D.bsb,D.bsd,D.brY,D.bst,D.bsm,D.bs8,D.bsF,D.bsg,D.bsp,D.bsf,D.bsx,D.bsE,D.bsA,D.bse,D.brW,D.bsq,D.bsD,D.ahD,D.Fy,D.bs7,D.Fy,D.bs2,D.Fy,D.bs3,D.ahD,D.Fy,D.bsh,D.brZ,D.bs5,D.ahE,D.bs1,D.bs9,D.bsy,D.bs_,D.bsn,D.bsC,D.bsk,D.bsv,D.bsB,D.Fy,D.ahE,D.bsz,D.bss,D.bsj,D.bs6,D.bso],B.ax("bu<n,fN>"))
D.e8u={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eMB=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.est=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eso=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eEq=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eFk=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eEm=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eqv=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eCo=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eMJ=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eFF=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.evK=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eqa=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.euL=new B.z("Movement","They pull your legs together and help you balance.")
D.ewE=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.esC=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eKc=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eLg=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eC6=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eL_=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eAM=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eFO=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eqh=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ex0=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eFt=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eB6=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eL7=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eDS=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eqt=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eGm=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eJQ=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eI4=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eoB=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eDB=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eDF=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.exJ=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.esQ=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ewt=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eCy=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eIR=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eMG=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eFL=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eok=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eCJ=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ep9=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eJ5=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eK8=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eD8=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eJi=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eqj=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eKF=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eu9=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eIv=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.exo=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eB1=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eG4=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eKP=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eKH=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eKL=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eBx=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eGT=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eI1=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eKu=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eD7=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ezo=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ey9=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eDw=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eFY=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ezU=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eAA=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.euv=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eK4=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.evj=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ep6=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.exI=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ep1=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.etg=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.exN=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.evt=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eGi=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ewH=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eMo=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eyj=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eBq=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eE_=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.evC=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.evl=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.duV=new B.bu(D.e8u,[D.eMB,D.est,D.eso,D.eEq,D.eFk,D.eEm,D.eqv,D.eCo,D.eMJ,D.eFF,D.evK,D.eqa,D.euL,D.ewE,D.esC,D.eKc,D.eLg,D.eC6,D.eL_,D.eAM,D.eFO,D.eqh,D.ex0,D.eFt,D.eB6,D.eL7,D.eDS,D.eqt,D.eGm,D.eJQ,D.eI4,D.eoB,D.eDB,D.eDF,D.exJ,D.esQ,D.ewt,D.eCy,D.eIR,D.eMG,D.eFL,D.eok,D.eCJ,D.ep9,D.eJ5,D.eK8,D.eD8,D.eJi,D.eqj,D.eKF,D.eu9,D.eIv,D.exo,D.eB1,D.eG4,D.eKP,D.eKH,D.eKL,D.eBx,D.eGT,D.eI1,D.eKu,D.eD7,D.ezo,D.ey9,D.eDw,D.eFY,D.ezU,D.eAA,D.euv,D.eK4,D.evj,D.ep6,D.exI,D.ep1,D.etg,D.exN,D.evt,D.eGi,D.ewH,D.eMo,D.eyj,D.eBq,D.eE_,D.evC,D.evl],B.ax("bu<n,+(n,n)>"))
D.duX=new B.hC(A.G,11)
D.dv1=new B.hC(A.G,30)
D.dBV=new C.Up(null)
D.dBW=new C.Uq(null)
D.dC8=new C.Ur(null)
D.dE9=new C.Uu(null)
D.dEY=new C.V4(null)
D.dF_=new C.V5(null)
D.dFx=new C.Vd(null)
D.dHs=new C.Vh(null)
D.dHt=new C.Vj(null)
D.dHv=new C.Vk(null)
D.dJa=new C.VM(null)
D.dJQ=new C.VN(null)
D.dO0=new C.VS(null)
D.e2U=new C.VT(null)
D.e2W=new C.VU(null)
D.e2X=new C.VX(null)
D.e2Y=new C.VY(null)
D.e4R=new C.W5(null)
D.e4S=new C.W6(null)
D.e57=new C.Wg(null)
D.e58=new C.Wh(null)
D.e59=new C.a8h(null)
D.e5K=new C.Wj(null)
D.e7c=new C.Wn(null)
D.eaN=new B.t(0,118)
D.aHG=new B.t(0,13)
D.eaO=new B.t(0,17)
D.eaR=new B.t(0,330)
D.eaW=new B.t(0,-13)
D.eaX=new B.t(0,-17)
D.eaY=new B.t(0,-18)
D.eaZ=new B.t(0,-19)
D.eb1=new B.t(0,-28)
D.eb2=new B.t(0,-31)
D.eb3=new B.t(0,-32)
D.eb4=new B.t(0,-6771)
D.eb6=new B.t(-9.5,-11)
D.eb8=new B.t(10,20)
D.ebb=new B.t(10,-13)
D.ebc=new B.t(10,-22)
D.ebd=new B.t(10,-4)
D.a6b=new B.t(11,8)
D.ebl=new B.t(12,2)
D.ebm=new B.t(14,0)
D.ebn=new B.t(14,12)
D.aHS=new B.t(14,8)
D.ebo=new B.t(14,-17)
D.aHU=new B.t(14,-3)
D.aHV=new B.t(14,-4)
D.ebq=new B.t(15,0)
D.ebr=new B.t(15,-12)
D.ebu=new B.t(16,-8)
D.ebv=new B.t(18,14)
D.ebw=new B.t(18,-12)
D.aI_=new B.t(20,0)
D.ebE=new B.t(20,15)
D.ebF=new B.t(20,-17)
D.ebG=new B.t(20,-3)
D.ebH=new B.t(21,8)
D.ebK=new B.t(22,10)
D.aI2=new B.t(22,8)
D.ebL=new B.t(24,0)
D.ebM=new B.t(24,2)
D.ebO=new B.t(24,-18)
D.ebP=new B.t(24,-22)
D.ebR=new B.t(25,8)
D.ebS=new B.t(26,0)
D.ebY=new B.t(28,-30)
D.ec3=new B.t(30,18)
D.ec4=new B.t(30,2)
D.ec7=new B.t(31,19)
D.ec9=new B.t(32,0)
D.aI5=new B.t(34,0)
D.aI6=new B.t(34,-32)
D.Iw=new B.t(36,0)
D.eci=new B.t(3,-1)
D.ecl=new B.t(40,3)
D.ecy=new B.t(4,11)
D.ecB=new B.t(4,-2)
D.ecG=new B.t(5,0)
D.ecH=new B.t(5,17)
D.ecI=new B.t(5,6)
D.ecM=new B.t(6,11)
D.ecS=new B.t(8,7)
D.ecT=new B.t(8,-10)
D.ecU=new B.t(8,-14)
D.aIb=new B.t(9,0)
D.ed2=new B.t(-20.5,-17.6)
D.ed3=new B.t(-9,18.5)
D.ed6=new B.t(-2.6,-1)
D.ed7=new B.t(1.9,-0.8)
D.eda=new B.t(-0.22,0.09)
D.edf=new B.t(2.6,1)
D.edm=new B.t(-9,12.2)
D.edG=new B.t(-9,20.5)
D.ee1=new B.t(-10,0)
D.ee2=new B.t(-10,12)
D.aIi=new B.t(-10,4)
D.ee7=new B.t(-11,-2)
D.eea=new B.t(-13,-5)
D.eeb=new B.t(-14,0)
D.eec=new B.t(-14,13)
D.eed=new B.t(-14,2)
D.eee=new B.t(-14,-12)
D.eef=new B.t(-14,-19)
D.eeh=new B.t(-14,-23)
D.eei=new B.t(-15,6)
D.eel=new B.t(-16,14)
D.een=new B.t(-16,-8)
D.eeo=new B.t(-17,10)
D.eep=new B.t(-17,-18)
D.eeq=new B.t(-17,-8)
D.ees=new B.t(-18,20)
D.eet=new B.t(-18,-9)
D.aIk=new B.t(-20,0)
D.eev=new B.t(-20,16)
D.eew=new B.t(-20,-9)
D.SA=new B.t(-22,8)
D.eex=new B.t(-22,-10)
D.eey=new B.t(-22,-11)
D.eez=new B.t(-24,10)
D.eeA=new B.t(-24,11)
D.eeB=new B.t(-24,14)
D.eeC=new B.t(-24,-22)
D.eeE=new B.t(-25,-11)
D.eeF=new B.t(-26,0)
D.eeG=new B.t(-26,-18)
D.eeH=new B.t(-2,9)
D.eeI=new B.t(-2,-10)
D.eeJ=new B.t(-2,-20)
D.eeK=new B.t(-2,-9)
D.eeL=new B.t(-32,0)
D.aIm=new B.t(-34,0)
D.eeQ=new B.t(-40,3)
D.eeS=new B.t(-4,11)
D.eeT=new B.t(-4,-17)
D.eeU=new B.t(-4,-2)
D.eeY=new B.t(-5,0)
D.eeZ=new B.t(-5,20)
D.ef_=new B.t(-5,6)
D.ef0=new B.t(-6,26)
D.ef1=new B.t(-6,6)
D.ef2=new B.t(-6,-42)
D.ef3=new B.t(-7,-19)
D.ef4=new B.t(-7,-24)
D.ef7=new B.t(-8,-9)
D.a6i=new B.t(-9,0)
D.ef8=new B.t(-9,1)
D.efa=new B.t(-9,-23)
D.frW=new B.y("Thinking\u2026",null,A.hg,null,null,null,null,null,null,null,null,null)
D.egb=new B.D(A.jK,D.frW,null)
D.fIk=new B.y("Start from a ready-made board",null,A.fV,null,null,null,null,null,null,null,null,null)
D.egn=new B.D(A4.vP,D.fIk,null)
D.bzW=new B.Q(4,0,4,14)
D.fnf=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new B.y("Games and little helpers for a spare minute.",null,D.fnf,null,null,null,null,null,null,null,null,null)
D.egx=new B.D(D.bzW,D.fsT,null)
D.fF2=new B.y("Tap to throw in a star",null,A.kP,null,null,null,null,null,null,null,null,null)
D.b7A=new B.cn(A.A,null,null,D.fF2,null)
D.ems=new B.cN(0,null,0,14,null,null,D.b7A,null)
D.ddX=w([A.il,A.bl],x.O)
D.aNe=new B.c0(A.A,0.5,A.x,null,0,D.ddX,null,null)
D.ena=new B.c0(A.A,0.5,A.x,null,0,D.azq,null,null)
D.d5c=w([A.c,A.bL],x.O)
D.enc=new B.c0(A.A,0.5,A.x,null,0,D.d5c,null,null)
D.dme=w([A.bO,A.ha],x.O)
D.aNf=new B.c0(A.A,0.5,A.x,null,0,D.dme,null,null)
D.cKN=w([A.c,A.bO],x.O)
D.eng=new B.c0(A.tb,0.5,A.x,null,0,D.cKN,null,null)
D.bfr=new B.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bli=new B.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.d4e=w([D.bfr,D.agK,D.bli],x.O)
D.dbW=w([0,0.7,1],x.n)
D.eni=new B.c0(A.tb,0.5,A.x,null,0,D.d4e,D.dbW,null)
D.cB8=w([A.oR,A.aE,A.K],x.O)
D.diW=w([0.3,0.7,1],x.n)
D.enk=new B.c0(A.A,0.5,A.x,null,0,D.cB8,D.diW,null)
D.bpl=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dkl=w([A.fd,D.bpl],x.O)
D.enm=new B.c0(A.tb,0.5,A.x,null,0,D.dkl,null,null)
D.cDY=w([A.dt,A.cp],x.O)
D.enn=new B.c0(A.A,0.5,A.x,null,0,D.cDY,null,null)
D.d_t=w([A.oR,A.aE,A.ft],x.O)
D.eno=new B.c0(A.A,0.5,A.x,null,0,D.d_t,null,null)
D.cSy=w([A.fZ,A.aT,A.d8],x.O)
D.enq=new B.c0(A.tb,0.5,A.x,null,0,D.cSy,null,null)
D.dez=w([A.ha,I.n3],x.O)
D.enr=new B.c0(A.tb,0.5,A.x,null,0,D.dez,null,null)
D.bfG=new B.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bdu=new B.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.d1M=w([D.bfG,D.bdu],x.O)
D.ent=new B.c0(A.A,0.5,A.x,null,0,D.d1M,null,null)
D.bkG=new B.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.biu=new B.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.biz=new B.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.doG=w([D.bkG,D.biu,D.biz],x.O)
D.cZf=w([0,0.65,1],x.n)
D.enu=new B.c0(M.aaV,0.5,A.x,null,0,D.doG,D.cZf,null)
D.env=new B.c0(A.A,0.5,A.x,null,0,D.avN,null,null)
D.dn6=w([A.ha,A.hK],x.O)
D.enC=new B.c0(A.A,0.5,A.x,null,0,D.dn6,null,null)
D.aNj=new B.aQ(9,9)
D.enL=new B.aQ(1.4,1.4)
D.eNw=new B.bj("Moon",1.62,4291941851)
D.eO5=new B.bj("Neptune",11.15,4284524026)
D.eOK=new B.bj("Sun",274,4294688548)
D.eOZ=new B.bj("Mercury",3.7,4288455599)
D.eP3=new B.bj("Earth",9.81,4281908728)
D.eP5=new B.bj("Mars",3.71,4294472049)
D.ePo=new B.bj("Venus",8.87,4294759245)
D.ePv=new B.bj("Saturn",10.44,4294829706)
D.ePR=new B.bj("Jupiter",24.79,4294677052)
D.eTt=new B.a5(10,-8,18,-2)
D.eTu=new B.a5(14,-14,20,14)
D.eTw=new B.a5(20,-2,30,2)
D.eTA=new B.a5(4,-13,30,-3)
D.eTF=new B.a5(8,-7,12,7)
D.eTP=new B.a5(-12,12,12,19)
D.eTQ=new B.a5(-12,14,12,22)
D.eTR=new B.a5(-12,-22,12,8)
D.eTS=new B.a5(-12,-25,12,19)
D.eTT=new B.a5(-12,-26,12,-6)
D.eTU=new B.a5(-12,-4,12,14)
D.eTW=new B.a5(-14,20,14,24)
D.eTX=new B.a5(-14,6,14,10)
D.eTY=new B.a5(-14,-17,14,15)
D.eTZ=new B.a5(-14,-26,14,18)
D.eU_=new B.a5(-14,-4,14,20)
D.eU1=new B.a5(-15,-29,15,25)
D.eU2=new B.a5(-16,-16,16,16)
D.eU5=new B.a5(-16,-22,-9,18)
D.eU6=new B.a5(-16,-24,16,-10)
D.eU8=new B.a5(-16,-2,16,20)
D.eUa=new B.a5(-18,20,18,24)
D.eUb=new B.a5(-18,-18,18,20)
D.eUc=new B.a5(-20,12,20,22)
D.eUd=new B.a5(-20,-28,20,26)
D.eUe=new B.a5(-22,14,22,18)
D.aNP=new B.a5(-22,-26,22,24)
D.eUf=new B.a5(-22,-3,22,3)
D.eUg=new B.a5(-22,-4,22,12)
D.eUi=new B.a5(-24,-12,10,22)
D.eUj=new B.a5(-24,-14,22,8)
D.eUk=new B.a5(-24,-6,24,20)
D.aNQ=new B.a5(-24,-9,24,9)
D.eUl=new B.a5(-25,14,25,19)
D.eUm=new B.a5(-26,-14,14,8)
D.eUn=new B.a5(-26,-4,26,20)
D.eUo=new B.a5(-26,-6,4,6)
D.aNR=new B.a5(-28,-13,28,13)
D.eUp=new B.a5(-28,-16,28,16)
D.eUq=new B.a5(-28,-16,28,8)
D.eUr=new B.a5(-28,-22,28,22)
D.eUs=new B.a5(-30,-12,30,14)
D.eUt=new B.a5(-30,-14,0,14)
D.eUu=new B.a5(-30,-18,30,20)
D.eUv=new B.a5(-30,-28,30,14)
D.eUw=new B.a5(-30,-2,30,18)
D.eUx=new B.a5(-30,-4,30,18)
D.eUy=new B.a5(-32,-17,32,17)
D.eUz=new B.a5(-32,-28,32,18)
D.eUA=new B.a5(-33,-21,33,17)
D.eUB=new B.a5(-34,14,34,26)
D.a7d=new B.a5(-34,-18,34,18)
D.eUC=new B.a5(-34,-4,34,7)
D.eUD=new B.a5(-36,-24,36,20)
D.eUE=new B.a5(-38,-22,38,22)
D.eUG=new B.a5(-3,12,3,22)
D.eUH=new B.a5(-3,5,3,15)
D.eUL=new B.a5(-46,-34,46,28)
D.eUN=new B.a5(-48,-3,48,3)
D.eUQ=new B.a5(-6,18,24,24)
D.eUR=new B.a5(-6,5,6,12)
D.eUS=new B.a5(-6,-22,6,-15)
D.eUV=new B.a5(-9,-16,9,22)
D.eUW=new B.a5(-4.5,-24,4.5,-21.2)
D.eUY=new B.a5(14,-9,17.5,9)
D.ea1={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aOM=new B.dD(D.ea1,5,x.R)
D.e9z={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eY5=new B.dD(D.e9z,10,x.R)
D.f_j=new B.at(24,44)
D.f_H=new B.at(54,38)
D.f_O=new B.at(66,38)
D.b8V=new B.fi(2,null,null,null,null,A.by,null,null,null,null)
D.f0O=new B.a8(16,16,D.b8V,null)
D.aPM=new B.hP(3,12,12,0.82,null)
D.fK2=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPX=new B.b2(D.fK2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.deC=w([A.cs,A.bI,A.bo,A.aR,A.pH,A.cs],x.O)
D.f6M=new B.fW(A.A,0,6.283185307179586,A.x,D.deC,null,null)
D.fg5=new B.F(!0,A.aT,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.QF,null,null,null)
D.f80=new B.eS("You are here (Sun)",null,null,A.d_,null,null,null,null,null,null,D.fg5)
D.aSp=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f81=new B.eS("What we see",null,null,A.d_,null,null,null,null,null,null,D.aSp)
D.fdm=new B.F(!0,R.AO,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f84=new B.eS("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.d_,null,null,null,null,null,null,D.fdm)
D.fii=new B.F(!0,A.ks,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8a=new B.eS("AI",null,null,A.d_,null,null,null,null,null,null,D.fii)
D.aQL=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9M=new B.F(!0,A.bX,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9R=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa7=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faC=new B.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbe=new B.F(!0,A.ae,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYI=new B.cS(A.i7,A.dy,6)
D.d82=w([D.eYI],x.q)
D.fby=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d82,null,null,null)
D.fbD=new B.F(!0,A.eo,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new B.F(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcl=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fct=new B.F(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcu=new B.F(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdq=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdW=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fes=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYL=new B.cS(A.aW,A.J,3)
D.azF=w([D.eYL],x.q)
D.fev=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azF,null,null,null)
D.feA=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.QF,null,null,null)
D.ffT=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgk=new B.F(!0,A.tD,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh_=new B.F(!0,A.bX,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new B.F(!0,A.n6,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi3=new B.F(!0,A.ae,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRR=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new B.cS(A.w,A.J,5)
D.cWO=w([D.eYy],x.q)
D.fiD=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cWO,null,null,null)
D.fiI=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azF,null,null,null)
D.fj3=new B.F(!0,A.h_,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new B.F(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjQ=new B.F(!0,A.bo,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new B.F(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fld=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flI=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flZ=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fml=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn5=new B.F(!0,A.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fni=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnv=new B.F(!0,A.tD,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnQ=new B.F(!0,A.bo,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbK=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foe=new B.y("\u26a0\ufe0f ",null,D.fbK,null,null,null,null,null,null,null,null,null)
D.fos=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.v7,null,null,null,null,null,null,null,null,null)
D.fq0=new B.y("Pick one, then change it and see what happens.",null,A.v7,null,null,null,null,null,null,null,null,null)
D.fq5=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fcT=new B.F(!0,A.ae,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fcT,null,null,null,null,null,null,null,null,null)
D.fsu=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.ft5=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fK,null,null,null,null,null,null,null,null,null)
D.fta=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new B.y("Make it yours",null,A.jZ,null,null,null,null,null,null,null,null,null)
D.fu0=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8w,null,null,null,null,null,null,null,null,null)
D.fhf=new B.F(!0,A.k6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwq=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fhf,null,null,null,null,null,null,null,null,null)
D.fwP=new B.y("5G",null,T.aRe,null,null,null,null,null,null,null,null,null)
D.fjB=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxY=new B.y("WHAT HAPPENS",null,D.fjB,null,null,null,null,null,null,null,null,null)
D.fzH=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fAm=new B.y("Change the words and pictures on the three slabs.",null,A.v7,null,null,null,null,null,null,null,null,null)
D.fAx=new B.y("All the parts and wires will be removed.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fAR=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fBq=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fCD=new B.y("\ud83c\udfaf Challenges",null,A.df,null,null,null,null,null,null,null,null,null)
D.fD8=new B.y("Remove this part",null,Y.aQQ,null,null,null,null,null,null,null,null,null)
D.fDr=new B.y("Clear the board?",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fj4=new B.F(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new B.y("How the Lab works",null,D.fj4,null,null,null,null,null,null,null,null,null)
D.fak=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE1=new B.y("Electronics Lab",null,D.fak,null,null,null,null,A.a1,null,1,null,null)
D.fE5=new B.y("?",null,M.aSk,null,null,null,null,null,null,null,null,null)
D.fha=new B.F(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEa=new B.y("Planet Earth",null,D.fha,null,null,null,null,null,null,null,null,null)
D.fFo=new B.y("Ready-made circuits",null,A.df,null,null,null,null,null,null,null,null,null)
D.fG1=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fGk=new B.y("UNIVERSE EXPLORER",null,K.a8u,null,null,null,null,null,null,null,null,null)
D.fm1=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJs=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fm1,null,null,null,null,null,null,null,null,null)
D.fKE=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aQP,null,null,null,null,null,null,null,null,null)
D.fL7=new B.y("NGMY",null,A.v5,null,null,null,null,null,null,null,null,null)
D.fLl=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Uj,null,null,null,null,null,null,null,null,null)
D.fLI=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lG,null,null,null,null,null,null,null,null,null)
D.fMI=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.v7,null,null,null,null,null,null,null,null,null)
D.fMK=new B.y("TOOLBOX",null,K.a8u,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hg0=null
$.hg_=null
$.hm8=0
$.hOf=B.U(x.N,x.k)
$.hOQ=B.U(x.N,x.k)
$.hfl=null
$.hOB=B.U(x.N,x.k)
$.hPE=B.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ikn","bDL",()=>{var v="led"
return B.a([C.ayi("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fgs(),v),C.ayi("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fgt(),v),C.ayi("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fgu(),v),C.ayi("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fgB(),v),C.ayi("Not both","Make the light go OFF only when both switches are ON.",2,new C.fgC(),v),C.ayi("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fgD(),"buzzer")],B.ax("O<baJ>"))})
w($,"ikP","bDM",()=>B.a([C.Qg("UNIVERSE","Earth, space and gravity",A.Oo,A.aR,new C.fgT()),C.Qg("ELECTRONICS LAB","Batteries, wires, real circuits",Ac.BX,A.aR,new C.fgU()),C.Qg("DISCOVERY LAB","Body Explorer: a real 3D human",D.bIE,A.bo,new C.fgV()),C.Qg("TOOLBOX","Converter, clock, games",G.am1,A.cY,new C.fgW()),C.Qg("REACTION LAB","Wire parts together",A.Ci,A.bu,new C.fgX()),C.Qg("SPARK PAINTER","Paint with light",A.a0z,A.c7,new C.fgY()),C.Qg("ROCKET LANDER","Land softly on the pad",A.od,A.aR,new C.fgZ()),C.Qg("TITLE ANIMATOR","Make a moving title",A.yN,A.bI,new C.fh_()),C.Qg("CIRCUIT LAB","Connect logic, learn it",A.a10,A.co,new C.fh0())],B.ax("O<bsq>")))
w($,"imm","qn",()=>{var v,u,t=B.U(x.N,x.E)
for(v=0;v<76;++v){u=D.QW[v]
t.n(0,u.a,u)}return t})
w($,"iko","ahQ",()=>B.a([C.FE("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fgE()),C.FE("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fgF()),C.FE("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fgG()),C.FE("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fgH()),C.FE("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fgI()),C.FE("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fgv()),C.FE("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fgw()),C.FE("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fgx()),C.FE("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fgy()),C.FE("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fgz()),C.FE("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fgA())],B.ax("O<baK>")))
w($,"ikR","huD",()=>B.a([C.a0N("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.ca,new C.fh8()),C.a0N("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.bx,new C.fh9()),C.a0N("Breathe","Calm down in a minute","\ud83e\udee7",A.iI,A.cC,new C.fha()),C.a0N("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b5,new C.fhb()),C.a0N("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.c9,new C.fhc()),C.a0N("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bI,A.be,new C.fhd()),C.a0N("Tip & Split","Share the bill","\ud83e\uddfe",A.bo,A.b_,new C.fhe()),C.a0N("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aC,new C.fhf())],B.ax("O<btK>")))
w($,"ikQ","huC",()=>B.a([C.af6("EARTH GLOBE","Turn it, tap a country",A.o9,A.aR,new C.fh1()),C.af6("SOLAR SYSTEM","The Sun and its worlds",D.bII,A.aT,new C.fh2()),C.af6("GRAVITY LAB","Drop, weigh, orbit",D.an8,A.cY,new C.fh3()),C.af6("BLACK HOLE","Throw in a star",A.G8,A.by,new C.fh4()),C.af6("GALAXY","Build, tilt, collide",A.yw,A.h8,new C.fh5()),C.af6("SIZE COMPARE","Earth next to a star",D.bIZ,A.c7,new C.fh6()),C.af6("SEASONS & MOON","Why it is summer",A.w0,A.bu,new C.fh7())],B.ax("O<btF>")))})()};
(a=>{a["RDxVMGmb3J7kF528p03pbpsiJg0="]=a.current})($__dart_deferred_initializers__);