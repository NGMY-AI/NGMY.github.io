((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A5,Z,A_,A6,A0,R,A7,A8,A9,A1,Aa,A2,N,Ab,Ac,Ad,Ae,T,P,U,Af,Ag,V,W,E,K,G,I,A3,O,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bC0(d){return C.i7c(d)},
i7c(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bC0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rh(B.nn(""),d,A.i0,null,null).dh(0,A.a_N),$async$bC0)
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
return B.i($async$bC0,v)},
ijp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RY[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.RY,new C.fKq())
if(w==null)w=A.d.gH(D.RY)
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
return new C.alb(w.a,w.b,m,w,s,!1)},
icV(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sm,new C.fz5(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
irZ(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p6(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Y.aQ(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qF().al(0,p)||J.eH(s,o)||J.ad(t)>=8)continue
J.c7(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dxJ[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.i.aq(r,3)*0.3,0.1,0.9)
J.c7(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.i.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dD(J.t(g,3))),0,1)
if(J.eH(s,f)&&J.eH(s,e)&&!J.z(f,e))J.c7(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cq:a0)
while(a0.C()){a2=a0.gR(a0)
J.c7(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mZ(a0,B.w(a1==null?"":a1),t,i,A.a_)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alb(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ihT(d){var w,v,u=C.hlq()
d.B(u)
for(w=0;w<60;++w)u.vK(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fGP(u))&&!A.d.cE(v,new C.fGQ())},
ihS(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qF().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.i.V(t.r)+" ohms")
if(A.d.q(D.dw0,p))q.push("level "+A.i.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.i.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i5x(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ijo(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qF().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sm[u]
if(A.d.aV(w,new C.fKn(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fKo(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.ad(A.d.cG(w,0,new C.fKp())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qF().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alb:function alb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKq:function fKq(){},
fz5:function fz5(){},
fGP:function fGP(d){this.a=d},
fGQ:function fGQ(){},
fKn:function fKn(d){this.a=d},
fKo:function fKo(d){this.a=d},
fKp:function fKp(){},
WP:function WP(d,e){this.c=d
this.a=e},
bmr:function bmr(d,e,f,g,h){var _=this
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
ej5:function ej5(d){this.a=d},
ej6:function ej6(d,e,f){this.a=d
this.b=e
this.c=f},
ej7:function ej7(d){this.a=d},
eji:function eji(d){this.a=d},
ejj:function ejj(d,e){this.a=d
this.b=e},
eje:function eje(d){this.a=d},
ejc:function ejc(d,e){this.a=d
this.b=e},
ejd:function ejd(d,e,f){this.a=d
this.b=e
this.c=f},
ejf:function ejf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eja:function eja(d){this.a=d},
ejb:function ejb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejg:function ejg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ej9:function ej9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejh:function ejh(d,e){this.a=d
this.b=e},
ej8:function ej8(d,e){this.a=d
this.b=e},
ejm:function ejm(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejo:function ejo(d,e){this.a=d
this.b=e},
ejp:function ejp(d,e){this.a=d
this.b=e},
ejq:function ejq(d,e){this.a=d
this.b=e},
ejr:function ejr(d,e){this.a=d
this.b=e},
bCl(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fru,w,w,w),B.d(e,w,w,w,w,w,w,B.n(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hzj(d,e,f,g){var w=null,v=B.l(24),u=B.L(f.j(0.6),A.r,1)
return B.as(B.r(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.n(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.xq,A.K,w,w),A.aB,B.bV(A.fS,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.bhi,w,u,v,w,w,A.n),w,w,w,w,A.ad,w,w,w),w,w,w)},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vs:function vs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xb:function Xb(d){this.a=d},
aG6:function aG6(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m6$=i
_.f9$=j
_.h6$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
eyo:function eyo(){},
eyI:function eyI(d){this.a=d},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyJ:function eyJ(){},
eyK:function eyK(){},
eyq:function eyq(d,e,f){this.a=d
this.b=e
this.c=f},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyd:function eyd(d){this.a=d},
eye:function eye(d){this.a=d},
eyc:function eyc(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyy:function eyy(d){this.a=d},
eys:function eys(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyC:function eyC(d,e){this.a=d
this.b=e},
eyv:function eyv(d,e){this.a=d
this.b=e},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyu:function eyu(d){this.a=d},
bjm:function bjm(d,e){this.b=d
this.a=e},
aO4:function aO4(){},
bA0:function bA0(){},
huu(){var w=$.hus
return w==null?$.hus=$.rk().cW7("assets/data/three.min.js"):w},
hut(){var w=$.hur
return w==null?$.hur=C.cOV():w},
cOV(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOV=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jo(0,"assets/data/body3d.bin"),$async$cOV)
case 3:d=a1
$.huv=J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)
t=B.a4z(d)
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
e=D.dk5[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4t(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b4p))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bci(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOV,v)},
c6t(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6t=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.hut(),C.huu()],x.D),x.K),$async$c6t)
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
return B.i($async$c6t,v)},
aU9:function aU9(d,e,f){this.a=d
this.b=e
this.c=f},
a4t:function a4t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bci:function bci(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VG:function VG(d){this.a=d},
aEA:function aEA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.m6$=t
_.f9$=u
_.h6$=v
_.bx$=w
_.a9$=a0
_.c=_.a=null},
dPf:function dPf(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOS:function dOS(d){this.a=d},
dOT:function dOT(){},
dPg:function dPg(){},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOW:function dOW(){},
dOX:function dOX(d){this.a=d},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dOY:function dOY(d){this.a=d},
dON:function dON(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(d){this.a=d},
dOP:function dOP(d){this.a=d},
dP5:function dP5(d){this.a=d},
dP6:function dP6(d,e){this.a=d
this.b=e},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP9:function dP9(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dPa:function dPa(d){this.a=d},
dP2:function dP2(d){this.a=d},
dPb:function dPb(d){this.a=d},
dP1:function dP1(d){this.a=d},
dPc:function dPc(d){this.a=d},
dP0:function dP0(d){this.a=d},
dPd:function dPd(d){this.a=d},
dP_:function dP_(d){this.a=d},
aN7:function aN7(){},
aN8:function aN8(){},
c6u:function c6u(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6v:function c6v(d,e){this.a=d
this.b=e},
c6w:function c6w(d){this.a=d},
aA0(d,e,f,g,h){return new C.bd3(d,e,f,g,h)},
hbB(d,e,f,g,h,i){return $.i2P.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVQ(d,e,f,i,g,h))},
yM:function yM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D4:function D4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nM:function nM(d,e,f){this.a=d
this.b=e
this.c=f},
bd3:function bd3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsl:function fsl(){},
fsm:function fsm(){},
fsn:function fsn(){},
fsu:function fsu(){},
fsv:function fsv(){},
fsw:function fsw(){},
VM:function VM(d){this.a=d},
aEC:function aEC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.m6$=n
_.f9$=o
_.h6$=p
_.bx$=q
_.a9$=r
_.c=_.a=null},
dQV:function dQV(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQC:function dQC(){},
dQW:function dQW(){},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQD:function dQD(d,e,f){this.a=d
this.b=e
this.c=f},
dQs:function dQs(){},
dQt:function dQt(){},
dQu:function dQu(d){this.a=d},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQE:function dQE(){},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQG:function dQG(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQA:function dQA(d){this.a=d},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQQ:function dQQ(d){this.a=d},
dQN:function dQN(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQU:function dQU(d,e){this.a=d
this.b=e},
bdm:function bdm(d,e){this.b=d
this.a=e},
cVQ:function cVQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNc:function aNc(){},
bzL:function bzL(){},
hUv(){return new C.Oh(null)},
Rk(d,e,f,g,h){return new C.bvi(d,e,f,g,h)},
btF(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hc8(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Oh:function Oh(d){this.a=d},
Lj:function Lj(d,e){this.a=d
this.b=e},
Bb:function Bb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aET:function aET(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX5:function dX5(d){this.a=d},
dX8:function dX8(d,e){this.a=d
this.b=e},
dX7:function dX7(d){this.a=d},
bvi:function bvi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsM:function fsM(){},
fsN:function fsN(){},
fsO:function fsO(){},
fsP:function fsP(){},
fsQ:function fsQ(){},
fsR:function fsR(){},
fsS:function fsS(){},
fsT:function fsT(){},
fsU:function fsU(){},
btG:function btG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8b:function f8b(d){this.a=d},
f8a:function f8a(d,e){this.a=d
this.b=e},
f88:function f88(d){this.a=d},
f8c:function f8c(d){this.a=d},
f89:function f89(d,e){this.a=d
this.b=e},
aga:function aga(d,e,f){this.c=d
this.d=e
this.a=f},
af1:function af1(d,e,f){this.c=d
this.d=e
this.a=f},
Rd:function Rd(d,e,f,g,h,i,j,k,l,m){var _=this
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
buG:function buG(d,e){this.b=d
this.a=e},
bub:function bub(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc0:function bc0(d,e){this.b=d
this.a=e},
aJ6:function aJ6(d,e){this.c=d
this.a=e},
aJ7:function aJ7(d,e,f){var _=this
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
f7S:function f7S(d){this.a=d},
f7R:function f7R(d){this.a=d},
f7Q:function f7Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7P:function f7P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7N:function f7N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7M:function f7M(d,e,f){this.a=d
this.b=e
this.c=f},
f7O:function f7O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7L:function f7L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8_:function f8_(d){this.a=d},
f7Z:function f7Z(d){this.a=d},
f80:function f80(d,e){this.a=d
this.b=e},
f81:function f81(d,e){this.a=d
this.b=e},
f82:function f82(d,e){this.a=d
this.b=e},
f7Y:function f7Y(d,e,f){this.a=d
this.b=e
this.c=f},
f83:function f83(d,e,f){this.a=d
this.b=e
this.c=f},
f7X:function f7X(d){this.a=d},
f7T:function f7T(d){this.a=d},
f84:function f84(d){this.a=d},
f85:function f85(d){this.a=d},
f7W:function f7W(d,e){this.a=d
this.b=e},
f86:function f86(d,e){this.a=d
this.b=e},
f7V:function f7V(d,e){this.a=d
this.b=e},
f87:function f87(d,e){this.a=d
this.b=e},
f7U:function f7U(d,e){this.a=d
this.b=e},
f7J:function f7J(){},
f7K:function f7K(){},
bth:function bth(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsI:function bsI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcH:function bcH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsK:function bsK(d,e,f){this.b=d
this.c=e
this.a=f},
bwM:function bwM(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOU:function aOU(){},
hAL(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.o(w,0)),u=e.aJ(0,new B.o(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjl(d,e,f,g,h,i){return $.i3n.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dr_(d,e,f,i,g,h))},
a1D:function a1D(d,e){this.a=d
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
D8:function D8(d,e){this.a=d
this.b=e},
a_C:function a_C(d,e){this.a=d
this.b=e},
afZ:function afZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1Q:function a1Q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dj:function Dj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acT:function acT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad9:function ad9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af4:function af4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjj:function bjj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dr3:function dr3(d){this.a=d},
dr4:function dr4(d){this.a=d},
dr0:function dr0(d,e){this.a=d
this.b=e},
dr1:function dr1(d){this.a=d},
dr2:function dr2(d){this.a=d},
dr5:function dr5(d){this.a=d},
dr6:function dr6(d){this.a=d},
dr7:function dr7(d){this.a=d},
dr8:function dr8(d){this.a=d},
dr9:function dr9(d){this.a=d},
dra:function dra(d){this.a=d},
drb:function drb(d){this.a=d},
drc:function drc(d){this.a=d},
drd:function drd(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xa:function Xa(d){this.a=d},
aG5:function aG5(d,e,f,g,h,i,j){var _=this
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
_.a9$=j
_.c=_.a=null},
exJ:function exJ(d){this.a=d},
exy:function exy(d){this.a=d},
exA:function exA(){},
exB:function exB(){},
exE:function exE(){},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
exG:function exG(d){this.a=d},
exH:function exH(d){this.a=d},
exC:function exC(){},
exD:function exD(d){this.a=d},
ey8:function ey8(d){this.a=d},
exI:function exI(){},
exu:function exu(d){this.a=d},
exL:function exL(d){this.a=d},
exK:function exK(d){this.a=d},
exN:function exN(){},
exM:function exM(d,e){this.a=d
this.b=e},
exx:function exx(){},
exv:function exv(d){this.a=d},
exw:function exw(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey5:function ey5(d){this.a=d},
ey7:function ey7(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
ey4:function ey4(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey0:function ey0(d){this.a=d},
exY:function exY(d){this.a=d},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d){this.a=d},
exz:function exz(){},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exS:function exS(d){this.a=d},
exV:function exV(d){this.a=d},
exR:function exR(d){this.a=d},
exW:function exW(d){this.a=d},
exQ:function exQ(d){this.a=d},
exP:function exP(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
bjk:function bjk(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dr_:function dr_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aO2:function aO2(){},
hGd(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcK()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hlq(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5C(w,v,u,A.cN,B.T(x.N,x.y))},
hOb(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hlr(d),d.d*f.b)},
hlr(d){return 42+(D.mt.al(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u_:function u_(d,e,f,g){var _=this
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
aby:function aby(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acF:function acF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5C:function a5C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPP:function bPP(){},
bQ_:function bQ_(d){this.a=d},
bPV:function bPV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ0:function bQ0(d){this.a=d},
bQ1:function bQ1(d){this.a=d},
bQ3:function bQ3(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
bQ2:function bQ2(d){this.a=d},
bQ5:function bQ5(d,e,f){this.a=d
this.b=e
this.c=f},
bQ6:function bQ6(d){this.a=d},
bPR:function bPR(d){this.a=d},
bPS:function bPS(d){this.a=d},
bPQ:function bPQ(d){this.a=d},
bPT:function bPT(d,e,f){this.a=d
this.b=e
this.c=f},
bPU:function bPU(d){this.a=d},
bPO:function bPO(d){this.a=d},
bQ7:function bQ7(d,e){this.a=d
this.b=e},
bPW:function bPW(d,e){this.a=d
this.b=e},
bPZ:function bPZ(d){this.a=d},
bPY:function bPY(d){this.a=d},
bPX:function bPX(d){this.a=d},
ak_:function ak_(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKb:function bKb(){},
bKc:function bKc(){},
mZ:function mZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctF:function ctF(d){this.a=d},
irT(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fWh(),c8=new C.fWj(),c9=new C.fWk(),d0=new C.fWi(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.bO,A.bK))
d2.ah(D.epR,D.emM,c8.$2(A.dP,1.4))
d2.ah(D.emr,D.emp,c8.$2(A.bw,2.4))
d2.ah(D.ems,U.aLA,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fG.j(0.5))
d1.y=A.H7
d2.N(D.em7,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.i.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRI,A.aP,A.cu))
d2.N(A.cI,16,c7.$1(A.bw))
d2.N(A.cI,13,c7.$1(c6?A.aH.j(0.85):A.U))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ac,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.epJ,2.4,c7.$1(c6?A.be:A.am))
d2.N(D.eqB,2.4,c7.$1(A.am))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.e8))
d1=$.Q().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bv())
d2.af(s,c7.$1(A.fG.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ac,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8A,D.aLW,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c7.$1(A.eU))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.i2,3,c7.$1(c6?A.be:A.am))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IG[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bw,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.epx,D.emw,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.H,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bv())
d2.af(w,d0.$3(D.f7B,A.aS,A.cZ))
d2.ar(D.f6I,c7.$1(A.db))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.H,D.emD,c8.$2(A.bP,2.4))
d2.ah(A.a8x,D.emC,c8.$2(A.hu,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dy.j(1-u)))}return!0
case"torch":if(c6){v=A.i.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.bM.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f7H,A.bm,A.cr))
n=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bv())
d2.af(n,c7.$1(A.e8))
d2.N(D.emI,7,c7.$1(c6?A.c:A.db))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.ny))
if(c6)m=d3.ax>0.5||A.o.F(A.i.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.brB
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mf
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.epX,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f7N,A.bP,A.bm))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bM.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.H,7,22),c7.$1(A.cZ))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.ny))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.F(A.i.bh(d4),60)),2,"0"),D.emJ,A.b5,6.5)
d2.N(D.emZ,4,c7.$1(A.db))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jx,10,c7.$1(c6?A.bi:A.bw))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eqF,A.c,16)
d1.restore()
d2.N(A.kB,6,c7.$1(A.d5))
d2.N(A.kB,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cC(B.bX(A.Jx,14+v*6+A.i.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bi.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.epW,D.eqy,c8.$2(A.bw,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f7C,A.bP,A.am))
d2.N(D.aLE,8,c7.$1(A.as))
d2.N(D.aLE,4.5,c7.$1(c6?A.aH:A.cr))
d2.N(D.epU,2.2,c7.$1(c6&&A.o.F(A.i.bh(d4*1.6),2)===0?A.ay:A.ks))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eq4,A.ay,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f7K,A.j0,A.fn))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dA))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b5))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.epP,4,c7.$1(A.aV))
d2.N(D.emE,2.4,c7.$1(A.ay))
d2.N(D.emW,2.4,c7.$1(A.be))
return!0
case"heartmon":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.am(c9.$5(-26,-18,52,28,3),c7.$1(A.dA))
if(c6){d1=$.Q()
t=B.a([],x.v)
k=new B.aG(d1.r,A.ai,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.i.F((o+25)/50-d1,1)
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
k.ab()}}d2.af(k,c8.$2(A.b5,1.8))
d5.$5(d2,"72",D.emF,A.hn,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eq9,A.hn.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.epZ,3,c7.$1(c6?A.be:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cz.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ac,1.6))
d2.ar(D.f7E,c7.$1(F.u5))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pk(0,-1,1)
d2.bZ(B.bs(A.H,8,14),c7.$1(A.cF))
d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.c6))
d2.N(D.enH,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.i.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ac,1))}}return!0
case"lighthouse":d1=$.Q().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bv())
d2.af(g,d0.$3(D.f8e,A.c,A.bC))
d2.ar(D.f8a,c7.$1(c6?A.dy:A.bw))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bv())
d2.af(q,c7.$1(A.ek))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.45)))
d1=c7.$1(A.dy.j(0.35))
d1.y=A.H7
d2.N(D.em8,14,d1)}return!0
case"discoball":d2.ah(D.ema,Q.aLv,c8.$2(A.db,1.4))
d2.N(A.H,16,d0.$3(D.f7l,A.aP,A.am))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.ds,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.ds,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dl8[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f7i,A.cu,A.am))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f7b,A.aO,A.bK))
d2.ah(H.aLx,D.emc,c8.$2(A.bw,1.6))
d2.N(D.emd,2.2,c7.$1(c6?A.ay:A.bw))
d=c6&&A.i.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a69[p]
if(c6)d1=d?A.ba:A.eX
else d1=A.cr
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.H,D.a8r,c8.$2(A.bK,4))
d1.restore()
d2.ah(D.epF,D.eq2,c8.$2(A.bK,4))
d2.ar(D.f89,c7.$1(c6?A.ba.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCj[p]+1,d1,10,14,2)
q=B.ar(A.bM,A.cZ,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f7D,A.bP,A.bm))
for(p=0;p<2;++p){o=D.aCj[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fp:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cF.j(0.5))
t.y=N.ot
d2.am(d1,t)}}d2.ah(D.en4,D.enp,c8.$2(A.as,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cr))
for(d1=d4*90,v=0;v<9;++v){a1=A.i.F(d1+v*40,360)
l=c6?new Am.pj(1,a1,0.8,1).jG():A.e8
if(c6){t=c7.$1(l.j(0.45))
t.y=N.ot
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.db))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f7r,A.cz,A.FU))
d2.N(D.eqa,8,c7.$1(A.rD))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fG,2.4))}d1.restore()
d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bK,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.i.F(d1+v*0.2,1)*26),2.2,c7.$1(A.ht))
d2.N(D.eoj,3.2,c7.$1(A.ht.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f7F,A.hV,A.rC))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cr))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.e8))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cF.j(0.4))
d1.y=N.ot
d2.N(D.emY,8,d1)}return!0
case"headphones":d2.cC(B.bs(A.dG,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Sz[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bq,A.oi))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.o(o,10),10+v*5+A.i.F(d1,5))
h=t?2.2:-0.9
d2.cC(q,h,1.6,!1,c8.$2(A.eL.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.i.F(d4*14,8)),A.kK,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cr))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cr))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f7g,A.db,A.e8))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dA))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.emj,A.b5,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FB,A.hn,j)
d1.toString
d5.$5(d2,"\u2665",new B.o(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.i.bh(d4*2),6)),A.dG,A.c,7)}return!0
case"tablet":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(M.ny))
d2.am(c9.$5(-30,-22,60,44,6),c8.$2(A.bK,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(a3),$.nq(),!0)
d1.translate(-27,-19)
L.M7(d2,D.feA,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.w9))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dJ,A.d6))
d2.am(a4,c8.$2(A.aU,1.2))
d2.N(D.aM3,9,c7.$1(A.as))
d2.N(D.aM3,6,c8.$2(A.cZ,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dA))
d1=A.i.ad(d3.db,1)
t=A.i.ad(c6?d3.dx:d3.e,1)
q=c6?A.b5:A.am
d5.$5(d2,d1+"\u2192"+t+"V",D.eot,q,8.2)
d2.N(D.emN,2.4,c7.$1(c6?A.be:A.aM))
d5.$5(d2,"IN",D.eq3,A.ac,6)
d5.$5(d2,"OUT",D.eob,A.ac,6)
return!0
case"regulator":a5=c6?A.i.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bK,A.ay,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a8p,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f7c,A.e8,A.i6))
d5.$5(d2,"7805",D.a8A,A.ac,8)
for(p=0;p<3;++p){d1=D.drB[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.eb))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.i.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eqC,A.bp,9)
return!0
case"diode":d2.ah(D.aM7,D.aLQ,c8.$2(A.eb,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.av.j(0.85)))
d2.ar(D.f6W,c7.$1(A.bp))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dy.j(0.4))
t.y=A.kU
d2.am(d1,t)}d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.aV))
d5.$5(d2,"one way",D.epS,A.aD,8)
return!0
case"ldr":d2.ah(D.aM7,D.a8A,c8.$2(A.eb,2.4))
d2.ah(D.aLW,D.aLQ,c8.$2(A.eb,2.4))
d2.N(A.H,12,c7.$1(A.cZ))
d2.N(A.H,12,c8.$2(A.rI,1.6))
d1=$.Q()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bM,1.4))
d1=B.ar(A.bw,A.dy,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.i.V(20+980*(1-d3.f))+"\u03a9",D.epG,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.ep
break
case"sonytv":t=A.rw
break
case"appletv":t=A.eb
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
h.clipRRect(B.nS(a3),$.nq(),!0)
h.translate(t,q)
L.hhp(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.ens,1.6,c7.$1(A.b5))}else{d2.am(a3,c7.$1(D.w9))
h=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bv())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.db))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fK[p]
t=$.Q()
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
h=new B.bv()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.db))}d5.$5(d2,"SONY",D.ep6,A.bP,5.5)
break
case"appletv":d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zf))
d5.$5(d2,"Apple TV",D.eou,A.bw,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.bpQ))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.ds,0.6))}d5.$5(d2,"B&O",D.eqx,F.u5,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.Eu
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
t.clipRRect(B.nS(a3),$.nq(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M7(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.am(a3,c7.$1(D.w9))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.e8))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eqI,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bm))}d2.N(A.a8n,1.6,c7.$1(A.as))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f7O,A.cu,A.bm))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(b7),$.nq(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M7(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.w9))
d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zf))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.bm))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f7S,A.bO,A.cu))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(b8),$.nq(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M7(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.w9))
d2.N(D.aLq,2,c7.$1(A.bK))
d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zf))
return!0
case"monitor":d2.am(c9.$5(-34,-28,68,40,3),c7.$1(A.ep))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(b9),$.nq(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M7(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.am(b9,c7.$1(D.w9))
d2.ar(D.f7Z,c7.$1(A.bm))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.db))
return!0
case"projector":if(c6){d1=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dy.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(c0),$.nq(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M7(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f7G,A.iG,A.db))
d2.N(D.aLC,7,c7.$1(A.as))
d2.N(D.aLC,4,c7.$1(c6?A.dy:A.cr))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.ds,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.ny))
d2.am(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aG($.Q().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c6(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.i.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b5))
d5.$5(d2,""+(88+A.o.F(A.i.bh(d4*2),5)),H.aLV,A.c,10)
d5.$5(d2,"km/h",D.eoh,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.db,A.e8))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nS(c4),$.nq(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M7(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bq.j(0.2))
d1.y=A.mf
d2.N(A.H,26,d1)}else d2.am(c4,c7.$1(A.U))
d2.ah(D.eqh,D.eqm,c8.$2(A.bm,4))
d2.ah(D.enu,D.enK,c8.$2(A.bm,4))
return!0}return!1},
fWh:function fWh(){},
fWj:function fWj(){},
fWk:function fWk(){},
fWi:function fWi(){},
hkh(d,e,f,g){return new C.ajY(d,g,f,e)},
Gt(d,e,f){return new C.bd4(d,e,f)},
ajY:function ajY(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajZ:function ajZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m6$=i
_.f9$=j
_.h6$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
bJQ:function bJQ(d,e){this.a=d
this.b=e},
bJR:function bJR(d){this.a=d},
bJP:function bJP(d){this.a=d},
bJS:function bJS(){},
bJT:function bJT(d){this.a=d},
bJU:function bJU(d,e,f){this.a=d
this.b=e
this.c=f},
bJO:function bJO(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e,f){this.a=d
this.b=e
this.c=f},
bJF:function bJF(d,e){this.a=d
this.b=e},
bJG:function bJG(){},
bJN:function bJN(d,e,f){this.a=d
this.b=e
this.c=f},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJH:function bJH(d,e){this.a=d
this.b=e},
bJI:function bJI(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d){this.a=d},
bK8:function bK8(d){this.a=d},
bK9:function bK9(){},
bJi:function bJi(){},
bKa:function bKa(d,e){this.a=d
this.b=e},
bK7:function bK7(d,e,f){this.a=d
this.b=e
this.c=f},
bK2:function bK2(d){this.a=d},
bK_:function bK_(d,e,f){this.a=d
this.b=e
this.c=f},
bK0:function bK0(d,e){this.a=d
this.b=e},
bK3:function bK3(d){this.a=d},
bJY:function bJY(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bK1:function bK1(d){this.a=d},
bK4:function bK4(d){this.a=d},
bJW:function bJW(d,e){this.a=d
this.b=e},
bJX:function bJX(d,e){this.a=d
this.b=e},
bK5:function bK5(d){this.a=d},
bJV:function bJV(d){this.a=d},
bK6:function bK6(d){this.a=d},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJq:function bJq(d){this.a=d},
bJo:function bJo(d){this.a=d},
bJr:function bJr(d,e,f){this.a=d
this.b=e
this.c=f},
bJn:function bJn(d,e){this.a=d
this.b=e},
bJu:function bJu(d,e){this.a=d
this.b=e},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJx:function bJx(d,e,f){this.a=d
this.b=e
this.c=f},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJy:function bJy(d,e,f){this.a=d
this.b=e
this.c=f},
bJl:function bJl(d,e){this.a=d
this.b=e},
bJz:function bJz(d,e,f){this.a=d
this.b=e
this.c=f},
bJk:function bJk(d,e){this.a=d
this.b=e},
bJA:function bJA(d){this.a=d},
bJB:function bJB(d){this.a=d},
bJs:function bJs(d){this.a=d},
bJt:function bJt(d){this.a=d},
bd4:function bd4(d,e,f){this.a=d
this.b=e
this.c=f},
fsx:function fsx(){},
fsy:function fsy(){},
fsz:function fsz(){},
fsk:function fsk(){},
fsA:function fsA(){},
fsj:function fsj(){},
fsB:function fsB(){},
fso:function fso(){},
fsi:function fsi(){},
fsp:function fsp(){},
fsh:function fsh(){},
fsq:function fsq(){},
fsg:function fsg(){},
fsr:function fsr(){},
fse:function fse(){},
fsf:function fsf(){},
fss:function fss(){},
fsc:function fsc(){},
fsd:function fsd(){},
fst:function fst(){},
fsb:function fsb(){},
Wn:function Wn(d){this.a=d},
aF4:function aF4(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e0U:function e0U(d,e){this.a=d
this.b=e},
e12:function e12(d){this.a=d},
e13:function e13(){},
e14:function e14(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e15:function e15(){},
e0T:function e0T(d){this.a=d},
e0S:function e0S(d,e,f){this.a=d
this.b=e
this.c=f},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(){},
e11:function e11(d){this.a=d},
e10:function e10(d){this.a=d},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(){},
e1_:function e1_(d,e,f){this.a=d
this.b=e
this.c=f},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0W:function e0W(){},
e17:function e17(d){this.a=d},
e18:function e18(d,e){this.a=d
this.b=e},
e16:function e16(){},
e19:function e19(d,e){this.a=d
this.b=e},
e1a:function e1a(d){this.a=d},
e1b:function e1b(d){this.a=d},
az6:function az6(d,e){this.c=d
this.a=e},
bbd:function bbd(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
cLe:function cLe(d){this.a=d},
bbc:function bbc(d,e){this.b=d
this.a=e},
cLd:function cLd(d){this.a=d},
azr:function azr(){},
azs:function azs(){},
aLz:function aLz(){},
bzO:function bzO(){},
irV(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vo,23)
$.Q()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vo,25,b8)
b8=B.K()
b8.sav(D.ezr.aK(0,v))
b9.N(A.vo,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bp.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vo,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bp.gp(0)
b9.N(A.vo,3,r)
c2.$5(b9,w?"V":"A",D.eqp,A.bp,12)
c2.$5(b9,w?A.i.ad(o,1)+" V":""+A.i.V(o*1000)+" mA",D.epM,A.as,9.5)
return!0
case"fan":b8=B.bn(D.f78,A.hQ)
$.Q()
s=B.K()
s.r=A.bw.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.am.gp(0)
b9.ar(D.f8_,s)
s=B.K()
s.r=A.U.j(0.6).gp(0)
b9.N(H.vp,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLu,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.ht.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.vp,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cu.gp(0)
b9.N(H.vp,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jZ.gp(0)
b9.N(H.vp,14,b8)
return!0
case"speaker":n=B.bn(D.aRI,A.r2)
$.Q()
b8=B.K()
b8.sav(D.asZ.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.ezN.aK(0,B.bX(A.cB,15)))
b9.N(A.cB,14+m,b8)
b8=B.K()
b8.r=A.db.gp(0)
b9.N(A.cB,5,b8)
b8=B.K()
b8.r=A.bm.gp(0)
b9.N(H.a8o,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.en3,6+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cC(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f7R,A.r2)
$.Q()
b8=B.K()
b8.sav(D.c88.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.aRK,A.iB)
s=B.K()
s.r=A.i6.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b5.j(0.12).gp(0)
b9.ar(D.aRK,b8)
c2.$5(b9,i+j+h,D.eq7,A.b5,21)}b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.eq5,2.4,b8)
b8=B.K()
b8.r=A.cu.gp(0)
b9.N(D.en8,2.4,b8)
return!0
case"calculator":l=B.bn(D.f7w,A.hR)
$.Q()
b8=B.K()
b8.sav(D.c7T.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.f7p,A.hA)
s=B.K()
s.r=(b7?A.Zs:D.bsb).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.epL,A.Ya,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.Us)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bn(D.f7k,A.hR)
$.Q()
b8=B.K()
b8.r=M.ny.gp(0)
b9.am(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.akc.gp(0)
b9.am(l,b8)
e=B.bn(D.f7a,A.hQ)
if(b7){b8=B.K()
b8.sav(D.c9s.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nS(e),$.nq(),!0)
b8.translate(-12,-25)
L.M7(b9,D.fec,c1,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bn(D.f77,A.hA)
s=B.K()
s.r=A.aV.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.b5.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.V(d*100)+"%",D.eoN,A.c,6)}else{b8=B.K()
b8.r=D.w9.gp(0)
b9.am(e,b8)}b8=B.bn(D.f8f,D.ezV)
s=B.K()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bn(D.f7Q,A.mw)
$.Q()
b8=B.K()
b8.sav(D.c8p.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.Sz[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cr.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.be:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vp,8+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.hr.j(0.9-u*0.2).gp(0)
b9.cC(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f7v,A.hQ)
s=$.Q()
r=B.K()
r.r=A.e8.gp(0)
b9.am(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wt
b9.N(A.vo,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c6(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bv())
b8=B.K()
b8.r=B.ar(A.ek,D.bj2,a3).gp(0)
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
b9.ah(A.H,H.a8o,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
b8.translate(0,a5)
s=$.Q().r
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
l.E(new B.bv())
q=B.K()
q.sav(D.c6v.aK(0,D.f7J))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bv())
p=B.K()
p.r=A.fG.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bv())
s=B.K()
s.r=A.fG.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCk[a0]
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.as.gp(0)
b9.N(new B.o(a1,10),7.5,s)
J.bo(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.H,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.Q().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c6(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bv())
r=B.K()
r.sav(D.c7y.aK(0,D.f7u))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bv())
q=B.K()
q.r=A.eb.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c6(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cF,A.uj,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e8
b8.r=s.gp(0)
b9.ar(D.f7t,b8)
if(b7){b8=B.K()
b8.r=A.cF.j(0.3).gp(0)
b8.y=A.mf
b9.N(A.aLs,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.em6,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.Q().r,A.ai,b6,b6,B.a([],x.v))
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
b9.N(D.eqb,24,s)}b8=B.bn(D.f88,A.hQ)
s=$.Q()
r=B.K()
r.r=A.e8.gp(0)
b9.am(b8,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.emm,D.aLF,r)
r=B.K()
r.r=A.db.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aLF,D.eqc,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bv())
s=B.K()
s.r=(b7?A.aS:A.kt).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bm).gp(0)
b9.N(D.eqf,4,b8)
return!0
case"lights":b8=$.Q().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c6(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hq.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.r=D.a5b[u].j(0.6).gp(0)
b1.y=A.H7
b9.N(new B.o(q+0,p+6),12,b1)}b1=B.a([],s)
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
q=new B.c6(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bv()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5b[u]
else{p=B.ar(D.a5b[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.irT(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hfs(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.Az},
it9(d,e,f){return B.a6(d,!1).ce(B.vl(null,!1,!0,!0,new C.h0i(e,f),A.eR,null,A.pl,new C.h0j(),x.H))},
Ki:function Ki(d,e){this.a=d
this.b=e},
my:function my(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0i:function h0i(d,e){this.a=d
this.b=e},
h0j:function h0j(){},
W6:function W6(d,e,f){this.c=d
this.d=e
this.a=f},
blR:function blR(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
dY3:function dY3(d){this.a=d},
dY2:function dY2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dY0:function dY0(){},
dY1:function dY1(d){this.a=d},
dY_:function dY_(d){this.a=d},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dXY:function dXY(d,e){this.a=d
this.b=e},
dXX:function dXX(d){this.a=d},
dXW:function dXW(d){this.a=d},
dXS:function dXS(d){this.a=d},
dXR:function dXR(d){this.a=d},
dXV:function dXV(d,e,f){this.a=d
this.b=e
this.c=f},
dXU:function dXU(d){this.a=d},
dXT:function dXT(d){this.a=d},
bxQ:function bxQ(d,e,f){this.b=d
this.c=e
this.a=f},
afS:function afS(d,e,f){this.b=d
this.c=e
this.a=f},
aNn:function aNn(){},
a29(d,e,f,g,h,i){return new C.bwC(d,e,f,g,h,i)},
bwC:function bwC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ft1:function ft1(){},
ft2:function ft2(){},
ft3:function ft3(){},
ft4:function ft4(){},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
a9w:function a9w(d){this.a=d},
cmx:function cmx(d){this.a=d},
cmy:function cmy(){},
cmw:function cmw(d,e){this.a=d
this.b=e},
cmv:function cmv(d){this.a=d},
XI:function XI(d){this.a=d},
aGy:function aGy(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h5$=f
_.m6$=g
_.f9$=h
_.h6$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eUt:function eUt(d){this.a=d},
eUp:function eUp(d){this.a=d},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUq:function eUq(d,e){this.a=d
this.b=e},
eUs:function eUs(d){this.a=d},
by1:function by1(d,e,f){this.b=d
this.c=e
this.a=f},
Wv:function Wv(d){this.a=d},
bm1:function bm1(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h5$=d
_.m6$=e
_.f9$=f
_.h6$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
e3T:function e3T(){},
e3U:function e3U(){},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3R:function e3R(d){this.a=d},
e3P:function e3P(d){this.a=d},
e3S:function e3S(d){this.a=d},
bsJ:function bsJ(d,e,f){this.b=d
this.c=e
this.a=f},
VH:function VH(d){this.a=d},
blB:function blB(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h5$=d
_.m6$=e
_.f9$=f
_.h6$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
dPm:function dPm(){},
dPn:function dPn(){},
dPh:function dPh(){},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPi:function dPi(d){this.a=d},
aJZ:function aJZ(d,e,f){this.a=d
this.b=e
this.c=f},
Wm:function Wm(d){this.a=d},
blT:function blT(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0p:function e0p(d){this.a=d},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0q:function e0q(d){this.a=d},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0r:function e0r(d){this.a=d},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0g:function e0g(d){this.a=d},
bnV:function bnV(d,e,f){this.b=d
this.c=e
this.a=f},
X5:function X5(d){this.a=d},
aFS:function aFS(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eri:function eri(d,e){this.a=d
this.b=e},
erj:function erj(d,e,f){this.a=d
this.b=e
this.c=f},
erh:function erh(d,e,f){this.a=d
this.b=e
this.c=f},
erk:function erk(d){this.a=d},
erg:function erg(d){this.a=d},
ero:function ero(d){this.a=d},
ern:function ern(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
erp:function erp(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erq:function erq(d){this.a=d},
Xf:function Xf(d){this.a=d},
aGc:function aGc(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eC4:function eC4(d){this.a=d},
eC5:function eC5(d){this.a=d},
eC2:function eC2(d,e){this.a=d
this.b=e},
eC3:function eC3(d){this.a=d},
eC1:function eC1(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d,e){this.a=d
this.b=e},
Xz:function Xz(d){this.a=d},
bn8:function bn8(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
ePX:function ePX(){},
eQ5:function eQ5(){},
eQ1:function eQ1(d){this.a=d},
eQ0:function eQ0(){},
eQ2:function eQ2(d,e){this.a=d
this.b=e},
eQ_:function eQ_(d,e){this.a=d
this.b=e},
eQ3:function eQ3(d){this.a=d},
ePZ:function ePZ(d,e){this.a=d
this.b=e},
eQ4:function eQ4(d){this.a=d},
ePY:function ePY(d){this.a=d},
X4:function X4(d){this.a=d},
bmD:function bmD(d,e,f,g,h,i,j,k){var _=this
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
_.m6$=g
_.f9$=h
_.h6$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
epY:function epY(){},
epZ:function epZ(){},
epR:function epR(d){this.a=d},
epQ:function epQ(d){this.a=d},
epS:function epS(d){this.a=d},
epP:function epP(d){this.a=d},
epT:function epT(d){this.a=d},
epO:function epO(d){this.a=d},
epU:function epU(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
epV:function epV(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
epX:function epX(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
bft:function bft(d,e,f){this.c=d
this.d=e
this.a=f},
aN9:function aN9(){},
bzK:function bzK(){},
aNu:function aNu(){},
bzQ:function bzQ(){},
aNX:function aNX(){},
bzZ:function bzZ(){},
aOn:function aOn(){},
bA7:function bA7(){},
JP(d,e,f,g){var w,v,u,t,s,r,q,p=$.ats
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mw(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mw(d,s,f,g)
else B.bP(new B.bd(1000*q),new C.cmt(d,s,f,g),u)}},
ck1(d){return C.hXy(d)},
hXy(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ck1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ck1)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.Y.aQ(0,q,null)
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
return B.i($async$ck1,v)},
b39(d,e){return C.hXz(d,e)},
hXz(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b39=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b39)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.Y.aw(e,null)),$async$b39)
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
return B.i($async$b39,v)},
cmt:function cmt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ii6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.op(A.i.ad(p.c,4)),"y",B.op(A.i.ad(p.d,4)),"v",p.e,"l",B.op(A.i.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.op(A.i.ad(p.as,3)),"ch",p.at,"vc",B.op(A.i.ad(p.z,3)),"s",B.op(A.i.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ci.E"))
A.d.fj(l)
return A.Y.aw(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
isj(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.cq:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qF().al(0,s)){J.c7(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u_(a2,d,a0,a1)
a3.as6(a2,d,a0,a1)
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
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.i.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.i.D(d==null?1:d,1,5.2)
J.c7(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cq:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.i.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.i.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.am2(m,A.i.M(B.dD(J.t(p,1))),l,A.i.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cq:h)
while(h.C()){j=h.gR(h)
J.c7(k,A.i.M(B.dD(j)))}return new B.bqT(i,k)}catch(a4){return a5}},
fK2(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fK2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fK2)
case 7:r=o.aV(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fK2,v)},
bGs(d){return C.itX(d)},
itX(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGs=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGs)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGs)
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
return B.i($async$bGs,v)}},D,H,Al,X,Am,Y,A4,An
J=c[1]
B=c[0]
A=c[2]
A5=c[118]
Z=c[159]
A_=c[145]
A6=c[151]
A0=c[149]
R=c[142]
A7=c[135]
A8=c[153]
A9=c[161]
A1=c[106]
Aa=c[137]
A2=c[117]
N=c[144]
Ab=c[160]
Ac=c[152]
Ad=c[156]
Ae=c[75]
T=c[140]
P=c[129]
U=c[84]
Af=c[87]
Ag=c[133]
V=c[143]
W=c[155]
E=c[29]
K=c[3]
G=c[38]
I=c[108]
A3=c[102]
O=c[154]
Ah=c[101]
Ai=c[157]
S=c[130]
Aj=c[158]
Q=c[147]
Ak=c[26]
L=c[28]
F=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[139]
H=c[141]
Al=c[67]
X=c[148]
Am=c[57]
Y=c[110]
A4=c[150]
An=c[146]
C.alb.prototype={}
C.WP.prototype={
S(){return new C.bmr(B.T(x.N,x.i),new B.au(A.ax,$.aw()),B.a([],x.X),B.a([],x.eZ),B.n_(0,null,null))}}
C.bmr.prototype={
gX1(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.ce)
t.m(new C.ej5(t))
t.a.toString
p=t.gX1()
w=3
return B.b(C.bC0(C.i5x(q,C.ihS(p),o,t.ay)),$async$PO)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ijo(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ej6(t,o,r))
$.aW.x1$.push(new C.ej7(t))
case 1:return B.h(u,v)}})
return B.i($async$PO,v)},
Z6(d){return this.c3d(d)},
aYw(){return this.Z6(null)},
c3d(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
t.f.sb1(0,o)
t.m(new C.eji(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bC0(C.icV(o)),$async$Z6)
case 3:r=n.a=m.irZ(f)
p.b=""
if(r!=null&&!C.ihT(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ijp(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alb(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejj(p,t))
t.c8O(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z6,v)},
c8O(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX1()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eje(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejc(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejf(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ejg(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejh(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bq.j(0.1),g=B.l(16),f=B.L(A.bq.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.ffK,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AL,l,l,l),1)],x.p),A.l,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fGJ
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VK,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fqR,l,l,l)],v),A.l,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uu,B.d(u,l,l,l,l,l,l,D.ftH,l,l,l),l))
w.push(A.cR)
w.push(B.d(k.b,l,l,l,l,l,l,I.EN,l,l,l))
u=k.e
if(u.length!==0){t=A.aS.j(0.12)
s=B.l(10)
w.push(B.r(l,B.d(u,l,l,l,l,l,l,D.fwf,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.hW,A.cl,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lW,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NT,new B.c8(A.aL,A.e,A.j,A.E,l,A.p,l,0,B.a([t,A.bn,new B.bz(1,A.bc,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bq.j(0.3)
s=new B.aN(12,12)
s=B.r(l,B.d(o.a,l,l,l,l,l,l,A.Vq,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hf,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.v(w,B.a([A.T,new B.bM(A.aa,l,l,s,l),A.aw,B.r(l,B.d(o.b,l,l,l,l,l,l,D.fC_,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.erK)
j=B.ce(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajp(B.r(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bBV,A.ey,l,l,1/0),A.b1,A.iu),B.E(C.hkh(m.gX1(),l,l,m.e),1)],w),A.l,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.ejm(m),l,A.bq,l),new E.dW("Invent something new",!i,new C.ejn(m),l,A.bq,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dtT[p]
i.push(new E.dW(n,!1,new C.ejo(m,n),l,A.bq,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dbR[p]
i.push(new E.dW(r,!1,new C.ejp(m,r),l,A.bq,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.a_,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(16),A.a1),l,A.eY,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kj,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejq(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a5,l,A.ao,l,A.Ve,l,l),1)
h=m.at
v=h&&j?D.bRP:A.ec
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fC(v,j,new C.ejr(m,k),A.bq,l)],w),A.l,l,A.e,A.j,0,l,l))
return E.lB(A.bq,A.f6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.GY.prototype={}
C.vs.prototype={}
C.Xb.prototype={
S(){return new C.aG6(A.H,A.H,A.az,B.aR(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aG6.prototype={
gaZP(){var w,v,u,t=this,s=D.It[t.cx],r=D.SB[t.cy],q=D.Dt[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAB[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eyo())},
ga3w(){return D.It[this.cx].d/this.gaZP()},
gaQL(){return 0.1*(D.It[this.cx].d/0.9)/D.SB[this.cy].d},
Y(){this.a4()
this.mg()
C.ck1("rocket_lander").bG(new C.eyI(this),x.k)},
c8X(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cN.ai()*0.6
w.f=new B.o(0.15+A.cN.ai()*0.7,0.08)
w.r=new B.o((A.cN.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
my(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eyJ())
return}w=D.tc[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3w()
v=v.a2(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQL())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcK()*6*D.aCE[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.o(-t.a*0.4,t.b)
t=new B.o(A.i.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.o(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dt[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b39("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JP("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3w()/(D.tc[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.ad(m.ga3w()/(D.tc[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.i.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.eyK())},
ah6(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.ft9,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.eyq(this,g,w),v,h,v))
return new B.D(A.eM,B.x(B.a([u,A.cR,B.bV(A.bH,s,A.bs,v,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bI_(d){var w,v,u,t,s=this,r=null,q=s.ga3w()/(D.tc[s.d].b/9.81*0.28)>=1,p=A.i.V(1/s.gaQL()),o=D.aCE[s.d],n=B.l(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.n(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abc,r,r,r),A.X,s.ah6("ENGINE: "+D.It[s.cx].b,D.It,new C.eyf(s),new C.eyg(s),A.cF),s.ah6("FUEL TANK: "+D.SB[s.cy].b,D.SB,new C.eyh(s),new C.eyi(s),A.b5),s.ah6("LANDING GEAR: "+D.Dt[s.db].b,D.Dt,new C.eyj(s),new C.eyk(s),A.aH),s.ah6("EXTRAS (tap to add)",D.aAB,new C.eyl(s),new C.eym(s),A.bq)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fZK)
o=(q?A.b5:A.c0).j(0.14)
w=B.l(12)
v=A.i.ad(s.gaZP(),2)
u=A.i.ad(s.ga3w()/(D.tc[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.r(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.V(D.Dt[s.db].d*100)+".",r,r,r,r,r,r,D.ftQ,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.hW,A.bV,r,r,r))
m.push(A.X)
m.push(new B.bM(A.A,r,r,new E.fC(A.oF,"Launch",new C.eyn(s),A.b5,r),r))
return B.as(B.r(r,B.ce(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.m0,new B.p(D.brJ,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b0_(d,e,f,g){var w=null,v=f?A.cF:A.c.j(0.1),u=B.l(18),t=B.L(A.aU,A.r,1)
return B.mQ(A.iO,B.r(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyc(e),new C.eyd(e),w,w,w,w,new C.eye(e))},
b_Z(d,e,f){return this.b0_(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cq(new C.eyB(s,D.tc[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tc[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.eyC(s,w),r,D.tc[w].c,r))}v=B.a([s.b_Z(F.aqi,new C.eyD(s),s.y),A.bd,s.b0_(A.wG,new C.eyE(s),s.Q,130),A.bd,s.b_Z(A.PD,new C.eyF(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.l(18)
A.d.v(v,B.a([A.bd,B.az(r,B.r(r,D.bW2,A.f,r,r,new B.p(u,r,B.L(A.aU,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eyG(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lB(A.cF,A.f6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.j,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bjm.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tc[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.Q(),f=B.K(),e=l.c,d=B.ar(K.a_0,e,0.25)
d.toString
f.sav(new B.a8(A.b7,A.b9,A.x,B.a([F.ah9,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e5()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.o(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aG(g.r,A.ai,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e5()
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
g=B.bn(q,A.iB)
e=B.K()
e.r=A.be.gp(0)
a0.am(g,e)
e=B.bn(q.cn(2),A.mw)
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
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bv())
m=B.K()
m.r=A.aS.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bv())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c6(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c6(-14,-10,0,-26))
o.E(new B.bv())
k=B.K()
k.sav(D.c81.aK(0,D.f7h))
a0.af(o,k)
k=B.K()
k.r=A.aH.gp(0)
a0.N(H.vp,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bv())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bv())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aO4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA0.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzU()}}
C.aU9.prototype={}
C.a4t.prototype={}
C.bci.prototype={}
C.VG.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aEA(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LO,D.LO,A.az,A.cN,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEA.prototype={
Y(){var w=this
w.a4()
w.mg()
w.as=new C.c6u(w.gchQ())
new C.dPf(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byW()},
chR(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.I(["t","init","data",$.huv],x.N,x.z))
v.at=!0
v.ay=""
v.aAV()
break
case"parts":v.m(new C.dOQ(v))
break
case"pick":v.m(new C.dOR(v,d))
break
case"shot":v.aj0(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dOS(v))
break}},
aAV(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayt[q.cx]
v=new C.dOT()
u=q.ch
u=B.C(u,B.a4(u).k("ci.E"))
A.d.fj(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.i.V(q.k4),"spin",q.go],t,x.cK)
r=A.Y.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f8(0,u)}},
aj0(d){return this.cyQ(d)},
cyQ(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cJ.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awT(B.a([B.cGp(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj0)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(K.aU2)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj0,v)},
aAj(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
my(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bh(w)!==A.i.bh(v.p1)){E.XB("kick",0,0.4)
v.UH(170,new C.dPg())}v.p1=w
return},
aeE(d){var w,v,u,t,s=this
s.m(new C.dOU(s,d))
if(d==null){s.fy=D.LO
s.fr=1
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOV(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.J(0,t)
if(s.CW===2)s.CW=1}s.aAV()
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBj(t,d)
return},
cBj(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XB("kick",0,0.8)
this.UH(260,new C.dOW())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UH(w*70,new C.dOX(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h9M("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.XB("kick",0,0.3)
break
default:E.h9M("organic",2+A.o.F(e.length,6),200,0.4)}},
cFY(d){this.m(new C.dOZ(this,d))},
b0h(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAj(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
bZT(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dON(u,w,d))
v=x.t
C.JP("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UH(1100,new C.dOO(u))
return}if(d==null){if(u.cy!=null)u.aeE(null)
return}u.aeE(d)},
c2v(d,e){var w,v=this,u=null,t=B.l(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fpd,u,u,u)}else if(d==null||e==null)w=D.fE8
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.h8,u,u,u),A.cR,B.d(e.b,u,u,u,u,u,u,I.EN,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aH(u,u,u,u,D.bYB,u,u,u,new C.dOP(v),u,u,u,u,"Back to the whole body",A.cf)],w),A.E,u,A.e,A.j,0,u,u)}return B.r(u,w,A.f,u,u,new B.p(K.Yj,u,s,t,u,u,A.n),u,u,u,u,R.alH,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dF4.h(0,g)
i.aAV()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dma
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAj(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,K.oI,h,h,h,new C.dP5(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bL:B.C_(h,A.pO,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zo(B.r(A.A,B.x(D.dvs,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b6R,h,h,D.hqS,h,h,h,h,h),A.b1,A.mW,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b4,A.t,q,h),1),new B.D(F.a06,i.c2v(g,f),h)],v),A.l,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.ddu[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dP6(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dP7(i,k),h,A.aS,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iP(A.c0,""+A.i.V(o)+" beats/min","Heart rate",180,40,new C.dP8(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.ayt[j],i.cx===j,new C.dP9(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dPa(i),D.apa,A.aH,h),new E.fC(A.oA,"Reset view",new C.dPb(i),A.c,h),new E.dW(l,m,new C.dPc(i),A.HM,A.aS,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dPd(i),A.oE,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lB(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aN7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aN8.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byV()}}
C.c6u.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hAK
$.hAK=v+1
u="ngmy-body-viewer-"+v
$.xv()
$.pZ().pd(u,new C.c6v(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6w(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rx(w.contentWindow)
if(w!=null)J.ajf(w,e,"*")}}catch(v){}}}
C.yM.prototype={}
C.D4.prototype={}
C.nM.prototype={}
C.bd3.prototype={}
C.VM.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEC(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.H,A.H,B.aR(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEC.prototype={
Y(){var w=this
w.a4()
w.mg()
w.adC()
$.aW.x1$.push(new C.dQV(w))},
adC(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adC=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adC)
case 6:q=e.tT("ngmy_circuit_passed_v1")
r=q==null?A.a_:q
if(s.c!=null)s.m(new C.dQz(s,r))
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
return B.i($async$adC,v)},
adY(d){return this.c6s(d)},
c6s(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adY=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.aA(),$async$adY)
case 6:r=f
q=s.cx
p=B.a4(q).k("k9<ci.E,m>")
q=B.C(new B.k9(q,new C.dQC(),p),p.k("M.E"))
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
return B.i($async$adY,v)},
ayX(d,e,f,g){var w="c"+this.y++,v=new C.D4(w,e,f,g)
this.d.n(0,w,v)
return v},
mP(d,e,f){return this.ayX(0,e,f,0)},
acX(d,e){var w
if(D.A7.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.o(-36,w))},
ui(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUW(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cXl[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ui(p,0)&&n.ui(p,1)
break
case"or":p=q.a
o=n.ui(p,0)||n.ui(p,1)
break
case"xor":p=q.a
o=n.ui(p,0)!==n.ui(p,1)
break
case"nand":p=q.a
o=!(n.ui(p,0)&&n.ui(p,1))
break
case"nor":p=q.a
o=!(n.ui(p,0)||n.ui(p,1))
break
case"not":o=!n.ui(q.a,0)
break
default:o=n.ui(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSm(){return this.aUW(null)},
my(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSm()
if(!n.ax)return
for(w=n.d,w=new B.b7(w,B.a4(w).k("b7<2>")).gae(0),v=new B.eG(w,new C.dQW()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayY(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mh(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
av7(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQx(w,d))
return}w.m(new C.dQy(w,d))},
cBB(d){this.m(new C.dQD(this,d,$.bGO()[d]))},
cbf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGO()[a0]
v=d.d
u=B.a4(v).k("b7<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b7(v,u),new C.dQs(),t),s)
A.d.aZ(r,new C.dQt())
q=B.C(new B.Y(new B.b7(v,u),new C.dQu(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQv(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUW(0)
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
d.m(new C.dQw(d,o,a0))},
azP(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
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
ckh(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
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
c2o(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A7.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acX(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bR5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acX(p,o)
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
cbh(d){var w,v,u,t=this,s=t.azP(d)
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
t.m(new C.dQE())
return}u=t.bR5(d)
if(u!=null)t.m(new C.dQF(t,u))
else t.m(new C.dQG(t))},
axL(d){return this.c5r(d)},
c5r(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azP(d)
if(s==null){w=1
break}B.jY()
t.m(new C.dQB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axL,v)},
bDO(d){if(this.x.A(0,A.az))return
this.m(new C.dQr(this,d,A.cN))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGO()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.oE:V.t7,A.ac,h,h,h,21),h,h,h,new C.dQP(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.co.j(0.14)
r=B.L(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.foj,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VE,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lg,B.d(p,h,h,h,h,h,h,B.n(h,h,i.CW?A.b5:A.eU,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.r(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bJ(D.fPJ,h,i.gcbe(),B.bp(A.co,h,h,h,h,h,h,h,h,h,h,A.cf))],g),A.l,h,A.e,A.j,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,U.O0,D.bCB,h,h,1/0))}u.push(B.E(B.cq(new C.dQQ(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.r(h,B.d(D.A7.h(0,r).a+": "+D.A7.h(0,r).e,h,h,h,h,h,h,A.tI,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a0a,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.A7.gdO(D.A7),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.r(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aW1,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bH(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ah.NY,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQR(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dqG[l]
s.push(new E.fC(A.PE,k.b,new C.dQS(i,k),A.co,h))}s.push(new E.fC(K.wD,"Clear",new C.dQT(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGO(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ed:A.lM
o=i.ay
n=i.cx.q(0,j)?A.b5:A.bi
r.push(new E.dW(q.a,o===j,new C.dQU(i,j),p,n,h))}return E.lB(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bdm.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.Q()
w=B.K()
w.r=D.afu.gp(0)
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
i=a3.acX(l,o.c)
h=s.h(0,n)===!0
n=$.Q()
g=B.a([],r)
f=new B.aG(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kT(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=9
n.r=A.bi.j(0.28).gp(0)
n.y=N.ot
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dy:A.bw).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.Jz)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.Q().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kT(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ac.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbg(a5,a3.d)},
cbg(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A7.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bn(t,A.jN)
r=w.cy===v
q=s.eQ(A.cB)
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
d.N(q,52,p)}q=s.eQ(A.cI)
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
q.sav(new B.a8(A.b7,A.b9,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.am(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.py:D.bSk}else l=e.b
k=C.hbB(B.lA(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.o(p/2,q.gba(q)/2)))
j=C.hbB(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hbB(f,9,u?A.dy:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0W(d,w.acX(a0,h),o)
this.b0W(d,a0.c.a2(0,D.Jz),o)},
b0W(d,e,f){var w
$.Q()
w=B.K()
w.r=D.afu.gp(0)
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
C.aNc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzL.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bz_()}}
C.Oh.prototype={
S(){return new C.aET(B.n_(0,null,null))}}
C.Lj.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Bb.prototype={}
C.aET.prototype={
Y(){this.a4()
B.bP(A.qv,C.iqk(),x.H)},
cbm(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dX6(w,e))},
c4h(){var w=this
w.e.t()
w.e=B.n_(w.f,null,null)
w.m(new C.dX5(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oP(t,B.c4(v,A.c5,t?new C.btG(w.e,w.gcbl(w),new C.dX7(d),v):new C.aJ6(u,new B.bC(u.b,x.Y)),v,!1,!1,v,!1),new C.dX8(w,u),x.K)}}
C.bvi.prototype={}
C.btG.prototype={
b0X(d,e){var w=null
return new B.D(R.a0C,B.x(B.a([B.d(d,w,w,w,w,w,w,D.foX,w,w,w),A.bG,B.d(e,w,w,w,w,w,w,B.n(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=B.aF(d,A.dO,x.l).w,t=B.aH(v,v,v,v,A3.mn,v,v,D.hr9,w.e,v,v,v,v,v,v),s=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O),r=B.l(14),q=x.p
s=B.A(B.a([t,B.E(B.as(B.r(v,D.bxg,A.f,v,v,new B.p(v,v,B.L(A.aH.j(0.75),A.r,1.6),r,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.H,8)],x.V),new B.a8(A.aA,A.aE,A.x,s,v,v),A.n),v,v,D.hre,v,A_.amc,v,v,v),v,v,v),1),A.tA],q),A.l,v,A.e,A.j,0,v,v)
r=w.b0X("STUDIOS","Play, make things, and keep what you make")
$.bGP()
return B.bm(!1,B.x(B.a([B.E(B.w8(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.nJ(new B.R(8,u.r.b+6,8,4),new B.m4(s,v),v),new B.m4(r,v),new B.nJ(A.hX,B.PW(new B.oS(new C.f8b(d),9,!0,!0,!0,0,B.tr(),v),D.aTS),v),new B.m4(w.b0X("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nJ(D.bCK,B.PW(new B.oS(new C.f8c(w),6,!0,!0,!0,0,B.tr(),v),D.aTS),v)],q)),1)],q),A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!1)}}
C.aga.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.l(20),n=B.l(20),m=B.ar(I.m7,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aiJ],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.H,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.H,12)],u)
return B.aI(!1,A.a3,!0,r,B.aP(!1,o,!0,B.eE(B.x(B.a([B.r(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.p(r,r,r,r,u,new B.a8(A.aA,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.T,B.d(q.a,r,2,A.a2,r,r,r,B.n(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cR,B.d(q.b,r,2,A.a2,r,r,r,B.n(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.l,r,A.bb,A.j,0,A.p),r,new B.p(r,r,v,n,t,new B.a8(A.aA,A.aE,A.x,m,r,r),A.n),r,A.H1,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.af1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.l(20),g=B.l(20),f=B.ar(I.m7,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aiJ],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cB,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aN(6,6)
m=B.a([A.d.gH(i),A.d.gan(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aM2,0)],u)
r.push(B.r(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.p(k,k,k,new B.be(n,n,n,n),l,new B.a8(A.a7,A.aa,A.x,m,k,k),A.n),k,17,k,new B.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.l,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gH(i),A.d.gan(i),0.4)
u.toString
return B.aI(!1,A.a3,!0,k,B.aP(!1,h,!0,B.eE(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.n(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.aw,B.X(A.D5,A.d.gH(i),k,k,k,18)],s),A.l,k,A.bb,A.j,0,A.p),k,new B.p(k,k,v,g,t,new B.a8(A.aA,A.aE,A.x,f,k,k),A.n),k,A.H1,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.Rd.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gan(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c2(j,new B.p(h,j,j,B.l(22),j,j,A.n),A.bj),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jw,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.H,30)],s)
q=B.l(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gan(i)
i=B.ar(A.d.gan(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c2(j,new B.p(j,j,j,j,j,new B.a8(A.aA,A.aE,A.x,B.a([p,o,n,i],m),D.dwq,j),A.n),A.bj),0,0,0),B.ap(j,B.c2(j,new B.p(j,j,j,j,j,new B.a8(A.b7,A.b9,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bj),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.buG(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.H,14)],s)
s=B.r(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fqH,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.n(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ko)
p.push(B.r(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h5,B.A(B.a([s,A.ev,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.du(!0,B.e9(j,A.w.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bR(0,new B.du(!0,B.c2(j,new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bj),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ab,A.f,B.a([h,B.bR(0,B.c2(B.by(q,new B.an(A.a0,j,A.ab,A.t,m,j),A.aq),new B.p(j,j,j,u,r,j,A.n),A.bj),0,0,0)],l),j),j)}}
C.buG.prototype={
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
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bub.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.bpz,D.ahN],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kB,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c2(B.by(q,B.b4(B.as(B.X(A.jI,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bc0(p,w),A.az),A.aq),new B.p(w,w,s,v,r,new B.a8(A.aA,A.aE,A.x,u,w,w),A.n),A.bj),w)}}
C.bc0.prototype={
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
C.aJ6.prototype={
S(){return new C.aJ7(new B.cw(null,x.A),null,null)}}
C.aJ7.prototype={
guI(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bA0,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_v(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h4,null,1,null,v)
w.fc(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gayZ(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbj(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYe(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ1(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9N(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guI()
w.dl()
w.dV$.J(0,this.gcBk())},
cBl(){var w,v,u,t,s,r,q,p=this,o=p.guI().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayZ().a){case 0:w=D.nP
break
case 1:w=D.v8
break
case 2:w=D.a5e
break
case 3:w=D.nP
break
case 4:w=D.diT
break
case 5:w=D.v8
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adc)r=0.09
else r=s===D.add?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.caD[v]
E.mw("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JP("bell",D.cjs,1400,0.35)}}p.ax=o},
t(){this.guI().t()
this.ga_v().t()
this.bAQ()},
af3(){var w=this
w.guI().d0u(0,B.dw(0,0,0,A.i.V(11e3/w.Q),0,0))
w.m(new C.f7S(w))},
cmk(){this.guI().bQ(0)
this.m(new C.f7R(this))},
af2(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ1(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aR),$.aw()))}m=B.a([],m)
for(t=u.gb9N(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aR),$.aw()))}o=B.C(u.gaYe(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m7,null,new C.f7Q(u,l,m,o),t,!0,!0,!0,A.lT,!1,!1,x.H),$async$af2)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$af2,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayZ(),f=i.a.c,e=f.b,d=i.gcbj(),a0=new C.Bb(g,e,f.c,d,i.gaYe(),i.gaZ1(),i.gb9N())
f=B.ar(A.d.gH(d),A.d.gan(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.oE:V.t7,A.ac,h,h,h,21),h,h,h,new C.f8_(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.c1d,h,h,h,i.gcbk(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,K.oI,h,h,h,new C.f80(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c5(i.ga_v(),new C.f81(i,a0),h),B.cq(new C.f82(i,a0))],g)
u=i.as
t=u?i.gcmj():i.gcbn()
u=u?D.bRC:A.t6
s=B.ar(A.d.gH(d),A.d.gan(d),0.4)
s.toString
t=B.A(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cf),B.E(B.c5(i.guI(),new C.f83(i,a1,a0),h),1),B.aH(h,h,h,h,D.bYr,h,h,h,new C.f84(i),h,h,h,h,"Replay",A.cf)],g),A.l,h,A.e,A.j,0,h,h)
s=i.Q
u=A.i.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f85(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dtt[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f86(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cb1[q]
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
d.push(B.az(h,B.r(h,h,A.f,h,h,new B.p(h,h,new B.bH(j,j,j,j),h,h,new B.a8(A.aA,A.aE,A.x,n,h,h),A.a6),h,l,h,K.ald,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f87(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lB(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.en(new B.an(A.a0,h,A.b4,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.P,0,A.p))},
bCZ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nP[r]
p=A.i.D((1-A.e_.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.nP[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.nP[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nP[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nP[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nP[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kG(q,new B.iR(n,f,A.b7,!0,f,new C.Rd(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nP[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nP[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mK(new C.bth(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ab,A.f,e,f),f)},
bTW(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v8[r]
p=A.qt.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v8[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.v8[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
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
g=new C.Rd(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iR(k,f,A.A,!0,f,new C.bub(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kG(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ab,A.f,e,f),f)},
cGs(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5e[w]
l.push(A.cw.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bwM(d.d,l,D.aAb,m,C.btF(e,0.4,0.62),f,C.btF(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hc8(g,w)
q=D.aAb[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kG(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hc8(g,w)
r=D.a5e[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kG(A.i.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VQ,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ab,A.f,v,n),n)},
bJg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btF(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.as(B.dN(B.b4(f,f,f,new C.bsI(A.d.gH(a1),C.btF(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.elW),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.i.D((o-0.7)/0.3,0,1))
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
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ch(A.A,f,f,new B.kG(k*(0.45+0.55*o),B.dN(new B.iR(l,f,A.A,!0,f,new C.Rd(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f7J())
A.d.v(a0,new B.N(w,new C.f7K(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ab,A.f,a0,f),f)},
cbi(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v8[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.l9.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v8[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aCh[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v8[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ch(A.A,e,e,new B.kG(m,B.dN(new B.iR(k,e,A.A,!0,e,new C.Rd(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.v8[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ch(A.A,e,e,B.dN(new B.mK(new C.bcH(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aCh[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ab,A.f,a0,e),e)},
bFV(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.em_],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nP[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCs[r]
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
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.nP[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.dnb[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ch(A.A,a3,a3,new B.kG(g,B.dN(new B.iR(f,a3,A.A,!0,a3,new C.Rd(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nP[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCs[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ch(A.A,a3,a3,B.dN(new B.mK(new C.bsK(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ab,A.f,a6,a3),a3)}}
C.bth.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hA)
$.Q()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.ot
d.am(q,t)
t=B.bn(u,A.hA)
q=B.K()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bsI.prototype={
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
C.bcH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ei(A.H),h=this.c,g=A.cw.aA(0,h)
$.Q()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e5()
t.d_(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.N(new B.o(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bsK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.H)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aD(d){return d.c!==this.c}}
C.bwM.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.Q()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b7,A.b9,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hc8(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.Q()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mf
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a8(A.b7,A.b9,A.x,B.a([a6,A.d.gan(w)],v),c1,c1).aK(0,a4))
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
a9=new B.bv()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gan(w),A.w,0.5).gp(0)
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
a2=new B.bv()
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
b3=A.i.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hA)
$.Q()
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hU(a4),$.mi()[1],!0)
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b7,A.b9,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aOU.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1D.prototype={
a7(){return"_Role."+this.b}}
C.qu.prototype={}
C.rb.prototype={}
C.D8.prototype={}
C.a_C.prototype={}
C.afZ.prototype={}
C.a1Q.prototype={
gZ(d){return this.d}}
C.Dj.prototype={}
C.acT.prototype={}
C.ad9.prototype={}
C.af4.prototype={}
C.bjj.prototype={
a3F(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baT(d,e,f){return this.a3F(d,e,f,0,0.55)},
aDE(d,e,f,g){return this.a3F(d,e,f,0,g)},
baU(d,e,f,g){return this.a3F(d,e,f,g,0.55)},
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
alb(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
tc(d,e,f){return this.alb(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new C.dr3(e))
A.d.br(w.c,new C.dr4(e))
w.b0()},
beL(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n7.h(0,v.b).c===D.xJ)return!1
w=this.b
if(A.d.aV(w,new C.dr0(d,e)))return!1
w.push(new C.D8(d,e))
this.b0()
return!0},
c3a(d){var w
if(d.b==="beat")return D.cjC[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCJ[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dj(u,t,j.ax,90))
w.push(new C.Dj(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1Q(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baT(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1Q(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Dj(u,t,j.ax,120))
j.aDE(120,200,"noise",0.5)
j.baT(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dj(u,t,j.ax,230))
w.push(new C.Dj(u,t,j.ax+160,160))
w.push(new C.Dj(u,t,j.ax+320,100))
j.baU(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acT(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baU(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.ad9(u,u.a2(0,new B.o(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3F(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3F(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af4(u,D.aC3[v],t,j.ax))
j.aDE(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDE(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cfI[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwq(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eG(w,new C.dr1(d));v.C();)j.aC9(w.gR(0),j.ax+D.cs2[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cJh[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eG(w,new C.dr2(d));v.C();)j.aC9(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xD(w,0,v-700)},
cwq(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_C(e,"~"+d))},
aC9(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afZ(d.a,v,e,w))
u.push(new C.a_C(w,v))},
a7q(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b7<2>")
w=B.C(new B.b7(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHd(r)
u.n(0,r,o.ax+o.c3a(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dr5(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dr6(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eG(u,new C.dr7(p));r.C();)o.aC9(u.gR(0),o.ax)}else o.aHd(u)}}A.d.br(o.d,new C.dr8(o))
A.d.br(o.e,new C.dr9(o))
A.d.br(o.f,new C.dra(o))
A.d.br(o.w,new C.drb(o))
A.d.br(o.x,new C.drc(o))
A.d.br(o.r,new C.drd(o))
o.b0()},
vK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
v.push(B.a([n.a,n.b],r))}return A.Y.aw(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n7.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.o(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.i.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D8(q,p))}k.b0()
return!0}catch(l){return!1}},
cVW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rb(n,r,new B.o(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beL(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xa.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aG5(new C.bjj(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cN,A.L,A.az,$.aw()),A.bE,A.H,A.H,A.a_,null,null)}}
C.aG5.prototype={
adv(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adv=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adv)
case 6:q=n.k5(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.exJ(s))
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
return B.i($async$adv,v)},
aaq(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.exy(s))
u=3
w=6
return B.b(B.aA(),$async$aaq)
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
return B.i($async$aaq,v)},
bPd(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b7<2>")
v=""+n.a+"|"+o.length+"|"+new B.b7(n,w).cG(0,0,new C.exA())+"|"+A.d.cG(o,0,new C.exB())
if(v===p.ch)return p.CW
u=new C.exE()
t=x.s
s=B.a([],t)
r=new C.exF(p,s,u)
for(n=new B.b7(n,w).gae(0),w=new B.eG(n,new C.exC());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.exD(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adv()
v.d.db=v.ay
w=v.q0(new C.ey8(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.U$=$.aw()
v.P$=0
w.bzS()},
ad0(d){return this.c2B(d)},
c2B(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad0)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uk(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZs(A.d.gH(D.aBv))
if(s.c!=null)s.m(new C.exI())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad0,v)},
aZs(d){this.d.cVW(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lH,new C.exu(this))},
az_(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
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
cki(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
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
c2p(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n7.h(0,r.b).c===D.xJ)continue
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
cbq(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hAL(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cE9(d){var w,v,u,t,s,r,q=this,p=q.az_(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHd(p)
return}if(q.r)return
t=D.n7.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rk)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbq(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clB(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cki(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az_(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clC(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3O(){var w,v,u=this
if(u.z!=null){w=u.c2p(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beL(v,w)}else v=!1
if(v){B.jX()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adI(d){return this.c5s(d)},
c5s(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az_(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jY()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m7,null,new C.exL(q),p,!0,!0,!1,A.lT,!1,!1,x.y),$async$adI)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
cbo(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tc(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EL()},
ahE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m7,null,new C.exN(),s,!0,!0,!0,A.lT,!1,!1,x.es),$async$ahE)
case 2:t=e
if(t!=null)u.aZs(t)
return B.h(null,v)}})
return B.i($async$ahE,v)},
af4(d){var w=0,v=B.j(x.H),u=this,t
var $async$af4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.exx(),t,null,!0,!0,x.y),$async$af4)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$af4,v)},
B(d){var w=this,v=null,u=B.a([B.ajp(w.r?new B.bM(A.a7,v,v,new B.D(A.H2,B.ho(D.bWi,D.fIi,new C.ey6(w),v),v),v):w.cbr(),A.b1,A.iL),B.E(B.cq(new C.ey7(w)),1)],x.p)
if(!w.r)u.push(w.cyT())
return B.c4(v,A.c5,B.bm(!0,B.x(u,A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKW(){var w=null,v=new C.exz(),u=A.w.j(0.7),t=B.l(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bR(0,B.e9(B.as(B.r(w,B.ce(B.x(B.a([D.fTT,A.aw,D.h0F,A.aB,v.$4(A.oD,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D1,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k7,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.P9,A.bi,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h_W,new B.bM(A.aa,w,w,B.bN(!1,D.fQV,w,w,!0,w,w,w,this.gbKP(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XA,new B.p(I.m7,w,s,t,w,w,A.n),w,w,w,A.fs,An.amt,w,w,w),w,w,w),u,!0),0,0,0)},
cbr(){var w=this,v=null,u=B.aH(v,v,v,v,A3.mn,v,v,v,new C.exT(w),v,v,v,v,v,v),t=w.a9R(A.CS,"How it works",new C.exU(w),!0),s=w.ay?A.oE:V.t7
return new B.D(D.bGU,B.A(B.a([u,D.bIA,t,w.a9R(s,"Sound",new C.exV(w),!0),w.a9R(A.ec,"Ideas",w.gcpn(),!0),w.a9R(K.wD,"Clear",w.gcbp(w),!0),w.aQ2(A.hx,"Show",new C.exW(w),!0,!0)],x.p),A.l,v,A.e,A.j,0,v,v),v)},
aQ2(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ae.ws,B.aI(!1,A.a3,!0,u,B.aP(!1,t,!0,B.h6(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9R(d,e,f,g){return this.aQ2(d,e,f,g,!1)},
cyT(){var w=null,v=new C.exP(this),u=A.c.j(0.08)
return B.r(w,B.ce(B.A(B.a([v.$2("START",D.xJ),v.$2("CHANGE",D.F8),v.$2("REACT",D.rk)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BQ,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bBX,w,w,w)},
cyU(d){var w,v,u,t,s=null,r=D.n7.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fB,B.az(s,B.r(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cR,B.d(r.a,s,1,A.a2,s,s,s,D.aW1,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a8(A.b7,A.b9,A.x,u,s,s),A.n),s,s,s,s,A.hH,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.exO(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjk.prototype={
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
d=new B.aG(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kT(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n7.h(0,l.b).d
a2=D.n7.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t0(new B.o(i,j),new B.o(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hAL(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.Q()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.ot
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.Jz)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.Q().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kT(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.dH.aA(0,v)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kt(p,j,A.dH.aA(0,v))
i.toString
j=B.kt(p,j,A.dH.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=5
p.d=A.bu
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t0(j,i)
p.sav(new B.a8(A.a7,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kU
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A7.Bc,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjl(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.cl9(b7,b4.d,b5)
b6.restore()},
cl9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n7.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bn(u,A.il)
s=t.eQ(A.cB)
$.Q()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mf
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wt
d.am(s,r)}s=t.eQ(A.cI)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b7,A.b9,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.am(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bjl(B.lA(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.o(s/2,r.gba(r)/2)))
n=C.bjl(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aC3[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rk){s=e.c.a2(0,new B.o(0,62))
r=B.K()
r.r=D.aCJ[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjl(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjl(m,9.5,A.aD,j,j,A.V)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xJ)k.b4B(d,e.c.aJ(0,D.Jz),q)
k.b4B(d,e.c.a2(0,D.Jz),q)},
b4B(d,e,f){var w
$.Q()
w=B.K()
w.r=A.c5.gp(0)
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
C.aO2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u_.prototype={
as6(d,e,f,g){var w=this
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
C.aby.prototype={}
C.acF.prototype={}
C.a5C.prototype={
bgD(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.aby(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7C(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bPP())},
alb(d,e,f,g){var w="p"+this.c++,v=new C.u_(w,e,f,g)
v.as6(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new C.bQ_(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMV(d,e,f,g,h){return A.d.aV(this.b,new C.bPV(e,f,g,h))},
am2(d,e,f,g){var w
if(d===f||this.cMV(0,d,e,f,g))return null
w=new C.acF(d,e,f,g)
this.b.push(w)
return w},
aCG(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Aj(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoO(d){return this.Mk(d)&&!d.x&&d.cx>this.Aj(d)},
b8Y(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mk(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbL(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A8.h(0,v)
if(w!=null)return w.a
return 100},
vK(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7C(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQ0(a2),t).cG(0,0,new C.bQ1(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQ3(o)
m=B.a([],x.t)
l=new C.bQ2(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQ5(g,l,n)
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
a2.b8U(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Aj(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8U(e,d,w,!0)
a2.bRz(a4)},
b8U(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPR(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPQ(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPT(B.T(b3,b3),r,b5)
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
if(h)B.bj(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c_(b7,0,!1,b3)
a0=B.c_(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8Y(t)*(1+t.CW))
a4=b2.aCG(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbL(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUW(e,a0,b8)
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
bUW(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRz(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCG(o)/a1.b8Y(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Aj(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJz(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgD(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uq(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.i.D(o.db-h,0,24)
else o.cy=A.i.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uq(o,"The "+$.qF().h(0,n).b+" got "+A.i.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uq(o,"More than 1.5 amps went through the "+$.qF().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uq(o,"The regulator had to turn "+A.i.ad(o.cy,1)+" V into heat while "+A.i.V(i*1000)+" mA flowed. That is "+A.i.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uq(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A8.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qF().h(0,n).b
l=f.b
l=l===A.i.iH(l)?""+A.i.V(l):B.w(l)
g=f.c
g=g===A.i.iH(g)?""+A.i.V(g):B.w(g)
a1.uq(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fbT.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uq(o,"The bulb got "+A.i.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uq(o,"The LED had "+A.i.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uq(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uq(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uq(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uq(o,"The capacitor was charged to "+A.i.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJz(d){return A.d.aV(this.a,new C.bPO(d))},
uq(d,e){var w
d.x=!0
d.ay=e
this.bgD(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blh(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ_(d){var w=d.b
return D.aSQ.q(0,w)||D.A8.al(0,w)||w==="buck"||w==="regulator"},
bi6(d){var w,v=!0
if(!this.Mk(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A8.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vz(d,e){var w=this.b
return new B.Y(w,new C.bQ7(d,e),B.U(w).k("Y<1>")).gI(0)},
tP(d){var w,v
if(d.x)return!1
w=d.b
if(D.A8.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bg9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qF().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ_(d)||i.tP(d))return null
w=i.Vz(d,0)
v=i.Vz(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVv(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.iH(r)?""+A.i.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A8.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mx("battery"),o=J.aT(t.a),t=new B.eG(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vz(n,0)+i.Vz(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mx("switch"),o=J.aT(t.a),t=new B.eG(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qF().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Aj(k))return"The "+$.qF().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.ad(k.cx,2)+" amps, but it can only give about "+A.i.ad(i.Aj(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bPW(i,d))
h=q.b
h=h===A.i.iH(h)?""+A.i.V(h):B.w(h)
u=A.i.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mx(d){var w=this.a
return new B.Y(w,new C.bPZ(d),B.U(w).k("Y<1>"))},
aIB(d){return this.Mx(d).aV(0,new C.bPY(0.35))},
qd(d,e){return A.d.aV(this.a,new C.bPX(e))}}
C.ak_.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.Q()
w=B.K()
w.r=F.yi.gp(0)
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
b6.cJC(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hOb(s.a,s.b,c3)
s=b6.e
s.toString
$.Q()
r=B.K()
r.r=A.ac.gp(0)
r.c=3
r.d=A.bu
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.Q()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=F.MC.j(A.i.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wt
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.i.D(A.l9.aA(0,A.i.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cm8(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Aj(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.Q().r
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
a8=new B.bv()
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
a0=new B.bv()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.eo("!",b7,b7,A.cK,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aSQ.q(0,i)||D.A8.al(0,i)||i==="buck"||i==="regulator")&&!w.tP(e)&&w.Vz(e,0)+w.Vz(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.Q()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.av.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iH(new B.eo("!",b7,b7,A.cK,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=F.yi.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bi6(e)?A.c0:A.ac).gp(0)
c2.N(b0,6,k)
if(j&&w.bi6(e)){b0=new B.iH(new B.eo("+",b7,b7,A.cK,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.i.D(b2.r/0.8,0,1)
l=B.ar(M.Ni,F.a_1,b4)
l.toString
k=b2.f
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H6
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKb())){b5=A.d.cG(s,0,new C.bKc())
$.Q()
b9=B.K()
b9.r=D.bh1.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.cs,b7,b7,b7,D.fn2,A.a5,A.bX,b7,A.dz,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.o(12,10))}},
qT(d,e,f,g,h){var w=null,v=B.fq(w,A.cs,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.n(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
v.a5(d,f)},
cJC(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.Q().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hGd(a0,a1,a2)
e.E(new B.c6(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aS,F.MC,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aH,A.aS,A.i.D(r*1.2,0,1))
u.toString
o=u}else o=A.bm
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
if(q){n=new B.U_(new B.ry(B.xO(e),!1,B.a([],x.R))).gH(0)
m=40+A.i.D(r*120,0,160)
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
i=A.i.F(k*22+j*m*l,i.a.length())
v.iy()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iy()
h=t[u].b
h===$&&B.c()
g=A.i.F(i+j,h.a.length())
v.iy()
f=t[u].Di(g)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PG(d,e,f,g){var w,v,u,t
$.Q()
w=B.K()
v=g?A.b7:A.a7
u=g?A.b9:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Iu,null).aK(0,d))
return w},
aya(d,e,f){return this.PG(d,e,f,!0)},
c7b(d,e){return this.PG(d,A.bm,A.iG,e)},
aiO(d,e){var w,v,u
$.Q()
w=B.K()
w.sav(D.aR_.aK(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.eox)
v=e.a2(0,D.eoG)
u=B.K()
u.r=A.e8.gp(0)
u.c=1.2
d.ah(w,v,u)},
cm8(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.Q(),c0=B.K()
c0.sav(D.c6j.aK(0,D.f85))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.ot
c1.bZ(D.f7U,w)
if(c3){w=B.bn(D.f83,A.jM)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hlr(c2)
c1.ah(new B.o(-u,0),D.eq8,c0)
c1.ah(D.end,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGk(c1,c2)
break
case"solar":r=B.bn(D.f7X,A.iB)
c1.am(r,b3.PG(new B.a1(r.a,r.b,r.c,r.d),A.db,A.bP,!1))
b9=B.K()
w=B.ar(D.bkX,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.buf,A.mS,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aE,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9u))
c1.ar(D.a9u,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.Q()
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.cu.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aG($.Q().r,A.ai,b4,b4,B.a([],x.v))
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
c1.N(D.enh,4+4*w,b9)
break
case"crank":o=B.bn(D.f7I,A.fM)
c1.am(o,b3.aya(new B.a1(o.a,o.b,o.c,o.d),A.bw,A.bK))
b9=B.K()
b9.sav(D.aR0.aK(0,B.bX(A.H,12)))
c1.N(A.H,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cu.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.H,n,b9)
b9=B.K()
b9.sav(D.ezF.aK(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiO(c1,D.eq0)
b3.aiO(c1,D.en2)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
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
k=new B.aG(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c6(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c6(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bv()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.ezn.aK(0,B.bX(A.H,4.5)))
c1.N(A.H,4.5,b9)
break
case"switch":o=B.bn(D.f7P,A.mw)
b9=B.K()
b9.sav(D.asZ.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiO(c1,D.TY)
b3.aiO(c1,D.aLM)
h=c2.w?D.aLM:H.aLD
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.TY,h,b9)
b9=B.K()
b9.r=(c2.w?A.b5:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.TY,h,b9)
b9=B.kt(D.TY,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aRJ,D.aR5)
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
c1.ah(D.aM5,D.aLK,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aM5,D.equ,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.eo4,D.aLK,b9)
b9=B.K()
b9.r=A.dP.gp(0)
c1.N(A.H,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.fK[f]*22,0),20,9)
c1.am(B.bn(e,A.hQ),b3.PG(e,A.cZ,A.oa,!0))}break
case"pot":b9=B.K()
b9.sav(D.ezx.aK(0,B.bX(A.H,21)))
c1.N(A.H,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.ezl.aK(0,B.bX(A.H,13)))
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
case"resistor":a1=B.bn(D.aRJ,D.aR5)
b9=B.K()
b9.sav(D.c9B.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aS.gp(0)
c1.ar(D.f8h,b9)
b9=c2.r
b3.qT(c1,b9>=1000?"1k\u03a9":""+A.i.V(b9)+"\u03a9",D.ept,A.ac,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dy.j(0.55*w).gp(0)
v.y=A.wt
c1.N(H.vp,34,v)}o=B.bs(D.elX,12,18)
c1.am(B.bn(o,A.hQ),b3.PG(o,A.bm,A.eb,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.ds.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Ms
else{v=B.ar(A.eb,A.hF,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G3
else{m=B.ar(A.db,A.dy,c2.fx)
m.toString}w.sav(new B.bY(A.tQ,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bX(A.tq,17)))
c1.N(A.tq,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tq,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c6(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.eqo,D.eqq,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.enY,D.eo0,v)
w=B.a([],w)
a4=new B.aG(b9,A.ai,b4,b4,w)
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
else{w=B.ar(A.db,D.blY,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bIo
c1.N(A.tq,30,v)}w=B.K()
w.r=A.eb.gp(0)
w.c=2.4
c1.ah(D.eqw,D.eqv,w)
w=B.K()
w.r=A.eb.gp(0)
w.c=2.4
c1.ah(D.eo6,D.eo5,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c6(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bv())
v=B.K()
if(t)m=A.jm
else{m=B.ar(A.ek,D.bnI,c2.fx)
m.toString}if(t)k=A.kP
else{k=B.ar(A.ks,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aE,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f79))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jZ.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.es.gp(0)
c1.ar(D.f7f,v)
w=new B.aG(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c6(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.am(B.bn(a7,A.hR),b3.aya(a7,A.am,A.aO))
b9=B.K()
b9.r=A.cr.gp(0)
c1.ar(D.f6J,b9)
b9=B.K()
b9.r=A.cu.gp(0)
c1.ar(D.f6L,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLy,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.cF.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.H,3,w)
b9.restore()
b3.qT(c1,"M",D.eq_,A.as,14)
break
case"buzzer":a8=B.bs(A.H,42,42)
b9=B.K()
b9.sav(D.ezB.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.H,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aU.gp(0)
c1.N(A.H,6,b9)
b3.qT(c1,"+",D.epT,A.ac,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.i.F(b9.d*14,5):0
v=B.bX(A.H,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cC(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f7L,A.hR)
w=B.K()
w.sav(D.c7g.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c6(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.Q()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bmH.j(0.5*b9).gp(0)
w.y=A.kU
c1.af(a9,w)}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m5,Aa.yq,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hR)
w=B.K()
w.sav(D.c6b.aK(0,a7))
c1.am(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f7o,w)
for(p=0;p<4;++p){b0=new B.iH(new B.eo("\u2212",b4,b4,A.cK,b4,b4,b4,b4,b4,b4,new B.F(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jh(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.am(B.bn(b1,A.hQ),b3.c7b(b1,!1))
b9=38*c2.fx
w=18-b9
$.Q()
v=B.K()
v.r=A.b5.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qT(c1,"1F",H.vp,A.c,11)
break
case"radio":a1=B.bn(D.a9u,A.fM)
b9=B.K()
b9.sav(D.c9R.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.oa.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bn(D.f7M,A.iB)
w=B.K()
w.r=A.dU.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.m5.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fy:A.od).gp(0)
c1.ar(D.f6Q,b9)
if(c2.fx>0){b9=8+A.i.F(b3.b.d*7,18)
w=B.K()
w.r=A.bC.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aR0.aK(0,B.bX(D.a8r,6)))
c1.N(D.a8r,6,b9)
b9=B.K()
b9.r=A.oa.gp(0)
c1.N(D.enc,4,b9)
b9=B.K()
b9.r=A.eb.gp(0)
b9.c=1.8
c1.ah(D.en7,D.aLR,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLR,4+l*5+A.i.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nu.j(0.7).gp(0)
c1.cC(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f7W,A.hR)
v=B.K()
v.r=M.ny.gp(0)
c1.am(w,v)
b2=B.bn(D.f7T,A.hQ)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nS(b2),$.nq(),!0)
b9.translate(-33,-21)
L.hhp(c1,D.feH,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b5.gp(0)
c1.N(D.eno,1.6,b9)}else{w=B.K()
w.r=D.w9.gp(0)
c1.am(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bw.gp(0)
c1.ar(D.f7e,b9)
break}C.irV(c1,c2,b3.b.d,b3.gcbM())
if(t)b3.qT(c1,"\u2716",D.eqz,A.ay,14)
if(s)c1.c.restore()},
bGk(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.am(B.bn(w,A.mw),o.aya(w,A.db,A.jk))
v=new B.a1(-22,-13,22,13)
$.Q()
u=B.K()
u.sav(D.asS.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.dZ.gp(0)
d.ar(D.f7y,u)
t=new B.a1(28,-5,34,5)
d.am(B.bn(t,A.hA),o.PG(t,A.db,A.iG,!0))
o.qT(d,"+",D.emO,A.aS,11)
o.qT(d,"\u2212",D.eq1,A.ac,11)
o.qT(d,B.w(n===A.i.iH(n)?A.i.V(n):n)+"V",D.epI,A.aS,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.ar(D.f7x,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b5,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qT(d,"FLAT",D.eps,A.c0,9)}if(n>2){u=B.K()
u.r=A.aU.gp(0)
u.c=1
d.ah(D.em5,D.aLq,u)
o.qT(d,n>3?"3 cells":"2 cells",D.epH,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mw)
$.Q()
s=B.K()
s.sav(D.c9p.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.cX.gp(0)
d.ar(D.f7z,s)
for(q=0;q<2;++q){p=F.aCr[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.sav(D.aR_.aK(0,B.bX(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qT(d,"9V",D.epA,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iB)
$.Q()
s=B.K()
s.sav(D.asS.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.bi.gp(0)
d.ar(D.f7V,s)
for(q=0;q<2;++q){u=B.bn(B.bs(new B.o(F.IG[q],-20),8,10),A.hA)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cu.gp(0)
d.am(u,s)}o.qT(d,"+",D.emX,A.ay,10)
o.qT(d,"12V",D.epE,A.as,15)}},
aD(d){return!0}}
C.mZ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u_(o,r,q,p)
n.as6(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctF(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am2(m,u[1],l,u[3])}}}
C.ajY.prototype={
S(){var w=x.N
return new C.ajZ(A.H,A.az,B.T(w,x.gl),B.aR(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.ajZ.prototype={
aff(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJQ(w,d))
w.as=B.cy(A.lI,new C.bJR(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvX()},
a0T(d,e){return this.ck3(d,e)},
b3h(d){return this.a0T(d,!1)},
ck3(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rU:A.yB
p=d.b
w=3
return B.b(L.hhM(s,r,p,d.ax<3.2,q,$.qF().h(0,p).b),$async$a0T)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0T,v)},
cwN(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJS()),t=J.cC(u)
t.J(u,v)
t.br(u,new C.bJT(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2c(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iM,new C.bJU(w,u,d))}},
a0z(d){return this.cip(d)},
cip(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.it9(s,d.b,A.i.V(A.i.F(t.a.c.d*0.12,1)*100)),$async$a0z)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0z,v)},
a2c(d){return this.cum(d)},
cum(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bJO(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2c)
case 2:return B.h(null,v)}})
return B.i($async$a2c,v)},
Y(){this.a4()
this.bih()
this.mg()},
bih(){this.a.c.e=new C.bK8(this)},
my(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vK(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.Az)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0T(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"radio":if(s.fx>0){G.dE(900+A.cN.az(800),"",90,0,0.1,o)
if(A.cN.ai()<0.35)G.dE(300+A.cN.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cN.ai()<0.4
else u=!1
if(u)G.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dE(330+A.o.F(110*A.i.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.i.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new C.bK9())},
bal(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b3Y(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mt.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJD(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hGd(new B.o(k,n),new B.o(i,l),p)
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
afd(){this.a.toString
this.m(new C.bJi())},
bsB(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dcD[v]
if(!A.d.aV(p.a.c.a,new C.bKa(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JB:o
s=s?Q.JB:o
q=t.alb(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.afd()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sm[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fO(w,A.o.aq(w.length+1,2)):A.a_
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3N(s,!0))
n.a.toString
if(t)w.push(n.b3N(r,!0))
w.push(B.E(B.cq(new C.bK7(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.j,0,A.p)},
b3N(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qF()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.r(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AT,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nW,p,p,p)],n),A.l,p,A.bb,A.j,0,A.p),A.f,p,p,new B.p(s,p,new B.bH(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.or,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJj(this,u),p,p,p,p,p,p,!1,A.a4))}return B.r(p,B.cl(m,p,p,A.he,p,p,A.aL,!1),A.f,p,p,new B.p(I.BQ,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b19(d){var w=null,v=B.l(18)
return B.r(w,d,A.f,w,w,new B.p(F.afA,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alE,w,w,w)},
cm9(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qF().h(0,o),m=d.dy,l=d.fr,k=new C.bJC(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KJ,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.n(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bYa,p,p,p,new C.bJp(q,d),p,p,p,p,"Remove part",A.cf),B.aH(p,p,p,p,A.PT,p,p,p,new C.bJq(q),p,p,p,p,p,A.cf)],g),A.l,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EN,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fwk,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.i.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.i.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.i.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.aw,w,A.an,B.d(m,p,p,p,p,p,p,B.n(p,p,d.x?A.c0:A.aS,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bg9(d)
if(v!=null){l=(d.x?A.ay:A.av).j(0.14)
j=B.l(10)
i=B.L((d.x?A.ay:A.av).j(0.5),A.r,1)
m.push(new B.D(A.hW,B.r(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fDb,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.hfs(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJr(q,d,u),p,h,p))}l=B.bV(A.bH,l,A.bs,p,4,6)
l=B.a([A.an,l,A.aw,B.d(q.a.c.tP(d)?"Showing: "+F.Rk[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hm,p,p,p)],g)
if(q.a.c.tP(d))l.push(new E.fC(A.Hz,"Open big screen",new C.bJu(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o)&&!C.hfs(o)){l=B.a([A.an,B.d(q.a.c.tP(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hm,p,p,p)],g)
if(q.a.c.tP(d))l.push(new E.fC(A.PB,"Open the "+$.qF().h(0,o).b,new C.bJv(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o))A.d.v(m,B.a([A.an,new E.fC(A.CW,"Make it bigger (or tap it 4 times)",new C.bJw(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.i.ad(d.db,1)
if(q.a.c.tP(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.i.ad(i,1)+" V",p,p,p,p,p,p,D.fxb,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.duX[s]
j=r===A.i.iH(r)?A.i.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJx(q,d,r),p,h,p))}i.push(new B.D(A.lg,B.bV(A.bH,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fWg)
A.d.v(m,i)}if(q.a.c.Mk(d)&&!d.x){l=A.i.ad(d.cx,2)
j=A.i.ad(q.a.c.Aj(d),2)
i=q.a.c
w=i.aoO(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.n(p,p,i.aoO(d)?A.c0:A.er,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.l(4)
w=A.i.D(d.cx/q.a.c.Aj(d),0,1)
i=q.a.c.aoO(d)?A.ay:A.b5
m.push(new B.D(A.hW,B.x(B.a([l,A.cR,B.by(j,B.kp(A.bA,p,p,5,p,w,new B.lO(i,x.c)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.i.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hW,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fqM,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.djO[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJy(q,d,r),p,h,p))}m.push(B.bV(A.bH,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d9K[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJz(q,d,r),p,h,p))}m.push(B.bV(A.bH,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJA(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJB(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJs(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJt(d)))
if(o==="crank")m.push(D.fRu)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hm,p,p,p))
return q.b19(new B.cP(D.b6s,B.ce(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bd4.prototype={}
C.Wn.prototype={
S(){return new C.aF4(C.hlq(),new B.cw(null,x.q),B.aR(x.S))}}
C.aF4.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afe()},
afe(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fK2(),$async$afe)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.isj(t.d,r)
if(s!=null){t.m(new C.e0U(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
Fx(){var w,v=this
if(!v.as)return
w=C.ii6(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGs(w)},
jl(d){if(d!==A.fU)this.Fx()},
t(){$.aW.hV(this)
this.Fx()
this.a3()},
cbO(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e12(q),u).gI(0)
s=new B.Y(v,new C.e13(),u).gI(0)
r=new B.Y(v,w.gcZ7(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e14(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fx()
if(A.o.F(q.w,10)===0){w=q.f
$.aj6()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aj6()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JP("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e15())
q.Fx()
w=q.c
w.toString
w=B.PI(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aj6()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.ma,p,p,p,p,p,p,p,p,p,p))}},
ai_(){var w=0,v=B.j(x.H),u=this,t
var $async$ai_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e0T(u),t,null,!0,!0,x.H),$async$ai_)
case 2:return B.h(null,v)}})
return B.i($async$ai_,v)},
b18(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.r(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h6(new B.a5(40,38,new B.an(A.a0,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b17(d,e,f,g){return this.b18(d,e,f,g,null)},
asO(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.az(w,B.r(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e5,new B.dl(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.n(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.j,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agk(){var w=0,v=B.j(x.H),u=this,t
var $async$agk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ec(new C.e0P(u),!1,null,x.H)),$async$agk)
case 2:t=u.e.gbk()
if(t!=null)t.bih()
if(u.c!=null)u.m(new C.e0Q())
u.Fx()
return B.h(null,v)}})
return B.i($async$agk,v)},
bJs(){var w,v,u,t,s=null,r=this.f
$.aj6()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.ay
u=B.l(9)
t=B.L(I.BQ,A.r,1.5)
return B.r(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xp,s,s,s),s,s,s),A.f,s,D.b6z,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f4,s,s,s)},
aj9(){var w=0,v=B.j(x.H),u=this,t
var $async$aj9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mR,null,new C.e11(u),t,!0,!0,!0,A.kg,!1,!1,x.H),$async$aj9)
case 2:return B.h(null,v)}})
return B.i($async$aj9,v)},
cbP(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.r(r,D.bZs,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e17(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.r(r,D.bcm,A.f,r,r,new B.p(A.br,r,B.L(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.r(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fUe,B.d(w,r,1,A.a2,r,r,r,B.n(r,r,s.y>0||s.z>0?A.eU:A.ht,r,r,r,r,r,r,r,r,11.5,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.az6(s.gci6(),r),A.vx,s.b17(A.uK,"Construction Lab: real 3D wiring, plumbing and a house",A.cF,new C.e18(s,d)),s.b18(A.lM,"Challenges",A.aS,s.gczl(),s.bJs()),s.b17(A.CS,"How to play",A.aH,new C.e19(d,e))],v),A.l,r,A.e,A.j,0,r,r),A.an,B.A(B.a([s.asO(A.oy,"Circuits",A.bq,s.gcsc()),A.bn,s.asO(A.ow,"Repair",A.aS,new C.e1a(s)),A.bn,s.asO(K.wD,"Clear",A.c0,new C.e1b(s))],v),A.l,r,A.e,A.j,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(I.BQ,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bHK,r,r,r)},
B(d){var w=this,v=null
$.ats="tech"
return B.c4(v,A.c5,B.bm(!0,B.x(B.a([w.cbP(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hkh(w.d,w.e,w.gcbN(),v),1)],x.p),A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.az6.prototype={
S(){return new C.bbd(null,null)}}
C.bbd.prototype={
gaz6(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Z,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaz6().t()
this.bxi()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h6(new B.a5(42,42,B.c5(this.gaz6(),new C.cLe(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbc.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.H),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.Q()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.ot
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.ezw.aK(0,B.bX(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fZ(A.A,0,6.283185307179586,A.x,D.d0s,t,new B.mO(p)).aK(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cLd(d)
p.$3(s.a2(0,A.tq),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.eoi),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.eqG),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.cs,t,t,t,D.fn8,A.a5,A.bX,t,A.dz,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.o(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.azr.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azs.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvW()}}
C.aLz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzO.prototype={}
C.fQ.prototype={}
C.Ki.prototype={
a7(){return"ScreenStyle."+this.b}}
C.my.prototype={}
C.W6.prototype={
S(){return new C.blR(null,null)}}
C.blR.prototype={
gaao(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.oq,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaao().t()
this.bza()},
gSD(){var w=this.gaao().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aS0
return B.c4(w,X.ZF,B.bm(!0,new B.an(A.a0,w,A.ab,A.t,B.a([B.as(v.b===D.AB?this.bLA(v):this.coY(v),w,w,w),B.ap(w,B.aH(w,w,w,w,A.n5,w,w,w,new C.dY3(d),w,w,w,B.o2(w,A.aV,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.foS,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbQ(d){var w
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
coY(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9D
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c5(this.gaao(),new C.dY2(this,w,d,o),q)
if(p===D.a9E)v=new B.BK(D.bIn,v,q)
p=this.cbQ(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.l(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.H,36)],x.V)
return new B.fH(p,B.r(q,B.r(q,v,A.f,q,q,new B.p(A.w,q,q,B.l(w-3),q,q,A.n),q,q,q,q,A0.H4,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a8(A.aA,A.aE,A.x,r,q,q),A.n),q,q,q,D.bBN,new B.R(u,u,u,u),q,q,q),q)},
b9u(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.i.bh(this.gSD()*0.4),0,100),q=d.b===D.a9D,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tJ,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.r(t,t,A.f,t,t,new B.p(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bI4,t,t,t,3))}n.push(A.de)
n.push(D.fMK)
n.push(A.bn)
v=B.L(A.ac,A.r,1)
u=B.l(4)
n.push(B.r(t,new B.bM(A.a7,t,t,B.BY(A.A,B.r(t,t,A.f,t,t,new B.p(A.b5,t,t,B.l(2),t,t,A.n),t,t,t,A0.H4,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r7)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fDx,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.j,0,t,t),t)},
awZ(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.r(v,B.as(B.d(d.b,v,v,v,v,v,v,B.n(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dpS,new B.a8(A.aA,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.ftK,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dXZ(this,d),v,v,v,v,v,v,!1,A.a4)},
c27(d,e){return this.awZ(d,e,!0)},
c1P(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aS1||n===D.Eu,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ko,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b9u(d)
w=m?190:138
v=B.l(24)
u=B.L(A.aU,A.r,1)
w=B.az(o,B.r(o,B.by(B.l(23),B.b4(o,o,o,new C.afS(0,p.gSD(),o),A.fN),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.hX,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dXX(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kx[s]
t.push(new B.ch(A.A,o,o,p.c27(r,m?58:54),o))}k=B.a([k,A.an,w,A.af,B.E(B.kX(0.92,t,v,8,12,A4.wo,o,!1),1)],u)
if(n!==D.a9E){n=A.c.j(0.16)
w=B.l(28)
u=B.a([],u)
for(v=B.cW(F.kx,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bQ(v,v.gI(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awZ(q==null?t.a(q):q,50,!1))}k.push(B.r(o,B.A(u,A.l,o,A.qV,A.j,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bCI,H.an7,o,o,o))}return B.r(o,B.x(k,A.l,o,A.e,A.j,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a8(A.aA,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEY(d,e){var w=null
return B.r(w,B.x(B.a([this.b9u(d),B.E(B.b4(w,w,w,new C.afS(e,this.gSD(),w),A.fN),1),B.az(w,B.r(w,B.as(B.d(F.kx[e].a,w,w,w,w,w,w,A.Kx,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dXS(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLA(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.H,36)],x.V)
return new B.fH(1.5384615384615383,B.r(t,B.c5(this.gaao(),new C.dXV(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a8(A.aA,A.aE,A.x,w,t,t),A.n),t,t,t,D.bHF,new B.R(8,8,8,s),t,t,t),t)}}
C.bxQ.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.Q()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ko,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aE,A.x,B.a([u,A.dx,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bIs
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.afS.prototype={
a5(d,e){return L.M8(d,e,this.b,this.c)},
aD(d){return!0}}
C.aNn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwC.prototype={}
C.a9w.prototype={
B(d){var w=null
return B.c4(B.eI(w,w,w,!0,!0,D.aia,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,K.arP,w,w,w,new C.cmx(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h28,w,w,w,1,w,!0),D.aia,B.cl(B.a([D.es8,B.cq(new C.cmy())],x.p),w,w,D.bDN,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XI.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGy(w,new B.au(A.ax,$.aw()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aGy.prototype={
Y(){this.a4()
this.mg()},
b7m(d){var w=this.d.length
return A.o.F(A.i.bh(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
my(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7m(v.f)
if(w!==v.x){v.x=w
E.mw("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eUt(v))
C.JP("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdx(){if(this.d.length<2)return
this.m(new C.eUp(this))},
b1G(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eUo(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdw(),p=s.d,o=B.E(B.az(r,B.b4(r,r,r,new C.by1(p,s.f,r),A.fN),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fBE,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBB[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.az(r,B.r(r,B.d(p[v],r,r,r,r,r,r,D.fAQ,r,r,r),A.f,r,r,new B.p(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.hg,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eUr(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lB(A.aS,A.f6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.a_,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bt(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kj,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eUs(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fC(A.hY,"Add",s.gcdu(s),A.c,r),A.bn,new E.fC(A.ox,"Spin",q,A.b5,r)],w),A.l,r,A.e,A.j,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.by1.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.Q()
w=B.K()
w.r=D.biG.gp(0)
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
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=D.aBB[A.o.F(r,8)].gp(0)
d.cC(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cC(o,q,u,!0,p)
J.bo(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iH(new B.eo(p,l,l,A.cK,l,l,l,l,l,l,D.fnX),A.a5,A.bX,new B.jh(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahN.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aS.gp(0)
d.N(g,20,i)
m=new B.aG(k.r,A.ai,l,l,B.a([],x.v))
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
C.Wv.prototype={
S(){return new C.bm1($,A.bE,0,B.a([],x.X),null,null)}}
C.bm1.prototype={
Y(){this.a4()
this.mg()},
my(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JP("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UH(900,new C.e3T())}w.m(new C.e3U())},
b1I(d){return this.m(new C.e3O(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.i.aq(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.F(A.i.cD(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsJ(l,A.c0,n),A.aTw)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fsC,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.frC,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vB,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dmP[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e3Q(o,q),n,A.c0,n))}m=o.f
p=m?A6.uS:A.hx
m=m?"Pause":"Start"
return E.lB(A.c0,A.f6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e3R(o),A.b5,n),new E.fC(A.oA,"Reset",new C.e3S(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bsJ.prototype={
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
d.cC(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.VH.prototype={
S(){return new C.blB($,A.bE,0,B.a([],x.X),null,null)}}
C.blB.prototype={
Y(){this.a4()
this.mg()},
my(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T2.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPm())
u=A.i.F(p.f,v)
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
E.mw("flute",D.caF[t]+5,1400,0.35)}p.m(new C.dPn())},
gcdA(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L6("Press Start",0.5)
w=D.T2.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPh())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L6("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new B.L6("Hold",1)
case 2:return new B.L6("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new B.L6("Hold",0.5)}}}return new B.L6("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdA(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hr.j(0.12+(3-u)*0.05)
n.push(B.r(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hr.j(0.35),A.H,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pY,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kj,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.T2.gev(D.T2));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dPk(r,v),q,A.hr,q))}w=r.e
v=w?A.zr:A.hx
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dPl(r),A.b5,q))
return E.lB(A.hr,A.f6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJZ.prototype={}
C.Wm.prototype={
S(){return new C.blT(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.blT.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,K.oI,s,s,s,new C.e0o(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.l(18),new B.en(B.az(s,B.b4(s,s,s,new C.bnV(t.e,t.x,s),A.fN),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0p(t),new C.e0q(t),s,s,s,s,s,s,s,s,s,new C.e0r(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d1Z[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e0s(t,v),!1,s))}u=t.r
return E.lB(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bD,""+A.i.V(u),"Brush",30,2,new C.e0t(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e0u(t),A.CI,A.bD,s),new E.fC(A.pz,"Undo",new C.e0v(t),A.c,s),new E.fC(A.ei,"Clear",new C.e0w(t),A.c,s),new E.fC(A.Po,"Paper",new C.e0x(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bnV.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.Q()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bu
q.e=A.dQ
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
k=new B.c6(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.X5.prototype={
S(){var w=x.S
return new C.aFS(B.aR(w),B.aR(w))}}
C.aFS.prototype={
Y(){this.a4()
this.auj()},
auj(){var w,v,u=this,t=x.N,s=B.bq(D.ds0,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdv(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mw("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eri(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gan(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mV,new C.erj(s,v,u),t)
else{s.x=!0
B.bP(Ac.GF,new C.erk(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VC,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yN,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.n(q,q,w?A.aS:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iT,A.j,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hH(v,8,8,1,q),new C.ero(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.l,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d3y[t]
o.push(new E.dW(s.b,r.d===s.a,new C.erp(r,s),q,A.aH,q))}o.push(new E.fC(K.aqn,"New game",new C.erq(r),A.b5,q))
return E.lB(A.aH,A.f6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.Xf.prototype={
S(){return new C.aGc(B.a([],x.t))}}
C.aGc.prototype={
cdz(d){A.d.a8(this.d)
this.w=!0
this.b1H()},
b1H(){this.d.push(A.cN.az(4))
this.e=0
this.a_X()},
a_X(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eC4(t))
s=x.H
w=3
return B.b(B.bP(A.lH,null,s),$async$a_X)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVv(n)
w=7
return B.b(B.bP(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_X)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eC5(t))
case 1:return B.h(u,v)}})
return B.i($async$a_X,v)},
aVv(d){this.m(new C.eC2(this,d))
E.mw("marimba",D.caE[d]+5,450,0.55)
B.bP(A.GD,new C.eC3(this),x.H)},
cdB(d){var w,v,u=this
if(!u.w||u.r)return
u.aVv(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eC6(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eC7(u))
B.bP(A.hG,new C.eC8(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aW4,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fC2,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAu[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aAu[v].j(0.8),A.H,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b1,new B.p(u,p,new B.bH(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jn,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eC9(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ad,B.x(B.a([o,A.an,n,A.d8,new B.fH(1,B.kX(1,l,2,12,12,p,A.dY,!1),p)],m),A.l,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lB(A.bi,A.f6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hx,n,q.gcdy(q),A.b5,p)],m),p,p))}}
C.Xz.prototype={
S(){return new C.bn8(new B.au(A.ax,$.aw()))}}
C.bn8.prototype={
axS(d){return B.p8(A.i.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.ePX(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cX(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQ5()
l=B.aM(m,A.a_,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A8.xP),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b5_),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lV,"Bill amount",!0,!0,!1,m,m,m,m,D.fzk,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ea,m,m,m,1,m,m,!1,"\u2022",m,new C.eQ1(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aV3,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b5.j(0.1)
s=B.l(20)
r=B.L(A.b5.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.r(m,B.x(B.a([t.$2("Tip ("+A.i.V(n.e)+"%)","$"+n.axS(w)),t.$2("Total","$"+n.axS(v)),A5.NJ,t.$3$big("Each of "+n.f+" pays","$"+n.axS(u),!0)],q),A.l,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fs,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cOU[p]
r.push(new E.dW(""+o+"%",A.i.V(n.e)===o,new C.eQ2(n,o),m,A.b5,m))}l=n.f
return E.lB(A.b5,A.f6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aH,""+l,"People",20,1,new C.eQ3(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eQ4(n),m,A.aS,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.X4.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmD(w,A.cN,$,A.bE,0,B.a([],x.X),null,null)}}
C.bmD.prototype={
Y(){this.a4()
this.mg()},
my(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
E.XB("snare",0,0.5)}u.m(new C.epY())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mw("bell",24,400,0.5)}u.m(new C.epZ())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bft(v,o.r>0,n))}u=B.az(n,B.as(B.bV(A.fS,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epR(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.cZ,A.r,6)
s=B.a([new B.ac(0,A.G,A.aS.j(0.4),A.H,30)],x.V)
u=B.az(n,B.as(B.e1(A.A,B.r(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fyu,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.ezA,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epS(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fnq,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kj,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epT(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dk1[r]
v.push(new E.dW(q.b,o.d===q.a,new C.epU(o,q),q.c,A.bq,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.bq,""+s,"Dice",4,1,new C.epV(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.bq,""+s,"From",100,1,new C.epW(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.bq,""+p,"To",1000,2,new C.epX(o),p)],m))}return E.lB(A.bq,A.f6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bft.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cN.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cB,14)],x.V)
t=B.a([],x.p)
for(s=D.dDY.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.r(p,p,A.f,p,p,O.aeA,p,18,p,p,p,p,p,18),p))
return B.eN(A.A,w,B.r(p,new B.an(A.a0,p,A.ab,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bF,p,p,100),p)}}
C.aN9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzK.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byX()}}
C.aNu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzQ.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzi()}}
C.aNX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzZ.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzM()}}
C.aOn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA7.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bAc()}}
var z=a.updateTypes(["P(u_)","~()","P(a5C)","aB<~>()","P(D8)","G(u_,G)","H(H,u_)","P(D4)","P(a_C)","P(acF)","P(a4t)","P(nM)","XA()","VG()","a9w()","Xa()","Xp()","Xb()","P(mZ)","VM()","aga(Z,G)","af1(Z,G)","~(a9<@,@>)","G(D4,D4)","m(eh)","P(afZ)","P(a1Q)","P(Dj)","P(ad9)","P(af4)","P(acT)","G(G,rb)","G(G,D8)","m(rb)","~(rb,ai<m>,G)","rb?(D8)","X4()","v(m,a1D)","P(aby)","~(Bb)","XD()","~(uP,m,o,u,H)","~(m,u_)","Wn()","WP(Z)","Og(Z)","W6(Z,bw<H>,bw<H>)","XI()","Wv()","VH()","Wm()","X5()","Xf()","Xz()","P(rb)"])
C.fKq.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fz5.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fGP.prototype={
$1(d){var w
if(!this.a.Mk(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fGQ.prototype={
$1(d){return d.x},
$S:z+0}
C.fKn.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fKo.prototype={
$1(d){var w
if(!this.a.Mk(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fKp.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ej5.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ej6.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ej7.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mr(v,A.dH,A.iu)}},
$S:7}
C.eji.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejj.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eje.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejc.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejd(w,this.b,e)))},
$S:1903}
C.ejd.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejf.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX1().alb(0,u[1],u[2],u[3])
u[4].bO(0,new C.eja(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejb(w.a,v,w.f,w.r))},
$S:0}
C.eja.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:206}
C.ejb.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejg.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX1().am2(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ej9(w.a,v,w.e,w.f))},
$S:0}
C.ej9.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejh.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ej8(w,this.b))},
$S:0}
C.ej8.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejm.prototype={
$0(){var w=this.a
return w.m(new C.ejl(w))},
$S:0}
C.ejl.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejn.prototype={
$0(){var w=this.a
return w.m(new C.ejk(w))},
$S:0}
C.ejk.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejo.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PO()},
$S:0}
C.ejp.prototype={
$0(){return this.a.Z6(this.b)},
$S:0}
C.ejq.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PO():w.aYw()},
$S:2}
C.ejr.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PO():w.aYw()},
$S:0}
C.eyo.prototype={
$2(d,e){return d+e},
$S:1904}
C.eyI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eyH(w,d))},
$S:1905}
C.eyH.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eyJ.prototype={
$0(){},
$S:0}
C.eyK.prototype={
$0(){},
$S:0}
C.eyq.prototype={
$0(){return this.a.m(new C.eyp(this.b,this.c))},
$S:0}
C.eyp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyf.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.eyg.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.eyh.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.eyi.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.eyj.prototype={
$1(d){return this.a.db===d},
$S:34}
C.eyk.prototype={
$1(d){return this.a.db=d},
$S:30}
C.eyl.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:34}
C.eym.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:30}
C.eyn.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyd.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.eye.prototype={
$1(d){return this.a.$1(!1)},
$S:111}
C.eyc.prototype={
$1(d){return this.a.$1(!1)},
$S:139}
C.eyB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bjm(o,p),n)
w=this.b
v=C.bCl("WORLD",w.a,w.c)
u=C.bCl("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.V(t*100)
t=t<0.25?A.c0:A.b5
t=C.bCl("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.V(s*100)
s=s>D.Dt[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bCl("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCl("HEIGHT",""+A.i.V(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iT,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI_(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tc[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oB,"Again",new C.eyw(o),A.c,p),new E.fC(A.ow,"Rebuild",new C.eyx(o),A.aS,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jH,"Next world",new C.eyy(o),A.b5,p))
n.push(C.hzj("Perfect landing!",w,A.b5,v))}if(o.as==="crashed")n.push(C.hzj("Crash!",o.at,A.c0,B.a([new E.fC(A.oB,"Try again",new C.eyz(o),A.b5,p),new E.fC(A.ow,"Rebuild",new C.eyA(o),A.aS,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:67}
C.eyw.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyx.prototype={
$0(){var w=this.a
return w.m(new C.eyt(w))},
$S:0}
C.eyt.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyy.prototype={
$0(){var w=this.a
return w.m(new C.eys(w))},
$S:0}
C.eys.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eyz.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyA.prototype={
$0(){var w=this.a
return w.m(new C.eyr(w))},
$S:0}
C.eyr.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyC.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eyv(v,w))},
$S:0}
C.eyv.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eyD.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eyE.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eyF.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eyG.prototype={
$0(){var w=this.a
return w.m(new C.eyu(w))},
$S:0}
C.eyu.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPf.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.hut(),C.huu()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cO(J.t(r,1)))
q.m(new C.dPe(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPe.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOQ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOR.prototype={
$0(){return this.a.bZT(B.aV(J.t(this.b,"group")))},
$S:0}
C.dOS.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOT.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.i.V(d*255),0,255),16),2,"0")},
$S:318}
C.dPg.prototype={
$0(){return E.XB("kick",0,0.25)},
$S:0}
C.dOU.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dOV.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOW.prototype={
$0(){return E.XB("kick",0,0.5)},
$S:0}
C.dOX.prototype={
$0(){return G.dE(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dOZ.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dOY(u)))u.cy=null
u.id=0},
$S:0}
C.dOY.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAj(d)},
$S:z+10}
C.dON.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dOO.prototype={
$0(){var w=this.a
return w.m(w.gc9w())},
$S:0}
C.dOP.prototype={
$0(){return this.a.aeE(null)},
$S:0}
C.dP5.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dP6.prototype={
$0(){return this.a.cFY(this.b.a)},
$S:0}
C.dP7.prototype={
$0(){return this.a.aeE(this.b)},
$S:0}
C.dP8.prototype={
$1(d){var w=this.a
return w.m(new C.dP4(w,d))},
$S:6}
C.dP4.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dP9.prototype={
$0(){var w=this.a
return w.m(new C.dP3(w,this.b))},
$S:0}
C.dP3.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPa.prototype={
$0(){var w=this.a
return w.m(new C.dP2(w))},
$S:0}
C.dP2.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.m(new C.dP1(w))},
$S:0}
C.dP1.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LO},
$S:0}
C.dPc.prototype={
$0(){var w=this.a
return w.m(new C.dP0(w))},
$S:0}
C.dP0.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0h()
else w.p3=null},
$S:0}
C.dPd.prototype={
$0(){var w=this.a
return w.m(new C.dP_(w))},
$S:0}
C.dP_.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6v.prototype={
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
$S:295}
C.c6w.prototype={
$1(d){var w=new B.qs([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:380}
C.fsl.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:215}
C.fsm.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:215}
C.fsn.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:215}
C.fsu.prototype={
$1(d){return!J.t(d,0)},
$S:215}
C.fsv.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:215}
C.fsw.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:215}
C.dQV.prototype={
$1(d){return this.a.av7(0)},
$S:7}
C.dQz.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ihv(),B.U(w).k("N<1,G>")).fM(0)},
$S:0}
C.dQC.prototype={
$1(d){return""+d},
$S:77}
C.dQW.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQx.prototype={
$1(d){return this.a.av7(this.b)},
$S:7}
C.dQy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayY(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mP(0,d,a1.mh(0.15,0.3))
u=a1.mP(0,d,a1.mh(0.15,0.62))
t=a1.mP(0,"and",a1.mh(0.48,0.46))
s=a1.mP(0,a0,a1.mh(0.82,0.46))
a1=t.a
w.push(new C.nM(v.a,a1,0))
w.push(new C.nM(u.a,a1,1))
w.push(new C.nM(a1,s.a,0))
break
case 1:v=a1.mP(0,d,a1.mh(0.12,0.25))
u=a1.mP(0,d,a1.mh(0.12,0.65))
r=a1.mP(0,"xor",a1.mh(0.46,0.25))
q=a1.mP(0,"and",a1.mh(0.46,0.65))
p=a1.ayX(0,a0,a1.mh(0.82,0.25),0)
o=a1.ayX(0,a0,a1.mh(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nM(a1,n,0))
m=u.a
w.push(new C.nM(m,n,1))
l=q.a
w.push(new C.nM(a1,l,0))
w.push(new C.nM(m,l,1))
w.push(new C.nM(n,p.a,0))
w.push(new C.nM(l,o.a,0))
break
case 2:k=a1.mP(0,"clock",a1.mh(0.15,0.4))
j=a1.mP(0,"not",a1.mh(0.45,0.65))
s=a1.mP(0,a0,a1.mh(0.82,0.3))
i=a1.mP(0,"buzzer",a1.mh(0.82,0.65))
a1=k.a
w.push(new C.nM(a1,s.a,0))
n=j.a
w.push(new C.nM(a1,n,0))
w.push(new C.nM(n,i.a,0))
break
default:h=a1.mP(0,d,a1.mh(0.12,0.25))
g=a1.mP(0,d,a1.mh(0.12,0.7))
f=a1.mP(0,"nor",a1.mh(0.5,0.25))
e=a1.mP(0,"nor",a1.mh(0.5,0.7))
s=a1.mP(0,a0,a1.mh(0.86,0.25))
a1=f.a
w.push(new C.nM(g.a,a1,0))
n=e.a
w.push(new C.nM(n,a1,1))
w.push(new C.nM(h.a,n,0))
w.push(new C.nM(a1,n,1))
w.push(new C.nM(a1,s.a,0))}},
$S:0}
C.dQD.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayY(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D4(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mP(0,w.e,o.mh(0.86,0.5))},
$S:0}
C.dQs.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQt.prototype={
$2(d,e){return A.i.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQu.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQv.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQw.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adY(this.c)
if(v.ax)C.JP("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQE.prototype={
$0(){},
$S:0}
C.dQF.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dQG.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQB.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new C.dQA(v))
w.cy=null},
$S:0}
C.dQA.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQr.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mP(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQP.prototype={
$0(){var w=this.a
return w.m(new C.dQO(w))},
$S:0}
C.dQO.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQQ.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c3,B.jm(B.b4(w,w,w,new C.bdm(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQJ(v),w,w,w,new C.dQK(v),new C.dQL(v),new C.dQM(v),w,w,w,w,w,w,w,w,w,w,new C.dQN(v),w,w,w,!1,A.a4)},
$S:36}
C.dQN.prototype={
$1(d){return this.a.cbh(d.b)},
$S:69}
C.dQL.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ckh(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azP(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:48}
C.dQM.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQK.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2o(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dQH(w))
u=t.as
u.toString
v.push(new C.nM(u,w.a,w.b))
B.jX()}}t.z=t.as=null},
$S:38}
C.dQH.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQJ.prototype={
$1(d){return this.a.axL(d.b)},
$S:292}
C.dQR.prototype={
$0(){return this.a.bDO(this.b.a)},
$S:0}
C.dQS.prototype={
$0(){return this.a.av7(this.b.a)},
$S:0}
C.dQT.prototype={
$0(){var w=this.a
return w.m(new C.dQI(w))},
$S:0}
C.dQI.prototype={
$0(){var w=this.a
w.ayY(0)
w.ay=null},
$S:0}
C.dQU.prototype={
$0(){return this.a.cBB(this.b)},
$S:0}
C.cVQ.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.n(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:266}
C.dX6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dX5.prototype={
$0(){return this.a.d=null},
$S:0}
C.dX8.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4h()},
$S:127}
C.dX7.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.fsM.prototype={
$0(){return K.aLa},
$S:z+40}
C.fsN.prototype={
$0(){return D.dPx},
$S:z+43}
C.fsO.prototype={
$0(){return D.dMp},
$S:z+13}
C.fsP.prototype={
$0(){return D.efV},
$S:z+14}
C.fsQ.prototype={
$0(){return D.dYO},
$S:z+15}
C.fsR.prototype={
$0(){return K.aL1},
$S:z+16}
C.fsS.prototype={
$0(){return D.edH},
$S:z+17}
C.fsT.prototype={
$0(){return K.aL9},
$S:z+12}
C.fsU.prototype={
$0(){return D.dOF},
$S:z+19}
C.f8b.prototype={
$2(d,e){return new C.aga($.bGP()[e],new C.f8a(e,this.a),null)},
$S:z+20}
C.f8a.prototype={
$0(){var w=this.a,v=I.aII.h(0,$.bGP()[w].a)
$.ats=v==null?"music":v
B.a6(this.b,!1).ce(B.ec(new C.f88(w),!1,null,x.H))},
$S:0}
C.f88.prototype={
$1(d){return $.bGP()[this.a].e.$0()},
$S:39}
C.f8c.prototype={
$2(d,e){return new C.af1(D.aB6[e],new C.f89(this.a,e),null)},
$S:z+21}
C.f89.prototype={
$0(){return this.a.d.$1(D.aB6[this.b])},
$S:0}
C.f7S.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f7R.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f7Q.prototype={
$1(d){var w=this
return new B.dY(new C.f7P(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f7P.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fJy,A.aw,D.fQo,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fyO,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bc,B.aM(a0,A.a_,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EM,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jw,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bc,B.aM(a0,A.a_,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EM,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jw,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dza[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.r(a0,B.X(j,u[p].A(0,j)?A.c:A.aT,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bH(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fB,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f7N(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.an,new B.c8(A.aL,A.e,A.j,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bJ(A.AW,a0,new C.f7O(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A2.yO,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:101}
C.f7N.prototype={
$0(){var w=this
return w.a.$1(new C.f7M(w.b,w.c,w.d))},
$S:0}
C.f7M.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f7O.prototype={
$0(){var w=this,v=w.a
v.m(new C.f7L(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f7L.prototype={
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
C.f8_.prototype={
$0(){var w=this.a
return w.m(new C.f7Z(w))},
$S:0}
C.f7Z.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f80.prototype={
$0(){return E.uG(this.b,this.a.f,"scene")},
$S:0}
C.f81.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gan(u),0.4)
u.toString
w=this.a.ga_v().x
w===$&&B.c()
return B.c2(v,new B.p(v,v,v,v,v,new B.bY(D.b2u,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c5],x.O),v,v),A.n),A.bj)},
$S:298}
C.f82.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.ev(A.A,B.c5(new B.h7(B.a([u.guI(),u.ga_v()],x.dS)),new C.f7Y(u,this.b,v),w),A.f,A.e4),w,w,w)},
$S:237}
C.f7Y.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guI().x
r===$&&B.c()
w=r<0.9?1:1-C.btF(r,0.9,0.98)
v=s.ga_v().x
v===$&&B.c()
u=A.dC.aA(0,v)
switch(s.gayZ().a){case 0:s=s.bCZ(t.b,r,u,t.c)
break
case 1:s=s.bTW(t.b,r,u,t.c)
break
case 2:s=s.cGs(t.b,r,u,t.c)
break
case 3:s=s.bFV(t.b,r,u,t.c)
break
case 4:s=s.bJg(t.b,r,u,t.c)
break
case 5:s=s.cbi(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:202}
C.f83.prototype={
$2(d,e){var w=B.abl(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gan(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gan(v),0.4)
v.toString
v=w.cPq(u,A.bA,v,3.5)
u=this.a
w=u.guI().x
w===$&&B.c()
return B.Z_(B.kY(null,null,null,1,0,new C.f7X(u),A.i.D(w,0,1)),v)},
$S:1907}
C.f7X.prototype={
$1(d){var w=this.a
w.guI().sp(0,d)
if(w.as)w.m(new C.f7T(w))},
$S:6}
C.f7T.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f84.prototype={
$0(){var w=this.a
w.guI().sp(0,0)
w.af3()},
$S:0}
C.f85.prototype={
$1(d){var w=this.a
w.m(new C.f7W(w,d))
if(w.as)w.af3()},
$S:6}
C.f7W.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f86.prototype={
$0(){var w=this.a
w.m(new C.f7V(w,this.b))
w.guI().sp(0,0)
if(w.as)w.af3()},
$S:0}
C.f7V.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f87.prototype={
$0(){var w=this.a
return w.m(new C.f7U(w,this.b))},
$S:0}
C.f7U.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f7J.prototype={
$2(d,e){return A.i.aS(d.a,e.a)},
$S:1908}
C.f7K.prototype={
$1(d){return d.b},
$S:1909}
C.dr3.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dr4.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dr0.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dr1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dr2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dr5.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dr6.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dr7.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dr8.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dr9.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dra.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drb.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drc.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.drd.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.exJ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exy.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.exA.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.exB.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.exE.prototype={
$1(d){var w=D.n7.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.exF.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.exG(d),p.k("Y<1>")),new C.exH(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.exG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exH.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.exC.prototype={
$1(d){return D.n7.h(0,d.b).c===D.xJ},
$S:z+54}
C.exD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ey8.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vK(0,u)
w.a7q(A.o.aq(v,1000))},
$S:7}
C.exI.prototype={
$0(){},
$S:0}
C.exu.prototype={
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
C.exL.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n7.h(0,v).b,D.n7.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h13,w,B.d(D.n7.h(0,v).a,w,w,w,w,w,w,A.h0,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.arT,w,w,w,w,new C.exK(d),!1,w,w,w,w,w,w,w,D.fTh,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.exK.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exN.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.erX],x.p)
for(w=0;w<6;++w){v=D.aBv[w]
u=B.d(v.a,t,t,t,t,t,t,A.h0,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c2O,t,t,t,t,new C.exM(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lV,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bHy,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.exM.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.exx.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.exv(d),w,w),B.bN(!1,A.ER,w,w,!0,w,w,w,new C.exw(d),w,w)],x.p),w,w,I.m7,D.fQB,w,w,w,w,D.fTB,w)},
$S:18}
C.exv.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.exw.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ey6.prototype={
$0(){var w=this.a
return w.m(new C.ey5(w))},
$S:0}
C.ey5.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ey7.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.no(new C.exX(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bdf:t
v=B.a([B.b4(u,t,t,new C.bjk(w,v,new C.exY(r),new C.exZ(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c5(w,new C.ey_(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKW())
return B.az(A.c3,B.jm(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ey0(r),t,r.gclA(),t,new C.ey1(r),new C.ey2(r),new C.ey3(r),t,t,t,t,t,t,t,t,t,t,new C.ey4(r),t,t,t,!1,A.a4)},
$S:36}
C.exX.prototype={
$0(){return this.a.ad0(this.b)},
$S:0}
C.ey4.prototype={
$1(d){return this.a.cE9(d.b)},
$S:69}
C.ey2.prototype={
$1(d){return this.a.clB(d.b)},
$S:48}
C.ey3.prototype={
$1(d){return this.a.clC(d.b)},
$S:19}
C.ey1.prototype={
$1(d){return this.a.b3O()},
$S:38}
C.ey0.prototype={
$1(d){return this.a.adI(d.b)},
$S:292}
C.exY.prototype={
$0(){return this.a.z},
$S:701}
C.exZ.prototype={
$0(){return this.a.Q},
$S:751}
C.ey_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPd()
if(p.length===0)return A.bL
w=A.w.j(0.55)
v=B.l(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fNX,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aW0,q,q,q))
return B.r(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.hg,q,q,q)},
$S:66}
C.exz.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.em,B.A(B.a([B.r(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ad.Vx,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abc,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1911}
C.exT.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.exU.prototype={
$0(){var w=this.a
return w.m(new C.exS(w))},
$S:0}
C.exS.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exV.prototype={
$0(){var w=this.a
return w.m(new C.exR(w))},
$S:0}
C.exR.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.exW.prototype={
$0(){var w=this.a
return w.m(new C.exQ(w))},
$S:0}
C.exQ.prototype={
$0(){return this.a.r=!0},
$S:0}
C.exP.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n7.gdO(D.n7),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.n(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyU(p[r]))
return new B.D(R.ala,B.x(B.a([new B.D(Ai.amS,w,q),B.A(u,A.l,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.exO.prototype={
$0(){return this.a.cbo(this.b)},
$S:0}
C.dr_.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.n(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:266}
C.bPP.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQ_.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPV.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQ0.prototype={
$1(d){return this.a.Mk(d)&&!d.x},
$S:z+0}
C.bQ1.prototype={
$2(d,e){return Math.max(d,this.a.aCG(e))},
$S:z+6}
C.bQ3.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQ4(w))},
$S:z+5}
C.bQ4.prototype={
$0(){return this.a.a},
$S:89}
C.bQ2.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQ5.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQ6(w))},
$S:z+5}
C.bQ6.prototype={
$0(){return this.a.a},
$S:89}
C.bPR.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPS(w))},
$S:z+5}
C.bPS.prototype={
$0(){return this.a.a},
$S:89}
C.bPQ.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bPT.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPU(w))},
$S:z+5}
C.bPU.prototype={
$0(){return this.a.a},
$S:89}
C.bPO.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQ7.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPW.prototype={
$1(d){return d!==this.b&&this.a.aJ_(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPZ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPY.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPX.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKb.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKc.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctF.prototype={
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
$S:206}
C.fWh.prototype={
$1(d){var w
$.Q()
w=B.K()
w.r=d.gp(0)
return w},
$S:1912}
C.fWj.prototype={
$2(d,e){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1913}
C.fWk.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1914}
C.fWi.prototype={
$3(d,e,f){var w
$.Q()
w=B.K()
w.sav(new B.a8(A.b7,A.b9,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1915}
C.bJQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJP(w))},
$S:0}
C.bJP.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJS.prototype={
$0(){return B.a([],x.C)},
$S:1916}
C.bJT.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:451}
C.bJU.prototype={
$0(){var w,v,u
J.bGY(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tP(v))if(C.hfs(v.b))w.b3h(v)
else w.a0z(v)
else{u=w.a.c.bg9(v)
w.aff(u==null?"The "+$.qF().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJO.prototype={
$1(d){return new B.dY(new C.bJL(this.a,this.b),null)},
$S:20}
C.bJL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJM(this.a,o,a3),m=$.qF(),l=o.b,k=m.h(0,l).d,j=A.i.V(o.ch/1.04),i=new C.bJN(o,n,k),h=B.l(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.H,26)],f),d=B.r(p,p,A.f,p,p,new B.p(A.aU,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.r(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pX,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jP,p,p,p),D.fNL],a0),A.E,p,A.e,A.j,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.r(p,B.d(""+A.i.V(o.ch*100)+"%",p,p,p,p,p,p,B.n(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.mc,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.L(A.dl,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.H,14)],f)
v=B.r(p,B.as(B.cT(p,B.as(B.ev(A.A,new B.D(A.hI,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mB,p,p,p),p),A.f,A.dB),p,p,p),p,p,A.b1,new B.p(p,p,q,s,f,new B.a8(A.aA,A.aE,A.x,r,p,p),A.n),A.eI,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.j,0,p,p)
w=B.aH(p,p,p,p,B.X(A.aqf,k,p,p,p,30),p,p,p,new C.bJH(n,o),p,p,p,p,p,p)
t=B.abl(a2).bfD(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z_(B.kY(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aH(p,p,p,p,B.X(A.a2p,k,p,p,p,30),p,p,p,new C.bJI(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
return B.bm(!0,B.r(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.aw,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hm,p,p,p),1),B.bN(!1,A_.aX2,p,p,!0,p,p,p,new C.bJJ(a2),p,B.fv(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.rY,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.j,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.ca3,A.n),p,p,p,A.yF,D.bE5,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bJM.prototype={
$1(d){var w=this.a
w.m(new C.bJF(this.b,d))
this.c.$1(new C.bJG())
w.a.toString},
$S:6}
C.bJF.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bJG.prototype={
$0(){},
$S:0}
C.bJN.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.n(v,v,u?w.c:A.ac,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e4),v,v,v),v,v,A.b1,new B.p(t,v,r,s,v,v,A.n),A.h3,v,v,v,A.jp,A.qB,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJK(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:715}
C.bJK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJH.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJI.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJJ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bK8.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.aff("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aff("\u26a0 Overloaded! The "+$.qF().h(0,e.b).b+" can only give about "+A.i.ad(w.a.c.Aj(e),2)+" amps but your gadgets are asking for "+A.i.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aff("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bK9.prototype={
$0(){},
$S:0}
C.bJi.prototype={
$0(){},
$S:0}
C.bKa.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bK7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.az(A.c3,B.b4(p,p,p,new C.ak_(w,v,u,t,s,r==null?A.jr:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK1(o),new C.bK2(o),new C.bK3(o),p,p,p,p,p,p,p,p,p,p,new C.bK4(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bcw)
w=o.Q
if(w!=null){v=B.l(14)
u=B.L(A.cF,A.r,1)
n.push(B.ap(p,B.az(p,B.r(p,B.A(B.a([D.fDW,B.E(B.d(w,p,p,p,p,p,p,D.fvE,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(D.biz,p,u,v,p,p,A.n),p,p,p,p,A.nF,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK5(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b19(B.A(B.a([D.bJM,new E.fC(A.CJ,"Cut wire",new C.bK6(o),A.c0,p)],q),A.l,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cm9(w),p,p,10,10,p,p))}return B.jm(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:306}
C.bK2.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bal(s)
if(r!=null){t.m(new C.bK_(t,r,d))
return}w=t.b3Y(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bK0(t,w))}},
$S:48}
C.bK_.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bK0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bK3.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJY(w,d))
else if(w.w!=null)w.m(new C.bJZ(w,d.b.a2(0,w.x)))},
$S:19}
C.bJY.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJZ.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.i.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.i.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bK1.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.bal(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am2(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.afd()},
$S:38}
C.bK4.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3Y(v)
if(u!=null){w.m(new C.bJW(w,u))
if(D.mt.al(0,u.b))w.cwN(u)
w.a.toString
return}w.m(new C.bJX(w,w.cJD(v)))},
$S:69}
C.bJW.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJX.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bK5.prototype={
$0(){var w=this.a
return w.m(new C.bJV(w))},
$S:0}
C.bJV.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bK6.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.afd()},
$S:0}
C.bJj.prototype={
$0(){return this.a.bsB(this.b)},
$S:0}
C.bJC.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fpJ,w,w,w),B.E(B.kY(this.b.d,w,w,g,h,new C.bJE(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1917}
C.bJE.prototype={
$1(d){var w=this.a
w.m(new C.bJD(this.b,d))
w.a.toString},
$S:6}
C.bJD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJp.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.afd()},
$S:0}
C.bJq.prototype={
$0(){var w=this.a
return w.m(new C.bJo(w))},
$S:0}
C.bJo.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJr.prototype={
$0(){this.a.m(new C.bJn(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJn.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJu.prototype={
$0(){return this.a.b3h(this.b)},
$S:0}
C.bJv.prototype={
$0(){return this.a.a0z(this.b)},
$S:0}
C.bJw.prototype={
$0(){return this.a.a2c(this.b)},
$S:0}
C.bJx.prototype={
$0(){var w=this.a
w.m(new C.bJm(this.b,this.c))
w.a.toString},
$S:0}
C.bJm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJy.prototype={
$0(){var w=this.a
w.m(new C.bJl(this.b,this.c))
w.a.toString},
$S:0}
C.bJl.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJz.prototype={
$0(){var w=this.a
w.m(new C.bJk(this.b,this.c))
w.a.toString},
$S:0}
C.bJk.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJA.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJB.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJs.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJt.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fsx.prototype={
$1(d){return d.aIB("bulb")},
$S:z+2}
C.fsy.prototype={
$1(d){return d.qd(0,"switch")&&d.aIB("bulb")},
$S:z+2}
C.fsz.prototype={
$1(d){return A.d.aV(d.a,new C.fsk())},
$S:z+2}
C.fsk.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fsA.prototype={
$1(d){return d.qd(0,"resistor")&&A.d.aV(d.a,new C.fsj())},
$S:z+2}
C.fsj.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fsB.prototype={
$1(d){return!d.qd(0,"battery")&&d.aIB("bulb")},
$S:z+2}
C.fso.prototype={
$1(d){return A.d.aV(d.a,new C.fsi())},
$S:z+2}
C.fsi.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsp.prototype={
$1(d){return A.d.aV(d.a,new C.fsh())},
$S:z+2}
C.fsh.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsq.prototype={
$1(d){return A.d.aV(d.a,new C.fsg())},
$S:z+2}
C.fsg.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fsr.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fse())&&A.d.aV(w,new C.fsf())&&d.qd(0,"buck")},
$S:z+2}
C.fse.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsf.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fss.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsc())&&A.d.aV(w,new C.fsd())},
$S:z+2}
C.fsc.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fsd.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fst.prototype={
$1(d){return A.d.aV(d.a,new C.fsb())},
$S:z+2}
C.fsb.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e0U.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e12.prototype={
$1(d){var w=this.a.d
return w.aJ_(d)&&w.tP(d)},
$S:z+0}
C.e13.prototype={
$1(d){return d.x},
$S:z+0}
C.e14.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e15.prototype={
$0(){},
$S:0}
C.e0T.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.fVD,A.aw,D.fFK,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RY[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.az(q,B.r(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iC,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fwp,q,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(t,q,new B.bH(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e0S(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eP(q,F.mR,new B.D(A.bQ,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d7,q,new B.b9(p,A.a1),q)},
$S:49}
C.e0S.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e0R(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e0R.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blh()},
$S:0}
C.e0P.prototype={
$1(d){return new C.WP(this.a.d,null)},
$S:z+44}
C.e0Q.prototype={
$0(){},
$S:0}
C.e11.prototype={
$1(d){return new B.dY(new C.e10(this.a),null)},
$S:20}
C.e10.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aj6(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b5:A.aH
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fSJ,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.n(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.j,0,m,m),A.T,B.by(B.l(4),B.kp(A.bA,m,m,5,m,w.a/11,new B.lO(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fIW)
else{h=f.j(0.1)
t=B.l(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.KG,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EN,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.r(m,B.x(B.a([r,A.aw,q,new B.bM(A.aa,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.n(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e0Z(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dl,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abb,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.az(m,B.r(m,new B.c8(A.aL,A.e,A.j,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bc,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bH(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eM,A.nF,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1_(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A2.yO,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e0Z.prototype={
$0(){var w=this.a
w.m(new C.e0X(w))
this.b.$1(new C.e0Y())
w.Fx()},
$S:0}
C.e0X.prototype={
$0(){var w=this.a
$.aj6()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e0Y.prototype={
$0(){},
$S:0}
C.e1_.prototype={
$0(){var w=this.a
w.m(new C.e0V(w,this.b))
this.c.$1(new C.e0W())
w.Fx()},
$S:0}
C.e0V.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e0W.prototype={
$0(){},
$S:0}
C.e17.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e18.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.me("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ec(new C.e16(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e16.prototype={
$1(d){B.lm("construction")
return Ak.hUu()},
$S:z+45}
C.e19.prototype={
$0(){return E.hFW(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e1a.prototype={
$0(){var w=this.a
return w.m(w.d.gd0t())},
$S:0}
C.e1b.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtf(v))
w.Fx()},
$S:0}
C.cLe.prototype={
$2(d,e){var w=null,v=this.a.gaz6().x
v===$&&B.c()
return B.b4(w,w,w,new C.bbc(v,w),A.az)},
$S:55}
C.cLd.prototype={
$3(d,e,f){var w=new B.aG($.Q().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c6(v,u,v+e,u))
w.E(new B.c6(v,u,v,u+e))
w.E(new B.c6(v,u,v-e,u))
w.E(new B.c6(v,u,v,t))
w.E(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:438}
C.h0i.prototype={
$3(d,e,f){return new C.W6(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h0j.prototype={
$4(d,e,f,g){var w=x.a
return new B.d1(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dY3.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dY2.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1P(o):q.bEY(o,p),m=x.p
p=B.a([B.oz(new B.mr(n,new B.bC(p,x.bz)),A.pl,B.pV(),A.b1,A.b1,new C.dY0())],m)
n=t.d
if(n){w=A.i.F(q.gSD(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.au],m)
if(w)m.push(D.bJy)
else m.push(A.b3)
m.push(B.r(s,s,A.f,s,s,new B.p(w?A.b5:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.j,0,s,s),s,s,A.e_,new B.p(A.w,s,s,u,s,s,A.n),A.mV,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AA)p.push(B.ap(s,B.as(B.r(s,s,A.f,s,s,A.LT,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Eu)p.push(B.ap(s,B.r(s,s,A.f,s,s,A.LT,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.as(B.r(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dY1(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:313}
C.dY0.prototype={
$2(d,e){var w=x.a
return new B.d1(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:394}
C.dY1.prototype={
$0(){var w=this.a
return w.m(new C.dY_(w))},
$S:0}
C.dY_.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXZ.prototype={
$0(){var w=this.a
return w.m(new C.dXY(w,this.b))},
$S:0}
C.dXY.prototype={
$0(){return this.a.e=A.d.co(F.kx,this.b)},
$S:0}
C.dXX.prototype={
$0(){var w=this.a
return w.m(new C.dXW(w))},
$S:0}
C.dXW.prototype={
$0(){return this.a.e=0},
$S:0}
C.dXS.prototype={
$0(){var w=this.a
return w.m(new C.dXR(w))},
$S:0}
C.dXR.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.l(o?20:8),m=A.w.j(0.55),l=x.p
m=B.r(p,B.A(B.a([D.h0r,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eP,p,p,p,A.VS,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rb,p,p,p)],l),A.l,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kv,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxQ(w.gSD(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.l(10)
t=B.L(A.aU,A.r,1)
s=B.l(10)
o=B.r(p,B.A(B.a([B.az(p,B.r(p,p,A.f,p,p,A.aet,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dXU(w),p,p,p,p,p,p,!1,A.a4),A.e5,B.r(p,p,A.f,p,p,A.XD,p,12,p,p,p,p,p,12),A.e5,B.r(p,p,A.f,p,p,D.b7N,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kx[o].a,p,1,A.a2,p,p,p,A.ab5,p,p,p),1)],l),A.l,p,A.e,A.j,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fI,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bG3,B.r(p,B.by(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afS(r,w.gSD(),p),A.fN),1)],l),A.l,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.dvp,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.l(18)
t=B.L(A.aU,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jp,w.awZ(F.kx[q],34,!1),p))
v.push(B.ap(8,B.as(B.r(p,B.A(s,A.l,p,A.e,A.P,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lL,p,p,p),p,p,p),p,p,0,0,p,p))
return B.by(n,B.r(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b4,A.t,v,p),1)],l),A.l,p,A.e,A.j,0,A.p),A.f,X.ZF,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:313}
C.dXU.prototype={
$0(){var w=this.a
return w.m(new C.dXT(w))},
$S:0}
C.dXT.prototype={
$0(){return this.a.e=null},
$S:0}
C.ft1.prototype={
$0(){return D.ehY},
$S:z+47}
C.ft2.prototype={
$0(){return D.dQ5},
$S:z+48}
C.ft3.prototype={
$0(){return D.dMC},
$S:z+49}
C.ft4.prototype={
$0(){return D.dPt},
$S:z+50}
C.ft5.prototype={
$0(){return D.dUB},
$S:z+51}
C.ft6.prototype={
$0(){return D.edK},
$S:z+52}
C.ft7.prototype={
$0(){return D.efU},
$S:z+53}
C.ft8.prototype={
$0(){return D.dTV},
$S:z+36}
C.cmx.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hJL(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.KE,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fBl,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.r(k,new B.an(A.a0,k,A.ab,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bM(A.lz,k,k,B.x(B.a([m,A.cR,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aE,A.x,o,k,k),A.n),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cmw(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bV(A.bH,h,A.bs,k,14,14)},
$S:172}
C.cmw.prototype={
$0(){return B.a6(this.a,!1).ce(B.ec(new C.cmv(this.b),!1,null,x.H))},
$S:0}
C.cmv.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eUt.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7m(w.f)]},
$S:0}
C.eUp.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cN.ai()*7},
$S:0}
C.eUo.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.ce)
w.w=""},
$S:0}
C.eUr.prototype={
$0(){var w=this.a
return w.m(new C.eUq(w,this.b))},
$S:0}
C.eUq.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eUs.prototype={
$1(d){return this.a.b1G(0)},
$S:2}
C.e3T.prototype={
$0(){return C.JP("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e3U.prototype={
$0(){},
$S:0}
C.e3O.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e3Q.prototype={
$0(){return this.a.b1I(this.b)},
$S:0}
C.e3R.prototype={
$0(){var w=this.a
return w.m(new C.e3P(w))},
$S:0}
C.e3P.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e3S.prototype={
$0(){var w=this.a
return w.b1I(w.d)},
$S:0}
C.dPm.prototype={
$2(d,e){return d+e},
$S:81}
C.dPn.prototype={
$0(){},
$S:0}
C.dPh.prototype={
$2(d,e){return d+e},
$S:81}
C.dPk.prototype={
$0(){var w=this.a
return w.m(new C.dPj(w,this.b))},
$S:0}
C.dPj.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPl.prototype={
$0(){var w=this.a
return w.m(new C.dPi(w))},
$S:0}
C.dPi.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0o.prototype={
$0(){return E.uG(this.b,this.a.d,"drawing")},
$S:0}
C.e0p.prototype={
$1(d){var w=this.a
return w.m(new C.e0n(w,d))},
$S:48}
C.e0n.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJZ(u,v,t))},
$S:0}
C.e0q.prototype={
$1(d){var w=this.a
return w.m(new C.e0m(w,d))},
$S:19}
C.e0m.prototype={
$0(){return A.d.gan(this.a.e).c.push(this.b.b)},
$S:0}
C.e0r.prototype={
$1(d){var w=this.a
return w.m(new C.e0l(w,d))},
$S:23}
C.e0l.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJZ(u,v,t))},
$S:0}
C.e0s.prototype={
$0(){var w=this.a
return w.m(new C.e0k(w,this.b))},
$S:0}
C.e0k.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0t.prototype={
$1(d){var w=this.a
return w.m(new C.e0j(w,d))},
$S:6}
C.e0j.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e0u.prototype={
$0(){var w=this.a
return w.m(new C.e0i(w))},
$S:0}
C.e0i.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0v.prototype={
$0(){var w=this.a
return w.m(new C.e0h(w))},
$S:0}
C.e0h.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e0w.prototype={
$0(){var w=this.a
return w.m(A.d.gtf(w.e))},
$S:0}
C.e0x.prototype={
$0(){var w=this.a
return w.m(new C.e0g(w))},
$S:0}
C.e0g.prototype={
$0(){var w=this.a
w.x=D.aAm[A.o.F(A.d.co(D.aAm,w.x)+1,4)]},
$S:0}
C.eri.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.erj.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JP("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erh(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JP("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.erh.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erk.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erg(w))},
$S:12}
C.erg.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.ero.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lC(new C.erm(v,e),w,A.b1,A.pl,w,w,new B.br(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ern(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.ern.prototype={
$0(){return this.a.cdv(this.b)},
$S:0}
C.erm.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.l(16)
w=o?p:D.c9e
if(o)v=q.a.r.q(0,q.b)?A.b5.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b5:A.aU,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abf,p,p,p),p,r,!0)
u=r}else u=D.fUi
return B.fz(A.A,B.r(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.erp.prototype={
$0(){var w=this.a
return w.m(new C.erl(w,this.b))},
$S:0}
C.erl.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auj()},
$S:0}
C.erq.prototype={
$0(){var w=this.a
return w.m(w.gbNH())},
$S:0}
C.eC4.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eC5.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eC2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eC3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eC1(w))},
$S:12}
C.eC1.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eC6.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eC7.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eC8.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1H()},
$S:12}
C.eC9.prototype={
$0(){return this.a.cdB(this.b)},
$S:0}
C.ePX.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:62}
C.eQ5.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.n(w,w,A.aT,w,w,w,w,w,w,w,w,f?16:14,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kT,B.A(B.a([v,A.ae,new B.dl(1,A.cm,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.n(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e4),w)],x.p),A.l,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1918}
C.eQ1.prototype={
$1(d){return this.a.m(new C.eQ0())},
$S:2}
C.eQ0.prototype={
$0(){},
$S:0}
C.eQ2.prototype={
$0(){var w=this.a
return w.m(new C.eQ_(w,this.b))},
$S:0}
C.eQ_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQ3.prototype={
$1(d){var w=this.a
return w.m(new C.ePZ(w,d))},
$S:6}
C.ePZ.prototype={
$0(){return this.a.f=A.i.V(this.b)},
$S:0}
C.eQ4.prototype={
$0(){var w=this.a
return w.m(new C.ePY(w))},
$S:0}
C.ePY.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.epY.prototype={
$0(){},
$S:0}
C.epZ.prototype={
$0(){},
$S:0}
C.epR.prototype={
$0(){var w=this.a
return w.m(new C.epQ(w))},
$S:0}
C.epQ.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c_(u,1,!1,x.S)
w.r=0.9
E.XB("hat",0,0.6)},
$S:0}
C.epS.prototype={
$0(){var w=this.a
return w.m(new C.epP(w))},
$S:0}
C.epP.prototype={
$0(){this.a.y=1.1
E.mw("bell",36,200,0.4)},
$S:0}
C.epT.prototype={
$0(){var w=this.a
return w.m(new C.epO(w))},
$S:0}
C.epO.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mw("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.epU.prototype={
$0(){var w=this.a
return w.m(new C.epN(w,this.b))},
$S:0}
C.epN.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.epV.prototype={
$1(d){var w=this.a
return w.m(new C.epM(w,d))},
$S:6}
C.epM.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.epW.prototype={
$1(d){var w=this.a
return w.m(new C.epL(w,d))},
$S:6}
C.epL.prototype={
$0(){return this.a.z=A.i.V(this.b)},
$S:0}
C.epX.prototype={
$1(d){var w=this.a
return w.m(new C.epK(w,d))},
$S:6}
C.epK.prototype={
$0(){return this.a.Q=A.i.V(this.b)},
$S:0}
C.cmt.prototype={
$0(){var w=this
return E.mw(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aO4.prototype
w.bzU=w.t
w=C.aN7.prototype
w.byV=w.t
w=C.aN8.prototype
w.byW=w.t
w=C.aNc.prototype
w.bz_=w.t
w=C.aOU.prototype
w.bAQ=w.t
w=C.aO2.prototype
w.bzS=w.t
w=C.azr.prototype
w.bvW=w.t
w=C.azs.prototype
w.bvX=w.t
w=C.aLz.prototype
w.bxi=w.t
w=C.aNn.prototype
w.bza=w.t
w=C.aN9.prototype
w.byX=w.t
w=C.aNu.prototype
w.bzi=w.t
w=C.aNX.prototype
w.bzM=w.t
w=C.aOn.prototype
w.bAc=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aG6.prototype,"gayt","c8X",1)
v(C,"iqk","c6t",3)
var q
u(q=C.aEA.prototype,"gchQ","chR",22)
w(q,"gc9w","b0h",1)
w(C.aEC.prototype,"gcbe","cbf",1)
t(C.aET.prototype,"gcbl","cbm",39)
w(q=C.aJ7.prototype,"gcBk","cBl",1)
w(q,"gcbn","af3",1)
w(q,"gcmj","cmk",1)
w(q,"gcbk","af2",3)
w(q=C.aG5.prototype,"gbKP","aaq",3)
w(q,"gclA","b3O",1)
w(q,"gcpn","ahE",3)
s(q,"gcbp","af4",3)
s(q=C.a5C.prototype,"gtf","a8",1)
u(q,"gcZ7","aoO",0)
u(q,"gcVv","Mk",0)
w(q,"gd0t","blh",1)
r(C.ak_.prototype,"gcbM",0,5,null,["$5"],["qT"],41,0,0)
w(q=C.aF4.prototype,"gcbN","cbO",1)
w(q,"gcsc","ai_",3)
w(q,"gci6","agk",3)
w(q,"gczl","aj9",3)
w(q=C.aGy.prototype,"gcdw","cdx",1)
s(q,"gcdu","b1G",1)
w(C.aFS.prototype,"gbNH","auj",1)
s(C.aGc.prototype,"gcdy","cdz",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.alb,C.GY,C.vs,C.aU9,C.a4t,C.bci,C.c6u,C.yM,C.D4,C.nM,C.bd3,C.Bb,C.bvi,C.qu,C.rb,C.D8,C.a_C,C.afZ,C.a1Q,C.Dj,C.acT,C.ad9,C.af4,C.GJ,C.eh,C.u_,C.aby,C.acF,C.a5C,C.mZ,C.bd4,C.fQ,C.my,C.bwC,C.aJZ])
u(B.ht,[C.fKq,C.fz5,C.fGP,C.fGQ,C.fKn,C.fKo,C.ej7,C.ejq,C.eyI,C.eyf,C.eyg,C.eyh,C.eyi,C.eyj,C.eyk,C.eyl,C.eym,C.eyd,C.eye,C.eyc,C.eyD,C.eyE,C.eyF,C.dOT,C.dOV,C.dOY,C.dP8,C.c6v,C.c6w,C.fsl,C.fsm,C.fsn,C.fsu,C.fsv,C.fsw,C.dQV,C.dQC,C.dQW,C.dQx,C.dQs,C.dQu,C.dQA,C.dQN,C.dQL,C.dQM,C.dQK,C.dQH,C.dQJ,C.f88,C.f7Q,C.f7X,C.f85,C.f7K,C.dr3,C.dr4,C.dr0,C.dr1,C.dr2,C.dr5,C.dr6,C.dr7,C.dr8,C.dr9,C.dra,C.drb,C.drc,C.drd,C.exE,C.exF,C.exG,C.exH,C.exC,C.exD,C.ey8,C.exL,C.exN,C.exx,C.ey4,C.ey2,C.ey3,C.ey1,C.ey0,C.exz,C.bPP,C.bQ_,C.bPV,C.bQ0,C.bQ2,C.bPQ,C.bPO,C.bQ7,C.bPW,C.bPZ,C.bPY,C.bPX,C.bKb,C.fWh,C.fWk,C.fWi,C.bJT,C.bJO,C.bJM,C.bKa,C.bK2,C.bK3,C.bK1,C.bK4,C.bJC,C.bJE,C.bJA,C.bJB,C.bJs,C.bJt,C.fsx,C.fsy,C.fsz,C.fsk,C.fsA,C.fsj,C.fsB,C.fso,C.fsi,C.fsp,C.fsh,C.fsq,C.fsg,C.fsr,C.fse,C.fsf,C.fss,C.fsc,C.fsd,C.fst,C.fsb,C.e12,C.e13,C.e0T,C.e0P,C.e11,C.e16,C.cLd,C.h0i,C.h0j,C.cmv,C.eUs,C.e0p,C.e0q,C.e0r,C.e0t,C.erm,C.ePX,C.eQ5,C.eQ1,C.eQ3,C.epV,C.epW,C.epX])
u(B.jy,[C.fKp,C.ejc,C.eja,C.eyo,C.eyB,C.dQt,C.dQQ,C.dX8,C.f8b,C.f8c,C.f7P,C.f81,C.f82,C.f7Y,C.f83,C.f7J,C.exA,C.exB,C.ey7,C.ey_,C.exP,C.bQ1,C.bQ3,C.bQ5,C.bPR,C.bPT,C.bKc,C.ctF,C.fWj,C.bJL,C.bJN,C.bK8,C.bK7,C.e10,C.cLe,C.dY2,C.dY0,C.dXV,C.cmy,C.dPm,C.dPh,C.ero])
u(B.af,[C.WP,C.Xb,C.VG,C.VM,C.Oh,C.aJ6,C.Xa,C.ajY,C.Wn,C.az6,C.W6,C.XI,C.Wv,C.VH,C.Wm,C.X5,C.Xf,C.Xz,C.X4])
u(B.ah,[C.bmr,C.aO4,C.aN7,C.aNc,C.aET,C.aOU,C.aO2,C.azr,C.bzO,C.aLz,C.aNn,C.aOn,C.aNu,C.aN9,C.blT,C.aFS,C.aGc,C.bn8,C.aNX])
u(B.iJ,[C.ej5,C.ej6,C.eji,C.ejj,C.eje,C.ejd,C.ejf,C.ejb,C.ejg,C.ej9,C.ejh,C.ej8,C.ejm,C.ejl,C.ejn,C.ejk,C.ejo,C.ejp,C.ejr,C.eyH,C.eyJ,C.eyK,C.eyq,C.eyp,C.eyn,C.eyw,C.eyx,C.eyt,C.eyy,C.eys,C.eyz,C.eyA,C.eyr,C.eyC,C.eyv,C.eyG,C.eyu,C.dPf,C.dPe,C.dOQ,C.dOR,C.dOS,C.dPg,C.dOU,C.dOW,C.dOX,C.dOZ,C.dON,C.dOO,C.dOP,C.dP5,C.dP6,C.dP7,C.dP4,C.dP9,C.dP3,C.dPa,C.dP2,C.dPb,C.dP1,C.dPc,C.dP0,C.dPd,C.dP_,C.dQz,C.dQy,C.dQD,C.dQv,C.dQw,C.dQE,C.dQF,C.dQG,C.dQB,C.dQr,C.dQP,C.dQO,C.dQR,C.dQS,C.dQT,C.dQI,C.dQU,C.cVQ,C.dX6,C.dX5,C.dX7,C.fsM,C.fsN,C.fsO,C.fsP,C.fsQ,C.fsR,C.fsS,C.fsT,C.fsU,C.f8a,C.f89,C.f7S,C.f7R,C.f7N,C.f7M,C.f7O,C.f7L,C.f8_,C.f7Z,C.f80,C.f7T,C.f84,C.f7W,C.f86,C.f7V,C.f87,C.f7U,C.exJ,C.exy,C.exI,C.exu,C.exK,C.exM,C.exv,C.exw,C.ey6,C.ey5,C.exX,C.exY,C.exZ,C.exT,C.exU,C.exS,C.exV,C.exR,C.exW,C.exQ,C.exO,C.dr_,C.bQ4,C.bQ6,C.bPS,C.bPU,C.bJQ,C.bJR,C.bJP,C.bJS,C.bJU,C.bJF,C.bJG,C.bJK,C.bJH,C.bJI,C.bJJ,C.bK9,C.bJi,C.bK_,C.bK0,C.bJY,C.bJZ,C.bJW,C.bJX,C.bK5,C.bJV,C.bK6,C.bJj,C.bJD,C.bJp,C.bJq,C.bJo,C.bJr,C.bJn,C.bJu,C.bJv,C.bJw,C.bJx,C.bJm,C.bJy,C.bJl,C.bJz,C.bJk,C.e0U,C.e14,C.e15,C.e0S,C.e0R,C.e0Q,C.e0Z,C.e0X,C.e0Y,C.e1_,C.e0V,C.e0W,C.e17,C.e18,C.e19,C.e1a,C.e1b,C.dY3,C.dY1,C.dY_,C.dXZ,C.dXY,C.dXX,C.dXW,C.dXS,C.dXR,C.dXU,C.dXT,C.ft1,C.ft2,C.ft3,C.ft4,C.ft5,C.ft6,C.ft7,C.ft8,C.cmx,C.cmw,C.eUt,C.eUp,C.eUo,C.eUr,C.eUq,C.e3T,C.e3U,C.e3O,C.e3Q,C.e3R,C.e3P,C.e3S,C.dPn,C.dPk,C.dPj,C.dPl,C.dPi,C.e0o,C.e0n,C.e0m,C.e0l,C.e0s,C.e0k,C.e0j,C.e0u,C.e0i,C.e0v,C.e0h,C.e0w,C.e0x,C.e0g,C.eri,C.erj,C.erh,C.erk,C.erg,C.ern,C.erp,C.erl,C.erq,C.eC4,C.eC5,C.eC2,C.eC3,C.eC1,C.eC6,C.eC7,C.eC8,C.eC9,C.eQ0,C.eQ2,C.eQ_,C.ePZ,C.eQ4,C.ePY,C.epY,C.epZ,C.epR,C.epQ,C.epS,C.epP,C.epT,C.epO,C.epU,C.epN,C.epM,C.epL,C.epK,C.cmt])
t(C.bA0,C.aO4)
t(C.aG6,C.bA0)
u(B.mo,[C.bjm,C.bdm,C.buG,C.bc0,C.bth,C.bsI,C.bcH,C.bsK,C.bwM,C.bjk,C.ak_,C.bbc,C.bxQ,C.afS,C.by1,C.bsJ,C.bnV])
t(C.aN8,C.aN7)
t(C.aEA,C.aN8)
t(C.bzL,C.aNc)
t(C.aEC,C.bzL)
u(B.lE,[C.Lj,C.a1D,C.Ki])
u(B.ax,[C.btG,C.aga,C.af1,C.Rd,C.bub,C.a9w,C.bft])
t(C.aJ7,C.aOU)
t(C.bjj,B.pf)
t(C.aG5,C.aO2)
t(C.azs,C.azr)
t(C.ajZ,C.azs)
t(C.aF4,C.bzO)
t(C.bbd,C.aLz)
t(C.blR,C.aNn)
t(C.bA7,C.aOn)
t(C.aGy,C.bA7)
t(C.bzQ,C.aNu)
t(C.bm1,C.bzQ)
t(C.bzK,C.aN9)
t(C.blB,C.bzK)
t(C.bzZ,C.aNX)
t(C.bmD,C.bzZ)
w(C.aO4,B.cc)
w(C.bA0,E.nK)
w(C.aN7,B.cc)
w(C.aN8,E.nK)
w(C.aNc,B.cc)
w(C.bzL,E.nK)
w(C.aOU,B.eM)
w(C.aO2,B.cc)
w(C.azr,B.cc)
w(C.azs,E.nK)
w(C.aLz,B.cc)
v(C.bzO,B.eB)
w(C.aNn,B.cc)
w(C.aN9,B.cc)
w(C.bzK,E.nK)
w(C.aNu,B.cc)
w(C.bzQ,E.nK)
w(C.aNX,B.cc)
w(C.bzZ,E.nK)
w(C.aOn,B.cc)
w(C.bA7,E.nK)})()
B.iT(b.typeUniverse,JSON.parse('{"WP":{"af":[],"v":[]},"bmr":{"ah":["WP"]},"Xb":{"af":[],"v":[]},"aG6":{"ah":["Xb"]},"bjm":{"aC":[]},"VG":{"af":[],"v":[]},"aEA":{"ah":["VG"]},"VM":{"af":[],"v":[]},"aEC":{"ah":["VM"]},"bdm":{"aC":[]},"aga":{"ax":[],"v":[]},"af1":{"ax":[],"v":[]},"aJ6":{"af":[],"v":[]},"Oh":{"af":[],"v":[]},"aET":{"ah":["Oh"]},"btG":{"ax":[],"v":[]},"Rd":{"ax":[],"v":[]},"buG":{"aC":[]},"bub":{"ax":[],"v":[]},"bc0":{"aC":[]},"aJ7":{"ah":["aJ6"]},"bth":{"aC":[]},"bsI":{"aC":[]},"bcH":{"aC":[]},"bsK":{"aC":[]},"bwM":{"aC":[]},"Xa":{"af":[],"v":[]},"bjj":{"aC":[]},"aG5":{"ah":["Xa"]},"bjk":{"aC":[]},"ak_":{"aC":[]},"ajY":{"af":[],"v":[]},"ajZ":{"ah":["ajY"]},"Wn":{"af":[],"v":[]},"az6":{"af":[],"v":[]},"aF4":{"ah":["Wn"],"eB":[]},"bbd":{"ah":["az6"]},"bbc":{"aC":[]},"W6":{"af":[],"v":[]},"blR":{"ah":["W6"]},"bxQ":{"aC":[]},"afS":{"aC":[]},"a9w":{"ax":[],"v":[]},"XI":{"af":[],"v":[]},"Wv":{"af":[],"v":[]},"VH":{"af":[],"v":[]},"Wm":{"af":[],"v":[]},"X5":{"af":[],"v":[]},"Xf":{"af":[],"v":[]},"Xz":{"af":[],"v":[]},"X4":{"af":[],"v":[]},"aGy":{"ah":["XI"]},"by1":{"aC":[]},"bm1":{"ah":["Wv"]},"bsJ":{"aC":[]},"blB":{"ah":["VH"]},"blT":{"ah":["Wm"]},"bnV":{"aC":[]},"aFS":{"ah":["X5"]},"aGc":{"ah":["Xf"]},"bn8":{"ah":["Xz"]},"bmD":{"ah":["X4"]},"bft":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lO<u?>"),G:w("u"),J:w("bu<m,H>"),Q:w("de<m>"),Z:w("a0"),M:w("O<da>"),R:w("O<T2>"),h:w("O<a4t>"),V:w("O<ac>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<H>>"),U:w("O<ai<G?>>"),x:w("O<a9<m,aE>>"),g:w("O<o>"),F:w("O<u_>"),v:w("O<fT>"),eZ:w("O<+(m,m)>"),fT:w("O<+(H,v)>"),I:w("O<+(G,m)>"),u:w("O<+(G,G)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,H,H,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,H,H,a9<m,H>)>"),_:w("O<vs>"),fQ:w("O<aby>"),s:w("O<m>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acF>"),fH:w("O<lk>"),a_:w("O<acT>"),cB:w("O<nM>"),ba:w("O<ad9>"),eW:w("O<D8>"),fY:w("O<a_C>"),ac:w("O<af4>"),cd:w("O<Dj>"),fr:w("O<afZ>"),e4:w("O<a1Q>"),au:w("O<aJZ>"),f7:w("O<P>"),n:w("O<H>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<u_?>"),bN:w("O<G?>"),q:w("cw<ajZ>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<m,@>"),f:w("a9<@,@>"),bd:w("N<eh,m>"),fR:w("N<+(H,v),v>"),l:w("iC"),gA:w("zX"),gD:w("ws"),k:w("ct"),K:w("aE"),W:w("u_"),B:w("eh"),N:w("m"),bO:w("au"),a:w("br<H>"),Y:w("bC<m>"),bz:w("bC<G?>"),dg:w("ea<rb>"),m:w("bci"),a2:w("D4"),f3:w("rb"),es:w("GJ"),gV:w("mD"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aE?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2u=new B.da(0,0.1)
D.b4p=new C.aU9(0,0,0)
D.LO=new C.aU9(0,0.5,0)
D.b5_=new B.ay(A.b5,1,A.r,-1)
D.b6s=new B.aY(0,1/0,0,290)
D.b6z=new B.aY(16,1/0,16,1/0)
D.bob=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dvB=w([D.bob,Al.aiF],x.O)
D.ezs=new B.bY(A.Fd,1.1,A.x,null,0,D.dvB,null,null)
D.b6R=new B.p(null,null,null,null,null,D.ezs,A.n)
D.b7N=new B.p(A.be,null,null,null,null,null,A.a6)
D.fph=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1S=new B.B("\u26a1",null,D.fph,null,null,null,null,null,null,null,null,null)
D.bcm=new B.ch(A.A,null,null,D.h1S,null)
D.aVW=new B.F(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSe=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVW,null,A.K,null,null,null,null,null,null,null)
D.erC=new B.D(A.nI,D.fSe,null)
D.bcw=new B.ch(A.A,null,null,D.erC,null)
D.fI_=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVW,null,A.K,null,null,null,null,null,null,null)
D.esv=new B.D(A.GX,D.fI_,null)
D.bdf=new B.ch(A.A,null,null,D.esv,null)
D.afu=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bh1=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bhi=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.biz=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.biG=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bj2=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bkX=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.blY=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bmH=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahN=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bnI=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aia=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zf=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bpz=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bpQ=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiJ=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.brB=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.brJ=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bsb=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w9=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.buf=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akc=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.fP0=new B.B("\ud83e\uddea Core Protocol",null,A.h8,null,A.K,null,null,null,null,null,null,null)
D.fHj=new B.B("Play, make things, keep them.",null,A.VS,null,A.K,null,null,null,null,null,null,null)
D.dyK=w([D.fP0,D.fHj],x.p)
D.bxg=new B.fj(A.ah,A.e,A.P,A.l,null,A.p,null,0,D.dyK,null)
D.bA0=new B.bd(11e6)
D.bBN=new B.R(10,34,10,26)
D.bBV=new B.R(10,6,10,2)
D.bBX=new B.R(10,8,0,10)
D.bCB=new B.R(12,8,8,8)
D.bCI=new B.R(14,0,14,22)
D.bCK=new B.R(14,0,14,30)
D.bDN=new B.R(16,4,16,28)
D.bE5=new B.R(18,10,18,16)
D.bG3=new B.R(26,12,26,58)
D.bGU=new B.R(4,4,8,2)
D.bHy=new B.R(8,14,8,12)
D.bHF=new B.R(8,40,8,30)
D.bHK=new B.R(8,6,8,8)
D.bI4=new B.R(0,0,1.5,0)
D.b4b=new B.HY(26,"saturation")
D.bIn=new B.uS(A.d0,D.b4b,null,A.Y7)
D.bIo=new B.hw(A.G,11)
D.bIs=new B.hw(A.G,30)
D.fH3=new B.B("REACTION LAB",null,U.aWy,null,null,null,null,A.a2,null,1,null,null)
D.bIA=new B.bz(1,A.bc,D.fH3,null)
D.fL8=new B.B("\ud83d\udce2 NGMY Ads",null,A.rb,null,null,null,null,A.eP,null,1,null,null)
D.bJy=new B.bz(1,A.bc,D.fL8,null)
D.fFL=new B.B("Wire selected",null,A.h0,null,null,null,null,null,null,null,null,null)
D.bJM=new B.bz(1,A.bc,D.fFL,null)
D.apa=new B.a0(62712,"MaterialIcons",!1)
D.bPV=new B.a0(62908,"MaterialIcons",!1)
D.bRC=new B.a0(983122,"MaterialIcons",!1)
D.bRP=new B.a0(983247,"MaterialIcons",!1)
D.bSk=new B.a0(983616,"MaterialIcons",!1)
D.bRB=new B.a0(983117,"MaterialIcons",!1)
D.bW2=new B.ae(D.bRB,28,A.c,null,null,null)
D.bWi=new B.ae(A.j3,18,null,null,null,null)
D.bYa=new B.ae(A.ei,21,A.c0,null,null,null)
D.bYr=new B.ae(A.oB,null,A.ac,null,null,null)
D.bYB=new B.ae(A.a3r,21,A.ac,null,null,null)
D.bZs=new B.ae(A.eN,17,A.ac,null,null,null)
D.c1d=new B.ae(A.j3,21,A.ac,null,null,null)
D.c2O=new B.ae(A.ec,null,A.aS,null,null,null)
D.dth=w([A.d6,A.d5,A.d6],x.O)
D.c6b=new B.a8(A.a7,A.aa,A.x,D.dth,null,null)
D.d4O=w([A.bP,A.bm],x.O)
D.c6j=new B.a8(A.b7,A.b9,A.x,D.d4O,null,null)
D.c6v=new B.a8(A.b7,A.b9,A.x,A.a62,null,null)
D.asS=new B.a8(A.b7,A.b9,A.x,O.a5g,null,null)
D.d2l=w([A.pa,A.iE],x.O)
D.c7g=new B.a8(A.b7,A.b9,A.x,D.d2l,null,null)
D.d4w=w([A.e8,A.as],x.O)
D.asZ=new B.a8(A.b7,A.b9,A.x,D.d4w,null,null)
D.dn1=w([A.db,A.jk,A.bm],x.O)
D.c7y=new B.a8(A.a7,A.aa,A.x,D.dn1,null,null)
D.dn7=w([A.dW,A.cr],x.O)
D.c7T=new B.a8(A.b7,A.b9,A.x,D.dn7,null,null)
D.cBr=w([A.bP,A.db],x.O)
D.c81=new B.a8(A.a7,A.aa,A.x,D.cBr,null,null)
D.aD_=w([A.e8,M.ny],x.O)
D.c88=new B.a8(A.b7,A.b9,A.x,D.aD_,null,null)
D.c8p=new B.a8(A.b7,A.b9,A.x,R.atk,null,null)
D.c9e=new B.a8(A.aA,A.aE,A.x,A.RK,null,null)
D.dep=w([A.as,A.w],x.O)
D.c9p=new B.a8(A.b7,A.b9,A.x,D.dep,null,null)
D.c9s=new B.a8(A.b7,A.b9,A.x,H.aCg,null,null)
D.bs6=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bsX=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cOn=w([A.Ng,D.bs6,D.bsX],x.O)
D.c9B=new B.a8(A.b7,A.b9,A.x,D.cOn,null,null)
D.cBL=w([A.cZ,A.hc],x.O)
D.c9R=new B.a8(A.b7,A.b9,A.x,D.cBL,null,null)
D.bvz=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cCv=w([F.afD,D.bvz],x.O)
D.ca3=new B.a8(A.b7,A.b9,A.x,D.cCv,null,null)
D.caD=w([0,4,7],x.t)
D.caE=w([0,4,7,12],x.t)
D.caF=w([0,4,7,4],x.t)
D.aBW=w([A.hp,A.qm],x.O)
D.aBr=w([A.hr,A.cG],x.O)
D.azM=w([A.bq,A.dK],x.O)
D.cX2=w([A.aS,A.cZ],x.O)
D.doo=w([A.bT,A.kJ],x.O)
D.azc=w([A.cF,A.kt],x.O)
D.d19=w([A.bK,A.aM],x.O)
D.cb1=w([D.aBW,D.aBr,A.a5l,D.azM,D.cX2,A.aA1,A.aAW,D.doo,D.azc,D.d19],B.at("O<ai<u>>"))
D.cfI=w([120,220,380],x.t)
D.cjs=w([12,16,19,24],x.t)
D.cjC=w([1400,800,450,2400],x.t)
D.cs2=w([250,450,900,1500],x.t)
D.bgn=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bsw=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bqh=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bw8=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bpn=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayt=w([D.bgn,D.bsw,D.bqh,D.bw8,D.bpn],x.O)
D.cJh=w([50,25,75],x.t)
D.cOU=w([0,5,10,15,18,20,25],x.t)
D.cXl=w([900,500,250,1600],x.t)
D.d0s=w([A.bq,A.bD,A.ba,A.bq],x.O)
D.a5b=w([A.ay,A.bi,A.be,A.aH,A.nu],x.O)
D.d1Z=w([A.as,A.ay,A.cF,A.bi,A.be,A.cz,A.cg,A.bD,A.Yo],x.O)
D.a5e=w([0.04,0.17,0.3],x.n)
D.f8E=new C.vs("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f8K=new C.vs("Medium engine","A good all-rounder.",0.3,0.9)
D.f8J=new C.vs("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.It=w([D.f8E,D.f8K,D.f8J],x._)
D.eFe=new B.y(6,"Easy")
D.eG_=new B.y(8,"Medium")
D.eAY=new B.y(10,"Hard")
D.d3y=w([D.eFe,D.eG_,D.eAY],x.I)
D.aAb=w([0.55,0.78,1],x.n)
D.aAm=w([A.c,A.fy,A.nn,A.as],x.O)
D.aAu=w([A.be,A.ay,A.bi,A.d5],x.O)
D.f8B=new C.vs("Radar","Shows your height above the ground.",0.1,0)
D.f8C=new C.vs("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f8z=new C.vs("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAB=w([D.f8B,D.f8C,D.f8z],x._)
D.d9K=w([47,100,220,470,1000],x.n)
D.Jv={volts:0}
D.a73=new B.bu(D.Jv,[3],x.J)
D.JW=new B.dX(["b","battery",0.2,0.3,D.a73])
D.elq={on:0}
D.dE9=new B.bu(D.elq,[1],x.J)
D.Es=new B.dX(["s","switch",0.5,0.3,D.dE9])
D.f6i=new B.dX(["l","bulb",0.8,0.3,A.jr])
D.d4X=w([D.JW,D.Es,D.f6i],x.d)
D.Eq=new B.cu(["b",0,"s",0])
D.f5i=new B.cu(["s",1,"l",0])
D.aRw=new B.cu(["l",1,"b",1])
D.dnd=w([D.Eq,D.f5i,D.aRw],x.o)
D.d4l=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eA8=new C.mZ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d4X,D.dnd,D.d4l)
D.aLk={ohms:0}
D.aIW=new B.bu(D.aLk,[220],x.J)
D.f5L=new B.dX(["r","resistor",0.5,0.3,D.aIW])
D.f6x=new B.dX(["d","led",0.8,0.3,A.jr])
D.dqs=w([D.JW,D.f5L,D.f6x],x.d)
D.f4D=new B.cu(["b",0,"r",0])
D.f5c=new B.cu(["r",1,"d",0])
D.f4J=new B.cu(["d",1,"b",1])
D.dzM=w([D.f4D,D.f5c,D.f4J],x.o)
D.dqW=w(["led","diode","indicator"],x.s)
D.eAf=new C.mZ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dqs,D.dzM,D.dqW)
D.a8l={level:0}
D.dDv=new B.bu(D.a8l,[0.2],x.J)
D.f5R=new B.dX(["p","pot",0.5,0.3,D.dDv])
D.f5T=new B.dX(["m","motor",0.8,0.3,A.jr])
D.d5g=w([D.JW,D.f5R,D.f5T],x.d)
D.f4C=new B.cu(["b",0,"p",0])
D.f58=new B.cu(["p",1,"m",0])
D.f54=new B.cu(["m",1,"b",1])
D.dvl=w([D.f4C,D.f58,D.f54],x.o)
D.dmV=w(["fan","motor","spin","dimmer"],x.s)
D.eA6=new C.mZ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d5g,D.dvl,D.dmV)
D.a70=new B.bu(D.a8l,[0.9],x.J)
D.aRF=new B.dX(["s","solar",0.25,0.3,D.a70])
D.aRE=new B.dX(["l","bulb",0.75,0.3,A.jr])
D.d84=w([D.aRF,D.aRE],x.d)
D.f5f=new B.cu(["s",0,"l",0])
D.f52=new B.cu(["l",1,"s",1])
D.d64=w([D.f5f,D.f52],x.o)
D.dw3=w(["solar","sun","without battery","no battery","free"],x.s)
D.eA9=new C.mZ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d84,D.d64,D.dw3)
D.f6A=new B.dX(["c","crank",0.25,0.3,D.a70])
D.dl6=w([D.f6A,D.aRE],x.d)
D.f4G=new B.cu(["c",0,"l",0])
D.f51=new B.cu(["l",1,"c",1])
D.dlI=w([D.f4G,D.f51],x.o)
D.dlg=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eA5=new C.mZ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dl6,D.dlI,D.dlg)
D.dDu=new B.bu(D.a8l,[0.7],x.J)
D.f5W=new B.dX(["t","turbine",0.25,0.3,D.dDu])
D.f5J=new B.dX(["m","motor",0.75,0.3,A.jr])
D.df5=w([D.f5W,D.f5J],x.d)
D.f5q=new B.cu(["t",0,"m",0])
D.f55=new B.cu(["m",1,"t",1])
D.de4=w([D.f5q,D.f55],x.o)
D.djP=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eA2=new C.mZ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.df5,D.de4,D.djP)
D.aIT=new B.bu(D.Jv,[9],x.J)
D.a9s=new B.dX(["b","battery",0.2,0.3,D.aIT])
D.aRC=new B.dX(["r","radio",0.8,0.3,A.jr])
D.dwD=w([D.a9s,D.Es,D.aRC],x.d)
D.f5k=new B.cu(["s",1,"r",0])
D.aRy=new B.cu(["r",1,"b",1])
D.cak=w([D.Eq,D.f5k,D.aRy],x.o)
D.dv6=w(["radio","music","listen"],x.s)
D.eAe=new C.mZ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dwD,D.cak,D.dv6)
D.dEz=new B.bu(D.Jv,[12],x.J)
D.aRB=new B.dX(["b","battery",0.2,0.3,D.dEz])
D.f6j=new B.dX(["t","tv",0.8,0.3,A.jr])
D.d4Z=w([D.aRB,D.Es,D.f6j],x.d)
D.f5l=new B.cu(["s",1,"t",0])
D.aRz=new B.cu(["t",1,"b",1])
D.dor=w([D.Eq,D.f5l,D.aRz],x.o)
D.dwB=w(["tv","television","screen","watch"],x.s)
D.eA_=new C.mZ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d4Z,D.dor,D.dwB)
D.f69=new B.dX(["z","buzzer",0.8,0.3,A.jr])
D.cLD=w([D.JW,D.Es,D.f69],x.d)
D.f5m=new B.cu(["s",1,"z",0])
D.f5E=new B.cu(["z",1,"b",1])
D.d_G=w([D.Eq,D.f5m,D.f5E],x.o)
D.dtn=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eAb=new C.mZ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cLD,D.d_G,D.dtn)
D.f5S=new B.dX(["h","heater",0.8,0.3,A.jr])
D.dit=w([D.a9s,D.Es,D.f5S],x.d)
D.f5h=new B.cu(["s",1,"h",0])
D.f4R=new B.cu(["h",1,"b",1])
D.d0n=w([D.Eq,D.f5h,D.f4R],x.o)
D.cvk=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eA0=new C.mZ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dit,D.d0n,D.cvk)
D.f6l=new B.dX(["s","solar",0.2,0.25,D.a70])
D.dEC=new B.bu(D.aLk,[100],x.J)
D.f6o=new B.dX(["r","resistor",0.55,0.25,D.dEC])
D.f6v=new B.dX(["c","capacitor",0.85,0.25,A.jr])
D.f5O=new B.dX(["q","resistor",0.55,0.6,D.aIW])
D.f6m=new B.dX(["d","led",0.85,0.6,A.jr])
D.dnX=w([D.f6l,D.f6o,D.f6v,D.f5O,D.f6m],x.d)
D.f5g=new B.cu(["s",0,"r",0])
D.f5b=new B.cu(["r",1,"c",0])
D.f4I=new B.cu(["c",1,"s",1])
D.f4H=new B.cu(["c",0,"q",0])
D.f5a=new B.cu(["q",1,"d",0])
D.f4K=new B.cu(["d",1,"c",1])
D.dbT=w([D.f5g,D.f5b,D.f4I,D.f4H,D.f5a,D.f4K],x.o)
D.dkp=w(["capacitor","store","charge","flash"],x.s)
D.eAd=new C.mZ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dnX,D.dbT,D.dkp)
D.f5Z=new B.dX(["b","battery",0.15,0.3,D.a73])
D.f6B=new B.dX(["l1","bulb",0.5,0.3,A.jr])
D.f66=new B.dX(["l2","bulb",0.85,0.3,A.jr])
D.d2Z=w([D.f5Z,D.f6B,D.f66],x.d)
D.f4B=new B.cu(["b",0,"l1",0])
D.f4Z=new B.cu(["l1",1,"l2",0])
D.f5_=new B.cu(["l2",1,"b",1])
D.dfT=w([D.f4B,D.f4Z,D.f5_],x.o)
D.dwm=w(["series","two bulbs","dim"],x.s)
D.eA3=new C.mZ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d2Z,D.dfT,D.dwm)
D.elL={volts:0,charge:1}
D.dEF=new B.bu(D.elL,[1.5,0],x.J)
D.f6t=new B.dX(["b","battery",0.75,0.3,D.dEF])
D.d2m=w([D.aRF,D.f6t],x.d)
D.f5e=new B.cu(["s",0,"b",0])
D.f4F=new B.cu(["b",1,"s",1])
D.dcc=w([D.f5e,D.f4F],x.o)
D.dkz=w(["charge","rechargeable","flat","recharge"],x.s)
D.eA1=new C.mZ("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d2m,D.dcc,D.dkz)
D.dEy=new B.bu(D.Jv,[4.5],x.J)
D.f5U=new B.dX(["b","battery",0.2,0.3,D.dEy])
D.aRA=new B.dX(["p","phone",0.8,0.3,A.jr])
D.deV=w([D.f5U,D.Es,D.aRA],x.d)
D.f5j=new B.cu(["s",1,"p",0])
D.a9r=new B.cu(["p",1,"b",1])
D.dsh=w([D.Eq,D.f5j,D.a9r],x.o)
D.dtN=w(["phone","charger","usb","mobile"],x.s)
D.eA7=new C.mZ("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.deV,D.dsh,D.dtN)
D.f5G=new B.dX(["f","fan",0.8,0.3,A.jr])
D.cnr=w([D.JW,D.f5G],x.d)
D.f4A=new B.cu(["b",0,"f",0])
D.f4P=new B.cu(["f",1,"b",1])
D.d0W=w([D.f4A,D.f4P],x.o)
D.dmU=w(["fan","cool","air","wind"],x.s)
D.eAg=new C.mZ("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cnr,D.d0W,D.dmU)
D.f6d=new B.dX(["b","battery",0.15,0.2,D.a73])
D.f5H=new B.dX(["a","ammeter",0.5,0.2,A.jr])
D.f5F=new B.dX(["l","bulb",0.85,0.2,A.jr])
D.f6f=new B.dX(["v","voltmeter",0.5,0.6,A.jr])
D.dkV=w([D.f6d,D.f5H,D.f5F,D.f6f],x.d)
D.f4y=new B.cu(["b",0,"a",0])
D.f4x=new B.cu(["a",1,"l",0])
D.f5s=new B.cu(["v",0,"l",0])
D.f5t=new B.cu(["v",1,"l",1])
D.dc3=w([D.f4y,D.f4x,D.aRw,D.f5s,D.f5t],x.o)
D.dzL=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eAc=new C.mZ("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dkV,D.dc3,D.dzL)
D.f6E=new B.dX(["b","battery",0.15,0.2,D.aIT])
D.f5Y=new B.dX(["t","tv",0.55,0.2,A.jr])
D.aIU=new B.bu(D.Jv,[5],x.J)
D.f5M=new B.dX(["c","buck",0.4,0.5,D.aIU])
D.f6_=new B.dX(["p","phone",0.8,0.5,A.jr])
D.d9w=w([D.f6E,D.f5Y,D.f5M,D.f6_],x.d)
D.f4E=new B.cu(["b",0,"t",0])
D.aRu=new B.cu(["b",0,"c",0])
D.aRv=new B.cu(["c",1,"p",0])
D.deS=w([D.f4E,D.aRz,D.aRu,D.aRv,D.a9r],x.o)
D.d7D=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eA4=new C.mZ("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d9w,D.deS,D.d7D)
D.f5N=new B.dX(["c","buck",0.5,0.3,D.aIU])
D.d0c=w([D.aRB,D.f5N,D.aRA],x.d)
D.d5q=w([D.aRu,D.aRv,D.a9r],x.o)
D.cyP=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ezZ=new C.mZ("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d0c,D.d5q,D.cyP)
D.f64=new B.dX(["d","diode",0.5,0.3,A.jr])
D.dg6=w([D.a9s,D.f64,D.aRC],x.d)
D.f4z=new B.cu(["b",0,"d",0])
D.f4L=new B.cu(["d",1,"r",0])
D.cOb=w([D.f4z,D.f4L,D.aRy],x.o)
D.d7i=w(["diode","protect","backwards","one way"],x.s)
D.eAa=new C.mZ("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dg6,D.cOb,D.d7i)
D.RY=w([D.eA8,D.eAf,D.eA6,D.eA9,D.eA5,D.eA2,D.eAe,D.eA_,D.eAb,D.eA0,D.eAd,D.eA3,D.eA1,D.eA7,D.eAg,D.eAc,D.eA4,D.ezZ,D.eAa],B.at("O<mZ>"))
D.hEi=new C.GY("Moon",1.62,A.db,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hEg=new C.GY("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hEj=new C.GY("Mercury",3.7,A.kr,"Mercury is small, so its gravity is like Mars.")
D.hEd=new C.GY("Venus",8.87,A.aS,"Venus is almost as heavy as Earth, with strong gravity.")
D.hEf=new C.GY("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hEh=new C.GY("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hEe=new C.GY("Jupiter",24.79,A.cF,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tc=w([D.hEi,D.hEg,D.hEj,D.hEd,D.hEf,D.hEh,D.hEe],B.at("O<GY>"))
D.dbR=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dcD=w([0.2,0.5,0.8],x.n)
D.b1h=new C.Lj(0,"accordion")
D.d1h=w([A.jJ,A.D0,A.CG],x.w)
D.d8X=w(["Mail","SMS","Ad"],x.s)
D.d1R=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hCw=new C.Bb(D.b1h,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBW,D.d1h,D.d8X,D.d1R)
D.adc=new C.Lj(1,"flip")
D.dkj=w([A.qN,Z.HU,A.uW],x.w)
D.deC=w(["Unlock","Verify","Secure"],x.s)
D.d08=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hCv=new C.Bb(D.adc,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBr,D.dkj,D.deC,D.d08)
D.b1i=new C.Lj(2,"towers")
D.ddo=w([A.zp,A.qQ,A.ie],x.w)
D.dcW=w(["Save","Grow","Earn"],x.s)
D.cP4=w(["","",""],x.s)
D.hCx=new C.Bb(D.b1i,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5l,D.ddo,D.dcW,D.cP4)
D.add=new C.Lj(3,"assemble")
D.dlk=w([A.oF,A.hw,A.ec],x.w)
D.d8g=w(["Launch","Charge","Shine"],x.s)
D.dhu=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hCz=new C.Bb(D.add,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azM,D.dlk,D.d8g,D.dhu)
D.b1j=new C.Lj(4,"carousel")
D.dl7=w([A.ba,A.eX],x.O)
D.d95=w([A.n4,A.apC,A.PJ],x.w)
D.d3o=w(["Explore","Discover","Learn"],x.s)
D.df0=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hCu=new C.Bb(D.b1j,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dl7,D.d95,D.d3o,D.df0)
D.b1k=new C.Lj(5,"burst")
D.dcR=w([A.hV,A.rC],x.O)
D.d1L=w([A.k7,A.n2,A.hK],x.w)
D.d26=w(["Cheer","Win","Love"],x.s)
D.d4u=w(["Make some noise","First place","Share the joy"],x.s)
D.hCy=new C.Bb(D.b1k,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dcR,D.d1L,D.d26,D.d4u)
D.aB6=w([D.hCw,D.hCv,D.hCx,D.hCz,D.hCu,D.hCy],B.at("O<Bb>"))
D.f1G=new B.b5("skin","Skin",A.apD)
D.f3k=new B.b5("muscle","Muscles",A.Pk)
D.f2Z=new B.b5("organ","Organs",A.hK)
D.bPD=new B.a0(62747,"MaterialIcons",!1)
D.f36=new B.b5("bone","Skeleton",D.bPD)
D.f3s=new B.b5("vessel","Blood vessels",A.pD)
D.ddu=w([D.f1G,D.f3k,D.f2Z,D.f36,D.f3s],x.r)
D.f8D=new C.vs("Simple legs","Light. Land gently.",0.15,0.2)
D.f8F=new C.vs("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f8I=new C.vs("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dt=w([D.f8D,D.f8F,D.f8I],x._)
D.f4f=new B.cu(["beat",0.18,0.28,0])
D.f5n=new B.cu(["burst",0.7,0.2,0])
D.f5y=new B.cu(["delay",0.45,0.5,1])
D.f57=new B.cu(["ripple",0.75,0.6,3])
D.d8_=w([D.f4f,D.f5n,D.f5y,D.f57],x.e)
D.djC=w([P.lv,O.JV,F.Ut],x.u)
D.hAX=new C.GJ("First spark","A clock lights a burst and a ripple",D.d8_,D.djC)
D.f4O=new B.cu(["beat",0.15,0.3,1])
D.f3U=new B.cu(["ripple",0.62,0.15,0])
D.f5u=new B.cu(["delay",0.4,0.45,0])
D.f4u=new B.cu(["ripple",0.7,0.45,0])
D.f4b=new B.cu(["delay",0.4,0.7,1])
D.f59=new B.cu(["shake",0.75,0.75,0])
D.dxu=w([D.f4O,D.f3U,D.f5u,D.f4u,D.f4b,D.f59],x.e)
D.eC4=new B.y(2,4)
D.aRb=new B.y(4,5)
D.dbH=w([P.lv,O.JV,F.Ut,D.eC4,D.aRb],x.u)
D.hAZ=new C.GJ("Heartbeat","Two thumps, then a shake",D.dxu,D.dbH)
D.f4k=new B.cu(["dice",0.15,0.7,1])
D.f5A=new B.cu(["echo",0.4,0.7,0])
D.f4s=new B.cu(["comet",0.7,0.5,4])
D.f5o=new B.cu(["burst",0.72,0.2,1])
D.f4M=new B.cu(["burst",0.3,0.25,0])
D.f4l=new B.cu(["pop",0.55,0.85,0])
D.cuT=w([D.f4k,D.f5A,D.f4s,D.f5o,D.f4M,D.f4l],x.e)
D.eBp=new B.y(1,3)
D.eBq=new B.y(1,4)
D.aR7=new B.y(0,5)
D.dl2=w([P.lv,S.vu,D.eBp,D.eBq,D.aR7],x.u)
D.hAY=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cuT,D.dl2)
D.f4p=new B.cu(["beat",0.15,0.2,2])
D.f4W=new B.cu(["chance",0.4,0.2,0])
D.f4h=new B.cu(["ball",0.7,0.12,3])
D.f44=new B.cu(["chance",0.4,0.5,1])
D.f5z=new B.cu(["ball",0.3,0.08,1])
D.f3Y=new B.cu(["ripple",0.7,0.55,3])
D.cnU=w([D.f4p,D.f4W,D.f4h,D.f44,D.f5z,D.f3Y],x.e)
D.eC5=new B.y(2,5)
D.cLm=w([P.lv,S.vu,O.a9j,F.Uu,D.eC5],x.u)
D.hAW=new C.GJ("Rain","Balls fall at random and splash",D.cnU,D.cLm)
D.f4X=new B.cu(["beat",0.12,0.45,2])
D.f5p=new B.cu(["toggle",0.38,0.2,0])
D.f5w=new B.cu(["wash",0.7,0.15,4])
D.f4j=new B.cu(["count3",0.38,0.45,0])
D.f5r=new B.cu(["burst",0.72,0.4,0])
D.f4N=new B.cu(["light",0.55,0.7,1])
D.f45=new B.cu(["pop",0.8,0.8,4])
D.dnV=w([D.f4X,D.f5p,D.f5w,D.f4j,D.f5r,D.f4N,D.f45],x.e)
D.eCC=new B.y(3,6)
D.cr2=w([P.lv,S.vu,O.a9j,F.Uu,D.aR7,D.eCC],x.u)
D.hAU=new C.GJ("Disco","A beat drives lights, washes and bursts",D.dnV,D.cr2)
D.f5D=new B.cu(["button",0.12,0.2,0])
D.f4_=new B.cu(["delay",0.34,0.2,1])
D.f5C=new B.cu(["light",0.56,0.2,1])
D.f5v=new B.cu(["delay",0.56,0.45,1])
D.f4Y=new B.cu(["ball",0.34,0.6,0])
D.f43=new B.cu(["delay",0.34,0.8,1])
D.f3T=new B.cu(["burst",0.7,0.8,5])
D.cb4=w([D.f5D,D.f4_,D.f5C,D.f5v,D.f4Y,D.f43,D.f3T],x.e)
D.eEO=new B.y(5,6)
D.dtw=w([P.lv,S.vu,F.Ut,F.Uu,D.aRb,D.eEO],x.u)
D.hAV=new C.GJ("Domino","Tap the button and watch it run down the line",D.cb4,D.dtw)
D.aBv=w([D.hAX,D.hAZ,D.hAY,D.hAW,D.hAU,D.hAV],B.at("O<GJ>"))
D.diT=w([0.05,0.15,0.25],x.n)
D.djO=w([1.5,3,4.5,9,12],x.n)
D.f0_=new B.b5("dice","Dice",A.ox)
D.f1e=new B.b5("coin","Coin",Q.zk)
D.f3n=new B.b5("num","Number",A.zt)
D.dk1=w([D.f0_,D.f1e,D.f3n],x.r)
D.dk5=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBB=w([A.c0,A.aS,A.b5,A.aH,A.bq,A.bT,A.cF,A.hr],x.O)
D.dl8=w([A.bT,A.aH,A.dy,A.b5],x.O)
D.dma=w([],x.h)
D.eti=new C.eh("battery","Battery","\ud83d\udd0b",A.b5,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eto=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bi,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eu2=new C.eh("crank","Hand crank","\ud83d\udd04",A.cF,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.etF=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eta=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hr,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.etD=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eu7=new C.eh("diode","Diode","\u27a1\ufe0f",A.aS,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.etP=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dy,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ett=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bq,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eu4=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.et2=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hr,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.etQ=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aS,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.etS=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dy,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.etq=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.etu=new C.eh("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.etM=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.etj=new C.eh("heater","Heater","\ud83d\udd25",A.cF,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.etH=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.etz=new C.eh("radio","Radio","\ud83d\udcfb",A.nu,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.etw=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.et9=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.etg=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aS,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.etm=new C.eh("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eu9=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.etZ=new C.eh("clock","Digital clock","\u23f0",A.b5,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.etC=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mg,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.etf=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eu8=new C.eh("router","WiFi router","\ud83d\udcf6",A.hr,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eub=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.et5=new C.eh("toycar","Toy car","\ud83d\ude97",A.cF,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.euc=new C.eh("kettle","Kettle","\ud83e\uded6",A.mQ,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.etd=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dy,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.etp=new C.eh("lights","Party lights","\ud83c\udf84",A.nu,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.etA=new C.eh("fridge","Fridge","\ud83e\uddca",A.ht,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.et7=new C.eh("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eu_=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.etx=new C.eh("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.etc=new C.eh("drill","Power drill","\ud83d\udd29",A.aS,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.etB=new C.eh("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.etX=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.et8=new C.eh("microwave","Microwave","\ud83c\udf72",A.cF,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.etR=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bi,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.etl=new C.eh("camera","Security camera","\ud83d\udcf7",A.am,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.etL=new C.eh("console","Game console","\ud83c\udfae",A.bq,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eu1=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hn,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.et6=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.etG=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dy,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.etO=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nu,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eu6=new C.eh("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.et4=new C.eh("toaster","Toaster","\ud83c\udf5e",A.dZ,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eua=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.etW=new C.eh("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.etI=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hV,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.etU=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bq,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ete=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eu5=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.et1=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hn,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ety=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.etr=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.etN=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u5,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.et3=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eth=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eu3=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cz,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.etJ=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.etE=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.etV=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ets=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b5,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.etK=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.etT=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cF,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.etY=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.et0=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cg,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.etv=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cz,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.etn=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.etb=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dy,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.etk=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eu0=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bq,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sm=w([D.eti,D.eto,D.eu2,D.etF,D.eta,D.etD,D.eu7,D.etP,D.ett,D.eu4,D.et2,D.etQ,D.etS,D.etq,D.etu,D.etM,D.etj,D.etH,D.etz,D.etw,D.et9,D.etg,D.etm,D.eu9,D.etZ,D.etC,D.etf,D.eu8,D.eub,D.et5,D.euc,D.etd,D.etp,D.etA,D.et7,D.eu_,D.etx,D.etc,D.etB,D.etX,D.et8,D.etR,D.etl,D.etL,D.eu1,D.et6,D.etG,D.etO,D.eu6,D.et4,D.eua,D.etW,D.etI,D.etU,D.ete,D.eu5,D.et1,D.ety,D.etr,D.etN,D.et3,D.eth,D.eu3,D.etJ,D.etE,D.etV,D.ets,D.etK,D.etT,D.etY,D.et0,D.etv,D.etn,D.etb,D.etk,D.eu0],B.at("O<eh>"))
D.dmP=w([5,10,15,25,45,60],x.t)
D.dnb=w([-0.045,0.03,-0.015],x.n)
D.aC3=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v8=w([0.05,0.2,0.35],x.n)
D.b94=new B.ac(0,A.G,A.hu,A.dG,6)
D.dpS=w([D.b94],x.V)
D.eAA=new B.y(0,"AND")
D.eBr=new B.y(1,"Adder")
D.eC6=new B.y(2,"Blinker")
D.eCD=new B.y(3,"Memory")
D.dqG=w([D.eAA,D.eBr,D.eC6,D.eCD],x.I)
D.aCh=w([-104,0,104],x.n)
D.aCj=w([-14,3],x.n)
D.drB=w([-8,0,8],x.n)
D.aCs=w([-92,0,92],x.n)
D.ds0=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f8A=new C.vs("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f8H=new C.vs("Medium tank","Balanced.",0.35,1)
D.f8G=new C.vs("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SB=w([D.f8A,D.f8H,D.f8G],x._)
D.nP=w([0.04,0.2,0.36],x.n)
D.aCE=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f2Y=new B.b5(D.b1h,"Fold",Q.aqz)
D.f1W=new B.b5(D.adc,"Flip",A.CP)
D.bPU=new B.a0(62889,"MaterialIcons",!1)
D.f3j=new B.b5(D.b1i,"Rise",D.bPU)
D.aqM=new B.a0(983870,"MaterialIcons",!1)
D.f_k=new B.b5(D.add,"Assemble",D.aqM)
D.f_y=new B.b5(D.b1j,"Spin",D.apa)
D.f_s=new B.b5(D.b1k,"Pop",A.k7)
D.dtt=w([D.f2Y,D.f1W,D.f3j,D.f_k,D.f_y,D.f_s],B.at("O<+(Lj,m,a0)>"))
D.aCJ=w([A.bT,A.dy,A.bx,A.aH,A.bq,A.c0],x.O)
D.dtT=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.duX=w([3,4.5,5,6,9],x.n)
D.b9E=new B.ac(0,A.G,A.aV,A.H,16)
D.dvp=w([D.b9E],x.V)
D.fQu=new B.B("\ud83e\uddcd",null,S.KL,null,null,null,null,null,null,null,null,null)
D.ca7=new B.IX(5,null,null,A.bA,A.bT,null,null,null,null)
D.ffD=new B.a5(150,null,D.ca7,null)
D.fxO=new B.F(!0,A.ac,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTP=new B.B("Getting the body ready...",null,D.fxO,null,null,null,null,null,null,null,null,null)
D.fQx=new B.B("Real 3D anatomy, kept on your phone",null,A1.xl,null,null,null,null,null,null,null,null,null)
D.dvs=w([D.fQu,A.aB,D.ffD,A.af,D.fTP,A.aw,D.fQx],x.p)
D.dw0=w(["solar","turbine","crank","pot"],x.s)
D.dwq=w([0,0.35,0.75,1],x.n)
D.dxJ=w(["volts","level","ohms","on"],x.s)
D.dza=w([A.jJ,A.D0,A.CG,A.qN,Z.HU,A.uW,A.zp,A.qQ,A.ie,A.oF,A.hw,A.ec,A.hK,A.ig,A.n2,A.lN,A.uV,A.t8,A.lj,A.Hr,A.wO,A.CO,A.CK,A.a3f,A.Pa,A.CX,A.Pk,A.aq_,H.aqI,A.k7],x.w)
D.ejb={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.htc=new C.yM("Switch",F.py,A.bi,0,"Tap it to turn it ON or OFF.")
D.ht8=new C.yM("Blinker",A.oD,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.ht9=new C.yM("AND",D.aqM,A.co,2,"ON only when BOTH inputs are ON.")
D.bRo=new B.a0(63671,"MaterialIcons",!1)
D.ht7=new C.yM("OR",D.bRo,A.bq,2,"ON when EITHER input is ON.")
D.hta=new C.yM("XOR",Ab.a2C,A.bT,2,"ON when the inputs are DIFFERENT.")
D.ht4=new C.yM("NAND",A.uI,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bQu=new B.a0(63176,"MaterialIcons",!1)
D.ht5=new C.yM("NOR",D.bQu,A.hr,2,"ON only when BOTH inputs are OFF.")
D.ht6=new C.yM("NOT",Y.D1,A.cF,1,"Flips the signal: ON becomes OFF.")
D.htb=new C.yM("Light",A.mh,A.dy,1,"Glows when its input is ON.")
D.htd=new C.yM("Buzzer",A.oE,A.c0,1,"Beeps while its input is ON.")
D.A7=new B.bu(D.ejb,[D.htc,D.ht8,D.ht9,D.ht7,D.hta,D.ht4,D.ht5,D.ht6,D.htb,D.htd],B.at("bu<m,yM>"))
D.d0G=w([A.A],x.M)
D.d12=w([A.aA,A.aE],x.M)
D.daH=w([A.aA,A.A,A.aE],x.M)
D.dcj=w([A.aA,A.ly,A.A,A.lz,A.aE],x.M)
D.dqC=w([A.aA,A.ly,A.a7,A.aa,A.lz,A.aE],x.M)
D.dDY=new B.d_([1,D.d0G,2,D.d12,3,D.daH,4,A.aDi,5,D.dcj,6,D.dqC],B.at("d_<G,ai<da>>"))
D.elJ={Calm:0,Box:1,Sleep:2}
D.cIK=w([4,2,6,0],x.n)
D.cIR=w([4,4,4,4],x.n)
D.cIS=w([4,7,8,0],x.n)
D.T2=new B.bu(D.elJ,[D.cIK,D.cIR,D.cIS],B.at("bu<m,ai<H>>"))
D.ejo={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xJ=new C.a1D(0,"source")
D.dbK=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hzA=new C.qu("Clock",A.oD,D.xJ,A.bx,D.dbK)
D.hzw=new C.qu("Button",A.D4,D.xJ,A.aS,A.a_)
D.dv8=w(["random","quick","slow"],x.s)
D.hzH=new C.qu("Dice",A.ox,D.xJ,A.bT,D.dv8)
D.bR2=new B.a0(63484,"MaterialIcons",!1)
D.F8=new C.a1D(1,"logic")
D.dA0=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hzD=new C.qu("Delay",D.bR2,D.F8,A.co,D.dA0)
D.dmX=w(["fast","mid","slow"],x.s)
D.hzI=new C.qu("Echo",A.aqg,D.F8,A.bq,D.dmX)
D.hzF=new C.qu("Every 2nd",Y.D1,D.F8,A.hr,A.a_)
D.bQI=new B.a0(63309,"MaterialIcons",!1)
D.hzC=new C.qu("Every 3rd",D.bQI,D.F8,A.aH,A.a_)
D.bSF=new B.a0(983902,"MaterialIcons",!1)
D.car=w(["50%","25%","75%"],x.s)
D.hzK=new C.qu("Chance",D.bSF,D.F8,A.cF,D.car)
D.rk=new C.a1D(2,"out")
D.hzy=new C.qu("Light",A.mh,D.rk,A.dy,A.a_)
D.hzz=new C.qu("Burst",A.k7,D.rk,A.bT,A.a_)
D.hzx=new C.qu("Ripple",A.zw,D.rk,A.ba,A.a_)
D.hzG=new C.qu("Ball",A.aqr,D.rk,A.cF,A.a_)
D.hzE=new C.qu("Comet",A.oF,D.rk,A.bq,A.a_)
D.bSp=new B.a0(983669,"MaterialIcons",!1)
D.hzJ=new C.qu("Shake",D.bSp,D.rk,A.c0,A.a_)
D.hzL=new C.qu("Pop",A.Hs,D.rk,A.b5,A.a_)
D.hzB=new C.qu("Wash",A.Po,D.rk,A.pd,A.a_)
D.n7=new B.bu(D.ejo,[D.hzA,D.hzw,D.hzH,D.hzD,D.hzI,D.hzF,D.hzC,D.hzK,D.hzy,D.hzz,D.hzx,D.hzG,D.hzE,D.hzJ,D.hzL,D.hzB],B.at("bu<m,qu>"))
D.ejB={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Az=new C.Ki(0,"tv")
D.faa=new C.my("Samsung Neo QLED 8K",D.Az,F.ye,A.aH)
D.fa1=new C.my("LG OLED evo G5",D.Az,A.ep,A.hn)
D.f9T=new C.my("Sony Bravia 9",D.Az,A.rw,A.bv)
D.f9X=new C.my("Apple TV 4K",D.Az,A.eb,A.bP)
D.f9U=new C.my("Bang and Olufsen Beovision",D.Az,F.FE,F.u5)
D.a9D=new C.Ki(1,"iphone")
D.aS0=new C.my("iPhone 18 Pro Max",D.a9D,D.akc,A.cg)
D.Eu=new C.Ki(3,"fold")
D.bvP=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fa6=new C.my("iPhone Fold",D.Eu,D.bvP,A.b8)
D.AA=new C.Ki(2,"android")
D.fa7=new C.my("Samsung Galaxy S26 Ultra",D.AA,F.Yb,A.d5)
D.bov=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fa_=new C.my("Samsung Galaxy Z Fold7",D.Eu,D.bov,A.cz)
D.f9W=new C.my("Google Pixel 10 Pro XL",D.AA,A.db,A.be)
D.fa3=new C.my("Xiaomi 16 Ultra",D.AA,A.ic,A.c6)
D.f9Z=new C.my("Huawei Mate 80 Pro Max",D.AA,A.es,A.ay)
D.f9V=new C.my("OPPO Find X9 Ultra",D.AA,A.e7,A.b5)
D.fac=new C.my("Honor Magic V5",D.Eu,A.d6,A.co)
D.fa0=new C.my("vivo X300 Pro",D.AA,A.fF,A.cF)
D.aS1=new C.Ki(4,"tablet")
D.fa5=new C.my("iPad Pro M5",D.aS1,A.db,A.aH)
D.a9E=new C.Ki(5,"reader")
D.fad=new C.my("Kindle Scribe",D.a9E,A.e8,A.bv)
D.AB=new C.Ki(6,"computer")
D.fa4=new C.my("MacBook Pro M5 Max",D.AB,A.db,A.cg)
D.fa9=new C.my("iMac 32 inch",D.AB,A.bP,A.cz)
D.fa2=new C.my("Pro Display XDR 8K",D.AB,A.ic,A.ba)
D.f9Y=new C.my("Sony Laser Projector",D.AB,A.cr,A.dy)
D.fa8=new C.my("Luxury car touchscreen",D.AB,M.ny,A.ay)
D.fab=new C.my("Apple Vision Pro",D.AB,A.dW,A.bq)
D.mt=new B.bu(D.ejB,[D.faa,D.fa1,D.f9T,D.f9X,D.f9U,D.aS0,D.fa6,D.fa7,D.fa_,D.f9W,D.fa3,D.f9Z,D.f9V,D.fac,D.fa0,D.fa5,D.fad,D.fa4,D.fa9,D.fa2,D.f9Y,D.fa8,D.fab],B.at("bu<m,my>"))
D.ejN={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.byF=new C.fQ(20,4,13,!1)
D.bz5=new C.fQ(14,5,13.5,!1)
D.byX=new C.fQ(9,2.4,10,!1)
D.bza=new C.fQ(7,5,12.5,!1)
D.bz_=new C.fQ(8,3.5,12,!1)
D.byB=new C.fQ(15,2,6,!1)
D.bz8=new C.fQ(45,6,13.5,!0)
D.byR=new C.fQ(10,8,13.5,!1)
D.byJ=new C.fQ(25,3,12,!0)
D.byP=new C.fQ(35,4,12,!0)
D.byQ=new C.fQ(40,4.5,9.5,!0)
D.byS=new C.fQ(55,3,9,!0)
D.byC=new C.fQ(18,3,9,!1)
D.bz7=new C.fQ(22,4,13.5,!1)
D.bz0=new C.fQ(16,5,13.5,!1)
D.byN=new C.fQ(30,4,9,!0)
D.bzj=new C.fQ(5,3.5,13,!1)
D.byV=new C.fQ(25,3,13.5,!0)
D.bz3=new C.fQ(14,2.5,9,!1)
D.byU=new C.fQ(6,6,13,!1)
D.bzb=new C.fQ(30,1.2,5,!0)
D.bzi=new C.fQ(35,3,4.5,!0)
D.bze=new C.fQ(20,4.5,7.5,!0)
D.byT=new C.fQ(55,5.5,13.5,!0)
D.byA=new C.fQ(45,5.5,13.5,!0)
D.bz4=new C.fQ(40,5.5,13.5,!0)
D.bzh=new C.fQ(60,6,13.5,!0)
D.akH=new C.fQ(28,4,7,!0)
D.GA=new C.fQ(25,4,7,!0)
D.byM=new C.fQ(30,4,7,!0)
D.byH=new C.fQ(22,4,7,!0)
D.byI=new C.fQ(24,4,7,!0)
D.byW=new C.fQ(60,3,5.5,!0)
D.byD=new C.fQ(18,9,14,!0)
D.byK=new C.fQ(25,9,14,!0)
D.akI=new C.fQ(30,8,14,!0)
D.byG=new C.fQ(20,8,14,!0)
D.byO=new C.fQ(30,9,14,!0)
D.bzc=new C.fQ(22,5,9.5,!0)
D.byE=new C.fQ(30,2.5,10.5,!0)
D.bz1=new C.fQ(50,5.5,13.5,!0)
D.bzg=new C.fQ(12,2,9.5,!1)
D.byZ=new C.fQ(16,1.3,9.5,!0)
D.bz9=new C.fQ(40,2.5,7,!0)
D.bzf=new C.fQ(60,1.2,4.8,!0)
D.bzd=new C.fQ(18,5,13.5,!0)
D.bz6=new C.fQ(8,2,9.5,!1)
D.byY=new C.fQ(12,2.5,8,!1)
D.byL=new C.fQ(20,3.5,13.5,!0)
D.bz2=new C.fQ(3.5,3,13,!1)
D.A8=new B.bu(D.ejN,[D.byF,D.bz5,D.byX,D.bza,D.bz_,D.byB,D.bz8,D.byR,D.byJ,D.byP,D.byQ,D.byS,D.byC,D.bz7,D.bz0,D.byN,D.bzj,D.byV,D.bz3,D.byU,D.bzb,D.bzi,D.bze,D.byT,D.byA,D.bz4,D.bzh,D.akH,D.GA,D.byM,D.GA,D.byH,D.GA,D.byI,D.akH,D.GA,D.byW,D.byD,D.byK,D.akI,D.byG,D.byO,D.bzc,D.byE,D.bz1,D.bzg,D.byZ,D.bz9,D.bzf,D.GA,D.akI,D.bzd,D.bz6,D.byY,D.byL,D.bz2],B.at("bu<m,fQ>"))
D.ejl={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eZQ=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eEL=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eEG=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eRc=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eS9=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eR8=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eCM=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eP3=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eZY=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eSv=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eI9=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eCq=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eH8=new B.y("Movement","They pull your legs together and help you balance.")
D.eJ6=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eEU=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eXg=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eYq=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eOM=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eY9=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eNm=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eSE=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eCx=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eJt=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eSi=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eNI=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eYh=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eQD=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eCK=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eTe=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eWU=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eV0=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eAM=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eQl=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eQp=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eKd=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eF7=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eIV=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ePe=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eVQ=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eZV=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eSB=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eAu=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ePq=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eBk=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eW5=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eXc=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ePS=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eWk=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eCz=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eXO=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eGu=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eVt=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eJS=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eNC=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eSV=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eXY=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eXQ=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eXU=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eO9=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eTN=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eUY=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eXA=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ePR=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eLW=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eKE=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eQg=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eSO=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eMs=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eN9=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eGT=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eX8=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eHJ=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eBh=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eKc=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eBc=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eFz=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eKh=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eHT=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eTa=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eJ9=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eZC=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eKO=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eO2=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eQL=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eI1=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eHL=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dF4=new B.bu(D.ejl,[D.eZQ,D.eEL,D.eEG,D.eRc,D.eS9,D.eR8,D.eCM,D.eP3,D.eZY,D.eSv,D.eI9,D.eCq,D.eH8,D.eJ6,D.eEU,D.eXg,D.eYq,D.eOM,D.eY9,D.eNm,D.eSE,D.eCx,D.eJt,D.eSi,D.eNI,D.eYh,D.eQD,D.eCK,D.eTe,D.eWU,D.eV0,D.eAM,D.eQl,D.eQp,D.eKd,D.eF7,D.eIV,D.ePe,D.eVQ,D.eZV,D.eSB,D.eAu,D.ePq,D.eBk,D.eW5,D.eXc,D.ePS,D.eWk,D.eCz,D.eXO,D.eGu,D.eVt,D.eJS,D.eNC,D.eSV,D.eXY,D.eXQ,D.eXU,D.eO9,D.eTN,D.eUY,D.eXA,D.ePR,D.eLW,D.eKE,D.eQg,D.eSO,D.eMs,D.eN9,D.eGT,D.eX8,D.eHJ,D.eBh,D.eKc,D.eBc,D.eFz,D.eKh,D.eHT,D.eTa,D.eJ9,D.eZC,D.eKO,D.eO2,D.eQL,D.eI1,D.eHL],B.at("bu<m,+(m,m)>"))
D.dMp=new C.VG(null)
D.dMC=new C.VH(null)
D.dOF=new C.VM(null)
D.dPt=new C.Wm(null)
D.dPx=new C.Wn(null)
D.dQ5=new C.Wv(null)
D.dTV=new C.X4(null)
D.dUB=new C.X5(null)
D.dYO=new C.Xa(null)
D.edH=new C.Xb(null)
D.edK=new C.Xf(null)
D.efU=new C.Xz(null)
D.efV=new C.a9w(null)
D.ehY=new C.XI(null)
D.elW=new B.o(0,118)
D.aLq=new B.o(0,13)
D.elX=new B.o(0,17)
D.em_=new B.o(0,330)
D.em5=new B.o(0,-13)
D.em6=new B.o(0,-17)
D.em7=new B.o(0,-18)
D.em8=new B.o(0,-19)
D.ema=new B.o(0,-28)
D.emc=new B.o(0,-31)
D.emd=new B.o(0,-32)
D.emj=new B.o(-9.5,-11)
D.emm=new B.o(10,20)
D.emp=new B.o(10,-13)
D.emr=new B.o(10,-22)
D.ems=new B.o(10,-4)
D.emw=new B.o(11,0)
D.a8r=new B.o(11,8)
D.emC=new B.o(12,2)
D.emD=new B.o(14,0)
D.emE=new B.o(14,12)
D.aLC=new B.o(14,8)
D.emF=new B.o(14,-17)
D.aLE=new B.o(14,-3)
D.aLF=new B.o(14,-4)
D.emI=new B.o(15,0)
D.emJ=new B.o(15,-12)
D.emM=new B.o(16,-8)
D.emN=new B.o(18,14)
D.emO=new B.o(18,-12)
D.aLK=new B.o(20,0)
D.emW=new B.o(20,15)
D.emX=new B.o(20,-17)
D.emY=new B.o(20,-3)
D.emZ=new B.o(21,8)
D.en2=new B.o(22,10)
D.aLM=new B.o(22,8)
D.en3=new B.o(24,0)
D.en4=new B.o(24,2)
D.en7=new B.o(24,-18)
D.en8=new B.o(24,-22)
D.enc=new B.o(25,8)
D.end=new B.o(26,0)
D.enh=new B.o(28,-30)
D.eno=new B.o(30,18)
D.enp=new B.o(30,2)
D.ens=new B.o(31,19)
D.enu=new B.o(32,0)
D.aLQ=new B.o(34,0)
D.aLR=new B.o(34,-32)
D.Jz=new B.o(36,0)
D.enH=new B.o(3,-1)
D.enK=new B.o(40,3)
D.enY=new B.o(4,11)
D.eo0=new B.o(4,-2)
D.eo5=new B.o(5,17)
D.eo6=new B.o(5,6)
D.eob=new B.o(6,11)
D.eoh=new B.o(8,7)
D.eoi=new B.o(8,-10)
D.eoj=new B.o(8,-14)
D.aLW=new B.o(9,0)
D.eot=new B.o(-20.5,-17.6)
D.eou=new B.o(-9,18.5)
D.eox=new B.o(-2.6,-1)
D.eoG=new B.o(2.6,1)
D.eoN=new B.o(-9,12.2)
D.ep6=new B.o(-9,20.5)
D.eps=new B.o(-10,0)
D.ept=new B.o(-10,12)
D.aM3=new B.o(-10,4)
D.epx=new B.o(-11,0)
D.epA=new B.o(-11,-2)
D.epE=new B.o(-13,-5)
D.epF=new B.o(-14,0)
D.epG=new B.o(-14,13)
D.epH=new B.o(-14,2)
D.epI=new B.o(-14,-12)
D.epJ=new B.o(-14,-19)
D.epL=new B.o(-14,-23)
D.epM=new B.o(-15,6)
D.epP=new B.o(-16,14)
D.epR=new B.o(-16,-8)
D.epS=new B.o(-17,10)
D.epT=new B.o(-17,-18)
D.epU=new B.o(-17,-8)
D.epW=new B.o(-18,20)
D.epX=new B.o(-18,-9)
D.aM5=new B.o(-20,0)
D.epZ=new B.o(-20,16)
D.eq_=new B.o(-20,-9)
D.TY=new B.o(-22,8)
D.eq0=new B.o(-22,-10)
D.eq1=new B.o(-22,-11)
D.eq2=new B.o(-24,10)
D.eq3=new B.o(-24,11)
D.eq4=new B.o(-24,14)
D.eq5=new B.o(-24,-22)
D.eq7=new B.o(-25,-11)
D.eq8=new B.o(-26,0)
D.eq9=new B.o(-26,-18)
D.eqa=new B.o(-2,9)
D.eqb=new B.o(-2,-10)
D.eqc=new B.o(-2,-20)
D.eqf=new B.o(-2,-9)
D.eqh=new B.o(-32,0)
D.aM7=new B.o(-34,0)
D.eqm=new B.o(-40,3)
D.eqo=new B.o(-4,11)
D.eqp=new B.o(-4,-17)
D.eqq=new B.o(-4,-2)
D.equ=new B.o(-5,0)
D.eqv=new B.o(-5,20)
D.eqw=new B.o(-5,6)
D.eqx=new B.o(-6,26)
D.eqy=new B.o(-6,6)
D.eqz=new B.o(-6,-42)
D.eqB=new B.o(-7,-19)
D.eqC=new B.o(-7,-24)
D.eqF=new B.o(-8,-9)
D.a8A=new B.o(-9,0)
D.eqG=new B.o(-9,1)
D.eqI=new B.o(-9,-23)
D.fHI=new B.B("Thinking\u2026",null,A.hm,null,null,null,null,null,null,null,null,null)
D.erK=new B.D(A.jF,D.fHI,null)
D.fYC=new B.B("Start from a ready-made board",null,A.fC,null,null,null,null,null,null,null,null,null)
D.erX=new B.D(A4.wo,D.fYC,null)
D.bGG=new B.R(4,0,4,14)
D.fCX=new B.F(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new B.B("Games and little helpers for a spare minute.",null,D.fCX,null,null,null,null,null,null,null,null,null)
D.es8=new B.D(D.bGG,D.fII,null)
D.dnx=w([A.iG,A.bm],x.O)
D.aR_=new B.bY(A.A,0.5,A.x,null,0,D.dnx,null,null)
D.ezl=new B.bY(A.A,0.5,A.x,null,0,D.aD_,null,null)
D.dea=w([A.c,A.bK],x.O)
D.ezn=new B.bY(A.A,0.5,A.x,null,0,D.dea,null,null)
D.dwd=w([A.bP,A.dW],x.O)
D.aR0=new B.bY(A.A,0.5,A.x,null,0,D.dwd,null,null)
D.cSJ=w([A.c,A.bP],x.O)
D.ezr=new B.bY(A.tQ,0.5,A.x,null,0,D.cSJ,null,null)
D.bvT=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dub=w([A.fn,D.bvT],x.O)
D.ezw=new B.bY(A.tQ,0.5,A.x,null,0,D.dub,null,null)
D.cLU=w([A.db,A.cr],x.O)
D.ezx=new B.bY(A.A,0.5,A.x,null,0,D.cLU,null,null)
D.d_E=w([A.fy,A.aS,A.cZ],x.O)
D.ezA=new B.bY(A.tQ,0.5,A.x,null,0,D.d_E,null,null)
D.doc=w([A.dW,M.ny],x.O)
D.ezB=new B.bY(A.tQ,0.5,A.x,null,0,D.doc,null,null)
D.ezF=new B.bY(A.A,0.5,A.x,null,0,D.azc,null,null)
D.dx2=w([A.dW,A.i6],x.O)
D.ezN=new B.bY(A.A,0.5,A.x,null,0,D.dx2,null,null)
D.aR5=new B.aN(9,9)
D.ezV=new B.aN(1.4,1.4)
D.f6I=new B.a1(10,-8,18,-2)
D.f6J=new B.a1(14,-14,20,14)
D.f6L=new B.a1(20,-2,30,2)
D.f6Q=new B.a1(4,-13,30,-3)
D.f6W=new B.a1(8,-7,12,7)
D.f77=new B.a1(-12,12,12,19)
D.f78=new B.a1(-12,14,12,22)
D.f79=new B.a1(-12,-22,12,8)
D.f7a=new B.a1(-12,-25,12,19)
D.f7b=new B.a1(-12,-26,12,-6)
D.f7c=new B.a1(-12,-4,12,14)
D.f7e=new B.a1(-14,20,14,24)
D.f7f=new B.a1(-14,6,14,10)
D.f7g=new B.a1(-14,-17,14,15)
D.f7h=new B.a1(-14,-26,14,18)
D.f7i=new B.a1(-14,-4,14,20)
D.f7k=new B.a1(-15,-29,15,25)
D.f7l=new B.a1(-16,-16,16,16)
D.f7o=new B.a1(-16,-22,-9,18)
D.f7p=new B.a1(-16,-24,16,-10)
D.f7r=new B.a1(-16,-2,16,20)
D.f7t=new B.a1(-18,20,18,24)
D.f7u=new B.a1(-18,-18,18,20)
D.f7v=new B.a1(-20,12,20,22)
D.f7w=new B.a1(-20,-28,20,26)
D.f7x=new B.a1(-22,14,22,18)
D.aRI=new B.a1(-22,-26,22,24)
D.f7y=new B.a1(-22,-3,22,3)
D.f7z=new B.a1(-22,-4,22,12)
D.f7B=new B.a1(-24,-12,10,22)
D.f7C=new B.a1(-24,-14,22,8)
D.f7D=new B.a1(-24,-6,24,20)
D.aRJ=new B.a1(-24,-9,24,9)
D.f7E=new B.a1(-25,14,25,19)
D.f7F=new B.a1(-26,-14,14,8)
D.f7G=new B.a1(-26,-4,26,20)
D.f7H=new B.a1(-26,-6,4,6)
D.aRK=new B.a1(-28,-13,28,13)
D.f7I=new B.a1(-28,-16,28,16)
D.f7J=new B.a1(-28,-16,28,8)
D.f7K=new B.a1(-28,-22,28,22)
D.f7L=new B.a1(-30,-12,30,14)
D.f7M=new B.a1(-30,-14,0,14)
D.f7N=new B.a1(-30,-18,30,20)
D.f7O=new B.a1(-30,-28,30,14)
D.f7P=new B.a1(-30,-2,30,18)
D.f7Q=new B.a1(-30,-4,30,18)
D.f7R=new B.a1(-32,-17,32,17)
D.f7S=new B.a1(-32,-28,32,18)
D.f7T=new B.a1(-33,-21,33,17)
D.f7U=new B.a1(-34,14,34,26)
D.a9u=new B.a1(-34,-18,34,18)
D.f7V=new B.a1(-34,-4,34,7)
D.f7W=new B.a1(-36,-24,36,20)
D.f7X=new B.a1(-38,-22,38,22)
D.f7Z=new B.a1(-3,12,3,22)
D.f8_=new B.a1(-3,5,3,15)
D.f83=new B.a1(-46,-34,46,28)
D.f85=new B.a1(-48,-3,48,3)
D.f88=new B.a1(-6,18,24,24)
D.f89=new B.a1(-6,5,6,12)
D.f8a=new B.a1(-6,-22,6,-15)
D.f8e=new B.a1(-9,-16,9,22)
D.f8f=new B.a1(-4.5,-24,4.5,-21.2)
D.f8h=new B.a1(14,-9,17.5,9)
D.el7={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSQ=new B.de(D.el7,5,x.Q)
D.ekC={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fbT=new B.de(D.ekC,10,x.Q)
D.fec=new B.av(24,44)
D.feA=new B.av(54,38)
D.feH=new B.av(66,38)
D.bef=new B.fk(2,null,null,null,null,A.bq,null,null,null,null)
D.ffK=new B.a5(16,16,D.bef,null)
D.aTS=new B.hH(3,12,12,0.82,null)
D.fsy=new B.F(!0,A1.y3,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new B.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cK,null,null,null,null,null,null,D.fsy)
D.fxD=new B.F(!0,A.kK,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.eo("AI",null,null,A.cK,null,null,null,null,null,null,D.fxD)
D.fnq=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new B.F(!0,A.bp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foS=new B.F(!0,A.bW,null,null,null,null,11,A.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new B.F(!0,A.aT,null,null,null,null,12,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new B.cU(A.hu,A.dG,6)
D.dhc=w([D.fcB],B.at("O<cU>"))
D.fqH=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dhc,null,null,null)
D.fqM=new B.F(!0,A.er,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqR=new B.F(!0,A.bW,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fru=new B.F(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new B.F(!0,A.aD,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsC=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new B.F(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftH=new B.F(!0,A.aS,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new B.F(!0,A.c,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDl,null,null,null)
D.ftQ=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new B.F(!0,A.uj,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwf=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwk=new B.F(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new B.F(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new B.F(!0,A.mT,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW1=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyu=new B.F(!0,A.hc,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new B.F(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzk=new B.F(!0,A.b5,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAQ=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBE=new B.F(!0,A.aS,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC_=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC2=new B.F(!0,A.aS,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDb=new B.F(!0,A.uj,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new B.F(!0,A.b5,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDW=new B.B("\u26a0\ufe0f ",null,D.fqU,null,null,null,null,null,null,null,null,null)
D.fE8=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fFK=new B.B("Pick one, then change it and see what happens.",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fs3=new B.F(!0,A.ac,null,null,null,null,null,A.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGJ=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fs3,null,null,null,null,null,null,null,null,null)
D.fIi=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fIW=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h0,null,null,null,null,null,null,null,null,null)
D.fJy=new B.B("Make it yours",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fMK=new B.B("5G",null,X.aVm,null,null,null,null,null,null,null,null,null)
D.fNL=new B.B("Pick how big the screen is on the board",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fz5=new B.F(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new B.B("WHAT HAPPENS",null,D.fz5,null,null,null,null,null,null,null,null,null)
D.fPJ=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fQo=new B.B("Change the words and pictures on the three slabs.",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fQB=new B.B("All the parts and wires will be removed.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fQV=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fRu=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fSJ=new B.B("\ud83c\udfaf Challenges",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fTh=new B.B("Remove this part",null,W.aUY,null,null,null,null,null,null,null,null,null)
D.fTB=new B.B("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fyv=new B.F(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTT=new B.B("How the Lab works",null,D.fyv,null,null,null,null,null,null,null,null,null)
D.fpq=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUe=new B.B("Electronics Lab",null,D.fpq,null,null,null,null,A.a2,null,1,null,null)
D.fUi=new B.B("?",null,O.aWx,null,null,null,null,null,null,null,null,null)
D.fVD=new B.B("Ready-made circuits",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fWg=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fBI=new B.F(!0,A.aS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZK=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fBI,null,null,null,null,null,null,null,null,null)
D.h_W=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUW,null,null,null,null,null,null,null,null,null)
D.h0r=new B.B("NGMY",null,A.vE,null,null,null,null,null,null,null,null,null)
D.h0F=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VH,null,null,null,null,null,null,null,null,null)
D.h13=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lV,null,null,null,null,null,null,null,null,null)
D.h28=new B.B("TOOLBOX",null,A9.aaS,null,null,null,null,null,null,null,null,null)
D.hqS=new B.bC("body-loading",x.Y)
D.hr9=new B.bC("core-protocol-back",x.Y)
D.hre=new B.bC("core-protocol-title-frame",x.Y)})();(function staticFields(){$.huv=null
$.hur=null
$.hus=null
$.hAK=0
$.i2P=B.T(x.N,B.at("iH"))
$.i3n=B.T(x.N,B.at("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iBJ","bGO",()=>{var v="led"
return B.a([C.aA0("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fsl(),v),C.aA0("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fsm(),v),C.aA0("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fsn(),v),C.aA0("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fsu(),v),C.aA0("Not both","Make the light go OFF only when both switches are ON.",2,new C.fsv(),v),C.aA0("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fsw(),"buzzer")],B.at("O<bd3>"))})
w($,"iCa","bGP",()=>B.a([C.Rk("UNIVERSE","Earth, space and gravity",A.PJ,A.aH,new C.fsM()),C.Rk("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.CL,A.aH,new C.fsN()),C.Rk("DISCOVERY LAB","Body Explorer: a real 3D human",D.bPV,A.b5,new C.fsO()),C.Rk("TOOLBOX","Converter, clock, games",H.apn,A.cF,new C.fsP()),C.Rk("REACTION LAB","Wire parts together",A.D8,A.bx,new C.fsQ()),C.Rk("SPARK PAINTER","Paint with light",A.P8,A.bT,new C.fsR()),C.Rk("ROCKET LANDER","Land softly on the pad",A.oF,A.aH,new C.fsS()),C.Rk("TITLE ANIMATOR","Make a moving title",A.wQ,A.bi,new C.fsT()),C.Rk("CIRCUIT LAB","Connect logic, learn it",A.a2X,A.co,new C.fsU())],B.at("O<bvi>")))
w($,"iDP","qF",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sm[v]
t.n(0,u.a,u)}return t})
w($,"iBK","aj6",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fsx()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fsy()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fsz()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fsA()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fsB()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fso()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fsp()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fsq()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fsr()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fss()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fst())],B.at("O<bd4>")))
w($,"iCc","hJL",()=>B.a([C.a29("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aS,A.c6,new C.ft1()),C.a29("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bC,new C.ft2()),C.a29("Breathe","Calm down in a minute","\ud83e\udee7",A.hr,A.cz,new C.ft3()),C.a29("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b8,new C.ft4()),C.a29("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cg,new C.ft5()),C.a29("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bi,A.be,new C.ft6()),C.a29("Tip & Split","Share the bill","\ud83e\uddfe",A.b5,A.b2,new C.ft7()),C.a29("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bq,A.aF,new C.ft8())],B.at("O<bwC>")))})()};
(a=>{a["Ku7qjD9kp5oF1seoZiQCoKD13NY="]=a.current})($__dart_deferred_initializers__);