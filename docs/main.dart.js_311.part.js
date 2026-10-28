((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Ab,A2,A3,I,P,A4,Ac,A5,A6,G,Ad,Ae,A7,Af,Y,Ag,Ah,N,Q,Ai,Aj,Z,O,U,Ak,Al,V,M,A8,W,K,R,Am,E,F,L,B={
byy(d){return B.hNV(d)},
hNV(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byy=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qM(C.n2(""),d,A.hp,null).cM(0,A.XE),$async$byy)
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
return C.i($async$byy,v)},
hZu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PG[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.i1(D.PG,new B.ftH())
if(w==null)w=A.d.gJ(D.PG)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.qa().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gJ(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajo(w.a,w.b,m,w,s,!1)},
hTd(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.Q4,new B.fkd(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i6l(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
if(!$.qa().ai(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.deJ[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.e7([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dQ(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dQ(J.q(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.z(f,e))J.ch(i,new C.cD([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gT(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mx(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.ajo(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hY4(d){var w,v,u=B.h36()
d.B(u)
for(w=0;w<60;++w)u.uY(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.fqF(u))&&!A.d.d7(v,new B.fqG())},
hY3(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qa().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dd9,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hMq(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hZt(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qa().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Q4[u]
if(A.d.b4(w,new B.ftE(s)))if(!C.cX(r,s.b.toLowerCase(),0))v=C.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a1(w,new B.ftF(e),C.U(w).k("a1<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.ftG())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gJ(w)
w=$.qa().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajo:function ajo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftH:function ftH(){},
fkd:function fkd(){},
fqF:function fqF(d){this.a=d},
fqG:function fqG(){},
ftE:function ftE(d){this.a=d},
ftF:function ftF(d){this.a=d},
ftG:function ftG(){},
V0:function V0(d,e){this.c=d
this.a=e},
bjd:function bjd(d,e,f,g,h){var _=this
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
e5d:function e5d(d){this.a=d},
e5e:function e5e(d,e,f){this.a=d
this.b=e
this.c=f},
e5f:function e5f(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5m:function e5m(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5l:function e5l(d,e,f){this.a=d
this.b=e
this.c=f},
e5n:function e5n(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e5i:function e5i(d){this.a=d},
e5j:function e5j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5o:function e5o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e5h:function e5h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5z:function e5z(d,e){this.a=d
this.b=e},
byU(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP5,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hgz(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zB,A.L,w,w),A.aB,C.bW(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VK,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FM:function FM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uJ:function uJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vs:function Vs(d){this.a=d},
aDC:function aDC(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fn$=h
_.kZ$=i
_.fS$=j
_.fo$=k
_.br$=l
_.a8$=m
_.c=_.a=null},
elj:function elj(){},
elD:function elD(d){this.a=d},
elC:function elC(d,e){this.a=d
this.b=e},
elE:function elE(){},
elF:function elF(){},
ell:function ell(d,e,f){this.a=d
this.b=e
this.c=f},
elk:function elk(d,e){this.a=d
this.b=e},
ela:function ela(d){this.a=d},
elb:function elb(d){this.a=d},
elc:function elc(d){this.a=d},
eld:function eld(d){this.a=d},
ele:function ele(d){this.a=d},
elf:function elf(d){this.a=d},
elg:function elg(d){this.a=d},
elh:function elh(d){this.a=d},
eli:function eli(d){this.a=d},
el8:function el8(d){this.a=d},
el9:function el9(d){this.a=d},
el7:function el7(d){this.a=d},
elw:function elw(d,e){this.a=d
this.b=e},
elr:function elr(d){this.a=d},
els:function els(d){this.a=d},
elo:function elo(d){this.a=d},
elt:function elt(d){this.a=d},
eln:function eln(d){this.a=d},
elu:function elu(d){this.a=d},
elv:function elv(d){this.a=d},
elm:function elm(d){this.a=d},
elx:function elx(d,e){this.a=d
this.b=e},
elq:function elq(d,e){this.a=d
this.b=e},
ely:function ely(d){this.a=d},
elz:function elz(d){this.a=d},
elA:function elA(d){this.a=d},
elB:function elB(d){this.a=d},
elp:function elp(d){this.a=d},
bgc:function bgc(d,e){this.b=d
this.a=e},
aLt:function aLt(){},
bww:function bww(){},
cEl(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEl=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qP().jx(0,"assets/data/body3d.bin"),$async$cEl)
case 3:d=a1
$.hbV=J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)
t=C.aRz(d)
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
e=D.d2G[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2E(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aWT))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9j(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEl,v)},
aRm:function aRm(d,e,f){this.a=d
this.b=e
this.c=f},
a2E:function a2E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9j:function b9j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TT:function TT(d){this.a=d},
aC1:function aC1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fn$=s
_.kZ$=t
_.fS$=u
_.fo$=v
_.br$=w
_.a8$=a0
_.c=_.a=null},
dEg:function dEg(d){this.a=d},
dEf:function dEf(d,e){this.a=d
this.b=e},
dDT:function dDT(d,e){this.a=d
this.b=e},
dDU:function dDU(){},
dEh:function dEh(){},
dDV:function dDV(d,e){this.a=d
this.b=e},
dDW:function dDW(d){this.a=d},
dDX:function dDX(){},
dDY:function dDY(d){this.a=d},
dE_:function dE_(d,e){this.a=d
this.b=e},
dDZ:function dDZ(d){this.a=d},
dDQ:function dDQ(d,e,f){this.a=d
this.b=e
this.c=f},
dDR:function dDR(d){this.a=d},
dDS:function dDS(d){this.a=d},
dE6:function dE6(d){this.a=d},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE8:function dE8(d,e){this.a=d
this.b=e},
dE9:function dE9(d){this.a=d},
dE5:function dE5(d,e){this.a=d
this.b=e},
dEa:function dEa(d,e){this.a=d
this.b=e},
dE4:function dE4(d,e){this.a=d
this.b=e},
dEb:function dEb(d){this.a=d},
dE3:function dE3(d){this.a=d},
dEc:function dEc(d){this.a=d},
dE2:function dE2(d){this.a=d},
dEd:function dEd(d){this.a=d},
dE1:function dE1(d){this.a=d},
dEe:function dEe(d){this.a=d},
dE0:function dE0(d){this.a=d},
aKv:function aKv(){},
aKw:function aKw(){},
c_J:function c_J(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_K:function c_K(d,e){this.a=d
this.b=e},
c_L:function c_L(d){this.a=d},
axw(d,e,f,g,h){return new B.ba1(d,e,f,g,h)},
fUW(d,e,f,g,h,i){return $.hJO.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cL7(d,e,f,i,g,h))},
xV:function xV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
C3:function C3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ni:function ni(d,e,f){this.a=d
this.b=e
this.c=f},
ba1:function ba1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fek:function fek(){},
fel:function fel(){},
fem:function fem(){},
fet:function fet(){},
feu:function feu(){},
fev:function fev(){},
TY:function TY(d){this.a=d},
aC4:function aC4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fn$=m
_.kZ$=n
_.fS$=o
_.fo$=p
_.br$=q
_.a8$=r
_.c=_.a=null},
dGr:function dGr(d){this.a=d},
dG5:function dG5(d,e){this.a=d
this.b=e},
dG8:function dG8(){},
dGs:function dGs(){},
dG3:function dG3(d,e){this.a=d
this.b=e},
dG4:function dG4(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(){},
dG_:function dG_(){},
dG0:function dG0(d){this.a=d},
dG1:function dG1(d,e){this.a=d
this.b=e},
dG2:function dG2(d,e,f){this.a=d
this.b=e
this.c=f},
dGa:function dGa(){},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGc:function dGc(d){this.a=d},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG6:function dG6(d){this.a=d},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dGl:function dGl(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGm:function dGm(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGh:function dGh(d){this.a=d},
dGi:function dGi(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGd:function dGd(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGp:function dGp(d){this.a=d},
dGe:function dGe(d){this.a=d},
dGq:function dGq(d,e){this.a=d
this.b=e},
bak:function bak(d,e){this.b=d
this.a=e},
cL7:function cL7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKB:function aKB(){},
bwf:function bwf(){},
hAD(){return new B.N0(null)},
ow(d,e,f,g,h){return new B.brR(d,e,f,g,h)},
bqh(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fVr(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
N0:function N0(d){this.a=d},
K3:function K3(d,e){this.a=d
this.b=e},
Al:function Al(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCl:function aCl(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMf:function dMf(d,e){this.a=d
this.b=e},
dMe:function dMe(d){this.a=d},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMg:function dMg(d){this.a=d},
brR:function brR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feL:function feL(){},
feM:function feM(){},
feN:function feN(){},
feY:function feY(){},
ff_:function ff_(){},
ff0:function ff0(){},
ff1:function ff1(){},
ff2:function ff2(){},
ff3:function ff3(){},
ff4:function ff4(){},
ff5:function ff5(){},
feO:function feO(){},
feP:function feP(){},
feQ:function feQ(){},
feR:function feR(){},
feS:function feS(){},
feT:function feT(){},
feU:function feU(){},
feV:function feV(){},
feW:function feW(){},
feX:function feX(){},
feZ:function feZ(){},
bqi:function bqi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVZ:function eVZ(d){this.a=d},
eVY:function eVY(d,e){this.a=d
this.b=e},
eVW:function eVW(d){this.a=d},
eW_:function eW_(d){this.a=d},
eVX:function eVX(d,e){this.a=d
this.b=e},
aet:function aet(d,e,f){this.c=d
this.d=e
this.a=f},
adk:function adk(d,e,f){this.c=d
this.d=e
this.a=f},
PJ:function PJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
brg:function brg(d,e){this.b=d
this.a=e},
bqM:function bqM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b90:function b90(d,e){this.b=d
this.a=e},
aGB:function aGB(d,e){this.c=d
this.a=e},
aGC:function aGC(d,e,f){var _=this
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
eVF:function eVF(d){this.a=d},
eVE:function eVE(d){this.a=d},
eVD:function eVD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVC:function eVC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVA:function eVA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVz:function eVz(d,e,f){this.a=d
this.b=e
this.c=f},
eVB:function eVB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eVy:function eVy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVN:function eVN(d){this.a=d},
eVM:function eVM(d){this.a=d},
eVO:function eVO(d,e){this.a=d
this.b=e},
eVP:function eVP(d,e){this.a=d
this.b=e},
eVQ:function eVQ(d,e){this.a=d
this.b=e},
eVL:function eVL(d,e,f){this.a=d
this.b=e
this.c=f},
eVR:function eVR(d,e,f){this.a=d
this.b=e
this.c=f},
eVK:function eVK(d){this.a=d},
eVG:function eVG(d){this.a=d},
eVS:function eVS(d){this.a=d},
eVT:function eVT(d){this.a=d},
eVJ:function eVJ(d,e){this.a=d
this.b=e},
eVU:function eVU(d,e){this.a=d
this.b=e},
eVI:function eVI(d,e){this.a=d
this.b=e},
eVV:function eVV(d,e){this.a=d
this.b=e},
eVH:function eVH(d,e){this.a=d
this.b=e},
eVw:function eVw(){},
eVx:function eVx(){},
bpV:function bpV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpm:function bpm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9G:function b9G(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpo:function bpo(d,e,f){this.b=d
this.c=e
this.a=f},
btl:function btl(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMk:function aMk(){},
hhZ(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bgb(d,e,f,g,h,i){return $.hKo.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dg5(d,e,f,i,g,h))},
a_R:function a_R(d,e){this.a=d
this.b=e},
pZ:function pZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qG:function qG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
C7:function C7(d,e){this.a=d
this.b=e},
YP:function YP(d,e){this.a=d
this.b=e},
aej:function aej(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a03:function a03(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ch:function Ch(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abb:function abb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abs:function abs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ado:function ado(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bg9:function bg9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bL$=0},
dg9:function dg9(d){this.a=d},
dga:function dga(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
dg8:function dg8(d){this.a=d},
dgb:function dgb(d){this.a=d},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d){this.a=d},
dge:function dge(d){this.a=d},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d){this.a=d},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgj:function dgj(d){this.a=d},
Fy:function Fy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vr:function Vr(d){this.a=d},
aDB:function aDB(d,e,f,g,h,i,j){var _=this
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
_.br$=i
_.a8$=j
_.c=_.a=null},
ekE:function ekE(d){this.a=d},
ekt:function ekt(d){this.a=d},
ekv:function ekv(){},
ekw:function ekw(){},
ekz:function ekz(){},
ekA:function ekA(d,e,f){this.a=d
this.b=e
this.c=f},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekx:function ekx(){},
eky:function eky(d){this.a=d},
el3:function el3(d){this.a=d},
ekD:function ekD(){},
ekp:function ekp(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekI:function ekI(){},
ekH:function ekH(d,e){this.a=d
this.b=e},
eks:function eks(){},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d){this.a=d},
el1:function el1(d){this.a=d},
el0:function el0(d){this.a=d},
el2:function el2(d){this.a=d},
ekS:function ekS(d,e){this.a=d
this.b=e},
el_:function el_(d){this.a=d},
ekY:function ekY(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
ekX:function ekX(d){this.a=d},
ekW:function ekW(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekU:function ekU(d){this.a=d},
ekV:function ekV(d){this.a=d},
eku:function eku(){},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekQ:function ekQ(d){this.a=d},
ekM:function ekM(d){this.a=d},
ekR:function ekR(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
bga:function bga(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dg5:function dg5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLr:function aLr(){},
bkK:function bkK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PA:function PA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VG:function VG(d){this.a=d},
bjO:function bjO(d,e,f,g,h,i,j,k){var _=this
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
_.br$=j
_.a8$=k
_.c=_.a=null},
ewI:function ewI(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewH:function ewH(){},
ewj:function ewj(){},
ewi:function ewi(){},
ews:function ews(d,e){this.a=d
this.b=e},
ewu:function ewu(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewC:function ewC(d){this.a=d},
ewq:function ewq(d){this.a=d},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewE:function ewE(d){this.a=d},
ewo:function ewo(d,e){this.a=d
this.b=e},
ewF:function ewF(d){this.a=d},
ewn:function ewn(d){this.a=d},
ewv:function ewv(d){this.a=d},
ewm:function ewm(d){this.a=d},
eww:function eww(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
brb:function brb(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VS:function VS(d){this.a=d},
aDR:function aDR(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.br$=f
_.a8$=g
_.c=_.a=null},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDi:function eDi(d,e,f){this.a=d
this.b=e
this.c=f},
eDj:function eDj(d){this.a=d},
eDg:function eDg(){},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDm:function eDm(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
aLA:function aLA(){},
aLG:function aLG(){},
a_l:function a_l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vo:function Vo(d){this.a=d},
aDt:function aDt(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fn$=h
_.kZ$=i
_.fS$=j
_.fo$=k
_.br$=l
_.a8$=m
_.c=_.a=null},
eha:function eha(d){this.a=d},
ehb:function ehb(d,e){this.a=d
this.b=e},
egZ:function egZ(d,e){this.a=d
this.b=e},
eh_:function eh_(d){this.a=d},
egX:function egX(d){this.a=d},
egY:function egY(d){this.a=d},
egW:function egW(d){this.a=d},
eh0:function eh0(d){this.a=d},
egV:function egV(d,e){this.a=d
this.b=e},
eh2:function eh2(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
eh3:function eh3(d){this.a=d},
egT:function egT(d,e){this.a=d
this.b=e},
eh4:function eh4(d){this.a=d},
egS:function egS(d){this.a=d},
eh5:function eh5(d){this.a=d},
egR:function egR(d){this.a=d},
eh6:function eh6(d){this.a=d},
egQ:function egQ(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh8:function eh8(d){this.a=d},
eh9:function eh9(d){this.a=d},
egP:function egP(d){this.a=d},
eh1:function eh1(d){this.a=d},
bkx:function bkx(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abi:function abi(d,e,f){this.a=d
this.b=e
this.c=f},
VN:function VN(d){this.a=d},
bjT:function bjT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fn$=i
_.kZ$=j
_.fS$=k
_.fo$=l
_.br$=m
_.a8$=n
_.c=_.a=null},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCz:function eCz(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCo:function eCo(d){this.a=d},
eCp:function eCp(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCC:function eCC(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCE:function eCE(d){this.a=d},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCF:function eCF(d){this.a=d},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCG:function eCG(d){this.a=d},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eCk:function eCk(d,e){this.a=d
this.b=e},
bs2:function bs2(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abL:function abL(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
TW:function TW(d){this.a=d},
aC3:function aC3(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fn$=h
_.kZ$=i
_.fS$=j
_.fo$=k
_.br$=l
_.a8$=m
_.c=_.a=null},
dFA:function dFA(d){this.a=d},
dFz:function dFz(d,e){this.a=d
this.b=e},
dFB:function dFB(){},
dFC:function dFC(d){this.a=d},
dFq:function dFq(d,e){this.a=d
this.b=e},
dFt:function dFt(d){this.a=d},
dFs:function dFs(d,e){this.a=d
this.b=e},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFx:function dFx(d,e,f){this.a=d
this.b=e
this.c=f},
dFw:function dFw(d){this.a=d},
dFu:function dFu(d){this.a=d},
dFv:function dFv(d){this.a=d},
dFy:function dFy(d){this.a=d},
ba0:function ba0(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKF:function cKF(d){this.a=d},
aKz:function aKz(){},
bwe:function bwe(){},
aLo:function aLo(){},
bwv:function bwv(){},
aLD:function aLD(){},
bwD:function bwD(){},
Fu:function Fu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acA:function acA(d,e,f){this.a=d
this.b=e
this.c=f},
Vi:function Vi(d){this.a=d},
bjs:function bjs(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fn$=i
_.kZ$=j
_.fS$=k
_.fo$=l
_.br$=m
_.a8$=n
_.c=_.a=null},
ecE:function ecE(d,e){this.a=d
this.b=e},
ed2:function ed2(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecU:function ecU(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecP:function ecP(d){this.a=d},
ecV:function ecV(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d){this.a=d},
ecK:function ecK(d){this.a=d},
ed_:function ed_(d){this.a=d},
ecH:function ecH(d){this.a=d},
ed0:function ed0(d){this.a=d},
ecG:function ecG(d){this.a=d},
ed1:function ed1(d){this.a=d},
ecF:function ecF(d){this.a=d},
bh4:function bh4(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ad5:function ad5(d,e){this.a=d
this.b=e
this.c=-1000},
Vn:function Vn(d){this.a=d},
aDs:function aDs(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fn$=h
_.kZ$=i
_.fS$=j
_.fo$=k
_.br$=l
_.a8$=m
_.c=_.a=null},
egy:function egy(d,e){this.a=d
this.b=e},
egz:function egz(d,e,f){this.a=d
this.b=e
this.c=f},
egG:function egG(d){this.a=d},
egF:function egF(d){this.a=d},
egH:function egH(d,e){this.a=d
this.b=e},
egI:function egI(d){this.a=d},
egE:function egE(d){this.a=d},
egJ:function egJ(d){this.a=d},
egD:function egD(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egC:function egC(d,e){this.a=d
this.b=e},
egL:function egL(d,e){this.a=d
this.b=e},
egB:function egB(d,e){this.a=d
this.b=e},
egM:function egM(d){this.a=d},
egN:function egN(d){this.a=d},
egA:function egA(d){this.a=d},
egO:function egO(d){this.a=d},
bky:function bky(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLm:function aLm(){},
bwt:function bwt(){},
aLn:function aLn(){},
bwu:function bwu(){},
faA(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7M,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ie,w,w,1/0)},
hZT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
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
e.bI(0,new B.ftY(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vY.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
fY_(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
ta:function ta(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8U:function b8U(d,e){this.a=d
this.b=e},
ftY:function ftY(d,e){this.a=d
this.b=e},
Vl:function Vl(d){this.a=d},
aDq:function aDq(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
eg2:function eg2(d){this.a=d},
eg1:function eg1(d,e){this.a=d
this.b=e},
efP:function efP(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efK:function efK(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
efL:function efL(d){this.a=d},
efM:function efM(d,e){this.a=d
this.b=e},
efX:function efX(){},
efY:function efY(d){this.a=d},
efW:function efW(d){this.a=d},
efZ:function efZ(d){this.a=d},
efV:function efV(d){this.a=d},
efT:function efT(d){this.a=d},
efU:function efU(d,e){this.a=d
this.b=e},
efQ:function efQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efS:function efS(d){this.a=d},
eg_:function eg_(d,e){this.a=d
this.b=e},
efR:function efR(d,e){this.a=d
this.b=e},
eg0:function eg0(d,e){this.a=d
this.b=e},
bhM:function bhM(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dof:function dof(d,e){this.a=d
this.b=e},
Uj:function Uj(d){this.a=d},
biI:function biI(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dOj:function dOj(d){this.a=d},
dOi:function dOi(d,e){this.a=d
this.b=e},
dO8:function dO8(d){this.a=d},
dO7:function dO7(){},
dO9:function dO9(d){this.a=d},
dO6:function dO6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOh:function dOh(){},
dOc:function dOc(){},
dOd:function dOd(d,e){this.a=d
this.b=e},
dOb:function dOb(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
dOa:function dOa(d){this.a=d},
dOf:function dOf(d,e){this.a=d
this.b=e},
dOg:function dOg(d,e){this.a=d
this.b=e},
Uz:function Uz(d){this.a=d},
aCx:function aCx(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.br$=g
_.a8$=h
_.c=_.a=null},
dR8:function dR8(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dQW:function dQW(){},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dR0:function dR0(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dQY:function dQY(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR5:function dR5(d){this.a=d},
dR6:function dR6(d){this.a=d},
bd5:function bd5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3n:function d3n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3p:function d3p(d,e,f){this.a=d
this.b=e
this.c=f},
d3o:function d3o(d,e){this.a=d
this.b=e},
aKN:function aKN(){},
bzp(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7M,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ie,w,w,1/0)},
fnD(d,e,f,g,h){var w,v,u=null,t=C.hq(u,u,u,u,C.de(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c9,u,A.dZ,A.c7)
t.ey()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbc(w)/2))
t.a4(d,w)},
hWY(){var w,v,u,t,s,r,q,p,o=new C.eL()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aC(5)
if(r.L(0,p))q.push(new C.y(p,1+o.aC(2+A.o.an(t,3))))}A.d.b0(q,new B.foE())
w.push(new B.aRc(q))}return w},
a1g(d,e){var w,v,u,t
for(w=new C.WU(d),v="";w.C();){u=C.jI(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jI(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i8G(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WU(d),v=0,u="";w.C();){t=C.jI(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jI(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRc:function aRc(d){this.a=d},
bFq:function bFq(){},
foE:function foE(){},
TO:function TO(d){this.a=d},
bim:function bim(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.br$=h
_.a8$=i
_.c=_.a=null},
dBL:function dBL(){},
dBY:function dBY(d){this.a=d},
dBX:function dBX(d,e,f){this.a=d
this.b=e
this.c=f},
dBZ:function dBZ(d){this.a=d},
dBW:function dBW(d,e){this.a=d
this.b=e},
dBM:function dBM(d,e){this.a=d
this.b=e},
dBR:function dBR(){},
dBS:function dBS(d){this.a=d},
dBQ:function dBQ(d){this.a=d},
dBT:function dBT(d,e){this.a=d
this.b=e},
dBP:function dBP(d,e){this.a=d
this.b=e},
dBU:function dBU(d,e){this.a=d
this.b=e},
dBO:function dBO(d,e){this.a=d
this.b=e},
dBV:function dBV(d){this.a=d},
dBN:function dBN(d){this.a=d},
b95:function b95(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDc:function cDc(d,e){this.a=d
this.b=e},
UN:function UN(d){this.a=d},
biU:function biU(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.br$=g
_.a8$=h
_.c=_.a=null},
dVb:function dVb(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVc:function dVc(d){this.a=d},
dV9:function dV9(d,e){this.a=d
this.b=e},
dV1:function dV1(d,e,f){this.a=d
this.b=e
this.c=f},
dV5:function dV5(d){this.a=d},
dV4:function dV4(d){this.a=d},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV8:function dV8(d,e){this.a=d
this.b=e},
bez:function bez(d,e,f){this.b=d
this.c=e
this.a=f},
dbn:function dbn(d,e){this.a=d
this.b=e},
dbo:function dbo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TX:function TX(d){this.a=d},
biz:function biz(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dFX:function dFX(d){this.a=d},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFF:function dFF(){},
dFO:function dFO(d){this.a=d},
dFN:function dFN(){},
dFP:function dFP(d){this.a=d},
dFM:function dFM(){},
dFQ:function dFQ(d){this.a=d},
dFL:function dFL(d){this.a=d},
dFR:function dFR(d){this.a=d},
dFK:function dFK(d){this.a=d},
dFS:function dFS(d){this.a=d},
dFJ:function dFJ(d){this.a=d},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFV:function dFV(d){this.a=d},
dFG:function dFG(d,e){this.a=d
this.b=e},
aKr:function aKr(){},
aKV:function aKV(){},
hn1(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h36(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a40(w,v,u,A.cI,C.T(x.N,x.y))},
huw(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h37(d),d.d*f.b)},
h37(d){return 42+(D.lX.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tn:function tn(d,e,f,g){var _=this
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
a9R:function a9R(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aaY:function aaY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a40:function a40(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLo:function bLo(){},
bLz:function bLz(d){this.a=d},
bLu:function bLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLA:function bLA(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLD:function bLD(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLC:function bLC(d){this.a=d},
bLF:function bLF(d,e,f){this.a=d
this.b=e
this.c=f},
bLG:function bLG(d){this.a=d},
bLq:function bLq(d){this.a=d},
bLr:function bLr(d){this.a=d},
bLp:function bLp(d){this.a=d},
bLs:function bLs(d,e,f){this.a=d
this.b=e
this.c=f},
bLt:function bLt(d){this.a=d},
bLn:function bLn(d){this.a=d},
bLH:function bLH(d,e){this.a=d
this.b=e},
bLv:function bLv(d,e){this.a=d
this.b=e},
bLy:function bLy(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLw:function bLw(d){this.a=d},
aif:function aif(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGC:function bGC(){},
bGD:function bGD(){},
mx:function mx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ck1:function ck1(d){this.a=d},
i6h(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fFm(),c9=new B.fFo(),d0=new B.fFp(),d1=new B.fFn(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bL,A.bJ))
d3.bC(D.e4a,D.e1Y,c9.$2(A.dB,1.4))
d3.bC(D.e1O,D.e1N,c9.$2(A.bv,2.4))
d3.bC(D.e1P,Y.aG3,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.f5.j(0.5))
d2.z=A.QP
d3.ae(D.e1y,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aLS,A.aP,A.cq))
d3.ae(A.cJ,16,c8.$1(A.bv))
d3.ae(A.cJ,13,c8.$1(c7?A.aS.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j1(0,d4.y*0.6)
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
r.delete()}}d3.ae(D.e46,2.4,c8.$1(c7?A.bo:A.ak))
d3.ae(D.e4O,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.ep))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ap,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bF())
d3.aO(q,c8.$1(A.f5.j(0.35)))
if(c7){d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.ay.j(0.7)))}d3.aO(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j1(0,d4.y)
d3.bC(D.a4V,D.aGj,c9.$2(A.bP,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ae(A.ik,3,c8.$1(c7?A.bo:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2H[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cl(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c_(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
w.F(new C.b5(-24,-12))
w.F(new C.ap(10,-12))
w.F(new C.ap(10,2))
w.F(new C.ap(-2,2))
w.F(new C.ap(-6,22))
w.F(new C.ap(-16,22))
w.F(new C.ap(-14,2))
w.F(new C.ap(-24,2))
w.F(new C.bF())
d3.aO(w,d1.$3(D.eHZ,A.aM,A.d8))
d3.aY(D.eHo,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j1(0,d4.y*2)
d3.bC(A.J,D.e1S,c9.$2(A.bP,2.4))
d3.bC(A.a4U,D.e1R,c9.$2(A.hJ,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.bK.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eI4,A.bn,A.cB))
k=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bF())
d3.aO(k,c8.$1(A.ep))
d3.ae(D.e1W,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.n_))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bu(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.bgz
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lq
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e4g,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eIa,A.bP,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bK.j(0.75):A.aA))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j1(0,d4.y*0.5)
d3.hO(C.cl(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.n_))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.E(A.k.bu(d5),60)),2,"0"),D.e1X,A.b2,6.5)
d3.ae(D.e28,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.RD,10,c8.$1(c7?A.cd:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j1(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e4Q,A.c,16)
d2.restore()
d3.ae(A.k3,6,c8.$1(A.d3))
d3.ae(A.k3,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RD,14+v*6+A.k.E(t,6))
r=c9.$2(A.cd.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bC(D.e4f,D.e4M,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.j1(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eI_,A.bP,A.ak))
d3.ae(D.aG5,8,c8.$1(A.aA))
d3.ae(D.aG5,4.5,c8.$1(c7?A.aS:A.cB))
d3.ae(D.e4d,2.2,c8.$1(c7&&A.o.E(A.k.bu(d5*1.6),2)===0?A.ay:A.ki))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e4o,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eI7,A.iR,A.f9))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ae(D.e49,4,c8.$1(A.aX))
d3.ae(D.e1T,2.4,c8.$1(A.ay))
d3.ae(D.e25,2.4,c8.$1(A.bo))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aA))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.E((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bz(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bz(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aO(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e1U,A.h1,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e4s,A.h1.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.e4i,3,c8.$1(c7?A.bo:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cy.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eI1,c8.$1(F.t8))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.t7(0,-1,1)
d3.hO(C.cl(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.ci))
d3.ae(D.e2A,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ap,c6,c6,C.a([],t))
e.F(new C.b5(-9,22))
e.F(new C.ap(-5,-16))
e.F(new C.ap(5,-16))
e.F(new C.ap(9,22))
e.F(new C.bF())
d3.aO(e,d1.$3(D.eIv,A.c,A.bG))
d3.aY(D.eIu,c8.$1(c7?A.dP:A.bv))
s=new C.aO(d2,A.ap,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bF())
d3.aO(s,c8.$1(A.eo))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.QP
d3.ae(D.e1z,14,d2)}return!0
case"discoball":d3.bC(D.e1E,K.aG1,c9.$2(A.dA,1.4))
d3.ae(A.J,16,d1.$3(D.eHN,A.aP,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dq,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dq,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d3C[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eHL,A.cq,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eHE,A.aL,A.bJ))
d3.bC(D.e1D,D.e1F,c9.$2(A.bv,1.6))
d3.ae(D.e1G,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2J[m]
if(c7)t=a1?A.b8:A.f6
else t=A.cB
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j1(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bC(A.J,D.a4R,c9.$2(A.bJ,4))
d2.restore()
d3.bC(D.e42,D.e4m,c9.$2(A.bJ,4))
d3.aY(D.eIt,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ax1[m]+1,d2,10,14,2)
p=C.aq(A.bK,A.d8,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eI0,A.bP,A.bn))
for(m=0;m<2;++m){l=D.ax1[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fj:A.aA).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mC
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bC(D.e2c,D.e2t,c9.$2(A.aA,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cB))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mN(1,a3,0.8,1).iB():A.ep
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mC
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eHQ,A.cy,A.KH))
d3.ae(D.e4t,8,c8.$1(A.qK))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j1(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f5,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aO(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fT).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.e31,3.2,c8.$1(A.fT.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j1(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eI2,A.j8,A.tb))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cB))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.ep))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mC
d3.ae(D.e27,8,d2)}return!0
case"headphones":d3.f5(C.cl(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.ax2[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bt,A.pv).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eA.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.E(d5*14,8)),A.kd,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cB))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cB))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eHJ,A.dA,A.ep))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dl(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.e1K,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.E4,A.h1,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bu(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.n_))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.pq(),!0)
d2.translate(-27,-19)
E.KT(d3,D.eNN,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.v7))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dO,A.di))
d3.aD(a6,c9.$2(A.b3,1.2))
d3.ae(D.aGq,9,c8.$1(A.aA))
d3.ae(D.aGq,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aA))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e35,s,8.2)
d3.ae(D.e1Z,2.4,c8.$1(c7?A.bo:A.aK))
d6.$5(d3,"IN",D.e4n,A.ad,6)
d6.$5(d3,"OUT",D.e2U,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(D.e1A,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eHF,A.ep,A.hG))
d6.$5(d3,"7805",D.a4V,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d9f[m]-1
r=c8.$1(A.e1).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e4P,A.bi,9)
return!0
case"diode":d3.bC(D.aGu,D.aGe,c9.$2(A.e1,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aH.j(0.85)))
d3.aY(D.eHu,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.jl
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e4b,A.az,8)
return!0
case"ldr":d3.bC(D.aGu,D.a4V,c9.$2(A.e1,2.4))
d3.bC(D.aGj,D.aGe,c9.$2(A.e1,2.4))
d3.ae(A.J,12,c8.$1(A.d8))
d3.ae(A.J,12,c9.$2(A.tk,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ap,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bz(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aO(a8,c9.$2(A.bK,1.4))
d2=C.aq(A.bv,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e43,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qE
break A}if("appletv"===d2){t=A.e1
break A}t=F.E6
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
p.clipRRect(C.er(a5),$.pq(),!0)
p.translate(t,s)
E.h_m(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e2u,1.6,c8.$1(A.b2))}else{d3.aD(a5,c8.$1(D.v7))
p=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bF())
d3.aO(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oX[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dA).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e3H,A.bP,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bF())
d3.aO(d2,c8.$1(D.Wx))
d6.$5(d3,"Apple TV",D.e36,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bf4))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e4L,F.t8,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lX.h(0,d2)
b1=b0.b===D.wa
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
t.clipRRect(C.er(a5),$.pq(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KT(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.v7))
if(b1){t=a5.b
s=a5.d
d3.bC(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.ep))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.e4S,A.aA,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aG_,1.6,c8.$1(A.aA))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eIb,A.cq,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.pq(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KT(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.v7))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bF())
d3.aO(d2,c8.$1(D.Wx))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eIf,A.bL,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.pq(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KT(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.v7))
d3.ae(D.aFV,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bF())
d3.aO(d2,c8.$1(D.Wx))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.pq(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KT(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.v7))
d3.aY(D.eIl,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bF())
d3.aO(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.pq(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KT(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eI3,A.iN,A.dA))
d3.ae(D.aG4,7,c8.$1(A.aA))
d3.ae(D.aG4,4,c8.$1(c7?A.dP:A.cB))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aA))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.n_))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cU(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aO(c3,c9.$2(A.aS,2.2))
d2=A.k.E(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bu(d5*2),5)),D.e32,A.c,10)
d6.$5(d3,"km/h",D.e3_,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.ep))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.pq(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KT(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bt.j(0.2))
d2.z=A.lq
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bC(D.e4x,D.e4C,c9.$2(A.bn,4))
d3.bC(D.e2v,D.e2D,c9.$2(A.bn,4))
return!0}return!1},
fFm:function fFm(){},
fFo:function fFo(){},
fFp:function fFp(){},
fFn:function fFn(){},
h20(d,e,f,g){return new B.aid(d,g,f,e)},
Fi(d,e,f){return new B.ba2(d,e,f)},
aid:function aid(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aie:function aie(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fn$=h
_.kZ$=i
_.fS$=j
_.fo$=k
_.br$=l
_.a8$=m
_.c=_.a=null},
bGg:function bGg(d,e){this.a=d
this.b=e},
bGh:function bGh(d){this.a=d},
bGf:function bGf(d){this.a=d},
bGi:function bGi(){},
bGj:function bGj(d){this.a=d},
bGk:function bGk(d,e,f){this.a=d
this.b=e
this.c=f},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e){this.a=d
this.b=e},
bGd:function bGd(d,e,f){this.a=d
this.b=e
this.c=f},
bG6:function bG6(d,e){this.a=d
this.b=e},
bG7:function bG7(){},
bG8:function bG8(d,e){this.a=d
this.b=e},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGa:function bGa(d){this.a=d},
bGb:function bGb(d){this.a=d},
bGz:function bGz(d){this.a=d},
bGA:function bGA(){},
bFK:function bFK(){},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGy:function bGy(d,e,f){this.a=d
this.b=e
this.c=f},
bGt:function bGt(d){this.a=d},
bGq:function bGq(d,e,f){this.a=d
this.b=e
this.c=f},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGu:function bGu(d){this.a=d},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGs:function bGs(d){this.a=d},
bGv:function bGv(d){this.a=d},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGn:function bGn(d,e){this.a=d
this.b=e},
bGw:function bGw(d){this.a=d},
bGl:function bGl(d){this.a=d},
bGx:function bGx(d){this.a=d},
bFL:function bFL(d,e){this.a=d
this.b=e},
bG3:function bG3(d,e){this.a=d
this.b=e},
bG5:function bG5(d,e){this.a=d
this.b=e},
bG4:function bG4(d,e){this.a=d
this.b=e},
bFR:function bFR(d,e){this.a=d
this.b=e},
bFS:function bFS(d){this.a=d},
bFQ:function bFQ(d){this.a=d},
bFT:function bFT(d,e,f){this.a=d
this.b=e
this.c=f},
bFP:function bFP(d,e){this.a=d
this.b=e},
bFW:function bFW(d,e){this.a=d
this.b=e},
bFX:function bFX(d,e){this.a=d
this.b=e},
bFY:function bFY(d,e){this.a=d
this.b=e},
bFZ:function bFZ(d,e,f){this.a=d
this.b=e
this.c=f},
bFO:function bFO(d,e){this.a=d
this.b=e},
bG_:function bG_(d,e,f){this.a=d
this.b=e
this.c=f},
bFN:function bFN(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e,f){this.a=d
this.b=e
this.c=f},
bFM:function bFM(d,e){this.a=d
this.b=e},
bG1:function bG1(d){this.a=d},
bG2:function bG2(d){this.a=d},
bFU:function bFU(d){this.a=d},
bFV:function bFV(d){this.a=d},
ba2:function ba2(d,e,f){this.a=d
this.b=e
this.c=f},
few:function few(){},
fex:function fex(){},
fey:function fey(){},
fej:function fej(){},
fez:function fez(){},
fei:function fei(){},
feA:function feA(){},
fen:function fen(){},
feh:function feh(){},
feo:function feo(){},
feg:function feg(){},
fep:function fep(){},
fef:function fef(){},
feq:function feq(){},
fed:function fed(){},
fee:function fee(){},
fer:function fer(){},
feb:function feb(){},
fec:function fec(){},
fes:function fes(){},
fea:function fea(){},
UA:function UA(d){this.a=d},
aCy:function aCy(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dRg:function dRg(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRq:function dRq(){},
dRr:function dRr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRs:function dRs(){},
dRf:function dRf(d){this.a=d},
dRe:function dRe(d,e,f){this.a=d
this.b=e
this.c=f},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRb:function dRb(d){this.a=d},
dRc:function dRc(){},
dRo:function dRo(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRk:function dRk(){},
dRm:function dRm(d,e,f){this.a=d
this.b=e
this.c=f},
dRh:function dRh(d,e){this.a=d
this.b=e},
dRi:function dRi(){},
dRu:function dRu(d){this.a=d},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRt:function dRt(){},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d){this.a=d},
dRy:function dRy(d){this.a=d},
awF:function awF(d,e){this.c=d
this.a=e},
b8e:function b8e(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
cAK:function cAK(d){this.a=d},
b8d:function b8d(d,e){this.b=d
this.a=e},
cAJ:function cAJ(d){this.a=d},
awY:function awY(){},
awZ:function awZ(){},
aIY:function aIY(){},
bwh:function bwh(){},
i6i(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.w3,23)
$.W()
b8=C.N()
b8.r=A.aA.gp(0)
b9.ae(A.w3,25,b8)
b8=C.N()
b8.saq(D.ecO.av(0,v))
b9.ae(A.w3,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bi.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bG.gp(0)
r.c=2
r.d=A.bO
b9.bC(A.w3,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bi.gp(0)
b9.ae(A.w3,3,r)
c2.$5(b9,w?"V":"A",D.e4F,A.bi,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e48,A.aA,9.5)
return!0
case"fan":b8=C.bx(D.eHB,A.hD)
$.W()
s=C.N()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aY(D.eIm,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.w4,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cl(A.aFZ,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fT.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bm.gp(0)
b9.ae(D.w4,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cq.gp(0)
b9.ae(D.w4,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jc.gp(0)
b9.ae(D.w4,14,b8)
return!0
case"speaker":l=C.bx(D.aLS,A.us)
$.W()
b8=C.N()
b8.saq(D.anX.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eda.av(0,C.bU(A.cA,15)))
b9.ae(A.cA,14+k,b8)
b8=C.N()
b8.r=A.dA.gp(0)
b9.ae(A.cA,5,b8)
b8=C.N()
b8.r=A.bn.gp(0)
b9.ae(D.aG0,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e2b,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eIe,A.us)
$.W()
b8=C.N()
b8.saq(D.bUO.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.aLU,A.im)
s=C.N()
s.r=A.hG.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BH(i)<500?":":" "
g=A.a.aT(A.o.u(C.dl(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.aY(D.aLU,b8)
c2.$5(b9,g+h+f,D.e4q,A.b2,21)}b8=C.N()
b8.r=A.cq.gp(0)
b9.ae(D.e4p,2.4,b8)
b8=C.N()
b8.r=A.cq.gp(0)
b9.ae(D.e2f,2.4,b8)
return!0
case"calculator":j=C.bx(D.eHV,A.hd)
$.W()
b8=C.N()
b8.saq(D.bUy.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.eHP,A.hc)
s=C.N()
s.r=(b7?A.WK:D.bh4).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e47,A.VC,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.S6)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.ci:A.bP).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eHM,A.hd)
$.W()
b8=C.N()
b8.r=L.n_.gp(0)
b9.aD(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.afv.gp(0)
b9.aD(j,b8)
a0=C.bx(D.eHD,A.hD)
if(b7){b8=C.N()
b8.saq(D.bW7.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.pq(),!0)
b8.translate(-12,-25)
E.KT(b9,D.eNo,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eHA,A.hc)
s=C.N()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.aY(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e3p,A.c,6)}else{b8=C.N()
b8.r=D.v7.gp(0)
b9.aD(a0,b8)}b8=C.bx(D.eIw,D.edj)
s=C.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bx(D.eId,A.rw)
$.W()
b8=C.N()
b8.saq(D.bV5.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.ax2[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cB.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bu(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bo:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.w4,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hw.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eHU,A.hD)
s=$.W()
r=C.N()
r.r=A.ep.gp(0)
b9.aD(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yW
b9.ae(A.w3,34,b8)}a6=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cU(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bF())
b8=C.N()
b8.r=C.aq(A.eo,D.b9y,a5).gp(0)
b9.aO(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.c1.gp(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j1(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bC(A.J,D.aG0,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ap,b6,b6,C.a([],r))
j.F(new C.b5(-28,8))
j.F(new C.ap(-28,-2))
j.F(new C.ap(-16,-4))
j.F(new C.ap(-10,-16))
j.F(new C.ap(10,-16))
j.F(new C.ap(18,-4))
j.F(new C.ap(28,-2))
j.F(new C.ap(28,8))
j.F(new C.bF())
q=C.N()
q.saq(D.bTa.av(0,D.eI6))
b9.aO(j,q)
q=new C.aO(s,A.ap,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bF())
p=C.N()
p.r=A.f5.gp(0)
b9.aO(q,p)
r=new C.aO(s,A.ap,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bF())
s=C.N()
s.r=A.f5.gp(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.d93[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aA.gp(0)
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
q.r=A.bP.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
q=-4+u*5
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.az.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new C.aO(b8,A.ap,b6,b6,C.a([],s))
j.F(new C.b5(-18,20))
j.F(new C.ap(-14,-12))
j.F(new C.cU(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bF())
r=C.N()
r.saq(D.bUe.av(0,D.eHT))
b9.aO(j,r)
r=new C.aO(b8,A.ap,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bF())
q=C.N()
q.r=A.e1.gp(0)
b9.aO(r,q)
s=new C.aO(b8,A.ap,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cU(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.aA.gp(0)
b9.aO(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.ti,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ep
b8.r=s.gp(0)
b9.aY(D.eHS,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lq
b9.ae(A.aFX,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aA.gp(0)
b9.ae(D.e1x,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ap,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bF())
s=C.N()
s.r=A.dP.j(0.28*u).gp(0)
b9.aO(b8,s)
s=C.N()
s.r=A.dP.j(0.5*u).gp(0)
s.z=Z.Hk
b9.ae(D.e4u,24,s)}b8=C.bx(D.eIs,A.hD)
s=$.W()
r=C.N()
r.r=A.ep.gp(0)
b9.aD(b8,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bC(D.e1L,D.aG6,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bC(D.aG6,D.e4v,r)
a9=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bF())
s=C.N()
s.r=(b7?A.aM:A.jS).gp(0)
b9.aO(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ae(D.e4w,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ap,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cU(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hk.gp(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1M[u].j(0.6).gp(0)
b3.z=A.QP
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
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1M[u]
else{o=C.aq(D.a1M[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.i6h(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYs(d){var w=D.lX.h(0,d)
return(w==null?null:w.b)===D.zl},
i7q(d,e,f){return C.a5(d,!1).c8(C.uB(null,!1,!0,!0,new B.fK0(e,f),A.eI,null,A.pJ,new B.fK1(),x.H))},
J0:function J0(d,e){this.a=d
this.b=e},
m3:function m3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK0:function fK0(d,e){this.a=d
this.b=e},
fK1:function fK1(){},
Uh:function Uh(d,e,f){this.c=d
this.d=e
this.a=f},
biG:function biG(d,e){var _=this
_.d=$
_.e=null
_.br$=d
_.a8$=e
_.c=_.a=null},
dNc:function dNc(d){this.a=d},
dNb:function dNb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dN9:function dN9(){},
dNa:function dNa(d){this.a=d},
dN8:function dN8(d){this.a=d},
dN7:function dN7(d,e){this.a=d
this.b=e},
dN6:function dN6(d,e){this.a=d
this.b=e},
dN5:function dN5(d){this.a=d},
dN4:function dN4(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN_:function dN_(d){this.a=d},
dN3:function dN3(d,e,f){this.a=d
this.b=e
this.c=f},
dN2:function dN2(d){this.a=d},
dN1:function dN1(d){this.a=d},
bum:function bum(d,e,f){this.b=d
this.c=e
this.a=f},
aec:function aec(d,e,f){this.b=d
this.c=e
this.a=f},
aKK:function aKK(){},
fiV(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zB,A.L,w,w),A.aB,C.bW(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VK,w,u,v,w,w,A.n),w,w,w,A.ew,A.a9,w,w,w),w,w,w)},
fYy(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eL()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aC(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mF
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aC(4)
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
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aC(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aVO(b0,a9,C.T(u,t),q,N.mF,w+v)}return new B.aVO(C.aX(u),C.et([25],u),C.T(u,t),21,N.mF,1)},
hmT(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="/")k=new C.y(-s,-t)
if(q==="\\")k=new C.y(k.b,k.a)}return new C.bnC(p,o)},
hie(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVO:function aVO(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
V5:function V5(d){this.a=d},
bjf:function bjf(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fn$=g
_.kZ$=h
_.fS$=i
_.fo$=j
_.br$=k
_.a8$=l
_.c=_.a=null},
e8d:function e8d(d){this.a=d},
e8c:function e8c(d,e){this.a=d
this.b=e},
e8e:function e8e(){},
e83:function e83(d,e){this.a=d
this.b=e},
e84:function e84(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e87:function e87(d,e){this.a=d
this.b=e},
e85:function e85(d){this.a=d},
e86:function e86(d){this.a=d},
e88:function e88(d){this.a=d},
e89:function e89(d){this.a=d},
e8a:function e8a(d){this.a=d},
e8b:function e8b(d,e){this.a=d
this.b=e},
bgf:function bgf(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgs:function dgs(d,e,f){this.a=d
this.b=e
this.c=f},
dgv:function dgv(d,e,f){this.a=d
this.b=e
this.c=f},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
V7:function V7(d){this.a=d},
aDc:function aDc(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fn$=g
_.kZ$=h
_.fS$=i
_.fo$=j
_.br$=k
_.a8$=l
_.c=_.a=null},
e8w:function e8w(d){this.a=d},
e8v:function e8v(d,e){this.a=d
this.b=e},
e8x:function e8x(){},
e8h:function e8h(){},
e8q:function e8q(d,e){this.a=d
this.b=e},
e8n:function e8n(d){this.a=d},
e8j:function e8j(d){this.a=d},
e8o:function e8o(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8i:function e8i(d){this.a=d},
e8r:function e8r(d){this.a=d},
e8m:function e8m(d,e){this.a=d
this.b=e},
e8s:function e8s(d){this.a=d},
e8l:function e8l(d,e){this.a=d
this.b=e},
e8t:function e8t(d){this.a=d},
e8k:function e8k(d,e){this.a=d
this.b=e},
e8u:function e8u(d){this.a=d},
bgu:function bgu(d,e){this.b=d
this.a=e},
aLb:function aLb(){},
bwm:function bwm(){},
aLc:function aLc(){},
bwn:function bwn(){},
a0m(d,e,f,g,h,i){return new B.btb(d,e,f,g,h,i)},
btb:function btb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ffd:function ffd(){},
ffe:function ffe(){},
fff:function fff(){},
ffg:function ffg(){},
ffh:function ffh(){},
ffi:function ffi(){},
ffj:function ffj(){},
ffk:function ffk(){},
a7R:function a7R(d){this.a=d},
ceF:function ceF(d){this.a=d},
ceG:function ceG(){},
ceE:function ceE(d,e){this.a=d
this.b=e},
ceD:function ceD(d){this.a=d},
VY:function VY(d){this.a=d},
aE3:function aE3(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fn$=f
_.kZ$=g
_.fS$=h
_.fo$=i
_.br$=j
_.a8$=k
_.c=_.a=null},
eHK:function eHK(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d){this.a=d},
buy:function buy(d,e,f){this.b=d
this.c=e
this.a=f},
UH:function UH(d){this.a=d},
biP:function biP(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fn$=d
_.kZ$=e
_.fS$=f
_.fo$=g
_.br$=h
_.a8$=i
_.c=_.a=null},
dTu:function dTu(){},
dTv:function dTv(){},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTs:function dTs(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTt:function dTt(d){this.a=d},
bpn:function bpn(d,e,f){this.b=d
this.c=e
this.a=f},
TU:function TU(d){this.a=d},
bir:function bir(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fn$=d
_.kZ$=e
_.fS$=f
_.fo$=g
_.br$=h
_.a8$=i
_.c=_.a=null},
dEn:function dEn(){},
dEo:function dEo(){},
dEi:function dEi(){},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEk:function dEk(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dEj:function dEj(d){this.a=d},
aHs:function aHs(d,e,f){this.a=d
this.b=e
this.c=f},
Uy:function Uy(d){this.a=d},
biJ:function biJ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQM:function dQM(d){this.a=d},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQO:function dQO(d){this.a=d},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d){this.a=d},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQF:function dQF(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQE:function dQE(d){this.a=d},
dQT:function dQT(d){this.a=d},
dQU:function dQU(d){this.a=d},
dQD:function dQD(d){this.a=d},
bkL:function bkL(d,e,f){this.b=d
this.c=e
this.a=f},
Vj:function Vj(d){this.a=d},
aDm:function aDm(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
edT:function edT(d,e){this.a=d
this.b=e},
edU:function edU(d,e,f){this.a=d
this.b=e
this.c=f},
edS:function edS(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d){this.a=d},
edR:function edR(d){this.a=d},
edZ:function edZ(d){this.a=d},
edY:function edY(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
edW:function edW(d,e){this.a=d
this.b=e},
ee0:function ee0(d){this.a=d},
Vw:function Vw(d){this.a=d},
aDI:function aDI(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eoK:function eoK(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoJ:function eoJ(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoN:function eoN(d){this.a=d},
eoO:function eoO(d){this.a=d},
eoP:function eoP(d,e){this.a=d
this.b=e},
VR:function VR(d){this.a=d},
bjX:function bjX(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eD1:function eD1(){},
eDa:function eDa(){},
eD6:function eD6(d){this.a=d},
eD5:function eD5(){},
eD7:function eD7(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eD2:function eD2(d){this.a=d},
Vh:function Vh(d){this.a=d},
bjq:function bjq(d,e,f,g,h,i,j,k){var _=this
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
_.fn$=f
_.kZ$=g
_.fS$=h
_.fo$=i
_.br$=j
_.a8$=k
_.c=_.a=null},
ecy:function ecy(){},
ecz:function ecz(){},
ecr:function ecr(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecp:function ecp(d){this.a=d},
ect:function ect(d){this.a=d},
eco:function eco(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecn:function ecn(d,e){this.a=d
this.b=e},
ecv:function ecv(d){this.a=d},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecx:function ecx(d){this.a=d},
eck:function eck(d,e){this.a=d
this.b=e},
bcr:function bcr(d,e,f){this.c=d
this.d=e
this.a=f},
aKx:function aKx(){},
bwd:function bwd(){},
aKQ:function aKQ(){},
bwi:function bwi(){},
aLk:function aLk(){},
bws:function bws(){},
aLO:function aLO(){},
bwE:function bwE(){},
jJ(d,e,f,g,h,i){return new B.b61(h,d,f,g,i,e,null)},
hmJ(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fNQ(g,e,f),d,w,!0,!0,x.H)},
hA(d,e,f,g,h,i,j){return new B.av5(f,j,i,h,g,d,e,null)},
qO(d,e,f){return B.i8f(d,e,f)},
i8f(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qO=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gb8()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lX(2),$async$qO)
case 7:q=h
w=8
return C.b(q.hr(A.fY),$async$qO)
case 8:p=h
if(p==null){w=1
break}o=J.eT(A.dD.gaM(p))
w=9
return C.b(B.cpz(C.a([B.hbG(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qO)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.S(D.aNV)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qO,v)},
le(d,e,f,g){var w,v=$.are
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vS(v,e,f,g)},
vS(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dF(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dF(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dF(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dF(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dF(t,"",160,-0.7,g*0.4,w)
return E.dF(900,"",90,0,g*0.45,u)
case"zap":return E.dF(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dF(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dF(320,"",220,-0.7,g*0.35,v)
return E.dF(1500,"",200,0,g*0.22,u)
case"organic":return E.dF(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dF(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dF(t,"",s,0,g*0.5,w)}},
Bu(d,e,f,g){var w,v,u,t,s,r,q,p=$.are
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.le(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bS(p,p.gM(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.le(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.ceB(d,s,f,g),u)}},
a7Q(d,e){var w="sine",v="noise"
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
zk(d){return B.hDG(d)},
hDG(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zk=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$zk)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aG(0,q,null)
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
return C.i($async$zk,v)},
vP(d,e){return B.hDH(d,e)},
hDH(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vP=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vP)
case 6:s=g
w=7
return C.b(s.au("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vP)
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
return C.i($async$vP,v)},
b61:function b61(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crw:function crw(d){this.a=d},
crx:function crx(d,e){this.a=d
this.b=e},
fNQ:function fNQ(d,e,f){this.a=d
this.b=e
this.c=f},
fNP:function fNP(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crs:function crs(d){this.a=d},
eQ:function eQ(d,e,f){this.c=d
this.d=e
this.a=f},
av5:function av5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fi:function fi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crr:function crr(d){this.a=d},
EY:function EY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cry:function cry(d){this.a=d},
mA:function mA(){},
crt:function crt(d,e,f){this.a=d
this.b=e
this.c=f},
crv:function crv(d){this.a=d},
cru:function cru(){},
ceB:function ceB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cu7(){var w=0,v=C.j(x.cL),u,t
var $async$cu7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qP().beL("assets/data/world110.json"),$async$cu7)
case 3:u=t.hIf(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cu7,v)},
hIf(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
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
g=C.aPI(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaD(o,m,l,j,i,h,g,f,p,q)
e.bx0(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaE(a1)},
frx(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gw(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaD:function aaD(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaE:function aaE(d){this.a=d},
uX:function uX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OQ:function OQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xT:function xT(d,e,f){this.a=d
this.b=e
this.c=f},
OP:function OP(d){this.a=0
this.b=d
this.c=0},
hK8(d,e,f){return $.hK9.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dcc(d,e,f))},
UO:function UO(d){this.a=d},
aCJ:function aCJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fn$=j
_.kZ$=k
_.fS$=l
_.fo$=m
_.br$=n
_.a8$=o
_.c=_.a=null},
dWc:function dWc(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dVF:function dVF(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVE:function dVE(d,e,f){this.a=d
this.b=e
this.c=f},
dVC:function dVC(d){this.a=d},
dVB:function dVB(){},
dVA:function dVA(d){this.a=d},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dVN:function dVN(d){this.a=d},
dVO:function dVO(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dW_:function dW_(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
dW3:function dW3(d){this.a=d},
dVX:function dVX(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dVU:function dVU(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dVT:function dVT(d,e){this.a=d
this.b=e},
dW8:function dW8(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dW9:function dW9(d){this.a=d},
dVR:function dVR(d){this.a=d},
dWa:function dWa(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVK:function dVK(d){this.a=d},
dW1:function dW1(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVz:function dVz(){},
dVy:function dVy(d){this.a=d},
dVx:function dVx(d){this.a=d},
beG:function beG(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dcc:function dcc(d,e,f){this.a=d
this.b=e
this.c=f},
dcd:function dcd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKW:function aKW(){},
aKX:function aKX(){},
aeK(d,e,f,g,h){return new B.bt6(d,e,f,g,h)},
bt6:function bt6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ff6:function ff6(){},
ff7:function ff7(){},
ff8:function ff8(){},
ff9:function ff9(){},
ffa:function ffa(){},
ffb:function ffb(){},
ffc:function ffc(){},
VU:function VU(d){this.a=d},
bk0:function bk0(){this.d=$
this.c=this.a=null},
eDV:function eDV(d){this.a=d},
eDW:function eDW(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDX:function eDX(){},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDS:function eDS(d){this.a=d},
hKA(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eL()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eL()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjN(new C.cs(null,x.A),new B.OP(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hKC(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hKB(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hcS(d,e,f){return $.hLc.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eYh(d,e,f))},
VF:function VF(d){this.a=d},
bjN:function bjN(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fn$=j
_.kZ$=k
_.fS$=l
_.fo$=m
_.br$=n
_.a8$=o
_.c=_.a=null},
evY:function evY(d,e){this.a=d
this.b=e},
ew8:function ew8(d,e){this.a=d
this.b=e},
ew9:function ew9(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d){this.a=d},
ew7:function ew7(d){this.a=d},
ewa:function ewa(d){this.a=d},
ew4:function ew4(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewc:function ewc(d){this.a=d},
ew3:function ew3(d,e){this.a=d
this.b=e},
ewd:function ewd(d){this.a=d},
ew2:function ew2(d,e){this.a=d
this.b=e},
ewe:function ewe(d){this.a=d},
ew1:function ew1(d){this.a=d},
ewf:function ewf(d){this.a=d},
ew0:function ew0(d){this.a=d},
ewg:function ewg(d){this.a=d},
ew_:function ew_(d){this.a=d},
ewh:function ewh(d){this.a=d},
evZ:function evZ(d){this.a=d},
evX:function evX(){},
evW:function evW(){},
evV:function evV(d){this.a=d},
evU:function evU(d){this.a=d},
br9:function br9(d,e){this.b=d
this.a=e},
eYh:function eYh(d,e,f){this.a=d
this.b=e
this.c=f},
eYi:function eYi(){},
eYj:function eYj(){},
UP:function UP(d){this.a=d},
aCK:function aCK(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fn$=k
_.kZ$=l
_.fS$=m
_.fo$=n
_.br$=o
_.a8$=p
_.c=_.a=null},
dWg:function dWg(){},
dWJ:function dWJ(){},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWw:function dWw(d){this.a=d},
dWl:function dWl(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWC:function dWC(d){this.a=d},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWD:function dWD(d){this.a=d},
dWE:function dWE(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWG:function dWG(d){this.a=d},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWo:function dWo(d,e){this.a=d
this.b=e},
dWI:function dWI(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWk:function dWk(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWj:function dWj(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWi:function dWi(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWe:function dWe(){},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWd:function dWd(d){this.a=d},
b9S:function b9S(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Vx:function Vx(d){this.a=d},
bjK:function bjK(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fn$=e
_.kZ$=f
_.fS$=g
_.fo$=h
_.br$=i
_.a8$=j
_.c=_.a=null},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
bqI:function bqI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWr:function eWr(d){this.a=d},
aKY:function aKY(){},
bwk:function bwk(){},
aLw:function aLw(){},
bwy:function bwy(){},
aLz:function aLz(){},
bwA:function bwA(){},
hKy(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eL()
v.dB(w)
v=v.aj()
u=new C.eL()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.biq(new C.cs(null,x.A),new B.OP(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pj:function Pj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TS:function TS(d){this.a=d},
biq:function biq(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fn$=i
_.kZ$=j
_.fS$=k
_.fo$=l
_.br$=m
_.a8$=n
_.c=_.a=null},
dDP:function dDP(){},
dDD:function dDD(){},
dDE:function dDE(d,e){this.a=d
this.b=e},
dDF:function dDF(d,e){this.a=d
this.b=e},
dDC:function dDC(d){this.a=d},
dDB:function dDB(d){this.a=d},
dDH:function dDH(d){this.a=d},
dDA:function dDA(d,e){this.a=d
this.b=e},
dDI:function dDI(d){this.a=d},
dDz:function dDz(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dDy:function dDy(d){this.a=d},
dDK:function dDK(d){this.a=d},
dDx:function dDx(d){this.a=d},
dDL:function dDL(d){this.a=d},
dDw:function dDw(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDv:function dDv(d){this.a=d},
dDN:function dDN(d){this.a=d},
dDu:function dDu(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDt:function dDt(d){this.a=d},
dDG:function dDG(d){this.a=d},
dDs:function dDs(d){this.a=d},
b9g:function b9g(d,e){this.b=d
this.a=e},
aeo:function aeo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UL:function UL(d){this.a=d},
biS:function biS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fn$=p
_.kZ$=q
_.fS$=r
_.fo$=s
_.br$=t
_.a8$=u
_.c=_.a=null},
dUO:function dUO(d){this.a=d},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d,e){this.a=d
this.b=e},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUG:function dUG(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUH:function dUH(d){this.a=d},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUI:function dUI(d){this.a=d},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d){this.a=d},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUL:function dUL(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUM:function dUM(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUN:function dUN(d){this.a=d},
dUv:function dUv(d){this.a=d},
bew:function bew(d,e){this.b=d
this.a=e},
d9k:function d9k(d){this.a=d},
Vt:function Vt(d){this.a=d},
bjJ:function bjJ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fn$=f
_.kZ$=g
_.fS$=h
_.fo$=i
_.br$=j
_.a8$=k
_.c=_.a=null},
eo6:function eo6(d,e){this.a=d
this.b=e},
eo7:function eo7(d){this.a=d},
eo5:function eo5(d){this.a=d},
eo8:function eo8(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo9:function eo9(d){this.a=d},
eo3:function eo3(d){this.a=d},
eoa:function eoa(d){this.a=d},
eo2:function eo2(d){this.a=d},
eob:function eob(d){this.a=d},
eo1:function eo1(d,e){this.a=d
this.b=e},
eoc:function eoc(d){this.a=d},
eo0:function eo0(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eo_:function eo_(d,e){this.a=d
this.b=e},
eoe:function eoe(d){this.a=d},
enZ:function enZ(d,e){this.a=d
this.b=e},
bpY:function bpY(d,e){this.b=d
this.a=e},
aKu:function aKu(){},
bwc:function bwc(){},
aKT:function aKT(){},
bwj:function bwj(){},
aLv:function aLv(){},
bwx:function bwx(){},
hbG(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lh(e,f,$,null)
v=w.bH8(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hYc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nU(A.k.aa(p.c,4)),"y",C.nU(A.k.aa(p.d,4)),"v",p.e,"l",C.nU(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nU(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nU(A.k.aa(p.z,3)),"s",C.nU(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fl(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i6D(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
if(!$.qa().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tn(a2,d,a0,a1)
a3.apg(a2,d,a0,a1)
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
d=C.kh(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kh(J.q(t,"b"))
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
if(m!=null&&l!=null)a6.ajT(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gT(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bnD(i,k)}catch(a4){return a5}},
ftj(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ftj=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$ftj)
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
return C.i($async$ftj,v)},
bD_(d){return B.i8b(d)},
i8b(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bD_=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bD_)
case 7:w=6
return C.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bD_)
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
return C.i($async$bD_,v)},
cpz(d,e){var w=0,v=C.j(x.g7),u
var $async$cpz=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h0d().x3(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpz,v)}},D,S,H,T,A_,A9,Aa,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[134]
A1=c[144]
Ab=c[143]
A2=c[135]
A3=c[131]
I=c[123]
P=c[116]
A4=c[119]
Ac=c[137]
A5=c[104]
A6=c[117]
G=c[126]
Ad=c[121]
Ae=c[136]
A7=c[140]
Af=c[67]
Y=c[76]
Ag=c[83]
Ah=c[80]
N=c[111]
Q=c[87]
Ai=c[145]
Aj=c[113]
Z=c[122]
O=c[124]
U=c[141]
Ak=c[71]
Al=c[139]
V=c[142]
M=c[138]
A8=c[92]
W=c[112]
K=c[130]
R=c[93]
Am=c[24]
E=c[26]
F=c[94]
L=c[107]
B=a.updateHolder(c[17],B)
D=c[120]
S=c[133]
H=c[41]
T=c[128]
A_=c[127]
A9=c[132]
Aa=c[125]
An=c[129]
X=c[100]
B.ajo.prototype={}
B.V0.prototype={
R(){return new B.bjd(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.my(0,null,null))}}
B.bjd.prototype={
gVI(){var w,v=this.d
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
t.m(new B.e5d(t))
t.a.toString
p=t.gVI()
w=3
return C.b(B.byy(B.hMq(q,B.hY3(p),o,t.ay)),$async$N7)
case 3:s=e
r=s==null?null:J.iU(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hZt(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e5e(t,o,r))
$.aW.x1$.push(new B.e5f(t))
case 1:return C.h(u,v)}})
return C.i($async$N7,v)},
XH(d){return this.bY0(d)},
aUG(){return this.XH(null)},
bY0(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XH=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jD()
t.f.saV(0,o)
t.m(new B.e5q(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byy(B.hTd(o)),$async$XH)
case 3:r=n.a=m.i6l(f)
p.b=""
if(r!=null&&!B.hY4(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hZu(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajo(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e5r(p,t))
t.c2j(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XH,v)},
c2j(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVI()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e5m(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e5k(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e5n(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e5o(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e5p(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=C.m(16),f=C.I(A.bt.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eOQ,A.bf,C.E(C.d(m.Q,l,l,l,l,l,l,A.T0,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fdi
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ad.Ts,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eZt,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vg,C.d(u,l,l,l,l,l,l,D.f15,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dh,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f3v,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.co,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.D(A.LJ,new C.cn(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.m4,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.N,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a79,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bt.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f8K,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.e5O)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahI(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bq1,A.ei,l,l,1/0),A.bc,A.ic),C.E(B.h20(m.gVI(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e5u(m),l,A.bt,l),new B.dA("Invent something new",!i,new B.e5v(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dbj[p]
i.push(new B.dA(n,!1,new B.e5w(m,n),l,A.bt,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cWk[p]
i.push(new B.dA(r,!1,new B.e5x(m,r),l,A.bt,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kC,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e5y(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dn,!0,A.a4,l,A.an,l,A.aOD,l,l),1)
h=m.at
v=h&&j?D.bE8:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e5z(m,k),A.bt,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jJ(A.bt,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FM.prototype={}
B.uJ.prototype={}
B.Vs.prototype={
R(){return new B.aDC(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDC.prototype={
gaVR(){var w,v,u,t=this,s=D.GN[t.cx],r=D.Qh[t.cy],q=D.C3[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.e9(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avq[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.elj())},
ga1U(){return D.GN[this.cx].d/this.gaVR()},
gaNg(){return 0.1*(D.GN[this.cx].d/0.9)/D.Qh[this.cy].d},
a_(){this.a1()
this.lc()
B.zk("rocket_lander").bB(new B.elD(this),x.P)},
c2s(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lv(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.elE())
return}w=D.re[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1U()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNg())}if(m.dy){t=m.r
v=v.aB(0,t.aF(0,t.gcl()*6*D.axh[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
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
p=D.C3[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vP("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.Bu("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1U()/(D.re[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1U()/(D.re[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bu(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.elF())},
af0(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f0B,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.ell(this,g,w),v,h,v))
return new C.D(A.eJ,C.v(C.a([u,A.cV,C.bW(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCn(d){var w,v,u,t,s=this,r=null,q=s.ga1U()/(D.re[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNg()),o=D.axh[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Tn,r,r,r),A.S,s.af0("ENGINE: "+D.GN[s.cx].b,D.GN,new B.ela(s),new B.elb(s),A.cs),s.af0("FUEL TANK: "+D.Qh[s.cy].b,D.Qh,new B.elc(s),new B.eld(s),A.b2),s.af0("LANDING GEAR: "+D.C3[s.db].b,D.C3,new B.ele(s),new B.elf(s),A.aS),s.af0("EXTRAS (tap to add)",D.avq,new B.elg(s),new B.elh(s),A.bt)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fvc)
o=(q?A.b2:A.cf).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVR(),2)
u=A.k.aa(s.ga1U()/(D.re[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C3[s.db].d*100)+".",r,r,r,r,r,r,D.f1d,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bT,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fi(A.nh,"Launch",new B.eli(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lz,new C.o(D.bgH,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aWZ(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b3,A.q,1)
return C.o9(A.jz,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.el7(e),new B.el8(e),w,w,w,w,new B.el9(e))},
aWY(d,e,f){return this.aWZ(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.elw(s,D.re[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.re[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.elx(s,w),r,D.re[w].c,r))}v=C.a([s.aWY(F.ali,new B.ely(s),s.y),A.bf,s.aWZ(A.vD,new B.elz(s),s.Q,130),A.bf,s.aWY(A.Nt,new B.elA(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aS:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bIn,A.f,r,r,new C.o(u,r,C.I(A.b3,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.elB(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jJ(A.cs,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.B(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bgc.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.re[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bjl,a0,0.25)
a1.toString
d.saq(new C.a8(A.b_,A.b5,A.x,C.a([F.acW,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aY(new C.a9(0,0,g,f),d)
w=new C.eL()
w.dB(5)
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
r=new C.aO(e.r,A.ap,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.eL()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bz(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bF())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aO(r,d)
o=C.cl(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.im)
a0=C.N()
a0.r=A.bo.gp(0)
a2.aD(d,a0)
a0=C.bx(o.cB(2),A.rw)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j1(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.Hk
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ap,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bF())
k=C.N()
k.r=A.aM.gp(0)
a2.aO(n,k)
i=new C.aO(i,A.ap,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bF())
k=C.N()
k.r=A.c.gp(0)
a2.aO(i,k)}k=e.r
m=new C.aO(k,A.ap,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cU(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cU(-14,-10,0,-26))
m.F(new C.bF())
i=C.N()
i.saq(D.bUH.av(0,D.eHK))
a2.aO(m,i)
i=C.N()
i.r=A.aS.gp(0)
a2.ae(D.w4,5,i)
i=new C.aO(k,A.ap,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bF())
h=C.N()
h.r=A.ay.gp(0)
a2.aO(i,h)
f=new C.aO(k,A.ap,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bF())
k=C.N()
k.r=A.ay.gp(0)
a2.aO(f,k)
g.restore()},
ar(d){return!0}}
B.aLt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bww.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buw()}}
B.aRm.prototype={}
B.a2E.prototype={}
B.b9j.prototype={}
B.TT.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aC1(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.JW,D.JW,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC1.prototype={
a_(){var w=this
w.a1()
w.lc()
w.as=new B.c_J(w.gcaF())
new B.dEg(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.btx()},
caG(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.F(["t","init","data",$.hbV],x.N,x.z))
v.at=!0
v.ax=""
v.axN()
break
case"pick":v.m(new B.dDT(v,d))
break
case"shot":v.agT(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axN(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ato[q.CW]
v=new B.dDU()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fl(u)
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
agT(d){return this.crn(d)},
crn(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agT=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cpz(C.a([B.hbG(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agT)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.S(D.aNV)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agT,v)},
axe(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lv(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bu(w)!==A.k.bu(v.ok)){B.a7Q("kick",0.4)
v.a4v(170,new B.dEh())}v.ok=w
return},
agI(d){var w,v,u,t,s=this
s.m(new B.dDV(s,d))
if(d==null){s.fx=D.JW
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a1<1>")
u=C.C(new C.a1(w,new B.dDW(d),v),v.k("J.E"))
t=A.d.gJ(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.axN()
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.ctP(t,d)
return},
ctP(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7Q("kick",0.8)
this.a4v(260,new B.dDX())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4v(w*70,new B.dDY(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vS("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7Q("kick",0.3)
break
default:B.vS("organic",2+A.o.E(e.length,6),200,0.4)}},
cyg(d){this.m(new B.dE_(this,d))},
aXg(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.axe(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aC(w)]
p.p4=""},
bTE(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dDQ(u,w,d))
v=x.t
B.Bu("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4v(1100,new B.dDR(u))
return}if(d==null){if(u.cx!=null)u.agI(null)
return}u.agI(d)},
bXk(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eY2,u,u,u)}else if(d==null||e==null)w=D.faQ
else{w=x.p
w=C.B(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i6,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.Dh,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bKM,u,u,u,new B.dDS(v),u,u,u,u,"Back to the whole body",A.cb)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VI,u,s,t,u,u,A.n),u,u,u,u,I.ah_,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dlN.h(0,g)
i.axN()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d4w
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.axe(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mz,h,h,h,new B.dE6(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DB(h,A.qc,q)}else q=A.kx
q=C.v(C.a([C.E(q,1),new C.D(F.Y_,i.bXk(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cXL[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dE7(i,o),o.c,A.bZ,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dE8(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hA(A.cf,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dE9(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EY(D.ato[j],i.CW===j,new B.dEa(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEb(i),D.ak8,A.aS,h),new B.fi(A.jZ,"Reset view",new B.dEc(i),A.c,h),new B.dA(l,m,new B.dEd(i),A.G2,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEe(i),A.o1,A.cf,h))
p.push(new B.eQ(v,h,h))
return B.jJ(A.bZ,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aKv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aKw.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btw()}}
B.c_J.prototype={
kz(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hhY
$.hhY=v+1
u="ngmy-body-viewer-"+v
$.yt()
$.q9().pR(u,new B.c_K(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_L(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byv(w.contentWindow)
if(w!=null)J.fPv(w,e,"*")}}catch(v){}}}
B.xV.prototype={}
B.C3.prototype={}
B.ni.prototype={}
B.ba1.prototype={}
B.TY.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new B.aC4(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC4.prototype={
a_(){var w=this
w.a1()
w.lc()
w.abK()
$.aW.x1$.push(new B.dGr(w))},
abK(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abK=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abK)
case 6:q=e.t5("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dG5(s,r))
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
return C.i($async$abK,v)},
ac3(d){return this.c05(d)},
c05(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ac3=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.aA(),$async$ac3)
case 6:r=f
q=s.cx
p=C.a3(q).k("jN<co.E,n>")
q=C.C(new C.jN(q,new B.dG8(),p),p.k("J.E"))
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
return C.i($async$ac3,v)},
avX(d,e,f,g){var w="c"+this.y++,v=new B.C3(w,e,f,g)
this.d.n(0,w,v)
return v},
mw(d,e,f){return this.avX(0,e,f,0)},
ab5(d,e){var w
if(D.yU.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tw(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRg(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fS$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e8(m,D.cI1[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tw(p,0)&&n.tw(p,1)
break
case"or":p=q.a
o=n.tw(p,0)||n.tw(p,1)
break
case"xor":p=q.a
o=n.tw(p,0)!==n.tw(p,1)
break
case"nand":p=q.a
o=!(n.tw(p,0)&&n.tw(p,1))
break
case"nor":p=q.a
o=!(n.tw(p,0)||n.tw(p,1))
break
case"not":o=!n.tw(q.a,0)
break
default:o=n.tw(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMo(){return this.aRg(null)},
lv(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMo()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gaf(0),v=new C.fb(w,new B.dGs()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fS$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fS$)
o=s+1
E.dF(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
avY(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m_(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
ase(d){var w=this
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dG3(w,d))
return}w.m(new B.dG4(w,d))},
cu6(d){this.m(new B.dG9(this,d,$.bDl()[d]))},
c4z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDl()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a1<J.E>")
s=t.k("J.E")
r=C.C(new C.a1(new C.bc(v,u),new B.dFZ(),t),s)
A.d.b0(r,new B.dG_())
q=C.C(new C.a1(new C.bc(v,u),new B.dG0(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dG1(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h_(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRg(0)
h=m.h(0,A.d.gJ(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jI(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dG2(d,o,a0))},
awL(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bS(s,s.gM(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cd2(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bS(r,r.gM(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bXd(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yU.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ab5(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.y(p,o)
s=l}}}return t},
bLj(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ab5(p,o)
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
c4B(d){var w,v,u,t=this,s=t.awL(d)
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
t.m(new B.dGa())
return}u=t.bLj(d)
if(u!=null)t.m(new B.dGb(t,u))
else t.m(new B.dGc(t))},
auM(d){return this.c_6(d)},
c_6(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auM=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awL(d)
if(s==null){w=1
break}C.jj()
t.m(new B.dG7(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auM,v)},
byg(d){if(this.x.A(0,A.au))return
this.m(new B.dFY(this,d,A.cI))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDl()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o1:O.ra,A.ad,h,h,h,21),h,h,h,new B.dGl(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cr.j(0.14)
r=C.I(A.cr.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eXd,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f4p,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.mn,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.flN,i.gc4y(),C.bl(A.cr,h,h,h,h,h,h,h,h,h,h,A.cb))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.LS,D.bqE,h,h,1/0))}u.push(C.E(C.cp(new B.dGm(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yU.h(0,r).a+": "+D.yU.h(0,r).e,h,h,h,h,h,h,A.rJ,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Aa.agI,A.bT,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yU.gdK(D.yU),s=s.gaf(s);s.C();){r=s.gT(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aPK,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fz,A8.LO,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGn(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d8B[l]
s.push(new B.fi(A.Nu,k.b,new B.dGo(i,k),A.cr,h))}s.push(new B.fi(D.y2,"Clear",new B.dGp(i),A.cf,h))
r=C.a([],g)
for(j=0;q=$.bDl(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ef:A.li
o=i.ay
n=i.cx.t(0,j)?A.b2:A.cd
r.push(new B.dA(q.a,o===j,new B.dGq(i,j),p,n,h))}return B.jJ(A.cr,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.bak.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.abv.gp(0)
a7.aY(new C.a9(0,0,0+a5,0+a6),w)
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
g=a5.ab5(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.py(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cd.j(0.28).gp(0)
l.z=G.mC
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dP:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HR)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.py(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aO(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c4A(a7,a5.d)},
c4A(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yU.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cl(a0.c,64,64)
s=C.bx(t,A.l1)
r=w.cy===v
q=s.eO(A.cA)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lq
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bU(a0.c,52)))
d.ae(q,52,p)}q=s.eO(A.cJ)
p=C.N()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a8(A.b_,A.b5,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.Nz:D.bEE}else l=e.b
k=B.fUW(C.jI(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aB(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fUW(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fUW(f,9,u?A.dP:A.c1,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXO(d,w.ab5(a0,h),o)
this.aXO(d,a0.c.ad(0,D.HR),o)},
aXO(d,e,f){var w
$.W()
w=C.N()
w.r=D.abv.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
ar(d){return!0}}
B.aKB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwf.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btC()}}
B.N0.prototype={
R(){return new B.aCl(C.my(0,null,null))}}
B.K3.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Al.prototype={}
B.aCl.prototype={
c4F(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMf(w,e))},
bZ_(){var w=this
w.e.q()
w.e=C.my(w.f,null,null)
w.m(new B.dMe(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oh(t,C.c8(v,A.bX,t?new B.bqi(w.e,w.gc4E(w),new B.dMg(d),v):new B.aGB(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dMh(w,u),x.C)}}
B.brR.prototype={}
B.bqi.prototype={
aXP(d,e){var w=null
return new C.D(I.Yr,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eXN,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,R.ni,v,v,v,w.e,v,v,v,v,v,v),A.rD,D.bws],u),A.m,v,A.e,A.j,0,v,v),s=w.aXP("STUDIOS","Play, make things, and keep what you make")
$.bDm()
return C.bm(!0,C.v(C.a([new C.D(D.bvx,t,v),C.E(C.vq(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m5(s,v),new C.nM(A.hx,C.OC(new C.ok(new B.eVZ(d),22,!0,!0,!0,0,C.rR(),v),D.aNK),v),new C.m5(w.aXP("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nM(D.bqL,C.OC(new C.ok(new B.eW_(w),6,!0,!0,!0,0,C.rR(),v),D.aNK),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aet.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n2,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aef],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eE(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fl,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n2,A.d.gJ(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aef],w)
v=C.I(A.d.gJ(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gJ(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGp,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gJ(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BI,A.d.gJ(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fl,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PJ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RB,26),new C.ac(-6,A.G,A.d.gJ(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gJ(i),A.c,0.14)
p.toString
o=A.d.gJ(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.ddz,j),A.n),A.bd),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brg(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eZl,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.SM)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fJ,C.B(C.a([s,A.ey,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c0(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.brg.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j1(0,0.35)
t=C.cl(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aY(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
B.bqM.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.beP,D.ads],x.O),t=this.e,s=C.I(A.d.gJ(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k3,24)],x.V),q=C.m(22),p=A.d.gJ(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.ji,A.d.gJ(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b90(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.bd),w)}}
B.b90.prototype={
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
q.delete()}u=e.eb(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
ar(d){return!1}}
B.aGB.prototype={
R(){return new B.aGC(new C.cs(null,x.A),null,null)}}
B.aGC.prototype={
gtR(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bo8,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gYZ(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fc(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gavZ(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc4C(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUp(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaV3(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb5r(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtR()
w.da()
w.dS$.L(0,this.gctQ())},
ctR(){var w,v,u,t,s,r,q,p=this,o=p.gtR().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavZ().a){case 0:w=D.nl
break
case 1:w=D.u6
break
case 2:w=D.a1Q
break
case 3:w=D.nl
break
case 4:w=D.d1A
break
case 5:w=D.u6
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9e)r=0.09
else r=s===D.a9f?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bXf[v]
B.le("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bu("bell",D.c4Z,1400,0.35)}}p.ax=o},
q(){this.gtR().q()
this.gYZ().q()
this.bvu()},
afr(){var w=this
w.gtR().cSV(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eVF(w))},
cf4(){this.gtR().bY(0)
this.m(new B.eVE(this))},
ad1(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ad1=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaV3(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5r(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaUp(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bR(F.n2,null,new B.eVD(u,l,m,o),t,!0,!0,!0,A.ls,!1,!1,x.H),$async$ad1)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$ad1,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavZ(),f=i.a.c,e=f.b,d=i.gc4C(),a0=new B.Al(g,e,f.c,d,i.gaUp(),i.gaV3(),i.gb5r())
f=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o1:O.ra,A.ad,h,h,h,21),h,h,h,new B.eVN(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bOe,h,h,h,i.gc4D(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mz,h,h,h,new B.eVO(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYZ(),new B.eVP(i,a0),h),C.cp(new B.eVQ(i,a0))],g)
u=i.as
t=u?i.gcf3():i.gchm()
u=u?D.bDU:A.tU
s=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cb),C.E(C.c6(i.gtR(),new B.eVR(i,a1,a0),h),1),C.aH(h,h,h,h,D.bKC,h,h,h,new B.eVS(i),h,h,h,h,"Replay",A.cb)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
r.toString
s=B.hA(r,u+"x","Speed",2.5,0.4,new B.eVT(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.daW[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gJ(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eVU(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bXA[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gJ(o).A(0,A.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gJ(o).A(0,A.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gJ(o).A(0,A.d.gJ(n))?A.c:A.b3
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gJ(o).A(0,A.d.gJ(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agt,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eVV(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jJ(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b0,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxs(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nl[r]
p=A.k.D((1-A.ev.aw(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nl[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nl[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jY(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nl[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nl[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nl[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kD(q,new C.iG(n,f,A.b_,!0,f,new B.PJ(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nl[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gJ(w)
v=D.nl[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mg(new B.bpV(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bNP(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.u6[r]
p=A.pG.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.u6[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.u6[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jI(n,n,n,1)
m.fB(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PJ(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fB(3.141592653589793)
k=new C.iG(k,f,A.A,!0,f,new B.bqM(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kD(q,new C.iG(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cyM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1Q[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btl(d.d,l,D.av3,m,B.bqh(e,0.4,0.62),f,B.bqh(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fVr(g,w)
q=D.av3[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kD(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fVr(g,w)
r=D.a1Q[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kD(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.Tw,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bDB(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqh(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bpm(A.d.gJ(a1),B.bqh(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e1p),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aw(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fB(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jI(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.y(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kD(k*(0.45+0.55*o),C.dU(new C.iG(l,f,A.A,!0,f,new B.PJ(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eVw())
A.d.v(a0,new C.K(w,new B.eVx(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCO(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.u6[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mO.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.u6[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ax_[q]
k=C.dp()
k.mJ(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jI(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.u6[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kD(m,C.dU(new C.iG(k,e,A.A,!0,e,new B.PJ(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.u6[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dU(new C.mg(new B.b9G(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.ax_[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAn(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e1t],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nl[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.ax6[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nl[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nl[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mJ(l*h+D.d5q[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jI(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kD(g,C.dU(new C.iG(f,a3,A.A,!0,a3,new B.PJ(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nl[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ax6[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dU(new C.mg(new B.bpo(A.d.gJ(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bpV.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.hc)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mC
d.aD(q,t)
t=C.bx(u,A.hc)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
B.bpm.prototype={
a4(d,e){var w,v,u=this.c,t=C.cl(e.eb(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.Hk
d.hO(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hO(t,u)
u=t.cB(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hO(u,v)},
ar(d){return!0}}
B.b9G.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eb(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gJ(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.eL()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gJ(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
B.bpo.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eb(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cl(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
B.btl.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b_,A.b5,A.x,C.a([A.d.gJ(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aY(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bC(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fVr(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lq
a4=a3.H()
t.drawOval(C.c_(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gJ(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b_,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c_(a5),a4)
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
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gJ(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
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
t.drawPath((a2==null?a8.e=new C.cE(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bu(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.hc)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c_(a5),$.oF()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b_,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
B.aMk.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
B.a_R.prototype={
a5(){return"_Role."+this.b}}
B.pZ.prototype={}
B.qG.prototype={}
B.C7.prototype={}
B.YP.prototype={}
B.aej.prototype={}
B.a03.prototype={
gZ(d){return this.d}}
B.Ch.prototype={}
B.abb.prototype={}
B.abs.prototype={}
B.ado.prototype={}
B.bg9.prototype={
a22(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6r(d,e,f){return this.a22(d,e,f,0,0.55)},
aAw(d,e,f,g){return this.a22(d,e,f,0,g)},
b6s(d,e,f,g){return this.a22(d,e,f,g,0.55)},
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
aj6(d,e,f,g){var w="n"+this.ay++,v=new B.qG(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
AU(d,e,f){return this.aj6(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.dg9(e))
A.d.bn(w.c,new B.dga(e))
w.aW()},
bae(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mB.h(0,v.b).c===D.wB)return!1
w=this.b
if(A.d.b4(w,new B.dg6(d,e)))return!1
w.push(new B.C7(d,e))
this.aW()
return!0},
bXY(d){var w
if(d.b==="beat")return D.c57[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aC(500)
case 2:return 1400+w.aC(2200)
default:return 450+w.aC(2000)}},
aE_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.axm[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Ch(u,t,j.ax,90))
w.push(new B.Ch(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a03(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6r(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a03(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aC(700),j.ax))}j.f.push(new B.Ch(u,t,j.ax,120))
j.aAw(120,200,"noise",0.5)
j.b6r(261.63*Math.pow(2,([7,12,16,19][w.aC(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Ch(u,t,j.ax,230))
w.push(new B.Ch(u,t,j.ax+160,160))
w.push(new B.Ch(u,t,j.ax+320,100))
j.b6s(180+j.at.aC(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abb(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6s(300+w.aC(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abs(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a22(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a22(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.ado(u,D.awN[v],t,j.ax))
j.aAw(261.63*Math.pow(2,([0,5,9,12][j.at.aC(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAw(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c1e[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cp2(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.fb(w,new B.dg7(d));v.C();)j.az3(w.gT(0),j.ax+D.cdv[A.o.E(g.d,4)])
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
case"chance":s=j.at.aC(100)<D.cui[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.fb(w,new B.dg8(d));v.C();)j.az3(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.z6(w,0,v-700)},
cp2(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YP(e,"~"+d))},
az3(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aej(d.a,v,e,w))
u.push(new B.YP(w,v))},
aHl(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aE_(r)
u.n(0,r,o.ax+o.bXY(s))}}w=o.c
v=C.U(w).k("a1<1>")
q=C.C(new C.a1(w,new B.dgb(o),v),v.k("J.E"))
if(q.length!==0){A.d.bn(w,new B.dgc(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b1(u,1)
for(u=A.d.gaf(v),r=new C.fb(u,new B.dgd(p));r.C();)o.az3(u.gT(0),o.ax)}else o.aE_(u)}}A.d.bn(o.d,new B.dge(o))
A.d.bn(o.e,new B.dgf(o))
A.d.bn(o.f,new B.dgg(o))
A.d.bn(o.w,new B.dgh(o))
A.d.bn(o.x,new B.dgi(o))
A.d.bn(o.r,new B.dgj(o))
o.aW()},
uY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
cKB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.mB.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qG(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.C7(q,p))}k.aW()
return!0}catch(l){return!1}},
cNE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qG(n,r,new C.u(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bae(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
B.Fy.prototype={}
B.Vr.prototype={
R(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDB(new B.bg9(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDB.prototype={
abD(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abD=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$abD)
case 6:q=n.kh(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ekE(s))
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
return C.i($async$abD,v)},
a8D(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8D=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.ekt(s))
u=3
w=6
return C.b(C.aA(),$async$a8D)
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
return C.i($async$a8D,v)},
bJz(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.ekv())+"|"+A.d.cI(o,0,new B.ekw())
if(v===p.ch)return p.CW
u=new B.ekz()
t=x.s
s=C.a([],t)
r=new B.ekA(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.fb(n,new B.ekx());w.C();){q=n.gT(0)
if(!A.d.b4(o,new B.eky(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abD()
v.d.db=v.ay
w=v.qv(new B.el3(v))
w.iT(0)
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
w.buu()},
ab9(d){return this.bXq(d)},
bXq(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ab9=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$ab9)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cKB(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVv(A.d.gJ(D.awg))
if(s.c!=null)s.m(new B.ekD())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ab9,v)},
aVv(d){this.d.cNE(0,d.c,d.d)
this.DX()},
DX(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lK,new B.ekp(this))},
aw_(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bS(s,s.gM(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cd3(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bS(r,r.gM(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bXe(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mB.h(0,r.b).c===D.wB)continue
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
c4I(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hhZ(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cwx(d){var w,v,u,t,s,r,q=this,p=q.aw_(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aE_(p)
return}if(q.r)return
t=D.mB.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qt)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aW()
q.DX()
return}if(q.r)return
r=q.c4I(d)
if(r!=null){w=q.d
A.d.cC(w.b,r)
w.aW()
q.DX()}},
cem(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cd3(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aw_(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
cen(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_v(){var w,v,u=this
if(u.z!=null){w=u.bXe(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bae(v,w)}else v=!1
if(v){C.jP()
u.DX()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.DX()
u.x=null}},
abQ(d){return this.c_7(d)},
c_7(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abQ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aw_(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jj()
p=t.c
p.toString
w=3
return C.b(C.bR(F.n2,null,new B.ekG(q),p,!0,!0,!1,A.ls,!1,!1,x.y),$async$abQ)
case 3:if(f===!0){r.W(0,s)
t.DX()}case 1:return C.h(u,v)}})
return C.i($async$abQ,v)},
c4G(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AU(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.DX()},
afz(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afz=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bR(F.n2,null,new B.ekI(),s,!0,!0,!0,A.ls,!1,!1,x.es),$async$afz)
case 2:t=e
if(t!=null)u.aVv(t)
return C.h(null,v)}})
return C.i($async$afz,v)},
ad2(d){var w=0,v=C.j(x.H),u=this,t
var $async$ad2=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.eks(),t,null,!0,!0,x.y),$async$ad2)
case 2:if(f===!0){u.d.a9(0)
u.DX()}return C.h(null,v)}})
return C.i($async$ad2,v)},
B(d){var w=this,v=null,u=C.a([C.ahI(w.r?new C.bI(A.a3,v,v,new C.D(A.Fm,C.hf(D.bID,D.feP,new B.el1(w),v),v),v):w.c4J(),A.bc,A.iy),C.E(C.cp(new B.el2(w)),1)],x.p)
if(!w.r)u.push(w.crq())
return C.c8(v,A.bX,C.bm(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bFh(){var w=null,v=new B.eku(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bu.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.cd(C.v(C.a([D.fpI,A.at,D.fx2,A.aB,v.$4(A.oN,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.G7,A.cr,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lh,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akl,A.cd,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fwn,new C.bI(A.a7,w,w,C.bK(!1,D.fmW,w,w,!0,w,w,this.gbFa(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.V3,new C.o(F.n2,w,s,t,w,w,A.n),w,w,w,A.fA,Aa.ahJ,w,w,w),w,w,w),u,!0),0,0,0)},
c4J(){var w=this,v=null,u=C.aH(v,v,v,v,R.ni,v,v,v,new B.ekO(w),v,v,v,v,v,v),t=w.a85(A.Ni,"How it works",new B.ekP(w),!0),s=w.ay?A.o1:O.ra
return new C.D(D.buL,C.B(C.a([u,D.bwf,t,w.a85(s,"Sound",new B.ekQ(w),!0),w.a85(A.dW,"Ideas",w.gci4(),!0),w.a85(D.y2,"Clear",w.gc4H(w),!0),w.aMz(A.iW,"Show",new B.ekR(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMz(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Af.vq,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hr(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a85(d,e,f,g){return this.aMz(d,e,f,g,!1)},
crq(){var w=null,v=new B.ekK(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wB),v.$2("CHANGE",D.DC),v.$2("REACT",D.qt)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.Ax,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bq3,w,w,w)},
crr(d){var w,v,u,t,s=null,r=D.mB.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fz,C.aE(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aPK,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hL,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ekJ(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bga.prototype={
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
b8.aY(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
d.push(new C.py(h+a1,i,f-a1,g,f,g))
a2=D.mB.h(0,k.b).d
a3=D.mB.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rr(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hhZ(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mC
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HR)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.py(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aO(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
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
h=C.lf(o,i,A.dU.aw(0,v))
h.toString
i=C.lf(o,i,A.dU.aw(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rr(i,h)
o.saq(new C.a8(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jl
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
i.z=A.jl
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bT(P.pj,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgb(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cdV(b8,b5.d,b6)
b7.restore()},
cdV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mB.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cl(e.c,64,64)
t=C.bx(u,A.jI)
s=t.eO(A.cA)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lq
d.aD(s,r)
if(v>0){s=t.cB(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yW
d.aD(s,r)}s=t.eO(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b_,A.b5,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bgb(C.jI(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aB(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bgb(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.awN[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qt){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axm[A.o.E(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bgb(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgb(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wB)k.b0k(d,e.c.aB(0,D.HR),q)
k.b0k(d,e.c.ad(0,D.HR),q)},
b0k(d,e,f){var w
$.W()
w=C.N()
w.r=A.bX.gp(0)
d.ae(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
ar(d){return!0}}
B.aLr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bkK.prototype={}
B.PA.prototype={
gZ(d){return this.d}}
B.VG.prototype={
R(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjO(new C.cs(null,x.A),w,v,A.cI,A.bx,D.EA,null,null)}}
B.bjO.prototype={
aZ3(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bu((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avI[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.le("synth",u,420,0.3)
break
case"rainbow":B.le("bell",u,700,0.35)
break
case"stars":B.le("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aC(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aC(60),"",140,0,0.22,"noise")}},
c7I(d){return this.aZ3(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qv(new B.ewI(v))
w.iT(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.buD()},
gb_P(){var w=this.Q
return w<0?new H.mN(1,A.k.E(this.y*0.18,360),0.85,1).iB():D.Qj[w]},
aQW(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_P(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cd,A.ay,v.aj())
m.toString
j.push(new B.PA(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aC(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PA(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aC(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PA(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXR(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_P()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkK(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQW(e)
r.aZ3(e,!0)
r.m(new B.ewj())},
aXQ(){this.ax=null
this.m(new B.ewi())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.ews(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brb(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b49)
k=C.aE(A.c4,new C.an(A.W,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ewt(o),new B.ewu(o),new B.ewy(o),n,n,n,n,n,n,n,n,n,new B.ewz(o),new B.ewA(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cSf[w]
j.push(new B.dA(v.b,o.z===v.a,new B.ewB(o,v),v.c,A.bZ,n))}u=C.a([new B.EY(A.c,o.Q<0,new B.ewC(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EY(D.Qj[t],o.Q===t,new B.ewD(o,t),!1,n))
s=o.as
s=B.hA(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.ewE(o),s)
r=o.ch
q=r?A.o1:O.ra
q=C.a([new B.dA("Sound",r,new B.ewF(o),q,A.bZ,n),new B.fi(A.r9,"Undo",new B.ewv(o),A.c,n),new B.fi(D.y2,"Clear",new B.eww(o),A.cf,n)],m)
for(w=0;w<4;++w){p=D.d6Y[w]
q.push(new B.EY(p,o.at.A(0,p),new B.ewx(o,p),!1,n))}return B.jJ(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.brb.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.aY(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gJ(q).a,A.d.gJ(q).b))
for(p=C.U(q),m=p.k("ol<1>"),l=new C.ol(q,1,a5,m),l.CN(q,1,a5,p.c),l=new C.bS(l,l.gM(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bz(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gJ(q)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fB
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hv(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fB
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fB
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mN(1,A.o.E(i*5,360),0.85,1).iB()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bO
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gJ(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mN(1,A.o.E(a3*23,360),0.7,1).iB():l
a4.c4K(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=R.QN
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c4K(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bz(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bz(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bF())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jl
d.aO(n,p)
p=C.N()
p.r=h.gp(0)
d.aO(n,p)},
ar(d){return!0}}
B.VS.prototype={
R(){return new B.aDR(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aDR.prototype={
gIz(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tw,null,1,null,v)
w.cH(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIz()
w.da()
w.dS$.L(0,this.gbWn())},
bWo(){var w,v,u,t,s,r,q,p=this,o=p.gIz().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m0:new C.m6(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.le(s,D.auF[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIz().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.buJ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m6(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.Qj[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mz,j,j,j,new B.eDh(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.awO[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gIz(),new B.eDi(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Dg,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eDj(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hs,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cu6[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eDk(k,q),j,A.cd,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EY(D.Qj[o],k.w===o,new B.eDl(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o1:O.ra
l=C.a([new B.dA(m,n,new B.eDm(k),l,A.cd,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EY(D.awO[o][0],k.y===o,new B.eDn(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mv,"Replay",new B.eDo(k),A.c,j))
m=k.x
return B.jJ(A.cd,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bC,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.N,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hA(A.cd,A.o.u(A.k.V(m)),"Size",96,28,new B.eDp(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZa(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bu(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.E(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a9(p)
p.push(new C.cR(h,A.J,30*v))
p.push(new C.cR(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bu(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bZ:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mO.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mN(1,A.k.E(g*360+e*40,360),0.75,1).iB()
A.d.a9(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dU(C.ed(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aLG.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.a_l.prototype={}
B.Vo.prototype={
R(){var w=C.a([],x.aS)
return new B.aDt(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDt.prototype={
gad3(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b14(){return new H.mN(1,this.f.aj()*360,0.6,1).iB()},
aqx(d,e,f,g){var w=this,v=w.gad3().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_l(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b14(),C.a([],x.g)))},
bEC(d,e,f){return this.aqx(d,e,f,!1)},
bEB(d,e){return this.aqx(d,e,1,!1)},
ctL(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bEB(40+w*u/5,v.aj()*3.141592653589793*2)},
bFw(){var w=this.r
this.bEC(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.lc()},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fS$<300)return
u=a2.gad3()
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
if(o.length>260)A.d.cC(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lR(v.a-s)!==J.lR(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fS$-n.r>250){n.r=a2.fS$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.le("bell",D.auF[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a1(w,new B.eha(u),C.U(w).k("a1<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.ehb(a2,u))},
chY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gad3()
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
gaV8(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aB(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.egZ(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.eh_(s)),n=s.w
n=B.hA(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.eh0(s),n)
w=s.x
w=B.hA(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.eh2(s),w)
v=s.Q
v=B.hA(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.eh3(s),v)
u=s.ax
t=u?A.o1:O.ra
return B.jJ(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.eh4(s),t,A.cs,r),new B.dA("Trails",s.z,new B.eh5(s),A.Ny,A.cs,r),new B.dA("Planets pull each other",s.y,new B.eh6(s),A.yq,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fi(A.mu,"Solar system",new B.eh7(s),A.cs,r),new B.fi(A.nh,"Comet",new B.eh8(s),A.c,r),new B.fi(A.mr,"Cluster",new B.eh9(s),A.c,r),new B.fi(D.y2,"Clear",new B.eh1(s),A.cf,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bkx.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.Wn.gp(0)
d.aY(new C.a9(0,0,0+g,0+f),w)
v=new C.eL()
v.dB(5)
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
d.ae(g,f,t)
t=C.N()
t.saq(D.ed7.av(0,C.bU(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bO
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mC
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bT(P.pj,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jc.gp(0)
d.bC(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
B.abi.prototype={}
B.VN.prototype={
R(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjT(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjT.prototype={
a_(){this.a1()
this.lc()},
c4L(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abi(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c4L()
w=a2.f
A.d.bn(w,new B.eCJ(a2))
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
A.d.bn(w,new B.eCK(a2))
if(w.length<a1&&a2.ch)B.le("bell",12+a2.r.aC(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fS$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fS$
B.le("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mz,l,l,l,new B.eCy(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eCz(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cTS[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eCA(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cDY[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eCB(m,t),l,A.b2,l))}s=m.ch
r=s?A.o1:O.ra
r=C.a([new B.dA("Sound",s,new B.eCC(m),r,A.b2,l)],k)
s=m.x
s=B.hA(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eCD(m),s)
q=B.hA(A.b2,l,"Together",2.5,0,new B.eCE(m),m.y)
p=B.hA(A.b2,l,"Apart",2.5,0,new B.eCF(m),m.z)
o=B.hA(A.b2,l,"Same way",2.5,0,new B.eCG(m),m.Q)
n=m.as
return B.jJ(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hA(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eCH(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bs2.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adh,D.bjL],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,T.L8],v):C.a([D.bgK,D.b86],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b_,A.b5,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aY(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cd.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cd.j(0.25).gp(0)
n.z=G.mC
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mN(1,j,0.7,1).iB()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jl
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
d=new C.aO(t,A.ap,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bF())
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
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
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cy,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eHG))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cf
else a1=v==="scare"?A.cd:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
ar(d){return!0}}
B.abL.prototype={}
B.TW.prototype={
R(){var w=C.a([],x.bi)
return new B.aC3(w,A.cI,A.au,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC3.prototype={
gHW(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gac6(){return 54-8*(this.r/100)},
a_(){this.a1()
this.lc()
B.zk("chain_burst").bB(new B.dFA(this),x.P)},
aXT(){return B.vP("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
az7(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abL(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mN(1,u.aj()*360,0.6,1).iB()))}},
Z_(d){var w,v=this
if(d==null)return 0
w=(v.fS$-d)/1000
if(w<0.4)return v.gac6()*A.dU.aw(0,w/0.4)
if(w<1.1)return v.gac6()
if(w<1.5)return v.gac6()*(1-(w-1.1)/0.4)
return 0},
lv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.az7()
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
if(v!=null)n.push(new C.y(v,j.Z_(j.ax)))
for(v=A.d.gaf(w),s=new C.fb(v,new B.dFB());s.C();){r=v.gT(0)
n.push(new C.y(r.a,j.Z_(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fS$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eU()
break}}}if(!(j.at!=null&&j.Z_(j.ax)>0||A.d.b4(w,new B.dFC(j)))&&j.fS$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHW()){if(j.as>=j.gHW()*1.5)k=3
else k=j.as>=j.gHW()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bu("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXT()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXS(d){this.m(new B.dFq(this,d))
this.aXT()},
ad4(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ad4=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dFt(u),s,null,!0,!0,x.S),$async$ad4)
case 2:t=e
if(t!=null)u.aXS(t)
return C.h(null,v)}})
return C.i($async$ad4,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHW(),t=w.x.h(0,""+w.r)
return B.jJ(A.bZ,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dFx(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.r5,"Levels",w.gc4M(),A.bZ,v),new B.fi(A.jZ,"New board",new B.dFy(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
au1(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aP5,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bWR(d,e){return this.au1(d,e,A.c)}}
B.ba0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EA.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKF(d)
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
p.z=G.mC
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
B.aKz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwe.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btA()}}
B.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwv.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bur()}}
B.aLD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwD.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buG()}}
B.Fu.prototype={
gcMT(){return this.a.aB(0,this.b).gcl()>4}}
B.acA.prototype={}
B.Vi.prototype={
R(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjs(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjs.prototype={
aOz(d){return new H.mN(1,A.o.E(d*29,360),0.6,1).iB()},
ZK(d){var w,v=D.Cf.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bu(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e8(w,u)},
aRb(d){A.d.bn(this.e,new B.ecE(this,d))},
cpU(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aB(0,e).gcl()
return d.aB(0,e.ad(0,w.aF(0,A.k.D((d.aB(0,e).a*v+d.aB(0,e).b*u)/t,0,1)))).gcl()},
axD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.ZK(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fu(p,r,k,new H.mN(1,A.o.E(k*29,360),0.6,1).iB()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZK(h)
f.push(new B.Fu(h,h,k,new H.mN(1,A.o.E(k*29,360),0.6,1).iB()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZK(h)
f.push(new B.Fu(h,h,k,new H.mN(1,A.o.E(k*29,360),0.6,1).iB()))}}},
a_(){this.a1()
this.lc()},
c4O(d,e){var w,v=this.fS$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.le(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acA(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mN(1,v.aj()*360,0.5,1).iB()))}if(u>3)a2.as=0
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
if(a1<0){a2.c4O(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.ed2(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o1:O.ra,A.ad,p,p,p,21),p,p,p,new B.ecS(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mz,p,p,p,new B.ecT(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.ecU(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cXc[w]
l.push(new B.dA(v.b,q.x===v.a,new B.ecV(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cf.ged(D.Cf));t.C();){s=t.gT(t)
u.push(new B.dA(s,q.y===s,new B.ecW(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.axJ[w]
t.push(new B.dA(r.b,q.z===r.a,new B.ecX(q,r),p,A.b8,p))}s=q.Q
return B.jJ(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hA(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.ecY(q),s),new B.eQ(C.a([new B.fi(D.bEt,"Stairs",new B.ecZ(q),A.b8,p),new B.fi(An.Nh,"Pinball",new B.ed_(q),A.c,p),new B.fi(A.mr,"Random",new B.ed0(q),A.c,p),new B.fi(D.y2,"Clear",new B.ed1(q),A.cf,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh4.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bVi.av(0,new C.a9(0,0,a0,a1)))
a2.aY(new C.a9(0,0,a0,a1),w)
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
q.d=A.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jl
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jl
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bT(P.pj,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bO
u.r=A.az.gp(0)
a2.bC(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rk
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bT(P.pj,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
B.ad5.prototype={}
B.Vn.prototype={
R(){var w=C.a([],x.gB)
return new B.aDs(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDs.prototype={
gaXU(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axQ(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
az2(d){var w=D.Cf.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e8(v,u)},
a_(){this.a1()
this.lc()},
aPW(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.ad5(w,A.k.E(t/v+u,1)))}},
lv(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fS$
if(p.Q){r=p.z
s=p.az2(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.le(r,s+12,q,0.55)}}}},
c4P(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaXU()),e=f.gcl()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axQ(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.axQ(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.egy(h,n).$0()
h.c.ea()
return}}h.m(new B.egz(g,h,t))
if(h.Q)B.le(h.z,h.az2(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o1:O.ra,A.ad,q,q,q,21),q,q,q,new B.egG(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mz,q,q,q,new B.egH(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.egI(r)),m=r.x
m=B.hA(A.bt,""+A.k.V(m),"Tempo",180,40,new B.egJ(r),m)
w=C.a([],p)
for(v=J.aV(D.Cf.ged(D.Cf));v.C();){u=v.gT(v)
w.push(new B.dA(u,r.y===u,new B.egK(r,u),q,A.bt,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.axJ[t]
v.push(new B.dA(s.b,r.z===s.a,new B.egL(r,s),q,A.bt,q))}return B.jJ(A.bt,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fi(A.dW,"Demo",new B.egM(r),A.bt,q),new B.fi(A.mr,"Random",new B.egN(r),A.c,q),new B.fi(D.y2,"Clear",new B.egO(r),A.cf,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bky.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.Wn.gp(0)
a5.aY(new C.a9(0,0,0+a6.a,0+a6.b),w)
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
r.saq(new C.a8(A.b5,A.b_,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bC(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mN(1,A.k.E(s.$1(l)*23,360),0.55,1).iB()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.ddt[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kf(new C.eq(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c9,new C.js(1),a4,a4,a4,a4,A.c7,a4)
i.ey()
o=i.b.c
m=J.fPc(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.saq(D.ecK.av(0,C.bU(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mN(1,A.k.E(s.$1(a0)*23,360),0.55,1).iB()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fPc(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jl
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bT(P.pj,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
B.aLm.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwt.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bup()}}
B.aLn.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwu.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buq()}}
B.ta.prototype={}
B.b8U.prototype={}
B.Vl.prototype={
R(){var w=x.S
return new B.aDq(C.a([],x.aq),C.T(w,w),C.aX(w),D.eNt)}}
B.aDq.prototype={
a_(){this.a1()
B.zk("molecule_maker").bB(new B.eg2(this),x.P)},
aiF(d){var w={}
w.a=0
this.f.bI(0,new B.efP(w,d))
return w.a},
gaY_(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hZT(t,this.f,D.a2k[this.d])},
c55(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eL()
w.dB(t*7+3)
t=v.y
v.m(new B.efJ(v,e,t.a,w,t.b))
B.vS("pop",u.length,90,0.35)},
aw3(d){return this.m(new B.efK(this))},
aY0(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c5b(d){this.m(new B.efO(this,this.aY0(d)))},
cmo(){var w=this.r
if(w==null)return
this.m(new B.efN(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2k[k.d],h=k.gaY_()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vY.h(0,w[u].a).a-k.aiF(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.efX(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hw
r=x.p
s=C.v(C.a([new C.D(A.fI,B.faA(w,s,h&&k.d<12?new B.fi(A.iV,"Next",new B.efY(k),A.b2,j):j),j),C.E(C.cp(new B.efZ(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2k[u].b,k.d===u,new B.eg_(k,u),j,A.hw,j))}q=C.a([],r)
for(p=D.vY.gdK(D.vY),p=p.gaf(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.eg0(k,o),j,l,j))}return B.jJ(A.hw,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcmn(),A.e6,A.cf,j),new B.dA("Clear all",!1,k.gc56(k),A.jZ,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhM.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hw.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bI(0,new B.dof(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vY.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jl
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
h.saq(new C.bT(A.JE,0.5,A.x,a3,0,C.a([f,g,e],r),I.avQ,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aA:A.c
d=new C.kf(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c9,new C.js(1),a3,a3,a3,a3,A.c7,a3)
d.ey()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bo:A.aH
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kf(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nt),A.a4,A.c9,new C.js(1),a3,a3,a3,a3,A.c7,a3)
a1.ey()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.hq(a3,a3,a3,a3,D.eW7,A.a4,A.c9,a3,A.dZ,A.c7)
d.ey()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
B.Uj.prototype={
R(){var w=x.s
return new B.biI(C.a([],w),C.a([],w))}}
B.biI.prototype={
a_(){this.a1()
this.avm()
B.zk("dna_lab").bB(new B.dOj(this),x.P)},
gb2i(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3o.h(0,w[u])
t.toString
s.push(t)}return A.d.fY(s)},
ga8E(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2i(),w,v))}return u},
avm(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eL()
k.dB(l.e*31+l.d*7+C.BH(new C.S(Date.now(),0,!1)))
w=new B.dO8(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mE(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3o.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fY(r))}if(!A.d.b4(t,new B.dO7()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b01()},
b01(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fY_(s.ga8E()[r])
v=J.dH(D.Cg.ged(D.Cg),new B.dO9(w)).dH(0)
u=new C.eL()
u.dB(r+s.e)
A.d.fu(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eL()
t.dB(s.e*3+r)
A.d.fu(u,t)
s.z=u},
aXZ(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.djs.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3o.h(0,w.f[v])
u.toString
break A}u=B.fY_(w.ga8E()[v])
break A}w.m(new B.dO6(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOh(),e=new B.dOc(),d=h.d===2?h.gb2i():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mK,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bZ.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bZ:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8E()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cn(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bp9,A.eq,g,g,g))}v.push(C.bW(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bW(A.bz,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cr(A.A,g,g,C.X(Ak.Np,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.LN,C.bW(A.bz,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mK,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dr
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b2:A.b3,1,A.q,-1)
if(o){o=D.Cg.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ei,g,g,g))}v.push(C.bW(A.bz,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bW(A.bz,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.faA(u,t>=(h.d===2?3:9)?A.b2:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.faA(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.Tp,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bC,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d1O[j],h.d===j,new B.dOd(h,j),g,A.bZ,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.jZ,"New strand",new B.dOe(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.Cg.h(0,i)
q.toString
a0.push(new B.fi(D.a_h,q,new B.dOf(h,i),A.bZ,g))}u.push(C.bW(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.auK:D.cM7
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eWm,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOg(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.B(a0,A.m,g,A.q3,A.j,0,g,g))}return B.jJ(A.bZ,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Uz.prototype={
R(){return new B.aCx(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCx.prototype={
a_(){var w,v=this
v.a1()
w=v.qv(v.gc57())
w.iT(0)
v.d!==$&&C.aP()
v.d=w
B.zk("ecosystem").bB(new B.dR8(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.btP()},
gaLU(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c58(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cC(v,0)}if(m.gaLU()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bu(w),5)===0)B.vP("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dQW())},
a9Q(d){this.m(new B.dQV(this,d))
B.vS("pop",3,120,0.4)},
c5a(){return this.m(new B.dQX(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.D(D.XZ,B.faA(r,t.gaLU()?A.b2:A.cf,s),s),C.E(new C.D(D.bpH,C.bw(C.m(18),C.b3(s,s,s,new B.bd5(t.f,t.r,t.w,s),A.f0),A.aq),s),1),new C.D(A.eJ,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f2n,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hA(A.b2,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dR0(t),w)
v=t.y
v=B.hA(A.bP,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dR1(t),v)
u=t.z
return B.jJ(A.b2,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hA(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dR2(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dR3(t),A.yo,A.aM,s),new B.dA("Disease",!1,new B.dR4(t),D.bEl,A.bt,s),new B.dA("+ Foxes",!1,new B.dR5(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dR6(t),s,A.bP,s),new B.dA("Reset",!1,t.gc59(),A.jZ,A.aS,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bd5.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bTj.av(0,new C.a9(0,0,d,a0)))
a1.aY(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uZ,A.bo,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.aY(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eL()
r.dB(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hk.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d3n(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bcA.gp(0)
a1.aY(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dr.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3p(h,j,a1)
g.$3(0,100,A.bo)
g.$3(1,120,A.bP)
g.$3(2,24,A.cs)
g=new B.d3o(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bo,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bP,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
ar(d){return!0}}
B.aKN.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aRc.prototype={
guP(){return A.d.cI(this.a,0,new B.bFq())}}
B.TO.prototype={
R(){var w=x.S
return new B.bim(B.hWY(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bim.prototype={
gvO(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dBL())},
a_(){var w,v=this
v.a1()
w=v.qv(new B.dBY(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zk("balance_lab").bB(new B.dBZ(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bts()},
cwK(d){var w,v=this
v.m(new B.dBM(v,d))
B.vS("click",v.f[d],60,0.4)
if(v.gvO()===v.d[v.e].guP()&&v.r.L(0,v.e)){B.vS("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vP("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dBR(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvO()===m[o.e].guP())s="\u2696\ufe0f Balanced! "+m[o.e].guP()+" = "+o.gvO()+". The torques are equal, so the seesaw stays level."
else s=o.gvO()>m[o.e].guP()?"The right side is too strong ("+o.gvO()+" vs "+m[o.e].guP()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guP()+" vs "+o.gvO()+"). Add weight to the right, or place it further from the middle."
k=o.gvO()===m[o.e].guP()?A.b2:A.aM
k=B.bzp(s,k,o.gvO()===m[o.e].guP()&&o.e<m.length-1?new B.fi(A.iV,"Next",new B.dBS(o),A.b2,n):n)
w=C.E(C.cp(new B.dBT(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guP(),n,n,n,n,n,n,D.aQh,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.D(D.XZ,k,n),w,new C.D(D.agU,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvO(),n,n,n,n,n,n,D.aQh,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dBU(o,v),n,A.aM,n))}return B.jJ(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dBV(o),A.jZ,A.cf,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b95.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bF())
v=C.N()
v.r=A.ak.gp(0)
d.aO(i,v)
v=h-120
i=C.N()
i.r=A.aK.gp(0)
d.aY(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.j1(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hd)
w=C.N()
w.saq(D.bW_.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hJ.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fnD(d,""+Math.abs(s),new C.u(w,22),A.c1,10)}q=new B.cDc(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aS)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bZ)
if(w[s]===0){l=C.bx(C.cl(new C.u(m,-22),22,v),A.hd)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b3.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fnD(d,"+",new C.u(m,-22),A.c1,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.ae(new C.u(h,f),7,i)},
ar(d){return!0},
gjf(){return this.e}}
B.UN.prototype={
R(){return new B.biU(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.biU.prototype={
ga0c(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gade(){var w=this.ga0c(),v=this.r,u=D.axr[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qv(new B.dVb(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zk("gear_lab").bB(new B.dVc(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btX()},
c5c(d,e){var w,v=this
v.m(new B.dV1(v,d,e))
if(v.gade()&&v.w.L(0,v.r)){B.vS("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vP("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0c(),n=r.ga0c(),m=D.axr[r.r].a
m=r.gade()?"\u2705 Done! Ratio "+A.k.aa(r.ga0c(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gade()?A.b2:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.D(D.XZ,B.bzp(m,w,r.gade()&&r.r<7?new B.fi(A.iV,"Next",new B.dV5(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.bez(v,r.f,q),A.f0),1),new C.D(D.agU,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga0c(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A8.T2,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dV6(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hA(A.aS,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dV7(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.av5("Gear "+s+" teeth",p,new B.dV8(r,t),8,40,D.db6[t],""+p,q))}return B.jJ(A.cs,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bez.prototype={
bON(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.edZ,D.ej2,D.eyR,D.eq4],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bz(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bz(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.F(new C.bF())
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
n=A.d.fa(g,A.pl)
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
h=new B.dbn(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d8,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mV)
h.$5(new C.u(t,0),g[1],w[1],i,A.fj)
s.restore()
s=new B.dbo(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aS)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
ar(d){return!0}}
B.TX.prototype={
R(){var w=$.aw()
return new B.biz(new C.as(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.as(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.biz.prototype={
a_(){this.a1()
this.aWI()
B.zk("cipher_lab").bB(new B.dFX(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aWI(){this.y=1+A.cI.aC(25)
this.z=0},
ga97(){var w=this
return B.a1g(B.a1g(D.GM[w.x],w.y),-w.z)===D.GM[w.x]},
gax1(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1g(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a1g(u,0).split(""),x.s),new B.dFF(),x.dv).fY(0)
break A}w=B.i8G(u,v.e.a.a)
break A}return w},
aS4(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bS(w,w.gM(0),v.k("bS<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fa(q,A.A6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bD(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aS,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.M5,r,r,r,r),new C.x(C.jI(65+s),r,D.f4b,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lV,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kB,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dFO(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eZr,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kB,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dFP(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iH,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fuG)
w.push(A.at)
v=A.aS.j(0.12)
u=C.m(14)
t=C.I(A.aS.j(0.4),A.q,1)
w.push(C.p(o,C.zD(p.gax1().length===0?"\u2026":p.gax1(),D.f3a,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(B.bzp(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aS,o))
w.push(A.ac)
w.push(D.fbg)
w.push(A.at)
w.push(p.aS4(p.gax1()))
w.push(A.at)
w.push(D.fdF)
s=C.cz(w,o,A.bC,o,o,A.ah,!1)}else{w=B.bzp("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1g(D.GM[p.x],p.y),o,o,o,o,o,o,D.f3L,o,o,o)
u=(p.ga97()?A.b2:A.aS).j(0.14)
t=C.m(14)
r=C.I((p.ga97()?A.b2:A.aS).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fom,v,A.S,D.fiL,C.p(o,C.d(B.a1g(B.a1g(D.GM[p.x],p.y),-p.z),o,o,o,o,o,o,D.f5c,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aS4(B.a1g(D.GM[p.x],p.y)),A.N],x.p)
if(p.ga97())t.push(B.bzp("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fi(A.jZ,"Next",new B.dFQ(p),A.b2,o)))
s=C.cz(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dFR(p),A.ji,A.aS,o),new B.dA("Crack a code",w===1,new B.dFS(p),A.pV,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dFT(p,q),o,A.aS,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hA(A.aS,""+u,"Shift",25,1,new B.dFU(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hA(A.aM,""+v,"Shift back",25,0,new B.dFV(p),v))}return B.jJ(A.aS,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aKr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aKV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.eb.prototype={}
B.tn.prototype={
apg(d,e,f,g){var w=this
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
B.a9R.prototype={}
B.aaY.prototype={}
B.a40.prototype={
bc3(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hb()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9R(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c1d(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bLo())},
aj6(d,e,f,g){var w="p"+this.c++,v=new B.tn(w,e,f,g)
v.apg(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bLz(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cEI(d,e,f,g,h){return A.d.b4(this.b,new B.bLu(e,f,g,h))},
ajT(d,e,f,g){var w
if(d===f||this.cEI(0,d,e,f,g))return null
w=new B.aaY(d,e,f,g)
this.b.push(w)
return w},
azB(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zy(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amr(d){return this.Lm(d)&&!d.x&&d.cx>this.zy(d)},
b4I(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lm(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5d(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yV.h(0,v)
if(w!=null)return w.a
return 100},
uY(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c1d(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a1<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a1(v,new B.bLA(a2),t).cI(0,0,new B.bLB(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLD(o)
m=C.a([],x.t)
l=new B.bLC(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLF(g,l,n)
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
a2.b4E(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zy(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4E(e,d,w,!0)
a2.bLK(a4)},
b4E(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLq(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLp(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLs(C.T(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4I(t)*(1+t.CW))
a4=b2.azB(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c5d(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bOM(e,a0,b8)
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
bOM(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bLK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azB(o)/a1.b4I(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zy(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bDU(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bc3(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tC(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tC(o,"The "+$.qa().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tC(o,"More than 1.5 amps went through the "+$.qa().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tC(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tC(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yV.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qa().h(0,n).b
l=f.b
l=l===A.k.jZ(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jZ(g)?""+A.k.V(g):C.t(g)
a1.tC(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eLq.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tC(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tC(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tC(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tC(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tC(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tC(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bDU(d){return A.d.b4(this.a,new B.bLn(d))},
tC(d,e){var w
d.x=!0
d.ay=e
this.bc3(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bgE(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFG(d){var w=d.b
return D.aML.t(0,w)||D.yV.ai(0,w)||w==="buck"||w==="regulator"},
bdr(d){var w,v=!0
if(!this.Lm(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yV.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uh(d,e){var w=this.b
return new C.a1(w,new B.bLH(d,e),C.U(w).k("a1<1>")).gM(0)},
Ci(d){var w,v
if(d.x)return!1
w=d.b
if(D.yV.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qa().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFG(d)||i.Ci(d))return null
w=i.Uh(d,0)
v=i.Uh(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a1<1>")
s=C.C(new C.a1(u,i.gcNc(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jZ(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yV.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFL("battery"),o=J.aV(t.a),t=new C.fb(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.Uh(n,0)+i.Uh(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFL("switch"),o=J.aV(t.a),t=new C.fb(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qa().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zy(k))return"The "+$.qa().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zy(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bLv(i,d))
h=q.b
h=h===A.k.jZ(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFL(d){var w=this.a
return new C.a1(w,new B.bLy(d),C.U(w).k("a1<1>"))},
aFj(d){return this.aFL(d).b4(0,new B.bLx(0.35))},
pI(d,e){return A.d.b4(this.a,new B.bLw(e))}}
B.aif.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.KQ.gp(0)
c0.aY(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lX.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lX.ai(0,h.b)?(h.ch-1)*38:0
b4.cBG(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.huw(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bC(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.acR.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yW
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mO.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ceT(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zy(a0)){g=j+0
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
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.kf(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c9,new C.js(1),b5,b5,b5,b5,A.c7,b5)
a9.ey()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aML.t(0,h)||D.yV.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ci(a0)&&r.Uh(a0,0)+r.Uh(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aH.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kf(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c9,new C.js(1),b5,b5,b5,b5,A.c7,b5)
a9.ey()
a9.a4(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lX.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.KQ.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bdr(a0)?A.cf:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdr(a0)){a9=new C.kf(new C.eq("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cf,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c9,new C.js(1),b5,b5,b5,b5,A.c7,b5)
a9.ey()
a9.a4(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.X2,F.X9,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.QO
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bGC())){b3=A.d.cI(q,0,new B.bGD())
$.W()
b7=C.N()
b7.r=D.b7S.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.a9(0,0,b8,b9),b7)
a9=C.hq(b5,b5,b5,b5,D.eW0,A.a4,A.c9,b5,A.dZ,A.c7)
a9.wy(b6-24)
a9.a4(c0,new C.u(12,10))}},
qh(d,e,f,g,h){var w=null,v=C.hq(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c9,w,A.dZ,A.c7)
v.ey()
v.a4(d,f)},
cBG(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hn1(a1,a2,a3)
d.F(new C.cU(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.acR,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aS,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aO(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aO(d,u)
if(q){n=new C.Sc(new C.vt(C.x_(d),!1,C.a([],x.f5))).gJ(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jp()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jp()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jp()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jp()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jp()
i=t[u].Mr(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OD(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b_:A.a3
u=g?A.b5:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GO,null).av(0,d))
return w},
avb(d,e,f){return this.OD(d,e,f,!0)},
c0P(d,e){return this.OD(d,A.bn,A.iN,e)},
agF(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLm.av(0,C.bU(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.e39)
v=e.ad(0,D.e3i)
u=C.N()
u.r=A.ep.gp(0)
u.c=1.2
d.bC(w,v,u)},
ceT(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bT_.av(0,D.eIp))
c0.c=3.4
c0.d=A.bO
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mC
c1.hO(D.eIh,w)
if(c3){w=C.bx(D.eIo,A.kv)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h37(c2)
c1.bC(new C.u(-u,0),D.e4r,c0)
c1.bC(D.e2h,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lX.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAN(c1,c2)
break
case"solar":r=C.bx(D.eIk,A.im)
c1.aD(r,b3.OD(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bP,!1))
b9=C.N()
w=C.aq(D.bb5,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.biT,A.mh,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a5N))
c1.aY(D.a5N,b9)
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
v.r=A.cq.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ap,b4,b4,C.a([],x.v))
b9.F(new C.b5(-34,18))
b9.F(new C.ap(-6+40*c2.f,-18))
b9.F(new C.ap(4+40*c2.f,-18))
b9.F(new C.ap(-24,18))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aO(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dP.j(0.9).gp(0)
c1.ae(D.e2n,4+4*w,b9)
break
case"crank":n=C.bx(D.eI5,A.he)
c1.aD(n,b3.avb(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.N()
b9.saq(D.aLn.av(0,C.bU(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.bO
c1.bC(A.J,m,b9)
b9=C.N()
b9.saq(D.ed2.av(0,C.bU(m,7)))
c1.ae(m,7,b9)
b3.agF(c1,D.e4k)
b3.agF(c1,D.e2a)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ap,b4,b4,C.a([],w))
v.F(new C.b5(-3,24))
v.F(new C.ap(3,24))
v.F(new C.ap(1.5,0))
v.F(new C.ap(-1.5,0))
v.F(new C.bF())
l=C.N()
l.r=A.bP.gp(0)
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
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.ecJ.av(0,C.bU(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eIc,A.rw)
b9=C.N()
b9.saq(D.anX.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agF(c1,D.RG)
b3.agF(c1,D.aGb)
i=c2.w?D.aGb:D.e1V
b9=C.N()
b9.r=A.aA.gp(0)
b9.c=6
b9.d=A.bO
c1.bC(D.RG,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bP).gp(0)
b9.c=4
b9.d=A.bO
c1.bC(D.RG,i,b9)
b9=C.lf(D.RG,i,0.85)
b9.toString
w=C.N()
w.r=A.ay.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.bx(D.aLT,D.aLs)
b9=C.N()
b9.r=A.f5.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aD(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bP,A.cs,c2.fx).gp(0)
c1.bC(D.aGs,D.aGa,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.aGs,D.e4I,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.e2O,D.aGa,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cl(new C.u(F.oX[g]*22,0),20,9)
w=C.bx(f,A.hD)
o=b3.OD(f,A.d8,A.ot,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.ecV.av(0,C.bU(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.az.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.N()
b9.saq(D.ecH.av(0,C.bU(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bO
c1.bC(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aLT,D.aLs)
b9=C.N()
b9.saq(D.bWh.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c_(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.aY(D.eIy,b9)
b9=c2.r
b3.qh(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e4_,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.yW
c1.ae(D.w4,34,v)}n=C.cl(D.e1q,12,18)
c1.aD(C.bx(n,A.hD),b3.OD(n,A.bn,A.e1,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.VQ
else{v=C.aq(A.e1,A.hV,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Eu
else{l=C.aq(A.dA,A.dP,c2.fx)
l.toString}w.saq(new C.bT(A.rS,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rt,17)))
c1.ae(A.rt,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rt,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ap,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cU(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aO(l,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bC(D.e4E,D.e4G,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bC(D.e2H,D.e2K,v)
w=C.a([],w)
a4=new C.aO(b9,A.ap,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bz(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dA,D.bbS,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aO(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dlP
c1.ae(A.rt,30,v)}w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e4K,D.e4J,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e2Q,D.e2P,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ap,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cU(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bF())
v=C.N()
if(t)l=A.oA
else{l=C.aq(A.eo,D.adB,c2.fx)
l.toString}if(t)j=A.kl
else{j=C.aq(A.ki,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eHC))
c1.aO(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jc.gp(0)
c1.aO(a6,v)
v=C.N()
v.r=A.eO.gp(0)
c1.aY(D.eHI,v)
w=new C.aO(b9,A.ap,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cU(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aO(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bx(a7,A.hd),b3.avb(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cB.gp(0)
c1.aY(D.eHp,b9)
b9=C.N()
b9.r=A.cq.gp(0)
c1.aY(D.eHq,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cl(D.e1I,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.aA.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qh(c1,"M",D.e4j,A.aA,14)
break
case"buzzer":a8=C.cl(A.J,42,42)
b9=C.N()
b9.saq(D.ecZ.av(0,a8))
c1.hO(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b3.gp(0)
c1.ae(A.J,6,b9)
b3.qh(c1,"+",D.e4c,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bZ.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eI8,A.hd)
w=C.N()
w.saq(D.bTX.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ap,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cU(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bz(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.bct.j(0.5*b9).gp(0)
w.z=A.jl
c1.aO(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lF,A4.WS,c2.fx).gp(0)
c1.aO(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hd)
w=C.N()
w.saq(D.bSS.av(0,a7))
c1.aD(b9,w)
w=C.N()
w.r=A.bP.gp(0)
c1.aY(D.eHO,w)
for(p=0;p<4;++p){b0=new C.kf(new C.eq("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.aA,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c9,new C.js(1),b4,b4,b4,b4,A.c7,b4)
b0.ey()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bx(b1,A.hD),b3.c0P(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.aY(new C.a9(-3,w,11,w+b9),v)
b3.qh(c1,"1F",D.w4,A.c,11)
break
case"radio":a1=C.bx(D.a5N,A.he)
b9=C.N()
b9.saq(D.bWy.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.ot.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bx(D.eI9,A.im)
w=C.N()
w.r=A.dH.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lF.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.h3:A.nI).gp(0)
c1.aY(D.eHs,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bG.gp(0)
v.c=1.6
c1.bC(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLn.av(0,C.bU(D.a4R,6)))
c1.ae(D.a4R,6,w)
w=C.N()
w.r=A.ot.gp(0)
c1.ae(D.e2g,4,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=1.8
c1.bC(D.e2e,D.aGf,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGf,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nN.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eIj,A.hd)
v=C.N()
v.r=L.n_.gp(0)
c1.aD(w,v)
b2=C.bx(D.eIg,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.pq(),!0)
b9.translate(-33,-21)
E.h_m(c1,D.eNU,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.ae(D.e2s,1.6,b9)}else{w=C.N()
w.r=D.v7.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aO(b9,w)}b9=C.N()
b9.r=A.bv.gp(0)
c1.aY(D.eHH,b9)
break}B.i6i(c1,c2,b3.b.d,b3.gc5e())
if(t)b3.qh(c1,"\u2716",D.e4N,A.ay,14)
if(s)c1.a.restore()},
bAN(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bx(w,A.rw),m.avb(w,A.dA,A.iQ))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.anQ.av(0,v))
d.aY(v,u)
u=C.N()
u.r=A.dT.gp(0)
d.aY(D.eHX,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bx(t,A.hc),m.OD(t,A.dA,A.iN,!0))
m.qh(d,"+",D.e2_,A.aM,11)
m.qh(d,"\u2212",D.e4l,A.ad,11)
m.qh(d,C.t(l===A.k.jZ(l)?A.k.V(l):l)+"V",D.e45,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bF.gp(0)
d.aY(D.eHW,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b2,u).gp(0)
d.aY(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qh(d,"FLAT",D.e3Z,A.cf,9)}if(l>2){u=C.N()
u.r=A.b3.gp(0)
u.c=1
d.bC(D.e1w,D.aFV,u)
m.qh(d,l>3?"3 cells":"2 cells",D.e44,A.az,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.rw)
$.W()
s=C.N()
s.saq(D.bW4.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aY(D.eHY,s)
for(u=d.a,q=0;q<2;++q){p=F.ax5[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLm.av(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qh(d,"9V",D.e40,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.im)
$.W()
s=C.N()
s.saq(D.anQ.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cd.gp(0)
d.aY(D.eIi,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cl(new C.u(F.a2H[q],-20),8,10),A.hc)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cq.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qh(d,"+",D.e26,A.ay,10)
m.qh(d,"12V",D.e41,A.aA,15)}},
ar(d){return!0}}
B.mx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tn(o,r,q,p)
n.apg(o,r,q,p)
k.push(n)
J.iq(s[4],new B.ck1(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajT(m,u[1],l,u[3])}}}
B.aid.prototype={
R(){var w=x.N
return new B.aie(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aie.prototype={
adh(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGg(w,d))
w.as=C.cM(A.le,new B.bGh(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bqF()},
a_j(d,e){return this.ccQ(d,e)},
aZZ(d){return this.a_j(d,!1)},
ccQ(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_j=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qW:A.xq
p=d.b
w=3
return C.b(E.h_E(s,r,p,d.ax<3.2,q,$.qa().h(0,p).b),$async$a_j)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_j,v)},
cpn(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGi()),t=J.cG(u)
t.L(u,v)
t.bn(u,new B.bGj(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0E(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.km,new B.bGk(w,u,d))}},
a__(d){return this.cbd(d)},
cbd(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a__=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i7q(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a__)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a__,v)},
a0E(d){return this.cn2(d)},
cn2(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0E=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kh,null,new B.bGe(u,d),t,!0,!0,!1,A.k5,!1,!1,x.H),$async$a0E)
case 2:return C.h(null,v)}})
return C.i($async$a0E,v)},
a_(){this.a1()
this.bdC()
this.lc()},
bdC(){this.a.c.e=new B.bGz(this)},
lv(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uY(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lX.h(0,s.b)
if((r==null?null:r.b)!==D.zl)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_j(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"radio":if(s.fx>0){E.dF(900+A.cI.aC(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dF(300+A.cI.aC(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dF(330+A.o.E(110*A.k.bu(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bu(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new B.bGA())},
b5W(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lX.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.y(p,n)
r=i}}}return s},
b_F(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bS(w,w.gM(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lX.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cBH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lX.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lX.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hn1(new C.u(k,n),new C.u(i,l),p)
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
adf(){this.a.toString
this.m(new B.bFK())},
bns(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cX0[v]
if(!A.d.b4(p.a.c.a,new B.bGB(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.HT:o
s=s?K.HT:o
q=t.aj6(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.adf()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Q4[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fM(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_u(s,!0))
n.a.toString
if(t)w.push(n.b_u(r,!0))
w.push(C.E(C.cp(new B.bGy(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_u(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qa()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zz,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nr,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.ty,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFL(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cz(m,p,A.h6,p,p,A.aO,!1),A.f,p,p,new C.o(F.Ax,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aY3(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.abz,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.agV,w,w,w)},
ceU(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qa().h(0,o),m=d.dy,l=d.fr,k=new B.bG3(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Th,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bKn,p,p,p,new B.bFR(q,d),p,p,p,p,"Remove part",A.cb),C.aH(p,p,p,p,A.Gh,p,p,p,new B.bFS(q),p,p,p,p,p,A.cb)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dh,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f3A,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cf:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbA(d)
if(v!=null){l=(d.x?A.ay:A.aH).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aH).j(0.5),A.q,1)
m.push(new C.D(A.hZ,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f9W,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.co,p,p,p),p))}if(B.fYs(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFT(q,d,u),p,h,p))}l=C.bW(A.bz,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Ci(d)?"Showing: "+F.PH[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ci(d))l.push(new B.fi(A.FR,"Open big screen",new B.bFW(q,d),h,p))
A.d.v(m,l)}if(D.lX.ai(0,o)&&!B.fYs(o)){l=C.a([A.am,C.d(q.a.c.Ci(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ci(d))l.push(new B.fi(A.Nq,"Open the "+$.qa().h(0,o).b,new B.bFX(q,d),h,p))
A.d.v(m,l)}if(D.lX.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BC,"Make it bigger (or tap it 4 times)",new B.bFY(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Ci(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f4o,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dch[s]
j=r===A.k.jZ(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bFZ(q,d,r),p,h,p))}i.push(new C.D(A.mn,C.bW(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.frT)
A.d.v(m,i)}if(q.a.c.Lm(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zy(d),2)
i=q.a.c
w=i.amr(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amr(d)?A.cf:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zy(d),0,1)
i=q.a.c.amr(d)?A.ay:A.b2
m.push(new C.D(A.hZ,C.v(C.a([l,A.cV,C.bw(j,C.m0(A.bF,p,p,5,p,w,new C.lT(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.hZ,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eZo,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d2t[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG_(q,d,r),p,h,p))}m.push(C.bW(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cUv[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG0(q,d,r),p,h,p))}m.push(C.bW(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG1(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bG2(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFU(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFV(d)))
if(o==="crank")m.push(D.fnv)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hf,p,p,p))
return q.aY3(new C.cS(D.aYU,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.ba2.prototype={}
B.UA.prototype={
R(){return new B.aCy(B.h36(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCy.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.adg()},
adg(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adg=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.ftj(),$async$adg)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i6D(t.d,r)
if(s!=null){t.m(new B.dRg(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adg,v)},
EI(){var w,v=this
if(!v.as)return
w=B.hYc(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD_(w)},
iY(d){if(d!==A.fv)this.EI()},
q(){$.aW.hF(this)
this.EI()
this.a2()},
c5g(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a1<1>")
t=new C.a1(v,new B.dRp(q),u).gM(0)
s=new C.a1(v,new B.dRq(),u).gM(0)
r=new C.a1(v,w.gcQI(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRr(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EI()
if(A.o.E(q.w,10)===0){w=q.f
$.ahq()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahq()[q.f].c.$1(q.d)){w.L(0,q.f)
B.Bu("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRs())
q.EI()
w=q.c
w.toString
w=C.WW(w)
if(w!=null)w.S(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahq()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mj,p,p,p,p,p,p,p,p,p,p))}},
afW(){var w=0,v=C.j(x.H),u=this,t
var $async$afW=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dRf(u),t,null,!0,!0,x.H),$async$afW)
case 2:return C.h(null,v)}})
return C.i($async$afW,v)},
aY2(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hr(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aY1(d,e,f,g){return this.aY2(d,e,f,g,null)},
apV(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aE(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ec,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
aee(){var w=0,v=C.j(x.H),u=this,t
var $async$aee=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).c8(C.ea(new B.dRb(u),!1,null,x.H)),$async$aee)
case 2:t=u.e.gbg()
if(t!=null)t.bdC()
if(u.c!=null)u.m(new B.dRc())
u.EI()
return C.h(null,v)}})
return C.i($async$aee,v)},
bDN(){var w,v,u,t,s=null,r=this.f
$.ahq()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bo:A.ay
u=C.m(9)
t=C.I(F.Ax,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wi,s,s,s),s,s,s),A.f,s,D.aZ0,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
ah1(){var w=0,v=C.j(x.H),u=this,t
var $async$ah1=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kh,null,new B.dRo(u),t,!0,!0,!0,A.k5,!1,!1,x.H),$async$ah1)
case 2:return C.h(null,v)}})
return C.i($async$ah1,v)},
c5h(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bLB,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRu(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b3C,A.f,r,r,new C.o(A.bm,r,C.I(A.aS.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.fq0,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.fT,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awF(s.gcaV(),r),A.rD,s.aY1(A.y1,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRv(s,d)),s.aY2(A.li,"Challenges",A.aM,s.gcrT(),s.bDN()),s.aY1(A.Ni,"How to play",A.aS,new B.dRw(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.apV(A.o_,"Circuits",A.bt,s.gckR()),A.bp,s.apV(A.oJ,"Repair",A.aM,new B.dRx(s)),A.bp,s.apV(D.y2,"Clear",A.cf,new B.dRy(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.Ax,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bvy,r,r,r)},
B(d){var w=this,v=null
$.are="tech"
return C.c8(v,A.bX,C.bm(!0,C.v(C.a([w.c5h(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h20(w.d,w.e,w.gc5f(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awF.prototype={
R(){return new B.b8e(null,null)}}
B.b8e.prototype={
gaw4(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gaw4().q()
this.brV()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hr(new C.a7(42,42,C.c6(this.gaw4(),new B.cAK(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b8d.prototype={
a4(d,e){var w,v,u,t=null,s=e.eb(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mC
d.ae(s,r+2+o*2,w)
w=C.N()
w.saq(D.ecU.av(0,C.bU(s,r)))
d.ae(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fS(A.A,0,6.283185307179586,A.x,D.cM6,t,new C.mk(p)).av(0,C.bU(s,r)))
d.ae(s,r,v)
p=new B.cAJ(d)
p.$3(s.ad(0,A.rt),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e30),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e4R),2.6,0.5+0.5*Math.cos(q))
u=C.hq(t,t,t,t,D.eW6,A.a4,A.c9,t,A.dZ,A.c7)
u.ey()
u.a4(d,s.ad(0,new C.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
B.awY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.awZ.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bqE()}}
B.aIY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwh.prototype={}
B.fK.prototype={}
B.J0.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m3.prototype={}
B.Uh.prototype={
R(){return new B.biG(null,null)}}
B.biG.prototype={
ga8B(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nV,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8B().q()
this.btL()},
gRn(){var w=this.ga8B().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lX.h(0,this.a.c)
if(v==null)v=D.aM9
return C.c8(w,T.L8,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zm?this.bFY(v):this.chE(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.my,w,w,w,new B.dNc(d),w,w,w,C.nw(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eXI,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c5i(d){var w
A:{if(D.If===d){w=0.46153846153846156
break A}if(D.uw===d){w=0.45
break A}if(D.wa===d){w=0.9259259259259258
break A}if(D.Sg===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
chE(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.If
A:{if(D.If===p){w=44
break A}if(D.uw===p){w=30
break A}if(D.wa===p){w=22
break A}if(D.Sg===p){w=26
break A}w=14
break A}v=C.c6(this.ga8B(),new B.dNb(this,w,d,o),q)
if(p===D.a5W)v=new C.D8(D.bw9,v,q)
p=this.c5i(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Fo,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bpU,new C.Q(u,u,u,u),q,q,q),q)},
b59(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bu(this.gRn()*0.4),0,100),q=d.b===D.If,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dl(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rK,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bvS,t,t,t,3))}n.push(A.d9)
n.push(D.fiX)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Dz(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.Fo,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qg)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.faf,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
au3(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d7S,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f18,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dN7(this,d),v,v,v,v,v,v,!1,A.a8)},
bWX(d,e){return this.au3(d,e,!0)},
bWG(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Sg||n===D.wa,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kg,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b59(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b3,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aec(0,p.gRn(),o),A.f0),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hx,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dN5(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k0[s]
t.push(new C.cr(A.A,o,o,p.bWX(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.lX(0.92,t,v,8,12,A9.vm,o,!1),1)],u)
if(n!==D.a5W){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k0,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bS(v,v.gM(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.au3(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.q3,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bqJ,S.aim,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzq(d,e){var w=null
return C.p(w,C.v(C.a([this.b59(d),C.E(C.b3(w,w,w,new B.aec(e,this.gRn(),w),A.f0),1),C.aE(w,C.p(w,C.av(C.d(F.k0[e].a,w,w,w,w,w,w,A0.IJ,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dN0(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bFY(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8B(),new B.dN3(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bvt,new C.Q(8,8,8,s),t,t,t),t)}}
B.bum.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kg,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aY(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dlU
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ar(d){return!0}}
B.aec.prototype={
a4(d,e){return E.ah3(d,e,this.b,this.c)},
ar(d){return!0}}
B.aKK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aVO.prototype={}
B.V5.prototype={
R(){return new B.bjf(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjf.prototype={
gvl(){var w=this.f
return w===$?this.f=B.fYy(0):w},
a_(){this.a1()
this.lc()
B.zk("laser_maze").bB(new B.e8d(this),x.P)},
lv(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.y(u.a,t)
if(t>0.8)A.d.cC(w,v)}this.m(new B.e8e())},
adl(d){var w=this
w.m(new B.e83(w,d))
B.vP("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c5y(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdO()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bu((d.a-t)/v)
q=A.k.bu((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvl().b.t(0,p)||p===o.gvl().e||o.gvl().d.ai(0,p))return
o.m(new B.e84(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e87(t,B.hmT(t.gvl(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e88(t),A.jZ,A.aM,s),new B.dA("Skip",!1,new B.e89(t),D.bEm,A.aS,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e8a(t),D.bEn,A.aS,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e8b(t,v),s,A.ay,s))}return B.jJ(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bgf.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdO()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgs(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kv)
v=$.W()
u=C.N()
u.r=L.n_.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dr.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dr.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.e9(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.cl(p,u,u),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bWE.av(0,C.cl(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ap,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gJ(a8)).a,a7.$1(A.d.gJ(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bS(a8,a8.gM(0),v.k("bS<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bz(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fB
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lq
a9.aO(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fB
a8.r=D.adB.gp(0)
a9.aO(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fB
a8.r=A.c.gp(0)
a9.aO(n,a8)}for(a8=a4.c,a8=C.e9(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Ci
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new C.kf(new C.eq("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c9,new C.js(1),a2,a2,a2,a2,A.c7,a2)
i.ey()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.dgv(a7,a3,a9)
a1.c.bI(0,new B.dgt(g))
a4.d.bI(0,new B.dgu(g))
f=a7.$1(a4.e)
a4=C.bx(C.cl(f,o,a3*0.8),A.he)
a8=C.N()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
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
ar(d){return!0}}
B.V7.prototype={
R(){var w=x.n
return new B.aDc(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDc.prototype={
a_(){this.a1()
this.lc()
B.zk("light_mixer").bB(new B.e8w(this),x.P)},
lv(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aY7()
w.m(new B.e8x())},
aw8(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aC(5)/4)
u.e=t
if(A.d.d7(t,new B.e8h()))u.e[w.aC(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aY7(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hie(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vS(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vP("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcwN(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cO2[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e8q(v,B.hie(v.e,t))),r=t[0]
r=B.hA(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e8r(v),r)
w=t[1]
w=B.hA(A.bo,""+A.k.V(w*100)+"%","Green",1,0,new B.e8s(v),w)
t=t[2]
return B.jJ(A.b8,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hA(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.e8t(v),t),new C.bI(A.a7,u,u,new B.fi(A.hA,"Lock it in",new B.e8u(v),A.b2,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bgu.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qd)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bx(new C.a9(0,0,n,m),A.qd)),$.pq(),!0)
v=e.gdO()*0.3
u=e.eb(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.Ec,I.acF,I.ad3]
d.la(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nz
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qd)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b3.gp(0)
d.aD(n,m)},
ar(d){return!0}}
B.aLb.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwm.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bue()}}
B.aLc.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwn.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buf()}}
B.btb.prototype={}
B.a7R.prototype={
B(d){var w=null
return C.c8(C.eC(w,w,w,!0,!0,D.adO,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amP,w,w,w,new B.ceF(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fyo,w,w,w,1,w,!0),D.adO,C.cz(C.a([D.e67,C.cp(new B.ceG())],x.p),w,D.brI,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VY.prototype={
R(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aE3(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE3.prototype={
a_(){this.a1()
this.lc()},
b39(d){var w=this.d.length
return A.o.E(A.k.bu(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lv(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b39(v.f)
if(w!==v.x){v.x=w
B.le("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eHK(v))
B.Bu("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c6v(){if(this.d.length<2)return
this.m(new B.eHG(this))},
aYt(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eHF(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc6u(),p=s.d,o=C.E(C.aE(r,C.b3(r,r,r,new B.buy(p,s.f,r),A.f0),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f8q,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awn[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f7H,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eHI(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jJ(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kC,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eHJ(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dn,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hz,"Add",s.gc6s(s),A.c,r),A.bp,new B.fi(A.mr,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.buy.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.b9e.gp(0)
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
o=C.bU(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.awn[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
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
k=new C.kf(new C.eq(o,i,i,A.cO,i,i,i,i,i,i,D.eWV),A.a4,A.c9,new C.js(1),i,i,i,i,A.c7,i)
k.ey()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.N()
f.r=D.ads.gp(0)
a1.ae(d,20,f)
f=C.N()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ae(d,20,f)
j=new C.aO(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.F(new C.b5(g,e+26))
e-=10
j.F(new C.ap(g-14,e))
j.F(new C.ap(g+14,e))
j.F(new C.bF())
e=C.N()
e.r=A.c.gp(0)
a1.aO(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aO(j,e)},
ar(d){return!0}}
B.UH.prototype={
R(){return new B.biP($,A.bx,0,C.a([],x.X),null,null)}}
B.biP.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bu("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4v(900,new B.dTu())}w.m(new B.dTv())},
aYv(d){return this.m(new B.dTp(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.E(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpn(l,A.cf,n),A.aNo)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f06,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.f_b,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.zy,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d56[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTr(o,q),n,A.cf,n))}m=o.f
p=m?A2.ya:A.iW
m=m?"Pause":"Start"
return B.jJ(A.cf,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fi(p,m,new B.dTs(o),A.b2,n),new B.fi(A.jZ,"Reset",new B.dTt(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bpn.prototype={
a4(d,e){var w,v,u,t,s=e.eb(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bU(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.f5(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
B.TU.prototype={
R(){return new B.bir($,A.bx,0,C.a([],x.X),null,null)}}
B.bir.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.QI.h(0,p.d)
w.toString
v=A.d.fa(w,new B.dEn())
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
B.le("flute",D.bXg[t]+5,1400,0.35)}p.m(new B.dEo())},
gc6y(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JR("Press Start",0.5)
w=D.QI.h(0,this.d)
w.toString
v=A.d.fa(w,new B.dEi())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JR("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JR("Hold",1)
case 2:return new C.JR("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JR("Hold",0.5)}}}return new C.JR("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc6y(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hw.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hw.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zC,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kC,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QI.ged(D.QI));w.C();){v=w.gT(w)
o.push(new B.dA(v,r.d===v,new B.dEl(r,v),q,A.hw,q))}w=r.e
v=w?A.a01:A.iW
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEm(r),A.b2,q))
return B.jJ(A.hw,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHs.prototype={}
B.Uy.prototype={
R(){return new B.biJ(new C.cs(null,x.A),C.a([],x.au),A.aA,A.c)}}
B.biJ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mz,s,s,s,new B.dQL(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aE(s,C.b3(s,s,s,new B.bkL(t.e,t.x,s),A.f0),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dQM(t),new B.dQN(t),s,s,s,s,s,s,s,s,s,new B.dQO(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cNq[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EY(v,u,new B.dQP(t,v),!1,s))}u=t.r
return B.jJ(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bT,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hA(A.bA,""+A.k.V(u),"Brush",30,2,new B.dQQ(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dQR(t),A.FJ,A.bA,s),new B.fi(A.r9,"Undo",new B.dQS(t),A.c,s),new B.fi(A.e6,"Clear",new B.dQT(t),A.c,s),new B.fi(A.Ne,"Paper",new B.dQU(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bkL.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fB
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gJ(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gJ(m).a,A.d.gJ(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cU(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bz(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bz(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
B.Vj.prototype={
R(){var w=x.S
return new B.aDm(C.aX(w),C.aX(w))}}
B.aDm.prototype={
a_(){this.a1()
this.arp()},
arp(){var w,v,u=this,t=x.N,s=C.bn(D.d9A,!0,t)
A.d.CB(s)
w=x.S
v=C.U(s).c
t=C.C(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.CB(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c6t(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.le("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.edT(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gJ(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n6,new B.edU(s,v,u),t)
else{s.x=!0
C.bN(Ae.F1,new B.edV(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Ti,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.D(A.xB,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hC,A.j,0,q,q),q),C.E(C.ig(!0,q,q,A.y,new C.hL(v,8,8,1,q),new B.edZ(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cOU[t]
o.push(new B.dA(s.b,r.d===s.a,new B.ee_(r,s),q,A.aS,q))}o.push(new B.fi(D.bEk,"New game",new B.ee0(r),A.b2,q))
return B.jJ(A.aS,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.Vw.prototype={
R(){return new B.aDI(C.a([],x.t))}}
B.aDI.prototype={
c6x(d){A.d.a9(this.d)
this.w=!0
this.aYu()},
aYu(){this.d.push(A.cI.aC(4))
this.e=0
this.Zp()},
Zp(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zp=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.eoK(t))
s=x.H
w=3
return C.b(C.bN(A.lK,null,s),$async$Zp)
case 3:r=t.d,q=C.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRP(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zp)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.eoL(t))
case 1:return C.h(u,v)}})
return C.i($async$Zp,v)},
aRP(d){this.m(new B.eoI(this,d))
B.le("marimba",D.aop[d]+5,450,0.55)
C.bN(A.F_,new B.eoJ(this),x.H)},
c6z(d){var w,v,u=this
if(!u.w||u.r)return
u.aRP(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.eoM(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.eoN(u))
C.bN(A.id,new B.eoO(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.Tp,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f8N,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avi[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avi[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dj(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jd,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.eoP(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.D(A.a9,C.v(C.a([o,A.am,n,A.d6,new C.fG(1,C.lX(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jJ(A.cd,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fi(A.iW,n,q.gc6w(q),A.b2,p)],m),p,p))}}
B.VR.prototype={
R(){return new B.bjX(new C.as(A.as,$.aw()))}}
B.bjX.prototype={
auT(d){return C.oC(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eD1(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eDa()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ac.wH),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aXp),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kB,"Bill amount",!0,!0,!1,m,m,m,m,D.f6n,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eD6(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aOR,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cz(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auT(w)),t.$2("Total","$"+n.auT(v)),X.Lz,t.$3$big("Each of "+n.f+" pays","$"+n.auT(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,A.fA,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.czN[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eD7(n,o),m,A.b2,m))}l=n.f
return B.jJ(A.b2,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hA(A.aS,""+l,"People",20,1,new B.eD8(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eD9(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Vh.prototype={
R(){var w=C.a([3,5],x.t)
return new B.bjq(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjq.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bu(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t
B.a7Q("snare",0.5)}u.m(new B.ecy())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hb()
u.w=t
u.x=t?0:3.141592653589793
B.le("bell",24,400,0.5)}u.m(new B.ecz())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcr(v,o.r>0,n))}u=C.aE(n,C.av(C.bW(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecr(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d8,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f5C,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ecY,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecs(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eWo,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kC,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ect(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d2D[r]
v.push(new B.dA(q.b,o.d===q.a,new B.ecu(o,q),q.c,A.bt,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hA(A.bt,""+s,"Dice",4,1,new B.ecv(o),s))}if(o.d==="num"){s=o.z
s=B.hA(A.bt,""+s,"From",100,1,new B.ecw(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hA(A.bt,""+p,"To",1000,2,new B.ecx(o),p)],m))}return B.jJ(A.bt,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bcr.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=C.a([],x.p)
for(s=D.dkE.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaz,p,18,p,p,p,p,p,18),p))
return C.eG(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
B.aKx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwd.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bty()}}
B.aKQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwi.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btS()}}
B.aLk.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bws.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bun()}}
B.aLO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwE.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buR()}}
B.b61.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDb.h(0,t)
$.are=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,R.ni,u,u,u,new B.crw(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Ni,s,u,u,u,22),u,u,u,new B.crx(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.buJ,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.Ax,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.F3,u,u,1/0))
return C.c8(u,A.bX,C.bm(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aR,s,s,s,16),A.ec],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.ty,C.aE(s,C.dj(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eF,s,s,s,A.h7,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crs(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cC,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.av5.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auF(d).cHl(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9D(C.kX(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.IJ,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.ty,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Al.agG,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ec,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crr(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.EY.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eUI:u
w=t?A.c:A.b3
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dj(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hY,u,r,D.agt,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cry(v),u,u,u,u,u,u,!1,A.a8)}}
B.mA.prototype={
a4v(d,e){var w=C.di()
w.seF(C.cM(C.dC(0,0,0,d,0,0),new B.crt(this,w,e)))
this.fo$.push(w.bf())},
lc(){var w=this,v=w.qv(new B.crv(w))
v.iT(0)
w.fn$!==$&&C.aP()
w.fn$=v}}
B.aaD.prototype={
bx0(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bAd()
g.ay!==$&&C.aP()
g.ay=w},
bAd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaE.prototype={
cDe(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.Fo(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uX.prototype={}
B.OQ.prototype={}
B.xT.prototype={}
B.OP.prototype={
fj(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aok[w.aC(7)]
w=w.hb()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.le(u,v+w-12,2200,0.1)}}
B.UO.prototype={
R(){var w=$.aw()
return new B.aCJ(new C.cs(null,x.A),new C.as(A.as,w),new B.OP(A.cI),D.d4z,A.au,D.a2t,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCJ.prototype={
a_(){var w,v=this
v.a1()
v.lc()
v.a.toString
w=$.hbf
if(w==null)w=$.hbf=B.cu7()
w.bB(new B.dWc(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.bu_()},
cr3(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dVF(p[n]).$0())
w.push(q)}this.w=w},
gVF(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asz(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awC(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asz(d.x,d.w,105/Math.max(w,3))
C.eU()
B.le("bell",(A.d.cJ(D.a24,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lv(d){var w,v,u,t,s,r,q,p=this
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
c7d(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVF()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVF()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cDe((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c7c(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVD(w))
return}w.m(new B.dVE(w,v,A.a.i(d).toLowerCase()))},
bMZ(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dVB(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bH0,n,n,n,o.gbMY(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mz,n,n,n,new B.dVY(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dVZ(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Dg,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bP5,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc7b(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iH,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dW_(o,s),A.mt,A.aS,n))}i.push(new C.D(A.hZ,new C.a7(n,38,C.cz(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dW3(o),A.hn,A.aS,n)],l)
for(v=D.aDa.gdK(D.aDa),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new B.dA(u.a,!1,new B.dW4(o,u),n,A.aS,n))}w.push(new B.dA("Random",!1,new B.dW5(o),A.mr,A.aS,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hA(A.aS,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dW6(o),w))
w=o.dy
i.push(B.hA(A.cd,A.a.aT(A.o.u(A.k.bu(w)),2,"0")+":00","Time",24,0,new B.dW7(o),w))
w=o.fr
i.push(B.hA(A.b2,o.cpR(),"Season",365,0,new B.dW8(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lP:D.G_
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dW9(o),D.bCb,A.aS,n),new B.dA("Night",v,new B.dWa(o),A.vv,A.aS,n),new B.dA("Borders",u,new B.dW0(o),D.bCf,A.aS,n),new B.dA("Names",r,new B.dW1(o),X.Nm,A.aS,n),new B.dA("Music",q,new B.dW2(o),p,A.aS,n)],l),n,n))
return B.jJ(A.aS,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cpR(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.avX[u])v=u
return A.ih[v]+" "+(A.k.bu(w-D.avX[v])+1)},
c7a(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mN(1,A.o.E((A.d.cJ(D.a24,t)+1)*47,360),0.55,1).iB()
r=new B.dVz()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dm,j,j,j),1),C.aH(j,j,j,j,A.Gh,j,j,j,new B.dVy(this),j,j,j,j,j,A.cb)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hf,j,j,j)
m=D.djk.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.frx(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gw(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gw(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.N,v,A.N,m,A.N,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.frx(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VI,j,p,q,j,j,A.n),j,j,j,j,D.ah0,j,j,j)}}
B.beG.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.As.gp(0)
d8.aY(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eL()
w.dB(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aS.j(0.35),A.K],t),D.cQr,d3).av(0,C.bU(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.ed1.av(0,n))
d8.ae(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ap,d3,d3,C.a([],u))
d6.F(new C.k_(n))
d8.qs(0,d6)
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
f=new B.dcd(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bz(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bz(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cJ(D.a24,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mN(1,a9,a3,a8?1:0.62).iB().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fB
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
if(c8!=null)b6.bz(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bz(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bz(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rk
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
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
c9=B.hK8(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a4(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b74.j(0.78)],t),D.d4W,d3).av(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dgU,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fT.j(0.5).gp(0)
d8.ae(p,o,d7)},
ar(d){return!0}}
B.aKW.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.aKX.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btZ()}}
B.bt6.prototype={}
B.VU.prototype={
R(){return new B.bk0()}}
B.bk0.prototype={
gaRo(){var w=this.d
if(w===$)w=this.d=A.cI.aC(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.As,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amP,w,w,w,new B.eDV(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fsb,w,w,w,1,w,!0),u=C.m(18),t=A.aS.j(0.1),s=C.I(A.aS.j(0.35),A.q,1),r=x.p
return C.c8(v,D.As,C.cz(C.a([C.p(w,C.B(C.a([D.bFK,A.av,C.E(C.d(D.cUg[this.gaRo()],w,w,w,w,w,w,D.a7M,w,w,w),1),C.aH(w,w,w,w,D.bQ6,w,w,w,new B.eDW(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aB,C.cp(new B.eDX())],r),w,A.Yb,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VF.prototype={
R(){return B.hKA()}}
B.bjN.prototype={
chF(d){var w=d.c,v=B.hKC(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t=this
t.e.fj(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.chF(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lf(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc7e(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c7i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.C9[s]
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
aYQ(d){this.m(new B.evY(this,d))
C.eU()
B.le("bell",D.dh4[A.o.E(A.d.cJ(D.C9,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mz,m,m,m,new B.ew8(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.ew9(n,l)),h=C.a([new B.dA("All",!1,new B.ewa(n),A.a0b,A.aM,m)],k)
for(w=0;w<10;++w){v=D.C9[w]
h.push(new B.dA(v.a,n.z===v,new B.ewb(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hA(A.aM,s,"Time",1,0,new B.ewc(n),u/t)
u=n.w
u=B.hA(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ewd(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lP:D.G_
return B.jJ(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.ewe(n),m,A.aM,m),new B.dA("Names",r,new B.ewf(n),m,A.aM,m),new B.dA("Asteroids",q,new B.ewg(n),m,A.aM,m),new B.dA("Music",p,new B.ewh(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c7f(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.evW(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kA,r,r,r),1),C.aH(r,r,r,r,A.Gh,r,r,r,new B.evV(this),r,r,r,r,r,A.cb)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dh,r,r,r)
v=n.$2("WIDTH",B.Gw(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gw(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.evX().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.N,p,A.N,v,A.N,s,A.N,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VI,r,l,m,r,r,A.n),r,r,r,r,D.ah0,r,r,r)}}
B.br9.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.As.gp(0)
a7.aY(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eL()
v.dB(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc7e()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.C9),t=new C.fb(a6,new B.eYi()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
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
p.delete()}i=B.hKB(A.d.gJ(D.C9))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.ae(o,a6,t)
t=C.N()
t.saq(D.ecW.av(0,C.bU(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hcS("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.C9),t=new C.fb(a6,new B.eYj()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
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
a0=C.cl(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bK.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rk
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pj,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1I,a4).av(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cZn[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hcS(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
B.UP.prototype={
R(){var w=x.i
return new B.aCK(new B.OP(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCK.prototype={
cui(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c7h(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e1H
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
s.m(new B.dWg())},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fj(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yH[r]
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
break}}}if(A.d.d7(s,new B.dWJ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gal(v).aB(0,i.cx).gcl()>120)v.push(i.cx)
if(v.length>700)A.d.cC(v,0)
if(i.cx.gcl()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bLe()
else n=n==="weight"?p.cBw():p.bDp()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.ded[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWv(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWw(p),Aj.FV,A.cs,o),new B.dA("Feather",s,new B.dWx(p),X.MX,A.cs,o),new B.dA(q,r,new B.dWB(p),A.FK,A.aS,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hA(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWC(p),q),new B.eQ(C.a([new B.fi(A.tL,"Drop!",new B.dWD(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hA(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWE(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hA(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWF(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hA(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dWG(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hA(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dWH(p),r),new B.eQ(C.a([new B.fi(A.nh,"Fire!",p.gc7g(),A.b2,o),new B.fi(A.tL,"Falls",new B.dWI(p),A.c,o),new B.fi(A.r1,"Orbit 7.7",new B.dWy(p),A.c,o),new B.fi(D.bF8,"Oval 9",new B.dWz(p),A.c,o),new B.fi(A.BC,"Escape",new B.dWA(p),A.c,o)],w),o,o)],w))}return B.jJ(A.cs,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bLe(){return new C.D(D.bpM,C.cp(new B.dWf(this)),null)},
cBw(){var w,v,u,t=null,s=[D.eBw,D.eCW,D.eD3,D.eDm,D.eD1,D.eDr,D.eC3,D.eDO,D.eCG],r=x.p,q=C.a([D.fgf,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cC,new C.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bh,new C.Ba(new B.dWh(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fiw)
return C.cz(q,t,A.ie,t,t,A.ah,!1)},
bDp(){return C.cp(new B.dWd(this))}}
B.b9S.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.As.gp(0)
d.aY(new C.a9(0,0,0+h,0+g),e)
w=new C.eL()
w.dB(2)
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aS.j(0.35),A.K],x.O),D.d5O,i).av(0,C.bU(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.N()
e.saq(D.ecQ.av(0,C.bU(g,p)))
d.ae(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new C.b5(u-16,s))
n.F(new C.ap(u,t-400*h-4))
n.F(new C.ap(u+16,s))
n.F(new C.bF())
s=C.N()
s.r=A.ak.gp(0)
d.aO(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ap,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gJ(u).a*h,t+A.d.gJ(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bS(u,u.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bz(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cs.j(0.9).gp(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mC
d.ae(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
ar(d){return!0}}
B.Vx.prototype={
R(){return new B.bjK(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjK.prototype={
a_(){this.a1()
this.lc()},
lv(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PD[l.e],i=D.PD[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mz,k,k,k,new B.eoS(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqI(f,g,v,k),A.f0),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gw(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i6,A.L,k,k)
o=B.Gw(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IM,A.L,k,k),A.bB,C.d(p+": "+B.Gw(w*2)+" km wide. "+r+": "+B.Gw(h*2)+" km wide.",k,k,k,k,k,k,A6.IS,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.brS,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PD[m]
r.push(new B.dA(w.a,l.e===m,new B.eoT(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PD[m]
w.push(new B.dA(s.a,l.f===m,new B.eoU(l,m),k,C.b0(s.c),k))}return B.jJ(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bqI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.Wn.gp(0)
d.aY(new C.a9(0,0,0+h,0+g),w)
v=new C.eL()
v.dB(6)
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
m=new C.u(h,g)
w=new B.eWr(d)
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
k=C.hq(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f1U,s.a),A.a4,A.c9,i,A.dZ,A.c7)
k.ey()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.hq(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f5d,t.a),A.a4,A.c9,i,A.dZ,A.c7)
j.ey()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
ar(d){return!0}}
B.aKY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwk.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.bu0()}}
B.aLw.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buz()}}
B.aLz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwA.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buC()}}
B.Pj.prototype={}
B.TS.prototype={
R(){return B.hKy()}}
B.biq.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fj(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dDP())},
aYR(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6K()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pj(t,u,1.2,new C.vy(1,30+A.cI.aj()*40,0.9,0.7).iB()))
B.le("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6K(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dDD(),C.U(m).k("K<1,M>")).fa(0,A.uV),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.dDE(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dDF(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.frx(s)+" Suns"
t=B.hA(A.bt,s,"Mass",1,0,new B.dDH(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDI(o),n,A.bt,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDJ(o),n,A.bt,n),new B.dA("Milky Way core (4 million)",!1,new B.dDK(o),n,A.bt,n),new B.dA("M87 (6.5 billion)",!1,new B.dDL(o),n,A.bt,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lP:D.G_
return B.jJ(A.bt,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dDM(o),n,A.bt,n),new B.dA("Bent light",r,new B.dDN(o),n,A.bt,n),new B.dA("Music",q,new B.dDO(o),p,A.bt,n),new B.fi(A.jZ,"Clear",new B.dDG(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
ae1(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eYS,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,L.zw,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9g.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.beW.gp(0)
b2.aY(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6K()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=R.QN
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.v2,A.fj,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cLz,null).av(0,C.bU(u,b0)))
b2.ae(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bt.j(0.55).gp(0)
b2.ae(u,s,b1)
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
n.d=A.bO
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mC
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
B.aeo.prototype={}
B.UL.prototype={
R(){var w=x.r,v=x.g
return new B.biS(new C.cs(null,x.A),new B.OP(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.biS.prototype={
a_(){this.a1()
this.ZC()
this.lc()},
ZC(){var w,v,u,t,s,r,q,p,o=this,n=new C.eL()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeo(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aC(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hb()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeo(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cu9(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e3a
k.cx=D.e3d
w=new C.eL()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeo(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bS(s,s.gM(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bS(u,u.gM(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lv(d){var w,v,u,t,s,r,q,p=this
p.e.fj(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aB(0,p.fx)
s=Math.max(0.25,t.gcl())
r=t.ez(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aB(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dUO(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.dUE(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bew(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ag.a71,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d1s[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUF(s,u),r,A.h2,r))}l.push(new B.dA("Collide",s.ch,new B.dUG(s),A.y_,A.bZ,r))
o=C.a([new B.eQ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hA(A.h2,""+n,"Arms",6,2,new B.dUH(s),n)
l=s.r
A.d.v(o,C.a([n,B.hA(A.h2,A.k.aa(l,1),"Winding",6,0.8,new B.dUI(s),l)],q))}n=s.as
o.push(B.hA(A.h2,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dUJ(s),n))
n=s.ax
o.push(B.hA(A.h2,A.k.aa(n,1)+"x","Speed",4,0,new B.dUK(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lP:D.G_
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dUL(s),r,A.bt,r),new B.dA("You are here",l,new B.dUM(s),r,A.aM,r),new B.dA("Music",w,new B.dUN(s),t,A.h2,r)],q),r,r))
return B.jJ(A.h2,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b0,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bew.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bgY.gp(0)
a3.aY(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eL()
v.dB(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c9m,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)}m=new B.d9k(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.h3.j(0.85),A.aH.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
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
l.r=new H.mN(1,r,q>200?0.45:0.55,1).iB().j(0.35+(1-s)*0.5).gp(0)
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
f=C.hq(a0,a0,a0,a0,D.eVX,A.a4,A.c9,a0,A.dZ,A.c7)
f.ey()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bi9.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bd4.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.h3.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.is.gp(0)
a3.ae(a1,5,w)}},
ar(d){return!0}}
B.Vt.prototype={
R(){return new B.bjJ(new C.cs(null,x.A),new B.OP(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjJ.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t=this
t.e.fj(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bu(w*4)
if(u!==A.k.bu(t.as))B.le("bell",60+u*4,500,0.35)
t.as=u}},
gcpQ(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcgh(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mz,q,q,q,new B.eo6(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bpY(r,q),A.f0),r.d),1)
if(r.f==="seasons")w=r.gcpQ()
else{w=r.gcgh()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tf,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahb,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.ya:A.iW
t=r.Q
s=t?A.lP:D.G_
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.eo7(r),A.yo,A.bu,q),new B.dA("Moon phases",n==="moon",new B.eo8(r),A.vv,A.bu,q),new B.dA(u,!1,new B.eo9(r),v,A.bu,q),new B.dA("Music",t,new B.eoa(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hA(A.bu,D.d0N[A.o.E(A.k.bu(n*12),12)],"Month",1,0,new B.eob(r),n)
v=r.z
A.d.v(s,C.a([n,B.hA(A.bu,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.eoc(r),v)],p))}else{p=r.w
s.push(B.hA(A.bu,""+(A.k.bu(p*29.5)+1),"Day of month",1,0,new B.eod(r),p))}p=r.y
s.push(B.hA(A.bu,A.k.aa(p,1)+"x","Speed",4,0.2,new B.eoe(r),p))
return B.jJ(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bpY.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.As.gp(0)
b9.aY(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eL()
w.dB(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cl(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b3.gp(0)
b9.hO(u,t)
t=C.N()
t.saq(D.ecS.av(0,C.bU(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).ez(0,p.aB(0,l).gcl())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.beS.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.F(new C.k_(C.bU(A.J,k)))
b9.qs(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.ed0.av(0,C.bU(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.N()
t.c=2
t.r=A.cf.gp(0)
b9.bC(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.N()
b5.r=A.cf.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.hq(b4,b4,b4,b4,C.de(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQk,b5),A.a4,A.c9,b4,A.dZ,A.c7)
f.ey()
f.a4(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b3.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.saq(new C.bT(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.baE,D.af4],x.O),D.cTf,b4).av(0,C.bU(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b81.gp(0)
b9.ae(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ap,b4,b4,C.a([],r))
d.F(new C.k_(C.bU(a1,a2)))
b9.qs(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bP.gp(0)
b9.aY(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aB(0,p).ez(0,a1.aB(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.as5[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aS.j(0.45).gp(0)
a7.z=A.jl
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b7X.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b6.F(new C.k_(C.bU(a8,a9)))
b9.qs(0,b6)
s=s.w
b1=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aBP(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBP(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bP.gp(0)
b9.aO(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b3.gp(0)
b9.ae(a8,a9,b8)
b3=C.hq(b4,b4,b4,b4,D.eVY,A.a4,A.c9,b4,A.dZ,A.c7)
b3.ey()
b3.a4(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
B.aKu.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwc.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btv()}}
B.aKT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwj.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.btV()}}
B.aLv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
B.bwx.prototype={
q(){var w,v,u
for(w=this.fo$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fn$
w===$&&C.c()
w.q()
this.buy()}}
var z=a.updateTypes(["~()","R(tn)","R(a40)","az<~>()","R(C7)","H(tn,H)","M(M,tn)","R(C3)","R(YP)","R(aaY)","R(uX)","R(a2E)","R(ni)","R(a_l)","R(abL)","H(H)","TY()","Uz()","TO()","UN()","V5()","V7()","TX()","Vr()","VG()","Vs()","Vo()","VN()","TW()","VS()","R(mx)","Vi()","Vn()","aet(Y,H)","adk(Y,H)","~(a4<@,@>)","H(C3,C3)","n(eb)","R(aej)","R(a03)","R(Ch)","R(abs)","R(ado)","R(abb)","H(H,qG)","H(H,C7)","n(qG)","~(qG,ai<n>,H)","qG?(C7)","R(qG)","r(n,a_R)","R(PA)","~(Al)","R(abi)","M(H?)","VU()","R(Fu)","R(acA)","M(H)","UA()","M(Pj)","R(a9R)","TT()","a7R()","~(AS,n,u,w,M)","~(n,tn)","Vl()","V0(Y)","N_(Y)","Uh(Y,bq<M>,bq<M>)","VY()","UH()","TU()","Uy()","Vj()","Vw()","VR()","Vh()","~(n)","cq(aaE)","R(aaD)","UO()","VF()","UP()","TS()","UL()","Vx()","Vt()","Uj()","R(Pj)","~(b9)"])
B.ftH.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fkd.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gJ(d.e.split(". "))+"."},
$S:z+37}
B.fqF.prototype={
$1(d){var w
if(!this.a.Lm(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fqG.prototype={
$1(d){return d.x},
$S:z+1}
B.ftE.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.ftF.prototype={
$1(d){var w
if(!this.a.Lm(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.ftG.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e5d.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e5e.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.y(this.b,this.c))},
$S:0}
B.e5f.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ic)}},
$S:8}
B.e5q.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e5r.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e5m.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e5k.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e5l(w,this.b,e)))},
$S:1834}
B.e5l.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e5n.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVI().aj6(0,u[1],u[2],u[3])
u[4].bI(0,new B.e5i(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e5j(w.a,v,w.f,w.r))},
$S:0}
B.e5i.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:183}
B.e5j.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5o.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVI().ajT(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e5h(w.a,v,w.e,w.f))},
$S:0}
B.e5h.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5p.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e5g(w,this.b))},
$S:0}
B.e5g.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e5u.prototype={
$0(){var w=this.a
return w.m(new B.e5t(w))},
$S:0}
B.e5t.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e5v.prototype={
$0(){var w=this.a
return w.m(new B.e5s(w))},
$S:0}
B.e5s.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e5w.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.N7()},
$S:0}
B.e5x.prototype={
$0(){return this.a.XH(this.b)},
$S:0}
B.e5y.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.N7():w.aUG()},
$S:2}
B.e5z.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.N7():w.aUG()},
$S:0}
B.elj.prototype={
$2(d,e){return d+e},
$S:1835}
B.elD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.elC(w,d))},
$S:128}
B.elC.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.elE.prototype={
$0(){},
$S:0}
B.elF.prototype={
$0(){},
$S:0}
B.ell.prototype={
$0(){return this.a.m(new B.elk(this.b,this.c))},
$S:0}
B.elk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ela.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.elb.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.elc.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.eld.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.ele.prototype={
$1(d){return this.a.db===d},
$S:33}
B.elf.prototype={
$1(d){return this.a.db=d},
$S:28}
B.elg.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.elh.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:28}
B.eli.prototype={
$0(){var w=this.a
return w.m(w.gavv())},
$S:0}
B.el8.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.el9.prototype={
$1(d){return this.a.$1(!1)},
$S:140}
B.el7.prototype={
$1(d){return this.a.$1(!1)},
$S:187}
B.elw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgc(o,p),n)
w=this.b
v=B.byU("WORLD",w.a,w.c)
u=B.byU("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cf:A.b2
t=B.byU("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.C3[o.db].d?A.cf:A.c
q=x.p
s=C.a([v,u,t,B.byU("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byU("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hC,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bCn(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.re[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mv,"Again",new B.elr(o),A.c,p),new B.fi(A.oJ,"Rebuild",new B.els(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.iV,"Next world",new B.elt(o),A.b2,p))
n.push(B.hgz("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hgz("Crash!",o.at,A.cf,C.a([new B.fi(A.mv,"Try again",new B.elu(o),A.b2,p),new B.fi(A.oJ,"Rebuild",new B.elv(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b0,A.r,n,p)},
$S:64}
B.elr.prototype={
$0(){var w=this.a
return w.m(w.gavv())},
$S:0}
B.els.prototype={
$0(){var w=this.a
return w.m(new B.elo(w))},
$S:0}
B.elo.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.elt.prototype={
$0(){var w=this.a
return w.m(new B.eln(w))},
$S:0}
B.eln.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.elu.prototype={
$0(){var w=this.a
return w.m(w.gavv())},
$S:0}
B.elv.prototype={
$0(){var w=this.a
return w.m(new B.elm(w))},
$S:0}
B.elm.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.elx.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.elq(v,w))},
$S:0}
B.elq.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.ely.prototype={
$1(d){return this.a.y=d},
$S:9}
B.elz.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.elA.prototype={
$1(d){return this.a.z=d},
$S:9}
B.elB.prototype={
$0(){var w=this.a
return w.m(new B.elp(w))},
$S:0}
B.elp.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEg.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hbU
if(q==null)q=$.hbU=B.cEl()
w=3
return C.b(C.iL(C.a([q,$.qP().beL("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kz(0,C.cP(J.q(s,1)))
q.m(new B.dEf(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dEf.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dDT.prototype={
$0(){return this.a.bTE(C.aU(J.q(this.b,"group")))},
$S:0}
B.dDU.prototype={
$1(d){return A.a.aT(A.o.fT(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:340}
B.dEh.prototype={
$0(){return B.a7Q("kick",0.25)},
$S:0}
B.dDV.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dDW.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dDX.prototype={
$0(){return B.a7Q("kick",0.5)},
$S:0}
B.dDY.prototype={
$0(){return E.dF(1300+this.a.R8.aC(900),"",40,0,0.2,"square")},
$S:0}
B.dE_.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dDZ(u)))u.cx=null
u.go=0},
$S:0}
B.dDZ.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axe(d)},
$S:z+11}
B.dDQ.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dDR.prototype={
$0(){var w=this.a
return w.m(w.gc2Y())},
$S:0}
B.dDS.prototype={
$0(){return this.a.agI(null)},
$S:0}
B.dE6.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dE7.prototype={
$0(){return this.a.cyg(this.b.a)},
$S:0}
B.dE8.prototype={
$0(){return this.a.agI(this.b)},
$S:0}
B.dE9.prototype={
$1(d){var w=this.a
return w.m(new B.dE5(w,d))},
$S:6}
B.dE5.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dEa.prototype={
$0(){var w=this.a
return w.m(new B.dE4(w,this.b))},
$S:0}
B.dE4.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEb.prototype={
$0(){var w=this.a
return w.m(new B.dE3(w))},
$S:0}
B.dE3.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dEc.prototype={
$0(){var w=this.a
return w.m(new B.dE2(w))},
$S:0}
B.dE2.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.JW},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
return w.m(new B.dE1(w))},
$S:0}
B.dE1.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXg()
else w.p2=null},
$S:0}
B.dEe.prototype={
$0(){var w=this.a
return w.m(new B.dE0(w))},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c_K.prototype={
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
$S:321}
B.c_L.prototype={
$1(d){var w=new C.rG([],[]).py(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:605}
B.fek.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:224}
B.fel.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:224}
B.fem.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:224}
B.fet.prototype={
$1(d){return!J.q(d,0)},
$S:224}
B.feu.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:224}
B.fev.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:224}
B.dGr.prototype={
$1(d){return this.a.ase(0)},
$S:8}
B.dG5.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hXI(),C.U(w).k("K<1,H>")).fL(0)},
$S:0}
B.dG8.prototype={
$1(d){return""+d},
$S:78}
B.dGs.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dG3.prototype={
$1(d){return this.a.ase(this.b)},
$S:8}
B.dG4.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avY(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mw(0,d,a1.m_(0.15,0.3))
u=a1.mw(0,d,a1.m_(0.15,0.62))
t=a1.mw(0,"and",a1.m_(0.48,0.46))
s=a1.mw(0,a0,a1.m_(0.82,0.46))
a1=t.a
w.push(new B.ni(v.a,a1,0))
w.push(new B.ni(u.a,a1,1))
w.push(new B.ni(a1,s.a,0))
break
case 1:v=a1.mw(0,d,a1.m_(0.12,0.25))
u=a1.mw(0,d,a1.m_(0.12,0.65))
r=a1.mw(0,"xor",a1.m_(0.46,0.25))
q=a1.mw(0,"and",a1.m_(0.46,0.65))
p=a1.avX(0,a0,a1.m_(0.82,0.25),0)
o=a1.avX(0,a0,a1.m_(0.82,0.65),0)
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
case 2:k=a1.mw(0,"clock",a1.m_(0.15,0.4))
j=a1.mw(0,"not",a1.m_(0.45,0.65))
s=a1.mw(0,a0,a1.m_(0.82,0.3))
i=a1.mw(0,"buzzer",a1.m_(0.82,0.65))
a1=k.a
w.push(new B.ni(a1,s.a,0))
n=j.a
w.push(new B.ni(a1,n,0))
w.push(new B.ni(n,i.a,0))
break
default:h=a1.mw(0,d,a1.m_(0.12,0.25))
g=a1.mw(0,d,a1.m_(0.12,0.7))
f=a1.mw(0,"nor",a1.m_(0.5,0.25))
e=a1.mw(0,"nor",a1.m_(0.5,0.7))
s=a1.mw(0,a0,a1.m_(0.86,0.25))
a1=f.a
w.push(new B.ni(g.a,a1,0))
n=e.a
w.push(new B.ni(n,a1,1))
w.push(new B.ni(h.a,n,0))
w.push(new B.ni(a1,n,1))
w.push(new B.ni(a1,s.a,0))}},
$S:0}
B.dG9.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avY(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.C3(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mw(0,w.e,o.m_(0.86,0.5))},
$S:0}
B.dFZ.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dG_.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dG0.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dG1.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dG2.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ac3(this.c)
if(v.ax)B.Bu("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gJ(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dGa.prototype={
$0(){},
$S:0}
B.dGb.prototype={
$0(){return A.d.cC(this.a.e,this.b)},
$S:0}
B.dGc.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dG7.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dG6(v))
w.cy=null},
$S:0}
B.dG6.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dFY.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mw(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dGl.prototype={
$0(){var w=this.a
return w.m(new B.dGk(w))},
$S:0}
B.dGk.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGm.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aE(A.c4,C.jy(C.b3(w,w,w,new B.bak(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGf(v),w,w,w,new B.dGg(v),new B.dGh(v),new B.dGi(v),w,w,w,w,w,w,w,w,w,w,new B.dGj(v),w,w,w,!1,A.a8)},
$S:35}
B.dGj.prototype={
$1(d){return this.a.c4B(d.b)},
$S:49}
B.dGh.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cd2(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awL(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:43}
B.dGi.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGg.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bXd(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dGd(w))
u=t.as
u.toString
v.push(new B.ni(u,w.a,w.b))
C.jP()}}t.z=t.as=null},
$S:37}
B.dGd.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGf.prototype={
$1(d){return this.a.auM(d.b)},
$S:281}
B.dGn.prototype={
$0(){return this.a.byg(this.b.a)},
$S:0}
B.dGo.prototype={
$0(){return this.a.ase(this.b.a)},
$S:0}
B.dGp.prototype={
$0(){var w=this.a
return w.m(new B.dGe(w))},
$S:0}
B.dGe.prototype={
$0(){var w=this.a
w.avY(0)
w.ay=null},
$S:0}
B.dGq.prototype={
$0(){return this.a.cu6(this.b)},
$S:0}
B.cL7.prototype={
$0(){var w=this,v=null,u=C.hq(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c9,v,A.dZ,A.c7)
u.ey()
return u},
$S:304}
B.dMf.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMe.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMh.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bZ_()},
$S:121}
B.dMg.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.feL.prototype={
$0(){return D.dXD},
$S:z+55}
B.feM.prototype={
$0(){return D.dvM},
$S:z+59}
B.feN.prototype={
$0(){return D.dsE},
$S:z+62}
B.feY.prototype={
$0(){return D.dX2},
$S:z+63}
B.ff_.prototype={
$0(){return D.dC9},
$S:z+66}
B.ff0.prototype={
$0(){return D.dvH},
$S:z+88}
B.ff1.prototype={
$0(){return D.dvK},
$S:z+17}
B.ff2.prototype={
$0(){return D.doP},
$S:z+18}
B.ff3.prototype={
$0(){return D.dyf},
$S:z+19}
B.ff4.prototype={
$0(){return D.dzS},
$S:z+20}
B.ff5.prototype={
$0(){return D.dzU},
$S:z+21}
B.feO.prototype={
$0(){return D.duT},
$S:z+22}
B.feP.prototype={
$0(){return D.dET},
$S:z+23}
B.feQ.prototype={
$0(){return D.dWK},
$S:z+24}
B.feR.prototype={
$0(){return D.dUM},
$S:z+25}
B.feS.prototype={
$0(){return D.dDy},
$S:z+26}
B.feT.prototype={
$0(){return D.dWS},
$S:z+27}
B.feU.prototype={
$0(){return D.duS},
$S:z+28}
B.feV.prototype={
$0(){return D.dX1},
$S:z+29}
B.feW.prototype={
$0(){return D.duU},
$S:z+16}
B.feX.prototype={
$0(){return D.dA9},
$S:z+31}
B.feZ.prototype={
$0(){return D.dDx},
$S:z+32}
B.eVZ.prototype={
$2(d,e){return new B.aet($.bDm()[e],new B.eVY(e,this.a),null)},
$S:z+33}
B.eVY.prototype={
$0(){var w=this.a,v=F.aDb.h(0,$.bDm()[w].a)
$.are=v==null?"music":v
C.a5(this.b,!1).c8(C.ea(new B.eVW(w),!1,null,x.H))},
$S:0}
B.eVW.prototype={
$1(d){return $.bDm()[this.a].e.$0()},
$S:39}
B.eW_.prototype={
$2(d,e){return new B.adk(D.avY[e],new B.eVX(this.a,e),null)},
$S:z+34}
B.eVX.prototype={
$0(){return this.a.d.$1(D.avY[this.b])},
$S:0}
B.eVF.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eVE.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eVD.prototype={
$1(d){var w=this
return new C.e0(new B.eVC(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eVC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fg0,A.at,D.fmr,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bD(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Dg,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bD(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Dg,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dg0[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gJ(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gJ(i)}else g=A.bF
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fz,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eVA(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f5T,d,d,d,d,d,d,d,d,d),A.am,new C.cn(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new C.a7(d,44,C.cz(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zE,new B.eVB(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cz(v,d,A5.xC,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:109}
B.eVA.prototype={
$0(){var w=this
return w.a.$1(new B.eVz(w.b,w.c,w.d))},
$S:0}
B.eVz.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eVB.prototype={
$0(){var w=this,v=w.a
v.m(new B.eVy(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eVy.prototype={
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
B.eVN.prototype={
$0(){var w=this.a
return w.m(new B.eVM(w))},
$S:0}
B.eVM.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eVO.prototype={
$0(){return B.qO(this.b,this.a.f,"scene")},
$S:0}
B.eVP.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gJ(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYZ().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aVP,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:325}
B.eVQ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(A.A,C.c6(new C.h3(C.a([u.gtR(),u.gYZ()],x.dS)),new B.eVL(u,this.b,v),w),A.f,A.eh),w,w,w)},
$S:249}
B.eVL.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtR().x
r===$&&C.c()
w=r<0.9?1:1-B.bqh(r,0.9,0.98)
v=s.gYZ().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gavZ().a){case 0:s=s.bxs(t.b,r,u,t.c)
break
case 1:s=s.bNP(t.b,r,u,t.c)
break
case 2:s=s.cyM(t.b,r,u,t.c)
break
case 3:s=s.bAn(t.b,r,u,t.c)
break
case 4:s=s.bDB(t.b,r,u,t.c)
break
case 5:s=s.bCO(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:226}
B.eVR.prototype={
$2(d,e){var w=C.auF(this.b),v=this.c.d,u=C.aq(A.d.gJ(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gJ(v),A.d.gal(v),0.4)
v.toString
v=w.cHf(u,A.bF,v,3.5)
u=this.a
w=u.gtR().x
w===$&&C.c()
return C.a9D(C.kX(null,null,null,1,0,new B.eVK(u),A.k.D(w,0,1)),v)},
$S:1839}
B.eVK.prototype={
$1(d){var w=this.a
w.gtR().sp(0,d)
if(w.as)w.m(new B.eVG(w))},
$S:6}
B.eVG.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eVS.prototype={
$0(){var w=this.a
w.gtR().sp(0,0)
w.afr()},
$S:0}
B.eVT.prototype={
$1(d){var w=this.a
w.m(new B.eVJ(w,d))
if(w.as)w.afr()},
$S:6}
B.eVJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eVU.prototype={
$0(){var w=this.a
w.m(new B.eVI(w,this.b))
w.gtR().sp(0,0)
if(w.as)w.afr()},
$S:0}
B.eVI.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eVV.prototype={
$0(){var w=this.a
return w.m(new B.eVH(w,this.b))},
$S:0}
B.eVH.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eVw.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1840}
B.eVx.prototype={
$1(d){return d.b},
$S:1841}
B.dg9.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dga.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dg6.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dg7.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dg8.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgb.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgc.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgd.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dge.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgf.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgg.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgh.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgi.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgj.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.ekE.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ekt.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ekv.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.ekw.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.ekz.prototype={
$1(d){var w=D.mB.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.ekA.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e8(new C.cQ(new C.a1(q,new B.ekB(d),p.k("a1<1>")),new B.ekC(r),p.k("cQ<1,qG?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.ekB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ekC.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.ekx.prototype={
$1(d){return D.mB.h(0,d.b).c===D.wB},
$S:z+49}
B.eky.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.el3.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uY(0,u)
w.aHl(A.o.an(v,1000))},
$S:8}
B.ekD.prototype={
$0(){},
$S:0}
B.ekp.prototype={
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
B.ekG.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.v(C.a([A.N,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mB.h(0,v).b,D.mB.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fxp,w,C.d(D.mB.h(0,v).a,w,w,w,w,w,w,A.hs,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,U.amT,w,w,w,w,new B.ekF(d),!1,w,w,w,w,w,w,w,D.fpb,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.ekF.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ekI.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e5Y],x.p)
for(w=0;w<6;++w){v=D.awg[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bPM,u,u,u,u,new B.ekH(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kB,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hs,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cz(s,u,D.bvm,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.ekH.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.eks.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.ekq(d),w,w),C.bK(!1,A.Dl,w,w,!0,w,w,new B.ekr(d),w,w)],x.p),w,w,F.n2,D.fmC,w,w,w,w,D.fpt,w)},
$S:19}
B.ekq.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.ekr.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.el1.prototype={
$0(){var w=this.a
return w.m(new B.el0(w))},
$S:0}
B.el0.prototype={
$0(){return this.a.r=!1},
$S:0}
B.el2.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.md(new B.ekS(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b4s:t
v=C.a([C.b3(u,t,t,new B.bga(w,v,new B.ekT(r),new B.ekU(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.ekV(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFh())
return C.aE(A.c4,C.jy(new C.an(A.W,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.ekW(r),t,r.gcel(),t,new B.ekX(r),new B.ekY(r),new B.ekZ(r),t,t,t,t,t,t,t,t,t,t,new B.el_(r),t,t,t,!1,A.a8)},
$S:35}
B.ekS.prototype={
$0(){return this.a.ab9(this.b)},
$S:0}
B.el_.prototype={
$1(d){return this.a.cwx(d.b)},
$S:49}
B.ekY.prototype={
$1(d){return this.a.cem(d.b)},
$S:43}
B.ekZ.prototype={
$1(d){return this.a.cen(d.b)},
$S:18}
B.ekX.prototype={
$1(d){return this.a.b_v()},
$S:37}
B.ekW.prototype={
$1(d){return this.a.abQ(d.b)},
$S:281}
B.ekT.prototype={
$0(){return this.a.z},
$S:691}
B.ekU.prototype={
$0(){return this.a.Q},
$S:737}
B.ekV.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJz()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.fk4,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f4E,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h7,q,q,q)},
$S:58}
B.eku.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tf,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.Tn,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1843}
B.ekO.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lQ()},
$S:0}
B.ekP.prototype={
$0(){var w=this.a
return w.m(new B.ekN(w))},
$S:0}
B.ekN.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ekQ.prototype={
$0(){var w=this.a
return w.m(new B.ekM(w))},
$S:0}
B.ekM.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ekR.prototype={
$0(){var w=this.a
return w.m(new B.ekL(w))},
$S:0}
B.ekL.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ekK.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mB.gdK(D.mB),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.crr(p[r]))
return new C.D(I.agq,C.v(C.a([new C.D(V.ai5,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ekJ.prototype={
$0(){return this.a.c4G(this.b)},
$S:0}
B.dg5.prototype={
$0(){var w=this,v=null,u=C.hq(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c9,v,A.dZ,A.c7)
u.ey()
return u},
$S:304}
B.ewI.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.ewG(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.ewH())},
$S:8}
B.ewG.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ewH.prototype={
$0(){},
$S:0}
B.ewj.prototype={
$0(){},
$S:0}
B.ewi.prototype={
$0(){},
$S:0}
B.ews.prototype={
$0(){return B.qO(this.b,this.a.d,"spark-painter")},
$S:0}
B.ewu.prototype={
$1(d){return this.a.aXR(0,d.b)},
$S:43}
B.ewy.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aB(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aQW(u)
v.c7I(u)
return null},
$S:18}
B.ewt.prototype={
$1(d){return this.a.aXQ()},
$S:37}
B.ewz.prototype={
$1(d){return this.a.aXR(0,d.b)},
$S:23}
B.ewA.prototype={
$1(d){return this.a.aXQ()},
$S:49}
B.ewB.prototype={
$0(){var w=this.a
return w.m(new B.ewr(w,this.b))},
$S:0}
B.ewr.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ewC.prototype={
$0(){var w=this.a
return w.m(new B.ewq(w))},
$S:0}
B.ewq.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ewD.prototype={
$0(){var w=this.a
return w.m(new B.ewp(w,this.b))},
$S:0}
B.ewp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ewE.prototype={
$1(d){var w=this.a
return w.m(new B.ewo(w,d))},
$S:6}
B.ewo.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ewF.prototype={
$0(){var w=this.a
return w.m(new B.ewn(w))},
$S:0}
B.ewn.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ewv.prototype={
$0(){var w=this.a
return w.m(new B.ewm(w))},
$S:0}
B.ewm.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eww.prototype={
$0(){var w=this.a
return w.m(new B.ewl(w))},
$S:0}
B.ewl.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ewx.prototype={
$0(){var w=this.a
return w.m(new B.ewk(w,this.b))},
$S:0}
B.ewk.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eDh.prototype={
$0(){return B.qO(this.b,this.a.d,"title")},
$S:0}
B.eDi.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIz().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZa(v[t],t,s,q,u))
return new C.D(A.fA,C.bW(A.fQ,w,A.rP,0,0),null)},
$S:714}
B.eDj.prototype={
$1(d){return this.a.m(new B.eDg())},
$S:2}
B.eDg.prototype={
$0(){},
$S:0}
B.eDk.prototype={
$0(){var w=this.a
w.m(new B.eDf(w,this.b))
w=w.gIz()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDf.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eDl.prototype={
$0(){var w=this.a
return w.m(new B.eDe(w,this.b))},
$S:0}
B.eDe.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eDm.prototype={
$0(){var w=this.a
return w.m(new B.eDd(w))},
$S:0}
B.eDd.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eDn.prototype={
$0(){var w=this.a
return w.m(new B.eDc(w,this.b))},
$S:0}
B.eDc.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eDo.prototype={
$0(){var w=this.a.gIz()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDp.prototype={
$1(d){var w=this.a
return w.m(new B.eDb(w,d))},
$S:6}
B.eDb.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eha.prototype={
$1(d){return d.a.aB(0,this.a).gcl()<16},
$S:z+13}
B.ehb.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcl()<16||d.a.aB(0,w).gcl()>this.a.r.galR()*2.2},
$S:z+13}
B.egZ.prototype={
$0(){return B.qO(this.b,this.a.d,"orbits")},
$S:0}
B.eh_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gad3()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2n:q.chY(u,q.gaV8())
return new C.ev(C.aE(A.c4,C.b3(r,r,r,new B.bkx(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.egW(q),new B.egX(q),new B.egY(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:196}
B.egX.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:43}
B.egY.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.egW.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_l(u,v.gaV8(),v.Q,v.b14(),C.a([],x.g)))
C.jP()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.eh0.prototype={
$1(d){var w=this.a
return w.m(new B.egV(w,d))},
$S:6}
B.egV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eh2.prototype={
$1(d){var w=this.a
return w.m(new B.egU(w,d))},
$S:6}
B.egU.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eh3.prototype={
$1(d){var w=this.a
return w.m(new B.egT(w,d))},
$S:6}
B.egT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eh4.prototype={
$0(){var w=this.a
return w.m(new B.egS(w))},
$S:0}
B.egS.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eh5.prototype={
$0(){var w=this.a
return w.m(new B.egR(w))},
$S:0}
B.egR.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
return w.m(new B.egQ(w))},
$S:0}
B.egQ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.eh7.prototype={
$0(){var w=this.a
return w.m(w.gctK())},
$S:0}
B.eh8.prototype={
$0(){var w=this.a
return w.m(w.gbFv())},
$S:0}
B.eh9.prototype={
$0(){var w=this.a
return w.m(new B.egP(w))},
$S:0}
B.egP.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqx(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hb())}},
$S:0}
B.eh1.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.eCJ.prototype={
$1(d){return this.a.fS$-d.b>6000},
$S:738}
B.eCK.prototype={
$1(d){var w=this.a.e
return new C.a1(w,new B.eCI(d),C.U(w).k("a1<1>")).gM(0)>=3},
$S:738}
B.eCI.prototype={
$1(d){return d.a.aB(0,this.a.a).gcl()<14},
$S:z+53}
B.eCy.prototype={
$0(){return B.qO(this.b,this.a.d,"swarm")},
$S:0}
B.eCz.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bs2(v.e,v.f,v.ax,v.at,v.ay,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eCv(v),new B.eCw(v),new B.eCx(v),w,w,w,w,w,w,w,w,new B.eCn(v),new B.eCo(v),new B.eCp(v),w,w,w,!1,A.a8),v.d)},
$S:196}
B.eCw.prototype={
$1(d){return this.a.ay=d.b},
$S:43}
B.eCx.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eCv.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eCo.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.y(v,w.fS$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.le("flute",7,500,0.3)},
$S:23}
B.eCp.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.eCn.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eCA.prototype={
$0(){var w=this.a
return w.m(new B.eCu(w,this.b))},
$S:0}
B.eCu.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eCB.prototype={
$0(){var w=this.a
return w.m(new B.eCt(w,this.b))},
$S:0}
B.eCt.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eCC.prototype={
$0(){var w=this.a
return w.m(new B.eCs(w))},
$S:0}
B.eCs.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eCD.prototype={
$1(d){var w=this.a
return w.m(new B.eCr(w,d))},
$S:6}
B.eCr.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eCE.prototype={
$1(d){var w=this.a
return w.m(new B.eCq(w,d))},
$S:6}
B.eCq.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eCF.prototype={
$1(d){var w=this.a
return w.m(new B.eCm(w,d))},
$S:6}
B.eCm.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eCG.prototype={
$1(d){var w=this.a
return w.m(new B.eCl(w,d))},
$S:6}
B.eCl.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eCH.prototype={
$1(d){var w=this.a
return w.m(new B.eCk(w,d))},
$S:6}
B.eCk.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFz(w,d))},
$S:128}
B.dFz.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jx(v==null?A.rj:v)
v=v.gaf(v)
while(v.C()){u=v.gT(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFB.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFC.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Z_(w)>0},
$S:z+14}
B.dFq.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.az7()},
$S:0}
B.dFt.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eI(w,F.kh,new C.D(A.bC,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i6,w,w,w),A.S,C.E(C.ig(!0,w,w,A.y,S.aNJ,new B.dFs(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:47}
B.dFs.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFr(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b3:A.dr,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jc
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f8j,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:76}
B.dFr.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dFx.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gac6()
o=C.b3(q,q,q,new B.ba0(p.d,w,v,p.gc4N(),q),o)
v=p.bWR("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHW()
t=p.as>=p.gHW()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.au1("GOAL",""+w+" / "+u,t),p.au1("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hC,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lC)
if(p.Q&&!p.y)s.push(D.aVx)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.cf).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.cf,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gHW()+".",q,q,q,q,q,q,A.hE,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eZS,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mv,"Try again",new B.dFu(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.iV,"Next level",new B.dFv(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.VK,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c4,new C.an(A.W,q,A.b0,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFw(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dFw.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fS$
E.dF(180,"",200,1,0.4,"sine")
C.jj()},
$S:23}
B.dFu.prototype={
$0(){var w=this.a
return w.m(w.gb3J())},
$S:0}
B.dFv.prototype={
$0(){var w=this.a
return w.aXS(w.r+1)},
$S:0}
B.dFy.prototype={
$0(){var w=this.a
return w.m(w.gb3J())},
$S:0}
B.cKF.prototype={
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
v.z=A.lq
w.ae(d,e*0.5,v)},
$S:739}
B.ecE.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcMT()?this.a.cpU(w,v,d.b):w.aB(0,v).gcl())<24},
$S:z+56}
B.ed2.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.ecS.prototype={
$0(){var w=this.a
return w.m(new B.ecJ(w))},
$S:0}
B.ecJ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ecT.prototype={
$0(){return B.qO(this.b,this.a.d,"marble-music")},
$S:0}
B.ecU.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bh4(v.e,v.f,v.at,v.ax,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ecP(v),new B.ecQ(v),new B.ecR(v),w,w,w,w,w,w,w,w,w,w,new B.ecI(v),w,w,w,!1,A.a8),v.d)},
$S:196}
B.ecI.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZK(w)
u.e.push(new B.Fu(w,w,v,u.aOz(v)))
if(u.ay)B.le(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRb(d.b)},
$S:49}
B.ecQ.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:43}
B.ecR.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRb(d.b)},
$S:18}
B.ecP.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZK(t.ad(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fu(w,t,v,u.aOz(v)))
if(u.ay)B.le(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.ecV.prototype={
$0(){var w=this.a
return w.m(new B.ecO(w,this.b))},
$S:0}
B.ecO.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.ecW.prototype={
$0(){var w=this.a
return w.m(new B.ecN(w,this.b))},
$S:0}
B.ecN.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ecX.prototype={
$0(){var w=this.a
return w.m(new B.ecM(w,this.b))},
$S:0}
B.ecM.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ecY.prototype={
$1(d){var w=this.a
return w.m(new B.ecL(w,d))},
$S:6}
B.ecL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ecZ.prototype={
$0(){var w=this.a
return w.m(new B.ecK(w))},
$S:0}
B.ecK.prototype={
$0(){return this.a.axD("stairs")},
$S:0}
B.ed_.prototype={
$0(){var w=this.a
return w.m(new B.ecH(w))},
$S:0}
B.ecH.prototype={
$0(){return this.a.axD("pinball")},
$S:0}
B.ed0.prototype={
$0(){var w=this.a
return w.m(new B.ecG(w))},
$S:0}
B.ecG.prototype={
$0(){return this.a.axD("random")},
$S:0}
B.ed1.prototype={
$0(){var w=this.a
return w.m(new B.ecF(w))},
$S:0}
B.ecF.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.egy.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.egz.prototype={
$0(){var w=this.b,v=new B.ad5(this.a.a,this.c)
v.c=w.fS$
return w.e.push(v)},
$S:0}
B.egG.prototype={
$0(){var w=this.a
return w.m(new B.egF(w))},
$S:0}
B.egF.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.egH.prototype={
$0(){return B.qO(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.egI.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aPW()}w=u.w
return new C.ev(C.aE(A.c4,C.b3(v,v,v,new B.bky(u.e,u.gaXU(),6,u.gck2(),u.gcqk(),u.fS$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.egE(u),v,v,v,!1,A.a8),u.d)},
$S:196}
B.egE.prototype={
$1(d){return this.a.c4P(d.b)},
$S:49}
B.egJ.prototype={
$1(d){var w=this.a
return w.m(new B.egD(w,d))},
$S:6}
B.egD.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.egK.prototype={
$0(){var w=this.a
return w.m(new B.egC(w,this.b))},
$S:0}
B.egC.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.egL.prototype={
$0(){var w=this.a
return w.m(new B.egB(w,this.b))},
$S:0}
B.egB.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.egM.prototype={
$0(){var w=this.a
return w.m(w.gbJv())},
$S:0}
B.egN.prototype={
$0(){var w=this.a
return w.m(new B.egA(w))},
$S:0}
B.egA.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad5(v.aC(6),v.aj()))},
$S:0}
B.egO.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.ftY.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:130}
B.eg2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eg1(w,d))},
$S:128}
B.eg1.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
B.efP.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:130}
B.efJ.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8U(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.efK.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.efO.prototype={
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
p=D.vY.h(0,v[u].a).a
o=w.aiF(u)
v=D.vY.h(0,v[t].a).a
n=w.aiF(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vS("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaY_()&&w.x.L(0,w.d)){B.vS("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vP("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.efN.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a1<J.E>"),p=C.C(new C.a1(new C.cu(t,s),new B.efL(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bI(0,new B.efM(r,v))
t.a9(0)
t.v(0,v)
A.d.cC(u.e,r)
u.r=null},
$S:0}
B.efL.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.efM.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:130}
B.efX.prototype={
$1(d){return""+d.b+" "+D.vY.h(0,d.a).c.toLowerCase()},
$S:402}
B.efY.prototype={
$0(){var w=this.a
return w.m(new B.efW(w))},
$S:0}
B.efW.prototype={
$0(){var w=this.a;++w.d
w.aw3(0)},
$S:0}
B.efZ.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aE(A.c4,C.b3(w,w,w,new B.bhM(v.e,v.f,v.r,v.gcAS(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efS(v),new B.efT(v),new B.efU(v,e),w,w,w,w,w,w,w,w,w,w,new B.efV(v),w,w,w,!1,A.a8)},
$S:35}
B.efV.prototype={
$1(d){return this.a.c5b(d.b)},
$S:49}
B.efT.prototype={
$1(d){var w=this.a
return w.w=w.aY0(d.b)},
$S:43}
B.efU.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.efQ(w,v,d,this.b))},
$S:18}
B.efQ.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.efS.prototype={
$1(d){return this.a.w=null},
$S:37}
B.eg_.prototype={
$0(){var w=this.a
return w.m(new B.efR(w,this.b))},
$S:0}
B.efR.prototype={
$0(){var w=this.a
w.d=this.b
w.aw3(0)},
$S:0}
B.eg0.prototype={
$0(){return this.a.c55(0,this.b.a)},
$S:0}
B.dof.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).ez(0,Math.max(h.gcl(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:130}
B.dOj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOi(w,d))},
$S:128}
B.dOi.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dO8.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.auK[w.aC(4)]
return A.d.fY(u)},
$S:22}
B.dO7.prototype={
$1(d){return B.fY_(d)==="*"},
$S:3}
B.dO9.prototype={
$1(d){return d!==this.a},
$S:3}
B.dO6.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vP("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vS("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8E()[r]+" codes for "+C.t(D.Cg.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b01()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.Cg.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vS("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOh.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dr:e,u=C.m(8),t=f?C.I(A.b3,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b3:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.nb,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1847}
B.dOc.prototype={
$1(d){var w=D.djI.h(0,d)
return w==null?A.c:w},
$S:740}
B.dOd.prototype={
$0(){var w=this.a
return w.m(new B.dOb(w,this.b))},
$S:0}
B.dOb.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avm()},
$S:0}
B.dOe.prototype={
$0(){var w=this.a
return w.m(new B.dOa(w))},
$S:0}
B.dOa.prototype={
$0(){var w=this.a;++w.e
w.avm()},
$S:0}
B.dOf.prototype={
$0(){return this.a.aXZ(this.b)},
$S:0}
B.dOg.prototype={
$0(){return this.a.aXZ(this.b)},
$S:0}
B.dR8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dR7(w,d))},
$S:128}
B.dR7.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dQW.prototype={
$0(){},
$S:0}
B.dQV.prototype={
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
B.dQX.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dR0.prototype={
$1(d){var w=this.a
return w.m(new B.dR_(w,d))},
$S:6}
B.dR_.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dR1.prototype={
$1(d){var w=this.a
return w.m(new B.dQZ(w,d))},
$S:6}
B.dQZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dR2.prototype={
$1(d){var w=this.a
return w.m(new B.dQY(w,d))},
$S:6}
B.dQY.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dR3.prototype={
$0(){return this.a.a9Q("drought")},
$S:0}
B.dR4.prototype={
$0(){return this.a.a9Q("disease")},
$S:0}
B.dR5.prototype={
$0(){return this.a.a9Q("foxes")},
$S:0}
B.dR6.prototype={
$0(){return this.a.a9Q("rabbits")},
$S:0}
B.d3n.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eL()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kf(new C.eq(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c9,new C.js(1),l,l,l,l,A.c7,l)
n.ey()
n.a4(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1849}
B.d3p.prototype={
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
if(m!=null)n.bz(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bz(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fB
this.c.aO(u,l)},
$S:1850}
B.d3o.prototype={
$3(d,e,f){var w=null,v=C.hq(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c9,w,A.dZ,A.c7)
v.ey()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1851}
B.bFq.prototype={
$2(d,e){return d+e.a*e.b},
$S:1852}
B.foE.prototype={
$2(d,e){return e.a-d.a},
$S:1853}
B.dBL.prototype={
$2(d,e){return d+e},
$S:73}
B.dBY.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dBX(v,A.k.D((v.gvO()-w[v.e].guP())/Math.max(w[v.e].guP(),8),-1,1)*0.32,u))},
$S:8}
B.dBX.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dBZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dBW(w,d))},
$S:128}
B.dBW.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
B.dBM.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dBR.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1854}
B.dBS.prototype={
$0(){var w=this.a
return w.m(new B.dBQ(w))},
$S:0}
B.dBQ.prototype={
$0(){var w=this.a;++w.e
A.d.h0(w.f,0,5,0)},
$S:0}
B.dBT.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c4,C.b3(w,w,w,new B.b95(v.w,this.b.a,v.f,v.gvO()===v.d[v.e].guP(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dBP(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dBP.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cwK(v-1)},
$S:49}
B.dBU.prototype={
$0(){var w=this.a
return w.m(new B.dBO(w,this.b))},
$S:0}
B.dBO.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h0(w.f,0,5,0)},
$S:0}
B.dBV.prototype={
$0(){var w=this.a
return w.m(new B.dBN(w))},
$S:0}
B.dBN.prototype={
$0(){return A.d.h0(this.a.f,0,5,0)},
$S:0}
B.cDc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cl(new C.u(d,s),20,w),A.rw)
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
B.fnD(v,"1",new C.u(d,s),A.bi,11)}},
$S:1855}
B.dVb.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVa(w,v))},
$S:8}
B.dVa.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dV9(w,d))},
$S:128}
B.dV9.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
B.dV1.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dV5.prototype={
$0(){var w=this.a
return w.m(new B.dV4(w))},
$S:0}
B.dV4.prototype={
$0(){return this.a.r++},
$S:0}
B.dV6.prototype={
$0(){var w=this.a
return w.m(new B.dV3(w,this.b))},
$S:0}
B.dV3.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dV7.prototype={
$1(d){var w=this.a
return w.m(new B.dV2(w,d))},
$S:6}
B.dV2.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dV8.prototype={
$1(d){return this.a.c5c(this.b,d)},
$S:6}
B.dbn.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bON(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
m.aO(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aO(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hJ.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1856}
B.dbo.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fnD(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1857}
B.dFX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dFW(w,d))},
$S:128}
B.dFW.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dFF.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jI(90-(w-65)):d},
$S:14}
B.dFO.prototype={
$1(d){return this.a.m(new B.dFN())},
$S:2}
B.dFN.prototype={
$0(){},
$S:0}
B.dFP.prototype={
$1(d){return this.a.m(new B.dFM())},
$S:2}
B.dFM.prototype={
$0(){},
$S:0}
B.dFQ.prototype={
$0(){var w=this.a
return w.m(new B.dFL(w))},
$S:0}
B.dFL.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWI()},
$S:0}
B.dFR.prototype={
$0(){var w=this.a
return w.m(new B.dFK(w))},
$S:0}
B.dFK.prototype={
$0(){return this.a.f=0},
$S:0}
B.dFS.prototype={
$0(){var w=this.a
return w.m(new B.dFJ(w))},
$S:0}
B.dFJ.prototype={
$0(){return this.a.f=1},
$S:0}
B.dFT.prototype={
$0(){var w=this.a
return w.m(new B.dFI(w,this.b))},
$S:0}
B.dFI.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dFU.prototype={
$1(d){var w=this.a
return w.m(new B.dFH(w,d))},
$S:6}
B.dFH.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dFV.prototype={
$1(d){var w=this.a
w.m(new B.dFG(w,d))
if(w.ga97()&&w.Q.L(0,w.x)){B.vS("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vP("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFG.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLo.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLz.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLu.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLA.prototype={
$1(d){return this.a.Lm(d)&&!d.x},
$S:z+1}
B.bLB.prototype={
$2(d,e){return Math.max(d,this.a.azB(e))},
$S:z+6}
B.bLD.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLE(w))},
$S:z+5}
B.bLE.prototype={
$0(){return this.a.a},
$S:108}
B.bLC.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
B.bLF.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLG(w))},
$S:z+5}
B.bLG.prototype={
$0(){return this.a.a},
$S:108}
B.bLq.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLr(w))},
$S:z+5}
B.bLr.prototype={
$0(){return this.a.a},
$S:108}
B.bLp.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
B.bLs.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLt(w))},
$S:z+5}
B.bLt.prototype={
$0(){return this.a.a},
$S:108}
B.bLn.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLH.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLv.prototype={
$1(d){return d!==this.b&&this.a.aFG(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLy.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLx.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLw.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGC.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGD.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ck1.prototype={
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
$S:183}
B.fFm.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1858}
B.fFo.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1859}
B.fFp.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1860}
B.fFn.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1861}
B.bGg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGf(w))},
$S:0}
B.bGf.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGi.prototype={
$0(){return C.a([],x.ey)},
$S:1862}
B.bGj.prototype={
$1(d){return this.a.bA(d).a>15e5},
$S:355}
B.bGk.prototype={
$0(){var w,v,u
J.bDu(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ci(v))if(B.fYs(v.b))w.aZZ(v)
else w.a__(v)
else{u=w.a.c.bbA(v)
w.adh(u==null?"The "+$.qa().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGe.prototype={
$1(d){return new C.e0(new B.bGc(this.a,this.b),null)},
$S:21}
B.bGc.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGd(this.a,v,e),t=$.qa(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kA,w,w,w),q=C.aH(w,w,w,w,D.bGt,w,w,w,new B.bG8(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xE,C.v(C.a([r,A.at,D.fym,A.S,C.B(C.a([q,C.E(C.kX(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bN4,w,w,w,new B.bG9(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bK(!1,D.fco,w,w,!0,w,w,new B.bGa(u),w,w),C.bK(!1,A.zE,w,w,!0,w,w,new B.bGb(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:85}
B.bGd.prototype={
$1(d){var w=this.a
w.m(new B.bG6(this.b,d))
this.c.$1(new B.bG7())
w.a.toString},
$S:6}
B.bG6.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bG7.prototype={
$0(){},
$S:0}
B.bG8.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bG9.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGa.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGb.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bGz.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adh("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adh("\u26a0 Overloaded! The "+$.qa().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zy(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adh("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGA.prototype={
$0(){},
$S:0}
B.bFK.prototype={
$0(){},
$S:0}
B.bGB.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c4,C.b3(p,p,p,new B.aif(w,v,u,t,s,r==null?A.iZ:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGs(o),new B.bGt(o),new B.bGu(o),p,p,p,p,p,p,p,p,p,p,new B.bGv(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b3L)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.B(C.a([D.faE,C.E(C.d(w,p,p,p,p,p,p,D.f2V,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b99,p,u,v,p,p,A.n),p,p,p,p,A.nW,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGw(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aY3(C.B(C.a([D.bxm,new B.fi(A.FL,"Cut wire",new B.bGx(o),A.cf,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.ceU(w),p,p,10,10,p,p))}return C.jy(new C.an(A.W,p,A.b0,A.r,n,p),A.r,p)},
$S:431}
B.bGt.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b5W(s)
if(r!=null){t.m(new B.bGq(t,r,d))
return}w=t.b_F(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new B.bGr(t,w))}},
$S:43}
B.bGq.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGu.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGo(w,d))
else if(w.w!=null)w.m(new B.bGp(w,d.b.ad(0,w.x)))},
$S:18}
B.bGo.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGp.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGs.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b5W(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajT(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adf()},
$S:37}
B.bGv.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_F(v)
if(u!=null){w.m(new B.bGm(w,u))
if(D.lX.ai(0,u.b))w.cpn(u)
w.a.toString
return}w.m(new B.bGn(w,w.cBH(v)))},
$S:49}
B.bGm.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGn.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGw.prototype={
$0(){var w=this.a
return w.m(new B.bGl(w))},
$S:0}
B.bGl.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGx.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.adf()},
$S:0}
B.bFL.prototype={
$0(){return this.a.bns(this.b)},
$S:0}
B.bG3.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.eYv,w,w,w),C.E(C.kX(this.b.d,w,w,g,h,new B.bG5(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1863}
B.bG5.prototype={
$1(d){var w=this.a
w.m(new B.bG4(this.b,d))
w.a.toString},
$S:6}
B.bG4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFR.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.adf()},
$S:0}
B.bFS.prototype={
$0(){var w=this.a
return w.m(new B.bFQ(w))},
$S:0}
B.bFQ.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFT.prototype={
$0(){this.a.m(new B.bFP(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bFP.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bFW.prototype={
$0(){return this.a.aZZ(this.b)},
$S:0}
B.bFX.prototype={
$0(){return this.a.a__(this.b)},
$S:0}
B.bFY.prototype={
$0(){return this.a.a0E(this.b)},
$S:0}
B.bFZ.prototype={
$0(){var w=this.a
w.m(new B.bFO(this.b,this.c))
w.a.toString},
$S:0}
B.bFO.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bG_.prototype={
$0(){var w=this.a
w.m(new B.bFN(this.b,this.c))
w.a.toString},
$S:0}
B.bFN.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bG0.prototype={
$0(){var w=this.a
w.m(new B.bFM(this.b,this.c))
w.a.toString},
$S:0}
B.bFM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bG1.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG2.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFU.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFV.prototype={
$1(d){return this.a.f=d},
$S:6}
B.few.prototype={
$1(d){return d.aFj("bulb")},
$S:z+2}
B.fex.prototype={
$1(d){return d.pI(0,"switch")&&d.aFj("bulb")},
$S:z+2}
B.fey.prototype={
$1(d){return A.d.b4(d.a,new B.fej())},
$S:z+2}
B.fej.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fez.prototype={
$1(d){return d.pI(0,"resistor")&&A.d.b4(d.a,new B.fei())},
$S:z+2}
B.fei.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.feA.prototype={
$1(d){return!d.pI(0,"battery")&&d.aFj("bulb")},
$S:z+2}
B.fen.prototype={
$1(d){return A.d.b4(d.a,new B.feh())},
$S:z+2}
B.feh.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.feo.prototype={
$1(d){return A.d.b4(d.a,new B.feg())},
$S:z+2}
B.feg.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fep.prototype={
$1(d){return A.d.b4(d.a,new B.fef())},
$S:z+2}
B.fef.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.feq.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fed())&&A.d.b4(w,new B.fee())&&d.pI(0,"buck")},
$S:z+2}
B.fed.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fee.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fer.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.feb())&&A.d.b4(w,new B.fec())},
$S:z+2}
B.feb.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fec.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fes.prototype={
$1(d){return A.d.b4(d.a,new B.fea())},
$S:z+2}
B.fea.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dRg.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dRp.prototype={
$1(d){var w=this.a.d
return w.aFG(d)&&w.Ci(d)},
$S:z+1}
B.dRq.prototype={
$1(d){return d.x},
$S:z+1}
B.dRr.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRs.prototype={
$0(){},
$S:0}
B.dRf.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fri,A.at,D.fck,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PG[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bF,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.k7,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f3F,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cC,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRe(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eI(q,F.kh,new C.D(A.bR,new C.a7(340,q,C.cz(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:47}
B.dRe.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dRd(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRd.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bgE()},
$S:0}
B.dRb.prototype={
$1(d){return new B.V0(this.a.d,null)},
$S:z+67}
B.dRc.prototype={
$0(){},
$S:0}
B.dRo.prototype={
$1(d){return new C.e0(new B.dRn(this.a),null)},
$S:21}
B.dRn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahq(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aS
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.foH,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,C.bw(C.m(4),C.m0(A.bF,m,m,5,m,w.a/11,new C.lT(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.ffo)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ah.Td,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dh,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRl(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dr,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7v,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eJ,A.nW,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRm(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cz(u,m,A5.xC,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:85}
B.dRl.prototype={
$0(){var w=this.a
w.m(new B.dRj(w))
this.b.$1(new B.dRk())
w.EI()},
$S:0}
B.dRj.prototype={
$0(){var w=this.a
$.ahq()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRk.prototype={
$0(){},
$S:0}
B.dRm.prototype={
$0(){var w=this.a
w.m(new B.dRh(w,this.b))
this.c.$1(new B.dRi())
w.EI()},
$S:0}
B.dRh.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRi.prototype={
$0(){},
$S:0}
B.dRu.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.dRv.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.ma("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).c8(C.ea(new B.dRt(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRt.prototype={
$1(d){C.ll("construction")
return Am.hAC()},
$S:z+68}
B.dRw.prototype={
$0(){return B.hmJ(this.a,"ELECTRONICS LAB",this.b,A.aS)},
$S:0}
B.dRx.prototype={
$0(){var w=this.a
return w.m(w.d.gcSU())},
$S:0}
B.dRy.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grw(v))
w.EI()},
$S:0}
B.cAK.prototype={
$2(d,e){var w=null,v=this.a.gaw4().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8d(v,w),A.au)},
$S:67}
B.cAJ.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cU(v,u,v+e,u))
w.F(new C.cU(v,u,v,u+e))
w.F(new C.cU(v,u,v-e,u))
w.F(new C.cU(v,u,v,t))
w.F(new C.bF())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aO(w,t)},
$S:704}
B.fK0.prototype={
$3(d,e,f){return new B.Uh(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fK1.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,g,null,new C.bf(C.cI(A.ct,e,null),new C.bo(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNc.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.dNb.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bWG(o):q.bzq(o,p),m=x.p
p=C.a([C.qd(new C.nc(n,new C.cx(p,x.aC)),A.pJ,C.rM(),A.bc,A.bc,new B.dN9())],m)
n=t.d
if(n){w=A.k.E(q.gRn(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bx8)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.aA,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dj(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.n6,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uw)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.K0,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wa)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.K0,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNa(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b0,A.r,p,s),A.aq)},
$S:280}
B.dN9.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,d,null,new C.bf(e,new C.bo(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:349}
B.dNa.prototype={
$0(){var w=this.a
return w.m(new B.dN8(w))},
$S:0}
B.dN8.prototype={
$0(){return this.a.e=null},
$S:0}
B.dN7.prototype={
$0(){var w=this.a
return w.m(new B.dN6(w,this.b))},
$S:0}
B.dN6.prototype={
$0(){return this.a.e=A.d.cJ(F.k0,this.b)},
$S:0}
B.dN5.prototype={
$0(){var w=this.a
return w.m(new B.dN4(w))},
$S:0}
B.dN4.prototype={
$0(){return this.a.e=0},
$S:0}
B.dN0.prototype={
$0(){var w=this.a
return w.m(new B.dN_(w))},
$S:0}
B.dN_.prototype={
$0(){return this.a.e=null},
$S:0}
B.dN3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fwQ,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eD,p,p,p,D.f9x,p,p,p),1),C.d(A.a.aT(A.o.u(C.dl(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qm,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kO,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bum(w.gRn(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b3,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.V6,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dN2(w),p,p,p,p,p,p,!1,A.a8),A.ec,C.p(p,p,A.f,p,p,A.aay,p,12,p,p,p,p,p,12),A.ec,C.p(p,p,A.f,p,p,F.aav,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k0[o].a,p,1,A.a2,p,p,p,A.a7m,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cB,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.btW,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.aec(r,w.gRn(),p),A.f0),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dcI,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b3,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jg,w.au3(F.k0[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lg,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.L8,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:280}
B.dN2.prototype={
$0(){var w=this.a
return w.m(new B.dN1(w))},
$S:0}
B.dN1.prototype={
$0(){return this.a.e=null},
$S:0}
B.e8d.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e8c(w,d))},
$S:128}
B.e8c.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fYy(v)},
$S:0}
B.e8e.prototype={
$0(){},
$S:0}
B.e83.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fYy(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e84.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvl().r){C.jP()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vS("click",s.c+s.d,60,0.4)
if(B.hmT(r.gvl(),q).b.a===r.gvl().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vP("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bu("bell",D.aop,700,0.45)
for(q=r.gvl().c,q=C.e9(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.y(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e87.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c4,C.b3(s,s,s,new B.bgf(r.gvl(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e85(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPg,s,s,s),C.d(""+u.a+"/"+r.gvl().c.a+" \u2605   mirrors "+w.a+"/"+r.gvl().r,s,s,s,s,s,s,V.a74,s,s,s)],t),A.m,s,A.hC,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fiV("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fi(A.iV,"Next level",new B.e86(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b0,A.r,w,s)},
$S:64}
B.e85.prototype={
$1(d){return this.a.c5y(d.b)},
$S:49}
B.e86.prototype={
$0(){var w=this.a
return w.adl(w.d+1)},
$S:0}
B.e88.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grw(v))},
$S:0}
B.e89.prototype={
$0(){var w=this.a
return w.adl(w.d+1)},
$S:0}
B.e8a.prototype={
$0(){var w=this.a
return w.adl(w.d-1)},
$S:0}
B.e8b.prototype={
$0(){return this.a.adl(this.b)},
$S:0}
B.dgs.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:741}
B.dgv.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fT:A.aL).gp(0)
u.c=7
u.d=A.bO
r.bC(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bC(w,v,u)},
$S:1865}
B.dgt.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:458}
B.dgu.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:458}
B.e8w.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e8v(w,d))},
$S:128}
B.e8v.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e8x.prototype={
$0(){},
$S:0}
B.e8h.prototype={
$1(d){return d===0},
$S:122}
B.e8q.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7e,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cf:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a74,s,s,s)],v),A.m,s,A.hC,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dr:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b3,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.D(D.brg,w,s),C.E(C.B(C.a([C.E(new C.D(A.bT,C.v(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcwN(),s,s,s,s,s,s,D.aQ5,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bT,C.v(C.a([C.E(C.b3(s,s,s,new B.bgu(r.f,s),A.f0),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQ5,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fiV("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fi(A.iW,"Start",new B.e8n(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fiV(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.iV,"Next colour",new B.e8o(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fiV("Finished! "+q,u,A.b2,C.a([new B.fi(A.mv,"Play again",new B.e8p(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.e8n.prototype={
$0(){var w=this.a
return w.m(new B.e8j(w))},
$S:0}
B.e8j.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aw8()},
$S:0}
B.e8o.prototype={
$0(){var w=this.a
return w.m(w.gc5w())},
$S:0}
B.e8p.prototype={
$0(){var w=this.a
return w.m(new B.e8i(w))},
$S:0}
B.e8i.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aw8()},
$S:0}
B.e8r.prototype={
$1(d){var w=this.a
return w.m(new B.e8m(w,d))},
$S:6}
B.e8m.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e8s.prototype={
$1(d){var w=this.a
return w.m(new B.e8l(w,d))},
$S:6}
B.e8l.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e8t.prototype={
$1(d){var w=this.a
return w.m(new B.e8k(w,d))},
$S:6}
B.e8k.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e8u.prototype={
$0(){var w=this.a
return w.m(w.gc5x())},
$S:0}
B.ffd.prototype={
$0(){return D.dZ5},
$S:z+70}
B.ffe.prototype={
$0(){return D.dwj},
$S:z+71}
B.fff.prototype={
$0(){return D.dsR},
$S:z+72}
B.ffg.prototype={
$0(){return D.dvJ},
$S:z+73}
B.ffh.prototype={
$0(){return D.dAF},
$S:z+74}
B.ffi.prototype={
$0(){return D.dUP},
$S:z+75}
B.ffj.prototype={
$0(){return D.dX0},
$S:z+76}
B.ffk.prototype={
$0(){return D.dzZ},
$S:z+77}
B.ceF.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.ceG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hql(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dl,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Tc,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lx,m,m,C.v(C.a([new C.x(r.a,m,D.f89,m,m,m,m,m,m,m,m,m),A.cV,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ceE(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bW(A.bz,j,A.bq,14,14)},
$S:164}
B.ceE.prototype={
$0(){return C.a5(this.a,!1).c8(C.ea(new B.ceD(this.b),!1,null,x.H))},
$S:0}
B.ceD.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eHK.prototype={
$0(){var w=this.a
return w.w=w.d[w.b39(w.f)]},
$S:0}
B.eHG.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eHF.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c5)
w.w=""},
$S:0}
B.eHI.prototype={
$0(){var w=this.a
return w.m(new B.eHH(w,this.b))},
$S:0}
B.eHH.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cC(w,this.b)},
$S:0}
B.eHJ.prototype={
$1(d){return this.a.aYt(0)},
$S:2}
B.dTu.prototype={
$0(){return B.Bu("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTv.prototype={
$0(){},
$S:0}
B.dTp.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTr.prototype={
$0(){return this.a.aYv(this.b)},
$S:0}
B.dTs.prototype={
$0(){var w=this.a
return w.m(new B.dTq(w))},
$S:0}
B.dTq.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTt.prototype={
$0(){var w=this.a
return w.aYv(w.d)},
$S:0}
B.dEn.prototype={
$2(d,e){return d+e},
$S:88}
B.dEo.prototype={
$0(){},
$S:0}
B.dEi.prototype={
$2(d,e){return d+e},
$S:88}
B.dEl.prototype={
$0(){var w=this.a
return w.m(new B.dEk(w,this.b))},
$S:0}
B.dEk.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEm.prototype={
$0(){var w=this.a
return w.m(new B.dEj(w))},
$S:0}
B.dEj.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dQL.prototype={
$0(){return B.qO(this.b,this.a.d,"drawing")},
$S:0}
B.dQM.prototype={
$1(d){var w=this.a
return w.m(new B.dQK(w,d))},
$S:43}
B.dQK.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHs(u,v,t))},
$S:0}
B.dQN.prototype={
$1(d){var w=this.a
return w.m(new B.dQJ(w,d))},
$S:18}
B.dQJ.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dQO.prototype={
$1(d){var w=this.a
return w.m(new B.dQI(w,d))},
$S:23}
B.dQI.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHs(u,v,t))},
$S:0}
B.dQP.prototype={
$0(){var w=this.a
return w.m(new B.dQH(w,this.b))},
$S:0}
B.dQH.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dQQ.prototype={
$1(d){var w=this.a
return w.m(new B.dQG(w,d))},
$S:6}
B.dQG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQR.prototype={
$0(){var w=this.a
return w.m(new B.dQF(w))},
$S:0}
B.dQF.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dQS.prototype={
$0(){var w=this.a
return w.m(new B.dQE(w))},
$S:0}
B.dQE.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dQT.prototype={
$0(){var w=this.a
return w.m(A.d.grw(w.e))},
$S:0}
B.dQU.prototype={
$0(){var w=this.a
return w.m(new B.dQD(w))},
$S:0}
B.dQD.prototype={
$0(){var w=this.a
w.x=D.ave[A.o.E(A.d.cJ(D.ave,w.x)+1,4)]},
$S:0}
B.edT.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.edU.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bu("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.edS(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bu("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.edS.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.edV.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.edR(w))},
$S:11}
B.edR.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.edZ.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mB(new B.edX(v,e),w,A.bc,A.pJ,w,w,new C.bo(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edY(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:76}
B.edY.prototype={
$0(){return this.a.c6t(this.b)},
$S:0}
B.edX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bVT
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b3,A.q,1)
if(o){r=C.dp()
r.fB(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f5x,p,p,p),p,r,!0)
u=r}else u=D.fq3
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:132}
B.ee_.prototype={
$0(){var w=this.a
return w.m(new B.edW(w,this.b))},
$S:0}
B.edW.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arp()},
$S:0}
B.ee0.prototype={
$0(){var w=this.a
return w.m(w.gbI2())},
$S:0}
B.eoK.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eoL.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.eoI.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eoJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.eoH(w))},
$S:11}
B.eoH.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eoM.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.eoN.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eoO.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYu()},
$S:11}
B.eoP.prototype={
$0(){return this.a.c6z(this.b)},
$S:0}
B.eD1.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.eDa.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kN,C.B(C.a([v,A.ab,new C.dq(1,A.cn,C.f4(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eh),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1867}
B.eD6.prototype={
$1(d){return this.a.m(new B.eD5())},
$S:2}
B.eD5.prototype={
$0(){},
$S:0}
B.eD7.prototype={
$0(){var w=this.a
return w.m(new B.eD4(w,this.b))},
$S:0}
B.eD4.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eD8.prototype={
$1(d){var w=this.a
return w.m(new B.eD3(w,d))},
$S:6}
B.eD3.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eD9.prototype={
$0(){var w=this.a
return w.m(new B.eD2(w))},
$S:0}
B.eD2.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.ecy.prototype={
$0(){},
$S:0}
B.ecz.prototype={
$0(){},
$S:0}
B.ecr.prototype={
$0(){var w=this.a
return w.m(new B.ecq(w))},
$S:0}
B.ecq.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7Q("hat",0.6)},
$S:0}
B.ecs.prototype={
$0(){var w=this.a
return w.m(new B.ecp(w))},
$S:0}
B.ecp.prototype={
$0(){this.a.y=1.1
B.le("bell",36,200,0.4)},
$S:0}
B.ect.prototype={
$0(){var w=this.a
return w.m(new B.eco(w))},
$S:0}
B.eco.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aC(Math.max(v,u)-t+1)
w.as=u
B.le("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.ecu.prototype={
$0(){var w=this.a
return w.m(new B.ecn(w,this.b))},
$S:0}
B.ecn.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.ecv.prototype={
$1(d){var w=this.a
return w.m(new B.ecm(w,d))},
$S:6}
B.ecm.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.ecw.prototype={
$1(d){var w=this.a
return w.m(new B.ecl(w,d))},
$S:6}
B.ecl.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.ecx.prototype={
$1(d){var w=this.a
return w.m(new B.eck(w,d))},
$S:6}
B.eck.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crw.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.crx.prototype={
$0(){var w=this.a
return B.hmJ(this.b,w.c,w.e,w.d)},
$S:0}
B.fNQ.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eZ1,v,v,v)
return C.ek(C.a([C.bK(!1,D.fft,v,v,!0,v,v,new B.fNP(d),v,v)],x.p),v,v,F.n2,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:19}
B.fNP.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.crs.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crr.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.cry.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crt.prototype={
$0(){var w=this.a
A.d.W(w.fo$,this.b.bf())
if(w.c!=null)this.c.$0()},
$S:0}
B.crv.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kZ$.a)/1e6,0,0.04)
w.kZ$=d
w.fS$=A.o.an(v,1000)
w.lv(u)
if(w.c!=null)w.m(new B.cru())},
$S:8}
B.cru.prototype={
$0(){},
$S:0}
B.ceB.prototype={
$0(){var w=this
return B.le(w.a,w.b,w.c,w.d)},
$S:1}
B.dWc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWb(w,d))},
$S:z+79}
B.dWb.prototype={
$0(){return this.a.cr3(this.b)},
$S:0}
B.dVF.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:719}
B.dVD.prototype={
$0(){return this.a.id=D.a2t},
$S:0}
B.dVE.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a1<1>")
v=C.pa(new C.a1(w,new B.dVC(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVC.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVB.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ek(C.a([C.bK(!1,A.pd,w,w,!0,w,w,new B.dVA(d),w,w)],x.p),w,w,F.n2,v,w,w,w,w,D.fq7,w)},
$S:19}
B.dVA.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dVY.prototype={
$0(){return B.qO(this.b,this.a.d,"earth")},
$S:0}
B.dVZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVF()
r=p.z
o=C.a([C.aE(A.c4,C.b3(q,q,q,new B.beG(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dVM(p),new B.dVN(p),new B.dVO(p),q,q,q,q,q,q,q,new B.dVP(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Ab.aba)
w=this.b
if(w!=null)o.push(C.ao(8,p.c7a(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b0,A.r,o,q),p.d)},
$S:196}
B.dVN.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:268}
B.dVO.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVF()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:206}
B.dVM.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVF()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dVP.prototype={
$1(d){var w=this.a,v=w.c7d(d.b)
if(v!=null)w.m(new B.dVG(w,v))
else w.m(new B.dVH(w))},
$S:49}
B.dVG.prototype={
$0(){return this.a.awC(this.b)},
$S:0}
B.dVH.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dW_.prototype={
$0(){var w=this.a
w.e.bO(0,A.c5)
w.m(new B.dVL(w,this.b))},
$S:0}
B.dVL.prototype={
$0(){var w=this.a
w.id=D.a2t
w.awC(this.b)},
$S:0}
B.dW3.prototype={
$0(){var w=this.a
return w.m(new B.dVX(w))},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
w.fx=null
w.asz(15,w.y,1)},
$S:0}
B.dW4.prototype={
$0(){var w=this.a
return w.m(new B.dVW(w,this.b))},
$S:0}
B.dVW.prototype={
$0(){var w=this.b.b
return this.a.asz(w.a,w.b,w.c)},
$S:0}
B.dW5.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dVV(w,v))},
$S:0}
B.dVV.prototype={
$0(){var w=this.b.a
return this.a.awC(w[A.cI.aC(w.length)])},
$S:0}
B.dW6.prototype={
$1(d){var w=this.a
return w.m(new B.dVU(w,d))},
$S:6}
B.dVU.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dW7.prototype={
$1(d){var w=this.a
return w.m(new B.dVT(w,d))},
$S:6}
B.dVT.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dW8.prototype={
$1(d){var w=this.a
return w.m(new B.dVS(w,d))},
$S:6}
B.dVS.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dW9.prototype={
$0(){var w=this.a
return w.m(new B.dVR(w))},
$S:0}
B.dVR.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
return w.m(new B.dVQ(w))},
$S:0}
B.dVQ.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dW0.prototype={
$0(){var w=this.a
return w.m(new B.dVK(w))},
$S:0}
B.dVK.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dW1.prototype={
$0(){var w=this.a
return w.m(new B.dVJ(w))},
$S:0}
B.dVJ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dW2.prototype={
$0(){var w=this.a
return w.m(new B.dVI(w))},
$S:0}
B.dVI.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dVz.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOJ,w,w,w),A.uz,C.d(e,w,2,A.a2,w,w,w,A.Tv,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.dVy.prototype={
$0(){var w=this.a
return w.m(new B.dVx(w))},
$S:0}
B.dVx.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcc.prototype={
$0(){var w=null,v=C.hq(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cXn,w,w),this.a),A.a4,A.c9,w,A.dZ,A.c7)
v.ey()
return v},
$S:304}
B.dcd.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1868}
B.ff6.prototype={
$0(){return D.dyg},
$S:z+81}
B.ff7.prototype={
$0(){return D.dWJ},
$S:z+82}
B.ff8.prototype={
$0(){return D.dyi},
$S:z+83}
B.ff9.prototype={
$0(){return D.dsD},
$S:z+84}
B.ffa.prototype={
$0(){return D.dye},
$S:z+85}
B.ffb.prototype={
$0(){return D.dUQ},
$S:z+86}
B.ffc.prototype={
$0(){return D.dUO},
$S:z+87}
B.eDV.prototype={
$0(){return C.a5(this.a,!1).lQ()},
$S:0}
B.eDW.prototype={
$0(){var w=this.a
return w.m(new B.eDU(w))},
$S:0}
B.eDU.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRo()+1,16)},
$S:0}
B.eDX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hqk(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bgV],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.N,new C.x(s.a,n,D.f2v,n,A.L,n,n,n,n,2,n,n),A.cV,new C.x(s.b,n,D.f7y,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.co,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eDT(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bW(A.fQ,k,A.bq,10,10)},
$S:164}
B.eDT.prototype={
$0(){return C.a5(this.a,!1).c8(C.ea(new B.eDS(this.b),!1,null,x.H))},
$S:0}
B.eDS.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.evY.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ew8.prototype={
$0(){return B.qO(this.b,this.a.d,"solar-system")},
$S:0}
B.ew9.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c4,C.b3(v,v,v,new B.br9(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ew5(u),new B.ew6(u),v,v,v,v,v,v,v,new B.ew7(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c7f(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b0,A.r,t,v),u.d)},
$S:196}
B.ew5.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:268}
B.ew6.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:206}
B.ew7.prototype={
$1(d){var w=this.a,v=w.c7i(d.b)
if(v!=null)w.aYQ(v)},
$S:49}
B.ewa.prototype={
$0(){var w=this.a
return w.m(new B.ew4(w))},
$S:0}
B.ew4.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ewb.prototype={
$0(){return this.a.aYQ(this.b)},
$S:0}
B.ewc.prototype={
$1(d){var w=this.a
return w.m(new B.ew3(w,d))},
$S:6}
B.ew3.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ewd.prototype={
$1(d){var w=this.a
return w.m(new B.ew2(w,d))},
$S:6}
B.ew2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ewe.prototype={
$0(){var w=this.a
return w.m(new B.ew1(w))},
$S:0}
B.ew1.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ewf.prototype={
$0(){var w=this.a
return w.m(new B.ew0(w))},
$S:0}
B.ew0.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ewg.prototype={
$0(){var w=this.a
return w.m(new B.ew_(w))},
$S:0}
B.ew_.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ewh.prototype={
$0(){var w=this.a
return w.m(new B.evZ(w))},
$S:0}
B.evZ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.evX.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:340}
B.evW.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOJ,w,w,w),A.uz,C.d(e,w,2,A.a2,w,w,w,A.Tv,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.evV.prototype={
$0(){var w=this.a
return w.m(new B.evU(w))},
$S:0}
B.evU.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eYh.prototype={
$0(){var w=null,v=C.hq(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PO,w,w),this.a),A.a4,A.c9,w,A.dZ,A.c7)
v.ey()
return v},
$S:304}
B.eYi.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eYj.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWg.prototype={
$0(){},
$S:0}
B.dWJ.prototype={
$1(d){return d!=null},
$S:363}
B.dWv.prototype={
$0(){var w=this.a
return w.m(new B.dWm(w,this.b))},
$S:0}
B.dWm.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWw.prototype={
$0(){var w=this.a
return w.m(new B.dWl(w))},
$S:0}
B.dWl.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWx.prototype={
$0(){var w=this.a
return w.m(new B.dWu(w))},
$S:0}
B.dWu.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dWB.prototype={
$0(){var w=this.a
return w.m(new B.dWt(w))},
$S:0}
B.dWt.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dWC.prototype={
$1(d){var w=this.a
return w.m(new B.dWs(w,d))},
$S:6}
B.dWs.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dWD.prototype={
$0(){var w=this.a
return w.m(w.gcuh())},
$S:0}
B.dWE.prototype={
$1(d){var w=this.a
return w.m(new B.dWr(w,d))},
$S:6}
B.dWr.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dWF.prototype={
$1(d){var w=this.a
return w.m(new B.dWq(w,d))},
$S:6}
B.dWq.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWG.prototype={
$1(d){var w=this.a
return w.m(new B.dWp(w,d))},
$S:6}
B.dWp.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dWH.prototype={
$1(d){var w=this.a
return w.m(new B.dWo(w,d))},
$S:6}
B.dWo.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dWI.prototype={
$0(){var w=this.a
return w.m(new B.dWn(w))},
$S:0}
B.dWn.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dWy.prototype={
$0(){var w=this.a
return w.m(new B.dWk(w))},
$S:0}
B.dWk.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dWz.prototype={
$0(){var w=this.a
return w.m(new B.dWj(w))},
$S:0}
B.dWj.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dWA.prototype={
$0(){var w=this.a
return w.m(new B.dWi(w))},
$S:0}
B.dWi.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWf.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bfs,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yH[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yH[q].b)+" m/s\xb2",g,D.f6V,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.MX,C.b0(D.yH[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yH[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yH[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yH[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rK,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.f_c,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWe()))a1.push(D.b45)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dWe.prototype={
$1(d){return d==null},
$S:363}
B.dWh.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dj(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ic,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gw(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f5i,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dWd.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9S(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aS:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Gw(A.k.D(r.cx.gcl()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b0,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQm,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.eoS.prototype={
$0(){return B.qO(this.b,this.a.d,"size-compare")},
$S:0}
B.eoT.prototype={
$0(){var w=this.a
return w.m(new B.eoR(w,this.b))},
$S:0}
B.eoR.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eoU.prototype={
$0(){var w=this.a
return w.m(new B.eoQ(w,this.b))},
$S:0}
B.eoQ.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eWr.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hv(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pj,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1I,null).av(0,C.bU(d,e)))
u.ae(d,e,w)},
$S:739}
B.dDP.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dDD.prototype={
$1(d){return d.b},
$S:z+60}
B.dDE.prototype={
$0(){return B.qO(this.b,this.a.d,"black-hole")},
$S:0}
B.dDF.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aE(A.c4,C.b3(q,q,q,new B.b9g(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDB(p),q,q,q,q,q,q,q,q,q,new B.dDC(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.frx(t)+" Suns"
t=p.ae1("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.ae1("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gw(s))+" km"),p.ae1("TIME",A.k.aa(this.b*100,0)+"%"),p.ae1("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ebZ)
return new C.ev(new C.an(A.W,q,A.b0,A.r,r,q),p.d)},
$S:196}
B.dDC.prototype={
$1(d){return this.a.aYR(d.b)},
$S:23}
B.dDB.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYR(d.b)},
$S:18}
B.dDH.prototype={
$1(d){var w=this.a
return w.m(new B.dDA(w,d))},
$S:6}
B.dDA.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dDI.prototype={
$0(){var w=this.a
return w.m(new B.dDz(w))},
$S:0}
B.dDz.prototype={
$0(){return this.a.r=10},
$S:0}
B.dDJ.prototype={
$0(){var w=this.a
return w.m(new B.dDy(w))},
$S:0}
B.dDy.prototype={
$0(){return this.a.r=21},
$S:0}
B.dDK.prototype={
$0(){var w=this.a
return w.m(new B.dDx(w))},
$S:0}
B.dDx.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dDL.prototype={
$0(){var w=this.a
return w.m(new B.dDw(w))},
$S:0}
B.dDw.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dDM.prototype={
$0(){var w=this.a
return w.m(new B.dDv(w))},
$S:0}
B.dDv.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dDN.prototype={
$0(){var w=this.a
return w.m(new B.dDu(w))},
$S:0}
B.dDu.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dDO.prototype={
$0(){var w=this.a
return w.m(new B.dDt(w))},
$S:0}
B.dDt.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dDG.prototype={
$0(){var w=this.a
return w.m(new B.dDs(w))},
$S:0}
B.dDs.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dUO.prototype={
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
$S:1869}
B.dUE.prototype={
$0(){return B.qO(this.b,this.a.d,"galaxy")},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
return w.m(new B.dUD(w,this.b))},
$S:0}
B.dUD.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZC()},
$S:0}
B.dUG.prototype={
$0(){var w=this.a
return w.m(new B.dUC(w))},
$S:0}
B.dUC.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZC()}w.cu9()},
$S:0}
B.dUH.prototype={
$1(d){var w=this.a
return w.m(new B.dUB(w,d))},
$S:6}
B.dUB.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZC()},
$S:0}
B.dUI.prototype={
$1(d){var w=this.a
return w.m(new B.dUA(w,d))},
$S:6}
B.dUA.prototype={
$0(){var w=this.a
w.r=this.b
w.ZC()},
$S:0}
B.dUJ.prototype={
$1(d){var w=this.a
return w.m(new B.dUz(w,d))},
$S:6}
B.dUz.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dUK.prototype={
$1(d){var w=this.a
return w.m(new B.dUy(w,d))},
$S:6}
B.dUy.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dUL.prototype={
$0(){var w=this.a
return w.m(new B.dUx(w))},
$S:0}
B.dUx.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dUM.prototype={
$0(){var w=this.a
return w.m(new B.dUw(w))},
$S:0}
B.dUw.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dUN.prototype={
$0(){var w=this.a
return w.m(new B.dUv(w))},
$S:0}
B.dUv.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d9k.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1870}
B.eo6.prototype={
$0(){return B.qO(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eo7.prototype={
$0(){var w=this.a
return w.m(new B.eo5(w))},
$S:0}
B.eo5.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eo8.prototype={
$0(){var w=this.a
return w.m(new B.eo4(w))},
$S:0}
B.eo4.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eo9.prototype={
$0(){var w=this.a
return w.m(new B.eo3(w))},
$S:0}
B.eo3.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eoa.prototype={
$0(){var w=this.a
return w.m(new B.eo2(w))},
$S:0}
B.eo2.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eob.prototype={
$1(d){var w=this.a
return w.m(new B.eo1(w,d))},
$S:6}
B.eo1.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eoc.prototype={
$1(d){var w=this.a
return w.m(new B.eo0(w,d))},
$S:6}
B.eo0.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eod.prototype={
$1(d){var w=this.a
return w.m(new B.eo_(w,d))},
$S:6}
B.eo_.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eoe.prototype={
$1(d){var w=this.a
return w.m(new B.enZ(w,d))},
$S:6}
B.enZ.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLt.prototype
w.buw=w.q
w=B.aKv.prototype
w.btw=w.q
w=B.aKw.prototype
w.btx=w.q
w=B.aKB.prototype
w.btC=w.q
w=B.aMk.prototype
w.bvu=w.q
w=B.aLr.prototype
w.buu=w.q
w=B.aLA.prototype
w.buD=w.q
w=B.aLG.prototype
w.buJ=w.q
w=B.aKz.prototype
w.btA=w.q
w=B.aLo.prototype
w.bur=w.q
w=B.aLD.prototype
w.buG=w.q
w=B.aLm.prototype
w.bup=w.q
w=B.aLn.prototype
w.buq=w.q
w=B.aKN.prototype
w.btP=w.q
w=B.aKr.prototype
w.bts=w.q
w=B.aKV.prototype
w.btX=w.q
w=B.awY.prototype
w.bqE=w.q
w=B.awZ.prototype
w.bqF=w.q
w=B.aIY.prototype
w.brV=w.q
w=B.aKK.prototype
w.btL=w.q
w=B.aLb.prototype
w.bue=w.q
w=B.aLc.prototype
w.buf=w.q
w=B.aKx.prototype
w.bty=w.q
w=B.aKQ.prototype
w.btS=w.q
w=B.aLk.prototype
w.bun=w.q
w=B.aLO.prototype
w.buR=w.q
w=B.aKW.prototype
w.btZ=w.q
w=B.aKX.prototype
w.bu_=w.q
w=B.aKY.prototype
w.bu0=w.q
w=B.aLw.prototype
w.buz=w.q
w=B.aLz.prototype
w.buC=w.q
w=B.aKu.prototype
w.btv=w.q
w=B.aKT.prototype
w.btV=w.q
w=B.aLv.prototype
w.buy=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDC.prototype,"gavv","c2s",0)
var r
v(r=B.aC1.prototype,"gcaF","caG",35)
w(r,"gc2Y","aXg",0)
w(B.aC4.prototype,"gc4y","c4z",0)
u(B.aCl.prototype,"gc4E","c4F",52)
w(r=B.aGC.prototype,"gctQ","ctR",0)
w(r,"gchm","afr",0)
w(r,"gcf3","cf4",0)
w(r,"gc4D","ad1",3)
w(r=B.aDB.prototype,"gbFa","a8D",3)
w(r,"gcel","b_v",0)
w(r,"gci4","afz",3)
t(r,"gc4H","ad2",3)
w(B.aDR.prototype,"gbWn","bWo",0)
w(r=B.aDt.prototype,"gctK","ctL",0)
w(r,"gbFv","bFw",0)
w(r=B.aC3.prototype,"gb3J","az7",0)
v(r,"gc4N","Z_",54)
w(r,"gc4M","ad4",3)
v(r=B.aDs.prototype,"gck2","axQ",58)
v(r,"gcqk","az2",15)
w(r,"gbJv","aPW",0)
v(r=B.aDq.prototype,"gcAS","aiF",15)
t(r,"gc56","aw3",0)
w(r,"gcmn","cmo",0)
v(r=B.aCx.prototype,"gc57","c58",90)
w(r,"gc59","c5a",0)
t(r=B.a40.prototype,"grw","a9",0)
v(r,"gcQI","amr",1)
v(r,"gcNc","Lm",1)
w(r,"gcSU","bgE",0)
s(B.aif.prototype,"gc5e",0,5,null,["$5"],["qh"],64,0,0)
w(r=B.aCy.prototype,"gc5f","c5g",0)
w(r,"gckR","afW",3)
w(r,"gcaV","aee",3)
w(r,"gcrT","ah1",3)
w(r=B.aDc.prototype,"gc5w","aw8",0)
w(r,"gc5x","aY7",0)
w(r=B.aE3.prototype,"gc6u","c6v",0)
t(r,"gc6s","aYt",0)
w(B.aDm.prototype,"gbI2","arp",0)
t(B.aDI.prototype,"gc6w","c6x",0)
v(r=B.aCJ.prototype,"gc7b","c7c",78)
w(r,"gbMY","bMZ",0)
w(r=B.aCK.prototype,"gcuh","cui",0)
w(r,"gc7g","c7h",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajo,B.FM,B.uJ,B.aRm,B.a2E,B.b9j,B.c_J,B.xV,B.C3,B.ni,B.ba1,B.Al,B.brR,B.pZ,B.qG,B.C7,B.YP,B.aej,B.a03,B.Ch,B.abb,B.abs,B.ado,B.Fy,B.bkK,B.PA,B.a_l,B.abi,B.abL,B.Fu,B.acA,B.ad5,B.ta,B.b8U,B.aRc,B.eb,B.tn,B.a9R,B.aaY,B.a40,B.mx,B.ba2,B.fK,B.m3,B.aVO,B.btb,B.aHs,B.mA,B.aaD,B.aaE,B.uX,B.OQ,B.xT,B.OP,B.bt6,B.Pj,B.aeo])
u(C.hV,[B.ftH,B.fkd,B.fqF,B.fqG,B.ftE,B.ftF,B.e5f,B.e5y,B.elD,B.ela,B.elb,B.elc,B.eld,B.ele,B.elf,B.elg,B.elh,B.el8,B.el9,B.el7,B.ely,B.elz,B.elA,B.dDU,B.dDW,B.dDZ,B.dE9,B.c_K,B.c_L,B.fek,B.fel,B.fem,B.fet,B.feu,B.fev,B.dGr,B.dG8,B.dGs,B.dG3,B.dFZ,B.dG0,B.dG6,B.dGj,B.dGh,B.dGi,B.dGg,B.dGd,B.dGf,B.eVW,B.eVD,B.eVK,B.eVT,B.eVx,B.dg9,B.dga,B.dg6,B.dg7,B.dg8,B.dgb,B.dgc,B.dgd,B.dge,B.dgf,B.dgg,B.dgh,B.dgi,B.dgj,B.ekz,B.ekA,B.ekB,B.ekC,B.ekx,B.eky,B.el3,B.ekG,B.ekI,B.eks,B.el_,B.ekY,B.ekZ,B.ekX,B.ekW,B.eku,B.ewI,B.ewG,B.ewu,B.ewy,B.ewt,B.ewz,B.ewA,B.ewE,B.eDj,B.eDp,B.eha,B.ehb,B.egX,B.egY,B.egW,B.eh0,B.eh2,B.eh3,B.eCJ,B.eCK,B.eCI,B.eCw,B.eCx,B.eCv,B.eCo,B.eCp,B.eCD,B.eCE,B.eCF,B.eCG,B.eCH,B.dFA,B.dFB,B.dFC,B.dFt,B.dFw,B.cKF,B.ecE,B.ed2,B.ecI,B.ecQ,B.ecR,B.ecP,B.ecY,B.egE,B.egJ,B.eg2,B.efL,B.efX,B.efV,B.efT,B.efU,B.efS,B.dOj,B.dO7,B.dO9,B.dOh,B.dOc,B.dR8,B.dR0,B.dR1,B.dR2,B.d3n,B.d3p,B.d3o,B.dBY,B.dBZ,B.dBR,B.dBP,B.cDc,B.dVb,B.dVc,B.dV7,B.dV8,B.dbn,B.dbo,B.dFX,B.dFF,B.dFO,B.dFP,B.dFU,B.dFV,B.bLo,B.bLz,B.bLu,B.bLA,B.bLC,B.bLp,B.bLn,B.bLH,B.bLv,B.bLy,B.bLx,B.bLw,B.bGC,B.fFm,B.fFp,B.fFn,B.bGj,B.bGe,B.bGd,B.bGB,B.bGt,B.bGu,B.bGs,B.bGv,B.bG3,B.bG5,B.bG1,B.bG2,B.bFU,B.bFV,B.few,B.fex,B.fey,B.fej,B.fez,B.fei,B.feA,B.fen,B.feh,B.feo,B.feg,B.fep,B.fef,B.feq,B.fed,B.fee,B.fer,B.feb,B.fec,B.fes,B.fea,B.dRp,B.dRq,B.dRf,B.dRb,B.dRo,B.dRt,B.cAJ,B.fK0,B.fK1,B.e8d,B.e85,B.dgs,B.dgv,B.e8w,B.e8h,B.e8r,B.e8s,B.e8t,B.ceD,B.eHJ,B.dQM,B.dQN,B.dQO,B.dQQ,B.edX,B.eD1,B.eDa,B.eD6,B.eD8,B.ecv,B.ecw,B.ecx,B.fNQ,B.crv,B.dWc,B.dVC,B.dVB,B.dVN,B.dVO,B.dVM,B.dVP,B.dW6,B.dW7,B.dW8,B.eDS,B.ew5,B.ew6,B.ew7,B.ewc,B.ewd,B.evX,B.eYi,B.eYj,B.dWJ,B.dWC,B.dWE,B.dWF,B.dWG,B.dWH,B.dWe,B.eWr,B.dDP,B.dDD,B.dDC,B.dDB,B.dDH,B.dUO,B.dUH,B.dUI,B.dUJ,B.dUK,B.d9k,B.eob,B.eoc,B.eod,B.eoe])
u(C.kj,[B.ftG,B.e5k,B.e5i,B.elj,B.elw,B.dG_,B.dGm,B.dMh,B.eVZ,B.eW_,B.eVC,B.eVP,B.eVQ,B.eVL,B.eVR,B.eVw,B.ekv,B.ekw,B.el2,B.ekV,B.ekK,B.eDi,B.eh_,B.eCz,B.dFs,B.dFx,B.ecU,B.egI,B.ftY,B.efP,B.efM,B.efZ,B.dof,B.bFq,B.foE,B.dBL,B.dBT,B.bLB,B.bLD,B.bLF,B.bLq,B.bLs,B.bGD,B.ck1,B.fFo,B.bGc,B.bGz,B.bGy,B.dRn,B.cAK,B.dNb,B.dN9,B.dN3,B.e87,B.dgt,B.dgu,B.e8q,B.ceG,B.dEn,B.dEi,B.edZ,B.dVZ,B.dVz,B.dcd,B.eDX,B.ew9,B.evW,B.dWf,B.dWh,B.dWd,B.dDF])
u(C.ag,[B.V0,B.Vs,B.TT,B.TY,B.N0,B.aGB,B.Vr,B.VG,B.VS,B.Vo,B.VN,B.TW,B.Vi,B.Vn,B.Vl,B.Uj,B.Uz,B.TO,B.UN,B.TX,B.aid,B.UA,B.awF,B.Uh,B.V5,B.V7,B.VY,B.UH,B.TU,B.Uy,B.Vj,B.Vw,B.VR,B.Vh,B.UO,B.VU,B.VF,B.UP,B.Vx,B.TS,B.UL,B.Vt])
u(C.ah,[B.bjd,B.aLt,B.aKv,B.aKB,B.aCl,B.aMk,B.aLr,B.aLA,B.aLG,B.aLo,B.aLD,B.aKz,B.aLm,B.aLn,B.aDq,B.biI,B.aKN,B.aKr,B.aKV,B.biz,B.awY,B.bwh,B.aIY,B.aKK,B.aLb,B.aLc,B.aLO,B.aKQ,B.aKx,B.biJ,B.aDm,B.aDI,B.bjX,B.aLk,B.aKW,B.bk0,B.aLz,B.aKY,B.aLw,B.aKu,B.aKT,B.aLv])
u(C.j7,[B.e5d,B.e5e,B.e5q,B.e5r,B.e5m,B.e5l,B.e5n,B.e5j,B.e5o,B.e5h,B.e5p,B.e5g,B.e5u,B.e5t,B.e5v,B.e5s,B.e5w,B.e5x,B.e5z,B.elC,B.elE,B.elF,B.ell,B.elk,B.eli,B.elr,B.els,B.elo,B.elt,B.eln,B.elu,B.elv,B.elm,B.elx,B.elq,B.elB,B.elp,B.dEg,B.dEf,B.dDT,B.dEh,B.dDV,B.dDX,B.dDY,B.dE_,B.dDQ,B.dDR,B.dDS,B.dE6,B.dE7,B.dE8,B.dE5,B.dEa,B.dE4,B.dEb,B.dE3,B.dEc,B.dE2,B.dEd,B.dE1,B.dEe,B.dE0,B.dG5,B.dG4,B.dG9,B.dG1,B.dG2,B.dGa,B.dGb,B.dGc,B.dG7,B.dFY,B.dGl,B.dGk,B.dGn,B.dGo,B.dGp,B.dGe,B.dGq,B.cL7,B.dMf,B.dMe,B.dMg,B.feL,B.feM,B.feN,B.feY,B.ff_,B.ff0,B.ff1,B.ff2,B.ff3,B.ff4,B.ff5,B.feO,B.feP,B.feQ,B.feR,B.feS,B.feT,B.feU,B.feV,B.feW,B.feX,B.feZ,B.eVY,B.eVX,B.eVF,B.eVE,B.eVA,B.eVz,B.eVB,B.eVy,B.eVN,B.eVM,B.eVO,B.eVG,B.eVS,B.eVJ,B.eVU,B.eVI,B.eVV,B.eVH,B.ekE,B.ekt,B.ekD,B.ekp,B.ekF,B.ekH,B.ekq,B.ekr,B.el1,B.el0,B.ekS,B.ekT,B.ekU,B.ekO,B.ekP,B.ekN,B.ekQ,B.ekM,B.ekR,B.ekL,B.ekJ,B.dg5,B.ewH,B.ewj,B.ewi,B.ews,B.ewB,B.ewr,B.ewC,B.ewq,B.ewD,B.ewp,B.ewo,B.ewF,B.ewn,B.ewv,B.ewm,B.eww,B.ewl,B.ewx,B.ewk,B.eDh,B.eDg,B.eDk,B.eDf,B.eDl,B.eDe,B.eDm,B.eDd,B.eDn,B.eDc,B.eDo,B.eDb,B.egZ,B.egV,B.egU,B.egT,B.eh4,B.egS,B.eh5,B.egR,B.eh6,B.egQ,B.eh7,B.eh8,B.eh9,B.egP,B.eh1,B.eCy,B.eCn,B.eCA,B.eCu,B.eCB,B.eCt,B.eCC,B.eCs,B.eCr,B.eCq,B.eCm,B.eCl,B.eCk,B.dFz,B.dFq,B.dFr,B.dFu,B.dFv,B.dFy,B.ecS,B.ecJ,B.ecT,B.ecV,B.ecO,B.ecW,B.ecN,B.ecX,B.ecM,B.ecL,B.ecZ,B.ecK,B.ed_,B.ecH,B.ed0,B.ecG,B.ed1,B.ecF,B.egy,B.egz,B.egG,B.egF,B.egH,B.egD,B.egK,B.egC,B.egL,B.egB,B.egM,B.egN,B.egA,B.egO,B.eg1,B.efJ,B.efK,B.efO,B.efN,B.efY,B.efW,B.efQ,B.eg_,B.efR,B.eg0,B.dOi,B.dO8,B.dO6,B.dOd,B.dOb,B.dOe,B.dOa,B.dOf,B.dOg,B.dR7,B.dQW,B.dQV,B.dQX,B.dR_,B.dQZ,B.dQY,B.dR3,B.dR4,B.dR5,B.dR6,B.dBX,B.dBW,B.dBM,B.dBS,B.dBQ,B.dBU,B.dBO,B.dBV,B.dBN,B.dVa,B.dV9,B.dV1,B.dV5,B.dV4,B.dV6,B.dV3,B.dV2,B.dFW,B.dFN,B.dFM,B.dFQ,B.dFL,B.dFR,B.dFK,B.dFS,B.dFJ,B.dFT,B.dFI,B.dFH,B.dFG,B.bLE,B.bLG,B.bLr,B.bLt,B.bGg,B.bGh,B.bGf,B.bGi,B.bGk,B.bG6,B.bG7,B.bG8,B.bG9,B.bGa,B.bGb,B.bGA,B.bFK,B.bGq,B.bGr,B.bGo,B.bGp,B.bGm,B.bGn,B.bGw,B.bGl,B.bGx,B.bFL,B.bG4,B.bFR,B.bFS,B.bFQ,B.bFT,B.bFP,B.bFW,B.bFX,B.bFY,B.bFZ,B.bFO,B.bG_,B.bFN,B.bG0,B.bFM,B.dRg,B.dRr,B.dRs,B.dRe,B.dRd,B.dRc,B.dRl,B.dRj,B.dRk,B.dRm,B.dRh,B.dRi,B.dRu,B.dRv,B.dRw,B.dRx,B.dRy,B.dNc,B.dNa,B.dN8,B.dN7,B.dN6,B.dN5,B.dN4,B.dN0,B.dN_,B.dN2,B.dN1,B.e8c,B.e8e,B.e83,B.e84,B.e86,B.e88,B.e89,B.e8a,B.e8b,B.e8v,B.e8x,B.e8n,B.e8j,B.e8o,B.e8p,B.e8i,B.e8m,B.e8l,B.e8k,B.e8u,B.ffd,B.ffe,B.fff,B.ffg,B.ffh,B.ffi,B.ffj,B.ffk,B.ceF,B.ceE,B.eHK,B.eHG,B.eHF,B.eHI,B.eHH,B.dTu,B.dTv,B.dTp,B.dTr,B.dTs,B.dTq,B.dTt,B.dEo,B.dEl,B.dEk,B.dEm,B.dEj,B.dQL,B.dQK,B.dQJ,B.dQI,B.dQP,B.dQH,B.dQG,B.dQR,B.dQF,B.dQS,B.dQE,B.dQT,B.dQU,B.dQD,B.edT,B.edU,B.edS,B.edV,B.edR,B.edY,B.ee_,B.edW,B.ee0,B.eoK,B.eoL,B.eoI,B.eoJ,B.eoH,B.eoM,B.eoN,B.eoO,B.eoP,B.eD5,B.eD7,B.eD4,B.eD3,B.eD9,B.eD2,B.ecy,B.ecz,B.ecr,B.ecq,B.ecs,B.ecp,B.ect,B.eco,B.ecu,B.ecn,B.ecm,B.ecl,B.eck,B.crw,B.crx,B.fNP,B.crs,B.crr,B.cry,B.crt,B.cru,B.ceB,B.dWb,B.dVF,B.dVD,B.dVE,B.dVA,B.dVY,B.dVG,B.dVH,B.dW_,B.dVL,B.dW3,B.dVX,B.dW4,B.dVW,B.dW5,B.dVV,B.dVU,B.dVT,B.dVS,B.dW9,B.dVR,B.dWa,B.dVQ,B.dW0,B.dVK,B.dW1,B.dVJ,B.dW2,B.dVI,B.dVy,B.dVx,B.dcc,B.ff6,B.ff7,B.ff8,B.ff9,B.ffa,B.ffb,B.ffc,B.eDV,B.eDW,B.eDU,B.eDT,B.evY,B.ew8,B.ewa,B.ew4,B.ewb,B.ew3,B.ew2,B.ewe,B.ew1,B.ewf,B.ew0,B.ewg,B.ew_,B.ewh,B.evZ,B.evV,B.evU,B.eYh,B.dWg,B.dWv,B.dWm,B.dWw,B.dWl,B.dWx,B.dWu,B.dWB,B.dWt,B.dWs,B.dWD,B.dWr,B.dWq,B.dWp,B.dWo,B.dWI,B.dWn,B.dWy,B.dWk,B.dWz,B.dWj,B.dWA,B.dWi,B.eoS,B.eoT,B.eoR,B.eoU,B.eoQ,B.dDE,B.dDA,B.dDI,B.dDz,B.dDJ,B.dDy,B.dDK,B.dDx,B.dDL,B.dDw,B.dDM,B.dDv,B.dDN,B.dDu,B.dDO,B.dDt,B.dDG,B.dDs,B.dUE,B.dUF,B.dUD,B.dUG,B.dUC,B.dUB,B.dUA,B.dUz,B.dUy,B.dUL,B.dUx,B.dUM,B.dUw,B.dUN,B.dUv,B.eo6,B.eo7,B.eo5,B.eo8,B.eo4,B.eo9,B.eo3,B.eoa,B.eo2,B.eo1,B.eo0,B.eo_,B.enZ])
t(B.bww,B.aLt)
t(B.aDC,B.bww)
u(C.mK,[B.bgc,B.bak,B.brg,B.b90,B.bpV,B.bpm,B.b9G,B.bpo,B.btl,B.bga,B.brb,B.bkx,B.bs2,B.ba0,B.bh4,B.bky,B.bhM,B.bd5,B.b95,B.bez,B.aif,B.b8d,B.bum,B.aec,B.bgf,B.bgu,B.buy,B.bpn,B.bkL,B.beG,B.br9,B.b9S,B.bqI,B.b9g,B.bew,B.bpY])
t(B.aKw,B.aKv)
t(B.aC1,B.aKw)
t(B.bwf,B.aKB)
t(B.aC4,B.bwf)
u(C.m7,[B.K3,B.a_R,B.J0])
u(C.au,[B.bqi,B.aet,B.adk,B.PJ,B.bqM,B.a7R,B.bcr,B.b61,B.dA,B.eQ,B.av5,B.fi,B.EY])
t(B.aGC,B.aMk)
t(B.bg9,C.oJ)
t(B.aDB,B.aLr)
t(B.bjO,B.aLA)
t(B.aDR,B.aLG)
t(B.bwv,B.aLo)
t(B.aDt,B.bwv)
t(B.bwD,B.aLD)
t(B.bjT,B.bwD)
t(B.bwe,B.aKz)
t(B.aC3,B.bwe)
t(B.bwt,B.aLm)
t(B.bjs,B.bwt)
t(B.bwu,B.aLn)
t(B.aDs,B.bwu)
t(B.aCx,B.aKN)
t(B.bim,B.aKr)
t(B.biU,B.aKV)
t(B.awZ,B.awY)
t(B.aie,B.awZ)
t(B.aCy,B.bwh)
t(B.b8e,B.aIY)
t(B.biG,B.aKK)
t(B.bwm,B.aLb)
t(B.bjf,B.bwm)
t(B.bwn,B.aLc)
t(B.aDc,B.bwn)
t(B.bwE,B.aLO)
t(B.aE3,B.bwE)
t(B.bwi,B.aKQ)
t(B.biP,B.bwi)
t(B.bwd,B.aKx)
t(B.bir,B.bwd)
t(B.bws,B.aLk)
t(B.bjq,B.bws)
t(B.aKX,B.aKW)
t(B.aCJ,B.aKX)
t(B.bwA,B.aLz)
t(B.bjN,B.bwA)
t(B.bwk,B.aKY)
t(B.aCK,B.bwk)
t(B.bwy,B.aLw)
t(B.bjK,B.bwy)
t(B.bwc,B.aKu)
t(B.biq,B.bwc)
t(B.bwj,B.aKT)
t(B.biS,B.bwj)
t(B.bwx,B.aLv)
t(B.bjJ,B.bwx)
w(B.aLt,C.c9)
w(B.bww,B.mA)
w(B.aKv,C.c9)
w(B.aKw,B.mA)
w(B.aKB,C.c9)
w(B.bwf,B.mA)
w(B.aMk,C.eR)
w(B.aLr,C.c9)
w(B.aLA,C.c9)
w(B.aLG,C.c9)
w(B.aKz,C.c9)
w(B.bwe,B.mA)
w(B.aLo,C.c9)
w(B.bwv,B.mA)
w(B.aLD,C.c9)
w(B.bwD,B.mA)
w(B.aLm,C.c9)
w(B.bwt,B.mA)
w(B.aLn,C.c9)
w(B.bwu,B.mA)
w(B.aKN,C.c9)
w(B.aKr,C.c9)
w(B.aKV,C.c9)
w(B.awY,C.c9)
w(B.awZ,B.mA)
w(B.aIY,C.c9)
v(B.bwh,C.ez)
w(B.aKK,C.c9)
w(B.aLb,C.c9)
w(B.bwm,B.mA)
w(B.aLc,C.c9)
w(B.bwn,B.mA)
w(B.aKx,C.c9)
w(B.bwd,B.mA)
w(B.aKQ,C.c9)
w(B.bwi,B.mA)
w(B.aLk,C.c9)
w(B.bws,B.mA)
w(B.aLO,C.c9)
w(B.bwE,B.mA)
w(B.aKW,C.c9)
w(B.aKX,B.mA)
w(B.aKY,C.c9)
w(B.bwk,B.mA)
w(B.aLw,C.c9)
w(B.bwy,B.mA)
w(B.aLz,C.c9)
w(B.bwA,B.mA)
w(B.aKu,C.c9)
w(B.bwc,B.mA)
w(B.aKT,C.c9)
w(B.bwj,B.mA)
w(B.aLv,C.c9)
w(B.bwx,B.mA)})()
C.jW(b.typeUniverse,JSON.parse('{"V0":{"ag":[],"r":[]},"bjd":{"ah":["V0"]},"Vs":{"ag":[],"r":[]},"aDC":{"ah":["Vs"]},"bgc":{"aB":[]},"TT":{"ag":[],"r":[]},"aC1":{"ah":["TT"]},"TY":{"ag":[],"r":[]},"aC4":{"ah":["TY"]},"bak":{"aB":[]},"aet":{"au":[],"r":[]},"adk":{"au":[],"r":[]},"aGB":{"ag":[],"r":[]},"N0":{"ag":[],"r":[]},"aCl":{"ah":["N0"]},"bqi":{"au":[],"r":[]},"PJ":{"au":[],"r":[]},"brg":{"aB":[]},"bqM":{"au":[],"r":[]},"b90":{"aB":[]},"aGC":{"ah":["aGB"]},"bpV":{"aB":[]},"bpm":{"aB":[]},"b9G":{"aB":[]},"bpo":{"aB":[]},"btl":{"aB":[]},"Vr":{"ag":[],"r":[]},"bg9":{"aB":[]},"aDB":{"ah":["Vr"]},"bga":{"aB":[]},"VG":{"ag":[],"r":[]},"VS":{"ag":[],"r":[]},"bjO":{"ah":["VG"]},"brb":{"aB":[]},"aDR":{"ah":["VS"]},"Vo":{"ag":[],"r":[]},"VN":{"ag":[],"r":[]},"TW":{"ag":[],"r":[]},"aDt":{"ah":["Vo"]},"bkx":{"aB":[]},"bjT":{"ah":["VN"]},"bs2":{"aB":[]},"aC3":{"ah":["TW"]},"ba0":{"aB":[]},"Vi":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"bjs":{"ah":["Vi"]},"bh4":{"aB":[]},"aDs":{"ah":["Vn"]},"bky":{"aB":[]},"Vl":{"ag":[],"r":[]},"Uj":{"ag":[],"r":[]},"Uz":{"ag":[],"r":[]},"aDq":{"ah":["Vl"]},"bhM":{"aB":[]},"biI":{"ah":["Uj"]},"aCx":{"ah":["Uz"]},"bd5":{"aB":[]},"TO":{"ag":[],"r":[]},"UN":{"ag":[],"r":[]},"TX":{"ag":[],"r":[]},"bim":{"ah":["TO"]},"b95":{"aB":[]},"biU":{"ah":["UN"]},"bez":{"aB":[]},"biz":{"ah":["TX"]},"aif":{"aB":[]},"aid":{"ag":[],"r":[]},"aie":{"ah":["aid"]},"UA":{"ag":[],"r":[]},"awF":{"ag":[],"r":[]},"aCy":{"ah":["UA"],"ez":[]},"b8e":{"ah":["awF"]},"b8d":{"aB":[]},"Uh":{"ag":[],"r":[]},"biG":{"ah":["Uh"]},"bum":{"aB":[]},"aec":{"aB":[]},"V5":{"ag":[],"r":[]},"V7":{"ag":[],"r":[]},"bjf":{"ah":["V5"]},"bgf":{"aB":[]},"aDc":{"ah":["V7"]},"bgu":{"aB":[]},"a7R":{"au":[],"r":[]},"VY":{"ag":[],"r":[]},"UH":{"ag":[],"r":[]},"TU":{"ag":[],"r":[]},"Uy":{"ag":[],"r":[]},"Vj":{"ag":[],"r":[]},"Vw":{"ag":[],"r":[]},"VR":{"ag":[],"r":[]},"Vh":{"ag":[],"r":[]},"aE3":{"ah":["VY"]},"buy":{"aB":[]},"biP":{"ah":["UH"]},"bpn":{"aB":[]},"bir":{"ah":["TU"]},"biJ":{"ah":["Uy"]},"bkL":{"aB":[]},"aDm":{"ah":["Vj"]},"aDI":{"ah":["Vw"]},"bjX":{"ah":["VR"]},"bjq":{"ah":["Vh"]},"bcr":{"au":[],"r":[]},"b61":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"av5":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"EY":{"au":[],"r":[]},"UO":{"ag":[],"r":[]},"aCJ":{"ah":["UO"]},"beG":{"aB":[]},"VU":{"ag":[],"r":[]},"bk0":{"ah":["VU"]},"VF":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"Vx":{"ag":[],"r":[]},"bjN":{"ah":["VF"]},"br9":{"aB":[]},"aCK":{"ah":["UP"]},"b9S":{"aB":[]},"bjK":{"ah":["Vx"]},"bqI":{"aB":[]},"TS":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"Vt":{"ag":[],"r":[]},"biq":{"ah":["TS"]},"b9g":{"aB":[]},"biS":{"ah":["UL"]},"bew":{"aB":[]},"bjJ":{"ah":["Vt"]},"bpY":{"aB":[]}}'))
C.K4(b.typeUniverse,JSON.parse('{"mA":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lT<w?>"),e8:w("d4"),G:w("w"),l:w("bk<n,n>"),J:w("bk<n,M>"),I:w("bk<n,H>"),R:w("eM<n>"),Z:w("a_"),M:w("O<da>"),f5:w("O<a2A>"),gh:w("O<aRc>"),h:w("O<a2E>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hl>"),aJ:w("O<az<aC>>"),w:w("O<a_>"),Q:w("O<ai<w>>"),B:w("O<ai<Hl>>"),gO:w("O<ai<ai<M>>>"),bj:w("O<ai<n>>"),b:w("O<ai<M>>"),fA:w("O<ai<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<tn>"),ds:w("O<a8d>"),v:w("O<ho>"),U:w("O<+(u,M)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(M,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,M,M,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,M,M,a4<n,M>)>"),_:w("O<uJ>"),q:w("O<cR>"),fQ:w("O<a9R>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<w6>"),F:w("O<aaD>"),p:w("O<r>"),bL:w("O<aaY>"),fH:w("O<lh>"),aq:w("O<b8U>"),a_:w("O<abb>"),cS:w("O<abi>"),cB:w("O<ni>"),ba:w("O<abs>"),d9:w("O<Pj>"),bi:w("O<abL>"),eW:w("O<C7>"),fY:w("O<YP>"),aX:w("O<Fu>"),ea:w("O<acA>"),gB:w("O<ad5>"),ed:w("O<PA>"),g4:w("O<bkK>"),aS:w("O<a_l>"),ac:w("O<ado>"),cd:w("O<Ch>"),fr:w("O<aej>"),e4:w("O<a03>"),r:w("O<aeo>"),au:w("O<aHs>"),f7:w("O<R>"),n:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<tn?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<aie>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<eb,n>"),dv:w("K<n,n>"),fR:w("K<+(M,r),r>"),m:w("iA"),gA:w("z0"),gD:w("vH"),P:w("cq"),C:w("aC"),W:w("tn"),dV:w("eb"),g7:w("BQ"),N:w("n"),bO:w("as"),k:w("kf"),Y:w("bo<M>"),cL:w("aaE"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e8<qG>"),e3:w("b9j"),a2:w("C3"),f3:w("qG"),es:w("Fy"),gV:w("mY"),y:w("R"),i:w("M"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pS?"),T:w("n?"),cD:w("M?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVZ=new C.da(0,0.85)
D.fvR=new C.x("Tap once to start the chain",null,K.Tp,null,null,null,null,null,null,null,null,null)
D.aVx=new C.bI(D.aVZ,null,null,D.fvR,null)
D.aVP=new C.da(0,0.1)
D.aWT=new B.aRm(0,0,0)
D.JW=new B.aRm(0,0.5,0)
D.aXp=new C.ay(A.b2,1,A.q,-1)
D.aYU=new C.aY(0,1/0,0,290)
D.aZ0=new C.aY(16,1/0,16,1/0)
D.eY6=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyb=new C.x("\u26a1",null,D.eY6,null,null,null,null,null,null,null,null,null)
D.b3C=new C.cr(A.A,null,null,D.fyb,null)
D.aPF=new C.G(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fod=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPF,null,A.L,null,null,null,null,null,null,null)
D.e5H=new C.D(A.nX,D.fod,null)
D.b3L=new C.cr(A.A,null,null,D.e5H,null)
D.frU=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kC,null,A.L,null,null,null,null,null,null,null)
D.e5L=new C.D(A.nX,D.frU,null)
D.b45=new C.cr(A.A,null,null,D.e5L,null)
D.f7T=new C.G(!0,A.jc,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new C.x("Draw anywhere",null,D.f7T,null,null,null,null,null,null,null,null,null)
D.b49=new C.cr(A.A,null,null,D.fwB,null)
D.fey=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPF,null,A.L,null,null,null,null,null,null,null)
D.e6s=new C.D(A.Fg,D.fey,null)
D.b4s=new C.cr(A.A,null,null,D.e6s,null)
D.abv=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b74=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b7S=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VI=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b7X=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b81=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b86=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.VK=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b99=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b9e=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b9y=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.baE=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acR=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bb5=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.As=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bbS=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adh=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bct=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bcA=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.ads=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Wn=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bd4=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adB=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.adO=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Wx=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.beP=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.beS=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.beW=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bf4=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aef=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bfs=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EA=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bgz=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bgH=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bgK=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bgV=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bgY=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bh4=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.v7=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.af4=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bi9=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.biT=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bjl=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bjL=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afv=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bo8=new C.b9(11e6)
D.bp9=new C.Q(0,0,8,6)
D.agt=new C.Q(0,0,9,0)
D.bpH=new C.Q(10,0,10,4)
D.bpM=new C.Q(10,10,10,6)
D.bpU=new C.Q(10,34,10,26)
D.bq1=new C.Q(10,6,10,2)
D.XZ=new C.Q(10,6,10,4)
D.bq3=new C.Q(10,8,0,10)
D.bqE=new C.Q(12,8,8,8)
D.bqJ=new C.Q(14,0,14,22)
D.bqL=new C.Q(14,0,14,30)
D.agU=new C.Q(14,0,14,6)
D.ah0=new C.Q(14,10,8,12)
D.brg=new C.Q(14,8,14,6)
D.brI=new C.Q(16,4,16,28)
D.brS=new C.Q(16,8,16,12)
D.btW=new C.Q(26,12,26,58)
D.buJ=new C.Q(4,4,6,2)
D.buL=new C.Q(4,4,8,2)
D.bvm=new C.Q(8,14,8,12)
D.bvt=new C.Q(8,40,8,30)
D.bvx=new C.Q(8,6,16,0)
D.bvy=new C.Q(8,6,8,8)
D.bvS=new C.Q(0,0,1.5,0)
D.aWF=new C.GJ(26,"saturation")
D.bw9=new C.yI(A.cU,D.aWF,null,A.abt)
D.fdC=new C.x("REACTION LAB",null,Y.aQg,null,null,null,null,A.a2,null,1,null,null)
D.bwf=new C.bD(1,A.bh,D.fdC,null)
D.f4N=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgK=new C.x("CORE PROTOCOL",null,D.f4N,null,null,null,null,null,null,null,null,null)
D.bws=new C.bD(1,A.bh,D.fgK,null)
D.fhr=new C.x("\ud83d\udce2 NGMY Ads",null,A.qm,null,null,null,null,A.eD,null,1,null,null)
D.bx8=new C.bD(1,A.bh,D.fhr,null)
D.fcl=new C.x("Wire selected",null,A.hs,null,null,null,null,null,null,null,null,null)
D.bxm=new C.bD(1,A.bh,D.fcl,null)
D.ak8=new C.a_(62712,"MaterialIcons",!1)
D.bCb=new C.a_(62878,"MaterialIcons",!1)
D.a_h=new C.a_(62908,"MaterialIcons",!1)
D.bCe=new C.a_(62918,"MaterialIcons",!1)
D.bCf=new C.a_(62931,"MaterialIcons",!1)
D.bCi=new C.a_(62951,"MaterialIcons",!1)
D.bCz=new C.a_(63064,"MaterialIcons",!1)
D.bCB=new C.a_(63070,"MaterialIcons",!1)
D.y2=new C.a_(63128,"MaterialIcons",!1)
D.G_=new C.a_(63726,"MaterialIcons",!1)
D.bDU=new C.a_(983122,"MaterialIcons",!1)
D.bE8=new C.a_(983247,"MaterialIcons",!1)
D.bEk=new C.a_(983415,"MaterialIcons",!1)
D.bEl=new C.a_(983417,"MaterialIcons",!1)
D.bEm=new C.a_(983442,"MaterialIcons",!1)
D.bEn=new C.a_(983443,"MaterialIcons",!1)
D.alr=new C.a_(983467,"MaterialIcons",!1)
D.bEt=new C.a_(983501,"MaterialIcons",!1)
D.bEE=new C.a_(983616,"MaterialIcons",!1)
D.bEF=new C.a_(983624,"MaterialIcons",!1)
D.bES=new C.a_(983776,"MaterialIcons",!1)
D.bF8=new C.a_(984561,"MaterialIcons",!1)
D.bFK=new C.ae(A.r6,24,A.aM,null,null,null)
D.bGt=new C.ae(A.Ns,null,A.ad,null,null,null)
D.bH0=new C.ae(A.mu,21,A.ad,null,null,null)
D.bDT=new C.a_(983117,"MaterialIcons",!1)
D.bIn=new C.ae(D.bDT,28,A.c,null,null,null)
D.bID=new C.ae(A.jh,18,null,null,null,null)
D.bKn=new C.ae(A.e6,21,A.cf,null,null,null)
D.bKC=new C.ae(A.mv,null,A.ad,null,null,null)
D.bKM=new C.ae(A.a0b,21,A.ad,null,null,null)
D.bLB=new C.ae(A.eC,17,A.ad,null,null,null)
D.amP=new C.ae(A.eC,19,null,null,null,null)
D.mz=new C.ae(A.vC,21,A.ad,null,null,null)
D.bN4=new C.ae(A.MU,null,A.ad,null,null,null)
D.bOe=new C.ae(A.jh,21,A.ad,null,null,null)
D.bP5=new C.ae(A.fd,20,A.az,null,null,null)
D.bPM=new C.ae(A.dW,null,A.aM,null,null,null)
D.bQ6=new C.ae(A.jZ,null,A.az,null,null,null)
D.daL=w([A.di,A.d3,A.di],x.O)
D.bSS=new C.a8(A.a3,A.a7,A.x,D.daL,null,null)
D.cQ0=w([A.bP,A.bn],x.O)
D.bT_=new C.a8(A.b_,A.b5,A.x,D.cQ0,null,null)
D.bTa=new C.a8(A.b_,A.b5,A.x,A.awV,null,null)
D.cQm=w([A.fT,A.f5],x.O)
D.bTj=new C.a8(A.b_,A.b5,A.x,D.cQm,null,null)
D.anQ=new C.a8(A.b_,A.b5,A.x,M.a1S,null,null)
D.cNL=w([A.or,A.i8],x.O)
D.bTX=new C.a8(A.b_,A.b5,A.x,D.cNL,null,null)
D.cPJ=w([A.ep,A.aA],x.O)
D.anX=new C.a8(A.b_,A.b5,A.x,D.cPJ,null,null)
D.d5h=w([A.dA,A.iQ,A.bn],x.O)
D.bUe=new C.a8(A.a3,A.a7,A.x,D.d5h,null,null)
D.d5n=w([A.ju,A.cB],x.O)
D.bUy=new C.a8(A.b_,A.b5,A.x,D.d5n,null,null)
D.cmG=w([A.bP,A.dA],x.O)
D.bUH=new C.a8(A.a3,A.a7,A.x,D.cmG,null,null)
D.axB=w([A.ep,L.n_],x.O)
D.bUO=new C.a8(A.b_,A.b5,A.x,D.axB,null,null)
D.bV5=new C.a8(A.b_,A.b5,A.x,I.aoi,null,null)
D.bdb=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b6t=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cLa=w([D.bdb,D.b6t],x.O)
D.bVi=new C.a8(A.b_,A.b5,A.x,D.cLa,null,null)
D.bVT=new C.a8(A.ax,A.aC,A.x,A.a1P,null,null)
D.bhC=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dg7=w([D.bhC,A.Kr],x.O)
D.bW_=new C.a8(A.b_,A.b5,A.x,D.dg7,null,null)
D.cYH=w([A.aA,A.w],x.O)
D.bW4=new C.a8(A.b_,A.b5,A.x,D.cYH,null,null)
D.bW7=new C.a8(A.b_,A.b5,A.x,S.awZ,null,null)
D.bh1=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bhL=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.czh=w([A.Lb,D.bh1,D.bhL],x.O)
D.bWh=new C.a8(A.b_,A.b5,A.x,D.czh,null,null)
D.cn_=w([A.d8,A.fy],x.O)
D.bWy=new C.a8(A.b_,A.b5,A.x,D.cn_,null,null)
D.bWE=new C.a8(A.ax,A.aC,A.x,A.a2C,null,null)
D.aok=w([0,2,4,6,7,9,11],x.t)
D.bXf=w([0,4,7],x.t)
D.aop=w([0,4,7,12],x.t)
D.bXg=w([0,4,7,4],x.t)
D.awG=w([A.h2,A.pD],x.O)
D.awc=w([A.hw,A.cY],x.O)
D.auE=w([A.bt,A.dQ],x.O)
D.cHM=w([A.aM,A.d8],x.O)
D.cO6=w([A.cf,A.eO],x.O)
D.d6t=w([A.bZ,A.lD],x.O)
D.au8=w([A.cs,A.jS],x.O)
D.cMI=w([A.bJ,A.aK],x.O)
D.bXA=w([D.awG,D.awc,A.a1W,D.auE,D.cHM,D.cO6,A.avL,D.d6t,D.au8,D.cMI],x.Q)
D.c1e=w([120,220,380],x.t)
D.c4Z=w([12,16,19,24],x.t)
D.c57=w([1400,800,450,2400],x.t)
D.c9m=w([0,0.6,1],x.n)
D.cdv=w([250,450,900,1500],x.t)
D.b7h=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bhn=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bfu=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bkw=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.beF=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.ato=w([D.b7h,D.bhn,D.bfu,D.bkw,D.beF],x.O)
D.ez8=new C.y("type","Typewriter")
D.es4=new C.y("bounce","Bounce")
D.ezW=new C.y("wave","Wave")
D.eB_=new C.y("zoom","Zoom")
D.cu6=w([D.ez8,D.es4,D.ezW,A.a5J,I.aLC,D.eB_,I.aLE],x.K)
D.cui=w([50,25,75],x.t)
D.czN=w([0,5,10,15,18,20,25],x.t)
D.etI=new C.y("fish","Fish")
D.etK=new C.y("fly","Fireflies")
D.es2=new C.y("bird","Birds")
D.cDY=w([D.etI,D.etK,D.es2],x.K)
D.cI1=w([900,500,250,1600],x.t)
D.cLz=w([0.78,1],x.n)
D.auF=w([0,2,4,7,9,12,14,16],x.t)
D.cM6=w([A.bt,A.bA,A.b8,A.bt],x.O)
D.auK=w(["A","T","C","G"],x.s)
D.cM7=w(["A","U","C","G"],x.s)
D.a1M=w([A.ay,A.cd,A.bo,A.aS,A.nN],x.O)
D.cNq=w([A.aA,A.ay,A.cs,A.cd,A.bo,A.cy,A.ce,A.bA,A.Kr],x.O)
D.a1Q=w([0.04,0.17,0.3],x.n)
D.cO2=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GM=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eIV=new B.uJ("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eJ0=new B.uJ("Medium engine","A good all-rounder.",0.3,0.9)
D.eJ_=new B.uJ("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GN=w([D.eIV,D.eJ0,D.eJ_],x._)
D.ei6=new C.y(6,"Easy")
D.eiG=new C.y(8,"Medium")
D.eee=new C.y(10,"Hard")
D.cOU=w([D.ei6,D.eiG,D.eee],x.E)
D.av3=w([0.55,0.78,1],x.n)
D.cQr=w([0.93,0.975,1],x.n)
D.ave=w([A.c,A.h3,A.os,A.aA],x.O)
D.fB9=new B.xT("Moon",1737,4291941851)
D.fB6=new B.xT("Earth",6371,4281908728)
D.fBa=new B.xT("Neptune",24622,4284524026)
D.fBb=new B.xT("Saturn",58232,4294829706)
D.fB7=new B.xT("Jupiter",69911,4294677052)
D.fBc=new B.xT("Sun",696340,4294688548)
D.fBd=new B.xT("Sirius A",119e4,4290763774)
D.fB4=new B.xT("Arcturus",179e5,4294818420)
D.fB5=new B.xT("Betelgeuse",531e6,4294472049)
D.fB8=new B.xT("UY Scuti",667e6,4293870660)
D.PD=w([D.fB9,D.fB6,D.fBa,D.fBb,D.fB7,D.fBc,D.fBd,D.fB4,D.fB5,D.fB8],C.ax("O<xT>"))
D.eEr=new C.br("glow","Glow",A.a_j)
D.eC2=new C.br("rainbow","Rainbow",A.nf)
D.eCp=new C.br("stars","Stars",A.i1)
D.eBN=new C.br("sparks","Sparks",A.dW)
D.eDI=new C.br("fire","Fire",A.vD)
D.cSf=w([D.eEr,D.eC2,D.eCp,D.eBN,D.eDI],x.c)
D.avi=w([A.bo,A.ay,A.cd,A.d3],x.O)
D.cTf=w([0.2,1],x.n)
D.eIS=new B.uJ("Radar","Shows your height above the ground.",0.1,0)
D.eIT=new B.uJ("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eIQ=new B.uJ("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avq=w([D.eIS,D.eIT,D.eIQ],x._)
D.eCZ=new C.br("attract","Attract",A.yj)
D.eCL=new C.br("scare","Scare",A.r4)
D.eBW=new C.br("food","Food",A.tX)
D.bDZ=new C.a_(983158,"MaterialIcons",!1)
D.eDh=new C.br("hunt","Hunt",D.bDZ)
D.cTS=w([D.eCZ,D.eCL,D.eBW,D.eDh],x.c)
D.cUg=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cUv=w([47,100,220,470,1000],x.n)
D.avI=w([0,2,4,7,9],x.t)
D.HQ={volts:0}
D.a3x=new C.bk(D.HQ,[3],x.J)
D.Ib=new C.e7(["b","battery",0.2,0.3,D.a3x])
D.e13={on:0}
D.dkN=new C.bk(D.e13,[1],x.J)
D.CZ=new C.e7(["s","switch",0.5,0.3,D.dkN])
D.eH0=new C.e7(["l","bulb",0.8,0.3,A.iZ])
D.cQ7=w([D.Ib,D.CZ,D.eH0],x.d)
D.CY=new C.cD(["b",0,"s",0])
D.eG1=new C.cD(["s",1,"l",0])
D.aLI=new C.cD(["l",1,"b",1])
D.d5s=w([D.CY,D.eG1,D.aLI],x.o)
D.cPB=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.edx=new B.mx("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cQ7,D.d5s,D.cPB)
D.aFP={ohms:0}
D.aDo=new C.bk(D.aFP,[220],x.J)
D.eGu=new C.e7(["r","resistor",0.5,0.3,D.aDo])
D.eHf=new C.e7(["d","led",0.8,0.3,A.iZ])
D.d8q=w([D.Ib,D.eGu,D.eHf],x.d)
D.eFn=new C.cD(["b",0,"r",0])
D.eFW=new C.cD(["r",1,"d",0])
D.eFt=new C.cD(["d",1,"b",1])
D.dgB=w([D.eFn,D.eFW,D.eFt],x.o)
D.d8Q=w(["led","diode","indicator"],x.s)
D.edE=new B.mx("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d8q,D.dgB,D.d8Q)
D.a4O={level:0}
D.dka=new C.bk(D.a4O,[0.2],x.J)
D.eGA=new C.e7(["p","pot",0.5,0.3,D.dka])
D.eGC=new C.e7(["m","motor",0.8,0.3,A.iZ])
D.cQp=w([D.Ib,D.eGA,D.eGC],x.d)
D.eFm=new C.cD(["b",0,"p",0])
D.eFS=new C.cD(["p",1,"m",0])
D.eFO=new C.cD(["m",1,"b",1])
D.dcE=w([D.eFm,D.eFS,D.eFO],x.o)
D.d5b=w(["fan","motor","spin","dimmer"],x.s)
D.edv=new B.mx("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cQp,D.dcE,D.d5b)
D.a3u=new C.bk(D.a4O,[0.9],x.J)
D.aLP=new C.e7(["s","solar",0.25,0.3,D.a3u])
D.aLO=new C.e7(["l","bulb",0.75,0.3,A.iZ])
D.cSX=w([D.aLP,D.aLO],x.d)
D.eFZ=new C.cD(["s",0,"l",0])
D.eFN=new C.cD(["l",1,"s",1])
D.cR8=w([D.eFZ,D.eFN],x.o)
D.ddc=w(["solar","sun","without battery","no battery","free"],x.s)
D.edy=new B.mx("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cSX,D.cR8,D.ddc)
D.eHi=new C.e7(["c","crank",0.25,0.3,D.a3u])
D.d3A=w([D.eHi,D.aLO],x.d)
D.eFq=new C.cD(["c",0,"l",0])
D.eFM=new C.cD(["l",1,"c",1])
D.d47=w([D.eFq,D.eFM],x.o)
D.d3J=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.edu=new B.mx("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d3A,D.d47,D.d3J)
D.dk9=new C.bk(D.a4O,[0.7],x.J)
D.eGF=new C.e7(["t","turbine",0.25,0.3,D.dk9])
D.eGs=new C.e7(["m","motor",0.75,0.3,A.iZ])
D.cZj=w([D.eGF,D.eGs],x.d)
D.eG9=new C.cD(["t",0,"m",0])
D.eFP=new C.cD(["m",1,"t",1])
D.cYl=w([D.eG9,D.eFP],x.o)
D.d2u=w(["wind","turbine","windmill","water","hydro"],x.s)
D.edr=new B.mx("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cZj,D.cYl,D.d2u)
D.aDl=new C.bk(D.HQ,[9],x.J)
D.a5M=new C.e7(["b","battery",0.2,0.3,D.aDl])
D.aLN=new C.e7(["r","radio",0.8,0.3,A.iZ])
D.ddN=w([D.a5M,D.CZ,D.aLN],x.d)
D.eG3=new C.cD(["s",1,"r",0])
D.aLJ=new C.cD(["r",1,"b",1])
D.bWY=w([D.CY,D.eG3,D.aLJ],x.o)
D.dcr=w(["radio","music","listen"],x.s)
D.edD=new B.mx("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.ddN,D.bWY,D.dcr)
D.dle=new C.bk(D.HQ,[12],x.J)
D.aLM=new C.e7(["b","battery",0.2,0.3,D.dle])
D.eH1=new C.e7(["t","tv",0.8,0.3,A.iZ])
D.cQ8=w([D.aLM,D.CZ,D.eH1],x.d)
D.eG4=new C.cD(["s",1,"t",0])
D.aLK=new C.cD(["t",1,"b",1])
D.d6w=w([D.CY,D.eG4,D.aLK],x.o)
D.ddL=w(["tv","television","screen","watch"],x.s)
D.edo=new B.mx("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cQ8,D.d6w,D.ddL)
D.eGS=new C.e7(["z","buzzer",0.8,0.3,A.iZ])
D.cwC=w([D.Ib,D.CZ,D.eGS],x.d)
D.eG5=new C.cD(["s",1,"z",0])
D.eGn=new C.cD(["z",1,"b",1])
D.cLl=w([D.CY,D.eG5,D.eGn],x.o)
D.daQ=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.edA=new B.mx("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cwC,D.cLl,D.daQ)
D.eGB=new C.e7(["h","heater",0.8,0.3,A.iZ])
D.d1c=w([D.a5M,D.CZ,D.eGB],x.d)
D.eG0=new C.cD(["s",1,"h",0])
D.eFB=new C.cD(["h",1,"b",1])
D.cM2=w([D.CY,D.eG0,D.eFB],x.o)
D.cgM=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.edp=new B.mx("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d1c,D.cM2,D.cgM)
D.eH3=new C.e7(["s","solar",0.2,0.25,D.a3u])
D.dlj=new C.bk(D.aFP,[100],x.J)
D.eH6=new C.e7(["r","resistor",0.55,0.25,D.dlj])
D.eHd=new C.e7(["c","capacitor",0.85,0.25,A.iZ])
D.eGx=new C.e7(["q","resistor",0.55,0.6,D.aDo])
D.eH4=new C.e7(["d","led",0.85,0.6,A.iZ])
D.d68=w([D.eH3,D.eH6,D.eHd,D.eGx,D.eH4],x.d)
D.eG_=new C.cD(["s",0,"r",0])
D.eFV=new C.cD(["r",1,"c",0])
D.eFs=new C.cD(["c",1,"s",1])
D.eFr=new C.cD(["c",0,"q",0])
D.eFU=new C.cD(["q",1,"d",0])
D.eFu=new C.cD(["d",1,"c",1])
D.cWm=w([D.eG_,D.eFV,D.eFs,D.eFr,D.eFU,D.eFu],x.o)
D.d2Y=w(["capacitor","store","charge","flash"],x.s)
D.edC=new B.mx("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d68,D.cWm,D.d2Y)
D.eGI=new C.e7(["b","battery",0.15,0.3,D.a3x])
D.eHj=new C.e7(["l1","bulb",0.5,0.3,A.iZ])
D.eGP=new C.e7(["l2","bulb",0.85,0.3,A.iZ])
D.cOl=w([D.eGI,D.eHj,D.eGP],x.d)
D.eFl=new C.cD(["b",0,"l1",0])
D.eFJ=new C.cD(["l1",1,"l2",0])
D.eFK=new C.cD(["l2",1,"b",1])
D.cZZ=w([D.eFl,D.eFJ,D.eFK],x.o)
D.ddv=w(["series","two bulbs","dim"],x.s)
D.eds=new B.mx("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cOl,D.cZZ,D.ddv)
D.e1g={volts:0,charge:1}
D.dlo=new C.bk(D.e1g,[1.5,0],x.J)
D.eHb=new C.e7(["b","battery",0.75,0.3,D.dlo])
D.cNM=w([D.aLP,D.eHb],x.d)
D.eFY=new C.cD(["s",0,"b",0])
D.eFp=new C.cD(["b",1,"s",1])
D.cWD=w([D.eFY,D.eFp],x.o)
D.d35=w(["charge","rechargeable","flat","recharge"],x.s)
D.edq=new B.mx("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cNM,D.cWD,D.d35)
D.dld=new C.bk(D.HQ,[4.5],x.J)
D.eGD=new C.e7(["b","battery",0.2,0.3,D.dld])
D.aLL=new C.e7(["p","phone",0.8,0.3,A.iZ])
D.cZ9=w([D.eGD,D.CZ,D.aLL],x.d)
D.eG2=new C.cD(["s",1,"p",0])
D.a5L=new C.cD(["p",1,"b",1])
D.d9Q=w([D.CY,D.eG2,D.a5L],x.o)
D.dbe=w(["phone","charger","usb","mobile"],x.s)
D.edw=new B.mx("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cZ9,D.d9Q,D.dbe)
D.eGp=new C.e7(["f","fan",0.8,0.3,A.iZ])
D.c8W=w([D.Ib,D.eGp],x.d)
D.eFk=new C.cD(["b",0,"f",0])
D.eFz=new C.cD(["f",1,"b",1])
D.cMw=w([D.eFk,D.eFz],x.o)
D.d5a=w(["fan","cool","air","wind"],x.s)
D.edF=new B.mx("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c8W,D.cMw,D.d5a)
D.eGW=new C.e7(["b","battery",0.15,0.2,D.a3x])
D.eGq=new C.e7(["a","ammeter",0.5,0.2,A.iZ])
D.eGo=new C.e7(["l","bulb",0.85,0.2,A.iZ])
D.eGY=new C.e7(["v","voltmeter",0.5,0.6,A.iZ])
D.d3o=w([D.eGW,D.eGq,D.eGo,D.eGY],x.d)
D.eFi=new C.cD(["b",0,"a",0])
D.eFh=new C.cD(["a",1,"l",0])
D.eGb=new C.cD(["v",0,"l",0])
D.eGc=new C.cD(["v",1,"l",1])
D.cWu=w([D.eFi,D.eFh,D.aLI,D.eGb,D.eGc],x.o)
D.dgA=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.edB=new B.mx("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d3o,D.cWu,D.dgA)
D.eHm=new C.e7(["b","battery",0.15,0.2,D.aDl])
D.eGH=new C.e7(["t","tv",0.55,0.2,A.iZ])
D.aDm=new C.bk(D.HQ,[5],x.J)
D.eGv=new C.e7(["c","buck",0.4,0.5,D.aDm])
D.eGJ=new C.e7(["p","phone",0.8,0.5,A.iZ])
D.cUi=w([D.eHm,D.eGH,D.eGv,D.eGJ],x.d)
D.eFo=new C.cD(["b",0,"t",0])
D.aLG=new C.cD(["b",0,"c",0])
D.aLH=new C.cD(["c",1,"p",0])
D.cZ6=w([D.eFo,D.aLK,D.aLG,D.aLH,D.a5L],x.o)
D.cSw=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.edt=new B.mx("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cUi,D.cZ6,D.cSw)
D.eGw=new C.e7(["c","buck",0.5,0.3,D.aDm])
D.cLU=w([D.aLM,D.eGw,D.aLL],x.d)
D.cQy=w([D.aLG,D.aLH,D.a5L],x.o)
D.ck9=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.edn=new B.mx("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cLU,D.cQy,D.ck9)
D.eGN=new C.e7(["d","diode",0.5,0.3,A.iZ])
D.d_b=w([D.a5M,D.eGN,D.aLN],x.d)
D.eFj=new C.cD(["b",0,"d",0])
D.eFv=new C.cD(["d",1,"r",0])
D.cz7=w([D.eFj,D.eFv,D.aLJ],x.o)
D.cSc=w(["diode","protect","backwards","one way"],x.s)
D.edz=new B.mx("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d_b,D.cz7,D.cSc)
D.PG=w([D.edx,D.edE,D.edv,D.edy,D.edu,D.edr,D.edD,D.edo,D.edA,D.edp,D.edC,D.eds,D.edq,D.edw,D.edF,D.edB,D.edt,D.edn,D.edz],C.ax("O<mx>"))
D.fYe=new B.FM("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fYc=new B.FM("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.fYf=new B.FM("Mercury",3.7,A.jR,"Mercury is small, so its gravity is like Mars.")
D.fY9=new B.FM("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fYb=new B.FM("Earth",9.81,A.aS,"On Earth gravity is strong, and the air also slows you down.")
D.fYd=new B.FM("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.fYa=new B.FM("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.re=w([D.fYe,D.fYc,D.fYf,D.fY9,D.fYb,D.fYd,D.fYa],C.ax("O<FM>"))
D.cWk=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a24=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cX0=w([0.2,0.5,0.8],x.n)
D.bCu=new C.a_(63040,"MaterialIcons",!1)
D.eCP=new C.br("peg","Peg",D.bCu)
D.eC_=new C.br("bar","Bar",V.BF)
D.eCs=new C.br("erase","Erase",A.MY)
D.cXc=w([D.eCP,D.eC_,D.eCs],x.c)
D.eLJ=new C.cR(A.bi,A.J,4)
D.cXn=w([D.eLJ],x.q)
D.avX=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aUE=new B.K3(0,"accordion")
D.cMO=w([A.jj,A.BG,A.Bu],x.w)
D.cTK=w(["Mail","SMS","Ad"],x.s)
D.cNi=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fWr=new B.Al(D.aUE,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.awG,D.cMO,D.cTK,D.cNi)
D.a9e=new B.K3(1,"flip")
D.d2S=w([A.pV,A1.Gb,A.tY],x.w)
D.cYQ=w(["Unlock","Verify","Secure"],x.s)
D.cLQ=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fWq=new B.Al(D.a9e,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awc,D.d2S,D.cYQ,D.cLQ)
D.aUF=new B.K3(2,"towers")
D.cXF=w([A.yf,A.pZ,A.hM],x.w)
D.cXi=w(["Save","Grow","Earn"],x.s)
D.czW=w(["","",""],x.s)
D.fWs=new B.Al(D.aUF,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1W,D.cXF,D.cXi,D.czW)
D.a9f=new B.K3(3,"assemble")
D.d3M=w([A.nh,A.h8,A.dW],x.w)
D.cT8=w(["Launch","Charge","Shine"],x.s)
D.d0o=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fWu=new B.Al(D.a9f,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auE,D.d3M,D.cT8,D.d0o)
D.aUG=new B.K3(4,"carousel")
D.d3B=w([A.b8,A.f6],x.O)
D.cTU=w([A.mu,A.akE,A.a03],x.w)
D.cOK=w(["Explore","Discover","Learn"],x.s)
D.cZe=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fWp=new B.Al(D.aUG,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d3B,D.cTU,D.cOK,D.cZe)
D.aUH=new B.K3(5,"burst")
D.cXe=w([A.j8,A.tb],x.O)
D.cNd=w([A.lh,A.ms,A.i0],x.w)
D.cNy=w(["Cheer","Win","Love"],x.s)
D.cPH=w(["Make some noise","First place","Share the joy"],x.s)
D.fWt=new B.Al(D.aUH,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cXe,D.cNd,D.cNy,D.cPH)
D.avY=w([D.fWr,D.fWq,D.fWs,D.fWu,D.fWp,D.fWt],C.ax("O<Al>"))
D.eCR=new C.br("skin","Skin",A.akF)
D.eEd=new C.br("muscle","Muscles",A.N9)
D.eDW=new C.br("organ","Organs",A.i0)
D.bBV=new C.a_(62747,"MaterialIcons",!1)
D.eE1=new C.br("bone","Skeleton",D.bBV)
D.eEj=new C.br("vessel","Blood vessels",A.q0)
D.cXL=w([D.eCR,D.eEd,D.eDW,D.eE1,D.eEj],x.c)
D.eIU=new B.uJ("Simple legs","Light. Land gently.",0.15,0.2)
D.eIW=new B.uJ("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eIZ=new B.uJ("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C3=w([D.eIU,D.eIW,D.eIZ],x._)
D.cZn=w([1.77,3.55,7.15,16.7],x.n)
D.d0N=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eyC=new C.y("spiral","Spiral")
D.ei3=new C.y("barred","Barred spiral")
D.etd=new C.y("elliptical","Elliptical")
D.d1s=w([D.eyC,D.ei3,D.etd],x.K)
D.eF_=new C.cD(["beat",0.18,0.28,0])
D.eG6=new C.cD(["burst",0.7,0.2,0])
D.eGh=new C.cD(["delay",0.45,0.5,1])
D.eFR=new C.cD(["ripple",0.75,0.6,3])
D.cSS=w([D.eF_,D.eG6,D.eGh,D.eFR],x.e)
D.d2i=w([N.l2,M.Ia,F.S7],x.u)
D.fVG=new B.Fy("First spark","A clock lights a burst and a ripple",D.cSS,D.d2i)
D.eFy=new C.cD(["beat",0.15,0.3,1])
D.eEE=new C.cD(["ripple",0.62,0.15,0])
D.eGd=new C.cD(["delay",0.4,0.45,0])
D.eFe=new C.cD(["ripple",0.7,0.45,0])
D.eEW=new C.cD(["delay",0.4,0.7,1])
D.eFT=new C.cD(["shake",0.75,0.75,0])
D.dev=w([D.eFy,D.eEE,D.eGd,D.eFe,D.eEW,D.eFT],x.e)
D.efe=new C.y(2,4)
D.aLw=new C.y(4,5)
D.cWb=w([N.l2,M.Ia,F.S7,D.efe,D.aLw],x.u)
D.fVI=new B.Fy("Heartbeat","Two thumps, then a shake",D.dev,D.cWb)
D.eF4=new C.cD(["dice",0.15,0.7,1])
D.eGj=new C.cD(["echo",0.4,0.7,0])
D.eFc=new C.cD(["comet",0.7,0.5,4])
D.eG7=new C.cD(["burst",0.72,0.2,1])
D.eFw=new C.cD(["burst",0.3,0.25,0])
D.eF5=new C.cD(["pop",0.55,0.85,0])
D.cgl=w([D.eF4,D.eGj,D.eFc,D.eG7,D.eFw,D.eF5],x.e)
D.eeB=new C.y(1,3)
D.eeC=new C.y(1,4)
D.aLu=new C.y(0,5)
D.d3w=w([N.l2,W.ut,D.eeB,D.eeC,D.aLu],x.u)
D.fVH=new B.Fy("Fireworks","Dice launch comets that burst in colour",D.cgl,D.d3w)
D.eF9=new C.cD(["beat",0.15,0.2,2])
D.eFG=new C.cD(["chance",0.4,0.2,0])
D.eF1=new C.cD(["ball",0.7,0.12,3])
D.eEP=new C.cD(["chance",0.4,0.5,1])
D.eGi=new C.cD(["ball",0.3,0.08,1])
D.eEI=new C.cD(["ripple",0.7,0.55,3])
D.c9n=w([D.eF9,D.eFG,D.eF1,D.eEP,D.eGi,D.eEI],x.e)
D.eff=new C.y(2,5)
D.cwm=w([N.l2,W.ut,M.a5F,F.S8,D.eff],x.u)
D.fVF=new B.Fy("Rain","Balls fall at random and splash",D.c9n,D.cwm)
D.eFH=new C.cD(["beat",0.12,0.45,2])
D.eG8=new C.cD(["toggle",0.38,0.2,0])
D.eGf=new C.cD(["wash",0.7,0.15,4])
D.eF3=new C.cD(["count3",0.38,0.45,0])
D.eGa=new C.cD(["burst",0.72,0.4,0])
D.eFx=new C.cD(["light",0.55,0.7,1])
D.eEQ=new C.cD(["pop",0.8,0.8,4])
D.d66=w([D.eFH,D.eG8,D.eGf,D.eF3,D.eGa,D.eFx,D.eEQ],x.e)
D.efJ=new C.y(3,6)
D.ccv=w([N.l2,W.ut,M.a5F,F.S8,D.aLu,D.efJ],x.u)
D.fVD=new B.Fy("Disco","A beat drives lights, washes and bursts",D.d66,D.ccv)
D.eGm=new C.cD(["button",0.12,0.2,0])
D.eEK=new C.cD(["delay",0.34,0.2,1])
D.eGl=new C.cD(["light",0.56,0.2,1])
D.eGe=new C.cD(["delay",0.56,0.45,1])
D.eFI=new C.cD(["ball",0.34,0.6,0])
D.eEO=new C.cD(["delay",0.34,0.8,1])
D.eED=new C.cD(["burst",0.7,0.8,5])
D.bXD=w([D.eGm,D.eEK,D.eGl,D.eGe,D.eFI,D.eEO,D.eED],x.e)
D.ehM=new C.y(5,6)
D.daZ=w([N.l2,W.ut,F.S7,F.S8,D.aLw,D.ehM],x.u)
D.fVE=new B.Fy("Domino","Tap the button and watch it run down the line",D.bXD,D.daZ)
D.awg=w([D.fVG,D.fVI,D.fVH,D.fVF,D.fVD,D.fVE],C.ax("O<Fy>"))
D.d1A=w([0.05,0.15,0.25],x.n)
D.d1O=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d2t=w([1.5,3,4.5,9,12],x.n)
D.eBy=new C.br("dice","Dice",A.mr)
D.eCz=new C.br("coin","Coin",K.y8)
D.eEe=new C.br("num","Number",A.yh)
D.d2D=w([D.eBy,D.eCz,D.eEe],x.c)
D.d2G=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fBe=new B.OQ("Moon",1.62,0,4291941851)
D.fBf=new B.OQ("Mars",3.71,0.01,4294472049)
D.fBg=new B.OQ("Earth",9.81,1,4281908728)
D.fBi=new B.OQ("Jupiter",24.79,1.4,4294677052)
D.fBh=new B.OQ("Sun",274,2,4294688548)
D.yH=w([D.fBe,D.fBf,D.fBg,D.fBi,D.fBh],C.ax("O<OQ>"))
D.awn=w([A.cf,A.aM,A.b2,A.aS,A.bt,A.bZ,A.cs,A.hw],x.O)
D.e_E={H:0}
D.dkO=new C.bk(D.e_E,[2],x.I)
D.dmm=new B.ta("Hydrogen","H\u2082",D.dkO,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e_F={H:0,Cl:1}
D.dl0=new C.bk(D.e_F,[1,1],x.I)
D.dmo=new B.ta("Hydrogen chloride","HCl",D.dl0,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e_G={H:0,O:1}
D.dkx=new C.bk(D.e_G,[2,1],x.I)
D.dmp=new B.ta("Water","H\u2082O",D.dkx,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e_T={N:0,H:1}
D.dln=new C.bk(D.e_T,[1,3],x.I)
D.dmx=new B.ta("Ammonia","NH\u2083",D.dln,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4N={C:0,H:1}
D.dlh=new C.bk(D.a4N,[1,4],x.I)
D.dmq=new B.ta("Methane","CH\u2084",D.dlh,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e_H={H:0,S:1}
D.djF=new C.bk(D.e_H,[2,1],x.I)
D.dmw=new B.ta("Hydrogen sulfide","H\u2082S",D.djF,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e_Y={O:0}
D.dll=new C.bk(D.e_Y,[2],x.I)
D.dmy=new B.ta("Oxygen","O\u2082",D.dll,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e_S={N:0}
D.dkP=new C.bk(D.e_S,[2],x.I)
D.dmn=new B.ta("Nitrogen","N\u2082",D.dkP,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e_s={C:0,O:1}
D.dlt=new C.bk(D.e_s,[1,2],x.I)
D.dmu=new B.ta("Carbon dioxide","CO\u2082",D.dlt,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aFM={C:0,H:1,O:2}
D.djq=new C.bk(D.aFM,[1,2,1],x.I)
D.dmv=new B.ta("Formaldehyde","CH\u2082O",D.djq,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dlg=new C.bk(D.a4N,[2,4],x.I)
D.dms=new B.ta("Ethene","C\u2082H\u2084",D.dlg,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dlf=new C.bk(D.a4N,[2,6],x.I)
D.dmr=new B.ta("Ethane","C\u2082H\u2086",D.dlf,"Two carbons joined by a single bond, each holding three hydrogens.")
D.djr=new C.bk(D.aFM,[1,4,1],x.I)
D.dmt=new B.ta("Methanol","CH\u2083OH",D.djr,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2k=w([D.dmm,D.dmo,D.dmp,D.dmx,D.dmq,D.dmw,D.dmy,D.dmn,D.dmu,D.dmv,D.dms,D.dmr,D.dmt],C.ax("O<ta>"))
D.d3C=w([A.bZ,A.aS,A.dP,A.b2],x.O)
D.d4w=w([],x.h)
D.d4z=w([],x.B)
D.a2t=w([],x.F)
D.e7b=new B.eb("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e7h=new B.eb("solar","Solar panel","\u2600\ufe0f",A.cd,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e7W=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e7y=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aS,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e73=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hw,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e7w=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e80=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e7I=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e7m=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e7Y=new B.eb("fuse","Fuse","\ud83e\uddef",A.cf,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e6W=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hw,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e7J=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e7L=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e7j=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e7n=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e7F=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e7c=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e7A=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.cr,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e7s=new B.eb("radio","Radio","\ud83d\udcfb",A.nN,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e7p=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e72=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e79=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e7f=new B.eb("fan","Fan","\ud83c\udf00",A.aS,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e82=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e7S=new B.eb("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e7v=new B.eb("calculator","Calculator","\ud83e\uddee",A.Kk,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e78=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cr,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e81=new B.eb("router","WiFi router","\ud83d\udcf6",A.hw,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e84=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e6Z=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e85=new B.eb("kettle","Kettle","\ud83e\uded6",A.mg,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e76=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e7i=new B.eb("lights","Party lights","\ud83c\udf84",A.nN,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e7t=new B.eb("fridge","Fridge","\ud83e\uddca",A.fT,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e70=new B.eb("washer","Washing machine","\ud83e\udee7",A.cr,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e7T=new B.eb("blender","Blender","\ud83e\udd64",A.cf,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e7q=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e75=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e7u=new B.eb("torch","Torch","\ud83d\udd26",A.bK,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e7Q=new B.eb("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e71=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e7K=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.cd,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e7e=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e7E=new B.eb("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e7V=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h1,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e7_=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e7z=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e7H=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nN,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e8_=new B.eb("robot","Robot","\ud83e\udd16",A.aS,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e6Y=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e83=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e7P=new B.eb("pump","Water pump","\ud83d\udeb0",A.aS,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e7B=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.j8,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e7N=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e77=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e7Z=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.cr,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e6V=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h1,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e7r=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e7k=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e7G=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t8,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e6X=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e7a=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e7X=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e7C=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bo,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e7x=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ci,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e7O=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e7l=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e7D=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.cr,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e7M=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e7R=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e6U=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ce,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e7o=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e7g=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e74=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e7d=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e7U=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Q4=w([D.e7b,D.e7h,D.e7W,D.e7y,D.e73,D.e7w,D.e80,D.e7I,D.e7m,D.e7Y,D.e6W,D.e7J,D.e7L,D.e7j,D.e7n,D.e7F,D.e7c,D.e7A,D.e7s,D.e7p,D.e72,D.e79,D.e7f,D.e82,D.e7S,D.e7v,D.e78,D.e81,D.e84,D.e6Z,D.e85,D.e76,D.e7i,D.e7t,D.e70,D.e7T,D.e7q,D.e75,D.e7u,D.e7Q,D.e71,D.e7K,D.e7e,D.e7E,D.e7V,D.e7_,D.e7z,D.e7H,D.e8_,D.e6Y,D.e83,D.e7P,D.e7B,D.e7N,D.e77,D.e7Z,D.e6V,D.e7r,D.e7k,D.e7G,D.e6X,D.e7a,D.e7X,D.e7C,D.e7x,D.e7O,D.e7l,D.e7D,D.e7M,D.e7R,D.e6U,D.e7o,D.e7g,D.e74,D.e7d,D.e7U],C.ax("O<eb>"))
D.d4W=w([0,0.46,0.82],x.n)
D.d56=w([5,10,15,25,45,60],x.t)
D.d5q=w([-0.045,0.03,-0.015],x.n)
D.d5O=w([0.9,0.97,1],x.n)
D.awN=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.u6=w([0.05,0.2,0.35],x.n)
D.cNC=w([D.EA,D.EA],x.O)
D.cSO=w([A.EK,A.M],x.O)
D.cRR=w([A.fj,A.hl],x.O)
D.cLN=w([A.f6,A.nM],x.O)
D.c8U=w([A.lD,A.dx],x.O)
D.awO=w([D.cNC,D.cSO,D.cRR,D.cLN,D.c8U],x.Q)
D.fB2=new B.uX("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fB3=new B.uX("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fAV=new B.uX("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fB1=new B.uX("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fB_=new B.uX("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fAW=new B.uX("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fB0=new B.uX("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fAX=new B.uX("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fAZ=new B.uX("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fAY=new B.uX("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.C9=w([D.fB2,D.fB3,D.fAV,D.fB1,D.fB_,D.fAW,D.fB0,D.fAX,D.fAZ,D.fAY],C.ax("O<uX>"))
D.bel=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d6Y=w([D.EA,D.bel,D.adh,A.acO],x.O)
D.b0q=new C.ac(0,A.G,A.hJ,A.dE,6)
D.d7S=w([D.b0q],x.V)
D.edW=new C.y(0,"AND")
D.eeD=new C.y(1,"Adder")
D.efg=new C.y(2,"Blinker")
D.efK=new C.y(3,"Memory")
D.d8B=w([D.edW,D.eeD,D.efg,D.efK],x.E)
D.ax_=w([-104,0,104],x.n)
D.ax1=w([-14,3],x.n)
D.d93=w([-16,16],x.n)
D.ax2=w([-22,22],x.n)
D.d9f=w([-8,0,8],x.n)
D.ax6=w([-92,0,92],x.n)
D.d9A=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eIR=new B.uJ("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eIY=new B.uJ("Medium tank","Balanced.",0.35,1)
D.eIX=new B.uJ("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qh=w([D.eIR,D.eIY,D.eIX],x._)
D.nl=w([0.04,0.2,0.36],x.n)
D.axh=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eDV=new C.br(D.aUE,"Fold",K.alB)
D.eD5=new C.br(D.a9e,"Flip",A.FP)
D.bCd=new C.a_(62889,"MaterialIcons",!1)
D.eEc=new C.br(D.aUF,"Rise",D.bCd)
D.alP=new C.a_(983870,"MaterialIcons",!1)
D.eB7=new C.br(D.a9f,"Assemble",D.alP)
D.eBg=new C.br(D.aUG,"Spin",D.ak8)
D.eBd=new C.br(D.aUH,"Pop",A.lh)
D.daW=w([D.eDV,D.eD5,D.eEc,D.eB7,D.eBg,D.eBd],C.ax("O<+(K3,n,a_)>"))
D.axm=w([A.bZ,A.dP,A.bu,A.aS,A.bt,A.cf],x.O)
D.db6=w([A.aS,A.cs,A.cs,A.b2],x.O)
D.dbj=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eA5=new C.y("Make the output turn HALF as fast as the input.",0.5)
D.elb=new C.y("Make the output turn TWICE as fast.",2)
D.eeN=new C.y("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eyM=new C.y("Make the output turn 4 times faster.",4)
D.eqL=new C.y("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.etO=new C.y("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.esj=new C.y("Make the output turn 3 times faster.",3)
D.et4=new C.y("Make the output spin at the same speed as the input, using four different gears.",1)
D.axr=w([D.eA5,D.elb,D.eeN,D.eyM,D.eqL,D.etO,D.esj,D.et4],C.ax("O<+(n,M)>"))
D.dch=w([3,4.5,5,6,9],x.n)
D.b0Y=new C.ac(0,A.G,A.aX,A.J,16)
D.dcI=w([D.b0Y],x.V)
D.Qj=w([A.bZ,A.cd,A.b2,A.aS,A.bt,A.cf,A.c,A.cs],x.O)
D.dd9=w(["solar","turbine","crank","pot"],x.s)
D.ddt=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.ddz=w([0,0.35,0.75,1],x.n)
D.eBt=new C.br("drop","Drop",D.alr)
D.eBv=new C.br("weight","Weight",T.alT)
D.eE7=new C.br("cannon","Newton's cannon",A.akR)
D.ded=w([D.eBt,D.eBv,D.eE7],x.c)
D.exq=new C.y("piano","Piano")
D.ex6=new C.y("organ","Organ")
D.es0=new C.y("bell","Bell")
D.exs=new C.y("pluck","Pluck")
D.eyL=new C.y("synth","Synth")
D.etJ=new C.y("flute","Flute")
D.axJ=w([D.exq,D.ex6,D.es0,D.exs,D.eyL,D.etJ],x.K)
D.deJ=w(["volts","level","ohms","on"],x.s)
D.dg0=w([A.jj,A.BG,A.Bu,A.pV,A1.Gb,A.tY,A.yf,A.pZ,A.hM,A.nh,A.h8,A.dW,A.i0,A.i1,A.ms,A.lO,A.vJ,A.rb,A.lP,A.FH,A.tX,A.Nb,A.Bw,A.alm,A.N1,A.yb,A.N9,A.al0,S.alL,A.lh],x.w)
D.dgU=w([0.72,1],x.n)
D.dh4=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e18={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.djk=new C.bk(D.e18,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aFO={A:0,T:1,C:2,G:3}
D.a3o=new C.bk(D.aFO,["U","A","G","C"],x.l)
D.djs=new C.bk(D.aFO,["T","A","G","C"],x.l)
D.e_P={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d3G=w([0,2,4,5,7,9,11],x.t)
D.cMU=w([0,2,3,5,7,8,10],x.t)
D.d8O=w([0,3,5,6,7,10],x.t)
D.Cf=new C.bk(D.e_P,[D.avI,D.d3G,D.cMU,D.d8O,D.aok],C.ax("bk<n,ai<H>>"))
D.e0X={A:0,T:1,U:2,C:3,G:4}
D.djI=new C.bk(D.e0X,[A.cf,A.cr,A.cr,A.aM,A.b2],C.ax("bk<n,w>"))
D.e_c={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fPn=new B.xV("Switch",F.Nz,A.cd,0,"Tap it to turn it ON or OFF.")
D.fPj=new B.xV("Blinker",A.oN,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fPk=new B.xV("AND",D.alP,A.cr,2,"ON only when BOTH inputs are ON.")
D.bDH=new C.a_(63671,"MaterialIcons",!1)
D.fPi=new B.xV("OR",D.bDH,A.bt,2,"ON when EITHER input is ON.")
D.fPl=new B.xV("XOR",G.a_o,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fPf=new B.xV("NAND",A.tM,A.aS,2,"OFF only when BOTH inputs are ON.")
D.bCN=new C.a_(63176,"MaterialIcons",!1)
D.fPg=new B.xV("NOR",D.bCN,A.hw,2,"ON only when BOTH inputs are OFF.")
D.fPh=new B.xV("NOT",A_.G7,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fPm=new B.xV("Light",A.r6,A.dP,1,"Glows when its input is ON.")
D.fPo=new B.xV("Buzzer",A.o1,A.cf,1,"Beeps while its input is ON.")
D.yU=new C.bk(D.e_c,[D.fPn,D.fPj,D.fPk,D.fPi,D.fPl,D.fPf,D.fPg,D.fPh,D.fPm,D.fPo],C.ax("bk<n,xV>"))
D.e0U={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eBR=new C.br(3,20,1.9)
D.eBo=new C.br(33,90,1.6)
D.eEw=new C.br(52,15,3.2)
D.eEu=new C.br(45,-100,1.8)
D.eD_=new C.br(-15,-60,1.9)
D.eCu=new C.br(-25,140,2.4)
D.eCl=new C.br(-82,0,2.2)
D.aDa=new C.bk(D.e0U,[D.eBR,D.eBo,D.eEw,D.eEu,D.eD_,D.eCu,D.eCl],C.ax("bk<n,+(M,M,M)>"))
D.cMk=w([A.A],x.M)
D.cMC=w([A.ax,A.aC],x.M)
D.cVk=w([A.ax,A.A,A.aC],x.M)
D.cWJ=w([A.ax,A.l6,A.A,A.lx,A.aC],x.M)
D.d8x=w([A.ax,A.l6,A.a3,A.a7,A.lx,A.aC],x.M)
D.dkE=new C.dS([1,D.cMk,2,D.cMC,3,D.cVk,4,A.axO,5,D.cWJ,6,D.d8x],C.ax("dS<H,ai<da>>"))
D.e_Q={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eDb=new C.br(1,A.bP,"Hydrogen")
D.eC5=new C.br(4,A.bn,"Carbon")
D.eB8=new C.br(3,A.d3,"Nitrogen")
D.eDu=new C.br(2,A.ay,"Oxygen")
D.eCT=new C.br(2,A.cd,"Sulfur")
D.eE4=new C.br(1,A.bo,"Chlorine")
D.vY=new C.bk(D.e_Q,[D.eDb,D.eC5,D.eB8,D.eDu,D.eCT,D.eE4],C.ax("bk<n,+(H,w,n)>"))
D.e1e={Calm:0,Box:1,Sleep:2}
D.ctS=w([4,2,6,0],x.n)
D.ctZ=w([4,4,4,4],x.n)
D.cu_=w([4,7,8,0],x.n)
D.QI=new C.bk(D.e1e,[D.ctS,D.ctZ,D.cu_],C.ax("bk<n,ai<M>>"))
D.e_l={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wB=new B.a_R(0,"source")
D.cWe=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fUj=new B.pZ("Clock",A.oN,D.wB,A.bu,D.cWe)
D.fUf=new B.pZ("Button",A.yj,D.wB,A.aM,A.T)
D.dct=w(["random","quick","slow"],x.s)
D.fUq=new B.pZ("Dice",A.mr,D.wB,A.bZ,D.dct)
D.bDm=new C.a_(63484,"MaterialIcons",!1)
D.DC=new B.a_R(1,"logic")
D.dgP=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fUm=new B.pZ("Delay",D.bDm,D.DC,A.cr,D.dgP)
D.d5d=w(["fast","mid","slow"],x.s)
D.fUr=new B.pZ("Echo",A.alg,D.DC,A.bt,D.d5d)
D.fUo=new B.pZ("Every 2nd",A_.G7,D.DC,A.hw,A.T)
D.bD1=new C.a_(63309,"MaterialIcons",!1)
D.fUl=new B.pZ("Every 3rd",D.bD1,D.DC,A.aS,A.T)
D.bF_=new C.a_(983902,"MaterialIcons",!1)
D.bX2=w(["50%","25%","75%"],x.s)
D.fUt=new B.pZ("Chance",D.bF_,D.DC,A.cs,D.bX2)
D.qt=new B.a_R(2,"out")
D.fUh=new B.pZ("Light",A.r6,D.qt,A.dP,A.T)
D.fUi=new B.pZ("Burst",A.lh,D.qt,A.bZ,A.T)
D.fUg=new B.pZ("Ripple",A.yn,D.qt,A.b8,A.T)
D.fUp=new B.pZ("Ball",A.alt,D.qt,A.cs,A.T)
D.fUn=new B.pZ("Comet",A.nh,D.qt,A.bt,A.T)
D.bEK=new C.a_(983669,"MaterialIcons",!1)
D.fUs=new B.pZ("Shake",D.bEK,D.qt,A.cf,A.T)
D.fUu=new B.pZ("Pop",A.FI,D.qt,A.b2,A.T)
D.fUk=new B.pZ("Wash",A.Ne,D.qt,A.ps,A.T)
D.mB=new C.bk(D.e_l,[D.fUj,D.fUf,D.fUq,D.fUm,D.fUr,D.fUo,D.fUl,D.fUt,D.fUh,D.fUi,D.fUg,D.fUp,D.fUn,D.fUs,D.fUu,D.fUk],C.ax("bk<n,pZ>"))
D.e0Y={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Cg=new C.bk(D.e0Y,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e_y={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zl=new B.J0(0,"tv")
D.eKl=new B.m3("Samsung Neo QLED 8K",D.zl,F.KJ,A.aS)
D.eKc=new B.m3("LG OLED evo G5",D.zl,A.ea,A.h1)
D.eK3=new B.m3("Sony Bravia 9",D.zl,A.qE,A.br)
D.eK7=new B.m3("Apple TV 4K",D.zl,A.e1,A.bP)
D.eK4=new B.m3("Bang and Olufsen Beovision",D.zl,F.E6,F.t8)
D.If=new B.J0(1,"iphone")
D.aM9=new B.m3("iPhone 18 Pro Max",D.If,D.afv,A.ce)
D.wa=new B.J0(3,"fold")
D.bkg=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eKh=new B.m3("iPhone Fold",D.wa,D.bkg,A.b7)
D.uw=new B.J0(2,"android")
D.eKi=new B.m3("Samsung Galaxy S26 Ultra",D.uw,F.abG,A.d3)
D.bdT=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eKa=new B.m3("Samsung Galaxy Z Fold7",D.wa,D.bdT,A.cy)
D.eK6=new B.m3("Google Pixel 10 Pro XL",D.uw,A.dA,A.bo)
D.eKe=new B.m3("Xiaomi 16 Ultra",D.uw,A.lI,A.ci)
D.eK9=new B.m3("Huawei Mate 80 Pro Max",D.uw,A.eO,A.ay)
D.eK5=new B.m3("OPPO Find X9 Ultra",D.uw,A.e_,A.b2)
D.eKn=new B.m3("Honor Magic V5",D.wa,A.di,A.cr)
D.eKb=new B.m3("vivo X300 Pro",D.uw,A.hl,A.cs)
D.Sg=new B.J0(4,"tablet")
D.eKg=new B.m3("iPad Pro M5",D.Sg,A.dA,A.aS)
D.a5W=new B.J0(5,"reader")
D.eKo=new B.m3("Kindle Scribe",D.a5W,A.ep,A.br)
D.zm=new B.J0(6,"computer")
D.eKf=new B.m3("MacBook Pro M5 Max",D.zm,A.dA,A.ce)
D.eKk=new B.m3("iMac 32 inch",D.zm,A.bP,A.cy)
D.eKd=new B.m3("Pro Display XDR 8K",D.zm,A.lI,A.b8)
D.eK8=new B.m3("Sony Laser Projector",D.zm,A.cB,A.dP)
D.eKj=new B.m3("Luxury car touchscreen",D.zm,L.n_,A.ay)
D.eKm=new B.m3("Apple Vision Pro",D.zm,A.ju,A.bt)
D.lX=new C.bk(D.e_y,[D.eKl,D.eKc,D.eK3,D.eK7,D.eK4,D.aM9,D.eKh,D.eKi,D.eKa,D.eK6,D.eKe,D.eK9,D.eK5,D.eKn,D.eKb,D.eKg,D.eKo,D.eKf,D.eKk,D.eKd,D.eK8,D.eKj,D.eKm],C.ax("bk<n,m3>"))
D.e_K={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bmN=new B.fK(20,4,13,!1)
D.bnd=new B.fK(14,5,13.5,!1)
D.bn4=new B.fK(9,2.4,10,!1)
D.bni=new B.fK(7,5,12.5,!1)
D.bn7=new B.fK(8,3.5,12,!1)
D.bmJ=new B.fK(15,2,6,!1)
D.bng=new B.fK(45,6,13.5,!0)
D.bmZ=new B.fK(10,8,13.5,!1)
D.bmR=new B.fK(25,3,12,!0)
D.bmX=new B.fK(35,4,12,!0)
D.bmY=new B.fK(40,4.5,9.5,!0)
D.bn_=new B.fK(55,3,9,!0)
D.bmK=new B.fK(18,3,9,!1)
D.bnf=new B.fK(22,4,13.5,!1)
D.bn8=new B.fK(16,5,13.5,!1)
D.bmV=new B.fK(30,4,9,!0)
D.bnr=new B.fK(5,3.5,13,!1)
D.bn2=new B.fK(25,3,13.5,!0)
D.bnb=new B.fK(14,2.5,9,!1)
D.bn1=new B.fK(6,6,13,!1)
D.bnj=new B.fK(30,1.2,5,!0)
D.bnq=new B.fK(35,3,4.5,!0)
D.bnm=new B.fK(20,4.5,7.5,!0)
D.bn0=new B.fK(55,5.5,13.5,!0)
D.bmI=new B.fK(45,5.5,13.5,!0)
D.bnc=new B.fK(40,5.5,13.5,!0)
D.bnp=new B.fK(60,6,13.5,!0)
D.afX=new B.fK(28,4,7,!0)
D.EX=new B.fK(25,4,7,!0)
D.bmU=new B.fK(30,4,7,!0)
D.bmP=new B.fK(22,4,7,!0)
D.bmQ=new B.fK(24,4,7,!0)
D.bn3=new B.fK(60,3,5.5,!0)
D.bmL=new B.fK(18,9,14,!0)
D.bmS=new B.fK(25,9,14,!0)
D.afY=new B.fK(30,8,14,!0)
D.bmO=new B.fK(20,8,14,!0)
D.bmW=new B.fK(30,9,14,!0)
D.bnk=new B.fK(22,5,9.5,!0)
D.bmM=new B.fK(30,2.5,10.5,!0)
D.bn9=new B.fK(50,5.5,13.5,!0)
D.bno=new B.fK(12,2,9.5,!1)
D.bn6=new B.fK(16,1.3,9.5,!0)
D.bnh=new B.fK(40,2.5,7,!0)
D.bnn=new B.fK(60,1.2,4.8,!0)
D.bnl=new B.fK(18,5,13.5,!0)
D.bne=new B.fK(8,2,9.5,!1)
D.bn5=new B.fK(12,2.5,8,!1)
D.bmT=new B.fK(20,3.5,13.5,!0)
D.bna=new B.fK(3.5,3,13,!1)
D.yV=new C.bk(D.e_K,[D.bmN,D.bnd,D.bn4,D.bni,D.bn7,D.bmJ,D.bng,D.bmZ,D.bmR,D.bmX,D.bmY,D.bn_,D.bmK,D.bnf,D.bn8,D.bmV,D.bnr,D.bn2,D.bnb,D.bn1,D.bnj,D.bnq,D.bnm,D.bn0,D.bmI,D.bnc,D.bnp,D.afX,D.EX,D.bmU,D.EX,D.bmP,D.EX,D.bmQ,D.afX,D.EX,D.bn3,D.bmL,D.bmS,D.afY,D.bmO,D.bmW,D.bnk,D.bmM,D.bn9,D.bno,D.bn6,D.bnh,D.bnn,D.EX,D.afY,D.bnl,D.bne,D.bn5,D.bmT,D.bna],C.ax("bk<n,fK>"))
D.e_k={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eAF=new C.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ehJ=new C.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ehE=new C.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.et3=new C.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eu_=new C.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.et_=new C.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.efP=new C.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.er0=new C.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eAO=new C.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.euk=new C.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ekB=new C.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.efw=new C.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ejG=new C.y("Movement","They pull your legs together and help you balance.")
D.elv=new C.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ehS=new C.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eym=new C.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ezp=new C.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eqM=new C.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ez9=new C.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.epu=new C.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eus=new C.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.efE=new C.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.elS=new C.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eu9=new C.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.epO=new C.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ezh=new C.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.esv=new C.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.efN=new C.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ev0=new C.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ey_=new C.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ewg=new C.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ee4=new C.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.esd=new C.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.esh=new C.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.emx=new C.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ei_=new C.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.elk=new C.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.era=new C.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ex_=new C.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eAL=new C.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eup=new C.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.edS=new C.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.erl=new C.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eew=new C.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.exf=new C.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eyi=new C.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.erL=new C.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.exu=new C.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.efG=new C.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eyO=new C.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ej5=new C.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ewF=new C.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eme=new C.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.epJ=new C.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.euJ=new C.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eyZ=new C.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eyQ=new C.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eyV=new C.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eqc=new C.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.evx=new C.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ewd=new C.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eyD=new C.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.erK=new C.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eo8=new C.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.emY=new C.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.es8=new C.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.euC=new C.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eoE=new C.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.epi=new C.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ejr=new C.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eye=new C.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ekd=new C.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eet=new C.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.emw=new C.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eeo=new C.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eik=new C.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.emB=new C.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.ekm=new C.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.euX=new C.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ely=new C.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eAs=new C.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.en6=new C.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eq6=new C.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.esD=new C.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ekt=new C.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ekf=new C.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dlN=new C.bk(D.e_k,[D.eAF,D.ehJ,D.ehE,D.et3,D.eu_,D.et_,D.efP,D.er0,D.eAO,D.euk,D.ekB,D.efw,D.ejG,D.elv,D.ehS,D.eym,D.ezp,D.eqM,D.ez9,D.epu,D.eus,D.efE,D.elS,D.eu9,D.epO,D.ezh,D.esv,D.efN,D.ev0,D.ey_,D.ewg,D.ee4,D.esd,D.esh,D.emx,D.ei_,D.elk,D.era,D.ex_,D.eAL,D.eup,D.edS,D.erl,D.eew,D.exf,D.eyi,D.erL,D.exu,D.efG,D.eyO,D.ej5,D.ewF,D.eme,D.epJ,D.euJ,D.eyZ,D.eyQ,D.eyV,D.eqc,D.evx,D.ewd,D.eyD,D.erK,D.eo8,D.emY,D.es8,D.euC,D.eoE,D.epi,D.ejr,D.eye,D.ekd,D.eet,D.emw,D.eeo,D.eik,D.emB,D.ekm,D.euX,D.ely,D.eAs,D.en6,D.eq6,D.esD,D.ekt,D.ekf],C.ax("bk<n,+(n,n)>"))
D.dlP=new C.hv(A.G,11)
D.dlU=new C.hv(A.G,30)
D.doP=new B.TO(null)
D.dsD=new B.TS(null)
D.dsE=new B.TT(null)
D.dsR=new B.TU(null)
D.duS=new B.TW(null)
D.duT=new B.TX(null)
D.duU=new B.TY(null)
D.dvH=new B.Uj(null)
D.dvJ=new B.Uy(null)
D.dvK=new B.Uz(null)
D.dvM=new B.UA(null)
D.dwj=new B.UH(null)
D.dye=new B.UL(null)
D.dyf=new B.UN(null)
D.dyg=new B.UO(null)
D.dyi=new B.UP(null)
D.dzS=new B.V5(null)
D.dzU=new B.V7(null)
D.dzZ=new B.Vh(null)
D.dA9=new B.Vi(null)
D.dAF=new B.Vj(null)
D.dC9=new B.Vl(null)
D.dDx=new B.Vn(null)
D.dDy=new B.Vo(null)
D.dET=new B.Vr(null)
D.dUM=new B.Vs(null)
D.dUO=new B.Vt(null)
D.dUP=new B.Vw(null)
D.dUQ=new B.Vx(null)
D.dWJ=new B.VF(null)
D.dWK=new B.VG(null)
D.dWS=new B.VN(null)
D.dX0=new B.VR(null)
D.dX1=new B.VS(null)
D.dX2=new B.a7R(null)
D.dXD=new B.VU(null)
D.dZ5=new B.VY(null)
D.e1p=new C.u(0,118)
D.aFV=new C.u(0,13)
D.e1q=new C.u(0,17)
D.e1t=new C.u(0,330)
D.e1w=new C.u(0,-13)
D.aG0=new C.u(0,-14)
D.e1x=new C.u(0,-17)
D.e1y=new C.u(0,-18)
D.e1z=new C.u(0,-19)
D.e1A=new C.u(0,-20)
D.e1D=new C.u(0,-26)
D.e1E=new C.u(0,-28)
D.e1F=new C.u(0,-31)
D.e1G=new C.u(0,-32)
D.w4=new C.u(0,-6)
D.e1H=new C.u(0,-6771)
D.e1I=new C.u(0,-9)
D.e1K=new C.u(-9.5,-11)
D.e1L=new C.u(10,20)
D.e1N=new C.u(10,-13)
D.e1O=new C.u(10,-22)
D.e1P=new C.u(10,-4)
D.a4R=new C.u(11,8)
D.e1R=new C.u(12,2)
D.e1S=new C.u(14,0)
D.e1T=new C.u(14,12)
D.aG4=new C.u(14,8)
D.e1U=new C.u(14,-17)
D.e1V=new C.u(14,-18)
D.aG5=new C.u(14,-3)
D.aG6=new C.u(14,-4)
D.e1W=new C.u(15,0)
D.e1X=new C.u(15,-12)
D.e1Y=new C.u(16,-8)
D.e1Z=new C.u(18,14)
D.e2_=new C.u(18,-12)
D.aGa=new C.u(20,0)
D.e25=new C.u(20,15)
D.e26=new C.u(20,-17)
D.e27=new C.u(20,-3)
D.e28=new C.u(21,8)
D.e2a=new C.u(22,10)
D.aGb=new C.u(22,8)
D.e2b=new C.u(24,0)
D.e2c=new C.u(24,2)
D.e2e=new C.u(24,-18)
D.e2f=new C.u(24,-22)
D.e2g=new C.u(25,8)
D.e2h=new C.u(26,0)
D.e2n=new C.u(28,-30)
D.e2s=new C.u(30,18)
D.e2t=new C.u(30,2)
D.e2u=new C.u(31,19)
D.e2v=new C.u(32,0)
D.aGe=new C.u(34,0)
D.aGf=new C.u(34,-32)
D.HR=new C.u(36,0)
D.e2A=new C.u(3,-1)
D.e2D=new C.u(40,3)
D.e2H=new C.u(4,11)
D.e2K=new C.u(4,-2)
D.e2O=new C.u(5,0)
D.e2P=new C.u(5,17)
D.e2Q=new C.u(5,6)
D.e2U=new C.u(6,11)
D.e3_=new C.u(8,7)
D.e30=new C.u(8,-10)
D.e31=new C.u(8,-14)
D.e32=new C.u(8,-3)
D.aGj=new C.u(9,0)
D.e35=new C.u(-20.5,-17.6)
D.e36=new C.u(-9,18.5)
D.e39=new C.u(-2.6,-1)
D.e3a=new C.u(1.9,-0.8)
D.e3d=new C.u(-0.22,0.09)
D.e3i=new C.u(2.6,1)
D.e3p=new C.u(-9,12.2)
D.e3H=new C.u(-9,20.5)
D.e3Z=new C.u(-10,0)
D.e4_=new C.u(-10,12)
D.aGq=new C.u(-10,4)
D.e40=new C.u(-11,-2)
D.e41=new C.u(-13,-5)
D.e42=new C.u(-14,0)
D.e43=new C.u(-14,13)
D.e44=new C.u(-14,2)
D.e45=new C.u(-14,-12)
D.e46=new C.u(-14,-19)
D.e47=new C.u(-14,-23)
D.e48=new C.u(-15,6)
D.e49=new C.u(-16,14)
D.e4a=new C.u(-16,-8)
D.e4b=new C.u(-17,10)
D.e4c=new C.u(-17,-18)
D.e4d=new C.u(-17,-8)
D.e4f=new C.u(-18,20)
D.e4g=new C.u(-18,-9)
D.aGs=new C.u(-20,0)
D.e4i=new C.u(-20,16)
D.e4j=new C.u(-20,-9)
D.RG=new C.u(-22,8)
D.e4k=new C.u(-22,-10)
D.e4l=new C.u(-22,-11)
D.e4m=new C.u(-24,10)
D.e4n=new C.u(-24,11)
D.e4o=new C.u(-24,14)
D.e4p=new C.u(-24,-22)
D.e4q=new C.u(-25,-11)
D.e4r=new C.u(-26,0)
D.e4s=new C.u(-26,-18)
D.e4t=new C.u(-2,9)
D.e4u=new C.u(-2,-10)
D.e4v=new C.u(-2,-20)
D.e4w=new C.u(-2,-9)
D.e4x=new C.u(-32,0)
D.aGu=new C.u(-34,0)
D.e4C=new C.u(-40,3)
D.e4E=new C.u(-4,11)
D.e4F=new C.u(-4,-17)
D.e4G=new C.u(-4,-2)
D.e4I=new C.u(-5,0)
D.e4J=new C.u(-5,20)
D.e4K=new C.u(-5,6)
D.e4L=new C.u(-6,26)
D.e4M=new C.u(-6,6)
D.e4N=new C.u(-6,-42)
D.e4O=new C.u(-7,-19)
D.e4P=new C.u(-7,-24)
D.e4Q=new C.u(-8,-9)
D.a4V=new C.u(-9,0)
D.e4R=new C.u(-9,1)
D.e4S=new C.u(-9,-23)
D.fei=new C.x("Thinking\u2026",null,A.hf,null,null,null,null,null,null,null,null,null)
D.e5O=new C.D(A.kn,D.fei,null)
D.fu8=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e5Y=new C.D(A9.vm,D.fu8,null)
D.bux=new C.Q(4,0,4,14)
D.f9H=new C.G(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new C.x("Games and little helpers for a spare minute.",null,D.f9H,null,null,null,null,null,null,null,null,null)
D.e67=new C.D(D.bux,D.ffc,null)
D.fqZ=new C.x("Tap to throw in a star",null,A.kC,null,null,null,null,null,null,null,null,null)
D.b47=new C.cr(A.A,null,null,D.fqZ,null)
D.ebZ=new C.cL(0,null,0,14,null,null,D.b47,null)
D.d5M=w([A.iN,A.bn],x.O)
D.aLm=new C.bT(A.A,0.5,A.x,null,0,D.d5M,null,null)
D.ecH=new C.bT(A.A,0.5,A.x,null,0,D.axB,null,null)
D.cYr=w([A.c,A.bJ],x.O)
D.ecJ=new C.bT(A.A,0.5,A.x,null,0,D.cYr,null,null)
D.ecK=new C.bT(A.A,0.5,A.x,null,0,M.awF,null,null)
D.ddl=w([A.bP,A.ju],x.O)
D.aLn=new C.bT(A.A,0.5,A.x,null,0,D.ddl,null,null)
D.cDz=w([A.c,A.bP],x.O)
D.ecO=new C.bT(A.rS,0.5,A.x,null,0,D.cDz,null,null)
D.bbm=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bgE=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cXu=w([D.bbm,D.af4,D.bgE],x.O)
D.d3Q=w([0,0.7,1],x.n)
D.ecQ=new C.bT(A.rS,0.5,A.x,null,0,D.cXu,D.d3Q,null)
D.cu5=w([A.oz,A.aH,A.K],x.O)
D.dae=w([0.3,0.7,1],x.n)
D.ecS=new C.bT(A.A,0.5,A.x,null,0,D.cu5,D.dae,null)
D.bkj=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dbB=w([A.f9,D.bkj],x.O)
D.ecU=new C.bT(A.rS,0.5,A.x,null,0,D.dbB,null,null)
D.cwR=w([A.dA,A.cB],x.O)
D.ecV=new C.bT(A.A,0.5,A.x,null,0,D.cwR,null,null)
D.cSY=w([A.oz,A.aH,A.fj],x.O)
D.ecW=new C.bT(A.A,0.5,A.x,null,0,D.cSY,null,null)
D.cLj=w([A.h3,A.aM,A.d8],x.O)
D.ecY=new C.bT(A.rS,0.5,A.x,null,0,D.cLj,null,null)
D.d6i=w([A.ju,L.n_],x.O)
D.ecZ=new C.bT(A.rS,0.5,A.x,null,0,D.d6i,null,null)
D.bbA=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b9E=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cVc=w([D.bbA,D.b9E],x.O)
D.ed0=new C.bT(A.A,0.5,A.x,null,0,D.cVc,null,null)
D.bg3=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.be0=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.be4=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dfB=w([D.bg3,D.be0,D.be4],x.O)
D.cRL=w([0,0.65,1],x.n)
D.ed1=new C.bT(M.a9p,0.5,A.x,null,0,D.dfB,D.cRL,null)
D.ed2=new C.bT(A.A,0.5,A.x,null,0,D.au8,null,null)
D.dcA=w([A.lE,A.aH,A.fj],x.O)
D.ed7=new C.bT(A.A,0.5,A.x,null,0,D.dcA,null,null)
D.de8=w([A.ju,A.hG],x.O)
D.eda=new C.bT(A.A,0.5,A.x,null,0,D.de8,null,null)
D.aLs=new C.aT(9,9)
D.edj=new C.aT(1.4,1.4)
D.edZ=new C.y(0,-4)
D.ej2=new C.y(0.22,4)
D.eq4=new C.y(0.8,-4)
D.eyR=new C.y(0.58,4)
D.eBw=new C.br("Moon",1.62,4291941851)
D.eC3=new C.br("Neptune",11.15,4284524026)
D.eCG=new C.br("Sun",274,4294688548)
D.eCW=new C.br("Mercury",3.7,4288455599)
D.eD1=new C.br("Earth",9.81,4281908728)
D.eD3=new C.br("Mars",3.71,4294472049)
D.eDm=new C.br("Venus",8.87,4294759245)
D.eDr=new C.br("Saturn",10.44,4294829706)
D.eDO=new C.br("Jupiter",24.79,4294677052)
D.eHo=new C.a9(10,-8,18,-2)
D.eHp=new C.a9(14,-14,20,14)
D.eHq=new C.a9(20,-2,30,2)
D.eHs=new C.a9(4,-13,30,-3)
D.eHu=new C.a9(8,-7,12,7)
D.eHA=new C.a9(-12,12,12,19)
D.eHB=new C.a9(-12,14,12,22)
D.eHC=new C.a9(-12,-22,12,8)
D.eHD=new C.a9(-12,-25,12,19)
D.eHE=new C.a9(-12,-26,12,-6)
D.eHF=new C.a9(-12,-4,12,14)
D.eHG=new C.a9(-12,-6,10,6)
D.eHH=new C.a9(-14,20,14,24)
D.eHI=new C.a9(-14,6,14,10)
D.eHJ=new C.a9(-14,-17,14,15)
D.eHK=new C.a9(-14,-26,14,18)
D.eHL=new C.a9(-14,-4,14,20)
D.eHM=new C.a9(-15,-29,15,25)
D.eHN=new C.a9(-16,-16,16,16)
D.eHO=new C.a9(-16,-22,-9,18)
D.eHP=new C.a9(-16,-24,16,-10)
D.eHQ=new C.a9(-16,-2,16,20)
D.eHS=new C.a9(-18,20,18,24)
D.eHT=new C.a9(-18,-18,18,20)
D.eHU=new C.a9(-20,12,20,22)
D.eHV=new C.a9(-20,-28,20,26)
D.eHW=new C.a9(-22,14,22,18)
D.aLS=new C.a9(-22,-26,22,24)
D.eHX=new C.a9(-22,-3,22,3)
D.eHY=new C.a9(-22,-4,22,12)
D.eHZ=new C.a9(-24,-12,10,22)
D.eI_=new C.a9(-24,-14,22,8)
D.eI0=new C.a9(-24,-6,24,20)
D.aLT=new C.a9(-24,-9,24,9)
D.eI1=new C.a9(-25,14,25,19)
D.eI2=new C.a9(-26,-14,14,8)
D.eI3=new C.a9(-26,-4,26,20)
D.eI4=new C.a9(-26,-6,4,6)
D.aLU=new C.a9(-28,-13,28,13)
D.eI5=new C.a9(-28,-16,28,16)
D.eI6=new C.a9(-28,-16,28,8)
D.eI7=new C.a9(-28,-22,28,22)
D.eI8=new C.a9(-30,-12,30,14)
D.eI9=new C.a9(-30,-14,0,14)
D.eIa=new C.a9(-30,-18,30,20)
D.eIb=new C.a9(-30,-28,30,14)
D.eIc=new C.a9(-30,-2,30,18)
D.eId=new C.a9(-30,-4,30,18)
D.eIe=new C.a9(-32,-17,32,17)
D.eIf=new C.a9(-32,-28,32,18)
D.eIg=new C.a9(-33,-21,33,17)
D.eIh=new C.a9(-34,14,34,26)
D.a5N=new C.a9(-34,-18,34,18)
D.eIi=new C.a9(-34,-4,34,7)
D.eIj=new C.a9(-36,-24,36,20)
D.eIk=new C.a9(-38,-22,38,22)
D.eIl=new C.a9(-3,12,3,22)
D.eIm=new C.a9(-3,5,3,15)
D.eIo=new C.a9(-46,-34,46,28)
D.eIp=new C.a9(-48,-3,48,3)
D.eIs=new C.a9(-6,18,24,24)
D.eIt=new C.a9(-6,5,6,12)
D.eIu=new C.a9(-6,-22,6,-15)
D.eIv=new C.a9(-9,-16,9,22)
D.eIw=new C.a9(-4.5,-24,4.5,-21.2)
D.eIy=new C.a9(14,-9,17.5,9)
D.e0R={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aML=new C.eM(D.e0R,5,x.R)
D.e0v={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eLq=new C.eM(D.e0v,10,x.R)
D.eNo=new C.ar(24,44)
D.eNt=new C.ar(300,300)
D.eNN=new C.ar(54,38)
D.eNU=new C.ar(66,38)
D.b5p=new C.fj(2,null,null,null,null,A.bt,null,null,null,null)
D.eOQ=new C.a7(16,16,D.b5p,null)
D.aNK=new C.hL(3,12,12,0.82,null)
D.fvN=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aNV=new C.b1(D.fvN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d6l=w([A.cf,A.cd,A.b2,A.aS,A.ps,A.cf],x.O)
D.eUI=new C.fS(A.A,0,6.283185307179586,A.x,D.d6l,null,null)
D.f2G=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PO,null,null,null)
D.eVX=new C.eq("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f2G)
D.aQk=new C.G(!0,A.az,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVY=new C.eq("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQk)
D.f03=new C.G(!0,A4.Kp,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW0=new C.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f03)
D.f4T=new C.G(!0,A.kd,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW6=new C.eq("AI",null,null,A.cO,null,null,null,null,null,null,D.f4T)
D.f_P=new C.G(!0,A.c1,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW7=new C.eq("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f_P)
D.aOJ=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWo=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWV=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXd=new C.G(!0,A.cr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new C.G(!0,A.c1,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY2=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYv=new C.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLW=new C.cR(A.hJ,A.dE,6)
D.d08=w([D.eLW],x.q)
D.eZl=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d08,null,null,null)
D.eZo=new C.G(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZr=new C.G(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new C.G(!0,A.c1,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP5=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_b=new C.G(!0,A.az,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_c=new C.G(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f06=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new C.G(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f15=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLZ=new C.cR(A.aX,A.J,3)
D.axR=w([D.eLZ],x.q)
D.f18=new C.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axR,null,null,null)
D.f1d=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1U=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PO,null,null,null)
D.f2n=new C.G(!0,A.az,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2V=new C.G(!0,A.ti,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3a=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3v=new C.G(!0,A.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3A=new C.G(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3F=new C.G(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3L=new C.G(!0,A.az,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4b=new C.G(!0,A.c1,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4o=new C.G(!0,A.n1,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4p=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPK=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5c=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLN=new C.cR(A.w,A.J,5)
D.cPo=w([D.eLN],x.q)
D.f5d=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cPo,null,null,null)
D.f5i=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axR,null,null,null)
D.f5x=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5C=new C.G(!0,A.fy,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5T=new C.G(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6n=new C.G(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new C.G(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new C.G(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7H=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ5=new C.G(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8j=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8K=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQh=new C.G(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8N=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9x=new C.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7M=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new C.G(!0,A.ti,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faf=new C.G(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZw=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faE=new C.x("\u26a0\ufe0f ",null,D.eZw,null,null,null,null,null,null,null,null,null)
D.faQ=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fbg=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fck=new C.x("Pick one, then change it and see what happens.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fco=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f_A=new C.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdi=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.f_A,null,null,null,null,null,null,null,null,null)
D.fdF=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a72,null,null,null,null,null,null,null,null,null)
D.feP=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fft=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fg0=new C.x("Make it yours",null,A.kA,null,null,null,null,null,null,null,null,null)
D.fgf=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a78,null,null,null,null,null,null,null,null,null)
D.f3Q=new C.G(!0,A.jc,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiw=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f3Q,null,null,null,null,null,null,null,null,null)
D.fiL=new C.x("YOUR DECODING",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fiX=new C.x("5G",null,T.aP8,null,null,null,null,null,null,null,null,null)
D.f68=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new C.x("WHAT HAPPENS",null,D.f68,null,null,null,null,null,null,null,null,null)
D.flN=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new C.x("Change the words and pictures on the three slabs.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fmC=new C.x("All the parts and wires will be removed.",null,A.hE,null,null,null,null,null,null,null,null,null)
D.fmW=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fnv=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fom=new C.x("INTERCEPTED",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.foH=new C.x("\ud83c\udfaf Challenges",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fpb=new C.x("Remove this part",null,U.aOM,null,null,null,null,null,null,null,null,null)
D.fpt=new C.x("Clear the board?",null,A.dn,null,null,null,null,null,null,null,null,null)
D.f5D=new C.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpI=new C.x("How the Lab works",null,D.f5D,null,null,null,null,null,null,null,null,null)
D.eYe=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq0=new C.x("Electronics Lab",null,D.eYe,null,null,null,null,A.a2,null,1,null,null)
D.fq3=new C.x("?",null,M.aQe,null,null,null,null,null,null,null,null,null)
D.f3K=new C.G(!0,A.aS,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new C.x("Planet Earth",null,D.f3K,null,null,null,null,null,null,null,null,null)
D.fri=new C.x("Ready-made circuits",null,A.dm,null,null,null,null,null,null,null,null,null)
D.frT=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fsb=new C.x("UNIVERSE EXPLORER",null,I.a77,null,null,null,null,null,null,null,null,null)
D.fuG=new C.x("SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.f8t=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvc=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f8t,null,null,null,null,null,null,null,null,null)
D.fwn=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a72,null,null,null,null,null,null,null,null,null)
D.fwQ=new C.x("NGMY",null,A.uF,null,null,null,null,null,null,null,null,null)
D.fx2=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IV,null,null,null,null,null,null,null,null,null)
D.fxp=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kB,null,null,null,null,null,null,null,null,null)
D.fym=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fyo=new C.x("TOOLBOX",null,I.a77,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hbV=null
$.hbU=null
$.hhY=0
$.hJO=C.T(x.N,x.k)
$.hKo=C.T(x.N,x.k)
$.hbf=null
$.hK9=C.T(x.N,x.k)
$.hLc=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ifF","bDl",()=>{var v="led"
return C.a([B.axw("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fek(),v),B.axw("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fel(),v),B.axw("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fem(),v),B.axw("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fet(),v),B.axw("Not both","Make the light go OFF only when both switches are ON.",2,new B.feu(),v),B.axw("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fev(),"buzzer")],C.ax("O<ba1>"))})
w($,"ig6","bDm",()=>C.a([B.ow("UNIVERSE","Earth, space and gravity",A.a03,A.aS,new B.feL()),B.ow("ELECTRONICS LAB","Batteries, wires, real circuits",Ai.a_q,A.aS,new B.feM()),B.ow("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_h,A.b2,new B.feN()),B.ow("TOOLBOX","Converter, clock, games",S.akk,A.cs,new B.feY()),B.ow("MOLECULE MAKER","Join atoms into real molecules",A.N0,A.hw,new B.ff_()),B.ow("DNA LAB","Copy DNA, build a protein",D.a_h,A.bZ,new B.ff0()),B.ow("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yb,A.b2,new B.ff1()),B.ow("BALANCE LAB","Levers, weight and torque",D.bES,A.aM,new B.ff2()),B.ow("GEAR LAB","Teeth, speed and force",A.BE,A.cs,new B.ff3()),B.ow("LASER MAZE","Bend the beam with mirrors",I.akI,A.ay,new B.ff4()),B.ow("LIGHT MIXER","Match colours with light",D.bCz,A.b8,new B.ff5()),B.ow("CIPHER LAB","Make and crack secret codes",A.ym,A.aS,new B.feO()),B.ow("REACTION LAB","Wire parts together",A.yq,A.bu,new B.feP()),B.ow("SPARK PAINTER","Paint with light",A.a_j,A.bZ,new B.feQ()),B.ow("ROCKET LANDER","Land softly on the pad",A.nh,A.aS,new B.feR()),B.ow("ORBIT STUDIO","Slingshot planets",A.mu,A.cs,new B.feS()),B.ow("SWARM STUDIO","A living school of fish",A.N0,A.b2,new B.feT()),B.ow("CHAIN BURST","One tap, a whole chain",A.h8,A.bZ,new B.feU()),B.ow("TITLE ANIMATOR","Make a moving title",A.yi,A.cd,new B.feV()),B.ow("CIRCUIT LAB","Connect logic, learn it",A.a_K,A.cr,new B.feW()),B.ow("MARBLE MUSIC","Marbles ring the notes",D.bCe,A.b8,new B.feX()),B.ow("ORBIT SEQUENCER","Planets play the tune",D.bEF,A.bt,new B.feZ())],C.ax("O<brR>")))
w($,"ihB","qa",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Q4[v]
t.n(0,u.a,u)}return t})
w($,"ifG","ahq",()=>C.a([B.Fi("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.few()),B.Fi("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fex()),B.Fi("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fey()),B.Fi("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fez()),B.Fi("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.feA()),B.Fi("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fen()),B.Fi("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.feo()),B.Fi("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fep()),B.Fi("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.feq()),B.Fi("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fer()),B.Fi("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fes())],C.ax("O<ba2>")))
w($,"ig8","hql",()=>C.a([B.a0m("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.ci,new B.ffd()),B.a0m("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cf,A.bG,new B.ffe()),B.a0m("Breathe","Calm down in a minute","\ud83e\udee7",A.hw,A.cy,new B.fff()),B.a0m("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b7,new B.ffg()),B.a0m("Memory Match","Find the pairs","\ud83c\udccf",A.aS,A.ce,new B.ffh()),B.a0m("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cd,A.bo,new B.ffi()),B.a0m("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.ffj()),B.a0m("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new B.ffk())],C.ax("O<btb>")))
w($,"ig7","hqk",()=>C.a([B.aeK("EARTH GLOBE","Turn it, tap a country",A.mu,A.aS,new B.ff6()),B.aeK("SOLAR SYSTEM","The Sun and its worlds",D.bCi,A.aM,new B.ff7()),B.aeK("GRAVITY LAB","Drop, weigh, orbit",D.alr,A.cs,new B.ff8()),B.aeK("BLACK HOLE","Throw in a star",A.Fx,A.bt,new B.ff9()),B.aeK("GALAXY","Build, tilt, collide",A.y_,A.h2,new B.ffa()),B.aeK("SIZE COMPARE","Earth next to a star",D.bCB,A.bZ,new B.ffb()),B.aeK("SEASONS & MOON","Why it is summer",A.vv,A.bu,new B.ffc())],C.ax("O<bt6>")))})()};
(a=>{a["84a5KY9p0xJbdHr1xw5FXcVwKm8="]=a.current})($__dart_deferred_initializers__);