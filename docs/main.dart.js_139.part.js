((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,W,X,N,Y,O,Z,C={
bCV(d){return C.ib9(d)},
ib9(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rj(B.nl(""),d,A.i1,null,null).dg(0,A.a0I),$async$bCV)
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
return B.i($async$bCV,v)},
in7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.SB[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cR(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fb(D.SB,new C.fMY())
if(w==null)w=A.d.gH(D.SB)
s=B.T(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qH().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alz(w.a,w.b,m,w,s,!1)},
igM(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.T_,new C.fBA(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iv4(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cm(b2,"{")
v=A.a.pf(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.W.aP(0,A.a.aA(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qH().am(0,p)||J.eC(s,o)||J.ad(t)>=8)continue
J.c4(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dCf[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dF(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dF(J.t(q,"y")):0.25+A.h.aq(r,3)*0.3,0.1,0.9)
J.c4(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.h.M(B.dF(J.t(g,1))),0,1)
a0=A.o.D(A.h.M(B.dF(J.t(g,3))),0,1)
if(J.eC(s,f)&&J.eC(s,e)&&!J.z(f,e))J.c4(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gP(a0)
J.c4(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mQ(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alz(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ilB(d){var w,v,u=C.hoW()
d.B(u)
for(w=0;w<60;++w)u.vR(0,0.03333333333333333)
v=u.a
return A.d.aU(v,new C.fJk(u))&&!A.d.cE(v,new C.fJl())},
ilA(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qH().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.h.U(t.r)+" ohms")
if(A.d.q(D.dAn,p))q.push("level "+A.h.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.h.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i9E(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
in6(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qH().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.T_[u]
if(A.d.aU(w,new C.fMV(s)))if(!B.cR(r,s.b.toLowerCase(),0))v=B.cR(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fMW(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.ad(A.d.cB(w,0,new C.fMX())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qH().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alz:function alz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMY:function fMY(){},
fBA:function fBA(){},
fJk:function fJk(d){this.a=d},
fJl:function fJl(){},
fMV:function fMV(d){this.a=d},
fMW:function fMW(d){this.a=d},
fMX:function fMX(){},
X_:function X_(d,e){this.c=d
this.a=e},
bng:function bng(d,e,f,g,h){var _=this
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
el_:function el_(d){this.a=d},
el0:function el0(d,e,f){this.a=d
this.b=e
this.c=f},
el1:function el1(d){this.a=d},
elc:function elc(d){this.a=d},
eld:function eld(d,e){this.a=d
this.b=e},
el8:function el8(d){this.a=d},
el6:function el6(d,e){this.a=d
this.b=e},
el7:function el7(d,e,f){this.a=d
this.b=e
this.c=f},
el9:function el9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
el4:function el4(d){this.a=d},
el5:function el5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ela:function ela(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
el3:function el3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elb:function elb(d,e){this.a=d
this.b=e},
el2:function el2(d,e){this.a=d
this.b=e},
elg:function elg(d){this.a=d},
elf:function elf(d){this.a=d},
elh:function elh(d){this.a=d},
ele:function ele(d){this.a=d},
eli:function eli(d,e){this.a=d
this.b=e},
elj:function elj(d,e){this.a=d
this.b=e},
elk:function elk(d,e){this.a=d
this.b=e},
ell:function ell(d,e){this.a=d
this.b=e},
bDf(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fBa,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hCY(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.Bb,A.K,w,w),A.aB,B.c_(A.fU,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(D.bjb,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xn:function Xn(d){this.a=d},
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
_.ma$=i
_.fa$=j
_.h9$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
eAk:function eAk(){},
eAE:function eAE(d){this.a=d},
eAD:function eAD(d,e){this.a=d
this.b=e},
eAF:function eAF(){},
eAG:function eAG(){},
eAm:function eAm(d,e,f){this.a=d
this.b=e
this.c=f},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAb:function eAb(d){this.a=d},
eAc:function eAc(d){this.a=d},
eAd:function eAd(d){this.a=d},
eAe:function eAe(d){this.a=d},
eAf:function eAf(d){this.a=d},
eAg:function eAg(d){this.a=d},
eAh:function eAh(d){this.a=d},
eAi:function eAi(d){this.a=d},
eAj:function eAj(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(d){this.a=d},
eA8:function eA8(d){this.a=d},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAp:function eAp(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAo:function eAo(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAw:function eAw(d){this.a=d},
eAn:function eAn(d){this.a=d},
eAy:function eAy(d,e){this.a=d
this.b=e},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAz:function eAz(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAB:function eAB(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAq:function eAq(d){this.a=d},
bka:function bka(d,e){this.b=d
this.a=e},
aOO:function aOO(){},
bAU:function bAU(){},
hy_(){var w=$.hxY
return w==null?$.hxY=$.pc().cXr("assets/data/three.min.js"):w},
hxZ(){var w=$.hxX
return w==null?$.hxX=C.cQo():w},
cQo(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cQo=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.pc().iH(0,"assets/data/body3d.bin"),$async$cQo)
case 3:d=a1
$.hy0=J.er(A.dF.gaS(d),d.byteOffset,d.byteLength)
t=B.To(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jJ(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.do4[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4I(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b5Y))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bd6(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cQo,v)},
c7E(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c7E=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ib(B.a([C.hxZ(),C.hy_()],x.D),x.K),$async$c7E)
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
return B.i($async$c7E,v)},
aUY:function aUY(d,e,f){this.a=d
this.b=e
this.c=f},
a4I:function a4I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bd6:function bd6(d,e,f,g,h){var _=this
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
_.ma$=t
_.fa$=u
_.h9$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dQW:function dQW(d){this.a=d},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQz:function dQz(){},
dQX:function dQX(){},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQB:function dQB(d){this.a=d},
dQC:function dQC(){},
dQD:function dQD(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQE:function dQE(d){this.a=d},
dQt:function dQt(d,e,f){this.a=d
this.b=e
this.c=f},
dQu:function dQu(d){this.a=d},
dQv:function dQv(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQT:function dQT(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQU:function dQU(d){this.a=d},
dQG:function dQG(d){this.a=d},
aNR:function aNR(){},
aNS:function aNS(){},
c7F:function c7F(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c7G:function c7G(d,e){this.a=d
this.b=e},
c7H:function c7H(d){this.a=d},
aAA(d,e,f,g,h){return new C.bdS(d,e,f,g,h)},
heO(d,e,f,g,h,i){return $.i7_.c_(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cXk(d,e,f,i,g,h))},
yF:function yF(d,e,f,g,h){var _=this
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
nH:function nH(d,e,f){this.a=d
this.b=e
this.c=f},
bdS:function bdS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fuI:function fuI(){},
fuJ:function fuJ(){},
fuK:function fuK(){},
fuR:function fuR(){},
fuS:function fuS(){},
fuT:function fuT(){},
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
_.ma$=n
_.fa$=o
_.h9$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dSB:function dSB(d){this.a=d},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSi:function dSi(){},
dSC:function dSC(){},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSe:function dSe(d,e){this.a=d
this.b=e},
dSj:function dSj(d,e,f){this.a=d
this.b=e
this.c=f},
dS8:function dS8(){},
dS9:function dS9(){},
dSa:function dSa(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e,f){this.a=d
this.b=e
this.c=f},
dSk:function dSk(){},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dS7:function dS7(d,e,f){this.a=d
this.b=e
this.c=f},
dSv:function dSv(d){this.a=d},
dSu:function dSu(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSt:function dSt(d){this.a=d},
dSr:function dSr(d){this.a=d},
dSs:function dSs(d){this.a=d},
dSq:function dSq(d){this.a=d},
dSn:function dSn(d){this.a=d},
dSp:function dSp(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSo:function dSo(d){this.a=d},
dSA:function dSA(d,e){this.a=d
this.b=e},
be9:function be9(d,e){this.b=d
this.a=e},
cXk:function cXk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNW:function aNW(){},
bAE:function bAE(){},
hYF(){return new C.Om(null)},
Rq(d,e,f,g,h){return new C.bwb(d,e,f,g,h)},
bux(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hfl(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
ip3(){return B.lm("construction","")},
Om:function Om(d){this.a=d},
Lk:function Lk(d,e){this.a=d
this.b=e},
B3:function B3(d,e,f,g,h,i,j){var _=this
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
dYN:function dYN(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
bwb:function bwb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fv8:function fv8(){},
fv9:function fv9(){},
fva:function fva(){},
fvb:function fvb(){},
fvc:function fvc(){},
fvd:function fvd(){},
fve:function fve(){},
fvf:function fvf(){},
fvg:function fvg(){},
buy:function buy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fay:function fay(d){this.a=d},
fax:function fax(d,e){this.a=d
this.b=e},
fav:function fav(d){this.a=d},
faz:function faz(d){this.a=d},
faw:function faw(d,e){this.a=d
this.b=e},
agp:function agp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afg:function afg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rj:function Rj(d,e,f,g,h,i,j,k,l,m){var _=this
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
bvz:function bvz(d,e){this.b=d
this.a=e},
bv4:function bv4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcP:function bcP(d,e){this.b=d
this.a=e},
aJQ:function aJQ(d,e){this.c=d
this.a=e},
aJR:function aJR(d,e,f){var _=this
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
fae:function fae(d){this.a=d},
fad:function fad(d){this.a=d},
fac:function fac(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fab:function fab(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fa9:function fa9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fa8:function fa8(d,e,f){this.a=d
this.b=e
this.c=f},
faa:function faa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fa7:function fa7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fam:function fam(d){this.a=d},
fal:function fal(d){this.a=d},
fan:function fan(d,e){this.a=d
this.b=e},
fao:function fao(d,e){this.a=d
this.b=e},
fap:function fap(d,e){this.a=d
this.b=e},
fak:function fak(d,e,f){this.a=d
this.b=e
this.c=f},
faq:function faq(d,e,f){this.a=d
this.b=e
this.c=f},
faj:function faj(d){this.a=d},
faf:function faf(d){this.a=d},
far:function far(d){this.a=d},
fas:function fas(d){this.a=d},
fai:function fai(d,e){this.a=d
this.b=e},
fat:function fat(d,e){this.a=d
this.b=e},
fah:function fah(d,e){this.a=d
this.b=e},
fau:function fau(d,e){this.a=d
this.b=e},
fag:function fag(d,e){this.a=d
this.b=e},
fa5:function fa5(){},
fa6:function fa6(){},
bu9:function bu9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btz:function btz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdv:function bdv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btB:function btB(d,e,f){this.b=d
this.c=e
this.a=f},
bxF:function bxF(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aPD:function aPD(){},
hEv(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.r(w,0)),u=e.aJ(0,new B.r(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a5(0,v.aM(0,s*t*f)).a5(0,u.aM(0,s*f*f)).a5(0,e.aM(0,f*f*f))},
bk9(d,e,f,g,h,i){return $.i7y.c_(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dsF(d,e,f,i,g,h))},
a1Q:function a1Q(d,e){this.a=d
this.b=e},
qx:function qx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
re:function re(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D8:function D8(d,e){this.a=d
this.b=e},
a_P:function a_P(d,e){this.a=d
this.b=e},
agd:function agd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a22:function a22(d,e,f,g,h,i){var _=this
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
ad6:function ad6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adn:function adn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afj:function afj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bk7:function bk7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dsJ:function dsJ(d){this.a=d},
dsK:function dsK(d){this.a=d},
dsG:function dsG(d,e){this.a=d
this.b=e},
dsH:function dsH(d){this.a=d},
dsI:function dsI(d){this.a=d},
dsL:function dsL(d){this.a=d},
dsM:function dsM(d){this.a=d},
dsN:function dsN(d){this.a=d},
dsO:function dsO(d){this.a=d},
dsP:function dsP(d){this.a=d},
dsQ:function dsQ(d){this.a=d},
dsR:function dsR(d){this.a=d},
dsS:function dsS(d){this.a=d},
dsT:function dsT(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xm:function Xm(d){this.a=d},
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
ezF:function ezF(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezw:function ezw(){},
ezx:function ezx(){},
ezA:function ezA(){},
ezB:function ezB(d,e,f){this.a=d
this.b=e
this.c=f},
ezC:function ezC(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezy:function ezy(){},
ezz:function ezz(d){this.a=d},
eA4:function eA4(d){this.a=d},
ezE:function ezE(){},
ezq:function ezq(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezJ:function ezJ(){},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezt:function ezt(){},
ezr:function ezr(d){this.a=d},
ezs:function ezs(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA1:function eA1(d){this.a=d},
eA3:function eA3(d){this.a=d},
ezT:function ezT(d,e){this.a=d
this.b=e},
eA0:function eA0(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
eA_:function eA_(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezv:function ezv(){},
ezP:function ezP(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezM:function ezM(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezK:function ezK(d,e){this.a=d
this.b=e},
bk8:function bk8(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dsF:function dsF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOM:function aOM(){},
hKk(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcJ()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hoW(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5R(w,v,u,A.cT,B.T(x.N,x.y))},
hSl(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hoX(d),d.d*f.b)},
hoX(d){return 42+(D.mv.am(0,d.b)?(d.ch-1)*38:0)},
ej:function ej(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tZ:function tZ(d,e,f,g){var _=this
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
abM:function abM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acT:function acT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5R:function a5R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQU:function bQU(){},
bR4:function bR4(d){this.a=d},
bR_:function bR_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR5:function bR5(d){this.a=d},
bR6:function bR6(d){this.a=d},
bR8:function bR8(d){this.a=d},
bR9:function bR9(d){this.a=d},
bR7:function bR7(d){this.a=d},
bRa:function bRa(d,e,f){this.a=d
this.b=e
this.c=f},
bRb:function bRb(d){this.a=d},
bQW:function bQW(d){this.a=d},
bQX:function bQX(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQY:function bQY(d,e,f){this.a=d
this.b=e
this.c=f},
bQZ:function bQZ(d){this.a=d},
bQT:function bQT(d){this.a=d},
bRc:function bRc(d,e){this.a=d
this.b=e},
bR0:function bR0(d,e){this.a=d
this.b=e},
bR3:function bR3(d){this.a=d},
bR2:function bR2(d){this.a=d},
bR1:function bR1(d){this.a=d},
akm:function akm(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bLf:function bLf(){},
bLg:function bLg(){},
mQ:function mQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cv1:function cv1(d){this.a=d},
iv_(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fZd(),c8=new C.fZf(),c9=new C.fZg(),d0=new C.fZe(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.ar(w,d0.$3(new B.a4(w.a,w.b,w.c,w.d),A.ci,A.bP))
d2.ah(D.ewE,D.ety,c8.$2(A.dZ,1.4))
d2.ah(D.etd,D.etb,c8.$2(A.by,2.4))
d2.ah(D.ete,Q.aN1,c8.$2(A.by,2.4))
if(c6){d1=c7.$1(A.ft.j(0.5))
d1.y=A.Hv
d2.O(D.esU,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.h.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.ar(c9.$4(-22,-26,44,50),d0.$3(D.aT9,A.aS,A.cA))
d2.O(A.cM,16,c7.$1(A.by))
d2.O(A.cM,13,c7.$1(c6?A.aH.j(0.85):A.a_))
if(c6){d1=d2.c
J.bs(d1.save())
d1.translate(0,4)
d2.jq(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
d2.O(new B.r(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.O(D.eww,2.4,c7.$1(c6?A.bi:A.an))
d2.O(D.exo,2.4,c7.$1(A.an))
return!0
case"blender":d2.ar(c9.$5(-14,14,28,12,4),c7.$1(A.cR))
d1=$.S().r
t=x.v
s=new B.aG(d1,A.aj,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bx())
d2.af(s,c7.$1(A.ft.j(0.35)))
if(c6){d1=new B.aG(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.aA.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bs(d1.save())
d1.translate(0,10)
d2.jq(0,d3.y)
d2.ah(D.a9I,D.aNo,c8.$2(A.bO,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.O(new B.r(Math.sin(d1+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c7.$1(A.eV))
return!0
case"drone":d2.ar(c9.$5(-10,-4,20,10,4),c7.$1(A.aL))
d2.O(A.hs,3,c7.$1(c6?A.bi:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.J8[p]
d2.ah(new B.r(o*0.4,1),new B.r(o,t),c8.$2(A.by,3))
J.bs(d1.save())
d1.translate(o,q)
d2.ah(D.ewk,D.eti,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.c1(B.bX(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bx())
d2.af(w,d0.$3(D.fhi,A.aQ,A.d6))
d2.aF(D.fgp,c7.$1(A.d_))
d1=d2.c
J.bs(d1.save())
d1.translate(18,-5)
d2.jq(0,d3.y*2)
d2.ah(A.J,D.etp,c8.$2(A.bO,2.4))
d2.ah(A.a9E,D.eto,c8.$2(A.hO,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
d2.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.ex.j(1-u)))}return!0
case"torch":if(c6){v=A.h.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.ar(c9.$5(-26,-6,30,12,3),d0.$3(D.fho,A.bj,A.ct))
n=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bx())
d2.af(n,c7.$1(A.cR))
d2.O(D.etu,7,c7.$1(c6?A.c:A.d_))
return!0
case"neon":d2.ar(c9.$5(-30,-14,60,28,6),c7.$1(M.mX))
if(c6)m=d3.ax>0.5||A.o.F(A.h.bh(d4*17),3)!==0
else m=!1
l=m?A.c4:D.btP
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c4.j(0.35))
t.y=A.n4
d2.ar(d1,t)}d2.ar(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.ewK,l,17)
return!0
case"microwave":d2.ar(c9.$4(-30,-18,60,38),d0.$3(D.fhu,A.bO,A.bj))
d1=c9.$5(-26,-14,38,30,3)
d2.ar(d1,c7.$1(c6?A.bL.j(0.75):A.av))
if(c6){d1=d2.c
J.bs(d1.save())
d1.translate(-7,8)
d2.jq(0,d3.y*0.5)
d2.c1(B.bX(A.J,7,22),c7.$1(A.d6))
d1.restore()}d2.ar(c9.$5(15,-14,12,12,2),c7.$1(M.mX))
if(c6)d5.$5(d2,"0:"+A.a.b1(A.o.v(59-A.o.F(A.h.bh(d4),60)),2,"0"),D.etv,A.be,6.5)
d2.O(D.etL,4,c7.$1(A.d_))
return!0
case"doorbell":d2.ar(c9.$5(-16,-26,32,52,8),c7.$1(A.bm))
d2.O(A.K_,10,c7.$1(c6?A.bt:A.by))
d1=d2.c
J.bs(d1.save())
d1.translate(0,-8)
d2.jq(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.exs,A.c,16)
d1.restore()
d2.O(A.kF,6,c7.$1(A.d9))
d2.O(A.kF,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cQ(B.bW(A.K_,14+v*6+A.h.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.ewJ,D.exl,c8.$2(A.by,4))
d1=d2.c
J.bs(d1.save())
d2.jq(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.ar(c9.$5(-24,-14,46,22,5),d0.$3(D.fhj,A.bO,A.an))
d2.O(D.aN5,8,c7.$1(A.av))
d2.O(D.aN5,4.5,c7.$1(c6?A.aH:A.ct))
d2.O(D.ewH,2.2,c7.$1(c6&&A.o.F(A.h.bh(d4*1.6),2)===0?A.aA:A.ky))
d1.restore()
if(c6)d5.$5(d2,"REC",D.ewS,A.aA,9)
return!0
case"console":d2.ar(c9.$5(-28,-22,56,44,8),d0.$3(D.fhr,A.j7,A.fB))
d2.ar(c9.$5(-20,-17,40,22,3),c7.$1(A.dR))
if(c6){d1=d4*2.3
d2.O(new B.r(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aF(new B.a4(-18,t,-15.6,t+8),c7.$1(A.be))
d1=-9+Math.sin(d1-0.4)*6
d2.aF(new B.a4(15.6,d1,18,d1+8),c7.$1(A.c4))}d2.O(D.ewC,4,c7.$1(A.b5))
d2.O(D.etq,2.4,c7.$1(A.aA))
d2.O(D.etI,2.4,c7.$1(A.bi))
return!0
case"heartmon":d2.ar(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.ar(c9.$5(-26,-18,52,28,3),c7.$1(A.dR))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aG(d1.r,A.aj,c5,c5,t)
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
d5.$5(d2,"72",D.etr,A.hv,11)
d1=d4*9
d5.$5(d2,"\u2665",D.ewX,A.hv.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.O(D.ewM,3,c7.$1(c6?A.bi:A.by))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.ar(d1,c7.$1(A.cF.j(c6?0.5:0.3)))
d2.ar(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aF(D.fhl,c7.$1(F.up))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.oq(0,-1,1)
d2.c1(B.bX(A.J,8,14),c7.$1(A.cP))
d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.c9))
d2.O(D.eut,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.h.F(d1+v*0.2,1)
d2.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aG(d1,A.aj,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bx())
d2.af(g,d0.$3(D.fhW,A.c,A.bD))
d2.aF(D.fhS,c7.$1(c6?A.ex:A.by))
q=new B.aG(d1,A.aj,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bx())
d2.af(q,c7.$1(A.eq))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.ex.j(0.45)))
d1=c7.$1(A.ex.j(0.35))
d1.y=A.Hv
d2.O(D.esV,14,d1)}return!0
case"discoball":d2.ah(D.esX,P.aMX,c8.$2(A.d_,1.4))
d2.O(A.J,16,d0.$3(D.fh2,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.r(-16,d1),new B.r(16,d1),c8.$2(A.dB,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c8.$2(A.dB,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dp8[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.ar(c9.$5(-14,-4,28,24,5),d0.$3(D.fh_,A.cA,A.an))
d2.ar(c9.$5(-12,-26,24,20,5),d0.$3(D.fgT,A.bm,A.bP))
d2.ah(H.aMZ,D.esZ,c8.$2(A.by,1.6))
d2.O(D.et_,2.2,c7.$1(c6?A.aA:A.by))
d=c6&&A.h.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a76[p]
if(c6)d1=d?A.ba:A.fn
else d1=A.ct
d2.O(new B.r(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bs(d1.save())
d1.translate(14,0)
d2.jq(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a9z,c8.$2(A.bP,4))
d1.restore()
d2.ah(D.ews,D.ewQ,c8.$2(A.bP,4))
d2.aF(D.fhR,c7.$1(c6?A.ba.j(0.7):A.aL))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aDH[p]+1,d1,10,14,2)
q=B.ap(A.bL,A.d6,a0)
q.toString
d2.ar(t,c7.$1(q))}d2.ar(c9.$5(-24,-6,48,26,8),d0.$3(D.fhk,A.bO,A.bj))
for(p=0;p<2;++p){o=D.aDH[p]
d1=c9.$5(o,-5,12,5,2)
d2.ar(d1,c7.$1(c6?A.fL:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cP.j(0.5))
t.y=A.oA
d2.ar(d1,t)}}d2.ah(D.etR,D.eub,c8.$2(A.av,3))
return!0
case"ledstrip":d2.ar(c9.$5(-34,-4,68,10,4),c7.$1(A.ct))
for(d1=d4*90,v=0;v<9;++v){a1=A.h.F(d1+v*40,360)
l=c6?new B.pm(1,a1,0.8,1).je():A.cR
if(c6){t=c7.$1(l.j(0.45))
t.y=A.oA
d2.O(new B.r(-30+v*7.5,1),7,t)}d2.O(new B.r(-30+v*7.5,1),2.6,c7.$1(l))}d2.ar(c9.$5(-40,-2,6,6,1),c7.$1(A.d_))
return!0
case"pump":d2.ar(c9.$5(-16,-2,32,22,6),d0.$3(D.fh8,A.cF,A.Gn))
d2.O(D.ewY,8,c7.$1(A.rM))
d1=d2.c
J.bs(d1.save())
d1.translate(-2,9)
d2.jq(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.ft,2.4))}d1.restore()
d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bP,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.O(new B.r(26,6-A.h.F(d1+v*0.2,1)*26),2.2,c7.$1(A.ha))
d2.O(D.ev6,3.2,c7.$1(A.ha.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bs(d1.save())
d2.jq(0,-0.15)
d2.ar(c9.$5(-26,-14,40,22,10),d0.$3(D.fhm,A.hM,A.ut))
d2.ar(c9.$5(14,-10,12,14,3),c7.$1(A.ct))
d2.ar(c9.$5(-10,6,12,22,4),c7.$1(A.cR))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.h.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.r(24+t,q),new B.r(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cP.j(0.4))
d1.y=A.oA
d2.O(D.etK,8,d1)}return!0
case"headphones":d2.cQ(B.bX(A.dM,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.by,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Tb[p]
t=o-7
d2.ar(c9.$5(t,0,14,20,6),d0.$3(new B.a4(t,0,t+14,20),A.bh,A.mR))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bW(new B.r(o,10),10+v*5+A.h.F(d1,5))
h=t?2.2:-0.9
d2.cQ(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.r(-4,-8-A.h.F(d4*14,8)),A.kO,12)
return!0
case"smartwatch":d2.ar(c9.$5(-8,-30,16,14,3),c7.$1(A.ct))
d2.ar(c9.$5(-8,14,16,14,3),c7.$1(A.ct))
d2.ar(c9.$5(-14,-17,28,32,8),d0.$3(D.fgY,A.d_,A.cR))
d2.ar(c9.$5(-11,-14,22,26,6),c7.$1(A.dR))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b1(A.o.v(B.dg(a2)),2,"0")+":"+A.a.b1(A.o.v(B.fV(a2)),2,"0"),D.et5,A.be,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ap(A.G7,A.hv,j)
d1.toString
d5.$5(d2,"\u2665",new B.r(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.h.bh(d4*2),6)),A.dM,A.c,7)}return!0
case"tablet":d2.ar(c9.$5(-30,-22,60,44,6),c7.$1(M.mX))
d2.ar(c9.$5(-30,-22,60,44,6),c8.$2(A.bP,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(a3),$.mA(),!0)
d1.translate(-27,-19)
L.Mg(d2,D.foh,d4,!1,c5,c5)
d1.restore()}else d2.ar(a3,c7.$1(D.ws))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.ar(a4,d0.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dX,A.dh))
d2.ar(a4,c8.$2(A.aT,1.2))
d2.O(D.aNv,9,c7.$1(A.av))
d2.O(D.aNv,6,c8.$2(A.d6,2))
d2.ar(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.ar(c9.$5(-22,-19,44,12,2),c7.$1(A.dR))
d1=A.h.ad(d3.db,1)
t=A.h.ad(c6?d3.dx:d3.e,1)
q=c6?A.be:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.evg,q,8.2)
d2.O(D.etz,2.4,c7.$1(c6?A.bi:A.aL))
d5.$5(d2,"IN",D.ewR,A.ab,6)
d5.$5(d2,"OUT",D.euY,A.ab,6)
return!0
case"regulator":a5=c6?A.h.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aA,a5)
t.toString
d2.ar(d1,c7.$1(t))
d2.O(H.a9x,3,c7.$1(A.aL))
d2.ar(c9.$5(-12,-4,24,18,3),d0.$3(D.fgU,A.cR,A.i7))
d5.$5(d2,"7805",D.a9I,A.ab,8)
for(p=0;p<3;++p){d1=D.dvO[p]-1
d2.aF(new B.a4(d1,14,d1+2,22),c7.$1(A.dY))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.h.F(d1+v*0.33,1)
d2.O(new B.r(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.exp,A.bq,9)
return!0
case"diode":d2.ah(D.aNz,D.aNi,c8.$2(A.dY,2.4))
d2.ar(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.aF(D.fgD,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.ex.j(0.4))
t.y=A.kY
d2.ar(d1,t)}d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.b5))
d5.$5(d2,"one way",D.ewF,A.aE,8)
return!0
case"ldr":d2.ah(D.aNz,D.a9I,c8.$2(A.dY,2.4))
d2.ah(D.aNo,D.aNi,c8.$2(A.dY,2.4))
d2.O(A.J,12,c7.$1(A.d6))
d2.O(A.J,12,c8.$2(A.rS,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.aj,c5,c5,t)
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
d5.$5(d2,""+A.h.U(20+980*(1-d3.f))+"\u03a9",D.ewt,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eo
break
case"sonytv":t=A.rD
break
case"appletv":t=A.dY
break
default:t=F.BV
break}a7=d1==="lgtv"||d1==="appletv"
d2.ar(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bs(h.save())
h.clipRRect(B.mW(a3),$.mA(),!0)
h.translate(t,q)
L.fZt(d2,new B.au(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1,c5,c5)
h.restore()
d2.O(D.eue,1.6,c7.$1(A.be))}else{d2.ar(a3,c7.$1(D.ws))
h=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bx())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.ar(c9.$5(-22,19,44,3,1.5),c7.$1(A.d_))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fP[p]
t=$.S()
q=B.a([],d1)
t=new B.aG(t.r,A.aj,c5,c5,q)
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
d2.af(t,c7.$1(A.d_))}d5.$5(d2,"SONY",D.evV,A.bO,5.5)
break
case"appletv":d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_5))
d5.$5(d2,"Apple TV",D.evh,A.by,4.8)
break
default:d2.ar(c9.$5(-34,19,68,7,3),c7.$1(D.bs2))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.r(d1,20),new B.r(d1,25),c8.$2(A.dB,0.6))}d5.$5(d2,"B&O",D.exk,F.up,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mv.h(0,d1)
b0=a9.b===D.AT
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
d2.ar(w,d0.$3(new B.a4(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bs(t.save())
t.clipRRect(B.mW(a3),$.mA(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Mg(d2,new B.au(a3.c-q,a3.d-h),d4,!1,c5,c5)
t.restore()}else d2.ar(a3,c7.$1(D.ws))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.r(0,t),new B.r(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.ar(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.O(new B.r(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.ar(c9.$5(-17,-28,34,52,4),c7.$1(A.cR))
d2.ar(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bO))
if(c6){d5.$5(d2,"NGMY",D.exv,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aF(new B.a4(-11,d1,-11+t,d1+1.4),c7.$1(A.bj))}d2.O(A.a9v,1.6,c7.$1(A.av))}return!0
case"laptop":d2.ar(c9.$5(-30,-28,60,42,4),d0.$3(D.fhv,A.cA,A.bj))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(b7),$.mA(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Mg(d2,new B.au(b7.c-t,b7.d-q),d4,!1,c5,c5)
d1.restore()}else d2.ar(b7,c7.$1(D.ws))
d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_5))
d2.ar(c9.$5(-7,16,14,2,1),c7.$1(A.bj))
return!0
case"imac":d2.ar(c9.$5(-32,-28,64,46,5),d0.$3(D.fhz,A.ci,A.cA))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(b8),$.mA(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Mg(d2,new B.au(b8.c-t,b8.d-q),d4,!1,c5,c5)
d1.restore()}else d2.ar(b8,c7.$1(D.ws))
d2.O(D.aMS,2,c7.$1(A.bP))
d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bx())
d2.af(d1,c7.$1(D.a_5))
return!0
case"monitor":d2.ar(c9.$5(-34,-28,68,40,3),c7.$1(A.eo))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(b9),$.mA(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Mg(d2,new B.au(b9.c-t,b9.d-q),d4,!1,c5,c5)
d1.restore()}else d2.ar(b9,c7.$1(D.ws))
d2.aF(D.fhG,c7.$1(A.bj))
d2.ar(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d_))
return!0
case"projector":if(c6){d1=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bx())
d2.af(d1,c7.$1(A.ex.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(c0),$.mA(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Mg(d2,new B.au(c0.c-t,c0.d-q),d4,!1,c5,c5)
d1.restore()}d2.ar(c9.$5(-26,-4,52,24,6),d0.$3(D.fhn,A.hY,A.d_))
d2.O(D.aN3,7,c7.$1(A.av))
d2.O(D.aN3,4,c7.$1(c6?A.ex:A.ct))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.r(d1,2),new B.r(d1,14),c8.$2(A.dB,1))}return!0
case"carscreen":d2.ar(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.ar(c1,c7.$1(M.mX))
d2.ar(c1,c8.$2(A.by,1.2))
if(c6){c2=new B.aG($.S().r,A.aj,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.ce(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.h.F(d4*6,48)
d2.O(new B.r(-26+d1,4-d1*0.1),2.4,c7.$1(A.be))
d5.$5(d2,""+(88+A.o.F(A.h.bh(d4*2),5)),H.aNn,A.c,10)
d5.$5(d2,"km/h",D.ev4,A.aE,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.ar(c3,d0.$3(new B.a4(c3.a,c3.b,c3.c,c3.d),A.d_,A.cR))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bs(d1.save())
d1.clipRRect(B.mW(c4),$.mA(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Mg(d2,new B.au(c4.c-t,c4.d-q),d4,!1,c5,c5)
d1.restore()
d1=c7.$1(A.bh.j(0.2))
d1.y=A.n4
d2.O(A.J,26,d1)}else d2.ar(c4,c7.$1(A.a_))
d2.ah(D.ex4,D.ex9,c8.$2(A.bj,4))
d2.ah(D.eug,D.euw,c8.$2(A.bj,4))
return!0}return!1},
fZd:function fZd(){},
fZf:function fZf(){},
fZg:function fZg(){},
fZe:function fZe(){},
hnN(d,e,f,g){return new C.akk(d,g,f,e)},
Gt(d,e,f){return new C.bdT(d,e,f)},
akk:function akk(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
akl:function akl(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ma$=j
_.fa$=k
_.h9$=l
_.bw$=m
_.a9$=n
_.c=_.a=null},
bKT:function bKT(d,e){this.a=d
this.b=e},
bKU:function bKU(d){this.a=d},
bKS:function bKS(d){this.a=d},
bKV:function bKV(){},
bKW:function bKW(d){this.a=d},
bKX:function bKX(d,e,f){this.a=d
this.b=e
this.c=f},
bKR:function bKR(d,e){this.a=d
this.b=e},
bKO:function bKO(d,e){this.a=d
this.b=e},
bKP:function bKP(d,e,f){this.a=d
this.b=e
this.c=f},
bKI:function bKI(d,e){this.a=d
this.b=e},
bKJ:function bKJ(){},
bKQ:function bKQ(d,e,f){this.a=d
this.b=e
this.c=f},
bKN:function bKN(d,e){this.a=d
this.b=e},
bKK:function bKK(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e){this.a=d
this.b=e},
bKM:function bKM(d){this.a=d},
bLc:function bLc(d){this.a=d},
bLd:function bLd(){},
bKi:function bKi(){},
bLe:function bLe(d,e){this.a=d
this.b=e},
bLb:function bLb(d,e){this.a=d
this.b=e},
bL6:function bL6(d){this.a=d},
bL3:function bL3(d,e,f){this.a=d
this.b=e
this.c=f},
bL4:function bL4(d,e){this.a=d
this.b=e},
bL7:function bL7(d){this.a=d},
bL1:function bL1(d,e){this.a=d
this.b=e},
bL2:function bL2(d,e){this.a=d
this.b=e},
bL5:function bL5(d){this.a=d},
bL8:function bL8(d){this.a=d},
bKZ:function bKZ(d,e){this.a=d
this.b=e},
bL_:function bL_(d,e){this.a=d
this.b=e},
bL0:function bL0(d,e){this.a=d
this.b=e},
bL9:function bL9(d){this.a=d},
bKY:function bKY(d){this.a=d},
bLa:function bLa(d){this.a=d},
bKj:function bKj(d,e){this.a=d
this.b=e},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKH:function bKH(d,e){this.a=d
this.b=e},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKE:function bKE(){},
bKq:function bKq(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKs:function bKs(d){this.a=d},
bKo:function bKo(d){this.a=d},
bKw:function bKw(d,e,f){this.a=d
this.b=e
this.c=f},
bKn:function bKn(d,e){this.a=d
this.b=e},
bKx:function bKx(d,e){this.a=d
this.b=e},
bKy:function bKy(d,e){this.a=d
this.b=e},
bKz:function bKz(d,e){this.a=d
this.b=e},
bKA:function bKA(d,e,f){this.a=d
this.b=e
this.c=f},
bKm:function bKm(d,e){this.a=d
this.b=e},
bKB:function bKB(d,e,f){this.a=d
this.b=e
this.c=f},
bKl:function bKl(d,e){this.a=d
this.b=e},
bKC:function bKC(d,e,f){this.a=d
this.b=e
this.c=f},
bKk:function bKk(d,e){this.a=d
this.b=e},
bKD:function bKD(d){this.a=d},
bKt:function bKt(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKv:function bKv(d){this.a=d},
bdT:function bdT(d,e,f){this.a=d
this.b=e
this.c=f},
fuU:function fuU(){},
fuV:function fuV(){},
fuW:function fuW(){},
fuH:function fuH(){},
fuX:function fuX(){},
fuG:function fuG(){},
fuY:function fuY(){},
fuL:function fuL(){},
fuF:function fuF(){},
fuM:function fuM(){},
fuE:function fuE(){},
fuN:function fuN(){},
fuD:function fuD(){},
fuO:function fuO(){},
fuB:function fuB(){},
fuC:function fuC(){},
fuP:function fuP(){},
fuz:function fuz(){},
fuA:function fuA(){},
fuQ:function fuQ(){},
fuy:function fuy(){},
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
e2N:function e2N(d,e){this.a=d
this.b=e},
e2W:function e2W(d){this.a=d},
e2X:function e2X(){},
e2Y:function e2Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2Z:function e2Z(){},
e2M:function e2M(d){this.a=d},
e2L:function e2L(d,e,f){this.a=d
this.b=e
this.c=f},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2I:function e2I(d){this.a=d},
e2J:function e2J(){},
e2V:function e2V(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2S:function e2S(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d){this.a=d},
e2R:function e2R(){},
e2T:function e2T(d,e,f){this.a=d
this.b=e
this.c=f},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(){},
e30:function e30(d){this.a=d},
e31:function e31(d,e){this.a=d
this.b=e},
e3_:function e3_(){},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d){this.a=d},
e34:function e34(d){this.a=d},
azG:function azG(d,e){this.c=d
this.a=e},
bc0:function bc0(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cMD:function cMD(d){this.a=d},
bc_:function bc_(d,e){this.b=d
this.a=e},
cMC:function cMC(d){this.a=d},
aA0:function aA0(){},
aA1:function aA1(){},
aMi:function aMi(){},
bAH:function bAH(){},
iv0(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bW(A.vH,23)
$.S()
b8=B.L()
b8.r=A.av.gp(0)
b9.O(A.vH,25,b8)
b8=B.L()
b8.san(D.eGc.aD(0,v))
b9.O(A.vH,23,b8)
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
b9.ah(A.vH,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.vH,3,r)
c2.$5(b9,w?"V":"A",D.exc,A.bq,12)
c2.$5(b9,w?A.h.ad(o,1)+" V":""+A.h.U(o*1000)+" mA",D.ewz,A.av,9.5)
return!0
case"fan":b8=B.by(D.fgQ,A.iF)
$.S()
s=B.L()
s.r=A.by.gp(0)
b9.ar(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aF(D.fhH,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vI,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bX(A.aMW,18,10)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.ha.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vI,4,b8)
b8=B.L()
b8.b=A.aa
b8.c=2
b8.r=A.cA.gp(0)
b9.O(H.vI,22,b8)
b8=B.L()
b8.b=A.aa
b8.c=0.8
b8.r=A.k0.gp(0)
b9.O(H.vI,14,b8)
return!0
case"speaker":n=B.by(D.aT9,A.r9)
$.S()
b8=B.L()
b8.san(D.aul.aD(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.ar(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eGz.aD(0,B.bW(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d_.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bj.gp(0)
b9.O(H.a9w,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bW(D.etQ,6+u*6+A.h.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.c4.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.by(D.fhy,A.r9)
$.S()
b8=B.L()
b8.san(D.cb2.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.ar(l,b8)
b8=B.by(D.aTb,A.jy)
s=B.L()
s.r=A.i7.gp(0)
b9.ar(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FO(k)<500?":":" "
i=A.a.b1(A.o.v(B.dg(k)),2,"0")
h=A.a.b1(A.o.v(B.fV(k)),2,"0")
b8=B.L()
b8.r=A.be.j(0.12).gp(0)
b9.aF(D.aTb,b8)
c2.$5(b9,i+j+h,D.ewV,A.be,21)}b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.ewT,2.4,b8)
b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.etV,2.4,b8)
return!0
case"calculator":l=B.by(D.fhd,A.ir)
$.S()
b8=B.L()
b8.san(D.caM.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.ar(l,b8)
b8=B.by(D.fh6,A.hG)
s=B.L()
s.r=(b7?A.a_k:D.bus).gp(0)
b9.ar(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ewy,A.YT,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.by(new B.a4(r,b8,r+6,s),A.V7)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=(f===3?A.c9:A.bO).gp(0)
b9.ar(r,q)}return!0
case"phone":l=B.by(D.fh1,A.ir)
$.S()
b8=B.L()
b8.r=M.mX.gp(0)
b9.ar(l,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.9
b8.r=D.alu.gp(0)
b9.ar(l,b8)
e=B.by(D.fgS,A.iF)
if(b7){b8=B.L()
b8.san(D.ccp.aD(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.ar(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.mW(e),$.mA(),!0)
b8.translate(-12,-25)
L.Mg(b9,D.fnU,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.by(D.fgP,A.hG)
s=B.L()
s.r=A.b5.gp(0)
b9.ar(b8,s)
s=B.L()
s.r=A.be.gp(0)
b9.aF(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.U(d*100)+"%",D.evB,A.c,6)}else{b8=B.L()
b8.r=D.ws.gp(0)
b9.ar(e,b8)}b8=B.by(D.fhX,D.eGH)
s=B.L()
s.r=A.w.gp(0)
b9.ar(b8,s)
return!0
case"router":l=B.by(D.fhx,A.o_)
$.S()
b8=B.L()
b8.san(D.cbk.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.ar(l,b8)
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
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bW(H.vI,8+u*6+A.h.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.fK.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.by(D.fhc,A.iF)
s=$.S()
r=B.L()
r.r=A.cR.gp(0)
b9.ar(b8,r)
if(b7){b8=B.L()
b8.r=A.aA.j(0.5*a3).gp(0)
b8.y=A.CW
b9.O(A.vH,34,b8)}a4=new B.aG(s.r,A.aj,b6,b6,B.a([],x.v))
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
J.bs(b8.save())
b8.translate(0,-2)
b9.jq(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a9w,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aG(s,A.aj,b6,b6,B.a([],r))
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
q.san(D.c9k.aD(0,D.fhq))
b9.af(l,q)
q=new B.aG(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bx())
p=B.L()
p.r=A.ft.gp(0)
b9.af(q,p)
r=new B.aG(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bx())
s=B.L()
s.r=A.ft.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aDI[a0]
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.av.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
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
l=new B.aG(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ce(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bx())
r=B.L()
r.san(D.car.aD(0,D.fhb))
b9.af(l,r)
r=new B.aG(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bx())
q=B.L()
q.r=A.dY.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ce(-34,-6,-18,12))
b8=B.L()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cP,A.uC,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cR
b8.r=s.gp(0)
b9.aF(D.fha,b8)
if(b7){b8=B.L()
b8.r=A.cP.j(0.3).gp(0)
b8.y=A.n4
b9.O(A.aMU,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.av.gp(0)
b9.O(D.esT,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.aj,b6,b6,B.a([],x.v))
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
s.y=S.OY
b9.O(D.ewZ,24,s)}b8=B.by(D.fhQ,A.iF)
s=$.S()
r=B.L()
r.r=A.cR.gp(0)
b9.ar(b8,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.et8,D.aN6,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aN6,D.ex_,r)
a7=new B.aG(s.r,A.aj,b6,b6,B.a([],x.v))
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
b9.O(D.ex2,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aG(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ce(0,22,34,-6))
r=B.L()
r.b=A.aa
r.c=2
r.r=A.hL.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b1.r=D.a63[u].j(0.6).gp(0)
b1.y=A.Hv
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aG(b8,A.aj,b6,b6,b1)
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
b9.af(b2,q)}return!0}return C.iv_(b9,c0,c1,c2)},
fW:function fW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hiK(d){var w=D.mv.h(0,d)
return(w==null?null:w.b)===D.AR},
iwf(d,e,f){return B.a6(d,!1).ce(B.vj(null,!1,!0,!0,new C.h3l(e,f),A.eW,null,A.pt,new C.h3m(),x.H))},
Kj:function Kj(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3l:function h3l(d,e){this.a=d
this.b=e},
h3m:function h3m(){},
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
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZK:function dZK(d,e,f){this.a=d
this.b=e
this.c=f},
dZU:function dZU(d,e,f){this.a=d
this.b=e
this.c=f},
dZI:function dZI(d,e){this.a=d
this.b=e},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZW:function dZW(d){this.a=d},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZz:function dZz(d){this.a=d},
dZS:function dZS(){},
dZO:function dZO(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZQ:function dZQ(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZN:function dZN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZL:function dZL(){},
dZM:function dZM(d){this.a=d},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZE:function dZE(d){this.a=d},
dZF:function dZF(d){this.a=d},
dZy:function dZy(d){this.a=d},
dZD:function dZD(d,e,f){this.a=d
this.b=e
this.c=f},
dZC:function dZC(d){this.a=d},
byJ:function byJ(d,e,f){this.b=d
this.c=e
this.a=f},
ag6:function ag6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aO6:function aO6(){},
a2m(d,e,f,g,h,i){return new C.bxv(d,e,f,g,h,i)},
bxv:function bxv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvo:function fvo(){},
fvp:function fvp(){},
fvq:function fvq(){},
fvr:function fvr(){},
fvs:function fvs(){},
fvt:function fvt(){},
fvu:function fvu(){},
fvv:function fvv(){},
a9M:function a9M(d){this.a=d},
cnU:function cnU(d){this.a=d},
cnV:function cnV(){},
cnT:function cnT(d,e){this.a=d
this.b=e},
cnS:function cnS(d){this.a=d},
XV:function XV(d){this.a=d},
aHe:function aHe(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h8$=f
_.ma$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eWQ:function eWQ(d){this.a=d},
eWM:function eWM(d){this.a=d},
eWL:function eWL(d,e){this.a=d
this.b=e},
eWO:function eWO(d,e){this.a=d
this.b=e},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWP:function eWP(d){this.a=d},
byV:function byV(d,e,f){this.b=d
this.c=e
this.a=f},
WF:function WF(d){this.a=d},
bmR:function bmR(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h8$=d
_.ma$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e5M:function e5M(){},
e5N:function e5N(){},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5L:function e5L(d){this.a=d},
btA:function btA(d,e,f){this.b=d
this.c=e
this.a=f},
VQ:function VQ(d){this.a=d},
bmq:function bmq(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h8$=d
_.ma$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dR2:function dR2(){},
dR3:function dR3(){},
dQY:function dQY(){},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
aKI:function aKI(d,e,f){this.a=d
this.b=e
this.c=f},
Ww:function Ww(d){this.a=d},
bmI:function bmI(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d){this.a=d},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2j:function e2j(d){this.a=d},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2n:function e2n(d){this.a=d},
e2b:function e2b(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2a:function e2a(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2q:function e2q(d){this.a=d},
e29:function e29(d){this.a=d},
boK:function boK(d,e,f){this.b=d
this.c=e
this.a=f},
Xh:function Xh(d){this.a=d},
aGx:function aGx(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ete:function ete(d,e){this.a=d
this.b=e},
etf:function etf(d,e,f){this.a=d
this.b=e
this.c=f},
etd:function etd(d,e,f){this.a=d
this.b=e
this.c=f},
etg:function etg(d){this.a=d},
etc:function etc(d){this.a=d},
etk:function etk(d){this.a=d},
etj:function etj(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
etl:function etl(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
Xr:function Xr(d){this.a=d},
aGS:function aGS(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eDY:function eDY(d){this.a=d},
eE2:function eE2(d){this.a=d},
eE3:function eE3(d){this.a=d},
eE4:function eE4(d){this.a=d},
eE5:function eE5(d,e){this.a=d
this.b=e},
XM:function XM(d){this.a=d},
bnY:function bnY(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eSb:function eSb(){},
eSk:function eSk(){},
eSg:function eSg(d){this.a=d},
eSf:function eSf(){},
eSh:function eSh(d,e){this.a=d
this.b=e},
eSe:function eSe(d,e){this.a=d
this.b=e},
eSi:function eSi(d){this.a=d},
eSd:function eSd(d,e){this.a=d
this.b=e},
eSj:function eSj(d){this.a=d},
eSc:function eSc(d){this.a=d},
Xf:function Xf(d){this.a=d},
bns:function bns(d,e,f,g,h,i,j,k){var _=this
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
_.ma$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
erU:function erU(){},
erV:function erV(){},
erN:function erN(d){this.a=d},
erM:function erM(d){this.a=d},
erO:function erO(d){this.a=d},
erL:function erL(d){this.a=d},
erP:function erP(d){this.a=d},
erK:function erK(d){this.a=d},
erQ:function erQ(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
bgg:function bgg(d,e,f){this.c=d
this.d=e
this.a=f},
aNT:function aNT(){},
bAD:function bAD(){},
aOd:function aOd(){},
bAJ:function bAJ(){},
aOG:function aOG(){},
bAS:function bAS(){},
aP6:function aP6(){},
bB0:function bB0(){},
JP(d,e,f,g){var w,v,u,t,s,r,q,p=$.au0
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mp(d,e[w],f,g)
return}for(p=B.cT(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mp(d,s,f,g)
else B.bO(new B.bf(1000*q),new C.cnQ(d,s,f,g),u)}},
clk(d){return C.i0H(d)},
i0H(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$clk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$clk)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
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
return B.i($async$clk,v)},
b3Y(d,e){return C.i0I(d,e)},
i0I(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3Y=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b3Y)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.W.av(e,null)),$async$b3Y)
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
return B.i($async$b3Y,v)},
cnQ:function cnQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ilP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.or(A.h.ad(p.c,4)),"y",B.or(A.h.ad(p.d,4)),"v",p.e,"l",B.or(A.h.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.or(A.h.ad(p.as,3)),"ch",p.at,"vc",B.or(A.h.ad(p.z,3)),"s",B.or(A.h.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ci.E"))
A.d.ff(l)
return A.W.av(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ivp(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.W.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.cu:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qH().am(0,s)){J.c4(v,null)
continue}d=s
a0=B.aI(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aI(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tZ(a2,d,a0,a1)
a3.asC(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aI(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aI(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aI(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k3(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k3(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aI(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aI(J.t(t,"ch"))
r.at=A.h.M(d==null?0:d)
d=B.aI(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aI(J.t(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.c4(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cu:i)
h=x.j
while(i.C()){q=i.gP(i)
p=h.a(q)
f=B.aI(J.t(p,0))
o=f==null?a5:A.h.M(f)
f=B.aI(J.t(p,2))
n=f==null?a5:A.h.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.amw(m,A.h.M(B.dF(J.t(p,1))),l,A.h.M(B.dF(J.t(p,3))))}i=B.aI(J.t(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cu:h)
while(h.C()){j=h.gP(h)
J.c4(k,A.h.M(B.dF(j)))}return new B.brH(i,k)}catch(a4){return a5}},
fMA(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fMA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fMA)
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
return B.i($async$fMA,v)},
bHp(d){return C.ix2(d)},
ix2(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bHp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bHp)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bHp)
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
return B.i($async$bHp,v)}},D,P,R,A_,L,F,M,H,A0,S,Q,A1,A2,T,U,A3,E,I,G,K,A4
J=c[1]
B=c[0]
A=c[2]
V=c[72]
W=c[90]
X=c[61]
N=c[89]
Y=c[87]
O=c[75]
Z=c[88]
C=a.updateHolder(c[13],C)
D=c[80]
P=c[85]
R=c[84]
A_=c[21]
L=c[23]
F=c[59]
M=c[57]
H=c[82]
A0=c[37]
S=c[81]
Q=c[48]
A1=c[51]
A2=c[67]
T=c[83]
U=c[86]
A3=c[63]
E=c[24]
I=c[3]
G=c[29]
K=c[65]
A4=c[62]
C.alz.prototype={}
C.X_.prototype={
S(){return new C.bng(B.T(x.N,x.i),new B.at(A.aw,$.aw()),B.a([],x.X),B.a([],x.eZ),B.mR(0,null,null))}}
C.bng.prototype={
gXo(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Q8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Q8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.cg)
t.m(new C.el_(t))
t.a.toString
p=t.gXo()
w=3
return B.b(C.bCV(C.i9E(q,C.ilA(p),o,t.ay)),$async$Q8)
case 3:s=e
r=s==null?null:J.j0(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.in6(q,p,o)
if(t.c==null){w=1
break}t.m(new C.el0(t,o,r))
$.aU.x1$.push(new C.el1(t))
case 1:return B.h(u,v)}})
return B.i($async$Q8,v)},
Zu(d){return this.c43(d)},
aZ6(){return this.Zu(null)},
c43(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
t.f.sb4(0,o)
t.m(new C.elc(t))
G.dB(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCV(C.igM(o)),$async$Zu)
case 3:r=n.a=m.iv4(f)
p.b=""
if(r!=null&&!C.ilB(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.in7(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alz(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eld(p,t))
t.c9I(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zu,v)},
c9I(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gXo()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.el8(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.el6(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.el9(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.ela(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.elb(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bh.j(0.1),g=B.l(16),f=B.K(A.bh.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fpt,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.B3,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fQF
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Lh,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fAz,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uL,B.d(u,l,l,l,l,l,l,D.fDp,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,K.Lk,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.o(l,B.d(u,l,l,l,l,l,l,D.fG0,l,l,l),A.f,l,l,new B.n(t,l,l,s,l,l,A.n),l,l,l,A.ig,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.m_,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.D(A.Oo,new B.c8(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bn,new B.bz(1,A.bd,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bh.j(0.3)
s=new B.aP(12,12)
s=B.o(l,B.d(o.a,l,l,l,l,l,l,A.W5,l,l,l),A.f,l,l,new B.n(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hn,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.P,new B.bK(A.a9,l,l,s,l),A.ax,B.o(l,B.d(o.b,l,l,l,l,l,l,D.fLQ,l,l,l),A.f,l,l,new B.n(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eyv)
j=B.ca(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajK(B.o(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.n(h,l,f,g,l,l,A.n),l,l,l,D.bEl,A.ez,l,l,1/0),A.b0,A.ie),B.E(C.hnN(m.gXo(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dY("Ask about it",i,new C.elg(m),l,A.bh,l),new E.dY("Invent something new",!i,new C.elh(m),l,A.bh,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dyd[p]
i.push(new E.dY(n,!1,new C.eli(m,n),l,A.bh,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dfF[p]
i.push(new E.dY(r,!1,new C.elj(m,r),l,A.bh,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(16),A.a1),l,A.eX,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kq,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.elk(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a7,l,A.ao,l,A.VV,l,l),1)
h=m.at
v=h&&j?D.bUr:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fC(v,j,new C.ell(m,k),A.bh,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lB(A.bh,A.f8,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.GY.prototype={}
C.vp.prototype={}
C.Xn.prototype={
S(){return new C.aGM(A.J,A.J,A.az,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGM.prototype={
gb_q(){var w,v,u,t=this,s=D.IS[t.cx],r=D.Td[t.cy],q=D.DX[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aBY[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cB(p,0,new C.eAk())},
ga3X(){return D.IS[this.cx].d/this.gb_q()},
gaRl(){return 0.1*(D.IS[this.cx].d/0.9)/D.Td[this.cy].d},
Z(){this.a3()
this.mm()
C.clk("rocket_lander").bG(new C.eAE(this),x.k)},
c9R(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cT.ai()*0.6
w.f=new B.r(0.15+A.cT.ai()*0.7,0.08)
w.r=new B.r((A.cT.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mF(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eAF())
return}w=D.tw[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3X()
v=v.a5(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaRl())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcJ()*6*D.aE1[m.d]))}t=m.r=m.r.a5(0,v.aM(0,d))
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
p=D.DX[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3Y("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JP("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3X()/(D.tw[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.ad(m.ga3X()/(D.tw[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dB(80,"",500,0,0.6,"noise")
B.fO()}}if(m.Q&&m.x>0&&A.o.F(A.h.bh(m.CW*20),2)===0)G.dB(90,"",70,0,0.12,"noise")
m.m(new C.eAG())},
ahB(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fCT,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dY(e[w].a,f.$1(w),new C.eAm(this,g,w),v,h,v))
return new B.D(A.eP,B.x(B.a([u,A.cS,B.c_(A.bI,s,A.br,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bIN(d){var w,v,u,t,s=this,r=null,q=s.ga3X()/(D.tw[s.d].b/9.81*0.28)>=1,p=A.h.U(1/s.gaRl()),o=D.aE1[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.acl,r,r,r),A.T,s.ahB("ENGINE: "+D.IS[s.cx].b,D.IS,new C.eAb(s),new C.eAc(s),A.cP),s.ahB("FUEL TANK: "+D.Td[s.cy].b,D.Td,new C.eAd(s),new C.eAe(s),A.be),s.ahB("LANDING GEAR: "+D.DX[s.db].b,D.DX,new C.eAf(s),new C.eAg(s),A.aH),s.ahB("EXTRAS (tap to add)",D.aBY,new C.eAh(s),new C.eAi(s),A.bh)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h8G)
o=(q?A.be:A.bZ).j(0.14)
w=B.l(12)
v=A.h.ad(s.gb_q(),2)
u=A.h.ad(s.ga3X()/(D.tw[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.o(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.U(D.DX[s.db].d*100)+".",r,r,r,r,r,r,D.fDz,r,r,r),A.f,r,r,new B.n(o,r,r,w,r,r,A.n),r,r,r,A.ig,A.bS,r,r,r))
m.push(A.T)
m.push(new B.bK(A.z,r,r,new E.fC(A.oO,"Launch",new C.eAj(s),A.be,r),r))
return B.as(B.o(r,B.ca(B.x(m,A.E,r,A.e,A.N,0,A.p),A.t,r,A.y,r,r,A.bT,r,r,A.ah),A.f,r,A.m4,new B.n(D.btX,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
b0C(d,e,f,g){var w=null,v=f?A.cP:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mJ(A.iT,B.o(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eA8(e),new C.eA9(e),w,w,w,w,new C.eAa(e))},
b0B(d,e,f){return this.b0C(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cj(new C.eAx(s,D.tw[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tw[w].a:"\ud83d\udd12"
o.push(new E.dY(v,s.d===w,new C.eAy(s,w),r,D.tw[w].c,r))}v=B.a([s.b0B(F.arw,new C.eAz(s),s.y),A.bc,s.b0C(A.v6,new C.eAA(s),s.Q,130),A.bc,s.b0B(A.Qd,new C.eAB(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bc,B.ay(r,B.o(r,D.bYF,A.f,r,r,new B.n(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eAC(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lB(A.cP,A.f8,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.b9,A.i,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bka.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tw[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ap(I.a_W,e,0.25)
d.toString
f.san(new B.a7(A.aY,A.b3,A.x,B.a([F.ais,d],x.O),n,n).aD(0,new B.a4(0,0,i,h)))
a0.aF(new B.a4(0,0,i,h),f)
w=new B.e_()
w.cU(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aG(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e_()
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
a0.ar(g,e)
e=B.by(q.cr(2),A.o_)
g=B.L()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.ar(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jq(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cP.j(0.6).gp(0)
m.y=S.OY
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bx())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bx())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ce(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ce(-14,-10,0,-26))
o.E(new B.bx())
k=B.L()
k.san(F.auo.aD(0,D.fgZ))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.vI,5,k)
k=new B.aG(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bx())
j=B.L()
j.r=A.aA.gp(0)
a0.af(k,j)
i=new B.aG(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bx())
m=B.L()
m.r=A.aA.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAU.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAH()}}
C.aUY.prototype={}
C.a4I.prototype={}
C.bd6.prototype={}
C.VP.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ew(["skin"],x.N),o=new Float32Array(0)
return new C.aFd(w,v,u,t,s,r,q,new B.cy(null,x.A),p,D.Ml,D.Ml,A.az,A.cT,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFd.prototype={
Z(){var w=this
w.a3()
w.mm()
w.as=new C.c7F(w.gciZ())
new C.dQW(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bzJ()},
cj_(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f9(0,B.J(["t","init","data",$.hy0],x.N,x.z))
v.at=!0
v.ay=""
v.aBp()
break
case"parts":v.m(new C.dQw(v))
break
case"pick":v.m(new C.dQx(v,d))
break
case"shot":v.ajv(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dQy(v))
break}},
aBp(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.azP[q.cx]
v=new C.dQz()
u=q.ch
u=B.B(u,B.a3(u).k("ci.E"))
A.d.ff(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.h.U(q.k4),"spin",q.go],t,x.cK)
r=A.W.av(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.f9(0,u)}},
ajv(d){return this.cA4(d)},
cA4(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ajv=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cH.aK(A.a.b_(d,A.a.cm(d,",")+1))
w=6
return B.b(B.axr(B.a([B.cHN(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ajv)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.q).f.T(I.aVx)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ajv,v)},
aAO(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mF(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bh(w)!==A.h.bh(v.p1)){E.XO("kick",0,0.4)
v.V0(170,new C.dQX())}v.p1=w
return},
af3(d){var w,v,u,t,s=this
s.m(new C.dQA(s,d))
if(d==null){s.fy=D.Ml
s.fr=1
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.B(new B.Y(w,new C.dQB(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aBp()
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cCy(t,d)
return},
cCy(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XO("kick",0,0.8)
this.V0(260,new C.dQC())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dB(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.V0(w*70,new C.dQD(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dB(110,"",360,0.7,0.3,"saw")
else E.hcY("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dB(210+e.length*4,"",80,0.6,0.55,"tri")
G.dB(2400,"",20,0,0.3,v)
break
case"muscle":G.dB(70,"",150,1,0.6,"sine")
break
case"vessel":G.dB(300,"",380,0.4,0.22,v)
E.XO("kick",0,0.3)
break
default:E.hcY("organic",2+A.o.F(e.length,6),200,0.4)}},
cHg(d){this.m(new C.dQF(this,d))},
b0V(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aAO(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c_J(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dQt(u,w,d))
v=x.t
C.JP("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.V0(1100,new C.dQu(u))
return}if(d==null){if(u.cy!=null)u.af3(null)
return}u.af3(d)},
c3l(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.c4.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fyW,u,u,u)}else if(d==null||e==null)w=D.fO0
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hh,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,K.Lk,u,u,u)],w),A.E,u,A.e,A.N,0,A.p),1),B.aH(u,u,u,u,D.c0h,u,u,u,new C.dQv(v),u,u,u,u,"Back to the whole body",A.ch)],w),A.E,u,A.e,A.i,0,u,u)}return B.o(u,w,A.f,u,u,new B.n(I.Z3,u,s,t,u,u,A.n),u,u,u,u,A.an_,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dJS.h(0,g)
i.aBp()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dqc
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aAO(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,I.oR,h,h,h,new C.dQM(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BX(h,A.pS,p))}p=i.ax
o=p?0:1
q.push(new B.ds(p,B.xx(B.o(A.z,B.x(D.dzO,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b8q,h,h,D.hBh,h,h,h,h,h),A.b0,A.n0,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.amH,i.c3l(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dhi[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dY(l,o,new C.dQN(i,n),n.c,A.c4,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.dY(k,k===i.cy,new C.dQO(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iU(A.bZ,""+A.h.U(o)+" beats/min","Heart rate",180,40,new C.dQP(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.azP[j],i.cx===j,new C.dQQ(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dY("Spin",o,new C.dQR(i),D.aqv,A.aH,h),new E.fC(A.oJ,"Reset view",new C.dQS(i),A.c,h),new E.dY(l,m,new C.dQT(i),A.Ic,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dY("Heartbeat sound",i.ok,new C.dQU(i),A.oN,A.bZ,h))
p.push(new E.fd(v,h,h))
return E.lB(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aNR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aNS.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzI()}}
C.c7F.prototype={
kX(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hEu
$.hEu=v+1
u="ngmy-body-viewer-"+v
$.xt()
$.q1().pm(u,new C.c7G(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c7H(t),!1,x.gA)
t.b=u},
f9(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RD(w.contentWindow)
if(w!=null)J.ajy(w,e,"*")}}catch(v){}}}
C.yF.prototype={}
C.D4.prototype={}
C.nH.prototype={}
C.bdS.prototype={}
C.VW.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aFf(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFf.prototype={
Z(){var w=this
w.a3()
w.mm()
w.ae1()
$.aU.x1$.push(new C.dSB(w))},
ae1(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ae1=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ae1)
case 6:q=e.rC("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dSf(s,r))
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
return B.i($async$ae1,v)},
aen(d){return this.c7o(d)},
c7o(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aen=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.az(),$async$aen)
case 6:r=f
q=s.cx
p=B.a3(q).k("ka<ci.E,q>")
q=B.B(new B.ka(q,new C.dSi(),p),p.k("M.E"))
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
return B.i($async$aen,v)},
azt(d,e,f,g){var w="c"+this.y++,v=new C.D4(w,e,f,g)
this.d.n(0,w,v)
return v},
mV(d,e,f){return this.azt(0,e,f,0)},
adn(d,e){var w
if(D.Ao.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.r(-36,w))},
uo(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aVx(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fa$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dn(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ee(m,D.d_H[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uo(p,0)&&n.uo(p,1)
break
case"or":p=q.a
o=n.uo(p,0)||n.uo(p,1)
break
case"xor":p=q.a
o=n.uo(p,0)!==n.uo(p,1)
break
case"nand":p=q.a
o=!(n.uo(p,0)&&n.uo(p,1))
break
case"nor":p=q.a
o=!(n.uo(p,0)||n.uo(p,1))
break
case"not":o=!n.uo(q.a,0)
break
default:o=n.uo(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bTc(){return this.aVx(null)},
mF(d){var w,v,u,t,s,r,q,p,o,n=this
n.bTc()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a3(w).k("b8<2>")).gae(0),v=new B.eL(w,new C.dSC()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fa$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fa$)
o=s+1
G.dB(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
azu(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mn(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
avD(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dSd(w,d))
return}w.m(new C.dSe(w,d))},
cCQ(d){this.m(new C.dSj(this,d,$.bHM()[d]))},
ccb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bHM()[a0]
v=d.d
u=B.a3(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.B(new B.Y(new B.b8(v,u),new C.dS8(),t),s)
A.d.b0(r,new C.dS9())
q=B.B(new B.Y(new B.b8(v,u),new C.dSa(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dSb(d,w))
return}u=d.r
p=B.dK(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dB(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aVx(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.li(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dSc(d,o,a0))},
aAk(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b8<2>")
s=B.B(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("dt<1>")
s=new B.dt(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
clq(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b8<2>")
r=B.B(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("dt<1>")
r=new B.dt(r,q)
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
c3e(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Ao.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adn(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adn(p,o)
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
ccd(d){var w,v,u,t=this,s=t.aAk(d)
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
G.dB(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dSk())
return}u=t.bRW(d)
if(u!=null)t.m(new C.dSl(t,u))
else t.m(new C.dSm(t))},
ayg(d){return this.c6m(d)},
c6m(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ayg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAk(d)
if(s==null){w=1
break}B.jo()
t.m(new C.dSh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ayg,v)},
bEB(d){if(this.x.A(0,A.az))return
this.m(new C.dS7(this,d,A.cT))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bHM()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.oN:T.ts,A.ab,h,h,h,21),h,h,h,new C.dSv(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cs.j(0.14)
r=B.K(A.cs.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fy4,h,h,h),B.d(w.b,h,h,h,h,h,h,A.Wj,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.ln,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.be:A.eV,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.o(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bJ(D.fZG,h,i.gcca(),B.bp(A.cs,h,h,h,h,h,h,h,h,h,h,A.ch))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.n(s,h,r,t,h,h,A.n),h,h,h,Q.Ow,D.bF4,h,h,1/0))}u.push(B.E(B.cj(new C.dSw(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.o(h,B.d(D.Ao.h(0,r).a+": "+D.Ao.h(0,r).e,h,h,h,h,h,h,A.u3,h,h,h),A.f,h,h,new B.n(s,h,h,t,h,h,A.n),h,h,h,A.a16,A.bS,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.Ao.gdQ(D.Ao),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.ay(h,B.o(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,B.d(p.a,h,h,h,h,h,h,D.aXy,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.n(n,h,new B.bH(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.f2,X.Ot,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dSx(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.duP[l]
s.push(new E.fC(A.Qe,k.b,new C.dSy(i,k),A.cs,h))}s.push(new E.fC(I.wW,"Clear",new C.dSz(i),A.bZ,h))
r=B.a([],g)
for(j=0;q=$.bHM(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.lS
o=i.ay
n=i.cx.q(0,j)?A.be:A.bt
r.push(new E.dY(q.a,o===j,new C.dSA(i,j),p,n,h))}return E.lB(A.cs,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.be9.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.agI.gp(0)
a5.aF(new B.a4(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.r(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.adn(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aG(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kp(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=A.oA
a5.af(f,n)}n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=3.2
n.d=A.bG
n.r=(h?A.ex:A.by).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.K1)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.S().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kp(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dn(q,q.r,q.e);a3.C();)this.ccc(a5,a3.d)},
ccc(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Ao.h(0,f)
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
d.ar(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aD(0,B.bW(a0.c,52)))
d.O(q,52,p)}q=s.eD(A.cM)
p=B.L()
o=e.c
p.r=B.ap(o,A.w,0.65).gp(0)
d.ar(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.w,u?0.2:0.45)
m.toString
q.san(new B.a7(A.aY,A.b3,A.x,B.a([p,m],x.O),g,g).aD(0,t))
d.ar(s,q)
q=B.L()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.ar(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oL:D.bUZ}else l=e.b
k=C.heO(B.li(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aJ(0,new B.r(p/2,q.gba(q)/2)))
j=C.heO(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a5(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.heO(f,9,u?A.ex:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1A(d,w.adn(a0,h),o)
this.b1A(d,a0.c.a5(0,D.K1),o)},
b1A(d,e,f){var w
$.S()
w=B.L()
w.r=D.agI.gp(0)
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
C.aNW.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAE.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzN()}}
C.Om.prototype={
S(){return new C.aFw(B.mR(0,null,null))}}
C.Lk.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B3.prototype={}
C.aFw.prototype={
Z(){this.a3()
B.bO(A.qB,C.iu8(),x.H)},
cci(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dYN(w,e))},
c5a(){var w=this
w.e.t()
w.e=B.mR(w.f,null,null)
w.m(new C.dYM(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.O(d).ax.a===A.dm?A.c:A.c6
return B.oS(t,B.c5(v,s,t?new C.buy(w.e,w.gcch(w),new C.dYO(d),v):new C.aJQ(u,new B.bl(u.b,x.W)),v,!1,!1,v,!1),new C.dYP(w,u),x.K)}}
C.bwb.prototype={}
C.buy.prototype={
b1B(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bA:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(A.a1v,B.x(B.a([v,A.bF,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.dm,q=B.aE(d,A.dD,x.w).w,p=B.aH(s,s,s,s,B.X(A.eK,r?A.bA:A.ab,s,s,s,20),s,s,D.hBK,t.e,s,s,s,s,s,s)
if(r)w=new B.n(A.c,s,s,B.l(14),A.IV,s,A.n)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.l(14)
w=new B.n(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.J,8)],x.V),new B.a7(A.ay,A.aC,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bA:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.o(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hBP,s,A.anv,s,s,s),s,s,s),1),A.tW],u),A.l,s,A.e,A.i,0,s,s)
v=t.b1B("STUDIOS","Play, make things, and keep what you make",r)
$.bHN()
return B.bm(!1,B.x(B.a([B.E(B.w5(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nE(new B.P(8,q.r.b+6,8,4),new B.m3(w,s),s),new B.m3(v,s),new B.nE(A.hZ,B.Q2(new B.oV(new C.fay(d),9,!0,!0,!0,0,B.tm(),s),D.aVm),s),new B.m3(t.b1B("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nE(D.bFd,B.Q2(new B.oV(new C.faz(t),6,!0,!0,!0,0,B.tm(),s),D.aVm),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agp.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.O(d).ax.a===A.dm){w=B.l(20)
v=(A.o.aq(o.c,3)&1)===0
u=B.a7F(v?A.aH:A.bh,20)
v=v?A.aH:A.bh
return B.aF(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eE(B.x(B.a([new B.VU(v,44,m.c,n,n),A.P,B.d(m.a,n,2,A.a2,n,n,n,D.fEh,A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,D.fH7,A.K,n,n)],x.p),A.l,n,A.b9,A.i,0,A.p),n,u,n,A.CR,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.l(20)
v=B.l(20)
u=B.ap(K.md,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ak0],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.G,l.j(0.5),A.J,12)],r)
return B.aF(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eE(B.x(B.a([B.o(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.n(n,n,n,n,r,new B.a7(A.ay,A.aC,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.P,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b9,A.i,0,A.p),n,new B.n(n,n,s,v,q,new B.a7(A.ay,A.aC,A.x,u,n,n),A.n),n,A.CR,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afg.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.O(d).ax.a===A.dm,h=(A.o.aq(this.c,3)&1)===0?A.aH:A.bh,g=B.l(20)
if(i)w=B.a7F(h,20)
else{w=B.l(20)
v=B.ap(K.md,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ak0],x.O)
v=new B.n(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,12)],x.V),new B.a7(A.ay,A.aC,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.VV(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.G,A.w.j(0.45),A.a9G,0)],s)
u.push(B.o(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.n(l,l,l,new B.be(o,o,o,o),m,new B.a7(A.a5,A.a9,A.x,n,l,l),A.n),l,17,l,new B.P(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bA
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aF(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eE(B.x(B.a([new B.a5(58,l,u,l),A.T,t,A.ax,B.X(A.Dx,i?B.VV(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b9,A.i,0,A.p),l,w,l,A.CR,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rj.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bN(new B.n(h,j,j,B.l(22),j,j,A.n),A.bk,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.JZ,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.n(j,j,j,j,j,new B.a7(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.dAQ,j),A.n),A.bk,j,j),0,0,0),B.ao(j,new B.bN(new B.n(j,j,j,j,j,new B.a7(A.aY,A.b3,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bk,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b5(j,j,j,new C.bvz(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.o(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.n(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fAp,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.KR)
p.push(B.o(j,j,A.f,j,j,new B.n(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hc,B.A(B.a([s,A.eu,B.E(B.x(p,A.E,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.ds(!0,B.eb(j,A.w.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bS(0,new B.ds(!0,new B.bN(new B.n(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bk,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bN(new B.n(j,j,j,u,r,j,A.n),A.bk,B.bv(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bvz.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jq(0,0.35)
t=B.bX(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aD(0,t))
d.aF(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.bv4.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.brL,D.aj4],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kF,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.n(w,w,s,v,r,new B.a7(A.ay,A.aC,A.x,u,w,w),A.n),A.bk,B.bv(q,B.b5(B.as(B.X(A.jL,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcP(p,w),A.az),A.aq),w),w)}}
C.bcP.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.ek(A.J)
$.S()
t=B.L()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aE(d){return!1}}
C.aJQ.prototype={
S(){return new C.aJR(new B.cy(null,x.A),null,null)}}
C.aJR.prototype={
guO(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,D.bCt,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_X(){var w,v=this,u=v.e
if(u===$){w=B.bo(null,A.h2,null,1,null,v)
w.f1(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gazv(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gccf(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaYP(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gaZC(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbay(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a3()
var w=this.guO()
w.dm()
w.dV$.I(0,this.gcCz())},
cCA(){var w,v,u,t,s,r,q,p=this,o=p.guO().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gazv().a){case 0:w=D.nV
break
case 1:w=D.vr
break
case 2:w=D.a66
break
case 3:w=D.nV
break
case 4:w=D.dmR
break
case 5:w=D.vr
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aen)r=0.09
else r=s===D.aeo?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dB(260+90*v,"",260,1.6,0.18,"tri")
u=D.cdB[v]
E.mp("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JP("bell",D.cms,1400,0.35)}}p.ax=o},
t(){this.guO().t()
this.ga_X().t()
this.bBD()},
afu(){var w=this
w.guO().d1O(0,B.dx(0,0,0,A.h.U(11e3/w.Q),0,0))
w.m(new C.fae(w))},
cnw(){this.guO().bQ(0)
this.m(new C.fad(this))},
aft(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aft=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZC(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.at(new B.bb(q,A.b7,A.aP),$.aw()))}m=B.a([],m)
for(t=u.gbay(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.at(new B.bb(p,A.b7,A.aP),$.aw()))}o=B.B(u.gaYP(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(K.md,null,new C.fac(u,l,m,o),t,!0,!0,!0,A.lX,!1,!1,x.H),$async$aft)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.aw()
n.R$=0}return B.h(null,v)}})
return B.i($async$aft,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gazv(),f=i.a.c,e=f.b,d=i.gccf(),a0=new C.B3(g,e,f.c,d,i.gaYP(),i.gaZC(),i.gbay())
f=B.ap(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.oN:T.ts,A.ab,h,h,h,21),h,h,h,new C.fam(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.c3Z,h,h,h,i.gccg(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,I.oR,h,h,h,new C.fan(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_X(),new C.fao(i,a0),h),B.cj(new C.fap(i,a0))],g)
u=i.as
t=u?i.gcnv():i.gccj()
u=u?D.bUc:A.tp
s=B.ap(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ch),B.E(B.c6(i.guO(),new C.faq(i,a1,a0),h),1),B.aH(h,h,h,h,D.c07,h,h,h,new C.far(i),h,h,h,h,"Replay",A.ch)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.h.ad(s,1)
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iU(r,u+"x","Speed",2.5,0.4,new C.fas(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dxN[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dY(p.b,o===p.a,new C.fat(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.ce0[q]
o=i.w
if(o===$){o=B.B(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.B(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.B(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aT
o=i.w
if(o===$){o=B.B(i.a.c.d,r)
i.w=o}j=new B.ax(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.ay(h,B.o(h,h,A.f,h,h,new B.n(h,h,new B.bH(j,j,j,j),h,h,new B.a7(A.ay,A.aC,A.x,n,h,h),A.a6),h,l,h,I.amw,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fau(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lB(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e6(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.N,0,A.p))},
bDM(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nV[r]
p=A.h.D((1-A.ed.az(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.nV[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.nV[r]
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
i=D.nV[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nV[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nV[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kK(q,new B.iW(n,f,A.aY,!0,f,new C.Rj(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nV[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nV[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mC(new C.bu9(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bUM(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vr[r]
p=A.qz.az(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vr[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vr[r]
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
g=new C.Rj(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fE(3.141592653589793)
k=new B.iW(k,f,A.z,!0,f,new C.bv4(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kK(q,new B.iW(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cHK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a66[w]
l.push(A.ck.az(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b5(n,n,n,new C.bxF(d.d,l,D.aBx,m,C.bux(e,0.4,0.62),f,C.bux(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hfl(g,w)
q=D.aBx[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kK(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hfl(g,w)
r=D.a66[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kK(A.h.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.Wv,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bK4(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ck.az(0,C.bux(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dO(B.b5(f,f,f,new C.btz(A.d.gH(a1),C.bux(a3,0,0.2),a4,f),new B.au(a5*0.95,70)),D.esH),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dI.az(0,A.h.D((o-0.7)/0.3,0,1))
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
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ck(A.z,f,f,new B.kK(k*(0.45+0.55*o),B.dO(new B.iW(l,f,A.z,!0,f,new C.Rj(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new C.fa5())
A.d.u(a0,new B.N(w,new C.fa6(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cce(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vr[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.nl.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vr[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aDF[q]
k=B.dr()
k.n6(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k7(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vr[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ck(A.z,e,e,new B.kK(m,B.dO(new B.iW(k,e,A.z,!0,e,new C.Rj(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vr[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ck(A.z,e,e,B.dO(new B.mC(new C.bdv(w,f,q,e),e,new B.au(r,212),e,e),new B.r(0,D.aDF[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bGI(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.esL],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nV[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.ck.az(0,p)
q=D.aDQ[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nV[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.nV[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n6(l*h+D.drd[r]*o)
f.fE(l*0.9)
h=0.55+0.45*o
f.k7(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ck(A.z,a3,a3,new B.kK(g,B.dO(new B.iW(f,a3,A.z,!0,a3,new C.Rj(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nV[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDQ[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ck(A.z,a3,a3,B.dO(new B.mC(new C.btB(A.d.gH(w),a2,a3),a3,new B.au(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bu9.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.by(u,A.hG)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=A.oA
d.ar(q,t)
t=B.by(u,A.hG)
q=B.L()
q.r=A.c.j(s).gp(0)
d.ar(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.btz.prototype={
a4(d,e){var w,v,u=this.c,t=B.bX(e.ek(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=S.OY
d.c1(t,u)
u=B.L()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c1(t,u)
u=t.cr(-14)
v=B.L()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.c1(u,v)},
aE(d){return!0}}
C.bdv.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ek(A.J),h=this.c,g=A.ck.az(0,h)
$.S()
w=B.L()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e_()
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
C.btB.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ek(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bX(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aE(d){return d.c!==this.c}}
C.bxF.prototype={
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
d=C.hfl(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.n4
d1.c1(new B.a4(a1,l,a1+k,j),a3)
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
a7=new B.aG(a2,A.aj,c1,c1,a5)
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
b1=new B.aG(a2,A.aj,c1,c1,a5)
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
b0=B.by(new B.a4(b7,a6,b7+s,a9),A.hG)
$.S()
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.ar(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.i2(a4),$.mf()[1],!0)
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.san(new B.a7(A.aY,A.b3,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aD(0,b9))
d1.aF(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aPD.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.a1Q.prototype={
a7(){return"_Role."+this.b}}
C.qx.prototype={}
C.re.prototype={}
C.D8.prototype={}
C.a_P.prototype={}
C.agd.prototype={}
C.a22.prototype={
ga_(d){return this.d}}
C.Dj.prototype={}
C.ad6.prototype={}
C.adn.prototype={}
C.afj.prototype={}
C.bk7.prototype={
a45(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dB(d,"",e,g,h,f)},
bbF(d,e,f){return this.a45(d,e,f,0,0.55)},
aEa(d,e,f,g){return this.a45(d,e,f,0,g)},
bbG(d,e,f,g){return this.a45(d,e,f,g,0.55)},
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
alH(d,e,f,g){var w="n"+this.ay++,v=new C.re(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tl(d,e,f){return this.alH(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.dsJ(e))
A.d.bq(w.c,new C.dsK(e))
w.b3()},
bfy(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n8.h(0,v.b).c===D.y4)return!1
w=this.b
if(A.d.aU(w,new C.dsG(d,e)))return!1
w.push(new C.D8(d,e))
this.b3()
return!0},
c40(d){var w
if(d.b==="beat")return D.cmC[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aE6[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dj(u,t,j.ax,90))
w.push(new C.Dj(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a22(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bbF(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a22(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Dj(u,t,j.ax,120))
j.aEa(120,200,"noise",0.5)
j.bbF(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dj(u,t,j.ax,230))
w.push(new C.Dj(u,t,j.ax+160,160))
w.push(new C.Dj(u,t,j.ax+320,100))
j.bbG(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ad6(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bbG(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adn(u,u.a5(0,new B.r(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a45(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fO()
j.a45(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afj(u,D.aDs[v],t,j.ax))
j.aEa(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aEa(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ciI[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cxE(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eL(w,new C.dsH(d));v.C();)j.aCE(w.gP(0),j.ax+D.cv5[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cMq[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eL(w,new C.dsI(d));v.C();)j.aCE(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xJ(w,0,v-700)},
cxE(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_P(e,"~"+d))},
aCE(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agd(d.a,v,e,w))
u.push(new C.a_P(w,v))},
a7P(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b8<2>")
w=B.B(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHM(r)
u.n(0,r,o.ax+o.c40(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.B(new B.Y(w,new C.dsL(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.dsM(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.b_(u,1)
for(u=A.d.gae(v),r=new B.eL(u,new C.dsN(p));r.C();)o.aCE(u.gP(0),o.ax)}else o.aHM(u)}}A.d.bq(o.d,new C.dsO(o))
A.d.bq(o.e,new C.dsP(o))
A.d.bq(o.f,new C.dsQ(o))
A.d.bq(o.w,new C.dsR(o))
A.d.bq(o.x,new C.dsS(o))
A.d.bq(o.r,new C.dsT(o))
o.b3()},
vR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.W.av(B.J(["nodes",m,"edges",v],u,x.ew),null)},
UE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.W.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.w(J.t(v,"k"))
if(!D.n8.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.re(t,u,new B.r(B.dF(J.t(v,"x"))*k.cy.a,B.dF(J.t(v,"y"))*k.cy.b),A.h.M(B.dF(J.t(v,"p")))))
s=B.cc(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D8(q,p))}k.b3()
return!0}catch(l){return!1}},
cXf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.re(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bfy(w[m.a],w[m.b])}},
ga_(d){return this.cy}}
C.GJ.prototype={}
C.Xm.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGL(new C.bk7(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cT,A.L,A.az,$.aw()),A.bC,A.J,A.J,A.Z,null,null)}}
C.aGL.prototype={
adV(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adV=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adV)
case 6:q=n.k3(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ezF(s))
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
return B.i($async$adV,v)},
aaQ(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaQ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ezu(s))
u=3
w=6
return B.b(B.az(),$async$aaQ)
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
return B.i($async$aaQ,v)},
bQ3(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cB(0,0,new C.ezw())+"|"+A.d.cB(o,0,new C.ezx())
if(v===p.ch)return p.CW
u=new C.ezA()
t=x.s
s=B.a([],t)
r=new C.ezB(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eL(n,new C.ezy());w.C();){q=n.gP(0)
if(!A.d.aU(o,new C.ezz(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cT(s,0,B.dA(5,"count",x.S),x.N).dq(0)},
Z(){var w,v=this
v.a3()
v.adV()
v.d.db=v.ay
w=v.q7(new C.eA4(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.V$=$.aw()
v.R$=0
w.bAF()},
adr(d){return this.c3r(d)},
c3r(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adr=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$adr)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.UE(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b_3(A.d.gH(D.aCU))
if(s.c!=null)s.m(new C.ezE())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adr,v)},
b_3(d){this.d.cXf(0,d.c,d.d)
this.ER()},
ER(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lM,new C.ezq(this))},
azw(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b8<2>")
s=B.B(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("dt<1>")
s=new B.dt(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
clr(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b8<2>")
r=B.B(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("dt<1>")
r=new B.dt(r,q)
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
c3f(d){var w,v,u,t,s,r,q,p,o,n
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
ccm(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hEv(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cFo(d){var w,v,u,t,s,r,q=this,p=q.azw(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHM(p)
return}if(q.r)return
t=D.n8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rr)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.ER()
return}if(q.r)return
r=q.ccm(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b3()
q.ER()}},
cmN(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.clr(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azw(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
cmO(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b4x(){var w,v,u=this
if(u.z!=null){w=u.c3f(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bfy(v,w)}else v=!1
if(v){B.jW()
u.ER()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.ER()
u.x=null}},
ae7(d){return this.c6n(d)},
c6n(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azw(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jo()
p=t.c
p.toString
w=3
return B.b(B.bU(K.md,null,new C.ezH(q),p,!0,!0,!1,A.lX,!1,!1,x.y),$async$ae7)
case 3:if(f===!0){r.W(0,s)
t.ER()}case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
cck(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tl(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.ER()},
ai8(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ai8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(K.md,null,new C.ezJ(),s,!0,!0,!0,A.lX,!1,!1,x.es),$async$ai8)
case 2:t=e
if(t!=null)u.b_3(t)
return B.h(null,v)}})
return B.i($async$ai8,v)},
afv(d){var w=0,v=B.j(x.H),u=this,t
var $async$afv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ezt(),t,null,!0,!0,x.y),$async$afv)
case 2:if(f===!0){u.d.a8(0)
u.ER()}return B.h(null,v)}})
return B.i($async$afv,v)},
B(d){var w=this,v=null,u=B.a([B.ajK(w.r?new B.bK(A.a5,v,v,new B.D(A.Hs,B.ht(D.bYW,D.fSg,new C.eA2(w),v),v),v):w.ccn(),A.b0,A.iQ),B.E(B.cj(new C.eA3(w)),1)],x.p)
if(!w.r)u.push(w.cA7())
return B.c5(v,A.c6,B.bm(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bLK(){var w=null,v=new C.ezv(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bS(0,B.eb(B.as(B.o(w,B.ca(B.x(B.a([D.h2O,A.ax,D.haA,A.aB,v.$4(A.oK,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A.Dt,A.cs,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kc,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.PL,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h9S,new B.bK(A.a9,w,w,B.bP(!1,D.h_T,w,w,!0,w,w,w,this.gbLD(),w,w),w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Yf,new B.n(K.md,w,s,t,w,w,A.n),w,w,w,A.fu,A.anN,w,w,w),w,w,w),u,!0),0,0,0)},
ccn(){var w=this,v=null,u=B.aH(v,v,v,v,A4.n6,v,v,v,new C.ezP(w),v,v,v,v,v,v),t=w.aag(A.Dj,"How it works",new C.ezQ(w),!0),s=w.ay?A.oN:T.ts
return new B.D(D.bJq,B.A(B.a([u,D.bL6,t,w.aag(s,"Sound",new C.ezR(w),!0),w.aag(A.e9,"Ideas",w.gcqz(),!0),w.aag(I.wW,"Clear",w.gccl(w),!0),w.aQD(A.he,"Show",new C.ezS(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQD(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(A.wM,B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hd(new B.D(new B.P(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aag(d,e,f,g){return this.aQD(d,e,f,g,!1)},
cA7(){var w=null,v=new C.ezL(this),u=A.c.j(0.08)
return B.o(w,B.ca(B.A(B.a([v.$2("START",D.y4),v.$2("CHANGE",D.FE),v.$2("REACT",D.rr)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM),A.f,w,w,new B.n(K.Cc,w,new B.bH(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bEn,w,w,w)},
cA8(d){var w,v,u,t,s=null,r=D.n8.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f2,B.ay(s,B.o(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a2,s,s,s,D.aXy,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.n(s,s,t,w,s,new B.a7(A.aY,A.b3,A.x,u,s,s),A.n),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ezK(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bk8.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
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
b7.aF(new B.a4(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
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
d=new B.aG(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kp(i+a0,j,g-a0,h,g,h)
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
h=B.qZ(new B.r(i,j),new B.r(g,h))
f.san(new B.a7(A.a5,A.a9,A.x,e,b3,b3).aD(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hEv(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=A.oA
b7.O(a5,8,i)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.K1)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.S().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kp(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
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
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kJ(p,j,A.e6.az(0,v))
i.toString
j=B.kJ(p,j,A.e6.az(0,A.h.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.qZ(j,i)
p.san(new B.a7(A.a5,A.a9,A.x,g,b3,b3).aD(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kY
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kY
b7.O(p,11,j)
j=k.a
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bT(A.Bu,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aD(0,B.bW(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bk9(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dn(o,o.r,o.e);b4.C();)b2.cmj(b7,b4.d,b5)
b6.restore()},
cmj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n8.h(0,i)
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
d.ar(s,r)
if(v>0){s=t.cr(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.CW
d.ar(s,r)}s=t.eD(A.cM)
r=B.L()
q=h.d
r.r=B.ap(q,A.w,0.65).gp(0)
d.ar(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.w,0.35)
p.toString
r.san(new B.a7(A.aY,A.b3,A.x,B.a([s,p],x.O),j,j).aD(0,u))
d.ar(t,r)
r=B.L()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.ar(t,r)
r=h.b
p=e.c
o=C.bk9(B.li(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aJ(0,new B.r(s/2,r.gba(r)/2)))
n=C.bk9(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a5(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aDs[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rr){s=e.c.a5(0,new B.r(0,62))
r=B.L()
r.r=D.aE6[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bk9(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bk9(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.y4)k.b5l(d,e.c.aJ(0,D.K1),q)
k.b5l(d,e.c.a5(0,D.K1),q)},
b5l(d,e,f){var w
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
C.aOM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.ej.prototype={}
C.tZ.prototype={
asC(d,e,f,g){var w=this
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
C.abM.prototype={}
C.acT.prototype={}
C.a5R.prototype={
bhq(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h4()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abM(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c8x(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQU())},
alH(d,e,f,g){var w="p"+this.c++,v=new C.tZ(w,e,f,g)
v.asC(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bR4(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cOc(d,e,f,g,h){return A.d.aU(this.b,new C.bR_(e,f,g,h))},
amw(d,e,f,g){var w
if(d===f||this.cOc(0,d,e,f,g))return null
w=new C.acT(d,e,f,g)
this.b.push(w)
return w},
aDb(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Aq(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
apj(d){return this.Mz(d)&&!d.x&&d.cx>this.Aq(d)},
b9J(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mz(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ccH(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Ap.h(0,v)
if(w!=null)return w.a
return 100},
vR(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c8x(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bR5(a2),t).cB(0,0,new C.bR6(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bR8(o)
m=B.a([],x.t)
l=new C.bR7(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bRa(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.I)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b9F(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Aq(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b9F(e,d,w,!0)
a2.bSp(a4)},
b9F(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQW(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQV(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQY(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c0(b7,0,!1,b3)
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
if(h)B.bi(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c0(b7,0,!1,b3)
a0=B.c0(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9J(t)*(1+t.CW))
a4=b2.aDb(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ccH(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bVM(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
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
bVM(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c0(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.I)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.I)(a0),++n){m=a0[n]
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
bSp(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aDb(o)/a1.b9J(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Aq(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bKn(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bhq(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uw(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uw(o,"The "+$.qH().h(0,n).b+" got "+A.h.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the "+$.qH().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uw(o,"The regulator had to turn "+A.h.ad(o.cy,1)+" V into heat while "+A.h.U(i*1000)+" mA flowed. That is "+A.h.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Ap.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qH().h(0,n).b
l=f.b
l=l===A.h.fK(l)?""+A.h.U(l):B.w(l)
g=f.c
g=g===A.h.fK(g)?""+A.h.U(g):B.w(g)
a1.uw(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.flz.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uw(o,"The bulb got "+A.h.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uw(o,"The LED had "+A.h.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uw(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uw(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uw(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uw(o,"The capacitor was charged to "+A.h.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bKn(d){return A.d.aU(this.a,new C.bQT(d))},
uw(d,e){var w
d.x=!0
d.ay=e
this.bhq(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bm4(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJy(d){var w=d.b
return D.aUh.q(0,w)||D.Ap.am(0,w)||w==="buck"||w==="regulator"},
biV(d){var w,v=!0
if(!this.Mz(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Ap.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VU(d,e){var w=this.b
return new B.Y(w,new C.bRc(d,e),B.U(w).k("Y<1>")).gJ(0)},
rA(d){var w,v
if(d.x)return!1
w=d.b
if(D.Ap.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qH().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJy(d)||i.rA(d))return null
w=i.VU(d,0)
v=i.VU(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.B(new B.Y(u,i.gcWP(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.fK(r)?""+A.h.U(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Ap.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MM("battery"),o=J.aT(t.a),t=new B.eL(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.VU(n,0)+i.VU(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MM("switch"),o=J.aT(t.a),t=new B.eL(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qH().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Aq(k))return"The "+$.qH().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.ad(k.cx,2)+" amps, but it can only give about "+A.h.ad(i.Aq(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aU(u,new C.bR0(i,d))
h=q.b
h=h===A.h.fK(h)?""+A.h.U(h):B.w(h)
u=A.h.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MM(d){var w=this.a
return new B.Y(w,new C.bR3(d),B.U(w).k("Y<1>"))},
aJ9(d){return this.MM(d).aU(0,new C.bR2(0.35))},
qi(d,e){return A.d.aU(this.a,new C.bR1(e))}}
C.akm.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.nu.gp(0)
c2.aF(new B.a4(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.O(new B.r(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mv.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mv.am(0,j.b)?(j.ch-1)*38:0
b6.cKU(c2,new B.r(m*b8+l*(42+k),n*b9),new B.r(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hSl(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.L()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bG
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=F.N9.j(A.h.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.CW
c2.O(new B.r(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bs(n.save())
n.translate(k,j)
i=A.h.D(A.nl.az(0,A.h.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cnk(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Aq(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aG(a1,A.aj,b7,b7,a2)
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
a1=new B.aG(a1,A.aj,b7,b7,a2)
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
b0=new B.iD(new B.ev("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.ji(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.ep()
b0.a4(c2,new B.r(h+-3,g+-8))}if(!e.x)h=(D.aUh.q(0,i)||D.Ap.am(0,i)||i==="buck"||i==="regulator")&&!w.rA(e)&&w.VU(e,0)+w.VU(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.at.gp(0)
c2.O(new B.r(k,j),10,h)
b0=new B.iD(new B.ev("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.ji(1),b7,b7,b7,b7,A.c2,b7,A.cx)
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
k.r=F.nu.gp(0)
c2.O(b0,7,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.c=2.4
k.r=(j&&w.biV(e)?A.bZ:A.ab).gp(0)
c2.O(b0,6,k)
if(j&&w.biV(e)){b0=new B.iD(new B.ev("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.bZ,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.ji(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.ep()
b0.a4(c2,new B.r(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.I)(r),++p){b2=r[p]
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
c2.O(b3,4.5*b4+1,j)}if(A.d.aU(s,new C.bLf())){b5=A.d.cB(s,0,new C.bLg())
$.S()
b9=B.L()
b9.r=D.biV.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aF(new B.a4(0,0,c0,c1),b9)
b0=B.fD(b7,A.cx,b7,b7,b7,D.fwL,A.a7,A.c1,b7,A.dK,A.c2)
b0.nC(b8-24)
b0.a4(c2,new B.r(12,10))}},
qY(d,e,f,g,h){var w=null,v=B.fD(w,A.cx,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a7,A.c1,w,A.dK,A.c2)
v.ep()
v.a4(d,f)},
cKU(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.S().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hKk(a0,a1,a2)
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
if(q){n=new B.am8(new B.uR(B.BN(e),!1,B.a([],x.R))).gH(0)
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
f=t[u].W8(g)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
Q0(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.aY:A.a5
u=g?A.b3:A.a9
t=B.ap(e,A.w,0.3)
t.toString
w.san(new B.a7(v,u,A.x,B.a([e,f,e,t],x.O),A.IT,null).aD(0,d))
return w},
ayG(d,e,f){return this.Q0(d,e,f,!0)},
c86(d,e){return this.Q0(d,A.bj,A.hY,e)},
aji(d,e){var w,v,u
$.S()
w=B.L()
w.san(D.aSr.aD(0,B.bW(e,4.2)))
d.O(e,4.2,w)
w=e.a5(0,D.evk)
v=e.a5(0,D.evt)
u=B.L()
u.r=A.cR.gp(0)
u.c=1.2
d.ah(w,v,u)},
cnk(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.san(D.c96.aD(0,D.fhN))
c0.c=3.4
c0.d=A.bG
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=A.oA
c1.c1(D.fhB,w)
if(c3){w=B.by(D.fhL,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.ar(w,v)}u=C.hoX(c2)
c1.ah(new B.r(-u,0),D.ewW,c0)
c1.ah(D.eu_,new B.r(u,0),c0)
t=c2.x
w=c2.b
s=D.mv.am(0,w)&&c2.ch!==1
if(s){J.bs(c1.c.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.bH7(c1,c2)
break
case"solar":r=B.by(D.fhE,A.jy)
c1.ar(r,b3.Q0(new B.a4(r.a,r.b,r.c,r.d),A.d_,A.bO,!1))
b9=B.L()
w=B.ap(D.bmW,A.d9,0.25+0.55*c2.f)
w.toString
v=B.ap(D.bwD,A.mc,0.3+0.4*c2.f)
v.toString
b9.san(new B.a7(A.ay,A.aC,A.x,B.a([w,v],x.O),b4,b4).aD(0,D.aaB))
c1.aF(D.aaB,b9)
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
c1.ah(new B.r(b9,-18),new B.r(b9,18),w)}b9=new B.aG($.S().r,A.aj,b4,b4,B.a([],x.v))
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
c1.O(D.eu3,4+4*w,b9)
break
case"crank":o=B.by(D.fhp,A.fR)
c1.ar(o,b3.ayG(new B.a4(o.a,o.b,o.c,o.d),A.by,A.bP))
b9=B.L()
b9.san(D.aSs.aD(0,B.bW(A.J,12)))
c1.O(A.J,12,b9)
n=new B.r(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cA.gp(0)
b9.c=5
b9.d=A.bG
c1.ah(A.J,n,b9)
b9=B.L()
b9.san(D.eGr.aD(0,B.bW(n,7)))
c1.O(n,7,b9)
b3.aji(c1,D.ewO)
b3.aji(c1,D.etP)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.aj,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bx())
m=B.L()
m.r=A.bO.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aG(b9,A.aj,b4,b4,m)
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
b9.san(D.eG7.aD(0,B.bW(A.J,4.5)))
c1.O(A.J,4.5,b9)
break
case"switch":o=B.by(D.fhw,A.o_)
b9=B.L()
b9.san(D.aul.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.ar(o,b9)
b3.aji(c1,D.UD)
b3.aji(c1,D.aNe)
h=c2.w?D.aNe:H.aN4
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
b9=B.kJ(D.UD,h,0.85)
b9.toString
w=B.L()
w.r=A.aA.gp(0)
c1.O(b9,5,w)
break
case"fuse":g=B.by(D.aTa,D.aSx)
b9=B.L()
b9.r=A.ft.j(0.25).gp(0)
c1.ar(g,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aE.gp(0)
c1.ar(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ap(A.bO,A.cP,c2.fx).gp(0)
c1.ah(D.aNx,D.aNc,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aNx,D.exh,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.euR,D.aNc,b9)
b9=B.L()
b9.r=A.dZ.gp(0)
c1.O(A.J,6,b9)}for(f=0;f<2;++f){e=B.bX(new B.r(M.fP[f]*22,0),20,9)
c1.ar(B.by(e,A.iF),b3.Q0(e,A.d6,A.oh,!0))}break
case"pot":b9=B.L()
b9.san(D.eGi.aD(0,B.bW(A.J,21)))
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
b9.san(D.eG5.aD(0,B.bW(A.J,13)))
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
case"resistor":a1=B.by(D.aTa,D.aSx)
b9=B.L()
b9.san(D.ccz.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.ar(a1,b9)
b9=x.O
a2=B.J([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=a3[p].gp(0)
c1.aF(new B.a4(b9,-9,b9+4.5,9),w)}b9=B.L()
b9.r=A.aQ.gp(0)
c1.aF(D.fhZ,b9)
b9=c2.r
b3.qY(c1,b9>=1000?"1k\u03a9":""+A.h.U(b9)+"\u03a9",D.ewg,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.ex.j(0.55*w).gp(0)
v.y=A.CW
c1.O(H.vI,34,v)}o=B.bX(D.esI,12,18)
c1.ar(B.by(o,A.iF),b3.Q0(o,A.bj,A.dY,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.dB.gp(0)
v.c=1
c1.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.N_
else{v=B.ap(A.dY,A.hN,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gx
else{m=B.ap(A.d_,A.ex,c2.fx)
m.toString}w.san(new B.bT(A.nk,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aD(0,B.bW(A.tL,17)))
c1.O(A.tL,17,w)
w=B.L()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.O(A.tL,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.aj,b4,b4,B.a([],w))
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
c1.ah(D.exb,D.exd,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.euK,D.euN,v)
w=B.a([],w)
a4=new B.aG(b9,A.aj,b4,b4,w)
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
v.y=D.bKU
c1.O(A.tL,30,v)}w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.exj,D.exi,w)
w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.euT,D.euS,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.aj,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ce(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bx())
v=B.L()
if(t)m=A.jp
else{m=B.ap(A.eq,D.bpN,c2.fx)
m.toString}if(t)k=A.kT
else{k=B.ap(A.ky,A.aA,c2.fx)
k.toString}v.san(new B.a7(A.ay,A.aC,A.x,B.a([m,k],x.O),b4,b4).aD(0,D.fgR))
c1.af(a6,v)
v=B.L()
v.b=A.aa
v.c=1.2
v.r=A.k0.gp(0)
c1.af(a6,v)
v=B.L()
v.r=A.er.gp(0)
c1.aF(D.fgX,v)
w=new B.aG(b9,A.aj,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ce(-6,-12,0,-15))
b9=B.L()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c1.ar(B.by(a7,A.ir),b3.ayG(a7,A.an,A.bm))
b9=B.L()
b9.r=A.ct.gp(0)
c1.aF(D.fgq,b9)
b9=B.L()
b9.r=A.cA.gp(0)
c1.aF(D.fgs,b9)
b9=c1.c
J.bs(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bs(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bX(H.aN_,15,7)
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.cP.j(0.9).gp(0)
c1.c1(w,v)
b9.restore()}w=B.L()
w.r=A.av.gp(0)
c1.O(A.J,3,w)
b9.restore()
b3.qY(c1,"M",D.ewN,A.av,14)
break
case"buzzer":a8=B.bX(A.J,42,42)
b9=B.L()
b9.san(D.eGm.aD(0,a8))
c1.c1(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.O(A.J,6,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aT.gp(0)
c1.O(A.J,6,b9)
b3.qY(c1,"+",D.ewG,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.h.F(b9.d*14,5):0
v=B.bW(A.J,24+l*5+v)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.b=A.aa
m.c=2
m.r=A.c4.j(w*(1-l*0.22)).gp(0)
c1.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.by(D.fhs,A.ir)
w=B.L()
w.san(D.ca8.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.ar(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.aj,b4,b4,w)
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
w.r=D.boL.j(0.5*b9).gp(0)
w.y=A.kY
c1.af(a9,w)}$.S()
b9=B.L()
b9.b=A.aa
b9.c=3.2
b9.d=A.bG
b9.r=B.ap(A.ma,A.yH,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b9=B.by(a7,A.ir)
w=B.L()
w.san(D.c8Z.aD(0,a7))
c1.ar(b9,w)
w=B.L()
w.r=A.bO.gp(0)
c1.aF(D.fh5,w)
for(p=0;p<4;++p){b0=new B.iD(new B.ev("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.G(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a7,A.c1,new B.ji(1),b4,b4,b4,b4,A.c2,b4,A.cx)
b0.ep()
b0.a4(c1,new B.r(-14,-18+p*9))}b1=new B.a4(-16,-24,16,-17)
c1.ar(B.by(b1,A.iF),b3.c86(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.be.j(0.5).gp(0)
c1.aF(new B.a4(-3,w,11,w+b9),v)
b3.qY(c1,"1F",H.vI,A.c,11)
break
case"radio":a1=B.by(D.aaB,A.fR)
b9=B.L()
b9.san(D.ccN.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.ar(a1,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.oh.j(0.6).gp(0)
c1.ar(a1,b9)
b9=B.by(D.fht,A.jy)
w=B.L()
w.r=A.dW.gp(0)
c1.ar(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.ma.gp(0)
w.c=1.4
c1.ah(new B.r(-27,b9),new B.r(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.fZ:A.oj).gp(0)
c1.aF(D.fgx,b9)
if(c2.fx>0){b9=8+A.h.F(b3.b.d*7,18)
w=B.L()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.r(b9,-13),new B.r(b9,-3),w)}b9=B.L()
b9.san(D.aSs.aD(0,B.bW(D.a9z,6)))
c1.O(D.a9z,6,b9)
b9=B.L()
b9.r=A.oh.gp(0)
c1.O(D.etZ,4,b9)
b9=B.L()
b9.r=A.dY.gp(0)
b9.c=1.8
c1.ah(D.etU,D.aNj,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bW(D.aNj,4+l*5+A.h.F(b9.d*8,5))
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.b=A.aa
v.c=1.4
v.r=A.oq.j(0.7).gp(0)
c1.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.by(D.fhD,A.ir)
v=B.L()
v.r=M.mX.gp(0)
c1.ar(w,v)
b2=B.by(D.fhA,A.iF)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bs(b9.save())
b9.clipRRect(B.mW(b2),$.mA(),!0)
b9.translate(-33,-21)
L.fZt(c1,D.fon,c2.at,b3.b.d,c2.ax,-1,b4,b4)
b9.restore()
b9=B.L()
b9.r=A.be.gp(0)
c1.O(D.eua,1.6,b9)}else{w=B.L()
w.r=D.ws.gp(0)
c1.ar(b2,w)
b9=new B.aG(b9.r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bx())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.L()
b9.r=A.by.gp(0)
c1.aF(D.fgW,b9)
break}C.iv0(c1,c2,b3.b.d,b3.gccI())
if(t)b3.qY(c1,"\u2716",D.exm,A.aA,14)
if(s)c1.c.restore()},
bH7(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a4(-28,-13,28,13)
d.ar(B.by(w,A.o_),o.ayG(w,A.d_,A.iO))
v=new B.a4(-22,-13,22,13)
$.S()
u=B.L()
u.san(D.aud.aD(0,v))
d.aF(v,u)
u=B.L()
u.r=A.e3.gp(0)
d.aF(D.fhf,u)
t=new B.a4(28,-5,34,5)
d.ar(B.by(t,A.hG),o.Q0(t,A.d_,A.hY,!0))
o.qY(d,"+",D.etA,A.aQ,11)
o.qY(d,"\u2212",D.ewP,A.ab,11)
o.qY(d,B.w(n===A.h.fK(n)?A.h.U(n):n)+"V",D.ewv,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.bw.gp(0)
d.aF(D.fhe,u)
u=e.as
s=B.L()
s.r=B.ap(A.aA,A.be,u).gp(0)
d.aF(new B.a4(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qY(d,"FLAT",D.ewf,A.bZ,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.esS,D.aMS,u)
o.qY(d,n>3?"3 cells":"2 cells",D.ewu,A.aE,8)}}else if(n<=9){r=new B.a4(-22,-17,22,17)
u=B.by(r,A.o_)
$.S()
s=B.L()
s.san(D.ccm.aD(0,r))
d.ar(u,s)
s=B.L()
s.r=A.dn.gp(0)
d.aF(D.fhg,s)
for(q=0;q<2;++q){p=F.aDP[q]
u=p<0?5:3.6
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.san(D.aSr.aD(0,B.bW(new B.r(p,-18),5)))
d.O(new B.r(p,-18),u,s)}o.qY(d,"9V",D.ewn,A.c,16)}else{r=new B.a4(-34,-16,34,16)
u=B.by(r,A.jy)
$.S()
s=B.L()
s.san(D.aud.aD(0,r))
d.ar(u,s)
s=B.L()
s.r=A.bt.gp(0)
d.aF(D.fhC,s)
for(q=0;q<2;++q){u=B.by(B.bX(new B.r(F.J8[q],-20),8,10),A.hG)
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.cA.gp(0)
d.ar(u,s)}o.qY(d,"+",D.etJ,A.aA,10)
o.qY(d,"12V",D.ewr,A.av,15)}},
aE(d){return!0}}
C.mQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tZ(o,r,q,p)
n.asC(o,r,q,p)
k.push(n)
J.iJ(s[4],new C.cv1(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.amw(m,u[1],l,u[3])}}}
C.akk.prototype={
S(){var w=x.N
return new C.akl(B.c1(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.akl.prototype={
afG(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKT(w,d))
w.ch=B.cz(A.lN,new C.bKU(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bwK()},
a1k(d,e){return this.clc(d,e)},
b40(d){return this.a1k(d,!1)},
clc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1k=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.t4:A.yR
p=d.b
w=3
return B.b(L.hle(s,r,p,d.ax<3.2,q,$.qH().h(0,p).b),$async$a1k)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1k,v)},
cy0(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bKV()),t=J.cE(u)
t.I(u,v)
t.bq(u,new C.bKW(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2E(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cz(A.iR,new C.bKX(w,u,d))}},
a11(d){return this.cjy(d)},
cjy(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a11=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iwf(s,d.b,A.h.U(A.h.F(t.a.c.d*0.12,1)*100)),$async$a11)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a11,v)},
a2E(d){return this.cvz(d)},
cvz(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bKR(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2E)
case 2:return B.h(null,v)}})
return B.i($async$a2E,v)},
Z(){this.a3()
this.bj4()
this.mm()},
bj4(){this.a.c.e=new C.bLc(this)},
mF(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vR(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mv.h(0,s.b)
if((r==null?null:r.b)!==D.AR)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1k(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dB(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dB(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cT.ai()<0.5
else u=!1
if(u)G.dB(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dB(900+A.cT.aw(800),"",90,0,0.1,o)
if(A.cT.ai()<0.35)G.dB(300+A.cT.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cT.ai()<0.4
else u=!1
if(u)G.dB(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dB(330+A.o.F(110*A.h.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dB((A.h.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dB(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dB(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cT.ai()<0.5
else u=!1
if(u)G.dB(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dB(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dB(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bLd())},
bb6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mv.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4H(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dt<1>"),w=new B.dt(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mv.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cKV(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
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
h=C.hKk(new B.r(k,n),new B.r(i,l),p)
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
afE(){this.a.toString
this.m(new C.bKi())},
bto(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dgq[v]
if(!A.d.aU(p.a.c.a,new C.bLe(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?R.AG:o
s=s?R.AG:o
q=t.alH(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dB(1200,"",50,0,0.3,"tri")
p.afE()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.T_[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fN(w,A.o.aq(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cr<1>")
w=B.B(new B.cr(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b4w(s,!0))
n.a.toString
if(t)w.push(n.b4w(r,!0))
w.push(B.E(B.cj(new C.bLb(n,q)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b4w(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qH()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.ay(p,B.o(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xI,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o3,p,p,p)],n),A.l,p,A.b9,A.i,0,A.p),A.f,p,p,new B.n(s,p,new B.bH(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,K.oy,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKj(this,u),p,p,p,p,p,p,!1,A.a4))}return B.o(p,B.cv(m,p,p,A.hm,p,p,A.aM,!1),A.f,p,p,new B.n(K.Cc,p,new B.bH(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cnl(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qH().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bKF(e,a1)
t=new C.bKE()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.G,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.o(A.z,B.d(a1.c,d,d,d,d,d,d,A.xI,d,d,d),A.f,d,d,new B.n(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.ae,o,B.ay(d,B.o(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.Wa,d,d,d),A.f,d,d,new B.n(d,d,l,m,d,d,A.n),d,d,d,d,A.oz,d,d,d),A.y,!1,D.hBa,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bKq(e),d,d,d,d,d,d,!1,A.a4),B.aH(d,d,d,d,D.c4v,d,d,d,new C.bKr(e,a2),d,d,d,d,"Remove part",A.ch),B.aH(d,d,d,d,A.Qu,d,d,d,new C.bKs(e),d,d,d,d,d,A.ch)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.L_,d,d,d),A.cS,B.d("How it is made: "+a1.f,d,d,d,d,d,d,Q.aX6,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fR8)
else m.push(new B.D(A.f2,B.A(B.a([t.$2(A.h.ad(Math.abs(a2.dy),2),"VOLTS"),A.bn,t.$2(A.h.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bn,t.$2(A.h.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bgX(a2)
if(j!=null){a1=(a2.x?A.aA:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.aA:A.at).j(0.5),A.r,1)
m.push(new B.D(A.ig,B.o(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fN2,d,d,d),A.f,d,d,new B.n(a1,d,v,w,d,d,A.n),d,d,d,d,A.cq,d,d,d),d))}if(C.hiK(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f2,new E.dY("CH "+h,a2.at===i,new C.bKw(e,a2,i),d,r,d),d))}a1=B.ca(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
if(e.a.c.rA(a2)){w=F.SO[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.ax,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.hu,d,d,d)],k)
if(e.a.c.rA(a2))a1.push(new E.fC(A.wY,"Open big screen",new C.bKx(e,a2),r,d))
A.d.u(m,a1)}if(D.mv.am(0,a0)&&!C.hiK(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.rA(a2))a1.push(B.d(e.a.c.rA(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.hu,d,d,d))
if(e.a.c.rA(a2))a1.push(new E.fC(A.Qc,"Open the "+$.qH().h(0,a0).b,new C.bKy(e,a2),r,d))
A.d.u(m,a1)}if(D.mv.am(0,a0))A.d.u(m,B.a([A.am,new E.fC(A.Do,"Make it bigger (or tap it 4 times)",new C.bKz(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.ad(a2.db,1)
if(e.a.c.rA(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.h.ad(v,1)+" V",d,d,d,d,d,d,D.fGX,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dzi[g]
w=f===A.h.fK(f)?A.h.U(f):f
a1.push(new E.dY(B.w(w)+" V out",a2.e===f,new C.bKA(e,a2,f),d,r,d))}v.push(new B.D(A.ln,B.c_(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.h5c)
A.d.u(m,v)}if(e.a.c.Mz(a2)&&!a2.x){a1=A.h.ad(a2.cx,2)
w=A.h.ad(e.a.c.Aq(a2),2)
v=e.a.c
o=v.apj(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.apj(a2)?A.bZ:A.ew,d,d,d,d,d,d,d,d,12.5,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.h.D(a2.cx/e.a.c.Aq(a2),0,1)
v=e.a.c.apj(a2)?A.aA:A.be
m.push(new B.D(A.ig,B.x(B.a([a1,A.cS,B.bv(w,B.kt(A.bw,d,d,5,d,o,new B.lN(v,x.c)),A.aq)],k),A.E,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.U(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ig,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fAu,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dnM[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dY(w,a2.e===f,new C.bKB(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.ddw[g]
w=f>=1000?"1 k\u03a9":""+A.o.U(f)+" \u03a9"
a1.push(new E.dY(w,a2.r===f,new C.bKC(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bKD(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bKt(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bKu(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bKv(a2)))
if(a0==="crank")m.push(D.h0s)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.hu,d,d,d))
return B.o(d,new B.cN(D.b8i,B.ca(B.x(m,A.E,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.n(F.YS,d,q,s,p,d,A.n),d,d,D.hAv,d,D.bF1,d,d,d)}}
C.bdT.prototype={}
C.Wx.prototype={
S(){return new C.aFJ(C.hoW(),new B.cy(null,x.gJ),B.aR(x.S))}}
C.aFJ.prototype={
Z(){this.a3()
$.aU.bZ$.push(this)
this.afF()},
afF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fMA(),$async$afF)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ivp(t.d,r)
if(s!=null){t.m(new C.e2N(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
FF(){var w,v=this
if(!v.as)return
w=C.ilP(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bHp(w)},
jn(d){if(d!==A.fW)this.FF()},
t(){$.aU.hZ(this)
this.FF()
this.a2()},
ccK(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e2W(q),u).gJ(0)
s=new B.Y(v,new C.e2X(),u).gJ(0)
r=new B.Y(v,w.gd_q(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e2Y(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FF()
if(A.o.F(q.w,10)===0){w=q.f
$.ajo()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajo()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JP("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e2Z())
q.FF()
w=q.c
w.toString
w=B.Ki(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajo()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mZ,p,p,p,p,p,p,p,p,p,p))}},
aiv(){var w=0,v=B.j(x.H),u=this,t
var $async$aiv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e2M(u),t,null,!0,!0,x.H),$async$aiv)
case 2:return B.h(null,v)}})
return B.i($async$aiv,v)},
b1N(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.o(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.ay(w,B.hd(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1M(d,e,f,g){return this.b1N(d,e,f,g,null)},
ati(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.ay(w,B.o(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e7,new B.df(1,A.cl,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b9,A.i,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agP(){var w=0,v=B.j(x.H),u=this,t
var $async$agP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ee(new C.e2I(u),!1,null,x.H)),$async$agP)
case 2:t=u.e.gbl()
if(t!=null)t.bj4()
if(u.c!=null)u.m(new C.e2J())
u.FF()
return B.h(null,v)}})
return B.i($async$agP,v)},
bKg(){var w,v,u,t,s=null,r=this.f
$.ajo()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bi:A.aA
u=B.l(9)
t=B.K(K.Cc,A.r,1.5)
return B.o(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xL,s,s,s),s,s,s),A.f,s,D.b87,new B.n(r,s,t,u,s,s,A.n),s,s,s,s,A.f7,s,s,s)},
ajE(){var w=0,v=B.j(x.H),u=this,t
var $async$ajE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mW,null,new C.e2V(u),t,!0,!0,!0,A.kn,!1,!1,x.H),$async$ajE)
case 2:return B.h(null,v)}})
return B.i($async$ajE,v)},
ccL(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.ay(r,B.o(r,D.c18,A.f,r,r,new B.n(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e30(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.o(r,D.be7,A.f,r,r,new B.n(A.bs,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.o(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.h38,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eV:A.ha,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.azG(s.gcjg(),r),A.vQ,s.b1M(A.qR,"Construction Lab: real 3D wiring, plumbing and a house",A.cP,new C.e31(s,d)),s.b1N(A.lS,"Challenges",A.aQ,s.gcAA(),s.bKg()),s.b1M(A.Dj,"How to play",A.aH,new C.e32(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.ati(A.oG,"Circuits",A.bh,s.gctr()),A.bn,s.ati(A.oE,"Repair",A.aQ,new C.e33(s)),A.bn,s.ati(I.wW,"Clear",A.bZ,new C.e34(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(K.Cc,r,new B.bH(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bKe,r,r,r)},
B(d){var w=this,v=null
$.au0="tech"
return B.c5(v,A.c6,B.bm(!0,B.x(B.a([w.ccL(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hnN(w.d,w.e,w.gccJ(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azG.prototype={
S(){return new C.bc0(null,null)}}
C.bc0.prototype={
gazD(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.Y,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazD().t()
this.by5()},
B(d){var w=null,v=this.a.c
return B.ay(w,B.hd(new B.a5(42,42,B.c6(this.gazD(),new C.cMD(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bc_.prototype={
a4(d,e){var w,v,u,t=null,s=e.ek(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=A.oA
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eGh.aD(0,B.bW(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.aa
v.c=2.2
v.san(new B.h3(A.z,0,6.283185307179586,A.x,D.d3S,t,new B.mH(p)).aD(0,B.bW(s,r)))
d.O(s,r,v)
p=new C.cMC(d)
p.$3(s.a5(0,A.tL),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.ev5),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.ext),2.6,0.5+0.5*Math.cos(q))
u=B.fD(t,A.cx,t,t,t,D.fwR,A.a7,A.c1,t,A.dK,A.c2)
u.ep()
u.a4(d,s.a5(0,new B.r(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.aA0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aA1.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bwJ()}}
C.aMi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAH.prototype={}
C.fW.prototype={}
C.Kj.prototype={
a7(){return"ScreenStyle."+this.b}}
C.m1.prototype={}
C.Wg.prototype={
S(){return new C.aFz(R.AG,null,null)}}
C.aFz.prototype={
gaaO(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.ox,null,1,null,v)
w.cs(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
gabx(){var w=D.mv.h(0,this.a.c)
return w==null?D.aTs:w},
t(){if(this.f){B.CV(A.KU)
B.bFT()}this.gaaO().t()
this.bzY()},
gBK(){var w=this.gaaO().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
Oa(){var w,v=this,u=v.e
if(u==null)return null
w=F.ik[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.h.bh(Math.max(0,v.gBK()-v.z)/10),14)
return w},
JU(d){this.m(new C.dZJ(this,d))},
b51(d){this.m(new C.dZK(this,d,14))},
aDs(d){var w=this.Oa()
if(w==null)w=d>0?-1:0
return this.b51(w+d)},
cFA(d,e){if(e.a<=0||e.b<=0||this.Oa()==null)return
this.m(new C.dZU(this,d,e))},
adH(){return this.c56()},
c56(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Oa()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.dZI(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$adH)
case 3:if(t.c!=null&&r.a)t.b51(q)
case 1:return B.h(u,v)}})
return B.i($async$adH,v)},
cH8(){var w=this,v=!w.f
w.m(new C.dZV(w,v))
if(v){B.CV(A.abK)
B.hjy(w.gabx().b===D.xv)}else{B.CV(A.KU)
B.bFT()}},
ccO(){var w,v=this
if(!v.f)return
B.jo()
v.m(new C.dZW(v))
w=v.c.K(x.q).f
w.Mn()
if(v.r)w.T(F.aVA)},
aQ7(d){return B.cj(new C.dZB(this,d))},
cmK(d){var w,v=this,u=null,t=v.gBK(),s=t-v.w,r=s<1.4?new L.b_L(v.x,s):u
if(F.ik[d].e===-1){w=Math.max(0,t-v.z)
return new C.ag6(d,w,r,A.o.F(v.y+A.h.bh(w/10),14),u)}return new C.ag6(d,t,r,u,u)},
aZM(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aF(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.P(u,0,u,0),B.A(B.a([B.X(A.l_,A.av,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.d("Learn more",w,w,w,w,w,w,B.m(w,w,A.av,w,w,w,w,w,w,w,w,d*0.48,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),w),A.o1,!0,w,w,w,w,D.hAx,w,w,w,w,w,w,this.gc55(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.o1,w,w,A.ai)},
b1O(d,e,f,g){var w=null,v=B.n4(w,A.b5,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aH(w,w,w,w,B.X(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ccN(d,e,f){return this.b1O(d,e,f,null)},
cuJ(){var w=this,v=null,u=new C.dZS(),t=A.w.j(0.72),s=B.l(22),r=B.K(w.gabx().d.j(0.5),A.r,1),q=u.$3(D.bUG,"AD \u2212",new C.dZO(w)),p=u.$3(A.arC,"AD +",new C.dZP(w)),o=u.$5$color$on(A.kC,"HOME",new C.dZQ(w),w.gabx().d,w.e==null),n=w.e
n=n!=null&&F.ik[n].e===-1
return B.o(v,B.A(B.a([q,p,o,u.$5$color$on(A.zv,"ADS",new C.dZR(w),A.c4,n)],x.p),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(t,v,r,s,v,v,A.n),v,v,D.hAC,v,A.OW,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gabx(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dD,x.w).w.r.b+26:8
w=o.ccN(A.cB,"Back to the board",new C.dZX(d))
v=o.f
u=v?A3.I_:A.wY
v=v?"Leave full screen":"Full screen"
v=o.b1O(u,v,o.gbbA(),D.hBn)
u=B.l(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.P(8,l,8,0),B.A(B.a([w,A.ae,v,A.ae,B.E(new B.bK(A.a9,n,n,B.o(n,B.d(t==null?s:s+" \xb7 "+F.ik[t].a,n,1,A.a2,n,n,n,V.xE,n,n,n),A.f,n,n,new B.n(A.b5,n,n,u,n,n,A.n),n,n,n,n,A.lO,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.xv?o.bMo(m):o.cq9(m)
l=o.f
w=!l
v=l?o.gb1P():n
if(l){l=B.as(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b1,A.t,B.a([l,B.ao(n,B.xx(new B.ds(!k,q,n),A.b0,A.ie,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.am,o.cuJ(),B.E(new B.D(A.cw,B.as(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c5(n,A.a_z,B.bm(w,B.ay(A.c_,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ccM(d){var w
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
cq9(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aaK
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(p.gaaO(),new C.dZN(p,w,d,m),o)
if(n===D.aaL)v=new B.BE(D.bKT,v,o)
n=p.ccM(n)
u=p.f?A.hB:A.a12
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.w,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.l(w)
r=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fG(n,B.o(o,B.o(o,v,A.f,o,o,new B.n(A.w,o,o,B.l(w-3),o,o,A.n),o,o,o,o,A.Ht,o,o,o),A.f,o,o,new B.n(o,o,o,s,r,new B.a7(A.ay,A.aC,A.x,q,o,o),A.n),o,o,o,u,new B.P(t,t,t,t),o,o,o),o)},
baf(d){var w=Date.now(),v=A.o.D(this.a.d+A.h.bh(this.gBK()*0.4),0,100),u=d.b===D.aaK,t=u?34:20,s=u?28:18
return new B.D(new B.P(t,12,s,2),B.cj(new C.dZT(new B.V(w,0,!1),v)),null)},
axt(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.o(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.n(v,v,v,u,D.du1,new B.a7(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.fDs,v,v,v)],w))
return B.ay(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dZG(this,d),v,v,v,v,v,v,!1,A.a4)},
c2Y(d,e){return this.axt(d,e,!0)},
c2F(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aTt||o===D.AT,m=d.d,l=B.ap(m,A.w,0.55)
l.toString
m=B.ap(m,A.jX,0.5)
m.toString
m=B.a([l,A.dA,m],x.O)
l=q.baf(d)
w=n?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.ay(p,B.o(p,B.bv(B.l(23),B.b5(p,p,p,new C.ag6(0,q.gBK(),p,p,p),A.h5),A.aq),A.f,p,p,new B.n(p,p,u,v,p,p,A.n),p,w,p,A.hZ,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dZE(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ik[s]
t.push(new B.ck(A.z,p,p,new B.dv(A.dJ,A.z,A.f,q.c2Y(r,n?58:54),p),p))}l=B.a([l,A.am,w,A.af,B.E(B.l_(0.92,t,v,8,12,A.wG,p,!1),1)],u)
if(o!==D.aaL){o=A.c.j(0.16)
w=B.l(28)
l.push(B.o(p,B.cj(new C.dZF(q)),A.f,p,p,new B.n(o,p,p,w,p,p,A.n),p,p,p,D.bFb,H.aot,p,p,p))}return B.o(p,B.x(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.n(p,p,p,p,p,new B.a7(A.ay,A.aC,A.x,m,p,p),A.n),p,p,p,p,p,p,p,p)},
bFL(d,e){var w=this,v=null,u=w.Oa(),t=w.baf(d),s=B.E(w.aQ7(e),1),r=x.p,q=B.a([B.bS(0,B.ay(v,B.o(v,B.as(B.d(F.ik[e].a,v,v,v,v,v,v,A.L1,v,v,v),v,v,v),A.f,A.w,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dZy(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.aZM(22),v,v,v,10,8,v))
return B.o(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.w,v,v,v,v,v,v,v,v,v,v)},
aT8(d,e){return B.c6(this.gaaO(),new C.dZD(this,e,d),null)},
bMo(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qq(t.aT8(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(q?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fG(1.5384615384615383,B.o(s,B.bv(B.l(q?20:8),t.aT8(d,q),A.aq),A.f,s,s,new B.n(s,s,s,v,u,new B.a7(A.ay,A.aC,A.x,w,s,s),A.n),s,s,s,A.aon,new B.P(8,8,8,r),s,s,s),s)}}
C.byJ.prototype={
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
t.y=D.bKY
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.ag6.prototype={
a4(d,e){var w=this
return L.Mh(d,e,w.b,w.c,w.e,w.d)},
aE(d){return!0}}
C.aO6.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bxv.prototype={}
C.a9M.prototype={
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,D.ajt,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,I.at8,w,w,w,new C.cnU(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hc2,w,w,w,1,w,!0),D.ajt,B.cv(B.a([D.eyV,B.cj(new C.cnV())],x.p),w,w,D.bGh,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XV.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHe(w,new B.at(A.aw,$.aw()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aHe.prototype={
Z(){this.a3()
this.mm()},
b87(d){var w=this.d.length
return A.o.F(A.h.bh(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mF(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b87(v.f)
if(w!==v.x){v.x=w
E.mp("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eWQ(v))
C.JP("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
ceF(){if(this.d.length<2)return
this.m(new C.eWM(this))},
b2p(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eWL(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gceE(),p=s.d,o=B.E(B.ay(r,B.b5(r,r,r,new C.byV(p,s.f,r),A.h5),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fLs,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aD_[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.ay(r,B.o(r,B.d(p[v],r,r,r,r,r,r,D.fKF,r,r,r),A.f,r,r,new B.n(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.f2,A.ho,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eWO(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lB(A.aQ,A.f8,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bA(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kq,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eWP(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a7,r,A.ao,r,r,r,r),1),A.ae,new E.fC(A.i_,"Add",s.gceC(s),A.c,r),A.bn,new E.fC(A.nM,"Spin",q,A.be,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.byV.prototype={
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
o.r=D.aD_[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bW(g,f)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aA(p,0,11)+"\u2026"
n=new B.iD(new B.ev(p,l,l,A.cN,l,l,l,l,l,l,D.fxF),A.a7,A.c1,new B.ji(1),l,l,l,l,A.c2,l,A.cx)
n.ep()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.aj4.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.aa
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aG(k.r,A.aj,l,l,B.a([],x.v))
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
S(){return new C.bmR($,A.bC,0,B.a([],x.X),null,null)}}
C.bmR.prototype={
Z(){this.a3()
this.mm()},
mF(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JP("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.V0(900,new C.e5M())}w.m(new C.e5N())},
b2r(d){return this.m(new C.e5H(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b1(A.o.v(A.h.aq(m,60)),2,"0")
v=A.a.b1(A.o.v(A.o.F(A.h.cC(m),60)),2,"0")
m=B.b5(n,n,n,new C.btA(l,A.bZ,n),A.aUY)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fCl,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fBi,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vR,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dqQ[r]
u.push(new E.dY(""+q+" min",o.d===q,new C.e5J(o,q),n,A.bZ,n))}m=o.f
p=m?A.v9:A.he
m=m?"Pause":"Start"
return E.lB(A.bZ,A.f8,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fC(p,m,new C.e5K(o),A.be,n),new E.fC(A.oJ,"Reset",new C.e5L(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.btA.prototype={
a4(d,e){var w,v,u,t,s=e.ek(A.J),r=e.a/2-14
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
v.san(new B.h3(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aD(0,B.bW(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VQ.prototype={
S(){return new C.bmq($,A.bC,0,B.a([],x.X),null,null)}}
C.bmq.prototype={
Z(){this.a3()
this.mm()},
mF(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.TH.h(0,p.d)
w.toString
v=A.d.f0(w,new C.dR2())
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
E.mp("flute",D.cdD[t]+5,1400,0.35)}p.m(new C.dR3())},
gceI(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L7("Press Start",0.5)
w=D.TH.h(0,this.d)
w.toString
v=A.d.f0(w,new C.dQY())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L7("Breathe in",0.5+0.5*A.dI.az(0,p))
case 1:return new B.L7("Hold",1)
case 2:return new B.L7("Breathe out",1-0.5*A.dI.az(0,p))
default:return new B.L7("Hold",0.5)}}}return new B.L7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gceI(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fK.j(0.12+(3-u)*0.05)
n.push(B.o(q,q,A.f,q,q,new B.n(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.fK.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q2,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kq,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.TH.gew(D.TH));w.C();){v=w.gP(w)
o.push(new E.dY(v,r.d===v,new C.dR0(r,v),q,A.fK,q))}w=r.e
v=w?A.zL:A.he
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dR1(r),A.be,q))
return E.lB(A.fK,A.f8,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKI.prototype={}
C.Ww.prototype={
S(){return new C.bmI(new B.cy(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bmI.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,I.oR,s,s,s,new C.e2h(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.l(18),new B.e6(B.ay(s,B.b5(s,s,s,new C.boK(t.e,t.x,s),A.h5),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e2i(t),new C.e2j(t),s,s,s,s,s,s,s,s,s,new C.e2k(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d5t[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e2l(t,v),!1,s))}u=t.r
return E.lB(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bS,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iU(A.bE,""+A.h.U(u),"Brush",30,2,new C.e2m(t),u),new E.fd(B.a([new E.dY("Eraser",t.w,new C.e2n(t),A.zw,A.bE,s),new E.fC(A.pD,"Undo",new C.e2o(t),A.c,s),new E.fC(A.ej,"Clear",new C.e2p(t),A.c,s),new E.fC(A.Q_,"Paper",new C.e2q(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.boK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.L()
w.r=this.c.gp(0)
d.aF(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
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
m=new B.aG(r.r,A.aj,null,null,p)
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
C.Xh.prototype={
S(){var w=x.S
return new C.aGx(B.aR(w),B.aR(w))}}
C.aGx.prototype={
Z(){this.a3()
this.auO()},
auO(){var w,v,u=this,t=x.N,s=B.br(D.dwe,!0,t)
A.d.DA(s)
w=x.S
v=B.U(s).c
t=B.B(B.cT(s,0,B.dA(u.d,"count",w),v),t)
A.d.u(t,B.cT(s,0,B.dA(u.d,"count",w),v))
A.d.DA(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
ceD(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mp("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.ete(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.n_,new C.etf(s,v,u),t)
else{s.x=!0
B.bO(A.H9,new C.etg(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Wh,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.z3,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.j_,A.i,0,q,q),q),B.E(B.iz(!0,q,q,A.y,new B.hN(v,8,8,1,q),new C.etk(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d75[t]
o.push(new E.dY(s.b,r.d===s.a,new C.etl(r,s),q,A.aH,q))}o.push(new E.fC(I.arB,"New game",new C.etm(r),A.be,q))
return E.lB(A.aH,A.f8,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xr.prototype={
S(){return new C.aGS(B.a([],x.t))}}
C.aGS.prototype={
ceH(d){A.d.a8(this.d)
this.w=!0
this.b2q()},
b2q(){this.d.push(A.cT.aw(4))
this.e=0
this.a0o()},
a0o(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0o=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eE0(t))
s=x.H
w=3
return B.b(B.bO(A.lM,null,s),$async$a0o)
case 3:r=t.d,q=B.br(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aW6(n)
w=7
return B.b(B.bO(new B.bf(1000*Math.max(280,600-r.length*18)),null,s),$async$a0o)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eE1(t))
case 1:return B.h(u,v)}})
return B.i($async$a0o,v)},
aW6(d){this.m(new C.eDZ(this,d))
E.mp("marimba",D.cdC[d]+5,450,0.55)
B.bO(A.H7,new C.eE_(this),x.H)},
ceJ(d){var w,v,u=this
if(!u.w||u.r)return
u.aW6(d)
w=u.d
v=u.e
if(w[v]!==d){G.dB(90,"",600,0,0.5,"saw")
u.m(new C.eE2(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eE3(u))
B.bO(A.hy,new C.eE4(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,P.aXB,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fLT,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBQ[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aBQ[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.ay(p,B.cU(p,p,p,p,A.b0,new B.n(u,p,new B.bH(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jq,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eE5(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.db,new B.fG(1,B.l_(1,l,2,12,12,p,A.e0,!1),p)],m),A.l,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lB(A.bt,A.f8,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fC(A.he,n,q.gceG(q),A.be,p)],m),p,p))}}
C.XM.prototype={
S(){return new C.bnY(new B.at(A.aw,$.aw()))}}
C.bnY.prototype={
ayn(d){return B.ou(A.h.ad(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eSb(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eSk()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bA(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A.ya),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b6z),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lY,"Bill amount",!0,!0,!1,m,m,m,m,D.fJ9,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.eb,m,m,m,1,m,m,!1,"\u2022",m,new C.eSg(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aWA,!0,A.a7,m,A.ao,m,m,m,m)
k=A.be.j(0.1)
s=B.l(20)
r=B.K(A.be.j(0.35),A.r,1)
q=x.p
s=B.cv(B.a([l,A.bx,B.o(m,B.x(B.a([t.$2("Tip ("+A.h.U(n.e)+"%)","$"+n.ayn(w)),t.$2("Total","$"+n.ayn(v)),A.Oe,t.$3$big("Each of "+n.f+" pays","$"+n.ayn(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.n(k,m,r,s,m,m,A.n),m,m,m,m,A.bT,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cS7[p]
r.push(new E.dY(""+o+"%",A.h.U(n.e)===o,new C.eSh(n,o),m,A.be,m))}l=n.f
return E.lB(A.be,A.f8,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iU(A.aH,""+l,"People",20,1,new C.eSi(n),l),new E.fd(B.a([new E.dY("Round up",n.r,new C.eSj(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.Xf.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bns(w,A.cT,$,A.bC,0,B.a([],x.X),null,null)}}
C.bns.prototype={
Z(){this.a3()
this.mm()},
mF(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.h.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.XO("snare",0,0.5)}u.m(new C.erU())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h4()
u.w=t
u.x=t?0:3.141592653589793
E.mp("bell",24,400,0.5)}u.m(new C.erV())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bgg(v,o.r>0,n))}u=B.ay(n,B.as(B.c_(A.fU,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.erN(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d6,A.r,6)
s=B.a([new B.ac(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.ay(n,B.as(B.e1(A.z,B.o(A.z,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fIi,n,n,n),A.f,n,n,new B.n(n,n,v,n,s,D.eGl,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.erO(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.ay(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fx8,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kq,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.erP(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.do0[r]
v.push(new E.dY(q.b,o.d===q.a,new C.erQ(o,q),q.c,A.bh,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iU(A.bh,""+s,"Dice",4,1,new C.erR(o),s))}if(o.d==="num"){s=o.z
s=E.iU(A.bh,""+s,"From",100,1,new C.erS(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iU(A.bh,""+p,"To",1000,2,new C.erT(o),p)],m))}return E.lB(A.bh,A.f8,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bgg.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cT.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dIK.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.o(p,p,A.f,p,p,A.Yk,p,18,p,p,p,p,p,18),p))
return B.eK(A.z,w,B.o(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.n(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bH,p,p,100),p)}}
C.aNT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAD.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzK()}}
C.aOd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAJ.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bA5()}}
C.aOG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bAS.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAz()}}
C.aP6.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bB0.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bB_()}}
var z=a.updateTypes(["Q(tZ)","~()","Q(a5R)","aA<~>()","Q(D8)","H(tZ,H)","F(F,tZ)","Q(D4)","Q(a_P)","Q(acT)","Q(a4I)","Q(nH)","XN()","VP()","a9M()","Xm()","XB()","Xn()","Q(mQ)","VW()","agp(Z,H)","afg(Z,H)","~(aa<@,@>)","H(D4,D4)","q(ej)","Q(agd)","Q(a22)","Q(Dj)","Q(adn)","Q(afj)","Q(ad6)","H(H,re)","H(H,D8)","q(re)","~(re,ai<q>,H)","re?(D8)","Xf()","v(q,a1Q)","Q(abM)","~(B3)","XQ()","~(xF,q,r,u,F)","~(q,tZ)","Wx()","X_(Z)","Ol(Z)","Wg(Z,bu<F>,bu<F>)","J2(Z)","XV()","WF()","VQ()","Ww()","Xh()","Xr()","XM()","Q(re)"])
C.fMY.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fBA.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fJk.prototype={
$1(d){var w
if(!this.a.Mz(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fJl.prototype={
$1(d){return d.x},
$S:z+0}
C.fMV.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fMW.prototype={
$1(d){var w
if(!this.a.Mz(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fMX.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.el_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.el0.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.el1.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.mx(v,A.e6,A.ie)}},
$S:7}
C.elc.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eld.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.el8.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.el6.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dx(0,0,0,d,0,0),new C.el7(w,this.b,e)))},
$S:2174}
C.el7.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.el9.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXo().alH(0,u[1],u[2],u[3])
u[4].bO(0,new C.el4(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dB(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.el5(w.a,v,w.f,w.r))},
$S:0}
C.el4.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:195}
C.el5.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.h.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ela.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXo().amw(t,u[1],s,u[3])
G.dB(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.el3(w.a,v,w.e,w.f))},
$S:0}
C.el3.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.h.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.elb.prototype={
$0(){G.dB(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.el2(w,this.b))},
$S:0}
C.el2.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.elg.prototype={
$0(){var w=this.a
return w.m(new C.elf(w))},
$S:0}
C.elf.prototype={
$0(){return this.a.at=!0},
$S:0}
C.elh.prototype={
$0(){var w=this.a
return w.m(new C.ele(w))},
$S:0}
C.ele.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eli.prototype={
$0(){var w=this.a
w.f.sb4(0,this.b)
w.Q8()},
$S:0}
C.elj.prototype={
$0(){return this.a.Zu(this.b)},
$S:0}
C.elk.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Q8():w.aZ6()},
$S:2}
C.ell.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Q8():w.aZ6()},
$S:0}
C.eAk.prototype={
$2(d,e){return d+e},
$S:2175}
C.eAE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eAD(w,d))},
$S:2176}
C.eAD.prototype={
$0(){var w=B.aI(J.t(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eAF.prototype={
$0(){},
$S:0}
C.eAG.prototype={
$0(){},
$S:0}
C.eAm.prototype={
$0(){return this.a.m(new C.eAl(this.b,this.c))},
$S:0}
C.eAl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAb.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eAc.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.eAd.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eAe.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.eAf.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eAg.prototype={
$1(d){return this.a.db=d},
$S:29}
C.eAh.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.eAi.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:29}
C.eAj.prototype={
$0(){var w=this.a
return w.m(w.gayZ())},
$S:0}
C.eA9.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.eAa.prototype={
$1(d){return this.a.$1(!1)},
$S:115}
C.eA8.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.eAx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.ch=n
n=B.b5(p,p,p,new C.bka(o,p),n)
w=this.b
v=C.bDf("WORLD",w.a,w.c)
u=C.bDf("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.U(t*100)
t=t<0.25?A.bZ:A.be
t=C.bDf("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.U(s*100)
s=s>D.DX[o.db].d?A.bZ:A.c
q=x.p
s=B.a([v,u,t,C.bDf("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bDf("HEIGHT",""+A.h.U(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.j_,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bIN(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tw[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.nO,"Again",new C.eAs(o),A.c,p),new E.fC(A.oE,"Rebuild",new C.eAt(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jt,"Next world",new C.eAu(o),A.be,p))
n.push(C.hCY("Perfect landing!",w,A.be,v))}if(o.as==="crashed")n.push(C.hCY("Crash!",o.at,A.bZ,B.a([new E.fC(A.nO,"Try again",new C.eAv(o),A.be,p),new E.fC(A.oE,"Rebuild",new C.eAw(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:65}
C.eAs.prototype={
$0(){var w=this.a
return w.m(w.gayZ())},
$S:0}
C.eAt.prototype={
$0(){var w=this.a
return w.m(new C.eAp(w))},
$S:0}
C.eAp.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eAu.prototype={
$0(){var w=this.a
return w.m(new C.eAo(w))},
$S:0}
C.eAo.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eAv.prototype={
$0(){var w=this.a
return w.m(w.gayZ())},
$S:0}
C.eAw.prototype={
$0(){var w=this.a
return w.m(new C.eAn(w))},
$S:0}
C.eAn.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eAy.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eAr(v,w))},
$S:0}
C.eAr.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eAz.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eAA.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eAB.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eAC.prototype={
$0(){var w=this.a
return w.m(new C.eAq(w))},
$S:0}
C.eAq.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dQW.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ib(B.a([C.hxZ(),C.hy_()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kX(0,B.cP(J.t(r,1)))
q.m(new C.dQV(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:47}
C.dQV.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dQw.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dQx.prototype={
$0(){return this.a.c_J(B.aV(J.t(this.b,"group")))},
$S:0}
C.dQy.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dQz.prototype={
$1(d){return A.a.b1(A.o.ft(A.o.D(A.h.U(d*255),0,255),16),2,"0")},
$S:304}
C.dQX.prototype={
$0(){return E.XO("kick",0,0.25)},
$S:0}
C.dQA.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dQB.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQC.prototype={
$0(){return E.XO("kick",0,0.5)},
$S:0}
C.dQD.prototype={
$0(){return G.dB(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dQF.prototype={
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
u=w}if(u.cy!=null&&!A.d.aU(u.d.e,new C.dQE(u)))u.cy=null
u.id=0},
$S:0}
C.dQE.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAO(d)},
$S:z+10}
C.dQt.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dQu.prototype={
$0(){var w=this.a
return w.m(w.gcaq())},
$S:0}
C.dQv.prototype={
$0(){return this.a.af3(null)},
$S:0}
C.dQM.prototype={
$0(){var w=this.a.as
return w==null?null:w.f9(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dQN.prototype={
$0(){return this.a.cHg(this.b.a)},
$S:0}
C.dQO.prototype={
$0(){return this.a.af3(this.b)},
$S:0}
C.dQP.prototype={
$1(d){var w=this.a
return w.m(new C.dQL(w,d))},
$S:6}
C.dQL.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dQQ.prototype={
$0(){var w=this.a
return w.m(new C.dQK(w,this.b))},
$S:0}
C.dQK.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dQR.prototype={
$0(){var w=this.a
return w.m(new C.dQJ(w))},
$S:0}
C.dQJ.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dQS.prototype={
$0(){var w=this.a
return w.m(new C.dQI(w))},
$S:0}
C.dQI.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f9(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Ml},
$S:0}
C.dQT.prototype={
$0(){var w=this.a
return w.m(new C.dQH(w))},
$S:0}
C.dQH.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0V()
else w.p3=null},
$S:0}
C.dQU.prototype={
$0(){var w=this.a
return w.m(new C.dQG(w))},
$S:0}
C.dQG.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c7G.prototype={
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
$S:339}
C.c7H.prototype={
$1(d){var w=new B.qw([],[]).o5(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:422}
C.fuI.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:216}
C.fuJ.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:216}
C.fuK.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:216}
C.fuR.prototype={
$1(d){return!J.t(d,0)},
$S:216}
C.fuS.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:216}
C.fuT.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:216}
C.dSB.prototype={
$1(d){return this.a.avD(0)},
$S:7}
C.dSf.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ild(),B.U(w).k("N<1,H>")).fL(0)},
$S:0}
C.dSi.prototype={
$1(d){return""+d},
$S:79}
C.dSC.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dSd.prototype={
$1(d){return this.a.avD(this.b)},
$S:7}
C.dSe.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.azu(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mV(0,d,a1.mn(0.15,0.3))
u=a1.mV(0,d,a1.mn(0.15,0.62))
t=a1.mV(0,"and",a1.mn(0.48,0.46))
s=a1.mV(0,a0,a1.mn(0.82,0.46))
a1=t.a
w.push(new C.nH(v.a,a1,0))
w.push(new C.nH(u.a,a1,1))
w.push(new C.nH(a1,s.a,0))
break
case 1:v=a1.mV(0,d,a1.mn(0.12,0.25))
u=a1.mV(0,d,a1.mn(0.12,0.65))
r=a1.mV(0,"xor",a1.mn(0.46,0.25))
q=a1.mV(0,"and",a1.mn(0.46,0.65))
p=a1.azt(0,a0,a1.mn(0.82,0.25),0)
o=a1.azt(0,a0,a1.mn(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nH(a1,n,0))
m=u.a
w.push(new C.nH(m,n,1))
l=q.a
w.push(new C.nH(a1,l,0))
w.push(new C.nH(m,l,1))
w.push(new C.nH(n,p.a,0))
w.push(new C.nH(l,o.a,0))
break
case 2:k=a1.mV(0,"clock",a1.mn(0.15,0.4))
j=a1.mV(0,"not",a1.mn(0.45,0.65))
s=a1.mV(0,a0,a1.mn(0.82,0.3))
i=a1.mV(0,"buzzer",a1.mn(0.82,0.65))
a1=k.a
w.push(new C.nH(a1,s.a,0))
n=j.a
w.push(new C.nH(a1,n,0))
w.push(new C.nH(n,i.a,0))
break
default:h=a1.mV(0,d,a1.mn(0.12,0.25))
g=a1.mV(0,d,a1.mn(0.12,0.7))
f=a1.mV(0,"nor",a1.mn(0.5,0.25))
e=a1.mV(0,"nor",a1.mn(0.5,0.7))
s=a1.mV(0,a0,a1.mn(0.86,0.25))
a1=f.a
w.push(new C.nH(g.a,a1,0))
n=e.a
w.push(new C.nH(n,a1,1))
w.push(new C.nH(h.a,n,0))
w.push(new C.nH(a1,n,1))
w.push(new C.nH(a1,s.a,0))}},
$S:0}
C.dSj.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.azu(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D4(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mV(0,w.e,o.mn(0.86,0.5))},
$S:0}
C.dS8.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dS9.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dSa.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dSb.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dSc.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aen(this.c)
if(v.ax)C.JP("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dB(140,"",250,0,0.3,"square")}},
$S:0}
C.dSk.prototype={
$0(){},
$S:0}
C.dSl.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dSm.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dSh.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dSg(v))
w.cy=null},
$S:0}
C.dSg.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dS7.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mV(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dSv.prototype={
$0(){var w=this.a
return w.m(new C.dSu(w))},
$S:0}
C.dSu.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dSw.prototype={
$2(d,e){var w=null,v=this.a,u=new B.au(e.b,e.d)
v.x=u
return B.ay(A.c_,B.jb(B.b5(w,w,w,new C.be9(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dSp(v),w,w,w,new C.dSq(v),new C.dSr(v),new C.dSs(v),w,w,w,w,w,w,w,w,w,w,new C.dSt(v),w,w,w,!1,A.a4)},
$S:36}
C.dSt.prototype={
$1(d){return this.a.ccd(d.b)},
$S:63}
C.dSr.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.clq(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAk(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:50}
C.dSs.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dSq.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c3e(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dSn(w))
u=t.as
u.toString
v.push(new C.nH(u,w.a,w.b))
B.jW()}}t.z=t.as=null},
$S:37}
C.dSn.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dSp.prototype={
$1(d){return this.a.ayg(d.b)},
$S:351}
C.dSx.prototype={
$0(){return this.a.bEB(this.b.a)},
$S:0}
C.dSy.prototype={
$0(){return this.a.avD(this.b.a)},
$S:0}
C.dSz.prototype={
$0(){var w=this.a
return w.m(new C.dSo(w))},
$S:0}
C.dSo.prototype={
$0(){var w=this.a
w.azu(0)
w.ay=null},
$S:0}
C.dSA.prototype={
$0(){return this.a.cCQ(this.b)},
$S:0}
C.cXk.prototype={
$0(){var w=this,v=null,u=B.fD(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dK,A.c2)
u.ep()
return u},
$S:255}
C.dYN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYM.prototype={
$0(){return this.a.d=null},
$S:0}
C.dYP.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c5a()},
$S:135}
C.dYO.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.fv8.prototype={
$0(){return I.aMC},
$S:z+40}
C.fv9.prototype={
$0(){return D.dVU},
$S:z+43}
C.fva.prototype={
$0(){return D.dSL},
$S:z+13}
C.fvb.prototype={
$0(){return D.emE},
$S:z+14}
C.fvc.prototype={
$0(){return D.e4x},
$S:z+15}
C.fvd.prototype={
$0(){return I.aMt},
$S:z+16}
C.fve.prototype={
$0(){return D.ekq},
$S:z+17}
C.fvf.prototype={
$0(){return I.aMB},
$S:z+12}
C.fvg.prototype={
$0(){return D.dV1},
$S:z+19}
C.fay.prototype={
$2(d,e){return new C.agp(e,$.bHN()[e],new C.fax(e,this.a),null)},
$S:z+20}
C.fax.prototype={
$0(){var w=this.a,v=K.aK7.h(0,$.bHN()[w].a)
$.au0=v==null?"music":v
B.a6(this.b,!1).ce(B.ee(new C.fav(w),!1,null,x.H))},
$S:0}
C.fav.prototype={
$1(d){return $.bHN()[this.a].e.$0()},
$S:39}
C.faz.prototype={
$2(d,e){return new C.afg(e,D.aCv[e],new C.faw(this.a,e),null)},
$S:z+21}
C.faw.prototype={
$0(){return this.a.d.$1(D.aCv[this.b])},
$S:0}
C.fae.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fad.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fac.prototype={
$1(d){var w=this
return new B.e0(new C.fab(w.a,w.b,w.c,w.d),null)},
$S:21}
C.fab.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.fTw,A.ax,D.h_l,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fIC,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bz(1,A.bd,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e8(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.Fh,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bd,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e8(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.Fh,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dDK[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bw
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.ay(a0,B.o(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.n(g,a0,new B.bH(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.f2,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fa9(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c8(A.aM,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.P,new B.a5(a0,44,B.cv(m,a0,a0,a0,a0,a0,A.aM,!1),a0),A.aB],w))}v.push(B.bJ(A.Bd,a0,new C.faa(t,r,q,u,a3),a0))
return new B.D(new B.P(0,0,0,a2.f.d),B.bm(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cv(v,a0,a0,A.z4,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:109}
C.fa9.prototype={
$0(){var w=this
return w.a.$1(new C.fa8(w.b,w.c,w.d))},
$S:0}
C.fa8.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.faa.prototype={
$0(){var w=this,v=w.a
v.m(new C.fa7(v,w.b,w.c,w.d))
B.a6(w.e,!1).N(null)},
$S:0}
C.fa7.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.fam.prototype={
$0(){var w=this.a
return w.m(new C.fal(w))},
$S:0}
C.fal.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fan.prototype={
$0(){return E.uG(this.b,this.a.f,"scene")},
$S:0}
C.fao.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_X().x
w===$&&B.c()
return new B.bN(new B.n(v,v,v,v,v,new B.bT(D.b42,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c6],x.O),v,v),A.n),A.bk,v,v)},
$S:337}
C.fap.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dv(A.dJ,A.z,A.f,B.c6(new B.he(B.a([u.guO(),u.ga_X()],x.dS)),new C.fak(u,this.b,v),w),w),w,w,w)},
$S:236}
C.fak.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guO().x
r===$&&B.c()
w=r<0.9?1:1-C.bux(r,0.9,0.98)
v=s.ga_X().x
v===$&&B.c()
u=A.dI.az(0,v)
switch(s.gazv().a){case 0:s=s.bDM(t.b,r,u,t.c)
break
case 1:s=s.bUM(t.b,r,u,t.c)
break
case 2:s=s.cHK(t.b,r,u,t.c)
break
case 3:s=s.bGI(t.b,r,u,t.c)
break
case 4:s=s.bK4(t.b,r,u,t.c)
break
case 5:s=s.cce(t.b,r,u,t.c)
break
default:s=null}return B.d1(s,w)},
$S:192}
C.faq.prototype={
$2(d,e){var w=B.abz(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cQI(u,A.bw,v,3.5)
u=this.a
w=u.guO().x
w===$&&B.c()
return B.Zb(B.l0(null,null,null,1,0,new C.faj(u),A.h.D(w,0,1)),v)},
$S:2178}
C.faj.prototype={
$1(d){var w=this.a
w.guO().sp(0,d)
if(w.as)w.m(new C.faf(w))},
$S:6}
C.faf.prototype={
$0(){return this.a.as=!1},
$S:0}
C.far.prototype={
$0(){var w=this.a
w.guO().sp(0,0)
w.afu()},
$S:0}
C.fas.prototype={
$1(d){var w=this.a
w.m(new C.fai(w,d))
if(w.as)w.afu()},
$S:6}
C.fai.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fat.prototype={
$0(){var w=this.a
w.m(new C.fah(w,this.b))
w.guO().sp(0,0)
if(w.as)w.afu()},
$S:0}
C.fah.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fau.prototype={
$0(){var w=this.a
return w.m(new C.fag(w,this.b))},
$S:0}
C.fag.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fa5.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:2179}
C.fa6.prototype={
$1(d){return d.b},
$S:2180}
C.dsJ.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dsK.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dsG.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dsH.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dsI.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dsL.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dsM.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dsN.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dsO.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dsP.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dsQ.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dsR.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dsS.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dsT.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ezF.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ezu.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ezw.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ezx.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ezA.prototype={
$1(d){var w=D.n8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ezB.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.el(new B.cM(new B.Y(q,new C.ezC(d),p.k("Y<1>")),new C.ezD(r),p.k("cM<1,re?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ezC.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezD.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ezy.prototype={
$1(d){return D.n8.h(0,d.b).c===D.y4},
$S:z+55}
C.ezz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eA4.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vR(0,u)
w.a7P(A.o.aq(v,1000))},
$S:7}
C.ezE.prototype={
$0(){},
$S:0}
C.ezq.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
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
C.ezH.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n8.h(0,v).b,D.n8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.haZ,w,B.d(D.n8.h(0,v).a,w,w,w,w,w,w,A.h7,w,w,w),w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,U.atc,w,w,w,w,new C.ezG(d),!1,w,w,w,w,w,w,w,D.h2d,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:26}
C.ezG.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ezJ.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.eyJ],x.p)
for(w=0;w<6;++w){v=D.aCU[w]
u=B.d(v.a,t,t,t,t,t,t,A.h7,t,t,t)
r.push(B.dI(!1,t,t,t,!0,t,t,t,!0,t,t,D.c5B,t,t,t,t,new C.ezI(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lY,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cv(r,t,t,D.bK3,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:26}
C.ezI.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.ezt.prototype={
$1(d){var w=null
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.ezr(d),w,w),B.bP(!1,A.Fm,w,w,!0,w,w,w,new C.ezs(d),w,w)],x.p),w,w,K.md,D.h_y,w,w,w,w,D.h2w,w)},
$S:18}
C.ezr.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ezs.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eA2.prototype={
$0(){var w=this.a
return w.m(new C.eA1(w))},
$S:0}
C.eA1.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eA3.prototype={
$2(d,e){var w,v,u,t=null,s=new B.au(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nm(new C.ezT(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bf0:t
v=B.a([B.b5(u,t,t,new C.bk8(w,v,new C.ezU(r),new C.ezV(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.ds(!0,B.c6(w,new C.ezW(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bLK())
return B.ay(A.c_,B.jb(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ezX(r),t,r.gcmM(),t,new C.ezY(r),new C.ezZ(r),new C.eA_(r),t,t,t,t,t,t,t,t,t,t,new C.eA0(r),t,t,t,!1,A.a4)},
$S:36}
C.ezT.prototype={
$0(){return this.a.adr(this.b)},
$S:0}
C.eA0.prototype={
$1(d){return this.a.cFo(d.b)},
$S:63}
C.ezZ.prototype={
$1(d){return this.a.cmN(d.b)},
$S:50}
C.eA_.prototype={
$1(d){return this.a.cmO(d.b)},
$S:19}
C.ezY.prototype={
$1(d){return this.a.b4x()},
$S:37}
C.ezX.prototype={
$1(d){return this.a.ae7(d.b)},
$S:351}
C.ezU.prototype={
$0(){return this.a.z},
$S:663}
C.ezV.prototype={
$0(){return this.a.Q},
$S:629}
C.ezW.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bQ3()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.bw,A.r,1)
t=B.a([D.fXV,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aXx,q,q,q))
return B.o(q,B.x(t,A.E,q,A.e,A.N,0,A.p),A.f,q,q,new B.n(w,q,u,v,q,q,A.n),q,q,q,q,A.ho,q,q,q)},
$S:73}
C.ezv.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.o(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A.Wc,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,F.acl,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:2182}
C.ezP.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.ezQ.prototype={
$0(){var w=this.a
return w.m(new C.ezO(w))},
$S:0}
C.ezO.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ezR.prototype={
$0(){var w=this.a
return w.m(new C.ezN(w))},
$S:0}
C.ezN.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ezS.prototype={
$0(){var w=this.a
return w.m(new C.ezM(w))},
$S:0}
C.ezM.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ezL.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n8.gdQ(D.n8),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cA8(p[r]))
return new B.D(A.amt,B.x(B.a([new B.D(Y.aoc,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ezK.prototype={
$0(){return this.a.cck(this.b)},
$S:0}
C.dsF.prototype={
$0(){var w=this,v=null,u=B.fD(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dK,A.c2)
u.ep()
return u},
$S:255}
C.bQU.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bR4.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bR_.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bR5.prototype={
$1(d){return this.a.Mz(d)&&!d.x},
$S:z+0}
C.bR6.prototype={
$2(d,e){return Math.max(d,this.a.aDb(e))},
$S:z+6}
C.bR8.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bR9(w))},
$S:z+5}
C.bR9.prototype={
$0(){return this.a.a},
$S:93}
C.bR7.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:71}
C.bRa.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bRb(w))},
$S:z+5}
C.bRb.prototype={
$0(){return this.a.a},
$S:93}
C.bQW.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bQX(w))},
$S:z+5}
C.bQX.prototype={
$0(){return this.a.a},
$S:93}
C.bQV.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:71}
C.bQY.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bQZ(w))},
$S:z+5}
C.bQZ.prototype={
$0(){return this.a.a},
$S:93}
C.bQT.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bRc.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bR0.prototype={
$1(d){return d!==this.b&&this.a.aJy(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bR3.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bR2.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bR1.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bLf.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bLg.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cv1.prototype={
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
$S:195}
C.fZd.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:2183}
C.fZf.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:2184}
C.fZg.prototype={
$5(d,e,f,g,h){return B.by(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:2185}
C.fZe.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.san(new B.a7(A.aY,A.b3,A.x,B.a([e,f],x.O),null,null).aD(0,d))
return w},
$S:2186}
C.bKT.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKS(w))},
$S:0}
C.bKS.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKV.prototype={
$0(){return B.a([],x.l)},
$S:2187}
C.bKW.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:453}
C.bKX.prototype={
$0(){var w,v,u
J.bHY(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rA(v))if(C.hiK(v.b))w.b40(v)
else w.a11(v)
else{u=w.a.c.bgX(v)
w.afG(u==null?"The "+$.qH().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKR.prototype={
$1(d){return new B.e0(new C.bKO(this.a,this.b),null)},
$S:21}
C.bKO.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bKP(this.a,o,a3),m=$.qH(),l=o.b,k=m.h(0,l).d,j=A.h.U(o.ch/1.04),i=new C.bKQ(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.J,26)],f),d=B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.o(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q1,p,p,p),p,p,p),A.f,p,p,new B.n(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fXJ],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.o(p,B.d(""+A.h.U(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.n(v,p,t,u,p,p,A.n),p,p,p,p,A.lO,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dq,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.av],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.J,14)],f)
v=B.o(p,B.as(B.cU(p,B.as(new B.dv(A.dC,A.z,A.f,new B.D(A.hB,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mE,p,p,p),p),p),p,p,p),p,p,A.b0,new B.n(p,p,q,s,f,new B.a7(A.ay,A.aC,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.n(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aH(p,p,p,p,B.X(A.art,k,p,p,p,30),p,p,p,new C.bKK(n,o),p,p,p,p,p,p)
t=B.abz(a2).bgq(k,A.bw,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Zb(B.l0(p,p,p,5.2,1,n,A.h.D(o.ch,1,5.2)),t),1),B.aH(p,p,p,p,B.X(A.a3i,k,p,p,p,30),p,p,p,new C.bKL(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.o(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hu,p,p,p),1),B.bP(!1,A.aYz,p,p,!0,p,p,p,new C.bKM(a2),p,B.fr(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tb,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.n(p,p,g,h,e,D.cd_,A.n),p,p,p,A.yW,D.bGA,p,p,p),!0,!1,A.ag,!0,!0)},
$S:92}
C.bKP.prototype={
$1(d){var w=this.a
w.m(new C.bKI(this.b,d))
this.c.$1(new C.bKJ())
w.a.toString},
$S:6}
C.bKI.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bKJ.prototype={
$0(){},
$S:0}
C.bKQ.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bw
r=B.K(r,A.r,u?2:1)
return B.E(B.ay(v,B.cU(v,B.as(new B.dv(A.dJ,A.z,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.n(t,v,r,s,v,v,A.n),A.hb,v,v,v,A.j9,A.qH,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bKN(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:819}
C.bKN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKK.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bKL.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bKM.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.bLc.prototype={
$2(d,e){var w
if(d==="short"){G.dB(1800,"",120,0,0.55,"noise")
G.dB(200,"",160,2.2,0.4,"saw")
B.fO()
w=this.a
if(w.c!=null)w.afG("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dB(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afG("\u26a0 Overloaded! The "+$.qH().h(0,e.b).b+" can only give about "+A.h.ad(w.a.c.Aq(e),2)+" amps but your gadgets are asking for "+A.h.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afG("Burnt out! "+e.ay)
G.dB(140,"",320,0,0.6,"noise")
G.dB(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bLd.prototype={
$0(){},
$S:0}
C.bKi.prototype={
$0(){},
$S:0}
C.bLe.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bLb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.ay(A.c_,B.b5(p,p,p,new C.akm(w,v,u,t,s,r==null?A.jw:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bL5(o),new C.bL6(o),new C.bL7(o),p,p,p,p,p,p,p,p,p,p,new C.bL8(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bei)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cP,A.r,1)
n.push(B.ao(p,B.ay(p,B.o(p,B.A(B.a([D.fNO,B.E(B.d(w,p,p,p,p,p,p,D.fFp,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.n(D.bkr,p,u,v,p,p,A.n),p,p,p,p,A.nI,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bL9(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bMh,new E.fC(A.Db,"Cut wire",new C.bLa(o),A.bZ,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.l(18)
n.push(B.ao(8,B.o(p,o,A.f,p,p,new B.n(F.YS,p,B.K(A.bw,A.r,1),w,p,p,A.n),p,p,p,p,F.amX,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cnl(w),p,p,10,10,p,p))}}return B.jb(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:298}
C.bL6.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bb6(s)
if(r!=null){t.m(new C.bL3(t,r,d))
return}w=t.b4H(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bL4(t,w))}},
$S:50}
C.bL3.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bL4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bL7.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bL1(w,d))
else if(w.Q!=null)w.m(new C.bL2(w,d.b.a5(0,w.as)))},
$S:19}
C.bL1.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bL2.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bL5.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bb6(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.amw(u.a,u.b,v.a,v.b)!=null)G.dB(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afE()},
$S:37}
C.bL8.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b4H(u)
if(t!=null){v.m(new C.bKZ(v,t))
if(D.mv.am(0,t.b))v.cy0(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bB(v.w).a<38e4){v.m(new C.bL_(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bL0(v,v.cKV(u)))},
$S:63}
C.bKZ.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dB(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dB(200,"",70,0,0.2,"saw")}},
$S:0}
C.bL_.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bL0.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bL9.prototype={
$0(){var w=this.a
return w.m(new C.bKY(w))},
$S:0}
C.bKY.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bLa.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dB(300,"",50,0,0.35,"noise")
w.afE()},
$S:0}
C.bKj.prototype={
$0(){return this.a.bto(this.b)},
$S:0}
C.bKF.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fzr,w,w,w),B.E(B.l0(this.b.d,w,w,g,h,new C.bKH(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:2188}
C.bKH.prototype={
$1(d){var w=this.a
w.m(new C.bKG(this.b,d))
w.a.toString},
$S:6}
C.bKG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKE.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.aca,w,w,w),B.d(e,w,w,w,w,w,w,D.fCe,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,w,w,w,A.wD,w,w,w),1)},
$S:123}
C.bKq.prototype={
$0(){var w=this.a
return w.m(new C.bKp(w))},
$S:0}
C.bKp.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bKr.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dB(260,"",70,0,0.35,"noise")
w.afE()},
$S:0}
C.bKs.prototype={
$0(){var w=this.a
return w.m(new C.bKo(w))},
$S:0}
C.bKo.prototype={
$0(){return this.a.e=null},
$S:0}
C.bKw.prototype={
$0(){this.a.m(new C.bKn(this.b,this.c))
G.dB(900,"",40,0,0.3,"noise")},
$S:0}
C.bKn.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bKx.prototype={
$0(){return this.a.b40(this.b)},
$S:0}
C.bKy.prototype={
$0(){return this.a.a11(this.b)},
$S:0}
C.bKz.prototype={
$0(){return this.a.a2E(this.b)},
$S:0}
C.bKA.prototype={
$0(){var w=this.a
w.m(new C.bKm(this.b,this.c))
w.a.toString},
$S:0}
C.bKm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bKB.prototype={
$0(){var w=this.a
w.m(new C.bKl(this.b,this.c))
w.a.toString},
$S:0}
C.bKl.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bKC.prototype={
$0(){var w=this.a
w.m(new C.bKk(this.b,this.c))
w.a.toString},
$S:0}
C.bKk.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bKD.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKt.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKu.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKv.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fuU.prototype={
$1(d){return d.aJ9("bulb")},
$S:z+2}
C.fuV.prototype={
$1(d){return d.qi(0,"switch")&&d.aJ9("bulb")},
$S:z+2}
C.fuW.prototype={
$1(d){return A.d.aU(d.a,new C.fuH())},
$S:z+2}
C.fuH.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fuX.prototype={
$1(d){return d.qi(0,"resistor")&&A.d.aU(d.a,new C.fuG())},
$S:z+2}
C.fuG.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fuY.prototype={
$1(d){return!d.qi(0,"battery")&&d.aJ9("bulb")},
$S:z+2}
C.fuL.prototype={
$1(d){return A.d.aU(d.a,new C.fuF())},
$S:z+2}
C.fuF.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fuM.prototype={
$1(d){return A.d.aU(d.a,new C.fuE())},
$S:z+2}
C.fuE.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fuN.prototype={
$1(d){return A.d.aU(d.a,new C.fuD())},
$S:z+2}
C.fuD.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fuO.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.fuB())&&A.d.aU(w,new C.fuC())&&d.qi(0,"buck")},
$S:z+2}
C.fuB.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fuC.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fuP.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.fuz())&&A.d.aU(w,new C.fuA())},
$S:z+2}
C.fuz.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fuA.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fuQ.prototype={
$1(d){return A.d.aU(d.a,new C.fuy())},
$S:z+2}
C.fuy.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e2N.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e2W.prototype={
$1(d){var w=this.a.d
return w.aJy(d)&&w.rA(d)},
$S:z+0}
C.e2X.prototype={
$1(d){return d.x},
$S:z+0}
C.e2Y.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e2Z.prototype={
$0(){},
$S:0}
C.e2M.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.h4y,A.ax,D.fPF,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.SB[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.bw,1,A.r,-1)
n.push(B.ay(q,B.o(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iH,q,q,q),A.bF,B.d(u.b,q,3,A.a2,q,q,q,D.fG9,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.n(t,q,new B.bH(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e2L(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eI(q,F.mW,new B.D(A.bT,new B.a5(340,q,B.cv(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d7,q,new B.ba(p,A.a1),q)},
$S:48}
C.e2L.prototype={
$0(){B.a6(this.b,!1).N(null)
var w=this.a
w.m(new C.e2K(w,this.c))
G.dB(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e2K.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bm4()},
$S:0}
C.e2I.prototype={
$1(d){return new C.X_(this.a.d,null)},
$S:z+44}
C.e2J.prototype={
$0(){},
$S:0}
C.e2V.prototype={
$1(d){return new B.e0(new C.e2U(this.a),null)},
$S:21}
C.e2U.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajo(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.be:A.aH
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.h1H,A.b4,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.P,B.bv(B.l(4),B.kt(A.bw,m,m,5,m,w.a/11,new B.lN(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fST)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,A1.La,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.Lk,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.o(m,B.x(B.a([r,A.ax,q,new B.bK(A.a9,m,m,B.bP(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e2S(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.n(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.ack,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.ay(m,B.o(m,new B.c8(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.as,new B.bz(1,A.bd,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.n(h,m,new B.bH(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eP,A.nI,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e2T(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cv(u,m,m,A.z4,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:92}
C.e2S.prototype={
$0(){var w=this.a
w.m(new C.e2Q(w))
this.b.$1(new C.e2R())
w.FF()},
$S:0}
C.e2Q.prototype={
$0(){var w=this.a
$.ajo()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e2R.prototype={
$0(){},
$S:0}
C.e2T.prototype={
$0(){var w=this.a
w.m(new C.e2O(w,this.b))
this.c.$1(new C.e2P())
w.FF()},
$S:0}
C.e2O.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2P.prototype={
$0(){},
$S:0}
C.e30.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.e31.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.lm("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ee(new C.e3_(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e3_.prototype={
$1(d){B.lG("construction")
return A_.hYE()},
$S:z+45}
C.e32.prototype={
$0(){return E.hK2(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e33.prototype={
$0(){var w=this.a
return w.m(w.d.gd1N())},
$S:0}
C.e34.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtp(v))
w.FF()},
$S:0}
C.cMD.prototype={
$2(d,e){var w=null,v=this.a.gazD().x
v===$&&B.c()
return B.b5(w,w,w,new C.bc_(v,w),A.az)},
$S:58}
C.cMC.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+e,u))
w.E(new B.ce(v,u,v,u+e))
w.E(new B.ce(v,u,v-e,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bx())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:450}
C.h3l.prototype={
$3(d,e,f){return new C.Wg(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h3m.prototype={
$4(d,e,f,g){var w=x.a
return new B.d4(e,!1,B.ir(A.z,g,null,new B.bh(B.cG(A.ck,e,null),new B.bt(0.85,1,w),w.k("bh<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dZJ.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBK()},
$S:0}
C.dZK.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBK()},
$S:0}
C.dZU.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBK()},
$S:0}
C.dZI.prototype={
$1(d){return new L.J2(F.Sm[this.b],new C.dZH(this.a,d),null)},
$S:z+47}
C.dZH.prototype={
$0(){this.a.a=!0
B.a6(this.b,!1).eb()},
$S:0}
C.dZV.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.dZW.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dZB.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb1P():w
return B.ay(A.c_,B.b5(w,w,w,v.cmK(this.b),A.h5),A.y,!1,D.hAH,u,w,w,w,new C.dZz(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dZA(v,e),w,w,w,!1,A.a4)},
$S:36}
C.dZA.prototype={
$1(d){var w=this.b
return this.a.cFA(d.b,new B.au(B.aS(1/0,w.a,w.b),B.aS(1/0,w.c,w.d)))},
$S:63}
C.dZz.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Oa()!=null){w=v<0?1:-1
this.a.aDs(w)}},
$S:37}
C.dZS.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.l(14),t=B.K(h?g:A.aT,A.r,1)
return B.ay(w,B.o(w,B.x(B.a([B.X(d,g,w,w,w,20),A.rg,B.d(e,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,A.j9,A.kB,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:672}
C.dZO.prototype={
$0(){return this.a.aDs(-1)},
$S:0}
C.dZP.prototype={
$0(){return this.a.aDs(1)},
$S:0}
C.dZQ.prototype={
$0(){return this.a.JU(null)},
$S:0}
C.dZR.prototype={
$0(){return this.a.JU(0)},
$S:0}
C.dZX.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.dZN.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c2F(o):q.bFL(o,p),m=x.p
p=B.a([B.oC(new B.lV(n,new B.bl(p,x.bz)),A.pt,B.pX(),A.b0,A.b0,new C.dZL())],m)
n=t.d
if(n){w=A.h.F(q.gBK(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.as],m)
if(w)m.push(D.bM3)
else m.push(A.b4)
m.push(B.o(s,s,A.f,s,s,new B.n(w?A.be:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.as(B.cU(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.ed,new B.n(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AS)p.push(B.ao(s,B.as(B.o(s,s,A.f,s,s,A.Mr,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.AT)p.push(B.ao(s,B.o(s,s,A.f,s,s,A.Mr,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.ay(s,B.as(B.o(s,s,A.f,s,s,new B.n(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZM(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:412}
C.dZL.prototype={
$2(d,e){var w=x.a
return new B.d4(e,!1,B.ir(A.z,d,null,new B.bh(e,new B.bt(0.92,1,w),w.k("bh<bQ.T>"))),null)},
$S:430}
C.dZM.prototype={
$0(){return this.a.JU(null)},
$S:0}
C.dZT.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.d(A.a.b1(A.o.v(B.dg(q)),2,"0")+":"+A.a.b1(A.o.v(B.fV(q)),2,"0"),s,s,s,s,s,s,A.u4,s,s,s),A.b4],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.o(s,s,A.f,s,s,new B.n(A.c,s,s,new B.be(v,v,v,v),s,s,A.n),s,4+w*2,s,D.bKA,s,s,s,3))}q.push(A.df)
q.push(D.fWJ)
q.push(A.bn)
v=B.K(A.ab,A.r,1)
u=B.l(4)
t=this.b
q.push(B.o(s,new B.bK(A.a5,s,s,B.BV(A.z,B.o(s,s,A.f,s,s,new B.n(A.be,s,s,B.l(2),s,s,A.n),s,s,s,A.Ht,s,s,s,s),s,t/100),s),A.f,s,s,new B.n(s,s,v,u,s,s,A.n),s,12,s,s,s,s,s,26))
q.push(A.rd)
q.push(B.d(""+t+"%",s,s,s,s,s,s,D.fNp,s,s,s))
return new B.dv(A.dJ,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:321}
C.dZG.prototype={
$0(){return this.a.JU(A.d.cm(F.ik,this.b))},
$S:0}
C.dZE.prototype={
$0(){return this.a.JU(0)},
$S:0}
C.dZF.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cT(F.ik,0,B.dA(4,"count",x.S),x.gD),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=this.a,v=v.k("ak.E");w.C();){t=w.d
q.push(u.axt(t==null?v.a(t):t,50,!1))}return new B.dv(A.dJ,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.r0,A.i,0,s,s),s),s)},
$S:321}
C.dZy.prototype={
$0(){return this.a.JU(null)},
$S:0}
C.dZD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.w.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bX,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.o(n,B.A(B.a([D.han,A.as,B.E(B.d(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.eT,n,n,n,A.acF,n,n,n),1),B.d(A.a.b1(A.o.v(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b1(A.o.v(B.fV(new B.V(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rj,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.P(j,0,k,0),n,n,n)
j=B.a([B.b5(n,n,n,new C.byJ(l.gBK(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dD,x.w).w.r.b+52}else m=12
v=B.l(10)
u=B.K(A.aT,A.r,1)
t=B.l(10)
s=B.ay(n,B.o(n,n,A.f,n,n,A.afI,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dZC(l),n,n,n,n,n,n,!1,A.a4)
r=B.o(n,n,A.f,n,n,A.Yj,n,12,n,n,n,n,n,12)
q=B.ay(n,B.o(n,n,A.f,n,n,D.b9m,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbbA(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e7,r,A.e7,q,A.as,B.E(B.d(F.ik[p].a,n,1,A.a2,n,n,n,A.Wa,n,n,n),1)],w)
if(l.Oa()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.aZM(19))
s=B.o(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.ct,n,n,n,26,n,n,A.fv,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.D(new B.P(26,m,26,58),B.o(n,B.bv(t,B.x(B.a([s,B.E(l.aQ7(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.aq),A.f,n,n,new B.n(A.w,n,u,v,D.dzL,n,A.n),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.l(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.j9,l.axt(F.ik[o],34,!1),n))
j.push(B.ao(8,B.as(B.o(n,B.A(t,A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(m,n,u,v,n,n,A.n),n,n,n,n,A.lR,n,n,n),n,n,n),n,n,0,0,n,n))
return B.o(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b1,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A.a_z,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.dZC.prototype={
$0(){return this.a.JU(null)},
$S:0}
C.fvo.prototype={
$0(){return D.eoH},
$S:z+48}
C.fvp.prototype={
$0(){return D.dWs},
$S:z+49}
C.fvq.prototype={
$0(){return D.dSY},
$S:z+50}
C.fvr.prototype={
$0(){return D.dVQ},
$S:z+51}
C.fvs.prototype={
$0(){return D.e0k},
$S:z+52}
C.fvt.prototype={
$0(){return D.ekt},
$S:z+53}
C.fvu.prototype={
$0(){return D.emD},
$S:z+54}
C.fvv.prototype={
$0(){return D.e_n},
$S:z+36}
C.cnU.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.cnV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hNR(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Z.L8,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fLb,k,k,k)
l=A.c.j(0.85)
h.push(B.ay(k,B.o(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bK(A.lD,k,k,B.x(B.a([m,A.cS,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.n(k,k,k,new B.be(q,q,q,q),p,new B.a7(A.ay,A.aC,A.x,o,k,k),A.n),k,v,k,k,A.bH,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cnT(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c_(A.bI,h,A.br,k,14,14)},
$S:185}
C.cnT.prototype={
$0(){return B.a6(this.a,!1).ce(B.ee(new C.cnS(this.b),!1,null,x.H))},
$S:0}
C.cnS.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eWQ.prototype={
$0(){var w=this.a
return w.w=w.d[w.b87(w.f)]},
$S:0}
C.eWM.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cT.ai()*7},
$S:0}
C.eWL.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cg)
w.w=""},
$S:0}
C.eWO.prototype={
$0(){var w=this.a
return w.m(new C.eWN(w,this.b))},
$S:0}
C.eWN.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eWP.prototype={
$1(d){return this.a.b2p(0)},
$S:2}
C.e5M.prototype={
$0(){return C.JP("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e5N.prototype={
$0(){},
$S:0}
C.e5H.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e5J.prototype={
$0(){return this.a.b2r(this.b)},
$S:0}
C.e5K.prototype={
$0(){var w=this.a
return w.m(new C.e5I(w))},
$S:0}
C.e5I.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e5L.prototype={
$0(){var w=this.a
return w.b2r(w.d)},
$S:0}
C.dR2.prototype={
$2(d,e){return d+e},
$S:89}
C.dR3.prototype={
$0(){},
$S:0}
C.dQY.prototype={
$2(d,e){return d+e},
$S:89}
C.dR0.prototype={
$0(){var w=this.a
return w.m(new C.dR_(w,this.b))},
$S:0}
C.dR_.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dR1.prototype={
$0(){var w=this.a
return w.m(new C.dQZ(w))},
$S:0}
C.dQZ.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e2h.prototype={
$0(){return E.uG(this.b,this.a.d,"drawing")},
$S:0}
C.e2i.prototype={
$1(d){var w=this.a
return w.m(new C.e2g(w,d))},
$S:50}
C.e2g.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKI(u,v,t))},
$S:0}
C.e2j.prototype={
$1(d){var w=this.a
return w.m(new C.e2f(w,d))},
$S:19}
C.e2f.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e2k.prototype={
$1(d){var w=this.a
return w.m(new C.e2e(w,d))},
$S:23}
C.e2e.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKI(u,v,t))},
$S:0}
C.e2l.prototype={
$0(){var w=this.a
return w.m(new C.e2d(w,this.b))},
$S:0}
C.e2d.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e2m.prototype={
$1(d){var w=this.a
return w.m(new C.e2c(w,d))},
$S:6}
C.e2c.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e2n.prototype={
$0(){var w=this.a
return w.m(new C.e2b(w))},
$S:0}
C.e2b.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e2o.prototype={
$0(){var w=this.a
return w.m(new C.e2a(w))},
$S:0}
C.e2a.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
return w.m(A.d.gtp(w.e))},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
return w.m(new C.e29(w))},
$S:0}
C.e29.prototype={
$0(){var w=this.a
w.x=D.aBI[A.o.F(A.d.cm(D.aBI,w.x)+1,4)]},
$S:0}
C.ete.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.etf.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JP("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.etd(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JP("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.etd.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.etg.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.etc(w))},
$S:11}
C.etc.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.etk.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.ay(w,B.lC(new C.eti(v,e),w,A.b0,A.pt,w,w,new B.bt(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etj(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:86}
C.etj.prototype={
$0(){return this.a.ceD(this.b)},
$S:0}
C.eti.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fE(3.141592653589793*e)
m=B.l(16)
w=o?p:D.ccb
if(o)v=q.a.r.q(0,q.b)?A.be.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.be:A.aT,A.r,1)
if(o){r=B.dr()
r.fE(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.z,B.d(u[t],p,p,p,p,p,p,H.aco,p,p,p),p,r,!0)
u=r}else u=D.h3c
return B.fz(A.z,B.o(A.z,u,A.f,p,p,new B.n(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:118}
C.etl.prototype={
$0(){var w=this.a
return w.m(new C.eth(w,this.b))},
$S:0}
C.eth.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auO()},
$S:0}
C.etm.prototype={
$0(){var w=this.a
return w.m(w.gbOw())},
$S:0}
C.eE0.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eE1.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eDZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eE_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDY(w))},
$S:11}
C.eDY.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eE2.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eE3.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eE4.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b2q()},
$S:11}
C.eE5.prototype={
$0(){return this.a.ceJ(this.b)},
$S:0}
C.eSb.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:64}
C.eSk.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kB,B.A(B.a([v,A.ae,new B.df(1,A.cl,new B.dv(A.dJ,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:2189}
C.eSg.prototype={
$1(d){return this.a.m(new C.eSf())},
$S:2}
C.eSf.prototype={
$0(){},
$S:0}
C.eSh.prototype={
$0(){var w=this.a
return w.m(new C.eSe(w,this.b))},
$S:0}
C.eSe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eSi.prototype={
$1(d){var w=this.a
return w.m(new C.eSd(w,d))},
$S:6}
C.eSd.prototype={
$0(){return this.a.f=A.h.U(this.b)},
$S:0}
C.eSj.prototype={
$0(){var w=this.a
return w.m(new C.eSc(w))},
$S:0}
C.eSc.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.erU.prototype={
$0(){},
$S:0}
C.erV.prototype={
$0(){},
$S:0}
C.erN.prototype={
$0(){var w=this.a
return w.m(new C.erM(w))},
$S:0}
C.erM.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c0(u,1,!1,x.S)
w.r=0.9
E.XO("hat",0,0.6)},
$S:0}
C.erO.prototype={
$0(){var w=this.a
return w.m(new C.erL(w))},
$S:0}
C.erL.prototype={
$0(){this.a.y=1.1
E.mp("bell",36,200,0.4)},
$S:0}
C.erP.prototype={
$0(){var w=this.a
return w.m(new C.erK(w))},
$S:0}
C.erK.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mp("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.erQ.prototype={
$0(){var w=this.a
return w.m(new C.erJ(w,this.b))},
$S:0}
C.erJ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.erR.prototype={
$1(d){var w=this.a
return w.m(new C.erI(w,d))},
$S:6}
C.erI.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.U(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.erS.prototype={
$1(d){var w=this.a
return w.m(new C.erH(w,d))},
$S:6}
C.erH.prototype={
$0(){return this.a.z=A.h.U(this.b)},
$S:0}
C.erT.prototype={
$1(d){var w=this.a
return w.m(new C.erG(w,d))},
$S:6}
C.erG.prototype={
$0(){return this.a.Q=A.h.U(this.b)},
$S:0}
C.cnQ.prototype={
$0(){var w=this
return E.mp(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOO.prototype
w.bAH=w.t
w=C.aNR.prototype
w.bzI=w.t
w=C.aNS.prototype
w.bzJ=w.t
w=C.aNW.prototype
w.bzN=w.t
w=C.aPD.prototype
w.bBD=w.t
w=C.aOM.prototype
w.bAF=w.t
w=C.aA0.prototype
w.bwJ=w.t
w=C.aA1.prototype
w.bwK=w.t
w=C.aMi.prototype
w.by5=w.t
w=C.aO6.prototype
w.bzY=w.t
w=C.aNT.prototype
w.bzK=w.t
w=C.aOd.prototype
w.bA5=w.t
w=C.aOG.prototype
w.bAz=w.t
w=C.aP6.prototype
w.bB_=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGM.prototype,"gayZ","c9R",1)
v(C,"iu8","c7E",3)
var q
u(q=C.aFd.prototype,"gciZ","cj_",22)
w(q,"gcaq","b0V",1)
w(C.aFf.prototype,"gcca","ccb",1)
t(C.aFw.prototype,"gcch","cci",39)
w(q=C.aJR.prototype,"gcCz","cCA",1)
w(q,"gccj","afu",1)
w(q,"gcnv","cnw",1)
w(q,"gccg","aft",3)
w(q=C.aGL.prototype,"gbLD","aaQ",3)
w(q,"gcmM","b4x",1)
w(q,"gcqz","ai8",3)
s(q,"gccl","afv",3)
s(q=C.a5R.prototype,"gtp","a8",1)
u(q,"gd_q","apj",0)
u(q,"gcWP","Mz",0)
w(q,"gd1N","bm4",1)
r(C.akm.prototype,"gccI",0,5,null,["$5"],["qY"],41,0,0)
w(q=C.aFJ.prototype,"gccJ","ccK",1)
w(q,"gctr","aiv",3)
w(q,"gcjg","agP",3)
w(q,"gcAA","ajE",3)
w(q=C.aFz.prototype,"gc55","adH",3)
w(q,"gbbA","cH8",1)
w(q,"gb1P","ccO",1)
w(q=C.aHe.prototype,"gceE","ceF",1)
s(q,"gceC","b2p",1)
w(C.aGx.prototype,"gbOw","auO",1)
s(C.aGS.prototype,"gceG","ceH",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aJ,[C.alz,C.GY,C.vp,C.aUY,C.a4I,C.bd6,C.c7F,C.yF,C.D4,C.nH,C.bdS,C.B3,C.bwb,C.qx,C.re,C.D8,C.a_P,C.agd,C.a22,C.Dj,C.ad6,C.adn,C.afj,C.GJ,C.ej,C.tZ,C.abM,C.acT,C.a5R,C.mQ,C.bdT,C.fW,C.m1,C.bxv,C.aKI])
u(B.k8,[C.fMY,C.fBA,C.fJk,C.fJl,C.fMV,C.fMW,C.el1,C.elk,C.eAE,C.eAb,C.eAc,C.eAd,C.eAe,C.eAf,C.eAg,C.eAh,C.eAi,C.eA9,C.eAa,C.eA8,C.eAz,C.eAA,C.eAB,C.dQz,C.dQB,C.dQE,C.dQP,C.c7G,C.c7H,C.fuI,C.fuJ,C.fuK,C.fuR,C.fuS,C.fuT,C.dSB,C.dSi,C.dSC,C.dSd,C.dS8,C.dSa,C.dSg,C.dSt,C.dSr,C.dSs,C.dSq,C.dSn,C.dSp,C.fav,C.fac,C.faj,C.fas,C.fa6,C.dsJ,C.dsK,C.dsG,C.dsH,C.dsI,C.dsL,C.dsM,C.dsN,C.dsO,C.dsP,C.dsQ,C.dsR,C.dsS,C.dsT,C.ezA,C.ezB,C.ezC,C.ezD,C.ezy,C.ezz,C.eA4,C.ezH,C.ezJ,C.ezt,C.eA0,C.ezZ,C.eA_,C.ezY,C.ezX,C.ezv,C.bQU,C.bR4,C.bR_,C.bR5,C.bR7,C.bQV,C.bQT,C.bRc,C.bR0,C.bR3,C.bR2,C.bR1,C.bLf,C.fZd,C.fZg,C.fZe,C.bKW,C.bKR,C.bKP,C.bLe,C.bL6,C.bL7,C.bL5,C.bL8,C.bKF,C.bKH,C.bKD,C.bKt,C.bKu,C.bKv,C.fuU,C.fuV,C.fuW,C.fuH,C.fuX,C.fuG,C.fuY,C.fuL,C.fuF,C.fuM,C.fuE,C.fuN,C.fuD,C.fuO,C.fuB,C.fuC,C.fuP,C.fuz,C.fuA,C.fuQ,C.fuy,C.e2W,C.e2X,C.e2M,C.e2I,C.e2V,C.e3_,C.cMC,C.h3l,C.h3m,C.dZI,C.dZA,C.dZz,C.dZS,C.cnS,C.eWP,C.e2i,C.e2j,C.e2k,C.e2m,C.eti,C.eSb,C.eSk,C.eSg,C.eSi,C.erR,C.erS,C.erT])
u(B.lr,[C.fMX,C.el6,C.el4,C.eAk,C.eAx,C.dS9,C.dSw,C.dYP,C.fay,C.faz,C.fab,C.fao,C.fap,C.fak,C.faq,C.fa5,C.ezw,C.ezx,C.eA3,C.ezW,C.ezL,C.bR6,C.bR8,C.bRa,C.bQW,C.bQY,C.bLg,C.cv1,C.fZf,C.bKO,C.bKQ,C.bLc,C.bLb,C.bKE,C.e2U,C.cMD,C.dZB,C.dZN,C.dZL,C.dZT,C.dZF,C.dZD,C.cnV,C.dR2,C.dQY,C.etk])
u(B.ag,[C.X_,C.Xn,C.VP,C.VW,C.Om,C.aJQ,C.Xm,C.akk,C.Wx,C.azG,C.Wg,C.XV,C.WF,C.VQ,C.Ww,C.Xh,C.Xr,C.XM,C.Xf])
u(B.ah,[C.bng,C.aOO,C.aNR,C.aNW,C.aFw,C.aPD,C.aOM,C.aA0,C.bAH,C.aMi,C.aO6,C.aP6,C.aOd,C.aNT,C.bmI,C.aGx,C.aGS,C.bnY,C.aOG])
u(B.lR,[C.el_,C.el0,C.elc,C.eld,C.el8,C.el7,C.el9,C.el5,C.ela,C.el3,C.elb,C.el2,C.elg,C.elf,C.elh,C.ele,C.eli,C.elj,C.ell,C.eAD,C.eAF,C.eAG,C.eAm,C.eAl,C.eAj,C.eAs,C.eAt,C.eAp,C.eAu,C.eAo,C.eAv,C.eAw,C.eAn,C.eAy,C.eAr,C.eAC,C.eAq,C.dQW,C.dQV,C.dQw,C.dQx,C.dQy,C.dQX,C.dQA,C.dQC,C.dQD,C.dQF,C.dQt,C.dQu,C.dQv,C.dQM,C.dQN,C.dQO,C.dQL,C.dQQ,C.dQK,C.dQR,C.dQJ,C.dQS,C.dQI,C.dQT,C.dQH,C.dQU,C.dQG,C.dSf,C.dSe,C.dSj,C.dSb,C.dSc,C.dSk,C.dSl,C.dSm,C.dSh,C.dS7,C.dSv,C.dSu,C.dSx,C.dSy,C.dSz,C.dSo,C.dSA,C.cXk,C.dYN,C.dYM,C.dYO,C.fv8,C.fv9,C.fva,C.fvb,C.fvc,C.fvd,C.fve,C.fvf,C.fvg,C.fax,C.faw,C.fae,C.fad,C.fa9,C.fa8,C.faa,C.fa7,C.fam,C.fal,C.fan,C.faf,C.far,C.fai,C.fat,C.fah,C.fau,C.fag,C.ezF,C.ezu,C.ezE,C.ezq,C.ezG,C.ezI,C.ezr,C.ezs,C.eA2,C.eA1,C.ezT,C.ezU,C.ezV,C.ezP,C.ezQ,C.ezO,C.ezR,C.ezN,C.ezS,C.ezM,C.ezK,C.dsF,C.bR9,C.bRb,C.bQX,C.bQZ,C.bKT,C.bKU,C.bKS,C.bKV,C.bKX,C.bKI,C.bKJ,C.bKN,C.bKK,C.bKL,C.bKM,C.bLd,C.bKi,C.bL3,C.bL4,C.bL1,C.bL2,C.bKZ,C.bL_,C.bL0,C.bL9,C.bKY,C.bLa,C.bKj,C.bKG,C.bKq,C.bKp,C.bKr,C.bKs,C.bKo,C.bKw,C.bKn,C.bKx,C.bKy,C.bKz,C.bKA,C.bKm,C.bKB,C.bKl,C.bKC,C.bKk,C.e2N,C.e2Y,C.e2Z,C.e2L,C.e2K,C.e2J,C.e2S,C.e2Q,C.e2R,C.e2T,C.e2O,C.e2P,C.e30,C.e31,C.e32,C.e33,C.e34,C.dZJ,C.dZK,C.dZU,C.dZH,C.dZV,C.dZW,C.dZO,C.dZP,C.dZQ,C.dZR,C.dZX,C.dZM,C.dZG,C.dZE,C.dZy,C.dZC,C.fvo,C.fvp,C.fvq,C.fvr,C.fvs,C.fvt,C.fvu,C.fvv,C.cnU,C.cnT,C.eWQ,C.eWM,C.eWL,C.eWO,C.eWN,C.e5M,C.e5N,C.e5H,C.e5J,C.e5K,C.e5I,C.e5L,C.dR3,C.dR0,C.dR_,C.dR1,C.dQZ,C.e2h,C.e2g,C.e2f,C.e2e,C.e2l,C.e2d,C.e2c,C.e2n,C.e2b,C.e2o,C.e2a,C.e2p,C.e2q,C.e29,C.ete,C.etf,C.etd,C.etg,C.etc,C.etj,C.etl,C.eth,C.etm,C.eE0,C.eE1,C.eDZ,C.eE_,C.eDY,C.eE2,C.eE3,C.eE4,C.eE5,C.eSf,C.eSh,C.eSe,C.eSd,C.eSj,C.eSc,C.erU,C.erV,C.erN,C.erM,C.erO,C.erL,C.erP,C.erK,C.erQ,C.erJ,C.erI,C.erH,C.erG,C.cnQ])
t(C.bAU,C.aOO)
t(C.aGM,C.bAU)
u(B.oE,[C.bka,C.be9,C.bvz,C.bcP,C.bu9,C.btz,C.bdv,C.btB,C.bxF,C.bk8,C.akm,C.bc_,C.byJ,C.ag6,C.byV,C.btA,C.boK])
t(C.aNS,C.aNR)
t(C.aFd,C.aNS)
t(C.bAE,C.aNW)
t(C.aFf,C.bAE)
u(B.ol,[C.Lk,C.a1Q,C.Kj])
u(B.av,[C.buy,C.agp,C.afg,C.Rj,C.bv4,C.a9M,C.bgg])
t(C.aJR,C.aPD)
t(C.bk7,B.pj)
t(C.aGL,C.aOM)
t(C.aA1,C.aA0)
t(C.akl,C.aA1)
t(C.aFJ,C.bAH)
t(C.bc0,C.aMi)
t(C.aFz,C.aO6)
t(C.bB0,C.aP6)
t(C.aHe,C.bB0)
t(C.bAJ,C.aOd)
t(C.bmR,C.bAJ)
t(C.bAD,C.aNT)
t(C.bmq,C.bAD)
t(C.bAS,C.aOG)
t(C.bns,C.bAS)
w(C.aOO,B.cf)
w(C.bAU,E.nF)
w(C.aNR,B.cf)
w(C.aNS,E.nF)
w(C.aNW,B.cf)
w(C.bAE,E.nF)
w(C.aPD,B.eO)
w(C.aOM,B.cf)
w(C.aA0,B.cf)
w(C.aA1,E.nF)
w(C.aMi,B.cf)
v(C.bAH,B.eG)
w(C.aO6,B.cf)
w(C.aNT,B.cf)
w(C.bAD,E.nF)
w(C.aOd,B.cf)
w(C.bAJ,E.nF)
w(C.aOG,B.cf)
w(C.bAS,E.nF)
w(C.aP6,B.cf)
w(C.bB0,E.nF)})()
B.ng(b.typeUniverse,JSON.parse('{"X_":{"ag":[],"v":[]},"bng":{"ah":["X_"]},"Xn":{"ag":[],"v":[]},"aGM":{"ah":["Xn"]},"bka":{"aB":[]},"VP":{"ag":[],"v":[]},"aFd":{"ah":["VP"]},"VW":{"ag":[],"v":[]},"aFf":{"ah":["VW"]},"be9":{"aB":[]},"agp":{"av":[],"v":[]},"afg":{"av":[],"v":[]},"aJQ":{"ag":[],"v":[]},"Om":{"ag":[],"v":[]},"aFw":{"ah":["Om"]},"buy":{"av":[],"v":[]},"Rj":{"av":[],"v":[]},"bvz":{"aB":[]},"bv4":{"av":[],"v":[]},"bcP":{"aB":[]},"aJR":{"ah":["aJQ"]},"bu9":{"aB":[]},"btz":{"aB":[]},"bdv":{"aB":[]},"btB":{"aB":[]},"bxF":{"aB":[]},"Xm":{"ag":[],"v":[]},"bk7":{"aB":[]},"aGL":{"ah":["Xm"]},"bk8":{"aB":[]},"akm":{"aB":[]},"akk":{"ag":[],"v":[]},"akl":{"ah":["akk"]},"Wx":{"ag":[],"v":[]},"azG":{"ag":[],"v":[]},"aFJ":{"ah":["Wx"],"eG":[]},"bc0":{"ah":["azG"]},"bc_":{"aB":[]},"Wg":{"ag":[],"v":[]},"aFz":{"ah":["Wg"]},"byJ":{"aB":[]},"ag6":{"aB":[]},"a9M":{"av":[],"v":[]},"XV":{"ag":[],"v":[]},"WF":{"ag":[],"v":[]},"VQ":{"ag":[],"v":[]},"Ww":{"ag":[],"v":[]},"Xh":{"ag":[],"v":[]},"Xr":{"ag":[],"v":[]},"XM":{"ag":[],"v":[]},"Xf":{"ag":[],"v":[]},"aHe":{"ah":["XV"]},"byV":{"aB":[]},"bmR":{"ah":["WF"]},"btA":{"aB":[]},"bmq":{"ah":["VQ"]},"bmI":{"ah":["Ww"]},"boK":{"aB":[]},"aGx":{"ah":["Xh"]},"aGS":{"ah":["Xr"]},"bnY":{"ah":["XM"]},"bns":{"ah":["Xf"]},"bgg":{"av":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.aC
return{c:w("lN<u?>"),G:w("u"),J:w("bq<q,F>"),Q:w("di<q>"),Z:w("a_"),M:w("R<d7>"),R:w("R<akc>"),h:w("R<a4I>"),V:w("R<ac>"),O:w("R<u>"),l:w("R<V>"),D:w("R<aA<aJ>>"),x:w("R<a_>"),E:w("R<ai<q>>"),b:w("R<ai<F>>"),U:w("R<ai<H?>>"),B:w("R<aa<q,aJ>>"),g:w("R<r>"),F:w("R<tZ>"),v:w("R<hl>"),eZ:w("R<+(q,q)>"),fT:w("R<+(F,v)>"),I:w("R<+(H,q)>"),u:w("R<+(H,H)>"),r:w("R<+(q,q,a_)>"),e:w("R<+(q,F,F,H)>"),o:w("R<+(q,H,q,H)>"),d:w("R<+(q,q,F,F,aa<q,F>)>"),_:w("R<vp>"),fQ:w("R<abM>"),s:w("R<q>"),cF:w("R<at>"),X:w("R<Gi>"),p:w("R<v>"),bL:w("R<acT>"),fH:w("R<lE>"),a_:w("R<ad6>"),cB:w("R<nH>"),ba:w("R<adn>"),eW:w("R<D8>"),fY:w("R<a_P>"),ac:w("R<afj>"),cd:w("R<Dj>"),fr:w("R<agd>"),e4:w("R<a22>"),au:w("R<aKI>"),f7:w("R<Q>"),n:w("R<F>"),t:w("R<H>"),dS:w("R<aB?>"),fs:w("R<tZ?>"),bN:w("R<H?>"),gJ:w("cy<akl>"),A:w("cy<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aJ>"),j:w("ai<@>"),P:w("aa<q,@>"),f:w("aa<@,@>"),bd:w("N<ej,q>"),fR:w("N<+(F,v),v>"),w:w("jY"),gA:w("zQ"),gD:w("wq"),k:w("cw"),K:w("aJ"),Y:w("tZ"),C:w("ej"),N:w("q"),bO:w("at"),a:w("bt<F>"),W:w("bl<q>"),bz:w("bl<H?>"),dg:w("el<re>"),m:w("bd6"),a2:w("D4"),f3:w("re"),es:w("GJ"),q:w("nI"),y:w("Q"),i:w("F"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aJ?"),T:w("q?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b42=new B.d7(0,0.1)
D.b5Y=new C.aUY(0,0,0)
D.Ml=new C.aUY(0,0.5,0)
D.b6z=new B.ax(A.be,1,A.r,-1)
D.b87=new B.aY(16,1/0,16,1/0)
D.b8i=new B.aY(0,1/0,0,210)
D.bqi=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dzY=w([D.bqi,A0.ajX],x.O)
D.eGd=new B.bT(A.Bv,1.1,A.x,null,0,D.dzY,null,null)
D.b8q=new B.n(null,null,null,null,null,D.eGd,A.n)
D.b9m=new B.n(A.bi,null,null,null,null,null,A.a6)
D.fz_=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbM=new B.C("\u26a1",null,D.fz_,null,null,null,null,null,null,null,null,null)
D.be7=new B.ck(A.z,null,null,D.hbM,null)
D.aXs=new B.G(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1c=new B.C("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aXs,null,A.K,null,null,null,null,null,null,null)
D.eyo=new B.D(A.nL,D.h1c,null)
D.bei=new B.ck(A.z,null,null,D.eyo,null)
D.fRY=new B.C("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aXs,null,A.K,null,null,null,null,null,null,null)
D.ezg=new B.D(A.Ho,D.fRY,null)
D.bf0=new B.ck(A.z,null,null,D.ezg,null)
D.agI=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.biV=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bjb=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bkr=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bky=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bkV=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bmW=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bo1=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.boL=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aj4=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bpN=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ajt=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.a_5=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.brL=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bs2=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ak0=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.btP=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.btX=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bus=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.ws=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bwD=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.alu=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bCt=new B.bf(11e6)
D.bEl=new B.P(10,6,10,2)
D.bEn=new B.P(10,8,0,10)
D.bF1=new B.P(12,8,6,10)
D.bF4=new B.P(12,8,8,8)
D.bFb=new B.P(14,0,14,22)
D.bFd=new B.P(14,0,14,30)
D.bGh=new B.P(16,4,16,28)
D.bGA=new B.P(18,10,18,16)
D.bJq=new B.P(4,4,8,2)
D.bK3=new B.P(8,14,8,12)
D.bKe=new B.P(8,6,8,8)
D.bKA=new B.P(0,0,1.5,0)
D.b5K=new B.HY(26,"saturation")
D.bKT=new B.uQ(A.cC,D.b5K,null,A.YO)
D.bKU=new B.fT(A.G,11)
D.bKY=new B.fT(A.G,30)
D.fR_=new B.C("REACTION LAB",null,Q.aY5,null,null,null,null,A.a2,null,1,null,null)
D.bL6=new B.bz(1,A.bd,D.fR_,null)
D.fV6=new B.C("\ud83d\udce2 NGMY Ads",null,A.rj,null,null,null,null,A.eT,null,1,null,null)
D.bM3=new B.bz(1,A.bd,D.fV6,null)
D.fPG=new B.C("Wire selected",null,A.h7,null,null,null,null,null,null,null,null,null)
D.bMh=new B.bz(1,A.bd,D.fPG,null)
D.aqv=new B.a_(62712,"MaterialIcons",!1)
D.bSu=new B.a_(62908,"MaterialIcons",!1)
D.bUc=new B.a_(983122,"MaterialIcons",!1)
D.bUr=new B.a_(983247,"MaterialIcons",!1)
D.bUG=new B.a_(983443,"MaterialIcons",!1)
D.bUZ=new B.a_(983616,"MaterialIcons",!1)
D.bUb=new B.a_(983117,"MaterialIcons",!1)
D.bYF=new B.ae(D.bUb,28,A.c,null,null,null)
D.bYW=new B.ae(A.jb,18,null,null,null,null)
D.c07=new B.ae(A.nO,null,A.ab,null,null,null)
D.c0h=new B.ae(A.a4k,21,A.ab,null,null,null)
D.c18=new B.ae(A.eK,17,A.ab,null,null,null)
D.c3Z=new B.ae(A.jb,21,A.ab,null,null,null)
D.c4v=new B.ae(A.ej,20,A.bZ,null,null,null)
D.c5B=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dxz=w([A.dh,A.d9,A.dh],x.O)
D.c8Z=new B.a7(A.a5,A.a9,A.x,D.dxz,null,null)
D.d8l=w([A.bO,A.bj],x.O)
D.c96=new B.a7(A.aY,A.b3,A.x,D.d8l,null,null)
D.c9k=new B.a7(A.aY,A.b3,A.x,A.a6Z,null,null)
D.aud=new B.a7(A.aY,A.b3,A.x,N.a68,null,null)
D.d5R=w([A.pf,A.iw],x.O)
D.ca8=new B.a7(A.aY,A.b3,A.x,D.d5R,null,null)
D.d84=w([A.cR,A.av],x.O)
D.aul=new B.a7(A.aY,A.b3,A.x,D.d84,null,null)
D.dr3=w([A.d_,A.iO,A.bj],x.O)
D.car=new B.a7(A.a5,A.a9,A.x,D.dr3,null,null)
D.dr9=w([A.cy,A.ct],x.O)
D.caM=new B.a7(A.aY,A.b3,A.x,D.dr9,null,null)
D.aEn=w([A.cR,M.mX],x.O)
D.cb2=new B.a7(A.aY,A.b3,A.x,D.aEn,null,null)
D.cbk=new B.a7(A.aY,A.b3,A.x,A.auH,null,null)
D.ccb=new B.a7(A.ay,A.aC,A.x,A.Sn,null,null)
D.dig=w([A.av,A.w],x.O)
D.ccm=new B.a7(A.aY,A.b3,A.x,D.dig,null,null)
D.ccp=new B.a7(A.aY,A.b3,A.x,H.aDE,null,null)
D.bum=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bvg=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cRz=w([A.NM,D.bum,D.bvg],x.O)
D.ccz=new B.a7(A.aY,A.b3,A.x,D.cRz,null,null)
D.cEQ=w([A.d6,A.iL],x.O)
D.ccN=new B.a7(A.aY,A.b3,A.x,D.cEQ,null,null)
D.by2=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cFB=w([F.agQ,D.by2],x.O)
D.cd_=new B.a7(A.aY,A.b3,A.x,D.cFB,null,null)
D.cdB=w([0,4,7],x.t)
D.cdC=w([0,4,7,12],x.t)
D.cdD=w([0,4,7,4],x.t)
D.aDk=w([A.h9,A.rR],x.O)
D.aCQ=w([A.fK,A.cW],x.O)
D.aB8=w([A.bh,A.dN],x.O)
D.d_o=w([A.aQ,A.d6],x.O)
D.dst=w([A.c4,A.lF],x.O)
D.aAz=w([A.cP,A.k1],x.O)
D.d4C=w([A.bP,A.aL],x.O)
D.ce0=w([D.aDk,D.aCQ,A.a6d,D.aB8,D.d_o,A.aBo,A.aCk,D.dst,D.aAz,D.d4C],B.aC("R<ai<u>>"))
D.ciI=w([120,220,380],x.t)
D.cms=w([12,16,19,24],x.t)
D.cmC=w([1400,800,450,2400],x.t)
D.cv5=w([250,450,900,1500],x.t)
D.bid=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.buN=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bst=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.byD=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bry=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.azP=w([D.bid,D.buN,D.bst,D.byD,D.bry],x.O)
D.cMq=w([50,25,75],x.t)
D.cS7=w([0,5,10,15,18,20,25],x.t)
D.d_H=w([900,500,250,1600],x.t)
D.d3S=w([A.bh,A.bE,A.ba,A.bh],x.O)
D.a63=w([A.aA,A.bt,A.bi,A.aH,A.oq],x.O)
D.d5t=w([A.av,A.aA,A.cP,A.bt,A.bi,A.cF,A.cj,A.bE,A.Z8],x.O)
D.a66=w([0.04,0.17,0.3],x.n)
D.fil=new C.vp("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fir=new C.vp("Medium engine","A good all-rounder.",0.3,0.9)
D.fiq=new C.vp("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.IS=w([D.fil,D.fir,D.fiq],x._)
D.eMb=new B.y(6,"Easy")
D.eMY=new B.y(8,"Medium")
D.eHN=new B.y(10,"Hard")
D.d75=w([D.eMb,D.eMY,D.eHN],x.I)
D.aBx=w([0.55,0.78,1],x.n)
D.aBI=w([A.c,A.fZ,A.ph,A.av],x.O)
D.aBQ=w([A.bi,A.aA,A.bt,A.d9],x.O)
D.fii=new C.vp("Radar","Shows your height above the ground.",0.1,0)
D.fij=new C.vp("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fig=new C.vp("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aBY=w([D.fii,D.fij,D.fig],x._)
D.ddw=w([47,100,220,470,1000],x.n)
D.JY={volts:0}
D.a7Z=new B.bq(D.JY,[3],x.J)
D.Ko=new B.dX(["b","battery",0.2,0.3,D.a7Z])
D.esa={on:0}
D.dIV=new B.bq(D.esa,[1],x.J)
D.EY=new B.dX(["s","switch",0.5,0.3,D.dIV])
D.ffV=new B.dX(["l","bulb",0.8,0.3,A.jw])
D.d8u=w([D.Ko,D.EY,D.ffV],x.d)
D.EW=new B.b7(["b",0,"s",0])
D.feP=new B.b7(["s",1,"l",0])
D.aSY=new B.b7(["l",1,"b",1])
D.drg=w([D.EW,D.feP,D.aSY],x.o)
D.d7V=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eGV=new C.mQ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d8u,D.drg,D.d7V)
D.aMM={ohms:0}
D.aKm=new B.bq(D.aMM,[220],x.J)
D.ffj=new B.dX(["r","resistor",0.5,0.3,D.aKm])
D.fgb=new B.dX(["d","led",0.8,0.3,A.jw])
D.duB=w([D.Ko,D.ffj,D.fgb],x.d)
D.fe3=new B.b7(["b",0,"r",0])
D.feJ=new B.b7(["r",1,"d",0])
D.fea=new B.b7(["d",1,"b",1])
D.dEn=w([D.fe3,D.feJ,D.fea],x.o)
D.dv4=w(["led","diode","indicator"],x.s)
D.eH1=new C.mQ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.duB,D.dEn,D.dv4)
D.a9t={level:0}
D.dIh=new B.bq(D.a9t,[0.2],x.J)
D.ffq=new B.dX(["p","pot",0.5,0.3,D.dIh])
D.ffs=new B.dX(["m","motor",0.8,0.3,A.jw])
D.d8P=w([D.Ko,D.ffq,D.ffs],x.d)
D.fe2=new B.b7(["b",0,"p",0])
D.feE=new B.b7(["p",1,"m",0])
D.feA=new B.b7(["m",1,"b",1])
D.dzH=w([D.fe2,D.feE,D.feA],x.o)
D.dqW=w(["fan","motor","spin","dimmer"],x.s)
D.eGT=new C.mQ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d8P,D.dzH,D.dqW)
D.a7W=new B.bq(D.a9t,[0.9],x.J)
D.aT6=new B.dX(["s","solar",0.25,0.3,D.a7W])
D.aT5=new B.dX(["l","bulb",0.75,0.3,A.jw])
D.dbO=w([D.aT6,D.aT5],x.d)
D.feM=new B.b7(["s",0,"l",0])
D.fex=new B.b7(["l",1,"s",1])
D.d9F=w([D.feM,D.fex],x.o)
D.dAs=w(["solar","sun","without battery","no battery","free"],x.s)
D.eGW=new C.mQ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dbO,D.d9F,D.dAs)
D.fgg=new B.dX(["c","crank",0.25,0.3,D.a7W])
D.dp6=w([D.fgg,D.aT5],x.d)
D.fe6=new B.b7(["c",0,"l",0])
D.few=new B.b7(["l",1,"c",1])
D.dpK=w([D.fe6,D.few],x.o)
D.dpg=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eGS=new C.mQ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dp6,D.dpK,D.dpg)
D.dIg=new B.bq(D.a9t,[0.7],x.J)
D.ffx=new B.dX(["t","turbine",0.25,0.3,D.dIg])
D.ffh=new B.dX(["m","motor",0.75,0.3,A.jw])
D.diZ=w([D.ffx,D.ffh],x.d)
D.feX=new B.b7(["t",0,"m",0])
D.feB=new B.b7(["m",1,"t",1])
D.dhV=w([D.feX,D.feB],x.o)
D.dnN=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eGP=new C.mQ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.diZ,D.dhV,D.dnN)
D.aKj=new B.bq(D.JY,[9],x.J)
D.aaz=new B.dX(["b","battery",0.2,0.3,D.aKj])
D.aT3=new B.dX(["r","radio",0.8,0.3,A.jw])
D.dB3=w([D.aaz,D.EY,D.aT3],x.d)
D.feR=new B.b7(["s",1,"r",0])
D.aT_=new B.b7(["r",1,"b",1])
D.cdf=w([D.EW,D.feR,D.aT_],x.o)
D.dzs=w(["radio","music","listen"],x.s)
D.eH0=new C.mQ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dB3,D.cdf,D.dzs)
D.dJk=new B.bq(D.JY,[12],x.J)
D.aT2=new B.dX(["b","battery",0.2,0.3,D.dJk])
D.ffW=new B.dX(["t","tv",0.8,0.3,A.jw])
D.d8w=w([D.aT2,D.EY,D.ffW],x.d)
D.feS=new B.b7(["s",1,"t",0])
D.aT0=new B.b7(["t",1,"b",1])
D.dsw=w([D.EW,D.feS,D.aT0],x.o)
D.dB1=w(["tv","television","screen","watch"],x.s)
D.eGM=new C.mQ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d8w,D.dsw,D.dB1)
D.ffL=new B.dX(["z","buzzer",0.8,0.3,A.jw])
D.cON=w([D.Ko,D.EY,D.ffL],x.d)
D.feT=new B.b7(["s",1,"z",0])
D.ffa=new B.b7(["z",1,"b",1])
D.d30=w([D.EW,D.feT,D.ffa],x.o)
D.dxG=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eGY=new C.mQ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cON,D.d30,D.dxG)
D.ffr=new B.dX(["h","heater",0.8,0.3,A.jw])
D.dmp=w([D.aaz,D.EY,D.ffr],x.d)
D.feO=new B.b7(["s",1,"h",0])
D.fej=new B.b7(["h",1,"b",1])
D.d3N=w([D.EW,D.feO,D.fej],x.o)
D.cyp=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eGN=new C.mQ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dmp,D.d3N,D.cyp)
D.ffY=new B.dX(["s","solar",0.2,0.25,D.a7W])
D.dJp=new B.bq(D.aMM,[100],x.J)
D.fg0=new B.dX(["r","resistor",0.55,0.25,D.dJp])
D.fg9=new B.dX(["c","capacitor",0.85,0.25,A.jw])
D.ffn=new B.dX(["q","resistor",0.55,0.6,D.aKm])
D.ffZ=new B.dX(["d","led",0.85,0.6,A.jw])
D.ds_=w([D.ffY,D.fg0,D.fg9,D.ffn,D.ffZ],x.d)
D.feN=new B.b7(["s",0,"r",0])
D.feI=new B.b7(["r",1,"c",0])
D.fe8=new B.b7(["c",1,"s",1])
D.fe7=new B.b7(["c",0,"q",0])
D.feH=new B.b7(["q",1,"d",0])
D.feb=new B.b7(["d",1,"c",1])
D.dfH=w([D.feN,D.feI,D.fe8,D.fe7,D.feH,D.feb],x.o)
D.doo=w(["capacitor","store","charge","flash"],x.s)
D.eH_=new C.mQ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.ds_,D.dfH,D.doo)
D.ffA=new B.dX(["b","battery",0.15,0.3,D.a7Z])
D.fgi=new B.dX(["l1","bulb",0.5,0.3,A.jw])
D.ffI=new B.dX(["l2","bulb",0.85,0.3,A.jw])
D.d6v=w([D.ffA,D.fgi,D.ffI],x.d)
D.fe1=new B.b7(["b",0,"l1",0])
D.fet=new B.b7(["l1",1,"l2",0])
D.feu=new B.b7(["l2",1,"b",1])
D.djN=w([D.fe1,D.fet,D.feu],x.o)
D.dAM=w(["series","two bulbs","dim"],x.s)
D.eGQ=new C.mQ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d6v,D.djN,D.dAM)
D.esw={volts:0,charge:1}
D.dJs=new B.bq(D.esw,[1.5,0],x.J)
D.fg6=new B.dX(["b","battery",0.75,0.3,D.dJs])
D.d5S=w([D.aT6,D.fg6],x.d)
D.feL=new B.b7(["s",0,"b",0])
D.fe5=new B.b7(["b",1,"s",1])
D.dg0=w([D.feL,D.fe5],x.o)
D.doy=w(["charge","rechargeable","flat","recharge"],x.s)
D.eGO=new C.mQ("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d5S,D.dg0,D.doy)
D.dJj=new B.bq(D.JY,[4.5],x.J)
D.fft=new B.dX(["b","battery",0.2,0.3,D.dJj])
D.aT1=new B.dX(["p","phone",0.8,0.3,A.jw])
D.diO=w([D.fft,D.EY,D.aT1],x.d)
D.feQ=new B.b7(["s",1,"p",0])
D.aay=new B.b7(["p",1,"b",1])
D.dww=w([D.EW,D.feQ,D.aay],x.o)
D.dy7=w(["phone","charger","usb","mobile"],x.s)
D.eGU=new C.mQ("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.diO,D.dww,D.dy7)
D.ffe=new B.dX(["f","fan",0.8,0.3,A.jw])
D.cqt=w([D.Ko,D.ffe],x.d)
D.fe0=new B.b7(["b",0,"f",0])
D.feh=new B.b7(["f",1,"b",1])
D.d4n=w([D.fe0,D.feh],x.o)
D.dqV=w(["fan","cool","air","wind"],x.s)
D.eH2=new C.mQ("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cqt,D.d4n,D.dqV)
D.ffP=new B.dX(["b","battery",0.15,0.2,D.a7Z])
D.fff=new B.dX(["a","ammeter",0.5,0.2,A.jw])
D.ffd=new B.dX(["l","bulb",0.85,0.2,A.jw])
D.ffR=new B.dX(["v","voltmeter",0.5,0.6,A.jw])
D.doW=w([D.ffP,D.fff,D.ffd,D.ffR],x.d)
D.fdZ=new B.b7(["b",0,"a",0])
D.fdY=new B.b7(["a",1,"l",0])
D.feZ=new B.b7(["v",0,"l",0])
D.ff_=new B.b7(["v",1,"l",1])
D.dfS=w([D.fdZ,D.fdY,D.aSY,D.feZ,D.ff_],x.o)
D.dEm=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eGZ=new C.mQ("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.doW,D.dfS,D.dEm)
D.fgl=new B.dX(["b","battery",0.15,0.2,D.aKj])
D.ffz=new B.dX(["t","tv",0.55,0.2,A.jw])
D.aKk=new B.bq(D.JY,[5],x.J)
D.ffk=new B.dX(["c","buck",0.4,0.5,D.aKk])
D.ffB=new B.dX(["p","phone",0.8,0.5,A.jw])
D.ddh=w([D.fgl,D.ffz,D.ffk,D.ffB],x.d)
D.fe4=new B.b7(["b",0,"t",0])
D.aSW=new B.b7(["b",0,"c",0])
D.aSX=new B.b7(["c",1,"p",0])
D.diL=w([D.fe4,D.aT0,D.aSW,D.aSX,D.aay],x.o)
D.dbl=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eGR=new C.mQ("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.ddh,D.diL,D.dbl)
D.ffm=new B.dX(["c","buck",0.5,0.3,D.aKk])
D.d3B=w([D.aT2,D.ffm,D.aT1],x.d)
D.d9_=w([D.aSW,D.aSX,D.aay],x.o)
D.cBV=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eGL=new C.mQ("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d3B,D.d9_,D.cBV)
D.ffG=new B.dX(["d","diode",0.5,0.3,A.jw])
D.dk1=w([D.aaz,D.ffG,D.aT3],x.d)
D.fe_=new B.b7(["b",0,"d",0])
D.fec=new B.b7(["d",1,"r",0])
D.cRl=w([D.fe_,D.fec,D.aT_],x.o)
D.db_=w(["diode","protect","backwards","one way"],x.s)
D.eGX=new C.mQ("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dk1,D.cRl,D.db_)
D.SB=w([D.eGV,D.eH1,D.eGT,D.eGW,D.eGS,D.eGP,D.eH0,D.eGM,D.eGY,D.eGN,D.eH_,D.eGQ,D.eGO,D.eGU,D.eH2,D.eGZ,D.eGR,D.eGL,D.eGX],B.aC("R<mQ>"))
D.hOD=new C.GY("Moon",1.62,A.d_,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hOB=new C.GY("Mars",3.71,A.aA,"Mars has about 38 percent of Earth's gravity.")
D.hOE=new C.GY("Mercury",3.7,A.kx,"Mercury is small, so its gravity is like Mars.")
D.hOy=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hOA=new C.GY("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hOC=new C.GY("Neptune",11.15,A.d9,"Neptune pulls a little harder than Earth.")
D.hOz=new C.GY("Jupiter",24.79,A.cP,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tw=w([D.hOD,D.hOB,D.hOE,D.hOy,D.hOA,D.hOC,D.hOz],B.aC("R<GY>"))
D.dfF=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dgq=w([0.2,0.5,0.8],x.n)
D.b2L=new C.Lk(0,"accordion")
D.d4K=w([A.jM,A.zK,A.zv],x.x)
D.dcH=w(["Mail","SMS","Ad"],x.s)
D.d5l=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hMN=new C.B3(D.b2L,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aDk,D.d4K,D.dcH,D.d5l)
D.aen=new C.Lk(1,"flip")
D.doi=w([A.qU,A.DB,A.tq],x.x)
D.diu=w(["Unlock","Verify","Secure"],x.s)
D.d3w=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hMM=new C.B3(D.aen,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCQ,D.doi,D.diu,D.d3w)
D.b2M=new C.Lk(2,"towers")
D.dhc=w([A.zI,A.pC,A.ii],x.x)
D.dgK=w(["Save","Grow","Earn"],x.s)
D.cSj=w(["","",""],x.s)
D.hMO=new C.B3(D.b2M,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6d,D.dhc,D.dgK,D.cSj)
D.aeo=new C.Lk(3,"assemble")
D.dpk=w([A.oO,A.hp,A.e9],x.x)
D.dc0=w(["Launch","Charge","Shine"],x.s)
D.dlq=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hMQ=new C.B3(D.aeo,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aB8,D.dpk,D.dc0,D.dlq)
D.b2N=new C.Lk(4,"carousel")
D.dp7=w([A.ba,A.fn],x.O)
D.dcQ=w([A.n5,A.aqT,A.Qj],x.x)
D.d6W=w(["Explore","Discover","Learn"],x.s)
D.diU=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hML=new C.B3(D.b2N,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dp7,D.dcQ,D.d6W,D.diU)
D.b2O=new C.Lk(5,"burst")
D.dgF=w([A.hM,A.ut],x.O)
D.d5e=w([A.kc,A.ml,A.hE],x.x)
D.d5D=w(["Cheer","Win","Love"],x.s)
D.d82=w(["Make some noise","First place","Share the joy"],x.s)
D.hMP=new C.B3(D.b2O,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dgF,D.d5e,D.d5D,D.d82)
D.aCv=w([D.hMN,D.hMM,D.hMO,D.hMQ,D.hML,D.hMP],B.aC("R<B3>"))
D.f8H=new B.b3("skin","Skin",A.a3B)
D.fan=new B.b3("muscle","Muscles",A.PW)
D.fa0=new B.b3("organ","Organs",A.hE)
D.bSa=new B.a_(62747,"MaterialIcons",!1)
D.fa9=new B.b3("bone","Skeleton",D.bSa)
D.fav=new B.b3("vessel","Blood vessels",A.pG)
D.dhi=w([D.f8H,D.fan,D.fa0,D.fa9,D.fav],x.r)
D.fik=new C.vp("Simple legs","Light. Land gently.",0.15,0.2)
D.fim=new C.vp("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fip=new C.vp("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DX=w([D.fik,D.fim,D.fip],x._)
D.fdy=new B.b7(["beat",0.18,0.28,0])
D.feU=new B.b7(["burst",0.7,0.2,0])
D.ff4=new B.b7(["delay",0.45,0.5,1])
D.feD=new B.b7(["ripple",0.75,0.6,3])
D.dbJ=w([D.fdy,D.feU,D.ff4,D.feD],x.e)
D.dnA=w([A.l8,N.Kn,F.V8],x.u)
D.hLy=new C.GJ("First spark","A clock lights a burst and a ripple",D.dbJ,D.dnA)
D.feg=new B.b7(["beat",0.15,0.3,1])
D.fbP=new B.b7(["ripple",0.62,0.15,0])
D.ff0=new B.b7(["delay",0.4,0.45,0])
D.fdU=new B.b7(["ripple",0.7,0.45,0])
D.fdt=new B.b7(["delay",0.4,0.7,1])
D.feF=new B.b7(["shake",0.75,0.75,0])
D.dC0=w([D.feg,D.fbP,D.ff0,D.fdU,D.fdt,D.feF],x.e)
D.eIV=new B.y(2,4)
D.aSD=new B.y(4,5)
D.dfu=w([A.l8,N.Kn,F.V8,D.eIV,D.aSD],x.u)
D.hLA=new C.GJ("Heartbeat","Two thumps, then a shake",D.dC0,D.dfu)
D.fdE=new B.b7(["dice",0.15,0.7,1])
D.ff6=new B.b7(["echo",0.4,0.7,0])
D.fdQ=new B.b7(["comet",0.7,0.5,4])
D.feV=new B.b7(["burst",0.72,0.2,1])
D.fed=new B.b7(["burst",0.3,0.25,0])
D.fdF=new B.b7(["pop",0.55,0.85,0])
D.cxW=w([D.fdE,D.ff6,D.fdQ,D.feV,D.fed,D.fdF],x.e)
D.eIe=new B.y(1,3)
D.eIf=new B.y(1,4)
D.aSz=new B.y(0,5)
D.dp2=w([A.l8,O.vN,D.eIe,D.eIf,D.aSz],x.u)
D.hLz=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cxW,D.dp2)
D.fdM=new B.b7(["beat",0.15,0.2,2])
D.feq=new B.b7(["chance",0.4,0.2,0])
D.fdB=new B.b7(["ball",0.7,0.12,3])
D.fdm=new B.b7(["chance",0.4,0.5,1])
D.ff5=new B.b7(["ball",0.3,0.08,1])
D.fcE=new B.b7(["ripple",0.7,0.55,3])
D.cqW=w([D.fdM,D.feq,D.fdB,D.fdm,D.ff5,D.fcE],x.e)
D.eIW=new B.y(2,5)
D.cOx=w([A.l8,O.vN,N.aaq,F.V9,D.eIW],x.u)
D.hLx=new C.GJ("Rain","Balls fall at random and splash",D.cqW,D.cOx)
D.fer=new B.b7(["beat",0.12,0.45,2])
D.feW=new B.b7(["toggle",0.38,0.2,0])
D.ff2=new B.b7(["wash",0.7,0.15,4])
D.fdD=new B.b7(["count3",0.38,0.45,0])
D.feY=new B.b7(["burst",0.72,0.4,0])
D.fee=new B.b7(["light",0.55,0.7,1])
D.fdn=new B.b7(["pop",0.8,0.8,4])
D.drY=w([D.fer,D.feW,D.ff2,D.fdD,D.feY,D.fee,D.fdn],x.e)
D.eJs=new B.y(3,6)
D.cu5=w([A.l8,O.vN,N.aaq,F.V9,D.aSz,D.eJs],x.u)
D.hLv=new C.GJ("Disco","A beat drives lights, washes and bursts",D.drY,D.cu5)
D.ff9=new B.b7(["button",0.12,0.2,0])
D.fd4=new B.b7(["delay",0.34,0.2,1])
D.ff8=new B.b7(["light",0.56,0.2,1])
D.ff1=new B.b7(["delay",0.56,0.45,1])
D.fes=new B.b7(["ball",0.34,0.6,0])
D.fdl=new B.b7(["delay",0.34,0.8,1])
D.fbF=new B.b7(["burst",0.7,0.8,5])
D.ce3=w([D.ff9,D.fd4,D.ff8,D.ff1,D.fes,D.fdl,D.fbF],x.e)
D.eLH=new B.y(5,6)
D.dxQ=w([A.l8,O.vN,F.V8,F.V9,D.aSD,D.eLH],x.u)
D.hLw=new C.GJ("Domino","Tap the button and watch it run down the line",D.ce3,D.dxQ)
D.aCU=w([D.hLy,D.hLA,D.hLz,D.hLx,D.hLv,D.hLw],B.aC("R<GJ>"))
D.dmR=w([0.05,0.15,0.25],x.n)
D.dnM=w([1.5,3,4.5,9,12],x.n)
D.f7_=new B.b3("dice","Dice",A.nM)
D.f8e=new B.b3("coin","Coin",P.zC)
D.faq=new B.b3("num","Number",A.x4)
D.do0=w([D.f7_,D.f8e,D.faq],x.r)
D.do4=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aD_=w([A.bZ,A.aQ,A.be,A.aH,A.bh,A.c4,A.cP,A.fK],x.O)
D.dp8=w([A.c4,A.aH,A.ex,A.be],x.O)
D.dqc=w([],x.h)
D.eA2=new C.ej("battery","Battery","\ud83d\udd0b",A.be,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eA8=new C.ej("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eAN=new C.ej("crank","Hand crank","\ud83d\udd04",A.cP,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eAp=new C.ej("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ezV=new C.ej("buck","Step-down converter","\ud83d\udd3d",A.fK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eAn=new C.ej("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eAS=new C.ej("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eAz=new C.ej("ldr","Light sensor","\ud83c\udf1e",A.ex,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eAd=new C.ej("switch","Switch","\ud83c\udf9a\ufe0f",A.bh,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eAP=new C.ej("fuse","Fuse","\ud83e\uddef",A.bZ,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ezN=new C.ej("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eAA=new C.ej("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eAC=new C.ej("bulb","Light bulb","\ud83d\udca1",A.ex,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eAa=new C.ej("led","LED","\ud83d\udd34",A.aA,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eAe=new C.ej("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eAw=new C.ej("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eA3=new C.ej("heater","Heater","\ud83d\udd25",A.cP,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eAr=new C.ej("capacitor","Capacitor","\ud83e\udeab",A.cs,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eAj=new C.ej("radio","Radio","\ud83d\udcfb",A.oq,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eAg=new C.ej("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ezU=new C.ej("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eA0=new C.ej("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eA6=new C.ej("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eAU=new C.ej("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eAJ=new C.ej("clock","Digital clock","\u23f0",A.be,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eAm=new C.ej("calculator","Calculator","\ud83e\uddee",A.MO,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eA_=new C.ej("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cs,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eAT=new C.ej("router","WiFi router","\ud83d\udcf6",A.fK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eAW=new C.ej("siren","Siren","\ud83d\udea8",A.aA,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ezQ=new C.ej("toycar","Toy car","\ud83d\ude97",A.cP,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eAX=new C.ej("kettle","Kettle","\ud83e\uded6",A.mV,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ezY=new C.ej("lamp","Desk lamp","\ud83e\ude94",A.ex,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eA9=new C.ej("lights","Party lights","\ud83c\udf84",A.oq,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eAk=new C.ej("fridge","Fridge","\ud83e\uddca",A.ha,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ezS=new C.ej("washer","Washing machine","\ud83e\udee7",A.cs,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eAK=new C.ej("blender","Blender","\ud83e\udd64",A.bZ,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eAh=new C.ej("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ezX=new C.ej("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eAl=new C.ej("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eAH=new C.ej("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ezT=new C.ej("microwave","Microwave","\ud83c\udf72",A.cP,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eAB=new C.ej("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eA5=new C.ej("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eAv=new C.ej("console","Game console","\ud83c\udfae",A.bh,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eAM=new C.ej("heartmon","Heart monitor","\ud83e\ude7a",A.hv,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ezR=new C.ej("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eAq=new C.ej("lighthouse","Lighthouse","\ud83d\uddfc",A.ex,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eAy=new C.ej("discoball","Disco ball","\ud83e\udea9",A.oq,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eAR=new C.ej("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ezP=new C.ej("toaster","Toaster","\ud83c\udf5e",A.e3,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eAV=new C.ej("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eAG=new C.ej("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eAs=new C.ej("hairdryer","Hair dryer","\ud83d\udca8",A.hM,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eAE=new C.ej("headphones","Headphones","\ud83c\udfa7",A.bh,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ezZ=new C.ej("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eAQ=new C.ej("tablet","iPad Pro M5","\ud83d\udcf2",A.cs,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ezM=new C.ej("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hv,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eAi=new C.ej("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eAb=new C.ej("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eAx=new C.ej("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.up,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ezO=new C.ej("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eA1=new C.ej("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d9,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eAO=new C.ej("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cF,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eAt=new C.ej("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bi,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eAo=new C.ej("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eAF=new C.ej("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aA,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eAc=new C.ej("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.be,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eAu=new C.ej("honor","Honor Magic V5","\ud83d\udcf1",A.cs,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eAD=new C.ej("vivo","vivo X300 Pro","\ud83d\udcf1",A.cP,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eAI=new C.ej("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ezL=new C.ej("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eAf=new C.ej("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cF,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eA7=new C.ej("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ezW=new C.ej("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.ex,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eA4=new C.ej("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aA,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eAL=new C.ej("vision","Apple Vision Pro","\ud83e\udd7d",A.bh,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.T_=w([D.eA2,D.eA8,D.eAN,D.eAp,D.ezV,D.eAn,D.eAS,D.eAz,D.eAd,D.eAP,D.ezN,D.eAA,D.eAC,D.eAa,D.eAe,D.eAw,D.eA3,D.eAr,D.eAj,D.eAg,D.ezU,D.eA0,D.eA6,D.eAU,D.eAJ,D.eAm,D.eA_,D.eAT,D.eAW,D.ezQ,D.eAX,D.ezY,D.eA9,D.eAk,D.ezS,D.eAK,D.eAh,D.ezX,D.eAl,D.eAH,D.ezT,D.eAB,D.eA5,D.eAv,D.eAM,D.ezR,D.eAq,D.eAy,D.eAR,D.ezP,D.eAV,D.eAG,D.eAs,D.eAE,D.ezZ,D.eAQ,D.ezM,D.eAi,D.eAb,D.eAx,D.ezO,D.eA1,D.eAO,D.eAt,D.eAo,D.eAF,D.eAc,D.eAu,D.eAD,D.eAI,D.ezL,D.eAf,D.eA7,D.ezW,D.eA4,D.eAL],B.aC("R<ej>"))
D.dqQ=w([5,10,15,25,45,60],x.t)
D.drd=w([-0.045,0.03,-0.015],x.n)
D.aDs=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vr=w([0.05,0.2,0.35],x.n)
D.baG=new B.ac(0,A.G,A.hO,A.dM,6)
D.du1=w([D.baG],x.V)
D.eHn=new B.y(0,"AND")
D.eIh=new B.y(1,"Adder")
D.eIX=new B.y(2,"Blinker")
D.eJt=new B.y(3,"Memory")
D.duP=w([D.eHn,D.eIh,D.eIX,D.eJt],x.I)
D.aDF=w([-104,0,104],x.n)
D.aDH=w([-14,3],x.n)
D.dvO=w([-8,0,8],x.n)
D.aDQ=w([-92,0,92],x.n)
D.dwe=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fih=new C.vp("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fio=new C.vp("Medium tank","Balanced.",0.35,1)
D.fin=new C.vp("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Td=w([D.fih,D.fio,D.fin],x._)
D.nV=w([0.04,0.2,0.36],x.n)
D.aE1=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fa_=new B.b3(D.b2L,"Fold",P.arO)
D.f8X=new B.b3(D.aen,"Flip",A.Df)
D.bSr=new B.a_(62889,"MaterialIcons",!1)
D.fam=new B.b3(D.b2M,"Rise",D.bSr)
D.as0=new B.a_(983870,"MaterialIcons",!1)
D.f6k=new B.b3(D.aeo,"Assemble",D.as0)
D.f6x=new B.b3(D.b2N,"Spin",D.aqv)
D.f6r=new B.b3(D.b2O,"Pop",A.kc)
D.dxN=w([D.fa_,D.f8X,D.fam,D.f6k,D.f6x,D.f6r],B.aC("R<+(Lk,q,a_)>"))
D.aE6=w([A.c4,A.ex,A.bv,A.aH,A.bh,A.bZ],x.O)
D.dyd=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dzi=w([3,4.5,5,6,9],x.n)
D.bbl=new B.ac(0,A.G,A.b5,A.J,16)
D.dzL=w([D.bbl],x.V)
D.h_r=new B.C("\ud83e\uddcd",null,O.Ld,null,null,null,null,null,null,null,null,null)
D.cd3=new B.IV(5,null,null,A.bw,A.c4,null,null,null,null)
D.fpl=new B.a5(150,null,D.cd3,null)
D.fHD=new B.G(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2K=new B.C("Getting the body ready...",null,D.fHD,null,null,null,null,null,null,null,null,null)
D.h_u=new B.C("Real 3D anatomy, kept on your phone",null,A.B7,null,null,null,null,null,null,null,null,null)
D.dzO=w([D.h_r,A.aB,D.fpl,A.af,D.h2K,A.ax,D.h_u],x.p)
D.dAn=w(["solar","turbine","crank","pot"],x.s)
D.dAQ=w([0,0.35,0.75,1],x.n)
D.dCf=w(["volts","level","ohms","on"],x.s)
D.dDK=w([A.jM,A.zK,A.zv,A.qU,A.DB,A.tq,A.zI,A.pC,A.ii,A.oO,A.hp,A.e9,A.hE,A.i0,A.ml,A.kC,A.vd,A.qX,A.lr,A.HR,A.vc,A.De,A.Dc,A.Qg,A.HQ,A.Dp,A.PW,A.arf,H.arX,A.kc],x.x)
D.epV={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hDN=new C.yF("Switch",F.oL,A.bt,0,"Tap it to turn it ON or OFF.")
D.hDJ=new C.yF("Blinker",A.oK,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hDK=new C.yF("AND",D.as0,A.cs,2,"ON only when BOTH inputs are ON.")
D.bTZ=new B.a_(63671,"MaterialIcons",!1)
D.hDI=new C.yF("OR",D.bTZ,A.bh,2,"ON when EITHER input is ON.")
D.hDL=new C.yF("XOR",A.a3t,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hDF=new C.yF("NAND",A.uY,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bT2=new B.a_(63176,"MaterialIcons",!1)
D.hDG=new C.yF("NOR",D.bT2,A.fK,2,"ON only when BOTH inputs are OFF.")
D.hDH=new C.yF("NOT",A.Dt,A.cP,1,"Flips the signal: ON becomes OFF.")
D.hDM=new C.yF("Light",A.lp,A.ex,1,"Glows when its input is ON.")
D.hDO=new C.yF("Buzzer",A.oN,A.bZ,1,"Beeps while its input is ON.")
D.Ao=new B.bq(D.epV,[D.hDN,D.hDJ,D.hDK,D.hDI,D.hDL,D.hDF,D.hDG,D.hDH,D.hDM,D.hDO],B.aC("bq<q,yF>"))
D.erH={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.AR=new C.Kj(0,"tv")
D.fjR=new C.m1("Samsung Neo QLED 8K",D.AR,F.yv,A.aH)
D.fjH=new C.m1("LG OLED evo G5",D.AR,A.eo,A.hv)
D.fjy=new C.m1("Sony Bravia 9",D.AR,A.rD,A.bu)
D.fjC=new C.m1("Apple TV 4K",D.AR,A.dY,A.bO)
D.fjz=new C.m1("Bang and Olufsen Beovision",D.AR,F.BV,F.up)
D.aaK=new C.Kj(1,"iphone")
D.aTs=new C.m1("iPhone 18 Pro Max",D.aaK,D.alu,A.cj)
D.AT=new C.Kj(3,"fold")
D.byj=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fjM=new C.m1("iPhone Fold",D.AT,D.byj,A.b8)
D.AS=new C.Kj(2,"android")
D.fjN=new C.m1("Samsung Galaxy S26 Ultra",D.AS,F.YU,A.d9)
D.bqC=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fjF=new C.m1("Samsung Galaxy Z Fold7",D.AT,D.bqC,A.cF)
D.fjB=new C.m1("Google Pixel 10 Pro XL",D.AS,A.d_,A.bi)
D.fjJ=new C.m1("Xiaomi 16 Ultra",D.AS,A.ic,A.c9)
D.fjE=new C.m1("Huawei Mate 80 Pro Max",D.AS,A.er,A.aA)
D.fjA=new C.m1("OPPO Find X9 Ultra",D.AS,A.ec,A.be)
D.fjT=new C.m1("Honor Magic V5",D.AT,A.dh,A.cs)
D.fjG=new C.m1("vivo X300 Pro",D.AS,A.h_,A.cP)
D.aTt=new C.Kj(4,"tablet")
D.fjL=new C.m1("iPad Pro M5",D.aTt,A.d_,A.aH)
D.aaL=new C.Kj(5,"reader")
D.fjU=new C.m1("Kindle Scribe",D.aaL,A.cR,A.bu)
D.xv=new C.Kj(6,"computer")
D.fjK=new C.m1("MacBook Pro M5 Max",D.xv,A.d_,A.cj)
D.fjQ=new C.m1("iMac 32 inch",D.xv,A.bO,A.cF)
D.fjI=new C.m1("Pro Display XDR 8K",D.xv,A.ic,A.ba)
D.fjD=new C.m1("Sony Laser Projector",D.xv,A.ct,A.ex)
D.fjO=new C.m1("Luxury car touchscreen",D.xv,M.mX,A.aA)
D.fjS=new C.m1("Apple Vision Pro",D.xv,A.cy,A.bh)
D.fjP=new C.m1("Apple Watch Ultra",D.AT,F.BV,A.bv)
D.mv=new B.bq(D.erH,[D.fjR,D.fjH,D.fjy,D.fjC,D.fjz,D.aTs,D.fjM,D.fjN,D.fjF,D.fjB,D.fjJ,D.fjE,D.fjA,D.fjT,D.fjG,D.fjL,D.fjU,D.fjK,D.fjQ,D.fjI,D.fjD,D.fjO,D.fjS,D.fjP],B.aC("bq<q,m1>"))
D.d45=w([A.z],x.M)
D.d4v=w([A.ay,A.aC],x.M)
D.det=w([A.ay,A.z,A.aC],x.M)
D.dg6=w([A.ay,A.lC,A.z,A.lD,A.aC],x.M)
D.duL=w([A.ay,A.lC,A.a5,A.a9,A.lD,A.aC],x.M)
D.dIK=new B.d_([1,D.d45,2,D.d4v,3,D.det,4,A.aEG,5,D.dg6,6,D.duL],B.aC("d_<H,ai<d7>>"))
D.est={Calm:0,Box:1,Sleep:2}
D.cLT=w([4,2,6,0],x.n)
D.cM_=w([4,4,4,4],x.n)
D.cM0=w([4,7,8,0],x.n)
D.TH=new B.bq(D.est,[D.cLT,D.cM_,D.cM0],B.aC("bq<q,ai<F>>"))
D.eq7={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.y4=new C.a1Q(0,"source")
D.dfx=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hKb=new C.qx("Clock",A.oK,D.y4,A.bv,D.dfx)
D.hK7=new C.qx("Button",A.Dw,D.y4,A.aQ,A.Z)
D.dzu=w(["random","quick","slow"],x.s)
D.hKi=new C.qx("Dice",A.nM,D.y4,A.c4,D.dzu)
D.bTC=new B.a_(63484,"MaterialIcons",!1)
D.FE=new C.a1Q(1,"logic")
D.dEC=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hKe=new C.qx("Delay",D.bTC,D.FE,A.cs,D.dEC)
D.dqX=w(["fast","mid","slow"],x.s)
D.hKj=new C.qx("Echo",A.aru,D.FE,A.bh,D.dqX)
D.hKg=new C.qx("Every 2nd",A.Dt,D.FE,A.fK,A.Z)
D.bTi=new B.a_(63309,"MaterialIcons",!1)
D.hKd=new C.qx("Every 3rd",D.bTi,D.FE,A.aH,A.Z)
D.cdm=w(["50%","25%","75%"],x.s)
D.hKl=new C.qx("Chance",W.as2,D.FE,A.cP,D.cdm)
D.rr=new C.a1Q(2,"out")
D.hK9=new C.qx("Light",A.lp,D.rr,A.ex,A.Z)
D.hKa=new C.qx("Burst",A.kc,D.rr,A.c4,A.Z)
D.hK8=new C.qx("Ripple",A.zP,D.rr,A.ba,A.Z)
D.hKh=new C.qx("Ball",A.arG,D.rr,A.cP,A.Z)
D.hKf=new C.qx("Comet",A.oO,D.rr,A.bh,A.Z)
D.bV5=new B.a_(983669,"MaterialIcons",!1)
D.hKk=new C.qx("Shake",D.bV5,D.rr,A.bZ,A.Z)
D.hKm=new C.qx("Pop",A.Da,D.rr,A.be,A.Z)
D.hKc=new C.qx("Wash",A.Q_,D.rr,A.pm,A.Z)
D.n8=new B.bq(D.eq7,[D.hKb,D.hK7,D.hKi,D.hKe,D.hKj,D.hKg,D.hKd,D.hKl,D.hK9,D.hKa,D.hK8,D.hKh,D.hKf,D.hKk,D.hKm,D.hKc],B.aC("bq<q,qx>"))
D.equ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bB7=new C.fW(20,4,13,!1)
D.bBy=new C.fW(14,5,13.5,!1)
D.bBp=new C.fW(9,2.4,10,!1)
D.bBD=new C.fW(7,5,12.5,!1)
D.bBs=new C.fW(8,3.5,12,!1)
D.bB3=new C.fW(15,2,6,!1)
D.bBB=new C.fW(45,6,13.5,!0)
D.bBj=new C.fW(10,8,13.5,!1)
D.bBb=new C.fW(25,3,12,!0)
D.bBh=new C.fW(35,4,12,!0)
D.bBi=new C.fW(40,4.5,9.5,!0)
D.bBk=new C.fW(55,3,9,!0)
D.bB4=new C.fW(18,3,9,!1)
D.bBA=new C.fW(22,4,13.5,!1)
D.bBt=new C.fW(16,5,13.5,!1)
D.bBf=new C.fW(30,4,9,!0)
D.bBM=new C.fW(5,3.5,13,!1)
D.bBn=new C.fW(25,3,13.5,!0)
D.bBw=new C.fW(14,2.5,9,!1)
D.bBm=new C.fW(6,6,13,!1)
D.bBE=new C.fW(30,1.2,5,!0)
D.bBL=new C.fW(35,3,4.5,!0)
D.bBH=new C.fW(20,4.5,7.5,!0)
D.bBl=new C.fW(55,5.5,13.5,!0)
D.bB2=new C.fW(45,5.5,13.5,!0)
D.bBx=new C.fW(40,5.5,13.5,!0)
D.bBK=new C.fW(60,6,13.5,!0)
D.am_=new C.fW(28,4,7,!0)
D.H4=new C.fW(25,4,7,!0)
D.bBe=new C.fW(30,4,7,!0)
D.bB9=new C.fW(22,4,7,!0)
D.bBa=new C.fW(24,4,7,!0)
D.bBo=new C.fW(60,3,5.5,!0)
D.bB5=new C.fW(18,9,14,!0)
D.bBc=new C.fW(25,9,14,!0)
D.am0=new C.fW(30,8,14,!0)
D.bB8=new C.fW(20,8,14,!0)
D.bBg=new C.fW(30,9,14,!0)
D.bBF=new C.fW(22,5,9.5,!0)
D.bB6=new C.fW(30,2.5,10.5,!0)
D.bBu=new C.fW(50,5.5,13.5,!0)
D.bBJ=new C.fW(12,2,9.5,!1)
D.bBr=new C.fW(16,1.3,9.5,!0)
D.bBC=new C.fW(40,2.5,7,!0)
D.bBI=new C.fW(60,1.2,4.8,!0)
D.bBG=new C.fW(18,5,13.5,!0)
D.bBz=new C.fW(8,2,9.5,!1)
D.bBq=new C.fW(12,2.5,8,!1)
D.bBd=new C.fW(20,3.5,13.5,!0)
D.bBv=new C.fW(3.5,3,13,!1)
D.Ap=new B.bq(D.equ,[D.bB7,D.bBy,D.bBp,D.bBD,D.bBs,D.bB3,D.bBB,D.bBj,D.bBb,D.bBh,D.bBi,D.bBk,D.bB4,D.bBA,D.bBt,D.bBf,D.bBM,D.bBn,D.bBw,D.bBm,D.bBE,D.bBL,D.bBH,D.bBl,D.bB2,D.bBx,D.bBK,D.am_,D.H4,D.bBe,D.H4,D.bB9,D.H4,D.bBa,D.am_,D.H4,D.bBo,D.bB5,D.bBc,D.am0,D.bB8,D.bBg,D.bBF,D.bB6,D.bBu,D.bBJ,D.bBr,D.bBC,D.bBI,D.H4,D.am0,D.bBG,D.bBz,D.bBq,D.bBd,D.bBv],B.aC("bq<q,fW>"))
D.eq4={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f5Q=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eLE=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eLz=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eY8=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eZ5=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eY4=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eJC=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eW_=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f5Y=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eZr=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eP3=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eJg=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eO5=new B.y("Movement","They pull your legs together and help you balance.")
D.eQ1=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eLN=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f3f=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f4r=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eVL=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f4a=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eUj=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eZz=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eJn=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eQp=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eZe=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eUF=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f4i=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eXz=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eJA=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f_a=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f2T=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f0Z=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eHA=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eXh=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eXl=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eR9=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eM4=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ePQ=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eWa=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f1P=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f5V=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eZw=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eHf=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eWm=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eI9=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f24=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f3b=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eWO=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f2j=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eJp=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f3P=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eNs=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f1s=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eQO=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eUz=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eZR=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f3Z=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f3R=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f3V=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eV7=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f_L=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f0W=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f3B=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eWN=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eST=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eRB=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eXb=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eZK=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eTp=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eU6=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eNQ=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f37=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eOF=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eI6=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eR8=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eI1=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eMx=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eRd=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eOO=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f_6=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eQ4=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f5C=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eRL=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eV_=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eXH=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eOW=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eOH=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dJS=new B.bq(D.eq4,[D.f5Q,D.eLE,D.eLz,D.eY8,D.eZ5,D.eY4,D.eJC,D.eW_,D.f5Y,D.eZr,D.eP3,D.eJg,D.eO5,D.eQ1,D.eLN,D.f3f,D.f4r,D.eVL,D.f4a,D.eUj,D.eZz,D.eJn,D.eQp,D.eZe,D.eUF,D.f4i,D.eXz,D.eJA,D.f_a,D.f2T,D.f0Z,D.eHA,D.eXh,D.eXl,D.eR9,D.eM4,D.ePQ,D.eWa,D.f1P,D.f5V,D.eZw,D.eHf,D.eWm,D.eI9,D.f24,D.f3b,D.eWO,D.f2j,D.eJp,D.f3P,D.eNs,D.f1s,D.eQO,D.eUz,D.eZR,D.f3Z,D.f3R,D.f3V,D.eV7,D.f_L,D.f0W,D.f3B,D.eWN,D.eST,D.eRB,D.eXb,D.eZK,D.eTp,D.eU6,D.eNQ,D.f37,D.eOF,D.eI6,D.eR8,D.eI1,D.eMx,D.eRd,D.eOO,D.f_6,D.eQ4,D.f5C,D.eRL,D.eV_,D.eXH,D.eOW,D.eOH],B.aC("bq<q,+(q,q)>"))
D.dSL=new C.VP(null)
D.dSY=new C.VQ(null)
D.dV1=new C.VW(null)
D.dVQ=new C.Ww(null)
D.dVU=new C.Wx(null)
D.dWs=new C.WF(null)
D.e_n=new C.Xf(null)
D.e0k=new C.Xh(null)
D.e4x=new C.Xm(null)
D.ekq=new C.Xn(null)
D.ekt=new C.Xr(null)
D.emD=new C.XM(null)
D.emE=new C.a9M(null)
D.eoH=new C.XV(null)
D.esH=new B.r(0,118)
D.aMS=new B.r(0,13)
D.esI=new B.r(0,17)
D.esL=new B.r(0,330)
D.esS=new B.r(0,-13)
D.esT=new B.r(0,-17)
D.esU=new B.r(0,-18)
D.esV=new B.r(0,-19)
D.esX=new B.r(0,-28)
D.esZ=new B.r(0,-31)
D.et_=new B.r(0,-32)
D.et5=new B.r(-9.5,-11)
D.et8=new B.r(10,20)
D.etb=new B.r(10,-13)
D.etd=new B.r(10,-22)
D.ete=new B.r(10,-4)
D.eti=new B.r(11,0)
D.a9z=new B.r(11,8)
D.eto=new B.r(12,2)
D.etp=new B.r(14,0)
D.etq=new B.r(14,12)
D.aN3=new B.r(14,8)
D.etr=new B.r(14,-17)
D.aN5=new B.r(14,-3)
D.aN6=new B.r(14,-4)
D.etu=new B.r(15,0)
D.etv=new B.r(15,-12)
D.ety=new B.r(16,-8)
D.etz=new B.r(18,14)
D.etA=new B.r(18,-12)
D.aNc=new B.r(20,0)
D.etI=new B.r(20,15)
D.etJ=new B.r(20,-17)
D.etK=new B.r(20,-3)
D.etL=new B.r(21,8)
D.etP=new B.r(22,10)
D.aNe=new B.r(22,8)
D.etQ=new B.r(24,0)
D.etR=new B.r(24,2)
D.etU=new B.r(24,-18)
D.etV=new B.r(24,-22)
D.etZ=new B.r(25,8)
D.eu_=new B.r(26,0)
D.eu3=new B.r(28,-30)
D.eua=new B.r(30,18)
D.eub=new B.r(30,2)
D.eue=new B.r(31,19)
D.eug=new B.r(32,0)
D.aNi=new B.r(34,0)
D.aNj=new B.r(34,-32)
D.K1=new B.r(36,0)
D.eut=new B.r(3,-1)
D.euw=new B.r(40,3)
D.euK=new B.r(4,11)
D.euN=new B.r(4,-2)
D.euR=new B.r(5,0)
D.euS=new B.r(5,17)
D.euT=new B.r(5,6)
D.euY=new B.r(6,11)
D.ev4=new B.r(8,7)
D.ev5=new B.r(8,-10)
D.ev6=new B.r(8,-14)
D.aNo=new B.r(9,0)
D.evg=new B.r(-20.5,-17.6)
D.evh=new B.r(-9,18.5)
D.evk=new B.r(-2.6,-1)
D.evt=new B.r(2.6,1)
D.evB=new B.r(-9,12.2)
D.evV=new B.r(-9,20.5)
D.ewf=new B.r(-10,0)
D.ewg=new B.r(-10,12)
D.aNv=new B.r(-10,4)
D.ewk=new B.r(-11,0)
D.ewn=new B.r(-11,-2)
D.ewr=new B.r(-13,-5)
D.ews=new B.r(-14,0)
D.ewt=new B.r(-14,13)
D.ewu=new B.r(-14,2)
D.ewv=new B.r(-14,-12)
D.eww=new B.r(-14,-19)
D.ewy=new B.r(-14,-23)
D.ewz=new B.r(-15,6)
D.ewC=new B.r(-16,14)
D.ewE=new B.r(-16,-8)
D.ewF=new B.r(-17,10)
D.ewG=new B.r(-17,-18)
D.ewH=new B.r(-17,-8)
D.ewJ=new B.r(-18,20)
D.ewK=new B.r(-18,-9)
D.aNx=new B.r(-20,0)
D.ewM=new B.r(-20,16)
D.ewN=new B.r(-20,-9)
D.UD=new B.r(-22,8)
D.ewO=new B.r(-22,-10)
D.ewP=new B.r(-22,-11)
D.ewQ=new B.r(-24,10)
D.ewR=new B.r(-24,11)
D.ewS=new B.r(-24,14)
D.ewT=new B.r(-24,-22)
D.ewV=new B.r(-25,-11)
D.ewW=new B.r(-26,0)
D.ewX=new B.r(-26,-18)
D.ewY=new B.r(-2,9)
D.ewZ=new B.r(-2,-10)
D.ex_=new B.r(-2,-20)
D.ex2=new B.r(-2,-9)
D.ex4=new B.r(-32,0)
D.aNz=new B.r(-34,0)
D.ex9=new B.r(-40,3)
D.exb=new B.r(-4,11)
D.exc=new B.r(-4,-17)
D.exd=new B.r(-4,-2)
D.exh=new B.r(-5,0)
D.exi=new B.r(-5,20)
D.exj=new B.r(-5,6)
D.exk=new B.r(-6,26)
D.exl=new B.r(-6,6)
D.exm=new B.r(-6,-42)
D.exo=new B.r(-7,-19)
D.exp=new B.r(-7,-24)
D.exs=new B.r(-8,-9)
D.a9I=new B.r(-9,0)
D.ext=new B.r(-9,1)
D.exv=new B.r(-9,-23)
D.fRF=new B.C("Thinking\u2026",null,A.hu,null,null,null,null,null,null,null,null,null)
D.eyv=new B.D(A.jK,D.fRF,null)
D.h7x=new B.C("Start from a ready-made board",null,A.fF,null,null,null,null,null,null,null,null,null)
D.eyJ=new B.D(A.wG,D.h7x,null)
D.bJc=new B.P(4,0,4,14)
D.fMN=new B.G(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSF=new B.C("Games and little helpers for a spare minute.",null,D.fMN,null,null,null,null,null,null,null,null,null)
D.eyV=new B.D(D.bJc,D.fSF,null)
D.drz=w([A.hY,A.bj],x.O)
D.aSr=new B.bT(A.z,0.5,A.x,null,0,D.drz,null,null)
D.eG5=new B.bT(A.z,0.5,A.x,null,0,D.aEn,null,null)
D.di0=w([A.c,A.bP],x.O)
D.eG7=new B.bT(A.z,0.5,A.x,null,0,D.di0,null,null)
D.dAD=w([A.bO,A.cy],x.O)
D.aSs=new B.bT(A.z,0.5,A.x,null,0,D.dAD,null,null)
D.cW_=w([A.c,A.bO],x.O)
D.eGc=new B.bT(A.nk,0.5,A.x,null,0,D.cW_,null,null)
D.byn=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dyx=w([A.fB,D.byn],x.O)
D.eGh=new B.bT(A.nk,0.5,A.x,null,0,D.dyx,null,null)
D.cP3=w([A.d_,A.ct],x.O)
D.eGi=new B.bT(A.z,0.5,A.x,null,0,D.cP3,null,null)
D.d2Z=w([A.fZ,A.aQ,A.d6],x.O)
D.eGl=new B.bT(A.nk,0.5,A.x,null,0,D.d2Z,null,null)
D.dsh=w([A.cy,M.mX],x.O)
D.eGm=new B.bT(A.nk,0.5,A.x,null,0,D.dsh,null,null)
D.eGr=new B.bT(A.z,0.5,A.x,null,0,D.aAz,null,null)
D.dBw=w([A.cy,A.i7],x.O)
D.eGz=new B.bT(A.z,0.5,A.x,null,0,D.dBw,null,null)
D.aSx=new B.aP(9,9)
D.eGH=new B.aP(1.4,1.4)
D.fgp=new B.a4(10,-8,18,-2)
D.fgq=new B.a4(14,-14,20,14)
D.fgs=new B.a4(20,-2,30,2)
D.fgx=new B.a4(4,-13,30,-3)
D.fgD=new B.a4(8,-7,12,7)
D.fgP=new B.a4(-12,12,12,19)
D.fgQ=new B.a4(-12,14,12,22)
D.fgR=new B.a4(-12,-22,12,8)
D.fgS=new B.a4(-12,-25,12,19)
D.fgT=new B.a4(-12,-26,12,-6)
D.fgU=new B.a4(-12,-4,12,14)
D.fgW=new B.a4(-14,20,14,24)
D.fgX=new B.a4(-14,6,14,10)
D.fgY=new B.a4(-14,-17,14,15)
D.fgZ=new B.a4(-14,-26,14,18)
D.fh_=new B.a4(-14,-4,14,20)
D.fh1=new B.a4(-15,-29,15,25)
D.fh2=new B.a4(-16,-16,16,16)
D.fh5=new B.a4(-16,-22,-9,18)
D.fh6=new B.a4(-16,-24,16,-10)
D.fh8=new B.a4(-16,-2,16,20)
D.fha=new B.a4(-18,20,18,24)
D.fhb=new B.a4(-18,-18,18,20)
D.fhc=new B.a4(-20,12,20,22)
D.fhd=new B.a4(-20,-28,20,26)
D.fhe=new B.a4(-22,14,22,18)
D.aT9=new B.a4(-22,-26,22,24)
D.fhf=new B.a4(-22,-3,22,3)
D.fhg=new B.a4(-22,-4,22,12)
D.fhi=new B.a4(-24,-12,10,22)
D.fhj=new B.a4(-24,-14,22,8)
D.fhk=new B.a4(-24,-6,24,20)
D.aTa=new B.a4(-24,-9,24,9)
D.fhl=new B.a4(-25,14,25,19)
D.fhm=new B.a4(-26,-14,14,8)
D.fhn=new B.a4(-26,-4,26,20)
D.fho=new B.a4(-26,-6,4,6)
D.aTb=new B.a4(-28,-13,28,13)
D.fhp=new B.a4(-28,-16,28,16)
D.fhq=new B.a4(-28,-16,28,8)
D.fhr=new B.a4(-28,-22,28,22)
D.fhs=new B.a4(-30,-12,30,14)
D.fht=new B.a4(-30,-14,0,14)
D.fhu=new B.a4(-30,-18,30,20)
D.fhv=new B.a4(-30,-28,30,14)
D.fhw=new B.a4(-30,-2,30,18)
D.fhx=new B.a4(-30,-4,30,18)
D.fhy=new B.a4(-32,-17,32,17)
D.fhz=new B.a4(-32,-28,32,18)
D.fhA=new B.a4(-33,-21,33,17)
D.fhB=new B.a4(-34,14,34,26)
D.aaB=new B.a4(-34,-18,34,18)
D.fhC=new B.a4(-34,-4,34,7)
D.fhD=new B.a4(-36,-24,36,20)
D.fhE=new B.a4(-38,-22,38,22)
D.fhG=new B.a4(-3,12,3,22)
D.fhH=new B.a4(-3,5,3,15)
D.fhL=new B.a4(-46,-34,46,28)
D.fhN=new B.a4(-48,-3,48,3)
D.fhQ=new B.a4(-6,18,24,24)
D.fhR=new B.a4(-6,5,6,12)
D.fhS=new B.a4(-6,-22,6,-15)
D.fhW=new B.a4(-9,-16,9,22)
D.fhX=new B.a4(-4.5,-24,4.5,-21.2)
D.fhZ=new B.a4(14,-9,17.5,9)
D.erR={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aUh=new B.di(D.erR,5,x.Q)
D.erj={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.flz=new B.di(D.erj,10,x.Q)
D.fnU=new B.au(24,44)
D.foh=new B.au(54,38)
D.fon=new B.au(66,38)
D.bg2=new B.fi(2,null,null,null,null,A.bh,null,null,null,null)
D.fpt=new B.a5(16,16,D.bg2,null)
D.aVm=new B.hN(3,12,12,0.82,null)
D.fCh=new B.G(!0,A.wj,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new B.ev("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fCh)
D.fHr=new B.G(!0,A.kO,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new B.ev("AI",null,null,A.cN,null,null,null,null,null,null,D.fHr)
D.fx8=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.G(!0,A.cs,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyW=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzr=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.cX(A.hO,A.dM,6)
D.dl8=w([D.fmi],B.aC("R<cX>"))
D.fAp=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dl8,null,null,null)
D.fAu=new B.G(!0,A.ew,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new B.G(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBa=new B.G(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new B.G(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new B.G(!0,A.bV,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCl=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.G(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDp=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aEJ,null,null,null)
D.fDz=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new B.G(!0,A.bA,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new B.G(!0,A.uC,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG0=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG9=new B.G(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGX=new B.G(!0,A.mY,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new B.G(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXy=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIi=new B.G(!0,A.iL,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIC=new B.G(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.G(!0,A.be,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLb=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLs=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLQ=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLT=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN2=new B.G(!0,A.uC,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNp=new B.G(!0,A.be,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAC=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNO=new B.C("\u26a0\ufe0f ",null,D.fAC,null,null,null,null,null,null,null,null,null)
D.fO0=new B.C("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B9,null,null,null,null,null,null,null,null,null)
D.fPF=new B.C("Pick one, then change it and see what happens.",null,A.B9,null,null,null,null,null,null,null,null,null)
D.fBM=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQF=new B.C("What do you want to invent? Type it below, or tap an idea.",null,D.fBM,null,null,null,null,null,null,null,null,null)
D.fFW=new B.G(!0,A.bZ,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR8=new B.C("Burnt out! Press Repair.",null,D.fFW,null,null,null,null,null,null,null,null,null)
D.fSg=new B.C("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fST=new B.C("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h7,null,null,null,null,null,null,null,null,null)
D.fTw=new B.C("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fWJ=new B.C("5G",null,A.aWT,null,null,null,null,null,null,null,null,null)
D.fXJ=new B.C("Pick how big the screen is on the board",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fIU=new B.G(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXV=new B.C("WHAT HAPPENS",null,D.fIU,null,null,null,null,null,null,null,null,null)
D.fZG=new B.C("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h_l=new B.C("Change the words and pictures on the three slabs.",null,A.B9,null,null,null,null,null,null,null,null,null)
D.h_y=new B.C("All the parts and wires will be removed.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h_T=new B.C("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h0s=new B.C("Tap the crank on the board again and again to spin it faster.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.h1H=new B.C("\ud83c\udfaf Challenges",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h2d=new B.C("Remove this part",null,U.aWu,null,null,null,null,null,null,null,null,null)
D.h2w=new B.C("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fIj=new B.G(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2O=new B.C("How the Lab works",null,D.fIj,null,null,null,null,null,null,null,null,null)
D.fz8=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h38=new B.C("Electronics Lab",null,D.fz8,null,null,null,null,A.a2,null,1,null,null)
D.h3c=new B.C("?",null,N.aY4,null,null,null,null,null,null,null,null,null)
D.h4y=new B.C("Ready-made circuits",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h5c=new B.C("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fLx=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8G=new B.C("\u26a0 There is no air here, so a parachute will not work.",null,D.fLx,null,null,null,null,null,null,null,null,null)
D.h9S=new B.C("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.aWs,null,null,null,null,null,null,null,null,null)
D.han=new B.C("NGMY",null,A.vT,null,null,null,null,null,null,null,null,null)
D.haA=new B.C("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Wm,null,null,null,null,null,null,null,null,null)
D.haZ=new B.C("Tap it to change its setting. Drag from the right dot to connect.",null,A.lY,null,null,null,null,null,null,null,null,null)
D.hc2=new B.C("TOOLBOX",null,A.abZ,null,null,null,null,null,null,null,null,null)
D.hAv=new B.bl("electronics-part-card",x.W)
D.hAx=new B.bl("device-learn-more",x.W)
D.hAC=new B.bl("device-remote",x.W)
D.hAH=new B.bl("device-picture",x.W)
D.hBa=new B.bl("electronics-part-about",x.W)
D.hBh=new B.bl("body-loading",x.W)
D.hBn=new B.bl("device-fullscreen",x.W)
D.hBK=new B.bl("core-protocol-back",x.W)
D.hBP=new B.bl("core-protocol-title-frame",x.W)})();(function staticFields(){$.hy0=null
$.hxX=null
$.hxY=null
$.hEu=0
$.i7_=B.T(x.N,B.aC("iD"))
$.i7y=B.T(x.N,B.aC("iD"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iEP","bHM",()=>{var v="led"
return B.a([C.aAA("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fuI(),v),C.aAA("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fuJ(),v),C.aAA("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fuK(),v),C.aAA("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fuR(),v),C.aAA("Not both","Make the light go OFF only when both switches are ON.",2,new C.fuS(),v),C.aAA("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fuT(),"buzzer")],B.aC("R<bdS>"))})
w($,"iFg","bHN",()=>B.a([C.Rq("UNIVERSE","Earth, space and gravity",A.Qj,A.aH,new C.fv8()),C.Rq("ELECTRONICS LAB","Batteries, wires, real circuits",A2.v0,A.aH,new C.fv9()),C.Rq("DISCOVERY LAB","Body Explorer: a real 3D human",D.bSu,A.be,new C.fva()),C.Rq("TOOLBOX","Converter, clock, games",H.aqI,A.cP,new C.fvb()),C.Rq("REACTION LAB","Wire parts together",A.DA,A.bv,new C.fvc()),C.Rq("SPARK PAINTER","Paint with light",A.HP,A.c4,new C.fvd()),C.Rq("ROCKET LANDER","Land softly on the pad",A.oO,A.aH,new C.fve()),C.Rq("TITLE ANIMATOR","Make a moving title",A.x5,A.bt,new C.fvf()),C.Rq("CIRCUIT LAB","Connect logic, learn it",A.a3S,A.cs,new C.fvg())],B.aC("R<bwb>")))
w($,"iH0","qH",()=>{var v,u,t=B.T(x.N,x.C)
for(v=0;v<76;++v){u=D.T_[v]
t.n(0,u.a,u)}return t})
w($,"iEQ","ajo",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fuU()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fuV()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fuW()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fuX()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fuY()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fuL()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fuM()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fuN()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fuO()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fuP()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fuQ())],B.aC("R<bdT>")))
w($,"iFi","hNR",()=>B.a([C.a2m("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c9,new C.fvo()),C.a2m("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bZ,A.bD,new C.fvp()),C.a2m("Breathe","Calm down in a minute","\ud83e\udee7",A.fK,A.cF,new C.fvq()),C.a2m("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b8,new C.fvr()),C.a2m("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fvs()),C.a2m("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bi,new C.fvt()),C.a2m("Tip & Split","Share the bill","\ud83e\uddfe",A.be,A.b2,new C.fvu()),C.a2m("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bh,A.aD,new C.fvv())],B.aC("R<bxv>")))})()};
(a=>{a["Cpx1Hs8/VbzgT2YyyJx6AaBCplE="]=a.current})($__dart_deferred_initializers__);